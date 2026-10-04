/**
 * Typographic quotes for display. Content is written with straight quotes; `smartQuotes` turns them
 * into curly ones when text is shown: "…" → “…”, '…' → ‘…’, it's → it’s, '87 → ’87. Curly quotes
 * already in the text are left alone. It is safe on RichText source (tokens contain no quotes) and
 * is applied by <RichText> and the shared components; call it yourself on any other plain string
 * you display (names, titles). Do not use it on ids, URLs or search text.
 */
import { createElement, type ReactNode } from "react";

/** After these a quotation mark is at the start of something: white space, an opening bracket, a stroke. */
const OPENS_AFTER = /[\s([{<|/]/;
/** After a dash it may be either: “wait—” closes, and —“then” opens. What follows decides. */
const DASH = /[\u2014\u2013\u2012-]/;
/** Before these a quotation mark is at the end of something. */
const CLOSES_BEFORE = /[\s.,;:!?)\]}\u2026]/;
const WORD = /[\p{L}\p{N}]/u;
/** Words that begin with an apostrophe. Not in capitals: a message signed 'EM' is a quotation. */
const ELISION = /^(?:[Ee]m|[Tt]il|[Tt]is|[Tt]was|[Cc]ause|n)\b/;
/** A year cut to two figures, as in ’87 or the ’80s: two figures and no more, not the start of a longer figure. */
const SHORT_YEAR = /^\d\ds?(?![\p{L}\p{N}])(?![/:.\u2013-]\d)/u;

/**
 * True when a single quotation that opened just before `rest` is closed in it, soon and within
 * its clause, before another could open: the next single mark that is not inside a word stands
 * after a word, not after a space. Tells the quoted ‘30 years later’ and ‘10’ from the year in
 * “the Bite of ’87 and after”, where the next such mark is some plural’s apostrophe.
 */
function closesLater(rest: string): boolean {
  const reach = Math.min(rest.length, 36);
  for (let k = 0; k < reach; k++) {
    const c = rest[k], next = rest[k + 1] ?? "";
    if (/[;?!([]/.test(c) || (c === "." && !WORD.test(next))) return false;
    if (c !== "'" && c !== "\u2019" && c !== "\u2018") continue;
    if (c === "\u2018" || /[\s([{]/.test(rest[k - 1] ?? "0")) return false;
    if (WORD.test(next)) continue;
    // After a plural and before a small letter it is far more likely that plural's apostrophe: "the games' offices".
    if (rest[k - 1] === "s" && /^\s\p{Ll}/u.test(rest.slice(k + 1, k + 3))) continue;
    return true;
  }
  return false;
}

/**
 * Which way a straight quotation mark faces is read from both its sides, not from the left alone:
 *   - after a letter, a figure or punctuation it closes (or is an apostrophe);
 *   - after a space, an opening bracket or the start of the text it opens, whatever follows
 *     ("(no subject)", "?", "$5", "- Vanessa", "1983"), unless nothing follows but a space or
 *     the end;
 *   - after a dash it opens before a word and closes before a space or punctuation;
 *   - where both sides leave it open (a mark between an opening bracket and a space, as after
 *     the face in “Bad news. :(”) a double mark closes the quotation that is open, and opens one
 *     if none is. A single mark there closes: it is far more often the end of a quotation or an
 *     apostrophe than a start.
 * A single mark before figures is an apostrophe only for a year cut short (’87, the ’80s), and
 * then only inside a quotation or where no quotation closes after it: ‘10’, ‘1983’ and
 * ‘30 years later’ are quotations.
 */
export function smartQuotes(text: string): string {
  if (text.indexOf('"') < 0 && text.indexOf("'") < 0) return text;
  let out = "";
  // Quotations open at this point, double and single (marks already curly in the text count too).
  let doubles = 0, singles = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch !== '"' && ch !== "'") {
      if (ch === "\u201C") doubles++;
      else if (ch === "\u201D" && doubles > 0) doubles--;
      else if (ch === "\u2018") singles++;
      else if (ch === "\u2019" && singles > 0 && !WORD.test(text[i + 1] ?? "")) singles--;
      out += ch;
      continue;
    }
    // What came before, looking through emphasis asterisks to the character they follow:
    // `**"quoted"**` opens after the opening marker, `*word*"` closes after the closing one.
    let j = out.length - 1;
    while (j >= 0 && out[j] === "*") j--;
    const prev = j >= 0 ? out[j] : "";
    // And what comes after, through the asterisks in the same way.
    let k = i + 1;
    while (text[k] === "*") k++;
    const after = text[k] ?? "";
    const atStart = prev === "" || OPENS_AFTER.test(prev) || prev === "\u201C" || prev === "\u2018";
    const atEnd = after === "" || /\s/.test(after);
    // true: it opens; false: it closes; null: the two sides do not say.
    const opens = atStart ? (atEnd ? null : true) : DASH.test(prev) ? !(atEnd || CLOSES_BEFORE.test(after)) : false;
    if (ch === '"') {
      const open = opens ?? doubles === 0;
      doubles = open ? doubles + 1 : Math.max(0, doubles - 1);
      out += open ? "\u201C" : "\u201D";
      continue;
    }
    const rest = text.slice(i + 1);
    if (!opens) {                                                       // it's, brothers', a closing quote
      if (singles > 0 && !WORD.test(after)) singles--;
      out += "\u2019";
    } else if (ELISION.test(rest)) out += "\u2019";                     // 'em, 'til
    else if (SHORT_YEAR.test(rest) && (singles > 0 || !closesLater(rest))) out += "\u2019";   // '87, the '80s
    else { singles++; out += "\u2018"; }                                // a quotation opens
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

/** A date in figures with the month first, as the games' cheques print it: 11-12-1987, or 11-12-xx where the year is blanked. The first group is what stands before it. */
const MONTH_FIRST = /(^|[^\d-])(\d{1,2})-(\d{1,2})-(\d{4}|xx)(?![\d-])/gi;
/** The most days each month can have (February in a leap year). */
const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
interface FigureDate { figures: string; day: number; month: string; year: string }
function monthFirstDates(text: string): FigureDate[] {
  const out: FigureDate[] = [];
  for (const m of text.matchAll(MONTH_FIRST)) {
    const month = MONTHS[Number(m[2]) - 1], day = Number(m[3]);
    // Figures that name no day of that month are not a date, and are left unexplained.
    if (!month || day < 1 || day > MONTH_DAYS[Number(m[2]) - 1]) continue;
    const figures = m[0].slice(m[1].length);
    if (!out.some((d) => d.figures === figures)) out.push({ figures, day, month, year: /^\d/.test(m[4]) ? m[4] : "" });
  }
  return out;
}
/** "a", "a and b", "a, b and c". */
const listed = (items: (string | number)[]): string => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`);
/**
 * What a date printed month first says, in words, for a reader who writes the day first and
 * would take 11-12-1987 for 11 December: "11-12-1987 is 12 November 1987: the month is written
 * first." One sentence for every such date in the text: a date pill's label, or the reason given
 * for it. Dates of one month and year share their ending ("11-12-1987 and 11-13-1987 are 12 and
 * 13 November 1987"). Returns "" when the text has none. Figures whose first number cannot be a
 * month are not such a date and are left alone, and so is a date that `except` already holds
 * (the label, when the reason repeats it). What the source prints is never changed.
 */
export function monthFirstNote(text: string, except = ""): string {
  const said = monthFirstDates(except).map((d) => d.figures);
  const dates = monthFirstDates(text).filter((d) => !said.includes(d.figures));
  if (!dates.length) return "";
  const when = (d: FigureDate) => `${d.month}${d.year ? ` ${d.year}` : " (no year is printed)"}`;
  const alike = dates.every((d) => when(d) === when(dates[0]));
  const body = alike
    ? `${listed(dates.map((d) => d.figures))} ${dates.length > 1 ? "are" : "is"} ${listed(dates.map((d) => d.day))} ${when(dates[0])}`
    : dates.map((d) => `${d.figures} is ${d.day} ${when(d)}`).join(", and ");
  return `${body}: the month is written first.`;
}

/**
 * Text that quotes dates in figures (11-13-1987), for display: each such date is kept on one line.
 * A browser may end a line after a hyphen, and a date cut in two ("11-" over "13-1987") has to be
 * read twice. For short lines that are about the date: a popover's reason, the date said in words.
 */
export function keepFigures(text: string): ReactNode {
  const out: ReactNode[] = [];
  let at = 0;
  for (const m of text.matchAll(MONTH_FIRST)) {
    const start = m.index + m[1].length, end = m.index + m[0].length;
    if (start > at) out.push(text.slice(at, start));
    out.push(createElement("span", { key: start, className: "nowrap" }, text.slice(start, end)));
    at = end;
  }
  if (!out.length) return text;
  if (at < text.length) out.push(text.slice(at));
  return out;
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
