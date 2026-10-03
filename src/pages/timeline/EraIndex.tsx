import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, List, X } from "lucide-react";
import { Icon, IconButton, isPlainClick, smartQuotes, useModalDialog } from "../../components/ui";
import { useCurrentEra } from "./hooks";
import { plural, within } from "./model";

/** One era as the index shows it. `count` is the number of entries on screen in that era; `on` says it has a section to go to. */
export interface EraEntry { id: string; n: number; name: string; range: string; count: number; on: boolean; hue: string }

const pad2 = (n: number) => String(n).padStart(2, "0");
const hueStyle = (hue: string) => ({ "--hue": hue }) as CSSProperties;

/**
 * The list of eras, used by the rail and by the sheet. Each era is a real link (`?era=id`), so it can
 * be copied or opened in a new tab; a plain click jumps without leaving the page. An era with nothing
 * on screen under the current filters is listed but is not a link.
 */
function EraLinks({ entries, current, sp, onGo }: { entries: EraEntry[]; current: string; sp: URLSearchParams; onGo: (id: string) => void }) {
  return (
    <ol className="tl-eras">
      {entries.map((e) => {
        const to = new URLSearchParams(sp);
        to.set("era", e.id);
        const body = (
          <>
            <span className="tl-eralink__n">{pad2(e.n)}</span>
            <span className="tl-eralink__name">{smartQuotes(e.name)}</span>
            <span className="tl-eralink__count" title={plural(e.count, "entry", "entries")}>{e.count}<span className="sr-only"> {e.count === 1 ? "entry" : "entries"}</span></span>
            {e.range && <span className="tl-eralink__range">{smartQuotes(e.range)}</span>}
          </>
        );
        return (
          <li key={e.id} style={hueStyle(e.hue)}>
            {e.on ? (
              <Link
                to={within(to)}
                className={`tl-eralink${e.id === current ? " is-current" : ""}`}
                aria-current={e.id === current ? "location" : undefined}
                onClick={(ev) => { if (!isPlainClick(ev)) return; ev.preventDefault(); onGo(e.id); }}
              >
                {body}
              </Link>
            ) : (
              <span className="tl-eralink is-empty">{body}</span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

const shown = (entries: EraEntry[]) => entries.filter((e) => e.on).map((e) => e.id);

/** The era index beside the line on a wide screen. It stays in view and marks the era being read. */
export function EraRail({ entries, sp, onGo }: { entries: EraEntry[]; sp: URLSearchParams; onGo: (id: string) => void }) {
  const current = useCurrentEra(shown(entries));
  // On a short screen the rail scrolls by itself: keep the era being read in sight, without touching the page's scroll.
  const rail = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = rail.current, cur = el?.querySelector<HTMLElement>(".tl-eralink.is-current");
    if (!el || !cur || el.scrollHeight <= el.clientHeight) return;
    const box = el.getBoundingClientRect(), r = cur.getBoundingClientRect();
    if (cur === el.querySelector(".tl-eralink")) el.scrollTop = 0; // the first era: back to the very top, heading included
    else if (r.top < box.top) el.scrollTop -= box.top - r.top + 8;
    else if (r.bottom > box.bottom) el.scrollTop += r.bottom - box.bottom + 8;
  }, [current]);
  return (
    <nav className="tl-rail" aria-label="Eras" ref={rail}>
      <p className="label">Eras</p>
      <EraLinks entries={entries} current={current} sp={sp} onGo={onGo} />
    </nav>
  );
}

function EraSheet({ entries, current, sp, onPick, onClose }: { entries: EraEntry[]; current: string; sp: URLSearchParams; onPick: (id: string) => void; onClose: () => void }) {
  const dialogProps = useModalDialog(true, onClose);
  return (
    <dialog className="tl-sheet tl-sheet--side" aria-label="Eras" {...dialogProps}>
      <header className="tl-sheet__bar">
        <span className="tl-sheet__title">Eras</span>
        <IconButton icon={X} label="Close" onClick={onClose} autoFocus />
      </header>
      <div className="tl-sheet__body">
        <EraLinks entries={entries} current={current} sp={sp} onGo={onPick} />
      </div>
    </dialog>
  );
}

/**
 * The era index where there is no room for the rail: a bar that sticks to the top of the screen,
 * names the era being read and how far along it is, steps to the era before or after, and opens the
 * full list in a sheet.
 */
export function EraBar({ entries, sp, onGo }: { entries: EraEntry[]; sp: URLSearchParams; onGo: (id: string) => void }) {
  const ids = shown(entries);
  const current = useCurrentEra(ids);
  const [sheet, setSheet] = useState(false);
  // The sheet returns focus to this bar as it closes; the jump has to come after that.
  const picked = useRef<string | null>(null);
  useEffect(() => {
    if (sheet || !picked.current) return;
    const id = picked.current;
    picked.current = null;
    onGo(id);
  }, [sheet, onGo]);

  const here = entries.find((e) => e.id === current);
  if (!here) return null;
  const at = ids.indexOf(current);
  const prev = entries.find((e) => e.id === ids[at - 1]);
  const next = entries.find((e) => e.id === ids[at + 1]);
  return (
    <div className="tl-erabar" style={hueStyle(here.hue)}>
      <button type="button" className="tl-erabar__btn" onClick={() => setSheet(true)} aria-haspopup="dialog" aria-label={`Eras. Reading era ${here.n} of ${entries.length}: ${here.name}`}>
        <Icon icon={List} />
        <span className="tl-erabar__n">{pad2(here.n)}</span>
        <span className="tl-erabar__name">{smartQuotes(here.name)}</span>
        <span className="tl-erabar__of">{here.n} of {entries.length}</span>
      </button>
      <span className="tl-erabar__pager">
        <IconButton icon={ChevronUp} label={prev ? `Previous era: ${prev.name}` : "Previous era"} disabled={!prev} onClick={() => prev && onGo(prev.id)} />
        <IconButton icon={ChevronDown} label={next ? `Next era: ${next.name}` : "Next era"} disabled={!next} onClick={() => next && onGo(next.id)} />
      </span>
      <span className="tl-erabar__ticks" aria-hidden>
        {entries.map((e) => <span key={e.id} className={`tl-erabar__tick${e.id === current ? " is-current" : ""}${e.on ? "" : " is-empty"}`} style={{ flexGrow: Math.max(e.count, 1) }} />)}
      </span>
      {sheet && <EraSheet entries={entries} current={current} sp={sp} onPick={(id) => { picked.current = id; setSheet(false); }} onClose={() => setSheet(false)} />}
    </div>
  );
}
