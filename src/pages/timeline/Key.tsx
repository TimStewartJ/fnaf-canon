import { DeathIcon, Icon, MarksKey as Key } from "../../components/ui";

/**
 * The key to the marks on the line, behind one small button: how firm an entry is, how a date is
 * known, and what marks a death. It is the shared key (components/MarksKey.tsx) with the
 * timeline's own row for deaths.
 */
export function MarksKey() {
  return (
    <Key
      scales={["status"]}
      dates
      className="tl-key"
      popClassName="tl-key__pop"
      note="An entry with no printed date is placed by what it follows. Select any date to see why it sits where it does."
    >
      <span className="pop__kind marks-key__next">On the line</span>
      <span className="marks-key__row"><Icon icon={DeathIcon} className="tl-key__death" /><span><strong>Death.</strong> A recorded death, killing or disappearance. One that a story event already tells is marked on that event.</span></span>
    </Key>
  );
}
