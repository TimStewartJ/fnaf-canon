import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronUp, PenLine } from "lucide-react";
import { INTERACTION_KIND, VERDICT, interactions, theories, type CommunityTheory, type Source, type Verdict } from "../../data/community";
import { theoryById } from "../../data/store";
import { Button, Callout, Chip, CiteList, FilterChip, GameMark, INTERACTION_ICON, Icon, Page, PageHeader, RichText, Section, Tag, VERDICT_TONE, chapterPath, smartQuotes } from "../../components/ui";
import "./essays.css";
import "./community.css";

function SourceLine({ s }: { s: Source }) {
  const body = <>{s.who} · <em>{s.what}</em>{s.date ? ` · ${s.date}` : ""}</>;
  return (
    <li className="ref-line">
      {s.url ? <a href={s.url} target="_blank" rel="noreferrer">{body}<Icon icon={ArrowUpRight} /></a> : body}
      {s.reliability !== "primary" && <Chip>{s.reliability}</Chip>}
    </li>
  );
}

function TheoryCard({ t }: { t: CommunityTheory }) {
  const v = VERDICT[t.verdict];
  const [open, setOpen] = useState(false);
  return (
    <article className="th-card" id={t.id}>
      <header className="th-card__head">
        <span className="verdict-tag" data-tone={VERDICT_TONE[t.verdict]} title={v.help}>{v.label}</span>
        <span className="th-year">{t.emerged}</span>
        <span className="th-games">{t.games.map((g) => <GameMark key={g} id={g} />)}</span>
      </header>
      <h3>{t.name}</h3>
      {t.aka && t.aka.length > 0 && <p className="th-aka">Also: {t.aka.join(" · ")}</p>}
      <p className="th-claim">“{t.claim}”</p>
      <div className="th-cols">
        <div><h4 className="label" data-tone="ok">What it got right</h4><p><RichText text={t.right} /></p></div>
        <div><h4 className="label" data-tone="tension">What it got wrong</h4><p><RichText text={t.wrong} /></p></div>
      </div>
      {t.scott && <div className="th-scott"><h4 className="label"><Icon icon={PenLine} /> Scott's side</h4><p><RichText text={t.scott} /></p></div>}
      <footer className="th-card__foot">
        {t.modelSection && theoryById.has(t.modelSection) ? <Tag to={chapterPath(t.modelSection)}>This archive's reading <Icon icon={ArrowRight} /></Tag> : <span />}
        <Button variant="quiet" size="sm" onClick={() => setOpen(!open)} aria-expanded={open} iconEnd={open ? ChevronUp : ChevronDown}>
          {open ? "Hide sources" : `Where it came from (${t.sources.length})`}
        </Button>
      </footer>
      {open && <ul className="ref-list">{t.sources.map((s, i) => <SourceLine key={i} s={s} />)}</ul>}
    </article>
  );
}

export default function Community() {
  const [verdict, setVerdict] = useState<Verdict | "">("");
  const sorted = useMemo(() => [...theories].sort((a, b) => a.year - b.year), []);
  const shown = sorted.filter((t) => !verdict || t.verdict === verdict);
  const counts = useMemo(() => {
    const c = new Map<Verdict, number>();
    for (const t of theories) c.set(t.verdict, (c.get(t.verdict) ?? 0) + 1);
    return c;
  }, []);
  const inter = useMemo(() => [...interactions].sort((a, b) => a.date.localeCompare(b.date)), []);

  return (
    <Page title="Theorists & Scott" className="essay community">
      <PageHeader
        kicker="Essay"
        title="Theorists & Scott"
        lede="Five Nights at Freddy's grew up alongside its theory community. Scott read the theories, gave YouTubers early access, answered on Steam and Reddit, pranked the fandom, and put nods to it inside the games. This page tracks that relationship and scores the major theories against the evidence."
      />
      <Callout tone="note" title="Not evidence" className="not-evidence">
        <p>
          Nothing on this page is used to build the archive's model. Theories are shown to see what they got right and wrong, and each judgement cites
          the game records or Scott statements it rests on. The sources listed are links to the theories themselves.
        </p>
      </Callout>

      <Section title="Scott and the community, over time" aside={`${inter.length} moments`}>
        <ol className="inter-tl">
          {inter.map((x) => (
            <li key={x.id} className="inter">
              <span className="inter-date">{x.date}</span>
              <span className="inter-dot" title={INTERACTION_KIND[x.kind].label}><Icon icon={INTERACTION_ICON[x.kind]} label={INTERACTION_KIND[x.kind].label} /></span>
              <div className="inter-body">
                <h3>{smartQuotes(x.title)}</h3>
                <p className="inter-kind"><Chip>{INTERACTION_KIND[x.kind].label}</Chip> <Chip tone={x.confirmed === "scott-confirmed" ? "ok" : "open"}>{x.confirmed === "scott-confirmed" ? "Scott's own words" : "Fan-inferred"}</Chip></p>
                <p className="inter-text"><RichText text={x.summary} /></p>
                <div className="inter-foot">
                  {x.evidence.length > 0 && <span className="cluster"><span className="label">Evidence</span> <CiteList ids={x.evidence} /></span>}
                  {x.external && x.external.length > 0 && <ul className="ref-list ref-list--inline">{x.external.map((s, i) => <SourceLine key={i} s={s} />)}</ul>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="The theories, scored" aside="Judged against the evidence, not against each other">
        <div className="verdict-bar" role="group" aria-label="Filter by verdict">
          <FilterChip on={!verdict} onClick={() => setVerdict("")} count={theories.length}>All</FilterChip>
          {(Object.keys(VERDICT) as Verdict[]).filter((v) => counts.get(v)).map((v) => (
            <FilterChip key={v} on={verdict === v} onClick={() => setVerdict(verdict === v ? "" : v)} count={counts.get(v)} title={VERDICT[v].help}>{VERDICT[v].label}</FilterChip>
          ))}
        </div>
        <div className="th-grid">{shown.map((t) => <TheoryCard key={t.id} t={t} />)}</div>
      </Section>
    </Page>
  );
}
