import { Link, useParams } from "react-router-dom";
import { evidenceForPerson, personById, relations, timeline } from "../data/store";
import { CiteList, EntityLink, EvidenceCard, GameBadge, RichText, Section, StatusBadge } from "../components/ui";

export default function PersonDetail() {
  const { id = "" } = useParams();
  const p = personById.get(id);
  if (!p) return <div className="page"><p className="empty">Unknown person “{id}”. <Link to="/people">People index</Link></p></div>;
  const ev = evidenceForPerson(id);
  const rels = relations.filter((r) => r.from === id || r.to === id);
  const events = timeline.filter((t) => t.people?.includes(id)).sort((a, b) => a.year - b.year);

  return (
    <div className="page">
      <p className="crumbs"><Link to="/people">People</Link> / {p.name}</p>
      <div className="person-hero">
        {p.image && <img src={`${import.meta.env.BASE_URL}img/${p.image}`} alt={p.name} />}
        <div>
          <h1 className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{p.name}</h1>
          {p.aliases.length > 0 && <p className="muted">Also: {p.aliases.join(" · ")}</p>}
          <p className="big-claim"><RichText text={p.summary} /></p>
          <p><strong>Status:</strong> {p.status}</p>
          <p><strong>First appearance:</strong> <GameBadge id={p.firstAppearance} /></p>
          <p><strong>Identity rests on:</strong> <CiteList ids={p.evidence} /></p>
          {p.nameStatus === "descriptor" && <p className="note">The games never name this person. “{p.name}” is a neutral descriptor used by this archive.</p>}
        </div>
      </div>
      {p.theory && (
        <div className="theory-box"><span className="badge status-theory">theory</span> <RichText text={p.theory} /></div>
      )}
      <Section title="Relationships">
        {rels.length ? (
          <table className="rel-table">
            <tbody>
              {rels.map((r, i) => (
                <tr key={i}>
                  <td><EntityLink id={r.from} /></td>
                  <td className="muted">{r.kind.replace(/-/g, " ")}</td>
                  <td><EntityLink id={r.to} /></td>
                  <td><StatusBadge status={r.status} /></td>
                  <td><CiteList ids={r.evidence} />{r.note && <div className="muted small">{r.note}</div>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : <p className="muted">No recorded relationships.</p>}
      </Section>
      {events.length > 0 && (
        <Section title="Life on the timeline">
          <ol className="tl compact">
            {events.map((t) => (
              <li key={t.id} className={`tl-item st-${t.status}`}>
                <div className="tl-year">{t.yearLabel}</div>
                <div className="tl-body"><h3><Link to={`/timeline#${t.id}`}>{t.title}</Link> <StatusBadge status={t.status} /></h3></div>
              </li>
            ))}
          </ol>
        </Section>
      )}
      <Section title={`All evidence (${ev.length})`}>
        <div className="ev-grid">{ev.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
      </Section>
    </div>
  );
}
