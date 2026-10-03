import { memo, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Person } from "../../data/schema";
import { deaths, evidenceForPerson, relations, personById, placeById, timeline } from "../../data/store";
import {
  ButtonLink, CiteList, Collapsible, Empty, EntityLink, Fact, Facts, FirmGlyph, GROUP_LABEL, GameMark, Icon, Page, PageHeader,
  RichText, Segmented, StatusMark, firmness, levelOf, personPath, smartQuotes, useMediaQuery,
} from "../../components/ui";
import { chaptersAbout } from "./chapters";
import { ChapterRows } from "./Chapters";
import { Capped, DossierSection, GroupLabel, JumpLinks } from "./Dossier";
import { EvidenceRows } from "./EvidenceFile";
import { IdentityTree } from "./IdentityTree";
import { beingOf, chainTo, evidenceOf, isInsideBeing, linkCounts, subtree, type Being, type BeingNode } from "./identity";
import { Name } from "./Names";
import { Portrait } from "./Portrait";
import { DeathRows, EventRows } from "./Story";
import { OwnTies } from "./Ties";
import { STATUSES, TIE_FAMILIES, plural, tieWords } from "./ties";
import { useAnchor, useUrlState, type UrlState } from "./urlState";
import "./common.css";
import "./people.css";

/** How many rows a list shows before "Show all": [wide screens, phones]. */
const CAPS = { ties: [10, 6], events: [12, 6], chapters: [6, 4], evidence: [8, 5] } as const;
const PLACES_SHOWN = 4;

/** A status of "—" (or nothing) means the data has no fate to report. */
const hasText = (text: string | undefined): text is string => !!text && /[\p{L}\p{N}]/u.test(text);

/** For a record that is folded into another: what the model reads it as, how firmly, and on what. */
function Standing({ node, being }: { node: BeingNode; being: Being }) {
  const anchor = useAnchor();
  const chain = chainTo(node);
  const hangs = node.kind === "vessel" || node.kind === "role";
  // An identity or a form belongs to the head of its own group; a vessel or a role to the record that haunts or wore it.
  let head = node.parent ?? being.root;
  if (!hangs) while (head.parent && (head.kind === "identity" || head.kind === "form")) head = head.parent;
  const between = hangs ? [] : chain.slice(chain.indexOf(head) + 1, -1);
  const reading = node.kind === "identity" ? "as the same being as" : node.kind === "form" ? "as a form of" : node.kind === "vessel" ? "as haunted by" : "as a role worn by";
  const evidence = [...new Set(chain.flatMap((n) => n.step?.evidence ?? []))];
  return (
    <div className="person-standing" data-level={levelOf(node.status)}>
      <p className="person-standing__line">
        The model reads this record {reading} <Name id={head.id} as="title" />
        {between.length > 0 && <>, by way of {between.map((n, i) => <span key={n.id}>{i > 0 && " and "}<Name id={n.id} as="title" /></span>)}</>}.
        {head !== being.root && <> <Name id={head.id} as="plain" /> in turn belongs to <Name id={being.root.id} as="title" />.</>}
      </p>
      <p className="person-standing__how">
        <StatusMark value={node.status} variant="inline" long />
        <CiteList ids={evidence} variant="code" />
        <Link to={anchor("identity")}>The whole chain</Link>
      </p>
    </div>
  );
}

/**
 * The page for one record. Memoised on what it shows (the record and the ?scope= choice), so
 * jumping to a section, which only changes the URL's hash, does not draw the whole file again.
 */
const Dossier = memo(function Dossier({ p, record, set }: { p: Person; record: boolean; set: UrlState["set"] }) {
  const phone = useMediaQuery("(max-width: 640px)");
  const cap = (list: keyof typeof CAPS) => CAPS[list][phone ? 1 : 0];
  const being = beingOf(p.id)!;
  const me = being.byId.get(p.id)!;
  const own = useMemo(() => subtree(me), [me]);
  const narrow = own.length > 1 && record;

  const view = useMemo(() => {
    const scope = narrow ? [me] : own;
    const ids = scope.map((n) => n.id);
    const inScope = new Set(ids);
    const records = evidenceOf(ids);
    const recordIds = new Set(records.map((e) => e.id));
    const seenAt = new Map<string, number>();
    for (const e of records) for (const pl of e.places ?? []) if (placeById.has(pl)) seenAt.set(pl, (seenAt.get(pl) ?? 0) + 1);
    return {
      scope, inScope, records,
      rels: relations
        .filter((r) => (inScope.has(r.from) || inScope.has(r.to)) && !isInsideBeing(being, r))
        .map((r, i) => ({ r, i }))
        .sort((a, b) => TIE_FAMILIES.indexOf(tieWords(a.r.kind).family) - TIE_FAMILIES.indexOf(tieWords(b.r.kind).family) || a.i - b.i)
        .map((x) => x.r),
      events: timeline.filter((t) => t.people?.some((x) => inScope.has(x))).sort((a, b) => a.year - b.year),
      died: deaths.filter((d) => d.victims.some((x) => inScope.has(x))).sort((a, b) => a.year - b.year),
      killed: deaths.filter((d) => d.by.some((x) => inScope.has(x))).sort((a, b) => a.year - b.year),
      chapters: chaptersAbout(ids, recordIds),
      places: [...seenAt].sort((a, b) => b[1] - a[1]),
      groups: scope.map((n) => ({ node: n, records: evidenceForPerson(n.id) })).filter((g) => g.records.length > 0),
    };
  }, [being, me, own, narrow]);

  const descriptor = p.nameStatus === "descriptor";
  const others = being.nodes.length - 1;
  const counts = linkCounts(being);
  const storyCount = view.events.length + view.died.length + view.killed.length;
  const it = p.group === "entity" ? "it" : "them";
  const toc: [string, string, number][] = [
    ["identity", "Identity", others],
    ["ties", "Ties", view.rels.length],
    ["story", "In the story", storyCount],
    ["theory", "In the theory", view.chapters.length],
    ["evidence", "Evidence", view.records.length],
  ];

  return (
    <Page title={p.name} className="person-page">
      <PageHeader
        className="ppl-head"
        crumbs={[{ to: "/people", label: "People" }, { label: p.name }]}
        kicker={`${GROUP_LABEL[p.group] ?? "People"} · ${descriptor ? "Descriptor" : "Canon name"}`}
        title={<span className={descriptor ? "name-desc" : "name-canon"}>{smartQuotes(p.name)}</span>}
        aside={p.image ? <Portrait file={p.image} /> : undefined}
      >
        {p.aliases.length > 0 && <p className="person-head__aliases"><span className="label">Also</span> {p.aliases.map(smartQuotes).join(" · ")}</p>}
        {me.parent && <Standing node={me} being={being} />}
        <p className="ppl-summary"><RichText text={p.summary} /></p>
      </PageHeader>

      <div className="ppl-file">
        {hasText(p.status) && (
          <div className="ppl-file__main">
            <h2 className="label">What became of {it}</h2>
            <p className="ppl-file__text"><RichText text={p.status} /></p>
          </div>
        )}
        <Facts className="ppl-file__facts">
          <Fact label="First appearance"><GameMark id={p.firstAppearance} variant="full" link /></Fact>
          <Fact label="Name">
            {descriptor
              ? <>The games never give this name. “{smartQuotes(p.name)}” is the archive’s own neutral descriptor.</>
              : <>A name the canon gives.</>}
          </Fact>
          {p.evidence.length > 0 && <Fact label="Established by"><CiteList ids={p.evidence} variant="code" /></Fact>}
          {view.places.length > 0 && (
            <Fact label="Places in the records">
              <span className="cluster ppl-chips">
                {view.places.slice(0, PLACES_SHOWN).map(([id, n]) => <span key={id} className="ppl-chips__item"><EntityLink id={id} variant="chip" /><span className="ppl-chips__n" title={`${plural(n, "record")} filed under both`}>{n}</span></span>)}
                {view.places.length > PLACES_SHOWN && <span className="faint">and {view.places.length - PLACES_SHOWN} more</span>}
              </span>
            </Fact>
          )}
        </Facts>
      </div>

      <JumpLinks items={toc.filter(([, , n]) => n > 0).map(([id, label, n]) => ({ id, label, n }))} />

      {p.theory && (
        <DossierSection id="reading" title="The model’s reading" lead="The archive’s interpretation, beyond what the records state outright.">
          <p className="person-reading"><RichText text={p.theory} /></p>
        </DossierSection>
      )}

      {others > 0 && (
        <DossierSection
          id="identity"
          title="Identity"
          count={<>
            {plural(others, "other record")}
            <span className="person-links">
              {STATUSES.filter((s) => counts[s] > 0).map((s) => (
                <span key={s} className="person-links__n"><FirmGlyph level={levelOf(s)} /> {counts[s]} {firmness("status", s).short.toLowerCase()}</span>
              ))}
            </span>
          </>}
          lead="Records the model treats as one being. Each hangs by a line drawn in the firmness of that link, so the weakest link in a chain is easy to find."
        >
          <IdentityTree being={being} currentId={p.id} />
          {own.length > 1 && (
            <div className="person-scope">
              <span className="label">The sections below cover</span>
              <Segmented
                label="The sections below cover"
                value={narrow ? "record" : "all"}
                onChange={(v) => set({ scope: v === "record" ? "record" : null })}
                options={[{ id: "all", label: `All ${own.length} records` }, { id: "record", label: "This record only" }]}
              />
            </div>
          )}
        </DossierSection>
      )}

      {view.rels.length > 0 && (
        <DossierSection id="ties" title="Ties" count={plural(view.rels.length, "tie")} lead="Who this is tied to, and how. The chips open the records behind each tie.">
          <Capped items={view.rels} cap={cap("ties")} noun="ties">
            {(shown) => <OwnTies rels={shown} all={view.rels} pageId={p.id} scope={view.inScope} />}
          </Capped>
        </DossierSection>
      )}

      {storyCount > 0 && (
        <DossierSection id="story" title="In the story" count={plural(storyCount, "entry", "entries")} lead="Events and deaths on the timeline that involve this record. Each opens on the timeline.">
          {view.events.length > 0 && (
            <div className="ppl-block">
              {(view.died.length > 0 || view.killed.length > 0) && <GroupLabel count={view.events.length}>Events</GroupLabel>}
              <Capped items={view.events} cap={cap("events")} noun="events">{(shown) => <EventRows events={shown} />}</Capped>
            </div>
          )}
          {view.died.length > 0 && <div className="ppl-block"><GroupLabel count={view.died.length}>Died</GroupLabel><DeathRows deaths={view.died} /></div>}
          {view.killed.length > 0 && <div className="ppl-block"><GroupLabel count={view.killed.length}>Responsible for</GroupLabel><DeathRows deaths={view.killed} /></div>}
        </DossierSection>
      )}

      {view.chapters.length > 0 && (
        <DossierSection id="theory" title="In the theory" count={plural(view.chapters.length, "chapter")} lead="Chapters of the model that discuss this record or rest on its evidence, the most involved first.">
          <Capped items={view.chapters} cap={cap("chapters")} noun="chapters">{(shown) => <ChapterRows hits={shown} />}</Capped>
        </DossierSection>
      )}

      <DossierSection id="evidence" title="Evidence" count={plural(view.records.length, "record")} lead="Oldest first. A row opens the record over this page.">
        {view.groups.length > 1 ? (
          view.groups.map((g, i) => (
            <Collapsible key={g.node.id} defaultOpen={i === 0} summary={<>Filed under <Name id={g.node.id} as="plain" /></>} meta={plural(g.records.length, "record")}>
              <EvidenceRows records={g.records} cap={cap("evidence")} />
              <p className="ppl-locker"><Link to={`/evidence?entity=${g.node.id}`}>Browse these in the evidence locker <Icon icon={ArrowRight} /></Link></p>
            </Collapsible>
          ))
        ) : view.records.length > 0 ? (
          <>
            <EvidenceRows records={view.records} cap={cap("evidence")} />
            <p className="ppl-locker"><Link to={`/evidence?entity=${p.id}`}>Browse these in the evidence locker <Icon icon={ArrowRight} /></Link></p>
          </>
        ) : <p className="muted">No evidence record is filed under this name.</p>}
        {me.parent && !narrow && (
          <p className="ppl-locker"><Link to={`${personPath(being.root.id)}#evidence`}>All the evidence for <Name id={being.root.id} as="plain" /> <Icon icon={ArrowRight} /></Link></p>
        )}
      </DossierSection>
    </Page>
  );
});

export default function PersonDetail() {
  const { id = "" } = useParams();
  const url = useUrlState();
  const p = personById.get(id);
  if (!p) {
    return (
      <Page title="Person not found" narrow>
        <Empty title="Unknown person" action={<ButtonLink to="/people" variant="primary">See everyone</ButtonLink>}>There is no person page for “{id}”.</Empty>
      </Page>
    );
  }
  // Keyed by id so the folds and "show all" states start fresh on each person.
  return <Dossier key={p.id} p={p} record={url.get("scope") === "record"} set={url.set} />;
}
