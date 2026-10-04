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
    answer: "The events were real: inside the story, games were later made about them, and the company now puts most of that history down to \"a complete lunatic\". It behaves as one actor in every game that shows it: nearly every explanation it gives is a denial or a programming quirk, and each concession comes with a denial or a disclaimer beside it. It sells its own past as entertainment, and what it knew shows only in what it does.",
    confidence: "high",
    hero: { image: "scottgames-hw-working-as-intended.jpg", caption: "Scott's teaser for Help Wanted, in the company's own voice: \"Everything is working as intended!\" [[scottgames-site-hw-working-as-intended]]" },
    body: [
      "Help Wanted is a virtual-reality game, and inside the story it is also a product: {{fazbear-entertainment}}'s own. It opens with a ride past a series of posters and the voice of {{handunit}}, its guide. Early on, the voice makes an admission: the company \"has developed something of a bad reputation over the last few decades\", and \"some stories associated with our name were loosely based on actual events\" [[hw-intro-loosely-based-on-actual-events]]. The sentence does not stop there.",
      { kind: "quote", evidence: "hw-intro-complete-lunatic" },
      "So the company has had those \"completely fictitious scenarios (lies)\" rebuilt as \"a hilarious VR Game\", in the hope that it can \"finally move past these childish ghost stories\" [[hw-intro-vr-game-to-move-past-ghost-stories]].",
      { kind: "figure", image: "hw-intro-closed-poster.jpg", caption: "A poster on the company's own ride into Help Wanted: a restaurant closed behind police tape, under the sign \"ALL BUSINESS SUSPENDED UNTIL FURTHER NOTICE.\"", evidence: "hw-intro-closed-police-line-poster" },
      { kind: "heading", text: "The games exist inside the story" },
      "The voice gives two spans of time: a reputation decades old, and lies fed \"over the last several years\" [[hw-intro-vr-game-to-move-past-ghost-stories]]. So the events came first and games about them came later, and now a VR game is made out of those games, with a set of levels filed under \"FNAF 1\" [[hw-hub-menu-fnaf-1]].",
      "One of the tape recordings that a tester hid in the VR game (see ((digital))) is about those earlier games. The staff were told, she says, that \"the whole point of this VR game was to undo the bad PR done by a rogue indie game developer\" [[hw-tape-13-cover-story]]. Then the client sent a hard drive by mistake, with its emails to that developer on it.",
      { kind: "quote", evidence: "hw-tape-13-fe-hired-developer", text: "Fazbear Entertainment hired the game developer. Those indie games were designed to conceal and make light of what happened." },
      "That is one witness reporting what she read, so the model takes it as most likely true. Scott Cawthon, who put his own photograph on one of the ride's posters for that developer [[hw-intro-indie-developer-poster]] [[scott-2019-indie-dev-photo]], wrote that he is not part of the story [[scott-not-part-of-lore]], and said how much of this is canon.",
      { kind: "quote", evidence: "scott-2019-only-game-developer-existence-canon" },
      { kind: "callout", tone: "key", title: "What the claim changes", text: "It does not unmake the earlier games. A level is the company's staging only when the game around it presents itself as a product inside the story, and none of the main games before Help Wanted does. What they show stays this archive's record of what happened. That they were made as a cover-up is what one tape says and no other record does: a strong reading, not a fact. Scott's post leaves it as a bracketed question: \"(Or was it all part of the plan?)\" [[scott-2019-hw-rebrand-or-part-of-the-plan]]" },
      { kind: "heading", text: "One actor" },
      "Set out what the company says in each game that shows it, in the model's order, and one voice runs through it. FNaF3 is here for its old training tapes: its horror attraction belongs to a \"Local amusement park\" [[fnaf3-coming-soon-newspaper]] and, most likely, not to the company: Scott's store text has only \"the owners\" [[scott-2015-fnaf3-store-owners-revive-the-legend]].",
      { kind: "table", head: ["Where", "What the company says"], rows: [
        ["FNaF3's training tapes, undated", "Staff are asked that a sealed room \"not be mentioned to family, friends, or insurance representatives\" [[fnaf3-tape6-not-to-be-mentioned]]."],
        ["FNaF2, <<November 1987|printed|fnaf2-paycheck-1987|The Night 5 cheque is dated 11-12-1987.>>", "That the machines go for the guard is \"a minor...glitch in the system\" [[fnaf2-call1-endoskeleton-glitch]]."],
        ["FNaF2, later that week", "Whatever is going on outside \"has nothing to do with our establishment\" [[fnaf2-call3-rumors]], and then \"Fazbear Entertainment denies any wrongdoing.\" [[fnaf2-call4-investigation]]"],
        ["FNaF1", "When damage or death occurs, \"a missing person report will be filed within 90 days, or as soon as property and premises have been thoroughly cleaned and bleached\" [[fnaf1-call1-company-disclaimer]]."],
        ["Help Wanted", "The company is \"a safe family-friendly brand, with no skeletons in our closet\" [[hw-handunit-credits-no-skeletons]], and \"Nothing was ever proven in a court of law.\" [[hw-game-over-court-of-law]]"],
        ["Security Breach", "With children asking where a missing character is, a management report asks: \"Do we have an officially approved response?\" [[security-breach-msg-re-theme]]"],
      ] },
      "Where an explanation is offered there, it is a denial or a programming quirk, and each concession has a denial or a disclaimer beside it. In Help Wanted, \"actual events\" [[hw-intro-loosely-based-on-actual-events]] is followed in the same sentence by the lunatic. A \"hilarious mistake\" in development \"may or may not\" have let something into the code, and the guide goes on: \"Please accept that statement as our full legal disclaimer\" [[hw-handunit-anomaly-fun-fact]].",
      "Pizzeria Simulator, whose pizzeria is a trap (see ((ffps))), closes with its tutorial voice apologising that the job was not presented \"in a completely honest fashion\". It adds that Fazbear Entertainment is \"no longer a corporate entity\" [[ffps-completion-tutorial-atonement]]. The game does not say whether it speaks for the company or only for {{cassette-man}}, the voice on that game's tapes, whose trap it is. One of the trap's devices is marked Fazbear Entertainment, Inc [[ffps-lefte-blueprint]], so he may have worked through the company. If he did not, the apology is his own.",
      "What the company knew can be read only from what it does. It knows enough to deny each time, and to disclaim \"accidental digital consciousness transference\" in the waiver for its VR game [[hw-waiver-consciousness-transference]]. In the staff emails of another game, Special Delivery, its lawyers halt a contractor's work on \"vintage hardware\" before the contractor reports what its scan has let out, going by the order of the emails [[sd-fe-legal-halt-vintage-hardware]].",
      "Before 1987 there is one night to go on. In Secret of the Mimic, set in <<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979|The year ends the official teaser. The day is on a work order dated 9/07/79 (read from an image).>>, the company claims a contractor's work as \"now legally ours\" [[secret-of-the-mimic-dispatch-contract-legally-ours]]. In the ending where its technician walks away, a dispatcher's voice on his van radio, most likely the company's own, dismisses him for misplacing company property [[secret-of-the-mimic-clock-out-real-dispatch]]. A machine in the building says of the technicians before him, \"They didn't listen, and it caught them all\", and that \"Fazbear will send another\" [[secret-of-the-mimic-f10n4-fazbear-will-send-another]]. What the company knew of them is inferred (see ((two-machines))).",
      { kind: "heading", text: "A staged level shows what the company chose" },
      "Because Help Wanted presents itself as the company's product, this archive reads it, and the company products after it, in three layers. The **level as built** is the company's staging: what it chose to show, and never a finding about the past. The **frame** is story: the hidden tapes, a hidden phone call, the endings, and in Special Delivery the staff emails. An **intrusion** is story too: something hidden, glitching, speaking to the player, or working against the level's instructions. The guide itself warns the player off any \"glitch, mistake, or embedded message from unauthorized personnel\" [[hw-handunit-unauthorized-personnel]].",
      "Help Wanted's repair level has the player take a child's hat from Freddy's mouth, and a child's watch and shoe from his chest, for the Lost and Found bin [[hw-pns-freddy-child-items]]. That is a staged prop: it agrees with what older records already carry about the mascots (see ((golden))), and establishes nothing.",
    ],
    counterEvidence: ["ffps-completion-tutorial-atonement", "scott-2019-only-game-developer-existence-canon", "security-breach-msg-marked-for-deletion"],
    tension: "By Pizzeria Simulator's closing message the company is no longer a corporate entity [[ffps-completion-tutorial-atonement]], and Help Wanted has it trading, with \"lawsuits pending\" [[hw-intro-complete-lunatic]]. Either that message was untrue, or it did not last, or Help Wanted's company comes before it: no record places the scan against the fire, and the model's order is a convention. Scott made canon only that an in-universe developer exists, whose games \"may or may not be a cover up\" [[scott-2019-only-game-developer-existence-canon]]. At the Pizzaplex a head of security with no relevant experience is appointed because \"the recommendation came from the top\" [[security-breach-msg-marked-for-deletion]]. Either the company's top serves whatever was writing to her (see ((vanny))), or that thing has reached the company's top, and the records do not choose.",
    changesIf: "A game that shows new owners who really do not know the past, or a statement from Scott on what the in-universe games got wrong.",
    seeAlso: ["digital", "vanny", "pizzaplex", "ffps", "november-1987", "fnaf1-restaurant", "canon-rules"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "sd-rebuilds-of-original-animatronics", // [stated] Compliance on a new model: 'the original' against 'our rebuilds'
      // support
      "fnaf3-tape4-do-as-you-wish", // [stated] 'We are free of liability, do as you wish'
      "fnaf4-pigtail-girl-hide-your-body", // [stated] 'They hide your body'
      "ffps-tutorial-rebranded-disclaimer", // [stated] 'Newly re-branded Freddy Fazbear's Pizza' and liability disclaimer
      "ffps-insanity-certificate", // [stated] Insanity ending: fired, and a certificate 'to ensure that no one believes you'
      "ffps-blacklisted-ending", // [stated] Blacklisted ending: security footage wiped
      "ffps-lawsuits-utah", // [stated] Lawsuits are filed in Washington County, Utah
      "hw-handunit-unauthorized-portion", // [stated] Warning about the unauthorized portion of the game
      "sd-mangle-original-restaurants", // [stated] Customer email: the Mangle 'from the original restaurants'
      "hw2-job-interview-ice-cream", // [stated] Job Interview: Circus Baby plays 'office' and offers ice cream from her hatch
      "hw2-first-aid-simulated-pizza-place", // [stated] First Aid is set in 'a simulated Pizza Place training booth'
      "hw2-fazerblast-fnaf-themed", // [stated] Fazerblast galleries are 'FNAF 1', 'FNAF 2' and 'FNAF 3' themed
      "scott-2019-silver-parasol-logo", // [stated] Silver Parasol logo: the other game developer mentioned in the game
      "scott-silver-parasol-website", // [stated] Scott's post 'Silver Parasol Games': a logo for the 'other game developer'; planned website scrapped
      // colour
      "hw-handunit-risk-assessment", // [stated] 'Staying in your lane' per risk assessment
      "hw-vent-repair-circus-baby-zero-days", // [stated] Vent Repair set at Circus Baby's Entertainment and Rental
      "hw-pns-foxy-former-employee", // [stated] HandUnit: 'a former employee' used an incorrect fuse on Foxy
      "hw-game-over-animatronics-cant-kill", // [stated] Game-over 'Faz-Fact': 'Animatronics can't kill you.'
      "codb-handunit-no-hidden-intent", // [stated] DLC has 'absolutely no hidden intent or purpose'
      "codb-hallway-ends-in-fnaf4-bedroom", // [shown] Hallway Crawl ends in FNaF4's bedroom
      "hw2-sister-location-section", // [stated] A 'Sister Location' section restages that game for staff training
    ],
  },
  {
    id: "digital", part: "afterimage", title: "The rabbit in the code",
    question: "What is the rabbit in Help Wanted's code?",
    answer: "A personality that came off old company circuit boards scanned into the VR game, and that acts with purpose once it is there. It presents as the killer: a person's shape in his kind of costume, with his kind of lure. What it is, the games do not settle: the model reads it as something William Afton left behind on those boards, leans to that over a copying program that had learned him, and does not take it for the whole man.",
    confidence: "medium",
    hero: { image: "hw-trapped-ending-door.jpg", caption: "The end of Help Wanted for a player who follows the last tape: the anomaly looks out through the hatch of a huge metal door, raises a finger to its lips and steps back into the dark [[hw-trapped-ending]]." },
    body: [
      "Hidden in Help Wanted, the company's VR game (see ((cover-story))), are sixteen tape recordings by a tester at the studio that built it [[hw-tape-01]], whom this archive calls {{tape-girl}}. The studio's client, {{fazbear-entertainment}}, sent it old junk, circuit boards and the like [[hw-tape-05]], with no explanation, and told it to scan the lot: that \"would expedite the process\" [[hw-tape-05-client-sent-junk-to-scan]].",
      { kind: "quote", evidence: "hw-tape-05" },
      "In the finished game {{handunit}}, its guide, boasts that the company's teams used \"vintage control-boards almost like plug-and-play, digitally recreating performances and personalities from the past\" [[hw-handunit-vintage-control-boards]]. It jokes that an earlier team made \"a hilarious mistake\" that \"may or may not have resulted in an undesirable anomaly entering the game's code\" [[hw-handunit-anomaly-fun-fact]].",
      { kind: "heading", text: "It wants a way out through a tester" },
      "\"He\" appeared first to Jeremy, who tested the game before her [[hw-tape-05]]. (The games reuse the name: nothing ties him to the guard of 1987 or a gravestone.) Jeremy had nightmares, and then he changed.",
      { kind: "quote", evidence: "hw-tape-07" },
      "One day \"something that looked like a Halloween mask\" lay on the floor, and Jeremy stood in the testing room with the visor on and the front of his shirt black [[hw-tape-09]]. The tapes imply that he had cut his own face with a paper guillotine [[hw-jeremy-self-injury-implied]]. They do not say whether he lived.",
      "The finished game shows it: a grinning, person-shaped figure in a golden-yellow rabbit costume [[hw-rabbit-figure-appearance]]. No game is known to name it. Her word is \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]], and this archive calls it {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) [[scott-2024-interview-placeholder-names-canon]].",
      { kind: "figure", image: "hw-glitchtrap-behind-player.jpg", caption: "The anomaly behind the player in Help Wanted's hub. Only its vest, bow tie and eyes are purple.", evidence: "hw-rabbit-figure-appearance" },
      "By her last day it had left the game and \"attached itself to these logs...my logs\" [[hw-tape-11]]. She came to fear that the logs were \"being used as a Trojan Horse\": whoever gathered them would rebuild the thing [[hw-tape-15]]. The game bears her out, in a mechanic her tape explains: as the player collects the tapes the figure draws nearer, until it stands directly behind [[hw-glitchtrap-approaches-with-tapes]].",
      { kind: "quote", evidence: "hw-tape-16" },
      "Her remedy: let it come close and begin to merge, then throw the disconnect switch she has built in by the main stage, forcing a restart that, she hopes, wipes the memory [[hw-tape-16]]. A player who ignores her ends on the stage as the rabbit figure [[hw-merge-ending]]. One who obeys sees the figure withdraw behind a huge metal door, and a plush rabbit is left in the hub [[hw-trapped-ending]]. The later games most likely follow that ending: what comes next needs the plush (see ((vanny))).",
      { kind: "heading", text: "It presents as the killer" },
      "The yellow rabbit costume is most likely what the killer wore to lure five children (see ((murders))). The Pizza Party level ends in a room dressed for a birthday [[hw-pizza-party-birthday-room]]. The room is the company's staging, and what the figure does in it is not. It steps from behind a curtain and beckons, and the player ends on a stage in a performer's place while it dances [[hw-pizza-party-ending]].",
      "Princess Quest, a game hidden in Help Wanted's mobile version (a fan wiki's account), has a graveyard of six nameless stones, as its arcade version in Security Breach shows [[hw-mobile-princess-quest-graveyard]]: the number of graves on which Pizzeria Simulator ends [[ffps-lorekeeper-gravestones]]. In Help Wanted 2 a long-fingered arm in yellow fur, most likely its own, holds out six rag dolls masked as the four mascots, the yellow bear and the Puppet. The game calls each of them a memory [[hw2-memory-dolls]]. In Princess Quest's last room a rabbit-eared creature hangs overhead [[hw-mobile-princess-quest-final-room]], and a line of glyphs appears that fans decode as \"I always come back\" [[hw-mobile-princess-quest-ending]], the words of {{scraptrap}}, {{william-afton}} [[ffps-scraptrap-always-come-back]].",
      { kind: "figure", image: "hw-pq1-final-room.jpg", caption: "The last room of Princess Quest, with its line of glyphs.", evidence: "hw-mobile-princess-quest-final-room" },
      { kind: "heading", text: "What it is: something he left behind, by a narrow margin" },
      { kind: "callout", tone: "key", title: "What no game says", text: "Which machine the boards came from, and what the thing on them is. When it happens again, in the staff emails of another game, Special Delivery, a colleague asks, \"Steve, which circuit board did you scan?\" The answer is \"Whatever Dan brought me\" [[sd-which-board-unknown]]. No tape and no email names William Afton." },
      { kind: "compare", columns: [
        { title: "Something he left behind", verdict: "The model's reading", pick: true, text: "In these games a board carries a personality: HandUnit says as much of the old control boards [[hw-handunit-vintage-control-boards]], and in Special Delivery a swapped CPU gives a machine \"a whole new personality\" [[sd-cpu-whole-new-personality]]. Scott's teaser for the game hid two lines side by side: \"We let something inside.\" \"It was an accident.\" [[scottgames-hw-teaser-hidden-text]]" },
        { title: "A copying program", verdict: "The rival reading", text: "Edwin Murray's copying machine (see ((two-machines))) was software by 1979, begun as a copy of a program [[secret-of-the-mimic-mail-received-5-min-ago]], and a letter signed WA makes an offer that takes in \"software development\" [[secret-of-the-mimic-mail-wa-far-behind]]. When the anomaly is near, a low-pitched clip plays: the tape speaker's greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]] (a fan wiki's account). The arm with the dolls also holds out Secret of the Mimic's White Tiger doll [[hw2-mimic-teaser-1979-white-tiger]] (see ((mimic))). On recordings at the Pizzaplex a patient has developed \"software programs that talk to you and repeat phrases\", and a therapist hears \"someone else responding\" [[security-breach-cd46-talking-programs]]." },
        { title: "The man himself", verdict: "Not shown", text: "William Afton, whole, in the code. The decoded line invites it, and Ultimate Custom Night gives the same line to its Afton [[ucn-afton-always-come-back]]. But a copy says what its original said, and Pizzeria Simulator presents its fire as his end (see ((ffps)))." },
      ] },
      "The model leans to something William Afton left behind. The signs cannot choose: a copier that had learned him would wear them all. But the model's reading needs one step that no record shows: that the boards came from a machine he had been in. The rival needs two: Murray's program on a company board, and near the killer. Asked about the figure in an interview (a transcript), Scott spoke of \"possession of AI or possession of machines or circuitry\" [[scott-2024-interview-glitchtrap-possession-of-ai]]: what is possessed, not by whom.",
      { kind: "heading", text: "A second scan" },
      "Special Delivery's staff emails show it happen again, most likely at a second firm. A contractor has circuit boards drilled out of stored animatronics [[sd-contractor-circuit-boards-drilled]]. After the last set is scanned a technician is locked out of the system, and then a colleague writes: \"we released a virus when we scanned that last circuit board\" [[sd-circuit-board-scan-virus]]. The emails never say what the virus is, and give it no shape and no name.",
      "In the same emails customers report \"an animatronic that isn't appearing anywhere in our database. Some kind of vintage Bonnie model\", with a bad smell [[sd-vintage-bonnie-reports]]. If the scans followed Pizzeria Simulator's fire, an old rabbit that smells may be the killer's body in its suit, still at large. If they came first, it may be the thing that game hints is outside, \"trying to get in for months\" [[ffps-tutorial-something-outside]]. The model does not choose.",
      "No record places the scans against the fire. That they came after it is the model's convention (see ((timeline-math))), and its reading of the anomaly rests on it. Later games bring William Afton's image back in more than one form (see ((ucn)) and ((burntrap))), and what returns is not one history (see ((thesis))).",
    ],
    counterEvidence: ["sd-which-board-unknown", "hw-tape-girl-calls-it-the-anomaly", "hw-mobile-princess-quest-ending", "hw-glitchtrap-uses-tape-girl-voice", "secret-of-the-mimic-mail-wa-far-behind", "hw2-mimic-teaser-1979-white-tiger", "security-breach-cd46-talking-programs"],
    tension: "No game says which machine the boards came from [[sd-which-board-unknown]], and the game's own word for the figure is \"the anomaly\" [[hw-tape-girl-calls-it-the-anomaly]]: the name it goes by asserts an identity the games do not. The line that ties it most closely to the killer exists only as a fan decoding of glyphs [[hw-mobile-princess-quest-ending]]. The rival's four records are in the box above: the greeting that plays near the figure [[hw-glitchtrap-uses-tape-girl-voice]] (a fan wiki's account), the offer in the WA letter [[secret-of-the-mimic-mail-wa-far-behind]], the White Tiger doll [[hw2-mimic-teaser-1979-white-tiger]] and the patient's talk-back programs [[security-breach-cd46-talking-programs]]. The greeting is a borrowed voice if it is the figure's own, which is how Murray's copying machine is read to speak [[secret-of-the-mimic-log-turn-around]] [[ruin-mimic-reuses-gregory-lines]]. What answers them is weak: nothing in Help Wanted, its Halloween add-on or Special Delivery carries a mark of his. One step against two is a margin and not a refutation.",
    changesIf: "A game that says which machine the boards came from, shows Murray's software on a company board, or dates the scan against the fire.",
    seeAlso: ["cover-story", "vanny", "killer", "ucn", "burntrap", "mimic", "patterns"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "hw-tape-03", // [stated] Tape 3: 'There has to be a lawsuit'; 'it happened in this building'
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
      "hw-handunit-scanned-photos-original-routines", // [stated] HandUnit: scanned photographs 'for reference' and original performance routines
      "hw-handunit-first-dev-team-pulled", // [stated] First development team was pulled from the project
      "hw-pizza-party-spring-bonnie-plush", // [shown] Pizza Party: a yellow rabbit plush turns up in every room
      "hw-pizza-party-favorite-cake-pizza", // [shown] Pizza Party: player picks cake flavor and pizza topping
      "hw-pizza-party-springtrap-window", // [shown] Pizza Party: Springtrap stares through the office window
      "hw-game-over-remember-jeremy", // [stated] Game-over TV: 'Remember Jeremy.'
      "sd-virus-traced-to-fe-board", // [stated] Virus traced to a Fazbear Entertainment circuit board scan
      "sd-circuit-board-does-what-we-tell-it", // [stated] Compliance: 'It has to do what we tell it to'
      "sd-springtrap-did-not-save-the-others", // [stated] Springtrap: 'It did not save the others'
      "hw2-fazerblast-fire-springtrap", // [shown] After the Fazerblast fire: a Springtrap cutout to defeat
      "hw-intro-waiver-not-based-on-testing-injuries", // [stated] Intro: the waiver 'isn't at all based on... injuries associated with testing'
      "sd-contractor-storing-animatronics", // [stated] Contractor staff: 'These things are creeping me out'
      "sd-fe-halts-all-contractors", // [stated] Anna Kwemto: 'It sounds like they're halting work with all their contractors'
      "sd-circus-baby-something-bad-inside", // [stated] AR Circus Baby: 'We need you, so that we have a place to hide'
      "scottgames-site-hw-alt-remember-jeremy", // [stated] Help Wanted teaser page source: alt text 'remember Jeremy'
      // colour
      "hw-credits-tape-girl-qa", // [stated] The tape speaker is credited only as 'QA'
      "hw-tape-room-setting", // [shown] The Tape Room
      "hw-handunit-disappeared-from-boundaries", // [stated] Player 'disappeared' from authorized boundaries
      "hw-handunit-pizza-party-glitch", // [stated] Stage announcement glitches in Pizza Party
      "codb-dancing-glitchtrap", // [shown] The rabbit figure dances on a distant hill
      "codb-scanning-for-glitches", // [shown] Danger! Keep Out! Night 3: 'Scanning for glitches...'
      "sd-mail-server-advisory", // [stated] Staff advisory: the mail server may misdirect email
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
    answer: "Most likely one woman: Vanessa, the Pizzaplex's security guard, acting under the control of whatever writes to her. Most likely she was also the tester Help Wanted leaves with a plush rabbit. The model has no account of one page: a blonde woman in Vanessa's cap and uniform on the roof after the woman in the rabbit costume has fallen.",
    confidence: "medium",
    hero: { image: "hw2-pq4-vanny-crushes-glitchtrap.jpg", caption: "Princess Quest IV, the secret ending of Help Wanted 2: a giant silhouette with the features of the rabbit mask looks into a claw machine [[hw2-pq4-elevator-claw-machine]]. It goes on to crush between its hands a tiny rabbit-eared figure, most likely the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]]." },
    body: [
      "It takes two objects to hear her. One is a grinning white rabbit mask, hidden in the corn maze of Help Wanted's Halloween add-on [[codb-corn-maze-rabbit-mask]]. The other is the green plush rabbit left in the hub when the last tape's instructions are followed [[hw-trapped-ending-plush]] (see ((digital))). When the player wears the one and picks up the other, a woman's voice plays: one side of a conversation.",
      { kind: "quote", evidence: "codb-mask-plush-voice" },
      "She is not named, the other voice is never heard, and what she has made goes unsaid. The voice plays only when the player, whom the game's waiver welcomes to \"the Fazbear Entertainment Quality Assurance team\" [[hw-waiver-qa-team]], wears the mask and holds the plush, so most likely it is the player's own. The plush exists only if she threw the switch as the tapes asked, and here she is, promising not to let someone down.",
      "For more than a year the source code of Scott's website, under each teaser for Security Breach, held an exchange of the same shape.",
      { kind: "quote", evidence: "scottgames-sb-source-stay-the-course" },
      { kind: "heading", text: "Ness's searches raise the alarm" },
      "Among Special Delivery's staff emails (see ((digital))) is a run from {{luis-cabrera}}, who monitors what staff do online, to a colleague he calls {{ness}}. Her searches have set off his alarms: anything with \"torture\" in it [[sd-ness-blood-eagle-calendar]], then \"how to induce compliance in human subjects, and how to induce self-compliance(?)\", and he asks whether she searched for the one word help [[sd-ness-compliance-searches]].",
      "By the order in which the emails arrive, itself a convention, only the \"torture\" email [[sd-ness-blood-eagle-calendar]] comes before the contractor's scan goes wrong [[sd-circuit-board-scan-virus]]. Because that one email comes before the scan, the model reads {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) as having reached her through the VR game.",
      { kind: "heading", text: "Vanessa matches Ness at four points" },
      "Security Breach is set in {{mega-pizzaplex}} (see ((pizzaplex))), and its security guard is {{vanessa}}: a security report signed with her name says \"I was the only one here\" [[security-breach-msg-false-alarm]], and interview notes weigh her for Chief Security Officer [[security-breach-msg-marked-for-deletion]]. A set of retro CDs in that game holds her sessions with company therapists [[security-breach-cd-therapists-shared-and-replaced]]. Here they are set beside Luis's emails. No game calls Ness \"Vanessa\".",
      { kind: "table", head: ["The link", "Ness, in Special Delivery", "Vanessa, in Security Breach"], rows: [
        ["A colleague named Luis", "The emails about her searches are his", "A check of her online history finds Luis, and encrypted conversations with someone else [[security-breach-cd-vanessa-encrypted-conversation]]"],
        ["Things the monitoring caught her buying", "Three \"lifelike, human male rubber masks\" [[sd-ness-rubber-masks]]", "A costume and fake fur, kept secret: \"He said he would always be watching.\" [[security-breach-cd-vanessa-costume-fur]]"],
        ["Voices, and messages", "Luis finds her face close to her screen: \"I heard voices\" [[sd-ness-voices-at-screen]]", "Messages from someone who \"has been hacking into your personal files too\" [[security-breach-cd-vanessa-manipulative-messages]]"],
        ["Where she works", "At a desk that Luis can walk up to", "About to transfer: \"I'm needed somewhere else now.\" [[security-breach-cd-vanessa-transfer]]"],
      ] },
      "On the night of the game a boy, {{gregory}}, finds the hideout of a \"rabbit lady\" and takes a name from it: \"I think her name is.. Vanny?\" [[security-breach-gregory-finds-vanny-hideout]] {{glamrock-freddy}}, the animatronic bear protecting him, weighs the name.",
      { kind: "quote", evidence: "security-breach-freddy-vanny-vanessa-bunny" },
      { kind: "heading", text: "One woman, or two" },
      "So {{vanny}} is most likely Vanessa, acting under the control of whatever writes to her. Security Breach tells all its endings but one as comic pages [[security-breach-ending-burn-it-all-down]], and one page stands against that reading. In the ending reached from the roof the rabbit-costumed woman falls, and the boy lifts her mask from a blonde woman who is drawn like Vanessa and not named [[security-breach-rooftop-unmasked]]. The page after the credits is this one.",
      { kind: "figure", image: "sb-rooftop-ending-vanessa-on-roof.jpg", caption: "After the credits of the rooftop ending: a blonde woman in Vanessa's cap and uniform on the burning roof, looking down. The page prints no name.", evidence: "security-breach-rooftop-vanessa-alive" },
      "Who is inside the costume is settled before the endings divide, so the page cannot be put aside as one branch among several. It counts against one woman in full.",
      { kind: "compare", columns: [
        { title: "One woman", verdict: "The model's reading", pick: true, text: "Vanessa is Vanny. The recordings are about her costume and her watcher, and Freddy spells the name out. In the ending reached by finishing an arcade game, the rabbit mask and bow tie lie on the floor and a blonde woman waits at the doors [[security-breach-ending-redemption]]: the model takes her for Vanessa, though two women who look alike would leave the same page." },
        { title: "Two women", verdict: "Explains the roof", text: "Vanessa, and someone else in the costume: the plain reading of the rooftop page. A cast list that gives the two parts to two performers fits it [[security-breach-credits-vanessa-vanny-two-parts]] [[security-breach-credits-cast-list]]. The model leans against it because it leaves the fur, the watcher and the name as coincidences." },
        { title: "A role", verdict: "True of the mask", text: "On the model's reading the costume has one wearer, but the mask is staff equipment: a poster tells staff to \"TAKE OFF YOUR MASK!\" [[hw2-poster-take-off-your-mask]], and the one in RUIN, Security Breach's sequel, was \"left behind by some Faz-Technician\" [[ruin-security-mask-left-by-faz-technician]]. What passes from person to person is the place the rabbit in the code needs, \"someone plugged into this game\" [[hw-tape-16]]. By RUIN another thing is using the wearer (see ((mimic)))." },
      ] },
      { kind: "figure", image: "sb-credits-cast-list.jpg", caption: "Security Breach's cast list, from its credits roll: \"Vanessa\" and \"Vanny\" stand on two lines, with two performers.", evidence: "security-breach-credits-cast-list" },
      { kind: "heading", text: "Princess Quest: fought from inside, and unproven" },
      "The way out, if there is one, is an arcade game: the ending with the mask on the floor is reached by finishing it [[security-breach-ending-redemption]]. The Pizzaplex has Princess Quest as cabinets, the third of them on no inventory [[security-breach-msg-out-of-order]], and they had already drawn staff. A log found near one of the cabinets, which names no game, reads \"I did what you wanted! I beat parts 1 and 2\" [[security-breach-msg-red-flag]], and a leaving employee says of the Princess, \"She's testing me. I am not yet worthy.\" [[security-breach-msg-arcade-conspiracy]] Of the scenes below, the hideout in RUIN is told as described.",
      "The third game's Princess finds a door locked and is left with a key in place of a rabbit mask and a plush, and the cabinet then shows \"ERROR\"; by a fan wiki's account the game is a pixel copy of Help Wanted's hub and corn maze, she strikes a door like the one at the end of Help Wanted, and there is a scream [[security-breach-pq3-help-wanted-hub-trapped-door]]. Help Wanted 2, the next product, hides a fourth as its secret ending. The rabbit mask its player has worn throughout is traded for the green plush [[hw2-pq4-vanny-mask-trade]], and the giant silhouette shown above crushes a tiny rabbit-eared figure, most likely the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].",
      "The model reads these games as one fight against the rabbit, made from inside the game. No game says who made them, and whether it worked is open. Help Wanted 2's main ending has a hand gripping the door of a recharge station from inside, a rabbit costume's by a fan wiki's account [[hw2-faz-force-ending]], and the rabbit in the code glitches that game's instruction screens [[hw2-glitchtrap-corrupts-backstage]]. One ending shows that figure crushed, and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow on the hideout wall [[ruin-vanny-hideout-glitchtrap-shadow]].",
      "Vanessa may have been freed, and the signs of it are few. In that hideout a Princess Quest cabinet lies toppled, with a sword through it that only the mask shows [[ruin-vanny-hideout-glitchtrap-shadow]]. One of RUIN's endings shows, again through the mask, the boy and a blonde woman on the hill from the last page of the Princess Quest ending [[ruin-ending-safe-spot]]. No later game shows her with the mask off.",
    ],
    counterEvidence: ["security-breach-rooftop-vanessa-alive", "security-breach-credits-vanessa-vanny-two-parts", "ruin-gregory-comics-depict-endings", "hw2-pq4-consequences-achievement", "hw2-glitchtrap-corrupts-backstage", "hw2-faz-force-ending"],
    tension: "The rooftop page will not fit [[security-breach-rooftop-vanessa-alive]]. The game's cast list also gives \"Vanessa\" and \"Vanny\" to two performers, as two parts [[security-breach-credits-vanessa-vanny-two-parts]] [[security-breach-credits-cast-list]]. A credit names a voiced part and not a person, so the list does not say two women; it is still what two women would look like in a cast list, and the model counts it against one woman, at less weight than the page. On her release, the comic pages in RUIN that look like Gregory's have scenes that match the other endings and none of the Princess Quest one [[ruin-gregory-comics-depict-endings]] (read from an image), and no later game shows her with the mask off. On the remedy, Princess Quest IV's achievement reports \"System threats found. Repair complete.\" [[hw2-pq4-consequences-achievement]], but in that same game the rabbit in the code glitches the instruction screens [[hw2-glitchtrap-corrupts-backstage]] and a hand, a rabbit costume's by a fan wiki's account, grips a recharge station's door from inside in the main ending [[hw2-faz-force-ending]]: the games show the thing fought from inside, and do not show that it worked.",
    changesIf: "A game that shows two women together outside the rooftop page, names the caller on the hidden call, or says outright that the two are one; a later game that shows Vanessa with the mask off; or any third record for two women.",
    seeAlso: ["digital", "pizzaplex", "cover-story", "mimic", "burntrap", "patterns"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "scottgames-site-sb-source-stay-the-course", // [stated] Security Breach page source: 'Focus on my voice.' / 'Have you selected one?' / 'I have.'
      // support
      "hw-mobile-princess-quest-unlock", // [shown] Princess Quest hidden in the mobile port
      "sd-ness-cut-in-half-search", // [stated] Ness searched how far a human can be cut in half
      "sd-ness-interested-in-it", // [stated] Ness showed interest in IT
      "hw2-pq4-unlock", // [shown] Princess Quest IV starts after six dolls and a purple Faz-Token
      "hw2-pq4-old-man", // [stated] Princess Quest IV: the old man's lines
      "hw2-pq4-player-enters-game", // [shown] PQ IV: struck by the Princess, the player is inside the game
      "hw2-springtrap-cutout-pq3-scream", // [implied] Wiki: the Springtrap cutout's scream is the sound that ends Princess Quest III
      "codb-mask-plush-voice-opening", // [stated] Hidden call, opening: 'Yes, I hear you... There's no miscommunication'
      "hw2-credits-vanny", // [stated] Cast credits list a 'Vanny' role
      "hw2-pq4-alpha-take-it", // [stated] The cabinet reads 'Princess Quest IV'; its title screen, 'Princess Quest (Alpha)'
      "security-breach-msg-stolen-property", // [stated] Vanessa's report: Music Man prototypes stolen, 'no sign of a break in'
      "security-breach-msg-no-questions-asked", // [implied] Head Security Guard hired with an anonymous internal reference
      "security-breach-msg-pq1-maint-log", // [stated] Maintenance log guesses Princess Quest 1 came from 'that old mobile game'
      "security-breach-vanny-lines", // [stated] Vanny's spoken lines
      "security-breach-cd-vanessa-father-bill", // [stated] Therapist to Vanessa: 'Your dad's name was Bill?'
      "security-breach-freddy-no-rabbit-not-anymore", // [stated] Freddy: 'There is no rabbit at the Mega Pizzaplex... Not anymore.'
      "security-breach-pq2-old-man-fnaf1-office", // [shown] Princess Quest 2, per the wiki: an old man's sword of light, and a door to an office like the first game's
      "scottgames-site-sb-protect", // [shown] Security Breach teaser: 'PROTECT' (security guard)
      "scottgames-site-sb-obey", // [shown] Security Breach teaser: 'OBEY' (rabbit-costumed figure with knife)
      "scottgames-site-sb-rock-rabbit-figure-added", // [shown] Security Breach 'ROCK!' teaser, second version: a rabbit-eared figure on the balcony
      "scott-2024-interview-vanny-underused", // [stated] Vanny 'was not utilized to her fullest potential'
      // colour
      "security-breach-vanessa-6am-reward", // [stated] Vanessa at 6 AM: 'I think you deserve a reward'
    ],
  },
  {
    id: "pizzaplex", part: "afterimage", title: "One night at the Pizzaplex",
    question: "What is going on at the Pizzaplex, and who is Gregory?",
    answer: "The Mega Pizzaplex stands over a buried pizzeria, its staff messages ask where everyone has gone, and a woman in a rabbit costume walks it at night. Gregory is a human boy with no record in the company's systems who lives through one night there. The game's endings are branches, and the sequel follows no single one of them. The building it shows is most likely the aftermath of the route that goes underground.",
    confidence: "medium",
    hero: { image: "ruin-gregory-comic-pages.jpg", caption: "Eight comic pages found in RUIN, which Gregory's friend thinks he drew. They show scenes from Security Breach's endings, and none from the Princess Quest ending [[ruin-gregory-comics-depict-endings]]." },
    body: [
      "Security Breach takes place in one building over one night: {{mega-pizzaplex}}. All over it are messages that its staff left behind. One is a reminder that the all-staff meeting is \"this Thursday night at 11:30PM\", that attendance is mandatory, and that \"There will be cake!\" [[security-breach-msg-all-staff-meeting]] Another is a question.",
      { kind: "quote", evidence: "security-breach-msg-job-security" },
      "The messages never say what happened at that meeting. Night staff are no longer needed, owing to \"the success of the S.T.A.F.F. project\", the building's own robots [[security-breach-msg-pink-slip]]. Bonnie, the band's rabbit, was last tracked walking into Monty Golf at 4:12AM [[security-breach-msg-missing-bonnie]].",
      "And a customer has written in: \"Why did you reopen? Everyone remembers what happened to those kids.\" [[security-breach-msg-it-is-happening-again]] The message does not say which kids. Where the staff went, and what happened to the wrecked rabbit animatronic, most likely Bonnie, that lies in a room in RUIN, the game's sequel [[ruin-glamrock-bonnie-remains-hidden-room]], are open (see ((open))).",
      "The building stands on something, too: a ruined pizzeria whose sign reads \"Freddy Fazbear's Pizza Place\" and, in a recharge station down there, {{burntrap}} [[security-breach-underground-pizza-place]] (known as Burntrap, a working name that Scott has said now stands [[scott-2024-interview-placeholder-names-canon]]). ((burntrap|The next chapter)) tells both in full.",
      { kind: "heading", text: "Gregory is a boy the systems do not know" },
      "Early in the game {{glamrock-freddy}}, the band's bear, wakes in his green room with a boy hiding in his stomach hatch. He scans him.",
      { kind: "quote", evidence: "security-breach-intro-not-in-database" },
      "{{vanessa}}, the security guard, says the same later: \"there's no record of him\" [[security-breach-vanessa-no-record]]. That is all it means: the company's systems do not know him. No game makes {{gregory}} anything but a human child.",
      "At midnight he is still inside. An intercom announces that the Mega Pizzaplex \"is now closed\", a shutter covers the entrance, and he calls out \"I'm still here!\" [[security-breach-intercom-pizzaplex-now-closed]] Freddy tells him that the security doors reopen at 6:00am [[security-breach-freddy-doors-reopen-6am]].",
      { kind: "figure", image: "sb-closing-announcement-entrance.jpg", caption: "The closing announcement, in the game's subtitles, with the entrance in view.", evidence: "security-breach-intercom-pizzaplex-now-closed" },
      "In RUIN, set after this night, posters with his face read \"MISSING / HAVE YOU SEEN ME?\" [[ruin-missing-gregory-poster]]. {{cassie}}, whom that game's synopsis calls his best friend, goes into the wreck after a message in his voice says he is trapped there [[ruin-cassie-seeks-gregory]]. A second voice of his reaches her on her radio: \"I'm not at the Pizzaplex.\" [[ruin-real-gregory-not-at-pizzaplex]]",
      { kind: "figure", image: "ruin-missing-gregory-poster.jpg", caption: "One of RUIN's posters of Gregory.", evidence: "ruin-missing-gregory-poster" },
      "The retro CDs that hold Vanessa's sessions (see ((vanny))) also have company therapists with a second patient, who never speaks and is never named. This archive calls the patient client 46, after the numbers on those discs. A therapist tells the patient that the chair does not really fit, and calls the patient \"something of a phenom\", \"like a hacker\" [[security-breach-cd46-treated-as-child-phenom]]. A security still shows the patient talking to \"someone, or something\" with what \"almost look like rabbit ears\" [[security-breach-cd46-rabbit-ears]], and a therapist says that a glitch in the building's robots was traced to the client [[security-breach-cd46-glitch-subroutines]].",
      "If the client is Gregory, something with rabbit ears was using the boy against the building before the night began. The recordings stop short of the name, and the model does not rely on it.",
      { kind: "heading", text: "Only Freddy does not hunt him" },
      "Through the night the rest of the band hunts the boy, and Freddy does not. Freddy is also the one who finds, at the start, that he \"cannot connect to the main network\" [[security-breach-freddy-cannot-connect-main-network]]. The game does not say that the one explains the other. A woman in a rabbit costume walks the building too, whom Freddy says he has not seen [[security-breach-freddy-cannot-see-rabbit-lady]]: most likely the guard herself, under the control of whatever writes to her (see ((vanny))).",
      "The place runs on swappable parts: Parts and Service, Vanessa tells Freddy, can \"slap your casing on a new Endo\" [[security-breach-vanessa-new-endo]]. The model reads that as the end of a line that starts with a costume maker's machine that \"can fit into any costume we've created\" [[secret-of-the-mimic-log-training-m1]] (see ((two-machines))).",
      "At 6 AM the exit opens, and the boy gives his reason for staying.",
      { kind: "quote", evidence: "security-breach-gregory-more-disappearances" },
      { kind: "heading", text: "Six endings, and RUIN follows no single one" },
      "What follows depends on the way out. RUIN is set in the building afterwards, and in it are eight comic pages that \"look like Gregory drew them\", his friend says [[ruin-gregory-comics-depict-endings]].",
      { kind: "table", head: ["The way out", "What it shows", "In RUIN"], rows: [
        ["The front door", "The boy asleep in a box in an alley, under a newspaper headed \"MISSING\" [[security-breach-alley-newspaper]], a rabbit-eared shadow, most likely the rabbit-costumed woman's, beside him [[security-breach-ending-alley]]", "Drawn in the comics"],
        ["The loading dock", "He and Freddy drive off in a company van [[security-breach-ending-getaway]]", "Drawn in the comics"],
        ["The roof", "Freddy takes the rabbit-costumed woman off the burning roof [[security-breach-ending-rooftop]], yet a last page has a blonde woman in Vanessa's cap and uniform above [[security-breach-rooftop-vanessa-alive]] (see ((vanny)))", "A page fits it, but RUIN's building still stands, wrecked"],
        ["Her hideout", "The boy has the staff robots dismantle her, and Freddy shuts down [[security-breach-ending-disassemble-vanny]]", "Drawn in the comics"],
        ["The old elevator", "The boy fights the burnt rabbit under the Pizzaplex, and as the place burns a mass of animatronic parts takes hold of it and lifts it out of sight [[security-breach-ending-burn-it-all-down]]", "Drawn in the comics, and most likely the route behind RUIN's building"],
        ["Princess Quest", "With the three Princess Quest arcade games finished, the mask lies on the floor and a blonde woman waits at the doors [[security-breach-ending-redemption]]", "Not in the comics"],
      ] },
      "They are branches, and one rule covers them: what an ending makes happen may not have happened, and what it shows to be already so holds on every route. No game says which happened, and the model's account is a composite: one route for the building, another for Vanessa.",
      "RUIN's player, Cassie, is handed a mask that lays a second view over the building [[ruin-mask-bot-helpi-vanni]] (see ((mimic))). With it off, the Pizzaplex is wrecked and abandoned [[ruin-pizzaplex-abandoned-earthquake]]. The public story is an earthquake: \"Earthquake shakes pizza plex\" [[ruin-pizzaplex-abandoned-earthquake]] (read from an image).",
      "A raceway has collapsed [[ruin-something-tunneled]], and Roxanne, the band's wolf, calls the boy's name and seizes Cassie: \"GIVE ME BACK MY EYES!!!\" [[ruin-roxy-give-me-back-my-eyes]] The old elevator opens only once the boy has taken her eyes, though he can take them on any route [[ruin-roxy-give-me-back-my-eyes]]. One comic page draws a burnt rabbit beside a bear-faced mass, as in the underground ending [[ruin-gregory-comics-depict-endings]]. None of these settles it, and together they make the underground route the most likely.",
      "One body in RUIN seems to point another way: a headless Freddy attacks Cassie below the rabbit-costumed woman's hideout. Freddy is taken apart in the hideout and Princess Quest endings [[ruin-prototype-freddy-headless]], and escapes with the boy from the underground [[security-breach-ending-burn-it-all-down]]. But the word \"PROTOTYPE\" is printed under its foot [[ruin-prototype-freddy-headless]]: it is another machine, and does not count against the underground route.",
      "For Vanessa the model reads the Princess Quest ending: she may have been freed, on signs seen only through the mask (see ((vanny))). The comics cut both ways: either they are stories the boy made up, which would leave the Princess Quest ending as what happened, or they are things he saw. The game does not choose.",
    ],
    counterEvidence: ["security-breach-ending-alley", "ruin-gregory-comics-depict-endings", "security-breach-rooftop-vanessa-alive"],
    tension: "The front-door ending leaves a rabbit-eared shadow, most likely the rabbit-costumed woman's, beside the sleeping boy [[security-breach-ending-alley]], and no later game undoes it on screen. The comic pages have scenes that match the other endings and none of the Princess Quest one, on which half of the model's account rests [[ruin-gregory-comics-depict-endings]] (read from an image). And the rooftop ending's last page is not a branch that can be set aside [[security-breach-rooftop-vanessa-alive]] (see ((vanny))).",
    changesIf: "A later game that says which Security Breach ending happened, shows Vanessa with the mask off, or names client 46.",
    seeAlso: ["vanny", "burntrap", "mimic", "cover-story", "two-machines", "open"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // core
      "security-breach-cd46-hacking-pizzaplex", // [stated] Client 46 suspected of hacking the Pizzaplex
      // support
      "security-breach-msg-understudy", // [stated] Monty replaces Bonnie as bass player
      "security-breach-msg-roxy-upgrade", // [stated] Roxy's upgrade: she stares and talks to other bots through walls
      "security-breach-msg-monty-upgrade", // [stated] Monty's claw upgrades used to cause damage
      "security-breach-msg-bbw-maint-log", // [stated] BB World cabinet vanished before 'the company meeting'
      "security-breach-msg-night-shift", // [stated] Security employee: 'This place is not safe'
      "security-breach-freddy-older-models-flawed", // [stated] Freddy: 'Bad things happened in the past... older models'
      "security-breach-cd46-therapists-missing-dead", // [stated] Client 46: previous therapists missing, one found mangled by machinery
      "security-breach-6am-choice", // [stated] At 6 AM Freddy offers a choice: leave or investigate
      "security-breach-vanessa-freddy-system-crash", // [stated] Vanessa: Freddy's 'system crashed'; Parts and Service put him on reduced power
      "security-breach-msg-monty-mischief", // [stated] Message: Monty skips shows and is always found on the catwalks over Monty Golf
      "security-breach-msg-staff-party-question", // [stated] Message: afraid of being laid off for skipping the staff party
      "security-breach-cd46-doing-the-manipulating", // [stated] Therapist to client 46 (CD 15): 'I think you're the one doing the manipulating'
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
      "security-breach-freddy-cannot-exit", // [stated] Freddy says he cannot leave the facility
      "security-breach-sister-location-room-code", // [stated] Wall code in the hidden room found with the Faz Camera
      "security-breach-daycare-attendant-lights", // [stated] Daycare Attendant roams when the lights go out
      "security-breach-msg-behind-the-maze", // [stated] Message: clanging in the AC; the writer wants to reach the catwalks over Gator Golf
      "ruin-eclipse", // [shown] Daycare Attendant rebooted as 'Eclipse'
    ],
  },
];
