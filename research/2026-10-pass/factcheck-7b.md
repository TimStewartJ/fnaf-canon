# Fact-check 7b: `relations.ts` with `model.ts`, `familyTrees.ts`, and `people.ts` from line 517

## What was checked, and against what

- **Files.** In `~/src/fnaf-canon-wt/theory` (branch `ws/theory`):
  `src/data/relations.ts` (84 ties), `src/data/model.ts`, `src/data/familyTrees.ts` (4 trees, 55 member places)
  and `src/data/people.ts` lines 517 to 1295 (104 entries, `springtrap` to `xor`). The prompt said 103 entries and
  58 minor figures; the range holds 38 entries in group `entity` and 66 in group `other` (two sections, of 8 and 58).
- **Commit.** Checked at `52e69ed`. HEAD moved to `bd65c8e` while I worked. None of those commits touched the four
  files: `relations.ts` and `familyTrees.ts` were last changed by `21e081b` (02:43 on 3 October), `people.ts` by
  `1ebaa6f` (02:47), `model.ts` by `56f06b0`. The commits did reword nine evidence records. All nine were read
  again, and one finding exists because of that (people 14).
- **The rulings moved too.** At 04:03 `rulings-brief.md` gained "Round four: wording corrected after fact-check"
  (it grew from 720 to 911 lines). The data files are older than that round. I read the brief again in its present
  state and checked all three files against every line of round four. A finding that rests on a round-four
  correction says "round four" beside its ruling. No grade changed in that round, so no status finding depends
  on it.
- **Records.** The three files cite 330 different records (165 in ties, 244 in the 104 entries). All 330 were
  opened in the JSON and read with their notes, and about 60 more where a ruling or a sentence pointed at them.
- **Quotations.** A script compared every phrase in quotation marks with the record cited beside it. In the 104
  entries there are 161: 136 are verbatim in the record's `quote`, 20 are printed words in its `claim`, 4 are
  repeated without a citation and are verbatim in a record the entry cites elsewhere, and 1 is in a different
  record from the one cited (people 11). In the tie notes there are 14: 12 are verbatim, and "save him" (twice)
  is the record's spelled-out 'S-A-V-E-H-I-M' in lower case, as R7's own wording has it. No misquote.
- **Images.** 25 entries in the range carry a portrait (24 files). All exist under `public/img/`, all have a
  credit, and all were looked at.
- **How fields are shown.** Read from `integ/src/pages/people/` (`ties.ts`, `identity.ts`, `PersonDetail.tsx`,
  `familyModel.ts`, `FamilyTrees.tsx`). A tie prints fixed words for its kind (`same-as`: "is the same being as";
  `controls`: "controls"; `worked-with`: "worked with"; `hunted`: "hunted"; `spouse-of`: "is the spouse of").
  `status` sits under the fixed heading "What became of it" (or "them"). `nameStatus: "canon-name"` prints "A name
  the canon gives." A tree draws its lines from `relations.ts`; by default it draws only family and identity
  kinds, so `created`, `controls`, `killed` and `hunted` are hidden until the reader switches them on. A member's
  `col` is its column on the page.
- **Checks run.** `npx tsx scripts/validate.ts` passes. Every record id, every `{{entity}}` and every
  `((chapter))` in the three files resolves. `model.ts` was run on the data to list the merges exactly.
- **Outside sources.** Steam's news feed, for the words of two posts by Scott (the Ultimate Custom Night
  "Character Guide" of 15 June 2018, and Sister Location's patch notes of 8 October 2016). The wiki, as a
  transcript aid only, for which salvage tape says "unsure of its origins" and for where the name "XOR" comes
  from. Findings that lean on them say so.

Ties are named below by `from`, kind and `to`, with their line in `relations.ts`.

## The checks the assignment named

| Check | Result |
|---|---|
| Every tie: kind, direction, status, note, evidence | 26 findings, on 32 of the 84 ties. Seven ties need more than a reworded note: one to delete (relations 1), one to rest on other records (2), one kind (3), one whose kind prints a claim the ruling grades low (4), and three statuses (5, 12 and 24). Directions are all right. |
| The merges `model.ts` makes | Six groups, listed below. Every one is a merge the rulings make, at the ruling's grade. One of them prints words that say more than its grade (relations 4). |
| R33: William Afton, the rabbit in the code and the burnt rabbit are not one history | No tie merges the burnt rabbit with anyone. The rabbit in the code is folded into William Afton at theory, as `model.md` 5.2 directs. The Afton tree stacks all of them in one column, which tells the chain that R33 does not tell (trees 1). |
| R20: the burnt rabbit is not the copying endoskeleton | No tie joins them. The Pizzaplex tree states it flat, without its grade (trees 3). |
| R6: the crying child is not in Golden Freddy and is not Ultimate Custom Night's accuser | Held. No tie; `golden-freddy` and `fredbear` both say no record puts him there. |
| R16: Ultimate Custom Night's player is unified with nobody | Held in the ties. One entry tells the lean outside that game's chapter (people 6). |
| R2: Hen is not merged; "W.A." is William Afton only at medium | Held. `wa-signatory same-as william-afton` is theory; Hen has only `worked-with`. |
| R19: Vanny, Vanessa and Ness at medium-high | Held: `vanessa wore vanny` strong, `ness same-as vanessa` strong, `hw-mask-voice same-as vanessa` theory (medium). |
| R21: two Murray machines | Held: `f10-n4` and `the-mimic` are separate, each `created` by Edwin Murray. A marriage that no record carries is drawn as a tie (relations 3). |
| R23: Into the Pit's figures stay apart | Held in the ties and the entries. Nine Into the Pit records are tagged with main-line people, which files them on those people's pages (outside the assignment). |
| A tie the rulings make that is missing | One: the Help Wanted 2 technician has no tie at all (relations 26). |
| Tree descriptions do not explain line styles | Clean. |
| Tree descriptions do not call the two men partners, founders or owners | Clean. The second tree's notes say "partners in the business is the model's reading (medium): his own words are old friend", which is R2. |
| Names (R26) | No book-only name is displayed. Tier-3 labels appear only as marked aliases. A tree id is a book-only name and shows in the URL (trees 4). Three names are marked as the canon's with no record that a game prints them (people 20). |
| Aliases: is the stated provenance true | Two are not (people 12 and 13). |
| No year after 1987 | None. "Thirty years" is counted from the wrong event twice (relations 13, people 15). |
| Images | Two portraits show another figure (people 8 and 9). One rests on an unlabelled bear (people 17). |
| Minor figures: duplicates | Three entries duplicate another (people 1 and 2). |

## The merges `model.ts` makes

`model.ts` unites the two ends of every `same-as` tie, whatever its status, and hangs a machine on a person for
`possesses` and a costume for `wore`. Run on the present data it shows these as one person each:

| Shown as one | Folded in, with the status of the link | Ruling | Verdict |
|---|---|---|---|
| William Afton | the purple man (strong); the signer W.A. (theory); Springtrap (strong); the salvaged rabbit of Pizzeria Simulator (canon); the rabbit in the code (theory) | R1 (a) to (c); R2 (4) medium; R18 (3) | Right, with relations 4 on the last |
| Michael Afton | the older brother (theory); the franchisee (theory); the technician "Eggs Benedict" (strong) | R3 (3) and R13: medium, lower end; medium, never strong; high | Right |
| Elizabeth | Circus Baby and Scrap Baby as machines she is in (strong) | R32: medium-high | Right |
| the Cassette Man's daughter | the Security Puppet's child (strong); the Puppet as the machine she is in (strong) | R7: medium-high for both | Right |
| the five children | the fifth child (strong); the four names on the stones (theory); Freddy, Bonnie, Chica and Foxy as their machines (strong); Golden Freddy, through the fifth child (theory) | R8 and step 8: medium-high; R8 (7) medium; R25: the row is the five, medium | Right |
| Vanessa | Ness (strong); the woman on the hidden call (theory); the rabbit costume as a role (strong) | R19 (1) and (2) | Right |

Kept apart, as the rulings require: the crying child; Ultimate Custom Night's player and "the one you should
not have killed"; Hen; the burnt rabbit under the Pizzaplex (its one tie is `scraptrap became burntrap`, theory);
the copying endoskeleton and the cabinet F10-N4; the rabbit-shaped figure from the M.X.E.S. cabinet; every figure
of Into the Pit; Mike Schmidt, the FNaF3 guard and the Midnight Motorist figures; the bite victim; client 46;
Vanessa's father Bill; the tape speaker.

Two things a reader of the merged pages will see that the table does not show:

- William Afton's page takes in everything filed under the rabbit in the code: that record's events, its 40
  evidence records, and the tie sentence "is the same being as" (relations 4).
- Evidence tags do some merging of their own, outside these files. Special Delivery's three rabbit records
  (`sd-vintage-bonnie-reports`, `sd-springtrap-did-not-save-the-others`,
  `sd-springtrap-pulled-apart-put-back-together`) are tagged `springtrap`, and Springtrap is a form of William
  Afton at strong. So his page files the foul old rabbit of Special Delivery as his, where R18 and R33 hold that
  it is his body only at low-medium. See "Noticed outside the assignment".

## `src/data/relations.ts`: needs work

Seven ties need more than a reworded note (findings 1 to 5, 12 and 24). About twenty-five need a note or a
citation corrected. The other 52 ties are right in kind, direction, status, note and evidence.

1. **`william-afton controls fredbear-plush` [theory]** (line 49). The tie itself. **status** (R5).
   R5's lean, at low-medium, is "a toy spoken through from the watching side", by "whoever sits at that desk".
   "That the voice is William Afton's: low." The tie's own note says so, yet the tie is drawn from William Afton
   at theory, and his page prints "William Afton controls the Fredbear plush". The rulings make no tie at this
   grade. (`model.md` 5.1 row 5 still asks for `william-afton created fredbear-plush`; no record says he made the
   toy either.)
   Fix: delete line 49. `fredbear-plush.theory` already tells the reading with both grades. If a tie must stay, it
   cannot be from `william-afton` at `theory`.

2. **`vanny hunted gregory` [canon]** (line 90). "She hunts him through the Pizzaplex: shown." **unsupported**
   (step 26, round four: "walks the building", was "hunts him", "no record of a hunt"). The three records listed
   are her spoken lines, the alley ending and Gregory's report of a hideout. None shows a hunt, and no record in
   the archive does. What the records show is two endings.
   Paste: `evidence: ["security-breach-ending-rooftop", "security-breach-ending-alley", "security-breach-gregory-finds-vanny-hideout"], note: "In one ending she captures him on the roof, and in another her silhouette looms over him as he sleeps in an alley: shown. No record shows her hunting him through the building; Gregory reports only that the \"rabbit lady\" has a hideout above Fazer Blast."`

3. **`edwin-murray spouse-of fiona-murray` [strong]** (line 101). The kind. **rulings** (R21 (1), round four: "no
   record of a marriage"; `round4.md` 3.2: "A record is needed before any chapter writes it"). The page prints
   "Edwin Murray is the spouse of Fiona Murray". The tie's own note says no record uses the word wife.
   Paste: `kind: "partner-of", status: "strong", note: "They share a son, and the cabinet that speaks in her voice says \"our home\": that they were a couple is the inference. No record of a marriage, and no record uses the word wife."`
   (`partner-of` then carries two senses in this file, a couple here and the model's reading of two men in
   business at line 57: see 19.)

4. **`glitchtrap same-as william-afton` [theory]** (line 29). The kind's printed words. **status** (R18 (3)).
   R18 grades three things: it presents as the killer (medium-high); it is something he left behind (medium); it
   is "the man himself (low)". The note says all three correctly. But a `same-as` tie prints "the rabbit in the
   code is the same being as William Afton", with a theory mark, in the ties list and on the tree's line. That
   sentence is the low claim. `model.md` 5.2 kept this tie and its kind, so the data follows its direction; the
   fault is in what the kind is made to say.
   Fix, either: (a) in the UI, print "is read as a form of" for a `same-as` whose `from` is a machine or figure
   (the person page's own line already says "as a form of"); or (b) until then, lead the note with the low.
   Paste for (b): `note: "Not the man himself: that is low. The rabbit in the code presents as the killer (medium-high), and the model reads it as something he left behind on old company boards (medium). The alternative is a copying program that learned him (low-medium). Which machine's boards, no game says."`

5. **`lefty controls puppet` [strong]** (line 60). **status** (order of events, step 20). The step lists "the
   Puppet in Lefty" as inferred with no figure, and the key says inferred is "medium unless a figure is given".
   `ffps-completion-my-daughter` and the tie's note agree that the blueprint names no target.
   Paste: `status: "theory", note: "Holds, not commands: Lefty most likely has the Puppet inside it (medium; inferred, not stated). Its blueprint emits a bracelet code, seals a suit round what it lures and soothes it with a lullaby, and a music box calms both. The blueprint names no target, and the striped arm on a rare screen is the weakest of the records."`

6. **`glitchtrap controls vanny` [strong]** (line 88), note. Three phrases. **overreach**.
   - "makes a costume because "He said he would always be watching."": `security-breach-cd-vanessa-costume-fur`
     has no "because". She says the costume is a secret, and then the line.
   - "In one ending she is released when the door ... is struck": `security-breach-ending-redemption` says the
     release "is the wiki's reading; the game shows the mask on the floor and Vanessa at the doors". R19 (4)
     grades her release low-medium. That record is not in the tie's evidence list.
   - "She answers a voice the player never hears" is the woman on the hidden call, who is Vanessa only at medium.

   Paste: `evidence: ["security-breach-cd-vanessa-costume-fur", "codb-mask-plush-voice", "security-breach-cd-vanessa-encrypted-conversation", "security-breach-pq3-help-wanted-hub-trapped-door", "security-breach-ending-redemption", "ruin-vanny-hideout-glitchtrap-shadow"], note: "Medium-high. Vanessa, who is most likely the rabbit-costumed woman, buys fake fur for a costume she calls a secret, and says \"He said he would always be watching.\" The woman on Help Wanted's hidden call, who may be the same woman (medium), answers a voice that is never heard. In one ending the Princess strikes the door from Help Wanted's Trapped ending, and afterwards the rabbit mask lies on the floor and Vanessa waits at the doors: that this is her release is the model's reading (low-medium)."`

7. **`fifth-child possesses golden-freddy` [theory]** (line 70) and **`fifth-child same-as missing-children`
   [strong]** (line 69), notes. "Wherever the dead are counted there are four and one"; "the one set apart in
   each count of the dead". **rulings** (R8 (7), round four: 'Not "wherever the dead are counted": SAVE THEM and
   Foxy Go! Go! Go! show five alike, and the fifth body in Give Gifts, Give Life is the wiki's report').
   Paste, line 70: `note: "The model reads the yellow bear as the fifth child's (medium). In the seven counts of the dead that the model lists there are four and one more, and in four of the seven the one more is marked by this bear (medium-high for the pattern); two counts show five alike, and one screen shows four heads and no fifth. How the child came to it, every scene withholds."`
   Paste, line 69: `note: "One of the five, by the clipping's count. That the one more, where a count of the dead sets one apart, is this child is the pattern of four and one (medium-high): it holds in four of the seven counts the model lists."`

8. **`william-afton parent-of crying-child` [theory]** (line 17), note. "Afton's facility has the rooms of this
   child's house on its monitors, with his toy on the desk: shown". **overreach** (R3 (1), round four: "with a
   Fredbear plush of FNaF4's design and a handset"; "the same object is inferred"). What is shown is FNaF4's
   gameplay rooms and a plush of the same design (`sl-private-room-monitor-bedroom`,
   `sl-private-room-fredbear-plush`). That they are this child's house is on R3's inferred list.
   Paste: `note: "Medium, at its lower end. Afton's facility has FNaF4's night rooms on its monitors, with a Fredbear plush of FNaF4's design and a handset on the desk: shown, in Sister Location's own time. That the rooms are this child's house, and that the house is Afton's own home, is the model's reading (medium). No game names the boy."`

9. **`ffps-franchisee same-as michael-afton` [theory]** (line 23), note. "The volunteer who would rather stay in
   the fire than take the way out". **rulings** (R13, round four). `ffps-completion-right-where-you-want-to-be`:
   "The speaker is guessing ('I have a feeling'), and the game does not show whether the volunteer leaves."
   Paste: `note: "Most likely (medium, and never firmer). The Cassette Man guesses that the volunteer does not want the way out planned for him: \"I have a feeling that you are right where you want to be.\" The game does not show whether he leaves. Set beside Michael's \"I'm going to come find you.\" Against it: the listing was not meant for this person, Scrap Baby did not expect them, and the game never names them."`

10. **`purple-guy same-as william-afton` [strong]** (line 24) and **`spring-bonnie became springtrap` [strong]**
    (line 26), notes. "finds a rabbit suit with a body in it"; "finds with a body inside". **overreach** (R1 (a),
    round four: "with what looks like a body inside it"). `fnaf3-springtrap-corpse-screens`: "what looks like a
    decayed human body inside the suit".
    Paste, line 24: replace the phrase with `Fazbear's Fright finds a rabbit suit with what looks like a body inside it`.
    Paste, line 26: `note: "The yellow rabbit suit he dies in is the suit that Fazbear's Fright finds, with what looks like a body inside it. The tape, not the minigame, gives the suit its name."`

11. **`cassette-man partner-of william-afton` [theory]** (line 57), note. "sends one of those he burns to Hell as
    "old friend"". **rulings** (R28: not "he burns it"; the tie on the next line says "The game does not show who
    lights the fire").
    Paste: `note: "The model's reading (medium), and the word partner is the model's own. The games state less: he calls the machines prisons of his making, says he unwillingly helped to create a monster, and tells one of those gathered in the burning building that the darkest pit of Hell has opened for it, calling it \"old friend\". No record says partner, founder or owner."`

12. **`fazbear-entertainment created lefty` [canon]** (line 59). **status**, against its own note: "no record
    says who built it". A mark on a sheet is stated; who built the machine is read from it.
    Paste: `status: "strong", note: "The blueprint is marked Fazbear Entertainment, Inc: stated. That the company made the machine is read from that mark. No record says who built it, and the model reads Lefty as hardware of the Cassette Man's trap."`
    The four `afton-robotics created ...` ties (lines 34 to 37, canon, "By the copyright line") rest on the same
    kind of mark. I let them stand; if one rule is wanted for all five, it is this one.

13. **`william-afton possesses springtrap` [strong]** (line 25), note. "He dies in the suit and walks in it thirty
    years later." **dates** (R12 and the dates list, round four: the thirty years are "counted from a closing and
    not from the killer's death").
    Paste: `note: "He dies in the suit, and it walks at Fazbear's Fright, which Scott's store text sets thirty years after a Freddy Fazbear's Pizza closed. The game never says in words whose body is inside; Scott's remark that it is the purple man's is on record as a transcript."`

14. **`circus-baby controls ennard` [strong]** (line 42). **uncited**. The two records in which one voice tells
    the group what to do are not listed, and `sl-baby-something-bad-inside` is not about the combined machine.
    Paste: `evidence: ["sl-real-ending-if-we-looked-like-you", "sl-real-ending-already-been-here-today", "scottgames-site-2017-source-ejection-dialogue-group", "scottgames-site-2017-fnafworld-source-ejection-dialogue-one"], note: "Baby's voice speaks for the combined machines, as \"we\", and leads the technician to the scooper. In lines Scott hid in his sites' page source in 2017 a plural voice says \"We outnumber you.\" and a single one answers \"You will do everything that I tell you to do.\"; no speaker is named, and reading them as the group and Baby is drawn from Pizzeria Simulator."`

15. **`ennard became molten-freddy` [strong]** (line 44), note. "calls the machine's origins unknown". **wrong
    record**. "we are unsure of its origins" is the standard salvage tape of Tuesday to Thursday
    (`ffps-salvage-origins-unknown`: "Each later salvage tape"). Molten Freddy is Monday's salvage
    (`ffps-salvage-order`), and Monday's tape is `ffps-salvage-first-tape-alley`. The wiki's transcript, used as an
    aid, labels the two tapes the same way. Neither record is in the tie's list.
    Paste: add `"ffps-salvage-first-tape-alley"` to `evidence`, and `note: "Molten Freddy is most likely what is left of Ennard after the group threw Baby out (medium-high). Pizzeria Simulator never says Ennard: the first salvage tape, played on Molten Freddy's night, says only that things are found in the alley \"quite often\" and \"we aren't sure why\"."`

16. **`vanny killed glitchtrap` [theory]** (line 89). "the next game still has a rabbit in the mask". **uncited**
    (R19, round four: the phrase "rests on the shadow on RUIN's hideout wall, taken from the wiki's summary, and
    not on the M.X.E.S. figure").
    Paste: add `"ruin-vanny-hideout-glitchtrap-shadow"` to `evidence`, and `note: "One ending of Help Wanted 2 shows a tiny copy of the rabbit crushed by a rabbit-masked silhouette that the scene does not identify. RUIN, which follows it in the story, still has a rabbit in the mask: the shadow of a rabbit figure on the hideout wall, as the wiki's summary reports it. That the remedy holds is low-medium."`

17. **`vanessa wore vanny` [strong]** (line 87). **uncited**. The note describes the rooftop page and the unmasked
    woman, and neither record is listed.
    Paste: add `"security-breach-rooftop-vanessa-alive"` and `"security-breach-rooftop-unmasked"` to `evidence`.

18. **`cassie worked-with gregory` [canon]** (line 93), note. "His best friend, who goes in after a message in
    his voice: stated." **overreach**. `ruin-cassie-seeks-gregory` has the message in its `quote`; "best friend"
    is the record's own description and no line is given for it.
    Paste: `note: "She goes in after a message in his voice, and the real Gregory later reaches her by radio: stated. The record describes her as his best friend without giving the line."`

19. **Kinds that say something other than their notes.** **reader**. The page prints the kind's word, and in
    these ties the word misleads:
    - `the-entity controls the-mimic` (line 96): the figure is the guard that keeps the endoskeleton hidden;
      `ruin-fake-gregory-signal-jammer` says the two "work against each other". Open the note with "Guards, and
      does not command:".
    - `lefty controls puppet` (line 60): holds (see 5).
    - `purple-guy controls spring-bonnie` (line 75): wears. The schema has `wore`, but `model.ts` would then fold
      Spring Bonnie into William Afton as a role. Open the note with "Wears, and dies in:".
    - `glamrock-freddy worked-with gregory` (line 91): shelters. `cassie worked-with gregory` (line 93): friends.
      `edwin-murray worked-with wa-signatory` (line 105): W.A. bids for his firm, and "No record shows his answer".
    - `michael-afton hunted william-afton` (line 50): he says he will come to find him, and no hunt is shown.
      `the-entity hunted cassie` (line 95): it appears and alerts the animatronics to her.
    - `partner-of` would have two senses after finding 3.

20. **`edwin-murray created f10-n4` [strong]** (line 102), note. "is the model's reading (high)". **status**.
    R21 (1) gives "high" to the two machines. For the join between M1 and the cabinet it says only "the model's
    reading, joined from four records", and `round4.md` 3.1 lists it as needing a record.
    Paste: `note: "He built M1, the babysitter: stated. That the cabinet F10-N4 is M1's mind is the model's reading, joined from four records (its voice, \"our home\", its grief for the child, and the message about its program); no record states it."`

21. **`scraptrap became burntrap` [theory]** (line 30), last sentence of the note. "The two are not unified: the
    model does not tell the rabbit in the code and these remains as one history." **reader**. "The two" has just
    meant the salvaged rabbit and the remains, and the sentence then names a different pair.
    Paste: `This tie does not fold the remains into William Afton, and the model does not tell the rabbit in the code and these remains as one history.`

22. **`springtrap same-as scraptrap` [strong]** (line 27), note. "FNaF3's last photograph shows the rabbit
    outlasting that fire". **overreach**. `fnaf3-it-burns-springtrap-hidden`: part of its head shows in the
    brightened photograph; survival is implied.
    Paste: `FNaF3's last newspaper photograph, brightened, shows part of the rabbit's head among what the fire left.`

23. **`purple-guy killed missing-children` [strong]** (line 63), note. "a minigame shows him beside five dead
    children". **overreach**. `fnaf2-foxy-go-go-go`: the figure "stands in the starting room and the children lie
    dead".
    Paste: `a minigame shows him smiling in the room Foxy sets out from while the five children lie dead`.

24. **`missing-children hunted purple-guy` [canon]** (line 64). **status**. The scene is shown: five child ghosts
    corner the purple figure. That those ghosts are the five of the clippings is the join that R1 (e) grades
    strong, and the page prints "the five children hunted the purple man" as canon.
    Paste: `status: "strong", note: "Five child ghosts corner the purple figure, and he dies in the suit: shown. That they are the five of the clippings is the inference."`

25. **`fredbear became golden-freddy` [theory]** (line 48), note. "It rests on the assumption that the tapes
    predate November 1987." **rulings** (R11: two assumptions, and it is the sealing that must predate).
    Paste: `It rests on two assumptions: that the sealing of the safe rooms in FNaF3's tapes predates November 1987, and that the bear was not walled in with the rabbit.`

26. **Missing.** `hw2-protagonist` has no tie of any kind, though R22 makes the player "a Fazbear technician ...
    whose mask passes to Cassie (medium-high)". **missing**.
    Paste: `{ from: "hw2-protagonist", to: "fazbear-entertainment", kind: "employed-by", status: "strong", evidence: ["hw2-glam-freddy-fazbear-technician", "ruin-security-mask-left-by-faz-technician"], note: "Glamrock Freddy addresses the player as a Fazbear technician, in a question inside a training level, and RUIN's mask is one \"left behind by some Faz-Technician\". Who the technician is, no game says." },`
    Also absent, and not asked for by any ruling in so many words: a tie between `f10-n4` and `the-mimic` (M2
    "began as a copy of my program", `secret-of-the-mimic-mail-received-5-min-ago`), and any tie for `the-blob`
    other than `molten-freddy became the-blob`.

## `src/data/model.ts`: clean

The code does what its header says, and the six groups it produces are the six the rulings make, each at the
ruling's grade (table above). It skips `wore` and `possesses` when the `from` end is a machine, so `ennard wore
michael-afton` does not fold Michael into Ennard. `became`, `controls` and `created` never merge, so the burnt
rabbit, the mass of parts and the two Murray machines stay their own records. Nothing to change here. The one
merge that prints more than its grade is a matter of the tie's kind and the UI's words (relations 4).

## `src/data/familyTrees.ts`: needs work

1. **Afton tree, members, column 4** (lines 15, 20, 24, 28, 29). **rulings** (R33). The column runs: the purple
   man, Springtrap, the salvaged rabbit, the rabbit in the code, the burnt rabbit under the Pizzaplex. A member's
   `col` is its column on the page, so the page shows one descent of five. The rabbit in the code sits directly
   above the burnt rabbit, whose note, "may be its remains (theory)", then reads as the remains of the rabbit in
   the code. The line from the salvaged rabbit to the burnt rabbit has to pass the rabbit in the code to get
   there. R33: "all four as one history is not told (low)".
   Paste: `{ id: "glitchtrap", gen: 1, col: 5, note: "read as something he left behind (theory)" },` and
   `{ id: "burntrap", gen: 3, col: 4, note: "may be what the fire left of the salvaged rabbit (low-medium)" },`
   (I could not draw the page; check the layout after the move.)

2. **Murray tree, `notes`** (line 68). "M1, the babysitter that took his dead wife's voice, and M2, a copy of
   M1's program built after his son's death". **rulings** (R21 (1), round four: "the voice of Fiona, his son's
   dead mother"; "no record of a marriage"; M2 was "built after M1 told him "Build another""; "David's death is
   implied, never stated").
   Paste: `notes: "Murray built two machines: M1, the babysitter that took the voice of Fiona, his son's dead mother, and M2, a copy of M1's program, built after M1 told him \"Build another\" and, as the model reads it, after his son's death, which the records imply and never state. No record says that Edwin and Fiona were married. What became of Murray is not shown. One continuous machine from the night of 1979 to RUIN is not shown either, and how the endoskeleton came to be under the Pizzaplex is not said."`

3. **Pizzaplex tree, `description`** (line 72). "are three things, and the model unifies none of them with
   another." **status**. Told flat. R20 (2): that the burnt rabbit is not the endoskeleton is medium. R21 (5):
   that the endoskeleton is not Help Wanted's anomaly is low-medium.
   Paste: `description: "The rabbit in the code and the woman it reached, the people of the Pizzaplex, and what lies under it. The model treats the rabbit in the code, the burnt rabbit under the Pizzaplex and the copying endoskeleton as three things and unifies none of them with another: that the burnt rabbit is not the endoskeleton is medium, and that the endoskeleton is not the rabbit in the code is only low-medium."`

4. **Second tree, `id: "emily"`** (line 34). **rulings** (R26, "Ids", in `model.md`: the group id `emily` carries
   a book-only name; such ids are to be renamed "when the layers are next touched ... and do not let the UI print
   them"). The tree's id is the same name. The layers have now been touched, `henrys-daughter` was renamed, and
   this was not; and unlike the group id, the page prints it, in the address bar, as `?tree=emily`.
   Paste: `id: "cassette-man"`. (The person group `emily` in `schema.ts` and `people.ts` lines 64 and 72 is the case
   the note names; the People page makes the anchor `#group-emily` from it.)

5. **Afton tree, `notes`** (line 31). "where rooms of his house are on the monitors of Afton's facility with his
   toy on the desk". **overreach** (R3 (1), round four; the same sentence as relations 8).
   Paste: `It rests on Sister Location, where FNaF4's night rooms are on the monitors of Afton's facility, with a Fredbear plush of FNaF4's design and a handset on the desk; it does not rest on a purple car or on Ultimate Custom Night.`

6. **Afton tree, `description`** (line 11). "and the machines they ended in". **consistency**. Michael did not end
   in Ennard: it wore him and left. No record places the crying child in Fredbear (R6), and the tree's own notes
   say so. Only Elizabeth "ended in" a machine, and William in a suit.
   Paste: `... whom the model reads as his sons (medium, at its lower end), and the machines bound up with them: the suit he died in, the machine that took Elizabeth, the machines that wore Michael, and the bear that bit the younger boy.`

7. **Murray tree, `description`** (line 56). "His first machine, M1, is read as the cabinet F10-N4 (high)" and
   "the two clients named in his mail". **status**. The ruling gives the join no figure (see relations 20). W.A.
   is a client only if the letters are Fazbear's, which R2 (3) grades medium-high, and Hen is named in an audio
   log.
   Paste: `description: "Edwin Murray's household, the two machines he built for it, the client he calls Hen and the party that signs W.A. The model reads the cabinet F10-N4 as the mind of his first machine, M1: no record states it. The copying endoskeleton under the Pizzaplex is most likely his second machine, M2 (medium-high). The signer W.A. is most likely William Afton (medium); who Hen is, no game says."`

8. **Members with no line.** **missing**.
   - No tie of any kind inside its tree: `the-blob` and `hw2-protagonist` (Pizzaplex). The second is fixed by
     relations 26 only if `fazbear-entertainment` joins the tree; otherwise its note has to carry it.
   - No line in the default view, because the only ties are `created`, `controls`, `killed` or `hunted`: `fredbear`
     (Afton); `lefty` (second tree); `f10-n4` and `the-mimic` (Murray, where Cassie and Gregory then float as a
     pair); `the-mimic` (Pizzaplex).
   - The tie the Pizzaplex tree is about, `glitchtrap controls vanny`, is hidden by default.
   - `the-entity` is in no tree, though the Pizzaplex tree covers RUIN and two ties name it (lines 95 and 96).
     Paste, if wanted: `{ id: "the-entity", gen: 4, col: 4, note: "the guard on the endoskeleton" },`

9. **Second tree, member `missing-children`, note "a June 26th"** (line 40). **dates** (R8: "June 26 is two
   children's date").
   Paste: `note: "five linked to one June 26th incident"`.

10. **Pizzaplex tree, members** (lines 81 and 86). "may be its remains (theory)" has nothing for "its" to refer
    to: the salvaged rabbit is two rows up in another column. `the-mimic` sits directly under `burntrap`, in a
    tree whose point is that they are not one. **reader**.
    Paste: `{ id: "burntrap", gen: 2, col: 4, note: "may be what the fire left of the salvaged rabbit (low-medium)" },` and
    `{ id: "the-mimic", gen: 3, col: 4, note: "behind the concrete; not the burnt rabbit's body (medium)" },`

11. **Second tree, smaller points.** **status**.
    - Member `puppet`, "she stays on in it" (line 47): flat, where R7 has medium-high. Paste: `"she most likely stays on in it"`.
    - `description` (line 35), "Four of the five most likely stay on in the four mascots (medium-high)": R30 and
      the ties add "until the killer takes the machines apart". Paste: `Four of the five most likely stay on in the four mascots until the killer takes the machines apart (medium-high);`

## `src/data/people.ts`, lines 517 to 1295: minor fixes

Every quotation is verbatim. No entry gives a figure an identity its records do not, apart from the three
duplicates. The findings are local: three entries to fold away, two portraits, four sentences that round four
banned, two wrong records, two aliases.

1. **`phantom-balloon-boy`** (line 1189), the whole entry. **consistency**. "Phantom BB, in Scott's teaser",
   marked as a canon name, is the figure of `phantom-bb` (line 1168), and its own summary says so. It exists only
   because one record is tagged with a stray id.
   Fix: in `scottgames-site-fnaf3-guess-who` set `"people": ["phantom-bb"]`; delete the entry; add to
   `phantom-bb.summary`: ` Scott's teaser of it reads "Guess who?" [[scottgames-site-fnaf3-guess-who]]`, and the
   id to its `evidence`.

2. **`withered-chica`** (line 1224) and **`withered-bonnie`** (line 1217), the whole entries. **consistency**.
   Each is the older machine of `chica` and `bonnie` as Ultimate Custom Night shows it. `chica.summary` already
   quotes `ucn-withered-chica-toysnhk` and repeats the same theory sentence. Every other effigy of that game is
   told in its machine's entry (`mangle`, `nightmare-freddy`, `nightmare-fredbear`, `nightmare`).
   Fix: retag `ucn-withered-chica-toysnhk` to `chica`, and `ucn-withered-bonnie-prison` and
   `ucn-withered-bonnie-consequences-of-failure` to `bonnie`; delete both entries.
   Paste into `chica.summary`, replacing its last sentence: `In Ultimate Custom Night the older Chica's figure says "I was the first! I have seen everything!" and "I have seen him. The one you shouldn't have killed." [[ucn-withered-chica-toysnhk]]`
   Paste at the end of `bonnie.summary`: ` In Ultimate Custom Night the older Bonnie's figure asks "What is this new prison? Is it me trapped, or is it you? Perhaps it is us both." [[ucn-withered-bonnie-prison]]`

3. **`golden-freddy.theory`** (line 554). "Wherever the dead are counted there are four and one, and the one is
   marked by this bear (medium-high)." **rulings** (R8 (7), round four; the same sentence as relations 7).
   Paste: `In the seven counts of the dead that the model lists there are four and one more, and in four of the seven the one more is marked by this bear (medium-high for the pattern). Two counts show five alike, and one screen shows four heads and no fifth [[fnaf3-good-ending-heads]].`

4. **`golden-freddy.theory`** (line 554). "this empty costume is the second of the two springlock suits ...
   Ultimate Custom Night's Death Coin turns one into the other". **rulings** (R16, round four: was "the Death
   Coin turns Golden Freddy into Fredbear"; now, used on Golden Freddy alone at level 1, "it makes Fredbear
   attack the player; no text explains it". R11: the bear "sits limp like an empty costume", never an empty
   costume flat).
   Paste: `On the model's reading of the yellow suit (low-medium), this bear is the second of the two springlock suits, the bear that FNaF4 calls Fredbear. In Ultimate Custom Night the Death Coin, used on Golden Freddy alone at level 1, makes Fredbear attack the player, and no text explains it [[ucn-death-coin-fredbear]].`

5. **`nightmare-freddy.theory`** (line 808). "Its line makes the accuser of Ultimate Custom Night the one who
   remade FNaF4's Nightmares". **rulings** (R16, round four: 'Not "he remade the Nightmares": one Nightmare says
   so of itself').
   Paste: `theory: "Its line says of itself that it was remade by the one the player should not have killed. No other Nightmare says so. It is one of that game's links toward FNaF4's crying child as the accuser, which the model holds only as the live alternative (low; see ((ucn))).",`

6. **`nightmare.theory`** (line 800). "They are part of what leans the model toward William Afton as that game's
   player, and only as a lean". **rulings** (R16: "In the UCN chapter only ... with the Michael reading in full
   beside it"; R33: "UCN's lean only in the UCN chapter"). `nightmarionne.theory` shows the right way to do it.
   Paste: `theory: "Its lines in Ultimate Custom Night speak of the player's wickedness and of what will not be spared. Who the player is, the game does not say, and the model argues it in that game's chapter only (see ((ucn))).",`
   Its summary also tells the shared sounds flat, where `fnaf4-nightmare-shares-fredbear-sounds` says they "were
   not checked by ear". Paste: `which the wiki's audio listing reports as using Nightmare Fredbear's laughter and sounds`.

7. **`fredbear.summary`, first sentence, and "the diner" in three other entries** (lines 558, 566, 1077, 1084).
   "The yellow bear of Fredbear's Family Diner." **overreach** (R2, round four: "no game puts that pair in a
   place called Fredbear's Family Diner"; `fnaf4-diner-unnamed`: FNaF4 "never prints the restaurant's name").
   The revised chapters now write "the restaurant".
   Paste, in `fredbear.summary`, for the first sentence: `The yellow bear on the stage of FNaF4's restaurant, a place that no screen of that game names [[fnaf4-diner-unnamed]].` And for the sentence that begins "It performs on a stage": `It performs on a stage beside a yellow rabbit [[fnaf4-fredbear-spring-bonnie-shadows]]. A hidden FNaF3 minigame shows an unlabelled yellow bear and a yellow rabbit on one stage, which the model reads as the same pair [[fnaf3-stage01-fredbear-spring-bonnie]].`
   Paste, `fredbear.aliases`: `["the yellow bear of FNaF4's stage"]`.
   `fredbear-plush.summary`: "inside the diner" to `inside the restaurant`. `fredbear-performer.summary`: "at the
   diner's exit" to `at the restaurant's exit`. `spring-bonnie-performer.summary`: "in a back room of the diner"
   to `in a back room of FNaF4's restaurant`.

8. **`ennard.image`** (line 600), `sl-custom-night-michael-ejects-ennard.png`. **wrong record** (image). The
   picture is the purple walker of the Custom Night cutscene, bent forward, and its own caption says "the purple
   man about to eject Ennard". Ennard is not in it. No file in `public/img/` shows Ennard.
   Fix: remove `image` from the entry.

9. **`toy-chica.image`** (line 768), `ucn-toy-chica-finale.jpg`. **wrong record** (image). It is the schoolgirl
   of Ultimate Custom Night's parody cartoon, not the machine of the 1987 restaurant that the entry describes.
   Paste: `image: "fnaf2-help-wanted-ad.jpg"` (FNaF2's own advertisement, with the three new machines; `toy-freddy`
   already uses it, and `toy-bonnie`, which has no image, could too).

10. **`scraptrap.summary`, first sentence** (line 526). "The burnt rabbit animatronic salvaged from the alley in
    Pizzeria Simulator [[ffps-salvage-order]]." **wrong record**. That record lists the four machines and their
    order; it has neither "alley" nor any description. The record of what it looks like,
    `ffps-scraptrap-alley-remains` ("a torn olive-green suit ..."), is the portrait's own record and is not in
    the entry. No record says "burnt": that is the inference that it is Springtrap after a fire.
    Paste: `The torn rabbit animatronic found in the back alley and offered for salvage in Pizzeria Simulator [[ffps-scraptrap-alley-remains]] [[ffps-salvage-order]].` Add `"ffps-scraptrap-alley-remains"` to `evidence`.
    In `theory`, "That it is FNaF3's Springtrap, burnt a second time" counts one fire too many for the rabbit as
    salvaged. Paste: `That it is FNaF3's Springtrap, after the fire at Fazbear's Fright, is a strong inference from its own words and from the suit.`

11. **`molten-freddy.summary`, last sentence** (line 614). 'The salvage tapes say of such a machine "we are unsure
    of its origins" [[ffps-salvage-origins-unknown]].' **wrong record** (the same point as relations 15: that is
    the Tuesday-to-Thursday tape, and this is Monday's machine).
    Paste: `The first salvage tape, played on its night, says only that things are found in the alley "quite often" and "we aren't sure why" [[ffps-salvage-first-tape-alley]].` In `evidence`, replace `ffps-salvage-origins-unknown` with `ffps-salvage-first-tape-alley`.
    In `theory`, 'its own lines say "I" and "me" [[ffps-molten-freddy-knock-knock]]': "me" is in
    `ffps-molten-freddy-lines`. Paste: `[[ffps-molten-freddy-knock-knock]] [[ffps-molten-freddy-lines]]`.

12. **`shadow-bonnie.aliases`** (line 668). "Shadow Bonnie (a fan name)". **no record**. The archive's records say
    so (`fnaf2-shadow-bonnie-office`), but Scott's own "Character Guide" for Ultimate Custom Night prints "RXQ aka
    Shadow Bonnie: He will cause your office to become pitch black for about ten seconds. There is no way to
    avoid him." It is the same Steam post that `scott-ucn-character-guide-afton` records (15 June 2018); I read it
    through Steam's news feed. By R26's own test this is Scott's word, like "Scraptrap", and not a fan's.
    Fix: add a record for that line, then paste `aliases: ["RXQ, also known as Shadow Bonnie (Scott's guide to Ultimate Custom Night)", "RWQFSFASXC (a file name)"]`. The tier R26 gives the label is for the adjudicator.
    The same guide prints "Phantom Mangle", "JJ", "Withered Chica", "Withered Bonnie", "The Marionette", "Phantom
    BB", "Nightmare BB" and "Dee Dee". `phantom-mangle` ("the burnt Mangle of Fazbear's Fright") and `jj` ("the
    figure under the desk in FNaF2") could carry Scott's names as aliases once the record exists.

13. **`the-entity.aliases`** (line 684). "the Entity (a fan name)". **unsupported**. R26 marks this label
    "unverified", and the records disagree: `hw2-mimic-teaser-mxes-ending` says "RUIN's Helpi calls it 'the
    entity'", and `ruin-the-entity` says "Helpi's lines were not retrieved".
    Paste: `"the Entity (the wiki's label; whether RUIN's Helpi says \"the entity\" is not verified)"`.

14. **`golden-freddy.summary`** (line 550). "ends on its scream, one frame after a fifth body". **overreach**.
    `fnaf2-give-gifts-give-life` was revised at about 03:30 on 3 October, after this entry was written: the fifth body
    "is reported to show", "the wiki's report", with "no capture ... on file".
    Paste: `The minigame Give Gifts, Give Life ends on its scream, and a fifth body is reported to show for one frame before it (the wiki's report; no capture is on file) [[fnaf2-give-gifts-give-life]], and the last child at Happiest Day's table wears its mask [[fnaf3-happiest-day]].`

15. **`toy-bonnie.summary`** (line 759). "Thirty years on, its empty head is in a box of relics". **dates** (R24
    (5) and the dates list: the thirty years count from a closing, most likely FNaF1's restaurant's; the sentence
    before this one is the 1987 closing).
    Paste: `By the time of Fazbear's Fright its empty head is in a box of relics in the attraction's office [[fnaf3-office-box-toy-heads]].`

16. **`desk-man.theory`** (line 834). "FNaF World's frame is outside the story". **rulings** (R17: the adventure
    is outside; the frame voice is "a deliberate echo"; the man at the desk is "a Sister Location teaser").
    Paste: `theory: "FNaF World's adventure is outside the story, and the model places this scene nowhere in it. It is a teaser for Sister Location: it announced Circus Baby before that game, and identifies nobody. See ((edges)).",`
    Its `status`, "Found dead at his desk", says more than `fw-desk-man-found-dead` shows. Paste: `status: "Last shown slumped over his desk in a dark red pool, in a game whose adventure stands outside the story.",`

17. **`fredbear.status`, `firstAppearance` and `image`** (lines 559 and 560). **consistency**. "Not shown after the
    bite." sits beside a theory that reads Golden Freddy as this suit, a tie that says so (line 48), and
    `ucn-death-coin-fredbear`, in which Fredbear attacks the player. `firstAppearance: "fnaf3"` and the portrait
    `fnaf3-stage01.png` both rest on FNaF3's unlabelled yellow bear; the bear a game names is FNaF4's.
    Paste: `status: "Not shown in the story after the bite. On the model's reading of the yellow suit (low-medium) it is the slumped yellow bear of the first two games (see {{golden-freddy}}).", firstAppearance: "fnaf4", image: "fnaf4-bite-fredbear-stage.png",`

18. **`firstAppearance` that its own records contradict.** **consistency**.
    - `nedd-bear` (line 1250) and `pigpatch` (line 1264): "ucn". `ffps-already-inside-sign` names both as catalogue
      items of Pizzeria Simulator. Paste: `firstAppearance: "ffps"`, and open each summary with `A catalogue item of Pizzeria Simulator [[ffps-already-inside-sign]] and a figure of Ultimate Custom Night.`
    - `dee-dee` (line 1285): "ucn", though its summary says "A figure from FNaF World". Paste: `firstAppearance: "fnaf-world"`.
    - `glamrock-endo` (line 1027): the name is "the Pizzaplex's learning endoskeletons" and the only record is a
      Help Wanted 2 level. Paste: `name: "the learning endoskeletons of Help Wanted 2's Endo Warehouse"`.
    - Happy Frog, Mr. Hippo, Orville Elephant, Music Man and Rockstar Bonnie are, by my memory, the same kind of
      catalogue item. No record says so: a lead to check, not a finding.

19. **Claims with no citation where a record exists.** **uncited**.
    - `springtrap.summary`, first sentence (line 518). Paste: `The decayed rabbit animatronic that the makers of Fazbear's Fright find, after a lead about a boarded-up room, and put in their attraction [[fnaf3-call1-boarded-room-lead]] [[fnaf3-call2-found-a-real-one]].` Add both ids and `fnaf3-n5-springlock-death`, the strongest record for who it is, to `evidence`.
    - `glitchtrap.status` (line 535) **(round four)**. Paste: `status: "One ending of Help Wanted 2 shows a tiny copy of it crushed by a rabbit-masked silhouette [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN, which follows it in the story, still has a rabbit in the mask: the shadow of a rabbit figure on the hideout wall, as the wiki's summary reports it [[ruin-vanny-hideout-glitchtrap-shadow]].",`
    - `the-princess.theory` (line 697), the same phrase **(round four)**. Paste: `one ending shows a tiny copy of the rabbit crushed [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN still has a rabbit in the mask, a shadow on the hideout wall that the wiki's summary reports [[ruin-vanny-hideout-glitchtrap-shadow]] (low-medium that the remedy holds).`
    - `candy-cadet.summary` (line 709) leaves out its Help Wanted 2 story. Paste before the RUIN sentence: `In Help Wanted 2 it tells of a young woman led by a friendly boy into a witch's oven [[hw2-candy-cadet-witch-story]].` Add the id to `evidence`.

20. **`nameStatus: "canon-name"` with no record of a game printing the name.** `minireena` (line 1055), `bidybabs`
    (line 1062), `xor` (line 1289). **no record**. The records use the three names only in the archive's own
    descriptions, and the page prints "A name the canon gives." Leads: Scott's patch notes for Sister Location
    (Steam, 8 October 2016) say "Minireenas"; the wiki gives "XOR" to a spoken interview of Scott's; "XOR" is not
    in his Character Guide. Fix: add records, or set `nameStatus: "descriptor"` with a plain name until they exist.
    `mike-itp` (line 906), "Mike, of Into the Pit", is a printed name with a descriptor joined on; the page calls
    the whole of it the canon's.

21. **Smaller points where the text says more than its record.** **overreach**.
    - `toy-chica.theory`: "The cartoon's lie about a dog is the lie of Fruity Maze, told as a joke". The record's
      note: "The cartoon is a parody; the parallel is interpretation." Paste: `The cartoon's lure, a lie about a dog, parallels Fruity Maze's, where a girl whose dog is dead is told "He's not really dead."; the parallel is the model's reading, and it builds nothing on it [[ffps-fruity-maze-follow-me]].`
    - `ballora.summary`: "a remote activation that points to a directive filed with Circus Baby". The sheet says
      "see: Circus Baby dir07"; "What 'dir07' is, the sheet does not say". Paste: `a remote activation with the note "see: Circus Baby dir07"`.
    - `the-entity.summary`: "promises to jam it" (the voice says it has already fitted Helpi with a signal jammer),
      and "the same figure comes out of a matching cabinet" in Help Wanted 2 (the record: a rabbit-shaped figure
      and "a machine with a keypad"). Paste: `says it has fitted Helpi with a signal jammer against it` and `In Help Wanted 2 a rabbit-shaped figure of the same kind comes out of a machine with a keypad in a van and is pulled back in`.
    - `the-blob.summary` quotes "Something tunneled down... broke everything." as if of the mass; the record says
      that is "the wiki's inference". Its `status`, "Last seen ... in one ending", passes over the same record's
      glimpse of it in RUIN. Paste for the summary: `In RUIN the voice posing as Gregory says "Something tunneled down... broke everything."; the wiki takes that for the mass, which it reports glimpsed in a hole there [[ruin-something-tunneled]].`
    - `fredbear-plush.theory`: "whose monitors show the child's bedroom". R4: the bedroom is "most likely the
      child's own". Paste: `whose monitors show FNaF4's bedroom`.
    - `glitchtrap.theory`: "it wears his costume". `hw-rabbit-figure-appearance`: "the game names neither the
      figure nor the costume". Paste: `it wears a yellow rabbit costume, as he did`.
    - `anna-kwemto.theory` is flat where R18 has medium-high. Paste: `The model reads her firm as a second one, apart from the studio that made the VR game, with an outbreak of its own (medium-high; see ((digital))).`
    - `circus-baby.status`, "Later rebuilt": no game shows it (the tie at line 41 says so). Paste: `Most likely rebuilt later, and salvaged in Pizzeria Simulator as Scrap Baby.`
    - `springtrap.status`, "Outlasts the fire at Fazbear's Fright, by the newspaper photograph": implied. Paste: `Part of its head shows in the newspaper photograph taken after the fire at Fazbear's Fright.`
    - `golden-freddy.summary`, "it does nothing on the first five nights": the record says it does not attack.
    - `shadow-freddy.aliases`, "(a fan name)": the record says the name is the wiki's "and, it says, in the files".
    - `the-princess.summary`, "A Pizzaplex employee writes": it is an exit interview.

22. **`status` lines that are not fates.** **reader**. 75 of the 104 entries put, under the heading "What became
    of it", a line that says what the figure is: "A figure on Ultimate Custom Night's roster." (10), "Known only
    from Special Delivery's emails." (11), "An apparition of Fazbear's Fright." (7), "Unnamed." (4), "A machine."
    (2), "A collectible.", "Outside the story." and so on. The UI hides the heading only when the field has no
    letters. Fix: set `status: "—"` where nothing is known of an end, or give the UI a second heading for these.

23. **Portrait captions** (in `src/data/credits/`, shown under entries of this range). **rulings** (R26: "Headings
    and captions carry the descriptor").
    - `sb-burntrap-and-tangle.jpg`, on `burntrap` and `the-blob`: "Burntrap and Tangle in the burning underground".
      Paste: `'Burn It All Down' ending: the burnt rabbit under the Pizzaplex (left) and the mass of parts (right) as the underground burns`.
    - `sl-custom-night-michael-ejects-ennard.png`, on `ennard`: "the purple man about to eject Ennard". "The purple
      man" is this archive's name for the killer of the minigames, and R1 has "Sister Location's purple walker is
      Michael". Paste: `the purple walker about to throw up the mass of wires`.

## The ten most serious

1. **Relations 1.** William Afton is drawn as the one who works the Fredbear plush, at theory. R5 grades that low.
2. **Trees 1.** The Afton tree sets the purple man, Springtrap, the salvaged rabbit, the rabbit in the code and the
   burnt rabbit in one column, with "may be its remains" under the rabbit in the code. That is the one history
   R33 says the model does not tell.
3. **Relations 2.** "Vanny hunted Gregory", canon, "shown". No record shows a hunt, and round four took the word
   out of the order of events for that reason.
4. **Relations 4.** The rabbit in the code prints as "the same being as William Afton". R18 grades that sentence
   low; the merge behind it is right at medium only as "something he left behind".
5. **Relations 3 and trees 2.** Edwin and Fiona Murray are drawn as spouses, and M1 takes "his dead wife's voice".
   No record of a marriage exists, and round four says so.
6. **Relations 7, people 3, 4 and 5.** Three universals that round four struck are still in the data: "wherever
   the dead are counted", "the Death Coin turns one into the other", "the one who remade FNaF4's Nightmares".
7. **Trees 3.** "Three things, and the model unifies none of them" is told flat; one of the two separations is
   only low-medium.
8. **Relations 6.** Vanessa "is released" and makes the costume "because" he is watching. The release is
   low-medium and is the wiki's reading; "because" is not in the recording.
9. **Relations 5.** "Lefty controls the Puppet" is strong; the order of events has it inferred, at medium.
10. **People 1, 2, 8 and 9.** Three entries duplicate others, and two portraits show a different figure (a purple
    man for Ennard, a parody cartoon for Toy Chica).

Next in line: `fredbear` as "the yellow bear of Fredbear's Family Diner" (people 7); the lean on Ultimate Custom
Night's player told in the `nightmare` entry (people 6); the tree id `emily` in the address bar (trees 4); the
"unsure of its origins" tape given to the wrong machine (relations 15, people 11).

## Noticed outside the assignment

**Evidence records.**

- Tags that merge what the rulings keep apart. `sd-vintage-bonnie-reports`,
  `sd-springtrap-did-not-save-the-others` and `sd-springtrap-pulled-apart-put-back-together` are tagged
  `springtrap`, so they are filed on William Afton's page at strong; R18 and R33 have "low-medium that it is his
  body after the fire". Nine Into the Pit records are tagged with main-line people (`purple-guy`,
  `missing-children`, `golden-freddy`, `freddy-fazbear`, `bonnie`, `chica`), which files an adaptation "that the
  main games never place" (R23) under those people. Ten records of FNaF World, whose adventure R17 puts
  outside the story, are tagged `fredbear`, `circus-baby` or `purple-guy`. Three records of company staging are
  tagged `springtrap`
  (`hw-pizza-party-springtrap-window`, `hw2-fazerblast-fire-springtrap`, `hw2-springtrap-cutout-pq3-scream`).
- Stray people tags made the three duplicate entries: `phantom-balloon-boy`, `withered-chica`, `withered-bonnie`.
- No record holds the lines of Scott's Character Guide other than the one for Afton. The guide prints names that
  three record notes call fan or wiki labels: `fnaf2-shadow-bonnie-office` ("'Shadow Bonnie' is a fan name"),
  `fnaf2-custom-night-names` ("'Withered' is a fan/wiki label", which is true of FNaF2's screen and not of
  Scott's guide) and `fnaf2-jj-endo-puppet-visions` ("'JJ' and 'Endo-02' are wiki/Scott-era labels"). No record
  holds Scott's Sister Location patch notes.
- `ffps-molten-freddy-alley-wires-eyes`, notes: gives "we are unsure of its origins" to Molten Freddy; by
  `ffps-salvage-origins-unknown` that is the later tapes'.
- `hw2-mimic-teaser-mxes-ending` and `ruin-the-entity` disagree on whether Helpi says "the entity".
- `security-breach-vanessa-new-endo`, notes: gives "adapt to any costume" to "Fazbear's dispatcher"; R2 and R21
  have it as the voice on the radio inside the building.
- `fw-desk-man-found-dead`: the title says "found dead"; the claim shows him slumped in a dark red pool.

**Rulings and `model.md`.**

- R30's "Against" list cites `ffps-salvage-origins-unknown` for Molten Freddy; the Monday tape is
  `ffps-salvage-first-tape-alley`.
- R26 puts "Shadow Bonnie" in tier 3; Scott's guide prints it.
- R2's reasoning in `model.md` (line 292 as I read it) still has "calls one of those he burns "old friend"",
  against R28.
- `model.md` 5.1 row 5 still asks for a tie `william-afton created fredbear-plush`.
- R3 (2) says the boys are his sons at "medium" and R3 (3) says "medium, lower end" of the same thing. The data
  uses the lower figure throughout.
- The record ids that contain `toysnhk`, and the tag of that name (nine records), are still as R26's "Ids" note
  found them.

**`people.ts`, lines 1 to 516** (the other checker's range). `factcheck-7a.md` was written two minutes before
round four. A search of that range for the wordings round four struck, not a check, finds: "finds a rabbit suit
with a body in it" (`william-afton`, line 19) and "With his body inside it" (`spring-bonnie`, line 511);
"Wherever the dead are counted" (`missing-children`, line 87; `fifth-child`, line 95); "the volunteer who would
rather stay" (`michael-afton`, line 35; `ffps-franchisee`, line 192); "he remade the Nightmares"
(`one-you-should-not-have-killed`, line 143); "his dead wife's voice" and "built after his son's death"
(`edwin-murray`, line 448; `f10-n4`, line 480, with "(high)"); "one continuous actor" and "each admission comes
wrapped in a denial" (`fazbear-entertainment`, line 280); "who hunts Gregory through the Pizzaplex" (`vanny`,
line 342).

**The UI's fixed text.**

- `same-as` prints "is the same being as" for a form (relations 4) and for membership ("Gabriel is the same being
  as the five children").
- The heading "What became of it" over every `status` (people 22).
- Ids are shown in addresses, though the header of `people.ts` says they never are: `/people/<id>`,
  `?tree=emily`, `#group-emily`. `fazbear-board-member` names a company that the entry itself says the audio does
  not name; `the-blob`, `the-entity`, `shadow-bonnie` and `tape-girl` are tier-3 labels.
- The trees' default view hides the ties two of the trees are about (trees 8). With identities folded, the Afton
  tree draws "William Afton became the burnt rabbit under the Pizzaplex".
- `$WT/src/pages/People.tsx` line 10 (the theory worktree's own copy of the page) has the group caption "The
  partner and the daughter he lost".

**Other.** The validator passes with two warnings that do not concern these files
(`fnaf4-night8-no-story-text` and `scott-2014-faith-and-work` are listed as outside the story and also used by a
chapter). The comment over the last section of `people.ts` says "named or shown in single records"; many of its
entries cite two or three.

## Count of findings by type

Each numbered finding is counted once, by its main type. A finding with several bullets counts once.

| Type | `relations.ts` | `familyTrees.ts` | `people.ts` 517 to end | Total |
|---|---|---|---|---|
| rulings | 5 | 3 | 6 | 14 |
| overreach | 6 | 1 | 3 | 10 |
| status | 6 | 3 | 0 | 9 |
| consistency | 0 | 1 | 4 | 5 |
| wrong record | 1 | 0 | 4 | 5 |
| uncited | 3 | 0 | 1 | 4 |
| reader | 2 | 1 | 1 | 4 |
| dates | 1 | 1 | 1 | 3 |
| unsupported | 1 | 0 | 1 | 2 |
| no record | 0 | 0 | 2 | 2 |
| missing | 1 | 1 | 0 | 2 |
| misquote | 0 | 0 | 0 | 0 |
| **Total** | **26** | **11** | **23** | **60** |

`model.ts`: no finding. Fifteen of the 60 cite round four, which the data files predate. Eleven of them would
not stand, or would stand lower, without it: relations 2, 3, 7, 9, 10 and 16; trees 2; people 3, 4, 5 and 19.
The other four (relations 8 and 13, trees 5, people 7) stand on the records alone, and round four confirms them.
