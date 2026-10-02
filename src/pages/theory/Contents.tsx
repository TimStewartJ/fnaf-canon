import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import type { TheorySection } from "../../data/schema";
import { ConfidenceMark, FirmGlyph, Icon, RichText, chapterPath, CONFIDENCE } from "../../components/ui";
import { type PartGroup, chapterGist, distinctQuestion, pad2, roman } from "./model";

type NumberOf = (id: string) => number;

/**
 * The contents of the model by part. Each chapter shows its title, its question and its answer,
 * so a reader can skim every answer before reading a word of argument.
 */
export function ChapterContents({ groups, numberOf, read, pathOf = chapterPath }: { groups: PartGroup[]; numberOf: NumberOf; read: Set<string>; pathOf?: (id: string) => string }) {
  return (
    <div className="contents">
      {groups.map((g) => (
        <section key={g.part?.id ?? "rest"} className="contents-part" id={g.part ? `part-${g.part.id}` : "part-more"}>
          <header className="contents-part__head">
            <p className="kicker">Part {roman(g.n)}{g.part?.kicker ? ` · ${g.part.kicker}` : ""}</p>
            <h3 className="contents-part__title">{g.part?.title ?? "Further chapters"}</h3>
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
                      <span className="contents-item__title">{s.title}</span>
                      {q && <span className="contents-item__q">{q}</span>}
                      {gist.text && <span className={`contents-item__a${gist.derived ? " is-derived" : ""}`}>{gist.text}</span>}
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
 */
export function ChapterNav({ groups, numberOf, current, read, onNavigate, pathOf = chapterPath }: { groups: PartGroup[]; numberOf: NumberOf; current?: string; read: Set<string>; onNavigate?: () => void; pathOf?: (id: string) => string }) {
  return (
    <ol className="chapter-nav-list">
      {groups.map((g) => {
        const here = g.chapters.some((s: TheorySection) => s.id === current);
        return (
          <li key={g.part?.id ?? "rest"}>
            <details className="chapter-nav-part" open={here || undefined}>
              <summary>
                <span className="chapter-nav-part__n">{roman(g.n)}</span>
                <span className="chapter-nav-part__title">{g.part?.title ?? "Further chapters"}</span>
                <span className="chapter-nav-part__count">{g.chapters.length}</span>
              </summary>
              <ol>
                {g.chapters.map((s) => (
                  <li key={s.id}>
                    <Link to={pathOf(s.id)} className={`chapter-nav-item${s.id === current ? " is-current" : ""}`} aria-current={s.id === current ? "page" : undefined} onClick={onNavigate}>
                      <span className="chapter-nav-item__n">{pad2(numberOf(s.id))}</span>
                      <span className="chapter-nav-item__title">{s.title}</span>
                      <span className="chapter-nav-item__mark" title={read.has(s.id) ? "Read" : CONFIDENCE[s.confidence].word}>
                        {read.has(s.id) ? <Icon icon={Check} label="Read" /> : <FirmGlyph level={CONFIDENCE[s.confidence].level} />}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </details>
          </li>
        );
      })}
    </ol>
  );
}
