export interface TreeMember { id: string; gen: number; col: number; note?: string }
export interface FamilyTree { id: string; title: string; description: string; members: TreeMember[]; notes?: string }

/**
 * The trees of the Family Trees page. Members are ids from the people index; the lines between them come from
 * `relations.ts`. A member's `col` is its column on the page, so a chain that should read as one descent shares a
 * column and things the model keeps apart do not. Descriptions and notes are plain text and say who is in a tree
 * and how firmly.
 */
export const familyTrees: FamilyTree[] = [
  {
    id: "afton", title: "The Afton family",
    description: "William Afton, the two children the games name (Michael in Sister Location, Elizabeth in Pizzeria Simulator), the two boys of FNaF4, whom the model reads as his sons (medium, at its lower end), and the machines bound up with them: the suit that snapped shut on him, the machine that took Elizabeth, the machines that wore Michael, and the bear that bit the younger boy. Of what carries something of him after the fire, the rabbit in the code is here as the model's reading, and the burnt rabbit under the Pizzaplex as a possibility.",
    members: [
      { id: "cassette-man", gen: 0, col: 0, note: "calls him old friend, as the game implies" },
      { id: "william-afton", gen: 0, col: 2, note: "father · designer · killer" },
      { id: "purple-guy", gen: 0, col: 4, note: "the minigames' figure" },
      { id: "older-brother", gen: 1, col: 0, note: "most likely Michael" },
      { id: "michael-afton", gen: 1, col: 1, note: "son" },
      { id: "elizabeth-afton", gen: 1, col: 2, note: "daughter" },
      { id: "crying-child", gen: 1, col: 3, note: "younger son (theory)" },
      { id: "springtrap", gen: 1, col: 4, note: "the suit that closed on him, found (strong)" },
      { id: "glitchtrap", gen: 1, col: 5, note: "read as something he left behind (theory)" },
      { id: "ffps-franchisee", gen: 2, col: 0, note: "most likely Michael" },
      { id: "ennard", gen: 2, col: 1, note: "wore Michael" },
      { id: "circus-baby", gen: 2, col: 2, note: "took Elizabeth" },
      { id: "fredbear", gen: 2, col: 3, note: "bit the crying child" },
      { id: "scraptrap", gen: 2, col: 4, note: "credited as William Afton" },
      { id: "molten-freddy", gen: 3, col: 1, note: "most likely what is left of Ennard" },
      { id: "scrap-baby", gen: 3, col: 2, note: "Baby, most likely rebuilt" },
      { id: "burntrap", gen: 3, col: 4, note: "may be what the fire left of the salvaged rabbit (low-medium)" },
    ],
    notes: "No game names the crying child. His tie to the Afton name is theory (medium, at its lower end). It rests on Sister Location, where FNaF4's night rooms are on the monitors of Afton's facility, with a Fredbear plush of FNaF4's design and a handset on the desk; it does not rest on a purple car or on Ultimate Custom Night. That the older brother is Michael stands on the same ground, and on the bitten boy's death, which is implied and not stated. Michael is named in Sister Location and Elizabeth in Pizzeria Simulator. The player of Ultimate Custom Night, and the one that game says the player should not have killed, are not in this tree: the model unifies neither with anyone, and argues both in its chapter on that game. The rabbit in the code is joined to William Afton because the model reads it as something he left behind (medium); that it is the man himself is low. The burnt rabbit under the Pizzaplex is joined only to the salvaged rabbit, by a tie that says it may be what the fire left (low-medium). Golden Freddy is not here: the model reads it as the fifth child's, and no record places the crying child after the bite.",
  },
  {
    id: "cassette-man", title: "The Cassette Man & the children",
    description: "The man who calls the machines his own making, the daughter he lost, and the five children. Four of the five most likely stay on in the four mascots until the killer takes the machines apart (medium-high); the yellow bear is read as the fifth child's (medium); the daughter most likely stays on in the Puppet (medium-high).",
    members: [
      { id: "purple-guy", gen: 0, col: 0, note: "the minigames' figure" },
      { id: "william-afton", gen: 0, col: 1, note: "the killer (strong)" },
      { id: "cassette-man", gen: 0, col: 4, note: "calls the machines his own making" },
      { id: "missing-children", gen: 1, col: 1, note: "two reported lured on a June 26th; five linked to the incident" },
      { id: "fifth-child", gen: 1, col: 3, note: "one of the five" },
      { id: "cassette-mans-daughter", gen: 1, col: 4, note: "shut out and left to die" },
      { id: "security-puppet-child", gen: 1, col: 5, note: "most likely his daughter" },
      { id: "freddy-fazbear", gen: 2, col: 0 },
      { id: "bonnie", gen: 2, col: 1 },
      { id: "golden-freddy", gen: 2, col: 3, note: "read as the fifth child's (theory)" },
      { id: "puppet", gen: 2, col: 4, note: "she most likely stays on in it" },
      { id: "chica", gen: 3, col: 0 },
      { id: "foxy", gen: 3, col: 1 },
      { id: "lefty", gen: 3, col: 4, note: "most likely holds the Puppet" },
    ],
    notes: "The Cassette Man is the only name the games give this man, and it is a part in a credits list. He calls the one he sends to Hell old friend, and the game implies, without naming him, that this is William Afton. That the two men worked in the same business is the model's reading (medium), and no record says what either man's standing in it was. A client called Hen in Secret of the Mimic is not in this tree: that Hen is the Cassette Man is only a possibility (low), and the archive builds nothing on it. Which child is in which mascot, no game says. Four names are on a row of gravestones, and that the row is the five is medium.",
  },
  {
    id: "murray", title: "The Murray family",
    description: "Edwin Murray's household, the two machines he built for it, the client he calls Hen and the party that signs W.A. The model reads the cabinet F10-N4 as the mind of his first machine, M1: no record states it. The copying endoskeleton under the Pizzaplex is most likely his second machine, M2 (medium-high). The signer W.A. is most likely William Afton (medium); who Hen is, no game says.",
    members: [
      { id: "hen", gen: 0, col: 0, note: "client" },
      { id: "edwin-murray", gen: 0, col: 1, note: "inventor · contractor" },
      { id: "fiona-murray", gen: 0, col: 2, note: "David's mother" },
      { id: "wa-signatory", gen: 0, col: 3, note: "most likely William Afton" },
      { id: "david-murray", gen: 1, col: 1, note: "their son" },
      { id: "f10-n4", gen: 1, col: 2, note: "read as M1 · speaks as Fiona" },
      { id: "the-mimic", gen: 2, col: 2, note: "M2, most likely · a copy of M1's program" },
    ],
    notes: "Murray built two machines: M1, the babysitter that took the voice of Fiona, his son's dead mother, and M2, a copy of M1's program. One log has M1 urge him to \"try again. Build another\"; that M2 was built after that urging and after his son's death, which the records imply and never state, is the model's reading. No record says that Edwin and Fiona were married. What became of Murray is not shown. One continuous machine from the night of 1979 to RUIN is not shown either, and how the endoskeleton came to be under the Pizzaplex is not said. Whom it met there is in the Pizzaplex tree.",
  },
  {
    id: "pizzaplex", title: "The Pizzaplex web",
    description: "The rabbit in the code and the woman it reached, the people of the Pizzaplex, and what lies under it. The model treats the rabbit in the code, the burnt rabbit under the Pizzaplex and the copying endoskeleton as three things and unifies none of them with another: that the burnt rabbit under the Pizzaplex is not the endoskeleton is medium, and that the endoskeleton is not the rabbit in the code is only low-medium.",
    members: [
      { id: "william-afton", gen: 0, col: 1, note: "burns in Pizzeria Simulator's fire" },
      { id: "scraptrap", gen: 0, col: 3, note: "credited as William Afton" },
      { id: "molten-freddy", gen: 0, col: 4, note: "burns in the same fire" },
      { id: "hw-mask-voice", gen: 1, col: 0, note: "read as Vanessa (medium)" },
      { id: "glitchtrap", gen: 1, col: 1, note: "read as something he left behind (theory)" },
      { id: "burntrap", gen: 1, col: 3, note: "may be what the fire left of the salvaged rabbit (low-medium)" },
      { id: "the-blob", gen: 1, col: 4, note: "may be what is left of Molten Freddy (low-medium)" },
      { id: "ness", gen: 2, col: 0, note: "most likely Vanessa, earlier" },
      { id: "vanessa", gen: 2, col: 1, note: "security officer" },
      { id: "vanny", gen: 2, col: 2, note: "most likely Vanessa" },
      { id: "the-mimic", gen: 2, col: 5, note: "behind the concrete; not the body of the burnt remains (medium)" },
      { id: "luis-cabrera", gen: 3, col: 0, note: "writes to Ness" },
      { id: "gregory", gen: 3, col: 1 },
      { id: "glamrock-freddy", gen: 3, col: 2, note: "seized from below" },
      { id: "the-entity", gen: 3, col: 5, note: "the guard on the endoskeleton" },
      { id: "cassie", gen: 4, col: 1, note: "lured down in RUIN" },
      { id: "hw2-protagonist", gen: 4, col: 2, note: "a Fazbear technician; the mask passes on to Cassie" },
    ],
    notes: "The rabbit-costumed woman is most likely Vanessa (medium-high), and a page that shows a woman in Vanessa's cap and uniform on the roof above the unmasked woman counts against it and is unexplained. Ness is most likely Vanessa earlier (medium-high); that the woman on the hidden call is Vanessa is medium. The rabbit in the code presents as the killer, and the model reads it as something he left behind (medium). The burnt rabbit under the Pizzaplex may be what the fire left of the salvaged rabbit (low-medium), and the model holds that it is not the copying endoskeleton (medium). The mass of parts may be what is left of Molten Freddy (low-medium). The rabbit-shaped figure from the M.X.E.S. cabinet is read as part of the guard on the endoskeleton, and is not identified with the rabbit in the code. The mask worn by Help Wanted 2's technician passes on to Cassie (medium-high).",
  },
];
