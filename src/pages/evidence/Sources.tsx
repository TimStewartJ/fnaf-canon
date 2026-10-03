import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowRight, CircleHelp } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { evidence, gameById, games } from "../../data/store";
import {
  Button, ButtonLink, Empty, FilterChip, GameMark, Icon, Page, PageHeader, SOURCE_KIND_ICON, Section, kindLabel, smartQuotes, sourcePath, type LucideIcon,
} from "../../components/ui";
import { PLACE, PLACES, accounted, count, isPlace, percent, placeOf, records, tally, type Place } from "./coverage";
import { PlaceSwatch, ResultRow } from "./explorerParts";
import { Accounted, CoverageBar, CoverageKey, SetIn } from "./sourceParts";
import { byKind, recordsOf } from "./sourceModel";
import "./sources.css";

const NO_TERMS: string[] = [];
/** Records of one kind shown on a source page before "show more", and how many each press adds. */
const FOLD = 5;
const STEP = 25;

const lockerPath = (params: Record<string, string>) => `/evidence?${new URLSearchParams(params).toString()}`;
const kindIcon = (kind: string): LucideIcon => (SOURCE_KIND_ICON as Record<string, LucideIcon>)[kind] ?? CircleHelp;
const list = (v: string | null): string[] => (v ?? "").split(/[\s,]+/).filter(Boolean);

export default function Sources() {
  const all = tally(evidence);
  const done = accounted(all);
  const used = games.filter((g) => recordsOf(g.id).length > 0).length;
  return (
    <Page title="Sources" className="srcs">
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
              ? <>Every one of the {count(all.total)} records from {used} sources is accounted for.</>
              : <><strong>{count(done)}</strong> of {count(all.total)} records from {used} sources so far, {percent(done, all.total)} percent.</>}
            {" "}A record is accounted for when a chapter cites it, a chapter files it as further evidence, or the theory sets it aside as outside the story and says why.
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
                  <span><span className="srcs-item__k">Released</span> <span className="mono">{g.released}</span></span>
                  <span><span className="srcs-item__k">By</span> {g.developer}</span>
                  <span><span className="srcs-item__k">Set in</span> <SetIn id={g.id} fallback={g.settingYearLabel} /></span>
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
  const [sp, setSp] = useSearchParams();
  const g = gameById.get(id as never);
  if (!g) {
    return (
      <Page title="Source not found" narrow>
        <Empty title="Unknown source" action={<ButtonLink to="/sources" variant="primary">All sources</ButtonLink>}>There is no source with the id “{id}”.</Empty>
      </Page>
    );
  }
  const all = recordsOf(g.id);
  const t = tally(all);
  // ?use=cited+none shows only records in those places; ?more=minigame.30 is how many of a kind are open.
  const use = [...new Set(list(sp.get("use")).filter(isPlace))];
  const open = new Map(list(sp.get("more")).map((v) => { const i = v.lastIndexOf("."); return [v.slice(0, i), Number(v.slice(i + 1)) || 0] as const; }));
  const shown: Evidence[] = use.length ? all.filter((e) => use.includes(placeOf(e.id))) : all;
  const groups = byKind(shown);
  const ids = shown.map((e) => e.id);
  const write = (next: { use?: Place[]; more?: Map<string, number> }) => {
    const u = next.use ?? use, m = next.more ?? open;
    const out = new URLSearchParams();
    if (u.length) out.set("use", u.join(" "));
    if (m.size) out.set("more", [...m].map(([k, n]) => `${k}.${n}`).join(" "));
    setSp(out, { replace: true });
  };
  const toggle = (p: Place) => write({ use: use.includes(p) ? use.filter((x) => x !== p) : PLACES.filter((x) => x === p || use.includes(x)) });

  return (
    <Page title={g.title} className="srcs">
      <PageHeader crumbs={[{ to: "/sources", label: "Sources" }, { label: g.title }]} title={g.title}>
        <p className="srcs-head__meta">
          <GameMark id={g.id} />
          <span><span className="srcs-item__k">Released</span> <span className="mono">{g.released}</span></span>
          <span><span className="srcs-item__k">By</span> {g.developer}</span>
          <span><span className="srcs-item__k">Set in</span> <SetIn id={g.id} fallback={g.settingYearLabel} /></span>
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
                <PlaceSwatch place={p} /> {PLACE[p].word}
              </FilterChip>
            ))}
            {use.length > 0 && <Button variant="quiet" size="sm" onClick={() => write({ use: [] })}>Show all</Button>}
          </div>
        </section>
      )}

      <Section
        title="Records from this source"
        aside={<span role="status">{use.length ? `${count(shown.length)} of ${records(all.length)}` : records(all.length)}</span>}
        lead={<>Grouped by where in the source they come from. <Link to={lockerPath({ game: g.id, ...(use.length ? { use: use.join(" ") } : {}) })}>Search them in the evidence locker<Icon icon={ArrowRight} /></Link></>}
        className="srcs-records"
      >
        {all.length === 0 ? (
          <Empty title="No records yet">Nothing from this source has been filed in the archive.</Empty>
        ) : shown.length === 0 ? (
          <Empty title="None in that place" action={<Button onClick={() => write({ use: [] })}>Show all {all.length}</Button>}>No record from this source is {use.map((p) => PLACE[p].word.toLowerCase()).join(" or ")}.</Empty>
        ) : groups.map(({ kind, items }) => {
          const limit = Math.max(FOLD, open.get(kind) ?? 0);
          // Never fold away just one or two.
          const visible = items.length <= limit + 2 ? items : items.slice(0, limit);
          const rest = items.length - visible.length;
          return (
            <section key={kind} className="srcs-kind" aria-labelledby={`k-${kind}`}>
              <div className="srcs-kind__head">
                <h3 id={`k-${kind}`} className="srcs-kind__title"><Icon icon={kindIcon(kind)} /> {kindLabel(kind)}</h3>
                <Link to={lockerPath({ game: g.id, kind })} className="srcs-kind__n" title={`These records in the evidence locker`}>{records(items.length)}</Link>
              </div>
              <ul className="evx-list">
                {visible.map((e) => <ResultRow key={e.id} e={e} group={ids} terms={NO_TERMS} source={false} kind={false} place={placeOf(e.id)} />)}
              </ul>
              {rest > 0 && (
                <p className="srcs-kind__more">
                  <Button size="sm" onClick={() => write({ more: new Map(open).set(kind, visible.length + STEP) })}>
                    {rest <= STEP + 2 ? `Show all ${items.length}` : `Show ${STEP} more`}
                  </Button>
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
