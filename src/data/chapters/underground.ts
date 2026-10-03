import type { TheorySection } from "../schema";

/**
 * The Unified Model, part 9: Under the Pizzaplex (The newest building).
 * What stands in the ruin beneath it, what waits behind poured concrete, and what the whole story keeps coming back to.
 *
 * One file per part, so that parts can be written in parallel. Chapters appear on the site in this order.
 * theory.ts joins the part files; the shapes and the RichText tokens are described in schema.ts.
 */
export const chapters: TheorySection[] = [
  {
    id: "burntrap", part: "underground", title: "The burnt rabbit",
    question: "What is the burnt rabbit under the Pizzaplex?",
    answer: "The game does not say. The model reads the buried pizzeria as Pizzeria Simulator's, the burnt rabbit as what that fire left of the killer's rabbit, and what moves it as the presence in the company's network. It holds that the rabbit is not Murray's copying machine. These are among the least firm readings in the model.",
    confidence: "low",
    hero: { image: "sb-burntrap-and-tangle.jpg", caption: "Security Breach, the ending under the Pizzaplex: the burnt rabbit and the mass of parts in the fire [[security-breach-ending-burn-it-all-down]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "The Pizzaplex was built over a sinkhole [[security-breach-msg-sinkhole]], and something below draws power [[security-breach-msg-power-drain]]. An old elevator shaft [[security-breach-msg-old-elevator]] leads to a buried pizzeria signed \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]]. Inside is a burnt rabbit animatronic with a human-looking jawbone and purple eyes [[security-breach-burntrap-appearance]]. It rises from a recharge station and takes remote control of Freddy (\"I AM NOT ME\") [[security-breach-freddy-i-am-not-me]].",
      "Two identities fit, and the games settle neither. **Afton's burnt body**: the resemblance to Springtrap, the human jaw, and control of other machines like Glitchtrap's virus. **The Mimic in a costume**: the Mimic wears mascot suits elsewhere [[ruin-ending-scooper]], was built to copy [[secret-of-the-mimic-dispatch-briefing-origin]], and is what RUIN finds in the sinkhole [[ruin-mimic-reveal]]. Neither name appears in Security Breach, and even \"Burntrap\" comes only from the game files [[security-breach-burntrap-name-not-in-game]]. In one ending the Tangle drags it away [[security-breach-ending-burn-it-all-down]].",
    ],
    counterEvidence: ["secret-of-the-mimic-dispatch-endoskeleton-any-costume", "ruin-ending-scooper", "security-breach-burntrap-name-not-in-game", "security-breach-ending-burn-it-all-down"],
    tension: "No word in the game says whose body this is [[security-breach-burntrap-name-not-in-game]]. The rival reading has real support: Murray's endoskeleton does wear costumes and take \"the persona of the character it occupies\" [[secret-of-the-mimic-dispatch-endoskeleton-any-costume]], it is seen in a mascot costume under this very building [[ruin-ending-scooper]], and the company wanted the design, so a second such machine in a rabbit shell cannot be excluded. The model's reading also sits badly with one ending, in which the mass of parts drags the rabbit away [[security-breach-ending-burn-it-all-down]], against Help Wanted 2's arm in the station. The model keeps its reading on the sealing alone, and rates it low.",
    changesIf: "A game that says whose remains they are, or shows the burnt rabbit and the copying endoskeleton to be one machine.",
    seeAlso: ["ffps", "salvage", "digital", "mimic", "pizzaplex", "open"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "security-breach-freddy-been-here-before", // [stated] Freddy in the underground: 'She brought me here'
      "security-breach-tangle-composition", // [shown] The mass of animatronic parts under the Pizzaplex
      "scott-2024-interview-sb-story-not-as-intended", // [stated] 2024: Security Breach's story is 'very different' from the one Scott had in mind
      "scott-2024-interview-burntrap-never-meant-to-move", // [stated] 2024: 'Originally, Burntrap was never supposed to move'
      // support
      "security-breach-gregory-what-is-that-thing", // [stated] Gregory on Burntrap: 'He? What is that thing?'
      "security-breach-gregory-sinkhole-line", // [stated] Gregory: 'So this sinkhole is why the raceway is closed?'
      "security-breach-freddy-take-control", // [stated] Underground, Freddy: 'He is trying to take control of me'
      "security-breach-freddy-raceway-closed-abruptly", // [stated] Freddy: 'The raceway was closed very abruptly prior to the new construction'
      "ruin-something-tunneled", // [stated] 'Something tunneled' and collapsed the raceway
      "ruin-burners-inside-of-an-oven", // [stated] Under the Pizzaplex: 'burners everywhere... like the inside of an oven'
      // colour
      "security-breach-shattered-glamrocks-underground", // [shown] Shattered Chica, Roxy and Monty appear in the underground
    ],
  },
  {
    id: "mimic", part: "underground", title: "Behind the concrete",
    question: "What is the Mimic in RUIN, and how did it get there?",
    answer: "It is a copying endoskeleton from Edwin Murray's workshop, most likely the second, violent one, sealed under the Pizzaplex behind poured concrete and guarded by a security program that carries the name on Murray's own terminal, M.X.E.S. It calls a girl down in her friend's voice and has her switch the guard off. How it came to be under that building, no game shows.",
    confidence: "high",
    hero: { image: "ruin-mimic-elevator.jpg", caption: "The end of RUIN: the endoskeleton reaches through the gate of the elevator [[ruin-ending-standard]]." },
    // PLACEHOLDER BODY: the previous model's text, kept so the site builds. Replace the whole `body` with the
    // chapter written to its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being rewritten", text: "The text below is from the previous version of this model. It has not yet been rewritten to the answer above, and parts of it no longer hold." },
      "Secret of the Mimic adds a second horror with nothing supernatural in it. Edwin Murray built a learning endoskeleton to babysit his son [[secret-of-the-mimic-log-training-m1]]. It copied everything around it, including violence [[secret-of-the-mimic-dispatch-briefing-origin]]: \"It mimics rage\" [[secret-of-the-mimic-mail-received-5-min-ago]]. When Edwin lies paralysed, it answers him in his own dismissive phrases [[secret-of-the-mimic-log-turn-around]]. Nothing haunts it; it learned to be what it saw.",
      "The link to RUIN is by design and name, not by stated history. The thing that imitates Gregory by reusing his own lines [[ruin-mimic-reuses-gregory-lines]] is an endoskeleton [[ruin-mimic-reveal]] of the Mimic's design [[secret-of-the-mimic-mimic-ruin-appearance-link]]. RUIN's M.X.E.S. program \"kept it hidden\" [[ruin-gregory-mxes-explanation]]. Murray's basement machine had an M.X.E.S. subterminal of similar design [[secret-of-the-mimic-mxes-machine]]. Whether it is the *same* system or a later one built on it, the games don't say. The Mimic survives the fire in one ending [[secret-of-the-mimic-ending-unfinished-business]].",
    ],
    counterEvidence: ["hw2-pq4-consequences-achievement", "secret-of-the-mimic-log-make-a-copy", "hw2-fazerblast-fire-springtrap", "secret-of-the-mimic-dispatch-endoskeleton-any-costume"],
    tension: "The identification has one gap and the join has three records against it. The gap: Fazbear wanted Murray's schematic, so more than one such machine could exist, though Edwin says \"Every copy has failed\" [[secret-of-the-mimic-log-make-a-copy]]; and the company's own description is of a machine that could be \"inside any costume or character that you see\" [[secret-of-the-mimic-dispatch-endoskeleton-any-costume]], which is the best case for one villain behind every rabbit. Against the model's reading of Help Wanted 2: the keepsakes the long arm holds out are the six dead children's, one of them won from a cut-out of Springtrap in a fire [[hw2-fazerblast-fire-springtrap]], which are the killer's mementos and not Murray's; and the secret ending destroys the rabbit and reports \"System threats found. Repair complete.\" [[hw2-pq4-consequences-achievement]], as though the rabbit were the whole threat. The model holds that the copying machine is a separate thing because it is a body sealed for \"a really long time\", and rates its account of the join low.",
    changesIf: "A game that shows the endoskeleton's history between 1979 and the Pizzaplex, or connects it to the VR studio's boards.",
    seeAlso: ["two-machines", "digital", "burntrap", "pizzaplex", "vanny", "patterns"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // core
      "hw2-orientation-program-intro", // [stated] Frame: the Fazbear Orientation Program
      "hw2-remove-mask-real-world", // [shown] Removing the mask reveals a ruined real world
      "hw2-faz-force-ending", // [shown] Faz Force ending: a rabbit arm from a recharge station, S.T.A.F.F. bots, a mask handed to a girl
      "hw2-mimic-teaser-1979-white-tiger", // [shown] Keypad 1979: the costumed arm hands over a White Tiger doll
      "hw2-mimic-teaser-mxes-ending", // [shown] Puzzle ending: the costume shop and the M.X.E.S. van
      "hw2-roxy-repair-mask", // [shown] Repair Roxy: the player fits a shattered Roxanne with a face mask
      "hw2-glam-freddy-fazbear-technician", // [stated] Glamrock Freddy: 'you are a Fazbear technician - are you not?'
      "hw2-hub-helpi-pushes-gift", // [stated] Hub screen bear: 'Why are you ignoring the gift?'
      "security-breach-freddy-where-i-was-born", // [stated] Freddy in Parts and Service: 'This must be where I was born'
      "security-breach-vanessa-new-endo", // [stated] Vanessa: Parts and Service can 'slap your casing on a new Endo'
      "ruin-fake-gregory-turn-off-security", // [stated] 'Turn it all off!' - the Mimic has Cassie disable security nodes
      "ruin-mask-bot-helpi-vanni", // [stated] Mask Bot gives Cassie a Security Mask; Helpi and V.A.N.N.I.
      "ruin-the-entity", // [shown] A glitching rabbit figure stalks the mask world
      "ruin-mxes-hub", // [shown] The M.X.E.S. hub at the bottom of the underground
      "ruin-real-gregory-not-at-pizzaplex", // [stated] Real Gregory: 'I'm not at the Pizzaplex'
      "ruin-security-mask-left-by-faz-technician", // [stated] The mask's description: 'left behind by some Faz-Technician'
      "ruin-concrete-poured-over-door", // [stated] Cassie: 'someone poured concrete over the door'
      "ruin-mimic-lair-mcm-mascot-suits", // [shown] The endoskeleton's chamber is a wardrobe of mascot costumes
      "secret-of-the-mimic-log-frequency-4625", // [stated] Edwin hears Fiona's voice on frequency 4625
      "secret-of-the-mimic-mail-hurt-cradle", // [stated] Blueprints for the 'Cradle' to keep David safe
      "secret-of-the-mimic-mxes-acronym-on-screen", // [stated] Terminal in the Inventor's House: 'Mechanical X-form Experimental Storage #1'
      // support
      "hw2-faz-wrench-after-16-prizes", // [shown] Faz-Wrench unlocks the hidden room
      "hw2-faz-force-achievement", // [stated] 'Batteries Not Included': 'Take this mask.'
      "hw2-mystic-hippo-key-darkness", // [stated] Mystic Hippo: 'Use the key to confront the darkness.'
      "hw2-carnie-you-got-kids", // [stated] Carnie: 'you look like you got kids'
      "hw2-roxy-he-is-still-out-there", // [stated] Shattered Roxanne: 'He did this to me... he's still out there'
      "hw2-real-hub-pit-pizzeria", // [implied] With the mask off, the hub is a derelict pizzeria with a pit in the floor
      "hw2-mystic-hippo-gift-distant-past", // [stated] Mystic Hippo: 'A gift awaits you in the distant past.'
      "ruin-cassie-seeks-gregory", // [stated] Cassie enters to rescue her friend Gregory
      "ruin-fake-gregory-sinkhole", // [stated] 'Gregory' says he is trapped in the sinkhole under the raceway
      "ruin-roxy-final-node", // [stated] Cassie must deactivate Roxy as the final node
      "ruin-ending-scooper", // [shown] Scooper ending: the costumed Mimic is scooped
      "ruin-candy-cadet-story", // [stated] Candy Cadet: mother, son and a monster in the basement
      "ruin-cassie-dad-faz-wrench", // [stated] Cassie: the Faz-Wrench is 'just like my dad's'
      "ruin-item-gregory-seen-this-mask-before", // [stated] Cassie on a comic page of a rabbit mask: 'Gregory must have seen this mask before.'
      "ruin-fake-gregory-signal-jammer", // [stated] The voice: 'I updated Helpi with a signal jammer. That rabbit thing won't bother you anymore.'
      "ruin-fake-gregory-one-node-left-sealed", // [stated] The voice: 'one node left keeping the underground- sealed'
      "scott-2024-interview-mxes-name-thought-through", // [stated] 2024: M.X.E.S. is 'a character' whose name Scott thought through in his own design of RUIN
      "secret-of-the-mimic-experimental-storage-2-mimic-blueprints", // [stated] Executive terminal: 'Experimental Storage #2' holds the M.I.M.I.C. blueprints
      "scott-2024-interview-mimic-not-the-last", // [stated] 2024: the Mimic is 'a really terrific antagonist' and not gone
      // colour
      "hw2-mystic-hippo-hello", // [stated] Mystic Hippo: 'Hello, can you hear me?'
      "hw2-mystic-hippo-she-needs-you", // [stated] Mystic Hippo: 'It needs you.' / 'She needs you.'
      "hw2-mystic-hippo-your-hands", // [stated] Mystic Hippo: 'Do you ever look at your hands?'
      "hw2-endo-warehouse", // [stated] Endo Warehouse: teaching personalities to endos
      "hw2-what-makes-you-so-special", // [stated] 'What makes you so special?' and 'I recognize you.'
      "ruin-roxy-birthday-11th", // [stated] Roxy remembers Cassie's birthday on the 11th
      "ruin-item-old-headset-game", // [stated] Cassie calls a Nightmare plush 'from that old headset game'
    ],
  },
  {
    id: "patterns", part: "underground", title: "What keeps coming back",
    question: "What is this story about?",
    answer: "The same few things, over and over: something taken apart and put back together, a man who always comes back, a costume that is also a machine, a room that is not on the map, a voice you trust that is not who it seems. They recur too exactly to be accident, and they are why so many games read as one story.",
    confidence: "medium",
    // PLACEHOLDER BODY: a new chapter, not yet written. Replace the whole `body` with the chapter written to
    // its outline (telling.md, section A).
    body: [
      { kind: "callout", tone: "note", title: "Being written", text: "This chapter is new in the rebuilt model, and its argument is still being written. The answer above is the model’s ruling; the records it rests on are listed under further evidence." },
    ],
    counterEvidence: ["ucn-mr-hippo-just-a-story", "hw-mobile-princess-quest-ending"],
    tension: "The games carry their own warning about this kind of chapter: \"Sometimes, a story's just a story\" [[ucn-mr-hippo-just-a-story]]. A motif is not an event, and nothing here is used to establish one: each echo is cited where it is spoken, and no identification in the model rests on a phrase coming back. One of the echoes most often quoted, the rabbit in the code saying \"I always come back\", exists only as a fan decoding of glyphs [[hw-mobile-princess-quest-ending]], and is left out of the table for that reason.",
    changesIf: "Nothing would change the list of echoes, which are on record. A statement from Scott on what the series is about would replace this archive's reading of them.",
    seeAlso: ["thesis", "killer", "two-machines", "ffps", "cover-story", "mimic"],
    // Coverage plan: each record below has this chapter as its home. Cite it inline and delete it here, or leave it filed.
    further: [
      // colour
      "sd-springtrap-pulled-apart-put-back-together", // [stated] AR Springtrap: 'pulled apart...and put back together again'
    ],
  },
];
