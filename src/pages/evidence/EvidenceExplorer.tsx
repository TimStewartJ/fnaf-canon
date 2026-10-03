import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { evidence, games } from "../../data/store";
import { Button, Empty, EvidenceCard, GameMark, Page, PageHeader, SearchField, Segmented, useMediaQuery } from "../../components/ui";
import { count, records } from "./coverage";
import { PAGE, appliedCount, limitOf, parseQuery, runQuery, termsOf, toParams, type Group, type Query, type Sort, type View } from "./explorerState";
import { AppliedChips, Facets, FilterSheet, ResultRow, type FacetActions, type FacetOptions } from "./explorerParts";
import "./evidence.css";

/** What the archive holds, worked out once: the options of the three open filters. */
const OPTIONS: FacetOptions = {
  sources: games.filter((g) => evidence.some((e) => e.game === g.id)).map((g) => g.id),
  kinds: [...new Set(evidence.map((e) => e.kind))],
  certs: [...new Set(evidence.map((e) => e.certainty))],
};

const ORDER: Record<Sort, string> = { match: "best match first", time: "in order of in-universe time", game: "by source, in release order" };
const VIEWS: { id: View; label: string }[] = [{ id: "rows", label: "Rows" }, { id: "cards", label: "Cards" }];

/** How long the search box waits after the last keystroke before it writes the URL. */
const URL_DELAY = 350;

function GroupHead({ g }: { g: Group }) {
  return (
    <h3 className="evx-group">
      <span className="evx-group__name">{g.kind === "game" ? <GameMark id={g.key} variant="full" link /> : g.label}</span>
      <span className="evx-group__n">{records(g.total)}</span>
    </h3>
  );
}

export default function EvidenceExplorer() {
  const [sp, setSp] = useSearchParams();
  const current = sp.toString();
  const parsed = useMemo(() => parseQuery(sp), [sp]);
  const wide = useMediaQuery("(min-width: 1080px)");
  const [sheet, setSheet] = useState(false);

  // The URL is the state, but the router applies a change a moment after it is asked to. So a
  // control answers from `ahead` (what was just asked for) until the URL says the same, or says
  // something else again (Back, a link from a record), in which case the URL wins.
  const [ahead, setAhead] = useState<{ query: Query; key: string; from: string[] } | null>(null);
  const waiting = ahead !== null && current !== ahead.key && ahead.from.includes(current);
  if (ahead && !waiting) setAhead(null);
  const query = waiting ? ahead.query : parsed;

  // The search box is one step further ahead: results follow every keystroke, and the URL is
  // written once typing pauses. A draft is dropped as soon as the URL holds it, or moves elsewhere.
  const [draft, setDraft] = useState<{ text: string; base: string } | null>(null);
  const drafting = draft !== null && draft.base === query.q && draft.text !== query.q;
  if (draft && !drafting) setDraft(null);
  const text = drafting ? draft.text : query.q;

  const write = (patch: Partial<Query>) => {
    const next: Query = { ...query, q: text, n: null, ...patch };
    const key = toParams(next).toString();
    if (key === current && !waiting) return;
    setAhead({ query: next, key, from: waiting ? [...ahead.from, ahead.key] : [current] });
    setSp(toParams(next), { replace: true });
  };
  const latestWrite = useRef(write);
  useEffect(() => { latestWrite.current = write; });
  useEffect(() => {
    if (!drafting) return;
    const t = window.setTimeout(() => latestWrite.current({}), URL_DELAY);
    return () => window.clearTimeout(t);
  }, [drafting, text]);

  const live = useDeferredValue(text);
  const terms = useMemo(() => termsOf(live), [live]);
  const outcome = useMemo(() => runQuery(query, live), [query, live]);
  const searching = terms.length > 0;

  const actions: FacetActions = {
    toggle(key, id) {
      const now = query[key] as string[];
      write({ [key]: now.includes(id) ? now.filter((x) => x !== id) : [...now, id] });
    },
    set(patch) {
      if (patch.q !== undefined) setDraft(null);
      write(patch);
    },
  };
  const NO_FILTERS: Partial<Query> = { game: [], kind: [], cert: [], use: [], tag: "", entity: "", img: false };
  const clearFilters = () => write(NO_FILTERS);
  const clearAll = () => { setDraft(null); write({ ...NO_FILTERS, q: "" }); };

  const limit = limitOf(query);
  const { results, total } = outcome;
  const shown = useMemo(() => results.slice(0, limit), [results, limit]);
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

  // After "show more", focus moves to the first of the new records instead of staying on the button.
  const listRef = useRef<HTMLDivElement | null>(null);
  const focusAt = useRef<number | null>(null);
  useEffect(() => {
    const i = focusAt.current;
    focusAt.current = null;
    if (i != null) listRef.current?.querySelectorAll<HTMLElement>(".evx-row__title, .ev-card__title a")[i]?.focus({ preventScroll: true });
  }, [limit]);

  const filters = appliedCount({ ...query, q: "" });
  const filtered = filters > 0 || text.trim() !== "";
  const facets = <Facets query={query} outcome={outcome} searching={searching} actions={actions} options={OPTIONS} />;
  const step = PAGE[query.view];
  const rest = results.length - shown.length;

  return (
    <Page title="Evidence locker" className="evx">
      <PageHeader
        kicker="Evidence"
        title="Evidence locker"
        lede="Every record is one fact, pinned to an exact spot in a game or in Scott’s own words. Nothing here is a theory."
      />
      <div className="evx-top" role="search" aria-label="Search and filter the evidence">
        <SearchField className="evx-search" label="Search the evidence: titles, claims, quotes, locations and ids" placeholder="Search claims, quotes, locations, ids" value={text} onChange={(v) => setDraft({ text: v, base: query.q })} />
        {!wide && (
          <Button icon={SlidersHorizontal} className="evx-filters-btn" aria-haspopup="dialog" onClick={() => setSheet(true)}>
            Filters{filters > 0 && <span className="evx-badge">{filters}<span className="sr-only"> in use</span></span>}
          </Button>
        )}
        <Segmented label="Show results as" options={VIEWS} value={query.view} onChange={(view) => write({ view })} />
      </div>

      <div className="evx-layout">
        {wide && <aside className="evx-rail" aria-label="Filters">{facets}</aside>}
        <section className="evx-main" aria-label="Results">
          <div className="evx-summary">
            <p className="evx-count" role="status">
              {filtered ? <><strong>{count(results.length)}</strong> of {count(total)} records</> : <><strong>{count(total)}</strong> records</>}
              {results.length > 1 && <span className="evx-count__order">, {ORDER[outcome.sort]}</span>}
            </p>
            <AppliedChips query={query} text={text} sort={outcome.sort} searching={searching} actions={actions} />
            {filtered && <Button variant="quiet" size="sm" className="evx-clear" onClick={clearAll}>Clear all</Button>}
          </div>

          <h2 className="sr-only">Results</h2>
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
          {rest > 0 && (
            <p className="evx-next">
              <Button onClick={() => { focusAt.current = shown.length; write({ n: shown.length + step }); }}>Show {count(Math.min(step, rest))} more</Button>
              <span className="evx-next__note">{count(shown.length)} of {count(results.length)} shown</span>
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
          {facets}
        </FilterSheet>
      )}
    </Page>
  );
}
