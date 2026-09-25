/* Validates referential integrity of the canon data. Run: npx tsx scripts/validate.ts */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Evidence, ImageCredit } from "../src/data/schema";
import { people } from "../src/data/people";
import { relations } from "../src/data/relations";
import { places } from "../src/data/places";
import { timeline, eras } from "../src/data/timeline";
import { theory } from "../src/data/theory";
import { familyTrees } from "../src/data/familyTrees";
import { homeSummary } from "../src/data/home";
import { EVENT_DATES, ERA_DATES, PLACE_DATES, GAME_DATES } from "../src/data/dates";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors: string[] = [];
const warnings: string[] = [];
const read = <T,>(dir: string): T[] =>
  fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith(".json")).flatMap((f) => {
    try { return JSON.parse(fs.readFileSync(path.join(root, dir, f), "utf8")) as T[]; }
    catch (e) { errors.push(`${dir}/${f}: invalid JSON (${(e as Error).message})`); return []; }
  });

const evidence = read<Evidence>("src/data/evidence");
const credits = read<ImageCredit>("src/data/credits");
const games = JSON.parse(fs.readFileSync(path.join(root, "src/data/games.json"), "utf8")) as { id: string }[];
const gameIds = new Set([...games.map((g) => g.id), "scott", "scottgames-site"]);

const ids = new Set<string>();
for (const e of evidence) {
  if (ids.has(e.id)) errors.push(`duplicate evidence id ${e.id}`);
  ids.add(e.id);
  for (const k of ["id", "title", "claim", "game", "kind", "location", "certainty", "when"] as const) if (!e[k]) errors.push(`${e.id}: missing ${k}`);
  if (!gameIds.has(e.game)) errors.push(`${e.id}: unknown game ${e.game}`);
  if (!["stated", "shown", "implied"].includes(e.certainty)) errors.push(`${e.id}: bad certainty ${e.certainty}`);
  if (e.quote && e.quote.split(/\s+/).length > 45) errors.push(`${e.id}: quote too long (${e.quote.split(/\s+/).length} words)`);
  if (e.image && !fs.existsSync(path.join(root, "public/img", e.image))) errors.push(`${e.id}: image missing ${e.image}`);
}
for (const e of evidence) for (const r of e.related ?? []) if (!ids.has(r)) warnings.push(`${e.id}: related -> unknown ${r}`);

const personIds = new Set(people.map((p) => p.id));
const placeIds = new Set(places.map((p) => p.id));
const need = (where: string, list: string[]) => { for (const id of list) if (!ids.has(id)) errors.push(`${where}: unknown evidence ${id}`); };
for (const p of people) { need(`person ${p.id}`, p.evidence); if (p.image && !fs.existsSync(path.join(root, "public/img", p.image))) errors.push(`person ${p.id}: image missing`); }
for (const p of places) { need(`place ${p.id}`, p.evidence); if (p.image && !fs.existsSync(path.join(root, "public/img", p.image))) errors.push(`place ${p.id}: image missing`); }
for (const r of relations) {
  need(`relation ${r.from}->${r.to}`, r.evidence);
  if (!personIds.has(r.from)) errors.push(`relation: unknown person ${r.from}`);
  if (!personIds.has(r.to)) errors.push(`relation: unknown person ${r.to}`);
  if (!r.evidence.length) errors.push(`relation ${r.from}->${r.to}: no evidence`);
}
const eraIds = new Set(eras.map((e) => e.id));
const tIds = new Set<string>();
for (const t of timeline) {
  if (tIds.has(t.id)) errors.push(`duplicate timeline id ${t.id}`);
  tIds.add(t.id);
  need(`event ${t.id}`, t.evidence);
  if (!t.evidence.length) errors.push(`event ${t.id}: no evidence`);
  if (!eraIds.has(t.era)) errors.push(`event ${t.id}: unknown era ${t.era}`);
  for (const p of t.people ?? []) if (!personIds.has(p)) errors.push(`event ${t.id}: unknown person ${p}`);
  for (const p of t.places ?? []) if (!placeIds.has(p)) errors.push(`event ${t.id}: unknown place ${p}`);
}
const textRefs = (where: string, s: string) => {
  for (const m of s.matchAll(/\[\[([a-z0-9-]+)\]\]/g)) if (!ids.has(m[1])) errors.push(`${where}: unknown citation ${m[1]}`);
  for (const m of s.matchAll(/<<([^|>]+)\|([a-z]+)\|([a-z0-9,-]*)\|([^>]*)>>/g)) {
    if (!["printed", "derived", "estimated", "relative", "teaser", "unknown"].includes(m[2])) errors.push(`${where}: bad date kind ${m[2]}`);
    for (const id of m[3].split(",").filter(Boolean)) if (!ids.has(id)) errors.push(`${where}: date token cites unknown ${id}`);
  }
  for (const m of s.matchAll(/\{\{([a-z0-9-]+)\}\}/g)) if (!personIds.has(m[1]) && !placeIds.has(m[1])) errors.push(`${where}: unknown entity ${m[1]}`);
};
for (const s of theory) { s.body.forEach((b) => textRefs(`theory ${s.id}`, b)); need(`theory ${s.id} counter`, s.counterEvidence ?? []); }
for (const t of timeline) textRefs(`event ${t.id}`, t.summary);
for (const p of people) { textRefs(`person ${p.id}`, p.summary); if (p.theory) textRefs(`person ${p.id} theory`, p.theory); }
for (const p of places) textRefs(`place ${p.id}`, p.summary);
for (const h of homeSummary) textRefs(`home ${h.title}`, h.text);
for (const p of people) textRefs(`person ${p.id} status`, p.status);
for (const t of timeline) if (!EVENT_DATES[t.id]) errors.push(`event ${t.id}: no date justification`);
for (const [k, d] of Object.entries({ ...EVENT_DATES, ...ERA_DATES, ...PLACE_DATES, ...GAME_DATES })) need(`date ${k}`, d.evidence);
for (const e of eras) if (!ERA_DATES[e.id]) errors.push(`era ${e.id}: no date justification`);
for (const t of familyTrees) for (const m of t.members) if (!personIds.has(m.id)) errors.push(`tree ${t.id}: unknown person ${m.id}`);
for (const c of credits) if (!fs.existsSync(path.join(root, "public/img", c.file))) errors.push(`credit: missing file ${c.file}`);
const credited = new Set(credits.map((c) => c.file));
for (const f of fs.readdirSync(path.join(root, "public/img"))) if (!credited.has(f)) warnings.push(`image without credit: ${f}`);

const undefinedEntities = new Map<string, number>();
for (const e of evidence) for (const x of [...(e.people ?? []), ...(e.places ?? [])]) if (!personIds.has(x) && !placeIds.has(x)) undefinedEntities.set(x, (undefinedEntities.get(x) ?? 0) + 1);
if (undefinedEntities.size) warnings.push(`entities used on evidence without a page: ${[...undefinedEntities].sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k}(${n})`).join(", ")}`);

const cited = new Set<string>([...people.flatMap((p) => p.evidence), ...timeline.flatMap((t) => t.evidence), ...relations.flatMap((r) => r.evidence), ...theory.flatMap((s) => s.body.flatMap((b) => [...b.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1])))]);
console.log(`evidence=${evidence.length} credits=${credits.length} people=${people.length} places=${places.length} relations=${relations.length} events=${timeline.length} theory=${theory.length}`);
console.log(`evidence cited by higher layers: ${[...ids].filter((i) => cited.has(i)).length}/${ids.size}`);
for (const w of warnings) console.log("WARN", w);
for (const e of errors) console.log("ERROR", e);
if (errors.length) { console.log(`${errors.length} errors`); process.exit(1); }
console.log("OK");
