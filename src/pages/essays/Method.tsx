import { memo, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { TheorySection } from "../../data/schema";
import { citationsIn, evidence, evidenceById, evidenceFiledUnder, outsideStory, people, relations, storyline, theory, timeline } from "../../data/store";
import {
  ButtonLink, CERTAINTY, CONFIDENCE, CiteGroup, CiteList, CiteScope, Collapsible, DATE_KIND, DATE_KINDS, DateGlyph, EntityLink, EvidenceList, Fact, Facts, FirmGlyph, FirmnessLegend,
  GameMark, Page, PageHeader, RichText, STATUS, chapterPath, count, partGroups, plural, readingOrder, smartQuotes, useMediaQuery, type FirmnessInfo,
} from "../../components/ui";
import { modelCoverage, type Coverage } from "./coverage";
import { EssayAnswers, EssayJump, EssayMore, EssayRow, EssayRows, EssaySection, type EssayAnswerItem } from "./essay";
import { citedIn, knownRecords, pad2, sentenceList, tally } from "./essayModel";
import { useEssayRows } from "./essayRows";
import "./essays.css";
import "./method.css";

/*
 * Everything the page counts or links to is read off the store when it loads, so the page stays
 * true while the content changes: no record ids, chapter ids or totals are written here.
 */

/** Where every record stands in the theory's accounting (the same count scripts/validate.ts reports). */
const COVERAGE = modelCoverage(evidence, theory, outsideStory, citationsIn, evidenceFiledUnder, storyline.flatMap((b) => citedIn(b.when, b.text)));

/** Scott's statements about the books, found by what the records say they are, not by id. */
const BOOK_STATEMENTS = evidence.filter((e) => e.kind === "scott-statement" && e.tags?.includes("novels")).map((e) => e.id);
/** The chapter that weighs those statements: the one citing most of them (the earliest, on a tie), and at least two. */
const BOOKS_CHAPTER: TheorySection | undefined = (() => {
  const wanted = new Set(BOOK_STATEMENTS);
  let best: TheorySection | undefined, bestHits = 1;
  for (const s of readingOrder) {
    const hits = citationsIn(s).filter((id) => wanted.has(id)).length;
    if (hits > bestHits) { best = s; bestHits = hits; }
  }
  return best;
})();

/**
 * Live examples for the section on citations: the first records the theory cites, taking those with
 * a quote and a screenshot first because they show the most in a preview.
 */
const SAMPLE = (() => {
  const cited = knownRecords(readingOrder.flatMap(citationsIn));
  const pool = cited.length ? cited : evidence.map((e) => e.id);
  const rich = pool.filter((id) => { const e = evidenceById.get(id); return !!e?.quote && !!e.image; });
  return [...new Set([...rich, ...pool])].slice(0, 3);
})();
/** A live example for the section on dates: the first date token in the storyline. */
const SAMPLE_DATE = storyline.map((b) => b.when.match(/<<[^>]+>>/)?.[0]).find(Boolean);
/** People the games never name, shown as the archive names them. Stub pages are left out. */
const DESCRIPTORS = people.filter((p) => p.nameStatus === "descriptor" && p.group !== "other");

/** Sources that have at least one record (a source can be listed before anything is recorded from it). */
const SOURCE_COUNT = new Set(evidence.map((e) => e.game)).size;

const CERTAINTY_TALLY = tally(evidence, (e) => e.certainty);
const STATUS_TALLY = tally([...relations, ...timeline], (x) => x.status);
const CONFIDENCE_TALLY = tally(theory, (s) => s.confidence);

/**
 * One of the three scales, defined in words. The glyphs are drawn once, by the shared legend above.
 * On a phone the definitions fold away under the scale's name; the legend already shows the words.
 */
function Scale({ title, about, levels, tallies, noun, fold }: { title: string; about: string; levels: Record<string, FirmnessInfo>; tallies: Map<string, number>; noun: [string, string]; fold: boolean }) {
  const list = (
    <dl className="method-scale__levels">
      {Object.entries(levels).map(([value, info]) => (
        <div key={value}>
          <dt>{info.word}</dt>
          <dd className="method-scale__n">{plural(tallies.get(value) ?? 0, noun[0], noun[1])}</dd>
          <dd>{info.help}.</dd>
        </div>
      ))}
    </dl>
  );
  if (fold) {
    return (
      <Collapsible summary={title} meta={sentenceList(Object.values(levels).map((l) => l.short.toLowerCase()))} className="method-scale">
        <p className="method-scale__about">{about}</p>
        {list}
      </Collapsible>
    );
  }
  return (
    <section className="method-scale">
      <h3 className="method-scale__title">{title}</h3>
      <p className="method-scale__about">{about}</p>
      {list}
    </section>
  );
}

/** The live accounting: how many records are cited, filed, set aside, or still waiting. */
function Ledger({ c }: { c: Coverage }) {
  if (!c.total) return null;
  const rows: { key: string; n: number; label: ReactNode; note: string }[] = [
    { key: "cited", n: c.cited, label: "Cited by a chapter", note: "In its argument, or listed as evidence that pushes back against it." },
    { key: "filed", n: c.filed, label: "Filed as further evidence", note: "Listed at the end of a chapter: on its thread, not cited in its text." },
    // Only when it happens: a record the short storyline cites that no chapter has taken up. The archive's own check counts it as placed.
    ...(c.story > 0 ? [{ key: "story", n: c.story, label: <Link to="/theory#storyline">Cited in the storyline only</Link>, note: "By a beat of the short telling, and not yet by a chapter." }] : []),
    { key: "outside", n: c.outside, label: outsideStory.length > 0 ? <Link to="/theory#outside">Outside the story</Link> : "Outside the story", note: "Set aside with a stated reason, in the appendix of the theory." },
    ...(c.unplaced > 0 ? [{ key: "unplaced", n: c.unplaced, label: "Not yet placed", note: "In the evidence locker, waiting for a chapter to take it up." }] : []),
  ];
  const parts = `${count(c.cited)} cited, ${count(c.filed)} filed${c.story > 0 ? `, ${count(c.story)} in the storyline only` : ""}, ${count(c.outside)} outside the story`;
  const summary = c.complete
    ? `All ${count(c.total)} records are placed: ${parts}.`
    : `${count(c.placed)} of ${count(c.total)} records are placed so far: ${parts}. ${count(c.unplaced)} ${c.unplaced === 1 ? "is" : "are"} not yet placed.`;
  return (
    <div className="method-ledger">
      <p className="method-ledger__sum">
        {c.complete
          ? <>All <strong>{count(c.total)}</strong> records are placed.</>
          : <><strong>{count(c.placed)}</strong> of {count(c.total)} records are placed so far<span className="method-ledger__pct"> · {c.percent}%</span></>}
      </p>
      <div className="method-ledger__bar" role="img" aria-label={summary}>
        {rows.filter((r) => r.n > 0).map((r) => <span key={r.key} className="method-ledger__seg" data-part={r.key} style={{ flexGrow: r.n }} />)}
      </div>
      <dl className="method-ledger__rows">
        {rows.map((r) => (
          <div key={r.key} className="method-ledger__row">
            <dt><span className="method-ledger__seg method-ledger__key" data-part={r.key} aria-hidden />{r.label}</dt>
            <dd className="method-ledger__n num">{count(r.n)}</dd>
            <dd className="method-ledger__note">{r.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** What the archive uses without treating it as evidence. Each row states its rule; the detail opens in place. */
const APART: { id: string; title: string; rule: string; body: ReactNode }[] = [
  {
    id: "apart-wording",
    title: "Wording and screenshots",
    rule: "Community transcripts are used to check wording, and for nothing else.",
    body: (
      <>
        Exact wording of dialogue and on-screen text was cross-checked against community transcripts, mainly the FNaF fandom wiki, and each record
        names the page its wording was checked against. Those pages are used only as transcripts of the games; their interpretations, trivia sections
        and theories are not used. Screenshots come from the wiki’s file pages, and every image links to the page it was taken from.
      </>
    ),
  },
  {
    id: "apart-theories",
    title: "Fan theories",
    rule: "Never evidence. They are scored against the records on a page of their own.",
    body: (
      <>
        <Link to="/community">Theorists &amp; Scott</Link> scores the best-known theories against the records and follows how Scott and the community
        influenced each other. Each judgement there cites records like everything else; the theories and the videos that argued them are linked, and
        nothing in the model rests on them.
      </>
    ),
  },
  {
    id: "apart-author",
    title: "The author",
    rule: "What Scott says about himself is a record about the author, never a fact inside the story.",
    body: (
      <>
        Scott’s statements about himself, including his Christian faith, are used only to judge how literally to read words the games already contain,
        such as “Hell” or “rest”. Where Scott ruled a reading out, as he did in 2014 for the idea that the animatronics stand for vices, it stays out.
        See <Link to="/author">Scott &amp; Faith</Link>.
      </>
    ),
  },
];
const APART_IDS = APART.map((a) => a.id);

const SECTIONS = ["evidence-rule", "records", "firmness", "citations", "dates", "accounting", "apart", "limits"] as const;
const kicker = (id: (typeof SECTIONS)[number]) => pad2(SECTIONS.indexOf(id) + 1);

/** The three scales in words. On a phone each folds under its name. */
function Scales() {
  const fold = useMediaQuery("(max-width: 699px)");
  return (
    <div className={`method-scales${fold ? " method-scales--fold" : ""}`}>
      {/* In the order of the legend's columns, so the eye can go straight down from one to the other. */}
      <Scale fold={fold} title="A chapter: confidence" about="How well the chapter’s main claim holds." levels={CONFIDENCE} tallies={CONFIDENCE_TALLY} noun={["chapter", "chapters"]} />
      <Scale fold={fold} title="A record: certainty" about="How directly the source supports the claim." levels={CERTAINTY} tallies={CERTAINTY_TALLY} noun={["record", "records"]} />
      <Scale fold={fold} title="A link or event: support" about="How well the cited records establish it. These are the three layers of the reconstruction." levels={STATUS} tallies={STATUS_TALLY} noun={["link or event", "links and events"]} />
    </div>
  );
}

/** What is kept apart from the evidence. The section owns which rows are open. */
function Apart() {
  const apart = useEssayRows(APART_IDS);
  return (
    <EssaySection
      id="apart"
      kicker={kicker("apart")}
      title="What is kept apart"
      lead={<p>Three things the archive uses or discusses without letting them settle anything in the story.</p>}
    >
      <EssayRows control={apart} label="What is kept apart">
        {APART.map((a) => (
          <EssayRow key={a.id} id={a.id} title={a.title} sub={a.rule}>
            <p className="essay-text">{a.body}</p>
          </EssayRow>
        ))}
      </EssayRows>
    </EssaySection>
  );
}

const ANSWERS: EssayAnswerItem[] = [
  { q: "What counts as evidence?", a: "The games, and Scott Cawthon’s own words. Nothing else: no novels, no guidebooks, no films.", to: "evidence-rule", more: "The source rule" },
  { q: "What is a record?", a: "One fact from one exact place in a game or in a post by Scott, graded by how directly the source supports it.", to: "records", more: "Records" },
  {
    q: "How firm is a claim?",
    // The marks themselves, not a description of them: the same glyph the rest of the site draws.
    a: <>One mark, used everywhere: <span className="nowrap"><FirmGlyph level="firm" /> firm,</span> <span className="nowrap"><FirmGlyph level="partial" /> partial,</span> <span className="nowrap"><FirmGlyph level="tentative" /> tentative.</span></>,
    to: "firmness", more: "The marks",
  },
  { q: "How do I check a claim?", a: "Follow its number. Every claim cites its records, and a record opens over the page you are reading.", to: "citations", more: "Citations" },
];

function Method() {
  const c = COVERAGE;
  return (
    <Page title="Method" className="essay method-page">
      <CiteScope prime={SAMPLE}>
        <PageHeader
          kicker="About the archive"
          title="Method"
          lede="What counts as evidence here, how a record is built, and how to tell how far any claim on this site can be trusted."
          aside={
            <aside className="panel method-today" aria-labelledby="h-method-today">
              <p className="label" id="h-method-today">The archive today</p>
              <Facts>
                <Fact label="Records"><span className="method-today__v"><Link to="/evidence">{plural(evidence.length, "record")}</Link><span className="method-today__more">, one fact each</span></span></Fact>
                <Fact label="Sources"><span className="method-today__v"><Link to="/sources">{plural(SOURCE_COUNT, "source")}</Link><span className="method-today__more">: the games, Scott’s posts and his teasers</span></span></Fact>
                <Fact label="The theory"><span className="method-today__v"><Link to="/theory">{plural(theory.length, "chapter")}</Link> in {plural(partGroups.length, "part")}</span></Fact>
                {c.total > 0 && (
                  <Fact label="Placed in the theory">
                    <span className="method-today__v"><EssayJump to="accounting">{c.complete ? `All ${count(c.total)}` : `${count(c.placed)} of ${count(c.total)}`}</EssayJump>{!c.complete && ` · ${c.percent}%`}</span>
                  </Fact>
                )}
              </Facts>
            </aside>
          }
        >
          <EssayAnswers items={ANSWERS} />
        </PageHeader>

        <EssaySection id="evidence-rule" kicker={kicker("evidence-rule")} title="What counts as evidence">
          <div className="prose">
            <p>Only two kinds of source are admitted:</p>
            <ol>
              <li><strong>The games.</strong> Everything a player can reach in them: phone calls and tapes, printed text, minigames, cutscenes, environment art, mechanics, hidden screens, extras menus and endings.</li>
              <li><strong>Scott Cawthon’s own words.</strong> His Steam and Reddit posts, interviews in his own words, and the teasers he published on scottgames.com.</li>
            </ol>
            <p>
              The novels, the Fazbear Frights and Tales from the Pizzaplex anthologies, the guidebooks, the Survival Logbook and the films are excluded.
              Scott has said different things about the books: in 2015 he called the first novel a separate continuity, in 2020 he said the Fazbear Frights
              books would fill in some blanks about the past, and in 2024 he answered the question in a way that settles nothing. Those statements are in the
              archive as records{BOOKS_CHAPTER && <>, and the chapter <Link to={chapterPath(BOOKS_CHAPTER.id)}>{smartQuotes(BOOKS_CHAPTER.title)}</Link> weighs them</>}.
              The archive takes the strict line regardless: every conclusion has to stand on the games and Scott’s words alone.
            </p>
            {/* The anchor that "nobody by that name" links to, from the People search and the search palette. */}
            <p id="names">
              One consequence is that names found only in the books are never used here. Where the games give no name, the archive uses a plain descriptor
              and sets it in italic wherever people are listed.
            </p>
          </div>
          {DESCRIPTORS.length > 0 && (
            <p className="essay-evidence">
              <span className="label">For example</span>
              {DESCRIPTORS.slice(0, 3).map((p) => <EntityLink key={p.id} id={p.id} variant="chip" />)}
            </p>
          )}
          {BOOK_STATEMENTS.length > 0 && (
            <Collapsible summary="Scott’s statements about the books" meta={plural(BOOK_STATEMENTS.length, "record")}>
              <EvidenceList ids={BOOK_STATEMENTS} />
            </Collapsible>
          )}
        </EssaySection>

        <EssaySection id="records" kicker={kicker("records")} title="One record, one fact">
          <div className="prose">
            <p>
              The basic unit is the evidence record: one claim, one exact place in a source, one time inside the story. A record quotes the source when a short
              quote carries the point, says where to find it (a night’s phone call, a named minigame, a dated post), and notes anything ambiguous about it.
              The archive holds {plural(evidence.length, "record")} from {plural(SOURCE_COUNT, "source")}.
            </p>
            <p>
              A record never holds a conclusion. “Purple Guy is William Afton” is not a record; the in-game facts that connect the two are, and the
              connection is argued in the theory, where it can be weighed.
            </p>
            <p>Each record also carries a grade for how directly its source supports the claim. That grade is one of three scales that share one mark.</p>
          </div>
        </EssaySection>

        <EssaySection id="firmness" kicker={kicker("firmness")} title="How firm is it">
          <div className="prose">
            <p>
              Three kinds of thing carry a grade: a chapter of the theory, a record, and a link between people or an event on the timeline. The three scales
              have the same shape, so they share one mark, and this is its key, the same one the theory prints. Lines in the family trees and the web
              follow it too: solid, dashed, dotted. The word always travels with the mark.
            </p>
          </div>
          <div className="method-legend"><FirmnessLegend /></div>
          <Scales />
          <div className="prose">
            <p>
              A strong inference is one that could only be rejected by assuming the games are wrong. Anything marked theory is this archive’s own
              reconstruction, and it always carries that label. Two rules are enforced by the archive’s own checks: nothing is marked canon on implied
              records alone, and a chapter below high confidence is flagged if it lists no evidence against itself.
            </p>
          </div>
        </EssaySection>

        <EssaySection id="citations" kicker={kicker("citations")} title="From a claim to its record">
          <div className="prose">
            <p>
              A sentence that rests on a record ends in a small number.{" "}
              {/* Shown only while markers are: with them hidden there would be nothing to try. */}
              {SAMPLE.length > 0 && <span className="method-try">Try this one<CiteGroup ids={SAMPLE.slice(0, 1)} />: it leads to a record the theory cites. </span>}
              Point at a number for a preview of the record. Click or tap it and the record opens over the page, in a panel at the side on a wide screen or a
              sheet at the bottom on a phone; close it and you are back where you were. Numbers start at 1 on each page, and a record keeps its number
              wherever it comes up again on that page.
            </p>
            <p>
              Outside running text, records appear as chips that show the mark, the source and the record’s title, or as rows in a list. They open the same
              panel, and when several records are cited together the panel pages through them.
            </p>
          </div>
          {SAMPLE.length > 0 && <p className="essay-evidence"><span className="label">For example</span> <CiteList ids={SAMPLE} /></p>}
          <div className="prose">
            <p>
              Every chapter of the theory, and each of the three essays, ends with the records it cites, in order, under the same numbers. If the numbers
              get in the way, Reading settings (in the header, or in the menu on a phone) can hide them: the text reads the same without them, and the
              lists at the end remain.
            </p>
          </div>
        </EssaySection>

        <EssaySection id="dates" kicker={kicker("dates")} title="How dates are justified">
          <div className="prose">
            <p>
              The games print very few dates, so every date on this site says what kind of date it is. Select a date to see the reasoning and the records
              behind it{SAMPLE_DATE && <>, as with this one from the storyline: <RichText text={SAMPLE_DATE} opens={false} /></>}.
            </p>
          </div>
          <dl className="method-dates">
            {DATE_KINDS.map((k) => (
              <div key={k}>
                <dt><DateGlyph kind={k} /> {DATE_KIND[k].label}</dt>
                <dd>{DATE_KIND[k].help}.</dd>
              </div>
            ))}
          </dl>
          <div className="prose">
            <p>
              Every event, era and place on the timeline has a written reason for its date, and an event’s date can only be marked printed if at least
              one record states or shows it. A record’s own date is the time inside the story that the fact belongs to, not the day the game came out. Scott’s
              posts sit outside the story’s clock; their records give the day he posted instead.
            </p>
          </div>
        </EssaySection>

        <EssaySection id="accounting" kicker={kicker("accounting")} title="Accounting for every record">
          <div className="prose">
            <p>
              The theory has to answer to the whole evidence locker, not only to the records that suit it. So each record must end up in one of three places:
              cited by a chapter, which includes the records a chapter lists as pushing back against it; filed under a chapter as further evidence on its
              thread; or listed as outside the story, with the reason.
            </p>
          </div>
          <Ledger c={c} />
          <p className="essay-note">
            {c.complete
              ? "The count is worked out from the archive’s data each time this page loads."
              : "The count is worked out from the archive’s data each time this page loads, so it moves as chapters take up more records. Unplaced records are still in the locker, searchable and open to check."}
          </p>
          {c.unplacedBySource.length > 0 && (
            <Collapsible summary="Not yet placed, by source" meta={plural(c.unplaced, "record")}>
              <ul className="method-unplaced">
                {c.unplacedBySource.map(([id, n]) => <li key={id}><GameMark id={id} variant="full" link /><span className="num">{count(n)}</span></li>)}
              </ul>
            </Collapsible>
          )}
        </EssaySection>

        <Apart />

        <EssaySection id="limits" kicker={kicker("limits")} title="Known limits">
          <div className="prose">
            <ul>
              <li>Coverage is broad, not exhaustive. The largest games (Security Breach, Help Wanted 2, Secret of the Mimic) hold more collectibles than the archive has records for.</li>
              <li>Quotes are short excerpts chosen for the sentence that carries the point. Where a transcript could not be verified, the record paraphrases instead of quoting.</li>
              <li>Transcripts can contain errors. If a record is wrong, the source location printed on it should make it quick to check in the game.</li>
              {!c.complete && c.total > 0 && <li>The accounting is unfinished: {plural(c.unplaced, "record has", "records have")} not been placed in the theory yet.</li>}
            </ul>
          </div>
          <p className="method-next">
            <ButtonLink to="/evidence" variant="primary" iconEnd={ArrowRight}>Open the evidence locker</ButtonLink>
            <ButtonLink to="/theory">Read the theory</ButtonLink>
          </p>
        </EssaySection>

        <EssayMore current="/method" label="The essays" theory={false} />
      </CiteScope>
    </Page>
  );
}

// Nothing in the page's frame depends on the address, so an opened row never re-renders it.
export default memo(Method);
