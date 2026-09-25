import { Link } from "react-router-dom";
import { useState, type CSSProperties, type ReactNode } from "react";
import type { Evidence, Status } from "../data/schema";
import { creditByFile, evidenceById, gameById, labelForEntity, personById, placeById } from "../data/store";
import { gameMeta } from "../data/gameMeta";

export const KIND_LABEL: Record<string, string> = {
  "phone-call": "Phone call", "audio-tape": "Audio tape", minigame: "Minigame", cutscene: "Cutscene",
  dialogue: "Dialogue", text: "In-game text", environment: "Environment", mechanic: "Gameplay mechanic",
  ending: "Ending", hidden: "Hidden / secret", teaser: "Teaser", "scott-statement": "Scott statement",
};

export const CERTAINTY_HELP: Record<string, string> = {
  stated: "Explicitly said or written in the source",
  shown: "Directly depicted, not put into words",
  implied: "A small, defensible reading of the source",
};

export const STATUS_HELP: Record<Status, string> = {
  canon: "Directly established by the cited sources",
  strong: "Near-certain inference from multiple sources",
  theory: "This site's interpretive model",
};

export function StatusBadge({ status }: { status: Status }) {
  return <span className={`badge status-${status}`} title={STATUS_HELP[status]}>{status}</span>;
}

export function CertaintyBadge({ c }: { c: string }) {
  return <span className={`badge cert-${c}`} title={CERTAINTY_HELP[c]}>{c}</span>;
}

export function shortGame(id: string) { return gameMeta(id).short; }

/** Game identity chip: emoji + short code, tinted with the game's accent colour. */
export function GameBadge({ id, short, plain }: { id: string; short?: boolean; plain?: boolean }) {
  const g = gameById.get(id as never);
  const m = gameMeta(id);
  const body = <><span className="g-emoji" aria-hidden>{m.emoji}</span>{short ? m.short : g?.title ?? id}</>;
  const style = { "--gc": m.color } as CSSProperties;
  if (plain) return <span className="badge game" style={style} title={g?.title ?? id}>{body}</span>;
  return <Link to={`/sources/${id}`} className="badge game" style={style} title={`${g?.title ?? id} — ${m.motif}`}>{body}</Link>;
}

export function GameIcon({ id, size = "1em" }: { id: string; size?: string }) {
  const m = gameMeta(id);
  return <span className="g-icon" style={{ fontSize: size, "--gc": m.color } as CSSProperties} title={gameById.get(id as never)?.title ?? id} aria-hidden>{m.emoji}</span>;
}

export function EntityLink({ id }: { id: string }) {
  if (personById.has(id)) return <Link className="entity person" to={`/people/${id}`}>{labelForEntity(id)}</Link>;
  if (placeById.has(id)) return <Link className="entity place" to={`/places/${id}`}>{labelForEntity(id)}</Link>;
  return <Link className="entity unknown" to={`/evidence?entity=${id}`}>{labelForEntity(id)}</Link>;
}

/** Inline citation chip with hover preview. */
export function Cite({ id }: { id: string }) {
  const e = evidenceById.get(id);
  const [open, setOpen] = useState(false);
  if (!e) return <span className="cite missing" title="Missing evidence record">?{id}</span>;
  return (
    <span className="cite-wrap" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to={`/evidence/${id}`} className={`cite cert-${e.certainty}`} style={{ "--gc": gameMeta(e.game).color } as CSSProperties} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
        <span aria-hidden>{gameMeta(e.game).emoji}</span>{shortGame(e.game)}
      </Link>
      {open && (
        <span className="cite-pop" role="tooltip">
          <span className="cite-pop-head">{gameMeta(e.game).emoji} {gameById.get(e.game)?.title ?? e.game} · {KIND_LABEL[e.kind]}</span>
          <strong>{e.title}</strong>
          <span>{e.claim}</span>
          {e.quote && <q>{e.quote}</q>}
          <span className="muted">↳ {e.location}</span>
          <span className="cite-pop-date">🗓 {e.when.label}{e.when.basis ? ` — ${e.when.basis}` : ""}</span>
        </span>
      )}
    </span>
  );
}

export function CiteList({ ids }: { ids: string[] }) {
  return <span className="cite-list">{ids.map((id) => <Cite key={id} id={id} />)}</span>;
}

/** Renders text containing [[evidence-id]] citations, {{entity-id}} links and **bold**. */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\[\[([a-z0-9-]+)\]\]|\{\{([a-z0-9-]+)\}\}|\*\*(.+?)\*\*|<<([^|>]+)\|([a-z]+)\|([a-z0-9,-]*)\|([^>]*)>>/g;
  let last = 0; let m: RegExpExecArray | null; let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[4]) out.push(<DatePill key={k++} label={m[4]} kind={m[5] as DateKind} evidence={m[6] ? m[6].split(",") : []} basis={m[7]} />);
    else if (m[1]) out.push(<Cite key={k++} id={m[1]} />);
    else if (m[2]) out.push(<EntityLink key={k++} id={m[2]} />);
    else out.push(<strong key={k++}>{m[3]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

export function Shot({ file, caption, compact }: { file: string; caption?: string; compact?: boolean }) {
  const credit = creditByFile.get(file);
  const [zoom, setZoom] = useState(false);
  const cap = caption ?? credit?.caption ?? "";
  return (
    <figure className={compact ? "shot compact" : "shot"}>
      <button className="shot-btn" onClick={() => setZoom(true)} aria-label={`Enlarge: ${cap}`}>
        <img src={`${import.meta.env.BASE_URL}img/${file}`} alt={cap} loading="lazy" />
      </button>
      {!compact && (
        <figcaption>
          {cap}
          {credit && <> · <a href={credit.sourcePage} target="_blank" rel="noreferrer">image source</a></>}
        </figcaption>
      )}
      {zoom && (
        <div className="lightbox" onClick={() => setZoom(false)} role="dialog">
          <img src={`${import.meta.env.BASE_URL}img/${file}`} alt={cap} />
          <p>{cap}</p>
        </div>
      )}
    </figure>
  );
}

export function EvidenceCard({ e, showImage = true }: { e: Evidence; showImage?: boolean }) {
  return (
    <article className="ev-card">
      <header>
        <GameBadge id={e.game} short />
        <span className="badge kind">{KIND_LABEL[e.kind] ?? e.kind}</span>
        <CertaintyBadge c={e.certainty} />
        <span className="when"><EvidenceDate e={e} /></span>
      </header>
      <Link to={`/evidence/${e.id}`} className="ev-title">{e.title}</Link>
      <p className="ev-claim">{e.claim}</p>
      {e.quote && <blockquote>“{e.quote}”</blockquote>}
      <p className="ev-loc">↳ {e.location}</p>
      {showImage && e.image && <Shot file={e.image} compact />}
      {(e.people?.length || e.places?.length) ? (
        <p className="ev-entities">{[...(e.people ?? []), ...(e.places ?? [])].map((id) => <EntityLink key={id} id={id} />)}</p>
      ) : null}
    </article>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="empty">{children}</p>;
}

export function Section({ title, children, aside }: { title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="section">
      <div className="section-head"><h2>{title}</h2>{aside}</div>
      {children}
    </section>
  );
}

export type DateKind = "printed" | "derived" | "estimated" | "relative" | "teaser" | "unknown";
export const DATE_KIND: Record<DateKind, { label: string; help: string }> = {
  printed: { label: "Printed", help: "The date is printed or spoken in a game or in Scott's words" },
  derived: { label: "Derived", help: "Calculated from printed dates and stated intervals" },
  estimated: { label: "Estimated", help: "This archive's best estimate from the surrounding evidence" },
  relative: { label: "Relative", help: "Only placed relative to other events" },
  teaser: { label: "Teaser", help: "Shown only in an official teaser, not in the game itself" },
  unknown: { label: "Undated", help: "The sources give no date" },
};

const PRECISION_KIND: Record<string, DateKind> = { exact: "printed", approx: "estimated", relative: "relative", unknown: "unknown" };

/** A date with its justification: hover or focus to see why the date is what it is, and which records support it. */
export function DatePill({ label, kind, basis, evidence = [], compact }: { label: string; kind: DateKind; basis?: string; evidence?: string[]; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const k = DATE_KIND[kind] ?? DATE_KIND.unknown;
  const evs = evidence.map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
  return (
    <span className="cite-wrap date-wrap" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className={`date-pill dk-${kind}${compact ? " compact" : ""}`} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} onClick={() => setOpen(!open)} aria-label={`${label}: ${k.label} date`}>
        <span className="dp-dot" aria-hidden />{label}
      </button>
      {open && (
        <span className="cite-pop date-pop" role="tooltip">
          <span className={`cite-pop-head dk-${kind}`}>{k.label} date · {k.help}</span>
          <strong>{label}</strong>
          {basis && <span>{basis}</span>}
          {evs.length > 0 && (
            <span className="dp-src">
              {evs.map((e) => (
                <Link key={e.id} to={`/evidence/${e.id}`} className="dp-src-row">
                  <span aria-hidden>{gameMeta(e.game).emoji}</span> <span>{e.title}</span>
                  <span className="muted small"> — {e.location}</span>
                </Link>
              ))}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export function EvidenceDate({ e, compact }: { e: Evidence; compact?: boolean }) {
  const kind: DateKind = e.kind === "teaser" && e.when.precision === "exact" ? "teaser" : PRECISION_KIND[e.when.precision] ?? "unknown";
  return <DatePill label={e.when.label} kind={kind} basis={e.when.basis} evidence={[e.id]} compact={compact} />;
}
