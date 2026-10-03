import { Fragment, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, CircleHelp, Info, KeyRound, TriangleAlert, type LucideIcon } from "lucide-react";
import { usePageTitle } from "./hooks";
import { Icon } from "./Icon";
import { smartQuotes } from "./typography";

/** True once the first page of this visit has been drawn (see Page). */
let arrived = false;

/** Plain strings handed to a heading or label get typographic quotes; other nodes pass through. */
const typeset = (node: ReactNode): ReactNode => (typeof node === "string" ? smartQuotes(node) : node);

/**
 * The root of every page: sets the document title and provides the standard container.
 *  - title   the page's name, the same words as its h1
 *  - kind    what sort of page it is, for a page named after its subject: "Person", "Chapter",
 *            "Record". It follows the name in the document title.
 *  - narrow  a single reading column (about 52rem)
 *  - flush   no container at all; the page lays out its own full-width bands
 */
export function Page({ title, kind, children, className, narrow, flush }: { title: string | null; kind?: string; children: ReactNode; className?: string; narrow?: boolean; flush?: boolean }) {
  usePageTitle(title, kind);
  // The first page of a visit appears at once (a fade would only add to the wait for it); the
  // pages after it fade in. Decided once, when the page is first drawn.
  const [first] = useState(() => !arrived);
  useEffect(() => { arrived = true; }, []);
  return <div className={`page${first ? " page--first" : ""}${narrow ? " page--narrow" : ""}${flush ? " page--flush" : ""}${className ? ` ${className}` : ""}`}>{children}</div>;
}

export interface Crumb { to?: string; label: ReactNode }

/** Breadcrumb trail. The last item is the current page and has no link. */
export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((c, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="crumbs__sep" aria-hidden>/</span>}
          {c.to ? <Link to={c.to}>{typeset(c.label)}</Link> : <span aria-current="page">{typeset(c.label)}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

/**
 * The top of a page: optional breadcrumbs or kicker, the h1, an optional lede, optional actions,
 * and an optional aside (an image or a summary) that sits to the right on wide screens.
 */
export function PageHeader({ kicker, crumbs, title, lede, children, aside, className }: { kicker?: ReactNode; crumbs?: Crumb[]; title: ReactNode; lede?: ReactNode; children?: ReactNode; aside?: ReactNode; className?: string }) {
  return (
    <header className={`page-header${aside ? " page-header--split" : ""}${className ? ` ${className}` : ""}`}>
      <div className="page-header__main">
        {crumbs && <Crumbs items={crumbs} />}
        {kicker && <p className="kicker">{typeset(kicker)}</p>}
        <h1 className="page-header__title">{typeset(title)}</h1>
        {lede && <p className="lede">{typeset(lede)}</p>}
        {children}
      </div>
      {aside && <div className="page-header__aside">{aside}</div>}
    </header>
  );
}

/** A titled section of a page (h2). `aside` sits on the heading's row; `lead` is a short intro line under it. */
export function Section({ title, children, aside, lead, id, className }: { title: ReactNode; children: ReactNode; aside?: ReactNode; lead?: ReactNode; id?: string; className?: string }) {
  return (
    <section className={`section${className ? ` ${className}` : ""}`} id={id}>
      <div className="section-head">
        <h2>{typeset(title)}</h2>
        {aside && <div className="section-head__aside">{typeset(aside)}</div>}
      </div>
      {lead && <p className="section-lead">{typeset(lead)}</p>}
      {children}
    </section>
  );
}

/**
 * Shown when a list or a search has nothing in it. `heading` makes the title the page's h1: for
 * a page that is nothing but this message (an address that leads nowhere, a page that failed).
 */
export function Empty({ title, children, action, heading = false }: { title?: string; children?: ReactNode; action?: ReactNode; heading?: boolean }) {
  return (
    <div className="empty">
      {title && (heading ? <h1 className="empty__title">{title}</h1> : <p className="empty__title">{title}</p>)}
      {children && <p className="empty__text">{children}</p>}
      {action}
    </div>
  );
}

/**
 * A collapsed section the reader can open. `meta` is a quiet note on the summary row, such as a count.
 *
 * Left alone it keeps its own state: `defaultOpen` is read once, when the section first appears, and
 * after that the reader owns it (a later render never opens or closes a section they are using).
 * Pass `open` to own the state yourself, with `onToggle` to hear of the reader's presses; you must
 * then pass the new value back.
 *
 * What is inside is not drawn until the section is first opened (and is kept from then on), so a
 * page of many closed sections costs nothing for them. Pass the content as a function to put off
 * even building it. `eager` draws it at once: for content that must be in the page while closed
 * (a list that prints, a target another control points at). `print` opens the section on paper
 * whatever its state on screen (a list the printed text refers to); it implies `eager`.
 */
export function Collapsible({ summary, meta, children, defaultOpen = false, open, onToggle, eager = false, print = false, id, className }: {
  summary: ReactNode;
  meta?: ReactNode;
  children: ReactNode | (() => ReactNode);
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  eager?: boolean;
  print?: boolean;
  id?: string;
  className?: string;
}) {
  const [startOpen] = useState(defaultOpen);
  const controlled = open !== undefined;
  const isOpen = controlled ? open : startOpen;
  // True once the section has been open. The press on the summary sets it (it comes before the
  // section opens, so the content is there when it does); the element's own event covers the rest.
  const [opened, setOpened] = useState(isOpen);
  const show = eager || print || opened || isOpen;
  const details = useRef<HTMLDetailsElement | null>(null);
  // The element toggles itself when pressed. When the state is owned outside, it is put back to what the owner says.
  useLayoutEffect(() => {
    if (controlled && details.current && details.current.open !== open) details.current.open = open;
  });
  return (
    <details
      ref={details}
      className={`collapsible${className ? ` ${className}` : ""}`}
      open={isOpen || undefined}
      id={id}
      data-print={print ? "open" : undefined}
      onToggle={(e) => {
        // The event is also sent for a section opened by something else (find in page, a link to something inside it).
        if (e.currentTarget !== e.target) return;
        const now = e.currentTarget.open;
        if (now) setOpened(true);
        if (!controlled || now !== open) onToggle?.(now);
      }}
    >
      <summary onClick={() => setOpened(true)}>
        <span className="collapsible__title">{typeset(summary)}</span>
        {meta && <span className="collapsible__meta">{meta}</span>}
        <Icon icon={ChevronDown} className="collapsible__chev" />
      </summary>
      {show && <div className="collapsible__body">{typeof children === "function" ? children() : children}</div>}
    </details>
  );
}

export type CalloutTone = "key" | "note" | "tension" | "open";
const CALLOUT: Record<CalloutTone, { icon: LucideIcon; label: string }> = {
  key: { icon: KeyRound, label: "Key point" },
  note: { icon: Info, label: "Note" },
  tension: { icon: TriangleAlert, label: "Pushes back" },
  open: { icon: CircleHelp, label: "Open question" },
};

/**
 * A boxed aside. Tones: key (the point to remember), note (an aside), tension (evidence that pushes
 * back), open (unresolved). Each tone has its own icon and label as well as its colour.
 */
export function Callout({ tone = "note", title, children, className }: { tone?: CalloutTone; title?: ReactNode; children: ReactNode; className?: string }) {
  const c = CALLOUT[tone];
  return (
    <aside className={`callout${className ? ` ${className}` : ""}`} data-tone={tone}>
      <p className="callout__label"><Icon icon={c.icon} /> {typeset(title ?? c.label)}</p>
      <div className="callout__body">{children}</div>
    </aside>
  );
}

/**
 * Wraps a table (or any wide block) so it scrolls sideways inside its own box instead of pushing
 * the page wider. Keyboard users can focus and scroll it.
 */
export function TableWrap({ children, label, className }: { children: ReactNode; label: string; className?: string }) {
  return (
    <div className={`table-wrap scroll-x${className ? ` ${className}` : ""}`} role="region" aria-label={label} tabIndex={0}>
      {children}
    </div>
  );
}

/** Long-form typographic context: serif text at reading size on the reading measure. */
export function Prose({ children, className, as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "article" | "section" }) {
  return <Tag className={`prose${className ? ` ${className}` : ""}`}>{children}</Tag>;
}

/** A definition list of labelled facts. Children are <Fact> rows. */
export function Facts({ children, className }: { children: ReactNode; className?: string }) {
  return <dl className={`facts${className ? ` ${className}` : ""}`}>{children}</dl>;
}
export function Fact({ label, children }: { label: ReactNode; children: ReactNode }) {
  return <div className="fact"><dt>{label}</dt><dd>{children}</dd></div>;
}

/** Quiet placeholder while a lazily loaded page or panel arrives. */
export function Loading({ label = "Loading" }: { label?: string }) {
  return <div className="loading" role="status" aria-live="polite"><span className="loading__dot" aria-hidden />{label}…</div>;
}
