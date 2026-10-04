# Verification 5: all layers, after the evidence was set against recordings of play

Checked: `git diff 2fe62a0..HEAD -- 'src/data/*.ts' 'src/data/chapters/*.ts'` in the worktree, with HEAD at
`f4b86f8` (20:47) when I began and at `353d721` (21:43) when I finished; the last commit touches only
`research/CHANGELOG.md`, and the checksums of all 28 data files are the same at the end as at the start. The
diff has 15 files: nine chapter files, `people.ts`, `timeline.ts`, `places.ts`, `community.ts`, `theory.ts` and
`schema.ts`. Set out sentence by sentence, with the two renames and the paragraph breaks taken out, it has 116
changed or new sentences, captions and list lines in 92 places. Each was read against the `claim`, `quote`,
`notes` and `verifiedVia` of the records it cites, as they stand now, and for the 57 records that changed since
`2fe62a0` also against what they said before (19 changed in claim, quote, title or location; 38 in notes or
other fields only). The 18 new records were read whole.

Because a corrected record can leave an untouched sentence behind, I also read every sentence that cites one of
the 75 new or changed records, changed or not, in all layers, and the layers that are not in the diff
(`dates.ts`, `deaths.ts`, `relations.ts`, `familyTrees.ts`, `home.ts`, `box.ts`, `author.ts`). Twelve of the
seventeen findings are in sentences that did not change.

Also read: `ev-gaps.md`, `ev-checks.md` and `ev-checks2.md` (sections 2 to 5 of each); the dated note at the
head of `research/rulings.md` and R19's wording line; `research/open-checks.md`. The six new figures and the
hero image of `vanny` were viewed and set against their captions, their credit captions and their records.
`pizzaplex`, `vanny` and `mimic` were read from the top in the reader's view (`chapter.mts`), as were
`canon-rules`, `open` and `burntrap`; the other chapters were read at their changed places.

Of the analyst's 46 proposed sentences (`ev-checks.md` 3a to 3f, 23; `ev-checks2.md` 3a to 3f, 23), 38 stand in
the files word for word. The eight that do not are the Princess Quest IV sentences, where "by a fan wiki's
account" was made "most likely" (see "The question on 'most likely'" below).

Tools, run on the working tree:
- `quotecheck.mts … 3 --weak`: 620 quoted phrases; 2 `MISS`, both in beat `s-1979` (the known fault); 0 found
  only in a record the chapter does not cite; 21 weak, none in a sentence of this round but `mimic.tension`,
  "System threats found. Repair complete.", which the tool finds first in the notes of the record cited before
  it; the phrase is the whole `quote` of `hw2-pq4-consequences-achievement`, cited straight after it.
- My own check of the layers that tool does not read (`people.ts`, `timeline.ts`, `places.ts`, `community.ts`,
  `theory.ts`, `dates.ts`, `deaths.ts`, `relations.ts`, `familyTrees.ts`, `home.ts`, `box.ts`): 744 quoted
  phrases of three words or more. 724 are in the `quote` of a record named in the same string and 19 in its
  claim, title or notes; the last is the plush's "I will put you back together.", whose record is cited in the
  summary beside it. No quotation in a changed sentence fails. Punctuation is outside both checks, and `home` 1
  below was found by eye.
- `wordcheck.py --all`: one line under "hedge stacks", in `patterns` (two "most likely" in one sentence, on two
  claims; see "Seen and not counted"). Its "tier-3 labels" list now prints "Shadow Bonnie" six times: the tool
  is older than the dated note.
- `scripts/validate.ts` (it writes nothing): `OK`; evidence 1064, credits 182; coverage 1064/1064, unaccounted 0.
- A count of the markers in every file before and after: fifteen more "most likely" and one more "the model
  reads", and no other marker moved. All sixteen are where your message says (Fazbear's Fright 4, the alley
  shadow 3, the Princess Quest IV figure 8, the cheque 1).

In the `text` and `fix` lines below, quotation marks are written plain; each is `\"` in the file.

## Findings

### vanny 1. WORDING
- where: eight sentences in four files tell what the giant figure crushes in Princess Quest IV. Seven say "a
  copy of": `vanny`, hero caption and body (`afterimage.ts` 168, 200); `patterns` (`underground.ts` 160);
  `people.ts` 351 (`vanny`, theory), 540 (`glitchtrap`, status), 702 (`the-princess`, theory); `timeline.ts` 362.
  The eighth, the tension of `mimic` (`underground.ts` 99), says "most likely the rabbit".
- text: `It goes on to crush between its hands a tiny rabbit-eared figure, most likely a copy of the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].`
- text: `and the giant silhouette shown above crushes a tiny rabbit-eared figure, most likely a copy of the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].`
- text: `One ending of Help Wanted 2 shows a tiny rabbit-eared figure crushed, most likely a copy of it [[hw2-pq4-vanny-crushes-glitchtrap]]`
- text: `One ending of Help Wanted 2 shows a giant rabbit-headed silhouette crush a tiny rabbit-eared figure, most likely a copy of the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].`
- text: `One ending of Help Wanted 2 shows a tiny rabbit-eared figure, most likely a copy of it, crushed by a giant rabbit-headed silhouette [[hw2-pq4-vanny-crushes-glitchtrap]]`
- text: `one ending shows a tiny rabbit-eared figure crushed, most likely a copy of the rabbit [[hw2-pq4-vanny-crushes-glitchtrap]]`
- text: `a giant rabbit-headed silhouette crushes a tiny rabbit-eared figure, most likely a copy of the rabbit figure [[hw2-pq4-vanny-crushes-glitchtrap]].`
- problem: "Most likely" is earned for which figure it is, and not for "a copy of". The three grounds (the ears,
  the green plush, the rabbit glitching that game) reach the rabbit in the code; none of them bears on whether
  the thing crushed is that rabbit or a copy of it. "Copy" comes from the wiki, and the record now says so: "By
  the wiki's account it has taken the player's plush, and the tiny figure is a copy of Help Wanted's rabbit
  figure drawn out of the prize chute." Before this round the phrase was "a tiny copy", a small likeness; moved
  behind the marker it reads as a second instance of the rabbit, which no other sentence of the archive claims,
  and it sits beside the sentence that RUIN still has a rabbit in the mask, where a copy would read as the
  reason. So seven sentences carry a detail of the wiki's under the model's own marker, and the eight do not
  say one thing.
- fix: say "the rabbit" in all eight, as `mimic` does and as R19's wording line has it ("shows it crushed"):
  - `afterimage.ts` 168 and 200, `people.ts` 351: `…a tiny rabbit-eared figure, most likely the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].`
  - `underground.ts` 160: `One ending of Help Wanted 2 shows a tiny rabbit-eared figure crushed, most likely the rabbit [[hw2-pq4-vanny-crushes-glitchtrap]], and in RUIN, …`
  - `people.ts` 540: `One ending of Help Wanted 2 shows a tiny rabbit-eared figure, most likely this figure, crushed by a giant rabbit-headed silhouette [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN, …`
  - `people.ts` 702: `…one ending shows a tiny rabbit-eared figure crushed, most likely the rabbit [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN still has…`
  - `timeline.ts` 362: `…crushes a tiny rabbit-eared figure, most likely the rabbit figure [[hw2-pq4-vanny-crushes-glitchtrap]].`
  - `underground.ts` 99 keeps its words and wants the comma that closes the aside: `…shows a tiny rabbit-eared figure crushed, most likely the rabbit [[hw2-pq4-vanny-crushes-glitchtrap]], and reports "System threats found. Repair complete." [[hw2-pq4-consequences-achievement]], as though the rabbit were the whole threat.`
  If "copy" is to stay, it takes the wiki's tag, as the analyst worded it: "…a tiny rabbit-eared figure, a copy
  of the rabbit in the code by a fan wiki's account".

### vanny 2. WORDING
- where: `vanny`, body, the paragraph that begins "The model reads these games as one fight" (`afterimage.ts`
  201), last sentence. Not changed in this round.
- text: `One ending shows the rabbit crushed, and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow on the hideout wall [[ruin-vanny-hideout-glitchtrap-shadow]].`
- problem: The ninth telling of the same scene, and the one that was missed: it is not in the analyst's list of
  eight. One paragraph after the chapter says "a tiny rabbit-eared figure, most likely…", it says flat that the
  rabbit is crushed. The record no longer supports the flat form: "Nothing in the picture says what the tiny
  figure is" (`ev-checks2.md`, 3f).
- fix: `One ending shows that figure crushed, and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow on the hideout wall [[ruin-vanny-hideout-glitchtrap-shadow]].`

### vanny 3. WORDING
- where: `vanny`, "what would change this" (`afterimage.ts` 206), third clause. Not changed in this round.
- text: `a capture of the credits roll that reads otherwise than the wiki's transcription;`
- problem: The capture is on file and agrees with the transcription "line for line"
  (`security-breach-credits-vanessa-vanny-two-parts`, notes; `security-breach-credits-cast-list`). The chapter
  now prints the roll as a figure, at the end of the comparison above, and the tag came off the cast list
  because the roll was read. The clause names as a future check one that has been made.
- fix: `A game that shows two women together outside the rooftop page, names the caller on the hidden call, or says outright that the two are one; a later game that shows Vanessa with the mask off; or any third record for two women.`
  R19's own "Changes if" in `research/rulings.md` still has the clause, and the dated note does not strike it.

### pizzaplex 1. WORDING
- where: `pizzaplex`, body, the paragraph that begins "And a customer has written in" (`afterimage.ts` 249), and
  `open`, the entry headed "Missing staff, a wrecked Bonnie and "those kids"" (`apparatus.ts` 399). Both changed
  in this round, in the analyst's words.
- text: `Where the staff went, and what happened to the Bonnie that lies broken in a room in RUIN, the game's sequel [[ruin-glamrock-bonnie-remains-hidden-room]], are open (see ((open))).`
- text: `RUIN has Bonnie lying broken in a room [[ruin-glamrock-bonnie-remains-hidden-room]], unexplained.`
- problem: The tag came off and took "hidden" with it, which is right: the room is seen. The name stayed, flat.
  The record's claim: "A wrecked blue rabbit animatronic in a pink-red shirt lies on the floor of a dark room …
  The scene prints no name for it. By the wiki's account it is Glamrock Bonnie". The picture's credit caption
  has no name either ("A wrecked blue rabbit animatronic lies on a dark floor"). What was seen is a wrecked
  rabbit animatronic; that it is Bonnie is still the wiki's, and it is unmarked.
- fix: the name is one short step from records on file (the band's rabbit is last tracked at 4:12AM
  [[security-breach-msg-missing-bonnie]]; the wreck is a rabbit animatronic), so it can be the model's:
  `Where the staff went, and what happened to the wrecked rabbit animatronic, most likely Bonnie, that lies in a room in RUIN, the game's sequel [[ruin-glamrock-bonnie-remains-hidden-room]], are open (see ((open))).`
  and `RUIN has a wrecked rabbit animatronic, most likely Bonnie, lying in a room [[ruin-glamrock-bonnie-remains-hidden-room]], unexplained.`
  The heading of the entry in `open` can stay as the name of the question. If the name is to rest on the wiki,
  "Bonnie by a fan wiki's account" in both.

### ffps 1. SLIP
- where: `ffps`, the new figure (`reckoning.ts` 93), caption.
- text: `The last scene, three shots in the order shown: Scrap Baby, Molten Freddy and the salvaged rabbit among flames.`
- problem: The three shots are not the last of the scene, and the scene is not the game's last. The record:
  "then the bezel stands empty, dark red (10:06 to 10:12), and pictures from the minigames follow (10:14 to
  10:40)". The chapter's next paragraph goes on to the instructor's return, the achievement, and the picture
  after the credits. "Last scene" is the heading of the analyst's check 14; the credit caption has it right:
  "Three shots from the Completion ending, side by side in the order shown".
- fix: `Three shots from the Completion ending, in the order shown: Scrap Baby, Molten Freddy and the salvaged rabbit among flames.`

### burntrap 1. WRONG
- where: `burntrap`, tension (`underground.ts` 42), third sentence. Not changed in this round; the body of the
  same chapter was.
- text: `In one ending the mass of parts pulls the rabbit away as it tries to leave the fire [[security-breach-ending-burn-it-all-down]], which fits no account the model has of what either figure wants.`
- problem: No record has the rabbit trying to leave. The old claim did ("it tries to escape the fire but the
  mass of animatronic parts grabs it"); the claim as seen is "the burnt rabbit walks through the flames, and the
  mass of animatronic parts rises behind it, takes hold of it and lifts it up out of the picture". The chapter
  now tells the scene two ways, in its body and in its tension: the body has "as the place burns the mass takes
  hold of it and lifts it out of sight".
- fix: `In one ending the mass of parts takes hold of the rabbit as the place burns and lifts it out of sight [[security-breach-ending-burn-it-all-down]], which fits no account the model has of what either figure wants.`

### mimic 1. SLIP
- where: `mimic`, section "The mask before Cassie" (`underground.ts` 87), first sentence of the second
  paragraph. Not changed in this round.
- text: `The main ending comes of collecting the gifts that a cartoon bear on a screen keeps pressing on the player [[hw2-hub-helpi-pushes-gift]].`
- problem: The analyst named four sentences that tell the bear's cards about the gift, this paraphrase among
  them (`ev-checks2.md`, 3g): "this card is still read from the wiki's images of the screen". Three got
  "(read from an image)" (`patterns`, `people.ts` 443, `timeline.ts` 362); this one did not. What was seen in
  play is the bear, the card "You got them all!" and the gift box; the cards that press were not found.
- fix: `The main ending comes of collecting the gifts that a cartoon bear on a screen keeps pressing on the player [[hw2-hub-helpi-pushes-gift]] (read from an image).`

### people 1. WRONG
- where: `people.ts` 481, `f10-n4`, summary, last sentence. The summary changed in this round; this sentence did
  not.
- text: `The records call the cabinet F10-N4, and none of them quotes that label from the game.`
- problem: Two records now quote it, and both were added to this entry's evidence list in the same round.
  `secret-of-the-mimic-f10-n4-cabinet-lettering`: the cabinet "has 'F10-N4' stencilled on its front right
  panel" (quote: "F10-N4"). `secret-of-the-mimic-reveal-subtitle-labels`: the subtitles label two lines "F10
  N4:". The dated note says the same ("'Arnold' and 'F10-N4' are now quoted").
- fix: `The cabinet's front panel is lettered "F10-N4" [[secret-of-the-mimic-f10-n4-cabinet-lettering]], and the subtitles label two of its lines "F10 N4:" [[secret-of-the-mimic-reveal-subtitle-labels]].`

### people 2. WORDING
- where: `people.ts` 489, `arnold`, summary, last sentence. Not changed in this round.
- text: `The opening call on his van radio addresses him as Arnold, by the wiki's table of that audio [[secret-of-the-mimic-dispatch-contractor-murray]].`
- problem: The hedge is out of date. The call was read on screen: it "begins 'Arnold! Hey buddy, this is
  dispatch with Fazbear Entertainment.' The subtitles print the two speakers' labels as 'DISPATCH:' and
  'ARNOLD:'" (`secret-of-the-mimic-opening-call-arnold-dispatch`, added to this entry's evidence list in this
  round).
- fix: `The opening call on his van radio addresses him as Arnold, and the subtitles label his lines "ARNOLD:" [[secret-of-the-mimic-opening-call-arnold-dispatch]].`

### people 3. SLIP
- where: `people.ts` 489, `arnold`, summary, first sentence of the second paragraph. Changed in this round, in
  the analyst's words.
- text: `By a fan wiki's account he finds bodies in character suits inside, and the Dispatch voice on his radio says that previous technicians lost limbs and died of blood loss; that the bodies are theirs is the usual reading, and it rests on that voice's account [[secret-of-the-mimic-previous-technicians]].`
- problem: The hedge stands at the head of two joined clauses, and reads over both. The second is not the
  wiki's: the voice's line was read on screen, five subtitle cards labelled "DISPATCH:". The other three
  tellings keep the two apart (`timeline.ts` 96 with a semicolon, `two-machines` with "by the voice's account",
  the beat with the hedge inside its own clause).
- fix: `He finds bodies in character suits inside (a fan wiki's account), and the Dispatch voice on his radio says that previous technicians lost limbs and died of blood loss; that the bodies are theirs is the usual reading, and it rests on that voice's account [[secret-of-the-mimic-previous-technicians]].`

### people 4. WORDING
- where: `people.ts` 548 (`burntrap`, status) and 628 (`the-blob`, status). Neither changed in this round; the
  summary one line above each did.
- text: `In one ending the mass of parts pulls it into the ceiling. What becomes of it is not shown.`
- text: `Last seen in Security Breach pulling the burnt rabbit under the Pizzaplex into the ceiling, in one ending.`
- problem: "Into the ceiling" is now the wiki's: "That the fire is set in burner rooms and that the rabbit is
  pulled 'into the ceiling' are the wiki's account" (the record's notes). Each entry says "lifts it out of
  sight" in its summary and "into the ceiling" in its status.
- fix: `In one ending the mass of parts takes hold of it and lifts it out of sight. What becomes of it is not shown.`
  and `Last seen in Security Breach lifting the burnt rabbit under the Pizzaplex out of sight as the place burns, in one ending.`

### people 5. SLIP
- where: `people.ts`, four of the 38 paragraph breaks: `crying-child`, theory (line 52, both breaks);
  `spring-bonnie`, theory (line 519); `missing-children`, summary (line 84).
- text: `[[sl-private-room-monitor-bedroom]] [[sl-private-room-fredbear-plush]].\n\nThat those rooms are his own home, and that plush his own, is the reading (see ((afton-house))).`
- text: `The strongest alternative to all this is one presence that is both him and the yellow bear's child.\n\nThe count of the dead decides against it`
- text: `In November 1987 the caller says that someone used a spare suit, "a yellow one" [[fnaf2-call6-yellow-suit]].\n\nThe model reads that as the yellow bear suit and not this one (low-medium)`
- text: `[[fnaf1-news-sanitation]].\n\nThe game shows the clippings at random and gives them no order.`
- problem: Each break falls one sentence early or late, between a claim and the sentence that qualifies it.
  In `crying-child` the first parts what is shown from "is the reading", and the second parts the alternative
  from the sentence that answers it ("decides against it"). In `spring-bonnie` the caller's "a yellow one"
  closes a paragraph about this suit, and "The model reads that as the yellow bear suit and not this one" opens
  the next. In `missing-children` the clippings are told in an order, and the sentence that says the game gives
  them none opens a paragraph about other games.
- fix: `crying-child`: move the first break to after `is the reading (see ((afton-house))).` and the second to
  before `The strongest alternative to all this is`. `spring-bonnie`: move the break to before `In November
  1987 the caller says`. `missing-children`: move the break to after `gives them no order.`

### timeline 1. WORDING
- where: `timeline.ts` 362, `t-hw2-technician`, summary, last sentence. Not changed in this round; the sentence
  before it was.
- text: `The scene does not say who the silhouette is, and the next game still has a rabbit in the mask: by the wiki's summary, a rabbit's shadow stands on the wall of a hideout, its face visible when the mask is on [[ruin-vanny-hideout-glitchtrap-shadow]].`
- problem: R19's wording line: "RUIN, most likely the later of the two, still has a rabbit's shadow in the
  mask": never "the next game". The same event is labelled "most likely between Gregory's night and RUIN", and
  the two entries in `people.ts` that tell this have "RUIN, which the model sets after it".
- fix: `The scene does not say who the silhouette is, and RUIN, most likely the later of the two, still has a rabbit in the mask: by the wiki's summary, a rabbit's shadow stands on the wall of a hideout, its face visible when the mask is on [[ruin-vanny-hideout-glitchtrap-shadow]].`

### timeline 2. WORDING
- where: `timeline.ts` 355, `t-security-breach`, summary. Not changed in this round, and not touched by it: an
  older fault, seen while reading the event.
- text: `In one, three hidden arcade games are finished and a blonde woman, drawn as Vanessa is and not named, waits at the doors with the rabbit mask on the floor [[security-breach-ending-redemption]]`
- problem: As `factcheck-6.md`, `pizzaplex` 5 and `s-pizzaplex` 5, which were mended in the chapter and the
  beat: only the third game is out of sight ("no record of a PQ3 arcade, yet there is a cabinet tucked away in
  Fazerblast"); the first is "An actual standup arcade!" "somewhere in the building"
  (`security-breach-msg-pq1-maint-log`).
- fix: `In one, the three Princess Quest arcade games are finished and a blonde woman, drawn as Vanessa is and not named, waits at the doors with the rabbit mask on the floor [[security-breach-ending-redemption]]`

### relations 1. WORDING
- where: `relations.ts` 90 (Vanessa to Vanny, note) and `familyTrees.ts` 92 (notes). Neither file is in the diff.
- text: `it gives Vanessa and Vanny to two performers, as two parts (from a fan wiki's transcription of the credits).`
- text: `The game's cast list, which gives Vanessa and Vanny to two performers as two parts (from a fan wiki's transcription of the credits), counts against it too, at less weight.`
- problem: The tag came off the cast list in five places and stayed in these two. It is the longer form, which
  R19's wording line let stand "where a layer prints it" because it "says the same". The dated note withdraws
  the tag for a reason that holds for both: the list "was read from its credits roll and agrees with the
  transcription, so it no longer takes "(a fan wiki's account)"".
- fix: delete ` (from a fan wiki's transcription of the credits)` in both. The weights do not change.

### dates 1. WORDING
- where: `dates.ts` 74 (`t-ruin`, basis) and 142 (the game `ruin`, basis). The file is not in the diff.
- text: `After Gregory's night: by a fan wiki's summary the Pizzaplex is abandoned and wrecked, and posters show Gregory as missing. Most likely after Help Wanted 2's main ending, in which, by a fan wiki's account, a rabbit mask is held out to a girl.`
- text: `By a fan wiki's summary the Pizzaplex is abandoned and wrecked, and posters show Gregory as missing.`
- problem: Three hedges on things now seen. The wrecked lobby is seen (`ruin-pizzaplex-abandoned-earthquake`),
  and the same hedge came off `timeline.ts` 369 and `places.ts` 121 in this round. The mask held out to a girl
  is seen (`hw2-faz-force-ending`) and is a figure in `mimic`. The posters are told flat everywhere else, with
  a figure in `pizzaplex`.
- fix: `After Gregory's night: the Pizzaplex is abandoned and wrecked, and posters show Gregory as missing. Most likely after Help Wanted 2's main ending, in which a rabbit mask is held out to a girl.`
  and `The Pizzaplex is abandoned and wrecked, and posters show Gregory as missing.`

### home 1. SLIP
- where: `home.ts` 19, the first panel's text, last sentence. The file is not in the diff.
- text: `Fazbear Entertainment sends a technician to fetch his work: "As per his contract, everything he's been working on for us is now legally ours." [[secret-of-the-mimic-dispatch-contract-legally-ours]]`
- problem: The quotation closes on a full stop that the line does not have. The record's quote was two
  sentences and is now one, as the subtitle prints it: "…is now legally ours, so we're sending you in to get
  it." `springlocks` quotes the whole line; the other layers quote the fragment with no stop inside the marks.
- fix: `Fazbear Entertainment sends a technician to fetch his work: "As per his contract, everything he's been working on for us is now legally ours" [[secret-of-the-mimic-dispatch-contract-legally-ours]].`

## Counts

17 findings: 2 WRONG (`burntrap` 1, `people` 1), 10 WORDING, 5 SLIP.

- In sentences changed or added in this round: 4 (`vanny` 1, `pizzaplex` 1, `ffps` 1, `people` 3), and the four
  breaks of `people` 5. `vanny` 1 is in the eight sentences you reworded and `ffps` 1 in a new caption;
  `pizzaplex` 1 and `people` 3 are in sentences of the analyst's, applied word for word.
- In sentences that did not change, left behind by a record that was corrected or a tag that came off
  elsewhere: 10 (`vanny` 2, `vanny` 3, `burntrap` 1, `mimic` 1, `people` 1, `people` 2, `people` 4, `relations`
  1, `dates` 1, `home` 1).
- Older, and outside this round's changes: 2 (`timeline` 1, `timeline` 2).

By layer: chapters 7 (`vanny` 3, `pizzaplex` and `open` 1, `ffps` 1, `burntrap` 1, `mimic` 1); `people.ts` 5;
`timeline.ts` 2; `relations.ts` with `familyTrees.ts` 1; `dates.ts` 1; `home.ts` 1. `vanny` 1 also touches
`patterns`, `mimic`, `people.ts` and `timeline.ts`.

## Clean

Read against their records and found sound, with nothing to change:

- **Help Wanted 2's main ending**, seven places (`vanny` body and tension, `mimic`, `people.ts` 439 and 874,
  `timeline.ts` 362, `places.ts` 132): the box, the recharge station, the hand at its door, the robot's hands
  and the girl are flat; "a rabbit costume's by a fan wiki's account" hedges the one thing not made out.
- **Princess Quest III** (`vanny`, `people.ts` 698): the locked door, the key for the mask and plush, and
  "ERROR" are flat; the copy of the hub, the door struck and the scream are the wiki's, in a clause of their own.
- **The alley ending** (`pizzaplex` table and tension, `people.ts` 347): "a rabbit-eared shadow, most likely
  the rabbit-costumed woman's". The pages name nobody, and the marker is a fair short inference from the ears
  and whiskers.
- **RUIN's lobby** (`pizzaplex`, `mimic`, `timeline.ts` 369, `places.ts` 121): flat; the headline keeps "(read
  from an image)", and the broken robots keep "By the wiki's plot summary" (`people.ts` 881).
- **The graveyard** (`digital`, `people.ts` 539 and 698): six stones, seen in the arcade version; in `digital`
  the tag now sits on "hidden in Help Wanted's mobile version", which is the part that is the wiki's.
- **FNaF4's eighth night** (`nightmares`): the typing and the end of the night are seen; only the digits of the
  code are the wiki's, and the sentence does not give them.
- **The ending below ground**, four changed places (`pizzaplex` table, `burntrap` body, `people.ts` 547 and
  627).
- **The cast list**, five places, and the figure in `vanny`. R19's four things are still said once each in
  `vanny`: the page is shown, it counts in full, the list counts at less weight, the model has no account.
- **The shared voices**, five places (`salvage`, `people.ts` 607, 611, 619, `timeline.ts` 288): both rolls are
  read.
- **Fazbear's Fright**, four places (`cover-story`, `thesis`, `patterns`, `people.ts` 285): "most likely" sits
  on "not the company's"; "a local amusement park" stays flat; no flat form is left in any layer. Scott's "the
  owners" is verbatim.
- **The Pizzaplex closes** (`pizzaplex`, beat 19): midnight, the announcement, the shutter, "I'm still here!"
  and 6:00am are each in the two records, read on screen.
- **The cheque** (`timeline-math`, `november-1987`) and **the thesis's tape**: "also" has its antecedent in the
  paragraph before.
- **Secret of the Mimic's quotations**, reworded to the subtitles (`springlocks`, `timeline.ts` 61,
  `people.ts` 297 and 481): verbatim.
- **The bodies in costumes**: three of the four places (`two-machines`, beat `s-1979`, `timeline.ts` 96).
- **Names.** "Maskbot" in the entry, its alias and three sentences, and no "Mask Bot" left in the text; "the
  entity" in both tables of `canon-rules`, the entry's alias and summary, and Helpi's summary, each quotation
  verbatim; "Shadow Bonnie" in tier two, once in the rabbits' table, and in the entry. "Two names are in Scott's
  written guide" is right, and "No game on record prints either" still speaks of the other two.
- **The mechanical changes.** No `((partners))` and no group `emily` is left. `aboutChapters` is the old
  paragraph word for word. `schema.ts` changed in structure and comments only. Every id added to an evidence or
  `further` list is a record.

## The two checks of this round

### A tag that came off must have a record that says the thing was seen

Every scene now told without a tag has one. The record's `verifiedVia` names the recording, and its notes say
what was and was not made out. The ending below ground had no tag before; it was told flat from the wiki, and is
in the table because it is now told from the screen.

| what is now told without a tag | record | recording named |
|---|---|---|
| Help Wanted 2's main ending | `hw2-faz-force-ending` | Help Wanted 2, Part 14, 26:54 to 28:48 |
| Princess Quest III | `security-breach-pq3-help-wanted-hub-trapped-door` | Security Breach, Part 9, 3:22:40 to 3:25:11 |
| the alley ending | `security-breach-ending-alley` | a second player's capture, 38:14 to 39:06 |
| RUIN's lobby | `ruin-pizzaplex-abandoned-earthquake` | RUIN, Part 1, 1:16 to 3:00 |
| the graveyard | `hw-mobile-princess-quest-graveyard` | Security Breach, Part 9, 1:20:30 to 1:21:15 |
| FNaF4's eighth night | `fnaf4-night8-no-story-text` | FNaF4, Part 8, 0:14 to 11:24 |
| the wreck in RUIN | `ruin-glamrock-bonnie-remains-hidden-room` | RUIN, Part 6, 24:40 to 26:08 |
| the ending below ground | `security-breach-ending-burn-it-all-down` | Security Breach, Part 10, 1:02:32 to 1:03:08 |
| Security Breach's cast list | `security-breach-credits-cast-list` | Part 9, 3:25:44 to 3:25:53 |
| the shared voices | `ffps-credits-returning-voices` | Pizzeria Simulator, Part 5; Sister Location, Part 5 |

One tag came off more than the record allows: the wreck is seen and its name is not (`pizzaplex` 1). Two tags
stayed where the same thing is now seen (`relations` 1, `dates` 1), and two sentences still say that a thing is
not on record which now is (`people` 1, `people` 2; `vanny` 3 is the same in a "what would change this").

### A hedge that went in must hedge the right part

| hedge | places | on the right part? |
|---|---|---|
| "a rabbit costume's by a fan wiki's account" | 7 | yes: the hand is flat |
| "by a fan wiki's account the game is a pixel copy…" (Princess Quest III) | 2 | yes |
| "By a fan wiki's account there are bodies…" | 4 | three yes; `people.ts` 489 reads over the voice's line (`people` 3) |
| "(read from an image)" on the hub bear's card | 3 | yes; the fourth sentence has none (`mimic` 1) |
| "(a fan wiki's account)" after "hidden in Help Wanted's mobile version" | 1 | yes |
| "most likely the rabbit-costumed woman's" | 3 | yes |
| "most likely" not the company's | 4 | yes |
| "most likely a copy of the rabbit in the code" | 7 | on the figure, yes; on "a copy of", no (`vanny` 1) |

## The question on "most likely"

You asked whether "most likely" is earned for the tiny figure. For which figure it is, yes. For "a copy of", no.

What is on record. Seen: a tiny standing figure with two long ears, dark against a green glow, held up on the
giant's palm and closed in both hands; and, at the start of the same scene, a green rabbit plush glowing in the
foreground. On file from the wiki's pages and screenshots: the plush is what the old man gives for the mask, and
it "has the design of the one left by Help Wanted's Trapped ending" (`hw2-pq4-vanny-mask-trade`,
`hw-trapped-ending-plush`), the ending in which the rabbit in the code is shut behind a door; the rabbit in the
code glitches this game's instruction screens (`hw2-glitchtrap-corrupts-backstage`); the achievement that
follows reads "System threats found. Repair complete."

That is a short inference of two steps: the green rabbit plush is the token of the rabbit in the code, and the
rabbit-eared figure lit in the same green, in the plush's scene, is that rabbit. No rival is on record. The
player looks on from inside the heap of toys and has traded the mask away; if the figure is the plush itself,
what is crushed still stands for the same rabbit. `vanny` gives the reader two of the three grounds within a
paragraph of the claim (the trade for the green plush before it, the glitching after it), and has tied the
plush to Help Wanted's last tape in its first section. The other layers give the marker and the citation, which
is how they carry every "most likely".

"A copy of" is another claim, and it is the wiki's (`vanny` 1). The grounds do not reach it, and the analyst's
note stands: "Nothing in the picture says what the tiny figure is". So: "a tiny rabbit-eared figure, most likely
the rabbit in the code".

## The six figures

Each image was viewed. Each caption agrees with the image, with its credit caption and with the record it
names, but for the opening words of one.

| chapter | image | caption against image, credit and record |
|---|---|---|
| `vanny` | `sb-credits-cast-list.jpg` | agrees: "Vanessa" and "Vanny" on two lines, two performers |
| `killer` | `ffps-credits-cast.jpg` | agrees: "William Afton" over "PJ Heywood" |
| `two-machines` | `sotm-cabinet-subtitle-labels.jpg` | agrees: DISPATCH, F10 N4, FIONA, in that order |
| `pizzaplex` | `sb-closing-announcement-entrance.jpg` | agrees: the subtitle, with the entrance in view |
| `mimic` | `hw2-ending-girl-takes-rabbit-mask.jpg` | agrees: two robot hands, a rabbit mask, a girl |
| `ffps` | `ffps-completion-three-machines-burning.jpg` | the three machines agree; "The last scene" does not (`ffps` 1) |

## The paragraph breaks in `people.ts`

Commit `a26164c` changed no word: with each of its 38 breaks put back to a space, the file is the one before
it, byte for byte. I read all 38 and not three. They stand in 28 fields. None falls inside a quotation, a
parenthesis or a citation, and each follows the end of a sentence. Four fall between a claim and its
qualification (`people` 5).

## The three chapters read from the top

- `pizzaplex`: the new paragraph on the closing sits well before "In RUIN, set after this night". The table and
  the paragraphs after it agree with each other and with `vanny`. One finding (`pizzaplex` 1).
- `vanny`: "Of the scenes below, the hideout in RUIN is told as described" is now true of the section: the
  third game and the main ending carry their own hedges, and the two sentences on the hideout are the only ones
  left that rest on a description. Three findings.
- `mimic`: the new figure follows the sentence it shows. One finding (`mimic` 1), and the comma noted in
  `vanny` 1.

## Seen and not counted

- "The boy beats the burnt rabbit" (`pizzaplex`, table) and "the rabbit is beaten" (`burntrap`, body). The
  record had "defeats" and now has "After Gregory's fight with"; its notes describe prompts to push a button
  and do not say how the fight ends. Both sentences are the analyst's.
- `deaths.ts` 96, note: "That there are bodies in character costumes is told as described, with no capture of
  them on file." The other four tellings now say "by a fan wiki's account", and a recording shows "slumped
  figures in costumes", with nothing on screen to say they are bodies. The hedge is there; its wording is the
  old one.
- "Silhouette" for the giant, in five sentences. The record now has "a giant figure with a rabbit's head,
  stitched and patched", and the analyst notes that its face is lit for part of the scene. The hero image of
  `vanny` does show a silhouette, and `hw2-pq4-elevator-claw-machine` still says "a dark silhouette".
- `relations.ts` 91: "By the wiki's account the Princess of the third arcade game strikes a door …, and in the
  ending that follows the rabbit mask lies on the floor". The hedge is right for the door and can be read over
  the ending's page as well, the same shape as `people` 3. It is older than this round.
- Three more breaks in `people.ts` after which the new paragraph leans on a word of the one before:
  `vanny`, theory, first break ("counts against it too", which parts the two records against the reading);
  `ucn-protagonist`, theory ("that line"); `william-afton`, theory, second break ("those two words"). None
  parts a claim from its qualification.
- `patterns`: "most likely a copy of it, and in RUIN, most likely the later of the two". Two markers in one
  sentence, on two claims. The tool calls it a stack; it is not one.
- `killer`: the quotation block prints "William Afton / PJ Heywood", and the new figure, one paragraph on,
  shows the same two lines.
- `timeline.ts` 61: "a call that opens "this is dispatch with Fazbear Entertainment"". The call's first words
  are "Arnold! Hey buddy,"; the phrase is in its first line, and the record that now holds that line
  (`secret-of-the-mimic-opening-call-arnold-dispatch`) is not cited there.
- Your message says one player's recordings. Two records name another's: the alley ending, and the second look
  for the work order. No sentence of the text depends on whose they are.
- `people.ts` 1210, `jj`, summary: "by that record's note, Ultimate Custom Night's roster and Scott's guide to
  that game later call it JJ". Still true, and a step behind: the guide's heading "JJ" is now quoted in a record
  of its own, added to this entry's evidence list (`scott-ucn-character-guide-jj-marionette-phantom-mangle`).
- The claim of `hw2-faz-force-achievement` still has "RUIN's Mask Bot". That is a record and not text.

## For the adjudicator

1. **`vanny` 1.** Which form to keep is yours: "most likely the rabbit in the code", or the analyst's "a copy
   of the rabbit in the code by a fan wiki's account". What cannot stand is the wiki's word under the model's
   marker.
2. **Shadow Bonnie in tier two.** The tier is headed "A name Scott uses that no game prints or speaks". The
   record says of Scott's guide: "whether the game's own roster prints this heading was not checked", and the
   guide says that shortened versions of its entries show in the game. If Ultimate Custom Night's roster prints
   "Shadow Bonnie", the name belongs in tier one. `ev-gaps.md` lists this as not checked.
3. **R19's "Changes if"** in `research/rulings.md` still has "the credits roll, once captured, reads otherwise
   than the transcription" (`vanny` 3).
4. **What a flat telling of a scene now rests on.** `canon-rules` says that a scene "that the archive holds as
   a description and has not captured" is tagged. Eight scenes are now told without a tag from recordings of
   other people's play, read frame by frame with the sound not heard; seven of the eight records say "not
   checked in play by this archive", and the graveyard's says only that it was seen in a capture of play. A
   recording is a capture, so the rule holds as written. Whether the rules chapter should say so in a sentence
   is for you.
5. **The burner rooms.** `people.ts` 547 puts the recharge station "in the burner rooms of a ruined pizzeria",
   on `security-breach-underground-pizza-place`, which was not set against a recording and rests on the wiki.
   The corrected record of the ending says that the fight is "in a wood-panelled office with monitors" and
   that the fire's being set in burner rooms is the wiki's account. The burners themselves are on record from
   RUIN (`ruin-burners-inside-of-an-oven`). Where the station stands is not on record as seen.
6. **`pizzaplex` 1.** "Most likely Bonnie" makes the name the model's; "by a fan wiki's account" leaves it the
   wiki's. Either is in order.

## Could not check

- The recordings themselves. I read the records and the analyst's reports, and viewed the six frames used as
  figures; I did not open the videos, so "seen" and "read on screen" are the analyst's word throughout.
- Sound. No record of this round has it; the one sound told as a sound in a changed sentence, the scream in
  Princess Quest III, keeps the wiki's tag.
- Whether each `further` and evidence list is the right place for its new record; I checked only that every id
  is a record and that the validator accounts for all 1064.
