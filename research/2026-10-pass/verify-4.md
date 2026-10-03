# Verification 4: reckoning.ts, afterimage.ts

Checked: all nine chapters (`fazbears-fright`, `ffps`, `salvage`, `ucn`, `faith`; `cover-story`, `digital`,
`vanny`, `pizzaplex`). Diff base `3e780e2`; the two files as they stand at `035c233` (10:48), unchanged since
`ead932c` (08:52). 274 changed or new sentences, counting answers, headings, captions, table cells and cards:
fazbears-fright 36, ffps 26, salvage 24, ucn 47, faith 12, cover-story 25, digital 30, vanny 41, pizzaplex 33.
Each was read against the `claim` and `quote` of the records it cites (282 records cited in the text, 438 with
the lists; working tree), against R1 to R33 with rounds four, 4b and 4c, and against the beats and the other
chapters that tell the same thing. All nine were then read from the top in the reader's view (`chapter.mts`),
and the storyline in `beats.mts`.

Tools, run on the working tree at 10:00:
- `quotecheck.mts … 3 --weak`: 624 quoted phrases; 2 `MISS`, both in beat `s-1979` (the known fault); 0 `UNCITED`;
  20 weak. Six weak lines are in my chapters (`ffps.body[10]`, `ucn.answer`, `ucn.tension` twice, `ucn.body[16]`,
  `digital.body[14]`). Each phrase is verbatim in the `quote` of another record that the same chapter cites.
- `wordcheck.py --all`: in my files it prints only the years of Scott's statements (2014, 2015, 2017, 2018, 2021),
  all in `reckoning.ts`.
- My own check of every quotation, of any length: 249 quoted phrases in running text, of which 232 are verbatim
  in the `quote` of the next record cited and 17 are accounted for (verbatim in another record of the same block
  or chapter, or not a quotation from a record, such as `never says "Hell"`). All 26 quote blocks are verbatim.
  No misquotation.
- Every `{{token}}` (41 uses) printed with its stored name, in its sentence. No name from the novels and no fan
  label in either file. "Burntrap" and "Glitchtrap" stand only in their first-use forms.

The records moved while I worked. The evidence files were rewritten at 09:56 (still uncommitted at 10:51), and 15
records that my chapters cite changed: 11 had typographic apostrophes or quotation marks made plain, one quote
was lengthened, two gained a quote, and `ffps-completion-fire` changed in `claim` and `notes`. I re-read every
sentence that cites them: `ffps` 2 is the one result. The other data files were edited until 10:39 and
committed at 10:44 (`ad6d311`, `9e849b0`), and other chapters were mended at 10:40 and 10:48 (`a3a27d0`,
`035c233`). I checked again at 10:51: no cited record has changed since 09:56, no name that a token of mine
prints has changed, and what I quote from other files below is as it stands in `035c233`.

In the sentences below, quotation marks are written plain. In the `.ts` files each is `\"`.

## Findings

### fazbears-fright 1. WORDING
- where: (a) `fazbears-fright`, `tension`, third sentence. (b) `salvage`, body, the last paragraph of "Where the
  five are, and the stretch not shown", after the comparison. (c) `faith`, `answer`, second sentence. (d) `faith`,
  body, the paragraph that begins "After the speech come two voices".
- text: (a) `Three gaps remain: no record says when the stones were set, no game shows the five between the attraction and the trap, and after that fire one voice still refuses release [[ucn-orville-he-tried-to-release]].`
  (b) `What the Cassette Man did with the four is told in ((ffps)), and what one voice did afterwards in ((ucn)).`
  (c) `Ultimate Custom Night then has one voice that refuses release and another that says "Rest your own soul".`
  (d) `After the speech come two voices, both in Ultimate Custom Night.`
- problem: That Ultimate Custom Night follows Pizzeria Simulator's fire is medium-high and "not firm" (R12; round
  four, order of events, step 21). The standing form is "most likely": `ucn` has "most likely after that fire",
  `salvage`'s own table "Stated, and most likely after the fire", beat `s-night-without-end` "After the fire, most
  likely". (a) and (b) are new in the final pass and state the order flat. (c) and (d) are unchanged since the
  base and can be read as the order of the games, so they are the adjudicator's call.
- fix: (a) `Three gaps remain: no record says when the stones were set, no game shows the five between the attraction and the trap, and one voice, most likely after that fire, still refuses release [[ucn-orville-he-tried-to-release]].`
  (b) `What the Cassette Man did with the four is told in ((ffps)), and what one voice did, most likely afterwards, in ((ucn)).`
  (c) `Ultimate Custom Night, most likely set after it, has one voice that refuses release and another that says "Rest your own soul".`
  (d) `Two more voices are heard in Ultimate Custom Night, most likely after the speech.`

### fazbears-fright 2. SLIP
- where: (a) `fazbears-fright`, body, "The attraction finds one real machine", first sentence. (b) `ffps`, body,
  "The plan, in his own words", first sentence. (c) `salvage`, body, "The killer comes, and so does his daughter",
  first sentence.
- text: (a) `{{phone-dude}} phones the guard on the first two nights.`
  (b) `{{cassette-man}} is the only name the games give the voice on the tapes: a role in a credits list [[ffps-credits-cassette-man]].`
  (c) `{{scraptrap}} is the one the game names outright: William Afton [[ffps-credits-william-afton]] (Scott's guide adds "AKA Scraptrap") [[scott-ucn-character-guide-afton]].`
- problem: Each sentence opens with a token whose stored name starts in lower case ("the attraction's caller", "the
  Cassette Man", "the salvaged rabbit of Pizzeria Simulator"), so it prints with a lower-case first letter. The
  editor's memo (section 4) and `final-5.md` ("ffps 4", not applied: "the page now capitalises a token at the
  start of a sentence") rely on the page. No page does it: `EntityLink` prints `labelForEntity(id)` unchanged in
  `theory` (`src/components/ui.tsx`) and in `ui` and `integ` (`src/components/RichText.tsx`; `integ` as merged at
  09:36), and no style rule does it either. I read the components and did not render a page. Four more sentences
  open the same way in other files (`thesis`, `killer`, `child-outside`, `burntrap`), and still do at `035c233`.
- fix: Build the capitalisation into the page, as decided. Or turn the sentences:
  (a) `On the first two nights {{phone-dude}} phones the guard.`
  (b) `The only name the games give the voice on the tapes is {{cassette-man}}: a role in a credits list [[ffps-credits-cassette-man]].`
  (c) is mended by the fix of `salvage` 1.

### ffps 1. WORDING
- where: (a) body, the paragraph that begins "Then the game hides what it has just shown", last sentence.
  (b) `tension`, second sentence.
- text: (a) `When he turns one down, the company's instructor voice, {{tutorial-unit}}, reminds him of Saturday's party [[ffps-tutorial-saturday-party]]: "you want them all to be in one place!" [[ffps-tutorial-all-in-one-place]]`
  (b) `What later games reopen is counted in the last section, at unequal firmness: a company whose own voice says it is "no longer a corporate entity" [[ffps-completion-tutorial-atonement]] trades again, a pizzeria with the same sign lies under its Mega Pizzaplex, and one voice refuses release.`
- problem: Both make Tutorial Unit the company's own voice, flat. R31: that the Cassette Man ran his trap through
  the company is medium-low, "and the Pizzeria Simulator items are its conduct only on that reading". `cover-story`
  says of the same voice and the same message: "The game does not say whether it speaks for the company or only for
  {{cassette-man}}". Both phrases are older than the final pass.
- fix: (a) `When he turns one down, the game's instructor voice, {{tutorial-unit}}, reminds him of Saturday's party [[ffps-tutorial-saturday-party]]: "you want them all to be in one place!" [[ffps-tutorial-all-in-one-place]]`
  (b) `What later games reopen is counted in the last section, at unequal firmness: a company that this game's closing message calls "no longer a corporate entity" [[ffps-completion-tutorial-atonement]] trades again, a pizzeria with the same sign lies under its Mega Pizzaplex, and one voice refuses release.`

### ffps 2. WORDING
- where: body, "Saturday: he speaks, and it burns", the paragraph that begins "The fire breaks out", first sentence.
- text: `The fire breaks out during the speech, and salvaged machines are shown burning as the building goes up [[ffps-completion-fire]].`
- problem: The record changed under the sentence at 09:56. Its claim was "salvaged animatronics are shown burning
  as the building goes up in flames". It is now "a fire breaks out in the pizzeria, and three salvaged animatronics
  are shown burning: Scrap Baby, Molten Freddy and the salvaged rabbit of Pizzeria Simulator", and its notes say
  that the three shots are interiors and that "that the fire destroys the building is the wiki's account". The
  chapter's own hero image is the slide of the building "still standing". `places.ts` now has "a fire breaks out in
  it, and three of the salvaged machines are shown burning".
- fix: `The fire breaks out during the speech, and three of the salvaged machines are shown burning [[ffps-completion-fire]].`

### salvage 1. WORDING
- where: body, "The killer comes, and so does his daughter", first sentence.
- text: `{{scraptrap}} is the one the game names outright: William Afton [[ffps-credits-william-afton]] (Scott's guide adds "AKA Scraptrap") [[scott-ucn-character-guide-afton]].`
- problem: "The one" disagrees with the storyline and with this chapter. Beat `s-trap-fire`:
  `The game names two: Afton, in what is left of the rabbit [[ffps-credits-william-afton]], and Elizabeth, his daughter, in what is left of Circus Baby [[ffps-completion-connection-terminated-elizabeth]].`
  The table above this sentence has the Cassette Man call Scrap Baby Elizabeth, on the same record, and `ffps`
  says "This is where the games give her that name." The record's claim also gives the name to the rabbit's voice
  and not to the rabbit, as the chapter's hero caption and table do ("The credits give his voice that name"). The
  phrase is older than the final pass.
- fix: `The credits give the voice of {{scraptrap}} a name: William Afton [[ffps-credits-william-afton]] (Scott's guide adds "AKA Scraptrap") [[scott-ucn-character-guide-afton]].`

### ucn 1. WORDING
- where: body, "The weakest point: the old man's line", the paragraph that begins "Two listeners are possible", fifth
  sentence.
- text: `The other is the accuser, whose voice refuses rest in this game, told to let the demon go.`
- problem: States flat that the refusing voice is the accuser's. R28: "a voice refuses release (stated; whose,
  low)"; round 4b says the same of R16. `salvage`'s table has "Whose voice, and whom it holds: not settled", and
  this chapter marks the same join two sections earlier ("the model reads it as his"). The clause is older than the
  final pass.
- fix: `The other is the accuser, whose voice the model reads as the one that refuses rest in this game, told to let the demon go.`

### faith 1. WORDING
- where: body, the paragraph that begins "The games go no further", first two sentences.
- text: `The games go no further. The archive's records show no church in them and no doctrine.`
- problem: "The games go no further" speaks for every game with no record behind it. The editor's items faith 3 and
  4 (08:35) put the next sentence and the last one of this paragraph in the records form, and left this one.
- fix: `The archive's records go no further: they show no church in the games and no doctrine.`

### cover-story 1. WRONG
- where: (a) `cover-story`, body, first paragraph, second sentence. (b) `digital`, body, the paragraph before "It
  wants a way out through a tester", first sentence.
- text: (a) `It opens with a ride past a series of posters and the voice of {{handunit}}, its recorded guide.`
  (b) `In the finished game {{handunit}}, its recorded guide, boasts that the company's teams used "vintage control-boards almost like plug-and-play, digitally recreating performances and personalities from the past" [[hw-handunit-vintage-control-boards]].`
- problem: No record calls HandUnit a recording. The fact check ruled this gloss unsupported in `people.ts`
  (`factcheck-7a.md`, item 36: the Sister Location guide answers what the technician types, `sl-eggs-benedict`),
  and `people.ts` has "The automated guide of Sister Location" and "A guide of the same name narrates Help Wanted".
  The base had "the company's guide" in (a) and "its guide" in (b); the final pass put in the first reader's gloss
  (reader's memo, 2.3). I passed this in my own reading: verifier 3's report names place (a), and on checking it
  against the records I found (b).
- fix: (a) `It opens with a ride past a series of posters and the voice of {{handunit}}, its guide.`
  (b) `In the finished game {{handunit}}, its guide, boasts that the company's teams used "vintage control-boards almost like plug-and-play, digitally recreating performances and personalities from the past" [[hw-handunit-vintage-control-boards]].`
  "Its guide" needs no record. The three Sister Location places (`afton-house`, `funtimes`, `michael`) were
  mended to "automated guide" at 10:40 and 10:48. If one form is wanted in all five, it is "its automated guide"
  here too, though no record of Help Wanted describes this voice.

### vanny 1. WORDING
- where: (a) `vanny`, body, the comparison in "One woman, or two", card "Two women", first sentence. (b)
  `pizzaplex`, `tension`, second sentence. (c) `vanny`, body, "Princess Quest: fought from inside, and unproven",
  first paragraph, last two sentences.
- text: (a) `Vanessa, and someone else in the costume: the plain reading of a page on which one stands and the other has fallen, and of a cast list that gives the two parts to two performers [[security-breach-credits-vanessa-vanny-two-parts]].`
  (b) `One leaves Gregory asleep in a box in an alley with the rabbit-costumed woman's shadow over him [[security-breach-ending-alley]], which no later game undoes on screen.`
  (c) `The third game's Princess crosses a pixel copy of Help Wanted's hub and corn maze, trades a rabbit mask and a plush for a key, and strikes a door like the one at the end of Help Wanted. There is a scream, and the cabinet shows "ERROR" [[security-breach-pq3-help-wanted-hub-trapped-door]] (as described).`
- problem: A provenance tag is missing where the record needs one. (a) R19 has the cast list cited "from a fan
  wiki's transcription of the credits"; this chapter's tension tags the same record "(a fan wiki's account)", and
  the card does not. (b) By the record's notes the page on file does not show the shadow, which "follows the wiki's
  caption of the second page"; the chapter's table tags it "(as described)", and the tension does not. (c) The
  whole scene is "by the wiki's account (not watched)". Before the final pass the first sentence began "As that
  game is described"; now the tag stands on the second sentence only and the first reads flat. (c) is minor.
- fix: (a) `Vanessa, and someone else in the costume: the plain reading of a page on which one stands and the other has fallen, and of a cast list that gives the two parts to two performers [[security-breach-credits-vanessa-vanny-two-parts]] (a fan wiki's account).`
  (b) `One leaves Gregory asleep in a box in an alley with the rabbit-costumed woman's shadow over him [[security-breach-ending-alley]] (as described), which no later game undoes on screen.`
  (c) `The third game's Princess crosses a pixel copy of Help Wanted's hub and corn maze, trades a rabbit mask and a plush for a key, and strikes a door like the one at the end of Help Wanted; there is a scream, and the cabinet shows "ERROR" [[security-breach-pq3-help-wanted-hub-trapped-door]] (as described).`

### vanny 2. WORDING
- where: `changesIf`.
- text: `A game that shows two women together outside the rooftop page or names the caller on the hidden call, or a later game that shows Vanessa with the mask off.`
- problem: Behind R19 as it reads after 4c. Its "Changes if" now also has a game that "says outright that the two
  are one", "the credits roll, once captured, reads otherwise than the transcription" and "any third record for
  two women". The answer, the three cards and the tension do follow R19 at medium (the cards apart from `vanny` 1).
- fix: `A game that shows two women together outside the rooftop page, names the caller on the hidden call, or says outright that the two are one; a later game that shows Vanessa with the mask off; a capture of the credits roll that reads otherwise than the wiki's transcription; or any third record for two women.`

### vanny 3. WORDING
- where: body, "Princess Quest: fought from inside, and unproven", the paragraph that begins "Whether it worked is
  open", last sentence.
- text: `One ending shows the rabbit crushed, and in the next game the mask still shows a rabbit's shadow on the hideout wall [[ruin-vanny-hideout-glitchtrap-shadow]] (as described).`
- problem: The crush is Help Wanted 2's and the shadow is RUIN's, so "the next game" states their order flat.
  Round 4c made that order "most likely" (R22: only "Security Breach before RUIN" is fixed), and by release RUIN is
  the earlier of the two. The phrase is R19's own wording line, which is older than 4c. Verifier 2 counted the
  same sentence in `patterns`, and it has been mended there; I had this as a line for the adjudicator and count
  it so that the two chapters agree.
- fix: `One ending shows the rabbit crushed, and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow on the hideout wall [[ruin-vanny-hideout-glitchtrap-shadow]] (as described).`
  These are the words `patterns` has had since `a3a27d0` ("and in RUIN, most likely the later of the two"), and
  that sentence sends the reader here.

### pizzaplex 1. WORDING
- where: `answer`, last sentence.
- text: `Vanessa may have been freed, which only another ending shows.`
- problem: No ending shows it. `security-breach-ending-redemption` shows the mask on the floor and an unnamed blonde
  woman at the doors, "and says nothing more"; that she is Vanessa and was freed is the model's reading at
  low-medium (R19 (4)), and 4c ruled that the page is no leg for either reading. The base had "that Vanessa was
  freed is the model's reading, held loosely"; the gloss came in with the final pass.
- fix: `Vanessa may have been freed: that rests on another ending, which leaves the mask on the floor and a blonde woman at the doors.`

### pizzaplex 2. WORDING
- where: (a) body, the paragraph that begins "The building stands on something, too", first sentence. (b) body, the
  table in "Six endings, and RUIN follows no single one", row "The old elevator", second cell.
- text: (a) `The building stands on something, too: an older pizzeria whose sign reads "Freddy Fazbear's Pizza Place" and, in a recharge station down there, {{burntrap}} [[security-breach-underground-pizza-place]] (known as Burntrap, a working name that Scott has said now stands [[scott-2024-interview-placeholder-names-canon]]).`
  (b) `The boy beats the burnt rabbit under the Pizzaplex among rooms of burners, and a mass of old parts drags it into the ceiling [[security-breach-ending-burn-it-all-down]]`
- problem: Two words of age that the records no longer carry. (a) The record's claim was reworded at 07:21 from "a
  buried older pizzeria" to "a ruined pizzeria". `ffps` took "a ruined pizzeria" in its final pass, `timeline.ts`
  and `places.ts` changed "an older pizzeria" to "a ruined pizzeria" this morning (`ad6d311`), and this is now
  the last place in `src/data` that calls the buried pizzeria older. As with "newest", no record compares the two
  buildings' ages. (b) The record has "the mass of animatronic parts"; `people.ts` dropped "old" from the same
  phrase (`9e849b0`), and `burntrap` has "the mass of parts". (b) is older than the final pass and is minor.
- fix: (a) `The building stands on something, too: a ruined pizzeria whose sign reads "Freddy Fazbear's Pizza Place" and, in a recharge station down there, {{burntrap}} [[security-breach-underground-pizza-place]] (known as Burntrap, a working name that Scott has said now stands [[scott-2024-interview-placeholder-names-canon]]).`
  (b) `The boy beats the burnt rabbit under the Pizzaplex among rooms of burners, and a mass of animatronic parts drags it into the ceiling [[security-breach-ending-burn-it-all-down]]`

## Counts

13 findings: 1 WRONG, 11 WORDING, 1 SLIP.

By chapter of filing: `fazbears-fright` 2, `ffps` 2, `salvage` 1, `ucn` 1, `faith` 1, `cover-story` 1, `digital` 0,
`vanny` 3, `pizzaplex` 2. Some findings have places in other chapters of mine: `salvage` and `faith` in
`fazbears-fright` 1, `ffps` and `salvage` in `fazbears-fright` 2, `digital` in `cover-story` 1, `pizzaplex` in
`vanny` 1.

Where the faults came from:
- Six came in with the final pass or round 4c: `fazbears-fright` 1 (a, b), `fazbears-fright` 2, `cover-story` 1,
  `vanny` 1 (a, c), `pizzaplex` 1, `pizzaplex` 2 (a).
- Three are text that a record or a ruling moved away from afterwards: `ffps` 2 (the record, at 09:56), `vanny` 2
  and `vanny` 3 (round 4c).
- Four are older text that earlier checks let stand: `ffps` 1, `salvage` 1, `ucn` 1, `faith` 1.

## Clean

No chapter is wholly clean. `digital` has one place only, the gloss of `cover-story` 1 (b). `cover-story` has that
gloss and nothing else.

## The special points, as asked

- `vanny`: read whole. The answer, the three cards and the tension give R19 (1) at medium, the rooftop page at full
  weight ("It counts against one woman in full") and the cast list at support weight ("at less weight than the
  page"). The list is given as two parts for two performers, and the tension says "the list does not say two
  women". The page with the mask on the floor has "a blonde woman" and names nobody. Short of R19: `vanny` 1 (a)
  and `vanny` 2. `pizzaplex`, `digital` and `cover-story` say nothing firmer about who Vanny is; `pizzaplex` 1 is
  firmer about her release.
- `ucn`: the lean to William Afton is never stated flat, here or in my other chapters, which have "not settled" or
  "the game does not say". Every line quoted from the game is verbatim. `In the archive's records this game never
  says "Hell"` is the only form of that claim (once here, once in `faith`). One flat attribution: `ucn` 1.
- `ffps`, `salvage`: "presents that fire as" the end; "most likely frees the children"; "does not show who lights
  it"; "I am remaining as well"; "old friend"; no book name. See `ffps` 2 for the building.
- `fazbears-fright`: "A local amusement park"; the date is "thirty years later", kind `printed`, with no year.
- `digital`: "something William Afton left behind" with "the model reads"; "No game says which machine the boards
  came from"; the first-use form is as ruled.
- `pizzaplex`: "the Mega Pizzaplex" only; "PROTOTYPE" is told as printed under the foot and as not counting; "the
  sequel follows no single one of them".
- `faith`: what Scott believes rests on his own words: four statements of 2014 and one of 2021, four of them
  quoted and one, the twelve years of Christian films and games, paraphrased closely from his own sentence. One
  universal is left: `faith` 1. Two more sentences have the same reach without the words "never", "no game" or
  "nowhere", and are unchanged since the base: "That is the story's whole moral order" and "nothing in the game
  shows where anyone goes".

## Seen and not counted

- `ffps`, "the office monitor shows three blueprints while his hidden tape plays": the record cited,
  `ffps-insanity-new-way-to-desecrate`, has the blueprints only in its notes. `ffps-insanity-egg-baby-trigger`
  states it in its claim and could be cited beside it.
- `ucn`, `tension`, "a stage machine from Pizzeria Simulator": no record says which game Rockstar Bonnie is from.
  The gloss is `model.md`'s (R16's table: "A Pizzeria Simulator product").
- `vanny` and `pizzaplex`, "draw every ending except the Princess Quest one": the claim of
  `ruin-gregory-comics-depict-endings` lists scenes of four endings; the roof and "every ending except" are in its
  notes, and `pizzaplex`'s table says of the roof only "A page fits it". Unchanged since the base.
- `pizzaplex`, "a glitch in the building's robots is traced to the client": the record has a therapist say so, and
  `people.ts` now says "A therapist says". The paragraph is framed as what the recordings hold.
- `digital`, `"He" appeared first to Jeremy`: the record's quote has lower-case "he".
- `faith`, "The vocabulary is small": a closed list. The archive's records of Ultimate Custom Night also have
  "eternal" and "eternity" (`ucn-jack-o-chica-burns-eternal`, `ucn-lefty-lines`, `ucn-music-man-eternal`).

## For the adjudicator

- `model.md` R19 calls two women "the plain reading of the rooftop's two pages and of the cast list", and the
  `vanny` card "Two women" follows it (with "a page" for "two pages"). The brief's R19 says "two voices", never
  "two women", and the chapter's tension says "the list does not say two women".
- R16 (3) counts the whisper under the rare lines as support for "he runs the night"; R28 grades whose voice it is
  "low". `ucn` marks the join "the model reads it as his" (older text, passed by the fact check). By the scale a
  low reading takes "may be". If that changes, the fix of `ucn` 1 changes with it.
- R28's wording, "stays as it burns", now rests on the title of `ffps-completion-fire` and on "a fire breaks out in
  the pizzeria". In my chapters it is the `ffps` answer ("stayed as it burned"), the heading "Saturday: he speaks,
  and it burns" and `faith`'s "a burning building". I let them stand on R28. The home page changed its own "The
  building burns" to "A fire breaks out in the pizzeria" (`5b07936`).
- R30 has "That game never says "Ennard"", and `salvage` has it and "The game never prints "Springtrap"", both
  flat. `people.ts` and `relations.ts` now print both as "In the archive's records Pizzeria Simulator never
  says …". Each silence is in a record's notes (`ffps-molten-freddy-alley-wires-eyes`,
  `ffps-scraptrap-always-come-back`), so by the editor's rule the flat form may stand, but the layers now differ.
- R19's wording line still prescribes "the next game still has a rabbit in the mask" (see `vanny` 3). R20 and R26
  still print the older first-use form for Burntrap.
- Pizzeria Simulator's cast list is held as a wiki transcript too (`ffps-credits-william-afton`, notes), and
  `salvage` and `ffps` cite it with no tag, where `vanny` tags Security Breach's list. R1 (c) calls that credit
  stated.

## Could not check

- The order of lines within Pizzeria Simulator's tapes and last speech. The records carry no order. I compared the
  chapters' order with the fan wiki's transcript, which is outside the archive, and it agrees.
- Anything that needs listening or play: the second, whispering voice under the rare lines; the two cast lists,
  held as a wiki's transcription; every scene tagged "(as described)".
- The built page. I started no server, so `fazbears-fright` 2 rests on reading the components.
- Anything after 10:51. The evidence files are still uncommitted in the working tree and may move again.
