import { Link } from "react-router-dom";
import { credits, eras, evidence, games, people, relations, theory, timeline } from "../data/store";
import type { CSSProperties } from "react";
import { DatePill, RichText, Shot, StatusBadge } from "../components/ui";
import { ERA_COLOR, ERA_DATES } from "../data/dates";
import { homeSummary, keyQuestions } from "../data/home";

export default function Home() {
  const withImg = credits.slice(0, 6);
  const stats = [
    ["Evidence records", evidence.length, "/evidence"],
    ["Sources", games.filter((g) => evidence.some((e) => e.game === g.id)).length, "/sources"],
    ["People", people.length, "/people"],
    ["Relationships", relations.length, "/family"],
    ["Timeline events", timeline.length, "/timeline"],
    ["Screenshots", credits.length, "/gallery"],
  ] as const;
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-text">
          <p className="kicker">Games-only · Scott-only · every claim sourced</p>
          <h1>The Fazbear Canon Archive</h1>
          <p className="lede">
            A reconstruction of the Five Nights at Freddy's story built one atomic fact at a time. Every fact is pinned to the exact phone call, minigame,
            newspaper, tape or post it comes from, dated in-universe, and linked to everything it touches.
          </p>
          <div className="hero-cta">
            <Link to="/theory" className="btn primary">Read the Unified Model</Link>
            <Link to="/timeline" className="btn">Walk the timeline</Link>
            <Link to="/evidence" className="btn">Search the evidence</Link>
          </div>
        </div>
        {credits[0] && <div className="hero-img"><Shot file={credits.find((c) => c.file === "fnaf2-take-cake-to-the-children.png")?.file ?? credits[0].file} /></div>}
      </section>

      <section className="stats">
        {stats.map(([l, n, to]) => <Link key={l} to={to} className="stat"><span className="stat-n">{n}</span><span>{l}</span></Link>)}
      </section>

      <section className="section">
        <h2>The story in one screen</h2>
        <div className="summary-grid">
          {homeSummary.map((s) => (
            <div key={s.title} className="summary-card">
              <h3>{s.title} <StatusBadge status={s.status} /></h3>
              <p><RichText text={s.text} /></p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Eras</h2>
        <div className="era-cards">
          {eras.map((e) => (
            <Link key={e.id} to={`/timeline?era=${e.id}`} className={`era-card era-${e.id}`} style={{ "--ec": ERA_COLOR[e.id] } as CSSProperties}>
              <span onClick={(ev) => ev.preventDefault()}><DatePill label={e.range} kind={ERA_DATES[e.id]?.kind ?? "unknown"} basis={ERA_DATES[e.id]?.basis} evidence={ERA_DATES[e.id]?.evidence} compact /></span>
              <h3>{e.name}</h3>
              <p className="small">{e.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Open questions the model answers</h2>
        <ul className="qa">
          {keyQuestions.map((q) => (
            <li key={q.q}><Link to={`/theory#${q.section}`}><strong>{q.q}</strong></Link> <span>{q.a}</span></li>
          ))}
        </ul>
        <p className="muted small">{theory.length} theory sections, each with its citations and counter-evidence.</p>
      </section>

      {withImg.length > 0 && (
        <section className="section">
          <h2>From the evidence</h2>
          <div className="gallery small-gal">{withImg.map((c) => <Shot key={c.file} file={c.file} />)}</div>
          <p><Link to="/gallery">All screenshots →</Link></p>
        </section>
      )}
    </div>
  );
}
