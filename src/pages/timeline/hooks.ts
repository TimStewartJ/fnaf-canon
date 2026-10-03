/** Hooks for the timeline page. No components here. */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type UrlEdit = (edit: (next: URLSearchParams) => void, how?: { push?: boolean }) => boolean;

/**
 * The page's state lives in the URL's search parameters. `update` edits them in one step and
 * keeps its identity, so rows that receive it do not re-render when another row opens. It returns
 * false when the edit changed nothing (and so did not navigate).
 * Filters and open rows replace the current history entry (Back leaves the page, and coming back
 * restores the view); `push` is for a step the reader should be able to undo with Back.
 */
export function useUrlState(): [URLSearchParams, UrlEdit] {
  const [sp, setSp] = useSearchParams();
  // `pending` is what was last asked for and has not arrived yet: the router applies a navigation
  // a moment after it is requested, and a second edit in that moment must build on the first.
  const latest = useRef<{ sp: URLSearchParams; setSp: typeof setSp; pending: URLSearchParams | null }>({ sp, setSp, pending: null });
  useLayoutEffect(() => {
    const l = latest.current;
    if (l.sp.toString() !== sp.toString()) l.pending = null; // the address moved: whatever was pending has landed or been overtaken
    l.sp = sp;
    l.setSp = setSp;
  });
  const update = useCallback<UrlEdit>((edit, how) => {
    const l = latest.current;
    const from = l.pending ?? l.sp;
    const next = new URLSearchParams(from);
    edit(next);
    if (next.toString() === from.toString()) return false;
    l.pending = next;
    l.setSp(next, { replace: !how?.push });
    return true;
  }, []);
  return [sp, update];
}

/**
 * Which era the reader is in: the last era section whose top has passed a line a third of the way
 * down the viewport. `ids` are the eras that have a section on screen, in order.
 */
export function useCurrentEra(ids: readonly string[]): string {
  const [current, setCurrent] = useState("");
  const key = ids.join(" ");
  useEffect(() => {
    const list = key ? key.split(" ") : [];
    let raf = 0;
    const read = () => {
      raf = 0;
      const line = window.innerHeight * 0.34;
      let found = list[0] ?? "";
      for (const id of list) {
        const el = document.getElementById(`era-${id}`);
        if (el && el.getBoundingClientRect().top <= line) found = id;
      }
      // At the very end of the page the reader is in the last era, however short it is.
      if (list.length && window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) found = list[list.length - 1];
      setCurrent(found);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(read); };
    read();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [key]);
  return ids.includes(current) ? current : ids[0] ?? "";
}

const INPUTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const;

/**
 * Brings an element to the top of the reading area and keeps it there while late layout settles
 * (a font arriving, an image decoding). It gives way at once to the reader, and to anything else
 * that moves the page, the shell's scroll restoration for one: it only corrects a position that is
 * still the one it set. Returns a function that stops it.
 */
export function landOn(el: HTMLElement): () => void {
  let stopped = false;
  let mine = NaN;
  const timers: number[] = [];
  const stop = () => {
    stopped = true;
    for (const t of timers) window.clearTimeout(t);
    for (const ev of INPUTS) window.removeEventListener(ev, stop);
  };
  const apply = () => {
    if (stopped || !el.isConnected) return;
    if (!Number.isNaN(mine) && Math.abs(window.scrollY - mine) > 2) { stop(); return; }
    el.scrollIntoView({ block: "start", behavior: "instant" });
    mine = window.scrollY;
  };
  for (const ev of INPUTS) window.addEventListener(ev, stop, { passive: true });
  apply();
  for (const ms of [120, 400, 900]) timers.push(window.setTimeout(apply, ms));
  void document.fonts?.ready.then(apply);
  timers.push(window.setTimeout(stop, 1200));
  return stop;
}

/*
 * History entries on which this page has been shown, kept for as long as the tab lives (the page
 * itself is unmounted whenever the reader goes elsewhere). Being on one of them again means the
 * reader came back with Back or Forward, and the shell is returning them to where they were.
 */
const shownEntries = new Set<string>();
/** The router's key for the current history entry. Entries it did not create share one key, so those are told apart by address. */
const entryKey = (): string => {
  const key = (window.history.state as { key?: string } | null)?.key;
  return key && key !== "default" ? key : `default:${window.location.hash}`;
};

/**
 * Says whether the history entry now on screen is one the reader has come back to. Returns a
 * function to call from a layout effect after each render; it answers for the current entry.
 */
export function useReturnVisit(): () => boolean {
  const state = useRef({ entry: "", back: false });
  return useCallback(() => {
    const key = entryKey();
    const s = state.current;
    if (key !== s.entry) {
      s.back = shownEntries.has(key);
      s.entry = key;
      shownEntries.add(key);
    }
    return s.back;
  }, []);
}
