import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CircleHelp } from "lucide-react";
import type { Evidence, TheorySection } from "../../data/schema";
import { backlinksFor, evidenceById, gameById } from "../../data/store";
import { gameMeta } from "../../data/gameMeta";
import {
  ButtonLink, CERTAINTY, Callout, CertaintyMark, Chip, Collapsible, Crumbs, Empty, EntityLink, EvidenceDate, Fact, Facts, Figure, GameMark, Icon, Page,
  RichText, SOURCE_KIND_ICON, Section, SourceLine, StatusMark, Tag, chapterNumber, chapterPath, evidencePath, kindLabel, smartQuotes, sourcePath, timelineEventPath,
  type LucideIcon,
} from "../../components/ui";
import { PLACE, beatsCiting, outsideGroupOf, placeOf, records } from "./coverage";
import { ResultRow, PlaceSwatch } from "./explorerParts";
import { neighbours } from "./sourceModel";
import "./evidence.css";

const NO_TERMS: string[] = [];
/** Related records shown before the rest is folded. */
const RELATED_SHOWN = 10;

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function Outbound({ href }: { href: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className="evx-rec__url">{bare(href)}<Icon icon={ArrowUpRight} /></a>;
}

/** Where a web address ends inside a sentence: not at its own brackets, but before the punctuation after it. */
function addressEnd(run: string): number {
  let end = run.length;
  while (end > 0) {
    const ch = run[end - 1];
    const head = run.slice(0, end);
    const unopened = ch === ")" && (head.match(/\)/g)?.length ?? 0) > (head.match(/\(/g)?.length ?? 0);
    if (/[.,;:!?'"]/.test(ch) || unopened) end -= 1; else break;
  }
  return end;
}

/**
 * A note that may hold no, one or several web addresses among its words (how a record's wording
 * was checked): the addresses become links, the words stay words.
 */
function Linked({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let at = 0;
  for (const m of text.matchAll(/https?:\/\/\S+/g)) {
    const url = m[0].slice(0, addressEnd(m[0]));
    if (!url) continue;
    if (m.index > at) out.push(smartQuotes(text.slice(at, m.index)));
    out.push(<Outbound key={m.index} href={url} />);
    at = m.index + url.length;
  }
  if (at < text.length) out.push(smartQuotes(text.slice(at)));
  return <>{out}</>;
}

/** One block of the "In the model" section: a small label and whatever hangs under it. */
function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="evx-model__block">
      <h3 className="label">{label}</h3>
      {children}
    </div>
  );
}

function ChapterRows({ chapters, id }: { chapters: TheorySection[]; id: string }) {
  return (
    <ul className="evx-links">
      {chapters.map((s) => (
        <li key={s.id}>
          <Link to={chapterPath(s.id)} className="evx-link">
            <span className="evx-link__n">{chapterNumber(s.id) || "·"}</span>
            <span className="evx-link__title">{smartQuotes(s.title)}</span>
            {s.counterEvidence?.includes(id) && <Chip tone="tension">pushes back</Chip>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Step to the neighbouring records of the same source. `compact` is the small stepper in the page head. */
function Pager({ e, compact }: { e: Evidence; compact?: boolean }) {
  const { prev, next, at, of } = neighbours(e);
  const short = gameMeta(e.game).short;
  if (of < 2) return null;
  if (compact) {
    return (
      <nav className="evx-step" aria-label={`Records from ${short}`}>
        {prev
          ? <Link to={evidencePath(prev.id)} className="evx-step__btn" rel="prev" aria-label={`Previous record from ${short}: ${prev.title}`} title={`Previous: ${prev.title}`}><Icon icon={ChevronLeft} /></Link>
          : <span className="evx-step__btn is-off" aria-hidden><Icon icon={ChevronLeft} /></span>}
        <Link to={sourcePath(e.game)} className="evx-step__at" title={`All records from ${gameById.get(e.game)?.title ?? short}`}>{at} of {of} in {short}</Link>
        {next
          ? <Link to={evidencePath(next.id)} className="evx-step__btn" rel="next" aria-label={`Next record from ${short}: ${next.title}`} title={`Next: ${next.title}`}><Icon icon={ChevronRight} /></Link>
          : <span className="evx-step__btn is-off" aria-hidden><Icon icon={ChevronRight} /></span>}
      </nav>
    );
  }
  return (
    <nav className="evx-pager" aria-label={`More records from ${short}`}>
      {prev ? (
        <Link to={evidencePath(prev.id)} className="evx-pager__link" rel="prev">
          <span className="label"><Icon icon={ArrowLeft} /> Previous in {short}</span>
          <span className="evx-pager__title">{smartQuotes(prev.title)}</span>
        </Link>
      ) : <span />}
      {next && (
        <Link to={evidencePath(next.id)} className="evx-pager__link evx-pager__link--next" rel="next">
          <span className="label">Next in {short} <Icon icon={ArrowRight} /></span>
          <span className="evx-pager__title">{smartQuotes(next.title)}</span>
        </Link>
      )}
    </nav>
  );
}

export default function EvidenceDetail() {
  const { id = "" } = useParams();
  const e = evidenceById.get(id);
  if (!e) {
    return (
      <Page title="Record not found" narrow>
        <h1 className="sr-only">Record not found</h1>
        <Empty title="No such record" action={<ButtonLink to="/evidence" variant="primary">Open the evidence locker</ButtonLink>}>
          There is no evidence record with the id “{id}”.
        </Empty>
      </Page>
    );
  }
  const bl = backlinksFor(id);
  const game = gameById.get(e.game);
  const place = placeOf(id);
  const beats = beatsCiting(id);
  const outside = outsideGroupOf(id);
  const related = [...new Set([...(e.related ?? []), ...bl.evidence.map((b) => b.id)])]
    .map((r) => evidenceById.get(r)).filter((x): x is Evidence => !!x && x.id !== id);
  const relatedIds = related.map((r) => r.id);
  const profiles = [...bl.people.map((p) => p.id), ...bl.places.map((p) => p.id)];
  const kindIcon: LucideIcon = (SOURCE_KIND_ICON as Record<string, LucideIcon>)[e.kind] ?? CircleHelp;
  const certainty = (CERTAINTY as Record<string, { help: string }>)[e.certainty];
  const hasTheory = bl.theory.length + bl.filed.length + beats.length > 0 || !!outside;
  const hasOther = bl.events.length + bl.relations.length + profiles.length > 0;
  const sits = place === "cited"
    ? bl.theory.length ? `Cited by ${records(bl.theory.length, "chapter")}` : "Cited in the storyline"
    : place === "filed" ? `Filed under ${records(bl.filed.length, "chapter")}` : PLACE[place].word;

  return (
    <Page title={e.title} className="evx-rec">
      <div className="evx-rec__top">
        <Crumbs items={[{ to: "/evidence", label: "Evidence" }, { to: sourcePath(e.game), label: gameMeta(e.game).short }, { label: e.id }]} />
        <Pager e={e} compact />
      </div>
      <header className="evx-rec__head">
        <p className="evx-rec__source"><SourceLine e={e} /></p>
        <h1 className="evx-rec__title">{smartQuotes(e.title)}</h1>
      </header>

      <div className="evx-rec__body">
        <div className="evx-rec__lead">
          <p className="evx-rec__claim">{smartQuotes(e.claim)}</p>
          {e.quote && <blockquote className="evx-rec__quote">“{smartQuotes(e.quote)}”</blockquote>}
        </div>

        <aside className="panel evx-rec__facts" aria-label="Record details">
          <Facts>
            <Fact label="Where exactly">
              {smartQuotes(e.location)}
              {e.url && <div className="evx-rec__sub">Original: <Outbound href={e.url} /></div>}
            </Fact>
            <Fact label="Source">
              <GameMark id={e.game} variant="full" link />
              {game?.released && <div className="evx-rec__sub">Released {game.released}</div>}
            </Fact>
            <Fact label="Kind of source">
              <Tag to={`/evidence?game=${encodeURIComponent(e.game)}&kind=${encodeURIComponent(e.kind)}`} title={`Every ${kindLabel(e.kind).toLowerCase()} record from this source`}>
                <Icon icon={kindIcon} /> {kindLabel(e.kind)}
              </Tag>
            </Fact>
            <Fact label="Certainty">
              <CertaintyMark value={e.certainty} variant="inline" />
              {certainty && <span className="muted"> {certainty.help}.</span>}
            </Fact>
            <Fact label="In-universe time">
              <EvidenceDate e={e} /> <span className="muted">({e.when.precision})</span>
              {e.when.basis && <div className="evx-rec__sub">Basis: {smartQuotes(e.when.basis)}</div>}
            </Fact>
            {!!e.people?.length && <Fact label="People"><span className="cluster">{e.people.map((p) => <EntityLink key={p} id={p} variant="chip" />)}</span></Fact>}
            {!!e.places?.length && <Fact label="Places"><span className="cluster">{e.places.map((p) => <EntityLink key={p} id={p} variant="chip" />)}</span></Fact>}
            {!!e.tags?.length && <Fact label="Tags"><span className="cluster">{e.tags.map((t) => <Tag key={t} to={`/evidence?tag=${encodeURIComponent(t)}`}>#{t}</Tag>)}</span></Fact>}
            <Fact label="Record id"><span className="evx-rec__id">{e.id}</span></Fact>
          </Facts>
        </aside>

        {(e.image || e.notes || e.verifiedVia) && (
          <div className="evx-rec__more">
            {e.image && <Figure file={e.image} tag="Exhibit" eager />}
            {e.notes && <Callout tone="note" title="Notes and caveats"><p>{smartQuotes(e.notes)}</p></Callout>}
            {e.verifiedVia && <p className="evx-rec__check"><span className="label">How the wording was checked</span> <Linked text={e.verifiedVia} /></p>}
          </div>
        )}
      </div>

      <Section title="In the model" className="evx-model" aside={<span className="evx-model__sits" title={PLACE[place].help}><PlaceSwatch place={place} /> {sits}</span>}>
        <div className="evx-model__grid">
          <div className="evx-model__col">
            {bl.theory.length > 0 && <Block label="Cited in"><ChapterRows chapters={bl.theory} id={id} /></Block>}
            {bl.filed.length > 0 && <Block label="Filed under, as further evidence"><ChapterRows chapters={bl.filed} id={id} /></Block>}
            {beats.length > 0 && (
              <Block label="In the storyline">
                <ul className="evx-links">
                  {beats.map(({ beat, n }) => (
                    <li key={beat.id}>
                      <Link to={`/theory#${beat.id}`} className="evx-link">
                        <span className="evx-link__n">{n}</span>
                        <span className="evx-link__title">{smartQuotes(beat.title)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Block>
            )}
            {outside && (
              <Block label="Outside the story">
                <p className="evx-model__text"><Link to={`/theory#outside-${outside.id}`}>{smartQuotes(outside.title)}</Link></p>
                <p className="evx-model__text read"><RichText text={outside.reason} /></p>
              </Block>
            )}
            {!hasTheory && (
              <Block label="In the theory">
                <p className="evx-model__text muted">No chapter cites or files this record yet, and it is not listed as outside the story.</p>
              </Block>
            )}
          </div>
          {hasOther && (
            <div className="evx-model__col">
              {bl.events.length > 0 && (
                <Block label="On the timeline">
                  <ul className="evx-links">
                    {bl.events.map((t) => (
                      <li key={t.id}>
                        <Link to={timelineEventPath(t.id)} className="evx-link evx-link--wide">
                          <span className="evx-link__n"><StatusMark value={t.status} variant="glyph" /></span>
                          <span className="evx-link__title">{smartQuotes(t.title)}</span>
                          <span className="evx-link__meta">{smartQuotes(t.yearLabel)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
              {bl.relations.length > 0 && (
                <Block label="Relationships it supports">
                  <ul className="evx-rels">
                    {bl.relations.map((r, i) => (
                      <li key={i}>
                        <StatusMark value={r.status} variant="glyph" />
                        <span><EntityLink id={r.from} /> <span className="muted">{r.kind.replace(/-/g, " ")}</span> <EntityLink id={r.to} /></span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
              {profiles.length > 0 && (
                <Block label="Profiles that cite it">
                  <p className="cluster evx-model__chips">{profiles.map((x) => <EntityLink key={x} id={x} variant="chip" />)}</p>
                </Block>
              )}
            </div>
          )}
        </div>

        {related.length > 0 && (
          <div className="evx-model__block evx-model__related">
            <h3 className="label">Related records · {related.length}</h3>
            <ul className="evx-list">
              {related.slice(0, RELATED_SHOWN).map((r) => <ResultRow key={r.id} e={r} group={relatedIds} terms={NO_TERMS} />)}
            </ul>
            {related.length > RELATED_SHOWN && (
              <Collapsible summary={`${related.length - RELATED_SHOWN} more related records`}>
                <ul className="evx-list">
                  {related.slice(RELATED_SHOWN).map((r) => <ResultRow key={r.id} e={r} group={relatedIds} terms={NO_TERMS} />)}
                </ul>
              </Collapsible>
            )}
          </div>
        )}
      </Section>

      <Pager e={e} />
    </Page>
  );
}
