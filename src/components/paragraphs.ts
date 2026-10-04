/**
 * Long text from the data may be set in paragraphs: a blank line ("\n\n") starts a new one (see the
 * note on Person.summary in data/schema.ts). Shown whole, each is printed as a paragraph
 * (<Paragraphs> in Paragraphs.tsx); clipped or used as plain text (a row's excerpt, a search
 * result, a title, a description), a break is a space (oneLine).
 */

/** The paragraphs of a text, in order. A text with no blank line is one paragraph. */
export function paragraphs(text: string): string[] {
  return text.split(/\n[ \t]*\n\s*/).map((para) => para.trim()).filter(Boolean);
}

/** The same text with every paragraph break (and any other line break) as one space. */
export function oneLine(text: string): string {
  return text.replace(/\s*\n\s*/g, " ").trim();
}
