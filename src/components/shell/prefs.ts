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

export function usePrefs(): [Prefs, (patch: Partial<Prefs>) => void] {
  const [stored, setStored] = useStored<Partial<Prefs>>(PREFS_KEY, DEFAULTS);
  const prefs: Prefs = { ...DEFAULTS, ...stored };
  const { theme, cites, text } = prefs;
  useEffect(() => { applyPrefs({ theme, cites, text }); }, [theme, cites, text]);
  const update = useCallback((patch: Partial<Prefs>) => setStored((prev) => ({ ...DEFAULTS, ...prev, ...patch })), [setStored]);
  return [prefs, update];
}
