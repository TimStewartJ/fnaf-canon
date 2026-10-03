import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { deaths, evidenceForPerson, personById, relations, timeline } from "../../data/store";
import { DEATH_KIND } from "../../data/deaths";
import { membership, unifiedById, type Link as MLink } from "../../data/model";
import { eventDate } from "../../data/dates";
import {
  Button, ButtonLink, Callout, CiteList, Crumbs, DEATH_KIND_ICON, DatePill, Empty, EntityLink, EvidenceCard, Fact, Facts, Figure, GameMark, Icon, Page,
  RichText, Section, StatusMark, TableWrap, levelOf, personPath, timelineEventPath, smartQuotes,
} from "../../components/ui";
import "./people.css";

const FIRST_PAGE = 12;

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
    <div className="ident-card" data-level={levelOf(l.status)}>
      <span className="kind">{KIND_LABEL[l.kind]} <StatusMark value={l.status} /></span>
      <h4><Link to={personPath(l.id)} className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{smartQuotes(p.name)}</Link> <GameMark id={p.firstAppearance} /></h4>
      <p className="chain">{chainNames(l).map((n, i) => <span key={i}>{i > 0 && <span className="chain-eq"> = </span>}{n}</span>)}</p>
      {l.via.some((r) => r.note) && <p className="small muted">{l.via.map((r) => r.note).filter(Boolean).join(" ")}</p>}
      <CiteList ids={[...new Set(l.via.flatMap((r) => r.evidence))]} />
    </div>
  );
}

export default function PersonDetail() {
  const { id = "" } = useParams();
  const p = personById.get(id);
  const [withAliases, setWithAliases] = useState(true);
  const [showAll, setShowAll] = useState(false);
  if (!p) {
    return (
      <Page title="Person not found" narrow>
        <Empty title="Unknown person" action={<ButtonLink to="/people" variant="primary">See everyone</ButtonLink>}>There is no person page for “{id}”.</Empty>
      </Page>
    );
  }
  const m = membership(id);
  const u = unifiedById.get(id);
  const isRoot = m.root === id;
  const members = isRoot && u && withAliases ? [...u.members, ...u.vessels.map((v) => v.id), ...u.roles.map((v) => v.id)] : [id];
  const evMap = new Map(members.flatMap((mid) => evidenceForPerson(mid).map((e) => [e.id, e] as const)));
  const ev = [...evMap.values()].sort((a, b) => (a.when.year ?? 9999) - (b.when.year ?? 9999));
  const rels = relations.filter((r) => members.includes(r.from) || members.includes(r.to));
  const events = timeline.filter((t) => t.people?.some((x) => members.includes(x))).sort((a, b) => a.year - b.year);
  const died = deaths.filter((d) => d.victims.some((x) => members.includes(x)));
  const killed = deaths.filter((d) => d.by.some((x) => members.includes(x)));
  const rootP = personById.get(m.root);
  const shown = showAll ? ev : ev.slice(0, FIRST_PAGE);
  const nameClass = p.nameStatus === "canon-name" ? "name-canon" : "name-desc";

  return (
    <Page title={p.name}>
      <Crumbs items={[{ to: "/people", label: "People" }, { label: p.name }]} />
      {!isRoot && rootP && m.link && (
        <div className="converge">
          <Icon icon={ArrowRight} />
          <div>
            In the model, <strong>{smartQuotes(p.name)}</strong> is {m.link.kind === "form" ? "a form of" : "the same person as"}{" "}
            <Link to={personPath(m.root)}><strong>{rootP.name}</strong></Link>.
            <div className="converge__via"><StatusMark value={m.link.status} long /> <span>Rests on</span> <CiteList ids={[...new Set(m.link.via.flatMap((r) => r.evidence))]} /></div>
          </div>
        </div>
      )}
      {isRoot && m.viaVessel && (
        <div className="converge">
          <Icon icon={ArrowRight} />
          <div>
            In the model, <strong>{smartQuotes(p.name)}</strong> is {m.viaVessel.link.kind === "role" ? "a role worn by" : "haunted by"}{" "}
            <Link to={personPath(m.viaVessel.owner)}><strong>{personById.get(m.viaVessel.owner)?.name}</strong></Link>.
            <div className="converge__via"><StatusMark value={m.viaVessel.link.status} long /> <span>Rests on</span> <CiteList ids={m.viaVessel.link.via.flatMap((r) => r.evidence)} /></div>
          </div>
        </div>
      )}
      <div className={`person-hero${p.image ? " person-hero--image" : ""}`}>
        {p.image && <Figure file={p.image} alt={p.name} eager />}
        <div>
          <h1 className={nameClass}>{smartQuotes(p.name)}</h1>
          {p.aliases.length > 0 && <p className="person-hero__aliases">Also: {p.aliases.join(" · ")}</p>}
          <p className="person-hero__summary"><RichText text={p.summary} /></p>
          <Facts>
            <Fact label="Status"><RichText text={p.status} /></Fact>
            <Fact label="First appearance"><GameMark id={p.firstAppearance} variant="full" link /></Fact>
            <Fact label="Identity rests on"><CiteList ids={p.evidence} /></Fact>
          </Facts>
          {p.nameStatus === "descriptor" && <p className="note">The games never name this person. “{smartQuotes(p.name)}” is a neutral descriptor used by this archive.</p>}
        </div>
      </div>
      {p.theory && <Callout tone="key" title="The model's reading"><p><RichText text={p.theory} /></p></Callout>}

      {isRoot && u && (u.identities.length + u.forms.length + u.vessels.length + u.roles.length) > 0 && (
        <Section title="One person, many records" lead={`Every record below converges on ${p.name} in the model. Each card's left edge and mark show the weakest link in the chain that connects it.`}>
          <div className="ident-grid">
            {[...u.identities, ...u.forms, ...u.vessels, ...u.roles].map((l) => <IdentCard key={l.id} l={l} />)}
          </div>
        </Section>
      )}

      <Section title="Relationships" aside={rels.length ? `${rels.length} recorded` : undefined}>
        {rels.length ? (
          <TableWrap label="Relationships">
            <table className="table rel-table">
              <thead><tr><th scope="col">Who</th><th scope="col">Tie</th><th scope="col">To whom</th><th scope="col">Support</th><th scope="col">Evidence</th></tr></thead>
              <tbody>
                {rels.map((r, i) => (
                  <tr key={i}>
                    <td><EntityLink id={r.from} /></td>
                    <td className="rel-table__kind">{r.kind.replace(/-/g, " ")}</td>
                    <td><EntityLink id={r.to} /></td>
                    <td><StatusMark value={r.status} /></td>
                    <td><CiteList ids={r.evidence} />{r.note && <div className="muted small">{r.note}</div>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>
        ) : <p className="muted">No recorded relationships.</p>}
      </Section>
      {events.length > 0 && (
        <Section title="On the timeline">
          <ol className="mini-tl">
            {events.map((t) => {
              const d = eventDate(t.id);
              return (
                <li key={t.id} data-level={levelOf(t.status)}>
                  <DatePill label={t.yearLabel} kind={d.kind} basis={d.basis} evidence={d.evidence} compact />
                  <Link to={timelineEventPath(t.id)}>{smartQuotes(t.title)}</Link> <StatusMark value={t.status} />
                </li>
              );
            })}
          </ol>
        </Section>
      )}
      {(died.length > 0 || killed.length > 0) && (
        <Section title="Deaths">
          <div className="death-cols">
            {died.length > 0 && <div><h3 className="label">Died</h3><ul className="plain">{died.map((d) => <li key={d.id}><Icon icon={DEATH_KIND_ICON[d.kind]} label={DEATH_KIND[d.kind].label} /> <Link to={timelineEventPath(d.id)}>{smartQuotes(d.title)}</Link> <span className="muted small">{d.yearLabel}</span> <StatusMark value={d.status} /></li>)}</ul></div>}
            {killed.length > 0 && <div><h3 className="label">Responsible for</h3><ul className="plain">{killed.map((d) => <li key={d.id}><Icon icon={DEATH_KIND_ICON[d.kind]} label={DEATH_KIND[d.kind].label} /> <Link to={timelineEventPath(d.id)}>{smartQuotes(d.title)}</Link> <span className="muted small">{d.yearLabel}</span> <StatusMark value={d.status} /></li>)}</ul></div>}
          </div>
        </Section>
      )}
      <Section title="Evidence" aside={
        <span className="cluster">
          <span>{ev.length} records, oldest first</span>
          {isRoot && u && u.members.length + u.vessels.length + u.roles.length > 1 && (
            <label className="check"><input type="checkbox" checked={withAliases} onChange={(e) => setWithAliases(e.target.checked)} /> include aliases, forms and vessels</label>
          )}
        </span>
      }>
        <div className="ev-grid">{shown.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
        {ev.length > shown.length && <p className="person-more"><Button onClick={() => setShowAll(true)}>Show all {ev.length} records</Button></p>}
      </Section>
    </Page>
  );
}
