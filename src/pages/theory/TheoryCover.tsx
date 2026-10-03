import { Link, Navigate } from "react-router-dom";
import { ArrowDown, ArrowRight, BookOpenText } from "lucide-react";
import { outsideStory, storyline, theory, theoryById, theoryIntro } from "../../data/store";
import { ButtonLink, Page, RichText, chapterPath, smartQuotes, useAddress } from "../../components/ui";
import { ChapterContents } from "./Contents";
import { HowToRead, OutsideStory } from "./CoverParts";
import { Storyline } from "./Storyline";
import { chapterNumber, ordered, partGroups, roman, useReadingProgress } from "./model";
import "./theory.css";

/** /theory: the cover of the model. Old links of the form /theory#chapter-id are sent on to the chapter. */
export default function TheoryCover() {
  const { anchor: legacy } = useAddress();
  const { read, last } = useReadingProgress();
  if (legacy && theoryById.has(legacy)) return <Navigate to={chapterPath(legacy)} replace />;

  const first = ordered[0];
  const resume = last && theoryById.has(last) && last !== first?.id ? theoryById.get(last)! : null;
  const readCount = [...read].filter((id) => theoryById.has(id)).length;

  return (
    <Page title="The Theory" flush className="cover">
      <header className="cover-hero band">
        <div className="band__inner">
          <div className="cover-hero__grid">
            <div className="cover-hero__main">
              <p className="kicker">The theory · {theory.length} chapters in {partGroups.length} parts</p>
              <h1 className="cover-hero__title">{smartQuotes(theoryIntro.title)}</h1>
              <p className="cover-hero__standfirst">{smartQuotes(theoryIntro.standfirst)}</p>
              <div className="thesis">
                <p className="label">The thesis</p>
                <p className="thesis__text"><RichText text={theoryIntro.thesis} /></p>
              </div>
              <div className="cover-hero__actions">
                {storyline.length > 0 && <ButtonLink to="/theory#storyline" variant="primary" icon={BookOpenText}>Read the story first</ButtonLink>}
                {resume
                  ? <ButtonLink to={chapterPath(resume.id)} iconEnd={ArrowRight}>Continue: chapter {chapterNumber(resume.id)}</ButtonLink>
                  : first && <ButtonLink to={chapterPath(first.id)} iconEnd={ArrowRight}>Begin with chapter 1</ButtonLink>}
                <ButtonLink to="/theory#contents" variant="quiet" iconEnd={ArrowDown}>All {theory.length} answers</ButtonLink>
              </div>
            </div>
            <nav className="cover-parts" aria-labelledby="h-cover-parts">
              <p id="h-cover-parts" className="label">In {partGroups.length} parts</p>
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
          <HowToRead paragraphs={theoryIntro.howToRead} />
        </div>
      </section>

      {storyline.length > 0 && (
        <section className="cover-section band" id="storyline" aria-labelledby="h-story">
          <div className="band__inner">
            <p className="kicker">The short version</p>
            <h2 id="h-story" className="cover-section__title">The story, in order</h2>
            <p className="cover-section__lead">
              {storyline.length} beats, start to finish. Each one says how sure the model is and which chapters make the case.
            </p>
            <Storyline beats={storyline} />
          </div>
        </section>
      )}

      <section className="cover-section band" id="contents" aria-labelledby="h-contents">
        <div className="band__inner">
          <p className="kicker">The full case</p>
          <h2 id="h-contents" className="cover-section__title">Every question, and the model’s answer</h2>
          <p className="cover-section__lead">
            {theory.length} chapters in {partGroups.length} parts. Skim the answers here, then open a chapter for the argument, the evidence and what pushes back.
            {readCount > 0 && <> You have read {readCount} of {theory.length}.</>}
          </p>
          <ChapterContents groups={partGroups} numberOf={chapterNumber} read={read} />
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
