# Fazbear Canon Archive: desktop, keyboard and accessibility review

Reviewer: independent (not on the redesign team). Build under test: `http://127.0.0.1:5198/` (the production
build of `integ` at commit `d4c0736`, built at 02:29 and unchanged throughout). Read-only: no code was
changed and no server was started. Engine: Chromium 153 (headless) through Playwright, with axe-core for
WCAG 2.1 A and AA plus best practices.

The source tree moved on while I worked: it stood at `4360279` when I finished. Every commit since the
build is under `src/data/` (31 files, the people data most of all); no component, style or page file has
changed, so the file names and line numbers given here still hold. Everything reported was observed in the
served build. Counts that come from data (minor people, date pills, records) may differ in the next build,
and finding 15 appears to be answered in source already.

All evidence paths below are relative to
`<session-folder>/ui/review/desktop/`.
Scripts are the `*.mjs` files there, logs the `*.log` and `*.json` files, screenshots are under `shots/`.
Source paths are relative to `~/src/fnaf-canon-wt/integ/src/`.

**Assumptions I made, since I could not ask**

- 200% and 400% zoom of a 1280px window were tested as 640×400 and 320×256 CSS-pixel viewports at device
  pixel ratios 2 and 4. Browser default font sizes of 20px and 24px were tested with Blink's
  `defaultFontSize` setting.
- `rel="noreferrer"` on an external link was accepted as covering `noopener` (the HTML standard says it does).
- The truth of the lore was not reviewed. Machine-made names of minor people are reported as broken text,
  not as lore.
- A finding is listed only if it happened in two separate runs. Where a result depends on timing or load,
  the conditions are given.
- Phone widths are the other reviewer's. I report a phone-width result only where zoom or a larger default
  font brings a desktop reader down to that width.

---

## 1. Verdict

1. The foundations are sound. 1,312 route loads gave no console error, 583 routes are free of WCAG axe
   violations in both themes, nothing overflows sideways at any of 18 widths at the default text size, deep
   links, reload and scroll restoration work, and a chapter at 1280 to 1920px is a pleasure to read.
2. It is not yet safe at every desktop and tablet width. From 900 to 990px and from 1090 to 1200px the
   navigation is drawn over the search box, and from 960 to 1120px the home page's list of eras collapses
   into a column one letter wide.
3. A keyboard user can reach almost everything but is often dropped. Jump links, Back, closing or nesting
   overlays and removing filters leave focus at the top of the page or on nothing (findings 4 to 7).
4. The interface is not always truthful. The People search loses letters typed quickly, the search palette
   finds nothing for the curly apostrophes the site itself prints, "Why this date?" explanations are cut
   after five lines, and one amber glyph stands for four scales, sometimes two of them in one row.
5. **The three things most in the way:** (1) the header and home-page layout breaks between 900 and 1200px
   (findings 1, 2 and 9); (2) focus management after jump links, Back and overlays (findings 4 to 7);
   (3) lost and cut content: People-search keystrokes, apostrophes in search, clamped date explanations
   (findings 3, 8 and 10). Print (12) and the firmness vocabulary (14) come next.

Counts: **2 blockers, 13 major, 27 minor, 11 polish** (53 findings).

---

## 2. Findings

Severity: `blocker` something does not work or a user cannot proceed; `major` a WCAG A/AA failure, lost or
trapped focus, lost state, a dead end, or something a reader is likely to misread; `minor` friction or
inconsistency; `polish`.

### Blockers

#### 1. The navigation is drawn over the search box at 900–990px and 1090–1200px
`blocker` · every page (the shell) · 900–990 and 1090–1200 CSS px · both themes, default text size

- **Steps.** Open any page in a window 1112px wide (an iPad Pro 10.5 in landscape; an iPad Air at 1180px,
  an iPad Pro 11 at 1194px and a 1366px laptop at 125% zoom, 1093px, are in the same band). Click the left
  half of the search box.
- **What happened.** The last navigation items sit on top of the search trigger. "Method" overlaps it by 73px
  at 900, falling to 8px at 990, and by 77px from 1090 to 1120, falling to 4px at 1200. "Essays" overlaps as
  well at 900–910 and 1090–1120. From 900 to 950 and from 1090 to 1110 the centre of the search box is
  covered. A click on the search box opens `/method` instead of search across its left 70% at 915px, its
  left half at 945 and 1100px, and its left third at 960 and 1112px; at 1180px every click reaches search
  although 24px still overlap. 1000–1080 and 1210 upward are clean; at 890 and below the menu button takes
  over and is clean.
- **Why.** Between 900 and 1080 the header "tightens" (the brand subtitle and the `Ctrl K` hint are hidden)
  and only just fits from 1000. At 1090 the subtitle and the hint come back, about 196px together, although
  the full header needs 1210px. The 10px-step table is in section 3.3.
- **What should happen.** No two header controls overlap at any width; every control receives its own clicks.
- **Evidence.** `header-16-880-1220.log`; `shots/header/montage-normal-a.png`, `montage-normal-b.png`;
  one strip per width in `shots/header/normal-16-<width>.png`; click test `header-click.mjs`.
- **Fix.** `styles/shell.css` and `components/shell/Header.tsx`. (a) Keep the tightened header up to 1209px
  instead of 1080px. (b) From 900 to 999px either keep the menu button (move the navigation breakpoint to
  1000px) or reduce the search trigger to its icon. (c) Give `.site-nav` `min-width: 0` and `.site-tools`
  `flex: none`, so that a shortfall can never become an overlap. (d) Write these breakpoints in `em`, or use
  a container query on `.site-header__inner`; that also repairs finding 9.

#### 2. On the home page the list of eras collapses to a one-letter column at 960–1120px
`blocker` · `/` · 960–1120 CSS px (worst 960–1040), and squeezed again at 660–740 · both themes

- **Steps.** Open `/` at 1024×768 and scroll to "Eight eras, one line of events".
- **What happened.** Each row is a grid of number, name and summary, and date pill. The pill does not wrap
  (437px in row 3, "before the 1987 restaurant; a June 26 between 1980 and 1986"; 381px in row 5; 360px in
  row 6), so the summary gets whatever is left: 4px at 960, 22px at 980, 40px at 1000, 60px at 1020, 80px at
  1040, 100px at 1060, 120px at 1080, 140px at 1100, 160px at 1120. At 960 row 3 is 7,980px tall with one
  letter on each line and the page grows from 11,173px (at 900) to 22,200px. From 660 to 740 the same column
  is 96 to 169px wide.
- **What should happen.** The summary keeps a readable width (30 characters or more) at every size; the date
  moves to its own line or wraps.
- **Evidence.** `shots/home-eras/960.png`, `1024.png`, `1100.png`; `squeeze-16.log` (first block);
  measurements by `eras.mjs`.
- **Fix.** `pages/home/home.css` line 63: `.era-row { grid-template-columns: 2.25rem minmax(0, 1fr) auto }`
  lets the `auto` column take the pill's full unwrapped width. Use
  `2.25rem minmax(0, 1fr) fit-content(15rem)` and let the label wrap (`.era-row .date__label
  { white-space: normal }`), or apply the stacked layout that already exists for 640px and below (pill under
  the summary, `grid-column: 2`) whenever the section is narrower than about 46rem. This is the handbook's
  own rule (section 12: "a flex or grid child that holds text or chips needs `min-width: 0`").

### Major

#### 3. The People search loses letters when typed at normal speed on a slower machine
`major` · `/people` · any width · both themes

- **Steps.** Open `/people`, focus the "Find a person" field, type `golden freddy` at a brisk pace.
- **What happened.** Letters vanish from the field while typing: "springtrap" became "spingtrap", "golden
  freddy" became "golde freddy", "william afton" became "wiliam afton", and the list filtered on the
  damaged text. With the processor slowed four times (a mid-range laptop) 4 of 4 test phrases were damaged
  at 60 and at 90 ms a key, 1 of 4 at 120 ms, none at 180 ms. Unthrottled, 1 of 4 was damaged at 30 ms a
  key; an earlier run on the busy host lost letters at 15 to 60 ms. The Evidence search, given the same
  typing in the same runs, never lost a letter.
- **Why.** `pages/people/urlState.ts`, `useUrlText`: the field's value is written to the URL, the router
  reports the URL back later as a low-priority update, and the effect treats that late echo of an older
  keystroke as a change made elsewhere and calls `setText(inUrl)`, overwriting what has been typed since.
- **What should happen.** The field shows exactly what was typed.
- **Evidence.** `typing2.log` (second run), `typing.mjs` (first run).
- **Fix.** Remember the values this field has sent (as the evidence explorer's `sent` list does) and ignore
  a URL value that is one of them; or accept URL-to-field updates only on a `POP` navigation. Then use the
  same hook wherever a text field is mirrored in the URL.

#### 4. Jump links scroll the page but leave focus behind
`major` (WCAG 2.4.3 Focus Order) · `/theory`, `/people`, `/people/:id`, `/places`, `/places/:id`, `/gallery`, home and chapters linking to `/theory#…` · all widths

- **Steps.** On `/theory` Tab to "Read the story first" (a link to `#storyline`) and press Enter; then press
  Tab once.
- **What happened.** The page scrolls to the storyline (scrollY 1968) but focus stays on the link, now far
  above the screen. The next Tab moves to the following link at the top and the view jumps back (to scrollY
  371). The same on a person's contents strip ("Ties": 1954 then back to 332) and the gallery's game links
  (2019 then back to 0). 626 such links were found: 41 to `/theory#…`, 9 on `/people`, 447 on person pages,
  9 on `/places`, 103 on place pages, 17 on `/gallery`. Arriving from another page (the home page's "Read
  the story") the page scrolls to the storyline with focus on `<main>`, and the first Tab jumps to the top
  in the same way.
- **What should happen.** The target receives focus, as it already does in the essays (`/box`, `/community`,
  `/author`, `/method`) and for the timeline's era links, where the next Tab continues from the section.
- **Evidence.** `recheck.mjs` output, lines "(a)"; `anchors-kb.mjs`.
- **Fix.** `components/shell/ScrollManager.tsx`, `toAnchor`: once the element exists, give it
  `tabindex="-1"` if it is not focusable and call `el.focus({ preventScroll: true })`. One change covers
  every page.

#### 5. Back restores the scroll position but not focus
`major` (WCAG 2.4.3) · every page reached by Back or Forward · all widths

- **Steps.** On `/theory` Tab to chapter 18 in the contents (scrollY 7380), press Enter, then go Back. Press
  Tab.
- **What happened.** The page returns to 7380 correctly, but focus is on `<main>`. The first Tab goes to the
  first link in the page and the view jumps to the top (scrollY 371); the reader's place is lost. The same
  on `/people` (1854 to 0) and every other page tried.
- **Also.** After Back from a full record page the drawer the reader left is open again, as it should be;
  but Escape now leaves focus on `<main>` and not on the citation, so the next Tab starts from the top of
  the chapter rail. The handbook (section 9, point 4) promises that closing "returns focus to the marker".
- **What should happen.** After Back or Forward, focus is on the link that was followed, or on the nearest
  heading, without scrolling.
- **Evidence.** `recheck.mjs` line "(e)"; `c2.log` part 2 ("focus main.site-main" on all ten pages);
  `backfocus.mjs`; `shots/b1/09-after-back.png`, `10-after-back-escape.png`.
- **Fix.** In `ScrollManager`, when leaving an entry store a way to find the focused element (its `href`,
  or an id) beside the scroll position, and on `POP` focus it with `preventScroll`. For the drawer, keep
  the opener's selector in `history.state.drawer` so that `useModalDialog` can return focus after a reload
  or a Back.

#### 6. An image opened from inside the evidence drawer: Escape closes both, and the arrow keys page the drawer underneath
`major` (lost state, lost focus) · any record with a figure, opened in the drawer · all widths

- **Steps.** Open `/evidence?game=fnaf4&img=1`. Enter on the first row (the drawer opens, with its pager).
  Tab to the figure and press Enter (the image viewer opens over the drawer). Press Escape. Repeat, and press
  ArrowRight instead.
- **What happened.** Escape closes the viewer and the drawer together. ArrowRight is taken by the drawer
  below: it pages to the next record, the viewer is destroyed and focus falls to `<body>`, with a modal
  dialog still open. Both happened in both runs.
- **Why.** `components/hooks.ts`, `useModalDialog`: the drawer's `onCancel` also receives the `cancel` event
  that React bubbles up from the viewer's dialog. `components/EvidenceDrawer.tsx`: the drawer's `onKeyDown`
  pages on ArrowLeft and ArrowRight whatever the event's target.
- **What should happen.** Escape closes the top layer only; keys pressed in the viewer stay in the viewer.
- **Evidence.** `nested.mjs` (two runs), `shots/nested/run1-after-arrow.png`, `run2-after-arrow.png`,
  `shots/b6/l2-lightbox-over-drawer-after-arrow.png`.
- **Fix.** In `useModalDialog`, `if (e.target !== e.currentTarget) return;` at the top of the cancel and
  close handlers. In the drawer's key handler, return unless `e.target.closest("dialog") === e.currentTarget`.

#### 7. Focus is dropped to `<body>` in four places, and the settings panel does not close when focus leaves it
`major` (WCAG 2.4.3) · header, `/evidence`, the drawer, the gallery viewer · all widths

- **a. Reading settings.** Enter on "AA", Tab into the panel, Escape: the panel closes and
  `document.activeElement` is `<body>`; the next Tab starts from the top of the page. Tabbing out of the open
  panel leaves it open over the content (still open twelve Tabs later).
  Fix: `components/shell/Header.tsx`: on Escape focus the "AA" button; close on `focusout` when the new
  target is outside the panel.
- **b. Evidence filters.** Enter on an applied-filter chip ("Remove filter: Source …"), or on "Clear all":
  the control disappears and focus goes to `<body>`. Fix: `pages/evidence/explorerParts.tsx`: move focus to
  the next chip, or to the results heading or the status line when none is left.
- **c. Paging the drawer with focus inside the record.** With focus on a link inside `.drawer__body`, press
  ArrowRight: the body is rebuilt for the next record (it is keyed by the record's id), the focused link is
  gone, focus is `<body>` and further arrows do nothing until Tab is pressed. Fix:
  `components/EvidenceDrawer.tsx`: after paging, focus the drawer's heading or keep focus on the pager.
- **d. Paging the gallery viewer with focus on a record link in its caption.** The caption is replaced and
  focus goes to `<body>`. The arrows go on working, and with focus on Close or on the pager it stays put.
  Fix: the viewer in `components/Figure.tsx`: after paging, focus the "Next image" button or the dialog.
- **Evidence.** `recheck.mjs` lines "(c)" and "(d)"; `lb.mjs` and `lb2.mjs` (two runs each); `b3.log`,
  `b6.log`; `shots/b6/s1-settings.png`, `shots/b3/06-chips.png`.

#### 8. "Why this date?" explanations are cut off after five lines and cannot be read in full anywhere
`major` (content is cut; a reader takes a partial reason for the whole) · every date pill: `/timeline`, `/`, `/places`, people and place pages · all widths

- **Steps.** On `/timeline` hover, focus or click the pill "1979, most likely 7 September".
- **What happened.** The popover shows the first five lines of the reasoning and ends in an ellipsis. The
  full text is 701 characters; about 250 are shown. There is no "more", the popover does not scroll, and the
  text appears nowhere else on the page even with every row expanded. On `/timeline` 31 of 54 pills are cut
  (their text runs to between 6 and 11 lines), on `/places` 14 of 35, on the home page 6 of 14, on William
  Afton's page 8 of 16. A screen reader gets the whole text; a sighted reader does not.
- **Why.** `styles/richtext.css` line 149: `.pop__text { -webkit-line-clamp: 5 }`. The clamp suits a
  citation preview, where the drawer holds the full record. `DatePill` (`components/RichText.tsx` line 226)
  puts its `basis` into the same element, and for a date there is no second place.
- **What should happen.** The whole reason can be read: these sentences are the archive's argument for where
  an undated event sits.
- **Evidence.** `popclamp.mjs`, `popclamp2.mjs` (two runs); `shots/misc/victim-1440-expanded.png` shows a cut
  popover ("…has not been checked.…").
- **Fix.** `.pop--date .pop__text { display: block; -webkit-line-clamp: none; }` with
  `max-height: min(60vh, 22rem); overflow-y: auto` on the popover; or print the basis in the expanded
  timeline row and on the record page and keep the popover as the short form.

#### 9. With a larger browser default font the header breaks over far wider ranges and list rows collapse
`major` (the intent of WCAG 1.4.4 Resize Text; readers who set a large default font are the ones who need it) · the shell, `/people`, `/places`, person pages · browser default font 20px ("Large" in Chrome) and 24px ("Very large")

- **Steps.** Chrome, Settings, Appearance, Font size "Large" (20px). Open any page at 1280px wide.
- **What happened at 20px.** The navigation bar still appears at 900px, because breakpoints are written in
  `px` while every size is in `rem`. Navigation and search overlap from 900 to 1490px, and the centre of the
  search box is covered at almost every width from 900 to 1370px (at 1280px "Essays" lies over it by 115px
  and "Method" by 96px). The page scrolls sideways at 900–980 and 1090–1130. At 360–430px the header is
  436px wide and the menu button sits at x 381–436, outside the window.
- **What happened at 24px.** The page scrolls sideways at 320–340, 360–500 and 900–1350 (a 1,182px page in a
  1,024px window, 1,353px in 1,280px), and the header overlaps from 900 to 1770px.
- **List rows.** At 1024px wide with 20px, the status text of every row on `/people` and `/places` is 97px
  wide, about 8 characters a line; with 24px it has no width at all. On William Afton's page at 24px the
  notes under each tie are 15px wide and the page is 63,914px tall instead of 13,831px.
- **Note.** The site's own "Large" text setting does not cause any of this; it only scales reading text
  (finding 36). Browser zoom to 200% and 400% is clean (section 3.5).
- **Evidence.** `header-20.log`, `header-24.log`, `shots/header/montage-20px.png`, `montage-24px.png`,
  `root20.log`, `root24.log`, `shots/root24/places/1024.png`.
- **Fix.** Write the layout breakpoints in `em` (`56.25em` for 900px, and so on), so that a reader at 20px
  gets at 1,280px the layout that fits at 1,024px; give `.ppl-row__what` and `.ppl-tie__main` `min-width: 0`
  and a minimum track width; add a 20px run to the QA crawl.

#### 10. Search finds nothing when the query contains a typographic apostrophe
`major` (a reader concludes the archive has no such entry) · search palette · all widths

- **Steps.** Ctrl+K, type `Bite of ’87` (with the curly apostrophe that the site prints in its own titles,
  that phones type by default, and that arrives with any text copied from a page).
- **What happened.** "Nothing matches “Bite of ’87”." The same words with a straight apostrophe give 6
  results. "Fredbear’s Family Diner": 0 against 4. "’87": 0 against 7. Without any apostrophe, "fredbears"
  finds the diner.
- **What should happen.** The two apostrophes are the same character to a reader.
- **Evidence.** `recheck.mjs` lines "(f)"; `palette-results.json`.
- **Fix.** `components/shell/SearchPalette.tsx`: pass both the index and the query through one normaliser
  that maps `’ ‘ ʼ` to `'` and `“ ”` to `"` (and drops diacritics), before tokenising.

#### 11. The search palette announces nothing, and its empty state breaks the listbox
`major` (WCAG 4.1.3 Status Messages; axe `aria-required-children`, WCAG 1.3.1, the only WCAG rule axe failed anywhere on the site) · search palette · all widths · both themes

- **Steps.** With a screen reader, Ctrl+K and type `henry`.
- **What happened.** There is no live region or `role="status"` anywhere in the dialog, so neither the number
  of results nor "Nothing matches" is announced; the reader hears only their own typing. In the empty state
  the `role="listbox"` contains a paragraph and no option, which axe reports. The group headings ("Theory
  chapters", "People", …) are `role="presentation"`, so the grouping is not conveyed either.
- **What works.** `role="combobox"`, `aria-expanded`, `aria-controls` and `aria-activedescendant` are right,
  and the active option is announced as the arrows move.
- **Evidence.** `axe-open-night.log` and `axe-open-paper.log`, line "palette: no results (henry)";
  `recheck.mjs` ("live regions: []"); `shots/b2/q-henry.png`.
- **Fix.** `SearchPalette.tsx`: add a visually hidden `<p role="status">` that says "12 results" or "Nothing
  matches henry" (update it after a short delay, so that it is not spoken on every key). Render the empty
  message outside the listbox and leave the listbox out while there are no options. Wrap each group in
  `role="group"` with `aria-labelledby` pointing at its heading.

#### 12. Printing from the default (night) theme gives pale text, the site's chrome, and citation numbers that point at a closed list
`major` · print of any page; tested on `/theory/bite`, `/theory`, a record, a person, `/timeline` · night theme (the default)

- **Steps.** Open `/theory/bite` and print, or save as PDF, with the browser's defaults (backgrounds off).
- **What happened.** The night theme's light text is printed on white. In its PDF Chrome darkens that text
  only as far as a mid grey: 73% of the characters in the chapter have a contrast below 4.5:1 (most between
  3.0:1 and 3.7:1). Where no such darkening is applied (the print-media rendering in
  `shots/print/night-theory_bite-nobg-p1.png`) the title and the answer are cream on white and close to
  invisible. The site's header (brand, search and menu icons), the chapter bar with its arrows, the pager and
  the footer are all printed. The "Sources"
  collapsible prints closed, so the superscript numbers in the text refer to a list that is not on paper.
  A chapter takes 9 pages and the cover 33. With "Background graphics" on, the page is a full sheet of dark
  ink. The paper theme prints with correct colours but has the same chrome and the same closed list.
- **What should happen.** A printout is black on white whatever theme is on screen, carries no navigation,
  and ends with the numbered sources.
- **Evidence.** `print/night-theory_bite.pdf`, `print/night-theory.pdf`, `print/paper-theory_bite.pdf`;
  `shots/print/night-theory_bite-nobg-p1.png`; `e-print.py` for the contrast count.
- **Fix.** `styles/base.css` line 239 holds the only print rule (it hides the grain). Add a print sheet:
  apply the paper theme's tokens under `@media print` whatever `data-theme` says; hide `.site-header`,
  `.site-footer`, `.chapter-bar`, `.chapter-rail`, `.reading-progress`, `.chapter-pager` and the skip link;
  show `details.collapsible > .collapsible__body` (or open "Sources" on `beforeprint`); print the address
  after external links; `break-inside: avoid` on figures, tables and callouts.

#### 13. The visible label is missing from the accessible name of source chips, source checkboxes and filter chips
`major` (WCAG 2.5.3 Label in Name, level A) · people, places, family, the web; `/evidence` · all widths

- **What happened.**
  - A source chip in its short form shows "SL", "FFPS" or "Pit"; its `aria-label` is the record's title, for
    example "Intro: a board member questions 'Mr. Afton' (Five Nights at Freddy's: Sister Location,
    stated)". The letters on screen are not in the name, so "click SL" in voice control finds nothing.
    263 chips on the pages sampled. To the eye, a row of chips reads "FFPS FFPS FFPS" or "Pit Pit Pit": three
    different records that look the same until each is hovered.
  - In the evidence explorer a source checkbox shows "FNaF4"; its name is "Five Nights at Freddy's 4, 54
    records". The applied chip shows "SOURCE FNaF4"; its name is "Remove filter: Source Five Nights at
    Freddy's 4".
- **What should happen.** The accessible name begins with the text on screen.
- **Evidence.** `names.mjs`; `ties.mjs` output; `shots/misc/person-ties.png`.
- **Fix.** `components/RichText.tsx` (the source chip): begin the `aria-label` with the code, "SL: Intro: a
  board member questions 'Mr. Afton' (Sister Location, stated)". `pages/evidence/explorerParts.tsx`:
  "FNaF4, Five Nights at Freddy's 4, 54 records" and "Remove filter: Source FNaF4". For the eye, give the short chip a number as well ("FFPS 1", "FFPS 2"), or
  show the title when the row has room.

#### 14. One amber glyph stands for four scales, and two of them meet in one row without words
`major` (a reader is likely to misread how firm a claim is) · person pages most of all; also story beats, the chapter rail, "Read alongside" · all widths

- **What happened.** The disc, half disc and ring mean Stated, Shown, Implied for a record; Canon, Strong
  inference, Theory for a tie or event; High, Medium, Low confidence for a chapter; and printed, derived,
  estimated for a date. The handbook (section 8) intends this and says the words tell them apart. The words
  are missing for the eye in these places:
  - **Person pages, Identity and Ties.** A tie reads "○ Parent of The Crying Child THEORY", and at the right
    of the same row stand six chips "◐ FFPS ● FFPS ● FFPS ● FNaF4 ● FNaF4 ◐ FNaF2". Same colour, same
    shapes, a different scale: the ring is the tie's status, the discs are each record's certainty. A row
    marked Theory appears to be backed by solid discs. The certainty word exists only in each chip's
    `aria-label` and hover preview, and the page has no key for it (its one key reads "1 canon · 2 strong ·
    4 theory").
  - **Story beats** (`/theory`, `/`). A date pill with its own disc, half disc or ring stands beside the
    beat's confidence mark.
  - **Chapter rail.** The confidence glyph is 8.6px, grey rather than amber, with the word in a `title`
    only: it is neither on screen nor in the link's accessible name ("19 Thirty years later"), and once the
    chapter has been read the slot shows a tick instead.
  - **"Read alongside".** Glyph alone; the word is there for screen readers only.
- **What should happen.** A reader learns the marks once and cannot take one scale for another.
- **Evidence.** `shots/misc/person-ties.png`, `shots/person/1440-night-people_william_afton-y700.png`,
  `vocab.log`, `railname.mjs` output. The full map is in section 4.
- **Fix.** Keep the one glyph family for firmness of *claims* and take the other two scales out of it where
  they share a row. (a) On source chips drop the glyph or replace it with a letter (S, Sh, I), and use the
  full `CertaintyMark` tag only on record cards. (b) Give date kinds a square or calendar-shaped mark of
  their own, or a neutral colour. (c) In the rail and in "Read alongside" print the short word ("High",
  "Med", "Low") or include it in the link's name. (d) Put `<FirmnessLegend>` on person, place and record
  pages, which rely on the marks and have no key (handbook: "show it where a page first relies on the
  marks").

#### 15. The 102 minor people are named by machine from their ids, and at least 25 of the names come out broken
`major` (visibly broken text in headings, titles, search results and chips) · `/people/:id` for people without a hand-written entry; the palette; chips on other pages

- **What happened.** "Mike Itp", "Phone Guy Itp", "Fnaf2 First Guard", "Fnaf3 Guard", "Vanessas Father
  Bill", "Oswalds Father", "Hw Mask Voice", "Hw2 Protagonist", "Pq Old Man", "Jrs Green Man", "Charles Sd",
  "Isolde Sd", "Nora Sd", "Tristan Sd", "Dale Hw", "Sl Technicians", "Previous Sl Employee", "Ffps
  Franchisee", "Nightmare Bb", "Phantom Bb", "Jj", "Xor", "Mr Hippo", "Jack O Bonnie" and "Jack O Chica"
  are page headings and document titles, and they appear in search (typing `mike` offers "Mike Itp" first)
  and on chips elsewhere. The other minor names happen to survive the same treatment ("Balloon Boy",
  "Ballora").
- **Why.** `data/store.ts`, `titleCase(id)` for people that have no entry of their own.
- **What should happen.** A person is shown under a name a reader would recognise ("Mike Schmidt (Into the
  Pit)", "Balloon Boy (nightmare)", "JJ", "XOR", "Mr. Hippo", "Jack-O-Bonnie"), or is not given a page.
- **Evidence.** `crawl.json` (titles of the 166 people routes), `palette-results.json`.
- **Status in source.** Since the build, `data/people.ts` has grown from 64 entries to 167 and now names
  these people ("Mike, of Into the Pit", "Nightmare BB"). I have not seen that in a build. The fallback in
  `store.ts` (lines 40, 48 and 57, for people and for places) is unchanged and will name any future
  entry-less id the same way.
- **Fix.** Confirm in the next build that no heading comes from the fallback. Then make the fallback safe:
  a test that fails when a person or place has no name of its own, or a neutral label ("Unnamed figure,
  Into the Pit") in place of the title-cased id.

### Minor

For minor and polish findings the steps are given only where they are more than "open the page", and the
fix line says what should happen.

#### 16. The home page's first screen makes the claim but offers nothing to do
`minor` · `/` · 1440×900 and 1366×768; only just better at 1920×1080 · both themes

- **What happened.** The first screen is a kicker, a headline of 31 words set on eight lines at 56px (y =
  148 to 605), a paragraph that ends at y = 892, and one exhibit that floats beside them with about 180px
  of empty space above it. The three cards that say what to do ("1 Read the story", "2 Then the full case",
  "3 Then check the evidence") begin at y = 956: below the fold on windows 900, 768 and 720px high, and on
  the bottom edge at 1080. Apart from the header there is nothing to act on in the first screen.
- **What should happen.** The first screen says what this is in two or three lines and shows the first
  step. The theory cover comes closer: a one-line title, the thesis, its confidence, and "Read the story
  first" at y = 841, which is on the first screen at 900 and 1080 high though not at 768 or 720.
- **Evidence.** `shots/home/1440-night-home-y0.png`, `shots/home1366/1366-night-home-y0.png`,
  `shots/home1920/1920-night-home-y0.png`.
- **Fix.** `pages/home/Home.tsx` and `home.css`: cut the headline to its first clause (three lines at most)
  and move the rest into the paragraph; place "Read the story" directly under the paragraph, within the
  first 600px; align the exhibit with the top of the headline.

#### 17. Date pills open on keyboard focus and put their record links into the Tab order
`minor` · every page with date pills (54 on `/timeline`, 35 on `/places`, 16 on William Afton's page, 14 on `/`) · keyboard

- **What happened.** Tabbing onto a pill opens its popover (`aria-expanded` becomes `true` on focus alone),
  and the three or four record links inside it are the next Tab stops; then the next pill does the same. A
  keyboard reader crossing the timeline passes through every date's sources and has a popover over the row
  below at each step. On William Afton's page the first pill is reached after 117 Tabs.
- **What should happen.** Focus alone shows nothing interactive. Enter or Space opens the popover (the pill
  is already a button) and Escape closes it.
- **Also in this component.** In the drawer and on a record page the pill's "Rests on" list names the very
  record being shown; an undated pill is announced as "…: undated date".
- **Evidence.** `recheck-h2.mjs` output; `shots/misc/datepill-focus-_timeline.png`.
- **Fix.** `components/RichText.tsx` `DatePill` with `components/popover.ts`: do not open on
  `:focus-visible` when the popover has focusable content. The citation preview may keep opening on focus,
  because it holds nothing focusable.

#### 18. Search results: the best match is often not first, and near misses find nothing
`minor` · search palette · all widths

- **Order.** Groups come in a fixed order (Theory chapters, People, Places, Timeline, Evidence records), so:
  `william afton` gives four chapters ("The five", "Hen and W.A.", "The child outside", "The night without
  end") before the person; `golden freddy` and `mimic` give chapters before the character of that name;
  `bite of 87` gives "The bite at the birthday party" first, the chapter that argues the 1983 bite is *not*
  the Bite of ’87, with "November 1987" second; `mike` gives "Mike Itp" before "Mike Schmidt".
- **Misses.** `henry` and `emily` give "Nothing matches … Try a name, a game, or a word from a quote", though
  the family tree's own address is `/family?tree=emily`; the archive calls him the Cassette Man and could
  say so. A typing slip (`sprngtrap`) gives nothing. A question typed whole (`who is the purple guy`) finds
  two of Scott's statements and no chapter.
- **Good.** `purple guy` puts the Purple Man first; `1983` gives the dating chapter, the bite chapter and
  timeline rows; a fragment of a record id (`fnaf2-take`, `take-cake`) finds the record.
- **Evidence.** `pal2.mjs` output, `palette-results.json`, `shots/b2/q-bite_of_87.png`, `q-henry.png`,
  `q-sprngtrap.png`.
- **Fix.** `SearchPalette.tsx`: a "Best match" group of up to three exact title or alias hits above the
  fixed groups; an alias table (henry, emily, charlie, evan, c.c., purple guy, bite of 87) whose hit says
  "The archive calls him the Cassette Man"; when nothing matches, retry with one or two edits allowed and
  with stop words removed.

#### 19. Back does not close the search palette, the image viewer or the sheets; it changes the page underneath
`minor` · palette, image viewer, menu sheet, chapter contents sheet, evidence filter sheet · all widths

- **Steps.** `/theory/bite`, then `/theory/killer`, Ctrl+K, Back.
- **What happened.** The address returns to `/theory/bite` and the page under the palette changes; the
  palette stays open on top. Only the evidence drawer is a history entry (open adds one, Back closes it,
  Forward reopens it, paging replaces it; that part is right). On a tablet, Back is the usual way to dismiss
  a sheet.
- **Evidence.** `recheck.mjs` line "(g)"; `c2.log` parts 3 and 4; `shots/b2/08-palette-over-drawer.png`.
- **Fix.** `components/hooks.ts` `useModalDialog`: close every open modal on a location change, or give the
  sheets the drawer's history entry.

#### 20. What Back undoes is not predictable from page to page, and `/community` forgets open rows
`minor` · `/timeline`, `/family`, `/community` · all widths

- **What happened.** Filters, toggles and expansions everywhere replace the history entry, as the handbook
  prescribes, so Back leaves the page. On the timeline, though, the Events and Locations tabs and the era
  links add entries (Back undoes them one at a time), while the family tree's tabs replace. On `/community`
  an opened row is written into the address as `#c-…`; opening a second replaces the first, so a reload or
  a copied link restores one open row out of two.
- **Everything else passed:** reload and a copied link restore the same view on `/evidence`, `/timeline`,
  `/people`, person pages, `/family`, `/graph`, `/places` and source pages; two quick changes both register
  on every page tried; old `/#/theory#bite` links arrive at `/#/theory/bite` (section 3.7).
- **Evidence.** `c1.log`, `c2.log`, `c3.mjs` output.
- **Fix.** One rule, written in the handbook: a change of view (tabs) adds an entry, a refinement replaces.
  Make the family tabs follow it. Keep the community page's open rows in a query list as the timeline does
  with `e=`.

#### 21. Tabs and segmented controls announce patterns whose keys they do not implement
`minor` · `/timeline` and `/family` (tabs); `/evidence` Rows/Cards and the reader settings (segmented) · keyboard and screen readers

- **What happened.** Tabs are `role="tab"` with `aria-selected`, but every tab is a Tab stop, the arrow keys
  do nothing and there is no `aria-controls`. Segmented controls are a `role="radiogroup"` of
  `role="radio"` buttons in which the arrow keys do nothing. A screen-reader user is told "tab, 1 of 2" or
  "radio button" and reaches for the arrows.
- **Evidence.** `recheck.mjs` line "(i)".
- **Fix.** `components/controls.tsx`: a roving `tabindex` with Arrow, Home and End for both, and
  `aria-controls` with a labelled `tabpanel`. Or the plainer and equally honest form: buttons with
  `aria-pressed` for the segmented control, links with `aria-current` for tabs that change the address.

#### 22. On a chapter, "Skip to content" lands in front of the chapter list
`minor` · `/theory/:id` · 1080px and wider · keyboard

- **What happened.** The skip link moves focus to `<main>`, whose first content is the rail: the link to the
  cover, ten part toggles and the open part's chapters. It takes 17 Tabs to reach the article on
  `/theory/ucn` and 14 on `/theory/thesis`, on every chapter. Below 1080px, where the rail becomes the
  chapter bar, it takes 3 or 4.
- **Also in the rail.** The number beside each part ("2", "3", "5") is explained by nothing on screen. On a
  window 600px high the rail scrolls inside itself and does not bring the current chapter into view (seen on
  `/theory/open`).
- **Evidence.** `skip.mjs` output; `rail2.mjs` output; `shots/f/1440-night-theory_ucn-top.png`.
- **Fix.** `pages/theory/TheoryChapter.tsx`: put the article before the rail in the document (the grid can
  keep the rail on the left), or point the skip link at the article and offer a second one for the chapter
  list.

#### 23. The evidence drawer mislabels lists, starts focus on "Previous record", and leaves a three-line window at 400% zoom
`minor` · the drawer · all widths; the last point at 320×256

- **What happened.** Opened from the evidence list the bar reads "RECORD 1 OF 50 CITED HERE"; from a row of
  chips on a person's page "RECORD 1 OF 7 CITED HERE". These are results or related records; nothing is
  "cited here". In a paged drawer the first focus is "Previous record", not Close or the heading (React's
  `autoFocus` is not an attribute by the time `showModal()` picks the first focusable). With focus there,
  PageDown and the Down arrow do not scroll the record. At 320×256 (400% zoom) the fixed bar and foot leave 74px
  for a record 1,241px tall, three lines at a time; at 640×400, 229px.
- **Evidence.** `recheck.mjs` line "(k)"; `z400-drawer.mjs` output; `shots/z400/drawer2.png`;
  `shots/b3/09-drawer-paged.png`.
- **Fix.** `components/EvidenceDrawer.tsx`: take the label from the caller ("Result 1 of 50", "Record 1 of
  7"); on open, focus the record's heading (`tabindex="-1"`); under `@media (max-height: 30rem)` let the bar
  and foot scroll with the body.

#### 24. In the web, lines can be chosen only with the mouse, and Escape does not clear a choice
`minor` · `/graph` (and Escape on `/family`) · keyboard

- **What happened.** People in the diagram are focusable and can be chosen with Enter. The 157 lines are not
  focusable, so the evidence behind a tie cannot be opened from the diagram by keyboard. The list below the
  diagram gives every tie with its records, so nothing is out of reach, but the hint on screen ("Select a
  person to focus on their ties, a line for its evidence. Drag a disc to move it; double-click opens the
  person") speaks only to a mouse. In both the web and the family tree, Escape does not
  clear a chosen person or line (the family tree's lines are focusable, which is the better model).
- **Evidence.** `b5.mjs`, `b5b.mjs`; `shots/b5/g4-node-focus.png`, `g5-node-picked.png`, `f5-edge-focus.png`.
- **Fix.** The web's page in `pages/people/`: give lines the family tree's `role="button"` and `tabindex`,
  or reword the hint and point to the list; Escape clears the choice.

#### 25. "Record" means two things on the People pages, and several things have two or three names
`minor` · interface wording · all pages (table in section 4.2)

- **Record.** Everywhere it is one of the 1,044 evidence records. On a person's page it is also a person's
  entry: "7 other records", "THE RECORD THE OTHERS FOLD INTO", "All 8 records / This record only", and on
  the register "How firmly a record belongs" and "26 other records folded into them", beside a tab that
  says "Evidence 140".
- **Evidence.** The navigation says "Evidence" for the group and "Evidence locker" for the page (also its
  heading); kickers and the footer say "Evidence".
- **The theory.** "The Theory" in the navigation and the title, "The Unified Model" as the heading and in
  the rail, "the model" in the prose; "the story", "the storyline", "the short telling" and "beats" for the
  twenty-step account.
- **Source.** A game or medium (the Sources page); a citation ("Source 13: …" in a marker's name); a
  chapter's list of cited records ("Sources"); and where an image came from ("Image source").
- **Figures.** "EXHIBIT" on hero figures and on the home page, "FIG. 1" inside a chapter.
- **Consistent, and worth keeping:** "chapter" and "part" (never "section"), "cited" and "filed".
- **Evidence.** `vocab.log` (the "nouns" lists); `shots/person/1440-night-people_william_afton-y700.png`;
  the palette's own list of pages in `b2.log`.
- **Fix.** A short glossary in the handbook. On People pages call a person's entry an "entry". Choose
  between "The Theory" and "The Unified Model". Give "Source" one meaning in the interface (the game) and
  say "record" or "citation" for the others.

#### 26. The firmness scale has six names, and its keys are missing where the marks are used
`minor` · timeline, people, family, the web, home, person, place, source and record pages

- **Names for one scale.** "Support" (tooltips, "Support: Canon. Directly established…", and the timeline's
  filter group); "How firm an entry is" (the timeline's key); "Line style" (the legends of the family tree
  and the web); "Show ties rated" (the web's filter); "How firmly a record belongs" (the People key); "How
  firm is it" (the cover and Method). The middle value is "Strong inference" in most places and "Strong" on
  a person's events and identity key.
- **Keys.** The three-scale key is on `/theory` and `/method` only. Person, place, source and record pages
  and the home page use the marks without one. The key for kinds of date exists only inside the timeline's
  "Key" panel and on `/method`, while date pills appear on the home page, the cover, and people, place and
  record pages. "Italic: a descriptor, not a name the games print" is explained on People and Family only;
  italic names also appear in timeline filters, record chips and the web.
- **Evidence.** `vocab.log`; `shots/b4/03-key.png` (the timeline's key, which is the model to copy).
- **Fix.** One name in `components/labels.ts` (`SCALE_NAME`) used in every legend heading and filter; no
  "Strong" short form. Turn the timeline's "Key" into a shared component offered on every page that shows a
  mark or a date pill.

#### 27. Some meanings exist only in `title` tooltips
`minor` (a tooltip cannot be reached by touch or keyboard) · game codes, bare counts, definitions of the marks, the chapter rail

- **What happened.**
  - Game codes ("SL", "AR", "Pit", "World", "HW2", "SB", "UCN", "FFPS", "Mimic") are expanded only by a
    `title` (69 of them on `/evidence`, 16 on a person's page) or in a chip's hover preview. The one visible
    key is the Sources page itself.
  - Numbers standing alone: "24" on a person's chips is "24 records filed under both" in its `title`; "6"
    beside an era has hidden text for screen readers ("6 entries") and nothing for the eye; the counts
    beside the parts in the chapter rail have no explanation of any kind.
  - The definitions of the marks ("Support: Canon. Directly established by the cited records") and the
    kinds of tie behind a legend entry such as "Family, partners and work" ("parent, sibling, spouse,
    partner, colleague, employer") are tooltips.
  - The rail's confidence mark is a `title` and nothing else (finding 14).
  - 109 links read "Record" and nothing more; their purpose comes only from the caption beside them.
- **Evidence.** `titles.mjs` output; `vocab.log` (the "titles" lists); `names.mjs`.
- **Fix.** Write the game's name out where there is room and keep the code for tight rows; give each bare
  number its noun ("6 entries", "5 chapters"); put the definitions into the shared key (finding 26);
  "Record: <title>" as the accessible name of those links.

#### 28. Lines of text run to 100–157 characters, against the handbook's 66
`minor` · `/timeline`, source pages, person pages, `/evidence`, `/family`, record pages · 1024px and wider

- **What happened.** The handbook says "running text never exceeds `--measure`" (about 66 characters).
  Counted on full lines at 1440px: era summaries on the timeline (Literata 17px across 893px) hold 101 to
  113 characters, median 109, and the same at 1024 and 1920px. Record rows on a source page (Inter 13px
  across 925px) hold up to 157. Evidence rows on a person's page (13px across 841px) up to 135. Claims in
  the evidence explorer (13px across about 600px) 83 to 103. "About this tree" on `/family` (15px across
  702px) 96 to 102. Notes on a record page (15px across 667px) 97. For comparison, chapter prose and the
  essays hold a median of 68 (58 to 75), which is right.
- **Why.** `--measure` is 33 times the reading size (627px), a length and not a count of characters, so
  smaller type overruns it; and several of these blocks use the wide measure or none.
- **Evidence.** `linelen.mjs`, `linelen2.mjs`, `linelen3.mjs` output; `shots/misc/source-rows-1440.png`;
  `layout.log` (the `>85cpl` flags).
- **Fix.** `max-width: 70ch` on `.tl-era__sum`, `.evx-row__claim`, `.ev-row__claim`, `.fam-notes p` and the
  record page's callouts; use `ch` in place of the fixed token wherever text is not at reading size.

#### 29. Text columns are pinched just above the 900px breakpoint
`minor` · `/people`, `/places`, person pages, `/theory`, `/` · 900–940px (and 760–820px on the home page)

- **What happened.** Where the two-column page layout begins, some text gets a very narrow column: the
  status line of rows on `/people` and `/places` is 149 to 167px wide; date labels on `/places` 125 to
  162px; the "also" line in a person's identity tree 117 to 154px; the caption of the cover's figure 133px
  wide and 195px tall; the descriptions in the home page's three step cards 148 to 167px at 760–820px.
- **Evidence.** `squeeze-16.log`.
- **Fix.** Begin the two-column layouts at 60em, not 900px, or set `minmax(18rem, 1fr)` on the text track.

#### 30. In the timeline's Locations view the era columns are headed by bare numbers below 1290px
`minor` · `/timeline?view=locations` · narrower than 1290px

- **What happened.** Above 1290px each column is headed "01 The costume workshop". Below that the name's
  height is set to zero and the heading is "01" to "08" alone; each row then spells out its span in words,
  which helps, but nothing on screen says which era "05" is (a `title` does).
- **Evidence.** `shots/allroutes/timeline_view_locations/1024.png` and `0768.png`; `locnames.mjs`;
  `pages/timeline/timeline.css` line 291.
- **Fix.** Keep a shortened name ("Workshop", "1987") under the number, or list the eight eras once above
  the chart.

#### 31. Titles and headings that disagree, repeat, or are missing
`minor` · `/theory`, `/box`, `/theory/funtimes`, unknown-id pages, the failure page

- **What happened.** `/theory` is titled "The Theory" and headed "The Unified Model"; `/box` is titled "The
  Box" and headed "The locked box". Two pages are titled "Afton Robotics · Fazbear Canon Archive" (the
  chapter `/theory/funtimes` and the person). No title says what kind of page it is ("William Afton ·
  Fazbear Canon Archive" could be a person, a chapter or a record). An unknown chapter, person or place and
  the "This page did not load" page have no `h1` (axe best practice `page-has-heading-one`); an unknown
  record or source has one. Record titles run to 129 characters.
- **Evidence.** `crawl.json` (analysis by `analyze1.mjs`); `axe-open-night.log`, the "dead end" lines.
- **Fix.** `components/layout.tsx` `Page`: titles as "Name · Kind · Fazbear Canon Archive"; render the
  title of `Empty` as the `h1` when it is the whole page; give the cover and the Box one name each.

#### 32. A link with an unknown id opens the page as if nothing had been asked
`minor` · `/timeline?e=…`, `?era=…`, `/family?tree=…`, `?tie=…`, `/graph?focus=…`, `/theory#…`

- **What happened.** `/timeline?e=nope`, `/family?tree=nope`, `/graph?focus=nope` and `/theory#nope` show
  the default view with no word that the thing linked to is not there. A record id in capitals
  (`/evidence/FNAF2-take-cake-to-the-children`) is "Record not found", although `/Theory/bite` works.
- **Evidence.** `c2.log` part 1; `axe-open-night.log` (dead-end scenarios).
- **Fix.** A dismissible line ("That link pointed to an event this archive no longer has") and removal of
  the parameter; compare ids without regard to case.

#### 33. The record page prints the data's own words
`minor` · `/evidence/:id` (all 1,044) and the drawer

- **What happened.** Under "In-universe time" the pill is followed by the stored precision in brackets:
  "Past event depicted in a FNaF2 minigame (undated) (unknown)", "… (relative)", "… (approx)". The last
  breadcrumb is the raw id ("Evidence / FNaF2 / fnaf2-take-cake-to-the-children"), and the drawer's foot
  shows the id unlabelled. Scott's own statements have the source line "Scott Cawthon (own statements):
  Released 2014-08-08".
- **Evidence.** `rec.mjs` output; `shots/z400/drawer2.png` (the id at the foot).
- **Fix.** The record page in `pages/evidence/`: drop the bracketed precision (the pill's glyph and popover
  carry it) or map it through `DATE_KIND`; end the breadcrumb with the record's title; label the id ("Record
  id", as the facts list already does); no "Released" line for a source that is not a release.

#### 34. Chapter tables are all named "Table", have no captions, and scroll sideways without a hint
`minor` · 29 chapters with tables · all widths; the hint at narrow widths

- **What happened.** Every table sits in a focusable region labelled "Table". On the five chapters with more
  than one (`fnaf1-restaurant`, `salvage`, `canon-rules`, `timeline-math`, `open`) axe reports
  `landmark-unique`, and a screen-reader user's list of regions reads "Table, Table, Table, Table". No table
  has a caption. When the column is narrower than the table (a 559px table in 273px at 320 CSS px) the
  region scrolls sideways with nothing to show it; the handbook asks for "a visible hint".
- **Evidence.** `axe-closed-night-1440.json`; `f-anatomy.log` (the "tables" lines); `shots/z400/chapter-table.png`.
- **Fix.** `components/layout.tsx` `TableWrap`: take the label from a `caption` in the chapter's data, or
  from the nearest heading; render it as a visible `<caption>`; add an edge shadow while the region can
  scroll.

#### 35. Figures: one sentence is read three times, one image is enlarged past its size, and thumbnails lose half the picture
`minor` · 378 of 380 figures; `/evidence/fnaf1-custom-night-pink-slip`; `/people`, `/places`

- **What happened.** The caption is also the image's `alt` and is repeated in the button's label ("Enlarge
  image: …"), so a screen reader speaks one sentence up to three times. The JPG on
  `/evidence/fnaf1-custom-night-pink-slip` is 439×322 and is drawn at 717×526 (1.63 times, visibly soft).
  Thumbnails on `/people` and `/places` show about half of each image (a 94×62 box cut from 690×900) and
  have no `width` and `height` attributes. No image is broken and none lacks `alt`.
- **Evidence.** `crawl-images.json` (analysis by `analyze2.mjs`).
- **Fix.** `components/Figure.tsx`: `alt=""` where the caption follows, and label the button "Enlarge image"
  with `aria-describedby` on the caption; limit a photograph to its natural width, as is already done for
  pixel art.

#### 36. The text-size setting changes reading text by a little and leaves the smallest text as it is
`minor` · reader settings (Small, Medium, Large) · all pages

- **What happened.** "Large" multiplies the reading size by 1.12 and "Small" by 0.92: chapter prose is 17.5,
  19 or 21.3px, and callouts, timeline titles and era summaries follow. Nothing else moves: headings (50
  and 34px), the chapter's answer (24.8px), captions and the "What pushes back" list (13px), the rail, the
  header. On `/evidence` and on a person's page no text changes at all (titles 15px, claims 13px). So the
  text most in need of enlarging, the 13px rows and captions, is the text the setting cannot reach.
- **Also.** With markers hidden, citations in running text cannot be reached by keyboard. Chapters make up
  for it with their Sources list, as the menu says; data pages have no such list.
- **Evidence.** `textsize.mjs` output; `textlarge.log`; `shots/b6/s1-settings.png`; `styles/tokens.css`
  lines 202–203 (`--read-scale`).
- **Fix.** Scale the whole type ramp (or the root font size) with the setting, by about 0.9, 1 and 1.25;
  or rename the control "Reading text" so that it promises what it does.

#### 37. Nothing shows that a page is on its way
`minor` · every in-site link while the next page's code loads; navigation groups; the palette

- **What happened.** With the next page's code delayed by four seconds, a click changes nothing for four
  seconds: the old page stays, the navigation highlight does not move, there is no progress. A reader
  clicks again. (On a direct load the reader sees the header and "LOADING…", which is right.) The group
  buttons "Evidence", "People & places" and "Essays" show the current section by an underline alone, with
  no `aria-current`. If the palette's own code fails to load, the tab reloads once and afterwards Ctrl+K
  does nothing and says nothing.
- **Evidence.** `e-chunk.mjs`; `shots/chunk/c-slow-1s.png`, `c-direct-loading.png`.
- **Fix.** A thin progress line under the header and `aria-busy` on `<main>` once a transition has been
  pending for 300 ms; `aria-current="true"` on the active group button; a message with a Reload button when
  the palette cannot load.

#### 38. In forced colours, selection and swatches disappear
`minor` · Windows High Contrast (emulated `forced-colors: active`, dark and light)

- **What happened.** The site stays usable. The selected option of a segmented control is shown by weight
  alone; the active navigation item loses its underline; the hue squares (games, eras, kinds of place) and
  the web's legend dots vanish, though their labels stay.
- **Evidence.** `shots/forced/dark-evidence-y0.png`, `dark-graph-y300.png`, `dark-family-switch.png`,
  `light-evidence-filtered.png`.
- **Fix.** Under `@media (forced-colors: active)`: an outline in `Highlight` on the checked option, a
  bottom border on the current navigation item, `forced-color-adjust: none` on swatches and legend dots.

#### 39. Dates and numbers are written several ways
`minor` · all pages (table in section 4.3)

- **What happened.** "2014-11-10" (release dates and essay timelines), "13 November 1987" (prose), "June
  26th", "c. 1983", "’87", and quoted in-game dates in American order ("11-12-1987", "9/07/79") standing
  beside day-first prose with no gloss. "1,044 records" on the evidence page and "1044 records" on the home
  page. Chapter numbers appear as "09", "9" and "Chapter 9 of 35".
- **Evidence.** `vocab.log` (the "dateLabels" lists); `rec.mjs` output; "1044 records" in
  `shots/home1920/1920-night-home-y0.png` against "1,044 records" in `c1.log`.
- **Fix.** One date formatter for the interface ("12 November 1987"); leave quotations as printed and gloss
  each once; `toLocaleString()` for counts.

#### 40. Evidence filters: lists open on focus, and scrolling lists are Tab stops of their own
`minor` · `/evidence` (tag and person pickers), the palette list · keyboard

- **What happened.** The tag and person comboboxes open their lists as soon as they receive focus, so
  tabbing past them flashes a list over the page. The scrolling lists themselves (the palette's results and
  both pickers) are extra Tab stops in Chromium with no purpose of their own.
- **Evidence.** `b3.mjs`, `b3b.mjs`; `shots/b3/05-tag-combo.png`.
- **Fix.** Open on ArrowDown or on typing; `tabindex="-1"` on the scrolling list elements.

#### 41. Very small type
`minor` · citation numerals in captions, rail glyphs, mono labels

- **What happened.** A citation numeral inside a figure caption is 8.6px (a superscript of 13px text). The
  rail's glyphs are 8.6px. Kickers and labels are 11px monospace capitals.
- **Evidence.** `layout.log` (the `tiny` flag on chapters).
- **Fix.** `font-size: max(0.72em, 0.7rem)` for superscripts; 12px as the floor for labels.

#### 42. The developer fixture pages are live and hold the site's only dead links
`minor` · `/dev/blocks`, `/dev/kit`

- **What happened.** `/dev/blocks` links to `/theory/fx-edge`, `/theory/fx-everything` and
  `/theory/fx-bare` ("There is no chapter with that address") and to `#contents`, which is not on that page;
  it has six `h1` and a skipped heading level. `/dev/kit` links to `/evidence?entity=nobody-by-this-id` and
  has a table whose header cells lack `scope`. No other internal link on the site is dead, and all 653
  anchor links have their targets.
- **Evidence.** `crawl.json`; `axe-closed-night-1440.json`.
- **Fix.** Leave `/dev/*` out of the production build, or mark it `noindex` and make the fixture links
  resolve.

### Polish

#### 43. Chapter headings are held to the text column, and the comparison block is 11px wider than its neighbours
`polish` · `/theory/:id` · 1080px and wider

A chapter's `h1` is limited to the 627px measure, so "The bite at the birthday party" breaks onto two lines
at 1920px with 620px of empty column to its right (it fits on one line at 1024px, where there is no rail).
The "wide" blocks (tables, hero figure, pager) are 893px; the two-card comparison (`.compare.full`) is 904px,
so its right edge stands 11px proud of the table above it (`shots/f/1440-night-theory_ucn-compare.png`).
Fix: `pages/theory/theory.css`: let `.chapter-head__title` use the wide measure; give `.compare` the same
width as `.wide`.

#### 44. Very wide windows leave half the screen empty
`polish` · all pages · 1920px and wider

The page is capped at 76rem: content uses 63% of a 1920px window and 48% of 2560px. On a chapter the text
column (627px) sits beside 277px of empty margin at 1440px and far more at 2560px. Nothing is wrong at
these sizes; the margin could carry citations or figures as side notes, or the cap could rise to about
84rem on data pages (the evidence table, the timeline). `shots/layout/theory_bite/1920.png`, `2560.png`.

#### 45. Orphaned last items in grids
`polish` · `/`: the exhibit strip is 3 + 1 at every width from 768px, the row of figures 5 + 1 at 768–1180px; `/gallery` at some widths

`layout.json` (the `grids` entries), `layout.log` (`ORPHAN` flags). Fix: `grid-template-columns: repeat(auto-fit, …)` with a count that divides
the number of items, or let the last item span.

#### 46. The timeline's Key panel runs to the window's edge
`polish` · `/timeline` · 1440px

The panel opens 776px from the left and continues past the content column (which ends at 1321px) to the
window's right edge, where its border is cut off. `shots/b4/03-key.png`. Fix: align its right edge with the
"Filters" button (`right: 0` in the toolbar's box, `max-width: min(40rem, 100%)`).

#### 47. Read chapters lose their confidence mark in the rail
`polish` · `/theory/:id` rail and the contents sheet

Once a chapter has been read, the slot that held its confidence glyph shows a tick (`pages/theory/Contents.tsx`
lines 74–75). One slot, two meanings; the reader who has read most can no longer see which chapters are
tentative. Fix: show the tick beside the number and keep the mark.

#### 48. External links open a new tab without saying so
`polish` · 379 external links (275 to the wiki, 38 to YouTube, 32 to the Web Archive)

All are `target="_blank" rel="noreferrer"`, which is safe. "Image source" carries an arrow for the eye;
none says "opens in a new tab" to a screen reader. Fix: hidden text "(opens in a new tab)" in the shared
external-link component.

#### 49. Literal asterisks in four of Scott's statements
`polish` · `/evidence/scott-2019-indie-dev-photo`, `/evidence/scott-2019-help-wanted-is-canon`, `/evidence/scott-2019-hw-rebrand-or-part-of-the-plan`, `/evidence/scott-2016-sl-store-text`

"…characters that \*are\* canon, along with characters that are \*questionably\* canon…". This may be how
the posts were written; if so it is faithful, and otherwise the emphasis should be italic. No other raw
markup was found anywhere: none of `[[ ]]`, `{{ }}`, `(( ))`, `<< >>`, `undefined`, `null`, `NaN` or
`[object` in the text, the `title`, `alt` and `aria-label` attributes, the document titles or the palette of
1,312 route loads.

#### 50. A figure whose image fails to load shows its alt text in an empty frame
`polish` · any figure, with the image request blocked

`shots/chunk/g-images-failed.png`, `g-gallery-images-failed.png`. The frame keeps its size, which is good.
Fix: an `onError` state in `components/Figure.tsx` reading "Image unavailable" with the link to the source.

#### 51. `aria-controls` names menus that are not in the document while they are closed
`polish` · header, every page (4 controls); the timeline's Filters button

`aria-controls="nav-menu-evidence"`, `nav-menu-people`, `nav-menu-essays`, `reader-settings` and
`tl-filter-panel` refer to elements that exist only while open. Harmless to today's screen readers. Fix:
render the panel hidden, or add the attribute only while it is open.

#### 52. At 400% zoom a collapsed death row shows the victim as one letter, and the image viewer's picture is 81px high
`polish` · `/timeline` and the image viewer · 320×256 CSS px

"DEATH · CAUSE UNKNOWN · F…": the victim's name gets 0 to 80px on all 20 death rows at 320px (the full
text returns when the row is opened). In the image viewer the picture is 304×81px under a 119px caption.
`shots/misc/victim-320.png`, `shots/z400/lightbox.png`. Fix: let `.tl-row__victim` wrap below 30rem; let the
viewer's caption collapse to one line on short windows.

#### 53. Home and End in the search field move the highlighted result, not the caret
`polish` · search palette

After typing a query, Home and End jump to the first and last result, so the caret cannot be sent to the
start of the text with the usual key. `b2.mjs`. Fix: leave Home and End to the input, or act on them only
with Ctrl.

---

## 3. Sweep tables

### 3.1 Every route

The crawl started at `/`, followed every internal link it found and visited 1,312 routes: 14 top-level
pages, 2 developer pages, 35 chapters (and 3 fixture chapter addresses that do not exist), 166 people,
28 places, 20 sources and all 1,044 evidence records (315 in full, 729 in a lighter pass that still checked
console, title, headings, raw markup and links). It also collected 1,818 links with query strings or anchors
and 379 external links. axe ran on the 583 fully visited routes in both themes at 1440px.

| Route (count) | Console errors, failed requests | axe, closed, night / paper | axe, opened states | Dead links out | Raw-markup hits | Image problems | Sideways overflow (see note) |
|---|---|---|---|---|---|---|---|
| `/` | 0 | 0 / 0 | 0 (everything open) | 0 | 0 | 1 exhibit with about 42% of the image cut off | none (text squeezed: finding 2) |
| `/theory` | 0 | 0 / 0 | 0 | 0 | 0 | none | none |
| `/theory/:id` (35) | 0 | WCAG 0 / 0; best practice `landmark-unique` on 5 chapters | the same rule on the 3 opened chapters that have several tables | 0 | 0 | none | none |
| `/timeline`, Events and Locations | 0 | 0 / 0 | 0 (key, filters, no matches, every event open) | 0 | 0 | none | none |
| `/evidence` | 0 | 0 / 0 | 0 (chips, cards, pickers, no results, grouped) | 0 | 0 | none | none |
| `/evidence/:id` (1,044; axe on 315) | 0 | 0 / 0 | 0 (everything open) | 0 | literal `*…*` on 4 records (finding 49) | 1 photograph drawn at 1.63× (finding 35); 1 alt text that quotes file names (`ruin-gregory-comics-depict-endings`) | none |
| `/sources`, `/sources/:id` (20) | 0 | 0 / 0 | 0 | 0 (`/sources/freddy-in-space-2` is a proper "No records yet") | 0 | none | none |
| `/gallery` | 0 | 0 / 0 | 0 (viewer open) | 0 | 0 | shows 125 of the 151 images in use; captions as alt | none |
| `/people` | 0 | 0 / 0 | 0 (search, nobody, minor figures) | 0 | 0 | 19 thumbnails without `width`/`height`, cropped by about half | none |
| `/people/:id` (166) | 0 | 0 / 0 | 0 (full, "this record only", a stub) | 0 | 0 (25 broken machine-made names: finding 15) | none | none |
| `/places`, `/places/:id` (28) | 0 | 0 / 0 | 0 | 0 | 0 | 20 thumbnails without `width`/`height`, cropped by about half | none |
| `/family` | 0 | 0 / 0 | 0 (4 tabs, folds, a line chosen, list open) | 0 | 0 | none | none (the tree scrolls inside a labelled region when narrow) |
| `/graph` | 0 | 0 / 0 | 0 (a person in focus, a line chosen, un-unified) | 0 | 0 | none | none |
| `/community`, `/box`, `/author`, `/method` | 0 | 0 / 0 | 0 (every row open, a verdict filter) | 0 | 0 | none | none |
| `/dev/blocks` | 0 | best practice `heading-order`, `landmark-unique` | not run | 3 chapter links to nothing; `#contents` missing | 0 | none | not run |
| `/dev/kit` | 0 | 0 / 0 | not run | 1 link to an unknown entity (a deliberate fixture) | 0 | none | not run |
| Unknown addresses (10 tried) | 0 | best practice `page-has-heading-one` on unknown chapter, person and place | same | the six unknown paths each offer a way back; the four unknown query values show the default view (finding 32) | 0 | none | none |

Note on the last column: 18 widths from 320 to 2560px on `/`, `/theory`, `/theory/bite`, `/timeline`,
`/evidence`, `/people/william-afton` and `/family`; 320, 768, 1024, 1440 and 1920px on 21 routes (one of
each kind).

Console in full: no error, no failed request and no response of 400 or above on any load. The only messages
were Chrome's "preloaded but not used within a few seconds" warnings for the three font files on 4 loads
made while the host was busy; they did not recur on an idle run (`fonts.mjs`).

Document titles and outline: every content page has exactly one `h1` and no skipped level. The exceptions
are in finding 31 (title and heading disagree on `/theory` and `/box`; one duplicate title; no `h1` on three
unknown-id pages) and on `/dev/blocks`. `header`, `nav` ("Primary"), `main`, `footer` and `nav` ("Footer") are present on every
route; the skip link is the first Tab stop, becomes visible on focus and moves focus to `<main>` (but see
finding 22 for chapters). No duplicate ids were found.

Links: no internal link on a content page leads to a not-found or unknown state. All 653 anchor links have
a target, and a cold load of each anchor arrives with the target 80px below the top, clear of the header.
All 379 external links are `target="_blank" rel="noreferrer"`.

### 3.2 axe by rule

| Rule | Kind | Where | Count |
|---|---|---|---|
| `aria-required-children` | WCAG 1.3.1 (A) | search palette with no results, both themes | 1 node (finding 11) |
| `landmark-unique` | best practice | chapters with several tables: `fnaf1-restaurant`, `salvage`, `canon-rules`, `timeline-math`, `open`; `/dev/blocks` | 6 routes, 7 nodes (finding 34) |
| `page-has-heading-one` | best practice | unknown chapter, person and place; the three fixture chapter addresses | 3 states, 3 routes (finding 31) |
| `heading-order` | best practice | `/dev/blocks` | 1 |
| `color-contrast` | "needs review" only | 57 routes where axe could not decide (text over gradients and images) | 0 failures in my own pixel audit of 17,270 text boxes in both themes |

Opened states tested, 130 in each theme (`axe-open-night.log`, `axe-open-paper.log`): the drawer from a
citation, from a cluster, from the evidence list and with an external link; the palette empty, with results
and with none; the three navigation menus; reader settings; the image viewer from the gallery, from a
chapter and inside the drawer; a citation preview; a date popover; every tab of the timeline and the family
trees; all folds, a chosen line and the list on `/family`; a person in focus, a chosen line and the
un-unified web on `/graph`; evidence with filters and chips, as cards, with the pickers open, with no
results and grouped; the timeline's filter panel, key, filters applied, no matches and every event open;
every collapsible open on the cover, eight chapters, people, places, sources, records, the gallery and the
four essays; large text; markers hidden; at 768px the menu sheet, the contents sheet, the filter sheet, the
drawer and the palette; at 1024px the contents and filter sheets; ten dead-end addresses.

### 3.3 The header at 10px steps (default text size)

`header-16-880-1220.log`. "Gap" is the space between the last navigation item and the search box; a negative
gap is an overlap.

| Width | Header | Gap | What overlaps | Centre of search covered |
|---|---|---|---|---|
| 880, 890 | menu button, brand with subtitle; not sticky | n/a | nothing | no |
| 900 | navigation bar; subtitle and `Ctrl K` hidden; sticky | −90 | Essays 11px, Method 73px | yes |
| 910 | same | −81 | Essays 2px, Method 77px | yes |
| 920 | same | −72 | Method 72px | yes |
| 930 | same | −63 | Method 63px | yes |
| 940 | same | −54 | Method 54px | yes |
| 950 | same | −44 | Method 44px | yes |
| 960 | same | −35 | Method 35px | no (a click on the left third still opens Method) |
| 970 | same | −26 | Method 26px | no |
| 980 | same | −17 | Method 17px | no |
| 990 | same | −8 | Method 8px | no |
| 1000 to 1070 | same | +2 rising to +72 | nothing | no |
| 1080 | same; the chapter rail appears | +82 | nothing | no |
| 1090 | subtitle and `Ctrl K` return | −114 | Essays 34px, Method 77px | yes |
| 1100 | same | −104 | Essays 24px, Method 77px | yes |
| 1110 | same | −94 | Essays 14px, Method 77px | yes |
| 1120 | same | −84 | Essays 4px, Method 77px | no |
| 1130 | same | −74 | Method 74px | no |
| 1140 | same | −64 | Method 64px | no |
| 1150 | same | −54 | Method 54px | no |
| 1160 | same | −44 | Method 44px | no |
| 1170 | same | −34 | Method 34px | no |
| 1180 | same | −24 | Method 24px | no |
| 1190 | same | −14 | Method 14px | no |
| 1200 | same | −4 | Method 4px | no |
| 1210 and wider | same | +6 and rising | nothing | no |

With a larger browser default font (`header-20.log`, `header-24.log`):

| Default font | Sideways scroll of the page | Navigation over search | Something outside the window |
|---|---|---|---|
| 16px | never | 900–990, 1090–1200 | never |
| 20px | 360–430, 900–980, 1090–1130 | 900–1490 | 360–430 (menu button), 900–990, 1090–1130 |
| 24px | 320–340, 360–500, 900–1350 | 900–1770 | the same ranges as the sideways scroll |

The site's own "Large" text setting does not change the header at any width.

### 3.4 Overflow, squeezed text and wasted space by width (default text size)

Sideways overflow of the page: **none** on the home page, the cover, a chapter, the timeline, the evidence
explorer, a person and the family trees at 320, 360, 480, 600, 768, 820, 900, 960, 1000, 1024, 1100, 1180,
1280, 1366, 1440, 1680, 1920 and 2560px (`layout.json`, 126 measurements), and none on 21 routes at 320,
768, 1024, 1440 and 1920px (`allroutes.json`).

Text blocks of 60 characters or more squeezed under 170px, every 20px from 320 to 1400 on 22 routes
(`squeeze-16.log`):

| Page | Element | Widths | Narrowest |
|---|---|---|---|
| `/` | era summary | 660–740 and 960–1120 | 4px at 960 (finding 2) |
| `/` | step-card description | 760–820 | 148px |
| `/theory` | caption of the cover figure | 900–940 | 133px |
| `/people`, `/places` | row status, place dates | 900–940 | 125px |
| `/people/william-afton` | "also" line of the identity tree | 900–940 (and 320) | 117px |
| `/theory/games` | table cells | 320–700 | 136px (inside a scrolling table) |
| `/timeline` | victim on a collapsed death row | 320–520 | 0px (finding 52) |
| `/gallery`, `/evidence`, `/sources/fnaf4` | captions and locations clamped to one or two lines | below 600 | 131px |
| the other 12 routes | nothing | | |

Line length: a full line of chapter prose holds a median of 68 characters (58 to 75; 627px of Literata at
19px), right on the handbook's target. Too long elsewhere: finding 28. Use of the window: 91% at
1024px, 84% at 1440px, 63% at 1920px, 48% at 2560px (finding 44). Height of the home page by width: 11,173px
at 900, **22,200px at 960**, 14,766px at 1000, 13,461px at 1024, 11,485px at 1100, 10,012px from 1366.

### 3.5 Zoom, default font size and the large-text setting

| Condition | Routes | Sideways overflow | What else |
|---|---|---|---|
| 200% zoom of 1280 (640×400) | 21 | none | Drawer, palette, menu sheet, contents sheet, image viewer and filter sheet all fit and scroll. The sticky chapter bar takes 44px of 400. Locations view heads its columns "01" to "08" only (finding 30). |
| 400% zoom of 1280 (320×256) | 21 | none | Everything reachable. The drawer shows 74px of its record at a time (finding 23); the image viewer's picture is 304×81px and death rows show one letter of the victim (finding 52); the chapter bar takes 44px of 256; chapter tables scroll inside their region with no hint (finding 34). |
| Browser default font 20px | 21 at 768, 1024, 1280; header at every 10px | none on those three widths; header ranges in 3.3 | navigation over search at 1024 and 1280 on every page; `/people` and `/places` rows 8 characters wide at 1024 (finding 9) |
| Browser default font 24px | the same | **every route at 1024 (1,182px wide) and 1280 (1,353px)** | as above, worse; William Afton's page 63,914px tall at 1024 |
| The site's "Large" text | 21 at 1024 and 1280 | none | only reading text grows, by 12% (finding 36); the header is unchanged |

### 3.6 Keyboard journeys (no mouse)

Every stop that was measured shows a 2px ring with a 2px offset (amber on night, brown on paper). The lines
of the family tree and the discs of the web show a halo instead, which is just as visible. No stop was off
the screen when it received focus. Logs: `b1.log` to `b6.log`.

| Journey | What works | What does not (finding) |
|---|---|---|
| 1. Home, the story, a chapter, a citation, the full record, Back | The skip link is the first stop, appears on focus and works. On a citation, focus shows the preview; Enter opens the drawer, focus moves to Close, the page does not move, Tab stays inside the dialog, and Escape returns focus to the same citation with the scroll unchanged. "Open the full record" goes to the record's page. Back returns to the chapter at the same scroll with the drawer open again. | "Read the story" scrolls to the storyline with focus on `<main>`; the next Tab jumps back to the top (4). Date pills and their records lie in the Tab path through the storyline (17). 17 Tabs of rail before the article (22). After Back, Escape leaves focus on `<main>` (5). |
| 2. The search palette | Ctrl+K and `/` open it with focus in the field. `combobox` with `aria-controls` and `aria-activedescendant`; the arrows move the active option and keep it in view. Enter on a page or chapter goes there; Enter on a record opens it in the drawer over the current page. Escape closes and returns focus to where it was. It opens over the drawer too. | Nothing is announced (11). Curly apostrophes (10). Order and misses (18). Back leaves it open (19). Home and End (53). |
| 3. Evidence explorer | "Skip the filters" moves focus to the results. Checkboxes toggle with Space and keep focus; a status line reports "54 of 1,044 records". The tag picker takes typing, ArrowDown and Enter. "Show 50 more" moves focus to the first new row. Enter on a row opens the drawer with a pager; the arrows page it. | Removing a chip or "Clear all" drops focus (7b). Rows/Cards ignores the arrows (21). Pickers open on focus and their lists are Tab stops (40). "Record 51 of 100 cited here", first focus on "Previous record" (23). |
| 4. Timeline | An era link moves focus to the era's heading. An event opens with Enter or Space (`aria-expanded`), and open events are kept in the address. "Key" opens and closes with Enter and Escape and keeps focus. The filter panel is a labelled group, and a status line reports "Showing 1 of 43 events and 5 of 23 deaths". The Locations view is built of links and buttons and reads in order. | Tabs ignore the arrows (21). Date pills (17, 8). Era columns headed by numbers (30). |
| 5. People, a person, the family trees, the web | The register's search is the first stop. On a person's page the contents strip, "This record only" and the chips all work; chips open the drawer. Family trees: tabs, fold switches (`role="switch"`), "Lines drawn" chips (`aria-pressed`); people are links; lines take focus, move with the arrows, Home and End, and Enter picks one, which opens a panel of its records and is kept in the address. The web: a "Focus on" select, a switch, firmness chips; discs take focus and move with the arrows, Page Up, Page Down, Home and End (the diagram's label explains this); Enter picks; "Clear the focus" undoes it. Both diagrams have a complete list beneath. | The search drops letters (3). Contents links (4). The web's lines are mouse-only and Escape clears nothing (24). Links to minor figures read the game before the name ("Five Nights at Freddy's 2 Balloon Boy 4"). |
| 6. Gallery, essays, settings, menus | Image viewer: Enter opens it with focus on Close, the arrows page, Escape closes and returns focus to the thumbnail. Essays: rows are native disclosures and the open row is kept in the address; "Open all steps" changes its own label; "30 records cited" moves focus to that list. Settings apply at once. Menus open with Enter, Space or ArrowDown, the arrows move and wrap, Escape closes and returns focus to the button. | Viewer over the drawer (6). Paging from a caption link (7d). Settings: Escape and tabbing out (7a). Arrows in segmented controls (21). |

### 3.7 Addresses and history

`c1.log`, `c2.log`, `c3.mjs`.

| Page | State kept in the address | A change adds a history entry | Back | Reload | Copied link in a new tab | Two quick changes |
|---|---|---|---|---|---|---|
| `/evidence` | `q`, `game`, `cert`, `kind`, `use`, `tag`, `entity`, `img`, `view`, `n` | no | leaves the page | same view | same view | both register |
| `/timeline` | `view`, `era`, `e` (open events), `support`, `person`, `place` and the other filters | **tabs and era links: yes**; filters and open events: no | undoes tabs and era links one at a time | same view | same view | both register |
| `/people` | `q` | no | leaves the page | same view | same view | see finding 3 |
| `/people/:id` | `scope` | no | leaves the page | same view | same view | both register |
| `/family` | `tree`, `fold`, `lines`, `tie` | no (**tabs too**) | leaves the page | same view | same view | both register |
| `/graph` | `focus`, `unified`, `support` | no | leaves the page | same view | same view | both register |
| `/places` | `kind` | no | leaves the page | same view | same view | both register |
| `/sources/:id` | `use` | no | leaves the page | same view | same view | both register |
| `/community` | `verdict`; one open row as `#c-…` | no | leaves the page | **one open row of two** | **one open row of two** | both register |
| Evidence drawer | in the history entry, not the address | opening: one entry; paging: none | closes it; Forward reopens it | stays open | the page without the drawer (by design) | not applicable |
| Palette, image viewer, sheets | none | no | **the page underneath changes and the overlay stays** | closed | not applicable | not applicable |

Scroll on Back: restored exactly on all ten pages tried (from 500px to 6,000px down), again after Forward
and Back, and after a reload in the middle of a chapter. Focus after Back is on `<main>` (finding 5).

Old-style and odd addresses: `#/theory#bite`, `#/theory#thesis`, `#/theory#open`, `#theory#bite` and
`#/theory/#bite` all arrive at the chapter. `#/theory#storyline`, `#contents` and `#part-family` scroll to
their targets. A trailing slash and a capital in the path are accepted. `#/theory#nope` and
`#/theory/bite#sources` (no such target) open the page at the top without a word (finding 32).

### 3.8 Other modes

| Mode | Result |
|---|---|
| `prefers-reduced-motion: reduce` | Clean. No animation or transition runs, scrolling is instant, the web opens already settled, nothing breaks (`e-motion.mjs`). |
| Forced colours, dark and light | Usable; three losses (finding 38). `shots/forced/`. |
| Print | Not ready from the night theme (finding 12). `print/*.pdf`. |
| A page's code fails to load | After one automatic reload: "This page did not load", with Reload and a way home; header, search and footer work; Reload recovers; no loop. It has no `h1` (finding 31). `shots/chunk/a-route-failed.png`, `b-direct-failed.png`. |
| A page's code is slow | Direct load: header, "LOADING…", footer. In-site link: no sign for the whole wait (finding 37). |
| An image fails to load | Alt text in the frame (finding 50). |
| JavaScript off | "The Fazbear Canon Archive needs JavaScript to run." |
| Styles from one page leaking into another | None: of 16 pages compared element by element, loaded fresh and reached after visiting every other route, 15 were identical and the cover differed only in its "continue" button, whose label depends on what has been read (`cssleak.mjs`). |

### 3.9 The reading experience at desktop sizes, measured

Seven chapters were read through by eye at 1440px, among them the longest (`/theory/open`, 11,031px, "11 min
read") and those with the largest tables (`games`, `thesis`, `canon-rules`, `timeline-math`), with `bite` at
1024, 1920 and 2560px and in the paper theme. `f-anatomy.log`, `shots/f/`.

| Thing | Measured | Judgement |
|---|---|---|
| Text column | 627px (33 times the reading size); Literata 19px on a 31.9px line; 58 to 75 characters on a full line, median 68 | Right. |
| Hierarchy | `h1` Fraunces 50px; `h2` 34px; the answer 24.8px; callouts 17.9px; tables Inter 15px; captions Inter 13px; labels Plex Mono 11px | Clear, four steps and no more. The 13px and 11px steps are small (finding 41). |
| Chapter head | part and "Chapter n of 35", title, the question, the model's answer, confidence with its sentence, "7 min read · 42 records cited · 9 push back"; 509 to 579px tall | The answer comes first, which suits a reference. With a hero figure the argument's first paragraph starts on the second screen (y = 1,269 on `open`). |
| Figures | hero 893px with "EXHIBIT"; inline 627px with "FIG. n"; caption, "Record", "Image source"; Enter or a click enlarges | Good. Two labels for one thing (finding 25). |
| Tables | 893px, wider than the text and aligned with the hero; 2 to 4 columns; up to 17 rows and 1,851px (`games`); no sideways scroll from 1080px up | Good at desktop sizes; no captions (finding 34). |
| Comparison | two cards, the model's lean marked by a tick and a top rule | Clear; 11px wider than its neighbours (finding 43). |
| Rail | sticky, 264px, ten parts as disclosures, the current part open, "2 of 35 chapters read"; fits 1366×768 and 1280×720 | Good. Its marks: findings 14, 22, 47. |
| Progress | a 2px line under the header, and the rail's count | Enough. |
| Foot of a chapter | "What pushes back" (the records, each with number, mark, title, excerpt and source), "How the model handles it", "What would change this", "Read alongside" (seven chapters), "Sources" and "Further evidence filed here" (closed), then the pager | Honest and well ordered: the objections come before the exit. |
| The way to the next chapter | the pager at the very foot ("Next · 23 Rest, and Hell"; "The end: Back to the contents" on the last); below 1080px also arrows in the chapter bar | It works, but it is the only way on at desktop widths and it lies 2,600px below the end of the argument on `ucn`. A "Next" link at the end of the argument, or in the rail, would help. |
| First impression | cover: title, thesis, confidence and three buttons on the first screen at 1440×900 and 1920×1080 (the buttons, at y = 841, are below the fold at 1366×768); home: finding 16 | The cover is the better front door. Both need their first action higher. |

---

## 4. The vocabulary map

Source: a scan of every page for marks, legends, tooltips and nouns (`vocab.mjs`, `vocab.log`, `vocab.json`),
checked by eye on the screenshots named below.

### 4.1 Marks of firmness, and the other marks beside them

Amber is `rgb(240, 181, 74)` on night and `rgb(135, 86, 0)` on paper. "The three glyphs" are the filled
disc, the half disc and the ring.

| Vocabulary | Values | Drawn as | Where it appears | Key on that page? |
|---|---|---|---|---|
| **Certainty** of a record | Stated, Shown, Implied | The three glyphs in amber. A bordered tag ("● STATED") on record cards, the record page and the drawer; glyph and word in record rows; **glyph alone on source chips** | `/evidence` (facet with counts, rows, cards), record pages, the drawer, chapters ("Sources", "What pushes back"), and as chips on people, places, family trees and the web | Words in the explorer's facet. The three-scale key is on `/theory` and `/method` only. On chips the word is in the `aria-label` and the hover preview only |
| **Status** of a tie or an event | Canon, Strong inference, Theory; "Strong" for short | The same three glyphs with the word; solid, dashed and dotted lines in the family tree and the web; small capitals beside ties | `/timeline` rows and filter, findings on `/`, a person's events, ties and identity tree, the People register, `/family`, `/graph` | Timeline "Key"; "Line style" on `/family` and `/graph`; a count key on a person's Identity. The scale has six names (finding 26) |
| **Confidence** of a chapter or beat | High, Medium, Low confidence | The same three glyphs. With words and a sentence in the chapter head (and a solid, dashed or dotted rule down its left side), with words in the cover's contents and the beats; **glyph alone in "Read alongside"**; **glyph alone, grey `rgb(153, 145, 132)`, 8.6px, in the rail** | `/theory`, chapters, beats on `/`, "In the theory" on person pages | `/theory` ("How firm is it") and `/method`. In the rail the word is a `title` only, and a tick replaces the glyph once the chapter is read |
| **Kind of date** | printed, derived, estimated, relative, teaser, undated | **The same disc, half disc and ring, in the same amber**, then two arrows, a diamond and a dashed ring; inside every date pill | `/`, the cover's beats, `/timeline`, people, places, record pages, the drawer | Timeline "Key" ("How a date is known") and `/method` only. The kind is in the pill's accessible name and the popover's heading. Record pages add the stored words "(unknown)", "(approx)", "(relative)" |
| **Verdict tones** | green: Confirmed, Mostly right, Supported, "Consistent, not proof"; red: Wrong, Ruled out, Pushes back; blue: Still open, Fan-inferred, "Not decided by this", "What would change this"; amber: Partly right, "This page"; grey: "Noted, not used" | A coloured chip or the edge of a callout, always with its word | `/community`, `/box`, `/author`, chapters, the drawer | The word is on every chip; colour never stands alone |
| **Essay tags** | Planted, Explained, Shelved, Echoed, Abandoned; Clarification, Access & collaboration, Prank / misdirection, Scott on theories | Small capitals | `/box`, `/author`, `/community` | None needed |
| **Use of a record** | Cited, Filed as further evidence, Outside the story, Not yet accounted for; in the drawer "filed, not cited" and "pushes back" | Solid, hatched, grey and empty squares with the word | `/sources`, source pages, the explorer's facet, the drawer, the ledger on `/method` | The labels sit under each bar. The hatch does not depend on colour |
| **Death** | "DEATH" with a skull; the cause with its own icon; "CAUSE UNKNOWN" with a dashed circle | A red-tinted tag | `/timeline`, a person's events | Timeline "Key" ("On the line") |
| **Hue** | eight eras, five kinds of place, one colour for each game | A small square beside the name or code | Everywhere | Always beside its label; lost in forced colours (finding 38) |
| **Italic name** | a descriptor, not a name the games print | Italic serif | People, family trees, the web, timeline filters, chips | People and Family only |

**Clashes**

1. **One glyph, four scales.** A disc means Stated, Canon, High confidence and "printed date", all in the
   same amber. The handbook intends three of these to share a shape and to be told apart by words; the date
   glyphs make a fourth, and in the places below the words are missing for the eye.
2. **Two scales in one row without words.** A tie on a person's page: "○ Parent of The Crying Child THEORY"
   with the chips "◐ FFPS ● FFPS ● FFPS ● FNaF4 ● FNaF4 ◐ FNaF2" at the end of the row
   (`shots/misc/person-ties.png`). A story beat: a date pill's glyph beside the beat's confidence mark.
3. **One thing drawn three ways.** The status of a tie is a glyph in lists, a line style in the diagrams and
   a count in the identity key ("1 canon · 2 strong · 4 theory"). Confidence is amber on a chapter and grey
   in the rail.
4. **One scale, six names**, and "Strong" beside "Strong inference" (finding 26).
5. **Marks without a key on the page:** person, place, source and record pages and the home page. The key
   for kinds of date is on two pages; the pills are on at least eight kinds of page.
6. **The dashed circle** is "undated" on a date pill and "cause unknown" on a death, sometimes in the same
   timeline row.
7. **Colour alone:** none found for firmness; shape carries it, which is right. The grey of the rail's
   glyphs and the one slot that shows either confidence or "read" are the weak points (findings 14, 47).
8. One beat on the cover is dated by a plain label ("BEFORE 1979") where its neighbours have date pills.

### 4.2 Names of things

| Thing | Names used in the interface |
|---|---|
| One of the 1,044 items of evidence | "record" (nearly everywhere), "evidence record" (the drawer's bar), "Source 13: …" (a marker's accessible name) |
| A person's entry on the People pages | also "record" ("7 other records", "This record only", "How firmly a record belongs") |
| The collection | "Evidence" (navigation group, kickers, footer), "Evidence locker" (navigation item, heading, palette) |
| A game or medium | "source" (the Sources page), and its code ("FNaF4", "SL", "Pit") |
| A numbered reference in the text | "citation markers" (settings), "records cited" (chapter head), "Sources" (the list at a chapter's foot) |
| A picture | "Exhibit" (hero figures, the home page, the palette: "The screenshots, as exhibits"), "Fig. 1" (inside a chapter), "image" ("Enlarge image", "Image viewer", "Image source") |
| The whole argument | "The Theory" (navigation, title, palette), "The Unified Model" (heading, rail), "the model" (prose, "The model's answer") |
| The twenty-step account | "the story" ("Read the story"), "The story, in order", "the storyline" (its anchor), "beats", "the short telling" |
| A unit of the argument | "chapter" (35) and "part" (10), always |
| An item on the timeline | "event", "death", and "entries" for both ("6 entries") |
| A relation between two people | "tie" (most places), "line" (the diagrams), "relationship" (the palette's description of the web) |
| The diagram of everyone | "The web" (navigation, heading); "a graph" (palette); `/graph` (address) |

"Source" has four meanings and "record" two; those are the ones a reader will trip on (finding 25).

### 4.3 Dates and numbers

| Form | Example | Where |
|---|---|---|
| ISO | "2014-11-10", "posted 2019-09-29" | release dates on `/sources` and record pages, essay timelines, citations of interviews |
| Day, month, year | "13 November 1987", "the week of 12 and 13 November 1987" | prose, date pills |
| Month and ordinal | "June 26th", "a June 26 between 1980 and 1986" | beats, pills |
| As printed in a game, American order | "11-12-1987", "11-13-xx", "9/07/79" | quotations and captions |
| Approximate | "c. 1983", "’87", "1965 to 1979" | pills, timeline |
| Relative, in words | "thirty years after Freddy Fazbear’s Pizza closed", "after the fire, by convention; no year" | pills |
| Counts | "1,044 records" (evidence page) and "1044 records" (home page) | |
| Chapter numbers | "09" (rail, bar, "Read alongside"), "9" ("Chapter 9 of 35", "Next · 23"), "18." (the cover's inline links) | |

The relative dates in words are a strength: they say what is known and no more. The ISO dates and the two
ways of writing a count are the inconsistencies (finding 39).

---

## 5. What works well, and must not be broken

- **No errors anywhere.** 1,312 route loads without a console error or a failed request, and no styles
  leaking between lazily loaded pages.
- **axe is clean** on 583 routes in both themes and in 129 of 130 opened states; a pixel audit of 17,270
  text boxes found no contrast failure. The paper theme is complete: no component is left dark.
- **No sideways scrolling** at any of 18 widths, at 200% and 400% zoom, or with the site's large text.
- **Every view has an address.** Filters, tabs, open events, a chosen line and a person in focus are all in
  the query string; reload and a copied link restore them; two quick changes never lose one; old
  `/#/theory#bite` links still arrive.
- **The evidence drawer.** It opens without moving the page, costs exactly one history entry, survives a
  reload, closes on Back and reopens on Forward, and Escape puts focus back on the very citation that
  opened it. The preview on focus lets a keyboard reader check a source without opening anything.
- **Scroll position** comes back exactly on Back, on Forward and after a reload, on every page tried.
- **The evidence explorer.** "Skip the filters", the status line that reports the count, focus moved to the
  first new row after "Show 50 more", chips that sum up the filters in words.
- **The timeline's Key.** The clearest explanation of the marks on the site ("How firm an entry is", "How a
  date is known", "On the line"), opened and closed from the keyboard without losing focus. It deserves to
  be on every page.
- **Diagrams that a keyboard can read.** Lines in the family tree and discs in the web take focus and move
  with the arrow keys, the diagram's label explains how, and each has a complete list beneath it.
- **Essays.** Contents links move focus to their section; rows are native disclosures whose open state is
  in the address.
- **Failure and waiting.** "This page did not load" with Reload and a way home, one automatic retry and no
  loop; "LOADING…" on a slow direct load; a citation that falls back to the record's own page when the
  drawer's code cannot be fetched; honest empty states ("No records yet", "Nothing matches") with a way
  back from every unknown path.
- **Reduced motion** is honoured completely.
- **The reading page.** A 68-character line of Literata at 19px on a 1.68 line height; tables and hero
  figures on a second, wider measure; the question, the answer and the confidence before the argument; what
  pushes back and what would change the answer before the exit.
- **Clean text.** No raw markup, placeholder or `undefined` in the text, attributes, titles or search
  results of any page.
- **Focus rings.** A consistent 2px ring on every stop in both themes, and a halo on diagram lines.
- **Images.** None broken, none without `alt`, frames that hold their size, pixel art kept crisp.
