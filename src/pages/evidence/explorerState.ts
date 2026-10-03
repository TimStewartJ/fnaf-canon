/**
 * The evidence explorer's state and its search: what the URL says, how records are matched,
 * counted and ordered. No components here.
 *
 * URL parameters (all optional; anything left out is the default):
 *   q        search words; every word must appear somewhere in the record
 *   game     source ids      one value, or several joined with "+" (any of them)
 *   kind     source kinds    the same
 *   cert     certainty       the same
 *   use      place in the theory (cited, filed, outside, none), the same
 *   tag      one tag
 *   entity   one person or place id (other pages link here with this)
 *   img=1    only records with a screenshot
 *   sort     match | time | game   (default: match while searching, otherwise time)
 *   view     cards                 (default: rows)
 *   n        how many results are shown
 * Links written before several values were allowed carry exactly one and read the same as ever.
 */
import type { Evidence } from "../../data/schema";
import { allTags, evidence, games, labelForEntity, personById, placeById } from "../../data/store";
import { gameMeta } from "../../data/gameMeta";
import { CERTAINTY, KIND_LABEL } from "../../components/ui";
import { isPlace, placeOf, type Place } from "./coverage";

export type Sort = "match" | "time" | "game";
export type View = "rows" | "cards";

export interface Query {
  q: string;
  game: string[];
  kind: string[];
  cert: string[];
  use: Place[];
  tag: string;
  entity: string;
  img: boolean;
  /** As written in the URL; null when left to the default. */
  sort: Sort | null;
  view: View;
  /** As written in the URL; null when left to the default. */
  n: number | null;
}

export const PAGE: Record<View, number> = { rows: 50, cards: 12 };

const list = (v: string | null): string[] => [...new Set((v ?? "").split(/[\s,]+/).filter(Boolean))];

export function parseQuery(sp: URLSearchParams): Query {
  const sort = sp.get("sort");
  const n = Number(sp.get("n"));
  return {
    q: sp.get("q") ?? "",
    game: list(sp.get("game")),
    kind: list(sp.get("kind")),
    cert: list(sp.get("cert")),
    use: list(sp.get("use")).filter(isPlace),
    tag: (sp.get("tag") ?? "").trim(),
    entity: (sp.get("entity") ?? "").trim(),
    img: sp.get("img") === "1",
    sort: sort === "match" || sort === "time" || sort === "game" ? sort : null,
    view: sp.get("view") === "cards" ? "cards" : "rows",
    n: Number.isInteger(n) && n > 0 ? n : null,
  };
}

/** The query as search parameters, in a fixed order, with defaults left out. */
export function toParams(query: Query): URLSearchParams {
  const sp = new URLSearchParams();
  if (query.q.trim()) sp.set("q", query.q);
  if (query.game.length) sp.set("game", query.game.join(" "));
  if (query.kind.length) sp.set("kind", query.kind.join(" "));
  if (query.cert.length) sp.set("cert", query.cert.join(" "));
  if (query.use.length) sp.set("use", query.use.join(" "));
  if (query.tag) sp.set("tag", query.tag);
  if (query.entity) sp.set("entity", query.entity);
  if (query.img) sp.set("img", "1");
  if (query.sort) sp.set("sort", query.sort);
  if (query.view !== "rows") sp.set("view", query.view);
  if (query.n) sp.set("n", String(query.n));
  return sp;
}

/** The order actually in force: relevance needs words to rank by. */
export function sortOf(query: Query, searching: boolean): Sort {
  if (query.sort === "match") return searching ? "match" : "time";
  return query.sort ?? (searching ? "match" : "time");
}

export const limitOf = (query: Query): number => query.n ?? PAGE[query.view];

/** How many of the filters are in use (the search words count as one). */
export function appliedCount(query: Query): number {
  return (query.q.trim() ? 1 : 0) + query.game.length + query.kind.length + query.cert.length + query.use.length
    + (query.tag ? 1 : 0) + (query.entity ? 1 : 0) + (query.img ? 1 : 0);
}

/* ── Search text ───────────────────────────────────────────────────────────────── */

/** Lower case, with typographic quotes and dashes made plain so a phone keyboard's “smart” punctuation still matches. */
export const fold = (s: string): string =>
  s.toLowerCase().replace(/[\u2018\u2019\u02BC]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, "-");

export const termsOf = (q: string): string[] => [...new Set(fold(q).split(/\s+/).filter(Boolean))];

interface Entry {
  e: Evidence;
  /** Position in the store: in-universe year, then id. */
  at: number;
  /** Position of the source in release order. */
  gameAt: number;
  /** In-universe year; records without one sort last. */
  year: number;
  place: Place;
  entities: string[];
  title: string;
  id: string;
  claim: string;
  quote: string;
  location: string;
  /** Everything searchable, folded. */
  all: string;
}

let entries: Entry[] | null = null;
function index(): Entry[] {
  if (entries) return entries;
  const order = new Map<string, number>(games.map((g, i) => [g.id, i]));
  const titles = new Map<string, string>(games.map((g) => [g.id, g.title]));
  entries = evidence.map((e, at) => {
    const ents = [...(e.people ?? []), ...(e.places ?? [])];
    const title = fold(e.title), claim = fold(e.claim), quote = fold(e.quote ?? ""), location = fold(e.location);
    const rest = fold([
      e.notes ?? "", (e.tags ?? []).join(" "), ents.join(" "), ents.map(labelForEntity).join(" "),
      titles.get(e.game) ?? "", gameMeta(e.game).short, KIND_LABEL[e.kind] ?? e.kind, e.when.label,
    ].join(" \n "));
    return {
      e, at, gameAt: order.get(e.game) ?? games.length, year: e.when.year ?? Infinity, place: placeOf(e.id), entities: ents,
      title, id: e.id, claim, quote, location,
      all: [e.id, title, claim, quote, location, rest].join(" \n "),
    };
  });
  return entries;
}

const WORD_START = /[^a-z0-9]/;
const startsWord = (text: string, i: number) => i === 0 || WORD_START.test(text[i - 1]);

/** Ranks a match: the title counts most, then the claim and the quote, the exact spot, the id; anything else least. */
function score(x: Entry, terms: string[], phrase: string): number {
  let s = 0;
  for (const t of terms) {
    const inTitle = x.title.indexOf(t);
    if (inTitle >= 0) s += startsWord(x.title, inTitle) ? 12 : 8;
    const inClaim = x.claim.indexOf(t);
    if (inClaim >= 0) s += startsWord(x.claim, inClaim) ? 5 : 4;
    if (x.quote.includes(t)) s += 4;
    if (x.location.includes(t)) s += 3;
    if (x.id.includes(t)) s += 2;
    s += 1;
  }
  // The words together, in the order they were typed, beat the same words scattered.
  if (terms.length > 1 && phrase) {
    if (x.title.includes(phrase)) s += 12;
    else if (x.claim.includes(phrase) || x.quote.includes(phrase)) s += 6;
  }
  return s;
}

/* ── Matching and counting ─────────────────────────────────────────────────────── */

export interface Group { key: string; kind: "year" | "none" | "game"; label: string; total: number }

export interface Outcome {
  /** Every match, in order. */
  results: Evidence[];
  /** The whole archive. */
  total: number;
  /**
   * For each option of a facet: how many records would match with that option chosen and every
   * other filter left as it is. So a count never changes when you tick a box in its own group.
   */
  counts: { game: Map<string, number>; kind: Map<string, number>; cert: Map<string, number>; use: Map<string, number>; tag: Map<string, number>; entity: Map<string, number>; img: number };
  sort: Sort;
  /** Headings for the list under the order in force (none when ranked by relevance). */
  groupOf: ((e: Evidence) => Group) | null;
}

const bump = (m: Map<string, number>, k: string) => { m.set(k, (m.get(k) ?? 0) + 1); };

export function runQuery(query: Query, text: string): Outcome {
  const terms = termsOf(text);
  const sort = sortOf(query, terms.length > 0);
  const game = new Set(query.game), kind = new Set(query.kind), cert = new Set(query.cert), use = new Set<string>(query.use);
  const counts: Outcome["counts"] = { game: new Map(), kind: new Map(), cert: new Map(), use: new Map(), tag: new Map(), entity: new Map(), img: 0 };
  const hits: Entry[] = [];

  for (const x of index()) {
    const e = x.e;
    // Which filter this record fails, if it fails exactly one: it still counts towards that filter's options.
    let failed = "";
    let fails = 0;
    const fail = (name: string) => { failed = name; fails += 1; };
    if (terms.length && !terms.every((t) => x.all.includes(t))) fail("q");
    if (game.size && !game.has(e.game)) fail("game");
    if (kind.size && !kind.has(e.kind)) fail("kind");
    if (cert.size && !cert.has(e.certainty)) fail("cert");
    if (use.size && !use.has(x.place)) fail("use");
    if (query.tag && !e.tags?.includes(query.tag)) fail("tag");
    if (query.entity && !x.entities.includes(query.entity)) fail("entity");
    if (query.img && !e.image) fail("img");
    if (fails > 1) continue;
    if (fails === 0 || failed === "game") bump(counts.game, e.game);
    if (fails === 0 || failed === "kind") bump(counts.kind, e.kind);
    if (fails === 0 || failed === "cert") bump(counts.cert, e.certainty);
    if (fails === 0 || failed === "use") bump(counts.use, x.place);
    if (fails === 0 || failed === "tag") for (const t of e.tags ?? []) bump(counts.tag, t);
    if (fails === 0 || failed === "entity") for (const t of x.entities) bump(counts.entity, t);
    if (fails === 0 && e.image) counts.img += 1;
    if (fails === 0) hits.push(x);
  }

  if (sort === "game") hits.sort((a, b) => a.gameAt - b.gameAt || a.at - b.at);
  // Most records carry no year. Inside a year, and inside that long undated tail, the sources follow
  // release order (the store alone would leave them in alphabetical order of their ids).
  else if (sort === "time") hits.sort((a, b) => a.year - b.year || a.gameAt - b.gameAt || a.at - b.at);
  else {
    const phrase = fold(text).trim().replace(/\s+/g, " ");
    const scores = new Map(hits.map((x) => [x, score(x, terms, phrase)]));
    hits.sort((a, b) => scores.get(b)! - scores.get(a)! || a.at - b.at);
  }
  const results = hits.map((x) => x.e);

  let groupOf: Outcome["groupOf"] = null;
  if (sort !== "match") {
    const key = (e: Evidence) => (sort === "game" ? e.game : e.when.year != null ? String(e.when.year) : "");
    const totals = new Map<string, number>();
    for (const e of results) bump(totals, key(e));
    const made = new Map<string, Group>();
    groupOf = (e) => {
      const k = key(e);
      let g = made.get(k);
      if (!g) {
        g = sort === "game"
          ? { key: k, kind: "game", label: k, total: totals.get(k) ?? 0 }
          : { key: k || "none", kind: k ? "year" : "none", label: k || "No fixed year", total: totals.get(k) ?? 0 };
        made.set(k, g);
      }
      return g;
    };
  }
  return { results, total: evidence.length, counts, sort, groupOf };
}

/* ── Options for the two pickers ───────────────────────────────────────────────── */

export interface Option { id: string; label: string; count: number; hint?: string }

/** What an id names. The store knows every id used on a record; an id that only a URL carries is not guessed at. */
export const entityKind = (id: string): "Person" | "Place" | "Person or place" => (personById.has(id) ? "Person" : placeById.has(id) ? "Place" : "Person or place");

let everyEntity: string[] | null = null;
/** Every person and place id that appears on a record. */
function entityIds(): string[] {
  return (everyEntity ??= [...new Set(index().flatMap((x) => x.entities))]);
}

const byUse = (a: Option, b: Option) => b.count - a.count || a.label.localeCompare(b.label);

/**
 * Every tag in the archive with the number of records it would give under the other filters, most
 * used first. A tag that would give none is still listed (last), so the reader can see it exists.
 */
export function tagOptions(counts: Map<string, number>, current: string): Option[] {
  const ids = current && !allTags.includes(current) ? [...allTags, current] : allTags;
  return ids.map((id) => ({ id, label: `#${id}`, count: counts.get(id) ?? 0 })).sort(byUse);
}

/** The same for people and places. */
export function entityOptions(counts: Map<string, number>, current: string): Option[] {
  const all = entityIds();
  const ids = current && !all.includes(current) ? [...all, current] : all;
  return ids.map((id) => ({ id, label: labelForEntity(id), count: counts.get(id) ?? 0, hint: entityKind(id) })).sort(byUse);
}

/* ── Marking the words that matched ────────────────────────────────────────────── */

/** Splits display text into runs, flagging the parts that match a search word. Lengths are preserved by `fold`. */
export function marks(text: string, terms: string[]): { s: string; hit: boolean }[] {
  if (!terms.length) return [{ s: text, hit: false }];
  const low = fold(text);
  const spans: [number, number][] = [];
  for (const t of terms) {
    let i = low.indexOf(t);
    while (i >= 0) { spans.push([i, i + t.length]); i = low.indexOf(t, i + t.length); }
  }
  if (!spans.length) return [{ s: text, hit: false }];
  spans.sort((a, b) => a[0] - b[0]);
  const out: { s: string; hit: boolean }[] = [];
  let at = 0;
  for (const [from, to] of spans) {
    if (to <= at) continue;
    const start = Math.max(from, at);
    if (start > at) out.push({ s: text.slice(at, start), hit: false });
    out.push({ s: text.slice(start, to), hit: true });
    at = to;
  }
  if (at < text.length) out.push({ s: text.slice(at), hit: false });
  return out;
}

/** Roughly what two lines of a row hold: a match further into the claim than this is not on screen. */
const IN_VIEW = 110;

/** A stretch of `text` around position `at`, starting on a word and marked as cut where it is. */
function around(text: string, at: number, before: number, length: number): string {
  if (text.length <= length) return text;
  let start = Math.max(0, at - before);
  if (start > 0) { const sp = text.indexOf(" ", start); start = sp >= 0 && sp < at ? sp + 1 : start; }
  let end = Math.min(text.length, start + length);
  if (end < text.length) { const sp = text.lastIndexOf(" ", end); if (sp > at) end = sp; }
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

/**
 * The claim as a row shows it while searching: from the start when a matched word is near the
 * start, otherwise from just before the first match, so the reason for the match is on screen.
 */
export function claimFor(e: Evidence, terms: string[]): string {
  if (!terms.length) return e.claim;
  const low = fold(e.claim);
  const first = terms.map((t) => low.indexOf(t)).filter((i) => i >= 0).sort((a, b) => a - b)[0];
  if (first === undefined || first < IN_VIEW || low.length !== e.claim.length) return e.claim;
  return around(e.claim, first, 50, e.claim.length);
}

/**
 * When a matched word is nowhere in what a row shows (title, claim, exact spot), says where it
 * was found, with a short excerpt.
 */
export function elsewhere(e: Evidence, terms: string[]): { label: string; text: string } | null {
  if (!terms.length) return null;
  const shown = fold(`${e.title} \n ${e.claim} \n ${e.location}`);
  const missing = terms.filter((t) => !shown.includes(t));
  if (!missing.length) return null;
  const fields: [string, string][] = [["Quote", e.quote ?? ""], ["Note", e.notes ?? ""], ["Id", e.id], ["Tags", (e.tags ?? []).map((t) => `#${t}`).join(" ")]];
  for (const [label, text] of fields) {
    const low = fold(text);
    const hit = missing.map((t) => low.indexOf(t)).filter((i) => i >= 0).sort((a, b) => a - b)[0];
    if (hit !== undefined) return { label, text: low.length === text.length ? around(text, hit, 40, 120) : text.slice(0, 120) };
  }
  return null;
}

/** Certainty values in the order of the scale, then anything the data adds. */
export function certaintyOrder(present: Iterable<string>): string[] {
  const known = Object.keys(CERTAINTY);
  return [...known, ...[...new Set(present)].filter((c) => !known.includes(c)).sort()];
}

/** Source kinds in the order of the shared labels, then anything the data adds. */
export function kindOrder(present: Iterable<string>): string[] {
  const known = Object.keys(KIND_LABEL);
  const seen = new Set(present);
  return [...known.filter((k) => seen.has(k)), ...[...seen].filter((k) => !known.includes(k)).sort()];
}
