/**
 * Provided by the `fca-image-sizes` plugin in vite.config.ts: file name in public/img → [width, height],
 * and, for each file that has a small copy in public/thumb, the copy's own [width, height].
 */
declare module "virtual:image-sizes" {
  const sizes: Readonly<Record<string, readonly [number, number]>>;
  export default sizes;
  export const thumbs: Readonly<Record<string, readonly [number, number]>>;
}
