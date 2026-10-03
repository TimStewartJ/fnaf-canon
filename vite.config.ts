import { createReadStream, existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, constants as zlib, gzipSync } from 'node:zlib'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin, type ResolvedConfig } from 'vite'

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

/* ── Delivery ──────────────────────────────────────────────────────────────────────
 * The site is served by `vite preview` from dist/, which sends every file as it is on disk and
 * marks nothing as cacheable. This plugin puts that right without another server or dependency:
 *
 *  - Text files (script, styles, HTML, SVG, JSON) go out compressed, brotli or gzip as the
 *    browser accepts. The build writes a .br and a .gz beside each one, so the server only picks
 *    a file; a dist/ built without them is compressed on first request and kept in memory.
 *  - Files under /assets/ carry a hash of their content in their name, so they can never change:
 *    they are cacheable for a year and marked immutable. index.html is always revalidated (it is
 *    what names the current assets). Everything else (the screenshots, the icons) is fresh for a
 *    day and may be reused while it is revalidated for a week.
 *  - Every response carries an ETag, so a revalidation that finds nothing new costs a few bytes.
 */
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff',
}
/** Worth compressing: text. Images and fonts are compressed formats already. */
const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.map', '.svg', '.txt', '.xml', '.webmanifest'])
const HASHED = /[\\/]assets[\\/].+-[\w-]{8}\.\w+$/
const YEAR = 'public, max-age=31536000, immutable'
const DAY = 'public, max-age=86400, stale-while-revalidate=604800'

type Encoding = 'br' | 'gzip'
const SUFFIX: Record<Encoding, string> = { br: '.br', gzip: '.gz' }
function compress(data: Buffer, encoding: Encoding, best: boolean): Buffer {
  return encoding === 'br'
    ? brotliCompressSync(data, { params: { [zlib.BROTLI_PARAM_QUALITY]: best ? 11 : 5, [zlib.BROTLI_PARAM_SIZE_HINT]: data.length } })
    : gzipSync(data, { level: best ? 9 : 6 })
}
function filesUnder(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? filesUnder(join(dir, d.name)) : [join(dir, d.name)]))
}

function delivery(): Plugin {
  let config: ResolvedConfig
  return {
    name: 'fca-delivery',
    configResolved(resolved) { config = resolved },

    // After a build: a .br and a .gz beside every text file that is worth it.
    closeBundle() {
      if (config.command !== 'build' || config.build.ssr) return
      const dist = resolve(config.root, config.build.outDir)
      if (!existsSync(dist)) return
      let plain = 0, packed = 0
      for (const file of filesUnder(dist)) {
        if (!COMPRESSIBLE.has(extname(file).toLowerCase())) continue
        const data = readFileSync(file)
        if (data.length < 1024) continue
        const br = compress(data, 'br', true)
        writeFileSync(file + SUFFIX.br, br)
        writeFileSync(file + SUFFIX.gzip, compress(data, 'gzip', true))
        plain += data.length
        packed += br.length
      }
      config.logger.info(`compressed for delivery: ${(plain / 1024).toFixed(0)} kB of text is ${(packed / 1024).toFixed(0)} kB as brotli`)
    },

    configurePreviewServer(server) {
      const dist = resolve(server.config.root, server.config.build.outDir)
      const base = server.config.base
      // Compressed on request, for a dist/ that has no .br or .gz beside a file: kept per version of the file.
      const made = new Map<string, Buffer>()

      const send = (req: IncomingMessage, res: ServerResponse, file: string): void => {
        const stat = statSync(file)
        const ext = extname(file).toLowerCase()
        const accepts = String(req.headers['accept-encoding'] ?? '')
        const encoding: Encoding | null = !COMPRESSIBLE.has(ext) || stat.size < 1024 ? null
          : /\bbr\b(?!\s*;\s*q=0(?:\.0*)?(?:\s*,|$))/.test(accepts) ? 'br'
          : /\bgzip\b(?!\s*;\s*q=0(?:\.0*)?(?:\s*,|$))/.test(accepts) ? 'gzip' : null
        const etag = `W/"${stat.size.toString(36)}-${Math.round(stat.mtimeMs).toString(36)}${encoding ? `-${encoding}` : ''}"`
        res.setHeader('Content-Type', MIME[ext])
        res.setHeader('Cache-Control', ext === '.html' ? 'no-cache' : HASHED.test(file) ? YEAR : DAY)
        res.setHeader('ETag', etag)
        // Added to whatever is there already (the preview server's CORS layer sets "Origin").
        if (COMPRESSIBLE.has(ext)) res.setHeader('Vary', [String(res.getHeader('Vary') ?? ''), 'Accept-Encoding'].filter(Boolean).join(', '))
        if (req.headers['if-none-match'] === etag) { res.statusCode = 304; res.end(); return }

        let body: Buffer | null = null
        if (encoding) {
          const ready = file + SUFFIX[encoding]
          const key = `${ready}:${stat.size}:${stat.mtimeMs}`
          // The file the build wrote, unless it is older than what it was made from.
          if (existsSync(ready) && statSync(ready).mtimeMs >= stat.mtimeMs - 1000) body = readFileSync(ready)
          else {
            body = made.get(key) ?? compress(readFileSync(file), encoding, false)
            if (!made.has(key)) { if (made.size > 400) made.clear(); made.set(key, body) }
          }
          res.setHeader('Content-Encoding', encoding)
        }
        res.setHeader('Content-Length', body ? body.length : stat.size)
        res.statusCode = 200
        if (req.method === 'HEAD') { res.end(); return }
        if (body) { res.end(body); return }
        createReadStream(file).on('error', () => res.destroy()).pipe(res)
      }

      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') { next(); return }
        let path: string
        try { path = decodeURIComponent((req.url ?? '/').split(/[?#]/)[0]) } catch { next(); return }
        if (base !== '/' && path.startsWith(base)) path = '/' + path.slice(base.length)
        if (path.endsWith('/')) path += 'index.html'
        const file = join(dist, normalize(path))
        // Only real files inside dist/, of a kind this knows how to label. Anything else is Vite's to answer.
        if (!file.startsWith(dist + sep) || !(extname(file).toLowerCase() in MIME)) { next(); return }
        try {
          if (!statSync(file).isFile()) { next(); return }
          send(req, res, file)
        } catch {
          next()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageSizes(), delivery()],
  build: {
    // The evidence records are one chunk of about 1.3 MB (some 210 kB as brotli) because the data
    // store loads them all at start. That is the archive's content, not code that could be split.
    chunkSizeWarningLimit: 1400,
    rolldownOptions: {
      output: {
        // Named, stable chunks. The framework, the evidence records, the theory's text and the rest
        // of the data change on different schedules from the interface code and from each other, so
        // each keeps its own cache entry across deploys, and the browser fetches them side by side.
        // (The data store imports all of the data when it loads, so none of these can wait for a
        // route: that would take a change to src/data/store.ts.)
        codeSplitting: {
          groups: [
            { name: 'vendor', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
            { name: 'evidence', test: /src[\\/]data[\\/]evidence[\\/]/ },
            { name: 'theory-text', test: /src[\\/]data[\\/](chapters[\\/]|theory\.ts)/ },
            { name: 'archive-data', test: /src[\\/]data[\\/](people|places|relations|timeline|familyTrees|locations|deaths|dates|credits[\\/]|games\.json|gameMeta|model|store|theoryText)/ },
          ],
        },
      },
    },
  },
})
