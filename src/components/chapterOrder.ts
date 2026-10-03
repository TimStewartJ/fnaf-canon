/**
 * The reading order of the theory, and the one place chapter numbers come from.
 *
 * Reading order is by part (in theoryParts order), then by the chapter's position in theory.ts.
 * That is not the order of the theory array: a chapter can sit late in the file and belong to an
 * early part. Every number a reader sees (cover, chapter pages, rail, home, search) must come from
 * `chapterNumber`, never from an array index, or the same chapter shows two different numbers.
 */
import type { TheoryPart, TheorySection } from "../data/schema";
import { theory, theoryParts } from "../data/store";

export interface PartGroup {
  /** null for chapters that name no part (or an unknown one). */
  part: TheoryPart | null;
  /** 1-based part number, shown as a roman numeral. */
  n: number;
  chapters: TheorySection[];
}

/** Groups chapters under their parts, in part order. Chapters with no known part come last. */
export function groupByPart(chapters: readonly TheorySection[], parts: readonly TheoryPart[]): PartGroup[] {
  const known = new Set(parts.map((p) => p.id));
  const groups: PartGroup[] = parts.map((part, i) => ({ part, n: i + 1, chapters: chapters.filter((s) => s.part === part.id) }));
  const rest = chapters.filter((s) => !s.part || !known.has(s.part));
  if (rest.length) groups.push({ part: null, n: parts.length + 1, chapters: rest });
  return groups.filter((g) => g.chapters.length);
}

export const partGroups: PartGroup[] = groupByPart(theory, theoryParts);
/** Every chapter in reading order. */
export const readingOrder: TheorySection[] = partGroups.flatMap((g) => g.chapters);
const numbers = new Map(readingOrder.map((s, i) => [s.id, i + 1]));
/** The chapter's number in reading order, or 0 for an unknown id. */
export const chapterNumber = (id: string): number => numbers.get(id) ?? 0;
