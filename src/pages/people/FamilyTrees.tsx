import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { labelForEntity, personById, relations } from "../../data/store";
import { canonicalId } from "../../data/model";
import { familyTrees } from "../../data/familyTrees";
import type { Relation, RelationKind, Status } from "../../data/schema";
import { CiteList, EntityLink, FilterBar, FilterChip, FilterGroup, Page, PageHeader, StatusMark, Tabs, Toggle, levelOf, personPath } from "../../components/ui";
import "./relgraph.css";
import "./family.css";

type Tie = "family" | "identity" | "harm" | "made";
const KIND_STYLE: Partial<Record<RelationKind, { label: string; tie: Tie }>> = {
  "parent-of": { label: "parent of", tie: "family" },
  "spouse-of": { label: "spouse of", tie: "family" },
  "sibling-of": { label: "sibling of", tie: "family" },
  "partner-of": { label: "partner of", tie: "family" },
  killed: { label: "killed", tie: "harm" },
  possesses: { label: "haunts", tie: "identity" },
  wore: { label: "wore", tie: "identity" },
  became: { label: "became", tie: "identity" },
  "same-as": { label: "same being as", tie: "identity" },
  created: { label: "created", tie: "made" },
  controls: { label: "controls", tie: "made" },
};
const TIE_LABEL: Record<Tie, string> = { family: "Family and partners", identity: "Identity: haunts, wore, became, same as", harm: "Killed", made: "Created or controls" };
/** The data's description of the Afton tree explains the old line styles; the legend below replaces that sentence. */
const LINE_KEY_SENTENCE = /\s*Solid lines are[^.]*\./;
const RANK: Record<Status, number> = { canon: 3, strong: 2, theory: 1 };
const W = 196, H = 66, GX = 34, GY = 92;

interface Edge { from: string; to: string; kind: RelationKind; status: Status; rels: Relation[] }

/** Breaks a long name over two lines so it stays inside its box. */
function nameLines(name: string, max = 23): string[] {
  if (name.length <= max) return [name];
  const words = name.split(" ");
  let a = "";
  while (words.length && `${a} ${words[0]}`.trim().length <= max) a = `${a} ${words.shift()}`.trim();
  const b = words.join(" ");
  return [a || name.slice(0, max), b.length > max ? `${b.slice(0, max - 1)}…` : b].filter(Boolean);
}

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
    <Page title="Family trees">
      <PageHeader
        kicker="People & places"
        title="Family trees"
        lede="Who is tied to whom, and how firmly. Select a line to see the evidence behind it, or a person to open their page. Folding merges the records the model treats as one person."
      />
      <Tabs label="Family" tabs={familyTrees.map((t) => ({ id: t.id, label: t.title }))} value={treeId} onChange={(id) => { setTreeId(id); setSel(null); }} />
      {tree && <p className="tree-desc">{tree.description.replace(LINE_KEY_SENTENCE, "")}</p>}
      <FilterBar>
        <FilterGroup label="Unified view">
          <Toggle on={foldIds} onChange={setFoldIds}>Fold identities <span className="faint">(same as)</span></Toggle>
          <Toggle on={foldVessels} onChange={setFoldVessels}>Fold vessels <span className="faint">(haunts, wore)</span></Toggle>
          {foldedCount > 0 && <span className="fold-note" role="status">{foldedCount} record{foldedCount > 1 ? "s" : ""} folded</span>}
        </FilterGroup>
        <FilterGroup label="Show lines">
          {Object.entries(KIND_STYLE).map(([k, v]) => (
            <FilterChip key={k} on={!!show[k]} onClick={() => setShow({ ...show, [k]: !show[k] })}>{v!.label}</FilterChip>
          ))}
        </FilterGroup>
      </FilterBar>
      <div className="tie-legend" aria-label="Legend">
        <span className="label">Line style</span>
        <StatusMark value="canon" variant="inline" /><svg width="34" height="6" aria-hidden><line x1="1" y1="3" x2="33" y2="3" /></svg>
        <StatusMark value="strong" variant="inline" long /><svg width="34" height="6" aria-hidden><line x1="1" y1="3" x2="33" y2="3" strokeDasharray="7 4" /></svg>
        <StatusMark value="theory" variant="inline" /><svg width="34" height="6" aria-hidden><line x1="1" y1="3" x2="33" y2="3" strokeDasharray="1.5 4.5" /></svg>
      </div>
      <div className="tie-legend" aria-label="Line colours">
        <span className="label">Line colour</span>
        {(Object.keys(TIE_LABEL) as Tie[]).map((t) => (
          <span key={t} className="edge" data-tie={t}><svg width="22" height="6" aria-hidden><line x1="1" y1="3" x2="21" y2="3" /></svg>{TIE_LABEL[t]}</span>
        ))}
      </div>
      {tree && layout && (
        <div className="tree-wrap scroll-x" role="region" aria-label={`${tree.title} family tree`} tabIndex={0}>
          <svg viewBox={`0 0 ${layout.width} ${layout.height}`} width={layout.width} height={layout.height} className="tree-svg" role="group" aria-label={`${tree.title}: people and the ties between them`}>
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
                <g key={i} className={`edge${sel === r ? " sel" : ""}`} data-level={levelOf(r.status)} data-tie={KIND_STYLE[r.kind]?.tie ?? "family"} onClick={() => setSel(r)}>
                  <title>{`${labelForEntity(r.from)} ${KIND_STYLE[r.kind]?.label ?? r.kind} ${labelForEntity(r.to)} (${r.status})`}</title>
                  <path d={d} className="edge-hit" />
                  <path d={d} className="edge-line" />
                </g>
              );
            })}
            {layout.kept.map((m) => {
              const p = layout.pos.get(m.id)!;
              const person = personById.get(m.id);
              const abs = layout.absorbed.get(m.id) ?? [];
              const sub = abs.length ? `+ ${abs.map((x) => labelForEntity(x).replace(/^The /, "")).join(", ")}` : m.note ?? "";
              const lines = nameLines(labelForEntity(m.id));
              const two = lines.length > 1;
              return (
                <g key={m.id} className={`node${person?.nameStatus === "descriptor" ? " desc" : ""}${person?.group === "entity" ? " machine" : ""}${abs.length ? " merged" : ""}`}
                  style={{ transform: `translate(${p.x}px, ${p.y}px)` }} onClick={() => nav(personPath(m.id))} tabIndex={0} role="link" onKeyDown={(e) => e.key === "Enter" && nav(personPath(m.id))}>
                  <title>{labelForEntity(m.id)}{abs.length ? `, also: ${abs.map(labelForEntity).join(", ")}` : ""}</title>
                  <rect width={W} height={H} rx={5} />
                  {abs.length > 0 && <g className="merge-badge"><circle cx={W - 4} cy={4} r={11} /><text x={W - 4} y={8} textAnchor="middle">{abs.length + 1}</text></g>}
                  <text x={W / 2} y={two ? 21 : 28} textAnchor="middle" className="node-name">
                    {lines.map((l, i) => <tspan key={i} x={W / 2} dy={i === 0 ? 0 : 16}>{l}</tspan>)}
                  </text>
                  <text x={W / 2} y={two ? 55 : 48} textAnchor="middle" className="node-sub">{sub.length > 31 ? `${sub.slice(0, 30)}…` : sub}</text>
                </g>
              );
            })}
          </svg>
        </div>
      )}
      {sel ? (
        <div className="rel-detail" role="status">
          <h3><EntityLink id={sel.from} /> <span className="muted">{KIND_STYLE[sel.kind]?.label ?? sel.kind}</span> <EntityLink id={sel.to} /> <StatusMark value={sel.status} long /></h3>
          {sel.rels.length > 1 && <p className="muted small">{sel.rels.length} underlying relationships are folded into this line.</p>}
          {sel.rels.map((r, i) => (
            <div key={i} className="rel-under">
              {sel.rels.length > 1 && <span className="small"><EntityLink id={r.from} /> → <EntityLink id={r.to} /> <StatusMark value={r.status} /></span>}
              {r.note && <p>{r.note}</p>}
              <p className="cluster"><span className="label">Evidence</span> <CiteList ids={r.evidence} /></p>
            </div>
          ))}
        </div>
      ) : <p className="muted small tree-hint">Select a line to see the evidence behind a relationship.</p>}
      {tree?.notes && <div className="note">{tree.notes}</div>}
    </Page>
  );
}
