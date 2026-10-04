# Final UI phase: notes

Branch `ws/ui-final` in `~/src/fnaf-canon-wt/ui`, from `ws/integ` at `d4c0736`. Not rebased. One merge,
the one the addendum prescribed: `ws/theory` (merge commit `866ba26`, the rewritten people data).
No commit of mine touches `src/data/**`, `research/**` or `public/img/**`
(`git log --first-parent --no-merges d4c0736..HEAD -- src/data research public/img` prints nothing).
Outside the data: 110 files changed, about 4,730 lines added and 1,620 removed, in 35 commits (listed at the end);
the tree is clean at `23b62c7`.

**Where this branch stands against the integration branch** (looked up read-only on 3 October, 17:10): `ws/integ`
holds this branch up to `4bcafd8` (its merge `d7712cd`), then a later `ws/theory` and a commit of its own that
prints the new `theoryIntro.aboutChapters` (`6b0819a`); `ws/ui-fin` starts there. **Two commits here are not in
it: `51d612d`** (the timeline's era summaries on a phone) **and `23b62c7`** (Back pressed during a glide, on a
slow phone); see "After the merge" in the Addendum. Both merge into `ws/integ` and into `ws/ui-fin` (looked at
again at `16c5e65`) without a conflict (`git merge-tree --write-tree`, exit 0), and each can be cherry-picked
alone. I did not merge `ws/theory` a second time: its newer commits need `6b0819a` to be shown, and that commit
is not on a branch I may merge.

The handbook `files/ui/DESIGN.md` is updated to match: read section 18 there first ("What changed in the final
phase"); it lists every new shared piece and every rule that changed.

Contents: 0 what changed under the UI · 1 address layer · 2 shared components · 3 home and theory · 4 delivery ·
5 the two reviews · Addendum (the rewritten people data, names and aliases) · 6 QA record · For the orchestrator ·
Safari · Tools · Commits.

---

## 0. What changed under the UI (the brief's list)

| Item | What was done |
|---|---|
| `Death.event` | The timeline puts a death on the row of the event the data names; a death the data leaves unlinked gets a row of its own. The old rule of thumb (same era, shared records) runs only for data in which no death names an event. |
| RichText tokens in fields that used to be plain | Every field that carries `[[record]]`, `{{entity}}`, `((chapter))` or `<<date>>` is drawn by `RichText` where it is shown whole and goes through the plain-text stripper where it is clipped or put in an attribute (cards, summaries, `title`, `aria-label`, document titles, search results). `tools/tokens-crawl.mjs` reads 172 routes (every chapter, person, place and source page, a set of records) and the search palette for a raw marker in text or attributes: none. |
| The `emily` group's label | "Cassette Man's household" (`GROUP_LABEL` in `components/palette.ts`); the key `emily` is untouched. Nothing in the UI calls two people partners, founders or owners: the tie kind `partner-of` reads "worked with" (the rewritten relations no longer use that kind, and no label in them says "partner"). |
| The `teaser` help text | As asked, in `components/labels.ts`. |
| Emphasis in a source's own words | Asterisk pairs in quotes and notes are set in italics (`sourceWords`); unmatched ones are data (orchestrator, 6). |

## 1. One address layer

`src/components/address.ts` is the one place view state in the URL is read and written.

- **Reading.** `useAddress()` gives `{ params, anchor, get, write }` from a store that changes the moment the
  browser's address does (not a render later, as `useLocation`/`useSearchParams` do). Pages get only their path
  from the router (`PageLocation` in `App.tsx`).
- **Writing.** `write(change, how?)` works every change out from the address as it is at that moment, so two quick
  clicks both count. One call is one history step. The caller says `push` or replace (replace is the default).
  The browser's entry is changed first and the page drawn after.
- **Typing.** `useAddressText(name)` answers each keystroke at once and writes when typing pauses. Text still
  waiting when the reader follows a link is recorded on the entry being left, never on the one arrived at.
- **Staying out of the way.** A write is refused once the reader has gone to another page (the just-followed-link
  case). Nothing is written while the evidence drawer or any overlay holds the history entry; the page shows the
  change at once and the address takes it when the overlay closes. `settleAddress()` flushes before the drawer
  opens, so the drawer never opens over a list one change behind.
- **Migrated:** timeline (`useAddress` directly), evidence (`addressState.ts` is now a 30-line adapter over the
  shared hook; its `inStep` and hash checks are gone), people (`urlState.ts` deleted), essays
  (`useEssayAddress` deleted). `DrawerHost` reads the live entry.
- **Nothing left behind:** `grep -rn "useSearchParams\|useLocation().search\|useLocation().hash" src/pages` is empty.
- Every documented parameter of every cluster works as before; their own address suites pass unchanged
  (B `t-address`, `t-race`, `t-odd-links`; A `flows`; C `interact`; D `interact`, `states`).

## 2. Shared components

| Brief item | What was done |
|---|---|
| Header overlap at 900–999 and 1090–1209px; overflow at 390px with a 20px font | The header chooses its layout by measuring itself (`useHeaderFit`): seven layouts, roomiest first, written on the element as `data-nav`, `data-brand`, `data-search`. Checked at every 10px from 320 to 1600, at 16, 20 and 24px browser fonts, normal and large text: 774 widths, 0 problems (`t-header.mjs`). |
| `ScrollManager` | Waits for the route's content with observers, not a timer; honours `scroll-margin-top` (uses `scrollIntoView`); yields the moment the reader scrolls, taps or types. Later in the phase: restores keyboard focus on Back; holds a landing until fonts are in; switches scroll anchoring off while landing; ends a touch glide before landing. |
| `Tabs` | `aria-controls`, roving tabindex, arrows, Home and End; `TabPanel` for the panel. `Segmented` is a radio group with one Tab stop. |
| `Collapsible` | Controlled `open` with `onToggle`; closed bodies are not rendered (`eager` keeps them; `print` opens a section on paper). |
| `Figure` | Failed-image state (frame, caption and "Image unavailable" stay). Photos are never drawn past 1.25× their own size. |
| Enum maps | `deathKindIcon()`, `sourceKindIcon()`, `kindLabel()`, `firmness()`, `DATE_KIND` lookups all fall back for unknown keys. |
| `Lightbox` | No `100vw`; `markUpscaled` compares both dimensions. |
| Drawer label | Says what its list is ("Source 6 of 35", "Record 1 of 50 in this list", "Related record 1 of 5"). |
| Touch targets | `src-chip`, `figure__credit`, linked `GameMark`, record rows, footer links, chapter-head links, citations: 40px or spaced. `t-targets.mjs` at 390px over 22 routes: 19 controls left under 40px with a neighbour in reach: 10 are lines in the family-tree diagram (the list below it says the same), 5 are chapter links inside table cells, 3 are citation markers beside a quote's source, 1 is a name beside its source chips. Links in running text (43 with a neighbour in reach) are left as text. |
| Promoted from people | `ties.ts` (to `components/ties.ts`), `useUrlState` (superseded by the address layer). `DossierSection`, `Capped`, `JumpLinks`, `WhenOpened` stay in people: only people uses them. |

**Found by the last full run, and fixed.** The key to the marks (`MarksKey`, made shared in this phase) had lost
its width and its two columns: its rules were in `components.css` and `.pop` / `.pop > *` in `richtext.css`, which
is imported later, set them back. It showed as one narrow column that scrolled, with nothing in it a keyboard
could focus; cluster A's `axe-states` caught it (`scrollable-region-focusable`). The two rules now name both
classes, and a popover that is held to less than its content takes a tab stop while it is. `t-cascade.mjs` then
looked for every other case of the same accident (a shared rule losing to a later shared rule of equal
specificity, on real elements, 26 states at two widths, overlays open): 132 pairs, all of them the usual kind (a
base rule followed by its own refinement, such as `input` then `.palette__field input`), none where a
component's rule is set back by a generic class declared after it.

New shared pieces (all exported from `components/ui.ts`, all documented in DESIGN.md section 18): `MarksKey`,
`ExternalLink`, `Missing`, `openSearch`, `useContinue` / `useReadingProgress` / `saveReadingPlace`,
`settleHeader`, `useFlick`, `useSheetPull`, `longDate`, `isRelease`, `numberWord`, `Page kind`, `Empty heading`.

## 3. Home and the theory, with the real text

**Home.** The first screen now gives, in order: what this is ("One story, from the evidence up."), the thesis as
the lede, one line on why to trust it, and the three ways in. At 390×844 and 360×740 "Read the story" starts on
the first screen. The headline is made of words already on the page; `data/home.ts` may export `homeHeadline` to
replace it. On a phone the questions and the findings open on a tap and the eras are names and dates: the page
went from 16,400px to 9,800px. A returning reader gets "Continue reading: chapter N".

**The cover.** The storyline has a progress line (beat number, title, how far), an end ("That is the whole story…")
with the way into chapter 1, and one "sources" link per beat that opens the beat's records to step through. On a
phone the markers in the story's text are hidden (the "sources" link stands in), and where there is one column
each picture sits under its beat's title, so it no longer reads as the opening of the next beat. "How to read it"
folds to its opening paragraph on a phone. The contents can be shown with or without the answers; a phone starts
with questions only. The cover went from 42,900px to 31,800px at 390px, and the contents from 17,100px to 7,400px.

**Chapters.** The article comes first in the document. Headings and paragraphs have anchors; the rail lists the
sections of the chapter being read and follows the reader. Tables wider than their column become labelled blocks
(a container query, so it also happens in a narrow column on a wide screen): all 29 tables in the 35 chapters fit
at 390 and 360px with no sideways scroll and no clipped text. The compare block, pull quotes, figures, callouts
and exhibit strips were checked against real instances in the chapters that use them most. Where there is no
rail, the next chapter is offered where the argument ends, and comes first in the pager on a phone. "N records
cited" is a link to the sources (Back returns to the head of the chapter). A chapter prints.

**Extremes checked with the real data** (ids taken from `final/facts.json`, generated by `tools/facts.mts`, not typed
by hand): the longest chapter (`open`), the chapters with the widest tables (`games`, `thesis`, `ucn`,
`november-1987`), the person with most records, a place with none, the source with no records, the longest
chapter title in the rail, the longest beat.

## 4. Delivery

A plugin in `vite.config.ts` (`configurePreviewServer`, no new dependency) serves text assets as brotli or gzip
by `Accept-Encoding` (precompressed at build into `dist`, with an in-memory fallback), sets
`Cache-Control: public, max-age=31536000, immutable` on hashed files under `/assets/` and `no-cache` on
`index.html`. It works with the unit's own command line.

```
$ curl -sI -H 'Accept-Encoding: br, gzip' http://127.0.0.1:5191/assets/index-….js
Cache-Control: public, max-age=31536000, immutable
Content-Encoding: br
Content-Length: 12978        (45,248 uncompressed)
```

Measured on `vite preview` at 390px (`t-delivery.mjs`):

| Route | First visit | of which script | Return visit |
|---|---|---|---|
| `/` | 775 kB | 486 kB | 0.2 kB |
| `/theory` | 1,030 kB | 485 kB | 0.2 kB |
| `/theory/bite` | 1,451 kB | 486 kB | 0.2 kB |
| `/people` | 1,121 kB | 484 kB | 0.2 kB |
| `/gallery` | 1,543 kB (854 kB images, 6 of 169) | 480 kB | 0.2 kB |

Before: about 2.2 MB of script uncompressed on every visit. Text is 2,856 kB raw and 631 kB as brotli.

- **Chunks** have honest names: `evidence` (the records), `theory-text` (the chapters and storyline),
  `archive-data` (people, places, timeline, the rest), `vendor`.
- **The chapters cannot be loaded late** without changing `src/data/store.ts`: it imports `theory.ts` at module
  level and every page imports the store. Left as it is; see "For the orchestrator".
- **Fonts:** three faces are preloaded (display, text, interface); the mono and the italic load when used.
- **Images:** every image has its size reserved (layout shift from late pictures is zero), is decoded off the main
  thread, and is lazy. Figures in running text use native lazy loading (they must print); image walls (the
  gallery, people thumbnails) fetch only when the frame comes near the window: the gallery fetches 6 of 169.
- **First paint:** the first page of a visit no longer fades in, and the loading area is a screen tall, so the
  footer does not jump when the page arrives: layout shift 0.22 → 0 to 0.02.

## 5. The two reviews

### Desktop review (`review/review-desktop.md`, 53 numbered findings)

Fixed, with the check that proves it in `tools/t-review.mjs` (99 checks) unless another tool is named:

| # | Finding | What was done |
|---|---|---|
| 1 | Navigation over the search box | Header fits by measuring (`t-header.mjs`) |
| 2 | Home eras collapse to a one-letter column | Date under the name; the list is measured (container query), not the window |
| 3 | People search loses letters | The shared address layer; 20 words at 30–250 ms a key under 4× and 6× CPU throttle, all intact (`t-mobile.mjs` E) |
| 4 | Jump links leave focus behind | A landing on an anchor moves focus to it |
| 5 | Back restores scroll but not focus | Focus marks per history entry (`shell/focusMark.ts`) |
| 6 | Image opened from the drawer: Escape closes both | Dialogs ignore events from dialogs inside them |
| 7 | Focus dropped to `<body>`; settings panel stays open | Fixed in all four places; the panel closes when focus leaves |
| 8 | "Why this date?" cut off | Unclamped; the popover scrolls if it must and never covers its anchor |
| 9 | Larger browser font breaks header and rows | Breakpoints in em everywhere; `useMediaQuery` converts px to em |
| 10 | Typographic apostrophe finds nothing | Search folds quotes and accents |
| 11 | Palette announces nothing | `role="status"`, grouped options, no empty listbox |
| 12 | Printing | `styles/print.css`: paper theme, no chrome, sources opened (`t-print.mjs`) |
| 13 | Visible label missing from accessible names | Names start with what is shown |
| 14 | One amber glyph for four scales | Dates use square, uncoloured glyphs; chip glyphs are grey; amber round marks mean firmness only |
| 16 | Home first screen | New hero |
| 17 | Date pills open on focus | Open on press |
| 18 | Best match not first | Scoring rewritten (see mobile 7) |
| 19 | Back does not close overlays | Every modal is a history entry (`overlayEntry.ts`, `t-overlays.mjs`, 54 checks) |
| 21 | Tabs and segmented keys | Implemented |
| 22 | Skip link lands before the chapter list | Article first in the document |
| 23 | Drawer labels, focus, 400% zoom | Fixed; short-window layout |
| 25 | "Record" means two things | A person's folded entries are "figures"; "record" means evidence only |
| 26 | Keys missing where marks are used | `MarksKey` on the timeline and on a person's ties |
| 30 | Era columns headed by bare numbers | An era key row under the locations header |
| 31 | Titles and headings disagree | Titles carry their kind ("William Afton · Person · …"); every page has one h1 |
| 33 | Record page prints the data's own words | Labels in words; no raw precision values |
| 34 | Tables named "Table" | Named after the heading they stand under; stacked on narrow columns |
| 35 | Figures: caption read three times, enlarged past size | Caption describes the image once; 1.25× cap |
| 36 | Text size changes little | Scales the root font size; 35 kinds of text measured at three sizes (`t-mobile.mjs` D) |
| 37 | Nothing shows a page is on its way | A progress line after 300 ms, `aria-busy` |
| 38 | Forced colours | Rules added |
| 39 | Dates written several ways | `longDate()` everywhere, `<time datetime>` |
| 40 | Evidence pickers open on focus | Open on press or ArrowDown |
| 41 | Very small type | Citation numbers never under 10px; on a phone sentences are 14px or more |
| 43 | Compare block 11px wider | Aligned |
| 45 | Orphans in grids | Home figures and exhibits divide evenly (2, 3 or 6; 2 or 4) |
| 46 | Timeline Key runs off the edge | Shared key popover, kept inside its container |
| 47 | Read chapters lose their mark | Tick and mark both shown, both in the name |
| 48 | External links | `ExternalLink`: an arrow, and "(opens in a new tab)" for screen readers |
| 50 | Failed image | Failed-image state |
| 51 | `aria-controls` on closed menus | Only while open |
| 52 | 400% zoom | Death lines wrap; short-window layouts for the drawer and viewer |
| 53 | Home and End in search | Left to the field |

Partly done:

| # | Finding | Done, and left |
|---|---|---|
| 20 | What Back undoes is not predictable | One rule now: filters replace, a step the reader would call "going somewhere" pushes, overlays are steps. `/community` still keeps only one open row in the address (see declined). |
| 24 | Web lines only by mouse | Escape clears a choice; the hint says the list below holds the same ties. Lines are not made focusable. |
| 27 | Meanings only in tooltips | "Record: title" names; sources named in full in the drawer and in the phone filter sheet. Game codes in dense rows still expand on hover only. |
| 28 | Long lines | Era summaries and row claims capped at 76–80 characters. Source-page rows at 1440px still run long. |
| 29 | Pinched columns above 900px | Home steps and people rows use container queries. The cover figure's caption at 900–940px is still narrow. |

Declined:

| # | Finding | Why |
|---|---|---|
| 15 | 102 machine-made names | Data: `store.ts` builds them from ids (`titleCase(id)`). See "For the orchestrator". |
| 20 (part) | `/community` forgets all but one open row | Several open rows in the address would change a parameter cluster D documents; the cost is a reload losing extra open rows. |
| 32 | A link with an unknown id in a parameter is ignored silently | A notice for every bad parameter value on every page is a lot of surface for hand-typed addresses; unknown pages, chapters, records, people, places and sources do get the shared not-found page. |
| 42 | `/dev/*` pages are live | They are the fixtures the QA crawl uses; `noindex` is already set site-wide. |
| 44 | Very wide windows leave space | The measure is the design; widening it makes the prose worse. |
| 49 | Literal asterisks in Scott's statements | Data (the UI already italicises well-formed pairs). |
| 26 (part) | Rename "Strong" | The short form is used where the long one cannot fit; the key now travels with the marks. |

### Mobile review (`review/review-mobile.md`, 37 findings: 11 major, 21 minor, 5 polish)

Every check named below is in `tools/t-mobile.mjs` (97 checks, real touch events, 390×844 at 2×, with CPU and
network throttling where the finding needs it).

| # | Rated | Finding | What was done |
|---|---|---|---|
| 1 | major | Back leaves the page for every overlay | Every modal is a history entry: Back closes the menu, search, a sheet, an enlarged image, and nothing else. An image over the drawer closes alone. (`t-overlays.mjs`) |
| 2 | major | No menu or search once you scroll | Under 900px the header is 48px, slides away on the way down and returns on the first move up. Pinned bars sit under it while it shows. Only a move by the reader's own hand brings it back; a landing made by the site does not. (A) |
| 3 | major | First screen of home offers nothing to tap | "Read the story" starts on the first screen at 390×844 and 360×740. (J) |
| 4 | major | Story has no end; "14 more beats" starts at beat 1 | End card with the way on; the link continues at the first beat not shown on home. (J) |
| 5 | major | Wide tables hide or clip | Stacked labelled blocks; 29 tables at 390 and 360px. (C) |
| 6 | major | Reload returns to the top; Continue opens at the start | Landings hold until content and fonts are in; six throttled cold reloads return to the same lines. The place in a chapter (the paragraph at the top of the window) is noted; Continue on the cover, on home and in the menu returns to it. (F) |
| 7 | major | Search cannot answer a question | Stop words dropped, endings folded, chapters found by their whole text and ranked by where the words are, a fallback to "some of the words", the chapter's question as the second line, two-line rows, a last row into the evidence locker. "bite of 87" puts November 1987 first. (H) Aliases ("Henry") need data. |
| 8 | major | Text size changes part of the site | Root scaling; home, chapter head, captions, "What pushes back", tables, the drawer, record, person, timeline and locker text all grow. (D) |
| 9 | major | Nothing for 2 to 3.5 s | Immutable caching and brotli (section 4); no fade on the first page; no footer jump. Splitting the data needs `store.ts` (orchestrator). Writing the head of each page into the HTML is not possible with hash routes: the server never sees the route. |
| 10 | major | Citation numbers small and close; drawer does not say which opened | A marker on its own is a target of 24px or more each way; the drawer is headed "Source 18 of 35" and its arrows step through the page's sources in order. (I) |
| 11 | major | People filter loses characters | See desktop 3. (E) |
| 12 | minor | Next chapter is screens below the argument | Offered where the argument ends; first in the pager; bar arrows 44px, 8px apart; words beside the marks in "Read alongside". Not done: "Next" and minutes left in the pinned bar. (L) |
| 14 | minor | Citation every 19 words; picture under the wrong beat | See section 3. Confidence and "Argued in" stay on separate lines: the chapter links are rows a finger can hit. |
| 15 | minor | Home is 19 screens | 9,800px (about 12 screens): questions and findings fold, eras are names and dates. |
| 16 | minor | Cover: long "How to read it", 20-screen contents | Folded; questions only by default on a phone. |
| 17 | minor | Reading settings buried in the menu | Their own button in the header while there is room (from 390px wide; narrower phones keep them in the menu). |
| 18 | minor | Drawer: no next, wrong label, Back forgets | Next and previous from a number; labels by context; a related record adds a history step, so Back returns to the record before; the sheet pulls down by its bar. (I) |
| 19 | minor | "Records cited" lands under the bar; Back leaves | An anchor link; lands clear of the bar; Back returns to the head of the chapter. (L) |
| 20 | minor | Game codes as labels | Source named in full in the drawer and the phone filter sheet. Rows of code chips on person pages still open the drawer to step through. |
| 21 | minor | A third of characters are 11–13px | Under 40em the two smallest type tokens go up a step: sentences 14px, labels 12px. |
| 22 | minor | Small or touching targets | Record rows are one target; footer, chapter-head and credit links are 40px. |
| 23 | minor | Timeline: dead chevron, cut names, look-alike marks | Chevron passes taps through; names wrap; dates have their own glyph shape. |
| 25 | minor | Gallery viewer small, no swipe | Full width on a phone; a flick changes the picture, a pull down closes. Thumbnails: see orchestrator. |
| 26 | minor | People matches behind the keyboard | Tapping the field brings it to the top; the count sits under it; the key steps aside while typing. |
| 27 | minor | Controls at 15px | 16px or more on touch screens. (N) |
| 28 | minor | Text under the notch in landscape | The page margin is never less than the safe-area inset; the drawer clears the right and bottom insets. |
| 29 | minor | Five different bare not-found cards | One `Missing` page with the list, a search already filled in, and the front page. (N) |
| 30 | minor | "With a screenshot" hidden | With the first filters. Thumbnails on rows: declined (full-size files; see orchestrator). |
| 31 | minor | Essays end without a way back | Each ends with "Read the story" and "The full case". |
| 32 | minor | Family tree and web gaps | The "wider than the screen" line is above the picture, with a shadow at whichever edge has more. Not done: list open by default (it doubles the page), a label on every disc (they are dropped only where they would collide). |
| 33–37 | polish | Palette wording, see-through bars, counts, raw ids, no Home | All done. |

Declined, mobile: 13 (paragraphs of 25–42 lines) is content. 24 (Locations asides): rows are already whole-row
links; the aside is the words for a dashed end. From the ideas list: "Next" in the pinned bar, tap a confidence
mark for its meaning (the marks sit inside links; the chapter head already says the meaning in words), the
story on its own page (a route change the content agents should weigh in on), offline reading.

## Addendum: the rewritten people data, names and aliases

`ws/theory` was merged into `ws/ui-final` (`git merge --no-edit ws/theory`, merge commit `866ba26`): 166 people
(57 descriptors, 56 names that start with a small letter), 78 aliases (57 with a mark), 78 relations (38 with the
tie in the records' own words), 1,046 records. No stub people remain. Handbook: `DESIGN.md` section 19.

| Addendum item | What was done |
|---|---|
| 2. Names in a title position | One helper, `entityName(id, alone)` in `components/names.ts` (`capitalise` for a string already in hand). Used for the h1, breadcrumb and document title of a person page, register rows and the figures folded into them, the minor index, tree boxes, the web's names, options and screen-reader names, chips everywhere (`EntityLink` chip), search results, the timeline's person and killer chips, the evidence picker. The italic that marks a descriptor is kept (and the minor index now has it too). A canon name that begins with an article ("the Cassette Man") takes the capital and stays upright. Lists sort and index with articles aside (`sortName`); before, everything with "the" would have filed under T. |
| 2. `{{id}}` at the start of a sentence | `RichText` gives the printed name a capital where the token opens the text or follows `.`, `?` or `!` (with any closing quotation mark after it). Citation markers, an opening quotation mark or bracket and emphasis marks in between do not count; "Mr.", "c.", "vs." end nothing; bold and italic pass on whether they stand where a sentence starts. `plainText` (titles, excerpts, search text) follows the same rule. `/dev/blocks` has a section, "Names where a sentence starts", with every case in a paragraph, a list, a table and a caption. |
| 3. Tree boxes must size to their text | **Not reproduced: they do.** A box is a grid item sized by its text, and the rows of the grid are measured after layout. `t-people.mjs` C checks every name and role line against its box at 5 widths × 2 text sizes × 4 trees (700 boxes): none leaves its box, including "the franchisee of Pizzeria Simulator" and "the salvaged rabbit of Pizzeria Simulator". The screenshot `integ4/1440-family.png` is cut by the window's lower edge through the third row, which is what looks like a role line pushed out. A related fault was real and is fixed: on a phone, when the reader changed the text size with the page open, the boxes grew and the lines did not follow (they were measured again only when the frame's width changed). The tree now watches its boxes (`ResizeObserver`). |
| 3. "The games never name this person" | Under the name of every descriptor: "This is the archive’s descriptor; no game prints it." Directly below, each other name on a line of its own with its mark ("William Afton (the credits)", "Scraptrap (Scott’s guide)"). The block sits under the h1 so that a reader who arrives from a search for "Scraptrap" sees it at once; the "Name" fact lower down is gone for descriptors (it said the same). All 57 descriptor pages checked. |
| 3. The `emily` group | "The Cassette Man’s household" (`GROUP_LABEL`); the register prints no blurb for a group beyond its counts. |
| 3. Aliases with provenance | `aliasParts(alias)` splits the name from its mark. An alias is never shown without its mark, and never searched by it. On the person page: one per line, the mark quieter. Long ones wrap (checked at 320px). |
| 3. Search by alias | The People register, the search palette, the evidence picker and the evidence locker's text search all find a person (or the records filed under them) by any alias. Every one of the 78 aliases was typed into the register and the palette: each finds its person. A result found by an alias says which: the palette puts it first under the name, the register adds a "Match" line ("Glitchtrap (Scott’s working name), a name for the rabbit in the code"), the picker an "also" line. "shadow bonnie" → The dark rabbit; "glitchtrap" → The rabbit in the code (in the register, on the row of William Afton, into whom the model folds it, highlighted); "phone dude" → The attraction’s caller. |
| 3. A name the archive does not use | "henry", "emily", "charlotte": nobody, in the register and the palette, and the palette's spelling correction does not put them right to another name. Both say "The archive uses only names that the games print or speak" and link to `/method#names` (an anchor added to the paragraph that says so; the prose is untouched). The locker says the same when a word finds no record. "charlie" names nobody; the palette does list the one record in which Scott uses the word. |
| Schema: `Relation.says` | A tie is printed in the records' own words where the data gives them (`tieSaid`): by its first end on its own page ("Calls William Afton “old friend”"), whole on the page of the second, and in the trees' lists, the web's list, the tie panel and the record page. A figure folded into another by such a tie is described in those words under its name and in the identity tree ("This figure is read as something left behind by William Afton"), in place of "a form of". All 38 checked on both people's pages. |
| Schema: `when.kind` | A record's date pill takes its kind from the data where it has one (117 records; for 70 the precision alone said something else). |

**Found on the way, and fixed.**

- *The web's names were laid out at sizes it carried itself* (11 and 12px). The phone type floor of this phase raised
  the tokens they are drawn in, so on a phone each name was about 9% wider than the layout had measured. With
  the old data nothing collided; with the new data a name left the picture at 320px (cluster C's `web-check`).
  The layout now reads the sizes from the tokens (`tokenPx`, `useTypeScale`), and follows the reader's text size.
- *One disc of the web could not be reached with the arrow keys* at 320px (cluster C's `web-reach`): "the nearest
  disc that way" left it stranded. `arrowMoves` now puts that right for any layout: every disc is reached from
  every other. Page Up and Page Down still step through everyone.
- *The People search compared text with its marks and with plain quotes only.* It now folds accents and both kinds
  of apostrophe (a phone types the curly one), as the palette does.

**After the merge: what the new text did to the other pages.** The merge also brought longer era summaries
(the first went from 376 to 573 characters; on a phone they now run to 9 to 15 lines, where they had run to 6 to 9)
and longer era ranges (up to 101 characters). I looked at every main route at 390 and 1440 with the new data
(contact sheets `final/shots/add-phone-*.png`, `add-desk-*.png`) and ran every suite. Two things needed a change,
both in commit `51d612d`, which is **not yet in `ws/integ`**:

- *The timeline's first screen on a phone no longer showed an entry.* Cluster A's own check ("390: first screen
  shows the era bar, the first era and its first event") failed: the first row had moved from 732px to 848px on an
  844px screen, behind a 13-line summary. A summary of six lines or more now shows four on a phone, then a quiet
  button, "Read the rest" ("Show less" once open). Whether a summary is long is measured, so the answer follows
  the screen's width and the reader's text size; one that would lose a line or two is left whole; the whole text
  stays in the page for a screen reader and for find-in-page; a link in the hidden part that takes focus opens
  it; "Show less", pressed at the foot of a long summary, brings the era's heading back into view. On a wide
  screen and on paper a summary is whole. First row now at 675px. Check: `tools/t-erafold.mjs` (20 checks: 390,
  360 and 320 wide, text size changed with the page open, 700 to 1440 untouched). Handbook: 19.6.
- *A date tag of two or three lines* (an era's range on a phone, a place's dates) carried its glyph half-way down
  the tag; it now sits beside the first line. One-line tags are unchanged.

- *Back pressed while the page glides landed off its line when the machine was busy* (commit `23b62c7`, also
  **not yet in `ws/integ`**). This is the mobile review's finding again, and the fix of the final phase held only
  on a fast machine: when other work loaded this one (load average 14 on 8 cores), `t-mobile` F failed two of its
  three timings, and a trace (`tools/probe-glide.mjs`) showed why. (1) "Is the page gliding" was asked once the
  page stepped to had been drawn, by which time the last scroll event heard was older than the 200 ms that count
  as gliding, so the page was placed without being held, and glided on. The moment the step began could not be
  had from the scroll manager's own `popstate` listener: on `window`, Chromium runs those listeners in the order
  they were added, capture or not, and the router draws the page from inside its own. `shell/stepClock.ts` adds
  one when the module loads, before the router's. (2) The hold was 120 ms of time; what does the gliding hears
  of it only when a frame is drawn, and a busy page drew none for longer. The hold now lasts until two frames
  have been drawn as well. Under 20 busy loops, 24 runs each: before, 18 landed on the line, 2 within 30px and 4
  further off; after, 24 on the line. Chromium's CPU throttling does not show the fault (it slows timers and
  frames together); real load does. Handbook: 19.7.

Seen and left alone: the era index prints the same ranges, which wrap to as many as five lines in the desktop
rail (the rail is 678px tall and scrolls inside itself in a window under about 770px, as it was built to). A
three-line limit there would cut the murders era's range only; I did not make that call for the data.

Two expectations in the test copies were out of date and are corrected there, with a comment: `a/flows.mjs` named
"William Afton" and "Michael Afton" on filter chips (the second is now printed "Michael": the suite stopped at
that line), and now reads both names from the data and matches a chip whole; `t-mobile.mjs` looked for the old
alias line's class. `t-mobile.mjs` also waited a fixed time after changing the address in two of its sections;
on the loaded machine it then measured the page before. It now waits for the page (`go()`).

**For the fact-checker** (fixed text added in this round): "This is the archive’s descriptor; no game prints it."
(`PersonDetail.tsx`); "The archive uses only names that the games print or speak." and "How the archive names
people" (`People.tsx`, `SearchPalette.tsx`, `EvidenceExplorer.tsx`); "Match" and "a name for" (`People.tsx`);
"also" (`People.tsx`, `explorerParts.tsx`); "This figure …" before a tie's own words (`PersonDetail.tsx`);
"Read the rest" and "Show less" (`Timeline.tsx`). The Method page's prose was not touched: one `id="names"` was
added to the paragraph the links point at. Whoever rewrites that paragraph should keep the id on the paragraph
that says how the archive names people: three empty states link to `/method#names`.

## 6. QA record

Everything below was run on the final commit, `3b76ec5`: the four checks and the crawl on `npx vite build` +
`npx vite preview` (port 5191), the suites on the same build served by `tools/serve.mjs`. Logs: `final/suites/b35/`
(and `b34/` for the run on the commit before, which gave the same results).

| Check | Result |
|---|---|
| `npx tsc -b` | clean |
| `npx tsx scripts/validate.ts` | `OK` (1044/1044 records accounted for) |
| `npx oxlint` | clean, no warnings |
| `npx vite build` | clean, no warnings |
| `scripts/qa.mjs --axe --widths 1440,768,390`, night, on `vite preview` | 126 checks (42 routes × 3 widths): 0 console errors, 0 overflow, 0 axe violations (`final/qa/report.json`) |
| same, `--theme paper` | 126 checks: 0, 0, 0 (`final/qa-paper/report.json`) |
| Cluster A: `flows` (101 checks), `anchor-check`, `key-check`, `axe-states` | all pass; `axe-states`: 88 runs, 0 violations (it found the key regression above on the run before) |
| Cluster B: `t-logic`, `t-explorer`, `t-keys`, `t-sources`, `t-gallery`, `t-address`, `t-race`, `t-odd-links`, `t-crisp`, `t-axe`, `t-axe-zoom`, `t-lightbox-*` | all pass; no violations |
| Cluster C: `interact` (29), `tree-check`, `web-check`, `web-reach`, `web-touch`, `axe-open` night and paper | all pass; strict axe (16 states, folds open, best-practice rules): no violations in either theme |
| Cluster D: `interact`, `states` (44), `keyboard`, `taprow`, `axe --best` | `interact` 215 passed on a dev server (see below); `states` 44; keyboard, tap-row pass; axe clean in every state |
| `t-mobile.mjs` (mobile review) | 97 passed |
| `t-review.mjs` (desktop review) | 99 passed |
| `t-overlays.mjs` (Back and overlays) | 54 passed |
| `t-journey.mjs` (keyboard-only journey, then reduced motion) | 36 passed |
| `t-address.mjs`, `t-scroll.mjs` | 25 and 17 passed |
| `t-header.mjs` | 774 widths (320 to 1600 in 10px steps; browser fonts of 16, 20 and 24px; normal and large text), 0 problems |
| `t-print.mjs` | a chapter prints: paper, no chrome, numbered citations, its three images, sources open |
| `t-delivery.mjs` | section 4 (home: 775 kB first visit, 0.2 kB on return) |
| `tokens-crawl.mjs` | 172 routes and the palette: no raw token |
| `t-cascade.mjs` | 132 same-specificity pairs in the shared stylesheet, none accidental |

Expectations changed in the copies of the clusters' suites under `final/tools/{a,b,d}` (each change follows a
deliberate change of behaviour, and is commented in the file):

- A `flows.mjs`: the text-size setting now scales the marks as well as the words.
- B `t-explorer.mjs`: option names start with the visible code; the applied-chip name; cards in the sheet.
- B `t-keys.mjs`: a picker opens on ArrowDown, not on focus; the view switch is one Tab stop.
- B `t-sources.mjs`: unknown source and record pages are the shared `.missing` page.
- D `interact.mjs`: the Box essay's title; dates read from `time[datetime]`; the four accounting scenarios now
  start from the cited count alone, as their comment says they do. They also passed through what the real data
  files and sets aside; in the merged data that is 382 records, every one the chapters do not cite, so no
  scenario could leave a record unplaced. `coverage.ts` itself is untouched.

Cluster D's `interact.mjs` has 18 "accounting" checks that replace `/src/...` modules in the browser, so they
can only run against a dev server. Against the production build its other 162 checks pass and those 18 cannot
run; against `npx vite` on 5191 at the final commit: 215 passed, 0 failed (`suites/b35/d-interact-dev.log`).

**Keyboard-only pass** (scripted, `t-journey.mjs`, no pointer at any step): home → skip link → "Read the story" →
a beat's chapter → the first citation → the drawer ("Source 1 of 35", focus on the title, arrow keys step) →
"Open the full record" → Back (the chapter, same lines, drawer open again) → Escape (focus back on the citation)
→ Ctrl+K, a name, Enter → `/` → the evidence locker → a source filter with Space → a result → the drawer →
Escape → the timeline → Filters → a filter with Enter → an event with Enter. Every stop has a visible focus ring
and is on screen.

**Reduced motion:** motion tokens are zero; a page, the drawer, the menu and the image viewer arrive with no
animation running; the header leaves at once; anchors land.

## For the orchestrator

**To take from this branch.** Two commits are not in `ws/integ`. Each merges into `ws/integ` (`6b0819a`) and
into `ws/ui-fin` (`16c5e65`) without a conflict, and each can be cherry-picked alone.

- `51d612d` (three files: `pages/timeline/Timeline.tsx`, `pages/timeline/timeline.css`, `styles/richtext.css`).
  If the timeline is reworked first, the part to carry over is small: the `EraSummary` component, the one line
  in `EraSection` that calls it, eight lines of CSS, and one rule for `.date--tag .firm-glyph`. Without it, the
  timeline's first screen on a phone shows no entry (the check "390: first screen…" in `a/flows.mjs` fails).
- `23b62c7` (two files: `components/shell/ScrollManager.tsx`, and the new `components/shell/stepClock.ts`).
  Nothing else in the tree touches them. Without it, Back pressed during a glide lands 30 to 90px off on a slow
  phone.

**Shared files that others now read.** `DESIGN.md` gained 19.6 on 3 October at about 17:20 and 19.7 at about
19:15; a copy made before that lacks them. In `final/tools/`, `a/flows.mjs` and `t-mobile.mjs` were corrected
(see the Addendum); `own.sh`, `axes.sh`, `sheet.mjs`, `t-erafold.mjs` and `probe-glide.mjs` are new. Nothing else
there changed in this round.

**Running these suites while other work loads the machine.** Several checks are about timing (a Back pressed
30 ms into a glide, a landing held for 120 ms). At a load average of 14 on 8 cores they took two to four times
as long; with `23b62c7` and the waits corrected in `t-mobile.mjs` they pass there too. A check that still
fails only under load is worth a trace before it is called flaky: this one was a real fault.

**Data** (things that would improve the site and that the UI cannot do):

1. **Splitting the data** (mobile 9, brief section 4). `store.ts` imports every record and every chapter at module
   level, so every page waits for all of it: three data chunks of 1.31 MB, 0.47 MB and 0.38 MB (217, 93 and
   93 kB as brotli) with the merged data. Loading a chapter's text and its cited records on their own needs the
   store to expose loaders.
2. **Image weights** (mobile 25, 30). There is no thumbnail pipeline: the gallery's 171px tiles load the full
   files. (`BRIEF-fin.md` item B takes this up.)
3. **Long paragraphs** (mobile 13). The rewrite shortened them: by an estimate from the text (41 characters to
   a line at 390px) two chapters still have a paragraph of more than 20 lines on a phone, where twenty had; the
   longest is the opening of chapter 1, about 35 lines.
4. **Literal asterisks** in a few records (desktop 49).
5. **`freddy-in-space-2`** is listed as a source and has no records. The sources page says so.
6. **`homeHeadline`**: `data/home.ts` may export one; until then "One story, from the evidence up." stands.
7. **The locker's text search reads the notes field**, so `/evidence?q=henry` finds one record and
   `/evidence?q=charlie` one (Scott's own use of the word). People, the palette and the picker find nobody for
   either, as designed. If the locker should not answer to those words, the notes need rewording; the search is
   doing what it says.
8. **Era ranges** are now sentences (up to 101 characters). The pages hold them; the era index is the place
   where shorter ones would read better.
9. **Ideas left on the table** from the mobile review: the story on its own page (`/theory/story`), "Next" and
   minutes left in the chapter bar, offline reading.

Resolved by the rewritten data since the first version of this list: minor people have real names (no stub
people are generated; `store.ts` still makes a name from an id for a person a record names and `people.ts` lacks,
and such a name would be wrong in the way the old ones were); aliases are in the data and every one finds its
person; nothing is labelled "partner".

**The group key `emily`.** It is named in three places outside the data: `GROUP_HUE` and `GROUP_LABEL` in
`components/palette.ts`, and `GROUP_ORDER` in `pages/people/People.tsx`. All three are typed by
`Person["group"]`, so `tsc -b` points at each of them when the key is renamed.

**The fourth review** (fixed text) had not arrived when this was written. The Method page's prose is untouched;
the sentences this round added are listed at the end of the Addendum.

Nothing in the UI depends on a display name or a fixed count: counts are read from the data where they are
printed, names go through `entityName`, tests take their ids and names from the data or from `facts.json`, and
`scripts/qa.mjs` reports a default route whose id has gone.

## Safari

Not testable on this host. Used, and believed supported by Safari 16.4 and later:
container queries, `<dialog>` and `showModal`, `color-mix()`, `:has()`, `text-wrap: balance`,
`scrollbar-gutter` (ignored where unsupported, harmless), `behavior: "instant"`, `overflow: clip` (with a `hidden`
fallback written before it), `line-clamp`, `env(safe-area-inset-*)`, the Popover API (17.0; popovers fall back to
in-flow where it is missing).

Unsure, worth a look on a real iPhone:

1. **Ending a glide before a landing.** `overflow: hidden` on `<html>` for 120 ms stops momentum scrolling in
   Chromium. iOS may ignore it; the worst case is the old behaviour (Back pressed mid-glide can land a little off).
2. **The header's return.** It relies on `touchmove` events continuing during a native scroll (they do in
   Chromium, throttled). If iOS sends fewer, the header may come back a moment late.
3. **`history.pushState` rate limit.** Safari allows 100 calls per 30 seconds; overlays and filters each make one
   or two. A reader would have to open and close overlays very quickly for a long time to reach it.
4. **`text-wrap: pretty`** is ignored by Safari (17.4 has `balance` only); lines break as usual.
5. **A flick across the drawer** uses touch events on a scrolling element; on iOS a slow diagonal drag may be
   read as a flick. The thresholds (48px sideways, 1.5 times the vertical movement) are the usual ones.
6. **Printing** from iOS uses its own engine for `beforeprint`; the print stylesheet does not depend on the event
   except to open the sources list.

## Tools (`final/tools/`)

`rebuild.sh` (build a snapshot and point the QA server at it), `serve.mjs` (the QA server: a production build,
plus the source modules some suites read), `suites.sh <label> <a|a2|b|b2|c|d>` (the clusters' suites),
`own.sh <label> [names]` (this phase's own checks, one after another), `axes.sh <label>` (the two stricter axe
passes), `facts.mts` (writes `final/facts.json` from the data).

Checks: `t-mobile.mjs`, `t-review.mjs`, `t-overlays.mjs`, `t-journey.mjs`, `t-address.mjs`, `t-scroll.mjs`,
`t-header.mjs`, `t-targets.mjs`, `t-print.mjs`, `t-delivery.mjs`, `t-cascade.mjs`, `tokens-crawl.mjs`, and from
the addendum `t-names.mjs` (the name helpers, case by case), `t-lowercase.mjs` (no name with a small first
letter where one stands alone or opens a sentence, on 94 routes at two widths), `t-people.mjs` (every alias
typed into both searches, every descriptor's page, every tie told in the records' words, tree boxes, the web),
`t-erafold.mjs` (the era summary on a phone), `probe-glide.mjs` (a trace of Back pressed during a glide),
`alias-check.mjs`.

Looking: `shot.mjs`, `shot-state.mjs`, `shot-sel.mjs`, `sheet.mjs` (contact sheets of many routes), `find-y.mjs`,
`measure-cover.mjs`. The patched copies of the clusters' suites are in `a/`, `b/`, `d/` (cluster C's run from
`c-people/tools/` unchanged). Suite logs are in `final/suites/<label>/`; the last full run is `b44`. Screenshots
are in `final/shots/` (this round's in `final/shots/add/` and the `add-*` sheets) and in `final/qa/` and
`final/qa-paper/` (every route at three widths).

## Commits

Oldest first, on `ws/ui-final` (from `d4c0736`). The last two are not in `ws/integ`.

- `60a3b5b` Data-facing fixes for the new content model
- `35593a9` One address layer for URL state, shared by every page
- `58d27d6` ScrollManager: wait for the page, honour scroll-margin-top, yield to the reader
- `f2d950c` Header: choose the layout by measuring, so nothing overlaps at any width or font size
- `1e58373` Shared layer: accessible controls, overlays in the history, search, print
- `f028bf3` Delivery: compressed text assets, immutable caching for hashed files, honest chunk names
- `8be8c64` Home: a first screen that says what this is, why to trust it, and where to start
- `137ba08` Theory: chapter sections in the rail, tables that stack on narrow columns, a story with progress and an end
- `a1f952f` Timeline: death lines wrap, the era key stays with the locations header, shared marks key
- `e8225ab` Evidence: names that start with the visible code, pickers that open on press, plain dates
- `2fd08ff` People: a key on Ties, Escape clears a selection, container-query rows, titles with their kind
- `17ed4a6` Essays: dates written out with <time>, the box essay titled, small layout fixes
- `e63c6ed` qa.mjs: every route, not-found detection, --font and --no-shots
- `83669d6` Phone shell: a header that returns on the way up, search that answers questions, one not-found page
- `f72218e` Drawer and citations: the drawer says which source opened, steps through them, and Back returns to the record before
- `9c17b09` Theory on a phone: a story told without markers, contents as questions, the next chapter where the argument ends
- `ac921fb` Home on a phone: Continue, questions and findings that open on a tap, eras as names and dates
- `70ac710` Timeline: pinned bars make room for the header, the row's chevron no longer swallows taps, sheets pull down
- `31d6bdd` Evidence: screenshot filter with the first filters, full source names in the sheet, honest source counts
- `1c059b8` People: matches show under the field on a phone; a wide family tree says so above the picture and shades its edges
- `0c4e281` Essays end with the way back into the theory
- `2d81bd8` Home: findings fold cleanly, figures and exhibits in rows that divide evenly, numbers set with their separators
- `b287b05` People: tapping the search field on a phone brings it to the top, so matches show above the keyboard
- `53beebb` Home: read the optional headline without a build warning
- `6f44131` ScrollManager: a landing made while the page still glides from a flick holds
- `eeb9791` Marks key: its two columns and width again; a popover that scrolls can be reached from the keyboard
- `3b76ec5` Drawer: a label that takes two lines on a phone breaks evenly
- `866ba26` Merge branch 'ws/theory' into ws/ui-final
- `64334bc` Names in running form: a capital where a name stands alone or opens a sentence
- `01c736f` Search: a person is found by any alias, and a name the archive does not use gets a way on
- `7539b07` People: names that stand alone, aliases with their marks, ties in the records' words
- `6d66473` Timeline and evidence: names on chips and options in title form; records found by alias
- `3314541` qa.mjs: a descriptor's page, the register found by an alias and with nobody found, a second tree
- `4bcafd8` Evidence: a word that finds no record says which names the archive uses
- `51d612d` Timeline: on a phone a long era summary shows four lines and a button for the rest
- `23b62c7` ScrollManager: Back pressed while the page glides lands on a slow phone too
