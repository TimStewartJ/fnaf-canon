/**
 * Pure helpers for the four essay pages (The Box, Theorists & Scott, Scott & Faith, Method).
 * No components and no hooks here, so the functions can be exercised outside the app.
 */
import type { Confidence } from "../../data/schema";
import { citationsInText } from "../../data/theoryText";
import { evidenceById } from "../../data/store";
import { plainText, plural } from "../../components/ui";

export const pad2 = (n: number): string => String(n).padStart(2, "0");

/** Evidence ids cited in RichText strings, in reading order, each listed once. */
export function citedIn(...texts: (string | undefined)[]): string[] {
  return [...new Set(texts.flatMap((t) => (t ? citationsInText(t) : [])))];
}

/**
 * The ids that name a record, each once, in the order given. A page primes its citation numbers
 * with this list and prints the same list as its sources, so the two always agree.
 */
export function knownRecords(ids: readonly string[]): string[] {
  return [...new Set(ids)].filter((id) => evidenceById.has(id));
}

/** Rough reading time in minutes for some RichText. */
export function readingMinutes(texts: readonly string[]): number {
  const words = texts.map(plainText).join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

/** "a", "a and b", "a, b and c". */
export function sentenceList(parts: readonly string[]): string {
  if (parts.length < 2) return parts[0] ?? "";
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

/** The first four-digit year in a date label such as "2015-07-23", "c. 2011" or "2013–2014". */
export const yearOf = (date: string): string | undefined => date.match(/\d{4}/)?.[0];

/** "2015 to 2024" for a list of date labels, or the one year when they share it. Empty when none has a year. */
export function yearSpan(dates: readonly string[]): string {
  const years = dates.map(yearOf).filter((y): y is string => !!y).sort();
  if (!years.length) return "";
  const first = years[0], last = years[years.length - 1];
  return first === last ? first : `${first} to ${last}`;
}

/** "9 dated steps, 2015 to 2024": a count with the years it covers, when the dates carry years. */
export function countOverYears(n: number, one: string, dates: readonly string[], many?: string): string {
  const span = yearSpan(dates);
  return span ? `${plural(n, one, many)}, ${span}` : plural(n, one, many);
}

/** Header facts such as "9 dated steps": one for each list that has something in it. */
export const facts = (...items: [n: number, one: string, many?: string][]): string[] =>
  items.filter(([n]) => n > 0).map(([n, one, many]) => plural(n, one, many));

/** True when a free-text confidence is exactly one of the shared scale's values, so it can be drawn as a mark. */
export const isConfidence = (c: string | undefined): c is Confidence => c === "high" || c === "medium" || c === "low";

/** Tallies items by a key, keeping first-seen order. */
export function tally<T, K extends string>(items: readonly T[], key: (item: T) => K): Map<K, number> {
  const out = new Map<K, number>();
  for (const it of items) out.set(key(it), (out.get(key(it)) ?? 0) + 1);
  return out;
}

/** The record among `ids` that an image file belongs to, if any (so the image can link to it). */
export function recordOfImage(file: string, ids: readonly string[]): string | undefined {
  return ids.find((id) => evidenceById.get(id)?.image === file);
}

/**
 * Exhibits for each answer of an essay: the images of the records the answer cites. An image is
 * shown once per page (the first answer to cite it gets it), never when the page already shows it
 * (`skip`, for the header's image), and at most `max` per answer.
 */
export function answerExhibits(bodies: readonly (readonly string[])[], skip: readonly string[] = [], max = 2): { id: string; file: string }[][] {
  const used = new Set(skip);
  return bodies.map((body) => {
    const out: { id: string; file: string }[] = [];
    for (const id of citedIn(...body)) {
      const file = evidenceById.get(id)?.image;
      if (!file || used.has(file) || out.length >= max) continue;
      used.add(file);
      out.push({ id, file });
    }
    return out;
  });
}

/* ── The essays themselves ────────────────────────────────────────────────────────── */

/** The four long-form pages, for the list at the foot of each. Page furniture: routes and words chosen here. */
export const ESSAYS: readonly { to: string; title: string; desc: string }[] = [
  { to: "/box", title: "The Box", desc: "What was in FNaF4’s locked box, and why it never opened." },
  { to: "/community", title: "Theorists & Scott", desc: "The best-known fan theories, scored against the evidence." },
  { to: "/author", title: "Scott & Faith", desc: "The author’s Christian background, and what it changes." },
  { to: "/method", title: "Method", desc: "What counts as evidence, and how firm each claim is." },
];

/** Element id of the section that argues answer number `i` (from 0). */
export const answerId = (i: number): string => `answer-${i + 1}`;

/** Element id of the "records cited on this page" list at the foot of an essay. */
export const SOURCES_ID = "essay-sources";
