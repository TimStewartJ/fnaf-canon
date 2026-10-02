import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AUTHOR_PHASE, READING_STATUS, authorAnswer, authorTimeline, lexicon, readings, type LexLine as Line } from "../../data/author";
import { evidenceById, theoryById } from "../../data/store";
import {
  Chip, CiteList, ConfidenceMark, DatePill, EvidenceLink, Figure, GameMark, Icon, LEXICON_HUE, PHASE_HUE, Page, PageHeader, READING_TONE, RichText, Section,
  Tag, chapterPath, hueOf,
} from "../../components/ui";
import type { Confidence } from "../../data/schema";
import "./essays.css";
import "./author.css";

function LexLine({ line }: { line: Line }) {
  const [id, text] = typeof line === "string" ? [line, undefined] : line;
  const e = evidenceById.get(id);
  if (!e) return null;
  return (
    <li>
      <EvidenceLink id={id} className="lex-line">
        <GameMark id={e.game} />
        <span className={text ? "lex-text lex-text--plain" : "lex-text"}>{text ?? (e.quote ? `“${e.quote.replace(/\s*…$/, "")}”` : e.title)}</span>
      </EvidenceLink>
    </li>
  );
}

const isConfidence = (c: string): c is Confidence => c === "high" || c === "medium" || c === "low";

export default function Author() {
  return (
    <Page title="Scott & Faith" className="essay author-page">
      <PageHeader
        kicker="Essay · The author"
        title="Scott & Faith"
        lede="Before Five Nights at Freddy's, Scott Cawthon spent about twelve years making Christian films and games. Here is that background, what he has said about faith and FNaF in his own words, and what it does and does not change about reading the games."
        aside={<Figure file="scott-pilgrims-progress-game-shot.jpg" caption="The Pilgrim's Progress: The Video Game (c. 2011). The battle commands are Faith, Truth, Pray for and Blessings." tag="Exhibit" eager />}
      />

      <section className="answers" aria-label="The short answers">
        {authorAnswer.map((a) => (
          <article key={a.q} className="answer-card">
            <h2>{a.q}</h2>
            <p className="answer-card__short">{a.short}</p>
            <div className="prose">{a.body.map((b, i) => <p key={i}><RichText text={b} /></p>)}</div>
            <p className="answer-card__conf">{isConfidence(a.confidence) ? <ConfidenceMark value={a.confidence} variant="inline" long /> : <><span className="label">Confidence</span>{a.confidence}</>}</p>
          </article>
        ))}
      </section>

      <Section title="Readings, tested against this background" lead="Each reading is judged on the games first. Scott's faith only affects how literally the games' own words are taken.">
        <div className="reading-grid">
          {readings.map((r) => (
            <article key={r.claim} className="reading">
              <span className="verdict-tag" data-tone={READING_TONE[r.status]}>{READING_STATUS[r.status].label}</span>
              <h3>{r.claim}</h3>
              <p><RichText text={r.body} /></p>
              {r.section && theoryById.has(r.section) && <Tag to={chapterPath(r.section)}>In the theory <Icon icon={ArrowRight} /></Tag>}
            </article>
          ))}
        </div>
      </Section>

      <Section title="The games' own vocabulary" lead="The religious and afterlife lines in the archive's records, grouped by what they do in the story. Select a line to open its record.">
        <div className="lex-grid">
          {lexicon.map((g) => (
            <div key={g.id} className="lex-group" style={{ "--hue": hueOf(LEXICON_HUE, g.id) } as CSSProperties}>
              <h3>{g.theme}</h3>
              <p className="lex-group__gloss">{g.gloss}</p>
              <ul>{g.lines.map((l) => <LexLine key={typeof l === "string" ? l : l[0]} line={l} />)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="From Christian films to Freddy's">
        <ol className="steps">
          {authorTimeline.map((s) => (
            <li key={s.id} className="step" style={{ "--hue": hueOf(PHASE_HUE, s.phase) } as CSSProperties}>
              <div className="step__date"><DatePill label={s.date} kind={/^\d{4}-\d{2}-\d{2}$/.test(s.date) ? "printed" : "estimated"} basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} /></div>
              <div className="step__card">
                <span className="step__phase">{AUTHOR_PHASE[s.phase].label}</span>
                <h3>{s.title}</h3>
                <p className="step__text"><RichText text={s.body} /></p>
                {s.image && <Figure file={s.image} compact />}
                {s.evidence.length > 0 && <p className="step__evidence"><span className="label">Evidence</span> <CiteList ids={s.evidence} /></p>}
                {s.sources && s.sources.length > 0 && (
                  <ul className="ref-list">
                    {s.sources.map((src, i) => (
                      <li key={i} className="ref-line">
                        <a href={src.url} target="_blank" rel="noreferrer">{src.who} · <em>{src.what}</em>{src.date ? ` · ${src.date}` : ""}<Icon icon={ArrowUpRight} /></a>
                        {src.reliability !== "primary" && <Chip>archive</Chip>}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="author-note">
          Hope Animation was a Christian media website run from the UK by David Hutter that sold and hosted Scott's films; it was not Scott's own studio.
          Its archived pages are used here only for titles, years and descriptions. Scott's words are the evidence.
        </p>
      </Section>
    </Page>
  );
}
