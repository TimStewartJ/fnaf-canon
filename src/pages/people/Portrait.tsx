import type { CSSProperties } from "react";
import { Figure, imgSize } from "../../components/ui";

/**
 * The image at the top of a dossier, shown as an exhibit (caption, credit, click to enlarge) and
 * never blown up past the point where it stays sharp: pixel art (the PNG stills) may double in
 * size, where Figure keeps it crisp; anything else stays at or below its own size.
 */
export function Portrait({ file }: { file: string }) {
  const size = imgSize(file);
  const cap = size ? size.width * (/\.png$/i.test(file) ? 2 : 1) : null;
  return (
    <div className="ppl-portrait" style={cap ? ({ "--portrait-w": `${cap}px` } as CSSProperties) : undefined}>
      <Figure file={file} eager />
    </div>
  );
}
