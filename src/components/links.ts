/** Route builders, so pages never hand-assemble URLs. */
export const chapterPath = (id: string) => `/theory/${id}`;
export const evidencePath = (id: string) => `/evidence/${id}`;
export const personPath = (id: string) => `/people/${id}`;
export const placePath = (id: string) => `/places/${id}`;
export const sourcePath = (id: string) => `/sources/${id}`;
export const timelineEventPath = (id: string) => `/timeline?e=${id}`;
/** Absolute URL of an image in public/img. */
export const imgUrl = (file: string) => `${import.meta.env.BASE_URL}img/${file}`;
