/**
 * UI-side presentation maps, keyed by ids that live in src/data. Data files also carry colours and
 * emoji from the old design; the interface ignores those and reads from here instead, so the look can
 * change without touching content.
 *
 * Two kinds of value:
 *  - a hue (hex): passed to CSS through an inline custom property (usually --hue) and only ever used
 *    for small swatches, rules and tints, never as text colour;
 *  - a tone: one of the semantic colour families in tokens.css. Use it as data-tone="..." on an
 *    element styled with the .tone helpers in components.css.
 */
import type { Person } from "../data/schema";

export type Tone = "accent" | "ok" | "tension" | "open" | "neutral";

const NEUTRAL_HUE = "#96918a";

/** Timeline eras (ids from data/timeline.ts). */
export const ERA_HUE: Record<string, string> = {
  founding: "#e5946f", diner: "#cba553", murders: "#e88f87", pizzeria: "#db9c5c",
  funtime: "#e58da1", aftermath: "#8cbb73", digital: "#b09de9", pizzaplex: "#d690c6",
};
export const eraHue = (id: string | undefined): string => (id && ERA_HUE[id]) || NEUTRAL_HUE;

/** People groups (Person["group"]), used by the Web graph and people lists. */
export const GROUP_HUE: Record<Person["group"], string> = {
  afton: "#bba2ea", emily: "#d0ac5f", victim: "#63bde7", protagonist: "#7fc48e", staff: "#b7afb1",
  pizzaplex: "#e196c0", mimic: "#e79d73", entity: "#ec9789", other: NEUTRAL_HUE,
};
export const GROUP_LABEL: Record<Person["group"], string> = {
  afton: "Afton family", emily: "Cassette Man’s household", victim: "Victims", protagonist: "Guards and protagonists",
  staff: "Voices and companies", pizzaplex: "Pizzaplex era", mimic: "The Mimic and the Murrays", entity: "Machines and entities", other: "Minor figures",
};

/** Location kinds (data/locations.ts LocationKind). */
export const LOCATION_HUE: Record<string, string> = {
  venue: "#d0ac5f", home: "#6fbaed", facility: "#5ec7ad", hidden: "#c69ee3", virtual: "#e495ba",
};

/** Community theory verdicts (data/community.ts Verdict). */
export const VERDICT_TONE: Record<string, Tone> = {
  confirmed: "ok", "mostly-right": "ok", "partly-right": "accent", wrong: "tension", open: "open", superseded: "neutral",
};

/** Scott & Faith reading statuses (data/author.ts ReadingStatus). */
export const READING_TONE: Record<string, Tone> = {
  "ruled-out": "tension", supported: "ok", consistent: "ok", open: "open", noted: "neutral",
};

/** Phases on the Box and Scott & Faith step timelines. */
export const PHASE_HUE: Record<string, string> = {
  // data/box.ts BoxStep["phase"]
  planted: "#d9a850", explained: "#93c089", shelved: "#f3947c", echoed: "#85b9d8", abandoned: "#b5b0a9",
  // data/author.ts AuthorStep["phase"]
  "faith-work": "#baa4e2", turn: "#f3947c", fnaf: "#d9a850", statement: "#85b9d8",
};

/** Lexicon groups on Scott & Faith (data/author.ts lexicon ids). */
export const LEXICON_HUE: Record<string, string> = {
  rest: "#93c089", spirits: "#85b9d8", beyond: "#baa4e2", hell: "#f3947c", atone: "#d9a850",
};

export const hueOf = (map: Record<string, string>, id: string | undefined): string => (id && map[id]) || NEUTRAL_HUE;
