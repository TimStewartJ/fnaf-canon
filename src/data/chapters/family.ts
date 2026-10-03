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
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "The plush is the only voice on the crying child's side. It knows what \"he\" did (\"He locked you in your room again\") [[fnaf4-plush-locked-in-room]]. It knows the boy was left behind and where the exit is [[fnaf4-left-behind-at-diner]]. It warns him about what will happen \"if he catches you\" [[fnaf4-fredbear-suit-employee-chase]] and tells him \"He hates you\" [[fnaf4-he-hates-you]]. Its pupils follow him from furniture, cars, flowers and drains, though it is never seen moving [[fnaf4-plush-follows-child]]. Its last words are a promise.",
      { kind: "quote", evidence: "fnaf4-i-will-put-you-back-together" },
      "**No record puts a spirit in it.** The minigames happen around the Bite in <<c. 1983|derived|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The party ends the five-day countdown, whose only printed year is 1983.>>. None of the games' identified ghosts (the five, Elizabeth, the killer himself) is dated earlier, and the Cassette Man's daughter's death is simply undated. The plush is not the crying child, since he is alive and it talks to him. The games leave three readings open.",
      { kind: "compare", columns: [
        { title: "A built companion", verdict: "The model's pick", pick: true, text: "The same world is full of machines that watch, learn and repeat. The workshop that made springlocks \"for the diner\" also made a Fredbear prototype [[secret-of-the-mimic-rnd-proto-pizzeria]]. One of its music toys \"learned my child's musical tastes, but it also imitated everything it heard… even private conversations\" [[secret-of-the-mimic-mail-mushmen-return]]. Its machines advertise that they are \"always watching. Watching and learning\" [[secret-of-the-mimic-stay-up-latte]], and its babysitter speaks in a dead mother's voice [[secret-of-the-mimic-log-m1-as-fiona]]. A Fredbear plush also sits on the desk of Afton's monitoring office [[sl-private-room-fredbear-plush]], though nothing says it is the same one." },
        { title: "The child's own mind", verdict: "Explains the impossible sightings", text: "The plush turns up where no toy could be and is never seen to move [[fnaf4-plush-follows-child]]. Its lines sound like a frightened child's self-talk (\"Don't be scared. I am here with you.\" \"Tomorrow is another day.\") [[fnaf4-tomorrow-is-another-day]]. Scott called the playable child one \"whose role is yet unknown\" [[scott-2015-fnaf4-store-child-role-unknown]]." },
        { title: "A presence the games never name", verdict: "Possible, unsupported", text: "FNaF World's clock ending gives the crying child's trophy while unnamed yellow eyes in the dark repeat FNaF4's line, \"We are still your friends\" [[fw-clock-ending-still-your-friends]], and FNaF4's last \"You're broken\" is shown in a different colour from the plush's other lines [[fnaf4-youre-broken]]." },
      ] },
      { kind: "heading", text: "The eyes: two sprites, and the pattern they follow" },
      "The game draws the plush two ways: with small white pupils that shift to track the child, and with plain black, empty eyes [[fnaf4-plush-two-sprites]]. In the house after Night 1 (couch, clock, hallway, bed) the pupils are there and watching. In the Night 3 flower-bed and yard sightings they are gone, and the plush never physically enters the diner [[fnaf4-plush-eyes-by-scene]]. At the very end, as the plushies fade, the promise is spoken over nothing but two white dots in the dark [[fnaf4-plush-night6-pupils-only]].",
      { kind: "figure", image: "fnaf4-plush-eyeless-vs-pupils.png", caption: "Two sprites: empty eyes in the outdoor sightings, tracking pupils in the house.", evidence: "fnaf4-plush-two-sprites" },
      "**It is not two characters.** The same plush speaks throughout, in the same voice, and the lines don't change with the sprite. The pupils mark something narrower. They are there when the plush is *watching* the child: tracking him through his own house, and in the final shot, where the watcher is all that is left. They are gone when it is only *present* as a sighting, a toy-shaped thing turning up where a toy can't be.",
      { kind: "callout", tone: "key", title: "The model's pick", text: "A watching, talking toy (the pupils), seen through a terrified child's eyes (the empty-eyed sightings). Its final promise echoes a phrase that later belongs to the father: Michael reports \"I put her back together, just like you asked me to\" [[sl-golden-freddy-cutscene-father]]. That the plush speaks for William Afton is **not established**; it is only where the echo points. See ((bite))." },
    ],
    counterEvidence: ["fnaf4-dont-you-remember-what-you-saw", "fnaf4-plush-follows-child", "fnaf4-speaker-text-colours", "fw-opening-put-you-back-together"],
    tension: "The boy's own mind explains every line with one mechanism, and the model's reading needs two: a toy with a voice at home, and the memory of that voice everywhere else. The plush speaks inside the restaurant, where no toy is drawn [[fnaf4-plush-follows-child]]; it reminds him of \"what you saw\", which only he would know [[fnaf4-dont-you-remember-what-you-saw]]; its text never changes colour or manner [[fnaf4-speaker-text-colours]]; and FNaF World gives its last promise to two lights in the dark with no toy at all [[fw-opening-put-you-back-together]]. On the words alone the readings are level. The model keeps the device because only it accounts for the twin and the handset on a desk in Afton's facility, and it keeps it at its lowest grade for the reasons above.",
    changesIf: "A game that shows who holds the handset, or shows the plush speaking with no one at the desk.",
    seeAlso: ["afton-house", "nightmares", "bite", "patterns", "edges"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // support
      "fnaf4-plush-be-careful", // [stated] Plush: 'Be careful.'
      "fnaf4-plush-he-is-hiding-again", // [stated] Plush after Night 1: 'You know he is hiding again.'
      "scottgames-site-fnaf4-property-of-fr", // [shown] FNaF4 teaser: purple hat and bow tie, hidden 'PROPERTY OF FR…ER'
      "scott-2018-fredbear-plush-design", // [stated] Scott calls the yellow bear plush 'my Fredbear plush design'
    ],
  },
  {
    id: "nightmares", part: "family", title: "The nights in the bedroom",
    question: "Are FNaF4's nights a dream, and what are the Nightmares?",
    answer: "The bedroom is a real place: in Sister Location's time it is on the monitors of Afton's facility. Whether the boy was awake in it or dreaming in that bed, the games do not settle; the model leans to awake. Either way, what he fights is not what is there: a later game's word for it is \"illusion\".",
    confidence: "low",
    hero: { image: "fnaf4-bedside-iv-drip.jpg", caption: "The bed behind FNaF4's player, in the rare variant with a drip stand beside it [[fnaf4-bedside-items]]. The quilt and the headboard are the ones on the Private Room's monitor." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["fnaf4-bedside-items", "fnaf4-nightmare-fredbear-4am", "fnaf4-reversed-phone-guy", "sl-private-room-feeds-empty"],
    tension: "The dream reading explains three things better than the model does. Flowers, pills and a drip stand can appear by the bed [[fnaf4-bedside-items]]. A sixth night is played after the party, when the boy cannot be at home [[fnaf4-nightmare-fredbear-4am]]. And a fragment of a phone call from a later year can be heard in the room [[fnaf4-reversed-phone-guy]]. Against that the model has one thing: the bedroom is a real place on a company's monitors, in the game made to ground this one. The monitors show that place empty [[sl-private-room-feeds-empty]], so they prove the room and not the nights. That is why the lean to waking events is slight.",
    changesIf: "A game that shows what the boy's attackers really were, or shows the bedroom as a set built somewhere other than a home.",
    seeAlso: ["afton-house", "plush", "bite", "ucn", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf4-bedroom-setting", // [shown] Gameplay setting: a child's bedroom
      "fnaf4-nightmare-animatronics", // [shown] Nightmare versions of the animatronics
      "scott-2015-fnaf4-story-hidden", // [stated] FNaF4's story pieces were deliberately hidden, not random easter eggs
      "scott-2018-interview-fnaf4-too-broad", // [stated] 2018: FNaF4 'went too broad for interpretation'
      // support
      "fnaf4-fun-with-plushtrap", // [shown] Fun with Plushtrap
      "fnaf4-trailer-what-you-think-you-see", // [stated] Scott's FNaF4 trailer: 'What is it that you think you see?'
      "scott-2015-fnaf4-store-child-role-unknown", // [stated] FNaF4 player is 'a child whose role is yet unknown'
      // colour
      "fnaf4-nightmare-shares-fredbear-sounds", // [shown] 'Nightmare' shares Fredbear's laughter
      // other
      "scottgames-site-2019-fnafworld-58-mock-quotes", // [stated] fnafworld.com '58' teaser hides mock reviews, one about 'dream theory'
    ],
  },
  {
    id: "bite", part: "family", title: "The bite at the birthday party",
    question: "What happened at the birthday party, and what became of the child?",
    answer: "His older brother and three friends lifted him into Fredbear's mouth as a joke, and the jaw closed. It happens in the week whose only printed year is 1983, and it is not the Bite of '87. He most likely dies of it. After his last scene no game places him anywhere, and the promise made to him is never shown kept.",
    confidence: "medium",
    hero: { image: "fnaf4-bite-fredbear-stage.png", caption: "FNaF4, the day of the party: the boy in Fredbear's mouth, the yellow rabbit beside it, the four masked boys below [[fnaf4-the-bite]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "On the child's birthday [[fnaf4-its-your-birthday]], the brother and his friends push his head into Fredbear's mouth [[fnaf4-give-fredbear-a-kiss]] and the jaw closes [[fnaf4-the-bite]]. Afterwards, in the dark, the brother apologises [[fnaf4-night6-brother-apology]]. The plush says \"You're broken\" [[fnaf4-youre-broken]] and then \"I will put you back together\" [[fnaf4-i-will-put-you-back-together]], and a flatline plays [[fnaf4-flatline]]. Rare hospital props appear by the bed [[fnaf4-bedside-items]], but the playable room is a house bedroom [[fnaf4-bedroom-setting]]. Whether the nights are a patient's nightmares or a memory is left open.",
      "\"Put back together\" recurs. Michael tells his father \"I put her back together, just like you asked me to\" [[sl-golden-freddy-cutscene-father]], and UCN's Nightmare Fredbear threatens to put the player back together and take them apart again [[ucn-nightmare-fredbear-lines]]. Scott said the contents of FNaF4's locked box are \"the pieces put together\" [[scott-2015-fnaf4-box-pieces-put-together]], and FNaF World tells someone \"The pieces are in place for you\" [[fw-clock-ending-pieces-in-place]]. In 2024 he said he never pursued a specific object for the box [[scott-2024-box-interview]]. Reading the plush's voice as the father's is **speculation**: nothing identifies who speaks through it.",
      "This is not the Bite of '87. FNaF4's bite sits in a week whose only printed year is <<1983|derived|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The party ends the five-day countdown, whose only printed year is 1983.>>. Phone Guy's <<'87|printed|fnaf1-call1-bite-of-87|Spoken as 'the Bite of 87'; read as 1987.>> bite [[fnaf1-call1-bite-of-87]] is a separate incident, and the company's lawsuits show bites kept happening [[ffps-lawsuit-head-bitten]].",
    ],
    counterEvidence: ["fw-clock-ending-pieces-in-place", "ucn-death-coin-fredbear", "fnaf4-toy-collection-girl", "fnaf4-mangle-pieces-in-house"],
    tension: "Two records suggest the boy goes on. FNaF World's hidden ending tells someone \"The pieces are in place for you\" [[fw-clock-ending-pieces-in-place]], and Ultimate Custom Night lets a coin turn Golden Freddy into the bear that bit him [[ucn-death-coin-fredbear]]. The first is a frame voice that echoes FNaF4 and adds no event; the second is a game mechanic. Read together with the colour of the bear they make the best case that he and the yellow bear's child are one, and the model does not dismiss it: it loses on the count of the dead, which never has room for him. Two more records pull at the date. A girl in the minigames owns toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], and a toy like one of them lies in pieces in the house [[fnaf4-mangle-pieces-in-house]]. The model keeps the year on the television and reads the toys as deliberate misdirection.",
    changesIf: "A game that shows the crying child after Night 6, in any form, or prints a year on the party.",
    seeAlso: ["afton-house", "plush", "nightmares", "golden", "november-1987", "edges"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf4-still-your-friends", // [shown] 'We are still your friends' — plushies fade
      "fnaf4-night6-fade-order", // [shown] Night 6: the order of the lines and the fades
      "scottgames-site-fnaf4-html-83", // [shown] Two days before FNaF4's release the page-source digits changed from 87 to 83
      // support
      "fnaf4-plushies-these-are-my-friends", // [shown] The child's plushies: 'these are my friends'
      "fnaf4-fredbear-suit-employee-chase", // [shown] An employee in a Fredbear suit blocks the exit
      "fnaf4-fredbear-spring-bonnie-shadows", // [shown] Fredbear and Spring Bonnie on stage (shadows)
      "fnaf4-kid-who-hides-under-table", // [stated] 'The kid who always hides under the table'
      "fnaf4-bullies-in-masks", // [stated] Brother and friends in Freddy/Bonnie/Chica/Foxy masks
      "fnaf4-brother-lift-closer", // [stated] Brother: 'give this little man a lift'
      "scottgames-site-fnaf4-html-87", // [shown] scottgames.com page title seeded with 7s and 8s
      "scottgames-site-fnaf4-was-it-me-bonnie", // [shown] FNaF4 teaser: 'Was it me?' (Nightmare Bonnie)
      "scottgames-site-fnaf4-was-it-me-chica", // [shown] FNaF4 teaser: 'Was it me?' (Nightmare Chica)
      "scottgames-site-fnaf4-or-me-foxy", // [shown] FNaF4 teaser: 'Or me?' (Nightmare Foxy)
      "scottgames-site-fnaf4-or-was-it-me-fredbear", // [shown] FNaF4 teaser: Nightmare Fredbear torso and purple bow tie
      // colour
      "fnaf4-spring-bonnie-plush-finger-trap", // [stated] Spring Bonnie plush 'finger trap' kid
      "fnaf4-diner-unnamed", // [shown] FNaF4 never prints the restaurant's name
      "fnaf4-party-no-other-guests", // [shown] The party room holds no one but the five boys
    ],
  },
];
