import { Fragment, useCallback, useId, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { CornerDownRight, MapPin, User } from "lucide-react";
import type { DateKind, Evidence } from "../data/schema";
import { evidenceById, personById, placeById } from "../data/store";
import { gameById } from "../data/store";
import { type CiteNumbering, useCiteNumbering } from "./citeScope";
import { isPlainClick, useEvidenceDrawer } from "./evidenceDrawer";
import { DATE_KIND, RECORD_TAG_KIND, type RecordTag, firmness, kindLabel } from "./labels";
import { evidencePath, personPath, placePath } from "./links";
import { entityName, isDescriptor, opensSentence } from "./names";
import { useChapterResolver } from "./chapterResolver";
import { usePopover } from "./popover";
import { recordTagPieces } from "./textMarks";
import { longDate, smartQuotes, sourceWords } from "./typography";
import { Pop } from "./Popover";
import { FirmGlyph, Firmness } from "./Firmness";
import { GameMark } from "./GameMark";
import { Icon } from "./Icon";
import { sourceKindIcon } from "./icons";
import { gameMeta } from "../data/gameMeta";

/* ── Evidence preview (the hover card behind citation markers) ─────────────────── */

/** One line saying where a record comes from: source, kind of source, exact spot. `full` names the source in full, not by its code. */
export function SourceLine({ e, location = true, full = false }: { e: Evidence; location?: boolean; full?: boolean }) {
  return (
    <span className="source-line">
      <GameMark id={e.game} variant={full ? "full" : "code"} />
      <span className="source-line__kind"><Icon icon={sourceKindIcon(e.kind)} /> {kindLabel(e.kind)}</span>
      {location && <span className="source-line__loc">{smartQuotes(e.location)}</span>}
    </span>
  );
}

export function EvidencePreview({ e }: { e: Evidence }) {
  return (
    <>
      <span className="pop__head">
        <SourceLine e={e} location={false} />
        <Firmness scale="certainty" value={e.certainty} variant="inline" />
      </span>
      <strong className="pop__title">{smartQuotes(e.title)}</strong>
      <span className="pop__text">{smartQuotes(e.claim)}</span>
      {e.quote && <q className="pop__quote">{sourceWords(e.quote)}</q>}
      <span className="pop__meta"><Icon icon={CornerDownRight} /> {smartQuotes(e.location)}</span>
      <span className="pop__hint">Click to open the record</span>
    </>
  );
}

/* ── Citations ─────────────────────────────────────────────────────────────────── */

/**
 * Opens a record from a citation. A numbered marker opens it among everything numbered on the
 * page, in order: the drawer then reads "Source 18 of 35", which confirms which marker was hit
 * (on a phone two of them can sit under one finger) and its arrows walk the page's sources.
 */
function useOpenEvidence(id: string, group: string[] | undefined, after?: () => void, numbered?: CiteNumbering | null) {
  const drawer = useEvidenceDrawer();
  return (ev: MouseEvent) => {
    if (!isPlainClick(ev)) return; // let Ctrl/Cmd/middle click open the full record in a new tab
    ev.preventDefault();
    after?.();
    const all = numbered?.ids();
    if (all && all.length > 1 && all.includes(id)) drawer.open(id, all, "", "Source");
    else drawer.open(id, group, "cited here");
  };
}

/**
 * An inline citation marker: a small superscript number. Hover or focus previews the record;
 * click or tap opens it in the evidence drawer over the page. Usually produced by <RichText>.
 */
export function Cite({ id, group }: { id: string; group?: string[] }) {
  const e = evidenceById.get(id);
  const numbering = useCiteNumbering();
  const [pop, anchorRef] = usePopover();
  const open = useOpenEvidence(id, group, pop.hide, numbering);
  if (!e) return <span className="cite cite--missing" title="Missing evidence record">?{id}</span>;
  const n = numbering ? numbering.number(id) : null;
  return (
    <span className="cite-wrap" {...pop.wrapProps}>
      <Link
        ref={anchorRef}
        to={evidencePath(id)}
        className="cite"
        aria-label={`Source${n ? ` ${n}` : ""}: ${e.title} (${gameMeta(e.game).short}, ${firmness("certainty", e.certainty).word.toLowerCase()})`}
        aria-haspopup="dialog"
        onClick={open}
      >
        {n ?? "•"}
      </Link>
      {pop.open && <Pop control={pop} className="pop--cite"><EvidencePreview e={e} /></Pop>}
    </span>
  );
}

/** Citations that sit next to each other, drawn as one cluster: ¹,²,³ */
export function CiteGroup({ ids }: { ids: string[] }) {
  const unique = [...new Set(ids)];
  const group = unique.length > 1 ? unique : undefined;
  return (
    <span className="cites">
      {unique.map((id, i) => (
        <Fragment key={id}>
          {i > 0 && <span className="cites__sep" aria-hidden>,</span>}
          <Cite id={id} group={group} />
        </Fragment>
      ))}
    </span>
  );
}

/**
 * A source chip for explicit lists of records ("Evidence: …"): certainty glyph, the source's short
 * code and the record's title. Same behaviour as a citation marker. `variant="code"` drops the title
 * for very tight spots. The glyph on a chip is drawn quietly (no accent colour): it grades the
 * record, and must not be taken for the grade of the claim the chip stands beside.
 */
export function SourceChip({ id, group, variant = "full" }: { id: string; group?: string[]; variant?: "full" | "code" }) {
  const e = evidenceById.get(id);
  const [pop, anchorRef] = usePopover();
  const open = useOpenEvidence(id, group, pop.hide);
  if (!e) return <span className="cite cite--missing" title="Missing evidence record">?{id}</span>;
  const c = firmness("certainty", e.certainty);
  return (
    <span className="cite-wrap" {...pop.wrapProps}>
      <Link
        ref={anchorRef}
        to={evidencePath(id)}
        className="src-chip"
        data-level={c.level}
        // The name starts with what is on the chip (its code), so "click FFPS" finds it by voice.
        aria-label={variant === "code" ? `${gameMeta(e.game).short}: ${e.title} (${gameById.get(e.game)?.title ?? e.game}, ${c.word.toLowerCase()})` : undefined}
        aria-haspopup="dialog"
        onClick={open}
      >
        <FirmGlyph level={c.level} />
        <span className="src-chip__code">{gameMeta(e.game).short}</span>
        {variant === "full" && <span className="src-chip__title">{smartQuotes(e.title)}</span>}
        {variant === "full" && <span className="sr-only">({c.word.toLowerCase()})</span>}
      </Link>
      {pop.open && <Pop control={pop} className="pop--cite"><EvidencePreview e={e} /></Pop>}
    </span>
  );
}

/**
 * A list of source chips, for "Evidence:" and "Rests on:" lines outside running prose.
 * `variant="code"` shows short codes only.
 */
export function CiteList({ ids, variant = "full" }: { ids: string[]; variant?: "full" | "code" }) {
  const unique = [...new Set(ids)];
  if (!unique.length) return null;
  return <span className="src-list">{unique.map((id) => <SourceChip key={id} id={id} variant={variant} group={unique.length > 1 ? unique : undefined} />)}</span>;
}

/* ── Entity and chapter links ──────────────────────────────────────────────────── */

/**
 * Link to a person or place page (or to the evidence filed under an entity with no page).
 *  - variant "inline" (default): a text link for running prose. The name is printed as it runs in
 *    a sentence ("the rabbit in the code"); pass `alone` where it stands on its own or opens a
 *    sentence, and it starts with a capital.
 *  - variant "chip": a small labelled chip with a person or place icon, for lists of entities. A
 *    chip always stands alone; a name the games never print (a descriptor) is set in italic.
 */
export function EntityLink({ id, variant = "inline", alone = variant === "chip", children }: { id: string; variant?: "inline" | "chip"; alone?: boolean; children?: ReactNode }) {
  const isPerson = personById.has(id), isPlace = placeById.has(id);
  const to = isPerson ? personPath(id) : isPlace ? placePath(id) : `/evidence?entity=${id}`;
  const kind = isPerson ? "person" : isPlace ? "place" : "unknown";
  const name = smartQuotes(entityName(id, alone));
  return (
    <Link className={`entity entity--${variant} entity--${kind}`} to={to}>
      {variant === "chip" && <Icon icon={isPlace ? MapPin : User} />}
      {variant === "chip" && !children && isDescriptor(id) ? <span className="name-desc">{name}</span> : children ?? name}
    </Link>
  );
}

/** Link to a theory chapter, labelled with its title unless a label is given. */
export function ChapterLink({ id, label }: { id: string; label?: ReactNode }) {
  const chapters = useChapterResolver();
  const s = chapters.find(id);
  if (!s) return <span className="cite cite--missing" title="Missing theory chapter">?{id}</span>;
  return <Link className="chapter-link" to={chapters.pathOf(id)}>{label ?? smartQuotes(s.title)}</Link>;
}

/* ── Dates ─────────────────────────────────────────────────────────────────────── */

/**
 * Glyph for how a date is known. Dates have marks of their own, square and uncoloured, so a date
 * is never read as a grade of the claim beside it: the round amber marks belong to firmness alone.
 * Printed, derived and estimated are a full, half and empty square; the other three are drawn.
 */
export function DateGlyph({ kind }: { kind: DateKind }) {
  const box = { x: 1.9, y: 1.9, width: 8.2, height: 8.2, rx: 1.1 };
  return (
    <svg className="firm-glyph date-glyph" viewBox="0 0 12 12" width="0.72em" height="0.72em" aria-hidden focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {kind === "printed" && <rect {...box} fill="currentColor" />}
      {kind === "derived" && <><rect {...box} /><path d="M6 1.9H3A1.1 1.1 0 0 0 1.9 3v6A1.1 1.1 0 0 0 3 10.1h3z" fill="currentColor" /></>}
      {kind === "estimated" && <rect {...box} />}
      {kind === "relative" && <path d="M1.5 6h9M3.8 3.6 1.4 6l2.4 2.4M8.2 3.6 10.6 6 8.2 8.4" />}
      {kind === "teaser" && <path d="M6 1.3 10.7 6 6 10.7 1.3 6z" />}
      {kind === "unknown" && <rect {...box} strokeDasharray="1.7 2.4" />}
    </svg>
  );
}

const PRECISION_KIND: Record<string, DateKind> = { exact: "printed", approx: "estimated", relative: "relative", unknown: "unknown" };

/**
 * A date with its justification. Hover, tap, or Enter on it shows why the date is what it is and
 * which records support it. The reason is given in full, however long.
 *  - variant "tag" (default): a compact mono label, for cards, tables and headers
 *  - variant "inline": sits in a sentence without changing its rhythm (what <RichText> uses)
 */
export function DatePill({ label, kind, basis, evidence = [], compact, variant = "tag" }: { label: string; kind: DateKind; basis?: string; evidence?: string[]; compact?: boolean; variant?: "tag" | "inline" }) {
  // Opened by a press, not by focus alone: it holds links, and a reader tabbing down a page of
  // dates should not have to pass through each one's sources.
  const [pop, anchorRef] = usePopover({ focus: false });
  const drawer = useEvidenceDrawer();
  const k = DATE_KIND[kind] ?? DATE_KIND.unknown;
  const evs = evidence.map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
  const ids = evs.map((e) => e.id);
  return (
    <span className="date-wrap" {...pop.wrapProps}>
      <button
        type="button"
        ref={anchorRef}
        className={`date date--${variant}${compact ? " date--compact" : ""}`}
        data-kind={kind}
        aria-expanded={pop.open}
        aria-label={kind in DATE_KIND && kind !== "unknown" ? `${label}: ${k.label.toLowerCase()} date. Why this date?` : `${label}: no date is given. Why?`}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); pop.toggle(); }}
      >
        <DateGlyph kind={kind} />
        <span className="date__label">{smartQuotes(label)}</span>
      </button>
      {pop.open && (
        <Pop control={pop} className="pop--date" role="group" label={`About the date ${label}`}>
          <span className="pop__head"><span className="pop__kind"><DateGlyph kind={kind} /> {k.label} date</span></span>
          <strong className="pop__title">{smartQuotes(label)}</strong>
          <span className="pop__text">{basis ? smartQuotes(basis) : `${k.help}.`}</span>
          {basis && <span className="pop__meta">{k.help}.</span>}
          {evs.length > 0 && (
            <span className="pop__records">
              <span className="label">Rests on</span>
              {evs.map((e) => (
                <Link
                  key={e.id}
                  to={evidencePath(e.id)}
                  className="pop__record"
                  onClick={(ev) => { if (!isPlainClick(ev)) return; ev.preventDefault(); pop.hide(); drawer.open(e.id, ids.length > 1 ? ids : undefined, "behind this date"); }}
                >
                  <GameMark id={e.game} />
                  <span>{smartQuotes(e.title)}</span>
                </Link>
              ))}
            </span>
          )}
        </Pop>
      )}
    </span>
  );
}

/**
 * The in-universe date of an evidence record, as a date pill. `self` is for the record's own page
 * and drawer, where "Rests on: this record" would only lead back to where the reader is.
 */
export function EvidenceDate({ e, compact, variant, self = false }: { e: Evidence; compact?: boolean; variant?: "tag" | "inline"; self?: boolean }) {
  // The record says how its date is known where it can; otherwise the precision stands in for it.
  const kind: DateKind = e.when.kind ?? (e.kind === "teaser" && e.when.precision === "exact" ? "teaser" : PRECISION_KIND[e.when.precision] ?? "unknown");
  return <DatePill label={e.when.label} kind={kind} basis={e.when.basis} evidence={self ? [] : [e.id]} compact={compact} variant={variant} />;
}

/** A date our calendar can mark up: a year, a year and month, or a full day, as the data writes them. */
const CALENDAR_DATE = /^\d{4}(-\d{2}(-\d{2})?)?$/;

/**
 * A real-world date: the day something was released, posted, published or captured. It is plain
 * text, marked up as a date where the data gives one the calendar knows ("2015-08-24", "2015-08",
 * "2015"); a label such as "c. 2011" is printed as it was given. It is never drawn as a date pill:
 * the pill, its glyph and its kinds ("printed", "derived", …) say how a date inside the story is
 * known, and a reader must not be told that the day of a post is a date printed in a game.
 *  - short   abbreviates the month, for a narrow column of dates
 *  - about   what the date is the date of, where the data says (shown when the date is pointed at;
 *            print it beside the date as well, for a reader who cannot point)
 */
export function RealDate({ date, short = false, about, className }: { date: string; short?: boolean; about?: string; className?: string }) {
  const text = smartQuotes(longDate(date, short));
  const title = about ? smartQuotes(about) : undefined;
  return CALENDAR_DATE.test(date.trim())
    ? <time dateTime={date.trim()} title={title} className={className}>{text}</time>
    : <span title={title} className={className}>{text}</span>;
}

/* ── Tags on a weaker kind of record ───────────────────────────────────────────── */

/** The ancestors that cut off what overflows them (a clamped caption, a folded summary). One that scrolls cuts nothing off: its content can be reached. */
function clippers(el: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];
  for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
    const s = getComputedStyle(a);
    if (/hidden|clip/.test(`${s.overflowX} ${s.overflowY}`)) out.push(a);
  }
  return out;
}

/** True when nothing of the element shows inside the box. */
function cutOff(el: HTMLElement, box: HTMLElement): boolean {
  const r = el.getBoundingClientRect(), b = box.getBoundingClientRect();
  return r.top >= b.bottom - 1 || r.bottom <= b.top + 1 || r.left >= b.right - 1 || r.right <= b.left + 1;
}

/**
 * Keeps a marker out of the tab order while the text it stands in is cut off before it (a caption
 * held to two lines, a summary folded on a phone). A tab stop there is one nobody can see, and
 * focus would drag the cut text up into its box. It is looked at when the marker is drawn and
 * whenever the block it stands in changes size, which is what applying or lifting a cut does.
 * Returns what ends the watch.
 */
function watchClipping(el: HTMLElement): () => void {
  if (typeof ResizeObserver === "undefined") return () => {};
  let block = el.parentElement;
  while (block?.parentElement && /^(inline|contents)$/.test(getComputedStyle(block).display)) block = block.parentElement;
  if (!block) return () => {};
  const watcher = new ResizeObserver(() => {
    const cut = clippers(el).some((box) => cutOff(el, box));
    if (cut !== (el.tabIndex < 0)) el.tabIndex = cut ? -1 : 0;
  });
  watcher.observe(block);
  return () => watcher.disconnect();
}

/**
 * One of the four tags on a weaker kind of record, drawn where the text has it: "(as described)".
 * The words stay as they were written, brackets and all, in the face and size of their sentence,
 * and wrap with it; what is added is a dotted line under them and, when the tag is pointed at,
 * focused or pressed, a few words saying what it means (the same popover the date pills use). It
 * holds no links, so focus alone may open it. Copied and printed text is the text as written.
 * Produced by <RichText>; the meanings are RECORD_TAGS in labels.ts.
 */
export function RecordTagMark({ tag, children }: { tag: RecordTag; children: string }) {
  const [pop, anchorRef] = usePopover();
  const meaning = useId();
  const ref = useCallback((el: HTMLElement | null) => {
    anchorRef(el);
    if (!el) return;
    const stop = watchClipping(el);
    return () => { stop(); anchorRef(null); };
  }, [anchorRef]);
  return (
    <span className="rec-tag-wrap" {...pop.wrapProps}>
      {/* A span, not a <button>: a button is one unbreakable box, and these words must break across lines like the rest. */}
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        className="rec-tag"
        aria-expanded={pop.open}
        aria-describedby={meaning}
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); pop.toggle(); }}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pop.toggle(); } }}
      >
        {children}
      </span>
      {/* What a screen reader says after the words. Not drawn, so it is neither copied nor printed. */}
      <span id={meaning} hidden>{tag.means}</span>
      {pop.open && (
        <Pop control={pop} className="pop--tag">
          <span className="pop__head"><span className="pop__kind">{RECORD_TAG_KIND}</span></span>
          <strong className="pop__title">{tag.name}</strong>
          <span className="pop__text">{tag.means}</span>
        </Pop>
      )}
    </span>
  );
}

/* ── RichText ──────────────────────────────────────────────────────────────────── */

const TOKEN_RE = /\[\[([a-z0-9-]+)\]\]|\{\{([a-z0-9-]+)\}\}|\(\(([a-z0-9-]+)(?:\|([^)]+))?\)\)|\*\*(.+?)\*\*|\*([^\s*](?:[^*]*[^\s*])?)\*|<<([^|>]+)\|([a-z]+)\|([a-z0-9,-]*)\|([^>]*)>>/g;

type Piece = { t: "text"; s: string } | { t: "cites"; ids: string[] } | { t: "node"; node: ReactNode };

/**
 * Renders RichText (see the grammar in data/schema.ts):
 *   [[evidence-id]]               citation marker; adjacent citations are grouped into one cluster
 *   {{entity-id}}                 link to a person or place
 *   ((chapter-id)) ((id|label))   link to a theory chapter
 *   **bold**  *italic*            may contain other tokens
 *   <<label|kind|ids|basis>>      a date pill
 * and, in the plain text between them, the four tags on a weaker kind of record ("(as described)"),
 * each drawn as a marker that says what it means (see RecordTagMark).
 *
 * Names are stored as they run in a sentence ("the rabbit in the code"), so an entity that opens
 * the text or follows the end of a sentence is printed with a capital. The text is taken to open
 * a sentence itself (a paragraph, a list item, a table cell, a caption all do); pass
 * `opens={false}` for a phrase that is set inside a longer line.
 */
export function RichText({ text: source, opens = true }: { text: string; opens?: boolean }) {
  const text = smartQuotes(source);
  const pieces: Piece[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(TOKEN_RE)) {
    const between = text.slice(last, m.index);
    const prev = pieces[pieces.length - 1];
    if (m[1]) {
      // A citation: join the previous cluster when only white space separates them.
      if (prev?.t === "cites" && between.trim() === "") prev.ids.push(m[1]);
      else {
        if (between) pieces.push({ t: "text", s: between });
        pieces.push({ t: "cites", ids: [m[1]] });
      }
    } else {
      if (between) pieces.push({ t: "text", s: between });
      let node: ReactNode;
      if (m[7]) node = <DatePill key={k++} variant="inline" label={m[7]} kind={m[8] as DateKind} evidence={m[9] ? m[9].split(",") : []} basis={m[10]} />;
      else if (m[2]) node = <EntityLink key={k++} id={m[2]} alone={opensSentence(text.slice(0, m.index), opens)} />;
      else if (m[3]) node = <ChapterLink key={k++} id={m[3]} label={m[4]} />;
      // Emphasis opens a sentence only when it stands where one starts.
      else if (m[5]) node = <strong key={k++}><RichText text={m[5]} opens={opensSentence(text.slice(0, m.index), opens)} /></strong>;
      else node = <em key={k++}><RichText text={m[6]} opens={opensSentence(text.slice(0, m.index), opens)} /></em>;
      pieces.push({ t: "node", node });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) pieces.push({ t: "text", s: text.slice(last) });

  const out: ReactNode[] = [];
  pieces.forEach((p, i) => {
    if (p.t === "text") {
      // A marker hugs the word before it: drop the space the author typed before [[…]].
      const s = pieces[i + 1]?.t === "cites" ? p.s.replace(/\s+$/, "") : p.s;
      recordTagPieces(s).forEach((piece, j) => out.push(typeof piece === "string" ? piece : <RecordTagMark key={`t${i}.${j}`} tag={piece.tag}>{piece.text}</RecordTagMark>));
    } else if (p.t === "cites") out.push(<CiteGroup key={`c${i}`} ids={p.ids} />);
    else out.push(p.node);
  });
  return <>{out}</>;
}
