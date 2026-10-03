# Red-team report C: the makers, the modern era and the scope

Rulings reviewed: R2, R18, R19, R20, R21, R22, R23, R26, R27 (with the rules of weight W1 to W9), R31, section 4
and the thesis in section 1.

**What was reviewed.** `model.md` as saved at 21:45 on 2 October 2026 (md5 `097b36856c1a0fb0679c99c79723f4ad`)
and `rulings-brief.md` of the same minute, because that is the wording writers will be handed. While this report
was being finished the adjudicator began revising the model in answer to group A, and the file changed several
times. My last check was of the file saved at 22:44 (md5 `711327e16d3ea81a16b9c69ef5370565`). In it R2, R18 to
R23, R26, R27, R31, section 2.0 and section 4 were unchanged, word for word. What had been revised: the thesis
paragraph and some rows of its two tables; steps 6 to 9, 11 and 12 of section 3.2; rows 12, 13 and 15 of the
dating table; and the entries of sections 5 and 6 that concern group A's rulings. The thesis section below is
written against the revised paragraph. This report cites none of the revised steps, rows or entries, except step
8 once. Every sentence quoted from the model was checked against the 22:44 file. The model holds no outline,
storyline prose, style guide or exemplar chapter yet, so the thesis, section 3.2, the dating rows that rest on
my rulings and `rulings-brief.md` were treated as the storyline.

**What was done.** Every record these rulings cite was opened in the JSON (309 distinct ids, all of which
resolve). The contested-question sections of `memo-hw.md`, `memo-sb-mimic.md` and `memo-scott.md` were read.
`people.ts`, `games.json` and the RichText renderer in `components/ui.tsx` were read for R26 and for the dates.
The wiki was used only to look at what a screen shows or to read a transcript: both of Arnold's work orders,
his credential form, the diner poster and Security Breach's two diner-poster collectibles, pages 3 and 4 of the
rooftop ending, the Costume Manor termination memo, and the pages Mailboxes, Dispatch, Endings and the cast
credits of four games. A finding that rests on one of those looks is marked "(seen)". The wiki's own
interpretations were not used.

**Limits.** No footage was watched and no audio was heard. What can be read in play on the props in the van, and
what Scott says by ear in the 2024 interview, are as unchecked by me as by the adjudicator. Nothing below rests on
what I remember of the lore.

**What held under a real attack.** The year 1979 and the month-first reading of the work order. That Murray's
Costume Manor was Fazbear's contractor. The four links that make Ness the earlier Vanessa, and Help Wanted's
player the woman on the hidden call. Two machines, not one, in Secret of the Mimic. That M.X.E.S. is Murray's
technology. That Gregory is a human boy and that his background is
left open. That Into the Pit's events stay off the timeline and its year dates nothing. The frame ruling in R18:
the earlier games' events are real, and "the games are the cover-up" is strong, not canon. Tiers 1 and 3 of the
labels ruling. The company's conduct from 1987 onward.

**Verdicts.**

| Ruling | Verdict |
|---|---|
| R2 "Hen", "W.A.", the date | holds with changes; (4) should fall to low, and "partners" from strong to medium |
| R18 The frame; the rabbit in the code | holds with changes |
| R19 The rabbit-costumed woman; the ending | holds with changes; (4) and the Princess Quest remedy should fall to low-medium |
| R20 The burnt rabbit; the mass of parts | holds with changes; (3) should fall to low |
| R21 The copying endoskeleton; M.X.E.S. | holds with changes; the second half of (5) should fall to low-medium |
| R22 Gregory, Cassie, the technician | holds |
| R23 Into the Pit | the conclusion holds; the label and three of its four reasons should change |
| R26 Labels | holds with changes |
| R27 Scope, and W1 to W9 | holds with changes |
| R31 The company's conduct | holds with changes |
| Section 4 | holds with changes |
| Thesis | five clauses are firmer than their rulings; one order is assumed; the nights the player actually plays are missing |

Nothing needs overturning. Three habits account for most of what follows. A ruling's first line is often firmer
than its own "Records against". The alternative to the model's reading of the modern era is stated in a form
that is easy to beat. And a scope rule is applied one way to material that helps and another way to material of
the same kind that does not.

The model's own section 6 already lists R18, R20 and R21 as its eighth risk and the reading of the work order and
the labels transcript as its tenth. I have not repeated what it concedes there, except where a ruling's wording
or confidence does not yet match the concession.

---

## R2. "Hen" and "W.A."; when Secret of the Mimic is set

**Verdict: holds with changes.** (1) holds. (2) is two claims, one stated and one inferred. (3) holds at medium
on narrower grounds than the ruling gives. (4) should fall from low-medium to low. "Partners: strong" should be
medium.

1. **"Murray's Costume Manor was Fazbear Entertainment's contractor, and Fazbear took it over. Stated."** Two
   claims are joined, and only the first is stated. The contract is stated three ways: the opening call
   (`secret-of-the-mimic-dispatch-contractor-murray`, `secret-of-the-mimic-dispatch-contract-legally-ours`), two
   work orders on Fazbear paper (`secret-of-the-mimic-work-order-1979`,
   `secret-of-the-mimic-work-order-retrieve-assets`, both seen), and Edwin's own "They treat me like some
   contractor" (`secret-of-the-mimic-log-friends`). The takeover is carried by letters signed "WA" and "W.A." in
   which the word Fazbear never appears (`secret-of-the-mimic-mail-confidential-wa`,
   `secret-of-the-mimic-mail-wa-far-behind`, `secret-of-the-mimic-mail-staff-contacts-wa`). The analyst rated
   "W.A. writes for that company" medium-high and added: "Not stated: the word 'Fazbear' appears in no message
   or log" (memo-sb-mimic 2.2 (ii)). The letter is also an offer still waiting for its answer ("We are waiting for
   your response"): it says the writer's side "technically" owns the land and wants the software and the
   catalogue. The double-pay hiring is in an unsigned note that names no employer
   (`secret-of-the-mimic-mail-moving-on-poached`). Step 4 of section 3.2 ("'W.A.' takes Murray's land, software,
   catalogue and staff... F for the takeover") and the brief ("took it over: high (stated)") repeat the joined
   claim.
   **Fix:** split it. 2a, contractor: high, stated. 2b, a party signing W.A. held the land, bid for the software
   and catalogue and went after the staff: stated for the land and the bid; that this party is Fazbear
   Entertainment is inferred, medium-high. Step 4 becomes "F for the land and the offer; I that the party is
   Fazbear".

2. **"The role is exact" and "the later games have exactly one man of that description".** The description the
   ruling gives, "a principal of the restaurant company", is the inference of point 1, not a record. And the
   later games do not describe William Afton that way. They show a designer explaining his machines to an
   unnamed questioner (`sl-intro-mr-afton-board`; the record's note says the audio does not name his company),
   his own firm's name on his machines (`ffps-scup-blueprint`, "Afton Robotics, LLC", where the trap's hardware is
   marked "Fazbear Entertainment, Inc": `ffps-lefte-blueprint`), and a venture that HandUnit calls "another
   contender in children's entertainment" after Freddy Fazbear's closed (`sl-handunit-freddy-fazbear-closing`). No
   record in the archive calls him an owner, officer or founder of Fazbear Entertainment. So the two inferences
   pull against each other: the more W.A. resembles the later Afton, a roboticist with his own company who
   wants a supplier's software and staff, the less sure it is that he writes for Fazbear at all.
   **Fix:** keep (3) at medium, on these grounds only: the initials; the full name printed later
   (`ffps-credits-william-afton`); the same trade in the same decade; no other W.A. in any game. Delete "the role
   is exact". Add to "Strongest alternative" the reading that W.A. writes for a firm of his own while Fazbear
   holds the contract.

3. **"Hen is the Cassette Man": the role runs the wrong way, and the name carries nothing.** The ruling says
   "the role fits the man who 'made' the machines, and nothing else does". In Secret of the Mimic the making is
   Murray's: Edwin builds and Fiona designs. Hen is the client who is to be warned
   (`secret-of-the-mimic-mail-springlocks-hen`) and who sends a change order
   (`secret-of-the-mimic-log-build-to-spec`). "Prisons of my making" (`ffps-insanity-small-souls-prisons`) fits
   the workshop at least as well as its customer. The analyst saw this and argued that the Cassette Man
   "specified" the machines; that is an argument, and the ruling presents its conclusion as a fit. Two of the
   records cited for Hen do not bear on him. `fnaf3-tape2-crank-from-manufacturer` shows that the suits came
   from an outside maker, which supports the contract and cuts against the Cassette Man as the literal builder.
   `fnaf2-call5-fredbears-family-diner` speaks of "the original restaurant owner", one person, unnamed. Last,
   no game gives the Cassette Man any name (`ffps-credits-cassette-man`), so "Hen" has nothing in the games to
   match. The only thing that makes the syllable ring is a name from the books. The ruling does not say that,
   but low-medium is more than one role-fit and no name can carry.
   **Fix:** (4) low, worded "the model notes the possibility". Say in the ruling that the name itself carries no
   weight. Move "prisons of my making" against Murray-as-maker into "Records against". In the thesis table,
   "medium and low-medium" becomes "medium and low".

4. **"That the two men were partners at all... (strong)."** The three records say "prisons of my making",
   "this monster that I unwillingly helped to create" (`ffps-insanity-monster-helped-create`) and "old friend"
   (`ffps-completion-old-friend-hell`). None says partner, founder, owner or business, and no record in the
   archive does. FNaF2's call gives the diner one "original restaurant owner". "The two men behind the
   restaurants", "his partner's daughter" and "his old partner" in the thesis are the novels' frame arriving as
   a paraphrase: this is the clearest place in my assignment where a sentence only reads as obvious if the
   reader already knows the fandom's answer.
   **Fix:** the thesis says what the game says: "an old friend", "the daughter of the man who built the
   machines". "Partners" may appear as "the model reads them as partners" at medium. "The two men behind the
   restaurants" has no record and should go.

5. **"The year is printed in the game twice."** What the two images show (seen): the work order has "DATE
   :9/07/79" typed and "9/07/79" handwritten, and the credential form has "EXPIRATION YEAR: 1979". Two points.
   Both are flat textures of props in the van's cargo area, and whether they can be read in play has not been
   checked; the ruling says so under "Records against" and in section 6, but its first line and row 9 of the
   dating table say "printed" without the caveat. And an expiry year is an upper bound on the night, not a second
   printing of its date. The year stays high, because the Help Wanted 2 code and hint agree with it
   (`hw2-mimic-teaser-1979-white-tiger`, `hw2-mystic-hippo-gift-distant-past`).
   **Fix:** "printed once, on a work order, and bounded by a credential that expires in 1979; both read from
   prop textures whose legibility in play is unchecked". Row 9 carries the same words.

6. **"3 August to 7 September is exactly 35 days."** The day rests on two assumptions the ruling does not
   state. The first is that the header "Mail - Aug 3rd" dates the last mail. The other mailbox headers are
   timestamps of the message itself ("Admin - Dec 1st - 8:00 am", "Admin - Dec 6th - 4:00 pm":
   `secret-of-the-mimic-mail-david-party`, `secret-of-the-mimic-mail-party-canceled`). By that convention the
   notice "Here is your mail for today" was written on 3 August, and the foreclosure letter came five weeks
   before it, in late June; the record's note gives both readings (`secret-of-the-mimic-mail-foreclosure`). The
   second is that a work order's date is the day of the job and not the day it was issued. If the header is a
   timestamp, the night falls on or after 3 August. That rules out a night of 9 July; it does not rule out an
   order issued on 9 July for a later night. The exact 35 days is the best argument that both assumptions are
   right, since otherwise it is a coincidence.
   **Fix:** state the two assumptions and the alternative. Medium-high can stay, on the strength of the match.
   Row 8's "printed day" should say which event the day belongs to on each reading.

7. **"The springlocks message is addressed to Fiona Murray, so springlock suits were being readied... while she
   was alive."** The game records a second addressee by that name. After her death Edwin works beside a machine
   that speaks as Fiona (`secret-of-the-mimic-log-m1-as-fiona`), and an employee hears "Fiona's voice" with Edwin
   "laughing and joking" through a vent in R&D (`secret-of-the-mimic-mail-heard-fiona`). The message is unsigned
   and sits in the mailbox of the R&D mock-up kitchen. The floor it sits on has its own dated record, which the
   model never cites: a memo on the party that opened "our new Research and Developent Floor" on 21 July of a
   year whose last digit is worn away in both places it is typed (seen; the wiki reads 1975;
   `secret-of-the-mimic-mcm-rnd-floor-opening-memo`). If the floor opened in the middle of the decade, a note to
   the living Fiona in that kitchen leaves almost no room before David's death in "December 1975" for her
   death and for the years in which the first machine "watched him grow up"
   (`secret-of-the-mimic-f10n4-miss-my-child`). Either the note is to the machine, or the mailbox does not date
   the note, or the floor opened years earlier than the wiki reads, or David did not die in 1975.
   **Fix:** "before 7 September 1979" stays firm. "While Fiona was alive" drops to medium, and row 3 of the
   dating table loses "relative (firm)" for that half. Cite the memo in rows 3 and 6 and say what it does to
   "by the early 1970s".

8. **"Fredbear's had springlock suits well before September 1979 (medium-high)."** This follows from the
   springlocks message only if the note is to the living Fiona (point 7) and the "new springlocks" that "should
   be ready for the diner soon" were in fact delivered. One record carries prior use without either step:
   Edwin's "It would be so much easier to keep using the Springlocks" and hire teens to wear the suits "like we
   always do" (`secret-of-the-mimic-log-build-to-spec`).
   **Fix:** rest the sentence on that log as well. Medium-high for "in use before the 1979 night". "Well before"
   stands or falls with point 7.

9. **The diner poster carries less than it is given.** The record is a texture whose place in the game was
   "not checked" (`secret-of-the-mimic-fredbears-diner-poster`). The same artwork is a collectible in Security
   Breach, beside a second one that reads "FREDBEAR'S FAMILY DINER... WE DELIVER!" (seen; neither has a record
   in the archive). Reused art cannot bear "'NEW MENU ITEMS!': a place already open". The better record for
   "the diner is Fredbear's" is one the ruling cites only under "Contractor": Fredbear and Spring Bonnie
   springlock suits standing in the mock-up (`secret-of-the-mimic-rnd-proto-pizzeria`, with
   `secret-of-the-mimic-ending-clock-out`, where the technician wakes inside the Fredbear suit).
   **Fix:** medium-high can stay for the identification, resting on the suits and the name. Drop the "already
   open" inference. Add records for the two Security Breach posters.

10. **One voice, treated three ways.** R2, R31 and R21 (4) take the opening call as Fazbear's. R21 (1) takes a
    later line as M1's. R20 and R21 ("The product", and "Records for (6)") quote two more lines as what Fazbear
    wanted, although both records say the speaker is uncertain
    (`secret-of-the-mimic-dispatch-endoskeleton-any-costume`, `secret-of-the-mimic-dispatch-retrieve-schematic`),
    and the real dispatcher says "We've been trying to get ahold of you all night"
    (`secret-of-the-mimic-clock-out-real-dispatch`).
    **Fix:** one rule, stated once in R2: the call on the road and the call that fires him are the company's;
    anything on the radio inside the building is "the voice on the radio" and is not quoted as Fazbear's.

Smaller items. The weekday arithmetic for David's year assumes the party was cancelled on its own Saturday;
report B covers this. `people.ts` still carries the alias "HRY223 tape label (reported)" on `cassette-man`, which
W7 calls non-evidence; section 5.2 does not list it. `secret-of-the-mimic-ad-chicas-party-world` is cited only
as a counter-record, but with `scottgames-site-sl-source-client-directory` ("ChcasPrtyWrld") it is the one
business named on both sides of 1979, which the makers' chapter can state as shown.

---

## R18. Help Wanted: the frame, and the rabbit in the code

**Verdict: holds with changes.** The frame ruling holds. For the rabbit, "a personality from old boards entered
the code and acts with purpose" holds at high. The identity half needs the alternative restated and one
confidence changed.

1. **The alternative is beaten in the wrong form.** "It loses for Help Wanted's own period because the
   endoskeleton is a body sealed underground... and the anomaly is code that arrived on boards." That answers a
   body. The alternative the games support is a program. In 1979 the copying mind is already software that has
   been copied from one body to another (`secret-of-the-mimic-mail-received-5-min-ago`, "M2 began as a copy of my
   program"). The party signing W.A. bid for Murray's "software development"
   (`secret-of-the-mimic-mail-wa-far-behind`), and Fazbear sent a man for the blueprints
   (`secret-of-the-mimic-work-order-1979`). Help Wanted's anomaly comes off "vintage control-boards" that
   recreate "performances and personalities from the past" (`hw-handunit-vintage-control-boards`), and its only
   speech in the hub is someone else's recording played back (`hw-glitchtrap-uses-tape-girl-voice`), which is
   what the Murray machine does in both games where it speaks (`secret-of-the-mimic-log-turn-around`,
   `ruin-mimic-reuses-gregory-lines`). Help Wanted 2 then gives the costumed arm the Murray boy's doll
   (`hw2-mimic-teaser-1979-white-tiger`). On this reading the thing in the code is Murray's program wearing what
   it learned from the killer, as the second machine wore Edwin's rage. A wall of concrete does not answer it.
   What does answer it is weaker and should be said: no record puts Murray's software on any Fazbear board;
   Help Wanted's own account names old boards and nothing else (`hw-tape-05`); and nothing in Help Wanted, Curse
   of Dreadbear or Special Delivery has a Murray mark (orange eyes, the costumes, 4625, Fiona, David). Those
   appear only from RUIN on.
   **Fix:** restate the alternative as "a copying program that reached the company's hardware", give those three
   answers, and rate it low-medium, not low. The same change is needed in R21 (5).

2. **Split what it presents from what it is.** Every record for "derives from William Afton" is surface: the
   costume, the lure, the six stones, a line. The ruling itself grants that "a copy would say 'I always come
   back' too". A copier that had learned the killer would show all of it. So the records support "it presents as
   the killer" well, and they do not choose between "something he left on his own hardware" and "something
   that copied him".
   **Fix:** two lines in the confidence block. That it presents as the killer: medium-high. What it is: the
   model prefers a leaving of the man on old company boards (medium at most) over a copier that learned him
   (low-medium); the games do not settle it.

3. **"Something of William Afton carried on his hardware."** The same paragraph's change note says that "a
   personality carried on boards from his machines" overstates what is recorded, and `sd-which-board-unknown` is
   the first record against. "His hardware" puts back what the note takes out.
   **Fix:** "carried on old company boards; which machine they came from is not said".

4. **"A decoded line gives it his words."** The ruling sentence states a fan decode flat. The record is
   `implied`, and its own claim says of the glyphs and the audio: "Neither is readable or audible as English in
   the game itself" (`hw-mobile-princess-quest-ending`). The records list is careful about this; the ruling line
   and the brief are not.
   **Fix:** "a line that fans decode as his".

5. **Support the ruling leaves out.** Three records tie the figure to the killer's victims and are not cited
   here: six unmarked gravestones with braziers on Princess Quest's route (`hw-mobile-princess-quest-graveyard`,
   against the six stones of `ffps-lorekeeper-gravestones`); six "memories" in the masks of the four, the yellow
   bear and the Puppet, each held out by the costumed arm (`hw2-memory-dolls`, cited only in R21); and Springtrap
   watching from the FNaF3 office inside the rabbit's own level (`hw-pizza-party-springtrap-window`).
   **Fix:** add them under "presents as the killer". They are better than the decoded line.

6. **Pizza Party is filed two ways.** R18 uses the birthday room and the stage as the rabbit's own lure
   (`hw-pizza-party-birthday-room`, `hw-pizza-party-ending`). Section 4 files Pizza Party as "a staged scene the
   model discusses as a staging", that is, the company's. Under W5 a level shows "what the company chose to
   stage".
   **Fix:** see R27, point 1. The model needs a named layer for what intrudes on a company product.

7. **"Vintage Bonnie... a physical Springtrap abroad after the fire (medium)."** This clashes with four other
   places. R16 holds the killer in a night without end. R27 says Special Delivery's "encounter lines are rebuilt
   machines repeating the originals", and the thesis table calls the Springtrap of that game "the copy"
   (`sd-springtrap-pulled-apart-put-back-together`); but the email describes a machine that "isn't appearing
   anywhere in our database", so it is not one of the rebuilds, and its arrival coincides with the Springtrap
   the player meets (`sd-vintage-bonnie-reports`). And R20 (2) cites the same email for a body "abroad" while
   ruling that the burnt rabbit is a "relic" standing in the burnt building. The email also fits a different
   time: Pizzeria Simulator has "something outside that's been trying to get in for months"
   (`ffps-tutorial-something-outside`), which would be a foul old rabbit at large before the fire.
   **Fix:** rate it low-medium and say it depends on the order of the fire and the scan (thesis, point 5). Say
   in one place what the model holds about the killer after the fire (thesis, point 6).

8. **"The company repeats the mistake after its lawyers already know the risk."** The halt on "vintage
   hardware" reaches the contractor the day after the lockout and before the contractor knows it has a virus
   (`sd-fe-legal-halt-vintage-hardware`, `sd-circuit-board-scan-virus`). That shows the lawyers understood at
   once. That they knew before the boards were sent is inferred, and it leans on the order of two email threads,
   which section 3.2 calls a convention.
   **Fix:** "its lawyers act within a day, naming 'vintage hardware', before the contractor understands what
   has happened".

9. **"Scott's 'possession' keeps a possessor in the picture."** One word from a machine transcript is used to
   tilt the ruling (`scott-2024-interview-glitchtrap-possession-of-ai`). As transcribed, the phrase is
   "possession of AI or possession of machines or circuitry", which says what is possessed and not by whom.
   **Fix:** drop the sentence, or mark it as resting on one transcribed word.

The frame. The ruling holds, with one gap in its reasoning. Tape 13 says the earlier games were made for the
company "to conceal and make light of what happened" (`hw-tape-13-fe-hired-developer`). W5 as worded ("anything
staged inside a Fazbear product") would then demote those games too. The ruling avoids this by fiat ("they stay
the archive's record"). The reason is available and should be written: a level is demoted only when the game
that contains it frames it as an in-world product; no earlier game frames itself so; and Scott limited what
Help Wanted makes canon to the developer's existence (`scott-2019-only-game-developer-existence-canon`).

---

## R19. The rabbit-costumed woman; which Security Breach ending stands

**Verdict: holds with changes.** (1) holds at medium-high, which is its ceiling. (2) holds. (3) holds with one
correction. (4) should fall from medium to low-medium. The Princess Quest remedy ("works where fire did not")
should fall from medium to low-medium.

1. **The rooftop page cannot be set aside as a branch.** (5) calls it "an unexplained anomaly in a branch the
   later games do not follow. Nothing is built on it." Who is inside the costume is settled before the endings
   divide at 6 AM. An ending can change what happens to her; it cannot change who she is. R27 applies exactly
   this rule to Sister Location's Private Room: "the room, its desk and its wiring are part of the facility on
   either branch". The two pages (seen): on page 3 the unmasked blonde woman lies on the ground beside Gregory's
   "???"; on the post-credits page Vanessa stands in uniform on the burning roof, looking down
   (`security-breach-rooftop-unmasked`, `security-breach-rooftop-vanessa-alive`). The ruling does list the page
   first under "Records against" and does weigh it under "Strongest alternative". The fault is the discount in
   (5) and in the brief.
   **Fix:** (5) reads "an unexplained scene that counts against (1) at full weight". The chapter shows the page
   and says the model has no account of it.

2. **A counter-record of a kind the model uses elsewhere is missing.** Security Breach's cast credits give the
   guard and the rabbit-costumed woman to two actresses: "Heather Masters - Vanessa/Glamrock Chica" and "Marta
   Svetek - Gregory/Vanny/Roxanne" (seen in the wiki's transcription of the credits; the archive has no record).
   The archive holds the other half: Help Wanted 2 credits "Vanny" to the second of them (`hw2-credits-vanny`).
   The model treats casting as identity evidence in R30 (`ffps-credits-returning-voices`: the same two actors
   return, so the same two characters) and takes a name from credits in R1 (`ffps-credits-william-afton`). It
   cannot count this kind of fact only when it helps. There is an answer (a second voice keeps the twist), and
   an answer is a reason to state the record, not to omit it.
   **Fix:** add a record for Security Breach's cast credits and list it under "Records against (1)" with the
   answer.

3. **Two teasers are listed for (1) that support neither reading.** `scottgames-site-sb-protect` shows a guard
   and `scottgames-site-sb-obey` shows a figure in a rabbit costume. The record's note says "any link between
   the two women is not stated in the teasers", and the ruling's own "Errors to remove" says nothing in them
   splits one figure into two. Nothing in them joins two into one either.
   **Fix:** move them out of "Records for (1)". With them gone, (1) stands on the recording about costume fur
   (`security-breach-cd-vanessa-costume-fur`), the mask on the floor with Vanessa at the door
   (`security-breach-ending-redemption`), and Freddy's remark on the name. That is enough for medium-high and no
   more.

4. **(4): every support for "later games follow the Princess Quest ending" sits in a layer the model discounts
   elsewhere.** The sword through the cabinet is visible only through the mask, and the record takes it "from
   the wiki's plot summary" (`ruin-vanny-hideout-glitchtrap-shadow`). The hill is seen only inside the mask, and
   the ruling grants it "may be an illusion" (`ruin-ending-safe-spot`). The friend with the maps is unnamed
   (`ruin-gregory-friend-maps`). Princess Quest IV is a game inside a simulation. No record shows Vanessa after
   that night outside the mask's view. Against this, what RUIN shows with the mask off is the aftermath of the
   underground route: a building destroyed and reported as an earthquake (`ruin-pizzaplex-abandoned-earthquake`),
   a collapsed raceway (`ruin-something-tunneled`, where the cause is given by the lying voice), Roxanne without
   her eyes (`ruin-roxy-give-me-back-my-eyes`), and a page of Gregory's that draws the burnt rabbit beside the
   mass, found next to the M.X.E.S. room (`ruin-gregory-comics-depict-endings`). "For the building, RUIN matches
   no ending" undersells that.
   **Fix:** state (4) as a composite. The building follows the underground route: medium. Vanessa's release is
   the model's reading: low-medium. Step 26 of section 3.2 takes the same marks.

5. **"A remedy that works where fire did not... (medium)."** The crush is the secret ending of a game whose main
   ending, the one tied to RUIN, shows the costumed arm reaching out of the station
   (`hw2-pq4-vanny-crushes-glitchtrap` against `hw2-faz-force-ending`; R22 rates "only the main one is tied to
   RUIN" medium). The same game shows the figure at work on the instruction monitors after the Security Breach
   night (`hw2-glitchtrap-corrupts-backstage`). RUIN, set later, has a rabbit's shadow in the hideout and a
   rabbit-shaped figure in the mask world, which R21 leaves unidentified (`ruin-vanny-hideout-glitchtrap-shadow`,
   `ruin-the-entity`). R21 (6) itself says "destroying the rabbit in the code does not end the threat". R28 says
   of the same cure "and it works".
   **Fix:** low-medium, worded "one ending shows it crushed, and the next game still has a rabbit in the mask".
   R28's "and it works" and the thesis clause follow.

6. **(3) runs two things' vessels as one list.** "The vessels in turn: Jeremy in the visor, the Help Wanted
   player, Ness at her screen, the technician in the mask, Cassie in the mask." Under R21 the voice that walks
   Cassie down is the endoskeleton's, and R21 (5) says the endoskeleton is not the rabbit in the code.
   **Fix:** mark the break: three served the thing in the code; the technician and Cassie were used by whatever
   R21 decides was speaking by then.

7. **"So her contact came through the VR game, not the second outbreak."** This rests on the order in which two
   separate email threads reached players (`sd-ness-blood-eagle-calendar` before `sd-circuit-board-scan-virus`).
   Section 3.2 lists that same order under "the model's convention".
   **Fix:** add "by delivery order, which is a convention".

8. **Slips in the two side paragraphs.**
   - "RUIN's mask hides Cassie" has no record. The one record that describes what the mask does to her points
     the other way: while she wears it the rabbit-shaped figure finds her and calls the animatronics to her
     (`ruin-the-entity`).
   - "The first game's mask trick": the mask is the second game's (`fnaf2-call1-endoskeleton-glitch`). And in the
     two early games the machines do see the guard; they take him for an endoskeleton. That is seeing wrongly,
     not failing to see. "Machines do not see a person inside a mask or suit" is stated in two games only
     (`security-breach-freddy-cannot-see-rabbit-lady`, `secret-of-the-mimic-f10n4-suit-cannot-see`).
   - "Four games in which the thing is fought from inside"; three are then described.
   - "The first shows it as a prisoner asking to be let out": "let me out" is the fan decode of reversed audio
     (`hw-mobile-princess-quest-ending`, `implied`). What is shown is a rabbit-eared creature hanging in a locked
     room (`hw-mobile-princess-quest-final-room`).
   - Step 23 of section 3.2 says "She makes a mask". The caller says "I made it myself" of an "it" the record
     says "goes unsaid" (`codb-mask-plush-voice`).

---

## R20. The burnt rabbit under the Pizzaplex, and the mass of parts

**Verdict: holds with changes.** (1) holds at medium. (2) holds as rated: medium that it is not the sealed
endoskeleton, low-medium that the body is that fire's rabbit. (3) should fall from low-medium to low. (4) holds at
low-medium and needs one sentence to stop it contradicting R28 and R30.

1. **(3) takes its direction from a transcript, and its own game record points the other way.** What the game
   shows is plain: a burnt rabbit rises from a station, Freddy says "I AM NOT ME", and then "He is trying to
   take control of me" (`security-breach-freddy-i-am-not-me`, `security-breach-freddy-take-control`). The idea
   that the body is moved by "the presence in the network" comes from Scott's "never supposed to move" and
   "decaying movie prop" (`scott-2024-interview-burntrap-never-meant-to-move`, transcript). The game record
   offered for a network actor is that Freddy, "cut off from the main network, is the one band member not
   turned" (`security-breach-freddy-cannot-connect-main-network`). But that same Freddy, whom no record shows
   reconnecting, is the one machine the burnt rabbit seizes underground. If he is still off the network,
   whatever takes him there does not come over it. And under R21 (6) a second candidate for "a presence in the
   network" exists: the copier.
   **Fix:** (3) low, worded "the game shows the rabbit itself taking control of a machine; that something else
   moves the rabbit is a possibility raised by a transcript". Step 26 should not say that what runs Vanessa
   also runs the body.

2. **The Help Wanted 2 arm cannot do either job it is given.** It is cited for (3) ("still shows a
   rabbit-costumed arm coming out of a recharge station after that night") and again under "Records against"
   (the dragging-away "sits badly with Help Wanted 2's arm in the station"). The record was "described from the
   wiki's ending summaries; the scene itself was not watched" (`hw2-faz-force-ending`). The station unfolds from
   a box that appears on the hub stage, and the hub is the mask's picture of a room which, with the mask off,
   has no station (`hw2-real-hub-pit-pizzeria`, itself `implied`). The arm is costumed, like the arm that holds
   out the dolls (`hw2-memory-dolls`); the body under the Pizzaplex is bare metal with pieces of shell
   (`security-breach-burntrap-appearance`). So the arm most likely belongs to the mask layer. It cannot show
   that the body survived being dragged off (`security-breach-ending-burn-it-all-down`).
   **Fix:** take it out of (3) and out of "Records against". Keep it in R21 (6).

3. **"Behind old poured concrete."** "Old" is not in the record: Cassie says "it looks like someone poured
   concrete over the door" (`ruin-concrete-poured-over-door`). The age rests on "a really long time", from a boy
   who says in the same breath "I really don't know what it is" (`ruin-gregory-mxes-explanation`); section 6
   admits the weight on that line. Better support is in the archive, cited for (1) and not used for the timing.
   While the Pizzaplex was being built, the crew wrote "There's something down there pulling power" and
   "Someone must have known about this, right?" (`security-breach-msg-old-elevator`,
   `security-breach-msg-power-drain`). And the guard's last node is a Pizzaplex animatronic, so the guard was
   wired into the building after it stood, which implies someone who knew (`ruin-roxy-final-node`; the claim
   is the lying voice's, and the terminal then confirms that every node is off: `ruin-mxes-hub`).
   **Fix:** drop "old". Argue the age from the construction messages and the nodes. Medium stands.

4. **(2) uses one email for two pictures that do not fit.** "A physical, foul-smelling 'vintage Bonnie' was
   abroad between the fire and the Pizzaplex" (`sd-vintage-bonnie-reports`) is offered in support of "a relic of
   that fire" standing in the burnt building itself. A body that was abroad then came back to its own ruin and
   was stood on a frame in a station, by someone. The one record of anyone going down there before the night is
   not cited: Freddy's "I have been here before. She brought me here... I cleared the path"
   (`security-breach-freddy-been-here-before`). And the frame under the shell may be ordinary Pizzaplex stock,
   which the model's own "product" paragraph describes (`security-breach-vanessa-new-endo`,
   `security-breach-freddy-where-i-was-born`).
   **Fix:** say that who put the remains on a frame and in a station is not shown, and cite Freddy's line as
   the lead. Drop the email from (2) unless the order of the fire and the scan is settled (thesis, point 5).

5. **(4) against R28 and R30.** If the mass is what the fire left of Molten Freddy, and Molten Freddy held the
   five (R30), and the mass still sleeps, wakes and hunts (`security-breach-tangle-composition`), then either
   the fire did not empty it or something else moves it. R28's "would change if" is "a game showed the five
   still bound after Pizzeria Simulator's fire". Report B raises the same clash from R28's side.
   **Fix:** (4) adds "what moves it is not said; the model does not read it as the five".

6. **(1): the floor plans were never compared.** The identification rests on a sign, the burners and the route
   down. The note on `security-breach-underground-pizza-place` says the game "does not narrate its history".
   Medium is right.
   **Fix:** list the comparison with Pizzeria Simulator's layout as a check to make. No change of rating.

---

## R21. The copying endoskeleton; M.X.E.S.; its relation to the two rabbits

**Verdict: holds with changes.** (1), (2), (3), (4), (6) and the first half of (5) hold, with the corrections
below. The second half of (5), "it is not the source of Help Wanted's anomaly", should fall from medium to
low-medium.

1. **(2) and (5) pull against each other through one record.** (2) uses `ruin-mimic-reuses-gregory-lines` as
   behaviour: "it reuses a child's recorded lines". The thesis table makes the same pairing in its "Copies" row
   ("a borrowed voice twice"). The lines are Gregory's from the Security Breach night. To have them, the
   machine behind the concrete had access to audio from the building above, that night or later; in RUIN it
   reaches a child's radio outside the building and claims to have rewritten the mask's assistant
   (`ruin-cassie-seeks-gregory`, `ruin-fake-gregory-signal-jammer`). So "sealed" is not "cut off", and the
   sealing, which carries both halves of (5), covers only the body. If instead the reuse means nothing, it
   leaves (2) and the thesis table.
   **Fix:** add the record to "Records against (5)". "It is not the burnt rabbit's body": medium. "It is not the
   source of Help Wanted's anomaly": low-medium, with the three answers given under R18, point 1.

2. **"It is what later material outside the games asserts, which is a reason for the model to be exact..."**
   The sentence shows which way the ruling leans. Material outside the games is no reason to accept a reading
   and no reason to resist one.
   **Fix:** delete it.

3. **"The product" runs two machines together.** "What Fazbear was paying Murray for, one endoskeleton that
   becomes whatever shell it is given... And in 1979 that machine was already leaving bodies in mascot
   costumes." The machine that leaves the bodies is M2, and Edwin's own log says the client was never meant to
   have it: "There's a leak. Someone told them about M2. Well, they can't have it"
   (`secret-of-the-mimic-log-make-a-copy`). The first machine asks him "you can't let them know about me"
   (`secret-of-the-mimic-log-m1-as-fiona`). The thesis has this right: the copying machines were "for his own
   family". What the contract was for, the released game calls only "some tech"
   (`secret-of-the-mimic-dispatch-contractor-murray`). The sentence about an endoskeleton for any costume comes
   from the voice inside the building (R2, point 10), and the analyst notes that the line which named the
   contract's subject outright was cut from the game (memo-sb-mimic, "Not recorded on purpose"). A paragraph
   that says what a cut line said has to show it can stand without it.
   **Fix:** "what Fazbear came to want once it learned of M2". Start the line to the Pizzaplex's stock from
   Edwin's own words about the first machine, "It can fit into any costume we've created"
   (`secret-of-the-mimic-log-training-m1`), and from Hen's change order away from worn suits
   (`secret-of-the-mimic-log-build-to-spec`).

4. **"With Fazbear's knowledge."** The bodies are shown. The lines about them are the impersonator's
   (`secret-of-the-mimic-previous-technicians`, `secret-of-the-mimic-f10n4-fazbear-will-send-another`), and the
   "homicidal glitches" briefing is of uncertain speaker. The company's certain words that night are the work
   orders, the opening call and the dismissal.
   **Fix:** "Fazbear had sent men before him, and they had not come back". "Knowledge" is inferred.

5. **(4) misreads the Clock Out ending.** "In one 1979 ending it is in a Fazbear van." In that ending the
   machine hides in the van to attack the technician, who wakes on the workshop's stage
   (`secret-of-the-mimic-ending-clock-out`): the ending leaves it at the Costume Manor. The record that shows
   transport by van is the cabinet in Help Wanted 2's teaser, whose van drives away
   (`hw2-mimic-teaser-mxes-ending`).
   **Fix:** correct the gloss and cite the teaser for the van.

6. **A reading the specialist raised is missing from (4).** The memo flags "one further possibility... and no
   more" (2.5): the 1979 site has "something below us", a dead elevator and power surges in tunnels, and the
   party signing W.A. holds the land (`secret-of-the-mimic-mail-something-below`, `implied`;
   `secret-of-the-mimic-mail-old-elevator-below`; `secret-of-the-mimic-log-power-surges-tunnels`;
   `secret-of-the-mimic-mail-confidential-wa`). The Pizzaplex's builders find "an old elevator shaft" with
   something below "pulling power" (`security-breach-msg-old-elevator`). "Not shown" is true, but a low reading
   with records at both ends should be listed.
   **Fix:** add it to (4) as "one possibility, low".

7. **A record is missing that bears on "M2 itself".** In the route where the machine walks away, the game has
   a swarm of small orange-eyed machines made of scrap that chase the technician. I have this from the wiki's
   page on them, a stub that calls them "Proto-Mimics" and guesses M2 built them; I did not see them, and the
   archive has no record. Whoever built them, more than one machine of that kind exists on the 1979 night. That
   bears on "Every copy has failed" (`secret-of-the-mimic-log-make-a-copy`), on "most likely M2 itself", and on
   R20's "a second such endoskeleton... cannot be excluded".
   **Fix:** add a record from play. Until then (2) keeps its ratings and says that other such machines appear
   in the game.

8. **(3) folds three things into "Murray's system".** In 1979 the name is on storage terminals: "Mechanical
   X-form Experimental Storage #1", which offers the Cradle program, and "Experimental Storage #2", which holds
   the blueprints (`secret-of-the-mimic-mxes-acronym-on-screen`;
   `secret-of-the-mimic-experimental-storage-2-mimic-blueprints`, uncited). The cabinet whose design matches
   RUIN's is the first machine's housing and carries "a different nameplate"
   (`secret-of-the-mimic-mxes-machine`). And the one time the Cradle program runs, it sets the complex on fire
   (`secret-of-the-mimic-ending-unfinished-business`); it hides nothing. "It is a character in its own right"
   rests on auto-captions that render the name "mexus" (`scott-2024-interview-mxes-name-thought-through`), as
   the ruling marks.
   **Fix:** "Murray's technology: medium-high. One continuous machine or program from 1979 to RUIN: not shown."
   Cite the second terminal. Keep "character" as Scott's word, from captions.

9. **(2) leads with an `implied` record.** "The body (`secret-of-the-mimic-mimic-ruin-appearance-link`)" is
   `implied`, and its note rests the identity on "the developers' naming". The shown records are the costumes
   (`ruin-mimic-lair-mcm-mascot-suits`), the name on screen and the code 4625.
   **Fix:** lead with those.

10. **Two sentences assert more than their rating.** In the ruling, "That is why destroying the rabbit in the
    code does not end the threat" explains a fact by a reading rated low. Under (1), "a grieving father lost his
    temper with the machine... and it learned that" joins three records by two speakers
    (`secret-of-the-mimic-mail-received-5-min-ago`, `secret-of-the-mimic-log-turn-around-lost-temper`,
    `secret-of-the-mimic-log-incident`); it is the natural reading and nobody states it.
    **Fix:** "On that reading, destroying the rabbit..." For (1): two machines, high; that its violence copies
    his, medium-high. The thesis table's "the second learns rage from him: high" follows.

---

## R22. Gregory, Cassie, the Help Wanted 2 player

**Verdict: holds.** Gregory as a human boy is high, and rightly. His background is left open. Client 46 is
noted and not relied on. The alternative that he is not human is dismissed for the right reason: no game
supports it. Five small points.

1. "No record in Fazbear's systems... stated." The firmer record is Freddy's own scan
   (`security-breach-intro-not-in-database`). "There's no record of him" is Vanessa's word
   (`security-breach-vanessa-no-record`), and the model holds her to be under something's control that night.
   **Fix:** lead with the scan.
2. "Working under the wrecked Pizzaplex... medium-high" rests on an `implied` record: the wiki's identification
   of the hub from its layout (`hw2-real-hub-pit-pizzeria`). **Fix:** "in the wrecked Pizzaplex" medium-high;
   "in the buried pizzeria under it" medium.
3. Step 27 of section 3.2 has the technician "led by 'gifts' to the recharge station". The station unfolds from
   a box that appears on the hub stage (`hw2-faz-force-ending`), and the gifts are urged by the mask's cartoon
   assistant (`hw2-hub-helpi-pushes-gift`). **Fix:** "is urged to open a gift, and a recharge station comes out
   of it".
4. "If client 46 is Gregory" hides a record that matters whoever the client is. Someone at the Pizzaplex
   "developed software programs that talk to you and repeat phrases", and by the record the encrypted logs at
   first looked like more of the same, until it became clear that someone else was answering
   (`security-breach-cd46-talking-programs`). That is a talk-back program being answered by something else,
   inside the Pizzaplex. **Fix:** cite it in R18 and R21 without the conditional.
5. The father hypothesis is rated low-medium on a wrench, a refusal to explain, and two lines of patter
   (`hw2-carnie-you-got-kids`, `hw2-mystic-hippo-key-darkness`). **Fix:** low.

---

## R23. Into the Pit

**Verdict: the conclusion holds; the label and three of the four reasons should change.** What holds: its
events stay off the timeline, its year dates nothing, and no ruling rests on it.

1. **"A ghost story told inside the same setting."** Nobody tells it. The analyst wrote: "What the game says
   about its own status: nothing. No frame was found that marks it as a game or a tale inside the world"
   (memo-sb-mimic, section 2.7). W6 was written for tales that have a teller inside the world: Candy Cadet,
   UCN's cartoons, Mr. Hippo. Put under W6 "as a whole", Into the Pit acquires a teller the game does not give
   it, and a chapter will then write "a ghost story told in the world of the games", which is an invention.
   **Fix:** a standing of its own: "an adaptation that the main games never place". It may be shown to agree
   with the model; nothing rests on it. Take "Into the Pit as a whole" out of W6.

2. **Three of the four reasons would demote things the model relies on.**
   - "A time-travelling ball pit and a creature that replaces a father" is a test of how fantastical the plot
     is. By that test UCN's endless night, Princess Quest and FNaF3's minigames are tales too.
   - "Six bodies against the newspapers' five." The model itself gives the killer six victims, remembered
     together in three later games (six stones, six dolls, six graves). The mismatch is where and when the sixth
     dies, which is a conflict with R7, not with a newspaper.
   - "Other self-contained tales inside the same game." Pizzeria Simulator and UCN hold tales too. A game that
     contains tales is not thereby a tale.
   - "A novelty that grew" is a remark about how the game was made, and it comes from a transcript.

   What does set it apart, and applies to nothing else in the archive: its plot is a book story's, and the
   source policy excludes the book; no main-line game refers to its events; Scott has not placed it.
   **Fix:** rest the ruling on those three. Add Scott's written statement that he stops licensed partners from
   inventing lore, founding dates included (`scott-2024-no-new-lore-on-products`, uncited): it is written, it
   predates the game by three months, and it is his only statement about licensed work and dates. It cuts both
   ways for the 1985 logo and should be shown doing so.

3. **"Printed" for 1985.** The record says "the exact screen was not confirmed", shows an unused variant
   reading 1983, and notes that the year "reads like a founding date under a logo"
   (`into-the-pit-past-year-1985`). A founding date under a logo would not date a scene even inside that game.
   Row 31 of the dating table calls it "printed".
   **Fix:** "a logo graphic; placement unconfirmed". Not "printed" until someone sees it on a screen in play.

4. **"Corroboration for R11's two suits, at story weight."** A yellow bear suit in an adaptation the games
   never place cannot corroborate "at story weight".
   **Fix:** "agrees with R11".

5. `rulings-brief.md` lists `into-the-pit-phone-guy-night3-stuffing` under "Against", while the ruling uses it
   for "same setting". One of the two is a slip.

---

## R26. Labels

**Verdict: holds with changes.** The three tiers square with the source policy, and the first-use formula is
the right tool. As written, writers cannot follow it, for the reason in point 1, and it contains one descriptor
that does what it forbids names to do.

1. **The link token prints the fan label before the writer can qualify it.** Writers are told to put
   `{{entity-id}}` on the first mention of anyone who has a page (BRIEF-writer). The renderer prints the `name`
   field of `people.ts` for that token, and the token has no label part (`components/ui.tsx`: the pattern is
   `{{id}}` only; `labelForEntity` in `store.ts`). The names it will print include `glitchtrap` "Glitchtrap"
   (`nameStatus: canon-name`), `burntrap` "Burntrap", `scraptrap` "Scraptrap" (`canon-name`), `the-mimic` "The
   Mimic (M2)", `tape-girl` "Tape Girl", `phone-dude` "Phone Dude", `shadow-freddy` "Shadow Freddy" and
   `crying-child` "The Crying Child". So the first mention, which is exactly where R26 wants "the rabbit in the
   code (known as Glitchtrap, Scott's working name for it)", will print a bare tier 2 or tier 3 label as a link.
   Section 5.2 flags `glitchtrap` and `tape-girl` only, and R26's "Ids" paragraph covers three other ids.
   **Fix:** R26 gives the display name for each of these entities (the descriptor, with the label as an alias)
   and tells writers not to use the token for them until `people.ts` is changed. "The Mimic (M2)" also puts
   R21 (2)'s medium-high identification into a name; "the copying endoskeleton" does not.

2. **"The burnt rabbit" names two figures.** R20 is headed "The burnt rabbit under the Pizzaplex"; tier 2 gives
   "the burnt rabbit (known as Burntrap)" for that figure and "the burnt rabbit of Pizzeria Simulator, William
   Afton" for the salvaged one; R1's link b is "FNaF3's Springtrap is Pizzeria Simulator's burnt rabbit". R26
   rejects the "-trap" names because "a name that argues a contested ruling should not be the default". One
   descriptor shared by both figures argues R20 (2), which is rated low-medium.
   **Fix:** never bare. "The salvaged rabbit of Pizzeria Simulator", or simply "William Afton" as tier 2
   already prefers; and "the burnt rabbit under the Pizzaplex", always with its place.

3. **Headings and captions.** "After the first use the label may serve as a handle in headings, captions and
   cross-references." A heading or caption is what a reader sees first and what a search result shows, and it is
   where a bare label most reads as the game's own name. The brief's rule is that such labels are "not used as
   if the games said them".
   **Fix:** headings and captions carry the descriptor; the label may follow in brackets.

4. **"(known as Burntrap)" does not say whose label it is.** The brief: "say whose label it is". The Glitchtrap
   form does.
   **Fix:** "the burnt rabbit under the Pizzaplex (the game's files call it Burntrap, a working name that Scott
   has said now stands)".

5. **The games' own words are available and are not offered.** For the rabbit in the code the tapes say "the
   anomaly" (`hw-tape-girl-calls-it-the-anomaly`). For the figure from the cabinet RUIN says "that rabbit thing"
   (`ruin-fake-gregory-signal-jammer`). Both need no licence.
   **Fix:** list them in tier 1 as the games' own descriptors and prefer them to coined ones.

6. **Two records disagree about "the entity".** Tier 3 puts "The Entity" out as a fan label. One record's note
   says "RUIN's Helpi calls it 'the entity'" (`hw2-mimic-teaser-mxes-ending`); another says "Helpi's lines were
   not retrieved" (`ruin-the-entity`). If Helpi's text uses the word, lower-case "the entity" is the game's own.
   **Fix:** check Helpi's text; until then mark the tier 3 entry as unverified.

7. **Tier 2 rests on one transcribed sentence, and one check in play might replace it.** The ruling admits the
   first half. The check: Help Wanted 2's gallery lists selectable characters, and the analyst could not
   confirm whether it prints "Vanny" and "The Mimic" beside its models (memo-hw, "Could not verify", item 17;
   `hw2-credits-vanny`; `hw2-mimic-teaser-1979-white-tiger`). If the gallery prints "The Mimic" or "Glitchtrap",
   the name is tier 1 by the ruling's own "would change if", and RUIN's caution changes too.
   **Fix:** make that check before the chapters are written.

8. **A fixed table for the rabbits.** The archive has at least nine rabbit figures in the main line: Spring
   Bonnie the suit, the yellow rabbit the killer wore, Springtrap, the salvaged rabbit of Pizzeria Simulator,
   the dark rabbit, the rabbit in the code, the rabbit-costumed woman, the burnt rabbit under the Pizzaplex, and
   the rabbit-shaped figure from the cabinet. Outside it are Into the Pit's yellow rabbit and Special Delivery's
   "vintage Bonnie". Thirty chapters by several writers will not hold these apart by tiers alone.
   **Fix:** one table in R26: the figure, its fixed short descriptor, its label if any, and the ruling that
   says what it is.

Smaller. Within Secret of the Mimic, "the Mimic" is on the title and a blueprint and the game does not say
which of the two machines it names; the model uses it for M2, and the first machine copies too (R21 (1)). The
tier 1 caution covers RUIN only.

---

## R27. Scope, and the rules of weight W1 to W9

**Verdict: holds with changes.** The rows that rest on Scott's written rulings hold. The model's own conventions
(W3, W5, W6 and the Security Breach rule) are each defensible. They are not yet one rule. The question put to
me was whether the same rule, applied elsewhere, would exclude something the model relies on. In the first
seven cases below it would.

1. **W5 has no layer for what intrudes.** "Anything staged inside a Fazbear product... shows what the company
   chose to stage." The model relies on at least seven things that are inside the levels and that the company
   plainly did not stage: the six dolls and the arm that offers them (`hw2-memory-dolls`); the White Tiger doll
   on code 1979 (`hw2-mimic-teaser-1979-white-tiger`); Princess Quest in three games; the keypad codes (dating
   row 39); the rabbit mask in the Corn Maze cellar, which R27 itself calls "story" and "core"
   (`codb-corn-maze-rabbit-mask`); the rabbit's birthday room (`hw-pizza-party-birthday-room`); and the figure on
   the instruction monitors (`hw2-glitchtrap-corrupts-backstage`). W5's exception names only "tapes, emails, the
   hidden call, what the mask shows when removed".
   **Fix:** three layers, with a test. The level as built is the company's staging. The frame is story.
   Intrusions are story too, attributed to whatever intrudes; a thing is an intrusion when the game marks it
   as not the company's (it is behind a secret, it glitches, it addresses the player, or it works against the
   level's own instructions). Then say which layer Pizza Party is in.

2. **Staged props are treated two ways.** The banner "FALLFEST 83'" in a company level is kept as "weak dating
   support" and entered as "printed" (row 38; `codb-fallfest-83-banner`), and a 1970 poster from another company
   product is row 2 (`hw2-fall-fest-1970-poster`; "where it hangs in the game was not checked"). The child's
   hat, watch and shoe inside Freddy, in a third company level, leave the murders chapter because a level is
   "not an observation of events" (`hw-pns-freddy-child-items`). All three are scenery in company products.
   **Fix:** one sentence in W5: a staged prop may agree with what an unstaged record already carries, as W6
   lets a tale do, and is never the only support. Then the banner, the poster and the items in Freddy are all
   "agrees (staged)", and none is "printed".

3. **Branches are treated two ways.** Sister Location's Private Room: what does not depend on the branch
   counts on either branch. The rooftop page: discounted because its branch is not followed (R19, point 1).
   **Fix:** state the Private Room rule as general. A branch is discounted for what it makes happen, never for
   what it shows to be already so.

4. **UCN may establish; Into the Pit may only agree; no stated test separates them.** Neither has a ruling from
   Scott. Both are fantastical. Both contain tales. A thesis clause rests on UCN's lines (R16). The real
   differences are written nowhere in R27: UCN is Scott's own game and its lines answer Pizzeria Simulator's
   last speech; Into the Pit adapts a book story and no main-line game refers to it.
   **Fix:** write the test into R27, in this order: Scott's written ruling; what the work says of its own
   status; whether a main-line game takes it up. How fantastical the content is, is never a test.

5. **W7 and textures.** W7 excludes "data-only content" and "file names never shown on screen". Several records
   the model treats as "printed" or `shown` are textures read on the wiki whose place in play was not
   confirmed: the work order and the credential form (R2), the diner poster, the 1985 logo, the 1970 poster,
   and the earthquake newspaper (`ruin-pizzaplex-abandoned-earthquake`: "a small image, enlarged"). Until
   someone sees them in play they sit on the line W7 draws.
   **Fix:** a status "texture, placement unconfirmed" that bars "printed" in the dating table, and a short list
   of checks in play, the work order first.

6. **Cut content is mentioned when it agrees.** "They are not evidence and must not be cited as support; they
   may be mentioned in `outsideStory` as agreeing with the model." The unused Help Wanted 2 lines agree with
   R21. Cut material that disagrees gets no such mention: the analyst notes that Special Delivery's
   data-mined, undelivered emails "merge the stories" that R18 keeps apart as two firms (memo-hw, Q5). Under W7
   none of it is evidence, and section 4's second rule is that a record goes outside "for what it is, not for
   what it would do to the model".
   **Fix:** delete the last clause of that note, or allow the same mention for every cut item whichever way it
   points.

7. **The Security Breach rule.** "The pieces... carry weight. The story that joins them is, by Scott's account,
   not the one he planned." "Records against" already concedes that its only stated basis is a machine
   transcript. As worded, the rule is a licence to set aside any joined-up event of the base game, and it is
   used that way in R19 (5) and R20 (3). W2 already gives the model what it needs without the transcript: where
   a later game contradicts the base game on a point, the later game wins.
   **Fix:** delete the "pieces" and "story" wording and take the transcript out of the Basis column. R19 (5)
   and R20 (3) must then each name the later game that contradicts the base game on that point. For the
   rooftop page there is none.

8. **"Mechanics are not lore", with exceptions when a ruling uses one.** Scott's "because- game" answered one
   question, about doors and power (`scott-2015-doors-power-because-game`). Section 4 states it as a rule, and
   the common brief lists mechanics among the things that are evidence. The exceptions are then chosen by use
   ("a mechanic a ruling relies on stays with that ruling").
   **Fix:** a test in place of the list. A mechanic counts when a character, a document or a screen in the game
   explains or names it; a tuning value does not.

9. **W1 states the 2015 ruling more broadly than Scott made it.** "Books and games are separate continuities"
   was said of the first novel (`scott-2015-books-separate-continuity`). Of the later story series he wrote
   that it "takes place in the FNAF universe" with stories "some connected directly to the games"
   (`scott-2018-frights-some-connected-to-games`), and then "look to the novels to fill in some of blanks to
   the past" (`scott-2020-novels-fill-blanks`). His 2024 "yes, that is correct" is ambiguous on purpose
   (`scott-2024-books-canonicity-yes`, uncited). The books are out because the owner's source policy says so.
   That is a sound reason, and it is a different one. A reader who knows the 2020 post will object to W1 as
   worded.
   **Fix:** W1 says "Scott ruled the first novel a separate continuity". R27's last rows say that his later
   words about the story series point the other way, and that the exclusion is this project's policy.

10. **The dancing figure is not set dressing.** R27 and section 4 file "the dancing figure" of Curse of
    Dreadbear under company scenery. The record is the rabbit of the code appearing on a hill "near the house"
    in the add-on's hub (`codb-dancing-glitchtrap`). It is an intrusion in the sense of point 1.
    **Fix:** file it under the rabbit's chapter.

The earlier games as in-universe products: see the last paragraph under R18.

---

## R31. Fazbear Entertainment's conduct

**Verdict: holds with changes.** The pattern is real and well recorded from 1987 on. Six corrections, none of
which changes the rating for the modern company.

1. **"Every official explanation in these games is a denial or a programming quirk."** The ruling's own list
   has two that are neither: an admission, "some stories associated with our name were loosely based on actual
   events" (`hw-intro-loosely-based-on-actual-events`), and an apology for not being "completely honest"
   (`ffps-completion-tutorial-atonement`).
   **Fix:** "nearly every"; note that each admission arrives wrapped in a denial.

2. **The Pizzeria Simulator items presuppose what the ruling rates medium-low.** The certificate, the
   blacklisting, "atoning for past mistakes" and the Fazbear mark on the trap's hardware are the company's
   conduct only if the Cassette Man acted through the company. Otherwise they are his cover and his voice.
   They stand in "Records for" a pattern rated high.
   **Fix:** a separate line: "if the trap was the company's (medium-low)".

3. **The 1979 items.** "Technicians sent to their deaths one after another" rests on the bodies and on two
   lines spoken by the impersonating machine (`secret-of-the-mimic-previous-technicians`,
   `secret-of-the-mimic-f10n4-fazbear-will-send-another`). What the company certainly says that night is the
   opening call, the work orders, and a dismissal for "misplacing company property"
   (`secret-of-the-mimic-clock-out-real-dispatch`), which is conduct enough.
   **Fix:** cite the dismissal. Say "men had been sent before him and had not come back".

4. **A child's rumour stands in the list of conduct.** "They come to life at night. And if you die, they hide
   your body and never tell anyone" (`fnaf4-pigtail-girl-hide-your-body`). The ruling calls it "a child's
   version", which is fair, but the "they" who hide the body are the machines, not the company. The line shows
   what children were saying around 1983. It is not a record of what the company did.
   **Fix:** move it out of "Records for", or cite it only as "the rumour was already current".

5. **"After the fire it... copies what was burned. This is a pattern the records state over and over, not an
   inference."** Two inferences are inside the sentence: that the scan followed the fire (thesis, point 5), and
   that the scanned boards came from what burned, which R18 says no game states (`sd-which-board-unknown`).
   Report B raises the same words under R28.
   **Fix:** "it turns its history into product and scans old boards into software, twice" is stated. "After the
   fire" and "what was burned" are the model's reading.

6. **Two records that test "a continuous actor" are not here.** An unqualified head of security is appointed
   because "the recommendation came from the top", on a reference whose name is withheld
   (`security-breach-msg-marked-for-deletion`; `security-breach-msg-no-questions-asked`, `implied`). Either the
   company's top serves the thing in the network or the thing has reached the company's top. On the second
   reading the Pizzaplex's conduct is not wholly the company's own.
   **Fix:** cite both under "Strongest alternative". Separately, the "gas leaks" story for the cancelled opening
   (`scottgames-site-sl-news-gas-leak-cancellation`) is the other firm's excuse, not Fazbear's; if the frame
   chapter uses it, it should say so.

---

## Section 4. Outside the story

**Verdict: holds with changes.**

1. **Rule 2 is contradicted by three group definitions.** "A record goes outside for what it is, not for what
   it would do to the model." Then: a joke "leaves this group" if a chapter quotes it; "a mechanic a ruling
   relies on stays with that ruling"; set dressing is what "stage[s] nothing the story uses". A joke that is
   quoted is still a joke. A reviewer can no longer tell whether an item is outside because of its kind or
   because nothing was made of it, which is what rule 2 was written to prevent.
   **Fix:** keep kind and use apart. Every record has a kind (joke, mechanic, staged prop, tale, promotion). A
   chapter may cite a record of any kind and must then print the kind beside the citation ("a joke of
   Scott's", "a staged prop"). `outsideStory` is then "of such a kind, and cited nowhere", which is honest about
   being a fact of use.

2. **`stories-within`** puts Into the Pit's three secret minigames outside while Candy Cadet's tales are filed
   under a chapter. Both are tales inside a game. The difference is that the model has a reading of one and
   not of the other. With R23 changed, the three minigames go with Into the Pit as part of an unplaced
   adaptation.

3. **`company-set-dressing`** lists "the dancing figure" (R27, point 10) and says Pizza Party is "a staging"
   (R18, point 6). Both need the intrusions layer first.

4. **`development-commentary`** lists "working names" as outside. R26's tier 2 rests on Scott's account of two
   working names. One clause should say that statement is cited by the labels note.

5. **`promotion`** puts "years on teasers that are release dates" outside. The model cites the "1979" that
   ends the Secret of the Mimic teaser (`secret-of-the-mimic-teaser-1979`). Say in one clause why that year is
   not a release date, so the rule is not read against R2.

---

## The thesis (section 1)

**Verdict: holds with changes.** The paragraph is a real story, it hangs together up to the fire, and most of
its clauses are covered by the table beneath it. The table is the best thing in the section. After the fire the
paragraph is firmer than its rulings, and one thing a reader expects is missing. The revision made at about
22:38 already removed one fault I had drafted (the costume no longer falls on the daughter's killer, and the first murders
are no longer given an order). Ten problems remain.

1. **"One of the two men behind the restaurants", "his partner's daughter", "his old partner".** No record
   carries "partner" or "the two men" (R2, point 4). The table row rates it "strong" on "old friend" and
   "unwillingly helped to create".
   **Fix:** "an old friend"; "the daughter of the man who built the machines".

2. **"For his own family" is right, and a ruling contradicts it.** The paragraph says the costume maker built
   the copying machines "for his own family". R21's "product" paragraph says the endoskeleton that becomes any
   shell is "what Fazbear was paying Murray for". Edwin's own log supports the thesis: the client learned of M2
   through a leak and "can't have it" (R21, point 3).
   **Fix:** change R21, not the thesis.

3. **"Nobody designed that" is rated high.** The record is one man saying he does not know how it happened
   (`ffps-insanity-tiny-breaths`). The table's next row says that Afton's deliberate work "followed the five is
   the model's convention". If that order is a convention, "nobody designed" the first hauntings is no firmer
   than the convention. And in step 8 of section 3.2 the model reads Give Gifts as the Puppet giving the dead
   children the mascots' masks (`fnaf2-give-gifts-give-life`), which is an act with a purpose.
   **Fix:** "The man who built the machines did not design that" (high), or "no record shows anyone designing
   it" (medium).

4. **"Which works where fire did not" is rated medium.** R19, point 5: low-medium. The comparison is also
   loose. The fire was aimed at haunted machines; the game inside the game is aimed at a presence in code.

5. **The order "fire, then scan" is assumed.** The paragraph, R28 ("scans what was burned") and R31 ("after
   the fire") put Help Wanted after Pizzeria Simulator's fire. Section 3.2 lists "20 before 22" under
   "Orderings the records fix" and in the same line calls it "inferred"; row 35 says "After row 32" and cites
   nothing that bears on it. Report B deals with the listing. The records, for my rulings: nothing in Help
   Wanted, Curse of Dreadbear or Special Delivery mentions that fire. Fitting "after": six stones on Princess
   Quest's route (`hw-mobile-princess-quest-graveyard`). Fitting "before or during": a foul old rabbit, in no
   database, turning up at customers' homes (`sd-vintage-bonnie-reports`) beside "something outside that's been
   trying to get in for months" (`ffps-tutorial-something-outside`); a company that is suing people in Help
   Wanted (`hw-intro-complete-lunatic`) and "no longer a corporate entity" at the fire
   (`ffps-completion-tutorial-atonement`); "newly re-branded" (`ffps-tutorial-rebranded-disclaimer`) beside the
   tape's "This isn't just an attempt to rebrand" (`hw-tape-13-fe-hired-developer`); a "buyout" under way
   (`hw-tape-10`). None of these decides it.
   **Fix:** mark the order C in section 3.2. Add "that the scan followed the fire is the model's convention" to
   the scan row of the thesis table. Reword R28 and R31 to match.

6. **After the fire the model has the killer in up to four places.** Held in an endless night (R16, medium).
   Something of him in the code (R18, medium). A physical, foul-smelling rabbit abroad (R18, medium). Remains on
   a frame under the Pizzaplex (R20, low-medium). The thesis says "It does not end Afton" and gives two of the
   four. Each is argued in its own ruling, and nowhere does the model say which it holds together. Three or
   four mediums held together are low. R18's "How this sits with R16" does this for one pair only.
   **Fix:** one short paragraph, in R28 or under the thesis table: what the model holds jointly, at what joint
   confidence, and which of the four a chapter may assert without the others.

7. **What is missing: the nights the player actually plays.** In the revised paragraph the mascots "smell" and
   "stain", the children "stay on in them", and then a fire gives them graves. In the games the mascots hunt the
   night guards of two restaurants, and the five corner their killer in the hidden room (section 3.2, steps 12,
   13 and 15). And Michael, the one person who runs through Sister Location, the burnt attraction and most
   likely the last pizzeria, appears only inside "the machines take his own children too". The standfirst
   promises "the machines that kept his victims"; the paragraph never shows them doing anything.
   **Fix:** two clauses. "For years the mascots hunt the men who sit the night shift, until five ghosts corner
   their killer." "His son goes down after him."

8. **"It burns with him inside."** R28 supplies the sentence with the Cassette Man as its subject. In the
   thesis the subject is "his old partner", every "he" and "his" before it in the paragraph is Afton, and the
   next sentence but one is "It does not end Afton". A reader takes "him" for Afton.
   **Fix:** "and it burns with all of them inside, himself included".

9. **Three citations in the recurring-ideas table do not fit their rows.** `fnaf2-give-gifts-give-life` is
   under "The lure is a present"; those gifts are what the Puppet gives the dead, as the table's own bracket
   says. `codb-mask-plush-voice` is listed, in the revised row, among "Machines that speak as a friend"; the
   record says "the other voice is never heard", and nothing says it is a machine. `hw-pizza-party-birthday-room`
   is under "The lure is a present" while its layer is unsettled (R18, point 6).

10. **The fallback standfirst**, "from a costume workshop in 1979", dates the workshop by its last night. The
    paragraph says "By the 1970s", and the workshop's chart starts in 1965 (dating row 1).
    **Fix:** "from a costume workshop in the 1970s".

---

## Scott's 2024 interview: what rests on the transcripts

No ruling about the story rests on a transcript alone in form. In substance four things do, or nearly do.

- **R26, tier 2.** The licence for "known as Glitchtrap" and "known as Burntrap" is one sentence
  (`scott-2024-interview-placeholder-names-canon`). The ruling says so and rates the tier medium.
- **R27, the Security Breach row.** Its only stated basis is `scott-2024-interview-sb-story-not-as-intended`.
  The ruling says so. The rule then discounts the rooftop page in R19 (5) and shapes R20 (3).
- **R20 (3).** The game records do not point the ruling's way (R20, point 1). The direction comes from
  `scott-2024-interview-burntrap-never-meant-to-move`.
- **R21 (3)**, "a character in its own right", and **R18**, "keeps a possessor in the picture", each rest on a
  single transcribed word.

R23's "novelty" is one reason among four and can be dropped without loss. R21 (2)'s "the Mimic" has game
support of its own. R19's "one character" is marginal.

Seven sentences from one video carry all of this, and the records give a timestamp for each: "possession of AI
or possession of machines or circuitry" (17:14); "that's the canon name now" (17:47); the "mexus" passage with
"that was a character" (18:53); "I had a very specific story in mind and it is very different than the one that
got in the game" (20:29); "Originally, Burntrap was never supposed to move" (21:56); "I don't think it's the
last that we've seen of the Mimic" (23:45); "It was still just supposed to be a novelty" (41:43). A person
listening for ten minutes would settle them. Until then tier 2 and the Security Breach rule should be the first
things a chapter is prepared to lose.

---

## Storyline, dating table and `rulings-brief.md`: problems noticed along the way

The model has no storyline prose or exemplar chapter yet. These are in section 3 and the brief.

**Section 3.2.**
- Step 1: "low-medium that Hen is the Cassette Man" becomes low (R2, point 3).
- Step 4: "F for the takeover" joins a stated claim and an inferred one (R2, point 1).
- Step 5: "the foreclosed building". The foreclosure notice is in the mailbox at the gate of the Murray house
  (`secret-of-the-mimic-mail-foreclosure`); the work order names the "MCM Facility". No record says the workshop
  was foreclosed. Say "Murray's shuttered workshop".
- Step 22: "has games made about its history" is marked F; R18 rates the commissioning medium.
- Step 23: "She makes a mask" (R19, point 8).
- Step 24: the vintage Bonnie is F as an email; its place after the fire is a convention (thesis, point 5).
- Step 25: "built over the burnt pizzeria" states in the step what its own mark calls an inference. Say "over a
  buried pizzeria".
- Step 26: "The woman in the rabbit costume is Vanessa" and "she is freed" are stated flat and marked "F for
  the pieces"; they are R19 (1), medium-high, and one ending.
- Step 27: "led by 'gifts' to the recharge station" (R22, point 3).
- "Orderings the records fix" includes "20 before 22", which the same line calls inferred (thesis, point 5).

**Dating table.**
- Rows 2, 31 and 38 are "printed" inside a company product, an unplaced adaptation and a company recreation.
  Rows 2 and 31 also have unconfirmed placement (R27, points 2 and 5; R23, point 3).
- Row 3: "relative (firm)" depends on the note being to the living Fiona (R2, point 7). Row 3 also cites the
  diner poster for a date it cannot carry (R2, point 9).
- Rows 3 and 6: `secret-of-the-mimic-mcm-rnd-floor-opening-memo` is not in the table and constrains both.
- Row 8: say which event "Aug 3rd" dates on each reading (R2, point 6).
- Row 9: "printed" needs the caveat that the ruling's own "Records against" carries (R2, point 5).
- Row 35: "After row 32" has no record (thesis, point 5).

**`rulings-brief.md`.** It repeats, without their hedges, the wordings criticised above. R2: "took it over:
high (stated)" and "(1) and (2) as fact". R18: "not Murray's machine (low for either)" and "a physical
Springtrap abroad after the fire (medium)". R19: "Princess Quest is the remedy that works on the rabbit
(medium)". R20: first use "the burnt rabbit (known as Burntrap)". R23: "A ghost story told inside the same
setting", and the mis-filed "Against". Its step 26 reads "Vanessa is freed through Princess Quest... Firm".
Writers will work from the brief, so each change accepted here has to be made there too.

**`games.json`.** Section 5 lists the files to correct and leaves this one out. Three of its `settingYearLabel`
values contradict the model. Into the Pit: "the past era is 1985 (calendar seen in-game)", where the record
says no calendar was found in the game and that the calendar belongs to the book
(`into-the-pit-past-year-1985`); this is a book detail printed as a game fact. Secret of the Mimic: "Undated
here... in-game dates not verified by this research", against R2 (1). FNaF4: "Undated (no year is shown
in-game)", against row 10.

**Records to add** (none exists in the archive): Security Breach's cast credits; Security Breach's two
diner-poster collectibles; the small scrap machines of Secret of the Mimic's walk-away route; what Help Wanted
2's gallery prints beside its models; what RUIN's Helpi calls the figure from the cabinet.

---

## The five changes that matter most

1. **Restate the modern-era alternative as a program, and rate the identity claims by what the games settle
   (R18, R20, R21).** The rival to "three separate things" is a copying program that reached company hardware,
   not a body behind concrete. Split "presents as the killer" (medium-high) from "is something of the killer"
   (medium at most, against a copier at low-medium). Replace "his hardware" with "old company boards". Lower
   R21 (5), second half, to low-medium and R20 (3) to low. Delete the sentence that cites material outside the
   games as a reason. Add the records left out on both sides: the six stones, the dolls and Springtrap at the
   window for the killer; the reused lines, the talk-back programs and the White Tiger doll for the copier.

2. **Say what "Afton after the fire" is, and stop treating "fire, then scan" as fixed (thesis, R16, R18, R20,
   R27, R28, R31).** The model has him held in a night, copied into code, walking abroad and standing under the
   Pizzaplex, each at medium or below and never added up. Special Delivery's rabbit is "the copy" in one place
   and the original in another. The order of the fire and the first scan rests on no record. One paragraph
   should state what is held jointly and at what confidence; section 3.2 should mark the order as a
   convention.

3. **Take the novels' frame out of the makers (R2, thesis).** "Fazbear took it over" is half stated and half
   inferred: split it. "Hen is the Cassette Man" falls to low, and the ruling should say that the name carries
   nothing because no game names the Cassette Man. "Partner" and "the two men behind the restaurants" have no
   record; the game says "old friend". Use the R&D floor memo, which the model never cites and which strains
   two of its derived dates.

4. **Give the rooftop page and the cast credits their weight, and lower what Princess Quest is said to achieve
   (R19).** Who wears the costume cannot depend on a branch, by the model's own Private Room rule. Security
   Breach credits two actresses, and the model counts casting as evidence elsewhere. "Later games follow the
   Princess Quest ending" and "works where fire did not" both fall to low-medium; RUIN with the mask off is the
   aftermath of the underground route.

5. **Make scope one written test, applied the same way to what helps and what does not (R23, R27, W1, W5 to
   W7, section 4).** Add an "intrusions" layer to W5. Treat staged props alike. Call Into the Pit an unplaced
   adaptation, not a story someone tells. Bar "printed" for textures whose place in play is unconfirmed. Stop
   mentioning cut content only when it agrees. Replace the transcript-based Security Breach rule with W2. State
   that the books are excluded by this project's policy, since Scott's later words do not exclude them.

Close behind these: R26 cannot be followed until `people.ts` stops printing "Glitchtrap", "Burntrap", "Tape
Girl" and "The Mimic (M2)" through the link token, and until "the burnt rabbit" stops naming two figures.
