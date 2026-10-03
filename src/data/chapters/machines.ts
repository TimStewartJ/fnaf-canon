import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 6: The machines (Undated).
 * What Afton built under his own name: machines made to take children, a substance he fed them, and what they did to his son. The games give none of it a date. Its place in the order is the model's convention.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "funtimes", part: "machines", title: "Afton Robotics",
    question: "What were the Funtime animatronics built for?",
    answer: "To take children. Their blueprints, each marked Afton Robotics, list the features: \"Parental Tracking\", \"Voice Mimic/ Luring\", \"Storage Tank\". The one child the games show these machines take is their maker's own daughter.",
    confidence: "high",
    hero: { image: "sl-blueprint-funtime-freddy.jpg", caption: "A rare screen in Sister Location: Funtime Freddy's blueprint, with \"Parental Tracking\", \"Voice Mimic/ Luring\" and \"Storage Tank\" among its labels [[sl-blueprint-funtime-freddy]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "A board member presses Mr. Afton on Circus Baby's \"design choices\", and he lists her features, including ice cream [[sl-intro-mr-afton-board]]. The Baby minigame shows ice cream used to draw a lone child close before a claw extends [[sl-baby-minigame-girl-grabbed]], and blueprints of every Funtime flash on screen [[sl-blueprint-screens]]. Scott's hidden teaser report says Circus Baby's Pizza World was cancelled over \"gas leaks\", only a handful of kids ever saw inside, and the equipment left under tarps at night [[scottgames-site-sl-news-gas-leak-cancellation]] [[scottgames-site-sl-news-kids-tested]] [[scottgames-site-sl-news-equipment-removed]].",
      "The first child taken is his own daughter. She begs to play with Baby [[sl-girl-daddy-let-me-play]], and Baby recalls that when one little girl was alone she \"was no longer myself\" [[sl-baby-ice-cream-story]]. From then on Baby speaks with a child's agenda: she learns to pretend [[sl-baby-how-to-pretend]] and says something bad is inside her [[sl-baby-something-bad-inside]]. As Scrap Baby, the Cassette Man calls her Elizabeth [[ffps-completion-connection-terminated-elizabeth]]. The girl's voice says \"I know it was an accident\" [[sl-fake-ending-girl-voice]].",
      "The Afton Robotics blueprint shows the technology directly: an excavating arm, a **Remnant Injector** and a **Remnant Reservoir** [[ffps-scup-blueprint]]. Its companion blueprints are a bear built to lure and extract [[ffps-lefte-blueprint]] and a unit that holds a heat reading at 98.6 [[ffps-rasc-blueprint]].",
    ],
    counterEvidence: ["sl-fake-ending-girl-voice"],
    tension: "No child other than the daughter is shown taken by these machines, and her death was something her father had tried to prevent: he kept her away from Baby, and a voice like hers later says \"I know it was an accident\" [[sl-fake-ending-girl-voice]]. That does not make the designs innocent. The labels are \"Luring\" and \"Deter & Misdirect\", and Baby's own account is of a machine doing what it was built to do when a child was alone. It does mean the model claims no second victim.",
    changesIf: "A second victim of these machines, or a dated record for Circus Baby's Pizza World.",
    seeAlso: ["killer", "michael", "remnant", "salvage", "afton-house", "timeline-math"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "sl-handunit-freddy-fazbear-closing", // [stated] HandUnit: after Freddy Fazbear's Pizza closed
      "sl-extras-map-entertainment-and-rental", // [stated] Extras map: 'Circus Baby's Entertainment & Rental', copyright Afton Robotics LLC
      "sl-blueprint-funtime-foxy", // [stated] Blueprint: Funtime Foxy, 'Parental Voice Sync & Replay', 'Variable Scent Release'
      "sl-handunit-rented-for-private-parties", // [stated] HandUnit: the robots are rented out for private parties by day
      "sl-baby-on-stage-one-day", // [stated] Baby: 'I was on stage once... only one day'
      "scottgames-site-sl-source-bright-future-circus-baby", // [stated] Sister Location page source: 'a bright future for Circus Baby… at a neighborhood party near you'
      // support
      "sl-girl-where-did-other-children-go", // [stated] Girl: 'Where did the other children go?'
      "sl-springlock-suit-from-old-pizzeria", // [stated] Suit 'from my old pizzeria' — too dangerous
      "sl-blueprint-circus-baby", // [stated] Blueprint: Circus Baby (7.2 ft, 585 lbs), internal ice cream dispenser
      "sl-blueprint-ballora", // [stated] Blueprint: Ballora, 'Deter & Misdirect... see: Circus Baby dir07'
      "sl-elevator-underground-facility", // [shown] Every night begins with an elevator ride down
      "scott-2016-sl-store-text", // [stated] Sister Location Steam description: Circus Baby's Pizza World ad and technician job
      "scottgames-site-sl-never-just-one", // [shown] Sister Location teaser: 'There was never just one.'
      "scottgames-site-sl-cancelled-teaser", // [shown] SL teaser: 'CANCELLED – Due to leaks.' (surface text)
      "scottgames-site-sl-news-entrepreneur", // [stated] Hidden news: a local entrepreneur financed the Pizza World
      "scottgames-site-sl-source-rental-schedule", // [stated] Sister Location page source: a weekly booking schedule for five animatronics
      "scottgames-site-sl-source-client-directory", // [stated] Sister Location page source: client directory of birthday bookings
      "scottgames-site-sl-source-service-log-afton-robotics", // [stated] Sister Location page source names 'AftnROBTCS' as maintainer
    ],
  },
  {
    id: "remnant", part: "machines", title: "Remnant",
    question: "What is Remnant?",
    answer: "The games say very little: it is a substance on an Afton Robotics blueprint, kept in a heated tank and injected in traces by a machine named for the \"scalable creation of ulterior presence\", with a note that overheating \"might neutralize the effects permanently\". The model reads it as Afton's name for what the dead leave in the machines, and as his attempt to make on purpose what first happened by accident.",
    confidence: "low",
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model’s ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["sd-tutorial-remnant-collection"],
    tension: "Nothing in any game states a link between the substance and the dead, and the tape that speaks of small souls names no machine. The only other use of the word is a collectible in Special Delivery that \"is used to power up your animatronics\" [[sd-tutorial-remnant-collection]], which treats it as a resource and explains nothing. The model's reading rests on the machine's own name and on the company the sheet keeps: it is shown while the Cassette Man speaks of what was done to the children. That is thin, which is why the chapter is rated low and why no other chapter builds on it.",
    changesIf: "A game that defines the word.",
    seeAlso: ["funtimes", "michael", "springtrap", "salvage", "ffps", "golden"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "ffps-scup-blueprint", // [stated] SCUP blueprint (Afton Robotics): Remnant injector and reservoir
      "ffps-insanity-tiny-breaths", // [stated] Insanity tape: the speaker doesn't know how the souls got into the machines
      "ffps-scup-overheating-neutralize", // [stated] SCUP blueprint: overheating 'might neutralize the effects permanently'
      "ffps-scup-remnant-reservoir-notes", // [stated] SCUP blueprint: Remnant is a substance, kept heated and malleable
    ],
  },
  {
    id: "michael", part: "machines", title: "The son who should be dead",
    question: "What happened to Michael Afton?",
    answer: "His father sent him underground to find his sister. The machines there scooped him hollow and walked out wearing him. His body rotted, threw them up into a sewer, and got back up. He is most likely FNaF4's older brother and, later, the manager of Pizzeria Simulator's pizzeria.",
    confidence: "high",
    hero: { image: "sl-golden-freddy-cutscene-fazbears-fright.png", caption: "Sister Location's last cutscene: the burnt shell of Fazbear's Fright, and a figure with rabbit's ears at the right [[sl-golden-freddy-cutscene-springtrap]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "In Sister Location, Michael follows instructions into his father's own facility. HandUnit's autocorrect names him \"Eggs Benedict\" [[sl-eggs-benedict]]. Baby guides him to the scooping room, where the Funtimes' combined mass takes his body because \"if we looked like you\" they could leave [[sl-real-ending-if-we-looked-like-you]] [[sl-real-ending-scooped-mirror]].",
      "The body keeps walking. His skin darkens to purple as the neighbours grow alarmed [[sl-custom-night-decay]], Ennard pours out into a drain [[sl-custom-night-ennard-ejected]], and a voice insists \"You won't die\" as he stands back up [[sl-you-wont-die]]. In the burned wreck of Fazbear's Fright he tells his father he found \"it\" where he was told and put her back together; he should be dead; he will come find him [[sl-golden-freddy-cutscene-father]] [[sl-golden-freddy-cutscene-come-find-you]]. Springtrap steps out of the dark [[sl-golden-freddy-cutscene-springtrap]]. Scott ruled that these cutscenes are canon [[scott-2016-cutscenes-are-canon]].",
      "The ordering is looser than it first looks. Only this closing monologue is placed after FNaF3's fire. When Michael's Sister Location shifts happened relative to FNaF3, the games do not say.",
    ],
    counterEvidence: ["ffps-scrap-baby-not-expected", "fnaf1-custom-night-pink-slip"],
    tension: "For the franchisee, Scrap Baby's first words are \"You're not who I expected to see\" [[ffps-scrap-baby-not-expected]], which sits badly with a sister meeting her brother; ((ffps)) argues the identification on three lines that answer Michael's speech, and it stays at most likely. For the guards, FNaF1's notice of termination gives \"Odor\" as a reason [[fnaf1-custom-night-pink-slip]], and a rotting man would smell. So would anyone who worked beside those machines, and the 1987 guard's slip says the same. The model does not use that link.",
    changesIf: "A game that names the franchisee, or ties one of the night guards to the Afton family.",
    seeAlso: ["funtimes", "killer", "afton-house", "ffps", "fazbears-fright", "remnant"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "sl-fake-ending-to-be-with-her-again", // [stated] Ennard: 'To be with her again?'
      "sl-real-ending-they-always-put-us-back", // [stated] 'I've been out before, but they always put me back'
      "sl-golden-freddy-cutscene-found-it", // [stated] 'I found it. It was right where you said it would be.'
      "sl-golden-freddy-cutscene-they-thought-i-was-you", // [stated] 'They didn't recognize me at first, but then... they thought I was you.'
      "sl-golden-freddy-cutscene-put-her-back-together", // [stated] 'I put her back together, just like you asked me to. She's free now.'
      // support
      "sl-controlled-shocks", // [stated] Technician's job: shock animatronics back onto their stages
      "sl-baby-previous-employee-hiding-place", // [stated] Baby: 'Someone before you crafted it into a hiding place'
      "sl-baby-warns-handunit-will-kill", // [stated] Baby: following HandUnit's instructions means death
      "sl-funtime-foxy-knockout", // [shown] Night 3 ends with Funtime Foxy attacking
      "sl-baby-i-kidnapped-you", // [stated] Baby: 'I kidnapped you.'
      "sl-scooping-room-explained", // [stated] The scooping room and 'the scooper'
      "sl-ballora-scooped", // [shown] Ballora is scooped
      "sl-baby-how-to-pretend", // [stated] Baby: 'how. To. Pretend.'
      "sl-technicians-hanged", // [shown] Night 5: the two technicians hang on the stages
      "sl-baby-something-bad-inside", // [stated] Baby: 'There is something bad… inside of me'
      "sl-baby-card-and-passcode", // [stated] Passcode, card, and sending Baby to the scooper
      "sl-handunit-intro-job-ad", // [stated] HandUnit greets a new hire: a job fair, an ad, or a dare
      "sl-baby-i-remember-this-scenario", // [stated] Baby: 'I don't recognize you. You are new. I remember this... scenario, however.'
      "sl-technicians-night4-dialogue", // [stated] Technicians: 'these things can't go a day without breaking down'
      "sl-real-ending-already-been-here-today", // [stated] Scooping room: all four 'have already been here today'
      "sl-fake-ending-we-need-you", // [stated] Outside the Private Room: 'We need you, so that we can leave'
      // colour
      "sl-dead-body-in-vent", // [stated] HandUnit: 'a dead body was found in this vent once'
      "sl-ballora-song", // [stated] Ballora's song
      "sl-technicians-injured-funtime-freddy", // [stated] Technicians failed to disconnect Funtime Freddy
      "sl-funtime-freddy-bon-bon-birthday-boy", // [stated] Funtime Freddy: 'that's the birthday boy'
      "sl-springlocks-breathing", // [stated] Breathing and heartbeat loosen the springlocks
      "sl-fake-ending-home", // [shown] Fake ending: Ennard reaches the player's home
      "sl-exotic-butters", // [stated] 'Exotic Butters' gift basket
      "sl-baby-guides-past-ballora", // [stated] Baby: 'He is here to help, Ballora'
      "sl-bidybab-same-person", // [stated] Bidybabs: 'Is it the same person?'
      "sl-immortal-and-the-restless", // [stated] The soap opera at home: a father who says the baby isn't his
    ],
  },
];
