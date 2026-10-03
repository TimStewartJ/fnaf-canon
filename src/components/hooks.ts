/** Small shared hooks. No components here. */
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type MouseEvent, type RefObject, type SyntheticEvent, type TouchEvent } from "react";
import { SITE_NAME } from "./labels";
import { useOverlayEntry } from "./overlayEntry";
import { smartQuotes } from "./typography";

/**
 * Sets the document title for the current route: "Page · Fazbear Canon Archive", or with `kind`
 * "William Afton · Person · Fazbear Canon Archive". A name alone does not say what the page is:
 * a person, a chapter and a record can share one.
 */
export function usePageTitle(title?: string | null, kind?: string) {
  useEffect(() => {
    document.title = title ? [smartQuotes(title), kind, SITE_NAME].filter(Boolean).join(" · ") : SITE_NAME;
  }, [title, kind]);
}

/**
 * Subscribes to a CSS media query, e.g. useMediaQuery("(max-width: 640px)").
 *
 * Widths and heights are written in px, the way a design is discussed, and compared in em
 * (px / 16), exactly as the stylesheets' breakpoints are: a reader whose browser font is set
 * larger then gets the layout that fits their text, in script and in CSS alike.
 */
export function useMediaQuery(asWritten: string): boolean {
  const query = asWritten.replace(/(\d+(?:\.\d+)?)px/g, (_, px: string) => `${Number(px) / 16}em`);
  const subscribe = useCallback((cb: () => void) => {
    const mq = window.matchMedia(query);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, [query]);
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false);
}

/* ── localStorage-backed values, shared between components and tabs ─────────────── */
const listeners = new Set<() => void>();
const cache = new Map<string, { raw: string | null; value: unknown }>();
function readStored<T>(key: string, fallback: T): T {
  let raw: string | null = null;
  try { raw = window.localStorage.getItem(key); } catch { /* private mode */ }
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value as T;
  let value = fallback;
  if (raw != null) { try { value = JSON.parse(raw) as T; } catch { value = fallback; } }
  cache.set(key, { raw, value });
  return value;
}
function writeStored(key: string, value: unknown) {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
  for (const l of listeners) l();
}
if (typeof window !== "undefined") window.addEventListener("storage", () => { for (const l of listeners) l(); });

/** A value kept in localStorage under `key`. Returns [value, setValue]. `fallback` must be a stable reference. */
export function useStored<T>(key: string, fallback: T): [T, (next: T | ((prev: T) => T)) => void] {
  const subscribe = useCallback((cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; }, []);
  const value = useSyncExternalStore(subscribe, () => readStored(key, fallback), () => fallback);
  const set = useCallback((next: T | ((prev: T) => T)) => {
    const prev = readStored(key, fallback);
    writeStored(key, typeof next === "function" ? (next as (p: T) => T)(prev) : next);
  }, [key, fallback]);
  return [value, set];
}

/** Calls `handler` when a pointer goes down outside all of the given elements. */
export function useOutsidePointer(refs: RefObject<HTMLElement | null>[], handler: () => void, active = true) {
  const saved = useRef(handler);
  useEffect(() => { saved.current = handler; });
  useEffect(() => {
    if (!active) return;
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (refs.some((r) => r.current?.contains(t))) return;
      saved.current();
    };
    document.addEventListener("pointerdown", onDown, true);
    return () => document.removeEventListener("pointerdown", onDown, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
}

/** True once the element has been scrolled into view (and stays true). */
export function useSeen<T extends Element>(rootMargin = "0px"): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const obs = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) setSeen(true); }, { rootMargin });
    obs.observe(el);
    return () => obs.disconnect();
  }, [seen, rootMargin]);
  return [ref, seen];
}

/**
 * Drives a native modal <dialog>: shows it while `open`, locks page scroll, and calls `onClose` for
 * Escape, for a click on the backdrop, and for Back. The dialog is a step in the history while it
 * is open (see overlayEntry.ts): Back closes it and the page under it stays where it was, which
 * is how a sheet is dismissed on a phone. Pass `back: false` for a dialog whose own state already
 * lives in the history, as the evidence drawer's does. Focus returns to the element that had it.
 * Spread the result on the <dialog>.
 *
 * Dialogs stack: Escape and the backdrop act on the top one only. A dialog drawn inside another
 * (an image enlarged from the drawer) must not close its parent, so events that did not start on
 * this dialog are ignored.
 */
export function useModalDialog(open: boolean, onClose: () => void, { back = true }: { back?: boolean } = {}) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const saved = useRef(onClose);
  useEffect(() => { saved.current = onClose; });
  useOverlayEntry(open && back, onClose);
  // Layout effect: the dialog must be closed before a navigation moves focus to the new page.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !open) return;
    const opener = document.activeElement as HTMLElement | null;
    if (!el.open) el.showModal();
    document.documentElement.classList.add("has-modal");
    return () => {
      if (el.open) el.close();
      if (!document.querySelector("dialog[open]")) document.documentElement.classList.remove("has-modal");
      if (opener && opener.isConnected && typeof opener.focus === "function") opener.focus({ preventScroll: true });
    };
  }, [open]);
  return {
    ref,
    onCancel: (e: SyntheticEvent) => { if (e.target !== e.currentTarget) return; e.preventDefault(); saved.current(); },
    onClick: (e: MouseEvent<HTMLDialogElement>) => {
      if (e.target !== e.currentTarget) return;
      const r = e.currentTarget.getBoundingClientRect();
      const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) saved.current();
    },
  };
}

/* ── Touch: a flick across a viewer, a sheet pulled down by its bar ─────────────── */

/**
 * A flick of one finger across something that is not itself scrolling: left or right calls
 * `onSide` (with -1 or 1: the way the finger went), a pull downwards calls `onDown`. Nothing is
 * prevented, so pinching and the browser's own gestures work as before; a page the reader has
 * zoomed is left alone, since a drag there is how they move about it. Spread the result on the element.
 */
export function useFlick({ onSide, onDown }: { onSide?: (dir: -1 | 1) => void; onDown?: () => void }) {
  const from = useRef<{ x: number; y: number } | null>(null);
  return {
    onTouchStart: (e: TouchEvent) => {
      const zoomed = (window.visualViewport?.scale ?? 1) > 1.05;
      from.current = e.touches.length === 1 && !zoomed ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
    },
    onTouchEnd: (e: TouchEvent) => {
      const start = from.current;
      from.current = null;
      if (!start || e.touches.length > 0 || e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - start.x, dy = e.changedTouches[0].clientY - start.y;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) onSide?.(dx < 0 ? -1 : 1);
      else if (dy > 80 && dy > Math.abs(dx) * 1.5) onDown?.();
    },
  };
}

/**
 * Lets a bottom sheet be pulled down by its bar: the sheet (the <dialog> the bar is in) follows
 * the finger, and closes when let go more than a few fingers' widths down; otherwise it goes
 * back up. Spread the result on the bar and give the bar the class "sheet-bar" (components.css):
 * that draws the handle, and keeps the pull from also being read as a scroll. Only on a phone:
 * on a wider screen the same dialogs are panels at the side.
 */
export function useSheetPull(onClose: () => void) {
  // Every sheet in the site sits at the bottom of the window below 40em and at its side above.
  const enabled = useMediaQuery("(max-width: 640px)");
  const from = useRef<number | null>(null);
  const move = (bar: EventTarget, dy: number, live: boolean) => {
    const sheet = (bar as HTMLElement).closest<HTMLElement>("dialog");
    if (!sheet) return;
    sheet.style.transition = live ? "none" : "";
    sheet.style.transform = dy > 0 ? `translateY(${dy}px)` : "";
  };
  return {
    onTouchStart: (e: TouchEvent) => { from.current = enabled && e.touches.length === 1 ? e.touches[0].clientY : null; },
    onTouchMove: (e: TouchEvent) => { if (from.current !== null) move(e.currentTarget, e.touches[0].clientY - from.current, true); },
    onTouchEnd: (e: TouchEvent) => {
      const start = from.current;
      from.current = null;
      if (start === null) return;
      move(e.currentTarget, 0, false);
      if (e.changedTouches[0].clientY - start > 80) onClose();
    },
    onTouchCancel: (e: TouchEvent) => { from.current = null; move(e.currentTarget, 0, false); },
  };
}
