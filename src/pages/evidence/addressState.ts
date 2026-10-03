/**
 * View state that lives in the address (so a view can be shared and survives Back) but answers at
 * once. The router applies an address change as a transition, a moment after it is asked to, which
 * on a long page is a visible pause between a click and its effect. So the page keeps the state
 * itself, changes it immediately, and writes the address to match afterwards (replacing the
 * history entry, as every filter on the site does). When the address changes to something this
 * page did not write, such as Back, Forward or a link, the address wins.
 * No components here.
 */
import { useCallback, useEffect, useReducer } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

/*
 * When a page must not write its address. The router shows a navigation a moment after it has
 * happened in the browser, and until then the page is still on screen with its timers and effects
 * running. A write made in that moment lands on the wrong history entry.
 */

/**
 * True when the history entry the browser is on holds an open evidence drawer (see DrawerHost):
 * rewriting that entry would close the drawer. It is true from the click that opens a record,
 * before anything on the page can know of it. (The router keeps an entry's state under `usr`.)
 */
export const drawerInEntry = (): boolean => !!(window.history.state as { usr?: { drawer?: unknown } | null } | null)?.usr?.drawer;

const plain = (s: string): string => { try { return decodeURIComponent(s); } catch { return s; } };
/**
 * True when the address in the browser's bar is the one the router is showing the page (`shown`:
 * the page location's pathname, search and hash put together). When it is not, a navigation is on
 * its way: the reader has just followed a link, or the page's own last write has not come round
 * yet. Writing then would replace the entry the reader is going to and undo their click.
 */
export const inStep = (shown: string): boolean => plain(window.location.hash.replace(/^#/, "") || "/") === plain(shown);

interface Local<T> {
  value: T;
  /** The address this state was last reconciled with. */
  url: string;
  /** Addresses this page has asked for and not yet seen. */
  sent: string[];
}

/** The state once the address the router shows is taken in: this page's own write coming back only moves the bookmark; any other address replaces the state. */
function reconcile<T>(l: Local<T>, url: string, read: (sp: URLSearchParams) => T): Local<T> {
  if (url === l.url) return l;
  const echo = l.sent.indexOf(url);
  return echo >= 0 ? { ...l, url, sent: l.sent.slice(echo + 1) } : { value: read(new URLSearchParams(url)), url, sent: [] };
}
function applyChange<T>(l: Local<T>, fn: (l: Local<T>) => Local<T>): Local<T> {
  return fn(l);
}

/**
 * `read` turns the address into the state; `write` turns the state into the address it should have,
 * given the current one (so parameters this state does not own are kept). Both must be stable
 * functions (module level), and `write(read(x), x)` must describe the same view as `x`.
 */
export function useAddressState<T>(
  read: (sp: URLSearchParams) => T,
  write: (value: T, current: URLSearchParams) => URLSearchParams,
): [T, (next: T | ((prev: T) => T)) => void] {
  const [sp, setSp] = useSearchParams();
  const url = sp.toString();
  const { pathname, search, hash } = useLocation();
  const shown = pathname + search + hash;
  // A reducer, not useState, and on purpose. The address is taken in while rendering (the change
  // below). React abandons its render of a router change when the reader clicks in the middle of
  // it, but useState then works out that click's new state ahead of time from what the abandoned
  // render had set: the click was lost and the page fell back to an older address. A reducer's
  // changes are always worked out from the state that is on screen.
  const [local, change] = useReducer(applyChange<T>, undefined, (): Local<T> => ({ value: read(sp), url, sent: [] }));
  if (url !== local.url) change((l) => reconcile(l, url, read));
  const { value } = local;
  // The address follows the state. An address that already says the same thing in other words
  // (an old or hand-typed link) is left as it is. A write that has to wait (see above) is made
  // when the router has caught up: the address it shows the page then changes, and this runs again.
  useEffect(() => {
    const here = new URLSearchParams(local.url);
    const want = write(value, here).toString();
    if (want === write(read(here), here).toString() || drawerInEntry() || !inStep(shown)) return;
    setSp(new URLSearchParams(want), { replace: true });
  }, [value, local.url, shown, read, write, setSp]);
  const set = useCallback((next: T | ((prev: T) => T)) => {
    change((l) => {
      const to = typeof next === "function" ? (next as (prev: T) => T)(l.value) : next;
      // Note the address this change will ask for, so that its arrival is recognised as our own.
      const here = new URLSearchParams(l.url);
      const want = write(to, here).toString();
      const asked = want === write(read(here), here).toString() || l.sent.includes(want) ? l.sent : [...l.sent.slice(-7), want];
      return { ...l, value: to, sent: asked };
    });
  }, [read, write]);
  return [value, set];
}

/** A list written into one parameter: values joined with "+" (a space), "," also read. */
export const listOf = (v: string | null): string[] => [...new Set((v ?? "").split(/[\s,]+/).filter(Boolean))];
