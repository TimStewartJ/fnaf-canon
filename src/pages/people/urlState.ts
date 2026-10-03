/** View state kept in the URL's query string, so a view can be shared and Back returns to it. No components here. */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface UrlState {
  /** The value of a parameter, or "" when it is absent. */
  get(name: string): string;
  /** Sets, changes or (with "" or null) removes parameters in one step. The history entry is replaced. */
  set(patch: Record<string, string | null>): void;
}

export function useUrlState(): UrlState {
  const [sp, setSp] = useSearchParams();
  const set = useCallback((patch: Record<string, string | null>) => {
    setSp((prev) => {
      const next = new URLSearchParams(prev);
      for (const [k, v] of Object.entries(patch)) { if (v) next.set(k, v); else next.delete(k); }
      return next;
    }, { replace: true });
  }, [setSp]);
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
