# Fact-check 9: the home page, the three essays and the interface's fixed text

## What was checked, and against what

- **Half one, four data files** in `$WT/src/data/`, read in full, entry by entry: `home.ts` (6 cards, 12
  questions), `community.ts` (21 theories, 30 moments), `box.ts` (3 answers, 11 steps, 4 guesses), `author.ts`
  (3 answers, 12 steps, 6 lexicon groups holding 20 lines, 8 readings). They were read at commit `52e69ed`. They
  were last saved between 02:18 and 02:23 on 3 October and had not changed at 04:43, when `HEAD` was `183b746`
  (sha256 `a1886d14…`, `fac23cb8…`, `6b3f5153…`, `9d3fd158…`).
- **Half two, the interface** in `$UI` (`~/src/fnaf-canon-wt/integ`, `45f5a96`, clean tree): every
  string literal and every run of JSX text of more than a few words in `src/pages/**` and `src/components/**` was
  extracted by script and read, for every file in both folders. Read in full, as code: in `essays/`,
  `Method.tsx`, `Box.tsx`, `Author.tsx`, `Community.tsx`, `essay.tsx`, `essayModel.ts`, `coverage.ts`;
  `home/Home.tsx`; in `theory/`, `TheoryCover.tsx`, `CoverParts.tsx`, `Contents.tsx`, `Storyline.tsx`, `model.ts`;
  in `people/`, `People.tsx`, `PersonDetail.tsx`, `ties.ts`; `timeline/Key.tsx` and the header of
  `Timeline.tsx`; `evidence/EvidenceDetail.tsx` and `Sources.tsx`; in `components/`, `labels.ts`, `Legend.tsx`,
  `Firmness.tsx`, `palette.ts`, `RichText.tsx`, `EvidenceCard.tsx`, `EvidenceDrawer.tsx`, `shell/nav.ts`,
  `Footer.tsx`. Line numbers below are in that tree.
- **Records.** All 217 distinct records that the four files cite were opened in the JSON and read (home 49,
  community 158, box 30, author 37, counting lexicon lines and `evidence` lists), with about 40 more where a
  sentence needed them. Four commits changed nine evidence records while I worked (03:04 to 03:30). Five of
  the nine are cited here (`fnaf2-give-gifts-give-life`, `ffps-scup-blueprint`, `fnaf1-news-kids-vanish`,
  `fnaf1-paycheck-night5`, `sl-custom-night-decay`). All were re-read as they stand at 04:50, and one finding
  turns on a change (community 4).
- **Rulings.** `rulings-brief.md` in full, twice: as it stood when I began, and again as saved at 04:03 with
  "Round four". After round four appeared I re-checked the four files and the interface against each of its 46
  corrections; home 1, 3 and 4, community 4, 5, 6 and 7, author 2 and 4, and interface 29 and 30 come from it. In
  `model.md`: the rules W1 to W11, R25, R26, R27 and sections 5 and 6.
- **The theory.** Every `section` and `modelSection` id exists. The chapter `answer` fields were compared three
  times: at `52e69ed`, in the working tree at 04:20, and at 04:45 (`183b746`, with `apparatus.ts` and `story.ts`
  still uncommitted). The chapters moved under the home page while I worked; home 1, 5, 6 and 8 name the answers
  as they stand at 04:45. `canon-rules` and `open` in `chapters/apparatus.ts` were read in full in their revised
  form, with `theoryIntro.howToRead` and the header of `dates.ts`.
- **Quotations.** A script compared all 306 phrases in quotation marks (home 19, community 161, box 67, author 59)
  with the records cited beside them. Scott's words were then checked against the sources themselves:
  - Steam, through the Steam News API: the posts of 2015-07-21, 2015-08-24, 2015-09-15, 2015-10-20, 2016-05-12,
    2016-10-04, 2016-10-17, 2016-12-04, 2017-06-30, 2017-12-04 and 2018-02-16, and the thread "Is the book canon?"
    of 2015-12-18 from a 2016 Wayback capture. All verbatim, all dates right.
  - Reddit, through the Arctic Shift archive: comments `d5hb4z2` (2016-07-18), `dmj4bft` and `dmjx7t9` and post
    `6y0qb1` (2017-09-04), `dpf8b3p`, `dpfdk10`, `dpfcv4s` and `dpfdx0f` (2017-11-06), `e12afun` (2018-06-21), post
    `daxx9z` (2019-09-29), post `evttcv` and `ffxyups` (2020-01-29), `g1cgrfb` (2020-08-13), post `nybyo1`
    (2021-06-12), `kgldi73` (2024-01-06). All verbatim, all dates right.
  - The Geeks Under Grace interview, from the live page and a Wayback capture whose `article:published_time` is
    2014-10-25T20:05:21. The archived Hope Animation pages for the four titles, their years and blurbs, the
    artists page and the post of 2013-10-13.
  - Steam store dates through the store API; YouTube titles through oEmbed; publication dates and descriptions
    of eleven fan videos through PreserveTube and Wayback captures.
- **Not verified.** The 2018 and 2024 interviews were not listened to: their quotations are the records'
  machine transcripts. The publication dates of four fan videos could not be reached (`X_93Z1X0rbU`,
  `1RXrCNpKiAw`, `B4eF8n5FODM`, `4EFrm08oEpc`). What any fan video argues was checked only as far as its title and
  archived description go; my memory of the videos was not used. Nothing was built, run or edited.

## The checks the assignment named

| Check | Result |
|---|---|
| The video known as "Two Mikes" must not be on the Theorists page | It is not in either worktree, under any spelling. |
| The Survival Logbook stays excluded | Yes. No record mentions it and nothing cites it. Its one appearance is `Method.tsx:257`, in the list of what is excluded. |
| Scott's 2014 statement rejecting FNaF as allegory: quoted and dated correctly? | Yes, in all five places. The question was: "How did your Christianity translate into Five Nights At Freddy's? Are there any hidden Christian messages? For example, do the animals represent a vice or struggle?" The answer is quoted verbatim, the date is the interview's publication date, and `author.ts` rightly says the answer covers the one game that existed. |
| Interview quotations of 2018 and 2024 are marked as machine transcripts | All 25 uses in the three essays are marked in the same field. The home page's answer on the box is the one unmarked use (home 9). |
| Every date in `community.ts` | All 30 moment dates match their records. Three are the days a page was captured, which the text does not say (community 19). |
| Every quotation of Scott | No wording is wrong. 212 phrases match a record's `quote`; the rest are single words, titles with an ellipsis, Hope Animation's blurbs, or phrases quoted from a record's `claim` or `notes`, and every one of those was found in the source itself. One quotation is given without the stutter its record prints (noted under community). |
| Each fan theory described fairly | Yes, with two reservations (community 12 and 16). |
| The verdict words | Two are one grade too firm: "confirmed" (community 1) and "mostly right" for the box (community 2, box 1). The other 19 match the rulings' grades, including the five that section 5 of `model.md` asked to be re-scored (theories 5, 14, 15, 17 and 21). |
| W7: the one sentence on the unused open box | It complies in its words and not in its form: it carries a citation token to a record that the theory lists as outside the story (box 2). |
| R15: Remnant has no place on the moral map | Complies (reading 4, which also says the earlier version is withdrawn). |
| R16: the map decides neither reading of Ultimate Custom Night | Complies (answer 2, reading 5). |
| Nothing speaks for Scott's beliefs beyond his words | Three sentences do (author 1, 2 and 3). |
| No book-only name | One, printed twice, under an exception the file gives itself (community 3). The interface prints one in a page address and on 31 record pages (interface 26 and 31). |
| "The partner and the daughter he lost" | Not in `$UI`. It survives only in the old interface, `$WT/src/pages/People.tsx:10`, with "William Afton and his children" on line 9. |
| Nothing calls the two men partners, founders or owners | The four data files are clean. The interface's word for their tie is "partner of" (interface 28). |
| The Method page against `canon-rules` and R27 | Needs work (interface 6 to 15). |
| Legends and help text against the data | The date kind `teaser`, the grade `strong`, the three confidence grades and the legend's gloss are wrong or stale (interface 1 to 5). |
| Numbers written into the text | Five are hard-coded and right today; three computed numbers are wrong in what they count (interface 15, 19, 21, 22, 24, 33). |

Types used below: `unsupported`, `overreach`, `wrong record`, `uncited`, `no record`, `misquote`, `status`,
`rulings`, `dates`, `consistency`, `missing`, `reader`. A finding that has two types is counted under the first.

| | Findings | overreach | rulings | status | consistency | dates | reader | no record | missing | unsupported |
|---|---|---|---|---|---|---|---|---|---|---|
| `home.ts` | 13 | 6 | 2 | 3 | | | 2 | | | |
| `community.ts` | 19 | 8 | 4 | 4 | 2 | 1 | | | | |
| `box.ts` | 9 | 3 | 2 | 1 | 1 | | | 1 | | 1 |
| `author.ts` | 12 | 2 | 3 | | 2 | 1 | 1 | 3 | | |
| Interface text | 34 | 6 | 8 | 6 | 2 | 4 | 2 | 1 | 3 | 2 |
| **All** | **87** | 25 | 19 | 14 | 7 | 6 | 5 | 5 | 3 | 3 |

There is no `misquote`, `wrong record` or `uncited` finding: every quotation is verbatim, and where a citation is
missing or misplaced the finding is filed under what the sentence then claims.

## `home.ts`

**Verdict: minor fixes.** Every quoted phrase is verbatim, both date pills have the right kind and an honest
basis, no card gives a year after 1987, and the answers follow the rulings in substance. Cards 2 and 5 are clean
apart from one condition (11). The faults are three sentences that round four of the rulings has since withdrawn,
and five places where the home page is one step firmer than the chapter it points to.

1. **Q6 `a`, "wherever the dead are counted there are four and one more, and the one is marked by the yellow
   bear"; card 3, "counted everywhere as four and one more".** `rulings`. R8 (7) as corrected in round four: not
   "wherever the dead are counted". There are seven counts; the yellow bear marks the one more in four of them; one
   screen shows four and no fifth (`fnaf3-good-ending-heads`); SAVE THEM and Foxy Go! Go! Go! show five alike. The
   chapter `golden` now says "in seven counts of the dead". Q6 also never says yes or no. Fix, Q6: "Most likely
   not. The model reads Golden Freddy as the fifth of the five missing children: in seven counts of the dead the
   games give four and one more, and in four of the seven the one more is marked by the yellow bear. The crying
   child most likely dies of the bite, and no later record places him anywhere. That he shares the yellow bear
   with the fifth child is the strongest alternative, and the count of the dead is what decides against it."
   Fix, card 3: "and the five stay on in the mascots, counted in the games as four and one more
   [[fnaf2-give-gifts-give-life]] [[fnaf3-happiest-day]]."
2. **Card 4, "has that boy's bedroom on its monitors and a plush like his on the desk"; Q5, "whose monitors show
   the boy's bedroom".** `overreach`. `sl-private-room-monitor-bedroom` shows "the bedroom in which FNaF4's nights
   are played", and its note says that FNaF4 never shows that room together with the house of the minigames. That
   the room is the bitten boy's is R4's "most likely the child's own". The card uses the inference as the shown
   premise of a second inference. Q2 already has it right. Fix, card 4: "in Sister Location a locked room in
   Afton's facility has the bedroom of FNaF4's nights on its monitors and a Fredbear plush of FNaF4's design on
   the desk". Fix, Q5: "on the desk in Afton's facility whose monitors show the bedroom of FNaF4's nights".
3. **Card 3, "A child crying outside a restaurant is killed".** `rulings`. R7 as corrected in round four: not
   "outside the restaurant"; neither game names the venue. `fnaf2-take-cake-to-the-children` says only that six
   children are served cake "while a grey child cries outside". Fix: "A child left crying outside, while six
   others are served cake, is killed by a purple figure from a car [[fnaf2-take-cake-to-the-children]]".
4. **Card 1, `status: "canon"`, and "makes springlock suits [[secret-of-the-mimic-mail-springlocks-hen]]: \"suits
   that double as both animatronic and suit\" [[fnaf3-tape2-dual-suits]]".** `status`. The colon makes the suits of
   FNaF3's tapes Murray's suits. R2 as corrected in round four: that the tapes' springlock suits are Murray's work
   is "most likely". The tape is recorded for Freddy Fazbear's Pizza, and its record names no maker. The record
   cited for Murray speaks of "new springlocks" for "the diner"; the suits are in
   `secret-of-the-mimic-log-build-to-spec`. The card's year is also of kind `teaser`, on a document "not yet
   confirmed in play" by the pill's own note. A card whose
   weakest link is an inference is `strong` by this file's own header. Fix, text: "Murray's Costume Manor works
   under contract for Fazbear Entertainment [[secret-of-the-mimic-dispatch-contractor-murray]] and makes springlock
   suits, some of them \"for the diner\" [[secret-of-the-mimic-mail-springlocks-hen]]
   [[secret-of-the-mimic-log-build-to-spec]]. The suits of FNaF3's training tapes, \"suits that double as both
   animatronic and suit\" [[fnaf3-tape2-dual-suits]], are most likely its work." Fix, status: `strong`.
5. **Q4 `a`, "either way, what he fights is not what is there, and a later game's word for it is \"illusion\"".**
   `status`. R4 (3) is medium, and section 6 of `model.md` says the word "illusion", as applied to the child, leans
   on R16. The chapter `nightmares` has the marker. Fix: "The games do not settle it. The bedroom is a real place,
   shown on the monitors of Afton's facility in Sister Location, and the model leans to the child being awake in
   it. Either way, what he fights is most likely not what is there: a later game's line implies it was
   \"illusion\"."
6. **Q11 `a`, "a copying endoskeleton from the workshop of Edwin Murray, the costume maker whose firm made the
   springlock suits: the Mimic of Secret of the Mimic's title"; card 6, "a copying endoskeleton from Edwin
   Murray's workshop".** `status`. R21 (2): that it is a Murray endoskeleton is high; that it is the second machine
   of 1979 itself is "most likely" (medium-high; step 28). "From his workshop" and "the Mimic of the title" both
   say the second thing flat, and the leading "most likely" in Q11 covers only "two different things". The chapter
   `mimic` now reads "of Edwin Murray's design: most likely his second, violent machine itself". "The springlock
   suits" also claims all of them (see 4). Fix, Q11: "Behind poured concrete at the deepest level waits a copying
   endoskeleton of Edwin Murray's design. Murray was a costume maker whose firm made springlock suits, and this is
   most likely his second, violent machine itself, the Mimic of Secret of the Mimic's title." Fix, card 6: "a copying endoskeleton
   of Edwin Murray's design [[ruin-mimic-lair-mcm-mascot-suits]] [[secret-of-the-mimic-mxes-acronym-on-screen]],
   most likely the second machine he built".
7. **Card 6, "no game says whose boards they were"; "Under the company's newest building".** `overreach`, then
   `no record`. Whose boards is on record: the client sent them (`hw-tape-05`), and the client is Fazbear
   Entertainment. What no game says is which machine they came from (R18 (1), `sd-which-board-unknown`). No record
   calls the Pizzaplex the company's newest building. Fix: "and no game says which machine the boards came from
   [[sd-which-board-unknown]]. Under the Mega Pizzaplex, behind poured concrete".
8. **Q10 `a`, "the beta tester with whom the rabbit left its plush".** `overreach`. `hw-trapped-ending-plush`:
   "The plush left in the hub after the Trapped ending". Who left it is not shown; the order of events, step 23,
   and the chapter `vanny` use the passive. Fix: "and earlier the beta tester who is left a rabbit plush at the
   end of Help Wanted".
9. **Q12 `a`, "In later interviews he said that its contents had changed and then that he never pursued it, so the
   model treats the box as closed for good."** `overreach`. Both answers are machine transcripts, and this is the
   only place in the four files that reports an interview answer without saying so. "Closed for good" is medium (R25). Fix: "In two
   later interviews, known here from machine transcripts, he said that its contents had changed, and then that he
   never pursued the idea. The model takes the box as most likely closed for good."
10. **Card 4, "is scooped underground and told \"You won't die.\"".** `overreach`. `sl-you-wont-die` is the last
    Custom Night cutscene: "After the collapse, a voice repeats 'You won't die.'" The card reads as if it were said
    at the scooping. Fix: "His son {{michael-afton}} is scooped underground [[sl-real-ending-scooped-mirror]]; when
    his body later gives out, a voice tells him \"You won't die.\" [[sl-you-wont-die]]"
11. **Card 5, "After its credits the game shows six gravestones".** `overreach`, small. `ffps-lorekeeper-gravestones`:
    "If the three lore minigames were completed before the Completion ending". Fix: "For a player who has finished
    its three hidden minigames, the game shows six gravestones after its credits, and the words \"THE END\"".
12. **Q7 `a`, "a shared first name on a cheque and the word \"Odor\" on a dismissal slip".** `reader`. A newcomer
    cannot tell why a smell matters. R13 as corrected: the slip shows no name. Fix: "It is not established, and the
    model does not use it. All the games give is a first name, Mike, on FNaF1's cheques, and the word \"Odor\" on
    the unnamed dismissal slip that follows them, which would suit a man whose body is rotting. But the 1987 guard
    Fritz Smith is dismissed for the same word."
13. **As a reader** (`reader`). The page is not dull; it is dense. Five places lose a newcomer:
    - Q2 hedges three times in one answer ("Most likely", "is the model's reading", "and no game says so"). Fix:
      "Most likely. No game says so: the model's ground is a locked room in William Afton's facility in Sister
      Location, which has the bedroom of FNaF4's nights on its monitors and a Fredbear plush of FNaF4's design on
      its desk. From that it takes the house as his home and the two boys as his sons."
    - Card 1 opens the whole site with a firm nobody has heard of and never says why it matters. A first sentence
      such as "The story's machines begin in a costume maker's workshop." would carry it. "Mimics rage" needs
      whose: "which \"mimics rage\", most likely his own" (R21: medium-high).
    - Q5's second sentence runs to 49 words, and "its twin" is never explained: say "a second plush of the same
      design".
    - Q9 ends on "Pizzeria Simulator presents its fire as his end" with nothing to join it to the question. Fix:
      "which is why the model does not say that he is back".
    - Q10, "whatever writes to her", is the ruling's phrase and means nothing on a first visit: "whatever is giving
      her orders".

Compliant, and worth saying because the assignment asked: Q8 tells Ultimate Custom Night's lean as a lean, with
Michael as the full alternative, as section 5.2 requires, and it does not say that the accuser "runs the night"
(the chapter `ucn` still says that flat; see the last section). Q9 uses the tier-2 name once, as a label that is
Scott's. Card 2's "short chain of inferences" matches R1 link for link.

## `community.ts`

**Verdict: minor fixes, with two verdict words and one name to change.** No quotation is wrong and no date is
wrong. Sixteen of the 21 theories need a word or a sentence changed; none needs its conclusion changed. The video
known as "Two Mikes" is not on the page.

1. **Theory 3 `c-springtrap-purple`, `verdict: "confirmed"`; WRONG, "that step stayed an inference until Scott
   said it".** `status`. R1 grades both steps of this theory as strong inferences: that the purple figure who dies
   in the suit is the children's killer (link e), and that the suit Fazbear's Fright finds is that suit, with him
   in it (link a). The only link R1 calls stated is the name in the credits, which this theory does not claim.
   The one "says so" is a 2018 machine transcript, which `canon-rules` holds to be "support, and never the only
   support". It is the only "Confirmed" on the page, and it rests on the weakest kind of record. Fix: `verdict: "mostly-right"`, and WRONG: "Nothing of substance.
   No game says that the body in Springtrap is the man from the minigame: the model holds it as a strong inference
   from the records above. Scott's remark agrees, and is known here only from a machine transcript." If the owner
   wants the top verdict kept, the entry still needs that WRONG text, and the verdict's help should read "A game
   says or shows it, or Scott says so". In RIGHT, "rare screens show remains inside Springtrap" should be "rare
   screens show what looks like a decayed body inside Springtrap" (the record's claim; R1 (a) as corrected).
2. **Theory 16 `c-box-changed`, `verdict: "mostly-right"`; WRONG, "He has never said what the box held before or
   after".** `status`, then `consistency`. R25: closed for good is medium, and that a later game stood in for the
   box is low-medium. The theory's core, "later games redirected it", rests on one transcribed answer, and the
   entry's own WRONG field says the 2024 answer takes it back ("they left it behind"). The sentence quoted is
   contradicted three lines down by the SCOTT field, which gives his 2015 answer. Fix: `verdict: "partly-right"`,
   and WRONG: "In neither interview did he say what the box held before or after, and in 2024 he put it
   differently. …"
3. **Theory 13 `c-henry`, `name: "The Cassette Man is Henry"`; `claim: "The FFPS tape voice is Henry, Afton's
   partner."`** `rulings`. R26, tier 3: "every book-only name" stays out, and this is displayed text. The file's
   header gives itself an exception ("its `name` and `claim` may use fan labels and book names"). No ruling grants
   one. The other theory names use tier-1 names, Scott's own quoted word ("Miketrap"), or a tier-2 name bare
   in a heading (theories 17, 19 and 21: "Glitchtrap", "Burntrap"), where R26 asks for the descriptor; each of
   those entries gives the first-use form in its RIGHT field. This is the one book-only name in the four files.
   Fix, name: "The Cassette Man has a name from the novels". Fix, claim: "The voice on Pizzeria Simulator's tapes
   is given a name from the novels, and is called Afton's partner." If the
   owner decides the page may print the name as the fans' label, put it in quotation marks and keep the header's
   sentence; otherwise delete that sentence. In WRONG, two more points. "The name comes from the novels, which
   Scott called \"separate continuities\"": his 2015 sentence was about the first novel (W1). Fix: "The name comes
   from the novels. Of the first of them Scott wrote in 2015: \"The games and the books should be considered to be
   separate continuities\" [[scott-2015-books-separate-continuity]]." And in RIGHT, "a customer called \"Hen\""
   needs `[[secret-of-the-mimic-log-build-to-spec]]`: the record cited does not make Hen a customer.
4. **Theory 11 `c-cc-golden-freddy`, WRONG, "Wherever the games count the children there are four and one more,
   and the one is marked by the yellow bear: a fifth body before Golden Freddy's jumpscare in Give Gifts, Give
   Life … a fifth gravestone"; theory 12, WRONG, "the dead are always counted as four and one more".** `rulings`.
   R8 (7) as corrected (see home 1). Two of the three examples no longer stand as written. The fifth body is now
   "reported" in its record: "the wiki's report … no capture is on file here". The fifth gravestone is hidden
   behind grass and is not marked by any bear. Fix, theory 11: "The count of the dead decides against it. In seven
   counts of the dead the games give four and one more, and in four of the seven the one more is marked by the
   yellow bear: Golden Freddy's jumpscare ends Give Gifts, Give Life, after four children are given masks
   [[fnaf2-give-gifts-give-life]], and the fifth child at Happiest Day wears a golden mask [[fnaf3-happiest-day]].
   A fifth gravestone, its name hidden, stands beside four named ones [[ffps-lorekeeper-gravestones]]. …" Fix,
   theory 12: "because in most of the games' counts the dead are four and one more". In theory 11's RIGHT, "the
   Death Coin, used on Golden Freddy, summons Fredbear" is R16's corrected wording the other way round: "makes
   Fredbear attack the player, and no text explains it".
5. **Theory 21 `c-mimic-burntrap`, RIGHT, "It keeps the costumes of Murray's Costume Manor".** `rulings`. R21 (2)
   as corrected: its room holds "worn mascot costumes", and the match to Murray's is the wiki's comparison, not
   shown. Fix: "Its room holds worn mascot costumes, which the wiki matches to those of Murray's Costume Manor
   [[ruin-mimic-lair-mcm-mascot-suits]]".
6. **Theory 2 `c-phone-guy-purple`, RIGHT, "someone has tampered with the animatronics"; WRONG, "the name Sister
   Location gives to the designer of its robots".** `overreach`. The call says "someone may have tampered with
   their facial recognition systems, we're not sure" (R9 (3) as corrected). Sister Location gives a surname only
   ("Mr. Afton"). Fix: "a caller reports that someone \"may have tampered\" with the animatronics' facial
   recognition (\"we're not sure\")"; and "whose surname is the one by which Sister Location's board addresses the
   designer of its robots".
7. **Theory 8 `c-mike-michael`, RIGHT, "and he is dismissed for, among other things, \"Odor\"".** `rulings`. R13 as
   corrected: FNaF1's slip shows no name; it is Mike Schmidt's only as the seventh night after his cheques. Fix:
   "The cheques name FNaF1's guard Mike Schmidt [[fnaf1-paycheck-night5]], and the dismissal slip that follows his
   seventh night, which shows no name, gives \"Odor\" among its reasons [[fnaf1-custom-night-pink-slip]]".
8. **Theory 6 `c-dream-theory`, RIGHT, "the flatline tone at the end [[fnaf4-flatline]]"; SCOTT, "many fans took
   it to be this one".** `overreach`, then `no record`. The record is `implied`, and its tone "rests on the wiki's
   description; it was not checked by ear". Section 5 of `model.md` lists the same fault in the `bite` chapter ("a
   flatline plays" stated as fact from an `implied` record), and the chapter now says "The transcripts describe a
   tone". Nothing on record says what fans took Scott's remark to
   mean. Fix: "and the tone that the transcripts describe under the last fade, like the flat line of a heart
   monitor [[fnaf4-flatline]]"; and end the SCOTT sentence at "did not say which
   [[scott-2017-sl-cleared-fnaf4-misconception]]."
9. **Theory 4 `c-bite-87-cc`, RIGHT, "The game also puts toys that look like the 1987 restaurant's characters in
   the house".** `overreach`. `fnaf4-toy-collection-girl` is a girl "in a playground"; only the pulled-apart
   pink-and-white toy is in the house, and its record says the game gives it no label. Fix: "The game also shows
   toys that look like the 1987 restaurant's characters: a girl's three figures in a playground
   [[fnaf4-toy-collection-girl]], and a pulled-apart pink-and-white toy on a bedroom floor
   [[fnaf4-mangle-pieces-in-house]]."
10. **Theory 17 `c-glitchtrap-soul`, WRONG, "No game says whose boards they were"; "the tapes call it only \"the
    anomaly\"".** `overreach`. As home 7. And `hw-tape-girl-calls-it-the-anomaly`: she also calls it "this thing",
    "this virus... or whatever it is" and "he". Fix: "No game says which machine the boards came from
    [[sd-which-board-unknown]], and the tapes give it no name: their word is \"the anomaly\"".
11. **Theory 9 `c-miketrap`, SCOTT, "he removed the theory's one clue himself".** `consistency`. The entry's RIGHT
    field gives the theory two other clues, and the record says "the one clue the poster gives". Fix: "he removed
    the clue that one fan had given for it".
12. **Theory 12 `c-final-theory`, `claim` and "Three of its four claims hold"; theory 8, its source and
    `emerged`.** `consistency`. Theory 8 names the same video (part 2, 5 November 2017) as the place where "Mike
    Schmidt is Michael Afton" came from, yet says the idea emerged "late 2016". If the video argued it, theory 12's
    list of the video's claims is one short and "three of its four" is wrong; if it did not, theory 8's source is
    wrong. I could not check the video. Fix: one or the other, by someone who has watched it; until then give
    theory 8 the source "Community; discussion after Sister Location's Custom Night; 2016-12; secondary".
13. **Theory 1 `c-mangle-bite`, RIGHT, "That is an inference, held at medium confidence"; WRONG, "Mangle is a
    candidate because it is left in pieces among the children".** `status`, then `rulings`. R9 (4): the last days
    are medium, the birthday is low. R9's wording: name neither biter nor victim; here the archive gives its own
    reason for a candidate. Fix: "The model places the bite in that restaurant's last days, at medium confidence,
    and only perhaps at the birthday party booked for the day after Night 6 [[fnaf2-call6-birthday-day-shift]]."
    And: "The theory's reason is that Mangle is left in pieces among the children in Kid's Cove
    [[fnaf2-call3-mangle]]. The model names no biter and no victim: who bit whom is unrecorded."
14. **Theory 5 `c-fnaf4-dream`, RIGHT, "hospital items can appear on the bedside table"; "The model agrees that
    what the boy fights is not what is there."** `overreach`, then `status`. `fnaf4-bedside-items`: a vase of
    flowers, a pill bottle or an IV drip; "Hospital-like items; any link to the child being hospitalised is
    interpretation." R4 (3) is medium. Fix: "flowers, pills or a drip can appear on the bedside table"; "The model
    agrees, at medium confidence, that what the boy fights is most likely not what is there."
15. **Theory 18 `c-vanny-vanessa`, SCOTT, "he spoke of Vanny as one character"; source `date: "2020–21"`.**
    `overreach`, then `reader`. One character called Vanny says nothing about whether Vanny is Vanessa, and the
    record's note says so: "he does not say who she is". The page prints source dates as stored, and the schema
    asks for YYYY-MM-DD or YYYY-MM; theory 10's source has a bare "2016" as well. Fix: "In the 2024 interview
    (machine transcript) he said \"I don't think that Vanny was utilized to her fullest potential\"
    [[scott-2024-interview-vanny-underused]], and did not say who she is." Date: "2021-12", the month of the
    game's release in `games.json`, with `what: "discussion of Security Breach's teasers and release"`.
16. **Theory 7 `c-adult-theory`, `claim`, "hinted that the game would have 'mature' content"; WRONG and moment 7,
    "they were birthday bookings and children's entertainment".** `overreach`. The thread the entry links as its
    source words the rumour more strongly: "Baby and Ballora are gonna be used for +18 purposes". And the client
    list has three entries, of which two are birthday business; the third, "CRMN_Inst/Project", is unexplained in
    its record. Fix, claim: "… hinted that the robots were hired out for adult purposes." Fix, both
    summaries: "By 20 June the same source listed three clients, and two of them were birthday bookings and
    children's entertainment". Moment 7 is flagged `scott-confirmed`, so the page prints "He said or published this
    himself" over a link that the summary calls an inference; the summary's last sentence covers it, and I would
    leave the flag.
17. **Moment 23 `i-lunatic`, "using his own picture does not make the developer him".** `overreach`. Scott: "that
    doesn't necessarily mean that it's actually *me* in-universe". Fix: "does not necessarily make the developer
    him".
18. **Moment 29 `i-names`, `title: "Working names become canon names"`.** `status`. R26: tier 2 is medium and
    rests on one transcribed sentence; `canon-rules` calls it "the weakest" tier. The summary is careful; the title
    states it flat. Fix: "Scott on two working names".
19. **Moments 9, 24 and 27 (`i-cancel` 2016-08-16, `i-mock` 2019-08-08, `i-retire` 2021-06-17).** `dates`. Each
    date is the day scottgames.com or fnafworld.com was captured showing the item, by the records' own `location`
    fields. `box.ts` says so in its `dateBasis`; these summaries do not, and the page prints the date as the day of
    the event. Fix: begin each summary "By 16 August 2016, a Sister Location teaser shows …", "By 8 August 2019, a
    teaser on fnafworld.com shows …", "By 17 June 2021 Scott's retirement message is on scottgames.com: …".

Smaller, no change needed. Theories 14 and 15 give Nightmarionne's "This time, death cannot save you" without the
stutter that the record's `quote` prints; the record's `claim` gives the clean form.
Theory 4's source was checked against its archived description, which reads "the evidence in the game that points
straight toward the Bite of 87, as well as how the Bite of 87 itself makes FNAF 4 absolutely IMPOSSIBLE!": it is a
fair source for the theory. The `emerged` labels ("Nov 2017" for theory 11, and the rest) have no record and
cannot be checked; they are honest as approximate labels.

## `box.ts`

**Verdict: minor fixes.** Every quotation is verbatim against Scott's posts and the records, the eleven steps are
in date order with honest date bases, and R25 is followed: the box is closed for good at medium, on one
transcribed answer, and the essay says so. The post of 24 August 2015 is the only announcement by Scott in FNaF4's
Steam news feed that mentions the box.

1. **Guess 3, `verdict`, "Mostly right. … He has never said what it held before or after".** `status`, then
   `consistency`. As community 2: R25 gives "closed for good" medium and "a later game stood in for it"
   low-medium, the 2018 answer is a transcript, and the 2024 answer takes the redirection back. The second
   sentence contradicts answer 1, whose whole subject is what he said in 2015 that it held. Fix: "Partly right. In
   the 2018 interview (machine transcript) Scott said \"He's absolutely right. The contents of that box have
   changed over the years\" [[scott-2018-box-meaning-changed]]. In neither interview did he say what it held before
   or after, and in 2024 he put it differently: the idea was there, and he \"never pursued it\"
   [[scott-2024-box-interview]]."
2. **Guess 4, `verdict`, "FNaF World's files contain an unused picture of the box standing open
   [[fw-unused-open-box]]. It cannot be reached in play, and unused content is not evidence of what the box
   holds."** `rulings`. Does the sentence that was kept comply with W7? In its words, yes: it says what the item is,
   that it cannot be reached, and that it is not evidence; it does not say the box is drawn empty; nothing in the
   essay rests on it. In its form, no, for three reasons.
   - It carries a citation token. `canon-rules`: "Cut, unused and data-only content is never cited." The record is
     in the theory's `outsideStory` list (`theory.ts`, group `not-evidence`), which by the rulings holds only
     records "that nothing cites". The token puts the record in this page's numbered sources and opens it over the page, and the record
     is not neutral: its title is "the box, opened and empty", its claim says "The inside is dark and empty; no
     contents are drawn", and it carries the picture.
   - It sits in the verdict on "The box can be opened", straight after "Wrong", where it reads as a concession to
     the guess.
   - "Of what the box holds" answers a different guess: this one is about opening it.

   Fix, the last two sentences of the verdict: "FNaF World's files hold an unused picture of the box standing
   open, which cannot be reached in play. Unused content is not evidence, and nothing here rests on it." No token.
3. **Answer 2, `body[3]`, "The three answers, of 2015, 2018 and 2024, agree on one thing only: the box was never
   given a final content."** `overreach`. The 2015 answer gives a content: "It's the pieces put together." It does
   not say the box was never given one, and answer 1 is built on it. The sentence comes from the note of
   `scott-2024-box-interview`, which has the same slip. Fix: "The answers of 2018 and 2024 agree on one thing: after
   2015 the box was never given a final content."
4. **Answer 3, `short`, "its maker no longer holds an answer to reveal"; `body[0]`, "there is nothing fixed left
   to reveal".** `overreach`. The answer it paraphrases: "there is something in the box, but I never pursued it,
   and I don't know if I can find it again." He does not say there is nothing. Fix, short: "Most likely not. On his
   own last account its maker never worked the answer out, and does not know whether he can find it again." Fix,
   body: "By Scott's last account the answer was never worked out: an idea was there, …".
5. **Answer 1, `body[0]`, "The paragraph before it is about FNaF4's story".** `unsupported`. In the post both
   stand in one paragraph, with two sentences between them: "no one, not a single person, found the pieces. The
   story remains completely hidden. I guess most people assumed that I filled the game with random easter eggs
   this time. I didn't. What's in the box? It's the pieces put together." That is stronger for the essay's
   reading, not weaker. Fix: "Earlier in the same paragraph he is writing of FNaF4's story: …".
6. **Answer 1, `body[1]`, "Then the boy fades to a flatline tone, which implies that he dies".** `overreach`. As
   community 8: the tone is the wiki's description of audio that was not checked by ear, and the record is
   `implied`. Fix, in the chapter's words: "Then the boy fades. The transcripts describe a tone under that last
   fade as the flat line of a heart monitor, which implies that he dies [[fnaf4-flatline]]."
7. **Answer 1, `body[2]`, "FNaF World, that winter, echoed both on purpose" and "FNaF World's adventure is outside
   the story, so this is an echo"; step `b-fw`, "The echo of FNaF4's last scene, and of Scott's word for what the
   box holds, is deliberate" and "The adventure is outside the story, so this is an echo and adds no fact".**
   `rulings`. R17: these lines are the frame voice, which is not the part that is outside the story; it echoes on
   purpose (high), and where the echo points is medium-low. So "so" has the reason backwards, and that "the pieces"
   answers Scott's post is the model's reading, not a deliberate act on record. `author.ts`, step `a-fw`, has it
   right. Fix, answer: "FNaF World, that winter, echoed the promise on purpose, and most likely the pieces too. …
   FNaF World's adventure is outside the story, and its framing voice echoes FNaF4 on purpose: it shows that Scott
   kept the phrases alive, and it adds no fact about the box." Fix, step: "The echo of FNaF4's last scene is
   deliberate; that \"the pieces\" also answers Scott's word for what the box holds is the model's reading. … The
   adventure is outside the story; its framing voice echoes, and adds no fact."
8. **Guess 4, `source`, Game Theory, "Why FNAF Will Never End", 2015-09-01.** `no record`. The title and date are
   right. Its archived description says only "What's in the box? That's covered too": a video about what the box
   holds, published ten months before the "nightmare mode twice" joke that the guess's `idea` lists. Nothing I
   could check shows it arguing that the box can be opened. Fix: move this source to guess 1 or 2 if it argues
   either, or label it "discussion of the box after FNaF4"; give "beating Nightmare twice" its true origin in the
   idea: "Secret inputs, a future update, or (from Scott's own joke of 2016) beating Nightmare twice would open
   it."
9. **Guess 1, "Scott's phrase is about the pieces of a story that players had not found"; guess 2, "\"the pieces
   put together\" of a story nobody had found".** `consistency`. Answer 1 calls this "a reading: he never said so
   in as many words". Fix: "by the context of his post, Scott's phrase is about …" in both.

## `author.ts`

**Verdict: minor fixes.** The 2014 statement is quoted and dated correctly and is not stretched. Every quotation
from the interview, the 2021 post and Hope Animation's pages is verbatim. R15 and R16 are both respected, and the
essay's rule for itself is the right one: "His words are; his beliefs settle no fact inside the story." Three
sentences break that rule.

1. **Answer 2, `body[1]`, "An author who believes in souls, judgement and rest can mean such words plainly".**
   `no record`. Scott's words on record are "I'm a Christian." and "I believe in God." No record has him say what
   he believes about souls, judgement or rest; that is the archive supplying a creed for him. Fix: "An author who
   calls himself a Christian, and says he believes in God, can mean such words plainly, and nothing he has said
   suggests irony."
2. **Reading 6, `body`, "The shape would suit Scott's stated beliefs."; "three identifications"; "the volunteer
   who would rather stay in the fire".** `no record`, `consistency`, `rulings`. His stated beliefs do not include
   a view of redemption arcs. The paragraph then grades four identifications, not three. And R13 as corrected in
   round four: not "the volunteer who would rather stay"; the Cassette Man is guessing ("I have a feeling"), and
   the game does not show whether the volunteer leaves. R13 also puts the brother at "medium, lower end". Fix: "It
   is only as strong as four identifications, and the model grades them unequally. That Michael is the son sent
   underground is firm [[sl-golden-freddy-cutscene-father]]. That he is the brother whose prank ends in the bite
   [[fnaf4-give-fredbear-a-kiss]], and the volunteer who, the Cassette Man guesses, is where he wants to be
   [[ffps-completion-brave-volunteer]], are held at medium or just below. That he is the one told to rest
   [[ucn-omc-ending]] depends on who is in that office and on whom the old man addresses, and ((ucn)) settles
   neither: its lean, such as it is, runs the other way. The games do not complete the shape." Delete "The shape
   would suit Scott's stated beliefs."
3. **Reading 2, `status: "supported"`, "his stated beliefs make a plain reading the natural one".** `consistency`.
   Answer 3 promises: "Where a reading below leans on his faith, it is marked as interpretation." This one leans
   on it and is marked "Supported". The games' own text carries the reading without him. Fix: "Nothing in Scott's
   words suggests irony. That a plain reading is the natural one for an author who calls himself a Christian is
   interpretation, and the reading does not need it: the words are in the games." Also "He speaks of Hell, the
   Devil and peace as real destinations": the Devil is not a destination. Fix: "He speaks of Hell and the Devil,
   and of peace, as real".
4. **Lexicon `atone`, `gloss`, "belong to those who set the trap: a man who let a wound \"bleed out\", a father
   who could not save his daughter, a company voice that speaks of \"atoning for past mistakes\", and a volunteer
   who would rather stay"; `lines[2]`.** `rulings`. Three faults. "A volunteer who would rather stay" is the
   wording round four withdrew (R13). The man and the father are one man, listed as two. And a company voice among
   "those who set the trap" tells R31's weakest clause as fact: that the Cassette Man ran his trap through the
   company is medium-low, and the same record has the company "no longer a corporate entity". The bare id in
   `lines[2]` makes the page print the record's `quote`, which does not contain the word the gloss quotes
   ("atoning" is in its `claim`). Fix, gloss: "The words of putting right gather round the trap. The Cassette Man
   let a wound \"bleed out\" and could not save his daughter; a tutorial voice speaks of \"atoning for past
   mistakes\"; and a volunteer, he guesses, is where he wants to be." Fix, line: `["ffps-completion-tutorial-atonement",
   "The tutorial voice, after the fire: the company values “atoning for past mistakes and tying up loose ends”."]`
5. **Lexicon `rest`, `gloss`, "FNaF World's line is an echo from outside the story."** `rulings`. R17 and the
   list of what is outside the story: the adventure is outside, "not its frame voice". Fix: "FNaF World's line is
   its framing voice echoing FNaF4: support, and no more."
6. **Step `a-desolate`, "Not a Christian game:"; "It is his last major release before FNaF".** `overreach`, then
   `no record`. The step's own listed source, Hope Animation's post of 13 October 2013, says the game "is not as
   straightforward of a Christian game as \"The Pilgrim's Progress\"" and "has a strong pro-life message". No
   source says it was his last major release; the sentence is taken from the record's note, and Scott's own
   account names another game "before this": "a family friendly game about a beaver". Fix: "Not an openly Christian
   game: … It reached Steam in May 2014, three months before FNaF, and it is recorded here as biography only."
7. **Step `a-fnaf1`, `dateBasis: "FNaF1's Steam release."`** `dates`. Steam's store page gives 19 August 2014.
   8 August is the release date in this archive's `games.json`. Fix: "FNaF1's first release, as this archive's
   game list has it; its Steam page gives 19 August 2014."
8. **Answer 2, `body[0]`, "From Pizzeria Simulator on, the games use religious words."** `consistency`. Step `a-fw`
   says: "The earliest of these words in the archive's records", FNaF World's "Rest.", two years earlier. Fix:
   "The religious words come late. FNaF World's frame ends on one, \"Rest.\", in 2016; from Pizzeria Simulator on
   there is a vocabulary."
9. **Reading 4, "Remnant is named on one Afton Robotics blueprint".** `overreach`, small. The record's note: "The
   only other game record of the word is Special Delivery's collectible 'Remnant'". Fix: "In the main games
   Remnant is named on one Afton Robotics blueprint, … Special Delivery uses the word for a collectible and
   explains no more [[sd-tutorial-remnant-collection]]."
10. **Answer 3, `body[1]`, "There is no church in them. The vocabulary is small (rest, peace, Hell, the Devil, a
    demon, souls, spirits)"; step `a-ffps`, "Pizzeria Simulator is the first game to name Hell and the Devil".**
    `no record`, then `consistency`. Two universal negatives with no record behind them; steps `a-fnaf1` and `a-fw`
    use the right form ("as far as the archive's records … go"). And the page's own lexicon holds words the list
    leaves out: "afterlife", "prison", "nightmare", "atoning". Fix: "The archive's records show no church in
    them. The vocabulary is small (rest, peace, Hell, the Devil, a demon, souls, spirits, and once an afterlife)";
    "Pizzeria Simulator is the first game in the archive's records to name Hell and the Devil."
11. **Lexicon `night`, `theme: "What the endless night is called"`; `lines[2]`, Mr. Hippo.** `rulings`. The
    heading takes R16's lean (a night without end, low-medium) as given, where the gloss under it marks it. R27:
    when citing a tale or a joke, print its kind. Mr. Hippo's line comes from one of his rambling stories, and its
    record says he "undercuts it at once". Fix, theme: "What Ultimate Custom Night's voices call the place". Fix,
    line: `["ucn-mr-hippo-afterlife-or-dream", "Mr. Hippo, in one of his rambling stories, wonders whether “this
    is my afterlife or my dream”, and then says it may mean nothing."]`
12. **Readings 2 and 5, `claim`, "FFPS and UCN", "UCN"; reading 1, "The machines are machines, and some of them
    hold the dead."** `reader`. The claims are headings, and they use abbreviations that the rest of the page
    spells out. Fix: "The afterlife words in Pizzeria Simulator and Ultimate Custom Night mean what they say
    inside the fiction."; "Ultimate Custom Night is William Afton's Hell." The last sentence of reading 1 is a
    claim about the story with no citation; add `[[ffps-insanity-tiny-breaths]]` or cut it.

## Interface text

**Verdict: needs work.** The pages' own prose is careful and almost free of claims about the story. The faults
are in the definitions: the Method page, the help text and one mapping were written to the old model, and they
now tell the reader that the grades mean something firmer than the data means by them. Paths are under
`$UI/src/`. Each item gives the line, what is wrong and the replacement.

### `components/RichText.tsx`

1. **Lines 194 and 252, `PRECISION_KIND = { exact: "printed", approx: "estimated", … }`, used by `EvidenceDate`.**
   `dates`. Every record card, the record drawer and every record page turn a record's `when.precision` into a
   date kind. The kind is drawn as the date's glyph, read out with the label ("printed date"), and printed with
   its help text when the date is selected. A record's precision says how exact its label is, not how the date is
   supported. The result, counted over the 1,044 records:
   - 33 records show **"Printed date"** with "The date is printed or spoken in a game or in Scott's words" where
     the rulings forbid the word (R2, R24 (1), R27): 29 Secret of the Mimic records labelled "present night (work
     order dated 9/07/79)", Murray's memo of 1974, his chart of 1965 to 1975 and his order forms of 1973 to 1977,
     all read from textures not yet seen in play, and Help Wanted 2's "1970 (year printed on the poster)", a staged
     prop.
   - 54 records show **"Estimated date"** with "This archive's best estimate" for dates the model does not
     estimate: 28 Special Delivery records with 2019 or 2020 ("c. December 3, 2019 (day the email reached
     players…)", "Special Delivery's present (c. 2019-2020)"), which are delivery days and years after 1987; 25
     Into the Pit records labelled "1985 (the past reached through the ball pit)", from a logo that R23 says "dates
     nothing"; and Curse of Dreadbear's "'83 (banner text; inside a VR recreation)".
   - Two of Scott's posts show as "Printed date" and one teaser as "Teaser date" for the day they were posted.

   Fix: delete `PRECISION_KIND`. In `EvidenceDate`, show `e.when.label` with `e.when.basis` and no kind, glyph or
   kind help: a record's date is a label, and only the dates justified in `dates.ts` and in date pills carry a
   kind. If a kind must be shown, add an optional `when.kind` to the schema and let the records carry it. Until
   then even the three truly printed dates (the two cheques, the television's 1983) lose nothing by showing their
   basis alone.

### `components/labels.ts`

2. **Lines 55 to 59, `DATE_KIND` help.** `dates`. These print on every date pill and as the Method page's list of
   kinds. Against the header of `dates.ts`, which defines the kinds as the data uses them:
   - 59, teaser: "Shown only in an official teaser, not in the game itself". Now wrong: the data's one teaser date
     is 1979, which is also on a work order in the game's files. Replace: "The year ends the game's official
     teaser; in the game it is so far only on a document nobody has yet seen in play".
   - 55, printed: "The date is printed or spoken in a game or in Scott's words". Replace: "A game prints or speaks
     the date in play, or Scott's own text gives it; never a staged prop, or a texture not yet seen in play".
   - 56, derived: add "and nothing else": "Arithmetic from printed dates and stated intervals, and nothing else".
   - 57, estimated: replace with "This archive's bracket or best estimate; also a date that depends on a reading".
   - 58, relative: replace with "Placed only by order; where the place is only this archive's convention, the
     reason says so".
3. **Line 29, `strong`: "Forced by several records together".** `status`. The data uses `strong` for the model's
   medium-high rulings, which name what would change them. Replace: "A near-certain inference from several
   records together".
4. **Lines 33 to 35, `CONFIDENCE` help; line 24, `shown: { level: "partial" }`.** `status`. Each help is a notch
   firmer than the theory's own key (`theoryIntro.howToRead`), and "low" here is the theory's "medium". Replace:
   high, "Stated or shown, or a step that every later game relies on"; medium, "The best reading, with a real
   alternative beside it"; low, "A lean, or an honest guess". Line 24 gives a `shown` record the half-filled mark
   that elsewhere means "medium confidence" and "strong inference". The model treats what a game shows as direct
   evidence ("a game says or shows it"; canon is "stated or shown"). Either give `shown` the firm level, or keep
   the mark and say so in the legend (5).

### `components/Legend.tsx`

5. **Lines 5 to 7, the three `gloss` strings** (read out by screen readers as the meaning of each mark). `status`.
   "The sources say it or show it." sits on the row that holds Stated, while Shown is on the next row, glossed
   "Close to forced, but one step is inferred." A shown record has no inferred step, and medium confidence is not
   close to forced. Replace: firm, "The firmest grade: stated outright; canon; high confidence."; partial, "The
   middle grade: shown and not put into words; a near-certain inference; the best reading, with a real
   alternative."; tentative, "The loosest grade: implied; this archive's own reading; a lean."

### `pages/essays/Method.tsx`

The page agrees with `canon-rules` on the two kinds of source, with the rulings on the accounting of every
record (lines 367 to 369: cited, filed as further evidence, or listed as outside the story with the reason), and
with `scripts/validate.ts` on the two rules it says are enforced (309 to 310). The Survival Logbook is listed as excluded. What is missing or stale:

6. **Line 308, "A strong inference is one that could only be rejected by assuming the games are wrong."**
   `status`. False of the data: links marked strong are medium-high rulings with named alternatives (for example
   R7, R19 (1), R21 (2)). Replace: "A strong inference is a near-certain one that several records make together;
   each says what would change it."
7. **Lines 210 and 257 to 261, the books.** `rulings`, `missing`. The page never says that leaving the books out
   is this archive's policy and not a ruling of Scott's (W1; the chapter's answer says it in those words), it
   quotes nothing, and it skips 2018 and the second half of what he wrote in 2015. Replace 210's answer: "The
   games, and Scott Cawthon's own words. Novels, guidebooks and films fill no gap: that is this archive's policy,
   not a ruling of Scott's." In the paragraph, keep the first sentence (with "left out" for "excluded") and the
   sentence that links the chapter, and replace the other two with:

   > Leaving them out is this archive's policy, and not a ruling of Scott's. His words on the books have moved. In
   > 2015 he wrote of the first novel: "The games and the books should be considered to be separate continuities,
   > even if they do share many familiar elements." The book was "NOT intended to solve anything", and yet "the
   > book is canon, just as the games are." In 2018 he announced a series of short stories, "some connected
   > directly to the games, and some not". In 2020 he wrote of that series: "look to the novels to fill in some of
   > blanks to the past!" In 2024, of "what people are saying about the canonicity of the books", he wrote only
   > "yes, that is correct". So his later words do not exclude the books. The archive leaves them out all the
   > same, so that every conclusion stands on the games and Scott's words alone.

   Every phrase was checked against the Steam thread of 18 December 2015, the record of the Steam post updated
   12 November 2018, and the Reddit posts of 29 January 2020 and 6 January 2024.
8. **Lines 253 to 254, "The games. Everything a player can reach in them: … mechanics …" and "interviews in his
   own words".** `missing`. As written, everything reachable counts equally. The chapter and R27 say otherwise.
   Add after the list:

   > Not everything in a game carries the same weight. Scott has ruled on some of it: FNaF4's 1.1 update is canon
   > and its Halloween Edition is not; the play of Sister Location's Custom Night is not canon and its cutscenes
   > are; Help Wanted is canon. Where he has not ruled, the archive states its own rules and says they are its
   > own. A later game made to mend an earlier one governs the disputed point. In Ultimate Custom Night the play
   > and the roster are staging, and the lines and cutscenes are text. Inside a product that Fazbear Entertainment
   > sells in the story, the level as built is the company's staging, and what frames it or breaks into it is
   > story. A prop in such a level, or a tale told by a character, can agree with a finding and never establish
   > one. A mechanic counts only when the game explains or names it. Cut and unused content is never cited, and a
   > document read from a game's files and not yet seen in play is cited as that. Scott's two long interviews, of
   > 2018 and 2024, are on record as machine transcripts of the video: they support a claim about the story, and
   > never carry one alone.
9. **Lines 264 to 265, "One consequence is that names found only in the books are never used here"; line 271, the
   three example chips.** `rulings`, `missing`. R26 has three tiers and the page gives one. The examples are the
   first three descriptors in `people.ts`, and the first is "the purple man", whom a game does name (his entry's
   alias: "Purple Guy (the name FNaF World prints, and Scott's own word)"), under the sentence "Where the games
   give no name". Replace the paragraph:

   > Names follow three rules. A name that a game prints or speaks is used as a name. A working name that Scott
   > uses and no game prints (Glitchtrap, Burntrap, Scraptrap) is given once, as his label, and nothing is argued
   > from it. A fan's label, a file name or a name found only in the books is left out: the archive uses a plain
   > description, and sets it in italic wherever people are listed.

   Replace 271's `DESCRIPTORS.slice(0, 3)` with the three people `crying-child`, `older-brother` and `fifth-child`.
10. **Line 181, "How well the chapter's main claim holds."; and nothing on the markers of doubt.** `missing`. The
    theory's rule is "A chapter takes the mark of the weakest claim its answer depends on." Replace 181 with that
    sentence. Add to the firmness section, before line 308:

    > Three markers say how a sentence stands. A plain statement with a record behind it means that a game says or
    > shows it. "Most likely" marks a short inference. "The model reads" marks this archive's own interpretation.
    > "May be", given with its reason, marks a possibility the archive holds loosely.
11. **Lines 343 to 359, the dates.** `missing`, `dates`. The list of kinds takes its text from `labels.ts` (2).
    The paragraph's rule, "an event's date can only be marked printed if at least one record states or shows it",
    is weaker than the model's. Add:

    > A date on a prop inside one of the company's own products, or on a document read from a game's files and not
    > yet seen in play, is never called printed. "Derived" means arithmetic and nothing else. No game prints a year
    > after 1987, so the archive prints none: after that it gives order and intervals. The dates on Special
    > Delivery's emails are the days they reached players, and only their order is used.
12. **Line 26, `BOOK_STATEMENTS`, every Scott statement tagged "novels".** `consistency`. The fold "Scott's
    statements about the books" lists 15 records in file order (2015, 2020, 2024, 2015, 2016, 2018, 2020, 2018,
    2024). Three are not about the books (the film, a film script, the Into the Pit game), and one title prints,
    as Scott's quoted word, a name that the chapter declines to print ("A rejected script's 'Charlie' had …"). Replace with the seven records the chapter's own
    sequence cites, in its order: `scott-2015-books-separate-continuity`, `scott-2015-book-not-a-guide`,
    `scott-2015-book-canon-not-puzzle-pieces`, `scott-2018-frights-some-connected-to-games`,
    `scott-2020-novels-fill-blanks`, `scott-2020-novels-means-fazbear-frights`, `scott-2024-books-canonicity-yes`.
13. **Line 136, "Community transcripts are used to check wording, and for nothing else."; line 141, "Screenshots
    come from the wiki's file pages".** `unsupported`. The records themselves say more is taken from the wiki:
    descriptions of scenes ("From the wiki's description and a screenshot of the room"), reports ("The one-frame
    fifth body is the wiki's report"), and documents "read from the document image on the wiki". And 26 of the 169
    image credits are from the Wayback Machine, YouTube or Steam. Replace 136: "Community transcripts and captures
    stand in for the games where the archive has not checked in play, and each record says so." Replace the body:
    "Wording, descriptions of scenes and images of documents were taken from or checked against community
    transcripts and captures, mainly the FNaF fandom wiki, and each record names the page. Where a record rests
    on the wiki's description of something the archive has not seen, it says so and tells it as reported. The
    wiki's interpretations, trivia sections and theories are not used. Most images come from the wiki's file
    pages, the rest from archived copies of Scott's sites, Steam and video captures, and every image links to the
    page it was taken from."
14. **Line 164, "as he did in 2014 for the idea that the animatronics stand for vices".** `overreach`, small. His
    answer was about the one game that existed, and `author.ts` says so. Replace: "as he did in 2014, of the first
    game, for the idea that the animals stand for vices".
15. **Line 183, "These are the three layers of the reconstruction."; line 196, "Three things the archive uses";
    line 333, "each of the three essays".** `reader`, `consistency`. Canon, strong and theory are grades, not
    layers, and "three layers" is the model's term for something else (staging, frame, intrusion). The two counts
    are hard-coded. Delete the sentence at 183; "Things the archive uses or discusses without letting them settle
    anything in the story."; "Every chapter of the theory, and each essay, ends with …".

### `pages/essays/Box.tsx` and `pages/essays/Author.tsx`

16. **`Box.tsx:39`, `kind="printed"` on every step; `Author.tsx:87`, "printed" or "estimated".** `dates`. These
    are real-world dates: release days, posting days, the day a page was captured. The pill prints "Printed
    date" and "The date is printed or spoken in a game or in Scott's words" over "The date on which scottgames.com
    was captured showing this image", and "Estimated date" over "c. 2011". The date kinds are the story's scale.
    Fix: render the step's date as plain text with `dateBasis` as its title or note, without `DatePill`.
17. **`Box.tsx:74`, "FNaF4's hardest night ends on a grey box".** `no record`. The record says "Night 7
    (Nightmare)"; none ranks the nights. Replace: "FNaF4's seventh night, Nightmare, ends on a grey box …".
18. **`Author.tsx:127`, caption: "The battle commands are Faith, Truth, Pray for and Blessings."** `unsupported`.
    The picture shows a menu of Resist with, Pray for, Healing, Blessings and Run; Faith and Truth are two of the
    five choices under Resist with, as `author.ts` says. Replace: "The battle menu offers Resist with (Faith,
    Truth and three more), Pray for and Blessings."
19. **`Author.tsx:126`, "Scott Cawthon spent about twelve years making Christian films and games"; line 145, "The
    N religious and afterlife lines in the archive's records".** `overreach`. His words: "For about twelve years I
    dedicated my free time to …". And the lexicon is a selection (the records hold others, such as "I AM YOUR
    WICKEDNESS"), so "The N … lines in the archive's records" claims a completeness the number does not have.
    Replace: "By his own account, Scott Cawthon gave about twelve years of his free time to Christian films and
    games before Five Nights at Freddy's."; "N religious and afterlife lines from the archive's records".

### `pages/essays/Community.tsx`

20. **Line 51, "pranked the fandom and put nods to it inside the games".** `overreach`. The page has two moments
    of that kind. One is Scott's own photograph in Help Wanted. The other, Mr. Hippo's line, is flagged
    "Fan-inferred" by the data, and the page prints under it "neither Scott nor the game says so". The header
    states it as his act. Replace: "pranked the fandom, and once put his own photograph into a game".

### `pages/home/Home.tsx`, `components/shell/nav.ts`

21. **`Home.tsx:123`, "Six things the evidence establishes".** `status`, `consistency`. The count is hard-coded,
    and two of the six cards are marked theory and two strong: the evidence does not establish those four, and
    the line under the title says so. Replace: `${inWords(homeSummary.length)} things the model holds, and how firmly`
    with the first letter capitalised.
22. **`Home.tsx:141`, "Eight eras, one line of events"; `nav.ts:24`, "across eight eras"; `Home.tsx:142`, "each
    date marked as printed, derived or estimated"; `Home.tsx:103`, "the model's answer in a sentence";
    `Home.tsx:46` and `164`, "screenshots".** `consistency`. The era counts are hard-coded (8 today). There are six
    date kinds. The answers run to two and three sentences. The count is of image credits, which include
    documents from the games' files, an unused asset, a game's cover and a store header. Replace: compute the era
    count from `eras.length` in both places; "each date marked with how it is supported"; "the model's answer in
    brief"; "images".

### `pages/theory/CoverParts.tsx`

23. **Lines 34 to 35, the example pill `label="c. 1983" kind="derived"`, "worked out from a printed year and a
    stated interval"; "whether it is printed, derived or estimated".** `dates`. The model's c. 1983 is estimated,
    and an approximate date is never derived (R24 (8): derived means arithmetic). Replace the second pill:
    `label="June 27" kind="derived" basis="Example: a clipping gives the night of June 26th and 'the following
    morning'."` Replace the sentence: "A dotted date explains itself: how it is supported, and by which records."

### `pages/timeline/Timeline.tsx`

24. **Line 239, "Where the games print no date, an entry is placed by what it follows. That position is a
    convention, not a claim about the year."; line 238, "recorded deaths".** `rulings`, `consistency`. R12 and the
    order of events have three grades: firm (FNaF2, then FNaF1, then FNaF3 is high), inferred, and convention.
    Calling every undated position a convention gives away what the records fix. And `deaths.ts` holds entries
    whose death is implied or unknown ("Jeremy (fate unknown)"). Replace: "Where the games print no date, an
    entry is placed by order. Some of that order is fixed by the records, some is inferred, and some is only this
    archive's convention: each entry's date says which." and "… and ${TOTAL_DEATHS} deaths and disappearances …".

### `components/palette.ts`

25. **Line 31, `afton: "Afton family"`; line 32, `mimic: "The Mimic and the Murrays"`.** `status`, `rulings`. The
    first heads a group of six that holds "the crying child" and "the older brother", and it is the kicker on
    their pages ("Afton family · Descriptor"). That they are Aftons is R3 (2) and (3), medium, "most likely". R26:
    headings carry the descriptor, and the entry's own name is "the copying endoskeleton". Replace: `afton: "The
    Aftons, as the model reads them"`; `mimic: "Murray's workshop"`.

### `pages/people/People.tsx`, `pages/people/PersonDetail.tsx`

26. **`People.tsx:181` and `191`, `` id: `group-${g}` ``.** `rulings`. The group key for the Cassette Man's
    household is `emily`, so the section's address is `/people#group-emily`: a book-only name in a link the page
    offers. The label itself, "Cassette Man's household", is right. Fix: map the key to a slug before it is
    printed (`emily` to `cassette-man`).
27. **`PersonDetail.tsx:133`, "The games never give this name."; line 134, "A name the canon gives.";
    `People.tsx:169`, "the games never print them".** `overreach`, `reader`. Line 133 is true of the descriptor and
    reads as if the figure had no name. It prints on at least six entries that a game does name: the salvaged
    rabbit of Pizzeria Simulator (credited "William Afton"), the purple man ("Purple Guy" in FNaF World), the
    copying endoskeleton (the Mimic of a game's title), the Princess of Princess Quest, the tape speaker ("QA" in
    the credits), the rabbit in the code ("the anomaly"). And "the crying child" is a name a game prints, for
    another figure (`fw-crying-child-character`). Line 134 prints on "Michael Afton", of whom only "Michael" is
    spoken. Replace 133: "“{name}” is this archive's description, not a name from the games. Anything the games do
    call this figure is listed under Also." Replace 134: "A name a game prints or speaks." Replace 169: "Names in
    italics are this archive's own descriptions."

### `pages/people/ties.ts`

28. **Line 34, `"partner-of": { label: "partner of", says: "is the partner of" … }`; line 57, "Family, partners
    and work"; line 64, "parent, sibling, spouse, partner, colleague, employer".** `rulings`. The one tie of this
    kind joins the Cassette Man and William Afton. R2: "never 'partner'" as fact; the game's word is "old friend".
    The tie is marked theory and its note says the word is the model's own, but the label, the sentence and the
    legend print it bare. Replace, making the tie directed, since the words are the Cassette Man's: `label: "“old
    friend” of", says: "calls his “old friend”", own: "calls his “old friend”", other: "called “old friend” by",
    directed: true`; "Family and work"; "parent, sibling, spouse, old friend, colleague, employer".
29. **Line 33, `"spouse-of": { label: "spouse of", says: "is the spouse of" … }`.** `rulings`. Its one use joins
    Edwin and Fiona Murray, marked strong. R21 as corrected in round four: "no record of a marriage"; the records
    call Fiona David's mother. The tie's own note says "No record uses the word wife." Replace the words with
    "shared a home with" and "shares a home and a son with"; the kind itself is in `relations.ts`.
30. **Lines 42, 59 and 66, "hunted", "hunted by", "Killed or hunted".** `rulings`. Six ties print this verb. For
    the woman in the rabbit costume, round four withdrew it (step 26: "walks the building", was "hunts him": no
    record of a hunt). For Michael and his father the record is one sentence, "I'm going to come find you."
    Replace: "went after", "pursued by", "Killed or pursued", and see the note on `relations.ts` below.

### `pages/evidence/EvidenceDetail.tsx`, `components/EvidenceDrawer.tsx`, `pages/evidence/Gallery.tsx`

31. **`EvidenceDetail.tsx:200` (with `Outbound`, lines 23 to 25), "How the wording was checked" followed by the
    record's `verifiedVia` printed as text.** `rulings`. Section 5 of `model.md`: "Do not print the field as text."
    The addresses carry the wiki's page names. 31 record pages print "freddy-fazbears-pizza.fandom.com/wiki/
    Henry_Emily", a book-only name; five print "Phone_Dude", three "Glitchtrap", two each "Tape_Girl" and
    "Burntrap", one "Tangle". Fix: print the link as "the wiki's transcript" or "source page", with the address
    only in `href`.
32. **`EvidenceDetail.tsx:185` and `EvidenceDrawer.tsx:33`, the label "In-universe time".** `reader`. On 119
    records, 111 of them Scott's statements, it reads "In-universe time: Out-of-universe statement (posted
    2019-09-29)" or the like. Replace the label with "When".
33. **`Gallery.tsx:180`, "screenshots of the moments the evidence rests on".** `overreach`. The gallery holds
    textures not seen in play, a picture the rulings say is not evidence (`fw-unused-open-box.png`), teasers
    from Scott's sites and three pictures of his earlier games. Replace: "images that the records carry, grouped by source: screenshots,
    documents from the games' files and a few pictures from outside the games."

### `pages/people/Places.tsx`

34. **Line 232, the section title "Who was here".** `overreach`, small. Its own lead says what the list is:
    "Everyone named in a record filed under this place". Being named in a record about a place is not being there,
    and some people are tagged on a record "only for theory linking" (the note of `fnaf1-news-kids-vanish`, of
    the purple man). Replace the title: "People in its records".

## The ten most serious

1. **Every record's date is given a kind it does not have** (interface 1). `RichText.tsx:194` turns a record's
   `precision` into "printed" or "estimated". 33 records, 32 read from textures and one from a staged prop, show as
   "Printed date", against R2, R24 and R27; 54 show as the archive's "estimate", among them 28 delivery days of 2019 and
   2020 and 25 uses of a year that R23 says dates nothing. It is on every card, drawer and record page.
2. **The definitions say the grades are firmer than they are** (interface 3, 4, 5, 6). "A strong inference is one
   that could only be rejected by assuming the games are wrong" (`Method.tsx:308`), "Forced by several records
   together" (`labels.ts:29`), and three confidence helps one notch above the theory's own key. A reader who
   trusts the key will take every medium-high ruling for a certainty.
3. **The Method page does not say whose rule the source rule is, and does not quote Scott on the books**
   (interface 7, 8). W1's sentence is missing from the page that exists to state it, and "Everything a player can
   reach" stands with none of Scott's rulings or the model's own rules beside it.
4. **"Wherever the dead are counted"** (home 1, community 4). The sentence round four withdrew is the argument on
   the home page's Golden Freddy answer, on its third card, and in two theory verdicts. One of its three examples
   now rests on a record that says "reported".
5. **Two verdict words are a grade too firm** (community 1 and 2, box 1). The page's only "Confirmed" rests on a
   machine transcript over two strong inferences, and "Mostly right" for the box rests on one transcribed answer
   that a later one takes back, for a point R25 puts at low-medium.
6. **The help for the date kind `teaser` is now false, and the other kinds lack the rule that matters**
   (interface 2, 11, 23). "Shown only in an official teaser, not in the game itself" prints beside 1979, which
   the same pill says is on a work order in the game's files. Nowhere does the interface say that a texture or a
   staged prop is never "printed", and the cover's own example calls "c. 1983" derived.
7. **A book-only name reaches the reader in three ways** (community 3, interface 26, 31): twice in a theory's
   name and claim, under an exception the file wrote for itself; in the address `/people#group-emily`; and as
   ".../wiki/Henry_Emily" printed on 31 record pages.
8. **Three sentences speak for Scott's beliefs** (author 1, 2, 3): "An author who believes in souls, judgement and
   rest", "The shape would suit Scott's stated beliefs", and a reading marked "Supported" that leans on his faith.
   His words on record are "I'm a Christian." and "I believe in God."
9. **The home page is a step firmer than its chapters in five places** (home 2, 4, 5, 6, 8): "that boy's
   bedroom", a first card marked canon over a "most likely", "what he fights is not what is there", "from Edwin
   Murray's workshop: the Mimic of the title", and "the rabbit left its plush". With home 3, "outside a
   restaurant", these are the sentences a visitor reads first.
10. **The interface's words for three ties** (interface 28, 29, 30, with 25 and 27): "is the partner of" for the
    Cassette Man and William Afton, "is the spouse of" for Edwin and Fiona Murray, "hunted" where round four
    found no record of a hunt; a group headed "Afton family" that holds the two boys; and "The games never give
    this name" on six entries a game names.

The unused open box (box 2) is not in the ten because the sentence is sound; only its citation token needs to go.

## Noticed outside the assignment

**Evidence records.**
- `scott-2015-fnaf4-box-pieces-put-together`, notes: "The paragraph before it". It is the same paragraph (box 5).
- `scott-2024-box-interview`, notes: "the three answers agree only that the box was never given a final content".
  The 2015 answer gives one (box 3).
- `fw-unused-open-box`: the title says "opened and empty" and the claim "The inside is dark and empty; no contents
  are drawn". By the rulings an entry of this kind "says what the item is, not which way it points". It also has
  an image in the gallery.
- `ruin-mimic-lair-mcm-mascot-suits`, notes: "The thing under the Pizzaplex keeps the wardrobe of Murray's costume
  shop: the firmest in-game tie". Round four makes that match the wiki's comparison; the claim was corrected and
  the note was not.
- `scott-2014-desolate-hope-human-life`, notes: "his last major pre-FNaF game". No source (author 6).
- `ucn-death-coin-fredbear`, title: "summons Fredbear". R16's corrected wording is "makes Fredbear attack the
  player".
- `ucn-nightmarionne-lines`: the `quote` is printed with the stutter, and every layer quotes the clean form that
  is in the `claim`.
- The `when` fields behind interface 1: 33 records have `precision: "exact"` for a date read from a texture or a
  staged prop; 28 Special Delivery records and 25 Into the Pit records carry `when.year` (2019, 2020, 1985), with
  labels such as "Special Delivery's present (c. 2019-2020)". The evidence explorer's "in-universe time" order
  sorts by those years, so Special Delivery's emails sort as the latest dated records in the story.
- Titles: "Scraptrap" stands in 7 record titles, "Burntrap" in 5 and "Glitchtrap" in 2, bare. Three titles print,
  as Scott's quoted words, the two names that `canon-rules` declines to print
  (`scott-2020-charlie-game-and-book-counterparts`, `scott-2020-cassidy-kazoo-names-from-lore`,
  `scott-2020-cassidy-screenplay-lore-from-games`); the first is listed on the Method page (interface 12).
- Tags: `scott-2024-movie-doug-canon` and `scott-2024-interview-into-the-pit-began-as-novelty` are tagged
  "novels".

**The theory and the other layers.**
- Chapter `ucn`, `answer`: "\"The one you should not have killed\" is a child the player killed, and he runs the
  night." R16 (3) as corrected: that he runs the night is the model's reading. The home page does not repeat it.
- Chapter `plush`, `answer`: "The model reads the plush as a toy spoken through". R5 grades it a lean
  (low-medium); the home page's "leans" is the better word.
- The chapter id `partners` puts the word the model withdrew into the address `/theory/partners` of the chapter
  that argues the games never use it, and into `community.ts` as `modelSection: "partners"`.
- `theory.ts`, `howToRead`: "in twenty beats" is hard-coded (20 today). It and `canon-rules` list what is left out
  without naming the Survival Logbook; R27 and the Method page name it.
- `dates.ts`, `t-daughter-killed`, basis: "the model's numbered order lists it before that week, and this
  timeline, like the storyline, tells it after". Round four swapped steps 6 and 7, so the numbered order now tells
  it after too.
- `people.ts`: `michael-afton` is marked `canon-name`, and its own alias says "Michael (the only name spoken)".
  The group key `emily` is a book-only name that reaches a page address (interface 26).
- `relations.ts`: the kind `partner-of` (the Cassette Man and William Afton); `spouse-of` for Edwin and Fiona
  Murray at `strong`, with the note "No record uses the word wife" (R21 as corrected: no record of a marriage);
  `hunted` for the rabbit-costumed woman and Gregory at `canon`, "She hunts him through the Pizzaplex: shown"
  (round four, step 26: no record of a hunt); `hunted` for Michael and his father on "I'm going to come find
  you."
- The old interface in the theory worktree, `$WT/src/pages/People.tsx:9` and `10`: "William Afton and his
  children" and "The partner and the daughter he lost".
