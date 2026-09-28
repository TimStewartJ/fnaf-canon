/**
 * Scott Cawthon's Christian background, and what it does (and doesn't) change about reading the games.
 * Evidence policy: Scott's own words are evidence records ([[id]]); his pre-FNaF catalogue comes from archived
 * pages listed as external sources. Biography never establishes an in-universe fact. It is used only to weigh
 * how literally to read language the games already contain.
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
    short: "His words are; his beliefs don't settle any in-universe fact.",
    body: [
      "Scott is a professing Christian. He said so plainly in 2021 [[scott-2021-i-am-a-christian]], and in 2014 he described spending about twelve years of his free time on Christian films and games before FNaF [[scott-2014-christian-projects-before-fnaf]]. Those statements go into the archive as evidence about the **author**. None of them says anything about who is in which suit, or when anything happened.",
      "The same interview contains the most important line on the subject. In October 2014, after FNaF1, he was asked whether FNaF hides Christian messages, such as the animatronics standing for vices. He answered **\"No\"**: it was \"just a simple horror game\", kept clean with \"no blood or guts\" [[scott-2014-no-hidden-christian-messages]]. That answer is about FNaF1 and a vice-symbolism reading; the archive does not stretch it into a ruling on every later game. Its own method is the same anyway: no allegorical decoding.",
    ],
    confidence: "high",
  },
  {
    q: "Then what does it change?",
    short: "How literally to read the afterlife language the later games put on screen.",
    body: [
      "From FFPS onward, the games speak in explicitly religious terms. The Cassette Man tells the machines' occupants to \"be still and give up your spirits. They don't belong to you\" [[ffps-completion-give-up-spirits]]. He says he believes most of them will find \"peace and perhaps more\" [[ffps-completion-peace-perhaps-more]], and tells the killer that \"the darkest pit of Hell has opened\" and not to keep \"the Devil waiting\" [[ffps-completion-old-friend-hell]]. UCN's secret ending says \"Leave the demon to his demons. Rest your own soul\" [[ucn-omc-ending]].",
      "An author who believes in souls, judgement and rest can use these words literally, not as decoration or irony. The archive therefore reads them as the story's own **moral map**, as the characters speak of it: rest owed to the innocent dead, Hell named for the man who killed them, and machines (Remnant) holding souls away from rest. The games show souls trapped in machines; they never show where anyone finally goes, so the map is a reading of what characters say, not a shown fact. It overturns no identification in the model. It sharpens the thesis, and it fits reading UCN's secret ending as addressed to someone other than \"the demon\".",
    ],
    confidence: "medium",
  },
  {
    q: "What does it not change?",
    short: "Every factual claim in the model stands or falls on the games.",
    body: [
      "Scott's biography cannot decide whether the crying child is an Afton, who Golden Freddy is, or whether UCN's player is Michael or William. Where a reading below depends on his faith, it is labelled as interpretation. Where Scott himself closed a door (the vice allegory), the archive keeps it closed.",
    ],
    confidence: "high",
  },
];

export const authorTimeline: AuthorStep[] = [
  {
    id: "a-noah", date: "2004", dateBasis: "Year given on the archived Hope Animation film page (a later DVD listing gives 2005).", phase: "faith-work",
    title: "Noah's Ark",
    body: "A computer-animated retelling of the biblical flood, later sold on Hope Animation, a UK-run Christian media website that hosted Scott's films. Its blurb: the story \"isn't about destruction; it's about hope and the promise of a new beginning for all who believe\".",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [{ who: HOPE_WHO, what: "Noah's Ark (2004)", date: "2009-11-02", url: "https://web.archive.org/web/20091102054953/http://www.hopeanimation.com:80/animations/noahs-ark", reliability: "secondary" }],
  },
  {
    id: "a-pilgrim-film", date: "2005", dateBasis: "Year given on the archived Hope Animation film page.", phase: "faith-work",
    title: "The Pilgrim's Progress (film)",
    body: "An animated adaptation of John Bunyan's allegory: a young man named Christian journeys from the City of Destruction to the Celestial City, through the Swamp of Despond and past the monster Apollyon. A reviewer on the site wrote of being moved to tears by \"Mr. Cawthon's version\".",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [{ who: HOPE_WHO, what: "The Pilgrim's Progress (2005)", date: "2009-11-02", url: "https://web.archive.org/web/20091102054958/http://www.hopeanimation.com:80/animations/the-pilgrims-progress", reliability: "secondary" }],
  },
  {
    id: "a-christmas", date: "2006", dateBasis: "Year given on the archived Hope Animation film page.", phase: "faith-work",
    title: "A Christmas Journey",
    body: "Two children stuck with a grumpy grandfather learn \"the real meaning of Christmas\" with the help of an angel. Hope Animation's 2009 artist page describes Scott as a graduate of the Art Institute of Houston and lead animator at an educational-video company, making these films in his free time.",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [
      { who: HOPE_WHO, what: "A Christmas Journey (2006)", date: "2009-11-02", url: "https://web.archive.org/web/20091102054946/http://www.hopeanimation.com:80/animations/a-christmas-journey", reliability: "secondary" },
      { who: HOPE_WHO, what: "Our Artists: Scott Cawthon", date: "2009-11-02", url: "https://web.archive.org/web/20091102055010/http://www.hopeanimation.com:80/artists/", reliability: "secondary" },
    ],
  },
  {
    id: "a-pilgrim-game", date: "c. 2011", dateBasis: "The archived shop page carries an October 2011 review of the demo; screenshots were uploaded June 2011. GameFAQs lists 13 June 2011 (secondary).", phase: "faith-work",
    title: "The Pilgrim's Progress: The Video Game",
    body: "A PC role-playing game of the same novel. Its battles are fought with commands like **Resist with Faith**, **Pray for** and **Blessings**, against enemies such as Apollyon and Giant Despair. It is the clearest example of Scott putting theology directly into game mechanics, and the opposite of what he says he did with FNaF.",
    evidence: ["scott-2014-christian-projects-before-fnaf"],
    sources: [{ who: HOPE_WHO, what: "The Pilgrim's Progress Video Game (shop page)", date: "2012-02-08", url: "https://web.archive.org/web/20120208223723/http://hopeanimation.com/shop/pilgrims-progress-video-game/", reliability: "secondary" }],
    image: "scott-pilgrims-progress-game-cover.jpg",
  },
  {
    id: "a-beaver", date: "2013", dateBasis: "Scott describes it as before FNaF; the game is usually identified as Chipper & Sons Lumber Co. (2013, secondary).", phase: "turn",
    title: "A beaver that looked like an animatronic",
    body: "A family-friendly beaver game was mocked online because its hero \"looked like a scary animatronic\". After a deep depression, Scott decided he could make \"something a lot scarier than that\" [[scott-2014-beaver-game-origin]]. He frames the whole turn in faith terms: after his Christian projects failed, he stopped feeling \"led\" to make another, and \"the events of my life\" led to FNaF [[scott-2014-christian-projects-before-fnaf]].",
    evidence: ["scott-2014-beaver-game-origin", "scott-2014-christian-projects-before-fnaf"],
  },
  {
    id: "a-desolate", date: "2013–2014", dateBasis: "Free on scottgames.com by October 2013 (Hope Animation post); Steam release 2014.", phase: "turn",
    title: "The Desolate Hope",
    body: "Not a Christian game: a coffee-pot robot protects a human embryo left on an abandoned station. Scott said the game \"places a very high value on human life, even at its smallest\" [[scott-2014-desolate-hope-human-life]]. It is his last major release before FNaF.",
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
    body: "No religious language at all. Scott later said he kept it \"relatively clean with no blood or guts\" [[scott-2014-no-hidden-christian-messages]]. FNaF1 depicts its deaths indirectly, through newspapers and a stuffed-suit game over. An unshown death still needs other in-game evidence.",
    evidence: ["scott-2014-no-hidden-christian-messages", "scott-2014-fnaf1-store-freddybear"],
  },
  {
    id: "a-gug", date: "2014-10-25", dateBasis: "Publication date of the Geeks Under Grace interview.", phase: "statement",
    title: "\"No\": not an allegory",
    body: "In a written interview with a Christian games site, Scott says FNaF hides no Christian messages [[scott-2014-no-hidden-christian-messages]], that \"it's not your work but you yourself that makes the difference\" [[scott-2014-faith-and-work]], and that his favourite verse is Psalm 46:10, \"Be still, and know that I am God\" [[scott-2014-favorite-verse-psalm-46-10]]. Asked about Golden Freddy: \"I can't explain Golden Freddy\" [[scott-2014-cant-explain-golden-freddy]].",
    evidence: ["scott-2014-no-hidden-christian-messages", "scott-2014-faith-and-work", "scott-2014-favorite-verse-psalm-46-10", "scott-2014-cant-explain-golden-freddy"],
    sources: [{ who: "Geeks Under Grace", what: "Developer Spotlight: Scott Cawthon", date: "2014-10-25", url: "https://www.geeksundergrace.com/gaming/developer-spotlight-scott-cawthon/", reliability: "primary" }],
  },
  {
    id: "a-ffps", date: "2017-12-04", dateBasis: "FFPS's Steam release.", phase: "fnaf",
    title: "Hell, the Devil, and \"peace and perhaps more\"",
    body: "Earlier games had already spoken of rest; FFPS is the first to name Hell and the Devil. The Cassette Man tells the killer that \"the darkest pit of Hell\" has opened for him [[ffps-completion-old-friend-hell]], tells the trapped children to \"be still and give up your spirits\" [[ffps-completion-give-up-spirits]], and says he believes there is \"peace and perhaps more\" after the smoke clears [[ffps-completion-peace-perhaps-more]]. \"Be still\" is also the opening of Scott's favourite verse; the echo is noted here, not built on.",
    evidence: ["ffps-completion-old-friend-hell", "ffps-completion-give-up-spirits", "ffps-completion-peace-perhaps-more"],
  },
  {
    id: "a-ucn", date: "2018-06-27", dateBasis: "UCN's Steam release.", phase: "fnaf",
    title: "\"Leave the demon to his demons\"",
    body: "UCN's secret ending tells its player to \"Leave the demon to his demons. Rest your own soul. There is nothing else.\" [[ucn-omc-ending]]. Happy Frog's hidden line gives the other side: \"I will never let you rest\" [[ucn-happy-frog-never-rest]].",
    evidence: ["ucn-omc-ending", "ucn-happy-frog-never-rest"],
  },
  {
    id: "a-2021", date: "2021-06-12", dateBasis: "Date of Scott's Reddit post.", phase: "statement",
    title: "\"I'm a Christian… I believe in God\"",
    body: "Answering criticism of his political donations, Scott states his beliefs plainly [[scott-2021-i-am-a-christian]]. Days later he retires from active development, saying FNaF isn't ending [[scottgames-site-2021-retirement-not-end]].",
    evidence: ["scott-2021-i-am-a-christian", "scottgames-site-2021-retirement-not-end"],
    sources: [{ who: "Scott Cawthon (Reddit)", what: "My response, and maybe last post.", date: "2021-06-12", url: "https://www.reddit.com/r/fivenightsatfreddys/comments/nybyo1/my_response_and_maybe_last_post/", reliability: "primary" }],
  },
];

/** The religious and afterlife vocabulary the games themselves use, grouped by what it does in the story. */
/** A line is an evidence id, or [id, text] when the record has no short verbatim quote to show. */
export type LexLine = string | [string, string];
export const lexicon: { id: string; theme: string; color: string; gloss: string; lines: LexLine[] }[] = [
  {
    id: "rest", theme: "Rest for the dead", color: "#69db7c",
    gloss: "Rest is the proper end for the dead children, and the thing the machines deny them.",
    lines: ["ffps-insanity-tiny-breaths", "ffps-completion-rest", "fw-clock-ending-pieces-in-place", ["fnaf3-happiest-day", "Shown, not said: Happiest Day. The masked children vanish, the masks fall and balloons rise."], "ucn-happy-frog-never-rest"],
  },
  {
    id: "spirits", theme: "Spirits that don't belong to the machines", color: "#74c0fc",
    gloss: "Souls are real in this world, and the machines hold them wrongly: \"prisons\", not homes.",
    lines: ["ffps-completion-give-up-spirits", "ffps-insanity-small-souls-prisons", "ffps-scrap-baby-completion-monologue"],
  },
  {
    id: "beyond", theme: "Something beyond", color: "#b197fc",
    gloss: "Only one line reaches past rest, and it is the speaker's belief rather than a shown fact.",
    lines: ["ffps-completion-peace-perhaps-more"],
  },
  {
    id: "hell", theme: "Hell, the Devil, the monster", color: "#ff6b6b",
    gloss: "Reserved for the killer. No one else in the archive's records is sent there.",
    lines: ["ffps-completion-old-friend-hell", "ffps-insanity-monster-helped-create", "ucn-omc-ending"],
  },
  {
    id: "atone", theme: "Atonement and redemption", color: "#ffd43b",
    gloss: "People who did wrong are offered a way to put it right, at a cost.",
    lines: ["ffps-completion-tutorial-atonement", "ffps-completion-brave-volunteer", "ffps-completion-shut-out", "security-breach-ending-redemption"],
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
    body: "Scott was asked this exact question in October 2014, after FNaF1, and said no [[scott-2014-no-hidden-christian-messages]]. His answer covers FNaF1; no later game suggests the reading either. The machines are machines with people inside them.",
  },
  {
    claim: "The afterlife words in FFPS and UCN mean what they say inside the fiction.",
    status: "supported",
    body: "Souls in machines are the premise of the series [[ffps-insanity-small-souls-prisons]] [[ffps-scup-blueprint]]. The Cassette Man speaks of Hell, the Devil and peace as real destinations, though \"peace\" is explicitly his belief [[ffps-completion-old-friend-hell]] [[ffps-completion-peace-perhaps-more]]. Nothing in Scott's words suggests irony, and his stated beliefs make a literal reading the natural one. What the games never show is where anyone finally goes.",
    section: "thesis",
  },
  {
    claim: "The story runs on a consistent moral map: rest for the innocent, Hell for the killer, and Remnant as the thing standing in between.",
    status: "consistent",
    body: "Every line about rest is addressed to victims or to those who tried to save them [[ffps-completion-rest]] [[fw-clock-ending-pieces-in-place]]; the one line in the records that names Hell is addressed to the killer [[ffps-completion-old-friend-hell]]. The machines deny the dead their rest [[ffps-insanity-tiny-breaths]]. Fire is the attempt to end that, and it keeps failing (see the thesis). The pattern in the lines is verifiable; the map is the archive's reading of it.",
    section: "faith",
  },
  {
    claim: "UCN is William Afton's Hell.",
    status: "open",
    body: "The faith lens does not settle this. It leans slightly the other way: FFPS names Hell only for the killer, and UCN's secret ending tells the player to \"leave the demon to his demons\" and \"rest your own soul\" [[ucn-omc-ending]], which separates the player from \"the demon\". The line names neither figure, so it fits the model's Michael reading without settling it; that reading rests on other evidence.",
    section: "ucn",
  },
  {
    claim: "Michael's story is a redemption arc.",
    status: "consistent",
    body: "If the model's identifications hold, the older brother's cruelty ends in a death [[fnaf4-give-fredbear-a-kiss]], he volunteers to stay in the fire [[ffps-completion-brave-volunteer]], and he is finally told to rest [[ucn-omc-ending]]. That shape suits Scott's worldview, but it is only as strong as the identifications it depends on.",
    section: "michael",
  },
  {
    claim: "The Cassette Man's \"be still\" quotes Scott's favourite verse.",
    status: "noted",
    body: "Scott's favourite verse begins \"Be still\" [[scott-2014-favorite-verse-psalm-46-10]], and those are the Cassette Man's words to the trapped children [[ffps-completion-give-up-spirits]]. It is two common words, and Scott never linked them. Recorded as a possible echo; nothing rests on it.",
  },
  {
    claim: "Golden Freddy's identity was fixed from the start.",
    status: "open",
    body: "In October 2014 Scott said \"I can't explain Golden Freddy\" [[scott-2014-cant-explain-golden-freddy]]. That may be coy or sincere; either way he disclosed no explanation. The model reads Golden Freddy's role from later games [[fnaf2-give-gifts-give-life]] [[fnaf3-happiest-day]].",
    section: "golden",
  },
];
