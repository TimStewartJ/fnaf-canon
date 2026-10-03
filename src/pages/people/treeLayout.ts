/**
 * Line routing for the family tree. No components and no DOM here.
 *
 * People sit in a grid: a row per generation, a column per column of the data. Lines never pass
 * behind a box. They run in the bands between rows and the gutters between columns, each on a lane
 * of its own, so two lines never lie on top of each other and every line can be followed from end to
 * end. Where lines must cross, the lanes are ordered to cross as little as possible.
 *
 * A line takes one of four shapes:
 *   side  two people in one row with nothing between them: straight across, side to side
 *   u     two people in one row with someone between: down, along the band below, and up
 *   v3    different rows: down, along a band, down (or simply straight down when aligned)
 *   v5    different rows with boxes in the way: down, along a band to a gutter, down the gutter,
 *         along the band above the target, down
 */

export interface GridNode { id: string; row: number; col: number }
export interface GridEdge { key: string; from: string; to: string }

export type Side = "top" | "bottom" | "left" | "right";

export interface PortRef {
  node: string;
  side: Side;
  /** Offset from the middle of the side, in slots (may be a half). */
  off: number;
  /** How many lines share the side. */
  of: number;
}
/** A port, while it is still attached to the draft of its line. */
interface PortSlot { d: Draft; end: "a" | "b"; other: number; n: number }

export interface Route {
  key: string;
  mode: "side" | "u" | "v3" | "v5";
  /** The upper (or left) end, then the lower (or right) end. */
  a: PortRef;
  b: PortRef;
  /** True when `a` is the edge's `to` end (for the arrowhead). */
  toIsA: boolean;
  /** First horizontal run: band and lane (-1 when the line has none). */
  band1: number;
  lane1: number;
  /** Second horizontal run, v5 only. */
  band2: number;
  lane2: number;
  /** Vertical run in a gutter, v5 only. Gutter g lies to the left of column g. */
  gutter: number;
  glane: number;
}

export interface Routing {
  routes: Route[];
  /** Lanes needed in each band. Band b lies above row b; the last band lies below the last row. */
  bandLanes: number[];
  /** Lanes needed in each gutter. */
  gutterLanes: number[];
  /** The largest offset any port has on the top or bottom of a box, in slots. */
  portSpan: number;
}

interface Draft {
  key: string;
  mode: Route["mode"];
  first: GridNode;
  second: GridNode;
  toIsA: boolean;
  band1: number;
  band2: number;
  gutter: number;
  glane: number;
  a?: PortRef;
  b?: PortRef;
  lane1: number;
  lane2: number;
}

interface Seg {
  draft: Draft;
  leg: 1 | 2;
  x1: number;
  x2: number;
  /** Where the line leaves the band: at x, upwards or downwards. */
  stubs: { x: number; up: boolean }[];
}

const EPS = 1e-6;
/** Two runs in one lane keep at least this much air between them (in columns), so they never read as one line. */
const LANE_AIR = 0.06;

/** Lanes for one ordering of a band's segments, top first: each sits just below everything above it that it overlaps. */
function pack(order: readonly number[], segs: readonly Seg[], lanes: number[]): number {
  let count = 0;
  for (let i = 0; i < order.length; i++) {
    const s = segs[order[i]];
    let lane = 0;
    for (let j = 0; j < i; j++) {
      const t = segs[order[j]];
      if (t.x1 < s.x2 + LANE_AIR && s.x1 < t.x2 + LANE_AIR) lane = Math.max(lane, lanes[order[j]] + 1);
    }
    lanes[order[i]] = lane;
    if (lane + 1 > count) count = lane + 1;
  }
  return count;
}

/**
 * Crossings for a lane assignment. Two stubs running down the same x would lie on top of each other;
 * the port step makes that impossible (see "ports" below), and the weight here keeps it so.
 */
function cost(segs: readonly Seg[], lanes: readonly number[], count: number): number {
  let c = count * 0.01;
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    for (const stub of s.stubs) {
      for (let j = 0; j < segs.length; j++) {
        if (i === j) continue;
        const t = segs[j];
        if (t.x1 + EPS < stub.x && stub.x < t.x2 - EPS) {
          if (stub.up ? lanes[j] < lanes[i] : lanes[j] > lanes[i]) c += 1;
        }
        if (j > i) {
          for (const other of t.stubs) {
            if (Math.abs(other.x - stub.x) > EPS || other.up === stub.up) continue;
            const upLane = stub.up ? lanes[i] : lanes[j];
            const downLane = stub.up ? lanes[j] : lanes[i];
            if (downLane < upLane) c += 1000;
          }
        }
      }
    }
  }
  return c;
}

/** The lane order with the fewest crossings: every order is tried for a small band, a climb from a sensible start for a large one. */
function assignLanes(segs: readonly Seg[]): { lanes: number[]; count: number } {
  const n = segs.length;
  if (n === 0) return { lanes: [], count: 0 };
  const start = segs.map((_, i) => i).sort((p, q) => (segs[q].x2 - segs[q].x1) - (segs[p].x2 - segs[p].x1));
  const scratch = new Array<number>(n).fill(0);
  let best = start.slice();
  let bestCount = pack(best, segs, scratch);
  let bestCost = cost(segs, scratch, bestCount);
  const consider = (order: readonly number[]) => {
    const count = pack(order, segs, scratch);
    const c = cost(segs, scratch, count);
    if (c < bestCost - 1e-9) { bestCost = c; best = order.slice(); bestCount = count; return true; }
    return false;
  };
  if (n <= 7) {
    // Heap's algorithm: every permutation.
    const order = start.slice();
    const counters = new Array<number>(n).fill(0);
    let i = 0;
    while (i < n) {
      if (counters[i] < i) {
        const k = i % 2 === 0 ? 0 : counters[i];
        [order[k], order[i]] = [order[i], order[k]];
        consider(order);
        counters[i] += 1;
        i = 0;
      } else { counters[i] = 0; i += 1; }
    }
  } else {
    for (let pass = 0, improved = true; improved && pass < 40; pass++) {
      improved = false;
      for (let p = 0; p < n; p++) {
        for (let q = p + 1; q < n; q++) {
          const order = best.slice();
          [order[p], order[q]] = [order[q], order[p]];
          if (consider(order)) improved = true;
        }
      }
    }
  }
  const lanes = new Array<number>(n).fill(0);
  bestCount = pack(best, segs, lanes);
  return { lanes, count: bestCount };
}

/**
 * `sides: false` sends ties between neighbours in a row under the boxes instead of straight across,
 * for layouts whose gutters are too narrow to show a line.
 */
export function routeGrid(nodes: readonly GridNode[], edges: readonly GridEdge[], nRows: number, nCols: number, sides = true): Routing {
  const at = new Map(nodes.map((n) => [n.id, n]));
  const grid: (string | undefined)[][] = Array.from({ length: nRows }, () => new Array<string | undefined>(nCols).fill(undefined));
  for (const n of nodes) grid[n.row][n.col] = n.id;
  const clearColumn = (col: number, r1: number, r2: number) => { for (let r = r1 + 1; r < r2; r++) if (grid[r][col]) return false; return true; };
  const clearRow = (row: number, c1: number, c2: number) => { for (let c = c1 + 1; c < c2; c++) if (grid[row][c]) return false; return true; };

  // 1. The shape of each line.
  const drafts: Draft[] = [];
  for (const e of edges) {
    const f = at.get(e.from), t = at.get(e.to);
    if (!f || !t || f === t) continue;
    const base = { key: e.key, band2: -1, gutter: -1, glane: -1, lane1: -1, lane2: -1 };
    if (f.row === t.row) {
      const [l, r] = f.col < t.col ? [f, t] : [t, f];
      const open = sides && clearRow(f.row, l.col, r.col);
      drafts.push({ ...base, mode: open ? "side" : "u", first: l, second: r, toIsA: t === l, band1: open ? -1 : f.row + 1 });
      continue;
    }
    const [u, l] = f.row < t.row ? [f, t] : [t, f];
    const d: Draft = { ...base, mode: "v3", first: u, second: l, toIsA: t === u, band1: u.row + 1 };
    if (l.row > u.row + 1) {
      if (clearColumn(l.col, u.row, l.row)) d.band1 = u.row + 1;       // across under the source, then down the target's column
      else if (clearColumn(u.col, u.row, l.row)) d.band1 = l.row;      // down the source's column, then across over the target
      else { d.mode = "v5"; d.band2 = l.row; d.gutter = l.col > u.col ? l.col : l.col + 1; }
    }
    drafts.push(d);
  }

  // 2. Gutter lanes. A line that leaves the gutter sooner sits nearer the side it leaves by, so later ones are not crossed.
  const gutterLanes = new Array<number>(nCols + 1).fill(0);
  for (let g = 0; g <= nCols; g++) {
    const here = drafts.filter((d) => d.mode === "v5" && d.gutter === g);
    const leftward = here.filter((d) => d.second.col < g).sort((p, q) => p.band2 - q.band2);
    const rightward = here.filter((d) => d.second.col >= g).sort((p, q) => q.band2 - p.band2);
    [...leftward, ...rightward].forEach((d, i) => { d.glane = i; });
    gutterLanes[g] = here.length;
  }
  // Positions in columns, for ordering only: a gutter's lanes stay within 0.3 of a column around its middle.
  const laneStep = 0.15 / Math.max(3, ...gutterLanes);
  const gutterX = (d: Draft) => d.gutter - 0.5 + (d.glane - (gutterLanes[d.gutter] - 1) / 2) * laneStep;

  // 3. Ports. On the top and bottom of a box, lines are ordered by where they head, so they fan out without crossing;
  //    a line that runs straight down keeps the exact middle.
  const ports = new Map<string, PortSlot[]>();
  let seq = 0;
  const add = (node: GridNode, side: Side, d: Draft, end: "a" | "b", other: number) => {
    const key = `${node.id}|${side}`;
    const list = ports.get(key) ?? [];
    list.push({ d, end, other, n: seq++ });
    ports.set(key, list);
  };
  for (const d of drafts) {
    if (d.mode === "side") { add(d.first, "right", d, "a", d.second.col); add(d.second, "left", d, "b", d.first.col); }
    else if (d.mode === "u") { add(d.first, "bottom", d, "a", d.second.col); add(d.second, "bottom", d, "b", d.first.col); }
    else {
      const via = d.mode === "v5" ? gutterX(d) : null;
      add(d.first, "bottom", d, "a", via ?? d.second.col);
      add(d.second, "top", d, "b", via ?? d.first.col);
    }
  }
  const straight = (x: PortSlot, node: GridNode) => Math.abs(x.other - node.col) < EPS;
  for (const [key, list] of ports) {
    const [id, side] = key.split("|") as [string, Side];
    const node = at.get(id)!;
    const vertical = side === "top" || side === "bottom";
    if (vertical) list.sort((p, q) => p.other - q.other || p.n - q.n);
    else list.sort((p, q) => p.d.key.localeCompare(q.d.key));
    const mid = vertical ? list.map((x, i) => (straight(x, node) ? i : -1)).filter((i) => i >= 0) : [];
    const centre = mid.length ? mid[Math.floor((mid.length - 1) / 2)] + (mid.length % 2 === 0 ? 0.5 : 0) : (list.length - 1) / 2;
    list.forEach((x, i) => { x.d[x.end] = { node: id, side, off: i - centre, of: list.length }; });
  }
  // A line arriving at the top of a box must not come down the x that a line leaving the box above it goes down:
  // the two would lie on top of each other. Arriving lines therefore keep a whole slot away from every leaving
  // one, moving outwards until they find room.
  for (const node of nodes) {
    let above: GridNode | undefined;
    for (let r = node.row - 1; r >= 0 && !above; r--) { const id = grid[r][node.col]; if (id) above = at.get(id); }
    if (!above) continue;
    const upper = above;
    const taken = (ports.get(`${upper.id}|bottom`) ?? []).filter((x) => !straight(x, upper)).map((x) => x.d[x.end]!.off);
    if (!taken.length) continue;
    const arriving = (ports.get(`${node.id}|top`) ?? []).filter((x) => !straight(x, node));
    const clear = (off: number) => taken.every((t) => Math.abs(t - off) > 1 - EPS);
    let edge = -Infinity;
    for (const x of arriving.filter((p) => p.other > node.col)) {
      let off = Math.max(x.d[x.end]!.off, edge);
      while (!clear(off)) off += 0.5;
      x.d[x.end]!.off = off;
      edge = off + 1;
    }
    edge = Infinity;
    for (const x of arriving.filter((p) => p.other < node.col).reverse()) {
      let off = Math.min(x.d[x.end]!.off, edge);
      while (!clear(off)) off -= 0.5;
      x.d[x.end]!.off = off;
      edge = off - 1;
    }
  }
  let portSpan = 0;
  for (const [key, list] of ports) if (/\|(top|bottom)$/.test(key)) for (const x of list) portSpan = Math.max(portSpan, Math.abs(x.d[x.end]!.off));
  // Positions in columns, for ordering only: ports stay within 0.3 of a column around the middle of their box.
  const portStep = 0.3 / Math.max(7.5, portSpan);
  const portX = (p: PortRef) => at.get(p.node)!.col + p.off * portStep;

  // 4. Band lanes.
  const bandSegs: Seg[][] = Array.from({ length: nRows + 1 }, () => []);
  const span = (d: Draft, leg: 1 | 2, from: number, to: number, fromUp: boolean, toUp: boolean): Seg =>
    ({ draft: d, leg, x1: Math.min(from, to), x2: Math.max(from, to), stubs: [{ x: from, up: fromUp }, { x: to, up: toUp }] });
  for (const d of drafts) {
    if (d.mode === "side" || !d.a || !d.b) continue;
    const xa = portX(d.a), xb = portX(d.b);
    if (d.mode === "u") bandSegs[d.band1].push(span(d, 1, xa, xb, true, true));
    else if (d.mode === "v3") { if (Math.abs(xa - xb) > EPS) bandSegs[d.band1].push(span(d, 1, xa, xb, true, false)); else d.band1 = -1; }
    else { const gx = gutterX(d); bandSegs[d.band1].push(span(d, 1, xa, gx, true, false)); bandSegs[d.band2].push(span(d, 2, gx, xb, true, false)); }
  }
  const bandLanes = bandSegs.map((segs) => {
    const { lanes, count } = assignLanes(segs);
    segs.forEach((s, i) => { if (s.leg === 1) s.draft.lane1 = lanes[i]; else s.draft.lane2 = lanes[i]; });
    return count;
  });

  const routes: Route[] = drafts.filter((d) => d.a && d.b).map((d) => ({
    key: d.key, mode: d.mode, a: d.a!, b: d.b!, toIsA: d.toIsA, band1: d.band1, lane1: d.lane1, band2: d.band2, lane2: d.lane2, gutter: d.gutter, glane: d.glane,
  }));
  return { routes, bandLanes, gutterLanes, portSpan };
}

/* ── From lanes to pixels ──────────────────────────────────────── */

export interface Geometry {
  /** Left edge of each column, and the width every box has. */
  colX: number[];
  colW: number;
  /** Left edge and width of each gutter (one more than there are columns). */
  gutX: number[];
  gutW: number[];
  /** Top and height of each row, as measured. */
  rowY: number[];
  rowH: number[];
  /** Top and height of each band (one more than there are rows). */
  bandY: number[];
  bandH: number[];
}

export const LANE_GAP = 10;
const PORT_GAP = 12;
const SIDE_GAP = 10;

export type Point = readonly [number, number];

/** The corner points of a line, from its upper (or left) end to its lower (or right) end. */
export function routePoints(r: Route, routing: Routing, g: Geometry, at: ReadonlyMap<string, GridNode>): Point[] {
  // One port spacing for the whole tree, so two ports with different slots can never land on the same x.
  const gap = routing.portSpan > 0 ? Math.min(PORT_GAP, (g.colW / 2 - 10) / routing.portSpan) : PORT_GAP;
  const port = (p: PortRef): Point => {
    const n = at.get(p.node)!;
    const midX = g.colX[n.col] + g.colW / 2, top = g.rowY[n.row], h = g.rowH[n.row];
    if (p.side === "left" || p.side === "right") return [p.side === "left" ? g.colX[n.col] : g.colX[n.col] + g.colW, top + h / 2 + p.off * Math.min(SIDE_GAP, (h - 16) / Math.max(1, p.of - 1))];
    return [midX + p.off * gap, p.side === "top" ? top : top + h];
  };
  const laneY = (band: number, lane: number) => g.bandY[band] + g.bandH[band] / 2 + (lane - (routing.bandLanes[band] - 1) / 2) * LANE_GAP;
  const a = port(r.a), b = port(r.b);
  if (r.mode === "side" || r.band1 < 0) return [a, b];
  const y1 = laneY(r.band1, r.lane1);
  if (r.mode !== "v5") return [a, [a[0], y1], [b[0], y1], b];
  const gx = g.gutX[r.gutter] + g.gutW[r.gutter] / 2 + (r.glane - (routing.gutterLanes[r.gutter] - 1) / 2) * LANE_GAP;
  const y2 = laneY(r.band2, r.lane2);
  return [a, [a[0], y1], [gx, y1], [gx, y2], [b[0], y2], b];
}

/** An SVG path through the points with the corners rounded. */
export function roundedPath(points: readonly Point[], radius = 6): string {
  if (points.length < 2) return "";
  const f = (v: number) => Math.round(v * 10) / 10;
  let d = `M${f(points[0][0])},${f(points[0][1])}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1], [x, y] = points[i], [nx, ny] = points[i + 1];
    const inLen = Math.hypot(x - px, y - py), outLen = Math.hypot(nx - x, ny - y);
    const r = Math.min(radius, inLen / 2, outLen / 2);
    if (r < 0.5) { d += ` L${f(x)},${f(y)}`; continue; }
    const ax = x - ((x - px) / inLen) * r, ay = y - ((y - py) / inLen) * r;
    const bx = x + ((nx - x) / outLen) * r, by = y + ((ny - y) / outLen) * r;
    d += ` L${f(ax)},${f(ay)} Q${f(x)},${f(y)} ${f(bx)},${f(by)}`;
  }
  const last = points[points.length - 1];
  return `${d} L${f(last[0])},${f(last[1])}`;
}

/** A small arrowhead whose tip is the last point of the line, pointing the way the line arrives. */
export function arrowHead(points: readonly Point[], atStart: boolean, size = 7): string {
  const tip = atStart ? points[0] : points[points.length - 1];
  const from = atStart ? points[1] : points[points.length - 2];
  const len = Math.hypot(tip[0] - from[0], tip[1] - from[1]) || 1;
  const ux = (tip[0] - from[0]) / len, uy = (tip[1] - from[1]) / len;
  const bx = tip[0] - ux * size, by = tip[1] - uy * size;
  const w = size * 0.5;
  const f = (v: number) => Math.round(v * 10) / 10;
  return `M${f(tip[0])},${f(tip[1])} L${f(bx - uy * w)},${f(by + ux * w)} L${f(bx + uy * w)},${f(by - ux * w)} Z`;
}
