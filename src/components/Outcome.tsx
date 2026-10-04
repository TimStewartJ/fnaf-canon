import { Icon } from "./Icon";
import { deathKindIcon, outcomeIcon } from "./icons";
import { causeLabel, outcomeInfo, outcomeOf } from "./labels";

/** What an entry of data/deaths.ts has to say for these marks: its outcome and, for the tag, its cause. */
interface Entry { outcome?: string; kind: string }

/**
 * What became of the victim of an entry in data/deaths.ts, as a small label: the skull and "Death"
 * for a death that the records state, show or firmly imply; the other mark and the entry's own
 * words ("Presumed dead", "Fate not shown", "Survives", "Death in one ending") for any other fate.
 * The words are in labels.ts (OUTCOME), and what each means is the mark's tooltip, as it is for the
 * firmness marks. Use this wherever such an entry is shown, so that nothing is called a death that
 * is not one.
 */
export function OutcomeMark({ d, className }: { d: { outcome?: string }; className?: string }) {
  const outcome = outcomeOf(d);
  const { word, help } = outcomeInfo(outcome);
  return (
    <span className={`outcome${className ? ` ${className}` : ""}`} data-outcome={outcome} title={help ? `${word}. ${help}.` : undefined}>
      <Icon icon={outcomeIcon(outcome)} /> {word}
    </span>
  );
}

/** The outcome, then the cause as far as the records give it: "Survives · By a machine". The tag every such entry carries. */
export function FateTag({ d, className }: { d: Entry; className?: string }) {
  return (
    <span className={`fate-tag${className ? ` ${className}` : ""}`}>
      <OutcomeMark d={d} />
      <span className="fate-tag__cause"><Icon icon={deathKindIcon(d.kind)} /> {causeLabel(d.kind)}</span>
    </span>
  );
}
