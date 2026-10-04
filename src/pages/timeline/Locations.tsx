import type { CSSProperties, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Diamond } from "lucide-react";
import { eras } from "../../data/store";
import { PLACE_DATES } from "../../data/dates";
import { DatePill, DeathIcon, FateIcon, Icon, LOCATION_HUE, eraHue, hueOf, isPlainClick, smartQuotes } from "../../components/ui";
import { type Filters, type LocRow, type PlaceCounts, countsByPlace, locationGroups, tallyWords, within } from "./model";

const pad2 = (n: number) => String(n).padStart(2, "0");
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

/** "Founding to The Diner Years", or the reason a place has no position. */
function spanWords(r: LocRow): string {
  if (r.from == null || r.to == null) return r.floating ?? "Undated";
  const a = eras[r.from].name, b = eras[r.to].name;
  const loose = [r.span.fuzzyStart ? "start not pinned down" : "", r.span.fuzzyEnd ? "end not pinned down" : ""].filter(Boolean).join(", ");
  return `${r.from === r.to ? a : `${a} to ${b}`}${loose ? ` (${loose})` : ""}`;
}

/** What a place has in one era, or in all of them (`i` left out), under the layer in use: story events, deaths, other fates. */
function shown(c: PlaceCounts | undefined, f: Filters, i?: number): { events: number; deaths: number; others: number } {
  const of = (xs: number[]) => (i == null ? sum(xs) : xs[i]);
  return {
    events: c && f.layer !== "deaths" ? of(c.events) : 0,
    deaths: c && f.layer !== "events" ? of(c.deaths) : 0,
    others: c && f.layer !== "events" ? of(c.others) : 0,
  };
}

/** The numbers the chart draws, as a sentence: "Founding: 1 event. The Diner Years: 4 events, 1 death, 2 other fates." */
function countWords(c: PlaceCounts | undefined, f: Filters): string {
  if (!c) return "";
  return eras
    .map((e, i) => {
      const n = shown(c, f, i);
      const parts = tallyWords(n.events, n);
      return parts.length ? `${e.name}: ${parts.join(", ")}.` : "";
    })
    .filter(Boolean)
    .join(" ");
}

function PlaceRow({ r, counts, f, to, on, onChoose }: { r: LocRow; counts: PlaceCounts | undefined; f: Filters; to: URLSearchParams; on: boolean; onChoose: (ev: MouseEvent) => void }) {
  const date = PLACE_DATES[r.id];
  const all = shown(counts, f);
  const placed = r.from != null && r.to != null;
  const perEra = countWords(counts, f);
  const totals = tallyWords(all.events, all).join(" · ");
  const cells = eras.map((_, i) => shown(counts, f, i));
  // A cell that carries all three marks needs more room than one with two: the row says how much, and
  // below that its counts are given in words under the bar instead (see --tl-marks in timeline.css).
  const crowded = cells.some((n) => n.events > 0 && n.deaths > 0 && n.others > 0);
  return (
    <li className={`tl-loc__row${on ? " is-on" : ""}${crowded ? " is-crowded" : ""}`}>
      <div className="tl-loc__place">
        <Link className="tl-loc__name" to={within(to)} aria-current={on ? "true" : undefined} onClick={onChoose}>
          {smartQuotes(r.name)}<span className="sr-only">: read what happened here</span>
        </Link>
        <span className="tl-loc__when">
          <DatePill label={r.span.label} kind={r.span.dateKind} basis={date?.basis} evidence={date?.evidence} compact />
        </span>
      </div>
      <div className="tl-loc__chart">
        <div className="tl-loc__track" aria-hidden>
          {eras.map((e, i) => {
            const n = cells[i];
            return (
              <span key={e.id} className="tl-loc__cell" style={{ gridColumn: i + 1 }}>
                {(n.events > 0 || n.deaths > 0 || n.others > 0) && (
                  <span className="tl-loc__marks">
                    {n.events > 0 && <span className="tl-loc__mark"><Icon icon={Diamond} size={9} />{n.events}</span>}
                    {n.deaths > 0 && <span className="tl-loc__mark tl-loc__mark--death"><Icon icon={DeathIcon} size={10} />{n.deaths}</span>}
                    {n.others > 0 && <span className="tl-loc__mark tl-loc__mark--fate"><Icon icon={FateIcon} size={10} />{n.others}</span>}
                  </span>
                )}
              </span>
            );
          })}
          {placed ? (
            <span className={`tl-loc__bar${r.span.fuzzyStart ? " fz-start" : ""}${r.span.fuzzyEnd ? " fz-end" : ""}`} style={{ gridColumn: `${r.from! + 1} / ${r.to! + 2}` }} />
          ) : (
            <span className="tl-loc__bar tl-loc__bar--float" style={{ gridColumn: "1 / -1" }}>{r.floating}</span>
          )}
        </div>
        {/* The same in words. A screen reader always gets them; on screen each part appears when the chart is too narrow to show it. */}
        <p className="sr-only">{spanWords(r)}.{perEra ? ` ${perEra}` : ""}</p>
        <p className="tl-loc__words" aria-hidden>
          {placed && <span className="tl-loc__span"><span>{spanWords(r)}</span></span>}
          {totals && <span className="tl-loc__totals"><span>{totals}</span></span>}
        </p>
      </div>
    </li>
  );
}

/**
 * The second view of the timeline: every place laid across the eras, grouped by kind. Choosing a
 * place goes to the events with the line narrowed to it; choosing an era goes to that era. The
 * counts follow every filter except the place filter, so they say what a place would show. Deaths
 * are counted under the skull and other fates under their own mark, here as on the line.
 *  - onLeave  called when a plain click on a place or an era is about to go to the events
 */
export function LocationsView({ f, sp, onLeave }: { f: Filters; sp: URLSearchParams; onLeave: () => void }) {
  const counts = countsByPlace(f);
  const leave = (ev: MouseEvent) => { if (isPlainClick(ev)) onLeave(); };
  const toEvents = (edit: (p: URLSearchParams) => void) => {
    const next = new URLSearchParams(sp);
    for (const k of ["view", "e", "era"]) next.delete(k);
    edit(next);
    return next;
  };
  return (
    <section className="tl-loc" aria-labelledby="tl-loc-title" style={{ "--tl-n": eras.length } as CSSProperties}>
      <header className="tl-loc__intro">
        <h2 id="tl-loc-title">Places across the eras</h2>
        <p>
          A bar runs from the first era a place appears in to the last. A dashed end means the records do not pin that end down.
          Choose a place to read what happened there.
        </p>
        <p className="tl-loc__legend">
          <span><Icon icon={Diamond} size={11} /> story events</span>
          <span className="tl-loc__legend-death"><Icon icon={DeathIcon} size={12} /> deaths</span>
          <span><Icon icon={FateIcon} size={12} /> other fates</span>
          <span>set there in each era</span>
        </p>
      </header>
      <nav className="tl-loc__head pin" aria-label="Eras">
        <span className="tl-loc__head-label label" aria-hidden>Place</span>
        <div className="tl-loc__eras">
          {eras.map((e, i) => (
            <Link key={e.id} className="tl-loc__era" to={within(toEvents((p) => p.set("era", e.id)))} style={{ "--hue": eraHue(e.id) } as CSSProperties} title={smartQuotes(`${e.name}${e.range ? ` (${e.range})` : ""}: go to this era`)} onClick={leave}>
              <span className="tl-loc__era-n">{pad2(i + 1)}</span>
              <span className="tl-loc__era-name">{smartQuotes(e.name)}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Where the columns are too narrow to carry their names they are headed by number alone,
          so the eras are named here, once. For the eye only: the links above always hold the names. */}
      <div className="tl-loc__keyrow" aria-hidden>
        <span />
        <div className="tl-loc__chart">
          <p className="tl-loc__erakey">
            {eras.map((e, i) => <span key={e.id} className="tl-loc__erakey-item"><span className="tl-loc__era-n">{pad2(i + 1)}</span> {smartQuotes(e.name)}</span>)}
          </p>
        </div>
      </div>
      {locationGroups.map((g) => (
        <section key={g.kind} className="tl-loc__group" style={{ "--hue": hueOf(LOCATION_HUE, g.kind) } as CSSProperties} aria-labelledby={`tl-loc-${g.kind}`}>
          <h3 className="tl-loc__kind" id={`tl-loc-${g.kind}`}><span className="tl-loc__swatch" aria-hidden />{smartQuotes(g.label)} <span className="tl-loc__kind-n">{g.rows.length}</span></h3>
          <ul className="tl-loc__rows">
            {g.rows.map((r) => <PlaceRow key={r.id} r={r} counts={counts.get(r.id)} f={f} to={toEvents((p) => p.set("place", r.id))} on={f.place === r.id} onChoose={leave} />)}
          </ul>
        </section>
      ))}
    </section>
  );
}
