import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 4: The murders (Before 1987).
 * A child shut out in the rain, children lured into a back room, and the signs the mascots carried afterwards.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "child-outside", part: "murders", title: "The child outside",
    question: "Who is the child killed outside the restaurant, and what is the Puppet?",
    answer: "She is most likely the Cassette Man's daughter, shut out of a restaurant and killed there by William Afton. The Puppet was the machine set to guard her. It reached her too late, and she stays on in it. The model tells her death before the five as a convention: one sentence of her father's is all that orders them.",
    confidence: "medium",
    hero: { image: "ffps-security-puppet-child-outside.png", caption: "Pizzeria Simulator's Security Puppet game: the Puppet at the exit, its box weighed down, and the child it was assigned outside the window in the rain [[ffps-security-puppet-trapped]]." },
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model's ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["hw2-pq4-graveyard-order", "ucn-withered-chica-toysnhk"],
    tension: "Take Cake's own voice spells \"save him\" over a child the later game calls a daughter. The model lets Pizzeria Simulator govern, because it restages that exact scene while her father describes it, and keeps the mismatch on the page. Two records cut against telling her death first. One of the five says \"I was the first!\" [[ucn-withered-chica-toysnhk]], which the model reads as first of the five. And Help Wanted 2's graveyard is solved in an order that begins with Chica and ends with the Puppet [[hw2-pq4-graveyard-order]]; if that is an order of deaths, the two agree with each other and against the model. The game does not say what the order orders, and the model uses it for nothing. That is why \"before the five\" is a convention and not a finding.",
    changesIf: "A game that dates either death, or shows the Puppet active before hers.",
    seeAlso: ["murders", "golden", "killer", "partners", "salvage", "ffps"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf2-call2-foxy-puppet", // [stated] Foxy twitchy; the puppet is 'always thinking'
      "fnaf2-take-cake-to-the-children", // [shown] Take Cake to the Children minigame
      "ffps-completion-my-daughter", // [stated] Completion: 'My daughter... It's in your nature to protect the innocent'
      "ffps-completion-shut-out", // [stated] Completion: 'the day you were shut out and left to die'
      "ffps-security-puppet-dead-child", // [shown] Security Puppet: the Puppet finds the dead child and shuts down beside it
      "ffps-completion-not-content-to-disappear", // [stated] Completion: 'I should have known you wouldn't be content to disappear'
      // support
      "fnaf2-call1-music-box", // [stated] Music box at the prize counter
      "fnaf2-puppet-music-box-mechanic", // [shown] Puppet leaves the Prize Corner when the music box winds down
      "ffps-completion-security-puppet-terminal", // [shown] Completion: terminal shows an altered Security Puppet scene
      "ffps-security-puppet-assignment", // [stated] Security Puppet: guard the assigned child
      "ffps-security-puppet-tracks-by-body", // [shown] Security Puppet: tread marks on the ground near the body
      "ffps-security-puppet-no-tear-streaks", // [shown] Security Puppet: the mask has no tear streaks
    ],
  },
  {
    id: "murders", part: "murders", title: "The five",
    question: "What happened to the five missing children?",
    answer: "On a June 26th a man dressed as a mascot lured two children into a back room at Freddy Fazbear's Pizza; five were linked to it in the end, and no bodies were found. A man was caught the next morning and charged. The killer is William Afton, most likely in the yellow rabbit suit, at the older restaurant, some time before the 1987 one opened.",
    confidence: "medium",
    hero: { image: "fnaf1-missing-children-newspapers.jpg", caption: "The four rare clippings on FNaF1's East Hall Corner camera: everything the first game says about the missing children [[fnaf1-news-five-children]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "**The child outside.** In Take Cake to the Children, a child cries outside, a purple car pulls up, and the purple man kills them [[fnaf2-take-cake-to-the-children]]. Security Puppet shows the same scene from the machine's side: the Puppet guards one assigned child [[ffps-security-puppet-assignment]], a box is placed over its box [[ffps-security-puppet-trapped]], and it finds the child dead in the rain [[ffps-security-puppet-dead-child]]. The Cassette Man says his daughter was \"shut out and left to die\" [[ffps-completion-shut-out]]. This archive reads the Take Cake child as his daughter, living on in the Puppet. One detail pushes back: Take Cake's voice spells \"SAVE HIM\". That may refer to the Puppet's request rather than to the child, but it is recorded as a tension. When she died, relative to the others, is not given.",
      "**The five.** A man in a mascot costume lures children into a back room on the night of <<June 26th|printed|fnaf1-news-kids-vanish|The day and month are printed in FNaF1's newspaper; the year and the building are not.>> [[fnaf1-news-kids-vanish]], and five are linked to the case [[fnaf1-news-five-children]]. The records bound the date: by the 1987 location, the old models \"from the previous location\" already smell [[fnaf2-call2-older-models]], and by FNaF1 the tragedy was \"many years ago\" [[fnaf1-news-closing]]. So the murders most likely happened **before 1987, at an earlier location**. The costume is the yellow rabbit: Fruity Maze puts Spring Bonnie behind a crying girl [[ffps-fruity-maze-follow-me]]. Into the Pit tells a similar story, a yellow rabbit and a room of dead children [[into-the-pit-prologue-mci]], but it shows six bodies, not five, and its 1985 setting is only implied [[into-the-pit-past-year-1985]]. It is a parallel depiction, not a reconstruction.",
      "**What happened to them.** The Puppet gives four dead children gifts and then masks of the four characters [[fnaf2-give-gifts-give-life]]. Parents later see blood and mucus around the mascots' eyes and mouths [[fnaf1-news-sanitation]], and Help Wanted finds a child's hat, watch and shoe inside Freddy [[hw-pns-freddy-child-items]]. The games never *show* the bodies going into the suits, but together these strongly suggest it. FFPS's Lorekeeper gravestones name four: Gabriel, Fritz, Susie and Jeremy [[ffps-lorekeeper-gravestones]]. Linking those graves to the five is an inference, though a natural one.",
      "**1987.** The new location opens with Toy animatronics tied to a criminal database [[fnaf2-call1-criminal-database]], and the old haunted models are stored in back [[fnaf2-call2-older-models]]. Someone tampers with facial recognition [[fnaf2-call4-facial-recognition-tampered]], someone uses \"a yellow one\" [[fnaf2-call6-yellow-suit]], and the building locks down against \"previous employees\" [[fnaf2-call5-lockdown]]. Save Them, set at this location, shows five dead children [[fnaf2-save-them]]. The game does not say whether these are new victims or the earlier five. **This stays open.**",
    ],
    counterEvidence: ["fnaf2-save-them", "fnaf1-news-dressed-as-mascot", "fnaf2-call1-summer-job", "into-the-pit-prologue-mci"],
    tension: "SAVE THEM shows five small bodies among the 1987 cast [[fnaf2-save-them]]; the model draws nothing from the setting of a death minigame, and ((november-1987)) argues why those are most likely these five. The clippings say only \"a company mascot\" [[fnaf1-news-dressed-as-mascot]]: the rabbit is supplied by later games. The argument from June depends on preferring FNaF2's November cheques to a line in its own first call that says \"summer job\" [[fnaf2-call1-summer-job]]. And Into the Pit stages the scene with six bodies and a 1985 logo [[into-the-pit-prologue-mci]]; that game corroborates and never establishes (see ((edges))).",
    changesIf: "A year printed with the June 26th, a game that shows the luring of the five, or any record that names the man who was caught.",
    seeAlso: ["child-outside", "golden", "killer", "springlocks", "november-1987", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf1-news-charged-vs-convicted", // [stated] Clipping: the headline says 'convicted', the text says 'charged'
      "fnaf2-call1-forget-old-location", // [stated] 'Forget anything you may have heard about the old location'
      "fnaf3-tape5-no-customers-safe-room", // [stated] Safe room: never take a customer inside; Spring Bonnie moved
      "fnaf3-tape5-spring-bonnie-moved", // [stated] 'The Spring Bonnie animatronic has been noticeably moved'
      // counter
      "fnaf1-news-suspect-captured", // [stated] Clipping: the man was identified on video and captured the next morning
      // support
      "fnaf1-news-uphill-battle", // [stated] Clipping: an 'uphill battle ever since' to bring families back
      "fnaf2-foxy-go-go-go", // [shown] Foxy Go! Go! Go! minigame
      "ffps-fruity-maze-decay", // [shown] Fruity Maze decays into dead dogs, coffins and Spring Bonnie figures
      // colour
      "ffps-fruity-maze-car-horn", // [shown] Fruity Maze's last round ends on a car horn
    ],
  },
  {
    id: "golden", part: "murders", title: "What became of the five",
    question: "What became of the children, and is Golden Freddy one of them?",
    answer: "The mascots began to smell, and to show what looked like blood round their eyes and mouths. The model reads that as the bodies hidden inside them, which no game shows. The children stay on in the machines, and wherever they are counted there are four and one more: the model reads the one as the fifth child, behind the yellow bear called Golden Freddy. Four names are on the gravestones. The fifth is never given.",
    confidence: "medium",
    hero: { image: "fnaf2-give-gifts-give-life.png", caption: "FNaF2's \"Give Gifts, Give Life\": the Puppet among four children, each given a mascot's head [[fnaf2-give-gifts-give-life]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "**Golden Freddy is best read as the fifth missing child.** Give Gifts, Give Life shows four dead children receiving the masks of Freddy, Bonnie, Chica and Foxy, and a fifth body appears for one frame before Golden Freddy's jumpscare [[fnaf2-give-gifts-give-life]]. In FNaF3's Happiest Day, the children at the table wear Freddy, Bonnie, Chica, Foxy **and golden Freddy** masks, and all of them vanish together [[fnaf3-happiest-day]]. The bad ending shows a faint fifth head [[fnaf3-bad-ending-heads]]; the good ending has none [[fnaf3-good-ending-heads]]. FNaF1's newspaper links **five** children to the case [[fnaf1-news-five-children]].",
      "So Golden Freddy is bound to a golden bear like the other four were to theirs. His appearances — the child's laugh [[fnaf1-golden-freddy-poster-office]], \"IT'S ME\" [[fnaf1-its-me-hallucinations]], the custom-night roster [[fnaf2-custom-night-names]] — are one of the five making himself seen. UCN's Death Coin trick, where removing Golden Freddy summons Fredbear [[ucn-death-coin-fredbear]], ties the two yellow bears together but does not identify who is inside either. Some overlap between Golden Freddy and Fredbear, and so with the crying child, cannot be excluded. It is simply not needed to explain the evidence. In October 2014 Scott said only \"I can't explain Golden Freddy\" [[scott-2014-cant-explain-golden-freddy]] and disclosed no explanation, so this reading is built from later games.",
      "The crying child is a different figure. FNaF World's clock ending gives his trophy while small yellow eyes say \"We are still your friends. Do you believe that?\" [[fw-clock-ending-still-your-friends]], the words shown as he dies [[fnaf4-still-your-friends]], followed by \"Rest.\" [[fw-clock-ending-pieces-in-place]]. This archive identifies him with UCN's \"one you should not have killed\" (see the UCN section). Scott said the face UCN shows is an edited photo of his son with no lore meaning [[scott-2019-ucn-child-face-jason]], so the identification rests on the lines, not the image.",
    ],
    counterEvidence: ["ucn-death-coin-fredbear", "scott-2014-cant-explain-golden-freddy", "fnaf2-golden-freddy-night6-only", "fnaf2-call2-older-models"],
    tension: "The reading that the bodies went into the mascots has a record against it: in 1987 the older models have been opened up, \"retrofitted\" and stripped for parts [[fnaf2-call2-older-models]], and still the bodies \"were never found\". So the model says only that the mascots carried the signs. Against the fifth child: Scott's one early word on the yellow bear is that he could not explain it [[scott-2014-cant-explain-golden-freddy]]; the bear wakes in 1987 only on the night a yellow suit is reported used [[fnaf2-golden-freddy-night6-only]], so its tie to its suit may be later than the other four's; and Ultimate Custom Night lets a coin turn it into the bear that bit the crying child [[ucn-death-coin-fredbear]]. That last is the best case for the rival reading, that the yellow bear's child is FNaF4's boy. It loses on the count: he was never one of the five linked to the incident, and the yellow bear holds the fifth place every time.",
    changesIf: "A game that places a different child behind the yellow bear, shows a body going into a suit, or prints the fifth name.",
    seeAlso: ["murders", "child-outside", "bite", "fazbears-fright", "ffps", "salvage"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "fnaf1-news-sanitation", // [stated] Newspaper: blood and mucus on mascots
      "fnaf2-call2-the-smell", // [stated] The older models: 'And the smell...ugh.'
      "ffps-lorekeeper-gravestones", // [shown] Lorekeeper screen: gravestones named Gabriel, Fritz, Susie, Jeremy
      "ffps-lorekeeper-hill-stone", // [shown] Lorekeeper screen: a sixth stone apart on the hill, and 'THE END'
      "hw2-memory-dolls", // [shown] Six hidden 'memory' dolls, each held out by a costumed arm
      "hw2-pq4-graveyard-order", // [shown] PQ IV graveyard: six graves with the memory dolls
      // support
      "fnaf1-screaming-children-drawings", // [shown] Screaming-children drawings
      "fnaf1-call1-eyeballs-teeth", // [stated] Inside a suit, only the eyeballs and teeth would show
      "fnaf1-game-over-eyes-teeth", // [shown] Game over: human eyes and teeth in a Freddy suit
      "fnaf1-golden-freddy-office-figure", // [shown] The yellow bear in the FNaF1 office is a slumped, eyeless figure
      "fnaf2-golden-freddy-office", // [shown] Golden Freddy in the office/hallway
      "hw-mobile-princess-quest-graveyard", // [shown] Princess Quest graveyard
      "hw2-faz-force-six-figures", // [shown] The six Faz Force figures
      "hw2-remember-jeremy-achievement", // [stated] Achievement 'Remember Jeremy?' for retrieving a memory
      "hw2-pq4-bonnie-mask", // [stated] PQ IV secret chest: a Bonnie mask, 'This looks familiar...'
      // colour
      "fnaf1-post-mortem-golden-freddy", // [shown] Rare Golden Freddy after game over / eyeless Bonnie
    ],
  },
];
