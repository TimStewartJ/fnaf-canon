import { Link, useParams } from "react-router-dom";
import { backlinksFor, evidenceById, gameById } from "../data/store";
import { CertaintyBadge, CERTAINTY_HELP, Cite, EntityLink, EvidenceCard, EvidenceDate, GameBadge, KIND_LABEL, Section, Shot, StatusBadge } from "../components/ui";

export default function EvidenceDetail() {
  const { id = "" } = useParams();
  const e = evidenceById.get(id);
  if (!e) return <div className="page"><p className="empty">No evidence record “{id}”. <Link to="/evidence">Back to the locker</Link>.</p></div>;
  const bl = backlinksFor(id);
  const related = (e.related ?? []).map((r) => evidenceById.get(r)).filter((x) => !!x);
  const game = gameById.get(e.game);

  return (
    <div className="page ev-detail">
      <p className="crumbs"><Link to="/evidence">Evidence</Link> / <span className="mono">{e.id}</span></p>
      <h1>{e.title}</h1>
      <div className="ev-detail-grid">
        <div>
          <p className="big-claim">{e.claim}</p>
          {e.quote && <blockquote className="big-quote">“{e.quote}”</blockquote>}
          {e.image && <Shot file={e.image} />}
          {e.notes && <div className="note"><strong>Notes & caveats.</strong> {e.notes}</div>}
        </div>
        <aside className="facts">
          <dl>
            <dt>Source</dt><dd><GameBadge id={e.game} />{game?.released && <span className="muted"> released {game.released}</span>}</dd>
            <dt>Where exactly</dt><dd>{e.location}</dd>
            <dt>Type</dt><dd>{KIND_LABEL[e.kind] ?? e.kind}</dd>
            <dt>Certainty</dt><dd><CertaintyBadge c={e.certainty} /> <span className="muted">{CERTAINTY_HELP[e.certainty]}</span></dd>
            <dt>In-universe time</dt><dd><EvidenceDate e={e} /> <span className="muted">({e.when.precision})</span>{e.when.basis && <div className="muted small">Basis: {e.when.basis}</div>}</dd>
            {!!e.people?.length && <><dt>People</dt><dd className="chips">{e.people.map((p) => <EntityLink key={p} id={p} />)}</dd></>}
            {!!e.places?.length && <><dt>Places</dt><dd className="chips">{e.places.map((p) => <EntityLink key={p} id={p} />)}</dd></>}
            {!!e.tags?.length && <><dt>Tags</dt><dd className="chips">{e.tags.map((t) => <Link key={t} className="tag" to={`/evidence?tag=${t}`}>#{t}</Link>)}</dd></>}
            {e.url && <><dt>Original</dt><dd><a href={e.url} target="_blank" rel="noreferrer">{e.url}</a></dd></>}
            {e.verifiedVia && <><dt>Wording checked via</dt><dd><a href={e.verifiedVia} target="_blank" rel="noreferrer" className="small">{e.verifiedVia}</a></dd></>}
          </dl>
        </aside>
      </div>

      <Section title="How this connects">
        <div className="conn-grid">
          <div>
            <h3>Directly related evidence</h3>
            {related.length || bl.evidence.length ? (
              <ul className="plain">
                {related.map((r) => <li key={r!.id}><Cite id={r!.id} /> <Link to={`/evidence/${r!.id}`}>{r!.title}</Link> <span className="muted">(linked from here)</span></li>)}
                {bl.evidence.filter((b) => !e.related?.includes(b.id)).map((b) => <li key={b.id}><Cite id={b.id} /> <Link to={`/evidence/${b.id}`}>{b.title}</Link> <span className="muted">(links here)</span></li>)}
              </ul>
            ) : <p className="muted">No direct links recorded.</p>}
          </div>
          <div>
            <h3>Timeline events citing this</h3>
            {bl.events.length ? <ul className="plain">{bl.events.map((t) => <li key={t.id}><StatusBadge status={t.status} /> <Link to={`/timeline?e=${t.id}`}>{t.yearLabel} — {t.title}</Link></li>)}</ul> : <p className="muted">None.</p>}
            <h3>Relationships it supports</h3>
            {bl.relations.length ? <ul className="plain">{bl.relations.map((r, i) => <li key={i}><StatusBadge status={r.status} /> <EntityLink id={r.from} /> <span className="muted">{r.kind.replace(/-/g, " ")}</span> <EntityLink id={r.to} /></li>)}</ul> : <p className="muted">None.</p>}
          </div>
          <div>
            <h3>Theory sections using it</h3>
            {bl.theory.length ? <ul className="plain">{bl.theory.map((s) => <li key={s.id}><Link to={`/theory#${s.id}`}>{s.title}</Link>{s.counterEvidence?.includes(id) && <span className="badge counter"> counter-evidence</span>}</li>)}</ul> : <p className="muted">Not yet used in the theory.</p>}
            <h3>People / places pages</h3>
            {bl.people.length + bl.places.length ? <p className="chips">{[...bl.people.map((p) => p.id), ...bl.places.map((p) => p.id)].map((x) => <EntityLink key={x} id={x} />)}</p> : <p className="muted">None.</p>}
          </div>
        </div>
      </Section>
      {related.length > 0 && (
        <Section title="Related records">
          <div className="ev-grid">{related.map((r) => <EvidenceCard key={r!.id} e={r!} />)}</div>
        </Section>
      )}
    </div>
  );
}
