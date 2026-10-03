import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Evidence } from "../../data/schema";
import { backlinksFor, evidenceById, gameById } from "../../data/store";
import {
  ButtonLink, CERTAINTY, Callout, CertaintyMark, Chip, Crumbs, Empty, EntityLink, EvidenceCard, EvidenceDate, EvidenceRow, Fact, Facts,
  Figure, GameMark, Icon, KIND_LABEL, Page, Section, SourceLine, StatusMark, Tag, chapterPath, timelineEventPath, smartQuotes,
} from "../../components/ui";
import "./evidence.css";

export default function EvidenceDetail() {
  const { id = "" } = useParams();
  const e = evidenceById.get(id);
  if (!e) {
    return (
      <Page title="Record not found" narrow>
        <Empty title="No such record" action={<ButtonLink to="/evidence" variant="primary">Open the evidence locker</ButtonLink>}>
          There is no evidence record with the id “{id}”.
        </Empty>
      </Page>
    );
  }
  const bl = backlinksFor(id);
  const related = (e.related ?? []).map((r) => evidenceById.get(r)).filter((x): x is Evidence => !!x);
  const linksHere = bl.evidence.filter((b) => !e.related?.includes(b.id));
  const game = gameById.get(e.game);
  const chapters = [...bl.theory, ...bl.filed.filter((s) => !bl.theory.includes(s))];

  return (
    <Page title={e.title} className="ev-detail">
      <Crumbs items={[{ to: "/evidence", label: "Evidence" }, { label: e.id }]} />
      <header className="ev-detail__head">
        <p className="ev-detail__source"><SourceLine e={e} /></p>
        <h1>{smartQuotes(e.title)}</h1>
      </header>
      <div className="ev-detail-grid">
        <div className="ev-detail__main">
          <p className="big-claim">{smartQuotes(e.claim)}</p>
          {e.quote && <blockquote className="big-quote">“{smartQuotes(e.quote)}”</blockquote>}
          {e.image && <Figure file={e.image} tag="Exhibit" eager />}
          {e.notes && <Callout tone="note" title="Notes and caveats"><p>{smartQuotes(e.notes)}</p></Callout>}
        </div>
        <aside className="panel ev-detail__facts" aria-label="Record details">
          <Facts>
            <Fact label="Source"><GameMark id={e.game} variant="full" link />{game?.released && <span className="muted"> · released {game.released}</span>}</Fact>
            <Fact label="Where exactly">{smartQuotes(e.location)}</Fact>
            <Fact label="Kind of source">{KIND_LABEL[e.kind] ?? e.kind}</Fact>
            <Fact label="Certainty"><CertaintyMark value={e.certainty} variant="inline" /> <span className="muted">{CERTAINTY[e.certainty].help}.</span></Fact>
            <Fact label="In-universe time"><EvidenceDate e={e} /> <span className="muted">({e.when.precision})</span>{e.when.basis && <div className="muted small">Basis: {e.when.basis}</div>}</Fact>
            {!!e.people?.length && <Fact label="People"><span className="cluster">{e.people.map((p) => <EntityLink key={p} id={p} variant="chip" />)}</span></Fact>}
            {!!e.places?.length && <Fact label="Places"><span className="cluster">{e.places.map((p) => <EntityLink key={p} id={p} variant="chip" />)}</span></Fact>}
            {!!e.tags?.length && <Fact label="Tags"><span className="cluster">{e.tags.map((t) => <Tag key={t} to={`/evidence?tag=${t}`}>#{t}</Tag>)}</span></Fact>}
            {e.url && <Fact label="Original"><a href={e.url} target="_blank" rel="noreferrer">{e.url.replace(/^https?:\/\//, "")}<Icon icon={ArrowUpRight} /></a></Fact>}
            {e.verifiedVia && <Fact label="Wording checked via"><a href={e.verifiedVia} target="_blank" rel="noreferrer" className="small">{e.verifiedVia.replace(/^https?:\/\//, "")}<Icon icon={ArrowUpRight} /></a></Fact>}
          </Facts>
        </aside>
      </div>

      <Section title="How this connects">
        <div className="conn-grid">
          <div>
            <h3 className="label">In the theory</h3>
            {chapters.length ? (
              <ul className="plain">
                {chapters.map((s) => (
                  <li key={s.id} className="cluster">
                    <Link to={chapterPath(s.id)}>{smartQuotes(s.title)}</Link>
                    {s.counterEvidence?.includes(id) && <Chip tone="tension">pushes back</Chip>}
                    {!bl.theory.includes(s) && <Chip>filed, not cited</Chip>}
                  </li>
                ))}
              </ul>
            ) : <p className="muted">Not used in the theory yet.</p>}
            <h3 className="label">People and places</h3>
            {bl.people.length + bl.places.length ? <p className="cluster">{[...bl.people.map((p) => p.id), ...bl.places.map((p) => p.id)].map((x) => <EntityLink key={x} id={x} variant="chip" />)}</p> : <p className="muted">None.</p>}
          </div>
          <div>
            <h3 className="label">Timeline events citing this</h3>
            {bl.events.length ? <ul className="plain">{bl.events.map((t) => <li key={t.id} className="cluster"><StatusMark value={t.status} /> <Link to={timelineEventPath(t.id)}>{t.yearLabel}: {smartQuotes(t.title)}</Link></li>)}</ul> : <p className="muted">None.</p>}
            <h3 className="label">Relationships it supports</h3>
            {bl.relations.length ? <ul className="plain">{bl.relations.map((r, i) => <li key={i} className="cluster"><StatusMark value={r.status} /> <EntityLink id={r.from} /> <span className="muted">{r.kind.replace(/-/g, " ")}</span> <EntityLink id={r.to} /></li>)}</ul> : <p className="muted">None.</p>}
          </div>
          <div>
            <h3 className="label">Records that link here</h3>
            {linksHere.length ? <ul className="ev-list">{linksHere.map((b) => <EvidenceRow key={b.id} e={b} claim={false} />)}</ul> : <p className="muted">None.</p>}
          </div>
        </div>
      </Section>
      {related.length > 0 && (
        <Section title="Related records" aside={`${related.length} linked from this record`}>
          <div className="ev-grid">{related.map((r) => <EvidenceCard key={r.id} e={r} />)}</div>
        </Section>
      )}
    </Page>
  );
}
