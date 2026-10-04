import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import type { Status } from "../../data/schema";
import { personById } from "../../data/store";
import { canonicalId } from "../../data/model";
import {
  Button, Collapsible, Empty, FilterChip, GROUP_HUE, GROUP_LABEL, Icon, IconButton, Page, PageHeader, Section, Toggle, byEntityName, count, entityName,
  firmness, hueOf, isDescriptor, levelOf, personPath, smartQuotes, useMediaQuery, listParam, useAddress, type Address,
} from "../../components/ui";
import { forgetTextWidths, textWidth, useContentWidth, useTypeScale } from "./measure";
import { Name } from "./Names";
import { TieBar, TieLegend } from "./RelParts";
import { OwnTies } from "./Ties";
import { STATUSES, TIE_FAMILIES, byFamily, plural, tieTitle, tieWords } from "./ties";
import { arrowHead } from "./treeLayout";
import { arrowMoves, layoutWeb, nameLines, placeLabels, tiePath, type Chord, type LabelSpec, type Placed, type PlacedLabel } from "./webLayout";
import { buildWeb, neighbourhood, type Web, type WebNode, type WebTie } from "./webModel";
import "./common.css";
import "./relgraph.css";
import "./graph.css";

const FAMILY_SHORT = { family: "family or work", identity: "identity", harm: "killed or hunted", made: "made or controlled" } as const;
const byName = (a: WebNode, b: WebNode) => byEntityName(a.id, b.id);
const NO_MOVES = new Map<string, Placed>();
/** The type tokens .graph-label is set in (see graph.css). */
const LABEL_TOKENS = ["--fs-2xs", "--fs-xs", "--fs-sm"] as const;
/** ?support= lists the firmness levels shown; absent means all of them, "none" none. */
const supportOf = (param: string): Status[] => (param === "none" ? [] : param ? listParam(param, STATUSES) : STATUSES);

interface CanvasProps {
  web: Web;
  focus: string;
  near: ReadonlySet<string> | null;
  selected: WebTie | undefined;
  onFocus: (id: string) => void;
  /** Picks the tie, or lets go of it when it is the one already picked. */
  onSelect: (tie: WebTie) => void;
}

/** The frame of the picture. It measures the room there is, then draws the picture for exactly that room. */
function WebCanvas(props: CanvasProps) {
  const [frameRef, avail] = useContentWidth<HTMLDivElement>();
  // The room below the picture's top edge on the first screen, read once: the picture is sized to fit it.
  const [room, setRoom] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const el = topRef.current;
    if (el) setRoom(window.innerHeight - (el.getBoundingClientRect().top + window.scrollY));
  }, []);
  return (
    <div className="graph-canvas" ref={(el) => { frameRef(el); topRef.current = el; }}>
      {avail > 0 && room != null && <WebPicture {...props} avail={avail} room={room} />}
    </div>
  );
}

/** The picture: people as discs, ties as lines. Laid out for the width it is given. */
function WebPicture({ web, focus, near, selected, onFocus, onSelect, avail, room }: CanvasProps & { avail: number; room: number }) {
  const nav = useNavigate();
  // Under a finger a disc answers over at least 44px, whatever its size; under a mouse 32px is enough and leaves the lines nearby free.
  const reach = useMediaQuery("(pointer: coarse)") ? 22 : 16;
  // Sizes move in steps, so dragging the window edge does not lay the web out again at every pixel.
  const width = Math.max(280, Math.floor(avail / 20) * 20);
  const compact = width < 520;
  // Names are set in rem like all interface text, so they grow with the reader's base font size and
  // text-size setting, and the small sizes step up on a phone; the layout reads the sizes it is given.
  const { rem, px: [fs2xs, fsxs, fssm] } = useTypeScale(LABEL_TOKENS);
  // A wide screen gets a landscape picture that fits what is left of the first screen; a phone gets a
  // portrait one with room enough for every name. More people, or larger text, always get more room.
  const perPerson = (compact ? 9200 : 13500) * rem * rem;
  const need = (web.nodes.length * perPerson) / width;
  const shape = width >= 900 ? width * 0.5 : width * 0.72;
  const height = Math.round(compact ? Math.max(380, need) : Math.max(400, need, Math.min(shape, room > 0 ? room - 64 : shape)));

  const base = useMemo(() => layoutWeb(web.nodes, web.ties, width, height), [web, width, height]);
  // Discs the reader has dragged, for this layout only.
  const [moves, setMoves] = useState<{ base: Map<string, Placed>; at: Map<string, Placed> } | null>(null);
  const moved = moves?.base === base ? moves.at : NO_MOVES;
  const at = useMemo(() => (moved.size ? new Map([...base].map(([id, p]) => [id, moved.get(id) ?? p])) : base), [base, moved]);

  // Names are measured in the page's own faces. A face that arrives later (the italic loads on first use)
  // changes the widths, so measure again whenever fonts finish loading.
  const [fontsReady, setFontsReady] = useState(0);
  useEffect(() => {
    const fonts = document.fonts;
    if (!fonts) return;
    const again = () => { forgetTextWidths(); setFontsReady((n) => n + 1); };
    fonts.addEventListener("loadingdone", again);
    let alive = true;
    fonts.ready.then(() => { if (alive) again(); });
    return () => { alive = false; fonts.removeEventListener("loadingdone", again); };
  }, []);
  // The sizes of .graph-label in graph.css (--fs-xs, or --fs-2xs when compact; a descriptor is one step larger), in pixels.
  const size = compact ? fs2xs : fsxs, descSize = compact ? fsxs : fssm;
  const lineH = size + 2 * rem;
  const specs = useMemo(() => {
    void fontsReady;
    const spec = (n: WebNode): LabelSpec => {
      const descriptor = isDescriptor(n.id);
      const lines = nameLines(smartQuotes(entityName(n.id, true)), compact ? 14 : 17);
      return { id: n.id, lines, widths: lines.map((l) => (descriptor ? textWidth(l, descSize, "--font-text", "italic 400") : textWidth(l, size, "--font-ui"))) };
    };
    return new Map(web.nodes.map((n) => [n.id, spec(n)]));
  }, [web, compact, size, descSize, fontsReady]);

  const [hot, setHot] = useState<string | null>(null);
  // One straight line per tie, in the order of web.ties, for names to keep clear of.
  const chords = useMemo(() => web.ties.map((t): Chord => { const a = at.get(t.from), b = at.get(t.to); return a && b ? [a.x, a.y, b.x, b.y] : [0, 0, 0, 0]; }), [web, at]);
  // With a focus, only the person in focus and those tied to them are named; the faded rest keep out of the way.
  const labels = useMemo(() => {
    const named = near ? web.nodes.filter((n) => near.has(n.id)) : web.nodes;
    const order = [...named].sort((a, b) => Number(b.id === focus) - Number(a.id === focus) || b.degree - a.degree || b.weight - a.weight).map((n) => specs.get(n.id)!);
    return placeLabels(order, at, width, height, lineH, near ? chords.filter((_, i) => web.ties[i].from === focus || web.ties[i].to === focus) : chords, near ?? undefined, near ?? undefined);
  }, [web, specs, at, width, height, lineH, chords, focus, near]);
  // A person whose name found no room shows it while the pointer or the keyboard is on them.
  const hotLabel: PlacedLabel | undefined = useMemo(() => {
    if (!hot || labels.has(hot)) return undefined;
    const spec = specs.get(hot);
    if (!spec) return undefined;
    // Clear of every disc if it can be; otherwise clear of their own, over whatever else is there.
    const only = new Set([hot]);
    return placeLabels([spec], at, width, height, lineH, [], only).get(hot) ?? placeLabels([spec], at, width, height, lineH, [], only, only).get(hot);
  }, [hot, labels, specs, at, width, height, lineH]);

  // Ties between the same two people bow apart.
  const slots = useMemo(() => {
    const pairs = new Map<string, WebTie[]>();
    for (const t of web.ties) { const k = t.from < t.to ? `${t.from}|${t.to}` : `${t.to}|${t.from}`; pairs.set(k, [...(pairs.get(k) ?? []), t]); }
    const out = new Map<string, { slot: number; of: number }>();
    for (const list of pairs.values()) list.forEach((t, i) => out.set(t.key, { slot: i, of: list.length }));
    return out;
  }, [web]);

  /* ── Pressing and dragging a disc ──
   * A mouse or a pen drags a disc. A finger only taps: a swipe that starts on a disc belongs to the page, which
   * scrolls (the browser then cancels the press, so it is not taken for a tap either). */
  const svgRef = useRef<SVGSVGElement | null>(null);
  const drag = useRef<{ id: string; pointer: number; x0: number; y0: number; moved: boolean; finger: boolean } | null>(null);
  const toSvg = (e: ReactPointerEvent) => {
    const svg = svgRef.current!;
    const m = svg.getScreenCTM();
    if (!m) return { x: 0, y: 0 };
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
    return { x: p.x, y: p.y };
  };
  const onDown = (e: ReactPointerEvent<SVGGElement>, id: string) => {
    if (e.button !== 0) return;
    const finger = e.pointerType === "touch";
    drag.current = { id, pointer: e.pointerId, x0: e.clientX, y0: e.clientY, moved: false, finger };
    if (!finger) e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: ReactPointerEvent<SVGGElement>) => {
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId) return;
    if (!d.moved && Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < (d.finger ? 10 : 5)) return;
    d.moved = true;
    if (d.finger) return;
    const p = toSvg(e), was = at.get(d.id);
    if (!was) return;
    const next = { ...was, x: Math.max(was.r + 4, Math.min(width - was.r - 4, p.x)), y: Math.max(was.r + 4, Math.min(height - was.r - 4, p.y)) };
    setMoves({ base, at: new Map(moved).set(d.id, next) });
  };
  const onUp = (e: ReactPointerEvent<SVGGElement>, id: string) => {
    const d = drag.current;
    drag.current = null;
    if (!d || d.pointer !== e.pointerId) return;
    if (!d.moved) onFocus(focus === id ? "" : id);
  };

  /* ── Keyboard: one tab stop; the arrow keys go to the nearest person that way, and between them reach everyone
   * (see arrowMoves); Page Up and Page Down step through everyone in reading order. ── */
  const order = useMemo(() => [...web.nodes].sort((a, b) => { const p = at.get(a.id)!, q = at.get(b.id)!; return p.y - q.y || p.x - q.x; }), [web, at]);
  const arrows = useMemo(() => arrowMoves(at), [at]);
  const [active, setActive] = useState("");
  const tabStop = web.byId.has(active) ? active : focus || order[0]?.id || "";
  const nodeRefs = useRef(new Map<string, SVGGElement>());
  const onKey = (e: KeyboardEvent<SVGGElement>, id: string) => {
    const go = (to: string | undefined) => { if (to) { e.preventDefault(); nodeRefs.current.get(to)?.focus(); } };
    const arrow = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].indexOf(e.key);
    if (arrow >= 0) go(arrows.get(id)?.[arrow]);
    else if (e.key === "Home") go(order[0]?.id);
    else if (e.key === "End") go(order[order.length - 1]?.id);
    else if (e.key === "PageDown" || e.key === "PageUp") {
      const i = order.findIndex((n) => n.id === id) + (e.key === "PageDown" ? 1 : -1);
      go(order[(i + order.length) % order.length]?.id);
    }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onFocus(focus === id ? "" : id); }
  };

  const label = (id: string, l: PlacedLabel, extra = "") => (
    <text className={`graph-label${personById.get(id)?.nameStatus === "descriptor" ? " is-desc" : ""}${extra}`} x={l.x} y={l.y} textAnchor={l.anchor}>
      {l.lines.map((line, i) => <tspan key={i} x={l.x} dy={i === 0 ? 0 : lineH}>{line}</tspan>)}
    </text>
  );

  return (
    <svg
      ref={svgRef}
      className={`graph-svg${compact ? " is-compact" : ""}`}
      viewBox={`0 0 ${width} ${height}`}
      role="group"
      aria-label={`A picture of ${plural(web.nodes.length, "person", "people")} and the ${plural(web.relCount, "tie")} between them. Tab reaches the people; the arrow keys move between them, Page Up and Page Down step through them all, and Enter picks one. Everything in it is also in the list below.`}
    >
      <g aria-hidden="true">
        {web.ties.map((t) => {
          const a = at.get(t.from), b = at.get(t.to);
          if (!a || !b) return null;
          const s = slots.get(t.key) ?? { slot: 0, of: 1 };
          const path = tiePath(a, b, s.slot, s.of, t.from > t.to);
          const w = tieWords(t.kind);
          const off = !!focus && t.from !== focus && t.to !== focus;
          const dim = !off && (hot ? t.from !== hot && t.to !== hot && selected !== t : !!selected && selected !== t);
          return (
            <g key={t.key} className={`rel-edge${selected === t ? " is-sel" : ""}${off ? " is-off" : dim ? " is-dim" : ""}`} data-level={levelOf(t.status)} data-tie={w.family} onClick={() => onSelect(t)}>
              <title>{tieTitle(t)}</title>
              <path d={path.d} className="rel-edge__hit" />
              <path d={path.d} className="rel-edge__line" />
              {w.directed && w.family !== "family" && <path d={arrowHead([path.from, path.tip], false, compact ? 6 : 7)} className="rel-edge__arrow" />}
            </g>
          );
        })}
      </g>
      {web.nodes.map((n) => {
        const p = at.get(n.id);
        if (!p) return null;
        const l = labels.get(n.id);
        const ties = web.relsOf.get(n.id)?.length ?? 0;
        const dim = near ? !near.has(n.id) : false;
        return (
          <g
            key={n.id}
            ref={(el) => { if (el) nodeRefs.current.set(n.id, el); else nodeRefs.current.delete(n.id); }}
            className={`graph-node${focus === n.id ? " is-focus" : ""}${dim ? " is-dim" : ""}`}
            style={{ "--hue": hueOf(GROUP_HUE, n.group) } as CSSProperties}
            role="button"
            tabIndex={n.id === tabStop ? 0 : -1}
            aria-pressed={focus === n.id}
            aria-label={`${entityName(n.id, true)}: ${plural(ties, "tie")}. ${GROUP_LABEL[n.group] ?? ""}`}
            onPointerDown={(e) => onDown(e, n.id)}
            onPointerMove={onMove}
            onPointerUp={(e) => onUp(e, n.id)}
            onPointerCancel={() => { drag.current = null; }}
            onPointerEnter={(e) => { if (e.pointerType === "mouse") setHot(n.id); }}
            onPointerLeave={() => setHot((h) => (h === n.id ? null : h))}
            onClick={(e) => { if (e.detail === 0) onFocus(focus === n.id ? "" : n.id); }}
            onDoubleClick={() => nav(personPath(n.id))}
            onFocus={() => { setActive(n.id); setHot(n.id); }}
            onBlur={() => setHot((h) => (h === n.id ? null : h))}
            onKeyDown={(e) => onKey(e, n.id)}
          >
            <title>{`${entityName(n.id, true)}: ${plural(ties, "tie")}${n.folded.length ? `. With ${n.folded.map((id) => entityName(id)).join(", ")}` : ""}`}</title>
            <circle className="graph-node__hit" cx={p.x} cy={p.y} r={Math.max(p.r + 6, reach)} />
            <circle className="graph-node__disc" cx={p.x} cy={p.y} r={p.r} />
            {l && label(n.id, l)}
          </g>
        );
      })}
      {hot && hotLabel && <g aria-hidden="true" className="graph-hot">{label(hot, hotLabel, " is-hot")}</g>}
    </svg>
  );
}

/** The bar for the person in focus: who they are, what is folded into them, and where to read their ties. */
function PersonBar({ node, web, onClose }: { node: WebNode; web: Web; onClose: () => void }) {
  const { link: anchor } = useAddress();
  // Counted as recorded, like the list below (two records of one tie can share a line in the picture).
  const ties = web.relsOf.get(node.id) ?? [];
  const counts = byFamily(ties, (t) => t.kind).map((g) => `${count(g.items.length)} ${FAMILY_SHORT[g.family]}`);
  return (
    <div className="rel-bar graph-who">
      <div className="rel-bar__head">
        <p className="rel-bar__line" role="status">
          <Name id={node.id} as="title" alone /> <span className="graph-who__n">{plural(ties.length, "tie")} in view{counts.length > 0 && `: ${counts.join(", ")}`}</span>
        </p>
        <IconButton icon={X} label="Clear the focus" onClick={onClose} />
      </div>
      {node.folded.length > 0 && <p className="rel-bar__note">Shown as one with {node.folded.map((id, i) => <span key={id}>{i > 0 && ", "}<Name id={id} /></span>)}.</p>}
      <p className="graph-who__links">
        <Link to={personPath(node.id)}>Open their page <Icon icon={ArrowRight} /></Link>
        <Link to={anchor("list")}>Read these ties in the list <Icon icon={ArrowDown} /></Link>
      </p>
    </div>
  );
}

/**
 * The same web in words: each person with their ties as recorded, following the filters above.
 * Memoised, because it is long and picking a line in the picture changes nothing in it.
 */
const WebList = memo(function WebList({ web, focus, near, applied, unified, set }: { web: Web; focus: string; near: ReadonlySet<string> | null; applied: string; unified: boolean; set: Address["write"] }) {
  const sorted = useMemo(() => [...web.nodes].sort(byName), [web]);
  const listed = focus ? [web.byId.get(focus)!, ...sorted.filter((n) => n.id !== focus && near?.has(n.id))] : sorted;
  // On a phone a name and its group do not fit side by side; the swatch still gives the group.
  const phone = useMediaQuery("(max-width: 640px)");
  return (
    <Section
      id="list"
      title="The same web, as a list"
      aside={`${plural(listed.length, "person", "people")}${focus ? "" : `, ${plural(web.relCount, "tie")}`}`}
      lead={<>
        Showing {applied}.
        {unified && <> A tie that reaches a person through a folded record counts as no firmer than the fold.</>}
        {focus && <> The focus is on {entityName(focus)}, so the list holds them and everyone they are tied to.</>}
        {web.untied > 0 && <> {plural(web.untied, "person", "people")} with a profile {web.untied === 1 ? "has" : "have"} no tie under these settings and {web.untied === 1 ? "is" : "are"} left out; the <Link to="/people">people index</Link> lists everyone.</>}
      </>}
    >
      {listed.length > 0 ? (
        <div className="graph-list">
          {listed.map((n) => {
            const ties = web.relsOf.get(n.id) ?? [];
            return (
              <Collapsible
                key={`${n.id}:${n.id === focus ? "open" : ""}`}
                defaultOpen={n.id === focus}
                summary={<><span className="graph-swatch" style={{ "--hue": hueOf(GROUP_HUE, n.group) } as CSSProperties} title={GROUP_LABEL[n.group] ?? n.group} /> <Name id={n.id} as="plain" alone /></>}
                meta={phone ? plural(ties.length, "tie") : `${GROUP_LABEL[n.group] ?? n.group} · ${plural(ties.length, "tie")}`}
              >
                {() => (
                  <>
                    {n.folded.length > 0 && <p className="graph-list__with">Shown as one with {n.folded.map((id, i) => <span key={id}>{i > 0 && ", "}<Name id={id} /></span>)}.</p>}
                    <OwnTies rels={ties} pageId={n.id} scope={new Set([n.id, ...n.folded])} />
                    <p className="graph-list__links">
                      <Link to={personPath(n.id)}>Open their page <Icon icon={ArrowRight} /></Link>
                      {n.id !== focus && <Button variant="quiet" size="sm" onClick={() => set({ focus: n.id, tie: null })}>Focus the picture on them</Button>}
                    </p>
                  </>
                )}
              </Collapsible>
            );
          })}
        </div>
      ) : <p className="muted">Nobody to list.</p>}
    </Section>
  );
});

export default function Graph() {
  const url = useAddress();
  const supportParam = url.get("support");
  const support = useMemo(() => supportOf(supportParam), [supportParam]);
  const unified = url.get("unified") !== "0";
  const web = useMemo(() => buildWeb(new Set(support), unified), [support, unified]);
  const finger = useMediaQuery("(pointer: coarse)");

  // ?focus= takes any record: one that is folded into a person focuses that person.
  const asked = url.get("focus");
  const focus = web.byId.has(asked) ? asked : unified && web.byId.has(canonicalId(asked)) ? canonicalId(asked) : "";
  const near = useMemo(() => (focus ? neighbourhood(web, focus) : null), [web, focus]);
  const selected = web.ties.find((t) => t.key === url.get("tie"));
  // Handlers that flip something work from the address as it is when they run (see components/address.ts), so two quick clicks both count.
  const toggleSupport = (s: Status) => url.write((now) => {
    const on = supportOf(now.get("support") ?? "");
    const next = STATUSES.filter((x) => (x === s ? !on.includes(x) : on.includes(x)));
    return { support: next.length === STATUSES.length ? null : next.join(",") || "none", tie: null };
  });

  const families = TIE_FAMILIES.filter((f) => web.ties.some((t) => tieWords(t.kind).family === f));
  const groups = [...new Set(web.nodes.map((n) => n.group))];
  const sorted = useMemo(() => [...web.nodes].sort(byName), [web]);
  const applied = [
    support.length === STATUSES.length ? "ties of every firmness" : support.length ? `only ties rated ${support.map((s) => firmness("status", s).word.toLowerCase()).join(" or ")}` : "no ties",
    unified ? "records folded into the person the model reads them as" : "every record on its own",
  ].join(", ");

  return (
    <Page title="The web">
      <PageHeader
        kicker="People & places"
        title="The web"
        lede="Everyone with a recorded tie, in one picture. Pick a person to see their ties, or a line for its evidence. The list below says the same in words."
      />

      <div className="graph-bar">
        <label className="graph-bar__focus">
          <span className="label">Focus on</span>
          <select value={focus} onChange={(e) => url.write({ focus: e.target.value || null, tie: null })}>
            <option value="">Everyone</option>
            {sorted.map((n) => <option key={n.id} value={n.id}>{entityName(n.id, true)}</option>)}
          </select>
        </label>
        <Toggle on={unified} onChange={() => url.write((now) => ({ unified: now.get("unified") === "0" ? null : "0", tie: null }))}>Unified people</Toggle>
        <div className="graph-bar__support" role="group" aria-label="Show ties rated">
          <span className="label">Show ties rated</span>
          {STATUSES.map((s) => <FilterChip key={s} on={support.includes(s)} onClick={() => toggleSupport(s)}>{firmness("status", s).word}</FilterChip>)}
        </div>
      </div>

      {web.nodes.length > 0 ? (
        // Escape lets go of what is chosen: first the line, then the person.
        <div className="graph-frame" onKeyDown={(e) => { if (e.key === "Escape" && (selected || focus)) { e.preventDefault(); url.write(selected ? { tie: null } : { focus: null }); } }}>
          <WebCanvas web={web} focus={focus} near={near} selected={selected} onFocus={(id) => url.write({ focus: id || null, tie: null })} onSelect={(t) => url.write((now) => ({ tie: t && now.get("tie") !== t.key ? t.key : null }))} />
          {selected ? <TieBar tie={selected} onClose={() => url.write({ tie: null })} />
            : focus ? <PersonBar node={web.byId.get(focus)!} web={web} onClose={() => url.write({ focus: null })} />
            : (
              <div className="graph-foot">
                <p className="graph-foot__hint">
                  {finger
                    ? "Tap a person to focus on their ties, a line for its evidence. A larger disc has more evidence. Every tie is also listed below, with its records."
                    : "Select a person to focus on their ties, or click a line for its evidence. Drag a disc to move it; double-click opens the person. A larger disc has more evidence. Every tie is also listed below, with its records."}
                </p>
              </div>
            )}
        </div>
      ) : (
        <Empty title="No ties to draw" action={<Button onClick={() => url.write({ support: null })}>Show every tie</Button>}>No tie has the firmness picked above.</Empty>
      )}

      {web.nodes.length > 0 && (
        <>
          <TieLegend families={families} />
          <p className="rel-key__row graph-groups">
            <span className="label">Disc colour</span>
            {groups.map((g) => <span key={g} className="rel-key__item"><span className="graph-swatch" style={{ "--hue": hueOf(GROUP_HUE, g) } as CSSProperties} />{GROUP_LABEL[g] ?? g}</span>)}
          </p>
        </>
      )}

      <WebList web={web} focus={focus} near={near} applied={applied} unified={unified} set={url.write} />
    </Page>
  );
}
