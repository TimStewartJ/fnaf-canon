/**
 * The evidence drawer: any evidence record can be opened over the current page (a side drawer on
 * desktop, a bottom sheet on a phone) so the reader checks a source without losing their place.
 * The open record lives in the history entry's state, so Back closes the drawer.
 */
import { createContext, useContext } from "react";

export interface DrawerState {
  /** The record being shown. */
  id: string;
  /** Other records cited at the same spot; the drawer pages through them. */
  group?: string[];
  /** True when opening pushed a history entry (so closing can go back). */
  pushed?: boolean;
}

export interface EvidenceDrawerApi {
  /** Opens a record. `group` lists the records cited together at that spot. */
  open(id: string, group?: string[]): void;
  close(): void;
}

/**
 * The API object keeps its identity while the drawer opens and closes, so the hundreds of
 * citations and cards that read it do not re-render. What is open right now travels separately.
 */
export const EvidenceDrawerContext = createContext<EvidenceDrawerApi>({ open: () => {}, close: () => {} });
export const EvidenceDrawerRecordContext = createContext<string | null>(null);

export function useEvidenceDrawer(): EvidenceDrawerApi {
  return useContext(EvidenceDrawerContext);
}

/**
 * The id of the record the drawer is showing, or null. A component that calls this re-renders
 * whenever the drawer opens, changes record or closes, so use it only where that is wanted
 * (marking the row whose record is open, for example).
 */
export function useDrawerRecord(): string | null {
  return useContext(EvidenceDrawerRecordContext);
}

/** True for a plain left click with no modifier keys (so Ctrl/Cmd/middle click still opens a new tab). */
export function isPlainClick(e: { button: number; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean; altKey: boolean }): boolean {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
