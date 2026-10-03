import { memo } from "react";
import { Link } from "react-router-dom";
import { boxAnswer, boxGuesses, boxTimeline, type BoxStep } from "../../data/box";
import { creditByFile } from "../../data/store";
import { CiteScope, DatePill, PHASE_HUE, Page, PageHeader, RichText, hueOf, smartQuotes } from "../../components/ui";
import {
  EssayAnswers, EssayArgument, EssayEntry, EssayFigure, EssayMeta, EssayMore, EssayRefs, EssayRow, EssayRows, EssaySection, EssaySources, EssaySwatch, EssayToggleAll,
  type EssayAnswerItem,
} from "./essay";
import { answerId, citedIn, count, knownRecords, readingMinutes, recordOfImage, yearSpan } from "./essayModel";
import { useEssayRows } from "./essayRows";
import "./essays.css";
import "./box.css";

/** Words for the phases of the box's history. An unknown phase falls back to its id. */
const PHASE: Record<string, string> = { planted: "Planted", explained: "Explained", shelved: "Shelved", echoed: "Echoed", abandoned: "Abandoned" };

/** The header's exhibit: page furniture, with a caption written for it. Left out if the archive no longer holds the image. */
const HERO_FILE = "fnaf4-locked-box-ending.jpg";
const HERO = creditByFile.has(HERO_FILE) ? HERO_FILE : undefined;

// Everything below is read off the data when the page loads: no ids or counts are written here.
const STEP_IDS = boxTimeline.map((s) => s.id);
const ALL_EVIDENCE = boxTimeline.flatMap((s) => s.evidence);
/** Every record the page cites, in reading order. It fixes the citation numbers and is the source list. */
const CITED = knownRecords([
  ...boxAnswer.flatMap((a) => citedIn(...a.body)),
  ...boxTimeline.flatMap((s) => [...citedIn(s.body), ...s.evidence]),
  ...boxGuesses.flatMap((g) => citedIn(g.verdict)),
]);
const ANSWERS: EssayAnswerItem[] = boxAnswer.map((a, i) => ({ q: a.q, a: a.short, confidence: a.confidence, to: answerId(i) }));
const FACTS = [count(boxTimeline.length, "dated step")];
const MINUTES = readingMinutes(boxAnswer.flatMap((a) => [a.short, ...a.body]));

const StepRow = memo(function StepRow({ s }: { s: BoxStep }) {
  return (
    <EssayRow
      id={s.id}
      when={<DatePill variant="inline" label={s.date} kind="printed" basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} />}
      node={<EssaySwatch hue={hueOf(PHASE_HUE, s.phase)} />}
      kicker={<span className="label">{PHASE[s.phase] ?? s.phase}</span>}
      title={s.title}
    >
      <EssayEntry text={s.body} image={s.image} evidence={s.evidence} />
    </EssayRow>
  );
});

/** The dated history. It owns which steps are open, so opening one re-renders nothing else on the page. */
function History() {
  const steps = useEssayRows(STEP_IDS);
  return (
    <EssaySection
      id="history"
      kicker="The record, in order"
      title="The box, step by step"
      lead={<p>{count(boxTimeline.length, "dated step")}, {yearSpan(boxTimeline.map((s) => s.date))}. Open a step for the passage and the records behind it.</p>}
      actions={<EssayToggleAll control={steps} what="steps" />}
    >
      <EssayRows control={steps} variant="spine" label="The box, step by step">
        {boxTimeline.map((s) => <StepRow key={s.id} s={s} />)}
      </EssayRows>
    </EssaySection>
  );
}

function Box() {
  return (
    <Page title="The Box" className="essay box-page">
      <CiteScope prime={CITED}>
        <PageHeader
          kicker="Essay · FNaF4, Night 7"
          title="The locked box"
          lede="FNaF4’s hardest night ends on a grey box with two padlocks and one line: “Perhaps some things are best left forgotten, for now.” What was in it, and why did it never open?"
          aside={HERO && <EssayFigure file={HERO} evidence={recordOfImage(HERO, ALL_EVIDENCE)} caption="FNaF4, Night 7: the box that cannot be opened" size="hero" eager />}
        >
          <EssayAnswers items={ANSWERS} />
          <EssayMeta minutes={MINUTES} facts={FACTS} cited={CITED.length} />
        </PageHeader>

        <EssayArgument answers={boxAnswer} shown={HERO} />

        <History />

        <EssaySection
          id="guesses"
          kicker="Not evidence"
          title="What the community guessed"
          lead={<p>Referenced, not used as evidence. See <Link to="/community">Theorists &amp; Scott</Link> for the wider picture.</p>}
        >
          <EssayRows label="What the community guessed">
            {boxGuesses.map((g) => (
              <EssayRow key={g.name} title={g.name} sub={smartQuotes(g.idea)}>
                <p className="essay-text"><span className="label box-guess__label">Against the evidence</span><RichText text={g.verdict} /></p>
                {g.source && <EssayRefs items={[g.source]} label="Where it was argued" />}
              </EssayRow>
            ))}
          </EssayRows>
        </EssaySection>

        <EssaySources ids={CITED} />
        <EssayMore current="/box" />
      </CiteScope>
    </Page>
  );
}

// Nothing in the page's frame depends on the address, so a filter or an opened row never re-renders it.
export default memo(Box);
