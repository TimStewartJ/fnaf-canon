import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType, type Location } from "react-router-dom";
import { DRAWER_KEY, OVERLAY_KEY } from "../address";
import { findFocus, markFocus, type FocusMark } from "./focusMark";
import { settleHeader } from "./headerReveal";
import { stepBegan } from "./stepClock";

const STORE_KEY = "fca:scroll";
const FOCUS_KEY = "fca:focus";
/** What a reader does to move the page themselves. Any of these ends a landing at once. */
const INPUTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
/** After a landing, how long the page must keep its shape before the landing is final. */
const QUIET_MS = 1500;
/** How long, at least, the page is held still to end a glide (see land). */
const HOLD_MS = 120;
/** How many frames the browser must draw of the page held still before it is let go. */
const HOLD_FRAMES = 2;

/** When the page last moved, and when a finger last left the screen: together they say whether it is still gliding from a flick. */
let lastScroll = 0;
let lastTouchEnd = 0;
/**
 * Whether the page was gliding from a flick at the time `at` (now, unless given). For a step
 * through the history, ask about the moment the step began (stepClock.ts): while the page
 * stepped to is being drawn no scroll event is delivered, so by the time it is on screen the
 * last one heard may be old, on a slow phone, though the page glides on.
 */
const gliding = (at = performance.now()): boolean => at >= lastTouchEnd && at - lastTouchEnd < 3000 && at - lastScroll < 200;
/**
 * When the browser last stepped to another entry (Back, Forward, a typed address), as this
 * component's own listener hears of it; 0 once the router has drawn a change of address. For a
 * second after a step, where the page stands is not filed: what is on screen may still be the
 * page being left, or a short stand-in for a page still being fetched, and neither position
 * belongs to the entry arrived at. (Browsers differ on whether this listener or the router's
 * hears of a step first; the second covers both orders.)
 */
let stepped = 0;

/**
 * The key a scroll position is stored under. Entries the router did not create (the first page,
 * an address typed into the bar) all carry the key "default", so those are told apart by address.
 */
const entryKey = (l: Location) => (l.key === "default" ? `default:#${l.pathname}${l.search}${l.hash}` : l.key);
/** The same key for the entry the browser is on right now, which the router may not have drawn yet. */
function liveKey(): string {
  const key = (window.history.state as { key?: string } | null)?.key;
  return key && key !== "default" ? key : `default:${window.location.hash || "#/"}`;
}

function loadPositions(): Map<string, number> {
  try { return new Map(JSON.parse(window.sessionStorage.getItem(STORE_KEY) ?? "[]") as [string, number][]); }
  catch { return new Map(); }
}

function loadMarks(): Map<string, FocusMark> {
  try { return new Map(JSON.parse(window.sessionStorage.getItem(FOCUS_KEY) ?? "[]") as [string, FocusMark][]); }
  catch { return new Map(); }
}

/** True once the routed page is on screen (not the "Loading" placeholder of a page still being fetched). */
const pageReady = (): boolean => !document.querySelector("[data-route-loading]") && (document.getElementById("main")?.childElementCount ?? 0) > 0;

/**
 * Takes the page to a place and keeps it there while the page is still taking shape.
 * `aim` moves the page and returns true, or returns false while its target is not there yet.
 *
 * It waits for the target for as long as it takes: a page fetched over a slow connection arrives
 * when it arrives, and the wait is an observer, not a timer that gives up. Once there, it puts the
 * page back whenever the layout shifts (a font, an image, a section drawn late), until the layout
 * has been still for a moment and the fonts are in (text set in a stand-in font is a different
 * height, and a place measured in it is some other place). It stops for good the moment the
 * reader moves the page themselves, or anything else does. Returns a function that stops it.
 *
 * While it holds the page, the browser's own scroll anchoring is switched off. Anchoring keeps
 * whatever is on screen where it is when the page above it changes height; here that would hold
 * the page on what a half-drawn layout had at the place, and move the page away from the place.
 *
 * A page still gliding from a flick of the finger (the reader flicked, then pressed Back) would
 * glide on from wherever it is put, or put itself back where it was gliding. So if it is gliding
 * when the landing begins (`glide`), it is first made unscrollable for a moment, which ends the
 * glide, and is placed when it is let go. The moment is counted in frames drawn as well as in
 * time: what does the gliding hears that the page cannot scroll only when a frame is drawn, and
 * a busy page may draw none for longer than HOLD_MS.
 */
function land(aim: () => boolean, then?: () => void, glide = gliding()): () => void {
  let stopped = false;
  let placed: number | null = null;
  let quiet: number | undefined;
  const main = document.getElementById("main");
  const resized = new ResizeObserver(() => apply());
  const grown = new MutationObserver(() => apply());
  const root = document.documentElement;
  // While the page is held to end a glide: what ends the hold early.
  let hold: (() => void) | undefined;
  const release = () => { if (hold === undefined) return; hold(); hold = undefined; root.style.removeProperty("overflow"); };
  const stop = () => {
    if (stopped) return;
    stopped = true;
    resized.disconnect();
    grown.disconnect();
    window.clearTimeout(quiet);
    release();
    root.style.removeProperty("overflow-anchor");
    for (const ev of INPUTS) window.removeEventListener(ev, stop);
  };
  // Still for a moment, and no font on its way: the landing is final. (At most ten seconds of waiting for fonts.)
  const began = performance.now();
  const settled = () => {
    if (document.fonts?.status === "loading" && performance.now() - began < 10_000) quiet = window.setTimeout(settled, 300);
    else stop();
  };
  function apply() {
    // (Nothing is placed while a glide is being ended: a place given to a gliding page does not hold.)
    if (stopped || hold !== undefined) return;
    // The page is no longer where this put it: the reader (or the page itself) has moved on.
    if (placed !== null && Math.abs(window.scrollY - placed) > 2) { stop(); return; }
    if (!aim()) return;
    const first = placed === null;
    placed = window.scrollY;
    if (first) { grown.disconnect(); then?.(); }
    window.clearTimeout(quiet);
    quiet = window.setTimeout(settled, QUIET_MS);
  }
  root.style.setProperty("overflow-anchor", "none");
  if (glide) {
    root.style.setProperty("overflow", "hidden");
    const held = performance.now();
    const go = () => { release(); apply(); };
    let frames = 0;
    const frame = () => {
      frames++;
      if (frames >= HOLD_FRAMES && performance.now() - held >= HOLD_MS) go();
      else raf = requestAnimationFrame(frame);
    };
    let raf = requestAnimationFrame(frame);
    // A page that is not being drawn (a tab put in the background) has no frames: it is let go after a second.
    const late = window.setTimeout(go, 1000);
    hold = () => { cancelAnimationFrame(raf); window.clearTimeout(late); };
  }
  for (const ev of INPUTS) window.addEventListener(ev, stop, { passive: true });
  resized.observe(document.body);
  if (main) { resized.observe(main); grown.observe(main, { childList: true, subtree: true }); }
  void document.fonts?.ready.then(apply);
  apply();
  return stop;
}

/** Moves keyboard focus to where the reader has been taken, as the browser does for an in-page link. */
function focusAt(el: HTMLElement): void {
  if (el.contains(document.activeElement) && document.activeElement !== el) return;
  if (!el.hasAttribute("tabindex") && el.tabIndex < 0) {
    el.setAttribute("tabindex", "-1");
    el.addEventListener("blur", () => el.removeAttribute("tabindex"), { once: true });
  }
  el.focus({ preventScroll: true });
}

/**
 * Scroll and focus behaviour for the whole site:
 *  - Back and Forward return to where the reader was on that page (per history entry, kept across
 *    reloads), and put keyboard focus back on the link or control they left from, without moving the page;
 *  - a new navigation to a different path starts at the top and moves focus to <main>, or goes to
 *    the element named by an in-page anchor (/#/theory#storyline) and moves focus there. The
 *    anchor is honoured however long the page takes to arrive, and the element's own
 *    `scroll-margin-top` counts, with the document's `scroll-padding-top`;
 *  - changes that stay on the same path (filters, the evidence drawer) never move the page, except
 *    a link to an anchor on it;
 *  - the reader always wins: once they scroll, tap or press a key, nothing here moves the page.
 */
export function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Map<string, number> | null>(null);
  if (positions.current === null) positions.current = loadPositions();
  // What had focus on each entry, so Back returns the keyboard to it as well as the page.
  const marks = useRef<Map<string, FocusMark> | null>(null);
  if (marks.current === null) marks.current = loadMarks();
  const prev = useRef<{ pathname: string; search: string; hash: string; key: string } | null>(null);
  const cancel = useRef<(() => void) | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    // Filed under the entry the browser is on, not the one the router has drawn: a page that
    // answers a change of address at once may scroll before the router has caught up.
    const onScroll = () => {
      lastScroll = performance.now();
      if (stepped && lastScroll - stepped < 1000) return;
      positions.current!.set(liveKey(), window.scrollY);
    };
    const onStep = () => { stepped = performance.now(); };
    const onTouchEnd = () => { lastTouchEnd = performance.now(); };
    // Focus inside an overlay is not a place on the page: the mark stays on whatever opened it.
    const onFocus = (e: FocusEvent) => { const mark = markFocus(e.target as Element | null); if (mark) marks.current!.set(liveKey(), mark); };
    const persist = () => {
      try {
        window.sessionStorage.setItem(STORE_KEY, JSON.stringify([...positions.current!].slice(-80)));
        window.sessionStorage.setItem(FOCUS_KEY, JSON.stringify([...marks.current!].slice(-80)));
      } catch { /* ignore */ }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("popstate", onStep, true);
    document.addEventListener("focusin", onFocus);
    window.addEventListener("pagehide", persist);
    // A phone drops a tab it has put in the background without another word; this is the last it says.
    const onHide = () => { if (document.visibilityState === "hidden") persist(); };
    document.addEventListener("visibilitychange", onHide);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("touchend", onTouchEnd); window.removeEventListener("popstate", onStep, true); document.removeEventListener("focusin", onFocus); window.removeEventListener("pagehide", persist); document.removeEventListener("visibilitychange", onHide); };
  }, []);

  useLayoutEffect(() => {
    // Whether the page was gliding when this change of address began (see gliding): for a step
    // through the history, when the step began. (A step from long ago says nothing about now.)
    const now = performance.now();
    const began = stepBegan();
    const glide = gliding(navType === "POP" && began && now - began < 2000 ? began : now);
    stepped = 0;
    const before = prev.current;
    const key = entryKey(location);
    prev.current = { pathname: location.pathname, search: location.search, hash: location.hash, key };
    cancel.current?.();
    cancel.current = null;

    const toAnchor = (hash: string, focus: boolean) => {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* keep it as written */ }
      let target: HTMLElement | null = null;
      cancel.current = land(() => {
        const el = document.getElementById(id);
        if (!el) return false;
        // A target folded away inside a closed <details> is opened, as the browser does for a
        // fragment; so is a target that is itself a folded section (a link to "the sources").
        if (el instanceof HTMLDetailsElement && !el.open) el.open = true;
        if (!el.getClientRects().length) for (let d = el.closest("details:not([open])"); d; d = d.parentElement?.closest("details:not([open])") ?? null) (d as HTMLDetailsElement).open = true;
        settleHeader();
        el.scrollIntoView({ block: "start", behavior: "instant" });
        target = el;
        return true;
      }, () => { if (focus && target) focusAt(target); }, glide);
    };
    // The top of the page, for a page still gliding from a flick: held there until the glide has ended.
    const toTop = () => { cancel.current = land(() => { if (window.scrollY !== 0) window.scrollTo({ top: 0, behavior: "instant" }); return true; }, undefined, glide); };
    const restore = (y: number, mark?: FocusMark) => {
      cancel.current = land(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        // Not tall enough yet, and the page is still arriving: wait for it.
        if (max < y - 1 && !pageReady()) return false;
        if (Math.abs(window.scrollY - Math.min(y, max)) > 1) { settleHeader(); window.scrollTo({ top: y, behavior: "instant" }); }
        return true;
      }, () => {
        // The keyboard goes back to what the reader left from; the page stays where it was put.
        // Not while an overlay is open: focus belongs inside it.
        if (!mark || document.querySelector("dialog[open]")) return;
        const el = findFocus(mark);
        if (el && el !== document.activeElement) el.focus({ preventScroll: true });
      }, glide);
    };

    if (!before) {
      // First render: a reload restores its place; a deep link with an anchor goes to it.
      const saved = positions.current!.get(key);
      if (saved != null && saved > 0) restore(saved);
      else if (location.hash) toAnchor(location.hash, false);
      return;
    }
    if (navType === "POP") {
      // Back or Forward: return to where the reader was. An entry never seen before (a typed
      // address) is treated like a fresh arrival.
      const saved = positions.current!.get(key);
      if (saved != null) restore(saved, marks.current!.get(key));
      // An entry of this same page that the router made and this has not met: it was rewritten
      // in the same breath as the step back that reached it (an overlay closed, and what had been
      // set in it was written to the page's entry). The page is already where it belongs.
      else if (location.key !== "default" && before.pathname === location.pathname) positions.current!.set(key, window.scrollY);
      else if (location.hash) toAnchor(location.hash, false);
      else if (glide) toTop();
      else window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const samePath = before.pathname === location.pathname;
    if (samePath) {
      // Filters, the drawer, an overlay, anchors on the same page: remember where we are under the new history entry.
      // (Not under the one just left: a page that jumps on its own when it adds a step, as the
      // timeline does to an era, has already moved by now. What opens an overlay notes the place
      // itself before it adds its entry: see notePlace in address.ts.)
      positions.current!.set(key, window.scrollY);
      // A link to an anchor on this page, also when it is followed a second time. Not the drawer
      // (it repeats the address of the page under it), and not a change of view that keeps an old anchor.
      const state = location.state as Record<string, unknown> | null;
      const drawer = !!state?.[DRAWER_KEY] || !!state?.[OVERLAY_KEY];
      if (navType === "PUSH" && location.hash && !drawer && (location.hash !== before.hash || location.search === before.search)) toAnchor(location.hash, true);
      return;
    }
    if (navType === "REPLACE" && !location.hash) {
      positions.current!.set(key, window.scrollY);
      return;
    }
    // A new page: the top, with focus on <main>; then on to its anchor, if the link named one
    // (at once when it is there, otherwise when the page has arrived).
    positions.current!.set(key, 0);
    if (!glide) window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
    if (location.hash) toAnchor(location.hash, true);
    else if (glide) toTop();
  }, [location, navType]);

  return null;
}
