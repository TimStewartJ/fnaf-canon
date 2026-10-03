# Fact-check 7a: `people.ts`, lines 1 to 516

## What was checked, and against what

- **File.** `src/data/people.ts`, lines 1 to 516, in `~/src/fnaf-canon-wt/theory` (branch `ws/theory`).
  The file was last changed by commit `1ebaa6f` (02:47 on 3 October; sha1 `61318af3f5cd…`) and did not change
  while I worked. HEAD moved from `52e69ed` to `1430bc1` in that time. No commit touched `people.ts`,
  `relations.ts` or `deaths.ts`.
- **Entries.** The range holds **63** entries, not 64: `william-afton` to `spring-bonnie`, the entry just before
  `springtrap`. All 63 were read in full, field by field: `name`, `aliases`, `nameStatus`, `group`, `summary`,
  `status`, `firstAppearance`, `image`, `evidence` and `theory`.
- **Records.** The 63 entries cite 277 different records (358 inline citations, 294 ids in `evidence` lists, 8 ids
  in three date pills). All 277 were opened in the JSON and read with their notes, and about fifty others that a
  ruling or a sentence pointed to. Four evidence commits landed while I worked (`62b8392`, `55bda83`, `35726b2`,
  `9a36912`). They changed nine records, seven of which these entries cite. All seven were read again, and one
  finding (part of 1) exists because of such a change.
- **Rulings: round four landed during the check.** `rulings-brief.md` and `model.md` were rewritten at 04:03 with
  "Round four: wording corrected after fact-check". That is 76 minutes after these entries were written and after
  my first pass. I read the new brief in full, with `round4.md`, and checked all 63 entries against it a second
  time. No grade changed in round four, but a good deal of required wording did. Findings whose reference says
  "round four" are sentences that agreed with the rulings they were written to and do not agree with the rulings
  now.
- **Quotations.** A script compared all 202 phrases in quotation marks with the `quote` of the record cited beside
  them, then with its `claim`, `notes` and `title`. All but one are verbatim from a record, or are words that a
  record gives as the game's own. The exception is finding 22. One quoted word has its record uncited (finding 38).
- **Grades.** Every graded claim (about eighty parentheticals such as "medium, lower end") was compared with its
  ruling. Every grade that is printed matches. The `status` findings below are sentences that carry no grade
  where the ruling gives one.
- **Images.** All 33 portraits exist under `public/img/`, have a credit, and were looked at.
- **How fields are shown.** Read from `integ/src/pages/people/PersonDetail.tsx`, `People.tsx` and
  `components/palette.ts`. `summary`, `status` and `theory` are rich text. `status` sits under the fixed heading
  "What became of them" (or "it"). `nameStatus: "canon-name"` prints "A name the canon gives." A person's id is
  the page's address (`/people/<id>`).
- **Checks run.** `npx tsx scripts/validate.ts` passes. Every `[[id]]`, every id in an `evidence` list and in a
  date pill, every `{{entity}}` and every `((chapter))` resolves.
- **The wiki and Steam** were used only as transcript aids: the wiki's audio logs for two recordings of Edwin and
  Fiona Murray, its Phone Dude page for where that nickname comes from, Steam's news feed for the words of Scott's
  Character Guide of 2018, and the store page of Into the Pit for the boy's name. Findings that lean on them say so.
- **Corrections** are written as a reader would see them. Inside the file's double-quoted strings each `"` needs a
  backslash. No correction puts an apostrophe or a quotation mark inside a date pill.

## The checks the assignment named

| Check | Result |
|---|---|
| `name`: printed, spoken, or a plain descriptor; no book-only name | No book-only name anywhere in the 63 entries. One name joins a spoken first name to an inferred surname and is marked as the canon's (finding 16). One keeps a capital "The" (41). Seven names marked as the canon's are carried by no record's quote, though the records' claims use them (see "Noticed outside"). |
| `aliases`: is the stated provenance true | 42 aliases. Every stated source checks out: "Arnie" is on the work order, "that rabbit lady" and "that thing in the sinkhole" are Gregory's words, "QA" is the credit, "Purple Guy" is FNaF World's word and Scott's. "Phone Dude (a fan name)" has no record behind it; the wiki confirms that it is a community nickname. Three aliases carry a reading of the model without saying so (18, 28). "Sun" and "Moon" state no source (46). |
| Tier-2 and tier-3 labels | Clean in what a reader sees. "Tape Girl" and "Phone Dude" appear only as aliases marked "(a fan name)"; "the Mimic" only as a marked alias; "Scraptrap" only inside Scott's own words. The fan labels survive in ids, which are page addresses (42). |
| `summary`: every sentence against its record, every quotation verbatim | Mostly sound. Fifteen places say more than the record or the ruling allows, most by a word or two (4, 6, 8, 12 to 15, 29 to 36). One misquote (22). |
| `status`: no year after 1987 | Clean. The only years in displayed text are 1979, 1983, the bracket 1980 to 1986, and 1987. Special Delivery's dates are called delivery days. |
| The dead and the not-shown-dead | Clean for the three the assignment names. Edwin Murray: "his fate is not shown". The tester Jeremy: "A grave self-injury is implied. His fate is not stated." Phone Guy: "That is implied, not stated". David Murray's death is "implied, not stated" in his own entry and is told as fact in two others (3). |
| `firstAppearance` | 62 right. One rests on a medium-high identification (18). |
| `image` | All exist and are credited. Two show something other than the person (23, 24). |
| `evidence` lists | Every record concerns its person, directly or through an identification the model holds. The strongest record is missing from two lists (20, 37). |
| R1 | The `theory` field of `william-afton` has it right but for one phrase (34): five links, one stated, the join by the ghosts and the tape. His `summary` tells two of the inferred links flat (4). |
| R2 | No "partner", "founder", "owner" or "builder" as fact. "Old friend" and "calls the machines his own making" are used. Hen is low and takes no pronoun, and the model "unifies Hen with nobody". Hen's change order is misdescribed in two entries (12). The prototypes are named without their file labels (15). |
| R3, R6 | Argued from the Private Room, at "medium, lower end", without Ultimate Custom Night. The crying child is unplaced after the bite, not in Golden Freddy and not the accuser. One sentence tells inferred items as shown (6); one tells his death flat (26). |
| R7, R8 | The daughter and the Puppet at medium-high; "the building", never a restaurant; the caught man open and not told as Afton; Golden Freddy split into pattern and identification. The universal that round four withdrew is in two entries (1). June 26 is given to all five (2). The caught man has no entry (17). |
| R13 | Son and technician high, older brother medium at its lower end, franchisee medium, Mike Schmidt "not established" and not used. The volunteer "would rather stay", which round four withdrew (8). |
| R16 | The lean is told only in `ucn-protagonist`, as a lean, with the Michael reading beside it. Nothing identifies the player or the accuser. Two sentences that round four mended are still in the accuser's entry (11). |
| R18, R19, R22 | The tape speaker, Vanessa, Ness, Gregory and the technician follow their rulings. Open points: the tapes called an "intrusion" (21), the technician urged on by the endoskeleton's voice (9), a hunt with no record (13), Ness's contact told flat (19). |
| R21 | Two machines, high; M2's rage medium-high; "not shown" for the years between; Edwin's fate not shown. "Wife", "after his son's death" and "the wardrobe of Murray's costume shop" are against the ruling's wording now (3, 14). The earlier bodies are called technicians (10). |
| R25 | Phone Guy and the gravestones are graded as ruled. |
| R33 | Never "survived", "back" or "burned, not ended". The fire is what "that game presents as his end". The later things are kept apart: "The model does not tell these as one history". |

Problem types used below: `unsupported`, `overreach`, `wrong record`, `uncited`, `misquote`, `status`, `rulings`,
`dates`, `consistency`, `missing`, `reader`. There is no `no record` finding in this file.

---

## `src/data/people.ts`, lines 1 to 516

**Verdict: minor fixes.** The rewrite did what the rulings of its hour asked: no book name, no year after 1987,
no banned word as fact, every printed grade right, 201 of 202 quotations exact. No entry needs rewriting. There
are 47 findings, and each is mended by a sentence or two. Twelve of them come wholly or partly from round four.

### Findings, most serious first

**1. `missing-children` · `theory` · "Wherever the dead are counted there are four and one: four masks and a fifth
body"; `fifth-child` · `theory` · "Wherever the dead children are counted there are four and one, and the one is
marked by the yellow bear"; `fifth-child` · `summary` · "a fifth body shows for one frame"** `rulings` (R8,
wording, round four; `fnaf2-save-them`, `fnaf2-foxy-go-go-go`, `fnaf3-good-ending-heads`,
`fnaf2-give-gifts-give-life`). R8 now reads: "Not 'wherever the dead are counted': SAVE THEM and Foxy Go! Go! Go!
show five alike, and the fifth body in Give Gifts, Give Life is the wiki's report." The ruling's own count is seven
scenes, with the yellow bear marking the one more in four of them. The Give Gifts record was corrected at 03:04
(`62b8392`) to "A fifth body is reported to show", with the note "no capture is on file here, so the archive
tells it as reported". Fixes:

```text
missing-children, theory (in place of "Wherever the dead ... (see {{fifth-child}})."):
In seven counts of the dead there are four and one more: among them four masks and a fifth body reported for a single frame, four machines and five ghosts, four named gravestones and a fifth hidden in the grass [[ffps-lorekeeper-gravestones]]. In four of the seven the one more is marked by the yellow bear (see {{fifth-child}}). The pattern is not everywhere: two of FNaF2's minigames show five dead children alike [[fnaf2-save-them]] [[fnaf2-foxy-go-go-go]], and one end screen of FNaF3 shows four heads and no fifth [[fnaf3-good-ending-heads]].

fifth-child, theory (first sentence):
In seven counts of the dead there are four and one more, and in four of the seven the one more is marked by the yellow bear (medium-high for the pattern). In the other three the fifth is there and is not marked; two more scenes show five children alike [[fnaf2-save-them]] [[fnaf2-foxy-go-go-go]], and one screen shows four heads and no fifth [[fnaf3-good-ending-heads]].

fifth-child, summary:
In Give Gifts, Give Life four children receive heads, and a fifth body is reported to show for one frame before Golden Freddy's jumpscare [[fnaf2-give-gifts-give-life]].
```

**2. `missing-children` · `status` · "Lured on [a June 26 between 1980 and 1986]"** `dates` (R8, wording; dating
table, row 13; `fnaf1-news-kids-vanish`, `fnaf1-news-five-children`). The line gives the date to the five. R8:
"June 26 is two children's date: 'five were linked to the incident'." Row 13: "day and month printed, for two
children; that all five were taken that night is not stated". The pill's own basis says "two children"; the
sentence round it does not. This line is also what the People list prints beside the entry. The basis says "On
the night of 1979", which a visitor cannot place, and gives the floor without R8's caution that it "rests on
prototypes the files label, so it is soft". Fix (the same pill, a new sentence, the end of the basis changed):

```text
Two children were reported lured on the night of <<a June 26 between 1980 and 1986|estimated|fnaf1-news-kids-vanish,fnaf2-call1-new-location,fnaf2-overtime-robots-scrapped,secret-of-the-mimic-rnd-proto-pizzeria|June 26th is printed in a clipping with no year, for the night two children were lured. The old restaurant traded on, closed and was left to rot for quite a while before the 1987 restaurant opened, so the latest June 26 is that of 1986. On the night Secret of the Mimic is set, in 1979, the four mascots are still unfinished prototypes, so the earliest is that of 1980. That floor is soft: the prototypes are named only by file labels.>>, and five were later linked to the incident. No bodies were found. Four of the five most likely stay on in Freddy, Bonnie, Chica and Foxy until the killer takes those machines apart. Where the five are after that is not shown.
```

**3. `edwin-murray` · `theory` · "M1, the babysitter that took his dead wife's voice, and M2, a copy of M1's
program built after his son's death"; `edwin-murray` · `summary` · "After the boy's death, and at M1's urging";
`f10-n4` · `theory` · "took his dead wife's voice"; `the-mimic` · `theory` · "M2 was built after the death of
Murray's son"** `rulings` (R21, round four; `secret-of-the-mimic-log-death`,
`secret-of-the-mimic-log-try-again-build-another`, `secret-of-the-mimic-mail-party-canceled`). R21's wording now
has: "No 'wife': the records call Fiona David's mother." No Secret of the Mimic record has the word, and
`round4.md` asks for a record "before any chapter writes it". The ruling also now says that M2 was "built after M1
told him 'Build another' and, as the model reads it, after his son's death (implied, never stated)". The file
already knows both points: `fiona-murray` calls her "the mother of his son David", and `david-murray` says "That
is implied, not stated". Fixes:

```text
edwin-murray, theory (first sentence):
He built two machines (high): M1, the babysitter that took the voice of Fiona, his son's dead mother, and M2, a copy of M1's program, built after M1 told him "Build another" [[secret-of-the-mimic-log-try-again-build-another]] and, as the model reads it, after his son's death, which the records imply and never state.

edwin-murray, summary (one sentence):
At M1's urging he builds a second machine, M2 [[secret-of-the-mimic-log-try-again-build-another]]; the records imply, and never state, that his son had died by then.

f10-n4, theory (first sentence):
The model reads this cabinet as M1, the first of Murray's two machines (high): the babysitter that took the voice of Fiona, the dead mother of Murray's son, with M2 a copy of its program.

the-mimic, theory (one sentence):
M2 is a copy of the program of M1, the babysitter, built after M1 told Murray to build another and, as the model reads it, after the death of Murray's son, which is implied and never stated. Its rage most likely copies Murray's own (medium-high).
```

**4. `william-afton` · `summary` · "A designer of performing machines. A board member addresses him as …" and "A
man who names himself Michael addresses him as "Father""; `status` · "He dies in the yellow rabbit suit, comes back
in it as Springtrap"** `overreach` (R1; `sl-intro-mr-afton-board`, `sl-golden-freddy-cutscene-father`). The file's
header says that the summary "sticks to what the evidence says". This one joins the designer "Mr. Afton", the
credits' "William Afton" and Michael's "Father" as one "him", with no marker. R1 has one stated link, the credit;
the designer and the father are link (d), strong. The second record's note: "The father is never named here." The
`theory` field says all this well, but the summary is what a visitor reads first. In `status` the marker "(a
strong inference)" sits on the first sentence only. Fixes:

```text
summary:
The name that Pizzeria Simulator's credits give to the voice of the rabbit salvaged in that game [[ffps-credits-william-afton]]. Ultimate Custom Night's roster calls that figure "Afton" [[ucn-roster-afton]], and Scott's guide to that game calls it "William Afton (AKA Scraptrap)" [[scott-ucn-character-guide-afton]]. Other records carry the surname, or the tie, without the first name. In Sister Location a board member addresses the designer of Circus Baby as "Mr. Afton" [[sl-intro-mr-afton-board]], and the name Afton Robotics LLC is on the map of the underground facility where that machine is kept [[sl-extras-map-entertainment-and-rental]]. And a man who names himself Michael addresses a "Father" whom he does not name [[sl-golden-freddy-cutscene-father]]. That the rabbit, the designer and the father are one man is a strong inference: only the credit is stated.

status:
The killer of the minigames, who dies in the yellow rabbit suit and comes back in it as Springtrap (a strong inference). He burns in Pizzeria Simulator's fire, which that game presents as his end. No game after Ultimate Custom Night names him.
```

**5. `cassette-man` · `status` · "Stays in the building as it burns."** `rulings` (R28;
`ffps-completion-remaining-nearby`). R28's required sentence is "stays as it burns", and its list of banned
wording has "with him inside". `model.md` says why: his words are "I am remaining as well. I am nearby", and
"'inside' was the first version's reading of 'remaining'". "In the building" puts him inside again. The
storyline and the relation note both have "stays". Fix:

```text
Stays as the building burns: "I am remaining as well. I am nearby." [[ffps-completion-remaining-nearby]] The game does not show who lights the fire.
```

**6. `crying-child` · `theory` · "because rooms of his house are on the monitors of Afton's facility, with his
plush on the desk"** `overreach` (R3, shown and inferred; `sl-private-room-monitor-bedroom`,
`sl-private-room-fredbear-plush`). Three inferred things are given as the shown ground for a reading. The
monitors show "the bedroom in which FNaF4's nights are played"; that it and the minigames' house are one home is
"the usual reading, not something either game states". The plush is "the same design"; whether it is the same
object "is not stated". And R3 asks for the time, which is Sister Location's. Fix:

```text
The model reads him as a younger son of William Afton whom no game names (medium, lower end). What is shown is in Sister Location's time: rooms of FNaF4's nights are on the monitors of Afton's facility, and a Fredbear plush of the same design sits on the desk [[sl-private-room-monitor-bedroom]] [[sl-private-room-fredbear-plush]]. That those rooms are his own home, and that plush his own, is the reading (see ((afton-house))).
```

**7. `fazbear-entertainment` · `status` · "In business in every era the games show, under the same name.";
`theory` · "one continuous actor" and "each admission comes wrapped in a denial"** `rulings` (R31, round four;
`ffps-completion-tutorial-atonement`, `fnaf3-coming-soon-newspaper`). R31 now reads: "behaves as one actor in
every game that shows it", and "The record is not unbroken: Fazbear's Fright is a local amusement park's and not
the company's, and between FNaF1's restaurant and Pizzeria Simulator no act of the company is on record." Its
wording has "'A denial or a disclaimer', not 'wrapped in a denial'". The entry's own summary has the game's
guide saying that the company is no longer a corporate entity, which R31 lists against itself. No record of Security
Breach, RUIN or Help Wanted 2 has the words "Fazbear Entertainment", so "under the same name" has no record for
that era. Fixes:

```text
status:
Named in records of the night of 1979, of 1987, of FNaF1's week, of Pizzeria Simulator, of Help Wanted and of Special Delivery, though not without a break: between FNaF1's restaurant and Pizzeria Simulator no act of the company is on record. After Pizzeria Simulator's fire its own guide says it is no longer a corporate entity [[ffps-completion-tutorial-atonement]], and a company of the same name is trading in Help Wanted and Special Delivery [[hw-tape-13-fe-hired-developer]] [[sd-fe-legal-halt-vintage-hardware]]. That those come after the fire is the model's own ordering; whether the ownership changed is not recorded.

theory (first two sentences):
The model reads the company as behaving as one actor in every game that shows it (high for the pattern, from 1987 on). Nearly every explanation it gives is a denial or a programming quirk, each concession comes with a denial or a disclaimer beside it, and it sells its history and scans old circuit boards twice. The record is not unbroken: Fazbear's Fright belongs to a local amusement park and not to the company [[fnaf3-coming-soon-newspaper]], and between FNaF1's restaurant and Pizzeria Simulator no act of the company is on record.
```

**8. `michael-afton` · `theory` · "the volunteer who would rather stay than take the way out planned for him";
`ffps-franchisee` · `theory` · "the volunteer himself, who would rather stay in the fire than take the way out"**
`overreach` (R13, wording, round four; `ffps-completion-right-where-you-want-to-be`). The record is a guess by the
Cassette Man: "I have a feeling that you are right where you want to be." R13 now says to lead with "the
volunteer who, the Cassette Man guesses ('I have a feeling'), is right where he wants to be", and adds "the game
does not show whether he leaves". The franchisee's own `status` says so: "The game does not show whether the
volunteer leaves." His `theory` then tells him staying in the fire. Fixes:

```text
michael-afton, theory (one sentence):
He is most likely the franchisee of Pizzeria Simulator (medium): the volunteer who, the Cassette Man guesses, is right where he wants to be [[ffps-completion-right-where-you-want-to-be]] (see {{ffps-franchisee}}).

ffps-franchisee, theory (second sentence):
The best support is the Cassette Man's own guess about the volunteer, "I have a feeling that you are right where you want to be" [[ffps-completion-right-where-you-want-to-be]], set beside Michael's last words, "I'm going to come find you" [[sl-golden-freddy-cutscene-come-find-you]]. The game does not show whether the volunteer stays.
```

**9. `hw2-protagonist` · `theory` · "urged on by the copying endoskeleton's voice and not by the rabbit in the
code"; `vanny` · `theory` · "reads the technician and Cassie as used by the copying endoskeleton's voice";
`cassie` · `theory` · "as Help Wanted 2's technician is"** `status` (R21 points 5 and 6; R22, "The gift";
`hw2-hub-helpi-pushes-gift`, `ruin-mimic-reveal`). The three entries follow R19 point 3, which hands the matter to
R21. For Cassie it is shown. For the technician it is not: what the game shows is a cartoon bear on the hub's
screen pressing the player to open a gift, and R22 says the technician "is urged by the mask's cartoon assistant".
That the endoskeleton is behind it is R21 (6): "medium that a bridge is intended; low for the model's reading of
it". That it is "not the rabbit in the code" is the question R21 (5) holds at low-medium. In `hw2-protagonist` the
clause follows "(medium)" and reads as part of it. Fixes:

```text
hw2-protagonist, theory:
The model reads the technician as one in a succession of mask wearers (medium). What the game shows is a cartoon bear on the hub's screen pressing the technician to open a gift: "Why are you ignoring the gift?" [[hw2-hub-helpi-pushes-gift]] That the voice behind it is the copying endoskeleton's, and not the rabbit in the code's, is the model's guess (low). That this is the father whom Cassie mentions in RUIN is low [[ruin-cassie-dad-faz-wrench]]. The game prints no name for the mask: it is the design that RUIN calls the Security Mask. See ((vanny)) and ((mimic)).

vanny, theory (one sentence):
The model reads that as a succession of wearers (medium), never two at once. Cassie is used by the copying endoskeleton's voice, which RUIN shows [[ruin-mimic-reveal]]; that the technician was too is the model's guess (low).

cassie, theory:
The voice that leads her down is the copying endoskeleton's: RUIN shows it when the wall comes down [[ruin-mimic-reveal]]. That the same voice was already at work on Help Wanted 2's technician is the model's guess (low; see ((mimic))). That the technician is the father she mentions is low [[ruin-cassie-dad-faz-wrench]] (see {{hw2-protagonist}}).
```

**10. `arnold` · `summary` · "Inside he finds the bodies of earlier technicians in character suits"** `rulings`
(R31, "What 1979 shows and what it does not"; R21, wording; `secret-of-the-mimic-previous-technicians`).
`model.md`, R31: "Bodies of earlier visitors are in mascot costumes … That they were technicians Fazbear had sent … is said by
the machine that imitates the dispatcher." `deaths.ts` says "Earlier visitors". This entry's own `theory` has the
caution ("by the account of the voice in the building"); its summary does not. A second, smaller point in the
same summary: the work order's date is given with no word that it was "read from an image of the document and is
not yet confirmed in play", which R24 asks for and the status line two lines below has. Fixes:

```text
Inside he finds bodies in character suits; the voice on the radio says that the previous technicians died of blood loss [[secret-of-the-mimic-previous-technicians]].

and, after [[secret-of-the-mimic-work-order-1979]] in the sentence before it:
(read from an image of the document; not yet confirmed in play)
```

**11. `one-you-should-not-have-killed` · `theory` · "and he remade the Nightmares"; "the Death Coin that turns
Golden Freddy into Fredbear"** `rulings` (R16, wording, round four; `ucn-nightmare-freddy-toysnhk`,
`ucn-death-coin-fredbear`). R16 now has: "Not 'he remade the Nightmares': one Nightmare says so of itself", and
"The Death Coin used on Golden Freddy 'makes Fredbear attack the player'; no text explains it." The second
record's note: "no text explains why". Fixes:

```text
first sentence:
He is male, the game gives him a small child's face, the player killed him, and one Nightmare says it was remade by him [[ucn-nightmare-freddy-toysnhk]].

the sentence on the alternative:
Two of the game's own links run toward the alternative: that Nightmare, and the Death Coin, which makes Fredbear attack the player when it is used on Golden Freddy, and which no text explains [[ucn-death-coin-fredbear]].
```

**12. `cassette-man` · `theory` · "a client called "Hen" who orders changes to the springlock suits"; `hen` ·
`theory` · "Hen orders changes to the suits"** `unsupported` (`secret-of-the-mimic-log-build-to-spec`). The record
does not say what the change order changes. Edwin asks "Why change it now?" and says it would be easier "to keep
using the Springlocks", so the order, if anything, leads away from them: `model.md` (R21) calls it "Hen's change
order away from worn suits". `edwin-murray` has it right. Fixes:

```text
cassette-man, theory:
Secret of the Mimic has a client called "Hen" who sends Edwin Murray a change order; Murray answers that it would be easier "to keep using the Springlocks" [[secret-of-the-mimic-log-build-to-spec]].

hen, theory (first sentence):
Hen sends Murray a change order, and the Cassette Man calls the machines "prisons of my making" [[ffps-insanity-small-souls-prisons]].
```

**13. `vanny` · `summary` · "The woman in a rabbit costume who hunts Gregory through the Pizzaplex."**
`unsupported` (order of events, step 26, round four). Step 26 was changed from "hunts him" to "walks the
building", with the reason "no record of a hunt". The Security Breach records have her dancing in front of
Gregory, keeping a hideout, saying "Are you having fun yet?", looming over him in one ending and catching him on
the roof in another. Fix:

```text
The woman in a rabbit costume who walks the Pizzaplex on the night of Security Breach.
```

**14. `the-mimic` · `theory` · "Its chamber keeps the wardrobe of Murray's costume shop"** `overreach` (R21,
wording, round four; `ruin-mimic-lair-mcm-mascot-suits`). R21: "Its room holds 'worn mascot costumes', which the
wiki matches to Murray's (not 'shown')." The entry's summary has "worn mascot costumes"; its theory tells the match
as fact. Fix:

```text
Its chamber holds worn mascot costumes that the wiki matches to those of Murray's costume shop [[ruin-mimic-lair-mcm-mascot-suits]], and the guard on it is called M.X.E.S., letters that are spelled out on a terminal in Murray's house [[secret-of-the-mimic-mxes-acronym-on-screen]].
```

**15. `spring-bonnie` · `summary` · "Unfinished prototypes of a Fredbear and a Spring Bonnie stand in Murray's
building"** `overreach` (R2, wording; `secret-of-the-mimic-rnd-proto-pizzeria`). The record: "The 'Proto
[Character]' labels come from game files". R2's wording is "prototypes the game's files label Fredbear and Spring
Bonnie". A file label is not a name the game prints. Fix:

```text
Two unfinished prototypes that the game's files label Fredbear and Spring Bonnie stand in a mock-up pizzeria in Murray's building on the night of Secret of the Mimic [[secret-of-the-mimic-rnd-proto-pizzeria]].
```

**16. `michael-afton` · `name` and `nameStatus` · "Michael Afton", `canon-name`** `rulings` (R26, tier 1: "Michael |
`sl-golden-freddy-cutscene-father`"). The words "Michael Afton" are in no record: not in a quote, a claim, a note
or a title. The record's note says "'Afton' surname is inferred", and the entry says "Only the first name is
spoken". The page then prints "A name the canon gives." under a name the canon does not give, and
`{{michael-afton}}` prints it in every layer. R26 objected to exactly this in `the-mimic`, whose old name "puts
R21 (2)'s medium-high identification into a name". The entry beside this one was given the bare name "Elizabeth".
"Fiona Murray" and "David Murray" are built the same way and are in no record's quote either, but R26's table
lists them. Fix:

```text
name: "Michael",
aliases: ["Michael Afton (the surname is inferred: no game prints or speaks it with his name)"],
nameStatus: "canon-name",
```

**17. No entry for the man caught the next morning.** `missing` (R8 point 6: "Who the caught man was is open";
wording: "never tell him as Afton"; `fnaf1-news-suspect-captured`, `fnaf1-news-charged-vs-convicted`). The model
now holds him apart from the killer, and the layers have nowhere to put him. Both records are tagged `purple-guy`
("only for theory linking", their notes say), so a person's page files the arrest under the purple man, and
William Afton's page shows it under "Filed under the purple man". An entry to paste, with the two records
retagged to it:

```text
{
  id: "caught-man", name: "the man caught the next morning", aliases: [], nameStatus: "descriptor", group: "other",
  summary: "A clipping in FNaF1 says that video surveillance identified the man who lured two children and \"led to his capture the following morning\" [[fnaf1-news-suspect-captured]]. A second clipping is headed \"Suspect convicted.\", and its text says only that the suspect \"has been charged\" [[fnaf1-news-five-children]] [[fnaf1-news-charged-vs-convicted]]. He is not named or described, and no later game mentions an arrest.",
  status: "Charged. Nothing more is recorded.",
  firstAppearance: "fnaf1",
  evidence: ["fnaf1-news-suspect-captured", "fnaf1-news-charged-vs-convicted", "fnaf1-news-five-children"],
  theory: "Who he was is open: the killer, charged and then free because no bodies were found, or the wrong man (low for either). The model does not say that he was William Afton. See ((murders)).",
},
```

**18. `cassette-mans-daughter` · `status` · "Killed."; `firstAppearance` · `"fnaf2"`; `aliases` · "the child
outside", "the Puppet's child"** `status` (R7; order of events, step 7). Her father's words are "shut out and left
to die". "Killed", the first appearance in FNaF2 and both aliases come from Take Cake and the Security Puppet
game, and that the three scenes are one child is medium-high. Only the `theory` field grades it. `william-afton`
is treated the other way: his first appearance is the game that says "Afton", not the game where the purple
figure first appears. Fixes:

```text
status:
Shut out and left to die, in her father's words [[ffps-completion-shut-out]]. She is most likely the child killed outside in Take Cake (medium-high), and most likely stays on in the Puppet. The place and the year are unknown.

firstAppearance: "ffps",

aliases: ["the child outside (the child of FNaF2's Take Cake, most likely her)", "the Puppet's child (the child of the Security Puppet game, most likely her)"],
```

**19. `ness` · `theory` · "By the order in which the emails are delivered, her change comes through the virtual
reality game and not through the contractor's virus"; "Four things join her to Vanessa: the name, …"**
`overreach` (R19, records for point 2, round four; `sd-ness-blood-eagle-calendar`, `sd-circuit-board-scan-virus`,
`security-breach-cd-vanessa-transfer`). Round four: "Was: 'Ness is already changed before the scan'. Now: only
her first email precedes the scan." `model.md` adds that the delivery order is "itself a convention", and that
"the masks, the 'compliance' searches and the voices come after it". The entry tells the conclusion flat. Its four
links are also not the model's four, which are a Luis, the purchases, the voices with a watcher, and a later
transfer; the entry counts the name and leaves out the transfer. Fix:

```text
Apart from the name, four things join her to Vanessa: a Luis on both sides [[security-breach-cd-vanessa-encrypted-conversation]], the masks beside the fake fur, voices at her screen beside a watcher who "would always be watching" [[security-breach-cd-vanessa-costume-fur]], and Vanessa's coming transfer to another location [[security-breach-cd-vanessa-transfer]]. Neither game says it. Only the first of the emails about her is delivered before the contractor's scan goes wrong [[sd-circuit-board-scan-virus]]; the searches about compliance, the masks and the voices come after it. On that one email, and on a delivery order that is itself the model's own, the model reads her contact as coming through the virtual reality game and not through the contractor's virus. See ((vanny)) and ((digital)).
```

**20. `client-46` · `summary` and `evidence` · the talk-back programs are missing** `missing` (R22: "Whoever client
46 is, one recording matters"; `security-breach-cd46-talking-programs`). R18 and R21 cite that record "without
any condition", and the client's own entry leaves it out. Add the record to `evidence`, and add to the summary,
before the sentence about the security still:

```text
A therapist says the client has "developed software programs that talk to you and repeat phrases", and that in the latest logs someone else seems to be responding [[security-breach-cd46-talking-programs]].
```

**21. `tape-girl` · `theory` · "as an intrusion into a company product"** `rulings` (R27, three layers). R27 files
the tapes under the frame: "the frame (tapes, emails, the hidden call, the mask off, the endings) is story", and
`model.md` has "the tapes, which are frame". Intrusions are a different layer. Both carry story weight, so
nothing changes but the word. Fix:

```text
The model reads her tapes as part of the frame around a company product, which is story, and not as the company's staging (see ((canon-rules))).
```

**22. `fiona-murray` · `summary` · "With "a terrible feeling""** `misquote`
(`secret-of-the-mimic-log-installation-worries`). The phrase is not in the record's `quote`; it paraphrases the
`claim`. The wiki's transcript of the log has "I just have this terrible feeling like I need to be there so
nothing goes wrong". Fix: drop the quotation marks, or add that sentence to the record and quote "this terrible
feeling".

```text
She tells Edwin that she has a terrible feeling, and leaves for a few days to help the Fall Fest crew finish an installation [[secret-of-the-mimic-log-installation-worries]].
```

**23. `purple-guy` · `image` · `fnaf2-take-cake-to-the-children.png`** `consistency` (image). The picture shows the
party room, the child outside and the purple car. The purple man is not in it. An image that shows him is in
`public/img` with a credit, and belongs to a record in this entry's list (`fnaf3-n5-ghosts-safe-room`). Fix:

```text
image: "fnaf3-safe-room-purple-guy.jpg",
```

**24. `david-murray` · `image` · `sotm-m1-birthday-cake-film-reel.jpg`** `consistency` (image). The portrait at the
top of the boy's page is the first machine holding his cake. David is not in the picture, and no image on file
shows him. Fix: remove `image` from this entry. A lesser case of the same kind: the portrait of `elizabeth-afton`
(`sl-baby-minigame-claw.png`) shows Circus Baby and the claw, not the girl. The other portraits of people who are
never shown (a certificate, a cheque, a work order, a tape room) cannot be taken for the person.

**25. `vanny` · `theory` · "What moves her is the rabbit in the code"** `status` (R19 point 1: "under the control of
what writes to her", medium-high). Told flat. Fix:

```text
What moves her is most likely the rabbit in the code (medium-high), through a voice the player never hears (see {{glitchtrap}} and {{hw-mask-voice}}).
```

**26. `older-brother` · `theory` · "The bitten boy dies, and the brother lives."** `status` (R6: medium-high,
implied). `crying-child` has "most likely". Fix:

```text
The bitten boy most likely dies (medium-high), and the brother lives.
```

**27. `spring-bonnie` · `status` · "With his body inside it, it is Springtrap."** `status` (R1 link (a), strong;
`fnaf3-n5-springlock-death`: "The game never states that this body is Springtrap"). Fix:

```text
The suit the killer dies in. That it is Springtrap, with his body inside, is a strong inference: no game says whose body is in the suit that Fazbear's Fright finds.
```

**28. `f10-n4` · `aliases` · "M1 (Edwin Murray's name for his first machine)"** `status` (R21 point 1, round four:
"That the cabinet F10-N4 is M1's mind is the model's reading, joined from four records"). The alias states the
identification as a second name. Fix:

```text
"M1 (Edwin Murray's name for his first machine, which the model reads this cabinet to be)"
```

**29. `mike-schmidt` · `theory` · "The games tie him to Michael Afton by a shared first name"; `status` · "Finishes
the week and is dismissed."** `overreach` (R13; `fnaf1-custom-night-pink-slip`). No game ties them, and the names
are not the same: the cheques say "Mike", the cutscene "Michael". R13 (round four): the slip "shows no name: it is
Mike Schmidt's only as the seventh night after his cheques". The summary says so; the status does not. Fixes:

```text
theory:
All that points from him to Michael Afton is a first name that Michael could shorten to, and the word "Odor" on the unnamed notice, which Fritz Smith's slip gives too [[fnaf2-pink-slip-fritz-smith]]. That is not enough: the identification is not established, and the model does not use it (low).

status:
Paid for the fifth and sixth nights. The notice that follows the seventh night fires the guard and prints no name.
```

**30. `jeremy-hw` · `summary` · "It was he who first reported the figure"; "reads "Remember Jeremy.""** `overreach`
(`hw-tape-05`, `hw-game-over-remember-jeremy`). The tape does not say "first". The second record's note: "Which
Jeremy is meant is not specified"; `victim-jeremy` says as much of the other "Remember Jeremy?". Fixes:

```text
By the tape speaker's account it was he who said that the figure had started to appear: "he started appearing. At least, that's what Jeremy said." [[hw-tape-05]]

One of the messages on the Game Over room's television reads "Remember Jeremy."; which Jeremy it means is not said [[hw-game-over-remember-jeremy]].
```

**31. `missing-children` · `summary` · "Afterwards parents reported a foul smell from the mascots"** `overreach`
(`fnaf1-news-sanitation`, `fnaf1-news-suspect-captured`). The clipping does not say who reported the odour; the
parents noticed the blood and mucus. And "The game shows the four clippings at random and gives them no order".
Fix:

```text
Another clipping has the restaurant threatened again with closure over a foul odour from the mascots, and says that police were called when parents noticed what looked like blood and mucus round the mascots' eyes and mouths [[fnaf1-news-sanitation]].
```

**32. `michael-afton` · `summary` · "He says the machines took him for his father"** `overreach`
(`sl-golden-freddy-cutscene-they-thought-i-was-you`). The line says "they" and names nobody. That "they" are the
machines is the record's own inference: "It implies the machines knew the father by sight." Fix (the first
clause of the sentence):

```text
He says that "they" did not recognise him at first, and then thought he was his father [[sl-golden-freddy-cutscene-they-thought-i-was-you]]
```

**33. `glamrock-freddy` · `theory` · "and that is all any character says of it"** `overreach`
(`security-breach-gregory-what-is-that-thing`). Gregory answers him. Fix:

```text
Who "she" is, the game does not say. Freddy calls the burnt rabbit under the Pizzaplex "he", and Gregory only asks "He? What is that thing?" [[security-breach-gregory-what-is-that-thing]]: no character says what it is (see ((burntrap))).
```

**34. `william-afton` · `theory` · "finds a rabbit suit with a body in it"** `overreach` (R1 (a), round four: "with
what looks like a body inside it"; `fnaf3-springtrap-corpse-screens`: "what looks like a decayed human body").
Fix: "finds a rabbit suit with what looks like a body in it".

**35. `bite-victim` · `summary` · "That is the only description of the event in the games"** `overreach`
(`fnaf2-no-bite-mention`: "The only explicit Bite reference in FNaF1-3"). The record's sweep covers three games.
Fix:

```text
That is the only explicit reference to the event in the first three games: no FNaF2 call mentions a bite [[fnaf2-no-bite-mention]].
```

**36. `handunit` · `summary` and `status` · "The recorded guide", "A recorded guide, not a person."; `tutorial-unit`
· `status` · the same** `unsupported` (`sl-eggs-benedict`). No record calls either voice a recording, and HandUnit
answers what the technician types: "I see what you were trying to type, and I will autocorrect it for you." Fix:
"automated guide" in all three places.

**37. `phone-guy` · `theory` and `evidence` · `[[fnaf2-call6-birthday-day-shift]]` for "he will probably take the
night shift himself"** `wrong record`. The sentence is in that record's claim, but the words are in a record of
their own, the first that `model.md` lists for this ruling (R25): `fnaf2-call6-night-shift-myself`, "when the place
eventually opens again I'll probably take the night shift myself". Fix: cite it there and add it to `evidence`.

**38. Six sentences with a record to hand and no citation.** `uncited`.

```text
fruity-maze-girl, theory, after "speaks in Ultimate Custom Night":   [[ucn-withered-chica-toysnhk]]
cassie, theory, "the father she mentions":                           [[ruin-cassie-dad-faz-wrench]]
roxanne-wolf, status:                                                [[ruin-ending-standard]]
phone-guy, status, after "garbled voices":                           [[fnaf1-call4-phone-guy-attacked]] [[fnaf1-call5-garbled]]

michael-afton, status (it also tells the identification flat):
Alive, by his own account: "I should be dead. But I'm not." [[sl-golden-freddy-cutscene-come-find-you]] The model reads him as the technician whose body was scooped and worn (high) [[sl-real-ending-scooped-mirror]]. He is last heard saying that he will come to find his father.

vanny, theory, last sentence (R19, round four, names the record):
The scene does not show who it is, and in the next game a rabbit's shadow still stands beside her name on the hideout wall, seen through the mask [[ruin-vanny-hideout-glitchtrap-shadow]] (recorded from the wiki's summary of the scene).
```

**39. `fifth-child` · `summary` · "No scene gives this child a mascot."** `consistency`. Two sentences later the
same summary has the child in "a golden Freddy mask". Fix: "No scene gives this child one of the four stage
mascots."

**40. `glamrock-freddy` · `group` · `"pizzaplex"`** `consistency`. Roxanne Wolf, Montgomery Gator, Glamrock Chica
and the Daycare Attendant are `"entity"`. So Freddy alone is listed under "Pizzaplex era" and not under "Machines
and entities", and his status sits under "What became of them" where theirs sit under "it". Fix: `group:
"entity"`, or a comment saying that the difference is meant.

**41. `cassette-man` · `name` · "The Cassette Man"** `reader`. The file's header says a name is what the link token
prints "in the middle of a sentence". This one prints a capital "The" there, and the credit is "Cassette Man".
Fix: `name: "the Cassette Man"`.

**42. `cassette-man`, `cassette-mans-daughter` · `group: "emily"`; ids `tape-girl`, `phone-dude`, `the-mimic`; the
header's "Ids are handles only and are never shown"** `rulings` (R26, "Ids": "rename them when the layers are
next touched … and do not let the UI print them"). R26 names the group `emily` among the ids that carry a
book-only name. The layer has just been touched and the key is still there, and it is shown: the People page
builds the anchor `#group-emily` from it. Person ids are shown too, as page addresses: `/people/tape-girl`,
`/people/phone-dude`, `/people/the-mimic`. Fix: rename the group key (for example `cassette`) in `schema.ts`,
`people.ts` and the UI's two tables; rename the three ids, or correct the header's sentence.

**43. Shorthand from the rulings: "noted, and not told"; "does not tell"; "by convention"** `reader`. `hen` ·
`status` has "Possibly the Cassette Man (low): noted, and not told." The same "tell" is in `cassette-man`,
`client-46`, `missing-children` and `hen` · `theory`. `cassette-mans-daughter` has "placed before the five by
convention", and `elizabeth-afton` "by convention only". The brief names "the convention" as a label that only a
reader of the rulings follows. Fixes:

```text
hen, status:
Possibly the Cassette Man (low). The archive notes the possibility and builds nothing on it.

for "by convention", once in each entry:
by the model's own choice of order, which no record fixes
```

**44. `the-mimic` · `aliases` · "the Mimic (the name in the title of the 1979 game)"** `reader`. It reads as a game
released in 1979. Fix: "the Mimic (the name in the title of Secret of the Mimic)".

**45. `spring-bonnie` · `theory` · "The model no longer stakes Scott's single change to the story on the yellow
suit."** `reader`. "No longer" refers to a draft that no visitor saw, and "single change to the story" hides the
word. Fix: "The model does not rest Scott's one admitted retcon on the yellow suit."

**46. `sun-moon` · `summary` · "The attendant of the Pizzaplex's Superstar Daycare, which has a daytime side and a
night-time side."; `aliases` · "Sun", "Moon"** `reader`. "Which" attaches to the daycare, and Sun and Moon are
used later without being introduced. The two aliases state no source, and no record's quote has either name: they
are in the claims of `ruin-eclipse` and `hw2-pq4-elevator-claw-machine`. Fix:

```text
The attendant of the Pizzaplex's Superstar Daycare: one machine with a daytime side, Sun, and a night-time side, Moon.
```

**47. `one-you-should-not-have-killed` · `summary` and `fruity-maze-girl` · `theory` · "The older Chica's
figure"** `reader`. A visitor will look for "Withered Chica", and for this game it is not a fan name: Scott's own
Character Guide (Steam, 15 June 2018, the post the archive already cites for "William Afton (AKA Scraptrap)") has
"Withered Chica: She is the last of the five vent-crawlers". R25 writes "Withered Chica", and so does the
record's title. Fix: "Withered Chica (the name in Scott's guide to that game)" at first use.

---

## The ten most serious

1. `missing-children` and `fifth-child`: "Wherever the dead are counted there are four and one" is the universal
   R8 now bans; two scenes show five alike and one shows four. The one-frame fifth body is the wiki's report.
2. `missing-children` status: June 26 is given to the five; R8 and the dating table give it to two children.
3. `edwin-murray`, `f10-n4`, `the-mimic`: "his dead wife" has no record, and David's death, which is implied, is
   told as the fact after which M2 was built.
4. `william-afton` summary: the designer, the credited rabbit and Michael's "Father" are one "him" with no
   marker; R1 has one stated link.
5. `cassette-man` status: "Stays in the building as it burns" restores the "inside" that R28 withdrew.
6. `crying-child` theory: "rooms of his house … his plush" tells three of R3's inferred items as shown.
7. `fazbear-entertainment` status and theory: "In business in every era", "one continuous actor"; R31 now says the
   record is not unbroken.
8. `michael-afton` and `ffps-franchisee` theory: the volunteer "would rather stay"; the record is the Cassette
   Man's guess, and the game does not show whether he leaves.
9. `hw2-protagonist`, `vanny`, `cassie` theory: the technician "urged on by the copying endoskeleton's voice" is
   R21's low reading, told beside "medium"; the game shows a cartoon bear on a screen.
10. `arnold` summary: "the bodies of earlier technicians" is the impostor voice's account (R31).

## Noticed outside the assignment

**Evidence records**

- Five records tag `purple-guy` "only for theory linking": `fnaf1-news-kids-vanish`,
  `fnaf1-news-suspect-captured`, `fnaf1-news-dressed-as-mascot`, `fnaf1-news-charged-vs-convicted`,
  `fnaf2-call6-yellow-suit`. A person's page files a record under everyone it tags, so the arrest and the charge
  appear on William Afton's page. R8: "never tell him as Afton" (finding 17).
- `security-breach-cd46-treated-as-child-phenom` tags `gregory`, which files a recording of the unnamed client on
  Gregory's page. R22 holds that identification at medium-low and does not use it.
- One Reddit post has two records that read it two ways. `scott-silver-parasol-website` tags
  `silver-parasol-games` and calls the logo the VR studio's. `scott-2019-silver-parasol-logo` tags
  `rogue-indie-developer`. The first record's note already says the lead should keep one. Both are in the
  evidence list of `silver-parasol-games`.
- `sd-ffs-never-alone-ad` and `sd-tutorial-unit-eternal-package` carry the date label "Special Delivery present
  (c. 2019)", year 2019, on the basis "Game's contemporary setting". That is a year after 1987 given as the
  story's date (R24 point 6). The other Special Delivery records say "day the email reached players".
- Record titles that these people's pages show still carry tier-2 and tier-3 labels: `ffps-credits-william-afton`,
  `ffps-scraptrap-still-me` and `ucn-roster-afton` ("Scraptrap"); `security-breach-freddy-i-am-not-me` and
  `security-breach-gregory-what-is-that-thing` ("Burntrap"); `security-breach-shattered-glamrocks-underground`
  ("Shattered"); `ruin-fake-gregory-turn-off-security`, `ruin-mimic-reuses-gregory-lines` and
  `secret-of-the-mimic-ending-unfinished-business` ("the Mimic").
- Three records' own words are now firmer than round four. `ruin-mimic-lair-mcm-mascot-suits`, notes: "The thing
  under the Pizzaplex keeps the wardrobe of Murray's costume shop". `secret-of-the-mimic-log-try-again-build-another`,
  notes: "built to stand in for the dead son". `secret-of-the-mimic-previous-technicians`, claim: "earlier
  technicians' bodies".
- Names marked `canon-name` that no record's quote carries: "HandUnit", "Glamrock Freddy", "Montgomery Gator",
  "Glamrock Chica", "Dispatch", "Arnold" (the work order prints "Arnie") and "Oswald". The records' claims use
  them as the games' names. "Oswald" matters most, because a book uses the name too; the store page of the game
  names him, so the name is not book-only, but no record shows it. One quoted line or label in a record each
  would settle them.
- `fnaf2-custom-night-names` says "'Withered' is a fan/wiki label". That holds for FNaF2. For Ultimate Custom
  Night the name is in Scott's guide (finding 47).
- The 29 Secret of the Mimic records dated to the night itself carry the precision "exact" and the year 1979, on
  a work order that its own record says "the archive does not call … printed".

**Other layers**

- `relations.ts` repeats five things found above: "with his toy on the desk: shown" (William Afton to the crying
  child; finding 6); "finds a rabbit suit with a body in it" (34); a `hunted` tie from Vanny to Gregory, status
  `canon`, "She hunts him through the Pizzaplex: shown" (13); a `spouse-of` tie between Edwin and Fiona Murray,
  whose note says "No record uses the word wife" (3); and the same four links between Ness and Vanessa (19). It
  also has a `killed` tie from the Cassette Man to William Afton whose own note says "The game does not show who
  lights the fire".
- `deaths.ts`: `d-ffps-fire` has `by: ["cassette-man"]`, so the Cassette Man's page lists the fire under
  "Responsible for". R28: not "he burns it".
- Chapters: `bite` still has "Wherever the dead are counted there are the five from the pizzeria and the child
  outside". `cover-story`, committed at 04:18, after round four, still has "It is one continuous actor".
- The storyline in `theory.ts` and `timeline.ts` were being rewritten in the working tree as I finished, and I
  did not check the new text. Their committed text had the wording of findings 1, 3, 6 and 13 ("a fifth appears
  for an instant", "his wife Fiona", "the same plush on its desk", "hunted by the woman in the rabbit costume");
  the working copies had already dropped most of it. One line was still there at 04:49: `timeline.ts`, "A woman
  in a rabbit costume hunts him".
- `model.md` disagrees with itself in one place that an entry copies: R16 has "a voice that is probably his
  refuses release", and R28 has "That a voice refuses release: stated; whose it is, low". The entry
  `one-you-should-not-have-killed` follows R16.
- `model.md`, R26: the table says to keep no alias for `phone-dude` and only "QA" for `tape-girl`; `people.ts`
  keeps the fan names as marked aliases, as my instructions allow. The two should be made to agree. The same
  table lists "Fiona Murray" in tier 1, while round four says no record gives a marriage, and no record's quote
  has her full name.

**The UI's fixed text and image credits**

- "What became of them" stands over status lines that say who someone is, not what became of them, in about
  twenty of these entries ("Most likely William Afton (medium).", "Unidentified.", "A program in the mask.").
- "A name the canon gives." and the kicker "Canon name" are printed for `michael-afton` (finding 16) and for "the
  tester Jeremy", which is a descriptor with a name in it.
- The group label for `mimic` is "The Mimic and the Murrays": a heading that uses the label before any chapter
  has argued it (R26: "Headings and captions carry the descriptor").
- Credit captions: `ruin-mimic-elevator.jpg`, "The Mimic reaching through the elevator gate at the end of RUIN",
  which is the portrait on the copying endoskeleton's page; `sotm-redeemed-ending-david.jpg`, "the Mimic in
  David's room".
