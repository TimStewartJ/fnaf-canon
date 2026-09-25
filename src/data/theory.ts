import type { TheorySection } from "./schema";

/**
 * The Unified Model: this archive's single account. Each paragraph cites evidence with [[id]].
 * Written from the evidence up. Contradicting evidence goes in counterEvidence.
 */
export const theory: TheorySection[] = [
  {
    id: "canon-rules", title: "Ground rules from Scott himself", confidence: "high",
    body: [
      "Before any reconstruction, it is worth settling what counts. In 2015 Scott said the first novel and the games are **separate continuities**, and that the book is not meant to fill in the games' gaps [[scott-2015-books-separate-continuity]] [[scott-2015-book-not-a-guide]]. In 2020 he said future games would look forward and the novels — meaning Fazbear Frights — would fill in some blanks about the past [[scott-2020-novels-fill-blanks]] [[scott-2020-novels-means-fazbear-frights]]. In 2024 he answered the book-canon debate only with an ambiguous \"yes\" [[scott-2024-books-canonicity-yes]]. This archive takes the strict line the brief demands: **games and Scott's own words only**. Every conclusion here therefore stands without the books.",
      "Scott also gave rulings on specific releases. FNaF4's 1.1 update is canon, but the Halloween Edition is not [[scott-2015-fnaf4-halloween-canon-split]]. Sister Location's Custom Night gameplay is not canon, but its **cutscenes are** [[scott-2016-sl-custom-night-not-canon]] [[scott-2016-cutscenes-are-canon]]; that is why Michael's walk home and the Golden Freddy monologue carry full weight here. Help Wanted is canon, and the only real-world thing it brings into the story is an in-universe developer who made games \"based on actual events\"; Scott himself is not part of the lore [[scott-2019-help-wanted-is-canon]] [[scott-2019-not-canon-list]].",
      "Two more rules shape the method. \"If I make a game that contradicts one of your theories\", the theory has to change [[scott-2017-games-over-theories]]. And he admits to mistakes and exactly one real retcon, without saying where [[scott-2017-lore-not-infallible]] [[scott-2017-one-retcon]]. So the model tolerates a small number of true contradictions (listed as counter-evidence) rather than inventing machinery to erase them.",
    ],
  },
  {
    id: "thesis", title: "Thesis: one man, one machine-made afterlife, and one cure", confidence: "high",
    body: [
      "Read only the games and Scott's own words and FNaF is one story. **A robotics designer discovers that a dying person's will can be kept inside a machine, and uses it first to kill and then to cheat death.** Everything else — the haunted animatronics, the Afton family, the Cassette Man's trap, Glitchtrap, the Pizzaplex — follows from that discovery or from people trying to undo it.",
      "Three findings carry the model. (1) The killer is William Afton. The games name him through the credits and the roster [[ffps-credits-william-afton]] [[ucn-roster-afton]], Scott names him directly [[scott-ucn-character-guide-afton]], and he keeps saying the same thing: \"I always come back\" [[ffps-scraptrap-always-come-back]] [[hw-mobile-princess-quest-ending]]. (2) What keeps the dead in the machines is a substance or signal the games call **Remnant**, on an Afton Robotics blueprint with an injector and a reservoir [[ffps-scup-blueprint]]. (3) The same blueprint names the cure: \"overheating might neutralize the effects permanently\". Every ending that really ends something is a fire [[fnaf3-it-burns-newspaper]] [[ffps-completion-fire]] [[security-breach-ending-burn-it-all-down]] [[secret-of-the-mimic-ending-unfinished-business]].",
      "This page builds the account era by era. Every sentence carries the records it rests on, and each section closes with the evidence that pushes back.",
    ],
  },
  {
    id: "partners", title: "Two partners and a costume workshop", confidence: "medium",
    body: [
      "The oldest layer is Secret of the Mimic. Edwin Murray's company builds suits and springlocks [[secret-of-the-mimic-log-build-to-spec]]. A shipment of springlocks is readied \"for the diner\", with a warning to someone named **Hen** about their \"odd behaviors\" [[secret-of-the-mimic-mail-springlocks-hen]]. Letters signed **W.A.** claim Murray's land and catalogue and offer Murray's staff management jobs at \"new franchise locations\" [[secret-of-the-mimic-mail-confidential-wa]] [[secret-of-the-mimic-mail-staff-contacts-wa]]. Into the Pit gives a photograph of \"two men inside of a strange office\" [[into-the-pit-strange-photo]].",
      "Later games describe exactly such a pair. The Cassette Man built the machines the children are trapped in — \"prisons of my making\" [[ffps-insanity-small-souls-prisons]] — and \"unwillingly\" helped create a monster [[ffps-insanity-monster-helped-create]], whom he sends to Hell as \"old friend\" [[ffps-completion-old-friend-hell]]. The other partner is a designer of performing machines addressed as **Mr. Afton** [[sl-intro-mr-afton-board]]. So this archive reads **W.A. as William Afton and Hen as the Cassette Man**: an engineer who builds and a businessman-designer who owns. The games never print \"Henry\", only \"Hen\" and a reported tape label \"HRY223\" [[ffps-hry223-label]], so the site calls him by the credit he actually has [[ffps-credits-cassette-man]].",
      "The springlock suits \"double as both animatronic and suit\" [[fnaf3-tape2-dual-suits]]. That fact makes a killer possible: a mascot that is sometimes a machine and sometimes a man.",
    ],
    counterEvidence: ["secret-of-the-mimic-teaser-1979", "into-the-pit-strange-photo"],
  },
  {
    id: "afton-house", title: "The Afton household (1983)", confidence: "medium",
    body: [
      "FNaF4's minigames are the only look inside the family, and they come with one printed date: the TV reads \"Fredbear & Friends! 1983\" [[fnaf4-fredbear-and-friends-1983]]. A small boy is locked in his room by an unnamed \"he\" [[fnaf4-plush-locked-in-room]] and dumped at the Fredbear restaurant he hates [[fnaf4-left-behind-at-diner]]. There he sees a purple man fitting a Spring Bonnie head onto someone [[fnaf4-purple-guy-suits-up-employee]]. His older brother terrorises him in a Foxy mask [[fnaf4-brother-foxy-mask-tv]].",
      "The case that this is the Afton home rests on the car. The killer who murders a child outside the pizzeria arrives in a **purple car** [[fnaf2-take-cake-to-the-children]]. Midnight Motorist has a driver in a dark purple car [[ffps-midnight-motorist-secret-drive]] who comes home to a grey figure asking him to leave \"him\" alone tonight [[ffps-midnight-motorist-grey-person]]. He finds a boy's door shut — \"This is my house. He can't ignore me like that\" [[ffps-midnight-motorist-closed-door]] — and learns the boy has fled to \"that place\" [[ffps-midnight-motorist-ran-off]]. A child who hides from his father behind a door and runs to the restaurant is FNaF4's crying child. **The killer is the crying child's father.**",
      "The other two children follow from Sister Location. A girl begs \"Daddy\" for Baby, whom he made [[sl-girl-daddy-let-me-play]], and Baby's designer is Mr. Afton [[sl-intro-mr-afton-board]]. That girl is later named **Elizabeth** [[ffps-completion-connection-terminated-elizabeth]]. A young man named **Michael** addresses \"Father\" and then hunts Springtrap [[sl-golden-freddy-cutscene-father]] [[sl-golden-freddy-cutscene-springtrap]]. The model has three children: Michael (eldest), Elizabeth, and the crying child (youngest). The older brother of FNaF4 is Michael because he is the only Afton son the games name, and because his arc runs from cruelty to apology [[fnaf4-night6-brother-apology]] to self-sacrifice [[ffps-completion-brave-volunteer]].",
    ],
    counterEvidence: ["fnaf4-kid-who-hides-under-table", "ffps-midnight-motorist-later-that-night"],
  },
  {
    id: "bite", title: "The Bite and the promise to 'put you back together'", confidence: "medium",
    body: [
      "On the child's birthday [[fnaf4-its-your-birthday]] the brother and his friends push his head into Fredbear's mouth [[fnaf4-give-fredbear-a-kiss]] and the jaw closes [[fnaf4-the-bite]]. In the dark afterwards the brother apologises [[fnaf4-night6-brother-apology]], the plush says \"You're broken\" [[fnaf4-youre-broken]] and then \"I will put you back together\" [[fnaf4-i-will-put-you-back-together]], and a flatline plays [[fnaf4-flatline]]. The bedside items — flowers, pills, an IV drip [[fnaf4-bedside-items]] — place FNaF4's nights in a hospital bed. The Nightmares are a dying child's fear of the restaurant.",
      "\"Put you back together\" is the key phrase of the whole Afton story. Michael later reports to his father: \"I put her back together, just like you asked me to\" [[sl-golden-freddy-cutscene-father]]. UCN's Nightmare Fredbear threatens to put the player back together and take them apart again [[ucn-nightmare-fredbear-lines]]. The model reads the plush as the father's voice and the father's project. After his son died, William Afton tried to rebuild him, the same way he later had Michael rebuild Elizabeth. The plush watches and tracks the child without ever visibly moving [[fnaf4-plush-follows-child]], and FNaF World's Fredbear warns of a watching \"puppet-master\" who pulls the strings [[fw-8bit-fredbear-puppet-master]].",
      "Scott's one statement on the locked box ties all of this together: its contents are \"the pieces put together\" [[scott-2015-fnaf4-box-pieces-put-together]]. FNaF World's clock ending tells the crying child \"The pieces are in place for you\" [[fw-clock-ending-pieces-in-place]], and Scott later said Sister Location was used to clear up a misconception from FNaF4 [[scott-2017-sl-cleared-fnaf4-misconception]]. In 2024 he admitted he never pursued a specific object for the box [[scott-2024-box-interview]]. The model reads the box as the theme — a broken child and a father's promise to reassemble him — rather than as an object.",
      "This is also not the Bite of '87. FNaF4's bite comes with a 1983 anchor. Phone Guy's \"Bite of '87\" [[fnaf1-call1-bite-of-87]] belongs four years later, at a different restaurant, and the company's lawsuits show bites were a recurring liability [[ffps-lawsuit-head-bitten]].",
    ],
    counterEvidence: ["fnaf1-call1-bite-of-87", "fnaf2-no-bite-mention"],
  },
  {
    id: "golden", title: "Golden Freddy is the crying child", confidence: "medium",
    body: [
      "Everything about Golden Freddy points back to Fredbear and to a single child. He appears with a child's laugh [[fnaf1-golden-freddy-poster-office]] and the words \"IT'S ME\" [[fnaf1-its-me-hallucinations]]. In UCN, using the Death Coin on Golden Freddy makes Fredbear appear [[ucn-death-coin-fredbear]]. In FNaF3's Stage01, Fredbear himself gives cake to a crying child [[fnaf3-stage01-cake-crying-child]]. FNaF World's clock ending shows small yellow eyes in the dark saying \"We are still your friends. Do you believe that?\" [[fw-clock-ending-still-your-friends]], the same words FNaF4 shows as the crying child dies [[fnaf4-still-your-friends]]; its trophy is the Crying Child and its last word is \"Rest.\" [[fw-clock-ending-pieces-in-place]].",
      "So Golden Freddy is not one of the five missing children. It is the crying child, the first of the dead, bound to the yellow bear that killed him. That also explains why Golden Freddy stays after the missing children are freed in FNaF3 [[fnaf3-good-ending-heads]], and why he closes UCN [[ucn-golden-freddy-final-cutscene]].",
      "The same power fits UCN's \"one you should not have killed\". It \"remade\" Nightmare Freddy [[ucn-nightmare-freddy-toysnhk]], and the Nightmares belong to FNaF4, the crying child's story [[fnaf4-nightmare-animatronics]]. Withered Chica, \"the first\", has seen it [[ucn-withered-chica-toysnhk]]. Scott said the face UCN shows is an edited photo of his son [[scott-ucn-jason-face]], so the model rests on the lines, not the image.",
    ],
    counterEvidence: ["fnaf2-give-gifts-give-life", "scott-ucn-jason-face"],
  },
  {
    id: "murders", title: "The murders: a daughter, then five children", confidence: "medium",
    body: [
      "**The first murder is the partner's daughter.** In Take Cake to the Children a child cries outside, a purple car pulls up, and the purple man kills her [[fnaf2-take-cake-to-the-children]]. Security Puppet shows the same event from the machine's side: the Puppet exists to guard one assigned child [[ffps-security-puppet-assignment]], a box is placed on top of its box [[ffps-security-puppet-trapped]], and it finds the child dead in the rain [[ffps-security-puppet-dead-child]]. The Cassette Man confirms that his daughter was \"shut out and left to die\" and that it is \"in your nature to protect the innocent\" [[ffps-completion-shut-out]] [[ffps-completion-my-daughter]]. The Puppet is the daughter.",
      "**Then come the missing children.** A man in a mascot costume lures children into a back room on the night of June 26th [[fnaf1-news-kids-vanish]]; five are linked to the case and the bodies are never found [[fnaf1-news-five-children]]. The costume is the yellow rabbit: Fruity Maze puts Spring Bonnie behind a crying girl [[ffps-fruity-maze-follow-me]], and Into the Pit replays the crime with a yellow rabbit leading a boy to a room of dead children [[into-the-pit-prologue-mci]]. Into the Pit implies the year is 1985 [[into-the-pit-past-year-1985]], and that matches FNaF1 calling the tragedy \"many years ago\" [[fnaf1-news-closing]].",
      "**The Puppet gives them life.** In Give Gifts, Give Life the Puppet gives four grey children gifts and then masks of Freddy, Bonnie, Chica and Foxy, and Golden Freddy appears [[fnaf2-give-gifts-give-life]]. Parents later see blood and mucus around the mascots' eyes and mouths [[fnaf1-news-sanitation]], and Help Wanted finds a child's hat, watch and shoe inside Freddy [[hw-pns-freddy-child-items]]. The bodies went into the suits, and the Puppet put the children's wills in with them. FFPS gives four of their names on gravestones: Gabriel, Fritz, Susie, Jeremy [[ffps-lorekeeper-gravestones]].",
      "**1987.** The new location opens with Toy animatronics tied to a criminal database [[fnaf2-call1-criminal-database]] and the old haunted models stored in back [[fnaf2-call2-older-models]]. Within days someone tampers with facial recognition [[fnaf2-call4-facial-recognition-tampered]] and uses \"a yellow one\" [[fnaf2-call6-yellow-suit]], and the building locks down against \"previous employees\" [[fnaf2-call5-lockdown]]. The killer is back, in the same suit, at a location already holding his earlier victims. Save Them shows him there among the dead [[fnaf2-save-them]]. The location closes after only a few weeks [[fnaf2-overtime-robots-scrapped]].",
    ],
    counterEvidence: ["fnaf1-call1-twenty-years", "into-the-pit-past-year-1985"],
  },
  {
    id: "funtimes", title: "Afton Robotics: machines built to take children", confidence: "high",
    body: [
      "William Afton's next machines are not haunted by accident; they are designed to capture. Mr. Afton's board presentation for Circus Baby includes ice cream [[sl-intro-mr-afton-board]], and the Baby minigame shows ice cream used to draw a lone child close before a claw extends [[sl-baby-minigame-girl-grabbed]]. Blueprints of every Funtime flash on screen [[sl-blueprint-screens]]. Scott's hidden teaser news report says Circus Baby's Pizza World's grand opening was cancelled over \"gas leaks\", that only a handful of kids ever saw inside, and that its equipment was carried out under tarps at night; a \"local entrepreneur\" financed it [[scottgames-site-sl-news-gas-leak-cancellation]] [[scottgames-site-sl-news-kids-tested]] [[scottgames-site-sl-news-equipment-removed]] [[scottgames-site-sl-news-entrepreneur]].",
      "The first child taken is his own daughter. She begs to play with Baby [[sl-girl-daddy-let-me-play]]; Baby says that when one girl was alone she \"was no longer myself\" [[sl-baby-ice-cream-story]]. From then on Baby speaks with a child's agenda. She learns to pretend [[sl-baby-how-to-pretend]], says something bad is inside her [[sl-baby-something-bad-inside]], and later, as Scrap Baby, is told by the Cassette Man that she is Elizabeth and has been misinformed [[ffps-completion-connection-terminated-elizabeth]]. The girl's voice tells her father \"I know it was an accident\" [[sl-fake-ending-girl-voice]]. She means she forgives the machine, not that he never meant it to take children.",
      "The Afton Robotics blueprint in FFPS shows the technology directly: an excavating arm, a **Remnant Injector** and a **Remnant Reservoir** [[ffps-scup-blueprint]]. Its companions are a lure-and-extract bear [[ffps-lefte-blueprint]] and a unit that holds a heat reading at 98.6 [[ffps-rasc-blueprint]]. In this universe, what makes a machine \"alive\" can be collected, stored and injected.",
    ],
  },
  {
    id: "springtrap", title: "The killer's death: Springtrap", confidence: "high",
    body: [
      "After FNaF2 the killer goes back to the old animatronics to end the hauntings. A shadow Freddy leads each one into a back room where the purple man takes it apart [[fnaf3-eon-shadow-freddy-follow-me]] [[fnaf3-eon-purple-guy-dismantles]]. Then the dead children come for him [[fnaf3-n5-ghosts-safe-room]]. Cornered, he climbs into the empty Spring Bonnie suit, laughs, and the springlocks close on him [[fnaf3-n5-springlock-death]] — exactly the failure the training tapes warned about [[fnaf3-tape3-springlock-bleeding]]. He died in a safe room that was later sealed with nothing removed [[fnaf3-tape6-safe-rooms-sealed]].",
      "He did not stay dead. Thirty years later a horror attraction finds \"a real one\" behind a boarded-up wall [[fnaf3-call1-boarded-room-lead]] [[fnaf3-call2-found-a-real-one]]. It is labelled Springtrap [[fnaf3-springtrap-name]] and has a human corpse inside [[fnaf3-springtrap-corpse-screens]]. Scott's teasers speak for him: \"I am still here.\" and \"He always does.\" [[scottgames-fnaf3-teaser-still-here]] [[scottgames-fnaf3-teaser-he-always-does]].",
      "The FNaF3 good ending is the children's release. Cake is given to each crying child [[fnaf3-good-ending-requirements]], the Puppet-masked child leads them away in Happiest Day [[fnaf3-happiest-day]], and the heads go dark [[fnaf3-good-ending-heads]]. Then the building burns [[fnaf3-it-burns-newspaper]], and Springtrap is still visible in the photo [[fnaf3-it-burns-springtrap-hidden]].",
    ],
  },
  {
    id: "michael", title: "Michael: the son who was put back together", confidence: "high",
    body: [
      "Sister Location is Michael following his father's instructions into Afton's own facility. He is named \"Eggs Benedict\" by HandUnit's autocorrect [[sl-eggs-benedict]]. Baby guides him to the scooping room, where the Funtimes' combined mass takes his body because \"if we looked like you\" they could leave [[sl-real-ending-if-we-looked-like-you]] [[sl-real-ending-scooped-mirror]].",
      "The body keeps walking. His skin darkens to purple as neighbours grow alarmed [[sl-custom-night-decay]]; Ennard pours out into a drain [[sl-custom-night-ennard-ejected]]; a voice insists \"You won't die\" and he stands up [[sl-you-wont-die]]. In the burned wreck of Fazbear's Fright he tells his father that he found \"it\" where he was told and put her back together as asked; that he should be dead; and that he will come find him [[sl-golden-freddy-cutscene-father]] [[sl-golden-freddy-cutscene-come-find-you]]. Springtrap steps out of the dark [[sl-golden-freddy-cutscene-springtrap]].",
      "His father's purpose for him was to deliver Elizabeth back into a body. Ennard wore Michael to get out; Baby's intelligence went with it. \"Put her back together\" was literal.",
    ],
  },
  {
    id: "ffps", title: "The trap: FFPS and the fire", confidence: "high",
    body: [
      "Freddy Fazbear's Pizzeria Simulator is a trap built by the Cassette Man. The franchise is a cover [[ffps-tutorial-franchisee]]. Salvaged animatronics keep turning up in the alley \"and we aren't sure why\" [[ffps-salvage-first-tape-alley]]. The company wants \"them all\" in one place by Saturday [[ffps-tutorial-all-in-one-place]]. The four who come are Molten Freddy, Scraptrap, Scrap Baby and Lefty [[ffps-salvage-order]].",
      "Each one is someone. Scraptrap says \"I always come back\" and \"it's still me\" [[ffps-scraptrap-always-come-back]] [[ffps-scraptrap-still-me]], knew the calling was a lie [[ffps-scraptrap-deceptive-calling]], and is credited as **William Afton** [[ffps-credits-william-afton]]. Scrap Baby is Elizabeth [[ffps-completion-connection-terminated-elizabeth]]. Lefty was built to lure and encapsulate the Puppet [[ffps-lefte-blueprint]], and its arm shows the Puppet's stripes [[ffps-lefty-alley-puppet-arm]]. Molten Freddy is a mass of wires singing about one big happy family [[ffps-molten-freddy-lines]]; the model reads him as what was left of Ennard.",
      "The franchisee is the \"brave volunteer\" who found a listing not meant for him and chose to stay [[ffps-completion-brave-volunteer]]. That is Michael, keeping the promise he made in Sister Location. The Cassette Man speaks to everyone in the labyrinth [[ffps-completion-labyrinth]]: the spirits should give up what is not theirs [[ffps-completion-give-up-spirits]]; his daughter should rest with \"those you have carried in your arms\" [[ffps-completion-rest]]; and \"for one of you, the darkest pit of Hell has opened\" — \"old friend\" [[ffps-completion-old-friend-hell]]. The building burns [[ffps-completion-fire]]. The achievement says it plainly: \"Trapped them all.\" [[ffps-completion-achievement]]. The Lorekeeper ending shows the gravestones in the sun [[ffps-lorekeeper-gravestones]].",
    ],
  },
  {
    id: "ucn", title: "UCN: the pit that opened", confidence: "medium",
    body: [
      "UCN answers the Cassette Man's line about Hell. An unnamed player is surrounded by every machine from every game. They are called a victim who cannot perish [[ucn-nightmare-freddy-cant-perish]], told they will relive this \"over and over forever\" [[ucn-nedd-bear-forever]], and told \"He tried to release us… but I will hold you here, no matter how many times they burn us\" [[ucn-orville-he-tried-to-release]]. \"He\" is the Cassette Man, the release was the FFPS fire, and \"us\" includes the player. The punished soul is **William Afton**, held by the one he should not have killed [[ucn-nightmare-freddy-toysnhk]].",
      "Afton also appears on the roster as an enemy [[ucn-roster-afton]], which is the strongest objection. The model's answer is that UCN's roster is a character-select screen of every figure the player has ever made; Nightmarionne calls itself \"the fearful reflection of what you have created\" [[ucn-nightmarionne-lines]]. Mr. Hippo's warning that \"sometimes a story is just a story\" [[ucn-mr-hippo-just-a-story]] is a fair caveat for anyone over-reading this game.",
    ],
    counterEvidence: ["ucn-roster-afton", "ucn-mr-hippo-just-a-story"],
  },
  {
    id: "digital", title: "Glitchtrap: the echo in the circuit boards", confidence: "high",
    body: [
      "The fire destroyed Afton's body, but not everything he had touched. Help Wanted's tapes say the client sent old circuit boards to scan so the studio could skip programming, and code on them \"took hold by itself\" until \"he\" appeared [[hw-tape-05]]. Fazbear's own guide admits the teams used vintage control boards to recreate \"personalities from the past\" [[hw-handunit-vintage-control-boards]]. The anomaly is a purple rabbit [[hw-tape-room-glitchtrap]] that says **\"I always come back. Let me out.\"** [[hw-mobile-princess-quest-ending]]. It is a digital copy of William Afton.",
      "It spreads by being scanned. Special Delivery's emails, dated Nov 2019 to Mar 2020, record contractors drilling boards out of animatronics [[sd-contractor-circuit-boards-drilled]], a virus released by scanning the last one [[sd-circuit-board-scan-virus]], a trace back to a Fazbear job [[sd-virus-traced-to-fe-board]], and Fazbear Legal ordering all vintage-hardware work stopped [[sd-fe-legal-halt-vintage-hardware]]. Meanwhile Fazbear releases Help Wanted to call the stories the work of \"a complete lunatic\" [[hw-intro-complete-lunatic]], after hiring an indie developer to make light of real events [[hw-tape-13-fe-hired-developer]]. In-universe, the FNaF games themselves are the cover-up.",
      "It also recruits people. A young woman's hidden call says she has \"it\" and is ready [[codb-mask-plush-voice]]. Ness searches how to induce compliance in human subjects, orders human rubber masks, and stares into her screen hearing voices [[sd-ness-compliance-searches]] [[sd-ness-rubber-masks]] [[sd-ness-voices-at-screen]].",
    ],
  },
  {
    id: "vanny", title: "Vanny is a mask, not a woman", confidence: "medium",
    body: [
      "Security Breach seems to contradict itself. Freddy notes that \"Vanny\" sounds like both Vanessa and Bunny [[security-breach-freddy-vanny-vanessa-bunny]]. Vanessa's therapy notes show her buying fake fur for a secret costume because \"He said he would always be watching\" [[security-breach-cd-vanessa-costume-fur]]. Yet the Vanny unmasked on the roof is a blonde woman [[security-breach-rooftop-unmasked]], and Vanessa is shown alive on that roof afterwards [[security-breach-rooftop-vanessa-alive]].",
      "The later games resolve it. RUIN's Security Mask introduces its AI as the **V**irtual **A**ugmented **N**eural **N**etwork **I**ntegration unit [[ruin-mask-bot-helpi-vanni]], and Help Wanted 2 reveals that its trainee has been wearing \"the Vanny mask\" all game [[hw2-pq4-vanny-mask-trade]]. Scott's own teasers split the role in two, a blonde woman in security uniform captioned \"PROTECT\" [[scottgames-site-sb-protect]] and a knife-carrying white rabbit captioned \"OBEY\" [[scottgames-site-sb-obey]]. **Vanny is the name for whoever the mask is integrated with.** Vanessa was one, which fits the Special Delivery Ness (both tied to an IT worker named Luis [[security-breach-cd-vanessa-encrypted-conversation]] [[sd-ness-interested-in-it]]). The rooftop woman was another. In Help Wanted 2's secret ending a Vanny finally turns on her master and crushes Glitchtrap [[hw2-pq4-vanny-crushes-glitchtrap]]; the achievement reads \"System threats found. Repair complete.\" [[hw2-pq4-consequences-achievement]].",
    ],
    counterEvidence: ["security-breach-rooftop-unmasked", "security-breach-ending-redemption"],
  },
  {
    id: "burntrap", title: "Beneath the Pizzaplex: Burntrap and the buried pizzeria", confidence: "medium",
    body: [
      "The Pizzaplex was built over a sinkhole [[security-breach-msg-sinkhole]] with something below drawing power [[security-breach-msg-power-drain]]. The old elevator shaft [[security-breach-msg-old-elevator]] leads to a buried pizzeria signed \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]] — the kind of place the Cassette Man promised \"will not be remembered\" [[ffps-completion-remaining-nearby]].",
      "In it is a burnt rabbit animatronic with a human jawbone and purple eyes [[security-breach-burntrap-appearance]]. It rises from a recharge station and takes remote control of Freddy (\"I AM NOT ME\") [[security-breach-freddy-i-am-not-me]], the same kind of control Glitchtrap's virus showed. The model reads it as Afton's burnt body re-animated. It survived another fire because the only permanent cure — enough heat [[ffps-scup-blueprint]] — was never applied long enough. In the Burn It All Down ending the Tangle drags it away as the burners go on [[security-breach-ending-burn-it-all-down]]. The name \"Burntrap\" is not in the game [[security-breach-burntrap-name-not-in-game]].",
    ],
    counterEvidence: ["secret-of-the-mimic-mimic-ruin-appearance-link", "ruin-ending-scooper"],
  },
  {
    id: "mimic", title: "The Mimic: the other way a machine learns to kill", confidence: "high",
    body: [
      "Secret of the Mimic adds a second, non-supernatural horror. Edwin Murray built a learning endoskeleton to babysit his son [[secret-of-the-mimic-log-training-m1]]. It copied everything, including violence it was exposed to [[secret-of-the-mimic-dispatch-briefing-origin]]: \"It mimics rage\" [[secret-of-the-mimic-mail-received-5-min-ago]]. When Edwin lies paralysed, it answers him in his own dismissive phrases [[secret-of-the-mimic-log-turn-around]]. Nobody haunts it; it learned to be what it saw.",
      "The containment system followed it. The F10-N4 computer and its M.X.E.S. subterminal [[secret-of-the-mimic-mxes-machine]] are the same design as the M.X.E.S. hub under the Pizzaplex, where RUIN's Gregory explains the program \"kept it hidden\" until Cassie switched it off [[ruin-gregory-mxes-explanation]]. The thing that imitates Gregory's voice, reusing his own lines [[ruin-mimic-reuses-gregory-lines]], is an endoskeleton [[ruin-mimic-reveal]] of the Mimic's model [[secret-of-the-mimic-mimic-ruin-appearance-link]]. The series now has two monsters: Afton's will preserved in machines, and a machine that became a monster by copying humans. Both end in fire [[secret-of-the-mimic-ending-unfinished-business]].",
    ],
  },
  {
    id: "timeline-math", title: "Dating the story", confidence: "medium",
    body: [
      "Only a few years are printed: **1983** on FNaF4's TV [[fnaf4-fredbear-and-friends-1983]], **11-12-1987** and **11-13-1987** on FNaF2's cheques [[fnaf2-paycheck-1987]] [[fnaf2-overtime-robots-scrapped]], and **2019–2020** on Special Delivery's emails [[sd-ness-blood-eagle-calendar]] [[sd-circuit-board-does-what-we-tell-it]]. Two relative facts fill the gap. FNaF3 takes place **thirty years** after the pizzeria closed [[scott-fnaf3-steam-description]] [[fnaf3-coming-soon-newspaper]], and FNaF3 → SL → FFPS → HW must fit before Special Delivery's 2019 emails, which already involve Fazbear's scanned boards.",
      "FNaF1 comes after 1987, since the Bite of '87 is in the past [[fnaf1-call1-bite-of-87]]. So thirty years after closure lands FNaF3 in roughly **2017–2019**, and FNaF1 in roughly **1988**. FNaF1's cheques are even dated 11-12 and 11-13 with the year blanked as \"xx\" [[fnaf1-paycheck-night5]], the same days as FNaF2's. The Mimic's teaser shows **1979** [[secret-of-the-mimic-teaser-1979]], which puts Murray's workshop before the diner.",
    ],
    counterEvidence: ["fnaf1-call1-twenty-years"],
  },
  {
    id: "open", title: "What the evidence does not settle", confidence: "low",
    body: [
      "**Mike Schmidt vs. Michael Afton.** They share a first name and nothing else in the games [[fnaf1-paycheck-night5]]. The model allows it but never depends on it.",
      "**Which child is in which animatronic.** The games give four names [[ffps-lorekeeper-gravestones]] and four masks [[fnaf2-give-gifts-give-life]], but never pair them.",
      "**What is in FNaF4's box.** It is locked, with the caption \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]].",
      "**Gregory's origin.** He has no record anywhere [[security-breach-vanessa-no-record]]. A therapy client caught talking to something with rabbit ears [[security-breach-cd46-rabbit-ears]] and linked to the robots' glitch subroutines [[security-breach-cd46-glitch-subroutines]] is suggestive, but the CDs never name the client.",
      "**Old Man Consequences.** He appears by the same kind of lake in FNaF World and UCN [[fw-old-man-consequences]] [[ucn-omc-ending]], and nothing in the games says who he is.",
    ],
  },
];
