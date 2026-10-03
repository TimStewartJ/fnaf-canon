# Editor's memo: one fact, one telling

From the lead author, 3 October 2026, 07:14. For the six chapter writers, with a last section for the owner.

**Added since the first publication at 07:14.** No published item was changed, moved or renumbered by any of this.

- 07:37: section 6 of "For every writer" (what the timeline's fix pass changed, checked against the chapters), and
  one item each for writers 1 and 5, tagged ADDED 07:37 (`games` 3, `fazbears-fright` 7). Both are applied.
- 08:20: section B of "For the owner" and the last paragraphs of section 6, on what changed in `theory.ts`.
- 08:35: section 7 of "For every writer" (what the pages were told not to say, checked against the chapters as
  committed in the final pass), and eleven items tagged ADDED 08:35, all applied at 08:36 (`c1bd92c`): `thesis` 7 to 9 and `open` 5 (writer 1);
  `ffps` 5 to 7, `ucn` 6 and `faith` 3 and 4 (writer 5); `digital` 9 (writer 6). Writers 2, 3 and 4 have none.
- 08:45: section 8 of "For every writer" (the chapters as committed, checked once more against rounds four and
  4b, R26's tier 3 and R19), and two items tagged ADDED 08:45, both for writer 1: `timeline-math` 4 and `games` 4.
  Both were applied at 08:52 (`ead932c`), in the adjudicator's wording of round 4c. The paragraph on R19 in
  section 8 was rewritten at 08:47, after the owner's correction: the label is viewed, and nothing is to be hedged.
- 09:20: section 9 of "For every writer" (round 4c, checked against the chapters and the storyline as committed),
  and sections A and B of "For the owner" brought up to the state at 09:20. No item was added. All 195 items are
  answered in the files, and the storyline is committed (`d059017`).
- 09:45: the owner's answers to section A, recorded there, and what they changed in `theory.ts`, at the head of
  section B: three lines, not yet committed. Nothing for the writers.

**What was read.** All 35 chapters as committed at `3e780e2` (every chapter in the reader's view, and the files for
fields and tokens); the storyline as committed in `0b55708`; `rulings-brief.md` with rounds four and 4b; and the
records as they stood at 07:00. Two things were moving while this was written. The records were still being
re-worded (`sb-mimic.json` changed three times between 05:45 and 06:10), so every sentence was read against the
record's present text, and the list for each chapter is a minimum, as your brief says. And three chapter files
were already being edited from 07:00 (`makers.ts`, `underground.ts`, `apparatus.ts`): eleven items that those
edits had already answered were dropped, and the rest were checked against the files as they stood at 07:14.
**If a sentence quoted here has changed since, apply the item's `new` to the sentence as it now stands.**

**How to read an item.** Each item gives the chapter and field, the exact words now in the file (`old`), the words
that replace them (`new`), and one line of reason with the record or ruling. Quotation marks are written plain here;
in the `.ts` files a quotation mark inside a string is `\"`. Tokens (`[[record]]`, `{{person}}`, `((chapter))`,
`<<pill>>`) are written as in the files. Every `old` string was checked by script against the files at 07:14 and was
there. Where an item says "replace the whole `tension`", the `new` text is the whole field and
keeps every citation the old one had. Each item carries a tag for the kind of change:

| Tag | What it is |
|---|---|
| NEW RECORD | a record that did not exist when the chapter was written |
| ONE TELLING | a fact another chapter or the storyline tells differently |
| THE KILLER'S END | R12's rule (section 2 below) |
| ROUND FOUR | a wording the adjudicator corrected in round four or 4b |
| RECORD | the cited record was re-worded, and the sentence now says more than it does |
| NAME | a token, a first-use form, or a word the word check prints |
| LINK | a link that points to the wrong chapter, or is missing |
| LENGTH | an `answer` over three sentences or a `tension` over five, with the tightened text |
| ADDED 07:37, ADDED 08:35, ADDED 08:45 | an item added after the memo was first published |

Nothing here is a rewrite for style. Where the reader's memo rewrites a sentence that an item here also changes,
keep the reader's sentence and make sure it says what this item's `new` says.

## For every writer

### 1. Where each shared thing is told in full

One chapter tells each of these in full. Every other chapter gives it a clause and a link. This list was written
before the reader's repetition table and has been set beside it: the two name the same home in every row. Where the
reader's table words a thing in an older way (A12 "Vanessa on the roof", A15 "the coin that turns Golden Freddy into
Fredbear"), the wording in section 3 below stands.

| The thing | Told in full in | What the others do |
|---|---|---|
| The killer's last scene (five grey, crying children; the suit snaps shut), that he dies there, and that the children are ghosts | `springtrap` | `killer` keeps the scene as its opening, told as shown, and links. Everyone else: "he dies in the suit" or "the five corner him", with a link |
| The chain of names from the purple figure to William Afton, and "it's still me" | `killer` | "(see ((killer)))" |
| What a springlock suit is; the room on no map; "Fredbear's Family Diner or something like that" | `springlocks` | a clause |
| The rooms walled up with their contents; the tape's "lured them all back", read as the dismantling ("can be read as") | `springtrap` | `fazbears-fright` keeps "they will never find rest now" and links; `remnant` links |
| The Spring Bonnie suit "noticeably moved"; the clippings; the man caught next morning; the bracket for the five | `murders` | `timeline-math` keeps the arithmetic in one list item |
| Edwin, Fiona and David Murray; the two machines; the night of 1979; that the cabinet F10-N4 is the first machine; that night's three endings | `two-machines` | `mimic`, `patterns` and `cover-story` say "a machine in the building" or "on the reading argued there" and link. The join is made nowhere else |
| The day in 1979 (the work order and the mailbox) | `timeline-math` | `two-machines` gives the pill and links |
| The contract, and the dispatcher's call on the road | `springlocks` | a clause |
| "WA", "W.A." and Hen; what the Cassette Man and Afton were to each other; "this monster that I unwillingly helped to create"; "prisons of my making" | `partners` | a clause; nobody else says "partners" except to deny it or to link |
| The Private Room: the monitors, the plush with the handset, the keypad, the breaker map; the second bedroom | `afton-house` | `plush` (the handset only) and `nightmares` (the monitors as "a real room") take a sentence each and link |
| The plush's lines through the week | `plush` | a clause |
| The bite; the scene after it (the toys fade, the promise, the boy fades); 1983 against 1987 | `bite` | `patterns` keeps the scene as its opening and links |
| Take Cake, Security Puppet, "my daughter", "shut out and left to die", "a wound first inflicted on me" | `child-outside` | a clause |
| Give Gifts, Give Life; the seven counts of the dead; the yellow bear; the names on the stones; "tiny breaths of life"; the coin spent on Golden Freddy | `golden` | `thesis` and `remnant` say "he says he never learned how" and link; `bite` and `ucn` mention the coin once each |
| The week of November 1987: the report of tampering, the lockdown, the yellow suit, SAVE THEM, the Bite of '87; the old restaurant "left to rot" | `november-1987` | a clause |
| FNaF1's date and building; Phone Guy; the four offices and their paperwork | `fnaf1-restaurant` | `timeline-math` shows the working for the date |
| Whether Mike Schmidt is Michael Afton | `michael` | `fnaf1-restaurant` and `open` give the two facts (a first name, the word "Odor") and link |
| The Funtime sheets; Circus Baby's one day; the daughter; HandUnit's "unfortunate closing" | `funtimes` | a clause |
| The Remnant sheet; "a new way to desecrate" | `remnant` | `thesis` quotes the phrase once |
| The week underground; "You won't die"; the speech at the wreck | `michael` | `killer` tells the speech once, for its fourth link |
| What Fazbear's Fright found; that a local amusement park runs it; Happiest Day and FNaF3's two endings; that fire | `fazbears-fright` | a clause |
| Pizzeria Simulator's plan, the last speech as a whole, "old friend", the fire, who lights it, whether the volunteer left; the graves as that game's last picture | `ffps` | `faith` sorts the speech by listener and quotes only what it sorts; one figure prints in `ffps` and `golden`, and the two captions must agree |
| The four machines in the alley; where the five are, stage by stage | `salvage` | "(see ((salvage)))" |
| Who sits in Ultimate Custom Night's office; the accuser; Old Man Consequences | `ucn` | every other chapter says "not settled (see ((ucn)))" and names no one |
| What returns of the killer after the fire is not one history | `thesis`, last section | a clause, once a chapter |
| What the company says of itself; the games inside the story; the three layers of a staged level | `cover-story` | a clause |
| The hidden tapes of Help Wanted; the scan; the rabbit in the code; Special Delivery's second scan and "vintage Bonnie" | `digital` | `timeline-math` owns the scan's place against the fire |
| Ness, Vanessa and Vanny; the rooftop page; Princess Quest; whether Vanessa was freed | `vanny` | `pizzaplex` keeps its table cell and links |
| The six endings, and which one RUIN follows | `pizzaplex` | `vanny` links |
| The cable, the old elevator shaft, the sign; whose remains the burnt rabbit is; the mass of parts | `burntrap` | `pizzaplex` and `ffps` give one sentence and link |
| The endoskeleton behind the concrete; M.X.E.S.; the mask before Cassie; the arm with six dolls and the White Tiger doll | `mimic` | a clause |
| "I always come back"; "I will put you back together" as an echo | `patterns` | a clause |
| What counts as evidence; the labels policy | `canon-rules` | "(see ((canon-rules)))" |
| FNaF World's frame; Into the Pit; tales told inside a game | `edges` | "an adaptation that the main games never place", once a chapter |
| How every date is reached; "summer job" | `timeline-math` | the pill, and a link |
| Where each release sits; Scott's "used SL to clear up a misconception from FNaF 4" | `games` | a clause |
| Scott's one retcon; everything left open | `open` | "(see ((open)))" |

### 2. The killer's end: R12's rule as it stands after round 4b

The rule in your brief is the one applied here. In full:

1. **The scene is told as shown** wherever it is described, in a body, a caption or a table cell marked "shown":
   five grey, crying children corner a purple figure in a room; he climbs into the yellow rabbit suit; it snaps shut
   on him, blood pours out, and he slumps to the floor; the children fade.
2. **"He dies there" is a firm inference.** `springtrap` states it once, in the sentence after the scene, with its
   two supports: the tapes on what a loosened springlock does, and the body in the suit thirty years on. Every
   other chapter may say "he dies in the suit" flat, with a link to `springtrap` on first mention.
3. **"The ghosts of the five" is the model's reading.** `springtrap` marks it once, with its supports. Every other
   chapter may say "five ghosts" flat.
4. **Four limits on the flat forms.** Not "the ghosts kill him": they corner him, and he climbs in himself. Not "a
   springlock failure" as something shown. "Fade", and never "freed", "released" or "gone". The room is "the room
   with the suit": that it is the tapes' hidden room is medium (R8), so "hidden room" or "safe room" of that room
   takes a "most likely" or the tapes' name. And the scene dates nothing.

How the chapters stood against it: `springtrap` told the scene as shown and had neither the stated inference nor
the marked reading (three items); `killer` is right and gains a link; `murders`, `golden`, `salvage`, `fazbears-fright`
and `open` each break a limit in one or two places ("hidden room", "shown" beside "ghosts", "the ghosts free"); `thesis`
needs its table row re-worded as the adjudicator's now is. `ucn`, `november-1987`, `canon-rules`, `patterns`,
`games` and `timeline-math` are within the rule as they stand.

### 3. One wording for what several chapters tell

These are the storyline's wordings, committed in `0b55708`, and the rulings' after round 4b. A chapter that tells
the fact uses these words or says less.

| The fact | The wording that stands | Chapters that differed |
|---|---|---|
| The bracket for the five | "a June 26th between 1980 and 1986"; the day and month are printed, for two children; the model takes the June of 1986 as the latest because the old restaurant traded on and was then left to rot, and no record prints that step; 1980 is loose | none: `murders` and `timeline-math` agree |
| The seven counts of the dead | "in seven counts of the dead there are four and one more"; the yellow bear marks the one more in four of the seven | `bite` ("Wherever the dead are counted") |
| The Puppet's four | "four grey, dead-looking children" | `thesis`, `child-outside`, `salvage`, `golden` ("a dead child") |
| The night of 1979 | pill "1979, most likely 7 September"; either support alone gives the day | `timeline-math` (mended in the file by 07:12) |
| David Murray's death | implied, never stated; that the second machine followed it is the model's reading | `two-machines` (answer and body) |
| The letters | one signed "WA", which names no reader; one signed "W.A.", to someone inside the firm | `partners` (mended in the file by 07:10) |
| The cabinet F10-N4 | "a machine in the building"; that it is the first machine is argued once, in `two-machines` | none |
| The Cradle | it "can keep David safe"; the David it means is most likely the copy | `two-machines` |
| Sister Location's opening | "an unnamed man" questions the designer | `afton-house`, `funtimes` ("a board member") |
| The Private Room's plush | "a Fredbear plush of FNaF4's design", or "of the same design" | none |
| The older boy | "his older brother" rests on one line of a friend's ("your brother"), cited once in `afton-house` | `afton-house` (citation) |
| The boy after the bite | "He most likely dies, and after that no record places him." | `bite` |
| The child outside | "shut out of a building"; no game names it | `killer` ("a restaurant"), `edges` ("outside one") |
| The costume of the five's killer | one "most likely" for the yellow rabbit costume | `murders` (two markers), `canon-rules` (none) |
| Fruity Maze's last screen | "a grinning yellow figure in costume"; its ears are out of frame | `murders`, `november-1987`, `patterns` |
| November 1987 | someone "may have tampered"; "What was done that week, no record says"; by the wiki's activity tables the older machines and the yellow bear are active when they are | `november-1987`, `golden` ("in play") |
| FNaF1's date | pill "a November after 1987"; "not before November 1988" in words, where the arithmetic is shown | `fnaf1-restaurant`, `timeline-math` (pill label) |
| Who runs Fazbear's Fright | "a local amusement park" | none |
| The tape's "lured them all back" | "can be read as" the dismantling | `springtrap` ("The model reads"), `remnant` |
| Who is in Ultimate Custom Night's office | not settled; that this night follows the fire is "most likely"; that the accuser runs the night is the model's reading | `ucn` (answer; no marker on the order) |
| The coin | a coin spent on Golden Freddy brings Fredbear's attack, and no text explains it | `bite` (tension) |
| The fire | "who lights it, the game does not show"; salvaged machines are shown burning; "the game presents the fire as his end" | `ffps` ("the machines", "William Afton is among those") |
| The company | "behaves as one actor in every game that shows it"; "each concession comes with a denial or a disclaimer beside it" | `cover-story` |
| The woman on the roof, and at the doors | "a blonde woman in Vanessa's cap and uniform"; "a blonde woman waits at the doors"; that she is Vanessa is the model's reading | `vanny`, `pizzaplex` |
| The rabbit in the mask in RUIN | the shadow on the hideout wall, by the wiki's summary (`ruin-vanny-hideout-glitchtrap-shadow`) | `vanny`, `patterns` |
| The second Gregory voice | "a second Gregory voice", which the model takes for the boy | `mimic`, `pizzaplex`, `patterns` |
| The cable under the raceway | "a construction crew at the raceway" | `pizzaplex` ("Its builders") |
| The headless Freddy | "PROTOTYPE" is printed under its foot; it does not count against the underground route | `pizzaplex` |
| The Pizzaplex | "the Mega Pizzaplex"; never "largest" | none |
| The one retcon | told in `open`; `murders` links | none |

### 4. Names and tokens

`people.ts` now prints these display names. A token prints the name in lower case, and the page capitalises it at
the start of a sentence.

| Token | Prints | First-use form the chapter must give once (R26) |
|---|---|---|
| `{{glitchtrap}}` | the rabbit in the code | "(known as Glitchtrap, Scott's working name for it)" |
| `{{burntrap}}` | the burnt rabbit under the Pizzaplex | "(the game's files call it Burntrap, a working name that Scott has said now stands)" |
| `{{scraptrap}}` | the salvaged rabbit of Pizzeria Simulator | none needed if the chapter also names William Afton |
| `{{the-mimic}}` | the copying endoskeleton | |
| `{{tape-girl}}` | the tape speaker | |
| `{{phone-dude}}` | the attraction's caller | |
| `{{shadow-freddy}}` | the dark bear | |
| `{{crying-child}}` | the crying child | |
| `{{older-brother}}`, `{{fifth-child}}`, `{{cassette-mans-daughter}}` | the older brother; the fifth child; the Cassette Man's daughter | |

The items below give the sentence for each first use. Where a chapter uses a descriptor again after its token,
leave the plain words. "The burnt rabbit" is never bare. No tier-3 label was found in any chapter, in prose or in a
caption. First-use forms, chapter by chapter: for Glitchtrap, present in `thesis`, `digital`, `burntrap`, `mimic`,
`patterns`, `canon-rules` and `open`, missing in `vanny` and `games`; for Burntrap, present in `burntrap`,
`canon-rules` and `open`, missing in `thesis`, `pizzaplex`, `mimic` and `games`; every chapter that has the salvaged
rabbit also names William Afton. Each missing form is an item below.

### 5. What the tools print, and what needs nothing

- **`quotecheck.mts … 3 --weak`** prints 33 lines (5 MISS, 2 UNCITED, 26 weak): 29 in chapters and 4 in the
  storyline. Items below answer six of the 29 (`killer`, `golden`, `fnaf1-restaurant` twice, `funtimes`, `vanny`).
  The other 23 need nothing. A phrase the tool finds in the `notes` of one record is, in each of those lines, in the
  `quote` of another record cited in the same block (`two-machines`, `bite`, `fnaf1-restaurant` row 5, `ffps`,
  `ucn`, `mimic`, `patterns`, `canon-rules`). A `weak(claim)` line is a label printed on a screen or a sheet, which
  the style guide lets a chapter quote from the claim (`funtimes`, `remnant`, `ucn`, `cover-story`, `digital`). An
  `answer` carries no citation by design, and the tool does not count a `quote` block's record as cited (`faith`).
- **`wordcheck.py --all`** prints 106 lines in chapter files. Five are prose and have items (`murders`, `faith`,
  `bite`, `timeline-math`, and the pills that read "not before November 1988"). The rest are years of Scott's posts
  and of releases, the chapter id `partners` and its links, "partners", "partner" and "founder" inside a denial,
  Scott's own word "Miketrap" in quotation marks, and "where fire did not" inside a denial. None needs a change.
- **Round four and 4b.** Every corrected wording that quotes its old form was searched for in the chapters by
  script, and the others by hand: Hen with a pronoun, "wife", "largest", "springlock failure", "safe room", the
  company as owner of Fazbear's Fright, "hunts him", "thirty years" counted from the killer's death, the chest mark,
  "the only empty yellow costume", the dismissal as that night's event, "within a day". The hits are items below.
  The rest are clean.

### 6. Added at 07:37: the timeline's fix pass, checked against the chapters

The timeline, the dates and the list of deaths were corrected and committed (`89327f9`). Where a chapter tells the
same thing, this is what the chapters must match, and how they stood when read.

| The timeline now says | In the chapters |
|---|---|
| David Murray's death is "implied, never stated" | `two-machines` (its first two items; already applied in the file by 07:30). `mimic` has "after his son died" under its own "most likely": leave it |
| Phone Guy's death is implied, never stated, and its cause is not known | `fnaf1-restaurant` already says "No game says that he died. His last recording implies it." No chapter names a cause, and none should |
| Of 23 entries once listed as deaths, ten are deaths. Three are presumed: David Murray, the bitten boy, Phone Guy. Seven have a fate not shown: Edwin Murray; the technician Arnold, in two of that night's endings; Jeremy, the first tester; the Pizzaplex's staff; the local residents who go on disappearing; Cassie, in one ending. One survives: Michael. Two belong to one ending only: the rabbit-costumed woman's fall, and her dismantling | Checked in every chapter. None tells a death for the seven as an event, and the two are told as "one ending". Keep it so: "What became of Edwin is not shown"; "Whether he lived, they do not say"; "In the ending reached from the roof". `two-machines` has "leaving him presumably dead" for one ending, which is the record's own wording and the timeline's |
| SAVE THEM's bodies are the earlier five shown again, on the model's reading, and are told with the yellow suit of November 1987 | `november-1987` ("The earlier five", the model's lean), `thesis` and `murders` agree. No change |
| That later games follow the Princess Quest ending is weaker than Vanessa's release | No chapter says that a later game follows that ending. `pizzaplex` has RUIN's building as "most likely the aftermath of the route that goes underground" and Vanessa's release as "the model's reading, held loosely", and says that the two are different branches. Do not join them |
| "Thirty years later" has the kind `printed`: Scott's store text prints the interval, and the closing it counts from has no year | `fazbears-fright` and `games` have the kind `relative`: one item each, the last in each list. The style guide's example was the lead's error |
| The five: "a June 26th between 1980 and 1986", kind `estimated` | `murders` and `timeline-math` have this pill already; the beat's `when` now uses it too |

The storyline was regenerated at 08:14, the thesis at 08:25 and the whole once more at 08:57, when it was committed
(`d059017`). It uses the wordings of section 3, the four tags, and the two names for the two restaurants: "a grinning yellow figure in costume" (`s-five`), "a blonde woman in
Vanessa's cap and uniform" (`s-follower`), "a blonde woman waits at the doors" (`s-pizzaplex`), "a second Gregory
voice" (`s-mimic`), "in banging, music and a scream (as described)" (`s-last-freddys`), "the old restaurant, the one
before the 1987 restaurant" (`s-five`), and "Phone Guy, the voice on the guard's phone" (`s-november-1987`).
`s-two-machines` tells the family as the logs do: "Fiona is gone", "He shows the boy an endoskeleton, M1", "In other
recordings a voice speaks to him as Fiona", and Edwin's answer to the voice, "I let a machine raise my kid. You're
not real." `s-1979` has "a Dispatch voice", and says of the cabinet only that it "speaks as Fiona, as the voice in
Edwin's recordings did"; the join to the first machine stays in `two-machines`. `s-house` now ends "On that reading
the older brother is Michael.", in the words of `afton-house`. `s-pizzaplex` has the first-use form that every
chapter now prints: "known as Burntrap, a working name that Scott has said now stands".

The last part is now titled "How this was built" in `theory.ts`. No chapter names the part in its prose, and the
comment at the head of `apparatus.ts` has the new title since the final pass.

### 7. Added at 08:35: what the pages were told not to say

The home page and the essays were checked (`factcheck-9.md`) and corrected (`a13f94a`). Their owner lists, in
`layerfix-pages.md` ("For the orchestrator", item 3), seven things that the checker took out of the pages and that
the chapters still said at 05:43. This is how each stands in the chapters as committed in the final pass
(`9d317d0`).

| The pages' point | In the chapters now | Items |
|---|---|---|
| No record calls the Mega Pizzaplex the company's "newest building", as none calls it the largest | `thesis` has the phrase three times and `ffps` three times. The thesis in `theory.ts` now reads "under its Mega Pizzaplex", and the kicker of the part "Under the Pizzaplex" is "The buried pizzeria" | `thesis` 7 to 9; `ffps` 5 to 7 |
| `ucn`, the answer: "and he runs the night", flat (R16 (3) as corrected) | Done in the final pass: "who on the model's reading runs the night" | none |
| `plush`, the answer: "The model reads", where R5 is a lean | Done in the final pass: "The model leans to a toy spoken through from somewhere else" | none |
| `open`, the box: "closed for good" with no grade (R25: medium) | Now "The model treats the box as closed.", still with no grade | `open` 5 |
| `digital`, the tension: "No game says whose board it was" | Still there. Whose boards they were is on record: the client sent them. Which machine they came from is what no game says | `digital` 9 |
| `faith`: three universals with no record behind them | One is done: "this archive has found no statement of Scott's that links the two". Two remain, and `ucn` says the second of them as well | `faith` 3 and 4; `ucn` 6 |
| "Five ghosts", where the storyline has "five grey, crying children" | Inside the rule of section 2, which the owner confirmed to the writers at 07:47. The beat describes the scene, so it tells it as shown; a chapter that refers to the scene may say "five ghosts" flat. Flat now: `thesis` (the paragraph and one row label), `killer` (one table row), `murders` (a heading and one sentence), `ucn` (one table row), and `springtrap` after its marker | none |

The rule behind the new wordings, for any sentence added later. "No game says ..." stands flat where a record
carries the silence (`sd-which-board-unknown` does, for the boards). Where the archive has only looked and not
found, the sentence says so: "in the archive's records". `ucn` and `faith` share that form once
these items are in, and `faith`'s sentence on Psalm 46:10 has it already.

### 8. Added at 08:45: the committed chapters against rounds four and 4b, R26 and R19

Round 4b closed at 05:45 and is the version this memo applied from the start: section 2 is its rule for the
killer's end, and the items tagged ROUND FOUR covered its 22 corrections with round four's 46. All six final passes
are now committed (`9d317d0`), so the chapters were searched once more, as they stand, for the old form of each of
the 68. **No old form is left.** The storyline was searched in the same way, with the same result.

**R12, the killer's end.** The chapters keep the rule. The scene is told as shown where it is described (`killer`,
`springtrap`, and the rows marked "shown" in `thesis`, `golden` and `salvage`). `springtrap` states the death once
with its two supports and marks the reading once. "Five ghosts" and "he dies in the suit" are flat elsewhere, as
the rule allows: do not take "ghosts" out. The four limits hold in every chapter: none has the ghosts kill him,
none shows a springlock failure, "fade" is never "freed", and the room is "the room with the suit" outside
`springtrap`. Under "what pushes back", `springtrap` speaks of "the hidden room" inside the model's own placing,
after the body has marked it ("Most likely the room with the suit is one of these"): it stands.

**R26, tier 3.** The word check finds a fan or file label in one place only, the table of names in `canon-rules`,
which is the exception the ruling keeps: "Shadow Freddy (here the dark bear), Shadow Bonnie (the dark rabbit), the
Blob (the mass of parts), Tape Girl (the tape speaker), Phone Dude (the attraction's caller), MCI (the five)". No
other chapter names one, in prose, a caption or a heading. The check's other lines for the chapter files need
nothing: the chapter id `partners`; "partner" and "founder" inside a denial (`partners`); "where fire did not"
inside a denial (`thesis`); "Miketrap" in Scott's own sentence (`killer`); "1988" where the arithmetic is shown
(`timeline-math`, `fnaf1-restaurant`); and the years of posts and releases.

**R19, the headless Freddy.** Settled, and no doubt is to be carried. The owner has looked at the capture himself
(08:45): "PROTOTYPE" is printed on the sole of the body's right foot, plainly legible. The record
`ruin-prototype-freddy-headless` says the label was viewed in a capture, and the capture is in the archive's
images as `ruin-prototype-freddy-label.jpg`. So a sentence may say flat that the body is marked "PROTOTYPE" under
its foot, and that it is therefore another machine and not the Freddy that two of Security Breach's endings take
apart. Every chapter and the storyline were searched for the body. One paragraph mentions it, in `pizzaplex`, and
it already says this: "the word "PROTOTYPE" is printed under its foot", so "it is another machine, and does not
count against the underground route". It carries no tag, and the record is not in that chapter's
`counterEvidence`. `vanny` and `open` do not mention the body, and no chapter counts it against the underground
route. No item.

**One thing found on the way**, which neither round covers: where Help Wanted 2 sits. `mimic` has it "most likely"
between Security Breach and RUIN, which is R22's grade; `timeline-math` had the whole order as fixed and `games`
gave the place flat. Two items for writer 1: `timeline-math` 4 and `games` 4.

**The quote check** on the committed chapters prints no MISS and no UNCITED line. Its 22 weak lines need nothing:
19 are phrases held in the `quote` of another record cited in the same chapter, and 3, in `funtimes`, are labels
printed on a screen or a sheet and quoted from a cited record's claim.

### 9. Added at 09:20: round 4c, and where everything stands

Round 4c closed at 09:00; its list is under "4c" at the top of `rulings-brief.md`. One grade moved: "Vanny is
Vanessa" is now medium (R19 (1); it was medium-high). The cast list counts against one woman at the weight casting
has in R30, and the page that leaves the mask on the floor is no longer a third support, because it names nobody.
The owner applied the round to the chapters and the other layers at 08:52 (`ead932c`). The chapters as committed
were then searched for the old form of each of its wordings. **No old form is left**, and no item follows.

| Round 4c | In the chapters now |
|---|---|
| R19 (1) is medium | `vanny` is marked medium and says "Most likely one woman". The table in `thesis` has "Medium that the woman is Vanessa". No chapter prints "medium-high" for her |
| The cast list is a record against one woman, at support weight; "two voices", never "two women" | `vanny`: the record is in `counterEvidence`, the card "Two women" cites it, and the tension has the adjudicator's sentence, ending "the model counts it against one woman, at less weight than the page", with the tag "(a fan wiki's account)" |
| The page with the mask on the floor shows "a blonde woman, drawn as Vanessa is and not named", and is no support | `vanny` ("the model takes her for Vanessa, though two women who look alike would leave the same page"), `pizzaplex` and `open` all have "a blonde woman" and give "Vanessa" as the model's reading |
| The rooftop page shows "a blonde woman in Vanessa's cap and uniform" | `vanny` (answer, caption and tension) and `pizzaplex` have those words; `open` has "a blonde woman in a security uniform". "The model has no account of that page" stands in `vanny` |
| R24 (9): pay dates nothing and orders nothing | `timeline-math` has the adjudicator's sentence: each game states its own weekly rate, and no record gives an hourly rate or a minimum wage. No other chapter argues from pay |
| Help Wanted 2 between Security Breach and RUIN is inferred (medium-high), not fixed | `timeline-math` 4 and `games` 4 are applied in the adjudicator's wording ("most likely", three places). `mimic` had it so |
| "Under its Mega Pizzaplex" in the rulings' thesis paragraph, its table and R33 | The rulings now follow `thesis` 7 to 9 and `ffps` 5 to 7. "Newest" is left only in a code comment in `story.ts` that records the change |
| R16: "In the archive's records UCN never says "Hell"" | The rulings now follow `ucn` 6 and `faith` 4 |

**The storyline against round 4c.** Nothing in `theory.ts` had to change. `s-follower` is marked medium and says
"Most likely"; it tells the rooftop page in the words of `vanny`'s answer and says that the model has no account
of it. Like that answer, it does not name the cast list, which `vanny` carries in `counterEvidence` and under
"what pushes back". `s-pizzaplex` tells the page with the mask on the floor as "a blonde woman waits at the
doors, the rabbit mask on the floor" and draws nothing from it. No beat places Help Wanted 2, and none speaks of
pay.

**Where everything stands at 09:20.** All 195 items are answered in the chapter files: applied as written, or in
another form where the reader's memo, a record or a later decision gave the sentence other words. Each writer's
final notes list which (`final-1.md` to `final-6.md`). One item fell away, `killer` 2: the reader's note cut the
caption's sentence that it corrected. The thirteen late items for writers 1, 5 and 6 were applied by the owner
(`c1bd92c`, `ead932c`), and `vanny` has had the credits record in `counterEvidence` since it landed. The
storyline, the thesis, how to read and the part blurbs are committed as `d059017`, which is byte for byte what the
lead's pipeline writes. The
validator prints OK with no warning, and `npx tsc -b` exits 0. The quote check prints no MISS or UNCITED line for
a chapter (its two MISS lines are in the beat `s-1979`, where the tool cannot pair the two-letter quotation "WA"),
and its 22 weak lines for chapters are those of section 8. One wording in the rulings is still behind the text:
R25 and R26 give the burnt rabbit's first use as "the game's files call it Burntrap", where every layer prints
"known as Burntrap, a working name that Scott has said now stands" ("For the owner", A, point 2).


## Writer 1: `story.ts` (`thesis`, `killer`) and `apparatus.ts` (`canon-rules`, `edges`, `timeline-math`, `games`, `open`)

37 items.

### `thesis`

**thesis 1.** `body` · ONE TELLING
- old: in a minigame of FNaF2 the Puppet gives four dead children gifts, and then a mascot's mask each
- new: in a minigame of FNaF2 the Puppet gives four grey, dead-looking children gifts, and then a mascot's mask each
- why: the record's words, as `golden` and beat `s-children-stay` have them (`fnaf2-give-gifts-give-life`).

**thesis 2.** `body, callout "What this model no longer says"` · ONE TELLING
- old: The two men are not called partners, nor the friend the man who built those machines.
- new: The paragraph does not call the two men partners, which is the model's reading and is argued in ((partners)), nor the friend the man who built those machines.
- why: `partners` holds, as the model's reading, that they were partners in the business (R2, medium); as written the two chapters read as a contradiction.

**thesis 3.** `body, table, row "Five ghosts; his death in the rabbit suit; his return; his son"` · THE KILLER'S END
- old: High for each event. Medium, at its lower end, that he dies only after FNaF1's restaurant has closed
- new: High for the scene as shown: five grey, crying children corner him, the suit snaps shut on him, and he slumps to the floor. That he dies there is a firm inference, and that the children are the ghosts of the five is the model's reading; ((springtrap)) states each once. High for his return and for his son. Medium, at its lower end, that he dies only after FNaF1's restaurant has closed
- why: round 4b, "Thesis table and step 15": "high for the events" became "high (firm) for the scene as shown", with the two inferences named beside it. The paragraph above keeps "five ghosts" and "he dies" flat.

**thesis 4.** `body, table, last row` · NAME
- old: Not in the paragraph: the rabbit-costumed woman; the burnt rabbit under the Pizzaplex; the game inside the game
- new: Not in the paragraph: the rabbit-costumed woman; {{burntrap}} (the game's files call it Burntrap, a working name that Scott has said now stands); the game inside the game
- why: R26: a first-use form once in each chapter; the chapter gives it for Glitchtrap and not for this one. The token prints "the burnt rabbit under the Pizzaplex".

**thesis 5.** `body, table, row 10` · NAME
- old: The rabbit in the code (known as Glitchtrap, Scott's working name for it) | High for the scan of old boards.
- new: {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) | High for the scan of old boards.
- why: token; it prints "The rabbit in the code" at the head of the cell.

**thesis 6.** `tension` · LENGTH
- Replace the whole `tension` (145 words) with:
  > Four records press on the paragraph's weakest clauses. Old Man Consequences says "Leave the demon to his demons. Rest your own soul" to whoever reaches him [[ucn-omc-ending]]; who is in that office, and who is being spoken to, ((ucn)) weighs and the paragraph leaves out. SAVE THEM shows small bodies in the 1987 building [[fnaf2-save-them]]; ((november-1987)) reads them as the earlier five. No game says which machine the scanned boards came from [[sd-which-board-unknown]], which is why the paragraph marks its account of the rabbit in the code as the model's reading, and why ((digital)) says only that it is something he left behind. And a later graveyard is solved in an order that ends with the Puppet [[hw2-pq4-graveyard-order]], which the model uses for nothing: the paragraph gives the first murders as a list because their order rests on one phrase of her father's (see ((child-outside))).
- why: six sentences to five.

**thesis 7.** `body, the paragraph, last sentence` · ADDED 08:35
- old: Under the newest building a child sets loose the costume maker's copying machine, which had called her in another child's voice.
- new: Under the company's Mega Pizzaplex a child sets loose the costume maker's copying machine, which had called her in another child's voice.
- why: no record calls the Mega Pizzaplex the company's newest building, as none calls it the largest (`factcheck-9.md`, home 7). The thesis in `theory.ts` now reads "under its Mega Pizzaplex", and the home page's cards say "the Mega Pizzaplex". The paragraph is the adjudicator's: `model.md` section 1 has the same word.

**thesis 8.** `body, table, the label of the row on the copying machine` · ADDED 08:35
- old: The copying machine under the newest building
- new: The copying machine under the Mega Pizzaplex
- why: the same; the label quotes the paragraph.

**thesis 9.** `body, after the callout, on what returns` · ADDED 08:35
- old: and as burnt rabbit remains under its newest building [[security-breach-burntrap-appearance]]
- new: and as burnt rabbit remains under its Mega Pizzaplex [[security-breach-burntrap-appearance]]
- why: the same. The record shows the remains under the Pizzaplex and says nothing of the building's age.

### `killer`

**killer 1.** `body` · ONE TELLING
- old: A purple figure gets out of a car and kills a child who is crying outside a restaurant [[fnaf2-take-cake-to-the-children]].
- new: A purple figure gets out of a car and kills a child who is crying outside a building [[fnaf2-take-cake-to-the-children]].
- why: R7, round four: neither game names the venue; `child-outside` and beat `s-child-outside` say "a building".

**killer 2.** `hero` · ONE TELLING
- old: the name comes three games later.
- new: the name comes in Pizzeria Simulator.
- why: the count: FNaF4, FNaF World, Sister Location and Pizzeria Simulator are four releases after FNaF3 in `games`.

**killer 3.** `body` · ONE TELLING
- old: The name comes three games later, in a list of voice actors.
- new: The name comes in Pizzeria Simulator, in a list of voice actors.
- why: the same count. The next paragraph then opens "The list is that game's own." in place of "The list is Pizzeria Simulator's."

**killer 4.** `body` · THE KILLER'S END
- old: The model reads them as the ghosts of five he killed.
- new: The model reads them as the ghosts of five he killed (see ((springtrap))).
- why: R12's rule (round 4b): the reading is argued once, in `springtrap`; this chapter may keep its sentence and should link it. The table's "Five ghosts at his death" may stand flat.

**killer 5.** `body, table,row 2` · RECORD
- old: "It's still me"
- new: "It's still me" [[ffps-scraptrap-still-me]]
- why: quotecheck UNCITED: the row quotes a record that only the quote block above cites.

**killer 6.** `body` · NAME
- old: The rabbit salvaged in Pizzeria Simulator is shaped differently [[
- new: {{scraptrap}} is shaped differently [[
- why: token; it prints "The salvaged rabbit of Pizzeria Simulator" at the head of the sentence. The first-use form is already in the chapter ("William Afton (AKA Scraptrap)", as Scott's guide has it).

**killer 7.** `tension` · LENGTH
- old: Who the caught man was is open: the killer, later free for want of bodies, or the wrong man. The model prints the arrest and builds nothing on either reading, and no link in the chain depends on it (see ((murders)) and ((open))).
- new: Who the caught man was is open, the killer later free for want of bodies or the wrong man, and no link in the chain depends on it (see ((murders)) and ((open))).
- why: six sentences to five.

### `canon-rules`

**canon-rules 1.** `body, table "Ten rabbits", row "The murders of the five"` · ONE TELLING
- old: The yellow rabbit costume, which the killer wore
- new: The yellow rabbit costume, which the killer most likely wore
- why: R8: medium that the costume was the yellow rabbit; `murders` and beat `s-five` give it one "most likely".

**canon-rules 2.** `body` · NAME
- old: his daughter; the crying child; the older brother; the fifth child.
- new: {{cassette-mans-daughter}}; {{crying-child}}; {{older-brother}}; {{fifth-child}}.
- why: tokens, in the paragraph that explains the descriptions; they print "the Cassette Man's daughter", "the crying child", "the older brother" and "the fifth child".

**canon-rules 3.** `body, list "The model's own rules"` · LINK
- old: never for what it shows to be already so (see ((afton-house))).
- new: never for what it shows to be already so (see ((pizzaplex)), which states the rule, and ((afton-house)), which uses it).
- why: link: `pizzaplex` is where the rule is stated ("one rule covers them").

**canon-rules 4.** `tension` · LENGTH
- Replace the whole `tension` (168 words) with:
  > Scott has not made this archive's rules his own. In 2020 he told readers to "look to the novels to fill in some of blanks to the past" [[scott-2020-novels-fill-blanks]], meaning a later series of short stories, and in 2024, in a comment about "the canonicity of the books", he wrote only "yes, that is correct" [[scott-2024-books-canonicity-yes]], which names no position and settles nothing. In 2015 he had written that the first novel and the games are separate continuities; the model does not claim that his later words exclude the books, and leaves them out by policy. Three more records are his own words on two names this archive does not use, a rejected script [[scott-2020-cassidy-screenplay-lore-from-games]], a product he said he was pulling [[scott-2020-cassidy-kazoo-names-from-lore]] and a second script [[scott-2020-charlie-game-and-book-counterparts]]: they suggest that both names belong to the games' story, and none says whose they are. And he ruled Help Wanted canon as one game [[scott-2019-help-wanted-is-canon]]; treating its levels as the company's staging is this archive's narrower reading, argued in ((cover-story)).
- why: eight sentences to five; every record kept.

**canon-rules 5.** `answer` · LENGTH
- old: Where Scott has ruled in writing on what counts, as he has for FNaF4's two editions, Sister Location's Custom Night and Help Wanted, the model follows him. Where he has not, it states its own rule, says that it is its own, and rates it medium.
- new: Where Scott has ruled in writing on what counts, as he has for FNaF4's two editions, Sister Location's Custom Night and Help Wanted, the model follows him; where he has not, it states its own rule, says that it is its own, and rates it medium.
- why: four sentences to three.

### `edges`

**edges 1.** `body` · ONE TELLING
- old: a sixth killed outside one
- new: a sixth killed outside a building
- why: R7, round four: no game names the building the child outside is shut out of; `child-outside` and beat `s-child-outside` say "a building".

**edges 2.** `tension` · LENGTH
- Replace the whole `tension` (188 words) with:
  > The frame voice is weaker than it looks: the one figure FNaF World names Crying Child is drawn as the weeping child of the earlier minigames, not as FNaF4's boy [[fw-crying-child-character]], and no record says that the opening's dots and the clock ending's are one speaker [[fw-opening-put-you-back-together]]. On Android the clock ending has different text, in which the dots claim the Bite of '87 and give way to a potted-plant creature [[fw-android-port-clock-ending]], and the man at the desk speaks as a maker of games, who asks "You deactivated my games?" before he names Baby [[fw-desk-man-deactivated-my-games]] [[fw-desk-man-made-something-terrible]]. So the model lets the voice echo and never lets it carry a fact alone. Into the Pit pushes the other way: its phone calls describe machines that stuff people into suits [[into-the-pit-phone-guy-night3-stuffing]], which reads like the main games' own history and tempts a literal reading. The model leaves it unplaced because its plot comes from a source this archive does not admit, no main-line game refers to its events, and Scott has not placed it; unplaced does not mean false, and if a later game took up its events, the same test would move it.
- why: ten sentences to five; every record kept.

**edges 3.** `answer` · LENGTH
- old: In part. FNaF World's adventure is outside the story
- new: In part: FNaF World's adventure is outside the story
- why: four sentences to three.

### `timeline-math`

**timeline-math 1.** `body, pill, list "Derived, and estimated"` · ONE TELLING
- old: FNaF1 is <<not before November 1988|derived|
- new: FNaF1's week is in <<a November after 1987|derived|
- why: R24 (6), round 4b: the label is "a November after 1987" (beat `s-last-freddys`, `games`). This list is where the arithmetic is shown, so the bound stays in words: continue the item ": not before November 1988, because the 1987 restaurant was still trading on 12 November of that year".

**timeline-math 2.** `answer` · LENGTH
- old: Few are printed: the year 1983 on a television, a June 26th with no year, and two cheques of November 1987. No game prints a year after 1987. The year 1979 ends a teaser. It is also on a work order,
- new: Few are printed: the year 1983 on a television, a June 26th with no year, and two cheques of November 1987, and no game prints a year after 1987. The year 1979 ends a teaser; it is also on a work order,
- why: five sentences to three.

**timeline-math 3.** `tension` · LENGTH
- old: None of these moves a printed date. Together they are the reason the model prints so few.
- new: None of these moves a printed date, and together they are the reason the model prints so few.
- why: six sentences to five.

**timeline-math 4.** `body, table "The order, and what fixes it", last row, second cell` · ADDED 08:45
- old: In that order: fixed. After the same fire: inferred, if the ruined pizzeria under the Pizzaplex [[security-breach-underground-pizza-place]] is Pizzeria Simulator's (see ((burntrap)))
- new: Security Breach, then RUIN: fixed. Help Wanted 2 between them: most likely (see ((mimic))). After the same fire: inferred, if the ruined pizzeria under the Pizzaplex [[security-breach-underground-pizza-place]] is Pizzeria Simulator's (see ((burntrap)))
- why: one fact, one telling. R22 holds Help Wanted 2's place between the two at medium-high, on the mask that passes to Cassie, and `mimic` says "most likely"; this row had the whole order as fixed (`final-2.md`, "For the orchestrator" 2).

### `games`

**games 1.** `body, table, row "Help Wanted (2019)"` · NAME
- old: old circuit boards scanned into a game; the rabbit in the code; a plush left for a tester
- new: old circuit boards scanned into a game; {{glitchtrap}} (known as Glitchtrap, Scott's working name for it); a plush left for a tester
- why: R26: a first-use form once in each chapter. This is the chapter where a reader looks for the name they know. The token prints "the rabbit in the code".

**games 2.** `body, table, row "Security Breach (2021)"` · NAME
- old: The Pizzaplex, over a ruined pizzeria; the burnt rabbit under the Pizzaplex; Gregory
- new: The Pizzaplex, over a ruined pizzeria; {{burntrap}} (the game's files call it Burntrap, a working name that Scott has said now stands); Gregory
- why: the same rule. The token prints "the burnt rabbit under the Pizzaplex".

**games 3.** `body, table, row "FNaF3 (2015)", pill` · ADDED 07:37
- old: <<Thirty years after a closing|relative|scott-fnaf3-steam-description|Scott wrote that it is thirty years after the pizzeria closed. No year is printed.>>
- new: <<Thirty years after a closing|printed|scott-fnaf3-steam-description|Scott Cawthon wrote the store text for the game, and it prints the interval: thirty years after the pizzeria closed its doors. The interval is printed. The closing it counts from has no year, so the date is a distance from an undated event and gives no year. Which of three closings it counts from is not said.>>
- why: the same date as in `fazbears-fright` and beat `s-fazbears-fright`: kind `printed`, with the basis `dates.ts` now has. `timeline-math` tells it as a stated interval in words and needs no change.

**games 4.** `body, table, row "Help Wanted 2 (2023)", second cell` · ADDED 08:45
- old: Between Security Breach and RUIN
- new: Most likely between Security Breach and RUIN
- why: the same. The cell is this table's date for the game, and R22's grade for it is medium-high.

### `open`

**open 1.** `body, list "The first games", "The dark bear and the dark rabbit"` · THE KILLER'S END
- old: following it also ends with the ghosts free and the killer dead.
- new: following it also ends with the children out of the machines and the killer dead.
- why: R12 limit 4: the five "fade"; not "freed", "released" or "gone" (R14, R30). `springtrap` has "the children out of the machines and their killer dead".

**open 2.** `body, list "The first games", "The dark bear and the dark rabbit"` · NAME
- old: In FNaF3 a dark bear says "follow me."
- new: In FNaF3 {{shadow-freddy}} says "follow me."
- why: token; it prints "the dark bear".

**open 3.** `body, list "The modern games", "The scanned boards"` · NAME
- old: So no game says whether the rabbit in the code (known as Glitchtrap, Scott's working name for it)
- new: So no game says whether {{glitchtrap}} (known as Glitchtrap, Scott's working name for it)
- why: token; it prints "the rabbit in the code".

**open 4.** `body, list "The family", "The locked box"` · LINK
- old: The model treats it as closed (see ((afton-house))).
- new: The model treats it as closed (see ((nightmares))).
- why: link: the box is in `nightmares` ("ends on a padlocked box") and nowhere in `afton-house`.

**open 5.** `body, the entry "The locked box", last sentence` · ADDED 08:35
- old: The model treats the box as closed.
- new: The model treats the box as closed, most likely for good.
- why: R25 holds "closed for good" at medium, and the sentence carried no grade. The home page says "most likely" of the same thing (`layerfix-pages.md`, "For the orchestrator" 3).

**Lengths and furniture (list only; the reader's memo carries the rewrites).**

- Body over 1,100 words by `prose-report.mts`: `thesis` 1,192; `canon-rules` 1,260; `timeline-math` 1,167. `open` is at 1,598 against its limit of 1,600, and the items here add about twenty words to it.
- Sentences over 40 words: one, in `thesis` (the model's paragraph, which is the adjudicator's).
- Answers over three sentences, tightened above: `canon-rules`, `edges`, `timeline-math`. Tensions over five, tightened above: `thesis`, `killer`, `canon-rules`, `edges`, `timeline-math`.
- Headings that name a topic and not a finding: `killer`: "The suit", "The designer and the father", "The killer". `canon-rules`: "Names", "The books". The headings of `timeline-math`, `games` and `open` are labels for tables and lists and may stay.
- `open` has three figures with no caption (`fnaf2-shadow-freddy-parts-service.jpg`, `ffps-midnight-motorist-secret-drive.png`, `fw-old-man-consequences.jpg`). A caption carries the descriptor (R26). From the records: "FNaF2's Parts/Service room on a rare visit: a dark purple bear with glowing eyes sits where the older Bonnie should be."; "Midnight Motorist's hidden road, in Pizzeria Simulator: a rainy night, driven in a dark purple car."; "FNaF World's fourth hidden tunnel: a red figure fishing, who gives his name as Old Man Consequences."


## Writer 2: `makers.ts` (`springlocks`, `two-machines`, `partners`) and `underground.ts` (`burntrap`, `mimic`, `patterns`)

24 items.

### `springlocks`

No change.

### `two-machines`

**two-machines 1.** `body` · ONE TELLING
- old: Edwin has also been sent plans for a computer called the Cradle, to keep David safe [[secret-of-the-mimic-mail-hurt-cradle]].
- new: Edwin has also been sent plans for a computer called the Cradle, which "can keep David safe and provide boundaries" [[secret-of-the-mimic-mail-hurt-cradle]]; the David it means is most likely the copy.
- why: one fact, two tellings: `mimic` says "the David it means is most likely the copy", and the record's notes agree (the son is dead by then).

**two-machines 2.** `body` · ROUND FOUR
- old: David dies. No recording says so in as many words, and the game never shows how.
- new: David dies: the recordings imply it, none says so in as many words, and the game never shows how.
- why: R21, order step 3: "implied, never stated". Beat `s-murray-family`: "No recording says outright what became of David."

**two-machines 3.** `body` · RECORD
- old: since the machine is presenting the cake
- new: since the machine stands behind the cake
- why: `secret-of-the-mimic-film-m1-birthday-cake` says "an endoskeleton behind a cake"; it shows no more than that.

**two-machines 4.** `answer` · LENGTH
- old: From a father's workshop. Edwin Murray built one machine to mind his son. On the model's reading it took the voice of the boy's dead mother, and after the boy died he built a second from a copy of its program. He lost his temper with that one, which is most likely the rage it "mimics".
- new: From a father's workshop: Edwin Murray built one machine to mind his son. On the model's reading it took the voice of the boy's dead mother, and after the boy's death, which the records imply and never state, he built a second from a copy of its program; he lost his temper with that one, which is most likely the rage it "mimics".
- why: five sentences to three (your 07:00 wording already marks the reading); R21 (1), round 4b: the death is implied, never stated.

### `partners`

No change.

### `burntrap`

**burntrap 1.** `body` · NAME
- old: This chapter calls it the burnt rabbit under the Pizzaplex (the game's files call it Burntrap
- new: This chapter calls it {{burntrap}} (by the wiki's account the game's files call it Burntrap
- why: token; it prints "the burnt rabbit under the Pizzaplex". And the cited record now gives the file name "by the wiki's account": said here, in the chapter that owns the figure, it covers R26's first-use form everywhere else (a ruling is asked for).

**burntrap 2.** `body` · NAME
- old: what the fire left of the salvaged rabbit of Pizzeria Simulator, whose voice
- new: what the fire left of {{scraptrap}}, whose voice
- why: token; it prints "the salvaged rabbit of Pizzeria Simulator".

**burntrap 3.** `body` · NAME
- old: The rabbit in the code (known as Glitchtrap, Scott's working name for it) is software
- new: {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) is software
- why: token; it prints "The rabbit in the code" at the head of the sentence.

### `mimic`

**mimic 1.** `body` · RECORD
- old: Then the real Gregory gets through.
- new: Then a second Gregory voice gets through, which the model takes for the boy himself.
- why: `ruin-real-gregory-not-at-pizzaplex` now: "a Gregory voice reaches Cassie"; "taken as the real Gregory", and the game does not show the speaker.

**mimic 2.** `body` · RECORD
- old: Several of the voice's lines are, word for word, lines that Gregory speaks in Security Breach
- new: Two of the voice's lines are, word for word, lines that Gregory speaks in Security Breach
- why: `ruin-mimic-reuses-gregory-lines` now gives two lines, "I-I'm Gregory." and "The stupid door won't open."

**mimic 3.** `body` · RECORD
- old: as one ending shows when the real speaker breaks in.
- new: as one ending shows when another Dispatch comes on the van's radio.
- why: the dispatch record, as in `two-machines`.

**mimic 4.** `body` · RECORD
- old: and the keypad code of an M.X.E.S. cabinet in a van in Help Wanted 2 [[hw2-mimic-teaser-mxes-ending]].
- new: and the keypad code of an M.X.E.S. cabinet in a van in Help Wanted 2 [[hw2-mimic-teaser-mxes-ending]] [[secret-of-the-mimic-mxes-machine]].
- why: the first record now says only "a machine with a keypad" in "the white van"; the cabinet's nameplate is in the claim of the second, which the chapter's figure already cites.

**mimic 5.** `body` · NAME
- old: Call it, so far, the copying endoskeleton.
- new: Call it, so far, {{the-mimic}}.
- why: token; it prints "the copying endoskeleton".

**mimic 6.** `body` · NAME
- old: does not identify it with the rabbit in the code (known as Glitchtrap, Scott's working name for it)
- new: does not identify it with {{glitchtrap}} (known as Glitchtrap, Scott's working name for it)
- why: token; it prints "the rabbit in the code".

**mimic 7.** `body` · NAME
- old: It is most likely not the burnt rabbit under the Pizzaplex either (see ((burntrap))).
- new: It is most likely not {{burntrap}} either (the game's files call it Burntrap, a working name that Scott has said now stands; see ((burntrap))).
- why: token, and R26: a first-use form once in each chapter; this chapter has the descriptor without it.

### `patterns`

**patterns 1.** `body, table, row "A room that is not on the map"` · ROUND FOUR
- old: Under the Pizzaplex there is a door with concrete poured over it
- new: Under the Pizzaplex a room is sealed another way, with concrete poured over its door
- why: R31's round-four note on the recurring ideas: the door under poured concrete is "a sealed room", not "a room that is not on the map".

**patterns 2.** `body` · ROUND FOUR
- old: and the next game still has a rabbit in the mask [[ruin-the-entity]] (see ((vanny))); the model does not identify that figure with the one crushed.
- new: and in the next game the mask still shows a rabbit's shadow, by the wiki's summary [[ruin-vanny-hideout-glitchtrap-shadow]] (see ((vanny))).
- why: R19, round four: that rabbit is the shadow on RUIN's hideout wall, not the figure from the M.X.E.S. cabinet; the disclaimer about that figure then goes.

**patterns 3.** `body, table, row "A copy"` · RECORD
- old: A voice is borrowed twice. The rabbit in the code (known as Glitchtrap, Scott's working name for it) speaks in the tape speaker's greeting, pitched down
- new: A voice may be borrowed twice. When {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) is near, a low-pitched clip plays, which the wiki's audio page identifies as {{tape-girl}}'s greeting, pitched down
- why: `hw-glitchtrap-uses-tape-girl-voice` now says a clip plays when the figure is near; the identification is the wiki's, and that it is the figure's own voice is a reading. Two tokens as well (they print "the rabbit in the code" and "the tape speaker").

**patterns 4.** `body, table, row "A copy"` · RECORD
- old: speaks a boy's lines from an earlier game
- new: speaks two of a boy's lines from an earlier game
- why: `ruin-mimic-reuses-gregory-lines` now gives two lines.

**patterns 5.** `body, table, row "A copy"` · RECORD
- old: reading the two speakers as one thing
- new: reading the two as one thing
- why: follows from the item above: the first may not be a speaker.

**patterns 6.** `body, table, row "A trusted voice that is not who it seems"` · RECORD
- old: and in one ending the real one gets through late
- new: and in one ending another Dispatch says the company has been trying to reach him all night
- why: the dispatch record no longer says "real" (`secret-of-the-mimic-clock-out-real-dispatch`), as in `two-machines`.

**patterns 7.** `body, table, row "A trusted voice that is not who it seems"` · RECORD
- old: until the real boy gets through and says he is somewhere else
- new: until a second voice of the boy's gets through and says he is somewhere else
- why: `ruin-real-gregory-not-at-pizzaplex`: "a Gregory voice"; the game does not show the speaker, as in `mimic`.

**patterns 8.** `body, table, row "A lure that is a present"` · RECORD
- old: On a minigame's last screen a yellow rabbit suit stands behind a crying girl
- new: On a minigame's last screen a grinning yellow figure in costume stands behind a crying girl
- why: `ffps-fruity-maze-follow-me` now: "a dim yellow costumed figure with a wide grin"; its ears are out of frame. `killer` and `murders` take the same words.

**patterns 9.** `body` · RECORD
- old: and looks into a mirror with a machine's eyes [[
- new: and is next seen at a mirror, with eyes that glow purple and white [[
- why: `sl-real-ending-scooped-mirror` now: "a dark silhouette before a mirror, and its eyes open, glowing purple and white"; that they are a machine's is `michael`'s argument, which the sentence links.

**patterns 10.** `body` · NAME
- old: The speaker is the salvaged rabbit of Pizzeria Simulator, {{william-afton}}
- new: The speaker is {{scraptrap}}, {{william-afton}}
- why: token; it prints "the salvaged rabbit of Pizzeria Simulator".

**Lengths and furniture (list only).**

- No chapter of yours is over 1,100 words (`two-machines` 1,099, `mimic` 1,098).
- Answers over three sentences: `two-machines` (five as it stood at 07:10; tightened above) and `partners` (three long ones: within the limit). No tension over five (`mimic`'s is five: the tool counts the full stops inside "System threats found. Repair complete.").
- Headings that name a topic and not a finding, as read at 06:30: `springlocks`: "What a springlock suit is". `two-machines`: "The babysitter", "David", "The night in 1979", "Three endings". `partners`: "Murray's side of it". `burntrap`: "What stands in the ruin", "The mass of parts". `mimic`: "Whose machine". `patterns`: "What else returns", "Fathers and children".
- `two-machines`: the three columns of "Three endings" have empty verdicts; the page prints an empty label on each card.


## Writer 3: `family.ts` (`afton-house`, `plush`, `nightmares`, `bite`) and `machines.ts` (`funtimes`, `remnant`, `michael`)

28 items.

### `afton-house`

**afton-house 1.** `body` · ONE TELLING
- old: In the opening scene a board member addresses the designer of the facility's machines as "Mr. Afton" [[sl-intro-mr-afton-board]].
- new: In the opening scene an unnamed man addresses the designer of the facility's machines as "Mr. Afton" [[sl-intro-mr-afton-board]].
- why: the record now says "an unnamed man, speaking as 'we'"; "board member" is the wiki's label. `killer` already says "an unnamed man".

**afton-house 2.** `body` · RECORD
- old: An older brother in a Foxy mask jumps out at a small boy from behind the television [[fnaf4-brother-foxy-mask-tv]].
- new: An older brother in a Foxy mask [[fnaf4-bullies-in-masks]] jumps out at a small boy from behind the television [[fnaf4-brother-foxy-mask-tv]].
- why: the television record now says "an older boy"; the game's word "brother" is in `fnaf4-bullies-in-masks` ("Wow, your brother is kind of a baby isn't he?"). Cited here once, it carries "his brother" in `plush`, `nightmares` and `bite`.

**afton-house 3.** `body` · RECORD
- old: The line from the cluster that the panel powers as Obsv.2 runs to the Private Room [[sl-breaker-map-faint-clusters]] [[sl-breaker-map-obsv-identification]].
- new: The line from the cluster that the panel powers as Obsv.2 runs to a block of rooms above Funtime Auditorium, which has the plan of the Private Room's own camera map [[sl-breaker-map-faint-clusters]] [[sl-breaker-map-obsv-identification]].
- why: the record's claim now stops at "the bold complex above Funtime Auditorium"; that it is the Private Room is a match of plans, in its notes.

**afton-house 4.** `body` · RECORD
- old: On this reading the older brother is Michael, whose last words in FNaF4 are an apology [[fnaf4-night6-brother-apology]].
- new: On this reading {{older-brother}} is {{michael-afton}}, and the last text in the grey of his lines is an apology [[fnaf4-night6-brother-apology]].
- why: the record: "grey text with no speaker label"; the attribution is a reading. Beat `s-birthday`: "text in the grey of his brother's lines says "I'm sorry."".

**afton-house 5.** `body, callout "Two lines that carry no weight here"` · RECORD
- old: From the other side of the Private Room's door, the girl's voice says she knows it was an accident.
- new: From the other side of the Private Room's door, a little girl's voice says "I know it was an accident."
- why: the record now has "a little girl's" voice and the line in its `quote`; that she is the girl of the cutscenes is the wiki's attribution.

**afton-house 6.** `tension` · LENGTH
- Replace the whole `tension` (149 words) with:
  > Four records push back. The monitors show nobody, and nothing says when the pictures were made [[sl-private-room-feeds-empty]]: they show a place and a means, not a week. FNaF4 never says that the house of the minigames and the house of the nights are one building [[fnaf4-house-rooms]], and the facility's map has two separate clusters, which the model reads as those two houses on a match of drawings [[sl-breaker-map-obsv1-layout]] [[sl-breaker-map-obsv2-house-layout]]; it joins them through the plush on the desk and the single week the game tells, not through the building. The business that houses the room is later than a Freddy's closing [[sl-handunit-freddy-fazbear-closing]], which is why the watching in 1983 is held loosely, and the house has two bedrooms for what the model counts as three children [[fnaf4-second-bedroom]]. The answer survives all four as most likely, and no better.
- why: seven sentences to five; every record kept.

### `plush`

No change.

### `nightmares`

**nightmares 1.** `body` · RECORD
- old: An eighth, reached by a code, adds no text or scene [[fnaf4-night8-no-story-text]].
- new: An eighth, reached by a code, adds no text or scene, by the wiki's description [[fnaf4-night8-no-story-text]].
- why: the record's claim now opens "By the wiki's description"; no capture was checked.

**nightmares 2.** `body` · RECORD
- old: FNaF4's nights are played in a child's bedroom.
- new: FNaF4's nights are played in a bedroom.
- why: the records now say "a bedroom"; whose it is comes two sections later, marked ("most likely the crying child, in his own bedroom"). Beat `s-house`: "in a bedroom".

**nightmares 3.** `body` · NAME
- old: So the one in the bed is most likely the crying child, in his own bedroom
- new: So the one in the bed is most likely {{crying-child}}, in his own bedroom
- why: token; it prints "the crying child".

**nightmares 4.** `tension` · LENGTH
- Replace the whole `tension` (130 words) with:
  > The dream reading explains four things better than the model does. The attackers' own name is Nightmare [[fnaf4-nightmare-animatronics]], and flowers, pills and a drip stand can appear by the bed [[fnaf4-bedside-items]]. A sixth night is played after the scene of the bite, when the boy can hardly be at home [[fnaf4-night6-fade-order]], and Nightmare Fredbear takes it over at four [[fnaf4-nightmare-fredbear-4am]]; a reversed fragment of the first game's opening phone call, which belongs to a later year, is reported in the room [[fnaf4-reversed-phone-guy]]. Against that the model has one thing: the bedroom is a real place on a company's monitors, in the next main game. The monitors show that place empty [[sl-private-room-feeds-empty]], so they show the room and not the nights, which is why the lean to waking events is slight.
- why: eight sentences to five; every record kept.

### `bite`

**bite 1.** `body, compare, "No record places him"` · ONE TELLING
- old: Wherever the dead are counted there are the five from the pizzeria and the child outside (see ((golden))).
- new: No count of the dead has a place for a child beyond the five and the child outside (see ((golden))).
- why: R8 (7), round four: the claim is about the seven counts `golden` lists, in `golden`'s own words.

**bite 2.** `body` · ROUND FOUR
- old: He most likely dies. No later game shows him.
- new: He most likely dies, and after that no record places him.
- why: R6, round four; beat `s-birthday` word for word.

**bite 3.** `body` · RECORD
- old: The day before the party he is locked in the restaurant's parts room, crying "Please let me out." [[fnaf4-locked-backstage]]
- new: The day before the party he is locked in a parts room, crying "Please let me out." [[fnaf4-locked-backstage]]
- why: the record's title and claim now say only "a parts room".

**bite 4.** `body, pill "c. 1983", its basis` · NAME
- old: the only year printed in the game is 1983, on the title card of a show on the family television. The card dates the show
- new: the only year on screen in that week is 1983, under the title of a show on the family television. The title dates the show
- why: wordcheck ("printed in the game"); beats `s-house` and `s-birthday` word the same pill so.

**bite 5.** `tension` · LENGTH
- Replace the whole `tension` (179 words) with:
  > Three records suggest the boy goes on: one ending of FNaF World tells someone "The pieces are in place for you" [[fw-clock-ending-pieces-in-place]], a coin spent on Golden Freddy in Ultimate Custom Night brings Fredbear's attack, with no text to explain it [[ucn-death-coin-fredbear]], and Nightmare Fredbear, the bear of FNaF4's nights, throws the promise back at that game's player [[ucn-nightmare-fredbear-lines]]. The first is a frame voice that echoes FNaF4 and adds no event; the others are a game mechanic and a line said to a player nobody names. Together with the colour of the bear they make the best case that he and the yellow bear's child are one, and the model does not dismiss it: it loses on the count of the dead, which has no room for him. Two more records pull at the date: a girl in the minigames owns toys that look like the 1987 restaurant's mascots [[fnaf4-toy-collection-girl]], and pink-and-white toy pieces, which players take for another of them, lie on a bedroom floor [[fnaf4-mangle-pieces-in-house]]. The model keeps the year on the television and reads the toys as deliberate misdirection.
- why: eight sentences to five; the coin is told as R16 has it (it brings Fredbear's attack, and no text explains it).

**bite 6.** `answer` · LENGTH
- old: It happens in the week whose only printed year is 1983, and it is not the Bite of '87. He most likely dies of it. After his last scene no game places him anywhere, and the promise made to him is never shown kept.
- new: It happens in the week whose only printed year is 1983, and it is not the Bite of '87. He most likely dies of it: after his last scene no record places him, and the promise made to him is never shown kept.
- why: four sentences to three; "no record places him" is the storyline's wording (R6).

### `funtimes`

**funtimes 1.** `body` · ONE TELLING
- old: A board member praises a set of new robots, then asks about certain choices in their design. The designer answers with what one of them, Circus Baby, can do: dance, sing, inflate balloons, take song requests, even dispense ice cream. The board member replies.
- new: An unnamed man praises a set of new robots, then asks about certain choices in their design. The designer answers with what one of them, most likely Circus Baby, can do: dance, sing, inflate balloons, take song requests, even dispense ice cream. The first man replies.
- why: the record now says "an unnamed man" and "what 'she' can do"; "board member" is the wiki's label and Circus Baby an inference. `killer` and `afton-house` take the same wording.

**funtimes 2.** `body` · ONE TELLING
- old: The designer is alive throughout, answering a board and forbidding a daughter.
- new: The designer is alive throughout, answering his questioner and forbidding a daughter.
- why: the same record.

**funtimes 3.** `body` · RECORD
- old: over a footer that reads "Afton Robotics, LLC".
- new: over a footer that reads "Afton Robotics, LLC" [[sl-blueprint-funtime-freddy]].
- why: quotecheck weak(notes): the footer is in the notes of `sl-blueprint-screens` and in the claim of the four sheets' own records.

### `remnant`

**remnant 1.** `body` · ONE TELLING
- old: , robbed "of the only thing that they had. Again." [[ffps-insanity-trap-again]] The tape names no machine
- new: . Its last lines, of a trap in which he "overpowered them again" [[ffps-insanity-trap-again]], can be read as the night the four mascots were taken apart (see ((springtrap))); whether that night is the new wrong or a later one, the tape does not say. The tape names no machine
- why: one passage, two chapters: `springtrap` reads the trap lines as the dismantling (R12: "can be read as"), and R15's reading of Remnant rests on "a new way to desecrate" and "set to new purpose", not on these lines. The reader's memo asks in what order the two readings stand; no ruling says, so the chapter says that.

**remnant 2.** `further` · LINK
- In the `further` list, now empty: add `ffps-insanity-egg-baby-trigger`.
- why: it is how the hidden ending with the three blueprints is reached, and is still listed outside the story; filed here, it comes off `outsideStory` (the lead removes the id from `theory.ts`).

**remnant 3.** `body` · LINK
- old: In a FNaF2 minigame it sets a mascot's head on each of four grey, dead-looking children [[fnaf2-give-gifts-give-life]].
- new: In a FNaF2 minigame it sets a mascot's head on each of four grey, dead-looking children [[fnaf2-give-gifts-give-life]] (see ((golden))).
- why: link: `golden` tells that scene in full and is in this chapter's `seeAlso` with no link in the text.

**remnant 4.** `answer` · LENGTH
- old: The games give one sheet. A blueprint marked Afton Robotics names a machine for the "S.calable C.reation of U.lterior P.resence" and labels on it a "Remnant Injector" and a "Remnant Reservoir", with a note that overheating "might neutralize the effects permanently".
- new: The games give one sheet: a blueprint marked Afton Robotics, headed "S.calable C.reation of U.lterior P.resence", which labels a "Remnant Injector" and a "Remnant Reservoir" and notes that overheating "might neutralize the effects permanently".
- why: four sentences to three; "headed" is R15's word for the sheet's title.

### `michael`

**michael 1.** `hero` · RECORD
- old: Sister Location's last cutscene: the burnt shell of Fazbear's Fright, and a figure with rabbit's ears at the right [[sl-golden-freddy-cutscene-springtrap]].
- new: Sister Location's last cutscene: a burnt building whose half-legible sign reads as Fazbear's Fright, and a figure with rabbit's ears at the right [[sl-golden-freddy-cutscene-springtrap]].
- why: the record now gives the sign as 'FAZBE… / FRI…'; a caption tells what is shown. `killer` has the same words. The body may keep "The burnt building is Fazbear's Fright" (R13).

**michael 2.** `body, figure caption` · RECORD
- old: The end of the fifth night: a silhouette at a mirror opens the eyes of a machine.
- new: The end of the fifth night: a silhouette at a mirror opens eyes that glow purple and white.
- why: `sl-real-ending-scooped-mirror` now says "its eyes open, glowing purple and white"; that they are a machine's is implied, in its notes.

**michael 3.** `body` · RECORD
- old: That line, and the little girl's voice that takes it up [[sl-fake-ending-girl-voice]], point to the daughter
- new: That line, and a little girl's voice that takes it up [[sl-fake-ending-girl-voice]], point to the daughter
- why: the record now says "a little girl's"; the sentence then draws the inference itself.

**michael 4.** `body` · NAME
- old: is the Michael of the speech
- new: is the {{michael-afton}} of the speech
- why: token; the chapter about him has none. It prints "Michael".

**michael 5.** `tension` · LENGTH
- Replace the whole `tension` (119 words) with:
  > For the franchisee, one of Scrap Baby's lines to him is "You're not who I expected to see" [[ffps-scrap-baby-not-expected]], the line for an outsider nobody planned for. The model keeps Michael on the volunteer whom the Cassette Man guesses would sooner stay than leave, and on a line William Afton speaks in that game, which wants a listener who knew him: "it's still me" [[ffps-scraptrap-still-me]]; ((ffps)) argues both, and the identification stays at most likely. For the guards, FNaF1's notice of termination gives "Odor" as a reason [[fnaf1-custom-night-pink-slip]], and a rotting man would smell. So would anyone who worked beside those machines [[fnaf1-news-sanitation]] [[fnaf2-call2-the-smell]], and the 1987 guard's slip gives the same reason [[fnaf2-pink-slip-fritz-smith]]. The model does not use that link.
- why: six sentences to five; the volunteer's wish to stay is the Cassette Man's guess (round four, R13).

**Lengths and furniture (list only).**

- Body over 1,100 words: `afton-house` 1,161 (the exemplar; the style guide allowed it 1,300).
- Answers over three sentences, tightened above: `bite`, `remnant`. Tensions over five, tightened above: `afton-house`, `nightmares`, `bite`, `michael`.
- Headings that name a topic and not a finding: `afton-house`: "A room marked Private", "Whose house". `bite`: "The party", "In the dark". `funtimes`: "What the sheets list". `michael`: "The week underground", "The report". `remnant` has no headings and needs none.


## Writer 4: `murders.ts` (`child-outside`, `murders`, `golden`) and `nightshift.ts` (`november-1987`, `fnaf1-restaurant`, `springtrap`)

40 items.

### `child-outside`

**child-outside 1.** `body` · ONE TELLING
- old: it gives four dead children the faces of four mascots
- new: it gives four grey, dead-looking children the faces of four mascots
- why: the record's words, as `golden`, `remnant` and beat `s-children-stay` have them (`fnaf2-give-gifts-give-life`).

**child-outside 2.** `body` · NAME
- old: the child outside is the Cassette Man's daughter, and she stays on in the Puppet
- new: the child outside is {{cassette-mans-daughter}}, and she stays on in the Puppet
- why: token; it prints "the Cassette Man's daughter".

**child-outside 3.** `body` · NAME
- old: the credits give that name to the salvaged rabbit, one of the machines gathered there
- new: the credits give that name to {{scraptrap}}, one of the machines gathered there
- why: token; it prints "the salvaged rabbit of Pizzeria Simulator".

**child-outside 4.** `body` · LINK
- old: The speech at the end of the game supplies the rest.
- new: The speech at the end of the game supplies the rest (see ((ffps))).
- why: link: `ffps` tells the speech in full and is in `seeAlso` with no link in the text.

**child-outside 5.** `body` · LINK
- old: The storyline tells her death before the five, and
- new: The storyline tells her death before the five (see ((murders))), and
- why: link: in `seeAlso`, never linked in the text.

**child-outside 6.** `tension` · LENGTH
- Replace the whole `tension` (160 words) with:
  > Take Cake's voice spells S-A-V-E-H-I-M: kept literal, FNaF2's child is a boy, another victim, and not the daughter of the later game, and the model lets Pizzeria Simulator govern and keeps the mismatch on the page. Two records cut against telling her death first. In Ultimate Custom Night the older Chica says "I was the first!" [[ucn-withered-chica-toysnhk]], which does not say first of what; the model reads it as first of the five, of whom the child outside is not one. Help Wanted 2's graveyard is solved by lighting its six graves in an order that begins with Chica and ends with the Puppet [[hw2-pq4-graveyard-order]]: if that is an order of deaths, the two records agree with each other and against the model, but the game does not say what the order orders, and the model uses it for nothing. That is why her place before the five is a convention and not a finding.
- why: eleven sentences to five; both records kept.

**child-outside 7.** `answer` · LENGTH
- old: The Puppet was the machine set to guard her. It reached her too late, and she stays on in it.
- new: The Puppet was the machine set to guard her: it reached her too late, and she stays on in it.
- why: four sentences to three.

### `murders`

**murders 1.** `body` · THE KILLER'S END
- old: Five small ghosts corner a purple figure in a hidden room, and he dies there in the Spring Bonnie suit [[fnaf3-n5-ghosts-safe-room]] (see ((springtrap))).
- new: Five small ghosts corner a purple figure in the room with the suit, and he dies there in the yellow rabbit suit [[fnaf3-n5-ghosts-safe-room]] (see ((springtrap))).
- why: R12's rule, limit 4: "five ghosts" and "he dies" may be said flat here; the room is "the room with the suit" (that it is the tapes' hidden room is R8's medium), and the suit on screen is a yellow rabbit suit (the name is the Night 5 tape's).

**murders 2.** `body` · ROUND FOUR
- old: Prototypes of the yellow bear and the yellow rabbit stand in the same room
- new: Two more prototypes, which the game's files label Fredbear and Spring Bonnie, stand in the same room
- why: R2, round four: the two are "prototypes the game's files label Fredbear and Spring Bonnie" (`secret-of-the-mimic-rnd-proto-pizzeria`); `springlocks` words it so.

**murders 3.** `body` · RECORD
- old: The one luring by a costumed figure that the main games show has a yellow rabbit in it.
- new: The one luring by a costumed figure that the main games show has yellow rabbits in its last play [[ffps-fruity-maze-decay]].
- why: the last screen's record now gives "a dim yellow costumed figure" with its ears out of frame; the rabbits are in `ffps-fruity-maze-decay` ("yellow rabbit figures appear"), which the sentence should cite.

**murders 4.** `body` · RECORD
- old: Its last screen shows the girl in tears, a figure in the yellow rabbit costume behind her, and three lines of text.
- new: Its last screen shows the girl in tears, a grinning yellow figure in costume behind her, and three lines of text.
- why: `ffps-fruity-maze-follow-me` now: "a dim yellow costumed figure with a wide grin and a purple bow tie"; that it has the look of the rabbit suit is in its notes. `killer` words it so.

**murders 5.** `body, figure caption` · RECORD
- old: Fruity Maze, last screen: the figure behind the girl is in the yellow rabbit costume.
- new: Fruity Maze, last screen: a grinning yellow figure in costume behind the girl, its ears out of frame.
- why: the same record; a caption tells what is shown.

**murders 6.** `body` · NAME
- old: The killer of the five most likely wore the yellow rabbit costume, and it was most likely the Spring Bonnie suit itself, the suit he climbs into at the end [[
- new: The killer of the five most likely wore the yellow rabbit costume: the Spring Bonnie suit itself, the suit he climbs into at the end [[
- why: wordcheck: two markers in one sentence; one inference, marked once (C3).

**murders 7.** `tension` · LENGTH
- Replace the whole `tension` (228 words) with:
  > SAVE THEM shows five small bodies among the cast of the 1987 restaurant [[fnaf2-save-them]]; the model draws nothing from the building a death minigame is set in, and ((november-1987)) says why it reads those bodies as these five. The clippings say only "a company mascot" [[fnaf1-news-dressed-as-mascot]]: the rabbit is supplied by later games, and by one tape whose date is assumed. The argument from June prefers FNaF2's November cheques to a line of that game's own first call, which welcomes the guard to a "summer job" [[fnaf2-call1-summer-job]]; if the line were right, a June inside the new restaurant's short life would be possible. Nothing orders the incident against FNaF4's birthday party (see ((bite))), and two days before that party a girl repeats a rumour that "if you die, they hide your body and never tell anyone" [[fnaf4-pigtail-girl-hide-your-body]]: a child's rumour, on which the model builds nothing, but it is why a year before 1983 stays in the bracket. And Into the Pit stages the scene with six bodies in one room [[into-the-pit-prologue-mci]], in a past whose only year, 1985, is on a logo graphic (placement unconfirmed) [[into-the-pit-past-year-1985]]; it is an adaptation that the main games never place, and it settles nothing (see ((edges))).
- why: ten sentences to five; every record kept.

### `golden`

**golden 1.** `body` · ONE TELLING
- old: What is shown is a mascot's head set on a dead child, four times.
- new: What is shown is a mascot's head set on a grey, slumped child, four times.
- why: a sentence that begins "What is shown" tells what is shown; the paragraph above has "four grey, slumped children" (`fnaf2-give-gifts-give-life`).

**golden 2.** `body, table, row "FNaF3, after Night 5"` · THE KILLER'S END
- old: Five ghosts in the hidden room [[fnaf3-n5-ghosts-safe-room]]
- new: Five grey, crying children in the room with the suit [[fnaf3-n5-ghosts-safe-room]]
- why: round 4b, R8's count table: "five ghosts" became "five grey, crying child figures"; R12 limit 4 for the room.

**golden 3.** `body` · THE KILLER'S END
- old: In the other three it is unmarked: a ghost, a faint head, a stone.
- new: In the other three it is unmarked: a grey child, a faint head, a stone.
- why: the same; this is the table's own count.

**golden 4.** `hero` · RECORD
- old: FNaF2's "Give Gifts, Give Life" as it opens
- new: FNaF2's Give Gifts, Give Life as it opens
- why: quotecheck: the name is the archive's for the minigame; the game's captions are "Give Gifts." and "Give Life.", which the body quotes.

**golden 5.** `body, compare, "The fifth of the five"` · RECORD
- old: in play the 1987 bear first attacks on the night a yellow suit is reported used (see ((november-1987))).
- new: by the wiki's activity tables the 1987 bear is inactive until the night a yellow suit is reported used (see ((november-1987))).
- why: `fnaf2-golden-freddy-night6-only` now gives the wiki's per-night tables, not play.

**golden 6.** `tension` · LENGTH
- Replace the whole `tension` (202 words) with:
  > The reading that the bodies went into the mascots has a record against it: in 1987 the older models have been partly retrofitted and are used for parts [[fnaf2-call2-older-models]], so they have been opened up, and still no body is on record as found. That is why the model states only the signs as fact, and gives the bodies as its reading. Three records push against the fifth child: Scott's one early word on the yellow bear is that he could not explain it [[scott-2014-cant-explain-golden-freddy]], and by the wiki's activity tables the bear of 1987 is inactive until the night a yellow suit is reported used [[fnaf2-golden-freddy-night6-only]], so whatever ties it to its child may be later than the other four's, and of another kind. A hidden mechanic in Ultimate Custom Night answers a coin spent on Golden Freddy with Fredbear, the bear that bit the crying child of FNaF4 [[ucn-death-coin-fredbear]]: the best case for the rival, that the yellow bear's child is the crying child, or that one presence is both. It loses on the count: he was never one of the five linked to the incident, and no count has a place for a child beyond the five and the child outside.
- why: nine sentences to five; the bear's inactivity is told as the record now has it (the wiki's activity tables).

**golden 7.** `answer` · LENGTH
- old: The mascots began to smell, and to show what looked like blood round their eyes and mouths. The model reads that as the bodies hidden inside them, which no game shows. The children stay on in the machines, and in seven counts of the dead there are four and one more: the model reads the one as the fifth child, behind the yellow bear called Golden Freddy. Four names are on the gravestones. The fifth is never given.
- new: The mascots began to smell, and to show what looked like blood round their eyes and mouths; the model reads that as the bodies hidden inside them, which no game shows. The children stay on in the machines, and in seven counts of the dead there are four and one more: the model reads the one as the fifth child, behind the yellow bear called Golden Freddy. Four names are on the gravestones, and the fifth is never given.
- why: five sentences to three.

### `november-1987`

**november-1987 1.** `body, table, Night 2` · RECORD
- old: In play the older Foxy does from this night, and the other three from the next [[fnaf2-old-models-walk-from-night2]].
- new: By the wiki's activity tables the older Foxy does from this night, and the other three from the next [[fnaf2-old-models-walk-from-night2]].
- why: the record's claim now opens "By the wiki's per-night activity tables".

**november-1987 2.** `body, table, Night 6` · RECORD
- old: The place is closed: a spare yellow suit has been used [[fnaf2-call6-yellow-suit]]. In play the yellow bear attacks for the first time [[fnaf2-golden-freddy-night6-only]].
- new: The place is closed. A spare yellow suit has been used [[fnaf2-call6-yellow-suit]]. By the wiki's activity tables the yellow bear is active for the first time [[fnaf2-golden-freddy-night6-only]].
- why: the call gives no "because"; the second record now gives the wiki's tables, and "does not attack" is in its notes.

**november-1987 3.** `body` · RECORD
- old: and in play it first attacks on this night.
- new: and by the wiki's activity tables it is first active on this night.
- why: the same record.

**november-1987 4.** `tension` · LENGTH
- Replace the whole `tension` (256 words) with:
  > Read alone, FNaF2 suggests victims in 1987: SAVE THEM shows five small bodies among that restaurant's cast [[fnaf2-save-them]], with a purple figure who has a mark on his chest that the purple figures of FNaF2's other two minigames lack [[fnaf2-save-them-purple-figure-chest-mark]], and by the third night the company is denying something "tragic" [[fnaf2-call3-rumors]]. The model reads the bodies as the earlier five, because no later count of the dead has a ghost, a mask, a grave or a doll left over for five more, and the price is a week with no recorded act. For the Bite, no call that week uses the word [[fnaf2-no-bite-mention]], and the first game's sentence is spoken about its own four machines, so a bite earlier in 1987 at the old location cannot be excluded. For the suit, the rabbit is the suit the killer dies in [[fnaf3-n5-springlock-death]], and a grinning yellow figure with the look of that suit stands behind the girl in the one luring a main game shows [[ffps-fruity-maze-follow-me]]; the bear is preferred, narrowly, and on two assumptions: that the hidden room was sealed before November 1987, and that the bear was not sealed in with the rabbit. Against reading the new machines as machines and nothing more, they wander at night before any tampering is suspected, the sixth night's call says that none of them are acting right, and in FNaF3's hidden minigames it is the 1987 cast that fetches cake and gives it to crying children, Balloon Boy [[fnaf3-bbs-air-adventure]], Toy Chica [[fnaf3-chicas-party]] and Mangle [[fnaf3-mangles-quest]]: the model has no account of that.
- why: twelve sentences to five; every record kept; the Fruity Maze figure is told as its record now has it.

**november-1987 5.** `answer` · LENGTH
- old: The killer was most likely back in the building. What he did there, no record says.
- new: The killer was most likely back in the building, and what he did there no record says.
- why: four sentences to three.

### `fnaf1-restaurant`

**fnaf1-restaurant 1.** `body, pill` · ONE TELLING
- old: So this week is <<not before November 1988|derived|
- new: So this week falls in <<a November after 1987|derived|
- why: R24 (6), round 4b: FNaF1's label is "a November after 1987" (beat `s-last-freddys`, `games`); the bound stays in the pill's basis, and the next sentence should then read "Nothing says it was 1988: that is only the earliest it can be, and the model prints no year."

**fnaf1-restaurant 2.** `body` · RECORD
- old: They are dated 11-12 and 11-13, with the year printed as "xx" [[fnaf1-paycheck-night5]] [[fnaf1-paycheck-night6]].
- new: They are dated "11-12-xx" and "11-13-xx" [[fnaf1-paycheck-night5]] [[fnaf1-paycheck-night6]]: the year is two letters x.
- why: quotecheck MISS: the tool cannot pair a two-character quotation; the full printed date is in the records' claims.

**fnaf1-restaurant 3.** `body, table "In November 1987 | In FNaF1", row 3` · RECORD
- old: Phone Guy: "I actually worked in that office before you"
- new: Phone Guy: "I actually worked in that office before you" [[fnaf1-call1-phone-guy-previous-guard]]
- why: quotecheck: the cell quotes a record it does not cite.

**fnaf1-restaurant 4.** `body` · RECORD
- old: There is banging behind that one, and he asks a favour.
- new: The transcript marks banging all through that one, and he asks a favour.
- why: `fnaf1-call4-phone-guy-attacked` now says "The transcript marks banging through the message"; it was not checked by ear.

**fnaf1-restaurant 5.** `body` · RECORD
- old: The recording ends in a tune, a scream and static. The fifth night's message is not his: deep, distorted voices [[fnaf1-call5-garbled]].
- new: The transcript marks music, a scream and static at its end. The fifth night's message is deep, distorted voices [[fnaf1-call5-garbled]].
- why: the same record; and `fnaf1-call5-garbled` no longer says the voice is not his (that is the wiki's word, in its notes).

**fnaf1-restaurant 6.** `body` · LINK
- old: The working is in ((timeline-math)), which also shows why Phone Guy's "twenty years" of songs does not measure the gap.
- new: The working is in ((timeline-math)).
- why: link: `timeline-math` has one sentence on the "twenty years", under what pushes back, and does not show that.

**fnaf1-restaurant 7.** `tension` · LENGTH
- Replace the whole `tension` (221 words) with:
  > The records resist at six points. Phone Guy says he would be irritable too if he were forced to sing "those same stupid songs for twenty years" [[fnaf1-call1-twenty-years]]; the model takes it as loose talk about the age of the act, though taken literally it would put FNaF1 some twenty years after the machines first sang, which points away from an early date. Scott's store text for FNaF2 reads as a sequel's, in which "the old and aging animatronics are joined by a new cast" [[scott-fnaf2-steam-old-and-aging]], and his text for FNaF1 calls the post a "summer job" [[scott-2014-fnaf1-store-summer-job]]: the model prefers the cheques, which give 1987 as the only year FNaF2 prints and November as FNaF1's month. The advertisement says nothing of a reopening [[fnaf1-help-wanted-ad]], and "the tragedy that took place there" could mean the brand as easily as the building, which is why the old building stays at most likely; the voice that names Spring Bonnie on FNaF3's tapes says in 1987 only "a yellow one" [[fnaf2-call6-yellow-suit]], which one man being vague to a guard would explain, and it is why the tapes are said only to imply him. And the closing clipping is undated: if it is the old restaurant's notice from before 1987, FNaF1's own closing has no record, and the placing of the killer's death after it loses its marker (see ((springtrap))).
- why: eleven sentences to five; every record kept; the 'twenty years' line is told as the record now has it (he supposes it of himself). The old opening, "Five records resist.", was followed by six points; the sixth has no record.

### `springtrap`

**springtrap 1.** `answer` · THE KILLER'S END
- old: He comes back to an empty restaurant, most likely the old one, takes the four machines apart one by one, and is cornered by five ghosts in the hidden room. He climbs into the Spring Bonnie suit and it closes on him.
- new: He comes back to an empty restaurant, most likely the old one, takes the four machines apart one by one, and is cornered in the room with the suit by five grey, crying children: on the model's reading, the ghosts of the five. He climbs into the Spring Bonnie suit, it snaps shut on him, and he dies in it.
- why: R12's rule (round 4b): this is the one chapter that tells the scene as shown, marks "ghosts" and states the death. The room is "the room with the suit" until the last sentence marks it as walled up (limit 4).

**springtrap 2.** `body` · THE KILLER'S END
- old: The old training tapes that play during FNaF3's nights had warned of this (see ((springlocks))). The third night's tape tells the wearer of such a suit: "Do not breathe on the springlocks, as moisture may loosen them, and cause them to break loose." [[fnaf3-tape3-springlock-bleeding]] The man is not named here.
- new: The screen shows no more than that. He dies there: that is an inference, and a firm one, on two supports. The old training tapes that play during FNaF3's nights say what such a suit does to its wearer (see ((springlocks))). The third night's tape warns, "Do not breathe on the springlocks, as moisture may loosen them, and cause them to break loose." [[fnaf3-tape3-springlock-bleeding]], and tells a performer whose locks come loose to move away from the customers "before bleeding out" [[fnaf3-tape3-bleeding-out]]. And thirty years on, rare screens show what looks like a decayed human body inside that suit [[fnaf3-springtrap-corpse-screens]] (see ((fazbears-fright))). The five grey children are, on the model's reading, the ghosts of the five he killed: there are five, they are drawn as the crying children of FNaF2's minigames, they stand in the building where the four machines have just been taken apart, and he runs from them. The man is not named here.
- why: R12's rule, points 2 and 3: the death is stated once, here, in the sentence after the scene, with the tapes and the body in the suit; "ghosts" is marked once, here, with its four supports. Split into two paragraphs at "The five grey children".

**springtrap 3.** `body` · THE KILLER'S END
- old: The tapes are addressed to working staff [[fnaf3-tapes-freddy-fazbears-pizza]], so the sealing most likely comes before his death. He dies, then, inside a room that had been walled up with the Spring Bonnie suit in it, and five ghosts come in after him.
- new: Most likely the room with the suit is one of these, and was sealed before he died: no camera shows it, the machines cannot enter it, and the tapes are addressed to working staff [[fnaf3-tapes-freddy-fazbears-pizza]]. He dies, then, inside a room that had been walled up with the Spring Bonnie suit in it, and five ghosts come in after him.
- why: R12 limit 4 and R8: that the room of the scene is the tapes' sealed room is medium, so the one marker covers the room as well as the order.

**springtrap 4.** `body` · ROUND FOUR
- old: The model reads these lines as this building and these four
- new: These lines can be read as this building and these four
- why: R12's wording rule: that the Cassette Man's "lured them all back" is this dismantling is "can be read as", no firmer. `fazbears-fright` has it so.

**springtrap 5.** `body, compare, "Before 1987, as the old restaurant rotted"` · RECORD
- old: which suits an empty, wet building. In 1987 the older machines sit damaged, Bonnie without a face [[fnaf2-parts-service-old-models]], and Scott's FNaF2 trailer shows them under the captions "forgotten", "dismantled" and "deactivated" [[scott-fnaf2-trailer-captions]].
- new: which suits an empty building with dark patches on its floors. In 1987 the older machines sit damaged, Bonnie without a face [[fnaf2-parts-service-old-models]], and Scott's FNaF2 trailer shows the captions "forgotten", "dismantled" and "deactivated" between shots of them [[scott-fnaf2-trailer-captions]].
- why: `scott-fnaf2-trailer-captions` now says the captions come "between shots of" the older machines; `fnaf3-eon-puddles-empty-building` gives "dark puddle-shaped patches" and does not say they are water.

**springtrap 6.** `body` · NAME
- old: On that reading the dark bear is the killer's lure.
- new: On that reading {{shadow-freddy}} is the killer's lure.
- why: token; it prints "the dark bear".

**springtrap 7.** `tension` · LENGTH
- Replace the whole `tension` (135 words) with:
  > The rival placing is before 1987, while the old restaurant stood "left to rot" [[fnaf2-call1-new-location]]. An empty building with dark patches on its floors suits that too, and Scott's FNaF2 trailer shows the captions "forgotten", "dismantled" and "deactivated" between shots of the older machines [[scott-fnaf2-trailer-captions]]. It loses on one count only, that it leaves no living culprit for November 1987, and that count is itself a reading, which is why the placing is held at the lower end of medium. If FNaF1's closing clipping is the old restaurant's notice and not its own (see ((fnaf1-restaurant))), the placing after the last restaurant's closing loses its marker as well. And the model's placing has a seam it cannot close: the hidden room was walled up with its contents inside [[fnaf3-tape6-safe-rooms-sealed]], yet the killer and the ghosts are in it, and no game shows who opened it.
- why: six sentences to five; the trailer and the patches are told as their records now have them (captions between shots; dark patches, not water).

**Lengths and furniture (list only).**

- No chapter of yours is over 1,100 words.
- Sentences over 40 words: one, in `child-outside`.
- Answers over three sentences, tightened above: `child-outside`, `golden`, `november-1987`. Tensions over five, tightened above: all six.
- Headings that name a topic and not a finding: `november-1987`: "The week, night by night". The others say what the section finds.
- `golden` and `ffps` print the same figure (`ffps-lorekeeper-the-end.jpg`). `golden` says whose the stones are; `ffps` says when they are shown. Keep your caption ("Four named stones, a fifth behind the grass at the right, and a sixth alone on the hill.") in step with writer 5's, which gives the four names.


## Writer 5: `reckoning.ts` (`fazbears-fright`, `ffps`, `salvage`, `ucn`, `faith`)

32 items.

### `fazbears-fright`

**fazbears-fright 1.** `body` · THE KILLER'S END
- old: It is most likely the purple figure who died in a rabbit suit in a hidden room (see ((springtrap)))
- new: It is most likely the purple figure who dies in the rabbit suit (see ((springtrap)))
- why: R12 limit 4: the room is "the room with the suit", and that it is the tapes' hidden room is R8's medium; `springtrap` carries it.

**fazbears-fright 2.** `body` · RECORD
- old: with a clip of Balloon Boy's laugh, a child's voice [[fnaf3-audio-lure-mechanic]]
- new: with a clip of Balloon Boy's laugh [[fnaf3-audio-lure-mechanic]]
- why: the record's title no longer says "a child's voice", and its notes say the game does not remark on why the sound works.

**fazbears-fright 3.** `body` · NAME
- old: An employee of the attraction phones the guard on the first two nights.
- new: {{phone-dude}} phones the guard on the first two nights.
- why: token; it prints "The attraction's caller" at the head of the sentence.

**fazbears-fright 4.** `body` · NAME
- old: show a dark bear and a purple figure do to the four mascots
- new: show {{shadow-freddy}} and a purple figure do to the four mascots
- why: token; it prints "the dark bear".

**fazbears-fright 5.** `tension` · LENGTH
- Replace the whole `tension` (147 words) with:
  > FNaF3's own second screen shows the heads with their eyes dark and the fifth head gone [[fnaf3-good-ending-heads]]: inside that game, the children leave, and the model does not deny it. It reports that a later game, which Scott said in 2018 (a transcript) existed "just to resolve some plot points" [[scott-2018-interview-ffps-made-to-resolve-plot-points]], speaks of small souls still without rest and shows the graves only after its own fire. It admits three gaps: no record says when the stones were set, no game shows the five between the attraction and the trap, and after that fire one voice still refuses release [[ucn-orville-he-tried-to-release]]. Asked in 2018 which FNaF3 ending happened, Scott said the answer was "complex" and did not give it [[scott-2018-interview-fnaf3-ending-unanswered]]. That record is a transcript too, and it leaves room for the surviving alternative: that the release held for the five, and what was gathered later is something else.
- why: six sentences to five; nothing dropped.

**fazbears-fright 6.** `answer` · LENGTH
- old: One of the game's two endings runs through Happiest Day, a hidden party at which six masked children vanish. The model tells it as the release the children were owed and the first attempt at it.
- new: One of the game's two endings runs through Happiest Day, a hidden party at which six masked children vanish; the model tells it as the release the children were owed and the first attempt at it.
- why: four sentences to three.

**fazbears-fright 7.** `body, pill "thirty years later"` · ADDED 07:37
- old: <<thirty years later|relative|scott-2015-fnaf3-store-thirty-years,scottgames-site-fnaf3-source-30-years-later-only-one|Scott wrote that the game is set thirty years after the pizzeria closed. No year is printed.>>
- new: <<thirty years later|printed|scott-2015-fnaf3-store-thirty-years,scottgames-site-fnaf3-source-30-years-later-only-one|Scott Cawthon wrote the store text for the game, and it prints the interval: thirty years after the pizzeria closed its doors. The interval is printed. The closing it counts from has no year, so the date is a distance from an undated event and gives no year. Which of three closings it counts from is not said.>>
- why: the rulings' list of dates and `dates.ts` give this date the kind `printed`: the interval is printed in Scott's store text, and only the closing it counts from is undated. The style guide's example had `relative`, which was the lead's error. Beat `s-fazbears-fright` now carries the same kind and basis. No quotation mark or apostrophe may stand inside a pill, so the basis paraphrases the store text.

### `ffps`

**ffps 1.** `body` · RECORD
- old: The fire breaks out during the speech, and the machines are shown burning as the building goes up [[ffps-completion-fire]].
- new: The fire breaks out during the speech, and salvaged machines are shown burning as the building goes up [[ffps-completion-fire]].
- why: the record's claim now reads "salvaged animatronics are shown burning", not all of them; its notes, from the wiki, say Lefty is not shown burning.

**ffps 2.** `body` · RECORD
- old: William Afton is among those the fire is shown to burn [[ffps-completion-fire]], and the game presents that as his end.
- new: Salvaged machines are shown burning [[ffps-completion-fire]], and the game presents that fire as William Afton's end.
- why: the same record no longer says which machines burn. If the records editor completes its claim with the machines shown, the sentence may stand as it is.

**ffps 3.** `tension` · LENGTH
- Replace the whole `tension` (179 words) with:
  > The game itself calls the ending final: the achievement reads "Trapped them all." [[ffps-completion-achievement]], and the last screen says "THE END" over six graves [[ffps-lorekeeper-hill-stone]]. The model takes that at the game's word and then counts what later games reopen, at unequal firmness: a company whose own voice says it is no longer a corporate entity [[ffps-completion-tutorial-atonement]] trades again, a pizzeria with the same sign lies under its newest building, and one voice refuses release. The game presents the fire as the killer's end, and his image returns in those later games; what, if anything, of the man persists is argued in other chapters, each with its own marker, and the model does not tell those as one history. On the franchisee, Scrap Baby's "You're not who I expected to see..." [[ffps-scrap-baby-not-expected]] is the line for an outsider; the model keeps Michael on the volunteer whom the Cassette Man expects to stay, and on "it's still me" [[ffps-scraptrap-still-me]], and the identification stays at most likely. Who lit the fire, and whether the volunteer left, the game does not show.
- why: nine sentences to five; nothing dropped.

**ffps 4.** `answer` · LENGTH
- old: It was bait. The Cassette Man called four haunted machines into one building and stayed as it burned.
- new: It was bait: the Cassette Man called four haunted machines into one building and stayed as it burned.
- why: four sentences to three.

**ffps 5.** `answer` · ADDED 08:35
- old: a ruined pizzeria with the same sign lies under its newest building
- new: a ruined pizzeria with the same sign lies under its Mega Pizzaplex
- why: no record calls the Mega Pizzaplex the company's newest building (`factcheck-9.md`, home 7); the thesis in `theory.ts` now has "under its Mega Pizzaplex". Your own last section names it: "The Pizzaplex of Security Breach, a Fazbear Entertainment building".

**ffps 6.** `tension` · ADDED 08:35
- old: a pizzeria with the same sign lies under its newest building
- new: a pizzeria with the same sign lies under its Mega Pizzaplex
- why: the same.

**ffps 7.** `body, last section, last paragraph` · ADDED 08:35
- old: and under its newest building [[security-breach-burntrap-appearance]]
- new: and under its Mega Pizzaplex [[security-breach-burntrap-appearance]]
- why: the same.

### `salvage`

**salvage 1.** `body, compare, "In the Puppet's keeping"` · ONE TELLING
- old: the masks she once gave four dead children (see ((golden))).
- new: the masks she once gave four grey, dead-looking children (see ((golden))).
- why: one wording for the Give Gifts scene (`fnaf2-give-gifts-give-life`; beat `s-children-stay`).

**salvage 2.** `body, table "Where the five are", row "The dismantling"` · THE KILLER'S END
- old: Out of the machines: five ghosts corner the killer [[fnaf3-n5-ghosts-safe-room]] and fade when the suit closes on him [[fnaf3-n5-springlock-death]] | Shown. No release is read into the fading
- new: Out of the machines: five grey, crying children corner the killer [[fnaf3-n5-ghosts-safe-room]] and fade when the suit closes on him [[fnaf3-n5-springlock-death]] | Shown. That they are the five is the model's reading (see ((springtrap))). No release is read into the fading
- why: R12's rule, point 1: a row marked "Shown" tells the scene as shown.

**salvage 3.** `body, table "Where the five are", row 3` · THE KILLER'S END
- old: From the hidden room to the alley
- new: From that room to the alley
- why: R12 limit 4: "the room with the suit"; that it is the tapes' hidden room is R8's medium.

**salvage 4.** `body` · RECORD
- old: and he says as much himself.
- new: and the model reads his own line as saying so.
- why: `ffps-scraptrap-alley-remains` now marks it: taking "You may not recognize me at first" as a nod to the change of shape "is a reading".

**salvage 5.** `body` · RECORD
- old: Its voice is Funtime Freddy's, as Scrap Baby's is Baby's [[ffps-credits-returning-voices]].
- new: Its voice actor is Funtime Freddy's, as Scrap Baby's is Baby's [[ffps-credits-returning-voices]].
- why: the record now says only that the credits give the two parts the same actors.

**salvage 6.** `body` · NAME
- old: He is the salvaged rabbit of Pizzeria Simulator, William Afton (Scott's guide adds "AKA Scraptrap")
- new: He is {{scraptrap}}, William Afton (Scott's guide adds "AKA Scraptrap")
- why: token; it prints "the salvaged rabbit of Pizzeria Simulator". The R26 first-use form is already here.

**salvage 7.** `tension` · LENGTH
- Replace the whole `tension` (161 words) with:
  > Pizzeria Simulator never says "Ennard", and its tapes say only that things turn up in the alley "quite often" and that "we aren't sure why" [[ffps-salvage-first-tape-alley]], and of the later three, "we are unsure of its origins" [[ffps-salvage-origins-unknown]]: Molten Freddy's past is read from its body, its voice actor, its lines and a dialogue Scott published outside the game. The Puppet inside Lefty is read from a blueprint that names no target. And nothing says where the five are: if FNaF3's second ending held [[fnaf3-good-ending-heads]], they are in nothing, and what the trap gathers is something else. The model keeps them among what answers the call because the Cassette Man speaks of small souls lured back and overpowered, which can be read as what FNaF3 shows done to the four mascots, and because he means to give them rest. It does not say which machine holds them or how four machines answer for five children, and that, the weakest join in this part, is marked not shown wherever it appears.
- why: seven sentences to five; round 4b, R30: the first tape (Molten Freddy's) says only "we aren't sure why", and "unsure of its origins" is the later tapes', so both are cited.

**salvage 8.** `answer` · LENGTH
- old: The killer, in what is left of his rabbit suit. His daughter, in what is left of Circus Baby. The rest of the Sister Location machines, fused into one that the game calls Molten Freddy. And, most likely, the Puppet, inside a bear built to catch it.
- new: The killer, in what is left of his rabbit suit, and his daughter, in what is left of Circus Baby; and, most likely, the rest of the Sister Location machines, fused into one that the game calls Molten Freddy, and the Puppet, inside a bear built to catch it.
- why: six sentences to three; Molten Freddy takes the "most likely" that the chapter's own table and beat `s-trap-fire` give it ("Most likely the others are...").

### `ucn`

**ucn 1.** `answer` · ROUND FOUR
- old: "The one you should not have killed" is a child the player killed, and he runs the night. Which child, the records do not settle.
- new: "The one you should not have killed" is a child the player killed, who on the model's reading runs the night; which child, the records do not settle.
- why: R16 (3), round four: that the accuser runs the night is the model's reading (one Nightmare says it was "remade" by him; a second voice whispers under three rare lines). Four sentences to three as well.

**ucn 2.** `body, compare, "Michael Afton"` · ROUND FOUR
- old: FNaF4's monsters, "remade, but not by you" [[ucn-nightmare-freddy-toysnhk]] and real "This time" [[ucn-nightmare-fredbear-lines]], turn on FNaF4's guilty party
- new: One of FNaF4's monsters calls itself "remade, but not by you" [[ucn-nightmare-freddy-toysnhk]], another says there is more than an illusion to fear "This time" [[ucn-nightmare-fredbear-lines]], and both turn on FNaF4's guilty party
- why: R16, round four: one Nightmare says it of itself; the line is not about all of them.

**ucn 3.** `body` · ROUND FOUR
- old: The two readings put one or the other in this office.
- new: The two readings put one or the other in this office, most likely after that fire.
- why: round four: that this night follows the fire is medium-high, not firm (beat `s-night-without-end`: "After the fire, most likely"). The chapter's heading says "After the fire" and no sentence marks it.

**ucn 4.** `body` · RECORD
- old: No line gives the player a name, or anyone else [[ucn-protagonist-unnamed-killer]].
- new: No line gives the player a name [[ucn-protagonist-unnamed-killer]].
- why: the record's claim now covers the player only, and a line this chapter cites does name someone ("Orville", in `ucn-mr-hippo-just-a-story`).

**ucn 5.** `tension` · LENGTH
- Replace the whole `tension` (326 words) with:
  > No line names the player [[ucn-protagonist-unnamed-killer]], the game carries its own warning against over-reading [[ucn-mr-hippo-just-a-story]], and the case for Michael is real: the model's lean is narrow. Old Man Consequences tells his listener to leave the demon to his demons [[ucn-omc-ending]], and on its plain sense the listener is not the demon: the model gives the line another listener, and admits that nothing on screen marks one. The voice that told Michael "You won't die" says it again here [[ucn-scrap-baby-lines]], and a Nightmare calls the player "a victim that can't perish" [[ucn-nightmare-freddy-cant-perish]], to which the model's only answer is the rabbit's own boast, "I always come back" [[ucn-afton-always-come-back]]; Nightmare Fredbear throws FNaF4's promise at the player [[ucn-nightmare-fredbear-lines]], which with William in the office needs the Nightmares to have been his work first, a step the model rates low; and the Puppet tells the player she does not hate him, which is hard to say to her murderer, though the same figure is "not afraid of you... not anymore" [[ucn-puppet-lines]]. "He tried to release you" [[ucn-orville-he-tried-to-release]] suits the volunteer, with a way out planned, at least as well as the man sent to the Devil, and three lighter things pull the same way: Circus Baby offers the Scooping Room [[ucn-circus-baby-lines]], a stage machine from Pizzeria Simulator greets "my truest friend" [[ucn-rockstar-bonnie-truest-friend]], and Scott's store text has the player "once again" trapped in an office [[scott-ucn-store-once-again-trapped]]. For the accuser, a hidden mechanic answers a coin spent on Golden Freddy with the jumpscare of Fredbear [[ucn-death-coin-fredbear]], which points at FNaF4's crying child, and FNaF3's hidden party shows a child in a golden mask vanish with the others [[fnaf3-happiest-day]], so the lean to the fifth child is rated low; what is left for William is that the game's hardest words are a judge's words to a murderer, and no reading of Michael absorbs them.
- why: eleven sentences to five; all fourteen citations kept. With thirteen counter records this one cannot be shorter without dropping a record.

**ucn 6.** `body` · ADDED 08:35
- old: This game never says "Hell".
- new: In the archive's records this game never says "Hell".
- why: a universal with no record behind it (`factcheck-9.md`, author 10). The archive holds 62 records of this game and none has the word; that is what can be said, and it is how the Faith page now says it: "In the archive's records Ultimate Custom Night never says "Hell"". R16's wording note still has the flat form.

### `faith`

**faith 1.** `body` · NAME
- old: The dead most likely include the five murdered children (see ((salvage))), and the old friend is most likely the man who killed them (see ((killer))).
- new: Most likely the dead include the five murdered children (see ((salvage))), and the old friend is the man who killed them (see ((killer))).
- why: wordcheck: two markers in one sentence; one is enough (C3).

**faith 2.** `answer` · LENGTH
- old: Yes, in plain words. The Cassette Man's last speech sends the children to rest and his old friend to "the darkest pit of Hell".
- new: Yes, in plain words: the Cassette Man's last speech sends the dead to rest and his old friend to "the darkest pit of Hell".
- why: four sentences to three; "the dead" is what the speech says, and that they include the five is the chapter's own "most likely".

**faith 3.** `body, the paragraph "The games go no further."` · ADDED 08:35
- old: There is no church in them and no doctrine.
- new: The archive's records show no church in them and no doctrine.
- why: the same fault, and the Faith page's own words for it: "The archive's records show no church in them".

**faith 4.** `body, the same paragraph, last sentence` · ADDED 08:35
- old: and Ultimate Custom Night never says "Hell" at all.
- new: and in the archive's records Ultimate Custom Night never says "Hell".
- why: the same, in the words `ucn` now has.

**Lengths and furniture (list only).**

- Body over 1,100 words: `ffps` 1,143; `ucn` 1,301 (the style guide allowed each 1,300).
- Answers over three sentences, tightened above: `fazbears-fright`, `ffps`, `salvage`, `ucn`, `faith`. Tensions over five, tightened above: `fazbears-fright`, `ffps`, `salvage`, `ucn`.
- Headings that name a topic and not a finding: `fazbears-fright`: "What the attraction found", "Happiest Day", "What a later game says", "The fire". `ffps`: "Saturday". `salvage`: "The rabbit and his daughter", "Where the five are". `ucn`: "After the fire", "The lines that separate them", "The old man by the lake". `faith`: "What Scott said".
- `ffps` and `golden` print the same figure (`ffps-lorekeeper-the-end.jpg`): keep your caption in step with writer 4's.


## Writer 6: `afterimage.ts` (`cover-story`, `digital`, `vanny`, `pizzaplex`)

34 items.

### `cover-story`

**cover-story 1.** `answer` · ROUND FOUR
- old: The events were real. Inside the story, games were later made about them, and the company now puts most of that history down to "a complete lunatic". It is one continuous actor: nearly every explanation it gives is a denial or a programming quirk, what it admits comes wrapped in a denial or a disclaimer, and it sells its own past as entertainment.
- new: The events were real: inside the story, games were later made about them, and the company now puts most of that history down to "a complete lunatic". It behaves as one actor in every game that shows it: nearly every explanation it gives is a denial or a programming quirk, each concession comes with a denial or a disclaimer beside it, and it sells its own past as entertainment.
- why: R31, round four: "behaves as one actor in every game that shows it" (the record is not unbroken: `ffps-completion-tutorial-atonement`) and "each concession comes with a denial or a disclaimer beside it". Round 4b names this chapter. Four sentences to three as well.

**cover-story 2.** `body` · ROUND FOUR
- old: and what the company concedes comes wrapped.
- new: and each concession has a denial or a disclaimer beside it.
- why: the same ruling.

**cover-story 3.** `further` · LINK
- In the `further` list: add `scott-silver-parasol-website` beside `scott-2019-silver-parasol-logo`.
- why: it is the same fact as the logo record and is still listed outside the story; filed here, it comes off `outsideStory` (the lead removes the id from `theory.ts`).

### `digital`

**digital 1.** `body` · RECORD
- old: a grinning, man-shaped figure in a golden-yellow rabbit costume
- new: a grinning, person-shaped figure in a golden-yellow rabbit costume
- why: the same record.

**digital 2.** `body` · RECORD
- old: crosses a graveyard of six unmarked stones, counted on one screenshot [[hw-mobile-princess-quest-graveyard]]
- new: has a graveyard of six unmarked stones, counted on the wiki's screenshot [[hw-mobile-princess-quest-graveyard]]
- why: the record's claim is now the count on the wiki's screenshot; it no longer says the route crosses the graveyard, and the screenshot may be from either version of Princess Quest.

**digital 3.** `body, compare, "A copying program"` · RECORD
- old: The anomaly's one speech is the tape speaker's greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]].
- new: When the anomaly is near, a low-pitched clip plays, which the wiki's audio page identifies as the tape speaker's greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]].
- why: the record now says a clip plays when the figure is near; the identification is the wiki's, and that the clip is the figure's own voice is a reading.

**digital 4.** `tension` · RECORD
- old: the figure's one speech in the hub is the tape speaker's greeting, pitched down [[hw-glitchtrap-uses-tape-girl-voice]], a borrowed voice, which is how Murray's copying machine speaks
- new: the one clip that plays when the figure is near in the hub is, by the wiki's audio page, the tape speaker's greeting pitched down [[hw-glitchtrap-uses-tape-girl-voice]]: if it is the figure's voice it is a borrowed one, which is how Murray's copying machine speaks
- why: the same record.

**digital 5.** `body` · NAME
- old: whom this archive calls the tape speaker.
- new: whom this archive calls {{tape-girl}}.
- why: token; it prints "the tape speaker".

**digital 6.** `body` · NAME
- old: this archive calls it the rabbit in the code (known as Glitchtrap, Scott's working name for it)
- new: this archive calls it {{glitchtrap}} (known as Glitchtrap, Scott's working name for it)
- why: token; it prints "the rabbit in the code". The R26 first-use form is already here.

**digital 7.** `body` · NAME
- old: the words of Pizzeria Simulator's salvaged rabbit, {{william-afton}}
- new: the words of {{scraptrap}}, {{william-afton}}
- why: token; it prints "the salvaged rabbit of Pizzeria Simulator".

**digital 8.** `answer` · LENGTH
- old: It presents as the killer: a man's shape in his kind of costume, with his kind of lure. What it is, the games do not settle. The model reads it as something William Afton left behind on those boards, and prefers that to a copying program that had learned him. It is not the whole man.
- new: It presents as the killer: a person's shape in his kind of costume, with his kind of lure. What it is, the games do not settle: the model reads it as something William Afton left behind on those boards, prefers that to a copying program that had learned him, and does not take it for the whole man.
- why: five sentences to three; `hw-rabbit-figure-appearance` now says "person-shaped".

**digital 9.** `tension` · ADDED 08:35
- old: No game says whose board it was [[sd-which-board-unknown]]
- new: No game says which machine the boards came from [[sd-which-board-unknown]]
- why: whose boards they were is on record: the client sent them (`hw-tape-05`), and the client is the company. What no game says is which machine they came from (R18 (1); `factcheck-9.md`, home 7 and community 10). `thesis` and the home page have this wording already.

### `vanny`

**vanny 1.** `tension` · NEW RECORD
- Replace the whole `tension` (175 words) with:
  > One page will not fit: after the rooftop ending a blonde woman in Vanessa's cap and uniform stands on the burning roof, looking down, when the woman in the rabbit costume has already fallen [[security-breach-rooftop-vanessa-alive]]. Two women would explain it, the page cannot be set aside as a branch, because who is inside the costume does not depend on the ending, and the game's cast list, read here from the wiki's transcription, credits "Vanessa" and "Vanny" as two parts with two performers [[security-breach-credits-vanessa-vanny-two-parts]]; a credit names a voiced part and not a person, and the same list gives Vanessa's performer Glamrock Chica as well, so it shows two voices and does not say two women. The model keeps one woman, narrowly, on the mask on the floor, the therapy recordings and Freddy's reading of the name, and has no account of the page. On her release, Gregory's comics draw every ending except the Princess Quest one [[ruin-gregory-comics-depict-endings]], and no later game shows her with the mask off. On the remedy, the fourth game's achievement reports "System threats found. Repair complete." [[hw2-pq4-consequences-achievement]], but in that same game the rabbit in the code glitches the instruction screens [[hw2-glitchtrap-corrupts-backstage]] and, as the wiki's summaries describe the main ending, a rabbit-costumed arm reaches out [[hw2-faz-force-ending]], and in the next game the mask still shows a rabbit's shadow on the hideout wall, by the wiki's summary [[ruin-vanny-hideout-glitchtrap-shadow]]: the games show the thing fought from inside, and do not show that it worked.
- why: seven sentences to five, with four changes: the roof page and the doors are told as the records now have them (a blonde woman; no name is printed); the cast list is added (new record, R19); "with the mask off" (R19, round four); the arm is "as the wiki's summaries describe" and the rabbit in the mask is the shadow in RUIN's hideout (R19, round four: not the M.X.E.S. figure).

**vanny 2.** `counterEvidence` · NEW RECORD
- In the `counterEvidence` list: `security-breach-rooftop-vanessa-alive`, `ruin-gregory-comics-depict-endings`, `hw2-pq4-consequences-achievement`, `hw2-glitchtrap-corrupts-backstage`, `hw2-faz-force-ending`: add `security-breach-credits-vanessa-vanny-two-parts` after `security-breach-rooftop-vanessa-alive`.
- why: the new record (R19 has listed it since round three as counting against one woman). Its clause is in the tension below. The id is valid once the records editor has added it to `sb-mimic.json`; check with `npx tsx scripts/validate.ts`.

**vanny 3.** `body` · ROUND FOUR
- old: One ending shows the rabbit crushed, and the next game still has a rabbit in the mask [[ruin-the-entity]].
- new: One ending shows the rabbit crushed, and in the next game the mask still shows a rabbit's shadow on the hideout wall, by the wiki's summary [[ruin-vanny-hideout-glitchtrap-shadow]].
- why: R19, round four: that rabbit is the shadow in RUIN's hideout, not the figure from the M.X.E.S. cabinet.

**vanny 4.** `answer` · RECORD
- old: Most likely one woman: Vanessa, the Pizzaplex's security guard, acting under the control of whatever writes to her, and earlier the beta tester who is left a plush rabbit at the end of Help Wanted. One page of one ending shows Vanessa on the roof after the woman in the rabbit costume has fallen from it, and the model has no account of that page. Another ending leaves her at the doors with the mask on the floor. That she was freed is the model's reading, and it holds it loosely.
- new: Most likely one woman: Vanessa, the Pizzaplex's security guard, acting under the control of whatever writes to her, and earlier the tester who is left a plush rabbit at the end of Help Wanted. One page of one ending shows a blonde woman in Vanessa's cap and uniform on the roof after the woman in the rabbit costume has fallen from it, and the model has no account of that page. Another ending leaves a blonde woman at the doors with the mask on the floor: that she is Vanessa, freed, is the model's reading, and it holds it loosely.
- why: `security-breach-rooftop-vanessa-alive` and `security-breach-ending-redemption` were re-worded after 05:45: each now shows "a blonde woman" and prints no name. Four sentences to three; "beta tester" is no longer in `hw-waiver-qa-team`.

**vanny 5.** `body` · RECORD
- old: The voice plays only when the player, a beta tester on "the Fazbear Entertainment Quality Assurance team" [[hw-waiver-qa-team]], wears the mask and holds the plush
- new: The voice plays only when the player, whom the game's waiver welcomes to "the Fazbear Entertainment Quality Assurance team" [[hw-waiver-qa-team]], wears the mask and holds the plush
- why: the record's claim no longer calls the player a beta tester; it gives the waiver's welcome.

**vanny 6.** `body` · RECORD
- old: and a search for the one word help [[sd-ness-compliance-searches]].
- new: and he asks whether she searched for the one word help [[sd-ness-compliance-searches]].
- why: the record: Luis asks "Did you search for 'help' by itself?"; it does not say that she did.

**vanny 7.** `body, figure caption` · RECORD
- old: After the credits of the rooftop ending: Vanessa in uniform on the burning roof, looking down.
- new: After the credits of the rooftop ending: a blonde woman in Vanessa's cap and uniform on the burning roof, looking down. The page prints no name.
- why: `security-breach-rooftop-vanessa-alive` as it now stands; a caption tells what is shown.

**vanny 8.** `body, compare, "One woman"` · RECORD
- old: the rabbit mask and bow tie lie on the floor and Vanessa waits at the doors [[security-breach-ending-redemption]].
- new: the rabbit mask and bow tie lie on the floor and a blonde woman, whom the model takes for Vanessa, waits at the doors [[security-breach-ending-redemption]].
- why: the record now says "a blonde woman waits at the doors"; the pages checked print no name.

**vanny 9.** `body, compare, "Two women"` · RECORD
- old: It loses, narrowly, to the mask on the floor with Vanessa at the doors
- new: It loses, narrowly, to the mask on the floor with a blonde woman at the doors
- why: the same record.

**vanny 10.** `body` · RECORD
- old: and what "it" is goes unsaid.
- new: and what she has made goes unsaid.
- why: quotecheck MISS: the tool cannot pair a two-letter quotation, and the line it comes from is the pull quote just above.

**vanny 11.** `body` · NAME
- old: On that email the model reads the rabbit in the code as reaching her through the VR game.
- new: On that email the model reads {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) as reaching her through the VR game.
- why: token, and R26: the chapter uses the descriptor several times and never gives its first-use form.

### `pizzaplex`

**pizzaplex 1.** `tension` · ROUND FOUR
- Replace the whole `tension` (135 words) with:
  > The game gives six endings and no ruling between them. One leaves Gregory asleep in a box in an alley with the rabbit-costumed woman's shadow over him [[security-breach-ending-alley]], which no later game undoes on screen. The comic pages draw every ending except the Princess Quest one [[ruin-gregory-comics-depict-endings]]; a headless Freddy that attacks Cassie below the hideout would fit the endings in which he is taken apart, but "PROTOTYPE" is printed under its foot [[ruin-prototype-freddy-headless]], so it is another machine. And the rooftop ending's last page shows a blonde woman in Vanessa's cap and uniform on the roof after the rabbit-costumed woman has fallen [[security-breach-rooftop-vanessa-alive]], which is not a branch that can be set aside. The model says only what RUIN shows with the mask off, a building wrecked along the route that goes underground, and holds loosely that Vanessa was freed.
- why: the same five sentences with two changes: the roof page is told as its record now has it (a blonde woman; no name is printed), and the headless Freddy is settled (round 4b, R19 (4): "PROTOTYPE" has been viewed on its foot, so it does not count against the underground route). `ruin-prototype-freddy-headless` may then leave `counterEvidence` for `further`.

**pizzaplex 2.** `body` · ROUND FOUR
- old: Its builders traced a high-voltage cable into the foundation
- new: A construction crew at the raceway traced a high-voltage cable into the foundation
- why: R20, round four: the raceway had been open, so these are not the Pizzaplex's builders (`security-breach-freddy-raceway-closed-abruptly`). `burntrap` has "a construction crew at a raceway".

**pizzaplex 3.** `body` · ROUND FOUR
- old: One body in RUIN points another way
- new: One body in RUIN seems to point another way
- why: round 4b, R19 (4): see the next item.

**pizzaplex 4.** `body` · ROUND FOUR
- old: As described, the body is marked "PROTOTYPE" [[ruin-prototype-freddy-headless]], a label not yet checked in play.
- new: But the word "PROTOTYPE" is printed under its foot [[ruin-prototype-freddy-headless]]: it is another machine, and does not count against the underground route.
- why: round 4b, R19 (4): the label was viewed at about 05:50 in the wiki's capture of the game, and the record now says so.

**pizzaplex 5.** `body` · RECORD
- old: and he reaches her from somewhere else: "I'm not at the Pizzaplex."
- new: and a second voice of his reaches her on her radio: "I'm not at the Pizzaplex."
- why: `ruin-real-gregory-not-at-pizzaplex` now: "a Gregory voice reaches Cassie on the Roxy-Talky"; the game does not show the speaker (`mimic` marks it: "which the model takes for the boy himself").

**pizzaplex 6.** `body, table "Six endings", row "The roof"` · RECORD
- old: yet a last page has Vanessa alive above
- new: yet a last page has a blonde woman in Vanessa's cap and uniform above
- why: `security-breach-rooftop-vanessa-alive` as re-worded after 05:45: the page prints no name.

**pizzaplex 7.** `body, table "Six endings", row "Princess Quest"` · RECORD
- old: the mask lies on the floor and Vanessa waits at the doors [[security-breach-ending-redemption]]
- new: the mask lies on the floor and a blonde woman waits at the doors [[security-breach-ending-redemption]]
- why: the record now says "a blonde woman"; the cell is under "What it shows", and the next cell already gives the model's reading for Vanessa.

**pizzaplex 8.** `body` · RECORD
- old: who wrecked the Bonnie found in RUIN, the game's sequel
- new: who wrecked the Bonnie that, by the wiki's account, lies broken in a hidden room in RUIN, the game's sequel
- why: `ruin-glamrock-bonnie-remains-hidden-room` now opens "By the wiki's account (room not viewed)".

**pizzaplex 9.** `body` · RECORD
- old: The patient is spoken to as a child, "something of a phenom", "like a hacker"
- new: The therapist tells the patient that the chair does not really fit, and calls the patient "something of a phenom", "like a hacker"
- why: `security-breach-cd46-treated-as-child-phenom` now gives what is said; that the client is spoken to as a child is its notes' reading. The next paragraph ("If the client is Gregory") carries the inference.

**pizzaplex 10.** `body, table "Six endings", row "The old elevator"` · NAME
- old: Under the building the boy beats a burnt rabbit among rooms of burners
- new: The boy beats {{burntrap}} (the game's files call it Burntrap, a working name that Scott has said now stands) among rooms of burners
- why: R26: "the burnt rabbit" is never bare, and the first-use form is given once in each chapter; this chapter has the descriptor (two paragraphs on) without it. The token prints "the burnt rabbit under the Pizzaplex".

**pizzaplex 11.** `body` · LINK
- old: is handed a mask that lays a second view over the building [[ruin-mask-bot-helpi-vanni]].
- new: is handed a mask that lays a second view over the building [[ruin-mask-bot-helpi-vanni]] (see ((mimic))).
- why: link: `mimic` tells RUIN's descent and the mask in full, and is in this chapter's `seeAlso` with no link in the text.

**Lengths and furniture (list only).**

- No chapter of yours is over 1,100 words by `prose-report.mts` (`digital` 1,097).
- Answers over three sentences, tightened above: `cover-story`, `digital`, `vanny`. Tensions over five, tightened above: `vanny` (five sentences, and long: it now names six counter records).
- Headings that name a topic and not a finding: `cover-story`: "The games inside the story", "What a staged level shows". `digital`: "What it did to the testers", "What it is". `vanny`: "Ness", "Vanessa", "Princess Quest". `pizzaplex`: "Gregory", "The night", "Six endings".

## For the owner

### A. Decisions or rulings wanted

As it stands at 09:20: points 1, 2, 4, 5 and 6 were settled by your message to the writers at 07:47, as their
notes report it, and the chapters and `theory.ts` follow it. Points 7, 8 and 9 were answered by round 4c, which
brought the rulings to the chapters' wording. Two things are open: point 3, and the last line of point 2 (R25 and
R26 still give the older first-use form for Burntrap). Point 10 is new, and is one phrase in `timeline.ts`.

**The owner's answers, delivered at 09:31.** They close points 1 to 6, and point 3 with them.

- A1: "five ghosts" and "he dies in the suit" stay flat outside `springtrap`, as round 4b has it.
- A2: the first-use form is "the burnt rabbit under the Pizzaplex (known as Burntrap, a working name that Scott
  has said now stands)", and "the game's files call it Burntrap" is never written. Every chapter has the form;
  `s-pizzaplex` now has it in brackets too.
- A3: the one sentence in `remnant` is the answer. Nothing more.
- A4: a chapter carries the mark of its main claim, and a further step in its answer carries its own marker in
  the sentence, so `two-machines` and `mimic` stay high. A beat is all telling and carries the mark of the
  weakest thing it tells, so `s-1979` and `s-mimic` stay medium. How to read now says this in two sentences.
- A5 and A6: as applied.

What is left open in this section: the wording of R25 and R26 for Burntrap's first use, which the answer A2 has
now overtaken, and point 10.

1. **"Five ghosts", flat.** This memo applies R12 as round 4b has it and as `BRIEF-final-pass.md` words it: outside
   `springtrap`, "five ghosts" and "he dies in the suit" may be said flat, within the four limits. Your message to me
   had "the five" or "the children" elsewhere. If you want the stricter form, these flat uses remain after the items
   above: the paragraph and one table row in `thesis`, one table row in `killer`, a heading and a sentence in
   `murders`, one clause in the tension of `november-1987`, one table row in `ucn`, and `springtrap` after its
   marker.
2. **Burntrap's first-use form.** R26 fixes it as "the game's files call it Burntrap". The record
   `security-breach-burntrap-name-not-in-game` now says "by the wiki's account the name 'Burntrap' comes from game
   files and a Steel Wool patch blog post". I put "by the wiki's account" in one item, for the chapter `burntrap`.
   Settled since: every chapter now prints "known as Burntrap, a working name that Scott has said now stands",
   cited to Scott's interview, and since 08:14 the beat `s-pizzaplex` does the same. R26's wording in
   `rulings-brief.md` still has the older form.
3. **One passage of the hidden tape, read twice.** `remnant` reads "a new way to desecrate" and "set to new purpose"
   as the firm's use of the dead (R15); `springtrap` reads the lines that follow, "he set some kind of trap ... He
   overpowered them again", as the night the four mascots were taken apart (R12: "can be read as"). The thesis
   tells the first before the years of the night guards and the second after them. On the tape the two run on
   without a break, and no ruling says whether they are one act or two. I have given `remnant` one sentence that
   says the tape does not say. The reader's memo raises the same point (possible error 3).
4. **Chapter marks against beat marks.** `two-machines` and `mimic` are marked high. Their answers each carry a
   "most likely" (the day and the rage; "most likely his second, violent machine itself"), and the beats that tell
   the same things, `s-1979` and `s-mimic`, came down to medium under your rule that a mark is that of the weakest
   thing told. If the rule holds for chapters, both become medium. I changed neither.
5. **FNaF1's date.** I have applied R24 (6) as: the pill's label is "a November after 1987" in `fnaf1-restaurant`
   and `timeline-math`, and "not before November 1988" stays in words in both, because both show the arithmetic.
   `wordcheck.py` will go on printing "1988" for those two places.
6. **The woman on the roof.** The records editor re-worded `security-breach-rooftop-vanessa-alive` and
   `security-breach-ending-redemption` after 05:45: each now shows "a blonde woman" and prints no name. The items
   make `vanny` and `pizzaplex` say "a blonde woman in Vanessa's cap and uniform" and give "Vanessa" as the model's
   reading. The roof page is the model's chief counter-record, and it now reads a little weaker. `open` already has
   the new wording, and beats `s-follower` and `s-pizzaplex` now have it. Round 4c has since taken this into R19:
   the page with the mask on the floor is no support for one woman, and "Vanny is Vanessa" is medium.
7. **"Newest building" is in the rulings too.** `model.md` section 1 has it in the thesis paragraph and in two rows
   of the clause table, and R33 has it once ("his remains stand under the newest building"). The chapter `thesis`
   prints that paragraph, so `thesis` 7 changes the adjudicator's words. If the paragraph must stay as ruled, the
   correction is the adjudicator's to make first; the replacement I gave is "Under the company's Mega Pizzaplex".
   Answered by round 4c: the paragraph, its table and R33 now have it.
8. **"Never says "Hell"", flat, in the rulings.** R16's wording note has "UCN never says "Hell"". The Faith page,
   the chapters (`ucn` 6 and `faith` 4, applied in `c1bd92c`) and now `community.ts` (`71ab718`) say "in the
   archive's records". Answered by round 4c: R16's note now has those words.
9. **R19 still forbids citing the cast credits.** Its wording note says "Security Breach's cast credits are not in
   the archive: do not cite them". The record landed at 08:10 (`af63bef`), and `vanny` now cites it in
   `counterEvidence` and in its tension, as you asked. The ruling's line is out of date, and so is R26's first-use
   form for Burntrap (point 2). Answered by round 4c for the credits: R19 (5) now counts the list against one
   woman, at support weight, and `vanny` has the adjudicator's sentence. The first-use form for Burntrap in R25
   and R26 is unchanged.
10. **"Three games later" is still in the timeline.** `timeline.ts`, `t-dismantle-and-death`: "three games later
    the credits give the salvaged rabbit's voice that name". The count passes over FNaF World, which `games` lists
    between (the reader's possible error 11). The beat and `killer` no longer have it. Replacement: "Pizzeria
    Simulator's credits later give the salvaged rabbit's voice that name".

### B. `theory.ts`: committed at 08:57 as `d059017`; three lines changed at 09:42, not committed

**After your answers (09:31).** Three lines of the file now differ from `d059017`, and wait for your commit.
How to read, the paragraph on the three marks, has your rule in two sentences: "A chapter carries the mark of
its main claim, and a further step in its answer carries its own marker in the sentence. A beat is all telling,
and carries the mark of the weakest thing it tells." `s-pizzaplex` has the first-use form in brackets, as you
give it and as every chapter prints it: "This is {{burntrap}} (known as Burntrap, a working name that Scott has
said now stands), and the game never says what it is." `s-rabbit-in-code` takes the same brackets for "(known
as Glitchtrap, Scott's working name for it)". No word of either beat changed. The validator prints OK with no
warning, `npx tsc -b` exits 0, and the quote check prints the same three lines for the storyline as before.

**The seven rows of this section as first published (07:14)**, which your answer B means, were all in
`d059017`: 'A letter signed "WA" says' (`s-1979`); "person-shaped" (`s-rabbit-in-code`); "a blonde woman in
Vanessa's cap and uniform" (`s-follower`); "a blonde woman waits at the doors" (`s-pizzaplex`); "a second
Gregory voice" (`s-mimic`); "Pizzeria Simulator's credits later give the rabbit's voice a name"
(`s-springlock`); and the two records gone from `outsideStory`, which `cover-story` and `remnant` now file.
`$NOTES/revise-lead.md`, "After the owner's answers", has the rows side by side.

The rest of this section describes the file as committed.

Five sets of changes separate the file from `0b55708`: the four corrections from the timeline's owner; the
wordings that records re-worded after `0b55708` no longer carried; section 3 of the reader's memo (how to read,
two parts, the beats), under your five decisions of 08:48; the writers' last points on the beats (`final-2.md`,
`final-5.md`, `final-6.md`); and the thesis and one kicker, after the home page's check. `npx tsx
scripts/validate.ts` prints OK with no warning (70 records outside the story) and `npx tsc -b` exits 0. No beat is
over 130 words by `prose-report.mts`'s count; `s-two-machines`, `s-trap-fire` and `s-mimic` are at 130. As
printed, with the title of a linked chapter in full, `s-five` has 131. The pipeline was run again at 09:10 and
writes the committed file byte for byte. `$NOTES/revise-lead.md`, "Third pass", has every change with its reason,
your five decisions and how each is met, and every note of the reader's section 3 as taken, taken in another
form, or declined.

| Where | Change | Why |
|---|---|---|
| thesis | "under its Mega Pizzaplex, a machine built to imitate" (was "under its newest building") | no record calls the Pizzaplex the company's newest building (`factcheck-9.md`, home 7); the home page's cards say "the Mega Pizzaplex" |
| part `underground` | kicker "The buried pizzeria" (was "The newest building") | the same; `security-breach-underground-pizza-place` has the ruined pizzeria below the Pizzaplex |
| how to read | The reader's four paragraphs, in the reader's order: the plain statement comes before the three markers; "leans" is defined; the later-game rule is stated; the finer grades are named; "by convention" is explained; the four tags are listed; links to `canon-rules` and `games`. Four departures from the reader's words: the links carry labels; "governs the point in dispute"; the rule for marks keeps its two halves; "the rabbits", with no number | your decision 1; the reader's 3.1 and 2.5. The departures: a bare link prints "Ground rules says what that costs"; `canon-rules` has "governs the disputed point"; your rule that a beat takes the mark of the weakest thing it tells; the table has no count (the reader's possible error 10) |
| part `apparatus` | title "How this was built"; the blurb no longer opens with those words | your decision 2; the reader's 3.2 |
| part `machines` | the reader's blurb, word for word | your decision 2; the reader's 3.2 |
| the beats | each names its game once (`s-birthday` excepted: it is kept as committed and follows a beat that opens "In FNaF4"); the four undated beats, `s-child-outside`, `s-afton-robotics`, `s-michael` and `s-rabbit-in-code`, carry one label, "Undated. Placed here by convention."; six turned sentences are written forwards | your decision 3; the reader's 3.3 and decision G |
| `s-costume-company` | opens "Secret of the Mimic goes back to a workshop that builds springlock suits: Murray's Costume Manor, a family firm under contract to Fazbear Entertainment."; the label is "Before a night in 1979", also on `s-two-machines`; the poster takes "(read from an image)"; "FNaF3's training tapes" | your decision 3: the first sentence gives a fan the word he knows; R2 as corrected ("Murray's workshop makes springlock suits (stated)"); the reader's beat 1 |
| `s-two-machines` | "Fiona is gone"; "He shows the boy an endoskeleton, M1"; "In other recordings a voice speaks to him as Fiona. No recording in Secret of the Mimic says outright what became of her or David."; Edwin's "I let a machine raise my kid. You're not real." | `secret-of-the-mimic-log-death` has "his mother is gone"; no record orders M1 against that (`final-2.md`, item 3); the three logs now say "a voice speaking as Fiona" and name no machine |
| `s-1979` | 'A letter signed "WA" says "we now technically own the land"'; "a Dispatch voice tells him"; the Dispatch voice inside "turns out to be a cabinet computer that, once found, speaks as Fiona, as the voice in Edwin's recordings did"; "Secret of the Mimic gives the night three endings, and the model does not choose." | the record names no reader; where the impersonation begins is not stated (`final-2.md`, item 4); the reader's beat 3, in words the records carry |
| `s-house` | "A plush of Fredbear, the yellow bear on its stage"; ends "On that reading the older brother is Michael."; cites `fnaf4-bullies-in-masks` | the reader's beat 4; `afton-house` has the sentence |
| `s-birthday` | unchanged from `0b55708` | your decision 3. The reader's "The plush fades, and then the boy." is not taken |
| `s-child-outside` | "the Cassette Man, the voice on Pizzeria Simulator's tapes"; "that voice says" | the reader's beat 6 and the gloss of 2.3 |
| `s-five` | `when` is the pill "A June 26th between 1980 and 1986", kind `estimated`; the title stays "June 26th"; "So reads a clipping in the first game."; "the old restaurant, the one before the 1987 restaurant"; "a grinning yellow figure in costume" | the timeline owner's item 4; the reader's beat 7; `ffps-fruity-maze-follow-me` |
| `s-children-stay`, `s-afton-robotics` | the reader's sentences, as written | the reader's beats 8 and 9 |
| `s-november-1987` | "Phone Guy, the voice on the guard's phone, says that someone ..." | the reader's beat 10 |
| `s-last-freddys` | "Phone Guy's recorded voice trains him, and breaks off on the fourth night in banging, music and a scream (as described)"; "this restaurant's own notice" | the reader's beat 11; `fnaf1-call4-phone-guy-attacked`; decision D |
| `s-springlock` | opens "In the minigames between FNaF3's nights"; "Pizzeria Simulator's credits later give the rabbit's voice a name" | the reader's beat 12; your decision 4 (FNaF World is a release between) |
| `s-michael` | as committed but for one sentence: "The machines of Sister Location scoop him hollow, and a dark shape at a mirror opens glowing purple eyes." | your decision 3; `sl-real-ending-scooped-mirror`. The reader's opener "In Sister Location Afton's son Michael goes down" is not taken |
| `s-fazbears-fright` | pill "Thirty years later": kind `printed`, with the basis of `dates.ts` in words that carry no apostrophe, and the two records the chapter's pill cites; "Springtrap in FNaF3's menu"; "The model tells that party as the release they were owed, and the games leave open which ending happened." | the timeline owner's item 1; the reader's beat 14 |
| `s-trap-fire` | opens "In Pizzeria Simulator the Cassette Man has a plan"; "The building burns, and the game does not show who lights it." | the reader's beat 15 |
| `s-rabbit-in-code` | the order is kept, and the second scan reads "A second scan is told here by convention: in Special Delivery's emails it sets "a virus" loose"; "Help Wanted" is named; "person-shaped" | the timeline owner's item 2; the reader's beat 17; `hw-rabbit-figure-appearance` |
| `s-follower` | opens "The tapes say how to kill the rabbit in the code, and one tester tries."; "In Help Wanted's Halloween add-on, a player in a rabbit mask ..."; "the security guard of Security Breach's Mega Pizzaplex"; "Its last comic page shows a blonde woman in Vanessa's cap and uniform on the roof after Vanny has fallen from it" | the reader's beat 18, cut to fit 130 words; `hw-tape-16`; `security-breach-rooftop-vanessa-alive` |
| `s-pizzaplex` | "Freddy, the bear hiding him, scans him and finds no guest profile"; "Vanny walks its halls"; "the three Princess Quest arcade games are finished, and a blonde woman waits at the doors, the rabbit mask on the floor"; "known as Burntrap, a working name that Scott has said now stands"; "The sequel, RUIN, most likely shows that ending's aftermath." | the timeline owner's item 3; the reader's beat 19; `security-breach-ending-redemption`; the first-use form the chapters now print |
| `s-mimic` | as committed but for one sentence: "In one RUIN ending a second Gregory voice tells her" | your decision 3; `ruin-gregory-mxes-explanation`. The reader's opener "In RUIN a message in Gregory's voice says" is not taken |
| `outsideStory` | `ffps-insanity-egg-baby-trigger` and `scott-silver-parasol-website` removed: `remnant` and `cover-story` now file them. 70 records | the validator's warning |

Not taken from the reader's section 3, each for a stated reason:

- beats 5, 13 and 20: "The plush fades, and then the boy." and the two openers that name the game (your decision
  3: those three stay as they were unless a record forces a change; in 13 and 20 the game is named inside the one
  sentence a record had already changed);
- beat 17: the second label, "Undated. Placed after the fire by convention." (your decision 3: one label);
- beat 19: the sentence that sorts three rabbits (no room under 130 words; and `burntrap`, which owns the sorting,
  now counts four, with the figure from the M.X.E.S. cabinet);
- beat 3, "as the babysitter did", and beat 2, "In Fiona's voice the machine presses his father" (the logs name no
  machine);
- beat 6, "a man the games name only as the Cassette Man" (no game names him; the name is the archive's, and the
  gloss of 2.3 is used);
- beat 18, "the company's newest building" (no record has it) and "One ending of Security Breach, the game set
  there" (length; the game is named in the sentence before).

The reader's last line of 3.1 is settled by your decision 1: the page prints the first three paragraphs of how to
read before the storyline and the fourth at the head of the parts. One consequence: the two tags that beats use,
"(read from an image)" in `s-costume-company` and "(as described)" in `s-last-freddys`, are defined in the fourth
paragraph, so a visitor meets them one screen before their definition. Both read as plain English.

The quote check's three lines on the storyline need nothing: two are in `s-1979`, where the tool cannot pair the
two-letter quotation "WA", and one is a phrase held in the `quote` of the next record cited.

### C. For the records editor

| Record | What is missing or odd | Which chapter leans on it |
|---|---|---|
| `security-breach-credits-vanessa-vanny-two-parts` | not yet in `sb-mimic.json` at 07:00 | `vanny` (two items) |
| `sl-intro-mr-afton-board` | the answering man's line ("She can dance, she can sing ... She can even dispense ice cream.") is only in `notes` | `funtimes`, `partners` |
| `scottgames-site-sl-cancelled-teaser` | "Due to leaks." is in the claim and not in `quote` | `funtimes` |
| `sl-extras-map-entertainment-and-rental` | "Circus Baby's Entertainment & Rental" and "Private" are in the claim; `quote` has only the copyright line | `funtimes`, `afton-house` |
| `sl-blueprint-screens` | the footer "Afton Robotics, LLC" is only in `notes` | `funtimes` (an item moves the citation) |
| `sl-golden-freddy-cutscene-springtrap` | no `quote`; the sign's letters are in the claim | `michael` |
| `fnaf2-call3-rumors` | the `quote` no longer holds the word "rumors" | `november-1987` (answer) |
| `ruin-fake-gregory-signal-jammer` | `quote` has "That rabbit thing" with a capital; Cassie's "that rabbit thing" is only in `notes` | `canon-rules`, R26 |
| `ucn-roster-two-forms-at-once` | no `quote`; "Afton" is the roster's printed label | `ucn` |
| `ffps-completion-tutorial-atonement` | a typographic apostrophe in "wasn’t" | `ffps` quotes it with a straight one |
| `ffps-completion-fire` | the claim no longer says which machines burn; its notes, from the wiki, say all but Lefty | `ffps` (two items; with the machines named, the second is not needed) |
| `hw2-mimic-teaser-mxes-ending` | the claim says "a machine with a keypad" and no longer names the cabinet | `mimic` (an item adds a citation) |
| `sl-private-room-keypad-1983` | "views of three rooms": the three monitor records give a bedroom, the bed in it and a hallway | `afton-house` |
| `people.ts` | no entry for the mass of parts, so it cannot be a token | `burntrap`, `pizzaplex` |

### D. How item 5 was done, and what it can miss

At 05:41 the records had 208 changed titles, claims or quotes against `bef1e58`, in 343 pairs of chapter and
record. Six readers each took one writer's pairs, with the old and new text side by side, and flagged 64 sentences;
I checked each flag against the record, kept 50, most of them re-worded, and dropped 14 (a detail carried by
another record in the same sentence, a reading already marked, or a flat "ghosts" that R12 now allows). By 06:45 another 158 records had changed,
nearly all in `sb-mimic.json`. For those I re-read every sentence that used a word its record had lost (35 of 215
pairs) and made items of 18. A sentence that leans on a dropped wording without sharing a word with it would be
missed by that second pass. The writers' run of `changed-records.py` covers it.
