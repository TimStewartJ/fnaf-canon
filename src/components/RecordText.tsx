import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { evidenceById } from "../data/store";
import { useCiteNumbering } from "./citeScope";
import { isPlainClick, useEvidenceDrawer } from "./evidenceDrawer";
import { evidencePath } from "./links";
import { CiteGroup } from "./RichText";
import { recordCites, recordTitle } from "./richTextPlain";
import { recordRefPieces } from "./textMarks";
import { smartQuotes } from "./typography";

/** The source's own emphasis, marked with asterisks (see sourceWords in typography.ts). */
const EMPHASIS = /\*([^\s*](?:[^*\n]*[^\s*])?)\*/g;
const isRecord = (id: string): boolean => evidenceById.has(id);

/**
 * A record's own prose: its claim, its notes, the basis of its date. It is plain text by
 * contract, and it refers to other records by their ids, which a reader should never see. An id
 * stands in such text in one of two ways, and each is printed as what it is:
 *
 *   - alone in a bracket, after a statement: "…with the year hidden (fnaf1-paycheck-night5)."
 *     That is a citation, and it is printed as the site prints one everywhere: the bracket goes,
 *     and a small numeral hugs the statement, shows the record when pointed at and opens it over
 *     the page. Several ids in one bracket are one cluster of numerals.
 *   - as a word of its sentence, or in a bracket with other words: "see ffps-hry223-label",
 *     "(fnaf2-…, a document not confirmed in play)". There it is printed as that record's title,
 *     cut if long, and the title is a link that opens the record.
 *
 * Twelve real notes were set both ways before this was chosen (files/ui/text/forms): a bracket of
 * titles doubles a note's length, runs its titles together and reads as part of the argument.
 * An id that no record has is left as it is. Quotes are set as everywhere (smartQuotes).
 *  - open      "page" sends a title's link to the record's own page (as <EvidenceLink open="page">)
 *  - emphasis  the source's own *asterisks* become italics, as in a record's notes (sourceWords)
 *  - self      the id of the record whose prose this is. It is never cited or linked to from its
 *              own text, and it says which records the numerals count where no page numbers them
 * Where nothing can be a link (a row that is one, a preview, a popover), use recordWords(text).
 */
export function RecordText({ text, open = "drawer", emphasis = false, self }: { text: string; open?: "drawer" | "page"; emphasis?: boolean; self?: string }) {
  const drawer = useEvidenceDrawer();
  const onPage = useCiteNumbering() !== null;
  const shown = smartQuotes(text);
  const pieces = recordRefPieces(shown, isRecord);
  if (pieces.length === 1 && typeof pieces[0] === "string" && !(emphasis && shown.indexOf("*") >= 0)) return <>{shown}</>;
  // On a page the numerals are the page's own, shared with every other marker on it. The drawer is drawn outside
  // the page, so there they count the records this record cites, in the order it is printed.
  const cited = pieces.flatMap((p) => (typeof p !== "string" && "ids" in p ? p.ids : [])).filter((id) => id !== self);
  const set = onPage ? undefined : { ids: self ? recordCites(self) : [...new Set(cited)], noun: "Cited record", of: "" };
  // The records named in the sentences are a set of their own for the drawer to step through.
  const named = [...new Set(pieces.flatMap((p) => (typeof p !== "string" && "id" in p && p.id !== self ? [p.id] : [])))];
  let key = 0;
  const words = (s: string): ReactNode => {
    if (!emphasis || s.indexOf("*") < 0) return s;
    // With one capture group, split() puts the emphasised runs at the odd positions.
    return s.split(EMPHASIS).map((part, i) => (i % 2 ? <em key={`e${key++}`}>{part}</em> : part));
  };
  return (
    <>
      {pieces.map((p, i) => {
        if (typeof p === "string") {
          // A marker hugs the statement before it: the space that stood before the bracket goes with the bracket.
          const next = pieces[i + 1];
          return <Fragment key={i}>{words(next !== undefined && typeof next !== "string" && "ids" in next ? p.replace(/\s+$/, "") : p)}</Fragment>;
        }
        if ("ids" in p) {
          const ids = p.ids.filter((id) => id !== self);
          return ids.length ? <CiteGroup key={i} ids={ids} set={set} /> : null;
        }
        const whole = smartQuotes(evidenceById.get(p.id)?.title ?? p.id), title = recordTitle(p.id);
        if (p.id === self) return <span key={i} className="rec-ref" title={title === whole ? undefined : whole}>{title}</span>;
        return (
          <Link
            key={i}
            to={evidencePath(p.id)}
            className="rec-ref"
            title={title === whole ? undefined : whole}
            aria-haspopup={open === "drawer" ? "dialog" : undefined}
            onClick={(ev) => { if (open !== "drawer" || !isPlainClick(ev)) return; ev.preventDefault(); drawer.open(p.id, named.length > 1 ? named : undefined, "named here"); }}
          >
            {title}
          </Link>
        );
      })}
    </>
  );
}
