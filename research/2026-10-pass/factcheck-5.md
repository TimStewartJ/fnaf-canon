# Fact-check 5: The reckoning

## What was checked, and against what

- **Chapters.** `fazbears-fright`, `ffps`, `salvage`, `ucn` and `faith` in `src/data/chapters/reckoning.ts` (as saved
  at 01:40 on 3 October, sha256 `84fe2b90…`). The file did not change while I worked. Line numbers below (L…) are
  lines of that file.
- **Storyline beats.** The three whose `sections` name those chapters: `s-fazbears-fright`, `s-trap-fire` and
  `s-night-without-end`, in `src/data/theory.ts` (01:37, `975ed442…`). Their text matches `telling.md` section B
  word for word.
- **Records.** All 192 records that the five chapters and three beats name (cited, counter-evidence, filed under
  `further`, or inside a date pill) were opened in the JSON. All 161 quoted phrases and 18 quote blocks were
  compared with the cited record, by script and then by eye. All 12 figures and hero images were looked at against
  their captions.
- **Rulings.** `rulings-brief.md` in full and `model.md` (R10, R13, R14, R16, R26, R28, R30, R33, section 5.2) as
  saved at 00:54; `telling.md` (A2 part 7, B, C, E) and `telling-revisions.md` (writer 5) as regenerated at 01:37
  and 01:38. `npx tsx scripts/validate.ts` passes.
- **Outside aids.** The wiki was used as a transcript aid only: the Cassette Man's two speeches (for wording and
  for order), Tutorial Unit, Old Man Consequences, the Puppet's and Nightmarionne's lines. Scott's 2014 interview
  and his 2019 Reddit post were read at source. Every finding rests on a record or a ruling; where a transcript
  was also used, the finding says so.

## The checks the assignment named

| Check | Result |
|---|---|
| Every quoted phrase is verbatim from the cited record's `quote`; nothing spliced or trimmed | No splice anywhere. The speech (`ffps`) and the hidden tape (`fazbears-fright`, `ffps`) are quoted in their own order, and every narrowed quote block is an exact substring. One line is tidied (`ucn` 5). Two quotations carry a token for a record that does not hold them (`ucn` 2, `salvage` 5). Nine phrases are exact but come from a record's `claim`, `notes` or `title` (listed under "For the lead"). |
| The `ucn` comparison gives the Michael reading its real strength | Mostly. The table gives Michael four rows to William's two, and the balance paragraph is R16's. But three of R16's points for Michael are missing or used neutrally, and `counterEvidence` is four records short of R16's lists (`ucn` 1). |
| Each line in the `ucn` comparison is cited to the record that holds it | Yes, for the table and the compare block. The exception is outside them: "remade" and "given flesh" (`ucn` 2). |
| Nothing states who lights the fire | Clean. `ffps` says in its body and in its `tension` that the game does not show it, names it in `changesIf`, and the beat says it once. "Whose fire", "the choice of fire" and "one man's answer" treat the fire as the Cassette Man's plan, which is R28's own wording. One beat says he "opens a pizzeria" (beats 3). |
| Nothing states as a flat fact that the fire ended, or did not end, the killer | Clean outside `ucn`: "the game presents that as his end" throughout. Inside `ucn` the William column opens "The killer died in the fire", which is the lean's content but stands flat (`ucn` 7). No "burned, not ended", "survived" or "he is back". |
| Nothing states as a flat fact that Michael is, or is not, UCN's player | Clean, in all five chapters and the beat. |
| "Hell" is attributed only to the record that says it | Clean. All ten uses point at the Cassette Man's speech (`ffps-completion-old-friend-hell`), and `ucn` and `faith` both say that Ultimate Custom Night never uses the word. |
| `faith` gives Scott's words about faith and the games accurately, with dates, and marks transcripts | Accurate. October 2014 and 2021 are right, and both quotations are exact (the 2014 article was read at source). That interview is a written one, so no transcript mark is due; the chapter cites no transcript. One statement from the same interview is left out (`faith` 4). The 2018 transcripts are marked as such in `fazbears-fright` and `ffps`, except once in a `tension` (`fazbears-fright` 4). |
| Written to the current rulings (R14, R16, R28, R30, R33, R13, R15) | Nearly. Two fields that `telling-revisions.md` marks "change this in your file" for round three are not as required: `faith`'s `answer` (`faith` 1) and `ffps`'s `tension` (`ffps` 1). One round-one wording rule (R10) is missed twice (`fazbears-fright` 1, `salvage` 1). |
| Book-only names and fan labels | None, in text or in a link token. "Scraptrap" appears once, in the required first-use form. None of the eight barred tokens is used. |
| Date pills | Two, both `relative` and both right. No year after 1987. |

Problem types used below: `overreach` (the sentence says more than the record), `unsupported`, `wrong record`,
`misquote`, `uncited`, `frame` (answer, confidence, counter-evidence, tension), `rulings` (disagrees with a ruling
or its required wording), `consistency` (with another chapter), `reader`. Findings are in order of severity
within each chapter.

---

## `fazbears-fright`: Thirty years later

**Verdict: minor fixes.** Happiest Day is told as a scene and not as an event, the fire is nobody's remedy, and
every quotation is exact.

1. **"That is what FNaF3's own minigames show a dark bear and a purple figure do to the four mascots"** (L38).
   `rulings` (R10, R30). The join is told flat. R10 as revised in round one: "describes" became "can be read as".
   R30's table rates "the luring and overpowering are step 15 itself" a reading at low-medium. The record's own
   note says the scenes fit and "the tape does not say that is what it means" (`ffps-insanity-trap-again`). The
   sentence follows the outline's point 5, which is R14's argument, but R14 goes on "If it is".
   Fix: "That can be read as what FNaF3's own minigames show a dark bear and a purple figure do to the four mascots
   [[fnaf3-eon-shadow-freddy-follow-me]] [[fnaf3-eon-purple-guy-dismantles]]; the tape does not say so."
2. **"The burnt mascots that loom up when the ventilation fails"** (L28). `overreach`. No record ties their
   appearing to failed ventilation, and one has it the other way round: they "appear on cameras or in the office"
   and their jumpscares "knock systems offline (ventilation, audio, cameras)" (`fnaf3-phantom-hallucinations`). The
   call promises only "crazy stuff" (`fnaf3-call1-ventilation-hallucinations`), and Scott's sentence is about extra
   Springtraps.
   Fix: "The burnt mascots that loom up on the cameras and in the office cannot end the night: in play they only
   knock the systems out, and only Springtrap can [[fnaf3-phantom-hallucinations]]. The caller's warning is that
   with the ventilation off \"you'll start seeing some crazy stuff\" [[fnaf3-call1-ventilation-hallucinations]]."
3. **`counterEvidence`**. `frame`. R14 lists `ucn-orville-he-tried-to-release` among the records against ("UCN then
   has a voice refusing release after the fire"). It cuts against "that fire the one the later games stand on" and
   is not listed or answered. Add it, with one clause in `tension`: "and after that fire one voice still refuses
   release [[ucn-orville-he-tried-to-release]]".
4. **"a later game, made to resolve the story"** (`tension`, L51). `uncited`. The support is a transcript, whose
   words are narrower: "just to resolve some plot points that people wanted to see"
   (`scott-2018-interview-ffps-made-to-resolve-plot-points`). C3 wants a transcript named as one.
   Fix: "a later game, which Scott said in 2018 (a transcript) existed \"just to resolve some plot points\"
   [[scott-2018-interview-ffps-made-to-resolve-plot-points]], speaks of small souls still without rest".
5. **"The model counts from the last, the restaurant of the first game"** (L23). `consistency`. R24 (5) has "most
   likely FNaF1's (medium-low)", the outline has "counts most likely from the last", and `timeline-math` writes
   "The model leans to the last, loosely." Fix: "The model leans, loosely, to the last, the restaurant of the first
   game, and prints no year either".
6. **"The guard moves the real one about with a clip of a child's laugh"** (L28); "In four hidden games a crying
   child can be given cake" (L30). `rulings` (R27: print the kind beside a mechanic). Three mechanic records are
   told without their kind (`fnaf3-audio-lure-mechanic`, `fnaf3-good-ending-requirements`,
   `fnaf3-phantom-hallucinations`). The first record's words are "a clip of Balloon Boy's laugh".
   Fix: "In play the guard moves the real one about with a clip of Balloon Boy's laugh, a child's voice".

## `ffps`: The trap and the fire

**Verdict: minor fixes.** The speech is in its own order and every block is exact. "Stays as it burns", "I
believe" and the convention on the scan are all as R28 and R33 require. One round-three field is applied in part.

1. **`tension`: "The game presents the fire as the killer's end, and what later games carry of him is argued in
   other chapters, each at its own grade."** (L120); body: **"What later games carry of him is argued in ((ucn)),
   ((digital)) and ((burntrap)), each at its own grade."** (L116). `rulings` (R33; round three, "change this in
   your file"). The required sentence is: "The killer's image returns in those later games; what, if anything, of
   the man persists is argued in other chapters, each with its own marker, and the model does not tell those as
   one history." The chapter's version drops R33's one flat statement (his image returns), turns "what, if
   anything, of the man persists" into "what later games carry of him", and drops "not as one history". The
   outline (point 7) asks the body to "say only that his image returns, and link ((digital)) and ((burntrap))",
   and section E asks `ffps` to say that who is held in the night is not settled. Naming `ucn` among the chapters
   that argue "what later games carry of him" points at the lean.
   Fix, body: "William Afton is among those the fire is shown to burn, and the game presents that as his end. His
   image returns in later games (see ((digital)) and ((burntrap))). Whom the refusing voice holds is not settled
   (see ((ucn)))." Fix, `tension`: keep "The game presents the fire as the killer's end.", then the required
   sentence.
2. **"A man nobody sent for has sought the place out and would rather stay."** (L89); **"an outsider has no reason
   to stay in the fire"** (L95); `tension`: "the volunteer who would rather stay than leave" (L120). `overreach`.
   The record's note: "The speaker is guessing ('I have a feeling'), and the game does not show whether the
   volunteer leaves" (`ffps-completion-right-where-you-want-to-be`). He "somehow found" the listing
   (`ffps-completion-brave-volunteer`); nothing says he sought it. The chapter says later that the game does not
   show whether he takes the way out. The shortcut is R13's and the outline's, but the record does not carry it,
   and `michael` has it right: "one who, the Cassette Man guesses, does not want the way out planned for him".
   Fix: "A man nobody sent for has found the place, and the Cassette Man's guess is that he would rather stay.";
   "...and because the Cassette Man takes the volunteer for someone who wants to be there, which an outsider has no
   reason to be."; `tension`: "on the volunteer whom the Cassette Man expects to stay".
3. **"The blueprints are the means."** (L86). `overreach`. A reading told flat, and one of the three is not his:
   the third sheet is Afton Robotics'. That the other two serve the Cassette Man's plan is inferred
   (`ffps-rasc-blueprint` notes: "an inference"; `ffps-lefte-blueprint` notes: "The Puppet is not named"). Both
   are marked Fazbear Entertainment, Inc, and R31 rates his working through the company medium-low.
   Fix: "The model reads two of the blueprints as the means." The later "The model reads those units as the bait"
   can then lose its marker: "Those units would be the bait".
4. **"No line. She speaks as to someone she knows [[ffps-scrap-baby-played-into-our-hands]]"** (L92).
   `wrong record`. That record says she thinks the job was arranged for the machines. "Spoken to the player as to
   someone she has dealt with before" is the note on `ffps-scrap-baby-should-have-known`, which the first cell
   already cites. Fix: drop the second token, or give what that record does say: "and she tells him the job did not
   fall \"out of the sky\" [[ffps-scrap-baby-played-into-our-hands]]".
5. **"Each night a tape sets him a second job"** (L81). `overreach`. Salvage is offered on four nights, Monday to
   Thursday (`ffps-salvage-order`), and `salvage` says "on four nights of the week". Fix: "On four nights a tape
   sets him a second job".
6. **"a daughter he believes can hear him"** (L107). `overreach`. The line is conditional: "My daughter, if you can
   hear me" (`ffps-completion-my-daughter`). Fix: "a daughter he hopes can hear him".
7. **"a later game keeps this game's office as \"a simulated Pizza Place training booth\""** (L115). `rulings`
   (R27, rule W5: a level in a company product is "the company staged"). `hw2-first-aid-simulated-pizza-place` is
   such a level. Fix: "and in a later game the company stages this game's office as \"a simulated Pizza Place
   training booth\"".
8. **"she believes the pizzeria is a gift from her father"** (L97). `uncited`. Records:
   `ffps-scrap-baby-played-into-our-hands` ("This was a gift, for us."); "from her father" is "the natural
   reading" in the notes of `ffps-completion-not-called-by-who-you-assume`. Add the first token.
9. **Seven quote blocks, about 1,370 words.** `reader`. C6 and C7 allow one to three blocks. The writer's REVIEW
   note explains why, but the "Saturday" section reads as a transcript with one-line bridges ("Then to the
   machines, about the dead inside them."). The two shortest blocks (`ffps-completion-remaining-nearby`,
   `ffps-completion-give-up-spirits`) would fold into prose without loss: `faith` sets the speech out again as a
   table.

## `salvage`: The four who came

**Verdict: minor fixes.** The table is R30's, step for step: "not shown" for the interval, no machine named, the
count stated and not explained, and Scrap Baby's "little souls" read as the party's children.

1. **`tension`: "small souls lured back and overpowered, which is what FNaF3 shows done to the four mascots"**
   (L195). `rulings` (R10, R30). The same point as `fazbears-fright` 1, and here the chapter's own table marks that
   interval "Not shown". Fix: "which can be read as what FNaF3 shows done to the four mascots".
2. **"its blueprint is on the Cassette Man's terminal"** (L170). `overreach`. The sheets appear on the office
   monitor in the hidden ending while his log plays (`ffps-insanity-new-way-to-desecrate`, notes;
   `ffps-lefte-blueprint`, location). No record makes the terminal his, and `ffps` says "the office monitor". The
   outline has the same slip. Fix: "its blueprint is one of the three the office monitor shows in the hidden
   ending".
3. **"and that there are no children to find: \"you will never find them\""** (L192). `overreach`. The speech says
   the children will never be found, not that there are none. That the cries are simulated is the model's reading
   of the RASC sheet (`ffps-rasc-blueprint`, notes: "an inference"). Fix: "and that the children whose cries they
   chase will never be found:".
4. **"Sister Location ends with a walking body heaving just such a mass"** (L165). `overreach`. The record is "the
   final walking cutscene" (`sl-custom-night-ennard-ejected`), and `fazbears-fright` calls a different scene
   "Sister Location's last cutscene". Fix: "The last of Sister Location's walking cutscenes shows a body heave just
   such a mass".
5. **"The Cassette Man addresses her as \"Elizabeth, if you still even remember that name\" ...
   [[ffps-scrap-baby-make-you-proud-daddy]]"** (L163). `wrong record`. The sentence's one token does not hold the
   first quotation, which is from `ffps-completion-connection-terminated-elizabeth`. Put that token after the
   first quotation.
6. **"tells his daughter to rest with \"those you have carried in your arms\""** (L189). `overreach`. The line is
   "It's time to rest, for you, and for those you have carried in your arms" (`ffps-completion-rest`): rest for
   both, not rest beside them. Fix: "tells his daughter it is time to rest, for her and for \"those you have
   carried in your arms\"".
7. **"About where they have been, it says only that."** (L152). `reader`. "That" points back three sentences.
   Fix: "About where they have been, it says only that it does not know."

## `ucn`: The night without end

**Verdict: minor fixes**, with item 1 to do before publishing. The lean is told only as a lean, the old man's line
is in the body as the weakest point, the second listener is there, and Orville's line is whole.

1. **The Michael reading is thinner than R16's, and `counterEvidence` is short of R16's lists.** `frame`. R16 and
   the outline ask for the Michael reading "in full", "as its best advocate would". Four gaps:
   - "a victim that can't perish" (`ucn-nightmare-freddy-cant-perish`) is scored for Michael in R16, beside "You
     won't die". The chapter uses it only to describe the place (L230); it is not in the table or in
     `counterEvidence`.
   - R16 counts three lines of Nightmare Fredbear's for Michael. The row gives one. The other two are in the same
     record (`ucn-nightmare-fredbear-lines`): "This time, there is more than an illusion to fear." and, in its
     `claim`, "We know who our friends are, and you are not one of them!"
   - The Michael column stops at "the demon is someone else" (L246). R16's package ends on the offer of rest:
     "Hell for the father, rest for the son", the Cassette Man's own sorting carried through. `ucn` hands "what the
     two voices say about rest" to `faith`, and `faith` hands who is told to rest back to `ucn`, as R33 requires,
     so no chapter states it.
   - `counterEvidence` lacks three records R16 lists against William: `ucn-puppet-lines` (a Michael row in the
     chapter's own table), `ucn-nightmare-freddy-cant-perish` and `ucn-orville-he-tried-to-release` (R16: the line
     suits the volunteer "at least as well"; L242 has "as well"). It also lacks one R16 lists against the fifth
     child, `fnaf3-happiest-day` (a golden-masked child leaves with the others), which the paragraph on the
     accuser omits too.
   Fix: add "a victim that can't perish" [[ucn-nightmare-freddy-cant-perish]] to the Scrap Baby row, and "This
   time, there is more than an illusion to fear." to the Nightmare Fredbear row; end the Michael column "The spoken
   ending tells him the demon is someone else and that he may rest: Hell for the father, rest for the son."; add
   the four records to `counterEvidence`, with a clause each in `tension`.
2. **"They call themselves \"remade\" and \"given flesh\", and the roster lists Springtrap and \"Afton\" as
   separate attackers [[ucn-roster-two-forms-at-once]]"** (L249). `wrong record`, and an `overreach`. The cited
   record holds neither word. Both are one character's: "I am remade, but not by you."
   (`ucn-nightmare-freddy-toysnhk`) and "I am given flesh to be your tormentor."
   (`ucn-nightmare-freddy-cant-perish`).
   Fix: "One of them calls itself \"remade\" [[ucn-nightmare-freddy-toysnhk]] and \"given flesh\"
   [[ucn-nightmare-freddy-cant-perish]], and the roster lists Springtrap and \"Afton\" as separate attackers
   [[ucn-roster-two-forms-at-once]]."
3. **"a hidden coin turns Golden Freddy into Fredbear"** (L254); `tension`: "the coin that turns Golden Freddy into
   Fredbear" (L264). `overreach`. The record: with only Golden Freddy active, using the Death Coin on him "makes
   Fredbear jumpscare the player", and "no text explains why" (`ucn-death-coin-fredbear`). The coin is an ordinary
   item; the trick is what is hidden. R27 wants the kind printed. `golden` has it right.
   Fix, in its words: "a hidden mechanic answers a coin spent on Golden Freddy with the jumpscare of Fredbear, the
   bear that bit him".
4. **"The player killed him, and he remade the Nightmares."** (L252); "the accuser remade the Nightmares" (L254).
   `overreach`, with no token. One Nightmare says it of itself (`ucn-nightmare-freddy-toysnhk`).
   Fix: "The player killed him, and one of the Nightmares says it was remade by him
   [[ucn-nightmare-freddy-toysnhk]]."
5. **Nightmarionne: "This time, death cannot save you."** (L236). `misquote`. The record's `quote` is "This t-time,
   death cannot save you-u-u." and C6 says "never tidied". The outline knows this ("the record's `quote` field
   keeps the voice's stutter"). Fix: quote only "death cannot save you", which is exact, as the compare block
   already does; or quote the line as recorded.
6. **"in a passage saying that the photograph behind it carries no story"** (L252). `overreach`. `model.md` 5.2
   lists this: "Scott said the first half and implied the second." In the post he lists family photographs he has
   used and asks whether they have lore significance: "Well, you probably already know the answer." The companion
   record is `implied` for that reason (`scott-2019-fnaf4-photos-no-lore`).
   Fix: "in a passage whose point, put as a question, is that the family photographs he uses carry no story".
7. **"The killer died in the fire, and one of his victims keeps him."** (L245, the William column). `rulings`
   (R33). It is the lean's content, in R16's own words ("the killer, dead in the fire"), but the sentence stands
   flat, and R33 allows flat only "the fire is presented as his end". Fix: "On this reading the killer died in the
   fire, and one of his victims keeps him."
8. **"Scott never ruled on this game."** (L227). `uncited`. Records: `scott-2018-ucn-for-pizzeria-simulator` (notes:
   none of his posts "says which applies to UCN"), cited two paragraphs later; add its token here.

## `faith`: Rest, and Hell

**Verdict: minor fixes.** Scott's words are exact and dated, the echo with the psalm is kept as context, and the
body tells no lean. The `answer` is still the round-two text.

1. **`answer`: "Who is being kept, and who is being told to rest, are the model's leans and no firmer."** (L294).
   `rulings` (R16, R33; round three, "change this in your file"). Required: "Who is being kept, and who is being
   told to rest, the game does not say: ((ucn)) weighs both." The old ending is also wrong on its own terms: the
   model has no lean on who is told to rest (R16 4b: two listeners, "not chosen"). Replace it with the required
   sentence.
2. **"One refuses: \"I will never let you leave. I will never let you rest.\" [[ucn-happy-frog-never-rest]] It says
   what it is refusing, too: ..." [[ucn-orville-he-tried-to-release]]** (L310). `overreach`. Two characters' rare
   lines are told as one voice. The records give a second voice whispering under each line and "no speaker label";
   `ucn` marks the join ("the model reads it as his"). The outline has the same shape.
   Fix: "One refuses, in rare lines that two characters speak with the same whisper under them: \"I will never let
   you leave. I will never let you rest.\" [[ucn-happy-frog-never-rest]] and \"He tried to release you. He tried to
   release us. But I'm not gonna let that happen.\" [[ucn-orville-he-tried-to-release]]"
3. **"The vocabulary is small (rest, peace, Hell, the Devil, a demon, souls, spirits)"** (L313). `unsupported` as a
   closed list. A character also says "afterlife": "this is my afterlife or my dream"
   (`ucn-mr-hippo-afterlife-or-dream`, filed under `ucn`), the one line that calls the place one. Two smaller
   slips of the same kind: "a gentler picture and no words for it" (L309) is followed by an earlier game's word,
   "Rest."; and `tension`'s "from Pizzeria Simulator on" (L320) has that word before it.
   Fix: add "and once, offered as a guess, an afterlife [[ucn-mr-hippo-afterlife-or-dream]]"; "and almost no words
   for it".
4. **"Scott has spoken about his faith and about these games"** (L315). `uncited`: a record exists and is left
   out. In the same 2014 interview, asked how his faith affects his game-making, he said "it's not your work but
   you yourself that makes the difference", and that the work must still not go against God's purpose
   (`scott-2014-faith-and-work`; the second half is in its `claim`). It is his one direct statement on faith and
   making games, and it qualifies the "No". The record is filed outside the story (author-context), so citing it
   means moving it. One sentence would do: "Asked how his faith bears on his work, he said that \"it's not your
   work but you yourself that makes the difference\" [[scott-2014-faith-and-work]]."
5. **"sends the children to rest"** (`answer`, L294); "rest for the dead children" (L308). `overreach`, in the
   lead's own wording. The speech's listeners are "monsters", "most of you", "My daughter" and "those you have
   carried in your arms". That these are the dead children is R30's reading at medium, and C3 gives a medium claim
   a marker where it enters. Fix, body: "rest for the dead, most likely the children among them".

## Storyline beats

**Verdict: minor fixes.** The beats pick neither reading of the night, say that who lights the fire is not shown,
and present the fire as the end. Four sentences say more than their records. All three beats are the lead's text.

1. `s-fazbears-fright`: **"its builders open a boarded-up room"**. `overreach`. The record's note: "That it came
   from the boarded-up room is implied by the Night 1 lead, not stated" (`fnaf3-call2-found-a-real-one`). The
   chapter says "implied", and its REVIEW note flags this beat.
   Fix: "and its builders are told of a boarded-up room. The next night: \"We found one. A real one.\"".
2. `s-night-without-end`: **"and it is one night with no morning"**. `overreach`, with no token. The narrator says
   it; in the records, voices say it: "over, and over, and over again... forever. I will never let you leave."
   (`ucn-nedd-bear-forever`). The night as played is staging (R16 (1)). The chapter's REVIEW note flags it.
   Fix: "Ultimate Custom Night comes after the fire, and its voices promise a night with no morning: \"over, and
   over, and over again... forever\" [[ucn-nedd-bear-forever]]."
3. `s-trap-fire`: **"The Cassette Man, the killer's old friend, opens a pizzeria as bait"**. `overreach`. The
   pizzeria is a Fazbear Entertainment franchise that the player buys and runs (`ffps-tutorial-franchisee`). That
   the Cassette Man worked through the company is R31's reading at medium-low. Fix: "sets his trap in a new
   pizzeria".
4. `s-fazbears-fright`: **"It is the rabbit suit, with a body inside"**. `overreach`. The record is `shown`: "what
   looks like a decayed human body" (`fnaf3-springtrap-corpse-screens`). Fix: "It is the rabbit suit, with what
   looks like a body inside".
5. `s-night-without-end`: **"...and the voices say that whoever it is cannot die
   [[ucn-protagonist-unnamed-killer]]"**. `wrong record`. The sentence's one token is an `implied` aggregate that
   does not carry the roster. "The machines of every earlier game" is `ucn-roster-includes-ffps-four` (a roster,
   so staging); "cannot die" is stated in `ucn-nightmare-freddy-cant-perish`. Cite those two.
6. `s-fazbears-fright`: **"One of the game's two endings gives six masked children a party"**. `overreach`. The
   party is the hidden minigame Happiest Day, which unlocks the second ending
   (`fnaf3-good-ending-requirements`). The chapter has "runs through". Fix: "One of the game's two endings runs
   through a hidden party at which six masked children vanish".

---

## For the lead: the outline, the records, and two things outside these chapters

- **The outline is behind the rulings in three places**, and the chapters are right or copy the slip. `telling.md`
  A2 `ucn` point 2 still has "on the model's lean it is the night the Cassette Man promised him", which R16
  withdraws (the chapter follows the ruling). A2 `salvage` point 4 and the R31 point in `telling-revisions.md` say
  the LEFTE sheet "is on his terminal" (`salvage` 2). A2 `ffps` point 1 has "a salvage each night" (`ffps` 5).
- **Nine quotations are exact but sit outside the record's `quote` field**, which C6 allows for printed labels
  only. All were checked against the transcripts and are right. Spoken lines, from `claim` or `title`: "special
  obligations under Paragraph 4" (`ffps-cassette-intro-paragraph-4`); "quite often" and "we aren't sure why"
  (`ffps-salvage-first-tape-alley`); "no longer a corporate entity", twice
  (`ffps-completion-tutorial-atonement`); "I don't hate you, but you need to stay out of my way."
  (`ucn-puppet-lines`); "This time, death cannot save you." (`ucn-nightmarionne-lines`, see `ucn` 5). Text on
  screen: "the decades-old pizzeria" (`fnaf3-coming-soon-newspaper`, `claim`); "Come and sit with me a while"
  (`ucn-omc-ending`, `claim`); "you have gone too deep into the code" (`fw-old-man-consequences`, `notes`). The fix
  is to extend those `quote` fields.
- **Length and repetition** (`reader`). `fazbears-fright` runs to about 1,090 words and `salvage` to about 1,170
  (C8: 600 to 1,000); `ffps` and `ucn` to about 1,370 (C8: about 1,300). `ffps` and `salvage` have five headings
  (C7: two to four). A reader going straight through meets the speech three times: in full in `ffps`, in
  `salvage`'s table and in `faith`'s. Orville's line is quoted in `ffps`, `ucn` and `faith` and cited in `salvage`.
- **Outside my chapters.** `nightmares` (`family.ts` L128): "On the model's lean there the listener is William
  Afton" names the man held, which R33 and section E keep to `ucn` ("none of them names him"). `bite`
  (`family.ts` L192): "lets a coin turn Golden Freddy into the bear that bit him" has the wording of `ucn` 3.

## Findings by type

| Type | Count | Where |
|---|---|---|
| `overreach` | 19 | `fazbears-fright` 2; `ffps` 2, 3, 5, 6; `salvage` 2, 3, 4, 6; `ucn` 3, 4, 6; `faith` 2, 5; beats 1, 2, 3, 4, 6 |
| `rulings` | 7 | `fazbears-fright` 1, 6; `ffps` 1, 7; `salvage` 1; `ucn` 7; `faith` 1 |
| `wrong record` | 4 | `ffps` 4; `salvage` 5; `ucn` 2; beats 5 |
| `uncited` | 4 | `fazbears-fright` 4; `ffps` 8; `ucn` 8; `faith` 4 |
| `frame` | 2 | `fazbears-fright` 3; `ucn` 1 |
| `reader` | 2 | `ffps` 9; `salvage` 7 |
| `misquote` | 1 | `ucn` 5 |
| `unsupported` | 1 | `faith` 3 |
| `consistency` | 1 | `fazbears-fright` 5 |
| dates, book-only names, fan labels | 0 | |
| **Total** | **41** | |

## The ten most serious findings

1. **`faith` 1.** The `answer` was not brought to round three. It ends "are the model's leans and no firmer",
   where the required text is "the game does not say: ((ucn)) weighs both", and the model has no lean on who is
   told to rest.
2. **`ffps` 1.** The round-three `tension` is applied in part. Tension and body drop "the killer's image returns",
   "what, if anything, of the man persists" and "not as one history", and list `ucn` among the chapters that argue
   "what later games carry of him".
3. **`ucn` 1.** The Michael reading is short of R16's: "a victim that can't perish" is used neutrally, two of
   Nightmare Fredbear's three lines and the offer of rest are missing, and `counterEvidence` lacks four records
   that R16 lists.
4. **Beats 1.** "its builders open a boarded-up room": implied by the record, stated by the beat. The chapter's
   own REVIEW note flags it.
5. **`ucn` 2.** "They call themselves \"remade\" and \"given flesh\"": both words are one character's, and the
   token is for a record that holds neither.
6. **`ffps` 2.** "would rather stay" is told as a fact about the volunteer three times. The record has the
   Cassette Man guessing, and the game does not show whether the volunteer leaves.
7. **`fazbears-fright` 1 and `salvage` 1.** "That is what FNaF3's own minigames show": the join between the tape
   and the dismantling is told flat, where R10 requires "can be read as" and R30 rates it low-medium.
8. **Beats 2.** "it is one night with no morning" is the narrator's, with no token. The records have voices say
   "forever".
9. **`faith` 2.** Two characters' rare lines are told as one voice, a join that `ucn` marks as the model's
   reading.
10. **Beats 3.** "opens a pizzeria as bait": the franchisee opens it, and the Cassette Man's use of the company is
    medium-low.
