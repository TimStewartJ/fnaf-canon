import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { DatePill } from "../../components/ui";
import { GAME_DATES } from "../../data/dates";
import { PLACE, PLACES, accounted, count, percent, type Place, type Tally } from "./coverage";
import { PlaceSwatch } from "./explorerParts";
import "./sources.css";

/** When a source's story takes place: a date pill that explains itself, or the plain label when no date is argued. */
export function SetIn({ id, fallback }: { id: string; fallback: string }) {
  const d = GAME_DATES[id];
  if (!d) return <span className="muted">{fallback}</span>;
  return <DatePill label={d.label} kind={d.kind} basis={d.basis} evidence={d.evidence} />;
}

/** The four shares as words, for a screen reader and for tooltips: "12 cited, 3 filed as further evidence, …". */
function spoken(t: Tally): string {
  return PLACES.filter((p) => t[p] > 0).map((p) => `${count(t[p])} ${PLACE[p].word.toLowerCase()}`).join(", ");
}

/**
 * How much of a set of records the model uses, as one bar: cited (solid), filed (hatched), outside
 * the story (grey), not yet accounted for (empty). The same patterns as <PlaceSwatch>.
 */
export function CoverageBar({ t, className }: { t: Tally; className?: string }) {
  if (!t.total) return null;
  return (
    <div className={`srcs-bar${className ? ` ${className}` : ""}`} role="img" aria-label={`Of ${count(t.total)} records: ${spoken(t)}`}>
      {PLACES.map((p) => t[p] > 0 && <span key={p} className="srcs-bar__seg" data-place={p} style={{ "--n": t[p] } as CSSProperties} />)}
    </div>
  );
}

/**
 * The numbers behind a coverage bar. `to` turns each one into a link (to the same records in the
 * locker). `all` lists every share, including the empty ones; otherwise only what the set contains.
 */
export function CoverageKey({ t, to, all = false, long = false }: { t: Tally; to?: (p: Place) => string; all?: boolean; long?: boolean }) {
  const shares = PLACES.filter((p) => all || t[p] > 0);
  return (
    <ul className={`srcs-key${long ? " srcs-key--long" : ""}`}>
      {shares.map((p) => {
        const body: ReactNode = (
          <>
            <PlaceSwatch place={p} />
            <span className="srcs-key__n">{count(t[p])}</span>
            <span className="srcs-key__word">{long ? PLACE[p].word : PLACE[p].short.toLowerCase()}</span>
          </>
        );
        return (
          <li key={p} className={t[p] === 0 ? "srcs-key__item is-zero" : "srcs-key__item"} title={PLACE[p].help}>
            {to && t[p] > 0 ? <Link to={to(p)}>{body}</Link> : <span>{body}</span>}
          </li>
        );
      })}
    </ul>
  );
}

/** "33 of 50 accounted for (66%)", or the plain statement that everything is. */
export function Accounted({ t }: { t: Tally }) {
  const done = accounted(t);
  if (!t.total) return <>No records yet</>;
  if (done === t.total) return <>All {count(t.total)} accounted for</>;
  return <><strong>{count(done)}</strong> of {count(t.total)} accounted for <span className="srcs-pct">{percent(done, t.total)}%</span></>;
}
