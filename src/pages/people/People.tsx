import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { evidenceForPerson, personById, people } from "../../data/store";
import { isFoldedAway, unifiedPeople, type Link as MLink, type UnifiedPerson } from "../../data/model";
import type { Person } from "../../data/schema";
import { Empty, GameMark, Page, PageHeader, RichText, STATUS, SearchField, StatusMark, imgUrl, levelOf, personPath, smartQuotes } from "../../components/ui";
import "./people.css";

const GROUPS: [Person["group"], string, string][] = [
  ["afton", "The Afton family", "William Afton and his children"],
  ["emily", "The Cassette Man's household", "The partner and the daughter he lost"],
  ["victim", "The victims", "The children, and those who haunt"],
  ["protagonist", "Guards and protagonists", "The people we play as"],
  ["pizzaplex", "The Pizzaplex era", "Vanessa, Gregory and Cassie"],
  ["mimic", "The Mimic and the Murrays", "The costume workshop and what it built"],
  ["staff", "Voices and companies", "Callers, AIs and Fazbear Entertainment"],
];

function AliasChips({ links, label }: { links: MLink[]; label: string }) {
  if (!links.length) return null;
  return (
    <div className="alias-row">
      <span className="alias-label">{label}</span>
      <span className="alias-chips">{links.map((l) => (
        <Link key={l.id} to={personPath(l.id)} className="alias-chip" data-level={levelOf(l.status)} title={`${STATUS[l.status].word}: ${l.via.map((r) => r.note ?? r.kind).join(" · ")}`}>
          {personById.get(l.id)?.name ?? l.id}
        </Link>
      ))}</span>
    </div>
  );
}

function UnifiedCard({ u }: { u: UnifiedPerson }) {
  const p = u.root;
  const n = new Set(u.members.flatMap((id) => evidenceForPerson(id).map((e) => e.id))).size;
  const img = p.image ?? u.members.map((m) => personById.get(m)?.image).find(Boolean);
  return (
    <article className="uperson">
      <Link to={personPath(p.id)} className="uperson-head">
        {img ? <img src={imgUrl(img)} alt="" loading="lazy" /> : <div className="person-ph" aria-hidden>{p.name.replace(/^The /, "").slice(0, 1)}</div>}
        <div>
          <h3 className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{smartQuotes(p.name)}</h3>
          <p className="uperson-status"><RichText text={p.status} /></p>
          <p className="uperson-meta"><GameMark id={p.firstAppearance} /> <span>{n} records</span></p>
        </div>
      </Link>
      {(u.identities.length + u.forms.length + u.vessels.length + u.roles.length) > 0 && (
        <div className="uperson-body">
          <AliasChips links={u.identities} label="Also appears as" />
          <AliasChips links={u.forms} label="Forms" />
          <AliasChips links={u.vessels} label="Haunts" />
          <AliasChips links={u.roles} label="Wore" />
        </div>
      )}
    </article>
  );
}

export default function People() {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const match = (u: UnifiedPerson) => !needle || u.members.some((id) => {
    const p = personById.get(id)!;
    return `${p.name} ${p.aliases.join(" ")}`.toLowerCase().includes(needle);
  }) || [...u.vessels, ...u.roles].some((l) => personById.get(l.id)?.name.toLowerCase().includes(needle));
  const humans = useMemo(() => unifiedPeople.filter((u) => u.root.group !== "entity" && u.root.group !== "other" && !isFoldedAway(u.root.id)), []);
  const machines = useMemo(() => unifiedPeople.filter((u) => u.root.group === "entity" && !isFoldedAway(u.root.id)), []);
  const minor = useMemo(() => people.filter((p) => p.group === "other").sort((a, b) => a.name.localeCompare(b.name)), []);
  const folded = people.filter((p) => isFoldedAway(p.id) && p.group !== "other").length;
  const shownMachines = machines.filter(match);
  const shownMinor = minor.filter((p) => !needle || p.name.toLowerCase().includes(needle));
  const anyone = humans.some(match) || shownMachines.length > 0 || shownMinor.length > 0;

  return (
    <Page title="People">
      <PageHeader
        kicker="People & places"
        title="People"
        lede={<>
          The people and beings of the model. Canon names, descriptors, minigame figures and animatronic forms that the model identifies as one person
          are folded into that person: {humans.length} people, with {folded} other records converging on them.
        </>}
      />
      <div className="people-key">
        <span className="label">How firmly an alias belongs</span>
        <StatusMark value="canon" /> <StatusMark value="strong" long /> <StatusMark value="theory" />
        <span className="people-key__note">Names in <em className="name-desc">italics</em> are the archive's own descriptors; the games never print them.</span>
      </div>
      <div className="filters">
        <SearchField className="search" label="Find a person" placeholder="Find anyone by any name or alias (try “Springtrap” or “Hen”)" value={q} onChange={setQ} />
      </div>

      {GROUPS.map(([g, label, sub]) => {
        const us = humans.filter((u) => u.root.group === g && match(u));
        if (!us.length) return null;
        return (
          <section key={g} className="section">
            <div className="section-head"><h2>{label}</h2><span className="section-head__aside">{sub}</span></div>
            <div className="uperson-grid">{us.map((u) => <UnifiedCard key={u.root.id} u={u} />)}</div>
          </section>
        );
      })}

      {shownMachines.length > 0 && (
        <section className="section">
          <div className="section-head"><h2>Machines and entities</h2><span className="section-head__aside">Not identified with any person by the model</span></div>
          <div className="uperson-grid">{shownMachines.map((u) => <UnifiedCard key={u.root.id} u={u} />)}</div>
        </section>
      )}

      {shownMinor.length > 0 && (
        <details className="section minor" open={!!needle || undefined}>
          <summary><strong>Minor figures ({shownMinor.length})</strong> <span className="muted small">Everyone else named or shown in the evidence</span></summary>
          <div className="minor-grid">
            {shownMinor.map((p) => (
              <Link key={p.id} to={personPath(p.id)} className="minor-chip"><GameMark id={p.firstAppearance} variant="dot" /> {p.name} <span className="faint">· {p.evidence.length}</span></Link>
            ))}
          </div>
        </details>
      )}
      {!anyone && <Empty title="Nobody by that name">No person, alias or minor figure matches “{q}”.</Empty>}
    </Page>
  );
}
