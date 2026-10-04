# Acceptance read: the Fazbear Canon Archive

The last read before publication, made on 3 October 2026 between 15:53 and 22:00 (PDT), in Chromium driven by
Playwright: first as a fan on a phone (390×844, touch, night theme), then as a careful reader at a desk
(1440×900, mouse and keyboard, paper theme), then three quick passes (768px, Large text on the phone, every kind
of page).

## What was read, and what this report can and cannot say

- **The build.** What is served at `http://127.0.0.1:5198` was built at 15:25 from the worktree `thumbtest`
  (commit `69af1c0` of 14:25, plus uncommitted work). Everything below was seen in that build.
- **The source has moved on since.** `ws/integ` stood at `3b02d1d` (21:43) when this was written, 48 commits
  later. I compared the two in the source (read only) and tag every finding:
  **open** (the same in `ws/integ`), **in hand** (changed there; I read the change, nobody has read it in a
  browser), or **known** (in `final/NOTES.md` as known or declined, and kept here because it hurt).
  Seven of the 33 findings are in hand. The build that is published should be read once more for those seven.
- **What was done.** The home page, all twenty beats and the ten chapters the brief names were read in full on
  the phone, in the page. The text of all 35 chapters, of the 1,046 record pages and of every other kind of page
  was also taken from the browser and searched for the faults the brief lists. 87 scripts, about 960
  screenshots. Five crawls of 52 routes (phone, desk, tablet, phone at Large, tablet at Large), every record
  page at phone width, and 2,594 internal links: **no console error, no failed request, no missing page, no
  image that never loads.**
- **Limits.** Chromium only: Safari was not tried. Touch is Playwright's. The times for a first visit come from
  throttling in the browser against a local server, and moved by about a second with the load on the machine.
- **About the pictures.** My image viewer returned no picture for roughly the first 110 screenshots I asked
  for. Every finding below therefore cites a picture I did see afterwards (most are composites in `fx/`, four
  phone screens side by side, named here by panel), or a measurement, said as such. `seen.txt` lists them.
  All file names are relative to this folder.

## 1. Verdict

### A fan on a phone, who has never seen the site: **mostly yes**

The first screen says what the site is and what to do, "Read the story" lands on the story, and the twenty
beats read in about ten minutes as a story, with a bar that says "06 of 20" and an ending that says where to
go next. The chapters are comfortable on a phone: each opens with its question, its answer and how sure it is;
tables turn into cards; quotations are set large with their source under them; a small number opens the record
in a sheet, and Back brought me to the line I had left every time, slow or fast. The writing is careful more
than thrilling. The beats are vivid, the chapters hedge on purpose, and the best of them (chapter 22, on
Ultimate Custom Night) is good because it shows its doubt. I was never lost. I was slowed, and twice annoyed.
The three things most in the way:

1. **The evidence layer shows its workings.** Tapping a number is the site's promise, and nearly half of the
   records behind those numbers print other records' ids ("(fnaf2-paycheck-1987,
   fnaf2-overtime-robots-scrapped)").
   In this build the timeline also counts "23 recorded deaths" where nine are, and tags a survivor "DEATH"; and
   a search for "henry" answers "Nothing matches" (findings 1, 2, 4; the last two are in hand).
2. **Large text.** The one setting a phone reader is likely to change cuts the header's menu button in half
   and lets every page slide sideways until a reload, throws the reader a screen or more off their line, and
   makes the home page and the cover slide sideways even after a reload (findings 3, 5, 6).
3. **The weight around the prose.** Tags such as "(a fan wiki's account)" stand in the text 73 times and are
   explained only elsewhere; up to three screens of record cards stand between "What pushes back" and the
   model's reply; and the very first visit shows a blank dark screen for one to five seconds (findings 14, 18,
   8).

### A careful reader at a desk: **yes**

At a desk the site is at its best: a line of about 59 characters in a 19px text face, a rail that follows the
reader and lands where it says, a preview on hover, the record in a drawer, a keyboard that reaches everything
with a ring that is always visible, a web of ties that can be read, and a printed chapter fit for paper. Its
central claim holds: all 482 quoted phrases that carry a number are in the record that number opens. What
stands in the way is smaller than on the phone:

1. **Records that print raw ids, and (in this build) labels that say more than the entry.** A careful reader
   opens more records and meets more of them (findings 1 and 2).
2. **The drawer hides part of what it is checking.** It is modal, it covers the last 115px of the sentence at
   1440 wide, a second source costs two clicks, and nothing marks which number is open (finding 16).
3. **Small inconsistencies that a careful reader counts.** "78 relationships" leads to a page that says "20
   ties"; "11-12-1987" stands unexplained on records; the same date line has two looks; one list has straight
   quotes; numbers in the text skip (findings 10, 9, 13, 12, 15).

## 2. Findings

How the four grades are used here. **Blocker:** a visitor cannot read, or is told something false; do not
publish. **Major:** a visitor on a main path meets something plainly broken or misleading; fix before
publishing. **Minor:** it slows or irritates; fix soon. **Polish:** it looks unfinished to a careful eye.

| | all | open | in hand | known or expected |
|---|---|---|---|---|
| blocker | 0 | | | |
| major | 4 | 2 | 2 | |
| minor | 19 | 14 | 3 | 2 |
| polish | 10 | 8 | 2 | |

### Major

**1 · major · open · Records print other records' ids, as plain text**

- **Where:** any record, in the sheet (390) and the drawer (1440) over a chapter, and on the record's own
  page. For example `/theory/thesis`, number 5; `/theory/november-1987`, number 16; `/theory/ucn`, number 9;
  `/evidence/ffps-lorekeeper-gravestones`; `/evidence/fnaf2-call1-new-location`.
- **Steps:** on the phone open `/theory/thesis`, tap the small 5 after "credited as the Cassette Man", and
  scroll the sheet to "Notes and caveats".
- **Saw:** "For possible in-game hints see ffps-hry223-label and Secret of the Mimic's 'Hen'
  (secret-of-the-mimic-mail-springlocks-hen)." Under "In-universe time" of the yellow-suit record: "FNaF2
  paychecks are dated 11-12-1987 and 11-13-1987 (fnaf2-paycheck-1987, fnaf2-overtime-robots-scrapped)". In a
  claim itself: "A sixth stands apart on the hill behind (ffps-lorekeeper-hill-stone)." None of them is a link.
  **429 of the 1,046 records (41%) carry at least one, 681 ids in all**: in the notes of 296 records, in the
  "Basis" line of 194, in the claim of 2 (`rawids.py`, from the data of this build; read from the record pages
  themselves, `p46-rawids.mjs`, 432 pages show one). Of the 309 records behind a number in the ten chapters I
  read, 146 show one (47%); of the 656 behind a number in all 35 chapters, 288 (44%).
- **Expected:** the other record by its title, as a link; or nothing.
- **Pictures:** `fx/h-00.png` (all three kinds), `fx/v-00.png` (second panel: a phone sheet),
  `shots/d06-2-drawer.png` (the desk drawer: "(ffps-credits-william-afton)").
- **Smallest fix:** one function, used where `sourceWords(e.notes)`, `smartQuotes(e.when.basis)` and
  `smartQuotes(e.claim)` are printed in `src/pages/evidence/EvidenceDetail.tsx` and
  `src/components/EvidenceDrawer.tsx`: split the text on tokens that are known record ids and print each as a
  link to `/evidence/<id>` with that record's title. At the least, drop a bracket that holds nothing but ids.
- **Status:** open. `ws/integ` prints them the same way and has more of them (457 of 1,064 records, 740 ids).
  `NOTES.md` counts raw ids as done (polish 33 to 37); that pass did not reach the text inside a record.

**2 · major · in hand · "Recorded deaths", "DEATH" and "DIED" stand over people who survive or whose fate is not shown**

- **Where:** `/timeline` (390 and 1440); `/people/michael-afton`, `/people/vanessa`, `/people/vanny`.
- **Steps:** open `/timeline` and read the first line; scroll to "Michael's week underground" in era 6 and to
  era 1.
- **Saw:** the lede "The story in order: 43 events and 23 recorded deaths across eight eras"; "Showing all 43
  events and all 23 deaths"; era heads "6 EVENTS · 6 DEATHS". Under the tag DEATH: "The technician of Sister
  Location, Michael Afton (he survives)"; "DEATH · DISAPPEARANCE: Edwin Murray is left injured, and goes silent
  … (fate not shown)"; "Arnold, the technician (fate not shown)"; "Residents continue to disappear"; "Cassie
  (fate not shown)"; Vanny twice, once for each of two alternative endings. On Michael's page: "DIED 1: Michael
  is scooped, and does not die". On Vanessa's and Vanny's: "DIED 2". By the data's own `outcome` field
  (`src/data/deaths.ts`), of the 23 entries 9 are deaths the records give, 4 are presumed, 7 are not shown, 1
  survives, and 2 are one death told in two endings. The entries say so themselves; only the labels over them
  do not. (The page's Key calls the tag "A recorded death, killing or disappearance", which covers some of
  these and not a survivor.)
- **Expected:** a count and a tag that say what the entry says. This is the brief's own example.
- **Pictures:** `fx/l-00.png` (fourth panel: the lede and "6 DEATHS"), `fx/a-00.png` (first two panels),
  `fx/r-00.png` (first, second and fourth panels).
- **Status:** in hand. `ws/integ` commits `9649236`, `b64b251` and `c615e39` print the outcome in its own words
  ("Death", "Presumed dead", "Fate not shown", "Survives", "Death in one ending") and count other fates apart.
  Read in the source only. In the build that is published, look at the timeline's first line, an era's head,
  and Michael's page.

**3 · major · open · Choosing Large text on a phone breaks the header until the page is reloaded**

- **Where:** every page at 390 wide; seen on `/theory/killer`, `/theory/bite` and what follows them.
- **Steps:** tap "AA" in the header, tap "Large", close the panel.
- **Saw:** the header keeps the layout it chose for normal text. Its row runs to 413px on a 390px screen, the
  menu button is cut in half at the right edge (it still answers a tap), and the whole page can now be dragged
  23px sideways. It stays so on every page reached inside the site and after Back. A reload cures it, and so
  does any change of the window's width. Reproduced four times (`p25-large-header.mjs`,
  `p26-large-overflow.mjs`, `p60-recheck.mjs` A, `p61-sideways-real.mjs` 3).
- **Expected:** the header fits itself again, as it does after a reload.
- **Pictures:** `fx/s-00.png` (first panel), `fx/t-00.png` (second and fourth panels), `fx/a-00.png` (third
  panel).
- **Smallest fix:** `useHeaderFit` in `src/components/shell/Header.tsx` (lines 96 to 131). `fit()` returns at
  once unless the row's width has changed, and is forced only when the header mounts and when the fonts
  arrive. Text size changes the root font size, not the row's width. Force a fit when the size changes, for
  example inside the same effect: `new MutationObserver(() => fit(true)).observe(document.documentElement,
  { attributes: true, attributeFilter: ["data-text"] })`, disconnected on cleanup.
- **Status:** open (`Header.tsx` is the same in `ws/integ`). The header's own test (`t-header.mjs` in
  `NOTES.md`) loads each width at Large from the start; the fault is in changing the size with a page open.

**4 · major · in hand · "henry" finds nothing, and the site does not say why**

- **Where:** search, any page, 390 and 1440.
- **Steps:** open search and type "henry".
- **Saw:** "Nothing matches 'henry'. Try a name, a game, or a word from a quote." and one row, "Search every
  record for 'henry'", which leads to a single record whose note mentions the name. The same for "henry emily"
  and "charlotte". "charlie" and "cassidy" find only Scott's remarks about a film script and a kazoo, and not
  the person a fan means or the chapter that explains why the archive does not use the name. Of 62 words a fan
  might type (`p33-search3.mjs`), these were the only ones that led nowhere; "purple guy", "bite of 87",
  "vanny", "glitchtrap", "mci", "tape girl" and the rest land well.
- **Expected:** the Cassette Man's page, or a sentence saying that the archive uses only the names the games
  give, with a way on.
- **Pictures:** `fx/s-00.png` (fourth panel), `fx/i-00.png` (third panel).
- **Status:** in hand. `ws/integ` commits `01c736f` ("a person is found by any alias, and a name the archive
  does not use gets a way on"), `7539b07`, `6d66473` and `4bcafd8`; the message now ends "The archive uses
  only names that the games print or speak", with a link to `/method#names` (`SearchPalette.tsx` line 317
  there). Read in the source only.

### Minor

**5 · minor · open · Changing the text size throws the reader off their line**

- **Where:** any chapter at 390; measured on `/theory/killer`, `/theory/mimic`, `/theory/bite`, `/theory/ucn`.
- **Steps:** read to the middle of a chapter; tap "AA", then "Large".
- **Saw:** the paragraph being read, 260px from the top of the screen, is 1,448px (killer) and 1,018px (mimic)
  from the top afterwards: below the screen, with a table in its place. With "Small" it leaves by the top.
- **Expected:** the paragraph stays where it was.
- **Pictures:** `fx/t-00.png` (first and second panels). Scripts: `p60-recheck.mjs` B, `p50-last.mjs` A.
- **Smallest fix:** in `src/components/shell/prefs.ts`, where the size is applied (`applyPrefs`, line 22, and
  the effect in `usePrefs`): before `data-text` changes, note the first element of `main` below the header and
  its distance from the top; after the change, `window.scrollBy(0, newTop - oldTop)`.

**6 · minor · open · At Large text the home page and the cover slide sideways**

- **Where:** `/` and `/theory`, 390, Large (also after a reload). No other route does it.
- **Saw:** the date line of beat 06, "Undated. Placed here by convention.", does not wrap and ends at 408px.
  Its last letters are off the screen and the page drags 18px sideways.
- **Pictures:** `fx/t-00.png` (third panel), `fx/a-00.png` (fourth panel). Scripts: `p60-recheck.mjs` C,
  `p61-sideways-real.mjs` 2, `text/crawl-ql.json`.
- **Smallest fix:** `.beat__when .date--inline { white-space: normal; }` in `src/pages/theory/theory.css` (the
  chip is `nowrap` from `src/styles/richtext.css` line 215). Tried on my own copy of the page
  (`p65-tryfix.mjs`): the width goes from 408 to 390 and the line wraps in two (`shots/p65-chip-wrapped.png`).

**7 · minor · open · Four record pages are wider than a phone**

- **Where:** at 390: `/evidence/scottgames-site-sl-source-rental-schedule` (770px wide; 785px on the 768px
  tablet), `/evidence/scottgames-site-sl-source-client-directory` (605), 
  `/evidence/scottgames-site-sl-source-service-log-afton-robotics` (502), and
  `/evidence/fnaf2-save-them-golden-freddy` (398). The first three are cited by chapter 16, the fourth by
  chapter 13. All 1,046 record pages were visited at 390 (`p43-allrecords.mjs`); these are the only four.
- **Steps:** open one of them (from the chapter: a number, then "Open the full record").
- **Saw:** the claim and the quotation run off the right edge ("In June 2016 the scottgames.com" and the rest
  of each line is cut), and the page drags up to 380px sideways, the header with it. In the sheet over the
  chapter the same record wraps as it should.
- **Pictures:** `fx/s-00.png` (second panel as it loads, third after a drag).
- **Smallest fix:** `overflow-wrap: anywhere` on `.evx-rec__claim` and `.evx-rec__quote`
  (`src/pages/evidence/evidence.css`, lines 213 and 214) and on `.callout__body`
  (`src/styles/components.css`), as `.evx-rec__check` has already. Tried on my own copy (`p65-tryfix.mjs`):
  770 becomes 390.

**8 · minor · known · The first visit shows a blank dark screen until everything has arrived**

- **Where:** `/`, first visit, 390.
- **Saw:** nothing but the background colour, then the header and "LOADING…", then the page. With a slow
  phone connection (1.6 Mbit/s, 150 ms, processor slowed four times) the header came at 4.9 s and the headline
  at 5.9 s; with a good one (9 Mbit/s) at 1.8 s and 2.5 s; on a fast phone at 1.2 s and 1.4 s. About 815 kB
  arrive before anything is drawn: `index.html` holds an empty `#root` and preloads the three data files
  (`p51-slow.mjs`, `p62-firstscreen.mjs`).
- **Picture:** `fx/u-00.png` (0.6 s, 3 s, 4 s, 6.2 s on the slow connection).
- **Status:** known (`NOTES.md`, mobile 9 and "For the orchestrator" 1: splitting the data needs `store.ts`).
  It still costs a first-time visitor on a phone their first seconds.
- **Smallest fix,** short of splitting the data: put a still first screen inside `#root` in `index.html`, the
  same for every route: the header's bar with the site's name and one line, "Loading the archive…", in the
  page's colours. React replaces it when it mounts. The wait is the same, and it reads as loading.

**9 · minor · expected to be in hand · "11-12-1987" on records, with nothing to say it is month first**

- **Where:** `/evidence/fnaf2-paycheck-1987` ("IN-UNIVERSE TIME 11-12-1987") and five more record pages; the
  "Basis" line of 40 records ("FNaF2 paychecks are dated 11-12-1987 and 11-13-1987"); one timeline entry ("The
  cheque for the sixth night is dated 11-13-1987"); and chapter 13. Beside them the site's own chips say "the
  week of 12 and 13 November 1987" and "13 or 14 November 1987".
- **Saw / expected:** a reader outside the United States reads 11 December. Where a record's date is a printed
  American date, say the day in words beside it: "12 November 1987 (printed 11-12-1987)".
- **Pictures:** `fx/h-00.png` (second panel), `fx/v-00.png` (second panel).
- **Status:** `ws/integ` commit `e17d884` says "month first" where two chapters introduce the cheque. The
  records' labels are unchanged there; the brief says the way dates are shown on a record is being changed
  today.

**10 · minor · open · "78 relationships" on the home page leads to a page that says "20 ties"**

- **Where:** `/`, the tiles under "Nothing taken on trust" (390 and 1440), then `/family` and `/graph`.
- **Saw:** the tile "78 RELATIONSHIPS" opens `/family`, whose count reads "20 ties" (its other three trees say
  11, 5 and 10). The web at `/graph` says "39 people, 50 ties", and 78 only with "Unified people" switched
  off. The other five tiles lead to pages that show their number.
- **Picture:** `fx/o-00.png` (first two panels). Scripts: `p34-counts2.mjs`, `p63-facts.mjs`.
- **Smallest fix:** `src/pages/home/Home.tsx` line 51: send the tile to the view that shows 78
  (`/graph?unified=0`), or count on the tile what `/family` shows.

**11 · minor · open · On a phone the cover's "All 35 answers" leads to a list with no answers**

- **Where:** `/theory`, 390.
- **Saw:** the button "All 35 answers" (twice on the page) and the line "Skim the answers here" lead to a list
  of 35 questions. The answers appear only after "With answers" is tapped; at the desk they show at once.
- **Picture:** `fx/p-00.png` (first panel). Scripts: `p29-cover-list.mjs`, `p56-allanswers.mjs`,
  `p63-facts.mjs`.
- **Smallest fix:** `src/pages/theory/TheoryCover.tsx` (lines 19, 20, 44, 90): let that button also choose
  "With answers" (`setChosen("answers")`), or name it "All 35 questions" on a phone.

**12 · minor · open · Straight quotation marks in the cover's list of questions**

- **Where:** `/theory`, the list of chapters, both widths. Seven of the 35 questions: `the "W.A." and "Hen" of
  Murray's letters`, `FNaF4's`, `Bite of '87`, `Fazbear's Fright`, `Pizzeria Simulator's`, `"the one you should
  not have killed"`, `Help Wanted's`. Every other page sets these as curled marks.
- **Picture:** `fx/p-00.png` (second panel).
- **Smallest fix:** `{q}` becomes `{smartQuotes(q)}` in `src/pages/theory/Contents.tsx` (line 34). The same
  straight marks stand in the tag "SCOTT'S WORDS" on `/author` (`fx/f-00.png`, third panel) and in the names
  offered by the web's picker.

**13 · minor · open · The date line over a beat has two looks, with the same words in both**

- **Where:** `/theory` and `/`, both widths.
- **Saw:** ten of the twenty beats give their date as a chip (mixed case, a small mark, a dotted underline)
  that opens "why this date". The other ten give it in plain capitals that do nothing. The same words come
  both ways: "Before a night in 1979" is a chip on beat 01 and capitals on beat 02; "Undated. Placed here by
  convention." is a chip on 06 and capitals on 09, 13 and 17; "After the fire, most likely" is a chip on 19 and
  capitals on 16. I tapped the capitals and nothing happened.
- **Picture:** `sheets/p27-beat-dates.png`. Script: `p69-lastfacts.mjs` (d).
- **Smallest fix:** one look. `.beat__when` in `src/pages/theory/theory.css` (line 87) sets capitals and the
  chip undoes them; drop `text-transform: uppercase` there so both read alike, and keep the underline as the
  only sign of what can be opened.

**14 · minor · open · Four tags in brackets are never explained where they stand**

- **Where:** the chapters, both widths; first met in the first beat of the story ("A poster among that game's
  textures (read from an image)") and again in beat 11.
- **Saw:** "(a transcript)" 21 times, "(read from an image)" 18, "(as described)" 16 and "(a fan wiki's
  account)" 18: 73 in the 35 chapters and 2 in the beats. They are plain text. They are named in the cover's
  folded "The marks, and what they mean" and explained in chapter 31. A visitor meets them long before either,
  and I stopped at each of the first few. Beside them, "(known as Glitchtrap, Scott's working name for it)"
  and its like for Burntrap stand in full 16 times.
- **Picture:** `fx/r-00.png` (third panel: "(as described)").
- **Smallest fix:** let `RichText` set these four exact phrases as the dates are set: a quiet dotted phrase
  that opens one sentence of explanation. Give the "(known as …)" bracket once in a chapter.

**15 · minor · open · The numbers in the text skip**

- **Where:** 14 of the 35 chapters; `/theory/games` is the plainest (390 and 1440). Also `/` at 390.
- **Saw:** in "What each game adds" the numbers in the text run 7, 12, 13, 17: numbers 8 to 11, 14 to 16, 21
  and 22 belong to the records behind date chips and never appear (`textcheck.py`, "counts"; "Dating the
  story" skips eleven). On the home page a phone hides the beats' numbers, so the first number a visitor can
  tap is a 2, and its sheet is headed "SOURCE 2 OF 76". Nothing is wrong, and a reader who counts will wonder
  what was left out.
- **Picture:** `fx/m-00.png` (fourth panel: "SOURCE 2 OF 76").
- **Smallest fix:** number the records behind dates after the ones behind sentences, so that the text runs 1,
  2, 3; or say under "Sources" that a number with no mark in the text belongs to a date.

**16 · minor · open, and by design · At a desk the drawer covers part of the sentence it is checking**

- **Where:** any chapter at 1440; seen on `/theory/ucn`, number 9.
- **Saw:** the drawer is 496px wide and modal. The page dims and locks, and the drawer lies over the last
  115px of the text column (210px at 1280 wide; none at 1920), so the lines being checked are cut: "…the
  Cassette Man, the voice". A click on another number in the text only closes the drawer (twice, the same);
  it takes a second click to open that source. Nothing marks which number is open. The arrows in the drawer
  and the arrow keys do step through the sources, and the page stays put.
- **Picture:** `shots/d06-2-drawer.png`. Scripts: `d06-drawer.mjs`, `d07-drawer2.mjs`.
- **Expected:** the sentence and its record side by side: it is the one thing this reader came to do.
- **Smallest fix:** mark the open number in the text, and let a click on another number while the drawer is
  open go straight to that record. `DESIGN.md` makes every dialog modal (`useModalDialog`), so this is a
  decision taken; it slowed every check I made at the desk.

**17 · minor · open · A record's own page, reached from a chapter, does not say where the reader came from**

- **Where:** `/theory/killer` → a number → "Open the full record" → `/evidence/…`; both widths.
- **Saw:** the page's trail reads "Evidence / FNaF3 / Record · 5 of 48 in FNaF3". Back returns to the chapter
  at the same line with the drawer open, and that is right. After two steps with the page's own Previous and
  Next, four Backs are needed before the reader is reading again (`d09-back.mjs`).
- **Smallest fix:** on a record page reached from a chapter, one link at its head: "Back to chapter 2" (the
  router's state can carry it).

**18 · minor · open · "What pushes back" is up to three screens of cards before the model replies**

- **Where:** the end of a chapter at 390: `/theory/ucn` (13 cards, 3.2 screens between the heading and "How
  the model handles it"), `november-1987` (8 cards, 2.0), `vanny` (6, 1.9), `mimic` (5, 1.5), `thesis` (4,
  1.2).
- **Saw:** the cards are good: a title, what the record says, where it is. On a phone they come as a list to
  be scrolled past, and the reply to them comes after the last one. In chapter 22 I had forgotten the first by
  the time I reached the reply.
- **Picture:** `fx/w-00.png`. Script: `p68-pushback.mjs`.
- **Smallest fix:** on a phone show the first three and fold the rest ("10 more records push back"), or set
  "How the model handles it" first with the records under it.

**19 · minor · open · The Key cuts its last line, and one count breaks in two**

- **Where:** `/people/william-afton` and `/timeline` at 390, the button "Key"; `/people/cassette-man`.
- **Saw:** on the person's page the Key stops at about half the height of the screen with its last line cut by
  its bottom edge; on the timeline it runs to the bottom of the screen and is cut there ("Teaser. Shown in an
  official teaser. Where a"). It scrolls in both, and nothing shows that it does. On the Cassette Man's page
  the count beside the place "Freddy Fazbear's Pizza Place (Pizzeria Simulator)" stands as a 2 over a 3.
- **Picture:** `fx/b-00.png` (first, second and fourth panels).
- **Smallest fix:** fade the Key's bottom edge while there is more below it, and on the person's page let it
  use the room it has; `white-space: nowrap` and `flex: none` on the count.

**20 · minor · open · The rail keeps marking the last section through the end of the chapter**

- **Where:** `/theory/november-1987`, 1440.
- **Saw:** while I read "What pushes back", "What would change this", "Read alongside" and the sources, the
  rail still marked "The new machines are scrapped": those closing parts are not in it (`d03-rail.mjs`).
- **Picture:** `shots/d03-rail-end.png`.
- **Smallest fix:** add the closing parts to the rail as quiet entries, or clear the mark when the last
  section has gone by.

**21 · minor · in hand · A person's "The model's reading" is one paragraph of up to 334 words**

- **Where:** at 390: `/people/william-afton` (334 words in one paragraph, 1.5 screens, with nine grades in
  brackets such as "(high)", "(strong)", "(medium)"), `/people/vanny` (287 words, 1.3 screens),
  `/people/cassette-man`, `/people/vanessa`, `/people/michael-afton` (185 to 190 words, 0.8 to 0.9 of a
  screen). `fx/b-00.png` (fourth panel) shows where one begins. Script: `p69-lastfacts.mjs` (e).
- **Status:** in hand: `ws/integ` commits `103d605` and `a26164c` set long readings in paragraphs.

**22 · minor · in hand · On a phone the timeline's first screen holds no event**

- **Where:** `/timeline`, 390. The first event begins at 895px on an 844px screen: above it stand the title,
  two paragraphs, the tabs, the bar and thirteen lines of the first era's summary. `fx/l-00.png` (fourth
  panel).
- **Status:** in hand: `ws/integ` commit `51d612d` shows four lines of a long summary and a button.

**23 · minor · in hand · In chapter 1, "The same tape says…" follows a sentence about a minigame**

- **Where:** `/theory/thesis`, both widths (`text/ch-thesis.txt`). I read back to find the tape.
- **Status:** in hand: `ws/integ` commit `e17d884` names the tape.

### Polish

**24 · polish · open · "Hen and W.A.."** In `/theory/games`, the row "Pizzeria Simulator (2017)" ends "…The
four who came, Remnant, Hen and W.A..": the chapter's title ends in a full stop and the sentence adds its own.
`fx/i-00.png` (second panel). `src/data/chapters/apparatus.ts` line 320 ends `((remnant)), ((hen-and-wa))."`:
drop the last stop there, or let `RichText` swallow a stop after a title that ends in one.

**25 · polish · open · A quotation mark facing the wrong way.** The title of one of Scott's posts is printed
`“Bad news about the FNAF movie. :(“`, with an opening mark where the closing one belongs: in the sources of
`/theory/canon-rules` (numbers 26 and 28), in the source line of five records, and in search results.
`fx/f-00.png` (fourth panel). `smartQuotes` in `src/components/typography.ts` takes a mark after "(" for an
opening one; a "(" that follows ":" or ";" is the mouth of a face.

**26 · polish · open · Four large quotations open with a small letter and end with no stop.** "it's been
trapped down here for a really long time…" (chapter 29), "if I make a game that contradicts one of your
theories…" (31), "the majority of them were total fabrications…" (24), "no one is allowed in or out…" (13).
They are true to their sources and read as cut short. `fx/i-00.png` (first panel). Open each with "…".

**27 · polish · open · Commas and full stops drift from a group of numbers.** Where two or three numbers stand
together ("1987 24 , 28 , 11 . The box above…" in `/theory/november-1987`), the commas float between them and
the full stop stands up to 44px from the last number; after a single number it is 1.5px. Each number still
opens its own record. `shots/p38-widest-gap.png`. Tighten the padding of `.cite-wrap` on the side where
another number or a stop follows.

**28 · polish · open · Print: the last page holds one line, and the text uses two thirds of the page's width.**
`/theory/november-1987` on A4 runs to twelve pages; the twelfth holds only "Further evidence filed here · 13
more records on this thread, not cited above", which cannot be opened on paper. The text and the sources stand
in a column of about 64% of the page, at the left. `print/nov-paper-p11-12.png`. In print, hide that line and
let the measure run to the page.

**29 · polish · open · In the locker, the sheet counts inside the window of 100 rows.** After "Show 50 more"
three times the list says "101–200 of 1,046 shown" and offers "Show 50 earlier", which is clear. The sheet
over its first row says "RECORD 1 OF 100 IN THIS LIST". `fx/v-00.png`. Count the place in the whole list.

**30 · polish · open · Stepping through sources goes round without a sign.** "Next" on "SOURCE 22 OF 22"
shows source 1 (`p21-drawer-nav.mjs`). Stop at the end, or let the count flash when it wraps.

**31 · polish · open · The best match for "bite of 87" has "'87" as its second line.** `fx/p-00.png` (fourth
panel). Say what it is: "Timeline · 1987".

**32 · polish · in hand · "1046 records" and "All 1046" on `/method`,** where every other page prints 1,046.
`fx/o-00.png` (third panel). `ws/integ` commits `7a6e38b` and `4ae9b98` print every count one way.

**33 · polish · in hand · Names that open with a small letter stand as page titles:** "the Cassette Man" as
the heading, the trail and the tab's title of `/people/cassette-man`, and 27 such names in the list of people.
`fx/m-00.png` (first panel). `ws/integ` commits `64334bc` and `7539b07`.

### Notes, not findings

- **Back after a quick tap holds.** For a while I believed that Back returned to the top of a chapter when a
  link was tapped within a second of scrolling. My test was at fault: it tapped while the page was still
  gliding, which stops the glide and follows nothing, on this site as on any, and then stepped back out of the
  chapter. With the link really followed, Back returned to the line left in 30 runs of 30 (`p55-stale2.mjs`,
  `p58-quickthumb.mjs`, `p59-tap-in-glide.mjs`), and in every slow run before them.
- Two numbers open a record that carries the sentence only in part. `/theory/vanny` 11, "its security guard is
  Vanessa", opens interview notes for the post of Chief Security Officer. `/theory/killer` 31, "…is his son
  Michael, rotting", opens a record of a man who decays as he walks and names nobody; the name is the model's,
  argued in the chapter the sentence points to.
- Seen once and not again: after the gallery's viewer closed, the page stood 46px higher than before.
- "Enlarge image" adds only a tenth to a wide strip on an upright phone (356 to 390px). Pinching works, and so
  does turning the phone.
- `/dev/blocks` and the other `/dev` pages are live, as `NOTES.md` says they are meant to be.
- Content, and decided already: the longest paragraph on the phone in the ten chapters is in chapter 1 (1.17
  screens); the others stay under 0.8. The beats say "most likely" fourteen times; it is consistent and it is
  the method.
- The sheet's counter reads "SOURCE n OF m" from a number, "RECORD n OF m IN THIS LIST" from a list, and "… FOR
  THIS BEAT" from a beat. Each is true of where it was opened.
- For a record from a game, the link by which the wording was checked is on the record's own page and not in
  the sheet. Scott's statements show their "ORIGINAL" link in the sheet.

## 3. The ten statements checked

Each was opened from the page alone, on the phone: the number, then the sheet. Every sheet named the game or
the post, the kind of source, the exact place in it, how directly it says it, and its in-universe time.

| | Chapter | The statement in the text | The record it opened | Carries it? |
|---|---|---|---|---|
| 1 | 1 `thesis`, 5 | "The friend of the paragraph, credited as the Cassette Man" | `ffps-credits-cassette-man`: Pizzeria Simulator, end credits: "Dave Steele - Cassette Man" | Yes |
| 2 | 2 `killer`, 35 | Scott called the sound "an unintended side effect of me slowing down the end of the line reading" | `scott-2017-michael-voice-not-robotic`: Reddit comment by u/animdude, 2017-11-06, with the link to it; the words are there | Yes |
| 3 | 6 `afton-house`, 11 | The Extras map "is signed 'Copyright (c) Afton Robotics LLC', and one of its rooms is labelled 'Private'" | `sl-extras-map-entertainment-and-rental`: Sister Location, Extras menu, map; both phrases quoted, the image and its source shown | Yes |
| 4 | 9 `bite`, 11 | Large quotation: "Hey guys, I think the little man said he wants to give Fredbear a big kiss!" | `fnaf4-give-fredbear-a-kiss`: FNaF4, the minigame after Night 5; the same words | Yes |
| 5 | 13 `november-1987`, 16 | "The place is closed. A spare yellow suit has been used" | `fnaf2-call6-yellow-suit`: FNaF2, Night 6 phone call: "Someone used one of the suits. We had a spare in the back, a yellow one." | Yes |
| 6 | 22 `ucn`, 33 | "Scott called it the face of 'The one you should not have killed'" | `scott-2019-ucn-child-face-jason`: Reddit post, 2019-09-29, linked: "My little boy, Jason, is the face of 'The one you should not have killed' in UCN." | Yes; the note adds that this names a photograph, not the child in the game |
| 7 | 26 `vanny`, 25 | "A cast list that gives the two parts to two performers fits it (a fan wiki's account)" | `security-breach-credits-vanessa-vanny-two-parts`: "Heather Masters - Vanessa/Glamrock Chica … Marta Svetek - Gregory/Vanny/Roxanne" | Yes; the note says it was read from the wiki's transcription, as the tag in the text says |
| 8 | 29 `mimic`, 17 | Large quotation: "it's been trapped down here for a really long time. The M.X.E.S. security program was designed to keep it hidden" | `ruin-gregory-mxes-explanation`: RUIN, Roxy-Talky in the elevator, Standard ending; the same words | Yes |
| 9 | 34 `games`, 4 | Large quotation: "With three, I wasn't completely happy with the jump scares, so I worked on four. With four, I wasn't completely happy with the storyline, so I made Sister Location." | `scott-2018-interview-each-game-fixed-the-last`: Dawko's interview, 2018-08-08, about 60:04, with a link to that minute | Yes |
| 10 | 35 `open`, 3 | "In 2017 he wrote: 'I've done one actual retcon in the series (although I'm not going to say where it was).'" | `scott-2017-one-retcon`: Reddit post "The retcon issue", 2017-09-04, linked; the same words | Yes |

Six more were opened and all carry their sentence (`killer` 3, `november-1987` 10 and 29, `ucn` 13, `vanny` 20,
`afton-house` 28; `text/trust.json`). Then the whole text was checked: of the **482 quoted phrases in the 35
chapters that are followed by a number, 482 are in the record that number opens** (476 in its quotation, 4 in
its summary or title, 2 in its note or place; against records chosen at random, none; `quotecheck.py`). The
two looser fits are in the notes above. What a reader meets on the way is finding 1.

## 4. What works well

So that a fix does not break it.

- **The way in.** The home page's first screen on both screens: a headline, one paragraph, three numbered
  steps. "Read the story" lands on the story's heading. A bar says "06 of 20" while the beats are read. The
  last beat is followed by "Begin with chapter 1". After half a chapter, the home page and the cover offer
  "Continue reading: Chapter 6", and it returns to the paragraph.
- **The head of a chapter.** The question, the model's answer, how sure it is in words, and "7 min read · 22
  records cited · 4 push back".
- **The parts of a chapter on a phone.** Tables become labelled cards and none runs off the screen. The boxes
  for the model's reading, a full alternative, and what cannot be excluded are told apart at a glance. Large
  quotations carry their source. The longest paragraph but one is under a screen.
- **Numbers and the sheet.** A tap opens the record over the page and the page does not move. Back closes it.
  Back from the record's own page returns with the sheet open. Focus goes back to the number. A drag down
  closes the sheet, and scrolling inside it does not move the page. Arrows step through a chapter's sources.
- **Dates.** A dotted date opens "why this date", with the record it rests on.
- **Finding the way.** The chapter bar and its contents sheet with the sections; arrows 44px wide; every
  anchor I followed landed clear of the pinned bars. Every filter, search, open event, chosen view and setting
  that I set survived Back and a reload.
- **Search.** Its ranking, and the fan's words it does know: "purple guy", "bite of 87", "vanny",
  "glitchtrap", "shadow bonnie", "mci", "tape girl", "rwqfsfasxc" each reach the right page.
- **At the desk.** The rail follows the reader and lands a heading 23px under the header. A number shows its
  record on hover. With the keyboard alone: a skip link, a ring that is always visible, menus that open with
  Enter, move with the arrows and give focus back on Escape, search on Ctrl+K and on "/".
- **The web of ties.** No label lies over another; a line gives the tie in words with its records; the list
  under it says the same.
- **Print.** No header, rail or footer; the sources are open; the address of each image is printed; the night
  theme prints dark on white.
- **Reading comfort.** Phone: 17.2px Literata on a 29px line, about 39 characters to a line. Desk: 19px, about
  59. Tablet: 18.75px, about 59. Large on the phone: 19.2px, about 35.
- **Trust.** Every quoted phrase is in its record, and every record says where it comes from.
- **The text.** No stray markup anywhere in the chapters, the records or the other pages. The beats read as a
  story and say where they guess. Chapter 22 is the best of the ten.
- **Elsewhere.** The gallery and its viewer; the pages for a missing address, with the search already filled
  in; the essays.

## Appendix: where things are

- Scripts: `lib.mjs` (helpers), `p01` to `p68` (phone), `d01` to `d10` (desk), `q01` to `q04` (crawls),
  `textcheck.py`, `quotecheck.py`, `rawids.py`, `grid.py`, `sheet.py`. The ones that matter most to a finding
  are named with it. `p60-recheck.mjs` runs the major findings again in one go.
- Text taken from the browser: `text/` (the 35 chapters as text and markup, all record pages in
  `all-records.json`, the other pages, the crawls).
- Pictures: `fx/a-00.png` to `fx/w-00.png` are the composites cited above; `shots/` holds the single
  screenshots; `print/` the three PDFs and their pages as pictures.
- Running notes as I read: `notes.md`.
