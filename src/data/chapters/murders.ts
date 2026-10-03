import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 4: The murders (Before 1987).
 * A child shut out in the rain, children lured into a back room, and the signs the mascots carried afterwards.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "child-outside", part: "murders", title: "The child outside",
    question: "Who is the child killed outside, and what is the Puppet?",
    answer: "She is most likely the Cassette Man's daughter, shut out of a building and killed outside it by William Afton. The Puppet was the machine set to guard her. It reached her too late, and she stays on in it. The model tells her death before the five as a convention: one sentence of her father's is all that orders them.",
    confidence: "medium",
    hero: { image: "ffps-security-puppet-child-outside.png", caption: "Pizzeria Simulator's Security Puppet game, on its fourth play: the Puppet out of its box and at the exit, and the child it was assigned outside the window in the rain [[ffps-security-puppet-trapped]]. Its mask has none of the purple tear streaks it wears in FNaF2 [[ffps-security-puppet-no-tear-streaks]]." },
    body: [
      "When the guard dies in FNaF2, the game sometimes cuts to a few seconds of a crude, blocky minigame. There are four. In one of them the player is Freddy, and the caption reads \"Take cake to the children.\" Six children are indoors, and Freddy carries cake to them. A seventh stands outside the wall, crying. A purple car pulls up. A purple figure gets out, kills the crying child, and leaves. A voice spells out S-A-V-E-H-I-M, and the scene ends with the Puppet's jumpscare [[fnaf2-take-cake-to-the-children]]. FNaF2 says nothing more about this child.",
      { kind: "figure", image: "fnaf2-take-cake-to-the-children.png", caption: "Take Cake to the Children: Freddy and six children indoors, and at the top, outside the wall, the seventh child and the purple car.", evidence: "fnaf2-take-cake-to-the-children" },
      { kind: "heading", text: "The same scene, from inside the box" },
      "Pizzeria Simulator has a minigame that plays like that scene told from the other side of the wall. In Security Puppet the player is the Puppet, in a gift box, with one job: to keep one child, marked by a green bracelet, from reaching the exit. For three plays that child never comes, and touching any other child ends the game: \"This was not your assigned child.\" [[ffps-security-puppet-assignment]]",
      "On the fourth play a second gift box sits on top of the Puppet's own, and it cannot get out. The assigned child is outside in the rain, jumping at the window [[ffps-security-puppet-trapped]]. As the child fades from view, the Puppet gets free. It goes out into the rain, which damages it, finds the child's body, and collapses beside it [[ffps-security-puppet-dead-child]]. No killer is shown.",
      "The speech at the end of the game supplies the rest. Its speaker, whom the credits call only the Cassette Man [[ffps-credits-cassette-man]], turns to one listener.",
      { kind: "quote", evidence: "ffps-completion-my-daughter" },
      "While he speaks, the terminal shows that minigame's room, with a child frowning outside the window by the exit [[ffps-completion-security-puppet-terminal]].",
      { kind: "figure", image: "ffps-completion-security-puppet-terminal.png", caption: "The terminal during that speech: the Puppet's gift box, two children indoors, and a frowning child at the window by the exit.", evidence: "ffps-completion-security-puppet-terminal" },
      "Then he says which day he means.",
      { kind: "quote", evidence: "ffps-completion-shut-out", text: "I'm sorry on that day, the day you were shut out and left to die, no one was there to lift you up into their arms the way you lifted others into yours." },
      "And he speaks of what followed: \"I should have known you wouldn't be content to disappear, not my daughter.\" [[ffps-completion-not-content-to-disappear]]",
      "Two minigames show a child dead outside while other children are indoors, and each ends on the Puppet. A father describes that day while one of them is on his screen. They are most likely one event: the child outside is the Cassette Man's daughter, and she stays on in the Puppet. He never says what she became. He speaks to her as one who lifted others into her arms, with the Puppet's room in front of him.",
      "{{puppet}} is the machine FNaF2's guard is warned about. A music box, wound remotely, keeps it in its box at the Prize Corner [[fnaf2-call1-music-box]]. In play, if the music runs down, it leaves the box and kills him, and the Freddy head that fools the other machines does not stop it [[fnaf2-puppet-music-box-mechanic]]. {{phone-guy}}, the voice on the guard's phone, says: \"I never liked that puppet thing. It's always...thinking, and it can go anywhere.\" [[fnaf2-call2-foxy-puppet]]",
      { kind: "callout", tone: "tension", title: "A daughter, and the word him", text: "The voice in FNaF2 spells S-A-V-E-H-I-M, and the father speaks to a daughter. No game explains the mismatch. The model lets the later game govern, because Pizzeria Simulator puts that scene on a screen while her father describes it. Scott said in a 2018 interview, on record here as a transcript, that the game's purpose was \"to resolve some plot points\" [[scott-2018-interview-ffps-made-to-resolve-plot-points]]." },
      { kind: "heading", text: "Her father names the killer" },
      "FNaF2 draws her killer as a purple figure from a purple car, in no costume. His name comes by way of her father. In that last speech the Cassette Man tells one of his listeners that \"the darkest pit of Hell has opened to swallow you whole\", and calls him \"old friend\" [[ffps-completion-old-friend-hell]]. The friend is not named. He is most likely {{william-afton}}: the credits give that name to the salvaged rabbit, one of the machines gathered there [[ffps-credits-william-afton]] (the chain is argued in ((killer))).",
      "On a tape elsewhere in the game the same voice says he will not let himself sleep until he can \"undo what he has done\" and heal \"a wound first inflicted on me\" [[ffps-insanity-wound-first-inflicted]]. The tape names neither the man nor the wound. The model reads \"he\" as the old friend, and the wound as this death, the loss he grieves in the last speech.",
      { kind: "heading", text: "No date, no place, and an order by convention" },
      "Neither minigame carries a date or names its building. The storyline tells her death before the five, and that order is the model's convention. Its whole support is one word of that tape: the wound was \"first\" inflicted on him, and he then let it bleed out \"to cause all of this\". And the sentence does not say that \"all of this\" means the five.",
      { kind: "callout", tone: "key", title: "A rule for FNaF2's four minigames", text: "Take Cake to the Children, Foxy Go! Go! Go!, SAVE THEM, and Give Gifts, Give Life are flashes shown between deaths. The model uses what they depict: who dies, who kills, what the Puppet gives. It draws nothing from the building a scene is set in, or from the machine it is seen through. So Take Cake does not say where she died." },
      "What the Puppet does next is told in ((golden)): it gives four dead children the faces of four mascots [[fnaf2-give-gifts-give-life]]. That puts her death before the gifts, not before the killings. In Pizzeria Simulator a blueprint specifies a bear, Lefty, that emits a bracelet code for a \"security receiver\" and uses a lullaby [[ffps-lefte-blueprint]]: most likely a trap for the Puppet (see ((salvage))).",
    ],
    counterEvidence: ["hw2-pq4-graveyard-order", "ucn-withered-chica-toysnhk"],
    tension: "Take Cake's voice spells S-A-V-E-H-I-M. If the word is kept literal, FNaF2's child is a boy, another victim, and not the daughter of the later game. The model lets Pizzeria Simulator govern and keeps the mismatch on the page. Two records cut against telling her death first. In Ultimate Custom Night the older Chica says \"I was the first!\" [[ucn-withered-chica-toysnhk]]. The line does not say first of what, and the model reads it as first of the five, of whom the child outside is not one. And Help Wanted 2's graveyard is solved by lighting its six graves in an order that begins with Chica and ends with the Puppet [[hw2-pq4-graveyard-order]]. If that is an order of deaths, the two records agree with each other and against the model. The game does not say what the order orders, and the model uses it for nothing. That is why her place before the five is a convention and not a finding.",
    changesIf: "A game that dates either death, or shows the Puppet active before hers.",
    seeAlso: ["murders", "golden", "killer", "partners", "salvage", "ffps"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "ffps-security-puppet-tracks-by-body", // [shown] Security Puppet: tread marks on the ground near the body
    ],
  },
  {
    id: "murders", part: "murders", title: "The five",
    question: "What happened to the five missing children?",
    answer: "On a June 26th a man dressed as a mascot lured two children into a back room at Freddy Fazbear's Pizza; five were linked to it in the end, and no bodies were found. A man was caught the next morning and charged. The killer is William Afton, most likely in the yellow rabbit costume, at the older restaurant, some time before the 1987 one opened.",
    confidence: "medium",
    hero: { image: "fnaf1-missing-children-newspapers.jpg", caption: "The four rare clippings on FNaF1's East Hall Corner camera: everything the first game says about the missing children [[fnaf1-news-five-children]]." },
    body: [
      "The first game tells the crime in one place. On the East Hall Corner camera a poster is, rarely, replaced by a newspaper clipping. There are four. One reads:",
      { kind: "quote", evidence: "fnaf1-news-kids-vanish", text: "Two local children were reportedly lured into a back room during the late hours of operation at Freddy Fazbear's Pizza on the night of June 26th." },
      "It says that video surveillance identified the man and \"led to his capture the following morning\", and that the children \"were never found and are presumed dead\" [[fnaf1-news-suspect-captured]]. And: \"Police think that the suspect dressed as a company mascot to earn the children's trust.\" [[fnaf1-news-dressed-as-mascot]]",
      "Another clipping is later, and the count has grown. \"Five children are now linked to the incident at Freddy Fazbear's Pizza, where a man dressed as a cartoon mascot lured them into a back room.\" [[fnaf1-news-five-children]] Its headline says \"Suspect convicted.\" Its text says less: \"While the suspect has been charged, the bodies themselves were never found.\" [[fnaf1-news-charged-vs-convicted]]",
      { kind: "callout", tone: "key", title: "What is printed, and what is not", text: "The night is printed for two children: <<June 26th|printed|fnaf1-news-kids-vanish|The day and month are printed in a clipping, for two children. No year is printed.>>. The later clipping links five to the incident, and does not say that all five were taken that night. No clipping prints a year, a name, which mascot, or its colour." },
      { kind: "heading", text: "A man was caught, and never mentioned again" },
      "A man was caught <<the next morning|derived|fnaf1-news-kids-vanish,fnaf1-news-suspect-captured|The clipping gives the night of June 26th and a capture the following morning: June 27th of the same unprinted year.>> and charged. The first three games never speak of him again: no call, tape or minigame mentions an arrest or a trial [[fnaf1-news-suspect-captured]]. By FNaF3 a newspaper advertises an attraction \"based on the unsolved mysteries of Freddy Fazbear's Pizza\" [[fnaf3-coming-soon-newspaper]]. He may have been the killer, charged and then let go for want of bodies. He may have been the wrong man. The model prints the arrest and builds on neither reading. Both are weighed in ((open)), with the one retcon Scott has said he made [[scott-2017-one-retcon]].",
      { kind: "heading", text: "A June between 1980 and 1986" },
      "No year is printed. The model prints a bracket: <<a June 26th between 1980 and 1986|estimated|fnaf1-news-kids-vanish,fnaf2-overtime-robots-scrapped,fnaf2-call1-new-location,secret-of-the-mimic-rnd-proto-pizzeria|The day and month are printed. The latest June is that of 1986: the new restaurant opened in autumn 1987, and by then the old one had traded on after the incident and been left to rot for quite a while. The earliest is softer: on the 1979 night the four mascots are still unfinished prototypes.>>.",
      "The late end is the firmer. In November 1987 a new Freddy's has just opened, and on the first night its guard is told to \"forget anything you may have heard\" about \"the old location\" [[fnaf2-call1-forget-old-location]]. The new restaurant had been open \"only a few short weeks\" when it closed that month [[fnaf2-overtime-robots-scrapped]], so no June 26th falls inside its life. The incident is most likely older than that building, and belongs to the old location.",
      "That alone would allow the June of 1987. The old restaurant rules it out. After the incident the restaurant traded on, \"fighting an uphill battle ever since to convince families to return\" [[fnaf1-news-uphill-battle]], and by the time the new one opened it had been \"left to rot for quite a while\" [[fnaf2-call1-new-location]]. One summer has no room for both, and the model takes the June of 1986 as the latest.",
      "The early end is soft. Secret of the Mimic is set on one night, <<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979|The year closes the official teaser. The day is on a work order in the van, dated 9/07/79 and read month first. The document was read from an image and has not been checked in play.>>, and that night a costume maker's workshop still holds Freddy, Bonnie, Chica and Foxy as incomplete prototypes [[secret-of-the-mimic-rnd-proto-pizzeria]]. So the model takes the June of 1980 as the earliest, and holds it loosely. Prototypes of the yellow bear and the yellow rabbit stand in the same room, and their suits were most likely already in use (see ((springlocks))). No record favours the middle of the bracket.",
      { kind: "heading", text: "Most likely the old restaurant's hidden room" },
      "The clippings say a back room at Freddy Fazbear's Pizza. FNaF3 plays old staff training tapes over its nights, and one says that every location has \"one extra room that is not included in the digital map layout programmed into the animatronics or security systems\" [[fnaf3-tape3-safe-room]]. The place is most likely the older Freddy's, and the back room its hidden safe room.",
      "The fifth night's tape sets two reminders side by side. The first: \"under no circumstance should a customer ever be taken into this room\" [[fnaf3-tape5-no-customers-safe-room]]. The second:",
      { kind: "quote", evidence: "fnaf3-tape5-spring-bonnie-moved" },
      "The tape gives no reason for either and does not join them. The model reads the pair as the aftermath of the incident. That holds only if the tapes are older than the 1987 restaurant, which no record says, and ((november-1987)) leans on the same assumption: it is one support, not two.",
      { kind: "heading", text: "Most likely a yellow rabbit" },
      "{{spring-bonnie}}, the name on that tape, is most likely the yellow rabbit that FNaF3 shows on a stage beside a yellow bear [[fnaf3-stage01-fredbear-spring-bonnie]]. That would make it one of the two suits that, on the tapes, can be worn as a costume or run as a machine [[fnaf3-tape2-dual-suits]] (see ((springlocks))). The one luring by a costumed figure that the main games show has a yellow rabbit in it.",
      "Fruity Maze, an arcade game inside Pizzeria Simulator, is about a girl collecting fruit. On later plays the fruit turns to dead dogs, then to coffins and flowers [[ffps-fruity-maze-decay]]. Its last screen shows the girl in tears, a figure in the yellow rabbit costume behind her, and three lines of text.",
      { kind: "figure", image: "ffps-fruity-maze-final-screen.jpg", caption: "Fruity Maze, last screen: the figure behind the girl is in the yellow rabbit costume.", evidence: "ffps-fruity-maze-follow-me" },
      { kind: "quote", evidence: "ffps-fruity-maze-follow-me" },
      "The game names neither the girl nor whoever is in the costume, and the screen does not say who speaks the lines. The killer of the five most likely wore the yellow rabbit costume, and it was most likely the Spring Bonnie suit itself, the suit he climbs into at the end [[fnaf3-n5-springlock-death]]. The clippings' \"company mascot\" allows it, and no more.",
      { kind: "heading", text: "Five ghosts corner one man" },
      "The clippings name nobody, and no game shows the five being led away. One of FNaF2's death minigames most likely shows the result. Foxy runs out from behind a curtain to five cheering children. On the third run they lie dead, and a smiling purple figure stands in the room he started from [[fnaf2-foxy-go-go-go]]. FNaF3 shows the reckoning. Five small ghosts corner a purple figure in a hidden room, and he dies there in the Spring Bonnie suit [[fnaf3-n5-ghosts-safe-room]] (see ((springtrap))). Pizzeria Simulator's credits later give the man in that rabbit a name: {{william-afton}} [[ffps-credits-william-afton]] (see ((killer))).",
      "What the families who came back began to notice about the mascots is the subject of ((golden)).",
    ],
    counterEvidence: ["fnaf2-save-them", "fnaf1-news-dressed-as-mascot", "fnaf2-call1-summer-job", "fnaf4-pigtail-girl-hide-your-body", "into-the-pit-prologue-mci"],
    tension: "SAVE THEM shows five small bodies among the cast of the 1987 restaurant [[fnaf2-save-them]]. The model draws nothing from the building a death minigame is set in, and the chapter ((november-1987)) says why the model reads those bodies as these five. The clippings say only \"a company mascot\" [[fnaf1-news-dressed-as-mascot]]: the rabbit is supplied by later games, and by one tape whose date is assumed. The argument from June prefers FNaF2's November cheques to a line of that game's own first call, which welcomes the guard to a \"summer job\" [[fnaf2-call1-summer-job]]. If the line were right, a June inside the new restaurant's short life would be possible. Nothing orders the incident against FNaF4's birthday party (see ((bite))), and two days before that party a girl repeats a rumour that \"if you die, they hide your body and never tell anyone\" [[fnaf4-pigtail-girl-hide-your-body]]. It sounds like the aftermath of the five. It is a child's rumour and the model builds nothing on it, but it is why a year before 1983 stays in the bracket. And Into the Pit stages the scene with six bodies in one room [[into-the-pit-prologue-mci]], in a past whose only year, 1985, is on a logo graphic (placement unconfirmed) [[into-the-pit-past-year-1985]]. It is an adaptation that the main games never place, so it can agree with this chapter or differ from it, and it settles nothing (see ((edges))).",
    changesIf: "A year printed with the June 26th, a game that shows the luring of the five, or any record that names the man who was caught.",
    seeAlso: ["child-outside", "golden", "killer", "springlocks", "november-1987", "springtrap", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // colour
      "ffps-fruity-maze-car-horn", // [shown] Fruity Maze's last round ends on a car horn
    ],
  },
  {
    id: "golden", part: "murders", title: "What became of the five",
    question: "What became of the children, and is Golden Freddy one of them?",
    answer: "The mascots began to smell, and to show what looked like blood round their eyes and mouths. The model reads that as the bodies hidden inside them, which no game shows. The children stay on in the machines, and in seven counts of the dead there are four and one more: the model reads the one as the fifth child, behind the yellow bear called Golden Freddy. Four names are on the gravestones. The fifth is never given.",
    confidence: "medium",
    hero: { image: "fnaf2-give-gifts-give-life.png", caption: "FNaF2's \"Give Gifts, Give Life\" as it opens: the Puppet among four grey children, before any gift or mascot's head is given [[fnaf2-give-gifts-give-life]]." },
    body: [
      "One of the four clippings on FNaF1's East Hall Corner camera is about hygiene. The health department has threatened the restaurant with shutdown over a foul odour from its mascots. Then the police are called.",
      { kind: "quote", evidence: "fnaf1-news-sanitation" },
      "The smell most likely outlasts that restaurant. In November 1987 the older machines sit in a new restaurant's back room, and the guard is told why nobody finished repairing them: \"But they were just so ugly, you know. And the smell...ugh.\" [[fnaf2-call2-the-smell]]",
      "The first game also says, of guards, what a body in such a suit would look like. Only \"your eyeballs and teeth\" would show, {{phone-guy}} warns [[fnaf1-call1-eyeballs-teeth]], and the game-over screen shows a Freddy suit with eyeballs at its eye holes and small teeth in its mouth [[fnaf1-game-over-eyes-teeth]].",
      { kind: "callout", tone: "key", title: "What is stated, and what is read", text: "The mascots carried the signs. That the children's bodies were hidden inside them is the model's reading, and it must fit five children into four mascots. The bodies were never found [[fnaf1-news-charged-vs-convicted]], and where they went is never shown." },
      { kind: "heading", text: "The Puppet gives four heads" },
      "One scene joins the children to the mascots: one of the short minigames FNaF2 shows when the guard dies. The player is the Puppet, among four grey, slumped children. Under the caption \"Give Gifts.\" it sets a gift by each. Under \"Give Life.\" it puts on each the head of Freddy, Bonnie, Chica or Foxy, while a voice spells H-E-L-P-T-H-E-M. The scene ends with the yellow bear's jumpscare [[fnaf2-give-gifts-give-life]]. A fifth body is reported for the single frame before it, with no capture on file here.",
      "What is shown is a mascot's head set on a dead child, four times. No body goes into a machine. From here on the four are most likely in Freddy, Bonnie, Chica and Foxy, which go on to walk when they should not (see ((november-1987))). How, not even the Cassette Man can say. On one of Pizzeria Simulator's tapes he says: \"I don't know how those tiny breaths of life came to inhabit those machines.\" [[ffps-insanity-tiny-breaths]] He names no machine, and the model takes him to mean these.",
      { kind: "heading", text: "Four, and one more" },
      "The same shape, four and one more, turns up in seven places.",
      { kind: "table", head: ["Where the dead are counted", "The four", "The one more"], rows: [
        ["FNaF1", "Four machines on the night shift [[fnaf1-custom-night-names]]", "Five children in the clipping [[fnaf1-news-five-children]], and a yellow bear in the office"],
        ["Give Gifts, Give Life", "Four heads given", "The yellow bear's jumpscare, and a fifth body reported for one frame"],
        ["FNaF3, after Night 5", "Four machines taken apart [[fnaf3-eon-purple-guy-dismantles]]", "Five ghosts in the hidden room [[fnaf3-n5-ghosts-safe-room]]"],
        ["FNaF3's Happiest Day", "Children in the four mascots' masks", "A fifth child, in a golden Freddy mask [[fnaf3-happiest-day]]"],
        ["FNaF3's ending screens", "Four heads", "A fifth, faint, on the screen captioned \"Bad ending.\" [[fnaf3-bad-ending-heads]]. None on the other [[fnaf3-good-ending-heads]]"],
        ["Pizzeria Simulator's graves", "Four stones with names", "A fifth in the row, hidden by grass [[ffps-lorekeeper-gravestones]]"],
        ["Help Wanted 2's hidden dolls and graveyard", "Dolls and graves for the four", "Golden Freddy's, and the Puppet's as a sixth [[hw2-memory-dolls]] [[hw2-pq4-graveyard-order]]"],
      ] },
      "The yellow bear marks the one more in four of the seven: FNaF1, Give Gifts, Happiest Day and Help Wanted 2. In the other three it is unmarked: a ghost, a faint head, a stone. Two more of FNaF2's minigames count otherwise, and show five dead children alike [[fnaf2-save-them]] [[fnaf2-foxy-go-go-go]]. The model reads the one more as the fifth of the five, and the yellow bear as that child's. How and when the child came to the bear, every scene withholds.",
      { kind: "heading", text: "A yellow bear with no story" },
      "FNaF1 never names it. Rarely, a poster turns into a close-up of a yellow Freddy, a child's laugh plays, and the bear is in the office [[fnaf1-golden-freddy-poster-office]]: slumped on the floor, its eye sockets empty [[fnaf1-golden-freddy-office-figure]].",
      { kind: "figure", image: "fnaf1-golden-freddy-office.jpg", caption: "The yellow bear in FNaF1's office.", evidence: "fnaf1-golden-freddy-office-figure" },
      "The name comes from a menu: FNaF2's custom night screen labels a character \"Golden Freddy\" [[fnaf2-custom-night-names]]. Asked for its story in October 2014, Scott answered: \"I can't explain Golden Freddy.\" [[scott-2014-cant-explain-golden-freddy]]",
      { kind: "compare", columns: [
        { title: "The fifth of the five", verdict: "The model's reading", pick: true, text: "The five of the clippings need five places, and the four mascots give four. The cost: the fifth is the odd one. It is given no head, no scene joins a child to the yellow bear, and in play the 1987 bear first attacks on the night a yellow suit is reported used (see ((november-1987)))." },
        { title: "The crying child of FNaF4", verdict: "Loses on the count", text: "A yellow bear, Fredbear, closes its jaw on that child's head [[fnaf4-the-bite]], and a hidden mechanic in Ultimate Custom Night answers a coin spent on Golden Freddy with Fredbear's jumpscare [[ucn-death-coin-fredbear]]. But he is not one of the five linked to the incident, and no count has a place for a child beyond the five and the child outside (see ((bite)))." },
      ] },
      { kind: "heading", text: "Four names, and a fifth withheld" },
      "Pizzeria Simulator's last image, shown to a player who has found the secrets in its three minigames, is a field of gravestones.",
      { kind: "quote", evidence: "ffps-lorekeeper-gravestones" },
      { kind: "figure", image: "ffps-lorekeeper-the-end.jpg", caption: "Four named stones, a fifth behind the grass at the right, and a sixth alone on the hill.", evidence: "ffps-lorekeeper-gravestones" },
      "The sixth stone's inscription is too small to read [[ffps-lorekeeper-hill-stone]], and the game does not say whose any of them are. The row is most likely the five, and the stone on the hill that of the Cassette Man's daughter (see ((child-outside))). Which name goes with which mascot is never said. The fifth name is in no game, and this archive supplies none. Fritz and Jeremy are also the first names of two guards of 1987 (see ((fnaf1-restaurant))), and no record connects them with the stones.",
      "Three later things agree with parts of this chapter, and none establishes any of it (see ((edges)) and ((cover-story))). Candy Cadet in Pizzeria Simulator tells of five children behind five doors, none saved: a tale with a teller [[ffps-candy-cadet-five-keys]]. A sketchbook in Into the Pit, an adaptation that the main games never place, notes that Chica is starting to smell [[into-the-pit-sketchbook-chica-smell]]. In Help Wanted the company stages a child's hat, watch and shoe inside Freddy [[hw-pns-freddy-child-items]].",
      "The killer later takes the four machines apart (see ((springtrap))). Where the five are after that, no game shows, and the one account the records allow is in ((salvage)).",
    ],
    counterEvidence: ["ucn-death-coin-fredbear", "scott-2014-cant-explain-golden-freddy", "fnaf2-golden-freddy-night6-only", "fnaf2-call2-older-models"],
    tension: "The reading that the bodies went into the mascots has a record against it. In 1987 the older models have been partly retrofitted and are used for parts [[fnaf2-call2-older-models]], so they have been opened up, and still no body is on record as found. That is why the model states only the signs as fact, and gives the bodies as its reading. Three records push against the fifth child. Scott's one early word on the yellow bear is that he could not explain it [[scott-2014-cant-explain-golden-freddy]]. In play, the bear of 1987 does not attack until the night a yellow suit is reported used [[fnaf2-golden-freddy-night6-only]], so whatever ties it to its child may be later than the other four's, and of another kind. And a hidden mechanic in Ultimate Custom Night answers a coin spent on Golden Freddy with Fredbear, the bear that bit the crying child of FNaF4 [[ucn-death-coin-fredbear]]: the best case for the rival, that the yellow bear's child is the crying child, or that one presence is both. It loses on the count. He was never one of the five linked to the incident, and no count has a place for a child beyond the five and the child outside.",
    changesIf: "A game that places a different child behind the yellow bear, shows a body going into a suit, or prints the fifth name.",
    seeAlso: ["murders", "child-outside", "bite", "springtrap", "fazbears-fright", "ffps", "salvage"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf1-screaming-children-drawings", // [shown] Screaming-children drawings
      "hw-mobile-princess-quest-graveyard", // [shown] Princess Quest graveyard
      "hw2-faz-force-six-figures", // [shown] The six Faz Force figures
      "hw2-remember-jeremy-achievement", // [stated] Achievement 'Remember Jeremy?' for retrieving a memory
      "hw2-pq4-bonnie-mask", // [stated] PQ IV secret chest: a Bonnie mask, 'This looks familiar...'
      // colour
      "fnaf1-post-mortem-golden-freddy", // [shown] Rare Golden Freddy after game over / eyeless Bonnie
    ],
  },
];
