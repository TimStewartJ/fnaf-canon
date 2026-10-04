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
