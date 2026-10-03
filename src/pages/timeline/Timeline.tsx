import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { SlidersHorizontal } from "lucide-react";
import { eras } from "../../data/store";
import { ERA_DATES } from "../../data/dates";
import { Button, DatePill, Empty, Icon, Page, PageHeader, RichText, Tabs, eraHue, smartQuotes, useMediaQuery } from "../../components/ui";
import { EraBar, EraRail, type EraEntry } from "./EraIndex";
import { AppliedSummary, FilterPanel, FilterSheet } from "./Filters";
import { MarksKey } from "./Key";
import { LocationsView } from "./Locations";
import { TimelineRow } from "./Row";
import { landOn, useUrlState } from "./hooks";
import {
  type EraGroup, type Filters, type View, TOTAL_DEATHS, TOTAL_EVENTS, buildLineup, countPhrase, filtersKey, inWords, isFiltered, kindOfId, plural,
  readFilters, writeFilters,
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

function EraSection({ g, total, open, marks, onToggle }: { g: EraGroup; total: number; open: Set<string>; marks: Map<string, string>; onToggle: (id: string) => void }) {
  const { era } = g;
  const date = ERA_DATES[era.id];
  const events = g.rows.filter((r) => r.kind === "event").length;
  const tally = [events ? plural(events, "event") : "", g.deaths ? plural(g.deaths, "death") : ""].filter(Boolean).join(" · ");
  return (
    <section className="tl-era" id={`era-${era.id || "unplaced"}`} style={{ "--hue": eraHue(era.id) } as CSSProperties}>
      <header className="tl-era__head">
        <p className="tl-era__kicker">
          <span className="tl-era__swatch" aria-hidden />
          {era.id ? `Era ${g.index + 1} of ${total}` : "No era"}
          {tally && <span className="tl-era__tally">{tally}</span>}
        </p>
        <div className="tl-era__titleline">
          <h2 className="tl-era__title" tabIndex={-1}>{smartQuotes(era.name)}</h2>
          {era.range && <DatePill label={era.range} kind={date?.kind ?? "unknown"} basis={date?.basis} evidence={date?.evidence} />}
        </div>
        {era.summary && <p className="tl-era__sum"><RichText text={era.summary} /></p>}
      </header>
      {g.rows.length > 0 ? (
        <ol className="tl-list">
          {g.rows.map((r) => <TimelineRow key={r.id} row={r} open={open.has(r.id)} mark={marks.get(r.id)} onToggle={onToggle} />)}
        </ol>
      ) : (
        <p className="tl-era__none">Nothing is recorded in this era.</p>
      )}
    </section>
  );
}

export default function Timeline() {
  const [sp, update] = useUrlState();
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

  // Open rows. A death told by a story event opens that event's row and is marked inside it.
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

  /* ── Edits to the address ─────────────────────────────────────────────────────── */
  const latest = useRef({ line });
  useLayoutEffect(() => { latest.current = { line }; });
  // What the page itself last asked for. A landing that differs from it came from a link.
  const asked = useRef<string | null>(null);
  const edit = useCallback((change: (next: URLSearchParams) => void, how?: { push?: boolean }) => {
    update((next) => { change(next); asked.current = landing(next); }, how);
  }, [update]);

  const setFilters = useCallback((next: Filters) => {
    edit((p) => {
      writeFilters(p, next);
      // A row the new filters hide is closed, so the address never names an entry that is not on screen.
      const kept = buildLineup(readFilters(p)).rowOf;
      const ids = p.getAll("e");
      p.delete("e");
      for (const id of ids) if (kept.has(id)) p.append("e", id);
    });
  }, [edit]);
  const clearFilters = useCallback(() => setFilters(NO_FILTERS), [setFilters]);

  const toggleRow = useCallback((rowId: string) => {
    edit((p) => {
      const { rowOf } = latest.current.line;
      const ids = p.getAll("e");
      const mine = ids.filter((id) => rowOf.get(id) === rowId);
      p.delete("e");
      for (const id of ids) if (!mine.includes(id)) p.append("e", id);
      if (!mine.length) p.append("e", rowId);
    });
  }, [edit]);

  const goToEra = useCallback((id: string) => {
    edit((p) => { p.delete("era"); p.append("era", id); });
    const el = document.getElementById(`era-${id}`);
    if (!el) return;
    el.scrollIntoView({ block: "start", behavior: "instant" });
    el.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
  }, [edit]);

  const setView = (v: View) => edit((p) => { if (v === "locations") p.set("view", v); else p.delete("view"); });

  /* ── Landing on what a link points at ─────────────────────────────────────────── */
  const want = landing(sp);
  const arrived = useRef(false);
  useLayoutEffect(() => {
    const first = !arrived.current;
    arrived.current = true;
    if (want === asked.current) return;
    asked.current = want;
    if (view !== "events" || !want) return;
    const [kind, id] = [want.slice(0, want.indexOf(":")), want.slice(want.indexOf(":") + 1)];
    const el = document.getElementById(kind === "era" ? `era-${id}` : line.rowOf.get(id) ?? "");
    // On arrival the shell may be restoring the reader's place (Back, reload): it has already moved the page, so leave it.
    if (!el || (first && window.scrollY > 1)) return;
    return landOn(el);
  }, [want, view, line]);

  // Leaving the Locations view by choosing a place: start at the top of the line, and keep focus on the page.
  const lastView = useRef(view);
  useEffect(() => {
    if (lastView.current === view) return;
    lastView.current = view;
    if (bar.current && bar.current.getBoundingClientRect().top < 0 && !want) bar.current.scrollIntoView({ block: "start", behavior: "instant" });
    if (!document.activeElement || document.activeElement === document.body) panel.current?.focus({ preventScroll: true });
  }, [view, want]);

  /* ── What to render ───────────────────────────────────────────────────────────── */
  const entries: EraEntry[] = line.groups.filter((g) => g.era.id).map((g) => ({
    id: g.era.id, n: g.index + 1, name: g.era.name, range: g.era.range, count: g.rows.length, on: !filtered || g.rows.length > 0, hue: eraHue(g.era.id),
  }));
  const sections = line.groups.filter((g) => g.rows.length > 0 || (!filtered && g.era.id));
  const applied = filtered || (filtersOpen && !phone);
  const linked = want.startsWith("e:") ? want.slice(2) : "";
  const lost = view === "events" && linked && !line.rowOf.has(linked) ? linked : "";
  const locationsTo = useMemo(() => { const p = new URLSearchParams(sp); p.set("view", "locations"); return p; }, [sp]);
  const nApplied = [f.layer !== "all", f.support.length > 0, !!f.person, !!f.source, f.cause.length > 0, !!f.killer, !!f.place].filter(Boolean).length;

  return (
    <Page title="Timeline" className="tl-page">
      <PageHeader title="Timeline" lede={`The story in order: ${TOTAL_EVENTS} events and ${TOTAL_DEATHS} recorded deaths across ${inWords(eras.length)} eras.`}>
        <p className="tl-caveat">Where the games print no date, an entry is placed by what it follows. That position is a convention, not a claim about the year.</p>
      </PageHeader>

      <div className="tl-bar" ref={bar}>
        <Tabs tabs={VIEWS} value={view} onChange={setView} label="Views of the timeline" />
        <div className="tl-bar__tools">
          <MarksKey />
          <button
            ref={filtersBtn}
            type="button"
            className={`btn btn--sm tl-bar__filters${nApplied ? " on" : ""}`}
            aria-expanded={filtersOpen}
            aria-controls={phone ? undefined : "tl-filter-panel"}
            aria-haspopup={phone ? "dialog" : undefined}
            onClick={() => setFiltersOpen((o) => !o)}
          >
            <Icon icon={SlidersHorizontal} /> Filters
            {nApplied > 0 && <span className="tl-bar__count">{nApplied}<span className="sr-only"> applied</span></span>}
          </button>
        </div>
      </div>

      {filtersOpen && !phone && (
        <div className="tl-panel" id="tl-filter-panel" role="group" aria-label="Filters">
          <FilterPanel f={f} set={setFilters} locationsTo={locationsTo} />
        </div>
      )}
      {filtersOpen && phone && <FilterSheet f={f} set={setFilters} line={line} onClear={clearFilters} onClose={() => setFiltersOpen(false)} locationsTo={locationsTo} />}
      {applied && <AppliedSummary f={f} line={line} set={setFilters} onClear={clearFilters} focusAfter={filtersBtn} onDone={filtersOpen && !phone ? () => setFiltersOpen(false) : undefined} />}
      <p className="sr-only" role="status">{filtered ? `Showing ${countPhrase(line, f)}.` : ""}</p>

      {view === "events" ? (
        <div className="tl-events" role="tabpanel" aria-label="Events" tabIndex={-1} ref={panel}>
          {wide ? <EraRail entries={entries} sp={sp} onGo={goToEra} /> : <EraBar entries={entries} sp={sp} onGo={goToEra} />}
          <div className="tl-line">
            {lost && (
              <p className="tl-notice" role="status">
                {kindOfId(lost)
                  ? <>The entry this link points to is hidden by the filters in the link. <Button size="sm" onClick={() => { clearFilters(); asked.current = null; }}>Clear the filters and show it</Button></>
                  : <>This link points to an entry that is not on the timeline. It may have been renamed. <Button size="sm" onClick={() => edit((p) => { const ids = p.getAll("e").filter((id) => id !== lost); p.delete("e"); for (const id of ids) p.append("e", id); })}>Dismiss</Button></>}
              </p>
            )}
            {sections.map((g) => <EraSection key={g.era.id || "unplaced"} g={g} total={eras.length} open={open} marks={marks} onToggle={toggleRow} />)}
            {sections.length === 0 && (
              <Empty title="Nothing on the line matches these filters" action={<Button onClick={clearFilters}>Clear all filters</Button>}>
                No story event or death fits every filter at once.
              </Empty>
            )}
          </div>
        </div>
      ) : (
        <div className="tl-places" role="tabpanel" aria-label="Locations" tabIndex={-1} ref={panel}>
          <LocationsView f={f} sp={sp} />
        </div>
      )}
    </Page>
  );
}
