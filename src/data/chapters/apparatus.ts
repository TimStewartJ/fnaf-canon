import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 10: The apparatus (Method).
 * How this was built: what counts as evidence, what sits at the edge of the story, how it is dated, what each game adds, and what stays open.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "canon-rules", part: "apparatus", title: "Ground rules",
    question: "What counts as evidence here?",
    // REVIEW: length. With the four tables the revised outline asks for (Scott's rulings, rules W2 to W11, the name
    // tiers, the nine rabbits) this chapter runs to about 1,470 words. If it must be shorter, the tier table and the
    // paragraph under it overlap most with the table of rabbits.
    answer: "Two things: the games themselves, and Scott Cawthon's own words. The novels, the guidebooks, the films and fan theory fill no gap, even silently: that is this archive's policy, and not a ruling of Scott's. Where Scott has ruled in writing on what counts, as he has for FNaF4's two editions, Sister Location's Custom Night and Help Wanted, the model follows him. Where he has not, it states its own rule and says that it is its own.",
    confidence: "high",
    body: [
      "On 6 November 2017 Scott Cawthon answered a reader on Reddit in one sentence.",
      { kind: "quote", evidence: "scott-2017-games-over-theories", text: "if I make a game that contradicts one of your theories, it doesn't mean that my game is wrong, it means that your theory needs to evolve." },
      "This archive is built to that rule. Two things count as evidence: what a player can reach in a game, and what Scott has said in his own voice, in posts, in interviews, and in the teasers and hidden text of his own site. An account built this way is one that any reader can check.",
      { kind: "heading", text: "What Scott has ruled" },
      { kind: "table", head: ["Ruling", "In his words"], rows: [
        ["The first novel and the games are separate continuities (2015)", "\"The games and the books should be considered to be separate continuities, even if they do share many familiar elements.\" [[scott-2015-books-separate-continuity]]"],
        ["FNaF4's 1.1 update is canon; its Halloween Edition is not (2015)", "Of the update: \"This version is canon, as it always has been.\" The separate Halloween Edition, in the same post, is not [[scott-2015-fnaf4-halloween-canon-split]]."],
        ["Sister Location's Custom Night is not canon (2016)", "\"It will NOT be canon. (otherwise it would screw up the entire plotline!)\" [[scott-2016-sl-custom-night-not-canon]]"],
        ["Its cutscenes are (2016)", "\"(By the way- Cutscenes are canon.)\" [[scott-2016-cutscenes-are-canon]]"],
        ["Help Wanted is canon (2019)", "It puts \"characters that *are* canon, along with characters that are *questionably* canon\" into \"one game that IS canon\" [[scott-2019-help-wanted-is-canon]]."],
        ["Of the world outside the games, only a developer's existence is canon (2019)", "\"Only the existence of a game developer that supposedly made video games based on actual events that may or may not be a cover up by Fazbear Entertainment is canon.\" [[scott-2019-only-game-developer-existence-canon]]"],
        ["A game outranks a theory (2017)", "The sentence at the head of this chapter."],
      ] },
      "The hedges are his, and the model keeps them. Help Wanted is canon as a whole, and he never said which of its characters are only \"questionably\" so. The developer \"supposedly\" made games about events that \"may or may not be a cover up\": that makes his existence canon, and it does not say how true his games are (see ((cover-story))). Leaving the books out is not one of these rulings: it is this archive's policy, and the last section says where his words part from it.",
      { kind: "heading", text: "The model's own rules" },
      "On Ultimate Custom Night, FNaF World's frame, the levels inside Help Wanted and Into the Pit, Scott has ruled nothing. The rules below are this archive's conventions, and a written ruling from him would replace any of them.",
      { kind: "table", head: ["Rule", "In practice"], rows: [
        ["A later game made to mend an earlier one governs the disputed point", "FNaF4 is read through Sister Location, Sister Location through Pizzeria Simulator, Security Breach through RUIN. A chapter that uses the rule names the later game and the point (see ((games)))."],
        ["A whole work's standing turns on three questions, in order: what Scott ruled in writing, what the work says of itself, and whether the main games take it up", "How fantastical it is, is never a test. This is why Ultimate Custom Night's lines can establish a fact and Into the Pit can only agree with one (see ((edges)))."],
        ["Ultimate Custom Night's play and roster are staging; its lines and cutscenes are text", "Its roster holds Halloween Edition characters that Scott ruled out [[ucn-roster-noncanon-and-fnaf-world]] (see ((ucn)))."],
        ["FNaF World's frame voice echoes, and adds no event", "Support, and never the only support for a fact (see ((edges)))."],
        ["A Fazbear product inside the story has three layers", "The level as built is the company's staging. The frame round it is story: the tapes, the emails, the hidden call, the endings. So is an intrusion: whatever sits behind a secret, glitches, addresses the player or works against the level's own instructions (see ((cover-story)))."],
        ["A staged prop, or a tale told by someone inside the story, agrees and never establishes", "Neither is the only support for a fact, and a date on a staged prop is not a printed date. A chapter that cites one, or a joke, or a mechanic, says which it is."],
        ["An ending or an optional route is discounted for what it makes happen, never for what it shows to be already so", "The night in Sister Location's hidden room is one route's event; the room stands on every route (see ((afton-house)))."],
        ["A mechanic counts when the game explains or names it", "A tuning value does not. Asked why FNaF1's closed doors drain power, Scott answered: \"because- game. ;)\" [[scott-2015-doors-power-because-game]]"],
        ["Cut, unused and data-only content is not evidence", "It is never cited, for or against. A document read from a texture and not yet seen in play is cited as that, and its date is not called printed."],
        ["A sprite's colour identifies nobody", "See ((killer))."],
        ["Each game has a layer of things seen that are not there", "Scott said of FNaF3's extra Springtraps, \"These are hallucinations.\" [[scott-2015-fnaf3-multiple-springtraps-hallucinations]] What appears only there is not thereby an object."],
      ] },
      { kind: "heading", text: "Names" },
      { kind: "table", head: ["Tier", "Rule", "Examples"], rows: [
        ["A game prints or speaks it", "Used as a name", "William Afton, Michael, Elizabeth, Mike Schmidt, Springtrap, Golden Freddy, the Puppet, Remnant; and the games' own \"the anomaly\" and \"that rabbit thing\""],
        ["Scott's working name, in no game", "Given once in a chapter, in a form that says whose label it is", "Glitchtrap, Burntrap, Scraptrap"],
        ["A fan or file label", "Left out, for a plain description", "The dark bear, the dark rabbit, the mass of parts, the tape speaker, the five"],
      ] },
      "The middle tier rests on little. \"Scraptrap\" is in Scott's written guide to Ultimate Custom Night [[scott-ucn-character-guide-afton]]. The other two rest on one sentence of a 2024 interview, on record here as a transcript: once a working name is found in the source code, \"that's the canon name now, and there's nothing I can do about it\" [[scott-2024-interview-placeholder-names-canon]]. No game prints either [[hw-tape-girl-calls-it-the-anomaly]] [[security-breach-burntrap-name-not-in-game]], so the names are handles, and nothing is argued from them.",
      "Nine rabbits run through the story, and each has one fixed description here.",
      { kind: "table", head: ["The figure", "Called here"], rows: [
        ["The springlock suit of FNaF3's training tapes", "The Spring Bonnie suit"],
        ["What the killer wore for the five", "The yellow rabbit costume"],
        ["The killer's body in that suit", "Springtrap"],
        ["The rabbit salvaged in Pizzeria Simulator", "The salvaged rabbit of Pizzeria Simulator, William Afton (Scott's guide adds \"AKA Scraptrap\")"],
        ["The dark figure of FNaF2 and FNaF3", "The dark rabbit"],
        ["The figure in Help Wanted's code", "The rabbit in the code (known as Glitchtrap, Scott's working name for it)"],
        ["The woman in the rabbit costume", "The rabbit-costumed woman, or Vanny"],
        ["The figure in the station under the Pizzaplex", "The burnt rabbit under the Pizzaplex (the game's files call it Burntrap, a working name that Scott has said now stands)"],
        ["The figure from RUIN's M.X.E.S. cabinet", "The rabbit-shaped figure from the M.X.E.S. cabinet, or RUIN's own \"that rabbit thing\" [[ruin-fake-gregory-signal-jammer]]"],
      ] },
      "Two of the nine are burnt, so \"the burnt rabbit\" is never written without its place. People the games never name are called by description: the Cassette Man, a role in Pizzeria Simulator's credits and the only name the games give him [[ffps-credits-cassette-man]]; his daughter; the crying child; the older brother; the fifth child. No name from a novel is used for any of them.",
      { kind: "heading", text: "Two cautions" },
      "Scott's 2018 and 2024 interviews are on record here as machine transcripts of archived video. They are support, and never the only support for a claim about the story.",
      "His praise of fan videos vouches only for what he named himself. Of a 2015 video he wrote that it was \"getting almost everything right\" [[scott-2015-game-theory-fnaf2-almost-right]], which names nothing. In 2017 he listed three sore points, \"Miketrap\", a literally purple Purple Guy and \"1983 vs 1987\" [[scott-2017-matpat-final-theory]], and said only that \"some of those things have been… answered(!), by MatPat!\" [[scott-2017-matpat-answered-some-things]] The videos are not evidence here.",
      { kind: "heading", text: "The books" },
      "The hard case is the books, and Scott's words on them have moved. In 2015 the first novel was a separate continuity and \"NOT intended to solve anything\" [[scott-2015-book-not-a-guide]], yet also: \"the book is canon, just as the games are. That doesn't mean that they are intended to fit together like two puzzle pieces.\" [[scott-2015-book-canon-not-puzzle-pieces]] In 2018 he announced a series of short stories, \"some connected directly to the games, and some not\" [[scott-2018-frights-some-connected-to-games]]. In 2020 he wrote of that series [[scott-2020-novels-means-fazbear-frights]]: \"look to the novels to fill in some of blanks to the past!\" [[scott-2020-novels-fill-blanks]] In 2024, of \"what people are saying about the canonicity of the books\", he wrote only \"yes, that is correct\" [[scott-2024-books-canonicity-yes]].",
      "So his later words do not exclude the books, and this archive leaves them out by its own policy. The cost falls on five questions that readers usually settle from such material: a name for the fifth child; whether the crying child and the fifth child share the yellow bear; whether Mike Schmidt is Michael Afton; who the Afton children's mother was; and what the killer and his old friend were to each other. Each is ruled here on the games alone (see ((golden)), ((partners)) and ((open))).",
    ],
    counterEvidence: ["scott-2024-books-canonicity-yes", "scott-2020-novels-fill-blanks"],
    // REVIEW: the skeleton's draft tension, and point 6 of the revised outline, say that in 2024 Scott "agreed to the
    // canonicity of the books". scott-2024-books-canonicity-yes is a Reddit comment, not an interview, and its notes
    // call the answer deliberately ambiguous: "yes, that is correct" names no position. The body and the tension say
    // only that.
    tension: "Scott has not made this archive's rule his own. In 2020 he told readers to \"look to the novels to fill in some of blanks to the past\" [[scott-2020-novels-fill-blanks]], meaning a later series of short stories. In 2024, in a comment about \"the canonicity of the books\", he wrote only \"yes, that is correct\" [[scott-2024-books-canonicity-yes]], which names no position and settles nothing. In 2015 he had written that the first novel and the games are separate continuities. The model does not claim that his later words exclude the books. It leaves them out by policy: an account built only from what a player can reach in the games, and from what their author said in his own voice, is one that any reader can check.",
    changesIf: "Nothing in a game would change the policy, which is this archive's own. A written ruling from Scott on Ultimate Custom Night or on Security Breach's base story would replace the model's conventions for those games.",
    seeAlso: ["edges", "timeline-math", "games", "open", "cover-story"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      // REVIEW: the notes of scott-2019-not-canon-list give the following sentence as "Only the idea of a game
      // developer...". The post reads "Only the existence of a game developer...", as
      // scott-2019-only-game-developer-existence-canon has it (checked against an archive of the Reddit post). The
      // chapter quotes the second record; the first record's note needs correcting.
      "scott-2019-not-canon-list", // [stated] Scott / Reddit / fangames are not canon; the in-game developer is
      "scott-2015-community-uncovered-fnaf1-3", // [stated] By August 2015 the community had 'found everything' in FNaF1 to FNaF3
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
    answer: "In part. FNaF World's adventure is outside the story, but the voice that frames it echoes FNaF4 on purpose, and the model uses it as support and never alone. Into the Pit is an adaptation that the main games never place: its events are not on the timeline, its year dates nothing, and where its background agrees with the model a chapter may say so and no more. A tale told by someone inside a game can agree too, and can never establish anything.",
    confidence: "medium",
    hero: { image: "fw-clock-ending-pieces-in-place.png", caption: "FNaF World's hidden clock ending: \"The pieces are in place for you.\" [[fw-clock-ending-pieces-in-place]]" },
    body: [
      "FNaF World begins in the dark. On first launch, before the title, two small yellow dots say that this is a safe place, that something has gone wrong, and that they will not let the same happen to the player [[fw-opening-safe-place-something-went-wrong]]. Their last screen is a sentence that anyone who finished FNaF4 already knows.",
      { kind: "quote", evidence: "fw-opening-put-you-back-together", text: "I will put you back together." },
      "It is the closing line of FNaF4's last cutscene, spoken there to the boy who has just been bitten [[fnaf4-i-will-put-you-back-together]]. Scott published the screen among the game's own promotional pictures [[fw-opening-put-you-back-together]]. The echo is deliberate. What it is worth is the question here.",
      { kind: "heading", text: "FNaF World: the adventure and the frame" },
      "The adventure is outside the story, and says so. Its ordinary ending congratulates the player on beating \"an imaginary monster in an imaginary game\" [[fw-normal-ending-still-in-control]]. Before release Scott wrote that the new game would \"not add to\" the story [[scott-2015-story-complete]]. In a 2018 interview, on record here as a transcript, he said he should have \"done something that was obviously for fun and not tried to somehow tie it in to a canon game\" [[scott-2018-interview-fnaf-world-tied-to-canon-mistake]].",
      "The tie he regretted is a second voice that runs under the adventure. If the player lingers, a glitching 8-bit Fredbear appears and sets a task: \"You have to leave breadcrumbs for him, to help him find his way.\" [[fw-8bit-fredbear-breadcrumbs]] The breadcrumbs are five hidden clocks, each with a small game behind it [[fw-clock-games-five-tasks]]. One of the games leaves the number 395248 on the screen, which is the code that opens a hidden minigame in FNaF3 [[fw-clock-game-395248]]. The model reads the five as FNaF3's trail to its good ending: that one is an exact match, and the other four are resemblances.",
      "With the clocks set, the two dots return with FNaF4's other closing line, a word shorter: \"We are still your friends. Do you believe that?\" [[fw-clock-ending-still-your-friends]] Then they finish.",
      { kind: "quote", evidence: "fw-clock-ending-pieces-in-place" },
      "That is all the frame says, and it adds no event. It echoes FNaF4's promise and points down FNaF3's trail toward rest. The model uses it as support, at a low weight, and never as the only support for a fact.",
      "Three things hold it at that weight. The trophy for the clock ending is a character the game calls Crying Child: the pale weeping child of FNaF2's and FNaF3's minigames, not the brown-haired boy of FNaF4 [[fw-crying-child-character]]. A year later the Android port rewrote the same ending as a joke [[fw-android-port-clock-ending]]. And the game's other dark scene, a man at a desk who says \"I've made something terrible. Her name is Baby.\" [[fw-desk-man-made-something-terrible]], is a teaser for Sister Location, spoken by a maker of games who has just asked, \"You deactivated my games?\" [[fw-desk-man-deactivated-my-games]] The model identifies him with nobody.",
      { kind: "heading", text: "Into the Pit" },
      "Into the Pit is an edge of another kind. A boy named {{oswald}} hides in the ball pit of a run-down pizza place and climbs out in a busy Freddy Fazbear's Pizza of the past [[into-the-pit-jeffs-pizza-ball-pit]]. A yellow rabbit lures him to a room of dead children in party hats [[into-the-pit-prologue-mci]]. Back in the present it drags his father into the pit and takes his place, and nobody else sees anything wrong [[into-the-pit-rabbit-replaces-dad]]. It has the killer's line.",
      { kind: "quote", evidence: "into-the-pit-yellow-rabbit-always-come-back" },
      "The model calls it an adaptation that the main games never place. Three things set it apart, and the strangeness of its plot is not one of them. Its plot comes from a book: in 2024 an interviewer described the game to Scott as based on one of the short stories he had announced as \"some connected directly to the games, and some not\" [[scott-2018-frights-some-connected-to-games]], and his answer, on record here as a transcript, was that it \"was still just supposed to be a novelty\" [[scott-2024-interview-into-the-pit-began-as-novelty]]. This archive does not admit the book. No main-line game refers to the game's events. And Scott has written nothing that places them.",
      "So the model shows where Into the Pit's background agrees with the main games, and calls it agreement and no more.",
      { kind: "list", items: [
        "It agrees on a yellow rabbit, and on children dead in a party room.",
        "It agrees on the caller's rule. A phone call warns that the machines \"will think that you belong inside of an animatronic suit\" [[into-the-pit-phone-guy-night3-stuffing]], as the first game's caller does [[fnaf1-call1-stuffed-into-suit]].",
        "It agrees on a smell. A technician's sketchbook asks of Chica, \"Why is she starting to smell bad?\" [[into-the-pit-sketchbook-chica-smell]], beside the first game's foul odour from the mascots [[fnaf1-news-sanitation]].",
        "It agrees on a second yellow suit. The boy hides in an empty yellow bear suit while the rabbit inspects it [[into-the-pit-golden-freddy-suit-hide]], which fits the two suits of ((november-1987)) and supports nothing.",
        "It does not agree on the count. The party room holds six dead children, where the model has five at the restaurant and a sixth child killed outside one (see ((murders)) and ((child-outside))).",
        "It does not agree on the rabbit. Standing in the past, it promises suffering \"just like I did\" [[into-the-pit-yellow-rabbit-suffer-like-i-did]].",
      ] },
      "A later game that placed Into the Pit would have to explain what does not agree. Until one does, none of its events is on the timeline.",
      { kind: "figure", image: "itp-freddys-logo-1985.png", caption: "A logo graphic in Into the Pit: \"FREDDY FAZBEAR'S Pizza 1985\". Where in the game it is shown has not been confirmed, and no calendar or character there states a year.", evidence: "into-the-pit-past-year-1985" },
      "That logo carries the game's one year. Three months before the game came out, Scott wrote that when a licensed partner invents story for a product he steps in: \"No, don't create lore; just focus on established lore.\" [[scott-2024-no-new-lore-on-products]] That cuts both ways: a 1985 that reached the game is either one he let through, or the kind of date he says a product must not assert. The model does not choose, and never uses it as the year of the five (see ((timeline-math))).",
      { kind: "heading", text: "Tales told inside a game" },
      "A tale told by someone inside a game can agree too, and can never establish anything. Pizzeria Simulator's Candy Cadet tells three, and each ends with five things made into one: five keys melted into a key that opens no door [[ffps-candy-cadet-five-keys]], five murdered orphans stitched into one body [[ffps-candy-cadet-five-orphans]], five kittens pieced back together as one [[ffps-candy-cadet-five-kittens]]. Ultimate Custom Night runs two cartoons between rounds: in one, Toy Chica plans in each episode how to get a new boy to her house [[ucn-toy-chica-hsy-premise]]; in the other, a bear's revenge on a fox fails every night [[ucn-bear-of-vengeance-premise]]. The model maps no character onto any of them. Mr. Hippo, another of that game's voices, gives the verdict: \"sometimes, a story's just a story.\" [[ucn-mr-hippo-just-a-story]]",
      "Ultimate Custom Night's own lines are another matter, though that game is as strange as any of these. It is Scott's game in the main line, and its lines answer Pizzeria Simulator's last speech, as when one says \"He tried to release you\" [[ucn-orville-he-tried-to-release]]. So they can establish (see ((ucn))). Into the Pit adapts a source this archive does not admit, and no main-line game takes it up, so it can only agree.",
      { kind: "table", head: ["The work", "Its standing", "How the model uses it"], rows: [
        ["FNaF World's adventure", "Imaginary, in its own words", "Not at all"],
        ["FNaF World's frame voice", "A deliberate echo of FNaF4 and FNaF3", "Support, never alone"],
        ["The man at the desk", "A teaser for Sister Location", "Identified with nobody"],
        ["Into the Pit", "An adaptation that the main games never place", "Shown where it agrees; no event, no date"],
        ["Candy Cadet's stories", "Tales with a teller", "At most, they agree that five were made into one (see ((salvage)))"],
        ["Ultimate Custom Night's cartoons", "Tales with a teller", "Nothing is argued from them"],
        ["FNaF4's Halloween Edition; Sister Location's Custom Night play", "Not canon, by Scott's ruling", "Not at all (see ((canon-rules)))"],
      ] },
    ],
    counterEvidence: ["fw-crying-child-character", "fw-android-port-clock-ending", "into-the-pit-phone-guy-night3-stuffing", "fw-desk-man-deactivated-my-games"],
    // REVIEW: the tension is the lead's revised text (telling-revisions.md) with one clause changed. The lead's draft
    // says that on Android the two lights "are replaced by an ordinary enemy"; fw-android-port-clock-ending says they
    // are replaced by "a small potted-plant creature" hailed as Bouncepot, in an ending rewritten as a joke, and does
    // not call it an ordinary enemy. The clause follows the record.
    tension: "The frame voice is weaker than it looks. The one figure FNaF World names \"Crying Child\" is the weeping child of the earlier minigames, not FNaF4's boy [[fw-crying-child-character]]; on Android the clock ending is rewritten as a joke, and its two lights are replaced by a potted-plant creature [[fw-android-port-clock-ending]]; and the same game's desk scene is plain promotion for the next one [[fw-desk-man-deactivated-my-games]]. So the model lets the voice echo and never lets it carry a fact alone. Into the Pit pushes the other way: its phone calls describe machines that stuff people into suits [[into-the-pit-phone-guy-night3-stuffing]], which reads like the main games' own history and tempts a literal reading. The model leaves it unplaced because its plot comes from a source this archive does not admit, no main-line game refers to its events, and Scott has not placed it. \"Unplaced\" is not \"false\": if a later game took up its events, the same test would move it.",
    changesIf: "A ruling from Scott on FNaF World's frame or on where Into the Pit sits, or a main-line game that refers to Into the Pit's events.",
    seeAlso: ["canon-rules", "bite", "plush", "golden", "murders", "salvage", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fw-8bit-fredbear-made-for-one-thing", // [stated] 8-bit Fredbear: 'you were made for one thing'
      "fw-desk-man-found-dead", // [shown] Desk Man found dead; 'The show will begin momentarily'
      "fw-fredbear-flipside", // [stated] Fredbear: something bad happened 'on the flipside'
      "fw-8bit-fredbear-true-goal", // [stated] 8-bit Fredbear: 'Find the clock. Everything else is a deception.'
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
    // REVIEW: the outline's point 1 lists the dates read from images first and the printed dates second. The chapter
    // gives the printed dates first, as its answer and its opening scene (the two cheques) do. Murray's paperwork has
    // an "estimated" pill and the 1979 night a "teaser" pill, as telling-revisions.md directs
    // (secret-of-the-mimic-work-order-1979, secret-of-the-mimic-mcm-net-earnings-1965-1975).
    answer: "Few are printed: the year 1983 on a television, a June 26th with no year, and two cheques of November 1987. The year 1979 ends a teaser. It is also on a work order, and Murray's paperwork runs from 1965 to 1977, but those documents were read from images that nobody has yet confirmed in play. No game prints a year after 1987. Everything else is placed by order and by stated intervals such as \"thirty years\", and each date in the model says which kind of support it has.",
    confidence: "medium",
    hero: { image: "fnaf2-paycheck-1987.jpg", caption: "FNaF2's Night 5 cheque, dated 11-12-1987: one of the two full dates the first games print [[fnaf2-paycheck-1987]]." },
    body: [
      "FNaF2's fifth night ends with a cheque made out to {{jeremy-fitzgerald}} and dated 11-12-1987 [[fnaf2-paycheck-1987]]. FNaF1's ends with one made out to {{mike-schmidt}} and dated 11-12-xx [[fnaf1-paycheck-night5]]. The day and the month match, and the first game hides the year. These games print very few dates, and this chapter lists them all.",
      { kind: "heading", text: "What is printed" },
      "These are the dates a player can see or hear in play.",
      { kind: "table", head: ["Date", "Where", "What it dates"], rows: [
        ["<<1983|printed|fnaf4-fredbear-and-friends-1983|Printed on the title card of a television show in the house.>>", "A television in FNaF4's house", "The show. The week around it is that year or soon after"],
        ["<<June 26th|printed|fnaf1-news-kids-vanish|Printed in a clipping, with no year.>>", "A clipping in FNaF1", "The night two children were lured. Five were linked to it later"],
        ["<<11-12-1987 and 11-13-1987|printed|fnaf2-paycheck-1987,fnaf2-overtime-robots-scrapped|Printed on the Night 5 cheque and the Night 6 overtime cheque.>>", "FNaF2's two cheques", "The end of FNaF2's week"],
        ["\"The Bite of '87\"", "Spoken on FNaF1's first night [[fnaf1-call1-bite-of-87]]", "A bite, by a two-digit year"],
        ["<<November 12 and 13|printed|fnaf1-paycheck-night5,fnaf1-paycheck-night6|The cheques read 11-12-xx and 11-13-xx. The year is blanked.>>", "FNaF1's two cheques", "The end of FNaF1's week, in a year printed as xx"],
      ] },
      { kind: "heading", text: "Dated on paper, not yet seen in play" },
      "Three more dates are on documents and graphics that this archive read from images, and nobody on the project has yet confirmed where each appears in play. Until then the model cites them with that status and does not call them printed.",
      { kind: "figure", image: "sotm-work-order-1979.jpg", caption: "The Fazbear work order from the technician's van in Secret of the Mimic, dated 9/07/79.", evidence: "secret-of-the-mimic-work-order-1979" },
      { kind: "list", items: [
        "<<1965 to 1977|estimated|secret-of-the-mimic-mcm-net-earnings-1965-1975,secret-of-the-mimic-mcm-order-forms-1973-1977|An earnings chart runs from 1965 to 1975 and the last order form is dated January 1977. Both were read from images of the documents, not yet confirmed in play.>>, on the paperwork of Murray's Costume Manor: years in which the workshop was trading.",
        "<<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979,secret-of-the-mimic-credential-form-1979|The year ends the official teaser. In the game it is on a work order dated 9/07/79 and on a credential form that expires in 1979, both read from images of the props and not yet confirmed in play.>>, the night of Secret of the Mimic. The year is firm. The day reads the work order month first and needs two assumptions: that the \"Aug 3rd\" on a mailbox whose last mail came \"five weeks ago\" dates that mail [[secret-of-the-mimic-mail-foreclosure]], and that a work order's date is the day of the job.",
        "1985, on a logo graphic in Into the Pit [[into-the-pit-past-year-1985]]. It dates nothing in the story: the game is an adaptation that the main games never place (see ((edges))).",
      ] },
      "Three more things look like dates and are not.",
      { kind: "list", items: [
        "\"19 70\" on a Fall Fest poster in Help Wanted 2 [[hw2-fall-fest-1970-poster]] and \"FALLFEST 83'\" on a banner in Curse of Dreadbear [[codb-fallfest-83-banner]]: staged props inside company products. The banner agrees with the year on FNaF4's television. The poster agrees with no other record, and is used for nothing.",
        "The keypad codes 1983 and 1979. Sister Location's Private Room answers to 1-9-8-3 [[sl-private-room-keypad-1983]]; Help Wanted 2 reuses that code [[hw2-puppet-master-1983]] and adds 1979 [[hw2-mimic-teaser-1979-white-tiger]]. They agree with the years above, and no game calls either one a date.",
        "The days attached to Special Delivery's emails. They are the days the emails reached players, and the emails themselves carry no date [[sd-ness-blood-eagle-calendar]]. Only their order counts.",
      ] },
      { kind: "heading", text: "What follows, and what is only estimated" },
      "Two dates follow from the printed ones by arithmetic. The man was caught \"the following morning\", which makes it a June 27th [[fnaf1-news-suspect-captured]]. And FNaF1 is <<not before November 1988|derived|fnaf1-paycheck-night5,fnaf2-paycheck-1987,fnaf2-news-originals-kept|The 1987 restaurant was still open on 12 November 1987. FNaF1 comes after it, and its own cheque is dated 11-12.>>: the 1987 restaurant was still trading on 12 November of that year, FNaF1's restaurant follows it with the four machines it kept [[fnaf2-news-originals-kept]], and FNaF1's own cheque is dated 11-12.",
      "Everything else is an estimate or a reading, and is labelled as one. FNaF4's week is <<c. 1983|estimated|fnaf4-fredbear-and-friends-1983,fnaf4-minigame-countdown-to-party|The title card dates the show, which gives a floor. The week is in that year or soon after.>>. The five are placed on <<a June 26th between 1980 and 1986|estimated|fnaf1-news-kids-vanish,fnaf2-call1-new-location,secret-of-the-mimic-rnd-proto-pizzeria|Before the 1987 restaurant opened, by which time the old one had been left to rot. After the 1979 night, when the four mascots were still incomplete prototypes.>>: the old restaurant was already \"left to rot for quite a while\" before the new one opened in autumn 1987 [[fnaf2-call1-new-location]], and on the 1979 night incomplete prototypes of the four mascots still stand in Murray's workshop [[secret-of-the-mimic-rnd-proto-pizzeria]]. The floor is the softer end, and nothing favours the middle. The Bite of '87 is placed in the 1987 restaurant's last days on a reading of one sentence (see ((november-1987))).",
      { kind: "figure", image: "fnaf1-paycheck-night5.png", caption: "FNaF1's Night 5 cheque: the same day and month as FNaF2's, with the year printed as xx.", evidence: "fnaf1-paycheck-night5" },
      { kind: "heading", text: "Two phrases that mislead" },
      "On FNaF1's first night Phone Guy says the machines have sung \"those same stupid songs for twenty years\" [[fnaf1-call1-twenty-years]]. Taken literally, with the four still prototypes in 1979, that would put FNaF1 about two decades later. The model takes it as loose talk, which is how it is delivered, and prints no year from it.",
      "FNaF2's first call welcomes the guard to a \"new summer job\" [[fnaf2-call1-summer-job]], and Scott's store text for FNaF1 uses the same phrase [[scott-2014-fnaf1-store-summer-job]]. Both games' cheques are dated in November. The model follows the cheques, the only dates either game prints for its own week.",
      { kind: "heading", text: "Thirty years, and no year" },
      "The one long interval is Scott's own, from the store text of FNaF3.",
      { kind: "quote", evidence: "scott-fnaf3-steam-description", text: "Thirty years after Freddy Fazbear's Pizza closed it's doors" },
      "It does not say which closing. There are three: the old restaurant's, before autumn 1987; the 1987 restaurant's; and FNaF1's. The model leans to the last, loosely. It will not turn the interval into a year: no game prints a year after 1987, so the model prints none for FNaF1, FNaF3, Pizzeria Simulator or anything later. It gives order and intervals.",
      { kind: "heading", text: "The order, and what fixes it" },
      { kind: "table", head: ["Step", "How it is placed"], rows: [
        ["Murray's workshop: springlock suits, then two machines for his son (((two-machines)))", "Before the 1979 night, fixed"],
        ["1979, most likely 7 September: Fazbear Entertainment sends for the blueprints", "The year is firm; the day is most likely"],
        ["The Cassette Man's daughter is killed (((child-outside)))", "Undated. Before the five by convention"],
        ["c. 1983: the week of the bite (((bite)))", "Estimated. Before the five by convention"],
        ["A June 26th: the five (((murders)))", "Before the 1987 restaurant opened, most likely"],
        ["The old restaurant closes and rots", "Before autumn 1987, stated"],
        ["Afton Robotics, Circus Baby, the daughter's death (((funtimes)))", "Undated. Here by convention; before the killer's death, fixed"],
        ["November 1987: the new restaurant's last week (((november-1987)))", "Printed"],
        ["FNaF1's week, and that restaurant's closing (((fnaf1-restaurant)))", "After 1987, fixed; the closing is inferred from an undated clipping"],
        ["The killer dies in the suit (((springtrap)))", "After that closing, most likely; before Fazbear's Fright, fixed"],
        ["Michael's week underground (((michael)))", "Undated. Before his speech, fixed; after his father's death by convention"],
        ["Fazbear's Fright, its fire, Michael's speech (((fazbears-fright)))", "Fixed, in that order"],
        ["Pizzeria Simulator's fire, then Ultimate Custom Night (((ffps)), ((ucn)))", "After the Fazbear's Fright fire, most likely"],
        ["Help Wanted's scan of old circuit boards, then Special Delivery's emails (((digital)))", "After Pizzeria Simulator's fire by convention"],
        ["The Pizzaplex, Security Breach, Help Wanted 2, RUIN (((pizzaplex)))", "Fixed among themselves, and after the scan. After Pizzeria Simulator's fire by inference"],
      ] },
      "Five of those placements are conventions, and the records would allow others: the daughter's death before the five, on one phrase of her father's; the 1983 week before the five; Circus Baby's venture after the five; Michael's week after his father's death; and Help Wanted's scan after Pizzeria Simulator's fire, on which no record bears. What is inferred is narrower: if the pizzeria buried under the Pizzaplex [[security-breach-underground-pizza-place]] is Pizzeria Simulator's, the Pizzaplex follows the fire (see ((burntrap))).",
      { kind: "callout", tone: "open", title: "Three sequences the model does not tell", text: "A child watched in 1983 from a room whose business is dated after \"the unfortunate closing of Freddy Fazbear's Pizza\" [[sl-handunit-freddy-fazbear-closing]]: either the watching post is older than the business that houses it, or the order is wrong there (see ((afton-house))). A man caught for the five who then pitches Circus Baby's under his own name: each half is allowed, and the pair is not told (see ((murders))). And, after the fire, a killer held in a night, present in the company's code, walking abroad and standing under the Pizzaplex, all as one history: no record gives that picture (see ((thesis)))." },
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "fnaf2-call1-summer-job", "scott-2014-fnaf1-store-summer-job", "fnaf4-toy-collection-girl"],
    tension: "Four records pull against the dates. Read literally, \"twenty years\" [[fnaf1-call1-twenty-years]] would put the first game about two decades after the prototypes of 1979; the model treats the line as loose talk, which is how it is delivered. FNaF2 contradicts its own cheques with a first call that says \"summer job\" [[fnaf2-call1-summer-job]], and Scott's store text for FNaF1 says the same [[scott-2014-fnaf1-store-summer-job]]; the model follows the printed dates. And in the week whose only year is 1983, a girl has toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], which the model cannot explain and does not use. None of these moves a printed date. Together they are the reason the model prints so few.",
    changesIf: "Any game that prints a year after 1987, a year on the last restaurant's cheques, or a record that places Help Wanted's scan against Pizzeria Simulator's fire.",
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
    // REVIEW: scott-2017-fnaf6-existed-to-clear-things-up says "the new game" and does not name Pizzeria Simulator; the
    // record's notes tie it to that game, released 26 days later. The text says "weeks before Pizzeria Simulator came
    // out he wrote that the new game...".
    answer: "Every release has a place. Most were made to answer the one before, which is why a later game is the authority on what an earlier one left unclear. This chapter is a table: each game, when it is set, what it adds to the story, and the chapters that argue it.",
    confidence: "high",
    body: [
      "FNaF4 was sold as \"this last chapter of the Five Nights at Freddy's original story\" [[scott-2015-fnaf4-store-last-chapter]], and its first teaser read \"THE FINAL CHAPTER\" [[scottgames-site-fnaf4-final-chapter]]. It was not the last. In a 2018 interview, on record here as a transcript, Scott said that the first game had told \"a small snippet of a larger story\" [[scott-2018-interview-first-game-snippet-of-larger-story]], and that each game after the third grew out of what he disliked in the one before.",
      { kind: "quote", evidence: "scott-2018-interview-each-game-fixed-the-last" },
      "Weeks before Pizzeria Simulator came out he wrote that the new game \"was really only existing to clear up things that were frustrating people in the community\" [[scott-2017-fnaf6-existed-to-clear-things-up]]. So the model reads backwards. Where a later game was made to mend an earlier one, the later game governs the point in dispute: FNaF4 is read through Sister Location, Sister Location through Pizzeria Simulator, Security Breach through RUIN. The rule is the model's own (see ((canon-rules))). The habit it follows is the author's.",
      { kind: "heading", text: "Game by game, in order of release" },
      { kind: "table", head: ["Game", "When it is set", "What it adds", "Argued in"], rows: [
        ["FNaF1 (2014)", "<<A November after 1987|derived|fnaf1-paycheck-night5,fnaf2-news-originals-kept|The cheques read 11-12-xx and 11-13-xx, and the cast is the four machines kept when the 1987 restaurant closed.>>", "The restaurant and its four machines; five missing children, in four clippings; the Bite of '87 by name; a guard named Mike Schmidt; Phone Guy's last call", "((murders)), ((golden)), ((fnaf1-restaurant))"],
        ["FNaF2 (2014)", "<<November 1987|printed|fnaf2-paycheck-1987,fnaf2-overtime-robots-scrapped|The two cheques are dated 11-12-1987 and 11-13-1987.>>", "The new restaurant's last week; the Puppet; the child killed outside; the purple figure; \"a yellow one\" [[fnaf2-call6-yellow-suit]]; Fredbear's Family Diner by name", "((november-1987)), ((child-outside)), ((golden))"],
        ["FNaF3 (2015)", "<<Thirty years after a closing|relative|scott-fnaf3-steam-description|Scott wrote that it is thirty years after the pizzeria closed. No year is printed.>>", "The springlock suits and the hidden rooms, on training tapes; the killer's death; Springtrap; Happiest Day; a fire", "((springlocks)), ((springtrap)), ((fazbears-fright)), ((killer))"],
        ["FNaF4 (2015)", "<<c. 1983|estimated|fnaf4-fredbear-and-friends-1983,fnaf4-minigame-countdown-to-party|The only year in the game is on a television, and it dates the show.>>", "A household; a plush that talks; five nights in a bedroom; the bite at Fredbear's; a locked box", "((afton-house)), ((plush)), ((nightmares)), ((bite))"],
        ["FNaF World (2016)", "Outside the story, except the voice that frames it", "An echo of FNaF4's promise; Old Man Consequences; a teaser for the next game", "((edges)), ((open))"],
        ["Sister Location (2016)", "Undated; after a Freddy Fazbear's Pizza has closed", "The name Afton; Afton Robotics and its blueprints; a daughter; a son named Michael; the Private Room", "((funtimes)), ((michael)), ((afton-house))"],
        ["Pizzeria Simulator (2017)", "After Fazbear's Fright burned", "William Afton and Elizabeth by name; the Cassette Man and his daughter; the trap, the fire, the graves; the word Remnant", "((ffps)), ((salvage)), ((remnant)), ((partners))"],
        ["Ultimate Custom Night (2018)", "After that fire", "A night without end; \"the one you should not have killed\" [[ucn-nightmare-freddy-toysnhk]]; Old Man Consequences again", "((ucn)), ((faith))"],
        ["Help Wanted (2019)", "Undated. The model tells it after Pizzeria Simulator's fire, by convention", "The company's account of its own past; old circuit boards scanned into a game; the rabbit in the code; a plush left for a tester", "((cover-story)), ((digital)), ((vanny))"],
        ["Curse of Dreadbear (2019)", "The same; an add-on to Help Wanted", "A rabbit mask and a hidden call; a staged fairground banner that reads FALLFEST 83'", "((vanny)), ((timeline-math))"],
        ["Special Delivery (2019)", "Undated; its emails count only in their order", "A second scan and a second outbreak; Ness; the company's lawyers; a \"vintage Bonnie\" that is in no database [[sd-vintage-bonnie-reports]]", "((digital)), ((vanny)), ((cover-story))"],
        ["Security Breach (2021)", "One night; undated; after the fire, most likely", "The Pizzaplex over a buried pizzeria, and a burnt rabbit under it; Gregory; Vanessa and Vanny; Princess Quest", "((pizzaplex)), ((vanny)), ((burntrap))"],
        ["RUIN (2023)", "After that night", "Cassie; M.X.E.S.; an endoskeleton behind poured concrete", "((mimic)), ((pizzaplex))"],
        ["Help Wanted 2 (2023)", "Between Security Breach and RUIN", "A technician and a mask; Princess Quest IV; six memory dolls; the code 1979", "((mimic)), ((vanny)), ((golden))"],
        ["Into the Pit (2024)", "Not placed: an adaptation the main games never refer to. The 1985 on a logo graphic dates nothing", "No event. Its background agrees in places (a yellow rabbit, a mascot that smells) and differs in others (six children in one room)", "((edges))"],
        ["Secret of the Mimic (2025)", "A night in <<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979|The year ends the official teaser. In the game it is on a work order dated 9/07/79, read from an image of the prop and not yet confirmed in play.>>", "Murray's Costume Manor; springlocks \"for the diner\" [[secret-of-the-mimic-mail-springlocks-hen]]; \"Hen\" and \"W.A.\" [[secret-of-the-mimic-mail-staff-contacts-wa]]; two machines that copy; the name behind M.X.E.S.", "((springlocks)), ((two-machines)), ((partners)), ((mimic))"],
      ] },
      { kind: "heading", text: "The same games, in the order of the story" },
      { kind: "list", ordered: true, items: [
        "Secret of the Mimic: a night in 1979, and the years before it.",
        "FNaF4: the week of the bite, c. 1983.",
        "The murders. No game is set during them: FNaF1's clippings and the minigames of FNaF2 and Pizzeria Simulator report them.",
        "FNaF2: November 1987.",
        "FNaF1: a later November.",
        "The killer's death, shown in FNaF3's minigames.",
        "Sister Location: undated. The model places Michael's week here by convention.",
        "FNaF3, then Pizzeria Simulator, then Ultimate Custom Night.",
        "Help Wanted with Curse of Dreadbear, and Special Delivery: after the fire by the model's convention.",
        "Security Breach, then Help Wanted 2, then RUIN.",
      ] },
      "Four of those places are conventions and not findings: the 1983 week before the murders; Circus Baby's venture, which Sister Location looks back on; Michael's week; and Help Wanted after Pizzeria Simulator's fire. ((timeline-math)) gives the working.",
      { kind: "heading", text: "Outside the story" },
      { kind: "list", items: [
        "FNaF4's Halloween Edition, and the play of Sister Location's Custom Night: not canon, by Scott's ruling (see ((canon-rules))).",
        "FNaF World's adventure, which the game itself calls imaginary (see ((edges))).",
        "The events of Into the Pit, an adaptation that the main games never place. Nobody has ruled it out: it is unplaced, by this model's own convention. It may agree, and it adds no event.",
        "Freddy in Space 2, a comic spin-off that carries no story. This archive holds no records from it.",
        "The novels, the guidebooks and the films, by this archive's own policy.",
      ] },
    ],
    counterEvidence: ["scott-2015-story-complete"],
    tension: "In September 2015 Scott wrote that \"the story is complete\", and that the next releases would not add to it [[scott-2015-story-complete]]. Most of the games in this table came later. The table is therefore not a plan carried out. It is the record of a story that was extended and repaired in public, and the model reads the later repairs as the author's own corrections, which is what he has said they were.",
    changesIf: "A new game. Each release so far has changed how at least one earlier game is read.",
    seeAlso: ["canon-rules", "timeline-math", "thesis", "edges", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [],
  },
  {
    id: "open", part: "apparatus", title: "What stays open",
    question: "What does the evidence not settle?",
    // REVIEW: length. This chapter runs to about 2,400 words: six entries in full and 30 more in four tables. The
    // outline asks for a heading and up to 120 words for every entry, which would be longer still. If it must be
    // shorter, cut rows from the tables first.
    // REVIEW: the Mike Schmidt entry follows the owner's instruction to this writer: a shared first name and one word on
    // a pink slip; the model does not use the identification; the evidence usually cited is in a book this archive does
    // not admit. The outline says "name no other source". The entry names no book and describes none
    // (fnaf1-paycheck-night5, fnaf1-custom-night-pink-slip, fnaf2-pink-slip-fritz-smith).
    answer: "A good deal, and the model says so. Where Scott's one retcon lies; what the dark bear and the dark rabbit are; who Hen is; who drives in Midnight Motorist; what is in the locked box; who Old Man Consequences is; whether the scan came before the fire; which endings stand; where the crying child went. Each entry gives what the records show, the readings on offer, and what would settle it.",
    confidence: "low",
    hero: { image: "fnaf4-locked-box-ending.jpg", caption: "FNaF4's last screen: a locked box, and \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]]" },
    body: [
      "FNaF4 ends on a grey box with two padlocks that no click will open [[fnaf4-locked-box-ending]]. The games keep a good deal locked, and this model does not force the locks. Six questions belong to no other chapter and are set out here in full. The rest are listed after them, each with the chapter that weighs it.",
      { kind: "heading", text: "Scott's one retcon" },
      "In September 2017 Scott wrote: \"I've done one actual retcon in the series (although I'm not going to say where it was).\" [[scott-2017-one-retcon]] It \"was integrated pretty seamlessly, and most people didn't notice\" [[scott-2017-retcon-seamless]]. He also said what it is not. Clearing up a misread intention in the next game is \"not really a retcon\" [[scott-2017-clarification-is-not-retcon]], and neither are \"new details\" that were never planned [[scott-2017-story-developed-new-details]].",
      "So it changed something an earlier game had established, and nothing says where. An earlier version of this model staked it on FNaF2's yellow suit. That stake is withdrawn. The best of a poor field is the suspect of FNaF1's clipping, \"charged\" under a headline that says \"convicted\" [[fnaf1-news-charged-vs-convicted]], whom FNaF3 forgets when it speaks of \"unsolved mysteries\" [[fnaf3-coming-soon-newspaper]]. The model needs neither, and only Scott can settle it.",
      { kind: "heading", text: "Mike Schmidt" },
      "FNaF1's guard is named once, on a cheque made out to {{mike-schmidt}} [[fnaf1-paycheck-night5]]. The slip that fires him after the Custom Night gives \"Odor\" as its last reason [[fnaf1-custom-night-pink-slip]]. That is all the games give for the idea that he is Michael Afton: a shared first name, and one word that might fit a man whose body is rotting (see ((michael))).",
      "It is not enough. {{fritz-smith}} is fired from the 1987 restaurant for the same word [[fnaf2-pink-slip-fritz-smith]], and in the first game it is the mascots that smell [[fnaf1-news-sanitation]]. The strongest evidence usually cited for the identification is in a book, which this archive does not admit. The model does not use the identification, and nothing in it depends on one. A game that tied any guard to the Afton family would settle it.",
      { kind: "heading", text: "The dark bear and the dark rabbit" },
      { kind: "figure", image: "fnaf2-shadow-freddy-parts-service.jpg", evidence: "fnaf2-shadow-freddy" },
      "Two dark figures recur in the first three games, and no game names or explains either. A dark purple double of the slumped yellow bear sometimes sits in the 1987 restaurant's back room [[fnaf2-shadow-freddy]]. In FNaF3 a dark bear says \"follow me.\" and leads each of the four machines to the place where the purple figure takes it apart [[fnaf3-eon-shadow-freddy-follow-me]]. A dark rabbit's silhouette sometimes stands in the 1987 office [[fnaf2-shadow-bonnie-office]], and in FNaF3 a dark rabbit crosses between the hidden minigames and can bring cake to a crying child [[fnaf3-shadow-bonnie-minigame]].",
      "The model reads the bear as the killer's lure, at a low grade: its one act is to lead the four to him. Against that, what follows from its lead is five ghosts loose and the killer dead. The rabbit helps, and the model does not say what it is. A game that named or explained either would settle it.",
      { kind: "heading", text: "Midnight Motorist" },
      { kind: "figure", image: "ffps-midnight-motorist-secret-drive.png", evidence: "ffps-midnight-motorist-secret-drive" },
      "A gap in the wall of one of Pizzeria Simulator's arcade games opens onto a rainy night road, driven in a dark purple car [[ffps-midnight-motorist-secret-drive]]. The driver is a plain yellow figure. At a house, someone by the television tells him, \"Leave him alone tonight. He had a rough day.\" [[ffps-midnight-motorist-grey-person]] A door stays shut: \"I told you not to close your door.\" [[ffps-midnight-motorist-closed-door]] Behind the house is a broken window: \"Ran off to that place again.\" [[ffps-midnight-motorist-ran-off]]",
      "Nobody is named. On one reading this is the killer's house, because the car is purple, like the car in FNaF2's scene of the child outside [[fnaf2-take-cake-to-the-children]]. The boy behind the door could then be either brother of FNaF4. On the other reading it is a victim's house: the driver is drawn yellow, the other cars in that game glow purple too, and a boy runs from a violent home to \"that place\". The model picks neither, and takes nothing from the scene for the Afton household. A game that identified the driver, the house or the boy would settle it.",
      { kind: "heading", text: "The locked box" },
      "A month after FNaF4 came out Scott wrote: \"What's in the box? It's the pieces put together.\" [[scott-2015-fnaf4-box-pieces-put-together]] He had thought of opening it that Halloween [[scott-2015-considered-opening-box]]. Two later answers are on record here as transcripts of interviews. In 2018: \"The contents of that box have changed over the years\" [[scott-2018-box-meaning-changed]]. In 2024: \"there is something in the box, but I never pursued it, and I don't know if I can find it again.\" [[scott-2024-box-interview]]",
      "The three answers agree only that the box never got a final content. The model treats it as closed for good. That Sister Location stood in for it is a weaker reading, and no statement of Scott's says so (see ((afton-house))). Nothing short of Scott opening it would say more.",
      { kind: "heading", text: "Old Man Consequences" },
      { kind: "figure", image: "fw-old-man-consequences.jpg", evidence: "fw-old-man-consequences" },
      "In a hidden tunnel of FNaF World a red figure sits fishing at a lake. He tells the player that they have gone too deep into the code, and then: \"My name is Old Man Consequences. Come have a seat, and let's fish for a while.\" [[fw-old-man-consequences]] Ultimate Custom Night brings back the lake and the man, with new words: \"Leave the demon to his demons. Rest your own soul. There is nothing else.\" [[ucn-omc-ending]] After that the player can only sink into the water [[ucn-omc-ending-drowning]].",
      "Who he is, no game says. Whom he addresses in Ultimate Custom Night depends on who sits in its office. If the killer does, the old man is telling someone else to leave him be: the person playing, or the victim who keeps him there. If Michael does, the words are for him. ((ucn)) weighs the two, and a line that named the player would settle both.",
      { kind: "heading", text: "Questions that other chapters weigh" },
      { kind: "table", head: ["The first games", "Where it stands", "See"], rows: [
        ["What was done in November 1987", "The calls give an investigation, a lockout and a suit that \"someone used\" [[fnaf2-call6-yellow-suit]]. The five bodies in one minigame [[fnaf2-save-them]] are read as the earlier five. No record names an act.", "((november-1987))"],
        ["Who the caught man was", "A man was captured the next morning and charged [[fnaf1-news-suspect-captured]]. The killer is free in every later game. The killer released, or the wrong man: the model picks neither.", "((murders))"],
        ["Who bit whom in '87", "The one sentence about the Bite names no machine, no victim and no building [[fnaf1-call1-bite-of-87]].", "((november-1987))"],
        ["Who feeds the children in FNaF3", "Toy Chica gives cupcakes to crying children [[fnaf3-chicas-party]], and the yellow bear carries cake to another [[fnaf3-stage01-cake-crying-child]]. Neither is one of the four machines the children are tied to. Shown, and unexplained.", "((fazbears-fright))"],
        ["Why the company wanted the diner's owner", "On the fifth night of the 1987 week the company wants to reach \"the original restaurant owner\" [[fnaf2-call5-fredbears-family-diner]]; on the sixth, a yellow suit has been used. The calls do not join the two.", "((november-1987))"],
        ["Who opened the sealed room", "The hidden rooms were walled up with their contents inside [[fnaf3-tape6-nothing-taken-out]], yet the killer dies in one. No game shows him getting in.", "((springtrap))"],
        ["Who \"Hen\" is", "A client whom Edwin Murray calls Hen sends a change order for the suits [[secret-of-the-mimic-log-build-to-spec]]. That he is the Cassette Man is noted, and not told: no game gives the Cassette Man a name for it to match.", "((partners))"],
        ["Who made the four mascots", "On the 1979 night incomplete prototypes of the four stand in Murray's workshop [[secret-of-the-mimic-rnd-proto-pizzeria]]. Much later another man calls the haunted machines \"prisons of my making\" [[ffps-insanity-small-souls-prisons]]. No game says whose work they are.", "((springlocks)), ((partners))"],
      ] },
      { kind: "table", head: ["The family", "Where it stands", "See"], rows: [
        ["Where the crying child went", "After the bite he is the last thing to fade from the screen [[fnaf4-night6-fade-order]]. He most likely dies. No later record places him, and the promise made to him is never shown kept. The strongest alternative puts him behind the yellow bear, alone or beside the fifth child.", "((bite)), ((golden))"],
        ["The Afton children's mother", "No game shows, names or mentions her. No parent appears in FNaF4's house at all [[fnaf4-no-parent-shown]].", "((afton-house))"],
        ["The other child's \"Daddy\"", "A child outside the restaurant has been warned by \"My Daddy\" that a Spring Bonnie toy is \"a finger trap\" [[fnaf4-spring-bonnie-plush-finger-trap]]. Whose child this is, the game does not say.", "((bite))"],
        ["Whose suit, on Sister Location's fourth night", "The player wakes inside something that \"came from my old pizzeria\", in Baby's words [[sl-springlock-suit-from-old-pizzeria]]. Asked in 2018 whose it was, Scott declined to answer [[scott-2018-interview-sl-suit-question-unanswered]].", "((michael))"],
        ["The watching post and the year", "The room whose monitors show the house of 1983 belongs to a business dated after a Freddy's closed [[sl-handunit-freddy-fazbear-closing]]. The model cannot make both true, and says so.", "((afton-house)), ((timeline-math))"],
      ] },
      { kind: "table", head: ["The reckoning", "Where it stands", "See"], rows: [
        ["Which FNaF3 ending happened", "Asked in 2018, Scott said only: \"The answer is very interesting. The answer is complex.\" [[scott-2018-interview-fnaf3-ending-unanswered]] The model marks neither ending as the one that happened.", "((fazbears-fright))"],
        ["Where the five are, between the killer's death and the trap", "Not shown. The Cassette Man says that they were robbed \"again\" [[ffps-insanity-trap-again]] and that they cannot rest [[ffps-insanity-tiny-breaths]]. Which machine holds them when he calls is not stated.", "((salvage))"],
        ["Who lit the fire, and whether the volunteer left", "The building burns during the Cassette Man's speech, and nobody is shown lighting it [[ffps-completion-fire]]. The volunteer had a way out, and is told \"you are right where you want to be\" [[ffps-completion-right-where-you-want-to-be]].", "((ffps))"],
        ["Who plays Ultimate Custom Night, and who accuses them", "No line names either [[ucn-protagonist-unnamed-killer]]. In the office: William Afton or his son Michael. Accusing him: the fifth of the five, or FNaF4's crying child. All four readings are live.", "((ucn))"],
        ["What is left of the killer after the fire", "Pizzeria Simulator presents the fire as his end: its speaker sends his \"old friend\" to Hell [[ffps-completion-old-friend-hell]]. Afterwards his image returns in more than one form. The model reads something of the man into one of them, and does not tell the forms as one history.", "((thesis)), ((digital)), ((burntrap))"],
      ] },
      { kind: "table", head: ["The modern games", "Where it stands", "See"], rows: [
        ["Which machine the scanned boards came from", "Asked which board he scanned, a contractor answers only \"Whatever Dan brought me\" [[sd-which-board-unknown]]. No game says, and so no game says whether the rabbit in the code is something the killer left behind or a copier that learned him.", "((digital))"],
        ["Whether the scan came before or after Pizzeria Simulator's fire", "No record places one against the other. The model tells the fire first, as a convention.", "((timeline-math))"],
        ["What Special Delivery's \"vintage Bonnie\" is", "Customers report a foul-smelling old rabbit that is in none of the service's databases [[sd-vintage-bonnie-reports]]. It may be the killer's own rabbit, since that too is an old suit with remains in it [[ffps-scraptrap-alley-remains]]. No email says what it is.", "((digital))"],
        ["Who is on the hidden call", "A woman tells someone unheard, \"I made it myself.\" [[codb-mask-plush-voice]] That she is {{vanessa}} is the model's reading. The game does not name her.", "((vanny))"],
        ["Vanessa's father, Bill", "A therapist asks her, \"Your dad's name was Bill?\" [[security-breach-cd-vanessa-father-bill]] No surname is given, and nothing joins him to William Afton.", "((vanny))"],
        ["Which Security Breach ending stands, and the rooftop page", "No single one. The model reads Vanessa as freed, from one ending [[security-breach-ending-redemption]], and holds that loosely. Another ending's last page shows her alive, in uniform, on the burning roof [[security-breach-rooftop-vanessa-alive]]. That page counts against one woman behind the mask, and the model has no account of it.", "((vanny)), ((pizzaplex))"],
        ["Client 46", "An unnamed therapy patient is shown a still of themselves talking to something with \"rabbit ears\" [[security-breach-cd46-rabbit-ears]]. That the patient is {{gregory}} is possible, and never stated.", "((pizzaplex))"],
        ["Where the staff went, and who wrecked Bonnie", "\"Where is everyone?\", one employee writes [[security-breach-msg-job-security]]. A security log follows Bonnie as far as Monty Golf [[security-breach-msg-missing-bonnie]]. No record says what became of either.", "((pizzaplex))"],
        ["The burnt rabbit under the Pizzaplex: whose remains, who stood it there, what moves it", "The game's files call it Burntrap, a working name that Scott has said now stands. No game says whose remains it is, or who stood it in its station: Freddy says only that he has been there before, and that \"She brought me here\" [[security-breach-freddy-been-here-before]]. The game shows the rabbit itself reaching for a machine: \"He is trying to take control of me\" [[security-breach-freddy-take-control]]. What moves the mass of old parts that sleeps nearby is not said [[security-breach-tangle-composition]].", "((burntrap))"],
        ["The copying endoskeleton: how it came there, and whether it is the rabbit in the code", "Gregory says only that it has \"been trapped down here for a really long time\" [[ruin-gregory-mxes-explanation]]. Nothing shows it between 1979 and that building. The model reads it and the rabbit in the code as two things, at a low grade. Each speaks in a borrowed voice [[hw-glitchtrap-uses-tape-girl-voice]] [[ruin-mimic-reuses-gregory-lines]], which is the best case for one.", "((mimic)), ((digital))"],
        ["Why its guard looks like a rabbit", "A glitching, rabbit-shaped figure hunts {{cassie}} while she wears the mask, and comes out of the M.X.E.S. cabinet [[ruin-the-entity]]. If it is the guard, no game says why it has that shape.", "((mimic))"],
        ["Which endings of RUIN and Secret of the Mimic stand", "RUIN can end with Cassie's elevator falling [[ruin-ending-standard]], and Secret of the Mimic with the machine put to sleep [[secret-of-the-mimic-ending-story-time]]. Each game has other endings, and the model chooses none of them.", "((mimic)), ((two-machines))"],
      ] },
      "Some of this Scott has left open on purpose: two of the entries above rest on answers he declined to give. In a 2024 interview, on record here as a transcript, he said that the burnt rabbit under the Pizzaplex \"was never supposed to move\" and had a purpose he would not state [[scott-2024-interview-burntrap-never-meant-to-move]], and that for Security Breach \"I had a very specific story in mind and it is very different than the one that got in the game\" [[scott-2024-interview-sb-story-not-as-intended]]. He did not say what that story was.",
      { kind: "heading", text: "What would settle the most" },
      { kind: "list", items: [
        "A year printed after 1987, in any game.",
        "A name for whoever sits in Ultimate Custom Night's office.",
        "A statement of which machine the scanned boards came from, or a date for the scan against the fire.",
        "A scene of Murray's endoskeleton between 1979 and the Pizzaplex.",
        "A word from Scott on the retcon, or on which FNaF3 ending happened.",
      ] },
    ],
    changesIf: "Each entry says what would settle it. The chapter itself changes whenever a game answers one.",
    seeAlso: ["thesis", "canon-rules", "timeline-math", "november-1987", "ucn", "burntrap", "mimic"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "ffps-midnight-motorist-jrs", // [stated] JR's: 'you know you can't be here'
      "ffps-midnight-motorist-mound", // [shown] A mound in a hidden clearing
      "ffps-midnight-motorist-find-a-way-in", // [stated] Driver: 'I'll find a way in from outside...'
      "scott-2015-box-best-left-forgotten", // [stated] Box contents 'best left forgotten, forever'
      "scott-2017-adult-theory-teaser", // [stated] An extra teaser was released to dispel 'adult theory'
      "scottgames-site-fnaf4-the-end", // [shown] Post-FNaF4 teaser: 'The End?' / 'Thanks for playing!'
      // colour
      "fnaf3-office-slumped-bear", // [shown] A slumped bear sometimes sits in the FNaF3 office
      "fw-drowning-ending", // [shown] Drowning ending: the player's sprite goes into Old Man Consequences' lake
      "sd-shadowy-remnant-surprise", // [stated] Tutorial Unit warns of 'Shadowy Remnant'
    ],
  },
];
