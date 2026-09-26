import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { eras, evidenceById, labelForEntity, personById, placeById, places, timeline, deaths, LOCATION_SPANS } from "../data/store";
import { canonicalId } from "../data/model";
import { ERA_COLOR, ERA_DATES, eventDate } from "../data/dates";
import { gameMeta } from "../data/gameMeta";
import { DEATH_KIND, type Death, type DeathKind } from "../data/deaths";
import { LOCATION_KIND, type LocationKind } from "../data/locations";
import type { Status, TimelineEvent } from "../data/schema";
import { DATE_KIND, DatePill, EvidenceCard, GameIcon, RichText, StatusBadge, type DateKind } from "../components/ui";

const ALL: Status[] = ["canon", "strong", "theory"];
const ALL_KINDS = Object.keys(DEATH_KIND) as DeathKind[];

type Item =
  | { type: "event"; id: string; year: number; era: string; status: Status; ev: TimelineEvent }
  | { type: "death"; id: string; year: number; era: string; status: Status; d: Death };

const gamesOfIds = (ids: string[]) => [...new Set(ids.map((id) => evidenceById.get(id)?.game).filter((g): g is NonNullable<typeof g> => !!g))];
const gamesOf = (it: Item) => gamesOfIds(it.type === "event" ? it.ev.evidence : it.d.evidence);
const peopleOf = (it: Item) => it.type === "event" ? it.ev.people ?? [] : [...it.d.victims, ...it.d.by];
const placesOf = (it: Item) => it.type === "event" ? it.ev.places ?? [] : it.d.place ? [it.d.place] : [];
const imageOf = (t: TimelineEvent) => t.image ?? t.evidence.map((id) => evidenceById.get(id)?.image).find(Boolean);
const killerKey = (d: Death) => d.by.length ? canonicalId(d.by[0], { identities: true, vessels: false }) : "unknown";

const allItems: Item[] = [
  ...timeline.map((ev): Item => ({ type: "event", id: ev.id, year: ev.year, era: ev.era, status: ev.status, ev })),
  ...deaths.map((d): Item => ({ type: "death", id: d.id, year: d.year, era: d.era, status: d.status, d })),
].sort((a, b) => a.year - b.year);

export default function Timeline() {
  const [sp, setSp] = useSearchParams();
  const selected = sp.get("e") ?? "";
  const place = sp.get("place") ?? "";
  const [statuses, setStatuses] = useState<Status[]>(ALL);
  const [person, setPerson] = useState("");
  const [game, setGame] = useState("");
  const [showEvents, setShowEvents] = useState(sp.get("layer") !== "deaths");
  const [showDeaths, setShowDeaths] = useState(true);
  const [kinds, setKinds] = useState<DeathKind[]>(ALL_KINDS);
  const [killer, setKiller] = useState("");
  const [lanesOpen, setLanesOpen] = useState(true);
  const [inView, setInView] = useState<string>("");
  const cardRefs = useRef(new Map<string, HTMLElement>());

  const setParam = (k: string, v: string) => {
    const next = new URLSearchParams(sp);
    if (v) next.set(k, v); else next.delete(k);
    setSp(next, { replace: true });
  };

  /** Everything except the location filter (so the location chart can show counts for every place). */
  const baseMatch = (it: Item) =>
    statuses.includes(it.status) &&
    (it.type === "event" ? showEvents : showDeaths && kinds.includes(it.d.kind) && (!killer || killerKey(it.d) === killer)) &&
    (!person || peopleOf(it).some((p) => canonicalId(p) === person)) &&
    (!game || gamesOf(it).includes(game as never));
  const baseItems = useMemo(() => allItems.filter(baseMatch), [statuses, showEvents, showDeaths, kinds, killer, person, game]); // eslint-disable-line react-hooks/exhaustive-deps
  const visible = useMemo(() => baseItems.filter((it) => !place || placesOf(it).includes(place)), [baseItems, place]);
  const visibleIds = new Set(visible.map((t) => t.id));

  const personOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const it of allItems) for (const p of new Set(peopleOf(it).map((x) => canonicalId(x)))) counts.set(p, (counts.get(p) ?? 0) + 1);
    return [...counts].filter(([id]) => personById.get(id) && personById.get(id)!.group !== "entity" && personById.get(id)!.group !== "other").sort((a, b) => b[1] - a[1]).slice(0, 12);
  }, []);
  const gameOptions = useMemo(() => [...new Set(allItems.flatMap(gamesOf))], []);
  const killerOptions = useMemo(() => {
    const c = new Map<string, number>();
    for (const d of deaths) c.set(killerKey(d), (c.get(killerKey(d)) ?? 0) + 1);
    return [...c].sort((a, b) => b[1] - a[1]);
  }, []);

  const select = (id: string, scroll = true) => {
    setParam("e", id && id !== selected ? id : "");
    if (scroll && id) requestAnimationFrame(() => cardRefs.current.get(id)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };
  const scrollToEra = (era: string) => document.getElementById(`era-${era}`)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const era = sp.get("era");
    if (selected) setTimeout(() => cardRefs.current.get(selected)?.scrollIntoView({ block: "center" }), 60);
    else if (era) setTimeout(() => document.getElementById(`era-${era}`)?.scrollIntoView(), 60);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setInView((e.target as HTMLElement).dataset.id ?? "");
    }, { rootMargin: "-45% 0px -50% 0px" });
    cardRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [visible]);

  const eraItems = eras.map((era) => ({ era, items: allItems.filter((t) => t.era === era.id) }));
  const cols = eraItems.map(({ items }) => `${Math.max(items.length, 3)}fr`).join(" ");
  const inViewEra = allItems.find((t) => t.id === inView)?.era;
  const nEvents = visible.filter((i) => i.type === "event").length;
  const nDeaths = visible.filter((i) => i.type === "death").length;

  return (
    <div className="page tl-page">
      <header className="tl-hero">
        <h1>Timeline</h1>
        <p className="lede">
          Eight eras, from Murray's costume workshop to the ruins of the Pizzaplex. The story's events, every recorded death, and every location are laid
          out together. Every date carries a pill: hover it to see whether the year is printed, derived or estimated, and which records it rests on. Undated
          items are positioned by their relationship to dated ones; that position is a convention, not a claim about the year.
        </p>
        <div className="date-legend">
          {(["printed", "derived", "estimated", "relative", "teaser"] as DateKind[]).map((k) => (
            <span key={k}><span className={`date-pill compact dk-${k}`} style={{ cursor: "default" }}><span className="dp-dot" />{DATE_KIND[k].label}</span></span>
          ))}
          <span className="muted">· card edge: <StatusBadge status="canon" /> <StatusBadge status="strong" /> <StatusBadge status="theory" /></span>
        </div>
      </header>

      <div className="ribbon" role="navigation" aria-label="Era ribbon">
        <div className="ribbon-track" style={{ gridTemplateColumns: cols }}>
          {eraItems.map(({ era, items }) => (
            <div key={era.id} className={`ribbon-era ${inViewEra === era.id ? "on" : ""}`} style={{ "--ec": ERA_COLOR[era.id] } as CSSProperties}>
              <button className="ribbon-label" onClick={() => scrollToEra(era.id)}>
                <strong>{era.name}</strong><span>{era.range}</span>
              </button>
              <div className="ribbon-dots">
                {items.map((t) => (
                  <button key={t.id} className={`ribbon-dot ${t.type === "death" ? "is-death" : ""} st-${t.status} ${visibleIds.has(t.id) ? "" : "off"} ${inView === t.id ? "now" : ""} ${selected === t.id ? "sel" : ""}`}
                    onClick={() => select(t.id)} title={`${t.type === "death" ? "☠ " : ""}${t.type === "event" ? t.ev.yearLabel : t.d.yearLabel} — ${t.type === "event" ? t.ev.title : t.d.title}`}
                    aria-label={t.type === "event" ? t.ev.title : t.d.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tl-filters">
        <div className="tl-filter-group">
          <span className="tl-filter-label">Layers</span>
          <button className={`chip-btn layer ${showEvents ? "on" : ""}`} onClick={() => setShowEvents(!showEvents)}>◆ Story events</button>
          <button className={`chip-btn layer layer-death ${showDeaths ? "on" : ""}`} onClick={() => setShowDeaths(!showDeaths)}>☠ Deaths ({deaths.length})</button>
          <button className={`chip-btn layer layer-place ${lanesOpen ? "on" : ""}`} onClick={() => setLanesOpen(!lanesOpen)}>⌂ Locations chart</button>
        </div>
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
        {showDeaths && (
          <>
            <div className="tl-filter-group">
              <span className="tl-filter-label">Cause</span>
              {ALL_KINDS.map((k) => (
                <button key={k} className={`chip-btn death-kind ${kinds.includes(k) ? "on" : ""}`} onClick={() => setKinds(kinds.includes(k) ? kinds.filter((x) => x !== k) : [...kinds, k])}>
                  {DEATH_KIND[k].icon} {DEATH_KIND[k].label}
                </button>
              ))}
            </div>
            <div className="tl-filter-group">
              <span className="tl-filter-label">Killer</span>
              <button className={`chip-btn ${!killer ? "on" : ""}`} onClick={() => setKiller("")}>Anyone</button>
              {killerOptions.map(([k, n]) => (
                <button key={k} className={`chip-btn ${killer === k ? "on" : ""}`} onClick={() => setKiller(killer === k ? "" : k)}>
                  {k === "unknown" ? "Unknown / not stated" : labelForEntity(k).replace(/^The /, "")} · {n}
                </button>
              ))}
            </div>
          </>
        )}
        <div className="tl-filter-group">
          <span className="tl-filter-label">Source</span>
          <button className={`chip-btn ${!game ? "on" : ""}`} onClick={() => setGame("")}>All</button>
          {gameOptions.map((g) => (
            <button key={g} className={`chip-btn game-chip ${game === g ? "on" : ""}`} style={{ "--gc": gameMeta(g).color } as CSSProperties} onClick={() => setGame(game === g ? "" : g)} title={gameMeta(g).motif}>
              {gameMeta(g).emoji} {gameMeta(g).short}
            </button>
          ))}
        </div>
        <div className="tl-filter-group">
          <span className="tl-filter-label">Location</span>
          <select className="place-select" value={place} onChange={(e) => setParam("place", e.target.value)} aria-label="Filter by location">
            <option value="">Everywhere</option>
            {places.filter((p) => LOCATION_SPANS[p.id]).map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          {place && <button className="chip-btn on" onClick={() => setParam("place", "")}>✕ {placeById.get(place)?.name}</button>}
        </div>
        <p className="muted small">Showing {nEvents} event{nEvents === 1 ? "" : "s"} and {nDeaths} death{nDeaths === 1 ? "" : "s"}{place ? ` at ${placeById.get(place)?.name}` : ""}.</p>
      </div>

      {lanesOpen && <LocationChart cols={cols} baseItems={baseItems} place={place} onPick={(id) => setParam("place", place === id ? "" : id)} onEra={scrollToEra} />}

      <div className="spine-wrap">
        {eraItems.map(({ era }, ei) => {
          const its = visible.filter((t) => t.era === era.id);
          if (!its.length) return null;
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
                {its.map((it, i) => {
                  const side = i % 2 ? "right" : "left";
                  const refFn = (el: HTMLLIElement | null) => { if (el) cardRefs.current.set(it.id, el); else cardRefs.current.delete(it.id); };
                  return it.type === "event"
                    ? <EventBeat key={it.id} t={it.ev} side={side} open={selected === it.id} now={inView === it.id} refFn={refFn} onSelect={() => select(it.id, false)} />
                    : <DeathBeat key={it.id} d={it.d} side={side} open={selected === it.id} now={inView === it.id} refFn={refFn} onSelect={() => select(it.id, false)} />;
                })}
              </ol>
            </section>
          );
        })}
        {visible.length === 0 && <p className="empty">Nothing matches these filters.</p>}
      </div>
    </div>
  );
}

function PlaceChip({ id }: { id: string }) {
  return <Link to={`/places/${id}`} className="entity place">⌂ {placeById.get(id)?.name ?? id}</Link>;
}

function EventBeat({ t, side, open, now, refFn, onSelect }: { t: TimelineEvent; side: string; open: boolean; now: boolean; refFn: (el: HTMLLIElement | null) => void; onSelect: () => void }) {
  const d = eventDate(t.id);
  const img = imageOf(t);
  return (
    <li data-id={t.id} ref={refFn} className={`beat ${side} st-${t.status} ${open ? "open" : ""} ${now ? "now" : ""}`}>
      <div className="beat-date"><DatePill label={t.yearLabel} kind={d.kind} basis={d.basis} evidence={d.evidence} /></div>
      <span className="beat-node" aria-hidden />
      <article className="beat-card">
        {img && <button className="beat-img" onClick={onSelect} aria-label="Expand event"><img src={`${import.meta.env.BASE_URL}img/${img}`} alt="" loading="lazy" /></button>}
        <div className="beat-body">
          <div className="beat-top">
            <span className="beat-games">{gamesOfIds(t.evidence).map((g) => <GameIcon key={g} id={g} />)}</span>
            <StatusBadge status={t.status} />
          </div>
          <h3><button className="beat-title" onClick={onSelect}>{t.title}</button></h3>
          <p className="beat-sum"><RichText text={t.summary} /></p>
          <div className="beat-foot">
            <span className="beat-people">
              {[...new Set((t.people ?? []).map((p) => canonicalId(p, { identities: true, vessels: false })))].slice(0, 5).map((p) => (
                <Link key={p} to={`/people/${p}`} className="entity person">{personById.get(p)?.name ?? p}</Link>
              ))}
              {(t.places ?? []).slice(0, 2).map((p) => <PlaceChip key={p} id={p} />)}
            </span>
            <button className="beat-more" onClick={onSelect} aria-expanded={open}>{open ? "Hide evidence ▴" : `Evidence (${t.evidence.length}) ▾`}</button>
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
}

function DeathBeat({ d, side, open, now, refFn, onSelect }: { d: Death; side: string; open: boolean; now: boolean; refFn: (el: HTMLLIElement | null) => void; onSelect: () => void }) {
  const k = DEATH_KIND[d.kind];
  return (
    <li data-id={d.id} ref={refFn} className={`beat death ${side} st-${d.status} ${open ? "open" : ""} ${now ? "now" : ""}`}>
      <div className="beat-date"><DatePill label={d.yearLabel} kind={d.date.kind} basis={d.date.basis} evidence={d.date.evidence} /></div>
      <span className="beat-node death-node" aria-hidden>☠</span>
      <article className="beat-card death-card">
        <div className="beat-body">
          <div className="beat-top">
            <span className="death-kind-badge">{k.icon} {k.label}{d.branch && <span className="branch-badge">one ending: {d.branch}</span>}</span>
            <StatusBadge status={d.status} />
          </div>
          <h3><button className="beat-title" onClick={onSelect}>{d.title}</button></h3>
          <dl className="death-facts">
            <dt>Victim</dt><dd>{d.victimLabel}</dd>
            <dt>By</dt><dd>{d.byLabel}</dd>
            <dt>Where</dt><dd>{d.place ? <PlaceChip id={d.place} /> : <span className="muted">{d.placeLabel ?? "Not stated"}</span>}</dd>
          </dl>
          {d.note && <p className="beat-sum small">{d.note}</p>}
          <div className="beat-foot">
            <span className="beat-games">{gamesOfIds(d.evidence).map((g) => <GameIcon key={g} id={g} />)}</span>
            <button className="beat-more" onClick={onSelect} aria-expanded={open}>{open ? "Hide evidence ▴" : `Evidence (${d.evidence.length}) ▾`}</button>
          </div>
        </div>
        {open && (
          <div className="beat-evidence">
            {d.evidence.map((id) => evidenceById.get(id)).filter((e) => !!e).map((e) => <EvidenceCard key={e!.id} e={e!} showImage={false} />)}
          </div>
        )}
      </article>
    </li>
  );
}

function LocationChart({ cols, baseItems, place, onPick, onEra }: { cols: string; baseItems: Item[]; place: string; onPick: (id: string) => void; onEra: (era: string) => void }) {
  const eraIdx = new Map(eras.map((e, i) => [e.id, i]));
  const groups = (Object.keys(LOCATION_KIND) as LocationKind[]).map((kind) => ({
    kind,
    rows: places.filter((p) => LOCATION_SPANS[p.id]?.kind === kind)
      .sort((a, b) => (eraIdx.get(LOCATION_SPANS[a.id].from ?? "") ?? 99) - (eraIdx.get(LOCATION_SPANS[b.id].from ?? "") ?? 99)),
  })).filter((g) => g.rows.length);

  return (
    <section className="loc-chart" aria-label="Locations on the timeline">
      <div className="loc-head">
        <h2>Locations</h2>
        <p className="muted small">Every place in the canon, laid across the eras. Click a place to filter the timeline to it. ◆ story events and ☠ deaths there are marked by era.</p>
      </div>
      <div className="loc-grid" style={{ gridTemplateColumns: `minmax(120px, 250px) ${cols}` }}>
        <div className="loc-corner" style={{ gridRow: 1 }} />
        {eras.map((e) => (
          <button key={e.id} className="loc-era" style={{ "--ec": ERA_COLOR[e.id], gridRow: 1 } as CSSProperties} onClick={() => onEra(e.id)} title={`${e.name} (${e.range})`}>{e.name}</button>
        ))}
        {(() => {
          let row = 2;
          return groups.map((g) => {
            const start = row;
            row += g.rows.length + 1;
            return <LocGroup key={g.kind} kind={g.kind} rows={g.rows.map((p) => p.id)} startRow={start} baseItems={baseItems} place={place} onPick={onPick} eraIdx={eraIdx} />;
          });
        })()}
      </div>
    </section>
  );
}

function LocGroup({ kind, rows, startRow, baseItems, place, onPick, eraIdx }: { kind: LocationKind; rows: string[]; startRow: number; baseItems: Item[]; place: string; onPick: (id: string) => void; eraIdx: Map<string, number> }) {
  const meta = LOCATION_KIND[kind];
  const n = eras.length;
  return (
    <>
      <div className="loc-group" style={{ gridColumn: `1 / ${n + 2}`, gridRow: startRow, "--lc": meta.color } as CSSProperties}>{meta.label}</div>
      {rows.map((id, ri) => {
        const row = startRow + 1 + ri;
        const sp = LOCATION_SPANS[id];
        const p = placeById.get(id)!;
        const here = baseItems.filter((it) => placesOf(it).includes(id));
        const byEra = new Map<string, Item[]>();
        for (const it of here) byEra.set(it.era, [...(byEra.get(it.era) ?? []), it]);
        const a = sp.from ? eraIdx.get(sp.from)! : 0, b = sp.to ? eraIdx.get(sp.to)! : n - 1;
        const on = place === id;
        return (
          <div key={id} className={`loc-row ${on ? "on" : ""} ${place && !on ? "dim" : ""}`} style={{ display: "contents", "--lc": meta.color } as CSSProperties}>
            <button className="loc-name" style={{ gridRow: row }} onClick={() => onPick(id)} title={`${p.name}: filter the timeline to this place`}>
              <span className="loc-swatch" /> {p.name}
            </button>
            {Array.from({ length: n }, (_, i) => <div key={i} className="loc-cell" style={{ gridColumn: i + 2, gridRow: row }} />)}
            {sp.undated || sp.outside ? (
              <div className="loc-bar loc-float" style={{ gridColumn: `${n + 1} / ${n + 2}`, gridRow: row }} title={sp.label}>{sp.outside ? "outside the timeline" : "undated"}</div>
            ) : (
              <button className={`loc-bar dk-${sp.dateKind} ${sp.fuzzyStart ? "fz-start" : ""} ${sp.fuzzyEnd ? "fz-end" : ""} ${kind === "virtual" ? "virtual" : ""}`}
                style={{ gridColumn: `${a + 2} / ${b + 3}`, gridRow: row }} onClick={() => onPick(id)} title={`${p.name}: ${sp.label} (${DATE_KIND[sp.dateKind].label.toLowerCase()} date)`}>
                <span className="loc-bar-label">{sp.label}</span>
              </button>
            )}
            {[...byEra].map(([era, its]) => {
              const ev = its.filter((i) => i.type === "event").length, de = its.filter((i) => i.type === "death").length;
              return (
                <span key={era} className="loc-marks" style={{ gridColumn: (eraIdx.get(era) ?? 0) + 2, gridRow: row }} title={`${ev} events, ${de} deaths`}>
                  {ev > 0 && <span className="lm-ev">◆{ev > 1 ? ev : ""}</span>}
                  {de > 0 && <span className="lm-de">☠{de > 1 ? de : ""}</span>}
                </span>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
