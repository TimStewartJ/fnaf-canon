# Layer fix: `people.ts`, `relations.ts`, `familyTrees.ts`

One fix pass over the three files, against `factcheck-7a.md` (47 findings, as rewritten after round four),
`factcheck-7b.md` (60 findings), the orchestrator's messages, round four and round 4b of the rulings, and the
evidence records as the records editor left them in the working tree. The pass was committed as `9a11a24`; the
small task that followed it (the fourth message: the schema's new `says` field) is not committed. Only these three
files and this notes file were written.

State of the files: `people.ts` has 166 entries (167, less three duplicates, plus two new); `relations.ts` has 78
ties (84, less seven, plus one); `familyTrees.ts` has four trees. Every exported name and type is as it was. No
person id was renamed.

**The orchestrator's third message** (both reports read again; the words "is the partner of", "is the spouse of"
and "hunted") is answered in the section "The third message", the second section below. **The fourth message**
(`says` on the ties) is answered in the section after it.

## What was read, and when

- `factcheck-7a.md` three times: as it stood at 04:01, in full after it was rewritten at 04:52, and once more from
  top to bottom after the third message. `factcheck-7b.md` in full twice, the second time after the third message.
  Both files are as they were when first read in their final form (7a: 55,149 bytes, saved 04:52; 7b: 63,064
  bytes, saved 04:46).
- `rulings-brief.md`: round four, and then **round 4b**, which landed between 05:42 and 05:54 while this pass was
  running. It was read in full and applied (the killer's end, R1 (a), R2's day, R21's order, R26's name forms),
  with section 5 of `round4.md`. The last change, at 05:54, is about the headless Freddy in Fazer Blast and
  touches nothing in these files.
- **Evidence records.** The records editor reworded records under these files throughout the pass, in all six
  evidence files, until 07:16; its pass was committed at 07:21 (`37856e3`), before this one ended. By 06:19, 568 records differed from the last commit, and these files cite 264 of them. Each changed
  record was set beside every sentence here that cites it, and the sentences were brought into line ("Beyond the
  reports", parts 2 and 4). From 06:41 on the changes were followed through the records editor's own ledger
  (`$NOTES/../evw/ledger.txt` and its backup of 06:41) and by snapshots of the records, so that nothing between two
  comparisons was missed. The records were compared for the last time at the hour given under "Checks".

## The third message

**Both reports, read again as they stand.** Each numbered finding was set against the present text of the three
files, by eye and then by a script that looks for the faulty wording and for the fix. `factcheck-7a.md`: 47 of 47
are in the files. `factcheck-7b.md`: 59 of 60 are in the files, and the last (people 23, portrait captions) is in
`src/data/credits/`. Neither report had gained anything since its second reading. One finding moved in this
reading: 7b people 12, which had waited for a record (see "Findings").

**The merges (the first section of 7b).** `model.ts`, run on the data as it now stands, makes the six groups that
the report lists, each link at the grade the report gives, and nothing else:

| Shown as one | Folded in |
|---|---|
| William Afton | the purple man (strong); the signer W.A. (theory); Springtrap (strong); the salvaged rabbit (canon); the rabbit in the code (theory, with a note that opens "Not the man himself: that is low") |
| Michael | the older brother (theory); the franchisee (theory); Eggs Benedict (strong) |
| Elizabeth | Circus Baby and Scrap Baby, as machines she is in (strong) |
| the Cassette Man's daughter | the Security Puppet's child (strong); the Puppet (strong) |
| the five children | the fifth child (strong); the four names on the stones (theory); the four mascots (strong); Golden Freddy, through the fifth child (theory) |
| Vanessa | Ness (strong); the woman on the hidden call (theory); the rabbit costume (strong) |

No tie removed or changed after the second message was a merging tie. Hen, the crying child, the player and the
accuser of Ultimate Custom Night, the burnt rabbit under the Pizzaplex, the copying endoskeleton, the cabinet
F10-N4 and the figure from the M.X.E.S. cabinet are each unified with nobody.

**1. "Is the partner of", between the Cassette Man and William Afton.** The schema has no kind for what the game
says, so the tie has the nearest neutral kind, `worked-with`, at `theory`. That kind prints "worked with", which is
the model's reading (medium) and not the game's words. The note now opens with the game's words and says who says
them and to whom: "The game's words are "old friend": the Cassette Man says them, in the speech that ends Pizzeria
Simulator, to the one for whom he says the darkest pit of Hell has opened. He does not name that one; that it is
the salvaged rabbit, and so William Afton, is implied." The trap follows in R28's sentence ("four haunted
machines"), then the model's reading at medium, then "No record says what either man's standing in the business
was." This is now the only tie between the two men (see 3).

*What the interface should print for this tie:* from the Cassette Man's side, `calls him "old friend"`; from
William Afton's side, `called "old friend" by`; as a sentence, `The Cassette Man calls William Afton "old
friend"`; on a tree line, `old friend`. The status stays `theory`: the address is stated, but the speech names
nobody, so that it is said to William Afton is implied. Two ways to do it: a new kind in `RelationKind`
(`schema.ts`) with its words in `WORDS` (`integ/src/pages/people/ties.ts`); or an optional field on `Relation`,
for example `says?: string`, that replaces the kind's word for one tie. The second would also serve the ties in
the table below. I can change neither file.

**2. "Is the spouse of", for Edwin and Fiona Murray.** No `spouse-of` tie is left, and no `partner-of` tie
either. The tie between the two is now `worked-with` at `canon`, which prints "worked with": she joins the Murray
company, he records her voice, and she later tells him that the company is his now
(`secret-of-the-mimic-log-meet-up`, `secret-of-the-mimic-log-inheritance`). Its note keeps what the checker's
note said: "That the two were a couple is an inference, from what Edwin says to David's mother after she is gone,
"You were supposed to be here with me and David.", and from the cabinet that speaks in Fiona's voice and says "our
home". No record has a marriage, and no record uses the word wife."

The checker's own correction was `partner-of` (strong) (7b relations 3), and I had applied it. I changed it on the
last reading for two reasons. First, the kind would have printed "is the partner of" on two pages and on the
tree, for an inference, where a stated fact was to hand. Second, at about 07:15 the records editor reworded the
log of her death: "The log does not speak Fiona's name ... That the mother is Fiona, and that 'gone' means dead
..., is the reading the other recordings support." So "a couple" rests on a reading that is itself an inference,
and `fiona-murray parent-of david-murray` moved from canon to strong for the same reason (its note says which
recordings carry it). `edwin-murray parent-of david-murray` stays canon. Third, this is how the revised chapters
tell it: `makers` has "The puppeteer Fiona Murray joined it and became the designer of its characters" and "their
son is David Murray", the timeline has "the mother of his son", and none has wife, couple or partner. Her entry
and the tie now carry the designs too (`secret-of-the-mimic-log-creepy`: "is Fiona's design"). If a line that says
"couple" is wanted, it is one word in the tie (`partner-of`, strong), and the note already carries the reasons.

**3. "Hunted".** Round four's test is a record of a pursuit. The committed file had six `hunted` ties. Four are
removed and two stay.

- Removed: `vanny hunted gregory` (earlier in the pass). `michael-afton hunted william-afton`: he says "I'm going
  to come find you", and no record shows a search; the line is now in the note of `william-afton parent-of
  michael-afton`, with its record. `the-entity hunted cassie`: it appears when she wears the mask too long and
  alerts the animatronics to her, and no chase is on record; that is told in its entry. `one-you-should-not-have-killed
  hunted ucn-protagonist`: that he runs the night is the model's reading, and it is now in the note of the
  `killed` tie between the same two, with the same records.
- Also removed: the tie for the fire. The committed file had `cassette-man killed william-afton`, which I had
  turned into `hunted` ("Traps, in the game's own word"). A trap is not a hunt either. The trap is now told in the
  one tie between the two men, in R28's words, and `deaths.ts` already has no agent for the fire (`by: []`).
- Kept: `missing-children hunted purple-guy` (strong), where the record has the purple figure running from the
  five figures, who block the way out and corner him; and `the-mimic hunted cassie` (canon), where the chase of
  the Scooper ending is on record (`ruin-ending-scooper` and `ruin-mimic-lair-mcm-mascot-suits`, both now cited).

**Other ties whose printed word is not the records' word.** (This table is as it stood at the end of the pass.
The schema has since gained `says`, and every row is filled: see "The fourth message".) Each note opened with the
word the records support, as the checker asked (7b relations 19). The interface could print that word in place of
the kind's:

| Tie | The page prints | The records support |
|---|---|---|
| `cassette-man worked-with william-afton` (theory) | worked with | calls him "old friend" |
| `missing-children hunted purple-guy` (strong) | hunted | cornered |
| `purple-guy controls spring-bonnie` (strong) | controls | wore (the kind `wore` would fold the suit into William Afton in `model.ts`) |
| `circus-baby controls ennard` (strong) | controls | speaks for |
| `lefty controls puppet` (theory) | controls | holds (inferred, medium) |
| `the-entity controls the-mimic` (strong) | controls | guards: "was designed to keep it hidden" |
| `glamrock-freddy worked-with gregory` (canon) | worked with | shelters |
| `cassie worked-with gregory` (canon) | worked with | is the best friend of, by the store synopsis |
| `edwin-murray worked-with wa-signatory` (strong) | worked with | was approached by; no answer is on record |
| `edwin-murray employed-by fazbear-entertainment` (canon) | was employed by | was a contractor for |
| every `same-as` to a form or a group | is the same being as | is read as a form of; is one of |

The legend's own words are the interface's too: `TIE_FAMILY_LABEL.family` is "Family, partners and work", and
`TIE_FAMILY_HELP` lists "spouse, partner". After this pass the data has no `partner-of` tie and no `spouse-of`
tie, so both words can go from the legend.

## The fourth message: `says`

The schema's new field (`eebd5cc`) is filled on **34 of the 78 ties**, in `relations.ts`. Each phrase follows the
first name, has at most eight words, opens in lower case and has no full stop. The one that quotes is verbatim from
the `quote` of a cited record ("old friend", `ffps-completion-old-friend-hell`). On a `theory` tie the phrase reads
as a reading. `says` is the last field on a tie's line. My checker now tests all of this on every tie.

**The two ties you named.**

| Tie | `says` | The page prints |
|---|---|---|
| `cassette-man worked-with william-afton` | `calls {to} "old friend"` | The Cassette Man calls William Afton "old friend" (strong) |
| `edwin-murray worked-with fiona-murray` | `ran the firm that {to} designed for` | Edwin Murray ran the firm that Fiona Murray designed for (canon) |

For Edwin and Fiona, "worked beside" would only have said "worked with" again. What the cited logs say of the two
is that the company became his and that the look of its animatronics is her design
(`secret-of-the-mimic-log-inheritance`, `secret-of-the-mimic-log-creepy`), so the phrase says that.

**The table of the third message** (fifteen ties: nine by name, and the six `same-as` ties that join a form or a
group).

| Tie | `says` |
|---|---|
| `missing-children hunted purple-guy` (strong) | `cornered` |
| `purple-guy controls spring-bonnie` (strong) | `climbed into` |
| `circus-baby controls ennard` (strong) | `was the voice of` |
| `lefty controls puppet` (theory) | `most likely holds` |
| `the-entity controls the-mimic` (strong) | `is read as part of the guard on` |
| `glamrock-freddy worked-with gregory` (canon) | `sheltered` |
| `cassie worked-with gregory` (canon) | `is called {to}'s best friend` |
| `edwin-murray worked-with wa-signatory` (strong) | `was sent a letter by` |
| `edwin-murray employed-by fazbear-entertainment` (canon) | `was a contractor for` |
| `glitchtrap same-as william-afton` (theory) | `is read as something left behind by` |
| `fifth-child same-as missing-children` (strong) | `is one of` |
| `victim-gabriel`, `victim-fritz`, `victim-susie`, `victim-jeremy` `same-as missing-children` (theory) | `is read as one of` |

Where a phrase differs from the word I gave in that table, it is to stay nearer the record: "climbed into" for
"wore" (the scene shows him climb into the suit; that he wore it for the murders is medium); "was the voice of"
for "speaks for" (the record: "The voice is Circus Baby's", and who the speaker is "is an interpretive point");
"was sent a letter by" for "was approached by" (the two records are one letter, and no answer is on record); "is
read as part of the guard on" for "guards" (the entry and the tie's note both call it a reading); and "is read as
something left behind by" for "is read as a form of" (R18's own words).

**Seventeen more, where the kind's verb said more than the records and I had not listed the tie.**

| Tie | `says` | Why the kind's verb would not do |
|---|---|---|
| `fazbear-entertainment created lefty` (canon) | `has its name on the blueprint of` | No record says who built Lefty; R31 has only "marked Fazbear Entertainment, Inc" |
| `missing-children possesses` `freddy-fazbear`, `bonnie`, `chica`, `foxy` (strong) | `include one who haunts` | "The five children haunts Freddy Fazbear" put all five in each mascot; the model has one in each |
| `fifth-child possesses golden-freddy` (theory) | `is read as the child behind` | R8: the bear is the fifth child's (medium), and how is withheld; "haunts" says how |
| `circus-baby killed elizabeth-afton` (strong) | `took` | The rulings and `deaths.ts` say "takes"; the death is the reading |
| `fredbear killed crying-child` (canon) | `bit` | The bite is shown; the death is implied (medium-high) |
| `older-brother killed crying-child` (canon) | `pushed {to}'s head into Fredbear's mouth` | The same; `deaths.ts` already keeps it from being filed as a killing by the brother |
| `scraptrap became burntrap`, `molten-freddy became the-blob`, `fredbear became golden-freddy` (theory) | `may have become` | Each is low-medium, and R33 asks for "may be" |
| `vanessa wore vanny` (strong) | `is most likely` | "Vanessa wore Vanny" names a person as a costume; the ruling is "most likely Vanessa" |
| `the-mimic hunted cassie` (canon) | `lured and chased` | The records' words are "chases" and a lure; none has "hunt" |
| `edwin-murray worked-with hen` (canon) | `got a change order from` | The change order is what is stated |
| `dispatch employed-by fazbear-entertainment` (canon) | `says it is with` | The record now has "a voice that says" it is dispatch with the company |
| `edwin-murray created f10-n4` (strong) | `built M1, which {to} is read to be` | No record says that he built the cabinet; that it is M1 is the model's reading |

**Four statuses now follow the sentence that is printed.** The kind is unchanged in every case.

- `cassette-man worked-with william-afton`: theory to **strong**. The sentence was the model's reading ("worked
  with", medium). It is now the address, which is stated; that it is said to William Afton is implied, which is
  what strong means here. Under a theory mark the address itself would have read as the theory. The reading that
  the two men worked in the same business stays in the note at medium.
- `fazbear-entertainment created lefty`: strong to **canon**. The mark on the blueprint is stated. The tie was
  canon until 7b relations 12, which lowered it only because of the verb "created".
- `fredbear killed crying-child` and `older-brother killed crying-child`: strong to **canon**. Both acts are shown.
  The death, implied at medium-high, stays in the two notes and in `deaths.ts`.

No merging tie changed kind or status, and `model.ts` makes the same six groups.

**Notes.** Nine notes opened with a correction of the kind's verb ("Holds, not commands:", "Guards, and does not
command.", "Wears:", "Corner him:", "Shelters:", "Friends:", "Lures and chases:", "Speaks for, as the records have
it:", "Approached by, and"). The verb is no longer printed, so those leads are gone and each note opens on its
first fact. The note on Lefty's blueprint now says that the Cassette Man running his trap through the company is
medium-low (R31). The header comment of `relations.ts` describes `says`.

**The kind's own verb is kept on 44 ties**: every `parent-of` and `sibling-of`; the identity ties, where "is the
same being as" is the claim at its grade; "haunts" for Elizabeth, the Cassette Man's daughter and William Afton,
which is the model's claim at strong; the four `afton-robotics created` ties (the order of events has "Afton
Robotics builds the Funtimes", firm); "controls" for the rabbit in the code and Vanny (R19's own word) and for the
burnt rabbit and Glamrock Freddy (shown); and the rest, where a record states the verb. One of them you may want
to look at: `vanessas-father-bill parent-of vanessa` prints "Bill is the parent of Vanessa" at canon, and the
record has the name only in a therapist's question. The verb is true; the doubt is in the entry's display name,
which is outside this task.

**Other files.** `familyTrees.ts`: one member note, to agree with its tie ("the guard on the endoskeleton" is now
"read as part of the guard on the endoskeleton"). `people.ts` and the Pizzaplex tree's notes changed only through
the credits script, below.

**For the interface.** Two phrases put a possessive after the name (`{to}'s`). A phrase has no inverse form, so
the second person's page needs the whole sentence. On a merged page the phrase follows "As the purple man," as the
kind's verb did.

**The credits script ran**, at 08:12. `security-breach-credits-vanessa-vanny-two-parts` landed in
`sb-mimic.json` at 08:10 (`af63bef`), worded as the draft was. The record was read before it was cited. The script
added it to the `evidence` of `vanessa wore vanny`, of `vanessa` and of `vanny`. The tie's note now ends: "Security
Breach's cast list counts against it too: it gives Vanessa and Vanny as two parts with two performers. A credit
names a voiced part and not a person in the story, so the list says neither that they are two women nor that they
are one." Each entry's `theory` and the Pizzaplex tree's notes have a sentence to the same effect. The schema has
no place for a record that counts against, so the note names it as one. The tie stays `wore`, strong: R19 has not
been turned yet (item 1 below).

**Checks**, at 08:12, after the script: `npx tsx scripts/validate.ts` OK; `npx tsc -b` clean; `wordcheck.py` as before; my
checker finds no problem in the 34 phrases or anywhere else.

## Findings

**`factcheck-7a.md`: 47 findings, 47 applied, none rejected.** Two were applied with wording other than the
checker's, for reasons the records give:

- 47 (`one-you-should-not-have-killed`, `fruity-maze-girl`: "the older Chica's figure"). The entries say
  "Withered Chica, the older Chica as that game shows her". The checker's attribution, "(the name in Scott's guide
  to that game)", is not in the sentence, because no record holds that line of the guide as a quotation. At 06:45
  the records editor put the fact in a note (`fnaf2-custom-night-names`: Ultimate Custom Night's roster and Scott's
  guide "later use 'Withered Chica' and 'Withered Bonnie'"), so `chica` and `bonnie` now carry those names as
  aliases with that source, and cite the record.
- 42 (ids and the header). The header of `people.ts` now says that ids appear in page addresses. No id was renamed
  (other files link to them), and the group id `emily` is left for the orchestrator, as instructed.

**`factcheck-7b.md`: 60 findings. 59 applied, none rejected, one not in my hands.**

- Relations, 26 of 26. Three were applied by removing the tie: 1 (`william-afton controls fredbear-plush`), as the
  checker asked; and 2 (`vanny hunted gregory`) and 16 (`vanny killed glitchtrap`), where the checker offered a new
  note to paste. A note cannot mend those two, because the page prints the kind's own word ("Vanny hunted
  Gregory", "Vanny killed the rabbit in the code") whatever the note says. What the checker's notes say is now in
  the entries of `vanny` and `glitchtrap`, with the same records. Three were applied in another way than the
  checker's: 11 (the tie between the Cassette Man and William Afton) by changing the kind, where the checker kept
  `partner-of` and reworded the note; 3 (Edwin and Fiona Murray) by `worked-with` at canon, where the checker gave
  `partner-of` at strong; and 19 (kinds that say something other than their notes), where the note leads are
  applied and two of the ties it lists (`michael-afton hunted william-afton`, `the-entity hunted cassie`) are now
  removed. The reasons are in "The third message".
- Trees, 11 of 11.
- People, 22 of 23.
  - 12, `shadow-bonnie`, alias "Shadow Bonnie (a fan name)": **applied as far as the records and the ruling now
    go.** The checker asks for "RXQ, also known as Shadow Bonnie (Scott's guide to Ultimate Custom Night)" once a
    record holds the line. At 06:45 the records editor wrote the line into two notes
    (`fnaf2-shadow-bonnie-office`: "'Shadow Bonnie' is the players' name ...; Scott's Ultimate Custom Night
    character guide later has 'RXQ aka Shadow Bonnie'"). The alias now reads "Shadow Bonnie (a fan name; Scott's
    guide to Ultimate Custom Night later has RXQ aka Shadow Bonnie)". It keeps the tier-3 mark because
    `round4.md`, 5.2, moves the label to tier 2 only "with a record of the line", and a note is not that record.
    The same notes gave `jj` the alias "JJ (the name in Ultimate Custom Night's roster and in Scott's guide to
    that game)" and a sentence in its summary.
  - 23, portrait captions: they are in `src/data/credits/`, not in these files.

**From the orchestrator's second message: all done but one.**

- The marked fan-name aliases are kept, and each provenance was checked against the records. Three were made
  more exact: "Shadow Freddy (a fan name; the wiki says the game's files use it too)", from
  `fnaf3-eon-shadow-freddy-follow-me`; "the Entity (the wiki's label; whether RUIN's own dialogue uses the word
  is not verified)", from `ruin-the-entity` ("Helpi's lines were not retrieved"); and "Shadow Bonnie", above.
  "Phone Dude (a fan name)" has no record behind it: no record uses the label at all.
- No displayed text says partner, founder or owner of the two men. The tie between them is now `worked-with`.
- No tree description explains line styles.
- Descriptor names are stored in lower case, and a `{{id}}` token may open a sentence.
- **The Security Breach credits record** was not in `src/data/evidence/` while the pass ran. It landed at 08:10,
  during the task of the fourth message, and is now cited: see "The fourth message".

## Conclusion-level changes

Ties removed (7):

- `william-afton controls fredbear-plush` (theory). R5 holds it at low-medium and low, and round 4b says no
  "created" or "controls" tie. The lean is told in the plush's own entry.
- `vanny hunted gregory` (canon). No record shows a hunt. What three endings show (the roof, the doors, the
  alley) is in her entry.
- `vanny killed glitchtrap` (theory). The silhouette is not identified, and the remedy is low-medium and "never
  works".
- `cassette-man killed william-afton` (strong). The game does not show who lights the fire (R28), and a trap is
  neither a killing nor a hunt. The trap is told in the one tie that is left between the two men.
- `michael-afton hunted william-afton` (strong), `the-entity hunted cassie` (canon) and
  `one-you-should-not-have-killed hunted ucn-protagonist` (strong): no record has a pursuit. What each said is
  kept elsewhere (see "The third message", 3).

Ties changed (10):

- `cassette-man` to `william-afton`: `partner-of` (theory) is now `worked-with` (theory), and its note opens with
  the game's words, "old friend". It also carries the trap, in R28's sentence.
- `edwin-murray` to `fiona-murray`: `spouse-of` (strong) is now `worked-with` (canon), with the couple told in the
  note as an inference. No record gives a marriage.
- `fiona-murray parent-of david-murray`: canon to strong. The log of her death does not speak her name; that the
  mother is Fiona is a firm inference from the other recordings.
- `lefty controls puppet`: strong to theory (step 20 has it inferred, at medium).
- `missing-children hunted purple-guy`: canon to strong (the scene is shown; that the figures are the five is not).
- `fazbear-entertainment created lefty` and the four `afton-robotics created ...` ties: canon to strong. A mark on
  a blueprint is stated; that the firm made the machine is read from it.

Two ties took in what a removed tie had said, with its records: `william-afton parent-of michael-afton` (Michael's
"I'm going to come find you") and `ucn-protagonist killed one-you-should-not-have-killed` (the model's reading
that the one he killed runs the night). Neither changed kind or status.

Tie added (1): `hw2-protagonist employed-by fazbear-entertainment` (strong), from Glamrock Freddy's question and
RUIN's "left behind by some Faz-Technician".

No merge changed: `model.ts` unifies the same six groups as before.

People:

- New entry `caught-man`, "the man caught the next morning" (group `other`). R8 holds him apart from the killer,
  and the layers had nowhere to put him.
- New entry `staff-bots`, "the Pizzaplex's service robots" (group `other`), from five records. The deaths layer
  asked for it (`layerfix-time.md`, item 7): one ending's death is done by the robots on a button that Gregory
  presses, and the page had only Gregory to file it under. Nothing links the entry yet: see item 3 below.
- Three duplicate entries removed and folded into their originals: `phantom-balloon-boy` into `phantom-bb`,
  `withered-chica` into `chica`, `withered-bonnie` into `bonnie`.
- Display names. `michael-afton` is now "Michael", with the alias "Michael Afton (the surname is inferred ...)"
  and a sentence in the summary. "The Cassette Man" and "The Puppet" take a lower-case article.
  `fazbear-board-member` is "the man who questions Mr. Afton" ("board member" is the wiki's label, by the reworded
  record). `midnight-motorist-runaway-boy` is "the one who ran off in Midnight Motorist" (the records say only
  "him" and "he"). `minireena`, `bidybabs` and `xor` are descriptors with their old names as marked aliases.
  `mike-itp` is "Mike of Into the Pit". `glamrock-endo` names the level it comes from.
- `nameStatus` to `descriptor`: `jeremy-hw`, `mike-itp`, `minireena`, `bidybabs`, `xor`.
- "Fiona Murray" and "David Murray" stay as display names, as R26 (round 4b) has them: "the archive's forms". Each
  summary now says that the records quote only the first name. "F10-N4" has a sentence saying that no record
  quotes the label from the game. "Arnold" had the same sentence until about 06:50, when the records editor put
  the opening call's first words in a note ("Arnold. Hey buddy, this is dispatch with Fazbear Entertainment");
  his summary now cites that record, and HandUnit's cites the line "you can call me HandUnit", added to a
  record's quote at the same hour. All are still `canon-name`: see item 7 below.
- `glamrock-freddy` moves to group `entity`, with the other performers.
- First appearance: the daughter `ffps` (was `fnaf2`), Fredbear `fnaf4`, Nedd Bear and Pigpatch `ffps`, Dee Dee
  `fnaf-world`.
- Portraits: the purple man now has a picture with him in it; Elizabeth, David Murray and Ennard have none (each
  had a picture of something else); Fredbear and Toy Chica have pictures of themselves.
- Dates: the five's status gives June 26 to two children, with five linked later; the bracket's late end is the
  model's step and its early end is soft. The same correction is now in the second tree, whose member note read
  "five linked to one June 26th incident" and now reads "two reported lured on a June 26th; five linked to the
  incident". Arnold's date pill names the day's two supports (R2, round 4b).
- Every `status` is now a fate or "—" (70 entries carry the dash).

Trees: the second tree's id is `cassette-man` (was `emily`; nothing else refers to a tree id). In the Afton tree
the rabbit in the code has a column of its own and the burnt rabbit stands under the salvaged rabbit. The Murray
tree no longer holds Cassie and Gregory. The Pizzaplex tree gains Molten Freddy and the M.X.E.S. figure.

## Beyond the reports

**1. The same faults, where the checkers did not point.**

- Round-four wordings, searched in all three files: "wife", "after his son's death", "wherever the dead are
  counted", "remade", "runs the night", "hunts", "thirty years", "the diner", "the volunteer who would rather
  stay", "one continuous actor", "wrapped in a denial", "the wardrobe of Murray's costume shop", and "save him" in
  quotation marks.
- First sentences that did not say what the thing is (Elizabeth, the daughter, the five, the victim of the Bite of
  '87, Scrap Baby, Ennard, the Murray and Special Delivery figures, and others).
- Universal negatives cut down to what the records show ("no record has ...", "the archive has found ...", "as
  far as the transcripts on file show").
- Stacked hedges; "ownership" for the company; "probably" for a reading that the rulings grade.

**2. The records editor's rewording.** Where a record stopped saying something, the sentence here stopped too.

- *The killer's end.* The records no longer say "dies" or "ghosts". Summaries, and every note that says "shown",
  now tell the scene as the records do: five crying grey child figures, a suit that snaps shut, a figure who
  bleeds and slumps. "He dies there" is called a firm inference where it is argued, and the flat form stands only
  in the model's own statements (round 4b, R12). "The room with the suit"; "fading", not "free".
- *Sister Location's opening.* "Board member" is the wiki's label, and "she" is not named in the audio. Six entries
  and three tie notes changed.
- *Fruity Maze's last screen* has "a dim yellow costumed figure"; that it is the yellow rabbit suit is a look.
- *Midnight Motorist*: "a door", not "a boy's door"; the footprints are the wiki's description.
- *Voices*: "the voice actor of Baby" and "of Funtime Freddy", not "Baby's voice".
- *Ennard*: that the joined insides are one body, and that the mass thrown up is Ennard, are implied or the
  wiki's. The summary, the status and the `wore` note say so.
- *The purple walker* is not labelled by the game; that he is the scooped technician is the model's reading (high).
- *The wiki's tables and descriptions*: when the older models and Golden Freddy become active in FNaF2; the
  flatline tone; the Faz Force ending; the Endo Warehouse; the six gravestones of Princess Quest; the six bodies of
  Into the Pit.
- *Security Breach's pages*: the rooftop page and the Redemption page show "a blonde woman" with Vanessa's cap,
  uniform or ponytail, and print no name. Both entries, two tie notes and the Pizzaplex tree say that. The
  therapist asks whether her dad's name was Bill; it is a question, and her reply is indistinct.
- *RUIN*: the voice that reaches Cassie late is "taken as the real Gregory's", and the game does not show the
  speaker; two reused lines, not "several"; "best friend" is the store synopsis's; the comic pages "look like
  Gregory drew them", in Cassie's words.
- *Security Breach's arcade games and discs*: Princess Quest 2 and 3 are told "by the wiki's account"; the two
  clients of the therapy discs are the archive's reading of two series of numbers; "as to a child" is a reading.
- *Secret of the Mimic*: the logs and films name no speaker and no machine. That the Fiona voice and the
  endoskeleton with the cake are M1 is given by the wiki and by the names of the sound files; "Daddy's busy,
  buddy" as Edwin's own words is the usual reading; the reader of the WA letter is not named; the suit Arnold
  wakes in is the one the files label Fredbear; the work order is "captioned as found in his van"; the Dispatch
  voice that dismisses him is "usually read as the real dispatcher", and where the machine's imitation of
  Dispatch begins is not stated.
- *Scott's posts*: the logo is for "the other game developer", and that this is the first studio is the usual
  reading; the face of Ultimate Custom Night's child is his son's, with no "edited".
- Smaller ones: Lefty's stripes; Phone Guy's last messages; the Bite of '87; the intro's photograph of Scott; the
  merge ending; Special Delivery's unnamed things and unnamed model.

**3. Round 4b.** R21: one log has the urging "try again. Build another", and that M2 followed the urging and the
death is the model's reading (Edwin, David, the copying endoskeleton, a tie note, the Murray tree). R12 and R1
(a): above. R2: the day's two supports. R26: the name forms.

**4. Records changed after 06:19** (26 records, between 06:41 and 07:16, each read against the sentences that cite
it). These sentences changed:

- `secret-of-the-mimic-previous-technicians`: the bodies are "bodies in character suits"; that they are the
  technicians the voice speaks of is the usual reading and rests on that voice (`arnold`).
- `secret-of-the-mimic-dispatch-contractor-murray`: the opening call is from "a voice that says 'this is dispatch
  with Fazbear Entertainment'" (`edwin-murray`, `dispatch`, and the note of `dispatch employed-by
  fazbear-entertainment`); its note now quotes the call's first words, with the name Arnold (`arnold`).
- `secret-of-the-mimic-mail-springlocks-hen`: after Fiona's death "a voice speaks as Fiona in the logs", and the
  wiki gives it to the first machine; `fiona-murray` had "a machine answered to her name".
- `sl-handunit-intro-job-ad`: the quote gained "you can call me HandUnit" (`handunit`).
- `fnaf2-custom-night-names`, `fnaf2-shadow-bonnie-office`, `fnaf3-shadow-bonnie-minigame`,
  `fnaf2-jj-endo-puppet-visions`: the notes now give the names of Ultimate Custom Night's roster and of Scott's
  guide (aliases of `shadow-bonnie`, `jj`, `chica`, `bonnie`).
- `secret-of-the-mimic-log-death`: the log does not speak Fiona's name, and that the mother is Fiona and is dead
  is the reading the other recordings support (`fiona-murray` summary, status and theory; `david-murray`; the
  three ties of the Murray household).
- `ruin-roxy-give-me-back-my-eyes`: she "calls Gregory's name" and "then stops and apologises"; `roxanne-wolf` had
  "still searching for Gregory" and "then knows her".

The other changes (the headless Freddy's label, now viewed in a capture; the Gregory voice of RUIN's standard
ending; the count of six in Into the Pit; Molten Freddy's tape; quotations made longer) agree with what these
files already said, or touch records they do not cite.

**5. Smaller things found on the last reading.** `hen` opened as "A client named in Edwin Murray's log and mail":
the record has a change order from Hen, and the note to Fiona is unsigned, so the summary now says "The sender of
a change order in one of Edwin Murray's logs, named again in an unsigned note to Fiona" ("client" is the rulings'
word, and stays in the readings). The tie `edwin-murray worked-with hen` said "Hen is a client ...: stated"; the
change order is what is stated. `cassette-man`'s summary said that he tells "one of the gathered machines" about
the pit of Hell; the speech says "one of you" and names nobody, and the summary now says that. `arnold` "sets the
complex on fire" is now "runs a program that sets off a self-destruct and fire across the complex", as the record
has it. The second tree's notes said "His own words for William Afton are old friend"; they now say that the game
implies, without naming him, that the one so called is William Afton.

## Decisions

- **Michael's name.** The spoken first name stands alone and is marked a name the canon gives. The joined form is
  an alias that says the surname is inferred.
- **A tie whose printed word misleads is removed or given another kind, not explained away in its note.** A
  reader of a tree sees the kind's word and may never open the note. Where the schema has no better kind and the
  tie is needed (a line of a tree, a fact the entries lean on), the tie stays, its note opens with the word the
  records support, and the table in "The third message" tells the interface what to print.
- **No `hunted` tie without a record of a pursuit; no harm tie for the fire.** The Cassette Man's trap is told in
  R28's sentence, in the one tie between the two men and in his entry.
- **In summaries the record's wording wins over the ruling's flat form** ("five crying grey child figures", "a
  voice speaking as Fiona"); the model's statements in `theory`, `status` and tie notes may use the flat form the
  ruling allows.
- **Names from Scott's guide to Ultimate Custom Night** ("Shadow Bonnie", "JJ", "Withered Chica", "Withered
  Bonnie") are aliases with their source, since the records' notes now give it. None became a display name: no
  record holds the guide's lines as quotations, and R26 has not moved "Shadow Bonnie" out of tier 3.
- **An entry for the Pizzaplex's service robots** was added because another layer needs to point at it. It is
  built from five records and identifies nothing with anything.
- **A status carries a fate or a dash.** What a thing is belongs in the summary.

## Checks

Run again at 08:12 on 3 October, after the task of the fourth message and the credits script: the validator is
OK (evidence 1045, people 166, relations 78), `tsc -b` is clean, the word check and my own checker find nothing,
and `model.ts` makes the same six groups. What follows is the run that closed the fix pass.

Last run of the fix pass at 07:36, with the evidence files as saved at 07:16 and the rulings as saved at 05:54. The
records editor's pass was committed at 07:21 as `37856e3`, and the working tree's records are that commit's:
`changed-records.py . people.ts 37856e3` and the same for `relations.ts` report no changed record.

- `npx tsx scripts/validate.ts`: OK (people 166, relations 78). One warning concerns these files: "entities used
  on evidence without a page: withered-bonnie(2), withered-chica(1), phantom-balloon-boy(1)". It goes when the
  records are retagged (item 4).
- `npx tsc -b`: clean.
- `wordcheck.py . --all`: in these files only the marked aliases, the chapter token `((partners))`, the real-world
  years 2017 and 2024 for Scott's own posts, and a quoted "not just us".
- My own checker (every quoted phrase against the cited record's `quote` or `claim`; every token, pill id, chapter
  id and image): no problem.
- `model.ts` run on the data: the same six unified groups as before the pass.
- The records: compared with the snapshot taken at the previous check, by
  `python3 $NOTES/../sync-tools/evsnap/delta.py s0722`, which prints each record changed since the snapshot of
  07:22 beside the sentences of these files that cite it (nothing had changed at 07:36).

## For the orchestrator

1. **R19 still tells the layers not to cite the cast credits.** The record is in and these files now cite it, as
   you asked: on the tie between Vanessa and Vanny, in both entries and in the Pizzaplex tree's notes, each time
   as a record that counts against the identification without settling it. R19's wording has "Security Breach's
   cast credits are not in the archive: do not cite them", and lists "the cast credits, once recorded" under what
   would change it. The grade (medium-high) is unchanged here until the ruling is turned.
2. **Tie words.** `says` is filled on 34 ties ("The fourth message"). The pages still print the kind's verb until
   the interface reads the field (`integ/src/pages/people/ties.ts`, `tieSentence`; `Ties.tsx`). A phrase has no
   inverse, so the second person's page needs the whole sentence. With no `partner-of` or `spouse-of` tie left,
   the legend's "partners" and "spouse, partner" (`ties.ts`, lines 57 and 64) and the caption "The partner and
   the daughter he lost" (`src/pages/People.tsx`, line 10, in this worktree) can go.
3. **The entry `staff-bots`** ("the Pizzaplex's service robots") is now what `d-sb-vanny-disassembled` points at
   (`eebd5cc`). The five records it cites could take the tag.
4. **Records to retag** (a people tag files a record on a person's page):
   - for the three removed duplicates: `ucn-withered-chica-toysnhk` to `chica`; `ucn-withered-bonnie-prison` and
     `ucn-withered-bonnie-consequences-of-failure` to `bonnie`; `scottgames-site-fnaf3-guess-who` to `phantom-bb`;
   - `fnaf1-news-suspect-captured` and `fnaf1-news-charged-vs-convicted` to `caught-man`, which has no tagged
     record yet. The records tagged `purple-guy` "only for theory linking" file the clippings on William Afton's
     page;
   - the Special Delivery rabbit records tagged `springtrap`, the Into the Pit records tagged with main-line
     people, the FNaF World records tagged `fredbear`, `circus-baby` or `purple-guy`, and
     `security-breach-cd46-treated-as-child-phenom` tagged `gregory` (all listed in the two reports).
5. **The lead's memo says that `people.ts` has "no entry for the mass of parts, so it cannot be a token"**
   (`editor-memo.md`, section C). It has one: the id is `the-blob`, and `{{the-blob}}` prints "the mass of parts".
6. **The records.** These files agree with the records as committed at 08:10 (`af63bef`). For any later change,
   `changed-records.py . people.ts af63bef --full` (and the same for `relations.ts`) pairs each changed record
   with the sentences here that cite it.
7. **Name status has two values, and some names fit neither.** "Fiona Murray" and "David Murray" are the archive's
   forms (R26). "F10-N4", "Glamrock Freddy", "Montgomery Gator", "Glamrock Chica", "Dispatch" and "Oswald" are in
   records' claims and in no quote. All print "A name the canon gives." "HandUnit" now has a quoted line, and
   "Arnold" a quoted line in a note; a quoted line or label for each of the others would settle them, and so
   would a third status.
8. **Records to add:** the lines of Scott's Character Guide for Ultimate Custom Night, as records of their own
   ("RXQ aka Shadow Bonnie", "Withered Chica", "Withered Bonnie", "JJ" are now reported in four records' notes;
   "Phantom Mangle" and "Dee Dee" are not on file); Sister Location's patch notes ("Minireenas"); a record for
   the names "Bidybab" and "XOR"; the sentence of Fiona's log with "this terrible feeling". With a record of the
   guide's line, R26 moves "Shadow Bonnie" to tier 2 and the alias loses its "(a fan name)".
9. **The group id `emily`** is untouched: `schema.ts`, two entries in `people.ts`, and the interface's palette and
   People page. The tree id is already `cassette-man`.
10. **Interface, other points.**
    - `same-as` prints "is the same being as" for a form ("the rabbit in the code is the same being as William
      Afton", at theory) and for membership ("Gabriel is the same being as the five children").
    - The trees' default view hides `created`, `controls`, `killed` and `hunted`, which two of the trees are
      about.
    - "The Cassette Man" and "The Puppet" are canon names now stored with a lower-case article; they need the
      same capitalising as descriptors where they stand alone, and the same sorting in the People index.
    - Tie notes are written from the `from` side ("Corner him: ...", "Shelters: ..."), and the person page shows
      them on both ends.
11. **Records and captions.** The five records that I listed at 06:28 as running ahead of the rulings have all
    been mended since by the records editor. Two captions in `src/data/credits/` still carry a label:
    `sotm-redeemed-ending-david.jpg` has "the Mimic", and `sl-custom-night-michael-ejects-ennard.png`, the portrait
    on Michael's page, has "the purple man" (in this archive that is the killer's name; R1 has "Sister Location's
    purple walker is Michael").
12. **The rulings.** R19 (3) has "the technician and Cassie are used by the endoskeleton's voice (R21)" with no
    grade, where R21 (6) puts the technician's part at low; these files follow R21. R21 (1) has "One log has M1
    urge him", and the records now say that the logs name no speaker. R21 and the order of events call Fiona
    "his son's dead mother" flat; the record of the log now says that the log does not speak her name, and these
    files keep the rulings' form in `theory` fields and tree notes and mark the inference in the ties and in her
    entry. `model.md`, 5.2, still says that `cassette-man killed william-afton` and `cassette-man partner-of
    william-afton` stay; both are gone, on the reports and on the second and third messages.

## Against the records as they now stand

The fifth task (`BRIEF-layer-records.md`, 09:20 to 10:40 on 3 October). Start: the three files as committed at
`d059017`. Base for the records: `3e780e2` (06:18). Nothing committed.

### What was read, and when

- The brief; "Round four", "4b" and "4c" at the top of `rulings-brief.md` (08:47), and R2, R18 to R22 and R26 as
  they now stand; R19 in `model.md`.
- The orchestrator's edits to these files in `ead932c` (the two entries, the tie, the Pizzaplex tree's notes).
- The records from the working tree. They changed twice while this pass ran: commit `00ba86f` (09:36), and an
  uncommitted save of all six files at 09:56:53. The last comparison was made at 10:15 against a snapshot taken at
  10:09 (`sync-tools/evsnap/state-s1009.json`): no record changed after 09:56:53.
- The twenty beats and all 35 chapters as plain text (`sync-tools/rec5/beats.txt`, `chapters.txt`, taken at 09:30
  from HEAD `fc3038e`; `785083b` at 09:46 changed three lines of the storyline's front matter and no beat that
  these files tell).

### How many

| File | Records cited | Changed since `3e780e2` | of them in `claim` | in `quote` | in `title` | Entries or ties that cite one |
|---|---|---|---|---|---|---|
| `people.ts` | 470 | 279 | 119 | 32 | 129 | 142 of 166 entries |
| `relations.ts` | 180 | 110 | 52 | 14 | 53 | 70 of 78 ties |
| `familyTrees.ts` | 0 | 0 | | | | (its text repeats the entries') |
| the three together | 482 | 285 | 121 | 32 | 131 | |

Counted at 10:15 with `changed-records.py`. Seventeen of the cited records changed in `title`, `claim` or `quote`
after my last snapshot of the fourth task (08:12); the other changes after that time are to `when` (120 records),
`people` (24), `notes` (17) and `places` (2).

### How it was done

Every one of the 142 entries and all 78 ties were read again, whole, beside the present `claim` and `quote` of
each cited record that had changed, with the old and new text set against each other word by word
(`sync-tools/rec5/review.py`, `ties.py`). `summary`, `status`, `aliases` and display names were read as flat
statements; `theory` and tie notes as the model's, where a reading needs its marker and its grade. Four scans
then looked for what reading misses:

- `rec5/withdrawn.py`: wording struck from a record's `title`, `claim` or `notes` that still stands in an entry or
  tie that cites the record (it found the credit that "names" the rabbit and "drags it away");
- `rec5/provenance.py`: a sentence that cites a record whose claim now carries "by the wiki's account", "reported",
  "read from" and the like, with no such word of its own (nothing left after the edits below);
- an exact check of every quotation, with no allowance for case or for curly quotation marks, against the `quote`
  or `claim` of a record cited in the same field (none fails; the records' quotation marks were made uniform at
  09:56 and one apostrophe here followed);
- `fix/qc2.py` as before (tokens, images, ids, the rules for `says`).

Every edit went through `rec5/ed.py`, which writes a ledger (`rec5/ledger.jsonl`, 107 lines: what stood, what
stands, the record or ruling). `rec5/draft.md` is the ledger grouped by entry.

### What changed: 48 entries, 14 ties, the four trees

Entries in `people.ts`. Each line: what it said, what it says, the record or ruling.

1. `william-afton`, theory: "The credits name that rabbit William Afton" is now "The credits give that rabbit's
   voice the name William Afton"; status: "No game after Ultimate Custom Night names him" is now "No record from
   a game after Ultimate Custom Night carries his name". `ffps-credits-william-afton` (the claim no longer says
   the credits "name that character"); `security-breach-burntrap-name-not-in-game` ("in any … transcript
   reviewed").
2. `purple-guy`, summary: "fits a Spring Bonnie head onto another person" is now "fits the head of a yellow
   rabbit suit". The chapters have "a rabbit's head"; FNaF4 prints no name for the suit.
3. `michael-afton`, summary: "a burnt-out building whose sign reads as Fazbear's Fright" now has "half-legible
   sign". `sl-golden-freddy-cutscene-springtrap` ("partly legible 'FAZBE… / FRI…'").
4. `elizabeth-afton`, status: "the machine, which returns as Scrap Baby and burns" is now "Scrap Baby, which the
   Cassette Man addresses by her name, burns". `ffps-completion-connection-terminated-elizabeth`; that Circus
   Baby returns as Scrap Baby is a strong inference and was told flat.
5. `older-brother`, summary: "grey text asks whether the child can hear" is now "grey text asks \"Can you hear
   me?\"". `fnaf4-night6-brother-apology` ("the listener").
6. `springtrap`, theory: "that rabbit is the one the credits name" is now "it is to that rabbit's voice that the
   credits give the name". `ffps-credits-william-afton`.
7. `scraptrap`, summary: "shown burning with the others" is now "among the salvaged machines shown burning"
   (`ffps-completion-fire`: three are shown, and not Lefty); theory: the "old friend" was "read as this figure:
   the game implies it" and is now "read as this figure, which is the usual reading: the speech does not say
   which of those it gathers he means" (`ffps-completion-old-friend-hell`).
8. `spring-bonnie`, summary: the head in FNaF4's back room, as in 2.
9. `spring-bonnie-performer`: display name "the person fitted with the Spring Bonnie head" is now "the person
   fitted with the yellow rabbit's head", and the summary follows. As in 2.
10. `cassette-man`, summary: "He calls the machines that hold the children \"prisons of my making\"" is now "He
    says that small souls are trapped in \"prisons of my making\"" (`ffps-insanity-small-souls-prisons`); theory:
    the "old friend" was "read as William Afton: the game implies it" and is now "not named in the speech; the
    model takes him for William Afton, which is the usual reading" (`ffps-completion-old-friend-hell`; chapter
    `partners`); "Murray answers" is now "Murray says in a log" (`secret-of-the-mimic-log-build-to-spec`).
11. `missing-children`, summary: "four dead children" is now "four grey, dead-looking children".
    `fnaf2-give-gifts-give-life`; beat 8.
12. `fifth-child`, status: "One of the five, and so among the dead. How this child came to be marked by the
    yellow bear, every scene withholds." is now "One of the five linked to the incident, whose bodies were never
    found. No scene shows what became of this child; the model reads the yellow bear as this child's (medium)."
    R8 (the identification is the model's, medium); `fnaf1-news-five-children`.
13. `security-puppet-child`, status: "The killer is not shown" is now "How the child died is not shown".
    `ffps-security-puppet-dead-child`.
14. to 18. `puppet`, `freddy-fazbear`, `bonnie`, `chica`, `foxy`, summary: "four dead children" is now "four grey,
    dead-looking children". `fnaf2-give-gifts-give-life`.
19. `caught-man`, summary: "no later game mentions an arrest" is now "nothing else in the first three games
    mentions an arrest". `fnaf1-news-suspect-captured` speaks for FNaF1 to FNaF3 only.
20. `fredbear`, summary: "the caller half remembers the first restaurant's name" is now "the caller, speaking of
    \"the original restaurant owner\", half remembers the name of the place".
    `fnaf2-call5-fredbears-family-diner`.
21. `lefty`, summary: "one of the four machines salvaged" is now "offered for salvage". `ffps-salvage-order`.
22. and 23. `shadow-freddy`, `shadow-bonnie`, summary: "No game shows a name for it" is now "Neither game shows a
    name for it". The four records speak for FNaF2 and FNaF3.
24. `ennard`, theory: "Pizzeria Simulator never says the name Ennard" now opens "In the archive's records". Round
    4c.
25. `funtime-freddy`, theory: "the four labels are about finding children in a group, keeping track of their
    parents" is now "suggest locating people in a group, keeping track of parents"; status: "Molten Freddy later
    has his face and his voice" is now "a face like his and his voice actor". `sl-blueprint-funtime-freddy` (its
    note was reworded, and the entry repeated the old one); `ffps-credits-returning-voices`.
26. `funtime-foxy`, theory: "A machine that can record a parent's voice and play it back, and release a chosen
    smell" is now "As labelled, two of its entries are about a parent's voice, synced and replayed, and a scent
    that can be varied; the sheet does not explain them". `sl-blueprint-funtime-foxy` (the same).
27. `toy-chica`, summary: "she lures one classmate after another to her house with a lie, the first being that
    someone ran over his dog" is now "In its second episode her plan to get the wolf to her house is to tell him
    that someone ran over his dog there, and in later episodes she tells the boy other things".
    `ucn-toy-chica-hsy-dog-lure`.
28. `fnaf2-first-guard`, status: "Why that position falls vacant on the fifth night is not said" is now "On the
    fifth night the caller says that a position on the day shift has just become available; he does not say
    whose, or why". `fnaf2-call5-day-shift-vacancy` ("That the open position is his is a reading").
29. `phone-guy`, status: "his fourth message ends in a scream" is now "by its transcript his fourth message ends
    in music, a scream and static". `fnaf1-call4-phone-guy-attacked`; beat 11 has "(as described)".
30. `ucn-protagonist`, summary: "No line names the player or anyone else" loses "or anyone else"; status: "Held
    in a night that repeats" now opens "By the voices' account". `ucn-protagonist-unnamed-killer`; beat 16.
31. `tutorial-unit`, summary: the apostrophe in "wasn't" is straight, as the record's now is.
    `ffps-completion-tutorial-atonement`.
32. `fazbear-entertainment`, summary: "its dispatcher says" is now "a voice that gives itself as dispatch with
    Fazbear Entertainment says"; "blames the stories on" is now "blames most of the stories on".
    `secret-of-the-mimic-dispatch-contractor-murray`; `hw-intro-complete-lunatic`.
33. `edwin-murray`, summary: "He builds M1 … as a babysitter" is now "He shows his son David an endoskeleton, M1
    …: \"Think of it as your new babysitter.\""; "He builds a second machine, M2" is now "His logs also speak of
    a second machine, M2"; "In his last log" is now "In one log". Status: "Last heard injured" is now "In one log
    he lies injured …, and what becomes of him is not shown". Theory: "M1, the babysitter that took the voice of
    Fiona, his son's dead mother, and M2, a copy of M1's program. One log has M1 urge him" is now "M1, a
    babysitter for his son, and M2. On the model's reading M1 took the voice of Fiona, his son's dead mother, and
    M2 began as a copy of M1's program: the logs name no speaker …, and the message … is unsigned. One log has
    that voice urge him"; "the client came to want one" is now "he does not name those who wanted it, and the
    model takes them for the client". `secret-of-the-mimic-log-training-m1`, `-log-try-again-build-another`,
    `-log-m1-as-fiona`, `-mail-received-5-min-ago`, `-log-make-a-copy`, `-log-turn-around-lost-temper`; chapters
    `two-machines` and `partners`.
34. `fiona-murray`, status: "Dead before the night of Secret of the Mimic, as the recordings are read" is now
    "Gone, in Edwin's word, in a log titled Death; that she has died is the reading the other recordings
    support"; theory: "The recordings make her David's mother (firm)" is now "Read together, the recordings make
    her David's mother (a firm inference: the log in which Edwin speaks of \"his mother\" does not name her)".
    `secret-of-the-mimic-log-death`; beat 2.
35. `david-murray`, summary: "Later his father refuses" is now "In one log his father refuses"; status: "Dead by
    the time of his father's last logs. That is implied and never stated" is now "Dead, by what the recordings
    imply and never state"; theory: "the first machine's grief" is now "the grief of the cabinet F10-N4", and
    the urging is one "which it takes for the first machine's". `secret-of-the-mimic-log-refusal`,
    `-f10n4-miss-my-child`, `-log-try-again-build-another`.
36. `f10-n4`, summary: "as Fazbear Entertainment's dispatcher" is now "as Dispatch"; theory: "M1 is the
    babysitter that took the voice of Fiona" now opens "On that reading". `secret-of-the-mimic-f10n4-reveal`; R2's
    wording; chapter `two-machines`.
37. `the-mimic`, aliases: "M2 (Edwin Murray's name for his second machine)" now ends "which RUIN's endoskeleton
    most likely is", and "that thing in the sinkhole (Gregory's words in RUIN)" is now "(the words of the second
    Gregory voice in RUIN)"; theory: "M2 began as a copy of the program of M1" now opens "On the model's
    reading", and "One log has M1 urge" is now "a voice speaking as Fiona, which the model takes for M1's";
    summary: "a voice using Gregory's words lures Cassie" is now "a voice that says it is Gregory lures Cassie"
    (two of its lines are recorded as his words, and no more). `ruin-gregory-mxes-explanation`;
    `secret-of-the-mimic-mail-received-5-min-ago`, `-log-try-again-build-another`; R21 (2); `ruin-mimic-reveal`,
    `ruin-mimic-reuses-gregory-lines`.
38. `dispatch`, alias: "the Fazbear dispatcher" is now "the Fazbear dispatcher (the opening call's own account of
    itself)". `secret-of-the-mimic-dispatch-contractor-murray`.
39. `vanessa`, theory: the cast list now carries "(from a fan wiki's transcription of the credits)".
    `security-breach-credits-vanessa-vanny-two-parts`; R19's wording.
40. `vanny`, theory: the same; and "What moves her is most likely the rabbit in the code (medium-high)" is now
    "(medium, and no firmer than her being Vanessa)". R19 (1), round 4c.
41. `gregory`, summary: "a voice using his words lures Cassie into the building" is now "a message in his voice
    brings Cassie into the building". `ruin-cassie-seeks-gregory`; R21's wording.
42. `client-46`, summary: "talking to something" is now "talking to \"someone, or something\""; "A glitch … is
    traced to the client" is now "A therapist says that a glitch … was traced to the client".
    `security-breach-cd46-rabbit-ears`, `-cd46-glitch-subroutines`.
43. `glitchtrap`, summary: "a fur-costumed arm holds out six dolls" is now "a fur-costumed arm, which the wiki
    takes for this figure's, holds out six dolls". `hw2-memory-dolls`.
44. `burntrap`, alias: "Burntrap (a file name, and Scott's working name)" is now "(a file name, by a fan wiki's
    account, and Scott's working name)"; summary: "a mass of old animatronic parts" loses "old"; status: "drags
    it away" is now "pulls it into the ceiling". `security-breach-burntrap-name-not-in-game`,
    `security-breach-ending-burn-it-all-down`, `security-breach-tangle-composition`.
45. `the-blob`, summary: "old animatronic parts" loses "old". `security-breach-tangle-composition`.
46. `the-princess`, theory: "Princess Quest is a fight carried on from inside the game" is now "The model reads
    the Princess Quest games as one fight …, made from inside the game, and does not say that it works".
    `security-breach-pq3-help-wanted-hub-trapped-door`; chapter `vanny`.
47. `vanessas-father-bill`: display name "Bill" (a canon name) is now "Vanessa's father" (a descriptor), with the
    alias "Bill (the name a therapist asks her about; her reply is indistinct)"; the summary opens "The father of
    whom a therapist speaks to Vanessa". `security-breach-cd-vanessa-father-bill` (title and claim now give the
    name as the therapist's question).
48. `white-tiger`, theory: "It is how Help Wanted 2 points at Secret of the Mimic" is now "It is most likely
    how". `hw2-mystic-hippo-gift-distant-past`; chapter `mimic`.

Ties in `relations.ts`:

1. `glitchtrap` controls `vanny`: status `strong` is now `theory`; the note's "Medium-high" is now "Medium, and no
   firmer than her being Vanessa", and "a woman drawn as Vanessa is" is now "a blonde woman, drawn as Vanessa is
   and not named"; `says: "is read as what moves"`. R19 (1), round 4c; `security-breach-ending-redemption`.
2. `vanessa` wore `vanny`: the note's cast list carries "(from a fan wiki's transcription of the credits)". The
   status (`theory`) and `says: "is most likely"` are as `ead932c` left them, and read right.
3. `cassette-man` worked-with `william-afton`: "that it is the salvaged rabbit, and so William Afton, is implied"
   is now "is the usual reading, and the model's". `ffps-completion-old-friend-hell`. Status and `says`
   unchanged.
4. to 7. `missing-children` possesses `freddy-fazbear`, `bonnie`, `chica`, `foxy`: the note's "Four of the five are
   in" is now "are most likely in", and `says: "include one who haunts"` is now `"include one who most likely
   haunts"`. `fnaf2-give-gifts-give-life` ("That this 'puts them inside' the animatronics is an
   interpretation"); the model's table of the five (medium-high); chapter `golden` ("the four are most likely
   in").
8. `william-afton` parent-of `michael-afton` and 9. `purple-guy` same-as `william-afton`: "the credits name" is
   now "the name the credits give the salvaged rabbit's voice". `ffps-credits-william-afton`.
10. `springtrap` same-as `scraptrap` and 11. `ennard` became `molten-freddy`: "Pizzeria Simulator never says"
    now opens "In the archive's records". Round 4c.
12. `edwin-murray` parent-of `david-murray`: "and later says" is now "and in another log says".
13. `edwin-murray` created `f10-n4`: "He built M1, the babysitter: stated" is now "He shows David the
    endoskeleton M1 as his new babysitter: stated. That he built it is held at high, and no log says so in as
    many words". `secret-of-the-mimic-log-training-m1`.
14. `edwin-murray` created `the-mimic`: "He built M2 as a copy of M1's program (high)" is now "He built M2
    (high). The message that calls it a copy of its sender's program is unsigned, and the model reads the sender
    as M1". `secret-of-the-mimic-mail-received-5-min-ago`.

The other 30 `says` and their ties' statuses were each read against the present records and stand. There are 35
now: one is new (tie 1) and four are reworded (ties 4 to 7).

Trees in `familyTrees.ts`:

- Afton: the Cassette Man's member note "calls him old friend, as the game implies" is now "on the usual
  reading".
- Cassette Man: the notes' "the game implies, without naming him, that this is William Afton" is now "does not
  name him; the model takes him for William Afton".
- Murray: the description's "the two machines he built for it" is now "his two machines"; the member note "M2,
  most likely · a copy of M1's program" now has "read as a copy"; the notes mark M1's voice and M2's program as
  the model's reading, as entry 33 does.
- Pizzaplex: the description's "the woman it reached" is now "the woman the model reads it as reaching"; the
  technician's member note has "most likely"; the notes' cast list carries its provenance.

### Decisions

1. **The tie from the rabbit in the code to Vanny follows R19 (1).** The ruling's first point is one sentence,
   "Vanny is Vanessa, under the control of what writes to her", and round 4c lowered it to medium. The tie and
   the entry held the control at medium-high, taken from the same point, and the case for it runs through
   Vanessa's recordings. `ead932c` changed the identification's grade and left this one. It is now `theory`,
   medium, with a phrase that reads as a reading.
2. **Vanessa's father is displayed by a descriptor.** The record no longer says that he is named Bill: a
   therapist asks, and the reply is indistinct. The name is kept as a marked alias, so search finds him. No
   chapter uses the token.
3. **"The usual reading" and "the model takes him for", for the old friend.** `model.md`'s thesis table still has
   "implied"; the record now has "The usual reading", and the chapter `partners` "The model takes him for the
   killer". These files now use the record's and the chapter's words. The tie stays `strong`.
4. **M1's voice and M2's program are marked as the model's reading wherever they stand**, as the chapter
   `two-machines` marks them. R21 (1) still tells both under "high" (item 12 of the list below, as before).
5. **No log is "the last", and none comes "later".** No record orders Edwin's recordings, so four sentences that
   ordered them were reworded.
6. **"In the archive's records" for a word a game never says.** Applied to the three sentences of that kind in
   these files (Springtrap and Ennard in Pizzeria Simulator). "No game names him" and the like are left as the
   chapters have them.
7. **The head in FNaF4's back room is a yellow rabbit's.** The record's claim says "a Spring Bonnie head"; FNaF4
   prints no name, the chapters say "a rabbit's head", and the image on file shows a yellow rabbit suit. Three
   sentences and one display name follow the chapters.
8. **Left as they were, after checking:** "designer" for the man addressed as Mr. Afton (the chapters use it, and
   the record's note still has "Designer's line"); "client" for Hen (the chapter `partners`: "Hen is the
   customer"); the display name "the technician of Help Wanted 2" (R22 and the chapters); `scraptrap` same-as
   `william-afton` at `canon` (R1 (c)); "Phone Guy does not outlive his last week. That is implied, not stated"
   (R25's form).
9. **The four ties from the five to the four mascots carry "most likely" in the phrase itself.** In this pass the
   note on each was marked ("are most likely in"), and the phrase beside it still said "include one who haunts",
   flat. In every other phrase of mine the verb is what a record states or shows ("cornered", "climbed into"),
   or is marked as a reading ("is most likely", "is read as"), or is held at high by a ruling ("built M1"); where
   a record does not name the person, the tie's status carries that. Found on the last reading, after the checks
   of 10:25, and mended then. Four other ties print the kind's own verb,
   "haunts", at `strong`: William Afton and Springtrap, Elizabeth and Circus Baby, Elizabeth and Scrap Baby, the
   Cassette Man's daughter and the Puppet. They are left as they were accepted in the fourth task (the verb at
   `strong`, the grade in the note). The last three are held at medium-high, as the four mascots are: if the
   pages should say "most likely" there too, `says: "most likely haunts"` on those three ties would do it.

### Checks (10:39, after the last patch)

- `npx tsx scripts/validate.ts`: `OK`, no warning.
- `npx tsc -b`: clean.
- `wordcheck.py --all`: the same 19 lines in these files as before the pass (the marked aliases, six
  `((partners))` links, two "2024", one "2017", one quoted "not just us").
- `qc2.py`: 0 hard problems; 78 ties parse, 35 with `says`. The exact quotation check: 0.
- `modelsim.py`: the same six groups. Vanny now hangs from Vanessa at `theory`.
- `delta.py s1009`: no record changed since 09:56:53.

### Found, and not mine to fix

1. **Chapter `mimic`** has "a white van drives away with one inside". `hw2-mimic-teaser-mxes-ending` was reworded
   at 09:56: "a pale blue van with a white stripe", and its machine now has "an 'M.X.E.S.' nameplate" in the
   claim.
2. **Chapter `salvage`** (`reckoning.ts`) has "The game never prints \"Springtrap\"" and "Pizzeria Simulator
   never says \"Ennard\"" flat, where round 4c gave "In the archive's records" to the same kind of
   sentence about Ultimate Custom Night. These files now have the longer form (decision 6).
3. **`model.md`, thesis table**, "that the one addressed is Afton is implied": the record and the chapter
   `partners` no longer say "implied" (decision 3).
4. **R21 (1)** in `rulings-brief.md` and `model.md`: "M1, the babysitter that took the voice of Fiona" under
   "(high)", and "One log has M1 urge him". The records name no speaker, and the chapter `two-machines` marks both
   as the model's reading (decision 4).
5. **Records `fnaf4-purple-guy-suits-up-employee` and `fnaf4-fredbear-spring-bonnie-shadows`**: the title and
   claim of the first, and the claim of the second, call the FNaF4 rabbit "Spring Bonnie". FNaF4 prints no such
   name (decision 7).
6. **The interface.** `says` is still to be read by the pages. With entry 47 renamed, the tie prints "Vanessa's
   father is the parent of Vanessa".
7. **The records moved during the pass** (09:36 and 09:56). If they move again, `python3
   sync-tools/evsnap/delta.py s1009` lists each changed record with the sentences here that cite it.
