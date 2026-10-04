import { evidenceById, theoryById } from "../data/store";
import { entityName, opensSentence } from "./names";
import { recordRefPieces, shortTitle } from "./textMarks";
import { smartQuotes } from "./typography";

/**
 * RichText with every token reduced to plain words: citations dropped, entity and chapter tokens
 * replaced by their labels, date pills by their label, emphasis marks removed. For excerpts,
 * search text, titles and aria-labels. As in RichText, a name that opens the text or follows the
 * end of a sentence starts with a capital, and a label that ends in a full stop is followed by
 * no second one. (One argument only, so it can be handed to `map`.)
 */
/** A label, the emphasis marks that close after it, and the sentence's full stop: the stop is dropped where the label ends in one of its own ("Hen and W.A."). */
const once = (label: string, marks: string, stop = ""): string => `${label}${marks}${label.trimEnd().endsWith(".") ? "" : stop}`;

export function plainText(text: string): string {
  return text
    .replace(/\s*\[\[[a-z0-9-]+\]\]/g, "")
    .replace(/\{\{([a-z0-9-]+)\}\}(\**)(\.(?!\.))?/g, (_, id: string, marks: string, stop: string | undefined, at: number, whole: string) => once(entityName(id, opensSentence(whole.slice(0, at))), marks, stop))
    .replace(/\(\(([a-z0-9-]+)(?:\|([^)]+))?\)\)(\**)(\.(?!\.))?/g, (_, id: string, label: string | undefined, marks: string, stop: string | undefined) => once(label ?? theoryById.get(id)?.title ?? id, marks, stop))
    .replace(/<<([^|>]+)\|[a-z]+\|[a-z0-9,-]*\|[^>]*>>/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*([^\s*](?:[^*]*[^\s*])?)\*/g, "$1")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();
}

/** The first sentence or two of a RichText string, as plain text no longer than `max` characters. */
export function excerpt(text: string, max = 180): string {
  const plain = plainText(text);
  if (plain.length <= max) return plain;
  const sentences = plain.match(/[^.!?]+[.!?]+(?:["'”’)]+)?(?=\s|$)/g) ?? [plain];
  let out = "";
  for (const s of sentences) {
    if ((out + s).length > max) break;
    out += s;
  }
  if (out.trim().length >= 40) return out.trim();
  const cut = plain.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "")}…`;
}

/* ── A record's own prose ──────────────────────────────────────────────────────── */

const isRecord = (id: string): boolean => evidenceById.has(id);
/** A record's title as it is named inside a sentence. */
export const recordTitle = (id: string): string => shortTitle(smartQuotes(evidenceById.get(id)?.title ?? id));

/**
 * A record's own prose (its claim, its notes, the basis of its date) as plain words, with its
 * quotes set: for a place where nothing in the text can be a link or a marker (a row that is
 * itself a link, a preview, a popover, a search result). Such prose names other records by id,
 * and an id is never printed. An id that is a word of its sentence becomes that record's title
 * ("see ffps-hry223-label" reads "see ‘HRY223’ on the label…"). A bracket that holds nothing but
 * ids is a citation; with no marker to carry it here, it is left out, bracket and all. Where
 * links and markers can stand, print the text with <RecordText> instead.
 */
export function recordWords(text: string): string {
  const pieces = recordRefPieces(smartQuotes(text), isRecord);
  let out = "";
  for (const p of pieces) {
    if (typeof p === "string") out += p;
    else if ("id" in p) out += recordTitle(p.id);
    else out = out.replace(/\s+$/, "");
  }
  return out;
}

/** Every record a piece of a record's prose names, cited or in a sentence, once each, in order. */
export function recordsNamed(text: string): string[] {
  const out = recordRefPieces(text, isRecord).flatMap((p) => (typeof p === "string" ? [] : "id" in p ? [p.id] : p.ids));
  return [...new Set(out)];
}

const cites = new Map<string, string[]>();
/**
 * The records that a record's own prose cites (an id alone in a bracket), once each, in the order
 * the record is printed: its claim, the basis of its date, its notes. The record itself is not
 * among them. The same array every time, so it can number a set of markers.
 */
export function recordCites(id: string): string[] {
  let list = cites.get(id);
  if (!list) {
    const e = evidenceById.get(id);
    const texts = e ? [e.claim, e.when.basis ?? "", e.notes ?? ""] : [];
    list = [...new Set(texts.flatMap((t) => recordRefPieces(t, isRecord).flatMap((p) => (typeof p !== "string" && "ids" in p ? p.ids : []))))].filter((x) => x !== id);
    cites.set(id, list);
  }
  return list;
}
