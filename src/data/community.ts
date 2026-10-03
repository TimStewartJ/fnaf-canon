/**
 * The theory community, and Scott's interactions with it.
 *
 * IMPORTANT: nothing here is evidence. A fan theory is named and stated in the fandom's own terms, so its `name`
 * and `claim` may use a fan label. Everything the archive says about it (`right`, `wrong`, `scott`, and every
 * `summary` below) follows the theory's own labels policy and cites evidence records with [[id]].
 *
 * One book-only name is printed, in one entry: `c-henry`. The owner kept that entry on the page because it records
 * what the fandom holds. Its `claim` and the first sentence of its `wrong` say that the name comes from the novels,
 * that no game prints it and that this archive does not use it. The name appears in no other entry.
 *
 * How a verdict is reached. Each theory is judged against the Unified Model's final rulings:
 *   confirmed     a game says or shows it, or Scott Cawthon says so in writing (no entry carries it at present)
 *   mostly-right  the model holds the core at high or strong confidence, as an inference; a detail may not hold
 *   partly-right  part of it holds and part is contradicted, unsupported or taken back
 *   wrong         the model holds the opposite at high or medium-high confidence
 *   open          the core is neither established nor contradicted; the entry says which way the model leans
 * `modelSection` is the theory chapter that argues the point.
 *
 * Scott's words are in quotation marks only where they are verbatim in the `quote` of a cited record (or quoted in
 * its `claim`); anything else is reported in the archive's own words. Records of the 2018 and 2024 video interviews
 * rest on machine transcripts of the videos, and each use here says so. A transcript is support, and never the only
 * support for a verdict.
 */

export type Verdict = "confirmed" | "mostly-right" | "partly-right" | "wrong" | "open" | "superseded";

export const VERDICT: Record<Verdict, { label: string; color: string; help: string }> = {
  confirmed: { label: "Confirmed", color: "#69db7c", help: "A game says or shows it, or Scott says so in writing" },
  "mostly-right": { label: "Mostly right", color: "#a9e34b", help: "The core holds as a strong inference; a detail may not" },
  "partly-right": { label: "Partly right", color: "#ffd43b", help: "Some of it holds, some of it doesn't" },
  wrong: { label: "Wrong", color: "#ff6b6b", help: "The evidence contradicts it" },
  open: { label: "Still open", color: "#74c0fc", help: "The evidence hasn't settled it; the entry says which way this archive leans" },
  superseded: { label: "Superseded", color: "#adb5bd", help: "The question stopped mattering, or the story went elsewhere" },
};

export interface Source {
  who: string;          // creator or platform
  what: string;         // video/post title
  date?: string;        // YYYY-MM-DD or YYYY-MM
  url?: string;
  reliability: "primary" | "secondary" | "unverified";
}

export interface CommunityTheory {
  id: string;
  name: string;
  aka?: string[];
  year: number;         // year it emerged
  emerged: string;      // human label
  claim: string;
  sources: Source[];
  verdict: Verdict;
  right: string;        // rich text; cites evidence
  wrong: string;        // rich text
  scott?: string;       // rich text on Scott's response, if any
  modelSection?: string;
  games: string[];      // game ids it was about
}

export type InteractionKind = "scott-speaks" | "in-game-nod" | "clarification" | "community-access" | "prank";

export const INTERACTION_KIND: Record<InteractionKind, { label: string; icon: string }> = {
  "scott-speaks": { label: "Scott on theories", icon: "💬" },
  "in-game-nod": { label: "Nod inside a game", icon: "🎮" },
  clarification: { label: "Clarification", icon: "🧭" },
  "community-access": { label: "Access & collaboration", icon: "🤝" },
  prank: { label: "Prank / misdirection", icon: "🃏" },
};

export interface Interaction {
  id: string;
  date: string;         // YYYY-MM-DD
  title: string;
  summary: string;      // rich text
  kind: InteractionKind;
  evidence: string[];   // Scott statements / in-game records
  external?: Source[];  // non-evidence references (videos, posts)
  confirmed: "scott-confirmed" | "fan-inferred";
}

const GT = "Game Theory (MatPat)";
const RS = "https://www.reddit.com/r/fivenightsatfreddys/comments/7b27bf/";
const DAWKO_2018: Source = { who: "Dawko", what: "An Interview with Scott Cawthon - The Creator of Five Nights at Freddy's", date: "2018-08-08", url: "https://www.youtube.com/watch?v=03E_hZdXqBE", reliability: "primary" };
const DAWKO_2024: Source = { who: "Dawko", what: "An Interview with Scott Cawthon 2.0", date: "2024-08-04", url: "https://www.youtube.com/watch?v=lrgSbteWMC8", reliability: "primary" };

export const theories: CommunityTheory[] = [
  {
    id: "c-mangle-bite", name: "Mangle did the Bite of '87", year: 2014, emerged: "Dec 2014", games: ["fnaf2", "fnaf1"],
    claim: "The Bite of '87 happened at FNaF2's location, and the animatronic that bit was Mangle.",
    sources: [{ who: GT, what: "FNAF 2, Gaming's Scariest Story SOLVED!", date: "2014-12-09", url: "https://www.youtube.com/watch?v=d1kw1RmzrPc", reliability: "primary" }],
    verdict: "open",
    right: "The place now has support. FNaF2's restaurant is dated November 1987 on its cheques [[fnaf2-paycheck-1987]], and its animatronics still \"walk around during the day\" [[fnaf2-call1-walk-around-during-day]], which FNaF1's caller says was allowed until the Bite of '87 [[fnaf1-call1-bite-of-87]]. The model places the bite in that restaurant's last days, at medium confidence, and only perhaps at the birthday party booked for the day after Night 6 [[fnaf2-call6-birthday-day-shift]].",
    wrong: "No game shows the Bite of '87, and none names the animatronic or the victim. No FNaF2 call mentions a bite at all [[fnaf2-no-bite-mention]]. The theory's reason is that Mangle is left in pieces among the children in Kid's Cove [[fnaf2-call3-mangle]]. The model names no biter and no victim: who bit whom is unrecorded.",
    scott: "He wrote that the video was \"getting almost everything right\" [[scott-2015-game-theory-fnaf2-almost-right]] and did not say which parts. The praise cannot be read as confirming Mangle.",
    modelSection: "november-1987",
  },
  {
    id: "c-phone-guy-purple", name: "Phone Guy is Purple Guy", year: 2015, emerged: "early 2015", games: ["fnaf1", "fnaf2"],
    claim: "The friendly caller and the killer are the same man.",
    sources: [{ who: GT, what: "FNAF Mysteries SOLVED (pt. 1)", date: "2015-04-26", url: "https://www.youtube.com/watch?v=GPugMe4ePEw", reliability: "primary" }],
    verdict: "wrong",
    right: "It looked for the killer inside the company, and the calls of 1987 look there too: a caller reports that someone \"may have tampered\" with the animatronics' facial recognition (\"we're not sure\") [[fnaf2-call4-facial-recognition-tampered]], and the building is locked down against \"previous employees\" [[fnaf2-call5-lockdown]].",
    wrong: "The two men end differently. Phone Guy's last message, as its transcript describes it, has banging all through it and ends in music, a scream and static [[fnaf1-call4-phone-guy-attacked]]; that he dies that week is implied, not stated. The purple figure dies cornered by five ghosts, inside the yellow rabbit suit [[fnaf3-n5-springlock-death]], and Pizzeria Simulator's credits give the salvaged rabbit's voice the name William Afton [[ffps-credits-william-afton]], whose surname is the one by which an unnamed man in Sister Location's opening addresses the designer of its robots [[sl-intro-mr-afton-board]].",
    modelSection: "killer",
  },
  {
    id: "c-springtrap-purple", name: "Springtrap is Purple Guy", year: 2015, emerged: "Mar 2015", games: ["fnaf3"],
    claim: "The man who died in the Spring Bonnie suit is the killer, and Springtrap is his body.",
    sources: [{ who: "Community consensus after FNaF3", what: "the FNaF3 Night 5 minigame", date: "2015-03", reliability: "secondary" }],
    verdict: "mostly-right",
    right: "The purple figure dies inside the yellow rabbit suit [[fnaf3-n5-springlock-death]], and rare screens show what looks like a decayed body inside Springtrap [[fnaf3-springtrap-corpse-screens]]. Pizzeria Simulator's salvaged rabbit says \"it's still me\" [[ffps-scraptrap-still-me]], and the credits give its voice the name William Afton [[ffps-credits-william-afton]].",
    wrong: "Nothing of substance. No game says that the body in Springtrap is the man from the minigame: the model holds it as a strong inference from the records above. Scott's remark of 2018, below, agrees, and is known here only from a machine transcript.",
    scott: "His teasers played along: \"I am still here.\" and \"He always does.\" [[scottgames-fnaf3-teaser-still-here]] [[scottgames-fnaf3-teaser-he-always-does]] In the 2018 interview (a machine transcript of the video) he said of Springtrap that \"his purple corpse is in that whole body that whole time\" [[scott-2018-interview-purple-guy-in-springtrap]].",
    modelSection: "killer",
  },
  {
    id: "c-bite-87-cc", name: "The crying child is the Bite of '87", year: 2015, emerged: "Jul 2015", games: ["fnaf4"],
    claim: "FNaF4's bite at the birthday party is the Bite of '87 Phone Guy mentioned.",
    sources: [{ who: GT, what: "FNAF 4 got it ALL WRONG!", date: "2015-07-30", url: "https://www.youtube.com/watch?v=FMJ2jZtW7cw", reliability: "primary" }],
    verdict: "wrong",
    right: "It followed a trail on Scott's own site. While FNaF4 was being teased, the page source of scottgames.com was seeded with the digits 8 and 7, which no statement of his on record here explains [[scottgames-site-fnaf4-html-87]]. The game also shows toys that look like the 1987 restaurant's characters: a girl's three figures in a playground [[fnaf4-toy-collection-girl]], and a pulled-apart pink-and-white toy on a bedroom floor [[fnaf4-mangle-pieces-in-house]]. And FNaF4 does show a bite to the head [[fnaf4-the-bite]].",
    wrong: "The week's only printed year is 1983, on a television [[fnaf4-fredbear-and-friends-1983]], and by two days before release the hidden digits on Scott's site had changed from 8 and 7 to 8 and 3 [[scottgames-site-fnaf4-html-83]]. The Bite of '87 is a separate incident [[fnaf1-call1-bite-of-87]], which the model places in the 1987 restaurant's last days. The caller's remark that \"the human body can live without the frontal lobe\" implies that its victim lived; the boy bitten in FNaF4 most likely dies [[fnaf4-flatline]].",
    scott: "In 2017 he pointed fans \"hung up on 1983 vs 1987\" to a later Game Theory episode [[scott-2017-matpat-final-theory]]; he did not say in his own words which year is right. In the 2018 interview (machine transcript) he said of FNaF4: \"It went too broad for interpretation, and that left people unsatisfied.\" [[scott-2018-interview-fnaf4-too-broad]]",
    modelSection: "bite",
  },
  {
    id: "c-fnaf4-dream", name: "FNaF4's nights are a nightmare", year: 2015, emerged: "Jul 2015", games: ["fnaf4"],
    claim: "What the child fights in the bedroom is a dream: he is asleep, or lying in a hospital bed after the bite.",
    sources: [{ who: "Community", what: "discussion of FNaF4's bedside items and its Night 6 ending", date: "2015-07", reliability: "secondary" }],
    verdict: "open",
    right: "The game's own details point this way. The attackers are called Nightmares [[fnaf4-nightmare-animatronics]], flowers, pills or a drip can appear on the bedside table [[fnaf4-bedside-items]], and in Ultimate Custom Night Nightmare Fredbear says \"This time, there is more than an illusion to fear.\" [[ucn-nightmare-fredbear-lines]] The model agrees, at medium confidence, that what the boy fights is most likely not what is there.",
    wrong: "It does not follow that the room is imagined. In Sister Location the same bedroom is on the monitors of a locked room in Afton's facility [[sl-private-room-monitor-bedroom]], so it is a real place. Whether the boy was awake in it or dreaming in that bed, the games do not settle. The model leans to awake, at low to medium confidence, and places Nights 1 to 5 in the week before the party [[fnaf4-minigame-countdown-to-party]], not in a hospital afterwards. It grants that the dream reading explains the bedside items and the name better.",
    scott: "In the 2018 interview (machine transcript) he agreed that he had put things into Sister Location to ground FNaF4's story [[scott-2018-interview-sl-made-to-ground-story]]. He did not say which things, or which reading of FNaF4 they were meant to correct.",
    modelSection: "nightmares",
  },
  {
    id: "c-dream-theory", name: "Dream / coma theory", year: 2015, emerged: "Dec 2015", games: ["fnaf4"],
    claim: "The whole series is the nightmares of a comatose crying child.",
    sources: [{ who: GT, what: "The Clue that SOLVES Five Nights at Freddy's!", date: "2015-12-13", url: "https://www.youtube.com/watch?v=WvpO8To1qFg", reliability: "primary" }],
    verdict: "wrong",
    right: "It took FNaF4's oddest details seriously: the flowers, pills and drip that can appear by the bed [[fnaf4-bedside-items]], and the tone that a fan wiki describes under the last fade, like the flat line of a heart monitor [[fnaf4-flatline]]. The narrower question, whether FNaF4's own nights are a dream, is still open and has its own entry on this page.",
    wrong: "The series-wide version fails. Sister Location shows the bedroom of FNaF4's nights as a real place, on the monitors of Afton's facility [[sl-private-room-monitor-bedroom]], and the other games show a company, dated cheques and a family that exist outside any child's head [[fnaf2-paycheck-1987]] [[sl-golden-freddy-cutscene-father]].",
    scott: "No statement of his on record here rules on it by name. In 2017 he wrote \"I used SL to clear up a misconception from FNaF 4.\" and did not say which [[scott-2017-sl-cleared-fnaf4-misconception]]. His one use of the name on record here is a joke: a 2019 teaser hides the invented complaint \"stopped caring after dream theory....\" [[scottgames-site-2019-fnafworld-58-mock-quotes]].",
    modelSection: "nightmares",
  },
  {
    id: "c-adult-theory", name: "\"Adult theory\"", year: 2016, emerged: "Jun 2016", games: ["sister-location"],
    claim: "Sister Location's teasers (a coded schedule hidden in scottgames.com's page source) hinted that the robots were hired out for adult purposes.",
    sources: [{ who: "Steam community", what: "Fnaf SL DeBunk: The \"Adult\" Theory", date: "2016-06-20", url: "https://steamcommunity.com/app/388090/discussions/0/358415206096519892/", reliability: "primary" }],
    verdict: "wrong",
    right: "It was reading something real. In June 2016 the page source of scottgames.com carried a coded weekly schedule for five units, with days marked BKD, AVL, PVT and MAT [[scottgames-site-sl-source-rental-schedule]]. The schedule did mean something: in the game the robots are \"rented out for private parties during the day\" [[sl-handunit-rented-for-private-parties]].",
    wrong: "MAT was taken to mean mature. By 20 June the same source listed three clients, and two of them were birthday bookings and children's entertainment [[scottgames-site-sl-source-client-directory]]. Maintenance fits the code better, though no statement of Scott's on record here spells it out.",
    scott: "\"I could see why people were believing it, so I quickly dropped an additional teaser to clear it up.\" [[scott-2017-adult-theory-teaser]] He did not say which teaser. Fans at the time took the client list for the answer; tying his remark to it is an inference from the dates.",
    modelSection: "funtimes",
  },
  {
    id: "c-mike-michael", name: "Mike Schmidt is Michael Afton", year: 2016, emerged: "late 2016", games: ["fnaf1", "sister-location"],
    claim: "FNaF1's guard is William Afton's son, sent to his father's pizzeria.",
    sources: [{ who: "Community", what: "discussion after Sister Location's Custom Night", date: "2016-12", reliability: "secondary" }],
    verdict: "open",
    right: "Michael does go where his father sends him [[sl-golden-freddy-cutscene-father]]. The cheques name FNaF1's guard Mike Schmidt [[fnaf1-paycheck-night5]], and the dismissal slip that follows his seventh night, which shows no name, gives \"Odor\" among its reasons [[fnaf1-custom-night-pink-slip]]. That would suit a man whose body is rotting [[sl-custom-night-decay]].",
    wrong: "That is all there is: a first name and one word. The 1987 guard Fritz Smith is dismissed for the same word [[fnaf2-pink-slip-fritz-smith]], and no record ties any guard to the Aftons. The model rates the identification low and does not use it.",
    scott: "He has not addressed it in any statement on record here.",
    modelSection: "open",
  },
  {
    id: "c-miketrap", name: "Miketrap", year: 2016, emerged: "Dec 2016", games: ["sister-location", "fnaf3"],
    claim: "Michael, not William, is inside Springtrap.",
    sources: [{ who: "Community", what: "post-Sister Location Custom Night discussion", date: "2016-12", reliability: "secondary" }],
    verdict: "wrong",
    right: "It took Sister Location's cutscenes seriously: a man who rots and turns purple [[sl-custom-night-decay]], and a speech in which the machines \"thought I was you\" [[sl-golden-freddy-cutscene-they-thought-i-was-you]]. That line has the son taken for the father.",
    wrong: "The speech is addressed to his father, and a rabbit-eared figure steps out of the dark as it ends [[sl-golden-freddy-cutscene-father]] [[sl-golden-freddy-cutscene-springtrap]]: the son is the speaker, not the rabbit. The figure who dies in the suit is the killer the five ghosts corner [[fnaf3-n5-springlock-death]], and the salvaged rabbit's voice is credited as William Afton [[ffps-credits-william-afton]].",
    scott: "On 6 November 2017 he removed the clue that one fan had given for it. The \"robotic\" sound of Michael's last line was an accident of slowing the recording down: \"It wasn't intended to sound robotic.\" [[scott-2017-michael-voice-not-robotic]] The same day he pointed fans upset about \"Miketrap\" to Game Theory's episode [[scott-2017-matpat-final-theory]].",
    modelSection: "michael",
  },
  {
    id: "c-literal-purple", name: "Purple Guy is literally purple", year: 2016, emerged: "2016–17", games: ["fnaf2", "fnaf3", "sister-location"],
    claim: "The killer's purple sprite shows his real skin, which is why Michael turns purple too.",
    sources: [{ who: "Community", what: "debate over the sprites after Sister Location's Custom Night cutscenes", date: "2016-12", reliability: "secondary" }],
    verdict: "wrong",
    right: "Purple does mark the killer in the early minigames [[fnaf2-take-cake-to-the-children]] [[fnaf3-n5-springlock-death]], and Michael's skin really does turn purple as his body rots [[sl-custom-night-decay]].",
    wrong: "Purple is a drawing convention, not a skin colour. Sister Location's purple walker is the son, not the killer, and his colour comes with the decay that follows the scooping [[sl-real-ending-scooped-mirror]] [[sl-custom-night-decay]]. FNaF World's playable Purpleguy says \"I'm just a game sprite.\" [[fw-purpleguy-sprite-disclaimer]] That is a joke, in a game outside the story, and it agrees.",
    scott: "In 2017 he listed \"Purpleguy being literally purple\" among the ideas that had upset fans [[scott-2017-matpat-final-theory]], and called such things \"misunderstood (or not conveyed properly by me)\" [[scott-2017-misunderstood-not-reveals]]. In the 2018 interview (machine transcript) he still spoke of a \"purple corpse\" inside Springtrap [[scott-2018-interview-purple-guy-in-springtrap]]; the phrase is said in passing and should not be pressed.",
    modelSection: "killer",
  },
  {
    id: "c-cc-golden-freddy", name: "The crying child is Golden Freddy", year: 2017, emerged: "Nov 2017", games: ["fnaf4", "fnaf1"],
    claim: "The bitten child's spirit is Golden Freddy.",
    sources: [{ who: GT, what: "FNAF, The FINAL Theory! (pt. 2)", date: "2017-11-05", url: "https://www.youtube.com/watch?v=uhgMZ8w9lb8", reliability: "primary" }],
    verdict: "open",
    right: "The link it saw is real. The boy is bitten by a yellow bear [[fnaf4-the-bite]]. In Ultimate Custom Night the Death Coin, used on Golden Freddy, makes Fredbear attack the player, and no text explains it [[ucn-death-coin-fredbear]]. A Nightmare there says it was \"remade\" by the one the player should not have killed [[ucn-nightmare-freddy-toysnhk]]. The model keeps one presence that is both the crying child and the yellow bear's child as its strongest alternative.",
    wrong: "The count of the dead decides against it. In seven counts of the dead the games give four and one more, and in four of the seven the one more is marked by the yellow bear: Golden Freddy's jumpscare ends Give Gifts, Give Life, after four children are given masks [[fnaf2-give-gifts-give-life]], and the fifth child at Happiest Day wears a golden mask [[fnaf3-happiest-day]]. A fifth gravestone, its name hidden, stands beside four named ones [[ffps-lorekeeper-gravestones]]. The crying child is not one of the five missing children, and after his last scene no record places him anywhere [[fnaf4-night6-fade-order]]. The model reads Golden Freddy as the fifth of the five, at medium confidence.",
    scott: "He told fans to watch the episode and said it was \"not 100%\", without saying which parts were right [[scott-2017-matpat-final-theory]]. In 2014 his answer had been: \"I can't explain Golden Freddy.\" [[scott-2014-cant-explain-golden-freddy]]",
    modelSection: "golden",
  },
  {
    id: "c-final-theory", name: "Game Theory's \"FINAL Theory\"", year: 2017, emerged: "Oct–Nov 2017", games: ["fnaf4", "sister-location", "fnaf3"],
    claim: "William is the killer and Springtrap; Michael is not Springtrap; FNaF4 is 1983; the crying child is Golden Freddy.",
    sources: [{ who: GT, what: "FNAF, The FINAL Theory! (pt. 1)", date: "2017-10-28", url: "https://www.youtube.com/watch?v=nKpDN_V-jZs", reliability: "primary" }, { who: GT, what: "FNAF, The FINAL Theory! (pt. 2)", date: "2017-11-05", url: "https://www.youtube.com/watch?v=uhgMZ8w9lb8", reliability: "primary" }, { who: "Reddit", what: "episode thread with Scott's comment", date: "2017-11-06", url: RS, reliability: "primary" }],
    verdict: "mostly-right",
    right: "Three of its four claims hold. William Afton is the killer and the body in the rabbit [[fnaf3-n5-springlock-death]] [[ffps-credits-william-afton]]. Michael is the son who speaks to him, not the rabbit [[sl-golden-freddy-cutscene-father]]. And FNaF4's week is the one whose only printed year is 1983 [[fnaf4-fredbear-and-friends-1983]].",
    wrong: "The fourth is where the model differs. It reads Golden Freddy as the fifth of the five missing children, because seven counts of the dead give four and one more, and the yellow bear marks the one more in four of them [[fnaf2-give-gifts-give-life]] [[fnaf3-happiest-day]]. The crying child sharing the yellow bear is kept as the strongest alternative, not as the answer.",
    scott: "He told fans upset about \"Miketrap\", about \"Purpleguy being literally purple\" or \"hung up on 1983 vs 1987\" to watch it, and said it was \"not 100%\" [[scott-2017-matpat-final-theory]]. He did not go through it point by point. Some of what he had meant to answer with a new game, he wrote, had now been \"answered(!), by MatPat!\" [[scott-2017-matpat-answered-some-things]]",
    modelSection: "killer",
  },
  {
    id: "c-henry", name: "The Cassette Man is Henry", year: 2017, emerged: "Dec 2017", games: ["ffps"],
    claim: "The voice on Pizzeria Simulator's tapes is Henry, Afton's partner: a name taken from the novels, which no game prints and this archive does not use.",
    sources: [{ who: "Community", what: "name imported from the novel trilogy", date: "2017-12", reliability: "secondary" }],
    verdict: "open",
    right: "Part of it fits what the game gives. The Cassette Man speaks of \"prisons of my making\" [[ffps-insanity-small-souls-prisons]], calls the one he sends to Hell \"old friend\" [[ffps-completion-old-friend-hell]], and speaks to a daughter [[ffps-completion-my-daughter]]. That the two men were partners in the restaurants is what the model itself reads into those lines. Secret of the Mimic adds a customer called \"Hen\", who is to be warned about the new springlocks [[secret-of-the-mimic-mail-springlocks-hen]] and who sends a change order [[secret-of-the-mimic-log-build-to-spec]].",
    wrong: "The name comes from the novels: no game prints it, and this archive does not use it. The credits call the part only \"Cassette Man\" [[ffps-credits-cassette-man]], so \"Hen\" has no name to match; the model rates that link low and does not tell it. Nor does any game call the two men partners, founders or owners: the game's word is \"old friend\" [[ffps-completion-old-friend-hell]]. Of the first of the novels Scott wrote in 2015: \"The games and the books should be considered to be separate continuities\" [[scott-2015-books-separate-continuity]]. Leaving the books out altogether is this archive's own policy.",
    modelSection: "partners",
  },
  {
    id: "c-ucn-hell", name: "UCN is William Afton's hell", year: 2018, emerged: "Jun–Jul 2018", games: ["ucn"],
    claim: "UCN's player is William, trapped in an afterlife punishment after the FFPS fire.",
    sources: [{ who: GT, what: "We Were Right ALL ALONG!", date: "2018-07-22", url: "https://www.youtube.com/watch?v=PV9jdolesMI", reliability: "primary" }],
    verdict: "open",
    right: "The model now leans this way, and it is no more than a lean. The hardest lines in the game read as a judge's words to a murderer: \"This time, death cannot save you.\" [[ucn-nightmarionne-lines]] \"I AM YOUR WICKEDNESS... MADE OF FLESH.\" [[ucn-nightmare-lines]] The game before it ends by sending one \"old friend\" to Hell [[ffps-completion-old-friend-hell]], and a voice in this one refuses release: \"I will hold you here.\" [[ucn-orville-he-tried-to-release]]",
    wrong: "No line names the player [[ucn-protagonist-unnamed-killer]], and in the archive's records Ultimate Custom Night never says \"Hell\": the word is Pizzeria Simulator's. Michael is the full alternative, behind by a narrow margin. Scrap Baby says to the player what was said to him, \"You won't die\" [[ucn-scrap-baby-lines]] [[sl-you-wont-die]], and Old Man Consequences speaks to his listener as someone other than \"the demon\" [[ucn-omc-ending]]. With William in the office, that line needs another listener.",
    scott: "No statement of his on record here says who the player is, or whether Ultimate Custom Night is canon. It began as \"an Ultimate Custom Night for Pizzeria Simulator\" [[scott-2018-ucn-for-pizzeria-simulator]], and in the 2018 interview (machine transcript) he called it the \"capstone\" he felt he needed [[scott-2018-interview-ucn-capstone]].",
    modelSection: "ucn",
  },
  {
    id: "c-ucn-michael", name: "UCN's player is Michael Afton", year: 2018, emerged: "Jun–Jul 2018", games: ["ucn"],
    claim: "The one in UCN's office is Michael, who stayed in the FFPS fire, and \"the one you should not have killed\" is the brother he put in Fredbear's mouth.",
    sources: [{ who: "Community", what: "discussion of UCN's voice lines after release", date: "2018-07", reliability: "secondary" }],
    verdict: "open",
    right: "It is the full alternative, and this archive argued it until its review of October 2026. Several lines fit it better. Scrap Baby's \"You won't die\" is what a voice told Michael after he collapsed [[ucn-scrap-baby-lines]] [[sl-you-wont-die]]. Nightmare Fredbear throws FNaF4's promise back at the listener: \"Let me put you back together, then take you apart all over again.\" [[ucn-nightmare-fredbear-lines]] And Old Man Consequences says \"Leave the demon to his demons\", which on its plain sense makes his listener someone other than the demon [[ucn-omc-ending]].",
    wrong: "It strains where the game is harshest. \"This time, death cannot save you\" suits the man whom death once saved from the ghosts [[ucn-nightmarionne-lines]] [[fnaf3-n5-springlock-death]], and the talk of wickedness and misdeeds is large for what the brother did [[ucn-nightmare-lines]] [[ucn-jack-o-chica-toysnhk]]. Its best-known argument, that \"Afton\" attacks the player, counts for neither side: the model treats the roster's figures as effigies, because the roster lists Springtrap and \"Afton\" as two attackers on the same night [[ucn-roster-afton]] [[ucn-roster-two-forms-at-once]]. The model leans to William, narrowly.",
    modelSection: "ucn",
  },
  {
    id: "c-box-changed", name: "The box's meaning changed", year: 2018, emerged: "Feb 2018", games: ["fnaf4"],
    claim: "Whatever FNaF4's locked box meant in 2015, later games redirected it.",
    sources: [{ who: GT, what: "FNAF 6, What was in the BOX?", date: "2018-02-04", url: "https://www.youtube.com/watch?v=X_93Z1X0rbU", reliability: "primary" }],
    verdict: "partly-right",
    right: "Scott agreed with it once. In the 2018 interview (machine transcript), asked about MatPat's idea, he answered: \"He's absolutely right. The contents of that box have changed over the years\" [[scott-2018-box-meaning-changed]]. As transcribed, his reason was that reworking the story after FNaF4's reception changed the contents of everything that came before.",
    wrong: "In neither interview did he say what the box held before or after, and in 2024 he put it differently. In that interview (machine transcript) something was there when he made the box, the story did not go that way, and he \"never pursued it\" [[scott-2024-box-interview]]. On that account the later games did not give the box a new content; they left it behind. That Sister Location came to stand in for the box is something the model holds at low to medium confidence, and no more. See the Locked Box page for the full history.",
    scott: "In 2015 he had written that the box held \"the pieces put together\" [[scott-2015-fnaf4-box-pieces-put-together]].",
    modelSection: "open",
  },
  {
    id: "c-glitchtrap-soul", name: "Glitchtrap is William's digital soul", year: 2019, emerged: "Jun 2019", games: ["help-wanted"],
    claim: "The VR rabbit is William Afton's consciousness, carried in on scanned boards.",
    sources: [{ who: GT, what: "You Were Meant To Lose", date: "2019-06-08", url: "https://www.youtube.com/watch?v=7bn8hM9k0b0", reliability: "primary" }],
    verdict: "partly-right",
    right: "The route holds. The rabbit in the code (known as Glitchtrap, Scott's working name for it) came off old circuit boards, which the company's teams used to recreate \"performances and personalities from the past\" [[hw-handunit-vintage-control-boards]]: code on them \"seemed to take hold by itself\" [[hw-tape-05]]. So does the likeness. It presents as the killer, a person's shape in a yellow rabbit costume [[hw-rabbit-figure-appearance]], and fans decode its last message as a line of his [[hw-mobile-princess-quest-ending]]. The model reads it as something William Afton left behind.",
    wrong: "That it is his consciousness says more than the games do. No game says which machine the boards came from [[sd-which-board-unknown]], and the tapes give it no name: their word is \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]]. The one speech that plays in the hub when it is near is, by the wiki's identification, the first tape's greeting pitched down [[hw-glitchtrap-uses-tape-girl-voice]]. If that voice is the figure's own, it is what a copying program would do; the model keeps that rival reading open. It rates the whole man returned as the least likely of the three, and Pizzeria Simulator presents its fire as his end [[ffps-completion-old-friend-hell]].",
    scott: "He ruled that Help Wanted is canon [[scott-2019-help-wanted-is-canon]]. In the 2024 interview (machine transcript) he said he loves \"anything that involves possession of AI or possession of machines or circuitry\" [[scott-2024-interview-glitchtrap-possession-of-ai]], and did not say what does the possessing. He also said the character's name began as a working label [[scott-2024-interview-placeholder-names-canon]].",
    modelSection: "digital",
  },
  {
    id: "c-vanny-vanessa", name: "Vanny is Vanessa", year: 2020, emerged: "2020–21", games: ["security-breach", "help-wanted-2"],
    claim: "The woman in the rabbit costume and the security guard are the same woman.",
    sources: [{ who: "Community", what: "discussion of Security Breach's teasers and release", date: "2021-12", reliability: "secondary" }],
    verdict: "open",
    right: "The game points at it. Freddy remarks that \"Vanny\" is very like \"Vanessa\" and \"Bunny\" [[security-breach-freddy-vanny-vanessa-bunny]], and in the therapy recordings Vanessa has been buying fake fur for a costume she keeps secret [[security-breach-cd-vanessa-costume-fur]]. The name and the recordings carry the model's reading: the woman in the costume is most likely Vanessa, acting under the control of whatever writes to her, at medium confidence. One ending leaves the rabbit mask on the floor and a blonde woman, drawn as Vanessa is and not named, waiting at the doors [[security-breach-ending-redemption]]; the model takes her for Vanessa, but two women who look alike would leave the same page, so it counts for neither reading.",
    wrong: "One page counts against it at full weight. In the rooftop ending the masked woman falls and is unmasked as a blonde woman [[security-breach-rooftop-unmasked]], and the page after the credits shows a blonde woman in Vanessa's cap and uniform, alive on the roof [[security-breach-rooftop-vanessa-alive]]. The model has no account of that page. The game's cast list counts against it too, at less weight: as a fan wiki transcribes the credits, it gives \"Vanessa\" and \"Vanny\" to two performers, as two parts [[security-breach-credits-vanessa-vanny-two-parts]], though a credit names a voiced part and not a person.",
    scott: "His 2020 teasers show a guard captioned \"PROTECT\" and a figure in a rabbit costume captioned \"OBEY\" [[scottgames-site-sb-protect]] [[scottgames-site-sb-obey]]; they say nothing about whether the two are one woman. In the 2024 interview (machine transcript) he said \"I don't think that Vanny was utilized to her fullest potential\" [[scott-2024-interview-vanny-underused]], and did not say who she is.",
    modelSection: "vanny",
  },
  {
    id: "c-burntrap-afton", name: "Burntrap is William Afton", year: 2021, emerged: "Dec 2021", games: ["security-breach"],
    claim: "The burnt rabbit under the Pizzaplex is Afton returned.",
    sources: [{ who: "Community", what: "immediate reaction to Security Breach", date: "2021-12", reliability: "secondary" }],
    verdict: "open",
    right: "It may be what is left of him. The burnt rabbit under the Pizzaplex (known as Burntrap, a working name that Scott has said now stands) is found in a ruin whose sign carries the name of Pizzeria Simulator's pizzeria [[security-breach-underground-pizza-place]]. It is pieces of a rabbit shell on a bare metal frame [[security-breach-burntrap-appearance]], and the game shows it seize Freddy [[security-breach-freddy-take-control]]. The model holds, at low to medium confidence, that the body is what that fire left of the killer's rabbit.",
    wrong: "That he has returned is not shown. In the dialogue, messages and cutscenes reviewed, the figure has no lines and nobody names it [[security-breach-burntrap-name-not-in-game]]; who stood it in the recharge station is not shown, and Pizzeria Simulator presents its fire as Afton's end [[ffps-completion-old-friend-hell]]. The model says that these remains may be his, and does not say that he walks.",
    scott: "In the 2024 interview (machine transcript) he said: \"Originally, Burntrap was never supposed to move.\" It was to be glimpsed like a decaying prop, with a purpose he declined to state [[scott-2024-interview-burntrap-never-meant-to-move]]. Of Security Breach as a whole he said: \"I had a very specific story in mind and it is very different than the one that got in the game\" [[scott-2024-interview-sb-story-not-as-intended]]. In the same interview he said that the figure's name began as a working label, and that such a name stands once someone finds it in the source code [[scott-2024-interview-placeholder-names-canon]].",
    modelSection: "burntrap",
  },
  {
    id: "c-gregory-robot", name: "Gregory is a robot / the crying child", year: 2022, emerged: "Jan 2022", games: ["security-breach"],
    claim: "Gregory isn't an ordinary boy. He is an android, or the crying child rebuilt.",
    sources: [{ who: GT, what: "Don't Trust Gregory", date: "2022-01-01", url: "https://www.youtube.com/watch?v=8ANfAt4hJ6Y", reliability: "primary" }, { who: "FuhNaff", what: "Why Gregory Is The Crying Child", date: "2022-01-21", url: "https://www.youtube.com/watch?v=1RXrCNpKiAw", reliability: "primary" }],
    verdict: "wrong",
    right: "Something is odd about him, and the game says so. Freddy's scan finds no guest profile for him [[security-breach-intro-not-in-database]], and Vanessa says \"there's no record of him\" [[security-breach-vanessa-no-record]]. If therapy client 46 is Gregory, which the game never says, he also wrote programs that talk back [[security-breach-cd46-talking-programs]].",
    wrong: "Having no record in one company's systems does not make a boy a machine, and no record supports the idea. RUIN treats him as a missing boy [[ruin-missing-gregory-poster]]. A machine imitates his voice there [[ruin-mimic-reveal]], and a second Gregory voice, which the model takes for the boy himself, says on the radio that he is not at the Pizzaplex [[ruin-real-gregory-not-at-pizzaplex]]: the copy is the endoskeleton, not Gregory. Nothing ties him to the crying child either, whom no record places anywhere after FNaF4 [[fnaf4-night6-fade-order]]. The model holds that he is a human boy, at high confidence.",
    modelSection: "pizzaplex",
  },
  {
    id: "c-mimic-burntrap", name: "The Mimic is behind Burntrap and RUIN", year: 2023, emerged: "2023", games: ["ruin", "secret-of-the-mimic"],
    claim: "The costume-wearing Mimic, not Afton, is the thing under the Pizzaplex, and possibly Burntrap.",
    sources: [{ who: GT, what: "FNAF, Buried and Forgotten (Security Breach Ruin)", date: "2023-08-12", url: "https://www.youtube.com/watch?v=B4eF8n5FODM", reliability: "primary" }, { who: "RyeToast", what: "So… Is Burntrap the Mimic?!", date: "2023-09-22", url: "https://www.youtube.com/watch?v=4EFrm08oEpc", reliability: "primary" }],
    verdict: "partly-right",
    right: "For RUIN it is right. What waits behind the poured concrete is a copying endoskeleton that called Cassie down in Gregory's voice [[ruin-mimic-reveal]] [[ruin-mimic-reuses-gregory-lines]]. Its room holds worn mascot costumes, which the wiki matches to those of Murray's Costume Manor [[ruin-mimic-lair-mcm-mascot-suits]], and the guard set on it is called M.X.E.S. [[ruin-gregory-mxes-explanation]], initials that head a terminal in Murray's own house [[secret-of-the-mimic-mxes-acronym-on-screen]]. It is most likely the second, violent machine of Secret of the Mimic.",
    wrong: "Its last clause, that this machine may also be the burnt rabbit under the Pizzaplex, is where the model differs. That rabbit stands in a recharge station in the buried pizzeria [[security-breach-underground-pizza-place]], and the endoskeleton was sealed away behind concrete [[ruin-concrete-poured-over-door]]: the model reads two things, at medium confidence. It also reads the rabbit in Help Wanted's code as something other than this machine, and holds that more loosely. How a machine of 1979 came to be under that building, no game shows.",
    scott: "In the 2024 interview (machine transcript) he said: \"I think it's a really terrific antagonist and I don't think it's the last that we've seen of the Mimic.\" He said nothing that joins it to the burnt rabbit under the Pizzaplex or to Afton, and nothing that separates them [[scott-2024-interview-mimic-not-the-last]].",
    modelSection: "mimic",
  },
];

export const interactions: Interaction[] = [
  { id: "i-gug", date: "2014-10-25", title: "\"…just a simple horror game\"", kind: "clarification", confirmed: "scott-confirmed", summary: "A Christian games site asks whether his faith went into FNaF, and whether the animals stand for vices. Scott answers: \"No, Five Nights at Freddy's is just a simple horror game, although I did try to keep it relatively clean with no blood or guts.\" [[scott-2014-no-hidden-christian-messages]] In the same interview: \"I can't explain Golden Freddy.\" [[scott-2014-cant-explain-golden-freddy]] See Scott & Faith.", evidence: ["scott-2014-no-hidden-christian-messages", "scott-2014-cant-explain-golden-freddy"], external: [{ who: "Geeks Under Grace", what: "Developer Spotlight: Scott Cawthon", date: "2014-10-25", url: "https://www.geeksundergrace.com/gaming/developer-spotlight-scott-cawthon/", reliability: "primary" }] },
  { id: "i-reaction", date: "2015-07-21", title: "FNaF4 goes to YouTubers first", kind: "community-access", confirmed: "scott-confirmed", summary: "Two days before release, Scott announces that he has given Dawko and Razzbowski an early look at FNaF4, and links their reaction videos [[scott-2015-dawko-razzbowski-early-access]].", evidence: ["scott-2015-dawko-razzbowski-early-access"], external: [{ who: "Dawko", what: "FNaF4 reaction", url: "https://www.youtube.com/watch?v=J1rmfspsMvk", reliability: "primary" }, { who: "Razzbowski", what: "FNaF4 reaction", url: "https://www.youtube.com/watch?v=m7jlLmW3Zx0", reliability: "primary" }] },
  { id: "i-almost-right", date: "2015-08-24", title: "Game Theory \"getting almost everything right\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott writes that the community uncovered the story of the first three games: \"It seemed that there was nothing I could hide!\" [[scott-2015-community-uncovered-fnaf1-3]] Game Theory's video on FNaF2 was \"getting almost everything right\" [[scott-2015-game-theory-fnaf2-almost-right]]; he does not say which parts. Then FNaF4: \"no one, not a single person, found the pieces. The story remains completely hidden.\" [[scott-2015-fnaf4-story-hidden]] So the box stays shut: \"maybe some things are best left forgotten, forever.\" [[scott-2015-box-best-left-forgotten]]", evidence: ["scott-2015-community-uncovered-fnaf1-3", "scott-2015-game-theory-fnaf2-almost-right", "scott-2015-fnaf4-story-hidden", "scott-2015-box-best-left-forgotten"] },
  { id: "i-expect", date: "2015-10-20", title: "The community's expectations split FNaF4 in two", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott had wanted his Halloween update to leave FNaF4's game and lore alone, but \"the community's expectations demanded more than just a cheat menu\" [[scott-2015-community-expectations-halloween]]. He splits it in two: a 1.1 update (\"This version is canon, as it always has been.\") and a Halloween Edition that is not canon [[scott-2015-fnaf4-halloween-canon-split]].", evidence: ["scott-2015-community-expectations-halloween", "scott-2015-fnaf4-halloween-canon-split"] },
  { id: "i-books", date: "2015-12-18", title: "The novel is a separate continuity", kind: "clarification", confirmed: "scott-confirmed", summary: "As the first novel comes out, Scott writes: \"The games and the books should be considered to be separate continuities, even if they do share many familiar elements.\" [[scott-2015-books-separate-continuity]] And: \"the book is NOT intended to solve anything.\" [[scott-2015-book-not-a-guide]]", evidence: ["scott-2015-books-separate-continuity", "scott-2015-book-not-a-guide"] },
  { id: "i-dawko", date: "2016-05-12", title: "An update dedicated to Dawko", kind: "community-access", confirmed: "scott-confirmed", summary: "With Dawko in hospital, Scott dedicates FNaF World's Update 2 to him: \"He is such a vital part of the community, and I couldn't imagine it without him.\" [[scott-2016-dawko-dedication]]", evidence: ["scott-2016-dawko-dedication"] },
  { id: "i-adult", date: "2016-06-20", title: "A teaser to answer \"adult theory\"", kind: "clarification", confirmed: "scott-confirmed", summary: "A rumour reads the MAT entries of a schedule hidden in scottgames.com's page source as meaning mature [[scottgames-site-sl-source-rental-schedule]]. By 20 June the same source lists three clients, and two of them are birthday bookings and children's entertainment [[scottgames-site-sl-source-client-directory]]. Scott later recalled that he \"quickly dropped an additional teaser to clear it up\" [[scott-2017-adult-theory-teaser]]. That this change is the teaser he meant is an inference from the dates.", evidence: ["scottgames-site-sl-source-rental-schedule", "scottgames-site-sl-source-client-directory", "scott-2017-adult-theory-teaser"], external: [{ who: "Steam community", what: "Fnaf SL DeBunk: The \"Adult\" Theory", date: "2016-06-20", url: "https://steamcommunity.com/app/388090/discussions/0/358415206096519892/", reliability: "primary" }] },
  { id: "i-leak", date: "2016-07-18", title: "Debunking a fake leak", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott tells fans not to believe every post or screenshot that they find on the internet, and adds a joke at the box's expense: \"I hear you can open the box by beating nightmare mode twice in FNaF 4.\" [[scott-2016-box-sarcasm]] It is sarcasm, not a mechanic.", evidence: ["scott-2016-box-sarcasm"] },
  { id: "i-cancel", date: "2016-08-16", title: "\"CANCELLED\": \"Due to leaks.\"", kind: "prank", confirmed: "scott-confirmed", summary: "By 16 August 2016, a Sister Location teaser on scottgames.com shows only the words \"CANCELLED\" and \"Due to leaks.\" [[scottgames-site-sl-cancelled-teaser]] Hidden text in the same image turns it into news from inside the story: \"The grand opening of Circus Baby's Pizza World has apparently been cancelled due to reported gas leaks in the building.\" [[scottgames-site-sl-news-gas-leak-cancellation]]", evidence: ["scottgames-site-sl-cancelled-teaser", "scottgames-site-sl-news-gas-leak-cancellation"] },
  { id: "i-delay", date: "2016-10-04", title: "The fake Sister Location delay", kind: "prank", confirmed: "scott-confirmed", summary: "Three days before release, Scott posts that the game has become \"too dark\" and that only a \"mature\" version will come out, \"not as a part of the lore\". An edit ends the joke: \"(As most of you have figured out, the game's not delayed, see you Friday) ;)\" [[scott-2016-sl-delay-troll]]", evidence: ["scott-2016-sl-delay-troll"] },
  { id: "i-cutscenes", date: "2016-12-04", title: "Custom Night isn't canon, but its cutscenes are", kind: "clarification", confirmed: "scott-confirmed", summary: "In October Scott had written of Sister Location's Custom Night: \"It will NOT be canon.\" [[scott-2016-sl-custom-night-not-canon]] Adding its last cutscene in December, he makes the exception: \"(By the way- Cutscenes are canon.)\" [[scott-2016-cutscenes-are-canon]] That puts Michael's walk down the street, rotting as he goes, and his speech to his father in the story [[sl-custom-night-decay]] [[sl-golden-freddy-cutscene-father]]. Both fed the theory that Michael, not his father, is inside Springtrap.", evidence: ["scott-2016-sl-custom-night-not-canon", "scott-2016-cutscenes-are-canon", "sl-custom-night-decay", "sl-golden-freddy-cutscene-father"] },
  { id: "i-fnaf6", date: "2017-06-30", title: "\"…call it FNaF 6\": cancelled", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott announces that he has stopped work on the game he had been hinting at: \"With each game's release, I think the expectations get higher and higher for the next\" [[scott-2017-fnaf6-not-a-troll]]. He muses: \"Maybe I'll try my hand at a pizzeria tycoon game, who knows.\" [[scott-2017-fnaf6-cancelled-tycoon-hint]] Pizzeria Simulator comes out that December and opens as exactly that. In the 2018 interview (machine transcript) he said that he had worked on that game for a year in secret [[scott-2018-interview-ffps-made-to-resolve-plot-points]], which would put it under way when the cancellation was posted.", evidence: ["scott-2017-fnaf6-not-a-troll", "scott-2017-fnaf6-cancelled-tycoon-hint", "scott-2018-interview-ffps-made-to-resolve-plot-points"] },
  { id: "i-tff", date: "2017-09-03", title: "The Freddy Files' red scribbles aren't lore", kind: "clarification", confirmed: "scott-confirmed", summary: "Asked who wrote the red notes in the guidebook, Scott explains that they are remnants of three discarded \"author\" concepts, and that he dropped an in-universe narrator because it would have added to the lore [[scott-2017-tff-annotations-not-lore]].", evidence: ["scott-2017-tff-annotations-not-lore"] },
  { id: "i-retcon", date: "2017-09-04", title: "\"The retcon issue\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "The night before, Scott had joked that he had never had to retcon anything. Answering the reaction, he writes: \"The truth is that I've done one actual retcon in the series (although I'm not going to say where it was).\" [[scott-2017-one-retcon]] It was \"integrated pretty seamlessly\" [[scott-2017-retcon-seamless]]. Clearing up a misreading in the next game is something else, \"not really a retcon\" [[scott-2017-clarification-is-not-retcon]], and in the same post he writes: \"I used SL to clear up a misconception from FNaF 4.\" [[scott-2017-sl-cleared-fnaf4-misconception]] Nothing on record here locates the retcon; see ((open)).", evidence: ["scott-2017-one-retcon", "scott-2017-retcon-seamless", "scott-2017-clarification-is-not-retcon", "scott-2017-sl-cleared-fnaf4-misconception"] },
  { id: "i-final", date: "2017-11-06", title: "Pointing fans to the \"FINAL Theory\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott calls Game Theory's episode satisfying and important, and tells fans upset about \"Miketrap\", about \"Purpleguy being literally purple\" or \"hung up on 1983 vs 1987\" to watch it. He adds that it is \"not 100%\" [[scott-2017-matpat-final-theory]]. The points at issue were \"misunderstood (or not conveyed properly by me)\" [[scott-2017-misunderstood-not-reveals]]. To another fan the same day: \"if I make a game that contradicts one of your theories, it doesn't mean that my game is wrong, it means that your theory needs to evolve.\" [[scott-2017-games-over-theories]]", evidence: ["scott-2017-matpat-final-theory", "scott-2017-misunderstood-not-reveals", "scott-2017-games-over-theories"], external: [{ who: "Reddit", what: "episode thread", url: RS, reliability: "primary" }] },
  { id: "i-robotic", date: "2017-11-06", title: "The \"robotic\" voice was an accident", kind: "clarification", confirmed: "scott-confirmed", summary: "A fan had believed that Springtrap was Michael because Michael's voice turns robotic at the end of his speech, with Springtrap on screen. Scott answers that the sound was \"an unintended side effect of me slowing down the end of the line reading\": \"It wasn't intended to sound robotic.\" [[scott-2017-michael-voice-not-robotic]] The line is the end of Sister Location's last cutscene [[sl-golden-freddy-cutscene-father]] [[sl-golden-freddy-cutscene-springtrap]].", evidence: ["scott-2017-michael-voice-not-robotic", "sl-golden-freddy-cutscene-father", "sl-golden-freddy-cutscene-springtrap"] },
  { id: "i-ffps", date: "2017-12-04", title: "\"…something lite and without much consequence\"", kind: "prank", confirmed: "scott-confirmed", summary: "Just before release, Scott apologises in case the new game has been over-hyped: \"this is just a game for the community, something lite and without much consequence.\" [[scott-2017-ffps-lite-announcement]] [[scott-2017-ffps-apology]] Pizzeria Simulator turns out to hold the Cassette Man's trap and the fire that the game presents as the end [[ffps-completion-fire]], and a hidden certificate for players who dig [[ffps-lorekeeper-certificate]]. In the 2018 interview (machine transcript) he said its purpose was \"just to resolve some plot points that people wanted to see\" [[scott-2018-interview-ffps-made-to-resolve-plot-points]].", evidence: ["scott-2017-ffps-apology", "scott-2017-ffps-lite-announcement", "ffps-completion-fire", "ffps-lorekeeper-certificate", "scott-2018-interview-ffps-made-to-resolve-plot-points"] },
  { id: "i-ucn-vote", date: "2018-02-16", title: "The community picks a custom night", kind: "community-access", confirmed: "scott-confirmed", summary: "Scott asks players what Pizzeria Simulator's free update should be, and then announces: \"Based on the communities response to the update ideas, I've decided to start working on an Ultimate Custom Night for Pizzeria Simulator!\" [[scott-2018-ucn-for-pizzeria-simulator]] It would come without \"teasers and cryptic hints\" [[scott-2018-custom-night-no-cryptic-hints]]. None of his posts on record here says whether Ultimate Custom Night is canon.", evidence: ["scott-2018-ucn-for-pizzeria-simulator", "scott-2018-custom-night-no-cryptic-hints"] },
  { id: "i-troll", date: "2018-06-21", title: "\"I actually did learn my lesson from FFPS\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "In a comment about the Ultimate Custom Night demo, Scott looks back on Pizzeria Simulator: \"Trolls are funny, but taken too far can make people legitimately upset.\" [[scott-2018-ffps-troll-lesson]] He does not say what the troll was. It is usually read as his announcing that game as \"something lite and without much consequence\" [[scott-2017-ffps-lite-announcement]].", evidence: ["scott-2018-ffps-troll-lesson", "scott-2017-ffps-lite-announcement"] },
  { id: "i-hippo", date: "2018-06-27", title: "\"…sometimes, a story's just a story\"", kind: "in-game-nod", confirmed: "fan-inferred", summary: "Ultimate Custom Night's Mr. Hippo rambles that \"not every story has to have significance\" [[ucn-mr-hippo-just-a-story]]. It is widely read as a wink at theorists; the game does not say so.", evidence: ["ucn-mr-hippo-just-a-story"] },
  { id: "i-matpat-box", date: "2018-08-08", title: "\"He's absolutely right\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "In his first interview with Dawko, asked about MatPat's idea that the box's contents changed over time, Scott answers: \"He's absolutely right. The contents of that box have changed over the years\" [[scott-2018-box-meaning-changed]]. He does not say what it held before or after. The archive's record of this interview is a machine transcript of the video.", evidence: ["scott-2018-box-meaning-changed"], external: [DAWKO_2018] },
  { id: "i-unanswered", date: "2018-08-08", title: "Two questions he would not answer", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "From the same interview (machine transcript). Asked which FNaF3 ending really happened, Scott says \"The answer is very interesting. The answer is complex.\" and declines to give it [[scott-2018-interview-fnaf3-ending-unanswered]]. Asked whose springlock suit the player hides in on Night 4 of Sister Location, he declines again and leaves it as a topic of discussion [[scott-2018-interview-sl-suit-question-unanswered]].", evidence: ["scott-2018-interview-fnaf3-ending-unanswered", "scott-2018-interview-sl-suit-question-unanswered"], external: [DAWKO_2018] },
  { id: "i-lunatic", date: "2019-05-28", title: "Scott's own photo for the in-game \"indie developer\"", kind: "in-game-nod", confirmed: "scott-confirmed", summary: "One poster in Help Wanted's intro ride is a photograph of Scott, whom the game does not name [[hw-intro-indie-developer-poster]], and the ride's narration blames most of the old stories on \"a complete lunatic (lawsuits pending)\" [[hw-intro-complete-lunatic]]. Four months later he says what that makes canon: \"Only the existence of a game developer that supposedly made video games based on actual events that may or may not be a cover up by Fazbear Entertainment is canon.\" [[scott-2019-only-game-developer-existence-canon]] Both hedges are his. He adds that he used his own picture \"for this indie developer\", and that this does not necessarily make the developer him [[scott-2019-indie-dev-photo]].", evidence: ["hw-intro-indie-developer-poster", "hw-intro-complete-lunatic", "scott-2019-only-game-developer-existence-canon", "scott-2019-indie-dev-photo"] },
  { id: "i-mock", date: "2019-08-08", title: "\"stopped caring after dream theory....\"", kind: "prank", confirmed: "scott-confirmed", summary: "By 8 August 2019, a teaser on fnafworld.com shows the number 58 with five invented complaints hidden around it. One, credited to a \"reddit user\", reads \"stopped caring after dream theory....\" [[scottgames-site-2019-fnafworld-58-mock-quotes]] It is the only place on record here where Scott uses the theory's name, and it is a joke: it rules nothing in or out.", evidence: ["scottgames-site-2019-fnafworld-58-mock-quotes"] },
  { id: "i-face", date: "2019-09-29", title: "Family photos aren't clues, he implies", kind: "clarification", confirmed: "scott-confirmed", summary: "Scott reveals that the hidden face in Ultimate Custom Night is a photo of his own son [[scott-2019-ucn-child-face-jason]] [[ucn-toysnhk-face]]. He lists his own photos in FNaF4 as well, a mountain range, a snowman and a mockingbird, and implies without saying it outright that they carry no lore [[scott-2019-fnaf4-photos-no-lore]].", evidence: ["scott-2019-ucn-child-face-jason", "ucn-toysnhk-face", "scott-2019-fnaf4-photos-no-lore"] },
  { id: "i-novels", date: "2020-01-29", title: "\"…look to the novels to fill in some of blanks to the past!\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "\"Let me at least say this; future games will look forward; but look to the novels to fill in some of blanks to the past!\" [[scott-2020-novels-fill-blanks]] Asked which novels, he answers the same day: \"I'm referring to the new Fazbear Frights series!\" [[scott-2020-novels-means-fazbear-frights]] In 2018 he had announced that series as stories \"some connected directly to the games, and some not\" [[scott-2018-frights-some-connected-to-games]], and no statement on record here says which. This archive leaves the books out as its own policy, not because Scott ruled them out.", evidence: ["scott-2020-novels-fill-blanks", "scott-2020-novels-means-fazbear-frights", "scott-2018-frights-some-connected-to-games"] },
  { id: "i-retire", date: "2021-06-17", title: "Retirement", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "By 17 June 2021 Scott's retirement message is on scottgames.com: \"Is this the end of FNAF? No. This just means that someone else will eventually be running the show; someone of my choosing, and someone that I trust.\" [[scottgames-site-2021-retirement-not-end]]", evidence: ["scottgames-site-2021-retirement-not-end"] },
  { id: "i-2024", date: "2024-08-04", title: "The box, one last time", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "In his second interview with Dawko (machine transcript): \"All of that to say, there is something in the box, but I never pursued it, and I don't know if I can find it again.\" [[scott-2024-box-interview]] As transcribed, he also said that something was definitely there when he made the box, and that the progression of the story did not go there.", evidence: ["scott-2024-box-interview"], external: [DAWKO_2024] },
  { id: "i-names", date: "2024-08-04", title: "Scott on two working names", kind: "clarification", confirmed: "scott-confirmed", summary: "From the same interview (machine transcript). Scott explains that \"Glitchtrap\" and \"Burntrap\" began as temporary planning names that ended up in the source code: \"once someone finds them in the source code, that's it. Like, that's the canon name now, and there's nothing I can do about it\" [[scott-2024-interview-placeholder-names-canon]]. As far as the games' transcripts show, neither name is printed or spoken in a game [[hw-tape-girl-calls-it-the-anomaly]] [[security-breach-burntrap-name-not-in-game]].", evidence: ["scott-2024-interview-placeholder-names-canon", "hw-tape-girl-calls-it-the-anomaly", "security-breach-burntrap-name-not-in-game"], external: [DAWKO_2024] },
  { id: "i-sb-story", date: "2024-08-04", title: "Security Breach was not the story he had in mind", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Also from the 2024 interview (machine transcript): \"I had a very specific story in mind and it is very different than the one that got in the game\" [[scott-2024-interview-sb-story-not-as-intended]]. And: \"Originally, Burntrap was never supposed to move.\" [[scott-2024-interview-burntrap-never-meant-to-move]] He says RUIN was made to put it right, and does not say what his own story was.", evidence: ["scott-2024-interview-sb-story-not-as-intended", "scott-2024-interview-burntrap-never-meant-to-move"], external: [DAWKO_2024] },
];
