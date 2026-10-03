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
    answer: "Two things: the games themselves, and Scott Cawthon's own words. The novels, the guidebooks, the films and fan theory fill no gap, even silently. Where Scott has ruled in writing on what counts, as he has for FNaF4's two editions, Sister Location's Custom Night and Help Wanted, the model follows him. Where he has not, it states its own rule and says that it is its own.",
    confidence: "high",
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Before any reconstruction, it is worth settling what counts. In 2015 Scott said the first novel and the games are **separate continuities**, and that the book is not meant to fill in the games' gaps [[scott-2015-books-separate-continuity]] [[scott-2015-book-not-a-guide]]. In 2020 he said future games would look forward and the novels — meaning Fazbear Frights — would fill in some blanks about the past [[scott-2020-novels-fill-blanks]] [[scott-2020-novels-means-fazbear-frights]]. In 2024 he answered the book-canon debate only with an ambiguous \"yes\" [[scott-2024-books-canonicity-yes]]. This archive takes the strict line the brief demands: **games and Scott's own words only**. Every conclusion here therefore stands without the books.",
      "Scott also gave rulings on specific releases. FNaF4's 1.1 update is canon, but the Halloween Edition is not [[scott-2015-fnaf4-halloween-canon-split]]. Sister Location's Custom Night gameplay is not canon, but its **cutscenes are** [[scott-2016-sl-custom-night-not-canon]] [[scott-2016-cutscenes-are-canon]]; that is why Michael's walk home and the Golden Freddy monologue carry full weight here. Help Wanted is canon, and the only real-world thing it brings into the story is an in-universe developer who made games \"based on actual events\"; Scott himself is not part of the lore [[scott-2019-help-wanted-is-canon]] [[scott-2019-not-canon-list]].",
      "Two more rules shape the method. \"If I make a game that contradicts one of your theories\", the theory has to change [[scott-2017-games-over-theories]]. And he admits to mistakes and exactly one real retcon, without saying where [[scott-2017-lore-not-infallible]] [[scott-2017-one-retcon]]. The section on the retcon puts a stake in which one it was. So the model tolerates a small number of true contradictions (listed as counter-evidence) rather than inventing machinery to erase them.",
    ],
    counterEvidence: ["scott-2024-books-canonicity-yes", "scott-2020-novels-fill-blanks"],
    tension: "Scott has not made this archive's rule his own. In 2020 he told readers to \"look to the novels to fill in some of blanks to the past\" [[scott-2020-novels-fill-blanks]], and in a 2024 interview he agreed to the \"canonicity of the books\" [[scott-2024-books-canonicity-yes]]. In 2015 he had written that the books and the games are separate continuities, and that the book is not a guide to the games. The model does not claim that his later words exclude the books. It leaves them out by policy: an account built only from what a player can reach in the games, and from what their author said in his own voice, is one that any reader can check.",
    changesIf: "Nothing in a game would change the policy, which is this archive's own. A written ruling from Scott on Ultimate Custom Night or on Security Breach's base story would replace the model's conventions for those games.",
    seeAlso: ["edges", "timeline-math", "games", "open", "cover-story"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "scott-2015-game-theory-fnaf2-almost-right", // [stated] Game Theory's FNaF2 video 'getting almost everything right'
      "scott-2017-matpat-final-theory", // [stated] Endorsement of Game Theory 'FNAF, The FINAL Theory! pt 2'
      "scott-2015-community-uncovered-fnaf1-3", // [stated] By August 2015 the community had 'found everything' in FNaF1 to FNaF3
      "scott-2015-book-canon-not-puzzle-pieces", // [stated] 'The book is canon, just as the games are', but not two puzzle pieces
      "scott-2017-matpat-answered-some-things", // [stated] 'Some of those things have been… answered(!), by MatPat'
      "scott-2018-frights-some-connected-to-games", // [stated] New book series: stories 'some connected directly to the games, and some not'
      "scott-2019-only-game-developer-existence-canon", // [stated] Only 'the existence of a game developer' is canon, with two hedges
      "scott-2024-interview-placeholder-names-canon", // [stated] 2024: 'Glitchtrap' and 'Burntrap' were placeholder names that became canon
      // support
      "scott-2015-book-reimagining", // [stated] The Silver Eyes is a re-imagining
      "scott-2015-alternate-timeline-comment", // [stated] Book may be set in a different timeline / alternate universe
      "scott-2020-lore-questions-answered", // [stated] Later projects will answer big questions
      "scott-2024-no-new-lore-on-products", // [stated] Licensed products must not create lore (not even an 'EST 1983')
      "scott-2019-fnaf4-photos-no-lore", // [implied] FNaF4 real photos (mountains, snowman, mockingbird) not lore
      "scott-2015-halloween-wont-expand-fnaf4", // [stated] Halloween release would not expand FNaF4
      "scott-2017-misunderstood-not-reveals", // [stated] Those points were misunderstandings, not saved-up reveals
      "scott-2017-tff-annotations-not-lore", // [stated] The Freddy Files' red annotations: remnants of scrapped narrators, not a lore character
      "scott-2015-doors-power-because-game", // [stated] FNaF1 doors use power 'because- game'
      "scott-2015-community-expectations-halloween", // [stated] 'The community's expectations demanded more'
      "scott-2016-silver-eyes-not-100-percent-games", // [stated] The Silver Eyes 'doesn't follow the events of the games 100%'
      "scott-2018-interview-books-extra-stories-not-definitive", // [stated] 2018: the books were 'never intended to be the definitive story'
    ],
  },
  {
    id: "edges", part: "apparatus", title: "At the edge of the story",
    question: "Do FNaF World and Into the Pit count?",
    answer: "In part. FNaF World's adventure is outside the story, but the voice that frames it echoes FNaF4 on purpose, and the model uses it as support and never alone. Into the Pit is read as a ghost story told inside the same world: it corroborates the main games and adds no event. The same rule covers every tale told inside a game.",
    confidence: "medium",
    hero: { image: "fw-clock-ending-pieces-in-place.png", caption: "FNaF World's hidden clock ending: \"The pieces are in place for you.\" [[fw-clock-ending-pieces-in-place]]" },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["fw-crying-child-character", "fw-android-port-clock-ending", "into-the-pit-phone-guy-night3-stuffing", "fw-desk-man-deactivated-my-games"],
    tension: "The frame voice is weaker than it looks. The one figure FNaF World names \"Crying Child\" is the weeping child of the earlier minigames, not FNaF4's boy [[fw-crying-child-character]]; on Android the two lights of the clock ending are replaced by an ordinary enemy [[fw-android-port-clock-ending]]; and the same game's desk scene is plain promotion for the next one [[fw-desk-man-deactivated-my-games]]. So the model lets the voice echo and never lets it carry a fact alone. Into the Pit pushes the other way: its phone calls describe machines that stuff people into suits [[into-the-pit-phone-guy-night3-stuffing]], which reads like the main games' own history and tempts a literal reading. The model keeps it as a story told inside the world because no main-line game refers to its events, and because its dead children number six.",
    changesIf: "A ruling from Scott on FNaF World's frame, or a main-line game that refers to Into the Pit's events.",
    seeAlso: ["canon-rules", "bite", "plush", "golden", "murders", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "into-the-pit-jeffs-pizza-ball-pit", // [shown] Jeff's Pizza's old ball pit leads to the past
      "into-the-pit-past-year-1985", // [shown] A Freddy Fazbear's Pizza logo in the game carries the year 1985
      "into-the-pit-prologue-mci", // [shown] Prologue: panic, then six dead children in a Party Room
      "into-the-pit-rabbit-replaces-dad", // [shown] The yellow rabbit drags Dad into the pit and takes his place
      "into-the-pit-yellow-rabbit-always-come-back", // [stated] The yellow rabbit creature: 'I always come back.'
      "into-the-pit-yellow-rabbit-suffer-like-i-did", // [stated] The yellow rabbit creature: 'I will make you suffer, just like I did.'
      "into-the-pit-sketchbook-chica-smell", // [stated] Technician's sketchbook: 'Why is she starting to smell bad?'
      "scott-2015-story-complete", // [stated] 'The story is complete' – no FNaF 5 (2015)
      "scott-2018-interview-fnaf-world-tied-to-canon-mistake", // [stated] 2018: FNaF World should not have been tied 'in to a canon game'
      // counter
      "ucn-mr-hippo-just-a-story", // [stated] Mr. Hippo: 'Sometimes, a story's just a story'
      // support
      "fw-clock-ending-still-your-friends", // [stated] Clock ending: 'We are still your friends'
      "fw-8bit-fredbear-breadcrumbs", // [stated] 8-bit Fredbear: 'leave breadcrumbs for him'
      "fw-8bit-fredbear-made-for-one-thing", // [stated] 8-bit Fredbear: 'you were made for one thing'
      "fw-desk-man-made-something-terrible", // [stated] Desk Man: 'Her name is Baby.'
      "fw-desk-man-found-dead", // [shown] Desk Man found dead; 'The show will begin momentarily'
      "fw-opening-safe-place-something-went-wrong", // [stated] FNaF World opens with two eyes in the dark: 'something has gone wrong'
      "fw-opening-put-you-back-together", // [stated] FNaF World's first words end: 'I will put you back together.'
      "fw-fredbear-flipside", // [stated] Fredbear: something bad happened 'on the flipside'
      "fw-clock-games-five-tasks", // [shown] The five clock games
      "fw-clock-game-395248", // [shown] Fourth clock game shows 395248, FNaF3's Stage01 code
      "fw-8bit-fredbear-true-goal", // [stated] 8-bit Fredbear: 'Find the clock. Everything else is a deception.'
      "ffps-candy-cadet-five-keys", // [stated] Candy Cadet story: the Five Keys
      "ffps-candy-cadet-five-orphans", // [stated] Candy Cadet story: the Five Orphans
      "ffps-candy-cadet-five-kittens", // [stated] Candy Cadet story: the Five Kittens
      "ucn-toy-chica-hsy-premise", // [stated] Toy Chica: The High School Years – a new 'crush' every episode
      "ucn-toy-chica-hsy-dog-lure", // [stated] Toy Chica cartoon: 'someone ran over his dog in front of my house'
      "ucn-toy-chica-hsy-find-a-window", // [stated] Toy Chica cartoon: 'if he doesn't open the door, I'll just find a window'
      "ucn-toy-chica-hsy-bag-and-finale", // [shown] Toy Chica cartoon: the backpack of parts, and 'tomorrow is another day'
      "ucn-bear-of-vengeance-premise", // [stated] The samurai cartoon: the Bear's revenge on the Fox always fails
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
      "scott-2024-interview-into-the-pit-began-as-novelty", // [stated] 2024: the Into the Pit game 'was still just supposed to be a novelty'
      // colour
      "fw-8bit-fredbear-something-terrible", // [stated] 8-bit Fredbear (Update 2): 'Something terrible is coming.'
      "fw-desk-man-pendulum", // [stated] Desk Man: 'The pendulum swings…'
      "fw-desk-man-first-dialogue", // [stated] The man at the desk, first version: 'It wasn't supposed to be like this.'
      "fw-update2-fredbear-he-has-gone-insane", // [stated] Update 2 Fredbear: 'he... has gone insane'
      "ucn-candy-cadet-fragments", // [stated] Candy Cadet's ghostly fragments of his FFPS stories
      "ucn-mr-hippo-duck-feeder", // [stated] Mr. Hippo: a man and his son killing the ducks with sourdough
      "ucn-bear-of-vengeance-consequence", // [stated] The samurai cartoon: each failure brings a 'consequence'
      "hw2-candy-cadet-family-story", // [stated] Candy Cadet: the family that missed the offer
      "into-the-pit-golden-freddy-suit-hide", // [shown] Oswald hides in an empty Golden Freddy suit; the rabbit inspects it
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
      // other
      "fw-normal-ending-still-in-control", // [stated] Normal ending: 'an imaginary monster in an imaginary game'
    ],
  },
  {
    id: "timeline-math", part: "apparatus", title: "Dating the story",
    question: "Which dates are actually printed, and how is everything else placed?",
    answer: "Few are printed: Murray's paperwork from 1965 to 1977, a work order of 7 September 1979, the year 1983 on a television, a June 26th with no year, and two cheques of November 1987. No game prints a year after 1987. Everything else is placed by order and by stated intervals such as \"thirty years\", and each date in the model says which kind of support it has.",
    confidence: "medium",
    hero: { image: "fnaf2-paycheck-1987.jpg", caption: "FNaF2's Night 5 cheque, dated 11-12-1987: the one full date the first games print [[fnaf2-paycheck-1987]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Only a few years are printed: <<1983|printed|fnaf4-fredbear-and-friends-1983|Printed in the title of the TV broadcast in FNaF4's minigames.>> on FNaF4's TV [[fnaf4-fredbear-and-friends-1983]], <<11-12-1987|printed|fnaf2-paycheck-1987|Printed on Jeremy Fitzgerald's Night 5 check.>> and <<11-13-1987|printed|fnaf2-overtime-robots-scrapped|Printed on the Night 6 overtime check.>> on FNaF2's cheques, and <<Nov 2019 – Mar 2020|printed|sd-ness-blood-eagle-calendar,sd-circuit-board-does-what-we-tell-it|Printed on Special Delivery's in-game emails.>> on Special Delivery's emails. Beyond these, every date is derived or estimated, and the timeline says which. Undated events are placed by their relationships to dated ones, and that position is a convention, not a claim about the year.",
      "FNaF1 comes <<after '87|derived|fnaf1-call1-bite-of-87,fnaf1-paycheck-night5|The Bite of 87 is in the past; the check year is printed as xx.>>, since the Bite of '87 is in the past; its cheques blank the year as \"xx\" [[fnaf1-paycheck-night5]]. FNaF3 is set <<thirty years|printed|scott-fnaf3-steam-description,fnaf3-coming-soon-newspaper|The interval is stated; which closure starts it is not.>> after \"Freddy Fazbear's Pizza\" closed, without saying which closure [[scott-fnaf3-steam-description]].",
      "There are two ways to read the rest. **Compressed**: FNaF1 soon after 1987, FNaF3 about thirty years later (<<c. 2017–2019|estimated|scott-fnaf3-steam-description,sd-springtrap-did-not-save-the-others|Compressed reading: closure c. 1988 plus thirty years, before Special Delivery's Springtrap returns in 2019–2020.>>). Special Delivery's Springtrap saying he is \"back\" in 2019–2020 [[sd-springtrap-did-not-save-the-others]] is consistent with this, though an AR Springtrap does not prove the original was found by then. **Extended**: take Phone Guy's \"twenty years\" of songs literally [[fnaf1-call1-twenty-years]], which puts FNaF1 in the 2000s. But the diner was the *original* restaurant and was running in 1983 [[fnaf2-call5-fredbears-family-diner]], and FNaF3 would then fall after 2020. This archive uses the compressed reading as a working convention and treats \"twenty years\" as a joke, which is how the line is delivered. Neither reading is forced. The Mimic's teaser shows <<1979|teaser|secret-of-the-mimic-teaser-1979|Shown only in the announcement teaser; the game itself prints no year.>> [[secret-of-the-mimic-teaser-1979]], but the game itself dates nothing.",
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "fnaf2-call1-summer-job", "scott-2014-fnaf1-store-summer-job", "fnaf4-toy-collection-girl"],
    tension: "Read literally, \"twenty years\" [[fnaf1-call1-twenty-years]] would put the first game near 2000; the model treats the line as loose talk, which is how it is delivered. FNaF2 contradicts its own cheques with a first call that says \"summer job\" [[fnaf2-call1-summer-job]], and Scott's store text for FNaF1 says the same [[scott-2014-fnaf1-store-summer-job]]; the model follows the printed dates. And in the week whose only year is 1983, a girl has toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]]. None of these moves a printed date. Together they are the reason the model prints so few.",
    changesIf: "Any game that prints a year after 1987, or a year on the last restaurant's cheques.",
    seeAlso: ["canon-rules", "games", "november-1987", "fnaf1-restaurant", "two-machines", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // support
      "codb-fallfest-83-banner", // [stated] Halloween hub stage banner: 'FALLFEST 83''
      "codb-fnaf4-house-on-hill", // [shown] FNaF4's house on the hill in the background
      "hw2-puppet-master-1983", // [shown] Puppet Master keypad: 1983 → Puppet memory
      "hw2-fall-fest-1970-poster", // [stated] A 'FALL FEST' poster dated 1970
      // colour
      "hw-pizza-party-coming-soon-construction", // [shown] Hidden exit: a building under construction and a 'Coming soon' sign
    ],
  },
  {
    id: "games", part: "apparatus", title: "What each game adds",
    question: "Where does each game fit?",
    answer: "Every release has a place. Most were made to answer the one before, which is why a later game is the authority on what an earlier one left unclear. This chapter is a table: each game, when it is set, what it adds to the story, and the chapters that argue it.",
    confidence: "high",
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["scott-2015-story-complete"],
    tension: "Scott declared the story \"complete\" in 2015, before most of these games existed [[scott-2015-story-complete]]. The table is therefore not a plan carried out. It is a record of a story that was extended and repaired in public, and the model reads the later repairs as the author's own corrections, which is what he has said they were.",
    changesIf: "A new game. Each release so far has changed how at least one earlier game is read.",
    seeAlso: ["canon-rules", "timeline-math", "thesis", "edges", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "scott-2018-interview-each-game-fixed-the-last", // [stated] 2018: each game answered what he was unhappy with in the one before
      // support
      "scott-2015-fnaf4-store-last-chapter", // [stated] FNaF4 Steam description: 'last chapter of the ... original story'
      "scottgames-site-fnaf4-final-chapter", // [shown] FNaF4 teaser: 'THE FINAL CHAPTER' 10.31.15 (hidden 'NIGHTMARE')
      "scott-2017-fnaf6-existed-to-clear-things-up", // [stated] The next game 'was really only existing to clear up things'
      "scott-2018-interview-first-game-snippet-of-larger-story", // [stated] 2018: FNaF1's story was 'a small snippet of a larger story', not a full plan
    ],
  },
  {
    id: "open", part: "apparatus", title: "What stays open",
    question: "What does the evidence not settle?",
    answer: "A good deal, and the model says so. Where Scott's one retcon lies; what the dark bear and the dark rabbit are; who drives in Midnight Motorist; what is in the locked box; who Old Man Consequences is; which endings stand; where the crying child went. Each entry gives what the records show, the readings on offer, and what would settle it.",
    confidence: "low",
    hero: { image: "fnaf4-locked-box-ending.jpg", caption: "FNaF4's last screen: a locked box, and \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]]" },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "**Mike Schmidt vs. Michael Afton.** They share a first name and nothing else in the games [[fnaf1-paycheck-night5]]. The model allows it but never relies on it.",
      "**Which child is in which animatronic.** There are four names [[ffps-lorekeeper-gravestones]] and five masks [[fnaf3-happiest-day]], but the games never pair them.",
      "**The bodies in Save Them.** They could be new victims in 1987 or the earlier five [[fnaf2-save-them]].",
      "**Burntrap.** It could be Afton's body or the Mimic in a suit [[security-breach-burntrap-appearance]] [[ruin-ending-scooper]].",
      "**What is in FNaF4's box.** Settled as far as it can be: in 2015 it held \"the pieces put together\", FNaF4's own story assembled [[scott-2015-fnaf4-box-pieces-put-together]]. Its meaning changed, and Scott never pursued the plan [[scott-2018-box-meaning-changed]] [[scott-2024-box-interview]]. See The Box page.",
      "**Gregory's origin.** He has no record anywhere [[security-breach-vanessa-no-record]]. A therapy client seen talking to something with rabbit ears [[security-breach-cd46-rabbit-ears]] is suggestive, but that client is never named.",
      "**Old Man Consequences.** He sits by the same lake in FNaF World and UCN [[fw-old-man-consequences]] [[ucn-omc-ending]], and nothing says who he is.",
    ],
    changesIf: "Each entry says what would settle it. The chapter itself changes whenever a game answers one.",
    seeAlso: ["thesis", "canon-rules", "timeline-math", "november-1987", "ucn", "burntrap", "mimic"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf2-shadow-freddy", // [shown] Shadow Freddy in Parts/Service
      "ffps-midnight-motorist-secret-drive", // [shown] Midnight Motorist secret: a rainy night drive in a purple car
      "ffps-midnight-motorist-closed-door", // [stated] Driver: 'I told you not to close your door.'
      "ffps-midnight-motorist-ran-off", // [stated] Broken window: 'Ran off to that place again.'
      "scott-2017-one-retcon", // [stated] Exactly one actual retcon in the series
      "scott-2017-retcon-seamless", // [stated] The one retcon was seamless and went unnoticed
      "scott-2017-clarification-is-not-retcon", // [stated] Clarifying a misread intention in the next game is 'not really a retcon'
      "scott-2017-story-developed-new-details", // [stated] The story 'developed new details over time' that were not planned from the start
      // support
      "fnaf2-shadow-bonnie-office", // [shown] Shadow Bonnie (RWQFSFASXC) in the office
      "fnaf3-shadow-bonnie-minigame", // [shown] Shadow Bonnie (RWQFSFASXC) glitch minigame
      "ffps-midnight-motorist-jrs", // [stated] JR's: 'you know you can't be here'
      "ffps-midnight-motorist-mound", // [shown] A mound in a hidden clearing
      "ffps-midnight-motorist-grey-person", // [stated] Grey person: 'Leave him alone tonight. He had a rough day.'
      "ffps-midnight-motorist-find-a-way-in", // [stated] Driver: 'I'll find a way in from outside...'
      "scott-2015-box-best-left-forgotten", // [stated] Box contents 'best left forgotten, forever'
      "scott-2017-adult-theory-teaser", // [stated] An extra teaser was released to dispel 'adult theory'
      "scottgames-site-fnaf4-the-end", // [shown] Post-FNaF4 teaser: 'The End?' / 'Thanks for playing!'
      "scott-2015-considered-opening-box", // [stated] Opening the box was one of the Halloween options
      "scott-2018-interview-sl-suit-question-unanswered", // [stated] 2018: whose suit on Sister Location's Night 4? Not answered
      // colour
      "fnaf3-office-slumped-bear", // [shown] A slumped bear sometimes sits in the FNaF3 office
      "fw-drowning-ending", // [shown] Drowning ending: the player's sprite goes into Old Man Consequences' lake
      "sd-shadowy-remnant-surprise", // [stated] Tutorial Unit warns of 'Shadowy Remnant'
    ],
  },
];
