import { useLayoutEffect, useRef, type ReactNode } from "react";
import type { PopoverControl } from "./popover";

/** The least a popover is squeezed to before it is allowed to overlap its anchor (a window with almost no height). */
const LEAST = 120;

/**
 * Places a popover above its anchor when there is room, otherwise below, and keeps it inside the
 * viewport. One too tall for either side goes on the roomier side and is held to the room there
 * (its content then scrolls), so it never lies over the anchor it explains.
 */
function place(el: HTMLElement, anchor: HTMLElement, align: "center" | "end") {
  el.style.maxHeight = "";
  const r = anchor.getBoundingClientRect();
  const w = el.offsetWidth, h = el.offsetHeight;
  const vw = document.documentElement.clientWidth, vh = window.innerHeight;
  const gap = 8, pad = 8;
  const left = Math.max(pad, Math.min(align === "end" ? r.right - w : r.left + r.width / 2 - w / 2, vw - w - pad));
  const above = r.top - gap - pad, below = vh - r.bottom - gap - pad;
  const side = h <= above ? "above" : h <= below ? "below" : above >= below ? "above" : "below";
  const room = Math.max(LEAST, Math.floor(side === "above" ? above : below));
  if (h > room) el.style.maxHeight = `${room}px`;
  const height = Math.min(h, room);
  const top = side === "above" ? Math.max(pad, r.top - gap - height) : r.bottom + gap;
  el.style.left = `${Math.round(left + window.scrollX)}px`;
  el.style.top = `${Math.round(top + window.scrollY)}px`;
  el.dataset.side = side;
}

/**
 * The floating part of a popover. Render it only while `control.open`, as a sibling of the anchor
 * inside the element that carries `control.wrapProps`. It uses the browser's popover top layer, so it
 * is never clipped by a scrolling or overflow-hidden ancestor, and it stays next to its anchor in
 * the tab order. `align="end"` lines its right edge up with the anchor's (a wide panel opened from
 * a button at the right of a toolbar then stays over the page's own column); the default centres it.
 */
export function Pop({ control, className, children, role = "tooltip", label, align = "center" }: { control: PopoverControl; className?: string; children: ReactNode; role?: "tooltip" | "group" | "dialog"; label?: string; align?: "center" | "end" }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { getAnchor, hide } = control;
  useLayoutEffect(() => {
    const el = ref.current, anchor = getAnchor();
    if (!el || !anchor) return;
    const canPop = typeof el.showPopover === "function";
    if (canPop && !el.matches(":popover-open")) el.showPopover();
    place(el, anchor, align);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!el.contains(t) && !anchor.contains(t)) hide();
    };
    const onResize = () => place(el, anchor, align);
    document.addEventListener("pointerdown", onDown, true);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("resize", onResize);
      if (canPop && el.isConnected && el.matches(":popover-open")) el.hidePopover();
    };
  }, [getAnchor, hide, align]);
  return (
    <span ref={ref} popover="manual" role={role} aria-label={label} className={className ? `pop ${className}` : "pop"}>
      {children}
    </span>
  );
}
