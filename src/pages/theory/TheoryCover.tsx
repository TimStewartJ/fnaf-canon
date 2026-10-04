import { Link, Navigate } from "react-router-dom";
import { ArrowDown, ArrowRight, BookOpenText } from "lucide-react";
import { outsideStory, storyline, theory, theoryById, theoryIntro } from "../../data/store";
import { ButtonLink, Page, RichText, Segmented, chapterPath, count, plural, smartQuotes, useAddress, useMediaQuery, useStored } from "../../components/ui";
import { ChapterContents } from "./Contents";
import { HowToRead, OutsideStory } from "./CoverParts";
import { StoryProgress, Storyline } from "./Storyline";
import { chapterNumber, minutesFor, ordered, partGroups, roman, useContinue, useReadingProgress } from "./model";
import "./theory.css";

/** /theory: the cover of the model. Old links of the form /theory#chapter-id are sent on to the chapter. */
export default function TheoryCover() {
  const { anchor: legacy } = useAddress();
  const { read } = useReadingProgress();
  const resume = useContinue();
  // The contents with every answer is the whole model at a skim, and twenty screens on a phone:
  // there it starts as questions only. The reader's own choice, once made, is kept.
  const phone = useMediaQuery("(max-width: 640px)");
  const [chosen, setChosen] = useStored<"answers" | "questions" | null>("fca:contents", null);
  const show = chosen ?? (phone ? "questions" : "answers");
  // What the list holds as it stands, for the words that lead to it: they promise what it shows.
  const listed = show === "answers" ? "answers" : "questions";
  if (legacy && theoryById.has(legacy)) return <Navigate to={chapterPath(legacy)} replace />;

  const first = ordered[0];
  const readCount = [...read].filter((id) => theoryById.has(id)).length;

  return (
    <Page title={theoryIntro.title} kind="The theory" flush className="cover">
      <header className="cover-hero band">
        <div className="band__inner">
          <div className="cover-hero__grid">
            <div className="cover-hero__main">
              <p className="kicker">The theory · {plural(theory.length, "chapter")} in {plural(partGroups.length, "part")}</p>
              <h1 className="cover-hero__title">{smartQuotes(theoryIntro.title)}</h1>
              <p className="cover-hero__standfirst">{smartQuotes(theoryIntro.standfirst)}</p>
              <div className="thesis">
                <p className="label">The thesis</p>
                <p className="thesis__text"><RichText text={theoryIntro.thesis} /></p>
              </div>
              <div className="cover-hero__actions">
                {storyline.length > 0 && <ButtonLink to="/theory#storyline" variant="primary" icon={BookOpenText}>Read the story first</ButtonLink>}
                {resume
                  ? <ButtonLink to={resume.to} iconEnd={ArrowRight}>Continue: chapter {resume.number}</ButtonLink>
                  : first && <ButtonLink to={chapterPath(first.id)} iconEnd={ArrowRight}>Begin with chapter 1</ButtonLink>}
                <ButtonLink to="/theory#contents" variant="quiet" iconEnd={ArrowDown}>All {count(theory.length)} {listed}</ButtonLink>
              </div>
            </div>
            <nav className="cover-parts" aria-labelledby="h-cover-parts">
              <p id="h-cover-parts" className="label">In {plural(partGroups.length, "part")}</p>
              <ol>
                {partGroups.map((g) => (
                  <li key={g.part?.id ?? "more"}>
                    <Link to={`/theory#part-${g.part?.id ?? "more"}`}>
                      <span className="cover-parts__n">{roman(g.n)}</span>
                      <span className="cover-parts__title">{smartQuotes(g.part?.title ?? "Further chapters")}</span>
                      <span className="cover-parts__kicker">{g.part?.kicker && smartQuotes(g.part.kicker)}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </header>

      <section className="cover-section band" aria-labelledby="h-howto">
        <div className="band__inner">
          <h2 id="h-howto" className="cover-section__title">How to read it</h2>
          <HowToRead paragraphs={theoryIntro.howToRead} folded={phone} />
        </div>
      </section>

      {storyline.length > 0 && (
        <section className="cover-section band" id="storyline" aria-labelledby="h-story">
          <div className="band__inner">
            <p className="kicker">The short version</p>
            <h2 id="h-story" className="cover-section__title">The story, in order</h2>
            <p className="cover-section__lead">
              {plural(storyline.length, "beat")}, start to finish: about {plural(minutesFor(storyline.map((b) => b.text)), "minute")}. Each one says how sure the model is and which chapters make the case.
            </p>
          </div>
          {/* Outside the column, so the line runs the full width of the window. */}
          <StoryProgress beats={storyline} />
          <div className="band__inner story-body">
            <Storyline beats={storyline} />
            {/* Where the story stops, and the two ways on. */}
            <div className="story-end">
              <p className="story-end__text">That is the whole story, as far as the evidence carries it. The chapters make the case for it one question at a time.</p>
              <div className="story-end__actions">
                {first && <ButtonLink to={chapterPath(first.id)} variant="primary" iconEnd={ArrowRight}>Begin with chapter 1</ButtonLink>}
                <ButtonLink to="/theory#contents" variant="quiet" iconEnd={ArrowDown}>All {count(theory.length)} {listed}</ButtonLink>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="cover-section band" id="contents" aria-labelledby="h-contents">
        <div className="band__inner">
          <p className="kicker">The full case</p>
          <h2 id="h-contents" className="cover-section__title">Every question, and the model’s answer</h2>
          <p className="cover-section__lead">
            {plural(theory.length, "chapter")} in {plural(partGroups.length, "part")}. Skim the {listed} here, then open a chapter for the argument, the evidence and what pushes back.
            {show === "questions" && <> “With answers” puts the model’s answer under each question.</>}
            {readCount > 0 && <> You have read {count(readCount)} of {count(theory.length)}.</>}
          </p>
          {/* How a chapter is built: said here, where the chapters begin, and not before the story. */}
          {theoryIntro.aboutChapters && <p className="contents-about"><RichText text={theoryIntro.aboutChapters} /></p>}
          {/* The parts, as a way around the list where the hero's own list of parts is not shown (a narrow window). */}
          <nav className="parts-strip" aria-label="Parts">
            {partGroups.map((g) => (
              <Link key={g.part?.id ?? "more"} to={`/theory#part-${g.part?.id ?? "more"}`} className="parts-strip__item">
                <span className="parts-strip__n">{roman(g.n)}</span>{smartQuotes(g.part?.title ?? "Further chapters")}
              </Link>
            ))}
          </nav>
          <div className="contents-show">
            <Segmented label="Show" value={show} onChange={setChosen} options={[{ id: "questions", label: "Questions" }, { id: "answers", label: "With answers" }]} />
          </div>
          <ChapterContents groups={partGroups} numberOf={chapterNumber} read={read} answers={show === "answers"} />
        </div>
      </section>

      {outsideStory.length > 0 && (
        <section className="cover-section band" id="outside" aria-labelledby="h-outside">
          <div className="band__inner">
            <p className="kicker">Appendix</p>
            <h2 id="h-outside" className="cover-section__title">Outside the story</h2>
            <p className="cover-section__lead">Records the model deliberately gives no story weight, and why.</p>
            <OutsideStory groups={outsideStory} />
          </div>
        </section>
      )}

      <section className="cover-section cover-section--end band">
        <div className="band__inner cover-end">
          <p>
            Nothing here is taken on trust. The <Link to="/method">method</Link> says what counts as evidence, and the{" "}
            <Link to="/evidence">evidence locker</Link> holds every record the chapters cite.
          </p>
          {first && <ButtonLink to={chapterPath(first.id)} variant="primary" iconEnd={ArrowRight}>Begin with chapter 1</ButtonLink>}
        </div>
      </section>
    </Page>
  );
}
