# Fact-check 4: The murders and The night shift

## What was checked, and against what

- **Chapters.** `child-outside`, `murders`, `golden` in `src/data/chapters/murders.ts` (as saved at 01:17 on 3 October,
  sha256 `ba46770e…`) and `november-1987`, `fnaf1-restaurant`, `springtrap` in `src/data/chapters/nightshift.ts`
  (01:18, `2107a8aa…`). Neither file changed while I worked.
- **Storyline beats.** The six whose `sections` name those chapters: `s-child-outside`, `s-five`, `s-children-stay`,
  `s-november-1987`, `s-last-freddys`, `s-springlock`. `theory.ts` changed while I worked (commit `e027a3f`). The
  findings below are on the committed text (`975ed442…`), which matches `telling.md` section B word for word.
- **Records.** All 153 records the two files name (cited, counter-evidence, filed under `further`, or inside a date
  pill) were opened in the JSON. Every figure and hero image was looked at against its caption.
- **Rulings.** `rulings-brief.md` and `model.md` (R1, R7 to R12, R24, R25, R30) as saved at 00:54, and `telling.md`
  and `telling-revisions.md` as regenerated at 01:37 and 01:38. `npx tsx scripts/validate.ts` passes and has no
  warning that names these chapters.
- **The wiki** was consulted only as a transcript and screenshot aid. Two findings rest on what it shows
  (`golden` 3, `november-1987` 1), and both say so.

## The checks the assignment named

| Check | Result |
|---|---|
| Every quoted phrase is verbatim from the cited record's `quote` | Clean. All 136 quoted phrases and quote blocks in the six chapters and six beats match the record's `quote`, or a printed label in its `claim`. No misquote. |
| Nothing shown in a death minigame is used for when or where it is set | Clean in the argument. Two leftovers: the word "restaurant" for where the child died (`child-outside` 5), and one filing (`november-1987` 10). |
| "The bodies in the mascots" is the model's reading, never shown | Clean in the answer, the callout, the body and the beat. One sentence of the `tension` blurs it (`golden` 4). |
| No act is stated for November 1987 | Clean, and the required sentence is there. But the tampering, which the call gives as "may have... we're not sure", is told as a fact three times (`november-1987` 2). |
| "Used" is not glossed as "wore" | Clean. |
| The daughter's death before the five is a convention | Clean in the chapter. The beat puts the reading in her father's mouth (beats 1). |
| Where the five are after the dismantling matches R30 | Clean in `golden` and `springtrap`: "not shown", the fade is not told as release, no machine is named. |
| Book-only names and fan labels | None, in text or in a link label. |
| Written to the current rulings | Not fully. `telling-revisions.md` was written at 01:38, after both files were saved. Its round-three fields for `murders` and `springtrap` are not applied (`murders` 2, `springtrap` 1). |

Problem types used below: `overreach`, `unsupported`, `wrong record`, `no record`, `uncited`, `dates`, `frame`
(answer, confidence, counter-evidence, tension), `rulings` (disagrees with a ruling or its required wording),
`consistency` (with itself or another chapter), `reader`.

---

## `child-outside`: The child outside

**Verdict: minor fixes.** The argument is sound and every quotation is exact. The fixes are small.

1. **"That man is {{william-afton}}"**. `overreach`: an `implied` step stated flat. `ffps-completion-old-friend-hell`
   (notes: "The 'old friend' is not named. Reading it as... William Afton is implied"). The sentence also joins the
   tape's "he" to the speech's "old friend" without saying so. ((killer)) itself writes "The friend is most likely
   the rabbit". Fix: "That man is most likely {{william-afton}}, the one machine there with a man's name in the
   credits [[ffps-credits-william-afton]] (the chain is argued in ((killer)))."
2. **"Only when the child has faded from view can the Puppet move."** `consistency`. The chapter's own hero image
   shows the Puppet at the exit while the child is still at the window, and its caption says so.
   `ffps-security-puppet-trapped` says only "The child then fades from view and the Puppet is able to move". Fix:
   "As the child fades from view, the Puppet gets free."
3. **"Two minigames show a child dying outside"**. `overreach`. Security Puppet shows no death: a child at the
   window, then a body (`ffps-security-puppet-dead-child`: "The killer is not shown"). Fix: "Two minigames show a
   child dead outside while other children are indoors".
4. **"as it does wherever a later game was made to settle an earlier one: Scott said in a 2018 interview, on record
   here as a transcript"** (callout). `rulings` (style guide C3): a transcript is support only, and here it is the
   one record cited for the rule that decides "daughter" against "him". The games' own ground is already in the
   `tension`. Fix: lead the callout with it, "Pizzeria Simulator restages the scene while her father describes it
   [[ffps-completion-security-puppet-terminal]]", and keep Scott's sentence as the support.
5. **"shut out of a restaurant"** (answer), **"killed outside the restaurant"** (question), and the beat's "shut
   outside a restaurant". `no record`. `ffps-security-puppet-trapped` says "outside the building", and
   `ffps-security-puppet-assignment` notes "The venue is not named in the minigame". What makes it a restaurant is
   the setting of the two minigames, and for Take Cake the chapter's own rule draws nothing from the setting. The
   outline has the same word, so this is the lead's call. Safer: "shut out of the building where the Puppet kept
   watch"; question, "Who is the child killed outside, and what is the Puppet?"

## `murders`: The five

**Verdict: needs work.** One step of the dating argument is wrong as written, and round three is not applied.

1. **"so no June 26th falls inside its life. The incident is most likely older than that building, and the last
   June before it is that of 1986."** `dates`. The arithmetic gives 1987: a restaurant open "only a few short
   weeks" in mid-November 1987 opened that autumn, and June 1987 is before it. The pill's basis repeats the gap
   ("The latest year follows from a restaurant that had been open only a few weeks in mid-November 1987").
   `fnaf2-overtime-robots-scrapped` excludes only a June inside the new restaurant's life. The step that reaches
   1986 is the old restaurant: it traded on after the incident (`fnaf1-news-uphill-battle`) and had then been "left
   to rot for quite a while" (`fnaf2-call1-new-location`). ((timeline-math)) argues it that way and cites
   `fnaf2-call1-new-location` in its pill, so the two chapters give one date two different bases. Fix: after "inside
   its life", add "And by then the old restaurant, which traded on after the incident
   [[fnaf1-news-uphill-battle]], had been \"left to rot for quite a while\" [[fnaf2-call1-new-location]]. That
   leaves no room for the June of 1987, and the model takes the June of 1986 as the latest." Put
   `fnaf2-call1-new-location` in the pill's records and rewrite its basis to match. The same gap is in the outline
   (point 3) and in R8's confidence line ("so June 1986 at the latest").
2. **Round three is not applied.** `rulings`. Four places, with the lead's text in `telling-revisions.md`:
   - `answer`: "most likely in the yellow rabbit suit" becomes "most likely in the yellow rabbit costume" (the
     whole line is given there).
   - R26's fixed descriptors: "a figure in the yellow rabbit suit" (twice: the paragraph and the figure caption)
     becomes "the yellow rabbit costume"; "he dies there in the yellow rabbit suit" becomes "the Spring Bonnie
     suit".
   - The floor of the bracket: "most likely on the night of <<7 September 1979|teaser|…>>, and that night" is the
     form the revision rules out ("on the 1979 night", not "on 7 September 1979"). If a pill is kept, its label is
     "1979, most likely 7 September".
   - `tension`, Into the Pit: add that the scene is "under a logo graphic that reads 1985" and "can agree with
     this chapter or differ from it and settles nothing".
3. **"So the first possible June is that of 1980."** `overreach`. `secret-of-the-mimic-rnd-proto-pizzeria` puts
   prototypes of Fredbear and Spring Bonnie in the same room, and the model has those suits in use before that
   night (R2). So a prototype in the workshop does not show that no restaurant had the character yet (R24's own
   "records against", point 7). Fix: "So the model takes the June of 1980 as the earliest, and holds it loosely:
   the same room holds prototypes of the yellow bear and the yellow rabbit, whose suits were most likely already in
   use."
4. **"One of FNaF2's death minigames shows the result"**. `overreach`. `fnaf2-foxy-go-go-go` shows five dead
   children and a purple figure. It does not say they are the clippings' five, which is exactly what
   ((november-1987)) says of SAVE THEM ("It never says whether these are the five of the clippings or five more").
   Fix: "most likely shows the result".
5. **"It shows a child being lied to, and the costume the liar wears."** and **"The one luring any game shows is
   done in it."** `overreach`. `ffps-fruity-maze-follow-me` notes that the three lines are in two text colours, that
   "which speaker says which line is uncertain", and that "The man inside the suit is not shown or named". Sister
   Location also shows a luring, by a machine (`sl-baby-minigame-girl-grabbed`). Fix: "It shows a crying child, a
   figure in that costume behind her, and words that call her away. The screen does not say who speaks them." And:
   "The one luring by a costumed figure that any game shows".
6. **"{{spring-bonnie}} is a yellow rabbit, one of two suits… [[fnaf3-tape2-dual-suits]]"**. `wrong record`. That
   record's notes: "The two suits are not named on this tape". The name is in `fnaf3-tape5-spring-bonnie-moved`,
   the yellow rabbit is in `fnaf3-stage01-fredbear-spring-bonnie`, and joining them is an inference
   (`fnaf3-n5-springlock-death` notes: "Named 'Spring Bonnie' by the Night 5 tape, not on screen here"). Fix: cite
   the two records and add "most likely".
7. **"Nothing orders the incident against the birthday party, either"**, and **"No record favours the middle of
   the bracket."** `frame`: one record is missing. R8 lists `fnaf4-pigtail-girl-hide-your-body` against the date: a
   line said c. 1983 that sounds like the aftermath of the five, and the reason a year before 1983 stays open. It is
   filed under another part and appears nowhere here. Fix: add it to `counterEvidence`, and one sentence to the
   `tension`: a child's rumour, two days before the party, that "if you die, they hide your body and never tell
   anyone"; the model builds nothing on it.
8. **"The second clipping ends with it \"fighting an uphill battle…\""**. `unsupported`.
   `fnaf1-news-uphill-battle`: the clipping "closes with the unattributed words \"It's a tragedy.\"" Fix: "The
   second clipping says it has been".

## `golden`: What became of the five

**Verdict: needs work.** The claim that decides the chapter, that the yellow bear holds the fifth place in every
count, is not what the chapter's own table shows.

1. **"the yellow bear stands in it each time"** (compare), **"the fifth place is the yellow bear's in every
   count"** (compare), **"the yellow bear holds the fifth place every time"** (`tension`). `overreach`, three
   times, and each time as the reason the rival loses. In the table the bear is the one more in four rows of
   seven: FNaF1, Give Gifts, Happiest Day's golden mask, Help Wanted 2. In the other three it is not there:
   `fnaf3-n5-ghosts-safe-room` (five grey children; the suit in that room is the rabbit), `fnaf3-bad-ending-heads`
   (notes: "The fifth head's identity… is not stated"), `ffps-lorekeeper-gravestones` (a stone behind grass). Fix,
   compare: "In four of them the yellow bear stands in it: FNaF1, Give Gifts, the golden mask of Happiest Day, and
   Help Wanted 2. In the other three the one more is unmarked: a fifth ghost, a fifth faint head, a fifth stone."
   Rival and `tension`: "It loses on the count: he was never one of the five linked to the incident, and no count
   has a place for a child beyond the five and the child outside."
2. **"turns up wherever the games count the dead"**, and the answer's **"wherever they are counted"**.
   `overreach`. Three screens count otherwise: `fnaf2-save-them` and `fnaf2-foxy-go-go-go` show five alike, and
   `fnaf3-good-ending-heads` shows the four heads and no fifth. Fix: "turns up in seven places", and name the
   good-ending screen beside the "Bad ending." row.
3. **"for one frame before it a fifth body is in the room"**, and the table's "A fifth body for one frame".
   `overreach`: a secondary source treated as firm. `fnaf2-give-gifts-give-life` takes this from the wiki's
   sentence ("a fifth body may be seen in the middle of the room a single frame before…"). No capture of the frame
   is on file (`memo-fnaf123` section 8, item 3, and the writer's own REVIEW note), and the wiki's gallery has
   none (checked). The chapter's account of the scene, one row of its table and one beat stand on it. Fix: get a
   frame capture, or write "a fifth body is reported in the room for the single frame before it" and put the
   caveat in the record's notes.
4. **"That is why the model says only that the mascots carried the signs."** `frame`. The answer and the callout
   say more: the model reads the signs as the bodies hidden inside. Fix: "That is why the model states only the
   signs as fact, and gives the bodies as its reading."
5. **"in 1987 the bear is idle until the night a yellow suit is reported used"** (compare and `tension`).
   `rulings` (R27: print the kind). `fnaf2-golden-freddy-night6-only` is a mechanic, read from the wiki's activity
   tables, and its notes carry an unverified Night 2 appearance. Fix: "in play, the bear does not attack until the
   night…".
6. **"The smell outlasts that restaurant."** `overreach`. `fnaf2-call2-the-smell` notes: "He does not say what the
   smell is". That the clipping's restaurant is the "previous location", and the two smells one, is the model's
   reading. Fix: "The smell most likely outlasts that restaurant."
7. **"Later games echo this, and none can establish it."** `reader`. "This" has no antecedent: the paragraph before
   is about names on stones. Candy Cadet's "five made into one" echoes nothing this chapter says. The third tale's
   record, `ffps-candy-cadet-five-orphans`, is not cited. Fix: "Three later things agree with parts of this
   chapter, and none can establish any of it", then say in a clause what each agrees with.
8. **"The boy of FNaF4"**, "FNaF4's boy", "that boy". `rulings` (R26, style guide C9): the archive's descriptor is
   "the crying child".
9. **"The third of FNaF1's clippings"** (and "The second clipping" in `murders`, "The last of the four clippings"
   in `fnaf1-restaurant`). `no record`. No record orders the four: each is a "rare poster replacement" (one is
   tagged "#1", after the wiki's file name), and R12 says FNaF1 "shows four clippings in the same way and dates
   none". The ordinals are the model's reading order, written as if the game numbered them. (The wiki's file names
   number them differently: sanitation second, the five children third.) Fix: "Another of FNaF1's clippings".
10. **"a player who has finished its three hidden minigames"**. `unsupported`, small. `ffps-lorekeeper-certificate`:
    "Completing the secret parts of" three minigames. The minigames are not hidden. Fix: "who has found the
    secrets in its three minigames".

## `november-1987`: November 1987

**Verdict: needs work.** The week is told well and in order. Four statements say more than the records.

1. **"a mark on his chest that he has in no other minigame"** (compare and `tension`). `overreach`.
   `fnaf2-save-them-purple-figure-chest-mark` compares three sprites only: Take Cake's, Foxy's and FNaF3's. A
   capture of FNaF4's back-room scene shows a small yellow mark on the purple man's chest there too (the wiki's
   `File:PurpleGuyFNAF4.png`, used as a screenshot aid; `fnaf4-purple-guy-suits-up-employee` does not mention it).
   Fix: "a mark on his chest that the purple figures of FNaF2's other two minigames do not have". R9 says "nowhere
   else" and wants the same fix.
2. **"machines tampered with"** (answer), **"Machines tampered with, a lockout…"** (body), and the beat's "someone
   has tampered with the machines". `overreach`. `fnaf2-call4-facial-recognition-tampered`: "someone may have
   tampered with their facial recognition systems, we're not sure". The table quotes it rightly, and the argument
   for "one man with inside knowledge" then leans on it as a fact. Fix: "a report of tampering" in the answer and
   the body; "A report of tampering, a lockout aimed at people who used to work there, a suit taken from the
   back".
3. **"no other Freddy's is open that autumn"**. `no record`. It is R9's inference from "left to rot for quite a
   while", stated here flat and uncited. The training tapes speak of "the sister location" and "most locations"
   (`fnaf3-tape4-sister-location-springlock-failures`, `fnaf3-tape6-safe-rooms-sealed`), undated. The Bite's window
   depends on it. Fix: "and the old restaurant has been rotting \"for quite a while\" [[fnaf2-call1-new-location]];
   no record has another Freddy's open that autumn."
4. **"The reading stands on an assumption. … If the wall went up before November 1987, the spare was the bear."**
   `consistency`. The `tension` and R11 name two assumptions. The body's conditional needs the second as well:
   tape 4 retires both "classic suits" together (`fnaf3-tapes-freddy-fazbears-pizza`, which R11 lists against and
   the chapter never cites). Fix: "The reading stands on two assumptions. … If the wall went up before November
   1987, with the rabbit behind it and the bear outside it, the spare was the bear." In the same paragraph, "the
   rabbit, the suit of the earlier crime" drops the marker and the descriptor: "the Spring Bonnie suit, most likely
   the costume of the earlier crime".
5. **"the model reads them as machines and nothing more"**. `frame`: nothing pushes back on it. R9 rates this
   low-medium and lists against it the call's own "none of them are acting right" and the 1987 cast carrying cake
   to the crying children in FNaF3 (`fnaf3-bbs-air-adventure`, `fnaf3-chicas-party`, `fnaf3-mangles-quest`). The
   chapter's own table has the new machines wandering before any tampering is reported
   (`fnaf2-call1-no-night-mode`). Add the three records to `counterEvidence` and a sentence to the `tension` that
   says the model has no account of them.
6. **"the only empty yellow costume the first two games show [[fnaf1-golden-freddy-office-figure]]"**.
   `overreach`. The cited record says "sits limp like an empty costume", of FNaF1 only. In FNaF2 "wires hang from
   an eye socket" (`fnaf2-golden-freddy-office`). The phrase is R11's. Fix: "the only yellow figure in the first
   two games that sits limp like an empty costume", citing both records.
7. **"The yellow bear, idle for five nights, becomes active"**, **"attacks from the sixth"**, **"The older Foxy
   starts to"**. `rulings` (R27: print the kind). These are activity levels from the wiki's tables
   (`fnaf2-golden-freddy-night6-only`, with its unverified Night 2 appearance; `fnaf2-old-models-walk-from-night2`,
   "In play…"). Fix: "In play, …" once in the table and once in the text.
8. **"the rabbit is the killer's costume wherever a later game shows him in one [[ffps-fruity-maze-follow-me]]"**.
   `wrong record`. That record: "The man inside the suit is not shown or named". The record that shows him in the
   rabbit is `fnaf3-n5-springlock-death`. Cite it first.
9. **"After … A third guard, {{fritz-smith}}, is fired on his first day"**. `unsupported`, small.
   `fnaf2-pink-slip-fritz-smith`: the slip is undated, and "The in-universe timing only follows from the menu
   order of nights". Fix: "By the menu's order, a third guard…".
10. **`further`**. `frame`. `fnaf2-save-them-golden-freddy` is filed as support; all it adds is that the yellow
    bear is "inside the 1987 building", which is the setting of a death minigame. File it as colour.
    `scott-fnaf2-steam-old-and-aging` is filed as colour; R12 lists it as a record against the order of the two
    games (see `fnaf1-restaurant` 1).
11. **"Which suit is a narrower reading."** `reader`. The paragraph is eight sentences with three conditionals, the
    hardest in the part. Break it after "attacks from the sixth." Also, "a week with no recorded act" is said
    three times (callout, compare, `tension`); the compare block can lose it.

## `fnaf1-restaurant`: The last Freddy's

**Verdict: minor fixes.** The six joins and the guards' table check out line by line.

1. **`counterEvidence`**. `frame`: two records the rulings list against this chapter are missing.
   - `scott-fnaf2-steam-old-and-aging`: Scott's FNaF2 store text is written as a sequel's ("Welcome back"; "the old
     and aging animatronics are joined by a new cast"). R12 lists it against "FNaF2, then FNaF1", and the chapter
     says "So FNaF1 comes after November 1987" with nothing against it. Answer, as R12 has it: the cheque
     overrides it.
   - `fnaf2-call6-yellow-suit`: R25 lists it against the tapes' voice. The man who names "the Spring Bonnie
     animatronic" on tape says in 1987 only "a yellow one". The chapter says the tapes "imply the same man" and
     gives no pushback.
2. **"and it is to close by the end of that year"** (answer). `rulings`. R12's required wording: "Closes at year's
   end" takes "most likely". In the answer the marker covers the building only. Fix: "…with the four original
   machines. Most likely the notice that it will close by the end of that year is its own."
3. **"The voice on the phone is the man who trained the 1987 guards"** (answer). `overreach`. R25 has this at
   medium-high and inferred (`fnaf2-call6-night-shift-myself` notes: "Neither game says that the reopened
   restaurant is FNaF1's, and neither names him"). The body has "most likely"; the answer does not.
4. **"The model prints no year"**, with the pill "a November after 1987". `consistency`. R24 and the dating list
   print the bound "not before November 1988" (derived, high); ((timeline-math)) prints it as a pill, and the
   beat's basis says "so the earliest year is 1988". The REVIEW note reads the rule too strictly: the style guide
   allows a year after 1987 "as a bound the rulings give". Use the bound, as ((timeline-math)) does.

## `springtrap`: He dies in the suit

**Verdict: minor fixes.** The five scenes, the map and the seam are told as the records show them.

1. **Round three is not applied.** `rulings`. The `answer` should read "He climbs into the Spring Bonnie suit and
   it closes on him" (the line is in `telling-revisions.md`). R26's fixed descriptor, "the Spring Bonnie suit",
   also replaces four phrases: "the empty yellow rabbit suit" (hero caption), "an empty yellow rabbit suit", "the
   dark room with the yellow suit" and "the rabbit suit" (body).
2. **"what four dismantled machines would leave: Scott's store text lists empty shells, a hand and a hook"**, and
   the compare block's **"thirty years later nothing but shells"**. `overreach`, with a record left out.
   `fnaf3-office-box-toy-heads` shows what the shells are: the empty heads of the 1987 cast, which the company
   said it would scrap. Of the older four the records have an empty Freddy suit in the hall, a hook, and a Foxy
   head that "might just be another crappy cosplay" (`fnaf3-call1-relics-foxy-head`). Fix: "Thirty years on, the
   attraction's collectors find no working machine: Scott's store text lists empty shells, a hand and a hook
   [[scott-fnaf3-steam-description]], and most of the heads in the office are the 1987 cast's
   [[fnaf3-office-box-toy-heads]]." In the compare block: "and thirty years later no working machine".
3. **"He calls it \"a new way to desecrate, to humiliate, to destroy\""**. `overreach` and `consistency`.
   `ffps-insanity-new-way-to-desecrate` says only that a "new" wrong follows what he "had already done"; it does
   not attach the phrase to the trap. ((remnant)) and the beat `s-afton-robotics` read the same phrase as the
   firm's machine, so one phrase has two referents in one model. Fix: "The same tape speaks of \"a new way to
   desecrate, to humiliate, to destroy\" [[…]], which ((remnant)) reads with the blueprint that is on the screen
   while it plays."
4. **"FNaF3 gives no reason. A tape in Pizzeria Simulator gives one."** `overreach`. The marker comes several
   sentences later. `ffps-insanity-trap-again` notes: "the tape does not say that is what it means"; R10's wording
   is "can be read as", and R30 rates the reading low-medium. Fix: "A tape in Pizzeria Simulator can be read as
   giving one."
5. **"in a room that had been walled up years before"** (answer). `overreach`. R12 gives "sealed before the
   killer's death" at medium, and no interval. "Years" needs R11's assumption that the sealing predates November
   1987 (low-medium), and ((november-1987)) says "Nothing dates the tapes". The lead's round-three answer has the
   same word. Fix: "in a room that had already been walled up".
6. **"He comes back to the old restaurant"** (answer). `overreach`. The body has "most likely the old restaurant"
   (R12: medium). The lead's round-three answer opens the same way. Fix: "He comes back to an empty restaurant,
   most likely the old one".
7. **"The room keeps the man in the suit for thirty years"**. `overreach`. `scott-fnaf3-steam-description`: thirty
   years "after Freddy Fazbear's Pizza closed", and its notes add that it does not say which closing (R24:
   medium-low). The time in the room runs from his death, which the model places only at the lower end of medium.
   The phrase is the outline's. Fix: "The room keeps the man in the suit until the attraction's builders open it".
8. **"The tapes are addressed to working staff"**. `uncited`. The record is `fnaf3-tapes-freddy-fazbears-pizza`.

## The six storyline beats

1. `s-child-outside`: **"Her father calls it \"a wound first inflicted on me\""**. `overreach`.
   `ffps-insanity-wound-first-inflicted` notes: "He does not say what the wound was." The chapter marks this as the
   model's reading; the beat gives it to him as his own words about her death, and the convention's whole support
   is this sentence. Fix: "Her father speaks of \"a wound first inflicted on me\" [[…]]. The model reads the wound
   as her death, and on that one word, \"first\", it tells her death before the five."
2. `s-five`: **"gives the lie that was told"**. `overreach`; see `murders` 5. Fix: "has that rabbit behind a crying
   girl, over the words \"He's not really dead.\""
3. `s-children-stay`: **"while a fifth appears for an instant with the yellow bear"**. `overreach`; see `golden` 3.
4. `s-november-1987`: **"someone has tampered with the machines"**. `overreach`; see `november-1987` 2. The record
   for it, `fnaf2-call4-facial-recognition-tampered`, is not among the beat's citations. Fix: "the company suspects
   that someone has tampered with the machines".
5. `s-last-freddys`: **"The restaurant is to close by the end of the year"**. `rulings`: R12's required wording
   takes "most likely". Fix: "Most likely the notice on its wall is its own: it is to close by the end of the
   year…".
6. `s-last-freddys`: **"the man who trained the 1987 guards"**. `rulings`: R25 has it at medium-high, inferred, so
   it takes "most likely".
7. `s-last-freddys`, date pill: `wrong record`. The basis turns on the cheque of 11-12-1987, and the pill lists
   `fnaf2-news-originals-kept` in its place. Add `fnaf2-paycheck-1987`.
8. `s-springlock`: **"takes the four machines apart, one a night"** and **"On the fifth night"**. `unsupported`.
   `fnaf3-eon-purple-guy-dismantles` gives the order and the growing pile of parts. The nights are the guard's,
   thirty years later, and nothing says the dismantling took five. The outline calls it "a single night's work",
   which is no better supported. Fix: "one after another", and "Then the ghosts of five children corner him".
9. `s-springlock`: **"The room had been walled up with its contents inside"**. `rulings`: R12 has the sealing
   before his death at medium, and the chapter writes "most likely". Fix: "The room had most likely been walled up
   by then, with its contents inside".

---

## The ten most serious findings

1. **`murders` 1.** "the last June before it is that of 1986": the argument as written gives 1987. The step
   through the old restaurant "left to rot" (`fnaf2-call1-new-location`) is missing from the text and from the
   pill, and ((timeline-math)) dates the same bracket on a different basis.
2. **`golden` 1.** "the yellow bear holds the fifth place every time": true of four rows of the chapter's own
   seven, and used three times as the reason the rival reading loses.
3. **`murders` 2 and `springtrap` 1.** Round three is not applied: two `answer` lines, the fixed descriptors ("the
   yellow rabbit costume", "the Spring Bonnie suit"), the 1979 pill and the Into the Pit sentence. The replacement
   text exists in `telling-revisions.md`.
4. **`november-1987` 1.** "a mark on his chest that he has in no other minigame": the record compares three
   sprites, and FNaF4's purple man has a yellow chest mark in the wiki's capture.
5. **Beats 1.** "Her father calls it \"a wound first inflicted on me\"": the tape does not say what the wound was.
   The beat puts the model's reading in his mouth.
6. **`november-1987` 2 and beats 4.** The tampering is told as fact in the answer, the body and the beat. The call
   says "may have… we're not sure".
7. **`november-1987` 3.** "no other Freddy's is open that autumn": an uncited inference stated as fact, on which
   the Bite's window rests.
8. **`springtrap` 2.** "nothing but shells": `fnaf3-office-box-toy-heads` shows the shells are mostly the 1987
   cast's, and it is not cited.
9. **`murders` 3.** "the first possible June is that of 1980": the same record has prototypes of two suits the
   model says were already in use.
10. **`fnaf1-restaurant` 1 and `november-1987` 5.** Counter-evidence the rulings themselves list is missing:
    `scott-fnaf2-steam-old-and-aging` and `fnaf2-call6-yellow-suit` in the first, the three FNaF3 minigame records
    against "machines and nothing more" in the second.

## Counts

55 findings: `overreach` 23, `rulings` 10, `frame` 5, `unsupported` 4, `consistency` 3, `wrong record` 3,
`no record` 3, `reader` 2, `dates` 1, `uncited` 1, misquote 0. Five of the nine beat findings repeat a chapter
finding in the beat's own words.

Several of these come from upstream and want fixing there too: the 1986 step (outline point 3 of `murders`; R8's
confidence line), "machines tampered with" (the outline's answer for `november-1987`), "no other Freddy's is open"
(R9's records for point 4), "nowhere else" for the chest mark (R9), "the only empty yellow costume" (R11), "the old
restaurant", "years before" and "for thirty years" (the outline's answer and point 6 for `springtrap`), and "one a
night" (the beat).

## Noticed outside the assignment

- The part blurb for `nightshift` in `theoryParts` (repeated in the header comment of `nightshift.ts`) says "the
  old one reopened on a smaller budget". That the last restaurant is the old building is "most likely" in the
  chapter and medium in R12; the blurb states it flat.
