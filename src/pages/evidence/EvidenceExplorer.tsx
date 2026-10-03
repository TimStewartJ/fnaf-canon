import { useCallback, useDeferredValue, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { evidence, games } from "../../data/store";
import { Button, Empty, EvidenceCard, GameMark, Page, PageHeader, SearchField, Segmented, useAddress, useAddressText, useMediaQuery } from "../../components/ui";
import { count, records } from "./coverage";
import { MOST, PAGE, appliedCount, limitOf, parseQuery, runQuery, termsOf, toParams, type Group, type Query, type Sort, type View } from "./explorerState";
import { AppliedChips, Facets, FilterSheet, ResultRow, type FacetActions, type FacetOptions } from "./explorerParts";
import "./evidence.css";

/** What the archive holds, worked out once: the options of the three open filters. */
const USED = new Set<string>(evidence.map((e) => e.game));
const OPTIONS: FacetOptions = {
  // Release order; a source the store's list does not name (it should not happen) still gets its option, last.
  sources: [...games.map((g) => g.id as string).filter((id) => USED.has(id)), ...[...USED].filter((id) => !games.some((g) => g.id === id)).sort()],
  kinds: [...new Set(evidence.map((e) => e.kind))],
  certs: [...new Set(evidence.map((e) => e.certainty))],
};

const ORDER: Record<Sort, string> = { match: "best match first", time: "in order of in-universe time", game: "by source, in release order" };
const VIEWS: { id: View; label: string }[] = [{ id: "rows", label: "Rows" }, { id: "cards", label: "Cards" }];

/** How long the search box waits after the last keystroke before it writes the address. */
const URL_DELAY = 350;
/** Puts `query` into the address, as this page always writes it: its own parameters, in one order. */
function put(p: URLSearchParams, query: Query): void {
  const next = toParams(query);
  for (const name of [...p.keys()]) p.delete(name);
  next.forEach((value, name) => p.append(name, value));
}
/** New words are a new question: the list starts again from its top. */
const TYPED = { after: URL_DELAY, also: (p: URLSearchParams) => put(p, { ...parseQuery(p), n: null, from: 0 }) };

function GroupHead({ g }: { g: Group }) {
  return (
    <h3 className={`evx-group${g.kind === "game" ? " evx-group--game" : ""}`}>
      <span className="evx-group__name">{g.kind === "game" ? <GameMark id={g.key} variant="full" link /> : g.label}</span>
      <span className="evx-group__n">{records(g.total)}</span>
    </h3>
  );
}

export default function EvidenceExplorer() {
  // The query lives in the address (see components/address.ts): a change is written there and drawn
  // at once. The search box answers every keystroke; its words reach the address, and the query,
  // once typing pauses, and the results follow the box in the meantime (`live`, below).
  const { params, write } = useAddress();
  const [text, setText] = useAddressText("q", TYPED);
  const query = useMemo(() => parseQuery(params), [params]);
  const wide = useMediaQuery("(min-width: 1080px)");
  const phone = useMediaQuery("(max-width: 640px)");
  const [sheet, setSheet] = useState(false);

  /**
   * Changes the query. It works from the address as it is when it runs, words still being typed
   * included, so two quick changes both count. Any change starts the list again from its top,
   * unless it is to the list's own extent.
   */
  const update = useCallback((patch: Partial<Query> | ((q: Query) => Partial<Query>)) => {
    write((p) => {
      const now = parseQuery(p);
      put(p, { ...now, n: null, from: 0, ...(typeof patch === "function" ? patch(now) : patch) });
    });
  }, [write]);

  const drafting = text !== query.q;

  const live = useDeferredValue(text);
  const terms = useMemo(() => termsOf(live), [live]);
  const outcome = useMemo(() => runQuery(query, live), [query, live]);
  const searching = terms.length > 0;

  // Stable, so the filter rail (memoised) is not redrawn for a keystroke that has not reached the results yet.
  const actions = useMemo<FacetActions>(() => ({
    toggle(key, id) {
      update((q) => {
        const now = q[key] as string[];
        return { [key]: now.includes(id) ? now.filter((x) => x !== id) : [...now, id] };
      });
    },
    set: update,
  }), [update]);
  const NO_FILTERS: Partial<Query> = { game: [], kind: [], cert: [], use: [], tag: "", entity: "", img: false };
  const clearFilters = () => update(NO_FILTERS);
  const clearAll = () => update({ ...NO_FILTERS, q: "" });

  // What is drawn: a stretch of the results, never longer than MOST. Typing starts again from the top at once.
  const { results, total } = outcome;
  const step = PAGE[query.view];
  const size = drafting ? step : limitOf(query);
  const start = drafting ? 0 : query.from < results.length ? query.from : Math.max(0, results.length - size);
  const shown = useMemo(() => results.slice(start, start + size), [results, start, size]);
  const end = start + shown.length;
  const rest = results.length - end;
  const group = useMemo(() => shown.map((e) => e.id), [shown]);
  const sections = useMemo(() => {
    const out: { g: Group | null; items: Evidence[] }[] = [];
    for (const e of shown) {
      const g = outcome.groupOf?.(e) ?? null;
      const last = out[out.length - 1];
      if (last && last.g === g) last.items.push(e);
      else out.push({ g, items: [e] });
    }
    return out;
  }, [shown, outcome]);

  // After "show more" or "show earlier": focus moves to the first of the new records, and when
  // records were let go above the reader, the page is moved by exactly their height so that what
  // the reader was looking at stays where it is (the browser's own scroll anchoring is switched
  // off for the list in evidence.css, so this is the only thing that moves the page).
  const listRef = useRef<HTMLDivElement | null>(null);
  const focusAt = useRef<number | null>(null);
  const hold = useRef<{ at: number; top: number } | null>(null);
  const drawn = () => [...(listRef.current?.querySelectorAll<HTMLElement>(".evx-row, .ev-card") ?? [])];
  useLayoutEffect(() => {
    const els = drawn();
    const h = hold.current;
    hold.current = null;
    const kept = h ? els[h.at - start] : undefined;
    if (h && kept) window.scrollBy(0, kept.getBoundingClientRect().top - h.top);
    const f = focusAt.current;
    focusAt.current = null;
    if (f != null) els[f - start]?.querySelector<HTMLElement>(".evx-row__title, .ev-card__title a")?.focus({ preventScroll: true });
  }, [start, size, query.view]);
  const showMore = () => {
    const add = Math.min(step, rest);
    const drop = Math.max(0, shown.length + add - MOST[query.view]);
    const els = drawn();
    if (drop && els.length) hold.current = { at: end - 1, top: els[els.length - 1].getBoundingClientRect().top };
    focusAt.current = end;
    update({ from: start + drop, n: shown.length + add - drop });
  };
  const showEarlier = () => {
    const add = Math.min(step, start);
    focusAt.current = start - add;
    update({ from: start - add, n: Math.min(MOST[query.view], shown.length + add) });
  };

  const filters = appliedCount({ ...query, q: "" });
  const filtered = filters > 0 || text.trim() !== "";
  const facets = (skip: boolean) => <Facets query={query} outcome={outcome} searching={searching} actions={actions} options={OPTIONS} skipTo={skip ? "evx-results" : undefined} />;
  const viewSwitch = <Segmented label="Show results as" options={VIEWS} value={query.view} onChange={(view) => update({ view })} />;
  const span = `${start > 0 ? `${count(start + 1)}–${count(end)}` : count(end)} of ${count(results.length)} shown`;

  return (
    <Page title="Evidence locker" className="evx-explorer">
      <PageHeader
        kicker="Evidence"
        title="Evidence locker"
        lede="Every record is one fact, pinned to an exact spot in a game or in Scott’s own words. Nothing here is a theory."
      />
      <div className="evx-top" role="search" aria-label="Search and filter the evidence">
        <SearchField className="evx-search" label="Search the evidence: titles, claims, quotes, locations and ids" placeholder="Search claims, quotes, locations, ids" value={text} onChange={setText} />
        {!wide && (
          <Button icon={SlidersHorizontal} className="evx-filters-btn" aria-haspopup="dialog" onClick={() => setSheet(true)}>
            Filters{filters > 0 && <span className="evx-badge">{filters}<span className="sr-only"> in use</span></span>}
          </Button>
        )}
      </div>

      <div className="evx-layout">
        {wide && <aside className="evx-rail" aria-label="Filters">{facets(true)}</aside>}
        <section className="evx-main" id="evx-results" tabIndex={-1} aria-label="Results">
          <div className="evx-summary">
            <p className="evx-count" role="status">
              {filtered ? <><strong>{count(results.length)}</strong> of {count(total)} records</> : <><strong>{count(total)}</strong> records</>}
              {results.length > 1 && <span className="evx-count__order">, {ORDER[outcome.sort]}</span>}
            </p>
            {!phone && viewSwitch}
          </div>
          <AppliedChips
            query={query} text={text} sort={outcome.sort} searching={searching} actions={actions}
            after={<Button variant="quiet" size="sm" className="evx-clear" onClick={clearAll}>Clear all</Button>}
          />

          <h2 className="sr-only">Results</h2>
          {start > 0 && (
            <p className="evx-next evx-next--earlier">
              <Button size="sm" onClick={showEarlier}>Show {count(Math.min(step, start))} earlier</Button>
              <span className="evx-next__note">{count(start)} before these</span>
            </p>
          )}
          {results.length === 0 ? (
            <Empty title="No records match" action={<Button onClick={clearAll}>Clear all filters</Button>}>
              {text.trim() && filters > 0 ? "Try fewer filters, or a different word." : text.trim() ? "Try a different word, or fewer words." : "No record fits every filter that is set. Remove one to widen the search."}
            </Empty>
          ) : (
            <div ref={listRef} className={`evx-results evx-results--${query.view}`}>
              {sections.map(({ g, items }) => (
                <div key={g?.key ?? "all"} className="evx-section">
                  {g && <GroupHead g={g} />}
                  {query.view === "cards"
                    ? <div className="ev-grid">{items.map((e) => <EvidenceCard key={e.id} e={e} group={group} />)}</div>
                    : <ul className="evx-list">{items.map((e) => <ResultRow key={e.id} e={e} group={group} terms={terms} />)}</ul>}
                </div>
              ))}
            </div>
          )}
          {(rest > 0 || start > 0) && (
            <p className="evx-next">
              {rest > 0 && <Button onClick={showMore}>Show {count(Math.min(step, rest))} more</Button>}
              <span className="evx-next__note">{span}</span>
            </p>
          )}
        </section>
      </div>

      {!wide && sheet && (
        <FilterSheet
          onClose={() => setSheet(false)}
          foot={<>
            <Button variant="primary" onClick={() => setSheet(false)}>Show {records(results.length)}</Button>
            {filters > 0 && <Button variant="quiet" onClick={clearFilters}>Clear filters</Button>}
          </>}
        >
          {facets(false)}
          {/* On a phone the list's header has no room for the view switch, so it lives here. */}
          {phone && <div className="evx-sheet__view"><span className="evx-facet__label">Show results as</span>{viewSwitch}</div>}
        </FilterSheet>
      )}
    </Page>
  );
}
