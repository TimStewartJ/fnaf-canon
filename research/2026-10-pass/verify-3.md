# Verification 3: family.ts, murders.ts, nightshift.ts

Checked: all ten chapters, `afton-house`, `plush`, `nightmares`, `bite` (`family.ts`), `child-outside`, `murders`,
`golden` (`murders.ts`), `november-1987`, `fnaf1-restaurant`, `springtrap` (`nightshift.ts`). The three files are
as committed (last changed in `9c7938e` and `9d317d0`). The records are as they stood in the working tree at
10:30 on 3 October, on top of `5b07936`; they were still being edited while I worked, so I re-read every record
these chapters cite after each change.

- **Changed sentences.** 256 changed or added since `3e780e2`, by a sentence diff: `family.ts` 78 (`afton-house`
  23, `plush` 18, `nightmares` 17, `bite` 20), `murders.ts` 78 (`child-outside` 17, `murders` 38, `golden` 23),
  `nightshift.ts` 100 (`november-1987` 29, `fnaf1-restaurant` 31, `springtrap` 40). Nine are code comments that
  no page prints. Each was read against the claim and quote of every record it or its paragraph cites, then
  against R1, R3 to R13, R16, R24, R26 and R30 and the corrections of rounds four, 4b and 4c. The unchanged text
  was read as well, in the reader's view, with the other 25 chapters and the 20 beats beside it.
- **`quotecheck.mts … 3 --weak`** (last run at 10:30): 624 phrases, 2 MISS (both beat `s-1979`, the known fault),
  0 UNCITED, 20 weak. Three weak lines are in these chapters: `bite.body[17]`, and `fnaf1-restaurant.body[5]`
  rows 2 and 4. None is a fault. The tool names the first record that has the phrase anywhere; in each case
  another record cited in the same paragraph or cell has it verbatim in its `quote`
  (`scott-2017-matpat-final-theory`, `fnaf1-call1-phone-guy-previous-guard`, `fnaf1-call1-bite-of-87`).
- **`wordcheck.py --all`**: nothing in these files except the chapter id `partners` in a `seeAlso`, the years of
  Scott's posts, and "1988" three times in `fnaf1-restaurant`, all in the one sentence that shows the arithmetic.
- **A stricter quote check of my own** (every quotation, of any length): 23 quote blocks and 169 quotations in
  running text. All 23 blocks are verbatim. 147 of the 169 are verbatim in the `quote` of a record cited in the
  same block. Of the other 22, five are printed labels quoted from a cited record's claim ("Obsv.1", "11-12-xx"
  and the like), and 17 repeat words of a record cited elsewhere in the chapter. One of those 17 is a new
  quotation with no citation near it (child-outside 2 below).
- **Links and lists.** Every `((…))` and `seeAlso` target exists. Every `counterEvidence` id is discussed in its
  `tension`, and the counts the tensions announce ("Four records push back", "Three records suggest") are right.
  No `further` id is also cited in its chapter. A mechanical pass found no doubled word, lost space or
  unbalanced quotation mark or bracket.
- **Renderer.** Read, not run: the link that a `{{…}}` token becomes prints the person's `name` exactly as
  `people.ts` has it, in `ui`, `integ` and this worktree. Hero and figure captions go through `RichText` in `ui`
  and `integ`, so citations in captions print.
- **Images.** Six viewed against their captions, and all six match: the four whose captions changed (`murders`
  Fruity Maze, `golden` hero, `fnaf1-restaurant` hero, `springtrap` hero) and the heroes of `child-outside` and
  `afton-house`.

The six special points, as found:

1. The killer's end (R12, 4b) is kept in `springtrap`, `murders` and `golden`, word by word. The scene is told as
   shown; "he dies there" has its two supports once, in `springtrap`; "the ghosts of the five" is marked once
   there. Nowhere "the ghosts kill him", a shown "springlock failure", "freed" for "fade", or an unattributed
   "safe room" (the three uses are "which the tapes call", "what they call" and "tells staff that").
2. Every marker in `afton-house`, `plush`, `nightmares`, `bite` and `golden` agrees with R3 to R8.
3. The five carry "a June 26th between 1980 and 1986" and no year. In `murders` the costume and the Spring Bonnie
   suit are two sentences with a "most likely" each.
4. `november-1987` names no biter, no victim and no act, and says in one sentence that the model cannot say what
   was done that week.
5. FNaF1's label is "a November after 1987". "Not before November 1988" appears once, where the arithmetic is
   shown. Mike Schmidt is a name on two cheques and nothing more.
6. "Balloon Boy" is written out once, in the `tension` of `november-1987`. No `{{balloon-boy}}` token is used in
   these three files, so the two forms never meet.

## Findings

Eight in these files, and two where one of these chapters and a chapter in another file tell one thing two ways.
None changes a conclusion. "Minor" marks the ones a reader would hardly notice.

### afton-house 1. WRONG
- where: body, under "A room marked Private", the paragraph "On the last night the player can ignore…"
  (`family.ts` line 22)
- text: `{{handunit}}, the facility's recorded guide, tells him that he must stay until morning.`
- problem: No record calls HandUnit a recording, and one shows that it is not: it answers what the technician
  types, "I see what you were trying to type, and I will autocorrect it for you" (`sl-eggs-benedict`). It calls
  itself a Model 5 of the Handyman's Robotics and Unit Repair System (`sl-handunit-intro-job-ad`, claim). The
  fact check ruled this same gloss unsupported in `people.ts` (`factcheck-7a.md`, item 36), and `people.ts` now
  has "The automated guide". At `3e780e2` this sentence had "the facility's automated voice". The first reader's
  table of glosses (reader memo, 2.3) took "its recorded guide" from `funtimes` and `michael` as the one form,
  and the final pass carried it here and into `cover-story`.
- fix: `{{handunit}}, the facility's automated guide, tells him that he must stay until morning.`
  "Automated" is the fact check's own word, and rests on the unit's account of itself as a model of a robotics
  system; no record uses the word. If no adjective is wanted, "the facility's guide" needs no support.
- same fault, other files (in each, "its automated guide"):
  - `funtimes`, `machines.ts` line 43: `{{handunit}}, its recorded guide, explains:`
  - `michael`, `machines.ts` line 101: `{{handunit}}, its recorded guide, welcomes him as it would any new hire`
  - `cover-story`, `afterimage.ts` line 18: `the voice of {{handunit}}, its recorded guide.`

### afton-house 2. WRONG (minor)
- where: `tension`, the sentence "The facility's map has two separate clusters…" (`family.ts` line 44)
- text: `The facility's map has two separate clusters, and the model reads them as those two houses, on a match of drawings [[sl-breaker-map-obsv1-layout]] [[sl-breaker-map-obsv2-house-layout]]; it joins them through the plush on the desk and the single week the game tells, not through the building.`
- problem: The breaker panel's map has three faint clusters, not two (`sl-breaker-map-faint-clusters`: "three
  clusters of rooms in thin faint outline"). `patterns` says "three faint clusters", and this chapter's own
  `further` list holds the third (`sl-breaker-map-corridor-cluster`). The two that are meant are the ones the
  panel marks Obsv.1 and Obsv.2 (`sl-breaker-map-obsv-identification`). "The facility's map" is also the nearest
  name this chapter gives the Extras map, which leaves all three out. The wording is the fact check's own
  replacement (`factcheck-3.md`, item 2), which mended the marker and not the count.
- fix: `The breaker panel's map draws the Obsv.1 and Obsv.2 clusters apart, and the model reads them as those two houses, on a match of drawings [[sl-breaker-map-obsv1-layout]] [[sl-breaker-map-obsv2-house-layout]]; it joins them through the plush on the desk and the single week the game tells, not through the building.`

### plush 1. WORDING (minor; unchanged text)
- where: body, the compare box, column "The boy's own mind" (`family.ts` line 77)
- text: `Many are shown where no toy sits in a room: inside the restaurant, or on a black screen beside the eyeless sprite [[fnaf4-plush-eyes-by-scene]].`
- problem: The sprite has eyes. The cited record says "plain black eyes", `fnaf4-plush-two-sprites` says "plain
  black eyes and no pupils", and this chapter's own caption, further down, says "plain black eyes".
- fix: `Many are shown where no toy sits in a room: inside the restaurant, or on a black screen beside the sprite with plain black eyes [[fnaf4-plush-eyes-by-scene]].`

### bite 1. SLIP (minor)
- where: body, under "Not the Bite of '87", the paragraph "FNaF4 never prints its restaurant's name…"
  (`family.ts` line 165)
- text: `The Bite of '87 is another event, and what little is known of it is in ((november-1987)).`
- problem: The final pass retitled the target from "November 1987" to "November 1987, and the Bite of '87", and
  this sentence was left as it was. It now prints "…what little is known of it is in November 1987, and the
  Bite of '87." In the chapter that keeps the two bites apart, the link reads first as a date, and the sentence
  names the Bite twice.
- fix: `The Bite of '87 is another event, and little is known of it (see ((november-1987))).`
- same fault, other files: `remnant`, `machines.ts` line 75, `((golden)) tells both in full.` now prints "What
  became of the five, and Golden Freddy tells both in full."; write `Both are told in full in ((golden)).` The
  two new titles also sit inside comma lists of links, where the title's own comma reads as a separator:
  `games` (`apparatus.ts` lines 304, 305, 319), `thesis` (`story.ts` lines 29, 31), `canon-rules`
  (`apparatus.ts` line 77).

### child-outside 1. SLIP
- where: body, the paragraph after the Take Cake figure (`murders.ts` line 20)
- text: `{{puppet}} is the machine FNaF2's guard is warned about.`
- problem: The token prints the entry's name, "the Puppet", and nothing capitalises it, so the paragraph opens
  in lower case: "the Puppet is the machine…". The editor's memo (section 4) and `final-5.md` say that the page
  capitalises a token at the start of a sentence. No renderer does: the token's link prints
  `labelForEntity(id)` unchanged in `theory`, `integ`, `ui` and `ui-a` to `ui-d`.
- fix: `The machine FNaF2's guard is warned about is {{puppet}}.`
- same fault, other files (each opens a sentence, or a table cell, in lower case):
  - `killer`, `story.ts` line 68: `{{scraptrap}} is shaped differently` prints "the salvaged rabbit of Pizzeria
    Simulator is shaped differently"
  - `thesis`, `story.ts` line 34, first cell of a table row: `{{glitchtrap}} (known as Glitchtrap, …)` prints
    "the rabbit in the code (known as…"
  - `fazbears-fright`, `reckoning.ts` line 22: `{{phone-dude}} phones the guard` prints "the attraction's caller
    phones the guard"
  - `ffps`, `reckoning.ts` line 73: `{{cassette-man}} is the only name` prints "the Cassette Man is the only name"
  - `salvage`, `reckoning.ts` line 144: `{{scraptrap}} is the one the game names outright`
  - `burntrap`, `underground.ts` line 39: `{{glitchtrap}} (known as Glitchtrap, …) is software`
  One change in `RichText` would mend all seven instead: capitalise the first letter of a person token's label
  when the token opens a block or follows a full stop.

### child-outside 2. SLIP (minor)
- where: body, under "No date, no place, and an order by convention", the paragraph "Neither minigame carries a
  date…" (`murders.ts` line 37)
- text: `Its whole support is one word of that tape: the wound was \"first\" inflicted on him, and he then let it bleed out \"to cause all of this\".`
- problem: The paragraph cites no record. "To cause all of this" is quoted here for the first time; its record
  is cited two paragraphs up, under another heading. The words are verbatim in that record's `quote`.
- fix: `Its whole support is one word of that tape: the wound was \"first\" inflicted on him, and he then let it bleed out \"to cause all of this\" [[ffps-insanity-wound-first-inflicted]].`

### november-1987 1. WORDING (minor)
- where: `tension`, the sentence "For the suit, …" (`nightshift.ts` line 59)
- text: `For the suit, the rabbit is the suit the killer dies in [[fnaf3-n5-springlock-death]], and a grinning yellow figure with the look of that suit stands behind the girl in the one luring a main game shows [[ffps-fruity-maze-follow-me]]; the model leans to the bear, on the two assumptions set out above.`
- problem: "With the look of that suit" is only in the record's notes. Its claim has "a dim yellow costumed figure
  with a wide grin and a purple bow tie", and the capture cuts the ears off, as the caption in `murders` says.
  `murders`, which tells this screen in full, says only "a grinning yellow figure in costume". What a claim does
  carry is that "yellow rabbit figures appear" earlier in the same minigame (`ffps-fruity-maze-decay`). The
  phrase came with the editor's replacement tension (memo item `november-1987 4`).
- fix: `For the suit, the rabbit is the suit the killer dies in [[fnaf3-n5-springlock-death]], and yellow rabbit figures appear in the one luring a main game shows [[ffps-fruity-maze-decay]], which ends on a grinning yellow figure in costume behind the girl [[ffps-fruity-maze-follow-me]]; the model leans to the bear, on the two assumptions set out above.`
- same fault, other file: `killer`, `story.ts` line 76, `A grinning yellow figure in costume, with the look of
  the rabbit suit, stands behind a crying girl`; drop ", with the look of the rabbit suit,".

### fnaf1-restaurant 1. WORDING (minor; unchanged text)
- where: body, under "Most likely the old building", the paragraph "The building where the killer later dies…"
  (`nightshift.ts` line 105), and under "A notice of closure, most likely its own", the paragraph "Like the
  other clippings it is undated…" (line 122)
- text: `The building where the killer later dies has FNaF1's layout, plus one room that none of its cameras shows [[fnaf3-eon-map-fnaf1-layout]] (see ((springtrap))).` and
  `What happens next in the empty building is told in ((springtrap)).`
- problem: Both state flat that he dies after FNaF1's week. R12 holds that at medium, lower end ("it rests on
  that alone"); `springtrap` and beat `s-springlock` say "most likely", and this chapter's own `tension` speaks
  of the placing's "marker". The body of this chapter gives it none. The rival placing, before 1987, would make
  "later" false.
- fix: `The building where the killer dies has FNaF1's layout, plus one room that none of its cameras shows [[fnaf3-eon-map-fnaf1-layout]] (see ((springtrap))).` and
  `What most likely happens next in the empty building is told in ((springtrap)).`

## One fact, two tellings: the fix is in another file

### timeline-math 1. WRONG
- where: `tension` of `timeline-math`, the sentence "And in the week whose only year is 1983…" (`apparatus.ts`
  line 281). The other telling is the last sentence of the `tension` of `bite` (`family.ts` line 181).
- text: `And in the week whose only year is 1983, a girl has toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], which the model cannot explain and does not use.`
- against, in `bite`: `The model keeps the year on the television and reads the toys as deliberate misdirection.`
- problem: One record, and two accounts of what the model does with it: "cannot explain" there, "reads … as
  deliberate misdirection" here. R4 in `model.md` has the second: the two toy records "read as deliberate
  misdirection" (lines 636 to 637). `bite` follows the ruling and `timeline-math` does not.
- fix, in `timeline-math`: `And in the week whose only year is 1983, a girl has toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], which the model reads as deliberate misdirection (see ((bite))) and does not use.`

### open 1. SLIP
- where: `open`, body, the list item "**The dark bear and the dark rabbit.**", its last two sentences
  (`apparatus.ts` line 362). The other telling is in `springtrap`, under "Why he came back, on one reading"
  (`nightshift.ts` line 171).
- text: `The model reads the bear as the killer's lure, though following it also ends with the children out of the machines and the killer dead. The rabbit most likely helps (see ((springtrap))).`
- against, in `springtrap`: `On that reading {{shadow-freddy}} may be the killer's lure: it says \"follow me.\" and leads each machine to the place where it is taken apart [[fnaf3-eon-shadow-freddy-follow-me]].`
- problem: The link follows the sentence about the rabbit, and `springtrap` never mentions the dark rabbit: it
  tells the bear. The rabbit's cake is told in `fazbears-fright`. A smaller point: the two chapters mark R10's
  low-medium differently, "may be" in `springtrap` (the marker the writer chose for it, `final-4.md`) and "The
  model reads" here.
- fix, in `open`: `The model reads the bear as the killer's lure (see ((springtrap))), though following it also ends with the children out of the machines and the killer dead. The rabbit most likely helps (see ((fazbears-fright))).`
  If the two chapters are to carry one marker, open the first sentence "The bear may be the killer's lure (see
  ((springtrap))), though…".

## Counts

By kind, in these three files: WRONG 2, WORDING 3, SLIP 3. In other files: WRONG 1, SLIP 1. Ten in all.

By chapter: `afton-house` 2, `plush` 1, `bite` 1, `child-outside` 2, `november-1987` 1, `fnaf1-restaurant` 1;
outside these files, `timeline-math` 1 and `open` 1.

Three of the eight are in text that has not changed since `3e780e2`: plush 1, fnaf1-restaurant 1, and the
sentence of bite 1 (its target's title changed, not the sentence).

## Clean

`nightmares`, `murders`, `golden`, `springtrap`.

## For the adjudicator

- The front matter now says that "a further step in its answer carries its own marker in the sentence"
  (`theory.ts`, commit `785083b`, 09:46 today). Two answers here have a step with no marker of its own:
  `child-outside` ("and she stays on in it") and `golden` ("The children stay on in the machines"). Both steps
  are medium-high by the thesis table and are marked "most likely" in the body, so I did not count them. They do
  not keep the new sentence to the letter.
- The answer of `springtrap` and beat `s-springlock` call the suit he climbs into "the Spring Bonnie suit" flat;
  the body marks that identification "most likely", once. Step 15 of the order in `model.md` says it flat too, so
  I did not count it.
- Not checked: the games and captures themselves (the text was checked against the records only); 22 of the 28
  images in these chapters against their captions; the page as rendered (I read the renderer and started no
  server).
