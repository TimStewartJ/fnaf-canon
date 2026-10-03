import { useMemo, useRef, useState, type KeyboardEvent } from "react";
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
interface Entry { kind: Kind; id: string; title: string; sub: string; hay: string; to?: string; icon: LucideIcon }

const KIND_HEAD: Record<Kind, string> = { page: "Pages", chapter: "Theory chapters", person: "People", place: "Places", event: "Timeline", evidence: "Evidence records" };
const KIND_ORDER: Kind[] = ["chapter", "person", "place", "page", "event", "evidence"];
const LIMIT: Record<Kind, number> = { page: 4, chapter: 6, person: 6, place: 4, event: 4, evidence: 10 };

let INDEX: Entry[] | null = null;
function buildIndex(): Entry[] {
  const partTitle = new Map(theoryParts.map((p) => [p.id, p.title]));
  const out: Entry[] = [{ kind: "page", id: "/", title: "Home", sub: "The archive’s front page", hay: "home overview start", to: "/", icon: House }];
  for (const n of NAV_FLAT) out.push({ kind: "page", id: n.to, title: n.label, sub: n.desc, hay: `${n.label} ${n.desc}`.toLowerCase(), to: n.to, icon: n.icon });
  // Reading order and its numbers, not the order of the theory array (see chapterOrder.ts).
  readingOrder.forEach((s) => out.push({
    kind: "chapter", id: s.id, title: s.title, sub: `Chapter ${chapterNumber(s.id)}${s.part && partTitle.get(s.part) ? ` · ${partTitle.get(s.part)}` : ""}`,
    hay: `${s.title} ${s.question ?? ""} ${s.answer ? plainText(s.answer) : ""} ${s.id}`.toLowerCase(), to: chapterPath(s.id), icon: SECTION_ICON.theory,
  }));
  for (const p of people) out.push({ kind: "person", id: p.id, title: p.name, sub: p.aliases.slice(0, 3).join(" · ") || plainText(p.status).slice(0, 80), hay: `${p.name} ${p.aliases.join(" ")} ${p.id}`.toLowerCase(), to: personPath(p.id), icon: SECTION_ICON.people });
  for (const p of places) out.push({ kind: "place", id: p.id, title: p.name, sub: p.years, hay: `${p.name} ${p.id}`.toLowerCase(), to: placePath(p.id), icon: SECTION_ICON.places });
  for (const t of timeline) out.push({ kind: "event", id: t.id, title: t.title, sub: t.yearLabel, hay: `${t.title} ${t.yearLabel}`.toLowerCase(), to: timelineEventPath(t.id), icon: SECTION_ICON.timeline });
  for (const e of evidence) out.push({
    kind: "evidence", id: e.id, title: e.title, sub: `${gameMeta(e.game).short} · ${e.location}`,
    hay: `${e.title} ${e.claim} ${e.quote ?? ""} ${e.location} ${e.id} ${(e.tags ?? []).join(" ")}`.toLowerCase(), icon: FileText,
  });
  return out;
}

function search(q: string): Entry[] {
  INDEX ??= buildIndex();
  const query = q.trim().toLowerCase();
  if (!query) return INDEX.filter((e) => e.kind === "page");
  const tokens = query.split(/\s+/);
  const scored: { e: Entry; score: number }[] = [];
  for (const e of INDEX) {
    if (!tokens.every((t) => e.hay.includes(t))) continue;
    const title = e.title.toLowerCase();
    let score = title === query ? 200 : title.startsWith(query) ? 120 : title.includes(query) ? 80 : 0;
    for (const t of tokens) score += new RegExp(`(^|[^a-z0-9])${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(title) ? 12 : title.includes(t) ? 6 : 0;
    scored.push({ e, score });
  }
  scored.sort((a, b) => b.score - a.score || a.e.title.length - b.e.title.length);
  const count = new Map<Kind, number>();
  const picked = scored.filter(({ e }) => { const n = count.get(e.kind) ?? 0; if (n >= LIMIT[e.kind]) return false; count.set(e.kind, n + 1); return true; }).map((s) => s.e);
  return KIND_ORDER.flatMap((k) => picked.filter((e) => e.kind === k));
}

/** Quick jump across chapters, people, places, timeline events, pages and evidence. Opened with Ctrl/Cmd+K or "/". */
export default function SearchPalette({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const dialogProps = useModalDialog(true, onClose);
  const navigate = useNavigate();
  const drawer = useEvidenceDrawer();
  const listRef = useRef<HTMLDivElement | null>(null);
  const results = useMemo(() => search(q), [q]);
  const cur = Math.min(active, Math.max(0, results.length - 1));

  const choose = (e: Entry) => {
    onClose();
    if (e.kind === "evidence") drawer.open(e.id);
    else if (e.to) navigate(e.to);
  };
  const move = (to: number) => {
    const n = results.length;
    if (!n) return;
    const next = (to + n) % n;
    setActive(next);
    listRef.current?.querySelector(`[data-i="${next}"]`)?.scrollIntoView({ block: "nearest" });
  };
  const onKey = (ev: KeyboardEvent) => {
    if (ev.key === "ArrowDown") { ev.preventDefault(); move(cur + 1); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); move(cur - 1); }
    else if (ev.key === "Home") { ev.preventDefault(); move(0); }
    else if (ev.key === "End") { ev.preventDefault(); move(results.length - 1); }
    else if (ev.key === "Enter" && results[cur]) { ev.preventDefault(); choose(results[cur]); }
  };

  const searching = q.trim() !== "";
  return (
    <dialog className="palette" aria-label="Search the archive" {...dialogProps}>
      <div className="palette__field">
        <Icon icon={Search} />
        <input
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
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
      <div className="palette__list" id="palette-list" role="listbox" aria-label="Results" ref={listRef}>
        {results.length === 0 && <p className="palette__empty">Nothing matches “{q}”. Try a name, a game, or a word from a quote.</p>}
        {results.map((e, i) => {
          const head = i === 0 || results[i - 1].kind !== e.kind ? (searching ? KIND_HEAD[e.kind] : "Jump to") : null;
          return (
            <div key={`${e.kind}:${e.id}`} role="presentation">
              {head && <p className="palette__head label" role="presentation">{head}</p>}
              <div
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
            </div>
          );
        })}
      </div>
      <p className="palette__foot">
        <span><kbd>↑</kbd> <kbd>↓</kbd> to move</span>
        <span><kbd>Enter</kbd> to open</span>
        <span>Evidence opens over the page you are on</span>
      </p>
    </dialog>
  );
}
