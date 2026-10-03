import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const IMG_DIR = fileURLToPath(new URL('./public/img', import.meta.url))
const SIZES_ID = 'virtual:image-sizes'
const SIZES_RESOLVED = '\0' + SIZES_ID

/** Pixel size of a PNG, JPEG, GIF or WebP file, read from its header. */
function pixelSize(b: Buffer): [number, number] | null {
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)]
  if (b.length > 10 && b.toString('latin1', 0, 3) === 'GIF') return [b.readUInt16LE(6), b.readUInt16LE(8)]
  if (b.length > 30 && b.toString('latin1', 0, 4) === 'RIFF' && b.toString('latin1', 8, 12) === 'WEBP') {
    const kind = b.toString('latin1', 12, 16)
    if (kind === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
    if (kind === 'VP8L') { const n = b.readUInt32LE(21); return [(n & 0x3fff) + 1, ((n >> 14) & 0x3fff) + 1] }
    if (kind === 'VP8X') return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1]
    return null
  }
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i += 1; continue }
      const marker = b[i + 1]
      if (marker === 0xff) { i += 1; continue }
      if (marker >= 0xd0 && marker <= 0xd9) { i += 2; continue }
      const isFrame = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc
      if (isFrame) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]
      i += 2 + b.readUInt16BE(i + 2)
    }
  }
  return null
}

/**
 * `virtual:image-sizes` maps each file in public/img to [width, height], so figures can reserve
 * their space before the image loads (no layout shift while reading or after an anchor jump).
 */
function imageSizes(): Plugin {
  return {
    name: 'fca-image-sizes',
    resolveId(id) { return id === SIZES_ID ? SIZES_RESOLVED : undefined },
    load(id) {
      if (id !== SIZES_RESOLVED) return undefined
      const sizes: Record<string, [number, number]> = {}
      for (const file of readdirSync(IMG_DIR).sort()) {
        const size = pixelSize(readFileSync(join(IMG_DIR, file)))
        if (size && size[0] > 0 && size[1] > 0) sizes[file] = size
      }
      return `export default ${JSON.stringify(sizes)}`
    },
    configureServer(server) {
      const refresh = (file: string) => {
        if (!file.startsWith(IMG_DIR)) return
        const mod = server.moduleGraph.getModuleById(SIZES_RESOLVED)
        if (!mod) return
        server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageSizes()],
  build: {
    // The evidence records are one chunk of about 660 kB (140 kB compressed) because the data store
    // loads them all at start. That is the archive's content, not code that could be split further.
    chunkSizeWarningLimit: 750,
    rolldownOptions: {
      output: {
        // Named, stable chunks: the framework and the evidence records change on different
        // schedules from the interface code, so each keeps its own cache entry across deploys.
        codeSplitting: {
          groups: [
            { name: 'vendor', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
            { name: 'evidence', test: /src[\\/]data[\\/]evidence[\\/]/ },
          ],
        },
      },
    },
  },
})
