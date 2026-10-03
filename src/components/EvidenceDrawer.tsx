import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Evidence } from "../data/schema";
import { backlinksFor, evidenceById } from "../data/store";
import { type DrawerState, useEvidenceDrawer } from "./evidenceDrawer";
import { useModalDialog } from "./hooks";
import { firmness } from "./labels";
import { chapterPath, evidencePath } from "./links";
import { ButtonLink, ExternalLink, IconButton, Tag } from "./controls";
import { EvidenceRow } from "./EvidenceCard";
import { Figure } from "./Figure";
import { Firmness } from "./Firmness";
import { Callout, Fact, Facts } from "./layout";
import { EntityLink, EvidenceDate, SourceLine } from "./RichText";
import { smartQuotes, sourceWords } from "./typography";

function Record({ e }: { e: Evidence }) {
  const bl = backlinksFor(e.id);
  const related = [...new Set([...(e.related ?? []), ...bl.evidence.map((b) => b.id)])].map((id) => evidenceById.get(id)).filter((r): r is Evidence => !!r && r.id !== e.id);
  const relatedIds = related.map((r) => r.id);
  const entities = [...(e.people ?? []), ...(e.places ?? [])];
  const chapters = [...bl.theory, ...bl.filed.filter((s) => !bl.theory.includes(s))];
  return (
    <>
      <p className="drawer__source"><SourceLine e={e} /></p>
      <h2 className="drawer__title" id="drawer-title" tabIndex={-1}>{smartQuotes(e.title)}</h2>
      <p className="drawer__claim">{smartQuotes(e.claim)}</p>
      {e.quote && <blockquote className="drawer__quote">“{sourceWords(e.quote)}”</blockquote>}
      {e.image && <Figure file={e.image} />}
      <Facts className="drawer__facts">
        <Fact label="Certainty"><Firmness scale="certainty" value={e.certainty} variant="inline" /> <span className="muted">{firmness("certainty", e.certainty).help}.</span></Fact>
        <Fact label="In-universe time"><EvidenceDate e={e} self />{e.when.basis && <span className="muted"> {smartQuotes(e.when.basis)}</span>}</Fact>
        {entities.length > 0 && <Fact label="People and places"><span className="cluster">{entities.map((id) => <EntityLink key={id} id={id} variant="chip" />)}</span></Fact>}
        {!!e.tags?.length && <Fact label="Tags"><span className="cluster">{e.tags.map((t) => <Tag key={t} to={`/evidence?tag=${t}`}>#{t}</Tag>)}</span></Fact>}
        {e.url && <Fact label="Original"><ExternalLink href={e.url} className="drawer__url">{e.url.replace(/^https?:\/\//, "")}</ExternalLink></Fact>}
      </Facts>
      {e.notes && <Callout tone="note" title="Notes and caveats"><p>{sourceWords(e.notes)}</p></Callout>}
      {chapters.length > 0 && (
        <section className="drawer__section">
          <h3 className="label">In the theory</h3>
          <ul className="plain">
            {chapters.map((s) => (
              <li key={s.id}>
                <Link to={chapterPath(s.id)}>{smartQuotes(s.title)}</Link>
                {s.counterEvidence?.includes(e.id) && <span className="chip" data-tone="tension">pushes back</span>}
                {!bl.theory.includes(s) && <span className="chip">filed, not cited</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
      {related.length > 0 && (
        <section className="drawer__section">
          <h3 className="label">Related records</h3>
          <ul className="ev-list">{related.map((r) => <EvidenceRow key={r.id} e={r} group={relatedIds} claim={false} />)}</ul>
        </section>
      )}
    </>
  );
}

/**
 * The evidence drawer. Rendered by the shell's DrawerHost (never directly by pages): a side drawer
 * on desktop, a bottom sheet on a phone. Escape, the close button, a click outside, or Back closes it.
 */
export default function EvidenceDrawer({ state, onClose }: { state: DrawerState; onClose: () => void }) {
  const drawer = useEvidenceDrawer();
  // Its own state lives in the history (Back closes it), so it does not also close itself on Back.
  const dialogProps = useModalDialog(true, onClose, { back: false });
  const dialog = dialogProps.ref;
  // Focus starts at the record's title: reading keys (Page Down, Space) then move the record, and
  // Tab goes on into it. The same when the record changes under a reader whose focus was inside
  // the one that has gone; on the pager's own buttons it stays put.
  useLayoutEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const at = document.activeElement;
    if (at && at !== el && el.contains(at) && at.closest(".drawer__bar") && at.getAttribute("aria-label") !== "Close") return;
    el.querySelector<HTMLElement>("#drawer-title")?.focus({ preventScroll: true });
  }, [dialog, state.id]);
  const e = evidenceById.get(state.id);
  const group = (state.group ?? []).filter((id) => evidenceById.has(id));
  const idx = group.indexOf(state.id);
  const paged = group.length > 1 && idx >= 0;
  const go = (d: number) => drawer.open(group[(idx + d + group.length) % group.length], group, state.of);
  return (
    <dialog
      className="drawer"
      aria-labelledby="drawer-title"
      {...dialogProps}
      onKeyDown={(ev) => {
        // Keys pressed in something opened over the drawer (an enlarged image) belong to that.
        const from = ev.target as HTMLElement;
        if (!paged || from.closest("dialog") !== ev.currentTarget || from.closest("input, textarea, select")) return;
        if (ev.key === "ArrowLeft") go(-1);
        if (ev.key === "ArrowRight") go(1);
      }}
    >
      <header className="drawer__bar">
        <span className="label">{paged ? `Record ${idx + 1} of ${group.length} ${state.of ?? "in this list"}` : "Evidence record"}</span>
        {paged && (
          <span className="drawer__pager">
            <IconButton icon={ChevronLeft} label="Previous record" onClick={() => go(-1)} />
            <IconButton icon={ChevronRight} label="Next record" onClick={() => go(1)} />
          </span>
        )}
        <IconButton icon={X} label="Close" onClick={onClose} />
      </header>
      <div className="drawer__body" key={state.id}>
        {e ? <Record e={e} /> : <p className="muted" id="drawer-title" tabIndex={-1}>There is no evidence record with the id “{state.id}”.</p>}
      </div>
      {e && (
        <footer className="drawer__foot">
          <ButtonLink to={evidencePath(e.id)} iconEnd={ArrowRight}>Open the full record</ButtonLink>
          <span className="drawer__id"><span className="drawer__id-label">Record id</span> {e.id}</span>
        </footer>
      )}
    </dialog>
  );
}
