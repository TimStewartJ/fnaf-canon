import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 3: The family (c. 1983).
 * A house whose rooms turn up on the monitors of Afton's facility, a toy that talks, five nights in a bedroom, and a birthday party.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "afton-house", part: "family", title: "The house on the monitors",
    question: "Is the family in FNaF4 the Aftons?",
    answer: "Most likely, yes. In Sister Location, a locked room in William Afton's facility has the bedroom of FNaF4's nights on its monitors, and FNaF4's Fredbear plush on its desk with a handset in its lap. That the house was Afton's own home, and the two boys his sons, is the model's reading of that; no game says so.",
    confidence: "medium",
    hero: { image: "sl-private-room-1983-monitors.jpg", caption: "Sister Location's Private Room with the code entered: the three monitors over the desk show a bedroom, a hallway and a bed [[sl-private-room-keypad-1983]]." },
    body: [
      "FNaF4 never says whose house it is. Captions count down five days to a party [[fnaf4-minigame-countdown-to-party]] in a house of four rooms [[fnaf4-house-rooms]]. An older brother in a Foxy mask jumps out at a small boy from behind the television [[fnaf4-brother-foxy-mask-tv]]. No parent appears in any scene [[fnaf4-no-parent-shown]]. The only adults the boy meets are at the restaurant where he is left behind [[fnaf4-left-behind-at-diner]], and one of them is a purple figure in a back room, fitting a rabbit's head onto a co-worker [[fnaf4-purple-guy-suits-up-employee]]. The one year in the game is on the family television: <<1983|printed|fnaf4-fredbear-and-friends-1983|Printed on the title card of the Fredbear and Friends broadcast on the television in the house.>>.",
      "The family's name comes from Sister Location, the following year, and from a room most players never enter.",
      { kind: "heading", text: "A room marked Private" },
      "Sister Location's Extras menu has a map of its facility. It is signed \"Copyright (c) Afton Robotics LLC\", and one of its rooms is labelled \"Private\" [[sl-extras-map-entertainment-and-rental]]. In the opening scene a board member addresses the designer of the facility's machines as \"Mr. Afton\" [[sl-intro-mr-afton-board]].",
      "On the last night the player can ignore his instructions and go in. {{handunit}}, the facility's automated voice, shuts him in until morning.",
      { kind: "quote", evidence: "sl-private-room-restricted", text: "Due to the sensitive nature of the materials that you may be exposed to here, you will not be allowed to leave until the cleanup crew arrives at 6 am." },
      "Inside are a desk, three monitors full of static, and a keypad on the wall. The keypad has no display. The code that works, as players record it, is 1-9-8-3: the one year FNaF4 prints. When it is entered the monitors change [[sl-private-room-keypad-1983]].",
      { kind: "figure", image: "sl-private-room-feeds-fnaf4.png", caption: "The three views as game textures: the bedroom, the hallway, the bed. Each is seen from high in the room, where FNaF4 never puts its player.", evidence: "sl-private-room-monitor-bedroom" },
      "The top monitor shows the bedroom in which FNaF4's nights are played: the same closet, the same furniture, the same two doorways [[sl-private-room-monitor-bedroom]]. The second looks down on the bed that stands behind the player, with its slatted headboard and its quilt of pinwheel triangles [[sl-private-room-monitor-bed]]. The third shows the hallway of the game played between nights, and the chair where Plushtrap sits, empty [[sl-private-room-monitor-hallway]]. On the desk beside the monitors sits a Fredbear plush, the same design as the toy that talks to the boy in FNaF4 [[sl-private-room-fredbear-plush]]. In its lap is a grey handset with an antenna, a grid of keys and a speaker grille [[sl-private-room-handset-beside-plush]].",
      "The room lies on a branch of the game that its real ending overrides. Its wiring is in the main run. On the second night of the main run the player restarts the facility's systems from a breaker panel. It lists eight, and the last two are \"Obsv.1\" and \"Obsv.2\" [[sl-breaker-panel-obsv-systems]]. The panel's map draws faint clusters of rooms outside the facility, each joined to it by a line. The line from the cluster that the panel powers as Obsv.2 runs to the Private Room [[sl-breaker-map-faint-clusters]] [[sl-breaker-map-obsv-identification]].",
      { kind: "figure", image: "sl-obsv2-vs-fnaf4-house-map.png", caption: "Left: the Obsv.2 cluster on Sister Location's breaker map. Right: the House Map from FNaF4's own cheat menu [[fnaf4-house-map-cheat]]. The match is between two drawings, and no label confirms it.", evidence: "sl-breaker-map-obsv2-house-layout" },
      { kind: "callout", tone: "key", title: "What is shown, and what is not", text: "A locked room in a facility signed Afton Robotics has FNaF4's bedroom, bed and hallway on its monitors, and FNaF4's plush on its desk. That much is on screen. When the pictures were made is not: the rooms are empty, and nothing says whether the views are live [[sl-private-room-feeds-empty]]. Who sat at the desk is not shown either." },
      { kind: "heading", text: "Whose house" },
      "Everything from here is inference, and the model marks it once: the house is most likely William Afton's own home, and the two boys are his sons.",
      "The facility is Afton's (see ((killer))). It has that house on its screens and that toy on its desk, and cameras high in a child's bedroom and over his bed are easy to fit only in one's own house. Sister Location is otherwise a game about Afton's children. A girl begs her \"Daddy\" to let her play with the machine he built: \"Didn't you make her just for me?\" [[sl-girl-daddy-let-me-play]]. A son opens the last cutscene with \"Father. It's me, Michael.\" [[sl-golden-freddy-cutscene-father]]. And Scott wrote in 2017 that he \"used SL to clear up a misconception from FNaF 4\" [[scott-2017-sl-cleared-fnaf4-misconception]]. In a 2018 interview, on record here as a transcript, he agreed that he had put things into the game to ground FNaF4's story [[scott-2018-interview-sl-made-to-ground-story]]. The room and the panel are the only places where Sister Location looks back at FNaF4's house. He never said what the misconception was.",
      "The family's shape fits, and no better than that. Sister Location gives Afton a son and a daughter. FNaF4's house holds two boys and a second bedroom, with a pink bed that nobody is shown using [[fnaf4-second-bedroom]]. For the two to be one family, Afton needs a third child whom no game mentions: the boy in the bed. On this reading the older brother is Michael, whose last words in FNaF4 are an apology [[fnaf4-night6-brother-apology]]. It cannot be the other way round, because the boy who is bitten most likely dies (see ((bite))), and Michael lives to go underground on his father's errand (see ((michael))). The small boy is a younger son the games never name.",
      "The reading has a difficulty of its own. The Private Room belongs to a rental business that the game dates after \"the unfortunate closing of Freddy Fazbear's Pizza\" [[sl-handunit-freddy-fazbear-closing]], and no record makes the room older than the business around it. What the player sees is the apparatus as it stands in Sister Location's own time, which the model places years after the party. That anyone sat at that desk in the week the boy was bitten is a further step, and it costs something: a watching post older than the business that houses it, or a Freddy's that had already closed by 1983. The model takes the step on the strength of the code, and holds it loosely.",
      { kind: "compare", columns: [
        { title: "His own home", verdict: "The model's reading", pick: true, text: "The simplest account of cameras over a child's bed. The plush promises the dying boy \"I will put you back together\" [[fnaf4-i-will-put-you-back-together]], and the phrase returns as the errand Afton sets his son [[sl-golden-freddy-cutscene-put-her-back-together]]: an echo, and no more than that. The cost is a third Afton child whom no game names." },
        { title: "A household he studied", verdict: "Cannot be excluded", text: "Afton watched a family that was not his. Everything on the monitors and the desk is equally true, and the blueprints of his machines list \"Parental Tracking\" among their features [[sl-blueprint-funtime-freddy]]. It needs no third child. It does need his cameras in another family's bedroom." },
        { title: "Rooms built to be watched", verdict: "Cannot be excluded", text: "The panel runs \"Obsv.\" off the facility's own breakers, the monitors show nobody, and Scott's trailer speaks of a place \"DEEP BELOW GROUND / WHERE MEMORIES SLEEP\" [[sl-trailer-deep-below-ground]]. The rooms of the nights are then a place attached to the facility, and the difficulty about the year disappears. The price is that FNaF4's nights are no longer the boy's last week at home." },
      ] },
      { kind: "callout", tone: "note", title: "Two lines that carry no weight here", text: "\"I know it was an accident\" is said in the girl's voice from the other side of the Private Room's door. Nothing says which accident, and the daughter's own death fits at least as well as the bite [[sl-fake-ending-girl-voice]]. \"Birthday boy\" is a party machine's stock phrase [[sl-funtime-freddy-bon-bon-birthday-boy]]. Neither is used." },
      "So the family in FNaF4 has a name, on the strength of one room. Three chapters follow from it: ((plush)), on who spoke through the toy on that desk; ((nightmares)), on what the boy fought in that bedroom; and ((bite)), on how the week ended.",
    ],
    counterEvidence: ["sl-private-room-feeds-empty", "fnaf4-house-rooms", "sl-handunit-freddy-fazbear-closing", "fnaf4-second-bedroom"],
    tension: "Four records push back. The monitors show nobody, and nothing says when the pictures were made [[sl-private-room-feeds-empty]]: they prove a place and a means, not a week. FNaF4 never says that the house of the minigames, where the family lives, and the house of the nights, which is what the monitors show, are one building [[fnaf4-house-rooms]], and the facility's map draws them as two clusters. The model joins them through the plush on the desk and the single week the game tells, not through the building. The business that houses the room is later than a Freddy's closing [[sl-handunit-freddy-fazbear-closing]], which is why the watching in 1983 is held loosely. And the house has two bedrooms for what the model counts as three children [[fnaf4-second-bedroom]]. The answer survives all four as \"most likely\", and no better.",
    changesIf: "A game that shows a different family in that house, shows the Private Room's views to be something other than that house, or dates the facility.",
    seeAlso: ["plush", "nightmares", "bite", "michael", "funtimes", "killer"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf4-locked-backstage", // [shown] Child locked in the diner's back room
      "sl-private-room-camera-map", // [shown] Private Room camera map: office marked 'YOU', a vent and two halls
      "sl-breaker-map-obsv1-layout", // [shown] Obsv.1: three rooms in a row, one below the middle, strips, and a taller room at the right
      "sl-breaker-map-corridor-cluster", // [shown] Third faint cluster: a corridor with two rooms on each side
      "sl-breaker-map-dots", // [shown] Breaker map dots: one white dot in each faint cluster, grey dots where the animatronics are
      "fnaf4-left-hall-grandfather-clock", // [shown] A clock at the end of the Left Hall; a grandfather clock in the minigame hallway
    ],
  },
  {
    id: "plush", part: "family", title: "The voice in the plush",
    question: "Who talks to the crying child through the Fredbear plush?",
    answer: "No game says. The model reads the plush as a toy spoken through from somewhere else, because its twin sits with a handset in its lap on the desk whose monitors show the boy's bedroom. Who held the handset is not shown, and the boy's own mind is the alternative that explains every line.",
    confidence: "low",
    hero: { image: "fnaf4-night6-put-you-back-together.png", caption: "FNaF4, after Night 6: the boy and the Fredbear plush, whole and facing him, at the line \"I will put you back together.\" [[fnaf4-plush-night6-pupils-only]]" },
    // REVIEW: R5 and the outline have the plush telling the boy which way to run "at the moment" he sees the purple figure, and cite fnaf4-dont-you-remember-what-you-saw for it. In the wiki's playthrough of that minigame (research aid only) the "what you saw" line fires on turning left, before the figure can be glimpsed. The chapter therefore says "in that same scene", and cites fnaf4-fredbear-suit-employee-chase for the directions and fnaf4-purple-guy-suits-up-employee for the glimpse.
    body: [
      "FNaF4 begins on a black screen. A caption reads \"5 days until the party\" [[fnaf4-minigame-countdown-to-party]]. Then a small yellow bear in a purple hat appears in the dark, and lines of pale yellow text come up beside it.",
      { kind: "quote", evidence: "fnaf4-plush-locked-in-room" },
      "No dialogue box in the game names its speaker. Each voice has a colour, and pale yellow belongs to this toy [[fnaf4-speaker-text-colours]], which Scott has called \"my Fredbear plush design\" [[scott-2018-fredbear-plush-design]].",
      "The voice stays with the boy through the week. When he is left at a restaurant he hates: \"He left without you. He knows that you hate it here.\" [[fnaf4-left-behind-at-diner]] The next day: \"He hates you.\" [[fnaf4-he-hates-you]] Each of the first four days ends with him collapsed in tears and the same sentence, \"Tomorrow is another day.\" [[fnaf4-tomorrow-is-another-day]] Its last words come after the party, in the dark: \"I will put you back together.\" [[fnaf4-i-will-put-you-back-together]]",
      { kind: "heading", text: "Two lines inside the house" },
      "Most of that is comfort, or blame. Two lines are something else. At home the plush turns up wherever the boy goes: on his bed, on the couch, on top of the hallway clock [[fnaf4-plush-follows-child]]. On the second day, as he walks through the house, it speaks.",
      { kind: "quote", evidence: "fnaf4-plush-he-is-hiding-again" },
      "He reaches the television, and his older brother jumps out from behind it in a Foxy mask [[fnaf4-brother-foxy-mask-tv]]. Two days later, as the boy comes home, the voice says \"Be careful.\" His brother is under the bed [[fnaf4-plush-be-careful]]. Both lines are spoken inside the house, where the toy is drawn, and both know what the brother is about to do.",
      { kind: "heading", text: "The twin on the desk" },
      "Sister Location puts the same toy somewhere else. In a locked room of {{william-afton}}'s facility, beside monitors that show this boy's bedroom, a Fredbear plush of the same design sits on the desk [[sl-private-room-fredbear-plush]]. ((afton-house)) tells that room in full. What matters here is in the plush's lap.",
      { kind: "figure", image: "sl-private-room-plush-handset.jpg", caption: "The plush on the Private Room desk. In its lap is a grey handset with an antenna, a grid of keys and a speaker grille, and no label.", evidence: "sl-private-room-handset-beside-plush" },
      "The handset is the only physical thing the games offer toward explaining how a plush talks, and it is less than it looks. A radio, a cordless telephone and a remote control would all look like it [[sl-private-room-handset-beside-plush]]. And it is seen in Sister Location's own time, years after the party on the model's dating. With that said, the model reads the plush as a toy that someone spoke through from that desk.",
      { kind: "compare", columns: [
        { title: "A toy spoken through", verdict: "The model's lean", pick: true, text: "Its twin sits with a handset on a desk in Afton's facility, beside monitors that show the bedroom. Inside the house the voice knows what the brother is about to do. The cost is a second mechanism: every line printed where no toy sits in a room has to be the boy's memory of the voice." },
        { title: "The boy's own mind", verdict: "Level on the lines", text: "One mechanism covers every line. Most are printed where no toy sits in a room: inside the restaurant, or on a black screen beside the eyeless sprite [[fnaf4-plush-eyes-by-scene]]. They appeal to what he already knows: \"Don't you remember what you saw?\" [[fnaf4-dont-you-remember-what-you-saw]] FNaF World later gives the plush's closing sentences to two dots in the dark [[fw-clock-ending-still-your-friends]]. It has no account of the desk." },
      ] },
      "On the lines alone the two are level. The model keeps the device because only it accounts for the twin and the handset, in the game Scott used, by his own account, \"to clear up a misconception from FNaF 4\" [[scott-2017-sl-cleared-fnaf4-misconception]].",
      { kind: "heading", text: "Who held it" },
      "No game shows who. The model says only: whoever sits at that desk. That it was William Afton himself is its reading at the lowest grade. For it there is an echo: the promise to put the boy back together returns, years later, as the errand Afton sets his other son [[sl-golden-freddy-cutscene-put-her-back-together]].",
      "Against it there is a scene. When the boy is left at the restaurant, the voice steers him through the building, toward the exit and then \"the other way\" to \"find someone who will help\" [[fnaf4-fredbear-suit-employee-chase]]. In that same scene he can glimpse a purple figure in a back room, fitting a rabbit's head onto another person [[fnaf4-purple-guy-suits-up-employee]]. The figure is most likely Afton (see ((killer))). If it is, he is at work in the back room while the voice gives directions.",
      { kind: "heading", text: "What the eyes show" },
      "The game draws the plush two ways.",
      { kind: "figure", image: "fnaf4-plush-eyeless-vs-pupils.png", caption: "The plush's two sprites. Left: plain black eyes. Right: four frames of the sprite whose white pupils shift to follow the boy.", evidence: "fnaf4-plush-two-sprites" },
      "It has the pupils wherever it shares a room of the house with the boy, and none on the opening screen or outdoors [[fnaf4-plush-eyes-by-scene]]. It has them once more at the end, in the scene on black after the bite: it sits whole beside him, looking at him, until its last line has been shown [[fnaf4-plush-night6-pupils-only]]. So the pupils mark a toy that is in the room and looking at him. They are not a sign that anyone is working it.",
      { kind: "callout", tone: "note", title: "Two things FNaF4 does not show", text: "The two white dots in the dark that speak the plush's last sentence are the opening screen of FNaF World, not the end of FNaF4 [[fw-opening-put-you-back-together]]. And the yellow lines after the bite cannot be split from the plush by colour: a second speaker there is not ruled out, but colour gives no evidence of one [[fnaf4-youre-broken]]." },
      "That last line, and what became of the boy it was said to, belong to ((bite)).",
    ],
    counterEvidence: ["fnaf4-dont-you-remember-what-you-saw", "fnaf4-plush-follows-child", "fnaf4-speaker-text-colours", "fw-opening-put-you-back-together"],
    tension: "The boy's own mind explains every line with one mechanism, and the model's reading needs two: a toy with a voice at home, and the memory of that voice everywhere else. The voice speaks inside the restaurant, where no toy is drawn [[fnaf4-plush-follows-child]]; it appeals to \"what you saw\", something the boy already knows [[fnaf4-dont-you-remember-what-you-saw]]; its text keeps one colour and one manner from the first line to the last [[fnaf4-speaker-text-colours]]; and FNaF World gives its last promise to two dots in the dark, with no toy at all [[fw-opening-put-you-back-together]]. On the words alone the readings are level. The model keeps the device because only it accounts for the twin and the handset on a desk in Afton's facility, and it keeps it at its lowest grade for the reasons above.",
    changesIf: "A game that shows who holds the handset, or shows the plush speaking with no one at the desk.",
    seeAlso: ["afton-house", "nightmares", "bite", "patterns", "edges"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "scottgames-site-fnaf4-property-of-fr", // [shown] FNaF4 teaser: purple hat and bow tie, hidden 'PROPERTY OF FR…ER'
    ],
  },
  {
    id: "nightmares", part: "family", title: "The nights in the bedroom",
    question: "Are FNaF4's nights a dream, and what are the Nightmares?",
    answer: "The bedroom is a real place: in Sister Location's time it is on the monitors of Afton's facility. Whether the boy was awake in it or dreaming in that bed, the games do not settle; the model leans to awake. Either way, what he fights is not what is there: a later game's word for it is \"illusion\".",
    confidence: "low",
    hero: { image: "fnaf4-bedside-iv-drip.jpg", caption: "The bed behind FNaF4's player, in the rare variant with a drip stand beside it [[fnaf4-bedside-items]]. The quilt and the headboard are the ones on the Private Room's monitor [[sl-private-room-monitor-bed]]." },
    // REVIEW: The outline has the bedside items appear "on any night". fnaf4-bedside-items does not say on which nights they appear, so the chapter says only that they can appear.
    // REVIEW: fnaf4-nightmare-animatronics is added to counterEvidence: rulings-brief R4 lists it first under "Against" (the name "Nightmare"), and the skeleton had left it out.
    // REVIEW: fnaf4-reversed-phone-guy is certainty "shown", but the analyst's memo (section 8) says the audio was taken from the wiki and not checked by ear. It is used only in the rival column and the tension.
    // REVIEW: The outline and R4 cite fnaf4-night8-no-story-text for Night 8, but theory.ts files that record outside the story (mechanics-and-rosters), and the validator warns if a chapter cites it. The chapter cites only fnaf4-locked-box-ending and speaks of "every night after the sixth". If the record is moved out of outsideStory, cite it in that sentence.
    body: [
      "FNaF4's nights are played in a child's bedroom. There are no cameras. The player has a flashlight, checks two hallway doors, a closet and the bed behind, and listens for breathing [[fnaf4-bedroom-setting]]. What comes down the halls are monstrous versions of the first game's mascots, and the Extras menu gives them their name: Nightmare versions of Freddy, Bonnie, Chica and Foxy, a Nightmare Fredbear, and one called only Nightmare [[fnaf4-nightmare-animatronics]].",
      "Scott presented the game as a question. His store page calls the player \"a child whose role is yet unknown\" [[scott-2015-fnaf4-store-child-role-unknown]], and his trailer opens on three captions.",
      { kind: "quote", evidence: "fnaf4-trailer-what-you-think-you-see" },
      "The following month he wrote that \"no one, not a single person, found the pieces.\" [[scott-2015-fnaf4-story-hidden]] Sister Location came next. In 2017 he wrote that he \"used SL to clear up a misconception from FNaF 4\", without naming it [[scott-2017-sl-cleared-fnaf4-misconception]], and in a 2018 interview, on record here as a transcript, he said FNaF4 \"went too broad for interpretation\" [[scott-2018-interview-fnaf4-too-broad]].",
      { kind: "heading", text: "A real room" },
      "Sister Location has this bedroom on a screen. In a locked room of {{william-afton}}'s facility, one monitor shows the bedroom of the nights [[sl-private-room-monitor-bedroom]], a second the bed that stands behind the player [[sl-private-room-monitor-bed]], and a third the hallway of the game played between nights [[sl-private-room-monitor-hallway]]. Each looks down from high in a corner or from the ceiling, where FNaF4 never puts its player, and each is empty [[sl-private-room-feeds-empty]]. ((afton-house)) tells the room in full.",
      "That settles one thing and leaves another. The bedroom is a place, something a camera can be pointed at. It does not follow that what the player does there happened: the monitors show the rooms with nobody in them, and nothing says when the pictures were made [[sl-private-room-feeds-empty]].",
      { kind: "heading", text: "Whose nights" },
      "The nights are threaded through one boy's week. Nights 1 to 5 fall between the scenes that count down five days to a party [[fnaf4-minigame-countdown-to-party]], and the party is his birthday [[fnaf4-its-your-birthday]]. So the one in the bed is most likely the crying child, in his own bedroom, on the last five nights before the party.",
      "Night 6 is harder to place. It is played after the bite (see ((bite))), when the boy can hardly be at home in bed, and at four in the morning Nightmare Fredbear replaces every other attacker [[fnaf4-nightmare-fredbear-4am]]. The model reads it as the same terror going on as he dies, and gives that reading little weight. Night 7 follows the scene in which he fades, and ends on a padlocked box and the words \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]] The model counts every night after the sixth as a challenge night, outside the sequence.",
      { kind: "heading", text: "Not what is there" },
      "The game's own name for the attackers is Nightmare. Between nights the thing to be stopped is a plush: Plushtrap, a small rabbit, halted on a mark in a dark hallway with a flashlight [[fnaf4-fun-with-plushtrap]]. The plainest word comes from a later game. In Ultimate Custom Night, Nightmare Fredbear speaks.",
      { kind: "quote", evidence: "ucn-nightmare-fredbear-lines", text: "This time, there is more than an illusion to fear." },
      "The line implies that last time there was only an illusion. It does not say whose, or for whom [[ucn-nightmare-fredbear-lines]]. It is the nearest thing to an explanation the games give, and the model takes it at its word: most likely, what is fought in that bedroom is not what is there. What, if anything, stood in those halls is not identified.",
      "Who the line is said to depends on who sits in Ultimate Custom Night's office, which ((ucn)) argues. On the model's lean there the listener is William Afton, and the model reads the illusion as his doing: a reading at its lowest grade, with nothing built on it. If the listener is his son instead, the line is said to someone who once faced the illusion himself, and the nights would be the older brother's.",
      { kind: "heading", text: "The dream reading" },
      { kind: "compare", columns: [
        { title: "Awake, in a real room", verdict: "The model's lean", pick: true, text: "The bedroom, the bed and the hallway are places on a company's monitors, in the game Scott made after this one. The nights fall between the days of one boy's week. On this reading he is awake, and what he sees is not what is there. It accounts for the room. It does not account for the drip stand, or for the name Nightmare." },
        { title: "A dream, or a coma", verdict: "Explains more of FNaF4", text: "The attackers are called Nightmare. Flowers, a bottle of pills or a drip stand can appear beside the bed [[fnaf4-bedside-items]]. A sixth night is played after the bite. A reversed scrap of the first game's opening phone call can be heard in the room [[fnaf4-reversed-phone-guy]]. Nobody has to stage anything. But the dream is still dreamt in a room that exists." },
      ] },
      "The model leans to the first by a short lead, and for one reason: the game made to follow FNaF4 puts that bedroom on a company's monitors. That answers anyone who says there was no such room. It does not answer the reading that he dreamt it in that room, which is why the lean is slight. Scott has named the dream reading once, in a mock review hidden on a 2019 teaser: \"stopped caring after dream theory....\" [[scottgames-site-2019-fnafworld-58-mock-quotes]] The joke rules nothing in or out.",
      "Two things are left open on purpose. Sister Location's breaker map draws small dots in each of its faint clusters of rooms, one white and the rest grey, with no legend [[sl-breaker-map-dots]]. The model reads nothing from them, and does not say that the nights are going on in Sister Location's time. And the bedroom of the nights may be the boy's own or a set of rooms built to be watched: ((afton-house)) weighs the two and cannot exclude the second.",
    ],
    counterEvidence: ["fnaf4-nightmare-animatronics", "fnaf4-bedside-items", "fnaf4-nightmare-fredbear-4am", "fnaf4-reversed-phone-guy", "sl-private-room-feeds-empty"],
    tension: "The dream reading explains four things better than the model does. The attackers' own name is Nightmare [[fnaf4-nightmare-animatronics]]. Flowers, pills and a drip stand can appear by the bed [[fnaf4-bedside-items]]. A sixth night is played after the party, when the boy cannot be at home [[fnaf4-nightmare-fredbear-4am]]. And a reversed fragment of the first game's opening phone call can be heard in the room [[fnaf4-reversed-phone-guy]]. Against that the model has one thing: the bedroom is a real place on a company's monitors, in the game made to follow this one. The monitors show that place empty [[sl-private-room-feeds-empty]], so they establish the room and not the nights. That is why the lean to waking events is slight.",
    changesIf: "A game that shows what the boy's attackers really were, or shows the bedroom as a set built somewhere other than a home.",
    seeAlso: ["afton-house", "plush", "bite", "ucn", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // colour
      "fnaf4-nightmare-shares-fredbear-sounds", // [shown] 'Nightmare' shares Fredbear's laughter
    ],
  },
  {
    id: "bite", part: "family", title: "The bite at the birthday party",
    question: "What happened at the birthday party, and what became of the child?",
    answer: "His older brother and three friends lifted him into Fredbear's mouth as a joke, and the jaw closed. It happens in the week whose only printed year is 1983, and it is not the Bite of '87. He most likely dies of it. After his last scene no game places him anywhere, and the promise made to him is never shown kept.",
    confidence: "medium",
    hero: { image: "fnaf4-bite-fredbear-stage.png", caption: "FNaF4, the day of the party: the boy in Fredbear's mouth, the rabbit beside it on the stage, the four masked boys below [[fnaf4-the-bite]]." },
    // REVIEW: The outline asks for c. 1983 as a "derived" date. The style guide (C5) and R24 make a date that depends on a reading "estimated", as the storyline does, so the pill is "estimated".
    // REVIEW: The outline's point 3 (which bite) is told after Night 6, so that the party and the scene in the dark run together.
    // REVIEW: ucn-nightmare-fredbear-lines is added to counterEvidence: rulings-brief R6 lists it under "Against".
    // REVIEW: ffps-lawsuit-head-bitten has this chapter as its home and is filed under further, not cited: model.md 5.2 calls it a joke among joke lawsuits, not evidence that bites kept happening.
    body: [
      "FNaF4 counts down to a party. Between its nights, short 8-bit scenes follow a small boy through one week, and each opens on a caption. The first reads \"5 days until the party\" [[fnaf4-minigame-countdown-to-party]]. The party is his own. \"Oh wait, you have to go! It's YOUR birthday! Haha!\" says a boy with a balloon [[fnaf4-its-your-birthday]]. The only year in the game is on the family television, which puts the week <<c. 1983|estimated|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The party ends a five-day countdown, and the only year printed in the game is 1983, on the title card of a cartoon on the family television. The card dates the show, so the week is in that year or soon after.>>.",
      "He is afraid of the place where the party will be held: a restaurant with a yellow bear called {{fredbear}} and a rabbit on its stage. Three days before the party he is inside it, sees the two of them performing, in shadow, and hides under a table sooner than walk past [[fnaf4-fredbear-spring-bonnie-shadows]]. Another child knows him by it: \"Aren't you the kid who always hides under the table and cries?\" [[fnaf4-kid-who-hides-under-table]] His friends are four plush toys in his bedroom: \"these are my friends\", the screen reads [[fnaf4-plushies-these-are-my-friends]]. The day before the party he is locked in the restaurant's parts room, crying \"Please let me out.\" [[fnaf4-locked-backstage]]",
      { kind: "heading", text: "The party" },
      "On the day, the caption reads zero [[fnaf4-minigame-countdown-to-party]]. In the restaurant four bigger boys stand round him in masks.",
      { kind: "figure", image: "fnaf4-older-brother-and-bullies.png", caption: "The day of the party. Round the boy stand his older brother, in the Foxy mask, and three friends in the masks of Bonnie, Chica and Freddy.", evidence: "fnaf4-bullies-in-masks" },
      "\"Wow, your brother is kind of a baby isn't he?\" one of them says, and his brother calls it hilarious [[fnaf4-bullies-in-masks]]. Then he has an idea: \"Come on guys, let's give this little man a lift. He wants to get up close and personal!\" [[fnaf4-brother-lift-closer]] They pick him up and carry him toward the stage while he begs them not to.",
      { kind: "quote", evidence: "fnaf4-give-fredbear-a-kiss" },
      "He counts to three, and they push the boy's head into the bear's mouth. The jaw closes on it. The boys stop laughing. Beside the bear the rabbit goes on performing, and the screen fades to black [[fnaf4-the-bite]]. No guest, no parent and no member of staff is drawn in the room [[fnaf4-party-no-other-guests]].",
      { kind: "heading", text: "In the dark" },
      "The game plays one more night, and then shows the boy in a pool of light on a black screen. With him are the Fredbear plush that has talked to him all week (see ((plush))) and the four toys he called his friends. Three lines of grey text come first, in the colour the game gives his brother [[fnaf4-speaker-text-colours]].",
      { kind: "quote", evidence: "fnaf4-night6-brother-apology" },
      "Then five lines in the plush's yellow. \"You're broken.\" [[fnaf4-youre-broken]] One of the four toys fades. \"We are still your friends.\" Another fades. \"Do you still believe that?\" \"I'm still here.\" [[fnaf4-still-your-friends]] When the fourth has gone, one line is left.",
      { kind: "quote", evidence: "fnaf4-i-will-put-you-back-together" },
      "The plush fades. The boy cries alone, then he fades too, and the screen goes black [[fnaf4-night6-fade-order]]. The transcripts describe a tone under that last fade as the flat line of a heart monitor [[fnaf4-flatline]]. He most likely dies. Everything he called a friend has left him, he is the last thing to go, and no later game shows him.",
      { kind: "heading", text: "Not the Bite of '87" },
      "Anyone who has played the first game knows of a bite already. {{phone-guy}} says the machines used to walk about by day: \"But then there was 'The Bite of '87.'\" [[fnaf1-call1-bite-of-87]] This is not that bite. The one year FNaF4 prints is 1983.",
      { kind: "figure", image: "fnaf4-fredbear-and-friends-1983-tv.png", caption: "The television in the boy's house, two days before the party: \"Fredbear & Friends!\", and under it the year 1983.", evidence: "fnaf4-fredbear-and-friends-1983" },
      "Scott's own website moved the same way. From the first teaser, digits hidden in its page source read 8 and 7 [[scottgames-site-fnaf4-html-87]]. Two days before the game came out, the 7 became a 3 [[scottgames-site-fnaf4-html-83]]. In 2017 he treated being \"hung up on 1983 vs 1987\" as a misunderstanding, without saying in his own words which way it resolves [[scott-2017-matpat-final-theory]].",
      "FNaF4 never prints its restaurant's name [[fnaf4-diner-unnamed]]. If it is the place FNaF2's Phone Guy calls \"Fredbear's Family Diner or something like that\", it had been \"closed for years\" by November 1987 [[fnaf2-call5-fredbears-family-diner]]. The Bite of '87 is another event, and what little is known of it is in ((november-1987)).",
      { kind: "heading", text: "After the fade" },
      "After that scene no record places him. Four things point somewhere, and the model follows none of them.",
      { kind: "list", items: [
        "FNaF World opens on two dots in the dark repeating the promise, and one of its endings closes: \"The pieces are in place for you. All you have to do is find them. Rest.\" [[fw-clock-ending-pieces-in-place]] That frame echoes FNaF4 on purpose and adds no event (see ((edges))).",
        "In Ultimate Custom Night one of the attackers of FNaF4's nights says \"I am remade, but not by you. By the one you should not have killed.\" [[ucn-nightmare-freddy-toysnhk]] When that game's Death Coin is used on {{golden-freddy}}, it is Fredbear that attacks [[ucn-death-coin-fredbear]].",
        "The bear that bit him was a yellow one.",
        "On the model's reading of the yellow suit used in November 1987 (see ((november-1987))), the yellow bear of the later restaurants is the suit that bit him.",
      ] },
      { kind: "compare", columns: [
        { title: "No record places him", verdict: "The model's answer", pick: true, text: "No game shows the boy after the fade, names him, or gives him a machine. Wherever the dead are counted there are the five from the pizzeria and the child outside (see ((golden))). He is neither: the five were lured into a back room and never found [[fnaf1-news-five-children]]. The cost is a promise left hanging." },
        { title: "One presence that is both", verdict: "The strongest alternative", text: "He is behind the yellow bear, alone or beside the fifth child. The four leads point that way, and Ultimate Custom Night's Nightmare Fredbear throws the promise back as a threat: \"Let me put you back together, then take you apart all over again.\" [[ucn-nightmare-fredbear-lines]] It has to find room in a count that is already full." },
      ] },
      "The model keeps to the count, and the alternative stays open (see ((open))). The promise itself comes back once more. In Sister Location a son reports to his father: \"I put her back together, just like you asked me to.\" [[sl-golden-freddy-cutscene-put-her-back-together]] That errand was for someone else (see ((michael))). For the boy at the party, no game shows the promise kept.",
    ],
    counterEvidence: ["fw-clock-ending-pieces-in-place", "ucn-death-coin-fredbear", "ucn-nightmare-fredbear-lines", "fnaf4-toy-collection-girl", "fnaf4-mangle-pieces-in-house"],
    tension: "Three records suggest the boy goes on. One ending of FNaF World tells someone \"The pieces are in place for you\" [[fw-clock-ending-pieces-in-place]]. Ultimate Custom Night lets a coin turn Golden Freddy into the bear that bit him [[ucn-death-coin-fredbear]], and has that bear throw the promise back at its player [[ucn-nightmare-fredbear-lines]]. The first is a frame voice that echoes FNaF4 and adds no event; the others are a game mechanic and a line said to a player nobody names. Together with the colour of the bear they make the best case that he and the yellow bear's child are one, and the model does not dismiss it: it loses on the count of the dead, which has no room for him. Two more records pull at the date. A girl in the minigames owns toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], and a toy like one of them lies in pieces in the house [[fnaf4-mangle-pieces-in-house]]. The model keeps the year on the television and reads the toys as deliberate misdirection.",
    changesIf: "A game that shows the crying child after Night 6, in any form, or prints a year on the party.",
    seeAlso: ["afton-house", "plush", "nightmares", "golden", "november-1987", "edges"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf4-fredbear-suit-employee-chase", // [shown] An employee in a Fredbear suit blocks the exit
      "scottgames-site-fnaf4-was-it-me-bonnie", // [shown] FNaF4 teaser: 'Was it me?' (Nightmare Bonnie)
      "scottgames-site-fnaf4-was-it-me-chica", // [shown] FNaF4 teaser: 'Was it me?' (Nightmare Chica)
      "scottgames-site-fnaf4-or-me-foxy", // [shown] FNaF4 teaser: 'Or me?' (Nightmare Foxy)
      "scottgames-site-fnaf4-or-was-it-me-fredbear", // [shown] FNaF4 teaser: Nightmare Fredbear torso and purple bow tie
      // colour
      "fnaf4-spring-bonnie-plush-finger-trap", // [stated] Spring Bonnie plush 'finger trap' kid
      "ffps-lawsuit-head-bitten", // [stated] Lawsuit: a child's head 'was bitten by an Animatronic'
    ],
  },
];
