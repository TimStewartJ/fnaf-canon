import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 7: The reckoning (Thirty years later).
 * A horror attraction finds the rabbit, an old friend sets a trap, a building burns, and one victim will not let the killer go.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "fazbears-fright", part: "reckoning", title: "Thirty years later",
    question: "What did Fazbear's Fright find, and did Happiest Day free the children?",
    answer: "Thirty years after Freddy Fazbear's Pizza closed, a horror attraction built from its relics found the killer still inside the rabbit suit, and then burned down. One of the game's two endings is Happiest Day, which the model tells as the release the children were owed and the first attempt at it. Which ending happened is open, and the next game speaks of the children as still without rest.",
    confidence: "medium",
    hero: { image: "fnaf3-springtrap-corpse-screen.jpg", caption: "A rare screen in FNaF3: the rabbit that Fazbear's Fright found behind a boarded-up wall, with remains inside the suit [[fnaf3-springtrap-corpse-screens]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model’s ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["fnaf3-good-ending-heads", "scott-2018-interview-fnaf3-ending-unanswered"],
    tension: "FNaF3's own good ending shows the heads with their eyes dark and the fifth head gone [[fnaf3-good-ending-heads]]: inside that game, the children leave. The model does not deny it. It reports that the game made to resolve the story speaks of small souls still without rest, and shows the graves only after its own fire; no record says when the stones were set. Asked in 2018 which FNaF3 ending happened, Scott said the answer was \"complex\" and did not give it [[scott-2018-interview-fnaf3-ending-unanswered]]. That record is a transcript, and it leaves room for the surviving alternative: that the release held for the five, and what was gathered later is something else.",
    changesIf: "A statement from Scott on which FNaF3 ending happened, or a game that shows the five between Fazbear's Fright and Pizzeria Simulator.",
    seeAlso: ["springtrap", "golden", "michael", "ffps", "salvage", "timeline-math"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf3-coming-soon-newspaper", // [stated] 'COMING SOON! Fazbear's Fright'
      "fnaf3-call1-boarded-room-lead", // [stated] Lead on a boarded-up extra room
      "fnaf3-call1-ventilation-hallucinations", // [stated] Ventilation failure causes 'crazy stuff'
      "fnaf3-call2-found-a-real-one", // [stated] 'We found one. A real one.'
      "fnaf3-springtrap-name", // [stated] Extras menu names 'Springtrap'
      "fnaf3-it-burns-newspaper", // [stated] 'IT BURNS!' Fazbear's Fright burns down
      "fnaf3-it-burns-springtrap-hidden", // [shown] Springtrap hidden in the fire newspaper photo
      "fnaf3-happiest-day", // [shown] Happiest Day
      "scott-fnaf3-steam-description", // [stated] Scott: 'Thirty years after Freddy Fazbear's Pizza closed'
      "scott-2015-fnaf3-store-thirty-years", // [stated] FNaF3 Steam description: thirty years after the pizzeria closed
      "scott-2015-fnaf3-multiple-springtraps-hallucinations", // [stated] Extra Springtraps on the cameras are hallucinations
      // counter
      "fnaf3-bad-ending-heads", // [shown] Bad ending: heads with lit eyes
      // support
      "fnaf3-call1-relics-foxy-head", // [stated] Relics: drawings, a Foxy head, a desk fan
      "fnaf3-phantom-hallucinations", // [shown] Phantom animatronics are non-lethal hallucinations
      "fnaf3-stage01-cake-crying-child", // [shown] Stage01 cake ending: crying child
      "fnaf3-mangles-quest", // [shown] Mangle's Quest
      "fnaf3-chicas-party", // [shown] Chica's Party
      "fnaf3-bbs-air-adventure", // [shown] BB's Air Adventure
      "fnaf3-good-ending-requirements", // [shown] Good ending needs every cake ending
      "fnaf3-audio-lure-mechanic", // [shown] Springtrap is led about by the sound of a child's voice
      "fnaf3-office-box-toy-heads", // [shown] The office's box of relics holds the heads of the 1987 cast
      "fnaf3-guard-unnamed", // [implied] FNaF3 never names its guard
      "scottgames-site-fnaf3-parts-box", // [shown] FNaF3 teaser: box of old animatronic parts
      "scottgames-site-fnaf3-all-in-your-mind", // [shown] FNaF3 teaser: 'It's all in your mind.'
      "scottgames-site-fnaf3-source-30-years-later-only-one", // [stated] FNaF3 first hint in the page source: '30 years later, only one'
      "scott-2018-interview-fnaf3-end-of-trilogy", // [stated] 2018: FNaF3 'was the end of a trilogy'
      // colour
      "fnaf3-call1-attraction-opens", // [stated] Phone Dude: attraction opens in a week; guard is part of the show
    ],
  },
  {
    id: "ffps", part: "reckoning", title: "The trap and the fire",
    question: "What was Pizzeria Simulator's pizzeria for, and did the fire work?",
    answer: "It was bait. The Cassette Man called four haunted machines into one building and stayed as it burned. The game presents that fire as the end, and shows six graves after it. The later games reopen it: the company comes back, a buried pizzeria with the same sign lies under its newest building, and one voice refuses release.",
    confidence: "medium",
    hero: { image: "ffps-completion-pizza-place-condemned.png", caption: "Pizzeria Simulator's ending: a building signed \"Freddy Fazbear's Pizza Place\", with a notice across it that reads CONDEMNED [[ffps-completion-slide-pizza-place-condemned]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Freddy Fazbear's Pizzeria Simulator is the Cassette Man's trap. The franchise is a cover [[ffps-tutorial-franchisee]]. Salvaged animatronics keep turning up in the alley \"and we aren't sure why\" [[ffps-salvage-first-tape-alley]], and the company wants \"them all\" in one place by Saturday [[ffps-tutorial-all-in-one-place]]. Four arrive: Molten Freddy, Scraptrap, Scrap Baby and Lefty [[ffps-salvage-order]].",
      "Each one is someone. Scraptrap says \"I always come back\" and \"it's still me\" [[ffps-scraptrap-always-come-back]] [[ffps-scraptrap-still-me]], and is credited as **William Afton** [[ffps-credits-william-afton]]. Scrap Baby is Elizabeth [[ffps-completion-connection-terminated-elizabeth]]. Lefty was built to lure and encapsulate [[ffps-lefte-blueprint]], and its arm shows the Puppet's stripes [[ffps-lefty-alley-puppet-arm]]. Molten Freddy is a mass of wires singing about one big happy family [[ffps-molten-freddy-lines]]; this archive reads it as what was left of Ennard.",
      "The franchisee is the \"brave volunteer\" who found a listing not meant for him and chose to stay [[ffps-completion-brave-volunteer]]. The game never names him; this archive reads him as Michael keeping his promise. The Cassette Man tells the spirits to give up what is not theirs [[ffps-completion-give-up-spirits]], tells his daughter to rest [[ffps-completion-rest]], and says that for his \"old friend\" the darkest pit of Hell has opened [[ffps-completion-old-friend-hell]]. The building burns [[ffps-completion-fire]]. The achievement reads \"Trapped them all.\" [[ffps-completion-achievement]].",
    ],
    counterEvidence: ["ffps-completion-achievement", "ffps-scrap-baby-not-expected", "ffps-completion-tutorial-atonement"],
    tension: "The game itself calls the ending final: the achievement reads \"Trapped them all.\" [[ffps-completion-achievement]], and the last screen says THE END over six graves. The model takes that at the game's word and then counts what later games reopen, at unequal firmness: the company that certified itself \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]] is selling its history again, a pizzeria with the same sign lies under its newest building, and one voice refuses release. That anything of the killer persists is a lean, argued in other chapters and stated nowhere as fact. On the franchisee, Scrap Baby's \"You're not who I expected to see\" [[ffps-scrap-baby-not-expected]] is the line for an outsider. The model keeps Michael on the volunteer who would rather stay than leave, and on \"it's still me\", and the identification stays at most likely.",
    changesIf: "A game that shows the five still bound after this fire, names the franchisee, or shows who lit it.",
    seeAlso: ["salvage", "michael", "child-outside", "ucn", "faith", "cover-story", "remnant"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "ffps-cassette-intro-paragraph-4", // [stated] Intro tape: checking outside every shift, Paragraph 4
      "ffps-credits-cassette-man", // [stated] Credits name the tape speaker only 'Cassette Man'
      "ffps-scrap-baby-completion-monologue", // [stated] Scrap Baby's Saturday monologue: 'a gift, for us'
      "ffps-insanity-tape-call-them-back", // [stated] Insanity tape: 'I have to call them all back... Together in one place'
      "ffps-completion-remaining-nearby", // [stated] Completion: 'I am remaining as well. I am nearby.'
      "ffps-completion-peace-perhaps-more", // [stated] Completion: 'peace, and perhaps more, waiting for you'
      "ffps-insanity-wound-first-inflicted", // [stated] Insanity tape: 'a wound first inflicted on me'
      "ffps-completion-not-called-by-who-you-assume", // [stated] Completion: 'nor have you been called here by the individual you assume'
      "ffps-completion-right-where-you-want-to-be", // [stated] Completion: 'you are right where you want to be'
      "scott-2018-interview-ffps-made-to-resolve-plot-points", // [stated] 2018: Pizzeria Simulator existed 'just to resolve some plot points'
      // support
      "ffps-cassette-intro-seal-room", // [stated] Intro tape: seal the room and never return
      "ffps-tutorial-something-outside", // [stated] Something outside has been trying to get in for months
      "ffps-tutorial-saturday-party", // [stated] Saturday is a big party and the 'ultimate test'
      "ffps-bad-ending-paragraph-four", // [stated] Bad ending: fired for not meeting Paragraph Four
      "ffps-scraptrap-deceptive-calling", // [stated] Scraptrap knew the 'calling' was a lie
      "ffps-scrap-baby-employer", // [stated] Scrap Baby: 'You don't really know who your employer is'
      "ffps-scrap-baby-heard-call", // [stated] Scrap Baby: 'I heard your call' / 'my birthday'
      "ffps-rasc-blueprint", // [stated] RASC blueprint: simulated presence at body temperature
      "ffps-insanity-could-make-myself-sleep", // [stated] Insanity tape: 'I could make myself...sleep. But not yet.'
      "ffps-completion-labyrinth", // [stated] Completion: the pizzeria is 'a labyrinth with no exit'
      "ffps-completion-chasing-cries", // [stated] Completion: chasing 'the cries of children in some unseen chamber'
      "ffps-cassette-intro-vintage-attractions", // [stated] Intro tape: a test of 'vintage interactive attractions'
      "ffps-intro-scrap-baby-finishes-countdown", // [stated] Opening scene: Scrap Baby finishes the tape's countdown
      "ffps-completion-story-ends", // [stated] Completion: 'This is where your story ends.'
      "ffps-scrap-baby-played-into-our-hands", // [stated] Scrap Baby: 'This was a gift, for us.'
      "ffps-scrap-baby-should-have-known", // [stated] Scrap Baby: 'You should've known I'd find you.'
      "ffps-already-inside-sign", // [shown] 'There's No One Here (I'm Already Inside)'
      "ffps-rasc-audio-central-server", // [stated] RASC blueprint: emitters and audio run from a central server
      "scott-2018-wanted-to-finish-story", // [implied] Scott wanted to finish the story himself; after FFPS, open to others
      "scottgames-site-ffps-source-what-is-paragraph-4", // [stated] Pizzeria Simulator page source: 'What is paragraph 4?'
      // colour
      "ffps-intro-fake-8bit-tycoon", // [shown] Opening 8-bit 'Pizzeria Simulator' fake-out
      "ffps-lorekeeper-certificate", // [stated] 'You Are The Lorekeeper' certificate
      "ffps-mediocrity-ending", // [stated] Certificate of Mediocrity ending
      "ffps-bankruptcy-ending", // [stated] Certificate of Bankruptcy ending
      "ffps-tutorial-eggs-one-basket", // [stated] Tutorial Unit: 'put all your eggs into one basket'
    ],
  },
  {
    id: "salvage", part: "reckoning", title: "The four who came",
    question: "Who are the four machines salvaged in Pizzeria Simulator?",
    answer: "The killer, in what is left of his rabbit suit. His daughter, in what is left of Circus Baby. The rest of the Sister Location machines, fused into one that the game calls Molten Freddy. And, most likely, the Puppet, inside a bear built to catch it. The five children are most likely among what answers the call. Which machine holds them is not stated, and the model does not say.",
    confidence: "medium",
    hero: { image: "ffps-scraptrap-alley.jpg", caption: "A rare screen from Pizzeria Simulator's back alley: the salvaged rabbit, whose voice the credits give to \"William Afton\" [[ffps-scraptrap-alley-remains]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model’s ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["ffps-salvage-origins-unknown", "fnaf3-good-ending-heads"],
    tension: "Pizzeria Simulator never says \"Ennard\", and its own tape says of what turns up in the alley, \"we are unsure of its origins\" [[ffps-salvage-origins-unknown]]: Molten Freddy's past is read from its body, its voice and its lines. And nothing says where the five are. If FNaF3's good ending held [[fnaf3-good-ending-heads]], they are in nothing, and what the trap gathers is something else. The model keeps them among what answers the call because the Cassette Man's tape speaks of small souls lured back and overpowered, which is what FNaF3 shows done to the four, and because he means to give them rest. It does not say which machine holds them. That is the weakest join in this part, and it is stated as not shown wherever it appears.",
    changesIf: "A game that shows what became of the four dismantled machines' occupants between the hidden room and the alley.",
    seeAlso: ["ffps", "killer", "funtimes", "michael", "child-outside", "fazbears-fright", "burntrap"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "ffps-salvage-order", // [shown] Four salvageable animatronics, in order
      "ffps-molten-freddy-lines", // [stated] Molten Freddy: 'Together again!'
      "ffps-scraptrap-always-come-back", // [stated] Scraptrap: 'I always come back.'
      "ffps-scraptrap-still-me", // [stated] Scraptrap: 'it's still me'
      "ffps-lefte-blueprint", // [stated] Lefty blueprint: L.ure E.ncapsulate F.use T.ransport & E.xtract
      "ffps-completion-connection-terminated-elizabeth", // [stated] Completion: 'I'm sorry to interrupt you, Elizabeth'
      "ffps-scrap-baby-make-you-proud-daddy", // [stated] Scrap Baby: 'I will make you proud, daddy!'
      "ffps-molten-freddy-alley-wires-eyes", // [shown] Molten Freddy rare screen: a tangle of wires and loose eyes
      "ffps-credits-returning-voices", // [stated] Credits: Scrap Baby and Molten Freddy keep their Sister Location voices
      "scottgames-site-2017-source-ejection-dialogue-group", // [stated] 2017 page source, scottgames.com: 'We found a way to eject you.'
      "scottgames-site-2017-fnafworld-source-ejection-dialogue-one", // [stated] 2017 page source, fnafworld.com: 'I can put myself back together.'
      // support
      "ffps-scraptrap-fascinating", // [stated] Scraptrap: 'Fascinating, what they have become' and 'a promise'
      "ffps-lefty-alley-puppet-arm", // [shown] Lefty rare screen: black-and-white striped limb inside
      "ucn-lefty-lines", // [stated] Lefty: 'come spend eternity inside with me'
      "ffps-lefty-rare-finds-five-dollars", // [shown] Lefty is also for sale: $5, liability 9
      "ffps-scrap-baby-alley-claw", // [shown] Scrap Baby rare screen: a claw for a hand
      "ffps-lefte-suit-seal", // [stated] LEFTE blueprint: 'Behavior upon suit-seal not guaranteed'
      "ucn-roster-lefty-music-box", // [stated] Roster text: Lefty is soothed by the music box, like the Marionette
      "scottgames-site-sl-little-of-me", // [shown] SL teaser: 'There's a little of me in every body.' (Ennard)
      "scottgames-site-2017-fnafworld-iamstillhere-eyes", // [shown] fnafworld.com, June 2017: two green eyes, file name 'Iamstillhere.jpg'
      // colour
      "ffps-lefty-shh", // [stated] Lefty only shushes in FFPS
      "ffps-molten-freddy-knock-knock", // [stated] Molten Freddy: 'Knock knock, I'm here!'
    ],
  },
  {
    id: "ucn", part: "reckoning", title: "The night without end",
    question: "Who is the player in Ultimate Custom Night, and who is \"the one you should not have killed\"?",
    answer: "No line names the player. The model leans to William Afton, kept after the fire by one of his victims in a night that does not end, and it is no more than a lean: Michael is the full alternative, behind by a narrow margin. \"The one you should not have killed\" is a child the player killed, and he runs the night. Which child, the records do not settle.",
    confidence: "low",
    hero: { image: "ucn-golden-freddy-final-cutscene.jpg", caption: "Ultimate Custom Night's last cutscene: Golden Freddy, alone in the dark, twitching [[ucn-golden-freddy-final-cutscene]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "**The records lean towards Michael as UCN's player.** The clues are circumstantial: no line names the player, but several characters taunt him with details from Sister Location. Scrap Baby offers \"your controlled shock\" [[ucn-scrap-baby-lines]], the job Michael did there [[sl-controlled-shocks]]. Circus Baby asks \"Want to see the Scooping Room?\" [[ucn-circus-baby-lines]], where Michael was scooped [[sl-real-ending-scooped-mirror]]. Ballora asks why he hides inside these walls [[ucn-ballora-lines]]. Nightmare Freddy calls him \"a victim that can't perish\" [[ucn-nightmare-freddy-cant-perish]]; Sister Location told Michael \"You won't die\" [[sl-you-wont-die]].",
      "Two more details fit. Afton appears on the roster as an animatronic that **attacks** the player [[ucn-roster-afton]], which is awkward if the player *is* Afton. Old Man Consequences tells the player to \"leave the demon to his demons. Rest your own soul\" [[ucn-omc-ending]], which treats the player and the demon as two different people. \"He tried to release us… no matter how many times they burn us\" [[ucn-orville-he-tried-to-release]] puts the player among those burned in FFPS, and Michael stayed in that fire [[ffps-completion-brave-volunteer]].",
      "The accusation fits too. The player is haunted by \"the one you should not have killed\", who remade Nightmare Freddy [[ucn-nightmare-freddy-toysnhk]]. The Nightmares belong to FNaF4, and Nightmare Fredbear tells the player \"we know who our friends are, and you are not one of them\" [[ucn-nightmare-fredbear-lines]]. The FNaF4 child's death was caused by his older brother [[fnaf4-give-fredbear-a-kiss]]. On this reading, UCN is Michael unable to rest, surrounded by every machine his family built and haunted by the brother he killed. The games' own moral vocabulary points the same way: FFPS reserves \"Hell\" for the killer [[ffps-completion-old-friend-hell]], while UCN's secret ending tells its player to rest his own soul (see the moral-map section). William as the player remains the main alternative. Mr. Hippo's warning that \"sometimes a story is just a story\" [[ucn-mr-hippo-just-a-story]] still applies to anyone who over-reads this game.",
    ],
    counterEvidence: ["ucn-omc-ending", "ucn-scrap-baby-lines", "ucn-nightmare-fredbear-lines", "ucn-circus-baby-lines", "ucn-death-coin-fredbear", "ucn-mr-hippo-just-a-story", "ucn-protagonist-unnamed-killer", "scott-ucn-store-once-again-trapped"],
    tension: "No line names the player [[ucn-protagonist-unnamed-killer]], and the game carries its own warning against over-reading [[ucn-mr-hippo-just-a-story]]. The case for Michael is real, and the model's lean is narrow. Old Man Consequences tells his listener to \"leave the demon to his demons\" [[ucn-omc-ending]], and on its plain sense the listener is not the demon. The voice that told Michael \"You won't die\" says it again here [[ucn-scrap-baby-lines]]. Nightmare Fredbear throws FNaF4's promise at the player [[ucn-nightmare-fredbear-lines]], the Sister Location machines talk about Sister Location [[ucn-circus-baby-lines]], and Scott's store text has the player \"once again\" trapped in an office [[scott-ucn-store-once-again-trapped]]. The model answers the old man by giving his words another listener, and admits that nothing on screen marks one. For the accuser, the coin that turns Golden Freddy into Fredbear [[ucn-death-coin-fredbear]] points at FNaF4's crying child, and the lean to the fifth child is rated low. What is left for William is that the game's hardest words are a judge's words to a murderer, and no reading of Michael absorbs them.",
    changesIf: "A line that names the player, or a game that shows Michael after the fire.",
    seeAlso: ["ffps", "faith", "golden", "bite", "michael", "nightmares", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "ucn-withered-chica-toysnhk", // [stated] Withered Chica: 'I was the first!' and 'the one you shouldn't have killed'
      "ucn-nightmare-lines", // [stated] Nightmare: 'I AM YOUR WICKEDNESS... MADE OF FLESH'
      "ucn-nightmarionne-lines", // [stated] Nightmarionne: 'the fearful reflection of what you have created'
      "ucn-puppet-lines", // [stated] Puppet: 'I recognize you, but I'm not afraid of you... not anymore.'
      "ucn-nightmare-not-spared-not-saved", // [stated] Nightmare: 'YOU WILL NOT BE SPARED. YOU WILL NOT BE SAVED.'
      "ucn-roster-two-forms-at-once", // [shown] The roster holds two forms of the same characters at once
      "scott-2018-interview-ucn-capstone", // [stated] 2018: Ultimate Custom Night was the 'capstone' that 'brought in all of the characters'
      // support
      "ucn-afton-always-come-back", // [stated] UCN Afton: 'I always come back.'
      "ucn-mangle-toysnhk", // [stated] Mangle: 'He's here, and always watching'
      "ucn-jack-o-chica-toysnhk", // [stated] Jack-O-Chica: 'Greetings from the fire, and from the one you should not have killed!'
      "ucn-happy-frog-never-rest", // [stated] Happy Frog secret line: 'I will never let you rest'
      "ucn-nedd-bear-forever", // [stated] Nedd Bear secret line: 'over, and over... forever'
      "ucn-withered-bonnie-prison", // [stated] Withered Bonnie: 'What is this new prison?'
      "ucn-summoned-performers", // [implied] Funtime Foxy & Music Man: 'demanded of me' / 'requested of me'
      "ucn-music-man-eternal", // [stated] Music Man: 'for a long, long time'
      "ucn-toy-chica-dying", // [stated] Toy Chica: 'You won't get tired of dying, will you?'
      "ucn-omc-ending-drowning", // [shown] OMC ending: the player can only drown, then the game closes
      "ucn-roster-includes-ffps-four", // [shown] UCN's roster includes all four FFPS salvage animatronics
      "ucn-jack-o-chica-burns-eternal", // [stated] Jack-O-Chica: 'burns eternal and now you shall as well'
      "ucn-nightmarionne-nightmare-you-wont-wake-from", // [stated] Nightmarionne: 'a nightmare that you won't wake from'
      "ucn-withered-bonnie-consequences-of-failure", // [stated] Withered Bonnie: 'face the consequences of your failure'
      "ucn-mangle-take-apart-put-back-together", // [stated] Mangle: 'take-apart-and-put-back-together'
      "ucn-mr-hippo-youre-dead", // [stated] Mr. Hippo: 'life goes on... Not for you. You're dead.'
      "ucn-mr-hippo-afterlife-or-dream", // [stated] Mr. Hippo: 'this is my afterlife or my dream'
      "ucn-pigpatch-proverbs", // [stated] Pigpatch: 'you will see the body of your enemy float by'
      "ucn-roster-scrap-baby-controlled-shock", // [stated] Roster text: use 'a controlled shock' on Scrap Baby
      "ucn-roster-noncanon-and-fnaf-world", // [shown] The roster mixes in Halloween Edition and FNaF World characters
      "scott-2018-ucn-for-pizzeria-simulator", // [stated] Scott: 'an Ultimate Custom Night for Pizzeria Simulator'
      "scott-2019-ucn-child-face-jason", // [stated] UCN 'one you should not have killed' face is Scott's son's photo
      "scott-2018-custom-night-no-cryptic-hints", // [stated] A custom night update 'wouldn't be with teasers and cryptic hints'
      // colour
      "ucn-toysnhk-face", // [shown] Hidden face of 'the one you should not have killed'
      "ucn-rockstar-bonnie-truest-friend", // [stated] Rockstar Bonnie: 'So good to see you again, my truest friend.'
      "ucn-nightmare-bb-eventually", // [stated] Nightmare Balloon Boy: 'You knew I'd get you eventually.'
      "ucn-omc-ending-scream-audio", // [shown] OMC ending ambience hides a distorted screaming voice
      "ucn-office-ffps-alley-posters", // [shown] UCN office reuses posters from FFPS's back alley
      "ucn-no-light-can-save-you", // [stated] Nightmare Freddy and Nightmare BB: no light can save you now
      "ucn-fredbear-lines", // [implied] Fredbear's distorted lines (wording as reported)
      // other
      "scott-2018-ucn-voice-lines-when-they-kill-you", // [stated] Scott: most UCN characters only speak 'if (when) they kill you'
    ],
  },
  {
    id: "faith", part: "reckoning", title: "Rest, and Hell",
    question: "Do the games say where the dead belong?",
    answer: "Yes, in plain words. The Cassette Man's last speech sends the children to rest and his old friend to \"the darkest pit of Hell\". Ultimate Custom Night then has one voice that refuses release and another that says \"Rest your own soul\". Who is being kept, and who is being told to rest, are the model's leans and no firmer.",
    confidence: "medium",
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Scott is a Christian [[scott-2021-i-am-a-christian]] who spent about twelve years making Christian films and games before FNaF [[scott-2014-christian-projects-before-fnaf]]. In October 2014, after FNaF1, he rejected the idea that FNaF hid Christian messages such as animatronics standing for vices [[scott-2014-no-hidden-christian-messages]]. The archive takes both seriously: it does not decode the series as an allegory, but it reads the afterlife language that later games put in characters' mouths literally.",
      "That language is consistent. **Rest** is what the dead children are owed and denied: \"they will never find rest now\" [[ffps-insanity-tiny-breaths]], \"It's time to rest\" [[ffps-completion-rest]], FNaF World's single word \"Rest.\" [[fw-clock-ending-pieces-in-place]]. The occupants' spirits \"don't belong\" to the machines [[ffps-completion-give-up-spirits]], and the Cassette Man says he believes most of them will find \"peace and perhaps more\" [[ffps-completion-peace-perhaps-more]]. The only line in the records that names **Hell** is addressed to one person, the killer [[ffps-completion-old-friend-hell]].",
      "Read together, the lines draw a moral map: rest owed to the innocent, Hell named for the man who killed them, and Remnant, a machine-made afterlife, holding souls away from rest. Fire is the characters' attempt to break that hold. The games never show where anyone finally goes, so the map is the archive's reading of what characters say. It changes no identification, but it helps with endings. UCN's secret ending, \"Leave the demon to his demons. Rest your own soul\" [[ucn-omc-ending]], separates the player from \"the demon\" without naming either, which fits the Michael reading without settling it (see the UCN section). The Cassette Man's \"be still\" also opens Scott's favourite verse, Psalm 46:10 [[scott-2014-favorite-verse-psalm-46-10]]; that echo is noted, not used. The full picture is on the Scott & Faith page.",
    ],
    counterEvidence: ["scott-2014-no-hidden-christian-messages", "ucn-mr-hippo-just-a-story"],
    tension: "Asked in 2014 whether his games carried hidden Christian messages, Scott answered \"No\" [[scott-2014-no-hidden-christian-messages]]. The chapter claims none: it reports the words the characters use, which from Pizzeria Simulator on are rest, peace, Hell and the Devil, and the sorting those words make. Ultimate Custom Night also warns against over-reading in its own voice [[ucn-mr-hippo-just-a-story]]. What its two voices mean depends on who is in that office and who is listening, and is no firmer than ((ucn)), which rates both low.",
    changesIf: "A statement from Scott on what the endings of Pizzeria Simulator and Ultimate Custom Night mean, or a change in who the player of Ultimate Custom Night is.",
    seeAlso: ["ffps", "ucn", "fazbears-fright", "golden", "patterns"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [],
  },
];
