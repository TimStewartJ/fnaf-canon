/**
 * A "being": one unified person of the model with every record folded into it, as a tree.
 *
 * data/model.ts says which records are one person (identities and forms, joined by same-as links)
 * and which machines and roles a person haunts or wore (vessels and roles). This file arranges that
 * into a tree for display: every record hangs from the record it is tied to, each link keeps its own
 * firmness, and each record knows the weakest link between it and the root. No components here.
 *
 * Nothing is keyed by a person's id or name: the tree is whatever the model computes.
 */
import type { Evidence, Person, Relation, Status } from "../../data/schema";
import { evidenceForPerson, personById, relations } from "../../data/store";
import { canonicalId, unifiedById, weaker, type Link } from "../../data/model";
import { STATUS_RANK, isIdentityKind } from "./ties";

export type NodeKind = "self" | Link["kind"];

export interface BeingNode {
  id: string;
  person: Person;
  /** self = the record the others fold into. */
  kind: NodeKind;
  parent: BeingNode | null;
  /** The relation this record hangs by (null for the root, or when the model gives no path). */
  step: Relation | null;
  /** Firmness of that one link. */
  stepStatus: Status;
  /** The weakest link anywhere between the root and this record. */
  status: Status;
  depth: number;
  children: BeingNode[];
  /** Other identity ties between this record and the rest of the being, beyond the one it hangs by. */
  also: Relation[];
}

export interface Being {
  root: BeingNode;
  /** Every record, root first, each parent before its children. */
  nodes: BeingNode[];
  byId: Map<string, BeingNode>;
}

const KIND_ORDER: Record<NodeKind, number> = { self: 0, identity: 1, form: 2, vessel: 3, role: 4 };

function build(rootId: string): Being | null {
  const rootPerson = personById.get(rootId);
  if (!rootPerson) return null;
  const byId = new Map<string, BeingNode>();
  const steps = new Set<Relation>();
  const make = (person: Person, kind: NodeKind, step: Relation | null, stepStatus: Status, status: Status): BeingNode => {
    const node: BeingNode = { id: person.id, person, kind, parent: null, step, stepStatus, status, depth: 0, children: [], also: [] };
    byId.set(person.id, node);
    if (step) steps.add(step);
    return node;
  };
  const root = make(rootPerson, "self", null, "canon", "canon");

  /** Adds the records of one unified group under `top`, then the machines and roles that group haunts or wore. */
  const addGroup = (top: BeingNode) => {
    const u = unifiedById.get(top.id);
    if (!u) return;
    const pending: { node: BeingNode; parentId: string }[] = [];
    for (const l of [...u.identities, ...u.forms]) {
      const person = personById.get(l.id);
      if (!person || byId.has(l.id)) continue;
      const last = l.via.length ? l.via[l.via.length - 1] : null;
      const node = make(person, l.kind, last, last?.status ?? l.status, weaker(top.status, l.status));
      pending.push({ node, parentId: last ? (last.from === l.id ? last.to : last.from) : top.id });
    }
    for (const { node, parentId } of pending) node.parent = byId.get(parentId) ?? top;
    // Every record must lead back to the group's root; one that does not (a loop in the paths) hangs from the root.
    for (const { node } of pending) {
      const seen = new Set<BeingNode>();
      let p: BeingNode | null = node;
      while (p && p !== top && !seen.has(p)) { seen.add(p); p = p.parent; }
      if (p !== top) node.parent = top;
    }
    const vessels: BeingNode[] = [];
    for (const l of [...u.vessels, ...u.roles]) {
      const step = l.via[0] ?? null;
      const existing = byId.get(l.id);
      if (existing) { if (step && !steps.has(step)) { steps.add(step); existing.also.push(step); } continue; }
      const person = personById.get(l.id);
      if (!person) continue;
      const parent = (step && byId.get(step.from)) || top;
      const node = make(person, l.kind, step, step?.status ?? l.status, weaker(parent.status, l.status));
      node.parent = parent;
      vessels.push(node);
    }
    for (const v of vessels) addGroup(v);
  };
  addGroup(root);

  for (const node of byId.values()) if (node.parent) node.parent.children.push(node);
  const nodes: BeingNode[] = [];
  const walk = (node: BeingNode, depth: number) => {
    node.depth = depth;
    nodes.push(node);
    node.children.sort((a, b) => KIND_ORDER[a.kind] - KIND_ORDER[b.kind] || STATUS_RANK[b.status] - STATUS_RANK[a.status]);
    for (const c of node.children) walk(c, depth + 1);
  };
  walk(root, 0);

  // Identity ties inside the being that are not the link a record hangs by (a second route to the same conclusion).
  for (const r of relations) {
    if (!isIdentityKind(r.kind) || steps.has(r)) continue;
    const a = byId.get(r.from), b = byId.get(r.to);
    if (!a || !b || a === b) continue;
    (b.depth >= a.depth ? b : a).also.push(r);
  }
  return { root, nodes, byId };
}

const cache = new Map<string, Being | null>();

/** The being a record belongs to (itself, when nothing folds), or null for an unknown id. */
export function beingOf(id: string): Being | null {
  if (!personById.has(id)) return null;
  const top = canonicalId(id);
  let being = cache.get(top);
  if (being === undefined) { being = build(top); cache.set(top, being); }
  if (being?.byId.has(id)) return being;
  // The model did not lead back to this record from its owner: treat the record as its own being.
  let solo = cache.get(`solo:${id}`);
  if (solo === undefined) { solo = build(id); cache.set(`solo:${id}`, solo); }
  return solo;
}

/** A record and everything that hangs from it, in tree order. */
export function subtree(node: BeingNode): BeingNode[] {
  return [node, ...node.children.flatMap(subtree)];
}

/** The links from the root down to a record, root end first. */
export function chainTo(node: BeingNode): BeingNode[] {
  const chain: BeingNode[] = [];
  for (let n: BeingNode | null = node; n && n.parent; n = n.parent) chain.unshift(n);
  return chain;
}

/** True when a tie is drawn in the being's identity tree (so a list of other ties leaves it out). */
export function isInsideBeing(being: Being, r: Relation): boolean {
  return isIdentityKind(r.kind) && being.byId.has(r.from) && being.byId.has(r.to);
}

/** Unique evidence filed under any of the records, oldest first. */
export function evidenceOf(ids: readonly string[]): Evidence[] {
  const seen = new Map<string, Evidence>();
  for (const id of ids) for (const e of evidenceForPerson(id)) seen.set(e.id, e);
  return [...seen.values()].sort((a, b) => (a.when.year ?? 9999) - (b.when.year ?? 9999));
}

/** How many records fold into a person, counted by the weakest link that ties each one in. */
export function linkCounts(being: Being): Record<Status, number> {
  const counts: Record<Status, number> = { canon: 0, strong: 0, theory: 0 };
  for (const n of being.nodes) if (n.kind !== "self") counts[n.status] += 1;
  return counts;
}
