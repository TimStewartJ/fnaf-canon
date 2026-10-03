/**
 * State for a list of rows that open in place (theories, readings, dated steps). No components here.
 *
 * Which rows are open is kept per list. The address follows the reader: opening a row puts its id in
 * the URL's hash (replacing, so Back is not polluted), which makes an open row linkable and lets it
 * survive a reload; arriving on a link to a row (…#row-id) opens that row.
 */
import { createContext, useCallback, useContext, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

/** The element id a URL hash names ("#row-id" → "row-id"), or "" when there is none. */
export function hashTarget(hash: string): string {
  if (!hash) return "";
  try { return decodeURIComponent(hash.slice(1)); } catch { return hash.slice(1); }
}

/** `ids` are the rows on show, in order. Rows that leave the list (a filter) keep their state for when they return. */
export function useEssayRows(ids: readonly string[]): RowsControl {
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  const target = hashTarget(hash);
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set(target && ids.includes(target) ? [target] : []));

  // A link to a row opens it, also when the reader is already on the page.
  const [seen, setSeen] = useState(target);
  if (seen !== target) {
    setSeen(target);
    if (target && ids.includes(target) && !open.has(target)) setOpen(new Set(open).add(target));
  }

  const live = useRef({ open, ids, search, target });
  useLayoutEffect(() => { live.current = { open, ids, search, target }; });

  const toggle = useCallback((id: string, next: boolean) => {
    const now = live.current;
    // A <details> also reports changes the page made itself (open all, a link); only the reader's own are news.
    if (now.open.has(id) === next) return;
    setOpen((prev) => { const s = new Set(prev); if (next) s.add(id); else s.delete(id); return s; });
    if (next) navigate({ search: now.search, hash: `#${encodeURIComponent(id)}` }, { replace: true });
    else if (now.target === id) navigate({ search: now.search, hash: "" }, { replace: true });
  }, [navigate]);

  const setAll = useCallback((next: boolean) => {
    const now = live.current;
    setOpen((prev) => { const s = new Set(prev); for (const id of now.ids) { if (next) s.add(id); else s.delete(id); } return s; });
    if (!next && now.target && now.ids.includes(now.target)) navigate({ search: now.search, hash: "" }, { replace: true });
  }, [navigate]);

  return { isOpen: (id) => open.has(id), toggle, setAll, total: ids.length, openCount: ids.filter((id) => open.has(id)).length };
}
