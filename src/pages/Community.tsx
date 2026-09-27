import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { INTERACTION_KIND, VERDICT, interactions, theories, type CommunityTheory, type Source, type Verdict } from "../data/community";
import { CiteList, GameIcon, RichText } from "../components/ui";

function SourceLine({ s }: { s: Source }) {
  const body = <>{s.who} · <em>{s.what}</em>{s.date ? ` · ${s.date}` : ""}</>;
  return (
    <li className={`src-line rel-${s.reliability}`}>
      {s.url ? <a href={s.url} target="_blank" rel="noreferrer">{body} ↗</a> : body}
      {s.reliability !== "primary" && <span className="rel-tag">{s.reliability}</span>}
    </li>
  );
}

function TheoryCard({ t }: { t: CommunityTheory }) {
  const v = VERDICT[t.verdict];
  const [open, setOpen] = useState(false);
  return (
    <article className="th-card" style={{ "--vc": v.color } as CSSProperties} id={t.id}>
      <header>
        <span className="th-verdict" title={v.help}>{v.label}</span>
        <span className="th-year">{t.emerged}</span>
        <span className="th-games">{t.games.map((g) => <GameIcon key={g} id={g} />)}</span>
      </header>
      <h3>{t.name}</h3>
      {t.aka && t.aka.length > 0 && <p className="muted small th-aka">also: {t.aka.join(" · ")}</p>}
      <p className="th-claim">“{t.claim}”</p>
      <div className="th-cols">
        <div className="th-right"><h4>What it got right</h4><p><RichText text={t.right} /></p></div>
        <div className="th-wrong"><h4>What it got wrong</h4><p><RichText text={t.wrong} /></p></div>
      </div>
      {t.scott && <div className="th-scott"><h4>✍️ Scott's side</h4><p><RichText text={t.scott} /></p></div>}
      <footer>
        {t.modelSection && <Link className="tag" to={`/theory#${t.modelSection}`}>This archive's reading →</Link>}
        <button className="beat-more" onClick={() => setOpen(!open)}>{open ? "Hide sources ▴" : `Where it came from (${t.sources.length}) ▾`}</button>
      </footer>
      {open && <ul className="src-list">{t.sources.map((s, i) => <SourceLine key={i} s={s} />)}</ul>}
    </article>
  );
}

export default function Community() {
  const [verdict, setVerdict] = useState<Verdict | "">("");
  const sorted = useMemo(() => [...theories].sort((a, b) => a.year - b.year), []);
  const shown = sorted.filter((t) => !verdict || t.verdict === verdict);
  const counts = useMemo(() => {
    const c = new Map<Verdict, number>();
    for (const t of theories) c.set(t.verdict, (c.get(t.verdict) ?? 0) + 1);
    return c;
  }, []);
  const inter = useMemo(() => [...interactions].sort((a, b) => a.date.localeCompare(b.date)), []);

  return (
    <div className="page community">
      <h1>Theorists &amp; Scott</h1>
      <p className="lede">
        Five Nights at Freddy's grew up alongside its theory community. Scott read the theories, gave YouTubers early access, answered on Steam and Reddit,
        pranked the fandom, and put nods to it inside the games. This page tracks that relationship and scores the major theories against the evidence.
      </p>
      <div className="not-evidence">
        <strong>Not evidence.</strong> Nothing on this page is used to build the archive's model. Theories are shown to see what they got right and wrong,
        and each judgement cites the game records or Scott statements it rests on. The sources below are links to the theories themselves.
      </div>

      <section className="section">
        <div className="section-head"><h2>Scott and the community, over time</h2><span className="muted small">{inter.length} moments</span></div>
        <ol className="inter-tl">
          {inter.map((x) => (
            <li key={x.id} className={`inter kind-${x.kind}`}>
              <span className="inter-date">{x.date}</span>
              <span className="inter-dot" aria-hidden>{INTERACTION_KIND[x.kind].icon}</span>
              <div className="inter-body">
                <h3>{x.title} <span className={`badge ${x.confirmed === "scott-confirmed" ? "status-canon" : "status-theory"}`}>{x.confirmed === "scott-confirmed" ? "Scott's own words" : "fan-inferred"}</span></h3>
                <p><RichText text={x.summary} /></p>
                <div className="inter-foot">
                  {x.evidence.length > 0 && <span>Evidence: <CiteList ids={x.evidence} /></span>}
                  {x.external && x.external.length > 0 && <ul className="src-list inline">{x.external.map((s, i) => <SourceLine key={i} s={s} />)}</ul>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section-head"><h2>The theories, scored</h2><span className="muted small">judged against the evidence, not against each other</span></div>
        <div className="verdict-bar">
          <button className={`chip-btn ${!verdict ? "on" : ""}`} onClick={() => setVerdict("")}>All · {theories.length}</button>
          {(Object.keys(VERDICT) as Verdict[]).filter((v) => counts.get(v)).map((v) => (
            <button key={v} className={`chip-btn verdict-chip ${verdict === v ? "on" : ""}`} style={{ "--vc": VERDICT[v].color } as CSSProperties} onClick={() => setVerdict(verdict === v ? "" : v)} title={VERDICT[v].help}>
              {VERDICT[v].label} · {counts.get(v)}
            </button>
          ))}
        </div>
        <div className="th-grid">{shown.map((t) => <TheoryCard key={t.id} t={t} />)}</div>
      </section>
    </div>
  );
}
