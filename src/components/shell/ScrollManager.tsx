import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType, type Location } from "react-router-dom";

const STORE_KEY = "fca:scroll";

/**
 * The key a scroll position is stored under. Entries the router did not create (the first page,
 * an address typed into the bar) all carry the key "default", so those are told apart by URL.
 */
const entryKey = (l: Location) => (l.key === "default" ? `default:${l.pathname}${l.search}${l.hash}` : l.key);

function loadPositions(): Map<string, number> {
  try { return new Map(JSON.parse(window.sessionStorage.getItem(STORE_KEY) ?? "[]") as [string, number][]); }
  catch { return new Map(); }
}

/**
 * Scroll and focus behaviour for the whole site:
 *  - Back and Forward return to where the reader was on that page (per history entry, kept across reloads);
 *  - a new navigation to a different path starts at the top, or at the element named by an in-page
 *    anchor (/#/theory#storyline), and moves focus to <main>;
 *  - changes that stay on the same path (filters, the evidence drawer) never move the page.
 */
export function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Map<string, number> | null>(null);
  if (positions.current === null) positions.current = loadPositions();
  const keyRef = useRef(entryKey(location));
  const prev = useRef<{ pathname: string; hash: string } | null>(null);
  const cancel = useRef<(() => void) | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const onScroll = () => { positions.current!.set(keyRef.current, window.scrollY); };
    const persist = () => {
      try { window.sessionStorage.setItem(STORE_KEY, JSON.stringify([...positions.current!].slice(-80))); } catch { /* ignore */ }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", persist);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("pagehide", persist); };
  }, []);

  useLayoutEffect(() => {
    const before = prev.current;
    prev.current = { pathname: location.pathname, hash: location.hash };
    const key = entryKey(location);
    keyRef.current = key;
    cancel.current?.();
    cancel.current = null;

    /** Re-applies a scroll target for a short while, so late layout (lazy pages, images) cannot undo it. Any user input stops it. */
    const settle = (apply: () => void, ms: number) => {
      let stopped = false;
      const t0 = performance.now();
      const stop = () => { stopped = true; for (const ev of INPUTS) window.removeEventListener(ev, stop); };
      const INPUTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
      for (const ev of INPUTS) window.addEventListener(ev, stop, { passive: true });
      const tick = () => {
        if (stopped) return;
        apply();
        if (performance.now() - t0 < ms) requestAnimationFrame(tick); else stop();
      };
      tick();
      cancel.current = stop;
    };
    const toAnchor = (hash: string) => {
      const id = decodeURIComponent(hash.slice(1));
      settle(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
        if (Math.abs(top - offset) > 2) window.scrollTo(0, window.scrollY + top - offset);
      }, 1200);
    };
    const restore = (y: number) => settle(() => { if (Math.abs(window.scrollY - y) > 1) window.scrollTo(0, y); }, 900);

    if (!before) {
      // First render: a reload restores its place; a deep link with an anchor goes to it.
      const saved = positions.current!.get(key);
      if (saved != null && saved > 0) restore(saved);
      else if (location.hash) toAnchor(location.hash);
      return;
    }
    if (navType === "POP") {
      // Back or Forward: return to where the reader was. An entry never seen before (a typed
      // address) is treated like a fresh arrival.
      const saved = positions.current!.get(key);
      if (saved != null) restore(saved);
      else if (location.hash) toAnchor(location.hash);
      else restore(0);
      return;
    }
    const samePath = before.pathname === location.pathname;
    if (samePath) {
      // Filters, drawer, anchors on the same page: remember where we are under the new history entry.
      positions.current!.set(key, window.scrollY);
      if (navType === "PUSH" && location.hash && location.hash !== before.hash) toAnchor(location.hash);
      return;
    }
    if (navType === "REPLACE" && !location.hash) {
      positions.current!.set(key, window.scrollY);
      return;
    }
    positions.current!.set(key, 0);
    if (location.hash) toAnchor(location.hash);
    else window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [location, navType]);

  return null;
}
