# Fazbear Canon Archive: mobile review

Independent review of the build served at `http://127.0.0.1:5198/`, used as a first-time reader on a phone.
Read-only: no code was changed. Screenshots are in `mobile/shots/`; scripts, logs and working notes are in `mobile/`.

Unless a finding says otherwise: Chromium phone emulation, 390×844, 2× density, touch input, night theme, medium text.
Spot checks at 360×740, 430×932 and 844×390 (landscape), in the paper theme and at large text.
"Throttled" means a 4G-like network (9 Mbit/s down, 3 Mbit/s up, 150 ms latency) and a CPU slowed four times.
"2 of 2" and similar mean the number of fresh runs in which the thing happened.

## 1. Verdict

1. A patient reader will enjoy this: the type is comfortable, every chapter gives its answer on the first screen, and the citation drawer is the best thing on the site.
2. A first-time reader on a phone will probably not finish the story: the first screen has nothing to tap, and the story is 23 screens that stop without an ending.
3. Most in the way: the Back button or gesture. With every overlay except the citation drawer it leaves the page instead of closing the overlay.
4. Second: finding your way. There is no menu, search or settings once you scroll, the story has no next step, and a reload on a slow phone returns you to the top.
5. Third: the dense parts. Wide tables hide or clip their main column, and the 12 to 13 px evidence text does not grow when the reader chooses Large.

## 2. Findings

37 findings: 11 major, 21 minor, 5 polish. No blocker: nothing stops a reader from going on, though finding 1 comes close on a phone where Back is the usual way to close things.

### 1. Back leaves the page for every overlay except the citation drawer
`major` · all routes · 390×844

**Did.** Opened each overlay, then pressed Back (the same history step as the Android back gesture and the iOS edge swipe). Two fresh runs each, arriving from `/theory`.

**Saw.**

| Overlay open | What Back did (2 of 2 each) |
|---|---|
| Menu | The page behind went back to `/theory`; the menu stayed open on top of it |
| Search palette (with a query typed) | The page behind went back; the palette stayed open |
| Chapter contents sheet | Left the chapter |
| Enlarged image (chapter figure, story picture, gallery) | Left the page for the one before it |
| Timeline Filters sheet, Eras sheet, "why this date" card, an opened event | Left the timeline |
| Evidence Filters sheet | Left the evidence locker |
| Enlarged image inside the citation drawer | Closed the image and the drawer together (3 of 3) |
| Citation drawer | Correct: closed the drawer, kept the place |

Forward does bring the page and the scroll position back, but a reader does not know that.
For the "why this date" card and an opened event, leaving the page is what any web page would do; the menu, search, the sheets and the image viewer are the ones that matter, because they look like screens of their own.

**Should.** Back closes the thing on top and nothing else.

**Fix.** The citation drawer already pushes a history entry when it opens. Move that into one shared hook and use it for every `<dialog>` and sheet: push a state on open, close the top overlay on `popstate`, and call `history.back()` when the overlay is closed by its × or backdrop. Stacked overlays (image over drawer) each push their own entry.

**Shot.** `back-menu-sheet.png`, `back-search-palette.png`, `back-chapter-contents-sheet.png`, `back-gallery-image-viewer.png`, `j04e-sheet00.png`, `j04e-sheet01.png`

### 2. Once you scroll there is no menu, search, home or settings
`major` · all routes · 390×844 and 844×390

**Did.** Scrolled four swipes down on home and in a chapter, then 260 px back up (2 runs each). Listed the pinned controls halfway down eight pages.

**Saw.** At phone widths the site header is `position: static`: it scrolls away and does not return when you scroll up. Halfway down, the only pinned controls are the chapter bar (contents, previous, next) in a chapter, the era bar on the timeline, and the search field with Filters on the evidence locker. On home (19 screens), the theory cover (48 screens), person pages, essays and the gallery there is nothing: no menu, no search, no way home, no back-to-top. From the middle of the story, reaching search means scrolling up as many as 23 screens.

**Should.** Menu and search are one tap away from anywhere.

**Fix.** On phones make the header a 48 px bar that hides when scrolling down and returns on the first scroll up (sticky, with a transform switched by scroll direction). Where a chapter bar or era bar exists, show it under the header only while the header is showing. A cheaper version: add search and menu icons to the right end of the chapter bar and era bar, and give home and the theory cover the same slim bar.

**Shot.** `f-nav-no-header-home.png`, `f-nav-no-header-chapter.png`

### 3. The first screen of home offers nothing to tap
`major` · `/` · 390×844, 360×740, 844×390

**Did.** Arrived cold and read the first screen.

**Saw.** The first screen is a two-line label, a headline that is one 31-word sentence set in nine lines of 33.6 px serif (308 px tall), and twelve lines of thesis that run off the bottom. The only controls are the search and menu icons. What the site is and why to trust it are both inside that one sentence. The first action, the "1 Read the story" card (which is good), starts at 1,174 px: 1.4 screens down, after a picture. At 360 px wide the headline is ten lines. In landscape the headline alone runs past the bottom of the first screen.

**Should.** In the first screen: what this is in a few words, one line on why to trust it, and one button.

**Fix.** A headline of at most three lines, with the long sentence moved to the line under it. Directly below: a primary button "Read the story · 20 beats · 11 min", a secondary "The full case · 35 chapters", and one proof line ("1,044 records, every claim one tap from its source"). Let the first exhibit picture show at the bottom edge of the screen.

**Shot.** `j01-home-first-screen.png`, `j01-home-sheetA.png`

### 4. The story has no ending and no next step, and "14 more beats" starts again at beat 1
`major` · `/theory` (the storyline) and `/` · 390×844

**Did.** Tapped "Read the story" on home and read all 20 beats. Separately tapped home's "…and 14 more beats, to the end of the story".

**Saw.** The story is 19,286 px, 22.9 screens, 2,226 words. After the picture under beat 20 the next thing is the heading "The full case: every question, and the model's answer" and a 20-screen index. Nothing marks the end, nothing says what to do next, and nothing along the way says how far you are. On home, the story stops after beat 6 and the link lands on beat 1 of the full story (scroll position 2,958), so the reader scrolls back through about 6,000 px just read. The beats already have ids: `#/theory#s-five` opens beat 7 correctly.

**Should.** A clear end, one obvious next step, and a link that continues where home stopped.

**Fix.** After beat 20 add an end card: "That is the whole story", then "Start the full case: chapter 1", "See it on the timeline" and "How firm is it?". Number the beats beside the date ("7 of 20"). Point home's link at `#/theory#s-five`.

**Shot.** `j02b-story-end-sheet00.png`, `j02b-home-more-beats-landed.png`

### 5. Wide tables hide or clip their main column
`major` · 12 tables in 10 chapters · 390×844 and 360×740

**Did.** Measured all 29 chapter tables and looked at each one that scrolls sideways, before and after a finger drag.

**Saw.** Twelve of 29 tables are wider than the 358 px column.
- `games` (chapter 34): 559 px wide. At rest the reader sees "Game" and "When it is set" (248 px, because its date links do not wrap) and one letter per line of "What it adds", under a faint fade. At 360 px that column is entirely off screen. After dragging, the "Game" column has scrolled away, so rows lose their label, and "What it adds" is 136 px: two or three words a line, rows up to 340 px tall.
- `vanny` (196 px too wide) and `fnaf1-restaurant` (113 px) behave the same way.
- Four tables are 2 to 23 px too wide (`open` three times, `patterns`). So little is hidden that nothing suggests scrolling, and the last column is cut mid-word: "Novemb" for November, "Suits tha".
- No table keeps its first column or its header row in view. Tables that do fit can be very long: `thesis` (chapter 1) is 3,444 px, four screens of two to four words a line; `open` has one of 3,821 px; `patterns` has a single row 723 px tall.
- Two-column tables (for example `november-1987`) read well.

**Should.** Every cell readable without sideways scrolling; each row keeps its label.

**Fix.** Below 640 px render a table of three or more columns as stacked cards: the first cell as the card's heading, the other cells as labelled lines ("When it is set: …", "What it adds: …"). If that is too much for now: let date links wrap, set column widths that total 100% with `overflow-wrap: anywhere` (this removes the four clipped cases), and make the first column sticky at the left.

**Shot.** `f-tables-sheet00.png`, `j03b-tables-sheet08.png`, `f-table-open-clipped.png`, `vp-360-sheet01.png`

### 6. On a slow phone a reload returns you to the top, and "Continue" opens the chapter at its start
`major` · chapters, `/theory`, `/timeline` · 390×844, throttled

**Did.** Read down four swipes, then reloaded, which is what a phone does when it has dropped a background tab.

**Saw.** The place was lost in 9 of 13 throttled runs: chapter 2 of 6, the story on `/theory` 4 of 4, the timeline 3 of 3. The page came back at the top. It was lost in every run where content took more than about 1.5 s to appear and kept in every run where it took under 1 s. It was never lost without throttling (8 runs), and Back to a chapter restored the place to within 22 px every time. Separately, after reading 4,169 px into chapter 22, the theory cover showed "Continue: chapter 22", which opened the chapter at the top. Home and the menu show no "continue" at all.

**Should.** A reload, and "Continue", return to the paragraph you were reading.

**Fix.** Restore the scroll position when the page's content has been laid out, not on a timer: keep trying until the document is tall enough for the saved position, stop after about 10 s or at the reader's first touch. Store a per-chapter anchor (paragraph and offset) beside `fca:last`, make "Continue" use it, and show "Continue" on home's first screen and in the menu.

**Shot.** `verify2-reload-lost.png`, `verify2-continue-link.png`

### 7. Search cannot answer a question, and can put the wrong chapter first
`major` · search palette · 390×844

**Did.** Typed the six queries from the brief and about thirty more; tapped results; measured typing on the slowed CPU.

**Saw.**
- Every word must match. "who is golden freddy" returns one record and no chapter or person; "who killed the children" and "golden freddy identity" return nothing. "golden freddy" alone returns twelve good results.
- Order. "bite of 87" puts chapter 9, "The bite at the birthday party" (the 1983 bite), above chapter 13, "November 1987", which is the chapter about the Bite of '87. "mimic" puts chapter 16, "Afton Robotics", above chapter 29, "Behind the concrete", the Mimic's own chapter.
- Names fans use. "purple guy" returns no chapter (chapter 2 answers that question; "purple man" finds it). "henry" returns nothing; the archive's name is "the Cassette Man".
- A chapter row reads "Chapter 9 · The family": it does not say what question the chapter answers. In a sample of 430 rows, 30% of titles and 26% of second lines were cut with an ellipsis.
- The list stops (28 rows for "freddy") with no link to the full result in the evidence locker.
- "1983" and "Vanny" give good results. Typing keeps up: the slowest keystroke was 125 ms on the slowed CPU.

**Should.** A plain question finds the chapter that answers it, and that chapter comes first.

**Fix.** Ignore small words (who, is, the, of, what, did). When all-words gives fewer than three results, fall back to any-word and rank by words matched. Index each chapter's question and answer, and a list of search-only names (Purple Guy, Henry, Bite of 87) that point to the right chapter or person. Rank a phrase or number found in a title first. Show the chapter's question as the second line and allow two lines. End the list with "See all N records in the evidence locker".

**Shot.** `j05b-search-sheet00.png`, `j05b-search-sheet01.png`, `verify7-search-noresult.png`

### 8. "Text size" changes only part of the site
`major` · reader settings · 390×844

**Did.** Set Small, Medium and Large and measured named blocks on eleven pages; looked at a chapter, the drawer and a record page at Large.

**Saw.**

| Grows with the setting | Does not change |
|---|---|
| Chapter body text (15.9 / 17.2 / 19.3 px) | Everything on home, including the same story beats (17 px) |
| Story beats on `/theory` | The model's answer at the head of a chapter (19.9 px) |
| Comparison cards | Figure captions (13 px) |
| Timeline text (13.8 / 15 / 16.8 px) | "What pushes back" rows (15, 13 and 12 px) |
| Essay body text | Tables (15 px) |
| | The whole citation drawer |
| | Record pages, the evidence locker, person pages, contents answers on the theory cover |

A reader who sets Large while on home sees nothing change. A reader who needs Large gets a bigger argument and the same small evidence.

**Should.** One setting scales everything a reader reads.

**Fix.** Drive all text sizes from one variable: set the size on `html[data-text]` and express sizes in `rem`, or multiply every size token by one scale. At the least, include home, the chapter head, captions, "What pushes back", tables, the drawer and record pages.

**Shot.** `f-textsize-large-sheet00.png`

### 9. Nothing appears for 2 to 3.5 seconds: every page waits for the whole evidence database
`major` · all routes · 390×844, throttled, cold cache, 6 runs per page

**Did.** Measured cold loads (section 3), recorded a filmstrip, and held back single files by 3 s to see what the first content waits for.

**Saw.** The shell (header, "Loading…", and the footer directly under it) paints at 0.6 to 0.7 s. The page's own content appears at 3.2 to 3.5 s in the median run, 2.1 to 2.6 s at best, and 4.4 s for the theory cover. Holding back either `evidence-*.js` (all 1,044 records; 1,283 KB, 290 KB gzipped) or `gameMeta-*.js` (591 KB, 179 KB gzipped; it includes chapter text) delayed the heading of home, of a chapter and of `/method` by the same 3 s (2 of 2 each): every page waits for both files. When content arrives, the footer jumps from under "Loading…" to the end of the page (layout shift 0.22 on all seven pages) and the content fades in over 0.32 s. Every file is served `Cache-Control: no-cache`, so a returning reader makes 23 to 26 check-back requests and still waits 1.7 to 1.9 s. This server gzips scripts and styles when the browser asks (not brotli). Without compression the same load is 2.6 MB and content appears at about 5.1 s (measured on home and a chapter, 3 runs each).

**Should.** The headline, or a chapter's answer, within about 1.5 s on this profile.

**Fix.** In order of effort: (1) serve the hashed files with `max-age=31536000, immutable`; (2) make the loading shell's main area at least one screen tall so the footer starts below it, and drop the fade on first paint; (3) confirm the production host compresses, with brotli if it can; (4) split the data, so a chapter loads its own text and the records it cites (about 35) and the full set loads when search, the locker or the timeline needs it; (5) write the home headline and each chapter head into the HTML at build time.

**Shot.** `perf-film-home-sheet00.png`, `perf-film-chapter-sheet00.png`

### 10. Citation numbers are 10 to 20 px wide and 1 px apart, and the drawer does not say which one opened
`major` · chapters, story, timeline, essays · 390×844

**Did.** Measured every tap target on 21 pages; mapped the tap area around two adjacent citations.

**Saw.** There are 655 citation links on those pages. Each is 10 to 20 px wide and 26 to 35 px tall around a number set at 9 to 12 px. 388 of them are within 8 px of another target. Neighbours such as "18, 19" are 20 px wide each with a 1 px gap. The drawer that opens is headed "Evidence record" with no number, so a reader cannot tell whether 18 or 19 opened, and there is no next or previous.

**Should.** A finger can pick a citation, and the drawer confirms which one it is.

**Fix.** Treat a run of adjacent numbers as one target that opens the drawer on the first, with "Source 18 · 1 of 2 here" and arrows. Head every drawer "Source 9 of 35" with arrows that step through the chapter's citations in order. Widen single numbers to 32 px with padding and a negative margin.

**Shot.** `f-cite-adjacent-outlined.png`, `j04a-1-after-tap.png`

### 11. The People filter loses the second character typed on a slow phone
`major` · `/people` · 390×844, CPU slowed 4× and 6×

**Did.** Typed known words into each text field at 30 to 250 ms per key, with and without the slowed CPU.

**Saw.** In the People filter only, the second character sometimes disappears: "purple" became "prple", "springtrap" became "sringtrap", "golden freddy" became "glden freddy", "michael" became "mchael". The page then says "Nobody by that name". It happened to 10 of 47 words on the slowed CPU, including once at 250 ms per key, and to none of 15 words at normal speed (it was seen once at normal speed while the test machine was busy). The first keystroke writes `?q=` into the address and costs a 79 ms task. The evidence search, the search palette and "Find a tag" never lost a character (30 words each).

**Should.** What is typed is what the field holds.

**Fix.** Keep the field's text in local state while it has focus. Copy it to the address after a pause (150 ms or more, replacing the history entry), and never write the address value back into a focused field.

**Shot.** `f-people-filter-dropped-key.png`, `verify15-people-filter.png`

### 12. The way to the next chapter is two to four screens below the end of the argument
`minor` · foot of every chapter · 390×844

**Did.** Read six chapters to the end (`afton-house`, `ucn`, `november-1987`, `games`, `open`, `thesis`). In all 35, measured the distance from the "What pushes back" heading to the "Next" card.

**Saw.** After the last paragraph come "What pushes back" (4 rows in `afton-house`; 9 rows in `ucn`, where this block and the two notes after it run 2,900 px), "How the model handles it", "What would change this", "Read alongside" (five or six chapter links), "Sources", "Further evidence", then a "Previous" card, and only then "Next". From the "What pushes back" heading to the top of the "Next" card is a median of 2.7 screens across the 35 chapters: more than two screens in 31 of them, more than three in 10, 3.0 in `afton-house` and 4.3 in `ucn`. The arrows in the pinned bar do reach the next chapter from anywhere, so no scrolling back up is needed; but they are icons only, 40×40 px and touching, and do not say what comes next. "Read alongside" shows a confidence mark with no word beside it (6 of 6). Progress is a 2 px line and "Chapter 6 of 35"; there is no time left.

**Should.** The next chapter is named and offered as soon as the argument ends.

**Fix.** Put "Next: The voice in the plush" first in the foot and "Previous" second and smaller. Repeat "Next" as one line straight after "What would change this". Show "Next: …" in the pinned bar once the reader has passed the argument. Add the word to the marks in "Read alongside".

**Shot.** `j03-afton-house-sheet03.png`, `j03-ucn-sheet03.png`

### 13. Paragraphs of 25 to 42 lines; chapter 1 opens with 33
`minor` · chapters · 390×844 (a screen holds about 27 lines)

**Did.** Counted the lines of every paragraph in all 35 chapters, and read `thesis`, `afton-house` and `ucn` in full.

**Saw.** Twenty of 35 chapters have a paragraph longer than 20 lines. The longest: `springlocks` 42 lines (1.4 screens), `two-machines` 37, `thesis` 33, `ucn` 32, `mimic` 31. Chapter 1, where "Begin with chapter 1" sends a new reader, opens with the 33-line paragraph and follows it with the four-screen table from finding 5. It is the hardest chapter to read on a phone.

**Should.** No paragraph much longer than half a screen.

**Fix.** Break body paragraphs at about 12 lines. In chapter 1, set the thesis as a short numbered list of its clauses, which the table then takes one by one.

**Shot.** `j03-thesis-sheet00.png`

### 14. The story carries a citation every 19 words, and each picture sits under the wrong beat
`minor` · `/theory` storyline, and the six beats on `/` · 390×844

**Did.** Read the 20 beats on `/theory` and the six on home, and measured how the story's height divides between text, pictures and labels.

**Saw.** Each beat is a number, a date, a title, the text, a confidence line, "Argued in" links, a picture, a caption and "Image source". Of the story's 19,286 px, text is 50%, pictures with their captions 30%, and labels the other 20% (about 4.5 screens). There are 119 citation numbers in 2,226 words. Each picture comes after its beat's confidence and "Argued in" lines, directly above the next beat's number, so it reads as the opening of the next beat. My reading of the furniture: the confidence line helps and costs one line; "Argued in" helps and could be quieter; the citation numbers are what make a story read like a brief.

**Should.** The story reads as a story; the proof is one tap away.

**Fix.** In the story, hide citation numbers by default and give each beat one "Sources (6)" link that opens the drawer with next and previous. Move the picture to just under the beat's title. Put confidence and "Argued in" on one line.

**Shot.** `j02-beat07-sheet.png`, `j02-theory-sheet03.png`

### 15. Home is 19 screens and tells the theory four times
`minor` · `/` · 390×844

**Did.** Scrolled the whole home page screen by screen and measured each section.

**Saw.** 16,289 px, 3,232 words, and one picture in the first 17 screens. After the six beats come "Questions the model answers" (12 questions, 4.3 screens of text that all looks alike), "Six things the evidence establishes" (3.4 screens) and "Eight eras" (3.1 screens). Attention sags at the questions; that is where I would have left.

**Should.** Home sends the reader into the story or the case within a few screens.

**Fix.** Keep the opening, the three paths, the six beats, six of the questions (question only, answer on tap) and the trust section. Move the six "things" and the eight eras to `/theory` and `/timeline`.

**Shot.** `j01-home-sheet01.png` to `j01-home-sheet05.png`

### 16. The theory cover: 2.3 screens of "How to read it" before the story, and a 20-screen contents
`minor` · `/theory` · 390×844

**Did.** Scrolled the theory cover from top to bottom and measured its sections.

**Saw.** The page is 40,929 px (48.5 screens). Its three buttons are on the second screen, which is good. A reader who scrolls instead meets "How to read it" for 1,913 px before the story begins. "Every question, and the model's answer" prints all 35 answers in full, 17,100 px; reaching chapter 29 takes about 17 screens, and this page has no compact contents (the contents sheet exists only inside a chapter).

**Should.** The cover is a short page of doors.

**Fix.** Cut "How to read it" to four lines with "more". Show the contents as part headings with chapter titles and confidence, answers on tap, or reuse the contents sheet. Consider giving the story its own page.

**Shot.** `j02-theory-sheet00.png`, `j02-theory-sheet01.png`

### 17. Reading settings are at the bottom of the menu, a screen down
`minor` · all routes · 390×844

**Did.** Looked for the reading settings from the middle of a chapter, then changed theme, text size and citation markers by tapping.

**Saw.** The "AA" button is hidden at phone width. Theme, text size and citation markers are the last block of the menu, 707 px of scrolling inside it. From the middle of a chapter, changing text size means scrolling to the top (finding 2), opening the menu, scrolling it, and tapping. The settings themselves work, apply at once and are remembered.

**Should.** Theme and text size are one or two taps from where the reader is reading.

**Fix.** An "Aa" button beside search in the header and in the chapter bar, opening the three settings as a small sheet.

**Shot.** `j11b-sheet00.png`

### 18. Citation drawer: no next from a number, a wrong label elsewhere, and Back forgets the first record
`minor` · any citation · 390×844

**Did.** Opened the drawer from an inline number, from a figure's "Record" link, from a "What pushes back" row and from an evidence-locker result. Tapped a related record inside it, pressed Back, and dragged the sheet down.

**Saw.** (a) Opened from a number, or from a figure's "Record" link, the drawer has no next or previous. Opened from "What pushes back" it has "Record 1 of 4 cited here", which is right. (b) After tapping a related record inside the drawer, the bar reads "Record 1 of 5 cited here", though these are related records, and Back closes the drawer: the record you came from is gone (2 of 2). (c) Over evidence-locker results the bar reads "Record 1 of 50 cited here". (d) Dragging the sheet down does nothing (2 of 2); it closes by × or a tap above it. (e) One record can be 2,460 px of scrolling inside the sheet.

**Should.** The drawer says which list it is stepping through, Back returns to the record before, and a downward drag closes it.

**Fix.** Word the bar by context: "Source 9 of 35", "Related 1 of 5", "Result 1 of 4". Push a history entry for each record so Back steps back. Let a drag on the bar close the sheet. Put the image and "In the theory" higher; fold notes and related records.

**Shot.** `j04a-sheet00.png`, `j04b-sheet01.png`, `j08a-sheet01.png`

### 19. "35 records cited" lands half under the bar, and Back then leaves the chapter
`minor` · chapter head (`afton-house`, `ucn`) · 390×844

**Did.** Tapped "35 records cited" at the head of the chapter, then pressed Back.

**Saw.** The link (112×20 px) jumps to the Sources list at the foot and opens it. The "Sources" row lands at 25 to 81 px while the pinned bar covers 0 to 44 px, so its heading is half hidden. Back then goes to `/theory`, not to the head of the chapter (2 of 2).

**Should.** The "Sources" heading lands clear of the bar, and Back returns to the head of the chapter.

**Fix.** Give the target a `scroll-margin-top` of the bar's height plus 12 px. Push a history entry for the jump, or put "Back to the top" beside "Sources". Make the link a 40 px chip.

**Shot.** `verify11-sources-jump.png`

### 20. Game codes used as labels, and rows of bare code chips
`minor` · person and place pages, evidence filters, every record row · 390×844

**Did.** Read William Afton's page, a place page, the evidence filter sheet and the evidence list as someone who knows only the first few games.

**Saw.** Sources appear as codes: SL, FFPS, UCN, HW, HW2, AR, SB, Ruin, Pit, Mimic, Dreadbear, World, Teaser. The full names exist only for screen readers. Someone who played the first few games years ago will not know FFPS, UCN, AR, SB or Pit. On William Afton's page 51 links are a code and nothing else ("SL, FFPS, UCN, Scott, SL, SL"), so one "SL" cannot be told from the next without opening each. The page also uses "record" both for a person's entry and for an evidence record.

**Should.** A source is named in words where a reader first meets it, and every link says what it opens.

**Fix.** A tap on a source chip shows its full name, as the date chips already do. Print full titles in the filter sheet. On person and place pages give each chip its record's title, or fold a row of chips into "7 records" that opens the drawer with next and previous.

**Shot.** `j07-afton-big0.png`, `j08a-sheet00.png`

### 21. A quarter to a third of a chapter's characters are 11 to 13 px
`minor` · all routes · 390×844, both themes

**Did.** Measured the size of every visible run of text on 21 pages in both themes, and computed contrast for each text style once the page's fade-in had finished.

**Saw.** Share of visible characters under 14 px: chapters 24 to 39%, home 33%, theory cover 23%, timeline 28%, person page 49%, record page 67%, evidence locker 81%, sources 87%, gallery 89%. Carrying meaning at 13 px or less: figure captions, "What pushes back" claims (13 px) and their locations (12 px), evidence-locker claims and locations, source summaries, home's era summaries, confidence words, date chips (11 to 12 px), labels such as "The question" (11 px capitals), and the footer note. Contrast is not a problem: no text measured under 4.5:1 in either theme, and the faintest was about 5.2:1.

**Should.** Any sentence a reader is meant to read is at least 14 px.

**Fix.** A floor of 14 px for anything that is a sentence, 12 px for labels, both tied to the text-size setting (finding 8).

**Shot.** `j03-afton-house-sheet02.png`, `j08-evidence-sheet00.png`

### 22. Small or touching tap targets, besides citations
`minor` · 21 pages measured · 390×844

**Did.** Measured every link, button and control on 21 pages: its size, and the distance to the nearest other target.

**Saw.** Of 3,043 targets, 1,793 are under 40 px in one direction and 807 of those are within 8 px of a neighbour. Besides citations (finding 10):
- "Record" (40×18 px) and "Image source" (93×18 px) under each figure, 16 px apart.
- "Argued in" chapter links: 15 to 16 px tall, wrapping, stacked with no gap.
- Titles in "What pushes back" and Sources rows: 20 px tall links, stacked.
- The chapter bar's arrows: 40×40 px, touching.
- The "Part III · The family" link at a chapter's head: 15 px tall.
- Date chips: 17 to 29 px tall.
- Footer links: 19 px tall.
- Source chips (46×30 px at the smallest): 175 of 176 within 8 px of the next.

**Should.** Targets a finger can hit: about 40 px tall and 8 px apart.

**Fix.** A minimum height of 40 px, made with padding, for links in lists and credits, with 8 px gaps. Chapter-bar arrows 44 px with 8 px between them. Make the whole evidence row the link.

**Shot.** `j03-afton-house-sheet00.png`, `j03-afton-house-sheet03.png`

### 23. Timeline rows: a dead chevron, cut-off names, and two look-alike marks side by side
`minor` · `/timeline` · 390×844 and 360×740

**Did.** Tapped event rows on the title, the text and the chevron. Read the death lines at 390 and 360 px. Opened the Key and a date.

**Saw.** (a) The chevron at the right of each event row does nothing when tapped (2 of 2; 46 rows). The rest of the row opens it. (b) The death line cuts the victim's name with an ellipsis on 18 rows; at 360 px "Fiona Murray" becomes "Fiona M…". (c) Each row shows two near-identical discs with different meanings: one inside the date chip (how the date is known) and one beside "Canon" (how firm the event is). The Key explains both, and tapping a date explains that date very well, but the disc in the chip cannot be read on its own.

**Should.** Every part of a row opens it, names are whole, and the two marks cannot be mistaken for each other.

**Fix.** Make the chevron part of the row's button, or give it `pointer-events: none`. Let the death line wrap to two lines. In the date chip, use a word the dates already use ("c.", "est.", "undated") or a different shape from the firmness marks.

**Shot.** `j06a-sheet00.png`, `vp-360-sheet01.png`, `j06-1-key.png`

### 24. Timeline "Locations": a small link, bars without labels, a repeated aside
`minor` · `/timeline?view=locations` · 390×844

**Did.** Switched to the Locations view, read the 28 rows, tapped a place name, then pressed Back.

**Saw.** Each of 28 places is a name (the only link; "Fredbear's Family Diner" is 173×20 px), a date chip, a bar of eight segments about 40×7 px, and a sentence. The key to the eight segments is at the top only and scrolls away. "(start not pinned down, end not pinned down)" repeats on most rows. Tapping a name leaves this view for the event list filtered to that place; Back returns correctly.

**Should.** A row can be tapped anywhere and understood without scrolling back to the key.

**Fix.** Make the whole row the link, at least 44 px tall. Say the era span in words ("Eras 1 to 2"). State once, in the introduction, that ends are often not pinned down, and mark a row only with the dashed end.

**Shot.** `j06-locations-sheet00.png`, `j06-locations-01.png`

### 25. Gallery viewer: the picture at 270 px, no swipe; thumbnails are the full files
`minor` · `/gallery` · 390×844

**Did.** Opened a picture from the grid, used the arrows, swiped sideways and down, pinched, tapped beside the picture and pressed Back. Measured what the grid downloads.

**Saw.** (a) The viewer keeps 60 px each side for its arrows, so a 1024×768 screenshot is shown at 270×203 px, about a sixth of the screen. The same viewer in a chapter, without arrows, gives 374 px. (b) Swiping sideways does not change the picture and swiping down does not close it (2 of 2 each). The arrows work. A tap beside the picture closes the viewer, and that area is 31% of the width. (c) Back leaves the gallery (finding 1). (d) The 171×106 px thumbnails load the full files: the first twelve weigh 1,798 KB, the page is 2.6 MB before any scrolling, and scrolling drops to 46 to 56 frames a second while they decode.

**Should.** The picture fills the width, a swipe changes it, and the grid loads small files.

**Fix.** Lay the arrows over the picture or put them in the bottom bar, so the picture is full width. Swipe to change, drag down to close. Make 360 px thumbnails for the grid.

**Shot.** `j08c-sheet00.png`, `j08b-lightbox-sheet.png`

### 26. People filter: the matches appear behind the keyboard
`minor` · `/people` · 390×844

**Did.** Typed "purple", then "mimic", into the filter and measured where the first match appears.

**Saw.** The first match starts 275 to 298 px below the field, at about 670 to 692 px of an 844 px screen, under a legend, a note and a group heading. The on-screen keyboard is not emulated; assuming one of about 300 px, the matches are behind it. The count line is not near the field either.

**Should.** Matches appear directly under the field, above the keyboard.

**Fix.** While the field has text, hide the legend and group chips and start the results directly under the field with the count.

**Shot.** `f-people-filter-results.png`

### 27. Six form controls are set at 15 px
`minor` · `/people`, the evidence and timeline filter sheets, `/graph` · 390×844

**Did.** Read the computed font size of every input and menu on the site at phone width.

**Saw.** 15 px: the People filter, "Find a tag", "Find a person or place", the evidence order menu, the timeline Place menu, and the web's "Focus on" menu. iPhones zoom the page when a focused control is under 16 px; I measured the sizes, not the zoom. The search palette and evidence search are 17 px, which is right.

**Should.** No control makes an iPhone zoom the page when it is focused.

**Fix.** 16 px minimum on inputs and menus at phone width.

**Shot.** `verify15-people-filter.png`

### 28. Landscape on a notched phone: text sits under the notch
`minor` · reading pages · 844×390 with 47 px side insets emulated (2 runs)

**Did.** Emulated landscape with 47 px side insets and a 21 px bottom inset, and measured where text and pinned controls start.

**Saw.** The page asks for the full screen (`viewport-fit=cover`), but no style rule uses the left or right safe-area inset. Text starts 33 to 45 px from the edge on home, the theory cover, chapters, the timeline and the evidence locker, inside a 47 px inset. In landscape the drawer's "Open the full record" is 12 px from the bottom with a 21 px bottom inset. Portrait is fine: sheet footers clear the 34 px home indicator.

**Should.** Text and controls stay inside the safe area in both orientations.

**Fix.** Pad the page container and pinned bars with `max(gutter, env(safe-area-inset-left))` and the same on the right. Add the bottom inset to the landscape drawer's footer.

**Shot.** `vp-land-sheet01.png` (the landscape layout; emulation does not draw the notch)

### 29. Unknown chapter, record, person, place and source: five different bare cards
`minor` · `/#/theory/nope`, `/#/evidence/nope`, `/#/people/nope`, `/#/places/nope`, `/#/sources/nope` · 390×844

**Did.** Opened one unknown address of each kind.

**Saw.** `/#/nope` is good: it says what happened and offers three ways on. The other five show a small dashed card, one button and an empty screen. They are worded five ways ("There is no chapter with that address", "No such record", "Unknown person", "Unknown place", "Unknown source"). Three have no main heading. None offers search, which is what a mistyped address needs.

**Should.** Every unknown address gets the same helpful page.

**Fix.** One not-found layout, the `/nope` one, with a sentence for the type, the list button, and a search field filled with the words of the bad address.

**Shot.** `j11c-sheet00.png`

### 30. Evidence filters: "With a screenshot" is hidden, results show no thumbnail
`minor` · `/evidence` · 390×844

**Did.** Narrowed the locker to FNaF4, Minigame, with a screenshot; opened a record; paged to the next; cleared the filters.

**Saw.** The task (minigame records from FNaF4 that have an image) works: six taps, four results, live counts, filters in the address, chips and "Clear all" on the page, and Back from a record keeps the list. The friction: "With a screenshot" is inside "More filters", collapsed, at the bottom of a 1,030 px sheet; and rows show no thumbnail even when the list is filtered to records with a screenshot.

**Should.** A filter fans will want is visible without unfolding anything, and results that have pictures show them.

**Fix.** Move "With a screenshot" up beside Certainty. Show a 56 px thumbnail on rows that have one.

**Shot.** `j08a-sheet00.png`, `j08a-sheet01.png`

### 31. Three essays end without a way back into the theory
`minor` · `/box`, `/author`, `/community` · 390×844

**Did.** Skimmed each essay from top to bottom and counted its links into the theory.

**Saw.** Each opens well, with "The short answers", and links to chapters inside its text (2, 11 and 22 links). Each ends with "More essays" only. `/method` alone ends with "Read the theory". The first chapter link in `/box` is 5,867 px down.

**Should.** Each essay ends by pointing at the chapter it bears on.

**Fix.** End each essay with the chapter it bears on ("This feeds chapter 35, What stays open") and "Read the story".

**Shot.** `j09-community-sheet01.png`

### 32. Family tree and web: small gaps on a phone
`minor` · `/family`, `/graph` · 390×844

**Did.** Dragged the Afton tree and the web with a finger, tapped people in both, and opened the lists that say the same thing in words.

**Saw.** Both are usable by touch, neither traps scrolling, and both have an equivalent in words. The gaps: the Afton tree is 608 px wide in a 356 px box, nothing at its edge shows there is more, and the hint that says so is below the tree. Its lines overlap in the middle column. "The ties drawn, as a list" is closed by default. In the web, 4 of 23 discs have no label in the "Everyone" view and labels are 11 px.

**Should.** A reader can tell that the tree continues to the side, and every disc has a name.

**Fix.** An edge fade and the hint above the tree. Open the list by default on phones. Label every disc, or show a name on first tap.

**Shot.** `j07b-tree-sheet00.png`, `j07c-graph-sheet00.png`

### 33. Search palette: placeholder cut off, an "Esc" button, a return-key mark
`polish` · search palette · 390×844 and 360×740

**Did.** Opened the palette at 390 and 360 px and read it before typing.

**Saw.** The placeholder needs 359 px and the field has 277 px (247 px at 360), so it reads "Search chapters, people, places, e". The close button is labelled "Esc", a key a phone does not have. The top result carries a return-key mark.

**Should.** Nothing in the palette refers to a keyboard the phone does not have.

**Fix.** A shorter placeholder at phone width ("Search the archive"); "Close" or × instead of "Esc"; hide the return-key mark on touch devices.

**Shot.** `j05a-1-palette-empty.png`, `final-check-A.png`

### 34. Pinned bars are 90% opaque: headings show through as they pass
`polish` · chapter bar, era bar · 390×844

**Did.** Scrolled a chapter and the timeline and watched the pinned bar.

**Saw.** Large headings ghost through behind the bar's title while scrolling.

**Should.** The bar's title is always readable.

**Fix.** A solid background on phones, or a stronger blur with 96% opacity.

**Shot.** `j03-ucn-04.png`

### 35. Counts that do not agree
`polish` · `/sources`, `/method`, `/gallery` · 390×844

**Did.** Compared the totals printed on these pages with the lists under them.

**Saw.** "1,044 records from 19 sources" on `/sources` and `/method`; `/sources` lists 20, the twentieth being Freddy in Space 2 with 0 records and a "Set in" label followed by nothing; `/gallery` says "17 sources".

**Should.** A count matches the list it heads.

**Fix.** Say "19 sources with records", or leave the empty source out of the list; hide an empty "Set in"; label the gallery's number "17 sources with pictures".

**Shot.** `j08-sources-big.png`

### 36. Raw record ids on show
`polish` · citation drawer footer, record page breadcrumb · 390×844

**Did.** Read the citation drawer and a record page, and checked about 200 pages for raw markup.

**Saw.** The drawer's footer prints the id ("sl-extras-map-entertainment-and-rental") beside "Open the full record"; the record page's breadcrumb ends in the id. No raw markup of the kinds named in the brief was found on any of about 200 pages checked.

**Should.** Readers see titles, not ids.

**Fix.** Drop the id from the drawer. In the breadcrumb use the record's short title; keep the id in the "Record id" row that already exists.

**Shot.** `j04a-sheet00.png`, `j08-record-sheet00.png`

### 37. The menu has no "Home"
`polish` · menu · 390×844

**Did.** Opened the menu from a chapter and looked for the way home.

**Saw.** The way home is the logo. The menu lists everything else and marks the current section clearly.

**Should.** The menu lists Home.

**Fix.** A "Home" row at the top of the menu.

**Shot.** `j11-menu-open.png`

## 3. Performance

Throttled as above, cold cache, 6 runs per page. The test machine was busy during the runs, so timings vary between runs; the table gives best, median and worst where that matters.
"Main content visible" is the moment the page's heading (or first list row) is laid out and its fade-in has finished.
"Shell painted" is the first paint: the header, "Loading…" and the footer, not content.

| Page | Requests | Transfer as served | Uncompressed | Shell painted | Main content visible: best / median / worst | Long tasks: count, longest (median / worst) | Blocking time (median) | Layout shift | Scroll: frames a second, median (worst run) | Frames over 50 ms: median (worst run), longest gap |
|---|---|---|---|---|---|---|---|---|---|---|
| Home `/` | 27 | 882 KB (scripts 594, fonts 195, images 74) | 2,578 KB | 0.6 s | 2.2 / 3.2 / 3.7 s | 5, 377 / 486 ms | 962 ms | 0.22 | 59 (55) | 0 (4), 100 ms |
| Chapter `/theory/afton-house` | 29 | 929 KB (scripts 584, fonts 247, images 81) | 2,593 KB | 0.7 s | 2.3 / 3.5 / 3.7 s | 8, 352 / 398 ms | 1,177 ms | 0.22 | 58 (58) | 1 (1), 167 ms |
| Theory cover `/theory` | 29 | 848 KB (scripts 583, fonts 247) | 2,508 KB | 0.6 s | 2.6 / 4.4 / 4.6 s | 7, 734 / 923 ms | 1,692 ms | 0.22 | 57 (55) | 2 (4), 100 ms |
| `/evidence` | 25 | 799 KB (scripts 588, fonts 195) | 2,466 KB | 0.6 s | 2.3 / 3.4 / 3.5 s | 7, 418 / 493 ms | 1,126 ms | 0.22 | 60 (59) | 0 (0), none |
| `/timeline` | 29 | 823 KB (scripts 611, fonts 195) | 2,552 KB | 0.6 s | 2.1 / 3.5 / 3.7 s | 5, 547 / 630 ms | 1,218 ms | 0.22 | 59 (55) | 4 (7), 117 ms |
| `/gallery` | 34 | 2,586 KB (scripts 580, fonts 195, images 1,798) | 4,228 KB | 0.7 s | 2.1 / 3.3 / 3.6 s; first picture 2.6 / 3.8 / 4.1 s | 6, 420 / 517 ms | 1,163 ms | 0.22 | 56 (46) | 9 (21), 100 ms |
| `/graph` | 32 | 866 KB (scripts 601, fonts 247) | 2,544 KB | 0.7 s | 2.3 / 3.5 / 3.8 s | 8, 721 / 761 ms | 1,414 ms | 0.22 | 60 (60) | 0 (0), none |

What the numbers say:

- **Compression.** The brief says the server does not compress. This one does for scripts and styles when the browser asks: the responses carry `Content-Encoding: gzip`. It does not offer brotli, and fonts and images are sent as they are. "Transfer as served" is therefore the gzipped figure. Asking for no compression: home 2,586 KB with content at 5.1 s instead of 3.3 s; a chapter 2,601 KB and 5.1 s instead of 3.8 s (3 runs each, alternated with compressed runs).
- **What is loaded.** Two data files are fetched and run before any page shows its content (finding 9): `evidence-*.js`, 1,283 KB (290 KB gzipped), and `gameMeta-*.js`, 591 KB (179 KB gzipped). With the framework file (259 KB; 82 KB gzipped) that is 2.1 MB of script to run before the home headline. Fonts are 5 or 6 files, 195 to 247 KB.
- **Caching.** Every response is `Cache-Control: no-cache`. A second visit with a warm cache: content at 1.7 s (home), 1.7 s (chapter), 1.9 s (theory cover), after 23 to 26 check-back requests.
- **Layout shift.** 0.22 on every page, all of it the footer jumping when content replaces "Loading…". While reading down afterwards the shift is zero on six pages tested: pictures have their sizes set.
- **Largest paint.** The browser's "largest contentful paint" is misleading here: on four of the seven pages it picks the footer note in the loading shell (0.8 to 1.3 s). Use "main content visible".
- **Main-thread cost of a cold load**, without throttling: home 887 ms, theory cover 919 ms (2,915 elements, 258 ms of layout), chapter 699 ms, evidence 268 ms, timeline 283 ms, gallery 305 ms, graph 264 ms. A mid-range phone takes about four times as long.
- **Scrolling** is smooth: 55 to 60 frames a second on every page on the slowed CPU, except the gallery while its pictures decode (46 in the worst run). A chapter has one task of 110 to 175 ms on the way down (in all 6 runs).
- **Moving about on the slowed CPU**, once files are loaded (single runs): next chapter 0.8 to 1.3 s; opening the citation drawer 0.8 s; opening the menu 0.6 to 1.5 s; menu to timeline 1.7 s; menu to theory cover 2.1 s. Each includes the 0.32 s fade.

## 4. What works well and must not be broken

- **The chapter head.** Question, then the model's answer, then a confidence word with one line saying what it means, then "6 min read · 35 records cited · 4 push back". The answer is on the first screen of every chapter.
- **Body type.** 17 px serif on 29 px lines, about 38 characters a line at 390 px. No page scrolls sideways: checked on 54 pages at 360 px, large text, paper theme.
- **The citation drawer.** Back closes it and keeps your place. "Open the full record", then Back, returns to the same paragraph with the drawer open again. A person link inside it behaves the same way. It shows claim, quote, picture, certainty, notes, and where else the record is used.
- **Sheets never move the page behind them** (7 of 7 kinds), and their footers clear the home indicator.
- **The timeline.** Tapping a date opens a card saying how the date is known and what it rests on: the clearest answer on the site to "is this dated firmly, or placed by convention?". Filters show live counts, live in the address, survive a reload, and appear on the page as chips with "Clear all"; the empty result is explained. "Close" at the end of a long opened event returns you to its row.
- **The evidence locker.** Counts on every filter, "Show 50 more" kept when you come back from a record.
- **"What pushes back" and "What would change this"** at the foot of each chapter. This is what makes the archive read as honest.
- **The essays' "short answers"** and the community scorecard (verdict, what it got right, what it got wrong, Scott's side, this archive's reading).
- **The paper theme** is complete: drawer, palette, sheets, timeline and callouts all look finished. No text under 4.5:1 in either theme.
- **Pictures** never push text, none is stretched past its own pixels, and pinch-zoom works in the viewer.
- **"Hide citation markers"** leaves clean prose with no stray punctuation, and the sources list and figure records stay.
- **Words for the diagrams.** The family tree and the web each have a list that says the same thing.
- **Back from a person to a person** restores the place, and the People filter text is kept in the address.
- **The `/nope` page.**

Checked and found fine, so nobody needs to chase them: no raw markup, "undefined" or empty headings on 35 chapters, 64 person pages, 28 places, 20 sources and 40 records; no layout shift from late pictures; no scroll trap in the tree or the web; no pull back to the anchor after landing on `/theory#storyline` by finger.

## 5. Ideas

In order of value for effort.

1. **An ending for the story.** An end card after beat 20 with three next steps, and "7 of 20" beside each beat's date.
   It costs an afternoon and turns 23 screens into something a reader can finish and know they finished.
2. **"Next: …" and minutes left in the chapter bar.** Show the next chapter's title in the pinned bar once the argument is over, and "4 min left" beside the chapter number.
   Thirty-five chapters then read like a book with a visible spine.
3. **Resume at the paragraph.** "Continue: chapter 22, The night without end, 40% in" on home's first screen and in the menu.
   Phones drop tabs; a reader who is put back where they were keeps reading.
4. **Tap any confidence mark for its meaning.** The same small card the dates already have: "Medium confidence: probable, but it needs an inference the records do not state".
   The key then travels with the reader, who may never have seen "How to read it".
5. **A story mode without numbers.** Hide citation numbers in the 20 beats and give each beat one "Sources (6)" link.
   The story reads in one breath; the proof is still one tap away.
6. **Swipe in the drawer and the image viewer.** Sideways for the next source or picture, down to close.
   Checking five sources in a row becomes five swipes instead of five round trips.
7. **The story on its own page.** `/theory` becomes thesis plus three doors (story, 35 answers, method).
   The cover drops from 48 screens to about three, and the story gets its own progress bar.
8. **The story and chapter text available offline.** Cache them after the first visit.
   A long read on a phone happens on trains and in bad signal.

## Method and assumptions

- Chromium only, emulating a phone. Touch was sent as real touch events (finger down, move, up). The on-screen keyboard is not emulated; where it matters I assumed it covers about 300 px.
- The truth of the lore was not reviewed, and old text on person and family pages was not judged as content.
- I looked at the screenshot of every step of every journey, as contact sheets of four to six screens and at full size where detail mattered. For the longest pages (the theory cover's contents, the chapters `open` and `thesis`, the gallery, the sources list and the essay bodies) I looked at a sample of the screens and at reduced overview sheets of the rest (`ov-*.png`), not at every screen at full size. `mobile/notes.md` records what was seen on each.
- Things I suspected and then could not reproduce, or traced to my own test, are not in the findings. They are listed at the end of `mobile/notes.md`.
