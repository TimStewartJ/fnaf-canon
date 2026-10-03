import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CornerDownLeft, FileText, House, Search, type LucideIcon } from "lucide-react";
import { evidence, people, places, theoryParts, timeline } from "../../data/store";
import { gameMeta } from "../../data/gameMeta";
import { useEvidenceDrawer } from "../evidenceDrawer";
import { useModalDialog } from "../hooks";
import { SECTION_ICON } from "../icons";
import { Icon } from "../Icon";
import { chapterPath, personPath, placePath, timelineEventPath } from "../links";
import { plainText } from "../richTextPlain";
import { smartQuotes } from "../typography";
import { chapterNumber, readingOrder } from "../chapterOrder";
import { NAV_FLAT } from "./nav";

type Kind = "page" | "chapter" | "person" | "place" | "event" | "evidence";
interface Entry {
  kind: Kind; id: string; title: string; sub: string; to?: string; icon: LucideIcon;
  /** Everything the entry can be found by, folded (see `fold`). */
  hay: string;
  /** Its title and other names, folded: a query equal to one of these is an exact hit. */
  names: string[];
  /** Breaks ties between equal hits: how much the archive has on it. */
  weight: number;
}

const KIND_HEAD: Record<Kind, string> = { page: "Pages", chapter: "Theory chapters", person: "People", place: "Places", event: "Timeline", evidence: "Evidence records" };
const KIND_ORDER: Kind[] = ["chapter", "person", "place", "page", "event", "evidence"];
const LIMIT: Record<Kind, number> = { page: 4, chapter: 6, person: 6, place: 4, event: 4, evidence: 10 };
/** A query that is something's own name puts it first, above the groups. */
const BEST = 3;
const EXACT = 180;

/**
 * Text as the search compares it: lower case, no accents, and no apostrophes or quotation marks
 * of either kind, so "Fredbear’s", "Fredbear's" and "fredbears" are one word, and "’87" is "87".
 * The site prints curly quotes and phones type them; the data is written with straight ones.
 */
const fold = (s: string): string => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[\u2018\u2019\u02BC'`"\u201C\u201D]/g, "");
const bare = (s: string): string => s.replace(/^(?:the|a|an) /, "");
const names = (...all: string[]): string[] => [...new Set(all.map(fold).flatMap((n) => [n, bare(n)]))];

let INDEX: Entry[] | null = null;
/** The words people and places are called by, for putting a mistyped query right. */
let WORDS: Map<string, number> | null = null;
function buildIndex(): Entry[] {
  const partTitle = new Map(theoryParts.map((p) => [p.id, p.title]));
  const filed = new Map<string, number>();
  for (const e of evidence) for (const id of [...(e.people ?? []), ...(e.places ?? [])]) filed.set(id, (filed.get(id) ?? 0) + 1);
  const out: Entry[] = [{ kind: "page", id: "/", title: "Home", sub: "The archive’s front page", hay: "home overview start", names: ["home"], weight: 0, to: "/", icon: House }];
  for (const n of NAV_FLAT) out.push({ kind: "page", id: n.to, title: n.label, sub: n.desc, hay: fold(`${n.label} ${n.desc}`), names: names(n.label), weight: 0, to: n.to, icon: n.icon });
  // Reading order and its numbers, not the order of the theory array (see chapterOrder.ts).
  readingOrder.forEach((s) => out.push({
    kind: "chapter", id: s.id, title: s.title, sub: `Chapter ${chapterNumber(s.id)}${s.part && partTitle.get(s.part) ? ` · ${partTitle.get(s.part)}` : ""}`,
    hay: fold(`${s.title} ${s.question ?? ""} ${s.answer ? plainText(s.answer) : ""} ${s.id}`), names: names(s.title), weight: 0, to: chapterPath(s.id), icon: SECTION_ICON.theory,
  }));
  for (const p of people) out.push({ kind: "person", id: p.id, title: p.name, sub: p.aliases.slice(0, 3).join(" · ") || plainText(p.status).slice(0, 80), hay: fold(`${p.name} ${p.aliases.join(" ")} ${p.id}`), names: names(p.name, ...p.aliases), weight: filed.get(p.id) ?? 0, to: personPath(p.id), icon: SECTION_ICON.people });
  for (const p of places) out.push({ kind: "place", id: p.id, title: p.name, sub: p.years, hay: fold(`${p.name} ${p.id}`), names: names(p.name), weight: filed.get(p.id) ?? 0, to: placePath(p.id), icon: SECTION_ICON.places });
  for (const t of timeline) out.push({ kind: "event", id: t.id, title: t.title, sub: t.yearLabel, hay: fold(`${t.title} ${t.yearLabel}`), names: names(t.title), weight: 0, to: timelineEventPath(t.id), icon: SECTION_ICON.timeline });
  for (const e of evidence) out.push({
    kind: "evidence", id: e.id, title: e.title, sub: `${gameMeta(e.game).short} · ${e.location}`,
    hay: fold(`${e.title} ${e.claim} ${e.quote ?? ""} ${e.location} ${e.id} ${(e.tags ?? []).join(" ")}`), names: [], weight: 0, icon: FileText,
  });
  WORDS = new Map();
  for (const e of out) if (e.kind !== "evidence") for (const n of e.names) for (const w of n.split(/[^a-z0-9]+/)) if (w.length >= 4) WORDS.set(w, (WORDS.get(w) ?? 0) + 1 + e.weight);
  return out;
}

/** Words that carry no meaning in a question typed whole ("who is the purple guy"). */
const STOP = new Set(["a", "an", "and", "are", "did", "do", "does", "how", "in", "is", "of", "on", "the", "to", "was", "were", "what", "when", "where", "which", "who", "whom", "whose", "why"]);

const escapeRe = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/**
 * Everything that has all of `tokens`, best first. `query` is what was typed, folded. An entry
 * whose own name is the query (as typed, without a leading article, or without its filler words)
 * is an exact hit; one that holds the query word for word (a line of a quote) comes next.
 */
function match(index: Entry[], tokens: string[], query: string): { e: Entry; score: number }[] {
  const asked = [...new Set([query, bare(query), tokens.join(" ")])];
  const scored: { e: Entry; score: number }[] = [];
  for (const e of index) {
    if (!tokens.every((t) => e.hay.includes(t))) continue;
    const title = fold(e.title);
    let score = asked.includes(title) || asked.includes(bare(title)) ? 200 : asked.some((q) => e.names.includes(q)) ? EXACT : title.startsWith(query) ? 120 : title.includes(query) ? 80 : 0;
    if (query.includes(" ") && e.hay.includes(query)) score += 30;
    for (const t of tokens) score += new RegExp(`(^|[^a-z0-9])${escapeRe(t)}`).test(title) ? 12 : title.includes(t) ? 6 : 0;
    scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score || b.e.weight - a.e.weight || a.e.title.length - b.e.title.length);
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
interface Found { groups: Group[]; flat: Entry[]; /** Set when nothing matched as typed and these words were searched instead. */ instead: string | null }

function search(q: string): Found {
  INDEX ??= buildIndex();
  const query = fold(q.trim()).replace(/\s+/g, " ");
  const pack = (parts: { key: string; head: string; items: Entry[] }[], instead: string | null = null): Found => {
    const groups: Group[] = [];
    let from = 0;
    for (const p of parts) if (p.items.length) { groups.push({ ...p, from }); from += p.items.length; }
    return { groups, flat: groups.flatMap((g) => g.items), instead };
  };
  if (!query) return pack([{ key: "pages", head: "Jump to", items: INDEX.filter((e) => e.kind === "page") }]);
  // The words that carry the meaning: a question typed whole is searched by its subject, and
  // an entry that also holds the whole phrase ranks above the rest.
  const all = query.split(" ");
  const content = all.filter((t) => !STOP.has(t));
  const tokens = content.length ? content : all;
  let scored = match(INDEX, tokens, query);
  let instead: string | null = null;
  if (!scored.length) {
    // Nothing as typed: a slip of the keys, perhaps. Try the nearest names.
    const near = tokens.map((t) => (INDEX!.some((e) => e.hay.includes(t)) ? t : nearest(t) ?? t));
    if (near.join(" ") !== tokens.join(" ")) {
      const again = match(INDEX, near, near.join(" "));
      if (again.length) { scored = again; instead = near.join(" "); }
    }
  }
  const best = scored.filter((s) => s.score >= EXACT && s.e.kind !== "evidence").slice(0, BEST).map((s) => s.e);
  const count = new Map<Kind, number>();
  const picked = scored.filter(({ e }) => {
    if (best.includes(e)) return false;
    const n = count.get(e.kind) ?? 0;
    if (n >= LIMIT[e.kind]) return false;
    count.set(e.kind, n + 1);
    return true;
  }).map((s) => s.e);
  return pack([{ key: "best", head: "Best match", items: best }, ...KIND_ORDER.map((k) => ({ key: k, head: KIND_HEAD[k], items: picked.filter((e) => e.kind === k) }))], instead);
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
export default function SearchPalette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const dialogProps = useModalDialog(true, onClose);
  const navigate = useNavigate();
  const drawer = useEvidenceDrawer();
  const listRef = useRef<HTMLDivElement | null>(null);
  const found = useMemo(() => search(q), [q]);
  const results = found.flat;
  const cur = Math.min(active, Math.max(0, results.length - 1));
  const searching = q.trim() !== "";
  // Said to a screen reader once typing pauses: how many results, or that there are none.
  const said = useSettled(!searching ? "" : results.length === 0 ? `Nothing matches ${q.trim()}` : `${results.length} ${results.length === 1 ? "result" : "results"}${found.instead ? ` for ${found.instead}` : ""}`, 700);

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
          placeholder="Search chapters, people, places, evidence…"
          value={q}
          onChange={(e) => { setQ(e.target.value); setActive(0); }}
          onKeyDown={onKey}
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
        <button type="button" className="palette__esc" onClick={onClose} aria-label="Close search"><kbd>Esc</kbd></button>
      </div>
      <p className="sr-only" role="status">{said}</p>
      {found.instead && results.length > 0 && <p className="palette__instead">Nothing matches “{q.trim()}”. Showing results for <strong>{found.instead}</strong>.</p>}
      {results.length === 0
        ? <p className="palette__empty">Nothing matches “{q.trim()}”. Try a name, a game, or a word from a quote.</p>
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
                        {/[\p{L}\p{N}]/u.test(e.sub) && <span className="palette__sub">{smartQuotes(e.sub)}</span>}
                      </span>
                      {i === cur && <Icon icon={CornerDownLeft} className="palette__enter" />}
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
