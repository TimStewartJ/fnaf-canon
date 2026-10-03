import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 2: The makers (1965 to 1979).
 * A family costume firm, the two machines its owner built for his son, and two names in its paperwork: Hen and W.A.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "springlocks", part: "makers", title: "Suits that are also machines",
    question: "Who built the springlock suits, and what are they?",
    answer: "Murray's Costume Manor, a family costume firm under contract to Fazbear Entertainment, was building springlock suits \"for the diner\" before 1979. A springlock suit is a costume and an animatronic at once, and every restaurant that used them was built with one room that no camera or machine could see.",
    confidence: "high",
    hero: { image: "fnaf3-stage01.png", caption: "FNaF3's hidden \"Stage01\": the yellow bear and the yellow rabbit, the two springlock suits, on a stage with children [[fnaf3-stage01-fredbear-spring-bonnie]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["secret-of-the-mimic-ad-chicas-party-world", "fnaf3-tapes-freddy-fazbears-pizza"],
    tension: "Secret of the Mimic never names \"the diner\", and the same game has another client restaurant, Chica's Party World [[secret-of-the-mimic-ad-chicas-party-world]]. The model takes the diner as Fredbear's because that name is printed on a poster in Murray's building, with a yellow rabbit on it, and no other diner is. The training tapes that describe the suits are recorded for Freddy Fazbear's Pizza, not for a diner [[fnaf3-tapes-freddy-fazbears-pizza]]: they show the suits still in use at the later chain, and say nothing about who first ordered them.",
    changesIf: "A game that names the diner in Murray's letters, or shows springlock suits made by someone other than Murray's firm.",
    seeAlso: ["partners", "two-machines", "murders", "springtrap", "patterns"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf3-tape2-dual-suits", // [stated] Training tape: two suits that are both animatronic and suit
      "fnaf3-tape3-springlock-bleeding", // [stated] Springlock warnings
      "fnaf3-tape3-safe-room", // [stated] Hidden safe room at every location
      "fnaf3-tape4-sister-location-springlock-failures", // [stated] Multiple springlock failures at 'the sister location'
      "secret-of-the-mimic-log-creepy", // [stated] Client changes Fiona's approved animatronic designs to 'creepy' ones
      "secret-of-the-mimic-mail-springlocks-hen", // [stated] New springlocks for 'the diner'; warn Hen of odd behaviors
      "secret-of-the-mimic-rnd-proto-pizzeria", // [shown] A hidden R&D area laid out like a pizzeria with 'Proto' classic animatronics
      "secret-of-the-mimic-dispatch-contractor-murray", // [stated] Dispatch: Edwin Murray was a Fazbear contractor 'developing some tech for us'
      "secret-of-the-mimic-dispatch-contract-legally-ours", // [stated] Dispatch: under his contract, Murray's work 'is now legally ours'
      "secret-of-the-mimic-mcm-order-forms-1973-1977", // [stated] MCM order forms run from 5/4/73 to a pickup on 04/24/1977
      "secret-of-the-mimic-fredbears-diner-poster", // [shown] Poster in the game: 'JOIN US AT... FREDBEAR'S FAMILY DINER' with a yellow rabbit
      // support
      "fnaf3-tape2-sound-cues", // [stated] The springlock suits walk toward sound, to stay where the children are
      "fnaf3-tape2-crank-from-manufacturer", // [stated] The suits' hand crank is 'provided by the manufacturer'
      "fnaf3-tape3-bleeding-out", // [stated] A loosened springlock means 'bleeding out'
      "secret-of-the-mimic-log-meet-up", // [stated] Edwin meets Fiona; the 'helpful' recorder system
      "secret-of-the-mimic-log-inheritance", // [stated] Edwin inherits the company after his father's death
      "secret-of-the-mimic-mail-chicas-party-world", // [stated] MCM designed Chica for 'Chica's Party World'
      "secret-of-the-mimic-work-order-retrieve-assets", // [stated] Second work order: 'Retreive Fazbear Ent. assets' from Murray's Costume Manor
      "secret-of-the-mimic-edwin-pc-alt-fazbear-designs", // [stated] Edwin's computer menu: 'ALT FAZBEAR DESIGNS' and 'PUPPET DESIGNS'
      "secret-of-the-mimic-mcm-memo-1974", // [stated] MCM memo dated 04/23/1974: 'another accident could put us further behind schedule'
      "secret-of-the-mimic-mcm-rnd-floor-opening-memo", // [stated] MCM memo: a party on July 21 opened the 'new Research and Developent Floor'
      "secret-of-the-mimic-mcm-net-earnings-1965-1975", // [shown] Chart: 'Murray's Costume Manor Net Earnings 1965 - 1975'
      "secret-of-the-mimic-story-time-animal-band", // [stated] The bedtime story: a bear, a pirate fox, a chicken, a bunny, a gator and a puppy 'started a band'
      "secret-of-the-mimic-mockup-pizzeria-layout", // [shown] The R&D mock-up has a stage, a pirate cove, an office and a hidden back room
      "secret-of-the-mimic-film-green-pirate-gift", // [stated] Birthday film: Fiona's handmade gift, which Edwin voices as a pirate
      // colour
      "fnaf3-spring-bonnie-posters", // [shown] Rare Spring Bonnie posters
      "secret-of-the-mimic-mail-ralph-suit", // [stated] 'Ralph went to the hospital... That suit is going to be the death of one of us'
    ],
  },
  {
    id: "two-machines", part: "makers", title: "The babysitter and its copy",
    question: "Where does the Mimic come from?",
    answer: "From a father's workshop. Edwin Murray built one machine to mind his son, and it took his dead wife's voice. After the boy died he built a second from a copy of its program, lost his temper with it, and it learned that too. On 7 September 1979 Fazbear Entertainment sent a technician to fetch the design.",
    confidence: "high",
    hero: { image: "sotm-m1-birthday-cake-film-reel.jpg", caption: "A reel of home film from Murray's house: the first endoskeleton, M1, brings David his birthday cake [[secret-of-the-mimic-film-m1-birthday-cake]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["secret-of-the-mimic-dispatch-briefing-origin"],
    tension: "The briefing the technician is given describes a single endoskeleton, built to keep Murray's son entertained, that copied the violence it was exposed to [[secret-of-the-mimic-dispatch-briefing-origin]]. The model follows Murray's own recordings and M1's message instead, which separate the babysitter from its copy and say whose violence it was. The briefing is spoken in the dispatcher's voice by M1 itself, which has its own reasons to leave M1 out.",
    changesIf: "A game that shows what happened to David Murray, or that shows the endoskeleton between 1979 and the Pizzaplex.",
    seeAlso: ["springlocks", "partners", "mimic", "patterns", "timeline-math"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "secret-of-the-mimic-log-death", // [stated] Fiona dies; Edwin must raise David alone
      "secret-of-the-mimic-log-training-m1", // [stated] Edwin introduces M1 to David as a babysitter
      "secret-of-the-mimic-log-make-a-copy", // [stated] A leak: 'Someone told them about M2'
      "secret-of-the-mimic-log-turn-around", // [stated] M2 mocks the injured Edwin in his own voice
      "secret-of-the-mimic-mail-received-5-min-ago", // [stated] M1's message: 'M2 began as a copy of my program'
      "secret-of-the-mimic-mail-foreclosure", // [stated] Front-gate mail: foreclosure notice, mailbox full
      "secret-of-the-mimic-mail-party-canceled", // [implied] David's party canceled 'due to the recent tragic events' (Dec 6th)
      "secret-of-the-mimic-previous-technicians", // [stated] Earlier technicians died; M2 stuffs victims in suits
      "secret-of-the-mimic-f10n4-reveal", // [stated] F10-N4: the 'Dispatch' voice was a Fiona-like AI
      "secret-of-the-mimic-ending-clock-out", // [shown] Walk Away (Clock Out): Arnold stuffed in the Fredbear springlock suit
      "secret-of-the-mimic-ending-unfinished-business", // [shown] Framed (Unfinished Business): Cradle.EXE, fire, and the Mimic takes the Data Diver
      "secret-of-the-mimic-ending-story-time", // [shown] Redeemed (Story Time): the Mimic rebooted as 'David'
      "secret-of-the-mimic-work-order-1979", // [stated] Fazbear work order in Arnold's van, dated 9/07/79
      "secret-of-the-mimic-dispatch-endoskeleton-any-costume", // [stated] Dispatch: an endoskeleton that adapts to any costume and takes on its persona
      "secret-of-the-mimic-clock-out-real-dispatch", // [stated] Clock Out: the real Dispatch says Fazbear could not reach Arnold all night
      "secret-of-the-mimic-log-try-again-build-another", // [stated] M1 as Fiona: 'You need to try again. Build another.'
      "secret-of-the-mimic-log-turn-around-lost-temper", // [stated] Edwin to M2: 'I... lost my temper. I was always going to fix you'
      "secret-of-the-mimic-film-yellow-playground", // [stated] Last birthday film: 'I left him out at the playground'
      // support
      "secret-of-the-mimic-log-installation-worries", // [stated] Fiona leaves to help the Fall Fest installation
      "secret-of-the-mimic-log-playground", // [stated] David's playground by the loading dock
      "secret-of-the-mimic-log-m1-as-fiona", // [stated] M1 speaks as Fiona and wants secrecy
      "secret-of-the-mimic-log-refusal", // [stated] Edwin refuses to build a replacement son
      "secret-of-the-mimic-log-incident", // [stated] 'You're not him! Stop sounding like him!'
      "secret-of-the-mimic-mail-david-party", // [stated] Secret birthday party for David planned (Dec 1st)
      "secret-of-the-mimic-mail-heard-fiona", // [stated] Employee hears Fiona's voice through an R&D vent
      "secret-of-the-mimic-mail-mushmen-return", // [stated] Return letter: the music toy imitated everything
      "secret-of-the-mimic-mail-something-below", // [implied] 'There's something below us' trapped behind the carousel
      "secret-of-the-mimic-arnold-assignment", // [stated] Arnold, a Fazbear Entertainment technician, is sent to retrieve company property
      "secret-of-the-mimic-f10n4-miss-my-child", // [stated] F10-N4: 'I watched him grow up, through this machine'
      "secret-of-the-mimic-film-mommy-gone", // [stated] Birthday film: 'David, Mommy's gone...'
      "secret-of-the-mimic-mimic-blueprint-acronym", // [stated] Blueprint labels the endo 'M.I.M.I.C.'
      "secret-of-the-mimic-teaser-1979", // [shown] Teaser trailer ends on the year '1979'
      "secret-of-the-mimic-credential-form-1979", // [stated] Arnold's Fazbear credential form: expiration year 1979
      "secret-of-the-mimic-dispatch-retrieve-schematic", // [stated] Dispatch: Fazbear wants Murray's schematic, and the endoskeleton too
      "secret-of-the-mimic-f10n4-fazbear-will-send-another", // [stated] F10-N4: 'Fazbear will send another'
      "secret-of-the-mimic-f10n4-suit-cannot-see", // [stated] F10-N4: the endoskeleton 'can not see you in that suit'
      "secret-of-the-mimic-mail-technicians-attacked", // [stated] Messages from trapped intruders: 'A maniac in a costume chasing me'
      "secret-of-the-mimic-white-tiger-first-birthday", // [stated] The White Tiger doll was David's first birthday present
      "secret-of-the-mimic-log-power-surges-tunnels", // [stated] Edwin: power surges, and 'extreme caution' in the tunnels
      "secret-of-the-mimic-mail-old-elevator-below", // [stated] Staff message: an elevator that has not worked 'in so long' Murray may not know what is down there
      // colour
      "secret-of-the-mimic-mail-sad", // [stated] 'Edwin, are we losing our home?'
      "secret-of-the-mimic-film-david-two", // [stated] Birthday film: David turns two; Edwin misses the party
      "secret-of-the-mimic-stay-up-latte", // [stated] MCM ad: 'I am always watching. Watching and learning.'
      "secret-of-the-mimic-ad-clean-o-vac-adjusts-size", // [stated] Commercial: the Clean-O-Vac can 'adjust its size' and be 'a friend for life'
    ],
  },
  {
    id: "partners", part: "makers", title: "Hen and W.A.",
    question: "Who are the \"Hen\" and \"W.A.\" of Murray's letters?",
    answer: "Two clients of Murray's workshop. \"Hen\" sends the change orders for the springlock suits; \"W.A.\" buys up Murray's work and hires away his staff. W.A. is most likely William Afton. The model reads Hen as the Cassette Man, less firmly. That those two men were close does not rest on initials: decades later the Cassette Man calls the killer \"old friend\" and says he \"unwillingly helped to create\" him.",
    confidence: "medium",
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "The oldest layer is Secret of the Mimic. Edwin Murray's company builds suits and springlocks [[secret-of-the-mimic-log-build-to-spec]]. A batch of springlocks is readied \"for the diner\", with a warning to someone named **Hen** about their \"odd behaviors\" [[secret-of-the-mimic-mail-springlocks-hen]]. Letters signed **W.A.** claim Murray's land and catalogue and offer his staff jobs managing \"new franchise locations\" [[secret-of-the-mimic-mail-confidential-wa]] [[secret-of-the-mimic-mail-staff-contacts-wa]].",
      "Later games describe a matching pair. The Cassette Man built the machines the children are trapped in (\"prisons of my making\") [[ffps-insanity-small-souls-prisons]] and \"unwillingly\" helped create a monster [[ffps-insanity-monster-helped-create]], whom he calls \"old friend\" [[ffps-completion-old-friend-hell]]. The other half is a designer addressed as **Mr. Afton** [[sl-intro-mr-afton-board]]. This archive therefore *proposes* that W.A. is William Afton and Hen is the Cassette Man. Nothing in any game makes that connection. It rests on initials, a shortened name and matching roles, and it stays at theory level.",
      "Two supporting details are weaker than they look. Into the Pit's \"two men inside of a strange office\" photograph names no one [[into-the-pit-strange-photo]]. The \"HRY223\" tape label is reported rather than verified on screen. What *is* solid is that the springlock suits \"double as both animatronic and suit\" [[fnaf3-tape2-dual-suits]], which is what makes a killer in a mascot possible.",
    ],
    counterEvidence: ["into-the-pit-strange-photo", "ffps-credits-cassette-man"],
    tension: "No game writes either name out. The one picture of \"two men in a strange office\" is an item in Into the Pit [[into-the-pit-strange-photo]], a story told inside the world, and it names nobody. The game that gives the Cassette Man his voice gives him no name at all [[ffps-credits-cassette-man]]. So the model keeps two claims apart: that the killer had an old friend who built the machines is the Cassette Man's own statement; that this friend is \"Hen\" is a reading of three letters.",
    changesIf: "A game that prints either name in full, or shows a second person with the initials W.A.",
    seeAlso: ["springlocks", "two-machines", "killer", "ffps", "funtimes"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "secret-of-the-mimic-log-friends", // [stated] Edwin: 'They don't think of me as a friend anymore'
      // support
      "secret-of-the-mimic-mail-we-need-to-go", // [stated] Employees defect with Fiona's patterns and 'restaurant project' knowledge
      "secret-of-the-mimic-log-trust-no-one", // [stated] Edwin to himself: 'They're behind it. Don't trust them.'
      "secret-of-the-mimic-log-announcement-traitors", // [stated] Edwin: 'Attention traitors... You stole my work.'
      "secret-of-the-mimic-mail-moving-on-poached", // [stated] Staff message: hired after one interview, with a bonus for bringing more Murray employees
      "secret-of-the-mimic-mail-group-chat-turning-down-work", // [stated] Staff message: Edwin turns down work and 'just sits in his office talking to that thing'
      "secret-of-the-mimic-mail-wa-far-behind", // [stated] 'WA' letter: the offer is fair 'considering how far behind you are'
    ],
  },
];
