import { memo, useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Death } from "../../data/deaths";
import { eventDate } from "../../data/dates";
import {
  Chip, CiteList, CiteScope, DEATH_KIND_ICON, DatePill, DeathIcon, EntityLink, EvidenceList, Figure, Icon, RichText, StatusMark,
  excerpt, levelOf, smartQuotes,
} from "../../components/ui";
import { type DeathRow, type EventRow, type Row, causeLabel, eventLink, imageOf, peopleOfDeath, peopleOfEvent, plural, recordOrder } from "./model";

/** How much of a summary a closed row shows. CSS clamps it further on a narrow screen. */
const EXCERPT = 190;

/** The words that mark a death wherever one appears: the skull is never the only signal. */
function DeathTag({ d }: { d: Death }) {
  return (
    <span className="tl-deathtag">
      <Icon icon={DeathIcon} /> Death
      <span className="tl-deathtag__cause"><Icon icon={DEATH_KIND_ICON[d.kind] ?? DeathIcon} /> {causeLabel(d.kind)}</span>
    </span>
  );
}

/** Who died, by whose hand and where. `ending` adds the ending a death is confined to (a row of its own says that in its heading line). */
function DeathFacts({ d, ending = false }: { d: Death; ending?: boolean }) {
  return (
    <dl className="tl-facts">
      <div><dt>Victim</dt><dd>{smartQuotes(d.victimLabel)}</dd></div>
      <div><dt>By</dt><dd>{smartQuotes(d.byLabel)}</dd></div>
      <div><dt>Where</dt><dd>{d.place ? <EntityLink id={d.place} /> : <span className="muted">{smartQuotes(d.placeLabel ?? "Not stated")}</span>}</dd></div>
      {ending && d.branch && <div><dt>Ending</dt><dd>Happens in one ending only: {smartQuotes(d.branch)}</dd></div>}
    </dl>
  );
}

/** A death told by a story event, shown inside that event's row. Its title is left out when it only repeats the event's. */
function DeathInEvent({ d, marked, eventTitle }: { d: Death; marked: boolean; eventTitle: string }) {
  return (
    <div className={`tl-death${marked ? " is-marked" : ""}`} id={d.id} data-level={levelOf(d.status)}>
      <p className="tl-death__head">
        <DeathTag d={d} />
        <span className="tl-death__marks">
          <DatePill label={d.yearLabel} kind={d.date.kind} basis={d.date.basis} evidence={d.date.evidence} compact />
          <StatusMark value={d.status} />
        </span>
      </p>
      {d.title !== eventTitle && <h4 className="tl-death__title">{smartQuotes(d.title)}</h4>}
      <DeathFacts d={d} ending />
      {d.note && <p className="tl-death__note"><RichText text={d.note} /></p>}
      <p className="tl-death__rests"><span className="label">Rests on</span> <CiteList ids={d.evidence} /></p>
    </div>
  );
}

function Entities({ people, places }: { people: string[]; places: string[] }) {
  if (!people.length && !places.length) return null;
  return (
    <div className="tl-detail__who">
      <h4 className="label">{people.length && places.length ? "People and places" : people.length ? "People" : "Places"}</h4>
      <p className="tl-chips">
        {people.map((id) => <EntityLink key={id} id={id} variant="chip" />)}
        {places.map((id) => <EntityLink key={id} id={id} variant="chip" />)}
      </p>
    </div>
  );
}

function EventDetail({ row, mark }: { row: EventRow; mark?: string }) {
  const t = row.ev;
  // Citations in the summary are numbered 1, 2, 3 in this row, and the records below carry the same numbers.
  const order = useMemo(() => recordOrder(t), [t]);
  const numbers = useMemo(() => new Map(order.map((id, i) => [id, i + 1])), [order]);
  const img = imageOf(t);
  return (
    <CiteScope prime={order}>
      <div className={`tl-detail__top${img ? " has-fig" : ""}`}>
        <p className="tl-detail__sum"><RichText text={t.summary} /></p>
        {img && <Figure className="tl-detail__fig" file={img.file} evidence={img.evidence} />}
        <div className="tl-detail__rest">
          {row.deaths.map((d) => <DeathInEvent key={d.id} d={d} marked={mark === d.id} eventTitle={t.title} />)}
          <Entities people={peopleOfEvent(t)} places={t.places ?? []} />
        </div>
      </div>
      <div className="tl-detail__records">
        <h4 className="label">Evidence · {plural(order.length, "record")}</h4>
        <EvidenceList ids={order} numbers={(id) => numbers.get(id)} claim={false} />
      </div>
    </CiteScope>
  );
}

function DeathDetail({ row }: { row: DeathRow }) {
  const d = row.d;
  return (
    <>
      <div className="tl-detail__top">
        <DeathFacts d={d} />
        <div className="tl-detail__rest">
          {d.note && <p className="tl-death__note"><RichText text={d.note} /></p>}
          {row.host && <p className="tl-detail__told">Told in the story event <Link to={eventLink(row.host)}>{smartQuotes(row.host.title)}</Link>.</p>}
          <Entities people={peopleOfDeath(d)} places={[]} />
        </div>
      </div>
      <div className="tl-detail__records">
        <h4 className="label">Evidence · {plural(d.evidence.length, "record")}</h4>
        <EvidenceList ids={d.evidence} claim={false} />
      </div>
    </>
  );
}

/**
 * One entry on the line: a story event, or a death that no story event tells. Closed, it is a date,
 * a title, how firm it is and a line or two. Open, it shows the whole entry in place: the summary
 * with its citations, the deaths it tells, the people and places, and the records.
 *  - mark   id of a death inside this row that a link pointed at
 */
export const TimelineRow = memo(function TimelineRow({ row, open, mark, onToggle }: { row: Row; open: boolean; mark?: string; onToggle: (id: string) => void }) {
  const isDeath = row.kind === "death";
  const title = isDeath ? row.d.title : row.ev.title;
  const date = isDeath ? row.d.date : eventDate(row.id);
  const yearLabel = isDeath ? row.d.yearLabel : row.ev.yearLabel;
  const withDeath = isDeath || row.deaths.length > 0;
  const short = useMemo(() => (row.kind === "event" ? smartQuotes(excerpt(row.ev.summary, EXCERPT)) : ""), [row]);

  // Closing from the foot of a long entry: bring its heading back into view and return focus to it.
  const li = useRef<HTMLLIElement | null>(null);
  const toggle = useRef<HTMLButtonElement | null>(null);
  const fromFoot = useRef(false);
  useLayoutEffect(() => {
    if (open || !fromFoot.current) return;
    fromFoot.current = false;
    li.current?.scrollIntoView({ block: "nearest" });
    toggle.current?.focus({ preventScroll: true });
  }, [open]);

  return (
    <li ref={li} id={row.id} className={`tl-row tl-row--${row.kind}${withDeath ? " has-death" : ""}${open ? " is-open" : ""}`} data-level={levelOf(row.status)}>
      <span className="tl-row__node" aria-hidden>{withDeath && <Icon icon={DeathIcon} size={12} />}</span>
      <div className="tl-row__main">
        <div className="tl-row__head">
          <p className="tl-row__when">
            <DatePill label={yearLabel} kind={date.kind} basis={date.basis} evidence={date.evidence} />
            <span className="tl-row__status tl-row__status--long"><StatusMark value={row.status} variant="inline" long /></span>
            <span className="tl-row__status tl-row__status--short"><StatusMark value={row.status} variant="inline" /></span>
            {isDeath && <DeathTag d={row.d} />}
            {isDeath && row.d.branch && <Chip>one ending: {smartQuotes(row.d.branch)}</Chip>}
          </p>
          <h3 className="tl-row__title">
            <button ref={toggle} type="button" className="tl-row__toggle" aria-expanded={open} aria-controls={`${row.id}-detail`} onClick={() => onToggle(row.id)}>
              {smartQuotes(title)}
            </button>
          </h3>
          {!open && row.kind === "event" && <p className="tl-row__excerpt">{short}</p>}
          {!open && row.kind === "death" && (
            <p className="tl-row__excerpt">
              <span className="tl-row__fact"><span className="tl-row__k">Victim</span> {smartQuotes(row.d.victimLabel)}</span>{" "}
              <span className="tl-row__fact"><span className="tl-row__k">By</span> {smartQuotes(row.d.byLabel)}</span>
            </p>
          )}
          {!open && row.kind === "event" && row.deaths.map((d) => (
            <p key={d.id} className="tl-row__death"><DeathTag d={d} /> <span className="tl-row__victim">{smartQuotes(d.victimLabel)}</span></p>
          ))}
          <Icon icon={ChevronDown} className="tl-row__chev" />
        </div>
        <div className="tl-detail" id={`${row.id}-detail`} hidden={!open}>
          {open && (
            <>
              {row.kind === "event" ? <EventDetail row={row} mark={mark} /> : <DeathDetail row={row} />}
              <p className="tl-detail__foot">
                <button type="button" className="btn btn--quiet btn--sm" onClick={() => { fromFoot.current = true; onToggle(row.id); }}>
                  <Icon icon={ChevronUp} /> Close<span className="sr-only">: {smartQuotes(title)}</span>
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </li>
  );
});
