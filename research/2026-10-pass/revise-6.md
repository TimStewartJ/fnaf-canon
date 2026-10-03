# Revision notes, writer 6: `src/data/chapters/afterimage.ts`

Chapters: `cover-story`, `digital`, `vanny`, `pizzaplex`. One revision pass, finished 3 October.
Only `afterimage.ts` was edited. Nothing is committed.

## Checks

- `npx tsx scripts/validate.ts`: OK. Coverage 1044/1044 accounted, 0 unaccounted. The five warnings name records
  that are not in my file (`fnaf4-night8-no-story-text`, three `scott-2020-…` records, `scott-2014-faith-and-work`).
- `npx tsc -b`: clean, exit 0.
- `prose-report.mts`: no sentence over 40 words in any of the four chapters; no missing field.
- No `// REVIEW:` comment is left. The only comments in the file are the header, the `further` headings and the
  record labels. The header no longer says "largest building", and its kicker follows `theory.ts` ("The modern era").
- All four `tension` texts are five sentences, and each names every record in its `counterEvidence`.
- A stricter quotation check than the fact-checker ran: every phrase in quotation marks is now verbatim in the
  `quote` field of a record cited beside it. The two exceptions are not quotations from a body sentence's record:
  "a complete lunatic" in the `answer` of `cover-story` (the answer carries no citations; the words are in the
  `quote` of `hw-intro-complete-lunatic`), and the poster's sign in a figure caption (in the `quote` of the
  figure's own record).
- No year after 1987 appears anywhere in the file. The out-of-universe "2019" (twice) and "2024" (once) are gone
  too, since none was needed.

## Words per chapter (the prose report's count)

| Chapter | Before | After | Note |
|---|---|---|---|
| `cover-story` | 1,044 | 1,000 | |
| `digital` | 1,217 | 1,097 | `tension` cut from nine sentences to five |
| `vanny` | 1,079 | 1,030 | About 85 words of fact-check additions are inside this figure |
| `pizzaplex` | 1,072 | 1,031 | About 75 words of fact-check additions are inside this figure |

`vanny` and `pizzaplex` are still 3% over the target. Each took on what the fact-check asked for (`vanny`: the
staff messages, two more counter records in the body, three "as described" markers, the corrected sentence on the
order of the emails; `pizzaplex`: the headless Freddy, the comics page brought up beside the wreck, the record for
Bonnie), and each lost between 115 and 135 words of the draft to make room. Nothing is over 1,100.

## Applied / rejected

34 findings for my four chapters: **34 applied, 0 rejected.** The seven findings on storyline beats are the lead's.

Where the applied fix differs from the sentence the checker proposed:

- `cover-story` 1: the callout now reads "That they were made as a cover-up is what one tape says and no other
  record does: a strong reading, not a fact." "No game states it" is gone. "Most likely true" stays in the
  paragraph above the callout, where the tape is quoted.
- `cover-story` 3: the answer says "what it admits comes wrapped in a denial or a disclaimer". The body gives no
  count. It names two admissions that are the company's without condition: "actual events", followed by the
  lunatic (`hw-intro-loosely-based-on-actual-events`), and the "hilarious mistake", which the guide then offers
  as the company's full legal disclaimer (`hw-handunit-anomaly-fun-fact`, now cited here too). The Pizzeria
  Simulator apology has its own paragraph, with the condition that the Cassette Man worked through the company.
- `cover-story` 4 and `digital` 8: quotation marks removed and the words paraphrased, as the lead asked. The
  stricter check found six more of the same kind, which the checker's script had passed as "a printed word in a
  claim"; all are fixed: "CLOSED /" on the poster's sign, "QA", "a memory", "Whatever Dan brought me", "It was an
  accident." and the search for "help".
- `cover-story` 6: applied as proposed. Separately, the lawyers' halt on "vintage hardware" moved out of the
  table (it is conduct, not an explanation) into the paragraph on what the company knew, marked "by the emails'
  order". `digital` no longer tells it, so the caveat about the order of the emails is no longer needed there.
- `cover-story` 8: the convention about the fire and the scan is now said once, in the `tension` (the lead's own
  sentence), and no longer in the body.
- `digital` 1: the rival column has all five of R18's supports. To make room, the count of unshown steps moved
  out of the columns into the paragraph after the block, which is the "balance in two sentences" the revision
  asked for. The rival column is 73 words (the guide's range is 40 to 70).
- `vanny` 2: PQ3 is "As that game is described"; Help Wanted 2's main ending is "as described" and covers the
  scene and its tie to RUIN; RUIN's hideout is "as the room is described".
- `vanny` 4: applied in the body, the `tension` and `changesIf`, and also in the `changesIf` of `pizzaplex`, which
  had the same clause.
- `vanny` 8: the body and the hero caption say "the rabbit in the code". The first-use gloss with the working
  name is given once, in `digital`; `vanny` links there.
- `pizzaplex` 2: "Where the staff went, and who wrecked the Bonnie found in RUIN, the game's sequel
  [[ruin-glamrock-bonnie-remains-hidden-room]], are open (see ((open)))". The record is cited so that the wreck
  has a source.
- `pizzaplex` 3: the headless Freddy has a paragraph after the building's, is in `counterEvidence`, and is
  named in the `tension`.
- `pizzaplex` 7: written to the formula in "For every writer" ("a newspaper texture whose placement in play is
  unconfirmed"). The wiki is not named in the prose.

## My own REVIEW notes, decided

- `cover-story`: `security-breach-msg-marked-for-deletion` stays in `counterEvidence`, with its two readings set
  side by side in the `tension`. Secret of the Mimic stays out of the table, because R31 holds the pattern high
  only from 1987 on. Four records the outline names for the pattern are not cited, for length. Three are in this
  chapter's `further` (`fnaf3-tape4-do-as-you-wish`, `ffps-insanity-certificate`,
  `ffps-tutorial-rebranded-disclaimer`); the fourth, `fnaf2-news-originals-kept`, has its home in another chapter.
- `digital`: the "WA" letter is now cited (my note that it was in this chapter's `further` was wrong: its home is
  `partners`). The staged prop that agrees (`hw-pizza-party-springtrap-window`) and the dancing figure on the hill
  (`codb-dancing-glitchtrap`) stay in `further`, as the revision allows. The gravestones are "counted on one
  screenshot". Scott's remark about "possession of AI" stays, in one sentence after the balance, marked as a
  transcript, with "what is possessed, not by whom"; nothing is built on it.
- `vanny`: the two teasers, the second Princess Quest game and the father called Bill stay in `further`. The cast
  credits are not used.
- `pizzaplex`: the line back from "a new Endo" uses `secret-of-the-mimic-log-training-m1`, as the outline asks.

## Round-three lines kept in different wording

| Field | The line | Mine | The record that says less |
|---|---|---|---|
| `cover-story` answer | "calls the whole history the invention of" | "puts most of that history down to" | `hw-intro-complete-lunatic`: "the majority of them" |
| `cover-story` answer | "each admission comes wrapped in a denial" | "what it admits comes wrapped in a denial or a disclaimer" | `ffps-completion-tutorial-atonement` (an apology, then a reason; the company's only on a condition); `hw-handunit-anomaly-fun-fact` (a disclaimer) |
| `cover-story` tension | "certificate says" with two quotations | "closing message speaks of", no quotation marks | `ffps-completion-tutorial-atonement`: the voice is the tutorial's, and its `quote` stops before both phrases |
| `digital` tension | "the name fans use" | "the name it goes by" | `scott-2024-interview-placeholder-names-canon`: the name began as Scott's own |
| `digital` tension | "Help Wanted names old boards and nothing else" | "names nothing of Murray's, only old hardware that the client sent" | `hw-tape-05` ("and things like that"); `hw-handunit-scanned-photos-original-routines` |
| `digital` tension | "no mark of Murray's appears before RUIN" | "nothing in Help Wanted, its Halloween add-on or Special Delivery carries a mark of his" | `hw2-mimic-teaser-1979-white-tiger`: Help Wanted 2 is set before RUIN |
| `vanny` answer | "night guard" | "security guard" | `security-breach-msg-marked-for-deletion` (Chief Security Officer); `security-breach-msg-pink-slip` |
| `vanny` answer | "who took home the rabbit's plush" | "who is left a plush rabbit at the end of Help Wanted" | `hw-trapped-ending`: the plush sits in the hub |
| `vanny` answer, tension | "while the woman in the rabbit costume lies fallen below" | "after the woman in the rabbit costume has fallen" | `security-breach-rooftop-vanessa-alive`: the page shows Vanessa alone |
| `vanny` tension, `changesIf` | "no record shows her after that night"; "shows Vanessa after that night" | "no later game shows her"; "a later game that shows Vanessa" | `security-breach-ending-redemption`: its last page shows her, the next morning |
| `vanny` tension | "the therapist's recordings" | "the therapy recordings" | `security-breach-cd-therapists-shared-and-replaced`: several therapists |
| `pizzaplex` answer | "The company's biggest building" | "The Mega Pizzaplex" | no record ranks the buildings |
| `pizzaplex` answer | "its staff have been going missing" | "its staff messages ask where everyone has gone" | `security-breach-msg-job-security`: a question, and one man unseen |
| `pizzaplex` answer | "hunts through it at night" | "walks it at night" | `security-breach-freddy-cannot-see-rabbit-lady`, `security-breach-ending-rooftop`: no record of a hunt |
| `pizzaplex` answer | "is the aftermath" | "is most likely the aftermath", with the clause on Vanessa's release | R19 point 4: medium, and low-medium |
| `pizzaplex` tension | "above the fallen Vanny" | "after the rabbit-costumed woman has fallen" | as the rooftop page above |

Two changes to round-three lines that are not about a record:

- `digital` tension: the sentence "The concrete under the Pizzaplex does not answer it, because concrete holds a
  body and the rival is a program" is cut. The chapter never raises the concrete, so the sentence answered an
  argument the reader has not met, and the five-sentence limit needed the room for the three counter records the
  fact-check added. The `answer` and `changesIf` of `digital` are the round-three lines word for word.
- `cover-story`, `vanny` and `pizzaplex` tensions: sentences merged to reach five, and one sentence added to each
  for the counter records that are new or were mine (`security-breach-msg-marked-for-deletion`;
  `hw2-glitchtrap-corrupts-backstage` and `hw2-faz-force-ending`; `ruin-prototype-freddy-headless`).

## For the lead

Most important first.

1. **Beats in `theory.ts`** (the seven beat findings; four are places where the chapter was corrected and the beat
   was not). `s-follower`: the rooftop page shows Vanessa alone, not "the masked woman ... fallen below"; "night
   guard of the company's largest building". `s-rabbit-in-code`: "calls its own history" should be "most of the
   stories"; "A second firm" needs "most likely". `s-pizzaplex`: "largest building", "hunted", "three hidden arcade
   games", and the confidence rule for a beat that includes `burntrap`. The part blurb in `theoryParts` still has
   "one night in its largest building".
2. **R31's wording.** "Each admission comes wrapped in a denial" and "the two admissions" do not fit
   `ffps-completion-tutorial-atonement` (an apology and a reason, and the company's own only if the Cassette Man
   worked through it) or `hw-handunit-anomaly-fun-fact` (a third concession, wrapped in a disclaimer). R31 also
   cites the dismissal of the technician without saying that it happens in one of three endings
   (`secret-of-the-mimic-clock-out-real-dispatch`, rule W10). The outline's `cover-story` answer and point 3 carry
   the same words.
3. **R19's wording.** "No record shows Vanessa after that night outside the mask's view":
   `security-breach-ending-redemption` does, on its last page; "no later game" is true. "Ness is already changed
   before the contractor's scan goes wrong" rests on the first email only (`sd-ness-blood-eagle-calendar`); the
   compliance searches, "help", the masks and the voices all arrive after the lockout. The link labels "purchases
   for a disguise" and "a controlling voice" say more than `sd-ness-rubber-masks` and `sd-ness-voices-at-screen`.
   The outline's `vanny` point 2 has "already changed" too.
4. **R18's wording.** "Those appear only from RUIN on" against `hw2-mimic-teaser-1979-white-tiger`, in a game the
   records place before RUIN; "names old boards and nothing else" against `hw-tape-05` and
   `hw-handunit-scanned-photos-original-routines`. If the sentence about the concrete under the Pizzaplex should
   be in `digital` after all, it needs a sixth sentence in the `tension` or a place in the body.
5. **Scenes and labels to check in play before publication.** The chapters now mark each as described, but these
   carry weight: `security-breach-pq3-help-wanted-hub-trapped-door` (not watched),
   `hw2-faz-force-ending` (not watched; its tie to RUIN is the wiki's identification),
   `ruin-vanny-hideout-glitchtrap-shadow` (from the wiki's summary), and above all the "PROTOTYPE" label in
   `ruin-prototype-freddy-headless` (the foot was not viewed). If the label is not there, the headless Freddy
   counts against the underground route and for the Princess Quest ending. `security-breach-ending-burn-it-all-down`
   is worth extending: if the collapse of the building is on screen, it is the best support for R19 point 4.
   `ruin-glamrock-bonnie-remains-hidden-room` was also not viewed.
6. **Evidence records whose `quote` stops short of words the chapters wanted.** Each of these phrases is exact by
   the checker's transcripts and sits only in `claim`, `notes` or `title`, so the chapters now paraphrase. If the
   `quote` fields are lengthened, the quotations can come back:
   - `ffps-completion-tutorial-atonement`: ends at an ellipsis before "atoning for past mistakes and tying up loose
     ends" and "no longer a corporate entity".
   - `hw-intro-vr-game-to-move-past-ghost-stories`: "these childish ghost stories" (notes).
   - `secret-of-the-mimic-clock-out-real-dispatch`: "So you admit it? You misplaced company property?" (notes).
   - `hw-tape-05`: "junk - circuit boards and things like that" (claim). `hw-tape-16`: "I hope" (claim).
     `hw-tape-girl-calls-it-the-anomaly`: "this thing" (claim; it is in the `quote` of `hw-tape-12`).
   - `sd-which-board-unknown`: "Whatever Dan brought me" (claim and title; the `quote` has only the question).
   - `scottgames-hw-teaser-hidden-text`: three of the four hidden lines, among them "It was an accident." (claim).
   - `sd-ness-compliance-searches`: the search for "help" (claim and notes).
   - `hw-handunit-anomaly-fun-fact`: "Please accept that statement as our full legal disclaimer…" (notes).
   - `hw2-memory-dolls` and `hw-credits-tape-girl-qa` have no `quote` at all ("a memory" is in
     `hw2-remember-jeremy-achievement`).
7. **Evidence records, smaller points.** `security-breach-msg-re-theme`: the claim says "Management asks for an
   approved response", but the quoted line reads as a question put to management; who asks is not in the record
   (the chapter says "a staff message asks"). `security-breach-ending-alley`: the title says "Vanny finds him", and
   the claim is that her silhouette looms over him. The exchange in the website's source is recorded twice
   (`scottgames-sb-source-stay-the-course`, cited, and `scottgames-site-sb-source-stay-the-course`, in `further`):
   one should go. `scott-not-part-of-lore` and the three `scott-2019-…` records are one post (the record's own note
   asks the lead to keep one set).
8. **`open` (apparatus.ts).** "No record says what became of either" (the staff and Bonnie): RUIN shows Bonnie's
   wreck; what no record says is who wrecked him. The customer's "those kids"
   (`security-breach-msg-it-is-happening-again`) has no entry, and neither has "the recommendation came from the
   top". The second is now the fourth sentence of `cover-story`'s `tension` and links ((vanny)), which no longer
   repeats the line.
9. **"Largest building" and "hunts" elsewhere:** `places.ts` (`mega-pizzaplex`), `timeline.ts` (era `pizzaplex`),
   `people.ts` (summary of `vanny`), and step 26 of the order in `model.md`.
10. **Coverage plan.** `fnaf4-pigtail-girl-hide-your-body` is filed under `cover-story` as "support"; R31 rules it
    is not conduct, so "colour" would match. Three "core" records are in `further` and not cited, the same three
    as in the draft: `hw-tape-03` (`digital`), `security-breach-cd46-hacking-pizzaplex` (`pizzaplex`) and
    `scottgames-site-sb-source-stay-the-course` (`vanny`, the duplicate above).
11. **Missing record.** Security Breach's cast credits, which R19 says would be a counter-record for `vanny`.

## Records moved in this pass

- **Cut from the text for length, now in `further`:** `hw-credits-tape-girl-qa`, `hw-tape-02`, `hw-tape-14`,
  `sd-contractor-storing-animatronics`, `sd-mail-server-advisory` (all `digital`); `hw2-fazerblast-fnaf-themed`
  (`cover-story`); `security-breach-6am-choice` (`pizzaplex`).
- **Moved between my chapters:** `sd-fe-legal-halt-vintage-hardware` is now cited in `cover-story` only;
  `security-breach-freddy-cannot-see-rabbit-lady` in `pizzaplex` only; `hw-handunit-anomaly-fun-fact` in both
  `cover-story` and `digital`.
- **Newly cited:** `hw-tape-01`, `secret-of-the-mimic-mail-wa-far-behind`, `security-breach-cd46-talking-programs`,
  `secret-of-the-mimic-log-turn-around`, `ruin-mimic-reuses-gregory-lines` (`digital`);
  `hw2-pq4-elevator-claw-machine`, `hw2-glitchtrap-corrupts-backstage`, `security-breach-msg-red-flag`,
  `security-breach-msg-arcade-conspiracy`, `security-breach-cd-therapists-shared-and-replaced`, `ruin-the-entity`
  (`vanny`); `ruin-prototype-freddy-headless`, `ruin-glamrock-bonnie-remains-hidden-room` (`pizzaplex`).
- **`counterEvidence` added:** `digital` + `secret-of-the-mimic-mail-wa-far-behind`,
  `hw2-mimic-teaser-1979-white-tiger`, `security-breach-cd46-talking-programs`; `vanny` +
  `hw2-glitchtrap-corrupts-backstage`, `hw2-faz-force-ending`; `pizzaplex` + `ruin-prototype-freddy-headless`.
