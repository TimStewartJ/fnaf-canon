import { Link } from "react-router-dom";
import type { TimelineEvent } from "../../data/schema";
import { eventDate } from "../../data/dates";
import { DEATH_KIND, type Death } from "../../data/deaths";
import { DEATH_KIND_ICON, DatePill, Icon, StatusMark, levelOf, smartQuotes, timelineEventPath } from "../../components/ui";

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

/** Deaths as compact rows: cause, the death (a link to it on the timeline), its date, how firm it is. */
export function DeathRows({ deaths }: { deaths: readonly Death[] }) {
  return (
    <ul className="ppl-events">
      {deaths.map((d) => (
        <li key={d.id} className="ppl-event ppl-event--death" data-level={levelOf(d.status)}>
          <div className="ppl-event__what">
            <span className="ppl-event__when"><DatePill label={d.yearLabel} kind={d.date.kind} basis={d.date.basis} evidence={d.date.evidence} compact /></span>
            <span className="ppl-event__title">
              <Icon icon={DEATH_KIND_ICON[d.kind] ?? DEATH_KIND_ICON.unknown} label={DEATH_KIND[d.kind]?.label ?? "Death"} className="ppl-event__cause" />{" "}
              <Link to={timelineEventPath(d.id)}>{smartQuotes(d.title)}</Link>
            </span>
          </div>
          <span className="ppl-event__status"><StatusMark value={d.status} variant="inline" /></span>
        </li>
      ))}
    </ul>
  );
}
