import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { evidenceForPerson, personById, relations, timeline } from "../data/store";
import { membership, unifiedById, type Link as MLink } from "../data/model";
import { CiteList, DatePill, EntityLink, EvidenceCard, GameBadge, RichText, Section, StatusBadge } from "../components/ui";
import { eventDate } from "../data/dates";

/** Names along the identity chain from this record to its person. */
function chainNames(l: MLink): string[] {
  const names = [personById.get(l.id)?.name ?? l.id];
  let cur = l.id;
  for (const r of [...l.via].reverse()) {
    const next = r.from === cur ? r.to : r.from;
    names.push(personById.get(next)?.name ?? next);
    cur = next;
  }
  return names;
}

const KIND_LABEL: Record<MLink["kind"], string> = { identity: "Identity", form: "Form / vessel body", vessel: "Haunts", role: "Role worn" };

function IdentCard({ l }: { l: MLink }) {
  const p = personById.get(l.id);
  if (!p) return null;
  return (
    <div className={`ident-card st-${l.status}`}>
      <span className="kind">{KIND_LABEL[l.kind]} · <StatusBadge status={l.status} /></span>
      <h4><Link to={`/people/${l.id}`} className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{p.name}</Link> <GameBadge id={p.firstAppearance} short plain /></h4>
      <p className="small chain">{chainNames(l).map((n, i) => <span key={i}>{i > 0 && <span className="chain-eq"> = </span>}{n}</span>)}</p>
      {l.via.some((r) => r.note) && <p className="small muted" style={{ margin: 0 }}>{l.via.map((r) => r.note).filter(Boolean).join(" ")}</p>}
      <CiteList ids={[...new Set(l.via.flatMap((r) => r.evidence))]} />
    </div>
  );
}

export default function PersonDetail() {
  const { id = "" } = useParams();
  const p = personById.get(id);
  const [withAliases, setWithAliases] = useState(true);
  if (!p) return <div className="page"><p className="empty">Unknown person “{id}”. <Link to="/people">People index</Link></p></div>;
  const m = membership(id);
  const u = unifiedById.get(id);
  const isRoot = m.root === id;
  const members = isRoot && u && withAliases ? [...u.members, ...u.vessels.map((v) => v.id), ...u.roles.map((v) => v.id)] : [id];
  const evMap = new Map(members.flatMap((mid) => evidenceForPerson(mid).map((e) => [e.id, e] as const)));
  const ev = [...evMap.values()].sort((a, b) => (a.when.year ?? 9999) - (b.when.year ?? 9999));
  const rels = relations.filter((r) => members.includes(r.from) || members.includes(r.to));
  const events = timeline.filter((t) => t.people?.some((x) => members.includes(x))).sort((a, b) => a.year - b.year);
  const rootP = personById.get(m.root);

  return (
    <div className="page">
      <p className="crumbs"><Link to="/people">People</Link> / {p.name}</p>
      {!isRoot && rootP && m.link && (
        <div className="converge">
          <span className="arrow">⤳</span>
          <div>
            In the Unified Model, <strong>{p.name}</strong> is {m.link.kind === "form" ? "a form of" : "the same person as"}{" "}
            <Link to={`/people/${m.root}`}><strong>{rootP.name}</strong></Link> <StatusBadge status={m.link.status} />
            <div className="small muted">Via: <CiteList ids={[...new Set(m.link.via.flatMap((r) => r.evidence))]} /></div>
          </div>
        </div>
      )}
      {isRoot && m.viaVessel && (
        <div className="converge">
          <span className="arrow">⤳</span>
          <div>
            In the Unified Model, <strong>{p.name}</strong> is {m.viaVessel.link.kind === "role" ? "a role worn by" : "haunted by"}{" "}
            <Link to={`/people/${m.viaVessel.owner}`}><strong>{personById.get(m.viaVessel.owner)?.name}</strong></Link> <StatusBadge status={m.viaVessel.link.status} />
            <div className="small muted">Via: <CiteList ids={m.viaVessel.link.via.flatMap((r) => r.evidence)} /></div>
          </div>
        </div>
      )}
      <div className="person-hero">
        {p.image && <img src={`${import.meta.env.BASE_URL}img/${p.image}`} alt={p.name} />}
        <div>
          <h1 className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{p.name}</h1>
          {p.aliases.length > 0 && <p className="muted">Also: {p.aliases.join(" · ")}</p>}
          <p className="big-claim"><RichText text={p.summary} /></p>
          <p><strong>Status:</strong> <RichText text={p.status} /></p>
          <p><strong>First appearance:</strong> <GameBadge id={p.firstAppearance} /></p>
          <p><strong>Identity rests on:</strong> <CiteList ids={p.evidence} /></p>
          {p.nameStatus === "descriptor" && <p className="note">The games never name this person. “{p.name}” is a neutral descriptor used by this archive.</p>}
        </div>
      </div>
      {p.theory && <div className="theory-box"><span className="badge status-theory">theory</span> <RichText text={p.theory} /></div>}

      {isRoot && u && (u.identities.length + u.forms.length + u.vessels.length + u.roles.length) > 0 && (
        <Section title="One person, many records">
          <p className="muted small">Every record below converges on {p.name} in the Unified Model. The colour of each card is the weakest link in the chain that connects it.</p>
          <div className="ident-grid">
            {[...u.identities, ...u.forms, ...u.vessels, ...u.roles].map((l) => <IdentCard key={l.id} l={l} />)}
          </div>
        </Section>
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
        <Section title="On the timeline">
          <ol className="mini-tl">
            {events.map((t) => {
              const d = eventDate(t.id);
              return (
                <li key={t.id} className={`st-${t.status}`}>
                  <DatePill label={t.yearLabel} kind={d.kind} basis={d.basis} evidence={d.evidence} compact />
                  <Link to={`/timeline?e=${t.id}`}>{t.title}</Link> <StatusBadge status={t.status} />
                </li>
              );
            })}
          </ol>
        </Section>
      )}
      <Section title={`Evidence (${ev.length})`} aside={isRoot && u && u.members.length + u.vessels.length + u.roles.length > 1 ? (
        <label className="check"><input type="checkbox" checked={withAliases} onChange={(e) => setWithAliases(e.target.checked)} /> include aliases, forms & vessels</label>
      ) : undefined}>
        <div className="ev-grid">{ev.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
      </Section>
    </div>
  );
}
