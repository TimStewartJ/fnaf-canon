# Reader 2 memo: the Unified Model, read once from the top, as a visitor

Read on 3 October 2026 from the two printing tools, in the site's order: front matter, part blurbs, twenty
beats, thirty-five chapters (36,780 words by the chapter tool, plus about 3,500 of front matter and beats).
Section 1 was written before I opened the first reader's memo, and I have read only section 1 of that memo.
Every `old` below was copied from the `.ts` files and checked by script to occur exactly once
(`src/data/theory.ts`, `src/data/chapters/*.ts`, as they stood at the commit named at the foot of section 3).
Five sentences of the text changed while I was reading (commit 0e85d4f, "Round 4d"); I have read them as they
now stand, and they change nothing below.

## 1. The verdict

- **Compelling: mostly.** The storyline pulls from beat 2 and pays off at beat 20, and most story chapters open on
  a scene; it stops pulling where a chapter turns from the scene to placing it, and at the front door.
- **Readable: mostly.** The sentences are short, plain and concrete, and the question, the answer and the
  headings carry a skimmer; what slows the reader is hearing one counter-point in the answer, the body, the
  comparison box and again under "what pushes back".
- **Enjoyable: mostly** (yes for the lore obsessive). The obsessive gets every hard question answered or named
  as open; the returning fan enjoys parts 2 to 7 and is short of footing in the chapters on the newest games
  (`vanny`, `pizzaplex`, the second half of `mimic`).
- **Best, one: scenes told in the games' own words.** `two-machines` ("Daddy's busy, buddy"), `bite`, `michael`,
  the Saturday of `ffps`, the construction crew that opens `burntrap`.
- **Best, two: the model says where it is weak before the reader can.** "It has a culprit, a suit and an
  investigation, and no act" (`november-1987`); "Four machines come for five children, and nothing explains the
  count" (`salvage`); "the model has no account of that page" (`vanny`). I looked for a dodge on Remnant, on Mike
  Schmidt, on the rooftop page, on the fifth child and on Ultimate Custom Night, and found none.
- **Best, three: the story has a shape.** Beat 20 answers beat 2 ("the one that mimics rage"), and `patterns`
  ends on the sentence the front page began with, with the admission that no game says it.
- **In the way, one: the front door.** 339 words on markers and marks stand between the thesis and beat 1, a
  fifth of them about chapters the reader has not reached; and the chapter marked "Start here" tells the story a
  third time and audits it in a fourteen-row table.
- **In the way, two: re-runs inside a chapter.** The rooftop page is told five times in `vanny` and twice more in
  `pizzaplex`; the walled-up room four times in `springtrap`; the model's answer to the dream reading three times in
  `nightmares`.
  Thirteen "what pushes back" paragraphs point back at the body ("the box above", "weighed above"), and most
  of them then say it again.
- **In the way, three: the archive talking about itself.** Answers of a hundred words in large type (`partners`
  101, `vanny` 100, `pizzaplex` 98), three beats whose title repeats their date ("November 1987 · November
  1987"), name glosses given again in every chapter, and four "(as described)" in one section of `vanny`.
- **Would a returning fan finish the storyline and open a chapter? Yes.** Twenty short beats carried by
  quotation are easy to finish, and beats 5, 12 and 13 send the fan to `bite`, `killer` or `michael`; the two
  places the fan may leave are before beat 1 and inside beats 1 to 3, which open on a 2025 prequel.

## 2. Against the first reader

- **7, the triple telling: partly mended.** "What pushes back" now averages 141 words against the first
  reader's 165, thirteen run past 150 against twenty, and `ucn` has 226 against 312. But thirteen of them still
  point back at the body in so many words ("the box above sets them out", `nightmares`; "is weighed above",
  `springtrap`; "are in the box above", `digital`), and three repeat part of the box nearly word for word
  (`november-1987`, `springtrap`, `fazbears-fright`).
- **8, the front door: partly mended.** Three paragraphs now stand before the storyline and the fourth at the
  head of the parts; beat 1 names its game in its first words ("Secret of the Mimic goes back to a workshop");
  `thesis` states its scale ("The grades here are finer than the three marks") and I found no note about an
  earlier draft. Not mended: the three paragraphs are still 339 words, and `thesis` still opens with the story
  told a third time and closes on a note of eight sentences on what "the paragraph does not say".
- **9, the archive's filing voice: partly mended, and the least of the three.** The phrase "on record here as a
  transcript" is gone from the chapters and four short tags replace it, but the tags stand 80 times there;
  "the model" or "the model's" stands 241 times against 267; the Cassette Man's hidden tape now has one handle
  and a link, "hidden tape (see ffps)", which is the mend, and it is still quoted in eight chapters besides its
  home.

One thing more. My three best and my three in the way were written before I read the first reader's, and they
are nearly the same, item for item. A reader who comes fresh to the revised text still notices the same three
obstacles first.

## 3. The changes

Twenty-six, ranked by what the reader gains, the best first: 17 cuts, 7 headings, 1 move, 1 split. Together
they take about 490 words out of the text, and none of them adds a statement.

How to apply them:

- A MOVE (change 1) gives one `old`/`new` pair for each place it touches; apply the three pairs together.
- For a HEADING, `old` is the text of the heading: the `title` of that beat in `src/data/theory.ts`, or the
  `{ kind: "heading" }` block of that chapter. Each occurs once there. In changes 4 and 5 the quotation marks
  are part of the new title.
- For every other change, `old` occurs exactly once in `src/data/theory.ts` and `src/data/chapters/*.ts`
  taken together, so no chapter needs to be located first.
- No two changes overlap. Where two touch one field (1, 2 and 3 in the front matter; 11 and 19 in
  `springtrap`), they can be applied in either order.

### 1. MOVE · front matter (`theoryIntro.howToRead`, paragraphs 2, 3 and 4) · body
- old: Each chapter asks one question and answers it before arguing it. A small number in the text opens the record behind a claim
- new: A small number in the text opens the record behind a claim
- old: **Low** means a lean, or an honest guess. A chapter carries the mark of its main claim, and a further step in its answer that is weaker than that mark carries its own marker in the sentence. A beat is all telling
- new: **Low** means a lean, or an honest guess. A beat is all telling
- old: Under each chapter, "what pushes back" lists
- new: Each chapter asks one question and answers it before arguing it. A chapter carries the mark of its main claim, and a further step in its answer that is weaker than that mark carries its own marker in the sentence. Under each chapter, "what pushes back" lists
- gain: The two sentences on how a chapter is built leave the paragraphs that stand before the storyline and open the paragraph that stands at the head of the chapters, so the reader is 40 words nearer beat 1 and meets each rule where it applies.
- loses: nothing; both sentences stand unchanged at the head of the parts (the pair "A chapter carries... / A beat is all telling..." is no longer side by side).

### 2. CUT · front matter (`theoryIntro.howToRead`, paragraph 2) · body
- old: Where two readings are close the model **leans** to one. Where a later game was made to mend an earlier one, the later game governs the point in dispute.
- new: Where two readings are close the model **leans** to one.
- gain: One rule of method fewer before the story begins; no beat uses it, and the paragraph now ends on the markers the beats do use.
- loses: The sentence. `games` has it word for word ("Where a later game was made to mend an earlier one, the later game governs the point in dispute: FNaF4 is read through Sister Location..."), and `canon-rules` lists it first under "Which work governs"; the front matter links to both chapters.

### 3. CUT · front matter (`theoryIntro.howToRead`, paragraph 3) · body
- old: A beat is all telling, and carries the mark of the weakest thing it tells. The chapters sometimes grade more finely, with medium-high and low-medium between. Where the games give no date
- new: A beat is all telling, and carries the mark of the weakest thing it tells. Where the games give no date
- gain: The reader is told about two extra grades only where they are used; with changes 1 and 2 the apparatus before beat 1 falls from 339 words to 269.
- loses: The sentence. `thesis` says it at the head of the only table that uses those grades: "The grades here are finer than the three marks: medium-high and low-medium sit between them." No link in the front matter points there; it is the first chapter.

### 4. HEADING · s-november-1987 · heading
- old: November 1987
- new: "Someone used one of the suits"
- gain: The beat's line stops reading "November 1987 · November 1987": the date keeps its place and the title becomes the week's pivotal record, in words a returning fan remembers.
- loses: nothing; the date stands beside the title and the chapter linked under the beat is still "November 1987, and the Bite of '87". The quotation marks are part of the title, as in `michael`'s headings; the words are the beat's own.

### 5. HEADING · s-fazbears-fright · heading
- old: Thirty years later
- new: "We found one. A real one."
- gain: The line stops reading "Thirty years later · Thirty years later", and the title says what the attraction finds.
- loses: The match between the beat's title and the chapter's; the chapter "Thirty years later" is still linked by name under the beat. The quotation marks are part of the title; the words are the beat's own.

### 6. HEADING · s-five · heading
- old: June 26th
- new: Lured into a back room
- gain: The line stops reading "A June 26th between 1980 and 1986 · June 26th", and a skimmer learns what happened that night and not only when.
- loses: nothing; the date stands beside the title and in the beat's first sentence. The words are the clipping's, quoted in that sentence ("lured into a back room"); they say only what the clipping dates to that night.

### 7. CUT · partners · answer
- old: W.A. is most likely William Afton, writing for Fazbear Entertainment: letters signed with the initials W.A. say that their writer now "technically" owns Murray's land, bid for his software and his whole catalogue, and ask for his staff's contact details. Who Hen is, the model leaves open: Hen is the customer who is to be warned about the new springlocks and who sends a change order that Edwin does not want.
- new: W.A. is most likely William Afton, writing for Fazbear Entertainment. Who Hen is, the model leaves open.
- gain: Three questions get three plain answers: 47 words in large type instead of 101.
- loses: The grounds for W.A. and the description of Hen. The body gives both in full: under "W.A. wants the firm" (the land, the bid for "software development and the entire MCM catalog", "the rest of the Murray staff contact info") and under "Hen is the customer" ("Hen is the one to be warned about how oddly the new springlocks can behave, and sends the change order that Edwin does not want").

### 8. CUT · pizzaplex · answer
- old: The building it shows is most likely the aftermath of the route that goes underground. Vanessa may have been freed: that rests on another ending, which leaves the mask on the floor and a blonde woman at the doors.
- new: The building it shows is most likely the aftermath of the route that goes underground.
- gain: The answer falls from 98 words to 74 and ends on what this chapter argues; the reader met the same claim, in nearly the same words, in `vanny`'s answer one chapter earlier.
- loses: "Vanessa may have been freed..." in this answer. The chapter still says it three times: the Princess Quest row of the endings table ("the model's reading for Vanessa"), its last paragraph ("For Vanessa the model reads the Princess Quest ending...") and "what pushes back" ("and that Vanessa may have been freed"). `vanny`'s answer keeps it.

### 9. CUT · november-1987 · tension
- old: Read alone, FNaF2 suggests victims in 1987: SAVE THEM's five small bodies among that restaurant's cast [[fnaf2-save-them]], a purple figure who has a mark on his chest that the purple figures of FNaF2's other two minigames lack [[fnaf2-save-them-purple-figure-chest-mark]], and a company denying something "tragic" by the third night [[fnaf2-call3-rumors]]. The box above
- new: Read alone, FNaF2 suggests victims in 1987. The box above
- gain: The longest word-for-word re-run in the text goes: the list is, nearly word for word, the second column of the box that the next sentence points to, and this "what pushes back" is 219 words.
- loses: The three items of the list. They stand in the box under "Five bodies in a minigame" ("Five bodies among the 1987 cast, a purple figure with a mark on his chest..., and a company denying something "tragic" by the third night"). All three records stay cited in the body ([[fnaf2-save-them]] in the paragraph on SAVE THEM, [[fnaf2-save-them-purple-figure-chest-mark]] in the box, [[fnaf2-call3-rumors]] in the Night 3 row) and in the chapter's list of records in tension.

### 10. CUT · nightmares · tension
- old: (as described). Against that the model has one thing: the bedroom is a real place on a company's monitors, in the next main game. The monitors show that place empty [[sl-private-room-feeds-empty]], so they show the room and not the nights. That is why the lean to waking events is slight.
- new: (as described).
- gain: "What pushes back" ends on the four things that push back, and the model's one defence is read twice in the chapter instead of three times.
- loses: Three sentences of the model's side. The body has each: "the monitors show the rooms with nobody in them" (under "A real room", which cites the same record, [[sl-private-room-feeds-empty]]), "places on a company's monitors, in the next game of the main series" (the box), and "The lean is slight" (the paragraph after the box).

### 11. CUT · springtrap · tension
- old: loses its marker as well. And the model's placing has a seam it cannot close: the hidden room was walled up with its contents inside [[fnaf3-tape6-safe-rooms-sealed]], yet the killer and the ghosts are in it, and no game shows who opened it.
- new: loses its marker as well.
- gain: The walled-up room is told three times in the chapter instead of four.
- loses: One sentence. The section "A room that was sealed" ends on the same words ("He dies, then, inside a room that had been walled up with the Spring Bonnie suit in it... No game shows who opened it, or when."); the answer and the box say it too. [[fnaf3-tape6-safe-rooms-sealed]] is the block quotation of that section and stays in the list of records in tension.

### 12. CUT · fazbears-fright · tension
- old: still refuses release [[ucn-orville-he-tried-to-release]]. Asked in 2018 (a transcript) which FNaF3 ending happened, Scott said the answer was "complex" and did not give it [[scott-2018-interview-fnaf3-ending-unanswered]]. That leaves room for the surviving alternative: that the release held for the five, and what was gathered later is something else.
- new: still refuses release [[ucn-orville-he-tried-to-release]].
- gain: The paragraph ends on its three gaps and does not repeat the box above it.
- loses: Scott's answer and the surviving alternative. Both stand in the box's second column, "It held for the five", with the fuller quotation ("The answer is very interesting. The answer is complex.") and the same record.

### 13. CUT · ffps · tension
- old: and the model does not tell those as one history. On the franchisee, Scrap Baby's "You're not who I expected to see..." [[ffps-scrap-baby-not-expected]] is the line for an outsider. The model keeps Michael on the grounds given above, "it's still me" [[ffps-scraptrap-still-me]] among them, and the identification stays at most likely.
- new: and the model does not tell those as one history.
- gain: The case for and against Michael as the franchisee is read once in this chapter, in the section that argues it, and not again at its end.
- loses: Two sentences. The section on who runs the pizzeria has both lines with their records ("it's still me" [[ffps-scraptrap-still-me]]; "You're not who I expected to see..." [[ffps-scrap-baby-not-expected]], "the line for the other reading, an outsider nobody planned for") and the marker ("He is most likely"); `michael` weighs it again.

### 14. SPLIT · killer · tension
- old: Who the caught man was is open, the killer later free for want of bodies or the wrong man, and no link in the chain depends on it (see ((murders)) and ((open))).
- new: Who the caught man was is open: the killer, later free for want of bodies, or the wrong man. No link in the chain depends on it (see ((murders)) and ((open))).
- gain: The sentence can be read at one pass; as it stands "free for want of bodies or the wrong man" runs together.
- loses: nothing; punctuation and the connecting "and" only.

### 15. CUT · thesis · body
- old: and does not call it Remnant. It does not call the two men partners: that is the model's reading, argued in ((partners)). Nor does it call
- new: and does not call it Remnant. Nor does it call
- gain: The note of denials that closes the first chapter is one sentence shorter, and the sentence that goes is one the reader has met in the table above.
- loses: One sentence of the note "What the paragraph does not say". The table row "An old friend" says it: "Medium that the two were partners in the business, which the paragraph does not say", with the link to `partners`.

### 16. HEADING · thesis · heading
- old: What the paragraph does not explain
- new: That the children stay on, and not how
- gain: The chapter no longer has two near-identical titles (this heading, and the note "What the paragraph does not say"), and the heading says what the section finds.
- loses: nothing; the words are the section's first sentence ("The paragraph says that the children stay on in the mascots, and not how").

### 17. CUT · thesis · tension
- old: No game says which machine the scanned boards came from [[sd-which-board-unknown]], which is why the paragraph marks its account of the rabbit in the code as the model's reading, and why the chapter on it, ((digital)), says only that it is something he left behind. And a graveyard
- new: No game says which machine the scanned boards came from [[sd-which-board-unknown]]. And a graveyard
- gain: The hedge on the rabbit in the code is given in the answer, the table and its own section; a fourth account of why it is hedged goes, and the paragraph keeps the record.
- loses: Two clauses and, in this paragraph, the link to `digital`. The section "One hedge: what the rabbit in the code is" says that the reading is the model's and links to `digital`; the table row grades it "Medium that it is something he left behind". The record stays cited.

### 18. CUT · plush · tension
- old: the twin and the handset. Against the voice being William Afton's own there is the purple figure at work in a back room, in the scene where the voice gives directions [[fnaf4-purple-guy-suits-up-employee]], which is why that reading stays a guess.
- new: the twin and the handset.
- gain: The paragraph keeps to the question the chapter leans on, the toy or the boy's mind, and the scene with the purple figure is told once.
- loses: One sentence. "Whoever sits at that desk" tells the scene in full ("Against it there is a scene..."), cites the same record, and says that Afton as the speaker "is no more than a guess".

### 19. CUT · springtrap · tension
- old: The rival placing, before 1987, is weighed above: an old restaurant "left to rot" [[fnaf2-call1-new-location]], and Scott's FNaF2 trailer, which shows the captions "forgotten", "dismantled" and "deactivated" between shots of the older machines [[scott-fnaf2-trailer-captions]]. It loses
- new: The rival placing, before 1987, is weighed above. It loses
- gain: The sentence already says the rival placing "is weighed above"; the list that follows is the box's second column again.
- loses: The two items of the list. Both stand in the box "Before 1987, as the old restaurant rotted", with the same two records, which also stay in the list of records in tension.

### 20. CUT · remnant · tension
- old: names no machine. The only other use of the word on record is Special Delivery's collectible [[sd-tutorial-remnant-collection]], which treats it as a resource and explains nothing. The model's reading rests
- new: names no machine. The model's reading rests
- gain: The reader is not told the same fact in two consecutive paragraphs: the body's last paragraph is about Special Delivery's Remnant, and "what pushes back" opens straight after it.
- loses: One sentence. The body's last paragraph says it with the quotation ("is used to power up your animatronics") and the same record, which stays in the list of records in tension.

### 21. HEADING · afton-house · heading
- old: Whose house
- new: Most likely William Afton's own home
- gain: A skimmer gets the chapter's finding from its headings; this is one of the few in the text that names a question where it could give the answer.
- loses: nothing; the words are the section's first sentence ("the house is most likely William Afton's own home"), with its marker as it stands there.

### 22. HEADING · ffps · heading
- old: Who runs the pizzeria
- new: The franchisee is most likely Michael
- gain: The heading gives the section's finding, with the section's own marker.
- loses: nothing; the words are the section's ("The franchisee is never named and never speaks. He is most likely" Michael; "The model keeps Michael").

### 23. HEADING · s-1979 · heading
- old: 1979: the company comes to collect
- new: The company comes to collect
- gain: The line stops giving the year twice ("1979, most likely 7 September · 1979: the company comes to collect").
- loses: nothing; the year stands beside the title.

### 24. CUT · vanny · tension
- old: The section above says why it cannot be set aside, and the model has no account of it. The game's cast list
- new: The game's cast list
- gain: The rooftop page is stated in "what pushes back" and not followed by a pointer and a repeat of the answer.
- loses: One sentence. The answer ends "and the model has no account of that page", and the section "One woman, or two" says why the page cannot be put aside as one branch among several.

### 25. CUT · nightmares · body
- old: Each looks down from high in a corner or from the ceiling, where FNaF4 never puts its player, and each is empty [[sl-private-room-feeds-empty]]. ((afton-house)) tells the room in full.
- new: ((afton-house)) tells the room in full.
- gain: This is the third chapter running that describes the Private Room's monitors; the sentence that goes is the part the next paragraph says again.
- loses: One sentence. That each view is empty is said by the next paragraph ("the monitors show the rooms with nobody in them", with the same record [[sl-private-room-feeds-empty]]); the high viewpoint is in `afton-house`, which this paragraph links to ("Each is seen from high in the room, where FNaF4 never puts its player").

### 26. CUT · two-machines · body
- old: The game ends three ways, and the model does not choose.
- new: nothing
- gain: The heading directly above it is "Three endings, and none is chosen"; the reader no longer reads the same sentence twice in a row.
- loses: The paragraph, which is this one sentence. The heading says it, and so does beat 3 ("Secret of the Mimic gives the night three endings, and the model does not choose").

Checked by script against commit 42366ee (3 October 2026, 12:19 PDT): each `old` was found exactly once (a
heading, once in its beat or chapter); the twenty-six changes apply in either order and leave every changed
line a well-formed string. If the files move again before these are applied, an `old` that no longer matches
should be skipped, not forced.

## 4. Possible errors, and beyond this pass

**Possible errors**

- Front matter, the second paragraph of "how to read": "Three markers flag the rest", and four are then set in bold (most likely, the model reads, may be, leans).
- `fnaf1-restaurant`, under "Most likely the old building": "Four things support it" is followed by what a reader counts as five (the clipping; the old building still standing in 1987; the two differences of the 1987 office; the layout of the building where the killer dies; FNaF2's cutscenes), and the last is called "the weakest of the four".
- The page, not the text: in this worktree `src/pages/Theory.tsx` (line 112) prints all four paragraphs of "how to read" before the storyline, where the brief says the fourth stands at the head of the parts. Change 1 assumes the brief; if the page is as the file has it, the move gains nothing.

**Beyond this pass**

- `thesis`: the chapter marked "Start here" is the story's third telling and an audit of it; it needs an opening on the table's question, not on the paragraph, which is a rewrite.
- `thesis`, the note "What the paragraph does not say": it denies theories the reader has not been shown; each denial needs its theory named, or the note belongs in `open`.
- `afton-house`, the paragraph on the breaker panel ("That night is one of two ways the last night can go..."): both readers stall here; it needs to open on what the panel's map shows.
- `vanny`, "Princess Quest: fought from inside, and unproven": four "(as described)" in thirteen sentences; the section could say once that these scenes are held as descriptions.
- `vanny`, the answer: 100 words in large type, and no sentence of it can be cut without losing a claim, so it needs shortening by rewriting.
- `pizzaplex`, the paragraphs after the endings table (the mask, the prototype Freddy, the earthquake, the comics): four exceptions before the conclusion; they need ordering around "the model's account is a composite".
- "What pushes back" in `fnaf1-restaurant`, `ucn`, `murders`, `golden` and `digital` (170 to 231 words each): the re-tellings there are woven into new records, so only a rewrite can shorten them.
- Glosses: "(known as Glitchtrap, Scott's working name for it)" stands ten times, "(known as Burntrap...)" eight, and "the voice on ... tapes" seventeen; once per part would serve a reader who reads in order, which is a change of rule and not a cut.
- Beats 1 to 3: the story opens on the newest game, which the returning fan has not played; saying that the newest game is set earliest would be a new statement.
- `open`: 1,598 words that restate entries argued elsewhere; one line and a link for each would serve, which is a rewrite.

## 5. Five sentences to keep

- "Five Nights at Freddy's is one story: what a machine keeps of a person, and a company that keeps putting it back on stage." (the front page)
- "What this chapter keeps is smaller: the first thing the games show W.A. doing is reaching for another man's machines." (`partners`)
- "Fire, in this story, is one man's answer, given once. It half works." (`ffps`)
- "What is let out by a child is, most likely, the machine that a father built after his son died." (`mimic`)
- "The games keep a good deal locked, and this model forces no locks." (`open`)

## Appendix: where I was gripped, bored, lost, or told again

Noted during the one reading, in order, before I opened the first reader's memo. An empty cell means nothing to report.

| Where | Gripped | Bored | Lost | Told again |
|---|---|---|---|---|
| Front page | The standfirst and the thesis ("It seems to end there, on six graves.") | The third paragraph of "how to read" | Mildly: two tags are used in beats 1 and 11 and explained only after the storyline |  |
| Beats 1 to 3 | Beat 2 ("Think of it as your new babysitter", "It mimics rage") |  | Beat 1, as a returning fan: Murray, M1, M2 and Dispatch, in a game I have not played |  |
| Beats 4 to 20 | Beats 5, 12, 13 ("He gets up."), 15 and 20 |  | Beat 17, on the second scan | The date, in the titles of beats 7, 10 and 14 |
| `thesis` | "The table says what that voice is entitled to" | The table, on a phone | The closing note of denials | The whole story, a third time; the hedge on the rabbit in the code, four times |
| `killer` | The opening scene; "Purple is a way of drawing" |  | The sentence on the caught man under "what pushes back" |  |
| `springlocks` | The tapes ("before bleeding out") |  | The dating of the note to Fiona |  |
| `two-machines` | All of it ("Daddy's busy, buddy") |  |  | "Three endings", as a heading and then as a sentence |
| `partners` | The last line |  |  | The answer's clauses, in the body |
| `afton-house` | The box "What is shown, and what is not" |  | The paragraph on the breaker panel | "the weakest step", in the body and under "what pushes back" |
| `plush` | "Two lines that come true" |  |  | The purple figure in the back room, in the body and under "what pushes back" |
| `nightmares` | "A real room answers only those who say there was no such room" |  | The dots on the breaker map | The monitors, for the third chapter running; the model's one defence, three times |
| `bite` | The party, and the dark after it |  |  |  |
| `child-outside` | "The same scene, from inside the box" |  |  | The old friend and the credits, for the fourth time |
| `murders` | "it is one support, not two" | The bracket of years |  | The credits again |
| `golden` | "And the smell...ugh." |  | The table of seven counts, on a phone | The coin in Ultimate Custom Night, a third time |
| `november-1987` | The table of nights; "no act" |  | The two assumptions about the suit | The box's second column, word for word |
| `fnaf1-restaurant` | The advertisement |  | Counting the "four things" |  |
| `springtrap` | "The ghosts fade, and that is all" |  |  | The walled-up room, four times |
| `funtimes` | "Then there was one." |  |  |  |
| `remnant` | The box "What no game says" |  |  | Special Delivery's Remnant, in consecutive paragraphs |
| `michael` | All of it ("the model does not guess") |  |  |  |
| `fazbears-fright` | "We found one. A real one." |  |  | The hidden tape's lines, from `springtrap`; Scott's "complex" |
| `ffps` | The Saturday; "It half works." |  |  | The franchisee, in the body and under "what pushes back" |
| `salvage` | "nothing explains the count" |  |  | The credits, "it's still me", "little souls" |
| `ucn` | The table of lines; "a judge's words to a murderer" |  | The roster's minor characters | Three pointers back, under "what pushes back" |
| `faith` | "it arrives late and all at once" |  |  | The speech and the two voices, straight after their own chapters |
| `cover-story` | The table of what the company says |  | The three layers | The lines of the 1979 night |
| `digital` | Jeremy's tapes |  | The list of signs under "It presents as the killer" | The rival's four records |
| `vanny` | "It takes two objects to hear her." |  | The section on Princess Quest | The rooftop page, five times |
| `pizzaplex` | The staff messages ("There will be cake!") |  | The paragraphs after the endings table | The rooftop page, twice more; Vanessa's release, four times |
| `burntrap` | The construction crew; "It does not say that he walks." |  | What moves the remains | The name gloss |
| `mimic` | The opening, and the last line |  | "The mask before Cassie" | The six dolls |
| `patterns` | "The makers in this story are fathers" |  |  | (by design) |
| `canon-rules`, `edges`, `timeline-math` | Scott's "your theory needs to evolve" | As a returning fan, all three |  | That the books are left out by policy and not by Scott's ruling, five times |
| `games` | "extended and repaired in public" |  |  |  |
| `open` | "this model forces no locks"; the locked box | Its length |  | (an index, by design) |
