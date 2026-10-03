import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { StoryBeat, TheorySection } from "../../data/schema";
import { theoryById } from "../../data/store";
import { ConfidenceMark, Figure, RichText, chapterPath, eraHue, smartQuotes } from "../../components/ui";
import { chapterNumber, pad2 } from "./model";

/**
 * The short chronological telling, as a numbered sequence: when, what happened, how sure the model
 * is, and which chapters argue it. Beats with an image show it as an exhibit beside the text.
 *  - compact   a tighter list without images (the home page)
 *  - chapters  lookup for chapter ids (defaults to the real theory; the fixture passes its own)
 */
export function Storyline({ beats, compact = false, chapters }: { beats: StoryBeat[]; compact?: boolean; chapters?: (id: string) => TheorySection | undefined }) {
  const find = chapters ?? ((id: string) => theoryById.get(id));
  return (
    <ol className={`story${compact ? " story--compact" : ""}`}>
      {beats.map((b, i) => {
        const argued = b.sections.map(find).filter((s): s is TheorySection => !!s);
        return (
          <li key={b.id} className={`beat${b.image && !compact ? " beat--figure" : ""}`} id={compact ? undefined : b.id} style={{ "--hue": eraHue(b.era) } as CSSProperties}>
            <span className="beat__n" aria-hidden>{pad2(i + 1)}</span>
            <div className="beat__body">
              <p className="beat__when"><RichText text={b.when} /></p>
              <h3 className="beat__title">{smartQuotes(b.title)}</h3>
              <p className="beat__text"><RichText text={b.text} /></p>
              <p className="beat__foot">
                <ConfidenceMark value={b.confidence} variant="inline" long />
                {argued.length > 0 && (
                  <span className="beat__argued">
                    <span className="beat__argued-label">Argued in</span>
                    {argued.map((s) => (
                      <Link key={s.id} to={chapterPath(s.id)} className="beat__chapter">
                        {chapterNumber(s.id) > 0 && <span className="beat__chapter-n">{pad2(chapterNumber(s.id))}<span className="sr-only">.</span></span>}
                        <span className="beat__chapter-title">{smartQuotes(s.title)}</span>
                      </Link>
                    ))}
                  </span>
                )}
              </p>
            </div>
            {b.image && !compact && <Figure className="beat__figure" file={b.image} />}
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Where the reader is in the storyline: a slim line that stays at the top of the window while the
 * beats scroll under it, with the number and title of the beat being read. For the cover, where
 * the storyline is long (twenty beats is some twenty screens on a phone). It is drawn for the
 * eye only; the beats are numbered headings in the page itself.
 */
export function StoryProgress({ beats }: { beats: StoryBeat[] }) {
  const [at, setAt] = useState<{ on: boolean; i: number }>({ on: false, i: 0 });
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      // The beat under the reader's eye: the last one to have started in the upper part of the window.
      const eye = line + (window.innerHeight - line) * 0.4;
      let i = -1;
      let end = 0;
      for (let k = 0; k < beats.length; k++) {
        const el = document.getElementById(beats[k].id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= eye) i = k;
        end = r.bottom;
      }
      const first = document.getElementById(beats[0]?.id ?? "");
      const on = !!first && first.getBoundingClientRect().top < line && end > eye;
      setAt((was) => (was.on === on && was.i === Math.max(i, 0) ? was : { on, i: Math.max(i, 0) }));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    on();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [beats]);
  const beat = beats[at.i];
  if (!beat) return null;
  return (
    <div className="story-progress" data-on={at.on ? "" : undefined} aria-hidden style={{ "--hue": eraHue(beat.era), "--p": (at.i + 1) / beats.length } as CSSProperties}>
      <div className="story-progress__bar">
        <span className="story-progress__n">{pad2(at.i + 1)}<span className="story-progress__of"> of {beats.length}</span></span>
        <span className="story-progress__title">{smartQuotes(beat.title)}</span>
      </div>
    </div>
  );
}
