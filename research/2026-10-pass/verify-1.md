# Verification 1: `story.ts` (`thesis`, `killer`), `apparatus.ts` (`canon-rules`, `edges`, `timeline-math`, `games`, `open`), `theory.ts` (front matter, part blurbs, storyline)

Checked: the seven chapters, the front matter (title, standfirst, thesis, how to read), the ten part blurbs and the
twenty beats, as they stood at 10:42 on 3 October (HEAD `20e3487`). The chapter files last changed in `ead932c`.
`theory.ts` last changed in `785083b`, which landed while I worked and is included. Two commits to other chapters
landed at 10:40 (`a3a27d0`, `20e3487`); every sentence of another chapter that this report quotes was checked
again after them, and all stand.

- **What changed.** Against `3e780e2` (chapters) and `0b55708` (`theory.ts`), 331 sentences, table cells, headings
  and list items are new or changed: `thesis` 45, `killer` 20, `canon-rules` 25, `edges` 22, `timeline-math` 35,
  `games` 46, `open` 43, front matter 14, part blurbs 6, beats 75. Each was read against the records it cites and
  against the rulings, rounds four, 4b and 4c included.
- **Records.** All 292 records cited by these chapters and beats were opened in the working tree. The records
  editor was still writing: 24 records were uncommitted at 10:31, five of them cited here
  (`ffps-completion-fire`, `sl-intro-mr-afton-board`, `sl-golden-freddy-cutscene-springtrap`,
  `ruin-fake-gregory-signal-jammer`, `scott-2017-matpat-final-theory`). I read those five again in their new text,
  and every sentence that cites them still holds.
- **`quotecheck.mts 3 --weak`** (run again at 10:42): "624 quoted phrases of 3+ words; 2 found in no record at all;
  0 found only in a record the chapter does not cite; 20 found outside the quote field". The two `MISS` lines are the
  known fault for `s-1979`. Two `weak(notes)` lines name my files, `canon-rules.body[21]` and beat
  `s-two-machines`, and both are false alarms: the words are verbatim in the `quote` of a record cited later in the
  same block (`scott-2020-novels-fill-blanks`, `secret-of-the-mimic-log-refusal`).
- **A stricter check of my own**, which also covers quotations of one and two words: 187 quoted phrases and 8
  quote blocks are verbatim in the `quote` of a record cited in the same block (six differ only in a capital or a
  final comma). Fifteen are not, and none is a fault. Ten are words quoted in a summary that carries no citation
  (the thesis paragraph and one row label of its table, the `killer` answer and table, one cell of `canon-rules`,
  the `timeline-math` answer), each from a record the chapter cites elsewhere. Three are the site's own labels in
  how-to-read. Two are "Parental Tracking" and "Storage Tank" in beat `s-afton-robotics`, which the record gives
  in its claim.
- **`wordcheck.py --all`**: book-only names 2, tier-3 labels 20, partners/founders 34, builder 0, afton after fire 1,
  printed misuse 0, adaptation verbs 0, jawbone 0, hedge stacks 0, years after 1987 212, filler 0, not-x-but-y 2.
  In my files the hits are the six labels in the `canon-rules` table (R26's exception), "Miketrap" inside Scott's
  own sentence, "partners" where the text says whose reading it is, "where fire did not" inside a denial, release
  and post years, and "1988" in the two places where the arithmetic is shown. None is a finding.
- **`chapter.mts` and `beats.mts`**: every chapter and the storyline read once from the top in the reader's view.
  The other 28 chapters were printed too, and read wherever one of mine links to them or tells the same fact.
  Every citation, entity token, chapter link, date pill and image in the three files resolves.
- **The four special points.**
  - `thesis`: every grade in the table agrees with its ruling and with `model.md`'s table, the 4c change included
    ("Medium that the woman is Vanessa").
  - `games` and `timeline-math`: the three 4c texts are in place word for word (the pay sentence, the cell on the
    Pizzaplex's order, the Help Wanted 2 row and list item). No year after 1987 is printed. FNaF1's week is "a
    November after 1987" in both chapters and in beat `s-last-freddys`. One list item is firmer than the rulings
    (`games` 1 below). The arithmetic holds: 3 August to 7 September is five weeks, and 6 December was a Saturday
    only in 1969 and 1975 between 1965 and 1979.
  - `canon-rules` against how-to-read: the four tags agree, name for name. `canon-rules` does not define the
    markers at all (see "For the adjudicator").
  - Beats against their chapters: two beats are firmer than the chapter that tells the same thing (below). Every
    beat carries the mark of the weakest thing it tells.

## Findings

Quotation marks are written plain here. In the files a quotation mark inside a string is `\"`.

### thesis 1. SLIP
- where: `thesis`, table "Clause by clause", first cell of the eleventh row. The same fault is in `killer`, body,
  the paragraph that begins "The attraction burns, and when the photograph".
- text: `{{glitchtrap}} (known as Glitchtrap, Scott's working name for it)` (the whole cell). In `killer`:
  `{{scraptrap}} is shaped differently [[ffps-scraptrap-alley-remains]].`
- problem: The tokens print the stored names "the rabbit in the code" and "the salvaged rabbit of Pizzeria
  Simulator", so the cell and the sentence begin with a small letter. The editor's memo (`thesis` 5, `killer` 6)
  expected a capital, but no renderer adds one: `EntityLink` prints `labelForEntity(id)` as stored, in this
  worktree's `ui.tsx` and in `RichText.tsx` of the `ui` and `integ` worktrees. The reader's memo rules the form
  out (decision H). Five more places outside my files have it: `child-outside` (`{{puppet}} is the machine`),
  `fazbears-fright` (`{{phone-dude}} phones the guard`), `ffps` (`{{cassette-man}} is the only name`), `salvage`
  (`{{scraptrap}} is the one the game names outright`) and `burntrap` (`{{glitchtrap}} (known as Glitchtrap,
  Scott's working name for it) is software`).
- fix: The cell: `The rabbit in the code (known as Glitchtrap, Scott's working name for it)`, in plain words, as
  the rabbit table of `canon-rules` has it. The sentence:
  `Then comes {{scraptrap}}, which is shaped differently [[ffps-scraptrap-alley-remains]].` One change in the
  renderer would mend all seven places instead: a capital for a token that opens a sentence or a cell.

### killer 1. SLIP
- where: compare box under "Purple is a way of drawing", column "The father is in the suit", first sentence.
- text: `The speech is addressed to his father and ends, "I'm going to come find you." [[sl-golden-freddy-cutscene-come-find-you]]`
- problem: Before the pass the sentence began "Michael's speech", and neither memo asked for the change. "The
  speech" now has no speech near it to point at: the cutscene is told eight blocks earlier, under another
  heading, and the box names nobody for "his" or for the "he" of its next sentence.
- fix: `Michael's speech is addressed to his father and ends, "I'm going to come find you." [[sl-golden-freddy-cutscene-come-find-you]]`
  The record's claim names Michael and has him say that he will come to find his father.

### edges 1. WRONG
- where: body, the paragraph after the logo figure, "In 2024 Scott wrote that when a licensee", last sentence.
- text: `Either way it is not the year of the five (see ((timeline-math))).`
- problem: Before the pass this read "The model does not choose, and never uses it as the year of the five". The
  new sentence denies the year outright. R23 holds only that the graphic "dates nothing (low as the year of the
  five)", and the model's own bracket for the five, 1980 to 1986, includes 1985. The chapter's answer,
  `timeline-math` and `games` all say "dates nothing".
- fix: `Either way it dates nothing, and the model does not use it as the year of the five (see ((timeline-math))).`

### edges 2. WORDING
- where: list "Its background agrees with the main games on four things", fourth item.
- text: `A second yellow suit: the boy hides in an empty yellow bear suit [[into-the-pit-golden-freddy-suit-hide]], which fits the two suits of November 1987 (see ((november-1987))) and supports nothing.`
- problem: No record puts two suits in November 1987. That week's call has one, "a spare in the back, a yellow
  one" (`fnaf2-call6-yellow-suit`). The two suits are those of FNaF3's undated training tapes, as `november-1987`
  says: "FNaF3's training tapes speak of two suits that double as costume and machine [...], most likely the
  yellow bear and the yellow rabbit". Before the pass the words were "the two suits of ((november-1987))", a
  pointer to the chapter. With the link moved out they read as a fact. A small point.
- fix: `A second yellow suit: the boy hides in an empty yellow bear suit [[into-the-pit-golden-freddy-suit-hide]], which fits the two suits of FNaF3's training tapes [[fnaf3-tape2-dual-suits]], most likely a yellow bear and a yellow rabbit (see ((november-1987))), and supports nothing.`

### games 1. WORDING
- where: ordered list "The same games, in the order of the story", item 8.
- text: `FNaF3, then Pizzeria Simulator, then Ultimate Custom Night.`
- problem: The order is given flat. R12 holds both steps at medium-high, and round four corrected step 21 on this
  very point ("medium-high (R12), not 'firm'"). The table in the same chapter says "most likely" for each game,
  `timeline-math` has "Each after the last: most likely", and items 6, 7, 9 and 10 of this list carry their
  markers. The sentence is unchanged by the pass.
- fix: `FNaF3, then Pizzeria Simulator, then Ultimate Custom Night: each after the last, most likely.`

### games 2. SLIP
- where: body, the paragraph after the ordered list, second sentence.
- text: `((timeline-math)) gives the working.`
- problem: A bare link prints the chapter's title, so the sentence reads "Dating the story gives the working."
  The pass mended the same form elsewhere (the links in how-to-read took labels; `killer` lost "((funtimes))
  tells what he built"). This sentence is unchanged and was missed.
- fix: `The working is in ((timeline-math)).`

### open 1. WORDING
- where: list under "The modern games", last item, "**Also open.**", fourth sentence.
- text: `How a room dated after a Freddy's closed watched a bedroom in 1983 (((afton-house))).`
- problem: New in the pass. It replaces an entry that said "A boy watched from there in 1983 would need the room
  to be older than the business". The new clause takes the watching in 1983 as given. R3 holds it at low-medium
  and "never a fact", `afton-house` calls it "the weakest step in this chapter", and `timeline-math` lists it
  among the sequences the model does not tell.
- fix: `Whether anyone watched FNaF4's bedroom in 1983, and how, from a room whose business is dated after a Freddy's closed (((afton-house))).`

### open 2. WORDING
- where: list under "The first games", item "**The dark bear and the dark rabbit.**", last two sentences.
- text: `The model reads the bear as the killer's lure, though following it also ends with the children out of the machines and the killer dead. The rabbit most likely helps (see ((springtrap))).`
- problem: Two things. The pass took "at a low grade" out of the first sentence, which is now firmer than the
  chapter it points to: `springtrap` has "On that reading {{shadow-freddy}} may be the killer's lure" (R10:
  low-medium). And `springtrap` says nothing of the dark rabbit, so the link does not carry the sentence it
  follows. No chapter but this one mentions the dark rabbit.
- fix: `The bear may be the killer's lure, since it leads the machines to him, though following it also ends with the children out of the machines and the killer dead (see ((springtrap))). The rabbit most likely helps.`

### open 3. WORDING
- where: list under "The modern games", item "**The scanned boards.**", first sentence.
- text: `Asked "Steve, which circuit board did you scan?", a contractor names no machine [[sd-which-board-unknown]], and no record places the scan against Pizzeria Simulator's fire.`
- problem: The exchange is in Special Delivery's emails and is about that game's own scan, the second one
  (`sd-which-board-unknown`, located in the story emails "Re: system glitch"). The entry gives it as if it were
  asked of the scan that let the rabbit into Help Wanted's code, and draws its conclusion about that rabbit from
  it. `digital` keeps the two apart ("When it happens again, in the staff emails of another game, Special
  Delivery, a colleague asks"), and so do the `games` table ("A second scan and a second outbreak") and beat
  `s-rabbit-in-code`. The sentence is unchanged by the pass.
- fix: `Asked "Steve, which circuit board did you scan?" in Special Delivery's emails, about that game's own scan, a contractor names no machine [[sd-which-board-unknown]], and no record places either scan against Pizzeria Simulator's fire.`

### s-1979 1. WORDING
- where: beat `s-1979` ("1979: the company comes to collect"), last sentence.
- text: `Before any of them, M2 "can no longer be controlled" [[secret-of-the-mimic-mail-received-5-min-ago]], and earlier visitors lie dead inside mascot costumes [[secret-of-the-mimic-previous-technicians]].`
- problem: The beat is firmer than its chapter. The record's claim has "bodies in character suits" and, apart
  from that, a voice that says the previous technicians died. Whose bodies they are is a reading: the record's
  notes call it "the usual reading, and it rests on the voice's account". `two-machines` marks it: "There are
  bodies inside character costumes, most likely those of the technicians before him, who by the voice's account
  lost limbs and bled to death". The beat says flat that they are earlier visitors. The sentence is unchanged
  by the pass.
- fix: `Before any of them, M2 "can no longer be controlled" [[secret-of-the-mimic-mail-received-5-min-ago]], and there are bodies inside character costumes, most likely those of the technicians before him [[secret-of-the-mimic-previous-technicians]].`
  Counted as `prose-report.mts` counts, the beat goes from 122 words to 129.

### s-pizzaplex 1. WORDING
- where: beat `s-pizzaplex` ("One night at the Pizzaplex"), last sentence.
- text: `The sequel, RUIN, most likely shows that ending's aftermath.`
- problem: Before the pass the subject was "The sequel's wrecked building". As shortened, the sentence has RUIN
  follow the ending below ground. R19 (4) says "RUIN follows no single ending: its building is the underground
  route's". `pizzaplex`, the beat's first chapter, says "the sequel follows no single one of them. The building
  it shows is most likely the aftermath of the route that goes underground".
- fix: `The wrecked building of the sequel, RUIN, is most likely that ending's aftermath.` This is the reader's
  memo's own sentence for beat 19. It adds four words: counted as `prose-report.mts` counts, the beat goes from
  125 to 129, and with the token printed in full from 130 to 134. If the printed count is the one that binds,
  `RUIN's wrecked building is most likely that ending's aftermath.` keeps the length. The next beat also names
  RUIN without a gloss.

## Counts

By kind: WRONG 1, WORDING 7, SLIP 3. Eleven findings.

By chapter: `thesis` 1 (its fault stands once more in `killer`), `killer` 1, `edges` 2, `games` 2, `open` 3,
storyline 2 (`s-1979`, `s-pizzaplex`), `canon-rules` 0, `timeline-math` 0, front matter 0, part blurbs 0.

Four of the eleven are in sentences the pass did not change (`games` 1, `games` 2, `open` 3, `s-1979` 1). The
other seven are in sentences the pass wrote or changed.

## Clean

- `canon-rules`
- `timeline-math`
- The front matter: title, standfirst, thesis, how to read
- The ten part blurbs
- Eighteen of the twenty beats (all but `s-1979` and `s-pizzaplex`)

## For the adjudicator

- Burntrap's first-use form. R20 and R26 in `rulings-brief.md` still give "(the game's files call it Burntrap,
  ...)". All five first-use forms in my files print "(known as Burntrap, a working name that Scott has said now
  stands)", which the editor's memo records as settled ("For the owner", A2). Not counted. The verifiers' brief
  points at the older form.
- The brief says that `canon-rules` defines the markers. It defines the four tags and the three tiers of names and
  nothing else. The markers are defined in how-to-read alone, so there was nothing to compare.
- How-to-read says "Three markers flag the rest" and then sets four terms in bold, "leans" the fourth. The sentence
  is the reader's memo's own (3.1), so it is not counted.
- Five beats carry a higher mark than one chapter in their `sections`: `s-house` (medium; `plush` and `nightmares`
  are low), `s-children-stay` (medium; `remnant` low), `s-afton-robotics` (high; `remnant` low),
  `s-night-without-end` (medium; `ucn` low) and `s-pizzaplex` (medium; `burntrap` low). In each the beat tells
  nothing of that chapter's low claim, and how-to-read as reworded in `785083b` covers the case. If "a beat may not
  be firmer than its chapters" is meant of the marks themselves, these five break it.
- The two cast lists are treated differently. `ffps-credits-william-afton` says in its notes "Cast list per wiki
  transcript", and `killer` and beats `s-springlock` and `s-trap-fire` state that credit flat. It is the one link
  in R1's chain that `killer` and the `thesis` table call stated. Security Breach's list, read the same way, must
  be cited as a fan wiki's transcription (R19 (5)).
- Help Wanted 2 in the records. 48 records still carry the `when` label "During Help Wanted 2 (undated; after
  Security Breach's night and before RUIN)", flat, and the basis of each has the main ending cut "to the scene
  that opens RUIN". R22 as corrected in 4c says "most likely", and calls that tie the wiki's reading of an ending
  that was not watched. The site prints both with the record ("In-universe time"). `games.json` was corrected in
  `fc3038e`. This is the records editor's file.
- `timeline-math` lists the watching in 1983 among "Three sequences the model does not tell" and links to
  `afton-house`, which says "The model takes the step on the strength of the code alone". Both fit R3 (low-medium,
  never a fact, and no part of step 6), but a reader who follows the link meets the opposite verb.
- Outside my brief, in `theory.ts`: two `reason` texts of `outsideStory` use a bare chapter link as a subject. "The
  records that ((edges)) weighs are filed there" prints "The records that At the edge of the story weighs", and
  "which ((canon-rules)) weighs" prints "which Ground rules weighs". Both are unchanged by the pass.
