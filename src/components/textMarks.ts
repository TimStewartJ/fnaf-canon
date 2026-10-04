/**
 * Things that stand in a string of running text and are printed with a mark of their own: the
 * four tags on a weaker kind of record (see RECORD_TAGS in labels.ts), and the ids of other
 * records in a record's own notes. Finding only, and no components here: <RichText> and
 * <RecordText> draw what these find. The words of the text are never changed.
 */
import { RECORD_TAGS, type RecordTag } from "./labels";

/* ── The four tags ─────────────────────────────────────────────────────────────── */

/** A run of plain text, or a tag with the exact characters it covers. */
export type TagPiece = string | { tag: RecordTag; text: string };

/** Both kinds of apostrophe as one: the data types a straight one and the page prints a curly one. */
const fold = (s: string): string => s.replace(/\u2019/g, "'");
const TAG_BY_PHRASE = new Map(RECORD_TAGS.map((t) => [fold(t.phrase), t]));
const PHRASES = RECORD_TAGS.map((t) => t.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, "['\u2019]")).join("|");
/** A bracket with no other bracket inside it. */
const BRACKET = /\(([^()]*)\)/g;
/** A tag's phrase standing as whole words inside a longer bracket; the first group is what stands before it. */
const PHRASE_INSIDE = new RegExp(`(^|[^\\p{L}\\p{N}])(${PHRASES})(?![\\p{L}\\p{N}])`, "gu");

/**
 * Splits text at the four tags. A tag is its exact phrase in brackets, "(as described)", wherever
 * it stands: after a statement, before or after its citation, inside bold. The piece then covers
 * the brackets too. Where the phrase stands inside a longer bracket, "(a rabbit costume's, by a
 * fan wiki's account)", the piece covers the phrase alone. The same words outside a bracket are
 * a sentence saying it in full, and are left as text. Joined back together, the pieces are the
 * text exactly.
 */
export function recordTagPieces(text: string): TagPiece[] {
  if (text.indexOf("(") < 0) return [text];
  const out: TagPiece[] = [];
  let last = 0;
  const cut = (from: number, to: number, tag: RecordTag) => {
    if (from > last) out.push(text.slice(last, from));
    out.push({ tag, text: text.slice(from, to) });
    last = to;
  };
  for (const b of text.matchAll(BRACKET)) {
    const whole = TAG_BY_PHRASE.get(fold(b[1]));
    if (whole) { cut(b.index, b.index + b[0].length, whole); continue; }
    for (const m of b[1].matchAll(PHRASE_INSIDE)) {
      const from = b.index + 1 + m.index + m[1].length;
      const tag = TAG_BY_PHRASE.get(fold(m[2]));
      if (tag) cut(from, from + m[2].length, tag);
    }
  }
  if (!out.length) return [text];
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/* ── Record ids in a record's own prose ────────────────────────────────────────── */

/** A run of plain text, or the id of a known record that stands in it. */
export type IdPiece = string | { id: string };

/**
 * A word in kebab-case, as every record id is, with what stands before it (first group). It must
 * stand free: not glued to a letter, a figure or a hyphen, and not part of a file name or an
 * address ("…/fnaf2-save-them.png" is no record, whatever its stem).
 */
const KEBAB = /(^|[^\p{L}\p{N}_/.#=-])([a-z0-9]+(?:-[a-z0-9]+)+)(?![\p{L}\p{N}_/-]|\.[\p{L}\p{N}])/gu;

/** The longest run of whole parts of a kebab-case word that is a record id, as [start, end) in the word; the word itself first. */
function idWithin(word: string, known: (id: string) => boolean): [number, number] | null {
  if (known(word)) return [0, word.length];
  const at: number[] = [0];
  for (let i = 0; i < word.length; i++) if (word[i] === "-") at.push(i + 1);
  for (let n = at.length - 1; n >= 2; n--) {
    for (let i = 0; i + n <= at.length; i++) {
      const from = at[i], to = i + n < at.length ? at[i + n] - 1 : word.length;
      if (known(word.slice(from, to))) return [from, to];
    }
  }
  return null;
}

/**
 * Splits a record's prose (its notes, its claim, the basis of its date) at the ids of other
 * records that stand in it: "…the year hidden (fnaf1-paycheck-night5)." Only a whole id of a known
 * record counts, the longest first, so a word that merely looks like one ("end-of-night",
 * "11-12-1987") stays text, and so does an id no record has. Joined back together, the pieces
 * are the text exactly (an id piece stands for its id).
 */
export function recordIdPieces(text: string, known: (id: string) => boolean): IdPiece[] {
  if (text.indexOf("-") < 0) return [text];
  const out: IdPiece[] = [];
  let last = 0;
  for (const m of text.matchAll(KEBAB)) {
    const found = idWithin(m[2], known);
    if (!found) continue;
    const start = m.index + m[1].length + found[0], end = m.index + m[1].length + found[1];
    if (start > last) out.push(text.slice(last, start));
    out.push({ id: text.slice(start, end) });
    last = end;
  }
  if (!out.length) return [text];
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** A run of plain text, the id of a known record standing in a sentence, or a bracket that held nothing but ids. */
export type RefPiece = string | { id: string } | { ids: string[] };

/** What may stand between two ids in a bracket that holds nothing else. */
const BETWEEN_IDS = /^\s*(?:[,;]|and|,\s*and|&)\s*$/;

/**
 * recordIdPieces, with the two ways an id stands in a record's prose told apart. A bracket that
 * holds nothing but ids, "(fnaf1-paycheck-night5)" or "(fnaf2-a, fnaf2-b)", is a citation: one
 * piece, `{ ids }`, standing for the whole bracket (the text on either side loses the "(" and
 * the ")"). An id anywhere else is a word of its sentence or of a longer bracket ("see fnaf2-a",
 * "(fnaf2-a, a document not confirmed in play)"), and stays a piece of its own, `{ id }`.
 */
export function recordRefPieces(text: string, known: (id: string) => boolean): RefPiece[] {
  const pieces: IdPiece[] = recordIdPieces(text, known);
  const out: RefPiece[] = [];
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i], before = out[out.length - 1];
    if (typeof piece !== "string" && typeof before === "string" && before.endsWith("(")) {
      const ids = [piece.id];
      let j = i + 1;
      for (;;) {
        const sep = pieces[j], next = pieces[j + 1];
        if (typeof sep !== "string" || !BETWEEN_IDS.test(sep) || next === undefined || typeof next === "string") break;
        ids.push(next.id);
        j += 2;
      }
      const after = pieces[j];
      if (typeof after === "string" && after.startsWith(")")) {
        out[out.length - 1] = before.slice(0, -1);
        out.push({ ids });
        pieces[j] = after.slice(1);
        i = j - 1;
        continue;
      }
    }
    out.push(piece);
  }
  return out.filter((p) => p !== "");
}

/** The most characters a record's title may take as a link inside a sentence before it is cut. */
const TITLE_MAX = 72;

const CLOSES: Record<string, string> = { "\u2018": "\u2019", "\u201C": "\u201D", "(": ")" };
/** The quotation marks and brackets that a cut after `head` would leave open, the innermost last. An apostrophe inside a word closes nothing. */
function leftOpen(head: string): string[] {
  const open: string[] = [];
  const close = (mark: string) => { const i = open.lastIndexOf(mark); if (i >= 0) open.length = i; };
  for (let i = 0; i < head.length; i++) {
    const c = head[i];
    if (c in CLOSES) open.push(c);
    else if (c === "\u201D") close("\u201C");
    else if (c === ")") close("(");
    else if (c === "\u2019" && !/[\p{L}\p{N}]/u.test(head[i + 1] ?? "")) close("\u2018");
  }
  return open;
}

/**
 * A record's title as it is named inside a sentence: whole when it is short enough. A longer one
 * is cut at the last break between its clauses that fits (a colon, a semicolon, a comma, an
 * opening bracket) if that keeps at least half the room, otherwise between two words, and ends
 * in an ellipsis. A quotation or a bracket that the cut would leave open is closed after the
 * ellipsis, so a quoted line that has been cut still reads as a quotation, and as a cut one.
 * Give it the title as it will be printed (curly quotes).
 */
export function shortTitle(title: string, max = TITLE_MAX): string {
  if (title.length <= max) return title;
  let at = -1;
  for (const m of title.matchAll(/[:;,](?= )| (?=\()/g)) {
    if (m.index > max) break;
    if (m.index >= max / 2 && !leftOpen(title.slice(0, m.index)).length) at = m.index;
  }
  if (at < 0) at = title.lastIndexOf(" ", max);
  if (at < 0) at = max;
  const head = title.slice(0, at).replace(/[\s,;:.\u2013\u2014-]+$/, "");
  return `${head}\u2026${leftOpen(head).reverse().map((mark) => CLOSES[mark]).join("")}`;
}
