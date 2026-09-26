import { Link, useParams } from "react-router-dom";
import { deaths, evidenceForPlace, placeById, places, timeline, LOCATION_SPANS } from "../data/store";
import { DEATH_KIND } from "../data/deaths";
import { LOCATION_KIND } from "../data/locations";
import { CiteList, DatePill, EvidenceCard, RichText, Section, Shot, StatusBadge } from "../components/ui";
import { PLACE_DATES } from "../data/dates";

function PlaceYears({ id, years }: { id: string; years: string }) {
  const d = PLACE_DATES[id];
  return <DatePill label={years} kind={d?.kind ?? "unknown"} basis={d?.basis} evidence={d?.evidence} />;
}

export default function Places() {
  return (
    <div className="page">
      <h1>Places</h1>
      <p className="lede">Every location in the canon, in the order it first existed in-universe.</p>
      <div className="place-grid">
        {places.map((p) => (
          <Link key={p.id} to={`/places/${p.id}`} className="place-card">
            {p.image && <img src={`${import.meta.env.BASE_URL}img/${p.image}`} alt="" loading="lazy" />}
            <div>
              <h3>{p.name}</h3>
              <p className="small"><PlaceYears id={p.id} years={p.years} /></p>
              <p className="small">{p.summary}</p>
              <p className="muted small">{evidenceForPlace(p.id).length} records</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function PlaceDetail() {
  const { id = "" } = useParams();
  const p = placeById.get(id);
  if (!p) return <div className="page"><p className="empty">Unknown place. <Link to="/places">All places</Link></p></div>;
  const ev = evidenceForPlace(id);
  const events = timeline.filter((t) => t.places?.includes(id)).sort((a, b) => a.year - b.year);
  const deathsHere = deaths.filter((d) => d.place === id);
  return (
    <div className="page">
      <p className="crumbs"><Link to="/places">Places</Link> / {p.name}</p>
      <h1>{p.name}</h1>
      <p className="chips"><PlaceYears id={p.id} years={p.years} />
        {LOCATION_SPANS[p.id] && <span className="badge" style={{ color: LOCATION_KIND[LOCATION_SPANS[p.id].kind].color }}>{LOCATION_KIND[LOCATION_SPANS[p.id].kind].label}</span>}
        <Link className="tag" to={`/timeline?place=${p.id}`}>See on the timeline →</Link></p>
      <p className="big-claim"><RichText text={p.summary} /></p>
      <p>Established by: <CiteList ids={p.evidence} /></p>
      {p.image && <Shot file={p.image} />}
      {events.length > 0 && (
        <Section title="What happened here">
          <ul className="plain">{events.map((t) => <li key={t.id}><StatusBadge status={t.status} /> <Link to={`/timeline?e=${t.id}`}>{t.yearLabel} — {t.title}</Link></li>)}</ul>
        </Section>
      )}
      {deathsHere.length > 0 && (
        <Section title={`Deaths here (${deathsHere.length})`}>
          <ul className="plain">{deathsHere.map((d) => <li key={d.id}>{DEATH_KIND[d.kind].icon} <Link to={`/timeline?e=${d.id}`}>{d.title}</Link> <span className="muted small">· {d.yearLabel}</span> <StatusBadge status={d.status} /></li>)}</ul>
        </Section>
      )}
      <Section title={`Evidence (${ev.length})`}>
        <div className="ev-grid">{ev.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
      </Section>
    </div>
  );
}
