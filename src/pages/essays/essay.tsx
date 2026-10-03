/**
 * The essay template shared by The Box, Theorists & Scott, Scott & Faith and Method.
 *
 * An essay is: a header that states the question, with the short answers under it; sections whose
 * heading sits beside their content on a wide screen; rows that open in place for lists and dated
 * histories; and the records cited, numbered, at the foot. It is built to sit in the same family as
 * the theory's cover and chapters without importing from them.
 */
import type { CSSProperties, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import type { Source } from "../../data/community";
import { evidenceById, theoryById } from "../../data/store";
import {
  Button, Chip, CiteList, Collapsible, ConfidenceMark, EvidenceList, Figure, Icon, RichText, chapterNumber, chapterPath, imgSize, isPlainClick, smartQuotes,
} from "../../components/ui";
import { ESSAYS, SOURCES_ID, answerExhibits, answerId, count, isConfidence, pad2, recordOfImage } from "./essayModel";
import { RowsContext, useRows, type RowsControl } from "./essayRows";

/* ── Links inside the page ─────────────────────────────────────────────────────── */

/**
 * A link to another part of the same page. The shell scrolls to the target; this also moves
 * keyboard focus there (the target needs tabIndex={-1}) and works when the hash is already set.
 */
export function EssayJump({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  const { search, hash } = useLocation();
  return (
    <Link
      to={{ search, hash: `#${to}` }}
      className={className}
      onClick={(e) => {
        if (!isPlainClick(e)) return;
        const el = document.getElementById(to);
        el?.focus({ preventScroll: true });
        if (hash === `#${to}`) { e.preventDefault(); el?.scrollIntoView({ block: "start" }); }
      }}
    >
      {children}
    </Link>
  );
}

/* ── Header pieces ─────────────────────────────────────────────────────────────── */

/** How sure an answer is: the shared confidence mark when the value is on the scale, the author's own words otherwise. */
export function EssayConfidence({ value }: { value: string }) {
  if (isConfidence(value)) return <ConfidenceMark value={value} variant="inline" long />;
  return <span className="essay-conf"><span className="label">Confidence</span> {smartQuotes(value)}</span>;
}

export interface EssayAnswerItem {
  q: string;
  /** The short answer. A string gets typographic quotes. */
  a: ReactNode;
  confidence?: string;
  /** Id of the section that argues it, and the words for the link there. */
  to?: string;
  more?: string;
}

/** The short answers, under the header's question: each can be read on its own, each links to its argument. */
export function EssayAnswers({ items, label = "The short answers" }: { items: EssayAnswerItem[]; label?: string }) {
  if (!items.length) return null;
  return (
    <div className="essay-answers" role="group" aria-label={label}>
      <p className="label">{label}</p>
      <dl className="essay-answers__list">
        {items.map((it, i) => (
          <div key={i} className="essay-answer">
            <dt className="essay-answer__q"><span className="essay-answer__n" aria-hidden>{pad2(i + 1)}</span>{smartQuotes(it.q)}</dt>
            <dd className="essay-answer__a">{typeof it.a === "string" ? smartQuotes(it.a) : it.a}</dd>
            {(it.confidence || it.to) && (
              <dd className="essay-answer__foot">
                {it.confidence && <EssayConfidence value={it.confidence} />}
                {it.to && <EssayJump to={it.to} className="essay-answer__more">{it.more ?? "The argument"}<Icon icon={ArrowDown} /></EssayJump>}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

function openSources() {
  const d = document.getElementById(SOURCES_ID);
  if (!(d instanceof HTMLDetailsElement)) return;
  d.open = true;
  d.scrollIntoView({ block: "start" });
  d.querySelector("summary")?.focus({ preventScroll: true });
}

/** The quiet line under the header: reading time, what the page holds, and a way to the source list. */
export function EssayMeta({ minutes, cited, facts = [] }: { minutes?: number; cited: number; facts?: string[] }) {
  const parts: ReactNode[] = [
    ...(minutes ? [`${minutes} min read`] : []),
    ...facts,
    ...(cited > 0 ? [<button key="cited" type="button" className="essay-meta__sources" onClick={openSources}>{count(cited, "record")} cited</button>] : []),
  ];
  return (
    <p className="essay-meta">
      {parts.map((p, i) => <span key={i}>{i > 0 && <span aria-hidden> · </span>}{p}</span>)}
    </p>
  );
}

/* ── Sections ──────────────────────────────────────────────────────────────────── */

/**
 * A section of an essay. Its heading (kicker, h2, lead, actions) sits beside the content on a wide
 * screen and stays in view while the content scrolls; on a narrow screen it sits above.
 * `id` is required: the short answers and the address link to it.
 */
export function EssaySection({ id, kicker, title, lead, actions, children, className }: { id: string; kicker?: ReactNode; title: string; lead?: ReactNode; actions?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`essay-section${className ? ` ${className}` : ""}`} id={id} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <header className="essay-section__head">
        {kicker && <p className="kicker">{kicker}</p>}
        <h2 className="essay-section__title" id={`${id}-title`}>{smartQuotes(title)}</h2>
        {lead && <div className="essay-section__lead">{lead}</div>}
        {actions && <div className="essay-section__actions">{actions}</div>}
      </header>
      <div className="essay-section__body">{children}</div>
    </section>
  );
}

/* ── Rows that open in place ───────────────────────────────────────────────────── */

/**
 * A list of rows. With a `control` (from useEssayRows) each row is a disclosure that opens in
 * place; without one the rows are always open.
 *  - variant "ledger"  ruled rows, for scored lists (theories, readings, guesses)
 *  - variant "spine"   rows hung on a vertical line, for dated histories
 */
export function EssayRows({ control, variant = "ledger", label, children }: { control?: RowsControl; variant?: "ledger" | "spine"; label: string; children: ReactNode }) {
  return (
    <RowsContext.Provider value={control ?? null}>
      <ol className={`essay-rows essay-rows--${variant}`} aria-label={label}>{children}</ol>
    </RowsContext.Provider>
  );
}

/**
 * One row: an optional date beside it, a line of small marks (kicker), the title, an optional
 * one-line gist, and the detail (children).
 *  - when   sits outside the disclosure, so it may hold a control such as a date pill
 *  - node   what marks the row on the spine: a swatch or an icon
 */
export function EssayRow({ id, when, node, kicker, title, sub, children }: { id?: string; when?: ReactNode; node?: ReactNode; kicker?: ReactNode; title: string; sub?: ReactNode; children: ReactNode }) {
  const rows = useRows();
  // The pieces are direct children of the summary: a heading may not sit inside a span.
  const dated = when != null;
  const head = (
    <>
      {kicker && <span className={`essay-row__kicker${dated ? " essay-row__kicker--wide" : ""}`}>{kicker}</span>}
      <h3 className="essay-row__title">{smartQuotes(title)}</h3>
      {sub && <span className="essay-row__sub">{sub}</span>}
    </>
  );
  return (
    <li className={`essay-row${dated ? " essay-row--dated" : ""}`} id={id}>
      {/* On a narrow screen the date and the marks share one line above the title; on a wide one the date has its own column. */}
      {dated && <div className="essay-row__when">{when}{kicker && <span className="essay-row__kicker essay-row__kicker--narrow">{kicker}</span>}</div>}
      {node !== undefined && <div className="essay-row__node" aria-hidden><span className="essay-row__dot">{node}</span></div>}
      {rows && id ? (
        <details className="essay-row__item" open={rows.isOpen(id)} onToggle={(e) => rows.toggle(id, e.currentTarget.open)}>
          <summary className="essay-row__head">{head}<Icon icon={ChevronDown} className="essay-row__chev" /></summary>
          <div className="essay-row__body">{children}</div>
        </details>
      ) : (
        <div className="essay-row__item">
          <div className="essay-row__head">{head}</div>
          <div className="essay-row__body">{children}</div>
        </div>
      )}
    </li>
  );
}

/** Opens every row of a list, or closes them all once they are all open. */
export function EssayToggleAll({ control }: { control: RowsControl }) {
  if (control.total < 2) return null;
  const allOpen = control.openCount === control.total;
  return (
    <Button variant="quiet" size="sm" icon={allOpen ? ChevronsDownUp : ChevronsUpDown} onClick={() => control.setAll(!allOpen)}>
      {allOpen ? "Close all" : "Open all"}
    </Button>
  );
}

/* ── Things a row or a section holds ───────────────────────────────────────────── */

/** A small square in a data hue, with nothing to read: always next to the word it colours. */
export function EssaySwatch({ hue }: { hue: string }) {
  return <span className="essay-swatch" style={{ "--hue": hue } as CSSProperties} aria-hidden />;
}

/** "Evidence:" and the records as chips. Nothing when the list is empty. */
export function EssayEvidence({ ids, label = "Evidence" }: { ids: string[]; label?: string }) {
  if (!ids.length) return null;
  return <p className="essay-evidence"><span className="label">{label}</span> <CiteList ids={ids} /></p>;
}

/**
 * Links out of the archive (videos, posts, archived pages). They say where something came from and
 * are never evidence, which the label repeats every time.
 *  - chip   words for the tag on a source that is not primary (defaults to its reliability)
 */
export function EssayRefs({ items, label = "Outside links", chip }: { items: readonly Source[]; label?: string; chip?: string }) {
  if (!items.length) return null;
  return (
    <div className="essay-refs">
      <p className="label">{label} <span className="essay-refs__note">· not evidence</span></p>
      <ul className="essay-refs__list">
        {items.map((s, i) => {
          const text = <>{smartQuotes(s.who)} · <cite>{smartQuotes(s.what)}</cite>{s.date ? ` · ${s.date}` : ""}</>;
          return (
            <li key={i} className="essay-ref">
              {s.url
                ? <a href={s.url} target="_blank" rel="noreferrer">{text}<Icon icon={ArrowUpRight} /><span className="sr-only"> (opens in a new tab)</span></a>
                : <span>{text}</span>}
              {s.reliability !== "primary" && <Chip>{chip ?? s.reliability}</Chip>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * A link to the chapter of the theory that argues something: its number, its title and how
 * confident it is. Renders nothing when the id names no chapter, so a renamed chapter cannot
 * leave a dead link.
 */
export function EssayChapterLink({ id, label = "In the theory" }: { id: string | undefined; label?: string }) {
  const s = id ? theoryById.get(id) : undefined;
  if (!s) return null;
  const n = chapterNumber(s.id);
  return (
    <Link to={chapterPath(s.id)} className="essay-chapter">
      <span className="label">{label}</span>
      <span className="essay-chapter__main">
        {n > 0 && <span className="essay-chapter__n">{pad2(n)}</span>}
        <span className="essay-chapter__title">{smartQuotes(s.title)}</span>
        <ConfidenceMark value={s.confidence} variant="glyph" />
        <Icon icon={ArrowRight} className="essay-chapter__go" />
      </span>
    </Link>
  );
}

/**
 * An image as an exhibit inside an essay. It is never stretched past its own pixels (small
 * pixel art may grow a little, which keeps it crisp), and it links to the record it illustrates.
 *  - evidence   the record the image belongs to; adds the "Record" link under it
 *  - size       "wide" for an exhibit in the argument, "side" for one beside a dated step,
 *               "hero" for the one in the header
 */
export function EssayFigure({ file, evidence, caption, size = "wide", eager }: { file: string; evidence?: string; caption?: ReactNode; size?: "wide" | "side" | "hero"; eager?: boolean }) {
  const natural = imgSize(file)?.width;
  return (
    <div className={`essay-figure essay-figure--${size}`} style={natural ? ({ "--essay-natural": `${natural}px` } as CSSProperties) : undefined}>
      <Figure file={file} evidence={evidence && evidenceById.has(evidence) ? evidence : undefined} caption={caption} tag="Exhibit" eager={eager} />
    </div>
  );
}

/**
 * The detail of a dated step: the passage, its image as an exhibit beside it on a wide screen, the
 * records it rests on, and the outside links it came from.
 */
export function EssayEntry({ text, image, evidence, sources, sourceChip }: { text: string; image?: string; evidence: string[]; sources?: readonly Source[]; sourceChip?: string }) {
  return (
    <div className={`essay-entry${image ? " essay-entry--figure" : ""}`}>
      <p className="essay-text"><RichText text={text} /></p>
      {image && <EssayFigure file={image} evidence={recordOfImage(image, evidence)} size="side" />}
      <EssayEvidence ids={evidence} />
      {sources && <EssayRefs items={sources} chip={sourceChip} />}
    </div>
  );
}

export interface EssayLongAnswer { q: string; short: string; body: string[]; confidence: string }

/**
 * The long form of each short answer, one section per question. The question is the heading; the
 * short answer and its confidence stay beside the argument. Records the argument cites that carry
 * an image are shown as exhibits after it (each image once per page; `shown` lists images the page
 * already shows, such as the header's).
 */
export function EssayArgument({ answers, shown }: { answers: readonly EssayLongAnswer[]; shown?: readonly string[] }) {
  const exhibits = answerExhibits(answers.map((a) => a.body), shown);
  return (
    <>
      {answers.map((a, i) => (
        <EssaySection
          key={i}
          id={answerId(i)}
          className="essay-section--answer"
          kicker={`Question ${i + 1} of ${answers.length}`}
          title={a.q}
          lead={
            <>
              <p className="essay-verdict__a">{smartQuotes(a.short)}</p>
              <p className="essay-verdict__conf"><EssayConfidence value={a.confidence} /></p>
            </>
          }
        >
          <div className="prose">{a.body.map((para, j) => <p key={j}><RichText text={para} /></p>)}</div>
          {exhibits[i].map((x) => <EssayFigure key={x.file} file={x.file} evidence={x.id} />)}
        </EssaySection>
      ))}
    </>
  );
}

/* ── The foot of an essay ──────────────────────────────────────────────────────── */

/**
 * Every record the page cites, in the order it cites them, numbered like the markers in the text
 * (the page wraps itself in a <CiteScope prime={ids}> so the two agree).
 */
export function EssaySources({ ids, note }: { ids: readonly string[]; note?: ReactNode }) {
  if (!ids.length) return null;
  return (
    <section className="essay-end" aria-label="Sources">
      <Collapsible id={SOURCES_ID} summary="Records cited on this page" meta={`${count(ids.length, "record")}, in order`}>
        {note && <p className="essay-note">{note}</p>}
        <EvidenceList ids={ids} numbers={(id) => ids.indexOf(id) + 1} claim={false} />
      </Collapsible>
    </section>
  );
}

/** The other essays, at the foot of each. */
export function EssayMore({ current }: { current: string }) {
  const others = ESSAYS.filter((e) => e.to !== current);
  return (
    <nav className="essay-more" aria-labelledby="essay-more-title">
      <h2 className="label" id="essay-more-title">More essays</h2>
      <ul className="essay-more__list">
        {others.map((e) => (
          <li key={e.to}>
            <Link to={e.to} className="essay-more__item">
              <span className="essay-more__title">{e.title}</span>
              <span className="essay-more__desc">{e.desc}</span>
              <Icon icon={ArrowRight} className="essay-more__go" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
