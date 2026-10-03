/**
 * Overlays as steps in the history.
 *
 * On a phone, Back is how a sheet is dismissed. An overlay that is not a step in the history
 * gets that wrong in one of two ways: Back leaves the page it was opened on, or it changes the
 * page underneath and leaves the overlay up. So every modal overlay (the menu, search, the
 * contents and filter sheets, the image viewer) adds a history entry when it opens, exactly as
 * the evidence drawer does: Back closes it and the reader is where they were; closing it any
 * other way steps back over its entry.
 *
 * `useModalDialog` uses this for every dialog but the drawer, which keeps its own state in the
 * history (DrawerHost). No components here.
 *
 * How it stays right:
 *  - One overlay giving way to another in the same breath (the menu's "Search") hands its entry
 *    over instead of going back and forward.
 *  - An entry whose overlay has gone, met again later, is passed over in the direction the
 *    reader was going (after following a link out of the menu, Back returns to the page, not to
 *    an invisible stop). After a reload on one, the entry is simply made an ordinary one.
 *  - While an overlay holds the current entry, the page under it does not rewrite the address
 *    (address.ts holds such a change and makes it when the overlay has gone), so a filter set in a
 *    sheet is not lost when the sheet's entry is.
 */
import { useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { OVERLAY_KEY, entryState, liveAddress, notePlace, watchHistory } from "./address";

type Go = ReturnType<typeof useNavigate>;
interface Overlay {
  token: string;
  /** The position in the history of this overlay's entry; null until it has one. */
  idx: number | null;
  close: () => void;
}

/** Open overlays, the top one last. */
const open: Overlay[] = [];
/** Overlays closed from the interface while the browser was still on their entry: that entry is to be stepped off. */
const closed = new Set<string>();
let go: Go | null = null;
let queued = false;
/** A step along the history has been asked for and has not happened yet: nothing else is decided until it has. */
let moving = false;
let forwardTimer: number | undefined;
/** How the browser came to the entry it is on: by Back (-1), by Forward (1), or neither. */
let landed: -1 | 0 | 1 = 0;
let lastIdx = 0;
let made = 0;

const idxNow = (): number => (window.history.state as { idx?: number } | null)?.idx ?? 0;
const tokenNow = (): string | undefined => entryState<Record<string, unknown>>()?.[OVERLAY_KEY] as string | undefined;
const here = () => { const a = liveAddress(); return { pathname: a.pathname, search: a.search, hash: a.hash }; };
/** What the current entry carries, without an overlay's token. */
export function entryWithoutOverlay(): Record<string, unknown> {
  const rest = { ...(entryState() ?? {}) };
  delete rest[OVERLAY_KEY];
  return rest;
}
/** True when the entry the browser is on belongs to an overlay. */
export const overlayInEntry = (): boolean => tokenNow() !== undefined;

/**
 * Asks for `sync` to run. As a task of its own, not a microtask: after Back, every listener for
 * the event (the router's among them) has then heard of it before anything here adds to the history.
 */
function queue(): void {
  if (queued) return;
  queued = true;
  window.setTimeout(sync, 0);
}

/**
 * Asks for one step along the history and waits for it to happen. A step back always can (an
 * overlay's entry was added to one that is still there), so it is simply waited for: asking
 * twice would leave the page. A step forward may have nowhere to go; then the entry is made
 * an ordinary one.
 */
function step(by: -1 | 1): void {
  moving = true;
  if (by > 0) forwardTimer = window.setTimeout(() => { moving = false; strip(); queue(); }, 400);
  void go?.(by);
}

/** Brings the history into line with the overlays that are open. Runs after every change of either. */
function sync(): void {
  queued = false;
  if (!go || moving) return;
  const cur = tokenNow();
  const top = open[open.length - 1];
  const fresh = top && top.idx === null ? top : undefined;
  if (cur !== undefined && !open.some((o) => o.token === cur)) {
    // The browser is on the entry of an overlay that is no longer open.
    const from = landed;
    landed = 0;
    if (fresh) {
      // Another overlay opened as it closed: the entry changes hands.
      void go(here(), { replace: true, state: { ...entryWithoutOverlay(), [OVERLAY_KEY]: fresh.token } });
      fresh.idx = idxNow();
    } else if (closed.has(cur) || from < 0) {
      step(-1);
    } else if (from > 0) {
      // Going forward: pass over it. If there is nothing beyond, it becomes an ordinary entry.
      step(1);
    } else if (idxNow() > 0) {
      // Come upon with no overlay to show for it (the page was reloaded while one was open): the page under it is one step back.
      step(-1);
    } else {
      strip();
    }
    closed.delete(cur);
    return;
  }
  landed = 0;
  // The top overlay had its entry and the browser is no longer on it: Back took it, or the page
  // under it moved on. The overlay closes (and this runs again when it has).
  if (top && top.idx !== null && cur !== top.token) { top.close(); return; }
  if (fresh) {
    notePlace();
    void go(here(), { state: { ...(entryState() ?? {}), [OVERLAY_KEY]: fresh.token } });
    fresh.idx = idxNow();
  }
}

/** Makes the entry the browser is on an ordinary one. */
function strip(): void {
  if (go && tokenNow() !== undefined && !open.some((o) => o.token === tokenNow())) void go(here(), { replace: true, state: entryWithoutOverlay() });
}

if (typeof window !== "undefined") {
  lastIdx = idxNow();
  watchHistory((pop) => {
    const idx = idxNow();
    if (pop) {
      landed = idx < lastIdx ? -1 : idx > lastIdx ? 1 : 0;
      moving = false;
      window.clearTimeout(forwardTimer);
    }
    lastIdx = idx;
    queue();
  });
}

/** Connects the overlays to the router. Called once, by the shell. */
export function useOverlayRouter(): void {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    go = navigate;
    // A reload on an overlay's entry: there is no overlay now, so it becomes an ordinary entry.
    queue();
    return () => { if (go === navigate) go = null; };
  }, [navigate]);
}

/**
 * Makes an overlay a step in the history for as long as `isOpen`: Back closes it (`onClose` is
 * called) and the page under it stays; when it closes any other way, its entry is stepped back
 * over. `onClose` may be called more than once.
 */
export function useOverlayEntry(isOpen: boolean, onClose: () => void): void {
  const close = useRef(onClose);
  useLayoutEffect(() => { close.current = onClose; });
  useEffect(() => {
    if (!isOpen) return;
    const overlay: Overlay = { token: `o${++made}-${Date.now().toString(36)}`, idx: null, close: () => close.current() };
    open.push(overlay);
    queue();
    return () => {
      const at = open.indexOf(overlay);
      if (at >= 0) open.splice(at, 1);
      if (tokenNow() === overlay.token) closed.add(overlay.token);
      queue();
    };
  }, [isOpen]);
}
