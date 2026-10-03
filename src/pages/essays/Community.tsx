import { useLocation, useSearchParams } from "react-router-dom";
import { Check, PenLine, X } from "lucide-react";
import { INTERACTION_KIND, VERDICT, interactions, theories, type CommunityTheory, type Interaction, type Verdict } from "../../data/community";
import {
  Button, Callout, Chip, CiteScope, Empty, FilterChip, FilterGroup, GameMark, INTERACTION_ICON, Icon, Page, PageHeader, RichText, VERDICT_TONE, smartQuotes,
} from "../../components/ui";
import { EssayAnswers, EssayChapterLink, EssayEntry, EssayMeta, EssayMore, EssayRefs, EssayRow, EssayRows, EssaySection, EssaySources, EssayToggleAll } from "./essay";
import { citedIn, count, knownRecords, sentenceList, tally, yearSpan } from "./essayModel";
import { hashTarget, useEssayRows } from "./essayRows";
import "./essays.css";
import "./community.css";

// Everything below is read off the data when the page loads: no ids or counts are written here.
const VERDICTS = Object.keys(VERDICT) as Verdict[];
const THEORIES = [...theories].sort((a, b) => a.year - b.year);
const MOMENTS = [...interactions].sort((a, b) => a.date.localeCompare(b.date));
const MOMENT_IDS = MOMENTS.map((x) => x.id);
const TALLY = tally(theories, (t) => t.verdict);
/** The verdicts that at least one theory carries, in the scale's own order. */
const PRESENT = VERDICTS.filter((v) => TALLY.get(v));
const INFERRED = MOMENTS.filter((x) => x.confirmed !== "scott-confirmed").length;
/** Every record the page cites, in reading order. It fixes the citation numbers and is the source list. */
const CITED = knownRecords([
  ...THEORIES.flatMap((t) => citedIn(t.right, t.wrong, t.scott)),
  ...MOMENTS.flatMap((x) => [...citedIn(x.summary), ...x.evidence]),
]);
const THEORY_BY_ID = new Map(theories.map((t) => [t.id, t]));

const verdictLabel = (v: string): string => VERDICT[v as Verdict]?.label ?? v;
const kindLabel = (k: string): string => INTERACTION_KIND[k as Interaction["kind"]]?.label ?? k;

/** What opens under a theory: the verdict in a sentence, both sides of the ledger, Scott's reply, the archive's chapter, where it came from. */
function TheoryDetail({ t }: { t: CommunityTheory }) {
  const v = VERDICT[t.verdict];
  return (
    <>
      {v && <p className="cmty-verdict"><strong>{v.label}.</strong> {smartQuotes(v.help)}.</p>}
      {t.aka && t.aka.length > 0 && <p className="cmty-verdict">Also known as {smartQuotes(t.aka.join(" · "))}.</p>}
      <div className="cmty-sides">
        <div className="cmty-side" data-tone="ok">
          <h4 className="label cmty-side__label"><Icon icon={Check} /> What it got right</h4>
          <p className="essay-text"><RichText text={t.right} /></p>
        </div>
        <div className="cmty-side" data-tone="tension">
          <h4 className="label cmty-side__label"><Icon icon={X} /> What it got wrong</h4>
          <p className="essay-text"><RichText text={t.wrong} /></p>
        </div>
      </div>
      {t.scott && (
        <div className="cmty-scott">
          <h4 className="label cmty-side__label"><Icon icon={PenLine} /> Scott’s side</h4>
          <p className="essay-text"><RichText text={t.scott} /></p>
        </div>
      )}
      <EssayChapterLink id={t.modelSection} label="This archive’s reading" />
      <EssayRefs items={t.sources} label="Where it came from" />
    </>
  );
}

export default function Community() {
  const [params, setParams] = useSearchParams();
  const { hash } = useLocation();
  const asked = params.get("verdict");
  // A link to one theory (…#its-id) always shows it: a filter that would hide it is not applied.
  const linked = THEORY_BY_ID.get(hashTarget(hash));
  const verdict = asked && Object.hasOwn(VERDICT, asked) && !(linked && linked.verdict !== asked) ? (asked as Verdict) : null;
  const setVerdict = (v: Verdict | null) => {
    const next = new URLSearchParams(params);
    if (v) next.set("verdict", v); else next.delete("verdict");
    setParams(next, { replace: true });
  };
  const shown = verdict ? THEORIES.filter((t) => t.verdict === verdict) : THEORIES;
  const scored = useEssayRows(shown.map((t) => t.id));
  const moments = useEssayRows(MOMENT_IDS);
  const scoreline = sentenceList(PRESENT.map((v) => `${TALLY.get(v)} ${verdictLabel(v).toLowerCase()}`));
  const span = yearSpan(MOMENTS.map((x) => x.date));

  return (
    <Page title="Theorists & Scott" className="essay cmty-page">
      <CiteScope prime={CITED}>
        <PageHeader
          kicker="Essay"
          title="Theorists & Scott"
          lede="Five Nights at Freddy’s grew up alongside its theory community. This page scores the best-known theories against the evidence, and follows what Scott said and did in reply."
        >
          <Callout tone="note" title="Not evidence" className="cmty-notice">
            <p>
              Nothing on this page is used to build the archive’s model. Theories are shown to see what they got right and wrong, and each judgement cites
              the game records or Scott statements it rests on. The outside links are links to the theories themselves.
            </p>
          </Callout>
          <EssayAnswers
            items={[
              ...(theories.length ? [{ q: "How did the theories hold up?", a: `Of ${count(theories.length, "well-known theory", "well-known theories")}: ${scoreline}.`, to: "theories", more: "The scorecard" }] : []),
              ...(MOMENTS.length ? [{
                q: "How did Scott respond?",
                a: `He read the theories, gave YouTubers early access, answered on Steam and Reddit, pranked the fandom and put nods to it inside the games: ${count(MOMENTS.length, "dated moment")}${span ? `, ${span}` : ""}.`,
                to: "timeline", more: "The timeline",
              }] : []),
            ]}
          />
          <EssayMeta facts={[count(theories.length, "theory scored", "theories scored"), count(MOMENTS.length, "dated moment")]} cited={CITED.length} />
        </PageHeader>

        <EssaySection
          id="theories"
          kicker="The scorecard"
          title="The theories, scored"
          lead={<p>Judged against the evidence, not against each other, in the order they emerged. Open one for what it got right and wrong.</p>}
          actions={<EssayToggleAll control={scored} />}
        >
          <FilterGroup label="Verdict">
            <FilterChip on={!verdict} count={theories.length} onClick={() => setVerdict(null)}>All</FilterChip>
            {PRESENT.map((v) => (
              <FilterChip key={v} on={verdict === v} count={TALLY.get(v)} title={VERDICT[v].help} onClick={() => setVerdict(verdict === v ? null : v)}>{VERDICT[v].label}</FilterChip>
            ))}
          </FilterGroup>
          <p className="cmty-status" role="status">
            {verdict
              ? <>Showing {shown.length} of {theories.length}. <strong>{VERDICT[verdict].label}.</strong> {smartQuotes(VERDICT[verdict].help)}.</>
              : <>All {count(theories.length, "theory", "theories")}. Choose a verdict to narrow the list.</>}
          </p>
          {shown.length > 0 ? (
            <EssayRows control={scored} label="The theories, scored">
              {shown.map((t) => (
                <EssayRow
                  key={t.id}
                  id={t.id}
                  when={smartQuotes(t.emerged)}
                  kicker={<><Chip tone={VERDICT_TONE[t.verdict] ?? "neutral"}>{verdictLabel(t.verdict)}</Chip>{t.games.map((g) => <GameMark key={g} id={g} />)}</>}
                  title={t.name}
                  sub={smartQuotes(t.claim)}
                >
                  <TheoryDetail t={t} />
                </EssayRow>
              ))}
            </EssayRows>
          ) : (
            <Empty title="No theory carries this verdict." action={<Button onClick={() => setVerdict(null)}>Show all theories</Button>} />
          )}
        </EssaySection>

        <EssaySection
          id="timeline"
          kicker="In order"
          title="Scott and the community, over time"
          lead={
            <p>
              {count(MOMENTS.length, "dated moment")}{span ? `, ${span}` : ""}.{" "}
              {INFERRED > 0
                ? `${MOMENTS.length - INFERRED} rest on Scott’s own words; ${INFERRED} ${INFERRED === 1 ? "is" : "are"} fan-inferred and marked.`
                : "All rest on Scott’s own words."}{" "}
              Open one for the passage and the records behind it.
            </p>
          }
          actions={<EssayToggleAll control={moments} />}
        >
          <EssayRows control={moments} variant="spine" label="Scott and the community, over time">
            {MOMENTS.map((x) => {
              const inferred = x.confirmed !== "scott-confirmed";
              return (
                <EssayRow
                  key={x.id}
                  id={x.id}
                  when={x.date}
                  node={INTERACTION_ICON[x.kind] ? <Icon icon={INTERACTION_ICON[x.kind]} /> : null}
                  kicker={<><span className="label">{kindLabel(x.kind)}</span>{inferred && <Chip tone="open">Fan-inferred</Chip>}</>}
                  title={x.title}
                >
                  <p className="cmty-verdict">
                    {inferred
                      ? <><strong>Fan-inferred.</strong> Fans read it this way; neither Scott nor the game says so.</>
                      : <><strong>Scott’s own words.</strong> He said or published this himself.</>}
                  </p>
                  <EssayEntry text={x.summary} evidence={x.evidence} sources={x.external} />
                </EssayRow>
              );
            })}
          </EssayRows>
        </EssaySection>

        <EssaySources ids={CITED} note="These records are the evidence for the judgements above. The theories and videos themselves are not evidence." />
        <EssayMore current="/community" />
      </CiteScope>
    </Page>
  );
}
