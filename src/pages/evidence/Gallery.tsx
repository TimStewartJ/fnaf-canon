import { useState, type SyntheticEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Maximize2 } from "lucide-react";
import type { Evidence, ImageCredit } from "../../data/schema";
import { credits, evidence, gameById, games } from "../../data/store";
import { gameMeta } from "../../data/gameMeta";
import { EvidenceLink, GameMark, Icon, Lightbox, Page, PageHeader, evidencePath, imgSize, imgUrl, isPlainClick, smartQuotes, useEvidenceDrawer, useMediaQuery } from "../../components/ui";
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

/** Keeps pixel art crisp when a small PNG is drawn larger than it is. The image is fitted inside its box, so both sides are compared. */
function crisp(ev: SyntheticEvent<HTMLImageElement>) {
  const img = ev.currentTarget;
  const png = /\.png(\?|$)/i.test(img.currentSrc || img.src);
  const scale = img.naturalWidth > 0 && img.naturalHeight > 0 ? Math.min(img.clientWidth / img.naturalWidth, img.clientHeight / img.naturalHeight) : 0;
  img.classList.toggle("is-upscaled", png && scale > 1.05);
}

const list = (v: string | null): string[] => (v ?? "").split(/[\s,]+/).filter(Boolean);

export default function Gallery() {
  const [sp, setSp] = useSearchParams();
  const drawer = useEvidenceDrawer();
  // The grid's column count, in step with gallery.css, so that a folded group shows whole rows.
  const c3 = useMediaQuery("(min-width: 560px)"), c4 = useMediaQuery("(min-width: 900px)"), c5 = useMediaQuery("(min-width: 1200px)");
  const fold = (c5 ? 5 : c4 ? 4 : c3 ? 3 : 2) * ROWS;
  // ?open=fnaf2+scott lists the groups shown in full.
  const open = new Set(list(sp.get("open")));
  const setOpen = (ids: string[]) => {
    const next = new URLSearchParams(sp);
    if (ids.length) next.set("open", ids.join(" ")); else next.delete("open");
    setSp(next, { replace: true });
  };

  // The lightbox pages through the group it was opened from, folded or not.
  const [zoom, setZoom] = useState<{ group: string; at: number } | null>(null);
  const zoomGroup = zoom ? GROUPS.find((g) => g.id === zoom.group) : undefined;
  const zoomShot = zoom && zoomGroup ? zoomGroup.shots[zoom.at] : undefined;
  const step = (d: number) => setZoom((z) => {
    const g = z && GROUPS.find((x) => x.id === z.group);
    return z && g ? { group: z.group, at: (z.at + d + g.shots.length) % g.shots.length } : z;
  });
  /** One modal at a time: the viewer closes, then the record opens over the gallery. */
  const openRecords = (ids: string[], id: string) => { setZoom(null); drawer.open(id, ids.length > 1 ? ids : undefined); };

  const total = GROUPS.reduce((n, g) => n + g.shots.length, 0);

  return (
    <Page title="Gallery" className="gal">
      <PageHeader
        kicker="Evidence"
        title="Gallery"
        lede={<>{count(total)} screenshots of the moments the evidence rests on, grouped by source. Each one opens larger, with the records it illustrates and the page it was retrieved from.</>}
      />

      {GROUPS.length > 1 && (
        <nav className="gal-index" aria-label="Jump to a source">
          <span className="label">Jump to</span>
          <ul>
            {GROUPS.map((g) => (
              <li key={g.id}>
                <Link to={{ search: sp.toString(), hash: `g-${g.id}` }} className="tag gal-index__link" title={g.title}>
                  <GameMark id={g.id} /> <span className="gal-index__n">{g.shots.length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {GROUPS.map((g) => {
        // A folded group keeps its last cell for "show all", and is never folded over one or two images.
        const all = open.has(g.id) || g.shots.length <= fold + 1;
        const shots = all ? g.shots : g.shots.slice(0, fold - 1);
        return (
          <section key={g.id} className="gal-group" id={`g-${g.id}`} aria-labelledby={`h-${g.id}`}>
            <div className="gal-group__head">
              <h2 id={`h-${g.id}`} className="gal-group__title"><GameMark id={g.id} variant="full" link={gameById.has(g.id as never)} /></h2>
              <span className="gal-group__n">{records(g.shots.length, "image")}</span>
            </div>
            <ul className="gal-grid">
              {shots.map(({ credit, uses }, at) => {
                const ids = uses.map((u) => u.id);
                return (
                  <li key={credit.file} className="gal-tile">
                    <figure className="gal-tile__figure">
                      <button type="button" className="gal-tile__frame" onClick={() => setZoom({ group: g.id, at })} aria-label={`Enlarge image: ${credit.caption}`}>
                        <img src={imgUrl(credit.file)} {...imgSize(credit.file)} alt={credit.caption} loading="lazy" decoding="async" onLoad={crisp} />
                        <span className="gal-tile__zoom" aria-hidden><Icon icon={Maximize2} /></span>
                      </button>
                      <figcaption className="gal-tile__cap">
                        <span className="gal-tile__text">{smartQuotes(credit.caption)}</span>
                        {uses.length > 0 && (
                          <EvidenceLink id={uses[0].id} group={ids.length > 1 ? ids : undefined} className="gal-tile__rec">
                            {uses.length === 1 ? "Record" : `${uses.length} records`}
                            <span className="sr-only">: {uses.map((u) => u.title).join("; ")}</span>
                            <Icon icon={ArrowRight} />
                          </EvidenceLink>
                        )}
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
              {!all && (
                <li className="gal-tile">
                  <button type="button" className="gal-tile__frame gal-tile__more" onClick={() => setOpen([...open, g.id])}>
                    <span className="gal-tile__more-n">+{g.shots.length - shots.length}</span>
                    <span>Show all {g.shots.length}<span className="sr-only"> images from {g.title}</span></span>
                  </button>
                </li>
              )}
            </ul>
          </section>
        );
      })}

      {zoom && zoomGroup && zoomShot && (
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
      )}
    </Page>
  );
}
