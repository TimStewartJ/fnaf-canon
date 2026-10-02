import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { credits, eras, evidence, games, people, relations, storyline, theory, theoryById, theoryIntro, timeline } from "../../data/store";
import { ERA_DATES } from "../../data/dates";
import { homeSummary, keyQuestions } from "../../data/home";
import { DatePill, Figure, Icon, Page, RichText, StatusMark, chapterPath, eraHue, plainText } from "../../components/ui";
import { Storyline } from "../theory/Storyline";
import { chapterNumber, partGroups } from "../theory/model";
import "../theory/theory.css";
import "./home.css";

const HERO_IMAGE = "fnaf2-take-cake-to-the-children.png";
const BEATS_ON_HOME = 6;
const STRIP = ["fnaf4-fredbear-and-friends-1983-tv.png", "fnaf1-missing-children-newspapers.jpg", "fnaf3-springlock-death.png", "ffps-insanity-scup-blueprint.png"];

/** A home section: heading and intro on the left, content on the right (stacked on a phone). */
function HomeSection({ id, kicker, title, lead, more, children }: { id: string; kicker: string; title: string; lead?: ReactNode; more?: ReactNode; children: ReactNode }) {
  return (
    <section className="home-section band" aria-labelledby={`h-${id}`}>
      <div className="band__inner home-section__grid">
        <header className="home-section__head">
          <p className="kicker">{kicker}</p>
          <h2 id={`h-${id}`} className="home-section__title">{title}</h2>
          {lead && <p className="home-section__lead">{lead}</p>}
          {more && <p className="home-section__more">{more}</p>}
        </header>
        <div className="home-section__body">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  const storyWords = storyline.map((b) => plainText(b.text)).join(" ").split(/\s+/).length;
  const storyMinutes = Math.max(1, Math.round(storyWords / 200));
  const heroImage = credits.find((c) => c.file === HERO_IMAGE)?.file ?? credits[0]?.file;
  const sources = games.filter((g) => evidence.some((e) => e.game === g.id)).length;
  const strip = STRIP.filter((f) => credits.some((c) => c.file === f));
  const stats: [number, string, string][] = [
    [evidence.length, "evidence records", "/evidence"],
    [sources, "sources", "/sources"],
    [people.length, "people", "/people"],
    [relations.length, "relationships", "/family"],
    [timeline.length, "timeline events", "/timeline"],
    [credits.length, "screenshots", "/gallery"],
  ];
  const questions = keyQuestions.filter((q) => theoryById.has(q.section));

  return (
    <Page title={null} flush className="home">
      <header className="home-hero band">
        <div className="band__inner">
          <div className="home-hero__grid">
            <div className="home-hero__text">
              <p className="kicker">Five Nights at Freddy's, from the evidence up</p>
              <h1 className="home-hero__title">{theoryIntro.standfirst}</h1>
              <p className="home-hero__thesis"><RichText text={theoryIntro.thesis} /></p>
            </div>
            {heroImage && <Figure className="home-hero__figure" file={heroImage} tag="Exhibit" eager />}
          </div>

          <nav className="path" aria-label="Where to start">
            <Link to="/theory#storyline" className="path__step path__step--first">
              <span className="path__n">1</span>
              <span className="path__title">Read the story <Icon icon={ArrowRight} /></span>
              <span className="path__desc">The whole thing in order: {storyline.length} beats, about {storyMinutes} minute{storyMinutes === 1 ? "" : "s"}.</span>
            </Link>
            <Link to="/theory" className="path__step">
              <span className="path__n">2</span>
              <span className="path__title">Then the full case <Icon icon={ArrowRight} /></span>
              <span className="path__desc">{theory.length} chapters. Each asks one question, answers it, and shows what pushes back.</span>
            </Link>
            <Link to="/evidence" className="path__step">
              <span className="path__n">3</span>
              <span className="path__title">Then check the evidence <Icon icon={ArrowRight} /></span>
              <span className="path__desc">{evidence.length} records, each one fact pinned to an exact spot in a game or to Scott's own words.</span>
            </Link>
          </nav>
        </div>
      </header>

      {storyline.length > 0 && (
        <HomeSection
          id="story"
          kicker="The story in brief"
          title="What happened, in order"
          lead="The model's short telling. Every beat carries a mark for how sure it is and the chapters that argue it."
          more={<Link to="/theory#storyline">{storyline.length > BEATS_ON_HOME ? `Read all ${storyline.length} beats` : "Read it with the exhibits"}<Icon icon={ArrowRight} /></Link>}
        >
          <Storyline beats={storyline.slice(0, BEATS_ON_HOME)} compact />
          {storyline.length > BEATS_ON_HOME && (
            <p className="home-more"><Link to="/theory#storyline">…and {storyline.length - BEATS_ON_HOME} more beats, to the end of the story<Icon icon={ArrowRight} /></Link></p>
          )}
        </HomeSection>
      )}

      {questions.length > 0 && (
        <HomeSection
          id="questions"
          kicker="The full case"
          title="Questions the model answers"
          lead={`The old arguments, each with the model's answer in a sentence. The reasoning is in the chapter behind it.`}
          more={<Link to="/theory#contents">All {theory.length} chapters in {partGroups.length} parts<Icon icon={ArrowRight} /></Link>}
        >
          <ul className="qa-list">
            {questions.map((q) => (
              <li key={q.q}>
                <Link to={chapterPath(q.section)} className="qa">
                  <span className="qa__q">{q.q}</span>
                  <span className="qa__a">{q.a}</span>
                  <span className="qa__where">Chapter {chapterNumber(q.section)} · {theoryById.get(q.section)?.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </HomeSection>
      )}

      <HomeSection
        id="findings"
        kicker="The ground it stands on"
        title="Six things the evidence establishes"
        lead="Each is marked canon, strong inference or theory. The small numbers open the records behind a sentence without leaving this page."
        more={<Link to="/method">How the archive decides what counts<Icon icon={ArrowRight} /></Link>}
      >
        <div className="findings">
          {homeSummary.map((s) => (
            <article key={s.title} className="finding">
              <StatusMark value={s.status} long />
              <h3 className="finding__title">{s.title}</h3>
              <p className="finding__text"><RichText text={s.text} /></p>
            </article>
          ))}
        </div>
      </HomeSection>

      <HomeSection
        id="eras"
        kicker="The timeline"
        title="Eight eras, one line of events"
        lead="Every event, death and location laid out in order, each date marked as printed, derived or estimated."
        more={<Link to="/timeline">Open the timeline<Icon icon={ArrowRight} /></Link>}
      >
        <ol className="era-list">
          {eras.map((e, i) => (
            <li key={e.id} className="era-row" style={{ "--hue": eraHue(e.id) } as CSSProperties}>
              <span className="era-row__n">{String(i + 1).padStart(2, "0")}</span>
              <div className="era-row__body">
                <h3 className="era-row__name"><Link to={`/timeline?era=${e.id}`}>{e.name}</Link></h3>
                <p className="era-row__sum">{e.summary}</p>
              </div>
              <DatePill label={e.range} kind={ERA_DATES[e.id]?.kind ?? "unknown"} basis={ERA_DATES[e.id]?.basis} evidence={ERA_DATES[e.id]?.evidence} compact />
            </li>
          ))}
        </ol>
      </HomeSection>

      <HomeSection
        id="locker"
        kicker="The evidence"
        title="Nothing taken on trust"
        lead="The archive is built from single facts, each with its source. Books, films and fan theories are left out by design."
        more={<Link to="/gallery">All {credits.length} screenshots<Icon icon={ArrowRight} /></Link>}
      >
        <ul className="stat-row">
          {stats.map(([n, label, to]) => (
            <li key={label}><Link to={to} className="stat"><span className="stat__n">{n}</span><span className="stat__label">{label}</span></Link></li>
          ))}
        </ul>
        {strip.length > 0 && <div className="exhibit-strip">{strip.map((f) => <Figure key={f} file={f} />)}</div>}
      </HomeSection>
    </Page>
  );
}
