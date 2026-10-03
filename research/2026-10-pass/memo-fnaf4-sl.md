# Memo: slice `fnaf4-sl` (FNaF4, FNaF4 Halloween Edition, FNaF World, Sister Location)

Analyst pass, phase 1. The file now holds **160 records** (98 before): **62 added**, **44 existing records changed** (22 corrections of substance, 22 cross-references or verification notes), no id renamed or deleted. 26 images added with credits. `npx tsx scripts/validate.ts` ends `OK`; `npx tsc -b` is clean.

How things were checked. The wiki was used for transcripts and screenshots only. Everything visual was looked at directly: in-game screenshots, ripped game textures, and frames of gameplay captures (video ids are in each record's `verifiedVia`). There is one exception, stated here so nobody has to guess. My image input stopped working near the end of the pass, so I did not see the pictures behind the last four records (`fnaf4-left-hall-grandfather-clock`, `fw-android-port-clock-ending`, `fw-drowning-ending`, `fw-chippers-revenge-ending`). Their on-screen text was read by OCR, and their pictures were described by independent readers (sub-agents with working image input) who got the files under meaningless names and were asked to describe them before answering any pointed question. Each of those runs began with a test card carrying a random code, and each read it correctly. Section 8 gives the detail. Where a record rests on wiki text alone (audio, odds, things not captured) its notes say so. Readings are kept out of `claim` and put in `notes` under "Reading, not label".

Three results change the theory more than the rest:

1. **Afton's facility watches FNaF4's rooms.** The Private Room's monitors show FNaF4's bedroom, bed and Plushtrap hallway on the code 1-9-8-3; the Fredbear plush sits on that desk with a handset in its lap; and the canonical Night 2 breaker panel powers two systems called "Obsv.1" and "Obsv.2" whose map outlines match FNaF4's minigame neighbourhood and gameplay house and are tied by lines to the facility. None of this was in the evidence base. It is a direct, in-game link from FNaF4's house to William Afton that does not pass through UCN.
2. **A cited record was false.** `fnaf4-plush-night6-pupils-only` said the plush's body is gone and only two dots remain when "I will put you back together" appears. That image is FNaF World's opening screen. In FNaF4 the plush is whole, with pupils, beside the child. The theory's "plush" chapter and `people.ts` build on the false version.
3. **FNaF World's frame is FNaF4's ending replayed, pointed at FNaF3.** The game opens with two dots saying "I will put you back together", its hidden quest mirrors the five triggers of FNaF3's hidden minigames (one of them by the exact code 395248), and it ends "We are still your friends... The pieces are in place for you... Rest." Its "Crying Child" trophy is the weeping child of FNaF2/3, not FNaF4's boy, which the theory's "golden" chapter gets wrong.

## 1. Threads

Ordered by how much of the story they hold up.

### 1.1 The watched house (new)

Establishes:
- The underground facility is Afton's. The designer is addressed as "Mr. Afton" (`sl-intro-mr-afton-board`); the Extras map is titled "Circus Baby's Entertainment & Rental" and signed "Copyright (c) Afton Robotics LLC" (`sl-extras-map-entertainment-and-rental`); all four blueprints carry "Afton Robotics, LLC" (`sl-blueprint-circus-baby`, `sl-blueprint-ballora`, `sl-blueprint-funtime-freddy`, `sl-blueprint-funtime-foxy`).
- It has a restricted room, closed "due to the sensitive nature of the materials" (`sl-private-room-restricted`), marked "Private" on the Extras map, with a desk, three monitors and its own camera map (`sl-private-room-camera-map`).
- Entering 1-9-8-3 on that room's keypad turns the three monitors into views of FNaF4's gameplay bedroom, its bed and the "Fun with Plushtrap" hallway (`sl-private-room-keypad-1983`, `sl-private-room-monitor-bedroom`, `sl-private-room-monitor-bed`, `sl-private-room-monitor-hallway`). 1983 is the one year FNaF4 prints (`fnaf4-fredbear-and-friends-1983`).
- A Fredbear plush of FNaF4's design sits beside the monitors (`sl-private-room-fredbear-plush`) with a handset (antenna, keys, speaker grille) in its lap (`sl-private-room-handset-beside-plush`).
- On Night 2, in the main run of the game, the breaker panel lists eight systems to restart, the last two "Obsv.1" and "Obsv.2" (`sl-breaker-panel-obsv-systems`). Its map draws three faint clusters of rooms outside the facility, each joined to it by a line (`sl-breaker-map-faint-clusters`); the upper-left is Obsv.1 and the upper-right Obsv.2 (`sl-breaker-map-obsv-identification`).
- Obsv.2 has the plan of FNaF4's House Map cheat and its line runs to the Private Room (`sl-breaker-map-obsv2-house-layout`, `fnaf4-house-map-cheat`). Obsv.1 fits FNaF4's minigame neighbourhood, house plus restaurant, and its line runs to Circus Gallery (`sl-breaker-map-obsv1-layout`, `fnaf4-house-rooms`). The third cluster fits the Plushtrap hallway (`sl-breaker-map-corridor-cluster`). Each cluster holds one white dot among grey ones; inside the facility the only dots are grey, in the four rooms that hold the four animatronics (`sl-breaker-map-dots`).
- The facility is reached by an elevator going down (`sl-elevator-underground-facility`); Scott's trailer calls it "deep below ground where memories sleep" (`sl-trailer-deep-below-ground`).

Open: whether the monitor views are live or recorded (the rooms are empty: `sl-private-room-feeds-empty`); what the lines on the map are; whether the watched places lie above, beside or inside the facility; "Obsv." is never spelled out; the dots have no legend; the keypad digits rest on wiki text because the keypad has no display. The Private Room night is the fake-ending branch; the breaker panel is not.

Connects to: Scott's statements that Sister Location was made to fix how FNaF4 was read (`scott-2017-sl-cleared-fnaf4-misconception`, `scott-2018-interview-sl-made-to-ground-story`, `scott-2018-interview-each-game-fixed-the-last`, `scott-2018-interview-fnaf4-too-broad`); the page-source digits changing from 8/7 to 8/3 two days before FNaF4 came out (`scottgames-site-fnaf4-html-83`, `scottgames-site-fnaf4-html-87`); Help Wanted 2 reusing the 1983 keypad in its Sister Location level (`hw2-puppet-master-1983`) and restaging the room (`hw2-sister-location-section`, `hw2-job-interview-ice-cream`); Help Wanted returning to FNaF4's bedroom with a plush that follows the player (`hw-pizza-party-spring-bonnie-plush`, `codb-hallway-ends-in-fnaf4-bedroom`).

### 1.2 The household and the child's last week, c. 1983

Establishes: a five-day countdown to a party (`fnaf4-minigame-countdown-to-party`) that is the child's own birthday (`fnaf4-its-your-birthday`); the only printed year, 1983 (`fnaf4-fredbear-and-friends-1983`). The child is locked in his room by "he" (`fnaf4-plush-locked-in-room`), ambushed by an older brother in a Foxy mask (`fnaf4-brother-foxy-mask-tv`, `fnaf4-plush-he-is-hiding-again`, `fnaf4-plush-be-careful`), left at a Fredbear restaurant he hates (`fnaf4-left-behind-at-diner`), chased there by a man in a Fredbear suit (`fnaf4-fredbear-suit-employee-chase`), told to remember "what you saw" (`fnaf4-dont-you-remember-what-you-saw`), shown the stage pair as shadows (`fnaf4-fredbear-spring-bonnie-shadows`), and glimpses a purple man fitting a Spring Bonnie head on someone (`fnaf4-purple-guy-suits-up-employee`). He is known as "the kid who always hides under the table and cries" (`fnaf4-kid-who-hides-under-table`), is locked in the parts room the day before the party (`fnaf4-locked-backstage`), and is told "He hates you" (`fnaf4-he-hates-you`).

The house has four rooms (`fnaf4-house-rooms`), one of them a second bedroom with a pink bed that nobody is shown using (`fnaf4-second-bedroom`, `fnaf4-mangle-pieces-in-house`). Its hallway has a grandfather clock and framed pictures; the Left Hall of the night gameplay has a clock in a wooden case at its dark far end and framed pictures on its walls (`fnaf4-left-hall-grandfather-clock`). A clock in a picture-hung hallway is the one fixture the 8-bit house and the 3D house visibly share. The wiki calls the 3D one a grandfather clock too; the still shows a clock but not whether it stands on the floor. No parent appears anywhere (`fnaf4-no-parent-shown`). The restaurant is never named in FNaF4 (`fnaf4-diner-unnamed`).

Open: who "he" is in each line (brother in the house lines; at the restaurant "he left without you" is unassigned); what the child saw; whose the pink room is; where the parents are.

Connects to: Sister Location's family (a father addressed by a daughter and a son: `sl-girl-daddy-let-me-play`, `sl-golden-freddy-cutscene-father`); Midnight Motorist's house (`ffps-midnight-motorist-closed-door`, `ffps-midnight-motorist-ran-off`, `ffps-midnight-motorist-grey-person`); FNaF2's name for "the original restaurant" (`fnaf2-call5-fredbears-family-diner`); FNaF3's stage pair (`fnaf3-stage01-fredbear-spring-bonnie`).

### 1.3 The Bite and Night 6

Establishes: the brother and three masked friends (`fnaf4-bullies-in-masks`) carry the child to the stage (`fnaf4-brother-lift-closer`), put his head in Fredbear's mouth (`fnaf4-give-fredbear-a-kiss`) and the jaw closes (`fnaf4-the-bite`). No one else is in the room (`fnaf4-party-no-other-guests`). Then, on black: three grey lines of apology (`fnaf4-night6-brother-apology`), five yellow lines (`fnaf4-youre-broken`, `fnaf4-still-your-friends`, `fnaf4-i-will-put-you-back-together`), the plushies fading one by one, the plush last, then the child (`fnaf4-night6-fade-order`, `fnaf4-plushies-these-are-my-friends`), with a flatline tone per the wiki (`fnaf4-flatline`).

Open: whether he dies (implied only); who speaks the yellow lines; what "put you back together" promises.

Connects to: "put back together" across games (`sl-golden-freddy-cutscene-put-her-back-together`, `fw-opening-put-you-back-together`, `ucn-nightmare-fredbear-lines`, `sd-springtrap-pulled-apart-put-back-together`, `scottgames-site-2017-fnafworld-source-ejection-dialogue-one`, and the Mangle as a "take apart, put back together" attraction in `fnaf2-call3-mangle`); "I'm broken. I can't be fixed" from Baby (`sl-baby-something-bad-inside`); "I'm still here" and "I know it was an accident" from the voice at the Private Room door (`sl-fake-ending-girl-voice`); FNaF1's separate Bite of '87 (`fnaf1-call1-bite-of-87`); the lawsuit bite (`ffps-lawsuit-head-bitten`).

### 1.4 The Fredbear plush

Establishes: it speaks in yellow and is the only voice on the child's side (`fnaf4-plush-locked-in-room`, `fnaf4-tomorrow-is-another-day`, `fnaf4-speaker-text-colours`); it knows what the brother does and where he is (`fnaf4-plush-he-is-hiding-again`), where the exit is and what the child saw (`fnaf4-left-behind-at-diner`, `fnaf4-dont-you-remember-what-you-saw`). It turns up where no one put it and is never seen to move (`fnaf4-plush-follows-child`). It has two sprites (`fnaf4-plush-two-sprites`); frame by frame, it has tracking pupils whenever it shares a room of the house with the child and at Night 6, and plain black eyes on the opening black screen and outdoors (`fnaf4-plush-eyes-by-scene`). At the last line it is whole and looking at him (`fnaf4-plush-night6-pupils-only`, corrected). Its twin sits on Afton's Private Room desk with a handset against it (`sl-private-room-fredbear-plush`, `sl-private-room-handset-beside-plush`).

Open: who speaks; whether the voice in the restaurant, where no plush is drawn, is the same thing as the toy at home.

Connects to: Scott's trailer question "What have you brought home?" (`fnaf4-trailer-what-you-think-you-see`) and the teaser of a purple hat and bow tie marked "PROPERTY OF FR…ER" (`scottgames-site-fnaf4-property-of-fr`); Scott calling it "my Fredbear plush design" (`scott-2018-fredbear-plush-design`); the later machines that watch and repeat (`secret-of-the-mimic-mail-mushmen-return`, `secret-of-the-mimic-stay-up-latte`), which the current theory uses as its analogy.

### 1.5 Afton Robotics: the Funtimes, the daughter, the rental business

Establishes: the designer dodges a question about "design choices" (`sl-intro-mr-afton-board`). The blueprints list them: Baby's internal ice cream dispenser (`sl-blueprint-circus-baby`); Funtime Freddy's "Parental Tracking", "Voice Mimic/ Luring" and "Storage Tank" (`sl-blueprint-funtime-freddy`); Funtime Foxy's "Parental Voice Sync & Replay" and "Variable Scent Release" (`sl-blueprint-funtime-foxy`); Ballora's "Deter & Misdirect", with two sheets pointing to "Circus Baby dir07" (`sl-blueprint-ballora`); `sl-blueprint-screens` is the parent record. His daughter begs to see Baby and is forbidden (`sl-girl-daddy-let-me-play`). Baby was on stage one day only (`sl-baby-on-stage-one-day`); that day, with one girl alone, her stomach opened (`sl-baby-ice-cream-story`, `sl-baby-minigame-girl-grabbed`, `sl-girl-where-did-other-children-go`). A springlock suit "came from my old pizzeria" and was thought too dangerous to use (`sl-springlock-suit-from-old-pizzeria`). The present business rents the robots to private parties by day (`sl-handunit-rented-for-private-parties`) and exists because of "the massive success and even more so the unfortunate closing of Freddy Fazbear's Pizza" (`sl-handunit-freddy-fazbear-closing`).

Open: when any of this happened; what "dir07" is; whether any child other than the daughter was taken by these machines (none is shown).

Connects to: Scott's hidden news report (`scottgames-site-sl-news-gas-leak-cancellation`, `scottgames-site-sl-news-kids-tested`, `scottgames-site-sl-news-equipment-removed`, `scottgames-site-sl-news-entrepreneur`) and page source (`scottgames-site-sl-source-rental-schedule`, `scottgames-site-sl-source-client-directory`, `scottgames-site-sl-source-service-log-afton-robotics`, `scottgames-site-sl-source-bright-future-circus-baby`); FFPS's Afton Robotics blueprints (`ffps-scup-blueprint`, `ffps-lefte-blueprint`, `ffps-rasc-blueprint`); Baby named Elizabeth (`ffps-completion-connection-terminated-elizabeth`); the springlock tapes' "incident at the sister location" (`fnaf3-tape4-sister-location-springlock-failures`).

### 1.6 Michael's week underground

Establishes: a new hire, greeted as one (`sl-handunit-intro-job-ad`, `sl-eggs-benedict`), does a technician's rounds (`sl-controlled-shocks`). From Night 2 Baby runs him: she does not recognize him but remembers "this scenario" (`sl-baby-i-remember-this-scenario`), shows him a hiding place another man made (`sl-baby-previous-employee-hiding-place`, `sl-bidybab-same-person`, `sl-dead-body-in-vent`), gets him past Ballora (`sl-baby-warns-handunit-will-kill`, `sl-ballora-song`), holds him captive after Funtime Foxy's attack (`sl-funtime-foxy-knockout`, `sl-baby-i-kidnapped-you`), keeps him in a springlock suit in the scooping room (`sl-springlock-suit-from-old-pizzeria`, `sl-springlocks-breathing`, `sl-scooping-room-explained`), tells him she has learned to pretend (`sl-baby-how-to-pretend`), claims on Night 5 that something bad is in her and asks for help (`sl-baby-something-bad-inside`, `sl-baby-card-and-passcode`, `sl-baby-guides-past-ballora`), and walks him into the scooper. The human staff see only breakdowns (`sl-technicians-injured-funtime-freddy`, `sl-technicians-night4-dialogue`) and end hanged (`sl-technicians-hanged`). At home he watches a soap opera about a father who denies his child (`sl-immortal-and-the-restless`, `sl-exotic-butters`). Colour: `sl-funtime-freddy-bon-bon-birthday-boy`.

Open: who the earlier employee was; why Baby "remembers this scenario"; whether HandUnit's company knows who he is (nothing says so).

Connects to: his later account of the week (1.8); UCN's Sister Location taunts (`ucn-scrap-baby-lines`, `ucn-circus-baby-lines`, `ucn-ballora-lines`); Help Wanted 2's "I recognize you" (`hw2-what-makes-you-so-special`).

### 1.7 The scooping and the body that will not die

Establishes: the four machines are scooped daily and put back (`sl-ballora-scooped`, `sl-technicians-night4-dialogue`, `sl-real-ending-already-been-here-today`, `sl-real-ending-they-always-put-us-back`); they want a human skin to leave in (`sl-real-ending-if-we-looked-like-you`, `sl-fake-ending-we-need-you`); he is scooped and something with purple eyes looks out of him (`sl-real-ending-scooped-mirror`). In the Custom Night cutscenes, which Scott ruled canon (`scott-2016-cutscenes-are-canon`), a man in a purple shirt rots to purple (`sl-custom-night-decay`), throws the machine up into a drain (`sl-custom-night-ennard-ejected`) and gets up again to "You won't die" (`sl-you-wont-die`).

Open: why he does not die; how long the decay takes.

Connects to: Scott's teaser "There's a little of me in every body" (`scottgames-site-sl-little-of-me`); Molten Freddy and Scrap Baby (`ffps-molten-freddy-lines`, `ffps-molten-freddy-alley-wires-eyes`, `ffps-credits-returning-voices`); the 2017 page-source "ejection" dialogue (`scottgames-site-2017-source-ejection-dialogue-group`); the guards fired for "odor" (`fnaf1-custom-night-pink-slip`, `fnaf2-pink-slip-fritz-smith`); UCN's "a victim that can't perish" (`ucn-nightmare-freddy-cant-perish`); "Purpleguy being literally purple" (`scott-2017-matpat-final-theory`).

### 1.8 Michael's report to his father

Establishes, in his own words: he is Michael and speaks to his father (`sl-golden-freddy-cutscene-father`); he found "it" where his father said (`sl-golden-freddy-cutscene-found-it`); "they" took him for his father (`sl-golden-freddy-cutscene-they-thought-i-was-you`); he found "her" and put her back together as asked, and she is free (`sl-golden-freddy-cutscene-put-her-back-together`); he should be dead and will come to find him (`sl-golden-freddy-cutscene-come-find-you`). The scene is the burnt Fazbear's Fright and a rabbit-eared figure walks out (`sl-golden-freddy-cutscene-springtrap`). The fake ending supplies the motive from the other side: "Isn't this why you came here? To be with her again?" (`sl-fake-ending-to-be-with-her-again`).

Open: what "put her back together" was; whether he knew what it would cost him.

Connects to: Scrap Baby's "just like he asked you to" (`ffps-scrap-baby-completion-monologue`); the "brave volunteer" (`ffps-completion-brave-volunteer`); Scott on the slowed voice (`scott-2017-michael-voice-not-robotic`).

### 1.9 FNaF4's nights and the Nightmares

Establishes: a bedroom, two halls, a closet, a bed (`fnaf4-bedroom-setting`); a clock at the dark end of the Left Hall, where the minigame hallway has its grandfather clock (`fnaf4-left-hall-grandfather-clock`); the Nightmare cast (`fnaf4-nightmare-animatronics`, `fnaf4-nightmare-fredbear-4am`, `fnaf4-nightmare-shares-fredbear-sounds`); Plushtrap's hallway (`fnaf4-fun-with-plushtrap`); rare bedside flowers, pills and drip (`fnaf4-bedside-items`); a reversed FNaF1 call in the ambience (`fnaf4-reversed-phone-guy`); the house's plan (`fnaf4-house-map-cheat`); nothing after the box (`fnaf4-night8-no-story-text`). Scott's trailer asks "What is it that you think you see?" (`fnaf4-trailer-what-you-think-you-see`); his store text makes the player "a child whose role is yet unknown" (`scott-2015-fnaf4-store-child-role-unknown`).

Open: who the player is; what the Nightmares are; whether the nights are dream, memory or a real watched room.

Connects to: 1.1 (these are the rooms on Afton's monitors, and Obsv.2 has four grey dots round its one white dot); UCN's "This time, there is more than an illusion to fear" and "I am remade, but not by you" (`ucn-nightmare-fredbear-lines`, `ucn-nightmare-freddy-toysnhk`, `ucn-nightmare-lines`).

### 1.10 Dates and order

Establishes: 1983 on the television (`fnaf4-fredbear-and-friends-1983`); 1983 as the code that opens the views of that house (`sl-private-room-keypad-1983`); Sister Location's present lies after a Freddy Fazbear's Pizza has closed (`sl-handunit-freddy-fazbear-closing`); Michael's speech lies after the Fazbear's Fright fire (`sl-golden-freddy-cutscene-springtrap`). Counter-pointers to 1983: toys that look like 1987's Toy models (`fnaf4-toy-collection-girl`, `fnaf4-mangle-pieces-in-house`). A children's rumour that "they hide your body" is already going round (`fnaf4-pigtail-girl-hide-your-body`).

### 1.11 FNaF World's frame voice

Establishes: two dots open the game with FNaF4's last sentence (`fw-opening-safe-place-something-went-wrong`, `fw-opening-put-you-back-together`); Fredbear calls the world a sanctuary damaged by "the flipside" (`fw-fredbear-flipside`); 8-bit Fredbear says the adventure is a deception and the real task is to "leave breadcrumbs for him" (`fw-8bit-fredbear-breadcrumbs`, `fw-8bit-fredbear-made-for-one-thing`, `fw-8bit-fredbear-true-goal`); the clock games mirror FNaF3's five minigame triggers, one by exact code (`fw-clock-games-five-tasks`, `fw-clock-game-395248`); the same dots close with FNaF4's other line, "the pieces" and "Rest." (`fw-clock-ending-still-your-friends`, `fw-clock-ending-pieces-in-place`); the trophy is the generic weeping child (`fw-crying-child-character`).

Against leaning on it: the Android port of January 2017, which was available for about a day, rewrote the same closing screens as a joke. The two dots announce "I caused the bite of 87" and turn into a Bouncepot (`fw-android-port-clock-ending`).

Connects to: FNaF3's cake endings and Happiest Day (`fnaf3-good-ending-requirements`, `fnaf3-happiest-day`, `fnaf3-stage01-cake-crying-child`); the box (`scott-2015-fnaf4-box-pieces-put-together`); Scott on tying FNaF World to canon (`scott-2018-interview-fnaf-world-tied-to-canon-mistake`, `scott-2015-story-complete`).

### 1.12 Smaller threads

- The box: `fnaf4-locked-box-ending`, `fw-unused-open-box` (outside), with `scott-2015-fnaf4-box-pieces-put-together`, `scott-2015-box-best-left-forgotten`, `scott-2018-box-meaning-changed`, `scott-2024-box-interview`.
- FNaF World's teaser for Baby: `fw-desk-man-first-dialogue`, `fw-desk-man-pendulum`, `fw-update2-fredbear-he-has-gone-insane`, `fw-desk-man-deactivated-my-games`, `fw-desk-man-made-something-terrible`, `fw-desk-man-found-dead`, `fw-8bit-fredbear-something-terrible`; answered by `scottgames-site-sl-stay-in-seats`.
- Old Man Consequences: `fw-old-man-consequences`, returning in `ucn-omc-ending`. His lake can also take the player's sprite without a word (`fw-drowning-ending`), which is the one thing UCN's version lets its player do (`ucn-omc-ending-drowning`).
- Outside the story: FNaF World talking about itself (`fw-normal-ending-still-in-control`, `fw-animdude-puppet-master`, `fw-hard-ending-killing-the-storyteller`, `fw-chippers-revenge-ending`, `fw-update2-game-bombed`, `fw-8bit-fredbear-puppet-master`, `fw-purpleguy-sprite-disclaimer`); the Halloween Edition (`fnaf4-halloween-replacements`, `fnaf4-halloween-fun-with-bb`, `fnaf4-halloween-decorated-minigames`), non-canon per `scott-2015-fnaf4-halloween-canon-split`; `fnaf4-making-of-extras`.

## 2. Contested questions

### Q1. Is FNaF4's household the Afton household?

Readings: (A) yes, the crying child and his brother are Afton's sons; (B) Afton only watched or experimented on a household that is not his; (C) no connection (FNaF4 stands alone).

For A:
- Afton's company has that bedroom on its monitors, behind a code that is FNaF4's year, with that toy on the desk (`sl-private-room-keypad-1983`, the three `sl-private-room-monitor-*`, `sl-private-room-fredbear-plush`, `sl-private-room-handset-beside-plush`). In the canonical run, the facility powers "Obsv." systems drawn in the shape of FNaF4's house and neighbourhood (`sl-breaker-panel-obsv-systems`, `sl-breaker-map-obsv2-house-layout`, `sl-breaker-map-obsv1-layout`). C is dead on these records.
- A purple man is at work in the back of the restaurant this child is taken to (`fnaf4-purple-guy-suits-up-employee`), and the plush, whose twin and handset are on Afton's desk, speaks about the child's brother as a member of the household would (`fnaf4-plush-locked-in-room`, `fnaf4-plush-he-is-hiding-again`, `fnaf4-he-hates-you`).
- The family's shape fits. Sister Location gives Afton a son and a daughter (`sl-golden-freddy-cutscene-father`, `sl-girl-daddy-let-me-play`). FNaF4's house holds two boys and a pink bedroom whose owner is never shown (`fnaf4-second-bedroom`).
- Scott says he put things in Sister Location to ground FNaF4 (`scott-2018-interview-sl-made-to-ground-story`). The Private Room and the panel are the only things in Sister Location that point at FNaF4 at all.
- The older arguments still stand beside this: the purple car and house of Midnight Motorist (`ffps-midnight-motorist-secret-drive`, `ffps-midnight-motorist-closed-door`), and UCN's chain (`ucn-nightmare-freddy-toysnhk`).

Against A, or for B: nothing names the family. The monitors show the 3D gameplay rooms, and FNaF4 never states that those are the 8-bit minigame house (`fnaf4-house-rooms`); what ties the two is a clock in a picture-hung hallway in both (`fnaf4-left-hall-grandfather-clock`) and the breaker map, which joins a cluster shaped like each to the same facility (thread 1.1). That is suggestive, not stated. The rooms on the monitors are empty (`sl-private-room-feeds-empty`). "Obsv." suggests a place built to be observed, which fits a test chamber as well as a home. In Midnight Motorist the boy shuts his own door and the father resents it; in FNaF4 someone locks the child in (`fnaf4-plush-locked-in-room`).

Verdict: **"Afton's operation watched FNaF4's house, with the child's toy and a handset on the watcher's desk" is high. "That house is his own family's" is medium-high**, on the family's shape, the brother-talk through the plush, the purple man and Scott's stated purpose, with B the surviving alternative. This is stronger than the current chapter's "medium... crying-child part lower", and it does not depend on who UCN's player is. The current theory picked the right side for the weaker reason.

### Q2. Who is the older brother?

Readings: Michael Afton; an unnamed Afton son; nobody identifiable.
For Michael: if Q1 holds, the brother is an Afton son, and the games name exactly one, by his own mouth (`sl-golden-freddy-cutscene-father`). The brother's last words are remorse (`fnaf4-night6-brother-apology`); the adult Michael goes underground on his father's errand for the dead daughter, and it costs him his body (`sl-golden-freddy-cutscene-put-her-back-together`). UCN adds the "one you should not have killed" chain (outside this slice).
Caution on two lines often used here. "I know it was an accident" (`sl-fake-ending-girl-voice`) is spoken by the thing outside the Private Room door, which by Michael's own account thinks he is his father (`sl-golden-freddy-cutscene-they-thought-i-was-you`); it fits the daughter's death, which her father had tried to prevent (`sl-girl-daddy-let-me-play`), at least as well as it fits the Bite. "Birthday boy" (`sl-funtime-freddy-bon-bon-birthday-boy`) is a party machine's stock phrase. Neither should carry weight.
Verdict: **Michael, medium** (medium-high given Q1, minus the unproven assumption that Afton had no other son). The current theory's pick is supported, and no longer only through UCN.

### Q3. Who is FNaF4's player in the nights, and what are the Nightmares?

Readings for the player: (a) the crying child, on the nights between the minigame days; (b) the older brother afterwards, in dreams or as punishment; (c) the child in a coma or dying. Readings for the Nightmares: dream; illusion staged on a real, watched child; real machines misperceived.

Records:
- The nights alternate with the countdown days and the room is a small child's (`fnaf4-minigame-countdown-to-party`, `fnaf4-bedroom-setting`); Scott's store text says "a child whose role is yet unknown" (`scott-2015-fnaf4-store-child-role-unknown`). Favours (a).
- Hospital props by the bed (`fnaf4-bedside-items`) and Night 6 falling after the Bite (`fnaf4-nightmare-fredbear-4am`, `fnaf4-night6-fade-order`) favour (c) for the late nights.
- Sister Location puts the bedroom, bed and hallway on the facility's monitors, seen from cameras high in the rooms (`sl-private-room-monitor-bedroom`, `sl-private-room-feeds-empty`), and its panel puts one white dot in the bedroom's place with four grey dots round it (`sl-breaker-map-dots`). Inside the facility the grey dots sit exactly where the four animatronics are. That favours "a real room, a real occupant, real tracked things" over a dream.
- Scott before release: "What is it that you think you see?... What have you brought home?" (`fnaf4-trailer-what-you-think-you-see`). UCN afterwards: "This time, there is more than an illusion to fear" (`ucn-nightmare-fredbear-lines`).
- Scott said Sister Location cleared up a FNaF4 misconception (`scott-2017-sl-cleared-fnaf4-misconception`) and joked about "dream theory" (`scottgames-site-2019-fnafworld-58-mock-quotes`). He never names the misconception.

Verdict: **the bedroom is a real place that Afton's facility watches (high); the nights are events in that room and not only a dream (medium); the occupant is the crying child in the week before the party (medium); what he sees is not what is there (medium); what is there, four tracked things, is not identified (low).** The pure dream reading is the one Sister Location most directly undercuts. The current theory's "Whether the nights are a patient's nightmares or a memory is left open" omits the option its own later game supplies. Caution for the UCN chapter: UCN's Nightmare lines address someone who once faced them as "an illusion" and is "not one of" the plush's friends; if that is Michael, either he too was in that room or the lines are loose. The slice cannot settle it.

### Q4. Who speaks through the Fredbear plush?

Readings: (i) the father, by handset, through a toy brought home from his restaurant; (ii) the child's own mind; (iii) an unnamed presence; (iv) a self-acting "companion" machine (the current pick).
For (i): the same toy with a handset against it, on the desk of the room that watches the child's bedroom, in the father's company's facility (`sl-private-room-fredbear-plush`, `sl-private-room-handset-beside-plush`, `sl-private-room-keypad-1983`); the plush's knowledge is a watcher's (`fnaf4-plush-he-is-hiding-again`, `fnaf4-left-behind-at-diner`); pupils exactly where it is in a room with the child (`fnaf4-plush-eyes-by-scene`); "What have you brought home?" (`fnaf4-trailer-what-you-think-you-see`).
Against (i): it speaks in the restaurant, where no plush is drawn (`fnaf4-plush-follows-child`), which fits (ii); at the moment the child sees the purple man in the back room the plush is telling him which way to run, so the speaker is not that man at that moment, or the purple man there is not the father (`fnaf4-purple-guy-suits-up-employee`, `fnaf4-dont-you-remember-what-you-saw`); its tone is protective ("Don't be scared. I am here with you").
For (iii): FNaF World gives both of the plush's closing sentences to bodiless dots (`fw-opening-put-you-back-together`, `fw-clock-ending-still-your-friends`). The colour argument for a second speaker at Night 6 fails on measurement (`fnaf4-youre-broken`, `fnaf4-speaker-text-colours`).
Verdict: **a watching, talking toy worked from Afton's Private Room, medium; that the voice is William Afton himself, medium-low**, and it should be said as "whoever sits at that desk". The current answer, "nothing identifies the voice as his father's", is now too weak: the games put the toy and a handset on the father's desk. Its pick (iv) survives as the mechanism but its evidence should be the handset, not analogies from Secret of the Mimic.

### Q5. Did the crying child die, and where does he go?

Died: implied by the fade and the flatline (`fnaf4-night6-fade-order`, `fnaf4-flatline`), by "You're broken" (`fnaf4-youre-broken`), and by his absence from every later scene. Nothing states it. **Medium-high.**
Afterwards, three leads, none conclusive:
- FNaF World: the dots that repeat the promise open and close a quest that lays out FNaF3's path to Happiest Day, and their last word is "Rest." (`fw-opening-put-you-back-together`, `fw-clock-games-five-tasks`, `fw-clock-game-395248`, `fw-clock-ending-pieces-in-place`). In 2015-16, then, "put you back together" pointed at FNaF3's freeing of the crying children, the last of whom wears the golden bear's mask (`fnaf3-happiest-day`). This is the only in-game statement of where the promise leads, in a game Scott later wished he had not tied to canon (`scott-2018-interview-fnaf-world-tied-to-canon-mistake`).
- UCN: if "the one you should not have killed" is this child, he is not at rest in 2018's game (`ucn-nightmare-freddy-toysnhk`). That conflicts with the first lead unless FNaF3's good ending is not what happened.
- Golden Freddy: no record in this slice puts him there. The only bridges are thematic (bitten by the golden bear; Happiest Day's golden mask; `ucn-death-coin-fredbear`).
Verdict: **unsettled (low)**. The current "golden" chapter's flat "The crying child is a different figure" overclaims, and its one supporting detail from this slice is wrong (the trophy: `fw-crying-child-character`).

### Q6. Is FNaF4's bite the Bite of '87?

No, **high**. The week's only year is 1983 (`fnaf4-fredbear-and-friends-1983`); the code that opens the views of that house is 1983 (`sl-private-room-keypad-1983`); Scott changed his page's hidden digits to 8 and 3 before release (`scottgames-site-fnaf4-html-83`) and listed "1983 vs 1987" among settled misunderstandings (`scott-2017-matpat-final-theory`); by 1987 the original restaurant had been "closed for years" (`fnaf2-call5-fredbears-family-diner`). Counter-evidence to keep on file: the Toy-like figures and the Mangle-like toy (`fnaf4-toy-collection-girl`, `fnaf4-mangle-pieces-in-house`) and the 7s and 8s seeded earlier (`scottgames-site-fnaf4-html-87`), which read as deliberate misdirection toward '87. The theory's pick is right.

### Q7. When were the Funtimes built and when did Elizabeth die, relative to the five murders?

The slice gives order, not dates: a Freddy Fazbear's Pizza succeeds and closes; then "another contender" (`sl-handunit-freddy-fazbear-closing`); Baby's one day on stage, on which the girl dies (`sl-baby-on-stage-one-day`, `sl-baby-ice-cream-story`); the opening cancelled (`scottgames-site-sl-news-gas-leak-cancellation`); the machines moved underground and rented out (`sl-handunit-rented-for-private-parties`); Michael's week; his speech after the Fazbear's Fright fire. Two weak pointers: her "old pizzeria" had a springlock suit (`sl-springlock-suit-from-old-pizzeria`), and FNaF3's tapes, from the springlock era, mention "the sister location" (`fnaf3-tape4-sister-location-springlock-failures`), which would put a sister venue early. Against an early date, HandUnit's "closing". FNaF4's pink bedroom is silent on whether its owner was alive in 1983 (`fnaf4-second-bedroom`).
Verdict: **not determinable from this slice (low)**. The "funtimes" chapter's "The first child taken is his own daughter" asserts an order no record gives; "the one child the games show these machines take" is what the records support.

### Q8. When do Michael's Sister Location nights happen?

Fixed points: after "the unfortunate closing of Freddy Fazbear's Pizza" (`sl-handunit-freddy-fazbear-closing`); before his speech, which is after the fire (`sl-golden-freddy-cutscene-springtrap`); "I've been living in shadows" implies a long gap (`sl-golden-freddy-cutscene-come-find-you`). The only pointers to anything tighter are outside the slice and weak: guards dismissed for "odor" in FNaF1 and FNaF2 (`fnaf1-custom-night-pink-slip`, `fnaf2-pink-slip-fritz-smith`), which would put the scooping before November 1987 if those guards are Michael. **Open (low).** The current chapter says this correctly.

### Q9. What was in the locked box?

As Scott framed it in 2015, FNaF4's story assembled: "the pieces put together" (`scott-2015-fnaf4-box-pieces-put-together`). FNaF World uses the same word (`fw-clock-ending-pieces-in-place`). He chose not to open it (`scott-2015-box-best-left-forgotten`, `scott-2015-considered-opening-box`), then made Sister Location to settle FNaF4's story, saying "the box is tied into this very, very closely" (`scott-2018-interview-fnaf4-too-broad`, `scott-2018-interview-sl-made-to-ground-story`). So what the box would have told is, in practice, what Sister Location tells about FNaF4: the year, the watched house, whose toy it was. **Medium** as a reading of his statements; the box as an object stays closed (`fnaf4-locked-box-ending`, `fnaf4-night8-no-story-text`, `scott-2024-box-interview`).

### Q10. How much of FNaF World belongs to the story?

By layer, in the game's own words.
- The adventure is declared imaginary by its endings and by Update 2 (`fw-normal-ending-still-in-control`, `fw-hard-ending-killing-the-storyteller`, `fw-update2-game-bombed`). **Outside.**
- The frame voice (opening, clock quest, clock ending) is written in FNaF4's and FNaF3's own terms and Scott sold the game with that screen (`fw-opening-put-you-back-together`). It adds no event; it shows what Scott meant "put you back together" to lead to at the time. **Inside as an epilogue to FNaF4, support weight, medium-low confidence.** Scott's two statements bracket it: FNaF World "will not add to" the story (`scott-2015-story-complete`), and he should not have "tried to somehow tie it in to a canon game" (`scott-2018-interview-fnaf-world-tied-to-canon-mistake`).
- The man at the desk is a teaser for Sister Location spoken by a maker of games (`fw-desk-man-deactivated-my-games`). **Colour.** He should not be identified with any character.
- Old Man Consequences matters only because UCN brings him back (`fw-old-man-consequences`, `fw-drowning-ending`, `ucn-omc-ending`, `ucn-omc-ending-drowning`).
- All eight endings were checked and seven are on file. The clock ending and the Baby ending carry the story-facing material; Normal, Hard and Chipper's Revenge (`fw-chippers-revenge-ending`) are the author talking about his games; the Fourth Glitch and the wordless Drowning ending belong to Old Man Consequences. The eighth, "Universe end.", is a joke (two Fredbears meet: "The same Fredbear can't occupy the same space at the same time.") and is not recorded.
- The 2017 Android port turned the frame's closing screens into a joke (`fw-android-port-clock-ending`). The port lasted a day and does not change what the 2016 release says, but it is one more reason to keep the frame at support weight and medium-low confidence.

### Q11. Is the girl Afton's daughter, is she in Baby, and is the technician Michael?

These are treated as settled by the current theory, and the slice supports that. The girl calls the maker of Baby "Daddy" (`sl-girl-daddy-let-me-play`) and the maker is "Mr. Afton" (`sl-intro-mr-afton-board`): **high**. She is taken by Baby on Baby's one day on stage (`sl-baby-ice-cream-story`, `sl-baby-minigame-girl-grabbed`): **high**. That she persists in the machine rests in this game on the girl's voice at the Private Room door (`sl-fake-ending-girl-voice`) and Baby's "something bad... inside of me" (`sl-baby-something-bad-inside`), and outside it on FFPS's "Elizabeth" (`ffps-completion-connection-terminated-elizabeth`): **medium-high**; note the name Elizabeth is never spoken in Sister Location. That the scooped technician is the Michael of the final speech rests on the cutscenes continuing the Real Ending (purple eyes, decay, the thing thrown up, "You won't die", "I should be dead") and on Scott's ruling that the cutscenes are canon: **high**, though no line joins the two names (`sl-eggs-benedict`).

## 3. Problems in the current theory

1. **"plush", body:** "At the very end, as the plushies fade, the promise is spoken over nothing but two white dots in the dark [[fnaf4-plush-night6-pupils-only]]" and "in the final shot, where the watcher is all that is left." False. The plush is whole and looking at the child (`fnaf4-plush-night6-pupils-only` as corrected, `fnaf4-night6-fade-order`). The two-dots screen is FNaF World's (`fw-opening-put-you-back-together`). `people.ts` (`fredbear-plush`: "At the end only its two dots remain") repeats it. The pupil pattern itself survives and is now better evidenced (`fnaf4-plush-eyes-by-scene`): pupils indoors with the child and at Night 6, none on the opening black screen or outdoors.
2. **"plush", body:** "Its pupils follow him from furniture, cars, flowers and drains". Outdoors it has no pupils; say "it turns up on furniture, by the fence, on a flower" (`fnaf4-plush-follows-child` as corrected).
3. **"plush", third column and `tension`:** "FNaF4's last 'You're broken' is shown in a different colour from the plush's other lines". Not supported: all five Night 6 lines share a colour that matches the plush's own later lines (`fnaf4-youre-broken`, `fnaf4-speaker-text-colours`). Drop the colour argument; the FNaF World dots are the real support for an unnamed presence.
4. **"plush", answer:** "nothing identifies the voice as his father's." Underclaims. The toy and a handset are on the desk of the room that watches the bedroom, in the father's facility (`sl-private-room-handset-beside-plush`). Should say the games place the means in Afton's hands and stop short of naming the speaker. The chapter already calls the room "Afton's monitoring office" while citing no record that it monitors anything; those records now exist.
5. **"afton-house":** "The case has two parts": the purple car and "a joint hypothesis through UCN". It ignores every record in thread 1.1. Lead with the Private Room and the breaker panel; keep the car and UCN as corroboration. "The crying child as a third Afton child is a theory" can be raised (Q1). Its `counterEvidence` should be `sl-private-room-feeds-empty`, `fnaf4-house-rooms` and `ffps-midnight-motorist-closed-door`; `fnaf4-kid-who-hides-under-table` and `fnaf4-plush-locked-in-room` are not counter-evidence.
6. **"bite":** "and a flatline plays [[fnaf4-flatline]]" states as fact a sound this archive holds only at `implied`, from wiki description. "Whether the nights are a patient's nightmares or a memory is left open" omits the watched-room reading (Q3). "Reading the plush's voice as the father's is speculation: nothing identifies who speaks through it" needs the same update as item 4. Cite `sl-golden-freddy-cutscene-put-her-back-together` for Michael's line, not the opening record.
7. **"golden":** "FNaF World's clock ending gives his trophy". Wrong child: FNaF World's "Crying Child" is the FNaF2/3 sprite (`fw-crying-child-character`). And the same paragraph uses FNaF World to tie the crying child to rest while the UCN chapter makes him UCN's tormentor; the two are not reconciled anywhere (Q5).
8. **"michael", title and the "machines" part blurb:** "the son who was put back together". No record says Michael was put back together. He put "her" back together (`sl-golden-freddy-cutscene-put-her-back-together`); he is the son who "should be dead" (`sl-golden-freddy-cutscene-come-find-you`). Also: "His skin darkens to purple as the neighbours grow alarmed" (the neighbours rest on wiki text; the purple shirt at the start is the detail worth having, `sl-custom-night-decay`). "Michael follows instructions into his father's own facility" is right and should cite `sl-golden-freddy-cutscene-found-it` and `sl-extras-map-entertainment-and-rental`.
9. **"funtimes":** rated high on "machines built to take children" while citing no blueprint text ("blueprints of every Funtime flash on screen"). The text is now on file and is the chapter's best evidence. "The first child taken is his own daughter": order unsupported (Q7). Missing altogether: the rental business that sends these machines to private parties (`sl-handunit-rented-for-private-parties`), Baby's single day on stage (`sl-baby-on-stage-one-day`), and the machines' own motive (`sl-real-ending-they-always-put-us-back`).
10. **"ucn":** the case for Michael opens with Sister Location taunts ("your controlled shock", "Want to see the Scooping Room?"). Sister Location itself says the machines took Michael for his father (`sl-golden-freddy-cutscene-they-thought-i-was-you`), and the facility, its shock controls and its scooper are the father's company's. Those taunts cannot tell the two men apart. The chapter needs its other arguments to carry the pick, and should list this record as counter-evidence. The Private Room also gives the William reading a new footing for "I am remade, but not by you": the man with the monitors could have made FNaF4's illusions.
11. **"timeline-math":** makes no use of Sister Location's one relative anchor (`sl-handunit-freddy-fazbear-closing`) or of the 1983 code.
12. **"open":** the box entry is sound; add that Sister Location was Scott's substitute for opening it (Q9).
13. **Storyline beat `s-bite`** is fine as written. There is no beat for the watched house, the daughter's death, the week underground or Michael's speech.

## 4. What the theory leaves unconnected

- **The watched house (1.1), about 20 records.** Its own chapter in "The family": what Afton's facility could see, the toy and handset, the panel. Confidence high for what is shown, medium-high for "his own home". It should come before the Bite so that the plush is already understood as a device.
- **What the nights are (1.9).** A short chapter after the Bite: the three readings, with Sister Location's answer. Medium. Uses `fnaf4-bedroom-setting`, `fnaf4-nightmare-animatronics`, `fnaf4-fun-with-plushtrap`, `fnaf4-bedside-items`, `fnaf4-house-map-cheat`, `fnaf4-trailer-what-you-think-you-see`, `sl-breaker-map-dots`.
- **The children outside (5 records)** and the rumour that "they hide your body" already current c. 1983 (`fnaf4-pigtail-girl-hide-your-body`), the Spring Bonnie "finger trap" (`fnaf4-spring-bonnie-plush-finger-trap`), the Toy-like figures (`fnaf4-toy-collection-girl`). File under the family chapter as the neighbourhood's view of the restaurant; the rumour is a weak pointer that something had already happened there. Low.
- **The house itself:** four rooms, a pink bedroom, no parents (`fnaf4-house-rooms`, `fnaf4-second-bedroom`, `fnaf4-no-parent-shown`). Belongs in the household chapter; it is what makes the Afton family "fit". Medium.
- **The business model (1.5):** blueprint features plus day rental to private parties plus Scott's booking schedule. One paragraph in "funtimes": how the machines were meant to reach children after the pizzeria failed. High for the parts, medium for the join.
- **Baby's long con (1.6), about 20 records,** of which the theory uses a handful. The week has a plot: recruit, test, hide, frighten, win trust, deliver. It belongs in the Michael chapter as narrative; it is also the best portrait of what the daughter became. High (it is all stated dialogue).
- **The human staff:** HandUnit's company treats him as a stranger, the technicians think the machines merely break (`sl-handunit-intro-job-ad`, `sl-technicians-night4-dialogue`, `sl-technicians-hanged`). Shows the facility running without its maker. Support.
- **The soap opera** (`sl-immortal-and-the-restless`): a pull-quote box, flagged as parallel only.
- **"They thought I was you"** (`sl-golden-freddy-cutscene-they-thought-i-was-you`): the games' own statement that father and son can be confused. It belongs wherever the theory identifies an unnamed or purple figure, and in the UCN chapter as counter-evidence.
- **FNaF World (29 records, mostly unaccounted).** One short chapter or sidebar, "The sanctuary", for the frame voice (1.11), medium-low; the Baby teaser as colour in the Funtimes chapter; the rest under `outsideStory` with the reason "the game calls itself imaginary".
- **Halloween Edition (3)** and `fnaf4-making-of-extras`, `fw-unused-open-box`: `outsideStory`.
- **The box:** fine where it is; add Q9's point.

## 5. Best exhibits

Watched house
- `sl-private-room-keypad-1983`: figure `sl-private-room-1983-monitors.jpg` (the room with all three monitors on); `sl-private-room-feeds-fnaf4.png` (the three views).
- `sl-private-room-handset-beside-plush`: figure `sl-private-room-plush-handset.jpg`.
- `sl-breaker-panel-obsv-systems`: "Click and Hold to restart systems." with the list ending Obsv.1, Obsv.2; figure `sl-breaker-panel-ingame.jpg`.
- `sl-breaker-map-obsv2-house-layout`: figure `sl-obsv2-vs-fnaf4-house-map.png` (the single most persuasive image: the two plans side by side); `sl-breaker-map-clean.png` for the whole map.
- `sl-trailer-deep-below-ground`: "DEEP BELOW GROUND / WHERE MEMORIES SLEEP / ANGER IS RESTLESS / AND SECRETS DON'T KEEP".
- `sl-extras-map-entertainment-and-rental`: "Copyright (c) Afton Robotics LLC"; figure `sl-extras-map-afton-robotics.jpg`.

Household and Bite
- `fnaf4-plush-locked-in-room`: "What did he do this time? He locked you in your room again. Don't be scared. I am here with you."
- `fnaf4-plush-he-is-hiding-again`: "You know he is hiding again. He won't stop until you find him."
- `fnaf4-kid-who-hides-under-table`: "Aren't you the kid who always hides under the table and cries?"
- `fnaf4-give-fredbear-a-kiss`: "Hey guys, I think the little man said he wants to give Fredbear a big kiss!"
- `fnaf4-night6-brother-apology`: "Can you hear me? I don't know if you can hear me. ....I'm sorry."
- `fnaf4-i-will-put-you-back-together`: "I will put you back together."
- Figures: `fnaf4-bite-fredbear-stage.png`, `fnaf4-night6-put-you-back-together.png`, `fnaf4-minigame-house-rooms.png`, `fnaf4-house-second-bedroom.png`, `fnaf4-fredbear-and-friends-1983-tv.png`, `fnaf4-older-brother-and-bullies.png`.
- `fnaf4-left-hall-grandfather-clock`: figure `fnaf4-left-hall-grandfather-clock.jpg` (the clock at the dark end of the gameplay Left Hall, outlined and enlarged, beside the minigame hallway's grandfather clock). The 3D panels are heavily brightened and noisy and the clock takes a moment to find, so it works as a small supporting figure with its caption, not as a lead image.
- `fnaf4-trailer-what-you-think-you-see`: "What is it that you think you see? What game do you think you are playing? What have you brought home?"

Funtimes
- `sl-intro-mr-afton-board`: "With all due respect, those aren't the design choices we were curious about, Mr. Afton."
- `sl-blueprint-funtime-freddy`: "Voice Mimic/ Luring" (with "Parental Tracking" and "Storage Tank"); figure `sl-blueprint-funtime-freddy.jpg`. `sl-blueprint-funtime-foxy`: "Parental Voice Sync & Replay"; figure `sl-blueprint-funtime-foxy.jpg`. Also `sl-blueprint-circus-baby.jpg`, `sl-blueprint-ballora.jpg`.
- `sl-girl-daddy-let-me-play`: "Daddy just once let me go play with her. She's so pretty and shiny. Didn't you make her just for me?"
- `sl-baby-on-stage-one-day`: "Did you know that I was on stage once? It wasn't for very long, only one day."
- `sl-baby-ice-cream-story`: "A little girl, standing by herself. I was no longer... myself, and I stopped singing."
- `sl-handunit-rented-for-private-parties`: "our robotic entertainers are rented out for private parties during the day".
- Figure `sl-baby-minigame-claw.png`.

Michael
- `sl-baby-i-remember-this-scenario`: "I don't recognize you. You are new. I remember this... scenario, however."
- `sl-baby-how-to-pretend`: "The only thing that matters... is knowing... how. To. Pretend."
- `sl-real-ending-they-always-put-us-back`: "I've been out before, but they always put me back. They always put us back inside."
- `sl-real-ending-if-we-looked-like-you`: "But if we looked like you, then we could hide."
- `sl-you-wont-die`: "You won't die."
- `sl-golden-freddy-cutscene-found-it`: "I found it. It was right where you said it would be."
- `sl-golden-freddy-cutscene-they-thought-i-was-you`: "They didn't recognize me at first, but then... they thought I was you."
- `sl-golden-freddy-cutscene-put-her-back-together`: "I put her back together, just like you asked me to. She's free now."
- `sl-golden-freddy-cutscene-come-find-you`: "I should be dead. But I'm not. I've been living in shadows."
- Figures: `sl-custom-night-decay-stages.png` (six stages, purple shirt to purple man), `sl-real-ending-purple-eyes.png`, `sl-golden-freddy-cutscene-fazbears-fright.png`.

FNaF World
- `fw-opening-put-you-back-together`: "But I won't let the same happen to you. I will put you back together."; figure `fw-opening-put-you-back-together.png`.
- `fw-8bit-fredbear-breadcrumbs`: "You have to leave breadcrumbs for him, to help him find his way."; figure `fw-8bit-fredbear-breadcrumbs.png`.
- `fw-clock-game-395248`: figure `fw-clock-game-395248.png`.
- `fw-clock-ending-pieces-in-place`: "The pieces are in place for you. All you have to do is find them. Rest."; figures `fw-clock-ending-still-your-friends.png`, `fw-clock-ending-pieces-in-place.png`.
- `fw-desk-man-made-something-terrible`: "I've made something terrible. Her name is Baby."; figures `fw-desk-man-her-name-is-baby.png`, `fw-desk-man-dead.png`.
- `fw-old-man-consequences`: "Come have a seat, and let's fish for a while. You have no where else to go."; figure `fw-old-man-consequences.jpg`.
- `fw-android-port-clock-ending`: "I caused the bite of 87. That's right. Mind Blown! It all makes sense when you think about it. All hail Bouncepot!" (for a sidebar on how lightly the frame was held by 2017; no image on file).

## 6. Filing table

Roles: `core`, `support`, `counter`, `colour`, `outside`. One line per record, all 160.

Counts: core 52, support 69, counter 6, colour 22, outside 11.

- `fnaf4-minigame-countdown-to-party` → 1.10 Dates and order → `core`
- `fnaf4-plush-locked-in-room` → 1.2 Household, c. 1983 → `core` (also 1.4)
- `fnaf4-plushies-these-are-my-friends` → 1.3 Bite and Night 6 → `support` (the friends that fade at Night 6)
- `fnaf4-tomorrow-is-another-day` → 1.4 Fredbear plush → `support`
- `fnaf4-brother-foxy-mask-tv` → 1.2 Household, c. 1983 → `core`
- `fnaf4-mangle-pieces-in-house` → 1.2 Household, c. 1983 → `support` (second bedroom; also a dating wrinkle)
- `fnaf4-left-behind-at-diner` → 1.2 Household, c. 1983 → `core`
- `fnaf4-fredbear-suit-employee-chase` → 1.2 Household, c. 1983 → `support`
- `fnaf4-dont-you-remember-what-you-saw` → 1.2 Household, c. 1983 → `support` (what he saw is never told)
- `fnaf4-fredbear-spring-bonnie-shadows` → 1.2 Household, c. 1983 → `support`
- `fnaf4-purple-guy-suits-up-employee` → 1.2 Household, c. 1983 → `core` (the purple man at the child's restaurant)
- `fnaf4-he-hates-you` → 1.4 Fredbear plush → `support`
- `fnaf4-spring-bonnie-plush-finger-trap` → 1.2 Household, c. 1983 → `colour` (the neighbourhood)
- `fnaf4-pigtail-girl-hide-your-body` → 1.10 Dates and order → `support` (a body-hiding rumour already current c. 1983)
- `fnaf4-kid-who-hides-under-table` → 1.2 Household, c. 1983 → `support`
- `fnaf4-toy-collection-girl` → 1.10 Dates and order → `counter` (Toy-like figures in a 1983 scene)
- `fnaf4-its-your-birthday` → 1.3 Bite and Night 6 → `core`
- `fnaf4-fredbear-and-friends-1983` → 1.10 Dates and order → `core`
- `fnaf4-plush-be-careful` → 1.4 Fredbear plush → `support`
- `fnaf4-plush-follows-child` → 1.4 Fredbear plush → `core`
- `fnaf4-locked-backstage` → 1.2 Household, c. 1983 → `support`
- `fnaf4-bullies-in-masks` → 1.3 Bite and Night 6 → `support`
- `fnaf4-brother-lift-closer` → 1.3 Bite and Night 6 → `support`
- `fnaf4-give-fredbear-a-kiss` → 1.3 Bite and Night 6 → `core`
- `fnaf4-the-bite` → 1.3 Bite and Night 6 → `core`
- `fnaf4-night6-brother-apology` → 1.3 Bite and Night 6 → `core`
- `fnaf4-youre-broken` → 1.3 Bite and Night 6 → `core` (also 1.4)
- `fnaf4-still-your-friends` → 1.3 Bite and Night 6 → `core`
- `fnaf4-i-will-put-you-back-together` → 1.3 Bite and Night 6 → `core` (the phrase that recurs)
- `fnaf4-flatline` → 1.3 Bite and Night 6 → `core` (implied only)
- `fnaf4-locked-box-ending` → 1.12 The box → `core`
- `fnaf4-bedroom-setting` → 1.9 FNaF4's nights and the Nightmares → `core`
- `fnaf4-nightmare-animatronics` → 1.9 FNaF4's nights and the Nightmares → `core`
- `fnaf4-nightmare-fredbear-4am` → 1.9 FNaF4's nights and the Nightmares → `support`
- `fnaf4-nightmare-shares-fredbear-sounds` → 1.9 FNaF4's nights and the Nightmares → `colour`
- `fnaf4-bedside-items` → 1.9 FNaF4's nights and the Nightmares → `counter` (points to a hospital, against the real-room reading)
- `fnaf4-reversed-phone-guy` → 1.9 FNaF4's nights and the Nightmares → `colour`
- `fnaf4-fun-with-plushtrap` → 1.9 FNaF4's nights and the Nightmares → `support` (the hallway on Afton's third monitor)
- `fnaf4-making-of-extras` → Outside: development extras and unused files → `outside` (development renders)
- `fnaf4-halloween-replacements` → Outside: Halloween Edition (non-canon per Scott) → `outside`
- `fnaf4-halloween-fun-with-bb` → Outside: Halloween Edition (non-canon per Scott) → `outside`
- `fnaf4-halloween-decorated-minigames` → Outside: Halloween Edition (non-canon per Scott) → `outside`
- `fw-clock-ending-still-your-friends` → 1.11 FNaF World's frame voice → `support`
- `fw-clock-ending-pieces-in-place` → 1.11 FNaF World's frame voice → `support` (also 1.12 The box)
- `fw-8bit-fredbear-breadcrumbs` → 1.11 FNaF World's frame voice → `support`
- `fw-8bit-fredbear-made-for-one-thing` → 1.11 FNaF World's frame voice → `support`
- `fw-8bit-fredbear-puppet-master` → Outside: FNaF World talking about itself → `colour` (the puppet-master is the author)
- `fw-8bit-fredbear-something-terrible` → 1.12 FNaF World's teaser for Baby → `colour`
- `fw-desk-man-made-something-terrible` → 1.12 FNaF World's teaser for Baby → `support`
- `fw-desk-man-found-dead` → 1.12 FNaF World's teaser for Baby → `support`
- `fw-desk-man-pendulum` → 1.12 FNaF World's teaser for Baby → `colour`
- `fw-purpleguy-sprite-disclaimer` → Outside: FNaF World talking about itself → `outside`
- `fw-animdude-puppet-master` → Outside: FNaF World talking about itself → `outside`
- `fw-old-man-consequences` → 1.12 Old Man Consequences → `support` (matters through UCN)
- `sl-intro-mr-afton-board` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-girl-daddy-let-me-play` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-girl-where-did-other-children-go` → 1.5 Afton Robotics, the Funtimes, the daughter → `support`
- `sl-baby-minigame-girl-grabbed` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-baby-ice-cream-story` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-handunit-freddy-fazbear-closing` → 1.10 Dates and order → `core`
- `sl-eggs-benedict` → 1.6 Michael's week underground → `support`
- `sl-controlled-shocks` → 1.6 Michael's week underground → `support`
- `sl-dead-body-in-vent` → 1.6 Michael's week underground → `colour`
- `sl-baby-previous-employee-hiding-place` → 1.6 Michael's week underground → `support`
- `sl-baby-warns-handunit-will-kill` → 1.6 Michael's week underground → `support`
- `sl-ballora-song` → 1.6 Michael's week underground → `colour`
- `sl-technicians-injured-funtime-freddy` → 1.6 Michael's week underground → `colour`
- `sl-funtime-freddy-bon-bon-birthday-boy` → 1.6 Michael's week underground → `colour` (do not lean on "birthday boy")
- `sl-funtime-foxy-knockout` → 1.6 Michael's week underground → `support`
- `sl-baby-i-kidnapped-you` → 1.6 Michael's week underground → `support`
- `sl-springlock-suit-from-old-pizzeria` → 1.5 Afton Robotics, the Funtimes, the daughter → `support` (also 1.10)
- `sl-scooping-room-explained` → 1.7 Scooping and the body that will not die → `support`
- `sl-ballora-scooped` → 1.7 Scooping and the body that will not die → `support`
- `sl-baby-how-to-pretend` → 1.6 Michael's week underground → `support`
- `sl-springlocks-breathing` → 1.6 Michael's week underground → `colour`
- `sl-technicians-hanged` → 1.6 Michael's week underground → `support`
- `sl-baby-something-bad-inside` → 1.6 Michael's week underground → `support` (her lure; "I'm broken")
- `sl-baby-card-and-passcode` → 1.6 Michael's week underground → `support`
- `sl-real-ending-if-we-looked-like-you` → 1.7 Scooping and the body that will not die → `core`
- `sl-real-ending-scooped-mirror` → 1.7 Scooping and the body that will not die → `core`
- `sl-private-room-restricted` → 1.1 Watched house → `support`
- `sl-private-room-fredbear-plush` → 1.1 Watched house → `core` (also 1.4)
- `sl-fake-ending-to-be-with-her-again` → 1.8 Michael's report to his father → `core` (why he came)
- `sl-fake-ending-girl-voice` → 1.5 Afton Robotics, the Funtimes, the daughter → `support` ("accident" is ambiguous: see Q2)
- `sl-fake-ending-home` → 1.6 Michael's week underground → `colour` (branch contradicted by the Real Ending)
- `sl-exotic-butters` → 1.6 Michael's week underground → `colour`
- `sl-custom-night-decay` → 1.7 Scooping and the body that will not die → `core`
- `sl-custom-night-ennard-ejected` → 1.7 Scooping and the body that will not die → `core`
- `sl-you-wont-die` → 1.7 Scooping and the body that will not die → `core`
- `sl-golden-freddy-cutscene-father` → 1.8 Michael's report to his father → `core`
- `sl-golden-freddy-cutscene-come-find-you` → 1.8 Michael's report to his father → `core`
- `sl-golden-freddy-cutscene-springtrap` → 1.8 Michael's report to his father → `core` (also 1.10)
- `sl-blueprint-screens` → 1.5 Afton Robotics, the Funtimes, the daughter → `support` (parent of the four blueprint records)
- `sl-baby-guides-past-ballora` → 1.6 Michael's week underground → `colour`
- `fnaf4-plush-two-sprites` → 1.4 Fredbear plush → `support`
- `fnaf4-plush-eyes-by-scene` → 1.4 Fredbear plush → `support` (re-verified, now shown)
- `fnaf4-plush-night6-pupils-only` → 1.4 Fredbear plush → `support` (CORRECTED: plush whole at the last line)
- `fw-unused-open-box` → Outside: development extras and unused files → `outside` (unused asset)
- `fnaf4-plush-he-is-hiding-again` → 1.4 Fredbear plush → `support`
- `fnaf4-night6-fade-order` → 1.3 Bite and Night 6 → `core`
- `fnaf4-speaker-text-colours` → 1.4 Fredbear plush → `support` (kills the colour argument for a second speaker)
- `fnaf4-house-rooms` → 1.2 Household, c. 1983 → `support`
- `fnaf4-second-bedroom` → 1.2 Household, c. 1983 → `support`
- `fnaf4-no-parent-shown` → 1.2 Household, c. 1983 → `support`
- `fnaf4-diner-unnamed` → 1.2 Household, c. 1983 → `colour` (naming caveat)
- `fnaf4-party-no-other-guests` → 1.3 Bite and Night 6 → `colour`
- `fnaf4-house-map-cheat` → 1.1 Watched house → `core` (FNaF4's side of the map match)
- `fnaf4-trailer-what-you-think-you-see` → 1.9 FNaF4's nights and the Nightmares → `support`
- `fnaf4-night8-no-story-text` → 1.12 The box → `colour`
- `fw-opening-safe-place-something-went-wrong` → 1.11 FNaF World's frame voice → `support`
- `fw-opening-put-you-back-together` → 1.11 FNaF World's frame voice → `support` (the screen once mistaken for FNaF4)
- `fw-fredbear-flipside` → 1.11 FNaF World's frame voice → `support`
- `fw-clock-games-five-tasks` → 1.11 FNaF World's frame voice → `support` (resemblance to FNaF3's triggers)
- `fw-clock-game-395248` → 1.11 FNaF World's frame voice → `support` (exact match to FNaF3)
- `fw-8bit-fredbear-true-goal` → 1.11 FNaF World's frame voice → `support`
- `fw-desk-man-first-dialogue` → 1.12 FNaF World's teaser for Baby → `colour`
- `fw-desk-man-deactivated-my-games` → 1.12 FNaF World's teaser for Baby → `counter` (he speaks as a maker of games, not as a character)
- `fw-update2-fredbear-he-has-gone-insane` → 1.12 FNaF World's teaser for Baby → `colour`
- `fw-update2-game-bombed` → Outside: FNaF World talking about itself → `outside`
- `fw-hard-ending-killing-the-storyteller` → Outside: FNaF World talking about itself → `outside`
- `fw-normal-ending-still-in-control` → Outside: FNaF World talking about itself → `outside`
- `fw-crying-child-character` → 1.11 FNaF World's frame voice → `counter` (the trophy is not FNaF4's boy)
- `sl-private-room-keypad-1983` → 1.1 Watched house → `core`
- `sl-private-room-monitor-bedroom` → 1.1 Watched house → `core`
- `sl-private-room-monitor-bed` → 1.1 Watched house → `core`
- `sl-private-room-monitor-hallway` → 1.1 Watched house → `core`
- `sl-private-room-feeds-empty` → 1.1 Watched house → `counter` (empty rooms; live or recorded unknown)
- `sl-private-room-handset-beside-plush` → 1.1 Watched house → `core` (also 1.4)
- `sl-private-room-camera-map` → 1.1 Watched house → `support`
- `sl-breaker-panel-obsv-systems` → 1.1 Watched house → `core` (in the canonical run)
- `sl-breaker-map-faint-clusters` → 1.1 Watched house → `core`
- `sl-breaker-map-obsv-identification` → 1.1 Watched house → `support`
- `sl-breaker-map-obsv2-house-layout` → 1.1 Watched house → `core` (implied: a match between two drawings)
- `sl-breaker-map-obsv1-layout` → 1.1 Watched house → `support`
- `sl-breaker-map-corridor-cluster` → 1.1 Watched house → `support`
- `sl-breaker-map-dots` → 1.1 Watched house → `support` (also 1.9)
- `sl-extras-map-entertainment-and-rental` → 1.5 Afton Robotics, the Funtimes, the daughter → `core` (the facility is Afton Robotics')
- `sl-blueprint-circus-baby` → 1.5 Afton Robotics, the Funtimes, the daughter → `support`
- `sl-blueprint-ballora` → 1.5 Afton Robotics, the Funtimes, the daughter → `support`
- `sl-blueprint-funtime-freddy` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-blueprint-funtime-foxy` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-elevator-underground-facility` → 1.1 Watched house → `support`
- `sl-trailer-deep-below-ground` → 1.1 Watched house → `support`
- `sl-handunit-rented-for-private-parties` → 1.5 Afton Robotics, the Funtimes, the daughter → `core`
- `sl-handunit-intro-job-ad` → 1.6 Michael's week underground → `support`
- `sl-baby-i-remember-this-scenario` → 1.6 Michael's week underground → `support` (also 1.8)
- `sl-bidybab-same-person` → 1.6 Michael's week underground → `colour`
- `sl-baby-on-stage-one-day` → 1.5 Afton Robotics, the Funtimes, the daughter → `core` (also 1.10)
- `sl-technicians-night4-dialogue` → 1.7 Scooping and the body that will not die → `support`
- `sl-real-ending-already-been-here-today` → 1.7 Scooping and the body that will not die → `support`
- `sl-real-ending-they-always-put-us-back` → 1.7 Scooping and the body that will not die → `core`
- `sl-fake-ending-we-need-you` → 1.7 Scooping and the body that will not die → `support`
- `sl-immortal-and-the-restless` → 1.6 Michael's week underground → `colour` (parallel only)
- `sl-golden-freddy-cutscene-found-it` → 1.8 Michael's report to his father → `core`
- `sl-golden-freddy-cutscene-they-thought-i-was-you` → 1.8 Michael's report to his father → `core` (counter-evidence for the UCN chapter)
- `sl-golden-freddy-cutscene-put-her-back-together` → 1.8 Michael's report to his father → `core`
- `fnaf4-left-hall-grandfather-clock` → 1.2 Household, c. 1983 → `support` (a clock in both hallways, the one fixture the 3D house and the 8-bit house share; also 1.9; not seen by me, see section 8)
- `fw-android-port-clock-ending` → 1.11 FNaF World's frame voice → `counter` (the 2017 port turns the frame voice into a joke; could equally go under outside)
- `fw-drowning-ending` → 1.12 Old Man Consequences → `colour` (the lake UCN returns to)
- `fw-chippers-revenge-ending` → Outside: FNaF World talking about itself → `outside`

## 7. Records added and fixed

### Added (62)

- `fnaf4-plush-he-is-hiding-again`: Plush after Night 1: 'You know he is hiding again.'.
- `fnaf4-night6-fade-order`: Night 6: the order of the lines and the fades.
- `fnaf4-speaker-text-colours`: Each speaker in the minigames has a text colour.
- `fnaf4-house-rooms`: The minigame house: four rooms.
- `fnaf4-second-bedroom`: A second bedroom with a pink bed, and nobody in it.
- `fnaf4-no-parent-shown`: No parent appears anywhere in FNaF4.
- `fnaf4-diner-unnamed`: FNaF4 never prints the restaurant's name.
- `fnaf4-party-no-other-guests`: The party room holds no one but the five boys.
- `fnaf4-house-map-cheat`: House Map cheat: the plan of the gameplay house.
- `fnaf4-trailer-what-you-think-you-see`: Scott's FNaF4 trailer: 'What is it that you think you see?'.
- `fnaf4-night8-no-story-text`: Night 8 ('20/20/20/20') adds no story.
- `fnaf4-left-hall-grandfather-clock`: A clock at the end of the Left Hall; a grandfather clock in the minigame hallway.
- `fw-opening-safe-place-something-went-wrong`: FNaF World opens with two eyes in the dark: 'something has gone wrong'.
- `fw-opening-put-you-back-together`: FNaF World's first words end: 'I will put you back together.'.
- `fw-fredbear-flipside`: Fredbear: something bad happened 'on the flipside'.
- `fw-clock-games-five-tasks`: The five clock games.
- `fw-clock-game-395248`: Fourth clock game shows 395248, FNaF3's Stage01 code.
- `fw-8bit-fredbear-true-goal`: 8-bit Fredbear: 'Find the clock. Everything else is a deception.'.
- `fw-desk-man-first-dialogue`: The man at the desk, first version: 'It wasn't supposed to be like this.'.
- `fw-desk-man-deactivated-my-games`: The man at the desk: 'You deactivated my games?'.
- `fw-update2-fredbear-he-has-gone-insane`: Update 2 Fredbear: 'he... has gone insane'.
- `fw-update2-game-bombed`: Update 2 Fredbear: 'The game bombed; end of story.'.
- `fw-hard-ending-killing-the-storyteller`: Hard Mode ending: 'ending the story by killing the storyteller'.
- `fw-normal-ending-still-in-control`: Normal ending: 'an imaginary monster in an imaginary game'.
- `fw-crying-child-character`: FNaF World's 'Crying Child' is the weeping child of FNaF2 and FNaF3, not FNaF4's boy.
- `fw-android-port-clock-ending`: Android port: the clock ending's two dots become a Bouncepot.
- `fw-drowning-ending`: Drowning ending: the player's sprite goes into Old Man Consequences' lake.
- `fw-chippers-revenge-ending`: Chipper's Revenge: 'You wanted to be scared... Obscurity...'.
- `sl-private-room-keypad-1983`: Private Room keypad: 1-9-8-3 turns the monitors into camera feeds.
- `sl-private-room-monitor-bedroom`: Private Room, top monitor: FNaF4's bedroom.
- `sl-private-room-monitor-bed`: Private Room, bottom-right monitor: FNaF4's bed.
- `sl-private-room-monitor-hallway`: Private Room, bottom-left monitor: the Plushtrap hallway.
- `sl-private-room-feeds-empty`: The three views show empty rooms, from angles FNaF4's player never has.
- `sl-private-room-handset-beside-plush`: A handset with antenna, keys and speaker rests against the desk plush.
- `sl-private-room-camera-map`: Private Room camera map: office marked 'YOU', a vent and two halls.
- `sl-breaker-panel-obsv-systems`: Breaker panel lists eight systems, the last two 'Obsv.1' and 'Obsv.2'.
- `sl-breaker-map-faint-clusters`: Breaker map: three faint clusters of rooms outside the facility, each joined to it.
- `sl-breaker-map-obsv-identification`: Obsv.1 is the upper-left cluster, Obsv.2 the upper-right.
- `sl-breaker-map-obsv2-house-layout`: Obsv.2 is laid out like FNaF4's House Map.
- `sl-breaker-map-obsv1-layout`: Obsv.1: three rooms in a row, one below the middle, strips, and a taller room at the right.
- `sl-breaker-map-corridor-cluster`: Third faint cluster: a corridor with two rooms on each side.
- `sl-breaker-map-dots`: Breaker map dots: one white dot in each faint cluster, grey dots where the animatronics are.
- `sl-extras-map-entertainment-and-rental`: Extras map: 'Circus Baby's Entertainment & Rental', copyright Afton Robotics LLC.
- `sl-blueprint-circus-baby`: Blueprint: Circus Baby (7.2 ft, 585 lbs), internal ice cream dispenser.
- `sl-blueprint-ballora`: Blueprint: Ballora, 'Deter & Misdirect... see: Circus Baby dir07'.
- `sl-blueprint-funtime-freddy`: Blueprint: Funtime Freddy, 'Parental Tracking', 'Voice Mimic/ Luring', 'Storage Tank'.
- `sl-blueprint-funtime-foxy`: Blueprint: Funtime Foxy, 'Parental Voice Sync & Replay', 'Variable Scent Release'.
- `sl-elevator-underground-facility`: Every night begins with an elevator ride down.
- `sl-trailer-deep-below-ground`: Scott's trailer: 'Deep below ground where memories sleep'.
- `sl-handunit-rented-for-private-parties`: HandUnit: the robots are rented out for private parties by day.
- `sl-handunit-intro-job-ad`: HandUnit greets a new hire: a job fair, an ad, or a dare.
- `sl-baby-i-remember-this-scenario`: Baby: 'I don't recognize you. You are new. I remember this... scenario, however.'.
- `sl-bidybab-same-person`: Bidybabs: 'Is it the same person?'.
- `sl-baby-on-stage-one-day`: Baby: 'I was on stage once... only one day'.
- `sl-technicians-night4-dialogue`: Technicians: 'these things can't go a day without breaking down'.
- `sl-real-ending-already-been-here-today`: Scooping room: all four 'have already been here today'.
- `sl-real-ending-they-always-put-us-back`: 'I've been out before, but they always put me back'.
- `sl-fake-ending-we-need-you`: Outside the Private Room: 'We need you, so that we can leave'.
- `sl-immortal-and-the-restless`: The soap opera at home: a father who says the baby isn't his.
- `sl-golden-freddy-cutscene-found-it`: 'I found it. It was right where you said it would be.'.
- `sl-golden-freddy-cutscene-they-thought-i-was-you`: 'They didn't recognize me at first, but then... they thought I was you.'.
- `sl-golden-freddy-cutscene-put-her-back-together`: 'I put her back together, just like you asked me to. She's free now.'.

### Fixed (44 existing records changed; ids unchanged)

Corrections of substance:

- `fnaf4-plush-night6-pupils-only`: FALSE as written: the two-dots image is FNaF World's opening screen, not FNaF4. Rewritten to what FNaF4 shows; image replaced.
- `fnaf4-plush-eyes-by-scene`: Re-verified frame by frame; wrong detail removed (the plush at the second bedroom's doorway HAS pupils); "girl's bedroom" wording removed; certainty implied -> shown.
- `fnaf4-plush-follows-child`: Claim said the pupils track him in every placement; outdoors the plush has no pupils.
- `fnaf4-youre-broken`: Claim attributed the line to the plush as fact; the note about a different text colour was a wiki claim that does not survive measurement.
- `fnaf4-still-your-friends`: Notes had the fade order attached to the wrong lines; now from a frame read.
- `fnaf4-i-will-put-you-back-together`: Claim softened to what is on screen; image and cross-game links added.
- `fnaf4-brother-foxy-mask-tv`: Notes carried an unverified plush line; replaced with the lines read on screen.
- `fnaf4-mangle-pieces-in-house`: Location made exact: the pieces lie in the house's second bedroom.
- `fnaf4-spring-bonnie-plush-finger-trap`: Quote was not verbatim: on screen it is "Where is your plush toy?" and "My Daddy".
- `fnaf4-pigtail-girl-hide-your-body`: Quote trimmed to the part read on screen and punctuation corrected (was 35 words plus an ellipsis, with a full stop where the game has an exclamation mark).
- `fnaf4-its-your-birthday`: Quote was not verbatim ("you have to go!" has an exclamation mark).
- `fw-8bit-fredbear-breadcrumbs`: Quote was not verbatim (no comma before "do you?"; the game says "You have to leave", not "You need to leave").
- `fw-8bit-fredbear-made-for-one-thing`: Quote was not verbatim (the game prints "safe place- a sanctuary").
- `fw-animdude-puppet-master`: Quote was not verbatim (the game prints "puppet-master" with a hyphen).
- `fw-old-man-consequences`: Record had no quote ("paraphrased"); wording now read from in-game screenshots.
- `fw-clock-ending-pieces-in-place`: People tag tied the trophy to FNaF4's crying child; FNaF World's "Crying Child" is a different sprite.
- `fw-desk-man-found-dead`: Image added; what is on screen separated from what is audio.
- `sl-handunit-freddy-fazbear-closing`: Location was wrong: the line plays in the vent crawl after the elevator, not during the elevator descent.
- `sl-private-room-fredbear-plush`: Description made exact; the handset and the monitors now have their own records; image added.
- `sl-custom-night-decay`: Claim made exact from the sprites: purple shirt, six stages; image added.
- `sl-golden-freddy-cutscene-springtrap`: Image added; what is visible stated exactly.
- `sl-real-ending-if-we-looked-like-you`: Claim narrowed; the sentences before it now have their own records.

Cross-references and verification notes only:

- `fnaf4-flatline`: Verification note added: the fade was seen, the tone was not heard.
- `fnaf4-night6-brother-apology`: Note on how the speaker is identified.
- `fnaf4-brother-lift-closer`: Child's line corrected to the on-screen punctuation.
- `fnaf4-the-bite`: Image added; note on the empty room.
- `fnaf4-left-behind-at-diner`: Cross-reference to the new record on the unnamed restaurant.
- `fnaf4-nightmare-shares-fredbear-sounds`: Verification caveat added (audio identity rests on the wiki).
- `fnaf4-bedroom-setting`: Cross-references to the Sister Location records that show these rooms.
- `fnaf4-fun-with-plushtrap`: Cross-reference to the Sister Location feed of this hallway.
- `fw-8bit-fredbear-puppet-master`: Spelling in notes corrected to the on-screen "puppet-master"; cross-links.
- `fw-clock-ending-still-your-friends`: Image and links to FNaF World's opening added.
- `fw-desk-man-made-something-terrible`: Image and the lines that precede the quote added.
- `fw-desk-man-pendulum`: Verification upgraded to the in-game screenshots.
- `sl-fake-ending-home`: Caveat on the basket added.
- `sl-custom-night-ennard-ejected`: Detail from the sprites added.
- `sl-you-wont-die`: Cross-game echoes linked.
- `sl-golden-freddy-cutscene-father`: Kept as the opening of the speech; the middle sentences now have their own atomic records.
- `sl-blueprint-screens`: The notes said the annotations were not transcribed; they now are, one record per animatronic.
- `sl-baby-previous-employee-hiding-place`: Cross-reference to the new record for the lines before it.
- `sl-fake-ending-to-be-with-her-again`: Cross-reference to the new atomic record.
- `sl-fake-ending-girl-voice`: Cross-references.
- `sl-baby-ice-cream-story`: Cross-reference to the first half of the same speech.
- `sl-intro-mr-afton-board`: Cross-references to the blueprints and Scott's page source.

Images: 26 added under `public/img/` with credits. `fnaf4-plush-night6-dots.jpg` is no longer used by any record; its credit now says what it is (FNaF World's opening screen). The file can be deleted by whoever owns cleanup.

A record that should go, or be merged, if ids could be dropped: none. `fnaf4-plush-night6-pupils-only` keeps its id with a title that no longer matches the id's wording.

Not mine to add, for whoever owns `scott.json` (both fetched and read in full):
- Scott's Steam post of 25 January 2016, "FNaF World": "I've decided to remove the game from Steam." and "From this point forward, the game will always be free on GameJolt AND Steam." (https://store.steampowered.com/news/app/388090/view/4033492738906632203, in the FNaF4 app's news feed).
- Scott's Game Jolt post of 17 January 2017, "A Farewell to FNaF World": "There won't be an update 3, and there won't be mobile ports." and "It was a project of love for me and something that I enjoyed working on." (https://gamejolt.com/p/a-farewell-to-fnaf-world-uvpkwgtr). Neither is on file; `scott-2016-fnaf-world-last-game` and `scott-2018-interview-fnaf-world-tied-to-canon-mistake` are the only FNaF World statements there.

Answers to questions other memos put to this slice:
- ffps-ucn, item 11 (does FNaF4's older brother speak in grey text?): yes. His lines are dim grey in every minigame and in the Night 6 cutscene, read from captures (`fnaf4-speaker-text-colours`, `fnaf4-night6-brother-apology`). So the grey text of Midnight Motorist's seated person (`ffps-midnight-motorist-grey-person`) does match the brother's colour. No game connects the two, and a text colour is thin ground: low.
- fnaf123, item 18 (a date for the retirement of the springlock suits or the sealing of the rooms): this slice holds none. It shows wearable Fredbear and Spring Bonnie suits in use in the minigame week whose printed year is 1983 (`fnaf4-fredbear-suit-employee-chase`, `fnaf4-purple-guy-suits-up-employee`), and a springlock suit "from my old pizzeria", which Baby thinks was never used as meant, in the facility after a Freddy Fazbear's Pizza has closed (`sl-springlock-suit-from-old-pizzeria`, `sl-handunit-freddy-fazbear-closing`). That is a floor for when the suits were worn, not a retirement date.
- ffps-ucn and scott (the Private Room keypad and monitors): now on file, thread 1.1.

## 8. Could not verify

- **The digits 1-9-8-3 by eye.** The keypad has no display. Two captures show the keypad clicked and the monitors changing; the digits come from wiki text and the captures' titles. Would verify: a capture with an input overlay, or the game's own logic.
- **Whether the monitor views are live.** They are still textures. Nothing in the game says.
- **"Obsv." = observation, and what the map's faint lines are.** Never expanded or explained in the game.
- **A Scott statement that 1983 is FNaF4's canon year.** The wiki's Night 6 (FNaF: SL) page says he said so on Reddit. A search of his Reddit comments for "1983" returns only the 6 November 2017 comment already on file (`scott-2017-matpat-final-theory`). Treat the wiki's claim as a garbling of that.
- **Three FNaF4-era page-source hints attributed to scottgames.com** ("What is seen in shadows is easily misunderstood in the mind of a child", "Four games. One story.", a question about a toy's missing beak). The Wayback captures of 29 August and 3 September 2015 do not contain them; other dates were rate-limited or empty. If real they belong in `scott.json`; they would bear directly on Q3.
- **The flatline tone** (`fnaf4-flatline`), **Nightmare's shared sounds**, **the reversed FNaF1 call**: audio, taken from the wiki, not checked by ear.
- **Bedside items' odds and the claim that they also appear after Nightmare Fredbear leaves the bed**; **Night 8's lack of any new screen**: wiki text only.
- **The "THE END" screens' hidden labels.** The wiki says brightening them shows "real ending" and "fake ending". Brightened copies of the wiki's own files show nothing. Not recorded.
- **The Exotic Butters basket on the TV in the fake ending** (`sl-fake-ending-home`): wiki text; not visible in the frames checked.
- **The neighbours' reactions in the Custom Night cutscenes**: wiki text, with pages disagreeing on numbers.
- **The Left Hall clock, by my own eye.** It is recorded (`fnaf4-left-hall-grandfather-clock`) on the wiki's text plus independent readers, not on my own sight: see the last bullet. Still unverified: that it is a floor-standing grandfather clock as the wiki says (its lower part stays lost in the dark even when the still is brightened; one reader took it for a wall clock), its chime (wiki text; audio), and whether the low object beside it is the "box" the wiki mentions (no reader could identify it).
- **The Android port's other rewritten dialogue** (Fredbear's and 8-bit Fredbear's joke lines, the missing Update 2 scene): wiki transcript only. Only the port's clock ending was checked on screen.
- **A "Happiest Day" text said to sit in the decompiled Drowning ending.** Wiki trivia with no source; it would tie FNaF World's lake to FNaF3's last minigame. Not recorded. Would verify: the game's own data.
- **Sister Location Trailer 1's spoken lines** and **the 8-bit Fredbear line the wiki lists as unused** ("If you keep following him, you will only finish a story...").
- **What the four coloured squares on FNaF4's House Map are** and what its two grey squares stand for.
- **Four records I did not see with my own eyes.** After the main pass my image input failed (every view came back empty), so `fnaf4-left-hall-grandfather-clock`, `fw-android-port-clock-ending`, `fw-drowning-ending` and `fw-chippers-revenge-ending` rest on other readers. An earlier version of this memo, on disk from about 19:36 on 2 October until this one replaced it (the 20:11 digests were built from it), said the Left Hall clock was "verified by eye" and called it a grandfather clock with a box beside it. That was wrong: I had not seen it, and the claim went further than the picture does. What was done instead:
  1. On-screen text was read by OCR at several scales. Tried first on two FNaF World screens I had read by eye, the OCR garbled the largest pixel font, so no wording rests on OCR alone.
  2. The pictures went to independent readers (sub-agents with working image input) under meaningless file names, with free description asked for before any pointed question. Six runs began with a test card carrying a random code and a random number of shapes; all six read their card correctly. A seventh run only ranked five candidate versions of the clock figure for legibility.
  3. The Left Hall, first pair of runs: two readers working separately each listed what they could make out in the brightened still, and each put a clock with a round pale face in a wooden case at the same spot at the dark far end. That prompt was not fully blind: it ended with a twelve-item checklist that named a longcase clock among window, coat rack, mirror, potted plant, bookshelf, staircase and other candidates. Both marked the clock clearly present and the window, coat rack, mirror, plant, staircase and any figure not visible.
  4. The Left Hall, last pair of runs, fully blind: each reader got only the enlarged crop, plus a second crop of the same still with no clock in it, and a prompt that asked what, if anything, was recognisable. One answered that it "most likely resembles a small clock in a case" (rated probable), the other "a clock in a wooden case, apparently wall-hung" (rated clear). Both found nothing recognisable in the second crop. So: a clock, yes; a floor-standing grandfather clock, not shown. The record's claim says only "a clock ... in a reddish-brown wooden case".
  5. The finished three-panel figure was described by one more reader in a prompt that never used the word clock; it named a clock as the one recognisable object in the enlarged panel ("CLEAR, at the low end"). An earlier, wider cut of the figure had been rated findable "ONLY WITH EFFORT", which is why it was re-cut. Across all runs nobody could make out a base, a pendulum was at most a faint guess (thin strokes under the case), and nobody could say what the low object beside the clock is.
  6. The Android ending: OCR and two readers agree on every word, and the same five screens appear in a second source, a capture uploaded two days after the port came out.
  7. Chipper's lines: a reader's transcript matches the OCR word for word, and the closing lines match the wiki's transcript.
  8. The Drowning ending has no text; its claim is limited to what two readers both described, and what comes from the wiki's text is marked in the notes.
  The clock agrees with the wiki's description of the room and with nothing else I could check, so treat it as support, not as a pillar. Would settle it: anyone opening `fnaf4-left-hall-grandfather-clock.jpg`, or the game with the brightness turned up.
