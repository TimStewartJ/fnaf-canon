import type { Status } from "./schema";
import type { DateJustification } from "./dates";

export type DeathKind = "murder" | "machine" | "accident" | "fire" | "disappearance" | "unknown";

export const DEATH_KIND: Record<DeathKind, { label: string; icon: string }> = {
  murder: { label: "Murder", icon: "🔪" },
  machine: { label: "By a machine", icon: "⚙️" },
  accident: { label: "Accident", icon: "⚠️" },
  fire: { label: "Fire", icon: "🔥" },
  disappearance: { label: "Disappearance", icon: "❓" },
  unknown: { label: "Cause unknown", icon: "✝" },
};

/**
 * Every death, killing and presumed-dead disappearance the evidence records, in the story the main games tell,
 * with the attacks and disappearances whose outcome is not a recorded death. `outcome` marks those:
 *   (absent)   a death: a record states it, shows it or firmly implies it
 *   presumed   no record states or shows the death; the model presumes it, and the note says on what
 *              (David Murray, the bitten boy, Phone Guy)
 *   not-shown  the game leaves the fate open (Edwin Murray; Arnold, in two endings; the tester Jeremy; the
 *              Pizzaplex's staff and the local residents, who disappear; Cassie, in RUIN's standard ending)
 *   survives   the attack is shown and the victim lives (Michael's scooping)
 *   branch     a death that happens only in one ending which no later game is shown to follow (the two
 *              endings of Security Breach in which the woman in the rabbit costume falls or is taken apart)
 * Two entries for one person are two endings of one game; each names its ending in `branch` and in its title.
 * Pizzeria Simulator's fire is the Completion ending, the one the later games follow, and is entered as a death.
 * SAVE THEM's five bodies have no entry: the model reads them as the earlier five shown again, and the timeline
 * event of November 1987 tells them. Into the Pit and FNaF World's adventure are outside the story, so their
 * deaths are not listed.
 * `kind` is the cause as far as the records give it; its label is worded so that it is true of an entry that is
 * not a death ("By a machine", of Michael's scooping).
 * `status` is how firmly what the title says AND the stated cause are established (the weaker of the two).
 * `by` lists the immediate agent first: the interface files an entry under `by[0]`.
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
  branch?: string;       // the ending's name, where the entry belongs to one ending
  event?: string;        // timeline event id that tells the same death
  /** What the records carry about the victim's fate. Absent means "death". */
  outcome?: "death" | "presumed" | "not-shown" | "survives" | "branch";
}

const BABY_CONVENTION = "No record dates it. The business followed 'the unfortunate closing of Freddy Fazbear's Pizza', which closing is not said, and William Afton is alive for it. The model places it after the old restaurant closed and before November 1987, as a convention; a place after the last restaurant closed is allowed only if the pink bedroom in FNaF4 is not the daughter's.";
const MICHAEL_WEEK = "Michael's week is undated. The records fix it after his sister's death and before his speech in front of the burnt attraction; its place after his father's death is the model's convention.";
const NIGHT_1979 = "The night of the work order, which is dated 9/07/79 on a document not yet seen in play; the year is entered as the teaser's.";

export const deaths: Death[] = [
  // ── The costume workshop ──
  {
    id: "d-fiona", title: "Fiona Murray dies", victims: ["fiona-murray"], victimLabel: "Fiona Murray", by: [], byLabel: "Not stated",
    kind: "unknown", placeLabel: "Not stated. The logs link her death to a Fall Fest installation away from the workshop", era: "founding", year: 20100, yearLabel: "year unknown; before the night of 1979",
    date: { kind: "relative", basis: "Logged before the first machine is built to mind David. No record gives the year or says which Fall Fest it was.", evidence: ["secret-of-the-mimic-log-death", "secret-of-the-mimic-log-training-m1"] },
    status: "canon", evidence: ["secret-of-the-mimic-log-installation-worries", "secret-of-the-mimic-log-death", "secret-of-the-mimic-film-mommy-gone", "secret-of-the-mimic-mail-heard-fiona", "secret-of-the-mimic-log-m1-as-fiona"], event: "t-fiona-dies",
    note: "Edwin asks how he is to tell their son that his mother is gone. The log does not state the cause; that she died at the installation is inferred from its context. An employee who later hears her voice wonders whether the death was faked: by then the first machine spoke in her voice.",
  },
  {
    id: "d-david", title: "David Murray's death is implied, never stated", victims: ["david-murray"], victimLabel: "David Murray, the Murrays' son (death implied, never stated)", by: [], byLabel: "Not stated. The nearest the game comes is his father's line in a birthday film: 'I left him out at the playground.'",
    kind: "unknown", placeLabel: "Not stated", era: "founding", year: 30100, yearLabel: "first week of a December; the model's estimate is 1975",
    date: { kind: "estimated", basis: "His party is announced on 1 December and cancelled on 6 December; the headers carry no year. If 6 December was the Saturday of the party, the year between 1965 and 1979 is 1969 or 1975, and 1975 fits the company's decline. The estimate is low to medium: the cancellation does not name him, and a memo about the research floor strains it.", evidence: ["secret-of-the-mimic-mail-david-party", "secret-of-the-mimic-mail-party-canceled", "secret-of-the-mimic-mcm-rnd-floor-opening-memo"] },
    status: "strong", outcome: "presumed", evidence: ["secret-of-the-mimic-mail-david-party", "secret-of-the-mimic-mail-party-canceled", "secret-of-the-mimic-log-refusal", "secret-of-the-mimic-f10n4-miss-my-child", "secret-of-the-mimic-film-yellow-playground"], event: "t-mimic-born",
    note: "No record states his death. His surprise party is cancelled 'due to the recent tragic events', in a notice that does not name him; his father refuses to build a replacement because 'It wouldn't be him'; and the computer F10-N4 says that it misses its child and wants him back. On those three records the model presumes it. The cause is never given.",
  },
  {
    id: "d-edwin", title: "Edwin Murray is left injured, and goes silent", victims: ["edwin-murray"], victimLabel: "Edwin Murray (fate not shown)", by: [], byLabel: "Not stated. He says he lost his temper with the second machine and cannot feel his legs; it answers him in his own words and does not call for help",
    kind: "disappearance", place: "inventors-house", era: "founding", year: 45000, yearLabel: "undated; before the night of 1979",
    date: { kind: "relative", basis: "After the second machine is built and damaged, and before the night of 1979, by which time he has 'gone quiet' and the mailbox at his gate has been full for five weeks.", evidence: ["secret-of-the-mimic-log-turn-around-lost-temper", "secret-of-the-mimic-dispatch-contractor-murray", "secret-of-the-mimic-mail-foreclosure"] },
    status: "theory", outcome: "not-shown", evidence: ["secret-of-the-mimic-log-turn-around", "secret-of-the-mimic-log-turn-around-lost-temper", "secret-of-the-mimic-dispatch-contractor-murray", "secret-of-the-mimic-f10n4-reveal"],
    note: "What injured him is not stated: the detonation spoken of at the start of that recording is a journal entry that the machine recites. What became of him is not shown, and on the night of 1979 the voice in the workshop still speaks of him as shut away in the house. He is listed here as a disappearance, not as a death.",
  },
  {
    id: "d-murray-technicians", title: "Earlier visitors are found dead inside mascot costumes", victims: [], victimLabel: "Earlier visitors to the workshop: Fazbear technicians sent before him, by the account of the voice on the radio", by: ["the-mimic"], byLabel: "The second machine, M2 (the copying endoskeleton)",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 50100, yearLabel: "before the night of 1979",
    date: { kind: "relative", basis: "The bodies are already there on the night of the work order. The messages left by people trapped in the building carry no date.", evidence: ["secret-of-the-mimic-previous-technicians", "secret-of-the-mimic-mail-technicians-attacked"] },
    status: "canon", evidence: ["secret-of-the-mimic-previous-technicians", "secret-of-the-mimic-mail-technicians-attacked", "secret-of-the-mimic-f10n4-fazbear-will-send-another"], event: "t-1979-night",
    note: "The bodies are shown. That they were technicians the company had sent, who did not come back, is the account of the voice on the radio, which the model reads as the first machine imitating the dispatcher. Messages left in the building describe 'A maniac in a costume' and a colleague's screams.",
  },
  {
    id: "d-arnold", title: "One ending (Walk Away): the technician wakes inside a Fredbear springlock suit", victims: ["arnold"], victimLabel: "Arnold, the technician (fate not shown)", by: ["the-mimic"], byLabel: "The second machine, which had hidden in his van",
    kind: "machine", place: "murray-costume-manor", era: "founding", year: 51000, yearLabel: "the night of 1979",
    date: { kind: "teaser", basis: NIGHT_1979, evidence: ["secret-of-the-mimic-ending-clock-out", "secret-of-the-mimic-work-order-1979", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", outcome: "not-shown", evidence: ["secret-of-the-mimic-ending-clock-out", "secret-of-the-mimic-clock-out-real-dispatch"], branch: "Walk Away (Clock Out)", event: "t-1979-night",
    note: "In the ending where he walks away, he is attacked in his van and wakes inside the suit on the mock-up stage. His death is not shown. In another ending he is left in a crash as the workshop burns. The game has three endings, and the model does not choose between them.",
  },
  {
    id: "d-arnold-crash", title: "One ending (Framed): the technician is left in a crash as the workshop burns", victims: ["arnold"], victimLabel: "Arnold, the technician (presumed dead; not shown)", by: ["the-mimic"], byLabel: "The second machine, which rides his van and causes the crash",
    kind: "machine", placeLabel: "In his van; where the crash happens is not stated", era: "founding", year: 51100, yearLabel: "the night of 1979",
    date: { kind: "teaser", basis: NIGHT_1979, evidence: ["secret-of-the-mimic-ending-unfinished-business", "secret-of-the-mimic-work-order-1979", "secret-of-the-mimic-teaser-1979"] },
    status: "theory", outcome: "not-shown", evidence: ["secret-of-the-mimic-ending-unfinished-business"], branch: "Framed (Unfinished Business)", event: "t-1979-night",
    note: "In this ending he sets off the building's self-destruction; the machine rides his van, causes a crash and walks away, leaving him presumably dead. His death is not shown. In another ending he wakes inside a Fredbear springlock suit. The game has three endings, and the model does not choose between them.",
  },
  // ── The house and the birthday ──
  {
    id: "d-crying-child", title: "The bitten boy most likely dies", victims: ["crying-child"], victimLabel: "The crying child (death implied, never stated)", by: ["fredbear", "older-brother"], byLabel: "Fredbear's jaw, after his older brother and three friends lift him to its mouth as a joke",
    kind: "accident", place: "fredbears-family-diner", era: "diner", year: 65100, yearLabel: "c. 1983",
    date: { kind: "estimated", basis: "The party ends the five-day countdown, in the week whose only printed year is 1983: a title card on the television, which gives a floor.", evidence: ["fnaf4-minigame-countdown-to-party", "fnaf4-fredbear-and-friends-1983"] },
    status: "strong", outcome: "presumed", evidence: ["fnaf4-give-fredbear-a-kiss", "fnaf4-the-bite", "fnaf4-night6-fade-order", "fnaf4-youre-broken", "fnaf4-flatline", "fnaf4-diner-unnamed"], event: "t-bite-1983",
    note: "The bite is shown. His death is implied and never stated: in the last scene everything he called a friend fades, and he fades last. No record places him afterwards, in the yellow bear or anywhere else, and the promise to put him back together is never shown kept. He is not one of the five. The restaurant is unnamed in FNaF4; the model reads it as Fredbear's Family Diner.",
  },
  // ── The murders ──
  {
    id: "d-child-outside", title: "A child is shut out and killed", victims: ["cassette-mans-daughter"], victimLabel: "A child shut outside; most likely the Cassette Man's daughter", by: ["purple-guy"], byLabel: "A purple figure who gets out of a purple car; the model reads him as William Afton",
    kind: "murder", placeLabel: "Outside the building where the Puppet kept watch. Neither game names it", era: "murders", year: 70100, yearLabel: "undated; told here by convention (before the five, after the 1983 week)",
    date: { kind: "relative", basis: "No record dates the death. The father's phrase 'a wound first inflicted on me' is the one sentence that orders it, and on that the model places it before the five, as a convention. Its place after the 1983 week is a convention too: no record orders the two.", evidence: ["ffps-insanity-wound-first-inflicted", "fnaf2-take-cake-to-the-children"] },
    status: "strong", evidence: ["fnaf2-take-cake-to-the-children", "ffps-security-puppet-assignment", "ffps-security-puppet-trapped", "ffps-security-puppet-dead-child", "ffps-completion-security-puppet-terminal", "ffps-completion-shut-out", "ffps-completion-my-daughter"], event: "t-daughter-killed",
    note: "The killing is shown in FNaF2. Pizzeria Simulator shows a child shut outside from the Puppet's side, and puts that scene on a terminal while the Cassette Man speaks of the day his daughter was shut out and left to die. That this is FNaF2's killing is the model's reading. A voice in FNaF2's scene spells S-A-V-E-H-I-M, which is kept as a tension. She most likely stays on in the Puppet.",
  },
  {
    id: "d-missing-children", title: "The five: lured into a back room and never found", victims: ["missing-children"], victimLabel: "Five children. Two were reported lured that night, and five were linked to the incident later. A row of five gravestones in Pizzeria Simulator carries four names (Gabriel, Fritz, Susie, Jeremy), most likely theirs; the fifth stone is hidden, and no game names the fifth child", by: ["purple-guy"], byLabel: "A man police think dressed as a company mascot. The model reads him as William Afton, most likely in the yellow rabbit suit",
    kind: "murder", place: "freddy-fazbears-pizza-original", era: "murders", year: 80100, yearLabel: "a June 26 between 1980 and 1986",
    date: { kind: "estimated", basis: "June 26th is printed, for two children, with no year. The model reads the place as the old restaurant, which fought on 'ever since', closed and rotted before the 1987 restaurant opened: on that reading the latest June 26 is 1986's, where the records alone give 1987. The floor, 1980's, is softer: it rests on prototypes that the game's files label, unfinished on the night of 1979.", evidence: ["fnaf1-news-kids-vanish", "fnaf1-news-uphill-battle", "fnaf2-call1-new-location", "secret-of-the-mimic-rnd-proto-pizzeria"] },
    status: "strong", evidence: ["fnaf1-news-kids-vanish", "fnaf1-news-five-children", "fnaf1-news-suspect-captured", "fnaf1-news-charged-vs-convicted", "fnaf3-n5-ghosts-safe-room", "ffps-fruity-maze-follow-me", "ffps-lorekeeper-gravestones"], event: "t-missing-children",
    note: "The clippings say the bodies were never found and the children are presumed dead. They do not say which Freddy Fazbear's Pizza it was: that it was the old restaurant is the model's reading. A man was caught the next morning and charged; 'convicted' is only the headline. Who he was is open, and the model does not tell him as William Afton. The mascots carried the signs, a smell and what looked like blood and mucus; where the bodies went is never shown. Five child ghosts later corner the killer.",
  },
  // ── Afton Robotics ──
  {
    id: "d-elizabeth", title: "Circus Baby takes her maker's daughter", victims: ["elizabeth-afton"], victimLabel: "A little girl, her maker's daughter. Pizzeria Simulator calls what speaks from the rebuilt Baby 'Elizabeth'", by: ["circus-baby"], byLabel: "Circus Baby: a claw from her stomach pulls the girl inside",
    kind: "machine", place: "circus-babys-pizza-world", era: "funtime", year: 113100, yearLabel: "undated; placed before November 1987 by convention",
    date: { kind: "relative", basis: "On Circus Baby's one day on stage. " + BABY_CONVENTION, evidence: ["sl-baby-on-stage-one-day", "sl-handunit-freddy-fazbear-closing"] },
    status: "strong", evidence: ["sl-girl-daddy-let-me-play", "sl-baby-minigame-girl-grabbed", "sl-baby-ice-cream-story", "ffps-completion-connection-terminated-elizabeth", "ffps-scrap-baby-make-you-proud-daddy"], event: "t-elizabeth-killed",
    note: "She is the one child the games show these machines take. Sister Location never speaks her name. She is most likely still in the machine: in Pizzeria Simulator, Scrap Baby promises to make 'daddy' proud. No record orders her death against the five.",
  },
  // ── 1987 and the last Freddy's ──
  {
    id: "d-phone-guy", title: "Phone Guy's last recording ends in a scream", victims: ["phone-guy"], victimLabel: "Phone Guy (death implied, never stated)", by: [], byLabel: "Not stated. The recording ends in banging, the tune Freddy plays, and a scream",
    kind: "unknown", place: "freddy-fazbears-pizza-fnaf1", era: "pizzeria", year: 130100, yearLabel: "his own last week, before the player's",
    date: { kind: "relative", basis: "The messages are recordings made during his last week, an unstated time before the guard hears them. That guard's week falls in a November after 1987.", evidence: ["fnaf1-calls-prerecorded", "fnaf1-call4-phone-guy-attacked"] },
    status: "strong", outcome: "presumed", evidence: ["fnaf1-call4-phone-guy-attacked", "fnaf1-calls-prerecorded", "fnaf1-call5-garbled", "fnaf1-call4-empty-heads"], event: "t-fnaf1",
    note: "His death is implied and never stated: the fourth message breaks off, the fifth is not his voice, and the last nights have no call. Which machine it was is not known.",
  },
  {
    id: "d-william-springlock", title: "The killer dies in the yellow rabbit suit", victims: ["william-afton"], victimLabel: "The purple figure of FNaF3's minigames; William Afton, on the model's reading", by: ["spring-bonnie", "missing-children"], byLabel: "The suit closes on him after five child ghosts corner him in the hidden room",
    kind: "accident", place: "safe-room", era: "pizzeria", year: 150100, yearLabel: "after the last restaurant closed, most likely",
    date: { kind: "relative", basis: "Before Fazbear's Fright, which finds the suit with what looks like a body in it: firm. After the last restaurant closed: an inference, medium at its lower end, which rests on a living culprit in November 1987.", evidence: ["fnaf3-n5-springlock-death", "fnaf3-call2-found-a-real-one", "fnaf3-springtrap-corpse-screens", "fnaf2-call5-lockdown"] },
    status: "strong", evidence: ["fnaf3-n5-ghosts-safe-room", "fnaf3-n5-springlock-death", "fnaf3-springtrap-corpse-screens", "ffps-credits-william-afton"], event: "t-dismantle-and-death",
    note: "The death is shown. That the purple figure is William Afton is the model's reading, a chain of short inferences with one stated link: Pizzeria Simulator's credits give the salvaged rabbit's voice that name. Thirty years after the closing the suit is found with what looks like a body inside it. The room had most likely been walled up before he died, and no game shows how he got in.",
  },
  // ── Thirty years on ──
  {
    id: "d-sl-vent", title: "A body was once found in a vent", victims: [], victimLabel: "Unknown", by: [], byLabel: "Not stated",
    kind: "unknown", place: "circus-babys-rental", era: "aftermath", year: 159500, yearLabel: "before Michael's week, which is undated and placed by convention",
    date: { kind: "relative", basis: "Told in the past tense on the second night of Michael's week.", evidence: ["sl-dead-body-in-vent"] },
    status: "canon", evidence: ["sl-dead-body-in-vent"],
    note: "Said by the facility's guide in its 'Angsty Teen' voice, as a 'funny story'. Nothing else is said about it.",
  },
  {
    id: "d-sl-technicians", title: "Two technicians hang dead on two of the facility's stages", victims: ["sl-technicians"], victimLabel: "Two technicians", by: [], byLabel: "Not shown. The facility's guide reports everything as normal",
    kind: "unknown", place: "circus-babys-rental", era: "aftermath", year: 161000, yearLabel: "the fifth night of Michael's week (undated; placed after his father's death by convention)",
    date: { kind: "relative", basis: MICHAEL_WEEK, evidence: ["sl-technicians-hanged", "sl-golden-freddy-cutscene-springtrap"] },
    status: "canon", evidence: ["sl-technicians-hanged", "sl-technicians-night4-dialogue"], event: "t-sister-location",
    note: "Seen through the windows of Ballora Gallery and Funtime Auditorium on the fifth night, one in each. The night before, two technicians had brought a machine to the scooping room. Who killed them is not shown.",
  },
  {
    id: "d-michael-scooped", title: "Michael is scooped, and does not die", victims: ["michael-afton"], victimLabel: "The technician of Sister Location, Michael Afton (he survives)", by: ["ennard", "circus-baby"], byLabel: "The scooper, at Circus Baby's direction; the fused machines then wear his body out of the building",
    kind: "machine", place: "circus-babys-rental", era: "aftermath", year: 162000, yearLabel: "the fifth night of Michael's week (undated; placed after his father's death by convention)",
    date: { kind: "relative", basis: MICHAEL_WEEK, evidence: ["sl-real-ending-scooped-mirror", "sl-golden-freddy-cutscene-springtrap"] },
    status: "strong", outcome: "survives", evidence: ["sl-real-ending-if-we-looked-like-you", "sl-real-ending-scooped-mirror", "sl-you-wont-die", "sl-golden-freddy-cutscene-come-find-you"], event: "t-sister-location",
    note: "He is hollowed out and survives it: 'I should be dead. But I'm not.' That the technician is Michael is a short inference from his own later speech.",
  },
  {
    id: "d-ffps-fire", title: "The fire at the Cassette Man's pizzeria", victims: ["william-afton", "elizabeth-afton", "cassette-mans-daughter", "cassette-man", "molten-freddy"], victimLabel: "The four machines that came (the salvaged rabbit, credited as William Afton; Scrap Baby, addressed as Elizabeth; Molten Freddy; and Lefty, which most likely holds the Puppet and the Cassette Man's daughter) and the Cassette Man, who says he is remaining. Whether the volunteer left is not shown", by: [], byLabel: "The Cassette Man's trap. He calls the machines into one building and stays as it burns; the game does not show who lights the fire",
    kind: "fire", place: "ffps-pizzeria", era: "aftermath", year: 200100, yearLabel: "after the Fazbear's Fright fire, most likely",
    date: { kind: "relative", basis: "The Saturday that ends Pizzeria Simulator's week. The game follows the Fazbear's Fright fire if the rabbit salvaged here is the one that burned there, which is most likely. No year is printed.", evidence: ["ffps-completion-fire", "ffps-scraptrap-still-me", "ffps-scraptrap-always-come-back"] },
    status: "strong", evidence: ["ffps-completion-fire", "ffps-completion-old-friend-hell", "ffps-completion-rest", "ffps-completion-remaining-nearby", "ffps-completion-brave-volunteer", "ffps-completion-peace-perhaps-more", "ffps-lorekeeper-gravestones", "ffps-completion-achievement"], event: "t-ffps",
    note: "This is the game's Completion ending, the one the later games follow. The fire and the burning machines are shown. The game presents it as the end, and as William Afton's end: one of the machines is told that the darkest pit of Hell has opened for him. The Cassette Man's own death is implied. For the children the fire is told as a release, in his words 'I believe there is peace'; nothing shows a release, and six graves are shown after the credits. What later games show of the killer's image is told in the timeline, and the model does not tell it as one history.",
  },
  // ── The rabbit in the code ──
  {
    id: "d-hw-jeremy", title: "Jeremy, the first tester: a grave injury is implied, and his fate is not stated", victims: ["jeremy-hw"], victimLabel: "Jeremy, the first tester (fate not stated)", by: [], byLabel: "By his own hand, as the tapes imply; he is next seen with the visor on and his shirt black",
    kind: "unknown", place: "silver-parasol-games-office", era: "digital", year: 220100, yearLabel: "undated; during the VR game's development",
    date: { kind: "relative", basis: "While the first studio is testing the game. No year is given, and the place of the scanning after the Pizzeria Simulator fire is the model's convention.", evidence: ["hw-tape-07", "hw-tape-09", "hw-tape-05"] },
    status: "theory", outcome: "not-shown", evidence: ["hw-tape-03", "hw-tape-04", "hw-tape-07", "hw-tape-09", "hw-jeremy-self-injury-implied", "hw-game-over-remember-jeremy"], event: "t-boards-scanned",
    note: "Tapes 3, 4 and 9 together imply that he cut his own face with the supply room's paper slicer. No tape says that he died, and he is last described alive. A game-over screen reads 'Remember Jeremy.' He is listed here as an injury of unknown outcome, not as a death.",
  },
  // ── The Pizzaplex ──
  {
    id: "d-sb-staff", title: "Pizzaplex staff stop being seen", victims: [], victimLabel: "Staff of the Pizzaplex, among them Leo, unseen for months (fate not shown)", by: [], byLabel: "Not stated",
    kind: "disappearance", place: "mega-pizzaplex", era: "pizzaplex", year: 255100, yearLabel: "before Gregory's night",
    date: { kind: "relative", basis: "The messages are found during Gregory's night and describe what came before it. They carry no dates.", evidence: ["security-breach-msg-job-security"] },
    status: "canon", outcome: "not-shown", evidence: ["security-breach-msg-all-staff-meeting", "security-breach-msg-job-security", "security-breach-msg-pink-slip"], event: "t-vanessa-hired",
    note: "An employee asks where everyone is. A late-night meeting is made mandatory for the service team, and a notice says that night staff are no longer needed. No record says what happened to anyone; that staff were removed is the model's inference.",
  },
  {
    id: "d-sb-therapist", title: "A therapist is found dead, mangled by machinery", victims: [], victimLabel: "One of client 46's former therapists; two more are missing", by: [], byLabel: "Machinery, not specified",
    kind: "machine", placeLabel: "Not stated", era: "pizzaplex", year: 256000, yearLabel: "before or around Gregory's night",
    date: { kind: "relative", basis: "Told on a therapy recording found during Gregory's night. The sessions carry no dates.", evidence: ["security-breach-cd46-therapists-missing-dead"] },
    status: "canon", evidence: ["security-breach-cd46-therapists-missing-dead", "security-breach-cd-therapists-shared-and-replaced"],
    note: "Client 46 is never named in the recordings.",
  },
  {
    id: "d-sb-residents", title: "Residents continue to disappear", victims: [], victimLabel: "Local residents (fate not shown)", by: [], byLabel: "Not stated",
    kind: "disappearance", placeLabel: "Not stated", era: "pizzaplex", year: 259000, yearLabel: "around Gregory's night",
    date: { kind: "relative", basis: "A newspaper headline in one of Security Breach's endings, and a line of Gregory's at the end of the night. No dates are given.", evidence: ["security-breach-alley-newspaper", "security-breach-gregory-more-disappearances"] },
    status: "canon", outcome: "not-shown", evidence: ["security-breach-alley-newspaper", "security-breach-gregory-more-disappearances"],
    note: "The newspaper is headed 'MISSING', over rows of silhouettes; its text says 'residents', not children. Gregory says that if he leaves, there will be more disappearances.",
  },
  {
    id: "d-sb-vanny-fall", title: "One ending (To the Rooftop): Freddy tackles the woman in the rabbit costume off the roof", victims: ["vanny"], victimLabel: "The woman in the rabbit costume, Vanny", by: ["glamrock-freddy"], byLabel: "Glamrock Freddy",
    kind: "machine", place: "mega-pizzaplex", era: "pizzaplex", year: 261000, yearLabel: "the end of Gregory's night",
    date: { kind: "relative", basis: "The last hour of Security Breach's night, in one of its endings.", evidence: ["security-breach-ending-rooftop"] },
    status: "theory", outcome: "branch", evidence: ["security-breach-ending-rooftop", "security-breach-rooftop-unmasked", "security-breach-rooftop-vanessa-alive"], branch: "To the Rooftop", event: "t-security-breach",
    note: "A branch ending, and no later game is shown to follow it. The fall is shown and a death is implied. Under the mask is a blonde woman; a later page of the same ending shows Vanessa alive on the roof, and the model has no account of that.",
  },
  {
    id: "d-sb-vanny-disassembled", title: "One ending (Disassemble Vanny): the building's robots take the woman in the rabbit costume apart", victims: ["vanny"], victimLabel: "The woman in the rabbit costume, Vanny", by: ["gregory"], byLabel: "The building's service robots, on a button that Gregory presses",
    kind: "machine", place: "mega-pizzaplex", era: "pizzaplex", year: 261100, yearLabel: "the end of Gregory's night",
    date: { kind: "relative", basis: "The last hour of Security Breach's night, in one of its endings.", evidence: ["security-breach-ending-disassemble-vanny"] },
    status: "theory", outcome: "branch", evidence: ["security-breach-ending-disassemble-vanny"], branch: "Disassemble Vanny", event: "t-security-breach",
    note: "A branch ending, and no later game is shown to follow it. Gregory presses a button that orders the robots to take her apart; the death is implied by the scene.",
  },
  {
    id: "d-ruin-cassie", title: "One ending (the standard ending): the elevator falls with Cassie in it", victims: ["cassie"], victimLabel: "Cassie (fate not shown)", by: [], byLabel: "Not shown. Gregory's voice says 'we can't risk being followed' and the elevator falls; who lets it fall is not shown",
    kind: "unknown", place: "mega-pizzaplex", era: "pizzaplex", year: 280100, yearLabel: "the end of RUIN",
    date: { kind: "relative", basis: "The last scene of RUIN's standard ending. RUIN follows Gregory's night, and no year is given.", evidence: ["ruin-ending-standard", "ruin-pizzaplex-abandoned-earthquake"] },
    status: "theory", outcome: "not-shown", evidence: ["ruin-ending-standard"], branch: "Standard ending", event: "t-ruin",
    note: "The elevator plummets, and after the credits a voice asks 'Cassie?'. Her death is not shown. The game has two other endings, and the model does not choose between them.",
  },
];
