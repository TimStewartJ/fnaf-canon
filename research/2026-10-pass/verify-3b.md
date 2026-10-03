# Verification 3b: family.ts, murders.ts, nightshift.ts, after the readability round

Checked: `git diff 42366ee..HEAD` for the three files, at HEAD `17816ee` (13:31, 3 October). `src` was clean and
did not move while I worked. The diff is 14 passages in eight chapters, from three commits (`ee957f3`,
`b9f05a1`, `17816ee`): `afton-house` 3, `plush` 1, `nightmares` 3, `murders` 1, `golden` 1, `november-1987` 2,
`fnaf1-restaurant` 2, `springtrap` 1. `bite` and `child-outside` have no change in the range.

- **Sentences.** 30 changed or added (one of them a heading) and 34 old ones gone or re-made, by a sentence
  diff. Each changed or added sentence was read against the claim and quote of the records it or its paragraph
  cites, as they stand now, and against the rulings with round 4d (R3, R4, R8, R9, R11, R12, R13, R25 to R27).
- **Records re-worded since the first report.** Of the 264 records these files use, 54 differ from commit
  `5b07936`: 36 in tags only, 5 in the date field only, 13 in title, claim, quote, notes or certainty. I re-read
  every sentence that cites one of the 13, changed or not. All still agree with their records. The ones that
  mattered: `afton-house` and `plush` say "fitting a rabbit's head onto another person"
  (`fnaf4-purple-guy-suits-up-employee`, now "the head of a yellow rabbit suit"); `bite` says "a rabbit" and
  "the two of them performing, in shadow" (`fnaf4-fredbear-spring-bonnie-shadows`, now "a bear in a top hat and
  a rabbit"); `nightmares` says "Plushtrap, a small rabbit" (`fnaf4-fun-with-plushtrap`). No sentence in
  `family.ts` names FNaF4's rabbit Spring Bonnie.
- **Citations.** Every record cited inline in a chapter at `42366ee` is still cited inline in that chapter. The
  `counterEvidence` and `further` lists are unchanged.
- **Tools.** `quotecheck.mts … 3 --weak`: 616 phrases, 2 MISS (both in beat `s-1979`, outside these files), 0
  UNCITED, 21 weak; in these chapters the same three weak lines as before, each verbatim in the `quote` of a
  record cited beside it. `wordcheck.py --all`: nothing new in these files. `scripts/validate.ts`: `OK`,
  "1046/1046 accounted (cited inline 663, counter-evidence 111, filed as further 344, outside the story 70);
  unaccounted 0". My own stricter quote check (every quotation, any length): no miss. A mechanical pass found
  no doubled word, lost space or unbalanced mark. `tsc -b` was not run, because it writes build files; the
  ordered list is in the block type (`schema.ts`, `ordered?: boolean`) and both renderers print it as a numbered
  list.
- **Read from the top in the reader's view:** `afton-house`, `nightmares`, `murders`, `fnaf1-restaurant`, and
  the changed parts of the other four.

## Findings

One in the diff. One finding of the first report is still open; it is given after it, outside the count.

### fnaf1-restaurant 1. WORDING (minor)
- where: `tension`, last sentence (`nightshift.ts` line 136)
- text: `The voice that names Spring Bonnie on FNaF3's tapes says in 1987 only \"a yellow one\" [[fnaf2-call6-yellow-suit]], which one man being vague to a guard would explain.`
- problem: The rewrite cut the sentence's tail, "and it is why the tapes are said only to imply him". That tail
  was the sentence's marker. What is left states flat that the voice on the tapes is the caller of 1987, which
  R25 holds at medium ("the one record is `implied`") and the body only says the tapes "imply". It also no longer
  says what the record does to the model: R25 lists it as the record against that identification. The marker
  survives in the body ("they imply the same man, and no game says so"), but the body does not join it to this
  record. It is the one place in the round where a marker was cut and the claim it marked was left standing.
- fix: `The voice that names Spring Bonnie on FNaF3's tapes says in 1987 only \"a yellow one\" [[fnaf2-call6-yellow-suit]], which one man being vague to a guard would explain, and it is why the tapes are said only to imply him.`
  This is the sentence as it stood at `42366ee`, and it brings the paragraph to 162 words by the writer's
  count. A shorter form, 155 words, that also stops presupposing one voice:
  `FNaF3's tapes name Spring Bonnie where the caller of 1987 says only \"a yellow one\" [[fnaf2-call6-yellow-suit]]; one man being vague to a guard would explain it, and the tapes only imply him.`

### Still open from the first report: child-outside 1. SLIP (outside this diff)
- where: body, the paragraph after the Take Cake figure (`murders.ts` line 20)
- text: `{{puppet}} is the machine FNaF2's guard is warned about.`
- problem: This finding was not applied. Commit `035c233` changed one line of `murders.ts`, the citation of
  child-outside 2. The token still opens the paragraph and still prints "the Puppet is the machine…": the
  renderer prints the stored name unchanged in `ws/ui-final` (`3b76ec5`) and `ws/integ` (`e909aea`), and
  `RichText.tsx` has not changed in either since 10:07. (`BRIEF-reader2.md` told the second reader that the page
  prints such a name with a capital; it does not.) R26 as it stands after 4d says what to do: "a token that
  opens a sentence or a table cell prints a small first letter, so recast the sentence or write the descriptor
  as plain text."
- fix: `The machine FNaF2's guard is warned about is {{puppet}}.`
- same fault, other files, still standing: `thesis` (`story.ts` line 34, a table cell), `killer` (`story.ts`
  line 68), `fazbears-fright` (`reckoning.ts` line 22), `ffps` (`reckoning.ts` line 73), `burntrap`
  (`underground.ts` line 39). The sixth, in `salvage`, was recast in `7b11632`.

## The four checks of this round

### 1. Nothing lost

For every cut, the place the memo or the notes name does hold what was cut, and the record is cited there.

| Cut | What it carried | Where the reader of that chapter still finds it |
|---|---|---|
| `plush`, `tension` (reader 2, item 18) | The scene against the voice being Afton's own | "Whoever sits at that desk": "no more than a guess", and the scene in full with `fnaf4-purple-guy-suits-up-employee` |
| `nightmares`, body (item 25) | The views are empty; the high viewpoint | Empty: the next paragraph, with `sl-private-room-feeds-empty`. The high viewpoint is support, not doubt, and is now only in `afton-house`'s figure caption, which the paragraph links to |
| `nightmares`, `tension` (item 10) | The model's one answer and its limit | "the monitors show the rooms with nobody in them" under "A real room", with the record; "places on a company's monitors" in the box; "The lean is slight" after the box |
| `november-1987`, `tension` (item 9) | The three things FNaF2 alone suggests | The box, column "Five more, in 1987", in the same words; the three records in the SAVE THEM paragraph, the box and the Night 3 row |
| `springtrap`, `tension` (item 19) | The rival placing's two supports | The box, column "Before 1987, as the old restaurant rotted", with both records |
| `springtrap`, `tension` (item 11) | The seam: a walled-up room with him in it | "A room that was sealed" ("No game shows who opened it, or when"), the answer, and the box's first column; the record is that section's block quotation |
| `afton-house`, `tension` clause | "the weakest step" | The body, "The reading has a difficulty of its own", in the adjudicator's sentence |
| `murders`, `tension` | The rule on death minigames; "one tape whose date is assumed"; "a company mascot" | The rule is the model's defence, not a doubt; it is in `november-1987`, which the sentence links to, and in `child-outside`. The tape's assumption: "it is one support, not two". The clipping's words: the head of the body and the costume section |
| `golden`, `tension` | "gives the bodies as its reading"; the coin's scene | The answer, the key box, and the paragraph's own first words; the comparison box, second column |
| `fnaf1-restaurant`, `tension` | Four tails and the last sentence | See the finding above for one tail. The other three are in "After 1987", the block quotation and the clause before. The last sentence is taken up below |

`afton-house`'s paragraph, `nightmares`' dots paragraph and the two numbered lists lost nothing: every fact and
every citation of the old text is in the new.

### 2. No marker changed strength, and none moved to another claim

True of every passage but one, the finding above. In detail: "The model reads" for the Obsv.2 cluster is the
marker the tension already had for the same reading; "leans" stays with the bear, and both list items open
"That"; "may be later" and "(a fan wiki's account)" stay in `golden`; "the model reads them as these five" and
"builds nothing on it" stay in `murders`; "most likely" is in the new heading as in the sentence under it, and
stays with the old building;
"the lower end of medium" stays in `springtrap`. The tension clause in `afton-house` names the watching in 1983
without saying that the model leans to it, so R3's rule that the lean and "the order does not tell it" go
together is not engaged there; the body has both in one sentence.

### 3. `nightmares`, the dots

**The conditional keeps within the ruling. No change.**

- text: `Taken as one person among machines, the dots in that house would show the nights going on in Sister Location's time.`
- R4 forbids writing that the nights are happening during Sister Location. The sentence does not write it: it
  says what one way of taking the dots would show, and the next sentence declines it ("The model reads nothing
  from them"). The dots are still cited for nothing. The chapter carried the same words as a denial ("and does
  not say that the nights are going on in Sister Location's time") from its first draft through the revision
  after the fact check (`1a5d50f`, `5996d82`), unflagged; the final pass cut them.
- Against its record: the reading is the one in the notes of `sl-breaker-map-dots` ("each watched place holds
  one person and several machines"), and the sentence gives it as a reading, which is all that notes can
  support. "One white and the rest grey" and "no legend" are in the claim.
- One thing it does not do: `model.md` gives the reasons the reading fails (five grey dots for one Plushtrap,
  the technician unmarked, the monitors empty). The chapter gives none, as before the round. If the ruling's
  sentence is meant to keep the reading off the page altogether, cut the sentence; the paragraph reads in
  order without it.

### 4. The sentences the writers list as new

All sixteen agree with their records.

- `afton-house`: "So the main run points at the room too, though the night spent inside it…" (the two old
  sentences joined; the records file the two routes as the fake and the real ending); "The model reads the Obsv.2
  cluster as the house of FNaF4's nights…, on the match shown below" (`sl-breaker-map-obsv2-house-layout`, an
  `implied` match of two drawings; the figure is directly below, and its caption says what the match rests on);
  the re-worded sentences on the list of eight systems and the line to the block above Funtime Auditorium; "which
  weighs against the watching in 1983" (`sl-handunit-freddy-fazbear-closing`).
- `nightmares`: the three sentences on the map, the dots and the reading.
- `murders`: the four sentences. "The clippings name no rabbit" is `fnaf1-news-dressed-as-mascot`'s "Neither
  says which character it was"; "that restaurant's short life" has its antecedent in the sentence before.
- `golden`: "Ultimate Custom Night's coin … is the best case for the rival"; the reader has met the coin in the
  box above.
- `november-1987`: "The lean to the bear stands on two assumptions" is R11's ruling in other words ("It stands on
  one assumption … and on a second").
- `fnaf1-restaurant`: "the closing clipping's \"there\""; the word is in the record's `quote`.

## The two to look at

**`fnaf1-restaurant` no longer says that the placing of the killer's death loses its marker.** Nothing is lost.
The doubt has two halves, and each is now stated once, where the claim it bears on is made. That the clipping
may be old news, which would "leave this one's closing unrecorded", is in this chapter's last paragraph, two
sentences before a pointer that is itself marked ("What most likely happens next in the empty building"). That the
placing then loses its marker is in `springtrap`, whose claim it is, with a link back here that leads to that
section. The cut sentence cited no record. No fix.

**`nightmares` lists six counter records and names five.** It is so, and nothing is lost by the round's test:
the sixth, `sl-private-room-feeds-empty`, is cited under "A real room", in the sentence that says what it does to
the model. The same shape now holds in three more of these chapters: `plush` names four of five,
`november-1987` five of eight, `springtrap` none of three. In each the record is cited in the body or the box.
One thing the second reader could not see from the printing tools: on the page the list is printed above the
paragraph, as "6 records cut against this chapter", and the paragraph stands under "How the model handles it".
So the record stays in view, and the paragraph is silent on it. In `november-1987` the paragraph covers its
three by pointing at the box. If the other three paragraphs are to answer every record listed above them, as
rule 3 of the readability brief asks of the rewrites, these clauses do it, each to be added at the end:

- `nightmares`: `Sister Location's monitors show the room empty [[sl-private-room-feeds-empty]]: the room, and not the nights.`
- `plush`: `Against the voice being William Afton's own there is the scene told above [[fnaf4-purple-guy-suits-up-employee]]: that reading stays a guess.`
- `springtrap`: `The model's placing also leaves the seam told above: a room walled up with its contents inside [[fnaf3-tape6-safe-rooms-sealed]], and no game shows who opened it.`

I do not count these as findings.

## Counts

In the diff: WORDING 1 (`fnaf1-restaurant`). No WRONG, no SLIP.

Outside the diff: one SLIP of the first report is not applied (`child-outside`), with five sister places.

## Clean

In the range: `afton-house`, `plush`, `nightmares`, `murders`, `golden`, `november-1987`, `springtrap`. `bite`
has no change, and its sentences that cite re-worded records still agree with them.

## For the adjudicator

- `murders`' "what pushes back" is 161 words by the writer's count and `november-1987`'s 177, over the aim of
  150. Each word over is a record against the model with its answer; I would leave both.
- `afton-house` now has two marked readings (the code as 1983, the Obsv.2 cluster as the house) in the section
  that the next heading's first sentence treats as shown ("Everything from here is inference"). The first was
  there before the round. The writer flagged it, and I agree it stands.
- Not checked: the games and captures; the page as rendered (I read the renderer and started no server); `tsc`.
