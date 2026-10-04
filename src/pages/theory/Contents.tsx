import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import type { TheorySection } from "../../data/schema";
import { ConfidenceMark, FirmGlyph, Icon, RichText, chapterPath, count, firmness, plural, smartQuotes } from "../../components/ui";
import { type PartGroup, type SectionHead, chapterGist, distinctQuestion, pad2, roman } from "./model";

type NumberOf = (id: string) => number;

/**
 * The contents of the model by part. Each chapter shows its title, its question and its answer,
 * so a reader can skim every answer before reading a word of argument. `answers={false}` leaves
 * the answers out: the list is then a page or two on a phone, not twenty.
 */
export function ChapterContents({ groups, numberOf, read, pathOf = chapterPath, answers = true }: { groups: PartGroup[]; numberOf: NumberOf; read: Set<string>; pathOf?: (id: string) => string; answers?: boolean }) {
  return (
    <div className="contents">
      {groups.map((g) => (
        <section key={g.part?.id ?? "rest"} className="contents-part" id={g.part ? `part-${g.part.id}` : "part-more"}>
          <header className="contents-part__head">
            <p className="kicker">Part {roman(g.n)}{g.part?.kicker ? ` · ${smartQuotes(g.part.kicker)}` : ""}</p>
            <h3 className="contents-part__title">{smartQuotes(g.part?.title ?? "Further chapters")}</h3>
            {g.part?.blurb && <p className="contents-part__blurb"><RichText text={g.part.blurb} /></p>}
          </header>
          <ol className="contents-list">
            {g.chapters.map((s) => {
              const gist = chapterGist(s);
              const q = distinctQuestion(s);
              return (
                <li key={s.id}>
                  <Link to={pathOf(s.id)} className="contents-item">
                    <span className="contents-item__n">{pad2(numberOf(s.id))}</span>
                    <span className="contents-item__body">
                      <span className="contents-item__title">{smartQuotes(s.title)}</span>
                      {q && <span className="contents-item__q">{smartQuotes(q)}</span>}
                      {/* Without the answers, a chapter with no question of its own still says what it is about. */}
                      {gist.text && (answers || !q) && <span className={`contents-item__a${gist.derived ? " is-derived" : ""}`}>{smartQuotes(gist.text)}</span>}
                      <span className="contents-item__meta">
                        <ConfidenceMark value={s.confidence} variant="inline" long />
                        {read.has(s.id) && <span className="contents-item__read"><Icon icon={Check} /> Read</span>}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

/**
 * The chapter list used beside a chapter (the rail) and in the phone contents sheet: parts as
 * collapsible groups, the current part open, the current chapter marked, finished chapters ticked.
 * Under the current chapter come its own sections (`sections`), with the one being read marked
 * (`section`): the reader's place inside a long chapter, and the way to another part of it.
 */
export function ChapterNav({ groups, numberOf, current, read, onNavigate, pathOf = chapterPath, sections = [], section }: { groups: PartGroup[]; numberOf: NumberOf; current?: string; read: Set<string>; onNavigate?: () => void; pathOf?: (id: string) => string; sections?: SectionHead[]; section?: string | null }) {
  return (
    <ol className="chapter-nav-list">
      {groups.map((g) => {
        const here = g.chapters.some((s: TheorySection) => s.id === current);
        return (
          <li key={g.part?.id ?? "rest"}>
            <details className="chapter-nav-part" open={here || undefined}>
              <summary>
                <span className="chapter-nav-part__n">{roman(g.n)}</span>
                <span className="chapter-nav-part__title">{smartQuotes(g.part?.title ?? "Further chapters")}</span>
                <span className="chapter-nav-part__count" aria-hidden>{count(g.chapters.length)}</span>
                <span className="sr-only">, {plural(g.chapters.length, "chapter")}</span>
              </summary>
              <ol>
                {g.chapters.map((s) => {
                  const conf = firmness("confidence", s.confidence);
                  const done = read.has(s.id);
                  return (
                    <li key={s.id}>
                      <Link to={pathOf(s.id)} className={`chapter-nav-item${s.id === current ? " is-current" : ""}`} aria-current={s.id === current ? "page" : undefined} onClick={onNavigate}>
                        <span className="chapter-nav-item__n">{pad2(numberOf(s.id))}</span>
                        <span className="chapter-nav-item__title">{smartQuotes(s.title)}</span>
                        {/* The tick says it has been read; the mark still says how sure the chapter is. Both are in the link's name. */}
                        <span className="chapter-nav-item__mark" title={done ? `${conf.word} · Read` : conf.word}>
                          {done && <Icon icon={Check} />}
                          <FirmGlyph level={conf.level} />
                        </span>
                        <span className="sr-only">, {conf.word.toLowerCase()}{done ? ", read" : ""}</span>
                      </Link>
                      {s.id === current && sections.length > 1 && (
                        <ol className="chapter-nav-sections" aria-label="In this chapter">
                          {sections.map((h, i) => (
                            // The parts every chapter closes with stand a little apart from its own headings.
                            <li key={h.id} className={h.closing && i > 0 && !sections[i - 1].closing ? "chapter-nav-sections__closing" : undefined}>
                              <Link to={`${pathOf(s.id)}#${h.id}`} className="chapter-nav-section" aria-current={h.id === section ? "location" : undefined} onClick={onNavigate}>{smartQuotes(h.text)}</Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  );
                })}
              </ol>
            </details>
          </li>
        );
      })}
    </ol>
  );
}
