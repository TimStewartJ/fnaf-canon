**Passing state: commit `4b8cc88` on `ws/ui-text`.** It contains `ws/integ` at `a9ba6c1`. On it `npx tsc -b`, `npx tsx scripts/validate.ts`, `npx oxlint` and a production build are clean, and the crawl with axe is clean at 1440, 768 and 390 in both themes (288 visits: 0 console errors, 0 sideways overflow, 0 axe violations of any impact). One finding of the eight (26) is not live on it: its one line is in a file outside my list, and is handed over as a patch that I have built and checked.

# How the text is printed: notes

Branch `ws/ui-text`, worktree `~/src/fnaf-canon-wt/uitext`. Nothing was rebased or pushed; `ws/integ`
was merged in twice, as asked (`a01f137`, when it stood at `c3eaea7`, and `c308096`, at `a9ba6c1`). No file
outside the brief's list was changed. Everything here is in `files/ui/text/`: `tools/` (checks and scripts),
`shots/` and `forms/` (pictures), `qa/` and `qa-paper/` (the crawl), the logs beside this file, and three
patches. The handbook's section is now in the repository (`docs/DESIGN.md`, section 21, commits `ebb2f6e` and
`4b8cc88`).

**The dev server cannot be used to look at this worktree**: its `node_modules` is a link into the `integ`
worktree and the four font files come back 403. Every picture and page check was made on a production build
(`vite build --outDir /tmp/fca-uitext-dist --emptyOutDir`, `vite preview` on 5194).

This file has two parts: the acceptance read's eight findings (the second round), then the first round's six
items where they still stand as written.

---

# Part one: the acceptance read's eight findings

| # | Finding | Answer | Commit |
|---|---|---|---|
| 1 | Records print other records' ids | **Fixed.** Left on the rendered record pages: 0 of 1,064. In the drawer: 0 of 1,064. | `12511e8` |
| 9 | "11-12-1987" with nothing to say it is month first | **Fixed**, on the record's page, in the drawer and in the popover | `1624ee7` |
| 13 | A beat's date has two looks | **Fixed** in the first round | `93274c6` |
| 14 | The four tags | **Fixed** in the first round | `3933ff3` |
| 24 | "Hen and W.A.." | **Fixed** in the first round | `408edeb` |
| 25 | A quotation mark facing the wrong way | **Fixed** in the first round; now also checked in search results | `57fe94d` |
| 26 | Four large quotations open with a small letter | **Written and tested, not live.** The rule is `pulledWords` (`831e3f0`); the component is `src/pages/theory/blocks.tsx`, outside my list. One line to carry: `carry-26-blocks.patch`. | `831e3f0` + patch |
| 27 | Commas and stops drift from a group of numbers | **Fixed** for the comma. The stop's "44px" was **not reproduced**: it comes from how the reader's script measured. | `11f9071` |

## Finding 1: records print other records' ids

**What the data has.** 742 ids of other records in the text of 457 records: 452 in the notes of 319, 290 in
the date's reason ("basis") of 210, none in a claim. (When the report was written two claims had one each.
`ws/integ` has since moved both into the notes, and the validator now forbids an id in a title, a claim, a
quote or a place.) The reader's own `rawids.py` on this tree says the same: 457 records, 740 ids; it leaves
out two that name the record they stand in.

**How an id is printed now.** An id stands in such text in one of two ways.

- **Alone in a bracket after a statement: 623 ids, in 569 brackets** (516 hold one, 52 two, 1 three). That is a
  citation. The bracket goes, with the space before it, and a numeral stands against the statement, as a
  citation does everywhere on the site: it shows the record when pointed at and opens it in the drawer.
  "…the same day and month with the year hidden (fnaf1-paycheck-night5)." is now "…with the year hidden¹."
- **A word of its sentence, or in a bracket with other words: 119 ids.** "see ffps-hry223-label",
  "(secret-of-the-mimic-…, a document not confirmed in play)". There it is the record's title, as a link that
  opens the record. 67 different records are named this way; 51 titles are printed whole and 16 are cut (at
  most 72 characters, the whole title in the link's `title`).

A record is never cited or linked from its own text (two reasons name the record they belong to: no numeral,
no bracket). An id that no record has stays as written, and so do words that look like one ("end-of-night",
"11-12-1987").

**Why numerals and not titles in the bracket.** The report suggests titles as links, and the first round did
that. You asked me to look at ten real cases. I set twelve real notes three ways (titles in round brackets,
titles in square brackets inside a round one, numerals) at 1440 and 390: `forms/sheet-1440-*.png`,
`forms/sheet-390-*.png`. Titles in brackets double a note's length, run two or three titles together with
nothing between them but a comma, and read as part of the argument when they are only the reference for it
("…is the slumped yellow bear (The yellow bear in the FNaF1 office is a slumped, eyeless figure, Golden Freddy
in the office/hallway), and that bear first becomes active on this night (By the wiki’s activity tables,
Golden Freddy is inactive until Night 6)."). The square-bracket form broke a quotation in one of the twelve. Numerals are what
the reader already knows from every chapter, and the note reads as its author wrote it.

**Where.** One component, `<RecordText>`, prints the claim, the reason and the notes on the record's own page
and in the drawer (which is the sheet on a phone), and the claim on a card. Where nothing can be a link the
same text goes through `recordWords()`, which gives titles for ids in a sentence and leaves a bracket of
nothing but ids out: a row's claim (the row is one link), a citation's preview, and a date's popover. The
popover lists the records its reason names under "Rests on", where they can be opened.

**Numbers on a page and in the drawer.** On a record's page the numerals are the page's own, in the order the
page prints them (reason first, then notes), and the drawer says "Source 5 of 7". The drawer is drawn outside
the page, so inside it a record's numerals count the records that record cites, and opening one says "Cited
record 2 of 5". A drawer opened from a chapter therefore shows two series: the header's "Source 16 of 39" is
the chapter's, the numerals in the note are the record's own. I could not give them the chapter's numbers:
most cited records are not sources of the chapter.

**Counted from the rendered pages, as the report did** (`tools/count-rawids.mjs`, after the reader's
`p43-allrecords.mjs` and `p46-rawids.mjs`: every record's page opened at phone width, folded parts opened,
every text node searched for the id of any known record as a whole word; only the record's own "Record id"
line is left out).

| Read | Pages that show an id | Ids shown |
|---|---|---|
| 1,064 record pages | **0** | 0 |
| 1,064 records opened in the drawer | **0** | 0 |
| 202 other pages (18 named pages, 35 chapters, 101 people, 28 places, 20 sources; `scan-site-ids.mjs`) | **0** | 0 |

On the other pages one file name has a stem that is an id (an image credit in the gallery: "see
fw-opening-put-you-back-together.png"). It names a file and is meant.

Before the second merge of `ws/integ` the first count was 9 pages, all in the rows of related records, which
print another record's claim through `explorerState.ts`. Those were the two claims; `ws/integ` took the ids
out of them, and the count on the merged state is nought without any change outside my files.

**Checked.** `t-ids.mjs`, 85 checks at 390 and 1440, all pass: twelve record pages print no id and leave no
empty bracket; the cheque's note reads without its bracket and its numeral stands before the stop; the numeral
opens that record in the drawer and the page stays; pointed at, it previews the record; two numerals in a
reason and five in a note are numbered 1 to 7; the third of the note says "Source 5 of 7"; inside the drawer
the next record's own are numbered from 1 and say "Cited record 1 of 3"; Back returns to the record before;
a title in a sentence, a title in a bracket with other words, three ids in one bracket, a record that names
itself; card, row, preview; the date's popover with "Rests on"; and with the reader's markers hidden the note
reads whole with no bracket left. `check-ids.ts` reads all 1,064 records and finds the same 742 by a scan of
its own. Pictures: `shots/g1-*.png`.

**One thing outside my files that is worth carrying** (`carry-1-explorer.patch`, optional). `ws/integ` commit
`ff193ca` made the evidence explorer's "Note" excerpt print ids as titles, after my first round's printing.
With the new printing that leaves the explorer as the one place with brackets of titles: "…is the slumped
yellow bear (The yellow bear in the FNaF1 office is a slumped, eyeless…". The patch replaces its `noteWords`
with `recordWords`, and the excerpt reads "…is the slumped yellow bear, and that bear first becomes active on
this night." The price: a search that matches only inside a cited id (for example "paycheck night5") then
lists the record with no line saying why, where today it shows the cited title. Your call.

## Finding 9: "11-12-1987" with nothing to say it is month first

The label stays as the source prints it. Beside it the day is now said in words:

> 11-12-1987 is 12 November 1987: the month is written first.

- **On the record's page and in the drawer**, under "In-universe time": a line under the date for the six
  records whose date is such figures, and a line after the reason for the 39 whose reason quotes them (32 of
  those are "FNaF2 paychecks are dated 11-12-1987 and 11-13-1987"). 45 records get a line.
- **In a date's popover**: under the label, and after the reason for a date only the reason has. That covers
  the two chips in the chapters as well.
- Dates of one month and year share their ending ("11-12-1987 and 11-13-1987 are 12 and 13 November 1987"). A
  date the label has is not said again after the reason. A blanked year is said ("11-12-xx is 12 November (no
  year is printed)"). Figures that name no day of the month (25-12-1987, 2-30-1987) are left alone.
- In these lines and in the popover a date in figures is kept on one line. A browser may end a line after a
  hyphen, and the popover had "11-" at the end of one line and "13-1987" on the next.

I used the sentence above and not the report's "12 November 1987 (printed 11-12-1987)", because the label must
stay, and a second date beside it with no word of explanation would read as a second date.

**Not mine.** The report also names one timeline entry ("The cheque for the sixth night is dated 11-13-1987")
and chapter 13. Those are sentences of the data.

**Checked.** `t-dates.mjs`, 54 checks, all pass (the line's place, text and fit on six record pages, in the
drawer, in each popover, and the fixture). `check-dates.mts`: 20 cases, and every record with such figures gets
a line. Pictures: `shots/g9-*.png`, `shots/g1-yellow-suit-*.png`.

## Findings 13, 14, 24, 25

Fixed by the first round's commits; part two says how. Checked again on the final build: `t-when` 42,
`t-tags` 58, `t-stops` 24, `t-quotes` 30, all pass.

- **13.** My second round did not touch `.beat__when`. The interface round's rule
  `.beat__when .date--inline { white-space: normal; }` is not on `ws/integ` yet. I put it into the page and
  measured (`t-when-wrap.mjs`, 12 checks): it wins over the chip's `nowrap`, and at 390 with large text no
  chip runs past the window (without it one to three do).
- **14.** "(known as Glitchtrap, Scott's working name for it)" is the data's, as you say.
- **25.** The report names search results. Checked now: the search palette (2 results), the explorer's rows
  (2), the two records' pages and the drawer all close the title, “Bad news about the FNAF movie. :(”.

## Finding 26: four large quotations open with a small letter

**The rule** is `pulledWords(text)` in `typography.ts`: `sourceWords` with an ellipsis before a quotation that
begins with a small letter, inside a quotation mark that opens it. A quotation that begins with a capital, a
figure or dots is left alone, and no ending is touched. Of the chapters' 77 large quotations it opens four,
the four the report names, and each does begin inside its sentence (`check-pulled.mts` prints the words before
each in its record: "Kizzy, ", "…lockdown. Uh...", "…but "; the fourth is cut at its record's first word).

**It is not live**, because the component that prints large quotations is `PullQuote` in
`src/pages/theory/blocks.tsx`, which is not in my list. The change is one line and one import
(`carry-26-blocks.patch`). I built the site with it in a copy outside the worktree and checked there:
`t-pulled.mjs`, 14 checks at both widths (all 35 chapters read: four quotations open with "…", the other 73
are untouched, and apart from that ellipsis every one is its record's own words to the last letter). Pictures:
`shots/26-sheet-390.png`, `shots/26-sheet-1440.png`. The kit shows the three cases on this branch.

Do not use `pulledWords` for a record's quote on its own page: text that is small by nature ("it's me") would
be marked as cut.

## Finding 27: commas and stops drift from a group of numbers

**The comma: fixed.** In "24, 28, 11" the comma stood midway between two numbers. It now stands against the
number before it, with the air after it. Measured on `/theory/november-1987` and `/theory/killer`, glyph to
glyph (`t-cites.mjs`, `measure-cites.mjs`):

| | Number to comma, before | after | Comma to next number, before | after |
|---|---|---|---|---|
| 390, touch | 2.0 to 2.2px | 0px | 3.1 to 3.5px | 5.0 to 5.7px |
| 1440, mouse | 0.8 to 1.0px | 0px | 1.5 to 1.8px | 2.4 to 2.8px |

(Five commas in four groups. The distance between two numbers is the same before and after; only the comma
has moved inside it.)

**The tap target is as large as it was, or larger.** The comma is moved by its position, not by its margins,
so the line is laid out exactly as before: every number's place and every link's box are the same to the
hundredth of a pixel (a number alone 23.7 by 33.8px on a phone; in a group 32.1, 29.1 by 37.3px). I first
did it with margins and dropped that: narrower margins brought the numbers 3px closer, and even margins that
added up to what they were moved a number by a sixty-fourth of a pixel, which was enough for a paragraph set
with `text-wrap: pretty` to break a line elsewhere. The comma now takes no pointer events, so a tap on it
reaches the number under it. Along the middle of the numbers, the strip in which a tap lands on each
number of "24, 28, 11" on a phone went from 25.75, 22 and 16px to 27.75, 24 and 16px. Each number still opens
its own record.

**The stop: not reproduced.** The report says the stop stands up to 44px from the last number. The reader's
`p38-gapmax.mjs` loops over every number and measures to the punctuation after the whole group, so for the
first number of a group of three the "gap" is the width of the rest of the group. From the last number, the
stop after a group stands 1.3 to 1.5px away on a phone and 0.4 to 0.5px on a desk, the same as after a single
number, before and after my change.

**Markers hidden.** No group is drawn, and at each of the 31 places the stop or comma stands against the word.

**Checked.** `t-cites.mjs`, 44 checks at 390 and 1440, shown and hidden, all pass. Pictures:
`shots/27-before-after-390.png`, `shots/27-before-after-1440.png` (four times and three times life size, both
themes), `shots/27-variants-*.png` (the four settings I compared).

## To carry across

Both patches apply cleanly to `4b8cc88` (`git apply`), and need this branch's `typography.ts` and
`richTextPlain.ts`.

1. **`carry-26-blocks.patch`** (`src/pages/theory/blocks.tsx`): finding 26. Needed.
2. **`carry-1-explorer.patch`** (`src/pages/evidence/explorerState.ts`): the explorer's note excerpt follows
   the new printing. Optional; see the end of finding 1 for the price.

`carry-across.patch` is the two together. With both, in a copy of the tree: `tsc -b`, `oxlint`, `validate` and
the build are clean; `t-pulled` 14 pass; the explorer's rows show no id (`scan-explorer.mjs`, 152 rows); a crawl
with axe of eight routes at 1440 and 390 (the four chapters, the explorer plain and searched, both fixture
pages) has 0 errors, 0 overflow, 0 violations.

Withdrawn from the first round's list: the search palette does not print a record's claim (it only searches
it), and the unclosed quotation in one record's notes has been closed on `ws/integ`.

## Checks at the end, on `4b8cc88`

- `npx tsc -b`: exit 0. `npx tsx scripts/validate.ts`: OK. `npx oxlint`: 0 diagnostics in 152 files.
  `npx vite build`: builds.
- **The crawl** (`scripts/qa.mjs --axe` on the production build; six runs side by side, one for each width
  and theme; `qa/` is night, `qa-paper/` is paper):

| | Routes | Widths | Visits | Console errors | Sideways overflow | axe violations (any impact) |
|---|---|---|---|---|---|---|
| Night | 48 | 1440, 768, 390 | 144 | 0 | 0 | 0 |
| Paper | 48 | 1440, 768, 390 | 144 | 0 | 0 | 0 |

- **States the crawl does not open** (`t-axe-open.mjs`, both themes, 390 and 1440): a tag's popover, the
  cheque's date, a record page with numerals in its notes, the drawer opened from one, a record's date open
  with "Rests on", a title in a note and the drawer it opens, the kit. 32 axe runs, 0 violations.
- **Page checks**, each at 390 and 1440: tags 58, ids 85, quotes 30, stops 24, when 42, dates 54, cites 44,
  axe-open 56, the kit's large quotations 4: 397 checks, all pass. (`t-when-wrap`, 12 more, puts in a rule
  that is not on this branch; `t-pulled`, 14, needs the patch.)
- **Over the data**: `check-ids.ts` OK; `check-quotes.mts`: 8,659 strings, 97 faulty by the old rule, 0 now;
  `diff-quotes.mts`: 76 of 5,024 strings with a quotation mark print differently from the old rule (I read
  every one in the first round; on the merged data the kinds of change are the same, all corrections);
  `check-dates.mts` OK; `check-pulled.mts` OK.
- The counts of finding 1 (every record's page, every record in the drawer, the 202 other pages) were made on
  the build of `16da360`. The two commits after it change `docs/DESIGN.md` only.

**What the checks do not cover.** Chromium only (WebKit cannot start on this host). The comma's shift uses
`inset-inline-start`, which Safari has from 14.1; an older one leaves the comma where it was. No screen reader
was run.

## Seen and left

- **A date in figures can still break after a hyphen in running prose** (a note, a chapter). It is kept whole
  only in the short lines about dates. Doing it in all prose would re-break paragraphs across the site; say
  if you want it.
- The stop after any raised number stands 1.4px from it on a phone. That is the site's setting for every
  citation and I left it.
- A single number's box on a phone is 23.7px wide, where the stylesheet's own comment says "at least 24px".
  It was so before this branch; noted, not changed.
- If a chapter ever shows, as an exhibit card, a record whose claim cites a record the chapter does not, that
  numeral would be one more than the chapter's source list has. No claim carries an id today, the validator
  forbids it, and no chapter has an exhibit block.
- `tools/forms-shoot.mjs` and `forms-sheet.py` made the twelve-case sheets from a switch that is no longer in
  the code. The sheets are kept; the two scripts no longer run.

---

# Part two: the first round's six items

The first round's notes as they were written are in `NOTES-round1.md`. What follows is what still stands.
Items 2 and 6 were reworked in the second round: see findings 1 and 9 above.

| Item | Commit | Now |
|---|---|---|
| 1 Tags | `3933ff3` | stands (finding 14) |
| 2 Ids in notes | `c0afc78` | replaced by `12511e8` (finding 1) |
| 3 Quotation marks | `57fe94d` | stands (finding 25) |
| 4 Two full stops | `408edeb` | stands (finding 24) |
| 5 A beat's date | `93274c6` | stands (finding 13) |
| 6 Month-first dates | `8b7c3b9` | extended by `1624ee7` (finding 9) |

## 1. The four tags

`<RichText>` draws each of the four bracketed tags as `<RecordTagMark>`: the words as written, brackets
included, in a `<span role="button" tabindex="0" class="rec-tag">` with the dotted underline that names and
inline dates carry. Hover, keyboard focus, Enter, Space or a tap opens the date pill's popover with the tag's
name and meaning. The meanings are `RECORD_TAGS` in `labels.ts`, each after a sentence of the chapter on the
rules and no stronger than it.

- A span and not a button, because a button is one box that cannot break and "(a fan wiki's account)" is 22
  characters on a line of forty.
- Inside a longer bracket the phrase alone is the marker. The same words outside a bracket are a sentence
  and stay text.
- A marker in text that is cut off (a caption held to two lines) takes no tab stop.
- In the data now: 76 exact tags (22 a transcript, 26 read from an image, 10 as described, 18 a fan wiki's
  account). `/theory/edges` and `/theory/canon-rules` have all four; `/theory/afton-house` has two.
- Not reached: a tag in text that `RichText` does not print (the timeline's two-line excerpts, an alias, a
  record's notes).

## 3. Quotation marks

`smartQuotes` read a mark from its left side alone. It now reads both sides: after a letter, a figure or
punctuation a mark closes; after a space, an opening bracket or the start it opens whatever follows; where
neither side says (the mark after `:(`) a double mark closes the quotation that is open. A single mark before
figures is an apostrophe only for a year cut to two figures ('87, the '80s).

Over 8,659 strings of the data the old rule left 97 with a fault and the new one leaves none. On a phone the
line can still break between the `:` and the `(` of that title; keeping them together would mean adding a
character to the printed text, and I did not.

## 4. Two full stops

After a chapter link or a name whose label ends in a full stop, `<RichText>` and `plainText()` drop the
sentence's own stop. A comma or three dots after the label are untouched. Four sentences in the data end this
way, all on the chapter "Hen and W.A.".

## 5. A beat's date

The chip is a `<button>`, which never takes its parent's `text-transform`, so `uppercase` on `.beat__when`
reached the plain words only. It is removed: plain words are mixed case in the chip's face, size and colour,
with no underline, pointer or tab stop. On the cover there are 10 chips and 10 plain labels. At 390 one plain
label runs to two lines ("After that restaurant closed, most likely").

## Tools

`tools/lib.mjs` (a browser at a width and theme; every page loaded afresh), `shot.mjs`, `shot-drawer.mjs`,
`shot-text.mjs`. Page checks: `t-tags`, `t-ids`, `t-quotes`, `t-stops`, `t-when`, `t-when-wrap`, `t-dates`,
`t-cites`, `t-pulled` (`--kit` for the fixture alone), `t-axe-open`. Over the data (run with `npx tsx` from
the worktree): `check-ids.ts`, `check-quotes.mts`, `diff-quotes.mts`, `check-dates.mts`, `check-pulled.mts`.
Counts: `count-rawids.mjs` (`--drawer`), `scan-site-ids.mjs`, `scan-explorer.mjs`. Finding 27:
`measure-cites.mjs`, `zoom-cites.mjs`, `sep-variants.mjs`.
