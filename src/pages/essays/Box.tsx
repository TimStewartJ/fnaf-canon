import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { boxTimeline, boxAnswer, boxGuesses, type BoxStep } from "../../data/box";
import { CiteList, DatePill, Figure, Icon, PHASE_HUE, Page, PageHeader, RichText, Section, hueOf, smartQuotes } from "../../components/ui";
import "./essays.css";
import "./box.css";

const PHASE: Record<BoxStep["phase"], string> = { planted: "Planted", explained: "Explained", shelved: "Shelved", echoed: "Echoed", abandoned: "Abandoned" };

export default function Box() {
  return (
    <Page title="The Box" className="essay box-page">
      <PageHeader
        kicker="Essay · FNaF4, Night 7"
        title="The locked box"
        lede="“Perhaps some things are best left forgotten, for now.” Beating FNaF4's hardest night shows a grey box with two padlocks that will not open. Here is everything the games and Scott have said about it, in order, and what that adds up to."
        aside={<Figure file="fnaf4-locked-box-ending.jpg" caption="FNaF4, Night 7: the box that cannot be opened" tag="Exhibit" eager />}
      />

      <section className="answers" aria-label="The short answers">
        {boxAnswer.map((a) => (
          <article key={a.q} className="answer-card">
            <h2>{a.q}</h2>
            <p className="answer-card__short">{smartQuotes(a.short)}</p>
            <div className="prose">{a.body.map((b, i) => <p key={i}><RichText text={b} /></p>)}</div>
            <p className="answer-card__conf"><span className="label">Confidence</span>{a.confidence}</p>
          </article>
        ))}
      </section>

      <Section title="The box, step by step">
        <ol className="steps">
          {boxTimeline.map((s) => (
            <li key={s.id} className="step" style={{ "--hue": hueOf(PHASE_HUE, s.phase) } as CSSProperties}>
              <div className="step__date"><DatePill label={s.date} kind="printed" basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} /></div>
              <div className="step__card">
                <span className="step__phase">{PHASE[s.phase]}</span>
                <h3>{smartQuotes(s.title)}</h3>
                <p className="step__text"><RichText text={s.body} /></p>
                {s.image && <Figure file={s.image} compact />}
                <p className="step__evidence"><span className="label">Evidence</span> <CiteList ids={s.evidence} /></p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="What the community guessed" lead={<>Referenced, not used as evidence. See <Link to="/community">Theorists &amp; Scott</Link> for the wider picture.</>}>
        <div className="guess-grid">
          {boxGuesses.map((g) => (
            <article key={g.name} className="guess">
              <h3>{g.name}</h3>
              <p>{g.idea}</p>
              <p><span className="label">Against the evidence</span> <RichText text={g.verdict} /></p>
              {g.source && <p className="guess__src">{g.source.url ? <a href={g.source.url} target="_blank" rel="noreferrer">{g.source.who} · {g.source.what}<Icon icon={ArrowUpRight} /></a> : `${g.source.who} · ${g.source.what}`}</p>}
            </article>
          ))}
        </div>
      </Section>
    </Page>
  );
}
