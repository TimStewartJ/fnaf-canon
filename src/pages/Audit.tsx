import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { auditLedger, type AuditOutcome } from "../data/audit";
import { CiteList, RichText } from "../components/ui";

const OUTCOME: Record<AuditOutcome, { label: string; help: string }> = {
  resolved: { label: "Resolved", help: "The contradiction dissolves on a closer reading of the records" },
  corrected: { label: "Corrected", help: "A record or claim was wrong and has been fixed" },
  downgraded: { label: "Downgraded", help: "The claim stays, at a lower confidence or status" },
  reframed: { label: "Reframed", help: "The claim was rewritten to say only what the records support" },
  open: { label: "Open", help: "A real tension the games leave unresolved" },
};

export default function Audit() {
  const [filter, setFilter] = useState<AuditOutcome | "">("");
  const counts = useMemo(() => {
    const c = new Map<AuditOutcome, number>();
    for (const a of auditLedger) c.set(a.outcome, (c.get(a.outcome) ?? 0) + 1);
    return c;
  }, []);
  const items = auditLedger.filter((a) => !filter || a.outcome === filter);
  return (
    <div className="page prose-wide">
      <h1>Audit ledger</h1>
      <p className="lede">
        Every contradiction, overreach and loose end found in the <Link to="/theory">Unified Model</Link> during an adversarial review, and what was done about it.
        Nothing here was quietly deleted. Tensions the games leave unresolved stay open and are shown as such.
      </p>
      <div className="audit-stats">
        {(Object.keys(OUTCOME) as AuditOutcome[]).map((o) => (
          <button key={o} className={`audit-stat oc-${o} ${filter === o ? "on" : ""}`} onClick={() => setFilter(filter === o ? "" : o)} title={OUTCOME[o].help}>
            <span className="stat-n">{counts.get(o) ?? 0}</span><span>{OUTCOME[o].label}</span>
          </button>
        ))}
      </div>
      <ol className="audit-list">
        {items.map((a) => (
          <li key={a.id} id={a.id} className={`audit-item oc-${a.outcome}`}>
            <div className="audit-head">
              <span className={`badge oc-badge oc-${a.outcome}`}>{OUTCOME[a.outcome].label}</span>
              <span className="badge kind">{a.type}</span>
              <h3>{a.title}</h3>
            </div>
            <div className="audit-grid">
              <div><h4>Problem</h4><p><RichText text={a.problem} /></p></div>
              <div><h4>Resolution</h4><p><RichText text={a.resolution} /></p></div>
            </div>
            <div className="audit-foot">
              {a.evidence.length > 0 && <span>Evidence: <CiteList ids={a.evidence} /></span>}
              {a.sections.length > 0 && <span className="audit-secs">Theory: {a.sections.map((s) => <Link key={s} to={`/theory#${s}`} className="tag">§ {s}</Link>)}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
