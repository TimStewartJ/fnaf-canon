import { X } from "lucide-react";
import type { Relation } from "../../data/schema";
import { CiteList, IconButton, StatusMark, levelOf, smartQuotes } from "../../components/ui";
import { Name } from "./Names";
import { TieSentence } from "./Ties";
import { STATUSES, TIE_FAMILY_HELP, TIE_FAMILY_LABEL, type DrawnTie, type TieFamily } from "./ties";

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
 *
 * A line whose ends were folded together is never restated in the folded names (that could say
 * something no record says). The panel gives the relations as they are recorded, then each fold
 * with its own firmness, so it is plain why the line is drawn as it is: no firmer than its weakest
 * link.
 */
export function TieBar({ tie, onClose }: { tie: DrawnTie; onClose: () => void }) {
  // Relations recorded between the two records shown, and those that reach them only through a fold.
  const direct = tie.rels.filter((r) => r.from === tie.from && r.to === tie.to);
  const folded = tie.rels.filter((r) => !direct.includes(r));
  const body = (r: Relation) => (
    <>
      {r.note && <p className="rel-bar__note">{smartQuotes(r.note)}</p>}
      <p className="rel-bar__ev"><span className="label">Evidence</span> <CiteList ids={r.evidence} /></p>
    </>
  );
  return (
    <div className="rel-bar" data-level={levelOf(tie.status)}>
      <div className="rel-bar__head">
        <p className="rel-bar__line" role="status">
          {direct.length > 0 ? <TieSentence r={direct[0]} /> : <>Between <Name id={tie.from} /> and <Name id={tie.to} /></>}
          <span className="rel-bar__status"><StatusMark value={tie.status} variant="inline" long /></span>
        </p>
        <IconButton icon={X} label="Close" onClick={onClose} />
      </div>
      {direct.length === 0 && <p className="rel-bar__note">This line reaches them through folded records, so it is drawn no firmer than its weakest link.</p>}
      <div className="rel-bar__body">
        {direct.map((r) => <div key={`${r.from}|${r.kind}|${r.to}`} className="rel-bar__rel">{body(r)}</div>)}
        {direct.length > 0 && folded.length > 0 && <p className="label rel-bar__more">Also behind this line, through folded records</p>}
        {folded.map((r) => (
          <div key={`${r.from}|${r.kind}|${r.to}`} className="rel-bar__rel">
            <p className="rel-bar__sub"><TieSentence r={r} /><span className="rel-bar__status"><StatusMark value={r.status} variant="inline" /></span></p>
            {tie.folds.filter((f) => f.record === r.from || f.record === r.to).map((f) => (
              <p key={f.record} className="rel-bar__sub rel-bar__fold"><Name id={f.record} alone /> is shown as <Name id={f.into} /><span className="rel-bar__status"><StatusMark value={f.status} variant="inline" /></span></p>
            ))}
            {body(r)}
          </div>
        ))}
      </div>
    </div>
  );
}
