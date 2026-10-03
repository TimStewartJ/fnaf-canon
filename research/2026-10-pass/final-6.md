# Final pass, writer 6: `afterimage.ts` (`cover-story`, `digital`, `vanny`, `pizzaplex`)

3 October. Base: my revision as committed in `bd65c8e`. Read: `BRIEF-final-pass.md`; the reader's memo (how to use,
sections 1 and 2, my four chapters in section 4, sections 5 and 6); the editor's memo as first published at 07:14
and again after its additions of 07:37 ("For every writer" with section 6, and my 33 items); rounds four and 4b in
`rulings-brief.md`, and R31 in `model.md`; and the orchestrator's message of 07:58 with its five decisions. The
editor's memo had not changed between my reading and that message (its "For every writer" and my section have the
same checksums as at 07:46), so both memos were already applied; what the message added is decision 2, applied at
07:59. Only `src/data/chapters/afterimage.ts` was written. Nothing is committed.

No chapter title, id, question or confidence changed. One `counterEvidence` list changed (`pizzaplex`).

## 1. The editor's memo: 33 items

**Applied: 31.** Fifteen are in the file word for word (cover-story 2 and 3; digital 1, 5, 6 and 7; vanny 5, 6, 7,
8 and 10; pizzaplex 3, 4, 7 and 11). Sixteen say what the item's `new` says in other words, most for one of three
reasons: the reader's memo rewrote the same sentence, the four tags replace a longer aside, or a word had to go
under the orchestrator's decision 3. They are:

| Item | How it stands in the file | Why not word for word |
|---|---|---|
| cover-story 1 (`answer`) | Three sentences. "It behaves as one actor in every game that shows it: nearly every explanation it gives is a denial or a programming quirk, and each concession comes with a denial or a disclaimer beside it. It sells its own past as entertainment, and what it knew shows only in what it does." | The reader's note 1 asked for the 36-word sentence to be broken and for the last sentence to be turned forwards. Still three sentences |
| digital 2 | "has a graveyard of six unmarked stones ¹ (a fan wiki's account)" | Decision D: the tag for a count taken from a wiki, in place of "counted on the wiki's screenshot" |
| digital 3 | "When the anomaly is near, a low-pitched clip plays: the tape speaker's greeting, pitched down ¹ (a fan wiki's account)." | The tag, in place of "which the wiki's audio page identifies as" |
| digital 4 (`tension`) | "the greeting that plays near the figure ¹ (a fan wiki's account), a borrowed voice if it is the figure's own, which is how Murray's copying machine is read to speak ¹ ¹" | Inside the reader's rewritten paragraph. "Is read to speak": `secret-of-the-mimic-log-turn-around` now gives the borrowed phrases as the usual reading, and `ruin-mimic-reuses-gregory-lines` gives the endoskeleton's part as inference |
| digital 8 (`answer`) | The item's three sentences, with "leans to that over" for "prefers that to" | Decision 3: "preference" goes, and "leans" is the word for a choice between two close readings |
| vanny 3 | "in the next game the mask still shows a rabbit's shadow on the hideout wall ¹ (as described)" | The tag, in place of "by the wiki's summary" |
| vanny 4 (`answer`) | "Most likely one woman: Vanessa, ... Most likely she was also the tester who is left a plush rabbit ... Another ending leaves a blonde woman at the doors with the mask on the floor: the model reads her as Vanessa, who may have been freed." Four sentences | The reader's note 3 (two sentences, a marker each). "Holds it loosely" becomes "may", the marker the first page defines for it |
| vanny 9 | "The model leans against it, on the mask on the floor with a blonde woman at the doors" | "Narrowly" goes (decision 3) |
| vanny 11 | "Because that one email comes before the scan, the model reads {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) as having reached her through the VR game." | The reader's note 2 rewrote the sentence; the token and the first-use form are the item's |
| pizzaplex 1 (`tension`) | The item's five sentences less one clause, with "(see ((vanny)))" added and "that Vanessa may have been freed" for "holds loosely that Vanessa was freed" | The clause on the headless Freddy is left out: R19 (round 4b) lists that record as "not against", so it left `counterEvidence`, and decision A keeps the tension to the counter records. The body carries it (items 3 and 4) |
| pizzaplex 2 | The sentence is gone | Reader's note 1 and table A16: the cable and the shaft are now told only in `burntrap`. "Its builders" appears nowhere |
| pizzaplex 5 | "A second voice of his reaches her on her radio" | A new sentence: the one before it now says what brought Cassie in (see section 3) |
| pizzaplex 6 | The item's words, with "(see ((vanny)))" after them and without the news report | Reader's table A12, and decision H (a cell is a sentence or less) |
| pizzaplex 8 | "what happened to the Bonnie that lies broken in a hidden room in RUIN, the game's sequel ¹ (as described)" | The tag. "What happened to", not "who wrecked": the record's notes say "RUIN does not say what happened to him" |
| pizzaplex 9 | "A therapist tells the patient that the chair does not really fit, and calls the patient "something of a phenom", "like a hacker"" | "A therapist", not "The": the sentence before has "company therapists" and no one of them yet |
| pizzaplex 10 | The first-use form is in prose, at the first mention, and in the words of the orchestrator's decision 2: "an older pizzeria whose sign reads "Freddy Fazbear's Pizza Place" and, in a recharge station down there, {{burntrap}} ¹ (known as Burntrap, a working name that Scott has said now stands ¹)". The table cell says "the burnt rabbit under the Pizzaplex" in full. "The game's files call it Burntrap" is nowhere in the file | With the form inside it, the cell ran to 38 words, and the reader's memo names this table as hard on a phone. The form itself changed by decision 2 |

**Applied in part: 1.** vanny 1 (`tension`). In the file: the roof page as its record now has it, "with the mask
off", and the arm "(as described)". Three things of the item's text are not there.

- The cast-list sentence. `security-breach-credits-vanessa-vanny-two-parts` is not in `sb-mimic.json` (looked at
  07:27, 07:43, 07:55 and 08:00). A record that does not exist cannot be read, and its id fails the validator. The
  orchestrator's message of 07:58 says to leave both items in that case: the text to paste is in section 6, item 1.
- "The model keeps one woman, narrowly, on the mask on the floor, the therapy recordings and Freddy's reading of the
  name". The reader's note 1 replaces the first three sentences with two, because the compare box above already
  says this, and "narrowly" goes.
- The clause on the rabbit's shadow in RUIN. It is in the body two paragraphs above (vanny 3), it is not a counter
  record, and decision A asks the tension not to tell the body again.

**Not applied: 1.** vanny 2 (`counterEvidence`): the same missing record. See "For the orchestrator", item 1.

**The list at the end of my section.** Answers: `cover-story` and `digital` are three sentences. `vanny` is four and
`pizzaplex` five, because the reader's notes split a sentence in each. Tensions: five sentences, five, four, five.
All ten headings on the list now state what the section finds:

| Chapter | Was | Now |
|---|---|---|
| `cover-story` | The games inside the story | The games exist inside the story |
| `cover-story` | What a staged level shows | A staged level shows what the company chose |
| `digital` | What it did to the testers | It wants a way out through a tester |
| `digital` | What it is | What it is: something he left behind, by a narrow margin |
| `vanny` | Ness | Ness's searches raise the alarm |
| `vanny` | Vanessa | Vanessa matches Ness at four points |
| `vanny` | Princess Quest | Princess Quest: fought from inside, and unproven |
| `pizzaplex` | Gregory | Gregory is a boy the systems do not know |
| `pizzaplex` | The night | Only Freddy does not hunt him |
| `pizzaplex` | Six endings | Six endings, and RUIN follows no single one |

**"For every writer".** Section 1: `cover-story` now says "a machine in the building" and links `two-machines`;
`digital` links `timeline-math` for the scan's place and `thesis` for "not one history"; `pizzaplex` gives the
buried pizzeria one sentence and a link. Section 3: every row that names my chapters is as the table words it.
Section 6 (07:37): `pizzaplex` still keeps RUIN's building and Vanessa's release as two branches ("the model's
account is a composite"), and "They do not say whether he lived" stands in `digital`.

## 2. The reader's memo: 18 notes on my chapters

**Taken: 17.**

- `cover-story` 1, with R31's words where the memo's sentence had "throughout" and "wrapped" (the ruling, and
  the editor's item 1). 2 and 4 as written. 3 with "reports" for "knows": the email after the halt is the one that
  reports a virus (R18, round 4b).
- `digital` 1, with every record kept and three clauses re-worded for what the records now say: the greeting (the
  editor's item 4), "the offer in the WA letter" for "WA's bid for his software" (the letter names no reader), and
  the tag. 2 as written. 3 with "person-shaped". 4 as written.
- `vanny` 1, with "a blonde woman in Vanessa's cap and uniform". 2 and 3, as in the table above. Note 3 is the
  memo's corrected fix (the reader's message of 08:05: two sentences, a marker for each inference), which was the
  version I read; the one difference is "the tester" for "the beta tester", from the editor's vanny 4. 4: "Security
  Breach tells all its endings but one as comic pages", from the notes of
  `security-breach-ending-burn-it-all-down`. 5: five tags, four in the body and one in the tension.
- `pizzaplex` 1 in substance: one sentence for the pizzeria. The bracket is not the memo's. A chapter link prints
  the chapter's title, so "(→burntrap tells how its builders found it)" would print "The burnt rabbit under the
  Pizzaplex tells how its builders found it", and "its builders" is wrong on the record (R20, round four). The
  paragraph ends "The next chapter tells both in full." 2 as written. 3 with "Vanessa may have been freed, which
  only another ending shows" for "held loosely". 4: "This archive calls the patient client 46, after the numbers on
  those discs."

**Taken in half: 1.** `pizzaplex` 5. The earthquake has its tag, "(read from an image)". "PROTOTYPE" has none: the
label has since been viewed in a capture of the game and the record re-worded, so the sentence is the editor's
(pizzaplex 4) and there is nothing left for a tag to qualify.

**The eight decisions.**

- A. The four tensions name their counter records and stop: 170 words to 120, 218 to 161, 170 to 128, 131 to 109.
- B. One home each. The roof is told in `vanny`'s section; `pizzaplex` has its table cell and a link. In
  `cover-story` the tension no longer quotes "no longer a corporate entity" a second time.
- C. One abstention a chapter: `digital` "The model does not choose"; `pizzaplex` "the model does not rely on it";
  `vanny` "the model has no account of it", which R19 requires, in the answer and in the tension and no longer in
  the section as well. Cut: "and says so", "and the model has no account of it" (the section), "Both ends are
  stated, and the line between them is inferred", "What survives all three is the pattern...".
- D. Tags in the file: "(a transcript)" once; "(a fan wiki's account)" three times; "(as described)" eight times;
  "(read from an image)" once, and once in a date pill's note. No longer in the file: "kept here as a transcript",
  "counted on one screenshot", "as that game is described", "as the room is described", "a label not yet checked in
  play", "whose placement in play is unconfirmed".
- E. Gone: "loosely" (four uses), "a loose one", "narrowly" (two), "prefers", "on a narrow margin" in the body, and
  "leans on" in the sense of "rests on". "Leans" is used three times, each for a choice between two close readings
  (`digital`, answer and body; `vanny`, the two-women column). What was held loosely is now "may", with its reason
  beside it.
- F. All four answers open on the verdict. `vanny`'s is 100 words: both memos add to it.
- G. Turned forwards: "They do not say whether he lived", "The message does not say which kids", "No game says who
  made them". One turned sentence a chapter remains.
- H. No table cell is more than one sentence. The roof cell is 26 words (it was 34). Captions say what to look at.

**Glosses (2.3).** HandUnit is "its recorded guide" in `cover-story` and `digital`. The Cassette Man is "the voice
on that game's tapes" in `cover-story`, in a paragraph that opens on Pizzeria Simulator.

**Sentences to keep.** "The signs cannot choose: a copier that had learned him would wear them all." and "It takes
two objects to hear her." are untouched.

## 3. Sentences changed because a record changed under them

`changed-records.py` against `bd65c8e`: 160 of the 252 records the file uses have changed. I read every changed
record that a sentence cites, against that sentence, and ran the tool again at 07:39. The evidence files have not
changed since `37856e3` (07:21), and none of the 141 cited records changed between 07:41 and 07:50.

**45 sentences, cells and captions changed or went.** Twenty-one went through the editor's items: its sixteen
tagged RECORD, digital 8 (the answer), the two tensions, and pizzaplex 3 and 4. I found 24 more in my own reading.
Twenty-one of them:

| Chapter | Sentence | Record, and what it now says |
|---|---|---|
| `cover-story` | Scott's photograph: "who put his own photograph on one of the ride's posters for that developer" | `hw-intro-indie-developer-poster` no longer says the poster stands for the developer. Scott's own words do: `scott-2019-indie-dev-photo`, now cited |
| `cover-story` | Table: "a management report asks" | `security-breach-msg-re-theme` (was "a staff message") |
| `cover-story` | "a dispatcher's voice on his van radio, most likely the company's own, dismisses him" | `secret-of-the-mimic-clock-out-real-dispatch`: "a Dispatch voice"; that it is the real one is "the usual reading" |
| `cover-story` | "A machine in the building says of the technicians before him, "They didn't listen, and it caught them all"" | `secret-of-the-mimic-f10n4-fazbear-will-send-another`: the line is now in `quote` |
| `cover-story` | The sentence on "the original" and "our rebuilds": cut | `sd-rebuilds-of-original-animatronics`: the emails name no model, and "the original" is a new model's, known by report. The record is now in `further` |
| `cover-story` | "before the contractor reports what its scan has let out" | `sd-fe-legal-halt-vintage-hardware`, notes: the halt falls between the lockout and the email that reports a virus |
| `digital` | "Edwin Murray's copying machine ... was software by 1979, begun as a copy of a program" | `secret-of-the-mimic-mail-received-5-min-ago`: unsigned; "copied between bodies" said more |
| `digital` | "a letter signed WA makes an offer that takes in "software development"" | `secret-of-the-mimic-mail-wa-far-behind`: the letter "tells its reader"; it names no reader |
| `digital` | "a patient has developed "software programs that talk to you and repeat phrases", and a therapist hears "someone else responding"" | `security-breach-cd46-talking-programs`: "it sounds as if someone else is responding" |
| `digital` | "In these games a board carries a personality: HandUnit says as much of the old control boards ¹" | `sd-cpu-whole-new-personality`, notes: that the two games mean the same thing is a reading. Each game's line is now cited to its own record, under "The model's reading" |
| `digital` | "a rabbit-eared creature hangs overhead ¹, and a line of glyphs appears" | `hw-mobile-princess-quest-final-room` does not put the creature above the glyphs |
| `digital` | "it may be the thing that game hints is outside" | `ffps-tutorial-something-outside`: "which we are not confirming to be the case" |
| `vanny` | "A set of retro CDs in that game holds her sessions" | `security-breach-cd-therapists-shared-and-replaced`: the CDs are played in a hidden room; no record says the discs are hidden |
| `vanny` | Table: "A check of her online history finds Luis, and encrypted conversations with someone else" | `security-breach-cd-vanessa-encrypted-conversation`: "Yes, I see Luis here, but there's someone else." The record does not say that Luis watches her |
| `vanny` | "strikes a door like the one at the end of Help Wanted" | `security-breach-pq3-help-wanted-hub-trapped-door`: "a door like the one" |
| `vanny` | "A log found near one of the cabinets, which names no game" | `security-breach-msg-red-flag`: "The message names no game" |
| `vanny` | "a Princess Quest cabinet lies toppled" (was "the third cabinet") | `ruin-vanny-hideout-glitchtrap-shadow`: that it is the third is a reading |
| `vanny` | The main ending no longer "leads into RUIN" | `hw2-faz-force-ending`: the link is the wiki's identification of the girl and the bot |
| `pizzaplex` | "{{cassie}}, whom that game's synopsis calls his best friend, goes into the wreck after a message in his voice says he is trapped there" | `ruin-cassie-seeks-gregory` |
| `pizzaplex` | "Roxanne, the band's wolf, calls the boy's name and seizes Cassie" | `ruin-roxy-give-me-back-my-eyes`, re-worded after 06:55: no longer "still searching for Gregory" |
| `pizzaplex` | "One comic page draws a burnt rabbit beside a bear-faced mass, as in the underground ending" | `ruin-gregory-comics-depict-endings`: the claim's own words |

The other three: the alley cell and RUIN's wrecked building take "(as described)"
(`security-breach-ending-alley`, `ruin-pizzaplex-abandoned-earthquake`), and "the retro CDs that hold Vanessa's
sessions" replaces "recordings hidden in the building" in `pizzaplex`. Five quotations came back because the
`quote` fields were completed: "finally move past these childish ghost stories", "Please accept that statement as
our full legal disclaimer", "no longer a corporate entity", "Whatever Dan brought me", and the teaser's "It was an
accident."

**Answers changed by a record: 2.** `digital`: "a person's shape", was "a man's shape"
(`hw-rabbit-figure-appearance`). `vanny`: the roof page and the doors now show "a blonde woman", with Vanessa as
the model's reading, and "the tester" for "the beta tester" (`security-breach-rooftop-vanessa-alive`,
`security-breach-ending-redemption`, `hw-waiver-qa-team`). `cover-story`'s answer changed by ruling (R31, round
four), and `pizzaplex`'s in shape only. **No confidence changed.**

## 4. Checks, at 08:00

| Check | Result |
|---|---|
| `npx tsx scripts/validate.ts` | OK. Coverage 1044/1044. No warning names my file: the one about `scott-silver-parasol-website` went when the id came off `outsideStory` |
| `npx tsc -b` | exit 0, no output |
| `quotecheck.mts … 3 --weak` | No MISS and no UNCITED in my chapters. One weak line: "I always come back" in `digital`, found first in the notes of the record cited before it. The words are verbatim in the `quote` of `ffps-scraptrap-always-come-back`, cited in the same sentence, and the editor's memo (section 5) says this line needs nothing. The two lines the tool printed before are gone (`cover-story`, answer; `vanny`, body) |
| `wordcheck.py --all` | No hit in `afterimage.ts`. The one before was a year in a `further` comment |
| `prose-report.mts` | No sentence over 40 words; nothing missing |
| `chapter.mts`, each chapter read from the top | Done; seven sentences re-written for it |

## 5. Words

| Chapter | Body before | Body after | Answer | Tension |
|---|---|---|---|---|
| `cover-story` | 1,000 | 1,047 | 75 to 79 | 170 to 120 |
| `digital` | 1,097 | 1,127 | 79 to 82 | 218 to 161 |
| `vanny` | 1,030 | 1,096 | 91 to 100 | 170 to 128 |
| `pizzaplex` | 1,031 | 1,087 | 85 to 84 | 131 to 109 |

Every body is longer, and every tension shorter. What grew the bodies: two first-use forms that were missing
(`vanny`, `pizzaplex`); twelve tags; "a blonde woman in Vanessa's cap and uniform" wherever "Vanessa" stood for
what a page shows; ten headings that now state a finding; the quotations that came back; and the sentences in
section 3 that had to say what a record says and not the reading of it. I cut where a sentence had stopped earning
its place (the rebuilds, the cable and the shaft, four tails) and did not cut to reach a number.

## 6. For the orchestrator

1. **The cast list: two items left for you, with the text to paste.** `security-breach-credits-vanessa-vanny-two-parts`
   is not in the evidence files (`sb-mimic.json` was last written at 07:16; looked again at 08:00), so the editor's
   vanny 1 (its cast-list sentence) and vanny 2 are not in the file. Both changes are in `vanny`, and both are whole
   lines of `afterimage.ts`.

   The `counterEvidence` line becomes:

   ```
    counterEvidence: ["security-breach-rooftop-vanessa-alive", "security-breach-credits-vanessa-vanny-two-parts", "ruin-gregory-comics-depict-endings", "hw2-pq4-consequences-achievement", "hw2-glitchtrap-corrupts-backstage", "hw2-faz-force-ending"],
   ```

   The `tension` line becomes (one sentence added after "…and the model has no account of it."; nothing else
   changes, and the field is then five sentences and 179 words):

   ```
    tension: "One page will not fit: a blonde woman in Vanessa's cap and uniform on the burning roof after the woman in the rabbit costume has fallen [[security-breach-rooftop-vanessa-alive]]. The section above says why it cannot be set aside, and the model has no account of it. The game's cast list also credits \"Vanessa\" and \"Vanny\" as two parts with two performers [[security-breach-credits-vanessa-vanny-two-parts]] (a fan wiki's account); a credit names a voiced part and not a person, and the same list gives Vanessa's performer Glamrock Chica as well, so it shows two voices and does not say two women. On her release, the comic pages in RUIN that look like Gregory's draw every ending except the Princess Quest one [[ruin-gregory-comics-depict-endings]], and no later game shows her with the mask off. On the remedy, Princess Quest IV's achievement reports \"System threats found. Repair complete.\" [[hw2-pq4-consequences-achievement]], but in that same game the rabbit in the code glitches the instruction screens [[hw2-glitchtrap-corrupts-backstage]] and a rabbit-costumed arm reaches out in the main ending [[hw2-faz-force-ending]] (as described): the games show the thing fought from inside, and do not show that it worked.",
   ```

   The added sentence alone, as it sits inside the string:

   ```
   The game's cast list also credits \"Vanessa\" and \"Vanny\" as two parts with two performers [[security-breach-credits-vanessa-vanny-two-parts]] (a fan wiki's account); a credit names a voiced part and not a person, and the same list gives Vanessa's performer Glamrock Chica as well, so it shows two voices and does not say two women.
   ```

   It is the editor's sentence with the tag in place of "read here from the wiki's transcription". I could not read
   it against a record. Three things in it must be in the record when it lands: that the list credits "Vanessa" and
   "Vanny" as two parts; that the two have different performers; and that Vanessa's performer is also credited as
   Glamrock Chica. If the record says less, cut the clause it does not carry.
2. **`theory.ts`.** Done by the lead by 08:00: `scott-silver-parasol-website` is off `outsideStory` and filed in
   `cover-story`.
3. **One heading keeps "by a narrow margin"** (`digital`), which is the reader's own wording for it. If "narrow"
   is to go with "narrowly", the heading is "What it is: something he left behind, by one step", which is what the
   section argues.
4. **Burntrap's first-use form** is the one in your decision 2, once, in `pizzaplex`'s fifth paragraph: "the burnt
   rabbit under the Pizzaplex (known as Burntrap, a working name that Scott has said now stands)". The storyline's
   beat `s-pizzaplex` still had "by the wiki's account the game's files call it Burntrap" when the editor's memo
   was written.
5. **`ruin-prototype-freddy-headless`** has left `pizzaplex`'s `counterEvidence` (R19, round 4b) and is still
   cited in the body.
6. **`fnaf3-coming-soon-newspaper` is a new citation in `cover-story`**: one sentence before the table says why
   FNaF3 is there for its training tapes and not for the attraction ("Local amusement park"). R31 lists the record
   as against; I did not add it to `counterEvidence`, because the editor's items did not and the tension is at five
   sentences. Say if it should be there.
7. **The dismissal in 1979** now carries "most likely the company's own", because the record no longer states
   that the voice is the real dispatcher. R31 counts the dismissal as what the company "certainly said that night".
   If the ruling's word is to stand over the record's, the three words come out.
8. **`people.ts`** prints "therapy client 46" for `client-46`. `pizzaplex` says "client 46" in plain words and
   uses no token for it.
9. Reader's memo, "possible errors": none of the fourteen is in my chapters. Item 5 concerns the rule on endings,
   which `pizzaplex` states (now in the reader's wording: "what an ending makes happen may not have happened, and
   what it shows to be already so holds on every route"); `canon-rules` may want to link here.
10. **`further` comments.** The trailing comment on each `further` line now carries the record's present title and
    certainty (most titles changed in `37856e3`). A year after 1987 at the head of a title is left out of the
    comment, which is why `wordcheck.py` no longer prints the line it printed for this file. Membership changed in
    three places only: `scott-silver-parasol-website` and `sd-rebuilds-of-original-animatronics` came in
    (`cover-story`), and `scott-2019-indie-dev-photo` went out because it is now cited.

## 7. Readability round (3 October, 12:42 to 13:30)

Read first: `BRIEF-readability.md`; `reader2-memo.md`, sections 1 and 4 and the rows for my chapters; rounds 4c
and 4d and R18, R19 and R22 as they now read. `vanny`, `pizzaplex` and `digital` were read from the top in the
reader's view before the edits and again after. I started from `ee957f3`; my file was unchanged at `5bc6585` and
`b9f05a1`, which landed while I worked. Only `src/data/chapters/afterimage.ts` is edited, in the lines of the six
passages. `cover-story` is untouched. Nothing is committed.

### 7.1 The six passages

Words are counted with the citations taken out.

| Passage | Before | After |
|---|---|---|
| 1. `vanny`, the answer | 100 words, 4 sentences | 60 words, 3 sentences |
| 2. `vanny`, rooftop page: the "Two women" card | 56 | 48 |
| 2. `vanny`, rooftop page: first sentence of "what pushes back" | 26 (the whole: 184) | 6 (the whole: 164) |
| 3. `vanny`, the Princess Quest section | 318 words, 5 paragraphs, 4 tags | 342 words, 4 paragraphs, 1 sentence for the tags |
| 4. `pizzaplex`, the paragraphs after the endings table | 274 | 279 |
| 4. `pizzaplex`, the last cell of that table | 9 | 4 |
| 5. `digital`, "what pushes back" | 163 | 138 |
| 6. `pizzaplex`, "what pushes back" | 120 | 67 |

1. **`vanny`, the answer.** What went: the fourth sentence, on the other ending. The reader finds it in the "One
   woman" card (the mask and bow tie on the floor, a blonde woman at the doors, "the model takes her for
   Vanessa") and in the last paragraph of the Princess Quest section ("Vanessa may have been freed, and the signs
   of it are few"). "At the end of Help Wanted", "of one ending" and "from it" went by re-wording.
2. **`vanny`, the rooftop page.** Told in full once, in "One woman, or two" with its figure (unchanged). The "Two
   women" card names it ("the plain reading of the rooftop page") where it re-told it. "What pushes back" opens
   "The rooftop page will not fit" where it described the page again. R19's four points are each said once: the
   page is shown (the figure); it "counts against one woman in full" (the section); the cast list counts "at less
   weight than the page" ("what pushes back", round 4c wording, untouched); "The model has no account of one
   page" (the answer).
3. **`vanny`, the Princess Quest section.** New order: what Princess Quest is, where it stands and the staff it
   had drawn; the third game, then the fourth; the model's reading and why the remedy is unproven; Vanessa's
   release (unchanged but for its tag). The staff messages moved up; "The crush is Help Wanted 2's secret ending"
   is joined to the sentence on the fourth game; one sentence replaces the four "(as described)". Nothing went.
   It is 24 words longer: 20 for that sentence and 13 for one clause that says which arcade game this is, less
   the tags and the join.
4. **`pizzaplex`, after the table.** The conclusion comes first ("the model's account is a composite: one route
   for the building, another for Vanessa"). Then the building: the mask, the wreck and the public story; the
   signs for the underground route; the headless Freddy, which does not count against it. Then Vanessa, with the
   comics that cut both ways. What went: "That is a different branch from the underground route", which the new
   clause says. Vanessa's release is said once, in the last paragraph; it left the table's last cell (now "Not in
   the comics") and "what pushes back". The rooftop page is told once, in the table's roof row (untouched).
5. **`digital`, "what pushes back".** The four rival records are named in one sentence, each with its citation,
   and "are in the box above" stays. The clause on the greeting as a borrowed voice is now its own sentence: the
   box does not have it, and it holds the chapter's only citations of two records. What went: two of the model's
   three answers. "No record puts Murray's software on a Fazbear board" is under the box ("The rival needs two:
   Murray's program on a company board, and near the killer") and in "what would change this". "Help Wanted's
   account of what was scanned names nothing of Murray's, only old hardware that the client sent" is covered by
   the answer that stays, and the old hardware is in the chapter's first paragraph.
6. **`pizzaplex`, "what pushes back".** One sentence for each of the three records against. What went: "The game
   gives six endings and no ruling between them" (the section has "No game says which happened"); the alley
   scene (the table's first row; the shadow and its tag stay); the description of the rooftop page (the table's
   roof row; here it is named, cited and linked to `vanny`); and the last sentence, which told the model's
   account again.

**No marker, record or rival reading was lost.** Each chapter cites the same records as before (`digital` 40,
`vanny` 36, `pizzaplex` 32), no `counterEvidence` or `further` list changed, and every `counterEvidence` record
is still named and cited in its chapter's "what pushes back". Markers on the claims touched: both "Most likely"
in `vanny`'s answer; "the model reads" and "may have been freed" for Vanessa's release; "most likely" for the
underground route and for RUIN as the later game; "if there is one" for the way out; "if it is the figure's own"
and "is read to speak" for the greeting; "which names no game" for the log. The rivals stand: "Two women" as "the
plain reading" of the page, "A copying program" in its card (untouched), and both readings of the comic pages.

### 7.2 Sentences not made only of words the passage already had

For the verifier. Everything else in the six passages is an old sentence, moved, joined or cut.

1. `vanny`, answer: "Most likely she was also the tester Help Wanted leaves with a plush rabbit." (was "the tester
   who is left a plush rabbit at the end of Help Wanted".)
2. `vanny`, answer: "The model has no account of one page: a blonde woman in Vanessa's cap and uniform on the
   roof after the woman in the rabbit costume has fallen." (the old words, re-ordered.)
3. `vanny`, "Two women" card: "Vanessa, and someone else in the costume: the plain reading of the rooftop page."
4. `vanny`, "what pushes back": "The rooftop page will not fit [[security-breach-rooftop-vanessa-alive]]."
5. `vanny`, Princess Quest: "The way out, if there is one, is an arcade game: the ending with the mask on the
   floor is reached by finishing it [[security-breach-ending-redemption]]." The clause after the colon is new to
   the section, not to the chapter: the "One woman" card has "the ending reached by finishing an arcade game"
   from the same record.
6. `vanny`, Princess Quest: "Three scenes below are told as described: the third game, Help Wanted 2's main
   ending and the hideout in RUIN." (rule 7. It covers `security-breach-pq3-help-wanted-hub-trapped-door`,
   `hw2-faz-force-ending` and both uses of `ruin-vanny-hideout-glitchtrap-shadow`: the four places that had the
   tag.)
7. `vanny`, Princess Quest: "Help Wanted 2, the next product, hides a fourth as its secret ending." (two joined.)
8. `vanny`, Princess Quest: "No game says who made them, and whether it worked is open." (two joined.)
9. `pizzaplex`: "No game says which happened, and the model's account is a composite: one route for the
   building, another for Vanessa."
10. `pizzaplex`: "For Vanessa the model reads the Princess Quest ending: she may have been freed, on signs seen
    only through the mask (see ((vanny)))." (the old sentence, joined with "Vanessa may have been freed" from
    "what pushes back".)
11. `pizzaplex`: "either they are stories the boy made up" ("the boy" for "he").
12. `pizzaplex`, "what pushes back": "The front-door ending leaves the rabbit-costumed woman's shadow over the
    boy [[security-breach-ending-alley]] (as described), and no later game undoes it on screen. The comic pages
    have scenes that match the other endings and none of the Princess Quest one, on which half of the model's
    account rests [[ruin-gregory-comics-depict-endings]] (read from an image). And the rooftop ending's last page
    is not a branch that can be set aside [[security-breach-rooftop-vanessa-alive]] (see ((vanny)))." New words:
    "The front-door ending" (the table's row is "The front door") and "on which half of the model's account
    rests".
13. `digital`, "what pushes back": "The greeting is a borrowed voice if it is the figure's own, which is how
    Murray's copying machine is read to speak [[secret-of-the-mimic-log-turn-around]]
    [[ruin-mimic-reuses-gregory-lines]]." (the old clause, given a subject.)

### 7.3 Checks, at 13:28

- `npx tsx scripts/validate.ts`: `OK`. The coverage line is the one from before the edits ("1046/1046 accounted
  (cited inline 663, counter-evidence 111, filed as further 344, outside the story 70); unaccounted 0"), with no
  warning.
- `npx tsc -b`: clean.
- `quotecheck.mts ... 3 --weak`: no `MISS` or `UNCITED` in my chapters; the one weak line is the old one
  (`digital.body[14]`, "I always come back").
- `wordcheck.py --all`: no line names my file.

### 7.4 Four decisions, for the lead

1. **The sentence for the tags** stands at the end of the section's first paragraph, not as its first sentence:
   after the reader is told what Princess Quest is, and before the first scene it covers. As the opening
   sentence it would name three scenes the reader has not met.
2. **Item 5 of 7.2** is the one clause that brings a fact of the chapter into a passage that did not state it.
   The section never said which arcade game the ending belongs to. If it counts as new, it comes out in one cut:
   the colon and what follows it, with the citation.
3. **The rooftop page in `pizzaplex`** is told once (the table) and named once ("what pushes back"), because the
   record is one of the chapter's three against and rule 3 keeps it named and cited there. For it to stand once
   only, cut the clause from the roof row; the record stays cited below.
4. **`vanny`'s "what pushes back" is still 164 words.** Only its first sentence was mine to change. The rest is
   the round 4c wording on the cast list and two sentences on the release and the remedy, which tell the arm and
   the glitched screens of the Princess Quest section again.
