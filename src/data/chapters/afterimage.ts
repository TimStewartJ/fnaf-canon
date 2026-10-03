import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 8: The afterimage (The modern era).
 * What the company brings back: its own history as a game, a rabbit in the code, a woman who follows it, and one night at the Pizzaplex.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "cover-story", part: "afterimage", title: "The company comes back",
    question: "Are the earlier games just fiction inside the story, and what did Fazbear Entertainment know?",
    answer: "The events were real. Inside the story, games were later made about them, and the company now puts most of that history down to \"a complete lunatic\". It is one continuous actor: nearly every explanation it gives is a denial or a programming quirk, what it admits comes wrapped in a denial or a disclaimer, and it sells its own past as entertainment. What the company knew, the records give only through what it does.",
    confidence: "high",
    hero: { image: "scottgames-hw-working-as-intended.jpg", caption: "Scott's teaser for Help Wanted, in the company's own voice: \"Everything is working as intended!\" [[scottgames-site-hw-working-as-intended]]" },
    body: [
      "Help Wanted is a virtual-reality game, and inside the story it is also a product: {{fazbear-entertainment}}'s own. It opens with a ride past a series of posters and the voice of {{handunit}}, the company's guide. Early on, the voice makes an admission: the company \"has developed something of a bad reputation over the last few decades\", and \"some stories associated with our name were loosely based on actual events\" [[hw-intro-loosely-based-on-actual-events]]. The sentence does not stop there.",
      { kind: "quote", evidence: "hw-intro-complete-lunatic" },
      "So the company has had those \"completely fictitious scenarios (lies)\" rebuilt as \"a hilarious VR Game\", in the hope of moving past the ghost stories [[hw-intro-vr-game-to-move-past-ghost-stories]].",
      { kind: "figure", image: "hw-intro-closed-poster.jpg", caption: "A poster on the company's own ride into Help Wanted: a restaurant closed behind police tape, under the sign \"ALL BUSINESS SUSPENDED UNTIL FURTHER NOTICE.\"", evidence: "hw-intro-closed-police-line-poster" },
      { kind: "heading", text: "The games inside the story" },
      "The voice gives two spans of time: a reputation decades old, and lies fed \"over the last several years\" [[hw-intro-vr-game-to-move-past-ghost-stories]]. So the events came first and games about them came later, and now a VR game is made out of those games, with a set of levels filed under \"FNAF 1\" [[hw-hub-menu-fnaf-1]].",
      "One of the tape recordings that a tester hid in the VR game (see ((digital))) is about those earlier games. The staff were told, she says, that \"the whole point of this VR game was to undo the bad PR done by a rogue indie game developer\" [[hw-tape-13-cover-story]]. Then the client sent a hard drive by mistake, with its emails to that developer on it.",
      { kind: "quote", evidence: "hw-tape-13-fe-hired-developer", text: "Fazbear Entertainment hired the game developer. Those indie games were designed to conceal and make light of what happened." },
      "That is one witness reporting what she read, so the model takes it as most likely true. Scott Cawthon, whose photograph the intro uses for the developer [[hw-intro-indie-developer-poster]], wrote that he is not part of the story [[scott-not-part-of-lore]], and said how much of this is canon.",
      { kind: "quote", evidence: "scott-2019-only-game-developer-existence-canon" },
      { kind: "callout", tone: "key", title: "What the claim changes", text: "It does not unmake the earlier games. A level is the company's staging only when the game around it presents itself as a product inside the story, and none of the main games before Help Wanted does. What they show stays this archive's record of what happened. That they were made as a cover-up is what one tape says and no other record does: a strong reading, not a fact. Scott's post leaves it as a bracketed question: \"(Or was it all part of the plan?)\" [[scott-2019-hw-rebrand-or-part-of-the-plan]]" },
      { kind: "heading", text: "One actor" },
      "Set out what the company says, game by game in the model's order, and one voice runs through it.",
      { kind: "table", head: ["Where", "What the company says"], rows: [
        ["FNaF3's training tapes, undated", "Staff are asked that a sealed room \"not be mentioned to family, friends, or insurance representatives\" [[fnaf3-tape6-not-to-be-mentioned]]."],
        ["FNaF2, <<November 1987|printed|fnaf2-paycheck-1987|The Night 5 cheque is dated 11-12-1987.>>", "That the machines go for the guard is \"a minor...glitch in the system\" [[fnaf2-call1-endoskeleton-glitch]]."],
        ["FNaF2, later that week", "Whatever is going on outside \"has nothing to do with our establishment\" [[fnaf2-call3-rumors]], and then \"Fazbear Entertainment denies any wrongdoing.\" [[fnaf2-call4-investigation]]"],
        ["FNaF1", "When damage or death occurs, \"a missing person report will be filed within 90 days, or as soon as property and premises have been thoroughly cleaned and bleached\" [[fnaf1-call1-company-disclaimer]]."],
        ["Help Wanted", "The company is \"a safe family-friendly brand, with no skeletons in our closet\" [[hw-handunit-credits-no-skeletons]], and \"Nothing was ever proven in a court of law.\" [[hw-game-over-court-of-law]]"],
        ["Security Breach", "With children asking where a missing character is, a staff message asks: \"Do we have an officially approved response?\" [[security-breach-msg-re-theme]]"],
      ] },
      "Where an explanation is offered there, it is a denial or a programming quirk, and what the company concedes comes wrapped. In Help Wanted, \"actual events\" [[hw-intro-loosely-based-on-actual-events]] is followed in the same sentence by the lunatic. A \"hilarious mistake\" in development \"may or may not\" have let something into the code, and the guide offers that sentence as the company's full legal disclaimer [[hw-handunit-anomaly-fun-fact]].",
      "Pizzeria Simulator, whose pizzeria is a trap (see ((ffps))), closes with its tutorial voice apologising that the job was not presented \"in a completely honest fashion\". It adds that Fazbear Entertainment is no longer a corporate entity [[ffps-completion-tutorial-atonement]]. The game does not say whether that voice speaks for the company or only for the Cassette Man, whose trap it is. One of the trap's devices is marked Fazbear Entertainment, Inc [[ffps-lefte-blueprint]], and the model holds loosely that he worked through the company. If he did not, the apology is his own.",
      "What the company knew can be read only from what it does. It knows enough to deny each time, and to disclaim \"accidental digital consciousness transference\" in the waiver for its VR game [[hw-waiver-consciousness-transference]]. In the staff emails of another game, Special Delivery, its lawyers halt a contractor's work on \"vintage hardware\" before, by the emails' order, the contractor knows what its scan has let out [[sd-fe-legal-halt-vintage-hardware]]. Its own staff there call an old machine \"the original\" and their own \"our rebuilds\" [[sd-rebuilds-of-original-animatronics]].",
      "Before 1987 there is one night to go on. In Secret of the Mimic, set in <<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979|The year ends the official teaser. The day is on a work order dated 9/07/79, read from an image of the document and not yet confirmed in play.>>, the company claims a contractor's work as \"now legally ours\" [[secret-of-the-mimic-dispatch-contract-legally-ours]]. In the ending where its technician walks away, it dismisses him for misplacing company property [[secret-of-the-mimic-clock-out-real-dispatch]]. A voice inside the building, which is not the company's, says that others came before him and that \"Fazbear will send another\" [[secret-of-the-mimic-f10n4-fazbear-will-send-another]]. What the company knew of them is inferred (see ((two-machines))).",
      { kind: "heading", text: "What a staged level shows" },
      "Because Help Wanted presents itself as the company's product, this archive reads it, and the company products after it, in three layers. The **level as built** is the company's staging: what it chose to show, and never a finding about the past. The **frame** is story: the hidden tapes, a hidden phone call, the endings, and in Special Delivery the staff emails. An **intrusion** is story too: something hidden, glitching, speaking to the player, or working against the level's instructions. The guide itself warns the player off any \"glitch, mistake, or embedded message from unauthorized personnel\" [[hw-handunit-unauthorized-personnel]].",
      "Help Wanted's repair level has the player take a child's hat from Freddy's mouth, and a child's watch and shoe from his chest, for the Lost and Found bin [[hw-pns-freddy-child-items]]. That is a staged prop: it agrees with what older records already carry about the mascots (see ((golden))), and establishes nothing.",
    ],
    counterEvidence: ["ffps-completion-tutorial-atonement", "scott-2019-only-game-developer-existence-canon", "security-breach-msg-marked-for-deletion"],
    tension: "Pizzeria Simulator's closing message speaks of atoning for past mistakes and says the company is no longer a corporate entity [[ffps-completion-tutorial-atonement]], which reads like remorse and like an ending, and Help Wanted has a Fazbear Entertainment trading, with lawsuits pending. Either the message was not true, or it did not last, or Help Wanted's company comes before that line was spoken: no record places the scan against the fire, and the model's order is a convention. Scott made canon only that an in-universe developer exists, whose games \"may or may not be a cover up\" [[scott-2019-only-game-developer-existence-canon]], so the cover-up stays a strong reading and not a fact. At the Pizzaplex a head of security with no relevant experience is appointed because \"the recommendation came from the top\" [[security-breach-msg-marked-for-deletion]]: the company's top serves whatever was writing to her (see ((vanny))), or it has reached the company's top, and the records do not choose. What survives all three is the pattern of what the company says, which is on the record line by line.",
    changesIf: "A game that shows new owners who really do not know the past, or a statement from Scott on what the in-universe games got wrong.",
    seeAlso: ["digital", "vanny", "pizzaplex", "ffps", "november-1987", "fnaf1-restaurant", "canon-rules"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "fnaf3-tape4-do-as-you-wish", // [stated] 'We are free of liability, do as you wish'
      "fnaf4-pigtail-girl-hide-your-body", // [stated] 'They hide your body'
      "ffps-tutorial-rebranded-disclaimer", // [stated] 'Newly re-branded Freddy Fazbear's Pizza' and liability disclaimer
      "ffps-insanity-certificate", // [stated] Insanity ending: fired so that 'no one believes you'
      "ffps-blacklisted-ending", // [stated] Blacklisted ending: security footage wiped
      "ffps-lawsuits-utah", // [stated] Lawsuits are filed in Washington County, Utah
      "hw-handunit-unauthorized-portion", // [stated] Warning about the unauthorized portion of the game
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
      "hw-game-over-animatronics-cant-kill", // [stated] Game-over 'Faz-Fact': 'Animatronics can't kill you.'
      "codb-handunit-no-hidden-intent", // [stated] DLC has 'absolutely no hidden intent or purpose'
      "codb-hallway-ends-in-fnaf4-bedroom", // [shown] Hallway Crawl ends in FNaF4's bedroom
      "hw2-sister-location-section", // [stated] A 'Sister Location' section restages that game for staff training
    ],
  },
  {
    id: "digital", part: "afterimage", title: "The rabbit in the code",
    question: "What is the rabbit in Help Wanted's code?",
    answer: "A personality that came off old company circuit boards scanned into the VR game, and that acts with purpose once it is there. It presents as the killer: a man's shape in his kind of costume, with his kind of lure. What it is, the games do not settle. The model reads it as something William Afton left behind on those boards, and prefers that to a copying program that had learned him. It is not the whole man.",
    confidence: "medium",
    hero: { image: "hw-trapped-ending-door.jpg", caption: "The end of Help Wanted for a player who follows the last tape: the anomaly looks out through the hatch of a huge metal door, raises a finger to its lips and steps back into the dark [[hw-trapped-ending]]." },
    body: [
      "Hidden in Help Wanted, the company's VR game (see ((cover-story))), are sixteen tape recordings by a tester at the studio that built it [[hw-tape-01]], whom this archive calls the tape speaker.",
      "The studio's client, {{fazbear-entertainment}}, sent it old junk, circuit boards and the like [[hw-tape-05]], with no explanation, and told it to scan the lot: that \"would expedite the process\" [[hw-tape-05-client-sent-junk-to-scan]].",
      { kind: "quote", evidence: "hw-tape-05" },
      "In the finished game {{handunit}}, its guide, boasts that the company's teams used \"vintage control-boards almost like plug-and-play, digitally recreating performances and personalities from the past\" [[hw-handunit-vintage-control-boards]]. It jokes that an earlier team made \"a hilarious mistake\" that \"may or may not have resulted in an undesirable anomaly entering the game's code\" [[hw-handunit-anomaly-fun-fact]].",
      { kind: "heading", text: "What it did to the testers" },
      "\"He\" appeared first to Jeremy, who tested the game before her [[hw-tape-05]]. (The games reuse the name: nothing ties him to the guard of 1987 or a gravestone.) Jeremy had nightmares, and then he changed.",
      { kind: "quote", evidence: "hw-tape-07" },
      "One day \"something that looked like a Halloween mask\" lay on the floor, and Jeremy stood in the testing room with the visor on and the front of his shirt black [[hw-tape-09]]. The tapes imply that he had cut his own face with a paper guillotine [[hw-jeremy-self-injury-implied]]. Whether he lived, they do not say.",
      "The finished game shows the figure: a grinning, man-shaped figure in a golden-yellow rabbit costume [[hw-rabbit-figure-appearance]]. No game is known to name it. Her word is \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]], and this archive calls it the rabbit in the code (known as Glitchtrap, Scott's working name for it) [[scott-2024-interview-placeholder-names-canon]].",
      { kind: "figure", image: "hw-glitchtrap-behind-player.jpg", caption: "The anomaly behind the player in Help Wanted's hub. Only its vest, bow tie and eyes are purple.", evidence: "hw-rabbit-figure-appearance" },
      "By her last day it had left the game and \"attached itself to these logs...my logs\" [[hw-tape-11]]. She came to fear that the logs were \"being used as a Trojan Horse\": whoever gathered them would rebuild the thing [[hw-tape-15]]. The game bears her out, in a mechanic her tape explains: as the player collects the tapes the figure draws nearer, until it stands directly behind [[hw-glitchtrap-approaches-with-tapes]].",
      { kind: "quote", evidence: "hw-tape-16" },
      "Her remedy: let it come close and begin to merge, then throw the disconnect switch she has built in by the main stage, forcing a restart that, she hopes, wipes the memory [[hw-tape-16]]. A player who ignores her ends on the stage as the rabbit figure [[hw-merge-ending]]. One who obeys sees the figure withdraw behind a huge metal door, and a plush rabbit is left in the hub [[hw-trapped-ending]]. The later games most likely follow that ending: what comes next needs the plush (see ((vanny))).",
      { kind: "heading", text: "It presents as the killer" },
      "The yellow rabbit costume is most likely what the killer wore to lure five children (see ((murders))). The Pizza Party level ends in a room dressed for a birthday [[hw-pizza-party-birthday-room]]. The room is the company's staging, and what the figure does in it is not. It steps from behind a curtain and beckons, and the player ends on a stage in a performer's place while it dances [[hw-pizza-party-ending]].",
      "Princess Quest, a game hidden in Help Wanted's mobile version, crosses a graveyard of six unmarked stones, counted on one screenshot [[hw-mobile-princess-quest-graveyard]]: the number of graves on which Pizzeria Simulator ends [[ffps-lorekeeper-gravestones]]. In Help Wanted 2 a long-fingered arm in yellow fur, most likely its own, holds out six rag dolls masked as the four mascots, the yellow bear and the Puppet. The game calls them memories [[hw2-memory-dolls]]. In Princess Quest's last room a rabbit-eared creature hangs above a line of glyphs that fans decode as \"I ALWAYS COME BACK\" [[hw-mobile-princess-quest-ending]], the words of Pizzeria Simulator's salvaged rabbit, {{william-afton}} [[ffps-scraptrap-always-come-back]].",
      { kind: "figure", image: "hw-pq1-final-room.jpg", caption: "The last room of Princess Quest, with its line of glyphs.", evidence: "hw-mobile-princess-quest-final-room" },
      { kind: "heading", text: "What it is" },
      { kind: "callout", tone: "key", title: "What no game says", text: "Which machine the boards came from, and what the thing on them is. When it happens again, in the staff emails of another game, Special Delivery, a colleague asks, \"Steve, which circuit board did you scan?\" Whatever Dan brought him, he answers [[sd-which-board-unknown]]. No tape and no email names William Afton." },
      { kind: "compare", columns: [
        { title: "Something he left behind", verdict: "The model's reading", pick: true, text: "The mechanism these games state is that a board carries a personality: swap a CPU in Special Delivery, and a machine has \"a whole new personality\" [[sd-cpu-whole-new-personality]]. Scott's teaser hid the line \"We let something inside.\" and, beside it, a line that calls it an accident [[scottgames-hw-teaser-hidden-text]]." },
        { title: "A copying program", verdict: "The rival reading", text: "Edwin Murray's copying machine (see ((two-machines))) was software by 1979, copied between bodies [[secret-of-the-mimic-mail-received-5-min-ago]], and a party signing itself WA had bid for his \"software development\" [[secret-of-the-mimic-mail-wa-far-behind]]. The anomaly's one speech is the tape speaker's greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]]. The arm with the dolls also holds out Secret of the Mimic's White Tiger doll [[hw2-mimic-teaser-1979-white-tiger]]. At the Pizzaplex a patient wrote \"software programs that talk to you and repeat phrases\", and then someone else was answering [[security-breach-cd46-talking-programs]]." },
        { title: "The man himself", verdict: "Not shown", text: "William Afton, whole, in the code. The decoded line invites it, and Ultimate Custom Night gives the same line to its Afton [[ucn-afton-always-come-back]]. But a copy says what its original said, and Pizzeria Simulator presents its fire as his end (see ((ffps)))." },
      ] },
      "The model reads the anomaly as something William Afton left behind, on a narrow margin. The signs cannot choose: a copier that had learned him would wear them all. But the model's reading needs one step that no record shows: that the boards came from a machine he had been in. The rival needs two: Murray's program on a company board, and near the killer. Asked about the figure in an interview, kept here as a transcript, Scott spoke of \"possession of AI or possession of machines or circuitry\" [[scott-2024-interview-glitchtrap-possession-of-ai]]: what is possessed, not by whom.",
      { kind: "heading", text: "A second scan" },
      "Special Delivery's staff emails show it happen again, most likely at a second firm. A contractor has circuit boards drilled out of stored animatronics [[sd-contractor-circuit-boards-drilled]]. After the last set is scanned a technician is locked out of the system, and then a colleague writes: \"we released a virus when we scanned that last circuit board\" [[sd-circuit-board-scan-virus]]. The emails never say what the virus is, and give it no shape and no name.",
      "In the same emails customers report \"an animatronic that isn't appearing anywhere in our database. Some kind of vintage Bonnie model\", with a bad smell [[sd-vintage-bonnie-reports]]. If the scans followed Pizzeria Simulator's fire, an old rabbit that smells may be the killer's body in its suit, still at large. If they came first, it is what that game has outside, \"trying to get in for months\" [[ffps-tutorial-something-outside]]. The model does not choose.",
      "No record places the scans against the fire. That they came after it is the model's convention, and its reading of the anomaly leans on it. Later games bring William Afton's image back in more than one form, and the model does not join them into one history (see ((ucn)) and ((burntrap))).",
    ],
    counterEvidence: ["sd-which-board-unknown", "hw-tape-girl-calls-it-the-anomaly", "hw-mobile-princess-quest-ending", "hw-glitchtrap-uses-tape-girl-voice", "secret-of-the-mimic-mail-wa-far-behind", "hw2-mimic-teaser-1979-white-tiger", "security-breach-cd46-talking-programs"],
    tension: "No game says whose board it was [[sd-which-board-unknown]], and the game's own word for the figure is \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]]: the name it goes by asserts an identity the games do not. Everything that makes it look like the killer is surface that a copier which had learned him would wear too, and the line that ties it most closely to him exists only as a fan decoding of glyphs [[hw-mobile-princess-quest-ending]]. The rival reading, a copying program that reached the company's hardware, has records of its own: the figure's one speech in the hub is the tape speaker's greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]], a borrowed voice, which is how Murray's copying machine speaks [[secret-of-the-mimic-log-turn-around]] [[ruin-mimic-reuses-gregory-lines]]; a party signing itself WA had bid for his software [[secret-of-the-mimic-mail-wa-far-behind]]; the arm with the dolls holds out Secret of the Mimic's White Tiger doll [[hw2-mimic-teaser-1979-white-tiger]]; and a patient's talk-back programs at the Pizzaplex came to be answered by someone else [[security-breach-cd46-talking-programs]]. What answers it is weak: no record puts Murray's software on a Fazbear board, Help Wanted's account of what was scanned names nothing of Murray's, only old hardware that the client sent, and nothing in Help Wanted, its Halloween add-on or Special Delivery carries a mark of his. The model's reading needs one step that no record shows and the rival needs two, which is a margin and not a refutation.",
    changesIf: "A game that says which machine the boards came from, shows Murray's software on a company board, or dates the scan against the fire.",
    seeAlso: ["cover-story", "vanny", "killer", "ucn", "burntrap", "mimic", "patterns"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "hw-tape-03", // [stated] Tape 3: Lawsuit and incident in the building
      // support
      "hw-tape-02", // [stated] Tape 2: First sighting of the character
      "hw-tape-04", // [stated] Tape 4: Guillotine paper slicer
      "hw-tape-06", // [stated] Tape 6: Supply room glowing, Jeremy in testing room
      "hw-tape-08", // [stated] Tape 8: Paper trail to discredit Jeremy
      "hw-tape-10", // [stated] Tape 10: Buyout and a new studio
      "hw-tape-12", // [stated] Tape 12: The protected area became its hiding place
      "hw-tape-14", // [stated] Tape 14: Logs fragmented to break the anomaly
      "hw-tape-room-glitchtrap", // [shown] The rabbit figure can appear in the Tape Room
      "hw-handunit-beta-artifacts", // [stated] Warning about beta-testing 'visual artifacts'
      "hw-handunit-scanned-photos-original-routines", // [stated] Built from scanned photographs and original routines
      "hw-handunit-first-dev-team-pulled", // [stated] First development team was pulled from the project
      "hw-pizza-party-spring-bonnie-plush", // [shown] Pizza Party: a yellow rabbit plush follows the player
      "hw-pizza-party-favorite-cake-pizza", // [shown] Pizza Party: player picks cake flavor and pizza topping
      "hw-pizza-party-springtrap-window", // [shown] Pizza Party: Springtrap stares through the office window
      "hw-game-over-remember-jeremy", // [stated] Game-over TV: 'Remember Jeremy.'
      "sd-virus-traced-to-fe-board", // [stated] Virus traced to a Fazbear Entertainment circuit board scan
      "sd-circuit-board-does-what-we-tell-it", // [stated] Compliance: 'It has to do what we tell it to'
      "sd-springtrap-did-not-save-the-others", // [stated] Springtrap: 'It did not save the others'
      "hw2-fazerblast-fire-springtrap", // [shown] Fazerblast fire reveals a Springtrap cutout
      "hw-intro-waiver-not-based-on-testing-injuries", // [stated] Intro: the waiver 'isn't at all based on... injuries associated with testing'
      "sd-contractor-storing-animatronics", // [stated] Contractor staff: 'These things are creeping me out'
      "sd-fe-halts-all-contractors", // [stated] Anna Kwemto: Fazbear is halting work with all its contractors
      "sd-circus-baby-something-bad-inside", // [stated] AR Circus Baby: 'We need you, so that we have a place to hide'
      "scottgames-site-hw-alt-remember-jeremy", // [stated] Help Wanted teaser page source: alt text 'remember Jeremy'
      // colour
      "hw-credits-tape-girl-qa", // [stated] The tape speaker is credited only as 'QA'
      "hw-tape-room-setting", // [shown] The Tape Room
      "hw-handunit-disappeared-from-boundaries", // [stated] Player 'disappeared' from authorized boundaries
      "hw-handunit-pizza-party-glitch", // [stated] Stage announcement glitches in Pizza Party
      "codb-dancing-glitchtrap", // [shown] The rabbit figure dances on a distant hill
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
    answer: "Most likely one woman: Vanessa, the Pizzaplex's security guard, acting under the control of whatever writes to her, and earlier the beta tester who is left a plush rabbit at the end of Help Wanted. One page of one ending shows Vanessa on the roof after the woman in the rabbit costume has fallen from it, and the model has no account of that page. Another ending leaves her at the doors with the mask on the floor. That she was freed is the model's reading, and it holds it loosely.",
    confidence: "medium",
    hero: { image: "hw2-pq4-vanny-crushes-glitchtrap.jpg", caption: "Princess Quest IV, the secret ending of Help Wanted 2: a giant silhouette with the features of the rabbit mask looks into a claw machine [[hw2-pq4-elevator-claw-machine]]. It goes on to crush a tiny copy of the rabbit in the code between its hands [[hw2-pq4-vanny-crushes-glitchtrap]]." },
    body: [
      "It takes two objects to hear her. One is a grinning white rabbit mask, hidden in the corn maze of Help Wanted's Halloween add-on [[codb-corn-maze-rabbit-mask]]. The other is the green plush rabbit left in the hub when the last tape's instructions are followed [[hw-trapped-ending-plush]] (see ((digital))). When the player wears the one and picks up the other, a woman's voice plays: one side of a conversation.",
      { kind: "quote", evidence: "codb-mask-plush-voice" },
      "She is not named, the other voice is never heard, and what \"it\" is goes unsaid. The voice plays only when the player, a beta tester on \"the Fazbear Entertainment Quality Assurance team\" [[hw-waiver-qa-team]], wears the mask and holds the plush, so most likely it is the player's own. The plush exists only if she threw the switch as the tapes asked, and here she is, promising not to let someone down.",
      "For more than a year the source code of Scott's website, under each teaser for Security Breach, held an exchange of the same shape.",
      { kind: "quote", evidence: "scottgames-sb-source-stay-the-course" },
      { kind: "heading", text: "Ness" },
      "Among Special Delivery's staff emails (see ((digital))) is a run from {{luis-cabrera}}, who monitors what staff do online, to a colleague he calls {{ness}}. Her searches have set off his alarms: anything with \"torture\" in it [[sd-ness-blood-eagle-calendar]], then \"how to induce compliance in human subjects, and how to induce self-compliance(?)\", and a search for the one word help [[sd-ness-compliance-searches]].",
      "By the order in which the emails arrive, itself a convention, only the \"torture\" email [[sd-ness-blood-eagle-calendar]] comes before the contractor's scan goes wrong [[sd-circuit-board-scan-virus]]. On that email the model reads the rabbit in the code as reaching her through the VR game.",
      { kind: "heading", text: "Vanessa" },
      "Security Breach is set in {{mega-pizzaplex}} (see ((pizzaplex))), and its security guard is {{vanessa}} [[security-breach-msg-marked-for-deletion]]. Discs hidden in the building hold her sessions with company therapists [[security-breach-cd-therapists-shared-and-replaced]]. Set beside Luis's emails they meet at four points, though no game calls Ness \"Vanessa\".",
      { kind: "table", head: ["The link", "Ness, in Special Delivery", "Vanessa, in Security Breach"], rows: [
        ["A Luis who watches her online", "The emails about her searches are his", "A routine check finds encrypted conversations with someone other than Luis [[security-breach-cd-vanessa-encrypted-conversation]]"],
        ["Things the monitoring caught her buying", "Three \"lifelike, human male rubber masks\" [[sd-ness-rubber-masks]]", "A costume and fake fur, kept secret: \"He said he would always be watching.\" [[security-breach-cd-vanessa-costume-fur]]"],
        ["Voices, and messages", "Her face close to her screen: \"I heard voices\" [[sd-ness-voices-at-screen]]", "Messages from someone who \"has been hacking into your personal files too\" [[security-breach-cd-vanessa-manipulative-messages]]"],
        ["Where she works", "At a desk that Luis can walk up to", "About to transfer: \"I'm needed somewhere else now.\" [[security-breach-cd-vanessa-transfer]]"],
      ] },
      "On the night of the game a boy, {{gregory}}, finds the hideout of a \"rabbit lady\" and takes a name from it: \"I think her name is.. Vanny?\" [[security-breach-gregory-finds-vanny-hideout]] {{glamrock-freddy}}, the animatronic bear protecting him, weighs the name.",
      { kind: "quote", evidence: "security-breach-freddy-vanny-vanessa-bunny" },
      { kind: "heading", text: "One woman, or two" },
      "So {{vanny}} is most likely Vanessa, acting under the control of whatever writes to her. One page of the same game stands against it. In the ending reached from the roof the rabbit-costumed woman falls, and the boy lifts her mask from a blonde woman who is drawn like Vanessa and not named [[security-breach-rooftop-unmasked]]. The page after the credits is this one.",
      { kind: "figure", image: "sb-rooftop-ending-vanessa-on-roof.jpg", caption: "After the credits of the rooftop ending: Vanessa in uniform on the burning roof, looking down.", evidence: "security-breach-rooftop-vanessa-alive" },
      "Who is inside the costume is settled before the endings divide, so the page cannot be put aside as one branch among several. It counts against one woman in full, and the model has no account of it.",
      { kind: "compare", columns: [
        { title: "One woman", verdict: "The model's reading", pick: true, text: "Vanessa is Vanny. In the ending reached by finishing an arcade game, the rabbit mask and bow tie lie on the floor and Vanessa waits at the doors [[security-breach-ending-redemption]]. The recordings are about her costume and her watcher, and Freddy spells the name out." },
        { title: "Two women", verdict: "Explains the roof", text: "Vanessa, and someone else in the costume: the plain reading of a page on which one stands and the other has fallen. It loses, narrowly, to the mask on the floor with Vanessa at the doors, and it leaves the fur, the watcher and the name as coincidences." },
        { title: "A role", verdict: "True of the mask", text: "On the model's reading the costume has one wearer, but the mask is staff equipment: a poster tells staff to \"TAKE OFF YOUR MASK!\" [[hw2-poster-take-off-your-mask]], and the one in RUIN, Security Breach's sequel, was \"left behind by some Faz-Technician\" [[ruin-security-mask-left-by-faz-technician]]. What passes from person to person is the place the rabbit in the code needs, \"someone plugged into this game\" [[hw-tape-16]]. By RUIN another thing is using the wearer (see ((mimic)))." },
      ] },
      { kind: "heading", text: "Princess Quest" },
      "The way out, if there is one, is an arcade game. The Pizzaplex has Princess Quest as cabinets, the third of them on no inventory [[security-breach-msg-out-of-order]]. As that game is described, its Princess crosses a pixel copy of Help Wanted's hub and corn maze, trades a rabbit mask and a plush for a key, and strikes the door from the end of Help Wanted. There is a scream, and the cabinet shows \"ERROR\" [[security-breach-pq3-help-wanted-hub-trapped-door]].",
      "Help Wanted 2, the next product, hides a fourth. The rabbit mask its player has worn throughout is traded back for the green plush [[hw2-pq4-vanny-mask-trade]], and the giant silhouette shown above crushes a tiny copy of the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].",
      "The model reads these games as one fight against the rabbit, made from inside the game. Who made them, no game says, and they had already drawn staff: one log reads \"I did what you wanted! I beat parts 1 and 2\" [[security-breach-msg-red-flag]], and a leaving employee says of the Princess, \"She's testing me. I am not yet worthy.\" [[security-breach-msg-arcade-conspiracy]]",
      "Whether it worked is open. The crush is Help Wanted 2's secret ending. Its main ending, as described, has a rabbit-costumed arm reaching out of a recharge station and leads into RUIN [[hw2-faz-force-ending]], and the rabbit in the code glitches that game's instruction screens [[hw2-glitchtrap-corrupts-backstage]]. One ending shows the rabbit crushed, and the next game still has a rabbit in the mask [[ruin-the-entity]].",
      "That Vanessa was freed is the model's reading too, and a loose one. In her hideout in RUIN, as the room is described, the third cabinet lies toppled, with a sword through it that only the mask shows [[ruin-vanny-hideout-glitchtrap-shadow]]. One of RUIN's endings shows, again through the mask, the boy and a blonde woman on the hill from the last page of the Princess Quest ending [[ruin-ending-safe-spot]]. No later game shows her with the mask off.",
    ],
    counterEvidence: ["security-breach-rooftop-vanessa-alive", "ruin-gregory-comics-depict-endings", "hw2-pq4-consequences-achievement", "hw2-glitchtrap-corrupts-backstage", "hw2-faz-force-ending"],
    tension: "One page will not fit: after the rooftop ending, Vanessa stands in uniform on the burning roof, looking down, when the woman in the rabbit costume has already fallen [[security-breach-rooftop-vanessa-alive]]. Two women would explain it, and the page cannot be set aside as a branch, because who is inside the costume does not depend on the ending. The model keeps one woman, narrowly, on the mask on the floor, the therapy recordings and Freddy's reading of the name, and has no account of the page. On her release, Gregory's comics draw every ending except the Princess Quest one [[ruin-gregory-comics-depict-endings]], and no later game shows her outside the mask's view. On the remedy, the fourth game's achievement reports \"System threats found. Repair complete.\" [[hw2-pq4-consequences-achievement]], but in that same game the rabbit in the code glitches the instruction screens [[hw2-glitchtrap-corrupts-backstage]] and a rabbit-costumed arm reaches out in the main ending [[hw2-faz-force-ending]], and the next game still has a rabbit in the mask: the games show the thing fought from inside, and do not show that it worked.",
    changesIf: "A game that shows two women together outside the rooftop page or names the caller on the hidden call, or a later game that shows Vanessa with the mask off.",
    seeAlso: ["digital", "pizzaplex", "cover-story", "mimic", "burntrap", "patterns"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "scottgames-site-sb-source-stay-the-course", // [stated] Security Breach page source: 'Focus on my voice.' / 'Have you selected one?' / 'I have.'
      // support
      "hw-mobile-princess-quest-unlock", // [shown] Princess Quest hidden in the mobile port
      "sd-ness-cut-in-half-search", // [stated] Ness searched how far a human can be cut in half
      "sd-ness-interested-in-it", // [stated] Ness showed interest in IT
      "hw2-pq4-unlock", // [shown] Princess Quest IV unlocked by the memories
      "hw2-pq4-old-man", // [stated] Princess Quest IV: the Old Man
      "hw2-pq4-player-enters-game", // [shown] PQ IV: the Princess pulls the player into the game
      "hw2-springtrap-cutout-pq3-scream", // [implied] Springtrap cutout shares the scream that ends Princess Quest III
      "codb-mask-plush-voice-opening", // [stated] Hidden call, opening: 'Yes, I hear you... There's no miscommunication'
      "hw2-credits-vanny", // [stated] Cast credits list a 'Vanny' role
      "hw2-pq4-alpha-take-it", // [stated] The cabinet reads 'Princess Quest IV'; its title screen, 'Princess Quest (Alpha)'
      "security-breach-msg-stolen-property", // [stated] Vanessa report: Music Man prototypes stolen with no break-in
      "security-breach-msg-false-alarm", // [stated] Vanessa turns away a police officer
      "security-breach-msg-no-questions-asked", // [implied] Head Security Guard hired with an anonymous internal reference
      "security-breach-msg-pq1-maint-log", // [stated] Princess Quest 1 pulled from 'that old mobile game'
      "security-breach-vanny-lines", // [stated] Vanny's spoken lines
      "security-breach-cd-vanessa-father-bill", // [stated] Vanessa's father is named Bill
      "security-breach-freddy-no-rabbit-not-anymore", // [stated] Freddy: 'There is no rabbit at the Mega Pizzaplex... Not anymore.'
      "security-breach-pq2-old-man-fnaf1-office", // [shown] Princess Quest 2: the Old Man's sword of light, and a door to a FNaF1-style office
      "scottgames-site-sb-protect", // [shown] Security Breach teaser: 'PROTECT' (security guard)
      "scottgames-site-sb-obey", // [shown] Security Breach teaser: 'OBEY' (rabbit-costumed figure with knife)
      "scottgames-site-sb-rock-rabbit-figure-added", // [shown] Security Breach 'ROCK!' teaser, second version: a rabbit-eared figure on the balcony
      "scott-2024-interview-vanny-underused", // [stated] 2024: Vanny 'was not utilized to her fullest potential'
      // colour
      "security-breach-vanessa-6am-reward", // [stated] Vanessa at 6 AM offers Gregory a job and a reward
    ],
  },
  {
    id: "pizzaplex", part: "afterimage", title: "One night at the Pizzaplex",
    question: "What is going on at the Pizzaplex, and who is Gregory?",
    answer: "The Mega Pizzaplex stands over a buried pizzeria, its staff messages ask where everyone has gone, and a woman in a rabbit costume walks it at night. Gregory is a human boy with no record in the company's systems who lives through one night there. The game's endings are branches, and the sequel follows no single one of them: the building it shows is most likely the aftermath of the route that goes underground, and that Vanessa was freed is the model's reading, held loosely.",
    confidence: "medium",
    hero: { image: "ruin-gregory-comic-pages.jpg", caption: "Eight comic pages found in RUIN, which Gregory's friend thinks he drew. They show scenes from Security Breach's endings, and none from the Princess Quest ending [[ruin-gregory-comics-depict-endings]]." },
    body: [
      "Security Breach takes place in one building over one night: {{mega-pizzaplex}}. All over it are messages that its staff left behind. One is a reminder that the all-staff meeting is \"this Thursday night at 11:30PM\", that attendance is mandatory, and that \"There will be cake!\" [[security-breach-msg-all-staff-meeting]] Another is a question.",
      { kind: "quote", evidence: "security-breach-msg-job-security" },
      "The messages never say what happened at that meeting. Night staff are no longer needed, owing to \"the success of the S.T.A.F.F. project\", the building's own robots [[security-breach-msg-pink-slip]]. Bonnie, the band's rabbit, was last tracked walking into Monty Golf at 4:12AM [[security-breach-msg-missing-bonnie]].",
      "And a customer has written in: \"Why did you reopen? Everyone remembers what happened to those kids.\" [[security-breach-msg-it-is-happening-again]] Which kids, the messages never say. Where the staff went, and who wrecked the Bonnie found in RUIN, the game's sequel [[ruin-glamrock-bonnie-remains-hidden-room]], are open (see ((open))).",
      "The building stands on something, too. Its builders traced a high-voltage cable into the foundation, \"There is definitely something under us\" [[security-breach-msg-power-drain]], and broke through into \"an old elevator shaft\" [[security-breach-msg-old-elevator]]. At the bottom is an older pizzeria whose sign reads \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]] (see ((burntrap))).",
      { kind: "heading", text: "Gregory" },
      "Early in the game {{glamrock-freddy}}, the band's bear, wakes in his green room with a boy hiding in his stomach hatch. He scans him.",
      { kind: "quote", evidence: "security-breach-intro-not-in-database" },
      "{{vanessa}}, the security guard, says the same later: \"there's no record of him\" [[security-breach-vanessa-no-record]]. That is all it means: the company's systems do not know him. In RUIN, set after this night, posters with his face read \"MISSING / HAVE YOU SEEN ME?\" [[ruin-missing-gregory-poster]]. His best friend {{cassie}} goes into the wreck to find him [[ruin-cassie-seeks-gregory]], and he reaches her from somewhere else: \"I'm not at the Pizzaplex.\" [[ruin-real-gregory-not-at-pizzaplex]] No game makes {{gregory}} anything but a human child.",
      { kind: "figure", image: "ruin-missing-gregory-poster.jpg", caption: "One of RUIN's posters of Gregory.", evidence: "ruin-missing-gregory-poster" },
      "Recordings hidden in the building have company therapists with a patient who never speaks and is never named: client 46, here. The patient is spoken to as a child, \"something of a phenom\", \"like a hacker\" [[security-breach-cd46-treated-as-child-phenom]]. A security still shows them talking to \"someone, or something\" with what \"almost look like rabbit ears\" [[security-breach-cd46-rabbit-ears]], and a glitch in the building's robots is traced to the client [[security-breach-cd46-glitch-subroutines]].",
      "If the client is Gregory, something with rabbit ears was using the boy against the building before the night began. The recordings stop short of the name, and the model does not rely on it.",
      { kind: "heading", text: "The night" },
      "Through the night the rest of the band hunts the boy, and Freddy does not. Freddy is also the one who finds, at the start, that he \"cannot connect to the main network\" [[security-breach-freddy-cannot-connect-main-network]]. The game does not say that the one explains the other. A woman in a rabbit costume walks the building too, whom Freddy says he has not seen [[security-breach-freddy-cannot-see-rabbit-lady]]: most likely the guard herself, under the control of whatever writes to her (see ((vanny))).",
      "The place runs on swappable parts: Parts and Service, Vanessa tells Freddy, can \"slap your casing on a new Endo\" [[security-breach-vanessa-new-endo]]. The model reads that as the end of a line that starts with a costume maker's machine that \"can fit into any costume we've created\" [[secret-of-the-mimic-log-training-m1]] (see ((two-machines))). Both ends are stated, and the line between them is inferred.",
      "At 6 AM the exit opens, and the boy gives his reason for staying.",
      { kind: "quote", evidence: "security-breach-gregory-more-disappearances" },
      { kind: "heading", text: "Six endings" },
      "What follows depends on the way out. RUIN is set in the building afterwards, and in it are eight comic pages that \"look like Gregory drew them\", his friend says [[ruin-gregory-comics-depict-endings]].",
      { kind: "table", head: ["The way out", "What it shows", "In RUIN"], rows: [
        ["The front door", "The boy asleep in a box in an alley, under a newspaper headed \"MISSING\" [[security-breach-alley-newspaper]], the rabbit-costumed woman's shadow over him [[security-breach-ending-alley]]", "Drawn in the comics"],
        ["The loading dock", "He and Freddy drive off in a company van [[security-breach-ending-getaway]]", "Drawn in the comics"],
        ["The roof", "They set the Pizzaplex on fire and Freddy takes the rabbit-costumed woman off the roof with him [[security-breach-ending-rooftop]], yet a last page has Vanessa alive above, and a news report has the building burned down [[security-breach-rooftop-vanessa-alive]]", "A page fits it, but RUIN's building still stands, wrecked"],
        ["Her hideout", "The boy has the staff robots dismantle her, and Freddy shuts down [[security-breach-ending-disassemble-vanny]]", "Drawn in the comics"],
        ["The old elevator", "Under the building the boy beats a burnt rabbit among rooms of burners, and a mass of old parts drags it into the ceiling [[security-breach-ending-burn-it-all-down]]", "Drawn in the comics, and most likely the route behind RUIN's building"],
        ["Princess Quest", "With the three Princess Quest arcade games finished, the mask lies on the floor and Vanessa waits at the doors [[security-breach-ending-redemption]]", "Not in the comics: the model's reading for Vanessa"],
      ] },
      "They are branches, and one rule covers them: an ending is discounted for what it makes happen, never for what it shows to be already so. No game says which happened, and RUIN follows no single one.",
      "RUIN's player, Cassie, is handed a mask that lays a second view over the building [[ruin-mask-bot-helpi-vanni]]. With it off, the Pizzaplex is wrecked and abandoned [[ruin-pizzaplex-abandoned-earthquake]], a raceway has collapsed [[ruin-something-tunneled]], and Roxanne, the band's wolf, is still looking for the boy: \"GIVE ME BACK MY EYES!!!\" [[ruin-roxy-give-me-back-my-eyes]] The old elevator opens only once the boy has taken her eyes, though he can take them on any route [[ruin-roxy-give-me-back-my-eyes]]. One comic page draws the burnt rabbit under the Pizzaplex beside the mass of parts [[ruin-gregory-comics-depict-endings]]. None of these settles it, and together they make the underground route the most likely.",
      "One body in RUIN points another way: a headless Freddy attacks Cassie below the rabbit-costumed woman's hideout. Freddy is taken apart in the hideout and Princess Quest endings [[ruin-prototype-freddy-headless]], and escapes with the boy from the underground [[security-breach-ending-burn-it-all-down]]. As described, the body is marked \"PROTOTYPE\" [[ruin-prototype-freddy-headless]], a label not yet checked in play.",
      "The public story is an earthquake, on a newspaper texture whose placement in play is unconfirmed: \"Earthquake shakes pizza plex\" [[ruin-pizzaplex-abandoned-earthquake]].",
      "The comics cut both ways: either they are stories he made up, which would leave the Princess Quest ending as what happened, or they are things he saw. The game does not choose.",
      "For Vanessa the model reads the Princess Quest ending, on signs seen only through the mask (see ((vanny))). That is a different branch from the underground route, so the model's account is a composite, and says so.",
    ],
    counterEvidence: ["security-breach-ending-alley", "ruin-gregory-comics-depict-endings", "ruin-prototype-freddy-headless", "security-breach-rooftop-vanessa-alive"],
    tension: "The game gives six endings and no ruling between them. One leaves Gregory asleep in a box in an alley with the rabbit-costumed woman's shadow over him [[security-breach-ending-alley]], which no later game undoes on screen. Gregory's comics draw every ending except the Princess Quest one [[ruin-gregory-comics-depict-endings]], and a headless Freddy attacks Cassie below the hideout, which fits the endings in which he is taken apart and not the underground route, unless its \"PROTOTYPE\" label is what it says [[ruin-prototype-freddy-headless]]. And the rooftop ending's last page shows Vanessa alive on the roof after the rabbit-costumed woman has fallen [[security-breach-rooftop-vanessa-alive]], which is not a branch that can be set aside. The model says only what RUIN shows with the mask off, a building wrecked along the route that goes underground, and holds loosely that Vanessa was freed.",
    changesIf: "A later game that says which Security Breach ending happened, shows Vanessa with the mask off, or names client 46.",
    seeAlso: ["vanny", "burntrap", "mimic", "cover-story", "two-machines", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "security-breach-cd46-hacking-pizzaplex", // [stated] Client 46 suspected of hacking the Pizzaplex
      // support
      "security-breach-msg-understudy", // [stated] Monty replaces Bonnie as bass player
      "security-breach-msg-roxy-upgrade", // [stated] Roxy's eye upgrade lets her see/talk through walls
      "security-breach-msg-monty-upgrade", // [stated] Monty's claw upgrades used to cause damage
      "security-breach-msg-bbw-maint-log", // [stated] BB World cabinet vanished before 'the company meeting'
      "security-breach-msg-night-shift", // [stated] Security employee: 'This place is not safe'
      "security-breach-freddy-older-models-flawed", // [stated] Freddy: 'Bad things happened in the past... older models'
      "security-breach-cd46-therapists-missing-dead", // [stated] Client 46: previous therapists missing, one found mangled by machinery
      "security-breach-6am-choice", // [stated] At 6 AM Freddy offers a choice: leave or investigate
      "security-breach-vanessa-freddy-system-crash", // [stated] Vanessa: Freddy's 'system crashed'; Parts and Service put him on reduced power
      "security-breach-msg-monty-mischief", // [stated] Message: Monty skips shows and is always found on the catwalks over Monty Golf
      "security-breach-msg-staff-party-question", // [stated] Message: afraid of being laid off for skipping the staff party
      "security-breach-cd46-doing-the-manipulating", // [stated] Fifth therapist to client 46: 'I think you're the one doing the manipulating'
      "ruin-gregory-friend-maps", // [stated] Gregory's 'friend' has the building maps
      "ruin-item-bonnie-replaced-dad-wouldnt-say", // [stated] Cassie: 'Dad wouldn't tell me why they replaced Bonnie.'
      // colour
      "hw2-achievement-ggy", // [stated] Achievement 'GGY': 'Beat all high scores.'
      "security-breach-msg-hello-gregory", // [stated] Freddy's first message names Gregory
      "security-breach-msg-night-terrors", // [stated] Daycare complaint: child afraid of the dark
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
