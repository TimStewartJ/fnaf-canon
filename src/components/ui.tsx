import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import type { Evidence, Status } from "../data/schema";
import { creditByFile, evidenceById, gameById, labelForEntity, personById, placeById } from "../data/store";

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

const SHORT: Record<string, string> = {
  fnaf1: "FNaF1", fnaf2: "FNaF2", fnaf3: "FNaF3", fnaf4: "FNaF4", "fnaf4-halloween": "FNaF4 HE", "fnaf-world": "FNaF World",
  "sister-location": "SL", ffps: "FFPS", ucn: "UCN", "help-wanted": "HW", "curse-of-dreadbear": "Dreadbear",
  "special-delivery": "AR", "security-breach": "SB", ruin: "Ruin", "help-wanted-2": "HW2", "into-the-pit": "Into the Pit",
  "secret-of-the-mimic": "SotM", "freddy-in-space-2": "FiS2", scott: "Scott", "scottgames-site": "Teaser",
};
export function shortGame(id: string) { return SHORT[id] ?? id; }

export function GameBadge({ id, short }: { id: string; short?: boolean }) {
  const g = gameById.get(id as never);
  return (
    <Link to={`/sources/${id}`} className={`badge game game-${id}`} title={g?.title ?? id}>
      {short ? shortGame(id) : g?.title ?? id}
    </Link>
  );
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
      <Link to={`/evidence/${id}`} className={`cite cert-${e.certainty}`} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
        {shortGame(e.game)}
      </Link>
      {open && (
        <span className="cite-pop" role="tooltip">
          <span className="cite-pop-head">{shortGame(e.game)} · {KIND_LABEL[e.kind]} · {e.when.label}</span>
          <strong>{e.title}</strong>
          <span>{e.claim}</span>
          {e.quote && <q>{e.quote}</q>}
          <span className="muted">↳ {e.location}</span>
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
  const re = /\[\[([a-z0-9-]+)\]\]|\{\{([a-z0-9-]+)\}\}|\*\*(.+?)\*\*/g;
  let last = 0; let m: RegExpExecArray | null; let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<Cite key={k++} id={m[1]} />);
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
        <span className="when" title={e.when.basis}>{e.when.label}</span>
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
