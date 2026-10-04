import { useCallback, useEffect, useId, useLayoutEffect, useState, type CSSProperties, type ReactNode, type SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ImageOff, Maximize2, X } from "lucide-react";
import { creditByFile, evidenceById } from "../data/store";
import { isPlainClick, useEvidenceDrawer } from "./evidenceDrawer";
import { useFlick, useModalDialog } from "./hooks";
import { ExternalLink } from "./controls";
import { evidencePath, imgSize, imgUrl } from "./links";
import { Icon } from "./Icon";
import { smartQuotes } from "./typography";

/**
 * Pixel-art PNGs stay crisp when drawn larger than they are; everything else is drawn smooth.
 * How large an image is drawn depends on how it is fitted to its box. Fitted inside it (object-fit:
 * contain, the frame's default), the scale is the smaller of the two sides': a tall image in a wide
 * box is being shrunk, however wide the box. Filling it (cover, as in a card's cropped picture),
 * the scale is the larger: the same image across a wide card is being enlarged.
 */
function markScale(img: HTMLImageElement): void {
  const png = /\.png(\?|$)/i.test(img.currentSrc || img.src);
  let scale = 0;
  if (png && img.naturalWidth > 0 && img.naturalHeight > 0) {
    const across = img.clientWidth / img.naturalWidth, down = img.clientHeight / img.naturalHeight;
    scale = getComputedStyle(img).objectFit === "cover" ? Math.max(across, down) : Math.min(across, down);
  }
  img.classList.toggle("is-upscaled", scale > 1.05);
}
/** Measures again when an image's box changes size (the window, the viewer's stage). */
const scaleWatch = typeof ResizeObserver === "undefined" ? null : new ResizeObserver((entries) => { for (const e of entries) markScale(e.target as HTMLImageElement); });
/** A ref for an <img>: keeps its crispness right from the moment it loads and for as long as it is on the page. */
const crisp = (img: HTMLImageElement | null) => {
  if (!img || !scaleWatch) return;
  scaleWatch.observe(img);
  return () => scaleWatch.unobserve(img);
};
const onImgLoad = (e: SyntheticEvent<HTMLImageElement>) => markScale(e.currentTarget);

/*
 * Two ways of not fetching an image before it is wanted.
 *
 * The browser's own (loading="lazy") is the default: it knows about printing, reader modes and
 * slow connections, and on a page of prose with a figure every screen or two it fetches little
 * that will not be seen.
 *
 * On a page that is a wall of images (the gallery, a list with a thumbnail on every row) it
 * starts a good two screens ahead, which on a phone is most of the page. There an image is
 * fetched only when it comes near the window (`near` on <FigureFrame>, and always for <Thumb>).
 * Until then the frame holds an empty picture of the same shape, so nothing moves when the real
 * one arrives.
 */
const AHEAD = "400px 0px";
const waiting = new Map<Element, () => void>();
const nearWatch = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    waiting.get(e.target)?.();
    waiting.delete(e.target);
    nearWatch?.unobserve(e.target);
  }
}, { rootMargin: AHEAD });
// A printed page needs every image, wherever it is.
if (typeof window !== "undefined") window.addEventListener("beforeprint", () => { for (const show of [...waiting.values()]) show(); waiting.clear(); });
/** An empty image of a given shape: no request, no layout shift. */
const blank = (size: { width: number; height: number }): string => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size.width} ${size.height}'/%3E`;
/** Whether an image has come near the window yet, and the ref that watches for it (and keeps it crisp). */
function useNear(now: boolean): [boolean, (el: HTMLImageElement | null) => (() => void) | undefined] {
  const [near, setNear] = useState(now || !nearWatch);
  const ref = useCallback((el: HTMLImageElement | null) => {
    if (!el) return undefined;
    const stopCrisp = crisp(el);
    if (near || !nearWatch) return stopCrisp;
    waiting.set(el, () => setNear(true));
    nearWatch.observe(el);
    return () => { stopCrisp?.(); nearWatch.unobserve(el); waiting.delete(el); };
  }, [near]);
  return [near, ref];
}

/**
 * A small decorative picture from public/img for a box whose size the stylesheet sets (a row's
 * thumbnail). Fetched when it comes near the window; if the file is missing, the box stays empty.
 */
export function Thumb({ file, className }: { file: string; className?: string }) {
  const [near, ref] = useNear(false);
  return <img ref={ref} className={className} src={near ? imgUrl(file) : blank({ width: 3, height: 2 })} alt="" loading="lazy" decoding="async" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />;
}

/** Said in place of an image whose file could not be loaded. */
function Unavailable({ alt }: { alt: string }) {
  return <span className="figure__missing" role="img" aria-label={alt ? `Image unavailable: ${alt}` : "Image unavailable"}><Icon icon={ImageOff} /> Image unavailable</span>;
}

/** A photograph (anything but pixel-art PNG) goes soft when drawn much larger than it is, so it is held near its own size. */
const PHOTO_STRETCH = 1.25;

/**
 * The mat an image sits on, as a button that enlarges it. If the file cannot be loaded, the frame
 * stays at the image's own shape with a plain note in it, and is no longer a button.
 * <Figure> is built on it; use it directly for a grid of images with captions of your own.
 *
 * `captionId` is the id of a caption shown next to the frame that already says what the image is.
 * The image is then described by that caption, and the same sentence is not read out again as
 * its alt text and once more as the button's name.
 *
 * `near` is for a page that is mostly images: the file is fetched only when the frame comes near
 * the window (see above). Not for figures in running text, which must print.
 */
export function FigureFrame({ file, alt, eager = false, near: whenNear = false, onZoom, captionId }: { file: string; alt: string; eager?: boolean; near?: boolean; onZoom: () => void; captionId?: string }) {
  const [failed, setFailed] = useState<string | null>(null);
  const size = imgSize(file);
  // An image whose shape is not known is fetched at once: there would be nothing to hold its place with.
  const [near, img] = useNear(eager || !whenNear || !size);
  if (failed === file) {
    return <div className="figure__frame figure__frame--missing" style={size ? { aspectRatio: `${size.width} / ${size.height}` } : undefined}><Unavailable alt={alt} /></div>;
  }
  const photo = !!size && !/\.png$/i.test(file);
  return (
    <button type="button" className="figure__frame" onClick={onZoom} aria-label={captionId ? "Enlarge image" : `Enlarge image: ${alt}`} aria-describedby={captionId}>
      <img
        ref={img} src={near || !size ? imgUrl(file) : blank(size)} {...size} alt={captionId ? "" : alt} loading={eager ? "eager" : "lazy"} decoding="async"
        className={photo ? "is-photo" : undefined} style={photo ? { "--natural": `${Math.round(size.width * PHOTO_STRETCH)}px` } as CSSProperties : undefined}
        onLoad={onImgLoad} onError={() => { if (near) setFailed(file); }}
      />
      <span className="figure__zoom" aria-hidden><Icon icon={Maximize2} /></span>
    </button>
  );
}

/**
 * Full-screen image viewer. Escape, the close button, or a click on the backdrop closes it;
 * focus returns to whatever opened it. Pass onPrev/onNext to page through a set: the arrow keys
 * work, and so does a flick of a finger to either side. A pull downwards closes it.
 */
export function Lightbox({ file, caption, onClose, onPrev, onNext, counter }: { file: string; caption?: ReactNode; onClose: () => void; onPrev?: () => void; onNext?: () => void; counter?: string }) {
  const credit = creditByFile.get(file);
  const dialogProps = useModalDialog(true, onClose);
  const alt = typeof caption === "string" ? caption : credit?.caption ?? "";
  const shown = caption ?? credit?.caption;
  const [failed, setFailed] = useState<string | null>(null);
  const dialog = dialogProps.ref;
  // Paging redraws the caption. Focus that was on a link in it stays in the viewer, on the way onward.
  useLayoutEffect(() => {
    const el = dialog.current;
    if (el && !el.contains(document.activeElement)) el.querySelector<HTMLElement>(".lightbox__nav:last-of-type, .lightbox__bar .icon-btn")?.focus();
  }, [dialog, file]);
  // A finger moves the picture it is on: flicked left, the next one comes in from the right.
  const flick = useFlick({ onSide: (dir) => (dir < 0 ? onNext : onPrev)?.(), onDown: onClose });
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
      <div className="lightbox__stage" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} {...flick}>
        {onPrev && <button type="button" className="icon-btn lightbox__nav" onClick={onPrev} aria-label="Previous image"><Icon icon={ChevronLeft} /></button>}
        {failed === file
          ? <Unavailable alt={alt} />
          : <img ref={crisp} src={imgUrl(file)} alt={alt} decoding="async" onLoad={onImgLoad} onError={() => setFailed(file)} onClick={onClose} />}
        {onNext && <button type="button" className="icon-btn lightbox__nav" onClick={onNext} aria-label="Next image"><Icon icon={ChevronRight} /></button>}
      </div>
      <div className="lightbox__caption">
        <span>{typeof shown === "string" ? smartQuotes(shown) : shown}</span>
        {credit && <ExternalLink className="figure__credit" href={credit.sourcePage}>Image source</ExternalLink>}
      </div>
    </dialog>
  );
}

/**
 * A screenshot shown as an exhibit: dark mat, caption, credit, click to enlarge. If the file cannot
 * be loaded the frame and the caption stay, with a plain note where the image would be.
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
  const capId = useId();
  // The caption stands in for the alt text when it is on screen and no separate description was given.
  const captioned = !compact && !!cap && alt === undefined;
  return (
    <figure className={`figure${compact ? " figure--compact" : ""}${className ? ` ${className}` : ""}`}>
      <FigureFrame file={file} alt={altText} eager={eager} onZoom={() => setZoom(true)} captionId={captioned ? capId : undefined} />
      {!compact && (cap || credit) && (
        <figcaption className="figure__caption">
          {tag && <span className="label">{tag}</span>}
          {cap && <span className="figure__text" id={capId}>{typeof cap === "string" ? smartQuotes(cap) : cap}</span>}
          <span className="figure__meta">
            {record && (
              // Its name says which record: a page of figures otherwise has a dozen links called "Record".
              <Link to={evidencePath(record.id)} className="figure__credit" aria-label={`Record: ${record.title}`} onClick={(e) => { if (!isPlainClick(e)) return; e.preventDefault(); drawer.open(record.id); }}>
                Record
              </Link>
            )}
            {credit && <ExternalLink className="figure__credit" href={credit.sourcePage}>Image source</ExternalLink>}
          </span>
        </figcaption>
      )}
      {zoom && <Lightbox file={file} caption={cap} onClose={() => setZoom(false)} />}
    </figure>
  );
}
