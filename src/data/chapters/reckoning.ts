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
    answer: "Thirty years after Freddy Fazbear's Pizza closed, a horror attraction built from its relics found the killer still inside the rabbit suit, and then burned down. One of the game's two endings runs through Happiest Day, a hidden party at which six masked children vanish; which ending happened is open. The model tells that party as the release the children were owed, first tried here and not holding: a later game, Pizzeria Simulator, speaks of them as still without rest.",
    confidence: "medium",
    hero: { image: "fnaf3-springtrap-corpse-screen.jpg", caption: "A rare screen from FNaF3: the one real machine at Fazbear's Fright, with what looks like a decayed body inside the suit [[fnaf3-springtrap-corpse-screens]]." },
    body: [
      "FNaF3 opens on a newspaper. A local amusement park is about to open {{fazbears-fright}}, \"a new attraction based on the unsolved mysteries of Freddy Fazbear's Pizza\", featuring \"actual relics from the decades-old pizzeria\" [[fnaf3-coming-soon-newspaper]]. Scott's store page says how long it has been.",
      { kind: "quote", evidence: "scott-2015-fnaf3-store-thirty-years" },
      "The game is set <<thirty years later|printed|scott-2015-fnaf3-store-thirty-years,scottgames-site-fnaf3-source-30-years-later-only-one|Scott Cawthon wrote the store text for the game, and it prints the interval: thirty years after the pizzeria closed its doors. The interval is printed. The closing it counts from has no year, so the date is a distance from an undated event and gives no year. Which of three closings it counts from is not said.>>. The text gives no year and does not say which closing it counts from [[scott-fnaf3-steam-description]]. The model leans to the last, FNaF1's restaurant (see ((timeline-math))).",
      { kind: "heading", text: "The attraction finds one real machine" },
      "On the first two nights {{phone-dude}} phones the guard. His people have been collecting: \"a Foxy head! Which we think could be authentic!\" [[fnaf3-call1-relics-foxy-head]] Someone \"who helped design one of the buildings\" has told them of \"an extra room that got boarded up\" [[fnaf3-call1-boarded-room-lead]]. On the second night he has news.",
      { kind: "quote", evidence: "fnaf3-call2-found-a-real-one", text: "We found one. A real one." },
      "He does not say where: that it came out of the boarded-up room is implied by the lead. The Extras menu names the find {{springtrap}} [[fnaf3-springtrap-name]], and rare screens show what looks like a decayed human body inside the suit [[fnaf3-springtrap-corpse-screens]]. The game never says whose. It is most likely the purple figure who dies in the rabbit suit (see ((springtrap))), and a later game's credits give him a name (see ((killer))).",
      "It is the attraction's only animatronic [[scott-fnaf3-steam-description]]. In play, the burnt mascots that loom up on the cameras and in the office only knock the systems out [[fnaf3-phantom-hallucinations]], and the guard moves the real one about with a clip of Balloon Boy's laugh [[fnaf3-audio-lure-mechanic]]. The caller's warning is that with the ventilation off \"you'll start seeing some crazy stuff\" [[fnaf3-call1-ventilation-hallucinations]].",
      { kind: "heading", text: "A hidden party where six children vanish" },
      "The game's second ending is unlocked by giving cake to a crying child in each of four hidden games [[fnaf3-good-ending-requirements]]. The carriers are never the four mascots the children are tied to: they are Balloon Boy [[fnaf3-bbs-air-adventure]], Toy Chica [[fnaf3-chicas-party]], a yellow bear [[fnaf3-stage01-cake-crying-child]] and a dark rabbit [[fnaf3-shadow-bonnie-minigame]], with a cake that Mangle fetches first [[fnaf3-mangles-quest]] (see ((open))).",
      "A last hidden game is titled \"HAPPIEST DAY\". The player walks a grey child in a Puppet's mask through a party. With every child fed, four grey children wait at the last table in the masks of Freddy, Bonnie, Chica and Foxy. The Puppet-masked child brings a cake, and a fifth child at the end of the table puts on a golden bear's mask. Then all six are gone, the masks are on the floor, and the balloons float up [[fnaf3-happiest-day]].",
      { kind: "figure", image: "fnaf3-happiest-day.png", caption: "Happiest Day in full. At the right, in grey: the masked children and their cake.", evidence: "fnaf3-happiest-day" },
      "The fifth night ends on one of two screens. Without the cake, the heads of Freddy, Foxy, Chica and Bonnie lie with their eyes lit, a fifth head faint behind them, over the caption \"Bad ending.\" [[fnaf3-bad-ending-heads]] With it, the four heads lie with their eyes dark, the fifth is gone, and the caption is \"the end\" [[fnaf3-good-ending-heads]].",
      "This is most likely the ending the first three games were built toward. In a 2018 interview (a transcript) Scott said of FNaF3: \"in my mind, that was the end of a trilogy\" [[scott-2018-interview-fnaf3-end-of-trilogy]]. The model tells Happiest Day as the release that was owed and first attempted, for the five and for a sixth child behind the Puppet's mask (see ((child-outside))). It is a scene of this game: whether it is an event at this point in the story, and which screen happened, is open.",
      { kind: "heading", text: "A later game says they found no rest" },
      "Pizzeria Simulator's hidden tape (see ((ffps))) has the Cassette Man, the voice on that game's tapes, talk about the dead in the machines: \"Small souls trapped in prisons of my making now set to new purpose\" [[ffps-insanity-small-souls-prisons]]. Someone, he says, \"lured them all back. Back to a familiar place. Back with familiar tricks.\" [[ffps-insanity-lured-back]] And: \"He overpowered them again. And he robbed them of the only thing that they had. Again.\" [[ffps-insanity-trap-again]] Those lines can be read as what FNaF3's own minigames show {{shadow-freddy}} and a purple figure do to the four mascots [[fnaf3-eon-shadow-freddy-follow-me]] [[fnaf3-eon-purple-guy-dismantles]] (see ((springtrap))); the tape does not say so. Then comes the line this chapter turns on.",
      { kind: "quote", evidence: "ffps-insanity-tiny-breaths", text: "But they will never find rest now. Not like this." },
      "The tape names no place and no machine. Its small souls are most likely the five: they are in machines the speaker calls his own making, and they were led to a familiar place and overpowered.",
      "At the end of that game the Cassette Man tells the machines he has gathered to give up their spirits [[ffps-completion-give-up-spirits]]. The tape gives the reason the first release did not hold only in outline, in the lines just quoted. The model takes them as the reason and adds no mechanism.",
      { kind: "compare", columns: [
        { title: "It did not hold", verdict: "The model's telling", pick: true, text: "Pizzeria Simulator speaks of small souls still without rest, and shows a row of gravestones only after its own fire [[ffps-lorekeeper-gravestones]]. Happiest Day is the release that was owed, and that fire the one the later games stand on. The cost: no game shows the five between the two." },
        { title: "It held for the five", verdict: "The surviving alternative", text: "The second ending happened and stayed: the eyes go dark and the fifth head is gone. What the trap gathers is something else. Only one of Happiest Day's six is addressed afterwards as still there, the Cassette Man's daughter [[ffps-completion-my-daughter]]. Asked in 2018 (a transcript) which ending happened, Scott said only: \"The answer is very interesting. The answer is complex.\" [[scott-2018-interview-fnaf3-ending-unanswered]] That suits this better than a plain bad ending." },
      ] },
      { kind: "heading", text: "A fire nobody is shown setting" },
      "After the game's hardest night comes another newspaper. Fazbear's Fright has burned to the ground overnight. The paper does not rule out foul play, and puts the fire down to faulty wiring [[fnaf3-it-burns-newspaper]]. Nobody is shown setting it, and no record says that anyone meant it to end anything.",
      { kind: "figure", image: "fnaf3-it-burns.jpg", caption: "\"IT BURNS!\" Brightened, the photograph beside the report shows part of Springtrap's head behind the Freddy figure [[fnaf3-it-burns-springtrap-hidden]].", evidence: "fnaf3-it-burns-newspaper" },
      "The story picks up in front of the wreck (see ((michael))): before a burnt building whose sign still reads, in part, as the attraction's, a rabbit-eared figure steps out of the dark [[sl-golden-freddy-cutscene-springtrap]]. Where that leads is told in ((ffps)).",
    ],
    counterEvidence: ["fnaf3-good-ending-heads", "scott-2018-interview-fnaf3-ending-unanswered", "ucn-orville-he-tried-to-release"],
    tension: "FNaF3's own second screen shows the heads with their eyes dark and the fifth head gone [[fnaf3-good-ending-heads]]: inside that game, the children leave. But a later game, which Scott said in 2018 (a transcript) existed \"just to resolve some plot points\" [[scott-2018-interview-ffps-made-to-resolve-plot-points]], speaks of small souls still without rest and shows the graves only after its own fire. Three gaps remain: no record says when the stones were set, no game shows the five between the attraction and the trap, and one voice, most likely after that fire, still refuses release [[ucn-orville-he-tried-to-release]]. Asked in the same interview which ending happened, Scott did not say [[scott-2018-interview-fnaf3-ending-unanswered]]: his words are in the box above.",
    changesIf: "A statement from Scott on which FNaF3 ending happened, or a game that shows the five between Fazbear's Fright and Pizzeria Simulator.",
    seeAlso: ["springtrap", "golden", "michael", "ffps", "salvage", "timeline-math", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf3-office-box-toy-heads", // [shown] The office's box of relics holds the heads of the 1987 cast
      "scott-2015-fnaf3-multiple-springtraps-hallucinations", // [stated] Scott: extra Springtraps on the cameras are hallucinations
      "fnaf3-guard-unnamed", // [implied] FNaF3 never names its guard
      "scottgames-site-fnaf3-parts-box", // [shown] FNaF3 teaser: box of old animatronic parts
      "scottgames-site-fnaf3-all-in-your-mind", // [shown] FNaF3 teaser: 'It's all in your mind.'
      "scott-2015-fnaf3-store-owners-revive-the-legend", // [stated] FNaF3 Steam description: 'the owners' of Fazbear's Fright 'are determined to revive the legend'
      // colour
      "fnaf3-call1-attraction-opens", // [stated] The attraction's caller: it opens in a week; the guard is part of the show
    ],
  },
  {
    id: "ffps", part: "reckoning", title: "The trap and the fire",
    question: "What was Pizzeria Simulator's pizzeria for, and did the fire work?",
    answer: "It was bait. The Cassette Man called four haunted machines into one building and stayed as it burned; the game presents that fire as the end, and shows six graves after it. The later games reopen it: the company comes back, a ruined pizzeria with the same sign lies under its Mega Pizzaplex, and one voice refuses release.",
    confidence: "medium",
    hero: { image: "ffps-completion-pizza-place-condemned.png", caption: "A slide from Pizzeria Simulator's ending: a building signed \"Freddy Fazbear's Pizza Place\", still standing, with a notice across its door that reads \"CONDEMNED\" [[ffps-completion-slide-pizza-place-condemned]]." },
    body: [
      "Pizzeria Simulator begins as a joke. An 8-bit Freddy throws pizzas to children, and in the fourth round the game breaks up and cuts to a dark room and a wrecked machine slumped across a table [[ffps-intro-fake-8bit-tycoon]]. A tape is playing. \"If you are playing this tape\", it says, the listener has found something that meets \"the criteria of your special obligations under Paragraph 4\" [[ffps-cassette-intro-paragraph-4]].",
      "Then the game hides what it has just shown. The player is a new {{fazbear-entertainment}} franchisee with a small pizzeria to run [[ffps-tutorial-franchisee]]. After the first day a tape sets him a second job: machines turn up in the alley behind \"quite often\", it says, and \"we aren't sure why\"; keeping one risks death [[ffps-salvage-first-tape-alley]]. When he turns one down, the game's instructor voice, {{tutorial-unit}}, reminds him of Saturday's party [[ffps-tutorial-saturday-party]]: \"you want them all to be in one place!\" [[ffps-tutorial-all-in-one-place]]",
      "Four come: {{william-afton}}, his daughter, and most likely the remains of his other machines and the Puppet (see ((salvage))).",
      { kind: "heading", text: "The plan, in his own words" },
      "The only name the games give the voice on the tapes is {{cassette-man}}: a role in a credits list [[ffps-credits-cassette-man]]. In a hidden ending the office monitor shows three blueprints while his hidden tape plays [[ffps-insanity-egg-baby-trigger]] [[ffps-insanity-new-way-to-desecrate]]. He speaks of \"this monster that I unwillingly helped to create\" [[ffps-insanity-monster-helped-create]], and means to heal \"a wound first inflicted on me, but then one that I let bleed out to cause all of this\" [[ffps-insanity-wound-first-inflicted]]. The model reads the wound as his daughter's death (see ((child-outside))). The tape ends on how.",
      { kind: "quote", evidence: "ffps-insanity-tape-call-them-back" },
      "The model reads two of the blueprints as the means. Both are marked Fazbear Entertainment, Inc. One is a bear whose name spells out its job, \"L.ure E.ncapsulate F.use T.ransport & E.xtract\" [[ffps-lefte-blueprint]]. The other is a unit kept at body temperature, \"to remain at 98.6\", with sound fed from a central server [[ffps-rasc-blueprint]] [[ffps-rasc-audio-central-server]]: bait, warm and noisy, for the machines to hunt. The third sheet is Afton Robotics' [[ffps-scup-blueprint]] (see ((remnant))).",
      { kind: "figure", image: "ffps-insanity-lefte-blueprint.png", caption: "The bear's blueprint, from the hidden ending. The mark at the foot is Fazbear Entertainment, Inc.", evidence: "ffps-lefte-blueprint" },
      { kind: "heading", text: "The franchisee is most likely Michael" },
      "The franchisee is never named and never speaks. He is most likely {{michael-afton}}, and the best evidence is what the Cassette Man says to him at the end. He \"somehow found this job listing not intended for you\" [[ffps-completion-brave-volunteer]], and although \"there was a way out planned for you\", the Cassette Man's guess is that he would rather stay [[ffps-completion-right-where-you-want-to-be]]. Michael's last words in Sister Location were \"I'm going to come find you.\" [[sl-golden-freddy-cutscene-come-find-you]]",
      "Two echoes point the same way. Michael had said \"They didn't recognize me at first, but then... they thought I was you.\" [[sl-golden-freddy-cutscene-they-thought-i-was-you]] The rabbit now says \"You may not recognize me at first, but I assure you, it's still me.\" [[ffps-scraptrap-still-me]] And Michael's \"just like you asked me to\" [[sl-golden-freddy-cutscene-put-her-back-together]] comes back turned round from {{scrap-baby}}, what is left of Circus Baby (see ((salvage))): \"just like he asked you to\" [[ffps-scrap-baby-completion-monologue]]. But that one fits any employee who followed the tapes.",
      "Her other lines pull both ways: \"You're not who I expected to see...\" [[ffps-scrap-baby-not-expected]], and \"You should've known I'd find you.\" [[ffps-scrap-baby-should-have-known]] The first is the line for the other reading, an outsider nobody planned for. The model keeps Michael because the rabbit's line wants a listener who knew the speaker, and because the Cassette Man takes the volunteer for someone who wants to be there.",
      { kind: "heading", text: "Saturday: he speaks, and it burns" },
      "On Saturday the four are inside. Scrap Baby speaks first: the job, she says, \"was a gift, for us\" [[ffps-scrap-baby-played-into-our-hands]], and she promises to make her father proud (see ((salvage))). A man's voice cuts across hers.",
      { kind: "quote", evidence: "ffps-completion-connection-terminated-elizabeth", text: "Connection terminated. I'm sorry to interrupt you, Elizabeth, if you still even remember that name, but I'm afraid you've been misinformed." },
      "This is where the games give her that name. She is not there for a gift, he tells her, \"nor have you been called here by the individual you assume\" [[ffps-completion-not-called-by-who-you-assume]]. Then he speaks to all four.",
      { kind: "quote", evidence: "ffps-completion-labyrinth" },
      "They have been chasing \"the cries of children in some unseen chamber\", he says, and will never find them [[ffps-completion-chasing-cries]]. After his words to the volunteer he says where he will be himself: \"I am remaining as well. I am nearby.\" [[ffps-completion-remaining-nearby]]",
      "To the \"monsters trapped in the corridors\" he says: \"be still and give up your spirits. They don't belong to you.\" [[ffps-completion-give-up-spirits]] Then: \"For most of you, I believe there is peace and perhaps more waiting for you after the smoke clears.\" [[ffps-completion-peace-perhaps-more]] The exception follows at once.",
      { kind: "quote", evidence: "ffps-completion-old-friend-hell" },
      "The old friend is not named. He is most likely William Afton (see ((killer))), the \"monster\" of the hidden tape [[ffps-insanity-monster-helped-create]]. The last words are for a daughter he hopes can hear him (see ((child-outside))): \"My daughter, if you can hear me, I knew you would return as well.\" [[ffps-completion-my-daughter]]",
      { kind: "quote", evidence: "ffps-completion-rest" },
      "The fire breaks out during the speech, and three of the salvaged machines are shown burning [[ffps-completion-fire]]. The game does not show who lights it, or whether the volunteer takes his way out. A note on the Afton Robotics sheet says that overheating \"might neutralize the effects permanently\" [[ffps-scup-overheating-neutralize]]. The model reads the choice of fire against that note; no record says he had it in mind.",
      { kind: "figure", image: "ffps-completion-three-machines-burning.jpg", caption: "Three shots from the Completion ending, in the order shown: Scrap Baby, Molten Freddy and the salvaged rabbit among flames.", evidence: "ffps-completion-fire" },
      "By the game's own account this is the end. The instructor returns to say that the job \"wasn't presented to you in a completely honest fashion\", and that Fazbear Entertainment is \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]]. The achievement reads \"Trapped them all.\" [[ffps-completion-achievement]] After the credits, for a player who has finished the three hidden minigames, comes one more picture: six gravestones, under the words \"THE END\" [[ffps-lorekeeper-gravestones]] [[ffps-lorekeeper-hill-stone]].",
      { kind: "figure", image: "ffps-lorekeeper-the-end.jpg", caption: "Shown after the credits: four named stones (Gabriel, Fritz, Susie, Jeremy), a fifth behind the grass at the right, and a sixth alone on the hill.", evidence: "ffps-lorekeeper-gravestones" },
      "The fire most likely frees the children: that is the game's framing, and nothing shows it. The speech rests it on two words, \"I believe\" [[ffps-completion-peace-perhaps-more]], and the game shows the graves only after its fire. It does not say who the names on them are, or when the stones were set (see ((golden))).",
      { kind: "heading", text: "What the later games reopen" },
      "The Pizzaplex of Security Breach, a Fazbear Entertainment building, stands over a ruined pizzeria whose sign reads \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]]. So, most likely, a Fazbear Entertainment trades on after the fire (see ((cover-story))), and the ruin is this building (see ((burntrap))). In Help Wanted, a tape says the game's client sent old circuit boards to be scanned into it [[hw-tape-05]] (see ((digital))). That the scan came after this fire is the model's convention: no record places one against the other. And in Ultimate Custom Night one voice refuses release [[ucn-orville-he-tried-to-release]].",
      "The salvaged rabbit is among the machines shown burning [[ffps-completion-fire]], and the game presents that fire as William Afton's end. His image returns in later games, in the company's code [[hw-rabbit-figure-appearance]] and under its Mega Pizzaplex [[security-breach-burntrap-appearance]] (see ((digital)) and ((burntrap))). Whom the refusing voice holds is not settled (see ((ucn))).",
      "Fire, in this story, is one man's answer, given once. It half works.",
    ],
    counterEvidence: ["ffps-completion-achievement", "ffps-scrap-baby-not-expected", "ffps-completion-tutorial-atonement"],
    tension: "The game itself calls the ending final: the achievement reads \"Trapped them all.\" [[ffps-completion-achievement]], and the last screen says \"THE END\" over six graves [[ffps-lorekeeper-hill-stone]]. What later games reopen is counted in the last section, at unequal firmness: a company that this game's closing message calls \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]] trades again, a pizzeria with the same sign lies under its Mega Pizzaplex, and one voice refuses release. The killer's image returns too; what, if anything, of the man persists is argued in other chapters, each with its own marker, and the model does not tell those as one history. Scrap Baby's line for an outsider, weighed above, stays against the franchisee being Michael [[ffps-scrap-baby-not-expected]].",
    changesIf: "A game that shows the five still bound after this fire, names the franchisee, or shows who lit it.",
    seeAlso: ["salvage", "michael", "child-outside", "ucn", "faith", "cover-story", "remnant", "burntrap"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "ffps-completion-story-ends", // [stated] Completion: 'This is where your story ends.'
      "scott-2018-interview-ffps-made-to-resolve-plot-points", // [stated] 2018: Pizzeria Simulator existed 'just to resolve some plot points' (cited in fazbears-fright)
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
      "ffps-scraptrap-deceptive-calling", // [stated] The rabbit knew the 'calling' was a lie
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
    answer: "The killer, in what is left of his rabbit suit, and his daughter, in what is left of Circus Baby; and, most likely, the rest of the Sister Location machines, fused into one that the game calls Molten Freddy, and the Puppet, inside a bear built to catch it. The five children are most likely among what answers the call. Which machine holds them is not stated, and the model does not say.",
    confidence: "medium",
    hero: { image: "ffps-scraptrap-alley.jpg", caption: "A rare screen from Pizzeria Simulator's back alley: the salvaged rabbit, its suit torn open over reddish strands and a pale, bony hand [[ffps-scraptrap-alley-remains]]." },
    body: [
      "Behind Pizzeria Simulator's pizzeria is an alley, and on four nights of the week something has been left in it. From the second night the tape that goes with it begins: \"Before you is an animatronic found in the back alley, we are unsure of its origins.\" [[ffps-salvage-origins-unknown]] Four come, always in the same order [[ffps-salvage-order]], and all the game says of where they have been is that it does not know.",
      { kind: "table", head: ["The machine", "Who is in it", "How the game says so"], rows: [
        ["{{molten-freddy}}, a mound of wire and loose eyes", "What is left of the Sister Location machines, most likely", "Its body, its voice and its lines"],
        ["The salvaged rabbit", "{{william-afton}}", "The credits give his voice that name [[ffps-credits-william-afton]]"],
        ["{{scrap-baby}}, what is left of Circus Baby", "{{elizabeth-afton}}", "The Cassette Man, the voice on the game's tapes, calls her that [[ffps-completion-connection-terminated-elizabeth]]"],
        ["{{lefty}}, a bear", "The Puppet, most likely", "A blueprint, a bracelet code and a lullaby"],
      ] },
      { kind: "heading", text: "The killer comes, and so does his daughter" },
      "The credits give the voice of {{scraptrap}} a name: William Afton [[ffps-credits-william-afton]] (Scott's guide adds \"AKA Scraptrap\") [[scott-ucn-character-guide-afton]]. He talks like a man returning: \"I always come back.\" [[ffps-scraptrap-always-come-back]] His head and body are shaped differently from the rabbit that Fazbear's Fright found [[ffps-scraptrap-alley-remains]], and the model reads his own line, \"it's still me\" [[ffps-scraptrap-still-me]], as saying so. In the archive's records the game never prints \"Springtrap\". This is most likely the same rabbit, come out of the attraction's fire (see ((killer))).",
      "Scrap Baby has a toothed claw where her right hand should be [[ffps-scrap-baby-alley-claw]]. She is most likely the girl Circus Baby took, its maker's own daughter (see ((funtimes))). She speaks as if the call were her father's: \"I will make you proud, daddy!\" [[ffps-scrap-baby-make-you-proud-daddy]] The model reads the \"little souls\" she speaks of [[ffps-scrap-baby-completion-monologue]] as the children she expects at Saturday's party [[ffps-tutorial-saturday-party]], and as evidence of nothing else.",
      { kind: "heading", text: "The one that is many" },
      "Molten Freddy's body is a mound of tangled wire with loose eyeballs in it, under a rusted bear's face [[ffps-molten-freddy-alley-wires-eyes]]. The last of Sister Location's walking cutscenes shows a body heave just such a mass, wires and eyes, into a sewer [[sl-custom-night-ennard-ejected]]. Its voice actor is Funtime Freddy's, as Scrap Baby's is Baby's [[ffps-credits-returning-voices]]. And what it says is a reunion.",
      { kind: "quote", evidence: "ffps-molten-freddy-lines", text: "Together aga-ain! / One bi-i-ig happy family!" },
      "That is the case for reading it as what is left of {{ennard}}, the one body the Sister Location machines made of themselves (see ((michael))), after Baby was put out of it. In 2017 the page source of Scott's two websites gained a dialogue, a line at a time, that reads as that step. A group tells one voice \"We found a way to eject you.\" [[scottgames-site-2017-source-ejection-dialogue-group]], and the one voice ends \"I can put myself back together.\" [[scottgames-site-2017-fnafworld-source-ejection-dialogue-one]] No speaker is named.",
      { kind: "figure", image: "ffps-molten-freddy-alley.jpg", caption: "Molten Freddy from above: wire, loose eyes, and a bear's face built from separate plates.", evidence: "ffps-molten-freddy-alley-wires-eyes" },
      { kind: "heading", text: "A trap inside the trap" },
      "Lefty is not wreckage. It is a device, and its blueprint is one of the three the office monitor shows in the hidden ending.",
      { kind: "quote", evidence: "ffps-lefte-blueprint", text: "L.ure E.ncapsulate F.use T.ransport & E.xtract" },
      "One labelled part emits a bracelet code for a \"security receiver\" [[ffps-lefte-blueprint]]. Another uses a lullaby, and its note ends \"Behavior upon suit-seal not guaranteed.\" [[ffps-lefte-suit-seal]] The sheet is marked Fazbear Entertainment, Inc, and names no target. One machine in these games answers to a child's bracelet and a music box: the Puppet, set in one of this game's minigames to guard a child with a green bracelet [[ffps-security-puppet-assignment]]. Ultimate Custom Night's roster text has Lefty calmed by the music box too [[ucn-roster-lefty-music-box]]. That is the case for the Puppet inside, and with it the child the Cassette Man calls his daughter (see ((child-outside))).",
      { kind: "figure", image: "ffps-lefty-alley-rare-screen.jpg", caption: "Lefty in a rare screen from the alley. Black and white stripes show at its shoulder, just left of centre, small enough to be a flaw in the picture.", evidence: "ffps-lefty-alley-puppet-arm" },
      { kind: "heading", text: "Where the five are, and the stretch not shown" },
      "None of the four is one of the mascots the five children were tied to: those were taken apart long before (see ((springtrap))). This is all the games give.",
      { kind: "table", head: ["When", "Where the five are", "How firm"], rows: [
        ["From the murders to FNaF1", "Four in Freddy, Bonnie, Chica and Foxy; the yellow bear marks the fifth [[fnaf2-give-gifts-give-life]]", "Most likely (see ((golden)))"],
        ["The dismantling", "Out of the machines: five grey, crying children corner the killer [[fnaf3-n5-ghosts-safe-room]] and fade when the suit closes on him [[fnaf3-n5-springlock-death]]", "Shown. That they are the five is the model's reading (see ((springtrap))). No release is read into the fading"],
        ["From the room with the suit to the alley", "Not shown. One man's account: lured back, overpowered, robbed \"again\" [[ffps-insanity-trap-again]], \"set to new purpose\" [[ffps-insanity-small-souls-prisons]]", "Stated, in general terms"],
        ["Fazbear's Fright", "Children are given cake, and at a hidden party six of them vanish [[fnaf3-happiest-day]]", "A scene. Whether an event: open (see ((fazbears-fright)))"],
        ["The call", "Among what answers it: \"I have to call them all back\" [[ffps-insanity-tape-call-them-back]]; \"give up your spirits\" [[ffps-completion-give-up-spirits]]", "Most likely. Which machine: not stated"],
        ["The fire", "Told as their release: \"I believe there is peace\" [[ffps-completion-peace-perhaps-more]]", "Most likely, on that game's framing (see ((ffps)))"],
        ["Ultimate Custom Night", "One voice refuses release [[ucn-orville-he-tried-to-release]]", "Stated, and most likely after the fire. Whose voice, and whom it holds: not settled (see ((ucn)))"],
      ] },
      "Four machines come for five children, and nothing explains the count.",
      { kind: "compare", columns: [
        { title: "Among what comes", verdict: "The model's telling", pick: true, text: "The Cassette Man's call is for \"All of them. Together in one place\" [[ffps-insanity-tape-call-them-back]], and he tells the machines that their spirits \"don't belong to you\" [[ffps-completion-give-up-spirits]]. That puts the five there. In which machine, no record says, and the model does not." },
        { title: "In Molten Freddy", verdict: "A candidate, no more", text: "It is the one salvage that is many: loose eyes, a reunion, a group's voice in Scott's page source. A tale told in the pizzeria, of five kittens pieced into one, points the same way as a parable [[ffps-candy-cadet-five-kittens]]. But it speaks as one, \"I'-Im here!\" [[ffps-molten-freddy-knock-knock]], and no record carries anything from the old mascots into the Sister Location machines." },
        { title: "In the Puppet's keeping", verdict: "A candidate, no more", text: "The Cassette Man remembers \"the way you lifted others into yours\" [[ffps-completion-shut-out]], and tells his daughter it is time to rest, for her and for \"those you have carried in your arms\" [[ffps-completion-rest]]. But \"carried\" need mean no more than the masks she once gave four grey, dead-looking children (see ((golden)))." },
      ] },
      "What the Cassette Man did with the four is told in ((ffps)), and what one voice did, most likely afterwards, in ((ucn)).",
    ],
    counterEvidence: ["ffps-salvage-origins-unknown", "fnaf3-good-ending-heads"],
    tension: "In the archive's records Pizzeria Simulator never says \"Ennard\", and its tapes say only that things turn up in the alley \"quite often\" and that \"we aren't sure why\" [[ffps-salvage-first-tape-alley]], and of the later three, \"we are unsure of its origins\" [[ffps-salvage-origins-unknown]]: Molten Freddy's past is read from its body, its voice actor, its lines and a dialogue Scott published outside the game. The Puppet inside Lefty is read from a blueprint that names no target. And nothing says where the five are: if FNaF3's second ending held [[fnaf3-good-ending-heads]], they are in nothing, and what the trap gathers is something else. The model keeps them among what answers the call because the Cassette Man speaks of small souls lured back and overpowered, which can be read as what FNaF3 shows done to the four mascots, and because he means to give them rest. It does not explain how four machines answer for five children: that is the weakest join in this part, and it is marked not shown wherever it appears.",
    changesIf: "A game that shows what became of the four dismantled machines' occupants between the room with the suit and the alley.",
    seeAlso: ["ffps", "killer", "funtimes", "michael", "child-outside", "fazbears-fright", "golden", "burntrap"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "ffps-scraptrap-fascinating", // [stated] The rabbit: 'Fascinating, what they have become' and 'a promise'
      "scottgames-site-2017-fnafworld-iamstillhere-eyes", // [shown] fnafworld.com, June 2017: two green eyes, file name 'Iamstillhere.jpg'
      "ucn-lefty-lines", // [stated] Lefty: 'come spend eternity inside with me'
      "ffps-lefty-shh", // [stated] Lefty only shushes in FFPS
      "ffps-lefty-rare-finds-five-dollars", // [shown] Lefty is also for sale: $5, liability 9
      "scottgames-site-sl-little-of-me", // [shown] SL teaser: 'There's a little of me in every body.' (Ennard)
    ],
  },
  {
    id: "ucn", part: "reckoning", title: "The night without end",
    question: "Who is the player in Ultimate Custom Night, and who is \"the one you should not have killed\"?",
    answer: "No line names the player. The model leans to William Afton, kept after the fire by one of his victims in a night that does not end, and it is no more than a lean: Michael is the full alternative, behind by a narrow margin. \"The one you should not have killed\" is a child the player killed, who on the model's reading runs the night; which child, the records do not settle.",
    confidence: "low",
    hero: { image: "ucn-golden-freddy-final-cutscene.jpg", caption: "Ultimate Custom Night's last cutscene has no words: Golden Freddy, in the shape he had in the first game, twitches alone in the dark and fades [[ucn-golden-freddy-final-cutscene]]." },
    body: [
      "Ultimate Custom Night is one office and fifty machines to set against it [[ucn-roster-includes-ffps-four]]. What story it has is in voices: Scott wrote that most of its characters \"only say something if (when) they kill you\" [[scott-2018-ucn-voice-lines-when-they-kill-you]]. The player dies, and whatever killed him says a line. Several of the lines name the same person.",
      { kind: "quote", evidence: "ucn-nightmare-freddy-toysnhk" },
      "So the player has killed someone, and the speaker is that someone's work. No line gives the player a name [[ucn-protagonist-unnamed-killer]].",
      "This archive has found no ruling of Scott's on whether this game counts. It began as \"an Ultimate Custom Night for Pizzeria Simulator\" [[scott-2018-ucn-for-pizzeria-simulator]], and his one precedent put a custom night's play outside the story and its cutscenes inside [[scott-2016-sl-custom-night-not-canon]] [[scott-2016-cutscenes-are-canon]]. These lines are spoken in play, so the model goes a step beyond him in counting them as text (see ((canon-rules))). Everything below depends on that step.",
      { kind: "heading", text: "A voice that will not let him go" },
      "Pizzeria Simulator ends with the Cassette Man, the voice on its tapes, sending one man to \"the darkest pit of Hell\" [[ffps-completion-old-friend-hell]] and leaving another, a volunteer, \"a way out planned\" [[ffps-completion-right-where-you-want-to-be]]. They are most likely William Afton and his son Michael (see ((ffps))). The two readings put one or the other in this office, most likely after that fire. In the archive's records this game never says \"Hell\". One speaker calls the place \"this new prison\" [[ucn-withered-bonnie-prison]], another tells the player \"you're dead\" [[ucn-mr-hippo-youre-dead]], and one rare line says why he is still there.",
      { kind: "quote", evidence: "ucn-orville-he-tried-to-release" },
      "\"He\" is not named [[ucn-orville-he-tried-to-release]]; the line implies the Cassette Man, whose fire was meant as a release. So nothing shows this to be the Hell his speech promised: the speaker holds the player here against that release.",
      { kind: "heading", text: "The lines pull both ways" },
      "Most lines fit either man. These are the ones that pull, and they are not votes: one clean line can outweigh several that have answers.",
      { kind: "table", head: ["The line", "Fits", "Why"], rows: [
        ["Nightmarionne: \"This t-time, death cannot save you-u-u.\" [[ucn-nightmarionne-lines]]", "William", "Death saved him once: the ghosts faded when the suit closed on him [[fnaf3-n5-springlock-death]]. It never saved Michael. The speaker is from an edition of FNaF4 that Scott ruled non-canon [[ucn-roster-noncanon-and-fnaf-world]]."],
        ["Nightmare: \"I AM YOUR WICKEDNESS... MADE OF FLESH.\" [[ucn-nightmare-lines]] \"YOU WILL NOT BE SPARED. YOU WILL NOT BE SAVED.\" [[ucn-nightmare-not-spared-not-saved]]", "William", "The register of damnation. It describes a career better than one cruel prank."],
        ["Old Man Consequences, a fishing figure from FNaF World: \"Leave the demon to his demons.\" [[ucn-omc-ending]]", "Michael", "On its plain sense the listener is not the demon."],
        ["Scrap Baby: \"You won't die, but you'll wish you could.\" [[ucn-scrap-baby-lines]] Nightmare Freddy: \"a victim that can't perish\" [[ucn-nightmare-freddy-cant-perish]]", "Michael", "The words a voice speaks over Michael's fallen body in Sister Location [[sl-you-wont-die]] (see ((michael))). But the rabbit's own line is \"I always come back.\" [[ucn-afton-always-come-back]]"],
        ["Nightmare Fredbear: \"Let me put you back together, then take you apart all over again.\" \"This time, there is more than an illusion to fear.\" [[ucn-nightmare-fredbear-lines]]", "Michael", "FNaF4's closing promise [[fnaf4-i-will-put-you-back-together]], turned on that game's guilty party, the brother (see ((bite))). It also tells him he is no friend of theirs."],
        ["The Puppet: \"I don't hate you, but you need to stay out of my way.\" [[ucn-puppet-lines]]", "Michael", "Easier said to Michael than to her murderer."],
        ["Orville Elephant, one of the roster: \"He tried to release you.\" [[ucn-orville-he-tried-to-release]]", "Either", "It suits the volunteer with a way out planned at least as well as the man sent to the Devil."],
      ] },
      { kind: "compare", columns: [
        { title: "William Afton", verdict: "The model's lean", pick: true, text: "On this reading the killer died in the fire, and one of his victims keeps him. The game speaks of his wickedness and \"your misdeeds\" [[ucn-jack-o-chica-toysnhk]], and it tells a man death once saved that death cannot save him now. The cost: every Michael row above needs an answer, the old man's most of all." },
        { title: "Michael", verdict: "A full alternative", text: "On this reading the volunteer stayed in the fire, and this night, which began as his game's custom night, is his. He is told what Michael was told. One of FNaF4's monsters calls itself \"remade, but not by you\" [[ucn-nightmare-freddy-toysnhk]], another says there is more than an illusion to fear \"This time\" [[ucn-nightmare-fredbear-lines]], and both turn on FNaF4's guilty party. The one he should not have killed is the small brother whose death he caused and did not mean. \"He tried to release you\" [[ucn-orville-he-tried-to-release]] is the way out planned for him, and the Puppet does not hate him. The spoken ending says the demon is someone else and that he may rest: Hell for the father, rest for the son. The cost: the two William rows above." },
      ] },
      "The margin is narrow. Each line that strains the William reading has an answer, and some of the answers are weak. The two that strain the Michael reading, the rows on death and on wickedness, have none. That is the whole of the lean: the game's hardest words are a judge's words to a murderer, and no reading of Michael absorbs them.",
      "On either reading the model treats the roster's figures as effigies. One calls itself \"remade\" [[ucn-nightmare-freddy-toysnhk]] and \"given flesh\" [[ucn-nightmare-freddy-cant-perish]], and the roster lists Springtrap and \"Afton\" as separate attackers [[ucn-roster-two-forms-at-once]], so \"Afton\" on the roster says nothing about who is in the office [[ucn-roster-afton]]. A line shows only what its maker knows of the listener, and none tells where the Puppet's child or the other four are after the fire.",
      { kind: "figure", image: "ucn-roster-teaser.jpg", caption: "Scott's teaser of the fifty: Springtrap fifth in the second row, \"Afton\" third from the right at the bottom.", evidence: "ucn-roster-two-forms-at-once" },
      { kind: "heading", text: "The one you should not have killed" },
      "Call the one the player should not have killed the accuser. Some things about him hold whoever is in the office. He is male: \"I have seen him\" [[ucn-withered-chica-toysnhk]] [[ucn-mangle-toysnhk]]. A rare, distorted child's face appears in the office [[ucn-toysnhk-face]], and Scott called it the face of \"The one you should not have killed\" [[scott-2019-ucn-child-face-jason]]. A second voice whispers under the rare lines that refuse release [[ucn-happy-frog-never-rest]], and the model reads it as his.",
      { kind: "figure", image: "ucn-one-you-should-not-have-killed.png", caption: "The rare face. The game prints no caption with it.", evidence: "ucn-toysnhk-face" },
      "No line says which child. With Michael in the office he is FNaF4's crying child (see ((bite))). With William there he is one of William's victims. The model leans to the fifth of the five missing children, the one the yellow bear marks (see ((golden))), because no record has William kill the crying child. The last cutscene shows Golden Freddy alone [[ucn-golden-freddy-final-cutscene]], which adds nothing unless that reading of the bear is right. Against the lean, a child in a golden mask vanishes with the others at FNaF3's hidden party [[fnaf3-happiest-day]]: if that happened, the fifth child was gone before this night. And two things point at FNaF4's child. One of the Nightmares, read in ((nightmares)) as what he fought, says the accuser remade it [[ucn-nightmare-freddy-toysnhk]]. A coin spent on Golden Freddy brings the attack of Fredbear, the bear that bit him [[ucn-death-coin-fredbear]], and no text explains it.",
      { kind: "callout", tone: "note", title: "What is not used here", text: "Fans usually reach the fifth child through a tie-in book, which this archive leaves out (see ((canon-rules))). No game names the accuser, and none is supplied." },
      { kind: "heading", text: "The weakest point: the old man's line" },
      "One hidden ending has words, and it is the weakest point of the model's reading. With only {{old-man-consequences}} switched on, catching a fish takes the player to his lake, where he says:",
      { kind: "quote", evidence: "ucn-omc-ending" },
      "With William Afton in the office that cannot be said to him. The lean needs another listener, can be no firmer than that step, and nothing on screen marks the change.",
      "Two listeners are possible, and the model does not choose. One is the person playing. In his first scene, in FNaF World, the old man tells the player \"you have gone too deep into the code\" [[fw-old-man-consequences]]; here the player can only sink into the lake before the game closes [[ucn-omc-ending-drowning]]. That needs no change of listener inside the story, and says nothing about the accuser. The other is the accuser, whose voice the model reads as the one that refuses rest in this game, told to let the demon go. One of the roster, Pigpatch, has a proverb that fits, about sitting by a river until an enemy's body floats by [[ucn-pigpatch-proverbs]]. But the scene opens when the player in the office catches the fish.",
      "The cartoons between nights are tales (see ((edges))), and another of the roster, Mr. Hippo, warns: \"sometimes, a story's just a story.\" [[ucn-mr-hippo-just-a-story]] What the two voices say about rest is told in ((faith)). What later games show of the killer is told in ((digital)) and ((burntrap)), and not as one history with this night.",
    ],
    counterEvidence: ["ucn-omc-ending", "ucn-scrap-baby-lines", "ucn-nightmare-freddy-cant-perish", "ucn-nightmare-fredbear-lines", "ucn-puppet-lines", "ucn-orville-he-tried-to-release", "ucn-circus-baby-lines", "ucn-rockstar-bonnie-truest-friend", "scott-ucn-store-once-again-trapped", "ucn-death-coin-fredbear", "fnaf3-happiest-day", "ucn-mr-hippo-just-a-story", "ucn-protagonist-unnamed-killer"],
    tension: "No line names the player [[ucn-protagonist-unnamed-killer]], and the game carries its own warning against over-reading [[ucn-mr-hippo-just-a-story]]. The old man's line [[ucn-omc-ending]] is the model's weakest point, as the last section says. The model's only answer to \"You won't die\" [[ucn-scrap-baby-lines]] and \"a victim that can't perish\" [[ucn-nightmare-freddy-cant-perish]] is the rabbit's own boast [[ucn-afton-always-come-back]]. Nightmare Fredbear's line [[ucn-nightmare-fredbear-lines]] needs the Nightmares to have been William's work first, a step the model rates low. Against the Puppet's line [[ucn-puppet-lines]], the same figure is \"not afraid of you... not anymore\". \"He tried to release you\" [[ucn-orville-he-tried-to-release]] suits either man. Three lighter pulls go Michael's way. Circus Baby offers the Scooping Room [[ucn-circus-baby-lines]], though Sister Location's characters talk about Sister Location to anyone. A stage machine from Pizzeria Simulator's catalogue [[ffps-catalog-rockstar-bonnie]] greets \"my truest friend\" [[ucn-rockstar-bonnie-truest-friend]]. Scott's store text, sales copy addressed to the buyer, has the player \"once again\" trapped in an office [[scott-ucn-store-once-again-trapped]]. Against the lean to the fifth child, rated low, stand the coin [[ucn-death-coin-fredbear]] and the golden mask at FNaF3's hidden party [[fnaf3-happiest-day]].",
    changesIf: "A line that names the player; a game that shows Michael after the fire, or William anywhere else at that time; or a statement from Scott on this game's standing.",
    seeAlso: ["ffps", "faith", "golden", "bite", "michael", "nightmares", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "scott-2018-interview-ucn-capstone", // [stated] 2018: Ultimate Custom Night was the 'capstone' that 'brought in all of the characters'
      // support
      "ucn-summoned-performers", // [implied] Funtime Foxy & Music Man: 'demanded of me' / 'requested of me'
      "ucn-nedd-bear-forever", // [stated] Nedd Bear secret line: 'over, and over... forever'
      "ucn-music-man-eternal", // [stated] Music Man: 'for a long, long time'
      "ucn-toy-chica-dying", // [stated] Toy Chica: 'You won't get tired of dying, will you?'
      "ucn-jack-o-chica-burns-eternal", // [stated] Jack-O-Chica: 'burns eternal and now you shall as well'
      "ucn-nightmarionne-nightmare-you-wont-wake-from", // [stated] Nightmarionne: 'a nightmare that you won't wake from'
      "ucn-withered-bonnie-consequences-of-failure", // [stated] Withered Bonnie: 'face the consequences of your failure'
      "ucn-mangle-take-apart-put-back-together", // [stated] Mangle: 'take-apart-and-put-back-together'
      "ucn-mr-hippo-afterlife-or-dream", // [stated] Mr. Hippo: 'this is my afterlife or my dream' (cited in faith)
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
    answer: "Yes, in plain words: the Cassette Man's last speech sends the dead to rest and his old friend to \"the darkest pit of Hell\". Ultimate Custom Night, most likely set after it, has one voice that refuses release and another that says \"Rest your own soul\". Who is being kept, and who is being told to rest, the game does not say: ((ucn|the chapter on that night)) weighs both.",
    confidence: "medium",
    body: [
      "Pizzeria Simulator ends on one long speech (see ((ffps))), in which the Cassette Man, the voice on that game's tapes, tells those gathered in a burning building where they are going. Set out by listener, it sorts them.",
      { kind: "table", head: ["Who", "What is said"], rows: [
        ["The \"monsters trapped in the corridors\"", "\"be still and give up your spirits. They don't belong to you.\" [[ffps-completion-give-up-spirits]]"],
        ["All but one: \"most of you\"", "\"I believe there is peace and perhaps more waiting for you after the smoke clears.\" [[ffps-completion-peace-perhaps-more]]"],
        ["The one, an \"old friend\"", "\"the darkest pit of Hell has opened to swallow you whole, so don't keep the Devil waiting\" [[ffps-completion-old-friend-hell]]"],
        ["His daughter, and \"those you have carried in your arms\"", "\"It's time to rest\" [[ffps-completion-rest]]"],
        ["Himself, and the place", "\"I am remaining as well.\" The place \"will not be remembered\" [[ffps-completion-remaining-nearby]]"],
      ] },
      "That is the story's whole moral order, and it arrives late and all at once: rest for the dead, Hell for one old friend, and for the place itself, forgetting. The dead most likely include the five murdered children (see ((salvage))). The old friend is most likely the man who killed them (see ((killer))). The speaker qualifies the kindest of his words with \"I believe\" [[ffps-completion-peace-perhaps-more]], and nothing in the game shows where anyone goes.",
      "The earlier games had a gentler picture and almost no words for it. FNaF3 hides a party at which six masked children vanish and their masks fall [[fnaf3-happiest-day]] (see ((fazbears-fright))). FNaF World's framing voice, which the model uses only as an echo (see ((edges))), ends on a single word: \"Rest.\" [[fw-clock-ending-pieces-in-place]]",
      "Two more voices are heard in Ultimate Custom Night, most likely after the speech. One refuses, in rare lines that two characters speak with a second, whispering voice under them: \"I will never let you rest.\" [[ucn-happy-frog-never-rest]] The other voice belongs to an old man by a lake, who says \"Rest your own soul\" [[ucn-omc-ending]]. Those are the words as spoken, and ((ucn)) weighs who refuses, who is kept and who is told to rest. Whoever is held, the voice that holds him has turned down its own release as well [[ucn-orville-he-tried-to-release]]; the model reads that as vengeance kept up at the cost of rest. The old man's line is no record of a victim offered rest, because who his listener is stays open.",
      "The archive's records go no further: they show no church in the games and no doctrine. The vocabulary is small: rest, peace, Hell, the Devil, a demon, souls, spirits, a fire that \"burns eternal\" [[ucn-jack-o-chica-burns-eternal]] and once, offered as a guess, an afterlife [[ucn-mr-hippo-afterlife-or-dream]]. Every word of it is put in a character's mouth, and in the archive's records Ultimate Custom Night never says \"Hell\".",
      { kind: "heading", text: "Scott's own answer: no hidden messages" },
      "In October 2014, after the first game, an interviewer asked Scott whether his Christianity had found its way into it, with hidden messages such as the animals standing for vices. He answered:",
      { kind: "quote", evidence: "scott-2014-no-hidden-christian-messages" },
      "In the same interview he said that he had spent about twelve years making Christian films and games before it [[scott-2014-christian-projects-before-fnaf]], and that he had come to think \"it's not your work but you yourself that makes the difference\" [[scott-2014-faith-and-work]]. He gave as his favourite verse Psalm 46:10, which begins \"Be still\" [[scott-2014-favorite-verse-psalm-46-10]]. The Cassette Man's \"be still\" [[ffps-completion-give-up-spirits]] shares those two words. The phrase is a common one, and this archive has found no statement of Scott's that links the two. In 2021 he wrote: \"I'm a Christian.\" [[scott-2021-i-am-a-christian]] This is context for the author. It is evidence for nothing that happens in the story.",
    ],
    counterEvidence: ["scott-2014-no-hidden-christian-messages", "ucn-mr-hippo-just-a-story"],
    tension: "Asked in 2014 whether the first game carried hidden Christian messages, Scott answered \"No\" [[scott-2014-no-hidden-christian-messages]]. The chapter claims none. It reports the words that characters use, which are rest, peace, Hell and the Devil, and the sorting those words make, and it reads no allegory into the machines. Ultimate Custom Night also warns against over-reading in its own voice [[ucn-mr-hippo-just-a-story]]. What its two voices mean depends on who is in that office and who is listening, and is no firmer than ((ucn)).",
    changesIf: "A statement from Scott on what the endings of Pizzeria Simulator and Ultimate Custom Night mean, or a change in who the player of Ultimate Custom Night is.",
    seeAlso: ["ffps", "ucn", "fazbears-fright", "golden", "patterns"],
    // Every record with this chapter as its home is cited above.
    further: [],
  },
];
