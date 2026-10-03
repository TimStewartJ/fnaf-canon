# Fact-check 1: the story part, the apparatus part, the intro, the storyline and outsideStory

Checked on 3 October 2026 between 02:05 and 03:35. The assigned files did not change in that time:
`chapters/story.ts` and `chapters/apparatus.ts` (last changed 01:59) and `theory.ts` (01:37). Nor did
`rulings-brief.md` and `model.md` (both 00:54). The evidence JSON did change, in seven commits between 02:20 and
03:30 (0d54c83, 1ebaa6f, 52e69ed, 62b8392, 55bda83, 35726b2, 9a36912), and four other chapter files were
revised at 03:01 and 03:12 (`murders.ts`, `nightshift.ts`, `family.ts`, `machines.ts`). Every changed record that
the assigned text cites or this report names was re-read after its commit, and so was every cross-reference to a
revised chapter. Finding 9.20 exists because of those changes, and finding 10.4 and the list for the sync pass
were rewritten because of them. Nothing in the repo was changed by this check.

What was done. Every record cited in the seven chapters and the twenty beats was opened (277 records), and so were
the 79 records listed in `outsideStory`. Every phrase in quotation marks was compared with its record, by script and
by eye. The thesis paragraph was compared with `model.md` section 1 by script: it is identical, word for word. All
22 date pills were compared with the brief's list of dates. Most of Scott's written statements quoted in
`canon-rules`, `edges`, `games` and `open` were also read in the archived originals (the Steam news API, the Wayback
copy of the 2015 thread, the Reddit archive): the quotations are verbatim. Three findings below (3.1, 3.4 and
6.2) use the wording or order of those originals where the records carry only part, and say so. The interview
quotations rest on machine transcripts, as their records say, and were compared with the records only.

Problem types used: **unsupported** (the record does not contain the claim, or another record contradicts it),
**overreach** (the sentence says more than the record: an implied reading told flat, a hedge dropped), **wrong
record** (a different or additional record is the right citation), **misquote**, **date** (a pill's kind, label or
basis), **uncited** (a factual claim with no citation), **ruling** (firmer than, or against, a ruling; a marker or a
convention note missing), **frame** (answer, confidence, counter-evidence, tension, coverage), **clarity**.

Findings are numbered within each section, most serious first. "Fix:" gives the corrected wording or citation.

One point applies to all seven chapters and is not numbered. The content contract (`schema.ts`) asks for an
`answer` "in one or two sentences", and the seven answers run to three to five. They are the outline's lines,
word for word (`telling.md`, `telling-revisions.md`), so the length is the lead's to settle, and so are the three
findings that fall on an answer: 1.1, 6.4 and 7.10.

---

## 1. `thesis` (story.ts): minor fixes

The paragraph matches the adjudicator's final text exactly. The clause table agrees with the model's table in every
grade it gives. No year, no book name, no withdrawn phrase.

1. **frame.** Answer: "everything after is an attempt to end that or to copy it". This is not in the adjudicator's
   paragraph and the body does not argue it. It also runs against two things the chapter itself says: the callout
   ("fire ... is one man's answer, once"), and the model's order, in which the copying machines are built before
   the murders (order of events, steps 2 and 3 before 6 to 8). The sentence is the outline's
   (`telling-revisions.md`, line 87), so the fault is not the writer's. Fix, there and here: "William Afton kills
   children, and the mascot machines keep them. Who the killer is, what his company built and how the trap burns
   are firm. ..."
2. **overreach.** "The paragraph hedges once, and the hedge sits on the least settled thing it asserts." The
   chapter's own table rates "until" (that he dies only after FNaF1's restaurant has closed) at "Medium, at its
   lower end", below the "Medium" of the hedged clause, and the paragraph asserts it without a marker. Fix: "on one
   of the least settled things it asserts".
3. **ruling.** Tension: "a later graveyard is solved in an order that ends with the Puppet
   [[hw2-pq4-graveyard-order]]; the paragraph gives the first murders as a list, not a sequence, for that reason".
   R7 and R25 say that order is used for nothing. The model's reason for the list is that "she first" rests on one
   phrase (R7, low-medium). Fix: "...an order that ends with the Puppet [[hw2-pq4-graveyard-order]], which the
   model uses for nothing. The paragraph gives the first murders as a list because their order rests on one phrase
   of her father's (see ((child-outside)))."
4. **wrong record.** "Pizzeria Simulator presents its fire as the killer's end [[ffps-completion-fire]]". That
   record shows the building burning and names nobody. The "end" is `ffps-completion-old-friend-hell`. Fix: cite
   both, as `open` does.
5. **wrong record.** Callout: "it is one man's answer, once [[ffps-insanity-tape-call-them-back]]". The cited line
   ("I have to call them all back") does not mention fire. Fix: add `ffps-completion-peace-perhaps-more` ("after
   the smoke clears") or `ffps-completion-fire`.
6. **ruling.** The clause table leaves out two grades that the adjudicator's table gives: "then" (the trap after
   the rabbit is found) is medium-high, and that a Fazbear Entertainment trades afterwards is medium-high. Fix: add
   them to the rows "Four haunted machines, one building, a fire" and "Six graves, and the later games reopen it".

## 2. `killer` (story.ts): minor fixes

The five-link chain matches R1, each inference is marked, and both transcripts are described as transcripts.

1. **overreach.** Tension: "Yet the killer is at large in every later game." No record says this of every later
   game. What the records give is in the notes of `fnaf1-news-suspect-captured` (no later call, tape, minigame or
   newspaper mentions an arrest, a trial or a prisoner) and in `fnaf3-eon-purple-guy-dismantles`. Fix: "Yet no
   later game mentions an arrest or a trial, and the purple figure is free in FNaF3's minigames." (The same
   sentence is in `open`: see 7.6.)
2. **overreach.** "part of Springtrap's head can be made out in the photograph printed with the news
   [[fnaf3-it-burns-springtrap-hidden]]". The record: only when the image is brightened. Fix: "and when the
   photograph printed with the news is brightened, part of Springtrap's head shows behind a figurine".
3. **wrong record.** Compare column "The son is in the suit", verdict "Corrected by Scott". The two records cited
   in the column do not carry a correction: the notes of `scott-2017-michael-voice-not-robotic` say he "does not
   himself say who Springtrap is in this comment". The record that carries it is
   `scott-2017-matpat-final-theory`, cited two paragraphs earlier. Fix: cite it in the column, and add that he
   called the video "not 100%" (the record's claim).
4. **overreach.** "Scott said of Springtrap that \"his purple corpse is in that whole body that whole time\"",
   placed under "The father is in the suit". The record's notes: he "names the occupant only as 'purple guy'" and
   does not say William Afton. Fix: add "He says 'purple guy', and names nobody."
5. **overreach.** "The man who turns purple as he walks home". `sl-custom-night-decay` has him "walking down a
   street". Fix: "as he walks down a street".
6. **clarity.** "into a room where an empty yellow rabbit suit sits. Four more like it block the way out". "It"
   reads as the suit. Fix: "Four more grey children block the way out".
7. **clarity.** "Scott's guide to the next game calls it ..., a label Pizzeria Simulator never uses, and that
   game's roster says only \"Afton\"". "That game" reads as Pizzeria Simulator; the roster is Ultimate Custom
   Night's (`ucn-roster-afton`). Fix: "and Ultimate Custom Night's own roster says only \"Afton\"".

## 3. `canon-rules` (apparatus.ts): minor fixes

Every quotation in the table of Scott's rulings is verbatim, with its hedges, and was also read in the original
post. The books section reports his five statements accurately. The chapter says plainly which rules are its own.

1. **unsupported.** "In 2017 he listed three sore points ... and said only that \"some of those things have been…
   answered(!), by MatPat!\"". That joins two sentences of one comment in the wrong order and attaches the second
   to the wrong things. In the comment (dpf8b3p, read in the archive) "some of those things" comes first and is
   said of the community's points of contention in general (`scott-2017-matpat-answered-some-things`). The three
   named points come after it, and of those he told readers to "watch MatPat's video, and breathe a sigh of
   relief" (notes of `scott-2017-matpat-final-theory`). So "said only" is contradicted by the record cited. As
   written the chapter also contradicts ((killer)), which rests the end of "Miketrap" on that comment, and R27
   ("They confirm only the points he names"). Fix: "In 2017 he named three sore points, \"Miketrap\", a literally
   purple Purple Guy and \"1983 vs 1987\", and told readers upset by them to watch a video and be reassured
   [[scott-2017-matpat-final-theory]]. Of the wider quarrels he wrote that \"some of those things have been…
   answered(!), by MatPat!\" [[scott-2017-matpat-answered-some-things]], and twice that the video was not 100%."
2. **frame.** Counter-evidence is missing three records of Scott's own words that bear on "No name from a novel is
   used for any of them" and on the first of the "five questions": `scott-2020-cassidy-screenplay-lore-from-games`
   (he writes the name readers give the fifth child, of a rejected script, and the entry speaks of "lore from
   multiple games"), `scott-2020-cassidy-kazoo-names-from-lore` ("names from the lore"), and
   `scott-2020-charlie-game-and-book-counterparts` (implied: "their game and book counterparts"). All three are in
   `outsideStory` as "not about the games' story" (see 10.1). Their own notes say what they do not establish: not
   which lore, not whose name. Fix: list them as counter-evidence and say so in "The books", for example: "Scott
   has himself once written the name that readers give the fifth child, of a rejected film script
   [[scott-2020-cassidy-screenplay-lore-from-games]], and has complained of merchandise that uses \"names from
   the lore\" [[scott-2020-cassidy-kazoo-names-from-lore]]. Neither says whose name it is, and no game prints it."
3. **frame.** "On Ultimate Custom Night, FNaF World's frame, the levels inside Help Wanted and Into the Pit, Scott
   has ruled nothing." On Help Wanted he ruled the whole game canon without setting its levels apart, and R27
   lists that as a record against the three-layer rule (`scott-2019-help-wanted-is-canon`). The chapter's
   counter-evidence and tension cover only the books. Fix: "On Ultimate Custom Night, FNaF World's frame and Into
   the Pit, Scott has ruled nothing in writing. He ruled Help Wanted canon as a whole; the rule below that sets its
   levels apart is this archive's reading, and narrows his." Add the record to `counterEvidence`.
4. **unsupported.** "answered a reader on Reddit in one sentence". The record holds one sentence of the comment and
   does not say it was the whole. The archived comment (dpfcv4s) has three. Fix: "answered a reader on Reddit."
5. **wrong record.** Rule row "A later game made to mend an earlier one governs the disputed point", whose
   second cell begins "FNaF4 is read through Sister Location". The written statement behind it is not cited:
   `scott-2017-sl-cleared-fnaf4-misconception` ("I used SL to clear up a misconception from FNaF 4."). Fix: cite
   it in the row (and in `games`: see 6.2).
6. **overreach.** Tier label "Scott's working name, in no game" for "Glitchtrap, Burntrap, Scraptrap". No record
   calls "Scraptrap" a working name (`scott-ucn-character-guide-afton` is his published guide), and "Burntrap" is
   in the game's files (`security-breach-burntrap-name-not-in-game`), as the chapter's own first-use form says.
   Fix: "A name Scott uses that no game prints or speaks" (R26's wording).
7. **ruling.** "Nine rabbits run through the story". R26's fixed table has ten rows. The dropped row is "Outside
   the main line: the yellow rabbit of Into the Pit; Special Delivery's 'vintage Bonnie' (the email's words)", and
   both figures are used in ((edges)), ((games)) and ((open)). Fix: add the row, or write "Nine in the main games".
8. **frame.** Confidence "high". R27 is high only where Scott ruled in writing and medium for the model's own
   conventions, and R26 rates the middle tier of names medium. Fix: keep "high" and say in the answer that the
   archive's own rules are held at medium, or mark the chapter medium.
9. Note, not a finding: the REVIEW comment above `scott-2019-not-canon-list` is out of date. That record's note
   was corrected at 02:20 and now reads "Only the existence of". The post itself reads so.

## 4. `edges` (apparatus.ts): minor fixes

R17 and R23 are followed: "echoes", "agrees", "an adaptation that the main games never place", the 1985 never
"printed". Both interview records are described as transcripts.

1. **overreach.** "The tie he regretted is a second voice that runs under the adventure."
   `scott-2018-interview-fnaf-world-tied-to-canon-mistake` (a transcript) does not say what the tie was; its
   notes say the phrase "can be heard two ways". Fix: "What ties the game to the others is a second voice that
   runs under the adventure."
2. **overreach.** "his answer, on record here as a transcript, was that it \"was still just supposed to be a
   novelty\"". The record's claim is that the project began as a small novelty and "grew into a full-sized game",
   and its notes add that he "does not say whether its events belong to the continuity of the main games". The
   clipped quotation reads as his verdict on the game. Fix: "his answer, on record here as a transcript, was that
   it began as a small project that \"was still just supposed to be a novelty\" and grew into a full-sized game.
   He did not say where its events belong."
3. **unsupported.** "It agrees on a yellow rabbit, and on children dead in a party room." The main games' clipping
   says "a back room" (`fnaf1-news-kids-vanish`), and the model reads that as the hidden room (R8). A party room is
   Into the Pit's own (`into-the-pit-prologue-mci`). Fix: "It agrees on a yellow rabbit, and on a room: the
   children lie dead in a party room here, and were lured into \"a back room\" in the first game's clipping
   [[fnaf1-news-kids-vanish]]."
4. **overreach.** "its lines answer Pizzeria Simulator's last speech, as when one says \"He tried to release
   you\"". The notes of `ucn-orville-he-tried-to-release`: "'He' is not named", and the link to the Cassette Man
   is implied. Fix: "and its lines most likely answer Pizzeria Simulator's last speech".
5. **overreach.** "Scott wrote that when a licensed partner invents story for a product he steps in". His words:
   "Almost every time this happens, however, I step in" (`scott-2024-no-new-lore-on-products`). Fix: "he almost
   always steps in".
6. **unsupported.** "That logo carries the game's one year." The game also prints "'87" in an achievement title
   (`into-the-pit-light-of-87`, filed outside), and the record's notes mention an unused variant that reads 1983.
   Fix: "That logo carries the only year the game puts on its setting."
7. **overreach.** "That is all the frame says". The chapter's own `further` holds more lines of the same voice
   (`fw-8bit-fredbear-made-for-one-thing`, `fw-8bit-fredbear-true-goal`). Fix: "That is the frame's whole message".
8. **wrong record.** Tension: "the same game's desk scene is plain promotion for the next one
   [[fw-desk-man-deactivated-my-games]]". The line that points at Sister Location is in
   `fw-desk-man-made-something-terrible`. Fix: cite both.

## 5. `timeline-math` (apparatus.ts): minor fixes

Every pill's kind agrees with the brief: 1983, June 26th, the two pairs of cheques are "printed" on non-implied
records; 1979 is "teaser"; "not before November 1988" is "derived"; the bracket for the five is "estimated". The
five conventions are named as conventions. No year after 1987 appears except the derived floor (finding 5).

1. **unsupported.** "These games print very few dates, and this chapter lists them all." Secret of the Mimic's
   mailbox messages carry days and months that a player reads on the H.E.L.P.E.R. terminal: "Aug 3rd"
   (`secret-of-the-mimic-mail-foreclosure`), "Dec 1st" and "Dec 6th" (`secret-of-the-mimic-mail-david-party`,
   `secret-of-the-mimic-mail-party-canceled`). `model.md` section 3 (rows 6 and 8) calls them on-screen dates. The
   chapter itself leans on "Aug 3rd" two paragraphs later, for the day of the 1979 night, without listing it. Fix:
   add a row "Aug 3rd; Dec 1st and 6th, no year" to "What is printed".
2. **overreach.** "Sister Location's Private Room answers to 1-9-8-3 [[sl-private-room-keypad-1983]]". The
   record's notes: the keypad has no display and "the digits themselves rest on the wiki's text". R3 lists the
   digits under "Inferred". Fix: "is reported to answer to 1-9-8-3 (the keypad has no display)".
3. **overreach.** Order table: "springlock suits, then two machines for his son". The second machine was built
   after the son's death (order of events, step 3; `secret-of-the-mimic-log-try-again-build-another`). Fix: "then
   two copying machines, the first to mind his son". (Same phrase in `theoryParts`: see 8.4.)
4. **ruling.** "Three more things look like dates and are not", of the Fall Fest poster and banner. By the model's
   own dating table both are dates: the poster "dates the fair it advertises and nothing else" (`model.md`,
   section 3, row 2), and the brief lists 1970 and "83'" as dates "on staged props". R27's rule is that a date on
   a staged prop agrees and is never "printed". Fix: "Three more things look like printed dates and do not count
   as such."
5. **date.** `<<not before November 1988|derived|...>>` is the one pill label in the assigned text that displays a
   year after 1987. The brief's own list prints this bound, so it is allowed. The storyline and ((games)) label
   the same fact "A November after 1987" and keep 1988 in the basis. Fix, if R24 (6) is to hold without exception:
   use that label here too.
6. **date.** `<<1965 to 1977|estimated|...>>`. The brief files these years under "On documents and textures not
   yet seen in play", not under "Estimated", and `DateKind` has no word for that status. The basis states the
   status correctly. If the page prints the kind, a reader will see "estimated" beside years read off a chart.
   Fix: leave as the lead directed, or use `unknown` with the same basis.
7. **wrong record.** "before the new one opened in autumn 1987 [[fnaf2-call1-new-location]]", and in the order
   table "Before autumn 1987, stated". The season is not in the call that is cited. It follows from the closing
   article, "After being open only a few short weeks", under a cheque dated 11-13-1987
   (`fnaf2-overtime-robots-scrapped`); `model.md` section 3 marks the opening "derived" (row 17) and the old
   restaurant's closing "relative" (row 16). Fix: cite that record beside the call, and write "Before the 1987
   restaurant opened, stated; that it opened in autumn 1987 is derived".

## 6. `games` (apparatus.ts): minor fixes

Sixteen of the eighteen releases in `games.json` have a row, in release order and with the right years. Apart
from the points below, each row agrees with its records.

1. **frame.** Two releases in `games.json` have no row: `fnaf4-halloween` (FNaF4: Halloween Edition, 2015) and
   `freddy-in-space-2` (2019). Both appear only in the list under "Outside the story". The answer says "Every
   release has a place ... This chapter is a table: each game". Fix: add two rows ("Not canon, by Scott's ruling";
   "Not recorded; outside the story").
2. **overreach.** "Weeks before Pizzeria Simulator came out he wrote that the new game \"was really only existing
   to clear up things that were frustrating people in the community\"". The quotation is verbatim, and the
   record's notes say that the stated purpose stands. What the chapter leaves out is the frame. The comment
   (dpj0yco, read in the archive) opens "it might just be that you don't *need* fnaf 6 anymore" and ends "I don't
   have to do it anymore"; the record's notes call the first of these "part of his misdirection about that
   game"; and the comment names no game, as the REVIEW comment admits. The archive files the sibling statements
   of that summer under `jokes-and-trolls` (`scott-2017-fnaf6-cancelled-tycoon-hint`,
   `scott-2017-fnaf6-not-a-troll`). A reader is given the line as his plain account of Pizzeria Simulator. A
   written statement that needs no such care is on file and is not cited:
   `scott-2017-sl-cleared-fnaf4-misconception`. Fix: "In 2017 he wrote: \"I used SL to clear up a misconception
   from FNaF 4.\" [[scott-2017-sl-cleared-fnaf4-misconception]] Weeks before Pizzeria Simulator came out, while
   telling readers that the game he had been making was no longer needed, he wrote that it \"was really only
   existing to clear up things ...\" [[scott-2017-fnaf6-existed-to-clear-things-up]]".
3. **overreach.** FNaF4 row: "the bite at Fredbear's". FNaF4 never prints the restaurant's name
   (`fnaf4-diner-unnamed`). Fix: "Fredbear's bite at the birthday party".
4. **overreach.** Answer: "Most were made to answer the one before". The transcript record covers three games
   (FNaF4, Sister Location, Pizzeria Simulator). Fix: "Several were made to answer the one before".
5. **ruling.** Story-order list, item 6: "The killer's death, shown in FNaF3's minigames." Its place after FNaF1
   is an inference at medium, lower end (R12). It is not one of the four placements that the paragraph under the
   list names as conventions, and it has no marker. Fix: "The killer's death, shown in FNaF3's minigames: most
   likely after FNaF1's restaurant closed."
6. **uncited.** Ultimate Custom Night row: "A night without end". See 9.7. Fix: "A night that its voices say will
   not end".
7. **ruling.** Rows "After Fazbear's Fright burned" and "After that fire" are flat, where ((timeline-math)) gives
   the same two placements as "most likely" (R12: medium-high for both). The brief is not of one mind on the
   second: its order of events (step 21) calls it firm that Ultimate Custom Night follows the trap. Fix: add "most
   likely" to the Pizzeria Simulator row, as the Security Breach row has, and make the two chapters agree on the
   other.
8. **uncited.** "Freddy in Space 2, a comic spin-off that carries no story. This archive holds no records from
   it." The first sentence has nothing behind it. Fix: "Freddy in Space 2, a spin-off that this archive has not
   recorded and the model does not use."
9. **uncited.** `changesIf`: "Each release so far has changed how at least one earlier game is read." No record
   supports "each". Fix: "Most releases so far have".
10. **clarity.** "Four of those places are conventions" names "Circus Baby's venture", which is not an item in the
    list above it. Fix: "Circus Baby's venture, which Sister Location looks back on and the list does not place".

## 7. `open` (apparatus.ts): needs work

All four callouts with tone "open" in the other chapters are covered (Hen; Mike Schmidt; the burnt rabbit under
the Pizzaplex; RUIN's endings), and so are the five open items of R25. The Mike Schmidt entry gives what R13 gives
and names no book. The retcon, box and Old Man Consequences sections follow R11, R25 and R16.

1. **unsupported.** "Where the staff went, and who wrecked Bonnie": "No record says what became of either." A
   record says what became of Bonnie: RUIN finds him wrecked in a hidden room at Bonnie Bowl
   (`ruin-glamrock-bonnie-remains-hidden-room`, filed under ((pizzaplex))). Fix: "RUIN finds him wrecked in a
   hidden room at Bonnie Bowl [[ruin-glamrock-bonnie-remains-hidden-room]], and no record says who did it. Where
   the staff went, no record says."
2. **frame.** One question that another chapter sends here is not listed. ((pizzaplex)): "Which kids, where the
   staff went and what became of Bonnie all stay open (see ((open)))". Fix: add a row "Which children the
   complaint means | A customer writes, \"Why did you reopen? Everyone remembers what happened to those kids.\"
   [[security-breach-msg-it-is-happening-again]] It names no children and no incident. | ((pizzaplex))". Other
   chapters also leave these unanswered without an entry here: what Remnant is (((remnant)), "What no game
   says"); why Michael does not die (((michael))); who held the handset (((plush))); what became of Edwin Murray
   (((two-machines))) and of Help Wanted 2's technician (((mimic))); who made Princess Quest (((vanny))).
3. **overreach.** "He also said what it is not. ... and neither are \"new details\" that were never planned
   [[scott-2017-story-developed-new-details]]." Scott does not say that new details are not a retcon; that is the
   inference in the record's notes. His sentence is that the story "has developed new details over time that may
   not have been planned from the beginning", and that the pieces still fit. "Never planned" also drops his "may
   not have been". Fix: "Clearing up a misread intention in the next game is \"not really a retcon\" [[...]]. He
   set a third thing beside both: \"new details\" that \"may not have been planned from the beginning\" [[...]]."
4. **unsupported.** "FNaF1's guard is named once, on a cheque". He is named on two: `fnaf1-paycheck-night5` and
   `fnaf1-paycheck-night6` (the first record's note says so since 03:30, and ((timeline-math)) cites both). And
   "The slip that fires him": the slip bears no name
   (`fnaf1-custom-night-pink-slip`, notes). Fix: "FNaF1's guard is named only on his two cheques, made out to
   Mike Schmidt [[fnaf1-paycheck-night5]] [[fnaf1-paycheck-night6]]. The slip that ends the Custom Night bears no
   name, and gives \"Odor\" as its last reason [[fnaf1-custom-night-pink-slip]]."
5. **ruling.** Two table cells use the 2018 interview without saying that it is on record as a machine
   transcript: "Asked in 2018 whose it was, Scott declined to answer"
   (`scott-2018-interview-sl-suit-question-unanswered`) and "Asked in 2018, Scott said only: \"The answer is very
   interesting. The answer is complex.\"" (`scott-2018-interview-fnaf3-ending-unanswered`). Fix: "Asked in a 2018
   interview, on record here as a transcript, ..." in both.
6. **overreach.** "Who the caught man was": "The killer is free in every later game." See 2.1. Fix: "No later game
   mentions an arrest or a trial, and the purple figure is free in FNaF3's minigames." Also add
   `fnaf1-news-charged-vs-convicted` for "and charged".
7. **overreach.** "The volunteer had a way out, and is told \"you are right where you want to be\"". The speaker
   is guessing: "I have a feeling that you are right where you want to be"
   (`ffps-completion-right-where-you-want-to-be`, notes). Fix: quote from "I have a feeling".
8. **ruling.** "The watching post and the year": "The room whose monitors show the house of 1983 belongs to a
   business dated after a Freddy's closed. The model cannot make both true". R3 asks for what the monitors show,
   and when; the cell names only one of the two things that conflict. Fix: "The room's monitors show FNaF4's
   bedroom, in Sister Location's own time, and the business that houses the room is placed after a Freddy's
   closed [[sl-handunit-freddy-fazbear-closing]]. That the boy was watched from there in 1983 would need the room
   to be older than the business. No record settles it."
9. **ruling.** "The rabbit helps, and the model does not say what it is." R10 rates that it helps in FNaF3 at
   medium. Fix: "The rabbit most likely helps".
10. **frame.** Answer: "Each entry gives what the records show, the readings on offer, and what would settle it",
    and `changesIf`: "Each entry says what would settle it." Only the six full entries do. Most of the thirty
    table rows do not. Fix: "The six full entries say what would settle them; the list at the end names what would
    settle the most."
11. **wrong record.** "leads each of the four machines to the place where the purple figure takes it apart
    [[fnaf3-eon-shadow-freddy-follow-me]]". The taking apart is `fnaf3-eon-purple-guy-dismantles`. Fix: cite both.
12. **wrong record.** "The model treats it as closed for good." Scott's written statement of 2015 says so and is
    only filed, not cited: "maybe some things are best left forgotten, forever"
    (`scott-2015-box-best-left-forgotten`). Fix: cite it there. It is firmer than either transcript.
13. **overreach.** "he said that the burnt rabbit under the Pizzaplex \"was never supposed to move\"". His
    sentence begins "Originally" (`scott-2024-interview-burntrap-never-meant-to-move`). Fix: "he said that
    originally the burnt rabbit under the Pizzaplex \"was never supposed to move\"".
14. **overreach.** "A client whom Edwin Murray calls Hen sends a change order for the suits". The log does not say
    what the order changes (`secret-of-the-mimic-log-build-to-spec`). Fix: "sends a change order".
15. **overreach.** "A glitching, rabbit-shaped figure hunts {{cassie}}". `ruin-the-entity`: it "appears and alerts
    animatronics to her". Fix: "stalks".
16. **uncited.** "No game shows, names or mentions her." The record cited covers FNaF4 only
    (`fnaf4-no-parent-shown`). Fix: "No record in this archive shows, names or mentions her."
17. Note on the Mike Schmidt entry, as the prompt asked. It is fair to R13 as far as it goes. Two things are
    missing. First, finding 4 above. Second, R13's point that the model's own order puts Michael's scooping after
    FNaF1's restaurant closed, so on that order the "Odor" could not be his; the entry could say so in one clause
    and mark it a convention. The sentence "The strongest evidence usually cited for the identification is in a
    book" has no record behind it and cannot have one; the REVIEW comment says it is there on the owner's
    instruction, and it names no book.

## 8. `theoryIntro` and `theoryParts` (theory.ts): minor fixes

The standfirst is the adjudicator's. The short thesis asserts nothing the clause table does not allow, and carries
no year. The three markers and the three marks are described as the rulings use them.

1. **unsupported.** `afterimage` blurb: "one night in its largest building" (and beats `s-follower` and
   `s-pizzaplex`: "the company's largest building"). No record ranks the company's buildings. The writer of
   ((pizzaplex)) replaced "the company's biggest building" for that reason (REVIEW comment, afterimage.ts lines
   275 to 276). Fix: "one night in the Mega Pizzaplex".
2. **ruling.** `nightshift` blurb: "the old one reopened on a smaller budget, and the night the killer came back
   to it". That FNaF1's building is the old location is medium (R12) and takes "most likely", as `s-last-freddys`
   has it. Fix: "the company reopened on a smaller budget, most likely in the old building, and the killer came
   back to it".
3. **frame.** `howToRead`: "A plain statement with a record behind it means that a game says or shows it." Many
   records are Scott's words, not a game's. And the storyline does not keep the rule: see 9.1, 9.5, 9.6, 9.9,
   9.10, 9.11 and 9.20, each a plain sentence with a record behind it that the record marks as implied, hedged or
   reported. Fix: "means that a game, or Scott, says or shows it", and mend those sentences.
4. **overreach.** `makers` blurb: "the two machines its owner built for his son". See 5.3. Fix: "the two copying
   machines its owner built for his family" (R21's wording).
5. **ruling.** `howToRead`: "it says when a placement is only the model's convention". One convention is not
   marked anywhere in the storyline: see 9.3.
6. **date.** Kickers print dates with no support stated: "1965 to 1979", "c. 1983", "Before 1987". R24: "Every
   displayed date says how it is supported", and 1965 is on a chart not yet seen in play. Fix: carry the support
   in the blurb, or use labels that are not dates ("The workshop", "The house", "Before the new restaurant").
7. **ruling.** Thesis: "Then come the copies". "Then" tells the fire-then-scan order, which is a convention (R33),
   and the copying machine was built before the murders. The adjudicator's paragraph has the same order
   unmarked, so this follows the model. Fix, if wanted: "The later games bring the copies".
8. **clarity.** `howToRead` names interface elements ("A small number in the text", "what pushes back") that this
   worktree's interface does not have: citations are chips with the game's name, and the box is headed "Evidence
   in tension with this chapter". Check against the redesigned interface before publishing.

## 9. `storyline`, twenty beats (theory.ts): needs work

Pill kinds are right in all eight `when` fields that carry one. Four conventions are flagged in `when`
(`s-child-outside`, `s-afton-robotics`, `s-michael`, `s-rabbit-in-code`). No label shows a year after 1987; the
basis of the `s-last-freddys` pill gives the derived floor, 1988, as the brief does. UCN's lean is kept out of
`s-night-without-end`, as R16 requires, and `s-follower` shows the rooftop page and says that the model has no
account of it, as R19 requires.

1. **overreach.** `s-rabbit-in-code`: "Fazbear Entertainment calls its own history \"total fabrications from the
   mind of a complete lunatic\"". The sentence quoted says "the majority of them", and it follows an admission:
   "some stories associated with our name were loosely based on actual events"
   (`hw-intro-loosely-based-on-actual-events`). R31's point is that each admission comes wrapped in a denial; the
   beat drops the admission. The writer of ((cover-story)) corrected the same wording in that chapter's answer,
   for this reason (REVIEW comment, afterimage.ts lines 14 to 17). Fix: "Fazbear Entertainment admits that \"some
   stories associated with our name were loosely based on actual events\"
   [[hw-intro-loosely-based-on-actual-events]], calls the rest \"total fabrications from the mind of a complete
   lunatic\" [[hw-intro-complete-lunatic]], and has a virtual-reality game made to laugh them off
   [[hw-intro-vr-game-to-move-past-ghost-stories]]."
2. **ruling.** `s-last-freddys`: "The restaurant is to close by the end of the year". R12: "'Closes at year's end'
   takes 'most likely'" (the undated clipping may be the old restaurant's: medium). `timeline.ts` has the marker;
   the beat does not. Fix: "A clipping, most likely this restaurant's own news, says it is to close by the end of
   the year, unable to outlive ...".
3. **ruling.** The 1983 week is told before the five (`s-house`, `s-birthday`, then `s-five`), and no `when` says
   that this order is a convention (order of events, step 7: "'Before step 8' is convention"). The bracket for the
   five, 1980 to 1986, straddles 1983. Fix: add to the basis of the `s-five` pill: "Told after the 1983 week by
   convention: no record orders the two."
4. **frame.** `s-afton-robotics` is marked "high" and ends on a low-medium reading (R15): "the model reads it as
   what the Cassette Man calls the killer's \"new way to desecrate\"". `s-1979` is marked "high" and tells "The
   writer is most likely William Afton" (R2: medium). The contract is the weakest link. Fix: mark both "medium",
   or move the two sentences to ((remnant)) and ((partners)) and keep "high".
5. **overreach.** `s-november-1987`: "someone has tampered with the machines". The call: "someone may have
   tampered with their facial recognition systems, we're not sure" (`fnaf2-call4-facial-recognition-tampered`),
   which the beat does not cite. Fix: "someone \"may have tampered\" with the machines
   [[fnaf2-call4-facial-recognition-tampered]]".
6. **overreach.** `s-fazbears-fright`: "its builders open a boarded-up room: \"We found one. A real one.\"".
   `fnaf3-call2-found-a-real-one`, notes: "That it came from the boarded-up room is implied by the Night 1 lead,
   not stated." ((killer)) words it correctly. Fix: "its builders follow a lead to a boarded-up room
   [[fnaf3-call1-boarded-room-lead]], and the next night: \"We found one. A real one.\"".
7. **uncited.** `s-night-without-end`: "it is one night with no morning". No citation, and in play the night ends
   at 6 AM; by R16 (1) the play is staging and only the lines are text. Fix: "its voices say the night will not
   end: \"you get to experience it over, and over, and over again... forever\" [[ucn-nedd-bear-forever]]".
8. **overreach.** `s-1979`: "Letters signed \"W.A.\" tell Murray ..., and ask for his staff's contact details". The
   "Staff Contacts" message is written to someone who is offered a franchise to manage, not to Murray
   (`secret-of-the-mimic-mail-staff-contacts-wa`; order of events in `model.md`, step 4: "asks an insider"). Fix:
   "and ask someone inside the firm for his staff's contact details". A smaller point in the same sentence: only
   that second message is signed "W.A."; the letter about the land is signed "WA"
   (`secret-of-the-mimic-mail-confidential-wa`). R2 writes "W.A." for both, so drop the quotation marks or give
   both forms.
9. **overreach.** `s-two-machines`: "Then David dies too". The model has the death firm (order of events, step 3)
   and the beat is marked "high", but in the records it is implied, and nothing the beat cites states it. The
   party is cancelled for "recent tragic events" (`secret-of-the-mimic-mail-party-canceled`, marked `implied`),
   and Edwin says of a replacement "It wouldn't be him" (`secret-of-the-mimic-log-refusal`, notes: "Implies David
   has died"). Of the two records the beat cites, only the notes of the first speak of "the dead son". And "It
   sounds like his son [[secret-of-the-mimic-log-incident]]": the log names neither the machine nor the boy
   ("You're not him ... Stop sounding like him!"). Fix: cite the two records for the death; "It sounds, most
   likely, like his son".
10. **overreach.** `s-house`, four phrases. "which a later game calls \"illusion\"": the line is "more than an
    illusion to fear", and the notes of `ucn-nightmare-fredbear-lines` say it "implies that last time it was only
    an illusion, without saying whose" (R4: medium). "the same plush on its desk": the record has a plush of the
    same design, "its twin" (R3: "a Fredbear plush of FNaF4's design"). "a locked room": R3 has "a room marked
    'Private'". "holding his bedroom doors": R4's wording for the bedroom of the nights is "most likely the
    child's own" (`model.md`, R4: the model's reading, medium). Fix: "which a later game's line implies were
    \"illusion\""; "a plush of the same design"; "a room marked Private"; "holding the doors of a bedroom that is
    most likely his own".
11. **overreach.** `s-child-outside`: "Her father calls it \"a wound first inflicted on me\"". The record's notes:
    "He does not say what the wound was." Fix: "Her father speaks of \"a wound first inflicted on me\"
    [[ffps-insanity-wound-first-inflicted]]; the model reads that as her death, and on that one phrase tells it
    before the five."
12. **misquote.** `s-afton-robotics`: "the \"scalable creation of ulterior presence\"". The sheet prints
    "S.calable C.reation of U.lterior P.resence" (`ffps-scup-blueprint`, whose quote has carried the heading since
    03:15; R15, as revised: "quote the sheet"). ((remnant)) quotes it as printed. The beat's lower-case form is the
    one in the brief's own R15 sentence, so correct it there too. Fix: quote it as printed, or drop the quotation
    marks.
13. **ruling.** `s-springlock`: "The room had been walled up with its contents inside". That the sealing came
    before his death is medium (R12), and the tape says the rooms "are being sealed". Fix: "The room, most likely,
    had already been walled up with its contents inside".
14. **overreach.** `s-afton-robotics`: "The pizzeria built for them never opens". The record has the "grand
    opening ... cancelled" (`scottgames-site-sl-news-gas-leak-cancellation`), and Circus Baby was on stage for one
    day before children (`sl-baby-on-stage-one-day`). Fix: "Its grand opening is cancelled". Also "Their
    blueprints carry labels": all three labels are from one sheet. Fix: "One of their blueprints carries".
15. **overreach.** `s-five`: "gives the lie that was told, \"He's not really dead.\"". The record does not say who
    "he" is, which speaker has the line, or that it is false (`ffps-fruity-maze-follow-me`, notes). Fix: "and
    prints the words of the lure: \"He's not really dead.\" ... \"Follow me.\"". In the same beat, "A man was
    caught the next morning and charged. The killer is William Afton." puts the two side by side, and R8 says
    never to tell the caught man as Afton. Fix: "Who that man was, the model does not say. The killer is William
    Afton (see ((killer)))."
16. **overreach.** `s-follower`: "One page of one ending shows Vanessa standing on the roof while the masked woman
    lies fallen below". The page shows Vanessa on the roof, looking down
    (`security-breach-rooftop-vanessa-alive`). The woman who fell is unmasked earlier in that ending, on its third
    page (`security-breach-rooftop-unmasked`). Fix: "In one ending the woman in the rabbit costume falls from the roof
    and is unmasked [[security-breach-rooftop-unmasked]], and the last page shows Vanessa alive on the roof
    [[security-breach-rooftop-vanessa-alive]]. The model has no account of it."
17. **overreach.** `s-pizzaplex`: "hunted by the woman in the rabbit costume". No record describes her hunting
    during the night; two endings show her finding or seizing the boy (`security-breach-ending-alley`,
    `security-breach-ending-rooftop`). ((pizzaplex)) changed "hunts through it" to "walks it" for this reason
    (REVIEW comment, afterimage.ts line 279). The brief's order of events has "hunts him" (step 26), so the beat
    follows the brief and the fault is against the records. Fix: "stalked by".
18. **overreach.** `s-mimic`: "Its room holds mascot costumes from Edwin Murray's workshop". The record's claim is
    "worn mascot costumes"; the tie to Murray is that the same elephant, lion and penguin appear in Secret of the
    Mimic, by the wiki's description (`ruin-mimic-lair-mcm-mascot-suits`, notes). R21 (2) rates the tie high, so
    this agrees with the ruling. Fix: "Its room holds mascot costumes of the designs in Edwin Murray's workshop".
19. **overreach.** `s-birthday`: "his brother says he is sorry". The grey text has no speaker label; "the
    attribution is still a reading" (`fnaf4-night6-brother-apology`, notes). Fix: "a line in his brother's grey
    says \"I'm sorry\"".
20. **overreach.** `s-children-stay`: "while a fifth appears for an instant with the yellow bear
    [[fnaf2-give-gifts-give-life]]". The record was corrected at 03:04, after the beat was written: "A fifth body
    is reported to show in the middle of the room for one frame before" the yellow bear's jumpscare, and its
    notes add that this is the wiki's report, with no image there and no capture on file, "so the archive tells
    it as reported". ((golden)) has said so since its revision (commit 00e28bd). Fix: "The scene ends with the
    yellow bear's face; a fifth body is reported for the single frame before it."
21. **date.** `s-fazbears-fright` `when`: "Scott wrote that it is thirty years after the pizzeria closed." The
    record: he does not say which closing (R24 (5): medium-low). Fix: add "He does not say which closing."
    `s-costume-company` `when`: the pill dates the firm's paperwork, and a reader will take it as the date of the
    suits, which are only "before the 1979 night". Fix: add "They are the firm's trading years, not the date of
    the suits."
22. **clarity.** The contract asks for two to five sentences in a beat. Twelve beats run to six or seven, counting
    a quotation as part of its sentence (`s-1979` and `s-rabbit-in-code` have seven), and several of those
    sentences carry two clauses and a quotation. Readers who know the working names will not find them: the
    storyline never gives the first-use forms for the rabbit in the code or the burnt rabbit under the Pizzaplex
    (R26 allows one each).

## 10. `outsideStory` (theory.ts): minor fixes

The eleven groups and their reasons follow section 4 of `model.md`. No record that is plainly an event of the story
is listed. One listed record is now also cited by a chapter (finding 4); no other is cited or filed. Coverage is
complete: all 1,044 records are cited, filed or listed. The one gap found at 02:30, `fnaf2-golden-freddy-office`,
was closed when ((november-1987)) was revised. The points below are about records that carry weight of another
kind.

1. **frame.** `community-and-merchandise` lists three records of Scott's own words that bear on the labels policy
   and cut against calling two names book-only: `scott-2020-cassidy-kazoo-names-from-lore`,
   `scott-2020-cassidy-screenplay-lore-from-games`, `scott-2020-charlie-game-and-book-counterparts`. Section 4,
   rule 2: "A record that cuts against a ruling is filed with that ruling." Fix: move them to `canon-rules` as
   counter-evidence (see 3.2).
2. **ruling.** `declared-imaginary` lists `fw-8bit-fredbear-puppet-master`. The speaker is the glitching 8-bit
   Fredbear of the clock quest, which ((edges)) treats as the frame voice, and the group's own reason says the
   frame voice "is filed under ((edges))". Its sister lines are there (`fw-8bit-fredbear-true-goal`,
   `fw-8bit-fredbear-made-for-one-thing`). Fix: move it to the `further` of `edges`.
3. **ruling.** `development-commentary` lists `scott-silver-parasol-website`, which its own notes call a duplicate
   of `scott-2019-silver-parasol-logo`, filed under ((cover-story)). Section 4, rule 3: "Duplicates are not
   outside." Fix: file it beside its twin.
4. **ruling.** `mechanics-and-rosters` lists two records that rulings or chapters need.
   `fnaf4-night8-no-story-text` is cited by R4 for "Nights 7 and 8 are outside the story", and it is the record
   behind `open`'s "FNaF4's last screen". Since the revision of 03:12, ((nightmares)) cites it (family.ts, line
   117), so it is now both cited and listed, which the rule at the head of `outsideStory` forbids. Fix: take it
   off the list. `ffps-insanity-egg-baby-trigger` is the only record of how the blueprints are reached; until
   that revision a REVIEW comment in machines.ts said that ((remnant)) had to work round the listing. Fix: move
   it to `remnant`, cited "as a mechanic".
5. **ruling.** `company-set-dressing` lists `codb-glitching-gravestone` (it "glitches with green polygons and
   purple particles") and `codb-purple-headlights` (behind a hidden button). By the test printed in
   ((canon-rules)), "whatever sits behind a secret, glitches, ...", both read as intrusions. R27 names the
   gravestone and the truck as the level as built, so the list follows the ruling. Fix: say in the reason why
   these two are not intrusions, or reword the comment "a glitching central gravestone".
6. **ruling.** `promotion`: the reason says "A teaser that carries in-world text is evidence, and is filed under a
   chapter." Four listed teasers carry a line of the kind that, for FNaF3, is filed under ((killer)) ("I am still
   here.", "He always does."): `scottgames-site-sl-dont-hold-it` ("Don't hold it against us."),
   `-sl-get-back-on-stage` ("Get back on your stage."), `-sl-stay-in-seats` ("Everyone, please stay in your
   seats.") and `-fnaf4-terrible-things` ("Terrible things come in small packages."). Fix: file them under
   `funtimes` and `nightmares` as colour, or change the test to "in-world text that bears on the story".
7. **frame.** `unplaced-adaptation` lists `into-the-pit-secret-minigames-other-stories`, which R23 lists under
   "Against", and section 4, rule 2, files such a record with its ruling. Its notes give the best reason on file
   for "unplaced": the game "is a container for several separate tales". The brief's own list for this group
   allows it ("secret minigames included"), so the two disagree. Fix: cite it in `edges` beside the three things
   that set the game apart, and take it off the list.
8. **overreach.** `non-canon-per-scott` reason: "Scott said ... that Sister Location's Custom Night play is not
   canon". His words are that the Custom Night "will NOT be canon"; "play" is what is left after his later
   "Cutscenes are canon". ((canon-rules)) has it in two rows, correctly. Fix: "that Sister Location's Custom Night
   is not canon, and later that its cutscenes are".

---

## For the sync pass: records and captions, not chapters

- `scott-2017-story-developed-new-details`, notes: "details added later that were never planned", and "therefore
  not what Scott counts as the retcon". The quote says "may not have been planned", and the "therefore" is the
  archive's inference, not his. Finding 7.3 comes from this note.
- `hw2-fall-fest-1970-poster`, notes: "a named event with two printed years". R24 and R27: a date on a staged
  prop, or on a texture not yet seen in play, is never "printed".
- Record titles are printed in the citation pop-up. The commit of 02:47 mended the titles that carried fan names.
  Still there, on records the assigned text cites: "the Mimic has Cassie disable security nodes"
  (`ruin-fake-gregory-turn-off-security`), "The Mimic's voice reuses Gregory's SB lines"
  (`ruin-mimic-reuses-gregory-lines`), and "Scraptrap" as a bare name in four titles
  (`ffps-credits-william-afton`, `ffps-scraptrap-always-come-back`, `ffps-scraptrap-still-me`,
  `ucn-roster-afton`). `model.md`, R26: headings and captions "carry the descriptor; the label may follow in
  brackets", and RUIN "was not verified to say" the Mimic's name.
- Image credit for `ruin-mimic-elevator.jpg` (the image of `s-mimic`): "The Mimic reaching through the elevator
  gate at the end of RUIN". `Shot` prints the credit's caption wherever a figure has none, and a beat has no
  caption of its own. R21: "the copying endoskeleton" first.

---

## The ten most serious findings

1. **9.1** `s-rabbit-in-code`: the company's line is misreported. It calls "the majority" of the stories
   fabrications after admitting that some were "loosely based on actual events". The beat has it calling "its own
   history" fabrications.
2. **9.2** `s-last-freddys`: "The restaurant is to close by the end of the year" lacks the "most likely" that R12
   requires by name.
3. **9.3** Storyline order: the 1983 week before the five is a convention, and no `when` says so, though
   `howToRead` promises it.
4. **9.4** `s-afton-robotics` is marked "high" and tells a low-medium reading; `s-1979` is marked "high" and tells
   a medium one.
5. **9.5** `s-november-1987`: "someone has tampered with the machines" drops the call's "may have ... we're not
   sure", and the record is not cited.
6. **7.3** `open`: "neither are \"new details\" that were never planned" gives Scott a ruling he did not make and
   drops his "may not have been".
7. **3.1** `canon-rules`: the 2017 comment on the fan video is misreported ("said only that some of those things
   ..."), which contradicts the record it cites, ((killer)) and R27.
8. **3.2 and 10.1** Three records of Scott's own words on two names are filed as carrying no weight, and
   `canon-rules` does not list them as counter-evidence to its naming rule.
9. **7.1 and 7.2** `open`: "No record says what became of either" is contradicted by a record on Bonnie, and the
   entry that ((pizzaplex)) points to ("Which kids") is missing.
10. **7.5** `open`: two cells use the 2018 interview without saying it is on record as a machine transcript.

Next in line: 6.1 (`games`: two releases without a row), 6.2 (`games`: a comment made while Scott was telling
readers that "FNaF 6" was no longer needed is given as his plain account of Pizzeria Simulator, and the firmer
written statement on file goes uncited), 1.1 (`thesis`: an answer, taken from the outline, that the body does not
argue), and 9.6, 9.7 and 9.20 (three more storyline sentences firmer than their records).

## Count by type

overreach 38; ruling 20; frame 11; unsupported 8; wrong record 8; uncited 5; clarity 5; date 4; misquote 1.
Total 100 findings. Two further numbered items, 3.9 and 7.17, are notes and are not counted.

By section: thesis 6; killer 7; canon-rules 8; edges 8; timeline-math 7; games 10; open 16; intro and parts 8;
storyline 22; outsideStory 8.
