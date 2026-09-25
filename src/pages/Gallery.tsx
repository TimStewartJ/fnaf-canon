import { useState } from "react";
import { Link } from "react-router-dom";
import { credits, evidence } from "../data/store";
import { GameBadge } from "../components/ui";

export default function Gallery() {
  const [zoom, setZoom] = useState<string | null>(null);
  const zc = credits.find((c) => c.file === zoom);
  return (
    <div className="page">
      <h1>Gallery</h1>
      <p className="lede">Real screenshots of the key moments the evidence rests on. Each links to the evidence records that use it and to where the image was retrieved.</p>
      <div className="gallery">
        {credits.map((c) => {
          const uses = evidence.filter((e) => e.image === c.file);
          return (
            <figure key={c.file} className="gal-item">
              <button className="shot-btn" onClick={() => setZoom(c.file)} aria-label={`Enlarge ${c.caption}`}>
                <img src={`${import.meta.env.BASE_URL}img/${c.file}`} alt={c.caption} loading="lazy" />
              </button>
              <figcaption>
                <GameBadge id={c.game} short /> {c.caption}
                <div className="small">
                  {uses.map((u) => <Link key={u.id} to={`/evidence/${u.id}`} className="tag">{u.title}</Link>)}
                  <a href={c.sourcePage} target="_blank" rel="noreferrer" className="muted"> source ↗</a>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
      {zoom && (
        <div className="lightbox" onClick={() => setZoom(null)} role="dialog">
          <img src={`${import.meta.env.BASE_URL}img/${zoom}`} alt={zc?.caption} />
          <p>{zc?.caption}</p>
        </div>
      )}
    </div>
  );
}
