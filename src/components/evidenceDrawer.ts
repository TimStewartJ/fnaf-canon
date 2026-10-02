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
  /** The id currently shown, if any. */
  current: string | null;
}

export const EvidenceDrawerContext = createContext<EvidenceDrawerApi>({ open: () => {}, close: () => {}, current: null });

export function useEvidenceDrawer(): EvidenceDrawerApi {
  return useContext(EvidenceDrawerContext);
}

/** True for a plain left click with no modifier keys (so Ctrl/Cmd/middle click still opens a new tab). */
export function isPlainClick(e: { button: number; metaKey: boolean; ctrlKey: boolean; shiftKey: boolean; altKey: boolean }): boolean {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
