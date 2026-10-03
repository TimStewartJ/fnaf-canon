# Verification 2b: makers.ts, underground.ts, machines.ts (the readability round)

Checked: `git --no-pager diff 42366ee..HEAD` for the three files, with HEAD at `17816ee` (3 October, 13:31). The
three files were last changed by `ee957f3` (12:40) and `ff76de9` (13:04) and are clean in the working tree. Five
chapters are touched: `partners`, `two-machines`, `remnant`, `burntrap`, `mimic`. There are 13 changed or new
sentences (partners 2, burntrap 4, mimic 7), two passages cut whole (one paragraph of `two-machines`, one
sentence of `remnant`'s "what pushes back"), and two sentences moved without a change of word (`burntrap`, "If
he is still cut off, whatever takes him does not come over it."; `mimic`, "What becomes of the technician is
not shown."). `springlocks`, `patterns`, `funtimes` and `michael` have no change.

Each changed sentence was read against the `claim` and `quote` of the records it cites, as they stand. No
evidence file has changed between `42366ee` and HEAD, and `src/data` is clean. It was read against R2, R20, R21,
R22 and R26 with round 4d, and against every other chapter, beat and person entry that tells the same thing.
`mimic` and `burntrap` were then read from the top in the reader's view.

Tools and what they printed:

- `scripts/validate.ts` (it only reads): `OK`; "theory coverage: 1046/1046 accounted (cited inline 663,
  counter-evidence 111, filed as further 344, outside the story 70); unaccounted 0". The same line as the
  writer's.
- `chapter.mts` for the five chapters: `burntrap` 985 words, `mimic` 1,090, as the writer counted.
- `quotecheck.mts … 3 --weak`, run on HEAD and on a copy of the data at `42366ee`: 616 phrases (624 before; none
  of the eight that went is in my chapters), 0 `UNCITED`, the same 21 weak lines, nine of them in my chapters
  as before (two-machines 3, mimic 3, patterns 1, remnant 2). The two `MISS` lines are still the known fault at
  beat `s-1979`: the tool cannot pair the two-letter quotation "WA", so it reads the prose between two
  quotations as a quotation. The beat was re-worded in this period, so I read its four quotations again by
  hand; all are verbatim in the records cited beside them.
- `wordcheck.py --all`, on HEAD and on the copy at `42366ee`: the same lines for my files. `makers.ts` has 12:
  link tokens and the chapter's own id, the question, two denials and the one marked sentence. `underground.ts`
  has none. `machines.ts` has one, the real date of a teaser.
- My own comparison of the nine chapters before and after: no record lost or gained inline in any chapter;
  `counterEvidence`, `further`, `seeAlso` and `confidence` identical in all nine; the same link tokens; the same
  number of quotations of three words or more in each chapter.

## Findings

Nothing found in what changed.

One finding from my first report is still in the text. It is not part of this round's diff. I met it again on
reading `burntrap` from the top, and I give it here because the message that opened this round counts it among
the findings applied.

### burntrap 1. SLIP (carried over from `verify-2.md`; an unchanged sentence)
- where: body, section "The mass of parts has a bear's face", last paragraph, beginning "Four rabbits are easily run together"
- text: {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) is software (see ((digital))).
- problem: the token prints the stored name, "the rabbit in the code", so the sentence begins with a small letter. Commit `a3a27d0` did not touch this sentence. No code prints a capital there: `EntityLink` prints `labelForEntity(id)` unchanged in `ws/theory`, in `ws/integ` (`e909aea`) and in `ws/ui-final` (`3b76ec5`), in the commits and in the working trees, and no style rule does it either. R26 as round 4d left it says that a token that opens a sentence "prints a small first letter, so recast the sentence or write the descriptor as plain text". `BRIEF-reader2.md` tells the second reader that the page prints a capital there; I found nothing that does. I read the components and did not render the page. The same fault stands in five places outside my files: `thesis`, a table cell that is only `{{glitchtrap}} (known as Glitchtrap, Scott's working name for it)` (`story.ts`, line 34); `killer`, "{{scraptrap}} is shaped differently" (`story.ts`, line 68); `child-outside`, "{{puppet}} is the machine FNaF2's guard is warned about." (`murders.ts`, line 20); `fazbears-fright`, "{{phone-dude}} phones the guard on the first two nights." (`reckoning.ts`, line 22); `ffps`, "{{cassette-man}} is the only name the games give the voice on the tapes" (`reckoning.ts`, line 73). The sixth place of my first report, in `salvage`, is gone: that sentence was recast.
- fix: The first, {{glitchtrap}} (known as Glitchtrap, Scott's working name for it), is software (see ((digital))).
  R26's other remedy also holds here: `The rabbit in the code (known as Glitchtrap, Scott's working name for it) is software (see ((digital))).` One change in `RichText` would mend all six instead: print a capital on an entity name that opens a block or a table cell, or follows a full stop.

## Counts

In what changed in this round: WRONG 0, WORDING 0, SLIP 0.

Carried over and still open: SLIP 1 (`burntrap`).

By chapter, in what changed: partners 0, two-machines 0, remnant 0, burntrap 0, mimic 0.

## Clean

In what changed: `partners`, `two-machines`, `remnant`, `burntrap`, `mimic`.

## The three checks of this round

### Nothing lost

Every place the second reader's memo and the writer's notes name was opened and holds.

- `partners`, answer (reader's change 7). What went: the grounds for W.A. and the description of Hen. The answer
  cited no record. The body has all of it. Under "W.A. wants the firm": the letter that opens on "software
  development and the entire MCM catalog"; the quotation "Although we now technically own the land, we would
  never touch the house your parents built."; and "I need the rest of the Murray staff contact info." Under "Hen
  is the customer": "Hen is the one to be warned about how oddly the new springlocks can behave
  [[secret-of-the-mimic-mail-springlocks-hen]], and sends the change order that Edwin does not want
  [[secret-of-the-mimic-log-build-to-spec]]."
- `two-machines` (reader's change 26). What went: "The game ends three ways, and the model does not choose." It
  cited no record. The heading "Three endings, and none is chosen" now stands directly over the box, which has
  three columns and picks none, and beat 3 (`s-1979`) says "Secret of the Mimic gives the night three endings,
  and the model does not choose." The paragraph after the box refers to nothing that went.
- `remnant`, "what pushes back" (reader's change 20). What went: the sentence on Special Delivery's collectible.
  The body's last paragraph, which stands directly before "what pushes back", says it with the quotation:
  Special Delivery's Remnant "is used to power up your animatronics" [[sd-tutorial-remnant-collection]], "a game
  resource, and no evidence of what the word means in the story". The record is still the chapter's one counter
  record, and both pages (`Theory.tsx` here, `ChapterView.tsx` in the new interface) list counter records with
  "what pushes back". One consequence, not counted: in the new interface the box lists this record and then
  prints the paragraph under "How the model handles it", which no longer speaks of it. What the model makes of
  it is the sentence directly above the box.
- `burntrap`, the name. What went: "the name is in the game's files (a fan wiki's account) …, and Scott's remark
  is from an interview (a transcript)". Both records are still cited in the passage:
  `scott-2024-interview-placeholder-names-canon` inside the first-use form, and
  `security-breach-burntrap-name-not-in-game` after "nobody names it", which is what its `claim` says ("has no
  lines and no name"). The second is cited again in "what pushes back" and is still a counter record. Nothing in
  the chapter implies that a game prints the name. It occurs twice: in the first-use form, as a working name of
  Scott's, followed at once by "nobody names it"; and inside Scott's quoted sentence. No title, heading or
  caption has it, and "what pushes back" opens "No word found in the game says whose body this is". What went is
  still found where the writer says: the figure's entry has the marked alias "Burntrap (a file name, by a fan
  wiki's account, and Scott's working name)" (`people.ts`, line 546); `canon-rules` has "one sentence of a 2024
  interview (a transcript)"; and this chapter's later sentence begins "In an interview (a transcript) Scott said
  that". Two tags went with the clause. "(a fan wiki's account)" qualified the statement that went with it.
  "(a transcript)" qualified Scott's remark on the name, which now stands only in the first-use form, and R20
  gives that form without a tag. The form has no tag in any of the ten places where it stands (seven chapters,
  beat `s-pizzaplex`, one place entry and one timeline entry).
- `burntrap`, what moves the remains. What went: "with a purpose he would not state". The box "What stays open"
  has it with the same record: "What the figure is for: Scott said it had a purpose, and did not say what
  [[scott-2024-interview-burntrap-never-meant-to-move]]." `open` has it too. The rival reading, a shell that
  something else works, is stated once, and its two limits follow it: "The remark does not say so, and no later
  game contradicts the scene in the station."
- `mimic`, "The mask before Cassie". What went: the six masks by name, and that the game's word for a doll is "a
  memory". `digital`, which the clause now links, has both: "six rag dolls masked as the four mascots, the
  yellow bear and the Puppet. The game calls each of them a memory [[hw2-memory-dolls]]." Whose masks they are
  is still said in this chapter's "what pushes back", with its link to `golden`. "Who had Cassie's mask before
  her" is now "that technician", after the sentence that quotes the mask's description.
- `mimic`, "what pushes back". What went: the word "six"; the body has "six masked dolls". All five counter
  records are still named and cited, each with what it does to the model, and
  `hw2-pq4-vanny-crushes-glitchtrap` is still cited beside them.

### No marker changed strength, and none moved

- `partners`: "most likely" still covers "William Afton, writing for Fazbear Entertainment", and Hen is still
  left open.
- `mimic`: one "Most likely" stood on the technician's story and on the place between Security Breach and RUIN,
  and one still does: "Most likely Help Wanted 2 is that technician's story and is set between Security Breach
  and RUIN (see ((games)))". R22 holds both at medium-high, and `games` and `timeline-math` say "most likely"
  for the place. "(as described)" is where it was, on the main ending, and its two sentences are untouched; they
  match `hw2-faz-force-ending` as it stands. Since the evidence commit of 09:36 that record has changed only in
  its date: the label now reads "most likely between Security Breach's night and RUIN", and the basis calls
  the place before RUIN "a fan wiki's reading". The chapter's "Most likely" agrees. "So Help Wanted 2 most
  likely means to join…" and both sentences that begin "It may be" are untouched. "What becomes of the
  technician is not shown." moved to the end of the next paragraph without a change. It carries no marker; R22
  and the record's notes say the same, and `open` still lists the technician's fate.
- `burntrap`: the two passages hold no marker. "If he is still cut off", "Read into the released game, that
  would make…" and "The model lets the scene stand as shown" are word for word. "(a transcript)" stays on
  Scott's remark about movement.
- `two-machines` and `remnant`: the cut passages held no marker. "That is thin, which is why the chapter is
  marked low." is untouched.

### The sentences the writer lists, against their records

All ten are supported.

- "Help Wanted 2 shows its player a bright training world through a mask: with the mask off, it is a derelict
  room [[hw2-remove-mask-real-world]]." The claim: "lifting the mask shows that the bright hub is really a dark,
  derelict room".
- "A character in one of its training levels asks the player: "you are a Fazbear technician - are you not?"
  [[hw2-glam-freddy-fazbear-technician]]" Verbatim; "its" is Help Wanted 2's.
- "Cassie's mask is described as "A strange mask left behind by some Faz-Technician"
  [[ruin-security-mask-left-by-faz-technician]]." Verbatim; the claim names "the Security Mask Cassie is given".
- "Most likely Help Wanted 2 is that technician's story and is set between Security Breach and RUIN (see
  ((games)))." R22, medium-high; `games` agrees.
- "Elsewhere in Help Wanted 2 a long-fingered arm in a fur costume holds out six masked dolls
  [[hw2-memory-dolls]] (see ((digital)))." The claim: six rag dolls, each in a mask, each "held out by a
  long-fingered, fur-costumed arm". `digital` tells what the link promises.
- "The game shows the rabbit itself seize a machine: Freddy, who at the start of the night "cannot connect to
  the main network" [[security-breach-freddy-cannot-connect-main-network]]." The quotation is verbatim and the
  record places it at the start of the night. The seizing rests, as before, on the two records cited in the
  section above (`security-breach-freddy-i-am-not-me`, shown: "remotely takes control of Glamrock Freddy").
- "In an interview (a transcript) Scott said that "Originally, Burntrap was never supposed to move"
  [[scott-2024-interview-burntrap-never-meant-to-move]]: it was to be glimpsed like a decaying prop." Verbatim;
  the claim has "glimpsed in corners or propped against a wall like a decaying movie prop".
- "The model lets the scene stand as shown, and no game says what moves the remains." The new clause is the
  answer's ("no game says what moves it") and `open`'s ("No game says whose remains it is, who stood it in its
  station or what moves it"). R20 (3) agrees.
- "Help Wanted 2's dolls wear the masks of the figures the model ties to dead children (see ((golden))), and one
  is found in a level where a cut-out of Springtrap stands [[hw2-fazerblast-fire-springtrap]]: they read as the
  killer's keepsakes, not Murray's." The doll in Freddy's mask is found in the level "Fazerblast: FNAF 3"
  (`hw2-memory-dolls`), where the cut-out stands.
- "And its secret ending shows the rabbit crushed [[hw2-pq4-vanny-crushes-glitchtrap]] and reports "System
  threats found. Repair complete." [[hw2-pq4-consequences-achievement]], as though the rabbit were the whole
  threat." Verbatim; "its" is Help Wanted 2's.

## For the adjudicator

1. R20's wording line after round 4d reads "taking control of Freddy" and "the one thing the scenes on file show
   it do", where it had "seizing a machine" and "the one power the game shows it use". `burntrap` keeps the
   older words: in the answer, in a heading, in "That is the one power the game shows it use.", and in the
   re-joined sentence of this round ("The game shows the rabbit itself seize a machine: Freddy, …"), which is
   made of the passage's own words. Round 4d asks for no change here, and
   `security-breach-freddy-i-am-not-me` supports the sentence, so I did not count it.
2. Outside my files, and a consequence of the cut in `mimic`: the row for Help Wanted 2 in `games`
   (`apparatus.ts`, line 319) lists "six dolls the game calls memories" and ends "See ((mimic)), ((vanny)),
   ((golden))". Since this round only `digital` says the game's word; `mimic` links on to it. If the row should
   lead there in one step, it could end "See ((mimic)), ((digital)), ((vanny)), ((golden))".

## Seen and not counted

- Twelve records that my nine chapters cite differ in `claim` or `quote` from the last evidence commit before
  my first report (`00ba86f`, 09:36); the changes were committed at 12:01. I read every sentence that cites
  them again against the records as they stand, though none of those sentences changed in this round. All are
  supported.
- The twenty quote blocks in my three files were read again: the ten that print a record's whole `quote` read
  rightly today, and the ten with their own text are verbatim. The block in `funtimes` now has its own text.
- Beat `s-1979` was re-worded in this period (`theory.ts`, not my file). It agrees with `springlocks`,
  `two-machines` and `partners` in what it states and how firmly: "A voice on his radio speaks as the company's
  Dispatch" beside "A voice that gives itself as dispatch with Fazbear Entertainment"; "The writer is most
  likely William Afton, writing for Fazbear Entertainment" beside the answer of `partners`.

## Could not check

- The rendered page. I started no server; burntrap 1 rests on reading the components in three branches.
- `npx tsc -b`: not run, because it writes build files into the worktree. The three chapter files load under
  `tsx`, and the validator passes.
- Images, captures and the games themselves. Every check is against the records, not against their sources.
