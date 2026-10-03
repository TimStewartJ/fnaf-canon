import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 10: How this was built (the part's id is still `apparatus`).
 * What counts as evidence, what sits at the edge of the story, how it is dated, what each game adds, and what stays open.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "canon-rules", part: "apparatus", title: "Ground rules",
    question: "What counts as evidence here?",
    answer: "Two things: the games themselves, and Scott Cawthon's own words. The novels, the guidebooks, the films and fan theory fill no gap, even silently: that is this archive's policy, and not a ruling of Scott's. Where Scott has ruled in writing on what counts, as he has for FNaF4's two editions, Sister Location's Custom Night and Help Wanted, the model follows him; where he has not, it states its own rule, says that it is its own, and rates it medium.",
    confidence: "high",
    body: [
      "On 6 November 2017 Scott Cawthon answered a reader on Reddit.",
      { kind: "quote", evidence: "scott-2017-games-over-theories", text: "if I make a game that contradicts one of your theories, it doesn't mean that my game is wrong, it means that your theory needs to evolve." },
      "This archive is built to that rule. What counts is what a player can reach in a game, and what Scott has said in his own voice: posts, interviews, and the teasers and hidden text of his site. Any reader can check an account built this way.",
      { kind: "heading", text: "What Scott has ruled" },
      { kind: "table", head: ["On", "In his words"], rows: [
        ["The first novel, 2015", "\"The games and the books should be considered to be separate continuities, even if they do share many familiar elements.\" [[scott-2015-books-separate-continuity]]"],
        ["FNaF4's two editions, 2015", "Of the 1.1 update: \"This version is canon, as it always has been.\" The separate Halloween Edition, in the same post, is not [[scott-2015-fnaf4-halloween-canon-split]]."],
        ["Sister Location's Custom Night, 2016", "\"It will NOT be canon. (otherwise it would screw up the entire plotline!)\" [[scott-2016-sl-custom-night-not-canon]]"],
        ["Its cutscenes, 2016", "\"(By the way- Cutscenes are canon.)\" [[scott-2016-cutscenes-are-canon]]"],
        ["Help Wanted, 2019", "It puts \"characters that *are* canon, along with characters that are *questionably* canon\" into \"one game that IS canon\" [[scott-2019-help-wanted-is-canon]]."],
        ["The games inside the story, 2019", "\"Only the existence of a game developer that supposedly made video games based on actual events that may or may not be a cover up by Fazbear Entertainment is canon.\" [[scott-2019-only-game-developer-existence-canon]]"],
      ] },
      "The hedges are his, and the model keeps them (see ((cover-story))).",
      { kind: "heading", text: "The model's own rules" },
      "On Ultimate Custom Night, FNaF World's frame and Into the Pit, Scott has ruled nothing in writing. He ruled Help Wanted canon as a whole, and the rule here that sets its levels apart narrows him. The list is the archive's own, rated medium, and a written ruling from him would replace any item in it.",
      "**Which work governs.**",
      { kind: "list", items: [
        "A later game made to mend an earlier one governs the disputed point, and a chapter that uses the rule names the game and the point (see ((games))). Scott's own case: \"I used SL to clear up a misconception from FNaF 4.\" [[scott-2017-sl-cleared-fnaf4-misconception]]",
        "A whole work's standing turns on what Scott ruled in writing, then on what the work says of itself, then on whether the main games take it up, and never on how fantastical it is. So Ultimate Custom Night's lines can establish a fact, and Into the Pit can only agree with one (see ((edges))).",
        "Ultimate Custom Night's play and roster are staging [[ucn-roster-noncanon-and-fnaf-world]]; its lines and cutscenes are text (see ((ucn))).",
        "FNaF World's frame voice echoes, and adds no event (see ((edges))).",
      ] },
      "**Inside a game.**",
      { kind: "list", items: [
        "Inside a Fazbear product, the level as built is the company's staging. The frame round it is story, and so is whatever intrudes: what glitches, sits behind a secret or works against the level (see ((cover-story))).",
        "A staged prop, or a tale told by someone inside the story, agrees and never establishes, and a date on a prop is not a printed date. A chapter that cites a prop, a tale, a joke or a mechanic says which it is.",
        "What an ending or an optional route makes happen may not have happened. What it shows to be already so holds on every route (see ((pizzaplex)) and ((afton-house))).",
        "A mechanic counts when the game explains or names it. Asked why FNaF1's closed doors drain power, Scott answered: \"because- game. ;)\" [[scott-2015-doors-power-because-game]]",
        "Cut, unused and data-only content is never cited. A document read from a texture and not yet seen in play is cited as that, and its date is not called printed. The text tags it **(read from an image)**.",
        "A scene or a sound that the archive holds as a description and has not captured is tagged **(as described)**. A count, a comparison or a detail taken from a fan wiki is tagged **(a fan wiki's account)**.",
        "A sprite's colour identifies nobody (see ((killer))). What a game shows only as an apparition is not thereby an object in the room: of FNaF3's extra Springtraps Scott said, \"These are hallucinations.\" [[scott-2015-fnaf3-multiple-springtraps-hallucinations]]",
      ] },
      "**Scott's own words.**",
      { kind: "list", items: [
        "Scott's 2018 and 2024 interviews are on record here as machine transcripts of archived video: support, and never the only support for a claim about the story. The text tags them **(a transcript)**.",
        "His praise of a fan video vouches only for the points he named himself [[scott-2017-matpat-final-theory]]. The videos are not evidence here.",
      ] },
      { kind: "heading", text: "A name must be printed or spoken in a game" },
      { kind: "table", head: ["Tier", "Rule", "Examples"], rows: [
        ["A game prints or speaks it", "Used as a name", "William Afton, Michael, Elizabeth, Mike Schmidt, Springtrap, Remnant; the games' own \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]] and \"that rabbit thing\" [[ruin-fake-gregory-signal-jammer]]"],
        ["A name Scott uses that no game prints or speaks", "Given once in a chapter, in a form that says whose label it is. Nothing is argued from it", "Glitchtrap, Burntrap, Scraptrap"],
        ["A fan or file label", "Left out, for a plain description", "Shadow Freddy (here the dark bear), Shadow Bonnie (the dark rabbit), the Blob (the mass of parts), Tape Girl (the tape speaker), Phone Dude (the attraction's caller), MCI (the five)"],
      ] },
      "The middle tier is the weakest. One name is in Scott's written guide to Ultimate Custom Night [[scott-ucn-character-guide-afton]]. The other two rest on one sentence of a 2024 interview (a transcript): a working name found in the source code is \"the canon name now\" [[scott-2024-interview-placeholder-names-canon]]. No game on record prints either [[hw-tape-girl-calls-it-the-anomaly]] [[security-breach-burntrap-name-not-in-game]].",
      "Rabbits run all through the games, in the main line and outside it. Each has one fixed description here.",
      { kind: "table", head: ["Where", "Called here"], rows: [
        ["FNaF3's training tapes", "The Spring Bonnie suit, a springlock suit"],
        ["The murders of the five", "The yellow rabbit costume, which the killer most likely wore"],
        ["FNaF3", "Springtrap, his body in the suit"],
        ["Pizzeria Simulator", "The salvaged rabbit of Pizzeria Simulator, William Afton (Scott's guide adds \"AKA Scraptrap\")"],
        ["FNaF2 and FNaF3", "The dark rabbit"],
        ["Help Wanted", "The rabbit in the code (known as Glitchtrap, Scott's working name for it)"],
        ["Security Breach", "The rabbit-costumed woman, or Vanny"],
        ["Security Breach", "The burnt rabbit under the Pizzaplex (known as Burntrap, a working name that Scott has said now stands)"],
        ["RUIN", "The rabbit-shaped figure from the M.X.E.S. cabinet, or the game's own \"that rabbit thing\" [[ruin-fake-gregory-signal-jammer]]"],
        ["Outside the main line", "The yellow rabbit of Into the Pit; Special Delivery's \"vintage Bonnie\", an email's words [[sd-vintage-bonnie-reports]]"],
      ] },
      "People the games never name are called by description: the Cassette Man, a role in Pizzeria Simulator's credits and the only name the games give him [[ffps-credits-cassette-man]]; {{cassette-mans-daughter}}; {{crying-child}}; {{older-brother}}; {{fifth-child}}. No name from a novel is used for any of them.",
      { kind: "heading", text: "The books are left out by this archive, not by Scott" },
      "Scott's words on the books have moved. In 2015 the first novel was \"NOT intended to solve anything\" [[scott-2015-book-not-a-guide]], yet also: \"the book is canon, just as the games are. That doesn't mean that they are intended to fit together like two puzzle pieces.\" [[scott-2015-book-canon-not-puzzle-pieces]] In 2018 he announced a series of short stories, \"some connected directly to the games, and some not\" [[scott-2018-frights-some-connected-to-games]]. In 2020 he wrote of that series [[scott-2020-novels-means-fazbear-frights]]: \"look to the novels to fill in some of blanks to the past!\" [[scott-2020-novels-fill-blanks]] In 2024, of \"what people are saying about the canonicity of the books\", he wrote only \"yes, that is correct\" [[scott-2024-books-canonicity-yes]].",
      "So his later words do not exclude the books, and this archive leaves them out by its own policy. The cost falls on five questions that readers usually settle from them (see ((partners)), ((open)) and ((golden))).",
      { kind: "list", items: [
        "A name for the fifth child.",
        "Whether that child and the crying child share the yellow bear.",
        "Whether Mike Schmidt is Michael Afton.",
        "Who the Afton children's mother was.",
        "What the killer and his old friend were to each other.",
      ] },
      "On names Scott's own words press on the rule. In 2020, writing of a rejected film script, he used the name that readers give the fifth child [[scott-2020-cassidy-screenplay-lore-from-games]]. Of a product with that name he wrote that companies \"randomly throw around names from the lore\" [[scott-2020-cassidy-kazoo-names-from-lore]]. A second script's one named character has the name readers give the Cassette Man's daughter, and of that script he wrote that its characters \"had nothing to do with their game and book counterparts\" [[scott-2020-charlie-game-and-book-counterparts]]. None says which figure in the games bears a name, and no game on record prints either. The descriptions stay.",
    ],
    counterEvidence: ["scott-2024-books-canonicity-yes", "scott-2020-novels-fill-blanks", "scott-2019-help-wanted-is-canon", "scott-2020-cassidy-screenplay-lore-from-games", "scott-2020-cassidy-kazoo-names-from-lore", "scott-2020-charlie-game-and-book-counterparts"],
    tension: "Scott has not made this archive's rules his own. His words on the books are set out above, and the later ones do not exclude them: in 2020 \"look to the novels to fill in some of blanks to the past\" [[scott-2020-novels-fill-blanks]], and in 2024 only \"yes, that is correct\" [[scott-2024-books-canonicity-yes]], which names no position and settles nothing; the archive leaves the books out by policy. Three more records are his own words on two names this archive does not use, a rejected script [[scott-2020-cassidy-screenplay-lore-from-games]], a product he said he was pulling [[scott-2020-cassidy-kazoo-names-from-lore]] and a second script [[scott-2020-charlie-game-and-book-counterparts]]: they suggest that both names belong to the games' story, and none says whose they are. And he ruled Help Wanted canon as one game [[scott-2019-help-wanted-is-canon]]; treating its levels as the company's staging is this archive's narrower reading, argued in ((cover-story)).",
    changesIf: "Nothing in a game would change the policy, which is this archive's own. A written ruling from Scott on Ultimate Custom Night or on Security Breach's base story would replace the model's conventions for those games.",
    seeAlso: ["edges", "timeline-math", "games", "open", "cover-story"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "scott-2019-not-canon-list", // [stated] Scott / Reddit / fangames are not canon; the in-game developer is
      "scott-2015-community-uncovered-fnaf1-3", // [stated] By August 2015 the community had 'found everything' in FNaF1 to FNaF3
      "scott-2015-game-theory-fnaf2-almost-right", // [stated] Game Theory's FNaF2 video 'getting almost everything right'
      "scott-2017-matpat-answered-some-things", // [stated] 'Some of those things have been… answered(!), by MatPat'
      // support
      "scott-2015-book-reimagining", // [stated] The Silver Eyes is a re-imagining
      "scott-2015-alternate-timeline-comment", // [stated] Book may be set in a different timeline / alternate universe
      "scott-2020-lore-questions-answered", // [stated] Later projects will answer big questions
      "scott-2024-no-new-lore-on-products", // [stated] Licensed products must not create lore (not even an 'EST 1983')
      "scott-2019-fnaf4-photos-no-lore", // [implied] FNaF4 real photos (mountains, snowman, mockingbird) not lore
      "scott-2015-halloween-wont-expand-fnaf4", // [stated] Halloween release would not expand FNaF4
      "scott-2017-misunderstood-not-reveals", // [stated] Those points were misunderstandings, not saved-up reveals
      "scott-2017-lore-not-infallible", // [stated] Scott: 'I do make mistakes' – lore not infallible
      "scott-2017-tff-annotations-not-lore", // [stated] The Freddy Files' red annotations: remnants of scrapped narrators, not a lore character
      "scott-2015-community-expectations-halloween", // [stated] 'The community's expectations demanded more'
      "scott-2016-silver-eyes-not-100-percent-games", // [stated] The Silver Eyes 'doesn't follow the events of the games 100%'
      "scott-2018-interview-books-extra-stories-not-definitive", // [stated] 2018: the books were 'never intended to be the definitive story'
    ],
  },
  {
    id: "edges", part: "apparatus", title: "At the edge of the story",
    question: "Do FNaF World and Into the Pit count?",
    answer: "In part: FNaF World's adventure is outside the story, but the voice that frames it echoes FNaF4 on purpose, and the model uses it as support and never alone. Into the Pit is an adaptation that the main games never place: its events are not on the timeline, its year dates nothing, and where its background agrees with the model a chapter may say so and no more. A tale told by someone inside a game can agree too, and can never establish anything.",
    confidence: "medium",
    hero: { image: "fw-clock-ending-pieces-in-place.png", caption: "FNaF World's hidden clock ending: \"The pieces are in place for you.\" [[fw-clock-ending-pieces-in-place]]" },
    body: [
      "FNaF World begins in the dark. Before the title, two small dots say that this is a safe place, that something has gone wrong, and that they will not let the same happen to the player [[fw-opening-safe-place-something-went-wrong]]. Their last screen is a sentence that anyone who finished FNaF4 knows.",
      { kind: "quote", evidence: "fw-opening-put-you-back-together", text: "I will put you back together." },
      "It is the last yellow line of FNaF4's Night 6 cutscene [[fnaf4-i-will-put-you-back-together]], and Scott published the screen among the game's own promotional pictures [[fw-opening-put-you-back-together]]. The model takes the echo as deliberate.",
      "The verdicts first, then the reasons.",
      { kind: "table", head: ["The work", "Its standing", "How the model uses it"], rows: [
        ["FNaF World's adventure", "Imaginary, in its own words", "Not at all"],
        ["FNaF World's frame voice", "A deliberate echo of FNaF4 and FNaF3", "Support, never alone"],
        ["Into the Pit", "An adaptation that the main games never place", "Shown where it agrees; no event, no date"],
        ["Candy Cadet's tales; Ultimate Custom Night's cartoons", "Tales with a teller", "Nothing is argued from them. The tales agree, at most, that five were made into one (see ((salvage)))"],
      ] },
      { kind: "heading", text: "FNaF World: an imaginary adventure and an echo" },
      "The adventure is outside the story, and says so. Its ordinary ending tells the player that they have beaten an imaginary monster in an imaginary game [[fw-normal-ending-still-in-control]]. Before release Scott wrote that the new game would \"not add to\" the story [[scott-2015-story-complete]]. In a 2018 interview (a transcript) he said he should have \"done something that was obviously for fun and not tried to somehow tie it in to a canon game\" [[scott-2018-interview-fnaf-world-tied-to-canon-mistake]].",
      "A second voice under the adventure ties the game to the others. If the player lingers, a glitching 8-bit Fredbear sets a task: \"You have to leave breadcrumbs for him, to help him find his way.\" [[fw-8bit-fredbear-breadcrumbs]] The breadcrumbs are five hidden clocks, each with a small game behind it [[fw-clock-games-five-tasks]]. One leaves the number 395248 on the screen, the code that opens a hidden minigame in FNaF3 [[fw-clock-game-395248]]. The model reads the five as FNaF3's trail to its good ending: that one is an exact match, and the other four are resemblances.",
      "With the clocks set, two yellow dots speak in the dark again, with another line of that cutscene, a word shorter: \"We are still your friends. Do you believe that?\" [[fw-clock-ending-still-your-friends]] The model reads both pairs of dots as one voice. It finishes:",
      { kind: "quote", evidence: "fw-clock-ending-pieces-in-place" },
      "That is the frame's whole message, and it adds no event. The model uses it as support, and never alone.",
      "Two things keep its weight low. The trophy for the clock ending is a character the game calls Crying Child, drawn as the pale weeping child of FNaF2's and FNaF3's minigames and not as the brown-haired boy of FNaF4 [[fw-crying-child-character]]. And in the game's other dark scene a man at a desk says \"I've made something terrible. Her name is Baby.\" [[fw-desk-man-made-something-terrible]] The name is that of the next game's machine. The man has none.",
      { kind: "heading", text: "Into the Pit: an adaptation that no main game places" },
      "A boy named {{oswald}} hides in the ball pit of a run-down pizza place and climbs out in a busy Freddy Fazbear's Pizza of the past [[into-the-pit-jeffs-pizza-ball-pit]]. A yellow rabbit lures him to a room of dead children in party hats [[into-the-pit-prologue-mci]]. Back in the present it pulls his father into the pit; the father who climbs out has glowing eyes, and nobody else sees anything wrong [[into-the-pit-rabbit-replaces-dad]]. The rabbit has William Afton's line [[ffps-scraptrap-always-come-back]].",
      { kind: "quote", evidence: "into-the-pit-yellow-rabbit-always-come-back" },
      "The model calls Into the Pit an adaptation that the main games never place, for three reasons, and the strangeness of its plot is not one of them. Its plot comes from a book, which this archive does not admit. In a 2024 interview (a transcript) the interviewer described the game as based on one of Scott's short stories. Scott answered that it began as a small project that \"was still just supposed to be a novelty\" and grew into a full-sized game [[scott-2024-interview-into-the-pit-began-as-novelty]]. He did not say where its events belong. No main-line game refers to them, and he has written nothing that places them. Its three hidden minigames tell other tales again [[into-the-pit-secret-minigames-other-stories]] (as described).",
      "Its background agrees with the main games on four things.",
      { kind: "list", items: [
        "A yellow rabbit, and a room: a party room here, \"a back room\" in the first game's clipping [[fnaf1-news-kids-vanish]].",
        "The caller's rule: the machines \"will think that you belong inside of an animatronic suit\" [[into-the-pit-phone-guy-night3-stuffing]], as the first game's caller warns [[fnaf1-call1-stuffed-into-suit]].",
        "A smell: a technician's sketchbook asks of Chica, \"Why is she starting to smell bad?\" [[into-the-pit-sketchbook-chica-smell]], beside the first game's foul odour from the mascots [[fnaf1-news-sanitation]].",
        "A second yellow suit: the boy hides in an empty yellow bear suit [[into-the-pit-golden-freddy-suit-hide]], which fits the two suits of FNaF3's training tapes [[fnaf3-tape2-dual-suits]], most likely a yellow bear and a yellow rabbit (see ((november-1987))), and supports nothing.",
      ] },
      "It differs on two.",
      { kind: "list", items: [
        "The count: six dead children in the party room [[into-the-pit-prologue-mci]] (a fan wiki's account), where the model has five at the restaurant and a sixth killed outside a building (see ((murders)) and ((child-outside))).",
        "The rabbit, which stands in the past and promises suffering \"just like I did\" [[into-the-pit-yellow-rabbit-suffer-like-i-did]].",
      ] },
      { kind: "figure", image: "itp-freddys-logo-1985.png", caption: "A logo graphic in Into the Pit: \"FREDDY FAZBEAR'S Pizza 1985\" (read from an image). No calendar or character in the game states a year.", evidence: "into-the-pit-past-year-1985" },
      "In 2024 Scott wrote that when a licensee invents story for a product he almost always steps in: \"No, don't create lore; just focus on established lore.\" [[scott-2024-no-new-lore-on-products]] A 1985 that reached the game is either one he let through or the kind of date he says a product must not assert. Either way it dates nothing, and the model does not use it as the year of the five (see ((timeline-math))).",
      { kind: "heading", text: "Tales told inside a game" },
      "Pizzeria Simulator's Candy Cadet tells three tales, and each ends with five things made into one: five keys melted into a key that opens no door [[ffps-candy-cadet-five-keys]], five murdered orphans stitched into one body [[ffps-candy-cadet-five-orphans]], five kittens pieced back together [[ffps-candy-cadet-five-kittens]]. Ultimate Custom Night runs two cartoons between rounds, one about Toy Chica's plans to get a boy to her house [[ucn-toy-chica-hsy-premise]] and one about a bear's revenge on a fox [[ucn-bear-of-vengeance-premise]]. The model maps no character onto any of them. Mr. Hippo, another of that game's voices, gives the verdict: \"sometimes, a story's just a story.\" [[ucn-mr-hippo-just-a-story]]",
      "Ultimate Custom Night's own lines are another matter. It is Scott's game in the main line, and its lines most likely answer Pizzeria Simulator's last speech, as when one says \"He tried to release you\" [[ucn-orville-he-tried-to-release]]. So they can establish (see ((ucn))). Into the Pit has neither claim, so it can only agree.",
    ],
    counterEvidence: ["fw-crying-child-character", "fw-android-port-clock-ending", "into-the-pit-phone-guy-night3-stuffing", "fw-desk-man-deactivated-my-games"],
    tension: "The frame voice is weaker than it looks. The one figure FNaF World names Crying Child is not drawn as FNaF4's boy [[fw-crying-child-character]], and no record says that the opening's dots and the clock ending's are one speaker [[fw-opening-put-you-back-together]]. On Android the clock ending has different text, in which the dots claim the Bite of '87 and give way to a potted-plant creature [[fw-android-port-clock-ending]], and the man at the desk speaks as a maker of games, who asks \"You deactivated my games?\" before he names Baby [[fw-desk-man-deactivated-my-games]] [[fw-desk-man-made-something-terrible]]. Into the Pit pushes the other way: its phone calls describe machines that stuff people into suits [[into-the-pit-phone-guy-night3-stuffing]], which reads like the main games' own history and tempts a literal reading. Unplaced does not mean false: if a later game took up its events, the same test would move it.",
    changesIf: "A ruling from Scott on FNaF World's frame or on where Into the Pit sits, or a main-line game that refers to Into the Pit's events.",
    seeAlso: ["canon-rules", "bite", "plush", "golden", "murders", "salvage", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fw-8bit-fredbear-made-for-one-thing", // [stated] 8-bit Fredbear: 'you were made for one thing'
      "fw-desk-man-found-dead", // [shown] Desk Man found dead; 'The show will begin momentarily'
      "fw-fredbear-flipside", // [stated] Fredbear: something bad happened 'on the flipside'
      "fw-8bit-fredbear-true-goal", // [stated] 8-bit Fredbear: 'Find the clock. Everything else is a deception.'
      "fw-8bit-fredbear-puppet-master", // [stated] 8-bit Fredbear: 'the puppet-master is laughing at you'
      "ucn-toy-chica-hsy-dog-lure", // [stated] Toy Chica cartoon: 'someone ran over his dog in front of my house'
      "ucn-toy-chica-hsy-find-a-window", // [stated] Toy Chica cartoon: 'if he doesn't open the door, I'll just find a window'
      "ucn-toy-chica-hsy-bag-and-finale", // [shown] Toy Chica cartoon: the backpack of parts, and 'tomorrow is another day'
      "ucn-bear-of-vengeance-finale", // [stated] The samurai cartoon's finale: 'I will pursue the Fox'
      "hw2-candy-cadet-witch-story", // [stated] Candy Cadet: the young woman and the witch
      "into-the-pit-yellow-rabbit-naming", // [stated] The antagonist is only called the 'yellow rabbit'/'yellow thing'
      "into-the-pit-night1-child-endoskeleton", // [shown] Night 1: a child trapped in an endoskeleton
      "into-the-pit-ending-three-star", // [shown] 3-Star ending: a refurbished Jeff's Pizza
      "into-the-pit-ending-what-am-i", // [shown] 'What Am I?': Oswald becomes part of Freddy's
      "into-the-pit-sketchbook-tech-2-missing", // [stated] Technician's sketchbook: 'Tech 2 knows something. Where is he?'
      "into-the-pit-sketchbook-strings-dumped-at-mill", // [stated] Technician's sketchbook: evidence dumped at the mill before a lawsuit
      "into-the-pit-jeffs-same-building", // [shown] Jeff's Pizza is the old Freddy's building, with its Party Room boarded up
      "into-the-pit-kids-ghostbusters", // [stated] A child in the past is going to see Ghostbusters
      "scott-2016-fnaf-world-last-game", // [stated] FNaF World planned as 'the last FNaF game'
      // colour
      "fw-8bit-fredbear-something-terrible", // [stated] 8-bit Fredbear (Update 2): 'Something terrible is coming.'
      "fw-desk-man-pendulum", // [stated] Desk Man: 'The pendulum swings…'
      "fw-desk-man-first-dialogue", // [stated] The man at the desk, first version: 'It wasn't supposed to be like this.'
      "fw-update2-fredbear-he-has-gone-insane", // [stated] Update 2 Fredbear: 'he... has gone insane'
      "ucn-candy-cadet-fragments", // [stated] Candy Cadet's ghostly fragments of his FFPS stories
      "ucn-mr-hippo-duck-feeder", // [stated] Mr. Hippo: a man and his son killing the ducks with sourdough
      "ucn-bear-of-vengeance-consequence", // [stated] The samurai cartoon: each failure brings a 'consequence'
      "hw2-candy-cadet-family-story", // [stated] Candy Cadet: the family that missed the offer
      "into-the-pit-night2-chica-mike", // [shown] Night 2: Chica guards the kitchen; Mike freed
      "into-the-pit-night3-bonnie-chip", // [shown] Night 3: Bonnie torments Chip at an arcade machine
      "into-the-pit-night4-freezer", // [shown] Night 4: rabbit stuffs a girl into the freezer
      "into-the-pit-night5-dad-parts-and-service", // [shown] Night 5: Dad tied up in a secret Parts and Service room
      "into-the-pit-phone-guy-night1", // [stated] Phone call: 'we really don't have a security guard right now'
      "into-the-pit-phone-closed-maintenance", // [stated] Dialing 5555333: 'We ALWAYS come back!'
      "into-the-pit-ending-one-star", // [shown] 1-Star ending: Oswald wakes tied up in the party room
      "into-the-pit-ending-two-star", // [shown] 2-Star ending: rabbit hangs in the ball-pit net; then Jeff is attacked
      "into-the-pit-ending-see-ya-dad", // [shown] 'See Ya, Dad!': leaving through the front doors of the past
      "into-the-pit-arcade-always-watching", // [stated] Arcade boot binary: 'ALWAYS WATCHING'
      "into-the-pit-mill-closure", // [stated] The town's mill closed; Dad lost his job
      "into-the-pit-family-remembers-ball-pit", // [stated] A family at Jeff's remembers the old pizzeria and why its ball pit is roped off
      "into-the-pit-new-mill-fathers", // [stated] In the past, the boys' fathers work at 'the new mill'
    ],
  },
  {
    id: "timeline-math", part: "apparatus", title: "Dating the story",
    question: "Which dates are actually printed, and how is everything else placed?",
    answer: "Few are printed: the year 1983 on a television, a June 26th with no year, and two cheques of November 1987, and no game prints a year after 1987. The year 1979 ends a teaser; it is also on a work order, and Murray's paperwork runs from 1965 to 1977, but those documents were read from images that nobody has yet confirmed in play. Everything else is placed by order and by stated intervals such as \"thirty years\", and each date in the model says which kind of support it has.",
    confidence: "medium",
    hero: { image: "fnaf2-paycheck-1987.jpg", caption: "FNaF2's Night 5 cheque, dated 11-12-1987: one of the two full dates the first games print [[fnaf2-paycheck-1987]]." },
    body: [
      "FNaF2's fifth night ends with a cheque made out to {{jeremy-fitzgerald}} and dated 11-12-1987 [[fnaf2-paycheck-1987]]. FNaF1's ends with one made out to {{mike-schmidt}} and dated 11-12-xx [[fnaf1-paycheck-night5]]. The day and the month match, and the first game gives no year. The games print very few dates.",
      { kind: "heading", text: "What a player sees or hears" },
      { kind: "table", head: ["Date", "Where", "What it dates"], rows: [
        ["<<1983|printed|fnaf4-fredbear-and-friends-1983|Printed on the title card of a television show in the house.>>", "A television in FNaF4's house", "The show on it"],
        ["<<June 26th|printed|fnaf1-news-kids-vanish|Printed in a clipping, with no year.>>", "A clipping in FNaF1", "The night two children were lured. Five were linked to it later"],
        ["<<11-12-1987 and 11-13-1987|printed|fnaf2-paycheck-1987,fnaf2-overtime-robots-scrapped|Printed on the Night 5 cheque and the Night 6 overtime cheque.>>", "FNaF2's two cheques", "The end of FNaF2's week"],
        ["\"The Bite of '87\"", "Spoken on FNaF1's first night [[fnaf1-call1-bite-of-87]]", "A bite, by a two-digit year"],
        ["<<November 12 and 13|printed|fnaf1-paycheck-night5,fnaf1-paycheck-night6|The cheques read 11-12-xx and 11-13-xx. The year is blanked.>>", "FNaF1's two cheques", "The end of FNaF1's week, in a year printed as xx"],
        ["<<Aug 3rd|printed|secret-of-the-mimic-mail-foreclosure|The header of a mailbox message, with no year.>>", "The gate mailbox of Murray's house, in Secret of the Mimic", "Its last mail came five weeks before: used for the day of the 1979 night"],
        ["<<Dec 1st and Dec 6th|printed|secret-of-the-mimic-mail-david-party,secret-of-the-mimic-mail-party-canceled|The headers of two mailbox messages, with no year.>>", "Two office messages in the same game", "A party for David Murray, planned and called off. The model reads that as his death, and estimates <<December 1975|estimated|secret-of-the-mimic-mail-david-party,secret-of-the-mimic-mail-party-canceled|No year is given. The party was to be on a Saturday. If it was called off on its own day, 6 December was a Saturday, which between 1965 and 1979 is true only of 1969 and 1975. The notice names no death.>> (see ((two-machines)))"],
      ] },
      { kind: "heading", text: "Seen, and not counted as printed" },
      "Other dates were read from images that nobody at this archive has yet seen in play, or stand on staged props. None is called printed.",
      { kind: "figure", image: "sotm-work-order-1979.jpg", caption: "Secret of the Mimic's work order, dated 9/07/79 (read from an image).", evidence: "secret-of-the-mimic-work-order-1979" },
      { kind: "table", head: ["Date", "Where", "Status"], rows: [
        ["<<1965 to 1977|estimated|secret-of-the-mimic-mcm-net-earnings-1965-1975,secret-of-the-mimic-mcm-order-forms-1973-1977|An earnings chart runs from 1965 to 1975 and the last order form is dated January 1977. Both were read from images of the documents, not yet confirmed in play.>>", "The paperwork of Murray's Costume Manor", "Years the workshop traded (read from an image)"],
        ["21 July of a 1970s year", "A memo on the opening of Murray's research floor [[secret-of-the-mimic-mcm-rnd-floor-opening-memo]]", "The year's last digit is worn away (read from an image). If it is 1975 (a fan wiki's account), the estimate for David Murray's death is strained (see ((two-machines)))"],
        ["<<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979,secret-of-the-mimic-credential-form-1979|The year ends the official teaser. In the game it is on a work order dated 9/07/79 and on a credential form that expires in 1979, both read from images of the props and not yet confirmed in play.>>", "A teaser, and a work order in Secret of the Mimic (read from an image)", "The night of that game. The year is firm; the day is argued below"],
        ["1985", "A logo graphic in Into the Pit [[into-the-pit-past-year-1985]]", "In an adaptation that the main games never place (read from an image). It dates nothing (see ((edges)))"],
        ["1970 and \"FALLFEST 83'\"", "A poster in Help Wanted 2 [[hw2-fall-fest-1970-poster]] (read from an image); a banner in Curse of Dreadbear [[codb-fallfest-83-banner]]", "Staged props. The banner agrees with FNaF4's television; the poster is used for nothing"],
        ["1983 and 1979, as keypad codes", "The keypad of Sister Location's Private Room has no display, and answers to 1-9-8-3 [[sl-private-room-keypad-1983]] (a fan wiki's account); Help Wanted 2 has both [[hw2-puppet-master-1983]] [[hw2-mimic-teaser-1979-white-tiger]]", "Codes. No game calls either a date"],
        ["Special Delivery's email days", "The days the emails reached players [[sd-ness-blood-eagle-calendar]]", "Not printed. Only their order counts"],
      ] },
      "The day has two supports. The work order, read month first, gives 7 September, if its date is the day of the job. The gate mailbox, headed Aug 3rd, says its last mail came \"five weeks ago\" [[secret-of-the-mimic-mail-foreclosure]], and five weeks after 3 August is 7 September, if the header dates that mail. Either alone gives the day, and it is lost only if both fail.",
      { kind: "heading", text: "Derived, and estimated" },
      { kind: "list", items: [
        "<<June 27th|derived|fnaf1-news-kids-vanish,fnaf1-news-suspect-captured|The clipping gives the night of June 26th and a capture the following morning, in the same unprinted year.>>: the man was caught \"the following morning\" [[fnaf1-news-suspect-captured]].",
        "FNaF1's week is in <<a November after 1987|derived|fnaf1-paycheck-night5,fnaf2-paycheck-1987,fnaf2-news-originals-kept|The 1987 restaurant was still open on 12 November 1987. FNaF1 comes after it, and its own cheque is dated 11-12.>>: not before November 1988, because the 1987 restaurant was still trading on 12 November of that year, and FNaF1's restaurant follows it with the four machines it kept [[fnaf2-news-originals-kept]]. The pay gives no year, and the order above does not rest on it. Each game states its own weekly rate: $120 in FNaF1 [[fnaf1-help-wanted-ad]] [[fnaf1-paycheck-night5]], and $100.50 in 1987 [[fnaf2-help-wanted-ad]] [[fnaf2-paycheck-1987]]. No record gives an hourly rate or a minimum wage, so a sum could be matched to a year only against a wage table from outside the games, and on the assumption that the company paid the legal minimum.",
        "FNaF4's week is <<c. 1983|estimated|fnaf4-fredbear-and-friends-1983,fnaf4-minigame-countdown-to-party|The title card dates the show, which gives a floor. The week is in that year or soon after.>>: the title card dates the show, so the week is in that year or soon after.",
        "The five are placed on <<a June 26th between 1980 and 1986|estimated|fnaf1-news-kids-vanish,fnaf1-news-uphill-battle,fnaf2-call1-new-location,fnaf2-overtime-robots-scrapped,secret-of-the-mimic-rnd-proto-pizzeria|The day and month are printed. The 1987 restaurant opened that autumn, after the old one had traded on and then been left to rot for quite a while: the model takes the June of 1986 as the latest. It takes the June of 1980 as the earliest, a rough floor: on the 1979 night the mascots are still incomplete prototypes.>>. The model takes 1986 as the latest June, because the old restaurant traded on after the incident [[fnaf1-news-uphill-battle]] and was then \"left to rot for quite a while\" [[fnaf2-call1-new-location]] before the 1987 restaurant opened; no record prints that step. It takes 1980 as the earliest, a rough floor: on the 1979 night Murray's workshop still holds incomplete prototypes that the game's files label as the four mascots [[secret-of-the-mimic-rnd-proto-pizzeria]] (see ((murders))).",
        "The Bite of '87 is placed in the 1987 restaurant's last days on a reading of one sentence (see ((november-1987))).",
      ] },
      { kind: "heading", text: "Thirty years, and no year" },
      "The one long interval is Scott's own, from the store text of FNaF3.",
      { kind: "quote", evidence: "scott-fnaf3-steam-description", text: "Thirty years after Freddy Fazbear's Pizza closed it's doors" },
      "It counts from a closing and does not say which of three: the old restaurant's, the 1987 restaurant's or FNaF1's. The model leans to the last, and does not turn the interval into a year. No game prints a year after 1987, so the model prints none for FNaF1 or anything later.",
      { kind: "heading", text: "The order, and what fixes it" },
      { kind: "table", head: ["Step", "How it is placed"], rows: [
        ["Murray's springlock suits, then his two copying machines, the first to mind his son (((two-machines)))", "Before the 1979 night: fixed"],
        ["1979, most likely 7 September: Fazbear Entertainment sends for the blueprints", "Year firm; the day is argued above"],
        ["c. 1983: the week of the bite (((bite)))", "Estimated; told here by convention"],
        ["The Cassette Man's daughter is killed (((child-outside)))", "Undated; before the five by convention"],
        ["A June 26th: the five (((murders)))", "Before the 1987 restaurant: most likely"],
        ["The old restaurant closes and rots", "Before the 1987 restaurant opened: stated [[fnaf2-call1-new-location]]. That opening, in autumn 1987, is derived [[fnaf2-overtime-robots-scrapped]]"],
        ["Afton Robotics, Circus Baby, the daughter's death (((funtimes)))", "Undated; here by convention"],
        ["November 1987: the 1987 restaurant's last week (((november-1987)))", "Printed"],
        ["FNaF1's week, and that restaurant's closing (((fnaf1-restaurant)))", "After 1987: fixed. When it closed: inferred"],
        ["The killer dies in the suit (((springtrap)))", "After that closing: most likely"],
        ["Michael's week underground (((michael)))", "Undated; after his father's death by convention"],
        ["Fazbear's Fright, its fire, Michael's speech (((fazbears-fright)))", "In that order: fixed"],
        ["Pizzeria Simulator's fire, then Ultimate Custom Night (((ffps)), ((ucn)))", "Each after the last: most likely"],
        ["Help Wanted's scan, then Special Delivery's emails (((digital)))", "After Pizzeria Simulator's fire by convention"],
        ["The Pizzaplex, Security Breach, Help Wanted 2, RUIN (((pizzaplex)))", "The Pizzaplex, then Security Breach, then RUIN: fixed. Help Wanted 2 between the last two: most likely (see ((mimic))). After the same fire: inferred, if the ruined pizzeria under the Pizzaplex [[security-breach-underground-pizza-place]] is Pizzeria Simulator's (see ((burntrap)))"],
      ] },
      "Five of those placements are conventions, and the records would allow others. On the last of them, the scan against the fire, no record bears at all.",
      "The chapters keep Afton's own machines together in one part, after the night shift. This table and the storyline keep the model's order.",
      "Circus Baby's venture is the hardest to place: HandUnit puts it after \"the unfortunate closing of Freddy Fazbear's Pizza\" [[sl-handunit-freddy-fazbear-closing]] and does not say which closing. One limit is conditional. FNaF4's house has a second bedroom with a pink bed that nobody is shown using [[fnaf4-second-bedroom]]. If that house is Afton's and the room his daughter's (see ((afton-house))), she was a child c. 1983, and the small girl of Baby's one day [[sl-girl-daddy-let-me-play]] can hardly come after FNaF1's restaurant closed, five years on or more. No record says whose room it is.",
      "Three sequences the model does not tell:",
      { kind: "list", items: [
        "The crying child watched in 1983 from a facility dated after a Freddy's closed (see ((afton-house))).",
        "A man caught for the five who then pitches Circus Baby's under his own name (see ((murders))).",
        "One history for the killer after the fire: held in a night, present in the company's code, walking abroad and standing under the Pizzaplex (see ((thesis))).",
      ] },
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "fnaf2-call1-summer-job", "scott-2014-fnaf1-store-summer-job", "fnaf4-toy-collection-girl"],
    tension: "Phone Guy, the voice on the guard's phone, pictures himself singing \"those same stupid songs for twenty years\" [[fnaf1-call1-twenty-years]]: the model treats the line as loose talk, which is how it is delivered, and loose or literal it points away from the earliest year the cheques allow. FNaF2 contradicts its own cheques with a first call that says \"summer job\" [[fnaf2-call1-summer-job]], and Scott's store text for FNaF1 says the same [[scott-2014-fnaf1-store-summer-job]]; the model follows the printed dates. And in the week whose only year is 1983, a girl has toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], which the model reads as deliberate misdirection (see ((bite))) and does not use. None of these moves a printed date. Together they are the reason the model prints so few.",
    changesIf: "Any game that prints a year after 1987, a year on FNaF1's cheques, or a record that places Help Wanted's scan against Pizzeria Simulator's fire.",
    seeAlso: ["canon-rules", "games", "november-1987", "fnaf1-restaurant", "two-machines", "afton-house", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "codb-fnaf4-house-on-hill", // [shown] FNaF4's house on the hill in the background
      // colour
      "hw-pizza-party-coming-soon-construction", // [shown] Hidden exit: a building under construction and a 'Coming soon' sign
    ],
  },
  {
    id: "games", part: "apparatus", title: "What each game adds",
    question: "Where does each game fit?",
    answer: "Every release has a place. Several were made to answer the one before, which is why a later game is the authority on what an earlier one left unclear. This chapter is a table: each game, when it is set, what it adds to the story, and the chapters that argue it.",
    confidence: "high",
    body: [
      "FNaF4 was sold as \"this last chapter of the Five Nights at Freddy's original story\" [[scott-2015-fnaf4-store-last-chapter]], and its first teaser read \"THE FINAL CHAPTER\" [[scottgames-site-fnaf4-final-chapter]]. It was not the last. In a 2018 interview (a transcript) Scott said that the first game had told \"a small snippet of a larger story\" [[scott-2018-interview-first-game-snippet-of-larger-story]]. Each game after the third, he said, grew out of what he disliked in the one before.",
      { kind: "quote", evidence: "scott-2018-interview-each-game-fixed-the-last" },
      "He had put one case in writing in 2017: \"I used SL to clear up a misconception from FNaF 4.\" [[scott-2017-sl-cleared-fnaf4-misconception]] Weeks before Pizzeria Simulator came out, while telling readers that the game he had been making was no longer needed, he wrote that it \"was really only existing to clear up things that were frustrating people in the community\" [[scott-2017-fnaf6-existed-to-clear-things-up]]. So the model reads backwards. Where a later game was made to mend an earlier one, the later game governs the point in dispute: FNaF4 is read through Sister Location, Sister Location through Pizzeria Simulator, Security Breach through RUIN. The rule is the model's own (see ((canon-rules))). The habit it follows is the author's.",
      "In September 2015 Scott wrote that \"the story is complete\", and that the next releases would not add to it [[scott-2015-story-complete]]. Most of the games in the table below came later. The table is therefore not a plan carried out. It is the record of a story that was extended and repaired in public.",
      { kind: "heading", text: "Game by game, in order of release" },
      { kind: "table", head: ["Game", "When it is set", "What it adds, and where it is argued"], rows: [
        ["FNaF1 (2014)", "<<A November after 1987|derived|fnaf1-paycheck-night5,fnaf2-news-originals-kept|The cheques read 11-12-xx and 11-13-xx, and the cast is the four machines kept when the 1987 restaurant closed.>>", "The restaurant and its four machines; five missing children, in newspaper clippings; the Bite of '87 by name; a guard named Mike Schmidt; the last call of Phone Guy, the voice on the guard's phone. See ((murders)); ((golden)); ((fnaf1-restaurant))."],
        ["FNaF2 (2014)", "<<November 1987|printed|fnaf2-paycheck-1987,fnaf2-overtime-robots-scrapped|The two cheques are dated 11-12-1987 and 11-13-1987.>>", "The 1987 restaurant's last week; the Puppet; the child killed outside; the purple figure; \"a yellow one\" [[fnaf2-call6-yellow-suit]]; the name Fredbear's Family Diner, \"or something like that\" [[fnaf2-call5-fredbears-family-diner]]. See ((november-1987)); ((child-outside)); ((golden))."],
        ["FNaF3 (2015)", "<<Thirty years after a closing|printed|scott-fnaf3-steam-description|Scott Cawthon wrote the store text for the game, and it prints the interval: thirty years after the pizzeria closed its doors. The interval is printed. The closing it counts from has no year, so the date is a distance from an undated event and gives no year. Which of three closings it counts from is not said.>>", "The springlock suits and the hidden rooms, on training tapes; the killer's death; Springtrap; Happiest Day; a fire. See ((springlocks)), ((springtrap)), ((fazbears-fright)), ((killer))."],
        ["FNaF4 (2015)", "<<c. 1983|estimated|fnaf4-fredbear-and-friends-1983,fnaf4-minigame-countdown-to-party|The only year in the game is on a television, and it dates the show.>>", "A household; a plush that talks; five nights in a bedroom; Fredbear's bite at the birthday party; a locked box. See ((afton-house)), ((plush)), ((nightmares)), ((bite))."],
        ["FNaF4: Halloween Edition (2015)", "Not canon, by Scott's ruling [[scott-2015-fnaf4-halloween-canon-split]]", "Nothing the model uses: changed characters, in a separate edition. See ((canon-rules))."],
        ["FNaF World (2016)", "Outside the story, except its opening and clock-ending text", "An echo of FNaF4's promise; Old Man Consequences, a fishing figure; a scene that names the next game's Baby. See ((edges)), ((open))."],
        ["Sister Location (2016)", "Undated; after a Freddy Fazbear's Pizza has closed", "The name Afton; Afton Robotics and its blueprints; a daughter; a son named Michael; the Private Room, a locked room in Afton's facility. See ((funtimes)), ((michael)), ((afton-house))."],
        ["Pizzeria Simulator (2017)", "After Fazbear's Fright burned, most likely", "William Afton and Elizabeth by name; the Cassette Man, the voice on its tapes, and his daughter; the trap, the fire, the graves; the word Remnant. See ((ffps)), ((salvage)), ((remnant)), ((partners))."],
        ["Ultimate Custom Night (2018)", "After that fire, most likely", "A night that its voices say will not end [[ucn-nedd-bear-forever]]; \"the one you should not have killed\" [[ucn-nightmare-freddy-toysnhk]]; Old Man Consequences again. See ((ucn)), ((faith))."],
        ["Help Wanted (2019)", "Undated. The model tells it after Pizzeria Simulator's fire, by convention", "The company's account of its own past; old circuit boards scanned into a game; {{glitchtrap}} (known as Glitchtrap, Scott's working name for it); a plush left for a tester. See ((cover-story)), ((digital)), ((vanny))."],
        ["Curse of Dreadbear (2019)", "The same; an add-on to Help Wanted", "A rabbit mask and a hidden call; a staged fairground banner that reads FALLFEST 83'. See ((vanny)), ((timeline-math))."],
        ["Special Delivery (2019)", "Undated; its emails count only in their order", "A second scan and a second outbreak; Ness; the company's lawyers; a \"vintage Bonnie\" that is in no database [[sd-vintage-bonnie-reports]]. See ((digital)), ((vanny)), ((cover-story))."],
        ["Freddy in Space 2 (2019)", "Outside the story", "A spin-off that this archive has not recorded and the model does not use"],
        ["Security Breach (2021)", "One night; undated; after Pizzeria Simulator's fire, most likely", "The Pizzaplex, over a ruined pizzeria; {{burntrap}} (known as Burntrap, a working name that Scott has said now stands); Gregory; Vanessa and Vanny; Princess Quest, an arcade game inside the later games. See ((pizzaplex)), ((vanny)), ((burntrap))."],
        ["RUIN (2023)", "After that night", "Cassie; M.X.E.S.; an endoskeleton behind poured concrete. See ((mimic)), ((pizzaplex))."],
        ["Help Wanted 2 (2023)", "Most likely between Security Breach and RUIN", "A technician and a mask; Princess Quest IV; six dolls the game calls memories; the code 1979. See ((mimic)), ((vanny)), ((golden))."],
        ["Into the Pit (2024)", "Not placed: an adaptation that the main games never place. Its 1985, on a logo graphic, dates nothing", "No event. Its background agrees in places (a yellow rabbit, a mascot that smells) and differs in others (six children in one room). See ((edges))."],
        ["Secret of the Mimic (2025)", "A night in <<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979|The year ends the official teaser. In the game it is on a work order dated 9/07/79, read from an image of the prop and not yet confirmed in play.>>", "Murray's Costume Manor; springlocks \"for the diner\" [[secret-of-the-mimic-mail-springlocks-hen]]; \"Hen\" and \"W.A.\" [[secret-of-the-mimic-mail-staff-contacts-wa]]; the name behind M.X.E.S.; two machines that copy. See ((springlocks)), ((two-machines)), ((partners)), ((mimic))."],
      ] },
      { kind: "heading", text: "The same games, in the order of the story" },
      { kind: "list", ordered: true, items: [
        "Secret of the Mimic: a night in 1979, and the years before it.",
        "FNaF4: the week of the bite, c. 1983, told before the murders by convention.",
        "The murders. No game is set during them: FNaF1's clippings and the minigames of FNaF2 and Pizzeria Simulator report them.",
        "FNaF2: November 1987.",
        "FNaF1: a later November.",
        "The killer's death, in FNaF3's minigames: most likely after FNaF1's restaurant closed.",
        "Sister Location: undated. The model places Michael's week here by convention.",
        "FNaF3, then Pizzeria Simulator, then Ultimate Custom Night: each after the last, most likely.",
        "Help Wanted with Curse of Dreadbear, and Special Delivery: after the fire by the model's convention.",
        "Security Breach, then RUIN, with Help Wanted 2 most likely between them.",
      ] },
      "Circus Baby's venture, which Sister Location looks back on and the list does not place, is placed by convention too. The working is in ((timeline-math)).",
      { kind: "heading", text: "Outside the story" },
      "FNaF4's Halloween Edition and the play of Sister Location's Custom Night are outside by Scott's ruling (see ((canon-rules))). FNaF World's adventure is outside by its own account: the game calls it imaginary. Into the Pit is a different case: nobody has ruled it out, and it is unplaced by this model's own convention. It may agree, and it adds no event (see ((edges))). The novels, the guidebooks and the films are left out by this archive's own policy.",
    ],
    counterEvidence: ["scott-2015-story-complete"],
    tension: "Scott's \"the story is complete\" [[scott-2015-story-complete]] cuts against reading the whole as one plan. The model reads the later repairs as the author's own corrections, which is what he has said they were.",
    changesIf: "A new game. Most releases so far have changed how at least one earlier game is read.",
    seeAlso: ["canon-rules", "timeline-math", "thesis", "edges", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [],
  },
  {
    id: "open", part: "apparatus", title: "What stays open",
    question: "What does the evidence not settle?",
    answer: "A good deal, and the model says so. Where Scott's one retcon lies; what the dark bear and the dark rabbit are; who Hen is; who drives in Midnight Motorist; what is in the locked box; who Old Man Consequences is; whether the scan came before the fire; which endings stand; where the crying child went. Each entry gives what the records show and the chapter that weighs it.",
    confidence: "low",
    hero: { image: "fnaf4-locked-box-ending.jpg", caption: "FNaF4's Nightmare ending: a locked box, and \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]]" },
    body: [
      "FNaF4's seventh night ends on a grey box with two padlocks that no click will open [[fnaf4-locked-box-ending]]. The games keep a good deal locked, and this model forces no locks.",
      { kind: "heading", text: "The first games" },
      { kind: "figure", image: "fnaf2-shadow-freddy-parts-service.jpg", caption: "The dark bear, glimpsed in the 1987 restaurant: a dark purple bear with glowing eyes, sitting where the older Bonnie should be.", evidence: "fnaf2-shadow-freddy" },
      { kind: "list", items: [
        "**Scott's one retcon.** In 2017 he wrote: \"I've done one actual retcon in the series (although I'm not going to say where it was).\" [[scott-2017-one-retcon]] It \"was integrated pretty seamlessly, and most people didn't notice\" [[scott-2017-retcon-seamless]]. Clearing up a misread intention is \"not really a retcon\" [[scott-2017-clarification-is-not-retcon]], and he set a third thing beside both: \"new details\" that \"may not have been planned from the beginning\" [[scott-2017-story-developed-new-details]]. Nothing locates it.",
        "**Who the caught man was.** A man was captured the next morning [[fnaf1-news-suspect-captured]] and charged [[fnaf1-news-charged-vs-convicted]], and the first three games never speak of him again. The killer, later let go, or the wrong man: no record says which. He is the model's one poor candidate for the retcon (see ((murders))).",
        "**November 1987.** The calls report that someone \"may have tampered\" with the machines [[fnaf2-call4-facial-recognition-tampered]] and that \"someone used\" a spare suit [[fnaf2-call6-yellow-suit]], and name no act. The one sentence about the Bite names no machine, no victim and no building [[fnaf1-call1-bite-of-87]]. The calls do not say why the company wanted \"the original restaurant owner\" that week [[fnaf2-call5-fredbears-family-diner]] (see ((november-1987))).",
        "**Mike Schmidt.** FNaF1's guard is named only on his two cheques [[fnaf1-paycheck-night5]] [[fnaf1-paycheck-night6]]. The slip that ends the Custom Night bears no name, and gives \"Odor\" as its last reason [[fnaf1-custom-night-pink-slip]]. That is all the games give for the idea that he is Michael Afton: a shared first name, and one word on a pink slip, which Fritz Smith's slip has too [[fnaf2-pink-slip-fritz-smith]]. The strongest evidence usually cited for the identification is in a book, which this archive does not admit. The model does not use the identification (see ((michael))).",
        "**The dark bear and the dark rabbit.** No game names or explains either. In FNaF3 {{shadow-freddy}} says \"follow me.\" and leads each of the four machines to where the purple figure takes it apart [[fnaf3-eon-shadow-freddy-follow-me]] [[fnaf3-eon-purple-guy-dismantles]], and a dark rabbit can bring cake to a crying child [[fnaf3-shadow-bonnie-minigame]]. Both are glimpsed in the 1987 restaurant [[fnaf2-shadow-freddy]] [[fnaf2-shadow-bonnie-office]]. The bear may be the killer's lure (see ((springtrap))), though following it also ends with the children out of the machines and the killer dead. The rabbit most likely helps (see ((fazbears-fright))).",
        "**How he got into a sealed room.** The rooms that FNaF3's tapes call safe rooms were walled up with their contents inside [[fnaf3-tape6-nothing-taken-out]]. Most likely the room with the suit is one, sealed before he died; no game shows his way in (see ((springtrap))).",
        "**Hen, and who made the four mascots.** A client whom Edwin Murray calls Hen sends a change order [[secret-of-the-mimic-log-build-to-spec]]. That Hen is the Cassette Man, the voice on Pizzeria Simulator's tapes, is only a possibility. On the 1979 night Murray's workshop holds incomplete prototypes that the game's files label as the four [[secret-of-the-mimic-rnd-proto-pizzeria]], and later the Cassette Man calls the haunted machines \"prisons of my making\" [[ffps-insanity-small-souls-prisons]]. No game says whose work they are (see ((partners))).",
      ] },
      { kind: "heading", text: "The family" },
      { kind: "figure", image: "ffps-midnight-motorist-secret-drive.png", caption: "Midnight Motorist's hidden road, in Pizzeria Simulator: a rainy night, and a dark purple car.", evidence: "ffps-midnight-motorist-secret-drive" },
      { kind: "list", items: [
        "**Midnight Motorist.** A gap in the wall of a Pizzeria Simulator arcade game opens onto a hidden road, driven in a dark purple car [[ffps-midnight-motorist-secret-drive]]. At a house, a plain yellow driver finds a door shut [[ffps-midnight-motorist-closed-door]] and a window broken: \"Ran off to that place again.\" [[ffps-midnight-motorist-ran-off]] Nobody is named. On one reading it is the killer's house, since the car is purple, and the one who ran off is either of FNaF4's brothers. On the other it is a victim's: the driver is drawn yellow, and the other cars in that game glow purple too. The model draws nothing from it.",
        "**Where the crying child went.** After the bite he is the last thing to fade from the screen [[fnaf4-night6-fade-order]]. He most likely dies, and after that no record places him. The strongest alternative puts him behind the yellow bear (see ((bite)), ((golden))).",
        "**The parents.** No record shows, names or mentions the Afton children's mother, and no parent appears in FNaF4's house [[fnaf4-no-parent-shown]]. A child outside the restaurant quotes a \"Daddy\" who calls a Spring Bonnie toy \"a finger trap\" [[fnaf4-spring-bonnie-plush-finger-trap]], and the game does not say whose child this is (see ((afton-house))).",
        "**Whose suit, on Sister Location's fourth night.** The player wakes inside something that, Baby says, \"came from my old pizzeria\" [[sl-springlock-suit-from-old-pizzeria]]. Asked in a 2018 interview (a transcript) whose it was, Scott declined to answer [[scott-2018-interview-sl-suit-question-unanswered]] (see ((michael))).",
      ] },
      { kind: "heading", text: "The reckoning" },
      { kind: "figure", image: "fw-old-man-consequences.jpg", caption: "Old Man Consequences, a red figure fishing in a hidden tunnel of FNaF World.", evidence: "fw-old-man-consequences" },
      { kind: "list", items: [
        "**FNaF3's hidden party, and its endings.** Asked in a 2018 interview (a transcript) which ending happened, Scott said only: \"The answer is very interesting. The answer is complex.\" [[scott-2018-interview-fnaf3-ending-unanswered]] Who feeds the crying children on the way is shown and unexplained: Toy Chica [[fnaf3-chicas-party]] and the yellow bear [[fnaf3-stage01-cake-crying-child]], neither one of the four mascots (see ((fazbears-fright))).",
        "**Where the five are, between the killer's death and the trap.** Not shown: the Cassette Man names no machine [[ffps-insanity-tiny-breaths]] (see ((salvage))).",
        "**Who lit the fire, and whether the volunteer left.** Nobody is shown lighting it [[ffps-completion-fire]]. That the volunteer stayed is the Cassette Man's guess [[ffps-completion-right-where-you-want-to-be]] (see ((ffps))).",
        "**Who plays Ultimate Custom Night, and who accuses them.** No line names the player [[ucn-protagonist-unnamed-killer]]. William Afton or his son Michael; the fifth of the five, or FNaF4's crying child. Neither is settled (see ((ucn))).",
        "**Old Man Consequences.** In FNaF World he gives his name and asks the player to sit and fish [[fw-old-man-consequences]]. Ultimate Custom Night brings him back to say \"Leave the demon to his demons.\" [[ucn-omc-ending]] Who he is, no game says, and whom he addresses depends on who sits in that game's office (see ((ucn))).",
        "**What is left of the killer after the fire.** Pizzeria Simulator presents the fire as his end [[ffps-completion-old-friend-hell]]. Afterwards his image returns in more than one form. The model reads something of the man into at least one of them, and joins them in no single history (see ((thesis)), ((digital)), ((burntrap))).",
      ] },
      { kind: "heading", text: "The modern games" },
      { kind: "list", items: [
        "**The scanned boards.** Asked \"Steve, which circuit board did you scan?\" in Special Delivery's emails, about that game's own scan, a contractor names no machine [[sd-which-board-unknown]], and no record places either scan against Pizzeria Simulator's fire. So no game says whether {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) is something the killer left behind or a copier that learned him (see ((digital))).",
        "**Special Delivery's \"vintage Bonnie\".** Customers report a foul-smelling old rabbit that is in none of the service's databases [[sd-vintage-bonnie-reports]]. If the scans followed Pizzeria Simulator's fire, an old rabbit that smells may be the killer's body in its suit (see ((digital))).",
        "**The hidden call, and Vanessa's father.** A woman tells someone unheard, \"I made it myself.\" [[codb-mask-plush-voice]] That she is {{vanessa}} is the model's reading. A therapist asks Vanessa, \"Your dad's name was Bill?\" [[security-breach-cd-vanessa-father-bill]]: no surname is given, and nothing joins him to William Afton (see ((vanny))).",
        "**Which Security Breach ending stands.** One leaves the mask on the floor and a blonde woman at the doors [[security-breach-ending-redemption]]; the model reads her as Vanessa, released. Another ends on a blonde woman in a security uniform on the burning roof [[security-breach-rooftop-vanessa-alive]], which the model does not explain. In a 2024 interview (a transcript) Scott said his own story \"is very different than the one that got in the game\" [[scott-2024-interview-sb-story-not-as-intended]] (see ((pizzaplex)), ((vanny))).",
        "**Missing staff, a wrecked Bonnie and \"those kids\".** \"Where is everyone?\", one employee writes [[security-breach-msg-job-security]]. RUIN has Bonnie lying broken in a hidden room [[ruin-glamrock-bonnie-remains-hidden-room]] (as described), unexplained. A customer writes, \"Why did you reopen? Everyone remembers what happened to those kids.\" [[security-breach-msg-it-is-happening-again]] It names no children. That therapy client 46 is {{gregory}} is possible, and never stated [[security-breach-cd46-rabbit-ears]] (see ((pizzaplex))).",
        "**The burnt rabbit under the Pizzaplex** (known as Burntrap, a working name that Scott has said now stands). No game says whose remains it is, who stood it in its station or what moves it: Freddy says only \"She brought me here\" [[security-breach-freddy-been-here-before]]. In a 2024 interview (a transcript) Scott said that originally it \"was never supposed to move\", and had a purpose he would not state [[scott-2024-interview-burntrap-never-meant-to-move]]. Nor is the mass of parts that grabs it explained [[security-breach-tangle-composition]] (see ((burntrap))).",
        "**The copying endoskeleton.** In RUIN a second Gregory voice, which the model takes for the boy, says only that it has \"been trapped down here for a really long time\" [[ruin-gregory-mxes-explanation]], and nothing shows it between 1979 and that building. If the glitching, rabbit-shaped figure that appears to {{cassie}} is its guard [[ruin-the-entity]], no game says why it has that shape. The model leans to reading the endoskeleton and the rabbit in the code as two things. The endings of RUIN [[ruin-ending-standard]] and of Secret of the Mimic [[secret-of-the-mimic-ending-story-time]] are branches (see ((mimic)), ((two-machines))).",
        "**Also open.** What Remnant is (((remnant))). Why Michael does not die (((michael))). Who held the handset (((plush))). Whether anyone watched FNaF4's bedroom in 1983, and how, from a room whose business is dated after a Freddy's closed (((afton-house))). What became of Edwin Murray (((two-machines))) and of Help Wanted 2's technician (((mimic))). Who made Princess Quest, an arcade game inside the later games (((vanny))).",
      ] },
      { kind: "heading", text: "The locked box" },
      "This chapter began at a locked box (see ((nightmares))). In 2015 Scott wrote: \"What's in the box? It's the pieces put together.\" [[scott-2015-fnaf4-box-pieces-put-together]] He then decided that \"maybe some things are best left forgotten, forever\" [[scott-2015-box-best-left-forgotten]]. In a 2018 interview (a transcript) he said that its contents \"have changed over the years\" [[scott-2018-box-meaning-changed]]. In a 2024 interview (a transcript) he said: \"there is something in the box, but I never pursued it\" [[scott-2024-box-interview]].",
      "The model treats the box as closed, most likely for good.",
    ],
    changesIf: "A year printed after 1987; a name for whoever sits in Ultimate Custom Night's office; a statement of which machine the scanned boards came from, or a date for the scan against the fire; a scene of Murray's endoskeleton between 1979 and the Pizzaplex; a word from Scott on the retcon, or on which FNaF3 ending happened. Any of these would settle several entries at once, and the chapter changes whenever a game answers one.",
    seeAlso: ["thesis", "canon-rules", "timeline-math", "november-1987", "ucn", "burntrap", "mimic"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "ffps-midnight-motorist-jrs", // [stated] JR's: 'you know you can't be here'
      "ffps-midnight-motorist-mound", // [shown] A mound in a hidden clearing
      "ffps-midnight-motorist-find-a-way-in", // [stated] Driver: 'I'll find a way in from outside...'
      "ffps-midnight-motorist-grey-person", // [stated] Grey person: 'Leave him alone tonight. He had a rough day.'
      "scott-2015-considered-opening-box", // [stated] Opening the box was one of the Halloween options
      "scott-2017-adult-theory-teaser", // [stated] An extra teaser was released to dispel 'adult theory'
      "scottgames-site-fnaf4-the-end", // [shown] Post-FNaF4 teaser: 'The End?' / 'Thanks for playing!'
      // colour
      "fnaf3-office-slumped-bear", // [shown] A slumped bear sometimes sits in the FNaF3 office
      "fw-drowning-ending", // [shown] Drowning ending: the player's sprite goes into Old Man Consequences' lake
      "sd-shadowy-remnant-surprise", // [stated] Tutorial Unit warns of 'Shadowy Remnant'
    ],
  },
];
