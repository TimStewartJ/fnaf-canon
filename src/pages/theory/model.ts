/**
 * Reading order and derived facts for the theory. Pure helpers; no components.
 *
 * Reading order is by part (in theoryParts order), then by the chapter's position in theory.ts.
 * Chapters are numbered in that order, so the number a reader sees always counts up through the book.
 */
import type { TheoryBlock, TheoryPart, TheorySection } from "../../data/schema";
import { theory, theoryParts } from "../../data/store";
import { blockEvidenceIds, blockTexts, citationsInText } from "../../data/theoryText";
import { excerpt, plainText } from "../../components/richTextPlain";
import { useCallback, useMemo } from "react";
import { useStored } from "../../components/hooks";

export interface PartGroup {
  /** null for chapters that name no part (or an unknown one). */
  part: TheoryPart | null;
  /** 1-based part number, shown as a roman numeral. */
  n: number;
  chapters: TheorySection[];
}

export function groupByPart(chapters: readonly TheorySection[], parts: readonly TheoryPart[]): PartGroup[] {
  const known = new Set(parts.map((p) => p.id));
  const groups: PartGroup[] = parts.map((part, i) => ({ part, n: i + 1, chapters: chapters.filter((s) => s.part === part.id) }));
  const rest = chapters.filter((s) => !s.part || !known.has(s.part));
  if (rest.length) groups.push({ part: null, n: parts.length + 1, chapters: rest });
  return groups.filter((g) => g.chapters.length);
}

export const partGroups: PartGroup[] = groupByPart(theory, theoryParts);
/** Every chapter in reading order. */
export const ordered: TheorySection[] = partGroups.flatMap((g) => g.chapters);
const numbers = new Map(ordered.map((s, i) => [s.id, i + 1]));
export const chapterNumber = (id: string): number => numbers.get(id) ?? 0;
export const partOfChapter = (id: string): PartGroup | undefined => partGroups.find((g) => g.chapters.some((s) => s.id === id));
export function neighbours(id: string): { prev?: TheorySection; next?: TheorySection } {
  const i = ordered.findIndex((s) => s.id === id);
  return i < 0 ? {} : { prev: ordered[i - 1], next: ordered[i + 1] };
}

const ROMAN: [number, string][] = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
export function roman(n: number): string {
  let out = "";
  for (const [v, s] of ROMAN) while (n >= v) { out += s; n -= v; }
  return out;
}
export const pad2 = (n: number) => String(n).padStart(2, "0");

/** Evidence ids a block cites, in the order a reader meets them. */
function blockCitations(block: TheoryBlock): string[] {
  if (typeof block === "string") return citationsInText(block);
  if (block.kind === "figure") return [...(block.caption ? citationsInText(block.caption) : []), ...blockEvidenceIds(block)];
  return [...blockTexts(block).flatMap(citationsInText), ...blockEvidenceIds(block)];
}

/**
 * Every record a chapter cites, in reading order: answer, hero caption, body, the records that push
 * back, the tension text, then "what would change this". This order primes the chapter's citation
 * numbers, so marker 1 is the first one a reader meets and the source list reads top to bottom.
 */
export function chapterCitations(s: TheorySection): string[] {
  const ids = [
    ...(s.answer ? citationsInText(s.answer) : []),
    ...(s.hero?.caption ? citationsInText(s.hero.caption) : []),
    ...s.body.flatMap(blockCitations),
    ...(s.counterEvidence ?? []),
    ...(s.tension ? citationsInText(s.tension) : []),
    ...(s.changesIf ? citationsInText(s.changesIf) : []),
  ];
  return [...new Set(ids)];
}

const norm = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

/** The chapter's question, unless it only repeats the title. */
export function distinctQuestion(s: TheorySection): string | undefined {
  return s.question && norm(s.question) !== norm(s.title) ? s.question : undefined;
}

/**
 * What to show for a chapter in a list of contents: its answer when it has one, otherwise the
 * opening of its first paragraph (marked as derived so it can be set more quietly).
 */
export function chapterGist(s: TheorySection): { text: string; derived: boolean } {
  if (s.answer) return { text: plainText(s.answer), derived: false };
  const first = s.body.find((b): b is string => typeof b === "string");
  return { text: first ? excerpt(first, 200) : "", derived: true };
}

/** Rough reading time in minutes for a chapter's prose. */
export function readingMinutes(s: TheorySection): number {
  const words = [s.answer ?? "", ...s.body.flatMap((b) => (typeof b === "string" ? [b] : blockTexts(b))), s.tension ?? "", s.changesIf ?? ""]
    .map(plainText).join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

/* ── Reading progress, remembered on this device ─────────────────── */
const NONE: string[] = [];

/** Chapters the reader has finished, and the last one they opened. The setters are stable. */
export function useReadingProgress() {
  const [read, setRead] = useStored<string[]>("fca:read", NONE);
  const [last, setLast] = useStored<string | null>("fca:last", null);
  const markRead = useCallback((id: string) => setRead((prev) => (prev.includes(id) ? prev : [...prev, id])), [setRead]);
  const markOpened = useCallback((id: string) => setLast(id), [setLast]);
  const readSet = useMemo(() => new Set(read), [read]);
  return { read: readSet, last, markRead, markOpened };
}
