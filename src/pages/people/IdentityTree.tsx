import { CiteList, FirmGlyph, GameMark, entityName, firmness, levelOf, smartQuotes } from "../../components/ui";
import { Name } from "./Names";
import { TieSaid, TieSentence } from "./Ties";
import type { Being, BeingNode, NodeKind } from "./identity";

/** What a record is to the record it hangs from. */
const KIND_WORD: Record<NodeKind, string> = { self: "", identity: "Same being", form: "Form", vessel: "Haunted", role: "Worn" };

function LinkLine() {
  return <svg className="person-tree__stub" viewBox="0 0 26 6" width="26" height="6" aria-hidden focusable="false"><line x1="1" y1="3" x2="25" y2="3" /></svg>;
}

function TreeItem({ node, currentId, rootName }: { node: BeingNode; currentId: string; rootName: string }) {
  const current = node.id === currentId;
  const root = node.kind === "self";
  const step = firmness("status", node.stepStatus);
  return (
    <li className={`person-tree__item${root ? " is-root" : ""}${current ? " is-current" : ""}`}>
      <div className="person-tree__row" data-level={levelOf(node.stepStatus)}>
        {!root && <span className="person-tree__link" aria-hidden><LinkLine /><FirmGlyph level={step.level} /></span>}
        <div className="person-tree__main">
          <p className="person-tree__name">
            {current ? <span aria-current="page"><Name id={node.id} as="plain" alone /></span> : <Name id={node.id} as="title" alone />}
            <GameMark id={node.person.firstAppearance} />
            {current && <span className="chip" data-tone="accent">This page</span>}
          </p>
          <p className="person-tree__how">
            {root
              ? "The figure the others fold into"
              : node.step?.says ? step.word
              : <>{KIND_WORD[node.kind]}<span aria-hidden> · </span><span className="sr-only">, </span>{step.word}</>}
          </p>
          {/* The link in the records' own words, where the data gives them: "same being" or "form" would say more than they do. */}
          {!root && node.step?.says && (
            <p className="person-tree__said">{node.step.from === node.id ? <TieSaid r={node.step} capital /> : <TieSentence r={node.step} />}.</p>
          )}
          {node.step?.note && <p className="person-tree__note">{smartQuotes(node.step.note)}</p>}
          {!root && node.status !== node.stepStatus && (
            <p className="person-tree__note">A link higher up is weaker, so the tie to {rootName} is {firmness("status", node.status).word.toLowerCase()} at best.</p>
          )}
          {node.also.map((r) => (
            <p key={`${r.from}|${r.kind}|${r.to}`} className="person-tree__also" data-level={levelOf(r.status)}>
              <span className="person-tree__also-line">
                <FirmGlyph level={levelOf(r.status)} /> Also: <TieSentence r={r} /> <span className="person-tree__also-status">{firmness("status", r.status).word}</span>
              </span>
              <CiteList ids={r.evidence} variant="code" />
            </p>
          ))}
        </div>
        {node.step && <div className="person-tree__ev"><CiteList ids={node.step.evidence} variant="code" /></div>}
      </div>
      {node.children.length > 0 && (
        <ul className="person-tree__list">
          {node.children.map((c) => <TreeItem key={c.id} node={c} currentId={currentId} rootName={rootName} />)}
        </ul>
      )}
    </li>
  );
}

/**
 * The records the model folds into one being, as a tree. Each record hangs from the one it is tied
 * to by a line drawn in the firmness of that link (solid, dashed, dotted), so the weakest link in
 * any chain can be seen by following it up. The evidence for each link is one tap away.
 */
export function IdentityTree({ being, currentId }: { being: Being; currentId: string }) {
  return (
    <ul className="person-tree" aria-label={`The figures the model folds into ${entityName(being.root.id)}`}>
      <TreeItem node={being.root} currentId={currentId} rootName={entityName(being.root.id)} />
    </ul>
  );
}
