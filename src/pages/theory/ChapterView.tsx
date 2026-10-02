import { useEffect, useId, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, TriangleAlert } from "lucide-react";
import type { Evidence, TheorySection } from "../../data/schema";
import { evidenceById } from "../../data/store";
import { CONFIDENCE, Callout, CiteScope, Collapsible, ConfidenceMark, EvidenceList, EvidenceRow, Figure, Icon, RichText, plainText } from "../../components/ui";
import { Blocks } from "./blocks";
import { type PartGroup, chapterCitations, distinctQuestion, pad2, readingMinutes, roman } from "./model";

/** Everything a chapter needs to know about its surroundings. The fixture route supplies its own. */
export interface ChapterContext {
  number: number;
  total: number;
  group?: PartGroup;
  prev?: TheorySection;
  next?: TheorySection;
  numberOf: (id: string) => number;
  find: (id: string) => TheorySection | undefined;
  pathOf: (id: string) => string;
  coverPath: string;
}

/**
 * One chapter of the model as a reading page: where it sits, the question, the answer set large,
 * the confidence in words, the hero image, the body blocks, what pushes back, what would change the
 * answer, related chapters, the numbered sources, further evidence, and previous / next.
 * Every optional field may be missing.
 */
export function ChapterView({ s, ctx, onEnd }: { s: TheorySection; ctx: ChapterContext; onEnd?: () => void }) {
  const cited = useMemo(() => chapterCitations(s), [s]);
  const numbers = useMemo(() => new Map(cited.map((id, i) => [id, i + 1])), [cited]);
  const counter = (s.counterEvidence ?? []).map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
  const counterIds = counter.map((e) => e.id);
  const further = (s.further ?? []).filter((id) => !numbers.has(id) && evidenceById.has(id));
  const seeAlso = (s.seeAlso ?? []).map(ctx.find).filter((c): c is TheorySection => !!c);
  const question = distinctQuestion(s);
  const conf = CONFIDENCE[s.confidence];
  const part = ctx.group?.part;

  const uid = useId();
  const sourcesRef = useRef<HTMLDivElement | null>(null);
  const openSources = () => {
    const d = sourcesRef.current?.querySelector("details");
    if (d) { d.open = true; d.scrollIntoView({ block: "start" }); (d.querySelector("summary") as HTMLElement | null)?.focus({ preventScroll: true }); }
  };

  // Reaching the end of the chapter marks it as read.
  const endRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = endRef.current;
    if (!el || !onEnd) return;
    const obs = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) { onEnd(); obs.disconnect(); } }, { rootMargin: "0px 0px -15% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [onEnd]);

  return (
    <CiteScope prime={cited}>
      <article className="chapter article">
        <header className="chapter-head">
          <p className="kicker chapter-head__kicker">
            {part ? <Link to={`${ctx.coverPath}#part-${part.id}`}>Part {roman(ctx.group!.n)} · {part.title}</Link> : <Link to={ctx.coverPath}>The theory</Link>}
            <span className="chapter-head__count">Chapter {ctx.number} of {ctx.total}</span>
          </p>
          <h1 className="chapter-head__title">{s.title}</h1>
          <div className="verdict" data-level={conf.level}>
            {question && <p className="verdict__q"><span className="label">The question</span>{question}</p>}
            {s.answer && <p className="verdict__a"><span className="label">The model's answer</span><RichText text={s.answer} /></p>}
            <p className="verdict__conf">
              <ConfidenceMark value={s.confidence} variant="inline" long />
              <span className="verdict__help">{conf.help}.</span>
            </p>
          </div>
          <p className="chapter-head__meta">
            {readingMinutes(s)} min read<span aria-hidden> · </span>
            <button type="button" className="chapter-head__sources" onClick={openSources}>{cited.length} record{cited.length === 1 ? "" : "s"} cited</button>
            {counter.length > 0 && <><span aria-hidden> · </span>{counter.length} push{counter.length === 1 ? "es" : ""} back</>}
          </p>
        </header>

        {s.hero && (
          <Figure
            className="chapter-hero wide"
            file={s.hero.image}
            caption={s.hero.caption ? <RichText text={s.hero.caption} /> : undefined}
            alt={s.hero.caption ? plainText(s.hero.caption) : undefined}
            tag="Exhibit"
            eager
          />
        )}

        <Blocks blocks={s.body} />

        {(counter.length > 0 || s.tension) && (
          <section className="pushback" aria-labelledby={`${uid}-pushback`}>
            <h2 id={`${uid}-pushback`}><Icon icon={TriangleAlert} className="pushback__icon" /> What pushes back</h2>
            {counter.length > 0 && (
              <>
                <p className="chapter-note">{counter.length === 1 ? "One record cuts" : `${counter.length} records cut`} against this chapter. The model keeps {counter.length === 1 ? "it" : "them"} in view instead of explaining {counter.length === 1 ? "it" : "them"} away.</p>
                <ul className="ev-list pushback__list">
                  {counter.map((e) => <EvidenceRow key={e.id} e={e} n={numbers.get(e.id)} group={counterIds.length > 1 ? counterIds : undefined} />)}
                </ul>
              </>
            )}
            {s.tension && (
              <div className="pushback__answer">
                <p className="label">How the model handles it</p>
                <p><RichText text={s.tension} /></p>
              </div>
            )}
          </section>
        )}

        {s.changesIf && (
          <Callout tone="open" title="What would change this" className="chapter-changes">
            <p><RichText text={s.changesIf} /></p>
          </Callout>
        )}

        {seeAlso.length > 0 && (
          <section className="see-also" aria-labelledby={`${uid}-seealso`}>
            <h2 id={`${uid}-seealso`} className="label">Read alongside</h2>
            <ul className="see-also__list">
              {seeAlso.map((c) => (
                <li key={c.id}>
                  <Link to={ctx.pathOf(c.id)} className="see-also__item">
                    <span className="see-also__n">{pad2(ctx.numberOf(c.id))}</span>
                    <span className="see-also__title">{c.title}</span>
                    <ConfidenceMark value={c.confidence} variant="glyph" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="chapter-end" ref={sourcesRef}>
          <Collapsible summary="Sources" meta={`${cited.length} record${cited.length === 1 ? "" : "s"} cited in this chapter, in order`}>
            {cited.length > 0 ? <EvidenceList ids={cited} numbers={(id) => numbers.get(id)} claim={false} /> : <p className="muted">This chapter cites no records.</p>}
          </Collapsible>
          {further.length > 0 && (
            <Collapsible summary="Further evidence filed here" meta={`${further.length} more record${further.length === 1 ? "" : "s"} on this thread, not cited above`}>
              <EvidenceList ids={further} />
            </Collapsible>
          )}
        </div>

        <nav className="chapter-pager full" aria-label="Previous and next chapter" ref={endRef}>
          {ctx.prev ? (
            <Link to={ctx.pathOf(ctx.prev.id)} className="chapter-pager__link" rel="prev">
              <span className="label"><Icon icon={ArrowLeft} /> Previous · {pad2(ctx.numberOf(ctx.prev.id))}</span>
              <span className="chapter-pager__title">{ctx.prev.title}</span>
            </Link>
          ) : (
            <Link to={ctx.coverPath} className="chapter-pager__link">
              <span className="label"><Icon icon={ArrowLeft} /> Back to</span>
              <span className="chapter-pager__title">The cover and contents</span>
            </Link>
          )}
          {ctx.next ? (
            <Link to={ctx.pathOf(ctx.next.id)} className="chapter-pager__link chapter-pager__link--next" rel="next">
              <span className="label">Next · {pad2(ctx.numberOf(ctx.next.id))} <Icon icon={ArrowRight} /></span>
              <span className="chapter-pager__title">{ctx.next.title}</span>
            </Link>
          ) : (
            <Link to={`${ctx.coverPath}#contents`} className="chapter-pager__link chapter-pager__link--next">
              <span className="label">The end <Icon icon={ArrowRight} /></span>
              <span className="chapter-pager__title">Back to the contents</span>
            </Link>
          )}
        </nav>
      </article>
    </CiteScope>
  );
}
