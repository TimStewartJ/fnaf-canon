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
    id: "november-1987", part: "nightshift", title: "November 1987, and the Bite of '87",
    question: "What happened at the 1987 restaurant, and what was the Bite of '87?",
    answer: "The 1987 restaurant came apart in one week of November: talk of something \"tragic\", an investigation, a report of possible tampering, a lockdown against \"previous employees\", a spare yellow suit that \"someone used\", and closure. The killer was most likely back in the building, and no record says what he did there. The Bite of '87 most likely falls in the restaurant's last days, and who bit whom is never shown.",
    confidence: "medium",
    hero: { image: "fnaf2-parts-service-old-models.jpg", caption: "FNaF2's Parts/Service room in November 1987: the older Bonnie, faceless and missing an arm, and the older Freddy on the floor [[fnaf2-parts-service-old-models]]." },
    body: [
      "FNaF2 pays its guard at the end of the fifth night, and the cheque carries the firmest date in the story.",
      { kind: "figure", image: "fnaf2-paycheck-1987.jpg", caption: "The Night 5 cheque, dated 11-12-1987.", evidence: "fnaf2-paycheck-1987" },
      "It is made out to {{jeremy-fitzgerald}} and dated <<11-12-1987|printed|fnaf2-paycheck-1987|The date printed on the Night 5 cheque.>>, with the memo \"Welcome to the family!\" The cheque for the sixth night is dated the next day [[fnaf2-overtime-robots-scrapped]].",
      "The restaurant has just opened, and the one before it has been abandoned: \"that old restaurant was kind of left to rot for quite a while\", says {{phone-guy}}, the voice on the guard's phone [[fnaf2-call1-new-location]]. Its new machines are \"tied into some kind of criminal database, so they can detect a predator a mile away\" [[fnaf2-call1-criminal-database]]. And: \"They even let them walk around during the day!\" [[fnaf2-call1-walk-around-during-day]]",
      { kind: "heading", text: "Wrong from the first night" },
      { kind: "table", head: ["When", "What is said or shown"], rows: [
        ["Before Night 1", "The first guard complains about \"conditions\" and is moved to the day shift [[fnaf2-call1-second-guard]]."],
        ["Night 1", "The engineers \"don't really have an explanation\" for machines that wander at night [[fnaf2-call1-no-night-mode]]."],
        ["Night 2", "The older models in the back room are \"from the previous location\", kept for parts [[fnaf2-call2-older-models]]. They \"shouldn't be able to walk around\". The older Foxy does from this night, and the other three from the next (a fan wiki's account) [[fnaf2-old-models-walk-from-night2]]."],
        ["Night 3", "The company line: \"whatever is going on out there, however tragic it may be, has nothing to do with our establishment\" [[fnaf2-call3-rumors]]."],
        ["Night 4", "There is \"somewhat of an investigation going on\" [[fnaf2-call4-investigation]]. Someone \"may have tampered with their facial recognition systems, we're not sure\", and the machines stare at adults [[fnaf2-call4-facial-recognition-tampered]]."],
        ["Night 5, 11-12-1987", "The building is locked down [[fnaf2-call5-lockdown]]. The company will \"try to contact the original restaurant owner\", of \"Fredbear's Family Diner or something like that\" [[fnaf2-call5-fredbears-family-diner]]."],
        ["Night 6, 11-13-1987", "The place is closed. A spare yellow suit has been used [[fnaf2-call6-yellow-suit]]. The yellow bear is active for the first time (a fan wiki's account) [[fnaf2-golden-freddy-night6-only]]."],
      ] },
      "The machines wander before anyone suspects tampering, so tampering does not explain the wandering. And the lockdown comes a night before the suit.",
      { kind: "heading", text: "A lockdown, then a suit" },
      "On the fifth night:",
      { kind: "quote", evidence: "fnaf2-call5-lockdown", text: "no one is allowed in or out, you know. Especially concerning any... ..previous employees." },
      "And on the sixth:",
      { kind: "quote", evidence: "fnaf2-call6-yellow-suit" },
      "A report of possible tampering, a lockout aimed at former staff, a spare suit that someone used: these are most likely one man with inside knowledge, and that man the killer of the five (see ((murders))).",
      "Which suit is a closer question. FNaF3's training tapes speak of two suits that double as costume and machine [[fnaf3-tape2-dual-suits]], most likely the yellow bear and the yellow rabbit that one of its minigames puts on a stage [[fnaf3-stage01-fredbear-spring-bonnie]]. The model leans to the bear: the only yellow figure in the first two games that sits slumped like an empty costume [[fnaf1-golden-freddy-office-figure]] [[fnaf2-golden-freddy-office]], and first active on this night (a fan wiki's account).",
      "FNaF3's undated tapes retire \"the classic suits\" together [[fnaf3-tapes-freddy-fazbears-pizza]] and wall up what they call the safe rooms, with their contents inside [[fnaf3-tape6-safe-rooms-sealed]]. The lean to the bear stands on two assumptions.",
      { kind: "list", ordered: true, items: [
        "That the sealing came before November 1987, with the Spring Bonnie suit behind the wall, in the room where the killer later dies in it (see ((springtrap))).",
        "That the bear was not sealed in with the rabbit.",
      ] },
      "If either fails, the spare may have been the Spring Bonnie suit, most likely the costume of the earlier crime.",
      "The call's word is \"used\". It does not say by whom or for what.",
      { kind: "callout", tone: "key", title: "What the model cannot say", text: "What was done in that restaurant that week, the model cannot say. It has a culprit, a suit and an investigation, and no act. No record names a victim of 1987." },
      { kind: "heading", text: "Five bodies in a minigame" },
      "One of the short minigames FNaF2 shows when the guard dies, SAVE THEM, is set among this restaurant's cast. The player is the older Freddy, following the Puppet past a stage where the new Freddy, Bonnie and Chica stand. Five small bodies lie in blood, and a voice spells S-A-V-E-T-H-E-M [[fnaf2-save-them]]. Rarely a purple figure rushes the player, and the game shuts on the words \"you can't\" [[fnaf2-save-them-you-cant]]. It never says whether these are the five of the clippings or five more.",
      { kind: "figure", image: "fnaf2-save-them-map.png", caption: "SAVE THEM's whole map, with five small grey bodies.", evidence: "fnaf2-save-them" },
      { kind: "compare", columns: [
        { title: "The earlier five", verdict: "The model's lean", pick: true, text: "A death minigame is a flash, and the model draws nothing from the building it is set in (see ((child-outside))). No later count of the dead goes past six, the five and the child outside [[ffps-lorekeeper-gravestones]] [[hw2-memory-dolls]], and none has a place for five more." },
        { title: "Five more, in 1987", verdict: "What FNaF2 alone suggests", text: "Five bodies among the 1987 cast, a purple figure with a mark on his chest that the purple figures of FNaF2's other two minigames lack [[fnaf2-save-them-purple-figure-chest-mark]], and a company denying something \"tragic\" by the third night. It gives the investigation and the suit something to be about. It loses on every later count of the dead." },
      ] },
      { kind: "heading", text: "The Bite of '87, most likely in the last days" },
      "The first game mentions it once, on the first night.",
      { kind: "quote", evidence: "fnaf1-call1-bite-of-87" },
      "No game says who was bitten, which machine did it, or where. Daytime walking is still allowed as this week begins. This restaurant closes within days, the old restaurant has been rotting \"for quite a while\", and no record has another Freddy's open that autumn. One event is left, a birthday on <<13 or 14 November 1987|derived|fnaf2-call6-birthday-day-shift,fnaf2-overtime-robots-scrapped|The call says tomorrow, on the night whose cheque is dated 11-13-1987.>>, where the guard is to \"stay close to the animatronics and make sure they don't hurt anyone\" [[fnaf2-call6-birthday-day-shift]]. The bite most likely falls in these last days. It may have come at that birthday, the last thing on the restaurant's calendar. It is not FNaF4's bite, which closes a week whose only printed year is 1983 (see ((bite))).",
      { kind: "heading", text: "The new machines are scrapped" },
      { kind: "figure", image: "fnaf2-robots-scrapped.jpg", caption: "The Night 6 screen: the overtime cheque over the closing newspaper.", evidence: "fnaf2-overtime-robots-scrapped" },
      "The closing newspaper blames the new machines: they \"will be scrapped due to possible malfunctions\", while \"the original characters are being kept\" [[fnaf2-news-originals-kept]]. It says nothing of an investigation. The sixth night's call says only that none of them are acting right. No record puts a child in one of the new machines, and the model reads them as machines and nothing more. The company's CEO is \"confident that we will reopen someday\" [[fnaf2-news-reopen-smaller-budget]]. What reopened is the subject of ((fnaf1-restaurant)).",
    ],
    counterEvidence: ["fnaf2-save-them", "fnaf2-save-them-purple-figure-chest-mark", "fnaf2-call3-rumors", "fnaf2-no-bite-mention", "ffps-fruity-maze-follow-me", "fnaf3-bbs-air-adventure", "fnaf3-chicas-party", "fnaf3-mangles-quest"],
    tension: "Read alone, FNaF2 suggests victims in 1987. The box above gives the model's answer, and its price: a week with no recorded act. For the Bite, no call that week uses the word [[fnaf2-no-bite-mention]], and the first game's sentence is spoken about its own four machines, so a bite earlier in 1987 at the old restaurant cannot be excluded. For the suit, the rabbit is the suit the killer dies in [[fnaf3-n5-springlock-death]], and yellow rabbit figures appear in the one luring a main game shows [[ffps-fruity-maze-decay]], which ends on a grinning yellow figure in costume behind the girl [[ffps-fruity-maze-follow-me]]; the model leans to the bear, on the two assumptions set out above. Against reading the new machines as machines and nothing more, they wander at night before any tampering is suspected, the sixth night's call says that none of them are acting right, and in FNaF3's hidden minigames it is the 1987 cast that fetches cake and gives it to crying children, Balloon Boy [[fnaf3-bbs-air-adventure]], Toy Chica [[fnaf3-chicas-party]] and Mangle [[fnaf3-mangles-quest]]: the model has no account of that.",
    changesIf: "Any record of 1987 victims (a name, a grave, a ghost), a game that shows the Bite of '87, or a date for the training tapes against November 1987.",
    seeAlso: ["murders", "golden", "fnaf1-restaurant", "springtrap", "bite", "timeline-math", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf2-help-wanted-ad", // [stated] FNaF2 Help Wanted ad: Grand Re-Opening
      "fnaf2-call1-endoskeleton-glitch", // [stated] 1987: the same 'endoskeleton without his costume' explanation
      "fnaf2-call5-day-shift-vacancy", // [stated] Night 5: a day-shift position 'just became available'
      "fnaf2-cutscenes-its-me", // [shown] Cutscenes between nights end in 'it's me'
      "scott-fnaf2-steam-description", // [stated] Scott: FNaF2 animatronics tied into local criminal databases
      "scott-2014-fnaf2-store-previous-guard", // [stated] FNaF2 Steam description: previous guard moved to day shift
      "scottgames-site-fnaf2-grand-reopening", // [shown] FNaF2 teaser: 'Grand Reopening 2015'
      "scottgames-site-fnaf2-something-borrowed", // [shown] FNaF2 teaser: 'something borrowed... something new...'
      "scott-2018-interview-fnaf3-teaser-read-as-golden-freddy", // [stated] 2018: people first took the FNaF3 teaser figure for Golden Freddy
      // colour
      "fnaf2-save-them-golden-freddy", // [shown] A slumped yellow bear can sit in SAVETHEM's rooms
      "fnaf2-call3-mangle", // [stated] Kid's Cove Foxy became 'the mangle'
      "fnaf2-jj-endo-puppet-visions", // [shown] Rare extras: a figure under the desk, a spare endoskeleton, the Puppet in static
      "fnaf2-game-over-inside-mask", // [shown] Game over: looking out through a mask at the older Freddy
    ],
  },
  {
    id: "fnaf1-restaurant", part: "nightshift", title: "The last Freddy's",
    question: "When is the first game set, and which restaurant is it?",
    answer: "After 1987, in a year the games never print. Three things are most likely: it is the old restaurant, reopened on a smaller budget with the four original machines; the notice that it will close by the end of that year is its own; and the voice on the phone is the man who trained the 1987 guards. His last recorded call implies that he did not survive his own week there.",
    confidence: "medium",
    hero: { image: "fnaf1-game-over-stuffed-suit.jpg", caption: "FNaF1's game-over screen: a Freddy suit in the back room, with human-looking eyes and small teeth showing where a mask should be empty [[fnaf1-game-over-eyes-teeth]]." },
    body: [
      "The first game begins with a newspaper advertisement. A family pizzeria wants a security guard for the night shift, midnight to six, at \"$120 a week\". The small print reads: \"Not responsible for injury/dismemberment.\" [[fnaf1-help-wanted-ad]]",
      { kind: "figure", image: "fnaf1-help-wanted-ad.jpg", caption: "The advertisement that opens FNaF1.", evidence: "fnaf1-help-wanted-ad" },
      "On the first night a recorded message is waiting. The voice is {{phone-guy}}'s: \"I actually worked in that office before you. I'm... finishing up my last week now, as a matter of fact\" [[fnaf1-call1-phone-guy-previous-guard]]. He explains the job as the company explains it. The machines are \"left in some kind of free roaming mode at night\" [[fnaf1-call1-free-roaming-mode]]. Of a guard they meet after hours he says: \"they'll probably try to... forcefully stuff you inside a Freddy Fazbear suit.\" [[fnaf1-call1-stuffed-into-suit]] What those explanations are worth is the subject of ((cover-story)).",
      { kind: "heading", text: "After 1987" },
      "Nothing in the first game says when this is. The second game does. FNaF2 is set at the 1987 restaurant, newer and richer (see ((november-1987))), and six things in it are picked up, changed, in FNaF1.",
      { kind: "table", head: ["In November 1987", "In FNaF1"], rows: [
        ["The new machines are to be scrapped, and \"the original characters are being kept\" [[fnaf2-news-originals-kept]]", "The cast is four: Freddy, Bonnie, Chica and Foxy [[fnaf1-custom-night-names]]"],
        ["The CEO expects to reopen \"with a much smaller budget\" [[fnaf2-news-reopen-smaller-budget]]", "The guard's electricity is rationed. Scott's store text: \"corporate budget cuts, you know\" [[scott-fnaf1-steam-budget-cuts]]"],
        ["Phone Guy: \"I'll probably take the night shift myself\" [[fnaf2-call6-night-shift-myself]]", "Phone Guy: \"I actually worked in that office before you\" [[fnaf1-call1-phone-guy-previous-guard]]"],
        ["The older models sit damaged in a back room, Bonnie without a face [[fnaf2-parts-service-old-models]]", "They are whole and at work: \"Freddy himself doesn't come off stage very often\" [[fnaf1-call2-freddy-dark-foxy-cove]]"],
        ["The machines \"even\" walk around during the day [[fnaf2-call1-walk-around-during-day]]", "They \"used to be allowed to\", until the Bite of '87 [[fnaf1-call1-bite-of-87]]"],
        ["Stuffing a guard into a suit is \"a minor...glitch in the system\" [[fnaf2-call1-endoskeleton-glitch]]", "It is the rule of the house"],
      ] },
      "So FNaF1 comes after November 1987. Its own cheques say how soon it could be. They are dated \"11-12-xx\" and \"11-13-xx\" [[fnaf1-paycheck-night5]] [[fnaf1-paycheck-night6]]: the year is two letters x. On 12 November 1987 the 1987 restaurant was still open and paying its guard [[fnaf2-paycheck-1987]]. So this week falls in <<a November after 1987|derived|fnaf1-paycheck-night5,fnaf2-paycheck-1987|The FNaF1 cheques read 11-12-xx and 11-13-xx. The 1987 restaurant was still paying its guard on 11-12-1987, and FNaF1 follows it, so the earliest November 12th is that of 1988. The year itself is not printed.>>, and not before November 1988. Nothing says it was 1988: that is only the earliest it can be, and the model prints no year. The working is in ((timeline-math)).",
      { kind: "figure", image: "fnaf1-paycheck-night5.png", caption: "Mike Schmidt's cheque for the fifth night. The date reads 11-12-xx.", evidence: "fnaf1-paycheck-night5" },
      { kind: "heading", text: "Most likely the old building" },
      "No game says in words which restaurant this is. It is most likely the old restaurant, left to rot before 1987 and now reopened. Four things support it.",
      { kind: "list", ordered: true, items: [
        "The closing clipping places the tragedy \"there\" [[fnaf1-news-closing]].",
        "The old restaurant still stood, unused, in 1987 [[fnaf2-call1-new-location]], and the 1987 office differs from this one on two points: it had no doors for the guard to close, and power that could not run out [[fnaf2-call1-building-cannot-run-out]].",
        "The building where the killer dies has FNaF1's layout, plus one room that none of its cameras shows [[fnaf3-eon-map-fnaf1-layout]] (see ((springtrap))).",
        "FNaF2's own cutscenes, in a game set in 1987, look out from the middle of a show stage, with the older Bonnie and Chica whole on either side [[fnaf2-cutscenes-old-stage-through-eye-holes]]. The model reads them as the older Freddy's memory of the old restaurant: the viewer stands where Freddy stands on FNaF1's stage. The game does not label that room, and this is the weakest of the four.",
      ] },
      "Against them, the advertisement says nothing of a reopening.",
      { kind: "heading", text: "One voice across two restaurants" },
      "The caller of 1987 and the caller of FNaF1 are most likely one man: in 1987 he expects to take the night shift when the place reopens, and here he has worked it. FNaF3's training tapes open with the same \"Hello, hello?\" [[fnaf3-tapes-hello-hello-greeting]]: they imply the same man, and no game says so.",
      "His messages are recordings from his own last week: on the fourth he is \"kinda glad that I recorded my messages for you\" [[fnaf1-calls-prerecorded]], and he asks a favour.",
      { kind: "quote", evidence: "fnaf1-call4-phone-guy-attacked" },
      "There is banging all through that message, and it ends in music, a scream and static (as described) [[fnaf1-call4-phone-guy-attacked]]. The fifth night's message is deep, distorted voices that end in static and a screech [[fnaf1-call5-garbled]]. No game says that he died. His last recording implies it.",
      { kind: "heading", text: "Four offices, three names" },
      { kind: "table", head: ["Office", "Name on the paperwork", "What the records say"], rows: [
        ["The 1987 restaurant, Nights 1 to 6", "{{jeremy-fitzgerald}}, on two cheques", "The second guard there [[fnaf2-call1-second-guard]], sent to work the last birthday by day [[fnaf2-call6-birthday-day-shift]]"],
        ["The 1987 restaurant, Night 7", "{{fritz-smith}}, on a pink slip [[fnaf2-pink-slip-fritz-smith]]", "\"Employee # 03\", fired on his first day for tampering with the machines, and \"Odor\""],
        ["FNaF1's restaurant", "{{mike-schmidt}}, on two cheques", "Fired after a seventh night for tampering, \"General unprofessionalism\" and \"Odor\". The slip bears no name [[fnaf1-custom-night-pink-slip]]"],
        ["Fazbear's Fright, in FNaF3", "Nobody", "No cheque and no slip [[fnaf3-guard-unnamed]]"],
      ] },
      { kind: "callout", tone: "open", title: "Mike Schmidt and Michael Afton", text: "No record links any two of these guards. Whether Mike Schmidt is {{michael-afton}}, the killer's son, is open. The whole of the case in the games is a first name on a cheque and the word \"Odor\" on a pink slip, and Fritz Smith's slip gives the same reason. The strongest evidence usually cited is in a book, which this archive does not admit. The model does not use the identification (see ((michael)) and ((open)))." },
      { kind: "heading", text: "A notice of closure, most likely its own" },
      "One of the four clippings on the East Hall Corner camera is, most likely, this restaurant's own notice.",
      { kind: "quote", evidence: "fnaf1-news-closing" },
      "Like the other clippings it is undated, and it adds that a year-long search found no buyer. Read as old news it would describe the old restaurant's end before 1987, and leave this one's closing unrecorded. The ground for reading it as this restaurant's is plain: this is the game that shows it. What most likely happens next in the empty building is told in ((springtrap)). Why its four machines walk at night is the subject of ((golden)).",
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "scott-fnaf2-steam-old-and-aging", "fnaf1-help-wanted-ad", "scott-2014-fnaf1-store-summer-job", "fnaf2-call6-yellow-suit"],
    tension: "Phone Guy says he would be irritable too if he were forced to sing \"those same stupid songs for twenty years\" [[fnaf1-call1-twenty-years]]; the model takes it as loose talk about the age of the act, though taken literally it would put FNaF1 some twenty years after the machines first sang. Scott's store text for FNaF2 reads as a sequel's, in which \"the old and aging animatronics are joined by a new cast\" [[scott-fnaf2-steam-old-and-aging]], and his text for FNaF1 calls the post a \"summer job\" [[scott-2014-fnaf1-store-summer-job]]: the model goes by the cheques. The advertisement says nothing of a reopening [[fnaf1-help-wanted-ad]], and the closing clipping's \"there\" [[fnaf1-news-closing]] could mean the brand as easily as the building, which is why the old building stays at most likely. The voice that names Spring Bonnie on FNaF3's tapes says in 1987 only \"a yellow one\" [[fnaf2-call6-yellow-suit]], which one man being vague to a guard would explain.",
    changesIf: "A year on FNaF1's cheques, a date on the closing clipping, or a record that says which building FNaF1's restaurant is.",
    seeAlso: ["november-1987", "springtrap", "golden", "cover-story", "michael", "timeline-math", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf1-its-me-hallucinations", // [shown] 'IT'S ME' screen flashes
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
    answer: "He comes back to an empty restaurant, most likely the old one, takes the four machines apart one by one, and is cornered in the room with the suit by five grey, crying children: on the model's reading, the ghosts of the five. He climbs into the Spring Bonnie suit, it snaps shut on him, and he dies in it. Most likely this is after FNaF1's restaurant shut, in a room that had already been walled up, and no game shows how he got in.",
    confidence: "medium",
    hero: { image: "fnaf3-safe-room-purple-guy.jpg", caption: "FNaF3, after Night 5: grey children in the doorway, the purple figure inside, and the empty yellow rabbit suit against the right-hand wall [[fnaf3-n5-ghosts-safe-room]]." },
    body: [
      "When the first night of FNaF3 ends, the screen changes to a small game in an older style. The player is Freddy, on a stage beside Bonnie and Chica. A dark bear, Freddy's shape in deep purple, says \"follow me.\" and leads him through the building to a doorway he cannot pass: the game answers ERR [[fnaf3-eon-shadow-freddy-follow-me]]. A purple figure runs up and takes him apart [[fnaf3-eon-purple-guy-dismantles]].",
      "The next three nights end the same way, for Bonnie, then Chica, then Foxy. Each follows the bear, and each is taken apart. The parts pile up there. The scenes follow the player's five nights, and do not say how long the work took.",
      "After the fifth night there is no bear. The player is a small grey child, crying, who walks through the same building and into the room the machines could not enter. Four more grey children stand across the way out. The purple figure is inside, and he runs from them, in a room with three arcade cabinets and an empty yellow rabbit suit [[fnaf3-n5-ghosts-safe-room]]. Then he climbs into the suit. He appears to laugh. The suit snaps shut on him, blood pours out, and he slumps to the floor [[fnaf3-n5-springlock-death]].",
      { kind: "figure", image: "fnaf3-springlock-death.png", caption: "The end of the last minigame: the suit slumped against the wall, in blood.", evidence: "fnaf3-n5-springlock-death" },
      "The screen shows no more than that. He dies there: that is an inference, and a firm one, on two supports. The old training tapes that play during FNaF3's nights say what such a suit does to its wearer (see ((springlocks))). The third night's tape warns: \"Do not breathe on the springlocks, as moisture may loosen them, and cause them to break loose.\" [[fnaf3-tape3-springlock-bleeding]] A performer whose locks come loose is to \"try to maneuver away from populated areas before bleeding out\" [[fnaf3-tape3-bleeding-out]]. And the rabbit that Fazbear's Fright later finds shows, on rare screens, what looks like a decayed human body inside the suit [[fnaf3-springtrap-corpse-screens]] (see ((fazbears-fright))).",
      "The five grey children are, on the model's reading, the ghosts of the five he killed: there are five, they are drawn as the crying children of FNaF2's minigames, they stand in the building where the four machines have just been taken apart, and he runs from them. Neither the man nor the suit is named here. The suit is most likely the one that the fifth night's tape calls \"the Spring Bonnie animatronic\" [[fnaf3-tape5-spring-bonnie-moved]] (see ((murders))). The man is the killer of the five, and the chain that names him {{william-afton}} is argued in ((killer)).",
      { kind: "heading", text: "A building laid out like FNaF1's" },
      "The five scenes share one map: a show stage, a room of spare heads, a curtained alcove where Foxy starts, and two corridors down to an office. It is the layout of FNaF1's cameras with one room more, which none of those cameras shows: the dark room with the yellow suit [[fnaf3-eon-map-fnaf1-layout]]. The building is most likely the old restaurant, the one FNaF1 reopens in (see ((fnaf1-restaurant))). In these scenes it has no staff and no customers, and its floors and tables carry dark, puddle-shaped patches [[fnaf3-eon-puddles-empty-building]].",
      { kind: "figure", image: "fnaf3-eon-minigame-map-brightened.png", caption: "The whole map, brightened: FNaF1's layout, and at the top right the one room its cameras never show.", evidence: "fnaf3-eon-map-fnaf1-layout" },
      { kind: "heading", text: "Most likely after FNaF1's restaurant closed" },
      "No date is given. Most likely this is after FNaF1's restaurant closed, and the placing rests on one reading. In November 1987 someone with inside knowledge is at work in the 1987 restaurant, and the model takes him for the killer, alive (see ((november-1987))). FNaF1 then shows the four machines at work (see ((fnaf1-restaurant))). On that reading the dismantling falls neither before 1987 nor between 1987 and FNaF1's week. By the time Fazbear's Fright is built, its collectors find none of the four at work: Scott's store text lists empty shells, a hand and a hook [[scott-fnaf3-steam-description]], and the heads boxed in its office are the 1987 cast's [[fnaf3-office-box-toy-heads]].",
      { kind: "compare", columns: [
        { title: "After FNaF1's restaurant closed", verdict: "The model's placing", pick: true, text: "A living culprit in November 1987, four working machines in FNaF1, and none of the four at work by Fazbear's Fright. It rests on reading that culprit as the killer, and it leaves the seam below: a walled-up room with him inside it." },
        { title: "Before 1987, as the old restaurant rotted", verdict: "No culprit left for 1987", text: "The old restaurant was \"left to rot for quite a while\" [[fnaf2-call1-new-location]], which suits an empty building with dark patches on its floors. In 1987 the older machines sit damaged, Bonnie without a face [[fnaf2-parts-service-old-models]], and Scott's FNaF2 trailer shows the captions \"forgotten\", \"dismantled\" and \"deactivated\" between shots of them [[scott-fnaf2-trailer-captions]]. Its one cost: nobody is left alive to be locked out, and to use a suit, that November." },
      ] },
      { kind: "heading", text: "A room that was sealed" },
      "The model's placing has a seam, and the tapes show it. The last of them tells staff that the safe rooms are being closed up at most locations, this one included.",
      { kind: "quote", evidence: "fnaf3-tape6-safe-rooms-sealed" },
      "It also says: \"Nothing is being taken out beforehand, so if you left anything inside, then it's your own fault.\" [[fnaf3-tape6-nothing-taken-out]] Most likely the room with the suit is one of these, and was sealed before he died: none of FNaF1's cameras shows it, the machines cannot enter it, and the tapes are addressed to working staff [[fnaf3-tapes-freddy-fazbears-pizza]]. He dies, then, inside a room that had been walled up with the Spring Bonnie suit in it, and five ghosts come in after him. No game shows who opened it, or when.",
      { kind: "heading", text: "Why he came back, on one reading" },
      "FNaF3 gives no reason for his coming back. Pizzeria Simulator's hidden tape (see ((ffps))) can be read as giving one. Its speaker is the Cassette Man, the voice on that game's tapes, who talks of small souls trapped in \"prisons of my making\" [[ffps-insanity-small-souls-prisons]].",
      { kind: "quote", evidence: "ffps-insanity-lured-back", text: "He lured them all back. Back to a familiar place. Back with familiar tricks." },
      "He also says: \"He set some kind of trap. I don't know what it was, but he led them there again. He overpowered them again. And he robbed them of the only thing that they had. Again.\" [[ffps-insanity-trap-again]] The tape names no place and no machine. These lines can be read as this building and these four: souls in machines of the speaker's making, led to a familiar place and overpowered. The tape does not say what \"the only thing that they had\" was.",
      "On that reading {{shadow-freddy}} may be the killer's lure: it says \"follow me.\" and leads each machine to the place where it is taken apart [[fnaf3-eon-shadow-freddy-follow-me]]. But following the bear also ends with the children out of the machines and their killer dead, and no game says what the bear is (see ((open))).",
      { kind: "heading", text: "The ghosts fade, and that is all" },
      "When he has slumped to the floor, the five grey figures fade from the screen [[fnaf3-n5-springlock-death]]. Fade is what the screen does: the model does not tell it as release, or as their going anywhere. Where the five are from this scene until the Cassette Man calls them back is not shown, and the one account the records allow is in ((salvage)). What Fazbear's Fright later finds is told in ((fazbears-fright)).",
    ],
    counterEvidence: ["scott-fnaf2-trailer-captions", "fnaf2-call1-new-location", "fnaf3-tape6-safe-rooms-sealed"],
    tension: "The rival placing, before 1987, is weighed above. It loses on one count only, the living culprit of November 1987, and that count is itself a reading, which is why the placing is held at the lower end of medium. If FNaF1's closing clipping is the old restaurant's notice and not its own (see ((fnaf1-restaurant))), the placing after FNaF1's closing loses its marker as well.",
    changesIf: "A game that shows who opened the sealed room and when, or a year on FNaF1's cheques.",
    seeAlso: ["killer", "murders", "november-1987", "fnaf1-restaurant", "fazbears-fright", "salvage", "remnant", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core, read in another chapter: the tape does not attach this phrase to the trap, and ((remnant)) reads it
      "ffps-insanity-new-way-to-desecrate", // [stated] Insanity tape: 'he found a new way to desecrate, to humiliate, to destroy'
    ],
  },
];
