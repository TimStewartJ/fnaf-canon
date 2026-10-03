import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 6: The machines (Undated).
 * What Afton built under his own name: machines made to lure a child and take it, one blueprint with the word Remnant on it, and what the machines did to his son. The games give none of it a date, and its place in the order is the model's convention.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "funtimes", part: "machines", title: "Machines built to take children",
    question: "What were the Funtimes, the machines of Sister Location, built for?",
    answer: "To lure a child and take it. That rests on three things together: the labels on their blueprints, such as \"Voice Mimic/ Luring\" and \"Storage Tank\"; what Circus Baby did the one time a child was alone with her; and a father who would not let his own daughter near her. That daughter is the one child the games show these machines take.",
    confidence: "high",
    hero: { image: "sl-blueprint-funtime-freddy.jpg", caption: "A rare screen in Sister Location: Funtime Freddy's blueprint, with \"Parental Tracking\", \"Voice Mimic/ Luring\" and \"Storage Tank\" among its labels [[sl-blueprint-funtime-freddy]]." },
    body: [
      "Sister Location opens on two voices. An unnamed man praises a set of new robots, then asks about certain choices in their design. The designer answers with what one of them, most likely Circus Baby, can do: dance, sing, inflate balloons, take song requests, even dispense ice cream. The first man replies.",
      { kind: "quote", evidence: "sl-intro-mr-afton-board", text: "With all due respect, those aren't the design choices we were curious about, Mr. Afton." },
      { kind: "heading", text: "What the sheets list" },
      "The designer is {{william-afton}} (see ((killer))), alive and at work: no game dates this, and the storyline tells it before November 1987. The game is pointing at his designs. It also shows them. Rarely, as the player moves between rooms, a blueprint of one of the four machines flashes on the screen [[sl-blueprint-screens]] (read from an image). Each gives a name, a height, a weight and four lettered features, over a footer that reads \"Afton Robotics, LLC\" [[sl-blueprint-funtime-freddy]].",
      { kind: "table", head: ["Machine", "The four features on its sheet"], rows: [
        ["Circus Baby [[sl-blueprint-circus-baby]]", "Air Hose Attachment. Internal Ice Cream Dispenser. Song Databank. Emergency Stop."],
        ["Funtime Freddy [[sl-blueprint-funtime-freddy]]", "Proximity Sensor/ Grouping Coordination. Parental Tracking/ 360 Pivot. Voice Mimic/ Luring. Storage Tank."],
        ["Funtime Foxy [[sl-blueprint-funtime-foxy]]", "Light Activation Sensor. Parental Voice Sync & Replay. Variable Scent Release. Remote Floor Anchor."],
        ["Ballora [[sl-blueprint-ballora]]", "Audio Activation Sensor. Deter & Misdirect, Remote Activation. Balance/ Stability. Collision Sensor."],
      ] },
      { kind: "callout", tone: "key", title: "What the sheets do not say", text: "No sheet uses the word children, none says what the tank is for, and Circus Baby's shows no claw. The labels are one leg of three. The other two are what Circus Baby did, and what a father forbade." },
      { kind: "heading", text: "One day on stage" },
      "Before the nights a small girl's voice is heard, pleading with her father. He lets other children see the machine, she says, and not her.",
      { kind: "quote", evidence: "sl-girl-daddy-let-me-play" },
      "{{circus-baby}} tells the rest herself. She was on a stage only once, for a single day, in a room where children ran in and out, and she counted them [[sl-baby-on-stage-one-day]]. Then there was one.",
      { kind: "quote", evidence: "sl-baby-ice-cream-story", text: "A little girl, standing by herself. I was no longer... myself, and I stopped singing. My stomach opened, and there was ice cream." },
      "The girl stepped closer, and there was screaming. A hidden minigame shows it from outside: Baby hands out cupcakes, a girl comes up alone, and a claw comes out of Baby's stomach and pulls her in [[sl-baby-minigame-girl-grabbed]]. After the real ending the girl's voice is heard once more: \"I don't know why he wouldn't let me come see you, you're wonderful! Where did the other children go?\" [[sl-girl-where-did-other-children-go]]",
      { kind: "figure", image: "sl-baby-minigame-claw.png", caption: "Circus Baby in her hidden minigame, the claw out of her stomach. No blueprint shows it.", evidence: "sl-baby-minigame-girl-grabbed" },
      "The one child the games show these machines take is their maker's own daughter. The claw and the \"Storage Tank\" are most likely there to hold a child: no sheet says what either is for [[sl-blueprint-funtime-freddy]].",
      "She most likely stays on in the machine. Sister Location never says so, and never speaks the name {{elizabeth-afton}}. A game later, in Pizzeria Simulator, what is left of Circus Baby cries \"I will make you proud, daddy!\" [[ffps-scrap-baby-make-you-proud-daddy]] Then {{cassette-man}}, the voice on that game's tapes (see ((ffps))), cuts across her: \"I'm sorry to interrupt you, Elizabeth, if you still even remember that name\" [[ffps-completion-connection-terminated-elizabeth]].",
      "A kinder reading takes the labels for safety features and the death for a malfunction. It fails on the labels themselves, \"Luring\" [[sl-blueprint-funtime-freddy]] and \"Deter & Misdirect\" [[sl-blueprint-ballora]], on Baby's own account, and on the rest of that speech in Pizzeria Simulator. With a party due on Saturday [[ffps-tutorial-saturday-party]], she exults: \"All of those little souls, in one place, just for us... a gift.\" [[ffps-scrap-baby-completion-monologue]] \"Now we can do what we were created to do, and be complete!\" [[ffps-scrap-baby-make-you-proud-daddy]] The model reads her little souls as the children she expects at that party.",
      { kind: "heading", text: "The opening that was cancelled" },
      "Circus Baby speaks of \"my old pizzeria\" [[sl-springlock-suit-from-old-pizzeria]]. A teaser Scott published in August 2016 read only \"CANCELLED\" and \"Due to leaks.\" [[scottgames-site-sl-cancelled-teaser]] Brightened, the same image holds a news report on {{circus-babys-pizza-world}}.",
      { kind: "figure", image: "scottgames-sl-cancelled-news-brightened.png", caption: "The teaser, brightened, with the report behind the one word.", evidence: "scottgames-site-sl-news-gas-leak-cancellation" },
      "The grand opening \"has apparently been cancelled due to reported gas leaks in the building\", though sources suspect something else [[scottgames-site-sl-news-gas-leak-cancellation]]. One local is quoted: only \"a handful of people\" ever saw the inside, \"kids from here and there, making sure everything worked right\" [[scottgames-site-sl-news-kids-tested]]. A tenant across the street claims to have seen large equipment taken out at night under tarps, and a few weeks later the building was for sale [[scottgames-site-sl-news-equipment-removed]]. The page source under the image ended on a statement: \"be watching for her to appear at a neighborhood party near you!\" [[scottgames-site-sl-source-bright-future-circus-baby]]",
      "The game shows such a business. Its facility is reached by an elevator going down [[sl-elevator-underground-facility]], its own map calls it \"Circus Baby's Entertainment & Rental\" [[sl-extras-map-entertainment-and-rental]], and {{handunit}}, its recorded guide, explains: \"our robotic entertainers are rented out for private parties during the day\" [[sl-handunit-rented-for-private-parties]]. That the machines were hired out is stated. That the hiring was a way to take children is the model's reading, and a weak one: no victim of the rental business is on record.",
      { kind: "heading", text: "Undated, after a Freddy's closed" },
      "None of this is dated. HandUnit gives one bearing: the business followed \"the unfortunate closing of Freddy Fazbear's Pizza\", which set the stage \"for another contender in children's entertainment\" [[sl-handunit-freddy-fazbear-closing]]. It does not say which Freddy's. The designer is alive throughout, answering his questioner and forbidding a daughter.",
      "The model tells the venture after the five murders (see ((murders))). That is a convention with HandUnit's one sentence behind it: the opposite order, the daughter's death first, has no record for it and none against. There is one limit. FNaF4's house has a second bedroom with a pink bed that nobody is shown using [[fnaf4-second-bedroom]]. If that room is hers (see ((afton-house))), her day at the pizzeria can hardly fall after FNaF1's restaurant closed.",
      "What the machines themselves wanted is told in ((michael)). The firm's one other blueprint on record, the only sheet with the word Remnant on it, is in ((remnant)).",
    ],
    counterEvidence: ["sl-fake-ending-girl-voice"],
    tension: "No child other than the daughter is shown taken by these machines, and her father had kept her away from Baby. A little girl's voice later says \"I know it was an accident\" [[sl-fake-ending-girl-voice]]; nothing says which accident, and the line carries no weight either way. The sheets themselves do not say what the machines are for, which is why the answer rests on three things together and not on the labels alone.",
    changesIf: "A second victim of these machines, or a dated record for Circus Baby's Pizza World.",
    seeAlso: ["killer", "michael", "remnant", "salvage", "afton-house", "timeline-math"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "scott-2016-sl-store-text", // [stated] Sister Location Steam description: Circus Baby's Pizza World ad and technician job
      "scottgames-site-sl-never-just-one", // [shown] Sister Location teaser: 'There was never just one.'
      "scottgames-site-sl-news-entrepreneur", // [stated] Hidden news: a local entrepreneur financed the Pizza World
      "scottgames-site-sl-source-rental-schedule", // [stated] Sister Location page source: a coded weekly schedule for five units
      "scottgames-site-sl-source-client-directory", // [stated] Sister Location page source: a client directory with birthday entries
      "scottgames-site-sl-source-service-log-afton-robotics", // [stated] Sister Location page source names 'AftnROBTCS' as maintainer
    ],
  },
  {
    id: "remnant", part: "machines", title: "Remnant",
    question: "What is Remnant?",
    answer: "No game says what Remnant is. The games give one sheet: a blueprint marked Afton Robotics, headed \"S.calable C.reation of U.lterior P.resence\", which labels a \"Remnant Injector\" and a \"Remnant Reservoir\" and notes that overheating \"might neutralize the effects permanently\". The model reads Remnant as the name the killer's firm gave to what it was trying to make use of, and says no more.",
    confidence: "low",
    body: [
      "On one path through Pizzeria Simulator, three blueprints come up on the office monitor while the game's hidden tape plays [[ffps-insanity-egg-baby-trigger]] [[ffps-insanity-new-way-to-desecrate]] (see ((ffps))). One of them is marked Afton Robotics, LLC, and it is where the word Remnant enters the games.",
      { kind: "figure", image: "ffps-insanity-scup-blueprint.png", caption: "The whole sheet. Everything Pizzeria Simulator states about Remnant is on it.", evidence: "ffps-scup-blueprint" },
      "It is headed \"S.calable C.reation of U.lterior P.resence\". Among its lettered parts are an excavating arm, a \"Remnant Injector\" and a \"Remnant Reservoir\", and the blueprint specifies how the last two are to be handled. For the injector: \"Leave trace line amount on interior. Over-usage/ Over-exposure negates effect.\" [[ffps-scup-blueprint]] For the reservoir: \"When heated, no observable motion. Keep in heated tank at sustained temperature. Substance should be malleable, but not more.\" [[ffps-scup-remnant-reservoir-notes]] And last: \"There is a possibility that overheating might neutralize the effects permanently.\" [[ffps-scup-overheating-neutralize]]",
      "These are design notes. No game shows an injection. The machine is most likely Sister Location's scooper, the tool of \"the room where they use the scooper\" [[sl-scooping-room-explained]], which that game shows at work on its own machines [[sl-ballora-scooped]]. The initials all but spell the word, the sheet's first part is an excavating arm, and the company is the same. The sheet never prints the word.",
      { kind: "callout", tone: "key", title: "What no game says", text: "What Remnant is made of. Where it comes from. What its \"effect\" is. That it is what holds the dead in machines. The sheet's only statement of purpose is its heading [[ffps-scup-remnant-reservoir-notes]]." },
      "How the murdered children came to stay in the first machines is a separate question. The hidden tape is spoken by {{cassette-man}}, the voice on Pizzeria Simulator's tapes, and the machines that hold the small souls are, in his words, \"prisons of my making\" [[ffps-insanity-small-souls-prisons]]. On the same tape he says that he never learned how the children came to be in them [[ffps-insanity-tiny-breaths]]. The one hand the games show at work is {{puppet}}'s: in a FNaF2 minigame it sets a mascot's head on each of four grey, dead-looking children [[fnaf2-give-gifts-give-life]]. ((golden)) tells both in full.",
      "The Cassette Man later speaks to his daughter, most likely the child in the Puppet (see ((child-outside))), of \"the way you lifted others into yours\" [[ffps-completion-shut-out]]. No record speaks to the killer's intent. The model reads those first hauntings as none of his design, and that is an argument from silence.",
      "The same tape says what came next. \"As if what he had already done wasn't enough, he found a new way to desecrate, to humiliate, to destroy.\" [[ffps-insanity-new-way-to-desecrate]] The small souls are \"now set to new purpose and used in ways I never thought imaginable\" [[ffps-insanity-small-souls-prisons]]. Other lines, of a trap in which he \"overpowered them again\" [[ffps-insanity-trap-again]], can be read as the taking apart of the four mascots (see ((springtrap))). The tape does not say whether that is the new wrong or a later one. It names no machine, and it dates neither this machine nor those of ((funtimes)). But this sheet is on the screen while it plays. So the model reads Remnant as the name the killer's firm gave to what it was trying to make use of.",
      "The note about heat is a handling warning, written by the people who wanted the effect. It is hedged twice, \"a possibility\" and \"might\" [[ffps-scup-overheating-neutralize]], and it proposes no remedy. The model reads the fire that ends Pizzeria Simulator against this note (see ((ffps))), and no record says that the Cassette Man had it in mind.",
      "One other game on record uses the word. Special Delivery's Remnant is something the player collects, which \"is used to power up your animatronics\" [[sd-tutorial-remnant-collection]]: a game resource, and no evidence of what the word means in the story.",
    ],
    counterEvidence: ["sd-tutorial-remnant-collection"],
    tension: "No record states a link between the substance and the dead, and the tape that speaks of small souls names no machine. The only other use of the word on record is Special Delivery's collectible [[sd-tutorial-remnant-collection]], which treats it as a resource and explains nothing. The model's reading rests on the sheet's heading and on the company the sheet keeps: it is on the screen while the Cassette Man speaks of small souls \"set to new purpose\" [[ffps-insanity-small-souls-prisons]]. That is thin, which is why the chapter is marked low.",
    changesIf: "A game that defines the word.",
    seeAlso: ["funtimes", "michael", "springtrap", "salvage", "ffps", "golden"],
    // Every record with this chapter as its home is cited in the text.
    further: [],
  },
  {
    id: "michael", part: "machines", title: "The son who should be dead",
    question: "What happened to Michael Afton?",
    answer: "On his father's instructions he went underground, where the machines scooped him hollow and walked out wearing him. His body rotted, threw them up into a sewer, and got back up.",
    confidence: "high",
    hero: { image: "sl-golden-freddy-cutscene-fazbears-fright.png", caption: "Sister Location's last cutscene: a burnt building whose half-legible sign reads as Fazbear's Fright, and a figure with rabbit's ears at the right [[sl-golden-freddy-cutscene-springtrap]]." },
    body: [
      "Sister Location's last cutscene shows no face. A burnt-out building stands in the dark, under a sign on which only \"FAZBE\" and \"FRI\" can still be read [[sl-golden-freddy-cutscene-springtrap]]. A man speaks over it: \"Father. It's me, Michael. I did it. I found it. It was right where you said it would be.\" [[sl-golden-freddy-cutscene-father]]",
      "What he found, and what finding it cost him, is the week the game has just played.",
      { kind: "heading", text: "The week underground" },
      "He goes down by elevator [[sl-elevator-underground-facility]] to the facility that hires out his father's machines (see ((funtimes))). {{handunit}}, its recorded guide, welcomes him as it would any new hire [[sl-handunit-intro-job-ad]], asks his name, and corrects what he types to \"Eggs Benedict\" [[sl-eggs-benedict]]. The work is to look in on each machine through a window and, if it is off its stage, give it \"a controlled shock\" [[sl-controlled-shocks]].",
      "On the second night another voice speaks to him: {{circus-baby}}, one of the machines. \"I don't recognize you. You are new.\" [[sl-baby-i-remember-this-scenario]] She warns him off the guide's orders: \"If you follow his instructions, you will die.\" [[sl-baby-warns-handunit-will-kill]] The third night ends with a machine leaping at him [[sl-funtime-foxy-knockout]]. He wakes still in the building, hidden where the cameras could not find him. \"I kidnapped you.\" [[sl-baby-i-kidnapped-you]]",
      "He is inside a suit in what she calls the scooping room, \"the room where they use the scooper\" [[sl-scooping-room-explained]]. From it he watches two technicians bring in Ballora, another of the machines, grumbling that \"these things can't go a day without breaking down\" [[sl-technicians-night4-dialogue]]. The scooper strikes her [[sl-ballora-scooped]]. Baby's lesson for him that night is that the only thing that matters \"is knowing... how. To. Pretend.\" [[sl-baby-how-to-pretend]] The next night one of the two men hangs dead in each of the rooms he checks [[sl-technicians-hanged]].",
      { kind: "heading", text: "\"If we looked like you\"" },
      "On the fifth night Baby asks for his help. \"There is something bad...inside of me. I'm broken. I can't be fixed.\" [[sl-baby-something-bad-inside]] She has him take a card from her body, so that she can go on talking to him, and send the body itself to be scooped [[sl-baby-card-and-passcode]]. Then her voice guides him through the auditorium [[sl-baby-guides-past-ballora]] and on to the scooping room.",
      "There the account changes. All four machines, the voice says, have \"already been here today\", Circus Baby among them [[sl-real-ending-already-been-here-today]]. The voice is hers, and it speaks for more than one: \"I've been out before, but they always put me back. They always put us back inside.\" [[sl-real-ending-they-always-put-us-back]] \"But if we looked like you, then we could hide.\" [[sl-real-ending-if-we-looked-like-you]]",
      "The scooper strikes him [[sl-real-ending-scooped-mirror]]. The next picture is a dark figure in front of a mirror.",
      { kind: "figure", image: "sl-real-ending-purple-eyes.png", caption: "The end of the fifth night: a silhouette at a mirror opens eyes that glow purple and white.", evidence: "sl-real-ending-scooped-mirror" },
      "Ultimate Custom Night's roster lists an {{ennard}} [[ucn-roster-two-forms-at-once]], and the model reads that as the thing now looking out of him. No line in these scenes names it.",
      { kind: "heading", text: "\"You won't die\"" },
      "What follows is told in short scenes attached to the game's Custom Night. Scott ruled that mode's play out of the story [[scott-2016-sl-custom-night-not-canon]] and its scenes in: \"Cutscenes are canon.\" [[scott-2016-cutscenes-are-canon]] A man in a purple shirt walks down a street. From scene to scene his skin goes from peach to tan, to olive, to grey-blue, until he is purple all over and bent far forward [[sl-custom-night-decay]].",
      { kind: "figure", image: "sl-custom-night-decay-stages.png", caption: "The six stages of the walk. The shirt is purple from the first; by the last, so is he.", evidence: "sl-custom-night-decay" },
      "In the last scene he stops. His stomach heaves, a mass of wires and eyes pours out of him into a sewer drain, and he falls [[sl-custom-night-ennard-ejected]]. A voice speaks over the body, again and again, until it stands up.",
      { kind: "quote", evidence: "sl-you-wont-die" },
      "Why he does not die, no game says, and the model does not guess.",
      { kind: "heading", text: "The report" },
      "Then the speech goes on. \"They were all there.\" [[sl-golden-freddy-cutscene-found-it]] \"They didn't recognize me at first, but then... they thought I was you.\" [[sl-golden-freddy-cutscene-they-thought-i-was-you]]",
      { kind: "quote", evidence: "sl-golden-freddy-cutscene-put-her-back-together" },
      "\"Her\" is not named. The last night can also end another way. On that branch the voice outside his door asks him, \"Isn't this why you came here? To be with her again?\" [[sl-fake-ending-to-be-with-her-again]] That line, and a little girl's voice that takes it up [[sl-fake-ending-girl-voice]], point to the daughter Circus Baby took (see ((funtimes))). The game does not show what putting her back together was.",
      { kind: "quote", evidence: "sl-golden-freddy-cutscene-come-find-you", text: "I should be dead. But I'm not. I've been living in shadows. There is only one thing left for me to do now. I'm going to come find you." },
      "As he finishes, a figure with rabbit's ears steps out of the dark [[sl-golden-freddy-cutscene-springtrap]]. The burnt building is Fazbear's Fright, the horror attraction that burns at the end of FNaF3 (see ((fazbears-fright))), so the speech follows that fire. The week underground comes before the speech and after his sister's death, and no record places it more closely. The model tells it after his father's death (see ((springtrap))), as an errand left by a man who can no longer be reached: a convention.",
      "No line says that the technician called Eggs Benedict is the {{michael-afton}} of the speech: the scenes join them. The rest of what is said about him is less firm.",
      { kind: "table", head: ["Michael is", "The model", "How firm"], rows: [
        ["William Afton's son", "Yes. He calls the man who sent him \"Father\" [[sl-golden-freddy-cutscene-father]], and the place he was sent is Afton's (see ((funtimes)))", "High"],
        ["Sister Location's technician", "Yes. The cutscenes carry on from the scooping", "High"],
        ["FNaF4's older brother", "Most likely (see ((afton-house)))", "Medium, at its lower end"],
        ["Pizzeria Simulator's franchisee", "Most likely (see ((ffps)))", "Medium"],
        ["Mike Schmidt, the first game's guard", "Not established, and not used: a first name on a cheque [[fnaf1-paycheck-night5]] and the word \"Odor\" on a dismissal slip that shows no name [[fnaf1-custom-night-pink-slip]]", "Low"],
        ["The player of Ultimate Custom Night", "Not settled. He is one of two candidates, and ((ucn)) weighs them", "Open"],
      ] },
      "Pizzeria Simulator casts its player as a franchisee, who owns and runs a new pizzeria [[ffps-tutorial-franchisee]]. At its end {{cassette-man}}, the voice on that game's tapes, calls him a \"brave volunteer, who somehow found this job listing not intended for you\", and guesses that he does not want the way out planned for him [[ffps-completion-brave-volunteer]]. He is most likely Michael, come to find his father. ((ffps)) argues it.",
    ],
    counterEvidence: ["ffps-scrap-baby-not-expected", "fnaf1-custom-night-pink-slip"],
    tension: "For the franchisee, {{scrap-baby}}, what is left of Circus Baby, tells him \"You're not who I expected to see\" [[ffps-scrap-baby-not-expected]], the line for an outsider nobody planned for. The model keeps Michael for two reasons, both argued in ((ffps)): the Cassette Man guesses that the volunteer would sooner stay than leave, and a line William Afton speaks in that game wants a listener who knew him: \"it's still me\" [[ffps-scraptrap-still-me]]. The identification stays at most likely. For the guards, FNaF1's notice of termination gives \"Odor\" as a reason [[fnaf1-custom-night-pink-slip]], and a rotting man would smell. So would anyone who worked beside those machines [[fnaf1-news-sanitation]] [[fnaf2-call2-the-smell]], and the 1987 guard's slip gives the same reason [[fnaf2-pink-slip-fritz-smith]]. The model does not use that link. The strongest evidence usually cited for it is in a book, which this archive does not admit (see ((open))).",
    changesIf: "A game that names the franchisee, or ties one of the night guards to the Afton family.",
    seeAlso: ["funtimes", "killer", "afton-house", "ffps", "fazbears-fright", "remnant"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "sl-baby-previous-employee-hiding-place", // [stated] Baby: 'Someone before you crafted it into a hiding place'
      "sl-fake-ending-we-need-you", // [stated] Outside the Private Room: 'We need you, so that we can leave'
      // colour
      "sl-dead-body-in-vent", // [stated] HandUnit: 'a dead body was found in this vent once'
      "sl-ballora-song", // [stated] Ballora's song
      "sl-technicians-injured-funtime-freddy", // [stated] Technicians failed to disconnect Funtime Freddy
      "sl-funtime-freddy-bon-bon-birthday-boy", // [stated] Funtime Freddy: 'that's the birthday boy'
      "sl-springlocks-breathing", // [stated] Breathing and heartbeat loosen the springlocks
      "sl-fake-ending-home", // [shown] Fake ending: Ennard reaches the player's home
      "sl-exotic-butters", // [stated] 'Exotic Butters' gift basket
      "sl-bidybab-same-person", // [stated] Bidybabs: 'Is it the same person?'
      "sl-immortal-and-the-restless", // [stated] The soap opera at home: a vampire who says the baby isn't his
    ],
  },
];
