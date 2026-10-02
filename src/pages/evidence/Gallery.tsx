import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { credits, evidence } from "../../data/store";
import { EvidenceLink, GameMark, Icon, Lightbox, Page, PageHeader, imgUrl } from "../../components/ui";
import "./gallery.css";

export default function Gallery() {
  const [zoom, setZoom] = useState<number | null>(null);
  const step = (d: number) => setZoom((z) => (z == null ? z : (z + d + credits.length) % credits.length));
  return (
    <Page title="Gallery">
      <PageHeader
        kicker="Evidence"
        title="Gallery"
        lede="Screenshots of the moments the evidence rests on. Each one links to the records that use it and to the page it was retrieved from."
      />
      <div className="gallery">
        {credits.map((c, i) => {
          const uses = evidence.filter((e) => e.image === c.file);
          return (
            <figure key={c.file} className="figure gal-item">
              <button type="button" className="figure__frame" onClick={() => setZoom(i)} aria-label={`Enlarge image: ${c.caption}`}>
                <img src={imgUrl(c.file)} alt={c.caption} loading="lazy" decoding="async" />
                <span className="figure__zoom" aria-hidden><Icon icon={Maximize2} /></span>
              </button>
              <figcaption className="figure__caption">
                <GameMark id={c.game} link />
                <span className="figure__text">{c.caption}</span>
                {uses.length > 0 && <span className="gal-item__uses">{uses.map((u) => <EvidenceLink key={u.id} id={u.id} className="tag">{u.title}</EvidenceLink>)}</span>}
                <span className="figure__meta"><a className="figure__credit" href={c.sourcePage} target="_blank" rel="noreferrer">Image source<Icon icon={ArrowUpRight} /></a></span>
              </figcaption>
            </figure>
          );
        })}
      </div>
      {zoom != null && credits[zoom] && (
        <Lightbox file={credits[zoom].file} caption={credits[zoom].caption} counter={`${zoom + 1} of ${credits.length}`} onClose={() => setZoom(null)} onPrev={() => step(-1)} onNext={() => step(1)} />
      )}
    </Page>
  );
}
