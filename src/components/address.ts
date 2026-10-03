/**
 * The address layer: view state that lives in the URL (filters, open rows, tabs, the in-page
 * anchor), read and written in one place. No components here.
 *
 * Why it exists. The router applies every navigation as a React transition, so what it hands to
 * components (`useLocation`, `useSearchParams`) is a render behind the browser. Code built on that
 * loses the second of two quick clicks, lets a late write land on a page the reader has just gone
 * to, and opens the evidence drawer over a list that is one change behind. So:
 *
 *  - Reading. `useAddress()` gives a page its query parameters and anchor as the browser has them
 *    now, from a store that changes the moment the address does. A change is drawn at once, in one
 *    render, and the router is not involved: pages get only their path from it (PageLocation in
 *    App.tsx), so `useSearchParams` and `useLocation().search` must not be used in pages.
 *  - Writing. `write()` is the only way a page changes its own address. Every change is worked out
 *    from the address as it is at that moment, so changes compose and never undo one another. One
 *    call is one history step, however many parameters it touches, and the caller says whether it
 *    replaces the current entry (the default: filters do not pile up behind Back) or adds one
 *    (`push`). The browser's entry is changed first and the page drawn after, so whatever a page
 *    draws, its history entry already says.
 *  - Typing. `useAddressText()` answers every keystroke and writes once typing pauses.
 *  - Staying out of the way. A write is refused once the reader has gone to another page. Text
 *    still waiting when the reader follows a link is recorded on the entry they are leaving, never
 *    on the one they are going to. Nothing is written while the evidence drawer is open (it lives
 *    in the history entry; rewriting the entry would close it): the page shows the change at once
 *    and the address takes it when the drawer closes. The drawer settles what is waiting before
 *    it opens.
 */
import { useCallback, useLayoutEffect, useMemo, useSyncExternalStore } from "react";
import { parsePath, useLocation, useNavigate, type To } from "react-router-dom";

/* ── The address in the browser ────────────────────────────────────────────────── */

export interface LiveAddress { pathname: string; search: string; hash: string }

let parsed: { raw: string; at: LiveAddress } | null = null;
/**
 * The route in the browser's bar right now, read exactly as the hash router reads it: everything
 * after the first "#", a missing leading slash supplied. `search` keeps its "?" and `hash` its "#".
 */
export function liveAddress(): LiveAddress {
  const raw = window.location.hash;
  if (parsed?.raw === raw) return parsed.at;
  const { pathname: path = "/", search = "", hash = "" } = parsePath(raw.substring(1));
  const pathname = path.startsWith("/") || path.startsWith(".") ? path : `/${path}`;
  parsed = { raw, at: { pathname, search, hash } };
  return parsed.at;
}

/** What the current history entry carries besides its address (the router keeps it under `usr`). */
export function entryState<T extends object = Record<string, unknown>>(): T | null {
  const state = window.history.state as { usr?: unknown } | null;
  return state && typeof state.usr === "object" && state.usr !== null ? (state.usr as T) : null;
}
/** The key the evidence drawer keeps its record under in the history entry (see DrawerHost). */
export const DRAWER_KEY = "drawer";
/**
 * True when the entry the browser is on holds an open evidence drawer. It is true from the click
 * that opens a record, before anything on the page can know of it.
 */
export const drawerInEntry = (): boolean => !!entryState()?.[DRAWER_KEY];

const decoded = (s: string): string => { try { return decodeURIComponent(s); } catch { return s; } };
/** The same path, however each side spells it (the browser escapes characters the router keeps plain). */
export const samePath = (a: string, b: string): boolean => a === b || decoded(a) === decoded(b);
/** "#row-id" → "row-id". */
const anchorOf = (hash: string): string => (hash ? decoded(hash.slice(1)) : "");
const hashOf = (anchor: string): string => (anchor ? `#${encodeURIComponent(anchor)}` : "");

/* ── What pages are told ───────────────────────────────────────────────────────── */

const listeners = new Set<() => void>();
function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}
function notify(): void {
  for (const fn of [...listeners]) fn();
}

/**
 * A change the browser's entry does not say yet: the drawer holds the entry, the router is not
 * connected yet, or the browser refused the write. Pages are shown it all the same.
 */
interface Waiting { pathname: string; search: string; hash: string; push: boolean }
let waiting: Waiting | null = null;

type AlsoEdit = (params: URLSearchParams) => void;
/** Text the reader is typing, by parameter, not yet in the address. */
interface Typing { pathname: string; values: Map<string, { text: string; also?: AlsoEdit }> }
let typing: Typing | null = null;
let typingTimer: number | undefined;
let retryTimer: number | undefined;

/** True while this layer's own write is going through the router. */
let writing = false;
/** Whether the entry the browser was on, as of the last change, held the drawer. */
let onDrawer = false;

type Navigator = (to: To, options?: { replace?: boolean; state?: unknown }) => void | Promise<void>;
let navigator: Navigator | null = null;

const clear = (timer: number | undefined): undefined => { if (timer !== undefined) window.clearTimeout(timer); return undefined; };
const says = (a: { search: string; hash: string }, b: { search: string; hash: string }): boolean =>
  (a.search === b.search && a.hash === b.hash) || (decoded(a.search) === decoded(b.search) && decoded(a.hash) === decoded(b.hash));

/** The last query and anchor shown for each path, for a page that is being left (see viewOf). */
const shown = new Map<string, string>();
/**
 * What a page at `pathname` should show: its query and anchor ("?a=1#row"). While the reader is
 * on their way to another page (its address is already in the bar, the old page still on screen)
 * the old page keeps what it last had.
 */
function viewOf(pathname: string): string {
  const live = liveAddress();
  if (!samePath(live.pathname, pathname)) return shown.get(pathname) ?? "";
  const at = waiting && samePath(waiting.pathname, pathname) ? waiting : live;
  const value = at.search + at.hash;
  if (shown.get(pathname) !== value) {
    if (!shown.has(pathname) && shown.size >= 8) shown.delete(shown.keys().next().value!);
    shown.set(pathname, value);
  }
  return value;
}
const cut = (view: string): { search: string; hash: string } => {
  const i = view.indexOf("#");
  return i < 0 ? { search: view, hash: "" } : { search: view.slice(0, i), hash: view.slice(i) };
};

/* ── Writing ───────────────────────────────────────────────────────────────────── */

/**
 * Tries to make the waiting change. True when it made a history step (everything that reads the
 * address has then been told, see `moved`). When it lets go of the change without one, it tells
 * them itself.
 */
function flush(): boolean {
  retryTimer = clear(retryTimer);
  const w = waiting;
  if (!w) return false;
  const live = liveAddress();
  if (!samePath(live.pathname, w.pathname) || says(w, live)) { waiting = null; notify(); return false; }
  if (!navigator || drawerInEntry()) return false;
  let refused = false;
  writing = true;
  try {
    // A replaced entry keeps what it carried; a new entry starts clean.
    void navigator({ pathname: w.pathname, search: w.search, hash: w.hash }, { replace: !w.push, state: w.push ? null : entryState() });
  } catch {
    // The browser refuses a page that rewrites its history too often (Safari: 100 times in 30 seconds).
    refused = true;
  } finally {
    writing = false;
  }
  if (refused && !says(w, liveAddress())) {
    // The page shows the change all the same; the address takes it when the browser allows.
    retryTimer = window.setTimeout(flush, 2000);
    return false;
  }
  const made = says(w, liveAddress());
  if (waiting === w) waiting = null;
  // The router declined without saying why: the page goes back to what the address says.
  if (!made) notify();
  return made;
}

/** Folds the text being typed into `params` and forgets it. True when there was any. */
function takeTyping(pathname: string, params: URLSearchParams): boolean {
  const t = typing;
  if (!t) return false;
  typing = null;
  typingTimer = clear(typingTimer);
  if (!samePath(t.pathname, pathname)) return true;
  for (const [name, { text, also }] of t.values) {
    if ((params.get(name) ?? "") === text) continue;
    if (text) params.set(name, text); else params.delete(name);
    also?.(params);
  }
  return true;
}

/** Parameters to set; "" or null removes one, undefined leaves it alone. */
export type AddressPatch = Record<string, string | null | undefined>;
/** A patch, or a function that edits the parameters in place (and may return a patch to apply as well). */
export type AddressChange = AddressPatch | ((params: URLSearchParams) => AddressPatch | void);
export interface WriteHow {
  /** Add a history entry, so that Back undoes the change. Default: replace the current entry. */
  push?: boolean;
  /** Set the in-page anchor (an element id, without "#") in the same step; "" removes it. */
  anchor?: string;
}

function applyPatch(params: URLSearchParams, patch: AddressPatch | void): void {
  if (!patch) return;
  for (const [name, value] of Object.entries(patch)) {
    if (value === undefined) continue;
    if (value) params.set(name, value); else params.delete(name);
  }
}

function write(pathname: string, change: AddressChange, how?: WriteHow): boolean {
  const live = liveAddress();
  // The reader has gone to another page (its entry is already the current one): this page writes nothing more.
  if (!samePath(live.pathname, pathname)) return false;
  const from = waiting && samePath(waiting.pathname, pathname) ? waiting : live;
  const params = new URLSearchParams(from.search);
  const was = params.toString();
  const typed = takeTyping(pathname, params);
  const before = params.toString();
  applyPatch(params, typeof change === "function" ? change(params) : change);
  const now = params.toString();
  const anchorWas = anchorOf(from.hash);
  const anchor = how?.anchor ?? anchorWas;
  // A part the change did not touch keeps its spelling, so the router sees no change in it.
  const search = now === was ? from.search : now ? `?${now}` : "";
  const hash = anchor === anchorWas ? from.hash : hashOf(anchor);
  if (search !== from.search || hash !== from.hash) {
    waiting = { pathname, search, hash, push: (from === waiting && waiting.push) || !!how?.push };
    // Made at once: the entry changes, then everything that reads the address is told (see `moved`).
    if (!flush()) notify();
  } else if (typed) {
    notify();
  }
  return now !== before || anchor !== anchorWas;
}

/**
 * Makes whatever is waiting part of the address, now: text being typed, and a change held back.
 * The evidence drawer calls this before it opens, so that the entry under the drawer and the
 * drawer's own entry both carry the view the reader is looking at.
 */
export function settleAddress(): void {
  if (typing) write(typing.pathname, {});
  flush();
}

function typeText(pathname: string, name: string, text: string, after: number, also?: AlsoEdit): void {
  if (!samePath(liveAddress().pathname, pathname)) return;
  if (!typing || !samePath(typing.pathname, pathname)) typing = { pathname, values: new Map() };
  typing.values.set(name, { text, also });
  typingTimer = clear(typingTimer);
  typingTimer = window.setTimeout(() => { typingTimer = undefined; if (typing) write(typing.pathname, {}); }, after);
  notify();
}
const typedText = (pathname: string, name: string): string | null =>
  (typing && samePath(typing.pathname, pathname) ? typing.values.get(name)?.text : undefined) ?? null;

/* ── Watching the browser's history ────────────────────────────────────────────── */

/** After any change of entry: note where we are, tell the pages, and try again what had to wait. */
function moved(): void {
  onDrawer = drawerInEntry();
  notify();
  // Never from inside this call: the router is still in the middle of its own navigation.
  if (waiting && !writing) queueMicrotask(flush);
}

/** The reader is leaving this entry by a link: what was waiting belongs to it, so record it here, without the router. */
function leave(replaceState: History["replaceState"]): void {
  const live = liveAddress();
  let last: { search: string; hash: string } | null = waiting && samePath(waiting.pathname, live.pathname) ? waiting : null;
  if (typing && samePath(typing.pathname, live.pathname)) {
    const params = new URLSearchParams((last ?? live).search);
    const was = params.toString();
    takeTyping(live.pathname, params);
    const now = params.toString();
    if (now !== was) last = { search: now ? `?${now}` : "", hash: (last ?? live).hash };
  }
  waiting = null;
  typing = null;
  typingTimer = clear(typingTimer);
  retryTimer = clear(retryTimer);
  if (!last || says(last, live) || drawerInEntry()) return;
  try {
    replaceState.call(window.history, window.history.state, "", `${window.location.pathname}${window.location.search}#${live.pathname}${last.search}${last.hash}`);
  } catch { /* the entry keeps its old address */ }
}

interface Installed { push: History["pushState"]; replace: History["replaceState"]; pop?: () => void }

/**
 * The router and the drawer change the history too. The browser announces Back and Forward but
 * not pushState or replaceState, so the two methods are wrapped: the only way to hear of a change
 * the moment it is made.
 */
function install(): void {
  const host = window as unknown as { __fcaHistory?: Installed };
  const history = window.history;
  // Wrapped once, even if this module is loaded again (hot reload while developing).
  const base = host.__fcaHistory ?? (host.__fcaHistory = { push: history.pushState, replace: history.replaceState });
  if (base.pop) window.removeEventListener("popstate", base.pop);
  history.pushState = function pushState(this: History, ...args: Parameters<History["pushState"]>) {
    if (!writing) leave(base.replace);
    base.push.apply(this, args);
    moved();
  };
  history.replaceState = function replaceState(this: History, ...args: Parameters<History["replaceState"]>) {
    const from = liveAddress().pathname;
    base.replace.apply(this, args);
    // A redirect to another page: what was waiting for the old one is void.
    if (!writing && !samePath(liveAddress().pathname, from)) { waiting = null; typing = null; typingTimer = clear(typingTimer); }
    moved();
  };
  base.pop = () => {
    // Back or Forward. What was waiting belonged to the entry the reader has left, unless that
    // entry was the drawer's and this is the page under it.
    const at = liveAddress().pathname;
    const under = onDrawer && [waiting?.pathname, typing?.pathname].every((p) => p === undefined || samePath(p, at));
    if (!under) { waiting = null; typing = null; typingTimer = clear(typingTimer); retryTimer = clear(retryTimer); }
    moved();
  };
  window.addEventListener("popstate", base.pop);
  onDrawer = drawerInEntry();
}
if (typeof window !== "undefined") install();

/* ── Hooks ─────────────────────────────────────────────────────────────────────── */

/** Connects the address layer to the router. Called once, by the shell: inside the router, outside the pages. */
export function useAddressRouter(): void {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    navigator = navigate;
    flush();
    return () => { if (navigator === navigate) navigator = null; };
  }, [navigate]);
}

export interface AddressView {
  /** The page's query parameters. Read only: use `write` to change them. */
  params: URLSearchParams;
  /** The in-page anchor (an element id), decoded, without "#"; "" when there is none. */
  anchor: string;
}

export interface Address extends AddressView {
  /** The value of a parameter, or "" when it is absent. */
  get(name: string): string;
  /** The same, read at the moment of the call (`params` is a copy), with text still being typed included. For code that runs later than the render it was made in. */
  now(): AddressView;
  /**
   * Changes the query parameters (and, with `how.anchor`, the anchor) as one history step. Pass a
   * patch (`{ tie: null, focus: id }`), or a function that is given the parameters as they are at
   * that moment and edits them in place or returns a patch: a handler that flips a value must
   * read it there, not from the last render, or the second of two quick clicks is lost.
   * Returns false when the change changed nothing (no navigation is made), or when the reader has
   * already left the page. It keeps its identity for the life of the page, so it can be handed to
   * memoised parts.
   */
  write(change: AddressChange, how?: WriteHow): boolean;
  /** A `to` for <Link>: the element `id` on this page, with the query kept (a bare "#id" would drop it). */
  link(id: string): To;
}

/**
 * The page's own address: its query parameters and anchor, live. The component re-renders when
 * either changes, at once and outside the router's transition.
 */
export function useAddress(): Address {
  const { pathname } = useLocation();
  const snapshot = useCallback(() => viewOf(pathname), [pathname]);
  const { search, hash } = cut(useSyncExternalStore(subscribe, snapshot));
  const change = useAddressWrite();
  const now = useCallback((): AddressView => {
    const at = cut(viewOf(pathname));
    const params = new URLSearchParams(at.search);
    if (typing && samePath(typing.pathname, pathname)) for (const [name, { text }] of typing.values) { if (text) params.set(name, text); else params.delete(name); }
    return { params, anchor: anchorOf(at.hash) };
  }, [pathname]);
  return useMemo<Address>(() => {
    const params = new URLSearchParams(search);
    return {
      params,
      anchor: anchorOf(hash),
      get: (name) => params.get(name) ?? "",
      now,
      write: change,
      link: (id) => ({ pathname, search, hash: hashOf(id) }),
    };
  }, [pathname, search, hash, change, now]);
}

/**
 * Only the writer, for a part that changes the address and does not read it: it never re-renders
 * for a change of address, and the function keeps its identity for the life of the page.
 */
export function useAddressWrite(): Address["write"] {
  const { pathname } = useLocation();
  return useCallback((change, how) => write(pathname, change, how), [pathname]);
}

/**
 * A text box whose value also lives in the address, as the parameter `name`. The box answers every
 * keystroke; the address follows once typing has paused for `after` milliseconds, or sooner when
 * anything else is written, in the same step. `also` edits the parameters in that step when the
 * text has in fact changed (to start a list again from its top, say). When the address is changed
 * by anything else (Back, a link, "clear all"), the box shows what the address says.
 */
export function useAddressText(name: string, { after = 300, also }: { after?: number; also?: AlsoEdit } = {}): [string, (text: string) => void] {
  const { pathname } = useLocation();
  const inAddress = useAddress().get(name);
  const typed = useSyncExternalStore(subscribe, useCallback(() => typedText(pathname, name), [pathname, name]));
  const set = useCallback((text: string) => typeText(pathname, name, text, after, also), [pathname, name, after, also]);
  return [typed ?? inAddress, set];
}

/**
 * A list kept in one parameter, as an array without repeats: values divided by "," or a space
 * (which is how "+" in an address reads). With `allowed`, only those values, and typed as them.
 */
export function listParam<T extends string = string>(raw: string | null | undefined, allowed?: readonly T[]): T[] {
  const values = [...new Set((raw ?? "").split(/[\s,]+/).filter(Boolean))];
  return (allowed ? values.filter((v) => (allowed as readonly string[]).includes(v)) : values) as T[];
}
