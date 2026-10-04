import { Link } from "react-router-dom";
import type { TimelineEvent } from "../../data/schema";
import { eventDate } from "../../data/dates";
import type { Death } from "../../data/deaths";
import { DatePill, FateTag, StatusMark, levelOf, outcomeOf, smartQuotes, timelineEventPath } from "../../components/ui";

/** Timeline events as compact rows: the date (with its justification), the event, how firm it is. */
export function EventRows({ events }: { events: readonly TimelineEvent[] }) {
  return (
    <ol className="ppl-events">
      {events.map((t) => {
        const d = eventDate(t.id);
        return (
          <li key={t.id} className="ppl-event" data-level={levelOf(t.status)}>
            <div className="ppl-event__what">
              <span className="ppl-event__when"><DatePill label={t.yearLabel} kind={d.kind} basis={d.basis} evidence={d.evidence} compact /></span>
              <Link className="ppl-event__title" to={timelineEventPath(t.id)}>{smartQuotes(t.title)}</Link>
            </div>
            <span className="ppl-event__status"><StatusMark value={t.status} variant="inline" /></span>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Deaths and other fates (the entries of data/deaths.ts) as compact rows: the date, what the
 * records carry of the victim's fate and the cause (the shared tag: "Death", "Presumed dead",
 * "Fate not shown", "Survives", "Death in one ending"), the entry as a link to it on the timeline,
 * and how firm it is. Every row says its own outcome, so a heading over these rows never has to
 * call them deaths.
 */
export function FateRows({ fates }: { fates: readonly Death[] }) {
  return (
    <ul className="ppl-events">
      {fates.map((d) => (
        <li key={d.id} className="ppl-event ppl-event--fate" data-level={levelOf(d.status)} data-outcome={outcomeOf(d)}>
          <div className="ppl-event__what">
            <span className="ppl-event__when"><DatePill label={d.yearLabel} kind={d.date.kind} basis={d.date.basis} evidence={d.date.evidence} compact /></span>
            <span className="ppl-event__title">
              <FateTag d={d} className="ppl-event__fate" />
              <Link to={timelineEventPath(d.id)}>{smartQuotes(d.title)}</Link>
            </span>
          </div>
          <span className="ppl-event__status"><StatusMark value={d.status} variant="inline" /></span>
        </li>
      ))}
    </ul>
  );
}
