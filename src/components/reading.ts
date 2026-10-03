/**
 * Where the reader is in the theory, remembered on this device: the chapters finished, the last
 * one opened, and the place reached in it. Shared, so that the cover, the home page and the menu
 * can all offer the way back in. No components here.
 */
import { useCallback, useMemo } from "react";
import type { TheorySection } from "../data/schema";
import { theoryById } from "../data/store";
import { chapterNumber, readingOrder } from "./chapterOrder";
import { useStored } from "./hooks";
import { chapterPath } from "./links";

const NONE: string[] = [];
const PLACE_KEY = "fca:place";

/**
 * A place in a chapter: the anchor of the paragraph or heading that was at the top of the window,
 * and how far through the page that is (0 to 1).
 */
export interface ReadingPlace { id: string; at?: string; part: number }

/** Chapters the reader has finished, and the last one they opened. The setters are stable. */
export function useReadingProgress() {
  const [read, setRead] = useStored<string[]>("fca:read", NONE);
  const [last, setLast] = useStored<string | null>("fca:last", null);
  const markRead = useCallback((id: string) => setRead((prev) => (prev.includes(id) ? prev : [...prev, id])), [setRead]);
  const markOpened = useCallback((id: string) => setLast(id), [setLast]);
  const readSet = useMemo(() => new Set(read), [read]);
  return { read: readSet, last, markRead, markOpened };
}

/**
 * Notes the place reached in a chapter. Written straight to storage, without telling the page:
 * nothing on the page being read needs to hear of it, and a chapter must not be drawn again
 * every time its reader pauses.
 */
export function saveReadingPlace(place: ReadingPlace): void {
  try { window.localStorage.setItem(PLACE_KEY, JSON.stringify(place)); } catch { /* private mode */ }
}

/** Where "Continue" leads. */
export interface Continue {
  chapter: TheorySection;
  number: number;
  /** The chapter's address, with the place in it when one is known. */
  to: string;
  /** How far through it the reader was (0 when it has not been started). */
  part: number;
}

/**
 * Where a returning reader picks up: the chapter they last opened, at the paragraph they had
 * reached; or, if they finished it, the next one they have not read. Null for a reader who has
 * not opened a chapter, or has only looked at the top of the first one.
 */
export function useContinue(): Continue | null {
  const { read, last } = useReadingProgress();
  const [place] = useStored<ReadingPlace | null>(PLACE_KEY, null);
  return useMemo(() => {
    const c = last ? theoryById.get(last) : undefined;
    if (!c) return null;
    if (read.has(c.id)) {
      const next = readingOrder.slice(readingOrder.findIndex((s) => s.id === c.id) + 1).find((s) => !read.has(s.id));
      return next ? { chapter: next, number: chapterNumber(next.id), to: chapterPath(next.id), part: 0 } : null;
    }
    const p = place && place.id === c.id && place.at && place.part > 0.02 ? place : null;
    if (!p && c.id === readingOrder[0]?.id) return null;
    return { chapter: c, number: chapterNumber(c.id), to: `${chapterPath(c.id)}${p ? `#${p.at}` : ""}`, part: p?.part ?? 0 };
  }, [read, last, place]);
}
