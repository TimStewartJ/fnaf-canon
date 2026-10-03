import { useCallback, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import { labelForEntity, personById } from "../../data/store";
import { familyTrees, type FamilyTree } from "../../data/familyTrees";
import {
  Callout, Collapsible, Empty, FilterChip, Icon, Page, PageHeader, Tabs, Toggle, firmness, levelOf, personPath, smartQuotes,
  useMediaQuery,
} from "../../components/ui";
import { GroupLabel } from "./Dossier";
import { buildTree, defaultKinds, describeTree, routingOf, tiesWithin, type TreeEdge } from "./familyModel";
import { TieBar, TieLegend } from "./RelParts";
import { TieRow, TieSentence } from "./Ties";
import { TIE_FAMILIES, TIE_FAMILY_LABEL, byFamily, plural, tieSentence, tieWords, type TieFamily } from "./ties";
import { LANE_GAP, arrowHead, roundedPath, routePoints, type Geometry } from "./treeLayout";
import { listParam, useUrlState } from "./urlState";
import "./common.css";
import "./relgraph.css";
import "./family.css";

const FOLDS = ["ids", "vessels"] as const;

/** The width of an element's content box, kept up to date. Starts from a guess so the first paint is close. */
function useContentWidth<T extends HTMLElement>(): [(el: T | null) => void, number] {
  const [width, setWidth] = useState(() => Math.min(1216, (typeof window === "undefined" ? 1216 : window.innerWidth) - 34));
  const observer = useRef<ResizeObserver | null>(null);
  const ref = useCallback((el: T | null) => {
    observer.current?.disconnect();
    if (!el) return;
    const read = () => {
      const cs = getComputedStyle(el);
      setWidth(Math.max(0, el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)));
    };
    read();
    observer.current = new ResizeObserver(read);
    observer.current.observe(el);
  }, []);
  return [ref, width];
}

const sum = (list: readonly number[]) => list.reduce((a, b) => a + b, 0);
const sameNumbers = (a: readonly number[], b: readonly number[]) => a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < 0.5);

function TreeView({ tree }: { tree: FamilyTree }) {
  const url = useUrlState();
  const phone = useMediaQuery("(max-width: 640px)");
  const folds = listParam(url.get("fold"), FOLDS);
  const foldIds = folds.includes("ids"), foldVessels = folds.includes("vessels");
  const setFold = (which: (typeof FOLDS)[number], on: boolean) =>
    url.set({ fold: FOLDS.filter((f) => (f === which ? on : folds.includes(f))).join(",") || null, tie: null });

  // The kinds of tie that occur among this tree's members, in family order, with how many of each.
  const kinds = useMemo(() => {
    const count = new Map<string, number>();
    for (const r of tiesWithin(tree)) count.set(r.kind, (count.get(r.kind) ?? 0) + 1);
    return [...count].map(([kind, n]) => ({ kind, n })).sort((a, b) => TIE_FAMILIES.indexOf(tieWords(a.kind).family) - TIE_FAMILIES.indexOf(tieWords(b.kind).family));
  }, [tree]);
  const kindIds = useMemo(() => kinds.map((k) => k.kind), [kinds]);
  // ?lines= lists departures from the default: "killed" switches a kind on, "-sibling-of" switches one off.
  // Kinds a tree does not have are ignored, so the choice carries from tab to tab.
  const linesParam = url.get("lines");
  const shownKinds = useMemo(() => {
    const tokens = new Set(linesParam.split(",").filter(Boolean));
    const usual = new Set(defaultKinds(kindIds));
    return kindIds.filter((k) => (usual.has(k) ? !tokens.has(`-${k}`) : tokens.has(k)));
  }, [linesParam, kindIds]);
  const toggleKind = (kind: string) => {
    const tokens = new Set(linesParam.split(",").filter(Boolean));
    const token = defaultKinds([kind]).length ? `-${kind}` : kind;
    if (tokens.has(token)) tokens.delete(token); else tokens.add(token);
    url.set({ lines: [...tokens].join(",") || null, tie: null });
  };

  const model = useMemo(() => buildTree(tree, { ids: foldIds, vessels: foldVessels }, new Set(shownKinds)), [tree, foldIds, foldVessels, shownKinds]);
  const at = useMemo(() => new Map(model.nodes.map((n) => [n.id, n])), [model]);
  const edgeByKey = useMemo(() => new Map(model.edges.map((e) => [e.key, e])), [model]);
  const selected = edgeByKey.get(url.get("tie"));
  const select = (e: TreeEdge | null) => url.set({ tie: e && e !== selected ? e.key : null });

  /*
   * Sizes. The columns share the width there is. When that would squeeze them, the gutters close up
   * and ties between neighbours run under the boxes instead of through the gutters ("tight"). Only
   * when even that does not fit does the frame scroll, and then the columns take a comfortable width.
   */
  const [scrollRef, avail] = useContentWidth<HTMLDivElement>();
  const plan = useMemo(() => {
    const attempt = (tight: boolean) => {
      const routing = routingOf(model, !tight);
      const pad = tight ? 4 : 14;
      const gutW = routing.gutterLanes.map((lanes, g) =>
        g === 0 || g === model.nCols ? pad + (lanes ? lanes * LANE_GAP + 6 : 0) : tight ? 8 + lanes * LANE_GAP : Math.max(30, 12 + lanes * LANE_GAP));
      return { tight, routing, pad, gutW, fit: Math.floor((avail - sum(gutW)) / Math.max(1, model.nCols)) };
    };
    const roomy = attempt(false);
    if (roomy.fit >= 112) return { ...roomy, colW: Math.min(208, roomy.fit) };
    const tight = attempt(true);
    return { ...tight, colW: tight.fit >= 74 ? Math.min(208, tight.fit) : 104 };
  }, [model, avail]);
  const { tight, routing, pad, gutW, colW } = plan;
  const bandH = useMemo(() => routing.bandLanes.map((lanes, b) =>
    b === 0 ? pad : b === model.nRows ? pad + (lanes ? 14 + lanes * LANE_GAP : 0) : Math.max(tight ? 36 : 48, 30 + (lanes - 1) * LANE_GAP)), [routing, pad, tight, model.nRows]);
  const width = sum(gutW) + colW * model.nCols;

  /* ── Row heights come from the boxes themselves (names wrap), so they are measured after layout. ── */
  const gridRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const [rows, setRows] = useState<{ y: number[]; h: number[]; height: number; overflow: boolean } | null>(null);
  const measure = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const y = new Array<number>(model.nRows).fill(Infinity), bottom = new Array<number>(model.nRows).fill(0);
    for (const n of model.nodes) {
      const el = nodeRefs.current.get(n.id);
      if (!el) return;
      y[n.row] = Math.min(y[n.row], el.offsetTop);
      bottom[n.row] = Math.max(bottom[n.row], el.offsetTop + el.offsetHeight);
    }
    const h = bottom.map((b, r) => b - y[r]);
    const scroller = grid.parentElement;
    const next = { y, h, height: grid.offsetHeight, overflow: !!scroller && scroller.scrollWidth > scroller.clientWidth + 1 };
    setRows((prev) => (prev && sameNumbers(prev.y, y) && sameNumbers(prev.h, h) && prev.height === next.height && prev.overflow === next.overflow ? prev : next));
  }, [model]);
  useLayoutEffect(() => { measure(); }, [measure, colW, width]);
  useLayoutEffect(() => {
    // Late fonts change how names wrap.
    let alive = true;
    document.fonts?.ready.then(() => { if (alive) measure(); });
    return () => { alive = false; };
  }, [measure]);

  const geometry: Geometry | null = useMemo(() => {
    if (!rows || rows.y.length !== model.nRows) return null;
    const colX: number[] = [], gutX: number[] = [];
    let x = 0;
    for (let c = 0; c <= model.nCols; c++) { gutX.push(x); x += gutW[c]; if (c < model.nCols) { colX.push(x); x += colW; } }
    const bandY = bandH.map((_, b) => (b === 0 ? 0 : rows.y[b - 1] + rows.h[b - 1]));
    return { colX, colW, gutX, gutW, rowY: rows.y, rowH: rows.h, bandY, bandH };
  }, [rows, model, gutW, colW, bandH]);

  /* ── A hovered or focused person brings their own lines forward. ── */
  const [hot, setHot] = useState<string | null>(null);
  const near = useMemo(() => {
    if (!hot) return null;
    const set = new Set([hot]);
    for (const e of model.edges) { if (e.from === hot) set.add(e.to); if (e.to === hot) set.add(e.from); }
    return set;
  }, [hot, model]);
  const edgeRefs = useRef<(SVGGElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const onEdgeKey = (ev: KeyboardEvent<SVGGElement>, i: number) => {
    const n = model.edges.length;
    const go = (to: number) => { ev.preventDefault(); edgeRefs.current[(to + n) % n]?.focus(); };
    if (ev.key === "ArrowDown" || ev.key === "ArrowRight") go(i + 1);
    else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") go(i - 1);
    else if (ev.key === "Home") go(0);
    else if (ev.key === "End") go(n - 1);
    else if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); select(model.edges[i]); }
  };

  const families = TIE_FAMILIES.filter((f) => model.edges.some((e) => tieWords(e.kind).family === f));
  const hasMachine = model.nodes.some((n) => personById.get(n.id)?.group === "entity");
  const hasDescriptor = model.nodes.some((n) => personById.get(n.id)?.nameStatus === "descriptor");
  const description = describeTree(tree.description);

  const linesOn = kinds.filter((k) => shownKinds.includes(k.kind)).map((k) => tieWords(k.kind).label);

  return (
    <>
      {description && <p className="fam-desc">{smartQuotes(description)}</p>}
      <div className="fam-bar" role="group" aria-label="Fold records">
        <span className="label">Fold</span>
        <Toggle on={foldIds} onChange={(on) => setFold("ids", on)}>Identities <span className="faint">(same being)</span></Toggle>
        <Toggle on={foldVessels} onChange={(on) => setFold("vessels", on)}>Vessels <span className="faint">(haunts, wore)</span></Toggle>
        <span className="fam-folded" role="status">{model.folded > 0 ? `${plural(model.folded, "record")} folded into the person the model reads them as.` : ""}</span>
      </div>
      <Collapsible
        className="fam-lines-pick"
        summary="Lines drawn"
        meta={linesOn.length ? `${linesOn.length} of ${kinds.length} kinds${phone ? "" : `: ${linesOn.join(", ")}`}` : `none of ${kinds.length} kinds`}
      >
        <div className="cluster fam-kinds" role="group" aria-label="Kinds of line to draw">
          {kinds.map(({ kind, n }) => (
            <FilterChip key={kind} on={shownKinds.includes(kind)} count={n} onClick={() => toggleKind(kind)}>
              <span className="rel-edge fam-kind" data-tie={tieWords(kind).family}>{tieWords(kind).label}</span>
            </FilterChip>
          ))}
        </div>
      </Collapsible>
      <TieLegend families={families} />

      <div className="fam-frame">
        <div className="fam-scroll scroll-x" ref={scrollRef} role="region" aria-label={`${tree.title}: family tree`} tabIndex={0}>
          <div
            className={`fam-grid${tight ? " is-tight" : ""}`}
            ref={gridRef}
            style={{
              width,
              gridTemplateColumns: gutW.map((g, i) => (i < model.nCols ? `${g}px ${colW}px` : `${g}px`)).join(" "),
              gridTemplateRows: bandH.map((b, i) => (i < model.nRows ? `${b}px auto` : `${b}px`)).join(" "),
            }}
          >
            {model.nodes.map((n) => {
              const person = personById.get(n.id);
              const also = n.absorbed.map((id) => labelForEntity(id));
              // A narrow box names the first record folded into it and counts the rest; the full list is in the tooltip.
              const short = tight && also.length > 2;
              const sub = also.length ? (short ? `with ${also[0]} and ${also.length - 1} more` : `with ${also.join(", ")}`) : n.note ?? "";
              return (
                <Link
                  key={n.id}
                  ref={(el) => { if (el) nodeRefs.current.set(n.id, el); else nodeRefs.current.delete(n.id); }}
                  to={person ? personPath(n.id) : `/evidence?entity=${n.id}`}
                  className={`fam-node${person?.group === "entity" ? " is-machine" : ""}${also.length ? " is-merged" : ""}${near && !near.has(n.id) ? " is-quiet" : ""}`}
                  style={{ gridColumn: 2 * n.col + 2, gridRow: 2 * n.row + 2 } as CSSProperties}
                  title={short ? `With ${also.join(", ")}` : undefined}
                  onPointerEnter={(e) => { if (e.pointerType === "mouse") setHot(n.id); }}
                  onPointerLeave={() => setHot(null)}
                  onFocus={() => setHot(n.id)}
                  onBlur={() => setHot(null)}
                >
                  <span className={`fam-node__name ${person?.nameStatus === "descriptor" ? "name-desc" : "name-canon"}`}>
                    {person?.group === "entity" && <><Icon icon={Bot} className="fam-node__kind" label="Machine:" /> </>}
                    {smartQuotes(labelForEntity(n.id))}
                  </span>
                  {sub && <span className="fam-node__sub">{smartQuotes(sub)}{short && <span className="sr-only">: {also.slice(1).join(", ")}</span>}</span>}
                  {also.length > 0 && <span className="fam-node__badge" aria-hidden>+{also.length}</span>}
                </Link>
              );
            })}
            {geometry && rows && (
              <svg
                className="fam-lines"
                viewBox={`0 0 ${width} ${rows.height}`}
                width={width}
                height={rows.height}
                role="group"
                aria-label={`${plural(model.edges.length, "tie")} between the people above. The arrow keys move from line to line; Enter shows the evidence. The same ties are listed below.`}
              >
                {model.edges.map((e, i) => {
                  const route = routing.routes.find((r) => r.key === e.key);
                  if (!route) return null;
                  const points = routePoints(route, routing, geometry, at);
                  const d = roundedPath(points);
                  const w = tieWords(e.kind);
                  const dim = hot ? e.from !== hot && e.to !== hot : !!selected && selected !== e;
                  return (
                    <g
                      key={e.key}
                      ref={(el) => { edgeRefs.current[i] = el; }}
                      className={`rel-edge${selected === e ? " is-sel" : ""}${dim ? " is-dim" : ""}`}
                      data-level={levelOf(e.status)}
                      data-tie={w.family}
                      role="button"
                      tabIndex={i === Math.min(active, model.edges.length - 1) ? 0 : -1}
                      aria-pressed={selected === e}
                      aria-label={`${tieSentence(e)} (${firmness("status", e.status).word}). ${plural(new Set(e.rels.flatMap((r) => r.evidence)).size, "record")}.`}
                      onClick={() => select(e)}
                      onFocus={() => setActive(i)}
                      onKeyDown={(ev) => onEdgeKey(ev, i)}
                    >
                      <title>{`${tieSentence(e)} (${firmness("status", e.status).word})`}</title>
                      <path d={d} className="rel-edge__hit" />
                      <path d={d} className="rel-edge__line" />
                      {w.directed && w.family !== "family" && <path d={arrowHead(points, route.toIsA)} className="rel-edge__arrow" />}
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
        </div>
        {selected ? <TieBar tie={selected} onClose={() => select(null)} /> : (
          <div className="fam-foot">
            {rows?.overflow && <p className="fam-foot__wide">Wider than the screen: scroll it sideways, fold records to narrow it, or read the same ties in the list below.</p>}
            <p className="fam-foot__key">
              <span>{model.edges.length > 0 ? "Select a line for its evidence, a person for their page." : "Select a person to open their page."}</span>
              {hasDescriptor && <span><em className="name-desc">Italic</em> a descriptor, not a name the games print</span>}
              {hasMachine && <span><Icon icon={Bot} /> a machine or a suit</span>}
              {model.folded > 0 && <span><span className="fam-node__badge fam-node__badge--inline">+2</span> records folded into the box</span>}
            </p>
          </div>
        )}
      </div>

      {/* Rendered once the tree is measured, so a tree too wide for the screen starts with its list open. */}
      {model.edges.length > 0 && rows && (
        <Collapsible className="fam-list" defaultOpen={rows.overflow} summary="The same ties, as a list" meta={plural(model.edges.length, "tie")}>
          {byFamily(model.edges, (e) => e.kind).map((g) => (
            <div key={g.family} className="ppl-tie-group">
              <GroupLabel count={g.items.length}>{TIE_FAMILY_LABEL[g.family as TieFamily]}</GroupLabel>
              <ul className="ppl-ties">
                {g.items.map((e) => (
                  <TieRow
                    key={e.key}
                    status={e.status}
                    note={e.rels.length === 1 ? e.rels[0].note : undefined}
                    evidence={[...new Set(e.rels.flatMap((r) => r.evidence))]}
                    extra={e.rels.length > 1 ? (
                      <ul className="fam-under">
                        {e.rels.map((r) => <li key={`${r.from}|${r.to}`}><TieSentence r={r} /> <span className="ppl-tie__status">{firmness("status", r.status).word}</span>{r.note && <span className="fam-under__note"> {smartQuotes(r.note)}</span>}</li>)}
                      </ul>
                    ) : undefined}
                  >
                    <TieSentence r={e} />
                  </TieRow>
                ))}
              </ul>
            </div>
          ))}
        </Collapsible>
      )}
      {model.edges.length === 0 && <Empty title="No lines to draw">Every kind of line is switched off. Turn one on above to see how these people are tied.</Empty>}
      {tree.notes && <Callout tone="note" title="About this tree" className="fam-notes"><p>{smartQuotes(tree.notes)}</p></Callout>}
    </>
  );
}

export default function FamilyTrees() {
  const url = useUrlState();
  const wanted = url.get("tree");
  const tree = familyTrees.find((t) => t.id === wanted) ?? familyTrees[0];
  return (
    <Page title="Family trees">
      <PageHeader
        kicker="People & places"
        title="Family trees"
        lede="Who is tied to whom, and how firmly. A line’s style shows how firm the tie is; its colour shows what kind of tie it is."
      />
      {tree ? (
        <>
          <Tabs label="Family" tabs={familyTrees.map((t) => ({ id: t.id, label: smartQuotes(t.title) }))} value={tree.id} onChange={(id) => url.set({ tree: id === familyTrees[0]?.id ? null : id, tie: null })} />
          <TreeView key={tree.id} tree={tree} />
        </>
      ) : <Empty title="No family trees yet">The data holds no family tree.</Empty>}
    </Page>
  );
}
