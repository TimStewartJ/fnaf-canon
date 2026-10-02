import type { Certainty, Confidence, Status } from "../data/schema";
import { SCALE_NAME, firmness, type FirmnessScale, type Level } from "./labels";

/** The shared glyph: a filled disc (firm), a half disc (partial) or a ring (tentative). */
export function FirmGlyph({ level, className }: { level: Level; className?: string }) {
  return (
    <svg className={className ? `firm-glyph ${className}` : "firm-glyph"} viewBox="0 0 12 12" width="0.72em" height="0.72em" aria-hidden focusable="false">
      <circle cx="6" cy="6" r="4.4" fill={level === "firm" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" />
      {level === "partial" && <path d="M6 1.6a4.4 4.4 0 0 0 0 8.8z" fill="currentColor" />}
    </svg>
  );
}

type Variant = "tag" | "inline" | "glyph";

/**
 * How firm something is, in the archive's one grammar: glyph plus word.
 *  - variant "tag" (default): a small bordered label, for cards and headers
 *  - variant "inline": glyph and word in running interface text
 *  - variant "glyph": the glyph alone; the word is kept for screen readers and the tooltip
 * `long` uses the full phrase ("Strong inference", "Medium confidence") instead of the short word.
 */
export function Firmness({ scale, value, variant = "tag", long = false, className }: { scale: FirmnessScale; value: string; variant?: Variant; long?: boolean; className?: string }) {
  const f = firmness(scale, value);
  const word = long ? f.word : f.short;
  return (
    <span className={`firm firm--${variant}${className ? ` ${className}` : ""}`} data-level={f.level} data-scale={scale} title={`${SCALE_NAME[scale]}: ${f.word}. ${f.help}`}>
      <FirmGlyph level={f.level} />
      {variant === "glyph" ? <span className="sr-only">{SCALE_NAME[scale]}: {f.word}</span> : <span className="firm__word">{word}</span>}
    </span>
  );
}

/** Evidence certainty: stated, shown or implied. */
export function CertaintyMark({ value, variant, long }: { value: Certainty | string; variant?: Variant; long?: boolean }) {
  return <Firmness scale="certainty" value={value} variant={variant} long={long} />;
}
/** Link and event status: canon, strong or theory. */
export function StatusMark({ value, variant, long }: { value: Status; variant?: Variant; long?: boolean }) {
  return <Firmness scale="status" value={value} variant={variant} long={long} />;
}
/** Chapter and beat confidence: high, medium or low. */
export function ConfidenceMark({ value, variant, long }: { value: Confidence; variant?: Variant; long?: boolean }) {
  return <Firmness scale="confidence" value={value} variant={variant} long={long} />;
}
