import { Link } from "react-router-dom";
import { boxAnswer, boxGuesses, boxTimeline } from "../../data/box";
import { creditByFile } from "../../data/store";
import { CiteScope, DatePill, PHASE_HUE, Page, PageHeader, RichText, hueOf, smartQuotes } from "../../components/ui";
import { EssayAnswers, EssayArgument, EssayEntry, EssayFigure, EssayMeta, EssayMore, EssayRefs, EssayRow, EssayRows, EssaySection, EssaySources, EssaySwatch, EssayToggleAll } from "./essay";
import { answerId, citedIn, count, knownRecords, readingMinutes, recordOfImage, yearSpan } from "./essayModel";
import { useEssayRows } from "./essayRows";
import "./essays.css";
import "./box.css";

/** Words for the phases of the box's history. An unknown phase falls back to its id. */
const PHASE: Record<string, string> = { planted: "Planted", explained: "Explained", shelved: "Shelved", echoed: "Echoed", abandoned: "Abandoned" };

/** The header's exhibit: page furniture, with a caption written for it. Left out if the archive no longer holds the image. */
const HERO = "fnaf4-locked-box-ending.jpg";

// Everything below is read off the data when the page loads: no ids or counts are written here.
const STEP_IDS = boxTimeline.map((s) => s.id);
const ALL_EVIDENCE = boxTimeline.flatMap((s) => s.evidence);
/** Every record the page cites, in reading order. It fixes the citation numbers and is the source list. */
const CITED = knownRecords([
  ...boxAnswer.flatMap((a) => citedIn(...a.body)),
  ...boxTimeline.flatMap((s) => [...citedIn(s.body), ...s.evidence]),
  ...boxGuesses.flatMap((g) => citedIn(g.verdict)),
]);
const MINUTES = readingMinutes(boxAnswer.flatMap((a) => [a.short, ...a.body]));

export default function Box() {
  const steps = useEssayRows(STEP_IDS);
  const hero = creditByFile.has(HERO) ? HERO : undefined;
  return (
    <Page title="The Box" className="essay box-page">
      <CiteScope prime={CITED}>
        <PageHeader
          kicker="Essay · FNaF4, Night 7"
          title="The locked box"
          lede="FNaF4’s hardest night ends on a grey box with two padlocks and one line: “Perhaps some things are best left forgotten, for now.” What was in it, and why did it never open?"
          aside={hero && <EssayFigure file={hero} evidence={recordOfImage(hero, ALL_EVIDENCE)} caption="FNaF4, Night 7: the box that cannot be opened" size="hero" eager />}
        >
          <EssayAnswers items={boxAnswer.map((a, i) => ({ q: a.q, a: a.short, confidence: a.confidence, to: answerId(i) }))} />
          <EssayMeta minutes={MINUTES} facts={[count(boxTimeline.length, "dated step")]} cited={CITED.length} />
        </PageHeader>

        <EssayArgument answers={boxAnswer} shown={hero ? [hero] : []} />

        <EssaySection
          id="history"
          kicker="The record, in order"
          title="The box, step by step"
          lead={<p>{count(boxTimeline.length, "dated step")}, {yearSpan(boxTimeline.map((s) => s.date))}. Open a step for the passage and the records behind it.</p>}
          actions={<EssayToggleAll control={steps} />}
        >
          <EssayRows control={steps} variant="spine" label="The box, step by step">
            {boxTimeline.map((s) => (
              <EssayRow
                key={s.id}
                id={s.id}
                when={<DatePill variant="inline" label={s.date} kind="printed" basis={s.dateBasis} evidence={s.evidence.slice(0, 1)} />}
                node={<EssaySwatch hue={hueOf(PHASE_HUE, s.phase)} />}
                kicker={<span className="label">{PHASE[s.phase] ?? s.phase}</span>}
                title={s.title}
              >
                <EssayEntry text={s.body} image={s.image} evidence={s.evidence} />
              </EssayRow>
            ))}
          </EssayRows>
        </EssaySection>

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
