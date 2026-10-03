# Layer fix: timeline, dates, deaths, places, locations, games

Fix pass on `src/data/timeline.ts`, `dates.ts`, `deaths.ts`, `places.ts`, `locations.ts` and `games.json`, against
`factcheck-8.md` (read in full, and its end re-read at 05:30: no addendum; the file is as saved at 04:41) and
round four of `rulings-brief.md`. Nothing is committed. No other file was edited.

## Findings

**Applied: 93 of 93.** Timeline 37, dates 20, deaths 17, places 10, locations 6, games 3. **Rejected: none.**

Five were applied by a different remedy from the one the checker wrote out. The fault is gone in each.

| Finding | The checker's remedy | What I did, and why |
|---|---|---|
| deaths 1 | a new kind `survived` for entries that are not deaths | The orchestrator's `outcome` field carries it instead (below). The kind `machine` is relabelled "By a machine", because the page prints the kind's label beside every entry and "Killed by a machine" was false of Michael and of Arnold. `d-phone-guy` is `unknown`, as asked. |
| deaths 3 | `d-save-them`: `kind: "unknown"` | The entry is removed and the event `t-1987-yellow-suit` tells SAVE THEM in full (the five bodies, the purple figure, "the game never says whether they are the five of the clippings or a second group", the model's lean and "it is only a lean"). On the model's reading the bodies are the earlier five shown again, so with any `outcome` the entry either counted the five twice or said something false. R9; `fnaf2-save-them`. |
| deaths 16 | add RUIN's standard ending, or say it is left out | Added: `d-ruin-cassie`, `outcome: "not-shown"`, `branch: "Standard ending"`, `event: "t-ruin"`. `t-ruin` now tells that ending in one sentence. `ruin-ending-standard`. |
| dates 10, locations 4 | set the 1965 labels to `estimated`, or cut them | Cut, the second option, so that the era, the place, its bar and the event agree with the revised storyline ("Before the night in 1979"). The labels are now "up to the night of 1979" (`teaser`) and "before the night of 1979" (`relative`); 1965 is in the tooltips and in the place's summary, as a year read from an image. |
| timeline 37 | keep the old sort keys and say so in the comment | Renumbered, so that the rule "step times 10000" has no exception: the 1983 week is 60000 to 68000 and the child outside 70000 (deaths 65100 and 70100). The order is unchanged. |

## The orchestrator's items

- **`outcome` on `Death`.** Added as specified. Twenty-three entries: 10 deaths (no mark), 3 `presumed`, 7
  `not-shown`, 1 `survives`, 2 `branch`.
  - `presumed` (no record states or shows the death; the note says on what): `d-david` (retitled "David Murray's
    death is implied, never stated"), `d-crying-child`, `d-phone-guy`.
  - `not-shown`: `d-edwin`; `d-arnold` and `d-arnold-crash` (two endings of one game: each title and `branch` names
    its ending, "Walk Away (Clock Out)" and "Framed (Unfinished Business)", and each note names the other);
    `d-hw-jeremy`; `d-sb-staff` and `d-sb-residents` (disappearances); `d-ruin-cassie`.
  - `survives`: `d-michael-scooped`.
  - `branch`: `d-sb-vanny-fall`, `d-sb-vanny-disassembled`; both are now `theory` (R19 (4)).
  - Kept as plain deaths, on purpose: the five (the clippings say "presumed dead", but five child ghosts and the
    gravestones firmly imply it, and the checker lists the entry among the deaths); the fire of Pizzeria Simulator
    (one ending, Completion, but the one the later games follow: the note says so, and `outcome` is not `branch`).
  - Every title, victim label and note was made to agree with its mark. The header comment defines the five
    values as used.
- **"The company's largest building", "hunts".** Gone from the era, the event, the place and the game summary:
  "The Mega Pizzaplex stands over a buried pizzeria"; "walks the building".
- **"Thirty years".** Kind `printed` kept. One constant, `THIRTY_YEARS`, now opens all four bases (event, era,
  place, game): "Scott's store text prints the interval: 'Thirty years after Freddy Fazbear's Pizza closed it's
  doors'. The interval is printed; the closing it counts from has no year, so the date is a distance from an
  undated event and gives no year." The header comment of `dates.ts` says the same under `printed`.
- **Duplicate records.** `scott-fnaf3-steam-description` is cited nowhere in the six files now; every citation
  of the store text is of `scott-2015-fnaf3-store-thirty-years`, the id the storyline uses. For the other pair I cite
  `scott-silver-parasol-website`, also the storyline's.
- **Beat eras.** Every beat tells events of one era of the timeline (table at the end).

## Changed beyond the report

Same fault, other places:

- **F10-N4 as the first machine** was still flat in `d-david` ("the first machine says that it misses its child":
  the record is F10-N4's message), `d-edwin`, `d-murray-technicians` and `inventors-house`. All now say the
  computer or the voice, with the reading marked once.
- **Which restaurant.** `t-purple-suits-up` and `t-bite-1983` carry the place tag `fredbears-family-diner` and did
  not say the restaurant is unnamed (as deaths 17 found for the death). Both now do. `t-give-life` and
  `d-missing-children` now say that the clippings being news of the old restaurant is the model's reading.
- **Security Breach's endings.** `t-security-breach` said of the Redemption ending "that later games follow it is
  the model's reading". R19 (4) and step 26 hold that at low to medium, and less than Vanessa's release. Now: "that
  she is freed there is the model's reading, and that later games follow that ending is held more weakly still."
- **Pizzeria Simulator after the Fazbear's Fright fire; UCN after Pizzeria Simulator.** R12 grades both medium to
  high. The labels of `t-ffps`, `t-ucn`, `d-ffps-fire`, the place `ffps-pizzeria`, its bar and the two games now
  carry "most likely", as the beats' `when` already did (`revise-lead.md` asked for this).
- **Labels that lean on position.** Besides the seven of timeline 35: the three Afton Robotics events and
  `d-elizabeth` ("placed before November 1987 by convention"), `t-sister-location` and the three deaths of
  Michael's week ("placed after his father's death by convention"), `t-boards-scanned`, and the ranges of the eras
  `funtime` and `pizzaplex` ("no year; most likely after the Pizzeria Simulator fire", was "later; no year").
- **"After that" for the sealing.** `PLACE_DATES["safe-room"]` had the killer die in a safe room "after" the
  walling-up, flat: now "most likely after". "Built into every location that used the springlock suits" said more
  than the tape ("Every location"): cut.
- **Special Delivery.** No real-world year is left in any tooltip (the checker's paste kept "28 November 2019"):
  "the days on which they reached players: delivery days in the real world".
- **First sentences.** About twenty event summaries and a few place summaries opened on a pronoun, "the
  incident", "the two games" or a bare quotation. Each now opens by saying what it is.
- **Records opened again and text tightened to them**: `t-boards-scanned` ("declines" was the record's title, not
  what the tape says: now his nightmares and the tape's own sentence; the developer's hiring in the tape's words);
  `t-vanessa-hired` and `d-sb-staff` ("the night staff are replaced by robots" was more than the notice says);
  `d-sb-vanny-fall` ("tackles", the record's verb, for "carries"); `t-elizabeth-killed` (the claw is the minigame's,
  the words are Baby's own account).
- **`by`.** The page files an entry under `by[0]`. `d-crying-child` is now `["fredbear", "older-brother"]` and
  `d-william-springlock` `["spring-bonnie", "missing-children"]`, so that an accident is not filed as a killing by
  the brother or by the five; `d-ffps-fire` is `[]` (deaths 5).
- **Doubled hedges** that my own fixes introduced ("most likely ... most likely", in six places) were removed
  after `wordcheck.py` showed them.

## Checks

- `npx tsx scripts/validate.ts`: OK (43 events, 28 places, 20 beats). Its one warning is about three entities
  tagged on evidence records that have no person page; it is not about these files.
- `npx tsc -b`: no errors.
- `wordcheck.py . --all`: in my files, only "1988" in four tooltips of `dates.ts` ("not before November 1988"),
  which the rulings list as a derived date and the checker passed. No label shows it.
- My own checks, all clean: every `[[id]]` in a summary is in that entry's evidence list and exists; every quoted
  phrase (290) is verbatim in a cited record's `quote`, or is a printed word from its `claim`, title or location
  (20, the same class the checker accepted); every event and death sits inside its place's span; each death's
  `event` exists, is in the same era and sorts before it; the eras do not overlap; place kinds agree between
  `dates.ts` and `locations.ts`; the 18 "set in" labels agree with `GAME_DATES`.
- The records editor changed evidence files while I worked (titles, claims and notes in `ffps-ucn`, `fnaf123`,
  `fnaf4-sl` and `hw`). The quote check was run again at the end, against the records as they then stood.

## For the orchestrator

1. **Interface: `outcome`, `event`, `branch`.** The page must read `outcome` (print it in place of "Death"; count
   only entries without one) and `event` (it still derives a death's event from shared records, which draws
   `d-edwin` inside the 1979 night though it has no `event`). Titles of ending entries now begin "One ending
   (Walk Away): ..." and `branch` holds the ending's full name, so the chip "one ending: ..." repeats part of the
   title: drop one of the two in the row. `DEATH_KIND.machine.label` is now "By a machine" (a filter chip changes
   its text). The header "N recorded deaths" should become deaths and other entries (`factcheck-9.md`, 24).
2. **Storyline, `theory.ts`.**
   - `s-fazbears-fright`: "Thirty years later" has the kind `relative`; the rulings and `dates.ts` have `printed`.
     Use the basis above. The record id already agrees.
   - `s-rabbit-in-code` tells the second firm's scan before the tester's ending in `s-follower`; the timeline
     tells the tester first (steps 23, 24). No record orders the two, and `SD_EMAILS` now says that this order is
     a convention. Either is defensible; the beat should say "by convention" or the scan should move.
   - `s-pizzaplex`: "for whom the building has no guest profile". R22 and the record have Freddy's scan find none.
   - `s-five`: `when` is "June 26th"; the timeline's label is "a June 26 between 1980 and 1986" (`estimated`).
3. **Evidence records my files sit beside** (not edited; none is leaned on now):
   - Special Delivery: `when.year` 2019 or 2020 on all 28, and "Days later" in the claim of
     `sd-circuit-board-scan-virus`. The timeline no longer says "days later".
   - Secret of the Mimic: `precision: "exact"` and "work order dated 9/07/79" on some thirty records, which the
     page draws as Printed beside my `teaser` pills.
   - Tags: `fnaf2-call2-older-models` and `fnaf2-call2-the-smell` carry only the 1987 restaurant's tag, so the old
     location's page will not list two records its summary cites. `fnaf3-stage01-fredbear-spring-bonnie` and
     FNaF4's restaurant records carry `fredbears-family-diner`, which FNaF3 and FNaF4 never name; my summaries now
     say so. FNaF1's clippings are tagged with FNaF1's building (where they are seen) and the timeline places the
     incident at the old location.
4. **A record wanted.** "The building RUIN shows is the underground route's" (R19 (4), step 26, medium) has no
   record that I could find, so the timeline does not say it; the storyline does ("most likely that ending's
   aftermath").
5. **Interface text.** `DATE_KIND.teaser.help` says "not in the game itself"; every `teaser` basis says the year is
   also on a work order among the game's files. The timeline's caveat calls every undated placement a convention.
6. **`model.md` rows that the checker found out of date**, unchanged by me: dating row 9 ("two assumptions"), row
   26 and step 11 ("equally allowed"), row 31 ("an unused variant reads 1983"), row 36 (the run of delivery days;
   "Ness is already changed"); `rulings-brief.md` step 24 ("within a day") and step 23 (tester and caller as one
   person, marked firm).
7. **`d-sb-vanny-disassembled`** keeps `by: ["gregory"]` (he presses the button) because `people.ts` has no entry
   for the building's robots; the page will file that branch ending under Gregory.

## Beats and eras

Each beat's own events sit in one era. Three beats look into another era without telling an event of it.

| Beat (era) | Timeline events |
|---|---|
| `s-costume-company`, `s-two-machines`, `s-1979` (founding) | `t-murray-workshop` to `t-1979-night` |
| `s-house`, `s-birthday` (diner) | `t-fnaf4-household`, `t-bite-1983` |
| `s-child-outside`, `s-five`, `s-children-stay` (murders) | `t-daughter-killed`, `t-missing-children`, `t-suspect-caught`, `t-give-life` |
| `s-afton-robotics` (funtime) | `t-funtime-board`, `t-elizabeth-killed`, `t-pizza-world-cancelled` |
| `s-november-1987`, `s-last-freddys`, `s-springlock` (pizzeria) | `t-1987-opens` to `t-dismantle-and-death` |
| `s-michael`, `s-fazbears-fright`, `s-trap-fire`, `s-night-without-end` (aftermath) | `t-sister-location` to `t-ucn` |
| `s-rabbit-in-code`, `s-follower` (digital) | `t-boards-scanned`, `t-sd-virus`, `t-help-wanted` |
| `s-pizzaplex`, `s-mimic` (pizzaplex) | `t-pizzaplex-built`, `t-security-breach`, `t-ruin` |

- `s-november-1987` opens on the old restaurant "left to rot": my event for that, `t-old-restaurant-closes`, is in
  `murders`. It is a glance back.
- `s-springlock` cites the tape about walling up the rooms: `t-suits-retired` is in `murders`. Also a glance back.
- `s-follower` (digital) argues who the tester is from Security Breach's records (Vanessa as the guard; the rooftop
  page). Its event is the tester's ending; it tells no Pizzaplex event as its own.
- Events with no beat: `t-purple-suits-up`, `t-diner-closes`, `t-suits-retired`, `t-baby-ejected`,
  `t-ness-searches`, `t-vanessa-hired`, `t-hw2-technician` (its mask is in `s-mimic`).

## Against the records as they now stand

Third pass, 3 October, about 09:20 to 10:50, on `timeline.ts`, `dates.ts`, `deaths.ts`, `places.ts` and
`locations.ts`, and, from 10:26 on the orchestrator's word, `games.json` as well. Started from the files as
committed (they were unchanged from `d059017` through `5b07936`). Not committed. Records were read from the working tree, which the records editor was still changing: the last
change I took in is `ffps-completion-fire` (three machines shown burning, not four; uncommitted at 10:20).

**Counts.** My files cite 344 different records; 212 of them changed in a wording field since `3e780e2`, and 250
in any field. By file, wording fields: `timeline.ts` 161 of 266, `dates.ts` 91 of 141, `deaths.ts` 64 of 104
(105 now: one record added), `places.ts` 83 of 128. No cited record changed its `certainty`. I changed 106
entries: 4 eras (3 summaries and one range label), 28 of 43 events, 16 of 23 deaths, 16 of 28 places, 32 date
bases (14 event, 4 era, 7 place, 7 game), 2 span labels and 8 of the 18 games in `games.json`. No entry added,
no id renamed, no sort key, era, date kind or place tag changed. (The count was 85, in the five files, before
the three additions of 10:26, and 102 before the two items of 10:38.)

**Status marks, an outcome and an agent list changed (three statuses, one outcome, one `by`).**

- `t-dismantle-and-death`: canon to strong. The title says "dies"; the record shows the suit snap shut, blood and
  a slump, and calls the death the usual reading (R12: a firm inference).
- `d-fiona`: canon to strong, and `outcome: "presumed"` added. The log does not speak her name, and "gone" as
  dead is "the reading the other recordings support" (`secret-of-the-mimic-log-death`). She is now treated as
  David is. The interface will count one death fewer.
- `d-murray-technicians`: canon to strong. The bodies are told as described, and who killed them is the voice's
  account ("it caught them all"), with "it" read as M2.
- `d-william-springlock`: `by` loses `missing-children` (R12: never "the ghosts kill him"; the person page lists
  a death under everyone in `by`).

**Titles changed (11: six events, five deaths).** Events: `t-fiona-dies` ("Fiona is gone, and Edwin gives their son a machine for a
babysitter"), `t-mimic-born` ("A second machine, M2: "It mimics rage""), `t-wa-letters` ("... says it owns the
land and bids for the firm's work"), `t-pizzaplex-built` ("A construction crew breaks through to an old shaft
under the Pizzaplex; a pizzeria lies buried below"), `t-vanessa-hired` (second half: an employee asks "Where is
everyone?"), `t-hw2-technician` ("Someone in a mask is pressed to take a gift, and a rabbit mask is held out to
a girl"). Deaths: `d-fiona`, `d-arnold`, `d-sb-staff`, `d-sb-therapist`, `d-sb-vanny-disassembled`.

**Each changed entry, in one line.**

Eras (`timeline.ts`)
- `founding`: "Edwin builds one machine ... The boy's death is implied, never stated; after it he builds a
  second" became "Fiona Murray is gone ... No recording says outright what became of her or of the boy; both
  deaths are implied. A second machine ... the model reads it as built after the boy's death"
  (`secret-of-the-mimic-log-death`; beat `s-two-machines`).
- `digital`: "man-shaped" became "person-shaped" (`hw-rabbit-figure-appearance`).
- `pizzaplex`: Help Wanted 2 was told flat as "Afterwards a technician is urged to open a gift"; now "Most
  likely between that night and RUIN, someone in a mask is pressed to take a gift" (round 4c, R22;
  `hw2-glam-freddy-fazbear-technician`).

Events (`timeline.ts`)
- `t-murray-workshop`: "Fiona Murray, the mother of his son" (cited to the log that does not name her) dropped;
  the chart and order forms are "read from images"; "the company's dispatcher says" became "a Dispatch voice,
  in a call that opens "this is dispatch with Fazbear Entertainment"" (`secret-of-the-mimic-dispatch-contractor-murray`).
- `t-springlocks-for-diner`: "Hen is to be warned" became "its writer will warn Hen about their "odd
  behaviors""; the poster is "read from an image" (`secret-of-the-mimic-mail-springlocks-hen`).
- `t-fiona-dies`: title and first sentence "Fiona Murray dies"; now told in the order of the recordings, with
  "no recording says outright what became of her", and the voice speaking as Fiona marked as the model's M1
  (`secret-of-the-mimic-log-death`, `-log-m1-as-fiona`; beat `s-two-machines`).
- `t-mimic-born`: "Edwin builds a second machine after the first tells him to" became "there is a second
  machine, M2, which "began as a copy of my program", an unsigned message says"; the voice is "a voice speaking
  as Fiona"; "refuses at first" became "refuses"; the rage is "most likely" his (R21 round 4b;
  `secret-of-the-mimic-log-try-again-build-another`, `-mail-received-5-min-ago`).
- `t-wa-letters`: "tells Edwin Murray" became "It does not name its reader"; "it wants his software" became
  "opens mid-sentence on "software development and the entire MCM catalog""
  (`secret-of-the-mimic-mail-confidential-wa`).
- `t-1979-night`: work order "in his van" became "read from an image and by a fan wiki's caption found in his
  van"; "the company's dispatcher" and "the real dispatcher" became "a Dispatch voice" and "most likely the
  company's real one"; the bodies "of earlier visitors" became "bodies inside character costumes ... that the
  bodies are theirs is the usual reading"; "a Fredbear springlock suit" became "the springlock suit that the
  game's files label Fredbear"; "the second machine is put to sleep" became "the Mimic, which the archive reads
  as the second machine, is given a program, takes a child's stature and sleeps" (six records of that night).
- `t-fnaf4-household`: "An older brother in a Foxy mask" became "An older boy ..., his brother by a later
  scene's dialogue" (`fnaf4-brother-foxy-mask-tv`).
- `t-purple-suits-up`: "staff wear the two yellow suits" became "people wear" (`fnaf4-fredbear-suit-employee-chase`).
- `t-give-life` and `t-1987-yellow-suit`: that the older machines walk, and that the yellow bear first stirs on
  Night 6, are now "by a fan wiki's activity tables"; the suit "the model reads ... as the yellow bear's" became
  "the model leans to" (`fnaf2-old-models-walk-from-night2`, `fnaf2-golden-freddy-night6-only`; chapter
  `november-1987`).
- `t-funtime-board`: "a questioner", "the designer lists what Circus Baby can do" became "an unnamed man", "the
  man he addresses lists what "she", most likely Circus Baby, can do ... Only the surname is spoken"
  (`sl-intro-mr-afton-board`).
- `t-pizza-world-cancelled`: "is cancelled over "reported gas leaks"" became ""has apparently been cancelled
  due to reported gas leaks""; a local and a tenant are named as the sources; the page-source line is
  "unattributed", and that it leads to the rentals is "the archive's reading" (four `scottgames-site-sl-*`
  records).
- `t-fnaf1`: "banging, a tune and a scream" became "banging, music and a scream, as the transcript describes
  it" (`fnaf1-call4-phone-guy-attacked`).
- `t-dismantle-and-death`: "the hidden room" became "the room with the suit"; "blood pours out" and "that he
  dies there is a firm inference" added; status strong (R12's rule; `fnaf3-n5-springlock-death`).
- `t-sister-location`: "purple eyes open in his mirror" became "afterwards a dark shape at a mirror opens
  glowing purple eyes" (`sl-real-ending-scooped-mirror`).
- `t-michael-speech`: "Michael Afton" became "Michael"; the sign is "partly legible"
  (`sl-golden-freddy-cutscene-father`, `-springtrap`).
- `t-baby-ejected`: "Both keep their Sister Location voices" became "By the credits, the two are voiced by the
  actors of Sister Location's Baby and Funtime Freddy" (`ffps-credits-returning-voices`).
- `t-boards-scanned`: "man-shaped" became "person-shaped".
- `t-help-wanted`: "a beta tester on ... quality-assurance team" became the waiver's own words; "a sealed door"
  became "the hatch of a huge metal door"; "the figure takes the player over" became "the player ends up
  standing on the stage as the rabbit figure"; "The model reads" became "Most likely" (`hw-waiver-qa-team`,
  `hw-trapped-ending`, `hw-merge-ending`; beat `s-follower`).
- `t-sd-virus`: "By the emails' order Fazbear's lawyers act before the contractor understands" became "In the
  next email delivered, Fazbear's lawyers order a halt ... Only after that does the contractor report" (round
  4b, R18).
- `t-pizzaplex-built`: "A construction crew ... finds an older pizzeria buried underneath" became "breaks
  through to the shaft that leads down"; "an older pizzeria" became "a ruined pizzeria"
  (`security-breach-msg-old-elevator`, `-underground-pizza-place`).
- `t-vanessa-hired`: "its staff stop being seen" became "one of its staff asks where everyone is"; the notice
  is quoted (`security-breach-msg-job-security`, `-msg-pink-slip`).
- `t-security-breach`: "The game names neither" became "In the archive's records the game names neither";
  "that she is freed there is the model's reading" became "the model reads her as Vanessa, who may have been
  freed"; "falls from the roof or is taken apart" became "Freddy tackles ... off the roof, or Gregory orders
  the building's robots to take her apart"; the rooftop page is "on the burning roof, looking down" (R19 round
  4c; the four ending records).
- `t-hw2-technician`: label "between" became "most likely between"; "In the wrecked Pizzaplex" became a
  marked placing; Freddy "takes the wearer for" became "asks"; the ending is "By a fan wiki's summaries";
  "The technician's fate" became "What becomes of the player" (`hw2-faz-force-ending`,
  `hw2-glam-freddy-fazbear-technician`).
- `t-ruin`: the wreck is "as a fan wiki's summary describes it"; "the real Gregory" became "a second Gregory
  voice" (`ruin-pizzaplex-abandoned-earthquake`, `ruin-gregory-mxes-explanation`).

Deaths (`deaths.ts`)
- `d-fiona`: "Fiona Murray dies", canon, became "Fiona Murray is gone: her death is the reading the recordings
  support", strong, presumed; label, place, note and date basis follow (`secret-of-the-mimic-log-death`).
- `d-david`: "The nearest the game comes ..." became "One birthday film ends on his father's line ...; the game
  never shows or says what happened there"; the refusal is an answer to "a voice speaking as Fiona"
  (`secret-of-the-mimic-film-yellow-playground`, `-log-refusal`).
- `d-edwin`: "answers him in his own words" became "answers with a father's brush-off, 'Daddy's busy, buddy'"
  (`secret-of-the-mimic-log-turn-around`).
- `d-murray-technicians`: by "The second machine, M2" became "By the voice's account 'it caught them all'; the
  model reads 'it' as the second machine"; "The bodies are shown" became "told as described, with no capture
  on file"; strong (`secret-of-the-mimic-previous-technicians`).
- `d-arnold`, `d-arnold-crash`: "a Fredbear springlock suit" became "the springlock suit that the game's files
  label Fredbear"; by "The second machine" became "The Mimic ... (the archive reads the name as the second
  machine)" (`secret-of-the-mimic-ending-clock-out`).
- `d-phone-guy`: "ends in banging, the tune Freddy plays, and a scream" became "By the transcript ... music, a
  scream and static"; "the fifth is not his voice" became "distorted voices, which a fan wiki says are not his"
  (`fnaf1-call4-phone-guy-attacked`, `fnaf1-call5-garbled`).
- `d-william-springlock`: "The death is shown" became "The scene is shown ... That he dies there is a firm
  inference" with its two supports; "the hidden room" became "the room with the suit"; `by` and evidence as
  above (`fnaf3-n5-springlock-death`, `fnaf3-tape3-bleeding-out`).
- `d-michael-scooped`: "the fused machines then wear his body out of the building" became "a dark shape at a
  mirror opens glowing purple eyes, which implies that the fused machines now wear his body"
  (`sl-real-ending-scooped-mirror`).
- `d-ffps-fire`: "The fire and the burning machines are shown" became "three of the four machines are shown
  burning ... Lefty is not"; "one of the machines is told" became "one of those the Cassette Man speaks to,
  whom he calls 'old friend' and does not name"; 'I believe there is peace' is said "for most of those he
  speaks to" (`ffps-completion-fire`, `-old-friend-hell`, `-peace-perhaps-more`).
- `d-sb-staff`: "Pizzaplex staff stop being seen" became "An employee of the Pizzaplex asks 'Where is
  everyone?'" (`security-breach-msg-job-security`).
- `d-sb-therapist`: "found dead, mangled by machinery" became "found dead: 'It looked like it was mangled by
  machinery'"; by "Machinery" became "Not stated" (`security-breach-cd46-therapists-missing-dead`).
- `d-sb-vanny-fall`: "alive on the roof" became "on the burning roof, looking down"
  (`security-breach-rooftop-vanessa-alive`).
- `d-sb-vanny-disassembled`: "the building's robots take [her] apart" became "Gregory orders the building's
  robots to take [her] apart" (`security-breach-ending-disassemble-vanny`).
- `d-ruin-cassie`: "Gregory's voice" became "The Gregory voice on her Roxy-Talky" (`ruin-ending-standard`).

Places (`places.ts`) and spans (`locations.ts`)
- `murray-costume-manor`: "Fiona, his son's dead mother" became "his son's mother"; the work order's place in
  the van is the wiki's caption.
- `inventors-house`: "the first machine urging him" became "a voice speaking as Fiona"; "in his own words"
  became "with a father's brush-off".
- `fredbears-family-diner`: the poster "prints" the name became "read from an image, carries".
- `circus-babys-pizza-world`: the cancellation and the equipment as in the event.
- `michael-afton-home`: "the real ending ... contradicts that branch" became "the night's other ending ... is
  the one the later cutscenes follow" (`sl-fake-ending-home`).
- `fazbears-fright`: "its burnt-out shell" became "a burnt-out building whose partly legible sign reads as this
  attraction's".
- `ffps-pizzeria`: "the salvaged machines are shown burning as it goes up in flames" became "a fire breaks out
  in it, and three of the salvaged machines are shown burning" (`ffps-completion-fire`).
- `silver-parasol-games-office`: "Scott gave it as Silver Parasol Games" became "In a post titled "Silver
  Parasol Games" Scott wrote of a logo he had made for the other game developer ...; that this developer is the
  first studio is the usual reading" (`scott-silver-parasol-website`).
- `freddy-fazbear-virtual-experience`: "man-shaped"; "one of the company's own testers" became the waiver's words.
- `buried-pizzeria`: "found under the Pizzaplex by a construction crew" became "a construction crew broke
  through to the shaft above it"; "An older pizzeria" became "A ruined pizzeria"; the concrete is what Cassie
  says it looks like. Span label loses "found". The id and the name "The buried pizzeria" stay: the rulings
  and the `pizzaplex` chapter use them.
- `mega-pizzaplex`: "stands over a sinkhole" became "a construction crew at its raceway fears"; the wreck and
  the nodes carry their sources.
- `the-sinkhole`: "the real Gregory" became "a second Gregory voice".
- `fazbear-orientation-program`: years and span label "most likely between"; the recharge station is "by a fan
  wiki's summaries".
- `midnight-motorist-house`: "A boy's door" became "A door in the house" (`ffps-midnight-motorist-closed-door`).
- `the-pit`: "takes the place of Oswald's father" became "pulls Oswald's father into it, and the father who
  comes out has glowing eyes" (`into-the-pit-rabbit-replaces-dad`).
- `freddy-fazbears-pizza-itp`: the 1985 logo is "read from a fan wiki's image and captioned there "seen in the
  arcades"".

Date bases (`dates.ts`)
- `t-springlocks-for-diner`: "after her death a machine speaks as Fiona" became "after she is gone a voice
  speaks as Fiona in the logs, which the model reads as the first machine's".
- `t-fiona-dies`: "Logged before the first machine is built ... she is dead well before" became "Told before the
  recording ...; no record orders the two outright ... she is gone well before"; the poster is "marked '19 70'
  (read from an image)" (`hw2-fall-fest-1970-poster`).
- `t-mimic-born`: the headers "are on screen" became "are read on the game's terminal"; "is built ... after his
  death" became "exists ...; that it was built after his death is the model's reading".
- `t-1979-night`, `ERA_DATES.founding`, `PLACE_DATES.murray-costume-manor`, `GAME_DATES.secret-of-the-mimic`:
  the work order "in the technician's van" became "found in the technician's van by a fan wiki's caption".
- `t-fnaf4-household`, `ERA_DATES.diner`: "Scott's page source and Sister Location's keypad code repeat the
  number" became "Digits in Scott's page source (8 and 3) and the keypad code that players record ... (1-9-8-3)
  point the same way" (`scottgames-site-fnaf4-html-83`, `sl-private-room-keypad-1983`).
- `t-pizza-world-cancelled`: "which puts the cancelled opening before the rental business" became "the archive
  reads it as a bridge ..., and the page does not say so".
- `t-michael-speech`, `GAME_DATES.sister-location`: "the burnt-out attraction" became "a burnt-out building
  [whose] partly legible sign reads as Fazbear's Fright's".
- `t-pizzaplex-built`, `PLACE_DATES.buried-pizzeria`: the crew found the shaft, not the pizzeria.
- `t-security-breach`: "It precedes Help Wanted 2 and RUIN" became "It precedes RUIN and, most likely, Help
  Wanted 2".
- `t-hw2-technician`, `PLACE_DATES.fazbear-orientation-program`, `GAME_DATES.help-wanted-2` (label too):
  "most likely" between, medium to high; the mask is the one of RUIN "by a fan wiki".
- `t-ruin`, `GAME_DATES.ruin`, `PLACE_DATES.mega-pizzaplex`: the wreck is "by a fan wiki's summary".
- `PLACE_DATES.freddy-fazbears-pizza-itp`, `GAME_DATES.into-the-pit`: the logo's provenance.
- `GAME_DATES.fnaf-world`: "echo FNaF4 on purpose" became "end on the last yellow line of FNaF4's sixth night".

**Dates, as asked.** No basis calls a date printed or confirmed in play where a record says read from an image
or the teaser's. "Printed" is left only for FNaF4's television, the clipping's June 26, the cheques, "'87"
(spoken) and Scott's thirty years. The mailbox headers are "read on the game's terminal". No date kind changed.

**The five sentences of `ead932c`.** The first-use form of the burnt rabbit reads well in `t-security-breach` and
`buried-pizzeria`. "a blonde woman, drawn as Vanessa is and not named" stands; I changed what follows it. The
two rooftop sentences said "standing alive above the unmasked woman" and "alive on the roof": the record no
longer says alive, and both now say "on the burning roof, looking down". The bases of `t-ruin` and
`ERA_DATES.pizzaplex` stand, with a source added to the first.

**Checks.** `validate.ts` ends `OK`; `tsc -b` clean; `wordcheck.py --all` shows the same five hits in my files
as before (the "1988" of the arithmetic in `dates.ts`). My own checks: every quoted phrase in the five files is
in the present `quote`, `claim`, `title` or `location` of a record that entry cites (0 misses); every `[[id]]`
is in its entry's evidence list (0 problems); ids, sort keys, eras, date kinds and the dates' evidence lists
are unchanged; every death's event exists, in the same era, with an earlier key.

**Not mine to fix.**

1. (Settled at 10:26: `games.json` is mine, and its three faults are mended; see "The three additions".)
2. `ffps-completion-fire` changed after the chapters were closed. The `ffps` chapter says twice that "salvaged
   machines are shown burning as the building goes up"; the record now has three machines, not Lefty, and gives
   the building's destruction as the wiki's account. The beat's "The building burns" still matches the record's
   title.
3. `rulings-brief.md`, the order of events: step 2 ("Fiona Murray dies ... and it takes her voice. Firm") and
   step 3 ("M1 urges Edwin") are in the wording that round 4b replaced; step 27 ("the mask passes to Cassie.
   Firm for the scenes") is firmer than `hw2-faz-force-ending`, which is a wiki's summary and names no girl.
   R19 (5) and R21 still say "alive above the unmasked woman" and "his son's dead mother".
4. Records: the `when.label` of the Help Wanted 2 records says "after Security Breach's night and before RUIN"
   flat, where round 4c makes it "most likely". The records of M1 and of the voice speaking as Fiona carry the
   person tag `f10-n4`, which is the model's join (my events carry the same tag). One record says "the buried
   pizzeria" (`ruin-burners-inside-of-an-oven`) and another "a ruined pizzeria".
5. Ids that say more than their text: `t-fiona-dies`, `secret-of-the-mimic-log-death`,
   `security-breach-rooftop-vanessa-alive`, `into-the-pit-rabbit-replaces-dad`. Ids are not shown.
6. The beats-and-eras table above stands: no event moved era.

### The three additions (10:26)

**1. The VR studio (`places.ts`).** It already said less than "Scott gave it as Silver Parasol Games" after this
pass; it now uses the words of `people.ts`: "In a post titled "Silver Parasol Games" Scott wrote that he had a
logo made for the mysterious "other game developer" mentioned in the game. The post does not say which
developer that is; the usual reading is this studio." It cites `scott-silver-parasol-website`, the one of the
two records that `people.ts` and the chapter list also carry.

**2. `games.json`, all 18 summaries and labels**, read against the records and against the table of the final
chapter `games`. No label is firmer than its row there. Eight entries changed:

- `fnaf1`, label: "(the cheques print the year as 'xx')" became "(the cheques print a day and a month, and no
  year)" (`fnaf1-paycheck-night5`, `-night6`: `kind: printed`, `precision: unknown`).
- `fnaf2`: "a child killed outside a party, the Puppet giving masks to dead children, and a purple man" became
  "a purple figure killing a child who cries outside, and the Puppet giving masks to four grey, dead-looking
  children". No record has a party; the children are "dead-looking" (`fnaf2-take-cake-to-the-children`,
  `fnaf2-give-gifts-give-life`).
- `fnaf3`: "built from the old restaurants' relics around one real find: a yellow rabbit suit" became "stocked
  with relics of the old pizzeria. Its builders find one animatronic, a decayed rabbit"; "a purple man
  dismantling" became "a purple figure taking ... apart" (`fnaf3-coming-soon-newspaper`,
  `scott-2015-fnaf3-store-thirty-years`, `fnaf3-springtrap-name`). "Dying inside a yellow rabbit suit" stays:
  R12 lets it be said flat.
- `fnaf-world`: "echo FNaF4 on purpose" became "end on FNaF4's promise, "I will put you back together."" (the
  chapter's row; `fw-opening-put-you-back-together`).
- `special-delivery`: "to subscribers' homes" became "to its subscribers"; "Misdirected company emails" became
  "Company emails that reach the player" (the advisory says only that the server "may be directing email to
  incorrect recipients": `sd-mail-server-advisory`).
- `security-breach`: "is shut in ... overnight" became "spends one night inside" (no record has him shut in).
- `into-the-pit`: label "(placement unconfirmed)" became "which dates nothing" (the chapter's row); "a yellow
  rabbit follows him back" became "in the present, a yellow rabbit pulls his father into the pit"
  (`into-the-pit-rabbit-replaces-dad`).
- `secret-of-the-mimic`: label "on a work order in the technician's van" became "on a work order read from an
  image"; "an endoskeleton that has left earlier visitors dead inside mascot costumes" became "An endoskeleton
  is loose in the building, and earlier visitors lie dead inside mascot costumes" (beat `s-1979`;
  `secret-of-the-mimic-previous-technicians`).

Ten stand as they were: `fnaf4`, `fnaf4-halloween`, `sister-location`, `ffps`, `ucn`, `help-wanted`,
`curse-of-dreadbear`, `ruin`, `help-wanted-2` (the two changes of `fc3038e` read right) and
`freddy-in-space-2`. `GAME_DATES.into-the-pit` takes the same label as the JSON.

**3. The four FNaF1 records with a printed day and month and no year** (`fnaf1-news-kids-vanish`,
`fnaf1-news-dressed-as-mascot`, `fnaf1-paycheck-night5`, `fnaf1-paycheck-night6`). Every basis that rests on
one now says that a day and a month are printed and the year is not:

- `EVENT_DATES.t-missing-children`, `ERA_DATES.murders`, `d-missing-children` (its date basis): "June 26th is
  printed ... with no year" became "A clipping prints a day and a month, June 26th, for two children, and no
  year".
- `EVENT_DATES.t-suspect-caught`: now opens "The clipping prints a day and a month and no year"; June 27 stays
  derived, as `fnaf1-news-suspect-captured` has it.
- `EVENT_DATES.t-fnaf1`, `PLACE_DATES.freddy-fazbears-pizza-fnaf1`, `GAME_DATES.fnaf1`: "dated 11-12 and 11-13
  with the year printed as 'xx'" became "print a day and a month, 11-12 and 11-13, and no year: where the year
  would be they read 'xx'". `ERA_DATES.pizzeria` says the same in a clause. The event `t-fnaf1` says it in its
  summary too.
- The kinds stand: the bracket for the five is estimated, June 27 and FNaF1's November are derived. The header
  comment of `dates.ts` gains two lines on this case.

**Two more, found while reading for these.** `fazbears-fright` (place): "It is built around one find" became
"Its builders make one find"; `t-fazbears-fright`: "builds a horror attraction from the restaurants' relics"
became "with relics from "the decades-old pizzeria"" (`fnaf3-coming-soon-newspaper`: one pizzeria, and
"featuring", not built from).

**Checks after the additions.** `validate.ts` ends `OK`; `tsc -b` clean; `wordcheck.py --all`: the same five
"1988" hits in `dates.ts` and none in the other five files; quotes 0 misses (now covering `games.json`, each
summary against the records of its own game); citations 0 problems; structure unchanged.

### Two more items (10:38)

1. `t-dismantle-and-death`: "three games later the credits give the salvaged rabbit's voice that name" became
   "Pizzeria Simulator's credits later give the salvaged rabbit's voice that name" (the count passed over FNaF
   World; the storyline has the same sentence). No other counted "games later" is left in the six files.
2. "June 26" became "June 26th", the clipping's own form, in all seven places that lacked it: the range label
   of the era `murders`; the `yearLabel` of `t-missing-children` and of `d-missing-children`; the bases of
   `EVENT_DATES.t-missing-children`, `ERA_DATES.murders` and `PLACE_DATES.freddy-fazbears-pizza-original`; and
   the date basis of `d-missing-children`. "June 27" became "June 27th" in the same way, as the chapters
   `murders` and `timeline-math` write it: the `yearLabel` of `t-suspect-caught` and its basis. No bare
   "June 26" or "June 27" is left in the six files.

Checks after these: `validate.ts` ends `OK`; `tsc -b` clean; `wordcheck.py --all` unchanged for my files; ids,
sort keys and date kinds unchanged; every `[[id]]` is in its entry's evidence list.
