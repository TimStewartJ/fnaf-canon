import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { gameById } from "../data/store";
import { gameMeta } from "../data/gameMeta";

/**
 * Names a source (a game, or Scott's own words): a small hue swatch plus the short code.
 *  - variant "code" (default): swatch and short code, e.g. "FNaF2"
 *  - variant "full": swatch and the full title
 *  - variant "dot": the swatch alone, with the title as tooltip and for screen readers
 * `link` makes it a link to the source's page.
 */
export function GameMark({ id, variant = "code", link = false, className }: { id: string; variant?: "code" | "full" | "dot"; link?: boolean; className?: string }) {
  const title = gameById.get(id as never)?.title ?? id;
  const meta = gameMeta(id);
  const cls = `game game--${variant}${className ? ` ${className}` : ""}`;
  const style = { "--hue": meta.color } as CSSProperties;
  const body = (
    <>
      <span className="game__swatch" aria-hidden />
      {variant === "dot" ? <span className="sr-only">{title}</span> : <span className="game__name">{variant === "full" ? title : meta.short}</span>}
    </>
  );
  if (link) return <Link to={`/sources/${id}`} className={cls} style={style} title={variant === "full" ? undefined : title}>{body}</Link>;
  return <span className={cls} style={style} title={variant === "full" ? undefined : title}>{body}</span>;
}
