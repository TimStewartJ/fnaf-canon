/**
 * Words used across the interface for the archive's scales and kinds. No components here.
 */
import type { Certainty, Confidence, DateKind, SourceKind, Status } from "../data/schema";
import { DEATH_KIND } from "../data/deaths";
import { plural } from "./typography";

export const KIND_LABEL: Record<SourceKind | string, string> = {
  "phone-call": "Phone call", "audio-tape": "Audio tape", minigame: "Minigame", cutscene: "Cutscene",
  dialogue: "Dialogue", text: "In-game text", environment: "Environment", mechanic: "Gameplay mechanic",
  ending: "Ending", hidden: "Hidden / secret", teaser: "Teaser", "scott-statement": "Scott statement",
};
export const kindLabel = (kind: string): string => (KIND_LABEL as Record<string, string>)[kind] ?? kind;

/**
 * The firmness grammar. Certainty, status and confidence are three scales with one shape:
 * firm, partial, tentative. They share one glyph (filled, half, hollow) and one line style
 * (solid, dashed, dotted), and are told apart by their words. Where a mark stands without its
 * word (a source chip, a chapter in the rail), the page offers the key: <MarksKey>.
 */
export type Level = "firm" | "partial" | "tentative";
export type FirmnessScale = "certainty" | "status" | "confidence";
export interface FirmnessInfo { level: Level; word: string; short: string; help: string }

export const CERTAINTY: Record<Certainty, FirmnessInfo> = {
  stated: { level: "firm", word: "Stated", short: "Stated", help: "Said or written outright in the source" },
  shown: { level: "partial", word: "Shown", short: "Shown", help: "Depicted in the source, not put into words" },
  implied: { level: "tentative", word: "Implied", short: "Implied", help: "A small, defensible reading of the source" },
};
export const STATUS: Record<Status, FirmnessInfo> = {
  canon: { level: "firm", word: "Canon", short: "Canon", help: "Directly established by the cited records" },
  strong: { level: "partial", word: "Strong inference", short: "Strong", help: "Forced by several records together" },
  theory: { level: "tentative", word: "Theory", short: "Theory", help: "This archive’s reconstruction where the games leave a gap" },
};
export const CONFIDENCE: Record<Confidence, FirmnessInfo> = {
  high: { level: "firm", word: "High confidence", short: "High", help: "The main claim rests on records that say or show it" },
  medium: { level: "partial", word: "Medium confidence", short: "Medium", help: "Probable, but it needs an inference the records do not state" },
  low: { level: "tentative", word: "Low confidence", short: "Low", help: "The best available reading; the records allow others" },
};
export const SCALE_NAME: Record<FirmnessScale, string> = { certainty: "Certainty", status: "Support", confidence: "Confidence" };
/** What each scale answers, as the heading of a key or a legend. One wording, used by every key on the site. */
export const SCALE_ASKS: Record<FirmnessScale | "date", string> = {
  certainty: "How directly a record says it",
  status: "How firm a link or an event is",
  confidence: "How sure a chapter is",
  date: "How a date is known",
};

const FALLBACK: FirmnessInfo = { level: "tentative", word: "Unknown", short: "Unknown", help: "" };
export function firmness(scale: FirmnessScale, value: string): FirmnessInfo {
  const table = scale === "certainty" ? CERTAINTY : scale === "status" ? STATUS : CONFIDENCE;
  return (table as Record<string, FirmnessInfo>)[value] ?? { ...FALLBACK, word: value, short: value };
}
/** Maps any value of the three scales to its level, for CSS hooks such as data-level. */
export const levelOf = (value: string): Level =>
  value === "stated" || value === "canon" || value === "high" ? "firm"
  : value === "shown" || value === "strong" || value === "medium" ? "partial" : "tentative";

/** Kept for pages that only need the sentence. */
export const CERTAINTY_HELP: Record<string, string> = Object.fromEntries(Object.entries(CERTAINTY).map(([k, v]) => [k, v.help]));
export const STATUS_HELP: Record<Status, string> = { canon: STATUS.canon.help, strong: STATUS.strong.help, theory: STATUS.theory.help };

/** How a displayed date is known. Not a grade of a claim, so it has marks of its own (square, uncoloured: see DateGlyph). */
export const DATE_KIND: Record<DateKind, { label: string; help: string }> = {
  printed: { label: "Printed", help: "The date is printed or spoken in a game or in Scott’s words" },
  derived: { label: "Derived", help: "Calculated from printed dates and stated intervals" },
  estimated: { label: "Estimated", help: "This archive’s best estimate from the surrounding evidence" },
  relative: { label: "Relative", help: "Only placed relative to other events" },
  teaser: { label: "Teaser", help: "Shown in an official teaser. Where a document in the game agrees, the note says so" },
  unknown: { label: "Undated", help: "The sources give no date" },
};
export const DATE_KINDS: DateKind[] = ["printed", "derived", "estimated", "relative", "teaser", "unknown"];

/**
 * Deaths and other fates: what the records carry about the victim of an entry in data/deaths.ts
 * (its `outcome`; none means a death). The list holds more than deaths, so nothing may call an
 * entry a death, or count it as one, unless it is: print the entry's own word (<OutcomeMark>, or
 * `outcomeInfo(outcomeOf(d)).word`) where a page would say "Death", and count with `countFates`,
 * written out by `fateWords` ("2 deaths", "5 other fates").
 *
 *   Death                 a record states it, shows it or firmly implies it. The only "death".
 *   Presumed dead         no record states or shows the death; the model presumes it
 *   Fate not shown        the game leaves the fate open
 *   Survives              the attack is shown, and the victim lives
 *   Death in one ending   it happens in one ending only, which no later game is shown to follow
 *
 * The last four are "other fates". The skull (DeathIcon) marks a death and nothing else; another
 * fate carries FateIcon. See <OutcomeMark>.
 */
export const OUTCOME: Record<string, { word: string; help: string }> = {
  death: { word: "Death", help: "A record states it, shows it or firmly implies it" },
  presumed: { word: "Presumed dead", help: "No record states or shows the death. The model presumes it, and the entry says on what" },
  "not-shown": { word: "Fate not shown", help: "The game leaves the fate open" },
  survives: { word: "Survives", help: "The attack is shown, and the victim lives" },
  branch: { word: "Death in one ending", help: "It happens in one ending only, which no later game is shown to follow" },
};
/** The outcomes in the order a key lists them: the death first, then the other fates. */
export const OUTCOMES: string[] = Object.keys(OUTCOME);
/** What the records carry about an entry's victim. An entry that says nothing is a death (see data/deaths.ts). */
export const outcomeOf = (d: { outcome?: string }): string => d.outcome ?? "death";
/** True for an entry that is a death: the only kind that may be called one, or counted as one. */
export const isDeath = (d: { outcome?: string }): boolean => outcomeOf(d) === "death";
/** The word and the help sentence for an outcome. One the interface does not know yet (new data) is printed as the data has it, and is never a death. */
export const outcomeInfo = (outcome: string): { word: string; help: string } => {
  if (Object.hasOwn(OUTCOME, outcome)) return OUTCOME[outcome];
  const words = outcome.replace(/-/g, " ");
  return { word: words.charAt(0).toUpperCase() + words.slice(1), help: "" };
};
/** How many of some entries are deaths, and how many are other fates. */
export interface FateCount { deaths: number; others: number }
export function countFates(list: readonly { outcome?: string }[]): FateCount {
  const deaths = list.reduce((n, d) => n + (isDeath(d) ? 1 : 0), 0);
  return { deaths, others: list.length - deaths };
}
/** The label of an entry's cause (its `kind`). The data words them to be true of an entry that is not a death; a cause its table does not have is printed as the data names it. */
export const causeLabel = (kind: string): string => (DEATH_KIND as Record<string, { label: string } | undefined>)[kind]?.label ?? kind;
/** A tally in words, one part for each kind there is any of: ["2 deaths", "5 other fates"]. */
export const fateWords = ({ deaths, others }: FateCount): string[] =>
  [deaths ? plural(deaths, "death") : "", others ? plural(others, "other fate") : ""].filter(Boolean);

/**
 * Sources that are not a released work (a body of statements, a website's teasers). The data
 * gives every source a release date; for these it is only a placeholder, so pages print none.
 * Keyed by source id, like the short codes in data/gameMeta.ts; an id this list does not know
 * is treated as a release.
 */
const NOT_A_RELEASE = new Set(["scott", "scottgames-site"]);
export const isRelease = (sourceId: string): boolean => !NOT_A_RELEASE.has(sourceId);

export const SITE_NAME = "Fazbear Canon Archive";
