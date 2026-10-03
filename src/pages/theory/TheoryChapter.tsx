import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, List, X } from "lucide-react";
import type { TheorySection } from "../../data/schema";
import { theory, theoryById, theoryIntro } from "../../data/store";
import { ButtonLink, Empty, Icon, Page, chapterPath, useModalDialog, smartQuotes } from "../../components/ui";
import { ChapterView, type ChapterContext } from "./ChapterView";
import { ChapterNav } from "./Contents";
import { type SectionHead, chapterHeads, chapterNumber, neighbours, ordered, pad2, partGroups, partOfChapter, useReadingProgress } from "./model";
import "./theory.css";

/** A thin bar showing how far down the page the reader is. */
function ReadingProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.setProperty("--p", String(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    update();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return <div className="reading-progress" ref={ref} aria-hidden />;
}

/**
 * The section of the chapter the reader is in: the last heading to have reached the top of the
 * window (where a link to it would put it). Null before the first one.
 */
function useCurrentSection(ids: string[]): string | null {
  const [at, setAt] = useState<string | null>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0) + 8;
      let now: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top > line) break;
        now = id;
      }
      setAt(now);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    on();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [ids]);
  return at;
}

/** The contents as a sheet, for screens too narrow for the rail. */
function ContentsSheet({ current, read, onClose, sections, section }: { current: string; read: Set<string>; onClose: () => void; sections: SectionHead[]; section: string | null }) {
  const dialogProps = useModalDialog(true, onClose);
  return (
    <dialog className="contents-sheet" aria-label="Contents" {...dialogProps}>
      <header className="contents-sheet__bar">
        <Link to="/theory" className="contents-sheet__home" onClick={onClose}>{smartQuotes(theoryIntro.title)}</Link>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close contents" autoFocus><Icon icon={X} /></button>
      </header>
      <div className="contents-sheet__body">
        <ChapterNav groups={partGroups} numberOf={chapterNumber} current={current} read={read} onNavigate={onClose} sections={sections} section={section} />
      </div>
    </dialog>
  );
}

function ChapterScreen({ s }: { s: TheorySection }) {
  const { read, markRead, markOpened } = useReadingProgress();
  const [sheet, setSheet] = useState(false);
  const number = chapterNumber(s.id);
  const { prev, next } = neighbours(s.id);
  useEffect(() => { markOpened(s.id); }, [s.id, markOpened]);
  const onEnd = useCallback(() => markRead(s.id), [markRead, s.id]);
  const heads = useMemo(() => chapterHeads(s), [s]);
  const section = useCurrentSection(useMemo(() => heads.map((h) => h.id), [heads]));
  // The rail scrolls on its own when the window is short. It is moved (not the page) so that the
  // chapter being read is in it.
  const rail = useRef<HTMLElement | null>(null);
  useLayoutEffect(() => {
    const box = rail.current, here = box?.querySelector<HTMLElement>(".chapter-nav-item.is-current");
    if (!box || !here) return;
    const b = box.getBoundingClientRect(), h = here.getBoundingClientRect();
    if (h.top < b.top + 8 || h.bottom > b.bottom - 8) box.scrollTop += h.top - b.top - box.clientHeight / 3;
  }, [s.id]);

  const ctx: ChapterContext = {
    number, total: ordered.length, group: partOfChapter(s.id), prev, next,
    numberOf: chapterNumber, find: (id) => theoryById.get(id), pathOf: chapterPath, coverPath: "/theory",
  };

  return (
    <Page title={s.title} kind="Chapter" flush className="chapter-page">
      <ReadingProgress />
      <div className="chapter-bar">
        <button type="button" className="chapter-bar__contents" onClick={() => setSheet(true)} aria-haspopup="dialog" aria-label={`Contents. Chapter ${number}: ${s.title}`}>
          <Icon icon={List} />
          <span className="chapter-bar__n">{pad2(number)}</span>
          <span className="chapter-bar__title">{smartQuotes(s.title)}</span>
        </button>
        <span className="chapter-bar__pager">
          {prev ? <Link to={chapterPath(prev.id)} className="icon-btn" aria-label={`Previous chapter: ${prev.title}`}><Icon icon={ChevronLeft} /></Link> : <span className="icon-btn" aria-hidden />}
          {next ? <Link to={chapterPath(next.id)} className="icon-btn" aria-label={`Next chapter: ${next.title}`}><Icon icon={ChevronRight} /></Link> : <span className="icon-btn" aria-hidden />}
        </span>
      </div>
      {/* The chapter comes first in the document, so "Skip to content" and the first Tab land in it
          and not in front of the list of chapters. The stylesheet still draws the rail on the left. */}
      <div className="chapter-layout">
        <ChapterView s={s} ctx={ctx} onEnd={onEnd} heads={heads} />
        <aside className="chapter-rail" ref={rail}>
          <Link to="/theory" className="chapter-rail__home"><Icon icon={ArrowLeft} /> {smartQuotes(theoryIntro.title)}</Link>
          <p className="chapter-rail__progress" aria-live="off">{[...read].filter((id) => theoryById.has(id)).length} of {theory.length} chapters read</p>
          <nav aria-label="Chapters"><ChapterNav groups={partGroups} numberOf={chapterNumber} current={s.id} read={read} sections={heads} section={section} /></nav>
        </aside>
      </div>
      {sheet && <ContentsSheet current={s.id} read={read} onClose={() => setSheet(false)} sections={heads} section={section} />}
    </Page>
  );
}

/** /theory/:chapterId */
export default function TheoryChapter() {
  const { chapterId = "" } = useParams();
  const s = theoryById.get(chapterId);
  if (!s) {
    return (
      <Page title="Chapter not found" narrow>
        <Empty heading title="There is no chapter with that address." action={<ButtonLink to="/theory" variant="primary">See all chapters</ButtonLink>}>
          The model has no chapter called “{chapterId}”. It may have been renamed.
        </Empty>
      </Page>
    );
  }
  return <ChapterScreen s={s} />;
}
