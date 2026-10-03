import type { OutsideStoryGroup, StoryBeat, TheoryIntro, TheoryPart, TheorySection } from "./schema";
import { chapters as story } from "./chapters/story";
import { chapters as makers } from "./chapters/makers";
import { chapters as family } from "./chapters/family";
import { chapters as murders } from "./chapters/murders";
import { chapters as nightshift } from "./chapters/nightshift";
import { chapters as machines } from "./chapters/machines";
import { chapters as reckoning } from "./chapters/reckoning";
import { chapters as afterimage } from "./chapters/afterimage";
import { chapters as underground } from "./chapters/underground";
import { chapters as apparatus } from "./chapters/apparatus";

/**
 * The Unified Model: this archive's single account. Written from the evidence up.
 * See the "Theory content contract" in schema.ts for the shapes and the RichText tokens.
 *
 * - theoryIntro   the title, standfirst, thesis and how-to-read note shown at the top of the model
 * - theoryParts   the parts (acts); each chapter names its part
 * - storyline     the short chronological telling; each beat points at the chapters that argue it
 * - theory        the chapters, joined from one file per part in ./chapters (story order, then method).
 *                 Contradicting evidence goes in counterEvidence; evidence that belongs to a chapter's
 *                 thread but is not cited inline goes in `further`
 * - outsideStory  records that deliberately carry no story weight, grouped by reason
 *
 * Every evidence record should end up cited by a chapter, filed under one (`further`), or listed in outsideStory.
 * `npx tsx scripts/validate.ts` reports the accounting.
 */

export const theoryIntro: TheoryIntro = {
  title: "The Unified Model",
  standfirst: "A killer in the company's own costume, the machines that kept his victims, and the copies that came after: one story, built only from the games and Scott Cawthon's own words.",
  thesis: "Five Nights at Freddy's is one story: what a machine keeps of a person, and a company that keeps putting it back on stage. William Afton kills children, and the mascot machines keep them. He dies in a rabbit suit and, decades later, comes back in it. His old friend calls four haunted machines into one building and stays as it burns. It seems to end there, on six graves. Then come the copies: in the company's code, a rabbit in the killer's image; under its newest building, a machine built to imitate.",
  howToRead: [
    "This is the archive's own account of the story, built from two things only: the games themselves, and Scott Cawthon's own words. The novels, the guidebooks, the films and fan theory are left out, by this archive's own rule. The storyline tells the whole of it in twenty beats. The parts that follow argue it in order, and the last part is the method: the rules, the dates, what each game adds, and what stays open.",
    "Each chapter asks one question and answers it before arguing it. A small number in the text opens the record behind a claim: the exact line, screen or post. Three markers say how a sentence stands. A plain statement with a record behind it means that a game says or shows it. **Most likely** marks a short inference. **The model reads** marks this archive's own interpretation. **May be**, given with its reason, marks a possibility the model holds loosely.",
    "Every chapter, and every beat of the storyline, carries one of three marks. **High** means stated or shown, or a step that every later game relies on. **Medium** means the best reading, with a real alternative beside it. **Low** means a lean, or an honest guess. A chapter takes the mark of the weakest claim its answer depends on. Where the games give no date, the storyline says so, and it says when a placement is only the model's convention.",
    "Under each chapter, \"what pushes back\" lists the records that cut against it and how the model answers them, and \"what would change this\" names the evidence that would overturn it. People the games never name are called by description: the Cassette Man, the crying child, the older brother, the fifth child.",
  ],
};

export const theoryParts: TheoryPart[] = [
  { id: "story", title: "The story", kicker: "Start here", blurb: "The whole account in one paragraph, with a mark against each clause, and the man it turns on." },
  { id: "makers", title: "The makers", kicker: "1965 to 1979", blurb: "A family costume firm, the two machines its owner built for his son, and two names in its paperwork: Hen and W.A." },
  { id: "family", title: "The family", kicker: "c. 1983", blurb: "A house whose rooms turn up on the monitors of Afton's facility, a toy that talks, five nights in a bedroom, and a birthday party." },
  { id: "murders", title: "The murders", kicker: "Before 1987", blurb: "A child shut out in the rain, children lured into a back room, and the signs the mascots carried afterwards." },
  { id: "nightshift", title: "The night shift", kicker: "1987 and after", blurb: "Two restaurants and the guards who watched them: the week the new one came apart, the old one reopened on a smaller budget, and the night the killer came back to it." },
  { id: "machines", title: "The machines", kicker: "Undated", blurb: "What Afton built under his own name: machines made to lure a child and take it, one blueprint with the word Remnant on it, and what the machines did to his son. The games give none of it a date, and its place in the order is the model's convention." },
  { id: "reckoning", title: "The reckoning", kicker: "Thirty years later", blurb: "A horror attraction finds the rabbit, an old friend sets a trap, a building burns, and one voice refuses release." },
  { id: "afterimage", title: "The afterimage", kicker: "The modern era", blurb: "What the company brings back: its own history as a game, a rabbit in the code, a woman who follows it, and one night in its largest building." },
  { id: "underground", title: "Under the Pizzaplex", kicker: "The newest building", blurb: "What stands in the ruin beneath it, what waits behind poured concrete, and what the whole story keeps coming back to." },
  { id: "apparatus", title: "The apparatus", kicker: "Method", blurb: "How this was built: what counts as evidence, what sits at the edge of the story, how it is dated, what each game adds, and what stays open." },
];

/** The short telling, in the model's order of events. A beat's confidence rates what happens in it; its `when` says how the date or the placement is supported. */
export const storyline: StoryBeat[] = [
  {
    id: "s-costume-company", when: "<<1965 to 1977|estimated|secret-of-the-mimic-mcm-net-earnings-1965-1975,secret-of-the-mimic-mcm-order-forms-1973-1977|Years on the costume company earnings chart and order forms. They were read from images of the documents and have not yet been confirmed in play, so they are not entered as printed.>>",
    title: "A costume company builds suits that are also machines",
    text: "Murray's Costume Manor, a family firm, works under contract for Fazbear Entertainment [[secret-of-the-mimic-dispatch-contractor-murray]]. Edwin Murray builds, and his wife Fiona designs the characters [[secret-of-the-mimic-log-creepy]]. Among its work are springlocks \"for the diner\" [[secret-of-the-mimic-mail-springlocks-hen]]. That is most likely Fredbear's Family Diner: prototypes of its bear and its rabbit, Fredbear and Spring Bonnie, stand in a mock-up pizzeria on Murray's research floor [[secret-of-the-mimic-rnd-proto-pizzeria]], and the diner's name is on one of the game's posters, though where it hangs has not been checked [[secret-of-the-mimic-fredbears-diner-poster]]. A springlock suit is a costume and a machine at once: \"two specially designed suits that double as both animatronic and suit\" [[fnaf3-tape2-dual-suits]]. And every restaurant is built with one room that is on no map its machines or cameras can see [[fnaf3-tape3-safe-room]].",
    confidence: "high", sections: ["springlocks"], era: "founding", image: "sotm-fredbears-diner-poster.jpg",
  },
  {
    id: "s-two-machines", when: "Before 1979",
    title: "For his own son, a machine that copies",
    text: "Fiona Murray dies, and Edwin is left to raise their son David alone [[secret-of-the-mimic-log-death]]. He builds an endoskeleton, M1, to mind the boy: \"Think of it as your new babysitter.\" [[secret-of-the-mimic-log-training-m1]] It takes on Fiona's voice [[secret-of-the-mimic-log-m1-as-fiona]]. Then David dies too, and at M1's urging Edwin builds a second machine, M2, from a copy of its program [[secret-of-the-mimic-log-try-again-build-another]] [[secret-of-the-mimic-mail-received-5-min-ago]]. It sounds like his son [[secret-of-the-mimic-log-incident]], and he loses his temper with it [[secret-of-the-mimic-log-turn-around-lost-temper]]. \"It mimics rage,\" the first machine warns, and the rage is most likely his.",
    confidence: "high", sections: ["two-machines"], era: "founding", image: "sotm-m1-birthday-cake-film-reel.jpg",
  },
  {
    id: "s-1979", when: "<<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979,secret-of-the-mimic-credential-form-1979|The year ends the official teaser for the game. A Fazbear work order dated 9/07/79 and a credential that expires in 1979 carry it too, but both were read from images and have not yet been confirmed in play. The day is read month first.>>",
    title: "1979: the company comes to collect",
    text: "Letters signed \"W.A.\" tell Murray that \"we now technically own the land\", bid for his software and his whole catalogue, and ask for his staff's contact details [[secret-of-the-mimic-mail-confidential-wa]] [[secret-of-the-mimic-mail-staff-contacts-wa]]. The writer is most likely William Afton, writing for Fazbear Entertainment. Murray goes quiet, and one night the company sends a technician into the shuttered workshop for the blueprints [[secret-of-the-mimic-work-order-1979]]: \"everything he's been working on for us is now legally ours\", his dispatcher says [[secret-of-the-mimic-dispatch-contract-legally-ours]]. Inside, the voice that guides him over the radio is not his dispatcher's. It is M1 [[secret-of-the-mimic-f10n4-reveal]]. M2 is loose in the building, and earlier visitors lie dead inside mascot costumes [[secret-of-the-mimic-previous-technicians]]. The game ends three ways, and the model does not choose between them.",
    confidence: "high", sections: ["two-machines", "partners"], era: "founding", image: "sotm-work-order-1979.jpg",
  },
  {
    id: "s-house", when: "<<c. 1983|estimated|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The week counts down to a party, and the only year printed in it is 1983, on a television. The title card dates the show, so the week is in that year or soon after.>>",
    title: "A house with a toy that talks",
    text: "A small boy lives in dread of his older brother and of the restaurant where his birthday party will be held [[fnaf4-brother-foxy-mask-tv]] [[fnaf4-left-behind-at-diner]]. A Fredbear plush talks to him: \"He locked you in your room again. Don't be scared. I am here with you.\" [[fnaf4-plush-locked-in-room]] The nights of that week, as the game plays them, are spent holding his bedroom doors against monstrous versions of the restaurant's mascots, which a later game calls \"illusion\" [[fnaf4-nightmare-animatronics]] [[ucn-nightmare-fredbear-lines]]. In Sister Location a locked room in William Afton's facility has that bedroom on its monitors, and the same plush on its desk with a handset in its lap [[sl-private-room-monitor-bedroom]] [[sl-private-room-handset-beside-plush]]. So the house is most likely Afton's own, and the boys his sons.",
    confidence: "medium", sections: ["afton-house", "plush", "nightmares"], era: "diner", image: "sl-private-room-1983-monitors.jpg",
  },
  {
    id: "s-birthday", when: "<<c. 1983|estimated|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The party ends the five-day countdown, whose only printed year is 1983.>>",
    title: "The birthday",
    text: "The week ends at the boy's birthday party [[fnaf4-its-your-birthday]]. His older brother and three friends in masks carry him to the stage and lift him to Fredbear's mouth for \"a big kiss\" [[fnaf4-give-fredbear-a-kiss]]. The jaw closes on his head [[fnaf4-the-bite]]. In the dark afterwards his brother says he is sorry, and another line makes a promise: \"I will put you back together.\" [[fnaf4-night6-brother-apology]] [[fnaf4-i-will-put-you-back-together]] The boy fades from the screen last of all [[fnaf4-night6-fade-order]]. He most likely dies, and no game shows him again.",
    confidence: "medium", sections: ["bite"], era: "diner", image: "fnaf4-bite-fredbear-stage.png",
  },
  {
    id: "s-child-outside", when: "Undated. Told here by convention.",
    title: "The child outside",
    text: "A child is shut outside a restaurant in the rain while the Puppet, the machine set to guard her, is pinned inside its box [[ffps-security-puppet-trapped]]. A purple car pulls up, a purple figure gets out, and the child is left dead [[fnaf2-take-cake-to-the-children]]. The Puppet reaches her too late and sinks down beside her [[ffps-security-puppet-dead-child]]. She is most likely the Cassette Man's daughter, killed by William Afton, and she stays on in the Puppet: \"My daughter, if you can hear me, I knew you would return as well.\" [[ffps-completion-my-daughter]] Her father calls it \"a wound first inflicted on me\" [[ffps-insanity-wound-first-inflicted]], and on that one phrase the model tells her death before the five.",
    confidence: "medium", sections: ["child-outside"], era: "murders", image: "ffps-security-puppet-child-outside.png",
  },
  {
    id: "s-five", when: "<<June 26th|printed|fnaf1-news-kids-vanish|The day and month are printed in a clipping, for two children. No year is printed. The model estimates a year between 1980 and 1986, before the 1987 restaurant opened.>>",
    title: "June 26th",
    text: "\"Two local children were reportedly lured into a back room during the late hours of operation at Freddy Fazbear's Pizza on the night of June 26th.\" [[fnaf1-news-kids-vanish]] Police think the man dressed as a company mascot [[fnaf1-news-dressed-as-mascot]]. Five children are linked to it in the end, and no bodies are found [[fnaf1-news-five-children]]. A man was caught the next morning and charged [[fnaf1-news-suspect-captured]]. The killer is William Afton. Most likely this was at the chain's old location, before the restaurant of 1987 opened, and the costume was the yellow rabbit, Spring Bonnie: the one luring the games show has that rabbit behind a crying girl, and gives the lie that was told, \"He's not really dead.\" [[ffps-fruity-maze-follow-me]]",
    confidence: "medium", sections: ["murders", "killer"], era: "murders", image: "fnaf1-missing-children-newspapers.jpg",
  },
  {
    id: "s-children-stay", when: "Afterwards",
    title: "The children stay",
    text: "The restaurant is threatened with closure over a foul smell from its mascots, and \"what appeared to be blood and mucus around the eyes and mouths\" [[fnaf1-news-sanitation]]. The model reads that as the bodies hidden inside the four mascots, which no game shows. One scene shows the Puppet setting a mascot's head on each of four dead children, while a fifth appears for an instant with the yellow bear [[fnaf2-give-gifts-give-life]]. The children stay on in the machines. How, even the man who calls those machines \"prisons of my making\" never learned [[ffps-insanity-small-souls-prisons]]. Decades later he says: \"I don't know how those tiny breaths of life came to inhabit those machines.\" [[ffps-insanity-tiny-breaths]]",
    confidence: "medium", sections: ["golden", "remnant"], era: "murders", image: "fnaf2-give-gifts-give-life.png",
  },
  {
    id: "s-afton-robotics", when: "Undated. Placed here by convention.",
    title: "Machines built to take children",
    text: "Under his own name, Afton builds a second kind of machine. Their blueprints carry labels such as \"Parental Tracking\", \"Voice Mimic/ Luring\" and \"Storage Tank\" [[sl-blueprint-funtime-freddy]]. The one child the games show these machines take is their maker's own daughter, who begs to play with Circus Baby, \"Didn't you make her just for me?\" [[sl-girl-daddy-let-me-play]], and is pulled inside it [[sl-baby-minigame-girl-grabbed]]. The pizzeria built for them never opens, and they are hired out to parties from a facility underground [[scottgames-site-sl-news-gas-leak-cancellation]] [[sl-handunit-rented-for-private-parties]]. Another of the firm's blueprints names a machine for the \"scalable creation of ulterior presence\" [[ffps-scup-blueprint]]: the model reads it as what the Cassette Man calls the killer's \"new way to desecrate\" [[ffps-insanity-new-way-to-desecrate]].",
    confidence: "high", sections: ["funtimes", "remnant"], era: "funtime", image: "sl-blueprint-funtime-freddy.jpg",
  },
  {
    id: "s-november-1987", when: "<<November 1987|printed|fnaf2-paycheck-1987,fnaf2-overtime-robots-scrapped|The two cheques are dated 11-12-1987 and 11-13-1987.>>",
    title: "November 1987",
    text: "The old restaurant has been left to rot, and a new one opens with new machines; the old ones sit in a back room, kept for parts [[fnaf2-call1-new-location]] [[fnaf2-call2-older-models]]. Within a week there is an investigation, someone has tampered with the machines, and the building is locked down against \"previous employees\" [[fnaf2-call4-investigation]] [[fnaf2-call5-lockdown]]. Then: \"Someone used one of the suits. We had a spare in the back, a yellow one.\" [[fnaf2-call6-yellow-suit]] The killer is most likely back, and what he did that week no record says. The restaurant closes [[fnaf2-overtime-robots-scrapped]], and in its last days, most likely, falls the bite a later guard hears about: \"The Bite of '87\" [[fnaf1-call1-bite-of-87]].",
    confidence: "medium", sections: ["november-1987"], era: "pizzeria", image: "fnaf2-paycheck-1987.jpg",
  },
  {
    id: "s-last-freddys", when: "<<A November after 1987|derived|fnaf1-paycheck-night5,fnaf2-news-originals-kept|The cheques read 11-12-xx and 11-13-xx, and the cast is the four originals kept in 1987. The 1987 restaurant was still open on 12 November 1987, so the earliest year is 1988.>>",
    title: "The last Freddy's",
    text: "The company reopens on \"a much smaller budget\" with the four original machines, most likely in the old building [[fnaf2-news-reopen-smaller-budget]] [[fnaf2-news-originals-kept]]. A guard named Mike Schmidt works a week of nights there [[fnaf1-paycheck-night5]]. The recorded voice that trains him, the man who trained the 1987 guards, breaks off on the fourth night in banging, a tune and a scream [[fnaf1-call4-phone-guy-attacked]]. The restaurant is to close by the end of the year, unable to outlive \"the tragedy that took place there many years ago\" [[fnaf1-news-closing]].",
    confidence: "medium", sections: ["fnaf1-restaurant"], era: "pizzeria", image: "fnaf1-game-over-stuffed-suit.jpg",
  },
  {
    id: "s-springlock", when: "After that restaurant closed, most likely",
    title: "He dies in the suit",
    text: "A purple figure comes back to the empty building and takes the four machines apart, one a night [[fnaf3-eon-purple-guy-dismantles]]. On the fifth night the ghosts of five children corner him in the hidden room [[fnaf3-n5-ghosts-safe-room]]. He climbs into the yellow rabbit, the Spring Bonnie suit; it snaps shut on him, and he slumps to the floor [[fnaf3-n5-springlock-death]]. The room had been walled up with its contents inside [[fnaf3-tape6-safe-rooms-sealed]], and no game shows how he got in. Three games later the credits give the rabbit's voice a name: William Afton [[ffps-credits-william-afton]].",
    confidence: "medium", sections: ["springtrap", "killer"], era: "pizzeria", image: "fnaf3-springlock-death.png",
  },
  {
    id: "s-michael", when: "Undated. Placed here by convention.",
    title: "The son who should be dead",
    text: "Afton's son Michael goes down into the rental facility on his father's instructions: \"I found it. It was right where you said it would be.\" [[sl-golden-freddy-cutscene-found-it]] The machines there scoop him hollow, and something with purple eyes looks back from his mirror [[sl-real-ending-scooped-mirror]]. His body rots as it walks the street, heaves a mass of wires into a sewer, and collapses [[sl-custom-night-decay]] [[sl-custom-night-ennard-ejected]]. A voice says \"You won't die.\" [[sl-you-wont-die]] He gets up.",
    confidence: "high", sections: ["michael"], era: "funtime", image: "sl-custom-night-decay-stages.png",
  },
  {
    id: "s-fazbears-fright", when: "<<Thirty years later|relative|scott-2015-fnaf3-store-thirty-years|Scott wrote that it is thirty years after the pizzeria closed. No year is printed.>>",
    title: "Thirty years later",
    text: "A horror attraction is built out of the old restaurants' relics, and its builders open a boarded-up room: \"We found one. A real one.\" [[fnaf3-call2-found-a-real-one]] It is the rabbit suit, with a body inside [[fnaf3-springtrap-corpse-screens]]. One of the game's two endings gives six masked children a party, and they vanish [[fnaf3-happiest-day]]. The model tells it as the release they were owed and the first attempt at it; which ending happened, the games leave open. The attraction burns down [[fnaf3-it-burns-newspaper]]. In front of the wreck Michael tells his father, \"I'm going to come find you\", and a figure with rabbit's ears steps out of the dark [[sl-golden-freddy-cutscene-come-find-you]] [[sl-golden-freddy-cutscene-springtrap]].",
    confidence: "medium", sections: ["fazbears-fright", "michael"], era: "aftermath", image: "fnaf3-springtrap-corpse-screen.jpg",
  },
  {
    id: "s-trap-fire", when: "After that fire",
    title: "The trap and the fire",
    text: "The Cassette Man, the killer's old friend, opens a pizzeria as bait: \"I have to call them all back. All of them. Together in one place\" [[ffps-insanity-tape-call-them-back]]. Four machines come: Afton in what is left of the rabbit, his daughter in what is left of Circus Baby, the fused remains of the other rental machines, and, most likely, the Puppet, inside a bear built to catch it [[ffps-salvage-order]] [[ffps-lefte-blueprint]]. The manager who lets them in is most likely Michael. The building burns, and the Cassette Man stays: \"I am remaining as well. I am nearby.\" [[ffps-completion-remaining-nearby]] The game does not show who lights the fire [[ffps-completion-fire]]. It presents that fire as the end, the killer's included, and after the credits it shows six graves [[ffps-lorekeeper-gravestones]].",
    confidence: "medium", sections: ["ffps", "salvage", "michael"], era: "aftermath", image: "ffps-lorekeeper-the-end.jpg",
  },
  {
    id: "s-night-without-end", when: "After the fire",
    title: "The night without end",
    text: "Ultimate Custom Night comes after the fire, and it is one night with no morning. Someone who has killed sits in an office under attack from the machines of every earlier game, and the voices say that whoever it is cannot die [[ucn-protagonist-unnamed-killer]]. They speak of \"the one you should not have killed\" [[ucn-nightmare-freddy-toysnhk]], and one of them will not let go: \"I will hold you here. I will keep you here.\" [[ucn-orville-he-tried-to-release]] Another voice tells someone to stop: \"Leave the demon to his demons. Rest your own soul.\" [[ucn-omc-ending]] No line names the one in the office. The two readings are the killer and his son; the game does not say which, and ((ucn|the chapter on that night)) weighs them.",
    confidence: "medium", sections: ["ucn", "faith"], era: "aftermath", image: "ucn-golden-freddy-final-cutscene.jpg",
  },
  {
    id: "s-rabbit-in-code", when: "Undated. Told after the fire by convention.",
    title: "The rabbit in the code",
    text: "Fazbear Entertainment calls its own history \"total fabrications from the mind of a complete lunatic\", and has a virtual-reality game made to laugh it off [[hw-intro-complete-lunatic]] [[hw-intro-vr-game-to-move-past-ghost-stories]]. The developers are sent old circuit boards to scan [[hw-tape-05]]. Something on the boards takes hold in the code and begins to appear to the testers: a grinning, man-shaped figure in a yellow rabbit costume [[hw-rabbit-figure-appearance]]. It presents as the killer, and a hidden tape warns that it \"wants to escape\" through \"someone plugged into this game\" [[hw-tape-16]]. A second firm scans a board and sets \"a virus\" loose, and the company's lawyers halt all work on \"vintage hardware\" [[sd-circuit-board-scan-virus]] [[sd-fe-legal-halt-vintage-hardware]]. Which board the figure came from, no game says [[sd-which-board-unknown]]. The model reads it as something William Afton left behind.",
    confidence: "medium", sections: ["cover-story", "digital"], era: "digital", image: "hw-glitchtrap-behind-player.jpg",
  },
  {
    id: "s-follower", when: "During the testing, and after",
    title: "The follower",
    text: "One tester follows the instructions on the hidden tapes. The figure withdraws behind a sealed door, and a plush rabbit is left on the floor [[hw-trapped-ending]] [[hw-trapped-ending-plush]]. When someone in a rabbit mask picks it up, a woman's voice answers a caller nobody else can hear: \"Yes, I have it. I made it myself\" [[codb-mask-plush-voice]]. The tester, the woman on the call and Vanessa, the night guard of the company's largest building, are most likely one person: the woman who walks that building in a rabbit costume under the name Vanny [[security-breach-freddy-vanny-vanessa-bunny]]. One page of one ending shows Vanessa standing on the roof while the masked woman lies fallen below [[security-breach-rooftop-vanessa-alive]], and the model has no account of it.",
    confidence: "medium", sections: ["vanny", "digital"], era: "digital", image: "hw-trapped-ending-plush.jpg",
  },
  {
    id: "s-pizzaplex", when: "Later. No date is given.",
    title: "One night at the Pizzaplex",
    text: "The company's largest building stands over a ruin whose sign still reads \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]]. One night a boy named Gregory, for whom the building has no guest profile [[security-breach-intro-not-in-database]], is shut inside and hunted by the woman in the rabbit costume: \"that rabbit lady\", he calls her [[security-breach-gregory-finds-vanny-hideout]]. The night ends several ways, and the sequel follows no single one of them. In one, three hidden arcade games called Princess Quest are played to the end, and Vanessa is found waiting at the doors with the mask on the floor [[security-breach-ending-redemption]]; the model reads that as her release, and holds it loosely. In another, down in the ruin, a burnt rabbit rises from a recharge station [[security-breach-burntrap-appearance]] and seizes Freddy, the stage bear who has been hiding the boy: \"He is trying to take control of me.\" [[security-breach-freddy-take-control]] It may be what the fire left of the killer's rabbit, since the ruin is most likely the building that burned.",
    confidence: "medium", sections: ["pizzaplex", "vanny", "burntrap"], era: "pizzaplex", image: "sb-pizza-place-sign-sinkhole.webp",
  },
  {
    id: "s-mimic", when: "After that night",
    title: "Behind the concrete",
    text: "A message in Gregory's voice says he is trapped in what is left of the Pizzaplex [[ruin-cassie-seeks-gregory]]. His friend Cassie goes in after him, wearing a mask \"left behind by some Faz-Technician\" [[ruin-security-mask-left-by-faz-technician]], and the voice on her radio begs her to turn off the security, node by node [[ruin-fake-gregory-turn-off-security]]. At the bottom is a door that someone has poured concrete over, and behind it is not Gregory: it is an endoskeleton that has been using his voice [[ruin-concrete-poured-over-door]] [[ruin-mimic-reveal]]. The real Gregory tells her what she has done: \"it's been trapped down here for a really long time. The M.X.E.S. security program was designed to keep it hidden\" [[ruin-gregory-mxes-explanation]]. Its room holds mascot costumes from Edwin Murray's workshop [[ruin-mimic-lair-mcm-mascot-suits]], and the letters of its guard's name head a terminal in Murray's own house [[secret-of-the-mimic-mxes-acronym-on-screen]]. It is one of his copying machines, most likely the second: the one that learned rage.",
    confidence: "high", sections: ["mimic", "two-machines"], era: "pizzaplex", image: "ruin-mimic-elevator.jpg",
  },
];

/** Records that carry no story weight, by reason. A record a chapter cites, lists as counter-evidence or files under `further` is never here. */
export const outsideStory: OutsideStoryGroup[] = [
  {
    id: "non-canon-per-scott", title: "Releases Scott ruled non-canon",
    reason: "Scott said that FNaF4's Halloween Edition is not canon [[scott-2015-fnaf4-halloween-canon-split]] and that Sister Location's Custom Night play is not canon [[scott-2016-sl-custom-night-not-canon]]. Records of what happens only in those two releases are filed here. Custom Night's cutscenes, which he ruled canon, are not.",
    ids: [
      "fnaf4-halloween-decorated-minigames", // Halloween-decorated minigames
      "fnaf4-halloween-fun-with-bb", // Fun with Balloon Boy
      "fnaf4-halloween-replacements", // Halloween Edition replaces several Nightmares
    ],
  },
  {
    id: "declared-imaginary", title: "FNaF World's adventure",
    reason: "The game calls its own adventure imaginary, and its second update talks about itself as a product that failed. Its bosses, ordinary endings and self-commentary carry no story weight. The voice that frames the game is a different matter and is filed under ((edges)).",
    ids: [
      "fw-8bit-fredbear-puppet-master", // 8-bit Fredbear: 'the puppet-master is laughing at you'
      "fw-animdude-puppet-master", // Animdude: the 'puppet master' final boss
      "fw-chippers-revenge-ending", // Chipper's Revenge: 'You wanted to be scared... Obscurity...'
      "fw-hard-ending-killing-the-storyteller", // Hard Mode ending: 'ending the story by killing the storyteller'
      "fw-update2-game-bombed", // Update 2 Fredbear: 'The game bombed; end of story.'
    ],
  },
  {
    id: "unplaced-adaptation", title: "Into the Pit",
    reason: "An adaptation of a book story, which no main-line game refers to and which Scott has not placed. Where its background agrees with the story a chapter may say so, and nothing rests on it. The records that ((edges)) weighs are filed there. The rest are listed here, the game's secret minigames included.",
    ids: [
      "into-the-pit-collect-the-hats-purple-guy", // Minigame: Purple Guy drops a sixth party hat
      "into-the-pit-light-of-87", // Achievement 'The Light of '87'
      "into-the-pit-secret-minigames-other-stories", // Three hidden minigames tell other stories, one ending at Funtime Freddy's hand
    ],
  },
  {
    id: "company-set-dressing", title: "The level as built, inside Fazbear's own products",
    reason: "Scenery in a company recreation shows what the company staged, and these items stage nothing the story uses. The frame around such a product, and whatever intrudes on it, are story: they are argued in ((cover-story)) and ((digital)). A staged prop that a chapter shows agreeing with the story is cited there, as a staged prop.",
    ids: [
      "codb-dreadbear-focus-testing", // Dreadbear to be introduced to children
      "codb-dreadbear-reanimate", // Dreadbear: reanimating the inanimate
      "codb-game-over-its-only-a-dream", // Halloween game-over TV: 'It's only a dream.'
      "codb-glitching-gravestone", // Game-over graveyard: a glitching central gravestone
      "codb-purple-headlights", // Button turns an old truck's headlights purple
      "hw2-cold-storage-jimmy-cake", // Cold Storage: Jimmy's cake inside Glamrock Freddy
      "sd-dark-circus-encore-ending", // Dark Circus: Encore! ends on Golden Freddy's eyes lighting blue
    ],
  },
  {
    id: "mechanics-and-rosters", title: "Mechanics and rosters",
    reason: "A tuning value or a control scheme tells no story: controls, difficulty settings, roster blurbs that only instruct, and collectibles. A mechanic that a character, a document or a screen in the game explains or names is a story record, and its chapter cites it as a mechanic.",
    ids: [
      "ffps-insanity-egg-baby-trigger", // Egg Baby unlocks the Insanity ending
      "fnaf1-1987-code", // 1/9/8/7 custom night code
      "fnaf4-night8-no-story-text", // Night 8 ('20/20/20/20') adds no story
      "ucn-death-coin", // The Death Coin removes one of a few animatronics
      "ucn-dee-dee", // Dee Dee adds a 'new contender'; XOR in 50/20
      "ucn-office-skins", // The office is assembled from every earlier office
      "ucn-phone-guy-calls", // Phone Guy appears as a caller to be muted
    ],
  },
  {
    id: "not-evidence", title: "Cut, unused, data-only or unverified",
    reason: "Under this archive's source policy, only what can be reached in play, or what Scott said, is evidence. These records are kept so that nobody adds them again as facts: unused audio and assets, data labels, file names never shown on screen, and wording that could not be verified. Each is listed for what it is, not for which way it points. A texture whose place in play is unconfirmed is not of this kind: chapters cite it with that status.",
    ids: [
      "ffps-hry223-label", // Insanity-ending tape labelled 'HRY223' (reported)
      "ffps-midnight-motorist-later-that-night", // Internal label 'Later that night' on the secret area
      "fw-unused-open-box", // FNaF World's unused asset: the box, opened and empty
      "hw2-unused-vanny-bound-to-past", // Unused 'Vanny' line: 'It is bound to the past'
      "hw2-unused-vanny-dont-help-it-escape", // Unused 'Vanny' line: 'Don't help it escape'
    ],
  },
  {
    id: "development-commentary", title: "How the games were made",
    reason: "Out-of-universe: Scott on tools, schedules, patches and working names. Statements of his that work as rulings on the story are cited by the chapters and are not here; nor is his account of two working names, which ((canon-rules)) relies on.",
    ids: [
      "fnaf3-newspaper-developer-notes", // The newspapers' side columns are Scott's development notes
      "fnaf4-making-of-extras", // 'Making Foxy' / 'Making Fredbear' extras
      "scott-2014-fnaf1-store-freddybear", // FNaF1 Steam description calls Freddy 'Freddybear'
      "scott-2015-fnaf3-ten-teasers-plan", // Hidden '10' in FNaF3 teaser: abandoned countdown
      "scott-2015-silver-eyes-writing-split", // Who wrote which Silver Eyes scenes
      "scott-2016-springtrap-return-must-fit-story", // Springtrap return only if it makes sense to the story
      "scott-2017-ffps-patch-green-man", // Scott's FFPS patch notes: 'Green Man is easier to talk to.'
      "scott-2020-freddybear-early-name", // 'Freddybear' was Freddy's name for a very short time
      "scott-fnaf1-steam-freddybear", // Scott's FNaF1 description calls Freddy 'Freddybear'
      "scott-silver-parasol-website", // Scott: the studio is 'Silver Parasol Games'; planned website scrapped
    ],
  },
  {
    id: "promotion", title: "Promotion and release logistics",
    reason: "Sales copy, release dates and gameplay previews make no claim about the story. A teaser that carries in-world text is evidence, and is filed under a chapter. So is the year that ends the teaser for Secret of the Mimic: it is the year the game is set in, not a release date.",
    ids: [
      "scott-2017-ffps-store-text", // FFPS Steam description: 'lighter touch for the holidays'
      "scott-2020-unreleased-teasers-dance-party", // Unreleased teasers: 'DANCE!' and 'PARTY!' silhouettes
      "scottgames-site-2015-halloween-teasers", // FNaF4 Halloween teasers: 'COME HANG OUT.' / 'SEE YOU SOON.'
      "scottgames-site-2015-thank-you", // 2015 'Thank you!' image with the whole cast
      "scottgames-site-ffps-pixel-teasers", // Pizzeria Simulator teasers: 8-bit Freddy brings cake to three children
      "scottgames-site-fnaf3-guess-who", // FNaF3 teaser: 'Guess who?' with hidden '10'
      "scottgames-site-fnaf3-hat", // Post-FNaF3 teaser: Freddy's top hat in a spotlight
      "scottgames-site-fnaf3-offline-until-next-time", // Post-FNaF2 'offline' teaser hides 'until next time'
      "scottgames-site-fnaf4-terrible-things", // FNaF4 teaser: 'Terrible things come in small packages.' (Plushtrap)
      "scottgames-site-sb-atrium-2020", // Security Breach teaser: neon atrium with four silhouettes, '2020'
      "scottgames-site-sb-rock", // Security Breach teaser: 'ROCK!' (Glamrock Freddy silhouette)
      "scottgames-site-sl-custom-night-round-two", // SL Custom Night teaser: 'Are you ready for Round Two?'
      "scottgames-site-sl-dont-hold-it", // SL teaser: 'Don't hold it against us.' (Bidybabs)
      "scottgames-site-sl-get-back-on-stage", // SL teaser: 'Get back on your stage. NOW.'
      "scottgames-site-sl-stay-in-seats", // SL teaser: 'Everyone, please stay in your seats.' (Circus Baby)
    ],
  },
  {
    id: "jokes-and-trolls", title: "Jokes, trolls and hoaxes",
    reason: "Not offered as story by their author: fake cancellations and delays, mock reviews, joke answers and comic one-offs. A joke that a chapter quotes to make a point is cited there, as a joke, and is not listed here as well.",
    ids: [
      "ffps-lawsuit-ground-gave-way", // Lawsuit: the ground gave way and a boy was trapped below for thirteen hours
      "scott-2015-mangle-gender-yes", // Mangle's gender: 'The answer is- Yes.'
      "scott-2016-box-sarcasm", // Sarcastic 'open the box by beating nightmare mode twice'
      "scott-2016-sl-delay-troll", // The fake Sister Location 'delay'
      "scott-2017-ffps-apology", // 'Maybe I approached this wrong'
      "scott-2017-ffps-lite-announcement", // FFPS pitched as 'lite and without much consequence'
      "scott-2017-fnaf6-cancelled-tycoon-hint", // 'FNaF 6' cancelled; 'maybe... a pizzeria tycoon game'
      "scott-2017-fnaf6-not-a-troll", // 'Would I ever troll you guys?'
      "scott-2018-ffps-troll-lesson", // 'I actually did learn my lesson from FFPS'
      "ucn-toy-freddy-mr-hugs", // Toy Freddy plays 'Five Nights with Mr. Hugs'
    ],
  },
  {
    id: "community-and-merchandise", title: "Scott and the community; merchandise; films",
    reason: "About fans, creators, products and adaptations, not about the games' story. The points of fan theory that Scott himself named are cited by the chapters.",
    ids: [
      "scott-2015-dawko-razzbowski-early-access", // FNaF4 sneak peek given to Dawko and Razzbowski
      "scott-2015-no-real-phone-numbers", // No real phone numbers are hidden in the games
      "scott-2016-dawko-dedication", // FNaF World Update 2 dedicated to Dawko
      "scott-2016-nightmare-not-nightmare-freddy", // 'This character is indeed Nightmare, and not Nightmare Freddy'
      "scott-2018-movie-universe-fnaf1-3-only", // The film universe covers FNAF 1-3 only
      "scott-2020-cassidy-kazoo-names-from-lore", // A licensed 'Cassidy Kazoo': 'companies randomly throw around names from the lore'
      "scott-2020-cassidy-screenplay-lore-from-games", // A rejected film script followed 'the story of Cassidy' with 'lore from multiple games'
      "scott-2020-charlie-game-and-book-counterparts", // A rejected script's 'Charlie' had 'game and book counterparts'
      "scott-2024-movie-doug-canon", // Movie version canon over novelization detail
      "scottgames-site-2015-no-phone-numbers", // scottgames.com: no real phone numbers are associated with the game
    ],
  },
  {
    id: "author-context", title: "Scott himself",
    reason: "Biography. It explains the author, not the story. The few records that ((faith)) cites as context are filed there.",
    ids: [
      "scott-2014-beaver-game-origin", // FNaF began with a beaver that looked like a scary animatronic
      "scott-2014-desolate-hope-human-life", // The Desolate Hope: a machine protecting the smallest human life
      "scott-2014-faith-and-work", // "It's not your work but you yourself that makes the difference"
      "scottgames-site-2021-retirement-not-end", // 2021 retirement: 'Is this the end of FNAF? No.'
    ],
  },
];

/** The chapters, in reading order: part by part, in the order of theoryParts. */
export const theory: TheorySection[] = [...story, ...makers, ...family, ...murders, ...nightshift, ...machines, ...reckoning, ...afterimage, ...underground, ...apparatus];
