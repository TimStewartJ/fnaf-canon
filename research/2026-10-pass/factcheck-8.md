# Fact-check 8: timeline, dates, deaths, places, locations, games

## What was checked, and against what

- **Files**, all under `src/data/` in the theory worktree, as committed in `9ec1a3c` (02:26 on 3 October). They
  were last saved between 02:13 and 02:23 and did not change while I worked (the worktree went from `52e69ed` to
  `183b746` in that time; the six files' hashes are the same at 04:40 as at the start):
  `timeline.ts` (8 eras, 43 events), `dates.ts` (97 justifications: 43 events, 8 eras, 28 places, 18 games),
  `deaths.ts` (23 entries), `places.ts` (28 places), `locations.ts` (28 spans), `games.json` (18 games).
- **Records.** All 337 records that the six files cite, inline or in an `evidence` list, were opened in the JSON
  and read in full, and about thirty more where a sentence turned on them. The `when` fields and place tags of all
  1,044 records were scanned by script. The evidence changed four times while I worked (`62b8392`, `55bda83`,
  `35726b2`, `9a36912`, 03:04 to 03:30): nine records, six of them cited here. All six were re-read. Two findings
  come from those changes (timeline 12 and 19).
- **Quotations.** A script compared every phrase in double quotation marks in the events of `timeline.ts`, in
  `places.ts` and in `games.json`, and every phrase in single quotation marks in `dates.ts` and `deaths.ts`, with
  the records cited beside it: 264 phrases. (The two quoted phrases in the era summaries were checked by hand.)
  238 are verbatim in a cited record's `quote`. 20 are printed words from a cited record's
  `claim`, `title` or `location` (for example "Suspect convicted.", "Parental Tracking", 'like we always do',
  'threatened again', 'Aug 3rd'). Three are in no cited record's `quote` or `claim` (dates 15, deaths 15); the
  words are the game's as far as the records' notes show. The other three are not quotations of a record. **No
  phrase misstates what a record quotes.**
- **Rulings.** `rulings-brief.md` in full, twice (see the next section); `model.md` rules W1 to W11, R2, R12,
  section 3 (dating table and order of events) and section 5; `round4.md`. The storyline in `theory.ts`, twice:
  as committed (saved 01:37), and as it stood in the working tree at 04:40, where it was being revised from
  04:33 on and was not yet committed. `npx tsx scripts/validate.ts` passes: every event and place has a date
  entry and no cited id is missing.
- **Rendering.** I read how each field is drawn in `~/src/fnaf-canon-wt/integ/src/pages` (timeline
  rows, death blocks, the locations chart, the place page). Several findings exist only because of how a field is
  printed, and say so.
- **Arithmetic** was recomputed: 6 December is a Saturday in 1969 and 1975 and in no other year from 1965 to
  1979; 3 August to 7 September 1979 is 35 days; the cheque dates of 1987 and the first available 12 November.
- **The wiki** was used once, as a list aid, for the days on which Special Delivery's emails reached players
  (dates 3).

Finding types: `unsupported`, `overreach`, `wrong record`, `uncited`, `no record`, `misquote`, `status`,
`rulings`, `dates`, `consistency`, `missing`, `reader`.

## A change under the check: round four of the rulings

`rulings-brief.md` and `model.md` were revised between 03:56 and 04:03 ("Round four: wording corrected after
fact-check"), about ninety minutes after the six files were written. No grade changed. More than forty wordings did,
and steps 6 and 7 of the order of events changed places. The author of these files could not have followed it.
I re-read the brief in its new state and checked the six files against it. Findings that exist only because of
round four are marked **(round four)**: there are 20 of them, and they are work still to do, not mistakes of the
author's. The storyline carried most of the same phrases until 04:33, when it was revised in the working tree;
until the timeline follows, the two now tell these points differently (last section).

## The checks the assignment named

### The order: timeline, rulings' steps, dating table, storyline

Step numbers are the rulings' numbers as they stand after round four (step 6 is the 1983 week, step 7 the child
outside).

| Timeline events (sort key) | Step | Dating-table rows | Storyline beat | Agreement |
|---|---|---|---|---|
| `t-murray-workshop`, `t-springlocks-for-diner` (10000, 15000) | 1 | 1, 3, 4, 4a, 7 | `s-costume-company` | all three |
| `t-fiona-dies` (20000) | 2 | 5 | `s-two-machines` | all three |
| `t-mimic-born` (30000) | 3 | 6 | `s-two-machines` | all three |
| `t-wa-letters` (40000) | 4 | 7 (its note) | `s-1979` | all three |
| `t-1979-night` (50000) | 5 | 8, 9 | `s-1979` | all three |
| `t-fnaf4-household`, `t-purple-suits-up`, `t-bite-1983` (70000 to 75000) | 6 | 10 | `s-house`, `s-birthday` | all three, since round four |
| `t-diner-closes` (78000) | none | 11 | none | table only; a convention |
| `t-daughter-killed` (79000) | 7 | 12 | `s-child-outside` | all three, since round four |
| `t-missing-children`, `t-suspect-caught`, `t-give-life` (80000 to 83000) | 8 | 13, 14 | `s-five`, `s-children-stay` | all three |
| `t-suits-retired` (90000) | 9 | 15 | none | steps and table |
| `t-old-restaurant-closes` (100000) | 10 | 16 | first sentence of `s-november-1987` | all three |
| `t-funtime-board`, `t-elizabeth-killed`, `t-pizza-world-cancelled` (110000 to 116000) | 11 | 26 (listed out of sequence) | `s-afton-robotics` | all three; a convention, labelled |
| `t-1987-opens` to `t-1987-closes` (120000 to 128000) | 12 | 17 to 21 | `s-november-1987` | all three |
| `t-fnaf1`, `t-fnaf1-closes` (130000, 140000) | 13, 14 | 22 to 24 | `s-last-freddys` | all three |
| `t-dismantle-and-death` (150000) | 15 | 25 | `s-springlock` | all three |
| `t-sister-location`, `t-michael-rises` (160000, 165000) | 16 | 27 | `s-michael` | all three (the beat's era was `funtime` until the revision of 04:33) |
| `t-fazbears-fright`, `t-fright-burns`, `t-michael-speech` (170000 to 180000) | 17, 18 | 28 to 30 | `s-fazbears-fright` | all three |
| `t-baby-ejected` (190000) | 19 | none | none (`s-trap-fire` names the two machines) | steps only |
| `t-ffps` (200000) | 20 | 32 | `s-trap-fire` | all three |
| `t-ucn` (210000) | 21 | 33 | `s-night-without-end` | all three |
| `t-boards-scanned` (220000) | 22 | 34, 35 | `s-rabbit-in-code` | all three |
| `t-help-wanted`, `t-ness-searches` (230000, 235000) | 23 | 35, 36 | `s-follower` (the tester; no beat tells Ness) | **the storyline tells the second firm's scan (step 24) in the beat before this one** |
| `t-sd-virus` (240000) | 24 | 36 | `s-rabbit-in-code` | as the row above |
| `t-pizzaplex-built` to `t-ruin` (250000 to 280000) | 25 to 28 | 37 | `s-pizzaplex`, `s-mimic` | all three |

- **The child outside and the 1983 week: the author was right.** When the files were written the numbered list had
  the child outside (then step 6) before the week (then step 7), while the dating table (rows 10 to 13) and the
  storyline told the week first. No record orders the two: her death has no date and no named place, and the one
  sentence that orders it (`ffps-insanity-wound-first-inflicted`) orders it against "all of this", not against
  FNaF4's week. The author followed the storyline and called both places conventions. Round four has since ruled
  the same way: the steps changed places, and "both labels should stay 'convention'" (`round4.md`). Three things
  are left. The files' comments and one tooltip still describe the old numbering as a difference (timeline 37,
  dates 4). The event's own label names only half of the convention (timeline 20). And the era's summary does not
  say that the five's place after the 1983 week is a convention too (timeline 9).
- **The digital era.** The timeline tells the tester, then Ness, then the second scan (steps 23, 24); the storyline
  tells the second scan before the tester's ending. The records carry no order between the two threads: the model
  calls "24 relative to 23" a convention. Neither file marks it (timeline 18).
- **R12.** FNaF2, FNaF1, FNaF3 are in that order; the five precede the 1987 restaurant; the sealing precedes the
  killer's death; his death follows the closing of FNaF1's restaurant and is "most likely" in the event and in the
  death. The Circus Baby venture is labelled a convention in all three events, the era range, the death, and the
  Pizza World's place entry and bar. Michael's week is labelled in one place of eight (timeline 10). Two
  summaries drop the condition on the venture's later place (timeline 11, deaths 8), and the sealing is told as
  fact in two entries where R12 grades it medium (timeline 3, deaths 4).
- **Eras.** No event is in two eras, and every death is in its event's era. The printed ranges of two eras do
  overlap: "c. 1983" lies inside "a June 26 between 1980 and 1986". That cannot be avoided while the bracket
  stands, and the range should say that the order is a convention (timeline 9). `t-diner-closes` is undated and
  sits under "c. 1983" with no convention label (timeline 16). Era summaries otherwise say no more than their
  events, with the exceptions in timeline 2, 4, 6, 8, 9, 11, 22, 23, 24 and 29.

### Dates

- **R24.** No label, era range, place `years`, death `yearLabel`, location label or "set in" label states or
  implies a year after 1987. The UI never prints the sort keys. The only later years in the six files are in
  record ids, in the delivery days of Special Delivery's emails (called delivery days) and in "not before
  November 1988", which the rulings list as derived.
- **Secret of the Mimic.** "1979, most likely 7 September" is of the kind `teaser` in each of its seven uses, and
  no text calls it printed. One sentence of its derivation is false and has been withdrawn by the model (dates 2).
- **Murray's paperwork.** Never called printed. The year 1965 is shown in three labels and one bar, under
  `relative` once and `teaser` three times, and nowhere under `estimated`, the kind the assignment names for it
  (dates 10).
- **1983.** On the television, as a show's title card and a floor; on the keypad as a code that "players record
  as 1-9-8-3". Correct everywhere.
- **Staged props.** The 1970 poster and the "FALLFEST 83'" banner are named as props that the model does not use.
  Correct (their records are missing from one list: dates 16).
- **June 26.** Two children's date, with no year, in every entry. **The bracket follows as an estimate and not as
  a derivation.** The ceiling needs one inference that the files do not mark, and the floor leans on a record that
  cuts both ways. The steps are in dates 1.
- **Kinds.** 94 of the 97 entries have the right kind for their basis. The three others are in dates 10 and 11
  (and their copies in `locations.ts`, locations 4).

### Deaths

- Who, what, how, where: each entry agrees with its records except as listed in deaths 7 and 9 to 11. Into the
  Pit and FNaF World supply no entry. No entry records an act of November 1987, and `d-save-them` states R9's
  lean. The bite of FNaF4 is nowhere joined to the Bite of '87. The caught man is open.
- **The dead and the not-shown-dead.** The titles and victim labels of Edwin Murray, the tester Jeremy, the
  technician Arnold, Michael and SAVE THEM keep them apart. The printed cause labels do not (deaths 1 and 3).
- **Branches.** The four entries that carry `branch` say "One ending" in their titles. Their statuses disagree
  with one another and with the model (deaths 2). The fire of Pizzeria Simulator is one ending's too and does not
  say so (deaths 5).
- **Arnold.** Yes: two of the game's three endings. A reader can tell that each is one ending, and cannot tell
  that they are alternatives for one man (deaths 6).
- **`event` links.** All 19 point at an existing event of the same era that cites at least one of the death's
  records and tells the death. Two notes. `t-1979-night` says only that "the game ends three ways" and tells
  neither of Arnold's outcomes. And the four entries without a link (`d-edwin`, `d-sl-vent`, `d-sb-therapist`,
  `d-sb-residents`) are right to have none.

### Places

- **Which restaurant is which.** Fredbear's Family Diner ("the original restaurant", "closed for years"), the old
  Freddy Fazbear's Pizza ("that old restaurant", "left to rot"), the 1987 restaurant and FNaF1's restaurant are
  four entries. The old location and FNaF1's restaurant each say they are "most likely" one building, and the old
  location's summary explains why the clippings it cites are seen in the other. The safe room is one entry for a
  kind of room; it says the room the killer dies in "had most likely been walled up before he died" and places
  the luring there "less surely". That agrees with R8 and R12. No place is told as two. Three joins are
  made without a mark (places 3, 7 and 8), and one pair is nested without saying so (places 2).
- **R20.** "Most likely" in `buried-pizzeria`, in `ffps-pizzeria` and in both location labels. Correct.
- **`private-room`.** Only what is shown, in Sister Location's time, with the inference named and the plush "of
  FNaF4's design". Correct. One point on its span (locations 3).
- **Into the Pit.** All four places are `outside` in `locations.ts`, `unknown` in `dates.ts` and "not placed" in
  `years`. Two of the four summaries do not say so in words (places 9).
- **Citations.** Every `[[record]]` in the 28 summaries was read against its sentence. Findings are in places 1,
  2, 3, 7 and 8.

### Games

All 18 "set in" labels agree with `GAME_DATES`, with R24 and with the dating table: no "c. 1988", no
"c. 2017-2019", no calendar in Into the Pit, and "six endings" for Security Breach matches six ending records.
Three small points (games 1 to 3).

---

## `timeline.ts` — minor fixes

Thirty-seven findings, each at the level of a phrase, a label or a status; ten come only from round four. No
event is wrong about what happened or out of order.

1. **`t-ucn`, summary: "sits in an office that every machine in the series attacks, with no way to win"; "The
   voices name who keeps him there"; "Firm is only that this follows the fire".** `unsupported`. The cited record
   (`ucn-protagonist-unnamed-killer`) says the voices accuse the player of a killing and say the player cannot
   die. It does not say the night cannot be won, and other records have the player scoring points
   (`ucn-golden-freddy-final-cutscene`, `ucn-office-skins`). The roster is fifty characters from the earlier games
   (`ucn-roster-includes-ffps-four`). `ucn-nightmare-freddy-toysnhk` gives the phrase; that the one it names keeps
   the player there is the model's reading (R16 (3), as corrected). And step 21 now has the place after the fire
   at medium-high, not firm. Paste for the first two sentences and the last:
   "Someone sits in an office under attack from the machines of the earlier games, and their voices say that this
   person has killed and cannot die [[ucn-protagonist-unnamed-killer]]. They speak of \"the one you should not have
   killed\" [[ucn-nightmare-freddy-toysnhk]], and one of them refuses release: ..." and "Firm is only that a voice
   in it refuses release; that it follows the fire is close to firm." Also "an old man at a lake" should be "a
   figure at a lake, Old Man Consequences,".
2. **`eras[pizzeria].summary`: "the man on the phone does not survive his last week there".** `status` (R25:
   implied, and the wording is "implied"). The event and the death both say so. Paste: "the recorded voice on the
   phone breaks off in its fourth message, which implies that the man did not survive his last week there, and
   that restaurant closes too."
3. **`t-dismantle-and-death`, summary: "The room had been walled up with its contents inside".** `status` (R12:
   sealed before his death is medium). `places.ts` has it right. Paste: "The room had most likely been walled up,
   with its contents inside, before he died [[fnaf3-tape6-safe-rooms-sealed]], and no game shows how he got in."
4. **`t-mimic-born`, `status: "canon"` with the title "David Murray dies; ..."; `eras[founding].summary`: "after
   the boy dies".** `status`. Every record of his death is implied: `secret-of-the-mimic-mail-party-canceled` is
   `implied` and does not name him, and `secret-of-the-mimic-log-refusal` "Implies David has died". `d-david` is
   `strong`, and R21 (1) and step 3 now read "implied, never stated" (step 3 had it flat until round four).
   Paste for the title: "Edwin builds a second machine, and it \"mimics rage\"", with this sentence after the
   cancelled party: "That David has died is implied and never stated." Paste for the era: "Its owner builds one
   machine to mind his son. The boy's death is implied, never stated; after it, on the model's reading, he builds
   a second from a copy of its program."
5. **`t-murray-workshop`, summary: "his wife Fiona designs the characters".** `no record`. No record says wife
   or marriage; the records call Fiona David's mother (`secret-of-the-mimic-log-death`). R21 now bars the word
   (the ruling itself had "his dead wife's voice" until round four), and `round4.md` asks for a record "before
   any chapter writes it". Paste, as the revised storyline has it: "and Fiona Murray designs the characters".
6. **`t-security-breach`, summary: "A woman in a rabbit costume hunts him."; `eras[pizzaplex].summary`: "hunted
   by a woman in a rabbit costume".** `unsupported` **(round four)**. None of the twelve Security Breach records
   about her has a hunt; one ending has her seize him on the roof. Step 26 now reads "walks the building". Paste:
   "A woman in a rabbit costume walks the building." and "A boy named Gregory lives through one night there, while
   a woman in a rabbit costume, most likely Vanessa, walks the building;".
7. **`t-pizzaplex-built`, summary: "While the raceway is being built its new track cracks".** `overreach`
   **(round four)**. The raceway had been open: "The raceway was closed very abruptly prior to the new
   construction" (`security-breach-freddy-raceway-closed-abruptly`, not cited). R20 now bars "while the Pizzaplex
   was being built". Paste: "The raceway had been open and was \"closed very abruptly prior to the new
   construction\" [[security-breach-freddy-raceway-closed-abruptly]]. A construction crew there finds its new track
   cracking: \"I am worried we are building over a sinkhole here.\" [[security-breach-msg-sinkhole]]" Add the
   record to the list.
8. **`t-daughter-killed`, summary: "A child is shut outside a restaurant in the rain"; `eras[murders].summary`:
   "A child is shut out of a restaurant".** `rulings` **(round four)**. R7 now reads "not 'outside the
   restaurant'": the records have "outside the building" and "The venue is not named" (`ffps-security-puppet-trapped`,
   `ffps-security-puppet-assignment`). Paste: "A child is shut out, in the rain, of the building where the Puppet
   keeps watch, while the Puppet, the machine set to guard the child, is held in its box
   [[ffps-security-puppet-trapped]]." and "A child is shut out of the building where the Puppet kept watch, and is
   killed". End the event with "Neither game names the building."
9. **`eras[murders]`: summary "The child outside is told before the five by convention."; "the springlock suits
   are retired, the hidden rooms are walled up"; range "before the 1987 restaurant; a June 26 between 1980 and
   1986".** `rulings`. Three orders are conventions (the week before the child outside, the week before the five,
   the child outside before the five) and the summary names one. The retiring and the sealing stand here on the
   model's reading, the sealing on R11's assumption at low to medium, and are told as plain events. The range
   overlaps the era before it. Paste for the range: "before the 1987 restaurant; a June 26 between 1980 and 1986;
   told after the 1983 week by convention". Paste for the last three sentences: "The mascots come to smell and to
   stain, and the old restaurant closes. The model also places here the retiring of the springlock suits and the
   walling-up of the hidden rooms, which the tapes do not date. The killer, on the model's reading, is William
   Afton. Two placements are conventions: the child outside is told before the five, and both are told after the
   1983 week. No record orders them, and a year before 1983 is allowed for the five."
10. **Michael's week: the convention is on one label of eight.** `rulings` (R12: call it the model's
    convention). `t-sister-location` has "undated; placed here by convention", and the era's summary says so under
    the heading. The other places where the week's position shows do not: `t-michael-rises` ("after that week");
    `d-sl-vent`, `d-sl-technicians` and `d-michael-scooped` ("before Michael's week; undated", "the fifth night of
    Michael's week"); `eras[aftermath].range`, "thirty years after Freddy Fazbear's Pizza closed", drawn as a
    Printed pill over six undated entries; and two bars in `locations.ts` (locations 2). On a person's or a
    place's page the era's summary is not there to help. Paste: `t-michael-rises` "after Michael's week
    underground; placed with it by convention"; the three deaths "(placed here by convention)" after their present
    labels; the range "thirty years after Freddy Fazbear's Pizza closed; Michael's week, told first, is undated".
    (The storyline's beat `s-michael` was in the era `funtime`; the revision of 04:33 moves it to `aftermath`.)
11. **`eras[funtime].summary`: "a later place is also allowed".** `rulings` (R12: only if FNaF4's pink room is
    not hers). `CONVENTION_BABY` in `dates.ts` has the condition. Paste: "a place after the last restaurant closed
    is allowed only if the pink bedroom in FNaF4 is not his daughter's."
12. **`t-give-life`, summary: "while a fifth body shows for an instant with the yellow bear".** `overreach`. The
    record was corrected at 03:04: "A fifth body is reported to show in the middle of the room for one frame"; it
    is the wiki's report with no capture on file (`fnaf2-give-gifts-give-life`; R8 wording). Paste: "and then sets
    the heads of Freddy, Bonnie, Chica and Foxy on them; a fifth body is reported to show for a single frame
    before the yellow bear's scare [[fnaf2-give-gifts-give-life]]."
13. **`t-hw2-technician`, summary: "and the next game still has a rabbit in the mask [[ruin-the-entity]]".**
    `wrong record` **(round four)**. R19 now names the record: the shadow on the hideout wall
    (`ruin-vanny-hideout-glitchtrap-shadow`, from the wiki's summary), "not the M.X.E.S. figure", which is what
    `ruin-the-entity` records. Paste: "and in the next game a rabbit's shadow stands on the wall of the hideout,
    its face visible through the mask [[ruin-vanny-hideout-glitchtrap-shadow]]." Change the id in the list.
14. **`t-1979-night`, summary: "It is the first machine, housed in a cabinet labelled F10-N4, imitating the
    dispatcher"; "the real dispatcher has \"been trying to get ahold of you all night\"".** `status`
    **(round four)**. R21 now has "That the cabinet F10-N4 is M1's mind is the model's reading, joined from four
    records", and R2 has the real dispatcher's call as part of one ending of three (the record is located in the
    "Walk Away / Clock Out ending"). Paste: "It comes from a computer labelled F10-N4, which has been imitating
    the dispatcher and speaks in Fiona's voice [[secret-of-the-mimic-f10n4-reveal]]; the model reads it as the
    first machine. In the ending where the technician walks away, the real dispatcher says the company has \"been
    trying to get ahold of you all night\" [[secret-of-the-mimic-clock-out-real-dispatch]]."
15. **`t-security-breach`, summary: "The game names neither it nor the mass of old parts beside it
    [[security-breach-burntrap-name-not-in-game]]".** `wrong record` for the second half: that record is about the
    rabbit's name. Paste: "The game names neither it [[security-breach-burntrap-name-not-in-game]] nor the mass of
    old parts beside it [[security-breach-tangle-composition]]." Add the record to the list.
16. **`t-diner-closes`, `yearLabel`: "undated; \"closed for years\" by November 1987".** `dates`. Its place after
    the 1983 week is a convention by its own basis, and it sits in an era headed "c. 1983". Every other
    convention is in its label. Paste: "undated; \"closed for years\" by November 1987; listed here by convention".
17. **`t-sd-virus`, summary: "and days later:"; "This is a second firm and a second outbreak, not the first
    studio's."** `dates` (R24 (2): only the order of the emails counts; "days" is the gap between two delivery
    days) and `status` (R18: two firms, two outbreaks is medium-high). Paste: "After the last one is scanned a
    technician is locked out of the system, and a later email reports:" and "This is most likely a second firm and
    a second outbreak, not the first studio's."
18. **`t-help-wanted`, `t-ness-searches`, `t-sd-virus`: their order.** `consistency`. See the table above. Add to
    `SD_EMAILS` in `dates.ts`: "Where the emails fall against the tester's ending is a convention too: they
    interleave both threads."
19. **`t-suspect-caught`, summary: "The first clipping ... The second"; "No later game mentions an arrest";
    `t-old-restaurant-closes`: "the last of them".** `overreach`. Since 03:04 the record says "The game shows the
    four clippings at random and gives them no order", and its note about silence covers the first three games
    only (`fnaf1-news-suspect-captured`). Paste: "The clipping about the two children says that video surveillance
    identified the man and ..."; "The clipping about the five is headed ..."; "No call, tape or later newspaper in
    the first three games mentions an arrest"; and "one of them, which announces a closing \"by year's end\"".
20. **`t-daughter-killed`: `yearLabel` "undated; placed before the five by convention"; "guard her", "reaches
    her".** `reader`. The label gives half of the convention; the storyline's is "Undated. Told here by
    convention." And the first three sentences describe two shown scenes with "her", though the FNaF2 record says
    the victim "has no stated gender" and the audio spells "save him". Paste for the label: "undated; told here by
    convention (before the five, after the 1983 week)". Use "the child" until the sentence that begins "The model
    reads".
21. **`t-springlocks-for-diner`, summary: "that he is the Cassette Man"; "On the day a change order arrives".**
    `rulings` **(round four)**: R2 now has no "he" for Hen. And the log says "I got the change order from Hen last
    night" (`secret-of-the-mimic-log-build-to-spec`). Paste: "Who Hen is, no game says: that Hen is the Cassette
    Man is a possibility the model notes and does not tell." and "The day after a change order arrives".
22. **`t-hw2-technician`, summary: "She is Cassie:"; `eras[pizzaplex].summary`: "a mask passes to a girl named
    Cassie".** `status` (R22: medium-high; `hw2-faz-force-ending` gives the identification as the wiki's, of a
    scene "not watched"). Paste: "She is most likely Cassie:" and "a mask passes to a girl, most likely the Cassie
    of RUIN".
23. **`eras[pizzaplex].summary`: "The company's largest building".** `no record`. No record says largest. Paste:
    "The Mega Pizzaplex stands over a buried pizzeria."
24. **`t-wa-letters`: title "A party signing \"W.A.\" claims Murray's land"; summary "he shuts himself away in
    the house [[secret-of-the-mimic-f10n4-reveal]]".** `rulings` **(round four)**: the letter that claims the land
    is signed "WA" and the request for staff contacts "W.A.", and R2 (3) now gives both. The second phrase is the
    account of the voice in the workshop. Paste for the title, and for `eras[founding].summary`: "A party signing
    \"WA\" and \"W.A.\" claims ...". Paste: "and, by the later account of the voice in the workshop, he shuts
    himself away in the house".
25. **`t-ness-searches`, summary: "She is already changed in the first email, before the contractor's scan is
    reported."** `rulings` **(round four)**. R19's reasoning now reads: only her first email, about the searches,
    comes before the scan goes wrong; "the masks, the 'compliance' searches and the voices come after it". Paste:
    "Only the first of these emails, about her searches, comes before the contractor's scan goes wrong; the others
    come after it."
26. **`t-dismantle-and-death`, summary: "takes it apart, one a night".** `rulings` **(round four)**. R12 now
    reads: no length for the dismantling, "not 'one a night'". The record has one in each of four minigames.
    Paste: "where a purple figure takes it apart [[fnaf3-eon-purple-guy-dismantles]]".
27. **`t-fazbears-fright`, summary: "the next game speaks of the children as still without rest"; "rare screens
    show a body inside the suit".** `consistency`: the game after FNaF3 is FNaF4, and the record cited is Pizzeria
    Simulator's. And `fnaf3-springtrap-corpse-screens` has "what looks like a decayed human body", which is R1
    (a)'s wording since round four. Paste: "and Pizzeria Simulator speaks of the children as still without rest"
    and "rare screens show what looks like a body inside the suit".
28. **`t-ffps`: the fire is not said to be one ending's.** `rulings` (W10, R27). Every record of the speech and
    the fire is located in the "Completion ending", which needs all four machines let in. The model takes it as
    the ending later games follow; the entry should say so once. Paste: "In the ending that the later games
    follow, which the game calls Completion, the building burns [[ffps-completion-fire]]".
29. **`eras[digital].summary`: "A tester is left its plush and answers a voice that nobody else hears."**
    `status`, small. That the tester is the woman on the call is inferred (R19 (2): medium-high;
    `codb-mask-plush-voice`: "the game does not say so"). The event's title keeps them apart. Paste: "A tester is
    left its plush, and a woman, most likely the same person, answers a voice that nobody else hears."
30. **`t-murray-workshop`, summary: "It works for Fazbear Entertainment: ... Edwin himself complains that
    \"They treat me like some contractor ...\"".** `overreach`. The record: "'They' are not named". Paste: "and
    Edwin himself complains, of clients he does not name, that".
31. **`t-purple-suits-up`, summary: "follows the boy to the exit".** `overreach`. The record has the suited adult
    appear at the exit and follow the child, who is told to "Hurry the other way". Paste: "appears at the exit and
    follows the boy".
32. **`t-michael-rises`, title: "The body walks home".** `unsupported`. The record has a man "walking down a
    street", and its title now reads "a man's body decays as he walks the street". Paste: "The body walks the
    street, rots, and gets up again".
33. **`t-1987-closes`, summary: "a guard named Fritz Smith is fired on his first day".** `overreach`. The slip is
    the Custom Night's and is undated: "The in-universe timing only follows from the menu order of nights"
    (`fnaf2-pink-slip-fritz-smith`). Paste: "and an undated pink slip from the game's seventh night fires a guard
    named Fritz Smith on his first day".
34. **`t-mimic-born`, summary: "It sounds like his son"; "M1's last message".** `overreach`, small. The log has
    Edwin shout at "something" about "him", with nobody named; the message's record says "Sender unsigned". Paste:
    "He shouts at it, \"Stop sounding like him!\"" and "A message that reads as the first machine's says".
35. **Seven `yearLabel`s that lean on the row above.** `reader`. On a person's or a place's page, and under a
    filter, the row above is a different one. Paste: `t-suspect-caught` "the morning of June 27, the day after the
    luring"; `t-give-life` "after the luring; before the 1987 restaurant"; `t-fnaf1-closes` "by the end of the
    first game's year, most likely"; `t-fright-burns` "at the end of the attraction's week"; `t-michael-speech`
    "after the Fazbear's Fright fire"; `t-ruin` "after Gregory's night; the Pizzaplex lies wrecked";
    `t-michael-rises` as in finding 10.
36. **`t-sister-location`, summary: "works five nights under Circus Baby's Entertainment and Rental"; "hang dead
    in the galleries".** `reader`. The facility is Circus Baby's Entertainment and Rental, and one of the two rooms
    is the Funtime Auditorium (`sl-technicians-hanged`: "hang on the stages"). Paste: "works five nights in Circus
    Baby's Entertainment and Rental, underground" and "hang dead on two of its stages". `d-sl-technicians` has
    "in the galleries" in its title and "the gallery windows" in its note.
37. **Comments: "the child outside (step 6) is told after the 1983 week (step 7)"; "(step 7)"; "(step 6, told
    here by convention, and steps 8 to 10)"; "One licensed difference".** `consistency` **(round four)**. Not
    shown to readers. The week is now step 6 and the child outside step 7, and there is no difference left.
    Paste for the header: "The 1983 week is step 6 and the child outside step 7 (they changed places in the
    rulings on 3 October). Their keys, 70000 to 78000 and 79000, keep the earlier numbering and still sort
    correctly."

## `dates.ts` — minor fixes

Twenty findings; five come only from round four. Three kinds are wrong, and two derivations do not follow as
written (1 and 2).

1. **The June 26 bracket: `t-missing-children`, `ERA_DATES.murders`,
   `PLACE_DATES["freddy-fazbears-pizza-original"]`, and the date of `d-missing-children`.** `dates`. Step by step:
   - *June 26th, two children, no year; five linked in another clipping.* Stated (`fnaf1-news-kids-vanish`,
     `fnaf1-news-five-children`). Follows.
   - *"The restaurant traded on afterwards".* Stated in the clipping about the five ("an uphill battle ever
     since"). The record that carries it, `fnaf1-news-uphill-battle`, is in none of the four evidence lists.
   - *"closed, and was left to rot for quite a while before the 1987 restaurant opened".* Stated, of "that old
     restaurant" (`fnaf2-call1-new-location`). **The unmarked step is here.** That the clippings' "Freddy
     Fazbear's Pizza" is that old restaurant is R8 (3), an inference at medium-high: the clipping's record says
     it does not name a building, and the call's record that which earlier building is meant "is not
     specified". The four entries tell it as given ("The old restaurant traded on after the incident"; "Open at
     the time of the incident").
   - *"so the latest June 26 is 1986's".* By arithmetic the 1987 restaurant is excluded: it was open "only a few
     short weeks" before 13 November, so no June 26 falls in its life (`fnaf2-overtime-robots-scrapped`). That
     leaves 26 June 1987 at the old restaurant. It is excluded only on the judgement that trading on, closing and
     "quite a while" of rot do not fit into about four months. R8 (2) now says so: "The new restaurant alone
     gives 1987 as the ceiling; the model takes 1986 ... a bracket, not a printed limit". The files give 1986 as
     if it followed.
   - *"on the night of 1979 the four mascots are still unfinished prototypes ..., so the earliest is 1980's".*
     The night is after 26 June 1979 on every reading, so 1980's is the next June 26: that is arithmetic. The
     step from "prototypes stand in the contractor's mock-up" to "no Freddy Fazbear's Pizza was open" is soft, and
     the cited record cuts against it. The same room holds two more prototypes that the files label Fredbear and
     Spring Bonnie (`secret-of-the-mimic-rnd-proto-pizzeria`), suits the model holds were already in use. The
     neighbouring record says "the game does not say whether a Freddy Fazbear's had opened anywhere by then"
     (`secret-of-the-mimic-mockup-pizzeria-layout`). And a Murray client had a costumed Chica while Fiona lived
     (`secret-of-the-mimic-ad-chicas-party-world`). The files say "softer" and "softly"; they should say why.
   The kind `estimated` is right. Paste for `t-missing-children`: "June 26th is printed in a clipping, for two
   children, with no year; another, undated, links five to the incident. Which Freddy Fazbear's Pizza is meant is
   not printed. It cannot be the 1987 restaurant, which was open only 'a few short weeks' before 13 November, so
   the records' own ceiling is 1987. The model reads the place as the old restaurant (medium to high), which
   fought on 'ever since', closed, and was 'left to rot for quite a while' before autumn 1987: on that reading the
   latest June 26 is 1986's. The floor is softer (low to medium). On the night of 1979 prototypes that the game's
   files label Freddy, Bonnie, Chica and Foxy stand unfinished in Murray's mock-up pizzeria, so the earliest is
   1980's; but two more are labelled Fredbear and Spring Bonnie, and the game does not say whether a Freddy
   Fazbear's had opened. A year before 1983 is allowed, and its place after the 1983 week is a convention." Add
   `fnaf1-news-uphill-battle`, `fnaf2-call1-forget-old-location` and `secret-of-the-mimic-mockup-pizzeria-layout`
   to the evidence, and shorten the other three to match.
2. **`t-1979-night`, basis: "rests on two assumptions ... If either fails, the night is only 'after 3 August
   1979'".** `rulings` **(round four)**, and false in itself. Each assumption gives the day without the other: a
   work order dated on the day of the job gives 9/07/79, and a mailbox header that dates the last mail gives 3
   August plus 35 days. The sentence was copied from `model.md` R2, which round four corrected ("wrong for each
   case taken alone"). Paste, in the model's new terms: "The day is reached two ways. Read month first, as the
   game's other dated paper is written, the order is of 7 September 1979, which is the night if a work order is
   dated on the day of the job. And if the mailbox header 'Aug 3rd' dates the last mail, which came 'five weeks
   ago', the night is 35 days after 3 August: again 7 September. If the first reading fails, the mailbox still
   puts the night about five weeks after 3 August; if the second fails, the day rests on the work order alone.
   If both fail, no day is known."
3. **`SD_EMAILS`: "(28 November 2019 to 8 April 2020, with one more in February 2021)".** `no record`. The latest
   Special Delivery record in the archive is of 12 March 2020, and its only February email is of 2020
   (`sd-vintage-bonnie-reports`). The wiki's list, checked as an aid, has a reply on 9 April 2020, more mail in
   April, July and August 2020, and one email on 11 February 2021, so the run is wrong on its own terms too. It
   comes from the model (section 5.2 and dating row 36) and is printed in four tooltips. Paste: "The dates on
   record are the days they reached players, from 28 November 2019 on: delivery days, not dates in the story."
4. **`t-daughter-killed`, basis: "the model's numbered order lists it before that week, and this timeline, like
   the storyline, tells it after".** `consistency` **(round four)**. No longer true: the numbered order now tells
   the week first. This is a tooltip. Paste: "Its place after the 1983 week is a convention too: no record orders
   the two."
5. **`t-ffps`: "the rabbit that burns there is this game's salvaged rabbit"; `PLACE_DATES["ffps-pizzeria"]`:
   "the rabbit salvaged here is the one that burned there"; `GAME_DATES.ffps`; the date of `d-ffps-fire`.**
   `status` (R1 (b): strong, an inference; `ffps-scraptrap-always-come-back`: "The identification ... rests on
   design and this line"). Four flat statements. Paste: "the rabbit salvaged here is most likely the one that
   burned there: it says 'it's still me' and 'I always come back'".
6. **`t-security-breach`, `ERA_DATES.pizzaplex`, `GAME_DATES["security-breach"]`: "Vanessa's move to the
   Pizzaplex".** `overreach`. The record has her "transfer to a different location" and does not name it
   (`security-breach-cd-vanessa-transfer`). Paste: "It follows the therapy recordings, in which Vanessa is about to
   transfer 'to a different location'; the recordings do not say where."
7. **`PLACE_DATES["the-sinkhole"]`: "Found while the Pizzaplex's raceway was being built."** `overreach`
   **(round four)**, as timeline 7. Paste: "Found by a construction crew at the Pizzaplex's raceway, which had
   been open before the work began. No year is given." Add `security-breach-freddy-raceway-closed-abruptly`.
8. **`t-wa-letters`: "They fall after the leak about the second machine".** `unsupported`. No record orders the
   letters against the leak; the dating table puts both between David's death and the night without ordering
   them. Paste: "The letters carry no date. The model places them, with the second machine, the leak about it and
   the staff's leaving, between the cancelled party and the night of the work order; no record orders the letters
   against the leak."
9. **`t-pizza-world-cancelled`: "Scott's hidden news report puts the cancelled opening before the rental
   business."** `wrong record`. The news report does not mention the rentals. The sentence that does is in the
   page source: "be watching for her to appear at a neighborhood party near you"
   (`scottgames-site-sl-source-bright-future-circus-baby`), which is not in the list. Paste: "Scott's page source,
   under the hidden news report, sends Circus Baby on to 'a neighborhood party near you', which puts the cancelled
   opening before the rental business." Add the record.
10. **`ERA_DATES.founding` and `PLACE_DATES["murray-costume-manor"]`: kind `teaser` for labels that begin in
    1965.** `dates`. The teaser shows 1979 and nothing else; 1965 is a year on a document's image, which the
    rulings' list of dates keeps apart ("On documents and textures not yet seen in play") and the assignment calls
    `estimated`. `t-murray-workshop` has "paperwork from 1965" under `relative`. Set both to `estimated` (the bases
    already explain each end), or cut the labels to "to the night of 1979", as the revised storyline does: its
    beat is now "Before the night in 1979", `relative`, with the years in the tooltip.
11. **`PLACE_DATES["freddy-fazbears-pizza-fnaf1"]`: kind `derived` for "a November after 1987; most likely closed
    at that year's end".** `dates` (R24 (8): a date that depends on a reading is not derived). Only the first half
    is arithmetic. Cut `years` in `places.ts` to "a November after 1987"; the summary already tells the closing
    as a reading.
12. **`PLACE_DATES["freddy-fazbears-pizza-itp"]` and `GAME_DATES["into-the-pit"]`: "an unused variant reads
    1983".** `rulings` (R27, W7: unused content "is not mentioned either way"). Cut the clause from both. Row 31 of
    the dating table has the same clause.
13. **`PLACE_DATES["safe-room"]`: "an attraction opens a boarded-up room thirty years after the closing".**
    `overreach`. The caller reports a lead and means to take a look; "That it came from the boarded-up room is
    implied by the Night 1 lead, not stated" (`fnaf3-call2-found-a-real-one`). `round4.md` lists it "so that
    nobody writes 'opened the room'". Paste: "thirty years after the closing an attraction follows a lead to 'an
    extra room that got boarded up' and then finds the suit; that it found the suit in that room is implied."
14. **`t-give-life`: "so the signs come before autumn 1987".** `dates`. True of the smell
    (`fnaf2-call2-the-smell`). That the undated clipping is news of the old restaurant and not of the reopened one
    is the model's inference (step 10). Paste: "The clipping about the smell and the stains is undated and says the
    restaurant was 'threatened again'; that it is news of the old restaurant is an inference. The older machines
    already smell when they sit in the 1987 restaurant's back room, so the smell at least is older than autumn
    1987."
15. **`t-purple-suits-up`: "captioned '3 days until the party'"; `t-boards-scanned`: "'decades' after the first
    incidents".** `misquote`, technical. The first is not in the cited record's `quote` or `claim`; its notes
    abbreviate the caption as "3 days…" (`fnaf4-minigame-countdown-to-party`). The second is in the `quote` of a
    record that is not listed, and says less: "a bad reputation over the last few decades"
    (`hw-intro-loosely-based-on-actual-events`). Paste: "in the third of the countdown's captions, three days
    before the party" and "and the company speaks of a bad reputation 'over the last few decades'". Add the
    record.
16. **Four statements whose record exists and is not listed.** `uncited`. `t-fiona-dies`: the two props
    (`hw2-fall-fest-1970-poster`, `codb-fallfest-83-banner`). `t-pizzaplex-built`: the teaser's year
    (`scottgames-site-sb-atrium-2020`). `GAME_DATES["help-wanted-2"]`: the code 1983 (`hw2-puppet-master-1983`).
    `t-sister-location`: "after Circus Baby took his sister" (`sl-golden-freddy-cutscene-put-her-back-together`).
17. **`GAME_DATES["curse-of-dreadbear"]`: "tested by the same tester".** `overreach`. No cited record says so.
    Paste: "An add-on to the same in-universe product. Its hidden call needs the plush from Help Wanted's Trapped
    ending, so it is told with the same tester."
18. **`t-mimic-born`: "The second machine is built after his death"; `t-dismantle-and-death` (and the date of
    `d-william-springlock`): "which finds the suit with a body in it: firm".** `rulings` **(round four)**: R21 (1)
    "as the model reads it, after his son's death (implied, never stated)"; R1 (a) "what looks like a body". Paste:
    "The second machine is built before the night of 1979 and, as the model reads it, after his death." and "which
    finds the suit with what looks like a body in it".
19. **`t-ness-searches`: "Ness is already changed in the first email, before the contractor's scan is
    reported."** `rulings` **(round four)**, as timeline 25. Paste: "Only Luis's first email, about her searches,
    comes before the contractor's scan goes wrong."
20. **`t-suits-retired`: "needs the suits worn in FNaF4 to be springlock suits".** `dates`, small. The dating
    table (row 15) names two assumptions. Add: "and one policy to cover both places".

## `deaths.ts` — needs work

Seventeen findings. The first three are about the file's scheme of labels and statuses, not about one entry.

1. **`kind` on entries that are not deaths, or whose cause is not stated: `d-michael-scooped` (`machine`),
   `d-arnold` (`machine`), `d-hw-jeremy` (`unknown`), `d-edwin` (`disappearance`), `d-phone-guy` (`machine`).**
   `status`. `DEATH_KIND` in this file supplies the words the page prints. So "Michael is scooped, and does not
   die" is printed with "Killed by a machine"; "Arnold, the technician (fate not shown)" with "Killed by a
   machine"; Jeremy, whose note says "not as a death", with "Cause unknown"; and Phone Guy, whose `byLabel` is
   "Not stated" and whose note says "Which machine it was is not known", with "Killed by a machine". The UI also
   prints the word "Death" on every entry and counts all 23 as "recorded deaths" (last section). The titles do
   their part and the labels undo it. Fix in this file: add a kind, for example `survived: { label: "Not a death:
   injured, or fate not shown", icon: "🩹" }`, and use it for `d-michael-scooped`, `d-arnold` and `d-hw-jeremy`;
   keep `disappearance` for `d-edwin`; set `d-phone-guy` to `unknown`.
2. **`d-sb-vanny-disassembled`, `status: "canon"`; `d-sb-vanny-fall`, `status: "strong"`.** `status` (R19 (4),
   W10). Both are outcomes of endings that "no later game is shown to follow", and the model's own reading follows
   a third. Arnold's two endings are `theory`. A reader who filters by "Canon" is shown a death of Vanny. Set both
   to `theory`. The notes already say what is shown.
3. **`d-save-them`, `kind: "murder"`.** `rulings` (R9 (6): no act is recorded for that week; R9 (2): most likely
   the earlier five). The entry is printed with "Death" and "Murder" in the 1987 era, and under a "Murder" filter
   the five are counted twice. Set `kind: "unknown"`. Title, labels and note are right.
4. **`d-william-springlock`, note: "The room had been walled up before he died"; "the suit is found with a body
   inside it".** `status` (R12: medium), and R1 (a) as timeline 27. Paste: "Thirty years after the closing the
   suit is found with what looks like a body inside it. The room had most likely been walled up before he died,
   and no game shows how he got in."
5. **`d-ffps-fire`: no word that this is one ending; `by: ["cassette-man"]`; "told in their own entries".**
   `rulings`. (a) The fire happens only in the Completion ending (W10). Add to the note: "This is the game's
   Completion ending, the one the later games follow." (b) R28 bars "he burns it", and `byLabel` rightly says "the
   game does not show who lights the fire"; but the UI builds its "killed by" list from `by[0]`, so the entry is
   filed as killed by the Cassette Man, himself among the dead. Set `by: []` and keep the label. (c) "their own
   entries" points at nothing in this list. Paste: "What later games show of the killer's image is told in the
   timeline, and the model does not tell it as one history."
6. **`d-arnold` and `d-arnold-crash`.** `consistency`. They are two of the game's three endings. Neither names
   the other, and both are counted. Four fixes. Add to each note: "In another ending he ..." (for `d-arnold`: "is
   left in a crash as the workshop burns"; for `d-arnold-crash`: "wakes inside a Fredbear suit"). `d-arnold-crash`
   has `place: "murray-costume-manor"`, but the record puts the crash in his van and does not say where: use
   `placeLabel: "In his van; where the crash happens is not stated"`. Its `victimLabel` "(presumed)" should read
   "(presumed dead; not shown)". And the records call the endings "Walk Away (Clock Out)" and "Framed (Unfinished
   Business)": use those for `branch`.
7. **`d-child-outside`: title "A child is killed outside a restaurant"; `placeLabel` "Outside a restaurant. No
   game names it"; note "Pizzeria Simulator shows the same scene from the Puppet's side while the Cassette Man
   speaks".** `rulings` **(round four)**, as timeline 8, and `overreach`: "the same scene" asserts what the next
   clause calls a reading. "While" is supported, by a record the entry does not list: the terminal shows the scene
   during the speech (`ffps-completion-security-puppet-terminal`). Paste: title "A child is shut out and killed";
   `placeLabel` "Outside the building where the Puppet kept watch. Neither game names it"; note "Pizzeria
   Simulator shows a child shut outside from the Puppet's side, and puts that scene on a terminal while the
   Cassette Man speaks of the day his daughter was shut out and left to die. That this is FNaF2's killing is the
   model's reading." Add the record.
8. **`BABY_CONVENTION`: "a later place is also allowed".** `rulings` (R12). Paste: "a place after the last
   restaurant closed is allowed only if the pink bedroom in FNaF4 is not the daughter's."
9. **`d-elizabeth`, note: "decades later Scrap Baby promises to make 'daddy' proud".** `dates`. No record gives
   the interval, and the death is placed by convention. The quoted line's record,
   `ffps-scrap-baby-make-you-proud-daddy`, is not in the entry's evidence. Paste: "in Pizzeria Simulator, Scrap
   Baby promises to make 'daddy' proud." Add the record.
10. **`d-missing-children`, `victimLabel`: "Four names are on gravestones in Pizzeria Simulator (Gabriel, Fritz,
    Susie, Jeremy); the fifth is never given".** `status` (R25: that the row is the five is medium; the record:
    "The game does not say whose graves they are"). Paste: "A row of five gravestones in Pizzeria Simulator carries
    four names (Gabriel, Fritz, Susie, Jeremy), most likely theirs; the fifth stone is hidden, and no game names
    the fifth child".
11. **`d-hw-jeremy`, `byLabel`: "By his own hand, as the tapes imply, while wearing the visor".** `overreach`. The
    tapes have him seen afterwards with the visor on (`hw-tape-09`); none has him wearing it when it happened. The
    three tapes that imply the injury are 3, 4 and 9, and the entry lists 3, 7 and 9: tape 4, the paper slicer, is
    missing. Paste: "By his own hand, as the tapes imply; he is next seen with the visor on and his shirt black".
    Add `hw-tape-04`.
12. **Header comment: "Three entries are kept although no record states a death".** `consistency`. There are at
    least five: Edwin Murray, Arnold in the Clock Out ending, Michael, the tester Jeremy and the bodies of SAVE
    THEM. Two more are disappearances (`d-sb-staff`, `d-sb-residents`), and five rest on an implied death
    (`d-david`, `d-crying-child`, `d-phone-guy`, `d-arnold-crash`, `d-sb-vanny-fall`).
13. **`d-sl-vent`, `d-sl-technicians`, `d-michael-scooped`: `yearLabel`.** `rulings` (R12), as timeline 10.
14. **`d-murray-technicians`, note: "the voice on the radio: the first machine, imitating the dispatcher".**
    `status` **(round four)**, as timeline 14. Paste: "the voice on the radio, which the model reads as the first
    machine imitating the dispatcher".
15. **`d-edwin`, note: "the 'detonation' at the start of that recording".** `misquote`, technical. The word is in
    the cited records' notes ("a minor... detonation") and in no `quote` or `claim`. Drop the quotation marks:
    "the detonation spoken of at the start of that recording".
16. **RUIN's standard ending has no entry.** `missing`, small. If Arnold's "fate not shown" endings are listed,
    Cassie's is of the same kind: the elevator falls, and the last line is Roxy's "Cassie?"
    (`ruin-ending-standard`). Add it as a branch with the new kind, or say in the header that RUIN's endings are
    left out.
17. **`d-crying-child`, `place: "fredbears-family-diner"`.** `status`, small. The page prints the link flat, and
    FNaF4 never names the restaurant (`fnaf4-diner-unnamed`). Add to the note: "The restaurant is unnamed in FNaF4;
    the model reads it as Fredbear's Family Diner."

## `places.ts` — minor fixes

Ten findings; three come only from round four.

1. **`murray-costume-manor`, summary: "The first of Murray's two machines is still there, as a computer called
   F10-N4 that speaks in his dead wife's voice"; "which a work order in the technician's van dates to 1979".**
   `no record` for "wife" (as timeline 5) and `status` **(round four)** for the identification (as timeline 14).
   The second phrase lacks R2's mark that the work order has not been seen in play. Paste: "A computer called
   F10-N4 is still there, speaking in the voice of Fiona, his son's dead mother
   [[secret-of-the-mimic-f10n4-reveal]]; the model reads it as the first of Murray's two machines." and "which a
   work order in the technician's van, read from an image and not yet seen in play, dates to 1979". In
   `inventors-house`, "where the first of his machines says" should be "where the voice of that computer says".
2. **`the-sinkhole`: `years` "found while the Pizzaplex was being built"; summary "The builders fear"; no word
   that the buried pizzeria lies in it.** `overreach` **(round four)**, as timeline 7, and `reader`: nine records
   are tagged with both places and neither summary mentions the other. Paste: `years` "found by a construction
   crew at the raceway"; summary "The void under the Pizzaplex's raceway, with the buried pizzeria in it. A
   construction crew at the raceway, which had been open before, fears it is \"building over a sinkhole\"".
3. **`fredbears-family-diner`: summary "A yellow bear and a yellow rabbit share a stage in a hidden minigame of
   FNaF3"; `years` "open c. 1983"; "for the diner".** `rulings` **(round four)**: R2 now says that stage is
   unlabelled and that "no game puts that pair in a place called Fredbear's Family Diner"; the record agrees
   ("The location is unlabeled"). `dates`: "open c. 1983" holds only if FNaF4's restaurant is this diner, which
   the summary calls the model's reading. And that Murray's "diner" is this one is medium-high (R2). Paste: "A
   yellow bear and a yellow rabbit share an unlabelled stage in a hidden minigame of FNaF3
   [[fnaf3-stage01-fredbear-spring-bonnie]]; no game says that stage is the diner's."; `years` "open c. 1983, if
   it is FNaF4's restaurant; \"closed for years\" by November 1987"; and "has new springlocks nearly ready \"for
   the diner\", most likely this one".
4. **`mega-pizzaplex`, summary: "The company's largest building".** `no record`. Paste: "Fazbear Entertainment's
   Mega Pizzaplex, raised over a sinkhole ...".
5. **`fazbear-orientation-program`, summary: "which is read as the buried pizzeria
   [[hw2-real-hub-pit-pizzeria]]".** `status` (R22: medium; the record is `implied` and gives the identification
   as the wiki's). The passive hides whose reading it is. Paste: "which the model reads, less surely, as the
   buried pizzeria".
6. **Header comment: "`private-room` is the one place no record is tagged with".** `consistency`. Nine records
   have carried the tag since `52e69ed` (02:47).
7. **`freddy-fazbears-pizza-original`, summary: "Its four machines went to the 1987 restaurant's back room".**
   `overreach`, small. The call says the older models "are from the previous location"
   (`fnaf2-call2-older-models`); that "the previous location" is "that old restaurant" of the Night 1 call is a
   natural join that no record makes. `t-old-restaurant-closes` makes it too. Paste: "The four older machines in
   the 1987 restaurant's back room came \"from the previous location\", most likely this one".
8. **`circus-babys-pizza-world`, summary: "Circus Baby calls it \"my old pizzeria\"".** `overreach`, small. She
   names no pizzeria; the record gives the name as coming from Scott's store text. Paste: "Circus Baby speaks of
   \"my old pizzeria\", most likely this one".
9. **`the-pit`, `the-mill`: summaries.** `rulings` (R23), small. Both say only "in Into the Pit". Add the sentence
   the other two carry: "Into the Pit is an adaptation that the main games never place."
10. **`fnaf-world-sub-tunnel-4`, `years`: "outside the story".** `consistency`, small. The lake's second scene is
    in Ultimate Custom Night, whose endings the model reads as text, and the summary uses it. Paste: "in FNaF
    World's adventure, which is outside the story, and in a hidden ending of Ultimate Custom Night".

## `locations.ts` — minor fixes

Six findings, all on labels, kinds and the ends of bars.

1. **`safe-room`, label: "→ opened thirty years on".** `overreach` (as dates 13: implied). Paste: "in every
   location → walled up → a boarded-up room sought thirty years on".
2. **`circus-babys-rental`, label "undated: the rentals → Michael's week"; `michael-afton-home`, label "during
   Michael's week; undated".** `rulings` (R12), as timeline 10: both bars are drawn by convention and neither
   label says so. Paste: "undated: the rentals → Michael's week (both placed by convention)" and "during Michael's
   week; undated, placed by convention".
3. **`private-room`, `from: "funtime"`.** `rulings` (R3: only what is shown, in Sister Location's time), small.
   The bar starts an era before the only time the room is shown. Set `from: "aftermath"` and keep
   `fuzzyStart: true`.
4. **`freddy-fazbears-pizza-fnaf1`, `dateKind: "derived"`, label "... closes by year's end, most likely";
   `murray-costume-manor`, `dateKind: "teaser"`, label "by 1965 → ...".** `dates` (as dates 10 and 11). Cut the
   first label to "a November after 1987"; set the second to `estimated`.
5. **`fredbears-family-diner`, label "open c. 1983; ...".** `dates` (as places 3).
6. **`safe-room` and `tape-sister-location`, `from: "diner"`.** `consistency`, small. On the model's own account
   springlock suits were in use before the night of 1979 (R2, medium-high), so "the springlock years" begin in the
   first era. `fuzzyStart` covers it; `from: "founding"` would say it.

## `games.json` — minor fixes

Three findings, all in summaries. The 18 "set in" labels are clean.

1. **`secret-of-the-mimic`, summary: "an endoskeleton built to take on the character of any costume hunts him
   there".** `overreach`. The description is the sentence of the voice on the radio inside the building, whose
   speaker "is not certain" (`secret-of-the-mimic-dispatch-endoskeleton-any-costume`; R2, R21). Paste: "and an
   endoskeleton that has left earlier visitors dead inside mascot costumes is loose in the building".
2. **`fnaf3`, summary: "a yellow rabbit suit with a body inside it. ... dying inside that suit".** `status`,
   small (R1 (a): strong, and "what looks like a body" since round four). Paste: "a yellow rabbit suit with what
   looks like a body inside it. Minigames between the nights show a purple man dismantling the four old machines
   and dying inside a yellow rabbit suit."
3. **`fnaf-world`, `settingYearLabel` and the `GAME_DATES` label: "except its frame voice".** `reader`. "Frame
   voice" is the rulings' term. Paste: "Outside the story, except its opening and clock-ending text".

---

## The ten most serious

1. **deaths 1.** The printed cause labels say "Killed by a machine" of Michael, who does not die, of Arnold, whose
   fate is not shown, and of Phone Guy, whose killer is "Not stated". The file has no way to mark an entry that
   is not a death.
2. **deaths 2.** Two branch endings of Security Breach are marked canon and strong as deaths, against R19 and
   against the file's own treatment of Arnold.
3. **timeline 1.** The Ultimate Custom Night event says that the night cannot be won and that the voices name who
   keeps the player. Neither is in the cited records.
4. **timeline 3 and deaths 4.** "The room had been walled up" is told as fact in two entries; R12 grades it
   medium, and `places.ts` hedges it.
5. **timeline 2.** The era summary has Phone Guy dead without "implied".
6. **dates 1.** The June 26 bracket hides its one inference (which restaurant), gives 1986 as if it followed, and
   leans on a record that also lists Fredbear and Spring Bonnie as prototypes.
7. **timeline 4.** "David Murray dies" is canon in the timeline and strong in the deaths; every record is implied.
8. **dates 2.** "If either fails" is false, the model has withdrawn it, and it is still in a tooltip.
9. **timeline 5 and places 1.** "His wife" and "his dead wife's voice": no record of a marriage.
10. **timeline 7, dates 7, places 2.** The buried shaft is found "while the raceway is being built"; the record
    has the raceway open before and closed for the new construction.

Next after these: the conventions that the summaries state without their conditions (timeline 9 to 11, deaths 8,
locations 2); the venue of the child outside (timeline 8, deaths 7); "hunts him" (timeline 6); and the run of
delivery days that no record carries (dates 3).

## Noticed outside the assignment

**The storyline (`theory.ts`).** As committed (saved 01:37) it shared most of the phrases above with the
timeline. At 04:33 it was revised in the working tree, not yet committed, and it now has the round-four wording
where the timeline keeps the old. The pairs, with the finding each belongs to: "Fiona Murray designs the
characters" (timeline 5); "A letter signed \"WA\"" (24); "It belongs to a cabinet computer that, once found, speaks
in Fiona's voice" (14); "No recording says outright what became of David" (4); "shut out of a building" (8); no
fifth body in the Puppet's scene (12); "one after another" and "A training tape says such rooms were being walled
up" (26, 3); "its builders hear of an extra room that was boarded up" and "what looks like a body inside" (27);
"The Mega Pizzaplex stands over a ruin" and "a woman in a rabbit costume walks its halls" (23, 6); `s-michael` in
the era `aftermath` (10). Until the timeline follows, a reader meets two tellings of each. Two points in the
revised storyline still differ from these files. `s-fazbears-fright` gives "Thirty years later" the kind
`relative` and cites the duplicate record `scott-2015-fnaf3-store-thirty-years`, where `dates.ts` and the rulings'
list have `printed` and `scott-fnaf3-steam-description`. And `s-rabbit-in-code` still tells the second firm's
scan before the tester's ending (timeline 18).

**Evidence records.**
- **Special Delivery.** All 28 records carry `when.year` 2019 or 2020, and ten carry labels such as "Special
  Delivery's present (c. 2019-2020)". R24 (2): these are delivery days, and no year after 1987 is in the story.
  `sd-circuit-board-scan-virus` has "Days later" in its `claim`, which is where the timeline's "days later" comes
  from.
- **Dates on textures and props marked `exact`.** 32 Secret of the Mimic records (29 with "present night (work
  order dated 9/07/79)", the earnings chart, the 1974 memo and the order forms) and `hw2-fall-fest-1970-poster`
  have `precision: "exact"`, which the UI draws as a "Printed" pill. Two labels say "printed" outright ("years
  printed on the chart", "year printed on the poster"), and the poster's note speaks of "two printed years".
  R24, R27.
- **Into the Pit.** 25 of its 34 records carry `year: 1985` and the label "1985 (the past reached through the
  ball pit)". R23: the logo dates nothing.
- **Duplicates.** `scott-fnaf3-steam-description` and `scott-2015-fnaf3-store-thirty-years` are one text; the
  storyline cites one and `dates.ts` the other. `scott-silver-parasol-website` and `scott-2019-silver-parasol-logo`
  are one post (the first record says so).
- **Tags.** `fnaf2-call2-older-models` and `fnaf2-call2-the-smell` are about the previous location's machines and
  are tagged only with the 1987 restaurant, so the old location's page lists four records.
  `fnaf3-stage01-fredbear-spring-bonnie` is tagged `fredbears-family-diner` though its note says the tag "is
  implied only". `scottgames-site-fnaf4-html-83` is tagged with both `bite-victim` and `crying-child`.

**The rulings.**
- `model.md`, dating row 9, still says "The day needs two assumptions"; R2 now gives three cases (dates 2).
- `model.md` 3.2, step 11, and dating row 26 still say a later place for the Circus Baby venture is "equally
  allowed"; R12 withdrew that.
- `model.md`, dating row 36 and section 5.2, give the Special Delivery run as "28 November 2019 to 8 April 2020,
  one more in February 2021" (dates 3). Row 36 and the list of conventions in 3.2 still say "Ness is already
  changed", which R19's reasoning no longer says.
- `model.md`, dating row 31: "an unused variant reads 1983", against W7 (dates 12).
- `rulings-brief.md`, step 24: "the lawyers halt the work within a day" measures story time in delivery days,
  against R24 (2).
- `rulings-brief.md`, step 23, tells the tester and the woman on the call as one person and marks the step "Firm";
  `model.md` 3.2 marks that as inferred (timeline 29).

**The UI (`integ`, at `45f5a96`).**
- Every entry of `deaths.ts` is printed with the word "Death", and the page header reads "43 events and 23
  recorded deaths" (deaths 1).
- The "killed by" filter takes `by[0]` and folds identities. So the bitten boy is filed as killed by Michael
  Afton, through `older-brother` same-as `michael-afton`, a `theory` link, though the entry's cause is an
  accident; and the fire as killed by the Cassette Man (deaths 5).
- The page does not read the new `event` field. It derives each death's event from shared records, and the
  result is the same for 22 entries. `d-edwin`, which rightly has no `event`, is drawn inside the 1979 night.
- `DATE_KIND.teaser.help` reads "Shown only in an official teaser, not in the game itself"; the bases beside it
  say the year is also on a work order among the game's files.
- The timeline's caveat calls every undated placement "a convention", which blurs the model's line between an
  order that records fix and one that they do not.
