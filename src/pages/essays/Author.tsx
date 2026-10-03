import { AUTHOR_PHASE, READING_STATUS, authorAnswer, authorTimeline, lexicon, readings, type LexLine } from "../../data/author";
import { creditByFile, evidenceById } from "../../data/store";
import { Chip, CiteScope, DatePill, EvidenceLink, GameMark, LEXICON_HUE, PHASE_HUE, Page, PageHeader, READING_TONE, RichText, hueOf, smartQuotes } from "../../components/ui";
import {
  EssayAnswers, EssayArgument, EssayChapterLink, EssayEntry, EssayFigure, EssayMeta, EssayMore, EssayRow, EssayRows, EssaySection, EssaySources, EssaySwatch, EssayToggleAll,
} from "./essay";
import { answerId, citedIn, count, knownRecords, readingMinutes, yearSpan } from "./essayModel";
import { useEssayRows } from "./essayRows";
import "./essays.css";
import "./author.css";

/** The header's exhibit: page furniture, with a caption written for it. Left out if the archive no longer holds the image. */
const HERO = "scott-pilgrims-progress-game-shot.jpg";

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
const MINUTES = readingMinutes(authorAnswer.flatMap((a) => [a.short, ...a.body]));
const LINE_COUNT = lexicon.reduce((n, g) => n + g.lines.filter((l) => evidenceById.has(lineId(l))).length, 0);

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
          : <span className="author-lex__words">{e.quote ? `“${smartQuotes(e.quote.replace(/\s*…$/, ""))}”` : smartQuotes(e.title)}</span>}
      </EvidenceLink>
    </li>
  );
}

export default function Author() {
  const steps = useEssayRows(STEP_IDS);
  const tested = useEssayRows(READING_IDS);
  const hero = creditByFile.has(HERO) ? HERO : undefined;
  return (
    <Page title="Scott & Faith" className="essay author-page">
      <CiteScope prime={CITED}>
        <PageHeader
          kicker="Essay · The author"
          title="Scott & Faith"
          lede="Before Five Nights at Freddy’s, Scott Cawthon spent about twelve years making Christian films and games. Does that background change how the games should be read?"
          aside={hero && <EssayFigure file={hero} caption="The Pilgrim’s Progress: The Video Game (c. 2011). The battle commands are Faith, Truth, Pray for and Blessings." size="hero" eager />}
        >
          <EssayAnswers items={authorAnswer.map((a, i) => ({ q: a.q, a: a.short, confidence: a.confidence, to: answerId(i) }))} />
          <EssayMeta minutes={MINUTES} facts={[count(readings.length, "reading tested", "readings tested"), count(authorTimeline.length, "dated step")]} cited={CITED.length} />
        </PageHeader>

        <EssayArgument answers={authorAnswer} shown={hero ? [hero] : []} />

        <EssaySection
          id="readings"
          kicker="Applied"
          title="Readings, tested against this background"
          lead={<p>Each reading is judged on the games first. Scott’s faith only affects how literally the games’ own words are taken.</p>}
          actions={<EssayToggleAll control={tested} />}
        >
          <EssayRows control={tested} label="Readings, tested against this background">
            {readings.map((r, i) => (
              <EssayRow
                key={READING_IDS[i]}
                id={READING_IDS[i]}
                kicker={<Chip tone={READING_TONE[r.status]}>{READING_STATUS[r.status]?.label ?? r.status}</Chip>}
                title={r.claim}
              >
                <p className="essay-text"><RichText text={r.body} /></p>
                <EssayChapterLink id={r.section} />
              </EssayRow>
            ))}
          </EssayRows>
        </EssaySection>

        <EssaySection
          id="vocabulary"
          kicker="In the games’ words"
          title="The games’ own vocabulary"
          lead={<p>The {LINE_COUNT} religious and afterlife lines in the archive’s records, grouped by what they do in the story. Select a line to open its record.</p>}
        >
          <div className="author-lex">
            {lexicon.map((g) => {
              const lines = g.lines.filter((l) => evidenceById.has(lineId(l)));
              const group = lines.map(lineId);
              return (
                <section key={g.id} className="author-lex__group" aria-labelledby={`lex-${g.id}`}>
                  <h3 className="author-lex__theme" id={`lex-${g.id}`}><EssaySwatch hue={hueOf(LEXICON_HUE, g.id)} />{smartQuotes(g.theme)}</h3>
                  <p className="author-lex__gloss">{smartQuotes(g.gloss)}</p>
                  <ul className="author-lex__lines">{lines.map((l) => <LexRow key={lineId(l)} line={l} group={group} />)}</ul>
                </section>
              );
            })}
          </div>
        </EssaySection>

        <EssaySection
          id="history"
          kicker="The record, in order"
          title="From Christian films to Freddy’s"
          lead={<p>{count(authorTimeline.length, "dated step")}, {yearSpan(authorTimeline.map((s) => s.date))}. Open a step for the passage and the records behind it.</p>}
          actions={<EssayToggleAll control={steps} />}
        >
          <EssayRows control={steps} variant="spine" label="From Christian films to Freddy’s">
            {authorTimeline.map((s) => (
              <EssayRow
                key={s.id}
                id={s.id}
                when={<DatePill variant="inline" label={s.date} kind={/^\d{4}-\d{2}-\d{2}$/.test(s.date) ? "printed" : "estimated"} basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} />}
                node={<EssaySwatch hue={hueOf(PHASE_HUE, s.phase)} />}
                kicker={<span className="label">{AUTHOR_PHASE[s.phase]?.label ?? s.phase}</span>}
                title={s.title}
              >
                <EssayEntry text={s.body} image={s.image} evidence={s.evidence} sources={s.sources} sourceChip="archive" />
              </EssayRow>
            ))}
          </EssayRows>
          <p className="essay-note">
            Hope Animation was a Christian media website run from the UK by David Hutter that sold and hosted Scott’s films; it was not Scott’s own studio.
            Its archived pages are used here only for titles, years and descriptions. Scott’s words are the evidence.
          </p>
        </EssaySection>

        <EssaySources ids={CITED} />
        <EssayMore current="/author" />
      </CiteScope>
    </Page>
  );
}
