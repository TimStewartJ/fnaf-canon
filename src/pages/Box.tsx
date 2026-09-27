import { Link } from "react-router-dom";
import { boxTimeline, boxAnswer, boxGuesses, type BoxStep } from "../data/box";
import { CiteList, DatePill, RichText, Shot } from "../components/ui";

const PHASE: Record<BoxStep["phase"], { label: string; color: string }> = {
  planted: { label: "Planted", color: "#f4c95d" },
  explained: { label: "Explained", color: "#69db7c" },
  shelved: { label: "Shelved", color: "#ffa94d" },
  echoed: { label: "Echoed", color: "#74c0fc" },
  abandoned: { label: "Abandoned", color: "#adb5bd" },
};

export default function Box() {
  return (
    <div className="page box-page">
      <section className="box-hero">
        <div>
          <p className="kicker">FNaF4 · Night 7</p>
          <h1>The Locked Box</h1>
          <p className="lede">
            “Perhaps some things are best left forgotten, for now.” Beating FNaF4's hardest night shows a grey box with two padlocks that won't open.
            Here is everything the games and Scott have said about it, in order, and what that adds up to.
          </p>
        </div>
        <Shot file="fnaf4-locked-box-ending.jpg" caption="FNaF4, Night 7: the box that cannot be opened" />
      </section>

      <section className="box-answer">
        {boxAnswer.map((a) => (
          <div key={a.q} className="box-q">
            <h2>{a.q}</h2>
            <p className="box-short">{a.short}</p>
            {a.body.map((b, i) => <p key={i}><RichText text={b} /></p>)}
            <p className="muted small">Confidence: <strong>{a.confidence}</strong></p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>The box, step by step</h2>
        <ol className="box-tl">
          {boxTimeline.map((s) => (
            <li key={s.id} className="box-step" style={{ ["--pc" as string]: PHASE[s.phase].color }}>
              <div className="box-date"><DatePill label={s.date} kind="printed" basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} /></div>
              <div className="box-card">
                <span className="box-phase">{PHASE[s.phase].label}</span>
                <h3>{s.title}</h3>
                <p><RichText text={s.body} /></p>
                {s.image && <Shot file={s.image} compact />}
                <p className="small">Evidence: <CiteList ids={s.evidence} /></p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>What the community guessed</h2>
        <p className="muted small">Referenced, not used as evidence. See <Link to="/community">Theorists &amp; Scott</Link> for the wider picture.</p>
        <div className="guess-grid">
          {boxGuesses.map((g) => (
            <div key={g.name} className="guess">
              <h3>{g.name}</h3>
              <p className="small">{g.idea}</p>
              <p className="small"><strong>Against the evidence:</strong> <RichText text={g.verdict} /></p>
              {g.source && <p className="muted small">{g.source.url ? <a href={g.source.url} target="_blank" rel="noreferrer">{g.source.who} · {g.source.what} ↗</a> : `${g.source.who} · ${g.source.what}`}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
