/**
 * A family tree as a grid of people and a list of the ties to draw. No components here.
 *
 * The data gives each member a generation and a column. Both are kept: a column of the data is a
 * column on the page, so the chains the author lined up (a person, the machine they haunt, what it
 * became) stay in a straight line. Rows and columns nobody is left in are closed up.
 */
import type { Relation, Status } from "../../data/schema";
import type { FamilyTree } from "../../data/familyTrees";
import { relations } from "../../data/store";
import { canonicalId } from "../../data/model";
import { STATUS_RANK, tieWords } from "./ties";
import { routeGrid, type GridEdge, type GridNode, type Routing } from "./treeLayout";

export interface TreeNode extends GridNode {
  note?: string;
  /** Records folded into this one. */
  absorbed: string[];
}

export interface TreeEdge extends GridEdge {
  kind: string;
  /** The firmest of the relations the line stands for. */
  status: Status;
  /** One relation, or several when folding has merged their ends. */
  rels: Relation[];
}

export interface TreeModel {
  nodes: TreeNode[];
  edges: TreeEdge[];
  nRows: number;
  nCols: number;
  /** How many records are folded into another. */
  folded: number;
}

export const edgeKey = (from: string, kind: string, to: string) => `${from}~${kind}~${to}`;

/** Every relation between two members of a tree, whatever is switched on. */
export function tiesWithin(tree: FamilyTree): Relation[] {
  const inTree = new Set(tree.members.map((m) => m.id));
  return relations.filter((r) => inTree.has(r.from) && inTree.has(r.to));
}

/** The kinds of tie drawn when nothing says otherwise: family and identity. */
export const defaultKinds = (kinds: readonly string[]): string[] => kinds.filter((k) => { const f = tieWords(k).family; return f === "family" || f === "identity"; });

export function buildTree(tree: FamilyTree, fold: { ids: boolean; vessels: boolean }, shown: ReadonlySet<string>): TreeModel {
  const inTree = new Set(tree.members.map((m) => m.id));
  // The record a member folds into, as long as that record is in this tree too.
  const target = (id: string): string => {
    if (!fold.ids && !fold.vessels) return id;
    let t = canonicalId(id, { identities: fold.ids, vessels: fold.vessels });
    if (!inTree.has(t) && fold.ids) t = canonicalId(id, { identities: true, vessels: false });
    return inTree.has(t) ? t : id;
  };
  const absorbed = new Map<string, string[]>();
  for (const m of tree.members) { const t = target(m.id); if (t !== m.id) absorbed.set(t, [...(absorbed.get(t) ?? []), m.id]); }
  const kept = tree.members.filter((m) => target(m.id) === m.id);

  const gens = [...new Set(kept.map((m) => m.gen))].sort((a, b) => a - b);
  const cols = [...new Set(kept.map((m) => m.col))].sort((a, b) => a - b);
  const nodes: TreeNode[] = [];
  let nCols = cols.length;
  gens.forEach((gen, row) => {
    let next = 0;
    for (const m of kept.filter((x) => x.gen === gen).sort((a, b) => a.col - b.col)) {
      // Two members given the same cell: the later one moves along.
      const col = Math.max(cols.indexOf(m.col), next);
      next = col + 1;
      nCols = Math.max(nCols, next);
      nodes.push({ id: m.id, row, col, note: m.note, absorbed: absorbed.get(m.id) ?? [] });
    }
  });

  const edges = new Map<string, TreeEdge>();
  for (const r of relations) {
    if (!inTree.has(r.from) || !inTree.has(r.to) || !shown.has(r.kind)) continue;
    const from = target(r.from), to = target(r.to);
    if (from === to) continue;
    const key = edgeKey(from, r.kind, to);
    const e = edges.get(key);
    if (!e) edges.set(key, { key, from, to, kind: r.kind, status: r.status, rels: [r] });
    else { e.rels.push(r); if (STATUS_RANK[r.status] > STATUS_RANK[e.status]) e.status = r.status; }
  }
  return { nodes, edges: [...edges.values()], nRows: gens.length, nCols, folded: tree.members.length - kept.length };
}

const routings = new WeakMap<TreeModel, Map<boolean, Routing>>();

/**
 * The routed lines of a tree. Routing depends only on the tree and on whether neighbours in a row may be
 * joined through the gutters (`sides`), so each is worked out once and kept while the tree is in use,
 * however often the window is resized.
 */
export function routingOf(model: TreeModel, sides: boolean): Routing {
  let known = routings.get(model);
  if (!known) { known = new Map(); routings.set(model, known); }
  let routing = known.get(sides);
  if (!routing) { routing = routeGrid(model.nodes, model.edges, model.nRows, model.nCols, sides); known.set(sides, routing); }
  return routing;
}

/**
 * The tree's description without any sentence about what line styles mean. The data wrote such a
 * sentence for an older drawing; the legend on the page is generated from the firmness grammar and
 * is the only place line styles are explained.
 */
export function describeTree(description: string): string {
  const sentences = description.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) ?? [description];
  return sentences.filter((s) => !/\b(solid|dashed|dotted)\b[^.]*\blines?\b|\blines?\b[^.]*\b(solid|dashed|dotted)\b/i.test(s)).join("").trim();
}
