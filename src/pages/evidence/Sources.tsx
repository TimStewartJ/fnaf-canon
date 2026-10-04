import { useEffect, useMemo, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { evidence, gameById, games } from "../../data/store";
import {
  Button, ButtonLink, Empty, FilterChip, GameMark, Icon, Missing, Page, PageHeader, sourceKindIcon, Section, isRelease, kindLabel, listParam, longDate, smartQuotes, sourcePath,
} from "../../components/ui";
import { useAddressState } from "./addressState";
import { PLACE, PLACES, accounted, count, isPlace, percent, placeOf, records, tally, type Place } from "./coverage";
import { PlaceSwatch, ResultRow } from "./explorerParts";
import { Accounted, CoverageBar, CoverageKey, SetIn } from "./sourceParts";
import { byKind, hasSetIn, recordsOf } from "./sourceModel";
import "./sources.css";

const NO_TERMS: string[] = [];
/**
 * Records of one kind shown on a source page before "show more", how many each press adds, and the
 * most a kind ever lists here. Past that the evidence locker takes over (same rows, with search and
 * filters), so this page stays a bounded length however many records a source collects.
 */
const FOLD = 5;
const STEP = 25;
const MOST = FOLD + 2 * STEP;

const lockerPath = (params: Record<string, string>) => `/evidence?${new URLSearchParams(params).toString()}`;
const kindIcon = sourceKindIcon;

/**
 * What a source page shows, kept in the address:
 *   ?use=cited+none          only records in those places in the theory
 *   ?more=minigame.30        how many records of a kind are listed
 */
interface SourceView { use: Place[]; more: [kind: string, shown: number][] }
function readView(sp: URLSearchParams): SourceView {
  return {
    use: PLACES.filter((p) => listParam(sp.get("use")).filter(isPlace).includes(p)),
    more: listParam(sp.get("more")).map((v): [string, number] => { const i = v.lastIndexOf("."); return [v.slice(0, i), Number(v.slice(i + 1)) || 0]; }).filter(([k, n]) => k && n > 0),
  };
}
function writeView(v: SourceView, current: URLSearchParams): URLSearchParams {
  const out = new URLSearchParams(current);
  if (v.use.length) out.set("use", v.use.join(" ")); else out.delete("use");
  if (v.more.length) out.set("more", v.more.map(([k, n]) => `${k}.${n}`).join(" ")); else out.delete("more");
  return out;
}

export default function Sources() {
  const all = tally(evidence);
  const done = accounted(all);
  const used = games.filter((g) => recordsOf(g.id).length > 0).length;
  return (
    <Page title="Sources" className="srcs-page">
      <PageHeader
        kicker="Evidence"
        title="Sources"
        lede={<>The only admissible sources: the games, in release order, and Scott Cawthon’s own words. Books and films are left out by design; see the <Link to="/method">method</Link>.</>}
      />

      <section className="srcs-overall" aria-labelledby="h-coverage">
        <div className="srcs-overall__text">
          <h2 id="h-coverage" className="srcs-overall__title">How much of it the theory accounts for</h2>
          <p className="srcs-overall__lead read">
            {done === all.total
              ? <>Every one of the {count(all.total)} records from {count(used)} sources is accounted for.</>
              : <><strong>{count(done)}</strong> of {count(all.total)} records from {count(used)} sources so far, {percent(done, all.total)} percent.</>}
            {" "}A record is accounted for when a chapter cites it, a chapter files it as further evidence, or the theory sets it aside as outside the story and says why.
            {games.length > used && <> Of the {count(games.length)} sources listed here, {count(games.length - used)} {games.length - used === 1 ? "has" : "have"} no records yet.</>}
          </p>
        </div>
        <div className="srcs-overall__figure">
          <CoverageBar t={all} className="srcs-bar--lg" />
          <CoverageKey t={all} all long to={(p) => lockerPath({ use: p })} />
        </div>
      </section>

      <ul className="srcs-list">
        {games.map((g) => {
          const t = tally(recordsOf(g.id));
          return (
            <li key={g.id} className="srcs-item">
              <div className="srcs-item__main">
                <h2 className="srcs-item__title"><Link to={sourcePath(g.id)}>{smartQuotes(g.title)}</Link></h2>
                <p className="srcs-item__meta">
                  <GameMark id={g.id} />
                  {isRelease(g.id) && <span><span className="srcs-item__k">Released</span> <time dateTime={g.released}>{longDate(g.released)}</time></span>}
                  <span><span className="srcs-item__k">By</span> {g.developer}</span>
                  {hasSetIn(g.id, g.settingYearLabel) && <span><span className="srcs-item__k">Set in</span> <SetIn id={g.id} fallback={g.settingYearLabel} /></span>}
                </p>
                <p className="srcs-item__sum">{smartQuotes(g.summary)}</p>
              </div>
              <div className="srcs-item__use">
                <p className="srcs-item__count">
                  <Link to={sourcePath(g.id)} className="srcs-item__n">{records(t.total)}</Link>
                  {t.total > 0 && <span className="srcs-item__done"><Accounted t={t} /></span>}
                </p>
                <CoverageBar t={t} />
                {t.total > 0 && <CoverageKey t={t} to={(p) => lockerPath({ game: g.id, use: p })} />}
              </div>
            </li>
          );
        })}
      </ul>
    </Page>
  );
}

export function SourceDetail() {
  const { id = "" } = useParams();
  const g = gameById.get(id as never);
  const [view, setView] = useAddressState(readView, writeView);
  const { use } = view;
  const open = useMemo(() => new Map(view.more), [view.more]);
  const all = useMemo(() => recordsOf(id), [id]);
  const shown: Evidence[] = useMemo(() => (use.length ? all.filter((e) => use.includes(placeOf(e.id))) : all), [all, use]);
  // The drawer pages through everything the page lists; a stable array keeps the rows from redrawing.
  const ids = useMemo(() => shown.map((e) => e.id), [shown]);
  // After "show more", focus moves to the first of the new rows instead of being lost with the button.
  const focusAt = useRef<{ kind: string; at: number } | null>(null);
  useEffect(() => {
    const f = focusAt.current;
    focusAt.current = null;
    if (f) document.getElementById(`k-${f.kind}`)?.closest("section")?.querySelectorAll<HTMLElement>(".evx-row__title")[f.at]?.focus({ preventScroll: true });
  }, [view.more]);
  if (!g) return <Missing what="source" id={id} list={{ to: "/sources", label: "All sources" }} />;
  const t = tally(all);
  const groups = byKind(shown);
  const showAll = () => setView((v) => ({ ...v, use: [] }));
  const toggle = (p: Place) => setView((v) => ({ ...v, use: PLACES.filter((x) => (x === p ? !v.use.includes(p) : v.use.includes(x))) }));
  const showMore = (kind: string, from: number) => {
    focusAt.current = { kind, at: from };
    setView((v) => ({ ...v, more: [...v.more.filter(([k]) => k !== kind), [kind, Math.min(MOST, from + STEP)]] }));
  };
  const inUse: Record<string, string> = use.length ? { use: use.join(" ") } : {};

  return (
    <Page title={g.title} kind="Source" className="srcs-page">
      <PageHeader crumbs={[{ to: "/sources", label: "Sources" }, { label: g.title }]} title={g.title}>
        <p className="srcs-head__meta">
          <GameMark id={g.id} />
          {isRelease(g.id) && <span><span className="srcs-item__k">Released</span> <time dateTime={g.released}>{longDate(g.released)}</time></span>}
          <span><span className="srcs-item__k">By</span> {g.developer}</span>
          {hasSetIn(g.id, g.settingYearLabel) && <span><span className="srcs-item__k">Set in</span> <SetIn id={g.id} fallback={g.settingYearLabel} /></span>}
        </p>
        <p className="lede">{smartQuotes(g.summary)}</p>
      </PageHeader>

      {t.total > 0 && (
        <section className="srcs-use" aria-labelledby="h-use">
          <div className="srcs-use__head">
            <h2 id="h-use" className="label">How much of it the model uses</h2>
            <p className="srcs-use__done"><Accounted t={t} /></p>
          </div>
          <CoverageBar t={t} className="srcs-bar--lg" />
          <div className="srcs-use__chips" role="group" aria-label="Show only records that are">
            {PLACES.map((p) => (
              <FilterChip key={p} on={use.includes(p)} count={t[p]} disabled={t[p] === 0 && !use.includes(p)} title={PLACE[p].help} onClick={() => toggle(p)}>
                <PlaceSwatch place={p} /> <span className="srcs-use__long">{PLACE[p].word}</span><span className="srcs-use__short">{PLACE[p].short}</span>
              </FilterChip>
            ))}
            {use.length > 0 && <Button variant="quiet" size="sm" onClick={showAll}>Show all</Button>}
          </div>
        </section>
      )}

      <Section
        title="Records from this source"
        aside={<span role="status">{use.length ? `${count(shown.length)} of ${records(all.length)}` : records(all.length)}</span>}
        lead={<>Grouped by the kind of place in the source they come from. <Link to={lockerPath({ game: g.id, ...inUse })}>Search them in the evidence locker<Icon icon={ArrowRight} /></Link></>}
        className="srcs-records"
      >
        {all.length === 0 ? (
          <Empty title="No records yet">Nothing from this source has been filed in the archive.</Empty>
        ) : shown.length === 0 ? (
          <Empty title="None in that place" action={<Button onClick={showAll}>Show all {count(all.length)}</Button>}>No record from this source is {use.map((p) => PLACE[p].word.toLowerCase()).join(" or ")}.</Empty>
        ) : groups.map(({ kind, items }) => {
          const limit = Math.min(MOST, Math.max(FOLD, open.get(kind) ?? 0));
          // Never fold away just one or two.
          const visible = items.length <= limit + 2 ? items : items.slice(0, limit);
          const rest = items.length - visible.length;
          const full = rest > 0 && limit >= MOST;
          return (
            <section key={kind} className="srcs-kind" aria-labelledby={`k-${kind}`}>
              <div className="srcs-kind__head">
                <h3 id={`k-${kind}`} className="srcs-kind__title"><Icon icon={kindIcon(kind)} /> {kindLabel(kind)}</h3>
                <Link to={lockerPath({ game: g.id, kind, ...inUse })} className="srcs-kind__n" title="These records in the evidence locker">{records(items.length)}</Link>
              </div>
              <ul className="evx-list">
                {visible.map((e) => <ResultRow key={e.id} e={e} group={ids} terms={NO_TERMS} source={false} kind={false} place={placeOf(e.id)} />)}
              </ul>
              {rest > 0 && (
                <p className="srcs-kind__more">
                  {full ? (
                    <ButtonLink size="sm" to={lockerPath({ game: g.id, kind, ...inUse })} iconEnd={ArrowRight}>All {count(items.length)} in the evidence locker</ButtonLink>
                  ) : (
                    <Button size="sm" onClick={() => showMore(kind, visible.length)}>
                      {rest <= STEP + 2 ? `Show all ${count(items.length)}` : `Show ${count(STEP)} more`}
                    </Button>
                  )}
                  <span className="srcs-kind__rest">{count(visible.length)} of {count(items.length)} shown</span>
                </p>
              )}
            </section>
          );
        })}
      </Section>
    </Page>
  );
}
