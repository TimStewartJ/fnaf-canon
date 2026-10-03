import sizes from "virtual:image-sizes";

/** Route builders, so pages never hand-assemble URLs. */
export const chapterPath = (id: string) => `/theory/${id}`;
export const evidencePath = (id: string) => `/evidence/${id}`;
export const personPath = (id: string) => `/people/${id}`;
export const placePath = (id: string) => `/places/${id}`;
export const sourcePath = (id: string) => `/sources/${id}`;
export const timelineEventPath = (id: string) => `/timeline?e=${id}`;
/** Absolute URL of an image in public/img. */
export const imgUrl = (file: string) => `${import.meta.env.BASE_URL}img/${file}`;
/**
 * Pixel size of an image in public/img, when known. Spread it onto an <img> that has `height: auto`
 * so the browser reserves the right space before the file loads: `<img src={imgUrl(f)} {...imgSize(f)} />`.
 */
export const imgSize = (file: string): { width: number; height: number } | undefined => {
  const s = sizes[file];
  return s ? { width: s[0], height: s[1] } : undefined;
};
