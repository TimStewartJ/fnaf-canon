/**
 * Words and families for relations ("ties"), shared by every page of this cluster so a tie reads
 * the same on a person page, in a family tree and in the web. No components here.
 *
 * Everything is keyed by the relation kinds in the data and falls back to the kind's own id, so a
 * kind added to the schema later still renders (as "employed by" does for "employed-by").
 */
import type { Relation, Status } from "../../data/schema";
import { labelForEntity } from "../../data/store";

/** What a tie is about. It picks the line colour in the diagrams; the word is always shown too. */
export type TieFamily = "family" | "identity" | "harm" | "made";

export interface TieWords {
  /** Short label for a toggle or a legend: "parent of". */
  label: string;
  /** Predicate of a full sentence, from → to: "is the parent of". */
  says: string;
  /** Phrase when the subject is the `from` end: "parent of". */
  own: string;
  /** Phrase when the subject is the `to` end: "child of". */
  other: string;
  family: TieFamily;
  /** True when the tie points one way (drawn with an arrowhead where the direction is not obvious). */
  directed: boolean;
  /** False for a kind this file has no words for; callers then print the full sentence. */
  known: boolean;
}

const WORDS: Record<string, TieWords> = {
  "parent-of": { label: "parent of", says: "is the parent of", own: "parent of", other: "child of", family: "family", directed: false, known: true },
  "sibling-of": { label: "sibling of", says: "is the sibling of", own: "sibling of", other: "sibling of", family: "family", directed: false, known: true },
  "spouse-of": { label: "spouse of", says: "is the spouse of", own: "spouse of", other: "spouse of", family: "family", directed: false, known: true },
  // The archive does not call anyone a business partner, founder or owner: the sources never do. Data that still uses this kind reads as a working tie.
  "partner-of": { label: "worked with", says: "worked with", own: "worked with", other: "worked with", family: "family", directed: false, known: true },
  "worked-with": { label: "worked with", says: "worked with", own: "worked with", other: "worked with", family: "family", directed: false, known: true },
  "employed-by": { label: "employed by", says: "was employed by", own: "employed by", other: "employer of", family: "family", directed: true, known: true },
  "same-as": { label: "same being as", says: "is the same being as", own: "the same being as", other: "the same being as", family: "identity", directed: false, known: true },
  possesses: { label: "haunts", says: "haunts", own: "haunts", other: "haunted by", family: "identity", directed: true, known: true },
  wore: { label: "wore", says: "wore", own: "wore", other: "worn by", family: "identity", directed: true, known: true },
  became: { label: "became", says: "became", own: "became", other: "once was", family: "identity", directed: true, known: true },
  killed: { label: "killed", says: "killed", own: "killed", other: "killed by", family: "harm", directed: true, known: true },
  hunted: { label: "hunted", says: "hunted", own: "hunted", other: "hunted by", family: "harm", directed: true, known: true },
  created: { label: "created", says: "created", own: "created", other: "created by", family: "made", directed: true, known: true },
  controls: { label: "controls", says: "controls", own: "controls", other: "controlled by", family: "made", directed: true, known: true },
};

/** The words for a relation kind. An unknown kind is spelled from its id. */
export function tieWords(kind: string): TieWords {
  const known = WORDS[kind];
  if (known) return known;
  const plain = kind.replace(/-/g, " ");
  return { label: plain, says: plain, own: plain, other: plain, family: "family", directed: true, known: false };
}

export const TIE_FAMILIES: TieFamily[] = ["family", "identity", "harm", "made"];
export const TIE_FAMILY_LABEL: Record<TieFamily, string> = {
  family: "Family and work",
  identity: "Identity",
  harm: "Killed or hunted",
  made: "Made or controlled",
};
/** One line saying what the family covers, for legends. */
export const TIE_FAMILY_HELP: Record<TieFamily, string> = {
  family: "parent, sibling, spouse, colleague, employer",
  identity: "haunts, wore, became, the same being",
  harm: "killed, hunted",
  made: "created, controls",
};

/** The relation kinds the identity model is built from. A tie of this kind inside one being is part of its identity. */
const IDENTITY_KINDS = new Set(["same-as", "possesses", "wore", "became"]);
export const isIdentityKind = (kind: string): boolean => IDENTITY_KINDS.has(kind);

export const STATUS_RANK: Record<Status, number> = { canon: 3, strong: 2, theory: 1 };
export const STATUSES: Status[] = ["canon", "strong", "theory"];
export const weakest = (list: Status[]): Status => list.reduce<Status>((w, s) => (STATUS_RANK[s] < STATUS_RANK[w] ? s : w), "canon");
export const strongest = (list: Status[]): Status => list.reduce<Status>((w, s) => (STATUS_RANK[s] > STATUS_RANK[w] ? s : w), "theory");

/** A full plain-text sentence for a relation: "William Afton is the parent of Michael Afton". */
export function tieSentence(r: { from: string; to: string; kind: string }): string {
  return `${labelForEntity(r.from)} ${tieWords(r.kind).says} ${labelForEntity(r.to)}`;
}

/** "The Cassette Man" → "the Cassette Man" inside a sentence; other names are left alone. */
export const midSentence = (name: string): string => name.replace(/^The /, "the ");

/** First letter upper-cased, for a phrase that opens a row. */
export const sentenceCase = (text: string): string => (text ? text[0].toUpperCase() + text.slice(1) : text);

export const plural = (n: number, one: string, many = `${one}s`): string => `${n} ${n === 1 ? one : many}`;

/** Splits ties into the four families, in a fixed order, keeping the given order inside each. */
export function byFamily<T>(items: readonly T[], kindOf: (item: T) => string): { family: TieFamily; items: T[] }[] {
  return TIE_FAMILIES
    .map((family) => ({ family, items: items.filter((it) => tieWords(kindOf(it)).family === family) }))
    .filter((g) => g.items.length > 0);
}

/** A record of a relation that a diagram shows as another record, and how firmly the model reads it as that other. */
export interface Fold { record: string; into: string; status: Status }

/** A tie as the diagrams draw it: one line, standing for one relation or for several whose ends were folded together. */
export interface DrawnTie {
  key: string;
  from: string;
  to: string;
  kind: string;
  /**
   * How firm the line is. A relation is recorded between two records; when a diagram shows one of
   * them as another (folds it), the line between the records shown is no firmer than that fold. So
   * each relation counts as the weakest of itself and its folds, and the line takes the firmest of
   * the relations it stands for.
   */
  status: Status;
  rels: readonly Relation[];
  /** The folds behind the line. Empty when every relation is recorded between the two records shown. */
  folds: readonly Fold[];
}

const statusWord: Record<Status, string> = { canon: "canon", strong: "strong inference", theory: "theory" };

/** What a drawn tie says, in plain words: the relations behind it, by the names they are recorded under, and any folds. */
export function tieTitle(tie: DrawnTie): string {
  const said = tie.rels.map((r) => `${tieSentence(r)} (${statusWord[r.status] ?? r.status})`).join("; ");
  if (!tie.folds.length) return said;
  const folds = tie.folds.map((f) => `${labelForEntity(f.record)} is shown as ${labelForEntity(f.into)} (${statusWord[f.status] ?? f.status})`).join("; ");
  return `${said}. ${folds}. Drawn as ${statusWord[tie.status] ?? tie.status}.`;
}
