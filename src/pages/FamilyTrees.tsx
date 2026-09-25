import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { labelForEntity, personById, relations } from "../data/store";
import { familyTrees } from "../data/familyTrees";
import type { Relation, RelationKind } from "../data/schema";
import { CiteList, EntityLink, StatusBadge } from "../components/ui";

const KIND_STYLE: Partial<Record<RelationKind, { dash?: string; label: string }>> = {
  "parent-of": { label: "parent of" },
  "spouse-of": { label: "spouse of", dash: "2 4" },
  "sibling-of": { label: "sibling of", dash: "6 3" },
  "partner-of": { label: "partner of", dash: "2 4" },
  killed: { label: "killed", dash: "1 5" },
  possesses: { label: "haunts / possesses", dash: "8 4 2 4" },
  "same-as": { label: "same being as", dash: "10 3" },
  created: { label: "created", dash: "4 4" },
  controls: { label: "controls", dash: "4 2" },
};

const W = 180, H = 58, GX = 40, GY = 90;

export default function FamilyTrees() {
  const [treeId, setTreeId] = useState(familyTrees[0]?.id ?? "");
  const [show, setShow] = useState<Record<string, boolean>>({ "parent-of": true, "spouse-of": true, "sibling-of": true, "partner-of": true, killed: false, possesses: true, "same-as": true, created: false, controls: true });
  const [sel, setSel] = useState<Relation | null>(null);
  const nav = useNavigate();
  const tree = familyTrees.find((t) => t.id === treeId);

  const layout = useMemo(() => {
    if (!tree) return null;
    const pos = new Map<string, { x: number; y: number }>();
    for (const m of tree.members) pos.set(m.id, { x: 20 + m.col * (W + GX), y: 20 + m.gen * (H + GY) });
    const ids = new Set(tree.members.map((m) => m.id));
    const edges = relations.filter((r) => ids.has(r.from) && ids.has(r.to) && show[r.kind]);
    const width = Math.max(...tree.members.map((m) => m.col)) * (W + GX) + W + 40;
    const height = Math.max(...tree.members.map((m) => m.gen)) * (H + GY) + H + 40;
    return { pos, edges, width, height };
  }, [tree, show]);

  return (
    <div className="page">
      <h1>Family Trees</h1>
      <p className="lede">
        Line colour = strength of support: <StatusBadge status="canon" /> <StatusBadge status="strong" /> <StatusBadge status="theory" />.
        Click any line to see the exact evidence behind it; click a person to open their file.
      </p>
      <div className="filters">
        {familyTrees.map((t) => <button key={t.id} className={t.id === treeId ? "btn active" : "btn"} onClick={() => { setTreeId(t.id); setSel(null); }}>{t.title}</button>)}
      </div>
      <div className="filters">
        {Object.entries(KIND_STYLE).map(([k, v]) => (
          <label key={k} className="check"><input type="checkbox" checked={!!show[k]} onChange={(e) => setShow({ ...show, [k]: e.target.checked })} /> {v!.label}</label>
        ))}
      </div>
      {tree && <p>{tree.description}</p>}
      {tree && layout && (
        <div className="tree-wrap">
          <svg viewBox={`0 0 ${layout.width} ${layout.height}`} width={layout.width} height={layout.height} className="tree-svg" role="img" aria-label={tree.title}>
            {layout.edges.map((r, i) => {
              const a = layout.pos.get(r.from)!; const b = layout.pos.get(r.to)!;
              const ax = a.x + W / 2, ay = a.y + H / 2, bx = b.x + W / 2, by = b.y + H / 2;
              let d: string;
              if (r.kind === "parent-of") {
                const my = (a.y + H + b.y) / 2;
                d = `M${ax},${a.y + H} V${my} H${bx} V${b.y}`;
              } else if (Math.abs(ay - by) < 2) {
                const lift = r.kind === "sibling-of" ? H / 2 + 14 : -(H / 2 + 14);
                d = `M${ax},${ay - H / 2 * Math.sign(-lift || 1)} C${ax},${ay - lift} ${bx},${by - lift} ${bx},${by - H / 2 * Math.sign(-lift || 1)}`;
              } else {
                d = `M${ax},${ay} C${ax},${(ay + by) / 2} ${bx},${(ay + by) / 2} ${bx},${by}`;
              }
              const style = KIND_STYLE[r.kind];
              return (
                <g key={i} className={`edge st-${r.status} ${sel === r ? "sel" : ""}`} onClick={() => setSel(r)}>
                  <path d={d} className="edge-hit" />
                  <path d={d} className="edge-line" strokeDasharray={style?.dash} />
                </g>
              );
            })}
            {tree.members.map((m) => {
              const p = layout.pos.get(m.id)!;
              const person = personById.get(m.id);
              return (
                <g key={m.id} className={`node ${person?.nameStatus === "descriptor" ? "desc" : ""}`} transform={`translate(${p.x},${p.y})`} onClick={() => nav(`/people/${m.id}`)} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && nav(`/people/${m.id}`)}>
                  <rect width={W} height={H} rx={8} />
                  <text x={W / 2} y={24} textAnchor="middle" className="node-name">{labelForEntity(m.id)}</text>
                  <text x={W / 2} y={43} textAnchor="middle" className="node-sub">{m.note ?? ""}</text>
                </g>
              );
            })}
          </svg>
        </div>
      )}
      {sel ? (
        <div className="rel-detail">
          <h3><EntityLink id={sel.from} /> <span className="muted">{KIND_STYLE[sel.kind]?.label ?? sel.kind}</span> <EntityLink id={sel.to} /> <StatusBadge status={sel.status} /></h3>
          {sel.note && <p>{sel.note}</p>}
          <p>Evidence: <CiteList ids={sel.evidence} /></p>
        </div>
      ) : <p className="muted">Select a line to inspect the evidence behind a relationship.</p>}
      {tree?.notes && <div className="note">{tree.notes}</div>}
    </div>
  );
}
