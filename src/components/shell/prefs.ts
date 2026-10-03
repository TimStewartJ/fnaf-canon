/** Reader settings, remembered in localStorage and applied as data attributes on <html>. */
import { useCallback, useEffect } from "react";
import { useStored } from "../hooks";

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

/** Keep in step with the inline script in index.html, which applies the same attributes before first paint. */
export function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  root.dataset.theme = p.theme;
  root.dataset.cites = p.cites;
  root.dataset.text = p.text;
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
