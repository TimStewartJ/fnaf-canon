import type { CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { deaths, evidenceForPlace, placeById, places, timeline, LOCATION_SPANS } from "../../data/store";
import { DEATH_KIND } from "../../data/deaths";
import { LOCATION_KIND } from "../../data/locations";
import { PLACE_DATES } from "../../data/dates";
import {
  Button, ButtonLink, CiteList, Crumbs, DEATH_KIND_ICON, DatePill, Empty, EvidenceCard, Figure, Icon, LOCATION_HUE, Page, PageHeader, RichText, Section,
  StatusMark, Tag, hueOf, imgUrl, placePath, timelineEventPath,
} from "../../components/ui";
import { useState } from "react";
import "./places.css";

const FIRST_PAGE = 12;

function PlaceYears({ id, years }: { id: string; years: string }) {
  const d = PLACE_DATES[id];
  return <DatePill label={years} kind={d?.kind ?? "unknown"} basis={d?.basis} evidence={d?.evidence} />;
}

export default function Places() {
  return (
    <Page title="Places">
      <PageHeader kicker="People & places" title="Places" lede="Every location in the canon, in the order it first existed in the story." />
      <div className="place-grid">
        {places.map((p) => (
          <article key={p.id} className="place-card">
            {p.image && <Link to={placePath(p.id)} className="place-card__img" tabIndex={-1} aria-hidden><img src={imgUrl(p.image)} alt="" loading="lazy" /></Link>}
            <div className="place-card__body">
              <h3><Link to={placePath(p.id)}>{p.name}</Link></h3>
              <p><PlaceYears id={p.id} years={p.years} /></p>
              <p className="place-card__sum">{p.summary}</p>
              <p className="place-card__n">{evidenceForPlace(p.id).length} records</p>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

export function PlaceDetail() {
  const { id = "" } = useParams();
  const p = placeById.get(id);
  const [showAll, setShowAll] = useState(false);
  if (!p) {
    return (
      <Page title="Place not found" narrow>
        <Empty title="Unknown place" action={<ButtonLink to="/places" variant="primary">All places</ButtonLink>}>There is no place page for “{id}”.</Empty>
      </Page>
    );
  }
  const ev = evidenceForPlace(id);
  const events = timeline.filter((t) => t.places?.includes(id)).sort((a, b) => a.year - b.year);
  const deathsHere = deaths.filter((d) => d.place === id);
  const span = LOCATION_SPANS[p.id];
  const shown = showAll ? ev : ev.slice(0, FIRST_PAGE);
  return (
    <Page title={p.name}>
      <Crumbs items={[{ to: "/places", label: "Places" }, { label: p.name }]} />
      <div className={`place-hero${p.image ? " place-hero--image" : ""}`}>
        <div>
          <h1>{p.name}</h1>
          <p className="cluster place-hero__meta">
            <PlaceYears id={p.id} years={p.years} />
            {span && <span className="chip place-kind" style={{ "--hue": hueOf(LOCATION_HUE, span.kind) } as CSSProperties}>{LOCATION_KIND[span.kind].label}</span>}
            <Tag to={`/timeline?place=${p.id}`}>See on the timeline <Icon icon={ArrowRight} /></Tag>
          </p>
          <p className="place-hero__summary"><RichText text={p.summary} /></p>
          <p className="cluster"><span className="label">Established by</span> <CiteList ids={p.evidence} /></p>
        </div>
        {p.image && <Figure file={p.image} eager />}
      </div>
      {events.length > 0 && (
        <Section title="What happened here">
          <ul className="plain">{events.map((t) => <li key={t.id} className="cluster"><StatusMark value={t.status} /> <Link to={timelineEventPath(t.id)}>{t.yearLabel}: {t.title}</Link></li>)}</ul>
        </Section>
      )}
      {deathsHere.length > 0 && (
        <Section title="Deaths here" aside={`${deathsHere.length} recorded`}>
          <ul className="plain place-deaths">{deathsHere.map((d) => <li key={d.id} className="cluster"><Icon icon={DEATH_KIND_ICON[d.kind]} label={DEATH_KIND[d.kind].label} /> <Link to={timelineEventPath(d.id)}>{d.title}</Link> <span className="muted small">{d.yearLabel}</span> <StatusMark value={d.status} /></li>)}</ul>
        </Section>
      )}
      <Section title="Evidence" aside={`${ev.length} records, oldest first`}>
        <div className="ev-grid">{shown.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
        {ev.length > shown.length && <p className="place-more"><Button onClick={() => setShowAll(true)}>Show all {ev.length} records</Button></p>}
      </Section>
    </Page>
  );
}
