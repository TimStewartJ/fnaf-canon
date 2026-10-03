/**
 * Scott Cawthon's Christian background, and what it does (and doesn't) change about reading the games.
 *
 * Evidence policy: Scott's own words are evidence records ([[id]]) and are quoted exactly as the records give them.
 * His pre-FNaF catalogue comes from archived pages, listed as external sources and used only for titles, years and
 * descriptions. Biography never establishes a fact inside the story. It is used only to weigh how plainly to read
 * words that the games already put in characters' mouths.
 *
 * The page follows the theory's rulings. The moral vocabulary is the characters' own, it arrives with Pizzeria
 * Simulator, and it reads consistently on either reading of Ultimate Custom Night, so it decides neither. Remnant
 * is no part of it: the games give that word on one blueprint and never say what it is. Ultimate Custom Night never
 * says "Hell". `section` is the id of the theory chapter that argues the point.
 */
import type { Source } from "./community";

export interface AuthorStep {
  id: string;
  date: string;
  dateBasis: string;
  phase: "faith-work" | "turn" | "fnaf" | "statement";
  title: string;
  body: string;          // rich text
  evidence: string[];
  sources?: Source[];
  image?: string;
}

export const AUTHOR_PHASE: Record<AuthorStep["phase"], { label: string; color: string }> = {
  "faith-work": { label: "Christian work", color: "#b197fc" },
  turn: { label: "Turning point", color: "#ffa94d" },
  fnaf: { label: "In the games", color: "#f4c95d" },
  statement: { label: "Scott's words", color: "#74c0fc" },
};

const HOPE_WHO = "Hope Animation (archived catalogue)";

export const authorAnswer: { q: string; short: string; body: string[]; confidence: string }[] = [
  {
    q: "Is Scott's faith part of the evidence?",
    short: "His words are; his beliefs settle no fact inside the story.",
    body: [
      "Scott is a professing Christian. In 2021 he wrote \"I'm a Christian.\" and \"I believe in God.\" [[scott-2021-i-am-a-christian]] In 2014 he described about twelve years of his free time spent on Christian films and games before FNaF [[scott-2014-christian-projects-before-fnaf]]. Those statements go into the archive as evidence about the **author**. None of them says who is in which suit, or when anything happened.",
      "The same 2014 interview has the most important line on the subject. After FNaF1 he was asked whether his Christianity had gone into the game, with hidden messages such as the animals standing for vices. He answered: **\"No, Five Nights at Freddy's is just a simple horror game, although I did try to keep it relatively clean with no blood or guts.\"** [[scott-2014-no-hidden-christian-messages]] That answer is about FNaF1 and about allegory. It does not address the afterlife words that later games put in characters' mouths, and the archive does not stretch it into a ruling on them. Its own method is the same in any case: no allegorical decoding.",
    ],
    confidence: "high",
  },
  {
    q: "Then what does it change?",
    short: "Only how plainly to take the afterlife words that the later games put in characters' mouths.",
    body: [
      "From Pizzeria Simulator on, the games use religious words. The Cassette Man tells the \"monsters trapped in the corridors\" to \"be still and give up your spirits. They don't belong to you.\" [[ffps-completion-give-up-spirits]] He says \"I believe there is peace and perhaps more waiting for you after the smoke clears.\" [[ffps-completion-peace-perhaps-more]] He tells one \"old friend\" that \"the darkest pit of Hell has opened to swallow you whole, so don't keep the Devil waiting\" [[ffps-completion-old-friend-hell]], and his daughter that \"It's time to rest\" [[ffps-completion-rest]]. In Ultimate Custom Night an old man by a lake says: \"Leave the demon to his demons. Rest your own soul. There is nothing else.\" [[ucn-omc-ending]]",
      "An author who believes in souls, judgement and rest can mean such words plainly, and nothing he has said suggests irony. So the archive reads them as the story's own **moral map**, in the characters' words: rest for the dead children, Hell named for one old friend, who is most likely the man who killed them, and for the place itself, forgetting [[ffps-completion-remaining-nearby]]. That is a reading of what characters say. The speaker qualifies the kindest of it with \"I believe\", and no game shows where anyone goes.",
      "The map decides nothing about Ultimate Custom Night. It reads consistently whoever is in that office. If it is William Afton, Hell is named for the killer, a victim keeps him, and the old man's rest is offered to a listener who is not the demon. If it is Michael, Hell is the father's and rest the son's. Consistency does not choose between them. Which way the model leans, and how lightly, is argued in ((ucn)); ((faith)) sets out the words themselves.",
    ],
    confidence: "medium for the map as a reading of the characters' words; it is a point for neither reading of Ultimate Custom Night",
  },
  {
    q: "What does it not change?",
    short: "Every factual claim in the model stands or falls on the games.",
    body: [
      "Scott's biography cannot decide whether the crying child is an Afton, who is behind the yellow bear, or whether the player of Ultimate Custom Night is William or Michael. Where a reading below leans on his faith, it is marked as interpretation. Where Scott closed a door himself, on allegory, the archive keeps it closed.",
      "The games themselves stop short of doctrine. There is no church in them. The vocabulary is small (rest, peace, Hell, the Devil, a demon, souls, spirits), every word of it is spoken by a character, and Ultimate Custom Night never says \"Hell\" at all.",
    ],
    confidence: "high",
  },
];

export const authorTimeline: AuthorStep[] = [
  {
    id: "a-noah", date: "2004", dateBasis: "Year given on the archived Hope Animation film page (a later DVD listing gives 2005).", phase: "faith-work",
    title: "Noah's Ark",
    body: "A computer-animated retelling of the biblical flood, later hosted on Hope Animation, a UK-run Christian media website. Its blurb: the story \"isn't about destruction; it's about hope and the promise of a new beginning for all who believe\".",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [{ who: HOPE_WHO, what: "Noah's Ark (2004)", date: "2009-11-02", url: "https://web.archive.org/web/20091102054953/http://www.hopeanimation.com:80/animations/noahs-ark", reliability: "secondary" }],
  },
  {
    id: "a-pilgrim-film", date: "2005", dateBasis: "Year given on the archived Hope Animation film page.", phase: "faith-work",
    title: "The Pilgrim's Progress (film)",
    body: "An animated adaptation of John Bunyan's allegory: a young man named Christian sets out for the Celestial City, struggles through the Swamp of Despond and does battle with Apollyon. A reviewer on the site wrote of being \"almost moved to tears\" by it.",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [{ who: HOPE_WHO, what: "The Pilgrim's Progress (2005)", date: "2009-11-02", url: "https://web.archive.org/web/20091102054958/http://www.hopeanimation.com:80/animations/the-pilgrims-progress", reliability: "secondary" }],
  },
  {
    id: "a-christmas", date: "2006", dateBasis: "Year given on the archived Hope Animation film page.", phase: "faith-work",
    title: "A Christmas Journey",
    body: "Two children who always spend Christmas with a grumpy grandfather learn \"the real meaning of Christmas\", helped along the way by an angel. Hope Animation's 2009 artist page describes Scott as a graduate of the Art Institute of Houston and lead animator at a company that makes children's educational videos, creating these films in his free time.",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [
      { who: HOPE_WHO, what: "A Christmas Journey (2006)", date: "2009-11-02", url: "https://web.archive.org/web/20091102054946/http://www.hopeanimation.com:80/animations/a-christmas-journey", reliability: "secondary" },
      { who: HOPE_WHO, what: "Our Artists: Scott Cawthon", date: "2009-11-02", url: "https://web.archive.org/web/20091102055010/http://www.hopeanimation.com:80/artists/", reliability: "secondary" },
    ],
  },
  {
    id: "a-pilgrim-game", date: "c. 2011", dateBasis: "The archived shop page carries an October 2011 review of the demo; screenshots were uploaded June 2011. GameFAQs lists 13 June 2011 (secondary).", phase: "faith-work",
    title: "The Pilgrim's Progress: The Video Game",
    body: "A PC role-playing game of the same novel. Its shop page lists \"A battle system that focuses on spiritual warfare with emphasis on the importance of prayer and God's blessings.\" Its battle menu offers **Resist with** (Faith, Truth, Promise, Grace, Power), **Pray for** and **Blessings**, against enemies such as Apollyon and Giant Despair. It is the clearest example of Scott putting theology straight into game mechanics, and the opposite of what he says he did with FNaF.",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [{ who: HOPE_WHO, what: "The Pilgrim's Progress Video Game (shop page)", date: "2012-02-08", url: "https://web.archive.org/web/20120208223723/http://hopeanimation.com/shop/pilgrims-progress-video-game/", reliability: "secondary" }],
    image: "scott-pilgrims-progress-game-cover.jpg",
  },
  {
    id: "a-beaver", date: "2013", dateBasis: "Scott describes it as before FNaF; the game is usually identified as Chipper & Sons Lumber Co. (2013, secondary).", phase: "turn",
    title: "A beaver that looked like an animatronic",
    body: "\"I had made a family friendly game about a beaver before this but it was criticized online; people said the main character looked like a scary animatronic.\" He resolved to make something much scarier [[scott-2014-beaver-game-origin]]. He puts the turn in terms of faith. His Christian projects had not gone well; after a period of despair he did not feel \"led\" to make another, and \"the events of my life\" led him to the idea for FNaF [[scott-2014-christian-projects-before-fnaf]].",
    evidence: ["scott-2014-beaver-game-origin", "scott-2014-christian-projects-before-fnaf"],
  },
  {
    id: "a-desolate", date: "2013–2014", dateBasis: "Free on scottgames.com by October 2013 (Hope Animation post); Steam release 2014.", phase: "turn",
    title: "The Desolate Hope",
    body: "Not a Christian game: a coffee-pot robot protects a human embryo on an abandoned station. Scott said it was not designed with abortion in mind, and that the game \"places a very high value on human life\" [[scott-2014-desolate-hope-human-life]]. It is his last major release before FNaF, and it is recorded here as biography only.",
    evidence: ["scott-2014-desolate-hope-human-life"],
    sources: [
      { who: "Hope Animation (David Hutter)", what: "More games by Scott Cawthon", date: "2013-10-13", url: "https://web.archive.org/web/20140811065425/http://hopeanimation.com/news/more-games-by-scott-cawthon/", reliability: "secondary" },
      { who: "Steam", what: "The Desolate Hope", url: "https://store.steampowered.com/app/298180/The_Desolate_Hope/", reliability: "primary" },
    ],
    image: "scott-desolate-hope-header.jpg",
  },
  {
    id: "a-fnaf1", date: "2014-08-08", dateBasis: "FNaF1's Steam release.", phase: "fnaf",
    title: "Five Nights at Freddy's",
    body: "None of the later vocabulary appears in it, as far as the archive's records of the game go: no souls, no rest, no Hell. Scott said he had tried to keep the game \"relatively clean with no blood or guts\" [[scott-2014-no-hidden-christian-messages]]. FNaF1 tells of its deaths at one remove, through newspaper clippings [[fnaf1-news-kids-vanish]] and a last phone message that ends in a scream [[fnaf1-call4-phone-guy-attacked]].",
    evidence: ["scott-2014-no-hidden-christian-messages", "fnaf1-news-kids-vanish", "fnaf1-call4-phone-guy-attacked"],
  },
  {
    id: "a-gug", date: "2014-10-25", dateBasis: "Publication date of the Geeks Under Grace interview.", phase: "statement",
    title: "\"No\": not an allegory",
    body: "In a written interview with a Christian games site, Scott says that FNaF hides no Christian messages [[scott-2014-no-hidden-christian-messages]], that \"it's not your work but you yourself that makes the difference\" [[scott-2014-faith-and-work]], and that his favourite verse is Psalm 46:10, \"Be still, and know that I am God\" [[scott-2014-favorite-verse-psalm-46-10]]. Asked for the story behind Golden Freddy, he answers: \"I can't explain Golden Freddy.\" [[scott-2014-cant-explain-golden-freddy]]",
    evidence: ["scott-2014-no-hidden-christian-messages", "scott-2014-faith-and-work", "scott-2014-favorite-verse-psalm-46-10", "scott-2014-cant-explain-golden-freddy"],
    sources: [{ who: "Geeks Under Grace", what: "Developer Spotlight: Scott Cawthon", date: "2014-10-25", url: "https://www.geeksundergrace.com/gaming/developer-spotlight-scott-cawthon/", reliability: "primary" }],
  },
  {
    id: "a-fw", date: "2016-01-21", dateBasis: "FNaF World's release date.", phase: "fnaf",
    title: "\"Rest.\"",
    body: "The earliest of these words in the archive's records. FNaF World's clock ending closes: \"The pieces are in place for you. All you have to do is find them. Rest.\" [[fw-clock-ending-pieces-in-place]] The adventure is outside the story; its framing voice echoes FNaF4 on purpose, and the model uses it as an echo and no more.",
    evidence: ["fw-clock-ending-pieces-in-place"],
  },
  {
    id: "a-ffps", date: "2017-12-04", dateBasis: "Pizzeria Simulator's Steam release.", phase: "fnaf",
    title: "Hell, the Devil, and \"peace and perhaps more\"",
    body: "Pizzeria Simulator is the first game to name Hell and the Devil. The Cassette Man tells one \"old friend\" that \"the darkest pit of Hell has opened to swallow you whole\" [[ffps-completion-old-friend-hell]]. He tells the \"monsters trapped in the corridors\" to \"be still and give up your spirits\" [[ffps-completion-give-up-spirits]], and says \"I believe there is peace and perhaps more waiting for you after the smoke clears.\" [[ffps-completion-peace-perhaps-more]] \"Be still\" also opens Scott's favourite verse [[scott-2014-favorite-verse-psalm-46-10]]. The echo is noted here, and nothing is built on it.",
    evidence: ["ffps-completion-old-friend-hell", "ffps-completion-give-up-spirits", "ffps-completion-peace-perhaps-more", "scott-2014-favorite-verse-psalm-46-10"],
  },
  {
    id: "a-ucn", date: "2018-06-27", dateBasis: "Ultimate Custom Night's Steam release.", phase: "fnaf",
    title: "\"Leave the demon to his demons\"",
    body: "In Ultimate Custom Night's secret ending an old man by a lake says, to a listener the game does not name: \"Leave the demon to his demons. Rest your own soul. There is nothing else.\" [[ucn-omc-ending]] Another voice refuses: \"I will never let you leave. I will never let you rest.\" [[ucn-happy-frog-never-rest]] The game never says \"Hell\".",
    evidence: ["ucn-omc-ending", "ucn-happy-frog-never-rest"],
  },
  {
    id: "a-2021", date: "2021-06-12", dateBasis: "Date of Scott's Reddit post.", phase: "statement",
    title: "\"I'm a Christian.\"",
    body: "Answering criticism of his political donations, Scott states his beliefs, among them: \"I'm a Christian.\" and \"I believe in God.\" [[scott-2021-i-am-a-christian]] The post says nothing about the games' story. Days later he announces his retirement, and says that FNaF is not ending [[scottgames-site-2021-retirement-not-end]].",
    evidence: ["scott-2021-i-am-a-christian", "scottgames-site-2021-retirement-not-end"],
    sources: [{ who: "Scott Cawthon (Reddit)", what: "My response, and maybe last post.", date: "2021-06-12", url: "https://www.reddit.com/r/fivenightsatfreddys/comments/nybyo1/my_response_and_maybe_last_post/", reliability: "primary" }],
  },
];

/** The religious and afterlife vocabulary the games themselves use, grouped by what it does in the story. */
/** A line is an evidence id, or [id, text] when the record has no short verbatim quote to show or the line needs a note. */
export type LexLine = string | [string, string];
export const lexicon: { id: string; theme: string; color: string; gloss: string; lines: LexLine[] }[] = [
  {
    id: "rest", theme: "Rest for the dead", color: "#69db7c",
    gloss: "Rest is what the dead children are owed, and what the Cassette Man says they cannot find while they are in the machines. FNaF World's line is an echo from outside the story.",
    lines: ["ffps-insanity-tiny-breaths", "ffps-completion-rest", "fw-clock-ending-pieces-in-place", ["fnaf3-happiest-day", "Shown, not said: Happiest Day. The masked children vanish, the masks fall and balloons rise."], "ucn-happy-frog-never-rest"],
  },
  {
    id: "spirits", theme: "Spirits that don't belong to the machines", color: "#74c0fc",
    gloss: "The characters speak of souls and spirits as real, and of the machines as holding them wrongly: \"prisons\", in the Cassette Man's word. Scrap Baby's \"little souls\" are another matter: the model reads them as the children gathered for the party, not the dead.",
    lines: ["ffps-completion-give-up-spirits", "ffps-insanity-small-souls-prisons", ["ffps-scrap-baby-completion-monologue", "“All of those little souls, in one place, just for us... a gift.” (Scrap Baby, most likely of the children coming to the party)"]],
  },
  {
    id: "beyond", theme: "Something beyond", color: "#b197fc",
    gloss: "Only one line reaches past rest, and it is the speaker's belief, not a shown fact.",
    lines: ["ffps-completion-peace-perhaps-more"],
  },
  {
    id: "hell", theme: "Hell, the Devil, the monster", color: "#ff6b6b",
    gloss: "Hell is named once, in Pizzeria Simulator, for one \"old friend\", who is most likely the killer. Ultimate Custom Night speaks of a demon and never says Hell.",
    lines: ["ffps-completion-old-friend-hell", "ffps-insanity-monster-helped-create", ["ucn-omc-ending", "“Leave the demon to his demons.” (neither the demon nor the listener is named)"]],
  },
  {
    id: "night", theme: "What the endless night is called", color: "#ffa94d",
    gloss: "The voices of Ultimate Custom Night call the place a prison, a nightmare, an afterlife or a dream, and one of them refuses release. Who is held there is the model's lean and no firmer.",
    lines: ["ucn-withered-bonnie-prison", ["ucn-nightmarionne-nightmare-you-wont-wake-from", "Nightmarionne calls it “a nightmare that you won't wake from” (the line is spoken with a stutter)."], "ucn-mr-hippo-afterlife-or-dream", "ucn-orville-he-tried-to-release"],
  },
  {
    id: "atone", theme: "Atonement", color: "#ffd43b",
    gloss: "The words of putting right belong to those who set the trap: a man who let a wound \"bleed out\", a father who could not save his daughter, a company voice that speaks of \"atoning for past mistakes\", and a volunteer who would rather stay.",
    lines: ["ffps-insanity-wound-first-inflicted", "ffps-completion-shut-out", "ffps-completion-tutorial-atonement", "ffps-completion-brave-volunteer"],
  },
];

export type ReadingStatus = "ruled-out" | "supported" | "consistent" | "open" | "noted";
export const READING_STATUS: Record<ReadingStatus, { label: string; color: string }> = {
  "ruled-out": { label: "Ruled out", color: "#ff6b6b" },
  supported: { label: "Supported", color: "#69db7c" },
  consistent: { label: "Consistent, not proof", color: "#a9e34b" },
  open: { label: "Not decided by this", color: "#74c0fc" },
  noted: { label: "Noted, not used", color: "#adb5bd" },
};

export const readings: { claim: string; status: ReadingStatus; body: string; section?: string }[] = [
  {
    claim: "FNaF's animatronics are a Christian allegory, standing for sins or vices.",
    status: "ruled-out",
    body: "Scott was asked this in October 2014, after FNaF1, and answered \"No\" [[scott-2014-no-hidden-christian-messages]]. His answer covers FNaF1; no later game suggests the reading either, and the model decodes no allegory. The machines are machines, and some of them hold the dead.",
    section: "faith",
  },
  {
    claim: "The afterlife words in FFPS and UCN mean what they say inside the fiction.",
    status: "supported",
    body: "The dead staying on in the machines is the premise of the series, and the Cassette Man says it in so many words: \"I don't know how those tiny breaths of life came to inhabit those machines.\" [[ffps-insanity-tiny-breaths]] He speaks of Hell, the Devil and peace as real destinations, though the peace is expressly his belief [[ffps-completion-old-friend-hell]] [[ffps-completion-peace-perhaps-more]]. Nothing in Scott's words suggests irony, and his stated beliefs make a plain reading the natural one. What the games never show is where anyone goes.",
    section: "faith",
  },
  {
    claim: "The story runs on a consistent moral map: rest for the innocent, Hell for the killer.",
    status: "consistent",
    body: "In the Cassette Man's last speech every word of rest goes to the dead: \"It's time to rest, for you, and for those you have carried in your arms.\" [[ffps-completion-rest]] The one line that names Hell goes to an \"old friend\" [[ffps-completion-old-friend-hell]], most likely the man who killed them. While they are in the machines, he says of the children, \"they will never find rest now. Not like this.\" [[ffps-insanity-tiny-breaths]] The fire is his attempt to end that, and the game presents it as the end [[ffps-completion-fire]]. The pattern in the lines can be checked; the map is the archive's reading of it, taken from one character's speeches.",
    section: "faith",
  },
  {
    claim: "Remnant is what keeps souls from rest.",
    status: "open",
    body: "The games do not say so. Remnant is named on one Afton Robotics blueprint, which labels an injector and a reservoir and notes that overheating \"might neutralize the effects permanently\" [[ffps-scup-blueprint]]. No game says what Remnant is, or that it holds the dead. The model reads it as the name the killer's firm gave to what it was trying to use, and says no more. An earlier version of this page made Remnant part of the moral map; that is withdrawn.",
    section: "remnant",
  },
  {
    claim: "UCN is William Afton's Hell.",
    status: "open",
    body: "The faith lens does not settle it, and the game never uses the word: Hell is named in Pizzeria Simulator, for one \"old friend\" [[ffps-completion-old-friend-hell]]. The model leans to William Afton as the one kept in that night, by a victim who refuses release [[ucn-orville-he-tried-to-release]], and it is only a lean. The moral map reads consistently either way. With William in the office, the old man's \"Rest your own soul\" [[ucn-omc-ending]] is said to some other listener. With Michael there, Hell is the father's and rest the son's.",
    section: "ucn",
  },
  {
    claim: "Michael's story is a redemption arc.",
    status: "open",
    body: "It is only as strong as three identifications, and the model grades them unequally. That Michael is the son sent underground is firm [[sl-golden-freddy-cutscene-father]]. That he is the brother whose prank ends in the bite [[fnaf4-give-fredbear-a-kiss]], and the volunteer who would rather stay in the fire [[ffps-completion-brave-volunteer]], are held at medium. That he is the one told to rest [[ucn-omc-ending]] depends on who is in that office and on whom the old man addresses, and ((ucn)) settles neither: its lean, such as it is, runs the other way. The shape would suit Scott's stated beliefs. The games do not complete it.",
    section: "michael",
  },
  {
    claim: "The Cassette Man's \"be still\" quotes Scott's favourite verse.",
    status: "noted",
    body: "Scott's favourite verse begins \"Be still\" [[scott-2014-favorite-verse-psalm-46-10]], and the Cassette Man says \"be still and give up your spirits\" [[ffps-completion-give-up-spirits]]. He says it to the \"monsters trapped in the corridors\". It is two common words, and Scott never linked them. Recorded as a possible echo; nothing rests on it.",
    section: "faith",
  },
  {
    claim: "Golden Freddy's identity was fixed from the start.",
    status: "open",
    body: "In October 2014 Scott said: \"I can't explain Golden Freddy.\" [[scott-2014-cant-explain-golden-freddy]] That may be coy or sincere; either way he disclosed no explanation then. The model reads the yellow bear from later games, as the mark of the fifth of the five children [[fnaf2-give-gifts-give-life]] [[fnaf3-happiest-day]], at medium confidence.",
    section: "golden",
  },
];
