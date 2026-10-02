import { useLayoutEffect, useRef, type ReactNode } from "react";
import type { PopoverControl } from "./popover";

/** Places a popover above its anchor when there is room, otherwise below, and keeps it inside the viewport. */
function place(el: HTMLElement, anchor: HTMLElement) {
  const r = anchor.getBoundingClientRect();
  const w = el.offsetWidth, h = el.offsetHeight;
  const vw = document.documentElement.clientWidth, vh = window.innerHeight;
  const gap = 8, pad = 8;
  const left = Math.max(pad, Math.min(r.left + r.width / 2 - w / 2, vw - w - pad));
  const roomAbove = r.top - gap - h >= pad;
  const roomBelow = r.bottom + gap + h <= vh - pad;
  const top = roomAbove || !roomBelow ? Math.max(pad, r.top - gap - h) : r.bottom + gap;
  el.style.left = `${Math.round(left + window.scrollX)}px`;
  el.style.top = `${Math.round(top + window.scrollY)}px`;
  el.dataset.side = roomAbove || !roomBelow ? "above" : "below";
}

/**
 * The floating part of a popover. Render it only while `control.open`, as a sibling of the anchor
 * inside the element that carries `control.wrapProps`. It uses the browser's popover top layer, so it
 * is never clipped by a scrolling or overflow-hidden ancestor, and it stays next to its anchor in
 * the tab order.
 */
export function Pop({ control, className, children, role = "tooltip", label }: { control: PopoverControl; className?: string; children: ReactNode; role?: "tooltip" | "group" | "dialog"; label?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { getAnchor, hide } = control;
  useLayoutEffect(() => {
    const el = ref.current, anchor = getAnchor();
    if (!el || !anchor) return;
    const canPop = typeof el.showPopover === "function";
    if (canPop && !el.matches(":popover-open")) el.showPopover();
    place(el, anchor);
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!el.contains(t) && !anchor.contains(t)) hide();
    };
    const onResize = () => place(el, anchor);
    document.addEventListener("pointerdown", onDown, true);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("resize", onResize);
      if (canPop && el.isConnected && el.matches(":popover-open")) el.hidePopover();
    };
  }, [getAnchor, hide]);
  return (
    <span ref={ref} popover="manual" role={role} aria-label={label} className={className ? `pop ${className}` : "pop"}>
      {children}
    </span>
  );
}
