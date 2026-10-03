/** Hooks for the timeline page. No components here. */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * The page's state lives in the URL's search parameters. `update` edits them in one step and
 * keeps its identity, so rows that receive it do not re-render when another row opens.
 * Filters and open rows replace the current history entry (Back leaves the page, and coming back
 * restores the view); `push` is for a step the reader should be able to undo with Back.
 */
export function useUrlState(): [URLSearchParams, (edit: (next: URLSearchParams) => void, how?: { push?: boolean }) => void] {
  const [sp, setSp] = useSearchParams();
  const latest = useRef({ sp, setSp });
  useLayoutEffect(() => { latest.current = { sp, setSp }; });
  const update = useCallback((edit: (next: URLSearchParams) => void, how?: { push?: boolean }) => {
    const next = new URLSearchParams(latest.current.sp);
    edit(next);
    if (next.toString() === latest.current.sp.toString()) return;
    // Two edits in one tick must build on each other, not on the same stale parameters.
    latest.current = { ...latest.current, sp: next };
    latest.current.setSp(next, { replace: !how?.push });
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
