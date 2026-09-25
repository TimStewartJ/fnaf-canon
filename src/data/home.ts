import type { Status } from "./schema";

export const homeSummary: { title: string; status: Status; text: string }[] = [
  { title: "The killer has a name", status: "canon", text: "FFPS's credits name the Springtrap-like salvage **William Afton** [[ffps-credits-william-afton]]; UCN labels him \"Afton\" [[ucn-roster-afton]]; Scott's guide says \"William Afton (AKA Scraptrap)\" [[scott-ucn-character-guide-afton]]." },
  { title: "He always comes back", status: "strong", text: "Dead in the Spring Bonnie suit [[fnaf3-n5-springlock-death]], found as Springtrap [[fnaf3-springtrap-name]], salvaged as Scraptrap [[ffps-scraptrap-always-come-back]], echoed as Glitchtrap: \"I always come back. Let me out.\" [[hw-mobile-princess-quest-ending]]" },
  { title: "Three children, three machines", status: "theory", text: "{{michael-afton}} was scooped and kept alive [[sl-you-wont-die]]; {{elizabeth-afton}} was taken by Baby [[sl-baby-minigame-girl-grabbed]]; the {{crying-child}} was bitten by Fredbear in <<c. 1983|derived|fnaf4-fredbear-and-friends-1983,fnaf4-minigame-countdown-to-party|The only printed year in FNaF4.>> [[fnaf4-the-bite]] and, this archive argues, lingers as Golden Freddy." },
  { title: "Remnant, and its cure", status: "canon", text: "An Afton Robotics blueprint shows a Remnant Injector and Reservoir, and notes that overheating might neutralize the effects permanently [[ffps-scup-blueprint]]. Every real ending is a fire [[ffps-completion-fire]] [[fnaf3-it-burns-newspaper]]." },
  { title: "The partner's daughter", status: "strong", text: "The child killed outside [[fnaf2-take-cake-to-the-children]] is the Cassette Man's daughter, \"shut out and left to die\" [[ffps-completion-shut-out]], who lives on in the Puppet and gave the others life [[fnaf2-give-gifts-give-life]]." },
  { title: "The games are the cover-up", status: "canon", text: "In-universe, Fazbear Entertainment hired an indie developer whose games were designed to make light of what happened [[hw-tape-13-fe-hired-developer]], and it blames \"a complete lunatic\" [[hw-intro-complete-lunatic]]." },
];

export const keyQuestions: { q: string; a: string; section: string }[] = [
  { q: "Who is the Purple Guy?", a: "William Afton. The purple car, the Spring Bonnie death, Springtrap, and Scraptrap's credit all connect.", section: "thesis" },
  { q: "Who is the crying child, and is he Golden Freddy?", a: "Afton's youngest son, bitten in c. 1983. Fredbear, the clock ending and UCN's Death Coin all tie him to Golden Freddy.", section: "golden" },
  { q: "Is the FNaF4 bite the Bite of '87?", a: "No. FNaF4 is anchored to 1983. The '87 bite is a later incident at a different restaurant.", section: "bite" },
  { q: "Who is Vanny — Vanessa or someone else?", a: "Both. Vanny is the V.A.N.N.I. mask's wearer; Vanessa was one, the rooftop woman another.", section: "vanny" },
  { q: "Who is the UCN protagonist?", a: "William Afton after the FFPS fire, held in place by the one he should not have killed (medium confidence).", section: "ucn" },
  { q: "How does Secret of the Mimic fit?", a: "It is the oldest layer: the workshop that built springlocks 'for the diner', and the origin of the thing in the Pizzaplex sinkhole.", section: "mimic" },
];
