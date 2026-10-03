import { memo, useDeferredValue, useMemo } from "react";
import { Link } from "react-router-dom";
import type { Person } from "../../data/schema";
import { people } from "../../data/store";
import { isFoldedAway, unifiedPeople } from "../../data/model";
import {
  Collapsible, Empty, FirmGlyph, GROUP_LABEL, GameMark, Page, PageHeader, SearchField, StatusMark, firmness, imgUrl, levelOf, personPath, plainText,
  smartQuotes,
} from "../../components/ui";
import { DossierSection, JumpLinks } from "./Dossier";
import { beingOf, evidenceOf, type BeingNode, type NodeKind } from "./identity";
import { Name } from "./Names";
import { STATUS_RANK, plural, tieSentence } from "./ties";
import { useUrlText } from "./urlState";
import "./common.css";
import "./people.css";

/** The order the groups are shown in. Their names come from the shared palette. */
const GROUP_ORDER: Person["group"][] = ["afton", "emily", "victim", "protagonist", "pizzaplex", "mimic", "staff", "entity"];
const AKA: [NodeKind, string][] = [["identity", "Also"], ["form", "Forms"], ["vessel", "Haunts"], ["role", "Wore"]];

interface Entry {
  root: Person;
  /** Every other record folded into the person. */
  others: BeingNode[];
  records: number;
  image?: string;
  /** Lower-cased names and aliases per record id, for the search. */
  hay: Map<string, string>;
}

const hayOf = (p: Person) => `${p.name} ${p.aliases.join(" ")}`.toLowerCase();

function buildEntries(): Entry[] {
  const out: Entry[] = [];
  for (const u of unifiedPeople) {
    if (u.root.group === "other" || isFoldedAway(u.root.id)) continue;
    const being = beingOf(u.root.id);
    if (!being) continue;
    out.push({
      root: u.root,
      others: being.nodes.slice(1),
      records: evidenceOf(being.nodes.map((n) => n.id)).length,
      image: being.nodes.map((n) => n.person.image).find(Boolean),
      hay: new Map(being.nodes.map((n) => [n.id, hayOf(n.person)])),
    });
  }
  return out;
}

/** The folded records of a person whose name or alias contains the search text, as one string (so a row re-renders only when its own hits change). */
const hitsOf = (entry: Entry, needle: string) => (needle ? entry.others.filter((n) => entry.hay.get(n.id)?.includes(needle)).map((n) => n.id).join(" ") : "");

/** One person: the name leads, then what became of them; the records folded into them sit below, smaller. */
const PersonRow = memo(function PersonRow({ entry, hits }: { entry: Entry; hits: string }) {
  const p = entry.root;
  const status = plainText(p.status);
  const hitIds = new Set(hits ? hits.split(" ") : []);
  return (
    <li className="ppl-row">
      <div className="ppl-row__who">
        <h3 className="ppl-row__name"><Name id={p.id} as="title" /></h3>
        <p className="ppl-row__meta"><GameMark id={p.firstAppearance} /> <span>{plural(entry.records, "record")}</span></p>
      </div>
      <div className="ppl-row__what">
        {/[\p{L}\p{N}]/u.test(status) && <p className="ppl-row__status">{smartQuotes(status)}</p>}
        {entry.others.length > 0 && (
          <dl className="ppl-row__aka">
            {AKA.map(([kind, label]) => {
              const nodes = entry.others.filter((n) => n.kind === kind).sort((a, b) => STATUS_RANK[b.status] - STATUS_RANK[a.status]);
              if (!nodes.length) return null;
              return (
                <div key={kind} className="ppl-aka">
                  <dt className="label">{label}</dt>
                  <dd>
                    {nodes.map((n) => {
                      const f = firmness("status", n.status);
                      const hit = hitIds.has(n.id);
                      return (
                        <Link
                          key={n.id}
                          to={personPath(n.id)}
                          className={`ppl-aka__link${hit ? " is-hit" : ""}`}
                          title={`${f.word}${n.step ? `: ${n.step.note ?? tieSentence(n.step)}` : ""}`}
                        >
                          <FirmGlyph level={levelOf(n.status)} />
                          <Name id={n.id} as="plain" />
                          <span className="sr-only"> ({f.word.toLowerCase()})</span>
                        </Link>
                      );
                    })}
                  </dd>
                </div>
              );
            })}
          </dl>
        )}
      </div>
      {entry.image && (
        <Link to={personPath(p.id)} className="ppl-row__thumb" tabIndex={-1} aria-hidden>
          <img src={imgUrl(entry.image)} alt="" loading="lazy" decoding="async" />
        </Link>
      )}
    </li>
  );
});

/** Minor figures as an index: one short line each, under its first letter. */
const MinorIndex = memo(function MinorIndex({ list }: { list: readonly Person[] }) {
  const letters = new Map<string, Person[]>();
  for (const p of list) {
    const first = p.name.replace(/^The /, "")[0]?.toUpperCase() ?? "#";
    const key = /[A-Z]/.test(first) ? first : "#";
    letters.set(key, [...(letters.get(key) ?? []), p]);
  }
  return (
    <div className="ppl-index">
      {[...letters].map(([letter, ps]) => (
        <div key={letter} className="ppl-index__group">
          <h3 className="label ppl-index__letter">{letter}</h3>
          <ul className="ppl-index__list">
            {ps.map((p) => (
              <li key={p.id}>
                <Link to={personPath(p.id)} className="ppl-index__link">
                  <GameMark id={p.firstAppearance} variant="dot" />
                  <span className="ppl-index__name">{smartQuotes(p.name)}</span>
                  <span className="ppl-index__n" aria-label={plural(p.evidence.length, "record")}>{p.evidence.length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});

export default function People() {
  const [q, setQ] = useUrlText("q");
  // The box answers each keystroke at once; the list follows a moment behind, and rows that do not change are not drawn again.
  const asked = useDeferredValue(q.trim());
  const needle = asked.toLowerCase();
  const entries = useMemo(() => buildEntries(), []);
  const minor = useMemo(() => people.filter((p) => p.group === "other" && !isFoldedAway(p.id)).sort((a, b) => a.name.replace(/^The /, "").localeCompare(b.name.replace(/^The /, ""))), []);
  const folded = useMemo(() => entries.reduce((n, e) => n + e.others.length, 0), [entries]);

  const shown = useMemo(() => (needle ? entries.filter((e) => [...e.hay.values()].some((h) => h.includes(needle))) : entries), [entries, needle]);
  const shownMinor = useMemo(() => (needle ? minor.filter((p) => hayOf(p).includes(needle)) : minor), [minor, needle]);
  const groups = GROUP_ORDER.map((g) => ({ g, list: shown.filter((e) => e.root.group === g) })).filter((x) => x.list.length > 0);
  // A group the data may add later still shows, after the known ones.
  const rest = shown.filter((e) => !GROUP_ORDER.includes(e.root.group));
  if (rest.length) for (const g of new Set(rest.map((e) => e.root.group))) groups.push({ g, list: rest.filter((e) => e.root.group === g) });
  const nobody = shown.length === 0 && shownMinor.length === 0;

  return (
    <Page title="People">
      <PageHeader
        kicker="People & places"
        title="People"
        lede={<>
          Who is who, and how firmly. Names, descriptors, minigame figures and machines that the model reads as one person are folded into that
          person: {entries.length} profiles, with {folded} other records folded into them, and {minor.length} minor figures.
        </>}
      >
        <SearchField className="ppl-search" label="Find a person" placeholder="Name or alias, like Springtrap" value={q} onChange={setQ} />
        <p className="ppl-key">
          <span className="label">How firmly a record belongs</span>
          <StatusMark value="canon" variant="inline" /> <StatusMark value="strong" variant="inline" long /> <StatusMark value="theory" variant="inline" />
          <span className="ppl-key__note">Names in <em className="name-desc">italics</em> are the archive’s own descriptors; the games never print them.</span>
        </p>
        {needle && !nobody && (
          <p className="ppl-found" role="status">
            {plural(shown.length, "profile")} and {plural(shownMinor.length, "minor figure")} match “{asked}”.
          </p>
        )}
      </PageHeader>

      {!needle && (
        <JumpLinks
          label="Groups"
          items={[...groups.map(({ g, list }) => ({ id: `group-${g}`, label: GROUP_LABEL[g] ?? g, n: list.length })), ...(minor.length ? [{ id: "group-other", label: GROUP_LABEL.other, n: minor.length }] : [])]}
        />
      )}

      {groups.map(({ g, list }) => {
        const more = list.reduce((n, e) => n + e.others.length, 0);
        return (
          <DossierSection
            key={g}
            dense
            id={`group-${g}`}
            title={GROUP_LABEL[g] ?? g}
            count={plural(list.length, "profile")}
            lead={g === "entity" ? "Machines and entities the model does not fold into any person." : more > 0 ? `${plural(more, "other record")} folded into them.` : undefined}
          >
            <ul className="ppl-rows">{list.map((e) => <PersonRow key={e.root.id} entry={e} hits={hitsOf(e, needle)} />)}</ul>
          </DossierSection>
        );
      })}

      {shownMinor.length > 0 && (
        <DossierSection
          dense
          id="group-other"
          title={GROUP_LABEL.other}
          count={needle ? `${shownMinor.length} of ${minor.length} match` : plural(minor.length, "name")}
          lead="Named or shown in the evidence, without a profile of their own. Each opens the records filed under it."
        >
          {needle
            ? <MinorIndex list={shownMinor} />
            : <Collapsible summary="Every minor figure, A to Z" meta={plural(minor.length, "name")}><MinorIndex list={minor} /></Collapsible>}
        </DossierSection>
      )}

      {nobody && <Empty title="Nobody by that name">No person, alias or minor figure matches “{asked}”.</Empty>}
    </Page>
  );
}
