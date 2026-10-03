# Verification 4b: reckoning.ts, afterimage.ts after the readability round

Checked: `git diff 42366ee..HEAD` on the two files, as they stand at `17816ee`; `reckoning.ts` is unchanged since
`c072772` (13:17) and `afterimage.ts` since `b9fbbc8` (13:29). The diff has 13 hunks and 24 changed strings in
eight chapters; `cover-story` did not change. That is 40 changed or new sentences, counting one heading and two
table cells (ffps 1, salvage 3, ucn 10, faith 1, digital 3, vanny 13, pizzaplex 9; `fazbears-fright` has cuts
only), 12 sentences cut outright, three folded into others, four tags replaced by one sentence, and clauses cut
inside the rest. Each changed or new sentence was read against the `claim` and `quote` of the records it cites,
and each cut against the place where the memo or the writer says the reader still finds it. All 61 records cited
in the changed passages, before or after, were read in the working tree (evidence last committed at `6d6639a`,
12:04; nothing under `src/` is uncommitted). Rulings read as they now stand: R13, R14, R16, R18, R19 and R28,
with rounds 4c and 4d. Also read: `BRIEF-readability.md`; `reader2-memo.md`, section 3 (changes 8, 12, 13, 22 and
24), section 4 and the appendix rows; the "Readability round" sections of `final-5.md` and `final-6.md`. I also
read the fact check's items on the passages that changed (`factcheck-5.md`, `factcheck-6.md`) and my own thirteen
findings, to see whether a cut had taken out an earlier mend. One had: `faith` 1. `vanny`, `pizzaplex` and `ucn`
were read from the top in the reader's view (`chapter.mts`), and the other five at their changed places.

The three commits touched only the passages named: five places by the second reader (`ee957f3`), and the
writers' passages as listed.

Tools, run on the working tree at `17816ee`:
- `quotecheck.mts … 3 --weak`: 616 quoted phrases; 2 `MISS`, both in beat `s-1979` (the known fault); 0 `UNCITED`;
  21 weak. Seven weak lines name my chapters: the six of the first report, and `ucn.tension`, "my truest friend",
  which the tool finds first in the notes of `ffps-catalog-rockstar-bonnie`. That line came with the new record,
  before this round's base. The phrase is verbatim in the `quote` of `ucn-rockstar-bonnie-truest-friend`, cited
  in the same sentence.
- `wordcheck.py --all`: in my files it prints only the years of Scott's statements, all in `reckoning.ts`.
- My own check of the 24 changed strings: 28 quoted phrases. 27 are verbatim in the `quote` of a record cited in
  the same string; the other is `never prints "Springtrap"`, which quotes no record. Every citation points at a
  record that exists.
- Per chapter, the text cites the same set of records at `42366ee` and now (`[[ ]]` ids: fazbears-fright 33,
  ffps 43, salvage 37, ucn 44, faith 18, cover-story 31, digital 40, vanny 36, pizzaplex 32). `counterEvidence`,
  `further`, `seeAlso` and `confidence` are unchanged in all nine.
- `scripts/validate.ts` (it writes nothing): `OK`; coverage 1046/1046, unaccounted 0, the breakdown the writers
  report.
- A scan of all nine chapters for a doubled word, a missing space, a tag in another form and a marker used twice
  in one sentence: nothing.

In the `text` and `fix` lines below, quotation marks are written plain; each is `\"` in the file.

## Findings

### faith 1. WORDING
- where: `faith`, body, the paragraph that begins "Two more voices are heard in Ultimate Custom Night", second
  sentence. It bears on the fifth.
- text: `One refuses: "I will never let you rest." [[ucn-happy-frog-never-rest]]`
- problem: The cut took out "in rare lines that two characters speak with a second, whispering voice under them",
  and those words were a mend. The fact check asked for such a clause (`factcheck-5.md`, `faith` 2, `overreach`,
  ninth of its ten most serious: "Two characters' rare lines are told as one voice"). The paragraph now does that
  again. The line quoted here is Happy Frog's rare line, "whispered over by another voice" (the record's claim).
  Three sentences on, "the voice that holds him has turned down its own release as well
  [[ucn-orville-he-tried-to-release]]" rests on Orville Elephant's. The chapter no longer says that two
  characters speak these lines, or that the one voice is a whisper under both. `final-5.md` says the whisper is
  told in `ucn`, and it is ("A second voice whispers under the rare lines that refuse release"). A reader who
  comes straight from `ucn` has it; the paragraph alone joins two speakers' lines and gives no ground, and a
  reader who opens its two records finds Happy Frog and Orville Elephant. R28 has "a voice refuses release" as
  stated, which covers "One refuses"; R16 (3) gives the ground in the same sentence ("a second voice whispers
  under three rare lines that refuse release"). This is the lightest kind of finding, and the one judgement call
  in this report. The fix is the cut clause, which was written for the fact check and stood through my first
  report and round 4d.
- fix: `One refuses, in rare lines that two characters speak with a second, whispering voice under them: "I will never let you rest." [[ucn-happy-frog-never-rest]]`
  The rest of the paragraph stands. It goes from 109 words to 123; it was 147.

## Counts

1 finding: 0 WRONG, 1 WORDING, 0 SLIP. It is in `faith` and came in with `c072772`.

## Clean

`fazbears-fright`, `ffps`, `salvage`, `ucn`, `digital`, `vanny` and `pizzaplex`: nothing found in what changed.
`cover-story` did not change.

## The four checks of this round

### Nothing lost

The second reader's five places (`ee957f3`). The memo's "loses" lines hold for four; the fifth is out of date and
the thing it guards is still there.
- 12, `fazbears-fright`, tension: Scott's "complex" and the surviving alternative. Both stand in the box's second
  column, "It held for the five", with the fuller quotation and the same record. As the memo says.
- 13, `ffps`, tension: the line for an outsider, and "stays at most likely". The franchisee section has both lines
  with their records, "the line for the other reading, an outsider nobody planned for", and "He is most likely".
  As the memo says.
- 22, `ffps`, heading: "most likely" is the section's own marker and R13's ("most likely Michael").
- 24, `vanny`, tension: "the model has no account of it" is now said in the answer only, in new words ("The
  model has no account of one page"). Why the page cannot be put aside is in "One woman, or two". As the memo
  says.
- 8, `pizzaplex`, answer: "Vanessa may have been freed". The memo names four places that still say it. After the
  writers' round three of them do not: the table's last cell, the tension, and `vanny`'s answer. It is still said
  once in `pizzaplex` ("For Vanessa the model reads the Princess Quest ending: she may have been freed, on signs
  seen only through the mask") and once in `vanny` ("Vanessa may have been freed, and the signs of it are few"),
  each with "may".

The writers' passages. Each "what went, and where the reader still finds it" in `final-5.md` and `final-6.md` is
so. For one of them the place is another chapter, and that one is `faith` 1.
- `salvage`: the credits left the caption, and stand in the table's cell and the section's first sentence, each
  with the record. The full "it's still me" line is in `ffps`, and `killer` sets it off whole. The full "little
  souls" line is in `funtimes` with the same reading, and "I will make you proud, daddy!" stays, as `ffps` sends
  the reader here for it.
- `ucn`, tension: all 15 citations stay, and all 13 `counterEvidence` records are still cited in it. "Two more of
  its answers are thin" is under the box ("some of the answers are weak"). "I always come back" is in the table.
  "Hard to say to her murderer" is in the table ("Easier said to Michael than to her murderer"). The reasons the
  three lighter pulls are light are now two clauses in their own sentences. The last sentence now says outright
  that the coin and the golden mask stand against the lean to the fifth child, which is how the section "The one
  you should not have killed" tells both.
- `faith`: both records are still cited. The two half-quotations that went are in `ucn` in full. The clause that
  went is told in `ucn` and nowhere in `faith`: `faith` 1.
- `digital`, tension: all nine citations and all seven `counterEvidence` records stay. What went is two of the
  model's own answers, so no doubt went with them. "Murray's program on a company board" is under the box and in
  "what would change this"; the old hardware is in the first paragraph.
- `vanny`, answer: the fourth sentence is in the "One woman" card ("the model takes her for Vanessa") and in the
  last paragraph of the Princess Quest section.
- `vanny`, Princess Quest: compared sentence by sentence with the old section. Nothing went.
- `pizzaplex`: "The game gives six endings and no ruling between them" is in the section ("No game says which
  happened"). The alley scene and the rooftop page are in the table's rows. "The model says only …" is the
  answer's last sentence and the body's last paragraph. All three `counterEvidence` records are cited in the
  tension.

R19's four things in `vanny`, each said once:
- the page is shown: "The page after the credits is this one", with the figure;
- "It counts against one woman in full." (the section "One woman, or two");
- "the model counts it against one woman, at less weight than the page" (the tension, untouched);
- "The model has no account of one page" (the answer).

### No marker changed strength, and none moved

- `ffps`: "most likely" in the new heading, as in the section.
- `salvage`: "the model reads" twice, on the same two readings.
- `ucn`: "weakest point", "only answer", "a step the model rates low", "suits either man", "lighter pulls" and
  "rated low" stand on the claims they stood on.
- `digital`: "if it is the figure's own", "is read to speak", "What answers them is weak", "a margin and not a
  refutation".
- `vanny`: both "Most likely" in the answer; "if there is one"; "The model reads these games as one fight";
  "whether it worked is open"; "most likely the later of the two"; "may have been freed"; "which names no game".
- `pizzaplex`: "most likely the aftermath"; "the model reads the Princess Quest ending: she may have been freed";
  "together they make the underground route the most likely". The last paragraph has "reads" and "may" in one
  sentence, on two claims, as the old answer had.

### The tag said once (`vanny`, Princess Quest)

It holds. The three scenes the sentence names are the three that the records hold as descriptions, and the same
three the fact check named (`factcheck-6.md`, `vanny` 2): `security-breach-pq3-help-wanted-hub-trapped-door`
("By the wiki's account (not watched)"), `hw2-faz-force-ending` ("the scene itself was not watched") and
`ruin-vanny-hideout-glitchtrap-shadow` ("By the wiki's plot summary").
- Every sentence that tells one of them names it: "The third game's Princess …"; "Help Wanted 2's main ending
  has …"; "in RUIN … on the hideout wall"; "In that hideout …".
- Nothing described is told before the sentence. The first paragraph has the Princess Quest ending's page, which
  was viewed, and three staff messages.
- Nothing else in the section needs the tag. The fourth game's two records carry no such note (a screenshot was
  checked for the trade, and the hero image is from the scene of the crush). The record of the glitched
  instruction screens carries none. RUIN's ending on the hill was read from a screenshot.
- The fourth game is "its secret ending", so it cannot be taken for "Help Wanted 2's main ending".
- One sentence holds a described scene and one that is not: "Help Wanted 2's main ending has a rabbit-costumed
  arm …, and the rabbit in the code glitches that game's instruction screens". A reader can at most take the
  second for described too, which is the safe side.
- The tension, outside the section, keeps its own "(as described)" on `hw2-faz-force-ending`.

Writer 6 put the sentence at the end of the section's first paragraph and not at its head. Since no described
scene stands before it, that does no harm.

### The sentences the writers list as not made only of the passage's own words

All 13 of `final-6.md` (7.2) and the five of `final-5.md` (the rearranged sentences of `ucn`'s tension, "Orville
Elephant, one of the roster:", `faith`'s "One refuses", and the three `salvage` clauses) were read against their
records. Each says what its record says. `faith` 1 is about what its paragraph now leaves out. The two to look at
hardest:

- `vanny`, `The way out, if there is one, is an arcade game: the ending with the mask on the floor is reached by finishing it [[security-breach-ending-redemption]].`
  Supported. The record's claim opens "After beating Princess Quest 1-3", and its location is "'Redemption'
  ending (complete Princess Quest 1, 2, 3; 3 stars)". The clause says how the ending is reached and nothing about
  what the game does to her; "if there is one" still governs the sentence. It agrees with the "One woman" card
  ("the ending reached by finishing an arcade game"), with `pizzaplex`'s table ("With the three Princess Quest
  arcade games finished") and with beat `s-pizzaplex`. It is the chapter's second telling of how that ending is
  reached, since the card has the first; that is a matter for rule 5 and no fault. If it goes, the sentence is
  `The way out, if there is one, is an arcade game.` and the record stays cited in the card.
- `digital`, `The greeting is a borrowed voice if it is the figure's own, which is how Murray's copying machine is read to speak [[secret-of-the-mimic-log-turn-around]] [[ruin-mimic-reuses-gregory-lines]].`
  Supported. It is the old clause with "The greeting is" before it. "If it is the figure's own" keeps what R18
  and the record's note require ("That the clip is the figure's own voice is a reading"). "Is read to speak" fits
  both records, each of which gives the borrowing as a reading ("is the usual reading"; "is inference"). The tag
  "(a fan wiki's account)" stays on the greeting in the sentence before, where the identification is made. "A
  mark of his" in the next sentence still points at Murray.

Two more, because the wording moved furthest from the old:
- `vanny`, "Two women": "the plain reading of the rooftop page" is truer to the record than the old "a page on
  which one stands and the other has fallen". The page shows the woman on the roof alone; the fall is on the
  pages before it (`security-breach-rooftop-vanessa-alive`, notes; `factcheck-6.md`, beats 1). "Fits" for the
  cast list is as round 4d has it.
- `pizzaplex`, tension: "The front-door ending" is the record's "Leaving by the front entrance" and the table's
  row. "On which half of the model's account rests" says again what the section says ("one route for the
  building, another for Vanessa"). Both tags are in place.

## The three chapters read from the top

`vanny`, `pizzaplex` and `ucn`: no damage from editing. Every pointer has its target: "as the last section says"
(`ucn`, the section "The weakest point: the old man's line"); "the giant silhouette shown above" (`vanny`, the
hero image); "In that hideout" (the hideout wall, in the sentence before); "The front-door ending" and "the
rooftop ending's last page" (`pizzaplex`, the table's rows). Each answer and each tension agrees with its body.
Nothing still points at a sentence that was cut.

## Seen and not counted

Nothing beyond what is said above: the out-of-date "loses" line of change 8, and the quote tool's seventh weak
line.

## For the adjudicator

- Two records are listed under "What pushes back" and are no longer named in the paragraph below the list. The
  page (`ChapterView.tsx`, in `ui` and `integ`) prints, for three records, "3 records cut against this chapter.
  The model keeps them in view instead of explaining them away.", then the three rows, then the `tension` under
  the label "How the model handles it". After cuts 12 and 13, `fazbears-fright`'s tension has no word on
  `scott-2018-interview-fnaf3-ending-unanswered`, and `ffps`'s has none on `ffps-scrap-baby-not-expected`. Both
  are handled in the body (the box's second column; the franchisee section), so nothing is lost by the test set
  for this round, and the second reader's brief allowed it. They are the only two of the 42 `counterEvidence` records in my
  nine chapters with no clause in their tension. The fact check asked for a clause each (`factcheck-5.md`,
  `fazbears-fright` 3 and `ucn` 1), and the writers of this round kept one for every record. If the list and the
  paragraph should match, these are the cut sentences, word for word, to put back at the end of each tension:
  - `fazbears-fright`: `Asked in 2018 (a transcript) which FNaF3 ending happened, Scott said the answer was "complex" and did not give it [[scott-2018-interview-fnaf3-ending-unanswered]].`
    It repeats the box, which is why it was cut.
  - `ffps`: `On the franchisee, Scrap Baby's "You're not who I expected to see..." [[ffps-scrap-baby-not-expected]] is the line for an outsider.`
  Both still say what their records say.

## Could not check

- The built page. I started no server. What the page prints under "What pushes back" I read in the component, in
  the `ui` worktree (`866ba26`) and in `integ` (`e909aea`).
- Anything that needs listening or play: the second, whispering voice under the rare lines, and every scene held
  as a description.
- `tsc -b`. I did not run it, because it may write build files into the worktree.
- Anything after 14:18, when both files, the evidence and `HEAD` were as described above. Nothing under `src/`
  has changed since this round's last commit (13:31), and I wrote nothing in the worktree.
