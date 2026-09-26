import type { Status } from "./schema";
import type { DateJustification } from "./dates";

export type DeathKind = "murder" | "machine" | "accident" | "fire" | "disappearance" | "unknown";

export const DEATH_KIND: Record<DeathKind, { label: string; icon: string }> = {
  murder: { label: "Murder", icon: "🔪" },
  machine: { label: "Killed by a machine", icon: "⚙️" },
  accident: { label: "Accident", icon: "⚠️" },
  fire: { label: "Fire", icon: "🔥" },
  disappearance: { label: "Disappearance", icon: "❓" },
  unknown: { label: "Cause unknown", icon: "✝" },
};

/**
 * Every death, killing and presumed-dead disappearance the evidence records.
 * `status` is how firmly the death AND the stated cause are established (the weaker of the two).
 * `branch` marks outcomes that happen only in one ending.
 */
export interface Death {
  id: string;
  title: string;
  victims: string[];
  victimLabel: string;
  by: string[];
  byLabel: string;
  kind: DeathKind;
  place?: string;
  placeLabel?: string;
  era: string;
  year: number;          // sort key only (see timeline.ts)
  yearLabel: string;
  date: DateJustification;
  status: Status;
  evidence: string[];
  note?: string;
  branch?: string;
}

export const deaths: Death[] = [
  // ── Founding (Murray's workshop) ──
  {
    id: "d-fiona", title: "Fiona Murray dies on a Fall Fest installation", victims: ["fiona-murray"], victimLabel: "Fiona Murray", by: [], byLabel: "Not stated",
    kind: "unknown", era: "founding", year: 1978.5, yearLabel: "year unknown",
    date: { kind: "relative", basis: "Logged before M1 is built to raise David.", evidence: ["secret-of-the-mimic-log-death"] },
    status: "canon", evidence: ["secret-of-the-mimic-log-installation-worries", "secret-of-the-mimic-log-death", "secret-of-the-mimic-mail-heard-fiona"],
    note: "Edwin says she \"wasn't supposed to be there\". One employee wonders whether her death was faked.",
  },
  {
    id: "d-edwin", title: "Edwin Murray is paralysed after an explosion", victims: ["edwin-murray"], victimLabel: "Edwin Murray (fate not shown)", by: [], byLabel: "An explosion in his office; the Mimic (M2) is with him",
    kind: "unknown", place: "inventors-house", era: "founding", year: 1979.02, yearLabel: "undated (teaser shows 1979)",
    date: { kind: "teaser", basis: "Before Fazbear sends Arnold after the silent Edwin. The only year shown is the teaser's 1979.", evidence: ["secret-of-the-mimic-arnold-assignment", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", evidence: ["secret-of-the-mimic-log-turn-around", "secret-of-the-mimic-log-incident", "secret-of-the-mimic-arnold-assignment"],
    note: "He can't feel his legs while M2 mocks him in his own words. His final fate is not shown, and by the present night he has \"gone silent\".",
  },
  {
    id: "d-murray-technicians", title: "Earlier technicians die in character suits", victims: [], victimLabel: "Fazbear technicians sent before Arnold", by: ["the-mimic"], byLabel: "The Mimic (M2)",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 1979.05, yearLabel: "undated (teaser shows 1979)",
    date: { kind: "teaser", basis: "Before Arnold's shift, which is undated in-game.", evidence: ["secret-of-the-mimic-previous-technicians", "secret-of-the-mimic-teaser-1979"] },
    status: "canon", evidence: ["secret-of-the-mimic-previous-technicians"],
    note: "Arnold finds their bodies stuffed in suits. The fake Dispatch mocks that they lost limbs and bled out.",
  },
  {
    id: "d-arnold", title: "Arnold wakes inside a Fredbear springlock suit", victims: ["arnold"], victimLabel: "Arnold (fate implied)", by: ["the-mimic"], byLabel: "The Mimic (M2)",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 1979.1, yearLabel: "undated (teaser shows 1979)",
    date: { kind: "teaser", basis: "Secret of the Mimic's present night.", evidence: ["secret-of-the-mimic-ending-clock-out", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", evidence: ["secret-of-the-mimic-ending-clock-out"], branch: "Clock Out ending",
    note: "He wakes inside the suit on the stage; his death is not shown.",
  },
  {
    id: "d-arnold-crash", title: "Arnold is left in the crash as the complex burns", victims: ["arnold"], victimLabel: "Arnold (presumed)", by: ["the-mimic"], byLabel: "The Mimic (M2) causes the crash",
    kind: "fire", place: "murray-costume-manor", era: "founding", year: 1979.11, yearLabel: "undated (teaser shows 1979)",
    date: { kind: "teaser", basis: "Secret of the Mimic's present night.", evidence: ["secret-of-the-mimic-ending-unfinished-business", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", evidence: ["secret-of-the-mimic-ending-unfinished-business"], branch: "Unfinished Business ending",
    note: "Arnold is left presumably dead; the Mimic walks away with the Data Diver.",
  },
  {
    id: "d-david", title: "David Murray: \"recent tragic events\"", victims: ["david-murray"], victimLabel: "David Murray (inferred)", by: [], byLabel: "Not stated",
    kind: "unknown", place: "murray-costume-manor", era: "founding", year: 1979.0, yearLabel: "December (year unknown)",
    date: { kind: "relative", basis: "His birthday party, planned for the first week of December, is cancelled.", evidence: ["secret-of-the-mimic-mail-party-canceled", "secret-of-the-mimic-mail-david-party"] },
    status: "theory", evidence: ["secret-of-the-mimic-mail-party-canceled", "secret-of-the-mimic-mail-hurt-cradle"],
    note: "Only inferred. The party is cancelled after unspecified tragic events, and a later message treats 'David' as a program. No cause is given.",
  },
  // ── The diner ──
  {
    id: "d-crying-child", title: "The crying child dies after the Bite", victims: ["crying-child"], victimLabel: "The crying child", by: ["older-brother", "fredbear"], byLabel: "Fredbear's jaw, in the older brother's prank",
    kind: "accident", place: "fredbears-family-diner", era: "diner", year: 1983.5, yearLabel: "c. 1983",
    date: { kind: "derived", basis: "The party ends FNaF4's five-day countdown, whose only printed year is 1983.", evidence: ["fnaf4-minigame-countdown-to-party", "fnaf4-fredbear-and-friends-1983"] },
    status: "strong", evidence: ["fnaf4-give-fredbear-a-kiss", "fnaf4-the-bite", "fnaf4-flatline"],
    note: "The bite is shown. His death is implied by the flatline and the fading plushies. UCN calls him \"the one you should not have killed\" (theory).",
  },
  // ── The murders ──
  {
    id: "d-child-outside", title: "A child is killed outside the pizzeria", victims: ["henrys-daughter"], victimLabel: "A crying child outside (theory: the Cassette Man's daughter)", by: ["purple-guy"], byLabel: "The purple man",
    kind: "murder", placeLabel: "Outside a Freddy Fazbear's Pizza (which one is not shown)", era: "murders", year: 1984, yearLabel: "undated",
    date: { kind: "relative", basis: "Undated. The Puppet already exists by 1987.", evidence: ["fnaf2-take-cake-to-the-children", "fnaf2-call2-foxy-puppet"] },
    status: "canon", evidence: ["fnaf2-take-cake-to-the-children", "ffps-security-puppet-dead-child", "ffps-completion-shut-out"],
    note: "The killing is shown. That the child is the Cassette Man's daughter is this archive's reading; Take Cake's audio spells \"SAVE HIM\".",
  },
  {
    id: "d-missing-children", title: "The missing children: five lured into a back room", victims: ["missing-children", "golden-freddy"], victimLabel: "Five children (four named on FFPS gravestones; the fifth is Golden Freddy)", by: ["purple-guy"], byLabel: "A man in a company mascot costume (the purple man)",
    kind: "murder", place: "freddy-fazbears-pizza-original", era: "murders", year: 1985, yearLabel: "June 26 (year unknown, before 1987)",
    date: { kind: "derived", basis: "June 26th is printed without a year. The old models already smell by the 1987 location.", evidence: ["fnaf1-news-kids-vanish", "fnaf2-call2-older-models"] },
    status: "strong", evidence: ["fnaf1-news-kids-vanish", "fnaf1-news-five-children", "fnaf2-give-gifts-give-life", "fnaf3-happiest-day", "ffps-lorekeeper-gravestones"],
    note: "The newspapers say the bodies were never found and the children are presumed dead. The headline says the suspect was convicted.",
  },
  {
    id: "d-itp-party-room", title: "Six children dead in a party room (Into the Pit)", victims: [], victimLabel: "Six children", by: ["yellow-rabbit"], byLabel: "The yellow rabbit",
    kind: "murder", place: "freddy-fazbears-pizza-itp", era: "murders", year: 1985.3, yearLabel: "Into the Pit's past (undated)",
    date: { kind: "unknown", basis: "No on-screen year. A parallel depiction of the missing children, not a reconstruction.", evidence: ["into-the-pit-prologue-mci"] },
    status: "canon", evidence: ["into-the-pit-prologue-mci", "into-the-pit-yellow-rabbit-naming"],
    note: "Six bodies, where FNaF1's newspapers link five children to the case.",
  },
  // ── The pizzeria years ──
  {
    id: "d-save-them", title: "Five dead children at the 1987 location", victims: [], victimLabel: "Five children (new victims, or the earlier five)", by: ["purple-guy"], byLabel: "The purple man (seen rushing the player)",
    kind: "murder", place: "freddy-fazbears-pizza-1987", era: "pizzeria", year: 1987.86, yearLabel: "Nov 1987",
    date: { kind: "derived", basis: "Save Them is set at the Toy-era location, which operated in Oct–Nov 1987.", evidence: ["fnaf2-save-them", "fnaf2-paycheck-1987"] },
    status: "theory", evidence: ["fnaf2-save-them", "fnaf2-save-them-you-cant", "fnaf2-call6-yellow-suit"],
    note: "The bodies are shown. Whether this is a second killing or the earlier five is left open.",
  },
  {
    id: "d-phone-guy", title: "Phone Guy's last call ends in a scream", victims: ["phone-guy"], victimLabel: "Phone Guy", by: [], byLabel: "An animatronic (Freddy's jingle plays)",
    kind: "machine", place: "freddy-fazbears-pizza-fnaf1", era: "pizzeria", year: 1988.05, yearLabel: "FNaF1, Night 4",
    date: { kind: "derived", basis: "During FNaF1's week, after the Bite of '87.", evidence: ["fnaf1-call4-phone-guy-attacked", "fnaf1-call1-bite-of-87"] },
    status: "strong", evidence: ["fnaf1-call4-phone-guy-attacked", "fnaf1-call5-garbled"],
    note: "His death is implied: the call ends in a scream, and he never calls again.",
  },
  // ── Afton Robotics ──
  {
    id: "d-elizabeth", title: "Circus Baby takes Elizabeth", victims: ["elizabeth-afton"], victimLabel: "Elizabeth", by: ["circus-baby"], byLabel: "Circus Baby",
    kind: "machine", place: "circus-babys-pizza-world", era: "funtime", year: 1989.3, yearLabel: "undated",
    date: { kind: "relative", basis: "On Baby's only day on stage.", evidence: ["sl-baby-ice-cream-story"] },
    status: "strong", evidence: ["sl-baby-minigame-girl-grabbed", "sl-baby-ice-cream-story", "ffps-completion-connection-terminated-elizabeth"],
  },
  {
    id: "d-william-springlock", title: "The purple man dies in the Spring Bonnie suit", victims: ["william-afton"], victimLabel: "The purple man (William Afton)", by: ["missing-children", "spring-bonnie"], byLabel: "The springlocks, as the children's spirits corner him",
    kind: "accident", place: "safe-room", era: "funtime", year: 1990.1, yearLabel: "undated (before the Fright)",
    date: { kind: "relative", basis: "After the murders, and before Fazbear's Fright finds Springtrap.", evidence: ["fnaf3-n5-springlock-death", "fnaf3-call2-found-a-real-one"] },
    status: "canon", evidence: ["fnaf3-n5-ghosts-safe-room", "fnaf3-n5-springlock-death", "fnaf3-springtrap-corpse-screens"],
    note: "He doesn't stay dead. His body is found decades later as Springtrap.",
  },
  // ── Fright & Fire ──
  {
    id: "d-sl-vent", title: "A body once found in the vents", victims: [], victimLabel: "Unknown", by: [], byLabel: "Not stated",
    kind: "unknown", place: "circus-babys-rental", era: "aftermath", year: 2018.45, yearLabel: "before Sister Location",
    date: { kind: "relative", basis: "Mentioned in the past tense during Sister Location.", evidence: ["sl-dead-body-in-vent"] },
    status: "canon", evidence: ["sl-dead-body-in-vent", "sl-baby-previous-employee-hiding-place"],
    note: "HandUnit says it in its \"Angsty Teen\" voice. Baby mentions an earlier employee who hid under the desk.",
  },
  {
    id: "d-sl-technicians", title: "Two technicians hanged on the stages", victims: ["sl-technicians"], victimLabel: "Two technicians", by: [], byLabel: "Not stated (the Funtimes, by implication)",
    kind: "machine", place: "circus-babys-rental", era: "aftermath", year: 2018.52, yearLabel: "Sister Location, Night 5",
    date: { kind: "relative", basis: "Sister Location is undated.", evidence: ["sl-technicians-hanged"] },
    status: "canon", evidence: ["sl-technicians-hanged"],
  },
  {
    id: "d-michael-scooped", title: "Michael is scooped", victims: ["michael-afton"], victimLabel: "Michael Afton", by: ["ennard", "circus-baby"], byLabel: "Ennard (Baby's plan)",
    kind: "machine", place: "circus-babys-rental", era: "aftermath", year: 2018.53, yearLabel: "Sister Location, Night 5",
    date: { kind: "relative", basis: "Sister Location is undated.", evidence: ["sl-real-ending-scooped-mirror"] },
    status: "canon", evidence: ["sl-real-ending-scooped-mirror", "sl-golden-freddy-cutscene-come-find-you", "sl-you-wont-die"],
    note: "He \"should be dead\" but keeps moving.",
  },
  {
    id: "d-ffps-fire", title: "The FFPS fire", victims: ["william-afton", "elizabeth-afton", "henrys-daughter", "cassette-man", "molten-freddy"], victimLabel: "Scraptrap, Scrap Baby, Lefty (with the Puppet), Molten Freddy and the Cassette Man; the franchisee stays too", by: ["cassette-man"], byLabel: "The Cassette Man",
    kind: "fire", place: "ffps-pizzeria", era: "aftermath", year: 2018.81, yearLabel: "after Sister Location",
    date: { kind: "relative", basis: "The salvaged machines are the burnt Springtrap and Sister Location's Baby.", evidence: ["ffps-scraptrap-still-me", "ffps-completion-connection-terminated-elizabeth"] },
    status: "strong", evidence: ["ffps-completion-fire", "ffps-completion-old-friend-hell", "ffps-completion-rest", "ffps-completion-remaining-nearby", "ffps-completion-brave-volunteer", "ffps-completion-achievement"],
    note: "The fire and the burning machines are shown; the Cassette Man says he and the \"brave volunteer\" are remaining. Their deaths are implied, not shown, and naming the volunteer as Michael is theory.",
  },
  // ── The digital afterlife ──
  {
    id: "d-hw-jeremy", title: "Jeremy, the VR tester", victims: ["jeremy-hw"], victimLabel: "Jeremy", by: [], byLabel: "Self-inflicted (implied), under the anomaly's influence",
    kind: "unknown", place: "silver-parasol-games-office", era: "digital", year: 2019.05, yearLabel: "c. 2019 (est.)",
    date: { kind: "estimated", basis: "During the VR game's development, before Special Delivery's 2019 emails.", evidence: ["hw-tape-05", "sd-circuit-board-scan-virus"] },
    status: "theory", evidence: ["hw-tape-07", "hw-tape-09", "hw-jeremy-self-injury-implied", "hw-game-over-remember-jeremy"],
    note: "The tapes imply an injury, and \"Remember Jeremy\" implies loss. His death is never stated.",
  },
  // ── The Pizzaplex ──
  {
    id: "d-sb-staff", title: "Pizzaplex staff go missing", victims: [], victimLabel: "Staff, including Leo (unseen for months)", by: [], byLabel: "Not stated",
    kind: "disappearance", place: "mega-pizzaplex", era: "pizzaplex", year: 2021.55, yearLabel: "before Security Breach",
    date: { kind: "relative", basis: "Collectible messages from before Security Breach's night.", evidence: ["security-breach-msg-job-security"] },
    status: "canon", evidence: ["security-breach-msg-all-staff-meeting", "security-breach-msg-job-security", "security-breach-msg-pink-slip"],
    note: "An employee asks where everyone is; Leo hasn't been seen for months. A mandatory late-night 'service team' meeting is announced. The games don't say what happened at it.",
  },
  {
    id: "d-sb-therapist", title: "A therapist is found mangled by machinery", victims: [], victimLabel: "One of client 46's former therapists", by: [], byLabel: "Machinery (not specified)",
    kind: "machine", era: "pizzaplex", year: 2021.7, yearLabel: "before Security Breach",
    date: { kind: "relative", basis: "Client 46's therapy sessions, which are undated.", evidence: ["security-breach-cd46-therapists-missing-dead"] },
    status: "canon", evidence: ["security-breach-cd46-therapists-missing-dead"],
    note: "Two more of client 46's therapists are missing.",
  },
  {
    id: "d-sb-residents", title: "Residents continue to disappear", victims: [], victimLabel: "Local residents", by: [], byLabel: "Not stated (theory: Vanny)",
    kind: "disappearance", place: "mega-pizzaplex", era: "pizzaplex", year: 2022.05, yearLabel: "around Security Breach",
    date: { kind: "relative", basis: "Headline in Security Breach's alley ending.", evidence: ["security-breach-alley-newspaper"] },
    status: "canon", evidence: ["security-breach-alley-newspaper", "security-breach-gregory-more-disappearances"],
  },
  {
    id: "d-sb-vanny-fall", title: "Freddy tackles Vanny off the roof", victims: ["vanny"], victimLabel: "The Vanny unmasked on the roof", by: ["glamrock-freddy"], byLabel: "Glamrock Freddy",
    kind: "machine", place: "mega-pizzaplex", era: "pizzaplex", year: 2022.1, yearLabel: "end of Security Breach's night",
    date: { kind: "relative", basis: "Security Breach's final hour, in one ending.", evidence: ["security-breach-ending-rooftop"] },
    status: "strong", evidence: ["security-breach-ending-rooftop", "security-breach-rooftop-unmasked", "security-breach-rooftop-vanessa-alive"], branch: "Rooftop ending",
    note: "The fall is shown; a death is implied, not stated. Vanessa is alive on the roof afterwards.",
  },
  {
    id: "d-sb-vanny-disassembled", title: "S.T.A.F.F. bots disassemble Vanny", victims: ["vanny"], victimLabel: "Vanny", by: ["gregory"], byLabel: "S.T.A.F.F. bots, on Gregory's order",
    kind: "machine", place: "mega-pizzaplex", era: "pizzaplex", year: 2022.11, yearLabel: "end of Security Breach's night",
    date: { kind: "relative", basis: "Security Breach's final hour, in one ending.", evidence: ["security-breach-ending-disassemble-vanny"] },
    status: "canon", evidence: ["security-breach-ending-disassemble-vanny"], branch: "Disassemble Vanny ending",
  },
  {
    id: "d-desk-man", title: "Desk Man found dead (FNaF World)", victims: ["desk-man"], victimLabel: "Desk Man", by: [], byLabel: "Not shown (glowing yellow eyes in the dark)",
    kind: "unknown", era: "funtime", year: 1989.9, yearLabel: "outside the timeline",
    date: { kind: "unknown", basis: "FNaF World sits outside the main timeline; placed here only as a reference.", evidence: ["fw-desk-man-found-dead"] },
    status: "canon", evidence: ["fw-desk-man-made-something-terrible", "fw-desk-man-found-dead"],
    note: "A man who \"made something terrible\" named Baby is found dead at his desk. It happens in FNaF World, outside the main chronology.",
  },
];
