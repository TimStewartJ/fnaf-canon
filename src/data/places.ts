import type { Place } from "./schema";

/**
 * The places index, ordered by when each place first matters in the model's order of events; places the story
 * does not date, and places outside the story, come last. `years` shows no year after 1987 (the model prints
 * none); its justification is in dates.ts (PLACE_DATES) and its span across the eras in locations.ts.
 * Two pairs are most likely one building at two dates, and each entry says so: the old Freddy Fazbear's Pizza
 * and FNaF1's restaurant; Pizzeria Simulator's pizzeria and the pizzeria buried under the Pizzaplex.
 * Two entries are nested in others, and each says so: the Private Room is a room of Circus Baby's Entertainment
 * and Rental, and the buried pizzeria lies in the sinkhole (several records carry both of those tags).
 * A summary cites every record it rests on by id: it does not depend on how the records are tagged.
 */
export const places: Place[] = [
  {
    id: "murray-costume-manor", name: "Murray's Costume Manor", years: "up to the night of 1979",
    summary: "Edwin Murray's costume company, left to him by his father [[secret-of-the-mimic-log-inheritance]] and a contractor to Fazbear Entertainment [[secret-of-the-mimic-dispatch-contractor-murray]]. Its earnings chart, read from an image, begins in 1965 [[secret-of-the-mimic-mcm-net-earnings-1965-1975]]. It makes springlock suits [[secret-of-the-mimic-log-build-to-spec]], some of them \"for the diner\" [[secret-of-the-mimic-mail-springlocks-hen]]. Its research floor holds a full-size mock-up of a pizzeria, with unfinished prototypes that the game's files label Freddy, Bonnie, Chica and Foxy, and two more labelled Fredbear and Spring Bonnie [[secret-of-the-mimic-rnd-proto-pizzeria]] [[secret-of-the-mimic-mockup-pizzeria-layout]]. A computer called F10-N4 is still there, speaking in the voice of Fiona, his son's dead mother [[secret-of-the-mimic-f10n4-reveal]]; the model reads it as the first of Murray's two machines. On the night of the game, which a work order in the technician's van, read from an image and not yet seen in play, dates to 1979, Fazbear sends him in to \"Extract Blueprints from MCM Facility\" [[secret-of-the-mimic-work-order-1979]].",
    evidence: ["secret-of-the-mimic-log-inheritance", "secret-of-the-mimic-dispatch-contractor-murray", "secret-of-the-mimic-log-build-to-spec", "secret-of-the-mimic-mail-springlocks-hen", "secret-of-the-mimic-rnd-proto-pizzeria", "secret-of-the-mimic-mockup-pizzeria-layout", "secret-of-the-mimic-f10n4-reveal", "secret-of-the-mimic-work-order-1979", "secret-of-the-mimic-mcm-net-earnings-1965-1975"],
    image: "sotm-work-order-1979.jpg",
  },
  {
    id: "inventors-house", name: "The Inventor's House", years: "before the night of 1979; under a foreclosure notice by that summer",
    summary: "Edwin Murray's home, where the voice of the workshop's computer says he \"shut himself away\" [[secret-of-the-mimic-f10n4-reveal]]. A letter signed \"WA\" says that its senders \"now technically own the land\" but \"would never touch the house your parents built\" [[secret-of-the-mimic-mail-confidential-wa]]. Recordings found in the house have the first machine urging him to build another [[secret-of-the-mimic-log-try-again-build-another]], and Murray lying injured while the second answers him in his own words [[secret-of-the-mimic-log-turn-around]]; what became of him is not shown. A terminal in the attic is headed \"Mechanical X-form Experimental Storage #1\" [[secret-of-the-mimic-mxes-acronym-on-screen]]. By the night of 1979 the mailbox at the gate is full, and the last thing delivered was a foreclosure notice [[secret-of-the-mimic-mail-foreclosure]].",
    evidence: ["secret-of-the-mimic-f10n4-reveal", "secret-of-the-mimic-mail-confidential-wa", "secret-of-the-mimic-log-try-again-build-another", "secret-of-the-mimic-log-turn-around", "secret-of-the-mimic-mxes-acronym-on-screen", "secret-of-the-mimic-mail-foreclosure"],
    image: "sotm-mxes-subterminal.jpg",
  },
  {
    id: "fredbears-family-diner", name: "Fredbear's Family Diner", years: "open c. 1983, if it is FNaF4's restaurant; \"closed for years\" by November 1987",
    summary: "The restaurant that Phone Guy, in November 1987, calls the original one. He speaks of \"the original restaurant owner\" and gives the place's name as \"Fredbear's Family Diner or something like that\"; it \"was closed for years\" [[fnaf2-call5-fredbears-family-diner]]. A yellow bear and a yellow rabbit share an unlabelled stage in a hidden minigame of FNaF3 [[fnaf3-stage01-fredbear-spring-bonnie]]; no game says that stage is the diner's. The model reads FNaF4's restaurant, where the boy is bitten [[fnaf4-the-bite]], as this diner: the same pair performs there [[fnaf4-fredbear-spring-bonnie-shadows]] and the television names Fredbear, though FNaF4 never prints the restaurant's own name [[fnaf4-diner-unnamed]]. A note in Murray's workshop, written before the night of 1979, has new springlocks nearly ready \"for the diner\", most likely this one [[secret-of-the-mimic-mail-springlocks-hen]], and a poster among that game's textures prints the diner's name [[secret-of-the-mimic-fredbears-diner-poster]].",
    evidence: ["fnaf2-call5-fredbears-family-diner", "fnaf3-stage01-fredbear-spring-bonnie", "fnaf4-the-bite", "fnaf4-fredbear-spring-bonnie-shadows", "fnaf4-diner-unnamed", "fnaf4-locked-backstage", "secret-of-the-mimic-mail-springlocks-hen", "secret-of-the-mimic-fredbears-diner-poster"],
    image: "fnaf4-locked-backstage-fredbears.png",
  },
  {
    id: "fnaf4-house", name: "The house in FNaF4", years: "c. 1983",
    summary: "The house of FNaF4's minigames: a living room, a hallway, a boy's bedroom full of plush toys, and a second bedroom with a pink bed that nobody is shown in [[fnaf4-house-rooms]] [[fnaf4-second-bedroom]]. Its television shows \"Fredbear & Friends! 1983\" [[fnaf4-fredbear-and-friends-1983]]. The nights are played in a bedroom that is most likely the same child's [[fnaf4-bedroom-setting]]. In Sister Location's time, three monitors in a locked room of William Afton's facility show that bedroom, its bed and a hallway as still, empty views [[sl-private-room-monitor-bedroom]] [[sl-private-room-feeds-empty]]. The model reads the house as most likely Afton's own home. A household he studied that was not his, or rooms built to be observed, cannot be excluded.",
    evidence: ["fnaf4-house-rooms", "fnaf4-second-bedroom", "fnaf4-fredbear-and-friends-1983", "fnaf4-bedroom-setting", "fnaf4-plushies-these-are-my-friends", "sl-private-room-monitor-bedroom", "sl-private-room-feeds-empty"],
    image: "fnaf4-fredbear-and-friends-1983-tv.png",
  },
  {
    id: "freddy-fazbears-pizza-original", name: "Freddy Fazbear's Pizza (the old location)", years: "before autumn 1987",
    summary: "The older Freddy Fazbear's Pizza: \"that old restaurant\", which by November 1987 had been \"left to rot for quite a while\" [[fnaf2-call1-new-location]], and about which the new guard is told to \"forget anything you may have heard\" [[fnaf2-call1-forget-old-location]]. The model places the incident of the clippings here, most likely: on the night of a June 26th two children were reported lured into a back room [[fnaf1-news-kids-vanish]], and five were later linked to it [[fnaf1-news-five-children]]. That the back room was its hidden safe room is less sure [[fnaf3-tape3-safe-room]]. The four older machines in the 1987 restaurant's back room came \"from the previous location\", most likely this one; they were kept for parts and given up on for their looks and their smell [[fnaf2-call2-older-models]] [[fnaf2-call2-the-smell]]. The clippings themselves are seen on a wall of the first game's restaurant, which is most likely this same building reopened.",
    evidence: ["fnaf2-call1-new-location", "fnaf2-call1-forget-old-location", "fnaf1-news-kids-vanish", "fnaf1-news-five-children", "fnaf3-tape3-safe-room", "fnaf2-call2-older-models", "fnaf2-call2-the-smell", "fnaf2-call2-loved-old-characters"],
  },
  {
    id: "safe-room", name: "The safe room", years: "built into every location; later walled up",
    summary: "The hidden room of the restaurants: \"Every location is built with one extra room\" that is left off the map its machines and cameras use [[fnaf3-tape3-safe-room]], and no customer is ever to be taken into it [[fnaf3-tape5-no-customers-safe-room]]. The rooms were later walled up at most locations, with nothing taken out [[fnaf3-tape6-safe-rooms-sealed]] [[fnaf3-tape6-nothing-taken-out]]. The model reads the room in which the killer dies inside the yellow rabbit suit as one of them [[fnaf3-n5-ghosts-safe-room]] [[fnaf3-n5-springlock-death]]: it had most likely been walled up before he died, and no game shows him opening it. The model also places the luring of the five in the old restaurant's safe room, less surely. Thirty years after the closing, an attraction follows a lead to \"an extra room that got boarded up\" [[fnaf3-call1-boarded-room-lead]].",
    evidence: ["fnaf3-tape3-safe-room", "fnaf3-tape5-no-customers-safe-room", "fnaf3-tape6-safe-rooms-sealed", "fnaf3-tape6-nothing-taken-out", "fnaf3-n5-ghosts-safe-room", "fnaf3-n5-springlock-death", "fnaf3-call1-boarded-room-lead"],
    image: "fnaf3-safe-room-purple-guy.jpg",
  },
  {
    id: "tape-sister-location", name: "The \"sister location\" of the training tapes", years: "undated; the springlock years",
    summary: "A second venue, named only once: after \"an unfortunate incident at the sister location involving multiple and simultaneous springlock failures\", the springlock suits are declared unfit and retired [[fnaf3-tape4-sister-location-springlock-failures]]. Which place it was is not said. Nothing ties it to Circus Baby's facility, whose business began only after a Freddy Fazbear's Pizza had closed [[sl-handunit-freddy-fazbear-closing]].",
    evidence: ["fnaf3-tape4-sister-location-springlock-failures", "sl-handunit-freddy-fazbear-closing"],
  },
  {
    id: "circus-babys-pizza-world", name: "Circus Baby's Pizza World", years: "undated; grand opening cancelled",
    summary: "The pizzeria where Circus Baby was to perform. She says she was on stage once, \"only one day\" [[sl-baby-on-stage-one-day]], and that on that day a little girl came to her alone [[sl-baby-ice-cream-story]]; her minigame shows a claw pulling the girl inside [[sl-baby-minigame-girl-grabbed]]. Scott's hidden news report says that the grand opening was cancelled over \"reported gas leaks\" [[scottgames-site-sl-news-gas-leak-cancellation]] and that large equipment was taken out at night [[scottgames-site-sl-news-equipment-removed]]. Circus Baby speaks of \"my old pizzeria\", most likely this one [[sl-springlock-suit-from-old-pizzeria]]. Nothing dates it: the model places it before November 1987 by convention.",
    evidence: ["sl-baby-on-stage-one-day", "sl-baby-ice-cream-story", "sl-baby-minigame-girl-grabbed", "scottgames-site-sl-news-gas-leak-cancellation", "scottgames-site-sl-news-equipment-removed", "sl-springlock-suit-from-old-pizzeria"],
    image: "sl-baby-minigame-claw.png",
  },
  {
    id: "circus-babys-rental", name: "Circus Baby's Entertainment and Rental", years: "undated; in business after a Freddy Fazbear's Pizza had closed",
    summary: "The underground facility, marked \"Copyright (c) Afton Robotics LLC\" on its own map [[sl-extras-map-entertainment-and-rental]], whose machines \"are rented out for private parties during the day\" [[sl-handunit-rented-for-private-parties]]. Its business followed \"the unfortunate closing of Freddy Fazbear's Pizza\" [[sl-handunit-freddy-fazbear-closing]]; which closing is not said. Michael works five nights here as a technician [[sl-eggs-benedict]] and is scooped in its scooping room [[sl-scooping-room-explained]] [[sl-real-ending-scooped-mirror]]; that week is undated, and the model places it by convention. One room on its map is marked \"Private\" [[sl-extras-map-entertainment-and-rental]], and has its own entry: the Private Room.",
    evidence: ["sl-extras-map-entertainment-and-rental", "sl-handunit-rented-for-private-parties", "sl-handunit-freddy-fazbear-closing", "sl-eggs-benedict", "sl-scooping-room-explained", "sl-real-ending-scooped-mirror"],
    image: "sl-real-ending-purple-eyes.png",
  },
  {
    id: "private-room", name: "The Private Room", years: "shown in Sister Location's time",
    summary: "A locked room in William Afton's facility, marked \"Private\" on its map [[sl-extras-map-entertainment-and-rental]]. A code on its wall keypad, which players record as 1-9-8-3, switches three desk monitors to still, empty views of FNaF4's bedroom, bed and hallway [[sl-private-room-keypad-1983]] [[sl-private-room-monitor-bedroom]] [[sl-private-room-feeds-empty]]. On the desk sits a Fredbear plush of FNaF4's design [[sl-private-room-fredbear-plush]] with an unlabelled handset in its lap [[sl-private-room-handset-beside-plush]]. Elsewhere in the facility a breaker panel lists two systems as \"Obsv.1\" and \"Obsv.2\" [[sl-breaker-panel-obsv-systems]]. That much is shown, and it is shown in Sister Location's own time. That anyone watched the child from here in 1983 is an inference, and the model's own order starts the business that houses this room after that week.",
    evidence: ["sl-extras-map-entertainment-and-rental", "sl-private-room-keypad-1983", "sl-private-room-monitor-bedroom", "sl-private-room-monitor-bed", "sl-private-room-monitor-hallway", "sl-private-room-feeds-empty", "sl-private-room-fredbear-plush", "sl-private-room-handset-beside-plush", "sl-breaker-panel-obsv-systems", "sl-private-room-restricted"],
    image: "sl-private-room-1983-monitors.jpg",
  },
  {
    id: "freddy-fazbears-pizza-1987", name: "Freddy Fazbear's Pizza (1987)", years: "autumn 1987; closed after 13 November",
    summary: "The new restaurant of FNaF2: a \"Grand Re-Opening\" [[fnaf2-help-wanted-ad]] with new machines tied to a criminal database [[fnaf2-call1-criminal-database]] and the four older ones in a back room [[fnaf2-call2-older-models]]. In one week of November 1987 [[fnaf2-paycheck-1987]] it sees an investigation [[fnaf2-call4-investigation]], a lockdown [[fnaf2-call5-lockdown]] and a spare yellow suit that someone has used [[fnaf2-call6-yellow-suit]], and it closes after \"only a few short weeks\" [[fnaf2-overtime-robots-scrapped]]. What was done there that week is not recorded. The Bite of '87 most likely falls in its last days.",
    evidence: ["fnaf2-help-wanted-ad", "fnaf2-call1-criminal-database", "fnaf2-call2-older-models", "fnaf2-paycheck-1987", "fnaf2-call4-investigation", "fnaf2-call5-lockdown", "fnaf2-call6-yellow-suit", "fnaf2-overtime-robots-scrapped"],
    image: "fnaf2-robots-scrapped.jpg",
  },
  {
    id: "freddy-fazbears-pizza-fnaf1", name: "Freddy Fazbear's Pizza (FNaF1)", years: "a November after 1987",
    summary: "The restaurant of the first game: the four original machines, a rationed power supply [[scott-fnaf1-steam-budget-cuts]] and a guard named Mike Schmidt [[fnaf1-paycheck-night5]]. It is most likely the old location reopened: its closing notice speaks of \"the tragedy that took place there many years ago\" [[fnaf1-news-closing]], and FNaF3's minigames show a building with its layout and one more room, which holds a yellow suit [[fnaf3-eon-map-fnaf1-layout]]. Four undated clippings can appear on a wall of its east hall: two about the missing children [[fnaf1-news-kids-vanish]] [[fnaf1-news-five-children]], one about the mascots' smell [[fnaf1-news-sanitation]], and the notice that it will close by year's end, which the model reads as this restaurant's own news.",
    evidence: ["fnaf1-help-wanted-ad", "scott-fnaf1-steam-budget-cuts", "fnaf1-paycheck-night5", "fnaf1-news-closing", "fnaf3-eon-map-fnaf1-layout", "fnaf1-news-kids-vanish", "fnaf1-news-five-children", "fnaf1-news-sanitation"],
    image: "fnaf1-missing-children-newspapers.jpg",
  },
  {
    id: "michael-afton-home", name: "Michael's home", years: "undated; during his week underground, which is placed by convention",
    summary: "The home where the technician of Sister Location watches a soap opera between his nights [[sl-immortal-and-the-restless]]. In the game's alternative ending the fused machines, Ennard, drag themselves into this room [[sl-fake-ending-home]]; the real ending, in which he is scooped, contradicts that branch.",
    evidence: ["sl-immortal-and-the-restless", "sl-fake-ending-home"],
  },
  {
    id: "fazbears-fright", name: "Fazbear's Fright: The Horror Attraction", years: "thirty years after Freddy Fazbear's Pizza closed",
    summary: "A local amusement park's horror attraction, \"based on the unsolved mysteries of Freddy Fazbear's Pizza\" and stocked with relics from \"the decades-old pizzeria\" [[fnaf3-coming-soon-newspaper]] [[scott-2015-fnaf3-store-thirty-years]]. It is built around one find: \"We found one. A real one.\" [[fnaf3-call2-found-a-real-one]] It burns to the ground overnight; the paper thinks faulty wiring likely and does not rule out foul play [[fnaf3-it-burns-newspaper]]. Michael's speech to his father is given in front of its burnt-out shell [[sl-golden-freddy-cutscene-springtrap]].",
    evidence: ["fnaf3-coming-soon-newspaper", "scott-2015-fnaf3-store-thirty-years", "fnaf3-call2-found-a-real-one", "fnaf3-it-burns-newspaper", "sl-golden-freddy-cutscene-springtrap"],
    image: "fnaf3-it-burns.jpg",
  },
  {
    id: "ffps-pizzeria", name: "Freddy Fazbear's Pizza Place (Pizzeria Simulator)", years: "after the Fazbear's Fright fire, most likely; one week",
    summary: "The franchise pizzeria of Pizzeria Simulator [[ffps-tutorial-franchisee]], which is bait: \"I have to call them all back. All of them. Together in one place\" [[ffps-insanity-tape-call-them-back]]. The Cassette Man calls it a labyrinth \"with no exit\" [[ffps-completion-labyrinth]], and in the ending that the later games follow the salvaged machines are shown burning as it goes up in flames [[ffps-completion-fire]]. One of the game's closing slides draws a small building under the sign \"Freddy Fazbear's Pizza Place\", standing and condemned [[ffps-completion-slide-pizza-place-condemned]]. It is most likely the pizzeria later found buried under the Pizzaplex.",
    evidence: ["ffps-tutorial-franchisee", "ffps-insanity-tape-call-them-back", "ffps-completion-labyrinth", "ffps-completion-fire", "ffps-completion-slide-pizza-place-condemned"],
    image: "ffps-certificate-of-completion.png",
  },
  {
    id: "silver-parasol-games-office", name: "The VR studio", years: "undated; while the VR game is being made",
    summary: "The studio that builds Fazbear's virtual-reality game and is sent old circuit boards to scan [[hw-tape-05]]. Its first tester, Jeremy, has nightmares there and stops reacting to the game's scares [[hw-tape-07]], and something happens \"in this building\" over which the tape speaker is sure there will be a lawsuit [[hw-tape-03]]. She is made the next tester and leaves the hidden tapes [[hw-tape-16]]. Fazbear says only that the first development team \"was eventually pulled from the project\" [[hw-handunit-first-dev-team-pulled]]. Help Wanted never speaks the studio's name; Scott gave it as Silver Parasol Games [[scott-silver-parasol-website]].",
    evidence: ["hw-tape-05", "hw-tape-07", "hw-tape-03", "hw-tape-16", "hw-handunit-first-dev-team-pulled", "scott-silver-parasol-website"],
    image: "hw-tape-room.jpg",
  },
  {
    id: "freddy-fazbear-virtual-experience", name: "The Freddy Fazbear Virtual Experience", years: "undated (a virtual place)",
    summary: "Fazbear Entertainment's \"hilarious VR Game\", which recreates what the company calls \"completely fictitious scenarios (lies)\" [[hw-intro-vr-game-to-move-past-ghost-stories]]. Its levels are the company's staging. What intrudes on them is not: a grinning, man-shaped figure in a yellow rabbit costume [[hw-rabbit-figure-appearance]], which began to appear after the old boards were scanned [[hw-tape-05]]. The player is one of the company's own testers [[hw-waiver-qa-team]].",
    evidence: ["hw-intro-vr-game-to-move-past-ghost-stories", "hw-intro-complete-lunatic", "hw-rabbit-figure-appearance", "hw-tape-05", "hw-waiver-qa-team"],
    image: "hw-glitchtrap-behind-player.jpg",
  },
  {
    id: "buried-pizzeria", name: "The buried pizzeria", years: "found under the Pizzaplex by a construction crew",
    summary: "An older pizzeria in the sinkhole under the Pizzaplex's raceway, reached by an old elevator shaft that a construction crew broke through to [[security-breach-msg-old-elevator]], whose sign reads \"Freddy Fazbear's Pizza Place\" [[security-breach-underground-pizza-place]]. The rooms beneath it are full of burners: \"It's like the inside of an oven.\" [[ruin-burners-inside-of-an-oven]] It is most likely Pizzeria Simulator's building, whose condemned front carries the same name [[ffps-completion-slide-pizza-place-condemned]]; the game does not tell its history. In a recharge station here stands the burnt rabbit under the Pizzaplex (known as Burntrap, a working name that Scott has said now stands) [[security-breach-burntrap-appearance]], and near the entrance lies a mass of old machine parts [[security-breach-tangle-composition]]. At the deepest level, behind a door covered in poured concrete, is the copying endoskeleton [[ruin-concrete-poured-over-door]].",
    evidence: ["security-breach-msg-old-elevator", "security-breach-underground-pizza-place", "ruin-burners-inside-of-an-oven", "ffps-completion-slide-pizza-place-condemned", "security-breach-burntrap-appearance", "security-breach-tangle-composition", "ruin-concrete-poured-over-door"],
    image: "sb-burntrap-and-tangle.jpg",
  },
  {
    id: "mega-pizzaplex", name: "Freddy Fazbear's Mega Pizzaplex", years: "no year; wrecked by the time of RUIN",
    summary: "Fazbear Entertainment's Mega Pizzaplex, which stands over a sinkhole [[security-breach-msg-sinkhole]] and over an older pizzeria [[security-breach-underground-pizza-place]]. Before the night of Security Breach one of its staff is asking \"Where is everyone?\" [[security-breach-msg-job-security]] On that night a boy named Gregory is inside, for whom Freddy's scan finds no guest profile [[security-breach-intro-not-in-database]]. By the time of RUIN it is abandoned and wrecked [[ruin-pizzaplex-abandoned-earthquake]], and its security nodes turn out to be what keeps the underground sealed [[ruin-fake-gregory-one-node-left-sealed]].",
    evidence: ["security-breach-msg-sinkhole", "security-breach-underground-pizza-place", "security-breach-msg-job-security", "security-breach-intro-not-in-database", "ruin-pizzaplex-abandoned-earthquake", "ruin-fake-gregory-one-node-left-sealed"],
    image: "sb-pizza-place-sign-sinkhole.webp",
  },
  {
    id: "the-sinkhole", name: "The sinkhole", years: "found by a construction crew at the raceway",
    summary: "The void under the Pizzaplex's raceway, with the buried pizzeria in it. A construction crew at the raceway, which had been open before [[security-breach-freddy-raceway-closed-abruptly]], fears it is \"building over a sinkhole\" [[security-breach-msg-sinkhole]] and traces a power cable into the foundation [[security-breach-msg-power-drain]]. In RUIN a voice using Gregory's words says it is trapped there [[ruin-fake-gregory-sinkhole]], and the real Gregory says that the thing in the sinkhole has \"been trapped down here for a really long time\" [[ruin-gregory-mxes-explanation]].",
    evidence: ["security-breach-freddy-raceway-closed-abruptly", "security-breach-msg-sinkhole", "security-breach-msg-power-drain", "ruin-fake-gregory-sinkhole", "ruin-gregory-mxes-explanation"],
  },
  {
    id: "fazbear-orientation-program", name: "The Fazbear Orientation Program", years: "between Gregory's night and RUIN (seen through a mask)",
    summary: "The staff training program of Help Wanted 2 [[hw2-orientation-program-intro]], seen through a mask. With the mask off, its bright hub is a dark, derelict room [[hw2-remove-mask-real-world]], which the model reads, less surely, as the buried pizzeria [[hw2-real-hub-pit-pizzeria]]. Its levels are the company's staging; the gift that appears on its stage, and the recharge station inside it, are not [[hw2-faz-force-ending]].",
    evidence: ["hw2-orientation-program-intro", "hw2-remove-mask-real-world", "hw2-real-hub-pit-pizzeria", "hw2-faz-force-ending"],
    image: "hw2-hub-real-world.jpg",
  },
  {
    id: "midnight-motorist-house", name: "The house in Midnight Motorist", years: "undated",
    summary: "The house in Pizzeria Simulator's hidden Midnight Motorist scene. A driver comes home on a rainy night [[ffps-midnight-motorist-secret-drive]]. A grey figure in front of the television says \"Leave him alone tonight. He had a rough day.\" [[ffps-midnight-motorist-grey-person]] A boy's door is shut [[ffps-midnight-motorist-closed-door]], and behind the house is a broken window: \"Ran off to that place again.\" [[ffps-midnight-motorist-ran-off]] The scene names nobody, and the model draws nothing from it. The house may be the killer's own or a victim's; if it is his, the boy behind the door may be either son.",
    evidence: ["ffps-midnight-motorist-secret-drive", "ffps-midnight-motorist-grey-person", "ffps-midnight-motorist-closed-door", "ffps-midnight-motorist-ran-off"],
    image: "ffps-midnight-motorist-secret-drive.png",
  },
  {
    id: "jrs", name: "JR's", years: "undated",
    summary: "A building with a \"JR's\" sign in the same hidden scene, where a green figure turns the driver away: \"Come on, you know you can't be here.\" [[ffps-midnight-motorist-jrs]] What the place is, the game does not say.",
    evidence: ["ffps-midnight-motorist-jrs"],
  },
  {
    id: "freddy-fazbears-pizza-itp", name: "Freddy Fazbear's Pizza (Into the Pit)", years: "not placed",
    summary: "The busy older pizzeria that a boy named Oswald reaches through a ball pit [[into-the-pit-jeffs-pizza-ball-pit]], where a yellow rabbit leads him to a room of dead children [[into-the-pit-prologue-mci]]. Into the Pit is an adaptation that the main games never place: its events are not on the timeline, and nothing rests on it. A logo graphic in the game reads \"FREDDY FAZBEAR'S Pizza 1985\" [[into-the-pit-past-year-1985]]; where it is shown has not been confirmed, and it dates nothing.",
    evidence: ["into-the-pit-jeffs-pizza-ball-pit", "into-the-pit-prologue-mci", "into-the-pit-past-year-1985"],
    image: "itp-one-star-ending-party-room.jpg",
  },
  {
    id: "jeffs-pizza", name: "Jeff's Pizza", years: "not placed",
    summary: "A run-down pizzeria in Into the Pit whose ball pit opens onto an older Freddy Fazbear's Pizza [[into-the-pit-jeffs-pizza-ball-pit]]. Into the Pit is an adaptation that the main games never place.",
    evidence: ["into-the-pit-jeffs-pizza-ball-pit", "into-the-pit-rabbit-replaces-dad"],
  },
  {
    id: "the-pit", name: "The ball pit", years: "not placed",
    summary: "The ball pit at Jeff's Pizza, in Into the Pit [[into-the-pit-jeffs-pizza-ball-pit]]. A yellow rabbit comes back through it and takes the place of Oswald's father [[into-the-pit-rabbit-replaces-dad]]. Into the Pit is an adaptation that the main games never place.",
    evidence: ["into-the-pit-jeffs-pizza-ball-pit", "into-the-pit-rabbit-replaces-dad"],
  },
  {
    id: "the-mill", name: "The mill", years: "not placed",
    summary: "The mill where Oswald's father lost his job, in Into the Pit [[into-the-pit-mill-closure]]. Into the Pit is an adaptation that the main games never place.",
    evidence: ["into-the-pit-mill-closure"],
  },
  {
    id: "fnaf-world-sub-tunnel-4", name: "The lake of Old Man Consequences", years: "in FNaF World's adventure, which is outside the story, and in a hidden ending of Ultimate Custom Night",
    summary: "A red lake where a figure who gives his name as Old Man Consequences sits fishing. In FNaF World he tells the person playing that they have gone too deep into the code: \"Come have a seat, and let's fish for a while.\" [[fw-old-man-consequences]] In a hidden ending of Ultimate Custom Night he says \"Leave the demon to his demons. Rest your own soul.\" [[ucn-omc-ending]] Whom he is speaking to there is not settled.",
    evidence: ["fw-old-man-consequences", "ucn-omc-ending"],
    image: "fw-old-man-consequences.jpg",
  },
];
