import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { Search, type LucideIcon } from "lucide-react";
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

/** Tabs that switch a view in place. The caller renders the selected panel. */
export function Tabs<T extends string>({ tabs, value, onChange, label }: { tabs: { id: T; label: ReactNode }[]; value: T; onChange: (id: T) => void; label: string }) {
  return (
    <div className="tabs" role="tablist" aria-label={label}>
      {tabs.map((t) => (
        <button key={t.id} type="button" role="tab" aria-selected={t.id === value} className={`tab${t.id === value ? " on" : ""}`} onClick={() => onChange(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** A small set of mutually exclusive options shown side by side. */
export function Segmented<T extends string>({ options, value, onChange, label }: { options: { id: T; label: ReactNode }[]; value: T; onChange: (id: T) => void; label: string }) {
  return (
    <div className="segmented" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" role="radio" aria-checked={o.id === value} className={`segmented__opt${o.id === value ? " on" : ""}`} onClick={() => onChange(o.id)}>
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
