/**
 * The web: every person with at least one recorded tie, and the ties between them. No components here.
 *
 * With `unified` on, each record is replaced by the person the model reads it as (identities, forms,
 * vessels and roles all fold in). Ties whose ends then coincide are merged into one line that keeps
 * every underlying relation and its evidence; ties that end up inside one person disappear, because
 * that person's page shows them as identity.
 */
import type { Person, Relation, Status } from "../../data/schema";
import { evidenceForPerson, people, personById, relations } from "../../data/store";
import { canonicalId } from "../../data/model";
import { beingOf, evidenceOf } from "./identity";
import { STATUS_RANK, type DrawnTie } from "./ties";

export interface WebNode {
  id: string;
  group: Person["group"];
  /** Evidence records filed under the person (and, unified, under everything folded into them). */
  weight: number;
  /** Ties drawn to or from the person. */
  degree: number;
  /** Records folded into the person, when unified. */
  folded: string[];
}

export type WebTie = DrawnTie;

export interface Web {
  nodes: WebNode[];
  ties: WebTie[];
  byId: Map<string, WebNode>;
  /** For each person, the ties that touch them. */
  tiesOf: Map<string, WebTie[]>;
  /** For each person, the relations behind those ties, as recorded. */
  relsOf: Map<string, Relation[]>;
  /** How many relations the picture stands for (several can share one line). */
  relCount: number;
  /** People with a page who have no tie under the current filters. */
  untied: number;
}

export const webKey = (from: string, kind: string, to: string) => `${from}~${kind}~${to}`;

export function buildWeb(statuses: ReadonlySet<Status>, unified: boolean): Web {
  const map = (id: string) => (unified ? canonicalId(id) : id);
  const ties = new Map<string, WebTie>();
  for (const r of relations) {
    if (!statuses.has(r.status) || !personById.has(r.from) || !personById.has(r.to)) continue;
    const from = map(r.from), to = map(r.to);
    if (from === to) continue;
    const key = webKey(from, r.kind, to);
    const t = ties.get(key);
    if (!t) ties.set(key, { key, from, to, kind: r.kind, status: r.status, rels: [r] });
    else ties.set(key, { ...t, rels: [...t.rels, r], status: STATUS_RANK[r.status] > STATUS_RANK[t.status] ? r.status : t.status });
  }
  const tiesOf = new Map<string, WebTie[]>();
  const relsOf = new Map<string, Relation[]>();
  for (const t of ties.values()) {
    for (const id of [t.from, t.to]) {
      tiesOf.set(id, [...(tiesOf.get(id) ?? []), t]);
      relsOf.set(id, [...(relsOf.get(id) ?? []), ...t.rels]);
    }
  }

  const nodes: WebNode[] = [];
  for (const p of people) {
    const mine = tiesOf.get(p.id);
    if (!mine) continue;
    const records = unified ? (beingOf(p.id)?.nodes.map((n) => n.id) ?? [p.id]) : [p.id];
    nodes.push({
      id: p.id,
      group: p.group,
      weight: unified ? evidenceOf(records).length : evidenceForPerson(p.id).length,
      degree: mine.length,
      folded: records.filter((id) => id !== p.id),
    });
  }
  const shown = new Set(nodes.map((n) => n.id));
  // People with a profile of their own (not minor figures) who are neither drawn nor folded into someone drawn.
  const untied = people.filter((p) => p.group !== "other" && !shown.has(p.id) && !shown.has(map(p.id))).length;
  const drawn = [...ties.values()];
  return { nodes, ties: drawn, byId: new Map(nodes.map((n) => [n.id, n])), tiesOf, relsOf, relCount: drawn.reduce((n, t) => n + t.rels.length, 0), untied };
}

/** A person and everyone one tie away. */
export function neighbourhood(web: Web, id: string): Set<string> {
  const set = new Set([id]);
  for (const t of web.tiesOf.get(id) ?? []) { set.add(t.from); set.add(t.to); }
  return set;
}
