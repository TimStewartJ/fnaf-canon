/**
 * Typographic quotes for display. Content is written with straight quotes; `smartQuotes` turns them
 * into curly ones when text is shown: "…" → “…”, '…' → ‘…’, it's → it’s, '87 → ’87. Curly quotes
 * already in the text are left alone. It is safe on RichText source (tokens contain no quotes) and
 * is applied by <RichText> and the shared components; call it yourself on any other plain string
 * you display (names, titles). Do not use it on ids, URLs or search text.
 */
import { createElement, type ReactNode } from "react";

const OPENS_AFTER = /[\s([{<|/\u2014\u2013\u2012-]/;
const WORD = /[\p{L}\p{N}]/u;
const ELISION = /^(?:em|til|tis|twas|cause|n)\b/i;

export function smartQuotes(text: string): string {
  if (text.indexOf('"') < 0 && text.indexOf("'") < 0) return text;
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch !== '"' && ch !== "'") { out += ch; continue; }
    // What came before, looking through emphasis asterisks to the character they follow:
    // `**"quoted"**` opens after the opening marker, `*word*"` closes after the closing one.
    let j = out.length - 1;
    while (j >= 0 && out[j] === "*") j--;
    const prev = j >= 0 ? out[j] : "";
    const opens = prev === "" || OPENS_AFTER.test(prev) || prev === "\u201C" || prev === "\u2018";
    const next = text[i + 1] ?? "";
    if (ch === '"') { out += opens ? "\u201C" : "\u201D"; continue; }
    if (!opens) { out += "\u2019"; continue; }                               // it's, brothers', a closing quote
    if (/\d/.test(next) || ELISION.test(text.slice(i + 1))) { out += "\u2019"; continue; }  // '87, 'em
    out += WORD.test(next) || next === '"' || next === "\u201C" || next === "*" || next === "." || next === "\u2026" ? "\u2018" : "\u2019";
  }
  return out;
}

const EMPHASIS = /\*([^\s*](?:[^*\n]*[^\s*])?)\*/g;

/**
 * A source's own words, for display: typographic quotes, and the emphasis the source marked with
 * asterisks (Scott's "*are*", a transcript's "*gets cut off*") set in italics. For the `quote`
 * and `notes` of evidence records, which are plain text by contract and never carry RichText.
 */
export function sourceWords(text: string): ReactNode {
  const shown = smartQuotes(text);
  if (shown.indexOf("*") < 0) return shown;
  // With one capture group, split() puts the emphasised runs at the odd positions.
  return shown.split(EMPHASIS).map((part, i) => (i % 2 ? createElement("em", { key: i }, part) : part));
}

/** The same words with the asterisks dropped, where italics cannot be shown (an attribute, a search excerpt). */
export const sourceWordsPlain = (text: string): string => smartQuotes(text).replace(EMPHASIS, "$1");

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/**
 * A calendar date as the interface writes it: "2014-08-08" becomes "8 August 2014", "2014-08"
 * becomes "August 2014". `short` abbreviates the month ("8 Aug 2014") for a narrow column of
 * dates. Anything else (a bare year, "c. 1983", a date quoted from a game) is returned as it was
 * given: quotations keep the form they were printed in.
 */
export function longDate(iso: string, short = false): string {
  const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(iso.trim());
  if (!m) return iso;
  const name = MONTHS[Number(m[2]) - 1];
  if (!name) return iso;
  const month = short ? name.slice(0, 3) : name;
  return m[3] ? `${Number(m[3])} ${month} ${m[1]}` : `${month} ${m[1]}`;
}

const FIGURES = new Intl.NumberFormat("en-GB");
/**
 * A count in figures, as the interface prints it: with a comma between the thousands ("1,046").
 * This is the one way a number of things is written, on every page: never print a count straight
 * from `.length`. (A year, an id, a chapter's number and a citation's are not counts and are
 * printed as they are.) It is called for every option of every filter on each keystroke, hence the
 * shortcut for the numbers that need no separator.
 */
export const count = (n: number): string => (Number.isInteger(n) && n > -1000 && n < 1000 ? String(n) : FIGURES.format(n));
/** A count with its noun: "1 record", "1,046 records", "2 entries" (`many` where the plural is not the noun with an s). */
export const plural = (n: number, one: string, many = `${one}s`): string => `${count(n)} ${n === 1 ? one : many}`;

const NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
/**
 * A small count in words, as running text has it ("eight eras"); from thirteen up, the figures (`count`).
 * For sentences and headings built around a count that comes from the data. `capital` for the
 * start of a sentence.
 */
export function numberWord(n: number, capital = false): string {
  const word = Number.isInteger(n) && n >= 0 && n < NUMBER_WORDS.length ? NUMBER_WORDS[n] : count(n);
  return capital ? word[0].toUpperCase() + word.slice(1) : word;
}
