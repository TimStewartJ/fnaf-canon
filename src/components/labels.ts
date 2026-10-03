/**
 * Words used across the interface for the archive's scales and kinds. No components here.
 */
import type { Certainty, Confidence, DateKind, SourceKind, Status } from "../data/schema";

export const KIND_LABEL: Record<SourceKind | string, string> = {
  "phone-call": "Phone call", "audio-tape": "Audio tape", minigame: "Minigame", cutscene: "Cutscene",
  dialogue: "Dialogue", text: "In-game text", environment: "Environment", mechanic: "Gameplay mechanic",
  ending: "Ending", hidden: "Hidden / secret", teaser: "Teaser", "scott-statement": "Scott statement",
};
export const kindLabel = (kind: string): string => (KIND_LABEL as Record<string, string>)[kind] ?? kind;

/**
 * The firmness grammar. Certainty, status and confidence are three scales with one shape:
 * firm, partial, tentative. They share one glyph (filled, half, hollow) and one line style
 * (solid, dashed, dotted), and are told apart by their words.
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

/** How a displayed date is supported: the fourth scale, drawn with the same glyph family. */
export const DATE_KIND: Record<DateKind, { label: string; help: string }> = {
  printed: { label: "Printed", help: "The date is printed or spoken in a game or in Scott’s words" },
  derived: { label: "Derived", help: "Calculated from printed dates and stated intervals" },
  estimated: { label: "Estimated", help: "This archive’s best estimate from the surrounding evidence" },
  relative: { label: "Relative", help: "Only placed relative to other events" },
  teaser: { label: "Teaser", help: "Shown in an official teaser. Where a document in the game agrees, the note says so" },
  unknown: { label: "Undated", help: "The sources give no date" },
};
export const DATE_KINDS: DateKind[] = ["printed", "derived", "estimated", "relative", "teaser", "unknown"];

export const SITE_NAME = "Fazbear Canon Archive";
