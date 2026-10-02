import type { LucideIcon } from "lucide-react";

/**
 * Draws a Lucide icon at the site's stroke weight. Decorative by default (hidden from assistive
 * technology); pass `label` when the icon is the only thing carrying a meaning.
 */
export function Icon({ icon: Glyph, size = "1.1em", label, className }: { icon: LucideIcon; size?: number | string; label?: string; className?: string }) {
  return (
    <Glyph
      className={className ? `icon ${className}` : "icon"}
      size={size}
      strokeWidth={1.75}
      absoluteStrokeWidth={false}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable={false}
    />
  );
}
