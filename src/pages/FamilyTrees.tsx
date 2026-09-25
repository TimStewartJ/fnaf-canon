import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { labelForEntity, personById, relations } from "../data/store";
import { canonicalId } from "../data/model";
import { familyTrees } from "../data/familyTrees";
import type { Relation, RelationKind, Status } from "../data/schema";
import { CiteList, EntityLink, StatusBadge } from "../components/ui";

const KIND_STYLE: Partial<Record<RelationKind, { dash?: string; label: string; identity?: boolean }>> = {
  "parent-of": { label: "parent of" },
  "spouse-of": { label: "spouse of", dash: "2 4" },
  "sibling-of": { label: "sibling of", dash: "6 3" },
  "partner-of": { label: "partner of", dash: "2 4" },
  killed: { label: "killed", dash: "1 5" },
  possesses: { label: "haunts", dash: "8 4 2 4", identity: true },
  wore: { label: "wore", dash: "8 4 2 4", identity: true },
  became: { label: "became", dash: "10 3", identity: true },
  "same-as": { label: "same being as", dash: "10 3", identity: true },
  created: { label: "created", dash: "4 4" },
  controls: { label: "controls", dash: "4 2" },
};
const RANK: Record<Status, number> = { canon: 3, strong: 2, theory: 1 };
const W = 190, H = 62, GX = 36, GY = 92;

interface Edge { from: string; to: string; kind: RelationKind; status: Status; rels: Relation[] }

export default function FamilyTrees() {
  const [treeId, setTreeId] = useState(familyTrees[0]?.id ?? "");
  const [foldIds, setFoldIds] = useState(false);
  const [foldVessels, setFoldVessels] = useState(false);
  const [show, setShow] = useState<Record<string, boolean>>({ "parent-of": true, "spouse-of": true, "sibling-of": true, "partner-of": true, killed: false, possesses: true, wore: true, became: true, "same-as": true, created: false, controls: false });
  const [sel, setSel] = useState<Edge | null>(null);
  const nav = useNavigate();
  const tree = familyTrees.find((t) => t.id === treeId);

  const layout = useMemo(() => {
    if (!tree) return null;
    const inTree = new Set(tree.members.map((m) => m.id));
    // Map each member to the node it folds into (only if that node is part of this tree).
    const target = (id: string) => {
      if (!foldIds && !foldVessels) return id;
      let t = canonicalId(id, { identities: foldIds, vessels: foldVessels });
      if (!inTree.has(t) && foldIds) t = canonicalId(id, { identities: true, vessels: false });
      return inTree.has(t) ? t : id;
    };
    const absorbed = new Map<string, string[]>();
    for (const m of tree.members) { const t = target(m.id); if (t !== m.id) absorbed.set(t, [...(absorbed.get(t) ?? []), m.id]); }
    const kept = tree.members.filter((m) => target(m.id) === m.id);
    // Compact each generation and centre the rows.
    const gens = [...new Set(kept.map((m) => m.gen))].sort((a, b) => a - b);
    const maxRow = Math.max(...gens.map((g) => kept.filter((m) => m.gen === g).length));
    const pos = new Map<string, { x: number; y: number }>();
    gens.forEach((g, gi) => {
      const row = kept.filter((m) => m.gen === g).sort((a, b) => a.col - b.col);
      const off = (maxRow - row.length) / 2;
      row.forEach((m, i) => pos.set(m.id, { x: 20 + (i + off) * (W + GX), y: 20 + gi * (H + GY) }));
    });
    const edgeMap = new Map<string, Edge>();
    for (const r of relations) {
      if (!inTree.has(r.from) || !inTree.has(r.to) || !show[r.kind]) continue;
      const a = target(r.from), b = target(r.to);
      if (a === b) continue;
      const key = `${a}|${b}|${r.kind}`;
      const e = edgeMap.get(key);
      if (!e) edgeMap.set(key, { from: a, to: b, kind: r.kind, status: r.status, rels: [r] });
      else { e.rels.push(r); if (RANK[r.status] > RANK[e.status]) e.status = r.status; }
    }
    return { pos, edges: [...edgeMap.values()], kept, absorbed, width: maxRow * (W + GX) + 20, height: gens.length * (H + GY) - GY + 40 };
  }, [tree, show, foldIds, foldVessels]);

  const foldedCount = layout ? tree!.members.length - layout.kept.length : 0;

  return (
    <div className="page">
      <h1>Family Trees</h1>
      <p className="lede">
        Line colour shows how firmly each tie is supported: <StatusBadge status="canon" /> <StatusBadge status="strong" /> <StatusBadge status="theory" />.
        Click a line to see its evidence, or a person to open their page. Folding merges the records the Unified Model treats as one person.
      </p>
      <div className="tree-tabs">
        {familyTrees.map((t) => <button key={t.id} className={t.id === treeId ? "tab on" : "tab"} onClick={() => { setTreeId(t.id); setSel(null); }}>{t.title}</button>)}
      </div>
      <div className="tree-controls">
        <div className="fold-box">
          <span className="tl-filter-label">Unified view</span>
          <button className={`toggle ${foldIds ? "on" : ""}`} onClick={() => setFoldIds(!foldIds)} aria-pressed={foldIds}><span className="knob" />Fold identities <span className="muted small">(same as)</span></button>
          <button className={`toggle ${foldVessels ? "on" : ""}`} onClick={() => setFoldVessels(!foldVessels)} aria-pressed={foldVessels}><span className="knob" />Fold vessels <span className="muted small">(haunts · wore)</span></button>
          {foldedCount > 0 && <span className="fold-note">{foldedCount} record{foldedCount > 1 ? "s" : ""} folded</span>}
        </div>
        <div className="kind-box">
          <span className="tl-filter-label">Show lines</span>
          {Object.entries(KIND_STYLE).map(([k, v]) => (
            <button key={k} className={`chip-btn ${show[k] ? "on" : ""}`} onClick={() => setShow({ ...show, [k]: !show[k] })}>{v!.label}</button>
          ))}
        </div>
      </div>
      {tree && <p className="muted">{tree.description}</p>}
      {tree && layout && (
        <div className="tree-wrap">
          <svg viewBox={`0 0 ${layout.width} ${layout.height}`} width={layout.width} height={layout.height} className="tree-svg" role="img" aria-label={tree.title}>
            {layout.edges.map((r, i) => {
              const a = layout.pos.get(r.from)!; const b = layout.pos.get(r.to)!;
              const ax = a.x + W / 2, bx = b.x + W / 2;
              let d: string;
              if (r.kind === "parent-of" && a.y < b.y) {
                const my = a.y + H + (b.y - a.y - H) / 2;
                d = `M${ax},${a.y + H} V${my} H${bx} V${b.y}`;
              } else if (Math.abs(a.y - b.y) < 2) {
                const lift = r.kind === "sibling-of" ? 22 : -22;
                const ya = lift > 0 ? a.y + H : a.y, yb = lift > 0 ? b.y + H : b.y;
                d = `M${ax},${ya} C${ax},${ya + lift} ${bx},${yb + lift} ${bx},${yb}`;
              } else {
                const [top, bot] = a.y < b.y ? [a, b] : [b, a];
                const tx = top.x + W / 2, bx2 = bot.x + W / 2;
                d = `M${tx},${top.y + H} C${tx},${(top.y + H + bot.y) / 2} ${bx2},${(top.y + H + bot.y) / 2} ${bx2},${bot.y}`;
              }
              return (
                <g key={i} className={`edge st-${r.status} ${sel === r ? "sel" : ""}`} onClick={() => setSel(r)}>
                  <path d={d} className="edge-hit" />
                  <path d={d} className="edge-line" strokeDasharray={KIND_STYLE[r.kind]?.dash} />
                </g>
              );
            })}
            {layout.kept.map((m) => {
              const p = layout.pos.get(m.id)!;
              const person = personById.get(m.id);
              const abs = layout.absorbed.get(m.id) ?? [];
              const sub = abs.length ? `+ ${abs.map((x) => labelForEntity(x).replace(/^The /, "")).join(", ")}` : m.note ?? "";
              return (
                <g key={m.id} className={`node ${person?.nameStatus === "descriptor" ? "desc" : ""} ${person?.group === "entity" ? "machine" : ""} ${abs.length ? "merged" : ""}`}
                  style={{ transform: `translate(${p.x}px, ${p.y}px)` }} onClick={() => nav(`/people/${m.id}`)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && nav(`/people/${m.id}`)}>
                  <title>{labelForEntity(m.id)}{abs.length ? ` — also: ${abs.map(labelForEntity).join(", ")}` : ""}</title>
                  <rect width={W} height={H} rx={10} />
                  {abs.length > 0 && <g className="merge-badge"><circle cx={W - 4} cy={4} r={11} /><text x={W - 4} y={8} textAnchor="middle">{abs.length + 1}</text></g>}
                  <text x={W / 2} y={26} textAnchor="middle" className="node-name">{labelForEntity(m.id)}</text>
                  <text x={W / 2} y={45} textAnchor="middle" className="node-sub">{sub.length > 30 ? sub.slice(0, 29) + "…" : sub}</text>
                </g>
              );
            })}
          </svg>
        </div>
      )}
      {sel ? (
        <div className="rel-detail">
          <h3><EntityLink id={sel.from} /> <span className="muted">{KIND_STYLE[sel.kind]?.label ?? sel.kind}</span> <EntityLink id={sel.to} /> <StatusBadge status={sel.status} /></h3>
          {sel.rels.length > 1 && <p className="muted small">{sel.rels.length} underlying relationships folded into this line.</p>}
          {sel.rels.map((r, i) => (
            <div key={i} className="rel-under">
              {sel.rels.length > 1 && <span className="small"><EntityLink id={r.from} /> → <EntityLink id={r.to} /> <StatusBadge status={r.status} /></span>}
              {r.note && <p>{r.note}</p>}
              <p>Evidence: <CiteList ids={r.evidence} /></p>
            </div>
          ))}
        </div>
      ) : <p className="muted small">Select a line to inspect the evidence behind a relationship.</p>}
      {tree?.notes && <div className="note">{tree.notes}</div>}
    </div>
  );
}
