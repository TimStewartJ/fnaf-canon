import { useState, type CSSProperties } from "react";
import { ArrowRight, Search } from "lucide-react";
import type { DateKind } from "../../data/schema";
import { evidenceById, games } from "../../data/store";
import {
  Button, ButtonLink, Callout, CertaintyMark, ChapterLink, Chip, CiteList, Collapsible, ConfidenceMark, DATE_KINDS, DEATH_KIND_ICON, DatePill, ERA_HUE, Empty,
  EntityLink, EvidenceCard, EvidenceList, Fact, Facts, Figure, FilterBar, FilterChip, FilterGroup, FirmnessLegend, GROUP_HUE, GameMark, INTERACTION_ICON, Icon,
  IconButton, Loading, Page, PageHeader, RecordText, RichText, SOURCE_KIND_ICON, SearchField, Section, Segmented, StatusMark, TableWrap, Tabs, Tag, Toggle, kindLabel, plainText, smartQuotes,
} from "../../components/ui";
import "./dev.css";

const COLOURS = ["bg", "bg-sunk", "surface", "surface-2", "overlay", "line", "line-strong", "line-control", "text", "text-read", "text-2", "text-3", "accent", "accent-strong", "accent-fill", "accent-soft", "tension", "tension-soft", "open", "open-soft", "ok", "ok-soft", "mat"];
const TYPE: [string, string, string][] = [
  ["--fs-4xl", "var(--font-display)", "Cover and hero display"],
  ["--fs-3xl", "var(--font-display)", "Page title (h1)"],
  ["--fs-2xl", "var(--font-display)", "Section title in an article (h2)"],
  ["--fs-xl", "var(--font-display)", "Section heading, card title"],
  ["--fs-lg", "var(--font-text)", "Lede and standfirst"],
  ["--fs-read", "var(--font-text)", "Long-form body text"],
  ["--fs-md", "var(--font-text)", "Card text, compact prose"],
  ["--fs-base", "var(--font-ui)", "Interface text"],
  ["--fs-sm", "var(--font-ui)", "Small interface text"],
  ["--fs-xs", "var(--font-mono)", "Captions and metadata"],
  ["--fs-2xs", "var(--font-mono)", "MICRO LABELS, UPPERCASE"],
];
const RECORDS = ["fnaf2-take-cake-to-the-children", "fnaf1-news-five-children", "fnaf4-the-bite", "ffps-scup-blueprint"];

/** /dev/kit: every shared component in one place, for review and as a living reference next to DESIGN.md. */
export default function DevKit() {
  const [tab, setTab] = useState("one");
  const [seg, setSeg] = useState("b");
  const [on, setOn] = useState(true);
  const [chips, setChips] = useState<string[]>(["canon"]);
  const [q, setQ] = useState("");
  const card = evidenceById.get(RECORDS[0]);
  return (
    <Page title="Fixture: component kit" className="dev-page">
      <PageHeader kicker="Review fixture · not part of the archive" title="Component kit" lede="Every shared component, as page agents will use it. Markup and props are documented in DESIGN.md." />

      <Section title="Colour tokens">
        <div className="dev-swatches">{COLOURS.map((c) => <span key={c} className="dev-swatch"><i style={{ background: `var(--c-${c})` }} />--c-{c}</span>)}</div>
      </Section>

      <Section title="Type scale">
        <div className="dev-type">
          {TYPE.map(([size, family, use]) => (
            <p key={size} style={{ fontSize: `var(${size})`, fontFamily: family, lineHeight: 1.2 }}>{use}<small>{size} · {family.replace(/var\(--font-|\)/g, "")}</small></p>
          ))}
        </div>
      </Section>

      <Section title="Firmness marks" lead="One grammar for certainty, status and confidence: filled, half, hollow; solid, dashed, dotted.">
        <div className="dev-row"><span className="label">tag</span><CertaintyMark value="stated" /><CertaintyMark value="shown" /><CertaintyMark value="implied" /><StatusMark value="canon" /><StatusMark value="strong" /><StatusMark value="theory" /><ConfidenceMark value="high" /><ConfidenceMark value="medium" /><ConfidenceMark value="low" /></div>
        <div className="dev-row"><span className="label">tag, long</span><StatusMark value="strong" long /><ConfidenceMark value="medium" long /></div>
        <div className="dev-row"><span className="label">inline</span><CertaintyMark value="stated" variant="inline" /><StatusMark value="strong" variant="inline" long /><ConfidenceMark value="low" variant="inline" long /></div>
        <div className="dev-row"><span className="label">glyph</span><ConfidenceMark value="high" variant="glyph" /><ConfidenceMark value="medium" variant="glyph" /><ConfidenceMark value="low" variant="glyph" /></div>
        <div className="dev-narrow"><FirmnessLegend /></div>
      </Section>

      <Section title="Game marks">
        <div className="dev-row">{games.map((g) => <GameMark key={g.id} id={g.id} />)}</div>
        <div className="dev-row"><GameMark id="fnaf2" variant="full" /><GameMark id="sister-location" variant="full" link /><GameMark id="ffps" variant="dot" /><GameMark id="ucn" link /></div>
      </Section>

      <Section title="Dates">
        <div className="dev-row">{DATE_KINDS.map((k: DateKind) => <DatePill key={k} label={k === "unknown" ? "undated" : "c. 1983"} kind={k} basis={`Example of a ${k} date.`} evidence={k === "printed" ? ["fnaf4-fredbear-and-friends-1983"] : []} />)}</div>
        <div className="dev-row"><span className="label">compact</span><DatePill compact label="1987" kind="printed" /><DatePill compact label="before c. 1979 – 1983" kind="estimated" /></div>
        {/* A date in figures with the month first keeps its figures; the popover gives it in words. Figures whose first number is no month are left alone. */}
        <div className="dev-row" id="kit-monthfirst"><span className="label">month first</span><DatePill label="11-12-1987" kind="printed" basis="The date printed on the Night 5 cheque." /><DatePill label="11-12-1987 and 11-13-1987" kind="printed" basis="Printed on the two cheques." /><DatePill label="11-12-xx" kind="printed" basis="The year is blanked on the cheque." /><DatePill label="After 11-13-1987 (the closure)" kind="derived" /><DatePill label="25-12-1987" kind="estimated" basis="Not a date with the month first: nothing is added." /></div>
        <p className="prose"><RichText text="Inline, in a sentence: the party falls in <<c. 1983|derived|fnaf4-fredbear-and-friends-1983|From the printed TV year.>>, and the bite of <<'87|printed|fnaf1-call1-bite-of-87|Spoken by Phone Guy.>> is a different event." /></p>
      </Section>

      <Section title="RichText, citations and links">
        <p className="prose"><RichText text="A sentence with one citation [[fnaf2-take-cake-to-the-children]], then a cluster of three [[fnaf4-the-bite]] [[fnaf1-news-five-children]] [[ffps-scup-blueprint]]. A person {{william-afton}}, a place {{fredbears-family-diner}}, **bold**, *italic*, a chapter ((plush)) and a broken citation [[no-such-record]]." /></p>
        <div className="dev-row"><span className="label">CiteList</span><CiteList ids={RECORDS} /></div>
        <div className="dev-row"><span className="label">CiteList code</span><CiteList ids={RECORDS} variant="code" /></div>
        <div className="dev-row"><span className="label">EntityLink chip</span><EntityLink id="william-afton" variant="chip" /><EntityLink id="fredbears-family-diner" variant="chip" /><span className="label">ChapterLink</span><ChapterLink id="plush" /></div>
        {/* Names are stored as they run in a sentence; a name that stands alone or opens a sentence takes a capital, and a descriptor is italic where people are listed. */}
        <div className="dev-row"><span className="label">A descriptor</span><EntityLink id="glitchtrap" variant="chip" /><span>alone: <EntityLink id="glitchtrap" alone /></span><span>in a sentence: see <EntityLink id="glitchtrap" />.</span></div>
        <p className="prose"><RichText text="{{glitchtrap}} opens a sentence with a capital. Inside one, {{glitchtrap}} keeps its small letter." /></p>
        {/* One full stop, not two: a link or a name whose label ends in a stop, standing at the end of a sentence. */}
        <p className="prose" id="kit-stops"><RichText text="A link whose label ends in a full stop and also ends the sentence is followed by no second one: see ((hen-and-wa)). The same for a name: the letter is signed {{wa-signatory}}. And in bold: **((hen-and-wa))**. Inside a sentence nothing changes, as in ((hen-and-wa)), and three dots stay three: ((hen-and-wa))..." /></p>
        <p className="prose" id="kit-stops-plain">{plainText("As plain words: see ((hen-and-wa)). Signed {{wa-signatory}}. In bold: **((hen-and-wa))**.")}</p>
        {/* Quotation marks are read from both sides: a mark after a bracket can close, a quotation can open on a bracket, a sign or a figure, and only a year cut short keeps its apostrophe. */}
        <p className="prose" id="kit-quotes">{smartQuotes(`Quotation marks: a post called "Bad news about the FNAF movie. :(" by its author; an email headed '(no subject)' and signed '- Vanessa'; a tiny '?', a price of '$2000', the year '1983' and a hidden '10'; but the Bite of '87, the '80s and the brothers' room keep their apostrophes.`)}</p>
        {/* The four tags on a weaker kind of record. Each is the words as written, with a dotted line and its meaning on hover, focus or a press. */}
        <p className="prose" id="kit-tags"><RichText text="The four tags: the call ends in a scream (as described) [[fnaf1-call4-phone-guy-attacked]], a poster among the textures (read from an image) names the diner, the keypad answers to 1-9-8-3 (a fan wiki's account), and in a 2018 interview (a transcript) Scott said more. In bold the tag keeps its mark: **(as described)**. Inside a longer bracket the phrase alone is marked (a rabbit costume's, by a fan wiki's account). Outside a bracket the same words are a sentence and are left alone: by a fan wiki's account, read from an image." /></p>
        {/* A tag in text that is cut off takes no tab stop: this paragraph is held to two lines, and its tag is on a later one. */}
        <p className="prose dev-clamp" id="kit-tags-cut"><RichText text="A paragraph held to two lines, as a caption is in a tile or a summary is on a phone. Its first lines are plain words, long enough to fill the two lines that show at any width from a phone to a desk, and then some more words to be sure of it. The tag stands in the part that is cut off (as described), where no key should stop." /></p>
      </Section>

      <Section title="A record’s own prose">
        {/* Notes, claims and date bases name other records by id. A known id is printed as the record's title, as a link that opens it; a long title is cut; an id no record has, and a word that only looks like one, stay as written. */}
        <p className="read dev-narrow" id="kit-recordtext"><RecordText emphasis text="The year is hidden on the first game's cheque (fnaf1-paycheck-night5); see fnaf2-overtime-robots-scrapped and secret-of-the-mimic-opening-call-arnold-dispatch. An id that no record has stays as written (fnaf9-no-such-record), and so does a word that only looks like one: end-of-night, 11-12-1987. The source's own *emphasis* is kept." /></p>
        <p className="read dev-narrow" id="kit-recordtext-plain"><span className="label">plain</span> <RecordText plain text="Where a link cannot go the title is words only (fnaf1-paycheck-night5)." /></p>
        {/* A card whose claim names another record, and the same record as a row. */}
        <div className="dev-grid" id="kit-recordtext-card">{["into-the-pit-new-mill-fathers"].map((id) => evidenceById.get(id)).map((e) => e && <EvidenceCard key={e.id} e={e} />)}</div>
        <EvidenceList ids={["into-the-pit-new-mill-fathers", "ffps-lorekeeper-gravestones"]} />
      </Section>

      <Section title="Buttons and controls">
        <div className="dev-row"><Button variant="primary" iconEnd={ArrowRight}>Primary</Button><Button>Default</Button><Button variant="quiet">Quiet</Button><Button size="sm">Small</Button><ButtonLink to="/dev/kit" icon={Search}>Link</ButtonLink><IconButton icon={Search} label="Search" /><Button disabled>Disabled</Button></div>
        <div className="dev-row"><Chip>Chip</Chip><Chip tone="accent">accent</Chip><Chip tone="ok">ok</Chip><Chip tone="tension">tension</Chip><Chip tone="open">open</Chip><Tag to="/dev/kit">#tag</Tag></div>
        <div className="dev-row">
          {["canon", "strong", "theory"].map((c) => <FilterChip key={c} on={chips.includes(c)} count={3} onClick={() => setChips(chips.includes(c) ? chips.filter((x) => x !== c) : [...chips, c])}>{c}</FilterChip>)}
          <Toggle on={on} onChange={setOn}>Toggle</Toggle>
          <Segmented label="Example" value={seg} onChange={setSeg} options={[{ id: "a", label: "One" }, { id: "b", label: "Two" }, { id: "c", label: "Three" }]} />
        </div>
        <Tabs label="Example tabs" value={tab} onChange={setTab} tabs={[{ id: "one", label: "First tab" }, { id: "two", label: "Second tab" }, { id: "three", label: "Third" }]} />
        <FilterBar>
          <FilterGroup label="Search"><SearchField label="Search" placeholder="Search field" value={q} onChange={setQ} /></FilterGroup>
          <FilterGroup label="Chips">{games.slice(0, 12).map((g) => <FilterChip key={g.id} on={g.id === "fnaf2"}><GameMark id={g.id} /></FilterChip>)}</FilterGroup>
          <FilterGroup label="Select"><select aria-label="Example"><option>Everywhere</option></select><label className="check"><input type="checkbox" defaultChecked /> A checkbox</label></FilterGroup>
        </FilterBar>
      </Section>

      <Section title="Callouts, collapsible, facts, table">
        <div className="dev-grid">
          <Callout tone="key" title="Key"><p>The point to remember.</p></Callout>
          <Callout tone="note"><p>An aside. The label falls back to the tone.</p></Callout>
          <Callout tone="tension"><p>Evidence that pushes back.</p></Callout>
          <Callout tone="open"><p>Unresolved.</p></Callout>
        </div>
        <Collapsible summary="A collapsible section" meta="3 records"><EvidenceList ids={RECORDS.slice(0, 3)} /></Collapsible>
        <Collapsible summary="Open by default" defaultOpen><p>Body content.</p></Collapsible>
        <Facts className="dev-narrow"><Fact label="Source"><GameMark id="fnaf2" variant="full" /></Fact><Fact label="Certainty"><CertaintyMark value="shown" variant="inline" /></Fact></Facts>
        <TableWrap label="Example table">
          <table className="table">
            <thead><tr><th>Source</th><th>Released</th><th>Developer</th><th>Set in</th><th>Records</th></tr></thead>
            <tbody>{games.slice(0, 3).map((g) => <tr key={g.id}><td>{g.title}</td><td className="mono nowrap">{g.released}</td><td>{g.developer}</td><td>{g.settingYearLabel}</td><td className="mono">12</td></tr>)}</tbody>
          </table>
        </TableWrap>
      </Section>

      <Section title="Evidence">
        <div className="ev-grid">{card && <EvidenceCard e={card} />}{evidenceById.get(RECORDS[1]) && <EvidenceCard e={evidenceById.get(RECORDS[1])!} showImage={false} />}</div>
        <div className="dev-narrow"><EvidenceList ids={RECORDS} numbers={(id) => RECORDS.indexOf(id) + 1} /></div>
      </Section>

      <Section title="Figures">
        <div className="dev-grid">
          <Figure file="fnaf2-take-cake-to-the-children.png" tag="Exhibit" evidence="fnaf2-take-cake-to-the-children" />
          <Figure file="fnaf4-plush-with-pupils.png" caption="A small pixel-art image, shown larger than its natural size, stays crisp." />
          <Figure file="fnaf1-missing-children-newspapers.jpg" compact />
        </div>
      </Section>

      <Section title="Icons">
        <div className="dev-row">{Object.entries(SOURCE_KIND_ICON).map(([k, I]) => <span key={k} className="chip"><Icon icon={I} /> {kindLabel(k)}</span>)}</div>
        <div className="dev-row">{Object.entries(DEATH_KIND_ICON).map(([k, I]) => <span key={k} className="chip"><Icon icon={I} /> {k}</span>)}{Object.entries(INTERACTION_ICON).map(([k, I]) => <span key={k} className="chip"><Icon icon={I} /> {k}</span>)}</div>
      </Section>

      <Section title="Data hues" lead="From components/palette.ts. Swatches, rules and tints only; never text.">
        <div className="dev-swatches">
          {Object.entries(ERA_HUE).map(([k, v]) => <span key={k} className="dev-swatch"><i style={{ background: v } as CSSProperties} />era · {k}</span>)}
          {Object.entries(GROUP_HUE).map(([k, v]) => <span key={k} className="dev-swatch"><i style={{ background: v } as CSSProperties} />group · {k}</span>)}
        </div>
      </Section>

      <Section title="Empty and loading">
        <div className="dev-grid"><Empty title="Nothing matches">Try fewer filters.</Empty><Loading /></div>
      </Section>
    </Page>
  );
}
