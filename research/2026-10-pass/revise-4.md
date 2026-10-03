# Revision notes, writer 4: `murders.ts` and `nightshift.ts`

Revision pass of 3 October 2026 on `child-outside`, `murders`, `golden`, `november-1987`, `fnaf1-restaurant` and
`springtrap`, against `factcheck-4.md`, `telling-revisions.md` (01:38) and `BRIEF-revise.md`. Only the two chapter
files were edited. Nothing is committed.

## Checks

- `npx tsx scripts/validate.ts`: OK. Coverage 1044/1044 accounted, unaccounted 0. Its one coverage warning names
  `fnaf4-night8-no-story-text`, which neither of my files uses.
- `npx tsc -b`: exit 0, no output.
- `prose-report.mts`: all six chapters between 911 and 999 words, no sentence over 40 words in five of them (the one
  it counts in `child-outside` is two sentences joined by the splitter at an entity link).
- All quotations re-checked against the cited record's `quote` field after the rewrite: no mismatch.
- No `// REVIEW:` comment is left in either file.

## Applied / rejected

46 findings on my six chapters: **46 applied, 0 rejected.** Three were applied in a different form from the fix the
checker proposed, each removing the same problem:

- `golden` 7. Candy Cadet is cut down to the one tale whose record carries the claim ("five children behind five
  doors, none saved", `ffps-candy-cadet-five-keys`), called "a tale with a teller". The chapter no longer says
  "three tales of five made into one": that agrees with nothing this chapter argues, and `edges` cites all three.
- `november-1987` 9. The sentence about Fritz Smith is cut from this chapter. The guards' table in
  `fnaf1-restaurant` carries him under "Night 7", the menu's own label, so no in-story timing is claimed
  (`fnaf2-pink-slip-fritz-smith`).
- `springtrap` 3. "A new way to desecrate, to humiliate, to destroy" is cut from the chapter and the record is
  filed in its `further` with a comment. The tape does not attach the phrase to the trap, and `killer` and
  `remnant` read it with the blueprint (`ffps-insanity-new-way-to-desecrate`).

The nine findings on the storyline beats are not mine to apply. They are listed under "For the lead".

My seven `// REVIEW:` notes are resolved and deleted: the bracket's floor is now argued and marked in the text; the
1979 pill takes the `teaser` form from "For every writer"; the one-frame fifth body is "reported", with no capture on
file; the bound "not before November 1988" is printed as a derived pill; the nameless pink slip and the misplaced
"It's a tragedy" are handled in the text and listed below; the dropped clause in `springtrap`'s tension needed no
further action.

## Round-three lines kept in different wording

- **`murders`, `tension`.** Three departures from the line in `telling-revisions.md`.
  - "argues why those are most likely these five" is written "says why the model reads those bodies as these
    five". R9 rates that reading low-medium, and the marker for that grade is "the model reads".
    `fnaf2-save-them` notes: "The game never says whether these five are the five of FNaF1's newspaper or a second
    group".
  - "under a logo graphic that reads 1985" is written "in a past whose only year, 1985, is on a logo graphic
    (placement unconfirmed)", with the record cited. `into-the-pit-past-year-1985`: "the exact screen was not
    confirmed". "Under" says the scene is beneath the logo.
  - Two clauses of mine are kept ("and by one tape whose date is assumed"; what follows if "summer job" were
    right), and the sentence on `fnaf4-pigtail-girl-hide-your-body` is added, as finding 7 asks.
- **`springtrap`, `answer`.** "He comes back to the old restaurant" is written "He comes back to an empty
  restaurant, most likely the old one" (R12 has the building at medium; `fnaf3-eon-map-fnaf1-layout`: "The game
  does not label the building"). "A room that had been walled up years before" is written "a room that had
  already been walled up": no record gives an interval, and `fnaf3-tape6-safe-rooms-sealed` is undated. "He climbs
  into the Spring Bonnie suit" is used as given.
- **`golden`, round-three point 6 ("What agrees").** Kept as three items, each called what it is, but Candy Cadet
  is one tale and not "five made into one" (see above).

Answers and questions I changed, beyond the round-three lines:

- `child-outside`: question "Who is the child killed outside, and what is the Puppet?"; answer "shut out of a
  building and killed outside it" (finding 5: no record names a restaurant).
- `golden`: answer "in seven counts of the dead there are four and one more", for "wherever they are counted"
  (finding 2).
- `november-1987`: answer "a report of tampering", for "machines tampered with" (finding 2).
- `fnaf1-restaurant`: answer "Three things are most likely: ..." so that the building, the closing notice and the
  caller each sit under the marker (findings 2 and 3).

## For the lead

Most important first.

1. **Beats in `theory.ts` (not edited).** The nine findings in `factcheck-4.md`, "The six storyline beats", stand
   as written there. The chapters now say less than these beats do: `s-child-outside` ("shut outside a
   restaurant"; "Her father calls it..."), `s-five` ("gives the lie that was told"), `s-children-stay` ("a fifth
   appears for an instant"), `s-november-1987` ("someone has tampered with the machines"), `s-last-freddys` (the
   closing and the caller without "most likely"; the pill lists `fnaf2-news-originals-kept` where the basis turns
   on `fnaf2-paycheck-1987`), `s-springlock` ("one a night"; "had been walled up").
2. **The 1986 step, upstream.** R8's confidence line and outline point 3 of `murders` reach "June 1986 at the
   latest" from the new restaurant alone, which gives 1987. The chapter now adds the old restaurant: it traded on
   after the incident (`fnaf1-news-uphill-battle`) and had been "left to rot for quite a while" by the time the new
   one opened (`fnaf2-call1-new-location`). The pill has the same label and kind as `timeline-math`'s and lists
   that record. The model "takes" 1986: the records give a bracket, not a year.
3. **Ruling wording that says more than its records.** Each is now written to the record in my chapters.
   - R8 (7) and the outline answer of `golden`: "wherever the dead are counted". There are seven such counts; the
     yellow bear marks the one more in four (FNaF1, Give Gifts, Happiest Day, Help Wanted 2); SAVE THEM and Foxy Go!
     Go! Go! show five alike, and the good-ending screen shows four heads and no fifth. The case against the crying
     child now rests on the count: no count has a place for a child beyond the five and the child outside.
   - R9: "nowhere else" for the chest mark (`fnaf2-save-them-purple-figure-chest-mark` compares three sprites);
     "no other Freddy's is open that autumn" (no record; the chapter says "no record has another open"); the
     outline answer's "machines tampered with" (`fnaf2-call4-facial-recognition-tampered`: "may have... we're not
     sure").
   - R11: "the only empty yellow costume" (`fnaf1-golden-freddy-office-figure` says "sits limp like an empty
     costume", of FNaF1; the chapter cites `fnaf2-golden-freddy-office` beside it).
   - `springtrap`'s outline: "the old restaurant" and "years before" in the answer; "for thirty years" in point 6
     (`scott-fnaf3-steam-description` counts from a closing, not from his death); "a single night's work". The
     chapter now says the nights are the player's and the scenes do not say how long the work took.
   - The outline of `child-outside`: "restaurant" in the question and answer. R7 itself says the place is
     unknown.
4. **Outline points that cite the wrong record** (`fnaf1-restaurant`). Point 6 cites
   `fnaf1-custom-night-pink-slip` for Mike Schmidt's name; the slip shows no name. Point 7 quotes "It's a tragedy"
   from `fnaf1-news-closing`; the line is in the five-children clipping (`fnaf1-news-uphill-battle`, claim).
5. **Record errors in the evidence JSON.**
   - `fnaf2-give-gifts-give-life`: the claim states flat that "a fifth body is visible for one frame". It is the
     wiki's sentence and no capture is on file. The notes should say so, or a capture should be added.
   - `fnaf2-save-them-purple-figure-chest-mark`: the notes should record that only three sprites were compared.
     The fact-check reports a wiki capture of FNaF4's back-room scene with a yellow chest mark too; I did not
     check it, and `fnaf4-purple-guy-suits-up-employee` does not mention one.
   - `fnaf1-news-kids-vanish` (location: "rare poster replacement #1") and `fnaf1-news-suspect-captured` (claim:
     "The first clipping says"): no record orders the four clippings. My chapters now write "one of the four" and
     "another".
   - `fnaf1-custom-night-pink-slip` tags `mike-schmidt` though the slip shows no name.
6. **Records that moved between my chapters.** Coverage is unchanged.
   - `fnaf2-cutscenes-old-stage-through-eye-holes`, with R25's "the older Freddy's memory" sentence (marked
     "loosely"), moved from `november-1987` to `fnaf1-restaurant`, where it is the fourth and weakest support for
     the building.
   - `scott-fnaf2-steam-old-and-aging` and `fnaf2-pink-slip-fritz-smith` (home: `november-1987`) are now used only
     in `fnaf1-restaurant`, the first as counter-evidence. `fnaf2-golden-freddy-office` (home: `golden`) is now
     cited only in `november-1987`.
   - New in `counterEvidence`: `fnaf4-pigtail-girl-hide-your-body` (`murders`); `fnaf3-bbs-air-adventure`,
     `fnaf3-chicas-party`, `fnaf3-mangles-quest` (`november-1987`); `scott-fnaf2-steam-old-and-aging`,
     `fnaf2-call6-yellow-suit` (`fnaf1-restaurant`).
   - Filed in `further` after cuts: `ffps-security-puppet-tracks-by-body` (`child-outside`);
     `fnaf2-call5-day-shift-vacancy`, `fnaf2-cutscenes-its-me` (`november-1987`);
     `ffps-insanity-new-way-to-desecrate` (`springtrap`). `fnaf2-save-them-golden-freddy` is refiled as colour.
7. **The part blurb for `nightshift`** in `theoryParts`, repeated in the header comment of `nightshift.ts`, says
   "the old one reopened on a smaller budget" flat. The chapter has "most likely". I left the comment as it mirrors
   the blurb.
8. **No missing record blocks a chapter.** A frame capture of Give Gifts, Give Life would settle item 5.

## Words per chapter

Counted by `prose-report.mts` (body blocks; quote blocks excluded). In brackets, my first-draft counter, which also
counts the words inside quote blocks and is the source of the "1,251" figure for `november-1987`.

| Chapter | Before | After |
|---|---|---|
| `child-outside` | 882 (943) | 911 (972) |
| `murders` | 911 (978) | 983 (1,049) |
| `golden` | 1,123 (1,169) | 998 (1,044) |
| `november-1987` | 1,181 (1,251) | 999 (1,086) |
| `fnaf1-restaurant` | 930 (980) | 929 (979) |
| `springtrap` | 931 (975) | 980 (1,024) |

Three chapters grew. In each the fact-check added more than the tightening removed: the old-restaurant step, the
pigtail girl and the marked identifications in `murders`; the credits step and the split of "he" from "old friend"
in `child-outside`; the office box of 1987 heads and the note on the nights in `springtrap`. All six are inside the
700 to 1,000 target on the report's count.

What was cut, in the brief's order: restated answers and doubled quotations (the CEO's line, "I'll probably take the
night shift myself", the frontal-lobe paraphrase, captions that repeated their paragraph); support records moved to
`further`; narration that another chapter owns (the three "what agrees" items, the "new way to desecrate" line, the
guards in `november-1987`); and one long paragraph in each of `november-1987`, `fnaf1-restaurant`, `murders` and
`springtrap` split in two. Headings now say what each section finds.
