import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { citationsIn, theory } from "../data/store";
import { Cite, RichText } from "../components/ui";

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

  return (
    <div className="page theory-page">
      <aside className="toc">
        <h4>The Unified Model</h4>
        <ol>
          {theory.map((s) => <li key={s.id}><a href={`#${s.id}`} className={active === s.id ? "on" : ""} onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }); }}>{s.title}</a></li>)}
        </ol>
      </aside>
      <article className="theory">
        <h1>The Unified Model</h1>
        <p className="lede">
          This is the archive's own reconstruction: one account that tries to fit every recorded piece of evidence with the fewest assumptions.
          It was built from the <Link to="/evidence">evidence locker</Link> up, not from community theories. Every claim carries its citations;
          hover a chip to preview, click to open. Where evidence cuts against the model, it is listed openly.
        </p>
        {theory.map((s, i) => (
          <section key={s.id} id={s.id} className="theory-sec">
            <h2><span className="sec-n">{String(i + 1).padStart(2, "0")}</span> {s.title} <span className={`badge conf-${s.confidence}`}>{s.confidence} confidence</span></h2>
            {s.body.map((b, j) => <p key={j}><RichText text={b} /></p>)}
            {!!s.counterEvidence?.length && (
              <div className="counter-box">
                <strong>Evidence in tension with this section:</strong> {s.counterEvidence.map((c) => <Cite key={c} id={c} />)}
              </div>
            )}
            <p className="muted small">{citationsIn(s).length} evidence records cited.</p>
          </section>
        ))}
      </article>
    </div>
  );
}
