/**
 * Where ((chapter-id)) links point. By default they resolve against the real theory; the review
 * fixture swaps in its own chapters by providing this context.
 */
import { createContext, useContext } from "react";
import { theoryById } from "../data/store";
import { chapterPath } from "./links";

export interface ChapterResolver {
  find(id: string): { title: string } | undefined;
  pathOf(id: string): string;
}

const DEFAULT: ChapterResolver = { find: (id) => theoryById.get(id), pathOf: chapterPath };

export const ChapterResolverContext = createContext<ChapterResolver>(DEFAULT);
export const useChapterResolver = (): ChapterResolver => useContext(ChapterResolverContext);
