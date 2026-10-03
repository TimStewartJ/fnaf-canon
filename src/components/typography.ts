/**
 * Typographic quotes for display. Content is written with straight quotes; `smartQuotes` turns them
 * into curly ones when text is shown: "…" → “…”, '…' → ‘…’, it's → it’s, '87 → ’87. Curly quotes
 * already in the text are left alone. It is safe on RichText source (tokens contain no quotes) and
 * is applied by <RichText> and the shared components; call it yourself on any other plain string
 * you display (names, titles). Do not use it on ids, URLs or search text.
 */
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
