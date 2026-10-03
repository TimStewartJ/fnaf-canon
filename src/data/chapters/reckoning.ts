import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 7: The reckoning (Thirty years later).
 * A horror attraction finds the rabbit, an old friend sets a trap, a building burns, and one voice refuses release.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "fazbears-fright", part: "reckoning", title: "Thirty years later",
    question: "What did Fazbear's Fright find, and did Happiest Day free the children?",
    answer: "Thirty years after Freddy Fazbear's Pizza closed, a horror attraction built from its relics found the killer still inside the rabbit suit, and then burned down. One of the game's two endings runs through Happiest Day, a hidden party at which six masked children vanish. The model tells it as the release the children were owed and the first attempt at it. Which ending happened is open, and a later game, Pizzeria Simulator, speaks of the children as still without rest.",
    confidence: "medium",
    // REVIEW: the skeleton's caption had the rabbit found "behind a boarded-up wall", and beat s-fazbears-fright has the
    // builders "open a boarded-up room". fnaf3-call2-found-a-real-one's own note says that is implied by the Night 1
    // lead (fnaf3-call1-boarded-room-lead) and not stated. The caption drops it and the chapter says "implied".
    hero: { image: "fnaf3-springtrap-corpse-screen.jpg", caption: "A rare screen from FNaF3: the one real machine at Fazbear's Fright, with what looks like a decayed body inside the suit [[fnaf3-springtrap-corpse-screens]]." },
    body: [
      "FNaF3 opens on a newspaper. A local amusement park is about to open {{fazbears-fright}}, \"a new attraction based on the unsolved mysteries of Freddy Fazbear's Pizza\", with actual relics from \"the decades-old pizzeria\" [[fnaf3-coming-soon-newspaper]]. Scott's store page says how long it has been.",
      { kind: "quote", evidence: "scott-2015-fnaf3-store-thirty-years" },
      "The game is set <<thirty years later|relative|scott-2015-fnaf3-store-thirty-years,scottgames-site-fnaf3-source-30-years-later-only-one|Scott wrote that the game is set thirty years after the pizzeria closed. No year is printed.>>. The text gives no year, and does not say which closing it counts from [[scott-fnaf3-steam-description]]. The model counts from the last, the restaurant of the first game, and prints no year either (see ((timeline-math))).",
      { kind: "heading", text: "What the attraction found" },
      "An employee of the attraction phones the guard on the first two nights. His people have been collecting: \"a Foxy head! Which we think could be authentic!\" [[fnaf3-call1-relics-foxy-head]], and a box of empty heads from the cast of FNaF2's restaurant [[fnaf3-office-box-toy-heads]]. Someone \"who helped design one of the buildings\" has told them of \"an extra room that got boarded up\" [[fnaf3-call1-boarded-room-lead]]. On the second night he has news.",
      { kind: "quote", evidence: "fnaf3-call2-found-a-real-one", text: "We found one. A real one." },
      "He does not say where: that it came out of the boarded-up room is implied by the lead. He never calls again. The Extras menu names the find {{springtrap}} [[fnaf3-springtrap-name]], and rare screens show what looks like a decayed human body inside the suit [[fnaf3-springtrap-corpse-screens]]. The game never says whose. It is most likely the purple figure who died in a yellow rabbit suit in a hidden room (see ((springtrap))), and a later game's credits give him a name (see ((killer))).",
      "It is the attraction's only animatronic [[scott-fnaf3-steam-description]]. The burnt mascots that loom up when the ventilation fails [[fnaf3-call1-ventilation-hallucinations]] cannot end the night: only Springtrap can [[fnaf3-phantom-hallucinations]]. Scott called the extra Springtraps that players saw \"hallucinations\" [[scott-2015-fnaf3-multiple-springtraps-hallucinations]]. The guard moves the real one about with a clip of a child's laugh [[fnaf3-audio-lure-mechanic]].",
      { kind: "heading", text: "Happiest Day" },
      "FNaF3 hides a second story under this one. In four hidden games a crying child can be given cake [[fnaf3-good-ending-requirements]]. The carriers are never the four mascots the children are tied to: they are Balloon Boy [[fnaf3-bbs-air-adventure]], Toy Chica [[fnaf3-chicas-party]], a yellow bear [[fnaf3-stage01-cake-crying-child]] and a dark rabbit [[fnaf3-shadow-bonnie-minigame]], with a cake that Mangle fetches first [[fnaf3-mangles-quest]] (see ((open))).",
      "A last hidden game is titled \"HAPPIEST DAY\". The player walks a grey child in a Puppet's mask through a party. With every child fed, four grey children wait at the last table in the masks of Freddy, Bonnie, Chica and Foxy. The Puppet-masked child brings a cake, and a fifth child at the end of the table puts on a golden bear's mask. Then all six are gone, the masks are on the floor, and the balloons float up [[fnaf3-happiest-day]].",
      { kind: "figure", image: "fnaf3-happiest-day.png", caption: "Happiest Day in full. At the right, in grey: the masked children and their cake.", evidence: "fnaf3-happiest-day" },
      "The fifth night ends on one of two screens. Without the cake, the heads of Freddy, Foxy, Chica and Bonnie lie with their eyes lit, a fifth head faint behind them, over the caption \"Bad ending.\" [[fnaf3-bad-ending-heads]] With it, the four heads lie with their eyes dark, the fifth is gone, and the caption is \"the end\" [[fnaf3-good-ending-heads]].",
      "This is most likely the ending the first three games were built toward. In a 2018 interview, on record here as a transcript, Scott said of FNaF3: \"in my mind, that was the end of a trilogy\" [[scott-2018-interview-fnaf3-end-of-trilogy]]. The model tells Happiest Day as the release that was owed and first attempted, for the five and for a sixth child behind the Puppet's mask (see ((child-outside))). It is a scene of this game. Whether it is an event at this point in the story, and which screen happened, is open.",
      { kind: "heading", text: "What a later game says" },
      "Pizzeria Simulator has a hidden tape. On it the voice of that game's recordings, the Cassette Man (see ((ffps))), talks about the dead in the machines: \"Small souls trapped in prisons of my making now set to new purpose\" [[ffps-insanity-small-souls-prisons]]. Someone, he says, \"lured them all back. Back to a familiar place. Back with familiar tricks.\" [[ffps-insanity-lured-back]]",
      { kind: "quote", evidence: "ffps-insanity-trap-again", text: "He overpowered them again. And he robbed them of the only thing that they had. Again." },
      "And then: \"they will never find rest now. Not like this.\" [[ffps-insanity-tiny-breaths]] The tape names no place and no machine. Its small souls are most likely the five. They are in machines the speaker calls his own making, and they were led to a familiar place and overpowered. That is what FNaF3's own minigames show a dark bear and a purple figure do to the four mascots [[fnaf3-eon-shadow-freddy-follow-me]] [[fnaf3-eon-purple-guy-dismantles]] (see ((springtrap))).",
      "So Pizzeria Simulator still has the children without rest. The Cassette Man tells the machines he has gathered to give up their spirits [[ffps-completion-give-up-spirits]], and his game shows a row of gravestones only after its own fire [[ffps-lorekeeper-gravestones]]. Why the first release did not hold, the tape says only in outline: robbed \"again\", they cannot rest \"like this\". The model reads that as the reason and adds no mechanism. Asked in the same interview which ending happened, Scott would not say: \"The answer is very interesting. The answer is complex.\" [[scott-2018-interview-fnaf3-ending-unanswered]]",
      { kind: "compare", columns: [
        { title: "It did not hold", verdict: "The model's telling", pick: true, text: "Pizzeria Simulator speaks of small souls still without rest, and shows the graves only after its own fire. Happiest Day is the release that was owed, and that fire the one the later games stand on. The cost: no game shows the five between the two." },
        { title: "It held for the five", verdict: "The surviving alternative", text: "The second ending happened and stayed: the eyes go dark and the fifth head is gone. What the trap gathers is something else. Only one of Happiest Day's six is addressed afterwards as still there, the Cassette Man's daughter [[ffps-completion-my-daughter]]. Scott's \"complex\" suits this better than a plain bad ending." },
      ] },
      { kind: "heading", text: "The fire" },
      "The screen after the game's hardest night is another newspaper.",
      { kind: "figure", image: "fnaf3-it-burns.jpg", caption: "\"IT BURNS!\" Brightened, the photograph beside the report shows part of Springtrap's head behind the Freddy figure [[fnaf3-it-burns-springtrap-hidden]].", evidence: "fnaf3-it-burns-newspaper" },
      "Fazbear's Fright has burned to the ground overnight. The paper does not rule out foul play, puts the fire down to faulty wiring, and says the few items salvaged will be sold at auction [[fnaf3-it-burns-newspaper]]. Nobody is shown setting it. Whatever fire is made to do later in this story, this one is nobody's remedy on the record.",
      "The story picks up in front of the wreck. In Sister Location's last cutscene a son tells his father \"I'm going to come find you.\" [[sl-golden-freddy-cutscene-come-find-you]] Behind him is a burnt building whose sign still reads, in part, as the attraction's, and a rabbit-eared figure steps out of the dark [[sl-golden-freddy-cutscene-springtrap]]. The son is {{michael-afton}} (see ((michael))). Where his promise leads is ((ffps)).",
    ],
    counterEvidence: ["fnaf3-good-ending-heads", "scott-2018-interview-fnaf3-ending-unanswered"],
    tension: "FNaF3's own second screen shows the heads with their eyes dark and the fifth head gone [[fnaf3-good-ending-heads]]: inside that game, the children leave. The model does not deny it. It reports that a later game, made to resolve the story, speaks of small souls still without rest and shows the graves only after its own fire. It admits two gaps: no record says when the stones were set, and no game shows the five between the attraction and the trap. Asked in 2018 which FNaF3 ending happened, Scott said the answer was \"complex\" and did not give it [[scott-2018-interview-fnaf3-ending-unanswered]]. That record is a transcript, and it leaves room for the surviving alternative: that the release held for the five, and what was gathered later is something else.",
    changesIf: "A statement from Scott on which FNaF3 ending happened, or a game that shows the five between Fazbear's Fright and Pizzeria Simulator.",
    seeAlso: ["springtrap", "golden", "michael", "ffps", "salvage", "timeline-math", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf3-guard-unnamed", // [implied] FNaF3 never names its guard
      "scottgames-site-fnaf3-parts-box", // [shown] FNaF3 teaser: box of old animatronic parts
      "scottgames-site-fnaf3-all-in-your-mind", // [shown] FNaF3 teaser: 'It's all in your mind.'
      // colour
      "fnaf3-call1-attraction-opens", // [stated] The attraction's caller: it opens in a week; the guard is part of the show
    ],
  },
  {
    id: "ffps", part: "reckoning", title: "The trap and the fire",
    question: "What was Pizzeria Simulator's pizzeria for, and did the fire work?",
    answer: "It was bait. The Cassette Man called four haunted machines into one building and stayed as it burned. The game presents that fire as the end, and shows six graves after it. The later games reopen it: the company comes back, a buried pizzeria with the same sign lies under its newest building, and one voice refuses release.",
    confidence: "medium",
    hero: { image: "ffps-completion-pizza-place-condemned.png", caption: "A slide from Pizzeria Simulator's ending: a building signed \"Freddy Fazbear's Pizza Place\", still standing, with a notice across its door that reads \"CONDEMNED\" [[ffps-completion-slide-pizza-place-condemned]]." },
    // REVIEW: the writer's brief asked for the wording "it burns with him inside". R28 as revised after the second
    // review withdraws it ("inside" was a reading of "remaining") and requires "stays as it burns". The ruling is
    // followed here: ffps-completion-remaining-nearby, ffps-completion-fire.
    // REVIEW: this chapter carries seven quote blocks where the style guide allows one to three. The brief asked for the
    // Cassette Man's speech at length, in several blocks, in the order he says it. Each block is verbatim from one record.
    // REVIEW: the outline (point 7) lists "the killer kept in a night without end" and "something of him in the company's
    // code" among what the later games reopen. R33, new after the third review, keeps the first inside the UCN chapter and
    // makes "fire, then scan" a convention. The chapter says the fire is presented as his end, marks the scan's place as
    // the model's convention (hw-tape-05), and hands the rest to ((ucn)), ((digital)) and ((burntrap)).
    body: [
      "Pizzeria Simulator begins as a joke. An 8-bit Freddy throws pizzas to children, and in the fourth round the game breaks up and cuts to a dark room and a wrecked machine slumped across a table [[ffps-intro-fake-8bit-tycoon]]. A tape is playing. \"If you are playing this tape\", it says, the listener has found something that meets his \"special obligations under Paragraph 4\" [[ffps-cassette-intro-paragraph-4]].",
      "Then the game hides what it has just shown. The player is a new {{fazbear-entertainment}} franchisee with a small pizzeria to run [[ffps-tutorial-franchisee]]. Each night a tape sets him a second job: machines are found in the alley behind \"quite often\", \"we aren't sure why\", and keeping one risks death [[ffps-salvage-first-tape-alley]]. The company's instructor voice, {{tutorial-unit}}, calls Saturday \"your ultimate test\" [[ffps-tutorial-saturday-party]], and when a salvage is turned down it calls after the player: \"you want them all to be in one place!\" [[ffps-tutorial-all-in-one-place]]",
      "Four come in the end (see ((salvage))). {{william-afton}} is in what is left of the rabbit suit, and his daughter in what is left of Circus Baby. The other two are most likely the fused remains of his other machines, and the Puppet inside a bear built to catch it.",
      { kind: "heading", text: "The plan, in his own words" },
      "{{cassette-man}} is the only name the games give the voice on the tapes: a role in a credits list [[ffps-credits-cassette-man]]. In a hidden ending the office monitor shows three blueprints while a log of his plays [[ffps-insanity-new-way-to-desecrate]]. He speaks of \"this monster that I unwillingly helped to create\" [[ffps-insanity-monster-helped-create]]. He means to undo what that man has done, and to heal \"a wound first inflicted on me, but then one that I let bleed out to cause all of this\" [[ffps-insanity-wound-first-inflicted]]. The wound is his daughter's death, on the reading argued in ((child-outside)). The log ends on how.",
      { kind: "quote", evidence: "ffps-insanity-tape-call-them-back" },
      "The blueprints are the means. Two carry the mark of Fazbear Entertainment, Inc. One is a bear whose name spells out its job, \"L.ure E.ncapsulate F.use T.ransport & E.xtract\" [[ffps-lefte-blueprint]]. The other is a unit with a heat setting \"to remain at 98.6\", body temperature, and sound fed from a central server [[ffps-rasc-blueprint]] [[ffps-rasc-audio-central-server]]. The model reads those units as the bait: something warm and noisy for the machines to hunt. The third sheet is marked Afton Robotics, LLC [[ffps-scup-blueprint]], and is read in ((remnant|the chapter on Remnant)).",
      { kind: "figure", image: "ffps-insanity-lefte-blueprint.png", caption: "The bear's blueprint, from the hidden ending. The mark at the foot is Fazbear Entertainment, Inc.", evidence: "ffps-lefte-blueprint" },
      { kind: "heading", text: "Who runs the pizzeria" },
      "The franchisee is never named and never speaks. He is most likely {{michael-afton}}. The best evidence is what the Cassette Man says to him at the end. He \"somehow found this job listing not intended for you\" [[ffps-completion-brave-volunteer]], and although \"there was a way out planned for you\", he is not expected to take it [[ffps-completion-right-where-you-want-to-be]]. A man nobody sent for has sought the place out and would rather stay. Michael's last words in Sister Location were \"I'm going to come find you.\" [[sl-golden-freddy-cutscene-come-find-you]] Three echoes point the same way, in falling order of weight.",
      { kind: "table", head: ["Said to the franchisee", "What it echoes", "Weight"], rows: [
        ["The rabbit: \"You may not recognize me at first, but I assure you, it's still me.\" [[ffps-scraptrap-still-me]]", "Michael: \"They didn't recognize me at first, but then... they thought I was you.\" [[sl-golden-freddy-cutscene-they-thought-i-was-you]]", "Most. It wants a listener who knew the man."],
        ["Scrap Baby: \"You should've known I'd find you.\" [[ffps-scrap-baby-should-have-known]]", "No line. She speaks as to someone she knows [[ffps-scrap-baby-played-into-our-hands]]", "Some."],
        ["Scrap Baby: \"You gathered them all together in one place, just like he asked you to.\" [[ffps-scrap-baby-completion-monologue]]", "Michael: \"I put her back together, just like you asked me to.\" [[sl-golden-freddy-cutscene-put-her-back-together]]", "Least. It fits any employee who followed the tapes."],
      ] },
      "The other reading is an outsider nobody planned for: the listing was not meant for him, and Scrap Baby also says \"You're not who I expected to see...\" [[ffps-scrap-baby-not-expected]] The model keeps Michael because \"it's still me\" wants a listener who knew the speaker before he burned, and an outsider has no reason to stay in the fire.",
      { kind: "heading", text: "Saturday" },
      "On Saturday the four are inside, and Scrap Baby speaks for them: she believes the pizzeria is a gift from her father (see ((salvage))). A man's voice cuts across hers.",
      { kind: "quote", evidence: "ffps-completion-connection-terminated-elizabeth", text: "Connection terminated. I'm sorry to interrupt you, Elizabeth, if you still even remember that name, but I'm afraid you've been misinformed." },
      "This is where the games give her that name. She is not there for a gift, he tells her, \"nor have you been called here by the individual you assume\" [[ffps-completion-not-called-by-who-you-assume]]. Then he speaks to all four.",
      { kind: "quote", evidence: "ffps-completion-labyrinth" },
      "They have been chasing \"the cries of children in some unseen chamber\" [[ffps-completion-chasing-cries]], and he tells them how that ends: \"But you will never find them. None of you will. This is where your story ends.\" [[ffps-completion-story-ends]] He turns to the volunteer, in the words already quoted, and then to himself.",
      { kind: "quote", evidence: "ffps-completion-remaining-nearby" },
      "Then to the machines, about the dead inside them.",
      { kind: "quote", evidence: "ffps-completion-give-up-spirits", text: "And to you monsters trapped in the corridors, be still and give up your spirits. They don't belong to you." },
      "\"For most of you, I believe there is peace and perhaps more waiting for you after the smoke clears.\" [[ffps-completion-peace-perhaps-more]] The exception follows at once.",
      { kind: "quote", evidence: "ffps-completion-old-friend-hell" },
      "The old friend is not named. He is most likely William Afton (see ((killer))), the \"monster\" of the hidden log. The last words are for a daughter he believes can hear him (see ((child-outside))): \"My daughter, if you can hear me, I knew you would return as well.\" [[ffps-completion-my-daughter]]",
      { kind: "quote", evidence: "ffps-completion-rest" },
      { kind: "heading", text: "The fire, and what it ends" },
      "The Cassette Man calls four haunted machines into one building and stays as it burns. The fire breaks out during the speech, and the machines are shown burning as the building goes up [[ffps-completion-fire]]. The game does not show who lights it, or whether the volunteer takes his way out. A note on the Afton Robotics sheet says that overheating \"might neutralize the effects permanently\" [[ffps-scup-overheating-neutralize]]. The model reads the choice of fire against that note, which no record says he had in mind.",
      "By the game's own account this is the end. The instructor returns to say that the job \"wasn't presented to you in a completely honest fashion\", and that Fazbear Entertainment is \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]]. The achievement reads \"Trapped them all.\" [[ffps-completion-achievement]] After the credits, for a player who has found the three hidden scenes, comes one more picture: five gravestones in a row, four of them named, a sixth alone on a hill, and the words \"THE END\" [[ffps-lorekeeper-gravestones]] [[ffps-lorekeeper-hill-stone]].",
      { kind: "figure", image: "ffps-lorekeeper-the-end.jpg", caption: "The picture after the credits: Gabriel, Fritz, Susie, Jeremy, a fifth stone hidden by grass, and a sixth alone on the hill.", evidence: "ffps-lorekeeper-gravestones" },
      "The model takes that at the game's word and marks one part of it. The fire most likely frees the children: that is the game's framing, and nothing shows it. The speech rests it on two words, \"I believe\", and the game shows the graves only after its fire, without saying whose they are or when the stones were set (see ((golden))). In a 2018 interview, on record here as a transcript, Scott said the game existed \"just to resolve some plot points that people wanted to see\" [[scott-2018-interview-ffps-made-to-resolve-plot-points]].",
      { kind: "heading", text: "What the later games reopen" },
      "Three things, at unequal firmness. The Pizzaplex of Security Breach, a Fazbear Entertainment building, stands over a buried pizzeria whose sign reads \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]], and a later game keeps this game's office as \"a simulated Pizza Place training booth\" [[hw2-first-aid-simulated-pizza-place]]. So, most likely, a Fazbear Entertainment trades on after the fire (see ((cover-story))), and the buried pizzeria is this building, which the ending draws condemned and still standing (see ((burntrap))). And one voice refuses: \"He tried to release you. He tried to release us. But I'm not gonna let that happen.\" [[ucn-orville-he-tried-to-release]]",
      "The company also has old circuit boards scanned into a game [[hw-tape-05]]. That the scan came after this fire is the model's convention: no record places one against the other (see ((digital))). William Afton is among those the fire is shown to burn, and the game presents that as his end. What later games carry of him is argued in ((ucn)), ((digital)) and ((burntrap)), each at its own grade.",
      "Fire, in this story, is one man's answer, given once. It half works.",
    ],
    counterEvidence: ["ffps-completion-achievement", "ffps-scrap-baby-not-expected", "ffps-completion-tutorial-atonement"],
    tension: "The game calls its own ending final: the achievement reads \"Trapped them all.\" [[ffps-completion-achievement]], and the last screen says \"THE END\" over six graves. The model takes that at the game's word and then counts what later games reopen, at unequal firmness: a Fazbear Entertainment trades again, though this game's own voice calls the company \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]]; a ruin with the same sign lies under its newest building; and one voice refuses release. The game presents the fire as the killer's end, and what later games carry of him is argued in other chapters, each at its own grade. On the franchisee, Scrap Baby's \"You're not who I expected to see...\" [[ffps-scrap-baby-not-expected]] is the line for an outsider. The model keeps Michael on the volunteer who would rather stay than leave, and on \"it's still me\", and the identification stays at most likely. Who lit the fire, and whether the volunteer left, the game does not show.",
    changesIf: "A game that shows the five still bound after this fire, names the franchisee, or shows who lit it.",
    seeAlso: ["salvage", "michael", "child-outside", "ucn", "faith", "cover-story", "remnant", "burntrap"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "ffps-cassette-intro-seal-room", // [stated] Intro tape: seal the room and never return
      "ffps-tutorial-something-outside", // [stated] Something outside has been trying to get in for months
      "ffps-bad-ending-paragraph-four", // [stated] Bad ending: fired for not meeting Paragraph Four
      "ffps-scrap-baby-employer", // [stated] Scrap Baby: 'You don't really know who your employer is'
      "ffps-cassette-intro-vintage-attractions", // [stated] Intro tape: a test of 'vintage interactive attractions'
      "ffps-already-inside-sign", // [shown] 'There's No One Here (I'm Already Inside)'
      "ffps-insanity-could-make-myself-sleep", // [stated] Insanity tape: 'I could make myself...sleep. But not yet.'
      "ffps-intro-scrap-baby-finishes-countdown", // [stated] Opening scene: Scrap Baby finishes the tape's countdown
      "ffps-scrap-baby-heard-call", // [stated] Scrap Baby: 'I heard your call' / 'my birthday'
      "ffps-scraptrap-deceptive-calling", // [stated] The rabbit knew the 'calling' was a lie (cited in salvage)
      "scott-2018-wanted-to-finish-story", // [implied] Scott wanted to finish the story himself; after FFPS, open to others
      "scottgames-site-ffps-source-what-is-paragraph-4", // [stated] Pizzeria Simulator page source: 'What is paragraph 4?'
      // colour
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
    hero: { image: "ffps-scraptrap-alley.jpg", caption: "A rare screen from Pizzeria Simulator's back alley: the salvaged rabbit, its suit torn open over reddish strands and a pale, bony hand [[ffps-scraptrap-alley-remains]]. The credits give its voice to \"William Afton\"." },
    body: [
      "Behind Pizzeria Simulator's pizzeria is an alley, and on four nights of the week something has been left in it. From the second night the tape that goes with it begins: \"Before you is an animatronic found in the back alley, we are unsure of its origins.\" [[ffps-salvage-origins-unknown]] Four come, always in the same order [[ffps-salvage-order]]. The game says a good deal about who is in each. About where they have been, it says only that.",
      { kind: "table", head: ["The machine", "Who is in it", "How the game says so"], rows: [
        ["{{molten-freddy}}, a mound of wire and loose eyes", "What is left of the Sister Location machines, most likely", "Its body, its voice and its lines"],
        ["The salvaged rabbit", "{{william-afton}}", "The credits give his voice that name [[ffps-credits-william-afton]]"],
        ["{{scrap-baby}}, Circus Baby rebuilt", "{{elizabeth-afton}}", "The Cassette Man calls her by name [[ffps-completion-connection-terminated-elizabeth]]"],
        ["{{lefty}}, a bear", "The Puppet, most likely", "A blueprint, a bracelet code and a lullaby"],
      ] },
      { kind: "heading", text: "The rabbit and his daughter" },
      "The rabbit is the one the game names outright. He is the salvaged rabbit of Pizzeria Simulator, William Afton (Scott's guide adds \"AKA Scraptrap\") [[scott-ucn-character-guide-afton]]. He talks like a man returning: \"I always come back.\" [[ffps-scraptrap-always-come-back]] His head and body are shaped differently from the rabbit that Fazbear's Fright found [[ffps-scraptrap-alley-remains]], and he says as much himself.",
      { kind: "quote", evidence: "ffps-scraptrap-still-me" },
      "The game never prints \"Springtrap\". This is most likely the same rabbit, come out of the attraction's fire (see ((killer))).",
      "Scrap Baby is Circus Baby rebuilt, with a toothed claw where her right hand should be [[ffps-scrap-baby-alley-claw]]. The Cassette Man addresses her as \"Elizabeth, if you still even remember that name\", and just before he cuts her off she promises: \"I will make you proud, daddy!\" [[ffps-scrap-baby-make-you-proud-daddy]] She is most likely the girl Circus Baby took, its maker's own daughter (see ((funtimes))).",
      { kind: "heading", text: "The one that is many" },
      "Molten Freddy is the one the game explains least. Its body is a mound of tangled wire with loose eyeballs in it, under a rusted bear's face [[ffps-molten-freddy-alley-wires-eyes]]. Sister Location ends with a walking body heaving just such a mass, wires and eyes, into a sewer [[sl-custom-night-ennard-ejected]]. Its voice is Funtime Freddy's, as Scrap Baby's is Baby's [[ffps-credits-returning-voices]]. And what it says is a reunion.",
      { kind: "quote", evidence: "ffps-molten-freddy-lines", text: "Together aga-ain! / One bi-i-ig happy family!" },
      "That is the case for reading it as what is left of {{ennard}}, the one body the Sister Location machines made of themselves (see ((michael))), after Baby was put out of it. In 2017 the page source of Scott's two websites gained a dialogue, a line at a time, that reads as that step. A group tells one voice \"We found a way to eject you.\", and the one voice ends \"I can put myself back together.\" [[scottgames-site-2017-source-ejection-dialogue-group]] [[scottgames-site-2017-fnafworld-source-ejection-dialogue-one]] No speaker is named, and the second site then showed a pair of green eyes with long lashes [[scottgames-site-2017-fnafworld-iamstillhere-eyes]]. Pizzeria Simulator itself never says \"Ennard\".",
      { kind: "figure", image: "ffps-molten-freddy-alley.jpg", caption: "Molten Freddy from above: wire, loose eyes, and a bear's face built from separate plates.", evidence: "ffps-molten-freddy-alley-wires-eyes" },
      { kind: "heading", text: "A trap inside the trap" },
      "Lefty is not wreckage. It is a device, and its blueprint is on the Cassette Man's terminal.",
      { kind: "quote", evidence: "ffps-lefte-blueprint", text: "L.ure E.ncapsulate F.use T.ransport & E.xtract" },
      "One labelled part emits a bracelet code for a \"security receiver\". Another uses a lullaby, and its note ends \"Behavior upon suit-seal not guaranteed.\" [[ffps-lefte-suit-seal]] The sheet is marked Fazbear Entertainment, Inc, and names no target. One machine in these games answers to a child's bracelet and a music box: the Puppet, set in one of this game's minigames to guard a child with a green bracelet [[ffps-security-puppet-assignment]]. Ultimate Custom Night's roster text has Lefty calmed by the music box too [[ucn-roster-lefty-music-box]]. A rare screen shows black and white stripes at Lefty's shoulder, small enough to be a flaw in the picture [[ffps-lefty-alley-puppet-arm]]. That is the case for the Puppet inside, and with it the child the Cassette Man calls his daughter (see ((child-outside))).",
      { kind: "figure", image: "ffps-lefty-alley-rare-screen.jpg", caption: "Lefty in the alley. The stripes are at the shoulder, just left of centre.", evidence: "ffps-lefty-alley-puppet-arm" },
      { kind: "heading", text: "Where the five are" },
      "None of the four is one of the mascots the five children were tied to. Those were taken apart long before (see ((springtrap))). From the murders to the graves, this is all the games give.",
      { kind: "table", head: ["When", "Where the five are", "How firm"], rows: [
        ["From the murders to the last restaurant", "Four in Freddy, Bonnie, Chica and Foxy; the yellow bear marks the fifth [[fnaf2-give-gifts-give-life]]", "Most likely (see ((golden)))"],
        ["The dismantling", "Out of the machines: five ghosts corner the killer [[fnaf3-n5-ghosts-safe-room]] and fade when the suit closes on him [[fnaf3-n5-springlock-death]]", "Shown. No release is read into the fading"],
        ["From the hidden room to the alley", "Not shown. One man's account: lured back, overpowered, robbed \"again\" [[ffps-insanity-trap-again]], \"set to new purpose\" [[ffps-insanity-small-souls-prisons]]", "Stated, in general terms"],
        ["Fazbear's Fright", "Children are given cake, and at a hidden party six of them vanish [[fnaf3-happiest-day]]", "A scene. Whether an event: open (see ((fazbears-fright)))"],
        ["The call", "Among what answers it: \"I have to call them all back\" [[ffps-insanity-tape-call-them-back]]; \"give up your spirits\" [[ffps-completion-give-up-spirits]]", "Most likely. Which machine: not stated"],
        ["The fire", "Told as their release: \"I believe there is peace\" [[ffps-completion-peace-perhaps-more]]", "Most likely, on that game's framing (see ((ffps)))"],
        ["Afterwards", "One voice refuses release [[ucn-orville-he-tried-to-release]]", "Stated. Whose voice: a lean (see ((ucn)))"],
      ] },
      "Four machines come for five children, and the model does not explain the count. Which machine holds them when the call goes out is not stated either.",
      { kind: "compare", columns: [
        { title: "Among what comes", verdict: "The model's telling", pick: true, text: "The Cassette Man means to \"call them all back\", and tells the machines that their spirits \"don't belong to you\". That puts the five there. In which machine, no record says, and the model does not." },
        { title: "In Molten Freddy", verdict: "A candidate, no more", text: "It is the one salvage that is many: loose eyes, a reunion, a group's voice in Scott's page source. A tale told in the pizzeria, of five kittens pieced into one, points the same way as a parable [[ffps-candy-cadet-five-kittens]]. But it speaks as one, \"I'-Im here!\" [[ffps-molten-freddy-knock-knock]], and no record carries anything from the old mascots into the Sister Location machines." },
        { title: "In the Puppet's keeping", verdict: "A candidate, no more", text: "The Cassette Man remembers \"the way you lifted others into yours\" [[ffps-completion-shut-out]], and tells his daughter to rest with \"those you have carried in your arms\" [[ffps-completion-rest]]. But \"carried\" need mean no more than the masks she once gave four dead children (see ((golden)))." },
      ] },
      { kind: "heading", text: "What they thought they had come for" },
      "None of the four came for what was there. Scrap Baby takes it for her father's doing: \"All of those little souls, in one place, just for us... a gift.\" [[ffps-scrap-baby-completion-monologue]] The model reads her little souls as the children she expects at Saturday's party [[ffps-tutorial-saturday-party]], and the line as evidence of what she wants and of nothing else. The rabbit knew the call for a lie [[ffps-scraptrap-deceptive-calling]] and could not resist \"a promise, such as this\" [[ffps-scraptrap-fascinating]]. The Cassette Man's answer is that she was not called \"by the individual you assume\" [[ffps-completion-not-called-by-who-you-assume]], and that there are no children to find: \"you will never find them\" [[ffps-completion-chasing-cries]]. What he does with the four is ((ffps)).",
    ],
    counterEvidence: ["ffps-salvage-origins-unknown", "fnaf3-good-ending-heads"],
    tension: "Pizzeria Simulator never says \"Ennard\", and its own tape says of what turns up in the alley, \"we are unsure of its origins\" [[ffps-salvage-origins-unknown]]: Molten Freddy's past is read from its body, its voice, its lines and a dialogue Scott published outside the game. The Puppet inside Lefty is read from a blueprint that names no target. And nothing says where the five are. If FNaF3's second ending held [[fnaf3-good-ending-heads]], they are in nothing, and what the trap gathers is something else. The model keeps them among what answers the call because the Cassette Man speaks of small souls lured back and overpowered, which is what FNaF3 shows done to the four mascots, and because he means to give them rest. It does not say which machine holds them, and it does not explain how four machines answer for five children. That is the weakest join in this part, and it is marked not shown wherever it appears.",
    changesIf: "A game that shows what became of the four dismantled machines' occupants between the hidden room and the alley.",
    seeAlso: ["ffps", "killer", "funtimes", "michael", "child-outside", "fazbears-fright", "golden", "burntrap"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "ucn-lefty-lines", // [stated] Lefty: 'come spend eternity inside with me'
      "ffps-lefty-shh", // [stated] Lefty only shushes in FFPS
      "ffps-lefty-rare-finds-five-dollars", // [shown] Lefty is also for sale: $5, liability 9
      "scottgames-site-sl-little-of-me", // [shown] SL teaser: 'There's a little of me in every body.' (Ennard)
    ],
  },
  {
    id: "ucn", part: "reckoning", title: "The night without end",
    question: "Who is the player in Ultimate Custom Night, and who is \"the one you should not have killed\"?",
    answer: "No line names the player. The model leans to William Afton, kept after the fire by one of his victims in a night that does not end, and it is no more than a lean: Michael is the full alternative, behind by a narrow margin. \"The one you should not have killed\" is a child the player killed, and he runs the night. Which child, the records do not settle.",
    confidence: "low",
    hero: { image: "ucn-golden-freddy-final-cutscene.jpg", caption: "Ultimate Custom Night's last cutscene has no words: Golden Freddy, in the shape he had in the first game, twitches alone in the dark and fades [[ucn-golden-freddy-final-cutscene]]." },
    // REVIEW: the outline (point 2) has "on the model's lean it is the night the Cassette Man promised him". R16 as revised
    // withdraws that wording: Ultimate Custom Night never says "Hell", and Orville's line has "he" trying to release the
    // listener. The chapter writes "a night one victim keeps the killer in" (ucn-orville-he-tried-to-release).
    // REVIEW: the outline's opening ("every door, no winning") has no record behind it: ucn-protagonist-unnamed-killer says
    // only that the player is unnamed, accused of a killing and told he cannot die. The chapter does not say the night
    // cannot be won. Beat s-night-without-end's "one night with no morning" is in the same position.
    // REVIEW: the outline (point 3) asks for "I was the first!" (ucn-withered-chica-toysnhk) as a table row. R16 scores it
    // "=", so it separates nothing, and it is cut for length. The record is cited for "I have seen him" instead.
    // REVIEW: ucn-rockstar-bonnie-truest-friend is added to counterEvidence. R16 lists it among the records against
    // William ("M, light"); the skeleton had it under further.
    body: [
      "Ultimate Custom Night is one office and fifty machines to set against it [[ucn-roster-includes-ffps-four]]. What story it has is in voices: Scott wrote that most of its characters \"only say something if (when) they kill you\" [[scott-2018-ucn-voice-lines-when-they-kill-you]]. The player dies, and whatever killed him says a line. Several say the same thing.",
      { kind: "quote", evidence: "ucn-nightmare-freddy-toysnhk" },
      "So the player has killed someone, and that someone is behind what is happening to him. No line gives the player a name, or anyone else [[ucn-protagonist-unnamed-killer]].",
      "Scott never ruled on this game. His one precedent, from Sister Location, puts a custom night's play outside the story and its cutscenes inside [[scott-2016-sl-custom-night-not-canon]] [[scott-2016-cutscenes-are-canon]]. The model goes a step beyond that: play and roster are staging, spoken lines and cutscenes are text (see ((canon-rules))). Everything below depends on that step.",
      { kind: "heading", text: "After the fire" },
      "The game began as \"an Ultimate Custom Night for Pizzeria Simulator\" [[scott-2018-ucn-for-pizzeria-simulator]], and Pizzeria Simulator ends on a sentence passed. The Cassette Man tells one listener that \"the darkest pit of Hell has opened to swallow you whole\" [[ffps-completion-old-friend-hell]], and another, a volunteer, that \"there was a way out planned\" [[ffps-completion-right-where-you-want-to-be]]. The first is most likely William Afton and the second most likely his son Michael (see ((ffps))). The two readings put one or the other in this office.",
      "Ultimate Custom Night never says \"Hell\". One speaker calls the place \"this new prison\" [[ucn-withered-bonnie-prison]], another tells the player \"you're dead\" [[ucn-mr-hippo-youre-dead]], and a third calls him \"a victim that can't perish\" [[ucn-nightmare-freddy-cant-perish]]. The last two fit only if the dying repeats, \"over, and over, and over again... forever\" [[ucn-nedd-bear-forever]]. One rare line says why.",
      { kind: "quote", evidence: "ucn-orville-he-tried-to-release" },
      "\"He\" is not named. The line implies the Cassette Man, whose fire was meant as a release. So on the model's lean this is not the Hell that speech promised. It is a night one victim keeps the killer in, against that release.",
      { kind: "heading", text: "The lines that separate them" },
      "Most lines fit either man. These are the ones that pull, and they are not votes: one clean line can outweigh several that have answers.",
      { kind: "table", head: ["The line", "Fits", "Why"], rows: [
        ["Nightmarionne: \"This time, death cannot save you.\" [[ucn-nightmarionne-lines]]", "William", "Death saved him once, when the suit closed and the ghosts faded [[fnaf3-n5-springlock-death]]. It never saved Michael."],
        ["Nightmare: \"I AM YOUR WICKEDNESS... MADE OF FLESH.\" [[ucn-nightmare-lines]]", "William", "A career, not one cruel prank."],
        ["Old Man Consequences: \"Leave the demon to his demons. Rest your own soul.\" [[ucn-omc-ending]]", "Michael", "On its plain sense the listener is not the demon."],
        ["Scrap Baby: \"You won't die, but you'll wish you could.\" [[ucn-scrap-baby-lines]]", "Michael", "The voice that told Michael \"You won't die.\" [[sl-you-wont-die]] But the rabbit's own line is \"I always come back.\" [[ucn-afton-always-come-back]]"],
        ["Nightmare Fredbear: \"Let me put you back together, then take you apart all over again.\" [[ucn-nightmare-fredbear-lines]]", "Michael", "FNaF4's promise, thrown back at the brother (see ((bite)))."],
        ["The Puppet: \"I don't hate you, but you need to stay out of my way.\" [[ucn-puppet-lines]]", "Michael", "Easier said to a brother, or to the franchisee, than to her murderer."],
        ["\"He tried to release you.\"", "Either", "It suits the volunteer as well as the man sent to the Devil."],
      ] },
      { kind: "compare", columns: [
        { title: "William Afton", verdict: "The model's lean", pick: true, text: "The killer died in the fire, and one of his victims keeps him. The game speaks as a judge to a murderer: \"your misdeeds\" [[ucn-jack-o-chica-toysnhk]], \"YOU WILL NOT BE SPARED. YOU WILL NOT BE SAVED.\" [[ucn-nightmare-not-spared-not-saved]] And \"death cannot save you\" is said to a man death once saved. The cost: the old man's line needs a listener who is not in the office." },
        { title: "Michael Afton", verdict: "A full alternative", text: "This began as the custom night of a game whose player is most likely Michael. He is told what Michael was told, \"You won't die\". The heaviest lines are FNaF4's monsters', and FNaF4's guilty party is the brother, whose victim is then the accuser. The spoken ending tells him the demon is someone else. The cost: \"death cannot save you\" means nothing to a man death never saved." },
      ] },
      "The margin is narrow. Michael strains on one clean line and on a register of damnation too large for what he did. William strains on more lines, each of which has an answer. What is left is a lean: the game's hardest words are a judge's words to a murderer, and no reading of Michael absorbs them.",
      "One rule of the model's makes the roster readable on either reading: its figures are effigies. They call themselves \"remade\" and \"given flesh\", and the roster lists Springtrap and \"Afton\" as separate attackers [[ucn-roster-two-forms-at-once]]. So \"Afton\" on the roster says nothing about who is in the office [[ucn-roster-afton]]. A line shows only what its maker knows of the listener, and no line tells where the Puppet's child or the other four are after the fire.",
      { kind: "figure", image: "ucn-roster-teaser.jpg", caption: "Scott's teaser of the fifty. Springtrap is fifth in the second row, and \"Afton\" third from the right at the bottom.", evidence: "ucn-roster-two-forms-at-once" },
      { kind: "heading", text: "The one you should not have killed" },
      "Some things about the accuser hold whoever is in the office. He is male: \"I have seen him\" [[ucn-withered-chica-toysnhk]], and \"He's here, and always watching\" [[ucn-mangle-toysnhk]]. A rare, distorted child's face appears in the office [[ucn-toysnhk-face]]; Scott called it the face of \"The one you should not have killed\", in a passage saying that the photograph behind it carries no story [[scott-2019-ucn-child-face-jason]]. The player killed him, and he remade the Nightmares. A second voice whispers under the rare lines that refuse release [[ucn-happy-frog-never-rest]], and the model reads it as his.",
      { kind: "figure", image: "ucn-one-you-should-not-have-killed.png", caption: "The rare face. The game prints no caption with it.", evidence: "ucn-toysnhk-face" },
      "Which child, no line says. With Michael in the office he is FNaF4's small brother (see ((bite))). With William there he is one of William's victims. The model leans, at low, to the fifth of the five, the child the yellow bear marks (see ((golden))): \"killed\" then has its plain sense, since no record has William kill the crying child. The last cutscene shows Golden Freddy alone [[ucn-golden-freddy-final-cutscene]], which adds nothing unless ((golden)) is right about the bear. Two things point at FNaF4's child: the accuser remade the Nightmares, which ((nightmares)) reads as what that boy fought, and a hidden coin turns Golden Freddy into Fredbear, the bear that bit him [[ucn-death-coin-fredbear]].",
      { kind: "callout", tone: "note", title: "What is not used here", text: "Fans usually reach the fifth child through a guidebook, which this archive leaves out (see ((canon-rules))). The lean here rests on the two traits named. No game names the accuser, and none is supplied." },
      { kind: "heading", text: "The old man by the lake" },
      "One ending has words, and it is the weakest point of the model's reading. With every machine switched off but {{old-man-consequences}}, a fishing figure from FNaF World, catching a fish takes the player to a lake. The old man says \"Come and sit with me a while\", and then:",
      { kind: "quote", evidence: "ucn-omc-ending" },
      "After that the player can only sink into the lake, and the game closes [[ucn-omc-ending-drowning]]. On its plain sense the line is said to someone who is not the demon. With William Afton in the office it cannot be said to him: the lean needs another listener, can be no firmer than that step, and nothing on screen marks the change.",
      "Two listeners are possible, and the model does not choose. One is the person playing: in his first scene, in FNaF World, the old man speaks to the player about the game itself, \"you have gone too deep into the code\" [[fw-old-man-consequences]]. Here he would be telling whoever holds the controls to stop, which needs no change of listener inside the story and says nothing about the accuser. The other is the accuser, whose voice refuses rest in this game, told to let the demon go: one performer's proverb is about waiting by a river for an enemy's body [[ucn-pigpatch-proverbs]]. Its cost is that the scene opens when the player in the office catches the fish.",
      "Two of the heaviest speakers, Nightmarionne and Jack-O-Chica, come from an edition of FNaF4 that Scott ruled non-canon [[ucn-roster-noncanon-and-fnaf-world]]; the model counts their lines as this game's words. The cartoons between nights are tales (see ((edges))), and one performer warns: \"sometimes, a story's just a story.\" [[ucn-mr-hippo-just-a-story]] What the two voices say about rest is taken up in ((faith)). What later games carry of the killer is told in ((digital)) and ((burntrap)), each at its own grade and not as one history with this night.",
    ],
    counterEvidence: ["ucn-omc-ending", "ucn-scrap-baby-lines", "ucn-nightmare-fredbear-lines", "ucn-circus-baby-lines", "ucn-rockstar-bonnie-truest-friend", "ucn-death-coin-fredbear", "ucn-mr-hippo-just-a-story", "ucn-protagonist-unnamed-killer", "scott-ucn-store-once-again-trapped"],
    tension: "No line names the player [[ucn-protagonist-unnamed-killer]], and the game carries its own warning against over-reading [[ucn-mr-hippo-just-a-story]]. The case for Michael is real. Old Man Consequences tells his listener to leave the demon to his demons [[ucn-omc-ending]], and on its plain sense the listener is not the demon: the model answers by giving the line another listener, and admits that nothing on screen marks one. Scrap Baby repeats what was said to Michael, \"You won't die\" [[ucn-scrap-baby-lines]]. Nightmare Fredbear throws FNaF4's promise at the player [[ucn-nightmare-fredbear-lines]], which with William in the office needs the Nightmares to have been his work first, a step the model rates low. Circus Baby offers the Scooping Room [[ucn-circus-baby-lines]], and Scott's store text has the player \"once again\" trapped in an office [[scott-ucn-store-once-again-trapped]]: each suits a man who has sat in such rooms before, though Sister Location's characters talk about Sister Location to anyone, and the store text is sales copy addressed to the buyer. A stage machine from Pizzeria Simulator greets \"my truest friend\" [[ucn-rockstar-bonnie-truest-friend]], a light pull toward the man who bought it. For the accuser, the coin that turns Golden Freddy into Fredbear [[ucn-death-coin-fredbear]] points at FNaF4's crying child, and the lean to the fifth child is rated low. What is left for William is that the game's hardest words are a judge's words to a murderer. It is a lean, and a narrow one.",
    changesIf: "A line that names the player; a game that shows Michael after the fire, or William anywhere else at that time; or a statement from Scott on this game's standing.",
    seeAlso: ["ffps", "faith", "golden", "bite", "michael", "nightmares", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "scott-2018-interview-ucn-capstone", // [stated] 2018: Ultimate Custom Night was the 'capstone' that 'brought in all of the characters'
      // support
      "ucn-summoned-performers", // [implied] Funtime Foxy & Music Man: 'demanded of me' / 'requested of me'
      "ucn-music-man-eternal", // [stated] Music Man: 'for a long, long time'
      "ucn-toy-chica-dying", // [stated] Toy Chica: 'You won't get tired of dying, will you?'
      "ucn-jack-o-chica-burns-eternal", // [stated] Jack-O-Chica: 'burns eternal and now you shall as well'
      "ucn-nightmarionne-nightmare-you-wont-wake-from", // [stated] Nightmarionne: 'a nightmare that you won't wake from'
      "ucn-withered-bonnie-consequences-of-failure", // [stated] Withered Bonnie: 'face the consequences of your failure'
      "ucn-mangle-take-apart-put-back-together", // [stated] Mangle: 'take-apart-and-put-back-together'
      "ucn-mr-hippo-afterlife-or-dream", // [stated] Mr. Hippo: 'this is my afterlife or my dream'
      "ucn-roster-scrap-baby-controlled-shock", // [stated] Roster text: use 'a controlled shock' on Scrap Baby
      "scott-2018-custom-night-no-cryptic-hints", // [stated] A custom night update 'wouldn't be with teasers and cryptic hints'
      // colour
      "ucn-ballora-lines", // [stated] Ballora: 'strange circumstances that have brought us together'
      "ucn-nightmare-bb-eventually", // [stated] Nightmare Balloon Boy: 'You knew I'd get you eventually.'
      "ucn-omc-ending-scream-audio", // [shown] OMC ending ambience hides a distorted screaming voice
      "ucn-office-ffps-alley-posters", // [shown] UCN office reuses posters from FFPS's back alley
      "ucn-no-light-can-save-you", // [stated] Nightmare Freddy and Nightmare BB: no light can save you now
      "ucn-fredbear-lines", // [implied] Fredbear's distorted lines (wording as reported)
    ],
  },
  {
    id: "faith", part: "reckoning", title: "Rest, and Hell",
    question: "Do the games say where the dead belong?",
    answer: "Yes, in plain words. The Cassette Man's last speech sends the children to rest and his old friend to \"the darkest pit of Hell\". Ultimate Custom Night then has one voice that refuses release and another that says \"Rest your own soul\". Who is being kept, and who is being told to rest, are the model's leans and no firmer.",
    confidence: "medium",
    // REVIEW: the outline (point 3) allows one marked sentence on what the model's lean makes of the two voices. R33, new
    // after the third review, keeps that lean inside the UCN chapter. The sentence here says only what holds on either
    // reading: the voice that keeps the player refuses its own release too (ucn-orville-he-tried-to-release).
    body: [
      "Pizzeria Simulator ends on one long speech (see ((ffps))), in which a man known only as the Cassette Man tells those gathered in a burning building where they are going. Set out by listener, it sorts them.",
      { kind: "table", head: ["Who", "What is said"], rows: [
        ["The \"monsters trapped in the corridors\"", "\"be still and give up your spirits. They don't belong to you.\" [[ffps-completion-give-up-spirits]]"],
        ["All but one: \"most of you\"", "\"I believe there is peace and perhaps more waiting for you after the smoke clears.\" [[ffps-completion-peace-perhaps-more]]"],
        ["The one, an \"old friend\"", "\"the darkest pit of Hell has opened to swallow you whole, so don't keep the Devil waiting\" [[ffps-completion-old-friend-hell]]"],
        ["His daughter, and \"those you have carried in your arms\"", "\"It's time to rest\" [[ffps-completion-rest]]"],
        ["Himself, and the place", "\"I am remaining as well.\" The place \"will not be remembered\" [[ffps-completion-remaining-nearby]]"],
      ] },
      "That is the story's whole moral order, and it arrives late and all at once: rest for the dead children, Hell for one old friend, and for the place itself, forgetting. The old friend is most likely the man who killed them (see ((killer))). The speaker qualifies the kindest of his words with \"I believe\", and nothing in the game shows where anyone goes.",
      "The earlier games had a gentler picture and no words for it. FNaF3 hides a party at which six masked children vanish and leave their masks on the floor [[fnaf3-happiest-day]] (see ((fazbears-fright))). FNaF World's framing voice, which the model uses only as an echo (see ((edges))), ends on a single word: \"Rest.\" [[fw-clock-ending-pieces-in-place]]",
      "After the speech come two voices, both in Ultimate Custom Night. One refuses: \"I will never let you leave. I will never let you rest.\" [[ucn-happy-frog-never-rest]] It says what it is refusing, too: \"He tried to release you. He tried to release us. But I'm not gonna let that happen.\" [[ucn-orville-he-tried-to-release]] The other voice belongs to an old man by a lake.",
      { kind: "quote", evidence: "ucn-omc-ending" },
      "Those are the words as spoken. Who refuses, who is kept and who is told to rest are questions for ((ucn)), which has only leans to offer, with two readings side by side. On either, the voice that keeps the player has turned down its own release as well; the model reads that as vengeance kept up at the cost of rest. The old man's line is no record of a victim offered rest, because who his listener is stays open.",
      "The games go no further. There is no church in them and no doctrine. The vocabulary is small (rest, peace, Hell, the Devil, a demon, souls, spirits), every word of it is put in a character's mouth, and Ultimate Custom Night never says \"Hell\" at all.",
      { kind: "heading", text: "What Scott said" },
      "Scott has spoken about his faith and about these games, and the two are kept apart here. In October 2014, after the first game, an interviewer asked whether his Christianity had found its way into it, with hidden messages such as the animals standing for vices. He answered:",
      { kind: "quote", evidence: "scott-2014-no-hidden-christian-messages" },
      "In the same interview he said that he had spent about twelve years making Christian films and games before it [[scott-2014-christian-projects-before-fnaf]], and gave as his favourite verse Psalm 46:10, which begins \"Be still\" [[scott-2014-favorite-verse-psalm-46-10]]. In 2021 he wrote: \"I'm a Christian.\" [[scott-2021-i-am-a-christian]] The Cassette Man's \"be still\" shares two words with that verse. Scott has never linked them, and the phrase is a common one. This is context for the author. It is evidence for nothing that happens in the story.",
    ],
    counterEvidence: ["scott-2014-no-hidden-christian-messages", "ucn-mr-hippo-just-a-story"],
    tension: "Asked in 2014 whether the first game carried hidden Christian messages, Scott answered \"No\" [[scott-2014-no-hidden-christian-messages]]. The chapter claims none. It reports the words that characters use from Pizzeria Simulator on, which are rest, peace, Hell and the Devil, and the sorting those words make. It reads no allegory into the machines. Ultimate Custom Night also warns against over-reading in its own voice [[ucn-mr-hippo-just-a-story]]. What its two voices mean depends on who is in that office and who is listening, and is no firmer than ((ucn)), which rates both low.",
    changesIf: "A statement from Scott on what the endings of Pizzeria Simulator and Ultimate Custom Night mean, or a change in who the player of Ultimate Custom Night is.",
    seeAlso: ["ffps", "ucn", "fazbears-fright", "golden", "patterns"],
    // Every record with this chapter as its home is cited above.
    further: [],
  },
];
