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
  thesis: "Five Nights at Freddy's is one story: what a machine keeps of a person, and a company that keeps putting it back on stage. William Afton kills children, and the mascot machines keep them. He dies in a rabbit suit and, decades later, comes back in it. His old friend calls four haunted machines into one building and stays as it burns. It seems to end there, on six graves. The later games bring the copies: in the company's code, a rabbit in the killer's image; under its Mega Pizzaplex, a machine built to imitate.",
  howToRead: [
    "This is the archive's own account of the story, built from two things only: the games themselves, and Scott Cawthon's own words. The novels, the guidebooks, the films and fan theory are left out, by this archive's own rule; ((canon-rules|the chapter on the rules)) says what that costs. The storyline tells the whole of it in twenty beats. The parts that follow argue it in order, and the last part is the method. If you have not played the later games, start with ((games|the chapter on the games)), which lists every release and what it adds.",
    "A small number in the text opens the record behind a claim: the exact line, screen or post. A plain statement with a record behind it means that a game, or Scott, says or shows it. Four markers flag the rest. **Most likely** marks a short inference. **The model reads** marks this archive's own interpretation. **May be**, given with its reason, marks a possibility the model holds loosely. Where two readings are close the model **leans** to one.",
    "Every chapter, and every beat of the storyline, carries one of three marks. **High** means stated or shown, or a step that every later game relies on. **Medium** means the best reading, with a real alternative beside it. **Low** means a lean, or an honest guess. A beat is all telling, and carries the mark of the weakest thing it tells. Where the games give no date, the storyline says so. Where it says \"by convention\", the order is the model's way of telling: no record fixes it, and it does not lower a mark.",
  ],
  aboutChapters: "Each chapter asks one question and answers it before arguing it. A chapter carries the mark of its main claim, and a further step in its answer that is weaker than that mark carries its own marker in the sentence. Under each chapter, \"what pushes back\" lists the records that cut against it, and \"what would change this\" names the evidence that would overturn it. Four tags mark a record of a weaker kind: (a transcript), (read from an image), (as described) and (a fan wiki's account). ((canon-rules|The chapter on the rules)) explains them, and has a table that keeps the rabbits of these games apart. People the games never name are called by description: the Cassette Man, the crying child, the older brother, the fifth child.",
};

export const theoryParts: TheoryPart[] = [
  { id: "story", title: "The story", kicker: "Start here", blurb: "The whole account in one paragraph, with a mark against each clause, and the man it turns on." },
  { id: "makers", title: "The makers", kicker: "The workshop", blurb: "A family costume firm, the two copying machines its owner built for his family, and two names in its paperwork: Hen and W.A." },
  { id: "family", title: "The family", kicker: "The house", blurb: "A house whose rooms turn up on the monitors of Afton's facility, a toy that talks, five nights in a bedroom, and a birthday party." },
  { id: "murders", title: "The murders", kicker: "Before the new restaurant", blurb: "A child shut out in the rain, children lured into a back room, and the signs the mascots carried afterwards." },
  { id: "nightshift", title: "The night shift", kicker: "1987 and after", blurb: "Two restaurants and the guards who watched them: the week the new one came apart, the company's reopening on a smaller budget, most likely in the old building, and the killer's return to it." },
  { id: "machines", title: "The machines", kicker: "Undated", blurb: "What Afton built under his own name: machines made to lure a child and take it, one blueprint with the word Remnant on it, and what the machines did to his son. The games give none of it a date. The storyline tells the first of it before November 1987 and the last after the killer's death, by convention. The chapters keep it together here, so this part steps back in time before it goes on." },
  { id: "reckoning", title: "The reckoning", kicker: "Thirty years later", blurb: "A horror attraction finds the rabbit, an old friend sets a trap, a building burns, and one voice refuses release." },
  { id: "afterimage", title: "The afterimage", kicker: "The modern era", blurb: "What the company brings back: its own history as a game, a rabbit in the code, a woman who follows it, and one night in the Mega Pizzaplex." },
  { id: "underground", title: "Under the Pizzaplex", kicker: "The buried pizzeria", blurb: "What stands in the ruin beneath it, what waits behind poured concrete, and what the whole story keeps coming back to." },
  { id: "apparatus", title: "How this was built", kicker: "Method", blurb: "What counts as evidence, what sits at the edge of the story, how it is dated, what each game adds, and what stays open." },
];

/** The short telling, in the model's order of events. A beat's confidence is that of the weakest thing it tells; its `when` says how the date or the placement is supported, and a placement by convention is said there and not counted in the mark. */
export const storyline: StoryBeat[] = [
  {
    id: "s-costume-company", when: "<<Before a night in 1979|relative|secret-of-the-mimic-mail-springlocks-hen,secret-of-the-mimic-mcm-net-earnings-1965-1975,secret-of-the-mimic-mcm-order-forms-1973-1977|No record dates the springlocks or the contract. Both are older than the night the game is set on, and no more is known. The paper of the firm carries the years 1965 to 1977, on an earnings chart and order forms that were read from images and are not yet confirmed in play. Those are its trading years, not the date of the suits.>>",
    title: "A costume company builds suits that are also machines",
    text: "The newest game, Secret of the Mimic, goes back furthest: to a workshop that builds springlock suits [[secret-of-the-mimic-mail-springlocks-hen]]. It is Murray's Costume Manor, a family firm under contract to Fazbear Entertainment [[secret-of-the-mimic-dispatch-contractor-murray]]. Edwin Murray builds, and Fiona Murray designs the characters [[secret-of-the-mimic-log-creepy]]. One of the firm's messages says that new springlocks will soon be ready \"for the diner\" [[secret-of-the-mimic-mail-springlocks-hen]]. It names no diner. A poster among that game's textures (read from an image) reads \"JOIN US AT... FREDBEAR'S FAMILY DINER\" [[secret-of-the-mimic-fredbears-diner-poster]]. FNaF3's training tapes say what springlocks are for: \"two specially designed suits that double as both animatronic and suit\" [[fnaf3-tape2-dual-suits]]. By the same tapes, every restaurant is built with one room that is on no map its machines or cameras can see [[fnaf3-tape3-safe-room]].",
    confidence: "high", sections: ["springlocks"], era: "founding", image: "sotm-fredbears-diner-poster.jpg",
  },
  {
    id: "s-two-machines", when: "Before a night in 1979",
    title: "For his own son, a machine that copies",
    text: "Fiona is gone, and Edwin is left to raise their son David alone [[secret-of-the-mimic-log-death]]. He shows the boy an endoskeleton, M1: \"Think of it as your new babysitter.\" [[secret-of-the-mimic-log-training-m1]] In other recordings a voice speaks to him as Fiona [[secret-of-the-mimic-log-m1-as-fiona]]. No recording in Secret of the Mimic says outright what became of her or David. The voice presses Edwin: \"You need to try again. Build another.\" [[secret-of-the-mimic-log-try-again-build-another]] He refuses: \"It wouldn't be him.\" And to the voice: \"I let a machine raise my kid. You're not real.\" [[secret-of-the-mimic-log-refusal]] But a second machine, M2, \"began as a copy of my program\", an unsigned message says [[secret-of-the-mimic-mail-received-5-min-ago]]. In one recording Edwin shouts at something, \"Stop sounding like him!\" [[secret-of-the-mimic-log-incident]] In another he lies hurt and tells M2 he lost his temper [[secret-of-the-mimic-log-turn-around-lost-temper]]. And the unsigned message warns: \"It mimics rage.\"",
    confidence: "high", sections: ["two-machines"], era: "founding", image: "sotm-m1-birthday-cake-film-reel.jpg",
  },
  {
    id: "s-1979", when: "<<1979, most likely 7 September|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979,secret-of-the-mimic-credential-form-1979|The year ends the official teaser for the game. A Fazbear work order dated 9/07/79 and a credential that expires in 1979 carry it too, but both were read from images and have not yet been confirmed in play. The day is read month first.>>",
    title: "The company comes to collect",
    text: "A letter signed \"WA\" says \"we now technically own the land\", and bids for the firm's software and its whole catalogue [[secret-of-the-mimic-mail-confidential-wa]]. The writer is most likely William Afton, writing for Fazbear Entertainment. One night the company sends a technician into the shuttered workshop for the blueprints [[secret-of-the-mimic-work-order-1979]]. A voice on his radio speaks as the company's Dispatch: \"everything he's been working on for us is now legally ours\" [[secret-of-the-mimic-dispatch-contract-legally-ours]]. Inside, a Dispatch voice turns out to be a cabinet computer that, once found, speaks as Fiona [[secret-of-the-mimic-f10n4-reveal]], like the voice in Edwin's recordings. Secret of the Mimic gives the night three endings, and the model does not choose. Before any of them, M2 \"can no longer be controlled\" [[secret-of-the-mimic-mail-received-5-min-ago]], and there are bodies inside character costumes, most likely those of the technicians before him [[secret-of-the-mimic-previous-technicians]].",
    confidence: "medium", sections: ["two-machines", "partners"], era: "founding", image: "sotm-work-order-1979.jpg",
  },
  {
    id: "s-house", when: "<<c. 1983|estimated|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The week counts down to a party, and the only year on screen in it is 1983, under the title of a television show. That dates the show, so it is a floor for the week, and the model takes the week as that year or soon after. Told before the child outside and the five by convention: no record orders it against either.>>",
    title: "A house with a toy that talks",
    text: "In FNaF4 a small boy lives in dread of his older brother [[fnaf4-brother-foxy-mask-tv]] [[fnaf4-bullies-in-masks]] and of the restaurant where his birthday party will be held [[fnaf4-left-behind-at-diner]]. A plush of Fredbear, the yellow bear on its stage, talks to him: \"He locked you in your room again. Don't be scared. I am here with you.\" [[fnaf4-plush-locked-in-room]] Between those scenes the game is played at night in a bedroom, holding its doors against monstrous versions of the first game's mascots [[fnaf4-bedroom-setting]] [[fnaf4-nightmare-animatronics]]. In Sister Location, a room marked Private in William Afton's facility has that bedroom on its monitors [[sl-private-room-monitor-bedroom]]. On its desk sits a Fredbear plush of the same design, with a handset in its lap [[sl-private-room-handset-beside-plush]]. So the house is most likely Afton's own, and the boys his sons. On that reading the older brother is Michael.",
    confidence: "medium", sections: ["afton-house", "plush", "nightmares"], era: "diner", image: "sl-private-room-1983-monitors.jpg",
  },
  {
    id: "s-birthday", when: "<<c. 1983|estimated|fnaf4-minigame-countdown-to-party,fnaf4-fredbear-and-friends-1983|The party ends the five-day countdown. The only year on screen in that week is 1983, under the title of a television show.>>",
    title: "The birthday",
    text: "The week ends at the boy's birthday party [[fnaf4-its-your-birthday]]. His older brother and three friends in masks carry him to the stage and lift him to Fredbear's mouth for \"a big kiss\" [[fnaf4-give-fredbear-a-kiss]]. The jaw closes on his head [[fnaf4-the-bite]]. In the dark afterwards, text in the grey of his brother's lines says \"I'm sorry.\" [[fnaf4-night6-brother-apology]] Then a line in the plush's yellow makes a promise: \"I will put you back together.\" [[fnaf4-i-will-put-you-back-together]] The boy fades from the screen last of all [[fnaf4-night6-fade-order]]. He most likely dies, and after that no record places him.",
    confidence: "medium", sections: ["bite"], era: "diner", image: "fnaf4-bite-fredbear-stage.png",
  },
  {
    id: "s-child-outside", when: "<<Undated. Placed here by convention.|unknown|ffps-insanity-wound-first-inflicted|No game dates her death. The model tells it before the five by convention, on one sentence: her father speaks of a wound first inflicted on him, and the model reads the wound as her death. Its place after the 1983 week is a convention too.>>",
    title: "The child outside",
    text: "In a Pizzeria Simulator minigame a child is shut out of a building in the rain while the Puppet, the machine set to watch that child, is pinned in its box [[ffps-security-puppet-trapped]]. It gets out too late, and sinks down beside the body [[ffps-security-puppet-dead-child]]. In a FNaF2 minigame a purple figure steps out of a purple car and kills a crying child [[fnaf2-take-cake-to-the-children]]. Most likely these are one death: William Afton kills the daughter of the Cassette Man, the voice on Pizzeria Simulator's tapes, and she stays on in the Puppet. \"My daughter, if you can hear me, I knew you would return as well,\" that voice says [[ffps-completion-my-daughter]].",
    confidence: "medium", sections: ["child-outside"], era: "murders", image: "ffps-security-puppet-child-outside.png",
  },
  {
    id: "s-five", when: "<<A June 26th between 1980 and 1986|estimated|fnaf1-news-kids-vanish,fnaf1-news-uphill-battle,fnaf2-call1-new-location,fnaf2-overtime-robots-scrapped,secret-of-the-mimic-rnd-proto-pizzeria|The day and month are printed in a clipping, for two children. No year is printed. The model estimates a year between 1980 and 1986. The restaurant of 1987 gives 1987 as the latest year, and the model takes 1986 because the old restaurant traded on after the incident and was then left to rot for quite a while. The floor rests on the prototypes of 1979 and is soft. Told after the 1983 week by convention: no record orders the two.>>",
    title: "Lured into a back room",
    text: "\"Two local children were reportedly lured into a back room during the late hours of operation at Freddy Fazbear's Pizza on the night of June 26th.\" [[fnaf1-news-kids-vanish]] So reads a clipping in the first game. Police think the man dressed as a company mascot [[fnaf1-news-dressed-as-mascot]]. Five children are linked to it in the end, and no bodies are found [[fnaf1-news-five-children]]. A man is caught the next morning [[fnaf1-news-suspect-captured]], and the model does not say who he was. The killer is William Afton (see ((killer))). Most likely the place is the old restaurant, the one before the 1987 restaurant, and the costume is the yellow rabbit, Spring Bonnie. A Pizzeria Simulator arcade screen puts a grinning yellow figure in costume behind a crying girl, over the words \"He's not really dead.\" [[ffps-fruity-maze-follow-me]]",
    confidence: "medium", sections: ["murders", "killer"], era: "murders", image: "fnaf1-missing-children-newspapers.jpg",
  },
  {
    id: "s-children-stay", when: "Afterwards",
    title: "The children stay",
    text: "The restaurant is threatened with closure over a foul smell from its mascots, and \"what appeared to be blood and mucus around the eyes and mouths\" [[fnaf1-news-sanitation]]. The model reads that as the bodies hidden inside the mascots, which no game shows. One FNaF2 minigame has the Puppet set a mascot's head on each of four grey, dead-looking children, and ends on a yellow bear, Golden Freddy, lunging at the screen [[fnaf2-give-gifts-give-life]]. The children stay on in the machines. Even the Cassette Man, who calls those machines \"prisons of my making\" [[ffps-insanity-small-souls-prisons]], never learns how: \"I don't know how those tiny breaths of life came to inhabit those machines.\" [[ffps-insanity-tiny-breaths]]",
    confidence: "medium", sections: ["golden", "remnant"], era: "murders", image: "fnaf2-give-gifts-give-life.png",
  },
  {
    id: "s-afton-robotics", when: "Undated. Placed here by convention.",
    title: "Machines built to take children",
    text: "William Afton builds machines under his own name. One of their blueprints, marked Afton Robotics, carries the labels \"Parental Tracking\", \"Voice Mimic/ Luring\" and \"Storage Tank\" [[sl-blueprint-funtime-freddy]]. The grand opening of Circus Baby's Pizza World is cancelled [[scottgames-site-sl-news-gas-leak-cancellation]], and in Sister Location the machines are hired out to parties from a facility underground [[sl-handunit-rented-for-private-parties]]. The word Remnant appears on another of the firm's sheets [[ffps-scup-blueprint]], and no game says what it means (see ((remnant))). The one child the games show these machines take is their maker's own daughter. She begs to play with Circus Baby, \"Didn't you make her just for me?\" [[sl-girl-daddy-let-me-play]], and is pulled inside it [[sl-baby-minigame-girl-grabbed]].",
    confidence: "high", sections: ["funtimes", "remnant"], era: "funtime", image: "sl-blueprint-funtime-freddy.jpg",
  },
  {
    id: "s-november-1987", when: "<<November 1987|printed|fnaf2-paycheck-1987,fnaf2-overtime-robots-scrapped|The two cheques are dated 11-12-1987 and 11-13-1987.>>",
    title: "\"Someone used one of the suits\"",
    text: "In FNaF2 the old restaurant has been \"left to rot\", and a new one opens with new machines; the old ones sit in a back room, kept for parts [[fnaf2-call1-new-location]] [[fnaf2-call2-older-models]]. Within a week there is an investigation [[fnaf2-call4-investigation]]. Phone Guy, the voice on the guard's phone, says that someone \"may have tampered\" with the machines [[fnaf2-call4-facial-recognition-tampered]], and the building is locked down against \"previous employees\" [[fnaf2-call5-lockdown]]. Then: \"Someone used one of the suits. We had a spare in the back, a yellow one.\" [[fnaf2-call6-yellow-suit]] No record says what was done that week. The restaurant closes [[fnaf2-overtime-robots-scrapped]]. Two things are most likely: the killer was back, and these last days hold the bite a later guard hears of, \"The Bite of '87\" [[fnaf1-call1-bite-of-87]].",
    confidence: "medium", sections: ["november-1987"], era: "pizzeria", image: "fnaf2-paycheck-1987.jpg",
  },
  {
    id: "s-last-freddys", when: "<<A November after 1987|derived|fnaf1-paycheck-night5,fnaf2-paycheck-1987,fnaf2-news-originals-kept|The cheques read 11-12-xx and 11-13-xx, and the cast is the four originals kept in 1987. The 1987 restaurant was still open on 12 November 1987, so the earliest year is 1988.>>",
    title: "The last Freddy's",
    text: "After the closure of 1987 the company's chief executive promises: \"We are confident that we will reopen someday, even if it is with a much smaller budget.\" [[fnaf2-news-reopen-smaller-budget]] The four original machines are kept [[fnaf2-news-originals-kept]], and in a later November, in the first game, a guard named Mike Schmidt works a week of nights among them [[fnaf1-paycheck-night5]]. Phone Guy's recorded voice trains him, and breaks off on the fourth night in banging, music and a scream (as described) [[fnaf1-call4-phone-guy-attacked]]. Most likely this is the old restaurant, and the clipping in its hall is this restaurant's own notice: it will close by the year's end, after \"the tragedy that took place there many years ago\" [[fnaf1-news-closing]].",
    confidence: "medium", sections: ["fnaf1-restaurant"], era: "pizzeria", image: "fnaf1-game-over-stuffed-suit.jpg",
  },
  {
    id: "s-springlock", when: "After that restaurant closed, most likely",
    title: "He dies in the suit",
    text: "In the minigames between FNaF3's nights a purple figure comes back to an empty restaurant and takes the four machines apart, one after another [[fnaf3-eon-purple-guy-dismantles]]. Then five grey, crying children corner him in a room the machines could not enter [[fnaf3-n5-ghosts-safe-room]]. He climbs into the yellow rabbit, the Spring Bonnie suit; it snaps shut on him, and he slumps to the floor [[fnaf3-n5-springlock-death]]. A training tape says such rooms were being walled up with everything left inside [[fnaf3-tape6-safe-rooms-sealed]], and no game shows how he got into this one. Pizzeria Simulator's credits later give the rabbit's voice a name: William Afton [[ffps-credits-william-afton]].",
    confidence: "medium", sections: ["springtrap", "killer"], era: "pizzeria", image: "fnaf3-springlock-death.png",
  },
  {
    id: "s-michael", when: "Undated. Placed here by convention.",
    title: "The son who should be dead",
    text: "Afton's son Michael goes down into the rental facility on his father's instructions: \"I found it. It was right where you said it would be.\" [[sl-golden-freddy-cutscene-found-it]] The machines of Sister Location scoop him hollow, and a dark shape at a mirror opens glowing purple eyes [[sl-real-ending-scooped-mirror]]. His body rots as it walks the street, heaves a mass of wires into a sewer, and collapses [[sl-custom-night-decay]] [[sl-custom-night-ennard-ejected]]. A voice says \"You won't die.\" [[sl-you-wont-die]] He gets up.",
    confidence: "high", sections: ["michael"], era: "aftermath", image: "sl-custom-night-decay-stages.png",
  },
  {
    id: "s-fazbears-fright", when: "<<Thirty years later|printed|scott-2015-fnaf3-store-thirty-years,scottgames-site-fnaf3-source-30-years-later-only-one|Scott Cawthon wrote the store text for the game, and it prints the interval: thirty years after the pizzeria closed its doors. The interval is printed. The closing it counts from has no year, so the date is a distance from an undated event and gives no year. Which of three closings it counts from is not said.>>",
    title: "\"We found one. A real one.\"",
    text: "A local amusement park builds a horror attraction on \"the unsolved mysteries of Freddy Fazbear's Pizza\" [[fnaf3-coming-soon-newspaper]], and its builders hear of an extra room that was boarded up [[fnaf3-call1-boarded-room-lead]]. The next night: \"We found one. A real one.\" [[fnaf3-call2-found-a-real-one]] It is a decayed rabbit, Springtrap in FNaF3's menu [[fnaf3-springtrap-name]], with what looks like a body inside [[fnaf3-springtrap-corpse-screens]]. One of that game's two endings runs through a hidden party at which six masked children vanish [[fnaf3-happiest-day]]. The model tells that party as the release they were owed, and the games leave open which ending happened. The attraction burns down [[fnaf3-it-burns-newspaper]]. In front of the wreck Michael tells his father, \"I'm going to come find you\", and a figure with rabbit's ears steps out of the dark [[sl-golden-freddy-cutscene-come-find-you]] [[sl-golden-freddy-cutscene-springtrap]].",
    confidence: "medium", sections: ["fazbears-fright", "michael"], era: "aftermath", image: "fnaf3-springtrap-corpse-screen.jpg",
  },
  {
    id: "s-trap-fire", when: "After that fire, most likely",
    title: "The trap and the fire",
    text: "In Pizzeria Simulator the Cassette Man has a plan: \"I have to call them all back. All of them. Together in one place\" [[ffps-insanity-tape-call-them-back]]. He sets his trap in a new pizzeria that a franchisee runs [[ffps-tutorial-franchisee]], and four machines come [[ffps-salvage-order]]. The game names two: Afton, in what is left of the rabbit [[ffps-credits-william-afton]], and Elizabeth, his daughter, in what is left of Circus Baby [[ffps-completion-connection-terminated-elizabeth]]. Most likely the others are the fused remains of the other rental machines and the Puppet, inside a bear built to catch it [[ffps-lefte-blueprint]], and the franchisee is Michael. The building burns, and the game does not show who lights it [[ffps-completion-fire]]. The Cassette Man stays [[ffps-completion-remaining-nearby]], and tells one of them: \"don't keep the Devil waiting, old friend.\" [[ffps-completion-old-friend-hell]] There the game ends, and after its credits it shows six graves [[ffps-lorekeeper-gravestones]].",
    confidence: "medium", sections: ["ffps", "salvage", "michael"], era: "aftermath", image: "ffps-lorekeeper-the-end.jpg",
  },
  {
    id: "s-night-without-end", when: "After the fire, most likely",
    title: "The night without end",
    text: "In Ultimate Custom Night someone sits in an office that the machines of the earlier games attack [[ucn-roster-includes-ffps-four]]. The voices promise a night with no morning: \"over, and over, and over again... forever\" [[ucn-nedd-bear-forever]]. They call the one in the office \"a victim that can't perish\" [[ucn-nightmare-freddy-cant-perish]] and speak of \"the one you should not have killed\" [[ucn-nightmare-freddy-toysnhk]]. One of them will not let go: \"I will hold you here. I will keep you here. No matter how many times they burn us.\" [[ucn-orville-he-tried-to-release]] Another voice tells someone to stop: \"Leave the demon to his demons. Rest your own soul.\" [[ucn-omc-ending]] No line names the one in the office. The two readings are the killer and his son; the game does not say which, and ((ucn|the chapter on that night)) weighs them.",
    confidence: "medium", sections: ["ucn", "faith"], era: "aftermath", image: "ucn-golden-freddy-final-cutscene.jpg",
  },
  {
    id: "s-rabbit-in-code", when: "Undated. Placed here by convention.",
    title: "The rabbit in the code",
    text: "Fazbear Entertainment admits that some stories about it were \"loosely based on actual events\" [[hw-intro-loosely-based-on-actual-events]] and blames most on \"a complete lunatic\" [[hw-intro-complete-lunatic]]. It has a virtual-reality game, Help Wanted, made to laugh them off [[hw-intro-vr-game-to-move-past-ghost-stories]]. The developers are sent old circuit boards to scan [[hw-tape-05]]. Something on them takes hold in the code: a grinning, person-shaped figure in a yellow rabbit costume [[hw-rabbit-figure-appearance]] (known as Glitchtrap, Scott's working name for it). It presents as the killer, and a hidden tape warns that it \"wants to escape\" through \"someone plugged into this game\" [[hw-tape-16]]. In Special Delivery's emails a circuit board is scanned and sets \"a virus\" loose [[sd-circuit-board-scan-virus]]. That second scan is told here by convention. No game says which machine the boards came from [[sd-which-board-unknown]]. The model reads {{glitchtrap}} as something William Afton left behind.",
    confidence: "medium", sections: ["cover-story", "digital"], era: "digital", image: "hw-glitchtrap-behind-player.jpg",
  },
  {
    id: "s-follower", when: "During the testing, and after",
    title: "The follower",
    text: "The tapes say how to kill {{glitchtrap}}, and one tester tries [[hw-tape-16]]. The figure steps back behind a huge metal door, and a plush rabbit is left [[hw-trapped-ending]] [[hw-trapped-ending-plush]]. In Help Wanted's Halloween add-on, a player in a rabbit mask who picks the plush up hears a woman answer someone unheard: \"Yes, I have it. I made it myself\" [[codb-mask-plush-voice]]. Most likely the tester, the woman on the call and Vanessa, the security guard of Security Breach's Mega Pizzaplex, are one person: Vanny, the woman who walks that building in a rabbit costume [[security-breach-freddy-vanny-vanessa-bunny]]. One ending counts against it. Its last comic page shows a blonde woman in Vanessa's cap and uniform on the roof after Vanny has fallen from it [[security-breach-rooftop-vanessa-alive]], and the model has no account of that page.",
    confidence: "medium", sections: ["vanny", "digital"], era: "digital", image: "hw-trapped-ending-plush.jpg",
  },
  {
    id: "s-pizzaplex", when: "<<After the fire, most likely|relative|security-breach-underground-pizza-place,ffps-completion-slide-pizza-place-condemned|No date is given. The Pizzaplex stands over a buried pizzeria. Its sign carries the same name as a small condemned building on a slide at the end of Pizzeria Simulator. That it is the building which burned in that game is a reading, so the order is inferred.>>",
    title: "One night at the Pizzaplex",
    text: "The Mega Pizzaplex stands over a ruin whose sign reads \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]]. In Security Breach a boy, Gregory, is shut in there overnight [[security-breach-intercom-pizzaplex-now-closed]]. Freddy, the bear hiding him, scans him and finds no guest profile [[security-breach-intro-not-in-database]]. Vanny walks its halls: \"that rabbit lady\", the boy calls her [[security-breach-gregory-finds-vanny-hideout]]. In one ending the three Princess Quest arcade games are finished, and a blonde woman waits at the doors, the rabbit mask on the floor [[security-breach-ending-redemption]]. In another, something rises from a recharge station in the ruin [[security-breach-burntrap-appearance]] and seizes Freddy: \"He is trying to take control of me.\" [[security-breach-freddy-take-control]] This is {{burntrap}} (known as Burntrap, a working name that Scott has said now stands [[scott-2024-interview-placeholder-names-canon]]), and the game never says what it is [[security-breach-burntrap-name-not-in-game]]. The wrecked building of the sequel, RUIN, is most likely that ending's aftermath.",
    confidence: "medium", sections: ["pizzaplex", "vanny", "burntrap"], era: "pizzaplex", image: "sb-pizza-place-sign-sinkhole.webp",
  },
  {
    id: "s-mimic", when: "After that night",
    title: "Behind the concrete",
    text: "A message in Gregory's voice says he is trapped in what is left of the Pizzaplex [[ruin-cassie-seeks-gregory]]. His friend Cassie goes in after him and is handed a mask \"left behind by some Faz-Technician\" [[ruin-security-mask-left-by-faz-technician]]. The voice begs her: \"turn off all the security! Turn it all off!\" [[ruin-fake-gregory-turn-off-security]] At the bottom is a door that someone has poured concrete over [[ruin-concrete-poured-over-door]], and behind it is not Gregory but an endoskeleton that has been using his voice [[ruin-mimic-reveal]]. In one RUIN ending a second Gregory voice tells her: \"The M.X.E.S. security program was designed to keep it hidden\" [[ruin-gregory-mxes-explanation]]. Those letters are spelled out on a terminal in Edwin Murray's house [[secret-of-the-mimic-mxes-acronym-on-screen]]. The thing behind the concrete is a copying machine of Murray's design, most likely the second itself: the one that mimics rage.",
    confidence: "medium", sections: ["mimic", "two-machines"], era: "pizzaplex", image: "ruin-mimic-elevator.jpg",
  },
];

/** Records that carry no story weight, by reason. A record a chapter cites, lists as counter-evidence or files under `further` is never here. */
export const outsideStory: OutsideStoryGroup[] = [
  {
    id: "non-canon-per-scott", title: "Releases Scott ruled non-canon",
    reason: "Scott said that FNaF4's Halloween Edition is not canon [[scott-2015-fnaf4-halloween-canon-split]] and that Sister Location's Custom Night is not canon [[scott-2016-sl-custom-night-not-canon]], and later that its cutscenes are [[scott-2016-cutscenes-are-canon]]. Records of what happens only in those two releases are filed here; the cutscenes are not.",
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
      "fw-animdude-puppet-master", // Animdude: the 'puppet master' final boss
      "fw-chippers-revenge-ending", // Chipper's Revenge: 'You wanted to be scared... Obscurity...'
      "fw-hard-ending-killing-the-storyteller", // Hard Mode ending: 'ending the story by killing the storyteller'
      "fw-update2-game-bombed", // Update 2 Fredbear: 'The game bombed; end of story.'
    ],
  },
  {
    id: "unplaced-adaptation", title: "Into the Pit",
    reason: "An adaptation of a book story, which no main-line game refers to and which Scott has not placed. Where its background agrees with the story a chapter may say so, and nothing rests on it. The records weighed in ((edges|the chapter on the story's edges)) are filed there, the one on its secret minigames among them. The rest are listed here.",
    ids: [
      "into-the-pit-collect-the-hats-purple-guy", // Minigame: a purple figure drops a sixth party hat
      "into-the-pit-light-of-87", // Achievement 'The Light of '87'
    ],
  },
  {
    id: "company-set-dressing", title: "The level as built, inside Fazbear's own products",
    reason: "Scenery in a company recreation shows what the company staged, and these items stage nothing the story uses. The frame around such a product, and whatever intrudes on it, are story: they are argued in ((cover-story)) and ((digital)). A staged prop that a chapter shows agreeing with the story is cited there, as a staged prop. Two items here look like intrusions and are filed as scenery by the model's ruling: a gravestone that glitches in a game-over room, and a truck whose headlights turn purple at a hidden button. Neither shows a figure, prints a word or addresses the player, and what either refers to is a guess.",
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
      "fnaf1-1987-code", // 1/9/8/7 custom night code
      "ucn-death-coin", // The Death Coin removes one of a few animatronics
      "ucn-dee-dee", // Dee Dee adds a 'new contender'; XOR in 50/20
      "ucn-office-skins", // The office is assembled from every earlier office
      "ucn-phone-guy-calls", // Phone Guy appears as a caller to be muted
    ],
  },
  {
    id: "not-evidence", title: "Cut, unused, data-only or unverified",
    reason: "Under this archive's source policy, only what can be reached in play, or what Scott said, is evidence. These records are kept so that nobody adds them again as facts: unused audio and assets, data labels, file names never shown on screen, and wording that could not be verified. Two are labels. The name reported for the hidden tape of Pizzeria Simulator is unverified: no source says where it is shown. The caption on Midnight Motorist's hidden area is in the game's data only. Each is listed for what it is, not for which way it points. A texture whose place in play is unconfirmed is not of this kind: chapters cite it with that status.",
    ids: [
      "ffps-hry223-label", // Insanity-ending tape reported to be called 'HRY223'
      "ffps-midnight-motorist-later-that-night", // Internal label 'Later that night' on the secret area (reported)
      "fw-unused-open-box", // FNaF World's unused asset: the box, opened and empty
      "hw2-unused-vanny-bound-to-past", // Unused 'Vanny' line: 'It is bound to the past'
      "hw2-unused-vanny-dont-help-it-escape", // Unused 'Vanny' line: 'Don't help it escape'
    ],
  },
  {
    id: "development-commentary", title: "How the games were made",
    reason: "Out-of-universe: Scott on tools, schedules, patches and working names. Statements of his that work as rulings on the story are cited by the chapters and are not here; nor is his account of two working names, which ((canon-rules)) relies on.",
    ids: [
      "fnaf3-newspaper-developer-notes", // The newspapers' blurred side columns: Scott's development notes, by the wiki's transcript
      "fnaf4-making-of-extras", // 'Making Foxy' / 'Making Fredbear' extras
      "scott-2014-fnaf1-store-freddybear", // FNaF1 Steam description calls Freddy 'Freddybear'
      "scott-2015-fnaf3-ten-teasers-plan", // Hidden '10' in FNaF3 teaser: abandoned countdown
      "scott-2015-silver-eyes-writing-split", // Who wrote which Silver Eyes scenes
      "scott-2016-springtrap-return-must-fit-story", // Springtrap return only if it makes sense to the story
      "scott-2017-ffps-patch-green-man", // Scott's FFPS patch notes: 'Green Man is easier to talk to.'
      "scott-2020-freddybear-early-name", // 'Freddybear' was Freddy's name for a very short time
      "scott-fnaf1-steam-freddybear", // Scott's FNaF1 description calls Freddy 'Freddybear'
    ],
  },
  {
    id: "promotion", title: "Promotion and release logistics",
    reason: "Sales copy, release dates and gameplay previews make no claim about the story. A teaser is evidence when it carries in-world text that bears on the story, and is then filed under a chapter. A tagline in a character's voice does not, and four such teasers are listed here. The year that ends the teaser for Secret of the Mimic is evidence too: it is the year the game is set in, not a release date.",
    ids: [
      "scott-2017-ffps-store-text", // FFPS Steam description: 'lighter touch for the holidays'
      "scott-2020-unreleased-teasers-dance-party", // Unreleased teasers: 'DANCE!' and 'PARTY!' silhouettes
      "scottgames-site-2015-halloween-teasers", // FNaF4 Halloween teasers: 'COME HANG OUT.' / 'SEE YOU SOON.'
      "scottgames-site-2015-thank-you", // 2015 'Thank you!' image grouping characters from FNaF1–4
      "scottgames-site-ffps-pixel-teasers", // Pizzeria Simulator teasers: 8-bit Freddy brings cake to three children
      "scottgames-site-fnaf3-guess-who", // FNaF3 teaser: 'Guess who?' with hidden '10'
      "scottgames-site-fnaf3-hat", // Post-FNaF3 teaser: a black top hat in a spotlight
      "scottgames-site-fnaf3-offline-until-next-time", // Post-FNaF2 'offline' teaser hides 'until next time'
      "scottgames-site-fnaf4-terrible-things", // FNaF4 teaser: 'Terrible things come in small packages.' (Plushtrap)
      "scottgames-site-sb-atrium-2020", // Security Breach teaser: neon atrium with four silhouettes, '2020'
      "scottgames-site-sb-rock", // Security Breach teaser: 'ROCK!' (Freddy silhouette)
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
      "ffps-lawsuit-ground-gave-way", // Lawsuit: the ground gave way and a boy was trapped below for nearly thirteen hours
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
    reason: "About fans, creators, products and adaptations, not about the games' story. The points of fan theory that Scott himself named are cited by the chapters, and so are his remarks on two names that a product and two film scripts took from the lore, which ((canon-rules|the chapter on the rules)) weighs.",
    ids: [
      "scott-2015-dawko-razzbowski-early-access", // FNaF4 sneak peek given to Dawko and Razzbowski
      "scott-2015-no-real-phone-numbers", // 'there are NO phone numbers associated with this game'
      "scott-2016-dawko-dedication", // FNaF World Update 2 dedicated to Dawko
      "scott-2016-nightmare-not-nightmare-freddy", // 'This character is indeed Nightmare, and not Nightmare Freddy'
      "scott-2018-movie-universe-fnaf1-3-only", // 2018: the planned film 'will take place in the universe of FNAF 1-3 only'
      "scott-2024-movie-doug-canon", // 'Movie-Doug IS canon. Book-Doug is NOT canon.'
      "scottgames-site-2015-no-phone-numbers", // scottgames.com: no real phone numbers are associated with the game
    ],
  },
  {
    id: "author-context", title: "Scott himself",
    reason: "Biography. It explains the author, not the story. The few records that ((faith)) cites as context are filed there.",
    ids: [
      "scott-2014-beaver-game-origin", // FNaF began with a beaver that looked like a scary animatronic
      "scott-2014-desolate-hope-human-life", // The Desolate Hope: a machine protecting the smallest human life
      "scottgames-site-2021-retirement-not-end", // 2021 retirement: 'Is this the end of FNAF? No.'
    ],
  },
];

/** The chapters, in reading order: part by part, in the order of theoryParts. */
export const theory: TheorySection[] = [...story, ...makers, ...family, ...murders, ...nightshift, ...machines, ...reckoning, ...afterimage, ...underground, ...apparatus];
