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
    id: "funtimes", part: "machines", title: "Afton Robotics",
    question: "What were the Funtime animatronics built for?",
    answer: "To lure a child and take it. That rests on three things together: the labels on their blueprints, such as \"Voice Mimic/ Luring\" and \"Storage Tank\"; what Circus Baby did the one time a child was alone with her; and a father who would not let his own daughter near her. That daughter is the one child the games show these machines take.",
    confidence: "high",
    hero: { image: "sl-blueprint-funtime-freddy.jpg", caption: "A rare screen in Sister Location: Funtime Freddy's blueprint, with \"Parental Tracking\", \"Voice Mimic/ Luring\" and \"Storage Tank\" among its labels [[sl-blueprint-funtime-freddy]]." },
    // REVIEW: The outline cites ffps-scrap-baby-completion-monologue for "Now we can do what we were created to do". That sentence is in ffps-scrap-baby-make-you-proud-daddy, which is cited for it here.
    // REVIEW: The outline's point 4 offers "There is something bad... inside of me" and "how. To. Pretend." as support that the daughter stays on in the machine. sl-baby-something-bad-inside notes that the speech is part of Baby's lure, so this chapter rests the point on Pizzeria Simulator's two lines (the name Elizabeth, and "I will make you proud, daddy!"), and the michael chapter tells both Sister Location lines as part of the week.
    // REVIEW: The board member's "certain design choices" and the designer's list are in the claim and notes of sl-intro-mr-afton-board, not in its quote field, so both are paraphrased.
    body: [
      "Sister Location opens on two voices. A board member praises a set of new robots, then asks about certain choices in their design. The designer answers with what one of them, Circus Baby, can do: dance, sing, inflate balloons, take song requests, even dispense ice cream [[sl-intro-mr-afton-board]]. The board member replies.",
      { kind: "quote", evidence: "sl-intro-mr-afton-board" },
      { kind: "heading", text: "What the sheets list" },
      "The designer is {{william-afton}} (see ((killer))), and the game is pointing at his designs. It also shows them. Rarely, as the player moves between rooms, a blueprint of one of the four machines flashes on the screen [[sl-blueprint-screens]]. Each gives a name, a height, a weight and four lettered features, over a footer that reads \"Afton Robotics, LLC\".",
      { kind: "table", head: ["Machine", "The four features on its sheet"], rows: [
        ["Circus Baby [[sl-blueprint-circus-baby]]", "Air Hose Attachment. Internal Ice Cream Dispenser. Song Databank. Emergency Stop."],
        ["Funtime Freddy [[sl-blueprint-funtime-freddy]]", "Proximity Sensor/ Grouping Coordination. Parental Tracking/ 360 Pivot. Voice Mimic/ Luring. Storage Tank."],
        ["Funtime Foxy [[sl-blueprint-funtime-foxy]]", "Light Activation Sensor. Parental Voice Sync & Replay. Variable Scent Release. Remote Floor Anchor."],
        ["Ballora [[sl-blueprint-ballora]]", "Audio Activation Sensor. Deter & Misdirect, Remote Activation. Balance/ Stability. Collision Sensor."],
      ] },
      { kind: "callout", tone: "key", title: "What the sheets do not say", text: "No sheet uses the word children, none says what the tank is for, and Circus Baby's shows no claw. The labels are one leg of three. The other two are what Circus Baby did on her one day on a stage, and a father who would not let his own daughter go near her." },
      { kind: "heading", text: "One day on stage" },
      "Before the nights a small girl's voice is heard, pleading with her father. He lets other children see the machine, she says, and not her [[sl-girl-daddy-let-me-play]].",
      { kind: "quote", evidence: "sl-girl-daddy-let-me-play" },
      "{{circus-baby}} tells the rest herself. She was on a stage only once, for a single day, in a room where children ran in and out, and she counted them [[sl-baby-on-stage-one-day]]. Then there was one.",
      { kind: "quote", evidence: "sl-baby-ice-cream-story", text: "A little girl, standing by herself. I was no longer... myself, and I stopped singing. My stomach opened, and there was ice cream." },
      "The girl stepped closer, and there was screaming. A hidden minigame shows it from outside: Baby hands out cupcakes, a girl comes up alone, and a claw comes out of Baby's stomach and pulls her in [[sl-baby-minigame-girl-grabbed]]. After the real ending the girl's voice is heard once more: \"I don't know why he wouldn't let me come see you, you're wonderful! Where did the other children go?\" [[sl-girl-where-did-other-children-go]]",
      { kind: "figure", image: "sl-baby-minigame-claw.png", caption: "Circus Baby in her hidden minigame, the claw out of her stomach. No blueprint shows it.", evidence: "sl-baby-minigame-girl-grabbed" },
      "The one child the games show these machines take is their maker's own daughter. That the claw and the \"Storage Tank\" are there to hold a child is most likely, and it is an inference: no sheet says what either is for [[sl-blueprint-funtime-freddy]].",
      "She most likely stays on in the machine. Sister Location never says so, and never speaks the name {{elizabeth-afton}}. A game later, in Pizzeria Simulator, what is left of Circus Baby cries \"I will make you proud, daddy!\" [[ffps-scrap-baby-make-you-proud-daddy]], and the Cassette Man, the voice that ends that game (see ((ffps))), cuts across her: \"I'm sorry to interrupt you, Elizabeth, if you still even remember that name\" [[ffps-completion-connection-terminated-elizabeth]].",
      { kind: "heading", text: "A pizzeria that never opened" },
      "The machines were built for a restaurant that never opened. A teaser Scott published in August 2016 read only \"CANCELLED\" and \"Due to leaks.\" [[scottgames-site-sl-cancelled-teaser]] Brightened, the same image holds a news report on {{circus-babys-pizza-world}}.",
      { kind: "figure", image: "scottgames-sl-cancelled-news-brightened.png", caption: "The teaser, brightened, with the report behind the one word.", evidence: "scottgames-site-sl-news-gas-leak-cancellation" },
      "The grand opening \"has apparently been cancelled due to reported gas leaks in the building\", though sources suspect something else [[scottgames-site-sl-news-gas-leak-cancellation]]. Only \"a handful of people\" ever saw the inside, \"kids from here and there, making sure everything worked right\" [[scottgames-site-sl-news-kids-tested]]. A tenant across the street claims to have seen large equipment taken out at night under tarps, and a few weeks later the building was for sale [[scottgames-site-sl-news-equipment-removed]]. The page source under the image ended on a statement: \"be watching for her to appear at a neighborhood party near you!\" [[scottgames-site-sl-source-bright-future-circus-baby]]",
      "The game shows that business. Its facility is reached by an elevator going down [[sl-elevator-underground-facility]], its own map calls it \"Circus Baby's Entertainment & Rental\" [[sl-extras-map-entertainment-and-rental]], and {{handunit}}, its recorded guide, explains: \"our robotic entertainers are rented out for private parties during the day\" [[sl-handunit-rented-for-private-parties]]. That the machines were hired out is stated. That the hiring was a way to take children is the model's reading, and a weak one: no victim of the rental business is on record.",
      { kind: "heading", text: "When" },
      "None of this is dated. HandUnit gives one bearing: the business followed \"the unfortunate closing of Freddy Fazbear's Pizza\", which set the stage \"for another contender in children's entertainment\" [[sl-handunit-freddy-fazbear-closing]]. It does not say which Freddy's. The designer is alive throughout, answering a board and forbidding a daughter.",
      "The model tells the venture after the five murders (see ((murders))). That is a convention with HandUnit's one sentence behind it: the opposite order, the daughter's death first, has no record for it and none against. There is one limit. FNaF4's house has a second bedroom with a pink bed that nobody is shown using [[fnaf4-second-bedroom]]. If that room is hers, her day at the pizzeria cannot fall after the first game's restaurant closed (see ((afton-house)) and ((timeline-math))).",
      "A kinder reading takes the labels for safety features and the death for a malfunction. It fails on the labels themselves, \"Luring\" [[sl-blueprint-funtime-freddy]] and \"Deter & Misdirect\" [[sl-blueprint-ballora]], on Baby's own account, and on what she says later. In Pizzeria Simulator, with a party due on Saturday [[ffps-tutorial-saturday-party]], she exults: \"All of those little souls, in one place, just for us... a gift.\" [[ffps-scrap-baby-completion-monologue]] \"Now we can do what we were created to do, and be complete!\" [[ffps-scrap-baby-make-you-proud-daddy]] The model reads her little souls as the children she expects at that party.",
      "What the machines themselves wanted is told in ((michael)). The firm's one other blueprint, the only sheet with the word Remnant on it, is in ((remnant)).",
    ],
    counterEvidence: ["sl-fake-ending-girl-voice"],
    tension: "No child other than the daughter is shown taken by these machines, and her father had kept her away from Baby. A voice like hers later says \"I know it was an accident\" [[sl-fake-ending-girl-voice]]; nothing says which accident, and the model gives the line no weight either way. The sheets themselves do not say what the machines are for. The answer stands on three things together: the labels, Baby's own account of a machine acting when a child was alone, and the father's prohibition. The model claims no second victim.",
    changesIf: "A second victim of these machines, or a dated record for Circus Baby's Pizza World.",
    seeAlso: ["killer", "michael", "remnant", "salvage", "afton-house", "timeline-math"],
    // Records with this chapter as their home that the text does not cite.
    further: [
      // support
      "sl-springlock-suit-from-old-pizzeria", // [stated] Suit 'from my old pizzeria' — too dangerous
      "scott-2016-sl-store-text", // [stated] Sister Location Steam description: Circus Baby's Pizza World ad and technician job
      "scottgames-site-sl-never-just-one", // [shown] Sister Location teaser: 'There was never just one.'
      "scottgames-site-sl-news-entrepreneur", // [stated] Hidden news: a local entrepreneur financed the Pizza World
      "scottgames-site-sl-source-rental-schedule", // [stated] Sister Location page source: a weekly booking schedule for five animatronics
      "scottgames-site-sl-source-client-directory", // [stated] Sister Location page source: client directory of birthday bookings
      "scottgames-site-sl-source-service-log-afton-robotics", // [stated] Sister Location page source names 'AftnROBTCS' as maintainer
    ],
  },
  {
    id: "remnant", part: "machines", title: "Remnant",
    question: "What is Remnant?",
    answer: "The games give one sheet. A blueprint marked Afton Robotics names a machine for the \"S.calable C.reation of U.lterior P.resence\" and labels on it a \"Remnant Injector\" and a \"Remnant Reservoir\", with a note that overheating \"might neutralize the effects permanently\". No game says what Remnant is. The model reads it as the name the killer's firm gave to what it was trying to make use of, and says no more.",
    confidence: "low",
    // REVIEW: The outline's answer quotes the sheet's title as "scalable creation of ulterior presence". The sheet prints "S.calable C.reation of U.lterior P.resence" (ffps-scup-blueprint, and the image), so the answer now quotes it as printed. Nothing else in the answer is changed.
    // REVIEW: The sheet letters four parts: A Excavating Arm, B Remnant Injector, C Arm Base and Balance, D Remnant Reservoir. ffps-scup-blueprint transcribes only B and D, so the chapter names the arm, the injector and the reservoir, as the record's claim does, and does not quote part C.
    // REVIEW: The record of how these blueprints are reached (ffps-insanity-egg-baby-trigger) is filed outside the story in theory.ts, and the validator warns if a chapter cites it. The opening therefore says "On one path through Pizzeria Simulator" and cites ffps-insanity-new-way-to-desecrate, whose notes say the three blueprints are on the monitor while the tape plays.
    body: [
      "On one path through Pizzeria Simulator, three blueprints come up on the office monitor while a tape plays [[ffps-insanity-new-way-to-desecrate]]. One of them is marked Afton Robotics, LLC, and it is where the word Remnant enters the games.",
      { kind: "figure", image: "ffps-insanity-scup-blueprint.png", caption: "The whole sheet. Everything Pizzeria Simulator states about Remnant is on it.", evidence: "ffps-scup-blueprint" },
      "Its title spells out the machine's name: \"S.calable C.reation of U.lterior P.resence\". Among its lettered parts are an excavating arm, a \"Remnant Injector\" and a \"Remnant Reservoir\", and the blueprint specifies how the last two are to be handled. For the injector: \"Leave trace line amount on interior. Over-usage/ Over-exposure negates effect.\" [[ffps-scup-blueprint]] For the reservoir: \"When heated, no observable motion. Keep in heated tank at sustained temperature. Substance should be malleable, but not more.\" [[ffps-scup-remnant-reservoir-notes]] And last: \"There is a possibility that overheating might neutralize the effects permanently.\" [[ffps-scup-overheating-neutralize]]",
      "These are design notes. No game shows an injection. The machine is most likely Sister Location's scooper, the tool of \"the room where they use the scooper\" [[sl-scooping-room-explained]], which that game shows at work on its own machines [[sl-ballora-scooped]]: the initials all but spell the word, the sheet's first part is an excavating arm, and the company is the same. The sheet never prints the word.",
      { kind: "callout", tone: "key", title: "What no game says", text: "What Remnant is made of. Where it comes from. What its \"effect\" is. That it is what holds the dead in machines. The sheet's only statement of purpose is the machine's name [[ffps-scup-remnant-reservoir-notes]]." },
      "How the murdered children came to stay in the first machines is a separate question. The tape that plays over the blueprints is the Cassette Man's, and the machines that hold the small souls are, in his words, \"prisons of my making\" [[ffps-insanity-small-souls-prisons]].",
      { kind: "quote", evidence: "ffps-insanity-tiny-breaths", text: "I don't know how those tiny breaths of life came to inhabit those machines." },
      "The one hand the games show at work is the Puppet's. In a FNaF2 minigame it sets a mascot's head on each of four dead children [[fnaf2-give-gifts-give-life]], and the Cassette Man later speaks to his daughter, most likely the child in the Puppet (see ((child-outside))), of \"the way you lifted others into yours\" [[ffps-completion-shut-out]]. No record speaks to the killer's intent. The model reads those first hauntings as none of his design, and that is an argument from silence.",
      "The same tape says what came next. \"As if what he had already done wasn't enough, he found a new way to desecrate, to humiliate, to destroy.\" [[ffps-insanity-new-way-to-desecrate]] The small souls are \"now set to new purpose and used in ways I never thought imaginable\" [[ffps-insanity-small-souls-prisons]], robbed \"of the only thing that they had. Again.\" [[ffps-insanity-trap-again]] The tape names no machine, but this sheet is on the screen while it plays. So the model reads Remnant as the name the killer's firm gave to what it was trying to make use of, and says no more: not what the substance is, and not whether anything was drawn from the five murdered children. The tape dates neither this machine nor those of ((funtimes)).",
      "The note about heat is a handling warning, written by the people who wanted the effect. It is hedged twice, \"a possibility\" and \"might\" [[ffps-scup-overheating-neutralize]], and it proposes no remedy. That the Cassette Man chose fire because of it is an inference the model holds loosely (see ((ffps))).",
      "One other game uses the word. Special Delivery's Remnant is something the player collects, which \"is used to power up your animatronics\" [[sd-tutorial-remnant-collection]]: a game resource, and no evidence of what the word means in the story.",
    ],
    counterEvidence: ["sd-tutorial-remnant-collection"],
    tension: "Nothing in any game states a link between the substance and the dead, and the tape that speaks of small souls names no machine. The only other use of the word is Special Delivery's collectible [[sd-tutorial-remnant-collection]], which treats it as a resource and explains nothing. The model's reading rests on the machine's own name and on the company the sheet keeps: it is on the screen while the Cassette Man speaks of small souls \"set to new purpose\" [[ffps-insanity-small-souls-prisons]]. That is thin, which is why the chapter is rated low, why it says nothing about what the substance is, and why no other chapter builds on it.",
    changesIf: "A game that defines the word.",
    seeAlso: ["funtimes", "michael", "springtrap", "salvage", "ffps", "golden"],
    // Records with this chapter as their home that the text does not cite.
    further: [
    ],
  },
  {
    id: "michael", part: "machines", title: "The son who should be dead",
    question: "What happened to Michael Afton?",
    answer: "On his father's instructions he went underground, where the machines scooped him hollow and walked out wearing him. His body rotted, threw them up into a sewer, and got back up. He is most likely FNaF4's older brother and, later, the manager of Pizzeria Simulator's pizzeria.",
    confidence: "high",
    hero: { image: "sl-golden-freddy-cutscene-fazbears-fright.png", caption: "Sister Location's last cutscene: the burnt shell of Fazbear's Fright, and a figure with rabbit's ears at the right [[sl-golden-freddy-cutscene-springtrap]]." },
    // REVIEW: The outline has "the walk among the neighbours". sl-custom-night-decay's title speaks of neighbours, but its claim does not, and its notes say they rest on wiki text whose pages disagree. The chapter leaves them out.
    // REVIEW: The skeleton's tension called "You're not who I expected to see" Scrap Baby's "first words". ffps-scrap-baby-not-expected records only a "Scrap Baby voice line", so the tension says "one of her lines".
    body: [
      "Sister Location's last cutscene shows no face. A burnt-out building stands in the dark, under a broken sign on which \"FAZBE\" and \"FRI\" can still be read [[sl-golden-freddy-cutscene-springtrap]]. A man speaks over it: \"Father. It's me, Michael. I did it. I found it. It was right where you said it would be.\" [[sl-golden-freddy-cutscene-father]]",
      "What he found, and what finding it cost him, is the week the game has just played.",
      { kind: "heading", text: "The week underground" },
      "He goes down by elevator [[sl-elevator-underground-facility]] to the facility that hires out his father's machines (see ((funtimes))). {{handunit}}, its recorded guide, welcomes him as it would any new hire [[sl-handunit-intro-job-ad]], asks his name, and corrects what he types to \"Eggs Benedict\" [[sl-eggs-benedict]]. The work is to look in on each machine through a window and, if it is off its stage, give it \"a controlled shock\" [[sl-controlled-shocks]].",
      "On the second night another voice speaks to him: {{circus-baby}}, one of the machines. \"I don't recognize you. You are new.\" [[sl-baby-i-remember-this-scenario]] She warns him off the guide's orders: \"If you follow his instructions, you will die.\" [[sl-baby-warns-handunit-will-kill]] The third night ends with a machine leaping at him [[sl-funtime-foxy-knockout]]. He wakes still in the building, hidden where the cameras could not find him. \"I kidnapped you.\" [[sl-baby-i-kidnapped-you]]",
      "He is inside a suit in what she calls the scooping room, \"the room where they use the scooper\" [[sl-scooping-room-explained]]. From it he watches two technicians bring in Ballora, another of the machines, grumbling that \"these things can't go a day without breaking down\" [[sl-technicians-night4-dialogue]]. The scooper strikes her [[sl-ballora-scooped]]. Baby's lesson for him that night is that the only thing that matters \"is knowing... how. To. Pretend.\" [[sl-baby-how-to-pretend]] The next night one of the two men hangs dead in each of the rooms he checks [[sl-technicians-hanged]].",
      { kind: "heading", text: "If we looked like you" },
      "On the fifth night Baby asks for his help. \"There is something bad...inside of me. I'm broken. I can't be fixed.\" [[sl-baby-something-bad-inside]] She has him take a card from her body, so that she can go on talking to him, and send the body itself to be scooped [[sl-baby-card-and-passcode]]. Then her voice guides him through the auditorium [[sl-baby-guides-past-ballora]] and on to the scooping room.",
      "There the account changes. All four machines, the voice says, have \"already been here today\", Circus Baby among them [[sl-real-ending-already-been-here-today]]. The voice is hers, and it speaks for more than one: \"I've been out before, but they always put me back. They always put us back inside.\" [[sl-real-ending-they-always-put-us-back]] \"But if we looked like you, then we could hide.\" [[sl-real-ending-if-we-looked-like-you]]",
      "The scooper strikes him [[sl-real-ending-scooped-mirror]]. The next picture is a dark figure in front of a mirror.",
      { kind: "figure", image: "sl-real-ending-purple-eyes.png", caption: "The end of the fifth night: a silhouette at a mirror opens the eyes of a machine.", evidence: "sl-real-ending-scooped-mirror" },
      "A later game's roster gives the thing now looking out of him a name, {{ennard}} [[ucn-roster-two-forms-at-once]]. Sister Location's own dialogue never says it.",
      { kind: "heading", text: "You won't die" },
      "What follows is told in short scenes attached to the game's Custom Night. Scott ruled that mode's play out of the story [[scott-2016-sl-custom-night-not-canon]] and its scenes in: \"Cutscenes are canon.\" [[scott-2016-cutscenes-are-canon]] A man in a purple shirt walks down a street. From scene to scene his skin goes from peach to tan, to olive, to grey-blue, until he is purple all over and bent far forward [[sl-custom-night-decay]].",
      { kind: "figure", image: "sl-custom-night-decay-stages.png", caption: "The six stages of the walk. The shirt is purple from the first; by the last, so is he.", evidence: "sl-custom-night-decay" },
      "In the last scene he stops. His stomach heaves, a mass of wires and eyes pours out of him into a sewer drain, and he falls [[sl-custom-night-ennard-ejected]]. A voice speaks over the body, again and again, until it stands up.",
      { kind: "quote", evidence: "sl-you-wont-die" },
      "Why he does not die, no game says, and the model does not guess.",
      { kind: "heading", text: "The report" },
      "Then the speech goes on. \"They were all there.\" [[sl-golden-freddy-cutscene-found-it]] \"They didn't recognize me at first, but then... they thought I was you.\" [[sl-golden-freddy-cutscene-they-thought-i-was-you]]",
      { kind: "quote", evidence: "sl-golden-freddy-cutscene-put-her-back-together" },
      "\"Her\" is not named. On the other branch of the last night, which the real ending overrides, the voice outside his door asks him, \"Isn't this why you came here? To be with her again?\" [[sl-fake-ending-to-be-with-her-again]] That line, and the little girl's voice that takes it up [[sl-fake-ending-girl-voice]], point to the daughter Circus Baby took (see ((funtimes))). What putting her back together was, the game does not show.",
      { kind: "quote", evidence: "sl-golden-freddy-cutscene-come-find-you", text: "I should be dead. But I'm not. I've been living in shadows. There is only one thing left for me to do now. I'm going to come find you." },
      "As he finishes, a figure with rabbit's ears steps out of the dark [[sl-golden-freddy-cutscene-springtrap]]. The burnt building is Fazbear's Fright, the horror attraction that burns at the end of FNaF3 (see ((fazbears-fright))), so the speech follows that fire. The week underground comes before the speech and after his sister's death, and no record places it more closely. The model tells it after his father's death, as an errand left by a man who can no longer be reached: a convention.",
      "No line says that the technician called Eggs Benedict is the Michael of the speech. The scenes join them: the eyes in the mirror, the walk, the drain, \"You won't die\", \"I should be dead\". The rest of what is said about him is less firm.",
      { kind: "table", head: ["Michael is", "The model", "How firm"], rows: [
        ["William Afton's son", "Yes. He calls the man who sent him \"Father\" [[sl-golden-freddy-cutscene-father]], and the place he was sent is Afton's (see ((funtimes)))", "High"],
        ["Sister Location's technician", "Yes. The cutscenes carry on from the scooping", "High"],
        ["FNaF4's older brother", "Most likely (see ((afton-house)))", "Medium, at its lower end"],
        ["Pizzeria Simulator's manager", "Most likely (see ((ffps)))", "Medium"],
        ["Mike Schmidt, the first game's guard", "Not established, and not used: a first name on a cheque [[fnaf1-paycheck-night5]] and the word \"Odor\" on a dismissal slip [[fnaf1-custom-night-pink-slip]]", "Low"],
        ["The player of Ultimate Custom Night", "The model leans against it; he is the full alternative (see ((ucn)))", "A lean"],
      ] },
      "Pizzeria Simulator's unnamed manager is a \"brave volunteer, who somehow found this job listing not intended for you\", and one who, the Cassette Man guesses, does not want the way out planned for him [[ffps-completion-brave-volunteer]]. He is most likely Michael, come to find his father. ((ffps)) argues it.",
    ],
    counterEvidence: ["ffps-scrap-baby-not-expected", "fnaf1-custom-night-pink-slip"],
    tension: "For the manager, one of Scrap Baby's lines to him is \"You're not who I expected to see\" [[ffps-scrap-baby-not-expected]], which sits badly with a sister meeting her brother. The model reads it as a daughter who expected her father. ((ffps)) argues the identification from the volunteer who would sooner stay than leave, and it stays at most likely. For the guards, FNaF1's notice of termination gives \"Odor\" as a reason [[fnaf1-custom-night-pink-slip]], and a rotting man would smell. So would anyone who worked beside those machines [[fnaf1-news-sanitation]] [[fnaf2-call2-the-smell]], and the 1987 guard's slip gives the same reason [[fnaf2-pink-slip-fritz-smith]]. The model does not use that link.",
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
      "sl-immortal-and-the-restless", // [stated] The soap opera at home: a father who says the baby isn't his
    ],
  },
];
