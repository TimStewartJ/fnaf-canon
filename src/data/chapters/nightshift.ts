import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 5: The night shift (1987 and after).
 * Two restaurants and the guards who watched them: the week the new one came apart, the old one reopened on a smaller budget, and the night the killer came back to it.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "november-1987", part: "nightshift", title: "November 1987",
    question: "What happened at the new restaurant in 1987, and what was the Bite of '87?",
    answer: "The new Freddy's came apart in one week of November 1987: rumours, an investigation, machines tampered with, a lockdown against \"previous employees\", a spare yellow suit that \"someone used\", and closure. The killer was most likely back in the building. What he did there, no record says. The Bite of '87 most likely falls in the restaurant's last days, and who bit whom is never shown.",
    confidence: "medium",
    hero: { image: "fnaf2-parts-service-old-models.jpg", caption: "FNaF2's Parts/Service room in November 1987: the older Bonnie, faceless and missing an arm, and the older Freddy on the floor [[fnaf2-parts-service-old-models]]." },
    body: [
      "FNaF2 pays its guard at the end of the fifth night, and the cheque carries the firmest date in the story.",
      { kind: "figure", image: "fnaf2-paycheck-1987.jpg", caption: "The Night 5 cheque: Jeremy Fitzgerald, one hundred dollars and fifty cents, 11-12-1987.", evidence: "fnaf2-paycheck-1987" },
      "It is made out to {{jeremy-fitzgerald}} and dated <<11-12-1987|printed|fnaf2-paycheck-1987|The date printed on the Night 5 cheque.>>, with the memo \"Welcome to the family!\" The cheque for the sixth night is dated the next day [[fnaf2-overtime-robots-scrapped]]. No other document in the first three games prints a year. The week the player sits through is a week of November 1987, and the calls tell it night by night.",
      "The restaurant has just opened, and the one before it has been abandoned: \"that old restaurant was kind of left to rot for quite a while\", says {{phone-guy}}, the company's voice on the guard's phone [[fnaf2-call1-new-location]]. The new machines are the selling point. \"They even let them walk around during the day!\" [[fnaf2-call1-walk-around-during-day]] They are \"tied into some kind of criminal database, so they can detect a predator a mile away\" [[fnaf2-call1-criminal-database]].",
      { kind: "heading", text: "The week, night by night" },
      { kind: "table", head: ["When", "What is said or shown"], rows: [
        ["Before Night 1", "The first night guard finishes his week, complains about \"conditions\", and is moved to the day shift [[fnaf2-call1-second-guard]]."],
        ["Night 1", "The guard is to \"forget anything you may have heard\" about \"the old location\" [[fnaf2-call1-forget-old-location]]. The engineers \"don't really have an explanation\" for machines that wander at night [[fnaf2-call1-no-night-mode]]."],
        ["Night 2", "The older models in the back room are \"from the previous location\", kept for parts [[fnaf2-call2-older-models]]. They \"shouldn't be able to walk around\". The older Foxy starts to [[fnaf2-old-models-walk-from-night2]]."],
        ["Night 3", "The other three older models walk. The company line: \"whatever is going on out there, however tragic it may be, has nothing to do with our establishment\" [[fnaf2-call3-rumors]]."],
        ["Night 4", "There is \"somewhat of an investigation going on\" [[fnaf2-call4-investigation]]. Someone \"may have tampered with their facial recognition systems\", and the machines stare at adults [[fnaf2-call4-facial-recognition-tampered]]."],
        ["Night 5, cheque of 11-12-1987", "The building is locked down [[fnaf2-call5-lockdown]]. A day-shift post \"just became...available\" [[fnaf2-call5-day-shift-vacancy]]. The company will try to reach the owner of \"Fredbear's Family Diner or something like that\" [[fnaf2-call5-fredbears-family-diner]]."],
        ["Night 6, cheque of 11-13-1987", "The place is closed: a spare yellow suit has been used [[fnaf2-call6-yellow-suit]]. The yellow bear, idle for five nights, becomes active [[fnaf2-golden-freddy-night6-only]]. One event is left, a birthday."],
        ["After", "The restaurant closes, open \"only a few short weeks\". A third guard, {{fritz-smith}}, is fired on his first day [[fnaf2-pink-slip-fritz-smith]]."],
      ] },
      "Two points of order are easy to lose. The older machines walk on the second and third nights, before any tampering is reported, so the tampering does not explain them. And the building is locked down on the fifth night, before the suit is reported on the sixth.",
      "Between nights the game cuts to a stage seen through the eye holes of a head, with the older Bonnie and Chica whole on either side [[fnaf2-cutscenes-old-stage-through-eye-holes]]. The model reads these scenes, loosely, as the older Freddy's memory of the old restaurant.",
      { kind: "heading", text: "A lockdown, then a suit" },
      "On the fifth night:",
      { kind: "quote", evidence: "fnaf2-call5-lockdown", text: "no one is allowed in or out, you know. Especially concerning any... ..previous employees." },
      "And on the sixth, with the restaurant closed:",
      { kind: "quote", evidence: "fnaf2-call6-yellow-suit" },
      "Machines tampered with, a lockout aimed at people who used to work there, a suit fetched from the back: these are most likely one man with inside knowledge, and that man the killer of the five (see ((murders))).",
      "Which suit is a narrower reading. FNaF3's training tapes speak of two suits that double as costume and machine [[fnaf3-tape2-dual-suits]], and one of its minigames puts a yellow bear and a yellow rabbit on one stage [[fnaf3-stage01-fredbear-spring-bonnie]]. On the model's reading the spare is the bear: the only empty yellow costume the first two games show [[fnaf1-golden-freddy-office-figure]], which in this game stands before the viewer after the third night [[fnaf2-cutscenes-its-me]] and attacks from the sixth. The reading stands on an assumption. The same tapes have the safe rooms walled up with their contents inside [[fnaf3-tape6-safe-rooms-sealed]], and the rabbit is in such a room when the killer dies (see ((springtrap))). If the wall went up before November 1987, the spare was the bear. Nothing dates the tapes. If it went up later, the spare may have been the rabbit, the suit of the earlier crime.",
      "The call's word is \"used\". It does not say by whom or for what, and the model adds nothing.",
      { kind: "callout", tone: "key", title: "What the model cannot say", text: "What was done in that restaurant that week, the model cannot say. It has a culprit, a suit and an investigation, and no act. No record names a victim of 1987." },
      { kind: "heading", text: "SAVE THEM" },
      "One of FNaF2's death minigames is set among this restaurant's cast. The player is the older Freddy, following the Puppet past a stage where the new Freddy, Bonnie and Chica stand. Five small bodies lie in blood, and a voice spells S-A-V-E-T-H-E-M [[fnaf2-save-them]]. Rarely a purple figure rushes the player, and the game shuts on the words \"you can't\" [[fnaf2-save-them-you-cant]]. It never says whether these are the five of the clippings or five more.",
      { kind: "figure", image: "fnaf2-save-them-map.png", caption: "SAVE THEM's whole map: the new machines on stage at the top, the older ones in the room at the left, and five small grey bodies.", evidence: "fnaf2-save-them" },
      { kind: "compare", columns: [
        { title: "The earlier five", verdict: "The model's lean", pick: true, text: "A death minigame is a flash, and the model draws nothing from the building it is set in (see ((child-outside))). No later count of the dead goes past six, the five and the child outside [[ffps-lorekeeper-gravestones]] [[hw2-memory-dolls]], and none has a place for five more. The price is a week with no recorded act." },
        { title: "Five more, in 1987", verdict: "What FNaF2 alone suggests", text: "Five bodies among the 1987 cast, a purple figure with a mark on his chest that he has in no other minigame [[fnaf2-save-them-purple-figure-chest-mark]], and a company denying something \"tragic\" by the third night. It gives the investigation and the suit something to be about. It loses on every later count of the dead." },
      ] },
      { kind: "heading", text: "The Bite of '87" },
      "The first game mentions it once, on the first night.",
      { kind: "quote", evidence: "fnaf1-call1-bite-of-87", text: "They used to be allowed to walk around during the day too. But then there was 'The Bite of '87.'" },
      "Phone Guy adds only that the human body can live without the frontal lobe. No game says who was bitten, which machine did it, or where. FNaF2 supplies a window. Daytime walking is still allowed, and boasted of, as this week begins. The restaurant closes within days, and no other Freddy's is open that autumn. One event is left, a birthday on <<13 or 14 November 1987|derived|fnaf2-call6-birthday-day-shift,fnaf2-overtime-robots-scrapped|The call says tomorrow, on the night whose cheque is dated 11-13-1987.>>, where the guard is to \"stay close to the animatronics and make sure they don't hurt anyone\" [[fnaf2-call6-birthday-day-shift]]. The bite most likely falls in these last days. That it happened at the birthday is the model's reading, at a low grade. It is not FNaF4's bite, which closes a week whose only printed year is 1983 (see ((bite))).",
      { kind: "heading", text: "Closure" },
      { kind: "figure", image: "fnaf2-robots-scrapped.jpg", caption: "The Night 6 screen: the overtime cheque of 11-13-1987 over the newspaper that announces the closure.", evidence: "fnaf2-overtime-robots-scrapped" },
      "The closing newspaper blames the new machines: they \"will be scrapped due to possible malfunctions\", while \"the original characters are being kept\" [[fnaf2-news-originals-kept]]. It says nothing of an investigation. After the suit is used, the call says only: \"Now none of them are acting right.\" No record puts a child in one of the new machines, and the model reads them as machines and nothing more. The company's CEO is quoted: \"We are confident that we will reopen someday, even if it is with a much smaller budget.\" [[fnaf2-news-reopen-smaller-budget]] What reopened is the subject of ((fnaf1-restaurant)).",
    ],
    counterEvidence: ["fnaf2-save-them", "fnaf2-save-them-purple-figure-chest-mark", "fnaf2-call3-rumors", "fnaf2-no-bite-mention", "ffps-fruity-maze-follow-me"],
    tension: "Read alone, FNaF2 suggests victims in 1987. SAVE THEM shows five small bodies among that restaurant's cast [[fnaf2-save-them]], with a purple figure who has a mark on his chest that he has in no other minigame [[fnaf2-save-them-purple-figure-chest-mark]], and by the third night the company is denying something \"tragic\" [[fnaf2-call3-rumors]]. The model reads the bodies as the earlier five, because no later count of the dead has a ghost, a mask, a grave or a doll left over for five more. The price is a week with no recorded act, and the chapter says so. For the Bite, no call that week uses the word [[fnaf2-no-bite-mention]], and the first game's sentence is spoken about its own four machines, so a bite earlier in 1987 at the old location cannot be excluded. For the suit, the rabbit is the killer's costume wherever a later game shows him in one [[ffps-fruity-maze-follow-me]]. The bear is preferred, narrowly, and on two assumptions: that the hidden room was sealed before November 1987, and that the bear was not sealed in with the rabbit.",
    changesIf: "Any record of 1987 victims (a name, a grave, a ghost), a game that shows the Bite of '87, or a date for the training tapes against November 1987.",
    seeAlso: ["murders", "golden", "fnaf1-restaurant", "springtrap", "bite", "timeline-math", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf2-help-wanted-ad", // [stated] FNaF2 Help Wanted ad: Grand Re-Opening
      "fnaf2-call1-endoskeleton-glitch", // [stated] 1987: the same 'endoskeleton without his costume' explanation
      "fnaf2-save-them-golden-freddy", // [shown] A slumped yellow bear can sit in SAVETHEM's rooms
      "scott-fnaf2-steam-description", // [stated] Scott: FNaF2 animatronics tied into local criminal databases
      "scott-2014-fnaf2-store-previous-guard", // [stated] FNaF2 Steam description: previous guard moved to day shift
      "scottgames-site-fnaf2-grand-reopening", // [shown] FNaF2 teaser: 'Grand Reopening 2015'
      "scottgames-site-fnaf2-something-borrowed", // [shown] FNaF2 teaser: 'something borrowed... something new...'
      "scott-2018-interview-fnaf3-teaser-read-as-golden-freddy", // [stated] 2018: people first took the FNaF3 teaser figure for Golden Freddy
      // colour
      "fnaf2-call3-mangle", // [stated] Kid's Cove Foxy became 'the mangle'
      "fnaf2-jj-endo-puppet-visions", // [shown] JJ, Endo-02 and Puppet camera visions
      "fnaf2-game-over-inside-mask", // [shown] Game over: looking out through a mask at the older Freddy
      "scott-fnaf2-steam-old-and-aging", // [stated] Scott: in FNaF2 'the old and aging animatronics are joined by a new cast'
    ],
  },
  {
    id: "fnaf1-restaurant", part: "nightshift", title: "The last Freddy's",
    question: "When is the first game set, and which restaurant is it?",
    answer: "After 1987, in a year the games never print. It is most likely the old building, reopened on a smaller budget with the four original machines, and it is to close by the end of that year. The voice on the phone is the man who trained the 1987 guards, and his last recorded call implies that he did not survive his own week there.",
    confidence: "medium",
    hero: { image: "fnaf1-game-over-stuffed-suit.jpg", caption: "FNaF1's game-over screen: a Freddy suit in the back room, with eyes and teeth showing where a mask should be empty [[fnaf1-game-over-eyes-teeth]]." },
    body: [
      "The first game begins with a newspaper advertisement. A family pizzeria wants a security guard for the night shift, midnight to six, at \"$120 a week\". The small print reads: \"Not responsible for injury/dismemberment.\" [[fnaf1-help-wanted-ad]]",
      { kind: "figure", image: "fnaf1-help-wanted-ad.jpg", caption: "The advertisement that opens FNaF1.", evidence: "fnaf1-help-wanted-ad" },
      "On the first night a recorded message is waiting. The voice is {{phone-guy}}'s: \"I actually worked in that office before you. I'm... finishing up my last week now, as a matter of fact\" [[fnaf1-call1-phone-guy-previous-guard]]. He explains the job as the company explains it. The machines are \"left in some kind of free roaming mode at night\" [[fnaf1-call1-free-roaming-mode]]. Of a guard they meet after hours he says: \"they'll probably try to... forcefully stuff you inside a Freddy Fazbear suit.\" [[fnaf1-call1-stuffed-into-suit]] What those explanations are worth is the subject of ((cover-story)).",
      { kind: "heading", text: "After 1987" },
      "Nothing in the first game says when this is. The second game does. FNaF2 is set at a newer, richer restaurant, in the week told in ((november-1987)), and six things in it are picked up, changed, in FNaF1.",
      { kind: "table", head: ["In November 1987", "In FNaF1"], rows: [
        ["The new machines are to be scrapped, and \"the original characters are being kept\" [[fnaf2-news-originals-kept]]", "The cast is four: Freddy, Bonnie, Chica and Foxy [[fnaf1-custom-night-names]]"],
        ["The CEO expects to reopen \"with a much smaller budget\" [[fnaf2-news-reopen-smaller-budget]]", "The guard's electricity is rationed. Scott's store text: \"corporate budget cuts, you know\" [[scott-fnaf1-steam-budget-cuts]]"],
        ["Phone Guy: \"I'll probably take the night shift myself\" [[fnaf2-call6-night-shift-myself]]", "Phone Guy: \"I actually worked in that office before you\""],
        ["The older models sit damaged in a back room, Bonnie without a face [[fnaf2-parts-service-old-models]]", "They are whole and at work: \"Freddy himself doesn't come off stage very often\" [[fnaf1-call2-freddy-dark-foxy-cove]]"],
        ["The machines \"even\" walk around during the day [[fnaf2-call1-walk-around-during-day]]", "They \"used to be allowed to\", until the Bite of '87 [[fnaf1-call1-bite-of-87]]"],
        ["Stuffing a guard into a suit is \"a minor...glitch in the system\" [[fnaf2-call1-endoskeleton-glitch]]", "It is the rule of the house"],
      ] },
      // REVIEW: ruling R24 states FNaF1's lower bound with a year numeral (the November after 1987's). The writers'
      // brief asks that no year after 1987 appear anywhere, so the bound is given here in words, without the numeral
      // (fnaf1-paycheck-night5, fnaf2-paycheck-1987).
      "So FNaF1 comes after November 1987. Its own cheques say how soon it could be. They are dated 11-12 and 11-13, with the year printed as \"xx\" [[fnaf1-paycheck-night5]] [[fnaf1-paycheck-night6]]. On 12 November 1987 the newer restaurant was still open and paying its guard [[fnaf2-paycheck-1987]]. The first November 12th left for this one is the next year's, and nothing says it was that one. The model prints no year: <<a November after 1987|derived|fnaf1-paycheck-night5,fnaf2-paycheck-1987|The FNaF1 cheques read 11-12-xx and 11-13-xx. The 1987 restaurant was still paying its guard on 11-12-1987, and FNaF1 follows it, so the earliest November 12th is the next one. The year is not printed.>>. The working is in ((timeline-math)), which also shows why Phone Guy's \"twenty years\" of songs does not measure the gap.",
      { kind: "figure", image: "fnaf1-paycheck-night5.png", caption: "Mike Schmidt's cheque for the fifth night. The date reads 11-12-xx.", evidence: "fnaf1-paycheck-night5" },
      { kind: "heading", text: "The old building" },
      "No game says in words which restaurant this is. It is most likely the older one, left to rot before 1987 and now reopened. The closing clipping places the tragedy \"there\" [[fnaf1-news-closing]]. That old restaurant still stood, unused, in 1987 [[fnaf2-call1-new-location]], and the 1987 building was another kind of place, with no doors for the guard to close and power that could not run out [[fnaf2-call1-building-cannot-run-out]]. The building where the killer later dies has FNaF1's layout, plus one room that none of its cameras shows [[fnaf3-eon-map-fnaf1-layout]] (see ((springtrap))). And FNaF2's own cutscenes, in a game set in 1987, look out from a stage like FNaF1's, with the older Bonnie and Chica whole on either side [[fnaf2-cutscenes-old-stage-through-eye-holes]]. The game does not label that room, and it is the weakest of the four supports. Against them, the advertisement says nothing of a reopening.",
      { kind: "heading", text: "The voice on the phone" },
      "The caller of 1987 and the caller of FNaF1 are most likely one man. In 1987 he phones for the company and says, on the last night: \"when the place eventually opens again I'll probably take the night shift myself\". Here he has. FNaF3's training tapes open with the same \"Hello, hello?\" [[fnaf3-tapes-hello-hello-greeting]]: they imply the same man, and no game says so.",
      "His messages are recordings from his own last week: on the fourth he is \"kinda glad that I recorded my messages for you\" [[fnaf1-calls-prerecorded]]. There is banging behind that one, and he asks a favour.",
      { kind: "quote", evidence: "fnaf1-call4-phone-guy-attacked" },
      "The recording ends in a tune, a scream and static. The fifth night's message is not his: deep, distorted voices [[fnaf1-call5-garbled]]. No game says that he died. His last recording implies it.",
      { kind: "heading", text: "The guards" },
      // REVIEW: the outline cites fnaf1-custom-night-pink-slip for Mike Schmidt's name. The record's notes say the
      // slip shows no name: the name is on the two cheques only. The table says so.
      { kind: "table", head: ["Office", "Name on the paperwork", "What the records say"], rows: [
        ["The 1987 restaurant, Nights 1 to 6", "{{jeremy-fitzgerald}}, on two cheques", "The second guard there [[fnaf2-call1-second-guard]], sent to work the last birthday by day [[fnaf2-call6-birthday-day-shift]]"],
        ["The 1987 restaurant, Night 7", "{{fritz-smith}}, on a pink slip [[fnaf2-pink-slip-fritz-smith]]", "\"Employee # 03\", fired on his first day for tampering with the machines, and \"Odor\""],
        ["This restaurant", "{{mike-schmidt}}, on two cheques", "Fired after a seventh night for tampering, \"General unprofessionalism\" and \"Odor\". The slip bears no name [[fnaf1-custom-night-pink-slip]]"],
        ["Fazbear's Fright, thirty years on", "Nobody", "No cheque and no slip [[fnaf3-guard-unnamed]]"],
      ] },
      { kind: "callout", tone: "open", title: "Mike Schmidt and Michael Afton", text: "No record links any two of these guards. Whether Mike Schmidt is {{michael-afton}}, the killer's son, is open. The whole of the case is a first name on a cheque and the word \"Odor\" on a pink slip, and Fritz Smith's slip gives the same reason. The model does not use it (see ((michael)) and ((open)))." },
      { kind: "heading", text: "By the end of the year" },
      // REVIEW: the outline's point 7 quotes "It's a tragedy" from fnaf1-news-closing. That line is printed in the
      // five-children clipping (fnaf1-news-five-children notes, fnaf1-news-uphill-battle claim), not in the closing
      // one, so it is not quoted here.
      "The last of the four clippings on the East Hall Corner camera is, most likely, this restaurant's own notice.",
      { kind: "quote", evidence: "fnaf1-news-closing" },
      "Like the other clippings it is undated, and it adds that a year-long search found no buyer. Read as old news it would describe the old restaurant's end before 1987, and leave this one's closing unrecorded. The model takes it as the present of the game that shows it. What happens next in the empty building is told in ((springtrap)). Why its four machines walk at night is the subject of ((golden)).",
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "fnaf1-help-wanted-ad", "scott-2014-fnaf1-store-summer-job"],
    tension: "Three records resist the placing. Phone Guy says the characters have sung the same songs \"for twenty years\" [[fnaf1-call1-twenty-years]]. The model takes it as loose talk about the age of the act, not the gap between two games. Taken literally it would put FNaF1 some twenty years after the machines first sang, which points away from an early date. The advertisement says nothing of a reopening [[fnaf1-help-wanted-ad]], and \"the tragedy that took place there\" could mean the brand as easily as the building, which is why the old building stays at most likely. Scott's store text calls the post a \"summer job\" [[scott-2014-fnaf1-store-summer-job]] where the game's own cheques are dated November, and the model prefers the cheques. One more thing is unsettled. The closing clipping is undated: if it is the old restaurant's notice from before 1987, FNaF1's own closing has no record, and the placing of the killer's death after it loses its marker (see ((springtrap))).",
    changesIf: "A year on FNaF1's cheques, a date on the closing clipping, or a record that says which building the last restaurant is.",
    seeAlso: ["november-1987", "springtrap", "golden", "cover-story", "michael", "timeline-math", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf1-its-me-hallucinations", // [shown] 'IT'S ME' hallucinations
      "fnaf1-call4-empty-heads", // [stated] Phone Guy: 'what was in all those empty heads'
      "fnaf2-call2-loved-old-characters", // [stated] Phone Guy 'loved those old characters'
      // colour
      "fnaf1-call3-play-dead", // [stated] Most guards don't last this long
      "fnaf1-its-me-graffiti", // [shown] 'IT'S ME' graffiti in the pizzeria
      "fnaf1-freddy-rips-head-poster", // [shown] Freddy pulling off his own head poster
      "fnaf1-backstage-heads-stare", // [shown] Backstage heads stare at the camera
    ],
  },
  {
    id: "springtrap", part: "nightshift", title: "He dies in the suit",
    question: "How and when did the killer die?",
    answer: "He comes back to the old restaurant, takes the four machines apart one by one, and is cornered by five ghosts in the hidden room. He climbs into the yellow rabbit suit and it closes on him. Most likely this is after the last restaurant shut, in a room that had been walled up years before, and no game shows how he got in.",
    confidence: "medium",
    hero: { image: "fnaf3-safe-room-purple-guy.jpg", caption: "FNaF3, after Night 5: grey children in the doorway, the purple figure inside, and the empty yellow rabbit suit against the right-hand wall [[fnaf3-n5-ghosts-safe-room]]." },
    body: [
      "When the first night of FNaF3 ends, the screen changes to a small game in an older style. The player is Freddy, on a stage beside Bonnie and Chica. A dark bear, Freddy's shape in deep purple, says \"follow me.\" and leads him through the building to a doorway he cannot pass: the game answers ERR [[fnaf3-eon-shadow-freddy-follow-me]]. A purple figure runs up and takes him apart [[fnaf3-eon-purple-guy-dismantles]].",
      "The next three nights end the same way, for Bonnie, then Chica, then Foxy. Each follows the bear, and each is taken apart. The parts pile up there.",
      "After the fifth night there is no bear. The player is a small grey child, crying, who walks through the same building and into the room the machines could not enter. Four more grey children stand across the way out. The purple figure is inside, and he runs from them, in a room with three arcade cabinets and an empty yellow rabbit suit [[fnaf3-n5-ghosts-safe-room]]. Then he climbs into the suit. He appears to laugh. The suit snaps shut on him, blood pours out, and he slumps to the floor [[fnaf3-n5-springlock-death]].",
      { kind: "figure", image: "fnaf3-springlock-death.png", caption: "The end of the last minigame: the suit slumped against the wall, in blood.", evidence: "fnaf3-n5-springlock-death" },
      "The old training tapes that play during FNaF3's nights had warned of this (see ((springlocks))). The third night's tape tells the wearer of such a suit: \"Do not breathe on the springlocks, as moisture may loosen them, and cause them to break loose.\" [[fnaf3-tape3-springlock-bleeding]] The man is not named here. He is the killer of the five, and the chain that names him {{william-afton}} is argued in ((killer)).",
      { kind: "heading", text: "Where" },
      "The five scenes share one map: a show stage at the top, a room of spare heads, a curtained alcove where Foxy starts, two corridors down to an office with a desk and a fan. It is the layout of FNaF1's cameras with one room more, which none of those cameras shows: the dark room with the yellow suit [[fnaf3-eon-map-fnaf1-layout]]. The building is most likely the old restaurant, the one FNaF1 reopens in (see ((fnaf1-restaurant))). In these scenes it has no staff and no customers, and its floors and tables carry dark, puddle-shaped patches [[fnaf3-eon-puddles-empty-building]].",
      { kind: "figure", image: "fnaf3-eon-minigame-map-brightened.png", caption: "The whole map, brightened: FNaF1's layout, and at the top right the one room its cameras never show.", evidence: "fnaf3-eon-map-fnaf1-layout" },
      { kind: "heading", text: "When" },
      "No date is given. Most likely this is after the last restaurant closed, and the placing rests on one thing. In November 1987 someone with inside knowledge is at work in the newer restaurant, and the model takes him for the killer, alive (see ((november-1987))). FNaF1 then shows the four machines at work (see ((fnaf1-restaurant))). On that reading the dismantling falls neither before 1987 nor between 1987 and FNaF1's week. Thirty years on, the attraction's collectors find what four dismantled machines would leave: Scott's store text lists empty shells, a hand and a hook [[scott-fnaf3-steam-description]].",
      { kind: "compare", columns: [
        { title: "After the last restaurant closed", verdict: "The model's placing", pick: true, text: "A living culprit in November 1987, four working machines in FNaF1, and thirty years later nothing but shells. It rests on reading that culprit as the killer, and it leaves the seam below: a walled-up room with him inside it." },
        { title: "Before 1987, as the old restaurant rotted", verdict: "No culprit left for 1987", text: "The old restaurant was \"left to rot for quite a while\" [[fnaf2-call1-new-location]], which suits an empty, wet building. In 1987 the older machines sit damaged, Bonnie without a face [[fnaf2-parts-service-old-models]], and Scott's FNaF2 trailer shows them under the captions \"forgotten\", \"dismantled\" and \"deactivated\" [[scott-fnaf2-trailer-captions]]. Its one cost: nobody is left alive to tamper, be locked out and use a suit that November." },
      ] },
      { kind: "heading", text: "A room that was sealed" },
      "The model's placing has a seam, and the tapes show it. The last of them tells staff that the safe rooms are being closed up at most locations, this one included.",
      { kind: "quote", evidence: "fnaf3-tape6-safe-rooms-sealed" },
      "It adds: \"Nothing is being taken out beforehand, so if you left anything inside, then it's your own fault.\" [[fnaf3-tape6-nothing-taken-out]] The tapes are addressed to working staff, so the sealing most likely comes before his death. He dies, then, inside a room that had been walled up with the rabbit suit in it, and five ghosts come in after him. No game shows who opened it, or when.",
      { kind: "heading", text: "Why he came back" },
      "FNaF3 gives no reason. A tape in Pizzeria Simulator gives one. Its speaker is the Cassette Man, the voice of that game's recordings, who talks of small souls trapped in \"prisons of my making\" [[ffps-insanity-small-souls-prisons]].",
      { kind: "quote", evidence: "ffps-insanity-lured-back", text: "He lured them all back. Back to a familiar place. Back with familiar tricks." },
      "He also says: \"He set some kind of trap. I don't know what it was, but he led them there again. He overpowered them again. And he robbed them of the only thing that they had. Again.\" [[ffps-insanity-trap-again]] He calls it \"a new way to desecrate, to humiliate, to destroy\" [[ffps-insanity-new-way-to-desecrate]]. The tape names no place and no machine. The model reads it as this building and these four: souls in machines of the speaker's making, led to a familiar place and overpowered. On that reading the dark bear is the killer's lure. The model holds that loosely, because following the bear also ends with the children out of the machines and their killer dead, and no game says what the bear is (see ((open))). What \"the only thing that they had\" was, the tape does not say, and the model adds nothing.",
      { kind: "heading", text: "Afterwards" },
      "As the suit closes, the five grey figures fade from the screen. Fade is what the screen does: the model does not tell it as release, or as their going anywhere. Where the five are from this night until the Cassette Man calls them back is not shown, and the one account the records allow is in ((salvage)). The room keeps the man in the suit for thirty years (see ((fazbears-fright))).",
    ],
    counterEvidence: ["scott-fnaf2-trailer-captions", "fnaf2-call1-new-location", "fnaf3-tape6-safe-rooms-sealed"],
    // REVIEW: the skeleton's draft tension said the rival placing "needs the four machines rebuilt and haunted again
    // afterwards". Ruling R12, as revised, withdraws the argument from the ghosts and gives the rival one cost only
    // (no living culprit for November 1987), so that clause is dropped here.
    tension: "The rival placing is before 1987, while the old restaurant stood \"left to rot\" [[fnaf2-call1-new-location]]. An empty, wet building suits that too, and Scott's FNaF2 trailer shows the older machines under the captions \"forgotten\", \"dismantled\" and \"deactivated\" [[scott-fnaf2-trailer-captions]]. It loses on one count only: it leaves no living culprit for November 1987. That count is itself a reading, which is why the placing is held at the lower end of medium. If FNaF1's closing clipping is the old restaurant's notice and not its own (see ((fnaf1-restaurant))), the placing after the last restaurant's closing loses its marker as well. And the model's placing has a seam it cannot close: the hidden room was walled up with its contents inside [[fnaf3-tape6-safe-rooms-sealed]], yet the killer and the ghosts are in it, and no game shows who opened it.",
    changesIf: "A game that shows who opened the sealed room and when, or a year on the last restaurant's cheques.",
    seeAlso: ["killer", "murders", "november-1987", "fnaf1-restaurant", "fazbears-fright", "salvage", "remnant", "open"],
    // Every record with this chapter as its home is cited above or listed as counter-evidence, so nothing is left to file.
    further: [],
  },
];
