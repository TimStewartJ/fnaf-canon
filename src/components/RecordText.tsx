import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { evidenceById } from "../data/store";
import { isPlainClick, useEvidenceDrawer } from "./evidenceDrawer";
import { evidencePath } from "./links";
import { recordIdPieces, shortTitle } from "./textMarks";
import { smartQuotes } from "./typography";

/** The source's own emphasis, marked with asterisks (see sourceWords in typography.ts). */
const EMPHASIS = /\*([^\s*](?:[^*\n]*[^\s*])?)\*/g;
const isRecord = (id: string): boolean => evidenceById.has(id);

/**
 * A record's own prose: its notes, its claim, the basis of its date. It is plain text by
 * contract, and it refers to other records by their ids ("…the year hidden
 * (fnaf1-paycheck-night5)"), which a reader should never see. Wherever the id of a known record
 * stands in the text it is printed as that record's title, shortened if long, and the title is a
 * link that opens the record as a citation would: in the drawer, over the page. An id that no
 * record has is left as it is. Quotes are set as everywhere (smartQuotes).
 *  - open      "page" sends the links to the record's own page (as <EvidenceLink open="page">)
 *  - emphasis  the source's own *asterisks* become italics, as in a record's notes (sourceWords)
 *  - plain     the titles as words, not links: for a line that is inside a link's row or a preview
 *  - self      the id of the record whose prose this is; its own title is never a link to itself
 * This is the one place it is done; the record page, the drawer, the card and row, the preview
 * and a date's popover all print through it.
 */
export function RecordText({ text, open = "drawer", emphasis = false, plain = false, self }: { text: string; open?: "drawer" | "page"; emphasis?: boolean; plain?: boolean; self?: string }) {
  const drawer = useEvidenceDrawer();
  const shown = smartQuotes(text);
  const pieces = recordIdPieces(shown, isRecord);
  if (pieces.length === 1 && typeof pieces[0] === "string" && !(emphasis && shown.indexOf("*") >= 0)) return <>{shown}</>;
  // The records named here are a set the drawer can step through.
  const named = [...new Set(pieces.flatMap((p) => (typeof p === "string" || p.id === self ? [] : [p.id])))];
  const group = named.length > 1 ? named : undefined;
  let key = 0;
  const words = (s: string): ReactNode => {
    if (!emphasis || s.indexOf("*") < 0) return s;
    // With one capture group, split() puts the emphasised runs at the odd positions.
    return s.split(EMPHASIS).map((part, i) => (i % 2 ? <em key={`e${key++}`}>{part}</em> : part));
  };
  return (
    <>
      {pieces.map((p, i) => {
        if (typeof p === "string") return <Fragment key={i}>{words(p)}</Fragment>;
        const title = smartQuotes(evidenceById.get(p.id)?.title ?? p.id);
        const short = shortTitle(title);
        if (plain || p.id === self) return <span key={i} className="rec-ref rec-ref--plain" title={short === title ? undefined : title}>{short}</span>;
        return (
          <Link
            key={i}
            to={evidencePath(p.id)}
            className="rec-ref"
            title={short === title ? undefined : title}
            aria-haspopup={open === "drawer" ? "dialog" : undefined}
            onClick={(ev) => { if (open !== "drawer" || !isPlainClick(ev)) return; ev.preventDefault(); drawer.open(p.id, group, "named here"); }}
          >
            {short}
          </Link>
        );
      })}
    </>
  );
}
