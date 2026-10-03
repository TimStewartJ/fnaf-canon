import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 1: The story (Start here).
 * The whole account in one paragraph, with a mark against each clause, and the man it turns on.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "thesis", part: "story", title: "The story in one paragraph",
    question: "What is the whole story, and how much of it is firm?",
    answer: "William Afton kills children, the mascot machines keep them, and everything after is an attempt to end that or to copy it. Who the killer is, what his company built and how the trap burns are firm. What his \"new way to desecrate\" was, whether anyone keeps him after the fire, and what the rabbit in the code is, are the model's readings.",
    confidence: "medium",
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Read only the games and Scott's own words and FNaF becomes one story. **A robotics designer learns that something of a dead person can persist inside a machine. He uses that first to kill and then to outlast his own death.** The haunted animatronics, the Afton family, the Cassette Man's trap and the Pizzaplex all follow from that discovery or from attempts to undo it.",
      "Three findings carry the model. (1) **The salvaged Springtrap-like animatronic is William Afton.** The FFPS credits give that name to its voice [[ffps-credits-william-afton]], UCN's roster calls it \"Afton\" [[ucn-roster-afton]], and Scott's own Steam character guide says \"William Afton (AKA Scraptrap)\" [[scott-ucn-character-guide-afton]]. (2) What keeps the dead in machines is called **Remnant**, drawn on an Afton Robotics blueprint with an injector and a reservoir [[ffps-scup-blueprint]]. (3) The same blueprint proposes a remedy, noting that overheating **might** neutralize the effects permanently. Fire is the characters' repeated answer [[fnaf3-it-burns-newspaper]] [[ffps-completion-fire]], but the games also show it failing: Springtrap survives one fire [[fnaf3-it-burns-springtrap-hidden]], and the Mimic walks out of another [[secret-of-the-mimic-ending-unfinished-business]].",
      "Each section below states how strongly it is supported. Where records push back, they are listed.",
    ],
    counterEvidence: ["ucn-omc-ending", "fnaf2-save-them", "sd-which-board-unknown", "hw2-pq4-graveyard-order"],
    tension: "Four records press on the paragraph's weakest clauses. Old Man Consequences says \"Leave the demon to his demons. Rest your own soul\" to whoever reaches him [[ucn-omc-ending]], and on the model's lean the one in that office is the demon; ((ucn)) gives the line another listener, does not choose which, and calls that its weakest point. SAVE THEM shows small bodies in the 1987 building [[fnaf2-save-them]]; ((november-1987)) reads them as the earlier five. No game says which machine the scanned boards came from [[sd-which-board-unknown]], which is why ((digital)) says \"something of him\" and no more. And a later graveyard is solved in an order that ends with the Puppet [[hw2-pq4-graveyard-order]]; the paragraph gives the first murders as a list, not a sequence, for that reason (see ((child-outside))).",
    changesIf: "A game that names the player of Ultimate Custom Night, dates Afton's own machines against the five, or says which machine the scanned boards came from would change the clause it touches. Each chapter says what would change its own answer.",
    seeAlso: ["killer", "patterns", "timeline-math", "games", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [],
  },
  {
    id: "killer", part: "story", title: "The man in the rabbit suit",
    question: "Who is the purple man of the minigames?",
    answer: "William Afton: the killer, the robot designer and the father are one man. Only one link in the chain is stated outright, the credit that gives the burnt rabbit's voice to \"William Afton\"; the other four are short inferences from what the games show.",
    confidence: "high",
    hero: { image: "fnaf3-springlock-death.png", caption: "FNaF3, after Night 5: the purple figure slumped inside the yellow rabbit suit [[fnaf3-n5-springlock-death]]. The game names nobody here; the name comes three games later." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model’s ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["fnaf1-news-suspect-captured", "fnaf1-news-charged-vs-convicted", "sl-golden-freddy-cutscene-they-thought-i-was-you"],
    tension: "FNaF1's clippings say a man was caught the morning after and charged [[fnaf1-news-suspect-captured]] [[fnaf1-news-charged-vs-convicted]], yet the killer is at large in every later game. Who the caught man was is open: the killer, later free for want of bodies, or the wrong man. The model prints the arrest and builds nothing on either reading, and no link above depends on it (see ((murders)) and ((open))). Michael's line that the machines \"thought I was you\" [[sl-golden-freddy-cutscene-they-thought-i-was-you]] has been read as putting the son in the suit; in the same speech he is talking to his father, and the rabbit steps out of the dark as he finishes.",
    changesIf: "A game that names someone else as the body in the rabbit suit, or a credit that gives the burnt rabbit another name.",
    seeAlso: ["springtrap", "murders", "child-outside", "funtimes", "michael", "salvage", "partners"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf3-springtrap-corpse-screens", // [shown] Rare Springtrap screens show remains inside
      "ffps-credits-william-afton", // [stated] Credits: Scraptrap's voice is credited as 'William Afton'
      "ucn-roster-afton", // [stated] UCN roster lists Scraptrap as 'Afton'
      "scott-ucn-character-guide-afton", // [stated] Scott's UCN Character Guide: 'William Afton (AKA Scraptrap)'
      "scott-2017-michael-voice-not-robotic", // [stated] The 'robotic' voice was an accident of slowing the line down
      "scott-2018-interview-purple-guy-in-springtrap", // [stated] 2018: 'his purple corpse is in that whole body that whole time'
      // support
      "scottgames-fnaf3-teaser-still-here", // [stated] Teaser: 'I am still here.'
      "scottgames-fnaf3-teaser-he-always-does", // [stated] Teaser: 'He always does.'
      "scott-fnaf3-trailer-tagline", // [stated] FNaF3 trailer: 'He will come back. He always does. We have a place for him.'
      "scottgames-site-fnaf3-i-am-still-here", // [shown] FNaF3 teaser: 'I am still here.' (Springtrap)
      "scottgames-site-fnaf3-he-always-does", // [shown] FNaF3 teaser: 'He always does.'
      "scott-2018-afton-name-for-ffps-springtrap", // [stated] Scott calls the Pizzeria Simulator Springtrap 'Afton'
      "scottgames-site-fnaf3-source-i-remain", // [stated] FNaF3 page source: 'I remain'
      // other
      "fw-purpleguy-sprite-disclaimer", // [stated] Purpleguy: 'Don't confuse me with the actual Purple Guy'
    ],
  },
];
