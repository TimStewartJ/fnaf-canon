import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button, count as figures, smartQuotes, useAddress } from "../../components/ui";

/**
 * A section of a dossier page (person, place): the heading, a count and a one-line lead sit in a
 * left column on wide screens and above the content on narrow ones. The same shape as the sections
 * of the home page. `dense` closes the sections up, for an index made of many short ones.
 */
export function DossierSection({ id, title, count, lead, dense, children }: { id: string; title: string; count?: ReactNode; lead?: ReactNode; dense?: boolean; children: ReactNode }) {
  return (
    <section className={`ppl-sec${dense ? " ppl-sec--dense" : ""}`} id={id} aria-labelledby={`${id}-h`}>
      <header className="ppl-sec__head">
        <h2 className="ppl-sec__title" id={`${id}-h`}>{smartQuotes(title)}</h2>
        {count != null && <p className="ppl-sec__count">{count}</p>}
        {lead && <p className="ppl-sec__lead">{lead}</p>}
      </header>
      <div className="ppl-sec__body">{children}</div>
    </section>
  );
}

/** A small heading for a group of rows. Inside a dossier section it is an h3; pass `as="h2"` where no h2 stands above it. */
export function GroupLabel({ children, count, as: Tag = "h3" }: { children: ReactNode; count?: number; as?: "h2" | "h3" }) {
  return <Tag className="label ppl-group">{children}{count != null && <span className="ppl-group__n">{figures(count)}</span>}</Tag>;
}

/**
 * Shows the first `cap` items and a button for the rest. A list only a little over the cap is shown
 * whole: hiding two rows behind a button helps nobody. The button stays put and toggles, so
 * keyboard focus is never lost.
 */
export function Capped<T>({ items, cap, noun, children }: { items: readonly T[]; cap: number; noun: string; children: (shown: readonly T[]) => ReactNode }) {
  const [all, setAll] = useState(false);
  const more = useRef<HTMLParagraphElement | null>(null);
  const folded = useRef(false);
  const over = items.length > cap + 2;
  // After folding a long list the button would be far above the viewport: bring it back.
  useLayoutEffect(() => {
    if (!folded.current) return;
    folded.current = false;
    more.current?.scrollIntoView({ block: "center" });
  }, [all]);
  return (
    <>
      {children(over && !all ? items.slice(0, cap) : items)}
      {over && (
        <p className="ppl-more" ref={more}>
          <Button
            size="sm"
            aria-expanded={all}
            iconEnd={all ? ChevronUp : ChevronDown}
            onClick={() => { folded.current = all; setAll(!all); }}
          >
            {all ? `Show the first ${figures(cap)}` : `Show all ${figures(items.length)} ${noun}`}
          </Button>
        </p>
      )}
    </>
  );
}

/**
 * Jump links to the sections of the current page, each with a count of what it holds. The links
 * add a hash (which the shell scrolls to) and keep the page's query string.
 */
export function JumpLinks({ items, label = "On this page" }: { items: readonly { id: string; label: string; n?: number }[]; label?: string }) {
  const { link: anchor } = useAddress();
  if (items.length < 2) return null;
  return (
    <nav className="ppl-toc" aria-label={label}>
      {items.map((it) => (
        <Link key={it.id} to={anchor(it.id)} className="ppl-toc__link">{smartQuotes(it.label)}{it.n != null && <span className="ppl-toc__n">{figures(it.n)}</span>}</Link>
      ))}
    </nav>
  );
}
