import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, type SimulationLinkDatum, type SimulationNodeDatum } from "d3-force";
import { evidenceForPerson, labelForEntity, people, personById, relations } from "../../data/store";
import { canonicalId } from "../../data/model";
import type { Person, Relation, Status } from "../../data/schema";
import { CiteList, EntityLink, FilterBar, FilterChip, FilterGroup, GROUP_HUE, GROUP_LABEL, Page, PageHeader, STATUS, StatusMark, Toggle, levelOf, personPath } from "../../components/ui";
import "./relgraph.css";
import "./graph.css";

interface N extends SimulationNodeDatum { id: string; group: Person["group"]; weight: number }
interface L extends SimulationLinkDatum<N> { rel: Relation }

const SIZE = { w: 1100, h: 640 };
const tieOf = (kind: Relation["kind"]) => (kind === "killed" ? "harm" : kind === "created" || kind === "controls" ? "made" : kind === "possesses" || kind === "wore" || kind === "became" || kind === "same-as" ? "identity" : "family");

export default function Graph() {
  const [statuses, setStatuses] = useState<Status[]>(["canon", "strong", "theory"]);
  const [focus, setFocus] = useState<string>("");
  const [sel, setSel] = useState<Relation | null>(null);
  const [tick, setTick] = useState(0);
  const [unified, setUnified] = useState(true);
  const nav = useNavigate();

  const { nodes, links } = useMemo(() => {
    const map = (id: string) => (unified ? canonicalId(id) : id);
    const seen = new Set<string>();
    const rels = relations.filter((r) => statuses.includes(r.status) && personById.has(r.from) && personById.has(r.to))
      .map((r) => ({ ...r, from: map(r.from), to: map(r.to) }))
      .filter((r) => { const k = `${r.from}|${r.to}|${r.kind}`; if (r.from === r.to || seen.has(k)) return false; seen.add(k); return true; });
    const ids = new Set(rels.flatMap((r) => [r.from, r.to]));
    const nodes: N[] = people.filter((p) => ids.has(p.id)).map((p) => ({ id: p.id, group: p.group, weight: evidenceForPerson(p.id).length }));
    const links: L[] = rels.map((r) => ({ source: r.from, target: r.to, rel: r }));
    return { nodes, links };
  }, [statuses, unified]);

  const simRef = useRef<ReturnType<typeof forceSimulation<N>> | null>(null);
  useEffect(() => {
    const sim = forceSimulation<N>(nodes)
      .force("link", forceLink<N, L>(links).id((d) => d.id).distance(110).strength(0.5))
      .force("charge", forceManyBody().strength(-260))
      .force("center", forceCenter(SIZE.w / 2, SIZE.h / 2))
      .force("collide", forceCollide(46))
      .force("x", forceX(SIZE.w / 2).strength(0.07))
      .force("y", forceY(SIZE.h / 2).strength(0.1))
      .on("tick", () => {
        for (const n of nodes) {
          n.x = Math.max(40, Math.min(SIZE.w - 40, n.x ?? 0));
          n.y = Math.max(30, Math.min(SIZE.h - 30, n.y ?? 0));
        }
        setTick((t) => t + 1);
      });
    simRef.current = sim;
    return () => { sim.stop(); };
  }, [nodes, links]);

  const started = tick > 0;
  const neighbors = useMemo(() => {
    if (!focus || !started) return null;
    const s = new Set([focus]);
    for (const l of links) { const a = (l.source as N).id ?? l.source; const b = (l.target as N).id ?? l.target; if (a === focus) s.add(b as string); if (b === focus) s.add(a as string); }
    return s;
  }, [focus, links, started]);

  const drag = useRef<{ node: N; svg: SVGSVGElement } | null>(null);
  const toSvg = (svg: SVGSVGElement, cx: number, cy: number) => {
    const pt = svg.createSVGPoint(); pt.x = cx; pt.y = cy;
    return pt.matrixTransform(svg.getScreenCTM()!.inverse());
  };
  const groupsShown = [...new Set(nodes.map((n) => n.group))];

  return (
    <Page title="The web">
      <PageHeader
        kicker="People & places"
        title="The web"
        lede="Every person and every recorded relationship in one picture. Drag a node to move it, select it to highlight its ties, double-click to open the person. Select a line for its evidence."
      />
      <FilterBar>
        <FilterGroup label="Support">
          {(["canon", "strong", "theory"] as Status[]).map((s) => (
            <FilterChip key={s} on={statuses.includes(s)} onClick={() => setStatuses(statuses.includes(s) ? statuses.filter((x) => x !== s) : [...statuses, s])}>{STATUS[s].word}</FilterChip>
          ))}
        </FilterGroup>
        <FilterGroup label="View">
          <Toggle on={unified} onChange={setUnified}>Unified people</Toggle>
          <select value={focus} onChange={(e) => setFocus(e.target.value)} aria-label="Focus on a person">
            <option value="">No focus</option>
            {[...nodes].sort((a, b) => labelForEntity(a.id).localeCompare(labelForEntity(b.id))).map((n) => <option key={n.id} value={n.id}>{labelForEntity(n.id)}</option>)}
          </select>
        </FilterGroup>
      </FilterBar>
      <div className="graph-wrap scroll-x" role="region" aria-label="Relationship graph" tabIndex={0}>
        <svg viewBox={`0 0 ${SIZE.w} ${SIZE.h}`} className="graph-svg" role="img" aria-label={`Graph of ${nodes.length} people and ${links.length} relationships`}
          onPointerMove={(e) => { if (!drag.current) return; const p = toSvg(drag.current.svg, e.clientX, e.clientY); drag.current.node.fx = p.x; drag.current.node.fy = p.y; simRef.current?.alpha(0.3).restart(); }}
          onPointerUp={() => { if (drag.current) { drag.current.node.fx = null; drag.current.node.fy = null; drag.current = null; } }}>
          {links.map((l, i) => {
            const s = l.source as N, t = l.target as N;
            if (s.x == null || t.x == null) return null;
            const dim = neighbors && !(neighbors.has(s.id) && neighbors.has(t.id));
            return (
              <g key={i} className={`edge${dim ? " dim" : ""}${sel === l.rel ? " sel" : ""}`} data-level={levelOf(l.rel.status)} data-tie={tieOf(l.rel.kind)} onClick={() => setSel(l.rel)}>
                <line x1={s.x} y1={s.y} x2={t.x} y2={t.y} className="edge-hit" />
                <line x1={s.x} y1={s.y} x2={t.x} y2={t.y} className="edge-line" />
              </g>
            );
          })}
          {nodes.map((n) => {
            if (n.x == null) return null;
            const dim = neighbors && !neighbors.has(n.id);
            const r = 8 + Math.min(14, Math.sqrt(n.weight) * 2);
            return (
              <g key={n.id} transform={`translate(${n.x},${n.y})`} className={`gnode${dim ? " dim" : ""}${focus === n.id ? " focus" : ""}`}
                onPointerDown={(e) => { const svg = (e.currentTarget.ownerSVGElement)!; drag.current = { node: n, svg }; }}
                onClick={() => setFocus(focus === n.id ? "" : n.id)} onDoubleClick={() => nav(personPath(n.id))}>
                <circle r={r} fill={GROUP_HUE[n.group]} />
                <text y={r + 13} textAnchor="middle">{labelForEntity(n.id)}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="tie-legend" aria-label="Legend">
        <span className="label">Groups</span>
        {groupsShown.map((g) => <span key={g}><i className="graph-swatch" style={{ background: GROUP_HUE[g] }} /> {GROUP_LABEL[g]}</span>)}
      </div>
      <div className="tie-legend" aria-label="Line styles">
        <span className="label">Lines</span>
        <span><svg width="30" height="6" aria-hidden><line x1="1" y1="3" x2="29" y2="3" /></svg>Canon</span>
        <span><svg width="30" height="6" aria-hidden><line x1="1" y1="3" x2="29" y2="3" strokeDasharray="7 4" /></svg>Strong inference</span>
        <span><svg width="30" height="6" aria-hidden><line x1="1" y1="3" x2="29" y2="3" strokeDasharray="1.5 4.5" /></svg>Theory</span>
        <span className="edge" data-tie="identity"><svg width="22" height="6" aria-hidden><line x1="1" y1="3" x2="21" y2="3" /></svg>Identity</span>
        <span className="edge" data-tie="harm"><svg width="22" height="6" aria-hidden><line x1="1" y1="3" x2="21" y2="3" /></svg>Killed</span>
        <span className="edge" data-tie="made"><svg width="22" height="6" aria-hidden><line x1="1" y1="3" x2="21" y2="3" /></svg>Created or controls</span>
      </div>
      {sel && (
        <div className="rel-detail" role="status">
          <h3><EntityLink id={sel.from} /> <span className="muted">{sel.kind.replace(/-/g, " ")}</span> <EntityLink id={sel.to} /> <StatusMark value={sel.status} long /></h3>
          {sel.note && <p>{sel.note}</p>}
          <p className="cluster"><span className="label">Evidence</span> <CiteList ids={sel.evidence} /></p>
        </div>
      )}
    </Page>
  );
}
