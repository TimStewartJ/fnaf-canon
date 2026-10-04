# Finishing round: notes

> **Round 2: a state that passes, 02:45.** Commit `273d8ef` on `ws/ui-fin` (the code is `2751407`; `273d8ef`
> adds two paragraphs to the handbook). On it: `tsc` on both projects, `validate.ts`, `oxlint` and `vite build`
> pass; the crawl with axe on a production build passes in night (156 of 156), in paper (156 of 156) and at
> large text at 390 and 360 (104 of 104), with no error, no sideways overflow and no axe violation. Every item
> of the second list is done; section 8 has each one. (`ws/trial` took `db3a5fa` at 01:59 and this commit at
> 02:14, as `f3af65c`, before its crawl had ended; between the two lies one commit of code, `2751407`: the
> folded list prints whole, the rail is hidden under the drawer.)

Worktree `~/src/fnaf-canon-wt/uifin`, branch `ws/ui-fin`, from `6b0819a`. Twenty-four commits, the
last `3d19b8a`; nothing merged, rebased or pushed. Nothing under `src/data/**` was edited. Port 5193 only;
production builds only (no dev server). Everything named `t-*.mjs` below is in `fin/tools/` beside this file;
screenshots are in `fin/shots/`, the crawl's in `fin/qa/` and `fin/qa-paper/`.

Round 1 is items A to H of `BRIEF-fin.md` (sections 1 to 7; what they say of commits and counts is as it stood
when round 1 ended). Round 2, the acceptance findings, is section 8.

## Contents

1. The items, one by one (A to H)
2. Small things fixed on the way (the list G asks for)
3. Declined, and why
4. What the data should change, and what someone should decide
5. Checks and their results
6. For whoever merges this
7. The first author's suites: expectations this round makes out of date
8. Round 2: the acceptance findings

---

## 1. The items

### A. The timeline says what the data says of each entry

**What was wrong.** `deaths.ts` has 23 entries; 9 are deaths (no `outcome`), 14 are not (`presumed` 4,
`not-shown` 7, `survives` 1, `branch` 2). The interface never read the field: every tag said "Death", every
count said "deaths", the page opened "43 events and 23 recorded deaths", and the filters were "Cause of death"
and "Killer".

**The words** (written down in the handbook, `docs/DESIGN.md` section 20.1):

| `outcome` | Printed | Mark | Colour | Counted as |
|---|---|---|---|---|
| none | Death | skull | tension | a death |
| `presumed` | Presumed dead | hourglass | ordinary ink | an other fate |
| `not-shown` | Fate not shown | hourglass | ordinary ink | an other fate |
| `survives` | Survives | hourglass | ordinary ink | an other fate |
| `branch` | Death in one ending | hourglass | ordinary ink | an other fate |

- The layer is "Deaths and other fates" (it was "Deaths"); its filters are "Cause" and "By", with "Anyone" and
  "Unknown or not stated". The address keeps `layer=deaths`, `cause=`, `killer=`: old links work.
- The page opens "The story in order: 43 events, 9 recorded deaths and 14 other fates across eight eras."
- An era's and a place's tally: "6 events · 1 death · 5 other fates" (a part with nothing in it is left out).
- The filter summary: "Showing 12 of 43 events, 3 of 9 deaths and 2 of 14 other fates"; unfiltered, "all 43
  events, all 9 deaths and all 14 other fates".
- A tag is the outcome, then the cause: "Survives · By a machine", "Presumed dead · Murder". The cause labels
  are the data's and were already worded to be true of a non-death.
- An entry confined to one ending carries a chip: "one ending: Walk Away (Clock Out)"; for a death in one
  ending the tag has said "in one ending", so the chip is "ending: To the Rooftop".
- The skull and the tension colour are kept for a recorded death: on tags, on the line's nodes (an event that
  tells only other fates has the hourglass), on the edge of an open entry, and in the Locations view, which now
  has three marks (events, deaths, other fates) and a legend that names the third.
- The key has two rows for the two marks: "Death. A record states it, shows it or firmly implies it." and
  "Other fate. Not a recorded death, and not counted as one. The entry says what instead: Presumed dead, Fate
  not shown, Survives or Death in one ending." I first gave each outcome a row; that made the key 215px taller
  and pushed the date kinds out of sight on a phone, and the brief asks for "as few words as now". The four
  definitions are on each mark as its tooltip, as the firmness marks have theirs, and in the handbook.
- Why one mark for four fates: I drew candidates (a dashed skull, a person, a question mark, a shield). At 12
  to 13px a dashed skull is a skull, `User` and `MapPin` already mean "a person" and "a place" on the chips
  beside it, and four pictograms would need a key of their own. One neutral mark that says "not a recorded
  death", with the word beside it wherever there is room for a word, is what a reader can tell at a glance.
- Empty state: "No entry fits every filter at once." Era index: "N entries" (it was already neutral).
- Person pages: "Fate" and "Responsible for" replace "Death" and "Deaths caused". Place pages: "Deaths here",
  "Other fates here" or "Deaths and other fates here", by what the list holds. Rows carry the same tag.

**Where.** `components/labels.ts` (`OUTCOME`, `outcomeOf`, `isDeath`, `outcomeInfo`, `countFates`, `fateWords`,
`causeLabel`), `components/icons.ts` (`DeathIcon`, `FateIcon`, `outcomeIcon`), `components/Outcome.tsx`
(`OutcomeMark`, `FateTag`), `styles/components.css`; `pages/timeline/` (`model.ts`, `Timeline.tsx`, `Row.tsx`,
`Filters.tsx`, `Key.tsx`, `Locations.tsx`, `timeline.css`); `pages/people/` (`Story.tsx`, `PersonDetail.tsx`,
`Places.tsx`, `common.css`). Commits `9649236`, `b64b251`, `c615e39`.

**Checked.** `t-timeline.mjs` reads the data (`facts-a.mts` writes `facts-a.json`) and compares the page with
it at 1440 and 390 in both themes: the opening line; every era's tally; for each of the 43 events the fates its
closed row tells (outcome, word, mark, cause, tension colour on deaths only, the tooltip), its node, the victim
of each line and the ending chips; each of the 23 entries open (tag, title, facts, date) and closed in the
layer alone; the interface's own words (no "killer", "cause of death", "deaths caused" anywhere it prints); the
filter summary under seven filters; the layer switch and the "By" group; the key; the Locations view's marks,
legend, totals and spoken sentences against the data, era by era; person and place pages for every heading
variant. 3,174 checks. I looked at screenshots of the top of the page, an open death, an open survival, the
layer alone, Locations and the key at 1440 and 390 in both themes, and the person and place pages.

**Seen on the way.** At 390px the first event row starts 20px lower than before (the tally has three parts and
takes its own line). I had added a sentence to the header saying what an "other fate" is and took it out again
to keep the header as short as it was. At 360px and under, `?layer=deaths` used to overflow sideways on an
ending's chip; it wraps now.

### B. Thumbnails

Ran the patch (`add-thumbs.py`), which applied cleanly, and reviewed it as a colleague's. Improved:

- `scripts/thumbs.py` applies the EXIF orientation, converts an embedded colour profile to sRGB (one image,
  `fnaf2-take-cake-to-the-children.png`, has a display profile), and records every image it has looked at:
  under `copies` those it made a copy of, under `as-is` the ten it left alone. The manifest is
  `scripts/thumbs-manifest.json`, not in `public/` (everything there is published).
- The validator: a copy whose image has been replaced, a missing copy and a stray copy are errors; an image the
  script has not looked at is a warning (it is served whole until the script is run).
- `FigureFrame small` reserves the copy's own size and falls back to the image if the copy fails to load;
  `Thumb` uses the copy; the viewer shows the copy the reader has just seen until the image arrives.
- A fault of its own that I found while checking crispness: an image that fills its box (`object-fit: cover`)
  was judged by the smaller of its two scales, so an enlarged pixel-art portrait was smoothed. Commit `34f38d8`.

160 copies, 2.7 MB, for 20.7 MB of images. Commit `16c5e65` (the generated files with the code).

**Checked.** `t-thumbs.mjs` (156 checks, 1440 and 390, both themes): gallery tiles, a person's row, a place's
row and an evidence card fetch from `/thumb/`; the viewer fetches from `/img/`; an image with no copy still
shows and is drawn crisp; nothing 404s; a figure in a chapter is untouched (full file, same size);
a copy that fails to load falls back. `t-print-thumbs.mjs`: the gallery, the cards and a chapter print with
every picture drawn. The gallery's 170 tiles now transfer 2,950 kB.

### C. The home page's heading over the six cards

"Six things the evidence establishes" under "The ground it stands on" became **"Six things the model says"
under "How firm it is"**. The lead under it is unchanged ("Each is marked canon, strong inference or
theory…"). Both the kicker and the heading promised a grade; neither does now, and they are true of six cards
that are all canon and of six that are all theory. The count still comes from the data (and "One thing" if
there were one). I avoided "parts" (the theory has ten parts, named two lines above) and "claims" (a record's
claim is a term here). The questions' lead says "a sentence or two": all twelve answers are two sentences.
Commit `4713d7b`. `t-home.mjs`, 36 checks.

### D. Numbers

`components/typography.ts` has the one helper: `count(n)` ("1,046") and `plural(n, one, many?)` ("1,046
records"); `numberWord` falls back to `count` from thirteen up. The essays' own `count(n, noun)` (no
separator: the Method page's "1046") is gone, the evidence pages' `count` and `records` are the shared ones,
the home page's two `toLocaleString` calls are gone, and the places that printed a number straight from a
length now go through the helper: chapter heads, the storyline, the cover, filter chips (inside `FilterChip`),
group labels, pagers, "show all N" buttons, the ledger and its spoken summary, the people register, the web,
the trees, the timeline's small numbers, the record page's stepper. Commits `7a6e38b`, `4ae9b98`, `bef3bb2`.

**Checked.** `t-count-unit.mts` (17 cases). `t-counts.mjs` reads every page of the crawl plus eight more
states, text and `aria-label`s and `title`s, for a run of four or more digits that is not a year or a number
the records quote (Steam app ids, a lawsuit's number, a code typed in FNaF4): none. It also checks that the
number of records is printed the same way on the locker, the Method page (four places), the home page (two)
and the sources page. 36 checks; the same script fails on the starting build for the right reasons.

### E. Real-world dates

On The Box and on Scott & Faith each step's date was a date pill of kind "printed" (or "estimated"), whose
help reads "The date is printed or spoken in a game or in Scott's words". Now:

- beside the row: a plain `<time datetime="2015-08-24">24 Aug 2015</time>` (a label the calendar does not
  know, "c. 2011" or "2013–2014", is plain text);
- in the open step, after the passage: the date spelled out as a small label and what it is the date of, in
  the data's words: "24 AUGUST 2015  Date of Scott's Steam announcement."; pointing at the date beside the
  row shows the same sentence. On a phone the date line is part of the row's tap target, so a tap on the date
  opens the row and with it the basis (checked with a real touch). The records behind the step are listed in
  the open step as before.
- This is a shared component, `RealDate` (`date`, `short?`, `about?`), and the three other places that marked
  up a real-world date by hand use it: the Theorists page's moments and outside links, the sources pages'
  "Released", a record's "Released". Those were already plain dates; nothing changes there to the eye.

Commit `ef19bcc`. `t-dates.mjs`, 142 checks: no pill, glyph, button or date kind in either history; a
calendar date is a `<time>` with a valid `datetime`; every step, opened, prints its date in full and its
basis, in the same words as the tooltip; pressing a date opens no popover; the other pages; the timeline
still draws pills.

**Not changed, and for the data to decide** (section 4): a record of one of Scott's statements shows, under
"In-universe time", a pill of kind "undated" whose label is the data's text "Out-of-universe statement
(posted 2015-12-18)". It claims no in-universe date, so it is not the fault E describes; but the day of the
post is inside a label, as it is stored.

### F. "How the wording was checked"

The 1,043 notes are of three shapes: an address alone (799), a sentence with no address (107), a sentence with
addresses in it (137). `pages/evidence/checked.ts` reads all three into words and named links:

- **An address is never the text of its link.** "Against a fan wiki's page *Tutorial Unit*." "the wiki's image
  *Clocksend3.jpg*", "the Wayback Machine's capture of *scottgames.com*, 7 December 2014", "a video on
  YouTube", "an item on the Internet Archive", "the Steam store page of app 319510", "a page on Game Jolt".
  The page's own name comes from the address (decoded, underscores read as spaces) and is set as the essays
  set the title of an outside work.
- A note that opens with an address opens with "Against". A sentence the data wrote is printed as written
  ("Steam News API (ISteamNews/GetNewsForApp), author 'Scott'."), with its addresses named where they stand; a
  link that follows the words that describe it is only named ("FNaF4's *Bed.png*", "720p capture on YouTube");
  a run of like links is named once ("the wiki's images *A*, *B* and *C*", "video 1 on YouTube; video 2").
  The data's " ; " between items is a semicolon as a sentence has it, and every note ends as a sentence does.
- **A note that names a fan wiki is followed by: "A fan wiki is where the wording was checked, not where the
  fact comes from."** (861 of the 1,043.)
- A fault found here: three records' whole note is an address that ends in a mark which is part of the page's
  name ("M.X.E.S.", "Foxy Go! Go! Go!", "Danger! Keep Out!"). The old reader took the mark for the sentence's
  and linked to an address one character short. A note that is one address is now that address whole.

Commit `6403c0b`. `t-checked.mjs`, 419 checks: first all 1,043 notes as the reader words them (`facts-f.mts`:
no address in the words; every address behind a link, in order; a sentence printed as written; no doubled
article; the common case), then the page on ten records of every shape at 1440 and 390 in both themes (the
words, each `href`, the new-tab arrow and its spoken words, the wiki line exactly when a wiki is named, no line
beginning with an arrow or a mark, no overflow), and a record with no note has no block.

The record's own source address ("Original: steamcommunity.com/…", in the side panel and in the drawer) still
shows the address, as a citation does. The same reader could name it in words; see section 4.

### G. Small things

**The marked section.** The rule in the code was right ("the last heading to have reached the top of the
window, where a link to it would put it") and the line was wrong: it was the document's scroll padding plus
8px, and it left out the heading's own scroll margin, which is the pinned chapter bar's height on every screen
under 1080px. There, a heading a reader had just jumped to (it lands 44px under the padding) never counted, so
**the contents sheet marked the section before the chosen one after every jump**, on phones, tablets and narrow
desk windows. At a desk with the rail a jump was marked rightly, and a heading a reader had scrolled to within
8 to 100px of the line (at the top of the window to the eye) was not. The line is now scroll padding plus the
heading's scroll margin plus 96px ("and a little under"; the same 96px the reading-place note already used).
Commit `839622a`. `t-rail.mjs`, 210 checks at 1440, 1100, 1024, 768 and 390: at the head of a chapter nothing
is marked; a jump to each section, out of order, marks that section and lands it on the line; a heading 40px
and 90px under the line is the section being read, one 108px under it is not yet; a fresh arrival on a
section's address marks it. On the starting build 64 of these fail.

(While testing this I thought I had found the page moving 24px each time the contents sheet opens. It does
not: Playwright's own click scrolls its target clear of the document's scroll padding first. A raw press, a
touch and the keyboard leave the page where it is, and `t-rail.mjs` presses that way.)

**The two side panels.** I could not tell for certain what was meant, so this is what I found and did:
(1) counts: the Method panel printed "1046 records" and "All 1046", the record page's stepper printed its
"127 of 128" straight; both go through `count` now. (2) labels: both panels were already the shared
`Facts`/`Fact`, with the same type, but the Method panel had a private copy of the panel's box with different
padding; it is now `<aside class="panel">` named by its own heading, as the record's is. `t-small.mjs` compares
the two (element, class, name, box, label and value type). Commit `5701378`. What I left: the Method panel's
values repeat their label's noun ("RECORDS: 1,046 records, one fact each"), which reads as a sentence and is
right for it; and the two pages use two words for one idea (section 4).

The rest of the list G asks for is section 2.

### H. The handbook

`docs/DESIGN.md` is `$UI/DESIGN.md` as it stood, with: a note at its head for a reader of the repository (what
`files/ui/…`, `final/tools/…`, a worktree, a branch and a commit id mean there, and what is in the repository
instead); "section 20" added to its contents line and its reading order; three class roots added to the taken
list of section 4 (`outcome`, `fate-tag`, `outbound`); and section 20, "What changed in the finishing round"
(20.1 the words for A with their rules, 20.2 thumbnails, 20.3 counts, 20.4 real-world dates, 20.5 how the
wording was checked, 20.6 outbound links, 20.7 the section being read, 20.8 smaller things, 20.9 checks).
`README.md` has a line that points at it, and its line on `deaths.ts` says "deaths and other fates (an entry's
`outcome` says which it is)". Commit `8b81c7c`.

---

## 2. Small things fixed on the way

1. **Pixel art that fills its box was smoothed when enlarged** (`Figure.tsx`, `34f38d8`).
2. **An ending's chip pushed the page sideways** at 360px and under in `?layer=deaths` (`timeline.css`).
3. **A cause the icon table does not know fell back to the skull** (`icons.ts`); it gets a neutral ring.
4. **Three wiki links were one character short** ("M.X.E.S.", two that end in "!"): see F.
5. **An outbound link's arrow could begin a line, and so could the full stop or semicolon after the link.**
   `ExternalLink` keeps the arrow in a no-wrap box behind a word joiner (`.outbound`, `5e28690`). Measured on
   widths from 200 to 420px: before, the mark began a line at 4 widths in 221 and the arrow at 16; after, 0
   and 0. The link's own words wrap as before. Every outbound link gets this.
6. **A record page's "On the timeline" row squeezed the event's title into a column one word wide** beside a
   long date in words ("The / chil / d / outs / ide" on `fnaf2-take-cake-to-the-children`). The date takes at
   most half the row and wraps (`evidence.css`, `bef3bb2`).
7. **The menu said "eight eras" in letters**; it counts them from the data. **"FNaF4's" had a straight
   apostrophe** in the menu (`nav.ts`, `86da3e6`).
8. **The home page said each date is "marked as printed, derived or estimated"**: there are six kinds of date,
   and most of the eras listed under that line are "relative". It says "marked for how it is known".
9. The gallery's spoken list of record titles is typeset like the rest (`Gallery.tsx`).
10. `scripts/qa.mjs` visits two more states (the second layer alone; an event open on a survival).
11. **A count beside a chip was broken inside the number** on a phone ("2" over "3" for 23, beside a place
    name that fills the line on the Cassette Man's page; "10" on Fazbear Entertainment's). The name wraps, the
    number keeps its width (`people/common.css`, `f6be2a6`).

**Two more that turned out to be another engineer's.** I also fixed a quotation that ends on an opening
bracket and closed with an opening mark (“Bad news about the FNAF movie. :(“, in two records' "Where exactly";
`typography.ts`, `e30b8b9`) and "See Hen and W.A.." with two full stops where a sentence ends on a link to that
chapter (four places; `RichText.tsx`, `60b5efe`). Then, looking for where the brief's remark about the two side
panels came from, I found `MSG-fin-round2.md` in the notes folder. I have not started on it (it had not been
sent, and it opens with a merge, which my brief forbids), but it says that another engineer owns how the
data's text is printed, names these two faults as theirs, and asks me to stay out of those two files. What
I did about it, in order, because the history shows all three steps:

1. I took the two changes out (`11dc772`) and out of the handbook (`83fcdc2`).
2. I then saw that the branch had already been merged into `ws/trial` at `2925f27`, with the two changes in
   it, and that the merge had kept the other engineer's versions of both files. Taking mine out made the
   branch differ from the merged commit in exactly those files: a conflict at the next merge (tried in memory
   with `git merge-tree`: conflicts in both).
3. So I put the two files back as they were at `2925f27` (`3d19b8a`). The branch now differs from the merged
   commit only in `docs/DESIGN.md`, and merges into `ws/trial`, `master` and `ws/integ` without conflict
   (tried the same way). The live fixes are the other engineer's; nothing of mine needs carrying across.
   `fin/patches/README.md` says the same, with the two commits as patches and their test.

Item 11 and these two are polish notes of the earlier acceptance read (`accept/notes.md`), which I read for
the same reason. The second message lists item 11 under "check, and fix if real": it is real, and fixed.

## 3. Declined, and why

- **A mark for each of the four other fates.** See A: not told apart at the size, and the words are there.
- **Renaming the address's `layer=deaths`, `cause=`, `killer=`.** Old links would break for no reader's gain.
- **A plain-English lead-in for sentence-only notes in F** ("Steam's news API:" before the data's sentence). It
  would need the interface to guess the kind from free text, and a wrong guess is a false statement about how
  a record was checked. The data's sentences already name the thing.
- **Naming "Original" in words** (the record's own source address). Not asked; a citation's address has a use.
  Ready to do with the same reader if wanted.
- **Changing the reading-place note** (`useNotedPlace`) to count the scroll margin too. It is tested by the
  first author's suites and returns to the same lines either way; I gave its 96px a name and left it alone.
- **One vocabulary for the accounting** on Method and on the evidence pages: see section 4; it is wording
  someone chose, not a fault.

## 4. What the data should change, and what someone should decide

For the data's owner:

1. **`d-arnold-crash`**: its `victimLabel` says "presumed dead; not shown" and its `outcome` is `not-shown`.
   The page prints "Fate not shown" beside a label that says "presumed dead".
2. **The four `presumed` entries' labels say "death implied, never stated"**, and the header's definition of a
   death is one "a record states, shows or firmly implies". A careful reader sees "implied" under "Presumed
   dead" and under "Death". One of the two wordings should move.
3. **Counts are of entries, not of people.** "9 recorded deaths" is nine entries; one of them is five
   children, one is two technicians, one is four machines and a man. The data has no number of victims
   (`victims` lists ids where there are any). If the header should count the dead, the data must say how many.
4. **`when.label` of Scott's statements** carries the day of the post inside a label ("Out-of-universe
   statement (posted 2015-12-18)"). A `posted` field would let the page print "Posted 18 December 2015" as a
   plain date and say "In-universe time: none". Record `location` strings carry such dates too ("…, posted by
   'Scott', 2018-06-15"); those are prose and print as written.
5. **`verifiedVia` as structure** (`{ kind, url, title }[]` plus a sentence) would let the page name a video by
   its title and stop guessing where an address ends. Today 59 YouTube links are "a video on YouTube", and
   ranges such as "…Clocksend3.jpg to File:Clocksend6.jpg" are half link, half text, as they are stored.

For whoever decides wording:

6. **Two words for one idea.** The sources pages, the locker and the validator say a record is "accounted
   for" / "Not yet accounted for"; the Method page says "placed" / "Not yet placed" (its section is titled
   "Accounting for every record"). Today every record is accounted for, so "Not yet …" shows nowhere; the
   mismatch would show the day a record is not. I would make Method say "accounted for" (eight strings).
7. **"Original"** on the record page and in the drawer prints the source's address as the link's text. Leave
   it as a citation, or name it in words as F does ("the Wayback Machine's capture of scottgames.com, 3 January
   2015")?
8. **The home heading**: "Six things the model says" / "How firm it is". If the kicker should stay "The ground
   it stands on", say so; I changed it because two of the six cards are graded theory.

## 5. Checks and their results

On the final tree (`3d19b8a`), production build served on 5193. Everything below was run again, from a clean
build of that commit, after the last change. (Its code is that of `2925f27`, the commit that was merged; the
commits after it change the handbook only.)
Outputs: `fin/results-static.log`, `fin/results/*.log`, `fin/qa/`, `fin/qa-paper/`.

| Check | Result |
|---|---|
| `npx tsc -p tsconfig.app.json` and `npx tsc -p tsconfig.node.json` | print nothing (see section 6 for why not `tsc -b`) |
| `npx tsx scripts/validate.ts` | OK (1,046 records, 1,046 accounted) |
| `npx oxlint` | no warnings |
| `npx vite build --outDir /tmp/fca-uifin-dist` | clean |
| `scripts/qa.mjs`, 1440/768/390, axe, night | 48 routes, 144 checks: 0 console errors, 0 failed requests, 0 sideways overflow, 0 axe violations |
| the same, `--theme paper` | 48 routes, 144 checks: 0, 0, 0, 0 |

My own checks (each at 1440 and 390 in both themes unless it says otherwise):

| Script | Item | Result |
|---|---|---|
| `t-timeline.mjs` | A | 3,174 passed, 0 failed |
| `a/flows.mjs` (the timeline's own behaviour suite, adapted copy) | A | 101 passed, 0 failed, no console errors |
| `a/axe-states.mjs` (22 states of the timeline, three widths, both themes) | A | 112 axe runs, 0 with violations, overflow or errors |
| `a/anchor-check.mjs`, `a/key-check.mjs` | A | an era's link lands on its line in 6 of 6 runs; the key stays inside its container at seven widths |
| `t-thumbs.mjs` | B | 156 passed, 0 failed |
| `t-print-thumbs.mjs` (gallery, a chapter, the cards, as PDF) | B | every check ok; nothing 404s |
| `t-home.mjs` | C | 36 passed, 0 failed |
| `t-count-unit.mts`, `t-counts.mjs` | D | 17 and 36 passed, 0 failed |
| `t-dates.mjs` | E | 142 passed, 0 failed |
| `t-checked.mjs` | F | 419 passed, 0 failed |
| `t-rail.mjs` (also at 1100, 1024 and 768) | G | 210 passed, 0 failed |
| `t-small.mjs` | G | 94 passed, 0 failed |

`sh fin/tools/all.sh` runs them all in turn (about half an hour). Each of `t-counts`, `t-dates`, `t-rail` was
also run against the starting build (served beside the new one under `/base/`) and fails there on what its
item is about, which is how I know each tests the thing it claims to.

What these checks do not cover: Chromium only, as before (section 15 of the handbook says why). Screenshots
I looked at are in `fin/shots/`; the crawl's are in `fin/qa/` and `fin/qa-paper/`.

## 6. For whoever merges this

- **`tsc -b` and the shared `node_modules`.** This worktree's `node_modules` is a link to `../integ/node_modules`,
  and `tsc -b` keeps its build-info files there (`node_modules/.tmp/*.tsbuildinfo`). A `tsc -b` run here leaves a
  build-info that is newer than the other worktree's sources, and the next `tsc -b` there can call the project
  up to date without checking it. I ran `tsc -b` once, at the start (it printed nothing), before I saw this;
  after that I checked the two projects directly with `tsc -p`, which checks the same files and writes nothing.
  **After merging, run `npx tsc -b --force` once** in the tree that owns `node_modules`.
  (While I worked, the build-info files there were rewritten by `tsc -b` runs in other worktrees, at 22:14
  and at 23:59 on 3 October; my `tsc -p` runs in between left them alone, which is how I know they write
  nothing.)
- **Where this branch stands against the others** (read from git, nothing touched). `ws/integ` took it at
  `6403c0b` (item F); `ws/trial`, and `master` with it, took it at `2925f27`. Since then only
  `docs/DESIGN.md` differs here (18 lines). An in-memory merge of the tip into each of the three is clean.
  (Into `ws/integ` it would also bring my versions of the two text fixes, because `ws/integ` has neither them
  nor the other engineer's work yet; `ws/trial` is where both have met.)
  The other branches have moved on (1,064 records, an era summary that folds on a phone, the other engineer's
  text work, a stricter validator). My numbers are this branch's: 1,046 records, 170 images,
  and the first event row at 868px on a phone, which the folded summary there will have changed.
- **The two files of the other engineer** (`typography.ts`, `RichText.tsx`) carry, on this branch, my versions
  of two fixes that the merge replaced with theirs: see the end of section 2. Leave them: they are the same
  as in the merged commit, so git has nothing to merge in them.
- I did not run a dev server (its cache is in the same shared folder). Everything was checked on builds.
- `scripts/thumbs.py` needs Pillow; building the site does not. The copies and the manifest are committed.
- `ExternalLink` has one more element inside it (the arrow's box). A style that reached the arrow as a direct
  child (`a > .icon`) must reach it as a descendant; the two there were are changed.

## 7. The first author's suites: expectations made out of date

I ran the timeline's own suites as adapted copies (`fin/tools/a/`, pointed at this worktree and reading facts
from `facts-a.json` so that they run against the plain build). In `a/flows.mjs` these expectations no longer
hold, each marked "FIN:" in my copy:

- `.has-death` on a row's node now means a recorded death; an event that tells only other fates has
  `.has-fate` (`#t-fiona-dies` is one).
- The filter groups are named "Cause" and "By" (were "Cause of death", "Killer"); the applied chips read
  "cause: murder or fire", "by William Afton", "by: unknown or not stated", "deaths and other fates only".
- The summary reads "all 43 events, all 9 deaths and all 14 other fates" (was "all 43 events and all 23
  deaths"), and the page's opening line counts three things.
- The first-screen check at 390px: the first row starts at 868px, 20px lower (the era's title is still on the
  first screen). I relaxed it to "within a tenth of a screen".
- `.tl-deathtag` is gone; the tag is the shared `.fate-tag` with `.outcome[data-outcome]` inside it.

Elsewhere: any suite that reads an essay step's date as a `.date` button (`d-essays` suites) will not find one
on The Box or Scott & Faith; one that reads `.evx-rec__check` as a `<p>` with the label inside finds a `<div>`
with three `<p>`s; one that expects the Method page's "1046" will find "1,046"; `t-print.mjs` and
`t-delivery.mjs` were not run (print was checked with `t-print-thumbs.mjs`; `/thumb/*.webp` is served with
the same headers as `/img/`, which I checked by hand).

---

## 8. Round 2: the acceptance findings

`ws/integ` was merged first (`8786117`, clean; the four checks passed on the merged tree). Then twenty commits,
`e4aaf50` to `273d8ef`, each with the trailer; nothing else merged, nothing rebased or pushed. Nothing under
`src/data/**` was edited. None of the other engineer's files was edited: not `RichText.tsx`,
`richTextPlain.ts`, `typography.ts`, `richtext.css` or `Storyline.tsx`, not the line that prints a record's
notes in `EvidenceDetail.tsx`, `EvidenceDrawer.tsx` or `EvidenceCard.tsx` (other lines of those three were),
and `labels.ts` not at all. In `theory.css` the change at `.beat__when` is the one rule
(`.beat__when .date--inline { white-space: normal; }`); the file has other additions of mine elsewhere (the
print block, the rail's list, the note over the sources, the fold of "What pushes back"), none near
`.beat__when`. `git merge-tree` of the head against `ws/trial` (which has the other engineer's work) is clean.

Port 5193 only, production builds only. The build before this round's changes is kept beside the served one
(`/base/`) so that "before" and "after" are measured by the same script. The scripts are in `fin/tools/`, their
output in `fin/results/` (`r2-*.log`), the screenshots I looked at in `fin/shots2/`.

### 8.1 The items

**A1. Large text breaks the header: fixed** (`e4aaf50`, `3d9ac99`; findings 3 and 6). The header chose its
layout by measuring, and measured again only when its row's width changed, so "Large" chosen with a page open
left the row too wide and the page sliding sideways until a reload. It now measures again when `data-text`
changes. The undated chip on the cover and the home page wraps (the one rule the report gives). The sweep I
wrote for this (`t-large.mjs`: every route of the crawl at 390 and 360, Large chosen from the header with the
page open, measured, reloaded, measured again) then found one more page: at 360 and Large, chapter 33's date
"a June 26th between 1980 and 1986", in a list, pushed the page 16px wide, because an inline date is set
no-wrap. In running text (a paragraph, a list item) an inline date may now wrap; it is one box, so a date that
fits its line is still never broken, and I checked that no date on any crawled route at 1440, 768 or 390 is set
differently from before, other than that chip (`probe-dates.mjs`). Tables keep no-wrap. *Result:* no sideways
scroll at 390 or 360 at Large on any crawled route, switched or reloaded; the header's row fits in both cases.

**C12. Four record pages wider than a phone: fixed** (`9afc94f`; finding 7). `overflow-wrap: anywhere` on a
record's claim and quotation and on a callout's body, as the report tried. The four routes are in `qa.mjs`.

**C13. Changing the text size throws the reader off their line: fixed** (`5dab37d`; finding 5). Before the
size (or the citation markers) changes, the page notes the block under the reader's eye, a third of the way down
the window, and how far through it the eye is; afterwards it scrolls so that the same share of that block is at
the same height. The hide-on-scroll header holds still meanwhile. *Measured:* the words a reader was on are
within 0 to 29px of where they were (one line at most) on a chapter, the timeline, a person's page and Method,
at 390, 360, 1024 and 1440, for Large, Small and back to Medium (`t-large.mjs`, `t-large-desk.mjs`); before, a
screen or two away. Hiding and showing the citation markers moves them 0px (`t-cites-desk.mjs`). One more fault
came out of this and is fixed with it: at a desk, Escape from the settings panel gave focus back to the "AA"
button and the browser scrolled the page 462px up to "show" a button in the pinned header; focus now returns
without scrolling.

**A2. The key's popover cuts its last line: fixed** (`770cbea`; finding 19). Two things. Any popover with more
below its edge now fades its last line, and the fade goes at the end (this serves the dates' popovers too). And
the key, which a press asks for, makes room for itself: where it fits on neither side of its button the page
moves just far enough, the button stays in sight under the header, and the page moves back when the key closes
unless the reader has scrolled since. *Result:* on a person's page at 390x844 the whole key shows (the page
moves 6px); on the timeline the page moves 224px and all of the key shows but its closing note, which fades
(18px to scroll); at 360x640 it fades with 279px to scroll. *To decide:* if a page that moves on a press is
not wanted, remove the word `makeRoom` in `MarksKey.tsx`; the fade stays.

**A3. A person's long text is one block: fixed** (`52f83a0`; finding 21). `<Paragraphs>` sets each paragraph
of `summary` and `theory` as a paragraph inside one block, so the rule down the side of the reading runs past
all of them. All 28 fields are checked against the data: the right number of paragraphs, the same words and
citation numbers as before, none longer than 190 words. Nothing shows either field clipped or as plain text
today (register rows and the search use `status`); `oneLine()` is there for when something does.

**A4. The drawer at a desk: fixed** (`9eace50`, `2751407`; finding 16). The number that stands for the record
on show is filled, wherever it stands, and follows the drawer's arrows. A click on another number in the text
switches the drawer to it: one click, the same history step. While a side drawer is open the page steps left
by what it takes for the block the number stands in to be clear of it (139px at 1440, 234px at 1280); closing
puts it back and returns focus to the number last chosen. The drawer stays modal, as the handbook has it.
*Limits:* at 1024 the column is wider than the room beside the drawer, so the page steps as far as the block's
left edge allows (24px) and part of the line is still covered. The chapter rail is hidden while the page stands
aside. *To decide:* this moves the page under the scrim when a number is pressed; if that is not wanted,
delete the rule `:root[data-drawer-shift] .site-main` in `records.css` and the mark and the switch remain.

**A5. The cover on a phone: fixed** (`51d69c7`; findings 11 and 12). The two buttons and the line over the
list name what the list holds as it stands ("All 35 questions", "Skim the questions here… “With answers” puts
the model’s answer under each question"; "answers" once the reader chooses them, and at a desk). The questions
go through `smartQuotes`, and so do the two other places the report names: the phase tags on Scott and faith
("Scott’s words") and the names in the web's picker.

**A6. Print: fixed** (`4cc7cd2`; finding 28). On paper the measure is the page, and the closed "Further
evidence filed here" line is not printed. Chapter 13 on A4: twelve pages become ten, the text 757 of 779px
wide where it was 487. I chose to drop that section and not to open it: the printout is the argument and its
numbered sources, and the further records are not cited in it.

**A7. Counts that disagree: fixed** (`3e525e4`; finding 10). The home tile is "78 ties between people" and
leads to the web with nothing folded, which prints "64 people, 78 ties". The folded web keeps "39 people, 50
ties" and now says: "Counted with every record on its own there are 64 people and 78 ties: 28 of those ties
join two records that the model reads as one person, and folding leaves 50." The sums are checked on the page.
*Changed on the way:* the tile no longer leads to the family trees, and says "ties", the site's word, where it
said "relationships".

**A8. The rail stops following: fixed** (`438c08b`; finding 20). The parts a chapter closes with ("What pushes
back", "What would change this", "Read alongside", "Sources"; each only where the chapter has it) are listed
after its own headings, a little apart, in the rail and in the contents sheet. The one being read is marked and
a press goes to it. The round-1 check of the marked section still passes (210).

**A9. The four things to check.**
- *Alt+Left after a search result: not reproduced.* From a chapter and from the timeline, at 1440 and 390:
  Enter on the first result, then Back, returns to the page the search was made from. The headless browser binds
  no Alt+Left, which is what the reader's script pressed (the report says so in its closing notes); I called
  Back itself.
- *The order for "vanny": not reproduced.* The first six results are the same, in the same order, at 1440 and
  390: the person, chapter 26, then "Ground rules".
- *The gallery moving 46px: not reproduced.* Opened from a scroll position of 1200 and closed by Escape, Back
  and the Close button, at both widths and in both themes: the page stands where it stood, to the pixel.
- *The place count that wraps: fixed in round 1* (`f6be2a6`), and still on one line after the merge.

**B10. Long date labels on timeline cards: fixed, with one thing to carry across** (`66a611a`). On a phone a
label that would take three lines is cut at a semicolon or at the bracket that opens a gloss, keeping what fits
in two lines; the date's popover says the rest first, before the reason. "undated; told here by convention
(before the five, after the 1983 week)" is "undated; told here by convention" on the card, and the popover
begins "Before the five, after the 1983 week." Three labels are cut at 390; no label takes three lines there
now. At a desk, and in the data, the label is whole. *What I could not do without the other engineer's file:*
`DatePill` has one `label`, which it prints on the pill and as the popover's title, so the popover's title is
the short form and the rest follows it as a sentence. If the popover should carry the whole label as its
title, `DatePill` needs a second prop (say `card?: string`, printed on the pill in place of `label`); the
timeline would then pass `label={whole}` and `card={short}` and drop the sentence. `cardLabel()` in
`pages/timeline/model.ts` already returns both parts.

**B11. Two names for one list: fixed** (`9ddb0e9`; finding 15). The chapter's list of sources opens a record as
"Source 8 of 24", as its number in the text does. The totals were already the same; what differs is that the
numbers in the text skip, in 14 of the 35 chapters, because a record behind a date, a picture or a strip of
exhibits is numbered and prints no number. The head of the list now says so: "Numbers 8 to 11, 14 to 16, 21
and 22 have no mark in the text: they are the records behind its dates." In every chapter the numbers that
sentence names are exactly the ones that cannot be found in the text (checked on all 35). The list under "What
pushes back" still says "Record 1 of 8 in this list": it is a different, shorter set.

**C14. The blank first screen: fixed** (`3199eb3`; finding 8). `#root` in `index.html` holds a still first
screen in the shell's own classes: the header's bar with the site's name and "Loading the archive…". It is in
the reader's theme and text size, the same for every route; React clears it on mount, and the name stands
exactly where it stood. With scripts off it says the archive needs JavaScript and does not say it is loading.
It appears once the stylesheet has arrived; the script and the data are as heavy as before.

**C15. Where the reader came from: fixed** (`a4b3041`; finding 17). The drawer's "Open the full record" says in
its history entry which chapter it left; the record's page prints one link at its head, "Back to chapter 2:
The man in the rabbit suit", to the place last noted in that chapter, and its own Previous and Next keep the
link. A record page reached any other way has none.

**C16. Three screens of cards before the reply: fixed** (`d1eaab9`, `2751407`; finding 18). On a phone a list
of more than four records shows three and a button, "10 more records push back", which opens the rest and
folds them again. The reply is now 0.8 of a screen from the heading in chapter 22, where it was 3.2 screens
(chapter 13: 2.0 to 1.0; "The follower": 2.0 to 1.1; "The Mimic": 1.5 to 1.0; a list of four is left whole).
The folded rows stay in the page, so a printout made at that width has them all.

**C17. Two small ones: fixed** (`ca74a28`; findings 29 and 30). A record opened from the locker says its place
in the whole list ("Record 101 of 1,064 in this list"). And stepping stops at the two ends of a set: the arrow
with nothing to do is dimmed, the arrow key and a flick do nothing there. *Changed behaviour:* it used to go
round; I chose stopping over a flash because it needs no explaining.

Not reached: nothing on the list. Left alone as told: finding 31, the home page's length on a phone, the
second line of the "bite of 87" result, pull quotes that begin in lower case, and the other engineer's eight.

### 8.2 To carry into the other engineer's files, if wanted

1. `richtext.css`, `.date--inline`: its `white-space: nowrap` is what three rules elsewhere now undo (mine in
   `components.css` for running text, the one at `.beat__when`, and `home.css` for `.era-row__when`). The pill
   is an inline-flex box, so without no-wrap a date that fits is still never broken. Dropping it there, except
   inside a table, would let all three go.
2. `RichText.tsx`, `DatePill`: the second prop described under B10.

### 8.3 Things I found that are not on the list

- At a desk, giving focus to anything in the pinned header while the page is scrolled makes the browser scroll
  the page up by about half a window (462px at 900 high): the header lies inside the document's scroll padding,
  so the browser takes the button to be out of view. I fixed the two places where the header did this itself
  (Escape from the settings panel and from a menu). It can still happen to a keyboard reader who walks back
  into the header with Shift+Tab from the middle of a page.
- The scripted `click()` of the test tool does the same thing (it scrolls its target clear of the scroll
  padding first). Any check that presses a header control and then reads a scroll position has to press with a
  raw mouse or touch event; `t-large.mjs` and `t-large-desk.mjs` do.
- `t-rail.mjs` (round 1: the section a chapter marks) now fails one to three of its 210 checks at 390, a
  different one each run: after a jump from the contents sheet and a scripted scroll, the sheet marks the
  section of the jump before. It is not this round's doing: the build from before this round's changes
  (`/base/`, the merge of `ws/integ`) fails the same way, once in four runs of the 390 views, and the head
  passed all four; before the merge it never failed. I did not find the cause. Two guesses did not hold: a
  scroll made straight after a jump is not undone, whether a reader's or a script's (`probe-snap.mjs`, twelve
  runs). What is left is the order of things when the contents sheet opens and closes within a moment of a
  scroll, which is the first author's ground (`ScrollManager`, `overlayEntry`); `23b62c7` came in with the
  merge. A reader would have to scroll and open the sheet in the same instant to meet it, if it is real at all.

### 8.4 Checks

On the head, `273d8ef` (the code is `2751407`):

- **The four checks.** `npx tsc -p tsconfig.app.json` and `-p tsconfig.node.json` (clean; not `tsc -b`, for the
  reason in section 6), `npx tsx scripts/validate.ts` (OK; 1,064 records, none unaccounted), `npx oxlint`
  (clean), `npx vite build`.
- **The crawl** (`scripts/qa.mjs`, with axe, on a production build of the head served under its own path so
  that nothing rebuilt it meanwhile): night 156 of 156 (52 routes at 1440, 768 and 390), paper 156 of 156,
  large text at 390 and 360 104 of 104. No console error, no failed request, no sideways overflow, no axe
  violation. Reports: `fin/qa4/report.json`, `fin/qa4-paper/report.json`, `fin/qa4-large/report.json`.
  (Earlier commits of the round: `438c08b` paper 156, large 104, night 155 with one 404 that my own rebuild of
  the served folder caused mid-crawl; `ca74a28` night 156.)
- **This round's checks**, all passing: `t-large` on every route at 390 and 360 (58), `t-large-desk` (50),
  `t-cites-desk` (26), `t-key` (154), `t-paras` (404), `t-drawer` (103), `t-cover` (40), `t-print` (15),
  `t-ties` (48), `t-rail2` (80), `t-a9` (48), `t-when` (38), `t-sources` (139, all 35 chapters), `t-boot` (34),
  `t-back` (32), `t-pushback` (56), `t-ends` (68).
- **Round 1's checks again**, their facts read anew from the merged data: `t-count-unit` 17, `t-home` 36,
  `t-counts` 36, `t-dates` 142, `t-checked` 419, `t-small` 94, `t-thumbs` 156, `t-print-thumbs` ok,
  `t-timeline` 3,174, `a/flows` ok, `a/axe-states` 112 runs with no violation, `a/anchor-check` ok: all pass.
  `t-rail`: 207 to 209 of 210 (8.3). Two of these needed a change to the check, not to the site: `t-counts`
  took the shop's number in a record's own words ("app 506610", on one of the four record pages new to the
  crawl) for a count without its separator; and `t-thumbs` once tripped over its own navigation under load and
  passed when run alone.
- **Looked at:** the key at 390 and 360 in both themes; the reading in paragraphs; the drawer at 1440 and 1280
  in both themes, with the mark, after a switch, and with the rail hidden; the printed chapter's last page;
  the rail with its closing parts; the cut date label with its popover; the still first screen; the record
  page with its way back; the folded list; and from the crawl, a person's page and the web.

### 8.5 For whoever merges this

- `ws/trial` already has the head (`f3af65c` merges `273d8ef`), so nothing of this round is left to merge.
  The last code commit, `2751407`, touches `ChapterView.tsx` and `theory.css` only.
- `index.html` now has markup inside `#root`. Anything that waits for the page by looking for a `main` or a
  header must look for `#main` (the app's) or for `main h1`; `qa.mjs` and the ScrollManager already do.
- The drawer's API has a fifth, optional argument (`whole`); `DrawerState` has a field of the same name. Old
  history entries without it behave as before.
- New shared class roots: `paras`, `boot-wait`. New shared modules: `components/Paragraphs.tsx`,
  `components/paragraphs.ts`, `components/drawerPlace.ts`.
- The handbook's section 21 has every rule that came out of this round.

