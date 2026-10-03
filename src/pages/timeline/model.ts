/**
 * The timeline's data model: what a row is, which deaths a story event already tells, how the
 * filters narrow the line, and how all of it is written to the URL. No components here.
 *
 * Everything is derived from src/data at load: no era id, count or name is written down in this
 * folder, so eras, events, deaths and location spans can be added, renamed or re-dated freely.
 */
import { backlinksFor, deaths, eras, evidenceById, games, labelForEntity, LOCATION_SPANS, personById, placeById, places, timeline } from "../../data/store";
import { canonicalId } from "../../data/model";
import { citationsInText } from "../../data/theoryText";
import { gameMeta } from "../../data/gameMeta";
import { DEATH_KIND, type Death, type DeathKind } from "../../data/deaths";
import { LOCATION_KIND, type LocationSpan } from "../../data/locations";
import type { Status, TimelineEvent } from "../../data/schema";
import { STATUS, chapterNumber, timelineEventPath } from "../../components/ui";

export type Era = (typeof eras)[number];
export type Layer = "all" | "events" | "deaths";
export type View = "events" | "locations";

export const STATUSES = Object.keys(STATUS) as Status[];
export const DEATH_KINDS = Object.keys(DEATH_KIND) as DeathKind[];
export const eraIndex = new Map(eras.map((e, i) => [e.id, i]));
const eventById = new Map(timeline.map((t) => [t.id, t]));
const deathById = new Map(deaths.map((d) => [d.id, d]));

const unique = <T,>(xs: T[]): T[] => [...new Set(xs)];
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
export { plural, unique };

/* ── What each item touches ─────────────────────────────────────────────────────── */

const gamesOfIds = (ids: string[]): string[] => unique(ids.map((id) => evidenceById.get(id)?.game).filter((g): g is NonNullable<typeof g> => !!g));
const deathPeople = (d: Death) => [...d.victims, ...d.by];
const UNKNOWN_KILLER = "unknown";
/** The person a death is attributed to, folded to one identity; "unknown" when the records name nobody. */
export const killerKey = (d: Death): string => (d.by.length ? canonicalId(d.by[0], { identities: true, vessels: false }) : UNKNOWN_KILLER);

/** The sources and the people behind an entry, with every alias, form and vessel folded into its person. */
interface Touches { games: Set<string>; people: Set<string> }
const NOTHING: Touches = { games: new Set(), people: new Set() };
const touchOf = (evidence: string[], people: string[]): Touches => ({ games: new Set(gamesOfIds(evidence)), people: new Set(people.map((p) => canonicalId(p))) });
// Kept apart, so an event and a death that happened to share an id could not overwrite each other.
const eventTouches = new Map(timeline.map((t) => [t.id, touchOf(t.evidence, t.people ?? [])]));
const deathTouches = new Map(deaths.map((d) => [d.id, touchOf(d.evidence, deathPeople(d))]));

/** People shown on a row: every identity folded into its person, in the order the data lists them. */
export const peopleOfEvent = (t: TimelineEvent): string[] => unique((t.people ?? []).map((p) => canonicalId(p, { identities: true, vessels: false })));
export const peopleOfDeath = (d: Death): string[] => unique(deathPeople(d).map((p) => canonicalId(p, { identities: true, vessels: false })));

/** The picture for an event: its own, or the first one among its records. `evidence` is the record it belongs to. */
export function imageOf(t: TimelineEvent): { file: string; evidence?: string } | null {
  const own = t.evidence.find((id) => evidenceById.get(id)?.image);
  if (t.image) return { file: t.image, evidence: t.evidence.find((id) => evidenceById.get(id)?.image === t.image) };
  return own ? { file: evidenceById.get(own)!.image!, evidence: own } : null;
}

/**
 * The records behind an event, in the order a reader meets them: first those cited in the summary,
 * in citation order, then the rest. A row numbers its citations from this list, so the markers in
 * the text match the numbered records under it.
 */
export function recordOrder(t: TimelineEvent): string[] {
  return unique([...citationsInText(t.summary), ...t.evidence]).filter((id) => evidenceById.has(id));
}

/** How many chapters an entry names at most. */
const CHAPTERS_SHOWN = 3;
/**
 * The theory chapters that argue an entry: those citing its records. The chapter sharing the most
 * records comes first and is always named; another is named only if it shares at least two, so a
 * chapter that touches one record in passing is left out.
 */
export function chaptersFor(evidenceIds: string[]): string[] {
  const shared = new Map<string, number>();
  for (const id of unique(evidenceIds)) for (const ch of backlinksFor(id).theory) shared.set(ch.id, (shared.get(ch.id) ?? 0) + 1);
  const ranked = [...shared].sort((a, b) => b[1] - a[1] || chapterNumber(a[0]) - chapterNumber(b[0]));
  return ranked.filter(([, n], i) => i === 0 || n >= 2).slice(0, CHAPTERS_SHOWN).map(([id]) => id);
}

/* ── Deaths that a story event already tells ────────────────────────────────────────
 * Such a death is shown on its event's row; every other death gets a row of its own.
 * The data says which event tells a death (`Death.event`). Where it does, it is the whole answer: a
 * death it leaves unlinked has no event (Edwin Murray's disappearance, undated, is not part of the
 * night of 1979 although the two share records), and a link to an event that does not exist is
 * ignored. Only data that links no death at all falls back to the rule this page used before the
 * field existed: a death belongs to the story event of the same era that cites at least one of the
 * death's own records; when several do, the one nearest on the line wins, then the one sharing more. */
const hostId = new Map<string, string>();
const linkedInData = deaths.some((d) => d.event !== undefined);
for (const d of deaths) {
  if (linkedInData) {
    if (d.event !== undefined && eventById.has(d.event)) hostId.set(d.id, d.event);
    continue;
  }
  const own = new Set(d.evidence);
  let best: { id: string; gap: number; shared: number } | null = null;
  for (const t of timeline) {
    if (t.era !== d.era) continue;
    const shared = t.evidence.reduce((n, id) => n + (own.has(id) ? 1 : 0), 0);
    if (!shared) continue;
    const gap = Math.abs(t.year - d.year);
    if (!best || gap < best.gap || (gap === best.gap && shared > best.shared)) best = { id: t.id, gap, shared };
  }
  if (best) hostId.set(d.id, best.id);
}
const hostedBy = new Map<string, Death[]>();
for (const d of deaths) {
  const h = hostId.get(d.id);
  if (h) hostedBy.set(h, [...(hostedBy.get(h) ?? []), d].sort((a, b) => a.year - b.year));
}
/** The story event that tells this death, if any. */
export const hostOf = (d: Death): TimelineEvent | null => eventById.get(hostId.get(d.id) ?? "") ?? null;

/* ── Filters ────────────────────────────────────────────────────────────────────── */

export interface Filters {
  layer: Layer;
  /** Support levels to keep; empty means all of them. */
  support: Status[];
  person: string;
  source: string;
  /** Causes of death to keep; empty means all of them. */
  cause: DeathKind[];
  killer: string;
  place: string;
}

/** Every filter the page keeps in the URL, besides the open rows (`e`), the era to land on (`era`) and the view. */
export const FILTER_PARAMS = ["layer", "support", "person", "source", "cause", "killer", "place"] as const;

const subset = <T extends string>(all: T[], given: string[]): T[] => {
  const kept = all.filter((x) => given.includes(x));
  return kept.length === all.length ? [] : kept;
};

export function readFilters(sp: URLSearchParams): Filters {
  const l = sp.get("layer");
  const layer: Layer = l === "deaths" || l === "events" ? l : "all";
  const withDeaths = layer !== "events";
  const person = sp.get("person") ?? "", killer = sp.get("killer") ?? "";
  return {
    layer,
    support: subset(STATUSES, sp.getAll("support")),
    // A link may name any record of a person (an alias, a suit, a later form): it means that person.
    person: person && canonicalId(person),
    source: sp.get("source") ?? "",
    // Cause and killer describe deaths, so they mean nothing while deaths are off.
    cause: withDeaths ? subset(DEATH_KINDS, sp.getAll("cause")) : [],
    killer: !withDeaths || !killer ? "" : killer === UNKNOWN_KILLER ? killer : canonicalId(killer, { identities: true, vessels: false }),
    place: sp.get("place") ?? "",
  };
}

/** Writes the filters into `sp`, leaving every other parameter alone. Defaults are left out of the URL. */
export function writeFilters(sp: URLSearchParams, f: Filters): void {
  for (const k of FILTER_PARAMS) sp.delete(k);
  if (f.layer !== "all") sp.set("layer", f.layer);
  for (const s of subset(STATUSES, f.support)) sp.append("support", s);
  if (f.person) sp.set("person", f.person);
  if (f.source) sp.set("source", f.source);
  if (f.layer !== "events") {
    for (const c of subset(DEATH_KINDS, f.cause)) sp.append("cause", c);
    if (f.killer) sp.set("killer", f.killer);
  }
  if (f.place) sp.set("place", f.place);
}

const keyOf = (f: Filters): string => { const only = new URLSearchParams(); writeFilters(only, f); return only.toString(); };
/** The filter part of the URL as one stable string, so a change of open rows does not recompute the line. */
export const filtersKey = (sp: URLSearchParams): string => keyOf(readFilters(sp));
export const sameFilters = (a: Filters, b: Filters): boolean => keyOf(a) === keyOf(b);
/**
 * A change to the filters, as a function of the filters in force. Changes are applied to the address
 * as it is about to be, not to what was last drawn, so two quick ones build on each other.
 */
export type FilterChange = (now: Filters) => Filters;

export const isFiltered = (f: Filters): boolean =>
  f.layer !== "all" || f.support.length > 0 || !!f.person || !!f.source || f.cause.length > 0 || !!f.killer || !!f.place;

/**
 * Adds a value to a keep-list, or takes it out. An empty list means "all": choosing the first value
 * narrows to it, choosing more widens again, and choosing every value (or none) is "all" once more.
 */
export function toggleIn<T extends string>(all: T[], kept: T[], value: T): T[] {
  const next = kept.includes(value) ? kept.filter((x) => x !== value) : [...kept, value];
  return subset(all, next);
}

const deathPasses = (d: Death, f: Filters): boolean =>
  (!f.support.length || f.support.includes(d.status)) &&
  (!f.person || (deathTouches.get(d.id) ?? NOTHING).people.has(f.person)) &&
  (!f.source || (deathTouches.get(d.id) ?? NOTHING).games.has(f.source)) &&
  (!f.place || d.place === f.place) &&
  (!f.cause.length || f.cause.includes(d.kind)) &&
  (!f.killer || killerKey(d) === f.killer);

const eventPasses = (t: TimelineEvent, f: Filters): boolean =>
  (!f.support.length || f.support.includes(t.status)) &&
  (!f.person || (eventTouches.get(t.id) ?? NOTHING).people.has(f.person)) &&
  (!f.source || (eventTouches.get(t.id) ?? NOTHING).games.has(f.source)) &&
  (!f.place || (t.places ?? []).includes(f.place));

/* ── The line ───────────────────────────────────────────────────────────────────── */

export interface EventRow { kind: "event"; id: string; era: string; year: number; status: Status; ev: TimelineEvent; /** Deaths this event tells, shown on its row. */ deaths: Death[] }
export interface DeathRow { kind: "death"; id: string; era: string; year: number; status: Status; d: Death; /** The story event that tells this death, when that event is not on screen. */ host: TimelineEvent | null }
export type Row = EventRow | DeathRow;
export interface EraGroup { era: Era; /** Position among all eras, from 0. */ index: number; rows: Row[]; deaths: number }
export interface Lineup {
  groups: EraGroup[];
  /** Every event and death on screen, mapped to the row that shows it (a death may sit on its event's row). */
  rowOf: Map<string, string>;
  events: number;
  deaths: number;
}

const UNPLACED: Era = { id: "", name: "Not placed in an era", range: "", summary: "" };

/**
 * Builds the line for a set of filters. Every filter narrows it. Cause and killer are questions
 * about deaths, so while one is set a story event stays only if it tells a death that matches.
 */
export function buildLineup(f: Filters): Lineup {
  const showEvents = f.layer !== "deaths", showDeaths = f.layer !== "events";
  const asksAboutDeaths = showDeaths && (f.cause.length > 0 || !!f.killer);
  const keptDeaths = showDeaths ? deaths.filter((d) => deathPasses(d, f)) : [];
  const kept = new Set(keptDeaths.map((d) => d.id));
  const told = (t: TimelineEvent) => (hostedBy.get(t.id) ?? []).filter((d) => kept.has(d.id));
  const keptEvents = showEvents ? timeline.filter((t) => eventPasses(t, f) && (!asksAboutDeaths || told(t).length > 0)) : [];
  const onScreen = new Set(keptEvents.map((t) => t.id));

  const rows: Row[] = keptEvents.map((t) => ({ kind: "event", id: t.id, era: t.era, year: t.year, status: t.status, ev: t, deaths: told(t) }));
  const rowOf = new Map<string, string>(keptEvents.map((t) => [t.id, t.id]));
  for (const d of keptDeaths) {
    const host = hostOf(d);
    if (host && onScreen.has(host.id)) { rowOf.set(d.id, host.id); continue; }
    rows.push({ kind: "death", id: d.id, era: d.era, year: d.year, status: d.status, d, host });
    rowOf.set(d.id, d.id);
  }

  const inEra = (id: string, known: boolean) => rows.filter((r) => (known ? r.era === id : !eraIndex.has(r.era))).sort((a, b) => a.year - b.year);
  const deathsIn = (rs: Row[]) => rs.reduce((n, r) => n + (r.kind === "death" ? 1 : r.deaths.length), 0);
  const groups: EraGroup[] = eras.map((era, index) => { const rs = inEra(era.id, true); return { era, index, rows: rs, deaths: deathsIn(rs) }; });
  // The validator forbids an unknown era, but content is being rewritten: show such rows last, never drop them.
  const stray = inEra("", false);
  if (stray.length) groups.push({ era: UNPLACED, index: eras.length, rows: stray, deaths: deathsIn(stray) });
  return { groups, rowOf, events: keptEvents.length, deaths: keptDeaths.length };
}

export const TOTAL_EVENTS = timeline.length;
export const TOTAL_DEATHS = deaths.length;

/** The title of an event or a death, for messages about an entry that is not on screen. */
export const titleOfId = (id: string): string => eventById.get(id)?.title ?? deathById.get(id)?.title ?? id;

/* ── Long eras ──────────────────────────────────────────────────────────────────────
 * An era with many entries shows its first dozen and a button for the rest, so one era cannot make
 * the page endless. Nothing is cut for the sake of a few entries, and nothing is cut while a
 * filter is on (the reader asked for those entries). */
export const FOLD_TO = 12;
const FOLD_MIN_HIDDEN = 4;
export const canFold = (g: EraGroup): boolean => g.rows.length >= FOLD_TO + FOLD_MIN_HIDDEN;

/** What an id from a link is: a story event, a death, or nothing the timeline knows. */
export const kindOfId = (id: string): "event" | "death" | null => (eventById.has(id) ? "event" : deathById.has(id) ? "death" : null);

/* ── Choices offered by the filter panel ────────────────────────────────────────── */

/** How many people the panel offers; the most frequent on the line come first. */
const PEOPLE_OFFERED = 12;
export const personOptions: string[] = (() => {
  const n = new Map<string, number>();
  for (const t of [...eventTouches.values(), ...deathTouches.values()]) for (const p of t.people) n.set(p, (n.get(p) ?? 0) + 1);
  return [...n]
    .filter(([id]) => { const g = personById.get(id)?.group; return !!g && g !== "entity" && g !== "other"; })
    .sort((a, b) => b[1] - a[1])
    .slice(0, PEOPLE_OFFERED)
    .map(([id]) => id);
})();
export const sourceOptions: string[] = (() => {
  const used = new Set<string>();
  for (const t of [...eventTouches.values(), ...deathTouches.values()]) for (const g of t.games) used.add(g);
  // In the order the sources are listed, then any source the list does not know.
  const known = games.map((g) => g.id as string).filter((id) => used.has(id));
  return [...known, ...[...used].filter((id) => !known.includes(id))];
})();
export const killerOptions: { key: string; n: number }[] = (() => {
  const n = new Map<string, number>();
  for (const d of deaths) n.set(killerKey(d), (n.get(killerKey(d)) ?? 0) + 1);
  return [...n].sort((a, b) => b[1] - a[1]).map(([key, count]) => ({ key, n: count }));
})();
export const placeOptions = places.filter((p) => LOCATION_SPANS[p.id]);

const dropThe = (name: string) => name.replace(/^The /, "");
export const personName = (id: string): string => dropThe(labelForEntity(id));
export const isDescriptor = (id: string): boolean => personById.get(id)?.nameStatus === "descriptor";
export const killerName = (key: string): string => (key === UNKNOWN_KILLER ? "Unknown or not stated" : dropThe(labelForEntity(key)));
export const isUnknownKiller = (key: string): boolean => key === UNKNOWN_KILLER;
export const placeName = (id: string): string => placeById.get(id)?.name ?? labelForEntity(id);
export const causeLabel = (kind: string): string => (DEATH_KIND as Record<string, { label: string } | undefined>)[kind]?.label ?? kind;

/* ── The filters in plain words ─────────────────────────────────────────────────── */

const list = (xs: string[], joiner: string) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} ${joiner} ${xs[xs.length - 1]}`);
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export interface Applied {
  key: string;
  /** A phrase that completes "Showing … events": "with William Afton", "at Fredbear's Family Diner". */
  text: string;
  /** Takes this one filter off. */
  remove: FilterChange;
}

export function appliedFilters(f: Filters): Applied[] {
  const out: Applied[] = [];
  if (f.layer === "events") out.push({ key: "layer", text: "story events only", remove: (now) => ({ ...now, layer: "all" }) });
  if (f.layer === "deaths") out.push({ key: "layer", text: "deaths only", remove: (now) => ({ ...now, layer: "all" }) });
  if (f.person) out.push({ key: "person", text: `with ${labelForEntity(f.person)}`, remove: (now) => ({ ...now, person: "" }) });
  if (f.place) out.push({ key: "place", text: `at ${placeName(f.place)}`, remove: (now) => ({ ...now, place: "" }) });
  if (f.support.length) out.push({ key: "support", text: `${list(f.support.map((s) => lower(STATUS[s].word)), "and")} only`, remove: (now) => ({ ...now, support: [] }) });
  if (f.source) out.push({ key: "source", text: `from ${gameMeta(f.source).short}`, remove: (now) => ({ ...now, source: "" }) });
  if (f.cause.length) out.push({ key: "cause", text: `cause of death: ${list(f.cause.map((c) => lower(causeLabel(c))), "or")}`, remove: (now) => ({ ...now, cause: [] }) });
  if (f.killer) out.push({ key: "killer", text: f.killer === UNKNOWN_KILLER ? "killer unknown or not stated" : `killed by ${labelForEntity(f.killer)}`, remove: (now) => ({ ...now, killer: "" }) });
  return out;
}

const share = (n: number, total: number, noun: string) => (n === total ? `all ${plural(total, noun)}` : `${n} of ${plural(total, noun)}`);
/** "12 of 36 events and 3 of 25 deaths", following the layer in use. */
export function countPhrase(line: Lineup, f: Filters): string {
  const parts: string[] = [];
  if (f.layer !== "deaths") parts.push(share(line.events, TOTAL_EVENTS, "event"));
  if (f.layer !== "events") parts.push(share(line.deaths, TOTAL_DEATHS, "death"));
  return parts.join(" and ");
}

const SMALL = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
/** Small numbers as words, for sentences. */
export const inWords = (n: number): string => SMALL[n] ?? String(n);

/* ── Links ──────────────────────────────────────────────────────────────────────── */

/** A link within the timeline: the given search parameters on the current path. */
export const within = (sp: URLSearchParams): { search: string } => { const s = sp.toString(); return { search: s ? `?${s}` : "" }; };
/** The story event's own link, with every filter dropped so that it is certain to be on screen. */
export const eventLink = (t: TimelineEvent): string => timelineEventPath(t.id);

/* ── Locations ──────────────────────────────────────────────────────────────────── */

export interface LocRow {
  id: string;
  name: string;
  span: LocationSpan;
  /** First and last era of the place, as positions among the eras; null when it has no place on the line. */
  from: number | null;
  to: number | null;
  /** Why it has no position, in words. */
  floating: string | null;
}
export interface LocGroup { kind: string; label: string; rows: LocRow[] }

export const locationGroups: LocGroup[] = (() => {
  const rows: LocRow[] = placeOptions.map((p) => {
    const span = LOCATION_SPANS[p.id];
    const a = span.from != null ? eraIndex.get(span.from) : undefined;
    const b = span.to != null ? eraIndex.get(span.to) : undefined;
    const placed = !span.undated && !span.outside && a != null && b != null && a <= b;
    return { id: p.id, name: p.name, span, from: placed ? a : null, to: placed ? b : null, floating: placed ? null : span.outside ? "Outside the timeline" : "Undated" };
  });
  const kinds = unique([...Object.keys(LOCATION_KIND), ...rows.map((r) => r.span.kind as string)]);
  return kinds
    .map((kind) => ({
      kind,
      label: (LOCATION_KIND as Record<string, { label: string } | undefined>)[kind]?.label ?? kind,
      rows: rows.filter((r) => r.span.kind === kind).sort((x, y) => (x.from ?? eras.length) - (y.from ?? eras.length)),
    }))
    .filter((g) => g.rows.length > 0);
})();

export interface PlaceCounts { events: number[]; deaths: number[] }
/** Events and deaths at each place, per era, under every filter except the place filter itself. */
export function countsByPlace(f: Filters): Map<string, PlaceCounts> {
  const line = buildLineup({ ...f, place: "" });
  const out = new Map<string, PlaceCounts>();
  const at = (place: string) => {
    let c = out.get(place);
    if (!c) { c = { events: eras.map(() => 0), deaths: eras.map(() => 0) }; out.set(place, c); }
    return c;
  };
  const count = (d: Death) => { const i = eraIndex.get(d.era); if (d.place && i != null) at(d.place).deaths[i]++; };
  for (const g of line.groups) {
    for (const r of g.rows) {
      if (r.kind === "death") { count(r.d); continue; }
      const i = eraIndex.get(r.era);
      if (i != null) for (const p of r.ev.places ?? []) at(p).events[i]++;
      r.deaths.forEach(count);
    }
  }
  return out;
}
