/**
 * Names of people and places, as the pages print them. No components here.
 *
 * The data stores a name the way it runs in a sentence: "William Afton", "the Cassette Man",
 * "the rabbit in the code". So a name is printed as stored inside running text, and with a capital
 * first letter wherever it stands on its own (a heading, a row, a chip, a node, a document title, a
 * search result, an option) or opens a sentence. This file is the one place that decides which.
 *
 * A name the games never print (a descriptor) is also set in italic wherever people are listed:
 * that is the class `name-desc`, and `isDescriptor` says when to use it.
 */
import { labelForEntity, personById } from "../data/store";

/** The first letter in upper case, whatever stands before it (an opening quotation mark, a bracket). */
export function capitalise(text: string): string {
  return text.replace(/^([^\p{L}\p{N}]*)(\p{Ll})/u, (_, lead: string, letter: string) => lead + letter.toUpperCase());
}

/**
 * The name of a person or place (an id the archive has no entry for is spelled from the id).
 * `alone` is for a name that stands on its own or opens a sentence: it starts with a capital.
 */
export function entityName(id: string, alone = false): string {
  const name = labelForEntity(id);
  return alone ? capitalise(name) : name;
}

/** True for a person whose name is the archive's own descriptor, not a name a game prints. */
export const isDescriptor = (id: string): boolean => personById.get(id)?.nameStatus === "descriptor";

/** A name without its leading article, for alphabetical order and A to Z lists. */
export const sortName = (name: string): string => name.replace(/^(?:the|an?)\s+/i, "");

/** Compares two entities by name, articles aside. */
export const byEntityName = (a: string, b: string): number => sortName(labelForEntity(a)).localeCompare(sortName(labelForEntity(b)), undefined, { sensitivity: "base" });

export interface Alias {
  /** The other name itself: "Glitchtrap". */
  name: string;
  /** Where the name comes from, as the data marks it: "Scott's working name", "a fan name". Empty when the data gives none. */
  mark: string;
}

/**
 * An alias as the data writes it, "Glitchtrap (Scott's working name)", split into the name and its
 * mark. The mark is the bracket that closes the string; an alias with no such bracket has none.
 * A name that is not the archive's own (a fan's, a file's) is only ever shown with its mark.
 */
export function aliasParts(alias: string): Alias {
  const m = /^(.*\S)\s*\(([^()]+)\)\s*$/.exec(alias);
  return m ? { name: m[1], mark: m[2].trim() } : { name: alias.trim(), mark: "" };
}

/**
 * Text as a search compares it: lower case, no accents, and no apostrophes or quotation marks of
 * either kind, so "Fredbear’s", "Fredbear's" and "fredbears" are one word. The site prints curly
 * quotes and phones type them; the data is written with straight ones.
 */
export const foldText = (s: string): string => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[\u2018\u2019\u02BC'`"\u201C\u201D]/g, "");

/** Every name a person can be found by, as the data writes them: the name, then each alias without its mark. */
export const namesOf = (p: { name: string; aliases: readonly string[] }): string[] => [p.name, ...p.aliases.map((a) => aliasParts(a).name)];

/** What may stand between the end of one sentence and the first word of the next: space, citation markers, an opening quotation mark or bracket, an emphasis mark. */
const BEFORE_FIRST_WORD = /(?:\s|\[\[[a-z0-9-]+\]\]|[\u201C\u2018"'([]|\*)+$/;
/** A sentence's end: a full stop, question mark or exclamation mark, and any closing quotation mark or bracket after it. */
const SENTENCE_END = /[.?!][\u201D\u2019"')\]]*$/;
/** Short forms whose full stop does not end a sentence. */
const ABBREVIATION = /(?:^|[^\p{L}])(?:Mr|Mrs|Ms|Dr|vs|c|ca|cf|e\.g|i\.e)\.$/u;

/**
 * True when a word placed after `before` would open a sentence: nothing stands before it, or what
 * does ends in ".", "?" or "!" (with any closing quotation mark after it). `opens` says whether the
 * text itself starts a sentence (a paragraph, a list item, a table cell, a caption do; a phrase set
 * inside a longer line does not).
 */
export function opensSentence(before: string, opens = true): boolean {
  const said = before.replace(BEFORE_FIRST_WORD, "");
  if (said === "") return opens;
  return SENTENCE_END.test(said) && !ABBREVIATION.test(said);
}
