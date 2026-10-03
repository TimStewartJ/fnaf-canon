import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CornerDownLeft, FileText, House, Search, X, type LucideIcon } from "lucide-react";
import { evidence, people, places, timeline } from "../../data/store";
import { blockTexts } from "../../data/theoryText";
import { gameMeta } from "../../data/gameMeta";
import { useEvidenceDrawer } from "../evidenceDrawer";
import { useMediaQuery, useModalDialog } from "../hooks";
import { SECTION_ICON } from "../icons";
import { Icon } from "../Icon";
import { chapterPath, personPath, placePath, timelineEventPath } from "../links";
import { aliasParts, capitalise, foldText as fold, namesOf } from "../names";
import { plainText } from "../richTextPlain";
import { smartQuotes } from "../typography";
import { chapterNumber, readingOrder } from "../chapterOrder";
import { NAV_FLAT } from "./nav";

type Kind = "page" | "chapter" | "person" | "place" | "event" | "evidence";
interface Entry {
  kind: Kind; id: string; title: string; sub: string; to?: string; icon: LucideIcon;
  /** Its title, folded (see `fold`). */
  name: string;
  /** What says what the entry is, after its title, folded: a chapter's question, a person's other names. */
  lead: string;
  /** Everything the entry can be found by, folded. */
  hay: string;
  /** Its title and other names, folded: a query equal to one of these is an exact hit. */
  names: string[];
  /** Breaks ties between equal hits: how much the archive has on it. */
  weight: number;
  /** A person's other names, as the data writes them: each with the mark that says where it comes from. */
  aliases?: readonly string[];
}

const KIND_HEAD: Record<Kind, string> = { page: "Pages", chapter: "Theory chapters", person: "People", place: "Places", event: "Timeline", evidence: "Evidence records" };
const KIND_ORDER: Kind[] = ["chapter", "person", "place", "page", "event", "evidence"];
const LIMIT: Record<Kind, number> = { page: 4, chapter: 6, person: 6, place: 4, event: 4, evidence: 10 };
/** A query that is something's own name puts it first, above the groups. */
const BEST = 3;
const EXACT = 180;

// `fold` is the shared foldText (names.ts): text as the search compares it, so that "Fredbear’s",
// "Fredbear's" and "fredbears" are one word, and "’87" is "87".
const bare = (s: string): string => s.replace(/^(?:the|a|an) /, "");
const names = (...all: string[]): string[] => [...new Set(all.map(fold).flatMap((n) => [n, bare(n)]))];

let INDEX: Entry[] | null = null;
/** The words people and places are called by, for putting a mistyped query right. */
let WORDS: Map<string, number> | null = null;
function buildIndex(): Entry[] {
  const filed = new Map<string, number>();
  for (const e of evidence) for (const id of [...(e.people ?? []), ...(e.places ?? [])]) filed.set(id, (filed.get(id) ?? 0) + 1);
  const out: Entry[] = [];
  const add = (e: Omit<Entry, "name" | "lead" | "hay"> & { lead?: string; more?: string }) => {
    const { lead = "", more = "", ...rest } = e;
    const name = fold(e.title), about = fold(lead);
    out.push({ ...rest, name, lead: about, hay: `${name} ${about} ${fold(more)}` });
  };
  add({ kind: "page", id: "/", title: "Home", sub: "The archive’s front page", lead: "overview start", names: ["home"], weight: 0, to: "/", icon: House });
  for (const n of NAV_FLAT) add({ kind: "page", id: n.to, title: n.label, sub: n.desc, lead: n.desc, names: names(n.label), weight: 0, to: n.to, icon: n.icon });
  // Reading order and its numbers, not the order of the theory array (see chapterOrder.ts). A
  // chapter is shown with the question it answers (its title alone rarely says), and is found by
  // anything in it: question and answer first, then the argument itself.
  readingOrder.forEach((s) => add({
    kind: "chapter", id: s.id, title: s.title, sub: `Chapter ${chapterNumber(s.id)}${s.question ? ` · ${s.question}` : ""}`,
    lead: s.question ?? "",
    more: [s.answer ?? "", ...s.body.flatMap((b) => (typeof b === "string" ? [b] : blockTexts(b))), s.tension ?? "", s.id].map(plainText).join(" "),
    names: names(s.title), weight: 0, to: chapterPath(s.id), icon: SECTION_ICON.theory,
  }));
  // A person is found by the name and by every alias ("glitchtrap" finds the rabbit in the code). The
  // marks that say where an alias comes from are shown with it and are not searched.
  for (const p of people) {
    const called = namesOf(p);
    add({
      kind: "person", id: p.id, title: capitalise(p.name), sub: p.aliases.slice(0, ALIASES_SHOWN).join(" · ") || plainText(p.status).slice(0, 80),
      lead: called.slice(1).join(" "), more: p.id, names: names(...called), aliases: p.aliases, weight: filed.get(p.id) ?? 0, to: personPath(p.id), icon: SECTION_ICON.people,
    });
  }
  for (const p of places) add({ kind: "place", id: p.id, title: p.name, sub: p.years, more: p.id, names: names(p.name), weight: filed.get(p.id) ?? 0, to: placePath(p.id), icon: SECTION_ICON.places });
  for (const t of timeline) add({ kind: "event", id: t.id, title: t.title, sub: t.yearLabel, lead: t.yearLabel, names: names(t.title), weight: 0, to: timelineEventPath(t.id), icon: SECTION_ICON.timeline });
  for (const e of evidence) add({
    kind: "evidence", id: e.id, title: e.title, sub: `${gameMeta(e.game).short} · ${e.location}`,
    lead: e.claim, more: `${e.quote ?? ""} ${e.location} ${e.id} ${(e.tags ?? []).join(" ")}`, names: [], weight: 0, icon: FileText,
  });
  WORDS = new Map();
  for (const e of out) if (e.kind !== "evidence") for (const n of e.names) for (const w of n.split(/[^a-z0-9]+/)) if (w.length >= 4) WORDS.set(w, (WORDS.get(w) ?? 0) + 1 + e.weight);
  return out;
}

/** How many of a person's other names a result shows under the name. */
const ALIASES_SHOWN = 3;
/**
 * The line under a result. For a person found by an alias, the alias that was asked for comes
 * first, so the reader sees why "the rabbit in the code" answers "glitchtrap"; each alias keeps
 * its mark ("Scott's working name", "a fan name").
 */
function subOf(e: Entry, tokens: readonly string[]): string {
  if (!e.aliases?.length || !tokens.length) return e.sub;
  const asked = (alias: string) => { const name = fold(aliasParts(alias).name); return tokens.some((t) => name.includes(t)); };
  const first = e.aliases.filter(asked);
  return first.length ? [...first, ...e.aliases.filter((a) => !asked(a))].slice(0, ALIASES_SHOWN).join(" · ") : e.sub;
}

/** Words that carry no meaning in a question typed whole ("who is the purple guy"). */
const STOP = new Set(["a", "an", "and", "are", "did", "do", "does", "how", "in", "is", "of", "on", "the", "to", "was", "were", "what", "when", "where", "which", "who", "whom", "whose", "why"]);

const escapeRe = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** A word without its commonest endings, so "killed" also finds "kills" and "killer". Short words are left alone. */
const stem = (t: string): string => (t.length < 5 ? t : t.replace(/(?:ing|ed|ers|er|es|s)$/, "")) || t;
const countOf = (text: string, word: string): number => { let n = 0; for (let i = text.indexOf(word); i >= 0 && n < 12; i = text.indexOf(word, i + word.length)) n++; return n; };

interface Hit { e: Entry; score: number; /** How many of the words it has. */ hits: number }
/**
 * Everything that has any of `tokens`, graded. `query` is what was typed, folded. An entry whose
 * own name is the query (as typed, without a leading article, or without its filler words) is an
 * exact hit. After that, where a word is found counts: in the title, then in what says what the
 * entry is (a chapter's question), then anywhere; a number in a title counts for more (“87” in
 * “November 1987”), the whole phrase counts for more still, and a chapter that keeps returning
 * to a word is more about it than one that mentions it once.
 */
function grade(index: Entry[], tokens: string[], query: string): Hit[] {
  const asked = [...new Set([query, bare(query), tokens.join(" ")])];
  const words = tokens.map((t) => ({ t, s: stem(t), digits: /^\d+$/.test(t) }));
  const starts = new Map<string, RegExp>();
  const atStart = (text: string, w: string) => {
    let re = starts.get(w);
    if (!re) starts.set(w, re = new RegExp(`(^|[^a-z0-9])${escapeRe(w)}`));
    return re.test(text);
  };
  const out: Hit[] = [];
  for (const e of index) {
    let hits = 0, score = 0;
    for (const { t, s, digits } of words) {
      const w = e.hay.includes(t) ? t : s !== t && e.hay.includes(s) ? s : null;
      if (w === null) continue;
      hits++;
      score += atStart(e.name, w) ? 12 : e.name.includes(w) ? 6 : 0;
      if (digits && e.name.includes(t)) score += 14;
      score += atStart(e.lead, w) ? 8 : e.lead.includes(w) ? 4 : 0;
      if (e.kind === "chapter") score += countOf(e.hay, w);
    }
    if (!hits) continue;
    if (hits === tokens.length) score += asked.includes(e.name) || asked.includes(bare(e.name)) ? 200 : asked.some((q) => e.names.includes(q)) ? EXACT : e.name.startsWith(query) ? 120 : e.name.includes(query) ? 80 : 0;
    if (query.includes(" ")) score += e.lead.includes(query) ? 60 : e.hay.includes(query) ? 30 : 0;
    out.push({ e, score, hits });
  }
  return out.sort((a, b) => b.hits - a.hits || b.score - a.score || b.e.weight - a.e.weight || a.e.title.length - b.e.title.length);
}

/** Edit distance, stopping early once it passes `max`. */
function distance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (row[j] < best) best = row[j];
    }
    if (best > max) return max + 1;
    prev = row;
  }
  return prev[b.length];
}
/** The name-word nearest to a mistyped one, if any is near enough. */
function nearest(word: string): string | null {
  if (!WORDS || word.length < 4) return null;
  const max = word.length <= 5 ? 1 : 2;
  let best: string | null = null, bestD = max + 1, bestN = 0;
  for (const [w, n] of WORDS) {
    const d = distance(word, w, max);
    if (d < bestD || (d === bestD && d <= max && n > bestN)) { best = w; bestD = d; bestN = n; }
  }
  return bestD <= max ? best : null;
}

interface Group { key: string; head: string; from: number; items: Entry[] }
interface Found {
  groups: Group[]; flat: Entry[];
  /** Set when nothing matched as typed and these words were searched instead. */
  instead: string | null;
  /** True when nothing has every word, and what is shown has some of them. */
  partial: boolean;
  /** The words that were searched for, folded. */
  tokens: string[];
}
/** With fewer than this many pages, chapters, people or places that have every word, those that have some are shown as well. */
const FEW = 3;

function search(q: string): Found {
  INDEX ??= buildIndex();
  const query = fold(q.trim()).replace(/\s+/g, " ");
  const pack = (parts: { key: string; head: string; items: Entry[] }[], instead: string | null = null, partial = false, tokens: string[] = []): Found => {
    const groups: Group[] = [];
    let from = 0;
    for (const p of parts) if (p.items.length) { groups.push({ ...p, from }); from += p.items.length; }
    return { groups, flat: groups.flatMap((g) => g.items), instead, partial, tokens };
  };
  if (!query) return pack([{ key: "pages", head: "Jump to", items: INDEX.filter((e) => e.kind === "page") }]);
  // The words that carry the meaning: a question typed whole is searched by its subject, and
  // an entry that also holds the whole phrase ranks above the rest.
  const all = query.split(" ");
  const content = all.filter((t) => !STOP.has(t));
  let tokens = content.length ? content : all;
  let graded = grade(INDEX, tokens, query);
  let n = tokens.length;
  let instead: string | null = null;
  if (!graded.some((h) => h.hits === n)) {
    // Nothing has all of it as typed: a slip of the keys, perhaps. Try the nearest names.
    const near = tokens.map((t) => (INDEX!.some((e) => e.hay.includes(t)) ? t : nearest(t) ?? t));
    if (near.join(" ") !== tokens.join(" ")) {
      const again = grade(INDEX, near, near.join(" "));
      if (again.some((h) => h.hits === near.length)) { graded = again; n = near.length; instead = near.join(" "); tokens = near; }
    }
  }
  // Everything with every word. When that is little, also what has some of the words, most words
  // first (a question typed whole seldom has all its words in one place); a record must have all
  // but one of three or more, or the list would be every record with "freddy" in it.
  const full = graded.filter((h) => h.hits === n);
  const few = full.filter((h) => h.e.kind !== "evidence").length < FEW;
  const scored = few ? graded.filter((h) => h.hits === n || (h.e.kind !== "evidence" ? true : n >= 3 && h.hits >= n - 1)) : full;
  const best = full.filter((s) => s.score >= EXACT && s.e.kind !== "evidence").slice(0, BEST).map((s) => s.e);
  const count = new Map<Kind, number>();
  const picked = scored.filter(({ e }) => {
    if (best.includes(e)) return false;
    const n = count.get(e.kind) ?? 0;
    if (n >= LIMIT[e.kind]) return false;
    count.set(e.kind, n + 1);
    return true;
  }).map((s) => s.e);
  // The palette shows the first few records; the locker has the rest, with its filters.
  const typed = q.trim();
  const locker: Entry = { kind: "page", id: "evidence-search", title: `Search every record for “${typed}”`, sub: "In the evidence locker, where the results can be filtered", name: "", lead: "", hay: "", names: [], weight: 0, to: `/evidence?q=${encodeURIComponent(typed)}`, icon: SECTION_ICON.evidence };
  return pack([
    { key: "best", head: "Best match", items: best },
    ...KIND_ORDER.map((k) => ({ key: k, head: KIND_HEAD[k], items: picked.filter((e) => e.kind === k) })),
    { key: "more", head: "More", items: [locker] },
  ], instead, !full.length && scored.length > 0, tokens);
}

/** A value once it has stopped changing for `ms`: what a screen reader is told, so it is not told on every key. */
function useSettled<T>(value: T, ms: number): T {
  const [settled, setSettled] = useState(value);
  useEffect(() => {
    const t = window.setTimeout(() => setSettled(value), ms);
    return () => window.clearTimeout(t);
  }, [value, ms]);
  return settled;
}

/** Quick jump across chapters, people, places, timeline events, pages and evidence. Opened with Ctrl/Cmd+K or "/". */
export default function SearchPalette({ onClose, initial = "" }: { onClose: () => void; initial?: string }) {
  const [q, setQ] = useState(initial);
  const [active, setActive] = useState(0);
  const dialogProps = useModalDialog(true, onClose);
  const navigate = useNavigate();
  const drawer = useEvidenceDrawer();
  // A finger and no keyboard: nothing in the palette names a key.
  const phone = useMediaQuery("(pointer: coarse) and (hover: none)");
  const listRef = useRef<HTMLDivElement | null>(null);
  const found = useMemo(() => search(q), [q]);
  const results = found.flat;
  const cur = Math.min(active, Math.max(0, results.length - 1));
  const searching = q.trim() !== "";
  // Said to a screen reader once typing pauses: how many results, or that there are none.
  // (The last row is the way on to the evidence locker, not a result.)
  const hits = searching ? results.length - 1 : results.length;
  const said = useSettled(!searching ? "" : hits === 0 ? `Nothing matches ${q.trim()}` : `${hits} ${hits === 1 ? "result" : "results"}${found.instead ? ` for ${found.instead}` : found.partial ? ", none with every word" : ""}`, 700);

  const choose = (e: Entry) => {
    onClose();
    if (e.kind === "evidence") drawer.open(e.id);
    else if (e.to) void navigate(e.to);
  };
  const move = (to: number) => {
    const n = results.length;
    if (!n) return;
    const next = (to + n) % n;
    setActive(next);
    listRef.current?.querySelector(`[data-i="${next}"]`)?.scrollIntoView({ block: "nearest" });
  };
  // Home and End are left to the field: they move the caret in what has been typed.
  const onKey = (ev: KeyboardEvent) => {
    if (ev.key === "ArrowDown") { ev.preventDefault(); move(cur + 1); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); move(cur - 1); }
    else if (ev.key === "Enter" && results[cur]) { ev.preventDefault(); choose(results[cur]); }
  };

  return (
    <dialog className="palette" aria-label="Search the archive" {...dialogProps}>
      <div className="palette__field">
        <Icon icon={Search} />
        <input
          type="text"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls={results.length > 0 ? "palette-list" : undefined}
          aria-activedescendant={results[cur] ? `palette-opt-${cur}` : undefined}
          aria-label="Search chapters, people, places and evidence"
          placeholder={phone ? "Search the archive" : "Search chapters, people, places, evidence…"}
          value={q}
          onChange={(e) => { setQ(e.target.value); setActive(0); }}
          onKeyDown={onKey}
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
        {/* A phone has no Escape key to name. */}
        <button type="button" className="palette__esc" onClick={onClose} aria-label="Close search">{phone ? <Icon icon={X} size="1.25em" /> : <kbd>Esc</kbd>}</button>
      </div>
      <p className="sr-only" role="status">{said}</p>
      {found.instead && hits > 0 && <p className="palette__instead">Nothing matches “{q.trim()}”. Showing results for <strong>{found.instead}</strong>.</p>}
      {found.partial && !found.instead && hits > 0 && <p className="palette__instead">Nothing has every word of “{q.trim()}”. These have some of them.</p>}
      {searching && hits === 0 && (
        <p className="palette__instead">
          Nothing matches “{q.trim()}”. Try a name, a game, or a word from a quote. The archive uses only names that the games print or
          speak. <a href="#/method#names" onClick={(ev) => { ev.preventDefault(); onClose(); void navigate("/method#names"); }}>How the archive names people</a>
        </p>
      )}
      {results.length === 0
        ? <p className="palette__empty">Nothing to show.</p>
        : (
          // The list scrolls under the pointer and follows the arrow keys; it is not a stop of its own.
          <div className="palette__list" id="palette-list" role="listbox" aria-label="Results" tabIndex={-1} ref={listRef}>
            {found.groups.map((g) => (
              <div key={g.key} role="group" aria-labelledby={`palette-head-${g.key}`}>
                <p className="palette__head label" id={`palette-head-${g.key}`} role="presentation">{g.head}</p>
                {g.items.map((e, at) => {
                  const i = g.from + at;
                  return (
                    <div
                      key={`${e.kind}:${e.id}`}
                      id={`palette-opt-${i}`}
                      data-i={i}
                      role="option"
                      aria-selected={i === cur}
                      className={`palette__opt${i === cur ? " is-active" : ""}`}
                      onPointerMove={() => { if (i !== cur) setActive(i); }}
                      onClick={() => choose(e)}
                    >
                      <Icon icon={e.icon} className="palette__icon" />
                      <span className="palette__text">
                        <span className="palette__title">{smartQuotes(e.title)}</span>
                        {/[\p{L}\p{N}]/u.test(e.sub) && <span className="palette__sub">{smartQuotes(subOf(e, found.tokens))}</span>}
                      </span>
                      {i === cur && !phone && <Icon icon={CornerDownLeft} className="palette__enter" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      <p className="palette__foot">
        <span><kbd>↑</kbd> <kbd>↓</kbd> to move</span>
        <span><kbd>Enter</kbd> to open</span>
        <span>Evidence opens over the page you are on</span>
      </p>
    </dialog>
  );
}
