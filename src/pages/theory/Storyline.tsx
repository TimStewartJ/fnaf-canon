import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { StoryBeat, TheorySection } from "../../data/schema";
import { theoryById } from "../../data/store";
import { ConfidenceMark, Figure, RichText, chapterPath, eraHue } from "../../components/ui";
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
              <h3 className="beat__title">{b.title}</h3>
              <p className="beat__text"><RichText text={b.text} /></p>
              <p className="beat__foot">
                <ConfidenceMark value={b.confidence} variant="inline" long />
                {argued.length > 0 && (
                  <span className="beat__argued">
                    Argued in{" "}
                    {argued.map((s, j) => (
                      <span key={s.id}>
                        {j > 0 && ", "}
                        <Link to={chapterPath(s.id)}>{chapterNumber(s.id) ? `${chapterNumber(s.id)}. ` : ""}{s.title}</Link>
                      </span>
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
