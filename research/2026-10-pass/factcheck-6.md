# Fact-check 6: The afterimage

## What was checked, and against what

- **Chapters.** `cover-story`, `digital`, `vanny` and `pizzaplex` in `src/data/chapters/afterimage.ts`, as saved at
  02:07 on 3 October and committed in `4e9f667` (sha256 `4c03b8f1…`). The file did not change while I worked.
- **Storyline beats.** The three whose `sections` name those chapters: `s-rabbit-in-code`, `s-follower`,
  `s-pizzaplex`, in `src/data/theory.ts` as saved at 01:37 (sha256 `975ed442…`), which matches `telling.md` section B
  word for word. It did not change either.
- **Records.** All 139 records that the four chapters and three beats cite (inline, in a quote or figure block, in a
  date pill, or as counter-evidence) were opened in the JSON and read in full, with 43 more from the `further`
  lists and the rulings where they bore on a sentence. The evidence files changed twice while I worked (commits
  `0d54c83` at 02:20 and `1ebaa6f` at 02:47). Four records cited here had their notes or title reworded
  (`secret-of-the-mimic-teaser-1979`, `secret-of-the-mimic-work-order-1979`, `security-breach-burntrap-appearance`,
  `security-breach-ending-redemption`). All four were re-read, the report quotes them as they stand at 02:50, and
  no finding turns on the changes.
- **Quotations.** A script compared all 114 phrases in quotation marks and the 12 quote blocks with the `quote` of
  the record cited beside them. Every figure and hero image was looked at against its caption.
- **Rulings.** `rulings-brief.md` in full and `model.md` (rules W1 to W11; R18 to R22, R26, R27, R28, R31, R33;
  sections 3 to 6) as saved at 00:54, with `telling.md` and `telling-revisions.md` (01:37, 01:38).
  `npx tsx scripts/validate.ts` passes and has no warning that names these chapters.
- **The wiki** was used only as a transcript aid: to confirm the exact words of seven phrases that are quoted from a
  record's `claim` or `notes`, the order of the sentences in Help Wanted's opening narration, and the pages of two
  endings. Findings that lean on it say so.

## The checks the assignment named

| Check | Result |
|---|---|
| Every quoted phrase is verbatim from the cited record's `quote` | No wording is wrong. 106 of the 114 phrases and all 12 quote blocks match a `quote`, a printed word in a `claim`, or (once) a decode that the text labels as fans'. The other eight are seven spoken phrases, one of them used twice, that are quoted from a record's `claim`, `notes` or `title` and not from its `quote`. All seven agree with the wiki's transcripts; one differs by a space before a dash (`cover-story` 4, `digital` 8). |
| Nothing seen inside a staged level is used as a finding about the past | Clean. The child's hat, watch and shoe are "a staged prop" that "establishes nothing". The birthday room is "the company's staging", and only the figure's part in it is used. |
| Special Delivery's email dates are never printed, and only their order is used | No date is printed. One sentence takes more from the order than the order gives (`vanny` 1). |
| No year after 1987 | Clean. The only later years are out-of-universe: Scott's teaser and post of 2019 and the interview of 2024. |
| "I always come back" in Help Wanted is given as a fan decode | Clean, in all three places ("As fans decode it", "The decoded line", "exists only as a fan decoding of glyphs"). |
| The table of endings describes each ending as its record does and picks none | The six rows match their records, and the third column stays inside R19's grades. Two small points in the rows (`pizzaplex` 4 and 5). The hero caption above the chapter does pick: "the one in which Vanessa is freed" (`pizzaplex` 1). |
| The rabbit in the code, the burnt rabbit under the Pizzaplex and the copying endoskeleton are never identified with one another | Clean. `digital` keeps the three apart and says so twice. One clause of its `tension` contradicts a record the chapter cites (`digital` 2). |
| Labels (R26 as revised in round three) | Clean. The first-use form is exact and is used once. No forbidden token; `{{vanny}}` prints "Vanny". "The rabbit mask" and "the tape speaker" throughout; no fan name and no book name. Two descriptor slips (`pizzaplex` 6, `vanny` 8). |
| Nothing that only works on the novels' account | None found. The tester has no name or history, nothing is said about what happened to the Pizzaplex beyond the newspaper texture, and what is behind the rabbit is given as two readings from game records. |
| Written to the current rulings | Yes. The round-three `answer`, `tension` and `changesIf` lines are in all four chapters. The writer changed the wording of three answers in eight places, with the reason for each in a REVIEW comment, and each change is closer to the records than the line it replaces. The three beats have not had the same corrections: four of the seven beat findings are places where the chapter was fixed and the beat was not. |

Problem types used below: `unsupported`, `overreach`, `wrong record`, `misquote`, `uncited`, `no record`, `frame`
(answer, confidence, counter-evidence, tension), `rulings` (disagrees with a ruling or its required wording),
`consistency` (with itself or with another chapter), `reader`. There is no `dates` finding: both date pills are of
the right kind.

---

## `cover-story`: The company comes back

**Verdict: minor fixes.** The frame is argued as R18, R27 and R31 ask, the three things outside the pattern are each
kept on their own line, and the table's quotations are exact. One sentence in the key callout is wrong.

1. **"No game states it."** (callout "What the frame changes") `unsupported`. A game does: the tape quoted two
   blocks above says "Those indie games were designed to conceal and make light of what happened", and goes on,
   "it's an elaborate coverup" (`hw-tape-13-fe-hired-developer`). For the same reason "a strong reading of the tape"
   is the wrong description: the tape says it outright, and what is open is whether one witness's report is true,
   which the body has already said well ("one witness reporting what she read"). Fix: "That they were made as a
   cover-up is what one tape says, and the model takes it as most likely true: a strong reading, and not a fact.
   Scott's post leaves the same thought as a question in brackets: "(Or was it all part of the plan?)" No other
   record says it."
2. **"and fires the technician it sent: "You misplaced company property?""** `rulings` (W10). The dismissal happens
   in one of the game's three endings: the record's location is "Walk Away / Clock Out ending"
   (`secret-of-the-mimic-clock-out-real-dispatch`, `secret-of-the-mimic-ending-clock-out`), and the storyline says
   of those endings that "the model does not choose between them". R31 cites the dismissal without that marker, so
   this is inherited. Fix: "and, in the ending where he walks away, dismisses the technician it sent".
3. **"each admission comes wrapped in a denial"** (answer), and **"Twice the company concedes something"**.
   `overreach`. The second admission is not wrapped in a denial. The record's words are an apology, then a
   justification ("but it was important that your intentions and actions be genuine"), then the statement that the
   company no longer exists (`ffps-completion-tutorial-atonement`). It is also the company's own only if the
   Cassette Man worked through it, which the next paragraph rates loosely; the answer, rated high, counts it
   without that condition. And "Twice" is a count the records do not fix: the guide's "hilarious mistake" that "may
   or may not have resulted in an undesirable anomaly" is a third concession of the same shape
   (`hw-handunit-anomaly-fun-fact`, cited in ((digital))). The wording is R31's, so this is for the lead. Fix: in
   the answer, "each admission comes wrapped in a disclaimer"; in the body, "At least twice".
4. **Four phrases, in five places, quoted from outside a record's `quote`.** `misquote` (source only; every word is
   right). "these childish ghost stories" is in the `claim` and `notes` of
   `hw-intro-vr-game-to-move-past-ghost-stories`. "no longer a corporate entity" (body and tension) and "atoning
   for past mistakes" are in the `claim` and `title` of `ffps-completion-tutorial-atonement`, whose `quote` stops
   at an ellipsis before them. "You misplaced company property?" is in the `notes` of
   `secret-of-the-mimic-clock-out-real-dispatch`. All four were checked against the wiki's audio tables and are
   exact. Fix: lengthen those three `quote` fields, or leave the text as it is and accept the exception.
5. **"Pizzeria Simulator's certificate speaks of... and says... Either the certificate was not true"** (tension).
   `consistency`. The words are spoken by the tutorial voice as it hands the certificate over ("Please accept this
   Certificate of Completion", by the wiki's transcript; the record's claim is "Tutorial Unit apologizes"). The body
   has it right: "a voice speaking for the company". Fix: "Pizzeria Simulator's closing message speaks of... Either
   the message was not true".
6. **"this archive reads it in three layers... The frame is story: the hidden tapes, the staff emails, a hidden
   phone call, the endings."** `overreach`. "It" is Help Wanted, which has no staff emails: they are Special
   Delivery's (`sd-mail-server-advisory`). Fix: "this archive reads it, and the company products that follow it, in
   three layers", and "the hidden tapes, a hidden phone call, the endings, and in Special Delivery the staff
   emails".
7. **The question's second half has no answer.** `frame`. The question asks "what did Fazbear Entertainment know?"
   and the `answer` describes only how the company behaves. The body does answer it ("What the company knew, the
   records give only through what it does"). Fix: add that sentence to the answer.
8. **As a reader.** `reader`. "The thing in its network" (tension) has not been introduced: this is the part's
   first chapter, and the phrase assumes that something is in the Pizzaplex's network. "Whatever was writing to its
   new head of security (see ((vanny)))" would say only what the records carry. "The voice starts with an
   admission": by the wiki's transcript it is the third sentence of the narration, after a welcome; "Early on, the
   voice makes an admission". "No game before Help Wanted does": FNaF World talks about itself as a product that
   failed, in this archive's own words (`outsideStory`, `declared-imaginary`); "no game in the main line" is safe.
   The order of the fire and the scan is called a convention twice (body and tension); the revision asked for
   once.

## `digital`: The rabbit in the code

**Verdict: minor fixes.** The three statements are at their three grades, "old company boards" is kept, the
"vintage Bonnie" is left unchosen with its "may be", and every quotation is exact. The weak place is the case for
the rival reading, which is thinner here than in R18, and two clauses of the `tension` say more than the records.

1. **The rival is given less than its support, and the counter-evidence is short.** `frame`. R18 lists five things
   for a copying program, and the revision asked for it to be "given its real support". The column has three. Left
   out: the bid by the party signing "W.A." for Murray's "software development and the entire MCM catalog"
   (`secret-of-the-mimic-mail-wa-far-behind`), with the company's claim that his work "is now legally ours" and the
   errand to "Extract Blueprints" (`secret-of-the-mimic-dispatch-contract-legally-ours`,
   `secret-of-the-mimic-work-order-1979`); and the talk-back programs at the Pizzaplex that something else came to
   answer (`security-breach-cd46-talking-programs`), which R22 says R18 cites without any condition and which
   ((mimic)) does cite. The first bears directly on the first of the rival's "two unshown steps": no record puts
   the program on a company board, but records do have the company reaching for it. The REVIEW comment says the
   W.A. record is "filed in `further`"; it is not in this chapter's list (it is cited in ((partners))).
   `hw2-mimic-teaser-1979-white-tiger` is in R18's "Against" and is cited in the column, and is missing from
   `counterEvidence`. Fix: add to the column, "A party signing "W.A." had bid for Murray's "software development"
   [[secret-of-the-mimic-mail-wa-far-behind]], and at the Pizzaplex a patient's "software programs that talk to you
   and repeat phrases" came to be answered by someone else [[security-breach-cd46-talking-programs]]"; add the
   three ids to `counterEvidence`.
2. **"no mark of Murray's appears before RUIN"** (tension). `consistency`. In the story's order one does. The White
   Tiger doll on the code 1979 is in Help Wanted 2 (`hw2-mimic-teaser-1979-white-tiger`), a game the archive's
   records place "after Security Breach's night and before RUIN" (`hw2-memory-dolls`, `hw2-faz-force-ending`), and
   the chapter's own rival column cites the doll as held out by "the arm that holds the dolls". The clause is true
   only by release date, which a reader of a story told in story order will not assume. R18's sentence is
   narrower: nothing in Help Wanted, Curse of Dreadbear or Special Delivery carries a Murray mark. Fix: "and
   nothing in Help Wanted, its Halloween add-on or Special Delivery carries a mark of Murray's".
3. **"Help Wanted names old boards and nothing else"** (tension). `overreach`. The tape has "circuit boards and
   things like that" (`hw-tape-05`), and the guide adds "scanned photographs for reference" and
   "original performance routines" (`hw-handunit-scanned-photos-original-routines`, in this chapter's `further`).
   The point survives in a truer form. Fix: "Help Wanted's account of what was scanned names nothing of Murray's,
   only old hardware that the client sent".
4. **"a borrowed voice, which is how Murray's copying machine speaks"** (tension). `uncited`. Records exist: the
   second machine answers Edwin with his own phrases (`secret-of-the-mimic-log-turn-around`), and RUIN's voice
   uses Gregory's lines from Security Breach (`ruin-mimic-reuses-gregory-lines`). Add both citations.
5. **"The emails never describe the virus."** `overreach`. They do, a little: "It's spreading really fast"
   (`sd-circuit-board-scan-virus`) and "causing serious problems" (`sd-virus-traced-to-fe-board`, notes). The
   record's own note is narrower: they "never describe the virus as a rabbit or give it a name". Fix: "The emails
   never say what the virus is, and give it no shape and no name."
6. **"and he speaks that line in Ultimate Custom Night"** (compare, third column). `rulings` (R16, W3). The line is
   spoken by the figure UCN's roster calls Afton (`ucn-afton-always-come-back`); under R16 every speaker on that
   roster is an effigy, and the model's own lean puts the man in the office. "He speaks" tells the roster figure
   as the man. Fix: "and Ultimate Custom Night gives the same line to its Afton".
7. **"In Help Wanted 2 a costumed arm holds out six rag dolls"**, under the heading "It presents as the killer".
   `overreach`. The sentence is careful and its place is not: "It" is the anomaly, so the arm is counted as the
   anomaly's. The record says "The wiki identifies the arm as the rabbit figure's" and that its fur is olive-yellow
   with a stitched seam (`hw2-memory-dolls`). The rival column then uses the same arm for the other reading. Fix:
   "a long arm in yellow fur, most likely its own, holds out six rag dolls".
8. **Three phrases quoted from a record's `claim`.** `misquote` (source only; every word is right). "junk - circuit
   boards and things like that" (`hw-tape-05`; the wiki's transcript has "It was just junk- circuit boards and
   things like that", with no space before the dash), "I hope" (`hw-tape-16`), and "this thing"
   (`hw-tape-girl-calls-it-the-anomaly`). Fix: as `cover-story` 4.
9. **As a reader.** `reader`. "The name fans use asserts an identity" (tension) follows a body that calls the same
   name "Scott's working name for it": give it one owner ("the name it goes by"). "Its teams used": the guide has
   no teams; "The company's teams". "No game names it" rests on the record's note "as far as their transcripts
   show", and R26 lists what Help Wanted 2's gallery prints as a check not yet made: "No game is known to name it".
   "A leaving of the man" is the rulings' term and reads oddly as English; "something he left behind", which the
   chapter also uses, is enough.

## `vanny`: The follower

**Verdict: minor fixes.** The rooftop page is shown and counted at full weight, the remedy is never said to work,
the required sentence is there word for word, and the cast credits and the two teasers are left alone. The writer's
three corrections to the answer are right. The fixes are one overstatement about the emails' order and some care
about scenes nobody on the project has watched.

1. **"she is already like this before the contractor's scan goes wrong"** `overreach`. The paragraph before lists
   the "torture" searches, the "compliance" searches, the word "help" and the voices at her screen. By the order in
   which the emails arrive, only the first of these comes before the scan goes wrong
   (`sd-ness-blood-eagle-calendar` before the lockout in `sd-circuit-board-scan-virus`). The compliance searches
   and "help" arrive after the lockout and the lawyers' halt (`sd-ness-compliance-searches`), and the voices after
   the "virus" email (`sd-ness-voices-at-screen`), as do the rubber masks of the table (`sd-ness-rubber-masks`).
   R19 rests the inference on the first email alone, and so should the sentence. Fix: "By the order in which the
   emails arrive, itself a convention, the first of them, about the "torture" searches, comes before the
   contractor's scan goes wrong, and the rest come after it. On that first email the model reads her contact as
   coming through the VR game."
2. **Three scenes told flat that their records say were not watched.** `overreach` (a secondary source treated as
   firm). "That third game is set in a pixel copy... strikes the door from the end of Help Wanted":
   `security-breach-pq3-help-wanted-hub-trapped-door`, "Described from the wiki's account; not watched". "Its main
   ending, the one tied to RUIN, has a rabbit-costumed arm reaching out of a recharge station":
   `hw2-faz-force-ending`, "Described from the wiki's ending summaries; the scene itself was not watched", and the
   tie to RUIN is the wiki's identification of the girl and the bot. "In RUIN the third cabinet lies toppled, with
   a sword through it" and "a rabbit's shadow on the hideout wall": `ruin-vanny-hideout-glitchtrap-shadow`, "From
   the wiki's plot summary". Between them these carry the link from Princess Quest to the Trapped ending, the tie
   from Help Wanted 2 to RUIN, one of RUIN's two signs for the release, and the shadow that counts against the
   remedy. `model.md` section 6 already lists the second as a check to make in play. Fix: have the three scenes
   watched before publication, or give each one clause ("as the scene is described").
3. **Counter-evidence that is in the rulings and not in the list.** `frame`. R19's "Against" has
   `hw2-faz-force-ending`; the chapter cites it in the body and lists `hw2-pq4-consequences-achievement` in its
   place. R19 also uses `hw2-glitchtrap-corrupts-backstage` against the remedy: the rabbit figure is at work on Help
   Wanted 2's instruction screens after the Security Breach night. It is filed under ((digital)) and is not
   mentioned here. And two staff messages filed here as support bear on "one fight made from inside": an employee
   writes to a cabinet, "I did what you wanted! I beat parts 1 and 2. Why won't you turn on?"
   (`security-breach-msg-red-flag`), and another, "She's testing me. I am not yet worthy"
   (`security-breach-msg-arcade-conspiracy`). They can be read as a game that recruits as easily as one that
   rescues, and the chapter does not mention them. Fix: add the first two ids to `counterEvidence`, and give the
   staff messages one sentence under "Who made them, no game says".
4. **"No game shows her after that night with the mask off."** Also "no record shows her after that night outside
   the mask's view" (tension), and the third clause of `changesIf`. `overreach`. One record does: the last page of
   the Princess Quest ending has the boy, Freddy's head and Vanessa on a hill, with no mask involved
   (`security-breach-ending-redemption`; "the next morning", by the wiki's account). What is true is that no later
   game does. Fix: "No later game shows her with the mask off", and the same word in the other two places.
5. **Hero caption: "looks into a claw machine"** `wrong record`. That is `hw2-pq4-elevator-claw-machine` ("stares in
   from outside"), which is in `further`. `hw2-pq4-vanny-crushes-glitchtrap` has only the crush. Add the citation.
6. **"her sessions with a company therapist"**, and "the therapist's recordings" (tension). `overreach`. There are
   several: a stranger takes over on her third disc ("I don't know you. What happened to-"), and by the record's
   count three therapists treat her before her last session (`security-breach-cd-therapists-shared-and-replaced`).
   Fix: "with company therapists"; "the therapy recordings".
7. **Two labels in the table: "Things bought for a disguise", "A voice that directs her".** `overreach`. Of the
   masks the email says only that Luis was "dying to ask what they're for" (`sd-ness-rubber-masks`), and of the
   voices that he "thought you were on a conference call" (`sd-ness-voices-at-screen`). Purpose and direction are
   the Vanessa column's, read back into the Ness column. R19 uses both labels, so this is inherited. Fix: "Things
   the monitoring caught her buying"; "Voices, and messages".
8. **"a tiny copy of Help Wanted's rabbit"** (hero caption and body). `rulings` (R26: one fixed descriptor for each
   rabbit). Fix: "a tiny copy of the rabbit in the code". Also as a reader: "The costume has one wearer" stands
   flat in the third column, and it is the reading the rooftop page counts against; "On the model's reading the
   costume has one wearer". "They match at four points": the fourth row is a hand-over (a desk, then a transfer),
   not a match; "they meet at four points".

## `pizzaplex`: One night at the Pizzaplex

**Verdict: minor fixes.** Gregory is kept to what the records make him, client 46 is a conditional, the endings are
told as branches, and the writer's four changes to the answer are right. The fixes are a caption that picks an
ending, one cross-reference, and one record the chapter should face.

1. **Hero caption: "and not the one in which Vanessa is freed"** `overreach`. This is the first thing a reader of
   the chapter sees, and it tells the model's low-medium reading as what the ending is. The record's note: "That
   Vanessa was freed from the rabbit's control is the wiki's reading; the game shows the mask on the floor and
   Vanessa at the doors, and says nothing more" (`security-breach-ending-redemption`). Everywhere else the chapter
   says "the Princess Quest ending". Fix: "They show scenes from Security Breach's endings, and none from the
   Princess Quest ending".
2. **"Which kids, where the staff went and what became of Bonnie all stay open (see ((open)))"** `consistency`.
   Two of the three do not match. RUIN shows what became of Bonnie: a broken Glamrock Bonnie in a hidden room at
   Bonnie Bowl, and "still does not say who wrecked it" (`ruin-glamrock-bonnie-remains-hidden-room`, in this
   chapter's `further`; the room itself was described from the wiki and not viewed). ((open))'s entry is "Where the
   staff went, and who wrecked Bonnie", as the outline asked. And ((open)) has no entry for the customer's "those
   kids": `security-breach-msg-it-is-happening-again` is cited nowhere but here. Fix: "Which kids, the messages
   never say. Where the staff went and who wrecked Bonnie are open (see ((open)))."
3. **A record that bears on which route RUIN follows, filed as support and not faced.** `frame`. A headless Freddy
   body attacks Cassie in Fazer Blast, under the hideout (`ruin-prototype-freddy-headless`). The record's own note:
   on the two hideout routes Freddy is taken apart, and on the Princess Quest route "Gregory leaves carrying his
   head", so the body "looks like that Freddy; the label says it is a prototype instead". On the underground
   route Freddy leaves whole. The label "PROTOTYPE" is from the wiki's description of the model: "the foot was not
   viewed". So the one thing that keeps this from counting against "most likely the aftermath of the route that
   goes underground" is unchecked. It also happens to fit the half of the composite that the model holds loosely.
   Fix: list it in `counterEvidence` and give it a sentence beside the comics, or have the label looked at.
4. **Table, the roof: "yet a last page has Vanessa alive above and the building burned down"** `overreach`. The
   page has only Vanessa on the burning roof (it is the figure in ((vanny))). That the building burned down is a
   news article's report in the same record (`security-breach-rooftop-vanessa-alive`). Fix: "yet a last page has
   Vanessa alive above, and a news report has the building burned down".
5. **Table, Princess Quest: "With three hidden arcade games finished"** `no record`. Only the third is out of
   sight: "no record of a PQ3 arcade, yet there is a cabinet tucked away in Fazerblast"
   (`security-breach-msg-out-of-order`). The first is "An actual standup arcade!" "somewhere in the building"
   (`security-breach-msg-pq1-maint-log`). Fix: "With the three Princess Quest arcade games finished".
6. **"among them a page with a burnt rabbit beside a bear-faced mass"** `rulings` (R26, R20: never without its
   place; "the mass of parts"). The `tension` has the right form. Fix: "among them a page with the burnt rabbit
   under the Pizzaplex beside the mass of parts".
7. **"a newspaper on the lobby windows, as its texture reads... Where that texture is seen in play has not been
   confirmed."** `consistency`. The first half states the place that the second half says is unconfirmed. The
   record: "The scene description is from the wiki's plot summary" (`ruin-pizzaplex-abandoned-earthquake`). Fix:
   "a newspaper texture reads "Earthquake shakes pizza plex". The wiki's summary puts it on the lobby windows;
   where it is seen in play has not been confirmed."
8. **"The way under the building needs her eyes, though they can be taken on any route. So this is most likely the
   aftermath of the route that goes underground."** `reader`. The concession removes the premise, and "So" then
   rests on nothing in the paragraph. R19's grounds are four together: the wreck, the collapsed raceway, Roxanne
   without her eyes, and the comics page that draws the burnt rabbit beside the mass, found by the M.X.E.S. room.
   The fourth is three paragraphs later. Fix: bring the comics page up, and end "None of these settles it; together
   they make the underground route the most likely."
9. **As a reader.** `reader`. "A therapist with a patient": several therapists, as `vanny` 6. "The thing in its
   network" is not explained in this chapter either. "Held loosely" or "loosely" comes four times (answer, table,
   body, tension): once in the answer and once in the tension would do.

## The three storyline beats

**Verdicts.** `s-rabbit-in-code`: minor fixes. `s-follower`: needs work (one sentence about the model's chief
counter-record says what the page does not show). `s-pizzaplex`: minor fixes. Every quotation in the three beats is
verbatim from a `quote`. The first four of these seven are places where the chapter writer corrected the round-three
line and said why in a REVIEW comment, and the beat still has the old words.

1. **`s-follower`: "shows Vanessa standing on the roof while the masked woman lies fallen below"** `unsupported`.
   The page shows Vanessa alone on the burning roof, looking down, and nothing below
   (`security-breach-rooftop-vanessa-alive`; the image was checked). The fall and the unmasking are on the pages
   before it (`security-breach-ending-rooftop`, `security-breach-rooftop-unmasked`), so by then she is not masked
   either. This is the page the model says it cannot explain, so its description has to be exact. Fix, as in the
   chapter: "shows Vanessa standing on the roof after the woman in the rabbit costume has fallen from it".
2. **`s-rabbit-in-code`: "Fazbear Entertainment calls its own history "total fabrications from the mind of a
   complete lunatic""** `overreach`. The record is "the majority of them were total fabrications"
   (`hw-intro-complete-lunatic`), and the same sentence concedes that "some stories associated with our name were
   loosely based on actual events" (`hw-intro-loosely-based-on-actual-events`). The chapter's answer was changed
   for this reason. Fix: "Fazbear Entertainment calls most of the stories told about it "total fabrications from
   the mind of a complete lunatic"".
3. **`s-follower`: "Vanessa, the night guard of the company's largest building"; `s-pizzaplex`: "The company's
   largest building"** `no record`. No record ranks the company's buildings, and none gives her hours: her post is
   "Chief Security Officer" (`security-breach-msg-marked-for-deletion`), and a notice says night staff are no
   longer needed (`security-breach-msg-pink-slip`). The chapters dropped both: ((vanny)) has "security guard" and
   ((pizzaplex)) has "The Mega Pizzaplex". Fix: "Vanessa, the Pizzaplex's security guard"; "The Mega Pizzaplex
   stands over a ruin".
4. **`s-pizzaplex`: "is shut inside and hunted by the woman in the rabbit costume"** `no record`. No record
   describes her hunting him. The nearest are two endings: she "captures Gregory on the roof"
   (`security-breach-ending-rooftop`) and her shadow stands over him in the alley (`security-breach-ending-alley`).
   Her recorded lines are "Are you having fun yet?" and an order to dismantle Freddy (`security-breach-vanny-lines`).
   The chapter changed "hunts through it" to "walks it". Step 26 of the order in `model.md` has "hunts" too. Fix:
   "is shut inside, with a woman in a rabbit costume walking the halls".
5. **`s-pizzaplex`: "three hidden arcade games called Princess Quest"** `no record`. As `pizzaplex` 5. Fix: "the
   three Princess Quest arcade games".
6. **`s-rabbit-in-code`: "A second firm scans a board"** `overreach`. That it is a second firm is R18's reading at
   medium-high: the contractor "is never named" (`sd-contractor-circuit-boards-drilled`, notes). The chapter marks
   it ("most likely at a second firm"). Fix: "A contractor, most likely a second firm, scans a board".
7. **`s-pizzaplex`: confidence "medium", with `burntrap` among its sections.** `frame`. ((burntrap)) is rated low.
   The common brief says a beat "carries the confidence of its weakest link"; `telling.md` section B says a beat's
   confidence "rates what happens in it", and the beat marks its two loose readings. One rule or the other should
   be written down where the reader can see it. If it is the first, this beat is low.

## The ten most serious findings

1. **Beats 1.** `s-follower` says the rooftop page shows "the masked woman" lying "fallen below". The page shows
   Vanessa alone, and the chapter was corrected for exactly this.
2. **Beats 2.** `s-rabbit-in-code` has the company calling "its own history" total fabrications. The record says
   "the majority", in a sentence that concedes the rest.
3. **`cover-story` 1.** "No game states it", of the cover-up, two blocks below the tape that states it.
4. **`vanny` 1.** Ness is "already like this before the contractor's scan goes wrong". By the emails' order only
   the first of the four things listed comes before it.
5. **`digital` 1.** The rival reading is given three of its five supports, and one of the two left out is the
   only record that bears on its first unshown step. Three ids are missing from `counterEvidence`.
6. **`digital` 2.** "No mark of Murray's appears before RUIN", in a chapter that cites the White Tiger doll in Help
   Wanted 2, which is set before RUIN.
7. **`digital` 3.** "Help Wanted names old boards and nothing else": the tape has "and things like that", and the
   guide adds photographs and routines.
8. **Beats 3 and 4.** "The company's largest building" (twice), "night guard" and "hunted" have no record, and the
   chapters dropped all of them.
9. **`pizzaplex` 1.** The hero caption calls the Princess Quest ending "the one in which Vanessa is freed": a
   low-medium reading, which the record calls the wiki's, given as a description.
10. **`vanny` 2.** Three scenes that carry the Princess Quest thread are told flat from records that say "not
    watched" or "from the wiki's plot summary".

## Counts

41 findings: `cover-story` 8, `digital` 9, `vanny` 8, `pizzaplex` 9, beats 7.

| Type | Count | Where |
|---|---|---|
| `overreach` | 14 | `cover-story` 3, 6; `digital` 3, 5, 7; `vanny` 1, 2, 4, 6, 7; `pizzaplex` 1, 4; beats 2, 6 |
| `frame` | 5 | `cover-story` 7; `digital` 1; `vanny` 3; `pizzaplex` 3; beats 7 |
| `rulings` | 4 | `cover-story` 2; `digital` 6; `vanny` 8; `pizzaplex` 6 |
| `consistency` | 4 | `cover-story` 5; `digital` 2; `pizzaplex` 2, 7 |
| `no record` | 4 | `pizzaplex` 5; beats 3, 4, 5 |
| `reader` | 4 | `cover-story` 8; `digital` 9; `pizzaplex` 8, 9 |
| `unsupported` | 2 | `cover-story` 1; beats 1 |
| `misquote` (source only) | 2 | `cover-story` 4; `digital` 8 |
| `uncited` | 1 | `digital` 4 |
| `wrong record` | 1 | `vanny` 5 |
| `dates` | 0 | |

## Noticed outside the assignment

- **"The company's largest building"** is in more places than the two beats: the part blurb in `theoryParts` ("one
  night in its largest building"), the comment at the head of `afterimage.ts`, and, since the sync commit of
  02:26, the summaries of the place `mega-pizzaplex` in `places.ts` and of the era `pizzaplex` in `timeline.ts`.
  The second also has "hunted by a woman in a rabbit costume". No record ranks the buildings or describes a hunt
  (beats 3 and 4).
- **`people.ts`** was synced at 02:43 and now agrees with these chapters on Gregory and on Vanessa's post. The
  summary of `vanny` still has "who hunts Gregory through the Pizzaplex", for which there is no record (beats 4).
- **`open`** (apparatus.ts) says of the staff and Bonnie, "No record says what became of either". RUIN shows
  Bonnie's wreck (`ruin-glamrock-bonnie-remains-hidden-room`); what no record says is who wrecked him.
- **A record title that states a reading.** `security-breach-ending-alley` is titled "The Alley: Gregory sleeps in
  a box; Vanny finds him". Its claim is that her "silhouette looms over him". (The title of
  `security-breach-ending-redemption`, which said that Princess Quest "frees Vanessa", was corrected at 02:47,
  while I worked.)
- **A record worth extending from play.** `security-breach-ending-burn-it-all-down` says only that "Gregory and
  Freddy escape". The wiki's account has them "escape the collapsing pizzeria". If the collapse is on screen, it
  is the best single support for R19 (4), better than the eyes, and the chapter has nothing as direct.
- **`cover-story`'s `further`** files the child's rumour (`fnaf4-pigtail-girl-hide-your-body`) under "support".
  R31 rules that it is not conduct. Nothing is printed from the label, but "colour" would match the ruling.
