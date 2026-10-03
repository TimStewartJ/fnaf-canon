import type { ReactNode } from "react";
import { CircleHelp } from "lucide-react";
import { CERTAINTY, CONFIDENCE, DATE_KIND, DATE_KINDS, SCALE_ASKS, STATUS, type FirmnessInfo, type FirmnessScale } from "./labels";
import { FirmGlyph } from "./Firmness";
import { Icon } from "./Icon";
import { Pop } from "./Popover";
import { usePopover } from "./popover";
import { DateGlyph } from "./RichText";

const ROWS: Record<FirmnessScale, FirmnessInfo[]> = {
  certainty: [CERTAINTY.stated, CERTAINTY.shown, CERTAINTY.implied],
  status: [STATUS.canon, STATUS.strong, STATUS.theory],
  confidence: [CONFIDENCE.high, CONFIDENCE.medium, CONFIDENCE.low],
};

/**
 * The key to the marks a page uses, behind one small "Key" button. Offer it wherever a page
 * relies on marks whose words are not printed beside every one of them (a row of source chips,
 * a column of date pills). The words come from labels.ts, so they match the tooltips, the
 * legends and the date popovers everywhere.
 *  - scales    the firmness scales the page uses, in the order to list them
 *  - dates     the page shows date pills: adds the kinds of date
 *  - children  rows of the page's own, added under the first scale (use .marks-key__row)
 *  - note      a closing line
 */
export function MarksKey({ scales, dates = false, children, note, className, popClassName }: { scales: FirmnessScale[]; dates?: boolean; children?: ReactNode; note?: ReactNode; className?: string; popClassName?: string }) {
  const [pop, anchor] = usePopover({ hover: false });
  return (
    <span className={`marks-key${className ? ` ${className}` : ""}`} {...pop.wrapProps}>
      <button type="button" ref={anchor} className="btn btn--quiet btn--sm" aria-expanded={pop.open} onClick={pop.toggle}>
        <Icon icon={CircleHelp} /> Key
      </button>
      {pop.open && (
        <Pop control={pop} role="group" label="Key to the marks" align="end" className={`marks-key__pop${popClassName ? ` ${popClassName}` : ""}`}>
          <span className="marks-key__grid">
            <span className="marks-key__col">
              {scales.map((scale, i) => (
                <span key={scale} className={`marks-key__group${i > 0 ? " marks-key__next" : ""}`}>
                  <span className="pop__kind">{SCALE_ASKS[scale]}</span>
                  {ROWS[scale].map((f) => (
                    <span key={f.word} className="marks-key__row"><FirmGlyph level={f.level} /><span><strong>{f.word}.</strong> {f.help}.</span></span>
                  ))}
                  {i === 0 && children}
                </span>
              ))}
            </span>
            {dates && (
              <span className="marks-key__col">
                <span className="pop__kind">{SCALE_ASKS.date}</span>
                {DATE_KINDS.map((k) => (
                  <span key={k} className="marks-key__row"><DateGlyph kind={k} /><span><strong>{DATE_KIND[k].label}.</strong> {DATE_KIND[k].help}.</span></span>
                ))}
              </span>
            )}
          </span>
          {note && <span className="pop__meta marks-key__foot">{note}</span>}
        </Pop>
      )}
    </span>
  );
}
