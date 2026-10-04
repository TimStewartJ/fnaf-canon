import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, List, X } from "lucide-react";
import type { TheorySection } from "../../data/schema";
import { theory, theoryById, theoryIntro } from "../../data/store";
import { Icon, Missing, Page, chapterPath, count, useModalDialog, useSheetPull, smartQuotes } from "../../components/ui";
import { ChapterView, type ChapterContext } from "./ChapterView";
import { ChapterNav } from "./Contents";
import { type SectionHead, chapterHeads, chapterNumber, closingHeads, neighbours, ordered, pad2, partGroups, partOfChapter, saveReadingPlace, useReadingProgress } from "./model";
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
  return <div className="reading-progress pin" ref={ref} aria-hidden />;
}

/**
 * How far under the line a link would put it on a block may be and still be the one being read: a
 * reader who scrolls stops with a heading near the top of the window, seldom exactly on that line.
 */
const READING_SLACK = 96;

/**
 * The section of the chapter the reader is in: the last heading to have reached the top of the
 * window. The top is where a link to the heading would put it: under the document's scroll padding
 * and the heading's own scroll margin (the pinned chapter bar's height, where there is a bar), and
 * a little under that. Without the margin a section a reader had just jumped to was never the one
 * marked, on any screen with the bar. Null before the first heading.
 */
function useCurrentSection(ids: string[]): string | null {
  const [at, setAt] = useState<string | null>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      // The headings share one scroll margin: read from the first there is.
      let own: number | null = null;
      let now: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        own ??= parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        if (el.getBoundingClientRect().top > pad + own + READING_SLACK) break;
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

/**
 * Keeps a note of the place the reader has reached in the chapter (the paragraph or heading at
 * the top of the window), so that "Continue", on the cover, the home page and in the menu, brings
 * them back to it. Noted when the page has been still for a moment, not on every frame.
 */
function useNotedPlace(id: string): void {
  useEffect(() => {
    let timer = 0;
    const note = () => {
      timer = 0;
      const marks = document.querySelectorAll<HTMLElement>(".chapter > p[id], .chapter > h2[id]");
      // The line a link to an anchor would put it on, and a little under: the block being read from.
      const line = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0) + READING_SLACK;
      let at: string | undefined;
      for (const el of marks) { if (el.getBoundingClientRect().top > line) break; at = el.id; }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      saveReadingPlace({ id, at, part: max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0 });
    };
    const on = () => { window.clearTimeout(timer); timer = window.setTimeout(note, 400); };
    window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); window.clearTimeout(timer); };
  }, [id]);
}

/** The contents as a sheet, for screens too narrow for the rail. */
function ContentsSheet({ current, read, onClose, sections, section }: { current: string; read: Set<string>; onClose: () => void; sections: SectionHead[]; section: string | null }) {
  const dialogProps = useModalDialog(true, onClose);
  const pull = useSheetPull(onClose);
  return (
    <dialog className="contents-sheet" aria-label="Contents" {...dialogProps}>
      <header className="contents-sheet__bar sheet-bar" {...pull}>
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
  useNotedPlace(s.id);
  const onEnd = useCallback(() => markRead(s.id), [markRead, s.id]);
  const heads = useMemo(() => chapterHeads(s), [s]);
  // The chapter's contents: its own headings, then the parts it closes with.
  const parts = useMemo(() => [...heads, ...closingHeads(s)], [heads, s]);
  const section = useCurrentSection(useMemo(() => parts.map((h) => h.id), [parts]));
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
      <div className="chapter-bar pin">
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
          <p className="chapter-rail__progress" aria-live="off">{count([...read].filter((id) => theoryById.has(id)).length)} of {count(theory.length)} chapters read</p>
          <nav aria-label="Chapters"><ChapterNav groups={partGroups} numberOf={chapterNumber} current={s.id} read={read} sections={parts} section={section} /></nav>
        </aside>
      </div>
      {sheet && <ContentsSheet current={s.id} read={read} onClose={() => setSheet(false)} sections={parts} section={section} />}
    </Page>
  );
}

/** /theory/:chapterId */
export default function TheoryChapter() {
  const { chapterId = "" } = useParams();
  const s = theoryById.get(chapterId);
  if (!s) return <Missing what="chapter" id={chapterId} list={{ to: "/theory#contents", label: "See all chapters" }} />;
  return <ChapterScreen s={s} />;
}
