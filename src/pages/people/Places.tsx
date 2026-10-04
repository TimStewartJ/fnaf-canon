import { memo, useMemo, type CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Place } from "../../data/schema";
import { deaths, eras, evidenceForPlace, personById, placeById, places, timeline, LOCATION_SPANS } from "../../data/store";
import { LOCATION_KIND, type LocationKind, type LocationSpan } from "../../data/locations";
import { ERA_DATES, PLACE_DATES } from "../../data/dates";
import {
  Button, CiteList, Collapsible, DATE_KIND, DateGlyph, DatePill, Empty, EntityLink, Fact, Facts, FilterBar, FilterChip, FilterGroup, Icon, LOCATION_HUE, Missing, Page,
  PageHeader, RichText, count, countFates, excerpt, hueOf, Thumb, placePath, smartQuotes, useMediaQuery, listParam, useAddress,
} from "../../components/ui";
import { chaptersAbout } from "./chapters";
import { ChapterRows } from "./Chapters";
import { Capped, DossierSection, GroupLabel, JumpLinks } from "./Dossier";
import { EvidenceRows } from "./EvidenceFile";
import { Portrait } from "./Portrait";
import { EventRows, FateRows } from "./Story";
import { plural, sentenceCase } from "./ties";
import "./common.css";
import "./places.css";

const KINDS = Object.keys(LOCATION_KIND) as LocationKind[];
const eraById = new Map(eras.map((e) => [e.id, e]));

function PlaceYears({ p, compact }: { p: Place; compact?: boolean }) {
  const d = PLACE_DATES[p.id];
  // A place the data gives no years for still says so, rather than showing an empty tag.
  return <DatePill label={p.years.trim() || DATE_KIND.unknown.label} kind={d?.kind ?? "unknown"} basis={d?.basis} evidence={d?.evidence} compact={compact} />;
}

function KindMark({ kind }: { kind: LocationKind }) {
  return <span className="place-kind" style={{ "--hue": hueOf(LOCATION_HUE, kind) } as CSSProperties}>{smartQuotes(LOCATION_KIND[kind]?.label ?? kind)}</span>;
}

/** Where a place sits in the index: under the era it first existed in, or in one of three groups without an era. */
type GroupId = string;
const UNDATED = "undated", OUTSIDE = "outside", UNPLACED = "unplaced";
function groupOf(span: LocationSpan | undefined): GroupId {
  if (!span) return UNPLACED;
  if (span.outside) return OUTSIDE;
  if (span.undated || !span.from || !eraById.has(span.from)) return UNDATED;
  return span.from;
}
const EXTRA_GROUPS: Record<string, { title: string; lead: string }> = {
  [UNDATED]: { title: "Undated", lead: "Places the records give no position in the story’s order." },
  [OUTSIDE]: { title: "Outside the timeline", lead: "Places that sit outside the story’s chronology altogether." },
  [UNPLACED]: { title: "Other locations", lead: "Locations named in the evidence that the timeline does not place." },
};

const PlaceRow = memo(function PlaceRow({ p }: { p: Place }) {
  const span = LOCATION_SPANS[p.id];
  const n = evidenceForPlace(p.id).length;
  return (
    <li className="ppl-row place-row">
      <div className="ppl-row__who">
        <h3 className="ppl-row__name"><Link to={placePath(p.id)}>{smartQuotes(p.name)}</Link></h3>
        <p className="ppl-row__meta">{span && <KindMark kind={span.kind} />}<span>{plural(n, "record")}</span></p>
      </div>
      <div className="ppl-row__what">
        <p className="place-row__when"><PlaceYears p={p} compact /></p>
        <p className="ppl-row__status">{smartQuotes(excerpt(p.summary, 190))}</p>
      </div>
      {p.image && (
        <Link to={placePath(p.id)} className="ppl-row__thumb" tabIndex={-1} aria-hidden>
          <Thumb file={p.image} />
        </Link>
      )}
    </li>
  );
});

export default function Places() {
  const url = useAddress();
  const phone = useMediaQuery("(max-width: 640px)");
  const picked = listParam(url.get("kind"), KINDS);
  // Works from the address as it is when it runs (see components/address.ts), so two quick clicks both count.
  const toggle = (k: LocationKind) => url.write((now) => {
    const on = listParam(now.get("kind"), KINDS);
    const next = on.includes(k) ? on.filter((x) => x !== k) : [...on, k];
    return { kind: next.length && next.length < KINDS.length ? KINDS.filter((x) => next.includes(x)).join(",") : null };
  });
  const kindCount = (k: LocationKind) => places.filter((p) => LOCATION_SPANS[p.id]?.kind === k).length;
  const shown = picked.length ? places.filter((p) => { const k = LOCATION_SPANS[p.id]?.kind; return !!k && picked.includes(k); }) : places;
  const order = [...eras.map((e) => e.id), UNDATED, OUTSIDE, UNPLACED];
  const groups = order.map((g) => ({ g, list: shown.filter((p) => groupOf(LOCATION_SPANS[p.id]) === g) })).filter((x) => x.list.length > 0);

  // One row of chips. On a phone it folds away and the fold says what is applied.
  const filters = (
    <FilterBar className="place-filters__bar">
      <FilterGroup label="Kind">
        {KINDS.filter((k) => kindCount(k) > 0).map((k) => (
          <FilterChip key={k} on={picked.includes(k)} count={kindCount(k)} onClick={() => toggle(k)}><KindMark kind={k} /></FilterChip>
        ))}
        {picked.length > 0 && <Button variant="quiet" size="sm" onClick={() => url.write({ kind: null })}>Show all kinds</Button>}
      </FilterGroup>
    </FilterBar>
  );

  return (
    <Page title="Places">
      <PageHeader
        kicker="People & places"
        title="Places"
        lede={<>Every location in the canon, under the era it first existed in: {plural(places.length, "place")}, each with when it existed and how the archive knows.</>}
      >
        {phone
          ? <Collapsible className="place-filters" summary="Filter by kind" meta={picked.length ? picked.map((k) => LOCATION_KIND[k].label).join(", ") : "All kinds"}>{filters}</Collapsible>
          : filters}
        {picked.length > 0 && <p className="ppl-found" role="status">{plural(shown.length, "place")} of {count(places.length)} shown.</p>}
      </PageHeader>

      {groups.length > 1 && (
        <JumpLinks label="Eras" items={groups.map(({ g, list }) => ({ id: `era-${g}`, label: eraById.get(g)?.name ?? EXTRA_GROUPS[g]?.title ?? g, n: list.length }))} />
      )}

      {groups.map(({ g, list }) => {
        const era = eraById.get(g);
        const d = era ? ERA_DATES[era.id] : undefined;
        return (
          <DossierSection
            key={g}
            dense
            id={`era-${g}`}
            title={era?.name ?? EXTRA_GROUPS[g]?.title ?? g}
            count={era
              ? <><DatePill label={era.range} kind={d?.kind ?? "unknown"} basis={d?.basis} evidence={d?.evidence} compact /><span>{plural(list.length, "place")}</span></>
              : plural(list.length, "place")}
            lead={era ? <Link to={`/timeline?era=${era.id}`}>This era on the timeline</Link> : EXTRA_GROUPS[g]?.lead}
          >
            <ul className="ppl-rows">{list.map((p) => <PlaceRow key={p.id} p={p} />)}</ul>
          </DossierSection>
        );
      })}

      {shown.length === 0 && (
        <Empty title="No place of that kind" action={<Button onClick={() => url.write({ kind: null })}>Show all kinds</Button>}>
          Nothing matches the kinds picked.
        </Empty>
      )}
    </Page>
  );
}

/** How many rows a list shows before "Show all": [wide screens, phones]. */
const CAPS = { events: [12, 6], chapters: [6, 4], evidence: [10, 6], people: [10, 6] } as const;

/** The page for one place. Memoised on the place, so jumping to a section (a change of hash only) does not draw it again. */
const PlaceDossier = memo(function PlaceDossier({ p }: { p: Place }) {
  const phone = useMediaQuery("(max-width: 640px)");
  const cap = (list: keyof typeof CAPS) => CAPS[list][phone ? 1 : 0];
  const span = LOCATION_SPANS[p.id];
  const date = PLACE_DATES[p.id];
  const view = useMemo(() => {
    const records = evidenceForPlace(p.id);
    const seen = new Map<string, number>();
    for (const e of records) for (const who of e.people ?? []) if (personById.has(who)) seen.set(who, (seen.get(who) ?? 0) + 1);
    return {
      records,
      events: timeline.filter((t) => t.places?.includes(p.id)).sort((a, b) => a.year - b.year),
      // The entries of data/deaths.ts set here: deaths and other fates. Each row prints which it is.
      fates: deaths.filter((d) => d.place === p.id).sort((a, b) => a.year - b.year),
      people: [...seen].sort((a, b) => b[1] - a[1]),
      chapters: chaptersAbout([p.id], new Set(records.map((e) => e.id))),
    };
  }, [p.id]);
  const happened = view.events.length + view.fates.length;
  // The heading over those entries names only what is under it.
  const tally = countFates(view.fates);
  const fatesLabel = tally.others === 0 ? "Deaths here" : tally.deaths === 0 ? "Other fates here" : "Deaths and other fates here";
  const from = span?.from ? eraById.get(span.from) : undefined;
  const to = span?.to ? eraById.get(span.to) : undefined;
  const dateKind = DATE_KIND[date?.kind ?? "unknown"] ?? DATE_KIND.unknown;

  return (
    <Page title={p.name} kind="Place" className="place-page">
      <PageHeader
        className="ppl-head"
        crumbs={[{ to: "/places", label: "Places" }, { label: p.name }]}
        kicker={span ? LOCATION_KIND[span.kind]?.label : "Place"}
        title={smartQuotes(p.name)}
        aside={p.image ? <Portrait file={p.image} /> : undefined}
      >
        <p className="ppl-summary"><RichText text={p.summary} /></p>
      </PageHeader>

      <div className="ppl-file">
        <div className="ppl-file__main">
          <h2 className="label">When it existed, and how we know</h2>
          <p className="ppl-file__text place-when"><PlaceYears p={p} /></p>
          <p className="place-basis">
            <span className="place-basis__kind"><DateGlyph kind={date?.kind ?? "unknown"} /> {dateKind === DATE_KIND.unknown ? `${dateKind.label}.` : `${dateKind.label} date.`}</span>{" "}
            {smartQuotes(date?.basis ?? `${dateKind.help}.`)}
          </p>
          {date && date.evidence.length > 0 && <p className="place-basis__ev"><CiteList ids={date.evidence} variant="code" /></p>}
        </div>
        <Facts className="ppl-file__facts">
          <Fact label="On the timeline">
            {span && (
              <span className="place-era">
                {span.outside ? "Outside the story’s chronology."
                  : span.undated || !from ? "No fixed position: the records do not date it."
                  : <>
                    {to && to.id !== from.id ? (span.fuzzyStart ? "From some point in " : "From ") : (span.fuzzyStart ? "At some point in " : "In ")}
                    <Link to={`/timeline?era=${from.id}`}>{smartQuotes(from.name)}</Link>
                    {to && to.id !== from.id && <> to <Link to={`/timeline?era=${to.id}`}>{smartQuotes(to.name)}</Link></>}
                    {span.fuzzyEnd && " (the end is not pinned down)"}.
                  </>}
              </span>
            )}
            {span?.label && <span className="place-span">{smartQuotes(sentenceCase(span.label))}.</span>}
            <Link className="place-tl" to={`/timeline?place=${p.id}`}>See this place on the timeline <Icon icon={ArrowRight} /></Link>
          </Fact>
          {p.evidence.length > 0 && <Fact label="Established by"><CiteList ids={p.evidence} variant="code" /></Fact>}
        </Facts>
      </div>

      <JumpLinks
        items={([["happened", "What happened here", happened], ["people", "Who was here", view.people.length], ["theory", "In the theory", view.chapters.length], ["evidence", "Evidence", view.records.length]] as const)
          .filter(([, , n]) => n > 0).map(([id, label, n]) => ({ id, label, n }))}
      />

      {happened > 0 && (
        <DossierSection id="happened" title="What happened here" count={plural(happened, "entry", "entries")} lead="Events, deaths and other fates the timeline places here. Each opens on the timeline.">
          {view.events.length > 0 && (
            <div className="ppl-block">
              {view.fates.length > 0 && <GroupLabel count={view.events.length}>Events</GroupLabel>}
              <Capped items={view.events} cap={cap("events")} noun="events">{(shown) => <EventRows events={shown} />}</Capped>
            </div>
          )}
          {view.fates.length > 0 && <div className="ppl-block"><GroupLabel count={view.fates.length}>{fatesLabel}</GroupLabel><FateRows fates={view.fates} /></div>}
        </DossierSection>
      )}

      {view.people.length > 0 && (
        <DossierSection id="people" title="Who was here" count={plural(view.people.length, "person", "people")} lead="Everyone named in a record filed under this place, with the number of records they share.">
          <Capped items={view.people} cap={cap("people")} noun="people">
            {(shown) => (
              <ul className="cluster ppl-chips place-people">
                {shown.map(([id, n]) => <li key={id} className="ppl-chips__item"><EntityLink id={id} variant="chip" /><span className="ppl-chips__n" title={`${plural(n, "record")} filed under both`}>{count(n)}</span></li>)}
              </ul>
            )}
          </Capped>
        </DossierSection>
      )}

      {view.chapters.length > 0 && (
        <DossierSection id="theory" title="In the theory" count={plural(view.chapters.length, "chapter")} lead="Chapters of the model that discuss this place or rest on its evidence, the most involved first.">
          <Capped items={view.chapters} cap={cap("chapters")} noun="chapters">{(shown) => <ChapterRows hits={shown} />}</Capped>
        </DossierSection>
      )}

      <DossierSection id="evidence" title="Evidence" count={plural(view.records.length, "record")} lead="Oldest first. A row opens the record over this page.">
        {view.records.length > 0 ? (
          <>
            <EvidenceRows records={view.records} cap={cap("evidence")} />
            <p className="ppl-locker"><Link to={`/evidence?entity=${p.id}`}>Browse these in the evidence locker <Icon icon={ArrowRight} /></Link></p>
          </>
        ) : <p className="muted">No evidence record is filed under this place.</p>}
      </DossierSection>
    </Page>
  );
});

export function PlaceDetail() {
  const { id = "" } = useParams();
  const p = placeById.get(id);
  if (!p) return <Missing what="place" id={id} list={{ to: "/places", label: "All places" }} />;
  return <PlaceDossier key={p.id} p={p} />;
}
