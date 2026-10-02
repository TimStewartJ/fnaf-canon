import { Link } from "react-router-dom";
import type { TheorySection } from "../../data/schema";
import { ChapterResolverContext, Page, PageHeader, type ChapterResolver } from "../../components/ui";
import { ChapterView, type ChapterContext } from "../theory/ChapterView";
import { ChapterContents, ChapterNav } from "../theory/Contents";
import { HowToRead, OutsideStory } from "../theory/CoverParts";
import { Storyline } from "../theory/Storyline";
import { groupByPart } from "../theory/model";
import { fxChapters, fxHowToRead, fxOutside, fxParts, fxStoryline } from "./fixture";
import "../theory/theory.css";
import "./dev.css";

const groups = groupByPart(fxChapters, fxParts);
const ordered = groups.flatMap((g) => g.chapters);
const numberOf = (id: string) => ordered.findIndex((s) => s.id === id) + 1;
const find = (id: string) => fxChapters.find((s) => s.id === id);
const pathOf = (id: string) => `/dev/blocks#${id}`;
const resolver: ChapterResolver = { find, pathOf };
const SOME = new Set(["fx-bare"]);

function context(s: TheorySection): ChapterContext {
  const i = ordered.indexOf(s);
  return { number: i + 1, total: ordered.length, group: groups.find((g) => g.chapters.includes(s)), prev: ordered[i - 1], next: ordered[i + 1], numberOf, find, pathOf, coverPath: "/dev/blocks" };
}

/**
 * /dev/blocks: a review fixture, not linked from the navigation. It renders made-up theory content
 * (see fixture.ts) through the real components, so every field and block type of the content
 * contract can be checked before the real content uses it.
 */
export default function DevBlocks() {
  return (
    <ChapterResolverContext.Provider value={resolver}>
    <Page title="Fixture: theory blocks" flush className="dev-page">
      <div className="band">
        <div className="band__inner">
          <PageHeader
            kicker="Review fixture · not part of the archive"
            title="Every theory field and block"
            lede="Made-up content rendered through the real theory components. Use it to check blocks the real chapters do not use yet, sparse chapters, long storylines and edge cases."
          >
            <nav className="dev-toc" aria-label="Fixture sections">
              <Link to="/dev/blocks#fx-how">How to read</Link>
              <Link to="/dev/blocks#fx-story">Storyline (16 beats)</Link>
              <Link to="/dev/blocks#fx-story-compact">Storyline, compact</Link>
              <Link to="/dev/blocks#fx-contents">Contents</Link>
              <Link to="/dev/blocks#fx-nav">Rail</Link>
              <Link to="/dev/blocks#fx-outside">Outside the story</Link>
              {ordered.map((s) => <Link key={s.id} to={pathOf(s.id)}>Chapter {numberOf(s.id)}</Link>)}
              <Link to="/dev/kit">Component kit</Link>
            </nav>
          </PageHeader>

          <section className="dev-section" id="fx-how">
            <p className="dev-label">HowToRead</p>
            <HowToRead paragraphs={fxHowToRead} />
          </section>

          <section className="dev-section" id="fx-story">
            <p className="dev-label">Storyline · 16 beats, with images</p>
            <Storyline beats={fxStoryline} chapters={find} />
          </section>

          <section className="dev-section" id="fx-story-compact">
            <p className="dev-label">Storyline compact (as on the home page)</p>
            <div className="dev-narrow"><Storyline beats={fxStoryline.slice(0, 4)} chapters={find} compact /></div>
          </section>

          <section className="dev-section" id="fx-contents">
            <p className="dev-label">ChapterContents · parts with and without a kicker, a chapter with no part, one chapter marked read</p>
            <ChapterContents groups={groups} numberOf={numberOf} read={SOME} pathOf={pathOf} />
          </section>

          <section className="dev-section" id="fx-nav">
            <p className="dev-label">ChapterNav (the rail and the phone contents sheet)</p>
            <div className="dev-rail"><ChapterNav groups={groups} numberOf={numberOf} current="fx-everything" read={SOME} pathOf={pathOf} /></div>
          </section>

          <section className="dev-section" id="fx-outside">
            <p className="dev-label">OutsideStory</p>
            <OutsideStory groups={fxOutside} />
          </section>

          {ordered.map((s) => (
            <section key={s.id} className="dev-section dev-chapter" id={s.id}>
              <p className="dev-label">ChapterView · {s.id}</p>
              <ChapterView s={s} ctx={context(s)} />
            </section>
          ))}
          <p className="dev-label">End of fixture.</p>
        </div>
      </div>
    </Page>
    </ChapterResolverContext.Provider>
  );
}
