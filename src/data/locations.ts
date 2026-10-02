import type { DateKind } from "./schema";

export type LocationKind = "venue" | "home" | "facility" | "hidden" | "virtual";

/**
 * Where each location sits on the timeline, in era terms. `from`/`to` are era ids;
 * `fuzzyStart`/`fuzzyEnd` mark ends the records don't pin down.
 * `undated` places have no position in the story's chronology; `outside` places sit outside it entirely.
 */
export interface LocationSpan {
  kind: LocationKind;
  from?: string;
  to?: string;
  fuzzyStart?: boolean;
  fuzzyEnd?: boolean;
  label: string;          // short human label for the bar
  dateKind: DateKind;
  undated?: boolean;
  outside?: boolean;
}

export const LOCATION_KIND: Record<LocationKind, { label: string; color: string }> = {
  venue: { label: "Pizzerias & venues", color: "#f4c95d" },
  home: { label: "Homes", color: "#74c0fc" },
  facility: { label: "Workshops, studios & facilities", color: "#63e6be" },
  hidden: { label: "Hidden rooms & underground", color: "#da77f2" },
  virtual: { label: "Virtual spaces", color: "#ff8fab" },
};

export const LOCATION_SPANS: Record<string, LocationSpan> = {
  "murray-costume-manor": { kind: "facility", from: "founding", to: "founding", fuzzyStart: true, label: "Murray's workshop → the Mimic's night", dateKind: "teaser" },
  "inventors-house": { kind: "home", from: "founding", to: "founding", fuzzyStart: true, label: "Edwin's home; foreclosed", dateKind: "relative" },
  "fredbears-family-diner": { kind: "venue", from: "founding", to: "diner", fuzzyStart: true, label: "open in 1983; closed 'for years' by 1987", dateKind: "printed" },
  "fnaf4-house": { kind: "home", from: "diner", to: "diner", label: "1983", dateKind: "printed" },
  "midnight-motorist-house": { kind: "home", undated: true, label: "undated (theory: the FNaF4 household)", dateKind: "unknown" },
  "jrs": { kind: "venue", undated: true, label: "undated (Midnight Motorist)", dateKind: "unknown" },
  "tape-sister-location": { kind: "venue", from: "diner", to: "murders", fuzzyStart: true, label: "springlock era", dateKind: "relative" },
  "freddy-fazbears-pizza-original": { kind: "venue", from: "diner", to: "murders", fuzzyStart: true, fuzzyEnd: true, label: "before 1987; left to rot (theory: reopened as FNaF1's)", dateKind: "derived" },
  "safe-room": { kind: "hidden", from: "diner", to: "aftermath", fuzzyStart: true, label: "springlock era → sealed → opened by the Fright", dateKind: "relative" },
  "freddy-fazbears-pizza-itp": { kind: "venue", from: "murders", to: "murders", fuzzyStart: true, fuzzyEnd: true, label: "Into the Pit's past (undated)", dateKind: "unknown" },
  "freddy-fazbears-pizza-1987": { kind: "venue", from: "pizzeria", to: "pizzeria", label: "Oct–Nov 1987", dateKind: "printed" },
  "freddy-fazbears-pizza-fnaf1": { kind: "venue", from: "pizzeria", to: "pizzeria", label: "after '87; closes by year's end", dateKind: "derived" },
  "circus-babys-pizza-world": { kind: "venue", from: "funtime", to: "funtime", label: "closed before it opened", dateKind: "relative" },
  "circus-babys-rental": { kind: "facility", from: "funtime", to: "aftermath", fuzzyStart: true, label: "undated; Sister Location", dateKind: "relative" },
  "fazbears-fright": { kind: "venue", from: "aftermath", to: "aftermath", label: "30 years after closure; burns", dateKind: "estimated" },
  "michael-afton-home": { kind: "home", from: "aftermath", to: "aftermath", label: "after Sister Location", dateKind: "relative" },
  "ffps-pizzeria": { kind: "venue", from: "aftermath", to: "aftermath", label: "one week; burns", dateKind: "relative" },
  "silver-parasol-games-office": { kind: "facility", from: "digital", to: "digital", label: "c. 2019", dateKind: "estimated" },
  "freddy-fazbear-virtual-experience": { kind: "virtual", from: "digital", to: "digital", label: "c. 2019", dateKind: "estimated" },
  "buried-pizzeria": { kind: "hidden", from: "pizzaplex", to: "pizzaplex", fuzzyStart: true, label: "found buried under the Pizzaplex (operated: unknown)", dateKind: "relative" },
  "the-sinkhole": { kind: "hidden", from: "pizzaplex", to: "pizzaplex", fuzzyStart: true, label: "found during construction", dateKind: "relative" },
  "mega-pizzaplex": { kind: "venue", from: "pizzaplex", to: "pizzaplex", label: "after 2020; ruined by RUIN", dateKind: "relative" },
  "fazbear-orientation-program": { kind: "virtual", from: "pizzaplex", to: "pizzaplex", label: "Pizzaplex era", dateKind: "relative" },
  "jeffs-pizza": { kind: "venue", undated: true, label: "Into the Pit's present — undated", dateKind: "unknown" },
  "the-pit": { kind: "hidden", undated: true, label: "Into the Pit's present — undated", dateKind: "unknown" },
  "the-mill": { kind: "facility", undated: true, label: "Into the Pit's present — undated", dateKind: "unknown" },
  "fnaf-world-sub-tunnel-4": { kind: "virtual", outside: true, label: "outside the timeline", dateKind: "unknown" },
};
