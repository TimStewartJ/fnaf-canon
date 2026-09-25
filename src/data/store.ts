import type { Evidence, GameId, ImageCredit, Person, Place, Relation, TheorySection, TimelineEvent } from "./schema";
import { people as peopleData } from "./people";
import { relations } from "./relations";
import { places as placesData } from "./places";
import { timeline, eras } from "./timeline";
import { theory } from "./theory";
import gamesJson from "./games.json";

const evidenceModules = import.meta.glob<{ default: Evidence[] }>("./evidence/*.json", { eager: true });
const creditModules = import.meta.glob<{ default: ImageCredit[] }>("./credits/*.json", { eager: true });

export interface GameInfo {
  id: GameId;
  title: string;
  released: string;
  developer: string;
  summary: string;
  settingYearLabel: string;
}

const extraSources: GameInfo[] = [
  { id: "scott", title: "Scott Cawthon (own statements)", released: "2014-08-08", developer: "Scott Cawthon", summary: "Posts and comments written by the series creator himself.", settingYearLabel: "Out-of-universe" },
  { id: "scottgames-site", title: "scottgames.com teasers", released: "2014-08-08", developer: "Scott Cawthon", summary: "Official teaser images and text published on Scott's website.", settingYearLabel: "Out-of-universe" },
];

export const games: GameInfo[] = [...(gamesJson as GameInfo[]), ...extraSources];
export const gameById = new Map(games.map((g) => [g.id, g]));

export const evidence: Evidence[] = Object.values(evidenceModules)
  .flatMap((m) => m.default)
  .sort((a, b) => (a.when.year ?? 9999) - (b.when.year ?? 9999) || a.id.localeCompare(b.id));
export const evidenceById = new Map(evidence.map((e) => [e.id, e]));

export const credits: ImageCredit[] = Object.values(creditModules).flatMap((m) => m.default);
export const creditByFile = new Map(credits.map((c) => [c.file, c]));

const titleCase = (id: string) => id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/** Entities referenced by evidence but without a hand-written page get an evidence-only stub page. */
function stubPeople(): Person[] {
  const known = new Set(peopleData.map((p) => p.id));
  const seen = new Map<string, Evidence[]>();
  for (const e of evidence) for (const id of e.people ?? []) if (!known.has(id)) seen.set(id, [...(seen.get(id) ?? []), e]);
  return [...seen].map(([id, evs]) => ({
    id, name: titleCase(id), aliases: [], nameStatus: "descriptor" as const, group: "other" as const,
    summary: `Minor figure. Appears in ${evs.length} evidence record${evs.length > 1 ? "s" : ""}; see the list below.`,
    status: "—", firstAppearance: evs[0].game, evidence: evs.map((e) => e.id),
  }));
}
function stubPlaces(): Place[] {
  const known = new Set(placesData.map((p) => p.id));
  const seen = new Map<string, Evidence[]>();
  for (const e of evidence) for (const id of e.places ?? []) if (!known.has(id)) seen.set(id, [...(seen.get(id) ?? []), e]);
  return [...seen].map(([id, evs]) => ({ id, name: titleCase(id), years: evs[0].when.label, summary: `Minor location. Appears in ${evs.length} evidence record${evs.length > 1 ? "s" : ""}.`, evidence: evs.map((e) => e.id) }));
}
export const people: Person[] = [...peopleData, ...stubPeople()];
export const places: Place[] = [...placesData, ...stubPlaces()];
export { relations, timeline, eras, theory };
export const personById = new Map<string, Person>(people.map((p) => [p.id, p]));
export const placeById = new Map<string, Place>(places.map((p) => [p.id, p]));

/** Evidence ids -> everything that cites them (for backlinks). */
export interface Backlinks {
  people: Person[];
  places: Place[];
  events: TimelineEvent[];
  relations: Relation[];
  theory: TheorySection[];
  evidence: Evidence[];
}

const citeRe = /\[\[([a-z0-9-]+)\]\]/g;
export function citationsIn(section: TheorySection): string[] {
  const ids = new Set<string>();
  for (const block of section.body) for (const m of block.matchAll(citeRe)) ids.add(m[1]);
  for (const c of section.counterEvidence ?? []) ids.add(c);
  return [...ids];
}

const backlinkIndex = new Map<string, Backlinks>();
function bl(id: string): Backlinks {
  let b = backlinkIndex.get(id);
  if (!b) {
    b = { people: [], places: [], events: [], relations: [], theory: [], evidence: [] };
    backlinkIndex.set(id, b);
  }
  return b;
}
for (const p of people) for (const id of p.evidence) bl(id).people.push(p);
for (const p of places) for (const id of p.evidence) bl(id).places.push(p);
for (const t of timeline) for (const id of t.evidence) bl(id).events.push(t);
for (const r of relations) for (const id of r.evidence) bl(id).relations.push(r);
for (const s of theory) for (const id of citationsIn(s)) bl(id).theory.push(s);
for (const e of evidence) for (const id of e.related ?? []) {
  bl(id).evidence.push(e);
}
export function backlinksFor(id: string): Backlinks {
  return backlinkIndex.get(id) ?? { people: [], places: [], events: [], relations: [], theory: [], evidence: [] };
}

/** Evidence directly tagged with a person (plus what the person record cites). */
export function evidenceForPerson(pid: string): Evidence[] {
  const p = personById.get(pid);
  const ids = new Set<string>(p?.evidence ?? []);
  for (const e of evidence) if (e.people?.includes(pid)) ids.add(e.id);
  return [...ids].map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e)
    .sort((a, b) => (a.when.year ?? 9999) - (b.when.year ?? 9999));
}

export function evidenceForPlace(pid: string): Evidence[] {
  const p = placeById.get(pid);
  const ids = new Set<string>(p?.evidence ?? []);
  for (const e of evidence) if (e.places?.includes(pid)) ids.add(e.id);
  return [...ids].map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e)
    .sort((a, b) => (a.when.year ?? 9999) - (b.when.year ?? 9999));
}

export const allTags: string[] = [...new Set(evidence.flatMap((e) => e.tags ?? []))].sort();

export function labelForEntity(id: string): string {
  return personById.get(id)?.name ?? placeById.get(id)?.name ?? id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
