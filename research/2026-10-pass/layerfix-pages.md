# Layer fix: the home page, Theorists & Scott, the Locked Box, Scott & Faith, and the research notes

Fix pass on `src/data/home.ts`, `community.ts`, `box.ts`, `author.ts`, `research/audit-ledger.ts`,
`research/CHANGELOG.md`, `research/README.md` and `README.md`, against `factcheck-9.md` (read in full; its end
re-read at 05:40: no addendum, the file is as saved at 04:53) and round four of `rulings-brief.md`. Nothing is
committed. No other file was edited.

## Findings

**Applied: 53 of 53.** Home 13, community 19, box 9, author 12. **Rejected: none.**

Seven were applied by a different remedy from the one the checker wrote out. The fault is gone in each.

| Finding | The checker's remedy | What I did, and why |
|---|---|---|
| community 3 (`c-henry`) | rename the entry and its claim, or print the name in quotation marks | The owner's ruling: the entry stays under its name. Its `claim` now ends "a name taken from the novels, which no game prints and this archive does not use", and `wrong` opens "The name comes from the novels: no game prints it, and this archive does not use it." (`ffps-credits-cassette-man`, whose note says where the name comes from). No quotation marks were added round the name: they are kept for words in a record's `quote`. The file header no longer grants itself an exception; it says the owner kept this one entry. The name is in no other entry. The other two points were applied as written (Scott's 2015 sentence is given as his words about the first novel; `secret-of-the-mimic-log-build-to-spec` is cited for the change order). |
| community 1 (`c-springtrap-purple`) | `mostly-right`, or keep `confirmed` and change its help | `mostly-right`. Both help texts were changed as well, so that the label fits an entry with nothing of substance wrong: confirmed, "A game says or shows it, or Scott says so in writing"; mostly right, "The core holds as a strong inference; a detail may not". No entry carries `confirmed` now. |
| community 12 (`c-mike-michael`) | settle it by watching the video; until then a community source | The interim source, as written. I cannot check the video and my memory of it is not evidence. |
| home 1, 5, 6, 9, 12, 13 (answers) | answers of three to five sentences | The same content in one or two sentences each, as the prompt requires. Q6 opens "Most likely not"; Q12 says the two interviews are known from machine transcripts. |
| home 13 (Q9) | end on "which is why the model does not say that he is back" | The answer ends on the chapter's own point, "not the whole man", and drops the sentence about the fire. That keeps the phrase "he is back" out of the page even in a denial. |
| home 13 (card 1) | open with "The story's machines begin in a costume maker's workshop." | "The earliest part of the story is set in a costume maker's workshop." No record makes Murray's workshop the origin of all the story's machines; step 1 of the order of events does make it the earliest part. |
| box 8 (guess 4's source) | move the source to another guess, or relabel it | Removed. The page prints a guess's source under "Where it was argued", and nothing that could be checked shows Game Theory's "Why FNAF Will Never End" arguing any of the four guesses. The idea now names its own origin: "from Scott's own joke of 2016". |

## Conclusion-level changes

- **Home, card 1 "The makers": `canon` to `strong`.** That the springlock suits of FNaF3's tapes are Murray's
  work is "most likely" (R2 as corrected).
- **Theorists, "Springtrap is Purple Guy": `confirmed` to `mostly-right`.** No game says that the body in
  Springtrap is the man from the minigame; R1 holds both links as strong inferences, and Scott's remark is a
  machine transcript.
- **Theorists, "The box's meaning changed": `mostly-right` to `partly-right`; the Box page's guess 3: "Mostly
  right" to "Partly right".** One transcribed answer agrees, the 2024 answer takes it back, and R25 puts the
  stand-in at low-medium.
- No identification, date, order or cause changed.

## What changed beyond the report

**One rule applied everywhere: quotation marks.** The brief allows them only round words that are verbatim in a
cited record's `quote` (or quoted in its `claim`). A script (`qc.mts`, not kept) checked all 293 quoted phrases in
the four files. Every phrase that stood only in a record's `notes` was taken out of quotation marks and reported
in the archive's own words:
- `scott-2018-box-meaning-changed`: his reason ("changes the contents of everything that came before", "craft
  this into something better"), in `c-box-changed` and the Box page.
- `scott-2024-box-interview`: "definitely there" and "The progression of the story didn't go there.", in
  `i-2024`, the Box page's answer 2 and step `b-2024`.
- `scott-2018-interview-fnaf4-too-broad`: "the box is tied into this very, very closely" (Box, answer 2).
- `scott-2017-matpat-final-theory`: "obviously not 100%" is now "not 100%", which is the form the record's
  `claim` quotes (three places).
- `scott-2016-box-sarcasm` ("Please do NOT believe every post..."), `scott-2017-one-retcon` ("Never had to retcon
  anything."), `scott-2018-interview-ffps-made-to-resolve-plot-points` ("I worked on that game for a year in
  secret"), `scott-2014-christian-projects-before-fnaf` ("the events of my life").
- Scare quotes round a theory's own words ("returned", "possibly Burntrap", "mature") were removed.

What is left outside a cited `quote` field, and why it stays (32 phrases): 18 that the cited record's `claim`
quotes (for example "not 100%", "Due to leaks.", "too dark", "Thanks for playing!", the clean form of
Nightmarionne's line, "might neutralize the effects permanently", and two post titles); one video title; 7 that
are verbatim in the `quote` of a record cited in the same answer or the same lexicon group, in a field that
takes no tokens; four blurbs on the Faith page, quoted from the archived Hope Animation pages that the step
lists as its `sources`; and the "?" of a teaser, twice.

**The same faults, where the checker did not point.**
- Universal negatives now say what the records can carry ("no statement of his on record here", "in the
  archive's records"), in all three essay files: for example "he never explained", "He never ruled on it by
  name", "the only place Scott uses the theory's name", "no game ties", "Scott never linked them".
- `home.ts`: all twelve answers were rewritten from the chapters' `answer` fields as they stand (one or two
  sentences, the same grade). Card 2 says "five grey, crying children", as the revised storyline does, where it
  said "the ghosts of five children". Card 3's last clause is held to its `strong` grade: "four of the five stay
  on in the four mascots, with a fifth counted beside them as one more" (that the fifth child is the yellow
  bear's is medium, and is left to the Golden Freddy answer). Card 5 quotes the Cassette Man's own words for
  the trap (`ffps-completion-labyrinth`). Card 6 gives the tie to Murray through M.X.E.S., whose letters are
  spelled out on his terminal, and not through the costumes, which are the wiki's comparison.
- `community.ts`: "Vanny is Vanessa" has a neutral claim (it said "rabbit killer" and "security chief"); the
  burnt rabbit is "pieces of a rabbit shell on a bare metal frame" (the record), and the entry ends "does not
  say that he walks"; the voice near the rabbit in Help Wanted is given as the wiki's identification; the
  moment `i-cutscenes` describes the theory and no longer uses its fan label in the archive's voice; the
  credits "give the salvaged rabbit's voice the name" in three entries. `c-box-changed` now gives R25's grade
  for the stand-in (low to medium). `c-henry` says "Part of it fits" where it said "The role fits", and adds
  that the partnership is what the model itself reads into the lines, as the chapter does. The source of
  `c-literal-purple` has the month 2016-12: the cutscenes it argues from were added and ruled canon that month
  (`scott-2016-cutscenes-are-canon`).
- `box.ts`: the two short answers that rest on interviews say so; step `b-teaser` opens "By 27 July 2015"
  (a capture day, as community 19); step `b-fw` no longer says "the same eyes" (its record: that the two pairs of
  dots are one speaker is a reading).
- `author.ts`: "Scott calls himself a Christian" for "is a professing Christian"; the moral map is now said to
  rest on the games' words, with the part his faith adds marked as interpretation (the essay's own promise);
  step `a-beaver` quotes him ("I had faith that God wanted me to create those things anyway") where it
  characterised him; the superlative about The Pilgrim's Progress game is gone; the lexicon line for the
  volunteer is now `ffps-completion-right-where-you-want-to-be`, whose quote has the words the gloss reports.
- `research/CHANGELOG.md`: the additions the prompt asked for, in "How the pass was run" (six and four
  fact-check reports, one revision pass by every writer, round four, the records pass, the one new record), and
  seven lines of the entry corrected to round four (the plush "of FNaF4's design"; LEFTE and RASC "marked
  Fazbear Entertainment, Inc"; the seven counts; "may have tampered"; the sealing; the order of the 1983 week
  and the child outside; where 1986 comes from), with the four page summaries brought up to this pass.
- `research/audit-ledger.ts`: two closing clauses touched for round four (`a-golden`: the fifth body is told as
  reported, four of seven counts; `a-savehim`: after the 1983 week and before the five, both by convention).
- `README.md`: the sentence "Names found only in the books are not used" now names the one exception on the
  Theorists page. `research/README.md`: the description of the changelog entry.

**Verified outside the records.** Steam's store API: The Desolate Hope, 5 May 2014; Five Nights at Freddy's,
19 August 2014 (author 6 and 7).

## Checks

- `npx tsx scripts/validate.ts`: OK (1,044 records, 1,044 of 1,044 accounted).
- `npx tsc -b`: clean.
- `wordcheck.py`, hits in my files, all read and kept on purpose: the book name twice, in the name and claim of
  `c-henry` (the owner's entry); "Miketrap" four times (the theory's name once, Scott's quoted word three times);
  five under "partners/founders", all in `c-henry` (the fan claim, a denial, the model's own reading as the
  chapter states it, and the chapter id `partners`); "isn't about" in Hope Animation's blurb, a quotation;
  118 hits for years after 1987, every one a real-world date (posts, releases, interviews) and none a story
  date. No hit under "afton after fire", "builder", "printed misuse", "hedge stacks" or any other rule.
- Quote check: 261 of 293 phrases are verbatim in a cited record's `quote`; the other 32 are the kinds listed
  above. Records are still being edited, so this was re-run last of all.
- The storyline pass was in when I finished (`0b55708`, 05:22). The six cards were compared with its beats.
  `story.ts` and `apparatus.ts` were still uncommitted at 05:40; the answers of `killer` and `open` were read
  from the working tree and did not change between 04:55 and 05:41.

## For the orchestrator

1. **The new record is not in the evidence files.** `security-breach-credits-vanessa-vanny-two-parts` exists
   only in `$NOTES/new-record-sb-credits.json`; the validator still counts 1,044. The changelog names it, as
   asked. When it lands: `README.md` says 1,044 twice, and the changelog's "703 to 1,044 records (341 added...)"
   needs the final counts. `c-vanny-vanessa` does not cite it (the id would fail validation today); one sentence
   in its `wrong` would do: the credits list the two as separate parts with separate performers, which settles
   neither reading. R19's wording still says the cast credits "are not in the archive: do not cite them".
2. **Interface strings that now disagree with my data** (`$UI`): `Home.tsx:123`, "Six things the evidence
   establishes" (the cards are one canon, three strong, two theory); `Home.tsx:103`, "the model's answer in a
   sentence" (one or two); `Box.tsx:97`, "Where it was argued" (guess 4 has no source now, which the page
   handles); `Box.tsx:39` and `Author.tsx:87` still print real-world dates as "Printed date" (interface 16),
   which matters more now that three summaries begin "By 16 August 2016". The Theorists page builds its tally
   from the data, so "confirmed" drops out of the filter by itself.
3. **Chapters that now differ from the pages, or from the storyline.** Not mine to change. The first six say
   what the checker asked the pages not to say; the last is a difference between the chapters and the storyline.
   - `theory.ts`, thesis: "under its newest building" (no record; home 7). The cards say "the Mega Pizzaplex".
   - `ucn`, `answer`: "and he runs the night", flat (R16 (3) as corrected). The home page does not repeat it.
   - `plush`, `answer`: "The model reads" where R5 is a lean; the home page says "leans".
   - `open`, the box entry: "The model treats it as closed for good", with no grade; R25 is medium, and the
     home page says "most likely".
   - `digital`, `tension`: "No game says whose board it was" (the fault of home 7 and community 10).
   - `faith`: "There is no church in them", "Ultimate Custom Night never says \"Hell\" at all", "a common
     phrase that Scott has never linked to the verse": the flat universals of author 10, which the Faith page
     now words as "in the archive's records".
   - `springtrap`, `murders` and others: "five ghosts", where the storyline now says "five grey, crying
     children".
4. **Records whose `quote` is too short for what the pages used to quote.** If the fuller words are wanted in
   quotation marks, the `quote` fields need them: `scott-2017-matpat-final-theory` ("obviously not 100%"),
   `scott-2018-box-meaning-changed` (his reason), `scott-2024-box-interview` ("The progression of the story
   didn't go there."), `scott-2018-interview-fnaf4-too-broad` (the sentence about the box),
   `scott-2016-box-sarcasm`, `scott-2017-one-retcon`, `scott-2018-interview-ffps-made-to-resolve-plot-points`,
   `scott-2014-christian-projects-before-fnaf`. `ucn-nightmarionne-lines` prints the stutter in its `quote`, and
   every layer quotes the clean form from its `claim`.
5. **Record notes that contradict the fixes** (from the checker's list; each re-opened at 05:42 and still so):
   `scott-2015-fnaf4-box-pieces-put-together` ("The paragraph before it": it is the same paragraph);
   `scott-2024-box-interview` ("the three answers agree only..."); `fw-unused-open-box` (title "opened and
   empty", and a claim that says which way it points); `scott-2014-desolate-hope-human-life` ("his last major
   pre-FNaF game", no source); `ruin-mimic-lair-mcm-mascot-suits` (note: "the firmest in-game tie"). The title of
   `ucn-death-coin-fredbear` has been corrected since the report.
6. **Two sources nobody has watched.** Game Theory, "Why FNAF Will Never End" (2015-09-01), was the source of
   the Box page's guess 4 and is now attached to nothing: someone who has seen it can attach it to the guess it
   argues. "Mike Schmidt is Michael Afton" now has a community source dated 2016-12; if "The FINAL Theory", part
   2, argued it, the source should go back and `c-final-theory` should list it as a fifth claim (three of five
   would then hold). The date
   of Game Theory's "FNAF 6, What was in the BOX?" (2018-02-04) could not be checked by the checker either.
7. **The chapter id `partners`** is in `community.ts` as `modelSection`, and so in the address the entry links
   to. Renaming it is not mine.
8. **The old interface** in the theory worktree, `src/pages/People.tsx:9` and `10`, still has "The partner and
   the daughter he lost".

## Against the records as they now stand

Third pass, 3 October, 09:20 to 10:15. Started from `d059017`; the records were read from the working tree, which
the records editor was still changing (last looked at 10:06). Files: `home.ts`, `community.ts`, `box.ts`,
`author.ts`, `research/CHANGELOG.md`, `README.md`, and one sentence of `research/README.md` (see "Decisions").

### What changed under the four files

`changed-records.py … 3e780e2`, run at 10:06 against the working tree:

| File | Records cited | Changed since 06:18 | Entries changed |
|---|---|---|---|
| `home.ts` | 54 | 33 | 8 of 18 (4 cards, 4 answers; 9 sentences) |
| `community.ts` | 162 | 98 | 14 of 51 (10 theories, 4 moments) |
| `box.ts` | 30 | 18 | 3 of 18 |
| `author.ts` | 40 | 16 | 6 of 29 |

Every entry was read against the present `title`, `claim` and `quote` of each record it cites (not only the
changed ones), then against the final chapter in its `section` or `modelSection`, the storyline, and rounds four,
4b and 4c. Round 4b is newer than the fix pass (05:45 against 05:43), so this was its first check against these
files.

### Entries changed: what it said, what it says, why

`home.ts`
1. Card "The makers", the date's basis. Said the year "is on a work order in the technician's van". Says "is on a
   Fazbear work order". `secret-of-the-mimic-work-order-1979`: the van is the wiki's caption.
2. Card "His own children". Said "Circus Baby, a machine of Afton's design". Says "Circus Baby, by its features
   the machine whose design "Mr. Afton" answers for". `sl-intro-mr-afton-board`: "she" is not named in the audio.
3. Card "The trap and the fire" (canon). Said "The building burns". Says "A fire breaks out in the pizzeria".
   `ffps-completion-fire`, as reworded after 09:46: three machines are shown burning in interiors, and that the
   fire destroys the building is the wiki's account.
4. Card "The copies". Said "man-shaped". Says "person-shaped". `hw-rabbit-figure-appearance`.
5. "Is Mike Schmidt Michael Afton?". Said "The games give only a first name, Mike, on FNaF1's cheques"; the
   cheques print "Mike Schmidt". Says "All the games give for it is a shared first name and the word "Odor" …",
   and "FNaF2's guard Fritz Smith" for "the 1987 guard" (his slip has no date). `fnaf1-paycheck-night5`,
   `fnaf2-pink-slip-fritz-smith`; chapter `open`.
6. "What is the rabbit in Help Wanted…". Said "prefers that to a copying program". Says "leans to that over a
   copying program". The marker of chapter `digital`.
7. "Is Vanny Vanessa?". Said "whatever is giving her orders" and "the beta tester". Says "whatever writes to her"
   and "the tester". Chapter `vanny`, R19; the beta testing in the records is the tape speaker's (`hw-tape-11`).
8. "What is under the Pizzaplex…". Said "Burntrap in the game's files" and "which the model takes for his
   second, violent machine". Says "(known as Burntrap, a working name that Scott has said now stands)" and "most
   likely his second, violent machine". The owner's first-use form; the marker of chapter `mimic`.

`community.ts`
1. `c-phone-guy-purple`, `wrong`. "Sister Location's board addresses the designer" is now "an unnamed man in
   Sister Location's opening addresses the designer" (`sl-intro-mr-afton-board`: "board member" is the wiki's
   label). The last message "ends in a tune, a scream and static" is now "as its transcript describes it … ends
   in music, a scream and static" (`fnaf1-call4-phone-guy-attacked`).
2. `c-bite-87-cc`, `wrong`. "two days before release the hidden digits … changed" is now "by two days before
   release … had changed" (`scottgames-site-fnaf4-html-83`: the capture gives a latest date, not the day).
3. `c-dream-theory`, `right`. "the tone that the transcripts describe" is now "that a fan wiki describes"
   (`fnaf4-flatline`).
4. `c-miketrap`. `right`: "Father and son can be mistaken for each other, and the games say so" is now "That
   line has the son taken for the father" (`sl-golden-freddy-cutscene-they-thought-i-was-you`). `wrong`:
   "Springtrap walks in after it" is now "a rabbit-eared figure steps out of the dark as it ends"
   (`sl-golden-freddy-cutscene-springtrap`).
5. `c-ucn-michael`, `wrong`. "the roster's figures are effigies" is now "the model treats the roster's figures
   as effigies, because the roster lists …" (`ucn-roster-two-forms-at-once`; chapter `ucn`).
6. `c-glitchtrap-soul`. `right`: "a man's shape" is now "a person's shape" (`hw-rabbit-figure-appearance`).
   `wrong`: "which is what a copying program would do" is now "If that voice is the figure's own, it is what a
   copying program would do" (`hw-glitchtrap-uses-tape-girl-voice`: that the clip is its own voice is a reading).
7. `c-vanny-vanessa`. Verdict mostly right, now still open (see "Decisions"). `right`: "The model reads one
   woman, acting under the control of whatever is giving her orders, at medium confidence" is now "The name and
   the recordings carry the model's reading: the woman in the costume is most likely Vanessa, acting under the
   control of whatever writes to her, at medium confidence"; the page with the mask on the floor now ends "the
   model takes her for Vanessa, but two women who look alike would leave the same page, so it counts for neither
   reading". `wrong`: the cast list is now given "as a fan wiki transcribes the credits". R19, round 4c;
   `security-breach-ending-redemption`, `security-breach-credits-vanessa-vanny-two-parts`.
8. `c-burntrap-afton`. `wrong`: "The game never names the figure or lets it speak" is now "In the dialogue,
   messages and cutscenes reviewed, the figure has no lines and nobody names it"
   (`security-breach-burntrap-name-not-in-game`). `scott`: one sentence added, so that "a working name that
   Scott has said now stands" has its record and its transcript flag in the entry
   (`scott-2024-interview-placeholder-names-canon`).
9. `c-gregory-robot`, `wrong`. "has him on the radio from somewhere else" is now "a second Gregory voice, which
   the model takes for the boy himself, says on the radio that he is not at the Pizzaplex"
   (`ruin-real-gregory-not-at-pizzaplex`; chapter `mimic`).
10. `c-mimic-burntrap`. `right`: "the guard set on it carries a name that is spelled out on Murray's own
    terminal" is now "is called M.X.E.S., initials that head a terminal in Murray's own house"
    (`secret-of-the-mimic-mxes-acronym-on-screen`; `ruin-gregory-mxes-explanation` is now cited for the name).
    `wrong`: "the burnt rabbit", bare, is now "the burnt rabbit under the Pizzaplex" (R26).
11. `i-retcon`. "and his example is: "I used SL …"" is now "and in the same post he writes". His stated example
    of a clarification is the adult-theory teaser (`scott-2017-adult-theory-teaser`).
12. `i-troll`. "looks back on the Pizzeria Simulator misdirection" is now "looks back on Pizzeria Simulator … He
    does not say what the troll was. It is usually read as his announcing that game as "something lite and
    without much consequence"" (`scott-2018-ffps-troll-lesson`, `scott-2017-ffps-lite-announcement`; the second
    id joins the entry's `evidence`).
13. `i-lunatic`. Title "Scott's own photo as the in-game "lunatic"" is now "… for the in-game "indie
    developer"". The summary said the intro "shows a photo of Scott as the indie developer"; it now says one
    poster "is a photograph of Scott, whom the game does not name", and gives "for this indie developer" as
    Scott's own words (`hw-intro-indie-developer-poster`, `scott-2019-indie-dev-photo`).
14. `i-face`. Title "Family photos aren't clues" is now "Family photos aren't clues, he implies"; "an edited
    photo of his own son" is now "a photo of his own son" (`scott-2019-fnaf4-photos-no-lore`, certainty
    `implied`; `scott-2019-ucn-child-face-jason`).

`box.ts`
1. Answer 1. "The transcripts describe a tone" is now "A fan wiki describes a tone" (`fnaf4-flatline`). FNaF
   World's Crying Child "is drawn as the weeping child of the FNaF2 and FNaF3 minigames and not as FNaF4's boy"
   (`fw-crying-child-character`: the record says how it is drawn, not who it is).
2. Answer 2. "The answers of 2018 and 2024 agree on one thing" is now "On this archive's reading the answers …
   agree on one thing". The sentence used to stand in the notes of `scott-2024-box-interview`; it no longer does.
3. `b-fw`. The Crying Child again: "drawn as …".

`author.ts`
1. Answer 2. "rest for the dead children, Hell named for one old friend, who is most likely the man who killed
   them" is now "rest for the dead, Hell named for one old friend, and for the place itself, forgetting. Most
   likely the dead include the five murdered children, and the old friend is the man who killed them." Chapter
   `faith`; `ffps-completion-peace-perhaps-more` ("those he is speaking to").
2. `a-fnaf1`. "a last phone message that ends in a scream" is now "whose transcript ends in a scream"
   (`fnaf1-call4-phone-guy-attacked`).
3. Lexicon, "Rest for the dead". "what the dead children are owed, and what the Cassette Man says they cannot
   find" is now "what the dead are owed, and what the Cassette Man says "those tiny breaths of life" will never
   find as they are, in the machines; the model reads them as the dead children" (`ffps-insanity-tiny-breaths`).
4. Lexicon, "Something beyond". "Only one line in the archive's records reaches past rest" is now "One line
   reaches past rest, to "perhaps more". What that is, the speech does not say" (the "only" is no longer in the
   notes of `ffps-completion-peace-perhaps-more`).
5. Lexicon, "Hell, the Devil, the monster". "never says Hell" is now "in those records, never says Hell" (R16).
6. Reading 3. "he says of the children" is now "Of "those tiny breaths of life" in the machines he says"; "The
   fire is his attempt to end that" is now "The model reads the fire as his attempt to end that; the game does
   not show who lights it" (`ffps-insanity-tiny-breaths`, `ffps-completion-fire`; beat `s-trap-fire`).

### Decisions

- **`c-vanny-vanessa` is now "open".** The page's own scale keeps "mostly right" for a core the model holds at
  high or strong confidence. R19 (1) is medium after round 4c, with two records against it and one of them
  unexplained. Every other entry is graded that way: where the model holds the opposite at medium
  (`c-cc-golden-freddy`) the verdict is "open", not "wrong". The text says which way the model leans ("most
  likely Vanessa … at medium confidence"). One word to revert, if the owner disagrees.
- **The owner's three edits** (`71ab718`, `ead932c`) read right in place, with two repairs to `c-vanny-vanessa`:
  the page with the mask on the floor stood in `right` among what "the game points at", against R19's "not a
  third leg", and the cast list lacked its provenance. `c-ucn-hell` and the first-use form in
  `c-burntrap-afton` stand as written.
- **`research/README.md`**, which is not in the list for this pass, has one sentence changed, because it
  summarises the changelog entry and said only "a fourth round that corrected the rulings' wording without
  changing a grade". `research/audit-ledger.ts` was not touched.
- **Left as they are.** "Murray's Costume Manor works under contract for Fazbear Entertainment" (card 1): the
  record now speaks of Edwin Murray as a contractor, and the beat and the chapter `springlocks` say the firm, on
  that record. "He dies inside a yellow rabbit suit" and "five ghosts": R12's rule allows both outside
  `springtrap`. The four Hope Animation quotations on the Scott & Faith page are from archived pages, not from
  records, as before.

### The changelog and the READMEs

- Counts, each checked against the validator's first line and the data: 1,045 records (342 added), 170 images (97
  added), 166 people entries, 78 ties, 43 events, 23 deaths, 28 places. Ties with the records' own words: see
  "Not mine to fix", 1.
- "How the pass was run": rounds four and 4b (46 and 22 corrections, no grade moved); the records editor's first
  pass; the two memos and the final pass; the cast credits and round 4c (one grade); the second records pass
  (checked: no record has a year after 1987, and all 111 approximate dates state a kind); the layers' last pass;
  the verification, written as done.
- Out of date and mended: the Burntrap and Glitchtrap first-use forms; Vanny at medium with the cast credits at
  less weight; M.X.E.S. "most likely" Murray's; FNaF1 as "a November after 1987", with the arithmetic shown;
  "the room with the suit" for the room he dies in; the S.C.U.P. sheet for "the Scooper's sheet" (the record
  says the sheet does not use the word); FNaF World's Crying Child "drawn as". Added: Help Wanted 2's place and
  pay (round 4c); a line on the records editor's rewording (about 950 fields in 611 records, from the brief); a
  sentence each on what this pass changed on the Home, Theorists and Box pages.
- The interface is not described. No chapter title that changed is named in either file.
- `README.md`: 1,045 twice; "how this was built (the method)"; an approximate date says how it is known; a tie
  may give the records' own words.

### Checks

- `npx tsx scripts/validate.ts`: `evidence=1045 credits=170 people=166 places=28 relations=78 events=43 theory=35
  parts=10 beats=20`, coverage 1045/1045, `OK`.
- `npx tsc -b`: clean.
- `wordcheck.py --all`: nothing new in these files (the same categories and counts per file as on an export of
  `d059017`). The hits are the baseline: the book name twice and
  "partner", "partners", "founders" in `c-henry`; "Miketrap" four times; real-world years; the Hope Animation
  blurb.
- Quotation check (rewritten for this pass; every phrase in double quotes against the `quote` of a record cited
  in the same field or entry): 284 verbatim; 16 found in a cited record's `claim` or `title` (all known kinds:
  the stuttered Nightmarionne lines, words a claim quotes, a video's title); 4 not in any record, the Hope
  Animation pages.

### Not mine to fix

1. **Ties with the records' own words.** The owner's count is 34, which is `relations.ts` at HEAD. The working
   tree has 35 (10:08): `vanessas-father-bill` to `vanessa` gained one in the people editor's uncommitted pass.
   The changelog says 35. If that edit does not land, the number is 34.
2. **`ffps-completion-fire` moved after the storyline's final pass.** Its claim is now "a fire breaks out in the
   pizzeria, and three salvaged animatronics are shown burning", and its note says the shots are interiors and
   that the fire destroying the building is the wiki's account. "The building burns" and "stays as it burns"
   stand in `theory.ts` (thesis, beat `s-trap-fire`), `people.ts`, `relations.ts`, `deaths.ts` and `timeline.ts`,
   and chapter `ffps` has "as the building goes up". Whether those stand is the lead author's call.
3. **`rulings-brief.md`, R20 and R26**, still print the first-use form as "(the game's files call it Burntrap,
   …)"; the files use the owner's later form, "(known as Burntrap, …)". R31's wording still says "only the
   Scooper is Afton Robotics'", where `ffps-scup-blueprint` now notes that the sheet does not use the word.
4. **`changed-records.py`** prints "!! id: cited but not in the evidence files" for `community.ts` and
   `author.ts`: it reads the `[[id]]` in their header comments. Harmless.
