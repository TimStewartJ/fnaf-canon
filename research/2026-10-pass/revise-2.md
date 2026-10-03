# Revision notes, writer 2: `makers.ts` and `underground.ts`

Revision pass of 3 October 2026 on `springlocks`, `two-machines`, `partners`, `burntrap`, `mimic` and `patterns`,
against `factcheck-2.md`, `telling-revisions.md` (01:38) and `BRIEF-revise.md`. Only the two chapter files were
edited. Nothing is committed.

## Checks

- `npx tsx scripts/validate.ts`: OK. Coverage 1044/1044 accounted, unaccounted 0. Its five coverage warnings name
  records that neither of my files uses (`fnaf4-night8-no-story-text`, three `scott-2020-…` records and
  `scott-2014-faith-and-work`).
- `npx tsc -b`: exit 0, no output.
- `prose-report.mts`: my six chapters run from 985 to 1,099 words, and none has a sentence over 40 words.
- Every quotation in a body, caption, callout and tension was re-checked against the `quote` field of the record
  cited beside it: no mismatch. The `answer` fields carry no citations; their three short quotations ("for the
  diner", "technically", "old friend") are verbatim in records the body cites.
- No `// REVIEW:` comment is left in either file. The comments that remain say where to change a grade.

## Applied / rejected

58 findings on my six chapters: **58 applied, 0 rejected.** Thirteen were applied in a different form from the fix
the checker proposed. Each removes the same fault.

- `springlocks` 1. The bedtime-story sentence is cut and its record filed in `further`
  (`secret-of-the-mimic-story-time-animal-band`). Naming all six animals would have kept a support that the diner
  reading does not need.
- `springlocks` 5. "Wife" is gone from all six chapters. No record says it. `two-machines` writes "the voice of the
  boy's dead mother", which `secret-of-the-mimic-log-death` carries.
- `springlocks` 8, `two-machines` 10, `mimic` 17. The words that are not in a `quote` field are paraphrased, as you
  asked. The records are listed below.
- `two-machines` 1 (and `mimic` 7). The join is made once, in the open, but where the cabinet is found (under "The
  night in 1979") and not in the callout: "No record says that this cabinet is M1. The model takes it to be: it has
  Fiona's voice, it writes of the boy ..., and the unsigned message that calls M2 a copy of its sender's program was
  sent that night." The cabinet's line "I watched him grow up, through this machine" moved there from the section
  on the babysitter, so nothing earlier leans on the join. The callout is gone; its one remaining point (which
  machine "the Mimic" names) is two sentences of body. `mimic` links to the join twice and marks it both times.
- `two-machines` 5. The faulty "If either fails" is replaced by one sentence in the tension (either assumption gives
  the day, and their agreement is the argument for both) and a link to `timeline-math`, which now sets the two
  assumptions out.
- `two-machines` 9. "A costume also hides a person from it" is no longer in this chapter. The line is quoted once,
  in `springlocks`, where the suits are the subject, and `patterns` links there.
- `partners` 1. The checker's "of those gathered he is the one sent to Hell" restates the line. The chapter gives
  the reason in the linked chapters' terms: he "is among those the speech gathers (see `ffps`) and is the one of
  them with murders to answer for (see `killer`)".
- `mimic` 1 (second half). The therapist's talk-back programs are cut from this chapter. `digital` cites the record
  and argues from it.
- `mimic` 4 and 14. The construction crew and "wired the guard through the building above" are cut from this
  chapter: the first is told in `burntrap`, and the second repeated the chapter's opening.
- `patterns` 2. "A rabbit in the mask" cites `ruin-the-entity`, as `vanny` now does, and adds "the model does not
  identify that figure with the one crushed".

What you ranked highest, in your order:

1. `patterns` 1. Fazbear's Fright is out of the company's list. The paragraph gives the company three acts (the
   originals kept in 1987, the indie games it paid for "by one witness's account", the VR game) and then says of
   the find that "it is a local amusement park's and not the company's", with `fnaf3-coming-soon-newspaper`. Every
   other item was checked against the linked chapter as it stands in the worktree (committed through `bd65c8e`;
   `story.ts` and `apparatus.ts` were still uncommitted). Each linked chapter cites the record or tells the
   event. Two links changed: Freddy not seeing the rabbit-costumed woman is told in `pizzaplex`, not `vanny`; the
   suit that hides the technician is told in `springlocks`.
2. `two-machines` 1 and `mimic` 7: above.
3. `burntrap` 1 and 2: "It is most likely not the endoskeleton sealed below"; "If the sealing is as old as the boy
   says, one machine cannot be in both places"; Scott's remark is quoted with "Originally", and "The remark does
   not say so" follows the shell reading.
4. `mimic` 1 to 4: applied as written, or by the cuts above.
5. Dates: "before the night in 1979" in `springlocks`; the undated recording is no longer placed "In 1979".
6. Openings: `partners` and `two-machines` now mark the attribution in their first paragraphs.

Repeated quotations. Each of the lines you named is now quoted once in my six chapters: the real dispatcher's line
in `mimic` (as the paired pull quote), "Every copy has failed" in `mimic`'s body, "prisons of my making" in
`partners`' body, "legally ours" in `springlocks`. A search of all six chapters for any other quotation used twice
found a dozen more (among them "I let a machine raise my kid", "It can not see you in that suit", the Cradle's
line and "the persona of the character it occupies"). Each is now quoted once and paraphrased or linked elsewhere.
What is left is two answers that echo two or three words their bodies quote in full: "for the diner" and "old
friend".

Answers. `two-machines`, `partners`, `burntrap` and `mimic` are three sentences each.

My three `// REVIEW:` notes are resolved and deleted. Their content is under "For the lead".

## Round-three lines kept in different wording

- **`springlocks`, `answer`.** "before 1979" is "before the night in 1979 on which Secret of the Mimic is set"
  (`secret-of-the-mimic-mail-springlocks-hen` is undated).
- **`springlocks`, `tension`.** "Fredbear and Spring Bonnie suits stand in Murray's mock-up" is "two prototypes in
  the mock-up that the game's files label Fredbear and Spring Bonnie" (`secret-of-the-mimic-rnd-proto-pizzeria`,
  notes: the labels "come from game files"). "The later games give that diner those two suits" is "put a yellow
  bear and a yellow rabbit on one stage and call the original restaurant Fredbear's Family Diner, but no game puts
  the two suits in a place of that name" (`fnaf3-stage01-fredbear-spring-bonnie`,
  `fnaf2-call5-fredbears-family-diner`). Two sentences of mine are kept, on the unsigned note and the research
  floor's memo, which is the third record in `counterEvidence`.
- **`two-machines`, `answer`.** "his dead wife's voice" is "the voice of the boy's dead mother".
- **`partners`, `answer`.** "a customer who sends change orders for the springlock suits" is "the customer who is to
  be warned about the new springlocks and who sends a change order that Edwin does not want"
  (`secret-of-the-mimic-log-build-to-spec` has one change order and does not say what it changes). The last
  sentence paraphrases "prisons of my making", which the body quotes.
- **`partners`, `tension`.** "two men in a strange office" is "two men inside of a strange office", the record's
  words (`into-the-pit-strange-photo`). "Leaves him open" is "leaves Hen open": no record gives Hen's sex. A
  sentence is added for `fnaf2-call5-fredbears-family-diner`, now in `counterEvidence`, and the cost of the W.A.
  reading is kept from my draft.
- **`burntrap`, `answer`.** "It is not the endoskeleton sealed below" is "most likely not" (R20 rates it medium).
- **`burntrap`, `tension`.** "drags the rabbit away into the fire" is "drags the rabbit away as it tries to leave
  the fire" (`security-breach-ending-burn-it-all-down`: it "pulls it into the ceiling").
  `security-breach-vanessa-new-endo` is cited and added to `counterEvidence`.
- **`mimic`, `answer`.** "from Edwin Murray's workshop: most likely the second, violent one" is "of Edwin Murray's
  design: most likely his second, violent machine itself".
- **`mimic`, `tension`.** Your text counted "three records" against the join and named two; mine names them
  without a count. "The keepsakes ... are the six dead children's, one of them won from a cut-out of Springtrap in a
  fire, which are the killer's mementos" is "the dolls ... wear the masks of ..., the six figures the model ties to
  dead children, one of them found in a level that a fire unlocks, where a cut-out of Springtrap stands behind the
  level's burned host: they read as the killer's keepsakes" (`hw2-memory-dolls`: masks, "a memory", no child's
  name; `hw2-fazerblast-fire-springtrap`). "Destroys the rabbit" is "shows the rabbit crushed" (R19). The 1979
  description is paraphrased, because `burntrap` quotes it. One objection is added that your text does not have:
  the one time the Cradle program runs, it hides nothing (`secret-of-the-mimic-ending-unfinished-business`, now in
  `counterEvidence`). `secret-of-the-mimic-log-make-a-copy` is swapped out of `counterEvidence` for
  `secret-of-the-mimic-work-order-1979`.
- **`patterns`, `answer`.** "They recur too exactly to be accident" is "The model reads them as meant".

Outline points not carried as written, all for length or because another of my chapters carries them:

- `two-machines` point 5. The company's paper is paraphrased with a link ("the blueprints and company assets that
  its work orders name"); `springlocks` quotes both orders. The foreclosure notice is cited only in the tension.
- `mimic` point 4. "Experimental Storage #2" is cut and its record filed in `further`.
- `mimic` point 6. The gift-pressing bear is cited only in `patterns`. The guess that the technician is Cassie's
  father is cut, and `ruin-cassie-dad-faz-wrench` is filed in `further`.
- `mimic` point 7. The therapist's recording is cut (above).

## For the lead

Most important first.

1. **No record states that the cabinet F10-N4 is M1.** The chapters now carry it as the model's join. Three places
   still state it flat: R21's "(the cabinet F10-N4)"; the outline's `two-machines` point 2 ("it is the mind in the
   cabinet F10-N4"); and `people.ts`, where the entity `f10-n4` has the alias "M1 (Edwin Murray's name for his
   first machine)". Two record titles do the same: `secret-of-the-mimic-mail-received-5-min-ago` is titled "M1's
   message" though its notes say "Sender unsigned", and `secret-of-the-mimic-film-m1-birthday-cake` gives the voice
   to M1 "per the F10-N4 page". A record that states the identity from the game would settle it.
2. **The beats.** The twelve beat findings in `factcheck-2.md` are on `theory.ts`. Two touch my chapters' wording:
   "at M1's urging" (`two-machines` 4: the order of urging and building is the record's note) and "It is one of his
   copying machines" (`mimic` 10).
3. **Ruling and outline wording that the records do not carry**, each now softened in the chapter:
   - R20, "While the Pizzaplex was being built": the messages are from a later construction crew at a raceway that
     had been open (`security-breach-freddy-raceway-closed-abruptly`).
   - R21, "reaches a child's radio outside the building": `ruin-cassie-seeks-gregory` has a message that brings her
     in, and does not say what carried it or where it found her.
   - R21, "The memories the arm keeps are the six children's": `hw2-memory-dolls` has masks and the word "memory".
   - R21, "Shown: its room holds Murray's mascot costumes": the comparison is the wiki's, checked on one screenshot
     (`ruin-mimic-lair-mcm-mascot-suits`).
   - R2, "If either fails": either assumption gives the day without the other.
   - R2 and the outline, "the later games give that diner those two suits": no game does.
   - The outline's `burntrap` point 4 and your tension, "into the fire": the record has the ceiling.
4. **Records whose `quote` stops short of words I had quoted.** All are paraphrased now. The words are exact by the
   record's own `claim`, `location` or notes; I did not go back to the wiki.
   - `secret-of-the-mimic-log-creepy`: "frankly creepy" (in the `claim`).
   - `secret-of-the-mimic-log-build-to-spec`: "like we always do" (in the `claim`; the `quote` ends in an ellipsis).
   - `secret-of-the-mimic-mail-springlocks-hen`: "odd behaviors" (in the `claim` and title; the `quote` ends
     "some of the more... …").
   - `secret-of-the-mimic-ending-story-time`: "Your parents love you. Sleep tight." (in the `claim`; the `quote`
     is only "I love you.").
   - `security-breach-cd46-talking-programs`: "someone else" (in the `claim`; the notes give the therapist's
     sentence, "it sounds like there is someone else responding to you. Who is it?").
   - `secret-of-the-mimic-film-m1-birthday-cake`: "Happy Birthday David" on the cake (in the `claim`).
   - `secret-of-the-mimic-mail-foreclosure`: the header "Mail - Aug 3rd" (in the `location`).
   - `secret-of-the-mimic-f10n4-fazbear-will-send-another`: "They didn't listen, and it caught them all." (in the
     notes). `two-machines` paraphrases it for what became of the earlier visitors.
   - `ffps-scup-blueprint`: "Afton Robotics, LLC" (in the `claim`).
   - `secret-of-the-mimic-experimental-storage-2-mimic-blueprints`: the heading "Experimental Storage #2" (in the
     `claim`; the `quote` is the menu line).
   - `ruin-mxes-hub`: the nameplate "M.X.E.S." (in the `claim`; the record has no `quote`).
5. **Records wanted.**
   - That Edwin and Fiona Murray were married. No record says wife, husband or married.
   - The look of the two prototypes in the mock-up, so that Fredbear and Spring Bonnie need not come from file
     labels (`secret-of-the-mimic-rnd-proto-pizzeria`).
   - What the Data Diver is. It appears only in the two ending records.
6. **Record tidying.**
   - `secret-of-the-mimic-previous-technicians`: the title says "M2 stuffs victims in suits", and the `claim` does
     not.
   - `ruin-ending-safe-spot`: the title and `claim` name Vanessa, where the notes say "a blonde woman".
   - `ruin-mimic-lair-mcm-mascot-suits`: the notes call it "the firmest in-game tie", and also say the match is
     the wiki's.
7. **First-use forms.** The Glitchtrap form is in `burntrap`, `mimic` and `patterns`. I did not add the Burntrap
   form to `mimic`'s one passing mention, or "AKA Scraptrap" to `patterns` and `burntrap`: each links to the
   chapter that carries the form. Say if the editor wants them in every chapter.
8. **Coverage notes.** `two-machines` still files `secret-of-the-mimic-mail-something-below` and
   `secret-of-the-mimic-mail-old-elevator-below` in `further`, though `mimic` cites both. Two records are now cited
   only outside their home chapter: `hw2-hub-helpi-pushes-gift` (home `mimic`, cited in `patterns`) and
   `secret-of-the-mimic-f10n4-suit-cannot-see` (home `two-machines`, cited in `springlocks` and `patterns`).
9. **`timeline-math`** has the day's two assumptions, and nothing on David Murray's December date. The pill in
   `two-machines` carries that working on its own.

## Words per chapter

| Chapter | Before | After |
|---|---|---|
| `springlocks` | 1,008 | 993 |
| `two-machines` | 1,210 | 1,099 |
| `partners` | 919 | 985 |
| `burntrap` | 966 | 994 |
| `mimic` | 1,289 | 1,098 |
| `patterns` | 1,018 | 1,057 |
| Total | 6,410 | 6,226 |

None is over 1,100. Three grew, because their findings asked for sentences and not for cuts: `partners` (the
unnamed "they", and headings that say what each section finds), `burntrap` (Scott's remark in full, two first-use
forms) and `patterns` (the amusement park, the trailer, the false wall, three links). Of `patterns`' 1,057 words,
about 390 are its table. `two-machines` and `mimic` are at the line: each carries six or seven outline points and
its own join, and the findings on them added markers. To get there `two-machines` lost its callout and the
foreclosure sentence, and `mimic` lost the items listed above.
