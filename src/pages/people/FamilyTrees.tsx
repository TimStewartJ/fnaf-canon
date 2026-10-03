import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import type { Relation } from "../../data/schema";
import { labelForEntity, personById } from "../../data/store";
import { familyTrees, type FamilyTree } from "../../data/familyTrees";
import {
  Callout, Collapsible, Empty, FilterChip, Icon, Page, PageHeader, TabPanel, Tabs, Toggle, levelOf, personPath, smartQuotes, useMediaQuery, listParam, useAddress,
} from "../../components/ui";
import { GroupLabel } from "./Dossier";
import { useContentWidth } from "./measure";
import { buildTree, defaultKinds, describeTree, routingOf, tiesWithin, type TreeEdge } from "./familyModel";
import { TieBar, TieLegend } from "./RelParts";
import { TieRow, TieSentence } from "./Ties";
import { TIE_FAMILIES, TIE_FAMILY_LABEL, byFamily, plural, tieTitle, tieWords } from "./ties";
import { LANE_GAP, arrowHead, roundedPath, routePoints, type Geometry } from "./treeLayout";
import "./common.css";
import "./relgraph.css";
import "./family.css";

const FOLDS = ["ids", "vessels"] as const;

const sum = (list: readonly number[]) => list.reduce((a, b) => a + b, 0);
const sameNumbers = (a: readonly number[], b: readonly number[]) => a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < 0.5);

/**
 * The ties of a tree in words: the relations behind its lines, as recorded. Memoised, because
 * pointing at a box or picking a line changes nothing in it.
 */
const TieList = memo(function TieList({ drawn }: { drawn: readonly Relation[] }) {
  return (
    <Collapsible className="fam-list" summary="The ties drawn, as a list" meta={plural(drawn.length, "tie")}>
      {() => byFamily(drawn, (r) => r.kind).map((g) => (
        <div key={g.family} className="ppl-tie-group">
          <GroupLabel as="h2" count={g.items.length}>{TIE_FAMILY_LABEL[g.family]}</GroupLabel>
          <ul className="ppl-ties">
            {g.items.map((r) => <TieRow key={`${r.from}|${r.kind}|${r.to}`} status={r.status} note={r.note} evidence={r.evidence}><TieSentence r={r} /></TieRow>)}
          </ul>
        </div>
      ))}
    </Collapsible>
  );
});

function TreeView({ tree }: { tree: FamilyTree }) {
  const url = useAddress();
  const phone = useMediaQuery("(max-width: 640px)");
  const folds = listParam(url.get("fold"), FOLDS);
  const foldIds = folds.includes("ids"), foldVessels = folds.includes("vessels");
  // Handlers work from the address as it is when they run (see components/address.ts), so two quick clicks both count.
  const flipFold = (which: (typeof FOLDS)[number]) => url.write((now) => {
    const on = listParam(now.get("fold"), FOLDS);
    return { fold: FOLDS.filter((f) => (f === which ? !on.includes(f) : on.includes(f))).join(",") || null, tie: null };
  });

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
  const toggleKind = (kind: string) => url.write((now) => {
    const tokens = new Set((now.get("lines") ?? "").split(",").filter(Boolean));
    const token = defaultKinds([kind]).length ? `-${kind}` : kind;
    if (tokens.has(token)) tokens.delete(token); else tokens.add(token);
    return { lines: [...tokens].join(",") || null, tie: null };
  });

  const model = useMemo(() => buildTree(tree, { ids: foldIds, vessels: foldVessels }, new Set(shownKinds)), [tree, foldIds, foldVessels, shownKinds]);
  const at = useMemo(() => new Map(model.nodes.map((n) => [n.id, n])), [model]);
  const edgeByKey = useMemo(() => new Map(model.edges.map((e) => [e.key, e])), [model]);
  const selected = edgeByKey.get(url.get("tie"));
  const select = (e: TreeEdge | null) => url.write((now) => ({ tie: e && now.get("tie") !== e.key ? e.key : null }));

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
  // Nothing is laid out, measured or decided (does it overflow?) until the frame's own width is known.
  const ready = avail > 0;
  useLayoutEffect(() => { measure(); }, [measure, colW, width, ready]);
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
  // The relations behind the lines, as recorded: a line that folding merged from several is listed as each of them.
  const drawn = useMemo(() => [...new Set(model.edges.flatMap((e) => e.rels))], [model]);
  const hasMachine = model.nodes.some((n) => personById.get(n.id)?.group === "entity");
  const hasDescriptor = model.nodes.some((n) => personById.get(n.id)?.nameStatus === "descriptor");
  const description = describeTree(tree.description);

  const linesOn = kinds.filter((k) => shownKinds.includes(k.kind)).map((k) => tieWords(k.kind).label);

  return (
    <>
      {description && <p className="fam-desc">{smartQuotes(description)}</p>}
      <div className="fam-bar" role="group" aria-label="Fold records">
        <span className="label">Fold</span>
        <Toggle on={foldIds} onChange={() => flipFold("ids")}>Identities <span className="faint">(same being)</span></Toggle>
        <Toggle on={foldVessels} onChange={() => flipFold("vessels")}>Vessels <span className="faint">(haunts, wore)</span></Toggle>
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

      {/* Escape lets go of a chosen line, from anywhere in the picture or its bar. */}
      <div className="fam-frame" onKeyDown={(ev) => { if (ev.key === "Escape" && selected) { ev.preventDefault(); select(null); } }}>
        {/* A tree wider than its frame scrolls sideways; only then is the frame a stop for the keyboard. */}
        <div className="fam-scroll scroll-x" ref={scrollRef} {...(rows?.overflow ? { role: "region", "aria-label": `${tree.title}: family tree, scrolls sideways`, tabIndex: 0 } : {})}>
          {ready && (
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
                        aria-label={`${tieTitle(e)}. ${plural(new Set(e.rels.flatMap((r) => r.evidence)).size, "record")}.`}
                        onClick={() => select(e)}
                        onFocus={() => setActive(i)}
                        onKeyDown={(ev) => onEdgeKey(ev, i)}
                      >
                        <title>{tieTitle(e)}</title>
                        <path d={d} className="rel-edge__hit" />
                        <path d={d} className="rel-edge__line" />
                        {w.directed && w.family !== "family" && <path d={arrowHead(points, route.toIsA)} className="rel-edge__arrow" />}
                      </g>
                    );
                  })}
                </svg>
              )}
            </div>
          )}
        </div>
        {selected ? <TieBar tie={selected} onClose={() => select(null)} /> : (
          <div className="fam-foot">
            {rows?.overflow && <p className="fam-foot__wide">Wider than the screen: scroll it sideways, fold records to narrow it, or read the same ties in the list below.</p>}
            <p className="fam-foot__key">
              <span>{model.edges.length > 0 ? "Select a line for its evidence, a person for their page." : "Select a person to open their page."}</span>
              {hasDescriptor && <span><em className="name-desc">Italic</em> a descriptor, not a name the games print</span>}
              {hasMachine && <span><Icon icon={Bot} /> a machine or a suit</span>}
              {model.folded > 0 && <span><span className="fam-node__badge fam-node__badge--inline">+2</span> records folded into the box; a line that reaches one is no firmer than the fold</span>}
            </p>
          </div>
        )}
      </div>

      {drawn.length > 0 && <TieList drawn={drawn} />}
      {model.edges.length === 0 && <Empty title="No lines to draw">Every kind of line is switched off. Turn one on above to see how these people are tied.</Empty>}
      {tree.notes && <Callout tone="note" title="About this tree" className="fam-notes"><p>{smartQuotes(tree.notes)}</p></Callout>}
    </>
  );
}

export default function FamilyTrees() {
  const url = useAddress();
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
          <Tabs label="Family" tabs={familyTrees.map((t) => ({ id: t.id, label: smartQuotes(t.title) }))} value={tree.id} onChange={(id) => url.write({ tree: id === familyTrees[0]?.id ? null : id, tie: null })} panel="fam-tree" />
          <TabPanel id="fam-tree" tab={tree.id}><TreeView key={tree.id} tree={tree} /></TabPanel>
        </>
      ) : <Empty title="No family trees yet">The data holds no family tree.</Empty>}
    </Page>
  );
}
