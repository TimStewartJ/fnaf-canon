import { useLayoutEffect, useRef, type ReactNode } from "react";
import type { PopoverControl } from "./popover";
import { keepHeader } from "./shell/headerReveal";

/** The least a popover is squeezed to before it is allowed to overlap its anchor (a window with almost no height). */
const LEAST = 120;
/** The space between a popover and its anchor, and between it and the window's edge. */
const gap = 8, pad = 8;

/**
 * Places a popover above its anchor when there is room, otherwise below, and keeps it inside the
 * viewport. One too tall for either side goes on the roomier side and is held to the room there
 * (its content then scrolls), so it never lies over the anchor it explains.
 */
function place(el: HTMLElement, anchor: HTMLElement, align: "center" | "end", makeRoom = false) {
  el.style.maxHeight = "";
  const w = el.offsetWidth, h = el.offsetHeight;
  const vw = document.documentElement.clientWidth, vh = window.innerHeight;
  if (makeRoom) roomFor(anchor, h, vh);
  const r = anchor.getBoundingClientRect();
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
  // One that scrolls has to be reachable from the keyboard, or the part below its edge cannot be read without a mouse.
  if (el.scrollHeight > el.clientHeight + 1) el.tabIndex = 0;
  else el.removeAttribute("tabindex");
  more(el);
}

/** Says on a popover whether there is more of it below its edge, which the stylesheet shows as a fading last line. */
function more(el: HTMLElement) {
  if (el.scrollHeight - el.clientHeight - el.scrollTop > 2) el.dataset.more = "";
  else delete el.dataset.more;
}

/**
 * A panel asked for by a press that fits on neither side of its button: the page moves just far
 * enough to give it the room, and never so far that the button leaves the screen or goes under the
 * header. The reader then has the whole of what was asked for, where a panel held to the room that
 * happened to be there showed half of it.
 */
function roomFor(anchor: HTMLElement, h: number, vh: number) {
  const r = anchor.getBoundingClientRect();
  const above = r.top - gap - pad, below = vh - r.bottom - gap - pad;
  if (h <= above || h <= below) return;
  const header = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
  const y = window.scrollY, end = document.documentElement.scrollHeight - vh;
  // Scrolling on lifts the button and gives room below it; scrolling back lowers it and gives room above.
  const lift = Math.max(0, Math.min(h - below, end - y, r.top - Math.max(0, header) - pad));
  const lower = Math.max(0, Math.min(h - above, y, vh - pad - r.bottom));
  const fitsBelow = below + lift >= h, fitsAbove = above + lower >= h;
  const up = fitsBelow !== fitsAbove ? fitsBelow : fitsBelow ? lift <= lower : below + lift >= above + lower;
  const by = up ? lift : -lower;
  if (Math.abs(by) < 1) return;
  keepHeader();
  window.scrollBy({ top: by, behavior: "instant" });
}

/**
 * The floating part of a popover. Render it only while `control.open`, as a sibling of the anchor
 * inside the element that carries `control.wrapProps`. It uses the browser's popover top layer, so it
 * is never clipped by a scrolling or overflow-hidden ancestor, and it stays next to its anchor in
 * the tab order. `align="end"` lines its right edge up with the anchor's (a wide panel opened from
 * a button at the right of a toolbar then stays over the page's own column); the default centres it.
 * `makeRoom` is for a tall panel that a press asks for (the key to the marks): where it fits on
 * neither side of its button, the page moves just far enough for it, and back when it closes. Never
 * for one that opens on hover.
 */
export function Pop({ control, className, children, role = "tooltip", label, align = "center", makeRoom = false }: { control: PopoverControl; className?: string; children: ReactNode; role?: "tooltip" | "group" | "dialog"; label?: string; align?: "center" | "end"; makeRoom?: boolean }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { getAnchor, hide } = control;
  useLayoutEffect(() => {
    const el = ref.current, anchor = getAnchor();
    if (!el || !anchor) return;
    const canPop = typeof el.showPopover === "function";
    if (canPop && !el.matches(":popover-open")) el.showPopover();
    const from = window.scrollY, here = window.location.href;
    place(el, anchor, align, makeRoom);
    const to = window.scrollY;
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!el.contains(t) && !anchor.contains(t)) hide();
    };
    const onResize = () => place(el, anchor, align);
    const onScroll = () => more(el);
    document.addEventListener("pointerdown", onDown, true);
    window.addEventListener("resize", onResize);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onDown, true);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", onScroll);
      if (canPop && el.isConnected && el.matches(":popover-open")) el.hidePopover();
      // The page moved to make room: closing puts it back, unless the reader has moved it since or gone elsewhere.
      if (to !== from && Math.abs(window.scrollY - to) < 2 && window.location.href === here) {
        keepHeader();
        window.scrollTo({ top: from, behavior: "instant" });
      }
    };
  }, [getAnchor, hide, align, makeRoom]);
  return (
    <span ref={ref} popover="manual" role={role} aria-label={label} className={className ? `pop ${className}` : "pop"}>
      {children}
    </span>
  );
}
