# Revision notes, writer 3: `family.ts` and `machines.ts`

Revision pass of 3 October 2026 on `afton-house`, `plush`, `nightmares`, `bite`, `funtimes`, `remnant` and
`michael`, against `factcheck-3.md`, `telling-revisions.md` (01:38) and `BRIEF-revise.md`. Only the two chapter
files were edited. Nothing is committed.

## Checks

- `npx tsx scripts/validate.ts`: OK. Coverage 1044/1044 accounted, unaccounted 0. One warning, expected:
  `fnaf4-night8-no-story-text is listed in outsideStory but also used by a chapter`. `nightmares` now cites it,
  as you asked. **Please take it out of `outsideStory`.**
- `npx tsc -b`: exit 0, no output.
- `prose-report.mts`: no sentence over 40 words in any of the seven (there were four: three in `remnant`, one
  in `funtimes`). Six chapters are under 1,000 words; `afton-house` is 1,161 (reason below).
- Every phrase in quotation marks was checked by script against the `quote` field of a record cited in the same
  chapter. What is left outside a `quote` field is listed under "For the lead", item 3.
- No `// REVIEW:` comment is left in either file. The only comments are the role headings inside `further`.

## Applied / rejected

42 findings on my seven chapters (11, 9, 6, 6, 3, 3, 4): **42 applied, 0 rejected.** Nine were applied in a
different form from the checker's proposed sentence, each removing the same problem:

- `afton-house` 6. "If the family has a name" is in. The closing "So the family in FNaF4 has a name" is cut and
  not re-marked: it summed up, and the chapter now ends on its three links.
- `afton-house` 9. "A room most players never enter" becomes "a room that needs a keycard won in a secret
  minigame" (`sl-baby-minigame-girl-grabbed`, notes).
- `afton-house` 10, and the same line in `funtimes`'s `tension`. The accident line is now a paraphrase with no
  quotation marks, because it is not in the `quote` field of `sl-fake-ending-girl-voice` and I cannot edit the
  record. See "For the lead", item 3.
- `nightmares` 2. The body cites `fnaf4-the-bite` (the bite ends the fifth night); the tension cites
  `fnaf4-night6-fade-order`, which is also added to `counterEvidence` (R4 lists it against).
- `nightmares` 3. "The next game in the main series was Sister Location", and "the next main game" in the
  compare block and the tension. "Made to follow FNaF4" is gone, so `scott-2018-interview-each-game-fixed-the-last`
  is not needed and not cited.
- `funtimes` 1. "Can hardly fall". The link to `timeline-math` is dropped; the link to `afton-house` now sits on
  the pink room, which that chapter does describe.
- `funtimes` 3. The paragraph opens on Circus Baby's own "my old pizzeria"
  (`sl-springlock-suit-from-old-pizzeria`) and the heading is "The opening that was cancelled".
- `michael` 1. `confidence` stays "high" (it is fixed), so the `answer` now ends at "got back up." The two
  identifications are in the table and the last paragraph, each with "most likely".
- `michael` 4. The tension now gives `ffps`'s answer: "the line for an outsider nobody planned for", kept at most
  likely on the volunteer and on "it's still me" (`ffps-scraptrap-still-me`).

The lead's top three: (1) "a Fredbear plush of FNaF4's design" in `afton-house`'s answer and callout, "a toy of
that design" and "a toy of the same design" in the bodies of `afton-house` and `plush`; (2) `nightmares` says who
sits in Ultimate Custom Night's office "is not settled (see ucn)" and gives both cases as conditionals; the
answer says the line "implies"; (3) the one quotation from the wrong field is un-quoted, as above. The misquote
is in the beat `s-afton-robotics`, not in my files.

The eleven findings on the storyline beats are not mine to apply.

My seventeen `// REVIEW:` notes are resolved and deleted. Decisions: `plush` keeps "in that same scene";
`nightmares` keeps "can appear", keeps `fnaf4-nightmare-animatronics` as counter-evidence, writes the reversed
call as "reported", and cites Night 8; `bite` keeps the "estimated" pill, the order of its sections,
`ucn-nightmare-fredbear-lines` as counter-evidence and `ffps-lawsuit-head-bitten` filed; `funtimes` keeps "created
to do" on `ffps-scrap-baby-make-you-proud-daddy`, rests "she stays on" on Pizzeria Simulator's two lines, and
paraphrases the board scene; `remnant` keeps the title as printed, names three of the sheet's four parts, and
does not cite the Egg Baby trigger; `michael` leaves the neighbours out and writes "one of her lines". What the
lead should know from them is below.

Other changes: headings now say what the section finds (`plush`, `nightmares`, `bite`, `funtimes`); `michael`'s
two quoted headings carry quotation marks; `afton-house`'s caption and tension lose "confirms" and "prove";
"printed" for dialogue text in `plush` is "shown"; `funtimes`'s "kinder reading" paragraph moved up to the
section it answers; `afton-house`'s key callout no longer restates the paragraph above it at length.

## Round-three lines kept in different wording

`telling-revisions.md` lists only round-two fields for my chapters, with "check that your file has it". Five
differ, each because a record or a later rule says less:

- `remnant`, `answer`. The line quotes "scalable creation of ulterior presence". The sheet prints
  "S.calable C.reation of U.lterior P.resence" (`ffps-scup-blueprint`, claim and image). My file quotes it as
  printed. The checker marks the lower-case form a misquote in `s-afton-robotics`.
- `remnant`, `tension`. Ends "and why nothing else rests on it" (finding `remnant` 1), not "no other chapter
  builds on it": `thesis` and `s-afton-robotics` repeat the reading.
- `funtimes`, `tension`. The accident line is paraphrased (`sl-fake-ending-girl-voice`: not in its `quote`).
- `nightmares`, `answer`. "Is most likely not what is there: a later game's line implies it was \"illusion\""
  (finding `nightmares` 4; `ucn-nightmare-fredbear-lines`, notes: "implies... without saying whose").
- `michael`, `answer`. The last sentence is dropped (finding `michael` 1; R13 rates both identifications medium).
  It also held "the manager", which the game never says (`ffps-tutorial-franchisee`).

One round-two point is written differently because a round-three rule overrides it. `michael`'s table row for
the player of Ultimate Custom Night reads "Not settled. He is one of two candidates, and ucn weighs them", with
"Open" in the last column. The outline's "the model leans against it" states the lean outside `ucn`, which
R16, R33 and style guide C3 now bar.

## For the lead

1. **`outsideStory`.** Remove `fnaf4-night8-no-story-text`: `nightmares` cites it for the eighth night.
2. **Beats to bring in line with the chapters** (beyond the eleven findings in the report).
   - `s-afton-robotics`: "The pizzeria built for them never opens" sits oddly beside Baby's one day on a stage
     (`funtimes` 3): "whose grand opening was cancelled".
   - `s-trap-fire`: "The manager" is "the franchisee".
   - `s-children-stay`: "four dead children" is "four grey, dead-looking children" (`fnaf2-give-gifts-give-life`).
   - `s-house` 4 and `s-afton-robotics` 1 are the beat forms of `afton-house` 1 and the `remnant` answer.
3. **Evidence records.**
   - `sl-fake-ending-girl-voice`: `quote` holds only "Isn't this why you came here? To be with me again?". "I
     know it was an accident" and "Everything is okay. I'm still here." are in `claim` only. If they go into
     `quote`, `afton-house`'s note callout and `funtimes`'s tension can quote the first again.
   - `fnaf4-still-your-friends`: `quote` holds the first of three yellow lines. `bite` quotes "Do you still
     believe that?" and "I'm still here." from `claim`, as text printed on screen. All three belong in `quote`.
   - `ffps-scup-blueprint`: transcribes parts B and D only. The image also prints "A: Excavating Arm" and "C: Arm
     Base and Balance". `remnant` relies on A.
   - `sl-intro-mr-afton-board`: the board's "certain design choices" and the designer's list are in `claim` and
     `notes` only, so `funtimes` paraphrases its opening scene.
   - `sl-custom-night-decay`: the title says "among neighbours"; the claim does not, and the notes say the wiki's
     pages disagree. `michael` leaves the neighbours out.
   - `fnaf4-reversed-phone-guy` is `shown` and `fnaf4-flatline` is `implied`, on the same footing (the wiki's
     description of a sound). `nightmares` writes "is reported".
   - `ucn-nightmare-fredbear-lines`: "this time" is quoted in lower case in `nightmares`; the record has "This
     time". Left as the checker worded it.
4. **Outline points that say more than their records.**
   - `plush` point 5, and R5: the plush tells the boy which way to run "at the moment" he sees the purple
     figure. The records do not order the two: the figure is "seen only on backtracking"
     (`fnaf4-purple-guy-suits-up-employee`) and the line fires "if the child walks the wrong way"
     (`fnaf4-dont-you-remember-what-you-saw`). The chapter says "in that same scene".
   - `nightmares` point 5: bedside items "on any night". `fnaf4-bedside-items` does not say which nights.
   - `funtimes` point 7 cites `ffps-scrap-baby-completion-monologue` for "Now we can do what we were created to
     do". The sentence is in `ffps-scrap-baby-make-you-proud-daddy`.
   - `funtimes` point 4 offers Baby's "something bad... inside of me" and "how. To. Pretend." as support that the
     daughter stays on. `sl-baby-something-bad-inside` notes that the speech is part of her lure. The chapter
     rests the point on Pizzeria Simulator's two lines; `michael` tells the two Sister Location lines.
   - `michael` point 4: "the walk among the neighbours" (see the record above).
   - `michael` point 5 against the round-three rule on Ultimate Custom Night (see the section above).
   - `telling.md` and `telling-revisions.md` still carry the lower-case `remnant` answer and the `michael`
     answer with "the manager".
5. **Ruling wording.**
   - R3, statement 1, says "with that toy"; its own table puts "that it is the same object" under Inferred.
   - `model.md`, R3: "The Private Room and the panel are the only things in Sister Location that point at FNaF4"
     is a universal negative no record carries. The chapter says "the only places this archive has found".
   - R12: `funtimes` now says "can hardly fall", after "except on the tightest dating". Neither `afton-house`
     nor `timeline-math` argues the pink-room limit. If it should be argued, `timeline-math` is the place.
6. **Shared record.** `ffps` and `michael` now answer `ffps-scrap-baby-not-expected` the same way. If writer 5
   rewords that tension, `michael`'s should follow.
7. **Filed, not cited, by decision.** `ffps-lawsuit-head-bitten` in `bite` (a joke lawsuit, `model.md` 5.2);
   `scottgames-site-sl-source-rental-schedule` in `funtimes` (outline point 5 names it; coded and unexplained);
   `ffps-insanity-egg-baby-trigger` is outside the story and `remnant` opens "On one path through Pizzeria
   Simulator", cited to `ffps-insanity-new-way-to-desecrate`.
8. **Counter-evidence added to the outline's lists.** `plush`: `fnaf4-purple-guy-suits-up-employee` (finding
   `plush` 3). `nightmares`: `fnaf4-nightmare-animatronics`, `fnaf4-night6-fade-order`. `bite`:
   `ucn-nightmare-fredbear-lines`.

## Words per chapter

Body words as `prose-report.mts` counts them.

| Chapter | Before | After |
|---|---|---|
| `afton-house` | 1,184 | 1,161 |
| `plush` | 876 | 870 |
| `nightmares` | 911 | 910 |
| `bite` | 985 | 962 |
| `funtimes` | 941 | 929 |
| `remnant` | 559 | 566 |
| `michael` | 974 | 977 |

`afton-house` is over 1,100. The reason: it is the exemplar, and style guide C8 names it a hard case that may
run to about 1,300. It carries a pick and two alternatives the model cannot exclude, a dating problem, and the
two callouts the exemplar exists to show. Its eleven findings each added a qualifier; the cuts (the closing
summary, a restated callout, two repeated clauses) more than paid for them.

The other six were inside the target before the pass, so the fixes and the cuts roughly cancel. `remnant` is
short on purpose (C8: about 500). `michael` gained three words, from the franchisee's gloss.
