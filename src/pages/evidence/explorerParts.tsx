import { memo, useCallback, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { CircleHelp, Image as ImageIcon, X } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { gameById, labelForEntity } from "../../data/store";
import {
  Collapsible, EvidenceLink, FirmGlyph, GameMark, Icon, IconButton, SOURCE_KIND_ICON, firmness, kindLabel, smartQuotes, useDrawerRecord,
  useModalDialog, type LucideIcon,
} from "../../components/ui";
import { PLACE, PLACES, count, records, type Place } from "./coverage";
import "./evidence.css";
import { certaintyOrder, claimFor, elsewhere, entityKind, entityOptions, fold, kindOrder, marks, tagOptions, type Option, type Outcome, type Query, type Sort } from "./explorerState";

const kindIcon = (kind: string): LucideIcon => (SOURCE_KIND_ICON as Record<string, LucideIcon>)[kind] ?? CircleHelp;

/** Display text with the matched search words marked. */
export function Marked({ text, terms }: { text: string; terms: string[] }) {
  const shown = smartQuotes(text);
  if (!terms.length || fold(shown).length !== shown.length) return <>{shown}</>;
  return <>{marks(shown, terms).map((p, i) => (p.hit ? <mark key={i} className="evx-mark">{p.s}</mark> : p.s))}</>;
}

/** The small pattern swatch that stands for a record's place in the theory, wherever coverage is shown. */
export function PlaceSwatch({ place }: { place: Place }) {
  return <span className="evx-swatch" data-place={place} aria-hidden />;
}

/**
 * One record in a results list: certainty, title, the claim in two lines, and where it is from.
 * The whole row opens the record in the drawer; the title is a real link to the record's page.
 *  - source  show the game mark (off on a source's own page)
 *  - kind    show the kind of source (off inside a list already grouped by kind)
 *  - place   show the record's place in the theory
 */
export const ResultRow = memo(function ResultRow({ e, group, terms, source = true, kind = true, place }: { e: Evidence; group?: string[]; terms: string[]; source?: boolean; kind?: boolean; place?: Place }) {
  const open = useDrawerRecord() === e.id;
  const c = firmness("certainty", e.certainty);
  const extra = elsewhere(e, terms);
  return (
    <li className={`evx-row${open ? " is-open" : ""}`}>
      <span className="evx-row__mark" title={`${c.word}: ${c.help}`}><FirmGlyph level={c.level} /><span className="sr-only">{c.word}.</span></span>
      <div className="evx-row__main">
        <EvidenceLink id={e.id} group={group} className="evx-row__title"><Marked text={e.title} terms={terms} /></EvidenceLink>
        <p className="evx-row__claim"><Marked text={claimFor(e, terms)} terms={terms} /></p>
        {extra && <p className="evx-row__extra"><span className="evx-row__extra-label">{extra.label}</span> <Marked text={extra.text} terms={terms} /></p>}
      </div>
      <div className="evx-row__src">
        {(source || kind) && (
          <span className="evx-row__where">
            {source && <GameMark id={e.game} />}
            {kind && <span className="evx-row__kind"><Icon icon={kindIcon(e.kind)} /> {kindLabel(e.kind)}</span>}
            {e.image && <Icon icon={ImageIcon} label="Has a screenshot" className="evx-row__img" />}
          </span>
        )}
        <span className="evx-row__loc"><Marked text={e.location} terms={terms} /></span>
        {(place || (e.image && !source && !kind)) && (
          <span className="evx-row__tail">
            {place && <span className="evx-row__place" title={PLACE[place].help}><PlaceSwatch place={place} /> {PLACE[place].word}</span>}
            {e.image && !source && !kind && <Icon icon={ImageIcon} label="Has a screenshot" className="evx-row__img" />}
          </span>
        )}
      </div>
    </li>
  );
});

/* ── Facets ────────────────────────────────────────────────────────────────────── */

/**
 * The filters live in a box that scrolls by itself (the rail, the sheet). When something inside it
 * opens downwards and would end below the box's edge, the box scrolls to bring its top into view,
 * so that opening it visibly does something. The page itself is never moved.
 */
function reveal(el: HTMLElement | null, always = false) {
  if (!el) return;
  let box = el.parentElement;
  while (box && !/(auto|scroll)/.test(getComputedStyle(box).overflowY)) box = box.parentElement;
  if (!box || box === document.body || box === document.documentElement) return;
  const r = el.getBoundingClientRect(), b = box.getBoundingClientRect();
  if (always || r.bottom > b.bottom) box.scrollTop += r.top - b.top - 8;
}

function Opt({ checked, n, label, onChange, children, title }: { checked: boolean; n: number; label: string; onChange: (on: boolean) => void; children: ReactNode; title?: string }) {
  // An option that would match nothing is switched off, unless it is ticked (so it can be unticked).
  const dead = n === 0 && !checked;
  return (
    <label className={`evx-opt${checked ? " on" : ""}${dead ? " is-dead" : ""}`} title={title}>
      <input type="checkbox" checked={checked} disabled={dead} aria-label={`${label}, ${records(n)}`} onChange={(ev) => onChange(ev.target.checked)} />
      <span className="evx-opt__name">{children}</span>
      <span className="evx-opt__n" aria-hidden>{count(n)}</span>
    </label>
  );
}

function Facet({ label, wide, children }: { label: string; wide?: boolean; children: ReactNode }) {
  return (
    <fieldset className="evx-facet">
      <legend className="evx-facet__label">{label}</legend>
      <div className={`evx-facet__opts${wide ? " evx-facet__opts--pairs" : ""}`}>{children}</div>
    </fieldset>
  );
}

/** What the archive holds: sources with at least one record (in release order), and the kinds and certainties in use. */
export interface FacetOptions { sources: string[]; kinds: string[]; certs: string[] }

export interface FacetActions {
  toggle(key: "game" | "kind" | "cert" | "use", id: string): void;
  set(patch: Partial<Query>): void;
}

/**
 * Every filter of the explorer. The three people use most are always open, each option with the
 * number of records it would give; the rest sit under "More filters". Shown as a rail beside the
 * results on a wide screen and inside a sheet on a narrow one.
 */
export const Facets = memo(function Facets({ query, outcome, searching, actions, options, skipTo }: { query: Query; outcome: Outcome; searching: boolean; actions: FacetActions; options: FacetOptions; skipTo?: string }) {
  const { counts } = outcome;
  // Every option the archive has is always listed, so the lists do not jump as filters change;
  // a value that only the URL knows about is added so that it can be unticked.
  const sources = [...options.sources, ...query.game.filter((id) => !options.sources.includes(id))];
  const kinds = kindOrder([...options.kinds, ...query.kind]);
  const certs = certaintyOrder([...options.certs, ...query.cert]);
  // The two pickers hold several hundred entries each; their lists are only worked out while one is open.
  const tags = useCallback(() => tagOptions(counts.tag, query.tag), [counts.tag, query.tag]);
  const entities = useCallback(() => entityOptions(counts.entity, query.entity), [counts.entity, query.entity]);
  const folded = query.use.length + (query.tag ? 1 : 0) + (query.entity ? 1 : 0) + (query.img ? 1 : 0) + (query.sort ? 1 : 0);
  const defaultSort: Sort = searching ? "match" : "time";
  const more = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = more.current;
    if (!el) return;
    // "toggle" does not bubble, so it is caught on the way down.
    const onToggle = (ev: Event) => { if (ev.target instanceof HTMLDetailsElement && ev.target.open) reveal(el); };
    el.addEventListener("toggle", onToggle, true);
    return () => el.removeEventListener("toggle", onToggle, true);
  }, []);
  return (
    <div className="evx-facets">
      {skipTo && <button type="button" className="evx-skip" onClick={() => document.getElementById(skipTo)?.focus()}>Skip the filters</button>}
      <Facet label="Source" wide>
        {sources.map((id) => (
          <Opt key={id} checked={query.game.includes(id)} n={counts.game.get(id) ?? 0} label={gameById.get(id as never)?.title ?? id} onChange={() => actions.toggle("game", id)}>
            <GameMark id={id} />
          </Opt>
        ))}
      </Facet>
      <Facet label="Certainty">
        {certs.map((id) => {
          const f = firmness("certainty", id);
          return (
            <Opt key={id} checked={query.cert.includes(id)} n={counts.cert.get(id) ?? 0} label={f.word} title={f.help} onChange={() => actions.toggle("cert", id)}>
              <FirmGlyph level={f.level} /> {f.word}
            </Opt>
          );
        })}
      </Facet>
      <Facet label="Kind of source">
        {kinds.map((id) => (
          <Opt key={id} checked={query.kind.includes(id)} n={counts.kind.get(id) ?? 0} label={kindLabel(id)} onChange={() => actions.toggle("kind", id)}>
            <Icon icon={kindIcon(id)} /> {kindLabel(id)}
          </Opt>
        ))}
      </Facet>
      <div ref={more}>
        <Collapsible summary="More filters" meta={folded ? `${folded} in use` : undefined} defaultOpen={folded > 0} className="evx-more">
          <div className="evx-facets evx-facets--more">
            <div className="evx-facet">
              <Opt checked={query.img} n={query.img ? outcome.results.length : counts.img} label="With a screenshot" onChange={(on) => actions.set({ img: on })}>
                <Icon icon={ImageIcon} /> With a screenshot
              </Opt>
            </div>
            <Facet label="Place in the theory">
              {PLACES.map((p) => (
                <Opt key={p} checked={query.use.includes(p)} n={counts.use.get(p) ?? 0} label={PLACE[p].word} title={PLACE[p].help} onChange={() => actions.toggle("use", p)}>
                  <PlaceSwatch place={p} /> {PLACE[p].word}
                </Opt>
              ))}
            </Facet>
            <Combo label="Tag" placeholder="Find a tag" options={tags} value={query.tag} valueLabel={query.tag ? `#${query.tag}` : ""} onChange={(id) => actions.set({ tag: id })} />
            <Combo
              label="Person or place" placeholder="Find a person or place" options={entities} value={query.entity}
              valueLabel={query.entity ? labelForEntity(query.entity) : ""}
              onChange={(id) => actions.set({ entity: id })}
            />
            <label className="evx-field">
              <span className="evx-facet__label">Order</span>
              <select value={outcome.sort} onChange={(ev) => { const v = ev.target.value as Sort; actions.set({ sort: v === defaultSort ? null : v }); }}>
                {searching && <option value="match">Best match first</option>}
                <option value="time">In-universe time</option>
                <option value="game">Release order of the sources</option>
              </select>
            </label>
          </div>
        </Collapsible>
      </div>
    </div>
  );
});

/* ── A small searchable picker ─────────────────────────────────────────────────── */

const SHOWN = 30;

/**
 * Pick one of many (several hundred tags, a couple of hundred people and places): type to narrow
 * the list, arrow keys and Enter to choose. The list opens in the flow of the page, so nothing
 * clips it inside the rail or the sheet. An entry that would give no records under the filters
 * now set is listed last, greyed out and not selectable, so the reader sees that it exists.
 */
export function Combo({ label, placeholder, options: getOptions, value, valueLabel, onChange }: { label: string; placeholder: string; options: () => Option[]; value: string; valueLabel: string; onChange: (id: string) => void }) {
  const uid = useId();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const options = useMemo(() => (open ? getOptions() : []), [open, getOptions]);
  const found = useMemo(() => {
    const t = fold(text.trim()).replace(/^#/, "");
    const live = (o: Option) => o.count > 0;
    if (!t) return options;
    // Names that start with what was typed come first, and entries with records before those
    // without; each bucket keeps the incoming order (most used first).
    const buckets: Option[][] = [[], [], [], []];
    for (const o of options) {
      const name = fold(o.label).replace(/^#/, "");
      const starts = name.startsWith(t) || o.id.startsWith(t);
      if (!starts && !name.includes(t) && !o.id.includes(t)) continue;
      buckets[(live(o) ? 0 : 2) + (starts ? 0 : 1)].push(o);
    }
    return buckets.flat();
  }, [options, text]);
  const root = useRef<HTMLDivElement | null>(null);
  // On touch the keyboard takes the lower half of the screen, so the picker always moves to the top of its box.
  useEffect(() => { if (open) reveal(root.current, window.matchMedia("(pointer: coarse)").matches); }, [open]);
  const shown = found.slice(0, SHOWN);
  const pickable = shown.filter((o) => o.count > 0);
  const at = Math.min(active, Math.max(0, pickable.length - 1));
  const current = pickable[at];
  const optId = (o: Option) => `${uid}-${o.id.replace(/[^a-z0-9-]/gi, "_")}`;
  const move = (i: number) => {
    setActive(i);
    // Keep the highlighted option in view inside the list's own scroll box.
    const o = pickable[i];
    if (o) requestAnimationFrame(() => document.getElementById(optId(o))?.scrollIntoView({ block: "nearest" }));
  };
  const pick = (o: Option) => { onChange(o.id); setText(""); setOpen(false); setActive(0); };
  const onKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "ArrowDown") { ev.preventDefault(); if (!open) setOpen(true); else move(Math.min(at + 1, pickable.length - 1)); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); if (open) move(Math.max(at - 1, 0)); }
    else if (ev.key === "Enter") { if (open && current) { ev.preventDefault(); pick(current); } }
    else if (ev.key === "Escape" && open) { ev.preventDefault(); ev.stopPropagation(); setOpen(false); }
  };
  const dead = shown.length - pickable.length;
  const note = shown.length === 0 ? "Nothing by that name."
    : [
      found.length > shown.length ? `${count(found.length - shown.length)} more. Type to narrow the list.` : "",
      dead > 0 ? (pickable.length === 0 ? "No records under the filters now set." : "Greyed out: no records under the filters now set.") : "",
    ].filter(Boolean).join(" ");
  return (
    <div className="evx-combo" ref={root} onBlur={(ev) => { if (!ev.currentTarget.contains(ev.relatedTarget as Node | null)) setOpen(false); }}>
      <label className="evx-facet__label" htmlFor={`${uid}-in`}>{label}</label>
      {value && (
        <span className="evx-combo__value">
          <span className="evx-combo__chosen">{smartQuotes(valueLabel)}</span>
          <IconButton icon={X} label={`Remove ${label.toLowerCase()}: ${valueLabel}`} onClick={() => onChange("")} />
        </span>
      )}
      <input
        id={`${uid}-in`} type="text" role="combobox" autoComplete="off" spellCheck={false}
        aria-expanded={open} aria-controls={`${uid}-list`} aria-autocomplete="list" aria-activedescendant={open && current ? optId(current) : undefined}
        placeholder={value ? `Change: ${placeholder.toLowerCase()}` : placeholder} value={text}
        onChange={(ev) => { setText(ev.target.value); setOpen(true); setActive(0); }}
        onFocus={() => setOpen(true)} onClick={() => setOpen(true)} onKeyDown={onKeyDown}
      />
      <div className="evx-combo__pop" hidden={!open}>
        <ul id={`${uid}-list`} role="listbox" aria-label={label} className="evx-combo__list">
          {shown.map((o) => {
            const live = o.count > 0;
            return (
              <li
                key={o.id} id={optId(o)} role="option" aria-selected={o === current} aria-disabled={live ? undefined : true}
                className={`evx-combo__opt${o === current ? " is-active" : ""}${o.id === value ? " is-chosen" : ""}${live ? "" : " is-dead"}`}
                onMouseDown={(ev) => ev.preventDefault()}
                onMouseEnter={live ? () => setActive(pickable.indexOf(o)) : undefined}
                onClick={live ? () => pick(o) : undefined}
              >
                <span className="evx-combo__name">{smartQuotes(o.label)}{o.hint && <span className="evx-combo__hint"> {o.hint}</span>}</span>
                <span className="evx-opt__n">{count(o.count)}</span>
              </li>
            );
          })}
        </ul>
        <p className="evx-combo__note" aria-live="polite">{note}</p>
      </div>
    </div>
  );
}

/* ── The filters as a sheet, for screens without room for the rail ─────────────── */

export function FilterSheet({ onClose, children, foot }: { onClose: () => void; children: ReactNode; foot: ReactNode }) {
  const dialogProps = useModalDialog(true, onClose);
  return (
    <dialog className="evx-sheet" aria-label="Filters" {...dialogProps}>
      <header className="evx-sheet__bar">
        <span className="label">Filters</span>
        <IconButton icon={X} label="Close filters" onClick={onClose} autoFocus />
      </header>
      <div className="evx-sheet__body">{children}</div>
      <footer className="evx-sheet__foot">{foot}</footer>
    </dialog>
  );
}

/* ── What is applied, as removable chips ───────────────────────────────────────── */

interface Applied { key: string; name: string; value: ReactNode; label: string; remove: () => void }

/** One chip per filter in force; each removes itself. `after` closes the list (the "clear all" button). Renders nothing when no filter is in use. */
export function AppliedChips({ query, text, sort, searching, actions, after }: { query: Query; text: string; sort: Sort; searching: boolean; actions: FacetActions; after?: ReactNode }) {
  const items: Applied[] = [];
  const q = text.trim();
  if (q) items.push({ key: "q", name: "Search", value: `“${q}”`, label: `Search ${q}`, remove: () => actions.set({ q: "" }) });
  for (const id of query.game) {
    const title = gameById.get(id as never)?.title ?? id;
    items.push({ key: `game:${id}`, name: "Source", value: <GameMark id={id} />, label: `Source ${title}`, remove: () => actions.toggle("game", id) });
  }
  for (const id of query.kind) items.push({ key: `kind:${id}`, name: "Kind", value: kindLabel(id), label: `Kind ${kindLabel(id)}`, remove: () => actions.toggle("kind", id) });
  for (const id of query.cert) {
    const word = firmness("certainty", id).word;
    items.push({ key: `cert:${id}`, name: "Certainty", value: word, label: `Certainty ${word}`, remove: () => actions.toggle("cert", id) });
  }
  for (const p of query.use) items.push({ key: `use:${p}`, name: "In the theory", value: PLACE[p].word, label: `In the theory: ${PLACE[p].word}`, remove: () => actions.toggle("use", p) });
  if (query.tag) items.push({ key: "tag", name: "Tag", value: `#${query.tag}`, label: `Tag ${query.tag}`, remove: () => actions.set({ tag: "" }) });
  if (query.entity) {
    const kind = entityKind(query.entity);
    const name = labelForEntity(query.entity);
    items.push({ key: "entity", name: kind, value: smartQuotes(name), label: `${kind} ${name}`, remove: () => actions.set({ entity: "" }) });
  }
  if (query.img) items.push({ key: "img", name: "Only", value: "with a screenshot", label: "Only records with a screenshot", remove: () => actions.set({ img: false }) });
  if (query.sort && sort !== (searching ? "match" : "time")) {
    const word = sort === "game" ? "release order" : sort === "time" ? "in-universe time" : "best match";
    items.push({ key: "sort", name: "Order", value: word, label: `Order: ${word}`, remove: () => actions.set({ sort: null }) });
  }
  if (!items.length) return null;
  return (
    <ul className="evx-applied" aria-label="Filters in use">
      {items.map((a) => (
        <li key={a.key}>
          <button type="button" className="evx-chip" onClick={a.remove} aria-label={`Remove filter: ${a.label}`} title="Remove this filter">
            <span className="evx-chip__k">{a.name}</span>
            <span className="evx-chip__v">{a.value}</span>
            <Icon icon={X} />
          </button>
        </li>
      ))}
      {after && <li>{after}</li>}
    </ul>
  );
}
