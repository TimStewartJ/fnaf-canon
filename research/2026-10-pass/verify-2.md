# Verification 2: makers.ts, underground.ts, machines.ts

Checked: all nine chapters (`springlocks`, `two-machines`, `partners`; `burntrap`, `mimic`, `patterns`;
`funtimes`, `remnant`, `michael`). Diff base `3e780e2`; the three chapter files as they stand at `5b07936`
(unchanged since `c1bd92c`). 267 changed or new sentences, counting answers, headings, captions and table
cells: springlocks 29, two-machines 46, partners 29, burntrap 27, mimic 48, patterns 35, funtimes 17,
remnant 21, michael 15. Each was read against the `claim` and `quote` of the records it cites (298 records,
working tree), against R1 to R33 with rounds four, 4b and 4c, and against every other chapter and beat that
cites the same record. All nine were then read from the top in the reader's view.

The records moved while I worked. The records editor rewrote the evidence files at 09:56 on 3 October, and ten
records my chapters cite changed in `claim` or `quote` (uncommitted). I read every sentence that cites them
again. Two findings below (mimic 3, funtimes 1) come from those changes. Everything here is as of the working
tree at 10:33.

Tools and what they printed:

- `chapter.mts` for the nine chapters, and `beats.mts`.
- `quotecheck.mts … 3 --weak`: 624 phrases, 2 `MISS` (both the known `s-1979` fault), 0 `UNCITED`, 20 weak.
  Nine weak lines are in my chapters (two-machines 3, mimic 3, patterns 1, remnant 2). All nine are false
  alarms: the tool stops at the first cited record that holds the words in its notes or claim, and in each case
  another record cited in the same paragraph (for the `remnant` answer, in the chapter) has them in its `quote`.
- `wordcheck.py --all`: nothing banned in the displayed text of my chapters. Its "partners" hits there are link
  tokens and, in `partners` itself, the question, two denials ("The games never call Afton and the Cassette Man
  partners"; "no game says partner, founder or owner") and the one marked sentence. Its one year hit
  (`funtimes`, "August 2016") is the real date of a teaser.
- My own checks: every quotation of any length against the `quote` of a record cited in the same unit (no
  misquotation; four short labels are in a cited record's `claim` and not in its `quote`: "Storage Tank",
  "Parental Tracking", "a memory", "Death"); all 457 citations point at records that exist; every `{{id}}`
  resolves; the eleven quote blocks that print a record's whole `quote` were read against the record as it now
  stands; the weekday arithmetic (6 December is a Saturday in 1969 and 1975 only, between 1965 and 1979; 3
  August to 7 September 1979 is 35 days).

## Findings

### springlocks 1. WORDING
- where: body, section "Springlocks for the diner", paragraph beginning "Neither record is dated"
- text: The note is to Fiona, so it was most likely written before her death (see ((two-machines))).
- problem: "her death" is flat here and is held back where it is told. `secret-of-the-mimic-log-death` (notes, re-worded) gives "gone" meaning dead as "the reading the other recordings support". `two-machines` says "The model takes the voice for the machine's, since the machine stands behind the cake, and the boy's mother for dead by then" and "No recording says what happened to her"; beat `s-two-machines` says "Fiona is gone" and "No recording in Secret of the Mimic says outright what became of her or David". Step 2 of the order of events still calls her death firm: if that stands, so does this sentence.
- fix: The note is to Fiona, so it was most likely written before she was gone (see ((two-machines))).

### burntrap 1. SLIP
- where: body, section "The mass of parts has a bear's face", last paragraph, beginning "Four rabbits are easily run together"
- text: {{glitchtrap}} (known as Glitchtrap, Scott's working name for it) is software (see ((digital))).
- problem: the token prints the stored name, "the rabbit in the code", so the sentence begins in lower case. The editor's memo (section 4) and the final-pass brief say that the page capitalises a token at the start of a sentence. No branch does: `EntityLink` prints `labelForEntity(id)` unchanged in `ws/theory`, `ws/integ`, `ws/ui-final` and `ws/ui-a` to `ws/ui-d`. I read the components and did not render the page. The same fault is in six places outside my files: a table cell in `thesis` that begins `{{glitchtrap}}`; `killer` ("{{scraptrap}} is shaped differently"); `child-outside` ("{{puppet}} is the machine"); `fazbears-fright` ("{{phone-dude}} phones the guard"); `ffps` ("{{cassette-man}} is the only name"); `salvage` ("{{scraptrap}} is the one the game names outright").
- fix: The first, {{glitchtrap}} (known as Glitchtrap, Scott's working name for it), is software (see ((digital))).
  One change in `RichText` would mend all seven instead: capitalise an entity name that opens a block or follows a full stop.

### mimic 1. SLIP
- where: body, section "The same trick twice", paragraph beginning "Two of the voice's lines"
- text: In one ending another Dispatch comes on the radio of his van.
- problem: "another Dispatch" has no first one. This is the chapter's first use of the word, and the sentence before speaks only of "the trusted voice on a technician's radio". (`patterns` has the same pair of statements with the word in both halves.)
- fix: In one ending a second voice comes on the radio of his van.

### mimic 2. SLIP
- where: body, section "A Murray machine", paragraph beginning "Call it, so far"
- text: The two bodies have the same look, orange coil eyes and mismatched limbs [[secret-of-the-mimic-mimic-ruin-appearance-link]], and that is the weakest tie.
- problem: no second body has been named. The paragraph has spoken of costumes and of a number. The record compares M2 in Secret of the Mimic with the endoskeleton under the Pizzaplex.
- fix: This endoskeleton and Murray's second machine in Secret of the Mimic have the same look, orange coil eyes and mismatched limbs [[secret-of-the-mimic-mimic-ruin-appearance-link]], and that is the weakest tie.

### mimic 3. WRONG
- where: body, section "How it got there: not shown", paragraph beginning "In 1979 {{fazbear-entertainment}} claimed"
- text: The one record of a cabinet being moved is a secret scene in Help Wanted 2, where a white van drives away with one inside [[hw2-mimic-teaser-mxes-ending]].
- problem: the record no longer has a white van. Its claim, corrected on 3 October from two captures of the scene, reads "a pale blue van with a white stripe", and its notes add "The wiki's text calls the van white." This is now the only "white van" in the site's data.
- fix: The one record of a cabinet being moved is a secret scene in Help Wanted 2, where a van drives away with one inside [[hw2-mimic-teaser-mxes-ending]].

### mimic 4. SLIP
- where: `tension`, last sentence
- text: And the secret ending shows the rabbit crushed [[hw2-pq4-vanny-crushes-glitchtrap]] and reports "System threats found. Repair complete." [[hw2-pq4-consequences-achievement]], as though the rabbit were the whole threat.
- problem: the edit that cut "Against the model's reading of Help Wanted 2" left "the secret ending" with no game to belong to. Two sentences earlier the tension describes an ending of Secret of the Mimic, and the only "secret" thing in the body is the van scene, which is a different ending of Help Wanted 2.
- fix: And Help Wanted 2's secret ending shows the rabbit crushed [[hw2-pq4-vanny-crushes-glitchtrap]] and reports "System threats found. Repair complete." [[hw2-pq4-consequences-achievement]], as though the rabbit were the whole threat.

### patterns 1. WORDING
- where: body, section "Two remedies, a wall, and a company", paragraph beginning "Two remedies are tried"
- text: One ending shows it crushed [[hw2-pq4-vanny-crushes-glitchtrap]], and in the next game the mask still shows a rabbit's shadow (as described) [[ruin-vanny-hideout-glitchtrap-shadow]] (see ((vanny))).
- problem: the crush is Help Wanted 2's and the shadow is RUIN's. Round 4c made Help Wanted 2's place before RUIN "most likely" where it had been fixed, and `mimic`, `games` and `timeline-math` now say so; "the next game" states the order flat and names neither game. By release it runs the other way (RUIN, July 2023; Help Wanted 2, December 2023). R19's wording line, which is older than 4c, has the same phrase, and `vanny` has the same sentence.
- fix: One ending of Help Wanted 2 shows it crushed [[hw2-pq4-vanny-crushes-glitchtrap]], and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow (as described) [[ruin-vanny-hideout-glitchtrap-shadow]] (see ((vanny))).

### patterns 2. WORDING
- where: body, section "The makers are fathers", first paragraph
- text: And the costume maker {{edwin-murray}} says of himself that he let a machine raise his son [[secret-of-the-mimic-log-refusal]] (see ((two-machines))).
- problem: the paragraph opens "The makers in this story are fathers, and each of them loses a child." For Edwin Murray the loss is his son's death, which R21 and step 3 of the order hold "implied, never stated". `two-machines` tells it so ("David dies: the recordings imply it, none says so in as many words"), and so does every other place that mentions it. Here it is flat, with no marker in the paragraph. The fix leaves the opening sentence alone.
- fix: And the costume maker {{edwin-murray}} says of himself that he let a machine raise his son [[secret-of-the-mimic-log-refusal]], a son whose death the recordings imply and never state (see ((two-machines))).

### funtimes 1. SLIP
- where: body, before the first heading: the quote block that follows the paragraph beginning "Sister Location opens on two voices"
- text: { kind: "quote", evidence: "sl-intro-mr-afton-board" },
- problem: the paragraph ends "The first man replies." The block has no `text`, so the page prints the record's whole `quote`, and that field was extended on 3 October. It now reads "She can dance, she can sing, … She can even dispense ice cream. / With all due respect, those aren't the design choices we were curious about, Mr. Afton." The reader gets the designer's own lines, an ellipsis and a slash under a sentence that announces the other man. `chapter.mts` prints "(whole record quote)" and hides this.
- fix: { kind: "quote", evidence: "sl-intro-mr-afton-board", text: "With all due respect, those aren't the design choices we were curious about, Mr. Afton." },

### funtimes 2. WORDING
- where: body, section "Undated, after a Freddy's closed", last paragraph, beginning "What the machines themselves wanted"
- text: The one other sheet on record that carries the firm's name, the only one with the word Remnant on it, is in ((remnant)).
- problem: a universal that a record cited in this chapter contradicts. The facility map of the section before also carries "Copyright (c) Afton Robotics LLC" (`sl-extras-map-entertainment-and-rental`; `afton-house` quotes the line). Before the rewrite the sentence said "The firm's one other blueprint", which was exact: four Funtime sheets and this one.
- fix: The firm's one other blueprint on record, the only sheet with the word Remnant on it, is in ((remnant)).

### remnant 1. WORDING
- where: body, paragraph beginning "The same tape says what came next"
- text: Other lines, of a trap in which he "overpowered them again" [[ffps-insanity-trap-again]], can be read as the night the four mascots were taken apart (see ((springtrap))). The tape does not say whether that night is the new wrong or a later one.
- problem: it gives the dismantling a length. R12's wording has "no length for the dismantling (not "a single night's work", not "one a night")". `springtrap`, which tells the scene, puts the four at the ends of four of the player's nights and says the scenes "do not say how long the work took".
- fix: Other lines, of a trap in which he "overpowered them again" [[ffps-insanity-trap-again]], can be read as the taking apart of the four mascots (see ((springtrap))). The tape does not say whether that is the new wrong or a later one.

## Counts

By kind: WRONG 1, WORDING 5, SLIP 5. Total 11.

By chapter: springlocks 1, two-machines 0, partners 0, burntrap 1, mimic 4, patterns 2, funtimes 2, remnant 1,
michael 0.

## Clean

`two-machines`, `partners`, `michael`.

On the special points, for the record:

- No chapter says that Edwin and Fiona were married, or "wife".
- That the cabinet is M1 is marked wherever it is said (`two-machines`, body and `tension`; `mimic`, "On the reading argued in ((two-machines))").
- W.A. as William Afton takes "most likely"; Hen is left open and has no pronoun.
- The partnership is the model's reading in one sentence of `partners` and is stated nowhere.
- The first-use form for the burnt rabbit is right in `burntrap` and in `mimic`, and "Burntrap" otherwise occurs only inside Scott's quoted sentence. The first-use form for the rabbit in the code is given once each in `burntrap`, `mimic` and `patterns`.
- Nothing in `remnant`, `funtimes` or `michael` says what Remnant is or does.
- The six rows of the table in `michael` match R13 and R16.

## For the adjudicator

1. R2's rule for the voice on the radio, against the re-worded records. `model.md` ("The voice on the radio: one rule") has the first machine imitate the dispatcher inside the building. Three records' notes now say that where the impersonation begins "is not stated" or "is not settled", and that who speaks the briefings inside "is not certain" (`secret-of-the-mimic-clock-out-real-dispatch`, `secret-of-the-mimic-dispatch-contractor-murray`, `secret-of-the-mimic-dispatch-endoskeleton-any-costume`; the wiki lists those briefings under the real Dispatch). Two sentences state the rule as fact: `springlocks`, "once the technician is inside, another voice uses his radio, and what that voice says is not the company's word", and `two-machines`, "Either way the Dispatch inside the building was the cabinet". The claim of `secret-of-the-mimic-f10n4-reveal` carries only that the cabinet "had impersonated Dispatch". I did not count these, because the rule tells the chapters to write so. If the records' caution is wanted, the two sentences could read: "It is stated on the road, and that matters: inside the building a machine speaks as Dispatch on his radio, and no record says where its voice takes over (see ((two-machines)))." and "Either way a Dispatch inside the building was the cabinet, and no record says where its voice took over: on this reading the liar of that night is the babysitter, not its copy."
2. Two counted findings go against a ruling's own text: springlocks 1 (step 2 of the order calls Fiona's death firm) and patterns 1 (R19's wording line has "the next game"). In both the ruling is older than what it now conflicts with: the re-worded record, and round 4c.
3. `michael` (`tension`) says "The strongest evidence usually cited for it is in a book, which this archive does not admit". `open` and `fnaf1-restaurant` say the same. No record can carry it. The three places agree.

## Seen and not counted

- `remnant`, first paragraph, and the same statement in `ffps`: the record cited for the three blueprints on the monitor, `ffps-insanity-new-way-to-desecrate`, carries them only in its notes. `ffps-insanity-egg-baby-trigger` states it in its claim ("shows the blueprints and plays a Cassette Man audio log") and could be cited beside it.
- Outside my files: `ffps` says "salvaged machines are shown burning as the building goes up [[ffps-completion-fire]]". On 3 October that record's claim lost "as the building goes up in flames", and its notes now give the building's destruction as "the wiki's account".
- A quote block with no `text` follows whatever the record's `quote` holds. There are 52 in the chapters, eleven of them in my files, and only the one in `funtimes` reads wrongly today. If the records editor's pass on quotes goes on, they need reading once more at the end.

## Could not check

- The rendered page. I started no server; burntrap 1 and funtimes 1 rest on reading the components.
- Images, captures and the games themselves. Every check is against the records, not against their sources.
- Any change to the records after 10:33 on 3 October.
