import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { evidenceForPerson, personById, people } from "../data/store";
import { isFoldedAway, unifiedPeople, type Link as MLink, type UnifiedPerson } from "../data/model";
import type { Person } from "../data/schema";
import { GameBadge, RichText } from "../components/ui";

const GROUPS: [Person["group"], string, string][] = [
  ["afton", "The Afton family", "William Afton and his children"],
  ["emily", "The Cassette Man's household", "The partner and the daughter he lost"],
  ["victim", "The victims", "The children, and those who haunt"],
  ["protagonist", "Guards & protagonists", "The people we play as"],
  ["pizzaplex", "The Pizzaplex era", "Vanessa, Gregory and Cassie"],
  ["mimic", "The Mimic & the Murrays", "The costume workshop and what it built"],
  ["staff", "Voices & companies", "Callers, AIs and Fazbear Entertainment"],
];

function AliasChips({ links, label }: { links: MLink[]; label: string }) {
  if (!links.length) return null;
  return (
    <div className="alias-row">
      <span className="alias-label">{label}</span>
      <span className="alias-chips">{links.map((l) => (
        <Link key={l.id} to={`/people/${l.id}`} className={`alias-chip st-${l.status}`} title={`${l.status}: ${l.via.map((r) => r.note ?? r.kind).join(" · ")}`}>
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
      <Link to={`/people/${p.id}`} className="uperson-head">
        {img ? <img src={`${import.meta.env.BASE_URL}img/${img}`} alt="" loading="lazy" /> : <div className="person-ph" aria-hidden>{p.name.slice(0, 1)}</div>}
        <div>
          <h3 className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{p.name}</h3>
          <p className="small uperson-status"><RichText text={p.status} /></p>
          <p className="muted small uperson-meta"><GameBadge id={p.firstAppearance} short plain /> <span>{n} records</span></p>
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
  const match = (u: UnifiedPerson) => !q || u.members.some((id) => {
    const p = personById.get(id)!;
    return `${p.name} ${p.aliases.join(" ")}`.toLowerCase().includes(q.toLowerCase());
  }) || [...u.vessels, ...u.roles].some((l) => personById.get(l.id)?.name.toLowerCase().includes(q.toLowerCase()));
  const humans = useMemo(() => unifiedPeople.filter((u) => u.root.group !== "entity" && u.root.group !== "other" && !isFoldedAway(u.root.id)), []);
  const machines = useMemo(() => unifiedPeople.filter((u) => u.root.group === "entity" && !isFoldedAway(u.root.id)), []);
  const minor = useMemo(() => people.filter((p) => p.group === "other").sort((a, b) => a.name.localeCompare(b.name)), []);
  const folded = people.filter((p) => isFoldedAway(p.id) && p.group !== "other").length;

  return (
    <div className="page">
      <h1>People</h1>
      <p className="lede">
        The unique people and beings of the Unified Model. Canon names, descriptors, minigame figures and animatronic forms that the model identifies as one
        person are folded into that person: <strong>{humans.length} people</strong>, with {folded} other records converging on them.
      </p>
      <div className="legend-row">
        <span className="muted small">Link strength:</span>
        <span className="alias-chip st-canon">canon</span>
        <span className="alias-chip st-strong">strong inference</span>
        <span className="alias-chip st-theory">theory</span>
        <span className="muted small">· Names in <span className="name-canon">white</span> are printed in the games; <span className="name-desc">amber</span> names are descriptors.</span>
      </div>
      <div className="filters"><input className="search" placeholder="Find anyone by any name or alias… (try “Springtrap” or “Hen”)" value={q} onChange={(e) => setQ(e.target.value)} /></div>

      {GROUPS.map(([g, label, sub]) => {
        const us = humans.filter((u) => u.root.group === g && match(u));
        if (!us.length) return null;
        return (
          <section key={g} className="section">
            <div className="section-head"><h2>{label}</h2><span className="muted small">{sub}</span></div>
            <div className="uperson-grid">{us.map((u) => <UnifiedCard key={u.root.id} u={u} />)}</div>
          </section>
        );
      })}

      {machines.filter(match).length > 0 && (
        <section className="section">
          <div className="section-head"><h2>Machines & entities</h2><span className="muted small">Not identified with any person by the model</span></div>
          <div className="uperson-grid">{machines.filter(match).map((u) => <UnifiedCard key={u.root.id} u={u} />)}</div>
        </section>
      )}

      <details className="section minor">
        <summary><strong>Minor figures ({minor.length})</strong> <span className="muted small">Everyone else named or depicted in the evidence</span></summary>
        <div className="minor-grid">
          {minor.filter((p) => !q || p.name.toLowerCase().includes(q.toLowerCase())).map((p) => (
            <Link key={p.id} to={`/people/${p.id}`} className="minor-chip"><GameBadge id={p.firstAppearance} short plain /> {p.name} <span className="muted">· {p.evidence.length}</span></Link>
          ))}
        </div>
      </details>
    </div>
  );
}
