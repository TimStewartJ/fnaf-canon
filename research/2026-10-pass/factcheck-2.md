# Fact-check 2: The makers and Under the Pizzaplex

## What was checked, and against what

- **Chapters.** `springlocks`, `two-machines`, `partners` in `src/data/chapters/makers.ts` (sha256 `bc56908af687…`)
  and `burntrap`, `mimic`, `patterns` in `src/data/chapters/underground.ts` (`0914e19d752f…`), as committed in
  `5750fc8` at 01:59 on 3 October. Neither file changed while I worked (last looked at 03:29, with the worktree at
  `35726b2`).
- **Storyline beats.** The five whose `sections` name those chapters: `s-costume-company`, `s-two-machines`,
  `s-1979`, `s-pizzaplex`, `s-mimic` (`theory.ts`, `975ed442037d…`, unchanged).
- **Records.** All 213 records the six chapters and five beats name (cited, counter-evidence, filed under
  `further`, or inside a date pill) were opened in the JSON; the 170 cited inline were read against the sentence
  that cites them. The evidence changed while I worked. Eight of the 213 records are not as they were when the
  chapters were committed (`security-breach-burntrap-appearance`, `secret-of-the-mimic-mail-springlocks-hen`,
  `secret-of-the-mimic-teaser-1979`, `secret-of-the-mimic-work-order-1979`, `ffps-insanity-small-souls-prisons`,
  `security-breach-ending-redemption`, `fnaf3-call2-found-a-real-one`, `ffps-scup-blueprint`). I read each again,
  as it stands at `35726b2` (03:16), against the sentences that cite it. All agree, and no finding below rests on
  the older wording. All ten hero and figure images were looked at against their captions. The date arithmetic in
  the pills was recomputed.
- **Rulings.** `rulings-brief.md` and `model.md` (R2, R20, R21, R22, R26, R27, R33, the table of recurring ideas,
  dating rows 1 to 9) as saved at 00:54, with `telling.md` (sections A2, B and C, saved 01:37) and
  `telling-revisions.md` (01:38) for the lead's round-three fields. `npx tsx scripts/validate.ts` passes.
- **The wiki** was used only to check wording or what a screen shows. Five findings use what it shows
  (`springlocks` 8, `two-machines` 3, `mimic` 1 and 17, beats 1), and each says so.

Many of the sentences below were written to the outline or to a ruling's own wording. Where a finding is inherited
in that way it is marked **(from the outline)** or **(from R…)**, so that it can be mended at the source as well.
Suggested wordings are offers; the finding is the part in front of "Fix".

## The checks the assignment named

| Check | Result |
|---|---|
| Every phrase in quotation marks is verbatim from the cited record's `quote` | No phrase departs from its record's wording, and all fifteen `quote` blocks are exact. Five short phrases are quoted from a record's `claim` or `notes` and are not in its `quote` field (`springlocks` 8, `two-machines` 10, `mimic` 17). |
| Dates in Secret of the Mimic are described as the records describe them | The four pills (two in `two-machines`, two in the beats) carry a valid kind, and the three with a year from Secret of the Mimic say it was read from images. Four slips: a pill that dates the firm's paperwork and not the beat (beats 4); "Before 1979" for "before the night" (beats 7); "In 1979" on an undated recording (`mimic` 5); two work orders cited without their status (`springlocks` 4). The December 1975 pill prints one of two years without the reason (`two-machines` 7). |
| The three endings of Secret of the Mimic and of RUIN are told as branches | The endings themselves are, in both chapters, and none is chosen. Four events that belong to one branch are told as the course of the night (`two-machines` 3, `mimic` 6, `patterns` 4, beats 12). |
| Nothing identifies the copying endoskeleton with either rabbit, or says how it came to be there, beyond a record | Nothing identifies them, and no sentence needs the novels' account to work. Four places go further than the records in other ways: a flat denial that the rulings rate medium (`burntrap` 1); a join told as meant (`mimic` 2); "the crew that built the Pizzaplex" (`mimic` 4, `burntrap` 3); and two sentences on the sealed machine's reach, one with a radio the record does not have and one that sets a recording beside it without saying that the recording names no one (`mimic` 1). |
| M1 and M2 are kept apart as the records keep them | Yes for M2. But no record says that the cabinet F10-N4 is M1, and the chapters say it flat in three places on a citation that does not carry it (`two-machines` 1, `mimic` 7, beats 8). |
| Every instance in `patterns` is supported by its record and by the chapter it links | All the linked chapters cite the same records inline. The paragraph on the company gives it an act that is not its own (`patterns` 1); one instance is told with more certainty than its record (3), one needs a second record (5), one is a loose fit (6). |
| R2: contract stated; W.A. letters inferred; W.A. medium; Hen noted, not told; partners the model's reading; no "printed twice" | Clean. The one caption that mentions the date twice describes the image correctly (typed in the header, handwritten beside the signature). |
| R26 labels and tokens | Clean. No book-only name, no banned token, both first-use forms exact, "the burnt rabbit" never bare. |
| Written to the current rulings | Yes. Every round-three field in `telling-revisions.md` is applied. Where the writer departed from the lead's text (in `partners`, `burntrap` and `mimic`), the departure is right on the records. Two of those in `mimic` are not in its `// REVIEW:` note (`mimic` 16). |

Problem types: `unsupported` (the record does not contain it), `overreach` (more than the record, or an inference
stated flat), `wrong record`, `misquote` (here only the technical kind: exact words, not in the `quote` field),
`date`, `uncited`, `no record`, `branch` (one ending's event told as fact), `frame` (answer, confidence,
counter-evidence, reasoning), `ruling` (a required wording), `consistency`, `clarity`.

---

## `springlocks`: Suits that are also machines

**Verdict: minor fixes.** The contract, the tapes and the room are all exact. The weak spots are in the case for
the diner.

1. **"has a bear, a fox with a pirate ship, a clumsy chicken and a blue bunny who \"started a band\""**.
   `overreach`, by omission. `secret-of-the-mimic-story-time-animal-band` has six animals: "an angry alligator and
   a pesky puppy" as well. Naming four makes the match with the four mascots look exact. Fix: "has six animals who
   \"started a band\": a bear, a fox with a pirate ship, a clumsy chicken and a blue bunny, and with them an
   alligator and a puppy".
2. **"the later games give that diner those two suits"** (tension, uncited). `overreach` (from the outline and R2).
   No game does. `fnaf3-stage01-fredbear-spring-bonnie`: the stage is unlabelled and its place tag is "implied
   only". `fnaf3-tapes-freddy-fazbears-pizza`: the two suits belong to Freddy Fazbear's Pizza, and "the tapes
   themselves never mention the diner". `fnaf4-diner-unnamed`: FNaF4 never prints its restaurant's name.
   `fnaf2-call5-fredbears-family-diner` names the diner and no suit. Fix: "and the later games put a yellow bear
   and a yellow rabbit on one stage [[fnaf3-stage01-fredbear-spring-bonnie]] and call \"the original restaurant\"
   Fredbear's Family Diner [[fnaf2-call5-fredbears-family-diner]]; no game puts the two suits in a place of that
   name".
3. **"holds prototypes of {{fredbear}} and {{spring-bonnie}} beside those of Freddy, Bonnie, Chica and Foxy"**.
   `overreach` (from R2's records). `secret-of-the-mimic-rnd-proto-pizzeria`, notes: "The 'Proto [Character]'
   labels come from game files". R2 says the same of the four (the "Proto" names "are file labels"), and rule W7
   keeps file labels out. The diner reading leans on this sentence. Fix: say whose names they are ("which the
   game's files label Fredbear and Spring Bonnie"), or describe the two figures by their look once someone has
   checked it.
4. **"Two work orders are in the van."** `ruling` (R27, W7). Both records were "Read from the document image on the
   wiki" (`secret-of-the-mimic-work-order-1979`, `secret-of-the-mimic-work-order-retrieve-assets`). An earlier
   paragraph gives that status to the chart and the order forms; this one gives none. Fix: "Two work orders, read
   here from images of the documents, are in the van."
5. **"His wife, {{fiona-murray}}"**, "his wife's work". `no record`. No record says wife or married. What the
   records carry is "his mother" (`secret-of-the-mimic-log-death`) and the cabinet's "our home" and "Tell Edwin, I
   still love him" (`secret-of-the-mimic-f10n4-reveal`). R21 and the outline use the word too, and it is a safe
   inference. It still wants a record, or those two citations at first use.
6. Three small ones. `overreach`. (a) **"The springlock suits are Murray's work."** (R2's own sentence, which it
   marks "stated") comes one paragraph after "That is most likely Murray's firm". What is stated is that Murray's
   workshop makes springlocks; that the suits of the tapes are its work is the "most likely". Write "Murray's
   workshop makes springlock suits". (b) **"Murray's building already has one"** (from the outline):
   `secret-of-the-mimic-mockup-pizzeria-layout` shows "a hidden back room holding suits"; that it is the tapes'
   room is the record's note, and "already" assumes the undated tapes are later. Write "has a room of that kind".
   (c) **"whose owners ... were \"very happy\""**: the message says "The client is very happy"
   (`secret-of-the-mimic-mail-chicas-party-world`); write "whose client".
7. **"The tapes call the suits' maker only \"the manufacturer\"."** `uncited`. Add
   `[[fnaf3-tape2-crank-from-manufacturer]]`.
8. **"frankly creepy"**, **"like we always do"**, **"odd behaviors"**. `misquote` (technical). Each is in its
   record's `claim` and not in its `quote`, which stops short of the words (`secret-of-the-mimic-log-creepy`,
   `secret-of-the-mimic-log-build-to-spec`, `secret-of-the-mimic-mail-springlocks-hen`). All three are exact by the
   wiki's transcripts. Extend the `quote` fields, or leave them.
9. `clarity`. In the tension, **"It is unsigned"** reads as the memo; write "The note is unsigned" (the record's
   notes now say so). **"One rule holds for that night's radio"** comes before the reader has met the voice that is
   not the dispatcher's; a clause would do ("because another voice uses the radio inside"). The tension runs to
   eleven sentences, where the style guide asks for two to five (C4). All six tensions run over (thirteen in
   `two-machines`, eight in `partners`, seven in `mimic`, six in `burntrap` and `patterns`), and most of that is
   the lead's own text.

---

## `two-machines`: The babysitter and its copy

**Verdict: minor fixes.** The best-told chapter of the six, and every quotation is exact. Its one real gap is a
join that no record makes.

1. **"By 1979 it speaks from a cabinet computer labelled F10-N4 [[secret-of-the-mimic-f10n4-reveal]]"**, and from
   it **"So the voice that lies on the radio in 1979 is M1"**. `unsupported` by the cited record (from the outline
   and R21). `secret-of-the-mimic-f10n4-reveal` says the cabinet impersonated the dispatcher, speaks in Fiona's
   voice and wants M2 repaired. It does not say the cabinet is M1. Of the 23 records that name M1 or F10-N4, none
   states the identity (R21 does, in a parenthesis: "the cabinet F10-N4"). Two notes point at it:
   `secret-of-the-mimic-mail-received-5-min-ago` ("Sender unsigned; content ('my program') points to M1/F10-N4")
   and `secret-of-the-mimic-film-m1-birthday-cake` ("per the F10-N4 page", which is the wiki). The join is a sound
   one, and the records to make it from are there. Fix: make it once, in the callout: "By 1979 a cabinet computer
   labelled F10-N4 speaks in that voice [[secret-of-the-mimic-f10n4-reveal]], says it watched the boy grow up
   \"through this machine\" [[secret-of-the-mimic-f10n4-miss-my-child]], and a message that night calls M2 \"a copy
   of my program\" [[secret-of-the-mimic-mail-received-5-min-ago]]. The model takes the cabinet to be M1." Then
   "M1's own message" and "M1's message" can stand, with two sentences that already lean on the join: "On the night
   the game is set the machine is still speaking as a mother" (the cabinet's words, under "The babysitter") and the
   tension's "that voice is later shown to be M1's". Better still, a record that states it from the game.
2. **"The boy's mother is dead by then. The voice is the machine's."** `overreach`.
   `secret-of-the-mimic-film-m1-birthday-cake` is `shown`, and gives the voice to M1 "per the F10-N4 page". No
   record dates the reel against Fiona's death. Fix: "The model takes the voice for the machine's, and the boy's
   mother for dead by then: the endoskeleton is holding the cake the voice says it baked."
3. **"Behind a locked office door Arnold finds the cabinet {{f10-n4}}"**. `branch`. The location of
   `secret-of-the-mimic-f10n4-reveal` is "F10-N4 room (Unfinished Business / true route)". The next sentence's real
   dispatcher is in the other ending (`secret-of-the-mimic-clock-out-real-dispatch`: "Walk Away / Clock Out
   ending"), which, by the wiki's page on F10-N4, Arnold reaches without learning what the voice was. The paragraph
   runs two routes together and marks only the second "In one ending". Fix: "On the route that goes on past the
   hand-over, Arnold finds ...". What the route shows to be already so stands on every branch (W10): the voice was
   never the company's.
4. **"M1, as Fiona, will not leave it there. ... Then he builds it."**, and the beat's "at M1's urging".
   `overreach` (from the outline and R21). The claim of `secret-of-the-mimic-log-try-again-build-another` is only
   that M1 says "You need to try again. Build another." That this comes before M2 and causes it is the record's
   note. The words "try again", beside "Every copy has failed" (`secret-of-the-mimic-log-make-a-copy`), fit a plea
   made after a first attempt as well. Fix: "Then, on the model's reading, he builds it."
5. **"If either fails, the night is only some time after 3 August 1979."** (tension). `frame`: the reasoning does
   not hold (from R2). Either assumption gives the day without the other. If the order's date is the day of the
   job, the night is 9/07/79 whatever the mailbox header means. If "Aug 3rd" dates the last mail, the night is five
   weeks after it whatever the order's date means. The day is lost only if both fail, and even then an order issued
   on 9/07/79 puts the night on or after that date, which is later than 3 August. Fix: "Either would give the day
   without the other, and that the two agree to the day is the argument that both hold. If both fail, no day is
   known: the night is on or after the date on the order."
6. **"David dies, and the game never shows how."** `overreach`: implied, told as stated (from the outline, which
   itself calls the notice "an implied record"). The death is carried by `secret-of-the-mimic-log-refusal` (notes:
   "Implies David has died by this point"), `secret-of-the-mimic-mail-party-canceled` (certainty `implied`) and "I
   want him back" (`secret-of-the-mimic-f10n4-miss-my-child`). The paragraph marks the notice and not the death.
   Fix: "David dies. No recording says so in as many words, and the game never shows how."
7. **`<<December 1975|estimated|…>>`**. `date`. The basis says the weekday "is true only of 1969 and 1975", and the
   label prints 1975 without a reason. Dating row 6 has it: 1975 is the one that fits the firm's other dated paper
   (its rows 1, 4 and 7). Add that clause. The record that strains the estimate,
   `secret-of-the-mimic-mcm-rnd-floor-opening-memo`, is cited in the tension and belongs in `counterEvidence` too.
8. **"Who \"they\" are is for ((partners))."** `consistency`. `partners` never cites
   `secret-of-the-mimic-log-make-a-copy` and never mentions the leak. The round-three note for this chapter (the
   copying machines were Murray's own, made for his family, and the client was never meant to have them) is carried
   only by two quotations and this link. Fix: one sentence in `partners`: "The \"they\" who \"can't have\" M2 are
   not named either [[secret-of-the-mimic-log-make-a-copy]]; the model takes them for the client."
9. Three small ones. `overreach`. **"What put them there is M2."** is the title of
   `secret-of-the-mimic-previous-technicians` and not its claim; the nearest words are the cabinet's "it caught
   them all" (notes of `secret-of-the-mimic-f10n4-fazbear-will-send-another`). Add that citation. **"which has its
   own reasons to leave M1 out"**: no record gives a reason; write "which may have". **"the one thing that hides a
   person from it"**: `secret-of-the-mimic-f10n4-suit-cannot-see` says a suit hides him, not that nothing else
   does; write "A costume also hides a person from it".
10. **"Your parents love you. Sleep tight."** `misquote` (technical): in the `claim` of
    `secret-of-the-mimic-ending-story-time`, not in its `quote`.

---

## `partners`: Hen and W.A.

**Verdict: minor fixes.** The chapter does what R2 asks: it keeps the stated, the inferred and the guessed apart.
The slips are at its edges.

1. **"The friend he means is the killer, {{william-afton}}"**. `overreach`: implied, told as stated.
   `ffps-completion-old-friend-hell`, notes: "The 'old friend' is not named. Reading it as Scraptrap / William
   Afton is implied". The whole chapter stands on this sentence. Fix: "The friend is not named. The model takes him
   for the killer, {{william-afton}}: of those gathered he is the one sent to Hell (see ((killer)))." Two
   paragraphs on, **"So the games give the killer an old friend ... That is all they state."** then needs "on that
   reading": the friendship with the killer is the one thing in the sentence that is not stated.
2. Missing from `counterEvidence`: **`fnaf2-call5-fredbears-family-diner`**. `frame`. The call speaks of "the
   original restaurant owner", one owner and unnamed. R2 lists it against (in `model.md`). It is the one game
   record that cuts against two men in the restaurant business together. Add it, with a sentence in the tension.
3. **"\"Hen\" is a customer who sends a change order for the springlock suits."** (answer). `overreach` (from the
   lead's answer). `secret-of-the-mimic-log-build-to-spec` does not say what the order changes. Edwin sets it
   against the springlocks: "It would be so much easier to keep using the Springlocks." R21 reads it as a change
   away from worn suits. Fix: "\"Hen\" is the customer who is to be warned about the new springlocks, and who sends
   a change order that Edwin does not want."
4. **"Whoever they were, Edwin's verdict on them is a note to himself"**. `overreach`.
   `secret-of-the-mimic-log-trust-no-one`, notes: "Neither 'they' nor 'it' is named." The chapter says only that
   "it" is unnamed, and so gives the note's "they" to Hen and W.A. Fix: "Edwin leaves himself a note about a
   \"they\" he does not name: ... He says neither who they are nor what \"it\" is."
5. **"He is the one to be warned", "he sends", "He is the customer's man."** `no record` (from the outline and R2,
   which both write "he"). Neither record gives Hen's sex. The pronoun comes with the name this archive does not
   use. Fix: "Hen is the one to be warned ... and sends the change order ... Hen speaks for the customer."
6. **"What the thing was is told in ((two-machines))."** `consistency`. `two-machines` never cites
   `secret-of-the-mimic-mail-group-chat-turning-down-work`, and the record leaves it open ("fits M1 speaking as
   Fiona, or M2"). Fix: "The message does not say which machine. Both are told in ((two-machines))."
7. **"The trade is the same"**. `clarity`. The same as what is not said. Write "The trade fits: W.A. bids for a
   maker's software and catalogue, and the \"Mr. Afton\" of Sister Location designs machines that sing and dance".

---

## `burntrap`: The burnt rabbit under the Pizzaplex

**Verdict: minor fixes.** The body argues a preference and says how weak it is. The answer is firmer than the
body in one sentence.

1. **"It is not the endoskeleton sealed below."** (answer). `overreach` (from the lead's answer). R20 (2) rates
   this medium, the tension says the preference rests "on the sealing alone", and `mimic` writes "most likely not".
   In the compare block, **"One machine cannot be in both places."** has the same fault: the two places are seen in
   two games, and the sentence holds only if the sealing is older than this night, which R20 rates medium (the
   boy's "a really long time", the construction messages). Fix: "It is most likely not the endoskeleton sealed
   below." And: "If the sealing is as old as the boy says, one machine cannot be in both places."
2. **"Scott said the figure \"was never supposed to move\" ... If so, what climbs out of the station is a shell,
   and something else works it."** `overreach` (from the outline, and from R20, which calls it "a possibility
   raised by a transcript"). The quote in `scott-2024-interview-burntrap-never-meant-to-move` begins "Originally",
   and the remark is about a plan the released game left: "it's not quite the same thing". It says nothing of
   anything working the figure; that step is the model's. The chapter is right to add that it "does not hold" the
   reading. Fix: "Scott said that \"Originally, Burntrap was never supposed to move\": it was to be glimpsed like a
   decaying prop, with a purpose he would not state. Read into the released game, that would make what climbs out a
   shell that something else works. The remark does not say so."
3. **"The first reports come from the people who built the place."** `overreach` (from the outline and R20). The
   three messages are construction updates from a worksite at the raceway. A record filed under this chapter says
   what came first: "The raceway was closed very abruptly prior to the new construction"
   (`security-breach-freddy-raceway-closed-abruptly`). Guests had used the raceway before this crew arrived. Fix:
   "The first reports come from a construction crew at the raceway."
4. **"a white bear with pink cheeks and a small top hat, on a body of wires
   [[security-breach-tangle-composition]]"**. `overreach`. The record's claim is "A giant tentacled amalgamation of
   old animatronic parts". The words "on a body of wires" are its note's phrase for Molten Freddy. The likeness is
   what the paragraph argues, so the mass should not be described in the other figure's words. Fix: "on a tentacled
   mass of old parts".
5. **"That is the one thing the game shows it do."** `consistency`, small (from the outline; the notes of
   `security-breach-freddy-take-control` have "and the only thing" too). The same chapter has it climb out of the
   station and try to leave the fire (`security-breach-ending-burn-it-all-down`). Fix: "That is the one power the
   game shows it use."
6. `uncited`. **"a working name that Scott has said now stands"**: `scott-2024-interview-placeholder-names-canon`,
   which is a transcript. **"which that game credits as {{william-afton}}"**: `ffps-credits-william-afton`. And the
   tension's **"the frame under the shell may be ordinary Pizzaplex stock"** is R20's second record against,
   `security-breach-vanessa-new-endo`: cite it there, and list it in `counterEvidence`, where it is missing.

---

## `mimic`: Behind the concrete

**Verdict: needs work.** The answer stands. But about a dozen sentences say a little more than their records, and
most of them are in the sections that carry the chapter's hardest claims: how the machine got there, what
Help Wanted 2 means, and how far it reaches.

1. **"In RUIN it reaches a child's radio outside the building [[ruin-cassie-seeks-gregory]]."** `overreach` (from
   the outline and R21). The record's claim: Cassie "enters the ruined Pizzaplex after a message in Gregory's voice
   says he is trapped there". It does not say what carried the message or where it found her; its location line
   reads only "Opening message / Roxy-Talky". By the wiki's plot summary the Roxy-Talky is something she finds
   inside, past the gift shop. Fix: "In RUIN a message in the boy's voice brings a child into the building." The
   next sentence has a like fault: **"one client's talk-back programs come to be answered by \"someone else\""**
   stands in this paragraph as a third case of the machine's reach, and `security-breach-cd46-talking-programs`
   does not say who answers. Add "The recording does not say who."
2. **"So Help Wanted 2 joins the rabbit and the copying machine on purpose"**. `overreach` (from the outline). R21
   (6) rates the join medium, and the outline's own confidence line says "medium that a join is meant". Fix: "So
   Help Wanted 2 most likely means to join the rabbit and the copying machine, and does not say how."
3. **"the keepsakes the long arm holds out are the six dead children's ... which are the killer's mementos"**
   (tension). `overreach` (from the lead's tension and R21). `hw2-memory-dolls`: six dolls in the masks of six
   characters, each called "a memory"; "No child names appear in Help Wanted 2". Whose they are is a reading. Fix:
   "the dolls the long arm holds out wear the masks of Freddy, Bonnie, Chica, Foxy, Golden Freddy and the Puppet,
   the six figures the model ties to dead children, ... which read as the killer's keepsakes and not Murray's".
4. **"the crew that built the Pizzaplex found an old elevator shaft"**. `overreach` (R20 has "While the Pizzaplex
   was being built"). As `burntrap` 3. Fix: "a construction crew at the raceway". And the sentence offers
   "something down there pulling power" as the result of the sealing: the record does not say what draws it, and
   the station and the burners are down there too.
5. **"In 1979 the second machine ... answered its injured maker"**. `date`. `secret-of-the-mimic-log-turn-around`
   is "before SotM's present night (year not stated)". Fix: "Before the night in 1979 the second machine ...
   answered its injured maker in the man's own phrases. On that night a trusted voice on a radio was a machine."
6. **"until the real speaker broke in"**, the hero caption **"The end of RUIN"**, and **"Gregory tells Cassie what
   she has switched off."** `branch`. The real dispatcher breaks in only in the Walk Away ending
   (`secret-of-the-mimic-clock-out-real-dispatch`). The elevator is one of RUIN's three endings
   (`ruin-ending-standard`), and the boy's account of M.X.E.S. is spoken in it (`ruin-gregory-mxes-explanation`:
   "Roxy-Talky, elevator (Standard ending)"). What these show to be already so counts on every branch (W10); the
   events do not. Fix: "as one ending shows, when the real speaker breaks in"; "One ending of RUIN: ..."; "In that
   ending's elevator Gregory tells Cassie ...".
7. **"That liar was Murray's first machine, not his second."**, **"the cabinet that houses Murray's first
   machine"**. `unsupported` as cited: both rest on the join in `two-machines` 1. Once that join is made there,
   these stand.
8. **"The lines the Mimic speaks are Gregory's from the Security Breach night ..., so it had sound from the
   building above."** `overreach` (from the outline and R21). `ruin-mimic-reuses-gregory-lines`: "Several" lines,
   two of them named; "reading this as the Mimic having recorded/learned Gregory's voice is inference". Fix:
   "Several of the lines the Mimic speaks are Gregory's ..., which the model reads as its having had sound from the
   building above."
9. `counterEvidence` lists **`secret-of-the-mimic-log-make-a-copy`**. `wrong record`. "Every copy has failed"
   supports the chapter. The record that cuts against it is the one behind the uncited "Fazbear's paper asks for
   Murray's blueprints": `secret-of-the-mimic-work-order-1979`. Swap them, and cite it in the tension.
10. **"A copying endoskeleton from Edwin Murray's workshop"** (answer), and the beat's "It is one of his copying
    machines". `frame` (from the lead's answer). The body is more careful: "most likely M2 itself and not a later
    build from the plans". A later build would not be from his workshop, and R21 (2) rates only "a Murray
    endoskeleton" high. The chapter's last paragraph says it flat again: "The machine that a father built after his
    son died is let out by a child." Fix: "A copying endoskeleton of Edwin Murray's design: most likely his second,
    violent machine itself"; and at the close, "What is let out by a child is, most likely, the machine that a
    father built after his son died."
11. **"Its player is addressed as \"a Fazbear technician\""**. `ruling` (R27: print the kind).
    `hw2-glam-freddy-fazbear-technician` is a question put by a character inside a training level, and R22 lists
    that against. Fix: "A character in one of its training levels asks the player: \"you are a Fazbear technician -
    are you not?\""
12. **"from a level where a cut-out of Springtrap stands in a fire"** (tension). `overreach`, small.
    `hw2-fazerblast-fire-springtrap`: the fire is set at the end of the level before; in this one "the burned
    Carnie powers down" and the cut-out stands behind him. Fix: "from a level, opened by setting the gallery on
    fire, where a cut-out of Springtrap stands behind the burned Carnie".
13. **"It works for the guard and against the prisoner"**. `overreach`. That is the note of
    `ruin-fake-gregory-signal-jammer`, not a claim. The claims: it comes out of the guard's cabinet, it alerts
    animatronics to Cassie, and the voice says it has jammed it. Fix: "The model reads it as part of the guard".
14. `uncited`. **"wired the guard through the building above"**: `ruin-fake-gregory-one-node-left-sealed`. **"the
    secret ending shows the rabbit crushed"**: `hw2-pq4-vanny-crushes-glitchtrap`.
15. `consistency`. **"sees Gregory and {{vanessa}} on a hill"**: `vanny` has "a blonde woman", as the notes of
    `ruin-ending-safe-spot` do, and R19 holds her release loosely; write "the boy and a blonde woman". **"(see
    ((digital)))"** for RUIN's rabbit-shaped figure: `digital` does not mention that figure.
16. `clarity`. **"The number 4625 is in both stories"**: the two are Secret of the Mimic and Help Wanted 2, not
    RUIN; say what it joins (Murray and the guard's cabinet). The caption **"One design, three nameplates"**: three
    cabinets, two names. **"the 1979 game"**, three times, reads as a game from 1979. Two changes from the lead's
    tension are not in the `// REVIEW:` note. The quoted phrase is now "the persona of the character it occupies",
    which is in the record's `quote` field where the lead's was in its notes. And "destroys the rabbit" is now
    "shows the rabbit crushed", as R19 asks. Both are the right call.
17. **"someone else"**. `misquote` (technical): in the `claim` and notes of
    `security-breach-cd46-talking-programs`, not in its `quote`. Exact by the wiki's transcript.

---

## `patterns`: What keeps coming back

**Verdict: minor fixes, one of them a must.** Every echo is quoted exactly and every linked chapter carries it.
The paragraph on the company has a fact wrong.

1. **"What holds the rest together is {{fazbear-entertainment}} ... The horror attraction of the third game
   announces a find"**. `unsupported`, and against the record. `fnaf3-coming-soon-newspaper`: "Local amusement park
   is getting ready to scare your socks off with a new attraction". `fnaf3-it-burns-newspaper`: "A new local
   attraction based on an ancient pizzeria chain". The claim of `scott-fnaf3-steam-description` speaks of the
   attraction's owners. R31 does not count the attraction among the company's acts, and `fazbears-fright` says "A
   local amusement park is about to open". The outline's rule for this chapter is "No new claims". Fix: take the
   attraction out of the company's list ("Thirty years on it is a local amusement park, and not the company, that
   announces a find: ..."), and give the company the example R31 does give it: the indie games it paid for
   (`hw-tape-13-fe-hired-developer`). The closing sentence then still has three instances under it.
2. **"Twice the games show an attempt to stop what comes back"**, and **"Neither was aimed at the copying
   machine"**. `overreach`. The outline has "Two remedies". As a count of attempts, "twice" leaves out what the
   linked chapters tell: the concrete and the guard (`mimic`), the Cradle program (`two-machines`), the burners in
   one ending (`burntrap`), the Scooper in another (`mimic`). The first of those is aimed at the copying machine.
   Fix: "Two remedies are tried, and neither is shown to finish its target. ... Neither was aimed at the copying
   machine, which was walled in and put under guard instead". One thing for the lead: "the next game still has a
   rabbit in the mask" is R19's required sentence. Here it cites `ruin-the-entity`, the figure from the M.X.E.S.
   cabinet, which `mimic` says the model does not identify with the rabbit in the code. `vanny` rests the same
   sentence on the rabbit's shadow in the hideout (`ruin-vanny-hideout-glitchtrap-shadow`). Cite what `vanny`
   cites, or say that the model does not take the two for one.
3. **"A crying girl ... is told \"He's not really dead.\" and \"Follow me.\""**. `overreach`.
   `ffps-fruity-maze-follow-me`, notes: the lines are in two colours, and "which speaker says which line is
   uncertain". The cell also never says what the present is. Fix: "On a minigame's last screen a yellow rabbit suit
   stands behind a crying girl, and the text reads \"He's not really dead.\" and \"Follow me.\""
4. **"the real one gets through late"** (table). `branch`. Only in the Walk Away ending
   (`secret-of-the-mimic-clock-out-real-dispatch`). Add "in one ending".
5. **"A teaser for the third game ... had already read \"He always does.\""**. `uncited`: the support is
   incomplete. The teaser is three words in purple, and its record says that tying it to the purple figure "rests
   only on the text color" (`scottgames-fnaf3-teaser-he-always-does`). What he always does is in the trailer, "He
   will come back. He always does." (`scott-fnaf3-trailer-tagline`), and that record adds that who "he" is "is not
   stated". Cite the trailer, and write "had already read \"He always does.\", of a \"he\" it does not name".
6. **"Under the Pizzaplex there is a door with concrete poured over it"**, in the row "A room that is not on the
   map". `overreach`, small (the instance is in `model.md`'s table). `ruin-concrete-poured-over-door` has a sealed
   door and says nothing of a map. What it matches is the false wall over the safe room's door
   (`fnaf3-tape6-safe-rooms-sealed`), which the table has and the row does not. Add that record, and the fit is
   plain.
7. **"Pizzeria Simulator presents its fire as his end [[ffps-completion-fire]]"**. `wrong record`, in part. That
   record shows the burning. That it is "his end" is in the speech: `ffps-completion-old-friend-hell`. Add it. In
   the same paragraph **"and a copy would say the line too"** (the outline's wording note, set down as it stands)
   has nothing to refer to: the two later speakers of the line are the ones the tension leaves out. Cut it, or move
   it there.
8. **"the character Mr. Hippo says"** (tension). `ruling` (R27: print the kind; W6). `ucn-mr-hippo-just-a-story` is
   a comic monologue, "a meta joke" by its notes. Fix: "Mr. Hippo says, in a comic monologue,".
9. **"They recur too exactly to be accident"** (answer). `frame`. The body does not argue intent; it says "This
   archive reads". Fix: "The model reads them as meant".

---

## The five storyline beats

**Verdict: minor fixes.** Each beat is the lead's text and matches `telling.md` section B. In three places a beat
says more than its chapter does (1, 2 and 6).

1. `s-mimic`: **"Its room holds mascot costumes from Edwin Murray's workshop
   [[ruin-mimic-lair-mcm-mascot-suits]]"**. `overreach`: a secondary source told as fact (from R21, which calls it
   "Shown"). The record's claim is "worn mascot costumes, among them an elephant in a jester outfit". The match
   with Murray's costumes is in its notes, as "The wiki says", checked on one screenshot of the room; the wiki's
   page on the costumes is headed by its own speculation banner. The words "from Edwin Murray's workshop" also
   assert where the costumes came from. The chapter has it right. Fix: "Its room holds worn mascot costumes which,
   by the wiki's comparison, match those of Edwin Murray's workshop".
2. `s-mimic`: **"goes in after him, wearing a mask"**. `overreach`. She is handed it inside
   (`ruin-security-mask-left-by-faz-technician`: "given by the Mask Bot, Chapter 1"; `ruin-mask-bot-helpi-vanni`:
   Monty's Gator Golf). Fix: "goes in after him and is handed a mask ...".
3. `s-mimic`: **"It is one of his copying machines"**. `frame`. As `mimic` 10: "a copying machine of his design,
   most likely the second itself".
4. `s-costume-company`: **`<<1965 to 1977|estimated|…>>`**. `date`. The pill dates the firm's paperwork, not the
   beat. The springlocks and the contract are undated: dating row 3 gives them as relative, "before the 1979
   night". And the mock-up with the prototypes stands on a floor that opened in a July of the 1970s
   (`secret-of-the-mimic-mcm-rnd-floor-opening-memo`), so 1965 is too early for half of what the beat tells. Fix:
   "Before the night in 1979", kind `relative`, with the paperwork's years kept in the basis as the years on the
   firm's own paper. The part's kicker "1965 to 1979" has the same trouble.
5. `s-costume-company`: **"prototypes of its bear and its rabbit, Fredbear and Spring Bonnie"**. `overreach`. The
   names are file labels (`springlocks` 3), and "its" assumes the diner the sentence is arguing for.
6. `s-two-machines`: **"It sounds like his son [[secret-of-the-mimic-log-incident]]"**. `overreach`. The record:
   "Edwin shouts at something that it isn't 'him'". It names neither M2 nor David. The chapter keeps this under
   "Most likely these are one story"; the beat marks only the rage. Fix: "In one recording he shouts at something,
   \"Stop sounding like him!\", and in another he tells M2 that he lost his temper." Also "at M1's urging"
   (`two-machines` 4).
7. `s-two-machines`: **`when: "Before 1979"`**. `date`. The records say "before SotM's present night (year not
   stated)", and dating row 7 puts M2 and what followed between the boy's death and the night, with no year.
   Nothing puts any of it before January 1979, and the beat's last quotation is of the night itself. Fix: "Before
   the night in 1979". The answer of `springlocks` has the same "before 1979", where its body has "earlier than the
   night in 1979".
8. `s-1979`: **"It is M1 [[secret-of-the-mimic-f10n4-reveal]]."** `unsupported` as cited (`two-machines` 1).
9. `s-1979`, `s-pizzaplex`: confidence. `frame`. `schema.ts` defines a beat's confidence as "The weakest link the
   beat depends on". `s-1979` is high and carries "most likely William Afton" (R2 (4): medium) under a title that
   makes the letters the company's. `s-pizzaplex` is medium and carries two readings at low-medium. The lead's note
   rates "what happens in it". One of the two rules should give way in writing. All five beats also run to six or
   seven sentences, where the schema says two to five.
10. `s-1979`: **"Letters signed \"W.A.\" tell Murray ... and ask for his staff's contact details"**. `overreach`.
    The second message goes to an insider, not to Murray (`secret-of-the-mimic-mail-staff-contacts-wa`; R2 (3)).
    Fix: "and ask an insider for his staff's contact details".
11. `s-pizzaplex`: **"The company's largest building"**, **"three hidden arcade games"**. `no record`. No record
    says largest, and "hidden" is not in `security-breach-ending-redemption`.
12. `s-mimic`: **"The real Gregory tells her what she has done"**. `branch`, small. As `mimic` 6: the words quoted
    are spoken in the elevator of one ending (`ruin-gregory-mxes-explanation`). What he says of the machine's past
    stands on every branch; that he says it does not. Of the three beats here that tell a game with several
    endings, this is the one that does not say so. Fix: "In one ending the real Gregory tells her what she has
    done: ...", and a closing clause, "RUIN ends three ways, and the model does not choose".

---

## The ten most serious findings

1. **`patterns` 1.** Fazbear's Fright is given to Fazbear Entertainment. The records say "Local amusement park",
   and so does the chapter on the attraction. It is the plainest case in the six chapters of a sentence that a
   record contradicts.
2. **Beats 1.** "Its room holds mascot costumes from Edwin Murray's workshop": the wiki's comparison, told as fact
   in the storyline, where the chapter itself says whose comparison it is.
3. **`two-machines` 1, `mimic` 7, beats 8.** That the cabinet F10-N4 is M1 is said flat in three places and cited
   to a record that does not say it. No record does. The join is sound and must be made in the open, once.
4. **`burntrap` 1.** "It is not the endoskeleton sealed below", flat, in the answer. The ruling rates it medium,
   and the next chapter writes "most likely not".
5. **`mimic` 1.** "it reaches a child's radio outside the building": the record has a message that brings her in.
   It does not say what carried it or where it found her, and the radio she uses is one she finds inside.
6. **`mimic` 2 and 3.** Help Wanted 2's join is told as meant, where the ruling says medium; and the dolls are told
   as "the six dead children's" and "the killer's mementos", where the record has masks and the word "memory".
7. **`burntrap` 3, `mimic` 4.** "the people who built the place": the messages come from a later construction crew
   at a raceway that had been open, with guests, and was closed before the work began, by a record filed under the
   same chapter.
8. **`burntrap` 2.** Scott's remark is quoted without its "Originally" and then carried on to "something else works
   it", which the remark does not say.
9. **Beats 4 and 7, `mimic` 5.** Three dates say more than the records: the years on the firm's paperwork as the
   date of the springlocks, "Before 1979" for before the night, and "In 1979" on an undated recording.
10. **`partners` 1, `two-machines` 2.** Two chapter openings state an attribution flat that their records call
    implied or take from the wiki: who the "old friend" is, and whose voice is on the birthday reel.

## Counts

70 findings: `springlocks` 9, `two-machines` 10, `partners` 7, `burntrap` 6, `mimic` 17, `patterns` 9, beats 12.
Each numbered item is counted once, under its main type; some hold two or three small points.

| Type | Count |
|---|---|
| `overreach` | 30 |
| `frame` | 6 |
| `unsupported` | 4 |
| `date` | 4 |
| `uncited` | 4 |
| `consistency` | 4 |
| `branch` | 4 |
| `misquote` (technical) | 3 |
| `no record` | 3 |
| `ruling` | 3 |
| `clarity` | 3 |
| `wrong record` | 2 |

Twenty-two of the 58 chapter findings are inherited, in whole or in part, from the outline, a ruling's wording
or one of the lead's own fields, and are marked. The twelve beat findings are all on the lead's own text.

## Noticed outside the assignment

- **Records that are wanted, or want tidying.** One that states, from the game, that the cabinet F10-N4 is the
  first machine: today the join is in two notes, and in the title of `secret-of-the-mimic-mail-received-5-min-ago`
  ("M1's message"), whose own notes say "Sender unsigned". One for the marriage. The look of the two yellow
  prototypes, so that the names need not come from file labels. In `secret-of-the-mimic-previous-technicians` the
  title says M2 put the bodies in the suits and the claim does not. In `ruin-ending-safe-spot` the claim names
  Vanessa and the notes say "a blonde woman". The notes of `ruin-mimic-lair-mcm-mascot-suits` end on a conclusion
  ("the firmest in-game tie") that rests on the wiki's comparison. The `quote` fields of five records stop short of
  words the chapters quote (`springlocks` 8, `two-machines` 10, `mimic` 17).
- **Wording to mend at the source.** R20: "While the Pizzaplex was being built". R21: "reaches a child's radio
  outside the building", "The memories the arm keeps are the six children's", "Shown: its room holds Murray's
  mascot costumes", and "(the cabinet F10-N4)" with no record under it. R2, in `model.md`: "If either fails", of
  the two assumptions behind 7 September. The order of events, step 28: "among Murray's costumes", marked firm. The
  outline for `two-machines`, point 2: "it is the mind in the cabinet F10-N4".
- **The thesis.** `patterns` closes on the thesis's first sentence. If Fazbear's Fright leaves the company's list,
  the support the thesis chapter gives for "a company that keeps putting it back on stage" is worth a look. It is
  not in this assignment.
- **Lengths.** `schema.ts` asks for an answer "in one or two sentences". Four of the six run to four, five or six
  (`two-machines`, `partners`, `burntrap`, `mimic`), all of them the lead's final text. With the beats (beats 9)
  and the tensions (`springlocks` 9), that is three length rules the text does not keep. Either the rules or the
  text should move.
- **Repetition, read as a reader.** "We've been trying to get ahold of you all night." is quoted in three of the
  six chapters, "Every copy has failed" three times (twice in `mimic`), "prisons of my making" six times (four in
  `partners`), and "legally ours" in all three chapters of the first part. Each use is exact. By the third the
  reader has it by heart.
