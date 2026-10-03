# Fact-check 3: The family and The machines

## What was checked, and against what

- **Chapters.** `afton-house`, `plush`, `nightmares`, `bite` in `src/data/chapters/family.ts` and `funtimes`,
  `remnant`, `michael` in `src/data/chapters/machines.ts`, as committed in `1a5d50f` (3 October, 01:43). Neither
  file had changed at 02:29 (md5 `985b9542…` and `f1381540…`).
- **Storyline beats.** The seven in `src/data/theory.ts` whose `sections` name those chapters: `s-house`,
  `s-birthday`, `s-children-stay`, `s-afton-robotics`, `s-michael`, `s-fazbears-fright`, `s-trap-fire` (md5
  `bdaf4f68…`, unchanged at 02:29). `s-children-stay`, `s-fazbears-fright` and `s-trap-fire` are shared with
  other checkers; the notes on them here are short.
- **Records.** All 196 records the chapters and beats name (257 inline citations, 15 quote blocks, 17 figures and
  heroes, 5 date pills, every `counterEvidence` and `further` entry) were opened in the JSON. 150 quoted phrases
  were compared with the cited record's `quote` and `claim` by script and then by eye. All 17 figure and hero
  images, and two FNaF World screens, were looked at against their captions and records.
- **Rulings.** `rulings-brief.md` as saved at 00:54, and `model.md` for R3, R4, R5, R6, R12, R13, R15, R17, R32
  and section 5.2. `telling-revisions.md` (01:38) and `telling.md` (the outline of these chapters, the storyline's
  confidence lines, and style guide C3 to C6 and C9) were consulted for the rules that bind every writer.
  `npx tsx scripts/validate.ts` passes, with nothing unaccounted.
- **The wiki** was used once, as a screenshot aid (`michael` 3), and the finding says so. My own memory of the
  story decided nothing.

Several phrases questioned below are the lead's own, from the skeleton or the outline ("the wiring is in the main
run", "the desk whose monitors show the boy's bedroom", "the manager", the beats). They are findings all the
same: the test here is the record.

Problem types: `overreach` (the sentence says more than the record: a design told as the object, an `implied`
told as shown, a reading told as a label); `as fact` (an inference of the model's, written without its
marker); `unsupported`; `wrong record`; `misquote`; `quotation` (verbatim, but from the wrong field);
`uncited` (a record exists); `no record`; `frame` (answer, confidence, counter-evidence, tension); `rulings`
(against a ruling's required wording); `consistency` (with itself or another chapter); `reader`.

## The checks the assignment named

| Check | Result |
|---|---|
| What is said to be "shown" in the Private Room | Sound for the room, the lock-in, the keypad, the three views, the empty rooms, the handset. Not sound for the plush: the record shows a plush **of the same design**, and four places make it FNaF4's own toy (`afton-house` 1, `plush` 5, `s-house` 4). Two more sentences say more than the panel shows (`afton-house` 2 and 3). |
| The keypad digits | Honest: "The keypad has no display. The code that works, as players record it, is 1-9-8-3". What is missing is the other half of the record, that the game never says what the number means (`afton-house` 5). No beat and no other chapter uses the code. |
| The Night 6 plush | Correct everywhere: whole, with pupils, beside the boy until its last line (`plush` hero, body and callout; `bite`; `s-birthday`). The two dots are given to FNaF World each time. Two nits (`plush` 8 and 9). |
| The hallway clock | Clean. No chapter writes "the same grandfather clock". The clock record is only filed under `further`, and the tension joins the two houses "not through the building". |
| Quoted phrases verbatim | One misquote, in a beat (`s-afton-robotics` 1). One spoken line is quoted from a record's `claim`, not its `quote` (`afton-house` 10). Everything else is exact: from the `quote` field, or, for words printed on a screen or a sheet, from the `claim`. All 15 quote blocks match. |
| "Elizabeth" | Clean. The name appears once, as the Cassette Man's word in Pizzeria Simulator, with "Sister Location never says so, and never speaks the name". Elsewhere she is "the daughter" or "his sister". |
| Remnant | The chapter stays inside the sheet. The storyline does not quite: it misquotes the sheet's title and carries the low reading in a beat marked high (`s-afton-robotics` 1 and 2). |
| The Nightmares | The chapter is careful ("The line implies…"). The beat is not: "which a later game calls illusion", of "the restaurant's mascots" (`s-house` 1 and 2). |
| The crying child's fate | Clean. Each chapter marks the death "most likely" where it first says it; no placement after the fade; the alternative is named; the flatline is given as a description. |
| `afton-house` against rounds two and three | No withdrawn wording. No Ultimate Custom Night, no Midnight Motorist, no clock, no dots. "Watched in 1983" is a separate step, held loosely. No barred link token. `telling-revisions.md` lists it as "no change", and I found nothing that contradicts that. Its findings are overreaches against the records, not stale rulings. |
| Written to the current rulings | One miss: `nightmares` states the model's lean on who sits in Ultimate Custom Night's office, which round three confines to `ucn` (`nightmares` 1). |
| Book-only names, fan labels | None, in text, captions or link tokens. |

---

## `afton-house`: The house on the monitors

**Verdict: minor fixes.** The chapter does what it sets out to do. The findings are places where a careful sentence
slips one step past its record. The first two sit in the callout and the tension, where the chapter says it is
being exact.

1. **"and FNaF4's plush on its desk. That much is on screen."** (callout; also the answer's "FNaF4's Fredbear
   plush on its desk"). `overreach`. `sl-private-room-fredbear-plush`: "the same design as the Fredbear plush of
   FNaF4's minigames"; notes: "Whether it is the same object as FNaF4's plush is not stated". R3's own table puts
   "that it is the same object" under Inferred. The body has it right ("the same design as the toy"). Write, in
   both places: "a Fredbear plush of FNaF4's design on its desk".
2. **"and the facility's map draws them as two clusters"** (tension). `overreach`, and uncited. That the two
   clusters are the two houses is a reading: `sl-breaker-map-obsv2-house-layout` is `implied` ("a match between
   two drawings and no label says so") and `sl-breaker-map-obsv1-layout` says "Reading, not label". R3 lists it
   under Inferred. The figure caption in the same chapter is honest about this; the tension is not. Write: "and
   the facility's map has two separate clusters, which the model reads as those two houses on a match of
   drawings [[sl-breaker-map-obsv1-layout]] [[sl-breaker-map-obsv2-house-layout]]".
3. **"Its wiring is in the main run."** `overreach`. `sl-breaker-map-faint-clusters`, notes: "What a faint line
   stands for (a passage, a cable, a camera link) is not said". `sl-breaker-panel-obsv-systems`: "'Obsv.' is
   never spelled out or explained". Write: "The main run points at it too."
4. **"It cannot be the other way round, because the boy who is bitten most likely dies"**. `overreach`: a
   certainty drawn from a "most likely". R6 rates the death medium-high and implied, and R3 rates this
   identification medium at its lower end. Write: "The other way round is unlikely: the boy who
   is bitten most likely dies…".
5. **"is 1-9-8-3: the one year FNaF4 prints"**. `as fact`. `sl-private-room-keypad-1983`: "The game gives no
   prompt for the code and never says what the number means"; R3 lists "that they mean a year" under Inferred,
   and R24 says keypad codes are not dates. The digits are handled honestly; their meaning is not marked. Add:
   "The game never says what the number means; the model reads it as that year."
6. **"The family's name comes from Sister Location"** (and the close, "So the family in FNaF4 has a name").
   `as fact`. The inference is not marked until the section "Whose house" ("Everything from here is
   inference"), and the answer is "Most likely". Write: "If the family has a name, it comes from Sister
   Location…" and "So the family in FNaF4 most likely has a name…".
7. **"the blueprints of his machines list \"Parental Tracking\" among their features"**. `overreach`. One sheet
   has that label (`sl-blueprint-funtime-freddy`); `sl-blueprint-funtime-foxy` has "Parental Voice Sync &
   Replay". Write: "one of his machines' blueprints lists".
8. **"fitting a rabbit's head onto a co-worker"**, and "The only adults the boy meets". `overreach`.
   `fnaf4-purple-guy-suits-up-employee`: "another person", whom the child "glimpses". Write "onto another
   person" (as `plush` does) and "The only adults drawn".
9. **"The room and the panel are the only places where Sister Location looks back at FNaF4's house."**
   `no record`. A universal negative that no record carries (it is `model.md`'s sentence). Write "the only
   places this archive has found". The same for **"a room most players never enter"**: what the records give is
   that the room needs a keycard from a hidden minigame (`sl-private-room-restricted`,
   `sl-baby-minigame-girl-grabbed`).
10. **"\"I know it was an accident\" is said in the girl's voice"**. `quotation`. Verbatim, but from the `claim`
    of `sl-fake-ending-girl-voice`; its `quote` field holds a different line, and the style guide allows the
    `claim` only for printed labels. Add the line to the record's `quote`, or leave as it is and accept the
    exception (`funtimes` uses it the same way). In the same callout, **"\"Birthday boy\" is a party machine's
    stock phrase"** capitalises a quotation whose record has "the birthday boy": write "The phrase \"birthday
    boy\" is…".
11. **"The room lies on a branch of the game that its real ending overrides."** `reader`. A reader who does not
    know that the last night has two outcomes cannot follow this. Write: "The night in that room is one of two
    ways the last night can go, and the game's real ending is the other."

## `plush`: The voice in the plush

**Verdict: minor fixes.** The three corrections the rulings asked for are all made, and the rival reading gets its
full strength. The findings are small.

1. **"beside monitors that show this boy's bedroom"** (body) and **"the desk whose monitors show the boy's
   bedroom"** (answer). `overreach`. `sl-private-room-monitor-bedroom`: "the bedroom in which FNaF4's nights are
   played… that the two are one home is the usual reading, not something either game states". R4's wording is
   "most likely the child's own". Write "the bedroom of FNaF4's nights" in both; the compare block already has
   "the bedroom".
2. **"its text keeps one colour and one manner from the first line to the last"** (tension). `overreach`.
   `fnaf4-speaker-text-colours`: "The plush's own yellow varies from scene to scene"; the record says nothing of
   manner. Write: "its text is the same pale yellow throughout, as far as the captures can tell".
3. **`counterEvidence` and `tension`**. `frame`. The one scene the body sets against the reading that the voice
   is William Afton's ("Against it there is a scene") is in neither. Add `fnaf4-purple-guy-suits-up-employee`
   to `counterEvidence`, and a clause to the tension.
4. **"Most are printed where no toy sits in a room"**. `no record`. `fnaf4-plush-eyes-by-scene` and
   `fnaf4-plush-follows-child` say where the sprite is and is not; neither counts lines. Write "Many", or name
   the scenes.
5. **"Sister Location puts the same toy somewhere else."** `overreach`, as `afton-house` 1. Write: "Sister
   Location puts a toy of the same design somewhere else."
6. **"it keeps it at its lowest grade"** (tension, of the device) beside **"is its reading at the lowest
   grade"** (body, of William Afton's voice). `consistency`. R5 rates the two differently: the device low-medium,
   the voice low. Write "it keeps it as a lean" in the tension.
7. **"returns, years later, as the errand Afton sets his other son"**. `as fact`. "Other son" assumes the boy is
   Afton's (R3: medium), and "years later" is the model's order: Michael's week is placed by convention (R12).
   Write: "returns as the errand Afton sets his son".
8. **"The two white dots in the dark"** (callout). `no record`. `fw-opening-put-you-back-together` gives no
   colour. Its image shows white dots; `fw-clock-ending-still-your-friends` says "small yellow eyes"; the notes
   of `fnaf4-i-will-put-you-back-together` say "two yellow dots" of the opening. Write "The two dots in the
   dark", as the tension and `bite` do.
9. **"whole and facing him"** (hero caption). `overreach`, slight. `fnaf4-plush-night6-pupils-only`: "small white
   pupils on the side of its eyes facing him". The toy faces the screen; its pupils face the boy. Write "whole
   and looking at him".

## `nightmares`: The nights in the bedroom

**Verdict: minor fixes.** The chapter keeps "a real room" apart from "the nights happened", which is the hard part.
One sentence breaks a round-three rule.

1. **"On the model's lean there the listener is William Afton"**. `rulings`. R33: "UCN's lean only in the UCN
   chapter". `telling-revisions.md`, for every writer: every other chapter "says that who is held there is not
   settled and links `ucn`; it does not write 'the model leans to William Afton'". R4 still needs the point, so
   keep it as a conditional: "Who the line is said to depends on who sits in Ultimate Custom Night's office,
   which is not settled (see ((ucn))). If it is William Afton, the model reads the illusion as his doing, at its
   lowest grade and with nothing built on it. If it is his son…".
2. **"A sixth night is played after the party, when the boy cannot be at home [[fnaf4-nightmare-fredbear-4am]]"**
   (tension). `wrong record`. That record says only that Nightmare Fredbear takes over at 4 AM. That Night 6
   follows the party is in `fnaf4-minigame-countdown-to-party` ("0 days on the Night 5 minigame") and
   `fnaf4-night6-fade-order`. Cite one of those. Keep the body's "can hardly be at home": no record says where
   he is.
3. **"Sister Location came next."**, and "the game Scott made after this one", "the game made to follow FNaF4".
   `unsupported`. FNaF World came between (January 2016; Sister Location, October 2016: `games.json`). Write:
   "The next game in the main series was Sister Location." That it was made to mend FNaF4 has a record the
   chapter does not cite: `scott-2018-interview-each-game-fixed-the-last` (a transcript).
4. **"Either way, what he fights is not what is there: a later game's word for it is \"illusion\"."** (answer).
   `as fact`. R4 rates this medium, and `ucn-nightmare-fredbear-lines` says the line "implies that last time it
   was only an illusion, without saying whose". The body marks both; the answer marks neither. Write: "Either
   way, what he fights is most likely not what is there: a later game's line implies it was \"illusion\"."
5. **"A reversed scrap of the first game's opening phone call can be heard in the room"** (compare; and the
   tension). `overreach`: a wiki report of audio told as heard. `fnaf4-reversed-phone-guy` rests on the wiki's
   Easter-egg page, and the writer's own REVIEW note says it was not checked by ear. Write "is reported in the
   room", and say in one clause why it counts for a dream: the call belongs to a later year.
6. **"If the listener is his son instead, the line is said to someone who once faced the illusion himself"**.
   `reader`. Circular as written. Write: "If it is his son, \"this time\" is said to the one who faced the
   illusion last time, and the nights in that bedroom would be the older brother's, not the small boy's."

## `bite`: The bite at the birthday party

**Verdict: minor fixes.** The scene is told from the records line by line, and the flatline is handled as the
rulings ask. One sentence of the tension names the wrong bear.

1. **"and has that bear throw the promise back at its player"** (tension). `overreach`. "That bear" is the
   Fredbear a coin calls up (`ucn-death-coin-fredbear`). The line is Nightmare Fredbear's
   (`ucn-nightmare-fredbear-lines`), a different entry on that roster; the secret Fredbear has other lines
   (`ucn-fredbear-lines`). Write: "and has Nightmare Fredbear, the bear of FNaF4's nights, throw the promise
   back at its player".
2. **"he treated being \"hung up on 1983 vs 1987\" as a misunderstanding… [[scott-2017-matpat-final-theory]]"**.
   `wrong record`. The cited record has the quoted words and says he told those readers to watch a video.
   "Misunderstood" is in `scott-2017-misunderstood-not-reveals`. Add that citation.
3. **"Two days before the game came out, the 7 became a 3"**, after "Scott's own website moved the same way".
   `overreach`. `scottgames-site-fnaf4-html-83`: the change is seen "by 21 July 2015"; the capture before it is
   9 July. Both records say Scott never explained the digits, and the first says it is fans who read them as
   "87". Write: "By two days before the game came out, the 7 had become a 3. He never explained the digits."
4. **"and a toy like one of them lies in pieces in the house"** (tension). `overreach`.
   `fnaf4-mangle-pieces-in-house`: "The wiki gallery captions the pieces 'Mangle'; the game gives no label and
   the pieces are a few pixels each". Write: "and pink-and-white toy pieces, which players take for another of
   them, lie on a bedroom floor".
5. **"on the title card of a cartoon"** (date pill basis). `unsupported`. `fnaf4-fredbear-and-friends-1983` says
   "a broadcast" and "TV show". Write "of a show".
6. **"FNaF World opens on two dots in the dark repeating the promise"** and **"The bear that bit him was a
   yellow one."** `uncited`. Cite `fw-opening-put-you-back-together` for the first and `fnaf4-diner-unnamed` for
   the second. The second also needs its point said: the later restaurants' yellow bear is Golden Freddy.

## `funtimes`: Afton Robotics

**Verdict: minor fixes.** Clean on everything R32 changed: three legs and not the sheets, "holding" as an
inference, the rentals split, "Elizabeth" as Pizzeria Simulator's word, no second victim claimed.

1. **"cannot fall after the first game's restaurant closed (see ((afton-house)) and ((timeline-math)))"**.
   `consistency`. Neither chapter carries the point. `afton-house` mentions the pink bed and draws no date from
   it; `timeline-math` never mentions the room (checked at 02:29). And `model.md` R12 is less flat than
   "cannot": "except on the tightest dating, which R24 leans against". Write "can hardly fall", and either drop
   the two links or add the sentence to one of those chapters.
2. **"Only \"a handful of people\" ever saw the inside"**. `overreach`. `scottgames-site-sl-news-kids-tested`:
   "One local is quoted as saying". Write: "One local is quoted: only \"a handful of people\"…".
3. **"The machines were built for a restaurant that never opened."** `uncited`. It leans on
   `scott-2016-sl-store-text` (the store page advertises the Pizza World) and
   `sl-springlock-suit-from-old-pizzeria` ("my old pizzeria"), both filed under `further`. Cite one. "Never
   opened" also sits oddly beside Baby's "one day" on a stage a few paragraphs earlier: write "whose grand
   opening was cancelled".

## `remnant`: Remnant

**Verdict: minor fixes** (nearly clean). The sheet is quoted exactly, each note with its own record; the scooper
is "most likely"; nothing is injected; nothing is "in the metal"; "none of his design" is given as an argument
from silence. I checked the sheet's four lettered parts against the image: the chapter is right.

1. **"and why no other chapter builds on it"** (tension). `consistency`. The reading is repeated in `thesis`
   ("The model reads it, at a low grade, as the machine on a blueprint marked Afton Robotics") and told in
   `s-afton-robotics`, a beat marked high. Write "and why nothing else rests on it", and see `s-afton-robotics`
   2.
2. **"it sets a mascot's head on each of four dead children"**. `overreach`, slight.
   `fnaf2-give-gifts-give-life`: "four grey, dead-looking children". Write "four grey, dead-looking children".
   `s-children-stay` has the same phrase.
3. **"That the Cassette Man chose fire because of it"**. `consistency`. R28 bars "he burns it", and `ffps` and
   the beat `s-trap-fire` say the game does not show who lights the fire. Write: "That the fire was the Cassette
   Man's choice, and made because of this note, is an inference the model holds loosely".

## `michael`: The son who should be dead

**Verdict: minor fixes.** The week is told from the records without a slip, the table gives R13 as revised, and
the two conventions are named as conventions.

1. **`confidence: "high"`**. `frame`. The answer's last sentence rests on two identifications that R13 rates
   medium at its lower end and medium. The page's own rule is "A chapter takes the mark of the weakest claim its
   answer depends on". The outline says the two "carry their own marker", which a reader of the mark cannot
   know. Either end the answer at "got back up." (the table carries the rest), or rate the chapter medium.
2. **"the manager of Pizzeria Simulator's pizzeria"**, "unnamed manager", "For the manager". `consistency`. The
   game's word is "franchisee" (`ffps-tutorial-franchisee`), and R13, `ffps`, and this chapter's own `changesIf`
   use it. Write "franchisee" throughout (`s-trap-fire` too).
3. **"A later game's roster gives the thing now looking out of him a name, {{ennard}}… Sister Location's own
   dialogue never says it."** `overreach`, and `no record` for the second sentence.
   `ucn-roster-two-forms-at-once` shows only that the roster has an "Ennard". That it is the thing inside him is
   `implied` in `sl-real-ending-scooped-mirror` and "the wiki identifies" in `sl-custom-night-ennard-ejected`,
   and no record says what Sister Location does not print. As a screenshot aid I looked at the wiki's capture of
   the game's Extras screen for that figure: it shows no name. Write: "Ultimate Custom Night's roster lists an
   Ennard [[ucn-roster-two-forms-at-once]], and the model takes that to be the thing now looking out of him. No
   line in these scenes names it."
4. **"The model reads it as a daughter who expected her father."** (tension). `consistency`. `ffps` answers the
   same line differently: "is the line for an outsider". Use one answer in both.

---

## The seven storyline beats

**`s-house`: needs work.** One sentence carries four findings.

1. **"monstrous versions of the restaurant's mascots"**. `unsupported`. The attackers are Nightmare versions of
   Freddy, Bonnie, Chica and Foxy, a Nightmare Fredbear, Plushtrap and Nightmare
   (`fnaf4-nightmare-animatronics`). FNaF4's restaurant has "a stage with a yellow bear and a rabbit"
   (`fnaf4-diner-unnamed`); no record puts the four in it. Write, as the chapter does: "monstrous versions of
   the first game's mascots".
2. **"which a later game calls \"illusion\""**. `overreach`: an implication told as a naming.
   `ucn-nightmare-fredbear-lines`, notes: "implies that last time it was only an illusion, without saying
   whose". Write: "which a later game's line implies were \"illusion\"".
3. **"are spent holding his bedroom doors"**. `as fact`. That the one in the bed is the boy, in his own bedroom,
   is R4 clause 2 (medium at its lower end; "most likely the child's own"). `fnaf4-bedroom-setting`: "The
   protagonist's identity is not stated in-game". "As the game plays them" does not mark it. Write: "The nights
   of that week are played in a child's bedroom, most likely his, holding its doors against…".
4. **"and the same plush on its desk"**. `overreach`, as `afton-house` 1. Write "a plush of the same design".

**`s-afton-robotics`: needs work.**

1. **"\"scalable creation of ulterior presence\""**. `misquote`. The sheet prints "S.calable C.reation of
   U.lterior P.resence" (`ffps-scup-blueprint`, and the image). The chapter corrected this; the beat did not.
   Quote it as printed, or take the quotation marks off.
2. **`confidence: "high"`**. `frame`. The beat ends on the model's reading of the sheet, which R15 and the
   beat's own outline line rate low-medium, and which `remnant` says no other chapter builds on. The schema
   gives a beat "the weakest link the beat depends on". End the beat at the rentals, with one plain sentence
   that another of the firm's sheets is where the word Remnant appears (see ((remnant))); or lower the mark.
3. **"Their blueprints carry labels such as…"**. `overreach`, slight. All three labels are on one sheet
   (`sl-blueprint-funtime-freddy`). Write "One of their blueprints carries".

**`s-fazbears-fright`: minor fixes.**

1. **"and its builders open a boarded-up room: \"We found one. A real one.\""** `overreach`.
   `fnaf3-call2-found-a-real-one`, notes: "That it came from the boarded-up room is implied by the Night 1 lead,
   not stated". The `fazbears-fright` chapter already says "implied". Write: "its builders follow a lead to a
   boarded-up room [[fnaf3-call1-boarded-room-lead]]. The next night: \"We found one. A real one.\"".

**`s-trap-fire`: minor fixes.**

1. **"The manager who lets them in"**. `consistency`. "The franchisee" (`michael` 2).
2. **"the fused remains of the other rental machines"**. `as fact`. R30 rates this medium-high, and
   `ffps-molten-freddy-alley-wires-eyes` says the game "never says where this animatronic came from". Add "most
   likely".
3. **"opens a pizzeria as bait"**. `unsupported`. No record has the Cassette Man open it: the player is the
   franchisee (`ffps-tutorial-franchisee`), and what he says is that all were "called here"
   (`ffps-completion-labyrinth`). R28's sentence is "calls four haunted machines into one building". Write "sets
   a pizzeria as bait".

**`s-birthday`, `s-michael`: clean.** **`s-children-stay`: clean** for what it takes from `remnant`, apart from
"four dead children" (`remnant` 2).

---

## The ten most serious findings

1. **`s-house` 1 and 2.** "monstrous versions of the restaurant's mascots, which a later game calls illusion":
   the first half has no record and the second turns an implication into a statement, in the short telling
   that readers meet first.
2. **`afton-house` 1.** "FNaF4's plush on its desk. That much is on screen." The record shows a plush of the same
   design, and the sentence is the chapter's own list of what is shown. Repeated in the answer, `plush` 5 and
   `s-house` 4.
3. **`s-afton-robotics` 1.** The sheet's title is misquoted in the storyline.
4. **`nightmares` 1.** The model's lean on Ultimate Custom Night's player is stated outside `ucn`, against R33
   and the round-three rule for every writer.
5. **`afton-house` 2.** "the facility's map draws them as two clusters": a match of drawings, graded `implied`,
   told as a fact in the tension.
6. **`plush` 1 and `s-house` 3.** "This boy's bedroom", "his bedroom doors": the nights' bedroom is the boy's only
   "most likely".
7. **`bite` 1.** "that bear" gives Nightmare Fredbear's line to the Fredbear of the Death Coin.
8. **`afton-house` 3.** "Its wiring is in the main run": the record says what the lines stand for is not said.
9. **`s-afton-robotics` 2 and `michael` 1.** Two marks of "high" over text that ends on a medium or low-medium
   claim, against the rule the page prints.
10. **`nightmares` 2.** The tension cites a record that does not say what the sentence says.

## Counts

53 findings: 11 in `afton-house`, 9 in `plush`, 6 in `nightmares`, 6 in `bite`, 3 in `funtimes`, 3 in `remnant`,
4 in `michael`, 11 in the beats.

| Type | Count |
|---|---|
| `overreach` | 21 |
| `consistency` | 7 |
| `as fact` | 6 |
| `unsupported` | 4 |
| `no record` | 3 |
| `frame` | 3 |
| `uncited` | 2 |
| `wrong record` | 2 |
| `reader` | 2 |
| `misquote` | 1 |
| `quotation` | 1 |
| `rulings` | 1 |

No finding on dates: the five pills have the right kinds ("printed" for the year on the television, "estimated"
for c. 1983, "relative" for thirty years).

## Noticed outside the assignment

- **Records that disagree about FNaF World's dots.** White in the image of `fw-opening-put-you-back-together`;
  "yellow" in `fw-clock-ending-still-your-friends` and `fw-android-port-clock-ending` (of the clock ending), and
  in the notes of `fnaf4-i-will-put-you-back-together` (of the opening itself). The opening's record says they
  are the same two dots.
- **Two audio records graded differently on the same footing.** `fnaf4-reversed-phone-guy` is `shown` and
  `fnaf4-flatline` is `implied`; both rest on the wiki's description of a sound nobody here has heard.
- **`ffps-scup-blueprint` transcribes parts B and D only.** The image also prints "A: Excavating Arm" and "C: Arm
  Base and Balance". `remnant` relies on A.
- **`fnaf4-night6-brother-apology`** gives the grey lines to the brother in its `claim` and calls that "still a
  reading" in its notes. `afton-house` ("whose last words in FNaF4 are an apology") and `s-birthday` follow the
  claim; `bite` carries the caveat ("in the colour the game gives his brother"). If the caveat matters, `bite`'s
  form is the one to copy.
- **`hw2-puppet-master-1983`**: its notes still say the Sister Location file "had no record" of the Private
  Room's code. It has one now.
