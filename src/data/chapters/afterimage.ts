import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 8: The afterimage (After the fire).
 * What comes back when the company does: its own history as a game, a rabbit in the code, a woman who follows it, and one night in its largest building.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "cover-story", part: "afterimage", title: "The company comes back",
    question: "Are the earlier games just fiction inside the story, and what did Fazbear Entertainment know?",
    answer: "The events were real. Inside the story, games were later made about them, and the company now calls the whole history the invention of \"a complete lunatic\". It is one continuous actor: every explanation it gives is a denial or a programming quirk, and when it comes back it sells its own past as entertainment.",
    confidence: "high",
    hero: { image: "scottgames-hw-working-as-intended.jpg", caption: "Scott's first teaser for Help Wanted, in the company's own voice: \"Everything is working as intended!\" [[scottgames-site-hw-working-as-intended]]" },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["ffps-completion-tutorial-atonement", "scott-2019-only-game-developer-existence-canon"],
    tension: "Pizzeria Simulator's certificate says the company was \"atoning for past mistakes\" and is \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]], which reads like remorse and like an ending. The next game shows it back, suing people and commissioning a comedy about its own history, so the model reads the certificate as part of the Cassette Man's trap and not as a change of heart. And Scott made canon only that an in-universe developer exists, whose games \"may or may not be a cover up\" [[scott-2019-only-game-developer-existence-canon]]: that is why \"the games are the cover-up\" is held as a strong reading and not as fact.",
    changesIf: "A game that shows new owners who really do not know the past, or a statement from Scott on what the in-universe games got wrong.",
    seeAlso: ["digital", "fnaf1-restaurant", "november-1987", "ffps", "pizzaplex", "canon-rules"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "hw-tape-13-cover-story", // [stated] Tape 13: The PR cover story told to the devs
      "hw-tape-13-fe-hired-developer", // [stated] Tape 13: Fazbear Entertainment hired the indie developer
      "hw-intro-loosely-based-on-actual-events", // [stated] Fazbear admits some stories were based on real events
      "hw-intro-complete-lunatic", // [stated] The rest blamed on 'a complete lunatic (lawsuits pending)'
      "hw-intro-vr-game-to-move-past-ghost-stories", // [stated] The VR game exists to laugh off the stories
      "scott-not-part-of-lore", // [stated] Scott: he himself is not part of the lore
      "sd-rebuilds-of-original-animatronics", // [stated] Fazbear staff call the service's animatronics 'rebuilds' of 'the original'
      "scott-2019-hw-rebrand-or-part-of-the-plan", // [stated] Help Wanted's premise in Scott's words: '(Or was it all part of the plan?)'
      // support
      "fnaf1-call1-company-disclaimer", // [stated] Fazbear Entertainment liability greeting
      "fnaf3-tape4-do-as-you-wish", // [stated] 'We are free of liability, do as you wish'
      "fnaf3-tape6-not-to-be-mentioned", // [stated] The sealed room is not to be mentioned to family, friends or insurers
      "fnaf4-pigtail-girl-hide-your-body", // [stated] 'They hide your body'
      "ffps-tutorial-rebranded-disclaimer", // [stated] 'Newly re-branded Freddy Fazbear's Pizza' and liability disclaimer
      "ffps-insanity-certificate", // [stated] Insanity ending: fired so that 'no one believes you'
      "ffps-blacklisted-ending", // [stated] Blacklisted ending: security footage wiped
      "ffps-lawsuits-utah", // [stated] Lawsuits are filed in Washington County, Utah
      "hw-handunit-unauthorized-portion", // [stated] Warning about the unauthorized portion of the game
      "hw-handunit-unauthorized-personnel", // [stated] Avoid 'embedded messages from unauthorized personnel'
      "hw-handunit-credits-no-skeletons", // [stated] Post-credits: 'nothing left to see', 'no skeletons in our closet'
      "hw-game-over-court-of-law", // [stated] Game-over TV: 'Nothing was ever proven in a court of law.'
      "hw-intro-indie-developer-poster", // [shown] Intro shows a photo of the 'indie developer'
      "hw-intro-closed-police-line-poster", // [shown] Intro poster: a Freddy Fazbear's storefront, closed and police-taped
      "hw-hub-menu-fnaf-1", // [shown] The VR game's menu files its levels under 'FNAF 1'
      "sd-mangle-original-restaurants", // [stated] Customer email: the Mangle 'from the original restaurants'
      "hw2-job-interview-ice-cream", // [stated] Job Interview: Circus Baby plays 'office' and offers ice cream from her hatch
      "hw2-first-aid-simulated-pizza-place", // [stated] First Aid is set in 'a simulated Pizza Place training booth'
      "hw2-fazerblast-fnaf-themed", // [stated] Fazerblast galleries are 'FNAF 1', 'FNAF 2' and 'FNAF 3' themed
      "scott-2019-indie-dev-photo", // [stated] Scott's photo used for the in-game indie developer, but it is not him
      "scott-2019-silver-parasol-logo", // [stated] Silver Parasol Games logo = the 'other game developer' in Help Wanted
      // colour
      "hw-handunit-risk-assessment", // [stated] 'Staying in your lane' per risk assessment
      "hw-vent-repair-circus-baby-zero-days", // [stated] Vent Repair set at Circus Baby's Entertainment and Rental
      "hw-pns-foxy-former-employee", // [stated] A former employee used the wrong fuse on Foxy
      "hw-pns-freddy-child-items", // [stated] A child's hat, watch and shoe inside Freddy
      "hw-game-over-animatronics-cant-kill", // [stated] Game-over 'Faz-Fact': 'Animatronics can't kill you.'
      "codb-handunit-no-hidden-intent", // [stated] DLC has 'absolutely no hidden intent or purpose'
      "codb-hallway-ends-in-fnaf4-bedroom", // [shown] Hallway Crawl ends in FNaF4's bedroom
      "hw2-sister-location-section", // [stated] A 'Sister Location' section restages that game for staff training
    ],
  },
  {
    id: "digital", part: "afterimage", title: "The rabbit in the code",
    question: "What is the rabbit in Help Wanted's code?",
    answer: "A personality that came off old company circuit boards scanned into the VR game, and that acts with purpose once it is there. It wears the killer's kind of costume and stages his kind of lure. The model reads it as something of William Afton: not the whole man, and not Murray's machine. Which board it came from, no game says.",
    confidence: "medium",
    hero: { image: "hw-trapped-ending-door.jpg", caption: "Help Wanted's Trapped ending: the rabbit figure behind the hatch of a sealed door, a finger to its lips [[hw-trapped-ending]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Help Wanted's tapes say the client sent old circuit boards to be scanned so the studio could skip programming, and code on them \"took hold by itself\" until \"he\" appeared [[hw-tape-05]]. Fazbear's own guide admits it used vintage control boards to recreate \"personalities from the past\" [[hw-handunit-vintage-control-boards]]. The anomaly is a purple rabbit [[hw-tape-room-glitchtrap]]. In the hidden Princess Quest, a cipher and reversed audio decode to \"I always come back. Let me out.\" [[hw-mobile-princess-quest-ending]], echoing Scraptrap's own line [[ffps-scraptrap-always-come-back]]. The wording depends on fan decoding.",
      "This archive reads Glitchtrap as **Afton-derived code**: a personality carried on boards from his machines. The games establish the boards, the personality and the line. They do not establish personal continuity, so an imitation, a copy, or the man himself all remain possible. The status is theory.",
      "It spreads when boards are scanned. Special Delivery's emails, dated <<Nov 2019 – Mar 2020|printed|sd-ness-blood-eagle-calendar,sd-circuit-board-does-what-we-tell-it|Printed on the in-game emails.>>, record contractors drilling boards out of animatronics [[sd-contractor-circuit-boards-drilled]], a virus released by scanning the last one [[sd-circuit-board-scan-virus]], and Fazbear Legal ordering all vintage-hardware work stopped [[sd-fe-legal-halt-vintage-hardware]]. Meanwhile Fazbear blames the stories on \"a complete lunatic\" [[hw-intro-complete-lunatic]], after hiring an indie developer to make light of real events [[hw-tape-13-fe-hired-developer]]. It recruits people too. Ness searches how to induce compliance in human subjects and orders human rubber masks [[sd-ness-compliance-searches]] [[sd-ness-rubber-masks]], and a young woman's hidden call says she has \"it\" [[codb-mask-plush-voice]].",
    ],
    counterEvidence: ["sd-which-board-unknown", "hw-tape-girl-calls-it-the-anomaly", "hw-glitchtrap-uses-tape-girl-voice", "hw-mobile-princess-quest-ending"],
    tension: "No game says whose board it was [[sd-which-board-unknown]], and the game's own word for the figure is \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]]: the name fans use asserts an identity the games do not. The line that ties it most closely to the killer exists only as a fan decoding of glyphs [[hw-mobile-princess-quest-ending]]. And its one speech in the hub is the tape speaker's own greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]]: a borrowed voice, which is how the copying machine of the last chapters works. That is the best case for the rival reading, that the thing in the code was Murray's machine from the start. The model keeps \"something of Afton\" because the copying machine is a body sealed underground \"for a really long time\" while this arrived as code on boards in a studio, and it holds that at medium.",
    changesIf: "A game that says which machine the boards came from.",
    seeAlso: ["cover-story", "vanny", "killer", "mimic", "burntrap", "patterns"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "hw-tape-03", // [stated] Tape 3: Lawsuit and incident in the building
      "hw-tape-07", // [stated] Tape 7: Jeremy's nightmares and decline
      "hw-tape-09", // [stated] Tape 9: 'Halloween mask' and ink in the testing room
      "hw-tape-15", // [stated] Tape 15: Logs as a Trojan Horse
      "hw-tape-16", // [stated] Tape 16: How to kill it: merge, music, switch
      "hw-jeremy-self-injury-implied", // [implied] Jeremy's injury implied across tapes 4 and 9
      "hw-handunit-anomaly-fun-fact", // [stated] 'A hilarious mistake' let an anomaly in
      "hw-pizza-party-ending", // [shown] Pizza Party ending: the rabbit figure beckons, player ends up on stage as Freddy
      "sd-vintage-bonnie-reports", // [stated] Customers report an unlisted 'vintage Bonnie model'
      "hw-rabbit-figure-appearance", // [shown] What the anomaly looks like: a man-shaped figure in a yellow rabbit costume
      "hw-mobile-princess-quest-final-room", // [shown] Princess Quest's final room: a purple rabbit-eared mass and a line of glyphs
      "sd-cpu-whole-new-personality", // [stated] Swapping a CPU gives an animatronic 'a whole new personality'
      "scott-2024-interview-glitchtrap-possession-of-ai", // [stated] 2024: Glitchtrap as 'possession of AI or possession of machines or circuitry'
      // support
      "hw-tape-01", // [stated] Tape 1: Logs hidden from core game files
      "hw-tape-02", // [stated] Tape 2: First sighting of the character
      "hw-tape-04", // [stated] Tape 4: Guillotine paper slicer
      "hw-tape-06", // [stated] Tape 6: Supply room glowing, Jeremy in testing room
      "hw-tape-08", // [stated] Tape 8: Paper trail to discredit Jeremy
      "hw-tape-10", // [stated] Tape 10: Buyout and a new studio
      "hw-tape-11", // [stated] Tape 11: The anomaly attached itself to her logs
      "hw-tape-12", // [stated] Tape 12: The protected area became its hiding place
      "hw-tape-14", // [stated] Tape 14: Logs fragmented to break the anomaly
      "hw-glitchtrap-approaches-with-tapes", // [shown] The rabbit figure draws nearer as tapes are collected
      "hw-waiver-consciousness-transference", // [stated] Waiver: 'accidental digital consciousness transference'
      "hw-handunit-beta-artifacts", // [stated] Warning about beta-testing 'visual artifacts'
      "hw-handunit-scanned-photos-original-routines", // [stated] Built from scanned photographs and original routines
      "hw-handunit-first-dev-team-pulled", // [stated] First development team was pulled from the project
      "hw-pizza-party-spring-bonnie-plush", // [shown] Pizza Party: a yellow rabbit plush follows the player
      "hw-pizza-party-favorite-cake-pizza", // [shown] Pizza Party: player picks cake flavor and pizza topping
      "hw-pizza-party-springtrap-window", // [shown] Pizza Party: Springtrap stares through the office window
      "hw-merge-ending", // [shown] Merge ending: the rabbit figure takes over the player
      "hw-game-over-remember-jeremy", // [stated] Game-over TV: 'Remember Jeremy.'
      "scottgames-hw-teaser-hidden-text", // [stated] Help Wanted teaser hidden text
      "sd-virus-traced-to-fe-board", // [stated] Virus traced to a Fazbear Entertainment circuit board scan
      "sd-springtrap-did-not-save-the-others", // [stated] Springtrap: 'It did not save the others'
      "hw2-glitchtrap-corrupts-backstage", // [shown] The rabbit figure corrupts instruction screens
      "hw2-fazerblast-fire-springtrap", // [shown] Fazerblast fire reveals a Springtrap cutout
      "hw-tape-05-client-sent-junk-to-scan", // [stated] Tape 5: drawers emptied overnight; the client sent 'that stuff' unexplained
      "hw-intro-waiver-not-based-on-testing-injuries", // [stated] Intro: the waiver 'isn't at all based on... injuries associated with testing'
      "hw-pizza-party-birthday-room", // [shown] Pizza Party's last room is dressed for a birthday
      "sd-contractor-storing-animatronics", // [stated] Contractor staff: 'These things are creeping me out'
      "sd-fe-halts-all-contractors", // [stated] Anna Kwemto: Fazbear is halting work with all its contractors
      "sd-circus-baby-something-bad-inside", // [stated] AR Circus Baby: 'We need you, so that we have a place to hide'
      "scottgames-site-hw-alt-remember-jeremy", // [stated] Help Wanted teaser page source: alt text 'remember Jeremy'
      // colour
      "hw-credits-tape-girl-qa", // [stated] The tape speaker is credited only as 'QA'
      "hw-tape-room-setting", // [shown] The Tape Room
      "hw-handunit-disappeared-from-boundaries", // [stated] Player 'disappeared' from authorized boundaries
      "hw-handunit-pizza-party-glitch", // [stated] Stage announcement glitches in Pizza Party
      "codb-scanning-for-glitches", // [shown] Danger! Keep Out! Night 3: 'Scanning for glitches...'
      "sd-mail-server-advisory", // [stated] Why the player sees these emails
      "sd-ffs-never-alone-ad", // [stated] Fazbear Funtime Service ad: 'never be alone again'
      "sd-tutorial-unit-eternal-package", // [stated] Tutorial Unit: 'Eternal Package'
      "hw2-glitchtrap-hand-puppets", // [shown] Rabbit hand puppets in Bonk a' Bon
      "hw-pizza-party-find-me", // [stated] Pizza Party: red spray paint reads 'FIND ME' and 'THIS WAY'
      "sd-toy-facial-recognition-not-safe", // [stated] R&D: 'Toy Freddy is not safe to go out to the public'
    ],
  },
  {
    id: "vanny", part: "afterimage", title: "The follower",
    question: "Who is Vanny?",
    answer: "Most likely one woman: Vanessa, the Pizzaplex's night guard, acting under the control of whatever writes to her, and earlier the beta tester who took home the rabbit's plush. One ending shows her freed through a hidden arcade game called Princess Quest, the only remedy the games show working on the rabbit.",
    confidence: "medium",
    hero: { image: "hw2-pq4-vanny-crushes-glitchtrap.jpg", caption: "Princess Quest IV, one ending of Help Wanted 2: a giant figure in the rabbit mask closes her hands on the tiny rabbit [[hw2-pq4-vanny-crushes-glitchtrap]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Security Breach ties the name to one person. Freddy notes that \"Vanny\" sounds like both Vanessa and Bunny [[security-breach-freddy-vanny-vanessa-bunny]], and Vanessa's therapy notes show her buying fake fur for a secret costume because \"He said he would always be watching\" [[security-breach-cd-vanessa-costume-fur]]. The Special Delivery \"Ness\", who is linked to an IT worker named Luis just as Vanessa is [[security-breach-cd-vanessa-encrypted-conversation]] [[sd-ness-interested-in-it]], is plausibly Vanessa earlier on.",
      "One ending complicates this. The Vanny unmasked on the roof is a blonde woman [[security-breach-rooftop-unmasked]], and the same ending shows Vanessa alive on the roof afterwards [[security-breach-rooftop-vanessa-alive]]. This archive offers a **hypothesis**. RUIN's Security Mask introduces its AI as the Virtual Augmented Neural Network Integration unit [[ruin-mask-bot-helpi-vanni]], and Help Wanted 2 calls its trainee's headset \"the Vanny mask\" [[hw2-pq4-vanny-mask-trade]]. \"Vanny\" may name a role anyone can be pulled into, not a single woman. The games never say so outright.",
      "Security Breach's endings are **alternative branches**. The rooftop unmasking, the Princess Quest redemption [[security-breach-ending-redemption]] and the others cannot be stacked into one chronology. Scott's own teasers split the figure too: a security guard captioned \"PROTECT\" [[scottgames-site-sb-protect]] and a rabbit captioned \"OBEY\" [[scottgames-site-sb-obey]]. In Help Wanted 2's secret ending, a Vanny crushes Glitchtrap [[hw2-pq4-vanny-crushes-glitchtrap]].",
    ],
    counterEvidence: ["security-breach-rooftop-vanessa-alive", "ruin-gregory-comics-depict-endings", "hw2-pq4-consequences-achievement"],
    tension: "One page will not fit: after the rooftop ending, Vanessa stands in uniform on the burning roof while the woman in the rabbit costume lies below [[security-breach-rooftop-vanessa-alive]]. Two women would explain it. The model keeps one, because finishing Princess Quest leaves the mask on the floor and Vanessa at the door, because the therapist's recordings are about her costume, and because Freddy spells the name out; it calls the page an anomaly and builds nothing on it. On which ending stands, Gregory's comics draw every ending except the Princess Quest one [[ruin-gregory-comics-depict-endings]], which reads either as \"the others are his stories\" or as \"he saw those things\". And the fourth game's achievement reports \"System threats found. Repair complete.\" [[hw2-pq4-consequences-achievement]], as though the rabbit were the whole threat; the last chapters say why it is not.",
    changesIf: "A game that shows two women together, names the caller on the hidden call, or says which Security Breach ending happened.",
    seeAlso: ["digital", "pizzaplex", "mimic", "burntrap", "patterns"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "hw-trapped-ending", // [shown] Trapped ending: the rabbit figure behind a sealed door, a plush left behind
      "codb-corn-maze-rabbit-mask", // [shown] Corn Maze secret: the rabbit mask
      "codb-mask-plush-voice", // [stated] Hidden call: 'I have it. I made it myself.'
      "sd-ness-blood-eagle-calendar", // [stated] Luis flags Ness's 'torture' searches
      "sd-ness-compliance-searches", // [stated] Ness searched 'how to induce compliance in human subjects'
      "sd-ness-voices-at-screen", // [stated] Ness in 'another world' at her screen, voices heard
      "hw-trapped-ending-plush", // [shown] The plush left by the Trapped ending: a bright green rabbit
      "hw2-poster-take-off-your-mask", // [stated] Staff poster: 'CLOCKING OUT? ALREADY? TAKE OFF YOUR MASK!'
      "scottgames-sb-source-stay-the-course", // [stated] scottgames.com page source: 'Stay the course.' 'I will.'
      "security-breach-msg-marked-for-deletion", // [stated] Vanessa hired on a recommendation 'from the top'
      "security-breach-freddy-cannot-see-rabbit-lady", // [stated] Freddy did not see the 'dancing rabbit lady' right in front of him
      "security-breach-cd-vanessa-manipulative-messages", // [stated] Therapist: manipulative messages to Vanessa, from someone who hacked her personal files
      "security-breach-pq3-help-wanted-hub-trapped-door", // [shown] Princess Quest 3 ends at Help Wanted's sealed door, a scream and 'ERROR'
      "scottgames-site-sb-source-stay-the-course", // [stated] Security Breach page source: 'Focus on my voice.' / 'Have you selected one?' / 'I have.'
      // support
      "hw-waiver-qa-team", // [stated] The player is joining Fazbear's QA team
      "hw-mobile-princess-quest-unlock", // [shown] Princess Quest hidden in the mobile port
      "sd-ness-cut-in-half-search", // [stated] Ness searched how far a human can be cut in half
      "sd-ness-rubber-masks", // [stated] Ness ordered three human male rubber masks
      "hw2-pq4-unlock", // [shown] Princess Quest IV unlocked by the memories
      "hw2-pq4-old-man", // [stated] Princess Quest IV: the Old Man
      "hw2-pq4-player-enters-game", // [shown] PQ IV: the Princess pulls the player into the game
      "hw2-pq4-elevator-claw-machine", // [shown] PQ IV: Sister Location elevator into a claw machine
      "hw2-springtrap-cutout-pq3-scream", // [implied] Springtrap cutout shares the scream that ends Princess Quest III
      "codb-mask-plush-voice-opening", // [stated] Hidden call, opening: 'Yes, I hear you... There's no miscommunication'
      "hw2-credits-vanny", // [stated] Cast credits list a 'Vanny' role
      "hw2-pq4-alpha-take-it", // [stated] The cabinet reads 'Princess Quest IV'; its title screen, 'Princess Quest (Alpha)'
      "security-breach-msg-stolen-property", // [stated] Vanessa report: Music Man prototypes stolen with no break-in
      "security-breach-msg-false-alarm", // [stated] Vanessa turns away a police officer
      "security-breach-msg-no-questions-asked", // [implied] Head Security Guard hired with an anonymous internal reference
      "security-breach-msg-arcade-conspiracy", // [stated] Exit interview: 'I can save the Princess!'
      "security-breach-msg-red-flag", // [stated] Maintenance log: beat Princess Quest 1 and 2, PQ3 won't turn on
      "security-breach-msg-out-of-order", // [stated] No record of a PQ3 arcade exists
      "security-breach-msg-pq1-maint-log", // [stated] Princess Quest 1 pulled from 'that old mobile game'
      "security-breach-gregory-finds-vanny-hideout", // [stated] Gregory: 'I think her name is.. Vanny?'
      "security-breach-vanny-lines", // [stated] Vanny's spoken lines
      "security-breach-cd-vanessa-father-bill", // [stated] Vanessa's father is named Bill
      "security-breach-cd-vanessa-transfer", // [stated] Vanessa is transferring 'to a different location'
      "security-breach-freddy-no-rabbit-not-anymore", // [stated] Freddy: 'There is no rabbit at the Mega Pizzaplex... Not anymore.'
      "security-breach-pq2-old-man-fnaf1-office", // [shown] Princess Quest 2: the Old Man's sword of light, and a door to a FNaF1-style office
      "scottgames-site-sb-rock-rabbit-figure-added", // [shown] Security Breach 'ROCK!' teaser, second version: a rabbit-eared figure on the balcony
      "scott-2024-interview-vanny-underused", // [stated] 2024: Vanny 'was not utilized to her fullest potential'
      // colour
      "security-breach-vanessa-6am-reward", // [stated] Vanessa at 6 AM offers Gregory a job and a reward
    ],
  },
  {
    id: "pizzaplex", part: "afterimage", title: "One night at the Pizzaplex",
    question: "What is going on at the Pizzaplex, and who is Gregory?",
    answer: "The company's biggest building stands on top of a burnt one, its staff have been going missing, and a woman in a rabbit mask walks it at night. Gregory is a human boy with no record in the company's systems who lives through one night there. The game's endings are branches. For the people in them, the model follows the one in which Vanessa is freed; for the building, the sequel matches none.",
    confidence: "medium",
    hero: { image: "ruin-gregory-comic-pages.jpg", caption: "Eight comic pages found in RUIN and attributed to Gregory: they draw the scenes of Security Breach's other endings [[ruin-gregory-comics-depict-endings]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["security-breach-ending-alley", "ruin-gregory-comics-depict-endings", "security-breach-rooftop-vanessa-alive"],
    tension: "The game gives six endings and no ruling between them. One leaves Gregory asleep in a box in an alley with the woman in the rabbit costume standing over him [[security-breach-ending-alley]], which no later game undoes on screen. Gregory's comics draw every ending except the one the model follows [[ruin-gregory-comics-depict-endings]]. And the rooftop ending's last page shows Vanessa alive beside the fallen Vanny [[security-breach-rooftop-vanessa-alive]]. The model follows the Princess Quest ending for the people because RUIN finds that cabinet run through and returns to that ending's hill. It says \"follows\", not \"is\": Scott has said, in an interview on record as a transcript, that the game's story is very different from the one he had in mind.",
    changesIf: "A game that says which Security Breach ending happened, or names client 46.",
    seeAlso: ["vanny", "burntrap", "mimic", "cover-story", "two-machines", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "security-breach-msg-all-staff-meeting", // [stated] Mandatory all-staff meeting Thursday 11:30PM
      "security-breach-msg-job-security", // [stated] 'Where is everyone?' - Leo unseen for months
      "security-breach-msg-missing-bonnie", // [stated] Security log tracks Bonnie leaving his green room
      "security-breach-vanessa-no-record", // [stated] Vanessa: there is no record of Gregory
      "security-breach-cd46-hacking-pizzaplex", // [stated] Client 46 suspected of hacking the Pizzaplex
      "security-breach-cd46-rabbit-ears", // [stated] Security still: client 46 talking to something with rabbit ears
      "security-breach-cd46-glitch-subroutines", // [stated] Client 46 traced as the source of the system-wide glitch
      "security-breach-cd46-treated-as-child-phenom", // [stated] Client 46 is spoken to like a child and called a computer 'phenom'
      "ruin-pizzaplex-abandoned-earthquake", // [shown] Pizzaplex abandoned; window newspapers call it an 'earthquake'
      "ruin-vanny-hideout-glitchtrap-shadow", // [shown] The hideout above Fazer Blast: Princess Quest cabinet run through, a rabbit's shadow
      "ruin-ending-safe-spot", // [shown] Safe Spot ending: Gregory, Helpi and Vanessa on a hill
      // counter
      "security-breach-ending-getaway", // [shown] The Getaway: Gregory revives Freddy with a van battery
      "security-breach-ending-rooftop", // [shown] To the Rooftop: Freddy tackles Vanny off the roof
      "security-breach-ending-disassemble-vanny", // [shown] Disassemble Vanny: S.T.A.F.F. bots dismantle Vanny
      // support
      "security-breach-msg-it-is-happening-again", // [stated] Complaint: 'Everyone remembers what happened to those kids'
      "security-breach-msg-pink-slip", // [stated] S.T.A.F.F. bots replace night employees
      "security-breach-msg-understudy", // [stated] Monty replaces Bonnie as bass player
      "security-breach-msg-roxy-upgrade", // [stated] Roxy's eye upgrade lets her see/talk through walls
      "security-breach-msg-monty-upgrade", // [stated] Monty's claw upgrades used to cause damage
      "security-breach-msg-bbw-maint-log", // [stated] BB World cabinet vanished before 'the company meeting'
      "security-breach-msg-night-shift", // [stated] Security employee: 'This place is not safe'
      "security-breach-gregory-more-disappearances", // [stated] Gregory: 'There will be more disappearances'
      "security-breach-freddy-older-models-flawed", // [stated] Freddy: 'Bad things happened in the past... older models'
      "security-breach-intro-not-in-database", // [stated] Freddy finds Gregory is not in the Pizzaplex database
      "security-breach-cd46-therapists-missing-dead", // [stated] Client 46: previous therapists missing, one found mangled by machinery
      "security-breach-alley-newspaper", // [shown] Alley newspaper: 'MISSING' - residents continue to disappear
      "security-breach-6am-choice", // [stated] At 6 AM Freddy offers a choice: leave or investigate
      "security-breach-freddy-cannot-connect-main-network", // [stated] After his crash, Freddy 'cannot connect to the main network'
      "security-breach-vanessa-freddy-system-crash", // [stated] Vanessa: Freddy's 'system crashed'; Parts and Service put him on reduced power
      "security-breach-msg-monty-mischief", // [stated] Message: Monty skips shows and is always found on the catwalks over Monty Golf
      "security-breach-msg-staff-party-question", // [stated] Message: afraid of being laid off for skipping the staff party
      "security-breach-cd-therapists-shared-and-replaced", // [stated] Both clients lose the same therapists, one after another
      "security-breach-cd46-talking-programs", // [stated] Client 46 has 'developed software programs that talk to you and repeat phrases'
      "security-breach-cd46-doing-the-manipulating", // [stated] Fifth therapist to client 46: 'I think you're the one doing the manipulating'
      "ruin-gregory-friend-maps", // [stated] Gregory's 'friend' has the building maps
      "ruin-missing-gregory-poster", // [shown] Missing poster of Gregory
      "ruin-item-bonnie-replaced-dad-wouldnt-say", // [stated] Cassie: 'Dad wouldn't tell me why they replaced Bonnie.'
      "ruin-glamrock-bonnie-remains-hidden-room", // [shown] A wrecked Glamrock Bonnie lies in a hidden room at Bonnie Bowl
      "ruin-roxy-give-me-back-my-eyes", // [stated] Roxy, eyeless, still hunts Gregory: 'GIVE ME BACK MY EYES!!!'
      "ruin-prototype-freddy-headless", // [shown] The headless Freddy in Fazer Blast is marked 'PROTOTYPE'
      // colour
      "hw2-achievement-ggy", // [stated] Achievement 'GGY': 'Beat all high scores.'
      "security-breach-msg-hello-gregory", // [stated] Freddy's first message names Gregory
      "security-breach-msg-night-terrors", // [stated] Daycare complaint: child afraid of the dark
      "security-breach-msg-re-theme", // [stated] Bowling alley Bonnie art removed; kids ask 'Where's Bonnie?'
      "security-breach-msg-chica-report", // [stated] Monty Mystery Mix makes Chica attack people
      "security-breach-msg-chica-upgrade", // [stated] Chica's experimental voice box disrupts other bots
      "security-breach-msg-ac-inspection", // [stated] Contractor: clanging and scraping in the vents not reproducible
      "security-breach-msg-torn-paper", // [stated] Torn paper: 'I found the key'
      "security-breach-freddy-i-miss-him", // [implied] Freddy at Bonnie Bowl: 'I miss him'
      "security-breach-vanessa-knows-gregory-name", // [stated] Vanessa threatens to hold Gregory for parents or police
      "security-breach-freddy-cannot-exit", // [stated] Freddy cannot leave the facility
      "security-breach-sister-location-room-code", // [stated] Hidden Sister Location room wall code
      "security-breach-daycare-attendant-lights", // [stated] Daycare Attendant roams when the lights go out
      "security-breach-msg-behind-the-maze", // [stated] Message: clanging in the vents toward the catwalks over Gator Golf
      "ruin-eclipse", // [shown] Daycare Attendant rebooted as 'Eclipse'
    ],
  },
];
