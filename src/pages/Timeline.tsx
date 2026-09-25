import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { eras, timeline } from "../data/store";
import type { Status } from "../data/schema";
import { CiteList, EntityLink, RichText, StatusBadge } from "../components/ui";

const ALL: Status[] = ["canon", "strong", "theory"];

export default function Timeline() {
  const [statuses, setStatuses] = useState<Status[]>(ALL);
  const [person, setPerson] = useState("");
  const [compact, setCompact] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) { el.scrollIntoView({ block: "center" }); el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1800); }
  }, [hash]);

  const peopleIds = useMemo(() => [...new Set(timeline.flatMap((t) => t.people ?? []))].sort(), []);
  const events = useMemo(() => timeline
    .filter((t) => statuses.includes(t.status))
    .filter((t) => !person || t.people?.includes(person))
    .sort((a, b) => a.year - b.year), [statuses, person]);


  return (
    <div className="page">
      <h1>Timeline</h1>
      <p className="lede">
        The in-universe chronology. Each event is marked <StatusBadge status="canon" /> when dates and facts are printed in the games,
        <StatusBadge status="strong" /> when multiple sources force the conclusion, or <StatusBadge status="theory" /> when it is this archive's reconstruction.
        Every event lists the evidence it rests on.
      </p>
      <div className="filters">
        {ALL.map((s) => (
          <label key={s} className="check">
            <input type="checkbox" checked={statuses.includes(s)} onChange={(e) => setStatuses(e.target.checked ? [...statuses, s] : statuses.filter((x) => x !== s))} />
            <StatusBadge status={s} />
          </label>
        ))}
        <select value={person} onChange={(e) => setPerson(e.target.value)} aria-label="Filter by person">
          <option value="">Everyone</option>
          {peopleIds.map((p) => <option key={p} value={p}>{p.replace(/-/g, " ")}</option>)}
        </select>
        <label className="check"><input type="checkbox" checked={compact} onChange={(e) => setCompact(e.target.checked)} /> Compact</label>
      </div>

      <nav className="era-strip" aria-label="Jump to era">
        {eras.map((era) => (
          <a key={era.id} href={`#era-${era.id}`} className="era-seg" onClick={(e) => { e.preventDefault(); document.getElementById(`era-${era.id}`)?.scrollIntoView({ behavior: "smooth" }); }}>
            <strong>{era.name}</strong><span>{era.range}</span>
          </a>
        ))}
      </nav>

      {eras.map((era) => {
        const evs = events.filter((t) => t.era === era.id);
        if (!evs.length) return null;
        return (
          <section key={era.id} id={`era-${era.id}`} className="era">
            <div className="era-head">
              <h2>{era.name}</h2>
              <span className="muted">{era.range}</span>
            </div>
            <p className="era-summary">{era.summary}</p>
            <ol className={compact ? "tl compact" : "tl"}>
              {evs.map((t) => (
                <li key={t.id} id={t.id} className={`tl-item st-${t.status}`}>
                  <div className="tl-year">{t.yearLabel}</div>
                  <div className="tl-body">
                    <h3>{t.title} <StatusBadge status={t.status} /></h3>
                    {!compact && <p><RichText text={t.summary} /></p>}
                    <div className="tl-meta">
                      <CiteList ids={t.evidence} />
                      {!compact && t.people?.map((p) => <EntityLink key={p} id={p} />)}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
