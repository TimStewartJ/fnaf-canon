import { useCallback, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { evidence, games } from "../../data/store";
import { Button, Empty, EvidenceCard, GameMark, Page, PageHeader, SearchField, Segmented, useDrawerRecord, useMediaQuery } from "../../components/ui";
import { count, records } from "./coverage";
import { MOST, PAGE, appliedCount, limitOf, parseQuery, runQuery, termsOf, toParams, type Group, type Query, type Sort, type View } from "./explorerState";
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

/**
 * The explorer answers from its own state at once and keeps the address in step with it. (The
 * router applies a change a moment after it is asked to, and the search box only writes once typing
 * pauses.) When the address changes to something this page did not write itself, such as Back or a
 * link inside a record, the address wins.
 */
interface Local {
  query: Query;
  /** What the search box holds: ahead of query.q while the reader is typing. */
  text: string;
  /** The address this state was last reconciled with. */
  url: string;
  /** Addresses this page has asked for and not yet seen. */
  sent: string[];
}
function fromAddress(sp: URLSearchParams, url: string): Local {
  const query = parseQuery(sp);
  return { query, text: query.q, url, sent: [] };
}
/** An address as this page would write it, so an old or hand-typed link is not rewritten just for its spelling. */
const canonical = (url: string): string => toParams(parseQuery(new URLSearchParams(url))).toString();

/**
 * Writes the wanted address. It is a component of its own because it watches the evidence drawer,
 * and so re-renders whenever the drawer opens or closes, which the page with its long list must
 * not. The drawer lives in the current history entry: rewriting that entry while the drawer is open
 * would close it. A change made just before a record was opened is written when the drawer closes.
 */
function AddressWriter({ want, url, sent, onSent }: { want: string; url: string; sent: string[]; onSent: (key: string) => void }) {
  const [, setSp] = useSearchParams();
  const drawerOpen = useDrawerRecord() !== null;
  useEffect(() => {
    if (drawerOpen || want === canonical(url) || sent.includes(want)) return;
    onSent(want);
    setSp(new URLSearchParams(want), { replace: true });
  }, [drawerOpen, want, url, sent, onSent, setSp]);
  return null;
}

function GroupHead({ g }: { g: Group }) {
  return (
    <h3 className={`evx-group${g.kind === "game" ? " evx-group--game" : ""}`}>
      <span className="evx-group__name">{g.kind === "game" ? <GameMark id={g.key} variant="full" link /> : g.label}</span>
      <span className="evx-group__n">{records(g.total)}</span>
    </h3>
  );
}

export default function EvidenceExplorer() {
  const [sp] = useSearchParams();
  const url = sp.toString();
  const wide = useMediaQuery("(min-width: 1080px)");
  const [sheet, setSheet] = useState(false);

  const [local, setLocal] = useState<Local>(() => fromAddress(sp, url));
  if (url !== local.url) {
    // The echo of this page's own write only moves the bookmark; anything else replaces the state.
    const echo = local.sent.indexOf(url);
    setLocal(echo >= 0 ? { ...local, url, sent: local.sent.slice(echo + 1) } : fromAddress(sp, url));
  }
  const { query, text } = local;

  /** Changes the query. Any change starts the list again from its top, unless it is to the list's own extent. */
  const update = useCallback((patch: Partial<Query> | ((q: Query) => Partial<Query>)) => {
    setLocal((l) => {
      const p = typeof patch === "function" ? patch(l.query) : patch;
      return { ...l, text: p.q ?? l.text, query: { ...l.query, q: l.text, n: null, from: 0, ...p } };
    });
  }, []);
  const onSent = useCallback((key: string) => setLocal((l) => ({ ...l, sent: [...l.sent.slice(-7), key] })), []);

  // Results follow every keystroke; the query (and with it the address) takes the words once typing pauses.
  const drafting = text !== query.q;
  useEffect(() => {
    if (!drafting) return;
    const t = window.setTimeout(() => update({}), URL_DELAY);
    return () => window.clearTimeout(t);
  }, [drafting, text, update]);

  const live = useDeferredValue(text);
  const terms = useMemo(() => termsOf(live), [live]);
  const outcome = useMemo(() => runQuery(query, live), [query, live]);
  const searching = terms.length > 0;

  const actions: FacetActions = {
    toggle(key, id) {
      update((q) => {
        const now = q[key] as string[];
        return { [key]: now.includes(id) ? now.filter((x) => x !== id) : [...now, id] };
      });
    },
    set: update,
  };
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
  const span = `${start > 0 ? `${count(start + 1)}–${count(end)}` : count(end)} of ${count(results.length)} shown`;

  return (
    <Page title="Evidence locker" className="evx">
      <AddressWriter want={toParams(query).toString()} url={local.url} sent={local.sent} onSent={onSent} />
      <PageHeader
        kicker="Evidence"
        title="Evidence locker"
        lede="Every record is one fact, pinned to an exact spot in a game or in Scott’s own words. Nothing here is a theory."
      />
      <div className="evx-top" role="search" aria-label="Search and filter the evidence">
        <SearchField className="evx-search" label="Search the evidence: titles, claims, quotes, locations and ids" placeholder="Search claims, quotes, locations, ids" value={text} onChange={(v) => setLocal((l) => ({ ...l, text: v }))} />
        {!wide && (
          <Button icon={SlidersHorizontal} className="evx-filters-btn" aria-haspopup="dialog" onClick={() => setSheet(true)}>
            Filters{filters > 0 && <span className="evx-badge">{filters}<span className="sr-only"> in use</span></span>}
          </Button>
        )}
        <Segmented label="Show results as" options={VIEWS} value={query.view} onChange={(view) => update({ view })} />
      </div>

      <div className="evx-layout">
        {wide && <aside className="evx-rail" aria-label="Filters">{facets(true)}</aside>}
        <section className="evx-main" id="evx-results" tabIndex={-1} aria-label="Results">
          <div className="evx-summary">
            <p className="evx-count" role="status">
              {filtered ? <><strong>{count(results.length)}</strong> of {count(total)} records</> : <><strong>{count(total)}</strong> records</>}
              {results.length > 1 && <span className="evx-count__order">, {ORDER[outcome.sort]}</span>}
            </p>
            <AppliedChips query={query} text={text} sort={outcome.sort} searching={searching} actions={actions} />
            {filtered && <Button variant="quiet" size="sm" className="evx-clear" onClick={clearAll}>Clear all</Button>}
          </div>

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
        </FilterSheet>
      )}
    </Page>
  );
}
