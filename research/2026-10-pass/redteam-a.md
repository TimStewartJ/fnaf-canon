# Red-team report A: the classic era and the family

Rulings reviewed: R1, R3, R4, R5, R6, R7, R8, R9, R10, R11 and R29.

**What was reviewed.** `model.md` as it stood at 21:45 on 2 October 2026 (md5 `097b36856c1a0fb0679c99c79723f4ad`),
and `rulings-brief.md` of the same minute, because that is the wording writers will be handed. The model changed
three times while I worked. One of those changes (R3's "one house" row and the paragraph after the table, and R4's
"note on the two clusters") answered a finding I had already drafted: that the facility's map draws the 3D house
and the 8-bit house as separate places. I have left it out, except where its consequences were not followed
through.

**What was done.** Every record the eleven rulings cite was opened in the JSON: 212 distinct records, four of
them `implied`. Nine of the archive's images were looked at directly: the Private Room at 4 AM, the three monitor
textures, the desk plush with its handset, the breaker map, the Obsv.2 comparison, the breaker panel in play, the
Extras map, FNaF1's four clippings and the SAVE THEM map. Four wiki pages were read as transcripts only (three
on the Private Room and its keypad; Help Wanted 2's achievements, for the graveyard order). For consistency I
also read sections 1, 2.0, 3, 5.1 and 6 of the model, rulings R12, R14 to R16, R24, R25 and R30 to R32, and the
contested-question sections of four memos (fnaf123, fnaf4-sl, ffps-ucn, scott).
Limits: I did not watch the gameplay captures or check any audio, so the two things that rest on them (which
cluster is Obsv.1 and which Obsv.2; the flatline) are taken from the records.

**What held under a real attack.** R1 as a whole. R4's ruling that FNaF4's bite is not the Bite of '87. R8's
account of the incident, its date before the 1987 restaurant, and its place. The count that keeps the crying
child out of Golden Freddy's place (R6, R8). R11's case that "a yellow one" is the bear, at the low-medium it
claims. In R3, everything the table lists as "shown" is shown.

---

## R1. The killer's identity chain

**Verdict: holds.**

Every link's records say what the table uses them for. Two notes.

1. Link e is the one link that could be resting on a sprite's colour, which W8 forbids. It does not need to. The
   five ghosts corner that figure (`fnaf3-n5-ghosts-safe-room`), and the Cassette Man says the wound was inflicted
   by the man he sends to Hell. But the record that says so, `ffps-insanity-wound-first-inflicted`, is not in
   link e's list, and it is the only join between William and the child outside that is not a colour.
   **Fix:** add it to link e, and say in the table that the join is the ghosts and the tape, not the purple.
2. `scottgames-fnaf3-teaser-he-always-does` is tied to the purple figure "only on the text color" (the record's
   own note). It is harmless as a third citation. **Fix:** do not let a chapter lean on it.

---

## R3. FNaF4's household

**Verdict: holds with changes. Statement 2 should be "medium", not "medium, upper end"; statement 3 "medium,
lower end".**

On the questions asked. Each "shown" item is shown: the room is labelled "Private" on the Extras map; the three
views are the bedroom from a high corner, the bed with its pinwheel quilt and the hallway with its chair, all
empty; the plush and a grey handset with antenna, keys and grille are on the desk; "Obsv.1" is readable on the
panel; the three faint clusters and their dots are on the map. The table is honest about the keypad. In the
archive's screenshot the keys carry no readable numerals, and the digits rest on the wiki (the two pages I read
that mention the code give it as 1-9-8-3). The step from "watched" to "his own family's house" is the better
reading. But of its five supports two do not hold (problems 3 and 4), a third fits only in part (6), and its
reply to the alternative fails (5), so "upper end" is not earned.

1. **Statement 1 says more than the table under it.** "Afton's company kept that house under observation. Shown."
   is in the past tense, calls the rooms "that house", and says the two "Obsv." systems have outlines that "match
   FNaF4's house". The table marks all three as inferred: that anyone watched in 1983; that the 3D rooms are the
   family's house; that Obsv.2 is the house (`sl-breaker-map-obsv2-house-layout`, an `implied` record), while
   Obsv.1 is read as a street and a restaurant (`sl-breaker-map-obsv1-layout`). The overstatement has already
   travelled: section 5.1 row 3 has "Afton's company watched that house (high)", and the brief says "'Afton's
   company watched that house' may be stated". **Fix:** statement 1 becomes "Afton's facility has FNaF4's rooms on
   its monitors, with that toy and a handset on the desk: shown, in Sister Location's own time". "The child was
   watched in 1983" moves to the inferences with a confidence of its own.

2. **The model's own order leaves nowhere to watch from in 1983.** The Private Room is in "Circus Baby's
   Entertainment & Rental" (`sl-extras-map-entertainment-and-rental`), a business HandUnit dates after "the
   unfortunate closing of Freddy Fazbear's Pizza" (`sl-handunit-freddy-fazbear-closing`). Section 3.2 puts that
   closing at step 10 and the underground rental at step 11, both after the 1983 week at step 7, and says a later
   place is equally allowed. No record makes the room older than the business. Yet step 7 reads "watched from his
   father's company", and R5 has the toy worked from that desk in 1983. I found no memo that raises this.
   **Fix:** say in R3 that Sister Location shows the apparatus years later; that "in 1983" needs either a
   watching post older than the business that houses it, or the five and Circus Baby's venture before 1983; and
   that no record chooses. Take "watched from his father's company" out of step 7, or mark it inferred.

3. **One of the "records for statement 2" misdescribes two records.** "The child is left at, and locked into, the
   restaurant by a 'he' who belongs to it". `fnaf4-left-behind-at-diner` has an unnamed "he" who left without him
   (the record tags the brother) and says nothing about belonging to the restaurant. `fnaf4-locked-backstage`
   says "Who locked him in is not shown." **Fix:** "he is left there alone, and two days later is shut in a staff
   parts room; by whom is not shown".

4. **The plush's "household talk" does not separate the two readings, and on R5's own account most of it is not
   the toy speaking.** Anyone watching those rooms would know what the brother does. Of the three lines cited,
   `fnaf4-he-hates-you` is spoken in the restaurant, where no plush is drawn (`fnaf4-plush-follows-child`), and
   `fnaf4-plush-locked-in-room` appears over the eyeless sprite on a black screen (`fnaf4-plush-eyes-by-scene`).
   R5 gives the restaurant lines to the child's own mind and uses pupils as its sign that the toy is live.
   **Fix:** drop this bullet as support for statement 2.

5. **The reply to the alternative fails.** "It gives Sister Location's corrective nothing to correct" assumes the
   misconception was about whose house it is. Scott never named it (`scott-2017-sl-cleared-fnaf4-misconception`),
   and the Scott analyst's verdict was that his words "cannot choose between the year and the nature of the
   house" (memo-scott 2.2). With a stranger's child in that room the Private Room still corrects two things: the
   year, and the idea that the nights were only a dream. **Fix:** delete the sentence.

6. **The family's shape fits only in part.** Sister Location gives Afton one son and one daughter. FNaF4's house
   is drawn with two bedrooms, one of them pink, for what the model counts as three children (`fnaf4-house-rooms`;
   `fnaf4-second-bedroom`: "The brother's room, if this is not it, is never drawn"). The fit needs a third Afton
   child whom no game mentions. One record about fathers is cited nowhere in the model: the only "Daddy" in FNaF4
   belongs to another child, and he knows the rabbit's springs ("He is a finger trap, he says",
   `fnaf4-spring-bonnie-plush-finger-trap`). **Fix:** call the shape "compatible", and list that child as a loose
   end.

7. **The best readings in which the house is not his**, for the chapter's named alternative.
   - *A household under study*: someone else's child. The ruling has this.
   - *Rooms built to be observed.* The label "Obsv."; systems that run off the facility's own breaker panel;
     lines joining each cluster to the facility; exactly one white dot in each cluster; a third cluster that is
     only the Plushtrap corridor (`sl-breaker-map-corridor-cluster`); empty rooms; and Scott's trailer, "DEEP BELOW
     GROUND / WHERE MEMORIES SLEEP" (`sl-trailer-deep-below-ground`, cited nowhere in the model). This reading
     removes problem 2, at the price of taking the nights out of the 1983 week, which R4 clause 2 needs.
   - A test of the supports, not a proposal: *the partner's household*. R2 ties "the diner" to Hen, and the
     Cassette Man also has a daughter. So "a girl's room" and "a child with the run of the restaurant" fit him
     as well as they fit Afton. No record supports this reading; it shows that those two supports pick out
     nobody.

   What does favour Afton: cameras in a child's bedroom and over his bed are easy only in one's own house; "put
   back together" is the plush's promise and later the father's errand (`fnaf4-i-will-put-you-back-together`,
   `sl-golden-freddy-cutscene-put-her-back-together`); and Sister Location is the game about his children. That is
   a real case, and it is a medium one.

8. **Statement 3 is a chain.** It needs statement 2, the child's death (R6: implied only) and Afton having no
   other son. It never says why Michael is the bully and not the boy who was bitten; the answer is R6. **Fix:**
   "medium, lower end", with R6 under "Depends on".

9. **The branch.** R3 does not say that the Private Room is entered only in the ending the Real Ending overrides.
   R27 covers it. **Fix:** one cross-reference in R3.

---

## R4. FNaF4's nights, the Nightmares, which bite

**Verdict: holds with changes. "The nights are events in it" should drop from medium to low-medium.**

1. **The camera proves the room, not the nights.** "A pure dream has no camera in the corner" shows that the
   bedroom is a place. It does not show that what is played there happened. The ruling itself gives Night 6 to
   "the same terror continuing in a dying child", so the same play has two explanations, one each side of the
   Bite. Records the ruling does not weigh: the game's own name for the attackers is "Nightmare"
   (`fnaf4-nightmare-animatronics`); two more nights follow the scene in which the child fades
   (`fnaf4-locked-box-ending`, `fnaf4-night8-no-story-text`); the record does not limit the bedside items to the
   nights after the Bite (`fnaf4-bedside-items`); and a reversed call from FNaF1, a later year, plays in the room
   (`fnaf4-reversed-phone-guy`, cited nowhere in the model). **Fix:** add these to "against", rate "events in it"
   low-medium, and say which nights the model counts as story.

2. **The dots are used as evidence and then disowned.** "Records for" has one white dot with four grey dots
   round it as tracked things; a note further down says the dots "do not say when anyone was in that bed". The
   reading also fails on the map. The corridor cluster has five grey dots where FNaF4 has one Plushtrap
   (`sl-breaker-map-corridor-cluster`, `sl-breaker-map-dots`), so grey is not "one machine". The technician is not
   marked in the facility on the night the map is shown, so white is not "a person present". **Fix:** move the
   dots from "Records for" to what is open.

3. **The dependence on R16 is wider than stated.** "This time, there is more than an illusion to fear"
   (`ucn-nightmare-fredbear-lines`) is said to UCN's player. With William in that office it can mean the illusion
   was his work. With Michael there, which R16 keeps as its main alternative and section 6 lists as the first
   open risk, its plain sense is that the listener once faced the illusion, and the nights become the brother's.
   So clauses 2 and 3 lean on R16, not only "the illusion was William's". **Fix:** say so under "Depends on".

4. **Problem 2 of R3 applies.** "A real room that Afton's facility could watch" is true of Sister Location's
   time. Whether it could in the week of the bite is not shown.

5. **Clause 4 stands at high, without one citation.** `scott-2017-matpat-final-theory` shows Scott treating "1983
   vs 1987" as a misunderstanding. Which way it resolves is in a theorist's video, and the record's own note says
   not to encode the video's claims. **Fix:** cite it for "he treated the conflict as a misunderstanding" only.
   The television, "closed for years" and the page-source digits carry the direction.

**R4 to R6 against each other.** Whether he dies: consistent (R6 medium-high; the brief now marks it inferred),
apart from Nights 7 and 8. What the Nightmares are: not consistent inside R4 (problem 1), and the dots are read
as machines in one place and as nothing in another (problem 2). Who has the nights: R4 says the crying child,
on a UCN line that points to the brother if R16 flips (problem 3).

---

## R5. The Fredbear plush

**Verdict: confidence should change. Low-medium that the toy is a device spoken through; low that the voice is
William's.**

1. **By the ruling's own split, most of its evidence is not the toy speaking.** "The plush's knowledge is a
   watcher's" cites `fnaf4-left-behind-at-diner`, a restaurant line of the kind this ruling assigns to the child's
   head, and `fnaf4-plush-locked-in-room`, which is shown over the eyeless sprite. The lines themselves appeal to
   what the child already knows: "You know he is hiding again", "You know what will happen if he catches you",
   "Don't you remember what you saw?" (`fnaf4-plush-he-is-hiding-again`, `fnaf4-fredbear-suit-employee-chase`,
   `fnaf4-dont-you-remember-what-you-saw`). The first line is a question: "What did he do this time?" The one
   line that shows foreknowledge, in the child's own bedroom, is not cited: "Be careful.", just before the
   brother comes out from under the bed (`fnaf4-plush-be-careful`). **Fix:** rest the list on
   `fnaf4-plush-he-is-hiding-again` and `fnaf4-plush-be-careful`, and say the rest are equally the child's own.

2. **One voice, two mechanisms.** The text has one colour and one manner throughout
   (`fnaf4-speaker-text-colours`). The model has a radio toy at home and a remembered voice everywhere else. "The
   child's own mind" covers every line with one mechanism and loses only on the desk in Sister Location.
   **Fix:** present it as level with the device reading, and drop "it is what Sister Location was made to
   correct" (R3, problem 5).

3. **Night 6 breaks the pattern the ruling relies on.** Pupils "where it shares a room of the house with the
   child, and at Night 6". Night 6's scene is on black, after the Bite, when R4 says he "cannot be at home in
   bed" (`fnaf4-night6-fade-order`). Either the toy went with him, which nothing shows, or pupils are not the sign
   of a toy being worked. **Fix:** say which.

4. **The handset is unlabelled and late.** The wiki page I read calls it a "remote control"; the record allows a
   radio, a phone or a remote (`sl-private-room-handset-beside-plush`). It is seen in a facility that, on the
   model's order, is not yet there in 1983 (R3, problem 2).

5. **`scottgames-site-fnaf4-property-of-fr` does no work here.** The teaser shows a hat and a bow tie, the text
   is incomplete, and the record tags the nightmare bear. **Fix:** remove it from "Records for".

6. **A clash with the thesis.** If the father says "I will put you back together" over a dying son c. 1983, his
   project begins before the five on the model's own order. The thesis has him set out "on purpose" after
   hauntings nobody designed. **Fix:** keep the phrase as an echo; do not call it "the father's phrase".

---

## R6. The crying child after the bite

**Verdict: holds.**

1. **"Nothing more ties him to the yellow bear" is contradicted by R11.** R11 makes the yellow bear suit of
   FNaF1 and FNaF2 "the second of the two springlock suits", which is the stage bear
   (`fnaf3-stage01-fredbear-spring-bonnie`, `fnaf4-the-bite`). On the model's own rulings, the suit that becomes
   Golden Freddy is the one that bit him. **Fix:** list it as a fourth lead.

2. **After R16, "one presence that is both" is the strongest alternative, and the ruling should name it as
   such.** With William as UCN's player, and with R4 and R5 making him the author of the illusions and the voice
   of the toy, UCN's Nightmare lines read as that child's answer to him. R16's own table says they "fit the man
   with the monitors and the handset", and concedes that "nothing ties that child [the fifth] to FNaF4's
   Nightmares except the colour of a bear". The count still decides, and I could not break it: five lured, five
   ghosts, six graves, six dolls. **Fix:** keep "no record places him", and say which way UCN's records lean.

3. **Nights 7 and 8 come after his death scene.** See R4, problem 1.

---

## R7. The Cassette Man's daughter and the Puppet

**Verdict: confidence should change for the order: low-medium. The rest holds.**

On the question asked: "before the five" follows from one sentence. The other two records cited for it do not
order her death against theirs, and the two records against it agree with each other.

1. **Only the tape orders her death.** `ffps-insanity-wound-first-inflicted` is the single record. I think the
   model reads it rightly: his loss came first and "all of this" followed. But the record's own note calls the
   step an inference, and "all of this" is not "the five".
2. **The other two cited records do no ordering.** Give Gifts puts her death before the masks, as the ruling
   admits. `ffps-security-puppet-no-tear-streaks` orders her death against the Puppet's look in FNaF2 and says
   nothing about the five.
3. **The counter-records corroborate each other, and R25 uses one of them the other way.** Withered Chica says
   "I was the first" (`ucn-withered-chica-toysnhk`). Help Wanted 2's order begins with Chica and ends with the
   Puppet (`hw2-pq4-graveyard-order`). R25 cites that order as one of its "four weak pointers" that Chica's
   child was first. R7 sets the same order aside because "the game does not say the order is an order of
   deaths". If it supports Chica first, it puts the Puppet's child last. **Fix:** one rule for that record in
   both rulings.
4. **Whose eyes the death minigames are seen through.** R9 reads SAVE THEM's bodies as the earlier five, "seen
   in the building the older Freddy now walks". A machine that sees the five where they never lay is carrying a
   child's memory. By that rule Take Cake's Freddy is already someone when the child outside dies.
   **Fix:** state one rule for the four minigames.
5. **Uneven standards.** R12 gives Elizabeth's place "low" and "convention" on one sentence of HandUnit's. This
   order has one sentence too. **Fix:** "before the five: low-medium; the model's convention, with one sentence
   behind it". The thesis's "then" keeps its hedge.
6. **"Where."** "That is not the 1987 building, where Freddy sits in the back" identifies a building from a
   sprite, and SAVE THEM puts the same sprite walking the 1987 building. **Fix:** keep "no game names the place"
   and drop the exclusion.

---

## R8. The five children and Golden Freddy

**Verdict: holds with changes.**

1. **"The bodies went into the suits": medium, and its records against are missing.** The older models were
   "partly retrofitted" and are "used for parts" in 1987 (`fnaf2-call2-older-models`). Police were called over
   the blood and mucus (`fnaf1-news-sanitation`). Yet "the bodies themselves were never found"
   (`fnaf1-news-charged-vs-convicted`). And the sentence puts five bodies into four mascots. **Fix:** add these
   under "against (5)", rate it medium, and write "the mascots carried the signs of it; where the bodies went is
   never shown".
2. **The arrest, taken with R12.** If the caught man is William (point 6), then on R12's convention a man
   publicly charged over five children goes on to pitch children's robots to a board under his own name, and
   puts that name on a company (`sl-intro-mr-afton-board`, `sl-extras-map-entertainment-and-rental`). Each ruling
   is low by itself. Together they are the least likely pair in the order of events. **Fix:** tell the arrest
   as "a man was caught and charged", and build nothing on his being Afton.
3. **June 26 is printed for two children.** `fnaf1-news-kids-vanish`: "Two local children... on the night of June
   26th". Five are "now linked to the incident" in the later clipping. Dating row 13 has "The five are lured and
   killed | June 26". **Fix:** "two reported lured on June 26; five linked to the incident".
4. **The June argument has an in-game record against it.** `fnaf2-call1-summer-job` is a line of FNaF2's first
   call. R24 files it as "sales copy, and the game wins", which is true of Scott's FNaF1 store text and not of
   this. FNaF2 contradicts itself and the model prefers the cheque. **Fix:** list it under R8's records against,
   and correct R24's description.
5. **`fnaf4-pigtail-girl-hide-your-body`** ("they come to life at night... they hide your body") is said c. 1983
   and is used only in R31. It is the one FNaF4 line that sounds like the aftermath of the five. **Fix:** cite it
   where the ruling says a year before 1983 is allowed.
6. **Golden Freddy, with William in UCN's office.** The fifth child is still the best single reading, on the
   count. "Medium-high" is right for the pattern (four and one) and too high for "the yellow bear is that
   child". See R6, problems 1 and 2. **Fix:** split the two.

---

## R9. 1987

**Verdict: holds with changes.**

1. **The model has a culprit, a suit and an investigation, and no act.** With all five before 1987 (R8), no
   second five (point 2) and "used" not "wore" (R11), nothing is left for the suit to have been used for, or for
   the Night 4 investigation to be about. **Fix:** one plain sentence in the chapter that the model cannot say
   what was done in November 1987.
2. **The Bite's place omits an alternative the analyst raised.** A bite early in 1987 at the old location, among
   the older four that FNaF1's sentence is about (`fnaf1-call1-bite-of-87`). "They even let them walk around
   during the day!" would then be the new models' exception, and "even" suits one
   (`fnaf2-call1-walk-around-during-day`). memo-fnaf123 2.10 says it "cannot be excluded". **Fix:** list it under
   "against (4)".
3. **SAVE THEM is read two ways.** Its bodies are a memory carried into the building (point 2). Its purple
   figure and his chest mark are treated as a fact about who was in that building in 1987, in the "noted, not
   adopted" paragraph (`fnaf2-save-them-purple-figure-chest-mark`). **Fix:** one status for the minigame.

---

## R10. The shadow figures

**Verdict: holds.**

1. "In the killer's colour" is the argument W8 forbids. **Fix:** "purple, for what a colour is worth".
2. "The Cassette Man describes that sequence as a lure" overstates `ffps-insanity-trap-again`, whose note says
   the tape "does not say that is what it means". R15 and R30 read the same sentences as the taking of what the
   children had left. If both are meant, the taking happens on the nights he dies, after the Funtimes already
   exist at step 11. **Fix:** "can be read as", and one sentence on how the two readings sit together.
3. `fnaf3-office-slumped-bear` is the dark bear here and Golden Freddy's presence at the attraction in R16. The
   record says its colour cannot settle which. **Fix:** use it in one ruling.

---

## R11. The yellow suit and the retcon

**Verdict: holds with changes. Low-medium is right for the suit. "Medium that the yellow suit is not the retcon"
is too high.**

On the question asked: the new position is consistent with R8 on its face (the rabbit for the five and for his
death, the bear in 1987). The weakness is that both rulings lean on the same undated tapes.

1. **The date that decides the suit was derived from the suit.** `fnaf3-tapes-freddy-fazbears-pizza` dates the
   tapes before 1987 on this basis: "by November 1987 the yellow suit is only 'a spare in the back'". Dating row
   15 repeats it. That argument holds whichever suit the spare is. If the spare is the rabbit, the sealing comes
   after 1987. So the tapes' date cannot then be used to rule the rabbit out. The other reason given, "several
   working locations", fits no period better than another, and tape 6's "budget restrictions"
   (`fnaf3-tape6-nothing-taken-out`, notes) echoes the "much smaller budget" that follows 1987
   (`fnaf2-news-reopen-smaller-budget`). **Fix:** say that the tapes' date and the suit's identity are one
   assumption, not two supports.
2. **Tape 4 retires both suits together.** "The classic suits are being retired to an appropriate location". If
   "nothing is being taken out" fixes the rabbit in the sealed room, it fixes the bear there too, unless the two
   were kept apart. The room shows only the rabbit (`fnaf3-n5-ghosts-safe-room`). **Fix:** state the extra
   assumption.
3. **"Used" and the gloss pull apart.** The plain sense of "someone used one of the suits" is that someone wore
   it. The gloss, that the fifth child is in that suit, needs it not worn. **Fix:** do not print the gloss
   beside the call.
4. **The retcon table's fifth column has no record.** "Not argued about in 2017" is a recollection of the fandom,
   for every row. And "medium that the yellow suit is not it" rests on a suit ruling rated low-medium.
   **Fix:** mark the column as unsupported or drop it; "low-medium".

---

## R29. Midnight Motorist

**Verdict: holds. "The driver is William Afton" should be low, not low-medium.**

1. The only link is the car's colour, which W8 rules out as an identification, and in this minigame the ordinary
   traffic glows purple too (`ffps-midnight-motorist-secret-drive`, notes). The driver is yellow. **Fix:** low;
   and R3 should not count it, even as weak corroboration.
2. The figure by the television speaks in grey, the colour of the brother's lines in FNaF4
   (`ffps-midnight-motorist-grey-person`, notes). If this is the killer's house, that makes the boy behind the
   door the younger child, against the ruling's "more plausibly the older brother". **Fix:** give both.

---

## The five changes that matter most

1. **Sister Location shows the watching post in its own time (R3, R4, R5).** Reword R3's statement 1, section
   5.1 row 3, step 7 of the order and the brief's licensed sentence so that none says the child "was watched" in
   1983 as a fact. State the open problem: on the model's own order the facility's business begins after a
   Freddy's closed, after 1983.
2. **R3's statement 2 to "medium", R5 down a step.** Repair the "he who belongs to it" bullet, drop the plush's
   household talk and the "nothing to correct" reply, and rebuild R5 on the two lines spoken inside the house
   (`fnaf4-plush-he-is-hiding-again`, `fnaf4-plush-be-careful`).
3. **R7's order to low-medium**, called a convention as R12 calls Elizabeth's, with one rule for
   `hw2-pq4-graveyard-order` in R7 and R25.
4. **November 1987 (R8, R9, R11, R6).** Say plainly that the model has no act for the suit and the
   investigation. Say that the tapes' date and the suit's identity are one assumption. Add to R6 that R11's bear
   is the bear that bit the crying child.
5. **Mark the inferences where the story is told.** In the order of events and the thesis: the bodies in the
   mascots, Afton as the man in the costume on June 26, "watched from his father's company", and a costume for
   the daughter's killing. Do not tell "the caught man was Afton" and "Circus Baby's follows the five" in one
   sequence.

---

## Problems noticed in the storyline, thesis and brief

No outline, style guide or exemplar chapter was in `model.md` when I reviewed it. "Storyline" below means section
3.2 and the brief's "Order of events".

- **Thesis paragraph.** "...kills in the company's costume: his partner's daughter, then five children". No record
  puts a costume on the daughter's killer; Take Cake shows a figure from a car
  (`fnaf2-take-cake-to-the-children`). "...whose bodies go into the mascots" is stated flat against the table's
  "never shown".
- **Section 3.2, step 7.** "Watched from his father's company" carries no mark; R3's table has it as inferred.
- **Section 3.2, step 8.** "F" covers "William Afton... lures", "the bodies go into the four mascots" and "the
  Puppet gives the dead children the mascots' masks". The first is R1's link e (strong), the second is R8 point 5
  (never shown), the third is a reading of Give Gifts. The brief's step 8 has the same fault.
- **Dating row 13.** "The five are lured and killed | June 26": the printed date belongs to two children (R8,
  problem 3).
- **Thesis, recurring ideas.** "A room that is not on the map" cites `sl-private-room-restricted`; the room is
  labelled "Private" on the Extras map (`sl-extras-map-entertainment-and-rental`). What is off that map is the
  three faint clusters. "The trusted voice that is a machine" lists the plush; under R5 the voice is a person
  with a handset.
- **R24.** "Summer job" is called sales copy; FNaF2's is a line of the game (R8, problem 4).
- **Brief, R3.** "'Afton's company watched that house' may be stated" (R3, problem 1).
- **Brief, R5.** "Where no toy is drawn, the voice is the child's memory of it" is stated with no confidence;
  in the model it is a concession to the rival reading.
- **Section 5.1, row 3.** "Afton's company watched that house (high)" (R3, problem 1).
