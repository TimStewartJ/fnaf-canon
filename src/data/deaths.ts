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
 * Every death, killing and presumed-dead disappearance the evidence records, in the story the main games tell.
 * Three entries are kept although no record states a death (Edwin Murray, the VR tester Jeremy, the bodies of
 * SAVE THEM): each says so in its title or its labels. Into the Pit and FNaF World's adventure are outside the
 * story, so their deaths are not listed.
 * `status` is how firmly the death AND the stated cause are established (the weaker of the two).
 * `branch` marks outcomes that happen only in one ending.
 * `event` is the id of the timeline event that tells the same death, where there is one, so that a death can be
 * shown inside its event instead of twice.
 * All text fields are plain text. `year` is a sort key only, on the scale explained in timeline.ts.
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
  event?: string;        // timeline event id that tells the same death
}

const BABY_CONVENTION = "No record dates it. The business followed 'the unfortunate closing of Freddy Fazbear's Pizza', which closing is not said, and William Afton is alive for it. The model places it after the old restaurant closed and before November 1987, as a convention; a later place is also allowed.";
const MICHAEL_WEEK = "Michael's week is undated. The records fix it after his sister's death and before his speech in front of the burnt attraction; its place after his father's death is the model's convention.";
const NIGHT_1979 = "The night of the work order, which is dated 9/07/79 on a document not yet seen in play; the year is entered as the teaser's.";

export const deaths: Death[] = [
  // ── The costume workshop ──
  {
    id: "d-fiona", title: "Fiona Murray dies", victims: ["fiona-murray"], victimLabel: "Fiona Murray", by: [], byLabel: "Not stated",
    kind: "unknown", placeLabel: "Not stated. The logs link her death to a Fall Fest installation away from the workshop", era: "founding", year: 20100, yearLabel: "year unknown; before the night of 1979",
    date: { kind: "relative", basis: "Logged before the first machine is built to mind David. No record gives the year or says which Fall Fest it was.", evidence: ["secret-of-the-mimic-log-death", "secret-of-the-mimic-log-training-m1"] },
    status: "canon", evidence: ["secret-of-the-mimic-log-installation-worries", "secret-of-the-mimic-log-death", "secret-of-the-mimic-film-mommy-gone", "secret-of-the-mimic-mail-heard-fiona"], event: "t-fiona-dies",
    note: "Edwin asks how he is to tell their son that his mother is gone. The log does not state the cause; that she died at the installation is inferred from its context. An employee who later hears her voice wonders whether the death was faked: the first machine was speaking as her.",
  },
  {
    id: "d-david", title: "David Murray dies", victims: ["david-murray"], victimLabel: "David Murray, the Murrays' son", by: [], byLabel: "Not stated. The nearest the game comes is his father's line in a birthday film: 'I left him out at the playground.'",
    kind: "unknown", placeLabel: "Not stated", era: "founding", year: 30100, yearLabel: "first week of a December; the model's estimate is 1975",
    date: { kind: "estimated", basis: "His party is announced on 1 December and cancelled on 6 December; the headers carry no year. If 6 December was the Saturday of the party, the year between 1965 and 1979 is 1969 or 1975, and 1975 fits the company's decline. The estimate is low to medium: the cancellation does not name him, and a memo about the research floor strains it.", evidence: ["secret-of-the-mimic-mail-david-party", "secret-of-the-mimic-mail-party-canceled", "secret-of-the-mimic-mcm-rnd-floor-opening-memo"] },
    status: "strong", evidence: ["secret-of-the-mimic-mail-david-party", "secret-of-the-mimic-mail-party-canceled", "secret-of-the-mimic-log-refusal", "secret-of-the-mimic-f10n4-miss-my-child", "secret-of-the-mimic-film-yellow-playground"], event: "t-mimic-born",
    note: "No record states his death in so many words. His surprise party is cancelled 'due to the recent tragic events', his father refuses to build a replacement because 'It wouldn't be him', and the first machine says that it misses its child and wants him back. The cause is never given.",
  },
  {
    id: "d-edwin", title: "Edwin Murray is left injured, and goes silent", victims: ["edwin-murray"], victimLabel: "Edwin Murray (fate not shown)", by: [], byLabel: "Not stated. He says he lost his temper with the second machine and cannot feel his legs; it answers him in his own words and does not call for help",
    kind: "disappearance", place: "inventors-house", era: "founding", year: 45000, yearLabel: "undated; before the night of 1979",
    date: { kind: "relative", basis: "After the second machine is built and damaged, and before the night of 1979, by which time he has 'gone quiet' and the mailbox at his gate has been full for five weeks.", evidence: ["secret-of-the-mimic-log-turn-around-lost-temper", "secret-of-the-mimic-dispatch-contractor-murray", "secret-of-the-mimic-mail-foreclosure"] },
    status: "theory", evidence: ["secret-of-the-mimic-log-turn-around", "secret-of-the-mimic-log-turn-around-lost-temper", "secret-of-the-mimic-dispatch-contractor-murray", "secret-of-the-mimic-f10n4-reveal"],
    note: "What injured him is not stated: the 'detonation' at the start of that recording is a journal entry that the machine recites. What became of him is not shown, and on the night of 1979 the first machine still speaks of him as shut away in the house. He is listed here as a disappearance, not as a death.",
  },
  {
    id: "d-murray-technicians", title: "Earlier visitors are found dead inside mascot costumes", victims: [], victimLabel: "Earlier visitors to the workshop: Fazbear technicians sent before him, by the account of the voice on the radio", by: ["the-mimic"], byLabel: "The second machine, M2 (the copying endoskeleton)",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 50100, yearLabel: "before the night of 1979",
    date: { kind: "relative", basis: "The bodies are already there on the night of the work order. The messages left by people trapped in the building carry no date.", evidence: ["secret-of-the-mimic-previous-technicians", "secret-of-the-mimic-mail-technicians-attacked"] },
    status: "canon", evidence: ["secret-of-the-mimic-previous-technicians", "secret-of-the-mimic-mail-technicians-attacked", "secret-of-the-mimic-f10n4-fazbear-will-send-another"], event: "t-1979-night",
    note: "The bodies are shown. That they were technicians the company had sent, who did not come back, is the account of the voice on the radio: the first machine, imitating the dispatcher. Messages left in the building describe 'a maniac in a costume' and a colleague's screams.",
  },
  {
    id: "d-arnold", title: "One ending: the technician wakes inside a Fredbear springlock suit", victims: ["arnold"], victimLabel: "Arnold, the technician (fate not shown)", by: ["the-mimic"], byLabel: "The second machine, which had hidden in his van",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 51000, yearLabel: "the night of 1979",
    date: { kind: "teaser", basis: NIGHT_1979, evidence: ["secret-of-the-mimic-ending-clock-out", "secret-of-the-mimic-work-order-1979", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", evidence: ["secret-of-the-mimic-ending-clock-out", "secret-of-the-mimic-clock-out-real-dispatch"], branch: "Clock Out", event: "t-1979-night",
    note: "He is attacked in his van and wakes inside the suit on the mock-up stage. His death is not shown. The game has three endings, and the model does not choose between them.",
  },
  {
    id: "d-arnold-crash", title: "One ending: the technician is left in a crash as the workshop burns", victims: ["arnold"], victimLabel: "Arnold, the technician (presumed)", by: ["the-mimic"], byLabel: "The second machine, which rides his van and causes the crash",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 51100, yearLabel: "the night of 1979",
    date: { kind: "teaser", basis: NIGHT_1979, evidence: ["secret-of-the-mimic-ending-unfinished-business", "secret-of-the-mimic-work-order-1979", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", evidence: ["secret-of-the-mimic-ending-unfinished-business"], branch: "Unfinished Business", event: "t-1979-night",
    note: "He sets off the building's self-destruction; the machine rides his van, causes a crash and walks away, leaving him presumably dead. The game has three endings, and the model does not choose between them.",
  },
  // ── The house and the birthday ──
  {
    id: "d-crying-child", title: "The bitten boy most likely dies", victims: ["crying-child"], victimLabel: "The crying child", by: ["older-brother", "fredbear"], byLabel: "Fredbear's jaw, after his older brother and three friends lift him to its mouth as a joke",
    kind: "accident", place: "fredbears-family-diner", era: "diner", year: 75100, yearLabel: "c. 1983",
    date: { kind: "estimated", basis: "The party ends the five-day countdown, in the week whose only printed year is 1983: a title card on the television, which gives a floor.", evidence: ["fnaf4-minigame-countdown-to-party", "fnaf4-fredbear-and-friends-1983"] },
    status: "strong", evidence: ["fnaf4-give-fredbear-a-kiss", "fnaf4-the-bite", "fnaf4-night6-fade-order", "fnaf4-youre-broken", "fnaf4-flatline"], event: "t-bite-1983",
    note: "The bite is shown. His death is implied and never stated: in the last scene everything he called a friend fades, and he fades last. No record places him afterwards, in the yellow bear or anywhere else, and the promise to put him back together is never shown kept. He is not one of the five.",
  },
  // ── The murders ──
  {
    id: "d-child-outside", title: "A child is killed outside a restaurant", victims: ["cassette-mans-daughter"], victimLabel: "A child shut outside; most likely the Cassette Man's daughter", by: ["purple-guy"], byLabel: "A purple figure who gets out of a purple car; the model reads him as William Afton",
    kind: "murder", placeLabel: "Outside a restaurant. No game names it", era: "murders", year: 79100, yearLabel: "undated; placed before the five by convention",
    date: { kind: "relative", basis: "No record dates her death. Her father's phrase 'a wound first inflicted on me' is the one sentence that orders it, and on that the model places it before the five, as a convention. Its place against the 1983 week is a convention too.", evidence: ["ffps-insanity-wound-first-inflicted", "fnaf2-take-cake-to-the-children"] },
    status: "strong", evidence: ["fnaf2-take-cake-to-the-children", "ffps-security-puppet-trapped", "ffps-security-puppet-dead-child", "ffps-completion-shut-out", "ffps-completion-my-daughter"], event: "t-daughter-killed",
    note: "The killing is shown in FNaF2. Pizzeria Simulator shows the same scene from the Puppet's side while the Cassette Man speaks of the day his daughter was shut out and left to die; that the two are one event is the model's reading. A voice in FNaF2's scene spells 'save him', which is kept as a tension. She most likely stays on in the Puppet.",
  },
  {
    id: "d-missing-children", title: "The five: lured into a back room and never found", victims: ["missing-children"], victimLabel: "Five children. Two were reported lured that night, and five were linked to the incident later. Four names are on gravestones in Pizzeria Simulator (Gabriel, Fritz, Susie, Jeremy); the fifth is never given", by: ["purple-guy"], byLabel: "A man police think dressed as a company mascot. The model reads him as William Afton, most likely in the yellow rabbit suit",
    kind: "murder", place: "freddy-fazbears-pizza-original", era: "murders", year: 80100, yearLabel: "a June 26 between 1980 and 1986",
    date: { kind: "estimated", basis: "June 26th is printed, for two children, with no year. The restaurant traded on, closed and rotted before the 1987 restaurant opened, so the latest June 26 is 1986's; the four mascots are unfinished prototypes on the night of 1979, so the earliest is 1980's, softly.", evidence: ["fnaf1-news-kids-vanish", "fnaf2-call1-new-location", "secret-of-the-mimic-rnd-proto-pizzeria"] },
    status: "strong", evidence: ["fnaf1-news-kids-vanish", "fnaf1-news-five-children", "fnaf1-news-suspect-captured", "fnaf1-news-charged-vs-convicted", "fnaf3-n5-ghosts-safe-room", "ffps-fruity-maze-follow-me", "ffps-lorekeeper-gravestones"], event: "t-missing-children",
    note: "The clippings say the bodies were never found and the children are presumed dead. A man was caught the next morning and charged; 'convicted' is only the headline. Who he was is open, and the model does not tell him as William Afton. The mascots carried the signs, a smell and what looked like blood and mucus; where the bodies went is never shown. Five child ghosts later corner the killer.",
  },
  // ── Afton Robotics ──
  {
    id: "d-elizabeth", title: "Circus Baby takes her maker's daughter", victims: ["elizabeth-afton"], victimLabel: "A little girl, her maker's daughter. Pizzeria Simulator calls what speaks from the rebuilt Baby 'Elizabeth'", by: ["circus-baby"], byLabel: "Circus Baby: a claw from her stomach pulls the girl inside",
    kind: "machine", place: "circus-babys-pizza-world", era: "funtime", year: 113100, yearLabel: "undated; placed here by convention",
    date: { kind: "relative", basis: "On Circus Baby's one day on stage. " + BABY_CONVENTION, evidence: ["sl-baby-on-stage-one-day", "sl-handunit-freddy-fazbear-closing"] },
    status: "strong", evidence: ["sl-girl-daddy-let-me-play", "sl-baby-minigame-girl-grabbed", "sl-baby-ice-cream-story", "ffps-completion-connection-terminated-elizabeth"], event: "t-elizabeth-killed",
    note: "She is the one child the games show these machines take. Sister Location never speaks her name. She is most likely still in the machine: decades later Scrap Baby promises to make 'daddy' proud. No record orders her death against the five.",
  },
  // ── 1987 and the last Freddy's ──
  {
    id: "d-save-them", title: "SAVE THEM: five bodies in a minigame set in the 1987 building", victims: [], victimLabel: "Five children's bodies: most likely the earlier five, shown again, and not new victims", by: [], byLabel: "Not recorded. A purple figure can appear in the minigame; the model draws nothing from where a death minigame is set",
    kind: "murder", placeLabel: "Shown among the 1987 restaurant's machines. The setting of a death minigame is not evidence of where anyone died", era: "pizzeria", year: 123100, yearLabel: "undated minigame; told with November 1987",
    date: { kind: "unknown", basis: "SAVE THEM is one of FNaF2's death minigames, a flash shown between deaths. By the model's rule its setting is not evidence of when or where anyone died. It is listed with November 1987 only because the game that shows it is set then.", evidence: ["fnaf2-save-them", "fnaf2-paycheck-1987"] },
    status: "theory", evidence: ["fnaf2-save-them", "fnaf2-save-them-you-cant", "fnaf2-save-them-purple-figure-chest-mark"], event: "t-1987-yellow-suit",
    note: "No record names a victim of November 1987. The later games count six dead children in all, the five and the Puppet's child, with none left over for a second five; so the model leans to reading these as the earlier five. It is only a lean: read alone, FNaF2 suggests a second killing. What was done in that week, the model cannot say.",
  },
  {
    id: "d-phone-guy", title: "Phone Guy's last recording ends in a scream", victims: ["phone-guy"], victimLabel: "Phone Guy", by: [], byLabel: "Not stated. The recording ends in banging, the tune Freddy plays, and a scream",
    kind: "machine", place: "freddy-fazbears-pizza-fnaf1", era: "pizzeria", year: 130100, yearLabel: "his own last week, before the player's",
    date: { kind: "relative", basis: "The messages are recordings made during his last week, an unstated time before the guard hears them. That guard's week falls in a November after 1987.", evidence: ["fnaf1-calls-prerecorded", "fnaf1-call4-phone-guy-attacked"] },
    status: "strong", evidence: ["fnaf1-call4-phone-guy-attacked", "fnaf1-calls-prerecorded", "fnaf1-call5-garbled", "fnaf1-call4-empty-heads"], event: "t-fnaf1",
    note: "His death is implied and never stated: the fourth message breaks off, the fifth is not his voice, and the last nights have no call. Which machine it was is not known.",
  },
  {
    id: "d-william-springlock", title: "The killer dies in the yellow rabbit suit", victims: ["william-afton"], victimLabel: "The purple figure of FNaF3's minigames; William Afton, on the model's reading", by: ["missing-children", "spring-bonnie"], byLabel: "The suit closes on him after five child ghosts corner him in the hidden room",
    kind: "accident", place: "safe-room", era: "pizzeria", year: 150100, yearLabel: "after the last restaurant closed, most likely",
    date: { kind: "relative", basis: "Before Fazbear's Fright, which finds the suit with a body in it: firm. After the last restaurant closed: an inference, medium at its lower end, which rests on a living culprit in November 1987.", evidence: ["fnaf3-n5-springlock-death", "fnaf3-call2-found-a-real-one", "fnaf2-call5-lockdown"] },
    status: "strong", evidence: ["fnaf3-n5-ghosts-safe-room", "fnaf3-n5-springlock-death", "fnaf3-springtrap-corpse-screens", "ffps-credits-william-afton"], event: "t-dismantle-and-death",
    note: "The death is shown. That the purple figure is William Afton is the model's reading, a chain of short inferences with one stated link: Pizzeria Simulator's credits give the salvaged rabbit's voice that name. Thirty years after the closing the suit is found with a body inside it. The room had been walled up before he died, and no game shows how he got in.",
  },
  // ── Thirty years on ──
  {
    id: "d-sl-vent", title: "A body was once found in a vent", victims: [], victimLabel: "Unknown", by: [], byLabel: "Not stated",
    kind: "unknown", place: "circus-babys-rental", era: "aftermath", year: 159500, yearLabel: "before Michael's week; undated",
    date: { kind: "relative", basis: "Told in the past tense on the second night of Michael's week.", evidence: ["sl-dead-body-in-vent"] },
    status: "canon", evidence: ["sl-dead-body-in-vent"],
    note: "Said by the facility's guide in its 'Angsty Teen' voice, as a 'funny story'. Nothing else is said about it.",
  },
  {
    id: "d-sl-technicians", title: "Two technicians hang dead in the galleries", victims: ["sl-technicians"], victimLabel: "Two technicians", by: [], byLabel: "Not shown. The facility's guide reports everything as normal",
    kind: "unknown", place: "circus-babys-rental", era: "aftermath", year: 161000, yearLabel: "the fifth night of Michael's week",
    date: { kind: "relative", basis: MICHAEL_WEEK, evidence: ["sl-technicians-hanged", "sl-golden-freddy-cutscene-springtrap"] },
    status: "canon", evidence: ["sl-technicians-hanged", "sl-technicians-night4-dialogue"], event: "t-sister-location",
    note: "Seen through the gallery windows on the fifth night. The night before, two technicians had brought a machine to the scooping room. Who killed them is not shown.",
  },
  {
    id: "d-michael-scooped", title: "Michael is scooped, and does not die", victims: ["michael-afton"], victimLabel: "The technician of Sister Location: Michael Afton", by: ["ennard", "circus-baby"], byLabel: "The scooper, at Circus Baby's direction; the fused machines then wear his body out of the building",
    kind: "machine", place: "circus-babys-rental", era: "aftermath", year: 162000, yearLabel: "the fifth night of Michael's week",
    date: { kind: "relative", basis: MICHAEL_WEEK, evidence: ["sl-real-ending-scooped-mirror", "sl-golden-freddy-cutscene-springtrap"] },
    status: "strong", evidence: ["sl-real-ending-if-we-looked-like-you", "sl-real-ending-scooped-mirror", "sl-you-wont-die", "sl-golden-freddy-cutscene-come-find-you"], event: "t-sister-location",
    note: "He is hollowed out and survives it: 'I should be dead. But I'm not.' That the technician is Michael is a short inference from his own later speech.",
  },
  {
    id: "d-ffps-fire", title: "The fire at the Cassette Man's pizzeria", victims: ["william-afton", "elizabeth-afton", "cassette-mans-daughter", "cassette-man", "molten-freddy"], victimLabel: "The four machines that came (the salvaged rabbit, credited as William Afton; Scrap Baby, addressed as Elizabeth; Molten Freddy; and Lefty, which most likely holds the Puppet and the Cassette Man's daughter) and the Cassette Man, who says he is remaining. Whether the volunteer left is not shown", by: ["cassette-man"], byLabel: "The Cassette Man's trap. He calls the machines into one building and stays as it burns; the game does not show who lights the fire",
    kind: "fire", place: "ffps-pizzeria", era: "aftermath", year: 200100, yearLabel: "after the Fazbear's Fright fire",
    date: { kind: "relative", basis: "The Saturday that ends Pizzeria Simulator's week. The game follows the Fazbear's Fright fire: the rabbit that burned there is the rabbit salvaged here. No year is printed.", evidence: ["ffps-completion-fire", "ffps-scraptrap-still-me"] },
    status: "strong", evidence: ["ffps-completion-fire", "ffps-completion-old-friend-hell", "ffps-completion-rest", "ffps-completion-remaining-nearby", "ffps-completion-brave-volunteer", "ffps-completion-peace-perhaps-more", "ffps-lorekeeper-gravestones", "ffps-completion-achievement"], event: "t-ffps",
    note: "The fire and the burning machines are shown. The game presents it as the end, and as William Afton's end: one of the machines is told that the darkest pit of Hell has opened for him. The Cassette Man's own death is implied. For the children the fire is told as a release, in his words 'I believe there is peace'; nothing shows a release, and six graves are shown after the credits. What later games show of the killer's image is told in their own entries, and the model does not tell them as one history.",
  },
  // ── The rabbit in the code ──
  {
    id: "d-hw-jeremy", title: "Jeremy, the first tester: a grave injury is implied, and his fate is unknown", victims: ["jeremy-hw"], victimLabel: "Jeremy (fate unknown)", by: [], byLabel: "By his own hand, as the tapes imply, while wearing the visor",
    kind: "unknown", place: "silver-parasol-games-office", era: "digital", year: 220100, yearLabel: "undated; during the VR game's development",
    date: { kind: "relative", basis: "While the first studio is testing the game. No year is given, and the place of the scanning after the Pizzeria Simulator fire is the model's convention.", evidence: ["hw-tape-07", "hw-tape-09", "hw-tape-05"] },
    status: "theory", evidence: ["hw-tape-03", "hw-tape-07", "hw-tape-09", "hw-jeremy-self-injury-implied", "hw-game-over-remember-jeremy"], event: "t-boards-scanned",
    note: "Three tapes together imply that he cut his own face with the supply room's paper slicer. No tape says that he died, and he is last described alive. A game-over screen reads 'Remember Jeremy.' He is listed here as an injury of unknown outcome, not as a death.",
  },
  // ── The Pizzaplex ──
  {
    id: "d-sb-staff", title: "Pizzaplex staff stop being seen", victims: [], victimLabel: "Staff of the Pizzaplex, among them Leo, unseen for months", by: [], byLabel: "Not stated",
    kind: "disappearance", place: "mega-pizzaplex", era: "pizzaplex", year: 255100, yearLabel: "before Gregory's night",
    date: { kind: "relative", basis: "The messages are found during Gregory's night and describe what came before it. They carry no dates.", evidence: ["security-breach-msg-job-security"] },
    status: "canon", evidence: ["security-breach-msg-all-staff-meeting", "security-breach-msg-job-security", "security-breach-msg-pink-slip"], event: "t-vanessa-hired",
    note: "An employee asks where everyone is. A late-night meeting is made mandatory for the service team, and the night staff are replaced by robots. No record says what happened to anyone; that staff were removed is the model's inference.",
  },
  {
    id: "d-sb-therapist", title: "A therapist is found dead, mangled by machinery", victims: [], victimLabel: "One of client 46's former therapists; two more are missing", by: [], byLabel: "Machinery, not specified",
    kind: "machine", placeLabel: "Not stated", era: "pizzaplex", year: 256000, yearLabel: "before or around Gregory's night",
    date: { kind: "relative", basis: "Told on a therapy recording found during Gregory's night. The sessions carry no dates.", evidence: ["security-breach-cd46-therapists-missing-dead"] },
    status: "canon", evidence: ["security-breach-cd46-therapists-missing-dead", "security-breach-cd-therapists-shared-and-replaced"],
    note: "Client 46 is never named in the recordings.",
  },
  {
    id: "d-sb-residents", title: "Residents continue to disappear", victims: [], victimLabel: "Local residents", by: [], byLabel: "Not stated",
    kind: "disappearance", placeLabel: "Not stated", era: "pizzaplex", year: 259000, yearLabel: "around Gregory's night",
    date: { kind: "relative", basis: "A newspaper headline in one of Security Breach's endings, and a line of Gregory's at the end of the night. No dates are given.", evidence: ["security-breach-alley-newspaper", "security-breach-gregory-more-disappearances"] },
    status: "canon", evidence: ["security-breach-alley-newspaper", "security-breach-gregory-more-disappearances"],
    note: "The newspaper is headed 'MISSING', over rows of silhouettes; its text says 'residents', not children. Gregory says that if he leaves, there will be more disappearances.",
  },
  {
    id: "d-sb-vanny-fall", title: "One ending: Freddy carries the woman in the rabbit costume off the roof", victims: ["vanny"], victimLabel: "The woman in the rabbit costume, Vanny", by: ["glamrock-freddy"], byLabel: "Glamrock Freddy",
    kind: "machine", place: "mega-pizzaplex", era: "pizzaplex", year: 261000, yearLabel: "the end of Gregory's night",
    date: { kind: "relative", basis: "The last hour of Security Breach's night, in one of its endings.", evidence: ["security-breach-ending-rooftop"] },
    status: "strong", evidence: ["security-breach-ending-rooftop", "security-breach-rooftop-unmasked", "security-breach-rooftop-vanessa-alive"], branch: "To the Rooftop", event: "t-security-breach",
    note: "A branch ending, and no later game is shown to follow it. The fall is shown and a death is implied. Under the mask is a blonde woman; a later page of the same ending shows Vanessa alive on the roof, and the model has no account of that.",
  },
  {
    id: "d-sb-vanny-disassembled", title: "One ending: the building's robots take the woman in the rabbit costume apart", victims: ["vanny"], victimLabel: "The woman in the rabbit costume, Vanny", by: ["gregory"], byLabel: "The building's service robots, on a button that Gregory presses",
    kind: "machine", place: "mega-pizzaplex", era: "pizzaplex", year: 261100, yearLabel: "the end of Gregory's night",
    date: { kind: "relative", basis: "The last hour of Security Breach's night, in one of its endings.", evidence: ["security-breach-ending-disassemble-vanny"] },
    status: "canon", evidence: ["security-breach-ending-disassemble-vanny"], branch: "Disassemble Vanny", event: "t-security-breach",
    note: "A branch ending, and no later game is shown to follow it.",
  },
];
