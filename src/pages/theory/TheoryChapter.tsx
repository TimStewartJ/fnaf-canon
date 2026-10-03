import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, List, X } from "lucide-react";
import type { TheorySection } from "../../data/schema";
import { theory, theoryById, theoryIntro } from "../../data/store";
import { ButtonLink, Empty, Icon, Page, chapterPath, useModalDialog, smartQuotes } from "../../components/ui";
import { ChapterView, type ChapterContext } from "./ChapterView";
import { ChapterNav } from "./Contents";
import { chapterNumber, neighbours, ordered, pad2, partGroups, partOfChapter, useReadingProgress } from "./model";
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

/** The contents as a sheet, for screens too narrow for the rail. */
function ContentsSheet({ current, read, onClose }: { current: string; read: Set<string>; onClose: () => void }) {
  const dialogProps = useModalDialog(true, onClose);
  return (
    <dialog className="contents-sheet" aria-label="Contents" {...dialogProps}>
      <header className="contents-sheet__bar">
        <Link to="/theory" className="contents-sheet__home" onClick={onClose}>{smartQuotes(theoryIntro.title)}</Link>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close contents" autoFocus><Icon icon={X} /></button>
      </header>
      <div className="contents-sheet__body">
        <ChapterNav groups={partGroups} numberOf={chapterNumber} current={current} read={read} onNavigate={onClose} />
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

  const ctx: ChapterContext = {
    number, total: ordered.length, group: partOfChapter(s.id), prev, next,
    numberOf: chapterNumber, find: (id) => theoryById.get(id), pathOf: chapterPath, coverPath: "/theory",
  };

  return (
    <Page title={s.title} flush className="chapter-page">
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
      <div className="chapter-layout">
        <aside className="chapter-rail">
          <Link to="/theory" className="chapter-rail__home"><Icon icon={ArrowLeft} /> {smartQuotes(theoryIntro.title)}</Link>
          <p className="chapter-rail__progress" aria-live="off">{[...read].filter((id) => theoryById.has(id)).length} of {theory.length} chapters read</p>
          <nav aria-label="Chapters"><ChapterNav groups={partGroups} numberOf={chapterNumber} current={s.id} read={read} /></nav>
        </aside>
        <ChapterView s={s} ctx={ctx} onEnd={onEnd} />
      </div>
      {sheet && <ContentsSheet current={s.id} read={read} onClose={() => setSheet(false)} />}
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
        <Empty title="There is no chapter with that address." action={<ButtonLink to="/theory" variant="primary">See all chapters</ButtonLink>}>
          The model has no chapter called “{chapterId}”. It may have been renamed.
        </Empty>
      </Page>
    );
  }
  return <ChapterScreen s={s} />;
}
