/**
 * Words and families for relations ("ties"), so that a tie reads the same wherever it is shown:
 * on a person page, in a family tree, in the web, and on the page of a record that supports it.
 * No components here.
 *
 * Everything is keyed by the relation kinds in the data and falls back to the kind's own id, so a
 * kind added to the schema later still renders (as "employed by" does for "employed-by").
 */
import { entityName } from "./names";
import { smartQuotes } from "./typography";

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

/** What a tie's words need of a relation. `says` is the tie in the records' own words (see Relation in data/schema.ts). */
export interface TieTold { from: string; to: string; kind: string; says?: string }

/**
 * What stands between the two names of a tie, and after the second. Where the data gives the tie
 * in the records' own words (`says`), those are printed in place of the kind's verb, which would
 * say more than the records do: `calls {to} "old friend"` is "calls", then the name, then
 * " “old friend”". Without `{to}` the name follows the phrase.
 */
export function tieSaid(r: { kind: string; says?: string }): { before: string; after: string } {
  const says = r.says?.trim();
  if (!says) return { before: tieWords(r.kind).says, after: "" };
  // Quotes are set before the split: an apostrophe after {to} ("{to}'s head") must not be read as an opening quote.
  const text = smartQuotes(says);
  const at = text.indexOf("{to}");
  return at < 0 ? { before: text, after: "" } : { before: text.slice(0, at).trimEnd(), after: text.slice(at + 4) };
}

/** A full plain-text sentence for a relation: "William Afton is the parent of Michael". */
export function tieSentence(r: TieTold): string {
  const { before, after } = tieSaid(r);
  return smartQuotes(`${entityName(r.from, true)}${before ? ` ${before}` : ""} ${entityName(r.to)}${after}`);
}
