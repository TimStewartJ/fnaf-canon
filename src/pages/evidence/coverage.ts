/**
 * Where each evidence record sits in the model: cited, filed as further evidence, set aside as
 * outside the story, or not yet accounted for. Worked out once from the store, with the same rules
 * as the coverage report in scripts/validate.ts, so the numbers on the page match the validator.
 * No components here.
 */
import type { Evidence, OutsideStoryGroup, StoryBeat } from "../../data/schema";
import { citationsIn, evidenceFiledUnder, outsideStory, storyline, theory } from "../../data/store";
import { beatCitations } from "../../data/theoryText";
import { count, plural } from "../../components/typography";

export type Place = "cited" | "filed" | "outside" | "none";

/** In the order they are always listed and drawn. */
export const PLACES: readonly Place[] = ["cited", "filed", "outside", "none"];

export const PLACE: Record<Place, { word: string; short: string; help: string }> = {
  cited: { word: "Cited", short: "Cited", help: "A chapter cites the record or lists it as evidence that pushes back, or the storyline cites it" },
  filed: { word: "Filed as further evidence", short: "Filed", help: "A chapter files the record under its thread without citing it in the text" },
  outside: { word: "Outside the story", short: "Outside", help: "Deliberately given no story weight; the theory says why" },
  none: { word: "Not yet accounted for", short: "Not yet", help: "No chapter cites or files the record, and it is not listed as outside the story" },
};

export const isPlace = (v: string): v is Place => v === "cited" || v === "filed" || v === "outside" || v === "none";

const cited = new Set<string>();
const filed = new Set<string>();
const outside = new Map<string, OutsideStoryGroup>();
const beats = new Map<string, { beat: StoryBeat; n: number }[]>();

for (const s of theory) for (const id of citationsIn(s)) cited.add(id);
storyline.forEach((beat, i) => {
  for (const id of beatCitations(beat)) {
    cited.add(id);
    beats.set(id, [...(beats.get(id) ?? []), { beat, n: i + 1 }]);
  }
});
for (const s of theory) for (const id of evidenceFiledUnder(s)) if (!cited.has(id)) filed.add(id);
for (const g of outsideStory) for (const id of g.ids) if (!outside.has(id)) outside.set(id, g);

/** A record that is both used by a chapter and listed as outside the story counts as used. */
export function placeOf(id: string): Place {
  return cited.has(id) ? "cited" : filed.has(id) ? "filed" : outside.has(id) ? "outside" : "none";
}

/** The "outside the story" group that lists the record, if any. */
export const outsideGroupOf = (id: string): OutsideStoryGroup | undefined => outside.get(id);

/** Beats of the short story that cite the record, with their 1-based number. */
export const beatsCiting = (id: string): { beat: StoryBeat; n: number }[] => beats.get(id) ?? [];

export type Tally = Record<Place, number> & { total: number };

export function tally(records: readonly Evidence[]): Tally {
  const t: Tally = { cited: 0, filed: 0, outside: 0, none: 0, total: records.length };
  for (const e of records) t[placeOf(e.id)] += 1;
  return t;
}

/** Records the model has dealt with one way or another. */
export const accounted = (t: Tally): number => t.total - t.none;

/** A whole-number percentage that only says 0 or 100 when it is exactly that. */
export function percent(part: number, total: number): number {
  if (total <= 0 || part <= 0) return 0;
  if (part >= total) return 100;
  return Math.min(99, Math.max(1, Math.round((part / total) * 100)));
}

/** "1,041": a count as the whole interface prints it (components/typography.ts). */
export { count };

/** "1 record", "1,041 records": the shared `plural`, with the noun this cluster counts most. */
export const records = (n: number, noun = "record"): string => plural(n, noun);
