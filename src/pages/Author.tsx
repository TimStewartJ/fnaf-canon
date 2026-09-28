import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { AUTHOR_PHASE, READING_STATUS, authorAnswer, authorTimeline, lexicon, readings, type LexLine as Line } from "../data/author";
import { evidenceById } from "../data/store";
import { CiteList, DatePill, GameIcon, RichText, Shot } from "../components/ui";

function LexLine({ line }: { line: Line }) {
  const [id, text] = typeof line === "string" ? [line, undefined] : line;
  const e = evidenceById.get(id);
  if (!e) return null;
  return (
    <li>
      <Link to={`/evidence/${id}`} className="lex-line">
        <GameIcon id={e.game} />
        <span className={text ? "lex-text shown" : "lex-text"}>{text ?? (e.quote ? `“${e.quote.replace(/\s*…$/, "")}”` : e.title)}</span>
      </Link>
    </li>
  );
}

export default function Author() {
  return (
    <div className="page box-page author-page">
      <section className="box-hero">
        <div>
          <p className="kicker">The author</p>
          <h1>Scott &amp; Faith</h1>
          <p className="lede">
            Before Five Nights at Freddy's, Scott Cawthon spent about twelve years making Christian films and games. Here is that background, what he
            has said about faith and FNaF in his own words, and what it does and doesn't change about reading the games.
          </p>
        </div>
        <Shot file="scott-pilgrims-progress-game-shot.jpg" caption="The Pilgrim's Progress: The Video Game (c. 2011): battle commands are Faith, Truth, Pray for, Blessings" />
      </section>

      <section className="box-answer">
        {authorAnswer.map((a) => (
          <div key={a.q} className="box-q">
            <h2>{a.q}</h2>
            <p className="box-short">{a.short}</p>
            {a.body.map((b, i) => <p key={i}><RichText text={b} /></p>)}
            <p className="muted small">Confidence: <strong>{a.confidence}</strong></p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Readings, tested against this background</h2>
        <p className="muted small">Each reading is judged on the games first. Scott's faith only affects how literally the games' own words are taken.</p>
        <div className="reading-grid">
          {readings.map((r) => {
            const s = READING_STATUS[r.status];
            return (
              <article key={r.claim} className="reading" style={{ "--vc": s.color } as CSSProperties}>
                <span className="th-verdict">{s.label}</span>
                <h3>{r.claim}</h3>
                <p className="small"><RichText text={r.body} /></p>
                {r.section && <Link className="tag" to={`/theory#${r.section}`}>In the Unified Model →</Link>}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <h2>The games' own vocabulary</h2>
        <p className="muted small">The religious and afterlife lines in the archive's records, grouped by what they do in the story. Click a line for its source record.</p>
        <div className="lex-grid">
          {lexicon.map((g) => (
            <div key={g.id} className="lex-group" style={{ "--lc": g.color } as CSSProperties}>
              <h3>{g.theme}</h3>
              <p className="small muted">{g.gloss}</p>
              <ul>{g.lines.map((l) => <LexLine key={typeof l === "string" ? l : l[0]} line={l} />)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>From Christian films to Freddy's</h2>
        <ol className="box-tl">
          {authorTimeline.map((s) => (
            <li key={s.id} className="box-step" style={{ ["--pc" as string]: AUTHOR_PHASE[s.phase].color }}>
              <div className="box-date"><DatePill label={s.date} kind={/^\d{4}-\d{2}-\d{2}$/.test(s.date) ? "printed" : "estimated"} basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} /></div>
              <div className="box-card">
                <span className="box-phase">{AUTHOR_PHASE[s.phase].label}</span>
                <h3>{s.title}</h3>
                <p><RichText text={s.body} /></p>
                {s.image && <Shot file={s.image} compact />}
                {s.evidence.length > 0 && <p className="small">Evidence: <CiteList ids={s.evidence} /></p>}
                {s.sources && s.sources.length > 0 && (
                  <ul className="src-list">
                    {s.sources.map((src, i) => (
                      <li key={i} className={`src-line rel-${src.reliability}`}>
                        <a href={src.url} target="_blank" rel="noreferrer">{src.who} · <em>{src.what}</em>{src.date ? ` · ${src.date}` : ""} ↗</a>
                        {src.reliability !== "primary" && <span className="rel-tag">archive</span>}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="muted small">
          Hope Animation was a Christian media website run from the UK by David Hutter that sold and hosted Scott's films; it was not Scott's own studio.
          Its archived pages are used here only for titles, years and descriptions. Scott's words are the evidence.
        </p>
      </section>
    </div>
  );
}
