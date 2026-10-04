/**
 * Quote check: every quoted phrase in the theory is in a record that the same chapter cites.
 *
 * The archive's promise is that a reader can open the number beside a quotation and find the words.
 * This reads every chapter (answer, argument, tables, lists, captions, "what pushes back", "what
 * would change this") and every beat of the storyline, takes each phrase set in double quotation
 * marks, and looks for it word for word:
 *   1. in a record cited in the same block of text;
 *   2. failing that, in any record the chapter cites, lists as counter-evidence or files as further;
 *   3. failing that, in any record at all.
 * A phrase found only at step 3 is reported as UNCITED, and one found nowhere as MISS. Both fail
 * the check. A phrase with "..." in it is matched part by part, in any order within one record.
 *
 * Usage (from the repository root):
 *   npx tsx scripts/quote-check.ts            phrases of three words or more (the default)
 *   npx tsx scripts/quote-check.ts 2          phrases of two words or more
 *   npx tsx scripts/quote-check.ts --weak     also list phrases found outside a record's quote
 *                                             (in its claim, title, place or notes)
 * Exit code 1 when any phrase is MISS or UNCITED.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storyline, theory } from "../src/data/theory";
import type { TheoryBlock, TheorySection } from "../src/data/schema";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const minWords = Number(args.find((a) => /^\d+$/.test(a)) ?? 3);
const listWeak = args.includes("--weak");

interface Rec { id: string; quote?: string; claim?: string; title?: string; location?: string; notes?: string }
const records = new Map<string, Rec>();
const dir = path.join(root, "src/data/evidence");
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json"))) {
  for (const r of JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Rec[]) records.set(r.id, r);
}
const everyId = [...records.keys()];
const FIELDS = ["quote", "claim", "title", "location", "notes"] as const;

/** Text as it is compared: straight marks, three dots for an ellipsis, single spaces, no emphasis marks, lower case. */
const norm = (s: string): string => s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\u2026/g, "...").replace(/\s+/g, " ").replace(/\*+/g, "").trim().toLowerCase();
/** Without the punctuation a sentence puts at either end of a quotation. */
const strip = (s: string): string => s.replace(/[.,;:!?…]+$/g, "").replace(/^[.,;:!?…]+/g, "");

/** The first of these records that holds every part of the phrase, and the field it was found in. */
function find(parts: string[], ids: string[]): [string, string] | null {
  for (const id of ids) {
    const r = records.get(id);
    if (!r) continue;
    for (const k of FIELDS) {
      const hay = norm(String(r[k] ?? ""));
      if (parts.length && parts.every((p) => hay.includes(strip(p)))) return [id, k];
    }
  }
  return null;
}

let total = 0, miss = 0, uncited = 0, weak = 0;
let chapterIds: string[] = [];
const citedIn = (text: string): string[] => [...text.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1]);

function check(where: string, text: string, extraIds: string[] = []): void {
  const ids = citedIn(text).concat(extraIds);
  // Citations and date tokens are not prose. A quotation of one or two characters ("WA") is still a
  // pair of marks: it must be matched as one, or every mark after it pairs with the wrong partner.
  const plain = text.replace(/\[\[[^\]]+\]\]/g, " ").replace(/<<[^>]*>>/g, " ");
  for (const m of plain.matchAll(/"([^"]{1,400})"/g)) {
    const q = m[1].trim();
    if (q.split(/\s+/).length < minWords) continue;
    total++;
    const parts = norm(strip(q)).split(/\s*\.\.\.\s*/).filter((p) => p.split(" ").length >= 2);
    let found = find(parts, ids), tier = 1;
    if (!found) { found = find(parts, chapterIds); tier = 2; }
    if (!found) { found = find(parts, everyId); tier = 3; }
    if (!found) { miss++; console.log(`MISS     ${where}: "${q.slice(0, 120)}"`); }
    else if (tier === 3) { uncited++; console.log(`UNCITED  ${where}: "${q.slice(0, 90)}" is in ${found[0]} (${found[1]}), which this chapter does not cite`); }
    else if (found[1] !== "quote") { weak++; if (listWeak) console.log(`weak     ${where}: "${q.slice(0, 90)}" is in the ${found[1]} of ${found[0]}`); }
  }
}

/** Every piece of a chapter's prose, with where it stands and the records its block names outside the text. */
function piecesOf(c: TheorySection): [string, string, string[]][] {
  const out: [string, string, string[]][] = [];
  const push = (where: string, text?: string, ids: string[] = []) => { if (text) out.push([where, text, ids]); };
  push(`${c.id}.answer`, c.answer);
  push(`${c.id}.tension`, c.tension, c.counterEvidence ?? []);
  push(`${c.id}.changesIf`, c.changesIf);
  push(`${c.id}.hero`, c.hero?.caption);
  c.body.forEach((b: string | TheoryBlock, i: number) => {
    const where = `${c.id}.body[${i}]`;
    if (typeof b === "string") push(where, b);
    else if (b.kind === "list") b.items.forEach((t, j) => push(`${where}.${j}`, t));
    else if (b.kind === "figure") push(where, b.caption, b.evidence ? [b.evidence] : []);
    else if (b.kind === "callout") push(where, b.text);
    else if (b.kind === "compare") b.columns.forEach((o, j) => push(`${where}.${j}`, o.text));
    else if (b.kind === "table") b.rows.forEach((r, j) => push(`${where}.row${j}`, r.join(" ¦ ")));
    else if (b.kind === "quote") {
      // A large quotation with its own words must be an excerpt of the record's quotation.
      const r = records.get(b.evidence);
      if (b.text && r && !norm(r.quote ?? "").includes(norm(b.text))) { miss++; console.log(`MISS     ${where}: the large quotation's words are not in the quote of ${b.evidence}`); }
    }
  });
  return out;
}

for (const c of theory) {
  const pieces = piecesOf(c);
  chapterIds = [...new Set(pieces.flatMap(([, text, ids]) => citedIn(text).concat(ids)).concat(c.counterEvidence ?? [], c.further ?? []))];
  for (const [where, text, ids] of pieces) check(where, text, ids);
}
chapterIds = [];
for (const b of storyline) check(`beat ${b.id}`, b.text);

console.log(`${total} quoted phrases of ${minWords}+ words in ${theory.length} chapters and ${storyline.length} beats: ${miss} in no record, ${uncited} only in a record the chapter does not cite, ${weak} outside a record's quote (claim, title, place or notes).`);
console.log(miss || uncited ? "FAILED" : "OK");
process.exit(miss || uncited ? 1 : 0);
