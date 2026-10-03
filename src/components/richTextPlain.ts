import { theoryById } from "../data/store";
import { entityName, opensSentence } from "./names";

/**
 * RichText with every token reduced to plain words: citations dropped, entity and chapter tokens
 * replaced by their labels, date pills by their label, emphasis marks removed. For excerpts,
 * search text, titles and aria-labels. As in RichText, a name that opens the text or follows the
 * end of a sentence starts with a capital. (One argument only, so it can be handed to `map`.)
 */
export function plainText(text: string): string {
  return text
    .replace(/\s*\[\[[a-z0-9-]+\]\]/g, "")
    .replace(/\{\{([a-z0-9-]+)\}\}/g, (_, id: string, at: number, whole: string) => entityName(id, opensSentence(whole.slice(0, at))))
    .replace(/\(\(([a-z0-9-]+)(?:\|([^)]+))?\)\)/g, (_, id: string, label?: string) => label ?? theoryById.get(id)?.title ?? id)
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
