import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, type SimulationLinkDatum, type SimulationNodeDatum } from "d3-force";
import { evidenceForPerson, labelForEntity, people, personById, relations } from "../data/store";
import type { Relation, Status } from "../data/schema";
import { CiteList, EntityLink, StatusBadge } from "../components/ui";

interface N extends SimulationNodeDatum { id: string; group: string; weight: number }
interface L extends SimulationLinkDatum<N> { rel: Relation }

const GROUP_COLOR: Record<string, string> = {
  afton: "#b784ff", emily: "#f4c95d", victim: "#7fd1ff", protagonist: "#8ce99a", staff: "#ced4da",
  pizzaplex: "#ff8fab", mimic: "#ff9f43", entity: "#e8590c", other: "#adb5bd",
};

export default function Graph() {
  const [statuses, setStatuses] = useState<Status[]>(["canon", "strong", "theory"]);
  const [focus, setFocus] = useState<string>("");
  const [sel, setSel] = useState<Relation | null>(null);
  const [tick, setTick] = useState(0);
  const nav = useNavigate();
  const size = { w: 1100, h: 760 };

  const { nodes, links } = useMemo(() => {
    const rels = relations.filter((r) => statuses.includes(r.status) && personById.has(r.from) && personById.has(r.to));
    const ids = new Set(rels.flatMap((r) => [r.from, r.to]));
    const nodes: N[] = people.filter((p) => ids.has(p.id)).map((p) => ({ id: p.id, group: p.group, weight: evidenceForPerson(p.id).length }));
    const links: L[] = rels.map((r) => ({ source: r.from, target: r.to, rel: r }));
    return { nodes, links };
  }, [statuses]);

  const simRef = useRef<ReturnType<typeof forceSimulation<N>> | null>(null);
  useEffect(() => {
    const sim = forceSimulation<N>(nodes)
      .force("link", forceLink<N, L>(links).id((d) => d.id).distance(110).strength(0.5))
      .force("charge", forceManyBody().strength(-260))
      .force("center", forceCenter(size.w / 2, size.h / 2))
      .force("collide", forceCollide(46))
      .force("x", forceX(size.w / 2).strength(0.07))
      .force("y", forceY(size.h / 2).strength(0.1))
      .on("tick", () => {
        for (const n of nodes) {
          n.x = Math.max(40, Math.min(size.w - 40, n.x ?? 0));
          n.y = Math.max(30, Math.min(size.h - 30, n.y ?? 0));
        }
        setTick((t) => t + 1);
      });
    simRef.current = sim;
    return () => { sim.stop(); };
  }, [nodes, links, size.w, size.h]);

  const neighbors = useMemo(() => {
    if (!focus) return null;
    const s = new Set([focus]);
    for (const l of links) { const a = (l.source as N).id ?? l.source; const b = (l.target as N).id ?? l.target; if (a === focus) s.add(b as string); if (b === focus) s.add(a as string); }
    return s;
  }, [focus, links, tick > 0]);

  const drag = useRef<{ node: N; svg: SVGSVGElement } | null>(null);
  const toSvg = (svg: SVGSVGElement, cx: number, cy: number) => {
    const pt = svg.createSVGPoint(); pt.x = cx; pt.y = cy;
    const r = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    return r;
  };

  return (
    <div className="page">
      <h1>The Web</h1>
      <p className="lede">Every person and every recorded relationship, laid out by force. Drag nodes, click a node to highlight its ties, double-click to open. Click a line for its evidence.</p>
      <div className="filters">
        {(["canon", "strong", "theory"] as Status[]).map((s) => (
          <label key={s} className="check"><input type="checkbox" checked={statuses.includes(s)} onChange={(e) => setStatuses(e.target.checked ? [...statuses, s] : statuses.filter((x) => x !== s))} /> <StatusBadge status={s} /></label>
        ))}
        <select value={focus} onChange={(e) => setFocus(e.target.value)} aria-label="Focus person">
          <option value="">No focus</option>
          {nodes.map((n) => <option key={n.id} value={n.id}>{labelForEntity(n.id)}</option>)}
        </select>
      </div>
      <div className="graph-wrap">
        <svg viewBox={`0 0 ${size.w} ${size.h}`} className="graph-svg"
          onPointerMove={(e) => { if (!drag.current) return; const p = toSvg(drag.current.svg, e.clientX, e.clientY); drag.current.node.fx = p.x; drag.current.node.fy = p.y; simRef.current?.alpha(0.3).restart(); }}
          onPointerUp={() => { if (drag.current) { drag.current.node.fx = null; drag.current.node.fy = null; drag.current = null; } }}>
          {links.map((l, i) => {
            const s = l.source as N, t = l.target as N;
            if (s.x == null || t.x == null) return null;
            const dim = neighbors && !(neighbors.has(s.id) && neighbors.has(t.id));
            return (
              <g key={i} className={`edge st-${l.rel.status} ${dim ? "dim" : ""} ${sel === l.rel ? "sel" : ""}`} onClick={() => setSel(l.rel)}>
                <line x1={s.x} y1={s.y} x2={t.x} y2={t.y} className="edge-hit" />
                <line x1={s.x} y1={s.y} x2={t.x} y2={t.y} className="edge-line" strokeDasharray={l.rel.kind === "parent-of" ? undefined : l.rel.kind === "killed" ? "1 5" : "6 3"} />
              </g>
            );
          })}
          {nodes.map((n) => {
            if (n.x == null) return null;
            const dim = neighbors && !neighbors.has(n.id);
            const r = 8 + Math.min(14, Math.sqrt(n.weight) * 2);
            return (
              <g key={n.id} transform={`translate(${n.x},${n.y})`} className={`gnode ${dim ? "dim" : ""}`}
                onPointerDown={(e) => { const svg = (e.currentTarget.ownerSVGElement)!; drag.current = { node: n, svg }; }}
                onClick={() => setFocus(focus === n.id ? "" : n.id)} onDoubleClick={() => nav(`/people/${n.id}`)}>
                <circle r={r} fill={GROUP_COLOR[n.group] ?? "#aaa"} />
                <text y={r + 13} textAnchor="middle">{labelForEntity(n.id)}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="legend">
        {Object.entries(GROUP_COLOR).map(([g, c]) => <span key={g}><i style={{ background: c }} /> {g}</span>)}
      </div>
      {sel && (
        <div className="rel-detail">
          <h3><EntityLink id={sel.from} /> <span className="muted">{sel.kind.replace(/-/g, " ")}</span> <EntityLink id={sel.to} /> <StatusBadge status={sel.status} /></h3>
          {sel.note && <p>{sel.note}</p>}
          <p>Evidence: <CiteList ids={sel.evidence} /></p>
        </div>
      )}
    </div>
  );
}
