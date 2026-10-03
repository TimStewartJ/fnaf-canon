/**
 * Layout for the web: where each person sits, how each line runs, and where each name goes.
 * No components and no DOM here (text is measured by a function the caller passes in).
 *
 * The picture is laid out for the box it is given, in CSS pixels, so it fits a phone held upright as
 * well as a wide screen and its text is the same size on both. Positions come from a force
 * simulation run to rest in one go; the result is the same every time for the same input.
 */
import { forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, type SimulationLinkDatum, type SimulationNodeDatum } from "d3-force";

export interface LayoutNode { id: string; weight: number; degree: number; group: string }
export interface LayoutTie { key: string; from: string; to: string }
export interface Placed { x: number; y: number; r: number }

interface SimNode extends SimulationNodeDatum { id: string; r: number }

/** The radius of a person's disc: more evidence, a larger disc, within limits. */
export const radiusOf = (weight: number, scale: number) => (6 + Math.min(11, Math.sqrt(weight) * 1.35)) * scale;

interface Region { x: number; y: number; w: number; h: number }

/** Groups of people joined by ties, largest first. */
function components(nodes: readonly LayoutNode[], ties: readonly LayoutTie[]): LayoutNode[][] {
  const parent = new Map(nodes.map((n) => [n.id, n.id]));
  const find = (x: string): string => { const p = parent.get(x)!; if (p === x) return x; const r = find(p); parent.set(x, r); return r; };
  for (const t of ties) if (parent.has(t.from) && parent.has(t.to)) parent.set(find(t.from), find(t.to));
  const groups = new Map<string, LayoutNode[]>();
  for (const n of nodes) { const r = find(n.id); groups.set(r, [...(groups.get(r) ?? []), n]); }
  return [...groups.values()].sort((a, b) => b.length - a.length);
}

/** A group large enough to need the force layout: discs settle under link, charge and collision forces, then are fitted to the region. */
function settle(nodes: readonly LayoutNode[], ties: readonly LayoutTie[], box: Region, scale: number, pad: number, out: Map<string, Placed>) {
  const below = 16; // room for a name under the lowest disc
  const w = Math.max(40, box.w - 2 * pad), h = Math.max(40, box.h - 2 * pad - below);
  // The room each person would have if they were spread evenly.
  const room = Math.sqrt((w * h) / nodes.length);
  const sim: SimNode[] = nodes.map((n) => ({ id: n.id, r: radiusOf(n.weight, scale) }));
  const index = new Map(sim.map((n) => [n.id, n]));
  // One link per pair, however many ties join them.
  const pairs = new Map<string, SimulationLinkDatum<SimNode>>();
  for (const t of ties) {
    const a = index.get(t.from), b = index.get(t.to);
    if (!a || !b) continue;
    const key = t.from < t.to ? `${t.from}|${t.to}` : `${t.to}|${t.from}`;
    if (!pairs.has(key)) pairs.set(key, { source: a, target: b });
  }
  // People of one group start near each other, groups spread round the middle, so families stay together.
  const groups = [...new Set(nodes.map((n) => n.group))];
  nodes.forEach((n, i) => {
    const angle = (groups.indexOf(n.group) / groups.length) * 2 * Math.PI - Math.PI / 2;
    sim[i].x = Math.cos(angle) * w * 0.3 + ((i * 37) % 23 - 11) * 2;
    sim[i].y = Math.sin(angle) * h * 0.3 + ((i * 53) % 19 - 9) * 2;
  });
  // Pull towards the middle, harder along the short side, so the settled shape is close to the region's.
  const wide = w / h;
  forceSimulation(sim)
    .force("link", forceLink(Array.from(pairs.values())).distance(room * 0.7).strength(0.5))
    .force("charge", forceManyBody().strength(-(room * room) / 24).distanceMax(room * 3))
    .force("collide", forceCollide<SimNode>((n) => n.r + room * 0.22).strength(0.9))
    .force("x", forceX(0).strength(0.04 * Math.max(1, 1 / wide)))
    .force("y", forceY(0).strength(0.04 * Math.max(1, wide)))
    .stop()
    .tick(400);
  // Fit the settled shape to the region, each axis on its own, without squeezing or stretching it out of recognition.
  let x1 = Infinity, x2 = -Infinity, y1 = Infinity, y2 = -Infinity;
  for (const n of sim) { x1 = Math.min(x1, n.x! - n.r); x2 = Math.max(x2, n.x! + n.r); y1 = Math.min(y1, n.y! - n.r); y2 = Math.max(y2, n.y! + n.r); }
  const limit = (v: number) => Math.max(0.55, Math.min(1.9, v));
  const sx = limit(w / Math.max(1, x2 - x1)), sy = limit(h / Math.max(1, y2 - y1));
  const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
  const left = box.x + pad, top = box.y + pad;
  for (const n of sim) {
    const x = left + w / 2 + (n.x! - cx) * sx, y = top + h / 2 + (n.y! - cy) * sy;
    out.set(n.id, { x: Math.max(left + n.r, Math.min(left + w - n.r, x)), y: Math.max(top + n.r, Math.min(top + h - n.r, y)), r: n.r });
  }
}

/** A small group on its own: its people in a zig-zag along the long side of its region, the best-tied first. */
function island(nodes: readonly LayoutNode[], box: Region, scale: number, out: Map<string, Placed>) {
  const order = [...nodes].sort((a, b) => b.degree - a.degree || b.weight - a.weight);
  const tall = box.h >= box.w;
  const long = tall ? box.h : box.w, short = tall ? box.w : box.h;
  const step = Math.min(96, long / order.length);
  order.forEach((n, i) => {
    const along = long / 2 + (i - (order.length - 1) / 2) * step - (tall ? 8 : 0);
    const across = short / 2 + (order.length > 2 ? (i % 2 === 0 ? -1 : 1) * Math.min(18, short * 0.16) : 0) - (tall ? 0 : 8);
    out.set(n.id, { x: box.x + (tall ? across : along), y: box.y + (tall ? along : across), r: radiusOf(n.weight, scale) });
  });
}

/** A group of four or fewer is an island and is set to one side. */
const ISLAND = 4;

export function layoutWeb(nodes: readonly LayoutNode[], ties: readonly LayoutTie[], width: number, height: number): Map<string, Placed> {
  const out = new Map<string, Placed>();
  if (!nodes.length || width <= 0 || height <= 0) return out;
  const compact = width < 520;
  const scale = compact ? 0.85 : 1;
  const pad = compact ? 14 : 24;
  const landscape = width >= height;
  const groups = components(nodes, ties);
  const big = groups.filter((g) => g.length > ISLAND), small = groups.filter((g) => g.length <= ISLAND);
  // Islands share a strip along the right (or, on a tall picture, the bottom); the rest share what is left.
  const strip = small.length && big.length ? (landscape ? Math.max(104, Math.min(170, width * 0.13)) : Math.max(92, Math.min(130, height * 0.17))) : 0;
  const main: Region = landscape ? { x: 0, y: 0, w: width - strip, h: height } : { x: 0, y: 0, w: width, h: height - strip };
  const side: Region = !big.length ? { x: 0, y: 0, w: width, h: height } : landscape ? { x: width - strip, y: 0, w: strip, h: height } : { x: 0, y: height - strip, w: width, h: strip };
  const tiesOf = (group: readonly LayoutNode[]) => { const ids = new Set(group.map((n) => n.id)); return ties.filter((t) => ids.has(t.from) && ids.has(t.to)); };
  // Large groups split the main region along its long side, each by its share of the people.
  const total = big.reduce((n, g) => n + g.length, 0);
  let offset = 0;
  for (const g of big) {
    const share = g.length / total;
    const box: Region = main.w >= main.h ? { x: main.x + offset * main.w, y: main.y, w: main.w * share, h: main.h } : { x: main.x, y: main.y + offset * main.h, w: main.w, h: main.h * share };
    settle(g, tiesOf(g), box, scale, pad, out);
    offset += share;
  }
  // Islands split the strip along its long side.
  const people = small.reduce((n, g) => n + g.length, 0);
  offset = 0;
  for (const g of small) {
    const share = g.length / people;
    const box: Region = side.h >= side.w ? { x: side.x, y: side.y + offset * side.h, w: side.w, h: side.h * share } : { x: side.x + offset * side.w, y: side.y, w: side.w * share, h: side.h };
    island(g, box, scale, out);
    offset += share;
  }
  return out;
}

/* ── Names ─────────────────────────────────────────────────────── */

export interface LabelSpec { id: string; lines: string[]; widths: number[] }
export interface PlacedLabel { x: number; y: number; anchor: "start" | "middle" | "end"; lines: string[] }

/** Breaks a long name over two lines of similar length. */
export function nameLines(name: string, max = 17): string[] {
  if (name.length <= max) return [name];
  const words = name.split(" ");
  if (words.length < 2) return [name];
  let best = 1, bestDiff = Infinity;
  for (let i = 1; i < words.length; i++) {
    const diff = Math.abs(words.slice(0, i).join(" ").length - words.slice(i).join(" ").length);
    if (diff < bestDiff) { bestDiff = diff; best = i; }
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

interface Box { x1: number; y1: number; x2: number; y2: number }
const hits = (a: Box, b: Box) => a.x1 < b.x2 && b.x1 < a.x2 && a.y1 < b.y2 && b.y1 < a.y2;

/** True when the straight line from (ax, ay) to (bx, by) passes through the box. */
function crosses(box: Box, ax: number, ay: number, bx: number, by: number): boolean {
  let t0 = 0, t1 = 1;
  const dx = bx - ax, dy = by - ay;
  for (const [p, q] of [[-dx, ax - box.x1], [dx, box.x2 - ax], [-dy, ay - box.y1], [dy, box.y2 - ay]] as const) {
    if (p === 0) { if (q < 0) return false; continue; }
    const r = q / p;
    if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; }
    else { if (r < t0) return false; if (r < t1) t1 = r; }
  }
  return t0 <= t1;
}

export type Chord = readonly [number, number, number, number];

/**
 * Gives each name a place beside its disc where it covers no disc and no other name. Eight places
 * are tried (below, above, either side, and the four corners), then the same again further out;
 * among the free ones the name takes the one the fewest lines run through, preferring below.
 * `order` lists the people to name, most important first; they choose first. A person in `far` may
 * have their name a third step out. A name with nowhere to go is left out, never drawn over another:
 * the caller shows it on demand.
 * `avoid` lists the people whose discs must stay clear (everyone, unless given).
 */
export function placeLabels(
  order: readonly LabelSpec[], at: ReadonlyMap<string, Placed>, width: number, height: number, lineHeight: number,
  chords: readonly Chord[] = [], far: ReadonlySet<string> = new Set(), avoid?: ReadonlySet<string>,
): Map<string, PlacedLabel> {
  const taken: Box[] = [];
  for (const [id, p] of at) if (!avoid || avoid.has(id)) taken.push({ x1: p.x - p.r - 1, y1: p.y - p.r - 1, x2: p.x + p.r + 1, y2: p.y + p.r + 1 });
  const out = new Map<string, PlacedLabel>();
  const rise = lineHeight * 0.78;
  for (const spec of order) {
    const p = at.get(spec.id);
    if (!p) continue;
    const w = Math.max(...spec.widths) + 4, h = spec.lines.length * lineHeight;
    // The box is the text plus a little air above and below (a face's ascent and descent reach past its line height).
    const air = 2;
    const place = (x1: number, y1: number, anchor: PlacedLabel["anchor"], bias: number) => ({
      box: { x1, y1: y1 - air, x2: x1 + w, y2: y1 + h + air },
      label: { x: anchor === "middle" ? x1 + w / 2 : anchor === "start" ? x1 + 2 : x1 + w - 2, y: y1 + rise, anchor, lines: spec.lines },
      bias,
    });
    // Rings of places: hard by the disc, then further out for when the first ring is full.
    const ring = (gap: number, bias: number) => {
      const k = (p.r + gap - 4) * 0.72;
      return [
        place(p.x - w / 2, p.y + p.r + gap + air, "middle", bias),
        place(p.x - w / 2, p.y - p.r - gap - h - air, "middle", bias + 0.2),
        place(p.x + p.r + gap, p.y - h / 2, "start", bias + 0.3),
        place(p.x - p.r - gap - w, p.y - h / 2, "end", bias + 0.4),
        place(p.x + k, p.y + k + 2, "start", bias + 0.6),
        place(p.x - k - w, p.y + k + 2, "end", bias + 0.7),
        place(p.x + k, p.y - k - 2 - h, "start", bias + 0.8),
        place(p.x - k - w, p.y - k - 2 - h, "end", bias + 0.9),
      ];
    };
    const options = [...ring(4, 0), ...ring(13, 2.5), ...(far.has(spec.id) ? ring(24, 5) : [])].filter((o) => o.box.x1 >= 2 && o.box.x2 <= width - 2 && o.box.y1 >= 2 && o.box.y2 <= height - 2);
    const lines = (b: Box) => chords.reduce((n, c) => n + (crosses(b, c[0], c[1], c[2], c[3]) ? 1 : 0), 0);
    const free = options.filter((o) => !taken.some((t) => hits(o.box, t))).map((o) => ({ ...o, cost: lines(o.box) + o.bias }));
    const pick = free.sort((a, b) => a.cost - b.cost)[0];
    if (!pick) continue;
    taken.push(pick.box);
    out.set(spec.id, pick.label);
  }
  return out;
}

/* ── Lines ─────────────────────────────────────────────────────── */

/**
 * The path of a tie from disc edge to disc edge. Ties between the same two people bow apart
 * (`slot` of `of`), so each can be seen and picked. Returns the path and the point and direction
 * of its end at `to`, for an arrowhead.
 */
export function tiePath(a: Placed, b: Placed, slot: number, of: number, flipped: boolean): { d: string; tip: [number, number]; from: [number, number] } {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  // Perpendicular, kept the same way round for both directions of a pair.
  const sign = flipped ? -1 : 1;
  const bow = of > 1 ? (slot - (of - 1) / 2) * 16 * sign : 0;
  const mx = (a.x + b.x) / 2 - uy * bow, my = (a.y + b.y) / 2 + ux * bow;
  const towards = (p: Placed, tx: number, ty: number): [number, number] => {
    const l = Math.hypot(tx - p.x, ty - p.y) || 1;
    return [p.x + ((tx - p.x) / l) * (p.r + 1.5), p.y + ((ty - p.y) / l) * (p.r + 1.5)];
  };
  const start = towards(a, mx, my), end = towards(b, mx, my);
  const f = (v: number) => Math.round(v * 10) / 10;
  const d = bow === 0 ? `M${f(start[0])},${f(start[1])} L${f(end[0])},${f(end[1])}` : `M${f(start[0])},${f(start[1])} Q${f(mx)},${f(my)} ${f(end[0])},${f(end[1])}`;
  return { d, tip: end, from: bow === 0 ? start : [mx, my] };
}
