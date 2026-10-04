/* Validates referential integrity of the canon data. Run: npx tsx scripts/validate.ts */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Evidence, ImageCredit } from "../src/data/schema";
import { people } from "../src/data/people";
import { relations } from "../src/data/relations";
import { places } from "../src/data/places";
import { timeline, eras } from "../src/data/timeline";
import { outsideStory, storyline, theory, theoryIntro, theoryParts } from "../src/data/theory";
import { beatCitations, blockEvidenceIds, citationsIn, inlineCitations, sectionImages, sectionRefsInText, sectionTexts } from "../src/data/theoryText";
import { familyTrees } from "../src/data/familyTrees";
import { homeSummary, keyQuestions } from "../src/data/home";
import { EVENT_DATES, ERA_DATES, PLACE_DATES, GAME_DATES } from "../src/data/dates";
import { auditLedger } from "../research/audit-ledger";
import { deaths } from "../src/data/deaths";
import { boxAnswer, boxTimeline, boxGuesses } from "../src/data/box";
import { theories as commTheories, interactions } from "../src/data/community";
import { authorAnswer, authorTimeline, lexicon, readings } from "../src/data/author";
import { LOCATION_SPANS } from "../src/data/locations";

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
// What a reader is shown as the record itself (its title, claim, quote and place) names no other
// record by id. A pointer to a related record belongs in the notes, where the interface prints it
// as that record's title, or in `related`.
for (const e of evidence) for (const k of ["title", "claim", "quote", "location"] as const) {
  for (const m of (e[k] ?? "").matchAll(/(^|[^\p{L}\p{N}_/.#=-])([a-z0-9]+(?:-[a-z0-9]+)+)(?![\p{L}\p{N}_/-])/gu)) {
    if (m[2] !== e.id && ids.has(m[2])) errors.push(`${e.id}: ${k} names the record ${m[2]} by id; move the pointer to notes`);
  }
}

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
const theoryIds = new Set(theory.map((x) => x.id));
const textRefs = (where: string, s: string) => {
  for (const m of s.matchAll(/\[\[([a-z0-9-]+)\]\]/g)) if (!ids.has(m[1])) errors.push(`${where}: unknown citation ${m[1]}`);
  for (const ref of sectionRefsInText(s)) if (!theoryIds.has(ref)) errors.push(`${where}: unknown theory chapter ((${ref}))`);
  for (const m of s.matchAll(/<<([^|>]+)\|([a-z]+)\|([a-z0-9,-]*)\|([^>]*)>>/g)) {
    if (!["printed", "derived", "estimated", "relative", "teaser", "unknown"].includes(m[2])) errors.push(`${where}: bad date kind ${m[2]}`);
    for (const id of m[3].split(",").filter(Boolean)) if (!ids.has(id)) errors.push(`${where}: date token cites unknown ${id}`);
  }
  for (const m of s.matchAll(/\{\{([a-z0-9-]+)\}\}/g)) if (!personIds.has(m[1]) && !placeIds.has(m[1])) errors.push(`${where}: unknown entity ${m[1]}`);
};
// ── Theory: chapters, parts, storyline, intro (see the content contract in src/data/schema.ts) ──
const imgDir = path.join(root, "public/img");
const creditedFiles = new Set(credits.map((c) => c.file));
const needImage = (where: string, file: string) => {
  if (!fs.existsSync(path.join(imgDir, file))) errors.push(`${where}: image missing ${file}`);
  else if (!creditedFiles.has(file)) errors.push(`${where}: image ${file} has no credit in src/data/credits`);
};
const partIds = new Set(theoryParts.map((p) => p.id));
if (partIds.size !== theoryParts.length) errors.push("theoryParts: duplicate part id");
const evQuote = new Map(evidence.map((e) => [e.id, e.quote]));
const norm = (q: string) => q.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();
if (theoryIds.size !== theory.length) errors.push("theory: duplicate chapter id");
for (const s of theory) {
  const where = `theory ${s.id}`;
  for (const t of sectionTexts(s)) textRefs(where, t);
  need(`${where} counter`, s.counterEvidence ?? []);
  // "What pushes back" lists these records, and "how the model handles it" must answer each one:
  // a record listed against a chapter that its reply never cites is a record explained away by silence.
  {
    const answered = new Set([...(s.tension ?? "").matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1]));
    const silent = (s.counterEvidence ?? []).filter((id) => !answered.has(id));
    if (silent.length) errors.push(`${where}: ${silent.length} of its counter-evidence records ${silent.length === 1 ? "is" : "are"} not cited in its tension: ${silent.join(", ")}`);
  }
  need(`${where} further`, s.further ?? []);
  for (const b of s.body) {
    need(`${where} block`, blockEvidenceIds(b));
    if (typeof b === "string") continue;
    if (b.kind === "quote") {
      const q = evQuote.get(b.evidence);
      if (!q) errors.push(`${where}: quote block cites ${b.evidence}, which has no quote`);
      else if (b.text && !norm(q).includes(norm(b.text))) errors.push(`${where}: quote block text is not a verbatim part of ${b.evidence}'s quote`);
    }
    if (b.kind === "compare" && b.columns.filter((c) => c.pick).length > 1) warnings.push(`${where}: compare block marks more than one column as the pick`);
    if (b.kind === "table") for (const r of b.rows) if (r.length !== b.head.length) errors.push(`${where}: table row has ${r.length} cells, head has ${b.head.length}`);
  }
  for (const img of sectionImages(s)) needImage(where, img);
  if (s.part && !partIds.has(s.part)) errors.push(`${where}: unknown part ${s.part}`);
  if (theoryParts.length && !s.part) warnings.push(`${where}: no part assigned`);
  for (const id of s.seeAlso ?? []) { if (!theoryIds.has(id)) errors.push(`${where}: seeAlso -> unknown chapter ${id}`); if (id === s.id) errors.push(`${where}: seeAlso points at itself`); }
  const inline = new Set(citationsIn(s));
  for (const id of s.further ?? []) if (inline.has(id)) warnings.push(`${where}: ${id} is in 'further' but already cited in the chapter`);
}
for (const p of theoryParts) { textRefs(`part ${p.id}`, p.blurb); if (!theory.some((s) => s.part === p.id)) warnings.push(`part ${p.id}: no chapters`); }
textRefs("theoryIntro", theoryIntro.thesis); theoryIntro.howToRead.forEach((t) => textRefs("theoryIntro", t));
if (theoryIntro.aboutChapters) textRefs("theoryIntro", theoryIntro.aboutChapters);
const beatIds = new Set<string>();
for (const b of storyline) {
  if (beatIds.has(b.id)) errors.push(`storyline: duplicate beat ${b.id}`); beatIds.add(b.id);
  textRefs(`beat ${b.id}`, b.when); textRefs(`beat ${b.id}`, b.text);
  if (!b.sections.length) errors.push(`beat ${b.id}: no chapters listed`);
  for (const id of b.sections) if (!theoryIds.has(id)) errors.push(`beat ${b.id}: unknown chapter ${id}`);
  if (b.image) needImage(`beat ${b.id}`, b.image);
  if (b.era && !eraIds.has(b.era)) errors.push(`beat ${b.id}: unknown era ${b.era}`);
  if (!beatCitations(b).length) warnings.push(`beat ${b.id}: cites no evidence`);
}
const outsideIds = new Set<string>();
for (const g of outsideStory) { textRefs(`outsideStory ${g.id}`, g.reason); need(`outsideStory ${g.id}`, g.ids); for (const id of g.ids) outsideIds.add(id); }
// Book-only names must not be used as names in the model (they may be discussed on the Theorists page).
const BOOK_ONLY = /\b(Henry|Charlie|Charlotte|Evan|Cassidy|Emily)\b/;
/** Fan labels the archive keeps out of its own text. They may stand only as a marked alias on a person. */
const FAN_LABEL = /(Shadow Freddy|RWQFSFASXC|\bthe Blob\b|\bTangle\b|Tape Girl|Phone Dude|\bMCI\b|Missing Children Incident|Bite of .?83|TOYSNHK)/;
const MARKED_ALIAS = /\((?:[^)]*\b)?(a fan name|a file name)[^)]*\)$/;
/** Strip citation, entity and chapter tokens so that ids never trip a name check. */
const proseOnly = (t: string) => t.replace(/\[\[[^\]]*\]\]|\{\{[^}]*\}\}|\(\([^)]*\)\)/g, " ").replace(/<<([^|>]*)\|[^>]*>>/g, "$1");
const nameCheck = (where: string, texts: (string | undefined)[], listsFanLabels = false) => {
  for (const raw of texts) {
    if (!raw) continue;
    const t = proseOnly(raw);
    const b = t.match(BOOK_ONLY); if (b) errors.push(`${where}: uses the book-only name "${b[1]}"`);
    const f = listsFanLabels ? null : t.match(FAN_LABEL); if (f) errors.push(`${where}: uses the fan label "${f[1]}" (write the descriptor; a fan label may stand only as a marked alias)`);
  }
};
// The chapter on the rules is the one place that lists the labels the archive does not use, each beside its descriptor.
for (const s of theory) nameCheck(`theory ${s.id}`, [s.title, s.question, ...sectionTexts(s)], s.id === "canon-rules");
for (const b of storyline) nameCheck(`beat ${b.id}`, [b.title, b.text, b.when]);
for (const p of theoryParts) nameCheck(`part ${p.id}`, [p.title, p.blurb, p.kicker]);
for (const p of people) {
  nameCheck(`person ${p.id}`, [p.name, p.summary, p.theory, (p as { status?: string }).status]);
  for (const a of p.aliases ?? []) { if (BOOK_ONLY.test(a)) errors.push(`person ${p.id}: alias uses a book-only name ("${a}")`); if (FAN_LABEL.test(a) && !MARKED_ALIAS.test(a)) errors.push(`person ${p.id}: the alias "${a}" is a fan label and must be marked "(a fan name)" or "(a file name)"`); }
}
for (const r of relations) nameCheck(`relation ${r.from}->${r.to}`, [(r as { note?: string }).note]);
for (const t of timeline) nameCheck(`event ${t.id}`, [t.title, t.summary]);
for (const e of eras) nameCheck(`era ${e.id}`, [(e as { name?: string }).name, (e as { summary?: string }).summary]);
for (const p of places) nameCheck(`place ${p.id}`, [p.name, p.summary]);
for (const t of familyTrees) nameCheck(`tree ${t.id}`, [(t as { title?: string }).title, (t as { description?: string }).description]);
for (const d of deaths) nameCheck(`death ${d.id}`, [d.title, d.victimLabel, d.byLabel, d.note]);
for (const c of homeSummary) nameCheck(`home card ${c.title}`, [c.title, c.text]);
for (const q of keyQuestions) nameCheck(`home question ${q.q}`, [q.q, q.a]);
for (const t of timeline) textRefs(`event ${t.id}`, t.summary);
for (const p of people) { textRefs(`person ${p.id}`, p.summary); if (p.theory) textRefs(`person ${p.id} theory`, p.theory); }
for (const p of places) textRefs(`place ${p.id}`, p.summary);
for (const h of homeSummary) textRefs(`home ${h.title}`, h.text);
for (const q of keyQuestions) { textRefs(`home question ${q.q}`, q.a); if (!theoryIds.has(q.section)) errors.push(`home question "${q.q}": unknown theory chapter ${q.section}`); }
for (const p of people) textRefs(`person ${p.id} status`, p.status);
for (const a of auditLedger) { textRefs(`audit ${a.id}`, a.problem + " " + a.resolution); need(`audit ${a.id}`, a.evidence); for (const sct of a.sections) if (!theoryIds.has(sct)) errors.push(`audit ${a.id}: unknown theory section ${sct}`); }
for (const t of timeline) if (!EVENT_DATES[t.id]) errors.push(`event ${t.id}: no date justification`);
for (const [k, d] of Object.entries({ ...EVENT_DATES, ...ERA_DATES, ...PLACE_DATES, ...GAME_DATES })) need(`date ${k}`, d.evidence);
for (const e of eras) if (!ERA_DATES[e.id]) errors.push(`era ${e.id}: no date justification`);
for (const t of familyTrees) for (const m of t.members) if (!personIds.has(m.id)) errors.push(`tree ${t.id}: unknown person ${m.id}`);
for (const c of credits) if (!fs.existsSync(path.join(root, "public/img", c.file))) errors.push(`credit: missing file ${c.file}`);
const credited = new Set(credits.map((c) => c.file));
for (const f of fs.readdirSync(path.join(root, "public/img"))) if (!credited.has(f)) warnings.push(`image without credit: ${f}`);
// Small copies of the images (public/thumb, made by scripts/thumbs.py). Its manifest holds a hash of every
// image the script has looked at: those it made a copy of ("copies") and those it left alone ("as-is").
// A copy made from an image that has since changed would show the old picture: an error. An image the
// script has not looked at is only served whole until it is: a warning.
{
  const thumbDir = path.join(root, "public/thumb");
  const manifestPath = path.join(root, "scripts/thumbs-manifest.json");
  if (fs.existsSync(manifestPath) && fs.existsSync(thumbDir)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as { copies?: Record<string, string>; "as-is"?: Record<string, string> };
    const copies = manifest.copies ?? {}, asIs = manifest["as-is"] ?? {};
    const redo = "run python3 scripts/thumbs.py";
    const digestOf = (file: string) => crypto.createHash("sha1").update(fs.readFileSync(path.join(root, "public/img", file))).digest("hex");
    for (const [file, digest] of Object.entries(copies)) {
      if (!fs.existsSync(path.join(root, "public/img", file))) { errors.push(`thumbnail of a missing image: ${file} (${redo})`); continue; }
      if (digestOf(file) !== digest) errors.push(`thumbnail out of date: ${file} (${redo})`);
      if (!fs.existsSync(path.join(thumbDir, `${file}.webp`))) errors.push(`thumbnail missing: ${file} (${redo})`);
    }
    for (const f of fs.readdirSync(thumbDir)) if (f.endsWith(".webp") && !(f.slice(0, -".webp".length) in copies)) errors.push(`thumbnail without a source: ${f} (${redo})`);
    for (const f of fs.readdirSync(path.join(root, "public/img"))) {
      if (!/\.(png|jpe?g|webp|gif)$/i.test(f) || f in copies) continue;
      if (asIs[f] === undefined || asIs[f] !== digestOf(f)) warnings.push(`image that scripts/thumbs.py has not looked at, served whole until it has: ${f} (${redo})`);
    }
  }
}

// ── Consistency rules added by the theory audit ──
const evById = new Map(evidence.map((e) => [e.id, e]));
const onlyImplied = (list: string[]) => list.length > 0 && list.every((id) => evById.get(id)?.certainty === "implied");
for (const r of relations) if (r.status === "canon" && onlyImplied(r.evidence)) errors.push(`relation ${r.from}->${r.to}: canon status rests only on implied evidence`);
for (const t of timeline) if (t.status === "canon" && onlyImplied(t.evidence)) errors.push(`event ${t.id}: canon status rests only on implied evidence`);
// Eras must not overlap in sort order.
const eraOrder = eras.map((e) => e.id);
for (let i = 0; i + 1 < eraOrder.length; i++) {
  const a = timeline.filter((t) => t.era === eraOrder[i]).map((t) => t.year);
  const b = timeline.filter((t) => t.era === eraOrder[i + 1]).map((t) => t.year);
  if (a.length && b.length && Math.max(...a) > Math.min(...b)) errors.push(`era order: ${eraOrder[i]} (max ${Math.max(...a)}) overlaps ${eraOrder[i + 1]} (min ${Math.min(...b)})`);
}
// A 'printed' date justification must cite at least one non-implied record.
for (const [k, d] of Object.entries(EVENT_DATES)) if (d.kind === "printed" && onlyImplied(d.evidence)) errors.push(`date ${k}: 'printed' but only implied evidence`);
// Non-high-confidence theory sections must show their counter-evidence (except the explicit open-questions section).
for (const sct of theory) if (sct.confidence !== "high" && sct.id !== "open" && !(sct.counterEvidence?.length)) warnings.push(`theory ${sct.id}: ${sct.confidence} confidence but no counter-evidence listed`);
// Identity groups: a record may not be 'same-as' two different canonical people.
const sameAs = new Map<string, Set<string>>();
for (const r of relations.filter((x) => x.kind === "same-as")) { (sameAs.get(r.from) ?? sameAs.set(r.from, new Set()).get(r.from)!).add(r.to); }
for (const [from, tos] of sameAs) if (tos.size > 1) warnings.push(`identity: ${from} is same-as several records (${[...tos].join(", ")}); check they converge`);

// Box and community pages
for (const a of boxAnswer) a.body.forEach((b) => textRefs(`box answer`, b));
for (const b of boxTimeline) { textRefs(`box ${b.id}`, b.body); need(`box ${b.id}`, b.evidence); if (b.image && !fs.existsSync(path.join(root, "public/img", b.image))) errors.push(`box ${b.id}: image missing`); }
for (const g of boxGuesses) textRefs(`box guess ${g.name}`, g.verdict);
// Scott & Faith page
for (const a of authorAnswer) a.body.forEach((b) => textRefs(`author answer`, b));
for (const s of authorTimeline) { textRefs(`author ${s.id}`, s.body); need(`author ${s.id}`, s.evidence); if (s.image && !fs.existsSync(path.join(root, "public/img", s.image))) errors.push(`author ${s.id}: image missing`); }
for (const g of lexicon) need(`lexicon ${g.id}`, g.lines.map((l) => (typeof l === "string" ? l : l[0])));
for (const r of readings) { textRefs(`reading ${r.claim}`, r.body); if (r.section && !theory.some((x) => x.id === r.section)) errors.push(`reading: unknown theory section ${r.section}`); }
for (const t of commTheories) { for (const f of [t.right, t.wrong, t.scott ?? ""]) textRefs(`community ${t.id}`, f); if (t.modelSection && !theory.some((x) => x.id === t.modelSection)) errors.push(`community ${t.id}: unknown theory section ${t.modelSection}`); }
for (const x of interactions) { textRefs(`interaction ${x.id}`, x.summary); need(`interaction ${x.id}`, x.evidence); }

// Deaths and location spans
const taggedPeople = new Set(evidence.flatMap((e) => e.people ?? []));
const allPlaceIds = new Set([...placeIds, ...evidence.flatMap((e) => e.places ?? [])]);
const dIds = new Set<string>();
for (const d of deaths) {
  if (dIds.has(d.id)) errors.push(`duplicate death ${d.id}`); dIds.add(d.id);
  need(`death ${d.id}`, d.evidence); need(`death ${d.id} date`, d.date.evidence);
  if (!d.evidence.length) errors.push(`death ${d.id}: no evidence`);
  for (const x of [...d.victims, ...d.by]) if (!personIds.has(x) && !taggedPeople.has(x)) errors.push(`death ${d.id}: unknown person ${x}`);
  if (d.place && !placeIds.has(d.place)) errors.push(`death ${d.id}: unknown place ${d.place}`);
  if (!eraIds.has(d.era)) errors.push(`death ${d.id}: unknown era ${d.era}`);
  if (d.status === "canon" && onlyImplied(d.evidence)) errors.push(`death ${d.id}: canon status rests only on implied evidence`);
}
for (const pid of allPlaceIds) {
  const p = { id: pid };
  const sp = LOCATION_SPANS[p.id];
  if (!sp) { errors.push(`place ${p.id}: no timeline span in locations.ts`); continue; }
  if (!sp.undated && !sp.outside && (!sp.from || !sp.to || !eraIds.has(sp.from) || !eraIds.has(sp.to))) errors.push(`place ${p.id}: bad span`);
  if (sp.from && sp.to && eraOrder.indexOf(sp.from) > eraOrder.indexOf(sp.to)) errors.push(`place ${p.id}: span ends before it starts`);
}
for (const k of Object.keys(LOCATION_SPANS)) if (!placeIds.has(k)) errors.push(`locations.ts: span for unknown place ${k}`);
for (const p of places) if (!PLACE_DATES[p.id]) errors.push(`place ${p.id}: no date justification in dates.ts`);

const undefinedEntities = new Map<string, number>();
for (const e of evidence) for (const x of [...(e.people ?? []), ...(e.places ?? [])]) if (!personIds.has(x) && !placeIds.has(x)) undefinedEntities.set(x, (undefinedEntities.get(x) ?? 0) + 1);
if (undefinedEntities.size) warnings.push(`entities used on evidence without a page: ${[...undefinedEntities].sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k}(${n})`).join(", ")}`);

const cited = new Set<string>([...people.flatMap((p) => p.evidence), ...timeline.flatMap((t) => t.evidence), ...relations.flatMap((r) => r.evidence), ...theory.flatMap((s) => citationsIn(s))]);
console.log(`evidence=${evidence.length} credits=${credits.length} people=${people.length} places=${places.length} relations=${relations.length} events=${timeline.length} theory=${theory.length} parts=${theoryParts.length} beats=${storyline.length}`);
console.log(`evidence cited by higher layers: ${[...ids].filter((i) => cited.has(i)).length}/${ids.size}`);

// ── Coverage: every record should be cited by a chapter, filed under one, or listed in outsideStory ──
const inlineAll = new Set(theory.flatMap((s) => inlineCitations(s)));
const counterAll = new Set(theory.flatMap((s) => s.counterEvidence ?? []));
const furtherAll = new Set(theory.flatMap((s) => s.further ?? []));
const storyAll = new Set(storyline.flatMap((b) => beatCitations(b)));
const inModel = new Set([...inlineAll, ...counterAll, ...furtherAll, ...storyAll]);
for (const id of outsideIds) if (inlineAll.has(id) || counterAll.has(id) || furtherAll.has(id)) errors.push(`coverage: ${id} is listed in outsideStory but also used by a chapter`);
const unaccounted = [...ids].filter((i) => !inModel.has(i) && !outsideIds.has(i));
console.log(`theory coverage: ${ids.size - unaccounted.length}/${ids.size} accounted (cited inline ${inlineAll.size}, counter-evidence ${counterAll.size}, filed as further ${furtherAll.size}, outside the story ${outsideIds.size}); unaccounted ${unaccounted.length}`);
const byGame = new Map<string, number>();
for (const id of unaccounted) { const g = evById.get(id)!.game; byGame.set(g, (byGame.get(g) ?? 0) + 1); }
if (unaccounted.length) console.log(`  unaccounted by source: ${[...byGame].sort((a, b) => b[1] - a[1]).map(([g, n]) => `${g} ${n}`).join(", ")}`);
if (process.argv.includes("--list-unaccounted")) for (const id of unaccounted) console.log(`  UNACCOUNTED ${id}`);
// HARDENED: coverage is an error unless --allow-unaccounted is given.
if (!process.argv.includes("--allow-unaccounted") && unaccounted.length) errors.push(`coverage: ${unaccounted.length} evidence records are not cited, filed or listed as outside the story (run with --list-unaccounted)`);
for (const w of warnings) console.log("WARN", w);
for (const e of errors) console.log("ERROR", e);
if (errors.length) { console.log(`${errors.length} errors`); process.exit(1); }
console.log("OK");
