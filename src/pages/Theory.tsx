import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { citationsIn, evidenceById, storyline, theory, theoryById, theoryIntro, theoryParts } from "../data/store";
import type { TheoryBlock, TheorySection } from "../data/schema";
import { Cite, EvidenceCard, RichText, SectionLink, Shot } from "../components/ui";

/**
 * Baseline renderer for the theory content contract (schema.ts). It shows every field and block type
 * without much design; the layout and styling are expected to change.
 */
function Block({ block }: { block: TheoryBlock }) {
  if (typeof block === "string") return <p><RichText text={block} /></p>;
  switch (block.kind) {
    case "heading": return <h3 className="theory-h3"><RichText text={block.text} /></h3>;
    case "list": {
      const items = block.items.map((it, i) => <li key={i}><RichText text={it} /></li>);
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case "figure": return <Shot file={block.image} caption={block.caption} />;
    case "quote": {
      const e = evidenceById.get(block.evidence);
      const text = block.text ?? e?.quote ?? "";
      return <blockquote className="theory-quote">“{text}” <Cite id={block.evidence} /></blockquote>;
    }
    case "callout": return (
      <div className={block.tone === "tension" ? "counter-box" : block.tone === "key" ? "theory-box" : "note"}>
        {block.title && <strong>{block.title}. </strong>}<RichText text={block.text} />
      </div>
    );
    case "compare": return (
      <div className="summary-grid">
        {block.columns.map((c) => (
          <div key={c.title} className="summary-card">
            <h3>{c.title}{c.pick ? " ✓" : ""}</h3>
            {c.verdict && <p className="muted small">{c.verdict}</p>}
            <p><RichText text={c.text} /></p>
          </div>
        ))}
      </div>
    );
    case "table": return (
      <table className="theory-table">
        <thead><tr>{block.head.map((h, i) => <th key={i}><RichText text={h} /></th>)}</tr></thead>
        <tbody>{block.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}><RichText text={c} /></td>)}</tr>)}</tbody>
      </table>
    );
    case "evidence": return (
      <div>
        {block.title && <h4>{block.title}</h4>}
        <div className="ev-grid">{block.ids.map((id) => { const e = evidenceById.get(id); return e ? <EvidenceCard key={id} e={e} /> : null; })}</div>
      </div>
    );
  }
}

function Chapter({ s, n }: { s: TheorySection; n: number }) {
  return (
    <section id={s.id} className="theory-sec">
      <h2><span className="sec-n">{String(n).padStart(2, "0")}</span> {s.title} <span className={`badge conf-${s.confidence}`}>{s.confidence} confidence</span></h2>
      {s.question && <p className="muted"><strong>{s.question}</strong></p>}
      {s.answer && <p className="lede"><RichText text={s.answer} /></p>}
      {s.hero && <Shot file={s.hero.image} caption={s.hero.caption} />}
      {s.body.map((b, j) => <Block key={j} block={b} />)}
      {(!!s.counterEvidence?.length || s.tension) && (
        <div className="counter-box">
          <strong>Evidence in tension with this chapter:</strong> {(s.counterEvidence ?? []).map((c) => <Cite key={c} id={c} />)}
          {s.tension && <p><RichText text={s.tension} /></p>}
        </div>
      )}
      {s.changesIf && <p className="note"><strong>What would change this: </strong><RichText text={s.changesIf} /></p>}
      {!!s.seeAlso?.length && <p className="small">See also: {s.seeAlso.map((id, i) => <span key={id}>{i > 0 && " · "}<SectionLink id={id} /></span>)}</p>}
      {!!s.further?.length && (
        <details className="small"><summary>Further evidence filed under this chapter ({s.further.length})</summary><p>{s.further.map((id) => <Cite key={id} id={id} />)}</p></details>
      )}
      <p className="muted small">{citationsIn(s).length} evidence records cited.</p>
    </section>
  );
}

export default function Theory() {
  const { hash } = useLocation();
  const [active, setActive] = useState("");
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
  }, [hash]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
    }, { rootMargin: "-20% 0px -70% 0px" });
    theory.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const number = new Map(theory.map((s, i) => [s.id, i + 1]));
  const groups = [
    ...theoryParts.map((p) => ({ part: p, sections: theory.filter((s) => s.part === p.id) })),
    { part: undefined, sections: theory.filter((s) => !s.part || !theoryParts.some((p) => p.id === s.part)) },
  ].filter((g) => g.sections.length);

  return (
    <div className="page theory-page">
      <aside className="toc">
        <h4>{theoryIntro.title}</h4>
        <ol>
          {theory.map((s) => <li key={s.id}><a href={`#${s.id}`} className={active === s.id ? "on" : ""} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }); }}>{s.title}</a></li>)}
        </ol>
      </aside>
      <article className="theory">
        <h1>{theoryIntro.title}</h1>
        <p className="lede">{theoryIntro.standfirst}</p>
        <p className="theory-box"><RichText text={theoryIntro.thesis} /></p>
        {theoryIntro.howToRead.map((t, i) => <p key={i} className="muted"><RichText text={t} /></p>)}

        {storyline.length > 0 && (
          <section className="theory-sec" id="storyline">
            <h2>The story, in order</h2>
            {storyline.map((b) => (
              <div key={b.id} className="summary-card" style={{ marginBottom: ".6rem" }}>
                <h3><RichText text={b.when} /> · {b.title} <span className={`badge conf-${b.confidence}`}>{b.confidence}</span></h3>
                <p><RichText text={b.text} /></p>
                <p className="small muted">Argued in: {b.sections.map((id, i) => <span key={id}>{i > 0 && " · "}{theoryById.has(id) ? <SectionLink id={id} /> : id}</span>)}</p>
              </div>
            ))}
          </section>
        )}

        {groups.map((g, gi) => (
          <div key={g.part?.id ?? "rest"}>
            {g.part && (
              <header className="theory-part" id={`part-${g.part.id}`}>
                <p className="kicker">Part {gi + 1}{g.part.kicker ? ` · ${g.part.kicker}` : ""}</p>
                <h2>{g.part.title}</h2>
                <p className="muted"><RichText text={g.part.blurb} /></p>
              </header>
            )}
            {g.sections.map((s) => <Chapter key={s.id} s={s} n={number.get(s.id) ?? 0} />)}
          </div>
        ))}
      </article>
    </div>
  );
}
