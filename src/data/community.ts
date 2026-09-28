/**
 * The theory community, and Scott's interactions with it.
 * IMPORTANT: nothing here is evidence. Theories are referenced to show what they got right or wrong against the evidence,
 * and how they and Scott influenced each other. Every judgement cites evidence records with [[id]].
 */

export type Verdict = "confirmed" | "mostly-right" | "partly-right" | "wrong" | "open" | "superseded";

export const VERDICT: Record<Verdict, { label: string; color: string; help: string }> = {
  confirmed: { label: "Confirmed", color: "#69db7c", help: "Later games or Scott established it" },
  "mostly-right": { label: "Mostly right", color: "#a9e34b", help: "The core holds, but details were off" },
  "partly-right": { label: "Partly right", color: "#ffd43b", help: "Some of it holds, some of it doesn't" },
  wrong: { label: "Wrong", color: "#ff6b6b", help: "Later games contradict it" },
  open: { label: "Still open", color: "#74c0fc", help: "The evidence hasn't settled it" },
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

export const theories: CommunityTheory[] = [
  {
    id: "c-mangle-bite", name: "Mangle did the Bite of '87", year: 2014, emerged: "Dec 2014", games: ["fnaf2", "fnaf1"],
    claim: "The Bite of '87 happened at FNaF2's location, and the animatronic that bit was Mangle.",
    sources: [{ who: GT, what: "FNAF 2, Gaming's Scariest Story SOLVED!", date: "2014-12-09", url: "https://www.youtube.com/watch?v=d1kw1RmzrPc", reliability: "primary" }],
    verdict: "open",
    right: "It fits the setting: FNaF2's location is in 1987 [[fnaf2-paycheck-1987]], and Mangle is a mistreated, broken animatronic [[fnaf2-call3-mangle]]. That is consistency, not proof.",
    wrong: "No FNaF2 call mentions a bite at all [[fnaf2-no-bite-mention]], and nothing names the animatronic. The bite is still unplaced [[fnaf1-call1-bite-of-87]].",
    scott: "He praised the video as a whole (\"getting almost everything right\") without saying which parts were right. The praise can't be read as confirming Mangle [[scott-2015-game-theory-fnaf2-almost-right]].",
    modelSection: "bite",
  },
  {
    id: "c-phone-guy-purple", name: "Phone Guy is Purple Guy", year: 2015, emerged: "early 2015", games: ["fnaf1", "fnaf2"],
    claim: "The friendly caller and the killer are the same man.",
    sources: [{ who: GT, what: "FNAF Mysteries SOLVED (pt. 1)", date: "2015-04-26", url: "https://www.youtube.com/watch?v=GPugMe4ePEw", reliability: "primary" }],
    verdict: "wrong",
    right: "It took seriously that someone inside the company was the killer, which Fazbear's own reactions support [[fnaf2-call5-lockdown]].",
    wrong: "Phone Guy's last call ends in a scream as something attacks him [[fnaf1-call4-phone-guy-attacked]]. The killer turns out to be the designer, Mr. Afton [[sl-intro-mr-afton-board]] [[ffps-credits-william-afton]].",
    modelSection: "thesis",
  },
  {
    id: "c-springtrap-purple", name: "Springtrap is Purple Guy", year: 2015, emerged: "Mar 2015", games: ["fnaf3"],
    claim: "The man who died in the Spring Bonnie suit is the killer, and Springtrap is his body.",
    sources: [{ who: "Community consensus after FNaF3", what: "the FNaF3 Night 5 minigame", date: "2015-03", reliability: "secondary" }],
    verdict: "confirmed",
    right: "The purple man dies in the Spring Bonnie suit [[fnaf3-n5-springlock-death]], and Springtrap has a body inside [[fnaf3-springtrap-corpse-screens]]. Scraptrap says \"it's still me\" [[ffps-scraptrap-still-me]] and is credited as William Afton [[ffps-credits-william-afton]].",
    wrong: "Nothing significant.",
    scott: "His teasers played along: \"I am still here.\" and \"He always does.\" [[scottgames-fnaf3-teaser-still-here]] [[scottgames-fnaf3-teaser-he-always-does]].",
    modelSection: "springtrap",
  },
  {
    id: "c-bite-87-cc", name: "The crying child is the Bite of '87", year: 2015, emerged: "Jul 2015", games: ["fnaf4"],
    claim: "FNaF4's bite at the birthday party is the Bite of '87 Phone Guy mentioned.",
    sources: [{ who: GT, what: "FNAF 4 got it ALL WRONG!", date: "2015-07-30", url: "https://www.youtube.com/watch?v=FMJ2jZtW7cw", reliability: "primary" }],
    verdict: "wrong",
    right: "It connected the two biggest bites in the series and drove the dating debate for years.",
    wrong: "FNaF4's only printed year is 1983 [[fnaf4-fredbear-and-friends-1983]]. The '87 bite is a separate incident [[fnaf1-call1-bite-of-87]].",
    scott: "Two years later he pointed fans \"hung up on 1983 vs 1987\" to Game Theory's episode arguing for 1983 [[scott-2017-matpat-final-theory]].",
    modelSection: "bite",
  },
  {
    id: "c-adult-theory", name: "\"Adult theory\"", year: 2016, emerged: "Jun 2016", games: ["sister-location"],
    claim: "Sister Location's teasers (a chart hidden in scottgames.com's page source) hinted that the game would have 'mature' content.",
    sources: [{ who: "Steam community", what: "Fnaf SL DeBunk: The \"Adult\" Theory", date: "2016-06-20", url: "https://steamcommunity.com/app/388090/discussions/0/358415206096519892/", reliability: "primary" }],
    verdict: "wrong",
    right: "It noticed that Scott was hiding things in the site's page source, which he really was [[scottgames-site-fnaf4-html-87]].",
    wrong: "Sister Location is a horror game about a child-snatching animatronic. The 'chart' pointed at birthday-party entertainment [[sl-intro-mr-afton-board]] [[scott-2016-sl-store-text]].",
    scott: "\"When 'adult theory' happened; I could see why people were believing it, so I quickly dropped an additional teaser to clear it up\" [[scott-2017-adult-theory-teaser]]. Fans at the time credited a 'birthday' addition to the page source.",
  },
  {
    id: "c-dream-theory", name: "Dream / coma theory", year: 2015, emerged: "Dec 2015", games: ["fnaf4"],
    claim: "The whole series is the nightmares of a comatose crying child.",
    sources: [{ who: GT, what: "The Clue that SOLVES Five Nights at Freddy's!", date: "2015-12-13", url: "https://www.youtube.com/watch?v=WvpO8To1qFg", reliability: "primary" }],
    verdict: "partly-right",
    right: "Its narrower core survives. FNaF4's own nights may well be a child's nightmares: hospital props, and a flatline at the end [[fnaf4-bedside-items]] [[fnaf4-flatline]]. That part is still open.",
    wrong: "The series-wide version fails. Sister Location, FFPS and every later game show real killings and a real family, with dated documents [[sl-intro-mr-afton-board]] [[fnaf2-paycheck-1987]].",
    scott: "He said he \"used SL to clear up a misconception from FNaF 4\" but never named it [[scott-2017-sl-cleared-fnaf4-misconception]]. Many fans read it as this theory.",
    modelSection: "bite",
  },
  {
    id: "c-cc-golden-freddy", name: "The crying child is Golden Freddy", year: 2017, emerged: "Nov 2017", games: ["fnaf4", "fnaf1"],
    claim: "The bitten child's spirit is Golden Freddy.",
    sources: [{ who: GT, what: "FNAF, The FINAL Theory! (pt. 2)", date: "2017-11-05", url: "https://www.youtube.com/watch?v=uhgMZ8w9lb8", reliability: "primary" }],
    verdict: "open",
    right: "Golden Freddy and Fredbear are tied together (UCN's Death Coin summons Fredbear) [[ucn-death-coin-fredbear]], and FNaF World gives the crying child an ending with yellow eyes in the dark [[fw-clock-ending-still-your-friends]].",
    wrong: "The five-child evidence points elsewhere: a fifth body in Give Gifts, and a golden-masked child freed with the other four [[fnaf2-give-gifts-give-life]] [[fnaf3-happiest-day]]. This archive favours Golden Freddy as the fifth missing child.",
    scott: "He praised the episode but said it was \"obviously not 100%\" [[scott-2017-matpat-final-theory]].",
    modelSection: "golden",
  },
  {
    id: "c-mike-michael", name: "Mike Schmidt is Michael Afton", year: 2016, emerged: "late 2016", games: ["fnaf1", "sister-location"],
    claim: "FNaF1's guard is William Afton's son, sent to his father's pizzeria.",
    sources: [{ who: GT, what: "FNAF, The FINAL Theory! (pt. 2)", date: "2017-11-05", url: "https://www.youtube.com/watch?v=uhgMZ8w9lb8", reliability: "primary" }],
    verdict: "open",
    right: "Michael does work his father's facilities on instruction [[sl-golden-freddy-cutscene-father]], and he shares a first name.",
    wrong: "No game connects them beyond the name [[fnaf1-paycheck-night5]].",
    scott: "Not addressed directly.",
    modelSection: "open",
  },
  {
    id: "c-miketrap", name: "Miketrap", year: 2016, emerged: "Dec 2016", games: ["sister-location", "fnaf3"],
    claim: "Michael, not William, is inside Springtrap.",
    sources: [{ who: "Community", what: "post-Sister Location Custom Night discussion", date: "2016-12", reliability: "secondary" }],
    verdict: "wrong",
    right: "It took Michael's purple, rotting body seriously [[sl-custom-night-decay]].",
    wrong: "Michael calls for his father and Springtrap appears [[sl-golden-freddy-cutscene-springtrap]]. The Springtrap salvage is credited as William Afton [[ffps-credits-william-afton]].",
    scott: "Named it as one of the ideas fans were upset about, and pointed them to Game Theory's rebuttal [[scott-2017-matpat-final-theory]].",
    modelSection: "michael",
  },
  {
    id: "c-literal-purple", name: "Purple Guy is literally purple", year: 2016, emerged: "2016–17", games: ["fnaf2", "fnaf3", "sister-location"],
    claim: "The killer's purple sprite shows his real skin, which is why Michael turns purple too.",
    sources: [{ who: "Community", what: "sprite debate", date: "2016", reliability: "secondary" }],
    verdict: "wrong",
    right: "Purple is a consistent visual marker for the Afton family in the minigames [[fnaf2-take-cake-to-the-children]] [[sl-custom-night-decay]].",
    wrong: "FNaF World's own playable Purpleguy jokes that he is \"just a game sprite\" [[fw-purpleguy-sprite-disclaimer]]. Michael's purple is decay after being scooped, not a family skin tone [[sl-real-ending-scooped-mirror]].",
    scott: "Listed it among the misunderstandings Game Theory's 2017 episode cleared up [[scott-2017-matpat-final-theory]] [[scott-2017-misunderstood-not-reveals]].",
    modelSection: "michael",
  },
  {
    id: "c-final-theory", name: "Game Theory's \"FINAL Theory\"", year: 2017, emerged: "Oct–Nov 2017", games: ["fnaf4", "sister-location", "fnaf3"],
    claim: "William is the killer and Springtrap; Michael is not Springtrap; FNaF4 is 1983; the crying child is Golden Freddy.",
    sources: [{ who: GT, what: "FNAF, The FINAL Theory! (pt. 1)", date: "2017-10-28", url: "https://www.youtube.com/watch?v=nKpDN_V-jZs", reliability: "primary" }, { who: GT, what: "FNAF, The FINAL Theory! (pt. 2)", date: "2017-11-05", url: "https://www.youtube.com/watch?v=uhgMZ8w9lb8", reliability: "primary" }, { who: "Reddit", what: "episode thread with Scott's comment", date: "2017-11-06", url: RS, reliability: "primary" }],
    verdict: "mostly-right",
    right: "William as the killer and Springtrap, Michael not Springtrap, and 1983 for FNaF4 all hold up [[ffps-credits-william-afton]] [[fnaf4-fredbear-and-friends-1983]].",
    wrong: "The Golden Freddy identification is doubtful on the five-child evidence [[fnaf3-happiest-day]].",
    scott: "\"A very satisfying, and important, episode\", \"obviously not 100%\". The ideas it addressed were \"misunderstood (or not conveyed properly by me)\" [[scott-2017-matpat-final-theory]] [[scott-2017-misunderstood-not-reveals]].",
    modelSection: "thesis",
  },
  {
    id: "c-henry", name: "The Cassette Man is Henry", year: 2017, emerged: "Dec 2017", games: ["ffps"],
    claim: "The FFPS tape voice is Henry, Afton's partner.",
    sources: [{ who: "Community", what: "name imported from the novel trilogy", date: "2017-12", reliability: "secondary" }],
    verdict: "open",
    right: "The role fits the clues. He calls the monster \"old friend\" and speaks of \"prisons of my making\" [[ffps-completion-old-friend-hell]] [[ffps-insanity-small-souls-prisons]], and Secret of the Mimic has a client called \"Hen\" [[secret-of-the-mimic-mail-springlocks-hen]]. None of that confirms the name or the partnership.",
    wrong: "No game prints \"Henry\"; the credits say \"Cassette Man\" [[ffps-credits-cassette-man]]. The name comes from the novels, which Scott called a separate continuity [[scott-2015-books-separate-continuity]].",
    modelSection: "partners",
  },
  {
    id: "c-ucn-hell", name: "UCN is William Afton's hell", year: 2018, emerged: "Jun–Jul 2018", games: ["ucn"],
    claim: "UCN's player is William, trapped in an afterlife punishment after the FFPS fire.",
    sources: [{ who: GT, what: "We Were Right ALL ALONG!", date: "2018-07-22", url: "https://www.youtube.com/watch?v=PV9jdolesMI", reliability: "primary" }],
    verdict: "partly-right",
    right: "UCN is a punishment that follows the FFPS fire (\"no matter how many times they burn us\") [[ucn-orville-he-tried-to-release]].",
    wrong: "Afton appears as an enemy who attacks the player [[ucn-roster-afton]], the player is taunted with Sister Location's details [[ucn-scrap-baby-lines]], and Old Man Consequences separates the player from \"the demon\" [[ucn-omc-ending]]. This archive leans towards Michael.",
    modelSection: "ucn",
  },
  {
    id: "c-glitchtrap-soul", name: "Glitchtrap is William's digital soul", year: 2019, emerged: "Jun 2019", games: ["help-wanted"],
    claim: "The VR rabbit is William Afton's consciousness, carried in on scanned boards.",
    sources: [{ who: GT, what: "You Were Meant To Lose", date: "2019-06-08", url: "https://www.youtube.com/watch?v=7bn8hM9k0b0", reliability: "primary" }],
    verdict: "partly-right",
    right: "The mechanism holds: it arrived on vintage boards that held \"personalities from the past\" [[hw-handunit-vintage-control-boards]] [[hw-tape-05]], and it echoes Afton's line in a fan-decoded message [[hw-mobile-princess-quest-ending]].",
    wrong: "The literal claim, that it IS William's consciousness, is unproven. It could be an imitation [[hw-tape-girl-calls-it-the-anomaly]].",
    scott: "He confirmed Help Wanted is canon, and that its in-universe indie developer is canon while he himself is not [[scott-2019-help-wanted-is-canon]] [[scott-2019-not-canon-list]].",
    modelSection: "digital",
  },
  {
    id: "c-vanny-vanessa", name: "Vanny is Vanessa", year: 2020, emerged: "2020–21", games: ["security-breach", "help-wanted-2"],
    claim: "The rabbit killer and the security chief are the same woman.",
    sources: [{ who: "Community", what: "Security Breach teaser & release discussion", date: "2020–21", reliability: "secondary" }],
    verdict: "mostly-right",
    right: "Freddy spells it out (\"Vanny… Vanessa… Bunny\") [[security-breach-freddy-vanny-vanessa-bunny]], and Vanessa's therapy notes show her buying fur for a costume [[security-breach-cd-vanessa-costume-fur]].",
    wrong: "The rooftop ending unmasks a blonde Vanny while Vanessa stands alive nearby [[security-breach-rooftop-unmasked]] [[security-breach-rooftop-vanessa-alive]]. That complicates a simple one-to-one identification.",
    scott: "His 2020 teasers split the figure into \"PROTECT\" and \"OBEY\" [[scottgames-site-sb-protect]] [[scottgames-site-sb-obey]].",
    modelSection: "vanny",
  },
  {
    id: "c-burntrap-afton", name: "Burntrap is William Afton", year: 2021, emerged: "Dec 2021", games: ["security-breach"],
    claim: "The burnt rabbit under the Pizzaplex is Afton returned.",
    sources: [{ who: "Community", what: "immediate reaction to Security Breach", date: "2021-12", reliability: "secondary" }],
    verdict: "open",
    right: "It has a human jawbone and purple eyes, and it controls other machines, as Glitchtrap's virus did [[security-breach-burntrap-appearance]] [[security-breach-freddy-i-am-not-me]].",
    wrong: "It is never named in the game [[security-breach-burntrap-name-not-in-game]], and RUIN's sinkhole holds the Mimic, which wears costumes [[ruin-mimic-reveal]] [[ruin-ending-scooper]].",
    modelSection: "burntrap",
  },
  {
    id: "c-gregory-robot", name: "Gregory is a robot / the crying child", year: 2022, emerged: "Jan 2022", games: ["security-breach"],
    claim: "Gregory isn't an ordinary boy. He is an android, or the crying child rebuilt.",
    sources: [{ who: GT, what: "Don't Trust Gregory", date: "2022-01-01", url: "https://www.youtube.com/watch?v=8ANfAt4hJ6Y", reliability: "primary" }, { who: "FuhNaff", what: "Why Gregory Is The Crying Child", date: "2022-01-21", url: "https://www.youtube.com/watch?v=1RXrCNpKiAw", reliability: "primary" }],
    verdict: "open",
    right: "Something is odd about him: Vanessa reports finding no record of him [[security-breach-vanessa-no-record]].",
    wrong: "Nothing in the games identifies him as a machine or as the crying child. RUIN presents him as a boy calling Cassie from elsewhere [[ruin-real-gregory-not-at-pizzaplex]].",
    modelSection: "open",
  },
  {
    id: "c-mimic-burntrap", name: "The Mimic is behind Burntrap and RUIN", year: 2023, emerged: "2023", games: ["ruin", "secret-of-the-mimic"],
    claim: "The costume-wearing Mimic, not Afton, is the thing under the Pizzaplex, and possibly Burntrap.",
    sources: [{ who: GT, what: "FNAF, Buried and Forgotten (Security Breach Ruin)", date: "2023-08-12", url: "https://www.youtube.com/watch?v=B4eF8n5FODM", reliability: "primary" }, { who: "RyeToast", what: "So… Is Burntrap the Mimic?!", date: "2023-09-22", url: "https://www.youtube.com/watch?v=4EFrm08oEpc", reliability: "primary" }],
    verdict: "partly-right",
    right: "RUIN's sinkhole does hold a voice-copying endoskeleton [[ruin-mimic-reveal]] [[ruin-mimic-reuses-gregory-lines]], and Secret of the Mimic built it [[secret-of-the-mimic-mimic-ruin-appearance-link]].",
    wrong: "Whether it was Burntrap is still unsettled [[security-breach-burntrap-name-not-in-game]].",
    modelSection: "mimic",
  },
  {
    id: "c-box-changed", name: "The box's meaning changed", year: 2018, emerged: "Feb 2018", games: ["fnaf4"],
    claim: "Whatever FNaF4's locked box meant in 2015, later games redirected it.",
    sources: [{ who: GT, what: "FNAF 6, What was in the BOX?", date: "2018-02-04", url: "https://www.youtube.com/watch?v=X_93Z1X0rbU", reliability: "primary" }],
    verdict: "confirmed",
    right: "Scott agreed in 2018 and again in 2024 [[scott-2018-box-meaning-changed]] [[scott-2024-box-interview]].",
    wrong: "Nothing significant. See The Box page for the full history.",
    scott: "\"He's absolutely right\" [[scott-2018-box-meaning-changed]].",
  },
];

export const interactions: Interaction[] = [
  { id: "i-gug", date: "2014-10-25", title: "\"No hidden Christian messages\"", kind: "clarification", confirmed: "scott-confirmed", summary: "Asked by a Christian games site whether FNaF's animatronics stand for vices, Scott says no: \"just a simple horror game\" [[scott-2014-no-hidden-christian-messages]]. In the same interview: \"I can't explain Golden Freddy\" [[scott-2014-cant-explain-golden-freddy]]. See Scott & Faith.", evidence: ["scott-2014-no-hidden-christian-messages", "scott-2014-cant-explain-golden-freddy"], external: [{ who: "Geeks Under Grace", what: "Developer Spotlight: Scott Cawthon", date: "2014-10-25", url: "https://www.geeksundergrace.com/gaming/developer-spotlight-scott-cawthon/", reliability: "primary" }] },
  { id: "i-reaction", date: "2015-07-21", title: "FNaF4 goes to YouTubers first", kind: "community-access", confirmed: "scott-confirmed", summary: "Before release, Scott gave Dawko and Razzbowski a sneak peek and posted their reaction videos [[scott-2015-dawko-razzbowski-early-access]].", evidence: ["scott-2015-dawko-razzbowski-early-access"], external: [{ who: "Dawko", what: "FNaF4 reaction", url: "https://www.youtube.com/watch?v=J1rmfspsMvk", reliability: "primary" }, { who: "Razzbowski", what: "FNaF4 reaction", url: "https://www.youtube.com/watch?v=m7jlLmW3Zx0", reliability: "primary" }] },
  { id: "i-almost-right", date: "2015-08-24", title: "\"Game Theory… getting almost everything right\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott says fans found the lore of FNaF1–3 quickly, and praises Game Theory's FNaF2 video [[scott-2015-game-theory-fnaf2-almost-right]]. Then he explains the box: nobody found FNaF4's pieces, so \"some things are best left forgotten, forever\" [[scott-2015-fnaf4-story-hidden]] [[scott-2015-box-best-left-forgotten]].", evidence: ["scott-2015-game-theory-fnaf2-almost-right", "scott-2015-fnaf4-story-hidden", "scott-2015-box-best-left-forgotten"] },
  { id: "i-adult", date: "2016-06", title: "A teaser to kill \"adult theory\"", kind: "clarification", confirmed: "scott-confirmed", summary: "A rumour claimed Sister Location's teasers hinted at 'mature' content. Scott later recalled that he \"quickly dropped an additional teaser to clear it up\" [[scott-2017-adult-theory-teaser]]. Fans at the time credited a 'birthday' addition to scottgames.com's page source.", evidence: ["scott-2017-adult-theory-teaser"], external: [{ who: "Steam community", what: "Fnaf SL DeBunk: The \"Adult\" Theory", date: "2016-06-20", url: "https://steamcommunity.com/app/388090/discussions/0/358415206096519892/", reliability: "primary" }] },
  { id: "i-expect", date: "2015-10-20", title: "The community's expectations split FNaF4 in two", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Wanting not to change FNaF4's lore, but facing expectations for more, Scott ships a canon 1.1 update and a non-canon Halloween Edition [[scott-2015-community-expectations-halloween]] [[scott-2015-fnaf4-halloween-canon-split]].", evidence: ["scott-2015-community-expectations-halloween", "scott-2015-fnaf4-halloween-canon-split"] },
  { id: "i-books", date: "2015-12", title: "The novels are a separate continuity", kind: "clarification", confirmed: "scott-confirmed", summary: "As the first novel arrives, Scott tells readers not to try to solve the games with it [[scott-2015-books-separate-continuity]] [[scott-2015-book-not-a-guide]].", evidence: ["scott-2015-books-separate-continuity", "scott-2015-book-not-a-guide"] },
  { id: "i-dawko", date: "2016-05-12", title: "An update dedicated to Dawko", kind: "community-access", confirmed: "scott-confirmed", summary: "With Dawko in hospital, Scott dedicates FNaF World's Update 2 to him: \"a vital part of the community\" [[scott-2016-dawko-dedication]].", evidence: ["scott-2016-dawko-dedication"] },
  { id: "i-leak", date: "2016-07-18", title: "Debunking fake leaks", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott warns fans not to believe every screenshot, and mocks the idea you can open the box by beating Nightmare twice [[scott-2016-box-sarcasm]].", evidence: ["scott-2016-box-sarcasm"] },
  { id: "i-cancel", date: "2016-08", title: "\"CANCELLED due to leaks\"", kind: "prank", confirmed: "scott-confirmed", summary: "A Sister Location teaser declares the game cancelled. Hidden text turns it into an in-world news story about Circus Baby's Pizza World closing over \"gas leaks\" [[scottgames-site-sl-cancelled-teaser]] [[scottgames-site-sl-news-gas-leak-cancellation]].", evidence: ["scottgames-site-sl-cancelled-teaser", "scottgames-site-sl-news-gas-leak-cancellation"] },
  { id: "i-delay", date: "2016-10-04", title: "The fake Sister Location delay", kind: "prank", confirmed: "scott-confirmed", summary: "Scott announces that the game got \"too dark\" and only a joke \"mature\" version will come out, \"not as a part of the lore\". Then: \"the game's not delayed, see you Friday ;)\" [[scott-2016-sl-delay-troll]].", evidence: ["scott-2016-sl-delay-troll"] },
  { id: "i-cutscenes", date: "2016-12", title: "Custom Night isn't canon, but its cutscenes are", kind: "clarification", confirmed: "scott-confirmed", summary: "Scott rules Sister Location's Custom Night gameplay non-canon and its cutscenes canon [[scott-2016-sl-custom-night-not-canon]] [[scott-2016-cutscenes-are-canon]]. That puts Michael's walk and the Golden Freddy monologue firmly in the story, and they fuel Miketrap.", evidence: ["scott-2016-sl-custom-night-not-canon", "scott-2016-cutscenes-are-canon"] },
  { id: "i-fnaf6", date: "2017-06-30", title: "\"Call it FNaF 6\" — cancelled", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott says he's stopped work on the game he'd been hinting at, citing mounting expectations, and muses about \"a pizzeria tycoon game\" [[scott-2017-fnaf6-not-a-troll]] [[scott-2017-fnaf6-cancelled-tycoon-hint]]. FFPS, released that December, opens as exactly that; whether it grew from the cancelled project is fan inference.", evidence: ["scott-2017-fnaf6-not-a-troll", "scott-2017-fnaf6-cancelled-tycoon-hint"] },
  { id: "i-retcon", date: "2017-09-04", title: "\"The retcon issue\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "After fans panic over a joke about retcons, Scott admits exactly one real retcon, integrated \"seamlessly\" [[scott-2017-one-retcon]] [[scott-2017-retcon-seamless]]. He explains he uses later games to clear up misconceptions, like Sister Location for FNaF4 [[scott-2017-sl-cleared-fnaf4-misconception]]. See the retcon section of the theory.", evidence: ["scott-2017-one-retcon", "scott-2017-retcon-seamless", "scott-2017-sl-cleared-fnaf4-misconception"] },
  { id: "i-tff", date: "2017-09-03", title: "The Freddy Files' red scribbles aren't lore", kind: "clarification", confirmed: "scott-confirmed", summary: "Scott explains the guidebook's red annotations are leftovers of discarded concepts. He dropped an in-universe narrator because it would add lore [[scott-2017-tff-annotations-not-lore]].", evidence: ["scott-2017-tff-annotations-not-lore"] },
  { id: "i-final", date: "2017-11-06", title: "Endorsing the \"FINAL Theory\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott calls Game Theory's episode \"very satisfying, and important\", though \"obviously not 100%\". He points fans upset about Miketrap, literal purple and 1983 vs 1987 to it [[scott-2017-matpat-final-theory]]. He adds that the game wins if it contradicts a theory [[scott-2017-games-over-theories]].", evidence: ["scott-2017-matpat-final-theory", "scott-2017-misunderstood-not-reveals", "scott-2017-games-over-theories"], external: [{ who: "Reddit", what: "episode thread", url: RS, reliability: "primary" }] },
  { id: "i-ffps", date: "2017-12-04", title: "\"Something lite and without much consequence\"", kind: "prank", confirmed: "scott-confirmed", summary: "Scott apologises in case FFPS was over-hyped [[scott-2017-ffps-apology]] [[scott-2017-ffps-lite-announcement]]. It turns out to be the climax of the story [[ffps-completion-fire]]. It also hides a \"Lorekeeper\" ending for players who dig [[ffps-lorekeeper-certificate]].", evidence: ["scott-2017-ffps-apology", "scott-2017-ffps-lite-announcement", "ffps-completion-fire", "ffps-lorekeeper-certificate"] },
  { id: "i-troll", date: "2018-06-21", title: "The FFPS troll \"went too far\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott acknowledges the FFPS misdirection upset people [[scott-2018-ffps-troll-lesson]].", evidence: ["scott-2018-ffps-troll-lesson"] },
  { id: "i-hippo", date: "2018-06-27", title: "\"Sometimes a story is just a story\"", kind: "in-game-nod", confirmed: "fan-inferred", summary: "UCN's Mr. Hippo rambles that reading into every little thing will drive you crazy [[ucn-mr-hippo-just-a-story]]. Widely read as a wink at theorists; the game doesn't say so.", evidence: ["ucn-mr-hippo-just-a-story"] },
  { id: "i-matpat-box", date: "2018-08-08", title: "\"He's absolutely right\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "In his first Dawko interview, Scott agrees with MatPat that the box's meaning changed over time [[scott-2018-box-meaning-changed]].", evidence: ["scott-2018-box-meaning-changed"] },
  { id: "i-lunatic", date: "2019-05-28", title: "Scott's face as the in-game \"lunatic\"", kind: "in-game-nod", confirmed: "scott-confirmed", summary: "Help Wanted shows Scott's photo as the in-universe indie developer whose \"fabrications\" Fazbear blames [[hw-intro-indie-developer-poster]] [[hw-intro-complete-lunatic]]. Scott clarified that the developer is canon but he himself is not [[scott-2019-not-canon-list]] [[scott-2019-indie-dev-photo]].", evidence: ["hw-intro-indie-developer-poster", "hw-intro-complete-lunatic", "scott-2019-not-canon-list", "scott-2019-indie-dev-photo"] },
  { id: "i-face", date: "2019-09-29", title: "Family photos aren't clues", kind: "clarification", confirmed: "scott-confirmed", summary: "Scott reveals UCN's mystery face is his son, and that personal photos in FNaF4 carry no lore [[scott-2019-ucn-child-face-jason]] [[scott-2019-fnaf4-photos-no-lore]].", evidence: ["scott-2019-ucn-child-face-jason", "scott-2019-fnaf4-photos-no-lore"] },
  { id: "i-novels", date: "2020", title: "\"Look to the novels to fill in some blanks\"", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott says future games will look forward and Fazbear Frights will fill in the past [[scott-2020-novels-fill-blanks]] [[scott-2020-novels-means-fazbear-frights]]. It reopens the canon debate this archive sidesteps.", evidence: ["scott-2020-novels-fill-blanks", "scott-2020-novels-means-fazbear-frights"] },
  { id: "i-retire", date: "2021-06-17", title: "Retirement", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "Scott retires, adding that FNaF isn't ending and someone he trusts will eventually run it [[scottgames-site-2021-retirement-not-end]].", evidence: ["scottgames-site-2021-retirement-not-end"], external: [{ who: "Scott Cawthon (Reddit)", what: "My response, and maybe last post", date: "2021-06-12", url: "https://www.reddit.com/r/fivenightsatfreddys/comments/nybyo1/", reliability: "primary" }] },
  { id: "i-2024", date: "2024-08-04", title: "The box, one last time", kind: "scott-speaks", confirmed: "scott-confirmed", summary: "\"There is something in the box, but I never pursued that, and I don't know if I can find it again\" [[scott-2024-box-interview]].", evidence: ["scott-2024-box-interview"], external: [{ who: "Dawko", what: "An Interview with Scott Cawthon 2.0", date: "2024-08-04", url: "https://www.youtube.com/watch?v=lrgSbteWMC8", reliability: "primary" }] },
];
