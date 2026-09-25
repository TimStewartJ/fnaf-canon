import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { evidenceForPerson, people } from "../data/store";
import type { Person } from "../data/schema";
import { shortGame } from "../components/ui";

const GROUPS: [Person["group"], string][] = [
  ["afton", "The Afton family"], ["emily", "The Emily household"], ["victim", "Victims & the haunted"],
  ["protagonist", "Night guards & protagonists"], ["staff", "Staff, voices & companies"], ["pizzaplex", "The Pizzaplex era"],
  ["mimic", "The Mimic & Murray"], ["entity", "Animatronics & entities"], ["other", "Other"],
];

export default function People() {
  const [q, setQ] = useState("");
  const list = useMemo(() => people.filter((p) => !q || `${p.name} ${p.aliases.join(" ")} ${p.summary}`.toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <div className="page">
      <h1>People Index</h1>
      <p className="lede">
        Everyone and everything with agency in the story. Names in <span className="name-canon">white</span> are spoken or printed in the games;
        names in <span className="name-desc">amber</span> are neutral descriptors because the games never give one.
      </p>
      <div className="filters"><input className="search" placeholder="Filter people…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      {GROUPS.map(([g, label]) => {
        const ps = list.filter((p) => p.group === g);
        if (!ps.length) return null;
        return (
          <section key={g} className="section">
            <h2>{label}</h2>
            <div className="person-grid">
              {ps.map((p) => (
                <Link key={p.id} to={`/people/${p.id}`} className="person-card">
                  {p.image ? <img src={`${import.meta.env.BASE_URL}img/${p.image}`} alt="" loading="lazy" /> : <div className="person-ph" aria-hidden>{p.name.slice(0, 1)}</div>}
                  <div>
                    <h3 className={p.nameStatus === "canon-name" ? "name-canon" : "name-desc"}>{p.name}</h3>
                    {p.aliases.length > 0 && <p className="muted small">aka {p.aliases.join(", ")}</p>}
                    <p className="small">{p.status}</p>
                    <p className="muted small">First: {shortGame(p.firstAppearance)} · {evidenceForPerson(p.id).length} records</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
