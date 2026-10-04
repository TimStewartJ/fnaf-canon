import { memo } from "react";
import { AUTHOR_PHASE, READING_STATUS, authorAnswer, authorTimeline, lexicon, readings, type AuthorStep, type LexLine } from "../../data/author";
import { creditByFile, evidenceById } from "../../data/store";
import { Chip, CiteScope, EvidenceLink, GameMark, LEXICON_HUE, PHASE_HUE, Page, PageHeader, READING_TONE, RealDate, RichText, hueOf, smartQuotes, sourceWords } from "../../components/ui";
import {
  EssayAnswers, EssayArgument, EssayChapterLink, EssayEntry, EssayFigure, EssayMeta, EssayMore, EssayRow, EssayRows, EssaySection, EssaySources, EssaySwatch, EssayToggleAll,
  type EssayAnswerItem,
} from "./essay";
import { answerId, citedIn, countOverYears, facts, knownRecords, readingMinutes } from "./essayModel";
import { useEssayRows } from "./essayRows";
import "./essays.css";
import "./author.css";

type Reading = (typeof readings)[number];

/** The header's exhibit: page furniture, with a caption written for it. Left out if the archive no longer holds the image. */
const HERO_FILE = "scott-pilgrims-progress-game-shot.jpg";
const HERO = creditByFile.has(HERO_FILE) ? HERO_FILE : undefined;

const lineId = (line: LexLine): string => (typeof line === "string" ? line : line[0]);

// Everything below is read off the data when the page loads: no ids or counts are written here.
const STEP_IDS = authorTimeline.map((s) => s.id);
const READING_IDS = readings.map((_, i) => `reading-${i + 1}`);
/** Every record the page cites, in reading order. It fixes the citation numbers and is the source list. */
const CITED = knownRecords([
  ...authorAnswer.flatMap((a) => citedIn(...a.body)),
  ...readings.flatMap((r) => citedIn(r.body)),
  ...lexicon.flatMap((g) => g.lines.map(lineId)),
  ...authorTimeline.flatMap((s) => [...citedIn(s.body), ...s.evidence]),
]);
const ANSWERS: EssayAnswerItem[] = authorAnswer.map((a, i) => ({ q: a.q, a: a.short, confidence: a.confidence, to: answerId(i) }));
const FACTS = facts([readings.length, "reading tested", "readings tested"], [authorTimeline.length, "dated step"]);
const MINUTES = readingMinutes(authorAnswer.flatMap((a) => [a.short, ...a.body]));
/** The vocabulary as it can be shown: lines whose record the archive holds, and the groups that still have a line. */
const LEXICON = lexicon.map((g) => ({ ...g, lines: g.lines.filter((l) => evidenceById.has(lineId(l))) })).filter((g) => g.lines.length > 0);
const LINE_COUNT = LEXICON.reduce((n, g) => n + g.lines.length, 0);

const ReadingRow = memo(function ReadingRow({ r, id }: { r: Reading; id: string }) {
  return (
    <EssayRow id={id} kicker={<Chip tone={READING_TONE[r.status]}>{READING_STATUS[r.status]?.label ?? r.status}</Chip>} title={r.claim}>
      <p className="essay-text"><RichText text={r.body} /></p>
      <EssayChapterLink id={r.section} />
    </EssayRow>
  );
});

/** The readings. The section owns which of them are open. */
function Readings() {
  const tested = useEssayRows(READING_IDS);
  return (
    <EssaySection
      id="readings"
      kicker="Applied"
      title="Readings, tested against this background"
      lead={<p>Each reading is judged on the games first. Scott’s faith only affects how literally the games’ own words are taken.</p>}
      actions={<EssayToggleAll control={tested} what="readings" />}
    >
      <EssayRows control={tested} label="Readings, tested against this background">
        {readings.map((r, i) => <ReadingRow key={READING_IDS[i]} r={r} id={READING_IDS[i]} />)}
      </EssayRows>
    </EssaySection>
  );
}

/** One line of the games' vocabulary: where it is from and the words themselves. It opens its record. */
function LexRow({ line, group }: { line: LexLine; group: string[] }) {
  const [id, text] = typeof line === "string" ? [line, undefined] : line;
  const e = evidenceById.get(id);
  if (!e) return null;
  return (
    <li>
      <EvidenceLink id={id} group={group} className="author-lex__line">
        <GameMark id={e.game} />
        {text
          ? <span className="author-lex__words author-lex__words--plain">{smartQuotes(text)}</span>
          : <span className="author-lex__words">{e.quote ? <>“{sourceWords(e.quote.replace(/\s*…$/, ""))}”</> : smartQuotes(e.title)}</span>}
      </EvidenceLink>
    </li>
  );
}

const StepRow = memo(function StepRow({ s }: { s: AuthorStep }) {
  return (
    <EssayRow
      id={s.id}
      when={<RealDate date={s.date} short about={s.dateBasis} />}
      node={<EssaySwatch hue={hueOf(PHASE_HUE, s.phase)} />}
      kicker={<span className="label">{AUTHOR_PHASE[s.phase]?.label ?? s.phase}</span>}
      title={s.title}
    >
      <EssayEntry text={s.body} image={s.image} evidence={s.evidence} sources={s.sources} sourceChip="archive" date={s.date} dateBasis={s.dateBasis} />
    </EssayRow>
  );
});

/** The dated history. The section owns which steps are open. */
function History() {
  const steps = useEssayRows(STEP_IDS);
  return (
    <EssaySection
      id="history"
      kicker="The record, in order"
      title="From Christian films to Freddy’s"
      lead={<p>{countOverYears(authorTimeline.length, "dated step", authorTimeline.map((s) => s.date))}. Open a step for the passage and the records behind it.</p>}
      actions={<EssayToggleAll control={steps} what="steps" />}
    >
      <EssayRows control={steps} variant="spine" label="From Christian films to Freddy’s">
        {authorTimeline.map((s) => <StepRow key={s.id} s={s} />)}
      </EssayRows>
      <p className="essay-note">
        Hope Animation was a Christian media website run from the UK by David Hutter that sold and hosted Scott’s films; it was not Scott’s own studio.
        Its archived pages are used here only for titles, years and descriptions. Scott’s words are the evidence.
      </p>
    </EssaySection>
  );
}

function Author() {
  return (
    <Page title="Scott & Faith" className="essay author-page">
      <CiteScope prime={CITED}>
        <PageHeader
          kicker="Essay · The author"
          title="Scott & Faith"
          lede="Before Five Nights at Freddy’s, Scott Cawthon spent about twelve years making Christian films and games. Does that background change how the games should be read?"
          aside={HERO && <EssayFigure file={HERO} caption="The Pilgrim’s Progress: The Video Game (c. 2011). The battle commands are Faith, Truth, Pray for and Blessings." size="hero" eager />}
        >
          <EssayAnswers items={ANSWERS} />
          <EssayMeta minutes={MINUTES} facts={FACTS} cited={CITED.length} />
        </PageHeader>

        <EssayArgument answers={authorAnswer} shown={HERO} />

        {/* A list with nothing in it is not announced: the section goes with it. */}
        {readings.length > 0 && <Readings />}

        {LINE_COUNT > 0 && (
          <EssaySection
            id="vocabulary"
            kicker="In the games’ words"
            title="The games’ own vocabulary"
            lead={
              <p>
                {LINE_COUNT === 1 ? "The one religious or afterlife line" : `The ${LINE_COUNT} religious and afterlife lines`} in the archive’s records,
                grouped by what they do in the story. Select a line to open its record.
              </p>
            }
          >
            <div className="author-lex">
              {LEXICON.map((g) => {
                const group = g.lines.map(lineId);
                return (
                  <section key={g.id} className="author-lex__group" aria-labelledby={`lex-${g.id}`}>
                    <h3 className="author-lex__theme" id={`lex-${g.id}`}><EssaySwatch hue={hueOf(LEXICON_HUE, g.id)} />{smartQuotes(g.theme)}</h3>
                    <p className="author-lex__gloss">{smartQuotes(g.gloss)}</p>
                    <ul className="author-lex__lines">{g.lines.map((l) => <LexRow key={lineId(l)} line={l} group={group} />)}</ul>
                  </section>
                );
              })}
            </div>
          </EssaySection>
        )}

        {authorTimeline.length > 0 && <History />}

        <EssaySources ids={CITED} />
        <EssayMore current="/author" />
      </CiteScope>
    </Page>
  );
}

// Nothing in the page's frame depends on the address, so an opened row never re-renders it.
export default memo(Author);
