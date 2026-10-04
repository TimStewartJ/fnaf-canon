import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CornerDownRight } from "lucide-react";
import type { Evidence } from "../data/schema";
import { evidenceById } from "../data/store";
import { isPlainClick, useEvidenceDrawer } from "./evidenceDrawer";
import { firmness } from "./labels";
import { evidencePath } from "./links";
import { FirmGlyph, Firmness } from "./Firmness";
import { Figure } from "./Figure";
import { GameMark } from "./GameMark";
import { Icon } from "./Icon";
import { RecordText } from "./RecordText";
import { EntityLink, EvidenceDate, SourceLine } from "./RichText";
import { recordWords } from "./richTextPlain";
import { smartQuotes, sourceWords } from "./typography";

/**
 * A link to an evidence record that opens the drawer (or the full page with `open="page"`).
 * `group` is the set the reader can step through from it; `of` and `noun` word the drawer's
 * "Record 2 of 5 in this list" for that set (see EvidenceDrawerApi.open).
 */
export function EvidenceLink({ id, group, of, noun, open = "drawer", className, children }: { id: string; group?: string[]; of?: string; noun?: string; open?: "drawer" | "page"; className?: string; children: ReactNode }) {
  const drawer = useEvidenceDrawer();
  return (
    <Link
      to={evidencePath(id)}
      className={className}
      aria-haspopup={open === "drawer" ? "dialog" : undefined}
      onClick={(e) => { if (open !== "drawer" || !isPlainClick(e)) return; e.preventDefault(); drawer.open(id, group, of, noun); }}
    >
      {children}
    </Link>
  );
}

/**
 * The evidence card: source, certainty, title, claim, quote, image, exact location, date and the
 * people and places involved. The title opens the record in the drawer (`open="page"` goes to the
 * record's own page instead).
 *  - compact   for exhibit strips inside an article: image first, claim and quote clamped to a few
 *              lines, no date or entity chips (the drawer has the rest)
 */
export function EvidenceCard({ e, showImage = true, open = "drawer", group, compact = false }: { e: Evidence; showImage?: boolean; open?: "drawer" | "page"; group?: string[]; compact?: boolean }) {
  const entities = compact ? [] : [...(e.people ?? []), ...(e.places ?? [])];
  const figure = showImage && e.image ? <Figure file={e.image} compact /> : null;
  return (
    <article className={`ev-card${compact ? " ev-card--compact" : ""}`}>
      {compact && figure}
      <header className="ev-card__meta">
        <SourceLine e={e} location={false} />
        <Firmness scale="certainty" value={e.certainty} variant={compact ? "inline" : "tag"} />
      </header>
      <h3 className="ev-card__title"><EvidenceLink id={e.id} open={open} group={group}>{smartQuotes(e.title)}</EvidenceLink></h3>
      <p className="ev-card__claim"><RecordText text={e.claim} open={open} self={e.id} /></p>
      {e.quote && <blockquote className="ev-card__quote">“{sourceWords(e.quote)}”</blockquote>}
      {!compact && figure}
      <footer className="ev-card__foot">
        <span className="ev-card__loc"><Icon icon={CornerDownRight} /> {smartQuotes(e.location)}</span>
        {!compact && <EvidenceDate e={e} compact />}
      </footer>
      {entities.length > 0 && <p className="ev-card__entities">{entities.map((id) => <EntityLink key={id} id={id} variant="chip" />)}</p>}
    </article>
  );
}

/**
 * One record on one or two lines: certainty glyph, title, the claim, and where it comes from.
 * For source lists, counter-evidence, "further evidence" and anywhere a full card is too much.
 *  - n       a number shown before the row (a chapter's source list)
 *  - claim   set false to show the title only
 */
export function EvidenceRow({ e, n, group, of, noun, claim = true, open = "drawer", as: Tag = "li" }: { e: Evidence; n?: number; group?: string[]; of?: string; noun?: string; claim?: boolean; open?: "drawer" | "page"; as?: "li" | "div" }) {
  const c = firmness("certainty", e.certainty);
  return (
    <Tag className="ev-row">
      {n != null && <span className="ev-row__n">{n}</span>}
      <span className="ev-row__mark" title={`${c.word}: ${c.help}`}><FirmGlyph level={c.level} /><span className="sr-only">{c.word}.</span></span>
      <span className="ev-row__main">
        <EvidenceLink id={e.id} group={group} of={of} noun={noun} open={open} className="ev-row__title">{smartQuotes(e.title)}</EvidenceLink>
        {claim && <span className="ev-row__claim">{recordWords(e.claim)}</span>}
        <span className="ev-row__meta"><GameMark id={e.game} /> <span>{smartQuotes(e.location)}</span></span>
      </span>
    </Tag>
  );
}

/** A list of evidence rows from ids (unknown ids are skipped). `numbers` maps an id to its citation number. */
export function EvidenceList({ ids, numbers, claim = true, open, className }: { ids: readonly string[]; numbers?: (id: string) => number | undefined; claim?: boolean; open?: "drawer" | "page"; className?: string }) {
  const rows = ids.map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
  if (!rows.length) return null;
  const group = rows.length > 1 ? rows.map((e) => e.id) : undefined;
  return (
    <ul className={`ev-list${className ? ` ${className}` : ""}`}>
      {rows.map((e) => <EvidenceRow key={e.id} e={e} n={numbers?.(e.id)} group={group} claim={claim} open={open} />)}
    </ul>
  );
}
