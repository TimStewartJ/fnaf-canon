/**
 * The Unified Model's identity layer.
 * - Identity: `same-as` relations merge records into one real person/being.
 * - Vessels: `possesses` / `wore` relations from a person attach machines, suits and roles to that person.
 * The weakest link on the path decides how firmly an alias belongs to its person.
 */
import type { Person, Relation, Status } from "./schema";
import { people, personById, relations } from "./store";

const RANK: Record<Status, number> = { canon: 3, strong: 2, theory: 1 };
export const weaker = (a: Status, b: Status): Status => (RANK[a] <= RANK[b] ? a : b);

/** Preferred canonical record when several merge (earlier wins). */
const PRIMARY = [
  "william-afton", "michael-afton", "elizabeth-afton", "crying-child", "cassette-man", "henrys-daughter",
  "missing-children", "vanessa", "gregory", "the-mimic", "edwin-murray",
];

export interface Link { id: string; status: Status; via: Relation[]; kind: "identity" | "form" | "vessel" | "role" }
export interface UnifiedPerson { root: Person; identities: Link[]; forms: Link[]; vessels: Link[]; roles: Link[]; members: string[] }

const isMachine = (id: string) => personById.get(id)?.group === "entity";
const isStub = (id: string) => personById.get(id)?.group === "other";

// Union-find over same-as edges.
const parent = new Map<string, string>();
const find = (x: string): string => { const p = parent.get(x) ?? x; if (p === x) return x; const r = find(p); parent.set(x, r); return r; };
const identityEdges = relations.filter((r) => r.kind === "same-as" && personById.has(r.from) && personById.has(r.to));
for (const r of identityEdges) parent.set(find(r.from), find(r.to));

const groups = new Map<string, string[]>();
for (const p of people) { const g = find(p.id); groups.set(g, [...(groups.get(g) ?? []), p.id]); }

function pickRoot(ids: string[]): string {
  for (const p of PRIMARY) if (ids.includes(p)) return p;
  const score = (id: string) => {
    const p = personById.get(id)!;
    return (p.group !== "entity" ? 100 : 0) + (p.nameStatus === "canon-name" ? 10 : 0) + (isStub(id) ? -1000 : 0) + p.evidence.length / 100;
  };
  return [...ids].sort((a, b) => score(b) - score(a))[0];
}

/** Best (strongest weakest-link) path from root to every member along same-as edges. */
function paths(root: string, members: string[]): Map<string, { status: Status; via: Relation[] }> {
  const best = new Map<string, { status: Status; via: Relation[] }>([[root, { status: "canon", via: [] }]]);
  const set = new Set(members);
  let changed = true;
  while (changed) {
    changed = false;
    for (const r of identityEdges) {
      for (const [a, b] of [[r.from, r.to], [r.to, r.from]] as const) {
        if (!set.has(a) || !set.has(b)) continue;
        const cur = best.get(b); if (!cur) continue;
        const cand = { status: weaker(cur.status, r.status), via: [...cur.via, r] };
        const prev = best.get(a);
        if (!prev || RANK[cand.status] > RANK[prev.status] || (cand.status === prev.status && cand.via.length < prev.via.length)) { best.set(a, cand); changed = true; }
      }
    }
  }
  return best;
}

export const rootOf = new Map<string, string>();
const unified = new Map<string, UnifiedPerson>();
for (const [, ids] of groups) {
  const root = pickRoot(ids);
  const ps = paths(root, ids);
  const identities: Link[] = []; const forms: Link[] = [];
  for (const id of ids) {
    rootOf.set(id, root);
    if (id === root) continue;
    const p = ps.get(id) ?? { status: "theory" as Status, via: [] };
    (isMachine(id) ? forms : identities).push({ id, ...p, kind: isMachine(id) ? "form" : "identity" });
  }
  unified.set(root, { root: personById.get(root)!, identities, forms, vessels: [], roles: [], members: ids });
}

// Vessels and roles: a (non-machine) member possesses/wore a machine or role in another group.
export const vesselOwner = new Map<string, { owner: string; link: Link }>();
for (const r of relations) {
  if (r.kind !== "possesses" && r.kind !== "wore") continue;
  if (!personById.has(r.from) || !personById.has(r.to) || isMachine(r.from)) continue;
  const owner = rootOf.get(r.from)!; const target = rootOf.get(r.to)!;
  if (owner === target) continue;
  if (r.kind === "possesses" && !isMachine(r.to) && !isMachine(target)) continue;
  const u = unified.get(owner)!;
  const link: Link = { id: target, status: r.status, via: [r], kind: r.kind === "wore" ? "role" : "vessel" };
  (r.kind === "wore" ? u.roles : u.vessels).push(link);
  if (!vesselOwner.has(target)) vesselOwner.set(target, { owner, link });
}

export const unifiedPeople: UnifiedPerson[] = [...unified.values()];
export const unifiedById = unified;

/** The canonical person a record ultimately belongs to, optionally folding vessels/roles too. */
export function canonicalId(id: string, opts: { identities?: boolean; vessels?: boolean } = { identities: true, vessels: true }): string {
  let cur = opts.identities === false ? id : rootOf.get(id) ?? id;
  const seen = new Set<string>();
  while (opts.vessels && !seen.has(cur)) {
    seen.add(cur);
    const v = vesselOwner.get(rootOf.get(cur) ?? cur);
    if (!v) break;
    cur = v.owner;
  }
  return cur;
}

/** How a record relates to its canonical person (for alias pages). */
export function membership(id: string): { root: string; link?: Link; viaVessel?: { owner: string; link: Link } } {
  const root = rootOf.get(id) ?? id;
  const u = unified.get(root);
  const link = u ? [...u.identities, ...u.forms].find((l) => l.id === id) : undefined;
  const viaVessel = vesselOwner.get(root);
  return { root, link, viaVessel };
}

export const isFoldedAway = (id: string) => (rootOf.get(id) ?? id) !== id || vesselOwner.has(id);
