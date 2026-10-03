# Connection memo: `ffps-ucn`

Slice: Freddy Fazbear's Pizzeria Simulator (FFPS) and Ultimate Custom Night (UCN).
Evidence file: `src/data/evidence/ffps-ucn.json`, now 172 records (116 existing, 56 added). 54 existing records were changed (46 in substance, 8 cross-links only). 9 images added, all credited. `npx tsx scripts/validate.ts` passes. Nothing is committed.

Conventions. Ids are in backticks. Ids without `ffps-`/`ucn-` belong to other slices and were checked against the live evidence files. "SL" is Sister Location. "The One" is my shorthand for the character UCN calls "the one you should not have killed"; the game gives no other name. Confidence words are high, medium, low. In running text Nightmarionne's and Molten Freddy's lines are quoted without the transcripts' stutter.

The headline: **the records favour William Afton, not Michael, as the person in UCN's office (medium).** The current theory's three arguments for Michael do not survive the records added in this pass. Details in 2.1 and 3.

## 1. Threads

Ordered by how much of the story each holds up.

### 1.1 The trap and the fire

Established:

- **The job has a hidden clause and the pizzeria is bait.** The opening tape says the listener has been "checking outside at the end of every shift" under "Paragraph 4" (`ffps-cassette-intro-paragraph-4`), presents the salvage as a test of "vintage interactive attractions" (`ffps-cassette-intro-vintage-attractions`) and orders the room sealed (`ffps-cassette-intro-seal-room`). Animatronics turn up in the alley "quite often" and "we aren't sure why" (`ffps-salvage-first-tape-alley`, `ffps-salvage-origins-unknown`). Throwing one back gets the player fired under Paragraph Four (`ffps-bad-ending-paragraph-four`).
- **The company voice knows.** Something outside has "been trying to get in for months" (`ffps-tutorial-something-outside`); Saturday is "your ultimate test" (`ffps-tutorial-saturday-party`); "you want them all to be in one place" (`ffps-tutorial-all-in-one-place`). After the fire it admits the situation "wasn't presented to you in a completely honest fashion" (`ffps-completion-tutorial-atonement`).
- **They get in either way.** Marked-down items carry them in, and the salvage table then holds a sign, "There's No One Here (I'm Already Inside)" (`ffps-already-inside-sign`). Lefty can simply be bought for $5 (`ffps-lefty-rare-finds-five-dollars`). The four are Molten Freddy, the rabbit, Scrap Baby and Lefty (`ffps-salvage-order`).
- **How the lure works is on the blueprints.** RASC units fake presences at body temperature with centrally run audio (`ffps-rasc-blueprint`, `ffps-rasc-audio-central-server`). That is the "labyrinth of sounds and smells" (`ffps-completion-labyrinth`) and "the cries of children in some unseen chamber" (`ffps-completion-chasing-cries`). LEFTE is the lure built for the Puppet (1.4).
- **The targets hear a call.** "I heard your call" (`ffps-scrap-baby-heard-call`); "What a deceptive calling. I knew it was a lie the moment I heard it" (`ffps-scraptrap-deceptive-calling`); "a promise, such as this" (`ffps-scraptrap-fascinating`). Scrap Baby believes her father arranged it (`ffps-scrap-baby-played-into-our-hands`, `ffps-scrap-baby-make-you-proud-daddy`) and is told she was not "called here by the individual you assume" (`ffps-completion-connection-terminated-elizabeth`, `ffps-completion-not-called-by-who-you-assume`). In the opening scene she finishes the tape's countdown herself (`ffps-intro-scrap-baby-finishes-countdown`).
- **The plan in his own words.** "I have to call them all back. All of them. Together in one place" (`ffps-insanity-tape-call-them-back`), in order to "undo what he has done and heal this wound" (`ffps-insanity-wound-first-inflicted`).
- **Saturday.** "This is where your story ends" (`ffps-completion-story-ends`). The monsters are to give up spirits that "don't belong to you" (`ffps-completion-give-up-spirits`). "For most of you, I believe there is peace and perhaps more" (`ffps-completion-peace-perhaps-more`); for one, Hell (`ffps-completion-old-friend-hell`). The daughter is told to rest (`ffps-completion-rest`). He stays (`ffps-completion-remaining-nearby`). The building burns on screen (`ffps-completion-fire`). Achievement: "Trapped them all." (`ffps-completion-achievement`). The company calls itself "no longer a corporate entity" (`ffps-completion-tutorial-atonement`). Then graves and "THE END" (`ffps-lorekeeper-gravestones`, `ffps-lorekeeper-hill-stone`).

Open: who lit the fire is not said (only implied by "after the smoke clears"); whether the volunteer left; how complete the burning was. The Completion slideshow draws the building standing and condemned, not razed (`ffps-completion-slide-pizza-place-condemned`), and the wiki notes Lefty is the one machine not shown burning (note on `ffps-completion-fire`). "Most of you" is not "all of you".

Connections: Fazbear's Fright burned first and its salvage was to be sold at public auction (`fnaf3-it-burns-newspaper`); FFPS has a "Rare Finds Auction" (`ffps-lefty-rare-finds-five-dollars`), though the game draws no link. Security Breach's buried pizzeria carries the name on FFPS's slide, "Freddy Fazbear's Pizza Place" (`security-breach-underground-pizza-place`), and a Funtime-Freddy-faced tangle of old parts lives beside it (`security-breach-tangle-composition`). Help Wanted 2 calls its copy of FFPS's office "a simulated Pizza Place training booth" (`hw2-first-aid-simulated-pizza-place`). UCN answers the fire directly: "No matter how many times they burn us" (`ucn-orville-he-tried-to-release`). See 2.10.

### 1.2 The four salvaged machines: who each is, and what carried over

- **The rabbit is William Afton.** Credits (`ffps-credits-william-afton`), UCN's roster (`ucn-roster-afton`), Scott's guide: "William Afton (AKA Scraptrap)" (`scott-ucn-character-guide-afton`). That he is FNaF3's Springtrap rests on "I always come back" (`ffps-scraptrap-always-come-back`, `ucn-afton-always-come-back`), on "You may not recognize me at first, but I assure you, it's still me" (`ffps-scraptrap-still-me`) said from a visibly different body with remains in it (`ffps-scraptrap-alley-remains`), and on SL's last cutscene, where Springtrap walks out of the burnt attraction (`sl-golden-freddy-cutscene-springtrap`). FFPS never prints "Springtrap".
- **Scrap Baby is Elizabeth, and is Baby.** Named by the Cassette Man (`ffps-completion-connection-terminated-elizabeth`); Baby's actress (`ffps-credits-returning-voices`); a claw (`ffps-scrap-baby-alley-claw`, compare `sl-baby-minigame-girl-grabbed`); "daddy" (`ffps-scrap-baby-make-you-proud-daddy`, compare `sl-girl-daddy-let-me-play`). No game shows how she came to be separate from the merged body that left the SL facility.
- **Molten Freddy is what is left of that merged body.** A mound of wires and loose eyes (`ffps-molten-freddy-alley-wires-eyes`, compare `sl-custom-night-ennard-ejected`); Funtime Freddy's actor and stutter (`ffps-credits-returning-voices`); "Together again!… One big happy family!" (`ffps-molten-freddy-lines`). See 2.4.
- **Lefty is a container built for the Puppet.** "L.ure E.ncapsulate F.use T.ransport & E.xtract", with a security-bracelet code and a lullaby (`ffps-lefte-blueprint`); "Behavior upon suit-seal not guaranteed" (`ffps-lefte-suit-seal`); striped limb in the alley screen, weak (`ffps-lefty-alley-puppet-arm`); in UCN it is calmed by the music box like the Marionette (`ucn-roster-lefty-music-box`) and says "there is room for one more" (`ucn-lefty-lines`); the Cassette Man speaks to his daughter among those gathered (`ffps-completion-my-daughter`). In FFPS Lefty only shushes (`ffps-lefty-shh`).
- The rabbit on the others: "Fascinating, what they have become" (`ffps-scraptrap-fascinating`).

Open: where each was between its last game and the alley (`ffps-salvage-origins-unknown`); when and how the Puppet was sealed into Lefty; why Lefty is also on sale.

### 1.3 The Cassette Man: what he says he built and did

- Named only by role (`ffps-credits-cassette-man`). `ffps-hry223-label` is unverified and should not be cited.
- **He built the machines.** "Small souls trapped in prisons of my making" (`ffps-insanity-small-souls-prisons`). He does not know how the souls got into them (`ffps-insanity-tiny-breaths`).
- **He "unwillingly helped to create" the "monster"** (`ffps-insanity-monster-helped-create`), later his "old friend" (`ffps-completion-old-friend-hell`).
- **The monster's wrongs come in two phases.** What "he had already done" (the "loss of innocence, the loss of everything to so many people") and then "a new way to desecrate, to humiliate, to destroy" (`ffps-insanity-new-way-to-desecrate`): "He lured them all back. Back to a familiar place. Back with familiar tricks" (`ffps-insanity-lured-back`); "he led them there again. He overpowered them again. And he robbed them of the only thing that they had. Again" (`ffps-insanity-trap-again`). The result: souls "now set to new purpose and used in ways I never thought imaginable" (`ffps-insanity-small-souls-prisons`), who "will never find rest now. Not like this" (`ffps-insanity-tiny-breaths`).
- **His own part.** "A wound first inflicted on me, but then one that I let bleed out to cause all of this" (`ffps-insanity-wound-first-inflicted`). He "could make myself...sleep. But not yet", not until it is undone (`ffps-insanity-could-make-myself-sleep`); then he stays in the burning building (`ffps-completion-remaining-nearby`).
- The franchisee does not know him: "You don't really know who your employer is... do you?" (`ffps-scrap-baby-employer`).

Open: his name; what he and the monster built together; when the tape was recorded.

Connections: the second phase matches FNaF3's between-night minigames, in which a shadowy Freddy says follow me and the purple man takes the four apart in the back room (`fnaf3-eon-shadow-freddy-follow-me`, `fnaf3-eon-purple-guy-dismantles`): same place, same trick, "again". The tape names no place, so this is an inference (medium). It matters because it means FFPS treats that dismantling as a second robbery, not a liberation (see 3, item 13). The "prisons of my making" line is the partners chapter's best in-game support.

### 1.4 The daughter, the Security Puppet and Lefty

- **Security Puppet.** The Puppet guards one child with a green bracelet, who never appears in plays 1 to 3 (`ffps-security-puppet-assignment`). On the fourth play a box pins the Puppet's lid while the child is outside in the rain at the window (`ffps-security-puppet-trapped`). The Puppet gets out, is damaged by the rain, and collapses on the child's body (`ffps-security-puppet-dead-child`), beside tread-like marks on the ground (`ffps-security-puppet-tracks-by-body`, weak). Its mask has no tear streaks yet (`ffps-security-puppet-no-tear-streaks`).
- **The speech.** "My daughter… It's in your nature to protect the innocent" (`ffps-completion-my-daughter`); "the day you were shut out and left to die, no one was there to lift you up into their arms the way you lifted others into yours" (`ffps-completion-shut-out`); "what became of you. I should have known you wouldn't be content to disappear" (`ffps-completion-not-content-to-disappear`); "It's time to rest, for you, and for those you have carried in your arms" (`ffps-completion-rest`). The terminal shows the Security Puppet scene while he says it (`ffps-completion-security-puppet-terminal`).
- **The machinery ties the two together.** LEFTE emits a bracelet code "for security receiver" and plays a lullaby (`ffps-lefte-blueprint`): that is what one would build to draw in a security puppet that answers to a child's bracelet and is soothed by a music box.
- **Order.** His loss came "first", and "all of this" followed (`ffps-insanity-wound-first-inflicted`).

Open: the venue (unnamed in the minigame); the killer (not shown in it); the date.

Connections: FNaF2's Take Cake to the Children shows the same event from inside the building: a child crying outside, a purple car, a purple figure, then the Puppet (`fnaf2-take-cake-to-the-children`). "The way you lifted others" is Give Gifts, Give Life (`fnaf2-give-gifts-give-life`). See 2.5.

### 1.5 UCN: the endless night

What UCN's own words and screens give, with as little interpretation as I can manage:

- The player is never named (`ucn-protagonist-unnamed-killer`). Scott: most characters speak only "if (when) they kill you" (`scott-2018-ucn-voice-lines-when-they-kill-you`).
- **The player killed someone, and that someone is behind the night.** "I am remade, but not by you. By the one you should not have killed" (`ucn-nightmare-freddy-toysnhk`); "I have seen him" (`ucn-withered-chica-toysnhk`); "He's here, and always watching" (`ucn-mangle-toysnhk`); "Greetings from the fire, and from the one you should not have killed!" (`ucn-jack-o-chica-toysnhk`). Performers were "demanded" and "requested" (`ucn-summoned-performers`). A grinning child's face appears at random (`ucn-toysnhk-face`), and Scott's own words call it "the face of 'The one you should not have killed'" (`scott-2019-ucn-child-face-jason`).
- **The player cannot die and cannot leave.** "A victim that can't perish" (`ucn-nightmare-freddy-cant-perish`); "You won't die, but you'll wish you could" (`ucn-scrap-baby-lines`); "This time, death cannot save you" (`ucn-nightmarionne-lines`); "Let's taste death again and again and again" (`ucn-nightmarionne-nightmare-you-wont-wake-from`); "You won't get tired of dying, will you?" (`ucn-toy-chica-dying`); "over, and over, and over again... forever" (`ucn-nedd-bear-forever`); "I will never let you leave. I will never let you rest" (`ucn-happy-frog-never-rest`); "your eternal silence" (`ucn-music-man-eternal`). Mr. Hippo: "You're dead" (`ucn-mr-hippo-youre-dead`), and perhaps "this is my afterlife or my dream" (`ucn-mr-hippo-afterlife-or-dream`). Withered Bonnie: "What is this new prison?" (`ucn-withered-bonnie-prison`).
- **The language is judgement and fire.** "I AM YOUR WICKEDNESS... MADE OF FLESH" (`ucn-nightmare-lines`); "YOU WILL NOT BE SPARED. YOU WILL NOT BE SAVED" (`ucn-nightmare-not-spared-not-saved`); "a burning reminder of your misdeeds" (`ucn-jack-o-chica-toysnhk`); "The fire within me burns eternal and now you shall as well" (`ucn-jack-o-chica-burns-eternal`); "the consequences of your failure" (`ucn-withered-bonnie-consequences-of-failure`).
- **Someone tried to end it and one voice refuses.** "He tried to release you. He tried to release us. But I'm not gonna let that happen. I will hold you here… No matter how many times they burn us" (`ucn-orville-he-tried-to-release`).
- **The roster cannot be the beings themselves.** Two forms of the same individual attack on the same night: Springtrap and Afton, Circus Baby and Scrap Baby, Ennard and Molten Freddy, the Marionette and Lefty (`ucn-roster-two-forms-at-once`). The roster includes characters Scott ruled non-canon and FNaF World characters (`ucn-roster-noncanon-and-fnaf-world`). They call themselves "remade" and "given flesh" (`ucn-nightmare-freddy-toysnhk`, `ucn-nightmare-freddy-cant-perish`). The Puppet says the others "are like animals, but I am very aware" (`ucn-puppet-lines`). Read together: the tormentors are effigies made for the occasion (a short inference).
- **Two exits are shown.** With no tormentor selected except Old Man Consequences: "Leave the demon to his demons. Rest your own soul. There is nothing else", after which the only act left is to sink into the lake, and the game closes (`ucn-omc-ending`, `ucn-omc-ending-drowning`, `ucn-omc-ending-scream-audio`). After the thirteen cartoon episodes, the fourteenth and last cutscene: Golden Freddy in his FNaF1 form, twitching alone in the dark (`ucn-golden-freddy-final-cutscene`). Using the Death Coin on Golden Freddy summons Fredbear (`ucn-death-coin-fredbear`, `ucn-fredbear-lines`).
- **It follows FFPS.** Scott began it as "an Ultimate Custom Night for Pizzeria Simulator" (`scott-2018-ucn-for-pizzeria-simulator`); the four FFPS machines are on the roster (`ucn-roster-includes-ffps-four`); FFPS's alley posters hang in the office (`ucn-office-ffps-alley-posters`).

Open: who the player is (2.1); who the One is (2.2); whether UCN is "canon" at all. Scott's posts say nothing either way; his store text calls it "the ultimate FNAF mashup" (`scott-ucn-store-once-again-trapped`), and for SL he ruled the custom night non-canon but its cutscenes canon (`scott-2016-sl-custom-night-not-canon`, `scott-2016-cutscenes-are-canon`).

### 1.6 Remnant, by the blueprint and no further

- The word appears on one blueprint, "S.calable C.reation of U.lterior P.resence", marked Afton Robotics, LLC: an excavating arm, a "Remnant Injector" and a "Remnant Reservoir" (`ffps-scup-blueprint`).
- Remnant is a physical substance: kept in a heated tank, "malleable, but not more", "no observable motion" when heated; injected so as to "leave trace line amount on interior"; "Over-usage/ Over-exposure negates effect" (`ffps-scup-remnant-reservoir-notes`).
- "There is a possibility that overheating might neutralize the effects permanently" (`ffps-scup-overheating-neutralize`). Hedged twice, and written as a handling warning by Afton Robotics.
- The blueprint does **not** say what Remnant is made of, where it comes from, or what "the effects" are. The only statement of purpose is the machine's name.

What the rest of FFPS adds, all indirect: the monsters hold "spirits" that "don't belong to you" (`ffps-completion-give-up-spirits`); the children were "robbed… of the only thing that they had" (`ffps-insanity-trap-again`) and "set to new purpose" (`ffps-insanity-small-souls-prisons`); Scrap Baby treats "all of those little souls" as something to collect in order to "be complete" and "be full" (`ffps-scrap-baby-completion-monologue`, `ffps-scrap-baby-make-you-proud-daddy`). The reading that Remnant is what was taken from the haunted machines and injected into new ones fits all of this and is stated by none of it (low-medium).

Connections: the machine is SL's Scooper (`sl-scooping-room-explained`, `ucn-circus-baby-lines`). The only other record of the word is Special Delivery's, where it is a collectible "used to power up your animatronics" (`sd-tutorial-remnant-collection`); that game does not say what it is either.

### 1.7 The franchisee

The player of FFPS is never named and never speaks. Records: `ffps-tutorial-franchisee`, `ffps-tutorial-eggs-one-basket`, `ffps-completion-brave-volunteer`, `ffps-completion-right-where-you-want-to-be`, `ffps-scraptrap-still-me`, `ffps-scrap-baby-not-expected`, `ffps-scrap-baby-should-have-known`, `ffps-scrap-baby-played-into-our-hands`, `ffps-scrap-baby-completion-monologue`, `ffps-scrap-baby-employer`. Three of the lines repeat the wording of Michael's SL monologue (`sl-golden-freddy-cutscene-father`). See 2.3.

### 1.8 The five and the gravestones

- **The lure.** Fruity Maze: a girl collecting fruit; the fruit becomes dead dogs, then coffins and flowers; rabbit figures appear; she leaves blood (`ffps-fruity-maze-decay`). The last round ends on a car horn (`ffps-fruity-maze-car-horn`, not checked by ear). Final screen: a figure in the yellow rabbit suit behind the crying girl, and "He's not really dead. / He is over here. / Follow me." (`ffps-fruity-maze-follow-me`).
- **The graves.** Five stones in a row: Gabriel, Fritz, Susie, Jeremy, and a fifth hidden by grass. A sixth stands apart on a hill, illegible (`ffps-lorekeeper-gravestones`, `ffps-lorekeeper-hill-stone`, `ffps-lorekeeper-certificate`).
- **UCN.** "I was the first! I have seen everything!" (`ucn-withered-chica-toysnhk`).

Connections: FNaF3's bad-ending screen has the same composition, four heads in a row (Freddy, Foxy, Chica, Bonnie) and a fifth behind at the right (`fnaf3-bad-ending-heads`). Help Wanted 2 pairs six graves with dolls of the four, Golden Freddy and the Puppet (`hw2-pq4-graveyard-order`, `hw2-memory-dolls`). See 2.8 and 2.9.

### 1.9 The Midnight Motorist household

Established: a hidden route on lap 4 of an arcade racer leads to a rainy night road driven in a dark purple car (`ffps-midnight-motorist-secret-drive`). At "JR's" a green man bars a yellow driver: "Come on, you know you can't be here" (`ffps-midnight-motorist-jrs`; Scott calls him "Green Man", `scott-2017-ffps-patch-green-man`). A clearing holds a mound (`ffps-midnight-motorist-mound`). At a house a grey figure in a chair by the TV says "Leave him alone tonight. He had a rough day" (`ffps-midnight-motorist-grey-person`). A door is shut: "I told you not to close your door… This is my house. He can't ignore me like that… OPEN THE DOOR!" (`ffps-midnight-motorist-closed-door`), then "I'll find a way in from outside..." (`ffps-midnight-motorist-find-a-way-in`). Behind the house, a broken window and footprints: "Ran off to that place again. He will be sorry when he gets back" (`ffps-midnight-motorist-ran-off`).

Nobody is named and no relationship is stated. `ffps-midnight-motorist-later-that-night` is a data label and is not evidence. See 2.6.

### 1.10 The company and its cover-ups

Fazbear Entertainment franchises "the newly re-branded Freddy Fazbear's Pizza" with a death-and-dismemberment disclaimer (`ffps-tutorial-franchisee`, `ffps-tutorial-rebranded-disclaimer`). It fires and discredits a franchisee who sees the blueprints, for having "prevented a tidy resolution to a messy problem" (`ffps-insanity-certificate`), wipes footage and employment records (`ffps-blacklisted-ending`), and after the fire speaks of "atoning for past mistakes and tying up loose ends" (`ffps-completion-tutorial-atonement`). LEFTE and RASC are marked Fazbear Entertainment, Inc; only the Scooper is marked Afton Robotics, LLC (`ffps-lefte-blueprint`, `ffps-rasc-blueprint`, `ffps-scup-blueprint`). So the trap is a company operation, and the Cassette Man is acting through the company (an inference from the marks and from Tutorial Unit's "tying up loose ends"). The lawsuits put the franchise in Washington County, Utah (`ffps-lawsuits-utah`), the only real place FFPS names; the suits themselves are jokes (`ffps-lawsuit-head-bitten`, `ffps-lawsuit-ground-gave-way`). Minor endings: `ffps-mediocrity-ending`, `ffps-bankruptcy-ending`.

Open: Fazbear Entertainment exists again in Help Wanted (`hw-tape-13-fe-hired-developer`), so "no longer a corporate entity" did not last, or was not true.

### 1.11 Parables and cartoons

Candy Cadet's three stories (`ffps-candy-cadet-five-keys`, `ffps-candy-cadet-five-orphans`, `ffps-candy-cadet-five-kittens`, `ucn-candy-cadet-fragments`); Mr. Hippo (`ucn-mr-hippo-just-a-story`, `ucn-mr-hippo-duck-feeder`); Pigpatch's proverbs (`ucn-pigpatch-proverbs`); "Toy Chica: The High School Years" (`ucn-toy-chica-hsy-premise`, `ucn-toy-chica-hsy-dog-lure`, `ucn-toy-chica-hsy-find-a-window`, `ucn-toy-chica-hsy-bag-and-finale`); the samurai cartoon (`ucn-bear-of-vengeance-premise`, `ucn-bear-of-vengeance-consequence`, `ucn-bear-of-vengeance-finale`). All are stories told inside the story. They can corroborate; none can establish. See 2.7.

## 2. Contested questions

### 2.1 Who is in UCN's office: William Afton or Michael? (the main question)

**The current theory picks Michael (medium). My slice does not support that pick. The records favour William Afton, at medium.** No line names the player, so neither reading can be more than medium.

**The two readings.**

- *William*: after the FFPS fire the killer is held in an unending night staged by one of his victims. This is the Hell the Cassette Man announced for his "old friend".
- *Michael*: after the FFPS fire the volunteer is held in an unending night by the brother he killed in FNaF4.

**Every line that bears on it.** "W" and "M" say which reading a line fits better; "=" means it fits both or neither.

| Record | Words | Fits | Why, and how much it weighs |
|---|---|---|---|
| `ffps-completion-old-friend-hell` | "for one of you, the darkest pit of Hell has opened to swallow you whole, so don't keep the Devil waiting, old friend" | W | The game before UCN ends by promising one person exactly what UCN then shows. Heavy. |
| `ffps-completion-brave-volunteer`, `ffps-completion-right-where-you-want-to-be` | "my brave volunteer… there was a way out planned for you" | W | The same speech honours the volunteer and plans his escape. Putting him in the eternal fire inverts the only moral sorting the games give. Medium. |
| `scott-2018-ucn-for-pizzeria-simulator` | "an Ultimate Custom Night for Pizzeria Simulator" | W | UCN was conceived as FFPS's own custom night, so FFPS's last words are its natural premise. Light. |
| `ucn-nightmare-lines` | "I AM YOUR WICKEDNESS... MADE OF FLESH" / "I WILL VOMIT YOU BACK... TO RELIVE YOUR HORROR!" | W | Wickedness is the killer's. "Vomit you back" answers "swallow you whole" in the FFPS line above. Michael's cruelty to his brother could be "wickedness", so medium, not heavy. |
| `ucn-nightmare-not-spared-not-saved` | "YOU WILL NOT BE SPARED. YOU WILL NOT BE SAVED." | W | Judgement language. Special Delivery's Springtrap later says the same words to his own victims (wiki transcript; not yet a record, see 8), as he does a Nightmare Fredbear line (`sd-springtrap-pulled-apart-put-back-together`). Medium-light. |
| `ucn-jack-o-chica-toysnhk`, `ucn-jack-o-chica-burns-eternal` | "a burning reminder of your misdeeds" / "The fire within me burns eternal and now you shall as well" | W | "Misdeeds", plural, and eternal fire. Medium. |
| `ucn-nightmarionne-lines` | "I am the fearful reflection of what you have created" / "This time, death cannot save you" | W | Nightmarionne is the nightmare form of the Puppet. What the Puppet became was made by the man who killed the child (`ffps-completion-not-content-to-disappear`). Michael created nothing of the kind. "This time" implies death saved the listener once: in FNaF3 the purple man's death in the suit is what ends the ghosts' pursuit (`fnaf3-n5-ghosts-safe-room`, `fnaf3-n5-springlock-death`). Medium. |
| `ucn-nightmare-freddy-toysnhk` | "I am remade, but not by you. By the one you should not have killed." | = (slightly W) | "Not by you" presupposes the listener is a maker of such things, which suits the robotics designer. But on the Michael reading the Nightmares were first "made" by the brother's bullying. |
| `ucn-withered-chica-toysnhk` | "I was the first! I have seen everything!" / "I have seen him. The one you shouldn't have killed." | W | A victim speaking, and counting: she is the first, "him" is another. Said to her killer, the two belong to one series, his. Said to Michael, they are victims of two different people and her boast has no point for the listener. Medium. |
| `ucn-puppet-lines` | "I recognize you, but I'm not afraid of you... not anymore." / "The others are under my protection." / "Seeing you powerless is like music to me." | W | She once feared the player, who was a threat to "the others" and had power over her. That is her killer (`ffps-completion-shut-out`). The "but" matters: recognising him is the reason she would be afraid. A Michael reading has to say she feared him only while she mistook him for his father ("they thought I was you", `sl-golden-freddy-cutscene-father`), and then recognising him would remove the fear, not sit against it. Medium to heavy. |
| `ucn-puppet-lines` | "I don't hate you, but you need to stay out of my way." | M | Easier to say to the brother than to her murderer, though it also fits a spirit whose "nature" is "to protect the innocent" (`ffps-completion-my-daughter`). Light. |
| `ucn-orville-he-tried-to-release` | "No matter how many times they burn us" | W, conditionally | More than one burning. If "us" includes the listener, only the rabbit fits: he is the one figure shown in two fires (`fnaf3-it-burns-springtrap-hidden`, `ffps-completion-fire`). If "us" means the speaker's own kind, as in "release us", the line says nothing about who the listener is. Light. |
| `ucn-orville-he-tried-to-release` | "He tried to release you. He tried to release us." | M (slightly) | Matches "a way out planned for you". It also fits the killer, whom the fire was meant to send on. Light. |
| `ucn-scrap-baby-lines` | "You won't die, but you'll wish you could." | M | The same voice told Michael "You won't die" (`sl-you-wont-die`). But the theme belongs to every character here, and the rabbit's own line is "I always come back". Medium-light. |
| `ucn-nightmare-freddy-cant-perish`, `ucn-nightmare-lines` | "I have always been hiding in your shadow." / "THE SHADOW FEARS ME." | = | Michael says "I've been living in shadows" (`sl-golden-freddy-cutscene-come-find-you`). A shadowy Freddy does the purple man's luring in FNaF3 (`fnaf3-eon-shadow-freddy-follow-me`). Neither is decisive. |
| `ucn-scrap-baby-lines`, `ucn-roster-scrap-baby-controlled-shock` | "Time for your controlled shock." | = | UCN's own roster text tells the player to "use a controlled shock" on her. The line turns this game's mechanic around; it does not need SL. |
| `ucn-circus-baby-lines` | "Want to see the Scooping Room?" / "I guess you forgot about me." | = | An offer to see a room suits someone who has not been in it as well as someone who was scooped there. The machine is Afton Robotics' own (`ffps-scup-blueprint`). "Forgot about me" is the plush mechanic. |
| `ucn-ballora-lines` | "Why do you hide inside these walls?" | = | Her SL song reworked (`sl-ballora-song`). |
| `ucn-nightmare-fredbear-lines` | "Let me put you back together, then take you apart all over again." / "This time, there is more than an illusion to fear." / "We know who our friends are, and you are not one of them!" | M | The best Michael lines. FNaF4's promise (`fnaf4-i-will-put-you-back-together`) and the plush "friends" (`fnaf4-plushies-these-are-my-friends`) thrown back at the one who was not a friend. They also fit a father who made the illusions and whose promise it was, but that needs the plush chapter's low-confidence reading. And Special Delivery later puts almost these words in Springtrap's own mouth, "Let's see how many times you can be pulled apart...and put back together again" (`sd-springtrap-pulled-apart-put-back-together`), which suits a man repeating what was said to him. Medium to light. |
| `ucn-no-light-can-save-you` | "No light can save you now." / "Flash that light all you want, it can't save you now!" | = | The flashlight is UCN's own defence against both speakers. |
| `ucn-mangle-take-apart-put-back-together` | "Now I get to play take-apart-and-put-back-together!" | = | Mangle's own history (`fnaf2-call3-mangle`). The purple man did take the four apart (`fnaf3-eon-purple-guy-dismantles`). |
| `ucn-roster-afton`, `ucn-roster-two-forms-at-once`, `ucn-roster-noncanon-and-fnaf-world` | "Afton" attacks the player | = | The roster has Springtrap and Afton attacking on the same night, plus three other doubled characters and several non-canon ones. Its figures are effigies. Being attacked by one says nothing about who the player is. |
| `ucn-omc-ending` | "Leave the demon to his demons. Rest your own soul." | M on its plain sense | See below. The strongest single item for Michael. Medium. |
| `ucn-golden-freddy-final-cutscene` | Golden Freddy alone in the dark | W | The theory's own golden chapter makes Golden Freddy one of the five murdered children. His killer is William. Medium. See 2.2. |
| `ucn-toy-chica-hsy-premise`, `ucn-toy-chica-hsy-dog-lure`, `ucn-toy-chica-hsy-bag-and-finale` | a serial lurer with seven trophies | W | The intermission mocks someone who lures victim after victim to her house. That is the killer's career, not Michael's. Light (a parody). |
| `ucn-bear-of-vengeance-premise`, `ucn-bear-of-vengeance-finale` | "the blood on the Fox's hands" / "I will find him in whatever land he has fled to" | = | Pursuit beyond a border fits the killer who died in the fire. A fox with blood on his hands also fits the brother in the Foxy mask (`fnaf4-brother-foxy-mask-tv`). |
| `ucn-rockstar-bonnie-truest-friend` | "So good to see you again, my truest friend." | = | One of five rhyming couplets. The theory lists it as counter-evidence; it is colour. |
| `ucn-withered-bonnie-consequences-of-failure`, `ucn-withered-bonnie-prison`, `ucn-lefty-lines`, `ucn-music-man-eternal`, `ucn-toy-chica-dying`, `ucn-mr-hippo-youre-dead`, `ucn-nedd-bear-forever`, `ucn-happy-frog-never-rest`, `ucn-mangle-toysnhk`, `ucn-summoned-performers`, `ucn-nightmare-bb-eventually` | failure, prison, eternity, the loop | = | They set the frame. None separates the two readings. |
| `ucn-fredbear-lines` | (reported) "a suit that's right for you" | W, if the wording is right | Wording unverified; do not lean on it. |

**The theory's three arguments, tested.**

1. *"Characters taunt him with details from Sister Location."* Of the three lines cited, one is UCN's own mechanic (`ucn-roster-scrap-baby-controlled-shock`), one is Ballora's song (`sl-ballora-song`), and one is an invitation to a room named for a machine his father's company drew (`ffps-scup-blueprint`). SL characters talk about SL. Only "You won't die" survives as a real echo.
2. *"Afton appears on the roster as an animatronic that attacks the player."* So does Springtrap, on the same night (`ucn-roster-two-forms-at-once`). If roster entries were the beings themselves, one man would be attacking in two bodies. They are "remade" and "given flesh" by someone else (`ucn-nightmare-freddy-toysnhk`, `ucn-nightmare-freddy-cant-perish`). A killer attacked by his own image is "your wickedness, made of flesh".
3. *Old Man Consequences "treats the player and the demon as two different people."* He treats his listener and the demon as two people. Who the listener is depends on a choice the scene does not make for us. The trigger is a night with every tormentor switched off. The real player has two jobs in UCN: sitting in the office, and setting up the night. Only the second job triggers this ending, and in the fiction the one who sets the tormentors on is the One (`ucn-summoned-performers`). On that reading the old man is telling the avenger to stop: leave the demon (the man in the office) to his demons (the roster), and rest. Four things support it. The advice presupposes a freedom the man in the office does not have: he is told again and again that he cannot leave and will not be allowed to rest (`ucn-happy-frog-never-rest`, `ucn-nedd-bear-forever`), so "leave" and "rest" are not his to choose under either reading. The voice that refuses rest in this game is the One's (`ucn-orville-he-tried-to-release`). Pigpatch's proverb, "If you sit by the river long enough, you will see the body of your enemy float by" (`ucn-pigpatch-proverbs`), describes the avenger, and the old man's invitation is to come and sit by the water. And the other ending shows what refusing looks like: Golden Freddy, still twitching (`ucn-golden-freddy-final-cutscene`). Against it: nothing on screen marks a change of listener, and the simplest reading is that whoever was in the office is at the lake. So this item stays on Michael's side of the ledger, at medium to light, and it does not exclude William.

**The best case for Michael, stated fairly.** It is not the theory's case. It is the Nightmares. Most of the heaviest lines belong to FNaF4's creatures, and FNaF4's guilty party is the older brother. On this reading the Nightmares were first "made" by his cruelty, which is why they are "the fearful reflection of what you have created" and are now "remade, but not by you"; they were illusions then and are real "this time"; the plush toys' "friends" exclude him; "the one you should not have killed" is the brother whose death he caused and did not intend; and the old man tells him to stop chasing his father. This is a coherent package. It strains on three records: the Puppet's "I recognize you, but I'm not afraid of you... not anymore", Withered Chica's "I was the first", and the Golden Freddy cutscene (unless Golden Freddy is the FNaF4 child, which the theory denies). It has nothing to say about why UCN speaks in fire and judgement. And it makes the Cassette Man's speech point the wrong way.

**Verdict.** William, medium. Four independent groups of lines agree (the victims who knew him, the wickedness-and-creation lines, the fire-and-judgement lines, and FFPS's own set-up), and the three items against (the old man, "You won't die", Nightmare Fredbear) each have a workable reading under William. I would not go to high: the player is unnamed, the old man's plain sense is against it, and Mr. Hippo's warning stands (`ucn-mr-hippo-just-a-story`).

**"Does 'the one you should not have killed' presuppose several victims?"** Not by grammar alone: it can mean "you killed the wrong person". Withered Chica makes it likelier. She says she was "the first" and then speaks of "him" as someone else, which reads most naturally as two entries in one list. Michael's list has one entry at most.

**What this changes elsewhere.** See 3, items 1 to 6. In short: the UCN chapter's title and thesis; the "joint hypothesis through UCN" in the Afton-household chapter; three relations (`ucn-protagonist` same-as `michael-afton`; `older-brother` same-as `michael-afton`, which cites `ucn-nightmare-freddy-toysnhk` and `ucn-scrap-baby-lines`; `crying-child` same-as `one-you-should-not-have-killed`); the `ucn-protagonist` person entry; timeline event `t-ucn`.

### 2.2 Who is "the one you should not have killed", and who runs the night?

What the records fix, whoever the player is: he is male ("him", "He's here": `ucn-withered-chica-toysnhk`, `ucn-mangle-toysnhk`); the face the game gives him is a small child's (`ucn-toysnhk-face`; Scott confirms whose face it is in the game while saying the photograph's source means nothing, `scott-2019-ucn-child-face-jason`); he is not Withered Chica's "first"; the player killed him; he remade the Nightmares (`ucn-nightmare-freddy-toysnhk`); he is named in the same breath as "the fire" (`ucn-jack-o-chica-toysnhk`); a voice that is probably his refuses release for himself and for others (`ucn-orville-he-tried-to-release`); and the last thing the game shows is Golden Freddy (`ucn-golden-freddy-final-cutscene`).

Candidates:

- **A. The child bound to Golden Freddy, one of the five.** Needs the player to be William. For: the final cutscene; the theory's own reading of Golden Freddy (`fnaf2-give-gifts-give-life`, `fnaf3-happiest-day`); the fifth is the one the games keep holding back, a faint fifth head (`fnaf3-bad-ending-heads`) and a hidden fifth stone (`ffps-lorekeeper-gravestones`); "how many times they burn us" suits a presence that outlasted both fires. Against: nothing ties that child to FNaF4's Nightmares or to Fredbear except the colour of a bear; Happiest Day shows a golden-masked child leaving with the others.
- **B. FNaF4's crying child.** Natural if the player is Michael. For: the Nightmares are FNaF4's (`fnaf4-nightmare-animatronics`); Nightmare Fredbear's "friends" (`ucn-nightmare-fredbear-lines`); the Death Coin turns Golden Freddy into Fredbear, the bear that bit him (`ucn-death-coin-fredbear`, `fnaf4-give-fredbear-a-kiss`). Against: everything in 2.1; and the final cutscene then needs the crying child inside Golden Freddy.
- **C. One presence that is both**: Golden Freddy holds the FNaF4 child, alone or with the fifth. UCN is the best in-game evidence that something links the Nightmares, Fredbear and Golden Freddy. Against: with William as player, "killed" must stretch to "caused the death of".

**Position.** Not settled. With William as player, A is the best single reading (low-medium), and B's two links (the Nightmares, Fredbear) should be listed as counter-evidence, not hidden. The theory's present position (crying child, with the Golden Freddy cutscene filed as counter-evidence) depends entirely on Michael being the player.

**What the final cutscene implies.** It has no words, so keep it modest. (i) When every performer has had a turn, one figure is left, so the night is his. (ii) It is the FNaF1 Golden Freddy, the original apparition (`fnaf1-golden-freddy-poster-office`), not the roster's FNaF2 model. (iii) He twitches and fades into black. FFPS's dead get sunlight and "THE END". (iv) Set beside the old man's ending, the game shows the same choice twice: rest, or this.

### 2.3 Is the FFPS franchisee Michael?

Yes: medium, upper end. No rival candidate, and several independent echoes of Michael's SL monologue (`sl-golden-freddy-cutscene-father`, `sl-golden-freddy-cutscene-come-find-you`):

- "They didn't recognize me at first, but then they thought I was you" becomes, from the father, "You may not recognize me at first, but I assure you, it's still me" (`ffps-scraptrap-still-me`).
- "I put her back together, just like you asked me to" becomes, from Baby, "You gathered them all together in one place, just like he asked you to" (`ffps-scrap-baby-completion-monologue`). She takes the franchisee for someone who does what her father asks.
- "I should be dead… There is only one thing left for me to do now. I'm going to come find you" becomes the volunteer who "somehow found this job listing not intended for you" and is "right where you want to be" (`ffps-completion-brave-volunteer`, `ffps-completion-right-where-you-want-to-be`).
- Scrap Baby speaks to him as someone known: "You should've known I'd find you" (`ffps-scrap-baby-should-have-known`), "Did you really think that this job just fell out of the sky for you?" (`ffps-scrap-baby-played-into-our-hands`), "You don't really know who your employer is" (`ffps-scrap-baby-employer`). "You're not who I expected to see" (`ffps-scrap-baby-not-expected`) fits a daughter who expected her father.

Against: he is never named; every echo is an echo, not a statement; `ffps-tutorial-eggs-one-basket` is a stock idiom and weighs nothing. The theory's pick is supported. It should cite these records, not only `ffps-completion-brave-volunteer`.

### 2.4 Is Molten Freddy what is left of Ennard, and does it hold anything else?

**Ennard's remainder: yes, medium-high.** The body is the wires and eyes the purple man expelled (`ffps-molten-freddy-alley-wires-eyes`, `sl-custom-night-ennard-ejected`); the voice is Funtime Freddy's (`ffps-credits-returning-voices`); the lines are about a reunion (`ffps-molten-freddy-lines`); Baby, the merged body's other voice, is now separate (`ffps-completion-connection-terminated-elizabeth`). FFPS never says "Ennard", and UCN lists Ennard and Molten Freddy as two entries (`ucn-roster-two-forms-at-once`), which under 2.1 means nothing.

**Anything else: probably, low-medium, and not stated.** FFPS says the monsters hold "spirits" that "don't belong to you" (`ffps-completion-give-up-spirits`); that the small souls were "set to new purpose" (`ffps-insanity-small-souls-prisons`) and robbed "again" (`ffps-insanity-trap-again`); and Scrap Baby says "all of those little souls" are now "in one place" (`ffps-scrap-baby-completion-monologue`). The five get graves only after this fire (`ffps-lorekeeper-gravestones`), so the game treats them as still bound until then, and their original bodies were taken apart long before (`fnaf3-eon-purple-guy-dismantles`). Molten Freddy is the one salvage that is plural. Candy Cadet's five-into-one stories point the same way, at parable weight (2.7). None of this says "the five are in Molten Freddy". Write it as the best available reading, not a finding.

### 2.5 Is the Take Cake / Security Puppet child the Cassette Man's daughter, and when did she die?

**Same child, and his daughter: medium-high.** Two minigames show one event from two sides: a child outside, the guardian unable to reach her, the guardian's arrival too late (`fnaf2-take-cake-to-the-children`; `ffps-security-puppet-trapped`, `ffps-security-puppet-dead-child`). The speech describes exactly this ("shut out and left to die", `ffps-completion-shut-out`) while the terminal shows the scene (`ffps-completion-security-puppet-terminal`). The marks by the body (`ffps-security-puppet-tracks-by-body`) may be the purple car's, weakly. That she persists in the Puppet: "what became of you… wouldn't be content to disappear" (`ffps-completion-not-content-to-disappear`), "those you have carried in your arms" (`ffps-completion-rest`), and the machine built to catch her (`ffps-lefte-blueprint`).

**She died before the five: medium.** The theory says the order "is not given". FFPS gives one. (i) "A wound first inflicted on me, but then one that I let bleed out to cause all of this" (`ffps-insanity-wound-first-inflicted`): he was hurt first, and the rest followed from that hurt being left open. (ii) "The way you lifted others into yours" (`ffps-completion-shut-out`), with the Puppet giving gifts and then life to dead children (`fnaf2-give-gifts-give-life`): she was already the Puppet when the others were taken up. Strictly that puts her death before their binding, not before their deaths. (iii) The minigame's Puppet has no tear streaks (`ffps-security-puppet-no-tear-streaks`), so it predates the Puppet as FNaF2 shows it.

Against: Help Wanted 2's graveyard puzzle is solved in the order Chica, Foxy, Freddy, Bonnie, Golden Freddy, Puppet (`hw2-pq4-graveyard-order`). If that is an order of deaths it puts the Puppet's child last. The game does not say what the order means, and it is a later game by other hands; FFPS's own words should outweigh it, but it belongs under counter-evidence. Also to record: Take Cake's voice spells "SAVE HIM" (`fnaf2-take-cake-to-the-children`), and Withered Chica says "I was the first" (`ucn-withered-chica-toysnhk`; see 2.8).

### 2.6 Midnight Motorist: the driver, the figure in the chair, the runaway

Nothing here is better than low-medium. Two readings.

- **A. The killer's own house.** The car is purple, like the car in Take Cake (`fnaf2-take-cake-to-the-children`). The driver controls a boy through doors ("I told you not to close your door"), as FNaF4's "he" does ("He locked you in your room again", `fnaf4-plush-locked-in-room`). Both this secret and Security Puppet's last play are set on a rainy night, which is the only in-game ground for saying it is the same night. The Toy Chica cartoon gives its lurer the driver's next move: "if he doesn't open the door, I'll just find a window" (`ucn-toy-chica-hsy-find-a-window`, `ffps-midnight-motorist-find-a-way-in`).
- **B. A victim's house.** The driver sprite is flat yellow, not the purple these games use for the killer. On this reading the three lore minigames are three children's last stories: a girl lured with a lie about her dog (Fruity Maze), a girl locked out (Security Puppet), a boy who runs from a violent home to "that place" (Midnight Motorist), with something's footprints leading him away.

The figure in the chair: grey body, pinkish head, grey text, protective of the boy (`ffps-midnight-motorist-grey-person`). A household member; nothing says which. The runaway: under A, "that place" is the diner or pizzeria, and the boy is more plausibly the older brother than the crying child, who is frightened of the place and is left there against his will (`fnaf4-left-behind-at-diner`). Under B he is one of the five. JR's: the driver is known there and barred (`ffps-midnight-motorist-jrs`). The mound is unexplained (`ffps-midnight-motorist-mound`).

**Position.** The theory is right to call the purple car "only a motif". It should state reading B as the alternative, cite the yellow sprite against A, and drop `ffps-midnight-motorist-later-that-night` (data-only). Confidence that the driver is William: low-medium.

### 2.7 What do Candy Cadet's stories mean, and how much can a parable carry?

All three have the same skeleton: five innocents, a guardian, and five made into one. Keys melted into one key that opens nothing, "the key to five deaths" (`ffps-candy-cadet-five-keys`). Orphans "brought… together in one place", murdered while their guardian was out, stitched into one body; "That night, there was a knock at the door" (`ffps-candy-cadet-five-orphans`). Kittens fed one a night to a snake the boy would not get rid of, then "pieced… together" into one (`ffps-candy-cadet-five-kittens`). In each the guardian means well and the harm comes through what the guardian did or failed to do.

Two verbal hooks tie the Orphans story to the main text: "together in one place" is the Cassette Man's phrase, Tutorial Unit's and Scrap Baby's (`ffps-insanity-tape-call-them-back`, `ffps-tutorial-all-in-one-place`, `ffps-scrap-baby-completion-monologue`), and Molten Freddy announces himself with "Knock knock" (`ffps-molten-freddy-knock-knock`). "Pieced the remains together and put the kitten back" echoes the series' recurring "put back together" (`fnaf4-i-will-put-you-back-together`, `sl-golden-freddy-cutscene-father`). UCN repeats three fragments (`ucn-candy-cadet-fragments`).

**Weight.** Use them to corroborate one thing, at low-medium: the five ended up fused into one thing that came back (2.4). Do not map the woman, the man, the boy, the burglar or the snake onto named characters; several mappings fit and none is checkable. The games carry their own warning in the same register (`ucn-mr-hippo-just-a-story`), and the Toy Chica cartoon contains at least one pure in-joke (note on `ucn-toy-chica-hsy-dog-lure`).

The cartoons, same rule. Toy Chica is a serial lurer drawn as a schoolgirl: lies to get each victim to her house, a trophy from each, seven in the bag, and the plush's line "tomorrow is another day" (`ucn-toy-chica-hsy-premise`, `ucn-toy-chica-hsy-dog-lure`, `ucn-toy-chica-hsy-bag-and-finale`, `fnaf4-tomorrow-is-another-day`). The dog lie matches Fruity Maze (`ffps-fruity-maze-follow-me`). The samurai cartoon is a revenge that never lands and never stops (`ucn-bear-of-vengeance-premise`, `ucn-bear-of-vengeance-consequence`, `ucn-bear-of-vengeance-finale`). Together they say what UCN is about: a killer of many, and a pursuit past the end. They do not say who is who.

### 2.8 Who is "Withered Chica: I was the first"?

Best reading: the first of the five, and the girl of Fruity Maze (low-medium). Fruity Maze is the only luring the games show, and its victim is a girl (`ffps-fruity-maze-follow-me`). "Susie" is the one girl's name on the stones (`ffps-lorekeeper-gravestones`). By position, Susie's stone is third in the row and Chica's head is third in FNaF3's row (`fnaf3-bad-ending-heads`). Help Wanted 2's graveyard order also begins with Chica (`hw2-pq4-graveyard-order`), whatever that order means. Four weak pointers that agree. It does not conflict with the daughter dying first (2.5): the daughter is not one of the five and is not in the band. The line does not say first of what, so this stays an inference.

### 2.9 Which gravestone belongs to whom?

- **The row of five is the five** (medium): five stones, four names, one hidden, the same count and the same "four plus one held back" as FNaF1's newspaper and FNaF3's heads (`fnaf1-news-five-children`, `fnaf3-bad-ending-heads`).
- **Pairing by position** (low-medium): Gabriel with Freddy, Fritz with Foxy, Susie with Chica, Jeremy with Bonnie, the hidden stone with Golden Freddy. Two of the four have outside support: Susie with Chica (2.8), and Jeremy with Bonnie, since Help Wanted 2's achievement "Remember Jeremy?" has a Bonnie-masked doll for its icon (`hw2-remember-jeremy-achievement`). That second one is only as good as the assumption that this Jeremy is the gravestone's and not Help Wanted's own.
- **The hill stone is the daughter's** (medium): apart from the five, as she is in the story; Help Wanted 2 later sets six graves against dolls of the four, Golden Freddy and the Puppet (`hw2-pq4-graveyard-order`, `hw2-memory-dolls`). Alternatives the image cannot exclude: the Cassette Man, the volunteer.
- "Fritz" and "Jeremy" are also the first names of FNaF2's guards. No record connects them.
- The fifth name is not in the games. Do not supply one.

### 2.10 What does the fire end, and what does it not?

By FFPS's own framing it ends: the children's unrest ("It's time to rest", `ffps-completion-rest`; the graves), the daughter's, the Cassette Man, the place ("This place will not be remembered", `ffps-completion-remaining-nearby`), and the company (`ffps-completion-tutorial-atonement`).

The same game hedges every one of those. "For most of you, I believe" (`ffps-completion-peace-perhaps-more`). "A possibility… might" (`ffps-scup-overheating-neutralize`). A building drawn as condemned, not gone (`ffps-completion-slide-pizza-place-condemned`).

And the next games take them back. Someone is still held: "I will hold you here… No matter how many times they burn us" (`ucn-orville-he-tried-to-release`). The site survives under the Pizzaplex with its name (`security-breach-underground-pizza-place`; Help Wanted 2 uses the same name for FFPS's office, `hw2-first-aid-simulated-pizza-place`), a Funtime-Freddy-faced mass still moves there (`security-breach-tangle-composition`), and the company is back in business (`hw-tape-13-fe-hired-developer`).

**Position.** High confidence that the fire is presented as the end and is not one. The precise claim the records support: FFPS presents the fire as freeing the children, and it is the Cassette Man's end; later text says it did not end his old friend, and the blueprint never promised it would.

### 2.11 Is UCN part of the story at all?

Scott never says. Against: "the ultimate FNAF mashup" (`scott-ucn-store-once-again-trapped`); non-canon and FNaF World characters on the roster (`ucn-roster-noncanon-and-fnaf-world`); an office assembled from every earlier office (`ucn-office-skins`); his ruling that SL's custom night was not canon (`scott-2016-sl-custom-night-not-canon`). For: a single invented character, the One, runs through the lines of seven otherwise unrelated performers; the lines answer FFPS's ending; the same SL ruling says cutscenes are canon (`scott-2016-cutscenes-are-canon`), and UCN's last cutscene is the Golden Freddy one. Treat the gameplay as staging and the lines and cutscenes as text. Medium.

## 3. Problems in the current theory

Numbered for reference. Chapter ids are those in `theory.ts`.

1. **`ucn`, title and thesis.** "UCN: the son who cannot die" and "**The records lean towards Michael as UCN's player.**" They lean the other way (2.1). Should say: the records favour William Afton, medium; Michael is the main alternative. Suggested title: "UCN: the old friend's endless night".

2. **`ucn`, the Sister Location taunts.** "Scrap Baby offers 'your controlled shock'…, the job Michael did there… Circus Baby asks 'Want to see the Scooping Room?'…, where Michael was scooped… Ballora asks why he hides inside these walls". Each has a nearer source than Michael: UCN's own roster text (`ucn-roster-scrap-baby-controlled-shock`), Ballora's song (`sl-ballora-song`), and a machine William's company drew (`ffps-scup-blueprint`). Keep only "You won't die" (`sl-you-wont-die`, `ucn-scrap-baby-lines`), as counter-evidence to the William reading.

3. **`ucn`, the roster.** "Afton appears on the roster as an animatronic that **attacks** the player…, which is awkward if the player *is* Afton." Delete. Springtrap attacks on the same nights (`ucn-roster-two-forms-at-once`); the awkwardness belongs to the roster, under any reading.

4. **`ucn`, the Orville line.** "'He tried to release us… no matter how many times they burn us'… puts the player among those burned in FFPS, and Michael stayed in that fire". Two faults. The quotation is spliced: the line is "He tried to release you. He tried to release us." And "how many times" means more than one fire. If "us" includes the player, the only figure shown in two fires is the rabbit (`fnaf3-it-burns-springtrap-hidden`, `ffps-completion-fire`); if it does not, the line does not place the player in any fire. Either way it is not evidence for Michael.

5. **`ucn` and `faith`, the moral vocabulary.** "FFPS reserves 'Hell' for the killer…, while UCN's secret ending tells its player to rest his own soul" and "which fits the Michael reading without settling it". This is the theory contradicting itself. UCN's main game speaks Hell's language throughout: eternal fire (`ucn-jack-o-chica-burns-eternal`), "YOU WILL NOT BE SAVED" (`ucn-nightmare-not-spared-not-saved`), "death cannot save you" (`ucn-nightmarionne-lines`). If Hell is reserved for the killer, the man in that fire is the killer. The secret ending is the one item that needs explaining (2.1, argument 3), not the rule the rest should bend to. With William in the office the faith chapter's map becomes consistent, and gains a third term: Hell for the killer, rest for his victims, and one victim who is offered rest and will not take it.

6. **`afton-house`, "Part 2: a joint hypothesis through UCN".** "UCN's player is taunted with Sister Location's own details, which suggests Michael… If UCN's player is Michael, *and* the one he should not have killed is the FNaF4 child, then Michael is the older brother and the family is Afton." The first link fails, so the chain does. What UCN offers in its place, with William as the player, is different and weaker: the killer is told the Nightmares were his work first ("remade, but not by you", `ucn-nightmare-freddy-toysnhk`) and were illusions before ("This time, there is more than an illusion to fear", `ucn-nightmare-fredbear-lines`). That makes William the author of what happened in FNaF4's bedroom (low-medium) and bears on the plush chapter. It does not identify the older brother. The household chapter has to stand on SL and FNaF4 records (`sl-golden-freddy-cutscene-father`, `sl-private-room-fredbear-plush`, and what the fnaf4-sl memo brings) plus the purple car. Knock-on: relations `older-brother` same-as `michael-afton` (its evidence list includes `ucn-nightmare-freddy-toysnhk` and `ucn-scrap-baby-lines`), `crying-child` same-as `one-you-should-not-have-killed`, `ucn-protagonist` same-as `michael-afton`; the `ucn-protagonist` person entry; timeline event `t-ucn`.

7. **`afton-house`, Midnight Motorist.** counterEvidence lists `ffps-midnight-motorist-later-that-night`. Remove it: it is a data label, not reachable in play, so not evidence; and it is not counter to anything the chapter says. "Line 1" should add the yellow driver sprite (note on `ffps-midnight-motorist-closed-door`), the grey figure (`ffps-midnight-motorist-grey-person`), `ffps-midnight-motorist-find-a-way-in`, and the rival reading in which this is a victim's house (2.6).

8. **`golden`, the One.** "This archive identifies him with UCN's 'one you should not have killed'", with `ucn-golden-freddy-final-cutscene` under counterEvidence. With William as the player the cutscene is no longer counter-evidence. It supports the chapter's own thesis: the fifth child is the presence that remains. The crying-child identification becomes the alternative, and its two real supports (the Nightmares, the Death Coin's Fredbear) move to counterEvidence (2.2).

9. **`murders`, the order of deaths.** "When she died, relative to the others, is not given." It is given, at medium: "a wound first inflicted on me… to cause all of this" (`ffps-insanity-wound-first-inflicted`); "the way you lifted others" (`ffps-completion-shut-out`) with `fnaf2-give-gifts-give-life`; a Puppet without tear streaks (`ffps-security-puppet-no-tear-streaks`). List `hw2-pq4-graveyard-order` as counter-evidence: its puzzle order puts the Puppet last.

10. **`murders` and `open`, the gravestones.** "FFPS's Lorekeeper gravestones name four" and "There are four names… and five masks". There are five stones in the row, the fifth deliberately hidden, and a sixth apart (`ffps-lorekeeper-gravestones`, `ffps-lorekeeper-hill-stone`). The count matches the five; the mismatch the `open` chapter reports is not there. What stays open is the pairing (2.9).

11. **`murders`, the lure.** "The costume is the yellow rabbit: Fruity Maze puts Spring Bonnie behind a crying girl". Add what the minigame says the lie was: her dog is dead, and "He's not really dead… Follow me" (`ffps-fruity-maze-decay`, `ffps-fruity-maze-follow-me`). It is the only place the games show the content of a lure. UCN's cartoon repeats it as parody (`ucn-toy-chica-hsy-dog-lure`).

12. **`thesis`, Remnant.** "(2) What keeps the dead in machines is called **Remnant**". Overclaimed. The blueprint says a machine injects a substance called Remnant and is named for creating "ulterior presence" (`ffps-scup-blueprint`, `ffps-scup-remnant-reservoir-notes`). It does not say Remnant is what keeps the dead in machines, and the first hauntings happened without anyone's design: "I don't know how those tiny breaths of life came to inhabit those machines" (`ffps-insanity-tiny-breaths`). "(3) The same blueprint proposes a remedy". It records a risk, twice hedged, written by the people who wanted the effect (`ffps-scup-overheating-neutralize`). That the Cassette Man chose fire because of it is an inference.

13. **`springtrap`, Happiest Day against FFPS.** "Possible explanations: the good ending is not what happened; the Puppet-masked child is not the Puppet's own spirit; or the games simply conflict here. **This stays open.**" FFPS takes a side and the theory can report it. The Cassette Man describes a second luring and overpowering as a further crime ("he led them there again… robbed them of the only thing that they had. Again", `ffps-insanity-trap-again`), says "they will never find rest now. Not like this" (`ffps-insanity-tiny-breaths`), and the graves appear only after his fire. On FFPS's account, whatever FNaF3's good ending depicts did not hold. Why it did not stays open.

14. **`ffps`, thin citations.** "The franchise is a cover [[ffps-tutorial-franchisee]]": that record says only that there is a franchise. Cite `ffps-cassette-intro-paragraph-4`, `ffps-cassette-intro-vintage-attractions`, `ffps-completion-tutorial-atonement`. "Its arm shows the Puppet's stripes": the weakest Lefty record (the wiki itself suggests a texture error). Lead with `ffps-lefte-blueprint`, `ffps-lefte-suit-seal`, `ucn-roster-lefty-music-box`. "This archive reads it as what was left of Ennard": now supported by `ffps-molten-freddy-alley-wires-eyes` and `ffps-credits-returning-voices`. "This archive reads him as Michael keeping his promise": cite the echoes in 2.3. Missing from the chapter altogether: how the lure works, that the machines came because they were called, that Scrap Baby thought her father had called, the Insanity tape, and the company's part.

15. **Storyline beat `s-fire`.** "The Cassette Man gathers the last four haunted machines in one building and burns it". "Last" is not in the game, and later games show otherwise. The game shows the building burning and implies, without showing, that he set it. Suggest: "The Cassette Man calls four haunted machines into one building, and it burns with him inside."

16. **`ucn`, "every machine his family built".** The roster is every machine in the series, including characters no record ties to the Aftons and several Scott ruled non-canon (`ucn-roster-noncanon-and-fnaf-world`).

17. **`ucn`, counterEvidence.** `ucn-rockstar-bonnie-truest-friend` is one of five rhyming couplets and is colour. For the William reading the counter-evidence is `ucn-omc-ending`, `ucn-scrap-baby-lines`, `ucn-nightmare-fredbear-lines`, `ucn-circus-baby-lines` and `ucn-mr-hippo-just-a-story`.

18. **`open`, Old Man Consequences.** "Nothing says who he is" is right. The live question is who he is speaking to (2.1). Help Wanted 2's Old Man belongs in the same entry (`hw2-pq4-old-man`).

19. **`funtimes`, the companion blueprints.** "Its companion blueprints are a bear built to lure and extract [[ffps-lefte-blueprint]] and a unit that holds a heat reading at 98.6 [[ffps-rasc-blueprint]]", in a chapter titled "Afton Robotics: machines built to take children". Misattributed. Only the Scooper sheet is marked Afton Robotics, LLC. LEFTE and RASC are marked Fazbear Entertainment, Inc and are the hardware of the Cassette Man's trap: one lures the Puppet, the other fakes children for the animatronics to chase (`ffps-lefte-blueprint`, `ffps-rasc-blueprint`, `ffps-rasc-audio-central-server`). Move them to the FFPS chapter.

20. **`bite`, the lawsuit.** "The company's lawsuits show bites kept happening [[ffps-lawsuit-head-bitten]]". One comic complaint among randomised joke lawsuits ("doctors aren't sure how long it will stay that way"). It is the game joking about the Bite, not a report of further bites. Drop it or file it as colour.

21. **`partners`, HRY223.** The chapter hedges it properly, but lists `ffps-hry223-label` under counterEvidence, where it does not belong, and the label is still unverified (8). Drop it unless someone confirms it on screen.

22. **`plush` and `bite`, the daughter and the promise.** "The Cassette Man's daughter's death is simply undated": still undated, but no longer unordered; she died before the five (2.5), which matters to a chapter asking which ghosts could exist by 1983. And if William is UCN's player, Nightmare Fredbear's "Let me put you back together, then take you apart all over again" (`ucn-nightmare-fredbear-lines`) is the plush's promise thrown back at the man who made it: a second, weak echo for the plush chapter's callout. If Michael is the player it is his own SL line thrown back. The bite chapter cites the record as a neutral recurrence, which is the safe use.

23. **`canon-rules`, UCN's status.** The chapter rules on SL's custom night and is silent on UCN. Say that Scott gave no ruling, that he built it as Pizzeria Simulator's custom night and sold it as a "mashup" (`scott-2018-ucn-for-pizzeria-simulator`, `scott-ucn-store-once-again-trapped`), and how the archive treats it (2.11).

24. **Names outside `theory.ts`.** The entity id `henrys-daughter` and its group `emily` carry book-only names. The tag `toysnhk`, and five record ids that contain it, are a fan abbreviation. I left ids and entity links alone, as instructed. Thirty-one records' `verifiedVia` URLs point at the wiki page that holds the tape transcripts, and that page's title is a book-only name; this is unavoidable if the field is kept, so the site should not display it as text. The `ucn-protagonist` entity's theory text argues for Michael.

## 4. What the theory leaves unconnected

Each item: what it is, where it belongs, confidence.

1. **The Insanity tape as an account of motive.** Only three of the tape's nine records are cited by any layer. Unused: the two phases of the crime (`ffps-insanity-new-way-to-desecrate`, `ffps-insanity-lured-back`, `ffps-insanity-trap-again`), his own guilt (`ffps-insanity-wound-first-inflicted`, `ffps-insanity-could-make-myself-sleep`) and the plan (`ffps-insanity-tape-call-them-back`). Belongs at the head of the FFPS chapter as "why he built the trap". High for what he says; medium for the link to FNaF3's minigames.
2. **How the trap works.** `ffps-rasc-blueprint`, `ffps-rasc-audio-central-server`, `ffps-completion-labyrinth`, `ffps-completion-chasing-cries`, `ffps-already-inside-sign`, `ffps-lefty-rare-finds-five-dollars`, `ffps-scraptrap-deceptive-calling`, `ffps-scrap-baby-heard-call`, `ffps-tutorial-something-outside`. FFPS chapter. High.
3. **Scrap Baby's mistake.** She thinks her father called them to a feast of souls: `ffps-scrap-baby-played-into-our-hands`, `ffps-scrap-baby-completion-monologue`, `ffps-scrap-baby-make-you-proud-daddy`, `ffps-completion-not-called-by-who-you-assume`. It shows what the Funtimes believe they were "created to do" (the funtimes chapter) and that Elizabeth is still her father's daughter. Medium.
4. **The company's hand.** Blueprint ownership marks, the cover-up endings, "atoning for past mistakes", Utah: `ffps-insanity-certificate`, `ffps-blacklisted-ending`, `ffps-completion-tutorial-atonement`, `ffps-lawsuits-utah`, `ffps-tutorial-rebranded-disclaimer`. One paragraph in the FFPS chapter, and the start of the thread that runs to Help Wanted. High for the facts.
5. **Remnant's actual wording.** `ffps-scup-remnant-reservoir-notes`, `ffps-scup-overheating-neutralize`. Thesis and funtimes chapters. High for the wording; the interpretation at low-medium.
6. **Security Puppet's details.** The absent green-bracelet child, the missing tear streaks, the marks by the body, the terminal image: `ffps-security-puppet-assignment`, `ffps-security-puppet-no-tear-streaks`, `ffps-security-puppet-tracks-by-body`, `ffps-completion-security-puppet-terminal`. Murders chapter.
7. **Fruity Maze's content.** `ffps-fruity-maze-decay`, `ffps-fruity-maze-car-horn`. Murders chapter, "how the lure worked". Medium for the dog lie; the horn is colour.
8. **Midnight Motorist beyond the car.** JR's, the mound, the grey figure, "find a way in": afton-house, at low-medium with both readings; the mound and JR's to open questions.
9. **The Lorekeeper image in full.** Hidden fifth stone and hill stone: murders and open chapters (2.9).
10. **UCN's victims' lines.** The Puppet's and Withered Chica's lines are the two heaviest items in 2.1 and `theory.ts` cites neither (`ucn-puppet-lines` is cited by no layer at all; `ucn-withered-chica-toysnhk` only by the people page). Nor does it cite `ucn-nightmare-lines`, `ucn-nightmarionne-lines`, `ucn-jack-o-chica-toysnhk`, `ucn-mangle-toysnhk`, `ucn-happy-frog-never-rest`, `ucn-nedd-bear-forever`, `ucn-summoned-performers`. UCN chapter.
11. **What the place is.** `ucn-withered-bonnie-prison`, `ucn-mr-hippo-youre-dead`, `ucn-mr-hippo-afterlife-or-dream`, `ucn-nightmarionne-nightmare-you-wont-wake-from`, `ucn-music-man-eternal`, `ucn-toy-chica-dying`. The characters themselves call it a prison, a nightmare, an afterlife or a dream; none calls it Hell. UCN chapter, one sentence.
12. **UCN's two exits.** The old man's words are cited; what follows them (`ucn-omc-ending-drowning`) and the pairing with `ucn-golden-freddy-final-cutscene` are not. UCN and golden chapters.
13. **Stories inside the story.** Candy Cadet (three records), the two cartoons (seven records), Pigpatch, Mr. Hippo's duck story. One short section with the weight rule in 2.7. Low-medium for "five into one"; low for the rest.
14. **The site.** `ffps-completion-slide-pizza-place-condemned` with `security-breach-underground-pizza-place` and `hw2-first-aid-simulated-pizza-place`: FFPS's building is called "Freddy Fazbear's Pizza Place" on its own slide, Help Wanted 2 calls FFPS's office a "Pizza Place", and the Pizzaplex stands on a burnt "Freddy Fazbear's Pizza Place". The `burntrap` chapter. Medium to high (same name three times, burnt, buried; nothing says outright that it is the same building). `ffps-lawsuit-ground-gave-way` is colour.
15. **Lefty in UCN.** `ucn-lefty-lines`, `ucn-roster-lefty-music-box`. FFPS chapter, with the blueprint.
16. **"Elizabeth, if you still even remember that name"** (`ffps-completion-connection-terminated-elizabeth`) and "Fascinating, what they have become" (`ffps-scraptrap-fascinating`): what long binding does to a person. Funtimes or faith chapter. Low weight, good colour.
17. **Scott on these two games.** `scott-2018-ucn-for-pizzeria-simulator` is worth one inline citation in the UCN chapter. `scott-2018-ucn-voice-lines-when-they-kill-you`, `scott-ucn-store-once-again-trapped` and `scott-2017-ffps-patch-green-man` belong in `outsideStory`.
18. **Outside or colour.** `ffps-hry223-label`, `ffps-midnight-motorist-later-that-night` (not evidence); `ffps-intro-fake-8bit-tycoon`, `ffps-mediocrity-ending`, `ffps-bankruptcy-ending`, `ffps-lawsuit-head-bitten`, `ffps-lorekeeper-certificate`, `ffps-insanity-egg-baby-trigger`, `ffps-lefty-shh`, `ffps-tutorial-eggs-one-basket`, `ucn-toy-freddy-mr-hugs`, `ucn-dee-dee`, `ucn-death-coin`, `ucn-phone-guy-calls`, `ucn-office-skins`, `ucn-office-ffps-alley-posters`, `ucn-omc-ending-scream-audio`, `ucn-nightmare-bb-eventually`, `ucn-ballora-lines`, `ucn-rockstar-bonnie-truest-friend`, `ucn-toysnhk-face`.

## 5. Best exhibits

**The trap and the fire**
- `ffps-insanity-tape-call-them-back`: "I have to call them all back. All of them. Together in one place"
- `ffps-completion-labyrinth`: "A labyrinth with no exit, a maze with no prize. You don't even realize that you are trapped."
- `ffps-completion-old-friend-hell`: "for one of you, the darkest pit of Hell has opened to swallow you whole, so don't keep the Devil waiting, old friend."
- `ffps-completion-peace-perhaps-more`: "For most of you, I believe there is peace and perhaps more waiting for you after the smoke clears."
- `ffps-already-inside-sign`: "There's No One Here (I'm Already Inside)"
- Images: `ffps-insanity-rasc-blueprint.png`, `ffps-scrap-baby-salvage-intro.jpg`, `ffps-completion-pizza-place-condemned.png`, `ffps-certificate-of-completion.png`.

**The Cassette Man**
- `ffps-insanity-small-souls-prisons`: "Small souls trapped in prisons of my making now set to new purpose and used in ways I never thought imaginable."
- `ffps-insanity-wound-first-inflicted`: "a wound first inflicted on me, but then one that I let bleed out to cause all of this."
- `ffps-insanity-trap-again`: "He overpowered them again. And he robbed them of the only thing that they had. Again."
- `ffps-completion-remaining-nearby`: "I am remaining as well. I am nearby."

**The four machines**
- `ffps-scraptrap-still-me`: "You may not recognize me at first, but I assure you, it's still me."
- `ffps-scraptrap-always-come-back`: "I always come back."
- `ffps-completion-connection-terminated-elizabeth`: "I'm sorry to interrupt you, Elizabeth, if you still even remember that name"
- `ffps-scrap-baby-make-you-proud-daddy`: "I will make you proud, daddy! Watch, listen, and be full!"
- `ffps-molten-freddy-lines`: "Together aga-ain!" / "One bi-i-ig happy family!"
- `ffps-credits-william-afton`: "PJ Heywood - William Afton"
- Images: `ffps-scraptrap-alley.jpg`, `ffps-scrap-baby-alley.jpg`, `ffps-molten-freddy-alley.jpg`, `ffps-lefty-alley-rare-screen.jpg`, `ffps-insanity-lefte-blueprint.png`.

**The daughter**
- `ffps-completion-shut-out`: "the day you were shut out and left to die, no one was there to lift you up into their arms the way you lifted others into yours."
- `ffps-completion-not-content-to-disappear`: "I should have known you wouldn't be content to disappear, not my daughter."
- `ffps-completion-rest`: "I couldn't save you then, so let me save you now."
- Images: `ffps-security-puppet-child-outside.png` (the best single image in the slice: the Puppet at the EXIT, the child at the window), `ffps-completion-security-puppet-terminal.png`.

**Remnant**
- `ffps-scup-overheating-neutralize`: "There is a possibility that overheating might neutralize the effects permanently."
- `ffps-scup-remnant-reservoir-notes`: "Substance should be malleable, but not more."
- Image: `ffps-insanity-scup-blueprint.png`.

**UCN: the man in the office**
- `ucn-puppet-lines`: "I recognize you, but I'm not afraid of you... not anymore."
- `ucn-withered-chica-toysnhk`: "I was the first! I have seen everything!"
- `ucn-nightmare-lines`: "I AM YOUR WICKEDNESS... MADE OF FLESH."
- `ucn-nightmare-freddy-cant-perish`: "What a gift to relish: a victim that can't perish."
- `ucn-nightmarionne-lines`: "I am the fearful reflection of what you have created."
- `ucn-jack-o-chica-burns-eternal`: "The fire within me burns eternal and now you shall as well!"
- `ucn-withered-bonnie-prison`: "What is this new prison? Is it me trapped, or is it you? Perhaps it is us both."
- Image: `ucn-roster-teaser.jpg` (Springtrap and Afton on one roster).

**UCN: the one who runs the night**
- `ucn-nightmare-freddy-toysnhk`: "I am remade, but not by you. By the one you should not have killed."
- `ucn-orville-he-tried-to-release`: "He tried to release you. He tried to release us. But I'm not gonna let that happen."
- `ucn-omc-ending`: "Leave the demon to his demons. Rest your own soul. There is nothing else."
- `ucn-pigpatch-proverbs`: "If you sit by the river long enough, you will see the body of your enemy float by."
- `ucn-bear-of-vengeance-finale`: "I will find him in whatever land he has fled to. It is my destiny; and it is his."
- Images: `ucn-golden-freddy-final-cutscene.jpg`, `ucn-one-you-should-not-have-killed.png` (with Scott's caveat that the photo itself carries no lore).

**The franchisee**
- `ffps-completion-right-where-you-want-to-be`: "I have a feeling that you are right where you want to be."
- `ffps-scrap-baby-completion-monologue`: "You gathered them all together in one place, just like he asked you to."
- `ffps-scrap-baby-employer`: "You don't really know who your employer is...do you?"

**The five and the graves**
- `ffps-fruity-maze-follow-me`: "He's not really dead. / He is over here. / Follow me."
- `ffps-lorekeeper-gravestones`: "Gabriel / Fritz / Susie / Jeremy"
- Images: `ffps-lorekeeper-the-end.jpg` (use this, not the older `ffps-lorekeeper-gravestones.jpg`, which no record now uses), `ffps-fruity-maze-final-screen.jpg`.

**Midnight Motorist**
- `ffps-midnight-motorist-closed-door`: "This is my house. He can't ignore me like that."
- `ffps-midnight-motorist-ran-off`: "Ran off to that place again. He will be sorry when he gets back."
- `ffps-midnight-motorist-grey-person`: "Leave him alone tonight. He had a rough day."
- Image: `ffps-midnight-motorist-secret-drive.png`.

**Parables and cartoons**
- `ffps-candy-cadet-five-orphans`: "That night, there was a knock at the door."
- `ucn-mr-hippo-just-a-story`: "sometimes, a story's just a story."
- `ucn-toy-chica-hsy-bag-and-finale`: "once again I left with nothing but a broken heart. But tomorrow is another day!"
- Image: `ucn-toy-chica-finale.jpg`.

**The company**
- `ffps-insanity-certificate`: "prevented a tidy resolution to a messy problem"
- `ffps-tutorial-rebranded-disclaimer`: "Fazbear Entertainment is not responsible for disappearance, death, or dismemberment."

## 6. Filing table

Every record in the file, in file order (the first 116 are the original records, the rest were added in this pass). Thread numbers refer to section 1. Roles: `core`, `support`, `counter`, `colour`, `outside`. Counts: core 59, support 77, counter 4, colour 27, outside 5. "Counter" is judged against the readings this memo favours, so the four `counter` records are the ones that cut against William as UCN's player or against reading the stories as lore.

| # | Record | Thread | Role | Note |
|---|---|---|---|---|
| 1 | `ffps-intro-fake-8bit-tycoon` | 1.1 Trap and fire | colour | the game's own fake-out |
| 2 | `ffps-cassette-intro-paragraph-4` | 1.1 Trap and fire | core |  |
| 3 | `ffps-cassette-intro-seal-room` | 1.1 Trap and fire | support |  |
| 4 | `ffps-tutorial-franchisee` | 1.7 The franchisee | support |  |
| 5 | `ffps-tutorial-rebranded-disclaimer` | 1.10 The company and its cover-ups | support |  |
| 6 | `ffps-tutorial-something-outside` | 1.1 Trap and fire | support |  |
| 7 | `ffps-tutorial-saturday-party` | 1.1 Trap and fire | support |  |
| 8 | `ffps-tutorial-all-in-one-place` | 1.1 Trap and fire | core |  |
| 9 | `ffps-salvage-first-tape-alley` | 1.1 Trap and fire | support |  |
| 10 | `ffps-salvage-origins-unknown` | 1.2 The four salvaged machines | support | the game never says where they came from |
| 11 | `ffps-salvage-order` | 1.2 The four salvaged machines | core |  |
| 12 | `ffps-bad-ending-paragraph-four` | 1.1 Trap and fire | support |  |
| 13 | `ffps-credits-cassette-man` | 1.3 The Cassette Man | core | naming |
| 14 | `ffps-hry223-label` | 1.3 The Cassette Man | outside | unverified, possibly a file name; do not cite |
| 15 | `ffps-credits-william-afton` | 1.2 The four salvaged machines | core | naming |
| 16 | `ffps-molten-freddy-lines` | 1.2 The four salvaged machines | core |  |
| 17 | `ffps-scraptrap-always-come-back` | 1.2 The four salvaged machines | core |  |
| 18 | `ffps-scraptrap-deceptive-calling` | 1.1 Trap and fire | support |  |
| 19 | `ffps-scraptrap-still-me` | 1.7 The franchisee | core | also 1.2 |
| 20 | `ffps-scraptrap-fascinating` | 1.2 The four salvaged machines | support |  |
| 21 | `ffps-scrap-baby-employer` | 1.7 The franchisee | support | also 1.3 |
| 22 | `ffps-scrap-baby-heard-call` | 1.1 Trap and fire | support |  |
| 23 | `ffps-scrap-baby-not-expected` | 1.7 The franchisee | support |  |
| 24 | `ffps-scrap-baby-completion-monologue` | 1.6 Remnant | core | also 1.7: 'just like he asked you to' |
| 25 | `ffps-lefty-shh` | 1.4 The daughter, the Puppet and Lefty | colour |  |
| 26 | `ffps-lefty-alley-puppet-arm` | 1.4 The daughter, the Puppet and Lefty | support | weak: small, possibly a texture error |
| 27 | `ffps-lefte-blueprint` | 1.4 The daughter, the Puppet and Lefty | core |  |
| 28 | `ffps-rasc-blueprint` | 1.1 Trap and fire | support |  |
| 29 | `ffps-scup-blueprint` | 1.6 Remnant | core |  |
| 30 | `ffps-insanity-egg-baby-trigger` | 1.3 The Cassette Man | colour | how the tape is reached |
| 31 | `ffps-insanity-monster-helped-create` | 1.3 The Cassette Man | core |  |
| 32 | `ffps-insanity-small-souls-prisons` | 1.3 The Cassette Man | core | also 1.6 |
| 33 | `ffps-insanity-lured-back` | 1.3 The Cassette Man | support |  |
| 34 | `ffps-insanity-could-make-myself-sleep` | 1.3 The Cassette Man | support |  |
| 35 | `ffps-insanity-trap-again` | 1.3 The Cassette Man | core | also 1.6 |
| 36 | `ffps-insanity-tiny-breaths` | 1.3 The Cassette Man | core | also the moral map |
| 37 | `ffps-insanity-tape-call-them-back` | 1.1 Trap and fire | core |  |
| 38 | `ffps-insanity-certificate` | 1.10 The company and its cover-ups | support |  |
| 39 | `ffps-completion-connection-terminated-elizabeth` | 1.2 The four salvaged machines | core |  |
| 40 | `ffps-completion-labyrinth` | 1.1 Trap and fire | support |  |
| 41 | `ffps-completion-chasing-cries` | 1.1 Trap and fire | support |  |
| 42 | `ffps-completion-brave-volunteer` | 1.7 The franchisee | core |  |
| 43 | `ffps-completion-remaining-nearby` | 1.3 The Cassette Man | core |  |
| 44 | `ffps-completion-give-up-spirits` | 1.1 Trap and fire | core | also 1.6 and the moral map |
| 45 | `ffps-completion-peace-perhaps-more` | 1.1 Trap and fire | core | what the fire is meant to end |
| 46 | `ffps-completion-old-friend-hell` | 1.5 UCN: who is in the office | core | also 1.1 and the moral map |
| 47 | `ffps-completion-my-daughter` | 1.4 The daughter, the Puppet and Lefty | core |  |
| 48 | `ffps-completion-shut-out` | 1.4 The daughter, the Puppet and Lefty | core |  |
| 49 | `ffps-completion-rest` | 1.4 The daughter, the Puppet and Lefty | core | also 1.1 |
| 50 | `ffps-completion-fire` | 1.1 Trap and fire | core |  |
| 51 | `ffps-completion-security-puppet-terminal` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 52 | `ffps-completion-tutorial-atonement` | 1.10 The company and its cover-ups | core |  |
| 53 | `ffps-completion-achievement` | 1.1 Trap and fire | support |  |
| 54 | `ffps-lorekeeper-gravestones` | 1.8 The five and the gravestones | core |  |
| 55 | `ffps-lorekeeper-certificate` | 1.8 The five and the gravestones | colour |  |
| 56 | `ffps-mediocrity-ending` | 1.10 The company and its cover-ups | colour |  |
| 57 | `ffps-bankruptcy-ending` | 1.10 The company and its cover-ups | colour |  |
| 58 | `ffps-blacklisted-ending` | 1.10 The company and its cover-ups | support |  |
| 59 | `ffps-fruity-maze-decay` | 1.8 The five and the gravestones | support | the lure |
| 60 | `ffps-fruity-maze-follow-me` | 1.8 The five and the gravestones | core | the lure |
| 61 | `ffps-midnight-motorist-secret-drive` | 1.9 Midnight Motorist household | core |  |
| 62 | `ffps-midnight-motorist-jrs` | 1.9 Midnight Motorist household | support |  |
| 63 | `ffps-midnight-motorist-mound` | 1.9 Midnight Motorist household | support | unexplained |
| 64 | `ffps-midnight-motorist-grey-person` | 1.9 Midnight Motorist household | support |  |
| 65 | `ffps-midnight-motorist-closed-door` | 1.9 Midnight Motorist household | core |  |
| 66 | `ffps-midnight-motorist-ran-off` | 1.9 Midnight Motorist household | core |  |
| 67 | `ffps-midnight-motorist-later-that-night` | 1.9 Midnight Motorist household | outside | data-only; not evidence under the source policy |
| 68 | `ffps-security-puppet-assignment` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 69 | `ffps-security-puppet-trapped` | 1.4 The daughter, the Puppet and Lefty | core |  |
| 70 | `ffps-security-puppet-dead-child` | 1.4 The daughter, the Puppet and Lefty | core |  |
| 71 | `ffps-candy-cadet-five-keys` | 1.11 Parables and cartoons | support | low weight |
| 72 | `ffps-candy-cadet-five-orphans` | 1.11 Parables and cartoons | support | low weight; two verbal echoes |
| 73 | `ffps-candy-cadet-five-kittens` | 1.11 Parables and cartoons | support | low weight |
| 74 | `ffps-lawsuits-utah` | 1.10 The company and its cover-ups | support | the only real-world place named |
| 75 | `ffps-lawsuit-head-bitten` | 1.10 The company and its cover-ups | colour | a joke |
| 76 | `ucn-roster-afton` | 1.2 The four salvaged machines | core | naming; not evidence about the player, see 2.1 |
| 77 | `scott-ucn-character-guide-afton` | 1.2 The four salvaged machines | core | naming, in Scott's words |
| 78 | `ucn-afton-always-come-back` | 1.2 The four salvaged machines | support |  |
| 79 | `ucn-nightmare-freddy-toysnhk` | 1.5 UCN: who is in the office | core | also 1.5 (who runs the night) |
| 80 | `ucn-nightmare-freddy-cant-perish` | 1.5 UCN: who is in the office | core |  |
| 81 | `ucn-withered-chica-toysnhk` | 1.5 UCN: who is in the office | core | also 1.8 and 1.5 (who runs the night) |
| 82 | `ucn-mangle-toysnhk` | 1.5 UCN: who runs the night | support |  |
| 83 | `ucn-jack-o-chica-toysnhk` | 1.5 UCN: who is in the office | support | also 1.5 (who runs the night) |
| 84 | `ucn-happy-frog-never-rest` | 1.5 UCN: who runs the night | support |  |
| 85 | `ucn-nedd-bear-forever` | 1.5 UCN: who runs the night | support |  |
| 86 | `ucn-orville-he-tried-to-release` | 1.5 UCN: who runs the night | core | also 1.5 (who is in the office) and 1.1 |
| 87 | `ucn-toysnhk-face` | 1.5 UCN: who runs the night | colour | Scott: the photo carries no lore |
| 88 | `ucn-nightmare-lines` | 1.5 UCN: who is in the office | core |  |
| 89 | `ucn-nightmare-fredbear-lines` | 1.5 UCN: who is in the office | counter | best lines for the Michael reading |
| 90 | `ucn-nightmarionne-lines` | 1.5 UCN: who is in the office | core |  |
| 91 | `ucn-puppet-lines` | 1.5 UCN: who is in the office | core | also 1.4 |
| 92 | `ucn-lefty-lines` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 93 | `ucn-scrap-baby-lines` | 1.5 UCN: who is in the office | counter | 'You won't die' was said to Michael |
| 94 | `ucn-circus-baby-lines` | 1.5 UCN: who is in the office | counter | weak |
| 95 | `ucn-withered-bonnie-prison` | 1.5 UCN: who is in the office | support | what the place is |
| 96 | `ucn-summoned-performers` | 1.5 UCN: who runs the night | support |  |
| 97 | `ucn-music-man-eternal` | 1.5 UCN: who is in the office | support |  |
| 98 | `ucn-rockstar-bonnie-truest-friend` | 1.5 UCN: who is in the office | colour | one of five rhyming couplets |
| 99 | `ucn-ballora-lines` | 1.5 UCN: who is in the office | colour | her Sister Location song reworked |
| 100 | `ucn-toy-chica-dying` | 1.5 UCN: who is in the office | support | the loop |
| 101 | `ucn-nightmare-bb-eventually` | 1.5 UCN: who is in the office | colour |  |
| 102 | `ucn-candy-cadet-fragments` | 1.11 Parables and cartoons | colour |  |
| 103 | `ucn-mr-hippo-just-a-story` | 1.11 Parables and cartoons | counter | a warning against over-reading |
| 104 | `ucn-mr-hippo-duck-feeder` | 1.11 Parables and cartoons | colour |  |
| 105 | `ucn-toy-freddy-mr-hugs` | 1.5 UCN's format (roster, office, development) | colour |  |
| 106 | `ucn-omc-ending` | 1.5 UCN: who runs the night | core | on its plain sense it is counter to the William reading, see 2.1 |
| 107 | `ucn-omc-ending-drowning` | 1.5 UCN: who runs the night | support |  |
| 108 | `ucn-omc-ending-scream-audio` | 1.5 UCN: who runs the night | colour | unintelligible; cite no words |
| 109 | `ucn-golden-freddy-final-cutscene` | 1.5 UCN: who runs the night | core |  |
| 110 | `ucn-death-coin-fredbear` | 1.5 UCN: who runs the night | support |  |
| 111 | `ucn-death-coin` | 1.5 UCN's format (roster, office, development) | colour |  |
| 112 | `ucn-dee-dee` | 1.5 UCN's format (roster, office, development) | colour |  |
| 113 | `ucn-office-ffps-alley-posters` | 1.5 UCN's format (roster, office, development) | colour |  |
| 114 | `ucn-roster-includes-ffps-four` | 1.5 UCN: who is in the office | support |  |
| 115 | `ucn-protagonist-unnamed-killer` | 1.5 UCN: who is in the office | core | the aggregate statement that the player is unnamed |
| 116 | `ucn-phone-guy-calls` | 1.5 UCN's format (roster, office, development) | colour |  |
| 117 | `ffps-cassette-intro-vintage-attractions` | 1.1 Trap and fire | support | the cover story |
| 118 | `ffps-intro-scrap-baby-finishes-countdown` | 1.1 Trap and fire | support |  |
| 119 | `ffps-insanity-new-way-to-desecrate` | 1.3 The Cassette Man | core |  |
| 120 | `ffps-insanity-wound-first-inflicted` | 1.4 The daughter, the Puppet and Lefty | core | order of deaths; also 1.3 |
| 121 | `ffps-completion-not-called-by-who-you-assume` | 1.1 Trap and fire | core | also 1.2 |
| 122 | `ffps-completion-story-ends` | 1.1 Trap and fire | support |  |
| 123 | `ffps-completion-right-where-you-want-to-be` | 1.7 The franchisee | core |  |
| 124 | `ffps-completion-not-content-to-disappear` | 1.4 The daughter, the Puppet and Lefty | core |  |
| 125 | `ffps-scrap-baby-played-into-our-hands` | 1.7 The franchisee | support | also 1.1 |
| 126 | `ffps-scrap-baby-make-you-proud-daddy` | 1.2 The four salvaged machines | core | also 1.6 |
| 127 | `ffps-scrap-baby-should-have-known` | 1.7 The franchisee | support |  |
| 128 | `ffps-already-inside-sign` | 1.1 Trap and fire | support |  |
| 129 | `ffps-lefty-rare-finds-five-dollars` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 130 | `ffps-molten-freddy-alley-wires-eyes` | 1.2 The four salvaged machines | core |  |
| 131 | `ffps-scrap-baby-alley-claw` | 1.2 The four salvaged machines | support |  |
| 132 | `ffps-scraptrap-alley-remains` | 1.2 The four salvaged machines | support |  |
| 133 | `ffps-molten-freddy-knock-knock` | 1.2 The four salvaged machines | colour | echo of the Five Orphans |
| 134 | `ffps-credits-returning-voices` | 1.2 The four salvaged machines | core |  |
| 135 | `ffps-scup-overheating-neutralize` | 1.6 Remnant | core | also 1.1 |
| 136 | `ffps-scup-remnant-reservoir-notes` | 1.6 Remnant | core |  |
| 137 | `ffps-lefte-suit-seal` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 138 | `ffps-rasc-audio-central-server` | 1.1 Trap and fire | support |  |
| 139 | `ffps-completion-slide-pizza-place-condemned` | 1.1 Trap and fire | support | what the fire does not end |
| 140 | `ffps-lorekeeper-hill-stone` | 1.8 The five and the gravestones | core | also 1.4 |
| 141 | `ffps-tutorial-eggs-one-basket` | 1.7 The franchisee | colour |  |
| 142 | `ffps-fruity-maze-car-horn` | 1.8 The five and the gravestones | colour | not checked by ear |
| 143 | `ffps-midnight-motorist-find-a-way-in` | 1.9 Midnight Motorist household | support |  |
| 144 | `ffps-security-puppet-tracks-by-body` | 1.4 The daughter, the Puppet and Lefty | support | weak: seen only in a stitched map |
| 145 | `ffps-security-puppet-no-tear-streaks` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 146 | `ffps-lawsuit-ground-gave-way` | 1.10 The company and its cover-ups | colour | a joke |
| 147 | `scott-2017-ffps-patch-green-man` | 1.9 Midnight Motorist household | outside | development commentary |
| 148 | `ucn-jack-o-chica-burns-eternal` | 1.5 UCN: who is in the office | support |  |
| 149 | `ucn-nightmarionne-nightmare-you-wont-wake-from` | 1.5 UCN: who is in the office | support | what the place is |
| 150 | `ucn-nightmare-not-spared-not-saved` | 1.5 UCN: who is in the office | core |  |
| 151 | `ucn-no-light-can-save-you` | 1.5 UCN: who is in the office | colour | UCN's own flashlight mechanic |
| 152 | `ucn-withered-bonnie-consequences-of-failure` | 1.5 UCN: who is in the office | support |  |
| 153 | `ucn-mangle-take-apart-put-back-together` | 1.5 UCN: who is in the office | support |  |
| 154 | `ucn-mr-hippo-youre-dead` | 1.5 UCN: who is in the office | support | what the place is |
| 155 | `ucn-mr-hippo-afterlife-or-dream` | 1.5 UCN: who is in the office | support | what the place is |
| 156 | `ucn-pigpatch-proverbs` | 1.5 UCN: who runs the night | support |  |
| 157 | `ucn-fredbear-lines` | 1.5 UCN: who runs the night | colour | wording unverified |
| 158 | `ucn-roster-scrap-baby-controlled-shock` | 1.5 UCN: who is in the office | support | answers a Michael argument |
| 159 | `ucn-roster-lefty-music-box` | 1.4 The daughter, the Puppet and Lefty | support |  |
| 160 | `ucn-roster-two-forms-at-once` | 1.5 UCN: who is in the office | core | answers a Michael argument |
| 161 | `ucn-roster-noncanon-and-fnaf-world` | 1.5 UCN's format (roster, office, development) | support |  |
| 162 | `ucn-office-skins` | 1.5 UCN's format (roster, office, development) | colour |  |
| 163 | `ucn-toy-chica-hsy-premise` | 1.11 Parables and cartoons | support | low weight |
| 164 | `ucn-toy-chica-hsy-dog-lure` | 1.11 Parables and cartoons | support | low weight; also 1.8 |
| 165 | `ucn-toy-chica-hsy-find-a-window` | 1.11 Parables and cartoons | support | low weight; also 1.9 |
| 166 | `ucn-toy-chica-hsy-bag-and-finale` | 1.11 Parables and cartoons | support | low weight |
| 167 | `ucn-bear-of-vengeance-premise` | 1.11 Parables and cartoons | support | low weight |
| 168 | `ucn-bear-of-vengeance-consequence` | 1.11 Parables and cartoons | colour |  |
| 169 | `ucn-bear-of-vengeance-finale` | 1.11 Parables and cartoons | support | low weight; also 1.5 (who runs the night) |
| 170 | `scott-2018-ucn-voice-lines-when-they-kill-you` | 1.5 UCN's format (roster, office, development) | outside | development commentary |
| 171 | `scott-ucn-store-once-again-trapped` | 1.5 UCN's format (roster, office, development) | outside | marketing copy |
| 172 | `scott-2018-ucn-for-pizzeria-simulator` | 1.5 UCN's format (roster, office, development) | support | out-of-universe, but ties UCN to FFPS |

## 7. Records added and fixed

### Added (56)

All were checked against a wiki transcript, a screenshot viewed at full size, or Steam's own API, and each carries `verifiedVia`. Blueprint, slide, sign and gravestone text was read from the images. Quotes were machine-checked against the cached sources.

**FFPS (30)**

- `ffps-cassette-intro-vintage-attractions`: Intro tape: a test of 'vintage interactive attractions'
- `ffps-intro-scrap-baby-finishes-countdown`: Opening scene: Scrap Baby finishes the tape's countdown
- `ffps-insanity-new-way-to-desecrate`: Insanity tape: 'he found a new way to desecrate, to humiliate, to destroy'
- `ffps-insanity-wound-first-inflicted`: Insanity tape: 'a wound first inflicted on me'
- `ffps-completion-not-called-by-who-you-assume`: Completion: 'nor have you been called here by the individual you assume'
- `ffps-completion-story-ends`: Completion: 'This is where your story ends.'
- `ffps-completion-right-where-you-want-to-be`: Completion: 'you are right where you want to be'
- `ffps-completion-not-content-to-disappear`: Completion: 'I should have known you wouldn't be content to disappear'
- `ffps-scrap-baby-played-into-our-hands`: Scrap Baby: 'This was a gift, for us.'
- `ffps-scrap-baby-make-you-proud-daddy`: Scrap Baby: 'I will make you proud, daddy!'
- `ffps-scrap-baby-should-have-known`: Scrap Baby: 'You should've known I'd find you.'
- `ffps-already-inside-sign`: 'There's No One Here (I'm Already Inside)'
- `ffps-lefty-rare-finds-five-dollars`: Lefty is also for sale: $5, liability 9
- `ffps-molten-freddy-alley-wires-eyes`: Molten Freddy rare screen: a tangle of wires and loose eyes
- `ffps-scrap-baby-alley-claw`: Scrap Baby rare screen: a claw for a hand
- `ffps-scraptrap-alley-remains`: Rare screen: the rabbit in the alley, with remains inside
- `ffps-molten-freddy-knock-knock`: Molten Freddy: 'Knock knock, I'm here!'
- `ffps-credits-returning-voices`: Credits: Scrap Baby and Molten Freddy keep their Sister Location voices
- `ffps-scup-overheating-neutralize`: SCUP blueprint: overheating 'might neutralize the effects permanently'
- `ffps-scup-remnant-reservoir-notes`: SCUP blueprint: Remnant is a substance, kept heated and malleable
- `ffps-lefte-suit-seal`: LEFTE blueprint: 'Behavior upon suit-seal not guaranteed'
- `ffps-rasc-audio-central-server`: RASC blueprint: emitters and audio run from a central server
- `ffps-completion-slide-pizza-place-condemned`: Completion slide: 'Freddy Fazbear's Pizza Place', condemned
- `ffps-lorekeeper-hill-stone`: Lorekeeper screen: a sixth stone apart on the hill, and 'THE END'
- `ffps-tutorial-eggs-one-basket`: Tutorial Unit: 'put all your eggs into one basket'
- `ffps-fruity-maze-car-horn`: Fruity Maze's last round ends on a car horn
- `ffps-midnight-motorist-find-a-way-in`: Driver: 'I'll find a way in from outside...'
- `ffps-security-puppet-tracks-by-body`: Security Puppet: tread marks on the ground near the body
- `ffps-security-puppet-no-tear-streaks`: Security Puppet: the mask has no tear streaks
- `ffps-lawsuit-ground-gave-way`: Lawsuit: the ground gave way and a boy was trapped below for thirteen hours

**UCN (22)**

- `ucn-jack-o-chica-burns-eternal`: Jack-O-Chica: 'burns eternal and now you shall as well'
- `ucn-nightmarionne-nightmare-you-wont-wake-from`: Nightmarionne: 'a nightmare that you won't wake from'
- `ucn-nightmare-not-spared-not-saved`: Nightmare: 'YOU WILL NOT BE SPARED. YOU WILL NOT BE SAVED.'
- `ucn-no-light-can-save-you`: Nightmare Freddy and Nightmare BB: no light can save you now
- `ucn-withered-bonnie-consequences-of-failure`: Withered Bonnie: 'face the consequences of your failure'
- `ucn-mangle-take-apart-put-back-together`: Mangle: 'take-apart-and-put-back-together'
- `ucn-mr-hippo-youre-dead`: Mr. Hippo: 'life goes on... Not for you. You're dead.'
- `ucn-mr-hippo-afterlife-or-dream`: Mr. Hippo: 'this is my afterlife or my dream'
- `ucn-pigpatch-proverbs`: Pigpatch: 'you will see the body of your enemy float by'
- `ucn-fredbear-lines`: Fredbear's distorted lines (wording as reported)
- `ucn-roster-scrap-baby-controlled-shock`: Roster text: use 'a controlled shock' on Scrap Baby
- `ucn-roster-lefty-music-box`: Roster text: Lefty is soothed by the music box, like the Marionette
- `ucn-roster-two-forms-at-once`: The roster holds two forms of the same characters at once
- `ucn-roster-noncanon-and-fnaf-world`: The roster mixes in Halloween Edition and FNaF World characters
- `ucn-office-skins`: The office is assembled from every earlier office
- `ucn-toy-chica-hsy-premise`: Toy Chica: The High School Years – a new 'crush' every episode
- `ucn-toy-chica-hsy-dog-lure`: Toy Chica cartoon: 'someone ran over his dog in front of my house'
- `ucn-toy-chica-hsy-find-a-window`: Toy Chica cartoon: 'if he doesn't open the door, I'll just find a window'
- `ucn-toy-chica-hsy-bag-and-finale`: Toy Chica cartoon: the backpack of parts, and 'tomorrow is another day'
- `ucn-bear-of-vengeance-premise`: The samurai cartoon: the Bear's revenge on the Fox always fails
- `ucn-bear-of-vengeance-consequence`: The samurai cartoon: each failure brings a 'consequence'
- `ucn-bear-of-vengeance-finale`: The samurai cartoon's finale: 'I will pursue the Fox'

**Scott's own words about these two games (4)**, filed here beside the existing `scott-ucn-character-guide-afton`. They use `game: "scott"` and so a `scott-` id; none duplicates a record in `scott.json` as of this pass.

- `scott-2017-ffps-patch-green-man`: Scott's FFPS patch notes: 'Green Man is easier to talk to.'
- `scott-2018-ucn-voice-lines-when-they-kill-you`: Scott: most UCN characters only speak 'if (when) they kill you'
- `scott-ucn-store-once-again-trapped`: UCN store text: 'once again be trapped alone in an office'
- `scott-2018-ucn-for-pizzeria-simulator`: Scott: 'an Ultimate Custom Night for Pizzeria Simulator'

### Fixed (46 records changed in substance, 8 given cross-links only; no id renamed or deleted)

**Wrong or overstated**

- `ffps-cassette-intro-paragraph-4`: the quote was one word over the 35-word limit; trimmed.
- `ffps-lawsuit-head-bitten`: the quote joined two numbered paragraphs of the complaint with a full stop that is not in the source; now separated with " / " and explained in the note.
- `ffps-scrap-baby-employer`: location corrected to her salvage voice line.
- `ffps-lorekeeper-gravestones`: claim rewritten after viewing the 1920x1080 capture. It now says five stones stand in a row (four legible, the fifth hidden by grass) and a sixth stands apart; the image is now `ffps-lorekeeper-the-end.jpg`. The older image file `ffps-lorekeeper-gravestones.jpg` is no longer used by any record.
- `ffps-security-puppet-assignment`: adds that the assigned child never appears in the first three plays.
- `ffps-security-puppet-trapped`: adds the child at the window fading from view; image added.
- `ffps-lefte-blueprint`: claim now lists all three labelled parts, including the navigational sensors.
- `ffps-candy-cadet-five-keys`, `ffps-candy-cadet-five-orphans`, `ffps-candy-cadet-five-kittens`: the one-line summaries left out what makes the stories usable (the furnace, "brought them together in one place", the knock, the snake he would not get rid of). Rewritten as fuller, faithful paraphrases with short verbatim phrases.
- `ucn-lefty-lines`, `ucn-nightmare-fredbear-lines`, `ucn-ballora-lines`: missing lines added to the claims.
- `ucn-protagonist-unnamed-killer`: claim reworded so that it states only what the game does (it names no one), and the note no longer leans to either reading.

**Book-only names and fan labels removed from prose**

- A book-only name for the Cassette Man was in the claim or notes of `ffps-credits-cassette-man`, `ffps-hry223-label`, `ffps-scrap-baby-completion-monologue`, `ffps-rasc-blueprint`, `ffps-completion-fire`, `ucn-roster-afton`, `ucn-protagonist-unnamed-killer` and `ucn-omc-ending-scream-audio`, and as a tag on the first two. A book-only name for the fifth child was in the notes of `ffps-lorekeeper-gravestones` and `ucn-roster-afton`. All removed.
- Fan labels for the One were in the notes of `ucn-summoned-performers`, `ucn-golden-freddy-final-cutscene` and `ucn-happy-frog-never-rest`. Removed.
- Not changed, because other layers depend on them: the entity id `henrys-daughter` (used as a person tag on four records) and the tag `toysnhk` (nine records).

**Caveats added so a record cannot be over-read**

- Not evidence, or not yet: `ffps-hry223-label` (may be a file name), `ffps-midnight-motorist-later-that-night` (data-only).
- Unverified detail flagged: `ffps-midnight-motorist-ran-off` (footprints), `ffps-fruity-maze-follow-me` (which speaker says which line).
- What a line can and cannot show: `ucn-withered-chica-toysnhk` ("him" is someone else; first of what is unstated), `ucn-orville-he-tried-to-release` (more than one burning; two fires are shown), `ucn-puppet-lines`, `ucn-scrap-baby-lines`, `ucn-circus-baby-lines`, `ucn-nightmarionne-lines`, `ucn-omc-ending` (text checked against sprite rips; the listener is not shown), `ucn-golden-freddy-final-cutscene` (fourteenth cutscene; FNaF1 model), `ucn-roster-afton` (roster text; Springtrap is a separate entry), `ffps-insanity-trap-again` (FNaF3's minigames fit; the tape names nothing), `ffps-insanity-could-make-myself-sleep`, `ffps-scraptrap-still-me`, `ffps-scrap-baby-not-expected`.
- Cross-slice pointers added to notes: `ffps-scup-blueprint` (Special Delivery's Remnant), `ucn-nightmare-fredbear-lines` (Special Delivery's Springtrap), `ffps-lorekeeper-gravestones` (FNaF3's heads, the FNaF2 guards' first names, Help Wanted 2's "Remember Jeremy?").
- Description from sprites or Scott's words: `ffps-midnight-motorist-secret-drive` (image added; car colour; lap 4), `ffps-midnight-motorist-closed-door` (the driver is yellow), `ffps-midnight-motorist-grey-person` (sprite described), `ffps-midnight-motorist-jrs` (Scott's "Green Man"), `ffps-scraptrap-fascinating` (his one remaining line).

**People tags.** New id `ffps-franchisee` on eight records (four existing: `ffps-tutorial-franchisee`, `ffps-completion-brave-volunteer`, `ffps-scraptrap-still-me`, `ffps-scrap-baby-not-expected`). New id `pigpatch` on one new record. Neither has an entity page yet.

**Cross-links only:** `ffps-credits-william-afton`, `ffps-molten-freddy-lines`, `ffps-completion-shut-out`, `ffps-completion-tutorial-atonement`, `ffps-security-puppet-dead-child`, `ucn-jack-o-chica-toysnhk`, `ucn-nightmare-lines`, `ucn-roster-includes-ffps-four`.

**Records that should not carry weight** (kept, as instructed): `ffps-hry223-label`, `ffps-midnight-motorist-later-that-night`, and `ffps-lefty-alley-puppet-arm` (a few pixels the wiki itself doubts).

**Images added (9, all credited):** `ffps-lorekeeper-the-end.jpg`, `ffps-security-puppet-child-outside.png`, `ffps-midnight-motorist-secret-drive.png`, `ffps-molten-freddy-alley.jpg`, `ffps-scrap-baby-alley.jpg`, `ffps-scraptrap-alley.jpg`, `ffps-completion-pizza-place-condemned.png`, `ucn-roster-teaser.jpg`, `ucn-toy-chica-finale.jpg`.

**Checked and found to have nothing to record:** Molten Freddy only laughs in UCN; the wiki lists no UCN lines for Ennard, Springtrap, the phantoms or Freddy; Foxy's, Rockstar Freddy's, Rockstar Foxy's, Rockstar Chica's and Toy Freddy's lines, Funtime Foxy's remaining lines, and Happy Frog's and Orville's ordinary lines are stage patter. All 95 quotes already in the file were machine-checked against the transcripts; only the two listed above needed changing.

## 8. Could not verify

Things that matter and that I could not confirm, with what would confirm them.

1. **`HRY223`** (`ffps-hry223-label`). The wiki says the Insanity tape "is called HRY223" without saying whether that is on-screen text or a file name. No screenshot shows it. A capture of the Insanity-ending screen, or a look at the game's files, would settle it. If it is a file name it is not evidence.
2. **The footprints behind the Midnight Motorist house** (`ffps-midnight-motorist-ran-off`). Two wiki pages disagree ("a pair of rabbit-like footprints"; "a three-toed footprint from an unknown character"). The only image I found is a fan-stitched map, in which the marks are too faint to judge. A clean, brightened capture of that one frame would settle their number and shape.
3. **"Later that night"** (`ffps-midnight-motorist-later-that-night`). A reported frame name. Not checked, and inadmissible in any case.
4. **Fruity Maze's text colours and its car horn** (`ffps-fruity-maze-follow-me`, `ffps-fruity-maze-car-horn`). Which speaker says which line rests on two wiki descriptions; the horn rests on the wiki's audio listing. Gameplay footage with sound would settle both.
5. **The marks by the body in Security Puppet** (`ffps-security-puppet-tracks-by-body`). Seen only in the wiki's stitched frame map. A single in-game frame would confirm them; whether they are tyre tracks would stay a reading.
6. **Fredbear's three UCN lines** (`ucn-fredbear-lines`). The wiki warns its own transcription may be wrong. The clips are reused for Dreadbear in Curse of Dreadbear; if Help Wanted's subtitle data covers them, the hw analyst can confirm the words.
7. **Whether anything stands at the lake in UCN's Old Man Consequences scene** besides the old man, and what exactly sinks. The wiki's gallery lists only his sprite, the pond, a tree and the two text boxes. Footage would show whether the scene marks who the listener is, which bears directly on 2.1.
8. **Whether Lefty is shown burning** (note on `ffps-completion-fire`). The wiki says he is the only one not shown. A frame-by-frame look at the Completion cutscene would confirm it.
9. **Whether Scott has ever said who UCN's player is.** Nothing in his Steam posts for either game does. His August 2018 video interview may touch UCN; YouTube captions were blocked from this machine, and a forum summary says he gave no lore answers. Not recorded. A transcript would settle it and could decide 2.1 outright.
10. **UCN's voice cast.** The wiki's "credits" for UCN appear to come from a casting notice, not an in-game screen, and include a role label the game never uses. Not used.
11. **The wiki's remark that FNaF4's older brother speaks in grey text** (note on `ffps-midnight-motorist-grey-person`). For the fnaf4-sl analyst to confirm from FNaF4 screenshots.
12. **Pigpatch's cut line** about the player still thinking he is a night guard. Shown by the voice actor, not in the released game. Not evidence, and not recorded; mentioned only in the note on `ucn-pigpatch-proverbs`.

Leads that belong to other slices (I did not record them; status as of the end of this pass):

- **Special Delivery's Springtrap repeats UCN's Nightmare lines** to his own victims. One is now a record, `sd-springtrap-pulled-apart-put-back-together`, though its note does not mention that the words are Nightmare Fredbear's in UCN (`ucn-nightmare-fredbear-lines`). Two are not yet recorded: "You will not be spared. You will not be saved." and "I'm here to claim what is left of you." (wiki, William Afton audio page), which are Nightmare's (`ucn-nightmare-not-spared-not-saved`, `ucn-nightmare-lines`). Together they are the strongest later-game support for William as UCN's player.
- **Sister Location's Private Room**: the keypad code and the camera feeds of FNaF4's house. Not in `fnaf4-sl.json` when I looked. It carries the Afton-household chapter if the UCN route is closed (3, item 6).
- **The Old Man's lines in Security Breach's Princess Quest** (wiki: "Your quest is done. Time to sleep"). Compare `ucn-omc-ending`: in both he tells his listener to rest.
- **FNaF3's "public auction"** (`fnaf3-it-burns-newspaper`) and FFPS's "Rare Finds Auction": worth one sentence if the fnaf123 memo agrees.
