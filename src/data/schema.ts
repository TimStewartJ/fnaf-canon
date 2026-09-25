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
  summary: string;
  status: string;
  firstAppearance: GameId;
  evidence: string[];
  theory?: string;
  group: "afton" | "emily" | "victim" | "staff" | "protagonist" | "entity" | "pizzaplex" | "mimic" | "other";
  image?: string;
}

export type RelationKind =
  | "parent-of" | "sibling-of" | "spouse-of" | "killed" | "possesses" | "created"
  | "employed-by" | "same-as" | "worked-with" | "hunted" | "controls" | "partner-of";

export interface Relation {
  from: string;
  to: string;
  kind: RelationKind;
  status: Status;
  evidence: string[];
  note?: string;
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
}

export interface TheorySection {
  id: string;
  title: string;
  /** Paragraph blocks; inline citations use [[evidence-id]] markers. */
  body: string[];
  confidence: "high" | "medium" | "low";
  counterEvidence?: string[];
}
