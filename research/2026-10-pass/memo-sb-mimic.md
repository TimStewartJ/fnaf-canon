# Memo: slice `sb-mimic` (Security Breach, RUIN, Into the Pit, Secret of the Mimic)

Analyst pass over `src/data/evidence/sb-mimic.json`. The file had 161 records and now has 239: 78 added, 37 corrected in substance, 51 re-dated only, 9 given cross-references only (section 7). Everything below cites record ids. Ids without one of this slice's prefixes are from other files and were taken from the evidence index or the files themselves.

Two findings change the frame for the whole theory and are stated first.

1. **Secret of the Mimic is dated inside the game.** A Fazbear Entertainment work order in the player's van is dated 9/07/79 (`secret-of-the-mimic-work-order-1979`) and his credential form expires in 1979 (`secret-of-the-mimic-credential-form-1979`). The current theory says the game "dates nothing".
2. **Murray's company was Fazbear Entertainment's contractor, and the game says so in words** (`secret-of-the-mimic-dispatch-contractor-murray`, `secret-of-the-mimic-dispatch-contract-legally-ours`). The current theory says "Nothing in any game makes that connection" and rates the chapter low.

A note on weighting. Scott Cawthon said in 2024 that Security Breach's story is "very different" from the one he had in mind: he chose the objects and placements, the studio joined them up (`scott-2024-interview-sb-story-not-as-intended`), and RUIN was made to put it right. He calls RUIN "my design of the game" (`scott-2024-interview-mxes-name-thought-through`). So in this slice: what Security Breach *contains* (a buried pizzeria, a burnt rabbit body, a rabbit mask, therapy recordings) carries more weight than how its endings connect them, and where RUIN and the base game differ, RUIN is the better witness.

A note on labels. Ending names (Redemption, Alley, Getaway, Safe Spot, Clock Out, Framed and so on) are the wiki's or the achievements' names and are used here only as handles; record ids keep them because ids cannot change. "Client 46" is a label taken from the numbers on the therapy CDs (46xx against Vanessa's 71xx). The games name neither the burnt rabbit, nor the mass of parts, nor RUIN's endoskeleton; Scott calls the last "the Mimic" (`scott-2024-interview-mimic-not-the-last`).

## 1. Threads

Ordered by how much of the story each holds up.

### 1.1 The makers: a costume company works for Fazbear, and is swallowed by it (1965 to 7 September 1979)

**Established.**
- Murray's Costume Manor (MCM) is trading by 1965 (`secret-of-the-mimic-mcm-net-earnings-1965-1975`). Edwin Murray inherits it from his father (`secret-of-the-mimic-log-inheritance`); Fiona, a puppeteer, joins and becomes its designer (`secret-of-the-mimic-log-meet-up`).
- It is a **Fazbear Entertainment contractor**. Fazbear's dispatcher: "We had this contractor named Edwin Murray. He was developing some tech for us" (`secret-of-the-mimic-dispatch-contractor-murray`); "As per his contract, everything he's been working on for us is now legally ours" (`secret-of-the-mimic-dispatch-contract-legally-ours`). Fazbear's paperwork calls the contents of the building "Fazbear Ent. assets" (`secret-of-the-mimic-work-order-retrieve-assets`). Edwin's own computer has a folder "ALT FAZBEAR DESIGNS" (`secret-of-the-mimic-edwin-pc-alt-fazbear-designs`).
- What it made for them. Springlocks "for the diner", with a warning to "Hen" about their "odd behaviors" (`secret-of-the-mimic-mail-springlocks-hen`); a poster in the game names **Fredbear's Family Diner** and shows its yellow rabbit (`secret-of-the-mimic-fredbears-diner-poster`). Costumes for a burger restaurant, Chica's Party World, from Fiona's chicken designs (`secret-of-the-mimic-mail-chicas-party-world`, `secret-of-the-mimic-ad-chicas-party-world`). Then "the restaurant project" (`secret-of-the-mimic-mail-we-need-to-go`): a full-size mock-up pizzeria in the R&D floor with a stage, a pirate cove, an office and a hidden back room, holding prototype Freddy, Bonnie, Chica and Foxy and springlock Fredbear and Spring Bonnie suits (`secret-of-the-mimic-rnd-proto-pizzeria`, `secret-of-the-mimic-mockup-pizzeria-layout`). On 9/07/79 the mock-up and its prototypes still stand unfinished in Murray's building; whether a Freddy Fazbear's had opened anywhere by then is not stated.
- The characters' look is Fiona Murray's. "The look of these new animatronics is Fiona's design" (`secret-of-the-mimic-log-creepy`); the family bedtime story is about a bear, a pirate fox, a chicken, a bunny, a gator and a puppy who "started a band" (`secret-of-the-mimic-story-time-animal-band`); a birthday gift she made is played to her son as a pirate (`secret-of-the-mimic-film-green-pirate-gift`).
- The relationship turns. Late in a job ("I'm almost done") "Hen" sends a change order and Edwin objects that it would be easier "to keep using the Springlocks. Just hire some teens to wear the suits like we always do" (`secret-of-the-mimic-log-build-to-spec`): the client is moving away from people in springlock suits. The client then replaces approved designs with "frankly creepy" ones (`secret-of-the-mimic-log-creepy`). Both logs are found inside the mock-up pizzeria, which is the reason to read them as being about it. Edwin: "They treat me like some contractor to crack a whip at... They don't think of me as a friend anymore" (`secret-of-the-mimic-log-friends`), then "They're behind it. Don't trust them" (`secret-of-the-mimic-log-trust-no-one`). By April 1974 the workshop is behind schedule and has had "another accident" (`secret-of-the-mimic-mcm-memo-1974`); a suit puts an operator in hospital (`secret-of-the-mimic-mail-ralph-suit`).
- The takeover. A leak tells "them" about the second machine (`secret-of-the-mimic-log-make-a-copy`). A party signing "WA" and "W.A." already owns the land, wants "software development and the entire MCM catalog", offers Edwin the post of lead engineer (`secret-of-the-mimic-mail-confidential-wa`, `secret-of-the-mimic-mail-wa-far-behind`), and buys an insider with the management of "one of the new franchise locations" in exchange for staff contacts (`secret-of-the-mimic-mail-staff-contacts-wa`). Staff are hired away at double pay with a bounty for bringing colleagues (`secret-of-the-mimic-mail-moving-on-poached`) and leave with Fiona's patterns and what they know of the restaurant project (`secret-of-the-mimic-mail-we-need-to-go`); Edwin calls them traitors (`secret-of-the-mimic-log-announcement-traitors`), turns down work and shuts the firm down (`secret-of-the-mimic-mail-group-chat-turning-down-work`). The last dated order is for pickup on 04/24/1977 (`secret-of-the-mimic-mcm-order-forms-1973-1977`). The house is foreclosed on in summer 1979 (`secret-of-the-mimic-mail-foreclosure`). Fazbear sends recovery technicians, who die (`secret-of-the-mimic-previous-technicians`, `secret-of-the-mimic-mail-technicians-attacked`, `secret-of-the-mimic-f10n4-fazbear-will-send-another`), then Arnold (`secret-of-the-mimic-arnold-assignment`).

**Open.** Who Hen and W.A. are (2.2). Which restaurant "the diner" of the springlocks message is: the message does not name it, and the game has two candidates (2.2). What "it" is in "They're behind it". The contract's exact subject: the released game says only "some tech"; the line calling it a custom endoskeleton for "our new restaurant project" is cut dialogue and is not used here.

**Connects to.** The original restaurant, `fnaf2-call5-fredbears-family-diner`; the two suits "that double as both animatronic and suit", `fnaf3-tape2-dual-suits`, whose hand crank is "provided by the manufacturer", `fnaf3-tape2-crank-from-manufacturer`; Fredbear and Spring Bonnie on stage, `fnaf3-stage01-fredbear-spring-bonnie`; the diner's printed year, `fnaf4-fredbear-and-friends-1983`; the Cassette Man's "prisons of my making" and "old friend", `ffps-insanity-small-souls-prisons`, `ffps-completion-old-friend-hell`; "Mr. Afton", `sl-intro-mr-afton-board`; Scott's 2016 page source listing a client "ChcasPrtyWrld", `scottgames-site-sl-source-client-directory`; Fazbear's later reuse of "vintage control-boards", `hw-handunit-vintage-control-boards`.

### 1.2 The two machines: grief turned into a product (Murray family; the origin of the copying endoskeleton)

**Established.**
- Fiona dies helping a Fall Fest installation (`secret-of-the-mimic-log-installation-worries`, `secret-of-the-mimic-log-death`, `secret-of-the-mimic-film-mommy-gone`). Edwin, who already skipped his son's birthdays for work (`secret-of-the-mimic-film-david-two`), gives David an endoskeleton babysitter, **M1**, that "can fit into any costume" (`secret-of-the-mimic-log-training-m1`). M1 takes on Fiona: her voice on frequency 4625 (`secret-of-the-mimic-log-frequency-4625`), her voice heard through the vents (`secret-of-the-mimic-mail-heard-fiona`), her place at a birthday (`secret-of-the-mimic-film-m1-birthday-cake`), her advice to keep it secret (`secret-of-the-mimic-log-m1-as-fiona`). Staff see Edwin "talking to that thing" (`secret-of-the-mimic-mail-group-chat-turning-down-work`).
- David dies in the first week of a December. The surprise party was set for a Saturday and cancelled on "Dec 6th - 4:00 pm" "due to the recent tragic events" (`secret-of-the-mimic-mail-david-party`, `secret-of-the-mimic-mail-party-canceled`). The last birthday film ends with Edwin saying "I left him out at the playground" (`secret-of-the-mimic-film-yellow-playground`), the playground he had put beside the loading docks against his lawyer's advice (`secret-of-the-mimic-log-playground`). The game never states the cause.
- **M2** is M1's idea: "You need to try again. Build another" (`secret-of-the-mimic-log-try-again-build-another`), "Make another and we can all be together"; Edwin: "It wouldn't be him... I let a machine raise my kid" (`secret-of-the-mimic-log-refusal`). M2 "began as a copy of my program" (`secret-of-the-mimic-mail-received-5-min-ago`); every later copy failed (`secret-of-the-mimic-log-make-a-copy`).
- **How it learned violence: from Edwin.** "Stop sounding like him!" (`secret-of-the-mimic-log-incident`); "I... lost my temper. I was always going to fix you" (`secret-of-the-mimic-log-turn-around-lost-temper`); M2 "has been damaged... It mimics rage" (`secret-of-the-mimic-mail-received-5-min-ago`). The smoother version, that it "was exposed to some sort of violence" and copied it, is spoken by M1 while impersonating the dispatcher (`secret-of-the-mimic-dispatch-briefing-origin`). When Edwin lies injured it answers with his own brush-offs (`secret-of-the-mimic-log-turn-around`).
- M1's remedy is a computer, the **Cradle**, that "can keep David safe and provide boundaries" (`secret-of-the-mimic-mail-hurt-cradle`, `secret-of-the-mimic-mail-sad`). M1 now lives in a cabinet labelled F10-N4 and wants M2 repaired (`secret-of-the-mimic-f10n4-reveal`, `secret-of-the-mimic-f10n4-miss-my-child`).
- The product. Murray's goods already change size, repeat what they hear, and watch and learn (`secret-of-the-mimic-ad-clean-o-vac-adjusts-size`, `secret-of-the-mimic-mail-mushmen-return`, `secret-of-the-mimic-stay-up-latte`). The endoskeleton combines them: it "can adapt to any costume or character, large or small, with the ability to take on the persona of the character it occupies" (`secret-of-the-mimic-dispatch-endoskeleton-any-costume`). Fazbear wants its schematic (`secret-of-the-mimic-dispatch-retrieve-schematic`, `secret-of-the-mimic-work-order-1979`), filed as "M.I.M.I.C." (`secret-of-the-mimic-mimic-blueprint-acronym`, `secret-of-the-mimic-experimental-storage-2-mimic-blueprints`).
- The night of 9/07/79. Arnold is steered by M1 in the dispatcher's voice; the real dispatcher says the company could not reach him "all night" (`secret-of-the-mimic-clock-out-real-dispatch`). The endoskeleton has put the earlier technicians' bodies into costumes (`secret-of-the-mimic-previous-technicians`); a suit hides Arnold from it (`secret-of-the-mimic-f10n4-suit-cannot-see`). Three endings: he hands over the key and wakes inside the Fredbear springlock suit on the mock stage (`secret-of-the-mimic-ending-clock-out`); he runs Cradle.EXE, the complex burns, and the endoskeleton walks away with the key (`secret-of-the-mimic-ending-unfinished-business`); or he pacifies it as "David" and it goes to sleep with the White Tiger doll (`secret-of-the-mimic-ending-story-time`, `secret-of-the-mimic-white-tiger-first-birthday`).

**Open.** How David died. What became of Edwin. Which ending stands (8). The years of the two deaths (2.1).

**Connects to.** RUIN's endoskeleton (1.3). Help Wanted 2's keypad 1979 and White Tiger doll, `hw2-mimic-teaser-1979-white-tiger`, and its van with the keypad 4625, `hw2-mimic-teaser-mxes-ending`. Fall Fest's printed years, `hw2-fall-fest-1970-poster`, `codb-fallfest-83-banner`. The same product in the Pizzaplex: "slap your casing on a new Endo" (`security-breach-vanessa-new-endo`), "Am I Monty with a different shell?" (`security-breach-freddy-where-i-was-born`), `hw2-endo-warehouse`, `sd-cpu-whole-new-personality`. Machines that put people into suits: `fnaf1-call1-stuffed-into-suit`, `fnaf2-call1-endoskeleton-glitch`, `into-the-pit-phone-guy-night3-stuffing`.

### 1.3 The sealed endoskeleton and M.X.E.S. (RUIN)

**Established.**
- Cassie comes for her best friend because a message in his voice says he is trapped (`ruin-cassie-seeks-gregory`, `ruin-fake-gregory-sinkhole`). The voice has her switch off every security node (`ruin-fake-gregory-turn-off-security`, `ruin-fake-gregory-one-node-left-sealed`, `ruin-roxy-final-node`). Some of its lines are Gregory's own lines from Security Breach (`ruin-mimic-reuses-gregory-lines`).
- A rabbit-shaped figure in the mask world works against her (`ruin-the-entity`); the voice claims to have jammed it (`ruin-fake-gregory-signal-jammer`). At the bottom is a cabinet with an "M.X.E.S." nameplate; the figure comes out of it and is pulled back (`ruin-mxes-hub`). The door beyond has been covered with poured concrete (`ruin-concrete-poured-over-door`). Behind it is an endoskeleton that was using Gregory's voice (`ruin-mimic-reveal`), in a room of old mascot costumes (`ruin-mimic-lair-mcm-mascot-suits`).
- The real Gregory: he is not at the Pizzaplex (`ruin-real-gregory-not-at-pizzaplex`); "it's been trapped down here for a really long time. The M.X.E.S. security program was designed to keep it hidden" (`ruin-gregory-mxes-explanation`); a friend has the building's maps (`ruin-gregory-friend-maps`).
- Endings: the elevator drops with Cassie in it after "we can't risk being followed" (`ruin-ending-standard`); a Scooper takes the endoskeleton apart while it wears a costume (`ruin-ending-scooper`); or Cassie, masked, sees Gregory, Vanessa and the mask's assistant Helpi with ice creams on a hill, hears "I found a spot to hide", and the screen fades (`ruin-ending-safe-spot`).
- A Candy Cadet in the buried pizzeria tells of a mother who kept a monster locked in the basement, and the monster learned her lullaby and sang it until the boy opened the door (`ruin-candy-cadet-story`).
- **M.X.E.S. is Murray's.** A terminal in Edwin's house is headed "Mechanical X-form Experimental Storage #1" and runs CRADLE.EXE (`secret-of-the-mimic-mxes-acronym-on-screen`). M1's cabinet is the same design as RUIN's cabinet, with a different nameplate (`secret-of-the-mimic-mxes-machine`). 4625 is both Edwin's radio frequency and the keypad code on that cabinet in Help Wanted 2's van (`secret-of-the-mimic-log-frequency-4625`, `hw2-mimic-teaser-mxes-ending`). Scott says M.X.E.S. is "a character" whose name he chose himself (`scott-2024-interview-mxes-name-thought-through`).

**Open.** Who walled it in, and when. How it and the cabinet got there (2.5). Whether the real Gregory drops the elevator. Which RUIN ending stands.

**Connects to.** 1.2 throughout. The same plot shape in 1979: a trusted radio voice is a machine, and the real person breaks in at the end (`secret-of-the-mimic-clock-out-real-dispatch`). Scott on the character, `scott-2024-interview-mimic-not-the-last`.

### 1.4 Beneath the Pizzaplex: the buried pizzeria, the burnt rabbit, the mass of parts

**Established.**
- The raceway "was closed very abruptly prior to the new construction" (`security-breach-freddy-raceway-closed-abruptly`); new track cracks over a sinkhole (`security-breach-msg-sinkhole`, `security-breach-gregory-sinkhole-line`); a high-voltage cable runs into the foundation and "something under us" pulls power (`security-breach-msg-power-drain`); the crew breaks into "an old elevator shaft" and asks "Someone must have known about this, right?" (`security-breach-msg-old-elevator`).
- Below is a pizzeria signed "Freddy Fazbear's Pizza Place" (`security-breach-underground-pizza-place`) over rooms full of burners, "like the inside of an oven" (`ruin-burners-inside-of-an-oven`).
- In a recharge station there is a burnt rabbit on an endoskeleton (`security-breach-burntrap-appearance`). It takes remote control of Freddy (`security-breach-freddy-i-am-not-me`, `security-breach-freddy-take-control`). The game never names it (`security-breach-burntrap-name-not-in-game`, `security-breach-gregory-what-is-that-thing`).
- A mass of old animatronic parts with a Funtime Freddy-style face lives there and drags the rabbit away in one ending (`security-breach-tangle-composition`, `security-breach-ending-burn-it-all-down`). In RUIN the voice blames the collapse on something that "tunneled down" (`ruin-something-tunneled`).
- Freddy has been there: "She brought me here. I found myself for the first time when I cleared the path" (`security-breach-freddy-been-here-before`).
- Scott: the burnt rabbit "was never supposed to move"; it was to be glimpsed like "some kind of decaying movie prop", with "a very specific purpose" he would not state (`scott-2024-interview-burntrap-never-meant-to-move`). The name is a planning nickname (`scott-2024-interview-placeholder-names-canon`).

**Open.** Whose body the rabbit is, and what moves it (2.3). Who "she" is. Who installed the cable and the recharge station.

**Connects to.** Pizzeria Simulator: the name on its completion slide, `ffps-completion-slide-pizza-place-condemned`; the trap built as a "labyrinth" and burned, `ffps-completion-labyrinth`, `ffps-completion-fire`; Molten Freddy, `ffps-molten-freddy-alley-wires-eyes`, `ffps-molten-freddy-lines`; the burnt rabbit credited as William Afton, `ffps-credits-william-afton`. Help Wanted 2: a rabbit arm out of a recharge station, `hw2-faz-force-ending`; the derelict hub with a pit, `hw2-real-hub-pit-pizzeria`.

### 1.5 Vanessa, the rabbit costume and the mask

**Established.**
- Vanessa's therapy recordings, in order (CDs 1, 3, 5, 7, 9, 10, 11, 12): long encrypted conversations with someone who is not her colleague Luis (`security-breach-cd-vanessa-encrypted-conversation`); a father named Bill who made her lie in a custody case (`security-breach-cd-vanessa-father-bill`); "manipulative" messages from someone who has hacked her personal files, and her answer "Sometimes I need to listen" (`security-breach-cd-vanessa-manipulative-messages`); buying a costume and fake fur for a "He" who "would always be watching" (`security-breach-cd-vanessa-costume-fur`); then a transfer: "I'm needed somewhere else now" (`security-breach-cd-vanessa-transfer`).
- At the Pizzaplex she is hired as security chief without experience because "the recommendation came from the top" (`security-breach-msg-marked-for-deletion`, `security-breach-msg-no-questions-asked`). Odd reports carry her name: a theft with nothing on the cameras (`security-breach-msg-stolen-property`), an emergency call from inside when "I was the only one here" (`security-breach-msg-false-alarm`).
- A woman in a rabbit costume hunts Gregory (`security-breach-vanny-lines`, `security-breach-gregory-finds-vanny-hideout`). Freddy cannot see her (`security-breach-freddy-cannot-see-rabbit-lady`, `security-breach-freddy-no-rabbit-not-anymore`) until he has Roxy's eyes (`security-breach-ending-rooftop`). Freddy hears "Vanessa" and "Bunny" in the name (`security-breach-freddy-vanny-vanessa-bunny`).
- Endings: unmasked, she is a blonde woman (`security-breach-rooftop-unmasked`), yet Vanessa is then shown alive on the roof (`security-breach-rooftop-vanessa-alive`). After Princess Quest 3 is beaten, the mask and bow tie lie on the floor and Vanessa waits at the door (`security-breach-ending-redemption`).
- Princess Quest: a cabinet with no record (`security-breach-msg-out-of-order`), staff obsessed with it (`security-breach-msg-arcade-conspiracy`, `security-breach-msg-red-flag`), ported from "that old mobile game" (`security-breach-msg-pq1-maint-log`). Its second part has an Old Man who arms the Princess and a door into an office like the first game's (`security-breach-pq2-old-man-fnaf1-office`); its third is set in Help Wanted's hub and ends at the sealed door of that game's Trapped ending (`security-breach-pq3-help-wanted-hub-trapped-door`).
- The mask is equipment. RUIN's rabbit-eared mask opens "V.A.N.N.I." (`ruin-mask-bot-helpi-vanni`), was "left behind by some Faz-Technician" (`ruin-security-mask-left-by-faz-technician`), and Cassie recognises it in Gregory's drawing of a white rabbit mask (`ruin-item-gregory-seen-this-mask-before`).

**Open.** The roof (2.4). Who "He" is. Who "the top" is.

**Connects to.** Special Delivery's "Ness" and Luis, `sd-ness-interested-in-it`, `sd-ness-voices-at-screen`, `sd-ness-compliance-searches`, `sd-ness-rubber-masks`; the hidden call "I made it myself", `codb-mask-plush-voice`, and the mask it needs, `codb-corn-maze-rabbit-mask`; how to end it, `hw-tape-16`; the door, `hw-trapped-ending`; Help Wanted 2's continuation, `hw2-pq4-vanny-mask-trade`, `hw2-pq4-vanny-crushes-glitchtrap`, `hw2-faz-force-ending`; Scott's teasers, `scottgames-site-sb-protect`, `scottgames-site-sb-obey`, `scottgames-site-sb-source-stay-the-course`; `scott-2024-interview-vanny-underused`.

### 1.6 Gregory, client 46, and Cassie

**Established.**
- Gregory has no guest profile and no record (`security-breach-intro-not-in-database`, `security-breach-vanessa-no-record`); one ending leaves him asleep in a box (`security-breach-ending-alley`). He will not leave because "there will be more disappearances" (`security-breach-gregory-more-disappearances`).
- The second therapy client never speaks and is never named. In order (CDs 2, 4, 6, 8, 13, 14, 15, 16): treated as a child and called a computer "phenom... like a hacker" (`security-breach-cd46-treated-as-child-phenom`); has written programs that "talk to you and repeat phrases" (`security-breach-cd46-talking-programs`); caught on Pizzaplex cameras, suspected of hacking it (`security-breach-cd46-hacking-pizzaplex`); photographed with something rabbit-eared (`security-breach-cd46-rabbit-ears`); told "you're the one doing the manipulating" (`security-breach-cd46-doing-the-manipulating`); named as the source of the system-wide glitch in the robots, and of a false story about tragic parents (`security-breach-cd46-glitch-subroutines`). The two clients share therapists, who are replaced one after another; of the first three, two are missing and one was found dead, "mangled by machinery" (`security-breach-cd-therapists-shared-and-replaced`, `security-breach-cd46-therapists-missing-dead`).
- By RUIN, Gregory is on missing posters (`ruin-missing-gregory-poster`), is alive elsewhere (`ruin-real-gregory-not-at-pizzaplex`), draws comics (`ruin-gregory-comics-depict-endings`), and knows what M.X.E.S. is for (`ruin-gregory-mxes-explanation`).
- Cassie's father owned a Fazbear technician's wrench (`ruin-cassie-dad-faz-wrench`) and would not tell her why Bonnie was replaced (`ruin-item-bonnie-replaced-dad-wouldnt-say`). Roxy remembers her birthday (`ruin-roxy-birthday-11th`).

**Open.** Whether client 46 is Gregory (2.6). Who Cassie's father is and where he is.

**Connects to.** `hw2-achievement-ggy`, `hw2-glam-freddy-fazbear-technician`, `hw2-faz-force-ending`.

### 1.7 The Pizzaplex as an institution: vanished staff, S.T.A.F.F., Bonnie and Monty, Freddy the exception

**Established.** Night staff are replaced by S.T.A.F.F. bots (`security-breach-msg-pink-slip`). Human staff are summoned to a late all-staff meeting and a staff party (`security-breach-msg-all-staff-meeting`, `security-breach-msg-staff-party-question`), and colleagues stop being seen (`security-breach-msg-job-security`, `security-breach-msg-bbw-maint-log`, `security-breach-msg-night-shift`). Outside, "residents continue to disappear" (`security-breach-alley-newspaper`), and a customer asks "Why did you reopen? Everyone remembers what happened to those kids" (`security-breach-msg-it-is-happening-again`). Bonnie was last logged entering Monty Golf (`security-breach-msg-missing-bonnie`), Monty took his place (`security-breach-msg-understudy`) and haunts those catwalks (`security-breach-msg-monty-mischief`, `security-breach-msg-behind-the-maze`, `security-breach-msg-ac-inspection`); RUIN shows Bonnie's wreck hidden at Bonnie Bowl (`ruin-glamrock-bonnie-remains-hidden-room`). Freddy is the exception among the band: his system crashed (`security-breach-vanessa-freddy-system-crash`), he cannot reach the main network (`security-breach-freddy-cannot-connect-main-network`), and he says the bad things were "older models" (`security-breach-freddy-older-models-flawed`).

**Open.** What happened at the meeting. Who wrecked Bonnie. Which "kids", and what "reopen" refers to.

### 1.8 Into the Pit: a ghost story set in the world

**Established.** A boy hides in the ball pit of Jeff's Pizza and comes out in an older Freddy Fazbear's Pizza (`into-the-pit-jeffs-pizza-ball-pit`), the same building a generation earlier (`into-the-pit-jeffs-same-building`, `into-the-pit-new-mill-fathers`, `into-the-pit-family-remembers-ball-pit`). A logo graphic in the game gives 1985 (`into-the-pit-past-year-1985`). A yellow rabbit creature lures him to a room of dead children (`into-the-pit-prologue-mci`), takes his father's place (`into-the-pit-rabbit-replaces-dad`), and says "I always come back" (`into-the-pit-yellow-rabbit-always-come-back`) and "I will make you suffer, just like I did" (`into-the-pit-yellow-rabbit-suffer-like-i-did`). A technician's sketchbook records a smell from inside Chica and an order to delay looking (`into-the-pit-sketchbook-chica-smell`), a colleague who "knows something" and goes missing (`into-the-pit-sketchbook-tech-2-missing`), and old guitar strings dumped at the mill ahead of a lawsuit (`into-the-pit-sketchbook-strings-dumped-at-mill`). Over five nights the boy frees five children (`into-the-pit-night1-child-endoskeleton` to `into-the-pit-night5-dad-parts-and-service`). Hidden minigames tell other stories (`into-the-pit-secret-minigames-other-stories`, `into-the-pit-collect-the-hats-purple-guy`).

**Open.** Its status (2.7).

**Connects to.** `fnaf1-news-kids-vanish`, `fnaf1-news-five-children`, `fnaf1-news-sanitation`, `fnaf1-call1-stuffed-into-suit`, `ffps-scraptrap-always-come-back`, `ucn-afton-always-come-back`, `scott-2024-interview-into-the-pit-began-as-novelty`, `scott-2018-frights-some-connected-to-games`, `scott-2020-novels-fill-blanks`.

## 2. Contested questions

### 2.1 When is Secret of the Mimic set?

**Readings.** (a) The present night is 7 September 1979. (b) It is 9 July 1979, reading the date day-first. (c) The game is undated and 1979 is only a teaser (the current theory).

**For (a).** The work order prints "DATE: 9/07/79" twice (`secret-of-the-mimic-work-order-1979`); the credential form has "EXPIRATION YEAR: 1979" (`secret-of-the-mimic-credential-form-1979`). Murray's own paperwork writes month first: 04/23/1974 (`secret-of-the-mimic-mcm-memo-1974`), 12/15/75 (`secret-of-the-mimic-mcm-order-forms-1973-1977`). The house mailbox is headed "Aug 3rd" and says the last mail came "five weeks ago" (`secret-of-the-mimic-mail-foreclosure`); 3 August to 7 September is exactly 35 days. The teaser and Help Wanted 2's keypad agree on the year (`secret-of-the-mimic-teaser-1979`, `hw2-mimic-teaser-1979-white-tiger`).

**Against.** Nothing found. Caveat: the documents were read from wiki images of in-game props, not from play.

**Position.** 7 September 1979, a Friday. Year: **high**. Day: **medium-high** (it rests on month-first order, which the five-week match supports). The current theory's "the game itself dates nothing" is contradicted.

**The backstory can now be ordered, and partly dated.** Printed anchors: trading 1965 to 1975 with a peak in 1973 and a fall after (`secret-of-the-mimic-mcm-net-earnings-1965-1975`); behind schedule with "another accident" by 23 April 1974 (`secret-of-the-mimic-mcm-memo-1974`); an R&D floor opened in a July of the 1970s (`secret-of-the-mimic-mcm-rnd-floor-opening-memo`); still taking costume orders on 24 January 1977 (`secret-of-the-mimic-mcm-order-forms-1973-1977`); foreclosure in summer 1979. Sequence from the records:

1. Diner springlocks, Chica's Party World, the family films with Fiona. The springlocks message is written *to Fiona* (`secret-of-the-mimic-mail-springlocks-hen`), so the diner's springlock suits predate her death.
2. Fiona dies at a Fall Fest installation. No year is given. Help Wanted 2 has a Fall Fest poster dated 1970 (`hw2-fall-fest-1970-poster`), which shows the fair existed then and no more. The "FALLFEST 83'" of Help Wanted's Halloween hub (`codb-fallfest-83-banner`) cannot be the one she died at: she is dead well before 1979.
3. M1 raises David (`secret-of-the-mimic-f10n4-miss-my-child`: "I watched him grow up").
4. David dies between 1 and 6 December. A party "on Saturday" announced at 8:00 am on 1 December and cancelled at 4:00 pm on 6 December fits a Monday announcement and a Saturday cancellation, which between 1965 and 1979 happens only in 1969 and 1975 (`secret-of-the-mimic-mail-party-canceled`). 1975 fits the other documents. **December 1975, low to medium**: an inference from weekday arithmetic, never printed.
5. M2, the leak, W.A.'s letters, the staff walk-out, the shutdown: after David, and the shutdown after January 1977.
6. Edwin's injury, the Cradle, the foreclosure, the dead technicians, 7 September 1979.

Consequence for the wider theory: **springlock suits were being built for "the diner" in the first half of the 1970s at the latest**, about a decade before the 1983 on FNaF4's television (`fnaf4-fredbear-and-friends-1983`). In September 1979 the prototypes of Freddy, Bonnie, Chica and Foxy are still standing unfinished in the contractor's building (`secret-of-the-mimic-rnd-proto-pizzeria`). Whether a Freddy Fazbear's had opened elsewhere by then is not stated; W.A.'s "new franchise locations" shows that restaurants of some kind were opening before that night.

### 2.2 Are "Hen" and "W.A." the Cassette Man and William Afton?

Four separate links, of different strength.

**(i) Murray worked under contract for Fazbear Entertainment: high.** Stated by Fazbear's dispatcher and paperwork (`secret-of-the-mimic-dispatch-contractor-murray`, `secret-of-the-mimic-dispatch-contract-legally-ours`, `secret-of-the-mimic-work-order-retrieve-assets`). That the unnamed "they" of Edwin's logs are the same client is **medium-high**: he uses the dispatcher's word of himself, "some contractor to crack a whip at" (`secret-of-the-mimic-log-friends`), his computer files the alternative designs under "FAZBEAR" (`secret-of-the-mimic-edwin-pc-alt-fazbear-designs`), and the mock-up on his R&D floor is a Freddy's (`secret-of-the-mimic-mockup-pizzeria-layout`).

**(ii) W.A. writes for that company: medium-high.** W.A. "technically" owns Murray's land and claims "software development and the entire MCM catalog" (`secret-of-the-mimic-mail-confidential-wa`, `secret-of-the-mimic-mail-wa-far-behind`); Dispatch claims everything Murray worked on under "his contract". W.A. has "new franchise locations" to hand out (`secret-of-the-mimic-mail-staff-contacts-wa`). Two parties making the same claims on the same man are most simply one party. Not stated: the word "Fazbear" appears in no message or log.

**(iii) W.A. is William Afton: medium.** For: the initials; the role, a principal of the restaurant company who takes over a supplier's staff, software and designs; later games have a designer "Mr. Afton" answering to a board (`sl-intro-mr-afton-board`) and name the burnt rabbit William Afton (`ffps-credits-william-afton`). Against: two initials, and Secret of the Mimic never writes the name out.

**(iv) Hen is the Cassette Man: low to medium.** Hen appears twice: the person to be warned about the diner springlocks' "odd behaviors" (`secret-of-the-mimic-mail-springlocks-hen`), and the sender of a change order whose log lies in the mock-up pizzeria (`secret-of-the-mimic-log-build-to-spec`). So Hen is the restaurant's own man, he specifies the animatronics, and he is moving from worn suits to machines. The Cassette Man calls the haunted machines "prisons of my making" (`ffps-insanity-small-souls-prisons`). That fits a man who *specified* them and a contractor who built them: FNaF3's tape already says the suit crank is "provided by the manufacturer" (`fnaf3-tape2-crank-from-manufacturer`). "They don't think of me as a friend anymore" (`secret-of-the-mimic-log-friends`) makes the clients former friends. Against: no game gives the Cassette Man a name; the reported tape label "HRY223" is unverified (`ffps-hry223-label`); "Hen" could be anyone.

**"The diner" is Fredbear's Family Diner: medium-high.** The game prints the name on a poster with a yellow rabbit (`secret-of-the-mimic-fredbears-diner-poster`), FNaF2 names the same place as the original restaurant (`fnaf2-call5-fredbears-family-diner`), and the mock-up holds springlock Fredbear and Spring Bonnie suits (`secret-of-the-mimic-rnd-proto-pizzeria`). The alternative is Chica's Party World, a burger restaurant and also a Murray client (`secret-of-the-mimic-ad-chicas-party-world`).

**Current theory.** Its "partners" chapter is rated low and says "Nothing in any game makes that connection". The names remain inference, as it says. But the chapter misses the stated fact underneath them: the costume workshop was Fazbear's contractor and was taken over. Suggested rating: the business relationship **high**, the two identifications **medium** and **low to medium**. Its counter-evidence list includes `secret-of-the-mimic-teaser-1979`, which is no longer counter-evidence to anything.

### 2.3 Is the burnt rabbit under the Pizzaplex Afton's body, or the copying endoskeleton in a costume?

**Reading A: it is the body of Pizzeria Simulator's burnt rabbit.** For: the building is signed "Freddy Fazbear's Pizza Place" (`security-breach-underground-pizza-place`), the name on Pizzeria Simulator's condemned building (`ffps-completion-slide-pizza-place-condemned`); below it are rooms of burners (`ruin-burners-inside-of-an-oven`), and that game ends with a labyrinth set alight (`ffps-completion-labyrinth`, `ffps-completion-fire`); beside the rabbit lives a mass of parts with a Funtime Freddy-style face (`security-breach-tangle-composition`), which is how Molten Freddy looks (`ffps-molten-freddy-alley-wires-eyes`). Two of that fire's occupants seem to be here. Against: the figure is mostly bare endoskeleton below the head (`security-breach-burntrap-appearance`); whether anything organic remains was not verifiable; no word in the game says whose it was (`security-breach-burntrap-name-not-in-game`).

**Reading B: it is Murray's endoskeleton in a rabbit costume.** For: that endoskeleton wears costumes and takes "the persona of the character it occupies" (`secret-of-the-mimic-dispatch-endoskeleton-any-costume`, `ruin-ending-scooper`), and it is under the same building (`ruin-mimic-reveal`). Against: in RUIN it is behind poured concrete on a lower level (`ruin-concrete-poured-over-door`), "trapped down here for a really long time" (`ruin-gregory-mxes-explanation`), held by nodes spread through the building (`ruin-fake-gregory-one-node-left-sealed`). The burnt rabbit is loose in a recharge station on the pizzeria level on the night of Security Breach and can be carried off by the mass (`security-breach-ending-burn-it-all-down`). One machine cannot be both unless it was sealed in between the two games, and then "a really long time" is wrong. The eyes differ too (purple against the orange coils of `secret-of-the-mimic-mimic-ruin-appearance-link`).

**Reading C: a relic driven from outside.** For: what it does is take control of other machines (`security-breach-freddy-take-control`, `security-breach-freddy-i-am-not-me`), which matches the system-wide glitch in the robots that technicians traced to a therapy client's activity (`security-breach-cd46-glitch-subroutines`) and Help Wanted's code that "seemed to take hold by itself" (`hw-tape-05`). The Princess Quest ending frees Vanessa without touching the body at all (`security-breach-ending-redemption`, `security-breach-pq3-help-wanted-hub-trapped-door`). Help Wanted 2 shows a rabbit-costumed arm coming out of a recharge station (`hw2-faz-force-ending`). Scott's intent was a thing that never moved, "some kind of decaying movie prop" with a purpose (`scott-2024-interview-burntrap-never-meant-to-move`), and his account of the digital rabbit is "possession of AI or possession of machines or circuitry" (`scott-2024-interview-glitchtrap-possession-of-ai`).

**Position.** The games do not decide whose body it is. They do support three narrower statements: it is **not the sealed endoskeleton** (medium); it sits in the **Pizzeria Simulator site among that fire's remains** (medium); and what acts through it on the night is **control over the network, not a walking corpse** (medium-low; partly from Scott's statement of intent). Reading A for the body with C for the agency is the best fit: **low to medium**. The current theory's "Two identities fit, and the games settle neither" stands, but it gives the endoskeleton reading more weight than the sealing allows, and it leaves out both the third reading and Scott's own statement that the base game's use of the figure is not his.

### 2.4 Is the rabbit-costumed woman Vanessa, and why are both seen on the roof?

**For one woman.** After Princess Quest 3 is beaten the mask and bow tie are on the floor and Vanessa is at the door (`security-breach-ending-redemption`). Her therapist finds her buying a costume and fur for someone always watching (`security-breach-cd-vanessa-costume-fur`), after manipulative messages from someone inside her files (`security-breach-cd-vanessa-manipulative-messages`) and long encrypted conversations (`security-breach-cd-vanessa-encrypted-conversation`). She was placed in the job from "the top" (`security-breach-msg-marked-for-deletion`). Two reports in her name record night-time events with nobody else in the building: an emergency call from inside, after which she sent the police away (`security-breach-msg-false-alarm`), and a theft with nothing on the cameras (`security-breach-msg-stolen-property`). The unmasked woman is blonde, as Vanessa is (`security-breach-rooftop-unmasked`). Freddy spells the name out (`security-breach-freddy-vanny-vanessa-bunny`). Scott's teasers show a blonde guard captioned "PROTECT" and a rabbit captioned "OBEY" (`scottgames-site-sb-protect`, `scottgames-site-sb-obey`). The earlier trail matches: Ness and Luis (`sd-ness-interested-in-it`, `sd-ness-voices-at-screen`, `sd-ness-compliance-searches`), and the hidden call "I made it myself" (`codb-mask-plush-voice`).

**Against.** One post-credits page shows Vanessa in uniform on the roof, looking down, after the costumed woman has fallen (`security-breach-rooftop-vanessa-alive`).

**Position.** The rabbit-costumed woman is Vanessa, acting under the control of whatever writes to her: **medium-high**. Ness is Vanessa: **medium-high**. The roof page is **unexplained**; it is one frame of an ending that Scott's later design does not follow (2.8), in a game whose story he says is not the one he planned (`scott-2024-interview-sb-story-not-as-intended`). It should be reported as an anomaly and nothing should be built on it.

**The "more than one wearer" hypothesis** in the current theory is half right. The records do not show two women in the costume. They show a **mask that is company equipment and passes from hand to hand**: Vanessa's rabbit mask; the mask Help Wanted 2's player wears and trades away (`hw2-pq4-vanny-mask-trade`), that player being "a Fazbear technician" (`hw2-glam-freddy-fazbear-technician`); a S.T.A.F.F. bot holding a rabbit mask out to a girl (`hw2-faz-force-ending`); RUIN's mask "left behind by some Faz-Technician" (`ruin-security-mask-left-by-faz-technician`), which connects its wearer to "V.A.N.N.I." (`ruin-mask-bot-helpi-vanni`) and which Cassie recognises in Gregory's drawing of a white rabbit mask (`ruin-item-gregory-seen-this-mask-before`). Succession of wearers: **medium**. Simultaneous wearers: **not supported**.

A rule recurs with it: **machines do not see a person inside a mask or suit.** Freddy cannot see the rabbit woman (`security-breach-freddy-cannot-see-rabbit-lady`); the 1979 endoskeleton cannot see Arnold in a suit (`secret-of-the-mimic-f10n4-suit-cannot-see`); RUIN's mask hides Cassie (`ruin-mask-bot-helpi-vanni`).

### 2.5 Is the thing imitating Gregory the machine Edwin Murray built, and how did it get under the Pizzaplex?

**For identity.** The body (`secret-of-the-mimic-mimic-ruin-appearance-link`). The behaviour: it reuses a child's recorded lines (`ruin-mimic-reuses-gregory-lines`) as M2 reused Edwin's (`secret-of-the-mimic-log-turn-around`). Its room holds Murray's mascot costumes (`ruin-mimic-lair-mcm-mascot-suits`). Its jailer is Murray's machine: the cabinet (`secret-of-the-mimic-mxes-machine`), the name on screen over the Cradle program (`secret-of-the-mimic-mxes-acronym-on-screen`), the Cradle's purpose "keep David safe and provide boundaries" (`secret-of-the-mimic-mail-hurt-cradle`) against "designed to keep it hidden" (`ruin-gregory-mxes-explanation`), and the code 4625 (`secret-of-the-mimic-log-frequency-4625`, `hw2-mimic-teaser-mxes-ending`). RUIN's Candy Cadet tells the story from the inside: a mother, a monster locked below, a learned lullaby (`ruin-candy-cadet-story`). Scott calls RUIN's creature "the Mimic" (`scott-2024-interview-mimic-not-the-last`).

**Against.** Fazbear wanted the schematic because the design "has a lot of potential" (`secret-of-the-mimic-dispatch-retrieve-schematic`), so more than one could exist, although Edwin says "Every copy has failed" (`secret-of-the-mimic-log-make-a-copy`). No game states the history between 1979 and the Pizzaplex.

**Position.** A Murray endoskeleton guarded by Murray's own containment machine: **high**. The same individual as M2: **medium-high**. The current theory's "by design and name, not by stated history" is still true of the history, but it understates the link: its "M.X.E.S. subterminal of similar design" is now the same cabinet, the acronym printed on screen, the same code, and the costumes.

**How it got there: not shown.** What the records allow: Fazbear held title to it (`secret-of-the-mimic-dispatch-contract-legally-ours`); in one 1979 ending it is in a Fazbear van and in another it walks off (`secret-of-the-mimic-ending-clock-out`, `secret-of-the-mimic-ending-unfinished-business`); Help Wanted 2 shows the cabinet in a white van beside Murray's shopfront (`hw2-mimic-teaser-mxes-ending`); under the Pizzaplex someone walled it in and wired a guard system through the building. One further possibility is worth a flag and no more. Murray's site had tunnels, power surges, a dead elevator and "something below us" (`secret-of-the-mimic-log-power-surges-tunnels`, `secret-of-the-mimic-mail-old-elevator-below`, `secret-of-the-mimic-mail-something-below`), and W.A.'s side owned that land; the Pizzaplex crew finds an old elevator shaft and a power drain (`security-breach-msg-old-elevator`, `security-breach-msg-power-drain`). The same ground is possible: **low**, stated nowhere.

### 2.6 Who or what is Gregory?

**A human boy: high.** He is a missing child on posters (`ruin-missing-gregory-poster`), has a best friend (`ruin-cassie-seeks-gregory`), draws (`ruin-gregory-comics-depict-endings`), and is physically elsewhere (`ruin-real-gregory-not-at-pizzaplex`). The idea that he is a machine comes from outside the games.

**The same person as therapy client 46: medium-low.** For: the client is handled as a child (`security-breach-cd46-treated-as-child-phenom`), is a gifted hacker caught on Pizzaplex cameras (`security-breach-cd46-hacking-pizzaplex`), and was photographed with something rabbit-eared (`security-breach-cd46-rabbit-ears`); Gregory is a child with no guest profile (`security-breach-intro-not-in-database`, `security-breach-vanessa-no-record`), and the impostor in RUIN expects his best friend to believe that he reprogrammed her mask's assistant (`ruin-fake-gregory-signal-jammer`). Help Wanted 2 has an achievement titled "GGY" for beating every high score (`hw2-achievement-ggy`); the letters read like a tag for Gregory, but no game explains them, so it is noted and not used. Against: the client is never named; a counsellor holds a file on the client, while the Pizzaplex has no record of Gregory; the client's story of tragic parents is called false (`security-breach-cd46-glitch-subroutines`), while one ending leaves Gregory asleep in a box (`security-breach-ending-alley`).

**If they are the same,** the recordings say more than the theory uses: the client wrote programs that "talk to you and repeat phrases" (`security-breach-cd46-talking-programs`), is judged to be "the one doing the manipulating" (`security-breach-cd46-doing-the-manipulating`), and is the traced source of the glitch in the robots. That would make Gregory the first person at the Pizzaplex whom the thing in the network used, and the night of Security Breach his attempt to undo it ("there will be more disappearances", `security-breach-gregory-more-disappearances`).

**Current theory.** "A therapy client seen talking to something with rabbit ears is suggestive, but that client is never named" is right. "He has no record anywhere" overstates it: the game says his guest profile is unknown and there is "no record of him" in Fazbear's systems.

### 2.7 Is Into the Pit a literal event in the same world, and can its 1985 date the five murders?

**For "same world".** Its pizzeria is a Freddy Fazbear's with the four mascots, a phone caller who repeats the first game's rule about being stuffed into a suit (`into-the-pit-phone-guy-night3-stuffing`, `fnaf1-call1-stuffed-into-suit`), a child stuck in an endoskeleton who fears "the locks are going to snap shut" (`into-the-pit-night1-child-endoskeleton`), a yellow rabbit, children killed in a party room, and a company that responds to a smell inside Chica by delaying "inner torso" inspections (`into-the-pit-sketchbook-chica-smell`). The first game's newspapers report the same things from outside: children lured to a back room, a foul odour, blood and mucus (`fnaf1-news-kids-vanish`, `fnaf1-news-sanitation`).

**For "a story".** The plot is a time-travelling ball pit and a creature that replaces a father while no one else notices (`into-the-pit-rabbit-replaces-dad`). The creature is not a man in a suit: it says it suffered and comes back (`into-the-pit-yellow-rabbit-suffer-like-i-did`). The body count is six (`into-the-pit-prologue-mci`, `into-the-pit-collect-the-hats-purple-guy`), against five in the newspapers (`fnaf1-news-five-children`). Five endings are recorded, one of which turns the boy into something else (`into-the-pit-ending-what-am-i`). The same game contains three other self-contained tales, one of which puts a Funtime Freddy in this 1980s pizzeria (`into-the-pit-secret-minigames-other-stories`). Scott describes the project as a novelty that grew (`scott-2024-interview-into-the-pit-began-as-novelty`), from a story series of which "some [are] connected directly to the games, and some not" (`scott-2018-frights-some-connected-to-games`).

**What the game says about its own status: nothing.** No frame was found that marks it as a game or a tale inside the world, and nothing in it mentions any other game's events by name.

**Position.** A ghost story told inside the same setting: **medium**. Its background facts agree with the main story and can be cited as corroboration (smell in the suits, a company that delays looking, staff who vanish). Its events cannot be placed on the timeline. Its year is now "shown": a logo graphic reads "FREDDY FAZBEAR'S Pizza 1985" (`into-the-pit-past-year-1985`), with a child off to see Ghostbusters (`into-the-pit-kids-ghostbusters`). That supports a mid-1980s setting for a missing-children incident at a Freddy's, which fits the independent bound from FNaF2 (old models "from the previous location" already smell by November 1987, `fnaf2-call2-older-models`). It cannot fix the year of the five murders: **low**. The current theory's "a parallel depiction, not a reconstruction" is supported; its "1985 setting is only implied" should become "a 1985 logo is in the game; where it appears was not confirmed".

### 2.8 Which Security Breach ending do later games follow?

**What RUIN shows.** Roxy has no eyes and is still hunting Gregory (`ruin-roxy-give-me-back-my-eyes`): the route in which Gregory takes parts from the other animatronics happened. The Princess Quest cabinet in the hideout has the Princess's sword through it (`ruin-vanny-hideout-glitchtrap-shadow`). Gregory is alive with a friend who has the building's maps (`ruin-gregory-friend-maps`). One ending shows Gregory and Vanessa on the hill from the Redemption ending's last page (`ruin-ending-safe-spot`, `security-breach-ending-redemption`). The underground has collapsed and the public story is an earthquake (`ruin-pizzaplex-abandoned-earthquake`, `ruin-something-tunneled`). Gregory's comics draw the Alley, Getaway, Disassemble and fire endings, and not the Redemption one (`ruin-gregory-comics-depict-endings`).

**Readings.** (a) Redemption happened and the other endings are Gregory's stories. (b) The underground fire happened, since the pizzeria is wrecked and Gregory can draw the burnt rabbit and the mass. (c) A composite.

**Position.** For the people, later games follow the **Princess Quest (Redemption)** ending: Vanessa freed and with Gregory, the rabbit woman gone, Princess Quest finished. **Medium.** For the building, RUIN matches **no** ending: Redemption leaves it standing, the Rooftop ending burns the Pizzaplex down (`security-breach-rooftop-vanessa-alive`), the underground ending burns the buried pizzeria (`security-breach-ending-burn-it-all-down`), and RUIN has the place collapsed and blames an "earthquake". Help Wanted 2, which the archive sets between the two, still shows a rabbit-costumed arm coming out of a recharge station (`hw2-faz-force-ending`); that sits badly with an ending in which the burnt rabbit is carried off for good. The current theory's "alternative branches" that "cannot be stacked" is right, and it should add which branch the later games continue.

## 3. Problems in the current theory

Each item quotes the current text, gives the records, and says what the text should say. Items 1 to 11 are in `theory.ts`; 12 and 13 are in the other data files, which repeat the same claims.

1. **`timeline-math`: "The Mimic's teaser shows 1979 ..., but the game itself dates nothing."** and its tooltip **"the game itself prints no year."** Contradicted by `secret-of-the-mimic-work-order-1979` ("DATE: 9/07/79") and `secret-of-the-mimic-credential-form-1979` ("EXPIRATION YEAR: 1979"). The same chapter opens "Only a few years are printed" and lists 1983, 1987 and 2019 to 2020. It should add 7 September 1979 as a printed date, and note that Murray's documents print 1965 to 1975, 04/23/1974 and 1973 to 1977 (`secret-of-the-mimic-mcm-net-earnings-1965-1975`, `secret-of-the-mimic-mcm-memo-1974`, `secret-of-the-mimic-mcm-order-forms-1973-1977`). Secret of the Mimic is one of the few games with a full printed date.

2. **`partners`: "Nothing in any game makes that connection."** True of the two names, false of the relationship. Fazbear Entertainment's dispatcher says Murray was its contractor and that his work is contractually Fazbear's (`secret-of-the-mimic-dispatch-contractor-murray`, `secret-of-the-mimic-dispatch-contract-legally-ours`); its work orders say the same (`secret-of-the-mimic-work-order-retrieve-assets`). The chapter should open with that stated fact at high confidence, then give the two identifications separately (W.A. medium, Hen low to medium; 2.2). `secret-of-the-mimic-teaser-1979` should leave its counter-evidence list.

3. **`partners`: W.A.'s letters "offer his staff jobs managing 'new franchise locations'."** The signed message offers one insider one location in return for the staff's contact details (`secret-of-the-mimic-mail-staff-contacts-wa`). The job offers to staff are in an unsigned message about an unnamed employer (`secret-of-the-mimic-mail-moving-on-poached`). Say: "W.A. buys the staff list from an insider with the offer of a franchise location; staff are then hired away at double pay."

4. **Spine beat `s-workshop`: "Before 1983" and "Edwin Murray's company builds suits and springlocks to order".** The date can be tightened and the beat is too small. The springlocks message is addressed to Fiona (`secret-of-the-mimic-mail-springlocks-hen`), she dies before David, M1 then watches him "grow up", and his death is best read as December 1975 (2.1). Say "by the early 1970s (derived)". The beat should also carry what the workshop was: Fazbear's contractor, the designer of the characters (`secret-of-the-mimic-log-creepy`, `secret-of-the-mimic-story-time-animal-band`), and the builder of a full-size mock-up of what became Freddy's (`secret-of-the-mimic-mockup-pizzeria-layout`).

5. **`mimic`: "Edwin Murray built a learning endoskeleton to babysit his son. It copied everything around it, including violence."** This merges two machines and softens the cause. The babysitter is M1 (`secret-of-the-mimic-log-training-m1`), which becomes "Fiona" and then the F10-N4 computer (`secret-of-the-mimic-f10n4-reveal`). The violent one is M2, built after David's death at M1's urging as a copy of M1's program (`secret-of-the-mimic-log-try-again-build-another`, `secret-of-the-mimic-mail-received-5-min-ago`). The sentence about copying violence cites `secret-of-the-mimic-dispatch-briefing-origin`, a line spoken by M1 while posing as Fazbear's dispatcher. Edwin's own words are the better source: "I... lost my temper. I was always going to fix you" (`secret-of-the-mimic-log-turn-around-lost-temper`), after "Stop sounding like him!" (`secret-of-the-mimic-log-incident`). Say: "A grieving father lost his temper with the machine that sounded like his dead son and damaged it, and the machine learned that."

6. **`mimic`: "Murray's basement machine had an M.X.E.S. subterminal of similar design."** Three errors. The cabinet (F10-N4) is recorded in the R&D security office of the Costume Manor. The terminal headed "Mechanical X-form Experimental Storage #1" is in the Inventor's House and runs the Cradle program (`secret-of-the-mimic-mxes-acronym-on-screen`). And the likeness is of the cabinets, which are the same design with different nameplates (`secret-of-the-mimic-mxes-machine`). The paragraph's conclusion, "by design and name, not by stated history", should be strengthened as in 2.5, and `secret-of-the-mimic-mxes-machine` is support, not counter-evidence.

7. **`thesis`: fire is shown "failing: ... the Mimic walks out of another."** Two problems. It happens in one of three endings (`secret-of-the-mimic-ending-unfinished-business`). And by the theory's own account nothing haunts that machine, so its surviving a fire says nothing about whether heat releases what is held in a haunted one. Drop it from the thesis; keep the FNaF3 example.

8. **`burntrap`: "a burnt rabbit animatronic with a human-looking jawbone", and "the human jaw" as support for Afton's body.** The close-up shows a toothed jaw under the mask and bare endoskeleton below; whether anything is organic could not be verified (`security-breach-burntrap-appearance`). The argument for the body should rest on the site instead (2.3). The same chapter calls the mass "the Tangle" as if the game did; it is a file name. It omits Scott's statement that the figure "was never supposed to move" (`scott-2024-interview-burntrap-never-meant-to-move`), and the sealing evidence against the endoskeleton reading (`ruin-concrete-poured-over-door`, `ruin-gregory-mxes-explanation`).

9. **`vanny`: "RUIN's Security Mask introduces its AI as the Virtual Augmented Neural Network Integration unit" and "Help Wanted 2 calls its trainee's headset 'the Vanny mask'."** The mask's AI is Helpi; V.A.N.N.I. is what Helpi welcomes the wearer into, and Cassie calls it "that V.A.N.N.I. network" (`ruin-mask-bot-helpi-vanni`; the expansion itself is not verified verbatim). On the second claim, the Help Wanted 2 record describes a rabbit mask and says no scene names anyone Vanny (`hw2-pq4-vanny-mask-trade`, `hw2-credits-vanny`); the lead should check that wording with the Help Wanted analyst. "Vanessa's therapy notes" are recordings. The chapter's hypothesis should be restated as a succession of mask wearers (2.4).

10. **`open`: "He has no record anywhere."** The game says his guest profile is unknown and "there's no record of him" (`security-breach-intro-not-in-database`, `security-breach-vanessa-no-record`). Say "no record in Fazbear's systems". The same list's Burntrap entry should give three readings, not two.

11. **`murders`: "its 1985 setting is only implied."** A logo graphic in the game reads "FREDDY FAZBEAR'S Pizza 1985" (`into-the-pit-past-year-1985`, now "shown"). `dates.ts` repeats the old claim twice: "No on-screen year. The commonly cited 1985 comes from summaries and the source book" and "The commonly cited 1985 is not from the game." Say: "a 1985 logo appears in the game; where it is displayed was not confirmed, and an unused variant reads 1983."

12. **`timeline.ts` and `dates.ts`, Murray entries.** `t-springlocks-for-diner` is placed at 1978 with the label "before the diner opens" and the basis "The springlocks are readied before 'the diner' exists". The message says "new springlocks" will be ready "for the diner soon", which does not say the diner is unopened, and it was written while Fiona was alive. The entry also folds in W.A.'s land claim, which belongs years later, after the M2 leak. `t-fiona-dies` is at 1978.5 and `d-david` at 1979.0; both must precede M2, the staff walk-out and the last 1977 order, and David's death is best placed in December 1975. `t-fiona-dies` also offers the "Fallfest '83" banner as possibly the same festival (`codb-fallfest-83-banner`); with the night fixed in 1979 it cannot be. `t-mimic-born`, `d-edwin`, `d-murray-technicians`, `d-arnold` carry "undated (teaser shows 1979)"; the night is printed. `dates.ts` says of the Costume Manor "The only year shown is the 1979 teaser. In-game dates give day and month only." The founding era's range "before c. 1979 – 1983" should start by 1965.

13. **`deaths.ts` `d-edwin` and `people.ts` `edwin-murray`: "paralysed after an explosion" / "An explosion in his office".** The "detonation" is in a journal entry that M2 recites at the start of the recording; Edwin then says he lost his temper and cannot feel his legs (`secret-of-the-mimic-log-turn-around-lost-temper`, `secret-of-the-mimic-log-turn-around`). The cause of the injury is not stated. Related wording to fix in `people.ts`: `f10-n4` "in Murray's basement"; `the-mimic` "built to entertain Murray's son" (that is M1); `wa-signatory` "offer Murray staff the management of franchise locations" (item 3).

## 4. What the theory leaves unconnected

The current theory cites 40 of the 161 records this slice held before the pass. Most of what it leaves out is colour, but the following carry story.

1. **The product: one endoskeleton, any character.** In 1979 Fazbear is paying for "an endoskeleton that can adapt to any costume or character... with the ability to take on the persona of the character it occupies" (`secret-of-the-mimic-dispatch-endoskeleton-any-costume`). In the Pizzaplex that is how the stock works: Freddy's casing can be put "on a new Endo" (`security-breach-vanessa-new-endo`), a room is full of identical endoskeletons and Freddy asks "Am I Monty with a different shell?" (`security-breach-freddy-where-i-was-born`), and endoskeletons are taught their behaviour (`hw2-endo-warehouse`, `sd-cpu-whole-new-personality`). *Treatment:* a paragraph in the machines part: Fazbear's later animatronics are the product line it took from Murray, a body that becomes whatever shell and behaviour it is given. It also fits the early games' premise that the mascots see a person as "an endoskeleton without his costume on" (`fnaf2-call1-endoskeleton-glitch`, `fnaf1-call1-stuffed-into-suit`). *Confidence:* medium. Both ends are stated; the line between them is inferred.

2. **Bodies in mascot suits, in 1979, done by a machine.** The endoskeleton left the earlier technicians' bodies in character costumes and puts Arnold into the Fredbear springlock suit (`secret-of-the-mimic-previous-technicians`, `secret-of-the-mimic-ending-clock-out`); a trapped man describes "a maniac in a costume" (`secret-of-the-mimic-mail-technicians-attacked`). *Treatment:* one sentence in the murders chapter, as the earliest dated instance of the series' central image, and as something Fazbear knew about. Do not claim the killer copied the machine or the machine the killer: no record orders them. *Confidence:* the fact high; any causal link low.

3. **The mascots come from Fiona Murray.** She designed "these new animatronics" (`secret-of-the-mimic-log-creepy`) and the chicken that a burger restaurant used as Chica (`secret-of-the-mimic-mail-chicas-party-world`, `secret-of-the-mimic-ad-chicas-party-world`); the family story has the whole band (`secret-of-the-mimic-story-time-animal-band`); a pirate toy she made is in a birthday film (`secret-of-the-mimic-film-green-pirate-gift`); her patterns leave with the staff (`secret-of-the-mimic-mail-we-need-to-go`); the client swaps her designs for "creepy" ones. Scott's 2016 page source already had a client "ChcasPrtyWrld" (`scottgames-site-sl-source-client-directory`). *Treatment:* add to the makers chapter. *Confidence:* medium-high that the look is hers; that the final Freddy's characters are the "creepy" replacements is low.

4. **M.X.E.S. is the Cradle, and it is a character.** See 2.5. Add the Candy Cadet story (`ruin-candy-cadet-story`), in which the guardian is a mother, and that the rabbit-shaped figure works against the endoskeleton (`ruin-the-entity`, `ruin-fake-gregory-signal-jammer`). *Treatment:* rewrite the Mimic chapter's second paragraph around the guard as well as the prisoner. *Confidence:* same machine, medium-high; that M1's "Fiona" personality is still the guard in RUIN, low to medium. *Open:* why the guard appears as a rabbit, and how it relates to Help Wanted's rabbit. The records do not settle that and the theory should say so, since it changes how the hideout shadow is read (`ruin-vanny-hideout-glitchtrap-shadow`).

5. **The same trick twice.** In 1979 the voice of Fazbear's dispatcher is a machine and the real one says "We've been trying to get ahold of you all night" (`secret-of-the-mimic-clock-out-real-dispatch`); in RUIN the voice of Gregory is a machine and the real one says "I've been trying to reach you all night" (`ruin-real-gregory-not-at-pizzaplex`). In 1979 the impersonator is M1, not M2. *Treatment:* one sentence in the Mimic chapter: impersonating a trusted voice is what both Murray machines do. *Confidence:* high.

6. **Princess Quest is a remedy, and it works where fire does not.** The third game is Help Wanted's hub, and its last door is the one from that game's Trapped ending (`security-breach-pq3-help-wanted-hub-trapped-door`, `hw-trapped-ending`); when it is beaten the S.T.A.F.F. bots drop and Vanessa is herself (`security-breach-ending-redemption`); RUIN shows the cabinet run through (`ruin-vanny-hideout-glitchtrap-shadow`). Staff had found the cabinets and been drawn in (`security-breach-msg-out-of-order`, `security-breach-msg-red-flag`, `security-breach-msg-arcade-conspiracy`). Help Wanted 2 continues it (`hw2-pq4-vanny-crushes-glitchtrap`). *Treatment:* the thesis frames fire as the only remedy. For the presence in the network the games show a different one: shut it behind a door (`hw-tape-16`), then destroy it there. *Confidence:* medium. Who made Princess Quest, and who the Princess and the Old Man are, is not stated (`security-breach-pq2-old-man-fnaf1-office`, `hw2-pq4-old-man`).

7. **Freddy is off the network.** He crashed on stage (`security-breach-vanessa-freddy-system-crash`), cannot connect to the main network (`security-breach-freddy-cannot-connect-main-network`), and alone of the band is not hostile; underground he is taken over directly (`security-breach-freddy-take-control`). *Treatment:* a sentence in the Pizzaplex chapter: the glitch spreads over the network, and Freddy is spared because he is cut off from it. *Confidence:* medium-low (the disconnection is stated; the consequence is inferred). His line "She brought me here. I found myself for the first time when I cleared the path" (`security-breach-freddy-been-here-before`) suggests he was used to dig the way down; "she" is unnamed.

8. **Who disappears at the Pizzaplex.** The records are mostly about adults: staff after a mandatory 11:30 PM meeting (`security-breach-msg-all-staff-meeting`, `security-breach-msg-job-security`, `security-breach-msg-staff-party-question`), night staff replaced by robots (`security-breach-msg-pink-slip`), three therapists (`security-breach-cd46-therapists-missing-dead`), "residents" (`security-breach-alley-newspaper`). The timeline's "Vanny hunts children" rests on Gregory alone. A customer's "Why did you reopen? Everyone remembers what happened to those kids" (`security-breach-msg-it-is-happening-again`) and Freddy's "older models" (`security-breach-freddy-older-models-flawed`) show the old murders are public memory in this era. *Confidence:* medium that staff were removed; low on by whom.

9. **Bonnie and Monty.** Bonnie's last logged movement is into Monty Golf (`security-breach-msg-missing-bonnie`); Monty takes his place (`security-breach-msg-understudy`), is found on those catwalks (`security-breach-msg-monty-mischief`), and his claws are used "to cause damage" (`security-breach-msg-monty-upgrade`); Bonnie's wreck is hidden at Bonnie Bowl (`ruin-glamrock-bonnie-remains-hidden-room`); a technician father would not say why (`ruin-item-bonnie-replaced-dad-wouldnt-say`). *Treatment:* an entry under open questions. *Confidence:* medium-low that Monty destroyed Bonnie; no link to the main thesis.

10. **Cassie's father and the chain of mask wearers.** See 2.4. Help Wanted 2's player is a Fazbear technician in a rabbit mask; RUIN's mask was left by a Faz-Technician; Cassie's father had a technician's wrench (`ruin-cassie-dad-faz-wrench`). *Treatment:* state the succession; flag "the technician is Cassie's father" as a hypothesis. *Confidence:* low to medium.

11. **Vanessa's father is called Bill.** A therapist names him and describes a custody case in which he made her lie (`security-breach-cd-vanessa-father-bill`). Bill is a short form of William, and the theory has a William. *Treatment:* an entry under open questions, no more. *Confidence:* low.

12. **Client 46.** See 2.6. The chain "child, hacker, talking programs, rabbit ears, source of the glitch" is in the records and absent from the theory apart from one line.

13. **Into the Pit's technician's sketchbook.** A smell inside Chica, an order to delay "inner torso" inspections, a technician who knew something and vanished, items dumped at the mill before a lawsuit (`into-the-pit-sketchbook-chica-smell`, `into-the-pit-sketchbook-tech-2-missing`, `into-the-pit-sketchbook-strings-dumped-at-mill`). *Treatment:* cite beside `fnaf1-news-sanitation` as the inside view of the same cover-up, with the caveat on the game's status (2.7). *Confidence:* low to medium as evidence for the main story.

14. **Two undergrounds.** Murray's building has tunnels, surges, a dead elevator and something trapped below in the 1970s; the Pizzaplex has an old shaft and a power drain (2.5). *Treatment:* a flagged hypothesis only. *Confidence:* low.

15. **Small ties worth a line each.** Water and springlocks: the new springlocks work "even with the water damage" (`secret-of-the-mimic-mail-springlocks-hen`), and the later training tape warns that moisture loosens them (`fnaf3-tape3-springlock-bleeding`). A hidden room: the mock-up has a staff-only back room with suits (`secret-of-the-mimic-mockup-pizzeria-layout`), which the tapes call a safe room (`fnaf3-tape3-safe-room`), and safe rooms were later sealed "with a false wall" (`fnaf3-tape6-safe-rooms-sealed`), as RUIN's chamber is with concrete. "Puppet designs" on the computer of a man whose wife was a puppeteer (`secret-of-the-mimic-edwin-pc-alt-fazbear-designs`, `secret-of-the-mimic-log-meet-up`). Fall Fest, where Fiona died, is the setting of Help Wanted's Halloween hub (`codb-fallfest-83-banner`). A Sister Location room and a working Scooper exist inside the Pizzaplex (`security-breach-sister-location-room-code`, `ruin-ending-scooper`). All low; none should carry an argument.

## 5. Best exhibits

### Lines (verbatim, as recorded)

The makers
- "We had this contractor named Edwin Murray. He was developing some tech for us, but he's gone quiet." `secret-of-the-mimic-dispatch-contractor-murray`
- "As per his contract, everything he's been working on for us is now legally ours." `secret-of-the-mimic-dispatch-contract-legally-ours`
- "They treat me like some contractor to crack a whip at. Fiona was right. They don't think of me as a friend anymore." `secret-of-the-mimic-log-friends`
- "Fiona, the new springlocks are working well, even with the water damage. They should be ready for the diner soon." `secret-of-the-mimic-mail-springlocks-hen`
- "I got the change order from Hen last night. None of this makes sense. I'm almost done. Why change it now?" `secret-of-the-mimic-log-build-to-spec`
- "Although we now technically own the land, we would never touch the house your parents built." signed WA. `secret-of-the-mimic-mail-confidential-wa`
- "DATE: 9/07/79" `secret-of-the-mimic-work-order-1979`

The machines
- "He was working on an endoskeleton that can adapt to any costume or character, large or small, with the ability to take on the persona of the character it occupies." `secret-of-the-mimic-dispatch-endoskeleton-any-costume`
- "I'm sorry, M2. I... lost my temper. I was always going to fix you..." `secret-of-the-mimic-log-turn-around-lost-temper`
- "M2 can no longer be controlled. It will no longer listen. It mimics rage." `secret-of-the-mimic-mail-received-5-min-ago`
- "It wouldn't be him. ... I let a machine raise my kid. You're not real." `secret-of-the-mimic-log-refusal`
- "Ok, everyone hide. Fiona, go get him. I left him out at the playground." `secret-of-the-mimic-film-yellow-playground`
- "Here are the blueprints for the "Cradle". It can keep David safe and provide boundaries." `secret-of-the-mimic-mail-hurt-cradle`
- "Mechanical X-form Experimental Storage #1 … RUN: CRADLE.EXE" `secret-of-the-mimic-mxes-acronym-on-screen`
- "It can not see you in that suit. But I can." `secret-of-the-mimic-f10n4-suit-cannot-see`

Under the Pizzaplex
- "it's been trapped down here for a really long time. The M.X.E.S. security program was designed to keep it hidden" `ruin-gregory-mxes-explanation`
- "Well, it looks like someone poured concrete over the door?" `ruin-concrete-poured-over-door`
- "There was a monster in the woods, but the mother caught it and kept it locked in the basement." `ruin-candy-cadet-story`
- "I've been trying to reach you all night! I'm not at the Pizzaplex. Something is trying to trick you!" `ruin-real-gregory-not-at-pizzaplex`, beside 1979's "We've been trying to get ahold of you all night." `secret-of-the-mimic-clock-out-real-dispatch`
- "It's not your fault. I know you did it for me, to save me. But we can't risk being followed. I'm sorry" `ruin-ending-standard`
- "Today, we broke through the foundation and found what looks like an old elevator shaft. Someone must have known about this, right?" `security-breach-msg-old-elevator`
- "He is trying to take control of me. I do not think I can fight it for long." `security-breach-freddy-take-control`
- "I have been here before. She brought me here. I found myself for the first time when I cleared the path." `security-breach-freddy-been-here-before`

Vanessa, Gregory, the Pizzaplex
- "this person who's been sending you messages has been hacking into your personal files too." `security-breach-cd-vanessa-manipulative-messages`
- "He said he would always be watching. He could be here or there or anywhere in between." `security-breach-cd-vanessa-costume-fur`
- "There is no rabbit at the Mega Pizzaplex... Not anymore." `security-breach-freddy-no-rabbit-not-anymore`
- "A strange mask left behind by some Faz-Technician" `ruin-security-mask-left-by-faz-technician`
- "I don't think you're being manipulated here. I think you're the one doing the manipulating." `security-breach-cd46-doing-the-manipulating`
- "Monty will run the shows, until Parts and Service can slap your casing on a new Endo." `security-breach-vanessa-new-endo`
- "Why did you reopen? Everyone remembers what happened to those kids." `security-breach-msg-it-is-happening-again`

Into the Pit
- "Why is she starting to smell bad? … Company issue #83: Inner torso repairs/investigations are to be delayed." `into-the-pit-sketchbook-chica-smell`
- "Even if I don't get you now, I always come back." `into-the-pit-yellow-rabbit-always-come-back`
- "I will make you suffer, just like I did." `into-the-pit-yellow-rabbit-suffer-like-i-did`

Scott Cawthon
- "Originally, Burntrap was never supposed to move." `scott-2024-interview-burntrap-never-meant-to-move`
- "I had a very specific story in mind and it is very different than the one that got in the game" `scott-2024-interview-sb-story-not-as-intended`

### Images (files in `public/img/`)

New in this pass:
- `sotm-work-order-1979.jpg`: the Fazbear work order dated 9/07/79. The single most useful image in the slice. (`secret-of-the-mimic-work-order-1979`)
- `sotm-credential-form-1979.jpg`: Arnold's credential form, expiration year 1979. (`secret-of-the-mimic-credential-form-1979`)
- `sotm-mxes-subterminal.jpg`: "Mechanical X-form Experimental Storage #1 / RUN: CRADLE.EXE". (`secret-of-the-mimic-mxes-acronym-on-screen`)
- `sotm-f10n4-and-mxes-cabinets.jpg`: three in-game screenshots side by side: the F10-N4 cabinet (Secret of the Mimic), the M.X.E.S. cabinet in RUIN's deepest room, and the M.X.E.S. cabinet with its keypad in Help Wanted 2's van. (`secret-of-the-mimic-mxes-machine`)
- `sotm-fredbears-diner-poster.jpg`: "JOIN US AT... FREDBEAR'S FAMILY DINER" with the yellow rabbit. (`secret-of-the-mimic-fredbears-diner-poster`)
- `sotm-mcm-memo-1974.jpg`: the interoffice memo dated 04/23/1974. (`secret-of-the-mimic-mcm-memo-1974`)
- `ruin-gregory-comic-pages.jpg`: the eight comic pages; a composite. (`ruin-gregory-comics-depict-endings`)
- `ruin-safe-spot-ending-hill.jpg`: Gregory, Helpi and Vanessa on the hill, with the subtitle. (`ruin-ending-safe-spot`)
- `ruin-newspaper-earthquake.jpg`: "Pizza Plex Destroyed / Earthquake shakes pizza plex"; enlarged from a small texture, so soft. (`ruin-pizzaplex-abandoned-earthquake`)
- `itp-freddys-logo-1985.png`: the 1985 logo. (`into-the-pit-past-year-1985`)
- `itp-sketchbook-chica-smell.jpg`: the sketchbook's Chica page. (`into-the-pit-sketchbook-chica-smell`)

Already in the archive and worth keeping in view:
- `sb-pizza-place-sign-sinkhole.webp` (the buried sign), `sb-burntrap-and-tangle.jpg` (the burnt rabbit and the mass), `sb-rooftop-ending-vanny-unmasked.jpg` and `sb-rooftop-ending-vanessa-on-roof.jpg` (the roof anomaly, side by side), `sb-alley-ending-missing-newspaper.jpg`, `ruin-mimic-elevator.jpg`, `ruin-missing-gregory-poster.jpg`, `sotm-m1-birthday-cake-film-reel.jpg`, `sotm-framed-ending-van.jpg`, `sotm-redeemed-ending-david.jpg`, `itp-strange-photo.png`, `itp-one-star-ending-party-room.jpg`.

Pairs that make an argument on their own: the work order beside the credential form (the date); the two cabinets beside the sub-terminal (M.X.E.S.); the buried sign beside `ffps-completion-pizza-place-condemned.png` from the Pizzeria Simulator slice (the site); the Safe Spot hill beside the comic pages (which ending).

## 6. Filing table

Every record in `sb-mimic.json` (239), in file order within each game. Thread numbers refer to sections 1, 2 and 4 of this memo. Roles: **core** (the thread cannot be told without it), **support** (corroborates), **counter** (pushes against the favoured reading), **colour** (detail on which no argument rests), **outside** (not part of the story). A plus sign marks a record added in this pass.

### Security Breach (86)

| record | thread | role |
|---|---|---|
| `security-breach-msg-hello-gregory` | 1.6 Gregory | colour |
| `security-breach-msg-it-is-happening-again` | 1.7 Pizzaplex: public memory | support |
| `security-breach-msg-night-terrors` | 1.7 Pizzaplex: animatronic faults (daycare) | colour |
| `security-breach-msg-stolen-property` | 1.5 Vanessa | support |
| `security-breach-msg-false-alarm` | 1.5 Vanessa | support |
| `security-breach-msg-marked-for-deletion` | 1.5 Vanessa | core |
| `security-breach-msg-no-questions-asked` | 1.5 Vanessa | support |
| `security-breach-msg-sinkhole` | 1.4 underground | support |
| `security-breach-msg-power-drain` | 1.4 underground | core |
| `security-breach-msg-old-elevator` | 1.4 underground | core |
| `security-breach-msg-all-staff-meeting` | 1.7 Pizzaplex: staff | core |
| `security-breach-msg-job-security` | 1.7 Pizzaplex: staff | core |
| `security-breach-msg-pink-slip` | 1.7 Pizzaplex: staff | support |
| `security-breach-msg-missing-bonnie` | 1.7 Pizzaplex: Bonnie and Monty | core |
| `security-breach-msg-understudy` | 1.7 Pizzaplex: Bonnie and Monty | support |
| `security-breach-msg-re-theme` | 1.7 Pizzaplex: Bonnie and Monty | colour |
| `security-breach-msg-chica-report` | 1.7 Pizzaplex: animatronic faults | colour |
| `security-breach-msg-roxy-upgrade` | 1.7 Pizzaplex: animatronic faults (Roxy's eyes) | support |
| `security-breach-msg-chica-upgrade` | 1.7 Pizzaplex: animatronic faults | colour |
| `security-breach-msg-monty-upgrade` | 1.7 Pizzaplex: Bonnie and Monty | support |
| `security-breach-msg-arcade-conspiracy` | 1.5 Princess Quest | support |
| `security-breach-msg-red-flag` | 1.5 Princess Quest | support |
| `security-breach-msg-out-of-order` | 1.5 Princess Quest | support |
| `security-breach-msg-pq1-maint-log` | 1.5 Princess Quest | support |
| `security-breach-msg-bbw-maint-log` | 1.7 Pizzaplex: staff | support |
| `security-breach-msg-ac-inspection` | 1.7 Pizzaplex: Bonnie and Monty | colour |
| `security-breach-msg-torn-paper` | 4.15 Sister Location room | colour |
| `security-breach-msg-night-shift` | 1.7 Pizzaplex: staff | support |
| `security-breach-freddy-vanny-vanessa-bunny` | 1.5 Vanessa | core |
| `security-breach-gregory-finds-vanny-hideout` | 1.5 Vanessa | support |
| `security-breach-gregory-more-disappearances` | 1.6 Gregory | support |
| `security-breach-freddy-older-models-flawed` | 1.7 Pizzaplex: public memory | support |
| `security-breach-freddy-been-here-before` | 1.4 underground | core |
| `security-breach-freddy-i-am-not-me` | 1.4 underground: burnt rabbit | core |
| `security-breach-gregory-what-is-that-thing` | 1.4 underground: burnt rabbit | support |
| `security-breach-freddy-where-i-was-born` | 4.1 endo and shell | core |
| `security-breach-freddy-i-miss-him` | 1.7 Pizzaplex: Bonnie and Monty | colour |
| `security-breach-vanessa-no-record` | 1.6 Gregory | core |
| `security-breach-vanessa-knows-gregory-name` | 1.6 Gregory | colour |
| `security-breach-vanessa-6am-reward` | 1.5 Vanessa | colour |
| `security-breach-vanny-lines` | 1.5 Vanessa | support |
| `security-breach-freddy-cannot-exit` | 1.7 Pizzaplex: Freddy | colour |
| `security-breach-intro-not-in-database` | 1.6 Gregory | support |
| `security-breach-cd-vanessa-encrypted-conversation` | 1.5 Vanessa | support |
| `security-breach-cd-vanessa-father-bill` | 1.5 Vanessa (4.11 open lead) | support |
| `security-breach-cd-vanessa-costume-fur` | 1.5 Vanessa | core |
| `security-breach-cd-vanessa-transfer` | 1.5 Vanessa | support |
| `security-breach-cd46-therapists-missing-dead` | 1.6 client 46 | support |
| `security-breach-cd46-hacking-pizzaplex` | 1.6 client 46 | core |
| `security-breach-cd46-rabbit-ears` | 1.6 client 46 | core |
| `security-breach-cd46-glitch-subroutines` | 1.6 client 46 | core |
| `security-breach-sister-location-room-code` | 4.15 Sister Location room | colour |
| `security-breach-ending-alley` | 2.8 SB endings | counter |
| `security-breach-alley-newspaper` | 1.7 Pizzaplex: staff and residents | support |
| `security-breach-ending-getaway` | 2.8 SB endings | counter |
| `security-breach-ending-rooftop` | 2.8 SB endings | counter |
| `security-breach-rooftop-unmasked` | 1.5 Vanessa | core |
| `security-breach-rooftop-vanessa-alive` | 1.5 Vanessa (2.4 the roof) | counter |
| `security-breach-ending-disassemble-vanny` | 2.8 SB endings | counter |
| `security-breach-ending-redemption` | 2.8 SB endings / 1.5 Princess Quest | core |
| `security-breach-ending-burn-it-all-down` | 1.4 underground / 2.8 SB endings | core |
| `security-breach-burntrap-name-not-in-game` | 1.4 underground: burnt rabbit | support |
| `security-breach-burntrap-appearance` | 1.4 underground: burnt rabbit | core |
| `security-breach-underground-pizza-place` | 1.4 underground | core |
| `security-breach-tangle-composition` | 1.4 underground: mass of parts | core |
| `security-breach-shattered-glamrocks-underground` | 1.4 underground | colour |
| `security-breach-6am-choice` | 2.8 SB endings | support |
| `security-breach-gregory-sinkhole-line` | 1.4 underground | support |
| `security-breach-daycare-attendant-lights` | 1.7 Pizzaplex: animatronic faults (daycare) | colour |
| `security-breach-freddy-no-rabbit-not-anymore` + | 1.5 mask (machines cannot see the wearer) | support |
| `security-breach-freddy-cannot-see-rabbit-lady` + | 1.5 mask (machines cannot see the wearer) | core |
| `security-breach-freddy-take-control` + | 1.4 underground: burnt rabbit | support |
| `security-breach-freddy-cannot-connect-main-network` + | 1.7 Pizzaplex: Freddy | support |
| `security-breach-vanessa-freddy-system-crash` + | 1.7 Pizzaplex: Freddy | support |
| `security-breach-vanessa-new-endo` + | 4.1 endo and shell | core |
| `security-breach-freddy-raceway-closed-abruptly` + | 1.4 underground | support |
| `security-breach-msg-monty-mischief` + | 1.7 Pizzaplex: Bonnie and Monty | support |
| `security-breach-msg-behind-the-maze` + | 1.7 Pizzaplex: Bonnie and Monty | colour |
| `security-breach-msg-staff-party-question` + | 1.7 Pizzaplex: staff | support |
| `security-breach-cd-therapists-shared-and-replaced` + | 1.6 client 46 / 1.5 Vanessa | support |
| `security-breach-cd-vanessa-manipulative-messages` + | 1.5 Vanessa | core |
| `security-breach-cd46-treated-as-child-phenom` + | 1.6 client 46 | core |
| `security-breach-cd46-talking-programs` + | 1.6 client 46 | support |
| `security-breach-cd46-doing-the-manipulating` + | 1.6 client 46 | support |
| `security-breach-pq2-old-man-fnaf1-office` + | 1.5 Princess Quest | support |
| `security-breach-pq3-help-wanted-hub-trapped-door` + | 1.5 Princess Quest | core |

### RUIN (36)

| record | thread | role |
|---|---|---|
| `ruin-pizzaplex-abandoned-earthquake` | 2.8 SB endings (aftermath) | core |
| `ruin-cassie-seeks-gregory` | 1.3 sealed endoskeleton | support |
| `ruin-fake-gregory-sinkhole` | 1.3 sealed endoskeleton | support |
| `ruin-fake-gregory-turn-off-security` | 1.3 sealed endoskeleton | core |
| `ruin-mimic-reuses-gregory-lines` | 1.3 sealed endoskeleton | core |
| `ruin-mask-bot-helpi-vanni` | 1.5 mask | core |
| `ruin-the-entity` | 1.3 M.X.E.S. | core |
| `ruin-vanny-hideout-glitchtrap-shadow` | 2.8 SB endings / 1.5 Princess Quest | core |
| `ruin-roxy-birthday-11th` | 1.6 Cassie | colour |
| `ruin-roxy-final-node` | 1.3 M.X.E.S. | support |
| `ruin-mxes-hub` | 1.3 M.X.E.S. | core |
| `ruin-mimic-reveal` | 1.3 sealed endoskeleton | core |
| `ruin-real-gregory-not-at-pizzaplex` | 1.3 sealed endoskeleton / 1.6 Gregory | core |
| `ruin-gregory-mxes-explanation` | 1.3 M.X.E.S. | core |
| `ruin-gregory-friend-maps` | 2.8 SB endings | support |
| `ruin-ending-standard` | 1.3 sealed endoskeleton | core |
| `ruin-ending-scooper` | 1.3 sealed endoskeleton | support |
| `ruin-ending-safe-spot` | 2.8 SB endings | core |
| `ruin-missing-gregory-poster` | 1.6 Gregory | support |
| `ruin-something-tunneled` | 1.4 underground: mass of parts | support |
| `ruin-eclipse` | 1.7 Pizzaplex: animatronic faults (daycare) | colour |
| `ruin-candy-cadet-story` | 1.3 M.X.E.S. | support |
| `ruin-cassie-dad-faz-wrench` + | 1.6 Cassie / 1.5 mask (chain of wearers) | support |
| `ruin-security-mask-left-by-faz-technician` + | 1.5 mask (chain of wearers) | core |
| `ruin-item-gregory-seen-this-mask-before` + | 1.5 mask | support |
| `ruin-gregory-comics-depict-endings` + | 2.8 SB endings | core |
| `ruin-item-bonnie-replaced-dad-wouldnt-say` + | 1.7 Pizzaplex: Bonnie and Monty | support |
| `ruin-glamrock-bonnie-remains-hidden-room` + | 1.7 Pizzaplex: Bonnie and Monty | support |
| `ruin-roxy-give-me-back-my-eyes` + | 2.8 SB endings | support |
| `ruin-prototype-freddy-headless` + | 2.8 SB endings | support |
| `ruin-burners-inside-of-an-oven` + | 1.4 underground | support |
| `ruin-concrete-poured-over-door` + | 1.3 sealed endoskeleton | core |
| `ruin-fake-gregory-signal-jammer` + | 1.3 M.X.E.S. | support |
| `ruin-fake-gregory-one-node-left-sealed` + | 1.3 M.X.E.S. | support |
| `ruin-mimic-lair-mcm-mascot-suits` + | 1.3 sealed endoskeleton | core |
| `ruin-item-old-headset-game` + | 1.6 Cassie (Help Wanted as an old game) | colour |

### Into the Pit (34)

| record | thread | role |
|---|---|---|
| `into-the-pit-jeffs-pizza-ball-pit` | 1.8 Into the Pit: story | core |
| `into-the-pit-past-year-1985` | 1.8 Into the Pit: date | core |
| `into-the-pit-prologue-mci` | 1.8 Into the Pit: story (six bodies) | core |
| `into-the-pit-golden-freddy-suit-hide` | 1.8 Into the Pit: story | colour |
| `into-the-pit-rabbit-replaces-dad` | 1.8 Into the Pit: status (a tale) | core |
| `into-the-pit-yellow-rabbit-naming` | 1.8 Into the Pit: story | support |
| `into-the-pit-strange-photo` | 1.1 makers (two unnamed men) | colour |
| `into-the-pit-night1-child-endoskeleton` | 1.8 Into the Pit: status (same world) | support |
| `into-the-pit-night2-chica-mike` | 1.8 Into the Pit: story | colour |
| `into-the-pit-night3-bonnie-chip` | 1.8 Into the Pit: story | colour |
| `into-the-pit-night4-freezer` | 1.8 Into the Pit: story | colour |
| `into-the-pit-night5-dad-parts-and-service` | 1.8 Into the Pit: story | colour |
| `into-the-pit-phone-guy-night3-stuffing` | 1.8 Into the Pit: status (same world) | support |
| `into-the-pit-phone-guy-night1` | 1.8 Into the Pit: story | colour |
| `into-the-pit-phone-closed-maintenance` | 1.8 Into the Pit: story | colour |
| `into-the-pit-ending-one-star` | 1.8 Into the Pit: story | colour |
| `into-the-pit-ending-two-star` | 1.8 Into the Pit: story | colour |
| `into-the-pit-ending-three-star` | 1.8 Into the Pit: story | support |
| `into-the-pit-ending-see-ya-dad` | 1.8 Into the Pit: story | colour |
| `into-the-pit-ending-what-am-i` | 1.8 Into the Pit: status (a tale) | support |
| `into-the-pit-collect-the-hats-purple-guy` | 1.8 Into the Pit: story (six) | counter |
| `into-the-pit-light-of-87` | none (achievement joke) | outside |
| `into-the-pit-arcade-always-watching` | 1.8 Into the Pit: story | colour |
| `into-the-pit-mill-closure` | 1.8 Into the Pit: story | colour |
| `into-the-pit-yellow-rabbit-always-come-back` + | 1.8 Into the Pit: story | core |
| `into-the-pit-yellow-rabbit-suffer-like-i-did` + | 1.8 Into the Pit: status (a tale) | core |
| `into-the-pit-sketchbook-chica-smell` + | 1.8 Into the Pit: status (same world) | core |
| `into-the-pit-sketchbook-tech-2-missing` + | 1.8 Into the Pit: status (same world) | support |
| `into-the-pit-sketchbook-strings-dumped-at-mill` + | 1.8 Into the Pit: status (same world) | support |
| `into-the-pit-jeffs-same-building` + | 1.8 Into the Pit: story | support |
| `into-the-pit-family-remembers-ball-pit` + | 1.8 Into the Pit: story | colour |
| `into-the-pit-new-mill-fathers` + | 1.8 Into the Pit: story | colour |
| `into-the-pit-kids-ghostbusters` + | 1.8 Into the Pit: date | support |
| `into-the-pit-secret-minigames-other-stories` + | 1.8 Into the Pit: status (a tale) | core |

### Scott Cawthon's statements (1)

| record | thread | role |
|---|---|---|
| `scott-2024-interview-mxes-name-thought-through` + | 1.3 M.X.E.S. (Scott on the character and on RUIN) | support |

### Secret of the Mimic (82)

| record | thread | role |
|---|---|---|
| `secret-of-the-mimic-log-meet-up` | 1.1 makers | support |
| `secret-of-the-mimic-log-inheritance` | 1.1 makers | support |
| `secret-of-the-mimic-log-build-to-spec` | 1.1 makers (Hen) | core |
| `secret-of-the-mimic-log-creepy` | 1.1 makers: mascots' origin | core |
| `secret-of-the-mimic-log-installation-worries` | 1.2 two machines: family (Fiona) | support |
| `secret-of-the-mimic-log-death` | 1.2 two machines: family (Fiona) | core |
| `secret-of-the-mimic-log-frequency-4625` | 1.3 M.X.E.S. (4625) / 1.2 two machines | core |
| `secret-of-the-mimic-log-training-m1` | 1.2 two machines: M1 | core |
| `secret-of-the-mimic-log-playground` | 1.2 two machines: family (David) | support |
| `secret-of-the-mimic-log-m1-as-fiona` | 1.2 two machines: M1 | support |
| `secret-of-the-mimic-log-refusal` | 1.2 two machines: M2 | support |
| `secret-of-the-mimic-log-make-a-copy` | 1.2 two machines: M2 / 1.1 makers: takeover | core |
| `secret-of-the-mimic-log-incident` | 1.2 two machines: violence | support |
| `secret-of-the-mimic-log-turn-around` | 1.2 two machines: violence | core |
| `secret-of-the-mimic-mail-confidential-wa` | 1.1 makers: takeover (W.A.) | core |
| `secret-of-the-mimic-mail-staff-contacts-wa` | 1.1 makers: takeover (W.A.) | core |
| `secret-of-the-mimic-mail-springlocks-hen` | 1.1 makers (Hen, the diner) | core |
| `secret-of-the-mimic-mail-chicas-party-world` | 1.1 makers: mascots' origin | support |
| `secret-of-the-mimic-mail-received-5-min-ago` | 1.2 two machines: violence | core |
| `secret-of-the-mimic-mail-hurt-cradle` | 1.3 M.X.E.S. (the Cradle) | core |
| `secret-of-the-mimic-mail-sad` | 1.2 two machines: M1 | colour |
| `secret-of-the-mimic-mail-foreclosure` | 2.1 dating | core |
| `secret-of-the-mimic-mail-david-party` | 2.1 dating / 1.2 family (David) | support |
| `secret-of-the-mimic-mail-party-canceled` | 2.1 dating / 1.2 family (David) | core |
| `secret-of-the-mimic-mail-heard-fiona` | 1.2 two machines: M1 | support |
| `secret-of-the-mimic-mail-mushmen-return` | 1.2 two machines: product | support |
| `secret-of-the-mimic-mail-something-below` | 4.14 two undergrounds | support |
| `secret-of-the-mimic-mail-ralph-suit` | 1.1 makers (accidents) | colour |
| `secret-of-the-mimic-mail-we-need-to-go` | 1.1 makers: takeover | support |
| `secret-of-the-mimic-arnold-assignment` | 1.2 night of 9/07/79 | support |
| `secret-of-the-mimic-dispatch-briefing-origin` | 1.2 two machines: violence | support |
| `secret-of-the-mimic-previous-technicians` | 1.2 night of 9/07/79 (bodies in suits) | core |
| `secret-of-the-mimic-f10n4-reveal` | 1.2 two machines: M1 | core |
| `secret-of-the-mimic-f10n4-miss-my-child` | 1.2 two machines: M1 | support |
| `secret-of-the-mimic-film-m1-birthday-cake` | 1.2 two machines: M1 | support |
| `secret-of-the-mimic-film-mommy-gone` | 1.2 two machines: family (Fiona) | support |
| `secret-of-the-mimic-film-david-two` | 1.2 two machines: family | colour |
| `secret-of-the-mimic-stay-up-latte` | 1.2 two machines: product | colour |
| `secret-of-the-mimic-mimic-blueprint-acronym` | 1.2 two machines: product | support |
| `secret-of-the-mimic-rnd-proto-pizzeria` | 1.1 makers (the restaurant project) | core |
| `secret-of-the-mimic-ending-clock-out` | 1.2 night of 9/07/79 | core |
| `secret-of-the-mimic-ending-unfinished-business` | 1.2 night of 9/07/79 | core |
| `secret-of-the-mimic-ending-story-time` | 1.2 night of 9/07/79 | core |
| `secret-of-the-mimic-teaser-1979` | 2.1 dating | support |
| `secret-of-the-mimic-mxes-machine` | 1.3 M.X.E.S. | core |
| `secret-of-the-mimic-mimic-ruin-appearance-link` | 1.3 sealed endoskeleton | core |
| `secret-of-the-mimic-work-order-1979` + | 2.1 dating | core |
| `secret-of-the-mimic-credential-form-1979` + | 2.1 dating | support |
| `secret-of-the-mimic-work-order-retrieve-assets` + | 1.1 makers | support |
| `secret-of-the-mimic-dispatch-contractor-murray` + | 1.1 makers | core |
| `secret-of-the-mimic-dispatch-contract-legally-ours` + | 1.1 makers | core |
| `secret-of-the-mimic-dispatch-endoskeleton-any-costume` + | 1.2 two machines: product / 4.1 endo and shell | core |
| `secret-of-the-mimic-dispatch-retrieve-schematic` + | 1.2 two machines: product | support |
| `secret-of-the-mimic-clock-out-real-dispatch` + | 1.2 night of 9/07/79 | core |
| `secret-of-the-mimic-f10n4-fazbear-will-send-another` + | 1.2 night of 9/07/79 | support |
| `secret-of-the-mimic-f10n4-suit-cannot-see` + | 1.5 mask (machines cannot see the wearer) | support |
| `secret-of-the-mimic-mxes-acronym-on-screen` + | 1.3 M.X.E.S. | core |
| `secret-of-the-mimic-experimental-storage-2-mimic-blueprints` + | 1.3 M.X.E.S. | support |
| `secret-of-the-mimic-edwin-pc-alt-fazbear-designs` + | 1.1 makers | support |
| `secret-of-the-mimic-mcm-memo-1974` + | 2.1 dating | support |
| `secret-of-the-mimic-mcm-rnd-floor-opening-memo` + | 2.1 dating | support |
| `secret-of-the-mimic-mcm-net-earnings-1965-1975` + | 2.1 dating | support |
| `secret-of-the-mimic-mcm-order-forms-1973-1977` + | 2.1 dating | core |
| `secret-of-the-mimic-log-friends` + | 1.1 makers | core |
| `secret-of-the-mimic-log-trust-no-one` + | 1.1 makers | support |
| `secret-of-the-mimic-log-try-again-build-another` + | 1.2 two machines: M2 | core |
| `secret-of-the-mimic-log-announcement-traitors` + | 1.1 makers: takeover | support |
| `secret-of-the-mimic-log-turn-around-lost-temper` + | 1.2 two machines: violence | core |
| `secret-of-the-mimic-mail-moving-on-poached` + | 1.1 makers: takeover | support |
| `secret-of-the-mimic-mail-group-chat-turning-down-work` + | 1.1 makers: takeover | support |
| `secret-of-the-mimic-mail-technicians-attacked` + | 1.2 night of 9/07/79 (bodies in suits) | support |
| `secret-of-the-mimic-mail-wa-far-behind` + | 1.1 makers: takeover (W.A.) | support |
| `secret-of-the-mimic-film-yellow-playground` + | 1.2 two machines: family (David) | core |
| `secret-of-the-mimic-ad-chicas-party-world` + | 1.1 makers: mascots' origin | support |
| `secret-of-the-mimic-ad-clean-o-vac-adjusts-size` + | 1.2 two machines: product | colour |
| `secret-of-the-mimic-story-time-animal-band` + | 1.1 makers: mascots' origin | support |
| `secret-of-the-mimic-mockup-pizzeria-layout` + | 1.1 makers (the restaurant project) | support |
| `secret-of-the-mimic-fredbears-diner-poster` + | 1.1 makers (the diner) | core |
| `secret-of-the-mimic-white-tiger-first-birthday` + | 1.2 night of 9/07/79 (Redeemed ending) | support |
| `secret-of-the-mimic-film-green-pirate-gift` + | 1.1 makers: mascots' origin | support |
| `secret-of-the-mimic-log-power-surges-tunnels` + | 4.14 two undergrounds | support |
| `secret-of-the-mimic-mail-old-elevator-below` + | 4.14 two undergrounds | support |

Role totals: core 84, support 110, counter 6, colour 38, outside 1.

## 7. Records added and fixed

All work is in `src/data/evidence/sb-mimic.json`, `src/data/credits/sb-mimic.json` and `public/img/`. The validator passes (`npx tsx scripts/validate.ts`: OK) and `npx tsc -b` exits 0. Nothing was committed, renamed or deleted.

### Added: 78 records

Every new record has `verifiedVia`. Quotes were checked against the wiki's transcript pages or read from the image named in the record; where only a wiki description was available the record has no quote and its note says so.

**Security Breach (17)**

- `security-breach-freddy-no-rabbit-not-anymore`: Freddy: 'There is no rabbit at the Mega Pizzaplex... Not anymore.'
- `security-breach-freddy-cannot-see-rabbit-lady`: Freddy did not see the 'dancing rabbit lady' right in front of him
- `security-breach-freddy-take-control`: Underground, Freddy: 'He is trying to take control of me'
- `security-breach-freddy-cannot-connect-main-network`: After his crash, Freddy 'cannot connect to the main network'
- `security-breach-vanessa-freddy-system-crash`: Vanessa: Freddy's 'system crashed'; Parts and Service put him on reduced power
- `security-breach-vanessa-new-endo`: Vanessa: Parts and Service can 'slap your casing on a new Endo'
- `security-breach-freddy-raceway-closed-abruptly`: Freddy: 'The raceway was closed very abruptly prior to the new construction'
- `security-breach-msg-monty-mischief`: Message: Monty skips shows and is always found on the catwalks over Monty Golf
- `security-breach-msg-behind-the-maze`: Message: clanging in the vents toward the catwalks over Gator Golf
- `security-breach-msg-staff-party-question`: Message: afraid of being laid off for skipping the staff party
- `security-breach-cd-therapists-shared-and-replaced`: Both clients lose the same therapists, one after another
- `security-breach-cd-vanessa-manipulative-messages`: Therapist: manipulative messages to Vanessa, from someone who hacked her personal files
- `security-breach-cd46-treated-as-child-phenom`: Client 46 is spoken to like a child and called a computer 'phenom'
- `security-breach-cd46-talking-programs`: Client 46 has 'developed software programs that talk to you and repeat phrases'
- `security-breach-cd46-doing-the-manipulating`: Fifth therapist to client 46: 'I think you're the one doing the manipulating'
- `security-breach-pq2-old-man-fnaf1-office`: Princess Quest 2: the Old Man's sword of light, and a door to a FNaF1-style office
- `security-breach-pq3-help-wanted-hub-trapped-door`: Princess Quest 3 ends at Help Wanted's sealed door, a scream and 'ERROR'

**RUIN (14)**

- `ruin-cassie-dad-faz-wrench`: Cassie: the Faz-Wrench is 'just like my dad's'
- `ruin-security-mask-left-by-faz-technician`: The mask's description: 'left behind by some Faz-Technician'
- `ruin-item-gregory-seen-this-mask-before`: Cassie on a comic page of a rabbit mask: 'Gregory must have seen this mask before.'
- `ruin-gregory-comics-depict-endings`: Gregory's comic pages show the scenes of Security Breach's other endings
- `ruin-item-bonnie-replaced-dad-wouldnt-say`: Cassie: 'Dad wouldn't tell me why they replaced Bonnie.'
- `ruin-glamrock-bonnie-remains-hidden-room`: A wrecked Glamrock Bonnie lies in a hidden room at Bonnie Bowl
- `ruin-roxy-give-me-back-my-eyes`: Roxy, eyeless, still hunts Gregory: 'GIVE ME BACK MY EYES!!!'
- `ruin-prototype-freddy-headless`: The headless Freddy in Fazer Blast is marked 'PROTOTYPE'
- `ruin-burners-inside-of-an-oven`: Under the Pizzaplex: 'burners everywhere... like the inside of an oven'
- `ruin-concrete-poured-over-door`: Cassie: 'someone poured concrete over the door'
- `ruin-fake-gregory-signal-jammer`: The voice: 'I updated Helpi with a signal jammer. That rabbit thing won't bother you anymore.'
- `ruin-fake-gregory-one-node-left-sealed`: The voice: 'one node left keeping the underground- sealed'
- `ruin-mimic-lair-mcm-mascot-suits`: The endoskeleton's chamber is a wardrobe of mascot costumes
- `ruin-item-old-headset-game`: Cassie calls a Nightmare plush 'from that old headset game'

**Into the Pit (10)**

- `into-the-pit-yellow-rabbit-always-come-back`: The yellow rabbit creature: 'I always come back.'
- `into-the-pit-yellow-rabbit-suffer-like-i-did`: The yellow rabbit creature: 'I will make you suffer, just like I did.'
- `into-the-pit-sketchbook-chica-smell`: Technician's sketchbook: 'Why is she starting to smell bad?'
- `into-the-pit-sketchbook-tech-2-missing`: Technician's sketchbook: 'Tech 2 knows something. Where is he?'
- `into-the-pit-sketchbook-strings-dumped-at-mill`: Technician's sketchbook: evidence dumped at the mill before a lawsuit
- `into-the-pit-jeffs-same-building`: Jeff's Pizza is the old Freddy's building, with its Party Room boarded up
- `into-the-pit-family-remembers-ball-pit`: A family at Jeff's remembers the old pizzeria and why its ball pit is roped off
- `into-the-pit-new-mill-fathers`: In the past, the boys' fathers work at 'the new mill'
- `into-the-pit-kids-ghostbusters`: A child in the past is going to see Ghostbusters
- `into-the-pit-secret-minigames-other-stories`: Three hidden minigames tell other stories, one ending at Funtime Freddy's hand

**Scott Cawthon (1)**

- `scott-2024-interview-mxes-name-thought-through`: 2024: M.X.E.S. is 'a character' whose name Scott thought through in his own design of RUIN

**Secret of the Mimic (36)**

- `secret-of-the-mimic-work-order-1979`: Fazbear work order in Arnold's van, dated 9/07/79
- `secret-of-the-mimic-credential-form-1979`: Arnold's Fazbear credential form: expiration year 1979
- `secret-of-the-mimic-work-order-retrieve-assets`: Second work order: 'Retreive Fazbear Ent. assets' from Murray's Costume Manor
- `secret-of-the-mimic-dispatch-contractor-murray`: Dispatch: Edwin Murray was a Fazbear contractor 'developing some tech for us'
- `secret-of-the-mimic-dispatch-contract-legally-ours`: Dispatch: under his contract, Murray's work 'is now legally ours'
- `secret-of-the-mimic-dispatch-endoskeleton-any-costume`: Dispatch: an endoskeleton that adapts to any costume and takes on its persona
- `secret-of-the-mimic-dispatch-retrieve-schematic`: Dispatch: Fazbear wants Murray's schematic, and the endoskeleton too
- `secret-of-the-mimic-clock-out-real-dispatch`: Clock Out: the real Dispatch says Fazbear could not reach Arnold all night
- `secret-of-the-mimic-f10n4-fazbear-will-send-another`: F10-N4: 'Fazbear will send another'
- `secret-of-the-mimic-f10n4-suit-cannot-see`: F10-N4: the endoskeleton 'can not see you in that suit'
- `secret-of-the-mimic-mxes-acronym-on-screen`: Terminal in the Inventor's House: 'Mechanical X-form Experimental Storage #1'
- `secret-of-the-mimic-experimental-storage-2-mimic-blueprints`: Executive terminal: 'Experimental Storage #2' holds the M.I.M.I.C. blueprints
- `secret-of-the-mimic-edwin-pc-alt-fazbear-designs`: Edwin's computer menu: 'ALT FAZBEAR DESIGNS' and 'PUPPET DESIGNS'
- `secret-of-the-mimic-mcm-memo-1974`: MCM memo dated 04/23/1974: 'another accident could put us further behind schedule'
- `secret-of-the-mimic-mcm-rnd-floor-opening-memo`: MCM memo: a party on July 21 opened the 'new Research and Developent Floor'
- `secret-of-the-mimic-mcm-net-earnings-1965-1975`: Chart: 'Murray's Costume Manor Net Earnings 1965 - 1975'
- `secret-of-the-mimic-mcm-order-forms-1973-1977`: MCM order forms run from 5/4/73 to a pickup on 04/24/1977
- `secret-of-the-mimic-log-friends`: Edwin: 'They don't think of me as a friend anymore'
- `secret-of-the-mimic-log-trust-no-one`: Edwin to himself: 'They're behind it. Don't trust them.'
- `secret-of-the-mimic-log-try-again-build-another`: M1 as Fiona: 'You need to try again. Build another.'
- `secret-of-the-mimic-log-announcement-traitors`: Edwin: 'Attention traitors... You stole my work.'
- `secret-of-the-mimic-log-turn-around-lost-temper`: Edwin to M2: 'I... lost my temper. I was always going to fix you'
- `secret-of-the-mimic-mail-moving-on-poached`: Staff message: hired after one interview, with a bonus for bringing more Murray employees
- `secret-of-the-mimic-mail-group-chat-turning-down-work`: Staff message: Edwin turns down work and 'just sits in his office talking to that thing'
- `secret-of-the-mimic-mail-technicians-attacked`: Messages from trapped intruders: 'A maniac in a costume chasing me'
- `secret-of-the-mimic-mail-wa-far-behind`: 'WA' letter: the offer is fair 'considering how far behind you are'
- `secret-of-the-mimic-film-yellow-playground`: Last birthday film: 'I left him out at the playground'
- `secret-of-the-mimic-ad-chicas-party-world`: Commercial: 'Roll on down to Chica's Party World!'
- `secret-of-the-mimic-ad-clean-o-vac-adjusts-size`: Commercial: the Clean-O-Vac can 'adjust its size' and be 'a friend for life'
- `secret-of-the-mimic-story-time-animal-band`: The bedtime story: a bear, a pirate fox, a chicken, a bunny, a gator and a puppy 'started a band'
- `secret-of-the-mimic-mockup-pizzeria-layout`: The R&D mock-up has a stage, a pirate cove, an office and a hidden back room
- `secret-of-the-mimic-fredbears-diner-poster`: Poster in the game: 'JOIN US AT... FREDBEAR'S FAMILY DINER' with a yellow rabbit
- `secret-of-the-mimic-white-tiger-first-birthday`: The White Tiger doll was David's first birthday present
- `secret-of-the-mimic-film-green-pirate-gift`: Birthday film: Fiona's handmade gift, which Edwin voices as a pirate
- `secret-of-the-mimic-log-power-surges-tunnels`: Edwin: power surges, and 'extreme caution' in the tunnels
- `secret-of-the-mimic-mail-old-elevator-below`: Staff message: an elevator that has not worked 'in so long' Murray may not know what is down there

### Fixed: 37 existing records changed in substance, 51 re-dated only, 9 given cross-references only (64 untouched)

**Place tag (12 records).** `ffps-pizzeria` changed to `buried-pizzeria` on `security-breach-freddy-been-here-before`, `security-breach-freddy-i-am-not-me`, `security-breach-gregory-what-is-that-thing`, `security-breach-ending-burn-it-all-down`, `security-breach-burntrap-name-not-in-game`, `security-breach-burntrap-appearance`, `security-breach-underground-pizza-place`, `security-breach-tangle-composition`, `security-breach-shattered-glamrocks-underground`, `ruin-mxes-hub`, `ruin-mimic-reveal`, `ruin-candy-cadet-story`. The old tag stated the conclusion that the buried building is Pizzeria Simulator's; that is an inference (2.3) and belongs in the theory.

**Fan and file labels removed from claims, titles and locations (13 records).**
- `security-breach-ending-burn-it-all-down`: "Burntrap" and "the Tangle (Blob)" replaced by descriptions; stars and trigger added.
- `security-breach-underground-pizza-place`: "Burntrap" dropped; note on the Pizzeria Simulator slide and on the work lights standing at the entrance.
- `security-breach-tangle-composition`: retitled; note describing the render (one clear face, Funtime Freddy-style).
- `security-breach-shattered-glamrocks-underground`: "shattered" and "Burntrap" dropped.
- `security-breach-burntrap-appearance`: location reworded; note after viewing the close-up: mostly bare endoskeleton below the head, and "human-looking jawbone" describes a look, not verified remains.
- `security-breach-burntrap-name-not-in-game`: note with Scott's account of the name.
- `ruin-the-entity`: "the Entity" is the wiki's label; the characters say "that rabbit thing".
- `ruin-vanny-hideout-glitchtrap-shadow`: "Glitchtrap's shadow" is now "the shadow of a rabbit figure"; note ties the cabinet to the Redemption ending.
- `ruin-mxes-hub`, `ruin-something-tunneled`, `ruin-fake-gregory-sinkhole`, `ruin-ending-standard`, `ruin-ending-scooper`: "the Mimic", "the Entity", "Tangle", "Burntrap arena" replaced by descriptions. RUIN never names its endoskeleton. `ruin-ending-standard` also gained a note on the alternative take of Gregory's last line.

**Security Breach, other corrections (5).**
- `security-breach-intro-not-in-database`: verbatim quote added ("Scanning complete. How odd. Your guest profile is unknown to me. Who are you?"); certainty shown to stated.
- `security-breach-ending-rooftop`, `security-breach-ending-disassemble-vanny`: stars and triggers added.
- `security-breach-freddy-where-i-was-born`: note with the rest of the speech ("Am I Monty with a different shell?").
- `security-breach-vanessa-no-record`: note with the preceding line.

**RUIN, other corrections (4).**
- `ruin-pizzaplex-abandoned-earthquake`: headline quote and image added after reading the newspaper texture.
- `ruin-candy-cadet-story`: verbatim quote; the claim's ending was wrong ("used it to lure the boy to the basement") and now follows the transcript (the boy opens the door).
- `ruin-mask-bot-helpi-vanni`: note now says what was and was not verified about the acronym, and records the two wiki wordings on who cannot see the wearer.
- `ruin-ending-safe-spot`: verbatim subtitle and image added; note records that the scene is the Redemption ending's hill with Helpi in Freddy's place.

**Secret of the Mimic, content (9).**
- `secret-of-the-mimic-mxes-machine`: the largest correction. It claimed the cabinet in RUIN "is" Murray's and that the acronym's expansion was not shown. It now states what was checked (same cabinet design, different nameplates), is "shown" not "implied", has an image, and points to the terminal that does print the expansion.
- `secret-of-the-mimic-arnold-assignment`: "retrieve the prototype" was the wiki summary's phrase, not Dispatch's; claim corrected, Arnold's line added as the quote.
- `secret-of-the-mimic-log-turn-around`: "after a detonation in his office" removed; that was M2 reciting Edwin's journal.
- `secret-of-the-mimic-mail-springlocks-hen`: note: written to the living Fiona; the diner poster is now verified; Chica's Party World is the other candidate.
- `secret-of-the-mimic-mail-foreclosure`: dated 3 August 1979 (approximate) with the five-week arithmetic.
- `secret-of-the-mimic-mail-party-canceled`: note with the weekday inference, flagged as inference.
- `secret-of-the-mimic-teaser-1979`: note and date corrected: the year is in the game.
- `secret-of-the-mimic-rnd-proto-pizzeria`: person tag for Spring Bonnie; note.
- `secret-of-the-mimic-mail-chicas-party-world`: quote trimmed from 36 words to 35.

**Into the Pit, content (2).**
- `into-the-pit-past-year-1985`: was "implied", sourced to wiki summaries. Now "shown": the logo graphic with the year, quoted, with image and caveats.
- `into-the-pit-yellow-rabbit-naming`: its note said nothing of speech; the creature speaks, and the lines are now separate records.

**Dating only (51 records: 10 + 2 + 24 + 15).** Eight records in the groups above were re-dated in the same way along with their other changes.
- Secret of the Mimic's present-night records were labelled "in-game year not stated; teaser showed '1979'". All 13 now carry year 1979, precision exact, with the work order as basis (10 changed in nothing else).
- Two film-reel records (`secret-of-the-mimic-film-m1-birthday-cake`, `secret-of-the-mimic-stay-up-latte`) were dated to the present night; they show the past and moved to "Murray family history".
- The 27 "Murray family history" records keep their relative label and gain a basis that cites the dated night (24 changed in nothing else).
- The 17 Into the Pit records set in the past keep "1985, approximate" and gain a correct basis: the logo graphic, no calendar, no spoken year (15 changed in nothing else).

**Cross-references only (9 records).** `related` links added on `security-breach-msg-missing-bonnie`, `security-breach-freddy-vanny-vanessa-bunny`, `security-breach-cd-vanessa-encrypted-conversation`, `security-breach-cd46-therapists-missing-dead`, `security-breach-ending-redemption`, `ruin-cassie-seeks-gregory`, `ruin-gregory-mxes-explanation`, `into-the-pit-mill-closure`, `secret-of-the-mimic-mail-david-party`.

**Images and credits.** Eleven images added to `public/img/`, each with a credit entry (section 5 lists them). Two are composites and are captioned as such: three in-game screenshots of the cabinets, and the eight comic pages. No fan art and no wiki renders were used.

**Left as found, for the lead to decide.** Two older notes name the wiki's book-derived identification ("Henry Emily") in order to say the game does not give it: `into-the-pit-strange-photo`, `secret-of-the-mimic-log-build-to-spec`. One Scott statement is filed in this slice's file because it concerns RUIN: `scott-2024-interview-mxes-name-thought-through`; it could move to `scott.json`.

**Not recorded on purpose.** Cut dialogue from Secret of the Mimic (including a Dispatch line that would name the contract's subject as an endoskeleton for "our new restaurant project"); anything the wiki sources to the Tales from the Pizzaplex or Fazbear Frights books; the wiki's identifications of the two men in Into the Pit's photograph; two overdue utility bills that print no account holder (mentioned in a note only).

## 8. Could not verify

Each item says what would settle it. None of these is asserted in a record as fact; where a record touches one, its note says so.

**Security Breach**
1. *A staff message about bots dragging things below.* Not in the wiki's Duffel Bags transcript; no record made. A text dump of the game's messages would settle whether it exists.
2. *Who built the Pizzaplex and when.* No year, calendar or founder was found; only "reopen" (`security-breach-msg-it-is-happening-again`) and the construction messages. A search of in-game signage and whiteboards would settle it.
3. *The buried pizzeria's layout against Pizzeria Simulator's.* Only the sign and entrance were viewed. A walkthrough compared with that game's office and floor plan would settle it; for now the match is the name alone.
4. *Whether anything on the burnt rabbit is organic.* The model viewer or game files would settle it (`security-breach-burntrap-appearance`).
5. *Princess Quest 2 and 3 and the Old Man's lines.* Recorded from wiki descriptions, not watched (`security-breach-pq2-old-man-fnaf1-office`, `security-breach-pq3-help-wanted-hub-trapped-door`). Footage would settle the "ERROR" screen, the scream and the door.
6. *Why Vanessa and the costumed woman are both on the roof.* Nothing in any game explains it.

**RUIN**
7. *The exact expansion of V.A.N.N.I. as Helpi says it.* The wiki gives "Virtual Augmented Neural Network Integration"; Helpi's line was not retrieved (`ruin-mask-bot-helpi-vanni`). Subtitled footage of the mask scene would settle it.
8. *Who the mask hides the wearer from.* The wiki says "animatronics" in one place and "Glamrock Endos" in another.
9. *"PROTOTYPE" under the headless Freddy's foot, and Bonnie's hidden room.* Both from wiki descriptions (`ruin-prototype-freddy-headless`, `ruin-glamrock-bonnie-remains-hidden-room`); a screenshot of each would settle them.
10. *Whether the burnt rabbit is anywhere in RUIN.* A screenshot of its room shows the capsule standing; whether it is occupied was not established.
11. *A backpack said to be Gregory's in the M.X.E.S. room.* Wiki only; not recorded.
12. *Which RUIN ending stands, and whether the last voice in the elevator is the real Gregory.*
13. *That the costumes in the sealed chamber are Murray's.* The wiki says so and the same elephant, lion and penguin recur; the models were compared from one screenshot only (`ruin-mimic-lair-mcm-mascot-suits`).

**Into the Pit**
14. *Where the 1985 logo is displayed, and whether any calendar exists in the game.* The wiki captions the graphic "seen in the arcades"; the arcade room art viewed does not show it (`into-the-pit-past-year-1985`). Footage of an arcade cabinet's boot screen would settle it.
15. *Six bodies in the party room.* The count is the wiki's; the scene was not counted by eye (`into-the-pit-prologue-mci`).
16. *Wording of the family at Jeff's, the Ghostbusters children and the mill fathers.* From wiki summaries; those three records carry no quote.
17. *Contents of the three secret minigames.* From wiki pages, not watched (`into-the-pit-secret-minigames-other-stories`).
18. *Any marker of the game's own status.* None was found in the transcripts read; that is absence in what was checked, not proof of absence.

**Secret of the Mimic**
19. *The last digit of the year on the R&D-floor memo.* The wiki reads 1975 (`secret-of-the-mimic-mcm-rnd-floor-opening-memo`). A full-resolution copy would settle it, and with it the earliest date for the mock-up pizzeria and M2's lair.
20. *The year Fiona died, and the year David died.* Neither is printed. December 1975 for David is weekday arithmetic.
21. *How David died.* The game stops at "I left him out at the playground".
22. *What became of Edwin, and what injured him.*
23. *Who speaks the briefing that describes the endoskeleton.* The real dispatcher or M1 imitating him (`secret-of-the-mimic-dispatch-endoskeleton-any-costume`). The wiki lists the lines under the real Dispatch.
24. *Where the Fredbear's Family Diner poster hangs, and where the "Edwin Personal Computer" and "Experimental Storage #2" terminals are.* Textures and screenshots were read without their rooms.
25. *What the "ALT FAZBEAR DESIGNS" and "PUPPET DESIGNS" folders contain.*
26. *The White Tiger line from Moon.EXE.* Quoted from the wiki, screen not viewed (`secret-of-the-mimic-white-tiger-first-birthday`).
27. *Who wrote the two messages from people trapped in the building.* Unsigned; the wiki gives them to the earlier technicians (`secret-of-the-mimic-mail-technicians-attacked`).
28. *Which ending stands.* Help Wanted 2 shows the cabinet in a van beside Murray's shopfront (`hw2-mimic-teaser-mxes-ending`); no recorded ending of Secret of the Mimic shows it being loaded.
29. *How the endoskeleton and the cabinet came to be under the Pizzaplex.* No record in any game.

**Across the slice**
30. No playthrough footage was watched for any of the four games. Dialogue and messages came from the wiki's transcript pages; documents, posters and scenes were read by eye from the wiki's images of in-game material. Scott's 2024 interview was read from the video's captions.
