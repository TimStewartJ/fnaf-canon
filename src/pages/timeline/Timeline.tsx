import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type FocusEvent } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { eras } from "../../data/store";
import { ERA_DATES } from "../../data/dates";
import { Button, DatePill, Empty, Icon, Page, PageHeader, RichText, TabPanel, Tabs, count, eraHue, settleHeader, smartQuotes, useAddress, useMediaQuery } from "../../components/ui";
import { EraBar, EraRail, type EraEntry } from "./EraIndex";
import { AppliedSummary, FilterPanel, FilterSheet } from "./Filters";
import { MarksKey } from "./Key";
import { LocationsView } from "./Locations";
import { TimelineRow } from "./Row";
import { landOn, useReturnVisit } from "./hooks";
import {
  type EraGroup, type FilterChange, type Filters, type View, FOLD_TO, appliedFilters, buildLineup, canFold, filtersKey, inWords,
  isFiltered, kindOfId, readFilters, sameFilters, tallyWords, titleOfId, totalsPhrase, within, writeFilters,
} from "./model";
import "./timeline.css";

const VIEWS: { id: View; label: string }[] = [
  { id: "events", label: "Events" },
  { id: "locations", label: "Locations" },
];
const NO_FILTERS: Filters = { layer: "all", support: [], person: "", source: "", cause: [], killer: "", place: "" };

/**
 * Where a link wants the reader to land: the entry opened last (`e`) or an era (`era`), whichever
 * comes later in the address. The page writes them in that order as the reader opens rows and
 * jumps between eras, so a copied address lands where its sender was looking.
 */
function landing(sp: URLSearchParams): string {
  let last = "";
  for (const [k, v] of sp) if (v && (k === "e" || k === "era")) last = `${k}:${v}`;
  return last;
}

const focusHeading = (section: HTMLElement) => section.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });

/** How many lines of an era's summary a phone shows before the reader asks for the rest. */
const SUMMARY_LINES = 4;

/**
 * An era's summary. On a phone a long one fills the screen before the era's first entry, so it is
 * cut to SUMMARY_LINES lines with a button for the rest (the cut itself is in timeline.css, under
 * the phone width). Whether a summary is long is measured, not guessed from its length, so the
 * answer follows the screen's width and the reader's text size; one that would lose a line or two
 * is left whole. The whole text stays in the page, so a screen reader and find-in-page have it all.
 */
function EraSummary({ text, name }: { text: string; name: string }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement | null>(null);
  const id = useId();
  useLayoutEffect(() => {
    const el = box.current, p = el?.querySelector<HTMLElement>(".tl-era__sum");
    if (!el || !p) return;
    const measure = () => {
      const line = parseFloat(getComputedStyle(p).lineHeight) || 24;
      el.toggleAttribute("data-long", p.scrollHeight > line * (SUMMARY_LINES + 1.5));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(p);
    return () => ro.disconnect();
  }, [text]);
  // "Show less" is pressed at the foot of a long summary, whose start may be far above the screen:
  // once it is short again, the era's heading comes back into view, so the reader is not left in
  // the entries below with the button gone from under the finger.
  const shut = useRef(false);
  useLayoutEffect(() => {
    if (!shut.current) return;
    shut.current = false;
    const head = box.current?.closest<HTMLElement>(".tl-era__head");
    const pinned = document.querySelector(".tl-erabar")?.getBoundingClientRect().bottom ?? 0;
    if (!head || head.getBoundingClientRect().top >= pinned) return;
    settleHeader();
    head.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [open]);
  // A link in the part that is cut away can still take focus from the keyboard: show it.
  const reveal = (e: FocusEvent<HTMLDivElement>) => {
    const p = e.currentTarget.querySelector(".tl-era__sum");
    if (!open && p && p !== e.target && p.contains(e.target) && e.target.getBoundingClientRect().bottom > p.getBoundingClientRect().bottom + 1) setOpen(true);
  };
  return (
    <div className="tl-era__sumbox" ref={box} data-open={open || undefined} onFocus={reveal}>
      <p className="tl-era__sum" id={id}><RichText text={text} /></p>
      <Button variant="quiet" size="sm" className="tl-era__more" iconEnd={open ? ChevronUp : ChevronDown} aria-expanded={open} aria-controls={id} onClick={() => { shut.current = open; setOpen(!open); }}>
        {open ? "Show less" : "Read the rest"}<span className="sr-only"> of the summary of {smartQuotes(name)}</span>
      </Button>
    </div>
  );
}

/**
 * One era: where it sits, its name and range, its summary, then its entries in order.
 *  - folded    a long era showing only its first entries (see canFold in model.ts)
 *  - onUnfold  shows the rest
 */
function EraSection({ g, total, open, marks, folded, onToggle, onUnfold }: { g: EraGroup; total: number; open: Set<string>; marks: Map<string, string>; folded: boolean; onToggle: (id: string) => void; onUnfold: (eraId: string) => void }) {
  const { era } = g;
  const date = ERA_DATES[era.id];
  // Deaths and other fates are counted apart: nothing is tallied as a death that is not one.
  const tally = tallyWords(g.rows.filter((r) => r.kind === "event").length, g.fates).join(" · ");
  const rows = folded ? g.rows.slice(0, FOLD_TO) : g.rows;
  // After "show the rest", focus moves to the first entry that appeared.
  const reveal = useRef(false);
  const firstHidden = g.rows[FOLD_TO]?.id;
  useEffect(() => {
    if (folded || !reveal.current) return;
    reveal.current = false;
    if (firstHidden) document.getElementById(firstHidden)?.querySelector<HTMLElement>(".tl-row__toggle")?.focus({ preventScroll: true });
  }, [folded, firstHidden]);
  return (
    <section className="tl-era" id={`era-${era.id || "unplaced"}`} style={{ "--hue": eraHue(era.id) } as CSSProperties}>
      <header className="tl-era__head">
        <p className="tl-era__kicker">
          <span className="tl-era__swatch" aria-hidden />
          {era.id ? `Era ${g.index + 1} of ${count(total)}` : "No era"}
          {tally && <span className="tl-era__tally">{tally}</span>}
        </p>
        <div className="tl-era__titleline">
          <h2 className="tl-era__title" tabIndex={-1}>{smartQuotes(era.name)}</h2>
          {era.range && <DatePill label={era.range} kind={date?.kind ?? "unknown"} basis={date?.basis} evidence={date?.evidence} />}
        </div>
        {era.summary && <EraSummary text={era.summary} name={era.name} />}
      </header>
      {rows.length > 0 ? (
        <ol className={`tl-list${folded ? " is-folded" : ""}`}>
          {rows.map((r) => <TimelineRow key={r.id} row={r} open={open.has(r.id)} mark={marks.get(r.id)} onToggle={onToggle} />)}
        </ol>
      ) : (
        <p className="tl-era__none">Nothing is recorded in this era.</p>
      )}
      {folded && (
        <p className="tl-more">
          <Button size="sm" iconEnd={ChevronDown} onClick={() => { reveal.current = true; onUnfold(era.id); }}>
            Show the other {g.rows.length - FOLD_TO} entries<span className="sr-only"> in {smartQuotes(era.name)}</span>
          </Button>
        </p>
      )}
    </section>
  );
}

export default function Timeline() {
  // The page's state lives in the address. Filters and open rows replace the current history entry
  // (Back leaves the page, and coming back restores the view); a change of view or a jump to an era
  // adds one, so that Back undoes it.
  const { params: sp, write: update } = useAddress();
  const fkey = filtersKey(sp);
  const f = useMemo(() => readFilters(new URLSearchParams(fkey)), [fkey]);
  const line = useMemo(() => buildLineup(f), [f]);
  const filtered = isFiltered(f);
  const view: View = sp.get("view") === "locations" ? "locations" : "events";
  const wide = useMediaQuery("(min-width: 1080px)");
  const phone = useMediaQuery("(max-width: 640px)");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtersBtn = useRef<HTMLButtonElement | null>(null);
  const bar = useRef<HTMLDivElement | null>(null);
  const panel = useRef<HTMLDivElement | null>(null);

  // Open rows. A death or other fate told by a story event opens that event's row and is marked inside it.
  const openKey = sp.getAll("e").join(" ");
  const { open, marks } = useMemo(() => {
    const rows = new Set<string>(), inside = new Map<string, string>();
    for (const id of openKey ? openKey.split(" ") : []) {
      const row = line.rowOf.get(id);
      if (!row) continue;
      rows.add(row);
      if (row !== id) inside.set(row, id);
    }
    return { open: rows, marks: inside };
  }, [openKey, line]);

  // Long eras the reader has asked to see in full.
  const moreKey = sp.getAll("more").join(" ");
  const unfolded = useMemo(() => new Set(moreKey ? moreKey.split(" ") : []), [moreKey]);
  // A long era is cut short unless a filter is on, the reader opened it up, or an open entry lies in the part that would be hidden.
  const isFolded = (g: EraGroup) => !filtered && canFold(g) && !unfolded.has(g.era.id) && !g.rows.slice(FOLD_TO).some((r) => open.has(r.id));

  /* ── Edits to the address ─────────────────────────────────────────────────────── */
  const latest = useRef({ line });
  useLayoutEffect(() => { latest.current = { line }; });
  // What the page itself last asked for. A landing that differs from it came from a link, or from a
  // jump the page wants to make once the navigation has gone through (`land`).
  const asked = useRef<string | null>(null);
  const edit = useCallback((change: (next: URLSearchParams) => void, how?: { push?: boolean; land?: boolean }) => {
    return update((next) => { change(next); if (!how?.land) asked.current = landing(next); }, how);
  }, [update]);

  const setFilters = useCallback((change: FilterChange) => {
    edit((p) => {
      const now = readFilters(p), next = change(now);
      if (sameFilters(now, next)) return;
      writeFilters(p, next);
      // A change of filters is a new question: the era the reader last jumped to no longer says where to land.
      p.delete("era");
      // A row the new filters hide is closed, so the address never names an entry that is not on screen.
      const kept = buildLineup(readFilters(p)).rowOf;
      const ids = p.getAll("e");
      p.delete("e");
      for (const id of ids) if (kept.has(id)) p.append("e", id);
    });
  }, [edit]);
  const clearFilters = useCallback(() => setFilters(() => NO_FILTERS), [setFilters]);

  const toggleRow = useCallback((rowId: string) => {
    edit((p) => {
      const { rowOf } = latest.current.line;
      const ids = p.getAll("e");
      const mine = ids.filter((id) => rowOf.get(id) === rowId);
      p.delete("e");
      for (const id of ids) if (!mine.includes(id)) p.append("e", id);
      if (!mine.length) p.append("e", rowId);
      // An entry in the cut part of a long era keeps that era in full, so closing it does not take the list away.
      const g = latest.current.line.groups.find((x) => x.rows.some((r) => r.id === rowId));
      if (g && canFold(g) && g.rows.findIndex((r) => r.id === rowId) >= FOLD_TO && !p.getAll("more").includes(g.era.id)) p.append("more", g.era.id);
    });
  }, [edit]);
  const unfoldEra = useCallback((eraId: string) => edit((p) => { if (!p.getAll("more").includes(eraId)) p.append("more", eraId); }), [edit]);

  // A jump to an era is a step the reader can undo: Back returns to where they were reading. The
  // page moves once the navigation has gone through (the landing effect below), so the place they
  // left is remembered under the entry they left.
  const jump = useRef<string | null>(null);
  const goToEra = useCallback((id: string) => {
    jump.current = id;
    if (edit((p) => { p.delete("era"); p.append("era", id); }, { push: true, land: true })) return;
    // The address already names this era: nothing to navigate, just go there.
    const el = document.getElementById(`era-${id}`);
    if (!el) return;
    jump.current = null;
    settleHeader();
    el.scrollIntoView({ block: "start", behavior: "instant" });
    focusHeading(el);
  }, [edit]);

  // A change of view made on this page (not one reached with Back or Forward, which the shell restores).
  const viewJump = useRef(false);
  const setView = (v: View) => {
    viewJump.current = true;
    // A view is a place to come back from: Back returns to the other view, where the reader left it.
    edit((p) => { if (v === "locations") p.set("view", v); else p.delete("view"); }, { push: true });
  };

  /* ── Landing on what a link points at ─────────────────────────────────────────── */
  const want = landing(sp);
  const returnVisit = useReturnVisit();
  const arrived = useRef(false);
  const landed = useRef(false);
  const stopLanding = useRef<(() => void) | null>(null);
  useLayoutEffect(() => {
    const first = !arrived.current;
    arrived.current = true;
    // Back or Forward to an entry already shown: the shell puts the reader where they were. Do not move.
    const back = returnVisit();
    if (want === asked.current) return;
    asked.current = want;
    if (back || view !== "events" || !want) return;
    const [kind, id] = [want.slice(0, want.indexOf(":")), want.slice(want.indexOf(":") + 1)];
    const el = document.getElementById(kind === "era" ? `era-${id}` : line.rowOf.get(id) ?? "");
    // A reload: the shell has already restored the reader's place, so leave it.
    if (!el || (first && window.scrollY > 1)) return;
    stopLanding.current?.();
    stopLanding.current = landOn(el);
    landed.current = true;
    // A jump made with the era index also moves keyboard focus to the era's heading.
    if (kind === "era" && jump.current === id) { jump.current = null; focusHeading(el); }
  }, [want, view, line, returnVisit]);

  // After a change of view made here, start at the top of the new view unless the reader was sent
  // to an entry or an era in it, and keep keyboard focus on the page.
  const lastView = useRef(view);
  useEffect(() => {
    const here = landed.current;
    landed.current = false;
    if (lastView.current === view) return;
    lastView.current = view;
    if (!viewJump.current) return;
    viewJump.current = false;
    if (!here && bar.current && bar.current.getBoundingClientRect().top < 0) { settleHeader(); bar.current.scrollIntoView({ block: "start", behavior: "instant" }); }
    if (!document.activeElement || document.activeElement === document.body) panel.current?.focus({ preventScroll: true });
  });

  /* ── What to render ───────────────────────────────────────────────────────────── */
  const eraEntries: EraEntry[] = line.groups.filter((g) => g.era.id).map((g) => ({
    id: g.era.id, n: g.index + 1, name: g.era.name, range: g.era.range, count: g.rows.length, on: !filtered || g.rows.length > 0, hue: eraHue(g.era.id),
  }));
  const sections = line.groups.filter((g) => g.rows.length > 0 || (!filtered && g.era.id));
  const applied = filtered || (filtersOpen && !phone);
  const linked = want.startsWith("e:") ? want.slice(2) : "";
  const lost = view === "events" && linked && !line.rowOf.has(linked) ? linked : "";
  const locationsTo = useMemo(() => { const p = new URLSearchParams(sp); p.set("view", "locations"); return p; }, [sp]);
  const nApplied = appliedFilters(f).length;

  return (
    <Page title="Timeline" className="tl-page">
      {/* The opening line counts deaths and other fates apart. It does not go on to list the other
          fates: each entry says its own, the key explains them, and on a phone every line added
          here pushes the first event off the first screen. */}
      <PageHeader title="Timeline" lede={`The story in order: ${totalsPhrase()} across ${inWords(eras.length)} eras.`}>
        <p className="tl-caveat">Where the games print no date, an entry is placed by what it follows. That position is a convention, not a claim about the year.</p>
      </PageHeader>

      <div className="tl-bar" ref={bar}>
        <Tabs tabs={VIEWS} value={view} onChange={setView} label="Views of the timeline" panel="tl-view" />
        <div className="tl-bar__tools">
          <MarksKey />
          <button
            ref={filtersBtn}
            type="button"
            className={`btn btn--sm tl-bar__filters${nApplied ? " on" : ""}`}
            aria-expanded={filtersOpen}
            aria-controls={!phone && filtersOpen ? "tl-filter-panel" : undefined}
            aria-haspopup={phone ? "dialog" : undefined}
            onClick={() => setFiltersOpen((o) => !o)}
          >
            <Icon icon={SlidersHorizontal} /> Filters
            {nApplied > 0 && <span className="tl-bar__count">{count(nApplied)}<span className="sr-only"> applied</span></span>}
          </button>
        </div>
      </div>

      {filtersOpen && !phone && (
        <div className="tl-panel" id="tl-filter-panel" role="group" aria-label="Filters">
          <FilterPanel f={f} set={setFilters} locationsTo={locationsTo} />
        </div>
      )}
      {filtersOpen && phone && <FilterSheet f={f} set={setFilters} line={line} onClear={clearFilters} onClose={() => setFiltersOpen(false)} locationsTo={locationsTo} />}
      <AppliedSummary f={f} line={line} set={setFilters} onClear={clearFilters} idle={!applied} focusAfter={filtersBtn} onDone={filtersOpen && !phone ? () => setFiltersOpen(false) : undefined} />

      {view === "events" ? (
        <TabPanel id="tl-view" tab={view} className="tl-events" tabIndex={-1} ref={panel}>
          {wide ? <EraRail entries={eraEntries} sp={sp} onGo={goToEra} /> : <EraBar entries={eraEntries} sp={sp} onGo={goToEra} />}
          <div className="tl-line">
            {lost && (
              <p className="tl-notice" role="status">
                {kindOfId(lost)
                  ? <><span>“{smartQuotes(titleOfId(lost))}” is hidden by the filters that are on.</span> <Button size="sm" onClick={() => { clearFilters(); asked.current = null; }}>Clear the filters and show it</Button></>
                  : <><span>This link points to an entry that is not on the timeline. It may have been renamed.</span> <Button size="sm" onClick={() => edit((p) => { const ids = p.getAll("e").filter((id) => id !== lost); p.delete("e"); for (const id of ids) p.append("e", id); })}>Dismiss</Button></>}
              </p>
            )}
            {sections.map((g) => <EraSection key={g.era.id || "unplaced"} g={g} total={eras.length} open={open} marks={marks} folded={isFolded(g)} onToggle={toggleRow} onUnfold={unfoldEra} />)}
            {sections.length === 0 && (
              <Empty title="Nothing on the line matches these filters" action={<Button onClick={clearFilters}>Clear all filters</Button>}>
                No entry fits every filter at once.
              </Empty>
            )}
            {sections.length > 0 && (
              <p className="tl-end">
                {filtered ? "That is everything these filters leave on the line." : "The line ends here."}{" "}
                Next: <Link to={within(locationsTo)}>every place across the eras</Link>, or <Link to="/theory">the theory that connects these events</Link>.
              </p>
            )}
          </div>
        </TabPanel>
      ) : (
        <TabPanel id="tl-view" tab={view} className="tl-places" tabIndex={-1} ref={panel}>
          <LocationsView f={f} sp={sp} onLeave={() => { viewJump.current = true; }} />
        </TabPanel>
      )}
    </Page>
  );
}
