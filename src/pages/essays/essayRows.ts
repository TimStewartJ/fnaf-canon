/**
 * State for a list of rows that open in place (theories, readings, dated steps), and the page's
 * address. No components here.
 *
 * Which rows are open is kept per list. The address follows the reader: opening a row puts its id in
 * the URL's hash (replacing, so Back is not polluted), which makes an open row linkable and lets it
 * survive a reload; arriving on a link to a row (…#row-id) opens that row.
 */
import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import { parsePath, useHref, useLocation, useNavigate } from "react-router-dom";

/** The element id a URL hash names ("#row-id" → "row-id"), or "" when there is none. */
export function hashTarget(hash: string): string {
  if (!hash) return "";
  try { return decodeURIComponent(hash.slice(1)); } catch { return hash.slice(1); }
}

export interface EssayAddress {
  /** The search and hash the browser has right now. */
  read(): { search: string; hash: string };
  /** Changes the search, the hash or both, in place: no history entry is added. */
  write(next: { search?: string; hash?: string }): void;
}

/**
 * The page's own address (its search and hash). Navigation is a React transition, so the location
 * the router hands to components runs a render behind the browser; two quick changes that each
 * started from it (a filter, then a row) would undo one another. This reads what the browser
 * actually has, so every change builds on the last one.
 */
export function useEssayAddress(): EssayAddress {
  const navigate = useNavigate();
  // Under the hash router the app's whole URL lives in the fragment, and "/" maps to "#/".
  const inFragment = useHref("/").includes("#");
  return useMemo(() => {
    const read = () => {
      if (!inFragment) return { search: window.location.search, hash: window.location.hash };
      const { search = "", hash = "" } = parsePath(window.location.hash.slice(1));
      return { search, hash };
    };
    return {
      read,
      write(next) {
        const now = read();
        const to = { search: next.search ?? now.search, hash: next.hash ?? now.hash };
        if (to.search !== now.search || to.hash !== now.hash) navigate(to, { replace: true });
      },
    };
  }, [navigate, inFragment]);
}

export interface RowsControl {
  isOpen(id: string): boolean;
  /** Reported by a row when it is opened or closed. */
  toggle(id: string, open: boolean): void;
  /** Opens or closes every row currently in the list. */
  setAll(open: boolean): void;
  /** How many rows are in the list, and how many of them are open. */
  total: number;
  openCount: number;
}

export const RowsContext = createContext<RowsControl | null>(null);
/** The control of the nearest list, or null inside a list whose rows are always open. */
export const useRows = (): RowsControl | null => useContext(RowsContext);

/**
 * `ids` are the rows on show, in order. Rows that leave the list (a filter) keep their state for
 * when they return. The control keeps its identity until a row opens or closes or the list changes.
 */
export function useEssayRows(ids: readonly string[]): RowsControl {
  const target = hashTarget(useLocation().hash);
  const address = useEssayAddress();
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set(target && ids.includes(target) ? [target] : []));

  // A link to a row opens it, also when the reader is already on the page.
  const [seen, setSeen] = useState(target);
  if (seen !== target) {
    setSeen(target);
    if (target && ids.includes(target) && !open.has(target)) setOpen(new Set(open).add(target));
  }

  const live = useRef({ open, ids });
  useLayoutEffect(() => { live.current = { open, ids }; });

  const toggle = useCallback((id: string, next: boolean) => {
    // A <details> also reports changes the page made itself (open all, a link); only the reader's own are news.
    if (live.current.open.has(id) === next) return;
    setOpen((prev) => { const s = new Set(prev); if (next) s.add(id); else s.delete(id); return s; });
    if (next) address.write({ hash: `#${encodeURIComponent(id)}` });
    else if (hashTarget(address.read().hash) === id) address.write({ hash: "" });
  }, [address]);

  const setAll = useCallback((next: boolean) => {
    const list = live.current.ids;
    setOpen((prev) => { const s = new Set(prev); for (const id of list) { if (next) s.add(id); else s.delete(id); } return s; });
    if (!next && list.includes(hashTarget(address.read().hash))) address.write({ hash: "" });
  }, [address]);

  const key = ids.join("\n");
  return useMemo(() => {
    const list = key ? key.split("\n") : [];
    return { isOpen: (id) => open.has(id), toggle, setAll, total: list.length, openCount: list.filter((id) => open.has(id)).length };
  }, [open, key, toggle, setAll]);
}
