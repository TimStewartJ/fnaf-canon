/** Hover / focus / toggle logic for small anchored popovers. The visible part is <Pop> in Popover.tsx. */
import { useCallback, useEffect, useRef, useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from "react";

export interface PopoverControl {
  open: boolean;
  /** The anchor element, for effects and event handlers. */
  getAnchor(): HTMLElement | null;
  show(): void;
  hide(): void;
  toggle(): void;
  /** Spread on the element that wraps both the anchor and the <Pop>. */
  wrapProps: {
    onPointerEnter(e: PointerEvent): void;
    onPointerLeave(e: PointerEvent): void;
    onFocus(e: FocusEvent): void;
    onBlur(e: FocusEvent): void;
    onKeyDown(e: KeyboardEvent): void;
  };
}

/**
 * Returns [control, anchorRef]. Put `anchorRef` on the anchor element as its ref, spread
 * `control.wrapProps` on the element wrapping the anchor and the <Pop>, and render
 * <Pop control={control}> while `control.open`.
 *
 * `hover` opens it under a mouse; `focus` opens it when the anchor takes keyboard focus. Turn
 * `focus` off for a popover with links or buttons inside: opened by focus alone, it would put
 * them in the path of everyone tabbing past. The anchor then opens it when pressed (call
 * `control.toggle` from its click handler), and Escape closes it.
 */
export function usePopover({ hover = true, focus = hover, openDelay = 150, closeDelay = 160 }: { hover?: boolean; focus?: boolean; openDelay?: number; closeDelay?: number } = {}): [PopoverControl, (el: HTMLElement | null) => void] {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLElement | null>(null);
  const timer = useRef<number | undefined>(undefined);
  // Opened by hand (a press): it stays until it is dismissed, whatever the mouse does.
  const pinned = useRef(false);
  const isOpen = useRef(false);
  const clear = () => { if (timer.current !== undefined) { window.clearTimeout(timer.current); timer.current = undefined; } };
  useEffect(() => clear, []);
  const set = useCallback((to: boolean) => { isOpen.current = to; setOpen(to); }, []);

  const setAnchor = useCallback((el: HTMLElement | null) => { anchorRef.current = el; }, []);
  const getAnchor = useCallback(() => anchorRef.current, []);
  const show = useCallback(() => { clear(); set(true); }, [set]);
  const hide = useCallback(() => { clear(); pinned.current = false; set(false); }, [set]);
  // A press opens it and keeps it; a press on one the mouse had already opened keeps it too; a second press closes it.
  const toggle = useCallback(() => {
    clear();
    const to = !isOpen.current || !pinned.current;
    pinned.current = to;
    set(to);
  }, [set]);

  const control: PopoverControl = {
    open, getAnchor, show, hide, toggle,
    wrapProps: {
      onPointerEnter(e) {
        if (!hover || e.pointerType !== "mouse") return;
        clear();
        timer.current = window.setTimeout(() => set(true), openDelay);
      },
      onPointerLeave(e) {
        if (e.pointerType !== "mouse" || pinned.current) return;
        clear();
        timer.current = window.setTimeout(() => set(false), closeDelay);
      },
      onFocus(e) {
        if (!focus) return;
        const t = e.target as HTMLElement;
        if (t === anchorRef.current && t.matches(":focus-visible")) show();
      },
      onBlur(e) {
        const next = e.relatedTarget as Node | null;
        if (next && e.currentTarget.contains(next)) return;
        // Focus has gone on to something else: the popover goes too, opened by hand or not. With
        // nowhere named (a click on bare page, another window) one opened by hand stays.
        if (next || !pinned.current) hide();
      },
      onKeyDown(e) {
        if (e.key === "Escape" && open) { e.stopPropagation(); hide(); anchorRef.current?.focus(); }
      },
    },
  };
  return [control, setAnchor];
}
