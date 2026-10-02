/**
 * Writes a compact, greppable index of every evidence record, with how the model currently uses it.
 * Run: npx tsx scripts/evidence-index.ts [--out path.md] [--file fnaf123] [--unaccounted]
 *
 * Use column:  C = cited inline by a chapter (ids listed)   X = counter-evidence   F = filed as further evidence
 *              O = listed in outsideStory                   - = not accounted for by the model yet
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Evidence } from "../src/data/schema";
import { outsideStory, theory } from "../src/data/theory";
import { inlineCitations } from "../src/data/theoryText";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const opt = (n: string) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
const only = opt("file");
const unaccountedOnly = args.includes("--unaccounted");

const use = new Map<string, string[]>();
const add = (id: string, tag: string) => { use.set(id, [...(use.get(id) ?? []), tag]); };
for (const s of theory) {
  for (const id of inlineCitations(s)) add(id, `C:${s.id}`);
  for (const id of s.counterEvidence ?? []) add(id, `X:${s.id}`);
  for (const id of s.further ?? []) add(id, `F:${s.id}`);
}
for (const g of outsideStory) for (const id of g.ids) add(id, `O:${g.id}`);

const dir = path.join(root, "src/data/evidence");
const lines: string[] = [];
let total = 0, shown = 0;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
  if (only && f !== `${only}.json`) continue;
  const records = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Evidence[];
  lines.push(`\n## ${f} (${records.length} records)\n`);
  for (const e of records) {
    total++;
    const u = use.get(e.id);
    if (unaccountedOnly && u) continue;
    shown++;
    const claim = e.claim.replace(/\s+/g, " ");
    const quote = e.quote ? ` “${e.quote.replace(/\s+/g, " ")}”` : "";
    lines.push(`- \`${e.id}\` [${e.game} · ${e.kind} · ${e.certainty} · ${e.when.label}]${e.image ? " 🖼" : ""} **${e.title}** — ${claim}${quote} (${u ? u.join(" ") : "-"})`);
  }
}
const text = `# Evidence index (${shown} of ${total} records)\n\nUse column at the end of each line: C = cited inline by chapter, X = counter-evidence, F = filed as further evidence, O = outside the story, - = not accounted for yet. 🖼 = has a screenshot.\n${lines.join("\n")}\n`;
const out = opt("out");
if (out) { fs.writeFileSync(out, text); console.log(`wrote ${out} (${shown} records, ${text.length} chars)`); }
else process.stdout.write(text);
