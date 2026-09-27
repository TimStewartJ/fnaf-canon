import type { Source } from "./community";

export interface BoxStep {
  id: string;
  date: string;
  dateBasis: string;
  phase: "planted" | "explained" | "shelved" | "echoed" | "abandoned";
  title: string;
  body: string;          // rich text
  evidence: string[];
  image?: string;
}

export interface BoxAnswer { q: string; short: string; body: string[]; confidence: string }
export interface BoxGuess { name: string; idea: string; verdict: string; source?: Source }

export const boxAnswer: BoxAnswer[] = [
  {
    q: "What was in the box when it was revealed?",
    short: "In Scott's words, \"the pieces put together\": FNaF4's hidden story, assembled. What those pieces add up to, he never said.",
    body: [
      "Scott answered this directly a month after release: **\"What's in the box? It's the pieces put together.\"** [[scott-2015-fnaf4-box-pieces-put-together]]. In the same post he explains what \"the pieces\" are. FNaF1–3's stories were found quickly, \"but then I released part 4, and somehow.... no one, not a single person, found the pieces. The story remains completely hidden… I guess most people assumed that I filled the game with random easter eggs this time. I didn't.\" [[scott-2015-fnaf4-story-hidden]]. **The pieces are FNaF4's hidden story details, and the box is those details assembled into one answer.**",
      "Which answer? Only one story was available in July 2015, the one FNaF4 itself tells. A child is locked in his room and terrified of Fredbear's [[fnaf4-plush-locked-in-room]] [[fnaf4-left-behind-at-diner]]. He is killed by the Bite at his own birthday party [[fnaf4-the-bite]]. His brother apologises [[fnaf4-night6-brother-apology]]. His plush tells him **\"You're broken\"** [[fnaf4-youre-broken]] and promises **\"I will put you back together\"** [[fnaf4-i-will-put-you-back-together]], over a flatline [[fnaf4-flatline]]. The game's last word on the subject is the box itself: \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]]. A broken child, a promise to reassemble him, and a locked box. **This archive's reading:** \"the pieces put together\" most likely means the crying child and that promise. It could be literally him, put back together, or the full truth of who he was. Scott never confirmed either.",
      "Scott's framing fits a thematic answer. He asked \"would the community accept it that way?\" [[scott-2015-fnaf4-box-pieces-put-together]], which is the worry of someone whose answer is thematic and in plain sight, not a surprise object. When FNaF World returned to it that winter, a voice told the player \"The pieces are in place for you. All you have to do is find them. Rest.\" and awarded the crying child's trophy [[fw-clock-ending-pieces-in-place]].",
    ],
    confidence: "certain that Scott called the contents 'the pieces put together'; medium-low that those pieces are the crying child and the promise to rebuild him (interpretation)",
  },
  {
    q: "Why did it change?",
    short: "The story kept going in other directions, and Scott dropped the plan for the box.",
    body: [
      "In August 2015 FNaF4 was meant to be the end: \"the last chapter of the Five Nights at Freddy's original story\" [[scott-2015-fnaf4-store-last-chapter]], and in September \"there will NOT be a Five Nights at Freddy's 5. The story is complete\" [[scott-2015-story-complete]]. In August Scott had said he considered opening the box for Halloween [[scott-2015-considered-opening-box]], then decided that because the pieces had stayed hidden, \"maybe some things are best left forgotten, forever\" [[scott-2015-box-best-left-forgotten]]. His post echoes the game's caption, turning its \"for now\" into \"forever\"; the in-game text is unchanged [[fnaf4-locked-box-ending]].",
      "Then the story restarted. Sister Location put \"put back together\" at the centre of a new family: Michael tells his father \"I put her back together, just like you asked me to\" [[sl-golden-freddy-cutscene-father]]. Scott later said he used Sister Location \"to clear up a misconception from FNaF 4\", without saying which [[scott-2017-sl-cleared-fnaf4-misconception]]. **This archive reads** the \"put back together\" idea at the box's heart as having moved out of FNaF4's box and into the Afton story, where it is told in the open. That link is interpretation.",
      "In 2018 Scott agreed with MatPat that the box's meaning had changed over time — \"He's absolutely right\" — and said he had tried to \"craft it into something better\" [[scott-2018-box-meaning-changed]]. In 2024 he was blunt: \"there is something in the box, but I never pursued that, and I don't know if I can find it again\", because \"the roads aren't always the same roads as the ones that had been planned before\" [[scott-2024-box-interview]].",
    ],
    confidence: "high (Scott's own words, 2015–2024)",
  },
  {
    q: "Why doesn't it matter anymore?",
    short: "Its creator abandoned the plan, and the box was never opened.",
    body: [
      "**(1)** Scott says the specific plan was never pursued and may be unrecoverable [[scott-2024-box-interview]]. That is the decisive fact: nobody, including its creator, holds a fixed answer to reveal. **(2)** The theme the box seemed to point at, \"putting back together\", is explored openly in later games [[sl-golden-freddy-cutscene-father]] [[ucn-nightmare-fredbear-lines]], though the games never tie those scenes to the box. **(3)** The only open box in any game file is an unused FNaF World image, and it is empty [[fw-unused-open-box]]. That shows how it was drawn, not what it held.",
      "So it is an **abandoned** mystery rather than a live one. In 2015 the box held \"the pieces put together\", Scott's summary of FNaF4's hidden story. The story then went elsewhere, the plan was dropped, and the box stayed locked, as its caption promised. Scott also mocked fake ways of opening it: \"I hear you can open the box by beating nightmare mode twice in FNaF 4\" [[scott-2016-box-sarcasm]].",
    ],
    confidence: "high that the plan was abandoned (Scott, 2024); that its theme lives on elsewhere is interpretation",
  },
];

export const boxTimeline: BoxStep[] = [
  { id: "b-release", date: "2015-07-23", dateBasis: "FNaF4's release date.", phase: "planted", title: "The box appears after Night 7", body: "Beating Nightmare shows a grey box with two padlocks that rattle but won't open: \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]]. Scott's store text calls FNaF4 the last chapter of the original story [[scott-2015-fnaf4-store-last-chapter]].", evidence: ["fnaf4-locked-box-ending", "scott-2015-fnaf4-store-last-chapter"], image: "fnaf4-locked-box-ending.jpg" },
  { id: "b-teaser", date: "2015-07-27", dateBasis: "scottgames.com capture date.", phase: "planted", title: "\"The End?\"", body: "After release, scottgames.com reads \"The End\", with a tiny \"?\" hidden after it [[scottgames-site-fnaf4-the-end]].", evidence: ["scottgames-site-fnaf4-the-end"] },
  { id: "b-pieces", date: "2015-08-24", dateBasis: "Date of Scott's Steam announcement.", phase: "explained", title: "\"It's the pieces put together\"", body: "Scott had considered opening the box for Halloween [[scott-2015-considered-opening-box]]. He says no one found FNaF4's hidden story pieces, that they were not random easter eggs [[scott-2015-fnaf4-story-hidden]], and that the box holds \"the pieces put together\", then asks whether the community would accept that [[scott-2015-fnaf4-box-pieces-put-together]].", evidence: ["scott-2015-fnaf4-box-pieces-put-together", "scott-2015-fnaf4-story-hidden", "scott-2015-considered-opening-box"] },
  { id: "b-forever", date: "2015-08-24", dateBasis: "Same Steam announcement.", phase: "shelved", title: "\"…best left forgotten, forever\"", body: "Because the pieces stayed hidden, which Scott calls \"a fitting conclusion in some ways\", he decides the box will not be opened, echoing the game's caption with \"forever\" in place of \"for now\" [[scott-2015-box-best-left-forgotten]]. The Halloween update ships without it [[scott-2015-community-expectations-halloween]].", evidence: ["scott-2015-box-best-left-forgotten", "scott-2015-community-expectations-halloween"] },
  { id: "b-fw", date: "2016-01-21", dateBasis: "FNaF World's release; the clock ending.", phase: "echoed", title: "\"The pieces are in place for you\"", body: "FNaF World's clock ending: small yellow eyes say \"We are still your friends\", then \"The pieces are in place for you. All you have to do is find them. Rest.\" The trophy is the crying child [[fw-clock-ending-still-your-friends]] [[fw-clock-ending-pieces-in-place]]. The game's files also hold an unused image of the box, open and empty [[fw-unused-open-box]].", evidence: ["fw-clock-ending-pieces-in-place", "fw-clock-ending-still-your-friends", "fw-unused-open-box"], image: "fw-unused-open-box.png" },
  { id: "b-sarcasm", date: "2016-07-18", dateBasis: "Date of Scott's Reddit comment.", phase: "shelved", title: "\"Beat nightmare mode twice\"", body: "Debunking a fake leak, Scott jokes that you can open the box by beating Nightmare twice [[scott-2016-box-sarcasm]]. It is sarcasm; there is no way to open it.", evidence: ["scott-2016-box-sarcasm"] },
  { id: "b-sl", date: "2016-12-04", dateBasis: "The Sister Location update that added the final Golden Freddy cutscene, which Scott ruled canon.", phase: "echoed", title: "\"I put her back together, just like you asked me to\"", body: "\"Put back together\" returns in a new family's story [[sl-golden-freddy-cutscene-father]]. Scott later says he used Sister Location to clear up a misconception from FNaF4 [[scott-2017-sl-cleared-fnaf4-misconception]].", evidence: ["sl-golden-freddy-cutscene-father", "scott-2016-cutscenes-are-canon", "scott-2017-sl-cleared-fnaf4-misconception"] },
  { id: "b-2018", date: "2018-08-08", dateBasis: "Date of Dawko's first interview with Scott.", phase: "abandoned", title: "\"He's absolutely right\"", body: "Asked about MatPat's theory that the box's meaning changed, Scott agrees and says he tried to craft it into something better [[scott-2018-box-meaning-changed]].", evidence: ["scott-2018-box-meaning-changed"] },
  { id: "b-2024", date: "2024-08-04", dateBasis: "Date of Dawko's second interview with Scott.", phase: "abandoned", title: "\"I never pursued that\"", body: "\"There is something in the box, but I never pursued that, and I don't know if I can find it again.\" The story took other roads than the ones planned [[scott-2024-box-interview]].", evidence: ["scott-2024-box-interview"] },
];

export const boxGuesses: BoxGuess[] = [
  { name: "The crying child's remains", idea: "His brother and friends hid his body in the box.", verdict: "Closest in spirit to this archive's reading, which ties the box to the crying child. But Scott's 'pieces put together' reads more like the story assembled than a hidden corpse [[scott-2015-fnaf4-box-pieces-put-together]] [[fnaf4-i-will-put-you-back-together]]. Unconfirmed either way.", source: { who: "Steam user Heavy Mob Cemetery", what: "Fnaf 4 theory", date: "2015-08-29", url: "https://steamcommunity.com/app/388090/discussions/0/527273452883338367/", reliability: "primary" } },
  { name: "Fredbear's hat, bow tie or suit parts", idea: "Relics of the springlock suits or of the Bite.", verdict: "Plausible props, but they don't fit 'the pieces put together'. FNaF4's teasers did use Fredbear's purple hat and bow tie [[scottgames-site-fnaf4-property-of-fr]].", source: { who: "Steam user kyasarix", what: "FNAF 4 Box Theory!", date: "2015-09-15", url: "https://steamcommunity.com/app/388090/discussions/0/523897277926691839/", reliability: "primary" } },
  { name: "The box's meaning changed over time", idea: "Whatever it meant in 2015, later games redirected it.", verdict: "Confirmed by Scott in 2018 ('He's absolutely right') and again in 2024 [[scott-2018-box-meaning-changed]] [[scott-2024-box-interview]].", source: { who: "Game Theory (MatPat)", what: "FNAF 6, What was in the BOX?", date: "2018-02-04", url: "https://www.youtube.com/watch?v=X_93Z1X0rbU", reliability: "primary" } },
  { name: "The box can be opened", idea: "Secret inputs, beating Nightmare twice, or a future update would open it.", verdict: "Wrong. Scott mocked this [[scott-2016-box-sarcasm]], and the only open box in any game is an unused, empty FNaF World image [[fw-unused-open-box]].", source: { who: "Game Theory (MatPat)", what: "Why FNAF Will Never End", date: "2015-09-01", url: "https://www.youtube.com/watch?v=e9FrNYjr3L4", reliability: "primary" } },
];
