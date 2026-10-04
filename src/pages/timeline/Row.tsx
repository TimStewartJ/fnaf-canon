import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Death } from "../../data/deaths";
import type { Evidence } from "../../data/schema";
import { eventDate } from "../../data/dates";
import { evidenceById } from "../../data/store";
import {
  Button, ChapterLink, Chip, CiteList, CiteScope, DatePill, DeathIcon, EntityLink, EvidenceRow, FateIcon, FateTag, Figure, Icon, RichText, StatusMark,
  chapterNumber, count, excerpt, isDeath, levelOf, outcomeOf, smartQuotes, useMediaQuery,
} from "../../components/ui";
import { type DeathRow, type EventRow, type Row, cardLabel, chaptersFor, eventLink, fatesOf, imageOf, peopleOfDeath, peopleOfEvent, plural, recordOrder } from "./model";

/** How much of a summary a closed row shows. CSS clamps it further on a narrow screen. */
const EXCERPT = 190;

/*
 * An entry of the second layer (data/deaths.ts) is a death or another fate, and says which wherever
 * it appears: <FateTag> prints its outcome ("Death", "Presumed dead", "Fate not shown", "Survives",
 * "Death in one ending") and then its cause. The skull is for a death alone. `Death` below is the
 * data's name for any such entry.
 */

/**
 * The ending an entry is confined to, beside its tag: "one ending: Walk Away (Clock Out)". A death
 * in one ending has said "in one ending" in its tag already, so its chip only names the ending.
 * Two entries for one person are two endings of one game: without this, two lines of a closed row
 * would read as the same thing said twice.
 */
function EndingChip({ d }: { d: Death }) {
  if (!d.branch) return null;
  return <Chip className="tl-ending">{outcomeOf(d) === "branch" ? "ending" : "one ending"}: {smartQuotes(d.branch)}</Chip>;
}

/** Whom it happened to, by whose hand and where. `ending` adds the ending an entry is confined to (a row of its own, and a line of a closed row, say that on a chip). */
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

/**
 * The date on an entry's card. On a phone a label that would take three lines is cut at a natural
 * break (cardLabel in model.ts): the card keeps the first part, and the date's popover says the
 * rest first, before the reason for the date, so the whole label is one press away.
 */
function When({ label, date, compact }: { label: string; date: { kind: Parameters<typeof DatePill>[0]["kind"]; basis?: string; evidence?: string[] }; compact?: boolean }) {
  const phone = useMediaQuery("(max-width: 640px)");
  const cut = phone ? cardLabel(label) : null;
  if (!cut?.rest) return <DatePill label={label} kind={date.kind} basis={date.basis} evidence={date.evidence} compact={compact} />;
  return <DatePill label={cut.short} kind={date.kind} basis={date.basis ? `${cut.rest} ${date.basis}` : cut.rest} evidence={date.evidence} compact={compact} />;
}

/** A death or other fate told by a story event, shown inside that event's row. Its title is left out when it only repeats the event's. */
function DeathInEvent({ d, marked, eventTitle }: { d: Death; marked: boolean; eventTitle: string }) {
  return (
    <div className={`tl-death${marked ? " is-marked" : ""}`} id={d.id} data-level={levelOf(d.status)} data-outcome={outcomeOf(d)}>
      <p className="tl-death__head">
        <FateTag d={d} />
        <span className="tl-death__marks">
          <When label={d.yearLabel} date={d.date} compact />
          <StatusMark value={d.status} />
        </span>
      </p>
      {d.title !== eventTitle && <h4 className="tl-death__title">{smartQuotes(d.title)}</h4>}
      <DeathFacts d={d} ending />
      {d.note && <p className="tl-death__note">{smartQuotes(d.note)}</p>}
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

/** The theory chapters that argue an entry, as links. Nothing when no chapter cites its records. */
function ArguedIn({ evidence }: { evidence: string[] }) {
  const chapters = useMemo(() => chaptersFor(evidence), [evidence]);
  if (!chapters.length) return null;
  return (
    <div className="tl-detail__argued">
      <h4 className="label">Argued in the theory</h4>
      <ul className="tl-argued">
        {chapters.map((id) => <li key={id}><span className="tl-argued__n">{chapterNumber(id)}</span> <ChapterLink id={id} /></li>)}
      </ul>
    </div>
  );
}

/** How many records an open entry lists before it offers the rest. Nothing is cut for the sake of a few. */
const RECORDS_SHOWN = 8;
const RECORDS_MIN_HIDDEN = 3;

/**
 * The records behind an entry, as rows that open the evidence drawer. An entry with none says so.
 * One with a great many lists the first (those its summary cites come first) and offers the rest;
 * the drawer pages through all of them either way.
 */
function Records({ ids, numbers }: { ids: string[]; numbers?: (id: string) => number | undefined }) {
  const records = ids.map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
  const [all, setAll] = useState(false);
  const cut = !all && records.length >= RECORDS_SHOWN + RECORDS_MIN_HIDDEN;
  const group = records.length > 1 ? records.map((e) => e.id) : undefined;
  // After "show the rest", focus moves to the first record that appeared.
  const list = useRef<HTMLUListElement | null>(null);
  const reveal = useRef(false);
  useEffect(() => {
    if (!all || !reveal.current) return;
    reveal.current = false;
    list.current?.children[RECORDS_SHOWN]?.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });
  }, [all]);
  return (
    <div className="tl-detail__records">
      <h4 className="label">Evidence · {plural(records.length, "record")}</h4>
      {records.length > 0 ? (
        <ul className="ev-list" ref={list}>
          {(cut ? records.slice(0, RECORDS_SHOWN) : records).map((e) => <EvidenceRow key={e.id} e={e} n={numbers?.(e.id)} group={group} claim={false} />)}
        </ul>
      ) : (
        <p className="tl-detail__none">No evidence records are filed under this entry.</p>
      )}
      {cut && (
        <p className="tl-detail__more">
          <Button size="sm" iconEnd={ChevronDown} onClick={() => { reveal.current = true; setAll(true); }}>Show the other {count(records.length - RECORDS_SHOWN)} records</Button>
        </p>
      )}
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
          <ArguedIn evidence={t.evidence} />
        </div>
      </div>
      <Records ids={order} numbers={(id) => numbers.get(id)} />
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
          {d.note && <p className="tl-death__note">{smartQuotes(d.note)}</p>}
          {row.host && <p className="tl-detail__told">Told in the story event <Link to={eventLink(row.host)}>{smartQuotes(row.host.title)}</Link>.</p>}
          <Entities people={peopleOfDeath(d)} places={[]} />
          <ArguedIn evidence={d.evidence} />
        </div>
      </div>
      <Records ids={d.evidence} />
    </>
  );
}

/**
 * One entry on the line: a story event, or a death or other fate that no story event tells.
 * Closed, it is a date, a title, how firm it is and a line or two. Open, it shows the whole entry
 * in place: the summary with its citations, the deaths and other fates it tells, the people and
 * places, and the records. Its node on the line carries the skull if it has a death, the other
 * mark if it has only other fates, and nothing if it is a plain story event.
 *  - mark   id of a death or other fate inside this row that a link pointed at
 */
export const TimelineRow = memo(function TimelineRow({ row, open, mark, onToggle }: { row: Row; open: boolean; mark?: string; onToggle: (id: string) => void }) {
  const own = row.kind === "death";
  const title = own ? row.d.title : row.ev.title;
  const date = own ? row.d.date : eventDate(row.id);
  const yearLabel = own ? row.d.yearLabel : row.ev.yearLabel;
  const fates = fatesOf(row);
  const node = fates.some(isDeath) ? "death" : fates.length ? "fate" : null;
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
    <li ref={li} id={row.id} className={`tl-row tl-row--${row.kind}${node ? ` has-${node}` : ""}${open ? " is-open" : ""}`} data-level={levelOf(row.status)} data-outcome={own ? outcomeOf(row.d) : undefined}>
      <span className="tl-row__node" aria-hidden>{node && <Icon icon={node === "death" ? DeathIcon : FateIcon} size={12} />}</span>
      <div className="tl-row__main">
        <div className="tl-row__head">
          <p className="tl-row__when">
            <When label={yearLabel} date={date} />
            <span className="tl-row__status tl-row__status--long"><StatusMark value={row.status} variant="inline" long /></span>
            <span className="tl-row__status tl-row__status--short"><StatusMark value={row.status} variant="inline" /></span>
            {own && <FateTag d={row.d} />}
            {own && <EndingChip d={row.d} />}
          </p>
          <h3 className="tl-row__title">
            <button ref={toggle} type="button" className="tl-row__toggle" aria-expanded={open} aria-controls={open ? `${row.id}-detail` : undefined} onClick={() => onToggle(row.id)}>
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
            <p key={d.id} className="tl-row__death"><FateTag d={d} /> <EndingChip d={d} /> <span className="tl-row__victim">{smartQuotes(d.victimLabel)}</span></p>
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
