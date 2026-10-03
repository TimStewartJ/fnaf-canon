import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronDown, ChevronUp, Diamond, MapPin, X } from "lucide-react";
import { eras, evidenceById, labelForEntity, personById, placeById, places, timeline, deaths, LOCATION_SPANS } from "../../data/store";
import { canonicalId } from "../../data/model";
import { ERA_DATES, eventDate } from "../../data/dates";
import { DEATH_KIND, type Death, type DeathKind } from "../../data/deaths";
import { LOCATION_KIND, type LocationKind } from "../../data/locations";
import type { DateKind, Status, TimelineEvent } from "../../data/schema";
import {
  Button, Collapsible, DATE_KIND, DEATH_KIND_ICON, DateGlyph, DatePill, DeathIcon, Empty, EntityLink, EvidenceCard, FilterBar, FilterChip, FilterGroup,
  GameMark, Icon, LOCATION_HUE, Page, PageHeader, RichText, STATUS, StatusMark, eraHue, hueOf, imgUrl, levelOf, placePath, smartQuotes,
} from "../../components/ui";
import "./timeline.css";

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
  const activeFilters = [statuses.length < ALL.length, !!person, !!game, !showEvents, !showDeaths, kinds.length < ALL_KINDS.length, !!killer, !!place].filter(Boolean).length;
  const showing = `Showing ${nEvents} event${nEvents === 1 ? "" : "s"} and ${nDeaths} death${nDeaths === 1 ? "" : "s"}${place ? ` at ${placeById.get(place)?.name}` : ""}`;

  return (
    <Page title="Timeline" className="tl-page">
      <PageHeader
        title="Timeline"
        lede="Eight eras, from Murray's costume workshop to the ruins of the Pizzaplex. The story's events, every recorded death and every location are laid out together. Undated items are placed by their relationship to dated ones; that position is a convention, not a claim about the year."
      >
        <div className="tl-legend">
          <span className="label">Dates</span>
          {(["printed", "derived", "estimated", "relative", "teaser"] as DateKind[]).map((k) => (
            <span key={k} className="tl-legend__item" title={DATE_KIND[k].help}><DateGlyph kind={k} /> {DATE_KIND[k].label}</span>
          ))}
          <span className="label">Support</span>
          <StatusMark value="canon" variant="inline" /> <StatusMark value="strong" variant="inline" long /> <StatusMark value="theory" variant="inline" />
        </div>
      </PageHeader>

      <div className="tl-ribbon scroll-x" role="navigation" aria-label="Eras">
        <div className="tl-ribbon__track" style={{ gridTemplateColumns: cols }}>
          {eraItems.map(({ era, items }) => (
            <div key={era.id} className={`tl-ribbon__era${inViewEra === era.id ? " on" : ""}`} style={{ "--hue": eraHue(era.id) } as CSSProperties}>
              <button type="button" className="tl-ribbon__label" onClick={() => scrollToEra(era.id)}>
                <strong>{era.name}</strong><span>{era.range}</span>
              </button>
              <div className="tl-ribbon__dots">
                {items.map((t) => (
                  <button key={t.id} type="button" className={`tl-dot${t.type === "death" ? " is-death" : ""}${visibleIds.has(t.id) ? "" : " off"}${inView === t.id ? " now" : ""}${selected === t.id ? " sel" : ""}`}
                    data-level={levelOf(t.status)}
                    onClick={() => select(t.id)} title={`${t.type === "death" ? "Death: " : ""}${t.type === "event" ? t.ev.yearLabel : t.d.yearLabel}, ${t.type === "event" ? t.ev.title : t.d.title}`}
                    aria-label={`${t.type === "death" ? "Death: " : ""}${t.type === "event" ? t.ev.title : t.d.title}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Collapsible className="tl-filters" summary="Filters" meta={`${showing}${activeFilters ? ` · ${activeFilters} filter${activeFilters === 1 ? "" : "s"} on` : ""}`} defaultOpen={activeFilters > 0}>
        <FilterBar>
          <FilterGroup label="Layers">
            <FilterChip on={showEvents} onClick={() => setShowEvents(!showEvents)}><Icon icon={Diamond} /> Story events</FilterChip>
            <FilterChip on={showDeaths} onClick={() => setShowDeaths(!showDeaths)} count={deaths.length}><Icon icon={DeathIcon} /> Deaths</FilterChip>
            <FilterChip on={lanesOpen} onClick={() => setLanesOpen(!lanesOpen)}><Icon icon={MapPin} /> Locations chart</FilterChip>
          </FilterGroup>
          <FilterGroup label="Support">
            {ALL.map((s) => (
              <FilterChip key={s} on={statuses.includes(s)} onClick={() => setStatuses(statuses.includes(s) ? statuses.filter((x) => x !== s) : [...statuses, s])}>{STATUS[s].word}</FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Person">
            <FilterChip on={!person} onClick={() => setPerson("")}>Everyone</FilterChip>
            {personOptions.map(([id]) => (
              <FilterChip key={id} on={person === id} onClick={() => setPerson(person === id ? "" : id)}>{personById.get(id)?.name.replace(/^The /, "")}</FilterChip>
            ))}
          </FilterGroup>
          {showDeaths && (
            <>
              <FilterGroup label="Cause">
                {ALL_KINDS.map((k) => (
                  <FilterChip key={k} on={kinds.includes(k)} onClick={() => setKinds(kinds.includes(k) ? kinds.filter((x) => x !== k) : [...kinds, k])}>
                    <Icon icon={DEATH_KIND_ICON[k]} /> {DEATH_KIND[k].label}
                  </FilterChip>
                ))}
              </FilterGroup>
              <FilterGroup label="Killer">
                <FilterChip on={!killer} onClick={() => setKiller("")}>Anyone</FilterChip>
                {killerOptions.map(([k, n]) => (
                  <FilterChip key={k} on={killer === k} onClick={() => setKiller(killer === k ? "" : k)} count={n}>
                    {k === "unknown" ? "Unknown or not stated" : labelForEntity(k).replace(/^The /, "")}
                  </FilterChip>
                ))}
              </FilterGroup>
            </>
          )}
          <FilterGroup label="Source">
            <FilterChip on={!game} onClick={() => setGame("")}>All</FilterChip>
            {gameOptions.map((g) => (
              <FilterChip key={g} on={game === g} onClick={() => setGame(game === g ? "" : g)}><GameMark id={g} /></FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Location">
            <select value={place} onChange={(e) => setParam("place", e.target.value)} aria-label="Filter by location">
              <option value="">Everywhere</option>
              {places.filter((p) => LOCATION_SPANS[p.id]).map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
            {place && <Button size="sm" icon={X} onClick={() => setParam("place", "")}>Clear {placeById.get(place)?.name}</Button>}
          </FilterGroup>
        </FilterBar>
      </Collapsible>

      {lanesOpen && <LocationChart cols={cols} baseItems={baseItems} place={place} onPick={(id) => setParam("place", place === id ? "" : id)} onEra={scrollToEra} />}

      <div className="tl-spine-wrap">
        {eraItems.map(({ era }, ei) => {
          const its = visible.filter((t) => t.era === era.id);
          if (!its.length) return null;
          return (
            <section key={era.id} id={`era-${era.id}`} className="tl-era" style={{ "--hue": eraHue(era.id) } as CSSProperties}>
              <div className="tl-era__head">
                <span className="tl-era__n">{String(ei + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{era.name}</h2>
                  <p className="tl-era__range"><DatePill label={era.range} kind={ERA_DATES[era.id]?.kind ?? "unknown"} basis={ERA_DATES[era.id]?.basis} evidence={ERA_DATES[era.id]?.evidence} /></p>
                  <p className="tl-era__sum">{smartQuotes(era.summary)}</p>
                </div>
              </div>
              <ol className="tl-spine">
                {its.map((it, i) => {
                  const side = i % 2 ? "right" : "left";
                  const refFn = (el: HTMLLIElement | null) => { if (el) cardRefs.current.set(it.id, el); else cardRefs.current.delete(it.id); };
                  return it.type === "event"
                    ? <EventItem key={it.id} t={it.ev} side={side} open={selected === it.id} now={inView === it.id} refFn={refFn} onSelect={() => select(it.id, false)} />
                    : <DeathItem key={it.id} d={it.d} side={side} open={selected === it.id} now={inView === it.id} refFn={refFn} onSelect={() => select(it.id, false)} />;
                })}
              </ol>
            </section>
          );
        })}
        {visible.length === 0 && <Empty title="Nothing matches these filters">Turn a layer back on or clear a filter.</Empty>}
      </div>
    </Page>
  );
}

interface ItemProps { side: string; open: boolean; now: boolean; refFn: (el: HTMLLIElement | null) => void; onSelect: () => void }

function EvidenceToggle({ open, n, onSelect }: { open: boolean; n: number; onSelect: () => void }) {
  return (
    <Button variant="quiet" size="sm" onClick={onSelect} aria-expanded={open} iconEnd={open ? ChevronUp : ChevronDown}>
      {open ? "Hide evidence" : `Evidence (${n})`}
    </Button>
  );
}

function EventItem({ t, side, open, now, refFn, onSelect }: { t: TimelineEvent } & ItemProps) {
  const d = eventDate(t.id);
  const img = imageOf(t);
  const records = t.evidence.map((id) => evidenceById.get(id)).filter((e) => !!e);
  return (
    <li data-id={t.id} ref={refFn} className={`tl-item ${side}${open ? " open" : ""}${now ? " now" : ""}`} data-level={levelOf(t.status)}>
      <div className="tl-date"><DatePill label={t.yearLabel} kind={d.kind} basis={d.basis} evidence={d.evidence} /></div>
      <span className="tl-node" aria-hidden />
      <article className="tl-card">
        {img && <button type="button" className="tl-img" onClick={onSelect} aria-label={`${open ? "Hide" : "Show"} the evidence for: ${t.title}`}><img src={imgUrl(img)} alt="" loading="lazy" /></button>}
        <div className="tl-body">
          <div className="tl-top">
            <span className="tl-games">{gamesOfIds(t.evidence).map((g) => <GameMark key={g} id={g} />)}</span>
            <StatusMark value={t.status} />
          </div>
          <h3><button type="button" className="tl-title" onClick={onSelect}>{smartQuotes(t.title)}</button></h3>
          <p className="tl-sum"><RichText text={t.summary} /></p>
          <div className="tl-foot">
            <span className="tl-people">
              {[...new Set((t.people ?? []).map((p) => canonicalId(p, { identities: true, vessels: false })))].slice(0, 5).map((p) => <EntityLink key={p} id={p} variant="chip" />)}
              {(t.places ?? []).slice(0, 2).map((p) => <EntityLink key={p} id={p} variant="chip" />)}
            </span>
            <EvidenceToggle open={open} n={t.evidence.length} onSelect={onSelect} />
          </div>
        </div>
        {open && <div className="tl-evidence">{records.map((e) => <EvidenceCard key={e!.id} e={e!} showImage={false} />)}</div>}
      </article>
    </li>
  );
}

function DeathItem({ d, side, open, now, refFn, onSelect }: { d: Death } & ItemProps) {
  const k = DEATH_KIND[d.kind];
  const records = d.evidence.map((id) => evidenceById.get(id)).filter((e) => !!e);
  return (
    <li data-id={d.id} ref={refFn} className={`tl-item tl-item--death ${side}${open ? " open" : ""}${now ? " now" : ""}`} data-level={levelOf(d.status)}>
      <div className="tl-date"><DatePill label={d.yearLabel} kind={d.date.kind} basis={d.date.basis} evidence={d.date.evidence} /></div>
      <span className="tl-node tl-node--death" aria-hidden><Icon icon={DeathIcon} size={12} /></span>
      <article className="tl-card">
        <div className="tl-body">
          <div className="tl-top">
            <span className="tl-death-kind"><Icon icon={DEATH_KIND_ICON[d.kind]} /> {k.label}{d.branch && <span className="chip">one ending: {d.branch}</span>}</span>
            <StatusMark value={d.status} />
          </div>
          <h3><button type="button" className="tl-title" onClick={onSelect}>{smartQuotes(d.title)}</button></h3>
          <dl className="tl-death-facts">
            <dt>Victim</dt><dd>{d.victimLabel}</dd>
            <dt>By</dt><dd>{d.byLabel}</dd>
            <dt>Where</dt><dd>{d.place ? <Link to={placePath(d.place)}>{placeById.get(d.place)?.name ?? d.place}</Link> : <span className="muted">{d.placeLabel ?? "Not stated"}</span>}</dd>
          </dl>
          {d.note && <p className="tl-sum small">{smartQuotes(d.note)}</p>}
          <div className="tl-foot">
            <span className="tl-games">{gamesOfIds(d.evidence).map((g) => <GameMark key={g} id={g} />)}</span>
            <EvidenceToggle open={open} n={d.evidence.length} onSelect={onSelect} />
          </div>
        </div>
        {open && <div className="tl-evidence">{records.map((e) => <EvidenceCard key={e!.id} e={e!} showImage={false} />)}</div>}
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
  let row = 2;

  return (
    <section className="tl-loc" aria-label="Locations on the timeline">
      <div className="tl-loc__head">
        <h2>Locations</h2>
        <p>Every place in the canon, laid across the eras. Select a place to filter the timeline to it. The small counts mark story events (diamond) and deaths (skull) there in each era.</p>
      </div>
      <div className="tl-loc__scroll scroll-x" role="region" aria-label="Locations chart" tabIndex={0}>
        <div className="tl-loc__grid" style={{ gridTemplateColumns: `minmax(120px, 250px) ${cols}` }}>
          <div className="tl-loc__corner" style={{ gridRow: 1 }} />
          {eras.map((e) => (
            <button key={e.id} type="button" className="tl-loc__era" style={{ "--hue": eraHue(e.id), gridRow: 1 } as CSSProperties} onClick={() => onEra(e.id)} title={`${e.name} (${e.range})`}>{e.name}</button>
          ))}
          {groups.map((g) => {
            const start = row;
            row += g.rows.length + 1;
            return <LocGroup key={g.kind} kind={g.kind} rows={g.rows.map((p) => p.id)} startRow={start} baseItems={baseItems} place={place} onPick={onPick} eraIdx={eraIdx} />;
          })}
        </div>
      </div>
    </section>
  );
}

function LocGroup({ kind, rows, startRow, baseItems, place, onPick, eraIdx }: { kind: LocationKind; rows: string[]; startRow: number; baseItems: Item[]; place: string; onPick: (id: string) => void; eraIdx: Map<string, number> }) {
  const meta = LOCATION_KIND[kind];
  const hue = hueOf(LOCATION_HUE, kind);
  const n = eras.length;
  return (
    <>
      <div className="tl-loc__group" style={{ gridColumn: `1 / ${n + 2}`, gridRow: startRow, "--hue": hue } as CSSProperties}>{meta.label}</div>
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
          <div key={id} className={`tl-loc__row${on ? " on" : ""}${place && !on ? " dim" : ""}`} style={{ display: "contents", "--hue": hue } as CSSProperties}>
            <button type="button" className="tl-loc__name" style={{ gridRow: row }} onClick={() => onPick(id)} title={`${p.name}: filter the timeline to this place`} aria-pressed={on}>
              <span className="tl-loc__swatch" /> {p.name}
            </button>
            {Array.from({ length: n }, (_, i) => <div key={i} className="tl-loc__cell" style={{ gridColumn: i + 2, gridRow: row }} />)}
            {sp.undated || sp.outside ? (
              <div className="tl-loc__bar tl-loc__bar--float" style={{ gridColumn: `${n + 1} / ${n + 2}`, gridRow: row }} title={sp.label}>{sp.outside ? "outside the timeline" : "undated"}</div>
            ) : (
              <button type="button" tabIndex={-1} className={`tl-loc__bar${sp.fuzzyStart ? " fz-start" : ""}${sp.fuzzyEnd ? " fz-end" : ""}${kind === "virtual" ? " virtual" : ""}`}
                style={{ gridColumn: `${a + 2} / ${b + 3}`, gridRow: row }} onClick={() => onPick(id)} title={`${p.name}: ${sp.label} (${DATE_KIND[sp.dateKind].label.toLowerCase()} date)`}>
                <span className="tl-loc__bar-label">{sp.label}</span>
              </button>
            )}
            {[...byEra].map(([era, its]) => {
              const ev = its.filter((i) => i.type === "event").length, de = its.filter((i) => i.type === "death").length;
              return (
                <span key={era} className="tl-loc__marks" style={{ gridColumn: (eraIdx.get(era) ?? 0) + 2, gridRow: row }} title={`${ev} event${ev === 1 ? "" : "s"}, ${de} death${de === 1 ? "" : "s"}`}>
                  {ev > 0 && <span className="tl-loc__mark"><Icon icon={Diamond} size={9} />{ev > 1 ? ev : ""}</span>}
                  {de > 0 && <span className="tl-loc__mark tl-loc__mark--death"><Icon icon={DeathIcon} size={10} />{de > 1 ? de : ""}</span>}
                </span>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
