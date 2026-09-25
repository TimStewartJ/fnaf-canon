import { Link, useParams } from "react-router-dom";
import { evidenceForPlace, placeById, places, timeline } from "../data/store";
import { CiteList, EvidenceCard, RichText, Section, Shot, StatusBadge } from "../components/ui";

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
              <p className="muted small">{p.years}</p>
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
  return (
    <div className="page">
      <p className="crumbs"><Link to="/places">Places</Link> / {p.name}</p>
      <h1>{p.name}</h1>
      <p className="muted">{p.years}</p>
      <p className="big-claim"><RichText text={p.summary} /></p>
      <p>Established by: <CiteList ids={p.evidence} /></p>
      {p.image && <Shot file={p.image} />}
      {events.length > 0 && (
        <Section title="What happened here">
          <ul className="plain">{events.map((t) => <li key={t.id}><StatusBadge status={t.status} /> <Link to={`/timeline#${t.id}`}>{t.yearLabel} — {t.title}</Link></li>)}</ul>
        </Section>
      )}
      <Section title={`Evidence (${ev.length})`}>
        <div className="ev-grid">{ev.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
      </Section>
    </div>
  );
}
