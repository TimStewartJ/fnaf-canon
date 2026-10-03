import type { ReactNode } from "react";
import type { Relation, Status } from "../../data/schema";
import { CiteList, FirmGlyph, firmness, levelOf, smartQuotes } from "../../components/ui";
import { GroupLabel } from "./Dossier";
import { Name } from "./Names";
import { TIE_FAMILY_LABEL, byFamily, sentenceCase, tieSaid, tieWords, type TieTold } from "./ties";

/**
 * One tie as a row: the firmness glyph, a sentence, the firmness in words, a note, and the
 * evidence as source chips (each opens the record in the drawer).
 */
export function TieRow({ status, children, note, evidence, extra }: { status: Status; children: ReactNode; note?: string; evidence: string[]; extra?: ReactNode }) {
  return (
    <li className="ppl-tie" data-level={levelOf(status)}>
      <span className="ppl-tie__mark" aria-hidden><FirmGlyph level={levelOf(status)} /></span>
      <div className="ppl-tie__main">
        <p className="ppl-tie__line">{children} <span className="ppl-tie__status">{firmness("status", status).word}</span></p>
        {note && <p className="ppl-tie__note">{smartQuotes(note)}</p>}
        {extra}
      </div>
      <div className="ppl-tie__ev"><CiteList ids={evidence} variant="code" /></div>
    </li>
  );
}

/**
 * The sentence of a tie with both ends named: "William Afton is the parent of Michael". Where the
 * data gives the tie in the records' own words, those stand in place of the kind's verb.
 */
export function TieSentence({ r }: { r: TieTold }) {
  const { before, after } = tieSaid(r);
  return <><Name id={r.from} alone />{before && ` ${before}`} <Name id={r.to} />{after}</>;
}

/**
 * A tie in the records' own words, told by its first end, without that end's name: "Calls William
 * Afton “old friend”". `capital` is for a phrase that opens a row or a sentence.
 */
export function TieSaid({ r, capital = false }: { r: TieTold; capital?: boolean }) {
  const { before, after } = tieSaid(r);
  return before
    ? <>{capital ? sentenceCase(before) : before} <Name id={r.to} />{after}</>
    : <><Name id={r.to} alone={capital} />{after}</>;
}

/**
 * A person's ties to others, each told from that person's side ("Parent of …", "Killed by …").
 * A tie that belongs to another record of the same person says so ("As the purple man, killed …").
 * A tie the data gives in the records' own words runs from its first name to its second and
 * cannot be turned round: the first end tells it ("Calls … “old friend”"), and on the page of the
 * second it is given whole.
 */
export function OwnTies({ rels, all = rels, pageId, scope }: { rels: readonly Relation[]; all?: readonly Relation[]; pageId: string; scope: ReadonlySet<string> }) {
  const groups = byFamily(rels, (r) => r.kind);
  const totals = new Map(byFamily(all, (r) => r.kind).map((g) => [g.family, g.items.length]));
  const grouped = totals.size > 1;
  return (
    <>
      {groups.map((g) => (
        <div key={g.family} className="ppl-tie-group">
          {grouped && <GroupLabel count={totals.get(g.family)}>{TIE_FAMILY_LABEL[g.family]}</GroupLabel>}
          <ul className="ppl-ties">
            {g.items.map((r) => {
              const w = tieWords(r.kind);
              const fromSide = r.from === pageId ? true : r.to === pageId ? false : scope.has(r.from);
              const subject = fromSide ? r.from : r.to;
              const other = fromSide ? r.to : r.from;
              const phrase = fromSide ? w.own : w.other;
              const viaAlias = subject !== pageId;
              return (
                <TieRow key={`${r.from}|${r.kind}|${r.to}`} status={r.status} note={r.note} evidence={r.evidence}>
                  {!w.known || (r.says && !fromSide) ? <TieSentence r={r} />
                    : r.says ? (viaAlias ? <>As <Name id={subject} />, <TieSaid r={r} /></> : <TieSaid r={r} capital />)
                    : viaAlias ? <>As <Name id={subject} />, {phrase} <Name id={other} /></>
                    : <>{sentenceCase(phrase)} <Name id={other} /></>}
                </TieRow>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}
