/** View state kept in the URL's query string, so a view can be shared and Back returns to it. No components here. */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useLocation, useSearchParams, type To } from "react-router-dom";

export type UrlPatch = Record<string, string | null>;

export interface UrlState {
  /** The value of a parameter, or "" when it is absent, as of this render. */
  get(name: string): string;
  /**
   * Sets, changes or (with "" or null) removes parameters in one step. The history entry is replaced.
   * Pass a function to work the change out from the values in the address bar at that moment:
   * a handler that flips something must do so, or two quick clicks (the second landing before the
   * page has drawn the first) would both start from the same old value and one would be lost.
   * The function keeps its identity for the life of the page, so it can be handed to memoised parts.
   */
  set(patch: UrlPatch | ((now: (name: string) => string) => UrlPatch)): void;
}

/**
 * The query string as it is in the address bar right now. The router changes the address at once
 * and draws the page afterwards, so its own copy can be a step behind. The site uses hash routing
 * ("#/path?query#anchor"); a plain query string is read too, should that ever change.
 */
function paramsNow(): URLSearchParams {
  const hash = window.location.hash;
  if (hash.startsWith("#/")) return new URLSearchParams(hash.slice(1).split("#")[0].split("?")[1] ?? "");
  return new URLSearchParams(window.location.search);
}

export function useUrlState(): UrlState {
  const [sp, setSp] = useSearchParams();
  // The router's setter is a new function after every change of URL; calls go through the latest one.
  const latest = useRef(setSp);
  useLayoutEffect(() => { latest.current = setSp; });
  const set = useCallback<UrlState["set"]>((patch) => {
    const next = paramsNow();
    const changes = typeof patch === "function" ? patch((name) => next.get(name) ?? "") : patch;
    for (const [k, v] of Object.entries(changes)) { if (v) next.set(k, v); else next.delete(k); }
    latest.current(next, { replace: true });
  }, []);
  return useMemo(() => ({ get: (name: string) => sp.get(name) ?? "", set }), [sp, set]);
}

/** A comma-separated list parameter as an array of the values that are allowed. */
export const listParam = <T extends string>(raw: string, allowed: readonly T[]): T[] =>
  raw.split(",").filter((v): v is T => (allowed as readonly string[]).includes(v));

/**
 * A text input whose value also lives in the URL. The input is driven by local state, so typing is
 * never a step behind the router; the URL follows it, and a change of URL from elsewhere (Back, a
 * link to the bare page) is taken up in turn.
 */
export function useUrlText(name: string): [string, (value: string) => void] {
  const url = useUrlState();
  const inUrl = url.get(name);
  const [text, setText] = useState(inUrl);
  const written = useRef(inUrl);
  useEffect(() => {
    if (inUrl === written.current) return;
    written.current = inUrl;
    setText(inUrl);
  }, [inUrl]);
  const set = useCallback((value: string) => {
    written.current = value;
    setText(value);
    url.set({ [name]: value || null });
  }, [name, url]);
  return [text, set];
}

/**
 * Builds links to anchors on the current page that keep its query string, so jumping to a section
 * does not undo a filter. `anchor("ties")` is a `to` for <Link>; the shell scrolls to the element.
 */
export function useAnchor(): (id: string) => To {
  const { pathname, search } = useLocation();
  return useCallback((id: string) => ({ pathname, search, hash: `#${id}` }), [pathname, search]);
}
