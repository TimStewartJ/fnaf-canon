import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Evidence, ImageCredit } from "../../data/schema";
import { credits, evidence, gameById, games } from "../../data/store";
import { gameMeta } from "../../data/gameMeta";
import { Collapsible, EvidenceLink, ExternalLink, FigureFrame, GameMark, Lightbox, Page, PageHeader, evidencePath, isPlainClick, listParam, smartQuotes, sourcePath, useAddress, useEvidenceDrawer, useMediaQuery } from "../../components/ui";
import { useAddressState } from "./addressState";
import { count, records } from "./coverage";
import "./gallery.css";

interface Shot { credit: ImageCredit; uses: Evidence[] }
interface Group { id: string; title: string; shots: Shot[] }

/** Every credited image, grouped by source in release order, each with the records it illustrates. */
const GROUPS: Group[] = (() => {
  const uses = new Map<string, Evidence[]>();
  for (const e of evidence) if (e.image) uses.set(e.image, [...(uses.get(e.image) ?? []), e]);
  const bySource = new Map<string, Shot[]>();
  for (const credit of credits) bySource.set(credit.game, [...(bySource.get(credit.game) ?? []), { credit, uses: uses.get(credit.file) ?? [] }]);
  // Sources in release order; an image credited to an id the store does not list still gets its group, last.
  const order = [...games.map((g) => g.id as string), ...[...bySource.keys()].filter((id) => !gameById.has(id as never))];
  return order.filter((id) => bySource.has(id)).map((id) => ({ id, title: gameById.get(id as never)?.title ?? id, shots: bySource.get(id)! }));
})();

/** Rows of a group shown before "show all". */
const ROWS = 2;

/** ?open=fnaf2+scott lists the groups shown in full. Other parameters are left alone. */
const readOpen = (sp: URLSearchParams): string[] => listParam(sp.get("open"));
function writeOpen(open: string[], current: URLSearchParams): URLSearchParams {
  const next = new URLSearchParams(current);
  if (open.length) next.set("open", open.join(" ")); else next.delete("open");
  return next;
}

/**
 * One source's images. Memoised: opening a group or the viewer redraws that group only, not the
 * hundred-odd tiles of the others.
 */
const GroupSection = memo(function GroupSection({ g, all, fold, onShowAll, onZoom }: { g: Group; all: boolean; fold: number; onShowAll: (id: string, firstNew: number) => void; onZoom: (group: string, at: number) => void }) {
  // A folded group keeps its last cell for "show all", and is never folded over one or two images.
  const whole = all || g.shots.length <= fold + 1;
  const shots = whole ? g.shots : g.shots.slice(0, fold - 1);
  return (
    <section className="gal-group" id={`g-${g.id}`} aria-labelledby={`h-${g.id}`}>
      <div className="gal-group__head">
        <h2 id={`h-${g.id}`} className="gal-group__title">
          {gameById.has(g.id as never) ? <Link to={sourcePath(g.id)}>{smartQuotes(g.title)}</Link> : smartQuotes(g.title)}
        </h2>
        <span className="gal-group__n"><GameMark id={g.id} /> {records(g.shots.length, "image")}</span>
      </div>
      <ul className="gal-grid">
        {shots.map(({ credit, uses }, at) => {
          const ids = uses.map((u) => u.id);
          return (
            <li key={credit.file} className="gal-tile">
              <figure className="figure">
                <FigureFrame file={credit.file} alt={credit.caption} near small onZoom={() => onZoom(g.id, at)} />
                <figcaption className="figure__caption">
                  <span className="figure__text">{smartQuotes(credit.caption)}</span>
                  <span className="figure__meta">
                    {uses.length > 0 && (
                      <EvidenceLink id={uses[0].id} group={ids.length > 1 ? ids : undefined} className="figure__credit">
                        {uses.length === 1 ? "Record" : `${uses.length} records`}
                        <span className="sr-only">: {uses.map((u) => u.title).join("; ")}</span>
                      </EvidenceLink>
                    )}
                    <ExternalLink className="figure__credit" href={credit.sourcePage}>Image source</ExternalLink>
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
        {!whole && (
          <li className="gal-tile">
            <button type="button" className="gal-tile__more" onClick={() => onShowAll(g.id, shots.length)}>
              <span className="gal-tile__more-n">+{g.shots.length - shots.length}</span>
              <span>Show all {g.shots.length}<span className="sr-only"> images from {g.title}</span></span>
            </button>
          </li>
        )}
      </ul>
    </section>
  );
});

export default function Gallery() {
  const drawer = useEvidenceDrawer();
  // The grid's column count, in step with gallery.css, so that a folded group shows whole rows.
  const c3 = useMediaQuery("(min-width: 560px)"), c4 = useMediaQuery("(min-width: 900px)"), c5 = useMediaQuery("(min-width: 1200px)");
  const fold = (c5 ? 5 : c4 ? 4 : c3 ? 3 : 2) * ROWS;
  const [open, setOpen] = useAddressState(readOpen, writeOpen);
  // After "show all", focus moves to the first of the new images instead of being lost with the button.
  const focusAt = useRef<{ group: string; at: number } | null>(null);
  useEffect(() => {
    const f = focusAt.current;
    focusAt.current = null;
    if (f) document.getElementById(`g-${f.group}`)?.querySelectorAll<HTMLElement>(".figure__frame")[f.at]?.focus({ preventScroll: true });
  }, [open]);
  const onShowAll = useCallback((id: string, firstNew: number) => {
    focusAt.current = { group: id, at: firstNew };
    setOpen((now) => (now.includes(id) ? now : [...now, id]));
  }, [setOpen]);

  // The lightbox pages through the group it was opened from, folded or not.
  const [zoom, setZoom] = useState<{ group: string; at: number } | null>(null);
  const onZoom = useCallback((group: string, at: number) => setZoom({ group, at }), []);
  const zoomGroup = zoom ? GROUPS.find((g) => g.id === zoom.group) : undefined;
  const zoomShot = zoom && zoomGroup ? zoomGroup.shots[zoom.at] : undefined;
  const step = (d: number) => setZoom((z) => {
    const g = z && GROUPS.find((x) => x.id === z.group);
    return z && g ? { group: z.group, at: (z.at + d + g.shots.length) % g.shots.length } : z;
  });
  /** One modal at a time: the viewer closes, then the record opens over the gallery. */
  const openRecords = (ids: string[], id: string) => { setZoom(null); drawer.open(id, ids.length > 1 ? ids : undefined, "for this image"); };

  const phone = useMediaQuery("(max-width: 640px)");
  // A jump keeps the rest of the address: the groups that are open.
  const { link } = useAddress();
  const index = (
    <ul className="gal-index__list">
      {GROUPS.map((g) => (
        <li key={g.id}>
          <Link to={link(`g-${g.id}`)} className="tag gal-index__link" title={g.title}>
            <GameMark id={g.id} /> <span className="gal-index__n">{g.shots.length}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  const total = GROUPS.reduce((n, g) => n + g.shots.length, 0);

  return (
    <Page title="Gallery" className="gal-page">
      <PageHeader
        kicker="Evidence"
        title="Gallery"
        lede={<>{count(total)} screenshots of the moments the evidence rests on, grouped by the {GROUPS.length} sources that have pictures. Each one opens larger, with the records it illustrates and the page it was retrieved from.</>}
      />

      {GROUPS.length > 1 && (
        <nav className="gal-index" aria-label="Jump to a source">
          {/* A row or two of chips where there is room; folded to one line on a phone, where it would fill the screen. */}
          {phone ? <Collapsible summary="Jump to a source" meta={`${GROUPS.length} sources with pictures`}>{index}</Collapsible> : <><span className="label">Jump to</span>{index}</>}
        </nav>
      )}

      {GROUPS.map((g) => <GroupSection key={g.id} g={g} all={open.includes(g.id)} fold={fold} onShowAll={onShowAll} onZoom={onZoom} />)}

      {zoom && zoomGroup && zoomShot && (
        <div className="gal-zoom">
          <Lightbox
            file={zoomShot.credit.file}
            counter={`${zoom.at + 1} of ${zoomGroup.shots.length} · ${gameMeta(zoomGroup.id).short}`}
            caption={
              <>
                {smartQuotes(zoomShot.credit.caption)}
                {zoomShot.uses.length > 0 && (
                  <span className="gal-zoom__records">
                    {zoomShot.uses.length === 1 ? "Record: " : "Records: "}
                    {zoomShot.uses.map((u, i) => (
                      <span key={u.id}>
                        {i > 0 && " · "}
                        <Link
                          to={evidencePath(u.id)}
                          className="gal-zoom__record"
                          onClick={(ev) => { if (!isPlainClick(ev)) return; ev.preventDefault(); openRecords(zoomShot.uses.map((x) => x.id), u.id); }}
                        >
                          {smartQuotes(u.title)}
                        </Link>
                      </span>
                    ))}
                  </span>
                )}
              </>
            }
            onClose={() => setZoom(null)}
            onPrev={zoomGroup.shots.length > 1 ? () => step(-1) : undefined}
            onNext={zoomGroup.shots.length > 1 ? () => step(1) : undefined}
          />
        </div>
      )}
    </Page>
  );
}
