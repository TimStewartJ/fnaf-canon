import { useEffect, useState, type ReactNode, type SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { creditByFile, evidenceById } from "../data/store";
import { isPlainClick, useEvidenceDrawer } from "./evidenceDrawer";
import { useModalDialog } from "./hooks";
import { evidencePath, imgSize, imgUrl } from "./links";
import { Icon } from "./Icon";

/** Pixel-art PNGs stay crisp when shown larger than their natural size. */
function markUpscaled(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  const png = /\.png(\?|$)/i.test(img.currentSrc || img.src);
  img.classList.toggle("is-upscaled", png && img.naturalWidth > 0 && img.clientWidth > img.naturalWidth * 1.05);
}

/**
 * Full-screen image viewer. Escape, the close button, or a click on the backdrop closes it;
 * focus returns to whatever opened it. Pass onPrev/onNext to page through a set (arrow keys work).
 */
export function Lightbox({ file, caption, onClose, onPrev, onNext, counter }: { file: string; caption?: ReactNode; onClose: () => void; onPrev?: () => void; onNext?: () => void; counter?: string }) {
  const credit = creditByFile.get(file);
  const dialogProps = useModalDialog(true, onClose);
  const alt = typeof caption === "string" ? caption : credit?.caption ?? "";
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && onPrev) { e.preventDefault(); onPrev(); }
      if (e.key === "ArrowRight" && onNext) { e.preventDefault(); onNext(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext]);
  return (
    <dialog className="lightbox" aria-label="Image viewer" {...dialogProps}>
      <div className="lightbox__bar">
        <span className="label">{counter ?? "Exhibit"}</span>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close image viewer" autoFocus><Icon icon={X} /></button>
      </div>
      <div className="lightbox__stage" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        {onPrev && <button type="button" className="icon-btn lightbox__nav" onClick={onPrev} aria-label="Previous image"><Icon icon={ChevronLeft} /></button>}
        <img src={imgUrl(file)} alt={alt} onLoad={markUpscaled} onClick={onClose} />
        {onNext && <button type="button" className="icon-btn lightbox__nav" onClick={onNext} aria-label="Next image"><Icon icon={ChevronRight} /></button>}
      </div>
      <div className="lightbox__caption">
        <span>{caption ?? credit?.caption}</span>
        {credit && <a className="figure__credit" href={credit.sourcePage} target="_blank" rel="noreferrer">Image source<Icon icon={ArrowUpRight} /></a>}
      </div>
    </dialog>
  );
}

/**
 * A screenshot shown as an exhibit: dark mat, caption, credit, click to enlarge.
 *  - caption   defaults to the credited caption for the file; may be rich content
 *  - evidence  id of the record the image illustrates; adds a "Record" link that opens the drawer
 *  - compact   image only (no caption), for cards and tight spots
 *  - tag       small label above the caption, e.g. "Exhibit" or "Fig. 2"
 */
export function Figure({ file, caption, alt, evidence, compact = false, tag, className, eager = false }: { file: string; caption?: ReactNode; alt?: string; evidence?: string; compact?: boolean; tag?: string; className?: string; eager?: boolean }) {
  const credit = creditByFile.get(file);
  const [zoom, setZoom] = useState(false);
  const drawer = useEvidenceDrawer();
  const cap = caption ?? credit?.caption ?? "";
  const altText = alt ?? (typeof cap === "string" ? cap : credit?.caption ?? "");
  const record = evidence ? evidenceById.get(evidence) : undefined;
  return (
    <figure className={`figure${compact ? " figure--compact" : ""}${className ? ` ${className}` : ""}`}>
      <button type="button" className="figure__frame" onClick={() => setZoom(true)} aria-label={`Enlarge image: ${altText}`}>
        <img src={imgUrl(file)} {...imgSize(file)} alt={altText} loading={eager ? "eager" : "lazy"} decoding="async" onLoad={markUpscaled} />
        <span className="figure__zoom" aria-hidden><Icon icon={Maximize2} /></span>
      </button>
      {!compact && (cap || credit) && (
        <figcaption className="figure__caption">
          {tag && <span className="label">{tag}</span>}
          {cap && <span className="figure__text">{cap}</span>}
          <span className="figure__meta">
            {record && (
              <Link to={evidencePath(record.id)} className="figure__credit" onClick={(e) => { if (!isPlainClick(e)) return; e.preventDefault(); drawer.open(record.id); }}>
                Record
              </Link>
            )}
            {credit && <a className="figure__credit" href={credit.sourcePage} target="_blank" rel="noreferrer">Image source<Icon icon={ArrowUpRight} /></a>}
          </span>
        </figcaption>
      )}
      {zoom && <Lightbox file={file} caption={cap} onClose={() => setZoom(false)} />}
    </figure>
  );
}
