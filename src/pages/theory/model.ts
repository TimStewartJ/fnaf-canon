/**
 * Reading order and derived facts for the theory. Pure helpers; no components.
 *
 * Reading order is by part (in theoryParts order), then by the chapter's position in theory.ts.
 * Chapters are numbered in that order, so the number a reader sees always counts up through the book.
 */
import type { TheoryBlock, TheorySection } from "../../data/schema";
import { partGroups, readingOrder, type PartGroup } from "../../components/chapterOrder";
import { evidenceById, theoryById } from "../../data/store";
import { blockEvidenceIds, blockTexts, citationsInText } from "../../data/theoryText";
import { excerpt, plainText } from "../../components/richTextPlain";

// The ordering itself lives in components/chapterOrder.ts so the search palette shares it.
export { groupByPart, partGroups, chapterNumber, type PartGroup } from "../../components/chapterOrder";
/** Every chapter in reading order. */
export const ordered: TheorySection[] = readingOrder;
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

/** A heading inside a chapter: its words, and the anchor it can be linked by. */
export interface SectionHead { id: string; text: string; /** One of the parts every chapter closes with, not a heading of its own. */ closing?: boolean }

/** The anchors of the parts a chapter closes with. */
export const CLOSING = { pushback: "pushback", changes: "changes", alongside: "read-alongside", sources: "sources" } as const;

/**
 * The parts a chapter closes with, after its own sections: what pushes back, what would change
 * it, what to read alongside, and its sources; each only where the chapter has it. The chapter's
 * contents list them after its headings, so the list goes on saying where the reader is to the
 * foot of the page (it used to mark the last section of the argument all the way down).
 */
export function closingHeads(s: TheorySection): SectionHead[] {
  const out: SectionHead[] = [];
  if ((s.counterEvidence ?? []).some((id) => evidenceById.has(id)) || s.tension) out.push({ id: CLOSING.pushback, text: "What pushes back", closing: true });
  if (s.changesIf) out.push({ id: CLOSING.changes, text: "What would change this", closing: true });
  if ((s.seeAlso ?? []).some((id) => theoryById.has(id))) out.push({ id: CLOSING.alongside, text: "Read alongside", closing: true });
  out.push({ id: CLOSING.sources, text: "Sources", closing: true });
  return out;
}

/**
 * The headings of a chapter, in order, each with an anchor that is unique on the page
 * ("s-the-locked-box"). The chapter's contents list and the headings themselves both come from
 * this, so a link to a section always has somewhere to land.
 */
export function chapterHeads(s: TheorySection): SectionHead[] {
  const seen = new Map<string, number>();
  const out: SectionHead[] = [];
  for (const b of s.body) {
    if (typeof b === "string" || b.kind !== "heading") continue;
    const text = plainText(b.text);
    const slug = `s-${text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/['\u2018\u2019]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section"}`;
    const n = (seen.get(slug) ?? 0) + 1;
    seen.set(slug, n);
    out.push({ id: n > 1 ? `${slug}-${n}` : slug, text });
  }
  return out;
}

/** Words in a piece of RichText, for reading times. */
const wordCount = (texts: string[]): number => texts.map(plainText).join(" ").split(/\s+/).filter(Boolean).length;
/** Minutes to read some RichText at an easy pace; never less than one. */
export const minutesFor = (texts: string[]): number => Math.max(1, Math.round(wordCount(texts) / 230));

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
  return minutesFor([s.answer ?? "", ...s.body.flatMap((b) => (typeof b === "string" ? [b] : blockTexts(b))), s.tension ?? "", s.changesIf ?? ""]);
}

// Reading progress (what has been read, and where "Continue" leads) lives in components/reading.ts: the home page and the menu use it too.
export { useReadingProgress, useContinue, saveReadingPlace } from "../../components/reading";
