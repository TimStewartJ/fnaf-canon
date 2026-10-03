# Verification 1b: what changed in `story.ts` and `theory.ts` since `42366ee` (the readability round), and the two sentences of round 4d

Checked: `git --no-pager diff 42366ee..HEAD -- src/data/chapters/story.ts src/data/theory.ts`, as the files stood at
14:03 on 3 October (HEAD `17816ee`). `story.ts` last changed in `f979034` and `theory.ts` in `5bc6585`; the two
commits after `b9f05a1` (`b9fbbc8`, `17816ee`) do not touch either file. `apparatus.ts` is unchanged since
`42366ee`. Nothing in `src` is uncommitted.

- **What changed.** 25 sentences, headings and titles are new or changed, and each was read against its records
  and against the rulings with 4d.
  - `story.ts`, 10: in `thesis` the two sentences that open the chapter, one heading, the note (its title and three
    fragments) and one sentence of "what pushes back"; in `killer` the two sentences of the split.
  - `theory.ts`, 14: in how-to-read "Four markers" and the two sentences moved to the fourth paragraph; two sentences
    of beat 1; the title and three sentences of beat 3; three more titles; two sentences of beat 17.
  - One more from `0e85d4f`, before the diff's base: the 4d sentence of the `thesis` table. The other 4d sentence is
    one of the two that moved.
- **What was cut.** Two sentences of how-to-read; five sentences of the `thesis` note (one by the second reader,
  four by the writer's rewrite); two clauses of the `thesis` "what pushes back"; and "This is the whole model".
- **Records.** 25 records were opened in the working tree: every record cited in a changed sentence, and those
  beside them that the checks needed. The tree is at HEAD, and the records last changed in `6d6639a` (12:04).
- **`scripts/validate.ts`**: `OK`. "theory coverage: 1046/1046 accounted (cited inline 663, counter-evidence 111,
  filed as further 344, outside the story 70); unaccounted 0". The figures are the ones the writers reported.
- **`quotecheck.mts 3 --weak`**: "616 quoted phrases of 3+ words; 2 found in no record at all; 0 found only in a
  record the chapter does not cite; 21 found outside the quote field". The two `MISS` lines are the known fault for
  `s-1979`. No line names `thesis`, `killer` or beats 1, 7, 10, 14 and 17. By hand: the four quotations of beat 3
  and the two titles in quotation marks are verbatim in the `quote` of a record the beat cites
  (`fnaf2-call6-yellow-suit`, `fnaf3-call2-found-a-real-one`), and "Lured into a back room" is the clipping's
  wording, quoted in the beat's first sentence.
- **`wordcheck.py --all`**: nothing in a changed sentence. In the two files the lines are the old ones ("partners"
  in the table row that says the paragraph does not say it, Scott's "Miketrap", real-world years). "where fire did
  not" is gone with its sentence.
- **Citations, links and tokens**, before and after: `story.ts` cites 60 records, links 28 chapters and has 6
  entity tokens on both sides; `theory.ts` 130, 9 and 2. None lost, none added. `thesis` cites the same 22 records.
  Its links to `digital` go from three to two and to `partners` from two to one.
- **Read in the reader's view**: the front matter, beats 1 to 3, 7, 10, 14 and 17, `thesis` from the top, and
  "what pushes back" of `killer`. No doubled word, lost verb, missing space or dangling pointer. "The paragraph
  below" is below, "that voice" still has "a confident voice" before it, and "Four records" are four.

**Nothing lost.** Each cut, and where a reader now finds what it carried. All were checked in the files.

| The cut | Where it is now | |
|---|---|---|
| How-to-read: "Where a later game was made to mend an earlier one, the later game governs the point in dispute." | `games`, word for word; `canon-rules`, first under "Which work governs". The front matter links both | holds |
| How-to-read: "The chapters sometimes grade more finely, with medium-high and low-medium between." | `thesis`, at the head of its table: "The grades here are finer than the three marks: medium-high and low-medium sit between them." No other chapter uses the two grades | holds |
| How-to-read: the two sentences that moved | Word for word at the head of the fourth paragraph | holds |
| `thesis` note: "It does not call the two men partners: that is the model's reading, argued in ((partners))." | Table row "An old friend": "Medium that the two were partners in the business, which the paragraph does not say", with the link | holds |
| `thesis` note: "The killings come first: the paragraph does not say that a designer learned that the dead persist in machines and used that to kill." | The order, three times in `thesis` ("Afton then finds"; "a new wrong followed the killings"; "what the killer did next"), and its doubt in "what would change this" ("dates Afton's own machines against the five"). The killer's intent is weighed in `remnant` | holds |
| `thesis` note: "It does not say whether anyone designed what keeps the dead in the machines, and does not call it Remnant." | `thesis`: "The paragraph says that the children stay on in the mascots, and not how. Neither do the games." The chapter uses the word only for the blueprint's "Remnant Injector" and as the title of the chapter it links | holds |
| `thesis` note: "Nor does it call the friend the man who built those machines." | `partners` only | **`thesis` 1 below** |
| `thesis` note: "And Princess Quest is not said to work where fire did not." | Table, last row, under "Not in the paragraph": "Low-medium that the remains are the killer's, and that Princess Quest is a remedy" | holds |
| `thesis`, "what pushes back": "which is why the paragraph marks its account of the rabbit in the code as the model's reading, and why the chapter on it, ((digital)), says only that it is something he left behind" | The section "One hedge: what the rabbit in the code is" ("is the model's reading", with the link to `digital`) and the table ("Medium that it is something he left behind"). `sd-which-board-unknown` is still cited in the paragraph and listed in `counterEvidence` | holds |
| `thesis`: "This is the whole model" | The chapter's title and question. "In a confident voice" is kept | holds |
| `killer`, "what pushes back": the split | Punctuation, and "No" for "and no" | holds |
| Four beat titles | Each date stands beside its title in the beat's `when` | holds |

**No marker changed strength or moved.** Beat 3 keeps both "most likely" and "the model does not choose" where they
stood. Beat 17 keeps "by convention" on the second scan and "The model reads" on what the rabbit is. Beat 1 keeps
"(read from an image)". The note and the opening of `thesis` had no marker and have none. The grades of the
`thesis` table are untouched.

**The new statement in beat 1 holds.** `games.json` has eighteen games; Secret of the Mimic (2025-06-13) is the
latest release, after Into the Pit (2024-08-07), and its setting, "1979, most likely 7 September", is the earliest
any entry gives (FNaF4's "c. 1983" is next). Of the 1,046 records, only Secret of the Mimic's carry a year before
1983: 1974, 1975, 1977 and 1979 in `when.year`, and 1965 and 1973 in their labels. Two labels on another game's
records name such a year, both in Help Wanted 2 and neither a date: "Undated (a staged prop reads 1970)" and "Code
1979 (not stated as a date)". `games` says the same twice: its table of releases ends on Secret of the Mimic, and
its list in the order of the story begins with it.

**The note in `thesis`, fragment by fragment.**
- "That the friend burns with his machines: he stays as the building burns, and his word is "remaining"": the
  record has "I am remaining as well. I am nearby."; "stays as it burns" and "the building burns" are R28's own
  forms, and R28 rules out "with him inside".
- "That the killer outlives the fire": R33 (never "Afton survived the fire"); the paragraph has him die in the suit
  and come back in it before the fire, and nothing of him after it but "something he left behind".
- "That fire fails: ... is not proof that it does": the paragraph says "the later games reopen it" and nowhere that
  fire fails, so the outright statement is true of it. It agrees with R28 ("Fire half works"; "Secret of the
  Mimic's fire leaves the thesis") and with `ffps` ("Fire, in this story, is one man's answer, given once. It half
  works."). The three records carry what they carried before: the plan to call them back, "I believe there is
  peace", and the ending in which the Mimic leaves the burning workshop. "It" is fire both times, and "does" is
  "fails".

**The two sentences of 4d** stand as the adjudicator worded them. The table's "most likely, that he means Afton,
whom the speech does not name" agrees with the record, whose note says the old friend "is not named", and with
`killer` ("The friend is most likely the rabbit"). For how-to-read's "a further step in its answer that is weaker
than that mark carries its own marker in the sentence" I read all 35 answers against their marks: 34 keep it, and
the 35th is under "For the adjudicator".

## Findings

Quotation marks are written plain here. In the files a quotation mark inside a string is `\"`. `LOST` is this
round's check "nothing lost": no statement is false, and a guard that a cut passage carried is no longer in the
chapter.

### s-1979 1. WORDING
- where: beat `s-1979` ("The company comes to collect"), the fifth sentence, read with the fourth.
- text: `A voice on his radio speaks as the company's Dispatch: "everything he's been working on for us is now legally ours" [[secret-of-the-mimic-dispatch-contract-legally-ours]]. Inside, the Dispatch voice turns out to be a cabinet computer that, once found, speaks as Fiona [[secret-of-the-mimic-f10n4-reveal]], like the voice in Edwin's recordings.`
- problem: As rewritten, "the Dispatch voice" has one thing to point at, the voice of the sentence before, so the
  beat says that the voice which stated the contract turned out to be the cabinet. No record says that. The line is
  from the "Opening call from Dispatch over the van radio"; the reveal's record says only that the computer "had
  impersonated Dispatch"; `secret-of-the-mimic-clock-out-real-dispatch` notes that "where the impersonation begins
  is not stated". R2 as worded in 4d: the contract is stated "on the call on the road, by a voice that names itself
  Fazbear's dispatch", "no record says where its voice takes over", and nothing said before the reveal is quoted as
  the machine's. Where the site tells both the call and the voice in the building, it keeps them apart:
  `springlocks` ("It is stated on the road, and that matters"), `two-machines`, one of the beat's own chapters ("a
  Dispatch inside the building was the cabinet, and no record says where its voice took over"), the people layer
  ("A voice using the same name then briefs the technician by radio inside the building") and the timeline ("Where
  the imitation began is not stated"). `cover-story` gives the line to the company outright ("the company claims a
  contractor's work as "now legally ours""), and beat 1 rests the contract on the same call. A matter of degree:
  before the rewrite the sentence read "Inside, the Dispatch voice on his radio", which leaned the same way but
  kept "on his radio" with the voice in the building, as R2 has it, and the adjudicator let that stand in 4d. Those
  words now belong to the call.
- fix: `Inside, a Dispatch voice turns out to be a cabinet computer that, once found, speaks as Fiona [[secret-of-the-mimic-f10n4-reveal]], like the voice in Edwin's recordings.`
  One word. The sentence before it stays as it is. The record's claim has a computer "which had impersonated
  Dispatch" and which speaks in Fiona's voice once found. R2 gives each voice an indefinite article ("a voice that
  names itself Fazbear's dispatch"; "a machine speaks as Dispatch"), as `two-machines` does. Counted as
  `prose-report.mts` counts, the beat stays at 130 words.

### thesis 1. LOST
- where: `thesis`, the note under "After the fire, his image returns". The fix goes in the section "That the
  children stay on, and not how", at the end of its first paragraph.
- text: the sentence the rewrite dropped (`42366ee`): `Nor does it call the friend the man who built those machines.`
  The paragraph's last sentence as it stands: `He says there that he never learned how the children came to be in them [[ffps-insanity-tiny-breaths]] (see ((golden))).`
- problem: Of the four sentences that the rewrite of the note dropped, this is the one that `thesis` no longer says
  anywhere. The writer's own table (`final-1.md`) finds it in `partners` alone ("No record says ... who made the
  four mascots of the first game"). `thesis` still prints the words that invite the reading, "prisons of my
  making", in the section "That the children stay on, and not how", and now nothing beside them. The record's own
  claim draws the line: "which machines he means, and how far he built them, he does not say"
  (`ffps-insanity-small-souls-prisons`). R2's wording line keeps the reading from being told as fact ("never ...
  'the man who built them'"), and `model.md` lists "the partner, who built those machines" among the things the
  thesis no longer says. Its neighbour in the note, on "partners", was cut because the row "An old friend" says
  it; nothing in the table or the body says this one. A small point: no statement in the chapter is wrong without
  it.
- fix: `He says there that he never learned how the children came to be in them [[ffps-insanity-tiny-breaths]] (see ((golden))). The paragraph does not call him the man who built them (see ((partners))).`
  It is the dropped sentence, set where the reader meets the Cassette Man's words. "Him" is the friend of the two
  sentences before, and "them" the haunted machines. The paragraph has a costume maker build the suits and calls
  Afton "a designer of performing machines"; of the friend it tells a daughter, his words, the call and the fire,
  and nothing of who built the mascots. `partners` tells what the link promises: "They state no more: no game says
  partner, founder or owner", and "No record says ... who made the four mascots of the first game".

## Counts

By kind: WRONG 0, WORDING 1, SLIP 0, LOST 1. Two findings.

By chapter: storyline 1 (`s-1979`), `thesis` 1, `killer` 0, front matter 0.

Both are in passages this round rewrote. Neither is a misquotation or a wrong grade. One is mended by one word,
and the other by one sentence of eleven words and a link.

## Clean

- The front matter: "Four markers", the two moved sentences, the two cuts, and the 4d sentence as worded
- Beat 1 (`s-costume-company`), with its new statement
- Beat 17 (`s-rabbit-in-code`)
- The four titles (`s-1979`, `s-five`, `s-november-1987`, `s-fazbears-fright`)
- `thesis`: the two opening sentences, the heading, the three fragments of the note, the cut in "what pushes
  back", and the 4d sentence of the table
- `killer`: the split in "what pushes back"

## For the adjudicator

- The answer of `games` against how-to-read's 4d sentence. `games` is marked high, and its answer says: "Several
  were made to answer the one before, which is why a later game is the authority on what an earlier one left
  unclear." That is the model's own rule: R27 has "medium for the model's own conventions", `canon-rules` says of
  the list that holds it "the archive's own, rated medium", and the body of `games` says "The rule is the model's
  own". The answer gives it no marker, and words it wider than the rule ("a later game made to mend an earlier one
  governs the disputed point"). The sentence is as old as the outline (`0c841c2`), `apparatus.ts` did not change in
  this round, and whether a rule of method is a "step" in the sense of 4d (12) is yours to say, so it is not
  counted. If it is one: `Several were made to answer the one before, which is why the model reads backwards: a later game made to mend an earlier one governs the point in dispute.`
  The answer goes from 52 words to 57.
- Beat 1's new statement, three limits. (1) "Goes back furthest" is true of every date in the records and of the
  model's order. Scenes of other games that carry no date (the tapes' springlock years, FNaF2's diner, the child
  outside) are dated against Secret of the Mimic's years by no record, so the statement means that no game shows
  anything dated earlier, and no more. (2) "The newest game" rests on `games.json` and on the `games` table; the
  sentence cites no record for it, and the beat's one chapter, `springlocks`, does not say it. (3) It will age with
  the next release, as the lead author has told the owner. Outside the brief, I looked once: Wikipedia's article
  on the series, in its revision of 2 October 2026, gives Secret of the Mimic (13 June 2025) as the latest
  release. One source, and no more than that.
- The finer grades outside the chapters. The second reader's memo says `thesis` has "the only table that uses those
  grades", which is true of the chapters. The people and relations layers print "(medium-high)" and "(low-medium)"
  in their own prose 89 times (64 and 25), and I found no key for them in the pages or components of this worktree
  or of `integ`. With the front matter's sentence cut, the one explanation on the site is the line at the head of
  the `thesis` table, which says "here". The words explain themselves, and the cut sentence spoke only of the
  chapters, so it is not counted.
- Where the fourth paragraph prints. The second reader's move assumes that the fourth paragraph of how-to-read
  stands at the head of the parts. In the `ui` and `integ` worktrees, `TheoryCover.tsx` passes all four to one
  block, "How to read it", before the storyline (on a phone the last three fold under "The marks, and what they
  mean"). The text reads rightly there too. The move gains nothing unless the page changes.
- Not checked: the games and captures themselves (the text was checked against the records only); `apparatus.ts`
  beyond its seven answers; any layer but the chapters and the storyline, except where one is quoted above.
