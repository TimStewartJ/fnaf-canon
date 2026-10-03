/** Measuring hooks and helpers for the diagrams. No components here. */
import { useCallback, useRef, useState } from "react";

/**
 * The width of an element's content box, kept up to date. Put the returned ref on the element.
 * It starts from a guess so the first paint is close, and is corrected before that paint.
 */
export function useContentWidth<T extends HTMLElement>(): [(el: T | null) => void, number] {
  const [width, setWidth] = useState(() => Math.min(1216, (typeof window === "undefined" ? 1216 : window.innerWidth) - 34));
  const observer = useRef<ResizeObserver | null>(null);
  const ref = useCallback((el: T | null) => {
    observer.current?.disconnect();
    if (!el) return;
    const read = () => {
      const cs = getComputedStyle(el);
      setWidth(Math.max(0, el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)));
    };
    read();
    observer.current = new ResizeObserver(read);
    observer.current.observe(el);
  }, []);
  return [ref, width];
}

let context: CanvasRenderingContext2D | null | undefined;
const fonts = new Map<string, string>();
const widths = new Map<string, number>();

/**
 * The width in pixels of a short piece of interface text, for laying out labels before they are
 * drawn. The face comes from the design tokens (`token` is a custom property such as "--font-ui"),
 * so no font is named here. Without a canvas the width is estimated from the length.
 */
export function textWidth(text: string, sizePx: number, token: string, style = "500"): number {
  const key = `${style}|${sizePx}|${token}|${text}`;
  const known = widths.get(key);
  if (known != null) return known;
  if (context === undefined) context = typeof document === "undefined" ? null : document.createElement("canvas").getContext("2d");
  let w = text.length * sizePx * 0.56;
  if (context) {
    let family = fonts.get(token);
    if (family == null) { family = getComputedStyle(document.documentElement).getPropertyValue(token).trim(); fonts.set(token, family); }
    if (family) { context.font = `${style} ${sizePx}px ${family}`; w = context.measureText(text).width; }
  }
  widths.set(key, w);
  return w;
}

/** Forgets measured widths (call when the fonts have finished loading: widths taken before were of a fallback face). */
export function forgetTextWidths() {
  widths.clear();
}
