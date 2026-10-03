import { useEffect, useRef, type ButtonHTMLAttributes, type HTMLAttributes, type KeyboardEvent, type ReactNode, type Ref } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { ArrowUpRight, Search, type LucideIcon } from "lucide-react";
import { Icon } from "./Icon";

type Variant = "default" | "primary" | "quiet";
const btnClass = (variant: Variant, size: "md" | "sm", className?: string) =>
  `btn${variant !== "default" ? ` btn--${variant}` : ""}${size === "sm" ? " btn--sm" : ""}${className ? ` ${className}` : ""}`;

interface BtnExtras { variant?: Variant; size?: "md" | "sm"; icon?: LucideIcon; iconEnd?: LucideIcon }

/** A button. variant: "default" (outlined), "primary" (the one main action on a view), "quiet" (text only). */
export function Button({ variant = "default", size = "md", icon, iconEnd, className, children, type = "button", ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & BtnExtras) {
  return (
    <button type={type} className={btnClass(variant, size, className)} {...rest}>
      {icon && <Icon icon={icon} />}{children}{iconEnd && <Icon icon={iconEnd} />}
    </button>
  );
}

/** A router link that looks like a button. */
export function ButtonLink({ variant = "default", size = "md", icon, iconEnd, className, children, ...rest }: LinkProps & BtnExtras) {
  return (
    <Link className={btnClass(variant, size, className)} {...rest}>
      {icon && <Icon icon={icon} />}{children}{iconEnd && <Icon icon={iconEnd} />}
    </Link>
  );
}

/** A square button holding only an icon. `label` is required: it is the accessible name and the tooltip. */
export function IconButton({ icon, label, className, type = "button", ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { icon: LucideIcon; label: string }) {
  return (
    <button type={type} className={`icon-btn${className ? ` ${className}` : ""}`} aria-label={label} title={label} {...rest}>
      <Icon icon={icon} />
    </button>
  );
}

/**
 * A link that leaves the archive. It opens in a new tab, so the reader's place here is kept; it
 * carries the arrow that marks it, and says "opens in a new tab" to a screen reader.
 */
export function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<Icon icon={ArrowUpRight} /><span className="sr-only"> (opens in a new tab)</span></a>;
}

/** A small static label. For a clickable filter use <FilterChip>; for a link use <Tag>. */
export function Chip({ children, tone, className }: { children: ReactNode; tone?: "accent" | "ok" | "tension" | "open" | "neutral"; className?: string }) {
  return <span className={`chip${className ? ` ${className}` : ""}`} data-tone={tone}>{children}</span>;
}

/** A link styled as a small tag, e.g. "#remnant" or "See on the timeline". */
export function Tag({ className, children, ...rest }: LinkProps) {
  return <Link className={`tag${className ? ` ${className}` : ""}`} {...rest}>{children}</Link>;
}

/** A toggleable filter chip. `on` is announced with aria-pressed. `count` shows a trailing number. */
export function FilterChip({ on, count, className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { on: boolean; count?: number }) {
  return (
    <button type="button" className={`chip-btn${on ? " on" : ""}${className ? ` ${className}` : ""}`} aria-pressed={on} {...rest}>
      {children}{count != null && <span className="chip-btn__count">{count}</span>}
    </button>
  );
}

/** An on/off switch with a text label. */
export function Toggle({ on, onChange, children, className }: { on: boolean; onChange: (on: boolean) => void; children: ReactNode; className?: string }) {
  return (
    <button type="button" className={`toggle${on ? " on" : ""}${className ? ` ${className}` : ""}`} role="switch" aria-checked={on} onClick={() => onChange(!on)}>
      <span className="toggle__knob" aria-hidden />
      <span>{children}</span>
    </button>
  );
}

/**
 * Tabs that switch a view in place. The caller renders the selected view; wrap it in <TabPanel>
 * with the same `panel` id and the two are tied together for assistive technology.
 * Keyboard: Tab reaches the selected tab only; Left, Right, Home and End move between tabs;
 * Enter or Space chooses the one in focus (moving does not choose, because choosing can be a
 * step in the history). When the tabs do not fit they stay on one line and scroll sideways,
 * with the selected one in view.
 */
export function Tabs<T extends string>({ tabs, value, onChange, label, panel }: { tabs: { id: T; label: ReactNode }[]; value: T; onChange: (id: T) => void; label: string; panel?: string }) {
  const list = useRef<HTMLDivElement | null>(null);
  // Which edges have more tabs beyond them, for the fade that says so.
  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const mark = () => {
      el.toggleAttribute("data-more-start", el.scrollLeft > 2);
      el.toggleAttribute("data-more-end", el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    };
    const on = el.querySelector<HTMLElement>('[aria-selected="true"]');
    // Bring the selected tab into view by moving the strip only (scrollIntoView could move the page).
    if (on) {
      const pad = 24;
      if (on.offsetLeft - pad < el.scrollLeft) el.scrollLeft = on.offsetLeft - pad;
      else if (on.offsetLeft + on.offsetWidth + pad > el.scrollLeft + el.clientWidth) el.scrollLeft = on.offsetLeft + on.offsetWidth + pad - el.clientWidth;
    }
    mark();
    const resized = new ResizeObserver(mark);
    resized.observe(el);
    el.addEventListener("scroll", mark, { passive: true });
    return () => { resized.disconnect(); el.removeEventListener("scroll", mark); };
  }, [value, tabs.length]);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step && e.key !== "Home" && e.key !== "End") return;
    const all = [...e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')];
    const at = all.indexOf(document.activeElement as HTMLElement);
    if (at < 0) return;
    e.preventDefault();
    all[e.key === "Home" ? 0 : e.key === "End" ? all.length - 1 : (at + step + all.length) % all.length]?.focus();
  };
  return (
    <div className="tabs" role="tablist" aria-label={label} ref={list} onKeyDown={onKeyDown}>
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          id={panel ? `${panel}-tab-${t.id}` : undefined}
          aria-selected={t.id === value}
          aria-controls={panel}
          tabIndex={t.id === value ? 0 : -1}
          className={`tab${t.id === value ? " on" : ""}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** The view that <Tabs panel={id}> switches: give it the same id and the tab that is selected. */
export function TabPanel({ id, tab, children, ...rest }: HTMLAttributes<HTMLDivElement> & { id: string; tab: string; ref?: Ref<HTMLDivElement> }) {
  return <div {...rest} id={id} role="tabpanel" aria-labelledby={`${id}-tab-${tab}`}>{children}</div>;
}

/**
 * A small set of mutually exclusive options shown side by side. It is announced as a group of
 * radio buttons and behaves like one: Tab reaches the chosen option only, and the arrow keys
 * (with Home and End) move the choice, taking focus with it.
 */
export function Segmented<T extends string>({ options, value, onChange, label }: { options: { id: T; label: ReactNode }[]; value: T; onChange: (id: T) => void; label: string }) {
  const chosen = options.findIndex((o) => o.id === value);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const to = e.key === "Home" ? 0 : e.key === "End" ? options.length - 1 : (Math.max(chosen, 0) + step + options.length) % options.length;
    const next = options[to];
    if (!next) return;
    if (next.id !== value) onChange(next.id);
    (e.currentTarget.children[to] as HTMLElement | undefined)?.focus();
  };
  return (
    <div className="segmented" role="radiogroup" aria-label={label} onKeyDown={onKeyDown}>
      {options.map((o, i) => (
        <button key={o.id} type="button" role="radio" aria-checked={o.id === value} tabIndex={i === Math.max(chosen, 0) ? 0 : -1} className={`segmented__opt${o.id === value ? " on" : ""}`} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** A text search box with a leading icon. */
export function SearchField({ value, onChange, placeholder, label, className }: { value: string; onChange: (v: string) => void; placeholder?: string; label: string; className?: string }) {
  return (
    <label className={`search-field${className ? ` ${className}` : ""}`}>
      <Icon icon={Search} />
      <span className="sr-only">{label}</span>
      <input type="search" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

/** A panel of filters. Put <FilterGroup>s, selects and checkboxes inside. Everything wraps; nothing side-scrolls. */
export function FilterBar({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`filter-bar${className ? ` ${className}` : ""}`}>{children}</div>;
}

/** A labelled row of chips or controls inside a <FilterBar>. */
export function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="filter-group" role="group" aria-label={label}>
      <span className="filter-group__label">{label}</span>
      <div className="filter-group__items">{children}</div>
    </div>
  );
}
