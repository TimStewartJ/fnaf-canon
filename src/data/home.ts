import type { Status } from "./schema";

/**
 * The home page's short version of the Unified Model. Both lists follow the theory's final rulings.
 *
 * - homeSummary: six cards, in the order the story is told. `text` is RichText and cites a record for every
 *   factual clause. `status` is the card's weakest link: canon = stated or shown by the cited records;
 *   strong = a near-certain inference from several records; theory = the model's own reading. Where an
 *   inference enters, the sentence marks it once ("most likely", "the model reads").
 * - keyQuestions: the questions a newcomer asks. `a` is plain text (the page prints it as written, so it
 *   takes no tokens) and stands alone. `section` is the id of the theory chapter that argues the answer.
 */
export const homeSummary: { title: string; status: Status; text: string }[] = [
  {
    title: "The makers", status: "canon",
    text: "Murray's Costume Manor works under contract for Fazbear Entertainment [[secret-of-the-mimic-dispatch-contractor-murray]] and makes springlock suits [[secret-of-the-mimic-mail-springlocks-hen]]: \"suits that double as both animatronic and suit\" [[fnaf3-tape2-dual-suits]]. For his son, Edwin Murray builds an endoskeleton as a \"babysitter\" [[secret-of-the-mimic-log-training-m1]], and later a second from a copy of its program, which \"mimics rage\" [[secret-of-the-mimic-mail-received-5-min-ago]]. In <<1979|teaser|secret-of-the-mimic-teaser-1979,secret-of-the-mimic-work-order-1979|The year ends the game's official teaser and is on a work order in the technician's van. The work order was read from an image of the document and has not yet been confirmed in play.>> Fazbear Entertainment sends a technician to fetch his work: \"As per his contract, everything he's been working on for us is now legally ours.\" [[secret-of-the-mimic-dispatch-contract-legally-ours]]",
  },
  {
    title: "The killer has a name", status: "strong",
    text: "The purple figure of the minigames is cornered by the ghosts of five children and dies inside a yellow rabbit suit [[fnaf3-n5-ghosts-safe-room]] [[fnaf3-n5-springlock-death]]. Thirty years after a Freddy Fazbear's Pizza closed [[scott-fnaf3-steam-description]], a horror attraction announces \"We found one. A real one.\" [[fnaf3-call2-found-a-real-one]] The credits of a later game give its salvaged rabbit a name: **William Afton** [[ffps-credits-william-afton]]. Only the name is stated outright. That the killer, the rabbit, the robot designer \"Mr. Afton\" [[sl-intro-mr-afton-board]] and the father Michael speaks to [[sl-golden-freddy-cutscene-father]] are one man is a short chain of inferences that every later game relies on.",
  },
  {
    title: "Six children", status: "strong",
    text: "A child crying outside a restaurant is killed by a purple figure from a car [[fnaf2-take-cake-to-the-children]], and the Cassette Man mourns a daughter \"shut out and left to die\" [[ffps-completion-shut-out]]. On a June 26th a man dressed as a mascot lured two children into a back room at Freddy Fazbear's Pizza; five were linked to it, and no bodies were found [[fnaf1-news-kids-vanish]] [[fnaf1-news-five-children]]. Most likely William Afton killed all six; the child outside is that daughter, who stays on in the Puppet [[ffps-completion-my-daughter]]; and the five stay on in the mascots, counted everywhere as four and one more [[fnaf2-give-gifts-give-life]] [[fnaf3-happiest-day]].",
  },
  {
    title: "His own children", status: "theory",
    text: "Circus Baby, a machine of Afton's design [[sl-intro-mr-afton-board]], pulls a girl inside it [[sl-baby-minigame-girl-grabbed]]: his daughter, later named {{elizabeth-afton}} [[sl-girl-daddy-let-me-play]] [[ffps-completion-connection-terminated-elizabeth]]. His son {{michael-afton}} is scooped underground and told \"You won't die.\" [[sl-real-ending-scooped-mirror]] [[sl-you-wont-die]] And in <<c. 1983|estimated|fnaf4-fredbear-and-friends-1983,fnaf4-minigame-countdown-to-party|The week counts down to a party, and the only year printed in it is 1983, on a television. The title card dates the show, so the week is in that year or soon after.>> a small boy is bitten by Fredbear at his birthday party [[fnaf4-the-bite]]. The model reads him as Afton's son too: in Sister Location a locked room in Afton's facility has that boy's bedroom on its monitors and a plush like his on the desk [[sl-private-room-monitor-bedroom]] [[sl-private-room-fredbear-plush]].",
  },
  {
    title: "The trap and the fire", status: "canon",
    text: "The Cassette Man calls four haunted machines into one building [[ffps-salvage-order]]: \"I have to call them all back. All of them. Together in one place\" [[ffps-insanity-tape-call-them-back]]. It burns [[ffps-completion-fire]], and he stays: \"I am remaining as well. I am nearby.\" [[ffps-completion-remaining-nearby]] He sends his daughter to rest and one \"old friend\" to \"the darkest pit of Hell\" [[ffps-completion-rest]] [[ffps-completion-old-friend-hell]]. After its credits the game shows six gravestones and the words \"THE END\" [[ffps-lorekeeper-gravestones]] [[ffps-lorekeeper-hill-stone]].",
  },
  {
    title: "The copies", status: "theory",
    text: "In the modern games Fazbear Entertainment puts most of the old stories down to \"a complete lunatic\" [[hw-intro-complete-lunatic]] and has old circuit boards scanned into a virtual-reality game [[hw-handunit-vintage-control-boards]]. Something on them takes hold in the code [[hw-tape-05]] and appears as a grinning figure in a yellow rabbit costume [[hw-rabbit-figure-appearance]]. The model reads it as something William Afton left behind; the rival reading is a copying program, and no game says whose boards they were [[sd-which-board-unknown]]. Under the company's newest building, behind poured concrete [[ruin-concrete-poured-over-door]], a machine calls a girl down in her friend's voice [[ruin-mimic-reveal]]: a copying endoskeleton from Edwin Murray's workshop [[ruin-mimic-lair-mcm-mascot-suits]] [[secret-of-the-mimic-mxes-acronym-on-screen]].",
  },
];

export const keyQuestions: { q: string; a: string; section: string }[] = [
  { q: "Who is the Purple Guy?", a: "William Afton. Pizzeria Simulator's credits give that name to its salvaged rabbit, and by a short chain of inferences he is the purple figure who died in the rabbit suit, the robot designer \"Mr. Afton\", and the father of Michael and Elizabeth.", section: "killer" },
  { q: "Is the family in FNaF4 the Aftons?", a: "Most likely. In Sister Location a locked room in William Afton's facility has the bedroom of FNaF4's nights on its monitors and a Fredbear plush like FNaF4's on its desk; that the house was his own home, and the two boys his sons, is the model's reading, and no game says so.", section: "afton-house" },
  { q: "Is FNaF4's bite the Bite of '87?", a: "No. FNaF4's bite happens at a birthday party in the week whose only printed year is 1983. The Bite of '87 is a separate incident, which the model places in the last days of the 1987 restaurant, and who bit whom there is never shown.", section: "bite" },
  { q: "Are FNaF4's nights a dream?", a: "The games do not settle it. The bedroom is a real place, shown on the monitors of Afton's facility in Sister Location, and the model leans to the child being awake in it; either way, what he fights is not what is there, and a later game's word for it is \"illusion\".", section: "nightmares" },
  { q: "Who talks to the crying child through the Fredbear plush?", a: "No game says. The model leans to a toy spoken through from somewhere else, because its twin sits with a handset in its lap on the desk in Afton's facility whose monitors show the boy's bedroom; the boy's own mind is the alternative, and on the lines alone the two are level.", section: "plush" },
  { q: "Is Golden Freddy the crying child?", a: "The model reads Golden Freddy as the fifth of the five missing children: wherever the dead are counted there are four and one more, and the one is marked by the yellow bear. The crying child most likely dies of the bite, and no later record places him anywhere; that he shares the yellow bear with the fifth child is the strongest alternative, and the count of the dead is what decides against it.", section: "golden" },
  { q: "Is Mike Schmidt Michael Afton?", a: "It is not established, and the model does not use it. All the games give is a shared first name on a cheque and the word \"Odor\" on a dismissal slip, and the 1987 guard Fritz Smith is dismissed for the same word.", section: "open" },
  { q: "Who is the player in Ultimate Custom Night?", a: "No line names the player. The model leans to William Afton, kept after the fire by one of his victims in a night that does not end, and it is only a lean: Michael is the full alternative, and which child is \"the one you should not have killed\" is not settled either.", section: "ucn" },
  { q: "What is the rabbit in Help Wanted, known as Glitchtrap?", a: "A personality that came off old company circuit boards scanned into the game, and that presents as the killer; no game names it, and Glitchtrap was Scott's working name. The model reads it as something William Afton left behind and not the man himself, against a rival reading that it is a copying program; Pizzeria Simulator presents its fire as his end.", section: "digital" },
  { q: "Is Vanny Vanessa?", a: "Most likely: one woman, Vanessa, acting under the control of whatever writes to her, and earlier the beta tester with whom the rabbit left its plush. One ending's last page shows Vanessa in uniform on the roof after the masked woman has fallen, and the model has no account of it.", section: "vanny" },
  { q: "What is under the Pizzaplex: William Afton, or the Mimic?", a: "Two different things, most likely. Behind poured concrete at the deepest level waits a copying endoskeleton from the workshop of Edwin Murray, the costume maker whose firm made the springlock suits: the Mimic of Secret of the Mimic's title. The burnt rabbit under the Pizzaplex, which the game's files call Burntrap, stands in a recharge station above it, and may be what the Pizzeria Simulator fire left of the killer's rabbit.", section: "burntrap" },
  { q: "What was in FNaF4's locked box?", a: "In 2015 Scott wrote that it held \"the pieces put together\": by the context of his post, the pieces of FNaF4's hidden story. In later interviews he said that its contents had changed and then that he never pursued it, so the model treats the box as closed for good.", section: "open" },
];
