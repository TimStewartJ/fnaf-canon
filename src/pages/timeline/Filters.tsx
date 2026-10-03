import type { RefObject } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import {
  Button, DEATH_KIND_ICON, DeathIcon, FilterBar, FilterChip, FilterGroup, GameMark, Icon, IconButton, STATUS, Segmented, smartQuotes, useModalDialog,
} from "../../components/ui";
import {
  type Filters, type Layer, type Lineup, DEATH_KINDS, STATUSES, appliedFilters, causeLabel, countPhrase, isDescriptor, killerName, killerOptions,
  personName, personOptions, placeName, placeOptions, sourceOptions, toggleIn, within,
} from "./model";

const LAYERS: { id: Layer; label: string }[] = [
  { id: "all", label: "Both" },
  { id: "events", label: "Story events" },
  { id: "deaths", label: "Deaths" },
];

function PersonLabel({ id }: { id: string }) {
  const name = smartQuotes(personName(id));
  return isDescriptor(id) ? <span className="name-desc">{name}</span> : <>{name}</>;
}

/**
 * Every filter of the timeline. They all narrow the same line and all live in the URL.
 *  - set          replaces the filters
 *  - locationsTo  the search parameters of the Locations view, for the link beside the place list
 *  - bare         the groups without the panel around them (the sheet is the panel)
 */
export function FilterPanel({ f, set, locationsTo, bare = false }: { f: Filters; set: (next: Filters) => void; locationsTo: URLSearchParams; bare?: boolean }) {
  const people = f.person && !personOptions.includes(f.person) ? [...personOptions, f.person] : personOptions;
  const sources = f.source && !sourceOptions.includes(f.source) ? [...sourceOptions, f.source] : sourceOptions;
  const support = f.support.length ? f.support : STATUSES;
  const cause = f.cause.length ? f.cause : DEATH_KINDS;
  const groups = (
    <>
      <FilterGroup label="Show">
        <Segmented options={LAYERS} value={f.layer} onChange={(layer) => set({ ...f, layer })} label="What the line shows" />
      </FilterGroup>
      <FilterGroup label="Person">
        <FilterChip on={!f.person} onClick={() => set({ ...f, person: "" })}>Everyone</FilterChip>
        {people.map((id) => (
          <FilterChip key={id} on={f.person === id} onClick={() => set({ ...f, person: f.person === id ? "" : id })}><PersonLabel id={id} /></FilterChip>
        ))}
      </FilterGroup>
      <FilterGroup label="Place">
        <select value={f.place} onChange={(e) => set({ ...f, place: e.target.value })} aria-label="Place">
          <option value="">Everywhere</option>
          {f.place && !placeOptions.some((p) => p.id === f.place) && <option value={f.place}>{smartQuotes(placeName(f.place))}</option>}
          {placeOptions.map((p) => <option key={p.id} value={p.id}>{smartQuotes(p.name)}</option>)}
        </select>
        <Link className="tl-filters__more" to={within(locationsTo)}>See every place across the eras</Link>
      </FilterGroup>
      <FilterGroup label="Support">
        {STATUSES.map((s) => (
          <FilterChip key={s} on={support.includes(s)} onClick={() => set({ ...f, support: toggleIn(STATUSES, f.support, s) })} title={STATUS[s].help}>{STATUS[s].word}</FilterChip>
        ))}
      </FilterGroup>
      <FilterGroup label="Source">
        <FilterChip on={!f.source} onClick={() => set({ ...f, source: "" })}>All</FilterChip>
        {sources.map((g) => (
          <FilterChip key={g} on={f.source === g} onClick={() => set({ ...f, source: f.source === g ? "" : g })}><GameMark id={g} /></FilterChip>
        ))}
      </FilterGroup>
      {f.layer !== "events" && (
        <>
          <FilterGroup label="Cause of death">
            {DEATH_KINDS.map((k) => (
              <FilterChip key={k} on={cause.includes(k)} onClick={() => set({ ...f, cause: toggleIn(DEATH_KINDS, f.cause, k) })}>
                <Icon icon={DEATH_KIND_ICON[k] ?? DeathIcon} /> {causeLabel(k)}
              </FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Killer">
            <FilterChip on={!f.killer} onClick={() => set({ ...f, killer: "" })}>Anyone</FilterChip>
            {killerOptions.map(({ key, n }) => (
              <FilterChip key={key} on={f.killer === key} count={n} onClick={() => set({ ...f, killer: f.killer === key ? "" : key })}>
                {key !== "unknown" && isDescriptor(key) ? <span className="name-desc">{smartQuotes(killerName(key))}</span> : smartQuotes(killerName(key))}
              </FilterChip>
            ))}
          </FilterGroup>
        </>
      )}
    </>
  );
  return bare ? <div className="tl-filters tl-filters--bare">{groups}</div> : <FilterBar className="tl-filters">{groups}</FilterBar>;
}

/** The filter panel as a bottom sheet, for a phone. The line updates behind it; the foot says what is left. */
export function FilterSheet({ f, set, line, onClear, onClose, locationsTo }: { f: Filters; set: (next: Filters) => void; line: Lineup; onClear: () => void; onClose: () => void; locationsTo: URLSearchParams }) {
  const dialogProps = useModalDialog(true, onClose);
  const n = appliedFilters(f).length;
  return (
    <dialog className="tl-sheet tl-sheet--filters" aria-label="Filters" {...dialogProps}>
      <header className="tl-sheet__bar">
        <span className="tl-sheet__title">Filters</span>
        <IconButton icon={X} label="Close" onClick={onClose} autoFocus />
      </header>
      <div className="tl-sheet__body">
        <FilterPanel f={f} set={set} locationsTo={locationsTo} bare />
      </div>
      <footer className="tl-sheet__foot">
        <p className="tl-sheet__count">Showing <strong>{countPhrase(line, f)}</strong></p>
        <Button variant="quiet" onClick={onClear} disabled={n === 0}>Clear all</Button>
        <Button variant="primary" onClick={onClose}>Done</Button>
      </footer>
    </dialog>
  );
}

/**
 * What is applied, in plain words: how much of the line is showing, each filter as a phrase that can
 * be removed on its own, and a way to clear them all. The count is a live region, so a change is
 * announced; it stays in the page (for a screen reader only) while nothing is applied.
 *  - idle        nothing is applied and the panel is closed: keep the count, hide the rest
 *  - focusAfter  where focus goes when the button that was pressed disappears with its filter
 *  - onDone      closes the panel above it (given only while that panel is open)
 */
export function AppliedSummary({ f, line, set, onClear, idle, focusAfter, onDone }: { f: Filters; line: Lineup; set: (next: Filters) => void; onClear: () => void; idle: boolean; focusAfter: RefObject<HTMLElement | null>; onDone?: () => void }) {
  const applied = appliedFilters(f);
  const then = (act: () => void) => () => { act(); focusAfter.current?.focus({ preventScroll: true }); };
  return (
    <div className={`tl-applied${idle ? " sr-only" : ""}`}>
      <p className="tl-applied__count" role="status">Showing <strong>{countPhrase(line, f)}</strong></p>
      {applied.length > 0 && (
        <ul className="tl-applied__list" aria-label="Filters applied">
          {applied.map((a) => (
            <li key={a.key}>
              <button type="button" className="tl-applied__chip" onClick={then(() => set(a.without))} aria-label={`Remove the filter: ${a.text}`} title="Remove this filter">
                <span>{smartQuotes(a.text)}</span><Icon icon={X} />
              </button>
            </li>
          ))}
        </ul>
      )}
      {!idle && (
        <span className="tl-applied__acts">
          {applied.length > 0 && <Button variant="quiet" size="sm" onClick={then(onClear)}>Clear all</Button>}
          {onDone && <Button size="sm" onClick={then(onDone)}>Done</Button>}
        </span>
      )}
    </div>
  );
}
