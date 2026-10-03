import type { DateKind } from "./schema";

export type LocationKind = "venue" | "home" | "facility" | "hidden" | "virtual";

/**
 * Where each location sits on the timeline, in era terms. `from`/`to` are era ids, in the order of the eras
 * in timeline.ts; `fuzzyStart`/`fuzzyEnd` mark ends the records don't pin down.
 * `undated` places have no position in the story's chronology; `outside` places sit outside it entirely
 * (FNaF World's adventure, and Into the Pit, an adaptation the main games never place).
 * `dateKind` follows the model's dating table; no label shows a year after 1987.
 * A bar drawn only by the model's convention says so in its label.
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
  "murray-costume-manor": { kind: "facility", from: "founding", to: "founding", fuzzyStart: true, label: "up to the night of 1979", dateKind: "teaser" },
  "inventors-house": { kind: "home", from: "founding", to: "founding", fuzzyStart: true, label: "Murray's home; foreclosure notice by summer 1979", dateKind: "teaser" },
  "fredbears-family-diner": { kind: "venue", from: "founding", to: "diner", fuzzyStart: true, fuzzyEnd: true, label: "open c. 1983, if it is FNaF4's restaurant; 'closed for years' by November 1987", dateKind: "estimated" },
  "fnaf4-house": { kind: "home", from: "diner", to: "diner", label: "c. 1983", dateKind: "estimated" },
  "freddy-fazbears-pizza-original": { kind: "venue", from: "diner", to: "murders", fuzzyStart: true, fuzzyEnd: true, label: "before autumn 1987; left to rot (most likely reopened later as FNaF1's)", dateKind: "estimated" },
  "safe-room": { kind: "hidden", from: "founding", to: "aftermath", fuzzyStart: true, label: "in every location → walled up → a boarded-up room sought thirty years on", dateKind: "relative" },
  "tape-sister-location": { kind: "venue", from: "founding", to: "murders", fuzzyStart: true, fuzzyEnd: true, label: "the springlock years; undated", dateKind: "relative" },
  "circus-babys-pizza-world": { kind: "venue", from: "funtime", to: "funtime", label: "grand opening cancelled; placed by convention", dateKind: "relative" },
  "circus-babys-rental": { kind: "facility", from: "funtime", to: "aftermath", fuzzyStart: true, label: "undated: the rentals → Michael's week (both placed by convention)", dateKind: "relative" },
  "private-room": { kind: "hidden", from: "aftermath", to: "aftermath", fuzzyStart: true, label: "in Afton's facility; shown in Sister Location's time", dateKind: "relative" },
  "freddy-fazbears-pizza-1987": { kind: "venue", from: "pizzeria", to: "pizzeria", label: "autumn 1987; closed after 13 November", dateKind: "printed" },
  "freddy-fazbears-pizza-fnaf1": { kind: "venue", from: "pizzeria", to: "pizzeria", label: "a November after 1987", dateKind: "derived" },
  "michael-afton-home": { kind: "home", from: "aftermath", to: "aftermath", label: "during Michael's week; undated, placed by convention", dateKind: "relative" },
  "fazbears-fright": { kind: "venue", from: "aftermath", to: "aftermath", label: "thirty years after the closing; burns", dateKind: "printed" },
  "ffps-pizzeria": { kind: "venue", from: "aftermath", to: "aftermath", label: "after the Fazbear's Fright fire, on the model's reading; stands one week and burns (most likely the buried pizzeria)", dateKind: "relative" },
  "silver-parasol-games-office": { kind: "facility", from: "digital", to: "digital", label: "the VR studio; undated", dateKind: "relative" },
  "freddy-fazbear-virtual-experience": { kind: "virtual", from: "digital", to: "digital", label: "the company's VR game; undated", dateKind: "relative" },
  "buried-pizzeria": { kind: "hidden", from: "pizzaplex", to: "pizzaplex", fuzzyStart: true, label: "found buried under the Pizzaplex (most likely Pizzeria Simulator's building)", dateKind: "relative" },
  "the-sinkhole": { kind: "hidden", from: "pizzaplex", to: "pizzaplex", fuzzyStart: true, label: "found by a construction crew at the raceway", dateKind: "relative" },
  "mega-pizzaplex": { kind: "venue", from: "pizzaplex", to: "pizzaplex", label: "no year; wrecked by the time of RUIN", dateKind: "relative" },
  "fazbear-orientation-program": { kind: "virtual", from: "pizzaplex", to: "pizzaplex", label: "between Gregory's night and RUIN", dateKind: "relative" },
  "midnight-motorist-house": { kind: "home", undated: true, label: "undated; the scene identifies nobody", dateKind: "unknown" },
  "jrs": { kind: "venue", undated: true, label: "undated (Midnight Motorist)", dateKind: "unknown" },
  "freddy-fazbears-pizza-itp": { kind: "venue", outside: true, label: "Into the Pit: an adaptation the main games never place", dateKind: "unknown" },
  "jeffs-pizza": { kind: "venue", outside: true, label: "Into the Pit: an adaptation the main games never place", dateKind: "unknown" },
  "the-pit": { kind: "hidden", outside: true, label: "Into the Pit: an adaptation the main games never place", dateKind: "unknown" },
  "the-mill": { kind: "facility", outside: true, label: "Into the Pit: an adaptation the main games never place", dateKind: "unknown" },
  "fnaf-world-sub-tunnel-4": { kind: "virtual", outside: true, label: "FNaF World's adventure, outside the story; also a hidden ending of Ultimate Custom Night", dateKind: "unknown" },
};
