import type { Relation, Status } from "../../data/schema";
import { X } from "lucide-react";
import { CiteList, IconButton, StatusMark, levelOf, smartQuotes } from "../../components/ui";
import { TieSentence } from "./Ties";
import { STATUSES, TIE_FAMILY_HELP, TIE_FAMILY_LABEL, plural, type TieFamily } from "./ties";

/** A tie as the diagrams draw it: one line, standing for one relation or for several whose ends were folded together. */
export interface DrawnTie {
  key: string;
  from: string;
  to: string;
  kind: string;
  status: Status;
  rels: readonly Relation[];
}

function Sample({ dash }: { dash?: boolean }) {
  return <svg className={`rel-key__line${dash ? "" : " rel-key__line--plain"}`} viewBox="0 0 30 6" width="30" height="6" aria-hidden focusable="false"><line x1="1" y1="3" x2="29" y2="3" /></svg>;
}

/**
 * The key to the lines of a diagram, generated from the firmness grammar and the tie families:
 * line style says how firm a tie is (the same solid, dashed, dotted as everywhere else), line
 * colour says what kind of tie it is. Pass only the families the diagram is showing.
 */
export function TieLegend({ families }: { families: readonly TieFamily[] }) {
  return (
    <div className="rel-key">
      <p className="rel-key__row">
        <span className="label">Line style</span>
        {STATUSES.map((s) => (
          <span key={s} className="rel-key__item" data-level={levelOf(s)}><Sample dash /><StatusMark value={s} variant="inline" long /></span>
        ))}
      </p>
      {families.length > 0 && (
        <p className="rel-key__row">
          <span className="label">Line colour</span>
          {families.map((f) => (
            <span key={f} className="rel-key__item rel-edge" data-tie={f} title={TIE_FAMILY_HELP[f]}><Sample />{TIE_FAMILY_LABEL[f]}</span>
          ))}
        </p>
      )}
    </div>
  );
}

/**
 * The tie picked in a diagram: what it says, how firm it is, the note, and the records behind it
 * as source chips that open in the drawer. It sticks to the bottom of the diagram's frame so it is
 * in view wherever the reader is looking.
 */
export function TieBar({ tie, onClose }: { tie: DrawnTie; onClose: () => void }) {
  const merged = tie.rels.length > 1;
  return (
    <div className="rel-bar" data-level={levelOf(tie.status)}>
      <div className="rel-bar__head">
        <p className="rel-bar__line" role="status">
          <TieSentence r={tie} /> <StatusMark value={tie.status} variant="inline" long />
        </p>
        <IconButton icon={X} label="Close" onClick={onClose} />
      </div>
      {merged && <p className="rel-bar__note">This line stands for {plural(tie.rels.length, "relation")} whose ends are folded together.</p>}
      <div className="rel-bar__body">
        {tie.rels.map((r) => (
          <div key={`${r.from}|${r.kind}|${r.to}`} className="rel-bar__rel">
            {merged && <p className="rel-bar__sub"><TieSentence r={r} /> <StatusMark value={r.status} variant="inline" /></p>}
            {r.note && <p className="rel-bar__note">{smartQuotes(r.note)}</p>}
            <p className="rel-bar__ev"><span className="label">Evidence</span> <CiteList ids={r.evidence} /></p>
          </div>
        ))}
      </div>
    </div>
  );
}
