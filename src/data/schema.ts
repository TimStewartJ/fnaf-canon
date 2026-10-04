/**
 * Canon data model. Every displayed "atomic truth" is an Evidence record.
 * Higher-level objects (people, events, theory claims) only ever point at evidence ids.
 */

export type GameId =
  | "fnaf1" | "fnaf2" | "fnaf3" | "fnaf4" | "fnaf4-halloween" | "fnaf-world" | "sister-location"
  | "ffps" | "ucn" | "help-wanted" | "curse-of-dreadbear" | "special-delivery"
  | "security-breach" | "ruin" | "help-wanted-2" | "into-the-pit" | "secret-of-the-mimic"
  | "freddy-in-space-2" | "scott" | "scottgames-site";

export type SourceKind =
  | "phone-call"      // recorded calls (Phone Guy, Phone Dude, HandUnit, etc.)
  | "audio-tape"      // cassette / tape recordings (FFPS Cassette Man, HW tapes, SB messages)
  | "minigame"        // 8-bit / Atari minigames
  | "cutscene"        // non-interactive scenes, endings
  | "dialogue"        // spoken in-game character dialogue
  | "text"            // newspapers, paychecks, notes, emails, terminal text, collectibles
  | "environment"     // posters, drawings, set dressing, level design, items physically present
  | "mechanic"        // something established through gameplay behavior
  | "ending"          // ending screens / certificates
  | "hidden"          // rare screens, easter eggs, extras menus, data only reachable in-game
  | "teaser"          // scottgames.com teaser images / official promo text by Scott
  | "scott-statement";// Scott Cawthon posts (Steam, Reddit, interviews in his own words)

/** How directly the claim is supported by the cited source. */
export type Certainty =
  | "stated"   // explicitly said/written in the source
  | "shown"    // explicitly depicted but not said in words
  | "implied"; // requires a small, defensible reading of the source

export type TimePrecision = "exact" | "approx" | "relative" | "unknown";

export interface InUniverseTime {
  /** Best in-universe year the fact refers to, if known. */
  year?: number;
  /** Human label, e.g. "1987", "c. 1983 (inferred)", "30 years after FNaF1". */
  label: string;
  precision: TimePrecision;
  /**
   * How the date is known, where `precision` alone would mislabel it. The pages show a record's date as
   * "printed" for `exact` and "estimated" for `approx`; set `kind` when neither is true, for example
   * "teaser" for a year shown in a teaser and on a document not yet confirmed as legible in play.
   */
  kind?: DateKind;
  /** Short reason the date is assigned (e.g. "date printed on paycheck"). */
  basis?: string;
}

export interface Evidence {
  id: string;                 // kebab-case, globally unique, prefixed by game e.g. "fnaf2-paycheck-1987"
  title: string;              // short label
  claim: string;              // the single atomic truth, phrased neutrally
  quote?: string;             // verbatim in-game text/speech when applicable
  game: GameId;
  kind: SourceKind;
  location: string;           // exactly where in the source: "Night 2 phone call", "Save Them minigame", "Steam post 2015-03-02"
  certainty: Certainty;
  when: InUniverseTime;       // the in-universe time the fact describes
  people?: string[];          // person ids (see entities)
  places?: string[];          // place ids
  tags?: string[];            // free tags: "missing-children", "remnant", "bite", ...
  related?: string[];         // other evidence ids this directly interacts with
  image?: string;             // file name under /img/
  url?: string;               // primary URL for Scott statements / teasers
  verifiedVia?: string;       // research aid used to double-check wording (e.g. wiki transcript page URL)
  notes?: string;             // caveats, ambiguity, contradictions
}

export interface ImageCredit {
  file: string;               // e.g. "fnaf2-save-them.png"
  game: GameId;
  caption: string;
  sourcePage: string;         // wiki File: page or official URL it was retrieved from
}

export type Status = "canon" | "strong" | "theory";

export interface Person {
  id: string;
  name: string;               // name as best established by canon (or a neutral descriptor)
  aliases: string[];
  nameStatus: "canon-name" | "descriptor";
  /** RichText. What the records give. A long one is set in paragraphs: a blank line ("\n\n") starts a new one. */
  summary: string;
  status: string;
  firstAppearance: GameId;
  evidence: string[];
  /** RichText. The model's reading. Paragraphs as in `summary`. */
  theory?: string;
  group: "afton" | "cassette" | "victim" | "staff" | "protagonist" | "entity" | "pizzaplex" | "mimic" | "other";
  image?: string;
}

export type RelationKind =
  | "parent-of" | "sibling-of" | "spouse-of" | "killed" | "possesses" | "created"
  | "employed-by" | "same-as" | "worked-with" | "hunted" | "controls" | "partner-of"
  | "became"   // object continuity: a suit/machine turned into another form
  | "wore";    // a person took on a role or costume

export interface Relation {
  from: string;
  to: string;
  kind: RelationKind;
  status: Status;
  evidence: string[];
  note?: string;
  /**
   * The tie in the records' own words, where the kind's verb would say more than the records do.
   * Written to follow the first person's name and to be followed by the second's, for example
   * `calls` ... `"old friend"` is written as: says: "calls {to} \"old friend\"". `{to}` marks where the
   * other person's name goes; if it is absent the name follows the phrase. The pages print this in place
   * of the kind's verb; the kind still decides the line's colour and family.
   */
  says?: string;
}

export interface Place {
  id: string;
  name: string;
  summary: string;
  years: string;
  evidence: string[];
  image?: string;
}

export interface TimelineEvent {
  id: string;
  year: number;               // sort key (fractional allowed for ordering inside a year)
  yearLabel: string;
  title: string;
  summary: string;
  status: Status;
  evidence: string[];
  people?: string[];
  places?: string[];
  era: string;
  image?: string;
}

export type Confidence = "high" | "medium" | "low";

/** How a displayed date is supported. Rendered as a date pill (see RichText date tokens). */
export type DateKind = "printed" | "derived" | "estimated" | "relative" | "teaser" | "unknown";

/**
 * ── Theory content contract ─────────────────────────────────────────────────────────────
 * The Unified Model is: an intro, a short chronological storyline, and chapters grouped into parts.
 *
 * Every text field marked "RichText" may use these inline tokens (rendered by RichText in components/ui.tsx):
 *   [[evidence-id]]              citation of an evidence record
 *   {{entity-id}}                link to a person or place page
 *   ((section-id))               link to another theory chapter, labelled with its title
 *   ((section-id|custom label))  the same, with a custom label
 *   **bold**   *italic*
 *   <<label|kind|evidence-id,evidence-id|basis>>   a date pill (kind is a DateKind). Avoid " and ' inside the token.
 */

/** A part (act) of the model. Chapters name their part by id and are shown in theory.ts order. */
export interface TheoryPart {
  id: string;
  title: string;
  /** Short label shown above the title, e.g. an era or theme. The UI numbers parts itself. */
  kicker?: string;
  /** RichText. One to three sentences introducing the part. */
  blurb: string;
}

/** Block-level content inside a chapter. A plain string is a paragraph. All text fields are RichText unless noted. */
export type TheoryBlock =
  | string
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  /** An image from public/img (must have an ImageCredit). `evidence` links the record it illustrates. */
  | { kind: "figure"; image: string; caption?: string; evidence?: string }
  /** A pull quote taken verbatim from an evidence record's `quote`. `text` may narrow it to an exact substring. */
  | { kind: "quote"; evidence: string; text?: string }
  /** key = the point to remember; note = aside; tension = evidence that pushes back; open = unresolved. */
  | { kind: "callout"; tone: "key" | "note" | "tension" | "open"; title?: string; text: string }
  /** Competing readings side by side. Mark the model's choice with `pick`. `verdict` is a short plain label. */
  | { kind: "compare"; columns: { title: string; verdict?: string; pick?: boolean; text: string }[] }
  /** A small table. Cells are RichText. */
  | { kind: "table"; head: string[]; rows: string[][] }
  /** An exhibit strip: the listed evidence records shown as cards. `title` is plain text. */
  | { kind: "evidence"; ids: string[]; title?: string };

export interface TheorySection {
  id: string;
  title: string;
  /** Paragraphs and other blocks. Inline citations use [[evidence-id]]. */
  body: TheoryBlock[];
  /** How well the chapter's main claim is supported. */
  confidence: Confidence;
  /** Records that cut against the chapter. */
  counterEvidence?: string[];
  /** TheoryPart id. */
  part?: string;
  /** Plain text. The question this chapter answers. */
  question?: string;
  /** RichText. The model's answer in one or two sentences. */
  answer?: string;
  /** Lead image from public/img. */
  hero?: { image: string; caption?: string };
  /** RichText. How the model handles the counter-evidence. */
  tension?: string;
  /** RichText. What new evidence would change this chapter's answer. */
  changesIf?: string;
  /** Other chapter ids worth reading next to this one. */
  seeAlso?: string[];
  /** Evidence that belongs to this chapter's thread but is not cited inline ("further evidence filed here"). */
  further?: string[];
}

/** One beat of the short, chronological telling of the whole story. */
export interface StoryBeat {
  id: string;
  /** RichText. Usually a date pill or a short label such as "Years later". */
  when: string;
  title: string;
  /** RichText. One short paragraph: at most 130 words, in short sentences. */
  text: string;
  /** The mark of the weakest thing the beat tells. */
  confidence: Confidence;
  /** Chapter ids that argue this beat. */
  sections: string[];
  /** Era id from timeline.ts, used for colour. */
  era?: string;
  /** Image from public/img. */
  image?: string;
}

export interface TheoryIntro {
  /** Page title of the model. */
  title: string;
  /** Plain text. One line under the title. */
  standfirst: string;
  /** RichText. The whole model in a short paragraph. */
  thesis: string;
  /** RichText paragraphs. How to read the model: what the markers, the marks and the citations mean. Printed before the storyline. */
  howToRead: string[];
  /** RichText. How a chapter is built, and what the tags on weaker records mean. Printed at the head of the chapters, after the storyline. */
  aboutChapters?: string;
}

/** Evidence records that are deliberately not part of the story, grouped by reason (e.g. non-canon per Scott, out-of-universe). */
export interface OutsideStoryGroup {
  id: string;
  title: string;
  /** RichText. Why these records carry no story weight. */
  reason: string;
  ids: string[];
}
