# Revision notes, writer 5: `src/data/chapters/reckoning.ts`

Chapters: `fazbears-fright`, `ffps`, `salvage`, `ucn`, `faith`. One revision pass, finished 3 October.
Only `reckoning.ts` was edited. Nothing is committed.

## Checks

- `npx tsx scripts/validate.ts`: OK. Coverage 1044/1044 accounted, 0 unaccounted. One warning is mine and is
  deliberate: `scott-2014-faith-and-work is listed in outsideStory but also used by a chapter` (see "For the lead", 1).
  The other warning (`fnaf4-night8-no-story-text`) is not from my file.
- `npx tsc -b`: clean, exit 0.
- `prose-report.mts`: no sentence over 40 words in any of the five chapters; no missing field.
- No `// REVIEW:` comment is left in the file. The only comments left are the `further` headings and record labels.

## Words per chapter (the prose report's count)

| Chapter | Before | After | Note |
|---|---|---|---|
| `fazbears-fright` | 1,040 | 998 | |
| `ffps` | 1,320 | 1,143 | Over 1,100: reason below. Five headings became four, seven quote blocks five |
| `salvage` | 1,121 | 1,010 | Five headings became four |
| `ucn` | 1,351 | 1,301 | Over 1,100: reason below |
| `faith` | 568 | 587 | Four findings each added a clause; one framing sentence cut |

**Why `ucn` is at 1,301.** The comparison grew because finding 1 required it. The table of lines, the `compare`
block and the two short paragraphs round them went from 382 words to 476: "a victim that can't perish", a second
Nightmare Fredbear line and the paraphrase of the third, Scott's ruling on the edition Nightmarionne comes from, and
the Michael column given as R16's full package, ending on "Hell for the father, rest for the son". Everything else
in the chapter fell from 969 words to 825. What was cut: the narration of Pizzeria Simulator's ending (two
paragraphs became one), Nedd Bear's line, the second quotation for "he is male", the repeated "the player killed
him, and he remade the Nightmares", the repeated "on its plain sense", half of the balance paragraph (each reading's
cost now sits in its own column), and the closing paragraph about the two speakers from the non-canon edition (now
one clause in the table row it qualifies). The chapter carries five rulings of R16, each with its own grade, and
the outline (C8) lists it among the hard cases at about 1,300.

**Why `ffps` is at 1,143.** The speech. It keeps five quote blocks and the sentences between them, in the order he
says it, as the assignment and the outline ask ("this chapter gives it room"). The two shortest blocks were folded
into prose as finding 9 proposed, the echoes table became prose, and the sentence on Scott's 2018 remark and the
Help Wanted 2 clause were cut.

## Applied / rejected

35 findings for my five chapters: **35 applied, 0 rejected.** The six findings on storyline beats are the lead's.

Where the applied fix differs from the sentence the checker proposed:

- `fazbears-fright` 2: one sentence with the kind printed ("In play, the burnt mascots ... only knock the systems
  out"). The proposed "cannot end the night ... only Springtrap can" is left out for length. The tie to failed
  ventilation is gone.
- `fazbears-fright` 5: "The model leans, loosely, to the last". "And prints no year either" is not added: the
  sentence before it and the date pill both say so.
- `ffps` 4: the echoes table is gone, so the wrong token went with it. `ffps-scrap-baby-played-into-our-hands` now
  carries only her "was a gift, for us" (finding 8).
- `ffps` 5: "After the first day a tape sets him a second job", which is what the record is (the end-of-Monday tape).
- `ffps` 7: the clause about Help Wanted 2's training booth is cut, not reworded. The record's home is another
  chapter, so coverage is unchanged.
- `ffps` 9: five blocks, not three (reason above).
- `salvage` 3 and 5: the fifth section ("What they thought they had come for") and the repeated "Elizabeth"
  quotation are cut, so neither sentence survives. The one reading of Scrap Baby's "little souls" moved up to "The
  rabbit and his daughter". The first table still cites `ffps-completion-connection-terminated-elizabeth`.
- `ucn` 4: the first place is cut (the opening already has "the speaker is that someone's work"); the second is
  reworded as proposed.
- `ucn` 5: the table quotes the line as recorded, stutter and all. The `compare` block uses "death cannot save you",
  which is an exact substring.
- `ucn` 6: the clause about the photograph is dropped.
- `faith` 2: "with a second, whispering voice under them". The two records say a second voice is layered under each
  line; neither says it is the same whisper.
- `faith` 4: applied in one sentence, with the record's own words. See "For the lead", 1.

## My own REVIEW comments (nine, all decided and deleted)

1. `fazbears-fright`, the boarded-up room: the chapter says the room is implied by the caller's tip of the night
   before, and not stated (`fnaf3-call2-found-a-real-one`). The beat that states it is yours.
2. `ffps`, "it burns with him inside": R28 governs. The chapter has "stays as it burns".
3. `ffps`, seven quote blocks: now five.
4. `ffps`, outline point 7 against R33: the regenerated outline agrees with R33, and the chapter follows both.
5. `ucn`, "the night the Cassette Man promised him": R16 governs. The chapter says nothing shows this night to be
   the Hell the speech promised. The outline still has the old phrase (below).
6. `ucn`, "every door, no winning": not written, because no record says the night cannot be won.
7. `ucn`, "I was the first!": left out of the table. R16 scores it "=", so it separates nothing. The record is still
   cited, for "I have seen him".
8. `ucn`, `ucn-rockstar-bonnie-truest-friend` in `counterEvidence`: kept, because R16 lists it against William.
9. `faith`, the one marked sentence: kept in the form round three allows. "Whoever is held, the voice that holds him
   has turned down its own release as well; the model reads that as vengeance kept up at the cost of rest."

## Lines from the lead kept in different wording

Round three:

- `ffps` `tension`. The required sentence is in, word for word, after "The game presents the fire as the killer's
  end." Two phrases beside it differ:
  - "a company that certified itself \"no longer a corporate entity\"" is now "a company whose own voice says it is
    no longer a corporate entity". The phrase is in the `claim` and `title` of `ffps-completion-tutorial-atonement`
    and not in its `quote`, and the record has the Tutorial Unit saying it, not a certificate.
  - "the volunteer who would rather stay than leave" is now "the volunteer whom the Cassette Man expects to stay".
    `ffps-completion-right-where-you-want-to-be`: the speaker is guessing, and the game does not show whether the
    volunteer leaves (finding `ffps` 2).
  - Added at the end: "Who lit the fire, and whether the volunteer left, the game does not show."
- `ffps`, the round-three point "the company scans old circuit boards": the body has "In Help Wanted, a tape says
  the game's client sent old circuit boards to be scanned into it". `hw-tape-05` is a tape's account, and it says
  "the client"; that the client is the company is another tape's, told in `digital`.
- `faith` `answer`: applied word for word.

Round two (already in the skeleton; listed so the editor does not "restore" them):

- `fazbears-fright` `answer`: "One of the game's two endings is Happiest Day" is "runs through Happiest Day, a
  hidden party at which six masked children vanish". Happiest Day is a hidden minigame that unlocks the ending
  (`fnaf3-good-ending-requirements`, `fnaf3-happiest-day`; the checker's beat 6 says the same). "The next game" is
  "a later game, Pizzeria Simulator".
- `fazbears-fright` `tension`: "the game made to resolve the story" is now Scott's own narrower words, named as a
  transcript (`scott-2018-interview-ffps-made-to-resolve-plot-points`). Three gaps are admitted, one of them new
  (`ucn-orville-he-tried-to-release`, now in `counterEvidence`). "Good ending" is "second screen": the game's own
  captions are "Bad ending." and "the end".
- `salvage` `tension`: "which is what FNaF3 shows done to the four" is "which can be read as what FNaF3 shows done
  to the four mascots" (`ffps-insanity-trap-again`, notes; R10 and R30). Added: the dialogue Scott published outside
  the game, the blueprint that names no target, and the count of four machines for five children.
- `ucn` `tension`: the lead's sentences are kept, with five records added (four from finding 1, and Rockstar
  Bonnie) and one clause each. "The coin that turns Golden Freddy into Fredbear" is "a hidden mechanic answers a coin
  spent on Golden Freddy with the jumpscare of Fredbear" (`ucn-death-coin-fredbear`).
- `ucn` `changesIf`: extended from R16's own "Would change if" (William shown elsewhere at that time; a statement
  from Scott on the game's standing).
- `faith` `tension`: "whether his games carried" is "whether the first game carried" (the record is from October
  2014 and is about the first game). "From Pizzeria Simulator on" is dropped (`fw-clock-ending-pieces-in-place` has
  "Rest." earlier).

## For the lead

Most important first.

1. **`scott-2014-faith-and-work` is still in `outsideStory`** (`theory.ts`, line 321, author-context). `faith` now
   cites it, as finding `faith` 4 asks, so the validator warns until it is taken out of that list. If you would
   rather keep it outside the story, delete this clause from `faith`'s last paragraph: "and that he had come to
   think \"it's not your work but you yourself that makes the difference\" [[scott-2014-faith-and-work]]".
2. **`quote` fields that stop short of words the chapters need.** I unquoted or paraphrased every one, so nothing
   in the file now quotes from a `claim`, `title` or `notes`. If you extend the fields, these can become quotations
   again:
   - `ucn-nightmare-fredbear-lines`: lacks "We know who our friends are, and you are not one of them!" (`ucn`, table
     row 5, now "it also tells him he is no friend of theirs").
   - `ucn-puppet-lines`: lacks "I don't hate you, but you need to stay out of my way." and "Seeing you powerless is
     like music to me." (`ucn`, table row 6, paraphrased).
   - `fw-old-man-consequences`: "I'm sorry to say that you have gone too deep into the code. There is no way back
     out." is only in `notes` (`ucn`, the old man's section, paraphrased).
   - `ucn-omc-ending`: "Come and sit with me a while" is only in `claim` (no longer used).
   - `ffps-completion-tutorial-atonement`: lacks "no longer a corporate entity" (`ffps`, body and `tension`).
   - `ffps-cassette-intro-paragraph-4`: stops before "special obligations under Paragraph 4" (`ffps`, opening).
   - `ffps-salvage-first-tape-alley`: lacks "quite often" and "we aren't sure why" (`ffps`, second paragraph).
   - `fnaf3-coming-soon-newspaper`: lacks "actual relics from the decades-old pizzeria" (`fazbears-fright`, opening).
   - `ucn-nightmarionne-lines` needs no change. R16's table and outline point 3 print the tidied line; the chapter
     prints the recorded one.
3. **Storyline beats still say more than their records** (`theory.ts`, yours; the checker's beats 1 to 6).
   `s-fazbears-fright`: "open a boarded-up room", "with a body inside", "gives six masked children a party".
   `s-trap-fire`: "opens a pizzeria as bait". `s-night-without-end`: "one night with no morning", and the one token
   for the roster and "cannot die". My chapters are written to the records, so the beats and the chapters now differ
   on these five points.
4. **Ruling and outline wording that says more than the record.** The chapters follow the records.
   - R16, "he remade the Nightmares": one Nightmare says it of itself (`ucn-nightmare-freddy-toysnhk`).
   - R16, "in a sentence saying the photograph behind the face carries no lore": Scott said the first half and
     implied the second (`scott-2019-ucn-child-face-jason`, `scott-2019-fnaf4-photos-no-lore`).
   - R16, "the Death Coin turns Golden Freddy into Fredbear": a hidden mechanic makes Fredbear jumpscare the player,
     and no text explains it (`ucn-death-coin-fredbear`). The same wording is still in `bite` (`family.ts`, line 182).
   - R13 and outline `ffps` point 3, "would rather stay in the fire than take the way out": the Cassette Man's guess
     (`ffps-completion-right-where-you-want-to-be`).
   - Outline `fazbears-fright` point 5 and the round-two `salvage` tension, "which is what FNaF3 shows done to the
     four": R10 and R30 have "can be read as".
   - Outline `ucn` point 2, "the night the Cassette Man promised him": withdrawn by R16. Point 1, "every door, no
     winning": no record.
   - Outline `salvage` point 4 and the R31 line in `telling-revisions.md`: the LEFTE sheet "is on his terminal". The
     records have the office monitor in the hidden ending, and nothing makes the terminal his.
   - Outline `ffps` point 1, "a salvage each night" (Monday to Thursday: `ffps-salvage-order`); point 7, "certified
     itself" (the Tutorial Unit says it).
5. **Two answers of yours that the bodies qualify.** I left both fields as given.
   - `faith`: "sends the children to rest". The speech's listeners are "monsters", "most of you", "My daughter" and
     "those you have carried in your arms" (finding `faith` 5). The body has "the dead most likely include the five
     murdered children".
   - `ucn`: "and he runs the night". R16 states it flat. The records give one Nightmare "remade" by him and a second
     voice under three rare lines, which the body marks "the model reads it as his".
6. **Departures from the outline's shape,** for the editor. `ffps`: the echoes are prose, not a table (point 3).
   `salvage`: point 6 is folded into the section on the rabbit and his daughter, and the green-eyes teaser
   (`scottgames-site-2017-fnafworld-iamstillhere-eyes`) and "Fascinating, what they have become"
   (`ffps-scraptrap-fascinating`) moved to `further`. `ucn`: no "I was the first!" row. `faith`: 587 words against
   "about 500".
7. **Repetition across the part,** which only the editor can weigh. The speech is told in order in `ffps`, sorted
   by listener in `faith`'s table, and three of its lines are in `salvage`'s table of where the five are. Orville's
   line is a quote block in `ucn`, quoted in `faith`, and cited in `ffps`, `salvage` and `fazbears-fright`. The LEFTE
   acronym is quoted in `ffps` and is a quote block in `salvage`.
8. **Two names in quotation marks are mentions, not quotations:** "Ennard" and "Springtrap" in `salvage` ("never
   says", "never prints"). A mechanical search for quotations outside `quote` fields will flag both. "Ennard" is in
   your own round-two `tension` text.
9. `seeAlso` is unchanged in this pass. Since the first draft, `ffps` has carried `burntrap` and `salvage` has
   carried `golden`, which the outline's lists do not have; both chapters link those ids in the body.
