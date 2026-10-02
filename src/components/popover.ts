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
 */
export function usePopover({ hover = true, openDelay = 150, closeDelay = 160 }: { hover?: boolean; openDelay?: number; closeDelay?: number } = {}): [PopoverControl, (el: HTMLElement | null) => void] {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLElement | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const pinned = useRef(false);
  const clear = () => { if (timer.current !== undefined) { window.clearTimeout(timer.current); timer.current = undefined; } };
  useEffect(() => clear, []);

  const setAnchor = useCallback((el: HTMLElement | null) => { anchorRef.current = el; }, []);
  const getAnchor = useCallback(() => anchorRef.current, []);
  const show = useCallback(() => { clear(); setOpen(true); }, []);
  const hide = useCallback(() => { clear(); pinned.current = false; setOpen(false); }, []);
  const toggle = useCallback(() => {
    clear();
    setOpen((o) => { pinned.current = !o; return !o; });
  }, []);

  const control: PopoverControl = {
    open, getAnchor, show, hide, toggle,
    wrapProps: {
      onPointerEnter(e) {
        if (!hover || e.pointerType !== "mouse") return;
        clear();
        timer.current = window.setTimeout(() => setOpen(true), openDelay);
      },
      onPointerLeave(e) {
        if (e.pointerType !== "mouse" || pinned.current) return;
        clear();
        timer.current = window.setTimeout(() => setOpen(false), closeDelay);
      },
      onFocus(e) {
        if (!hover) return;
        const t = e.target as HTMLElement;
        if (t === anchorRef.current && t.matches(":focus-visible")) show();
      },
      onBlur(e) {
        const next = e.relatedTarget as Node | null;
        if (next && e.currentTarget.contains(next)) return;
        if (!pinned.current) hide();
      },
      onKeyDown(e) {
        if (e.key === "Escape" && open) { e.stopPropagation(); hide(); anchorRef.current?.focus(); }
      },
    },
  };
  return [control, setAnchor];
}
