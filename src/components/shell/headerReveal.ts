/**
 * Phones and other narrow windows: the header slides out of the way as the reader moves down a
 * page, and comes back on the first move back up, so the menu, search and the reading settings
 * are one flick away from anywhere without the header taking a line of every screen.
 *
 * The state is written on <html> as data-header="away" (nothing when the header is showing), and
 * the stylesheet does the rest, only where the header is of this kind (shell.css). Whatever a page
 * pins to the top of the window carries the class "pin" and makes room for the header while it
 * shows. Nothing here changes a custom property on the root: that would restyle the whole page
 * on every change of direction, which is a dropped frame or three on a phone.
 *
 * Only the reader brings the header back. A move up made by the site itself (a landing on an
 * anchor, a return to a remembered place) leaves it away, so it never covers what was landed on;
 * such a landing calls settleHeader() first, so that the place is worked out for a window with
 * no header in it.
 */
import { useEffect, type RefObject } from "react";
import { useMediaQuery } from "../hooks";

const DOWN_PX = 8;  // this far down, and the header leaves
const UP_PX = 24;   // this far back up by the reader's own hand, and it returns
const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);

let listening = false;
let away = false;
let height = 0;
/** Until this moment (performance.now), scrolling is taken to be the reader's own. */
let readerUntil = 0;
let last = 0;
let turn = 0;
let dir = 0;

function set(next: boolean): void {
  if (next === away) return;
  away = next;
  if (next) document.documentElement.setAttribute("data-header", "away");
  else document.documentElement.removeAttribute("data-header");
}

/** Where the page is, without the stretch a phone allows past either end. */
function position(): number {
  const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  return Math.min(Math.max(window.scrollY, 0), max);
}

function onScroll(): void {
  const y = position();
  const now = performance.now();
  const readers = now < readerUntil;
  // A page still gliding after the finger has left it is still being moved by the reader.
  if (readers) readerUntil = Math.max(readerUntil, now + 160);
  if (y <= height) { set(false); dir = 0; turn = y; }
  else if (y > last) {
    if (dir <= 0) { dir = 1; turn = last; }
    if (y - turn > DOWN_PX) set(true);
  } else if (y < last) {
    if (dir >= 0) { dir = -1; turn = last; }
    if (readers && turn - y > UP_PX) set(false);
  }
  last = y;
}

/**
 * Call just before the site itself moves the page to a place (an anchor, a remembered position).
 * The header steps aside first, so the place is measured without it, and it stays aside unless
 * the page ends up at its very top. Does nothing where the header never leaves (a wide window).
 */
export function settleHeader(): void {
  if (!listening) return;
  readerUntil = 0;
  set(true);
  // If nothing then moves (the page was already there) no scroll event will say where it stands.
  requestAnimationFrame(() => { if (listening && position() <= height) set(false); });
}

/** Runs the header's coming and going for as long as the window is narrow. `header` is the header element. */
export function useHeaderReveal(header: RefObject<HTMLElement | null>): void {
  const narrow = useMediaQuery("(max-width: 899px)");
  useEffect(() => {
    if (!narrow) return;
    const el = header.current;
    const measure = () => { height = el?.offsetHeight ?? 0; };
    const mine = (ms: number) => { readerUntil = performance.now() + ms; };
    const wheel = () => mine(400);
    // A new touch stops a glide. Whether it is a tap or the start of a drag, the next touchmove
    // says: a tap moves nothing itself, and what the site does in answer to it is the site's move.
    let dragged = false;
    const touchStart = () => { dragged = false; readerUntil = 0; };
    const touchMove = () => { dragged = true; mine(400); };
    const touchEnd = () => { if (dragged) mine(400); };
    const key = (e: KeyboardEvent) => {
      if (!SCROLL_KEYS.has(e.key) || (e.target as HTMLElement | null)?.closest?.("input, textarea, select, [contenteditable], dialog")) return;
      readerUntil = performance.now() + 600;
    };
    // The scrollbar itself (a narrow window on a desktop): a press on it reports the root element.
    const down = (e: PointerEvent) => { if (e.target === document.documentElement) readerUntil = Infinity; };
    const up = () => { if (readerUntil === Infinity) readerUntil = performance.now() + 300; };
    // The keyboard reaching the header brings it back; focus landing under it sends it away.
    const focus = (e: FocusEvent) => {
      const at = e.target as HTMLElement | null;
      if (!at || !el) return;
      if (el.contains(at)) { set(false); return; }
      if (!away && position() > height && !at.closest("dialog") && at.getBoundingClientRect().top < height) set(true);
    };
    listening = true;
    measure();
    last = turn = position();
    dir = 0;
    set(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: true });
    window.addEventListener("touchend", touchEnd, { passive: true });
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("keydown", key);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("focusin", focus);
    return () => {
      listening = false;
      set(false);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("focusin", focus);
    };
  }, [narrow, header]);
}
