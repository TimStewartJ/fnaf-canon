/**
 * State for a list of rows that open in place (theories, readings, dated steps), and the page's
 * address. No components here.
 *
 * Which rows are open is kept per list. The address follows the reader: opening a row makes its id
 * the page's anchor (replacing, so Back is not polluted), which makes an open row linkable and lets
 * it survive a reload; arriving on a link to a row (…#row-id) opens that row. The address itself is
 * read and written through the shared layer (components/address.ts).
 */
import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useReducer, useRef } from "react";
import { useAddress } from "../../components/ui";

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

/** Which rows are open, and the row the address last named. */
interface Rows { open: ReadonlySet<string>; seen: string }
type RowsChange =
  | { target: string; known: boolean }
  | { id: string; open: boolean }
  | { all: readonly string[]; open: boolean };

function change(rows: Rows, c: RowsChange): Rows {
  if ("target" in c) {
    if (c.target === rows.seen) return rows;
    return { seen: c.target, open: c.known && !rows.open.has(c.target) ? new Set(rows.open).add(c.target) : rows.open };
  }
  const open = new Set(rows.open);
  for (const id of "all" in c ? c.all : [c.id]) { if (c.open) open.add(id); else open.delete(id); }
  return { ...rows, open };
}

/**
 * `ids` are the rows on show, in order. Rows that leave the list (a filter) keep their state for
 * when they return. The control keeps its identity until a row opens or closes or the list changes.
 */
export function useEssayRows(ids: readonly string[]): RowsControl {
  const { anchor: target, now, write } = useAddress();
  // A reducer, so that the change made while rendering (below) is always worked out from the state on screen.
  const [{ open, seen }, apply] = useReducer(change, null, (): Rows => ({ open: new Set(target && ids.includes(target) ? [target] : []), seen: target }));

  // A link to a row opens it, also when the reader is already on the page.
  if (seen !== target) apply({ target, known: !!target && ids.includes(target) });

  const live = useRef({ open, ids });
  useLayoutEffect(() => { live.current = { open, ids }; });

  const toggle = useCallback((id: string, next: boolean) => {
    // A <details> also reports changes the page made itself (open all, a link); only the reader's own are news.
    if (live.current.open.has(id) === next) return;
    apply({ id, open: next });
    if (next) write({}, { anchor: id });
    else if (now().anchor === id) write({}, { anchor: "" });
  }, [now, write]);

  const setAll = useCallback((next: boolean) => {
    const list = live.current.ids;
    apply({ all: list, open: next });
    if (!next && list.includes(now().anchor)) write({}, { anchor: "" });
  }, [now, write]);

  const key = ids.join("\n");
  return useMemo(() => {
    const list = key ? key.split("\n") : [];
    return { isOpen: (id) => open.has(id), toggle, setAll, total: list.length, openCount: list.filter((id) => open.has(id)).length };
  }, [open, key, toggle, setAll]);
}
