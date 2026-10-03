import { CircleHelp } from "lucide-react";
import { DATE_KIND, DATE_KINDS, DateGlyph, DeathIcon, FirmGlyph, Icon, Pop, STATUS, usePopover } from "../../components/ui";
import { STATUSES } from "./model";

/**
 * The key to the marks on the line, behind one small button: how firm an entry is, how a date is
 * known, and what marks a death. The words come from the shared labels, so they match the tooltips
 * and the date popovers.
 */
export function MarksKey() {
  const [pop, anchor] = usePopover({ hover: false });
  return (
    <span className="tl-key" {...pop.wrapProps}>
      <button type="button" ref={anchor} className="btn btn--quiet btn--sm" aria-expanded={pop.open} onClick={pop.toggle}>
        <Icon icon={CircleHelp} /> Key
      </button>
      {pop.open && (
        <Pop control={pop} role="group" label="Key to the marks" className="tl-key__pop">
          <span className="tl-key__grid">
            <span className="tl-key__col">
              <span className="pop__kind">How firm an entry is</span>
              {STATUSES.map((s) => (
                <span key={s} className="tl-key__row"><FirmGlyph level={STATUS[s].level} /><span><strong>{STATUS[s].word}.</strong> {STATUS[s].help}.</span></span>
              ))}
              <span className="pop__kind tl-key__next">On the line</span>
              <span className="tl-key__row"><Icon icon={DeathIcon} className="tl-key__death" /><span><strong>Death.</strong> A recorded death, killing or disappearance. One that a story event already tells is marked on that event.</span></span>
            </span>
            <span className="tl-key__col">
              <span className="pop__kind">How a date is known</span>
              {DATE_KINDS.map((k) => (
                <span key={k} className="tl-key__row"><DateGlyph kind={k} /><span><strong>{DATE_KIND[k].label}.</strong> {DATE_KIND[k].help}.</span></span>
              ))}
            </span>
          </span>
          <span className="pop__meta tl-key__foot">An entry with no printed date is placed by what it follows. Select any date to see why it sits where it does.</span>
        </Pop>
      )}
    </span>
  );
}
