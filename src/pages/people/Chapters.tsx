import { Link } from "react-router-dom";
import { ConfidenceMark, chapterPath, smartQuotes } from "../../components/ui";
import type { ChapterHit } from "./chapters";

/** Theory chapters as rows: number, title, the chapter's confidence, and why it is listed. */
export function ChapterRows({ hits }: { hits: readonly ChapterHit[] }) {
  return (
    <ul className="ppl-chapters">
      {hits.map((h) => (
        <li key={h.section.id}>
          <Link to={chapterPath(h.section.id)} className="ppl-chapter">
            <span className="ppl-chapter__n">{String(h.n).padStart(2, "0")}</span>
            <span className="ppl-chapter__body">
              <span className="ppl-chapter__title">{smartQuotes(h.section.title)}</span>
              <span className="ppl-chapter__why">
                <ConfidenceMark value={h.section.confidence} variant="inline" long />
                {h.names && <span>Discusses it by name</span>}
                {h.cited > 0 && <span>Rests on {h.cited} of these records</span>}
                {h.against > 0 && <span>{h.against} push{h.against === 1 ? "es" : ""} back</span>}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
