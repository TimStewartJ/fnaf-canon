import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { eras, evidenceById, personById, timeline } from "../data/store";
import { canonicalId } from "../data/model";
import { ERA_COLOR, ERA_DATES, eventDate } from "../data/dates";
import { gameMeta } from "../data/gameMeta";
import type { Status, TimelineEvent } from "../data/schema";
import { DATE_KIND, DatePill, EvidenceCard, GameIcon, RichText, StatusBadge, type DateKind } from "../components/ui";

const ALL: Status[] = ["canon", "strong", "theory"];

const gamesOf = (t: TimelineEvent) => [...new Set(t.evidence.map((id) => evidenceById.get(id)?.game).filter((g): g is NonNullable<typeof g> => !!g))];
const imageOf = (t: TimelineEvent) => t.image ?? t.evidence.map((id) => evidenceById.get(id)?.image).find(Boolean);

export default function Timeline() {
  const [sp, setSp] = useSearchParams();
  const selected = sp.get("e") ?? "";
  const [statuses, setStatuses] = useState<Status[]>(ALL);
  const [person, setPerson] = useState("");
  const [game, setGame] = useState("");
  const [inView, setInView] = useState<string>("");
  const cardRefs = useRef(new Map<string, HTMLElement>());

  const sorted = useMemo(() => [...timeline].sort((a, b) => a.year - b.year), []);
  const visible = useMemo(() => sorted.filter((t) =>
    statuses.includes(t.status) &&
    (!person || t.people?.some((p) => canonicalId(p) === person)) &&
    (!game || gamesOf(t).includes(game as never))), [sorted, statuses, person, game]);
  const visibleIds = new Set(visible.map((t) => t.id));

  const personOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const t of timeline) for (const p of new Set((t.people ?? []).map((x) => canonicalId(x)))) counts.set(p, (counts.get(p) ?? 0) + 1);
    return [...counts].filter(([id]) => personById.get(id)?.group !== "entity").sort((a, b) => b[1] - a[1]).slice(0, 12);
  }, []);
  const gameOptions = useMemo(() => [...new Set(timeline.flatMap(gamesOf))], []);

  const select = (id: string, scroll = true) => {
    const next = new URLSearchParams(sp);
    if (id && id !== selected) next.set("e", id); else next.delete("e");
    setSp(next, { replace: true });
    if (scroll && id) requestAnimationFrame(() => cardRefs.current.get(id)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  useEffect(() => {
    const era = sp.get("era");
    if (selected) setTimeout(() => cardRefs.current.get(selected)?.scrollIntoView({ block: "center" }), 50);
    else if (era) setTimeout(() => document.getElementById(`era-${era}`)?.scrollIntoView(), 50);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setInView((e.target as HTMLElement).dataset.id ?? "");
    }, { rootMargin: "-45% 0px -50% 0px" });
    cardRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [visible]);

  const eraCounts = eras.map((era) => ({ era, events: sorted.filter((t) => t.era === era.id) }));
  const inViewEra = sorted.find((t) => t.id === inView)?.era;

  return (
    <div className="page tl-page">
      <header className="tl-hero">
        <h1>Timeline</h1>
        <p className="lede">Eight eras, from Murray's costume workshop to the ruins of the Pizzaplex. Every date carries a pill: hover it to see whether the year is printed in a game, derived from printed dates, or estimated, and which records it rests on. Undated events are positioned by their relationship to dated ones; that position is a convention, not a claim about the year.</p>
        <div className="date-legend">
          {(["printed", "derived", "estimated", "relative", "teaser"] as DateKind[]).map((k) => (
            <span key={k}><span className={`date-pill compact dk-${k}`} style={{ cursor: "default" }}><span className="dp-dot" />{DATE_KIND[k].label}</span></span>
          ))}
          <span className="muted">· card edge: <StatusBadge status="canon" /> <StatusBadge status="strong" /> <StatusBadge status="theory" /></span>
        </div>
      </header>

      <div className="ribbon" role="navigation" aria-label="Era ribbon">
        <div className="ribbon-track">
          {eraCounts.map(({ era, events }) => (
            <div key={era.id} className={`ribbon-era ${inViewEra === era.id ? "on" : ""}`} style={{ flexGrow: Math.max(events.length, 2), "--ec": ERA_COLOR[era.id] } as CSSProperties}>
              <button className="ribbon-label" onClick={() => document.getElementById(`era-${era.id}`)?.scrollIntoView({ behavior: "smooth" })}>
                <strong>{era.name}</strong><span>{era.range}</span>
              </button>
              <div className="ribbon-dots">
                {events.map((t) => (
                  <button key={t.id} className={`ribbon-dot st-${t.status} ${visibleIds.has(t.id) ? "" : "off"} ${inView === t.id ? "now" : ""} ${selected === t.id ? "sel" : ""}`}
                    onClick={() => select(t.id)} title={`${t.yearLabel} — ${t.title}`} aria-label={`${t.yearLabel}: ${t.title}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tl-filters">
        <div className="tl-filter-group">
          <span className="tl-filter-label">Support</span>
          {ALL.map((s) => (
            <button key={s} className={`chip-btn st-${s} ${statuses.includes(s) ? "on" : ""}`} onClick={() => setStatuses(statuses.includes(s) ? statuses.filter((x) => x !== s) : [...statuses, s])}>{s}</button>
          ))}
        </div>
        <div className="tl-filter-group">
          <span className="tl-filter-label">Person</span>
          <button className={`chip-btn ${!person ? "on" : ""}`} onClick={() => setPerson("")}>Everyone</button>
          {personOptions.map(([id]) => (
            <button key={id} className={`chip-btn ${person === id ? "on" : ""}`} onClick={() => setPerson(person === id ? "" : id)}>{personById.get(id)?.name.replace(/^The /, "")}</button>
          ))}
        </div>
        <div className="tl-filter-group">
          <span className="tl-filter-label">Source</span>
          <button className={`chip-btn ${!game ? "on" : ""}`} onClick={() => setGame("")}>All</button>
          {gameOptions.map((g) => (
            <button key={g} className={`chip-btn game-chip ${game === g ? "on" : ""}`} style={{ "--gc": gameMeta(g).color } as CSSProperties} onClick={() => setGame(game === g ? "" : g)} title={gameMeta(g).motif}>
              {gameMeta(g).emoji} {gameMeta(g).short}
            </button>
          ))}
        </div>
        <p className="muted small">{visible.length} of {timeline.length} events</p>
      </div>

      <div className="spine-wrap">
        {eraCounts.map(({ era }, ei) => {
          const evs = visible.filter((t) => t.era === era.id);
          if (!evs.length) return null;
          return (
            <section key={era.id} id={`era-${era.id}`} className="chapter" style={{ "--ec": ERA_COLOR[era.id] } as CSSProperties}>
              <div className="chapter-head">
                <span className="chapter-n">{String(ei + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{era.name}</h2>
                  <p className="chapter-range"><DatePill label={era.range} kind={ERA_DATES[era.id]?.kind ?? "unknown"} basis={ERA_DATES[era.id]?.basis} evidence={ERA_DATES[era.id]?.evidence} /></p>
                  <p className="chapter-sum">{era.summary}</p>
                </div>
              </div>
              <ol className="spine">
                {evs.map((t, i) => {
                  const d = eventDate(t.id);
                  const img = imageOf(t);
                  const open = selected === t.id;
                  return (
                    <li key={t.id} data-id={t.id} ref={(el) => { if (el) cardRefs.current.set(t.id, el); else cardRefs.current.delete(t.id); }}
                      className={`beat ${i % 2 ? "right" : "left"} st-${t.status} ${open ? "open" : ""} ${inView === t.id ? "now" : ""}`}>
                      <div className="beat-date"><DatePill label={t.yearLabel} kind={d.kind} basis={d.basis} evidence={d.evidence} /></div>
                      <span className="beat-node" aria-hidden />
                      <article className="beat-card">
                        {img && <button className="beat-img" onClick={() => select(t.id, false)} aria-label="Expand event"><img src={`${import.meta.env.BASE_URL}img/${img}`} alt="" loading="lazy" /></button>}
                        <div className="beat-body">
                          <div className="beat-top">
                            <span className="beat-games">{gamesOf(t).map((g) => <GameIcon key={g} id={g} />)}</span>
                            <StatusBadge status={t.status} />
                          </div>
                          <h3><button className="beat-title" onClick={() => select(t.id, false)}>{t.title}</button></h3>
                          <p className="beat-sum"><RichText text={t.summary} /></p>
                          <div className="beat-foot">
                            <span className="beat-people">
                              {[...new Set((t.people ?? []).map((p) => canonicalId(p, { identities: true, vessels: false })))].slice(0, 5).map((p) => (
                                <Link key={p} to={`/people/${p}`} className="entity person">{personById.get(p)?.name ?? p}</Link>
                              ))}
                            </span>
                            <button className="beat-more" onClick={() => select(t.id, false)} aria-expanded={open}>{open ? "Hide evidence ▴" : `Evidence (${t.evidence.length}) ▾`}</button>
                          </div>
                        </div>
                        {open && (
                          <div className="beat-evidence">
                            {t.evidence.map((id) => evidenceById.get(id)).filter((e) => !!e).map((e) => <EvidenceCard key={e!.id} e={e!} showImage={false} />)}
                          </div>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
