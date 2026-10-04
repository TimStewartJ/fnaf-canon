/** Reader settings, remembered in localStorage and applied as data attributes on <html>. */
import { useCallback, useEffect } from "react";
import { useStored } from "../hooks";
import { keepHeader } from "./headerReveal";

export interface Prefs {
  /** "night" is the brand default; "paper" is the light theme. */
  theme: "night" | "paper";
  /** Citation markers in running text. */
  cites: "show" | "hide";
  /** Long-form text size. */
  text: "small" | "normal" | "large";
}

export const PREFS_KEY = "fca:prefs";
const DEFAULTS: Prefs = { theme: "night", cites: "show", text: "normal" };

/** What a reader reads from: paragraphs, headings, rows. The first of these under the header is the place to keep. */
const BLOCKS = "p, h1, h2, h3, h4, h5, li, blockquote, figure, tr, dt, dd, summary, pre";

/** True for something that does not move with the page (a rail, a pinned bar), so that it is no measure of where the reader is. */
function pinned(el: Element, within: Element): boolean {
  for (let p: Element | null = el; p && p !== within; p = p.parentElement) {
    const position = getComputedStyle(p).position;
    if (position === "sticky" || position === "fixed") return true;
  }
  return false;
}

/** How far down the window a reader's eye is taken to be: about a third of the way. */
const EYE = 0.3;

/**
 * Notes the place the reader is at, and returns a function that puts the page back there after
 * the text has been set anew (a different size, the citation markers shown or hidden): without it
 * a reader in the middle of a chapter who chooses "Large" is left a screen or two from the
 * paragraph they were reading. The place is the block under the reader's eye and how far through
 * it the eye is (a long paragraph grows by a quarter at "Large": the same share of the way through
 * it is the same sentence, near enough). Nothing is noted at the top of a page, which stays there.
 */
function holdPlace(): (() => void) | null {
  const main = document.querySelector("main");
  if (!main || window.scrollY <= 0) return null;
  const top = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const eye = top + (window.innerHeight - top) * EYE;
  const under = (within: Element): Element | undefined => {
    for (const el of within.querySelectorAll(BLOCKS)) {
      const r = el.getBoundingClientRect();
      if (r.height > 0 && r.bottom > eye && !pinned(el, main)) return el;
    }
    return undefined;
  };
  // The first block to reach the eye, then the innermost one inside it (a paragraph in a list item, a row in a table).
  let el = under(main);
  if (!el) return null;
  for (let inner = under(el); inner; inner = under(inner)) el = inner;
  const at = el;
  const was = at.getBoundingClientRect();
  const through = was.top < eye ? (eye - was.top) / was.height : 0;
  const from = through > 0 ? eye : was.top;
  return () => {
    const now = at.getBoundingClientRect();
    const by = now.top + through * now.height - from;
    if (Math.abs(by) < 1) return;
    keepHeader();
    window.scrollBy({ top: by, behavior: "instant" });
  };
}

/** Keep in step with the inline script in index.html, which applies the same attributes before first paint. */
export function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  root.dataset.theme = p.theme;
  // A change of these two sets the text anew; the first time they are applied nothing has been read yet.
  const reset = (root.dataset.text !== undefined && root.dataset.text !== p.text) || (root.dataset.cites !== undefined && root.dataset.cites !== p.cites);
  const back = reset ? holdPlace() : null;
  root.dataset.cites = p.cites;
  root.dataset.text = p.text;
  back?.();
  const bg = getComputedStyle(root).getPropertyValue("--c-bg").trim();
  if (bg) document.querySelector('meta[name="theme-color"]')?.setAttribute("content", bg);
}

/**
 * What printing needs that a stylesheet cannot do. While the page prints it wears the paper
 * theme (the night theme's pale text is unreadable on white), and sections marked
 * data-print="open" (<Collapsible print>: a chapter's numbered sources) are opened; afterwards
 * both are put back. Call once, from the shell.
 */
export function usePrinting(): void {
  useEffect(() => {
    const root = document.documentElement;
    let theme: string | undefined;
    let opened: HTMLDetailsElement[] = [];
    const before = () => {
      if (theme === undefined) theme = root.dataset.theme ?? "";
      root.dataset.theme = "paper";
      opened = [...document.querySelectorAll<HTMLDetailsElement>('details[data-print="open"]:not([open])')];
      for (const d of opened) d.open = true;
    };
    const after = () => {
      if (theme !== undefined) root.dataset.theme = theme;
      theme = undefined;
      for (const d of opened) d.open = false;
      opened = [];
    };
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => { window.removeEventListener("beforeprint", before); window.removeEventListener("afterprint", after); };
  }, []);
}

export function usePrefs(): [Prefs, (patch: Partial<Prefs>) => void] {
  const [stored, setStored] = useStored<Partial<Prefs>>(PREFS_KEY, DEFAULTS);
  const prefs: Prefs = { ...DEFAULTS, ...stored };
  const { theme, cites, text } = prefs;
  useEffect(() => { applyPrefs({ theme, cites, text }); }, [theme, cites, text]);
  const update = useCallback((patch: Partial<Prefs>) => setStored((prev) => ({ ...DEFAULTS, ...prev, ...patch })), [setStored]);
  return [prefs, update];
}
