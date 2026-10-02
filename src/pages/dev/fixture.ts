/**
 * Fixture content for /dev/blocks: made-up chapters, parts, a long storyline and "outside the story"
 * groups that exercise every field and block type of the theory content contract (schema.ts),
 * including the ones the real content does not use yet. It cites real evidence records and real
 * images so previews and the drawer work. Nothing here is part of the archive's theory.
 */
import type { OutsideStoryGroup, StoryBeat, TheoryPart, TheorySection } from "../../data/schema";

export const fxParts: TheoryPart[] = [
  { id: "fx-blocks", title: "Every block", kicker: "Fixture", blurb: "A chapter that uses every field and every block type, and one that uses none of the optional ones. See {{william-afton}} and [[ffps-credits-william-afton]] for inline tokens in a blurb." },
  { id: "fx-edges", title: "Edge cases", blurb: "No kicker on this part. Long titles, missing ids and a chapter whose question repeats its title." },
];

export const fxChapters: TheorySection[] = [
  {
    id: "fx-everything", part: "fx-blocks", title: "A chapter with every field and every block type", confidence: "medium",
    question: "Does the layout hold when a chapter uses everything the contract allows?",
    answer: "It should. The answer is set large, may carry citations [[fnaf4-the-bite]] [[fnaf4-i-will-put-you-back-together]], a date such as <<c. 1983|derived|fnaf4-fredbear-and-friends-1983|Worked out from the one year printed in FNaF4.>>, and a link to {{crying-child}}.",
    hero: { image: "fnaf4-fredbear-and-friends-1983-tv.png", caption: "A hero caption is RichText: it can cite [[fnaf4-fredbear-and-friends-1983]] and name {{fnaf4-house}}." },
    body: [
      "A plain paragraph with every inline token. A citation on its own [[fnaf2-take-cake-to-the-children]]. Three citations in a row [[fnaf3-n5-springlock-death]] [[ffps-completion-fire]] [[fnaf1-news-five-children]], which should group into one cluster. A repeat of the first one [[fnaf2-take-cake-to-the-children]] keeps its number. **Bold text**, *italic text*, and **bold with a citation inside [[ffps-scup-blueprint]]**. A person: {{william-afton}}. A place: {{fredbears-family-diner}}. An entity with no page: {{nobody-by-this-id}}. A chapter link: ((fx-bare)). A chapter link with a label: ((fx-edge|the edge-case chapter)).",
      "Every kind of date: <<1983|printed|fnaf4-fredbear-and-friends-1983|Printed in the title of the TV broadcast.>>, <<c. 1983|derived|fnaf4-fredbear-and-friends-1983,fnaf4-the-bite|The party ends a five-day countdown whose only printed year is 1983.>>, <<c. 2017|estimated||This archive's estimate from the surrounding evidence.>>, <<after the Bite|relative|fnaf4-the-bite|Placed only by what it follows.>>, <<1979|teaser||Shown only in a teaser.>> and <<undated|unknown||The sources give no date.>>.",
      { kind: "heading", text: "A heading inside the chapter, which may also cite [[sl-golden-freddy-cutscene-father]]" },
      "A paragraph after a heading. The pull quote below takes its words from the record's own quote.",
      { kind: "quote", evidence: "fnaf4-i-will-put-you-back-together" },
      "The next quote narrows a longer line to an exact substring with `text`.",
      { kind: "quote", evidence: "sl-golden-freddy-cutscene-father", text: "Father. It's me, Michael." },
      { kind: "list", items: ["An unordered list item with a citation [[fnaf1-call1-bite-of-87]].", "A second item naming {{michael-afton}}.", "A third item, long enough to wrap onto a second line so the hanging indent can be checked on a narrow screen as well as a wide one."] },
      { kind: "list", ordered: true, items: ["First, an ordered step.", "Second, with **bold** and a date: <<'87|printed|fnaf1-call1-bite-of-87|Spoken as 'the Bite of 87'.>>.", "Third and last."] },
      { kind: "figure", image: "fnaf2-take-cake-to-the-children.png", caption: "A figure with a caption that cites its own record [[fnaf2-take-cake-to-the-children]] and links it as the illustrated evidence.", evidence: "fnaf2-take-cake-to-the-children" },
      { kind: "figure", image: "fnaf4-plush-with-pupils.png" },
      { kind: "callout", tone: "key", title: "Key: the point to remember", text: "The key tone. Text is RichText [[ffps-credits-william-afton]], so it can cite, link {{cassette-man}} and point to ((fx-bare))." },
      { kind: "callout", tone: "note", text: "The note tone with no title: the label falls back to the tone's own name." },
      { kind: "callout", tone: "tension", title: "A record that pushes back", text: "The tension tone, for evidence inside the argument that cuts the other way [[ucn-omc-ending]]." },
      { kind: "callout", tone: "open", title: "Still open", text: "The open tone, for a question the evidence does not settle." },
      { kind: "heading", text: "Competing readings" },
      {
        kind: "compare", columns: [
          { title: "Two columns: the first reading", verdict: "Preferred here", pick: true, text: "A short reading with one citation [[fnaf2-give-gifts-give-life]]." },
          { title: "The second reading", text: "No verdict and not the pick. Long enough to show how two cards of unequal length sit side by side on a wide screen and stack on a narrow one." },
        ],
      },
      {
        kind: "compare", columns: [
          { title: "Four columns: A", pick: true, text: "The pick, with no verdict text, so the flag falls back to its default wording." },
          { title: "B", verdict: "Possible", text: "Second of four [[fnaf3-happiest-day]]." },
          { title: "C", verdict: "Unlikely", text: "Third of four." },
          { title: "D with a much longer title than its neighbours to test wrapping", verdict: "Ruled out by Scott", text: "Fourth of four [[scott-2017-one-retcon]]." },
        ],
      },
      { kind: "heading", text: "A table" },
      {
        kind: "table", head: ["Record", "What it says", "Certainty", "Date"],
        rows: [
          ["Take Cake [[fnaf2-take-cake-to-the-children]]", "A child is killed outside while the player serves cake.", "Shown", "<<undated|unknown||No year is given.>>"],
          ["The Bite [[fnaf4-the-bite]]", "The jaw closes on the child's head at his own party.", "Shown", "<<c. 1983|derived|fnaf4-fredbear-and-friends-1983|From the printed TV year.>>"],
          ["Credits [[ffps-credits-william-afton]]", "The salvaged animatronic's voice is credited as **William Afton**.", "Stated", "<<2017|printed||Release year.>>"],
        ],
      },
      { kind: "evidence", title: "An exhibit strip with a title", ids: ["fnaf1-news-five-children", "ffps-scup-blueprint", "fnaf2-give-gifts-give-life", "fnaf3-n5-springlock-death", "this-id-does-not-exist"] },
      { kind: "evidence", ids: ["ucn-omc-ending"] },
      "A closing paragraph after the blocks, citing a record that does not exist [[this-id-does-not-exist]] to show how a broken citation looks.",
    ],
    counterEvidence: ["ucn-omc-ending", "scott-2017-one-retcon", "fnaf1-call1-bite-of-87"],
    tension: "The tension text explains how the model lives with the records above [[ucn-omc-ending]]. It is RichText too.",
    changesIf: "A record that names the speaker outright, or a date printed on screen that contradicts <<c. 1983|derived|fnaf4-fredbear-and-friends-1983|From the printed TV year.>>.",
    seeAlso: ["fx-bare", "fx-edge", "fx-missing-chapter"],
    further: ["hw-tape-13-fe-hired-developer", "security-breach-burntrap-appearance", "fnaf4-the-bite"],
  },
  {
    id: "fx-bare", part: "fx-blocks", title: "A chapter with none of the optional fields", confidence: "high",
    body: [
      "This chapter has a title, a confidence and two plain paragraphs. No question, no answer, no hero, no counter-evidence, no tension, no see-also and no further evidence. Most real chapters look like this today [[fnaf1-news-kids-vanish]].",
      "The page should still feel complete: the header shows the confidence in words, and the chapter ends with its sources and the previous and next links.",
    ],
  },
  {
    id: "fx-edge", part: "fx-edges", title: "Does a question that only repeats the title show twice?", confidence: "low",
    question: "Does a question that only repeats the title show twice?",
    answer: "No. When the question says the same thing as the title, only the answer is shown.",
    body: ["A single paragraph and nothing cited."],
    tension: "A chapter can have tension text without listing any counter-evidence records.",
  },
  {
    id: "fx-long", part: "fx-edges", title: "A very long chapter title that keeps going well past the point where any reasonable editor would have cut it, to check wrapping in the rail, the pager and the contents", confidence: "medium",
    answer: "Titles of any length must wrap cleanly everywhere they appear.",
    body: ["Body."],
    counterEvidence: ["fnaf3-happiest-day"],
  },
  {
    id: "fx-loose", title: "A chapter that names no part", confidence: "high",
    body: ["Chapters without a part are listed last, under their own heading."],
  },
];

const BEAT_IMAGES = [
  "fnaf4-older-brother-and-bullies.png", "fnaf2-take-cake-to-the-children.png", "fnaf1-missing-children-newspapers.jpg", "fnaf2-give-gifts-give-life.png",
  "sl-baby-minigame-claw.png", "fnaf3-springlock-death.png", "fnaf3-it-burns.jpg", "ffps-insanity-scup-blueprint.png", "hw-glitchtrap-behind-player.jpg", "sb-burntrap-and-tangle.jpg",
];
const ERAS = ["founding", "diner", "murders", "pizzeria", "funtime", "aftermath", "digital", "pizzaplex"];
const CONF = ["high", "medium", "low"] as const;

/** Sixteen beats, most with an image, cycling through the eras and the three confidence levels. */
export const fxStoryline: StoryBeat[] = Array.from({ length: 16 }, (_, i) => ({
  id: `fx-beat-${i + 1}`,
  when: i === 0 ? "Before <<1983|printed|fnaf4-fredbear-and-friends-1983|The one year printed in FNaF4.>>" : i % 5 === 0 ? "Years later" : i % 3 === 0 ? "<<c. 1983|derived|fnaf4-fredbear-and-friends-1983|From the printed TV year.>>" : "Undated",
  title: i === 7 ? "A beat with a long title that has to wrap onto a second line on a phone" : `Fixture beat ${i + 1}`,
  text: i % 4 === 3
    ? "A short beat with one sentence and one citation [[fnaf4-the-bite]]."
    : "A beat is two to five sentences. It cites the records it rests on [[fnaf2-take-cake-to-the-children]] [[fnaf1-news-five-children]], may name {{william-afton}}, and stays readable when a dozen of them run one after another. This one is long enough to fill three or four lines on a desktop screen.",
  confidence: CONF[i % 3],
  sections: i % 6 === 5 ? [] : i % 2 ? ["fx-everything", "fx-bare"] : ["fx-edge"],
  era: ERAS[Math.floor(i / 2) % ERAS.length],
  image: i % 3 === 2 ? undefined : BEAT_IMAGES[i % BEAT_IMAGES.length],
}));

export const fxOutside: OutsideStoryGroup[] = [
  { id: "fx-noncanon", title: "Ruled non-canon by Scott", reason: "A group of records that carry no story weight, with the reason as RichText [[scott-2017-one-retcon]].", ids: ["ucn-omc-ending", "fnaf3-happiest-day", "hw-tape-13-fe-hired-developer"] },
  { id: "fx-outofuniverse", title: "Out-of-universe statements", reason: "Scott speaking about the series rather than inside it.", ids: ["scott-2017-one-retcon"] },
];

export const fxHowToRead = [
  "A how-to-read paragraph is RichText: it can show a citation [[fnaf4-the-bite]] and a date <<1983|printed|fnaf4-fredbear-and-friends-1983|Printed on screen.>> in place.",
  "A second paragraph, to check the spacing between them.",
];
