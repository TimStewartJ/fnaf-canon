import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 5: The night shift (1987 and after).
 * Two restaurants and the guards who watched them: the week the new one came apart, the old one reopened on a smaller budget, and the night the killer came back to it.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "november-1987", part: "nightshift", title: "November 1987",
    question: "What happened at the new restaurant in 1987, and what was the Bite of '87?",
    answer: "The new Freddy's came apart in one week of November 1987: rumours, an investigation, machines tampered with, a lockdown against \"previous employees\", a spare yellow suit that \"someone used\", and closure. The killer was most likely back in the building. What he did there, no record says. The Bite of '87 most likely falls in the restaurant's last days, and who bit whom is never shown.",
    confidence: "medium",
    hero: { image: "fnaf2-parts-service-old-models.jpg", caption: "FNaF2's Parts/Service room in November 1987: the older Bonnie, faceless and missing an arm, and the older Freddy on the floor [[fnaf2-call2-older-models]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["fnaf2-save-them", "fnaf2-save-them-purple-figure-chest-mark", "fnaf2-call3-rumors", "fnaf2-no-bite-mention", "ffps-fruity-maze-follow-me"],
    tension: "Read alone, FNaF2 suggests victims in 1987. SAVE THEM shows five small bodies among that restaurant's cast [[fnaf2-save-them]], with a purple figure who has a mark on his chest that he has nowhere else [[fnaf2-save-them-purple-figure-chest-mark]], and by the third night the company is already denying something \"tragic\" [[fnaf2-call3-rumors]]. The model reads the bodies as the earlier five because no later count of the dead has a ghost, a mask, a grave or a doll left over for a second five. The price is that it has no act for this week, and it says so. For the Bite, no call that week uses the word [[fnaf2-no-bite-mention]], and a bite earlier in 1987 at the old location cannot be excluded. For the suit, the rabbit is the killer's costume wherever a later game shows him in one [[ffps-fruity-maze-follow-me]]; the bear is preferred, narrowly, because it is the one empty yellow costume the first two games show.",
    changesIf: "Any record of 1987 victims (a name, a grave, a ghost), a game that shows the Bite of '87, or a date for the training tapes against November 1987.",
    seeAlso: ["murders", "golden", "fnaf1-restaurant", "springtrap", "bite", "timeline-math", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf1-call1-bite-of-87", // [stated] The Bite of '87
      "fnaf2-call1-new-location", // [stated] New and improved location; old one left to rot
      "fnaf2-call1-second-guard", // [stated] Player is the second guard; first moved to day shift
      "fnaf2-call4-investigation", // [stated] Investigation; possible closure
      "fnaf2-call4-facial-recognition-tampered", // [stated] Facial recognition tampered; animatronics stare at adults
      "fnaf2-call5-lockdown", // [stated] Building on lockdown; previous employees
      "fnaf2-call5-fredbears-family-diner", // [stated] Original restaurant: Fredbear's Family Diner
      "fnaf2-call6-yellow-suit", // [stated] Someone used the spare yellow suit
      "fnaf2-paycheck-1987", // [stated] Jeremy Fitzgerald's paycheck 11-12-1987
      "fnaf2-overtime-robots-scrapped", // [stated] Overtime check 11-13-1987 and 'ROBOTS SCRAPPED' article
      "fnaf2-call1-walk-around-during-day", // [stated] In November 1987 the new animatronics walk around during the day
      "fnaf2-golden-freddy-night6-only", // [shown] Golden Freddy is inactive until Night 6
      // support
      "fnaf2-help-wanted-ad", // [stated] FNaF2 Help Wanted ad: Grand Re-Opening
      "fnaf2-call1-criminal-database", // [stated] New animatronics: facial recognition and criminal database
      "fnaf2-call6-birthday-day-shift", // [stated] Final birthday event; guard to day shift
      "fnaf2-pink-slip-fritz-smith", // [stated] Fritz Smith's pink slip (Night 7)
      "fnaf2-cutscenes-its-me", // [shown] Dream cutscenes end in 'it's me'
      "fnaf2-save-them-you-cant", // [shown] SAVETHEM: purple figure, 'you can't'
      "fnaf2-call1-endoskeleton-glitch", // [stated] 1987: the same 'endoskeleton without his costume' explanation
      "fnaf2-call1-no-night-mode", // [stated] Engineers have no explanation: 'never given a proper night mode'
      "fnaf2-old-models-walk-from-night2", // [stated] The older models 'shouldn't be able to walk around', and do
      "fnaf2-call5-day-shift-vacancy", // [stated] Night 5: a day-shift position 'just became available'
      "fnaf2-save-them-golden-freddy", // [shown] A slumped yellow bear can sit in SAVETHEM's rooms
      "fnaf2-cutscenes-old-stage-through-eye-holes", // [shown] Cutscenes: FNaF1's stage, seen through the eye holes of a head
      "fnaf2-parts-service-old-models", // [shown] Parts/Service: the older models sit damaged and incomplete
      "scott-fnaf2-steam-description", // [stated] Scott: FNaF2 animatronics tied into local criminal databases
      "scott-2014-fnaf2-store-previous-guard", // [stated] FNaF2 Steam description: previous guard moved to day shift
      "scottgames-site-fnaf2-grand-reopening", // [shown] FNaF2 teaser: 'Grand Reopening 2015'
      "scottgames-site-fnaf2-something-borrowed", // [shown] FNaF2 teaser: 'something borrowed... something new...'
      "scott-2018-interview-fnaf3-teaser-read-as-golden-freddy", // [stated] 2018: people first took the FNaF3 teaser figure for Golden Freddy
      // colour
      "fnaf2-call3-mangle", // [stated] Kid's Cove Foxy became 'the mangle'
      "fnaf2-jj-endo-puppet-visions", // [shown] JJ, Endo-02 and Puppet camera visions
      "fnaf2-game-over-inside-mask", // [shown] Game over: looking out through a mask at the older Freddy
      "scott-fnaf2-steam-old-and-aging", // [stated] Scott: in FNaF2 'the old and aging animatronics are joined by a new cast'
    ],
  },
  {
    id: "fnaf1-restaurant", part: "nightshift", title: "The last Freddy's",
    question: "When is the first game set, and which restaurant is it?",
    answer: "After 1987, in a year the games never print. It is most likely the old building, reopened on a smaller budget with the four original machines, and it is to close by the end of that year. The voice on the phone is the man who trained the 1987 guards, and his last recorded call implies that he did not survive his own week there.",
    confidence: "medium",
    hero: { image: "fnaf1-game-over-stuffed-suit.jpg", caption: "FNaF1's game-over screen: a Freddy suit in the back room, with eyes and teeth showing where a mask should be empty [[fnaf1-game-over-eyes-teeth]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "fnaf1-help-wanted-ad", "scott-2014-fnaf1-store-summer-job"],
    tension: "Three records resist the placing. Phone Guy says the characters have been singing \"for twenty years\" [[fnaf1-call1-twenty-years]]; counted from 1987 that would put FNaF1 in the 2000s, and the model reads it as the age of the act, not the gap between two games. The advertisement says nothing of a reopening [[fnaf1-help-wanted-ad]], and \"the tragedy that took place there\" could mean the brand as easily as the building, which is why \"the old building\" stays at most likely. And Scott's store text calls the post a \"summer job\" [[scott-2014-fnaf1-store-summer-job]] where the game's own cheques are dated November; the model prefers the cheques.",
    changesIf: "A year on FNaF1's cheques, or a record that says which building the last restaurant is.",
    seeAlso: ["november-1987", "springtrap", "golden", "cover-story", "timeline-math", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf1-call1-phone-guy-previous-guard", // [stated] Phone Guy worked the office before
      "fnaf1-call4-phone-guy-attacked", // [stated] Phone Guy's last call
      "fnaf1-news-closing", // [stated] Newspaper: pizzeria to close by year's end
      "fnaf1-paycheck-night5", // [stated] Mike Schmidt's paycheck (Night 5)
      "fnaf1-calls-prerecorded", // [stated] Phone Guy's FNaF1 messages were recorded in advance
      "fnaf2-call6-night-shift-myself", // [stated] Phone Guy: 'I'll probably take the night shift myself'
      "fnaf2-news-originals-kept", // [stated] ROBOTS SCRAPPED: the new animatronics go, the originals are kept
      "fnaf2-news-reopen-smaller-budget", // [stated] CEO: 'we will reopen someday', with 'a much smaller budget'
      // support
      "fnaf1-call1-free-roaming-mode", // [stated] Free roaming mode at night
      "fnaf1-call1-stuffed-into-suit", // [stated] Guards seen as endoskeletons get stuffed into suits
      "fnaf1-call5-garbled", // [shown] Night 5 call is distorted voices
      "fnaf1-its-me-hallucinations", // [shown] 'IT'S ME' hallucinations
      "fnaf1-paycheck-night6", // [stated] Overtime check (Night 6)
      "fnaf1-custom-night-pink-slip", // [stated] Custom Night termination notice
      "fnaf1-custom-night-names", // [stated] FNaF1 Custom Night names
      "fnaf1-call4-empty-heads", // [stated] Phone Guy: 'what was in all those empty heads'
      "fnaf2-call1-building-cannot-run-out", // [stated] The 1987 building cannot run out of power, and has no doors
      "fnaf2-call2-loved-old-characters", // [stated] Phone Guy 'loved those old characters'
      "fnaf3-tapes-hello-hello-greeting", // [implied] The tapes open with Phone Guy's 'hello, hello'
      "scott-fnaf1-steam-budget-cuts", // [stated] Scott: FNaF1's power limit is 'corporate budget cuts'
      // colour
      "fnaf1-call2-freddy-dark-foxy-cove", // [stated] Freddy active in dark; Foxy in Pirate Cove
      "fnaf1-call3-play-dead", // [stated] Most guards don't last this long
      "fnaf1-its-me-graffiti", // [shown] 'IT'S ME' graffiti in the pizzeria
      "fnaf1-freddy-rips-head-poster", // [shown] Freddy pulling off his own head poster
      "fnaf1-backstage-heads-stare", // [shown] Backstage heads stare at the camera
    ],
  },
  {
    id: "springtrap", part: "nightshift", title: "He dies in the suit",
    question: "How and when did the killer die?",
    answer: "He comes back to the old restaurant, takes the four machines apart one by one, and is cornered by five ghosts in the hidden room. He climbs into the yellow rabbit suit and it closes on him. Most likely this is after the last restaurant shut, in a room that had been walled up years before, and no game shows how he got in.",
    confidence: "medium",
    hero: { image: "fnaf3-safe-room-purple-guy.jpg", caption: "FNaF3, after Night 5: crying ghosts block the door, and the purple figure backs toward the empty yellow rabbit suit at the right [[fnaf3-n5-ghosts-safe-room]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "After the murders the killer returns to the old animatronics. A shadow Freddy leads each one into a back room, where the purple man takes it apart [[fnaf3-eon-shadow-freddy-follow-me]] [[fnaf3-eon-purple-guy-dismantles]]. Then the dead children come for him [[fnaf3-n5-ghosts-safe-room]]. Cornered, he climbs into the empty Spring Bonnie suit and laughs, and the springlocks snap shut [[fnaf3-n5-springlock-death]]. That is the failure the training tapes warned about [[fnaf3-tape3-springlock-bleeding]]. Hidden rooms like this were sealed with nothing removed first [[fnaf3-tape6-safe-rooms-sealed]]. The games do not date his death.",
      "He does not stay dead. Decades later, a horror attraction finds \"a real one\" behind a boarded-up wall [[fnaf3-call1-boarded-room-lead]] [[fnaf3-call2-found-a-real-one]]. It is labelled Springtrap [[fnaf3-springtrap-name]] and has what looks like a human body inside [[fnaf3-springtrap-corpse-screens]]. Scott's teasers read \"I am still here.\" and \"He always does.\" [[scottgames-fnaf3-teaser-still-here]] [[scottgames-fnaf3-teaser-he-always-does]].",
      "In FNaF3's **good-ending branch**, cake is given to each crying child [[fnaf3-good-ending-requirements]], the six children of Happiest Day vanish [[fnaf3-happiest-day]], and the heads go dark [[fnaf3-good-ending-heads]]. That appears to free the five and a Puppet-masked child. But FFPS still finds the Cassette Man's daughter bound, now inside Lefty [[ffps-completion-my-daughter]] [[ffps-lefty-alley-puppet-arm]], and still speaks of trapped \"small souls\" [[ffps-insanity-small-souls-prisons]]. Possible explanations: the good ending is not what happened; the Puppet-masked child is not the Puppet's own spirit; or the games simply conflict here. **This stays open.** The attraction then burns [[fnaf3-it-burns-newspaper]], and Springtrap is still visible in the photo [[fnaf3-it-burns-springtrap-hidden]].",
    ],
    counterEvidence: ["scott-fnaf2-trailer-captions", "fnaf2-call1-new-location", "fnaf3-tape6-safe-rooms-sealed"],
    tension: "The rival placing is before 1987, while the old restaurant stood \"left to rot\" [[fnaf2-call1-new-location]]. An empty, wet building suits that too, and Scott's FNaF2 trailer shows the older machines between the captions \"forgotten\", \"dismantled\" and \"deactivated\" [[scott-fnaf2-trailer-captions]]. It loses because it leaves no living culprit for November 1987 and needs the four machines rebuilt and haunted again afterwards. The model's own placing has a seam it cannot close: the hidden room was walled up with its contents inside [[fnaf3-tape6-safe-rooms-sealed]], yet the killer and the ghosts are in it, and no game shows who opened it.",
    changesIf: "A game that shows who opened the sealed room and when, or a year on the last restaurant's cheques.",
    seeAlso: ["killer", "murders", "fnaf1-restaurant", "fazbears-fright", "remnant", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf3-tape6-nothing-taken-out", // [stated] The safe room is sealed with its contents inside
      "fnaf3-eon-map-fnaf1-layout", // [shown] The end-of-night minigames are set in a building laid out like FNaF1's
      "ffps-insanity-trap-again", // [stated] Insanity tape: 'He set some kind of trap... Again.'
      "ffps-insanity-new-way-to-desecrate", // [stated] Insanity tape: 'he found a new way to desecrate, to humiliate, to destroy'
      // support
      "fnaf3-eon-puddles-empty-building", // [shown] The minigame building is empty of people and marked with dark puddles
      "ffps-insanity-lured-back", // [stated] Insanity tape: 'He lured them all back'
    ],
  },
];
