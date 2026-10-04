import { memo, useDeferredValue, useMemo } from "react";
import { Link } from "react-router-dom";
import type { Person } from "../../data/schema";
import { people } from "../../data/store";
import { isFoldedAway, unifiedPeople } from "../../data/model";
import {
  Collapsible, Empty, FirmGlyph, GROUP_LABEL, GameMark, Page, PageHeader, SearchField, StatusMark, aliasParts, firmness, foldText, Thumb, levelOf,
  namesOf, personPath, plainText, smartQuotes, sortName, useAddressText, settleHeader,
} from "../../components/ui";
import { DossierSection, JumpLinks } from "./Dossier";
import { beingOf, evidenceOf, type BeingNode, type NodeKind } from "./identity";
import { Name } from "./Names";
import { STATUS_RANK, plural, tieSentence } from "./ties";
import "./common.css";
import "./people.css";

/** The order the groups are shown in. Their names come from the shared palette. */
const GROUP_ORDER: Person["group"][] = ["afton", "cassette", "victim", "protagonist", "pizzaplex", "mimic", "staff", "entity"];
const AKA: [NodeKind, string][] = [["identity", "Also"], ["form", "Forms"], ["vessel", "Haunts"], ["role", "Wore"]];

interface Entry {
  root: Person;
  /** Every other record folded into the person. */
  others: BeingNode[];
  records: number;
  image?: string;
  /** Names and aliases per record id, as the search compares them. */
  hay: Map<string, string>;
}

/** What a person is found by: the name and every alias, without the marks that say where an alias comes from. */
const hayOf = (p: Person) => foldText(namesOf(p).join(" \n "));

/**
 * The alias that answers a search when the name itself does not: a reader who types "glitchtrap"
 * is shown the rabbit in the code, and has to be told why. Returned as the data writes it, with
 * its mark ("Glitchtrap (Scott's working name)"): a name that is not the archive's own is never
 * shown without one.
 */
function aliasHit(p: Person, needle: string): string | null {
  if (!needle || foldText(p.name).includes(needle)) return null;
  // The alias that is what was typed, before one that starts with it, before one that only contains it.
  const rank = (a: string) => { const name = foldText(aliasParts(a).name); return name === needle ? 0 : name.startsWith(needle) ? 1 : name.includes(needle) ? 2 : 3; };
  const best = [...p.aliases].sort((a, b) => rank(a) - rank(b))[0];
  return best !== undefined && rank(best) < 3 ? best : null;
}

/** An alias with its mark, the mark set quieter. */
function AliasText({ alias }: { alias: string }) {
  const { name, mark } = aliasParts(alias);
  return <>{smartQuotes(name)}{mark && <span className="alias-mark"> ({smartQuotes(mark)})</span>}</>;
}

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

/**
 * The aliases that answer the search for a person and the records folded into them, where the
 * names the row prints do not: "record id, tab, alias" per line. One string, like `hitsOf`, so a
 * row is drawn again only when what it has to say changes.
 */
const viaOf = (entry: Entry, needle: string): string =>
  needle ? [entry.root, ...entry.others.map((n) => n.person)].flatMap((who) => { const alias = aliasHit(who, needle); return alias ? [`${who.id}\t${alias}`] : []; }).join("\n") : "";

/** One person: the name leads, then what became of them; the records folded into them sit below, smaller. */
const PersonRow = memo(function PersonRow({ entry, hits, via: found }: { entry: Entry; hits: string; via: string }) {
  const p = entry.root;
  const status = plainText(p.status);
  const hitIds = new Set(hits ? hits.split(" ") : []);
  // Found by an alias that the row does not print: say which, and whose it is.
  const via = found ? found.split("\n").map((line) => { const [id, alias] = line.split("\t"); return { id, alias }; }) : [];
  return (
    <li className="ppl-row">
      <div className="ppl-row__who">
        <h3 className="ppl-row__name"><Name id={p.id} as="title" alone /></h3>
        <p className="ppl-row__meta"><GameMark id={p.firstAppearance} /> <span>{plural(entry.records, "record")}</span></p>
      </div>
      <div className="ppl-row__what">
        {/[\p{L}\p{N}]/u.test(status) && <p className="ppl-row__status">{smartQuotes(status)}</p>}
        {(entry.others.length > 0 || via.length > 0) && (
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
                          <Name id={n.id} as="plain" alone />
                          <span className="sr-only"> ({f.word.toLowerCase()})</span>
                        </Link>
                      );
                    })}
                  </dd>
                </div>
              );
            })}
            {via.length > 0 && (
              <div className="ppl-aka ppl-aka--match">
                <dt className="label">Match</dt>
                <dd>
                  {via.map(({ id, alias }) => (
                    <span key={id} className="ppl-aka__match">
                      <AliasText alias={alias} />{id !== p.id && <>, a name for <Name id={id} as="plain" /></>}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        )}
      </div>
      {entry.image && (
        <Link to={personPath(p.id)} className="ppl-row__thumb" tabIndex={-1} aria-hidden>
          <Thumb file={entry.image} />
        </Link>
      )}
    </li>
  );
});

/** Minor figures as an index: one short line each, under its first letter. With a search, a figure found by an alias shows the alias. */
const MinorIndex = memo(function MinorIndex({ list, needle = "" }: { list: readonly Person[]; needle?: string }) {
  const letters = new Map<string, Person[]>();
  for (const p of list) {
    const first = sortName(p.name)[0]?.toUpperCase() ?? "#";
    const key = /[A-Z]/.test(first) ? first : "#";
    letters.set(key, [...(letters.get(key) ?? []), p]);
  }
  return (
    <div className="ppl-index">
      {[...letters].map(([letter, ps]) => (
        <div key={letter} className="ppl-index__group">
          <h3 className="label ppl-index__letter">{letter}</h3>
          <ul className="ppl-index__list">
            {ps.map((p) => {
              const also = aliasHit(p, needle);
              return (
                <li key={p.id}>
                  <Link to={personPath(p.id)} className="ppl-index__link">
                    <GameMark id={p.firstAppearance} variant="dot" />
                    <span className="ppl-index__name">
                      <Name id={p.id} as="plain" alone />
                      {also && <span className="ppl-index__also">also <AliasText alias={also} /></span>}
                    </span>
                    <span className="ppl-index__n" aria-label={plural(p.evidence.length, "record")}>{p.evidence.length}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
});

export default function People() {
  const [q, setQ] = useAddressText("q");
  // The box answers each keystroke at once; the list follows a moment behind, and rows that do not change are not drawn again.
  const asked = useDeferredValue(q.trim());
  const needle = foldText(asked);
  const entries = useMemo(() => buildEntries(), []);
  const minor = useMemo(() => people.filter((p) => p.group === "other" && !isFoldedAway(p.id)).sort((a, b) => sortName(a.name).localeCompare(sortName(b.name), undefined, { sensitivity: "base" })), []);
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
          person: {entries.length} profiles, with {folded} other figures folded into them, and {minor.length} minor figures.
        </>}
      >
        {/* On a phone the keyboard takes the lower half of the screen: the field goes to the top of
            what is left when it is tapped, the count sits directly under it, and the key steps
            aside while a name is being typed, so the matches show above the keyboard. */}
        <div
          className="ppl-search-wrap"
          onFocus={(ev) => {
            if (!window.matchMedia("(pointer: coarse) and (max-width: 40em)").matches) return;
            settleHeader();
            ev.currentTarget.scrollIntoView({ block: "start", behavior: "smooth" });
          }}
        >
          <SearchField className="ppl-search" label="Find a person" placeholder="Name or alias, like Springtrap" value={q} onChange={setQ} />
        </div>
        {needle && !nobody && (
          <p className="ppl-found" role="status">
            {plural(shown.length, "profile")} and {plural(shownMinor.length, "minor figure")} match “{asked}”.
          </p>
        )}
        <p className="ppl-key" data-quiet={needle ? "" : undefined}>
          <span className="label">How firmly a figure belongs</span>
          <StatusMark value="canon" variant="inline" /> <StatusMark value="strong" variant="inline" long /> <StatusMark value="theory" variant="inline" />
          <span className="ppl-key__note">Names in <em className="name-desc">italics</em> are the archive’s own descriptors; the games never print them.</span>
        </p>
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
            lead={needle ? undefined : g === "entity" ? "Machines and entities the model does not fold into any person." : more > 0 ? `${plural(more, "other figure")} folded into them.` : undefined}
          >
            <ul className="ppl-rows">{list.map((e) => <PersonRow key={e.root.id} entry={e} hits={hitsOf(e, needle)} via={viaOf(e, needle)} />)}</ul>
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
            ? <MinorIndex list={shownMinor} needle={needle} />
            : <Collapsible summary="Every minor figure, A to Z" meta={plural(minor.length, "name")}>{() => <MinorIndex list={minor} />}</Collapsible>}
        </DossierSection>
      )}

      {nobody && (
        <Empty title="Nobody by that name">
          No person, alias or minor figure matches “{asked}”. The archive uses only names that the games print or
          speak. <Link to="/method#names">How the archive names people</Link>
        </Empty>
      )}
    </Page>
  );
}
