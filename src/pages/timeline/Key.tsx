import { DeathIcon, FateIcon, Icon, MarksKey as Key, OUTCOME, OUTCOMES } from "../../components/ui";

/** The other fates as the entries print them, in one phrase: "Presumed dead, Fate not shown, Survives or Death in one ending". */
const OTHER_FATES = OUTCOMES.filter((o) => o !== "death").map((o) => OUTCOME[o].word);
const otherFates = OTHER_FATES.length > 1 ? `${OTHER_FATES.slice(0, -1).join(", ")} or ${OTHER_FATES[OTHER_FATES.length - 1]}` : OTHER_FATES.join("");

/**
 * The key to the marks on the line, behind one small button: how firm an entry is, how a date is
 * known, and what the second layer's two marks mean. It is the shared key (components/MarksKey.tsx)
 * with the timeline's own rows. The skull is the death's alone; every other fate has the other mark
 * and its own words, which the key lists as components/labels.ts (OUTCOME) has them, so the key and
 * the entries cannot drift apart. What each of those words means is on the mark itself (its tooltip).
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
      <span className="pop__kind marks-key__next">Deaths and other fates</span>
      <span className="marks-key__row"><Icon icon={DeathIcon} className="tl-key__death" /><span><strong>{OUTCOME.death.word}.</strong> {OUTCOME.death.help}.</span></span>
      <span className="marks-key__row"><Icon icon={FateIcon} className="tl-key__fate" /><span><strong>Other fate.</strong> Not a recorded death, and not counted as one. The entry says what instead: {otherFates}.</span></span>
      <span className="marks-key__row"><span aria-hidden /><span>One that a story event already tells is marked on that event.</span></span>
    </Key>
  );
}
