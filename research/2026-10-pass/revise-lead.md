# Revision notes, lead: the storyline pass on `src/data/theory.ts`

Pass of 3 October 2026, 03:29 to 05:20, on `theoryIntro`, `theoryParts`, the twenty beats of `storyline` and
`outsideStory`. Read against `factcheck-1.md` (sections 8, 9, 10 and the ten most serious), the beat sections of
`factcheck-2.md` to `factcheck-6.md`, "For the lead" in `revise-1.md` to `revise-6.md`, the layer editors' five
points, and the fourth round of rulings (`rulings-brief.md` as it stood at 04:03, and `round4.md`).
`revise-1.md` appeared at 05:14, after my first report; it is answered under "Addition of 05:05" below.

Only `src/data/theory.ts` was edited in the repo. Nothing was written under `src/data/chapters/`, and nothing is
committed.

## Checks

- `npx tsx scripts/validate.ts`: OK, exit 0, no warnings, on every run up to 04:58. Coverage 1044/1044
  accounted: cited inline 657, counter-evidence 111, filed as further 343, outside the story 72; unaccounted 0.
  Two warnings stood before the pass, and five more appeared during it as writer 1 took records up. All seven
  records are off the lists.
- **From 04:59 the validator exits 1, on one error that is not in `theory.ts`**: `person missing-children theory:
  unknown entity caught-man`. It is in `people.ts` as the layer editor has it in the working tree (line 88 links
  `{{caught-man}}`, and no such entity exists yet). I checked on a scratch copy outside the repo: with the
  committed `people.ts` and everything else as in the working tree, my `theory.ts` included, the validator is OK
  with no warnings. It still stood at 05:02 and had gone by 05:06.
- **Last runs, 05:19**: validator OK, exit 0, with one warning that belongs to the people and evidence layers
  ("entities used on evidence without a page"); `tsc -b` exit 0. None of the 72 listed records is used by a
  chapter.
- `npx tsc -b`: exit 0, no output.
- `git diff --stat` at 05:00 showed six files: `theory.ts` (mine); `chapters/apparatus.ts` and
  `chapters/story.ts` (writer 1, still at work); `timeline.ts`, `people.ts` and `evidence/fnaf123.json` (the layer
  editors, changed between 04:47 and 04:59); by 05:19 the layer editors had seven more data files open. My
  generator writes one repo file, `theory.ts`, and refuses any other, and the other files' times never match its
  runs. After those three changed I checked again: every
  quotation in the beats is still in its record, the two entity links still print their descriptors, and every
  beat's era still agrees with `timeline.ts`.
- Every beat's text in `theory.ts` was compared, by script, with the source it was generated from: 20 of 20
  identical.
- Every phrase in quotation marks in the twenty beats was checked by script against the `quote` field of a record
  cited in the same beat. All are there except two labels printed on a blueprint, "Parental Tracking" and
  "Storage Tank", which are in the `title` and `claim` of `sl-blueprint-funtime-freddy` (its `quote` holds the
  third label). `funtimes` quotes them the same way.
- No beat is over 130 words (the longest is 128). No sentence in a beat is over 32 words.
- Every record a beat cites, in its text or in a date pill, was opened again after the records were corrected:
  136 in all. None of them is graded `implied`. The 31 that the data layer re-worded after 05:00 were read a
  third time (see the addition below).

## Additions after the first report (05:05 to 05:20)

The message of 05:05 named two points from writer 5's revision. Both were already in the pass when it arrived,
and were checked again at 05:07.

- `scott-2014-faith-and-work` left `outsideStory` when `faith` took it up (it is one of the seven records listed
  below). `theory.ts` no longer names it. The validator prints no "listed in outsideStory but also used by a
  chapter" warning. A second check, by script, compared the 72 listed ids with every id named in any chapter file,
  as a citation or in `counterEvidence`, `further` or a block: none of the 72 is named.
- `revise-5.md`, "For the lead" 3, all six points: `s-fazbears-fright` has "hear of an extra room that was boarded
  up", "with what looks like a body inside" and "runs through a hidden party at which six masked children vanish";
  `s-trap-fire` has "sets his trap in a new pizzeria that a franchisee runs"; `s-night-without-end` has "The
  voices promise a night with no morning", and cites `ucn-roster-includes-ffps-four` for the roster and
  `ucn-nightmare-freddy-cant-perish` for "can't perish" where it had one aggregate record for both.
- The validator was OK again at 05:06 (exit 0): the `caught-man` error in the people layer's file had gone. Its one
  remaining warning is that layer's ("entities used on evidence without a page").

Two more beats changed after 05:05, because the data layer re-worded 31 of the records the beats cite (in
`evidence/fnaf123.json` and `evidence/fnaf4-sl.json`, uncommitted at the time). I read all 31 again. Twenty-nine
still carry their sentence. Two do not:

- `s-springlock`: "the ghosts of five children corner him in the hidden room" is now "five grey, crying children
  corner him in a room the machines could not enter". `fnaf3-n5-ghosts-safe-room` and `fnaf3-n5-springlock-death`
  no longer say "ghost": they have "grey child figures", and a room that "is not labeled 'safe room' in-game".
  That the figures are the five's ghosts is the model's reading, and the chapter keeps the word.
- `s-house`: "in a child's bedroom" is now "in a bedroom". `fnaf4-bedroom-setting` is now titled "a bedroom", and
  its notes say that the game does not state who is in it.

The validator and `tsc -b` were run again after that edit (05:16): OK, exit 0; exit 0.

**`revise-1.md`** (written 05:14 to 05:25) has three items that touch `theory.ts`.

- Item 3, the five records that must stay off the lists: all five were already off (they are among the seven).
- Item 2, old answers of `thesis`, `games`, `open` and `canon-rules`: `theoryIntro` quotes none of them. The one
  point they share with it, that the copies do not all come "after", was mended in the thesis under 8.7.
- Item 1, "five ghosts" and "he dies": applied in part. The beat `s-springlock` now tells the scene as the edited
  records do, in the same words `killer` uses ("five grey, crying children"; the suit "snaps shut on him, and he
  slumps to the floor"). Two places keep "dies": the thesis ("He dies in a rabbit suit") and the beat's title
  ("He dies in the suit", which is also the chapter's title). The model's clause table rates that event high, and
  the rulings are my fixed input, so I have not marked it. See "Not settled", 4.

If a later chapter edit takes up another listed record, the fix is two steps in the pipeline
(`files/theory-author/`): set the record's entry in `assign.json` to the chapter's id, then `python3 gen.py
--index`. A record a chapter cites or files is never outside the story.

## Findings: applied and rejected

Counted as numbered in the reports. Several are the same sentence seen by two checkers.

| Source | Findings | Applied | Applied in part | Rejected | Left for a later pass |
|---|---|---|---|---|---|
| `factcheck-1`, 8 (intro and parts) | 8 | 7 | | 1 | |
| `factcheck-1`, 9 (storyline) | 22 | 21 | 1 | | |
| `factcheck-1`, 10 (`outsideStory`) | 8 | 6 | 1 | | 1 |
| `factcheck-2`, beats | 12 | 10 | 2 | | |
| `factcheck-3`, beats | 11 | 11 | | | |
| `factcheck-4`, beats and the blurb | 10 | 10 | | | |
| `factcheck-5`, beats | 6 | 6 | | | |
| `factcheck-6`, beats | 7 | 7 | | | |
| **Fact-checks** | **84** | **78** | **4** | **1** | **1** |
| Writers, "For the lead" (items on `theory.ts`) | 12 | 11 | 1 | | |
| Layer editors | 5 | 5 | | | |
| **All** | **101** | **94** | **5** | **1** | **1** |

### Rejected (1)

- **`factcheck-1` 8.8**: `howToRead` names parts of the interface ("a small number in the text", "what pushes
  back") that the interface does not have. Rejected: the checker read the old interface in this worktree. The
  rebuilt one, read in the `integ` worktree, has both headings as written (`src/pages/theory/ChapterView.tsx`,
  "What pushes back" and "What would change this") and numbers its citations. No record is involved. The
  paragraph is unchanged.

### Applied in part (5)

- **`factcheck-1` 9.22**: two to five sentences in a beat, and the working names. The names are in (below). The
  sentence count is not met, and is further off than before: 15 beats have six sentences or more, and
  `s-two-machines` has nine. The reason is this pass's own rule. It sets the limit in words and asks for short
  sentences, and several corrections split a long sentence in two. Getting to five sentences by joining them
  would rebuild the sentences the same finding objects to ("two clauses and a quotation"). Getting there by
  cutting would take out about a quarter of the storyline, which is the owner's decision and not a correction.
  No record is involved. See "Not settled".
- **`factcheck-2` beats 9**: the marks are applied and the rule is now printed (below). Its last sentence, on
  the sentence count, stands as 9.22 does.
- **`factcheck-2` beats 12** (`s-mimic`): "In one ending" is in, so the beat now says that Gregory's words belong
  to a branch (`ruin-gregory-mxes-explanation`). The proposed closing clause, "RUIN ends three ways, and the model
  does not choose", is not: the ten words went to the mask "left behind by some Faz-Technician"
  (`ruin-security-mask-left-by-faz-technician`), which is the storyline's only trace of Help Wanted 2.
- **`factcheck-1` 10.4**: `fnaf4-night8-no-story-text` is off the list. `ffps-insanity-egg-baby-trigger` stays
  on it: no chapter cites or files it, a record cannot leave the list without a home, and this pass may not write
  to a chapter. Writer 3 keeps it out by decision (`revise-3.md`, "For the lead" 7). My view for the editing pass
  is the checker's: by the model's own rule a scripted hidden interaction with a result of its own is a scene, so
  it belongs in `remnant`'s `further`, as a mechanic.

- **`revise-1.md`, "For the lead" 1** ("five ghosts", "he dies"): the beat's text follows the edited records; the
  thesis and the beat's title keep "dies", as the model's clause table allows. See the additions above, and "Not
  settled", 4.

### Left for a later pass (1)

- **`factcheck-1` 10.3**: `scott-silver-parasol-website` is a duplicate of `scott-2019-silver-parasol-logo`, which
  `cover-story` files. It needs one line in `afterimage.ts`, or the duplicate deleted from the evidence. Neither is
  an edit to `theory.ts`.

### Applied in a different form from the proposed sentence

Each removes the same problem. The record or rule is named.

- **9.4, `s-1979`**: the mark comes down to medium and the reading stays ("most likely William Afton", R2 (4)).
  **`s-afton-robotics`**: the reading moves out and the mark stays (R15: low-medium).
- **9.8 and `factcheck-2` 10**: the second message is cut, not readdressed. The beat now tells one letter, signed
  "WA" as printed (`secret-of-the-mimic-mail-confidential-wa`). The message signed "W.A." is in `partners`.
- **9.10 and `factcheck-3` `s-house` 2 and 3**: the "illusion" clause is cut and not reworded, and the nights are
  played "in a bedroom", with no claim that it is a child's or his (`ucn-nightmare-fredbear-lines`,
  `fnaf4-bedroom-setting`). Both readings are argued in `nightmares`.
- **9.12 and `factcheck-3` `s-afton-robotics` 1**: the sheet's heading is no longer quoted at all. The beat says
  only that the word Remnant appears on another of the firm's sheets (`ffps-scup-blueprint`).
- **9.13 and `factcheck-4` 9**: no "most likely". The beat tells the tape ("such rooms were being walled up") and
  the gap ("no game shows how he got into this one") and does not order them (`fnaf3-tape6-safe-rooms-sealed`).
- **9.17 and `factcheck-6` 4**: "walks its halls", the wording of `pizzaplex`, not "stalked by". In the same
  sentence "is shut inside" became "hides inside it": I found no record that the building is shut on him, and
  `security-breach-intro-not-in-database` has him hiding.
- **9.18 and `factcheck-2` 1**: the costume clause is cut. Told with its source ("which the wiki matches") it is a
  hedge, and the tie the beat keeps is the one read from a screenshot: the letters M.X.E.S. spelled out on Murray's
  terminal (`secret-of-the-mimic-mxes-acronym-on-screen`). The costumes are in `mimic`
  (`ruin-mimic-lair-mcm-mascot-suits`).
- **9.20, `factcheck-4` 3**: the reported fifth body is left out of the beat. It is in `golden`
  (`fnaf2-give-gifts-give-life`).
- **`factcheck-2` 5**: the prototypes sentence is cut. Their names are file labels
  (`secret-of-the-mimic-rnd-proto-pizzeria`).
- **`factcheck-2` 8**: "a cabinet computer that, once found, speaks in Fiona's voice". No record says that the
  cabinet is M1 (`secret-of-the-mimic-f10n4-reveal`).
- **`factcheck-3` `s-trap-fire` 3 and `factcheck-5` 3**: round four's wording, "sets his trap in a new pizzeria
  that a franchisee runs" (R28; `ffps-tutorial-franchisee`).
- **9.2, `factcheck-4` 5 and 6** (`s-last-freddys`): one marker carries two readings (the old building; the
  clipping as its own news). The third, who the caller is, is cut from the beat and left to `fnaf1-restaurant`.
- **9.11 and `factcheck-4` 1** (`s-child-outside`): the sentence about the wound moved out of the text into the
  basis of the `when` pill, as the model's reading (`ffps-insanity-wound-first-inflicted`). The convention is in
  the pill's label.
- **10.2 and 10.7**: while the pass ran, `edges` filed `fw-8bit-fredbear-puppet-master` and cited
  `into-the-pit-secret-minigames-other-stories`. Both are off the lists.
- **10.6**: the test in the reason is reworded ("in-world text that bears on the story") and the four teasers are
  named for what they are, taglines in a character's voice. The other fix, filing the four as colour under
  `funtimes` and `nightmares`, needs chapter edits and is open to the editor.

### Corrected without a finding

Found on re-reading the records, or required by round four.

- `s-costume-company`: "his wife Fiona" is "Fiona Murray". No record says wife (`secret-of-the-mimic-log-death`;
  round four, R21).
- `s-trap-fire`: "the killer's old friend" is gone from the opening. The friend is not named in the record, so the
  beat quotes the line and lets it stand: "don't keep the Devil waiting, old friend."
  (`ffps-completion-old-friend-hell`). The daughter is named Elizabeth, as the game names her.
- `s-trap-fire` and `s-night-without-end`, `when`: "most likely" added. That Pizzeria Simulator follows the first
  fire, and that Ultimate Custom Night follows the second, are both medium-high (order of events, steps 20 and 21).
  The second beat no longer states the order in its text.
- `s-pizzaplex`, `when`: now a pill, "After the fire, most likely", whose basis says the order rests on a reading
  (the ruin as Pizzeria Simulator's building, medium).
- `s-fazbears-fright`: "A local amusement park builds" (`fnaf3-coming-soon-newspaper`; round four, R31).
- `s-birthday`: "no game shows him again" is "after that no record places him" (R6's own words).
- `s-follower`: "a caller nobody else can hear" is "someone unheard"; "someone in a rabbit mask" is "the player"
  (`codb-mask-plush-voice`).
- `s-rabbit-in-code`: "Which board the figure came from" is "which machine the boards came from", which is what
  the record says (`sd-which-board-unknown`). The lawyers' halt is cut for length; `cover-story` cites it.
- `s-house` and `s-birthday`, pill bases: "The title card dates the show" is "under the title of a television
  show" (`fnaf4-fredbear-and-friends-1983`; the fault `factcheck-3` found in `bite` 5).

## Marks and eras

The rule is now written where the reader can see it, in `howToRead`: "A chapter takes the mark of the weakest
claim its answer depends on, and a beat the mark of the weakest thing it tells." Medium-high shows as medium, so a
beat marked high holds no "most likely". A placement by convention is said in `when` and does not lower a mark;
`howToRead` says that too. The comment above `storyline` in `theory.ts` and decision 6 in `telling.md` say the
same.

**Marks changed (2).**

- `s-1979`: high to **medium**. It tells that the letter's writer is most likely William Afton, writing for
  Fazbear Entertainment (medium, and medium-high).
- `s-mimic`: high to **medium**. It tells that the endoskeleton is most likely the second machine of 1979 itself
  (medium-high). No checker asked for this one; the rule does.

**Marks kept by moving a reading out to its chapter (4).**

- `s-costume-company` stays high: "most likely Fredbear's Family Diner" is in `springlocks`. The beat says that the
  note names no diner and that a poster in the game's textures has the name.
- `s-two-machines` stays high: that David died, that M2 sounded like him and that the rage it copies is Murray's
  are in `two-machines`. The beat gives the recorded lines and says that no recording says what became of David.
- `s-afton-robotics` stays high: the "new way to desecrate" reading (low-medium) is in `remnant`.
- `s-pizzaplex` stays medium: that Vanessa was freed (low-medium) is in `vanny` and `pizzaplex`; what the burnt
  rabbit is (low-medium) is in `burntrap`. Its one marker is now on the sequel's building (medium).

**Era changed (1).** `s-michael`: `funtime` to **`aftermath`**, where `timeline.ts` keeps his week
(`t-sister-location`, `t-michael-rises`). All twenty were checked against `timeline.ts` at 03:40 and again at 04:50,
after the layer editor's changes: the other nineteen agree.

**Markers.** No beat has more than one in its text. Fourteen beats have one "most likely", "the model reads" or
"the model tells"; `s-springlock` and `s-night-without-end` carry theirs in `when` only (the second names two
readings in its text and picks neither); the four beats marked high have none. The storyline no longer uses
"may be".

## The twenty beats as they stand

Words are counted as the page prints the beat: citations out, a link at its printed length. Sentences count a
quotation as part of its sentence. "Longest sentence" is the prose report's figure.

| # | Beat | Mark | Era | Words before | Words now | Sentences | Longest sentence |
|---|---|---|---|---|---|---|---|
| 1 | `s-costume-company` | high | founding | 117 | 102 | 6 | 23 |
| 2 | `s-two-machines` | high | founding | 80 | 112 | 9 | 19 |
| 3 | `s-1979` | high to **medium** | founding | 113 | 116 | 7 | 28 |
| 4 | `s-house` | medium | diner | 113 | 112 | 6 | 23 |
| 5 | `s-birthday` | medium | diner | 78 | 88 | 7 | 23 |
| 6 | `s-child-outside` | medium | murders | 107 | 101 | 5 | 29 |
| 7 | `s-five` | medium | murders | 111 | 117 | 7 | 26 |
| 8 | `s-children-stay` | medium | murders | 107 | 104 | 5 | 28 |
| 9 | `s-afton-robotics` | high | funtime | 107 | 100 | 6 | 22 |
| 10 | `s-november-1987` | medium | pizzeria | 103 | 106 | 6 | 27 |
| 11 | `s-last-freddys` | medium | pizzeria | 79 | 106 | 5 | 27 |
| 12 | `s-springlock` | medium | pizzeria | 85 | 91 | 5 | 24 |
| 13 | `s-michael` | high | funtime to **aftermath** | 68 | 68 | 5 | 18 |
| 14 | `s-fazbears-fright` | medium | aftermath | 101 | 118 | 7 | 28 |
| 15 | `s-trap-fire` | medium | aftermath | 119 | 126 | 7 | 28 |
| 16 | `s-night-without-end` | medium | aftermath | 117 | 126 | 7 | 23 |
| 17 | `s-rabbit-in-code` | medium | digital | 120 | 128 | 8 | 29 |
| 18 | `s-follower` | medium | digital | 114 | 115 | 6 | 30 |
| 19 | `s-pizzaplex` | medium | pizzaplex | 156 | 128 | 6 | 32 |
| 20 | `s-mimic` | high to **medium** | pizzaplex | 143 | 125 | 7 | 27 |
| | Total | | | 2,138 | 2,189 | | |

The prose report's own count of the storyline is 2,180 words, and its longest beat is 128.

Two beats grew by more than twenty words. `s-two-machines` (80 to 112) now tells the boy's death the way the
records do, through two recorded lines, where it used to state it. `s-last-freddys` (79 to 106) now quotes the
promise to reopen and gives its two readings one sentence of their own. `s-pizzaplex` and `s-mimic`, the two that
were over the limit, are 28 and 18 words shorter.

**Working names**, each given once and as a name: Springtrap ("in the game's menu", `fnaf3-springtrap-name`),
Glitchtrap ("Scott's working name for it"), Burntrap ("the game's files call it",
`security-breach-burntrap-name-not-in-game`), Vanny. Two beats use the entity links, which now print the
descriptors: `{{glitchtrap}}` and `{{burntrap}}`.

**Conventions said in `when`**: the 1983 week before the child outside and the five (basis of the `s-house` pill,
and again in the `s-five` pill); the child outside before the five (label and basis of its pill); Afton Robotics;
Michael's week; the rabbit in the code.

## `theoryIntro`, `theoryParts`, `outsideStory`

- **Thesis**: "Then come the copies" is "The later games bring the copies" (8.7). Nothing else moved. It is 95 words.
- **`howToRead`**: "a game, or Scott, says or shows it" (8.3); the beat rule and the sentence on conventions
  (8.5, 9.4).
- **Kickers** (8.6): `makers` "The workshop", `family` "The house", `murders` "Before the new restaurant". The three
  that printed a date with no support are gone.
- **Blurbs**: `makers` "the two copying machines its owner built for his family" (8.4); `nightshift` "the company's
  reopening on a smaller budget, most likely in the old building, and the killer's return to it" (8.2); `afterimage`
  "one night in the Mega Pizzaplex" (8.1).
- **`outsideStory`**: seven records leave the lists because a chapter now uses them: `fnaf4-night8-no-story-text`
  (`nightmares`), `scott-2014-faith-and-work` (`faith`), `scott-2020-cassidy-kazoo-names-from-lore`,
  `scott-2020-cassidy-screenplay-lore-from-games` and `scott-2020-charlie-game-and-book-counterparts`
  (`canon-rules`), `fw-8bit-fredbear-puppet-master` and `into-the-pit-secret-minigames-other-stories` (`edges`).
  72 records are listed, from 79.
- **Reasons reworded**: `non-canon-per-scott` (10.8: Custom Night is not canon, and later its cutscenes are, with
  `scott-2016-cutscenes-are-canon` cited); `company-set-dressing` (10.5: why the glitching gravestone and the
  truck's headlights are scenery and not intrusions); `promotion` (10.6); `not-evidence` (the layer editors' point:
  it now says in words that `ffps-hry223-label` is unverified and that `ffps-midnight-motorist-later-that-night` is
  in the game's data only); `community-and-merchandise` and `unplaced-adaptation` (to match what left them).

## Not settled

1. **Sentences in a beat.** `schema.ts` and my own brief say two to five. Fifteen beats have more, because the
   rule for this pass was 130 words in short sentences. One of the two has to give way in writing: change the
   comment in `schema.ts` to a word limit, or cut the storyline by about a quarter.
2. **Two records still listed outside the story against a finding**: `scott-silver-parasol-website` (10.3) and
   `ffps-insanity-egg-baby-trigger` (10.4). Each needs a line in a chapter file.
3. **Writer 1's two files were still uncommitted** when I finished. The validator showed no clash with
   `theory.ts` at 05:19. If a later edit cites another listed record, it will warn again and the record
   must come off the list.
4. **"He dies" and "ghosts", against the records as edited after 04:56.** `fnaf3-n5-springlock-death` now says
   that the death "is the usual reading, from the tapes", and neither record of the scene says "ghost" any more.
   The model's clause table still rates "five ghosts corner their killer; he dies in the rabbit suit" high for the
   events. The beat's text follows the records; the thesis and the beat's title follow the model. Writer 1 asks
   for one rule for all chapters (`revise-1.md`, "For the lead" 1), and so do I. It is the adjudicator's to give.

## For the editing pass and the other layers

- **Beat and chapter marks now differ in two places.** `s-mimic` is medium and `mimic` is high; `s-1979` is medium
  and `two-machines` is high. Both chapters' answers carry a "most likely" (the second machine; the rage). By the
  rule the page prints, the editor has to decide whether those answers depend on that clause.
- **Header comments in the chapter files** repeat the old part blurbs and kickers (`nightshift.ts`,
  `afterimage.ts`, `makers.ts`, `family.ts`, `murders.ts`).
- **`timeline.ts`**: `t-ffps` ("after the Fazbear's Fright fire") and `t-ucn` ("after the Pizzeria Simulator
  fire") carry no "most likely", where the beats' `when` now do.
- **`telling.md`**: section B and the part blocks are regenerated and match `theory.ts`. Section A, the outline,
  is still as it stood after round three: it does not have round four's wording or the writers' corrections, and
  `telling-revisions.md` is the same. Both are the editing pass's to bring up.
- **A record wanted**: that the Pizzaplex closes with Gregory inside. With it, "is shut inside" could come back.
- **Not mine, noted**: "largest building" and "hunts" are still in `places.ts`, `people.ts` and `timeline.ts`
  (`revise-6.md`, "For the lead" 9).

## The thesis as it stands

> Five Nights at Freddy's is one story: what a machine keeps of a person, and a company that keeps putting it back
> on stage. William Afton kills children, and the mascot machines keep them. He dies in a rabbit suit and, decades
> later, comes back in it. His old friend calls four haunted machines into one building and stays as it burns. It
> seems to end there, on six graves. The later games bring the copies: in the company's code, a rabbit in the
> killer's image; under its newest building, a machine built to imitate.

---

# Third pass on `src/data/theory.ts` (3 October, 07:19 to 08:57): committed as `d059017`

Four requests came in this pass. Each is answered below.

1. 07:19: four corrections from the timeline's owner (`layerfix-time.md`), to be applied through the pipeline.
2. 08:18: a fifth, from the owner of the home page: "newest building".
3. 08:33 and 08:45: round 4b, R26's third tier and R19. These were for the editor's memo; the storyline was
   searched in the same way.
4. 08:48: section 3 of the reader's memo, under five decisions of the owner's, and the list of chapter titles
   that the reader's memo changes.

Three things were done before a request named them, and each can be taken back on its own:

- the wordings in the beats that records re-worded after the commit `0b55708` no longer carried (the rule of the
  storyline pass: the record decides);
- section 3 of the reader's memo, begun at 07:50. `BRIEF-final-pass.md` gives the front matter and the storyline
  to the lead author, and the six writers were applying the same memo to their chapters at the same time. The
  owner's message of 08:48 then set five decisions on it, and the text was brought to them at 08:55;
- what the writers' final notes say of the beats (`final-2.md`, items 3 and 4; `final-5.md`, item 6; `final-6.md`,
  item 4), read at 08:10.

**State.** `theory.ts` is the only file in the repository that I wrote. The owner committed it at 08:57 as
`d059017`; the commit holds the file that the generator wrote at 08:56:59. At 09:10 the generator was run again
from the pipeline's sources and wrote the same bytes, so nothing is in the repository that a later regeneration
would lose. Round 4c closed after the commit (09:00). The file was checked against it and nothing had to change
(see "Rounds 4b and 4c").

The pipeline keeps the sources of each step: `content.pre-r5/` before the four corrections; `content.pre-r6/`,
`outline.pre-r6/` and `theory.before-r6.ts` before the reader's section 3; `content/beats.pre-r6b.txt` before the
writers' points; `content.pre-r7/` and `outline.pre-r7/` before the fifth correction; `content/beats.pre-r8.txt`
and `content/intro.pre-r8.txt` before the owner's five decisions; and the file after each step
(`theory.after-r6.ts`, `theory.after-r7.ts`, `theory.after-r8.ts`, which is the committed file).

## The owner's five decisions of 08:48, and how each is met

| Decision | How it is met |
|---|---|
| 1. How to read: the memo's four paragraphs, in that order, checked against the rulings and the rules of weight. The four tags are adopted for the whole text as the memo's table gives them | Four paragraphs in the reader's order: 96, 108, 115 and 87 words, 406 in all (the reader's draft has 376). Every sentence of the draft is there, in its order. The second paragraph adds "leans" and the rule that a later game governs; the third adds "by convention" and the finer grades; the fourth lists the four tags, word for word, and points at `canon-rules`. The five pointers of 2.5 are all in. Four departures from the reader's words, each for a reason, are in the table below |
| 2. The last part's title is "How this was built" (id `apparatus` unchanged); the memo's blurb for "The machines" | Both, the blurb word for word. The blurb of the last part no longer opens with the words of its new title |
| 3. The beats: the game named once in each; one label for the undated beats, "Undated. Placed here by convention."; "what X is, no game says" written forwards; beat 1 reworked so that its first sentence gives a fan a reason to care; every beat within 130 words; beats 5, 13 and 20 kept as they are unless a record forces a change | Nineteen beats name their game; beat 5 is kept as committed and follows beat 4, which opens "In FNaF4". The four undated beats (6, 9, 13, 17) carry the one label. No turned sentence is left: all six are written forwards, and none of the silences is the kind decision G keeps turned. Beat 1 now opens on the word a fan knows: "Secret of the Mimic goes back to a workshop that builds springlock suits: Murray's Costume Manor, a family firm under contract to Fazbear Entertainment." No beat is over 130 words. Beat 5 is word for word the beat of `0b55708`. Beats 13 and 20 are word for word those of `0b55708` but for one sentence each, which a re-worded record had forced, and the game is named inside that sentence |
| 4. "Three games later" passes over FNaF World: say it another way | `s-springlock` ends: "Pizzeria Simulator's credits later give the rabbit's voice a name: William Afton." |
| 5. The comment in `schema.ts` on a beat's length is the owner's | Not touched. It now reads "at most 130 words, in short sentences" |

**How to read: the four departures from the reader's words.**

| The reader's words | Now | Why |
|---|---|---|
| "((canon-rules)) says what that costs"; "start with ((games)), which lists every release"; "((canon-rules)) explains them" | "((canon-rules\|the chapter on the rules)) says what that costs"; "start with ((games\|the chapter on the games)), which lists every release and what it adds"; "((canon-rules\|The chapter on the rules)) explains them" | A bare link prints the chapter's title, and the titles are "Ground rules" and "What each game adds": "Ground rules says what that costs" |
| "the later game governs" | "the later game governs the point in dispute" | Rule of weight W2 and R27: the later game is "the authority on the disputed point", not on the whole of the earlier game. `canon-rules` has "governs the disputed point" |
| "Every chapter and every beat carries one of three marks ... Each takes the mark of the weakest thing it depends on" | In `d059017`: "Every chapter, and every beat of the storyline, carries one of three marks ... A chapter takes the mark of the weakest claim its answer depends on, and a beat the mark of the weakest thing it tells." Changed at 09:42 to the owner's own wording: see the last section | The two rules differ. The owner's rule for a beat, from the storyline pass, is the weakest thing the beat tells; a chapter's mark follows its main claim. "Of the storyline" ties the word "beat" to the page's own heading |
| "a table that keeps the ten rabbits of these games apart" | "a table that keeps the rabbits of these games apart" | The table gives no count and its rows name more than ten (the reader's own possible error 10) |

Each sentence of how to read was checked against what it describes. The three markers are those of the style
guide. The three marks and the two finer grades are the ones the chapters print. `canon-rules` states the cost of
leaving the books out ("The cost falls on five questions"), the later-game rule, and all four tags, each in bold,
with the definitions the reader's table gives. `games` lists every release with what it adds.

## The reader's section 3, note by note

"Taken" means the reader's words, or those words with a citation moved. Where the words differ, the reason is
given.

| Note | Outcome | Now, or why not |
|---|---|---|
| 3.1, the four paragraphs | Taken, with four departures | See the table above |
| 3.1, last line: print the fourth paragraph after the storyline | The owner's | Decided at 08:48: the page prints the first three before the storyline and the fourth at the head of the parts |
| 3.2, the last part's title | Taken | "How this was built" |
| 3.2, the blurb of "The machines" | Taken | Word for word |
| 3.3, name the game once in each beat | Taken in nineteen | Beat 5 is kept as committed (decision 3) |
| 3.3, two labels for the undated beats | Taken as one | The owner's decision 3 gives one label. Beat 17 had the reader's second, "Undated. Placed after the fire by convention.", until 08:55 |
| Beat 1: the label; the game named; "FNaF3's training tapes"; "It names no diner." | Taken, and the first sentence reworked | The label is "Before a night in 1979", on beat 2 as well. The first sentence is the owner's decision 3. The reader's "is set in the workshop of Murray's Costume Manor" gave a setting that the two cited records do not carry; they carry the springlocks and the contract (R2 as corrected: "Murray's workshop makes springlock suits (stated)"). "Not yet seen in play" is the tag "(read from an image)", by decision D and the owner's decision 1 |
| Beat 2: move one sentence up | Taken, in the records' present words | The reader worked from the text of 06:35. Since then `secret-of-the-mimic-log-death` has "his mother is gone" and does not say dead; no record orders M1 against that; and the three logs have "a voice speaking as Fiona" and name no machine. So: "Fiona is gone"; "He shows the boy an endoskeleton, M1"; "In other recordings a voice speaks to him as Fiona. No recording in Secret of the Mimic says outright what became of her or David. The voice presses Edwin". "It takes on Fiona's voice" and "In Fiona's voice the machine presses his father" are not used |
| Beat 3: "as the babysitter did" | Taken in another form | "speaks as Fiona, as the voice in Edwin's recordings did". The logs name no machine, and the join of the cabinet to the first machine is made once, in `two-machines`. The game is named in "Secret of the Mimic gives the night three endings, and the model does not choose." |
| Beat 4: FNaF4 named; Fredbear glossed; the older brother is Michael | Taken | "the yellow bear on its stage" for "on that restaurant's stage": the beat stands at 129 words |
| Beat 5: "The plush fades, and then the boy." | Not taken | The owner's decision 3. The beat is as committed: "The boy fades from the screen last of all." |
| Beat 6: the two games named; who "he" is | Taken, with the gloss of 2.3 | "the Cassette Man, the voice on Pizzeria Simulator's tapes" and "that voice says". The reader's "a man the games name only as the Cassette Man" is not used: no game names him so; the name is the archive's (R26) |
| Beat 7: three sentences | Two taken, one in another form | "So reads a clipping in the first game." (without "newspaper", for length) and "A man is caught the next morning, and the model does not say who he was." The third: "the old restaurant, the one before the 1987 restaurant" (the two names of the reader's own 2.3) and "A Pizzeria Simulator arcade screen puts a grinning yellow figure in costume" (`ffps-fruity-maze-follow-me`: the ears are out of frame, so "in that costume" would say more than the screen) |
| Beat 8 | Taken | As written |
| Beat 9 | Taken | As written |
| Beat 10 | Taken | As written |
| Beat 11: Phone Guy; the first game; the clipping | Taken, with two words changed | "in banging, music and a scream (as described)": the record has "music", and the sound is held as a description (decision D). "The old restaurant" for "the old building" (2.3) |
| Beat 12: begin "In the scenes between FNaF3's nights" | Taken in another form | "In the minigames between FNaF3's nights": `fnaf3-eon-purple-guy-dismantles` has minigames |
| Beat 13: begin "In Sister Location Afton's son Michael goes down" | Not taken | The owner's decision 3. The first sentence is as committed. The game is named in the sentence that `sl-real-ending-scooped-mirror` had already changed: "The machines of Sister Location scoop him hollow, and a dark shape at a mirror opens glowing purple eyes." |
| Beat 14: FNaF3 named; one sentence forwards | Taken | "Springtrap in FNaF3's menu" names the game where the name is given. An opener "In FNaF3" would make beats 14, 15 and 16 all open on "In" and a game's name. The sentence is the reader's: "The model tells that party as the release they were owed, and the games leave open which ending happened." |
| Beat 15: the opener; one sentence forwards | Taken | As written |
| Beat 16: good as it is | Unchanged | Word for word the beat of `0b55708` |
| Beat 17: two sentences | One taken, one in another form | "It has a virtual-reality game, Help Wanted, made to laugh them off." as written. The second is "A second scan is told here by convention: in Special Delivery's emails it sets "a virus" loose.", which also answers the timeline owner's second correction |
| Beat 18: the whole beat | Taken in another form | The reader's version runs to 143 words. Kept from it: the tapes give a way and a tester tries it, in the tape's own words (`hw-tape-16`: "There is a way to kill it"); the add-on and its player; who Vanessa is; "Vanny, the woman who walks that building in a rabbit costume"; the page that counts against. Not used: "the company's newest building" (no record has it) and "One ending of Security Breach, the game set there" (the game is named in the sentence before). The page is "Its last comic page", which tells the reader that the endings are drawn (2.3) |
| Beat 19: gloss Princess Quest; name the sequel; a sentence that sorts three rabbits | Two taken in another form, one not taken | "the three Princess Quest arcade games are finished, and a blonde woman waits at the doors, the rabbit mask on the floor" (the record prints no name). "The sequel, RUIN, most likely shows that ending's aftermath." The sorting sentence is not taken, for two reasons: it costs 27 words in a beat that stands at 125; and `burntrap`, which owns the sorting, now counts four rabbits, with the figure from the M.X.E.S. cabinet, so "the third rabbit" and "keeps the three apart" would disagree with the chapter. Two smaller things answer the note: the woman is "Vanny", so she is the one met a beat before, and how to read points at the table of rabbits |
| Beat 20: begin "In RUIN a message in Gregory's voice says" | Not taken | The owner's decision 3. The first sentence is as committed. The game is named in the sentence that `ruin-gregory-mxes-explanation` had already changed: "In one RUIN ending a second Gregory voice tells her" |
| Section 5, item 10: "Ten rabbits" | Taken | How to read gives no number |
| Section 5, item 11: "three games later" | Taken | The owner's decision 4. `killer`'s caption has lost the phrase too (writer 1). `timeline.ts` still has it, in `t-dismantle-and-death` |

**The eight decisions of 2.1, where they touch this file.** C: three sentences say what the model does not do,
each where a reader expects a choice or an answer: "the model does not choose" (three endings, beat 3), "the model
does not say who he was" (the man who was caught, beat 7; the reader's own sentence) and "the model has no
account of that page" (beat 18). D: two beats carry a tag, "(read from an image)" in beat 1 and "(as described)"
in beat 11. E: every inference is marked once, in the sentence where it enters; no beat marks one claim twice.
G: no sentence is turned round. H: no sentence opens on a token that prints in lower case.

## The four corrections

1. **`s-fazbears-fright`, the pill "Thirty years later".** Kind `printed` (was `relative`). Basis: "Scott Cawthon
   wrote the store text for the game, and it prints the interval: thirty years after the pizzeria closed its
   doors. The interval is printed. The closing it counts from has no year, so the date is a distance from an
   undated event and gives no year. Which of three closings it counts from is not said." This is `dates.ts`'s
   `THIRTY_YEARS` in words without a quotation mark or an apostrophe, which a pill cannot hold. The pill cites
   the two records that `dates.ts` and the chapter cite. The style guide in `telling.md` had "thirty years later"
   as its example of `relative`; that was my error and is corrected. The editor's memo has an item for
   `fazbears-fright` (applied by writer 5) and one for the row of `games`.
2. **`s-rabbit-in-code` and `s-follower`: the order.** I kept the storyline's order and said so where the scan is
   told: "A second scan is told here by convention: in Special Delivery's emails it sets "a virus" loose". The two
   scans read better in one beat than on either side of the tester's ending. The timeline need not move.
3. **`s-pizzaplex`.** "Freddy, the bear hiding him, scans him and finds no guest profile"
   (`security-breach-intro-not-in-database`). Not the owner's exact phrase: Freddy has to be introduced where he
   is first named, because three sentences on he is seized.
4. **`s-five`.** `when` is now the pill "A June 26th between 1980 and 1986", kind `estimated`, with the evidence
   and basis the chapter `murders` uses; the title stays "June 26th". The timeline's label is "a June 26 between
   1980 and 1986", without "th": one of the two should follow the other, and the chapters have "26th".

## The fifth correction: "newest building"

**The records.** No record calls the Mega Pizzaplex the company's newest building. Of the 1,045 records none has
the word "newest", and of the 96 that name the Pizzaplex none calls it new, newly built, the latest or the
largest. What the records carry is where it stands: over a ruined pizzeria whose sign reads "Freddy Fazbear's Pizza Place"
(`security-breach-underground-pizza-place`), with the copying machine at the deepest level below (`ruin-mxes-hub`,
`ruin-concrete-poured-over-door`). "Newest" was the model's own order of events put as a fact about the building.

**`theory.ts`.** Two changes:

- the thesis, last clause: "under its Mega Pizzaplex, a machine built to imitate" (was "under its newest
  building"). Seven syllables for seven, and "its" keeps the parallel with "in the company's code";
- the part "Under the Pizzaplex", kicker: "The buried pizzeria" (was "The newest building"). The plain
  alternative is "The Mega Pizzaplex", which only repeats the title.

**Where else the phrase stood.** `thesis` three times and `ffps` three times: the editor's memo had six items
(`thesis` 7 to 9, `ffps` 5 to 7), all applied in `c1bd92c`. `model.md` four times: round 4c has since corrected
them. No beat and no other part had it.

## Wordings that followed a re-worded record

| Beat | Now | Record |
|---|---|---|
| `s-two-machines` | "Fiona is gone, and Edwin is left to raise their son David alone. He shows the boy an endoskeleton, M1" ... "In other recordings a voice speaks to him as Fiona. No recording in Secret of the Mimic says outright what became of her or David. The voice presses Edwin" ... "And to the voice: "I let a machine raise my kid. You're not real."" | `secret-of-the-mimic-log-death` has "his mother is gone" and does not say dead; no record puts M1 before or after that (`final-2.md`, item 3); the logs name no speaker for the voice |
| `s-1979` | 'A letter signed "WA" says "we now technically own the land", and bids for the firm's software and its whole catalogue'; "a Dispatch voice tells him"; "Inside, the Dispatch voice on his radio turns out to be a cabinet computer that, once found, speaks as Fiona, as the voice in Edwin's recordings did" | the letter's record names no reader; `secret-of-the-mimic-clock-out-real-dispatch`: where the impersonation begins "is not stated" (`final-2.md`, item 4) |
| `s-house` | adds the citation `fnaf4-bullies-in-masks` for "his older brother" | `fnaf4-brother-foxy-mask-tv` now says "an older boy" |
| `s-five` | "a grinning yellow figure in costume" | `ffps-fruity-maze-follow-me`: the ears are out of frame |
| `s-last-freddys` | "breaks off on the fourth night in banging, music and a scream (as described)" | `fnaf1-call4-phone-guy-attacked`: "The transcript marks ..." |
| `s-michael` | "The machines of Sister Location scoop him hollow, and a dark shape at a mirror opens glowing purple eyes." | `sl-real-ending-scooped-mirror` |
| `s-rabbit-in-code` | "person-shaped"; "some stories about it"; "takes hold in the code:" | `hw-rabbit-figure-appearance`, `hw-intro-loosely-based-on-actual-events` |
| `s-follower` | "The figure steps back behind a huge metal door, and a plush rabbit is left"; "a blonde woman in Vanessa's cap and uniform" | `hw-trapped-ending`; `security-breach-rooftop-vanessa-alive` prints no name |
| `s-pizzaplex` | "the three Princess Quest arcade games are finished, and a blonde woman waits at the doors, the rabbit mask on the floor"; "seizes Freddy" | `security-breach-ending-redemption`; `security-breach-burntrap-appearance` |
| `s-mimic` | "In one RUIN ending a second Gregory voice tells her" | `ruin-gregory-mxes-explanation` no longer says "the real Gregory" |

**Burntrap's name in `s-pizzaplex`.** The beat has the first-use form that the owner gave the writers at 07:47
and that every chapter prints: "This is the burnt rabbit under the Pizzaplex, known as Burntrap, a working name
that Scott has said now stands", cited to `scott-2024-interview-placeholder-names-canon`. That message did not
come to me; I took the form from `final-6.md` and from the chapter files. R25 and R26 in `rulings-brief.md` still
give the older form, "the game's files call it Burntrap".

**Records moved again after the commit.** At 09:02 thirty-two of the 140 records that the intro, the parts and
the storyline cite differed between the commit and the working tree, where the records editor is still at work.
None differs in its `title`, `claim` or `quote`: the changes are to `when`, `notes`, `people`, `places` and
`related`. Two were read against their beats all the same. `sd-circuit-board-scan-virus` is now "Undated; two of
Special Delivery's emails, in the order they reached players", which is what beat 17 says by "told here by
convention". `secret-of-the-mimic-work-order-1979` is now "1979, most likely 7 September", "neither has been
confirmed as legible in play", which is the pill of beat 3.

## Rounds 4b and 4c

**Rounds four and 4b (08:45).** The storyline, the thesis, how to read and the part blurbs were searched for the
old form of each of the 68 corrected wordings. None is left. No beat names a fan or file label (R26, tier 3). The
killer's end keeps R12's rule and its four limits: the scene is told as shown ("five grey, crying children corner
him"; "it snaps shut on him, and he slumps to the floor"), and "He dies in the suit" stands flat as the beat's
title and in the thesis.

**Round 4c (closed 09:00, after the commit).** One grade moved: "Vanny is Vanessa" is medium (R19 (1); it was
medium-high), because the cast list now counts against one woman and the page with the mask on the floor is no
longer a support. Nothing in `theory.ts` had to change:

- `s-follower` is marked medium and says "Most likely". It tells the rooftop page as "a blonde woman in
  Vanessa's cap and uniform", which is R19's wording, and says that the model has no account of it, as R19 asks.
  It does not name the cast list. Neither does the answer of `vanny`, which the beat follows; the chapter carries
  the list in `counterEvidence` and under "what pushes back". "One ending counts against it" is still true as
  worded: the list is not an ending. If the owner wants the list in the beat, the sentence is under "For the
  owner";
- `s-pizzaplex` tells the page with the mask on the floor as "a blonde woman waits at the doors, the rabbit mask
  on the floor" and draws nothing from it;
- no beat places Help Wanted 2 against RUIN, and none speaks of pay;
- the thesis already had "under its Mega Pizzaplex", which the rulings' thesis paragraph now follows.

## Outside the story, and the new record

Two records left the lists because a chapter now files them: `ffps-insanity-egg-baby-trigger` (`remnant`) and
`scott-silver-parasol-website` (`cover-story`). 70 records remain. Eleven trailing comments changed, because they
are printed from the records' present titles. The new record `security-breach-credits-vanessa-vanny-two-parts`
(1,045 records now) is `vanny`'s in the pipeline's list of homes, as the chapter has it.

## `telling.md`, brought to the final state (09:30)

The same generator writes `telling.md`. Its section B is the storyline as committed. Five things in its own notes
were behind the text, and they are corrected through the sources (`patch_r9.py`) without changing a byte of
`theory.ts`:

- a status note at its head says which sections are current (B, and the style guide) and which are the plan the
  chapters were written from (A, D and E: where a chapter and the outline differ, the chapter stands);
- the table of parts has the published titles and kickers;
- three bullets in the introduction to section B follow the text: the first beat's label, Burntrap's working
  name, and the rule for length;
- the style guide has a new section, C13, "What the final pass adopted": the four tags, one marker for one
  inference, silences written forwards, the answer that leads with its verdict, the glosses, the two names for
  the two restaurants, R12's rule for the killer's end, the first-use forms, the two pages and the cast list, and
  "never newest or largest". Three lines of C5 and C9 now agree with it;
- round 4c's changed grade (R19 (1), medium) is entered in the outline of `vanny`, with the cast list as a
  counter-record, and in the grade note of beat 18. This is the local edit that the outline was built for.

## Marks, eras, and counts

No beat's mark or era changed in this pass. Six beats changed their `when`: `s-costume-company` and
`s-two-machines` ("Before a night in 1979"), `s-child-outside` and `s-rabbit-in-code` (the one label for an
undated beat), `s-five` (the pill of `murders`) and `s-fazbears-fright` (kind `printed`).

Counts are `prose-report.mts`'s, which reads an entity token as the words of its id and a bare chapter link as
two words. Three beats stand at 130 and none is over. Counted as printed, with tokens and link titles in full,
one beat passes 130: `s-five` (131), where the link to `killer` prints the chapter's six-word title. If the
printed count is the one that binds, drop "and" from "A man is caught the next morning, and the model does not
say who he was." and set a semicolon.

**1. A costume company builds suits that are also machines** (`s-costume-company`; Before a night in 1979; high; era `founding`; 111 words)

> Secret of the Mimic goes back to a workshop that builds springlock suits: Murray's Costume Manor, a family firm
> under contract to Fazbear Entertainment. Edwin Murray builds, and Fiona Murray designs the characters. One of
> the firm's messages says that new springlocks will soon be ready "for the diner". It names no diner. A poster
> among that game's textures (read from an image) reads "JOIN US AT... FREDBEAR'S FAMILY DINER". FNaF3's training
> tapes say what springlocks are for: "two specially designed suits that double as both animatronic and suit". By
> the same tapes, every restaurant is built with one room that is on no map its machines or cameras can see.

**2. For his own son, a machine that copies** (`s-two-machines`; Before a night in 1979; high; era `founding`; 130 words)

> Fiona is gone, and Edwin is left to raise their son David alone. He shows the boy an endoskeleton, M1: "Think of
> it as your new babysitter." In other recordings a voice speaks to him as Fiona. No recording in Secret of the
> Mimic says outright what became of her or David. The voice presses Edwin: "You need to try again. Build
> another." He refuses: "It wouldn't be him." And to the voice: "I let a machine raise my kid. You're not real."
> But a second machine, M2, "began as a copy of my program", an unsigned message says. In one recording Edwin
> shouts at something, "Stop sounding like him!" In another he lies hurt and tells M2 he lost his temper. And the
> unsigned message warns: "It mimics rage."

**3. 1979: the company comes to collect** (`s-1979`; 1979, most likely 7 September; medium; era `founding`; 122 words)

> A letter signed "WA" says "we now technically own the land", and bids for the firm's software and its whole
> catalogue. The writer is most likely William Afton, writing for Fazbear Entertainment. One night the company
> sends a technician into the shuttered workshop for the blueprints: "everything he's been working on for us is
> now legally ours", a Dispatch voice tells him. Inside, the Dispatch voice on his radio turns out to be a cabinet
> computer that, once found, speaks as Fiona, as the voice in Edwin's recordings did. Secret of the Mimic gives
> the night three endings, and the model does not choose. Before any of them, M2 "can no longer be controlled",
> and earlier visitors lie dead inside mascot costumes.

**4. A house with a toy that talks** (`s-house`; c. 1983; medium; era `diner`; 129 words)

> In FNaF4 a small boy lives in dread of his older brother and of the restaurant where his birthday party will be
> held. A plush of Fredbear, the yellow bear on its stage, talks to him: "He locked you in your room again. Don't
> be scared. I am here with you." Between those scenes the game is played at night in a bedroom, holding its doors
> against monstrous versions of the first game's mascots. In Sister Location, a room marked Private in William
> Afton's facility has that bedroom on its monitors. On its desk sits a Fredbear plush of the same design, with a
> handset in its lap. So the house is most likely Afton's own, and the boys his sons. On that reading the older
> brother is Michael.

**5. The birthday** (`s-birthday`; c. 1983; medium; era `diner`; 88 words)

> The week ends at the boy's birthday party. His older brother and three friends in masks carry him to the stage
> and lift him to Fredbear's mouth for "a big kiss". The jaw closes on his head. In the dark afterwards, text in
> the grey of his brother's lines says "I'm sorry." Then a line in the plush's yellow makes a promise: "I will put
> you back together." The boy fades from the screen last of all. He most likely dies, and after that no record
> places him.

**6. The child outside** (`s-child-outside`; Undated. Placed here by convention.; medium; era `murders`; 105 words)

> In a Pizzeria Simulator minigame a child is shut out of a building in the rain while the Puppet, the machine set
> to watch that child, is pinned in its box. It gets out too late, and sinks down beside the body. In a FNaF2
> minigame a purple figure steps out of a purple car and kills a crying child. Most likely these are one death:
> William Afton kills the daughter of the Cassette Man, the voice on Pizzeria Simulator's tapes, and she stays on
> in the Puppet. "My daughter, if you can hear me, I knew you would return as well," that voice says.

**7. June 26th** (`s-five`; A June 26th between 1980 and 1986; medium; era `murders`; 127 words)

> "Two local children were reportedly lured into a back room during the late hours of operation at Freddy
> Fazbear's Pizza on the night of June 26th." So reads a clipping in the first game. Police think the man dressed
> as a company mascot. Five children are linked to it in the end, and no bodies are found. A man is caught the
> next morning, and the model does not say who he was. The killer is William Afton (see The man in the rabbit
> suit). Most likely the place is the old restaurant, the one before the 1987 restaurant, and the costume is the
> yellow rabbit, Spring Bonnie. A Pizzeria Simulator arcade screen puts a grinning yellow figure in costume behind
> a crying girl, over the words "He's not really dead."

**8. The children stay** (`s-children-stay`; Afterwards; medium; era `murders`; 106 words)

> The restaurant is threatened with closure over a foul smell from its mascots, and "what appeared to be blood and
> mucus around the eyes and mouths". The model reads that as the bodies hidden inside the mascots, which no game
> shows. One FNaF2 minigame has the Puppet set a mascot's head on each of four grey, dead-looking children, and
> ends on a yellow bear, Golden Freddy, lunging at the screen. The children stay on in the machines. Even the
> Cassette Man, who calls those machines "prisons of my making", never learns how: "I don't know how those tiny
> breaths of life came to inhabit those machines."

**9. Machines built to take children** (`s-afton-robotics`; Undated. Placed here by convention.; high; era `funtime`; 104 words)

> William Afton builds machines under his own name. One of their blueprints, marked Afton Robotics, carries the
> labels "Parental Tracking", "Voice Mimic/ Luring" and "Storage Tank". The grand opening of Circus Baby's Pizza
> World is cancelled, and in Sister Location the machines are hired out to parties from a facility underground.
> The word Remnant appears on another of the firm's sheets, and no game says what it means (see Remnant). The one
> child the games show these machines take is their maker's own daughter. She begs to play with Circus Baby,
> "Didn't you make her just for me?", and is pulled inside it.

**10. November 1987** (`s-november-1987`; November 1987; medium; era `pizzeria`; 115 words)

> In FNaF2 the old restaurant has been "left to rot", and a new one opens with new machines; the old ones sit in a
> back room, kept for parts. Within a week there is an investigation. Phone Guy, the voice on the guard's phone,
> says that someone "may have tampered" with the machines, and the building is locked down against "previous
> employees". Then: "Someone used one of the suits. We had a spare in the back, a yellow one." No record says what
> was done that week. The restaurant closes. Two things are most likely: the killer was back, and these last days
> hold the bite a later guard hears of, "The Bite of '87".

**11. The last Freddy's** (`s-last-freddys`; A November after 1987; medium; era `pizzeria`; 110 words)

> After the closure of 1987 the company's chief executive promises: "We are confident that we will reopen someday,
> even if it is with a much smaller budget." The four original machines are kept, and in a later November, in the
> first game, a guard named Mike Schmidt works a week of nights among them. Phone Guy's recorded voice trains him,
> and breaks off on the fourth night in banging, music and a scream (as described). Most likely this is the old
> restaurant, and the clipping in its hall is this restaurant's own notice: it will close by the year's end, after
> "the tragedy that took place there many years ago".

**12. He dies in the suit** (`s-springlock`; After that restaurant closed, most likely; medium; era `pizzeria`; 96 words)

> In the minigames between FNaF3's nights a purple figure comes back to an empty restaurant and takes the four
> machines apart, one after another. Then five grey, crying children corner him in a room the machines could not
> enter. He climbs into the yellow rabbit, the Spring Bonnie suit; it snaps shut on him, and he slumps to the
> floor. A training tape says such rooms were being walled up with everything left inside, and no game shows how
> he got into this one. Pizzeria Simulator's credits later give the rabbit's voice a name: William Afton.

**13. The son who should be dead** (`s-michael`; Undated. Placed here by convention.; high; era `aftermath`; 71 words)

> Afton's son Michael goes down into the rental facility on his father's instructions: "I found it. It was right
> where you said it would be." The machines of Sister Location scoop him hollow, and a dark shape at a mirror
> opens glowing purple eyes. His body rots as it walks the street, heaves a mass of wires into a sewer, and
> collapses. A voice says "You won't die." He gets up.

**14. Thirty years later** (`s-fazbears-fright`; Thirty years later; medium; era `aftermath`; 119 words)

> A local amusement park builds a horror attraction on "the unsolved mysteries of Freddy Fazbear's Pizza", and its
> builders hear of an extra room that was boarded up. The next night: "We found one. A real one." It is a decayed
> rabbit, Springtrap in FNaF3's menu, with what looks like a body inside. One of that game's two endings runs
> through a hidden party at which six masked children vanish. The model tells that party as the release they were
> owed, and the games leave open which ending happened. The attraction burns down. In front of the wreck Michael
> tells his father, "I'm going to come find you", and a figure with rabbit's ears steps out of the dark.

**15. The trap and the fire** (`s-trap-fire`; After that fire, most likely; medium; era `aftermath`; 130 words)

> In Pizzeria Simulator the Cassette Man has a plan: "I have to call them all back. All of them. Together in one
> place". He sets his trap in a new pizzeria that a franchisee runs, and four machines come. The game names two:
> Afton, in what is left of the rabbit, and Elizabeth, his daughter, in what is left of Circus Baby. Most likely
> the others are the fused remains of the other rental machines and the Puppet, inside a bear built to catch it,
> and the franchisee is Michael. The building burns, and the game does not show who lights it. The Cassette Man
> stays, and tells one of them: "don't keep the Devil waiting, old friend." There the game ends, and after its
> credits it shows six graves.

**16. The night without end** (`s-night-without-end`; After the fire, most likely; medium; era `aftermath`; 126 words)

> In Ultimate Custom Night someone sits in an office that the machines of the earlier games attack. The voices
> promise a night with no morning: "over, and over, and over again... forever". They call the one in the office "a
> victim that can't perish" and speak of "the one you should not have killed". One of them will not let go: "I
> will hold you here. I will keep you here. No matter how many times they burn us." Another voice tells someone to
> stop: "Leave the demon to his demons. Rest your own soul." No line names the one in the office. The two readings
> are the killer and his son; the game does not say which, and the chapter on that night weighs them.

**17. The rabbit in the code** (`s-rabbit-in-code`; Undated. Placed here by convention.; medium; era `digital`; 124 words)

> Fazbear Entertainment admits that some stories about it were "loosely based on actual events" and blames most on
> "a complete lunatic". It has a virtual-reality game, Help Wanted, made to laugh them off. The developers are
> sent old circuit boards to scan. Something on them takes hold in the code: a grinning, person-shaped figure in a
> yellow rabbit costume (known as Glitchtrap, Scott's working name for it). It presents as the killer, and a
> hidden tape warns that it "wants to escape" through "someone plugged into this game". A second scan is told here
> by convention: in Special Delivery's emails it sets "a virus" loose. No game says which machine the boards came
> from. The model reads the rabbit in the code as something William Afton left behind.

**18. The follower** (`s-follower`; During the testing, and after; medium; era `digital`; 125 words)

> The tapes say how to kill the rabbit in the code, and one tester tries. The figure steps back behind a huge
> metal door, and a plush rabbit is left. In Help Wanted's Halloween add-on, a player in a rabbit mask who picks
> the plush up hears a woman answer someone unheard: "Yes, I have it. I made it myself". Most likely the tester,
> the woman on the call and Vanessa, the security guard of Security Breach's Mega Pizzaplex, are one person:
> Vanny, the woman who walks that building in a rabbit costume. One ending counts against it. Its last comic page
> shows a blonde woman in Vanessa's cap and uniform on the roof after Vanny has fallen from it, and the model has
> no account of that page.

**19. One night at the Pizzaplex** (`s-pizzaplex`; After the fire, most likely; medium; era `pizzaplex`; 125 words)

> The Mega Pizzaplex stands over a ruin whose sign reads "Freddy Fazbear's Pizza Place". In Security Breach a boy,
> Gregory, hides there overnight. Freddy, the bear hiding him, scans him and finds no guest profile. Vanny walks
> its halls: "that rabbit lady", the boy calls her. In one ending the three Princess Quest arcade games are
> finished, and a blonde woman waits at the doors, the rabbit mask on the floor. In another, something rises from
> a recharge station in the ruin and seizes Freddy: "He is trying to take control of me." This is the burnt rabbit
> under the Pizzaplex (known as Burntrap, a working name that Scott has said now stands), and the game never says
> what it is. The sequel, RUIN, most likely shows that ending's aftermath.

**20. Behind the concrete** (`s-mimic`; After that night; medium; era `pizzaplex`; 130 words)

> A message in Gregory's voice says he is trapped in what is left of the Pizzaplex. His friend Cassie goes in
> after him and is handed a mask "left behind by some Faz-Technician". The voice begs her: "turn off all the
> security! Turn it all off!" At the bottom is a door that someone has poured concrete over, and behind it is not
> Gregory but an endoskeleton that has been using his voice. In one RUIN ending a second Gregory voice tells her:
> "The M.X.E.S. security program was designed to keep it hidden". Those letters are spelled out on a terminal in
> Edwin Murray's house. The thing behind the concrete is a copying machine of Murray's design, most likely the
> second itself: the one that mimics rage.

Storyline: 2,293 words by that count. The thesis is 95 words, as before.

## Checks (09:10, on the committed file)

- `npx tsx scripts/validate.ts`: OK, with no warning. Coverage 1045 of 1045: cited inline 660, counter-evidence
  111, filed 345, outside the story 70, unaccounted 0. No "listed in outsideStory but also used by a chapter".
- `npx tsc -b`: exit 0.
- `git status`: `theory.ts` is clean against `d059017`. The six evidence files that show as modified are the
  records editor's. The generator was run again at 09:10 and, after `patch_r9.py`, at 09:31: `theory.ts` came
  out byte for byte the same each time (sha256 `3b9475b132ee775f...`), and the chapter files' times did not
  move.
- `quotecheck.mts ... 3 --weak`, the storyline's lines: two MISS in `s-1979`, where the tool cannot pair the
  two-letter quotation "WA" and so reads the prose between two quotations as a quotation; one `weak(notes)` in
  `s-two-machines`, for "It wouldn't be him.", which is in the `quote` of the next record cited
  (`secret-of-the-mimic-log-refusal`). No chapter has a MISS or an UNCITED line.
- `wordcheck.py --all`, in `theory.ts`: the chapter id `partners`, record ids and comments with years, and "1988"
  in the basis of the pill of `s-last-freddys`, where the arithmetic is shown (R24 (6)).
- The beats as committed in `0b55708` and in `d059017` were compared by script, sentence by sentence
  (`ed/beatdiff.py`): beats 5 and 16 are identical; beats 13 and 20 differ in one sentence each.

## The chapter titles the reader's memo changes

Three, and the writers have applied all three:

| Chapter | Was | Now | Against the storyline |
|---|---|---|---|
| `golden` | "What became of the five" | "What became of the five, and Golden Freddy" | Beat 8, which lists it, is "The children stay": no clash |
| `november-1987` | "November 1987" | "November 1987, and the Bite of '87" | Beat 10 keeps "November 1987". The two no longer share a title, and no other beat has either |
| `funtimes` | "Afton Robotics" | "Machines built to take children" | The title of beat 9, which lists it, by the reader's design |

Twelve beats now share a title with a chapter they list. No chapter title equals the title of a beat that does
not list it, no two chapters share a title, and none equals a part's title. A beat's "argued in" labels are
printed from the chapters' titles, so they follow without an edit. Three beats hold a link to a chapter:
`((killer))` in beat 7 and `((remnant))` in beat 9 print titles that did not change, and the link in beat 16
carries its own label. How to read uses labelled links only.

## For the owner

1. **At 09:30 nothing waited to be committed:** `d059017` was the pipeline's file. Since 09:42 three lines differ
   from it, after your answers to the memo. They are in the last section, "After the owner's answers".
2. **Three notes of the reader's on beats 5, 13 and 20 are declined on your decision 3.** If you want them after
   all, the text of 08:25 has them and is kept (`theory.after-r7.ts` in the pipeline). Beat 5: "The plush fades,
   and then the boy." for "The boy fades from the screen last of all." (86 words). Beat 13: the game named in
   the first sentence, "goes down into Sister Location's rental facility", with "The machines there scoop him
   hollow" after it (70 words); the reader's own opener is "In Sister Location Afton's son Michael goes down".
   Beat 20: "In RUIN a message in Gregory's voice says", with "In one ending a second Gregory voice tells her";
   to hold the beat at 130, "a door that someone has poured concrete over" loses "that".
3. **The cast list and beat 18.** Round 4c counts the list against one woman, at support weight. The beat tells
   only the rooftop page, as `vanny`'s answer does, and I would leave it so: a second objection turns the beat
   into a list of qualifications, and the chapter has the list in `counterEvidence` and under "what pushes
   back". If the beat should name both, "One ending counts against it. Its last comic page shows" becomes "Two
   records count against it. The cast list gives the two parts to two performers
   [[security-breach-credits-vanessa-vanny-two-parts]]. And one ending's last comic page shows", and the rest
   stands. That is twelve words more, the beat stands at 125, and I found no seven words in it that carry
   nothing.
4. **A sorting sentence for the rabbits** has no room in beat 19 under 130 words, and it must not count them:
   `burntrap` now sorts four. If you would rather have it than Freddy's scan, the sentence is: "The model keeps
   these rabbits apart: the one in the code is software, the woman is a person, and this is a thing in a room."
5. **Two tags meet the visitor before their definition.** "(read from an image)" in beat 1 and "(as described)"
   in beat 11 are defined in the fourth paragraph of how to read, which the page will print after the storyline.
   Both read as plain English.
6. **`timeline.ts` still has "three games later"**, in `t-dismantle-and-death`: "three games later the credits
   give the salvaged rabbit's voice that name". Replacement: "Pizzeria Simulator's credits later give the
   salvaged rabbit's voice that name".
7. **`timeline.ts`**: its label for the five has "June 26" where the beat and the chapters have "June 26th".
8. **Burntrap's first-use form in the rulings.** R25 and R26 still have "the game's files call it Burntrap, a
   working name that Scott has said now stands". Every layer prints "known as Burntrap, a working name that
   Scott has said now stands".
9. **Your message of 07:47 to the writers did not reach me.** I know its five decisions from the writers' notes.
   `theory.ts` agrees with the chapters on each: "five grey, crying children" in the beat and "He dies in the
   suit" as its title; the first-use form for Burntrap; `s-1979` and `s-mimic` at medium, beside `two-machines`
   and `mimic` at high; "a blonde woman in Vanessa's cap and uniform"; "A November after 1987".

## The thesis as it stands

> Five Nights at Freddy's is one story: what a machine keeps of a person, and a company that keeps putting it back
> on stage. William Afton kills children, and the mascot machines keep them. He dies in a rabbit suit and, decades
> later, comes back in it. His old friend calls four haunted machines into one building and stays as it burns. It
> seems to end there, on six graves. The later games bring the copies: in the company's code, a rabbit in the
> killer's image; under its Mega Pizzaplex, a machine built to imitate.


---

# After the owner's answers to the memo (3 October, 09:31 to 09:47): three lines changed (committed since as `785083b`)

The owner's answers to "For the owner" in the editor's memo reached me at 09:31. They were written before
`d059017`: they speak of the five corrections, the thesis and the reader's section 3 as work still queued. So
each answer was checked against the committed file, and only what the file did not yet do was changed.

| Answer | In `d059017` | Change now |
|---|---|---|
| A1. "Five ghosts" and "he dies in the suit" stay flat outside `springtrap` | `s-springlock` tells the scene as shown and is titled "He dies in the suit"; the thesis has "He dies in a rabbit suit" | None |
| A2. Burntrap's first-use form is "the burnt rabbit under the Pizzaplex (known as Burntrap, a working name that Scott has said now stands)"; never "the game's files call it Burntrap" | The words were there, set off by commas. Nothing in `theory.ts` had "the game's files" | `s-pizzaplex` has the form exactly, in brackets, with the citation inside them as the chapters have it. `s-rabbit-in-code` takes the same brackets for "(known as Glitchtrap, Scott's working name for it)", so that the two beats agree with each other and with every other layer. Punctuation only: no word changed |
| A3. The tape read twice: the one sentence in `remnant` is the answer | Not told in `theory.ts` | None |
| A4. A chapter carries the mark of its main claim, and a further step in its answer carries its own marker; a beat carries the mark of the weakest thing it tells. How to read is to say exactly that, in one plain sentence for chapters and one for beats | "A chapter takes the mark of the weakest claim its answer depends on, and a beat the mark of the weakest thing it tells." That rule for chapters is the one `two-machines` and `mimic` do not follow | The third paragraph of how to read now has: "A chapter carries the mark of its main claim, and a further step in its answer carries its own marker in the sentence. A beat is all telling, and carries the mark of the weakest thing it tells." The comments in `schema.ts` on the two fields already say the same |
| A5. FNaF1's date, as applied | `s-last-freddys` has the pill "A November after 1987", and 1988 only in its basis, where the arithmetic is shown | None |
| A6. The woman on the roof and at the doors, as the items have it | "a blonde woman in Vanessa's cap and uniform" (`s-follower`); "a blonde woman waits at the doors" (`s-pizzaplex`); the name is the model's reading, marked once, by "Most likely" in `s-follower` | None |
| B. All seven rows of table B | All seven were in `d059017` (table below) | None |
| C. Table C goes to the records editor | Not mine | None |

**The seven rows of table B, as the memo first printed them at 07:14.** The memo's present section B is a later
and longer table; these are the rows the answer means.

| Beat | The row's new wording | In the file |
|---|---|---|
| `s-1979` | 'A letter signed "WA" says "we now technically own the land"' | As written |
| `s-rabbit-in-code` | "a grinning, person-shaped figure" | As written |
| `s-follower` | "Its last page shows a blonde woman in Vanessa's cap and uniform on the roof" | "Its last comic page shows a blonde woman in Vanessa's cap and uniform on the roof after Vanny has fallen from it" |
| `s-pizzaplex` | "and a blonde woman waits at the doors with the mask on the floor" | "and a blonde woman waits at the doors, the rabbit mask on the floor" |
| `s-mimic` | "In one ending a second Gregory voice tells her" | "In one RUIN ending a second Gregory voice tells her" |
| `s-springlock` | "In Pizzeria Simulator the credits give the rabbit's voice a name" | "Pizzeria Simulator's credits later give the rabbit's voice a name: William Afton." |
| `outsideStory` | remove `scott-silver-parasol-website` and `ffps-insanity-egg-baby-trigger`, once writers 6 and 3 have filed them | Both removed: `cover-story` and `remnant` file them, and the validator prints no warning. 70 records |

**What changed in `theory.ts`.** Three lines differ from `d059017`: line 36 (how to read, the paragraph on the
three marks), line 155 (`s-rabbit-in-code`) and line 167 (`s-pizzaplex`). How to read is now 96, 108, 129 and 87
words, 420 in all. No beat's word count moved.

**Checks (09:45).**

- `npx tsx scripts/validate.ts`: OK, with no warning. Coverage 1045 of 1045: cited inline 660, counter-evidence
  111, filed 345, outside the story 70, unaccounted 0.
- `npx tsc -b`: exit 0.
- `quotecheck.mts ... 3 --weak`: 624 quoted phrases; no UNCITED line; the same three lines for the storyline as
  before (two MISS in `s-1979`, where the tool cannot pair the two-letter quotation "WA"; one `weak(notes)` in
  `s-two-machines`, held in the `quote` of the next record cited). No chapter has a MISS line.
- The records committed since (`00ba86f`): 52 of the 140 records under the intro, the parts and the storyline
  changed, in `when`, `people`, `notes`, `related` and `places` only. No `title`, `claim`, `quote` or `certainty`
  moved, and each beat's date pill still has the kind that `dates.ts` gives its event.
- `git diff --stat`: of the files I write, only `src/data/theory.ts`, 3 lines. Five other data files show as
  modified (`community.ts`, `familyTrees.ts`, `home.ts`, `people.ts`, `relations.ts`); they are other owners'
  work, and no file but `theory.ts` changed its time when the generator ran.

**In my own notes.** `telling.md` takes the same two answers (`patch_r10.py`): decision 5 and C13 state the rule
for marks in the owner's words, and the one line of the outline that still had "the game's files call it
Burntrap" has the form of A2.

**The file is not committed.** `theory.after-r10.ts` in the pipeline is the file as it stands.


---

# Readability round (3 October, 12:43 to 13:15): three beats changed, not committed

The brief is `BRIEF-readability.md`; the owner's message names four passages in `src/data/theory.ts` and nothing
else. Start: `ws/theory` at `ee957f3`.

**The pipeline was brought level first.** The owner had edited `theory.ts` directly three times since my last
file (`785083b`): eight hunks, in `035c233`, `0e85d4f` and `ee957f3`. `patch_r11a.py` ports each into the sources
word for word (how to read: the move, the two cuts and "Four markers"; four titles; one sentence each in `s-1979`
and `s-pizzaplex`; two reasons in `outsideStory`) and gives the one new record, `ffps-catalog-rockstar-bonnie`, its
home (`ucn`). The generator has a new option, `--dry-index <path>`, which writes the index file outside the
worktree. Its output was compared with the committed file before anything was replaced: **byte for byte the
same**. This round's edits were then made in the sources (`patch_r11b.py`), dry-run again (three lines differ
from `ee957f3`: 59, 71, 155), and only then written.

## 1. Beats 1 to 3: footing for a reader who has not played Secret of the Mimic

**The clause is written.** My judgement is that it does give the returning fan the footing the second reader
missed: the first word of the storyline was the name of a game that fan has not played, and "goes back" had
nothing to go back from. Told that it is the newest game and that it goes back furthest, the fan knows why the
names are new and why the story starts here, and the rest of the beat lands on what that fan does know:
springlock suits, Fazbear Entertainment, Fredbear's Family Diner, FNaF3's tapes. No year is given.

| Beat | Before | After | Words |
|---|---|---|---|
| 1, `s-costume-company` | "Secret of the Mimic goes back to a workshop that builds springlock suits: Murray's Costume Manor, a family firm under contract to Fazbear Entertainment." | "The newest game, Secret of the Mimic, goes back furthest: to a workshop that builds springlock suits. It is Murray's Costume Manor, a family firm under contract to Fazbear Entertainment." | 111 to 117 |
| 2, `s-two-machines` | no change | | 130 |
| 3, `s-1979` | "One night the company sends a technician into the shuttered workshop for the blueprints: "everything he's been working on for us is now legally ours", a Dispatch voice tells him. Inside, the Dispatch voice on his radio turns out to be a cabinet computer that, once found, speaks as Fiona, as the voice in Edwin's recordings did." | "One night the company sends a technician into the shuttered workshop for the blueprints. A voice on his radio speaks as the company's Dispatch: "everything he's been working on for us is now legally ours". Inside, the Dispatch voice turns out to be a cabinet computer that, once found, speaks as Fiona, like the voice in Edwin's recordings." | 129 to 130 |

**The names, each at first use.**

| Name | Where | What the beat gives it | Change |
|---|---|---|---|
| Secret of the Mimic | beat 1 | "The newest game" | new |
| Murray's Costume Manor | beat 1 | "a workshop that builds springlock suits"; "a family firm under contract to Fazbear Entertainment" | none |
| Edwin | beat 1 | "Edwin Murray builds" | none |
| Fiona | beat 1 | "Fiona Murray designs the characters" | none |
| David | beat 2 | "their son David" | none |
| M1 | beat 2 | "an endoskeleton, M1", and "your new babysitter" in the line that follows | none |
| M2 | beat 2 | "a second machine, M2" | none |
| Dispatch | beat 3 | "A voice on his radio speaks as the company's Dispatch" | new: it was "a Dispatch voice", with "on his radio" a sentence later |

**Sentences that are not made only of words the beat already had**, for the verifier:

1. "The newest game, Secret of the Mimic, goes back furthest: to a workshop that builds springlock suits." New:
   "The newest game" and "furthest". This is the one new statement the owner allowed. `games.json` has Secret of
   the Mimic released on 2025-06-13, the latest of its eighteen entries, and set in "1979, most likely 7
   September", the earliest setting any entry gives (FNaF4's is "c. 1983").
2. "It is Murray's Costume Manor, a family firm under contract to Fazbear Entertainment." New: "It is". The rest
   is the second half of the old sentence, with its citation.
3. "A voice on his radio speaks as the company's Dispatch:" New: "A", "speaks as" and "the company's". "On his
   radio" was in the next sentence and is now here. The cited record's place is "Opening call from Dispatch over
   the van radio" (`secret-of-the-mimic-dispatch-contract-legally-ours`), and the call opens "this is dispatch
   with Fazbear Entertainment" (`secret-of-the-mimic-dispatch-contractor-murray`, cited in beat 1). `springlocks`
   tells the same call as "A voice that gives itself as dispatch with Fazbear Entertainment briefs him over the
   radio of his van". The sentence does not say whether that voice is the company's real Dispatch: where the
   machine's voice takes over is not stated on record, and the beat said no more before.
4. "Inside, the Dispatch voice turns out to be a cabinet computer that, once found, speaks as Fiona, like the
   voice in Edwin's recordings." New: "like", for "as ... did". "On his radio" has moved up. The word saved keeps
   the beat at 130.

Nothing was lost in beats 1 to 3: the seven citations of beat 1 and the six of beat 3 stand in the same order;
every quotation is unchanged; both "most likely" of beat 3, "the model does not choose" and the tag "(read from
an image)" stand where they stood.

## 2. Beat 17, the second scan

| Before | After | Words |
|---|---|---|
| "A second scan is told here by convention: in Special Delivery's emails it sets "a virus" loose." | "In Special Delivery's emails a circuit board is scanned and sets "a virus" loose. That second scan is told here by convention." | 124 to 129 |

The sentence opened on how the thing is told, before the reader knew what the thing was, and its "it" pointed
back at "scan". Now the event comes first, with what is scanned, in the words the beat used three sentences
earlier ("old circuit boards to scan"), and the convention follows as its own short sentence. New words: "a
circuit board is scanned and", and "That". No statement is new: the record has "we released a virus when we
scanned that last circuit board" (`sd-circuit-board-scan-virus`). "By convention" stays on the second scan, and
the citation stays on the sentence that tells it.

Counted as printed, with the token `{{glitchtrap}}` read as its five words, the beat has 133 (it had 128). By
`prose-report.mts`, which is the project's count, it has 129. `s-pizzaplex` has printed 134 since the verifiers'
sentence, on the same footing.

## 3. How to read, as it stands after the moves and cuts

Read once, as a visitor, in the two places it will stand. **Nothing mended: no join reads badly.**

- Paragraph 2 now opens on "A small number in the text opens the record behind a claim", which is a better door
  to it than the sentence that left. "Four markers" is followed by four in bold.
- Paragraph 3: "Low means a lean, or an honest guess. A beat is all telling, and carries the mark of the weakest
  thing it tells." The sentence about a chapter's mark used to stand between these two. The join holds, because
  paragraph 1 has already set the pair up: "The storyline tells the whole of it ... The parts that follow argue
  it".
- Paragraph 4 opens on the two moved sentences, and they belong there: it stands over the contents, where every
  chapter shows its question, its answer and its mark.
- One thing the owner may want to know, which is not a join. Paragraph 4 uses "mark" and "marker", which are
  defined in paragraphs 2 and 3, on the far side of the twenty beats. On one page, read in order, that holds: by
  then the reader has met every marker in the beats themselves.
- The three paragraphs before the storyline are 96, 78 and 95 words, 269 in all; the fourth is 127.

## 4. The four new titles

Each was checked against its beat and against the titles and answers of the chapters it lists. **None clashes
and none misleads. None is changed.**

| Beat | Title | Against the beat | Against "argued in" |
|---|---|---|---|
| `s-1979` | The company comes to collect | The letter's claim on the land and its bid; the technician sent for the blueprints; "now legally ours". All stated | "The babysitter and its copy", "Hen and W.A.": no clash |
| `s-five` | Lured into a back room | The clipping's own words, in the beat's first sentence. The title gives no number, so it does not set the clipping's two children against the five | "The five", "The man in the rabbit suit": no clash |
| `s-november-1987` | "Someone used one of the suits" | Phone Guy's line, quoted in the beat; the first sentence of the cited record's `quote` | "November 1987, and the Bite of '87": no clash |
| `s-fazbears-fright` | "We found one. A real one." | The caller's line, quoted in the beat, word for word in the cited record | "Thirty years later", "The son who should be dead": no clash. One repeat is left on this line, and it is not the title's: the beat's date and the first chapter under it are both "Thirty years later" |

No two beats share a title, no beat has the title of a chapter it does not list, and eleven beats still share
one with a chapter they do list (twelve before `s-fazbears-fright` changed).

## Checks (13:01)

- `npx tsx scripts/validate.ts`: OK. Coverage 1046 of 1046: cited inline 663, counter-evidence 111, filed 344,
  outside the story 70, unaccounted 0. The same totals as before the edits; no warning.
- `npx tsc -b`: exit 0.
- `quotecheck.mts ... 3 --weak`: run on the committed tree and on the working tree. The same summary line both
  times (621 phrases; 2 in no record; 0 uncited; 21 weak) and the same three lines for the storyline. Both MISS
  lines are the old false ones in `s-1979`, where the tool cannot pair the two-letter quotation "WA" and so reads
  the prose between two quotations as a quotation; the second of them now shows the re-worded prose ("Inside, the
  Dispatch voice turns out to be ..."), because that is the prose that stands between the same two quotations.
  No new MISS, UNCITED or weak line.
- `wordcheck.py --all`: the same seven lines for `theory.ts` as on the committed file (the chapter id `partners`,
  "1988" in one basis, years in record ids and comments). Nothing new.
- `git diff --stat -- src/data/theory.ts`: 3 lines. Citations and quotations of the three beats were compared by
  script, before and after: the same, in the same order. No marker's count changed.
- Other files show as modified in the worktree (`family.ts`, `story.ts`, `underground.ts`): the writers' own
  round. Their times did not move when the generator ran.
- The branch moved to `ff76de9` while this was done (two commits, for `story.ts` and `underground.ts`).
  `theory.ts` is the same there as in `ee957f3`, so the three lines are the whole difference from HEAD. The
  validator, `tsc -b` and the quote check were run again at 13:07 on that tree, with the same results.

**No marker, record or rival reading was lost.** The file is not committed. `theory.after-r11.ts` in the pipeline
is the file as it stands.

## For the owner

1. **"The newest game" will age.** It is true of the archive as `games.json` has it. A later release would make
   the clause false on the day it is added to that file.
2. **Beat 2 is at 130 words and was not touched.** Every name in it has its word or two already.
3. **`telling.md`** was written again by the same run. Its section B has the twenty beats as they now stand, and
   its two status lines say so. The rest of its notes, and the style guide, are those of 09:45.
