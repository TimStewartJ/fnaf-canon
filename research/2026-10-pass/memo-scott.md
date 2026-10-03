# Memo: `scott` slice (Scott Cawthon's statements and the scottgames.com teasers)

Slice analyst memo for the theory pass. Evidence file `src/data/evidence/scott.json` (was 109 records, now 167). Fourteen more Scott and teaser records live in `ffps-ucn.json`, `fnaf123.json` and `hw.json`; they are analysed and filed here but were not edited.

This slice holds no in-universe events. It holds four kinds of record: (a) rulings that bind the model, (b) hints and corrections that constrain it, (c) teasers and page-source text that preview in-universe content, and (d) out-of-universe commentary with no story weight. Section 6 says which is which for every record.

**What was read at the source in this pass**

- Steam news API for all ten app ids: all 68 announcements by Scott (none exist for FNaF1, one for FNaF World).
- Reddit, u/animdude, through the Arctic Shift archive: all 38 posts and all 614 comments, with thread titles and parent comments.
- Wayback Machine: 81 of the 83 distinct front-page captures of scottgames.com (2014 to 2021) and 21 of fnafworld.com, as raw HTML (title, meta tags, alt text, comments), and the teaser image files those pages load. A fan catalogue of 217 teaser images (thefnafarchive.org) was used as a research aid to check that no cycle was missed.
- Seven Steam forum threads with replies by Scott, the pinned "Is the book canon?" thread and the "Upcoming Projects Mega-Thread" (both through Wayback), and the store descriptions (API, plus a capture from August 2014).
- The Geeks Under Grace interview (live page), and the two Dawko video interviews (2018 and 2024) from archive.org copies, machine-transcribed with three speech-to-text models because YouTube captions could not be reached.

**Decisions this memo asks of the lead** (details in the sections named)

1. Whether to keep the retcon stake on the yellow suit alone. By Scott's own wording the convicted suspect in FNaF1's newspaper fits better (2.10).
2. A rule for FNaF World, for UCN and for Security Breach's base game in the canon-rules chapter (2.3, 2.9, 2.12; section 3 items 4, 23, 33).
3. Whether interview records whose wording rests on machine transcripts are acceptable as quoted records (section 8 item 1). They are Scott's own speech from a faithful copy of the video; no human has checked them by ear.
4. Whether the two names Scott used in 2020 may be mentioned at all (2.6). This memo keeps the ban on using them as names.
5. Which copy to cite where a fact is recorded in two files (section 3 item 36; section 7.4).
6. "Glitchtrap" and "Burntrap": Scott calls them canon names (`scott-2024-interview-placeholder-names-canon`), which changes how the common brief treats them.

In this memo "(new)" marks a record added in this pass and "theory" means `theory.ts`. Book-only names appear below only where Scott himself wrote them, and are flagged.

---

## 1. Threads

Ordered by how much of the model each one governs.

### 1.1 Canon and continuity rulings

These bind the model. Each is Scott's own wording.

| Ruling | Record | Used by theory |
|---|---|---|
| A game that contradicts a theory wins: "it means that your theory needs to evolve" | `scott-2017-games-over-theories` | yes |
| He makes mistakes and repairs them; he will "respect the foundation that has already been laid" | `scott-2017-lore-not-infallible` | yes |
| FNaF4 version 1.1 is canon; the Halloween Edition is not | `scott-2015-fnaf4-halloween-canon-split` (reasons: `scott-2015-community-expectations-halloween`, `scott-2015-halloween-wont-expand-fnaf4`) | yes |
| Sister Location's Custom Night "will NOT be canon (otherwise it would screw up the entire plotline!)" | `scott-2016-sl-custom-night-not-canon` | yes |
| "(By the way- Cutscenes are canon.)", said when the last Custom Night cutscene was added | `scott-2016-cutscenes-are-canon` | yes |
| Help Wanted is "one game that IS canon", built from characters that are canon, "*questionably* canon", and "from every point of the timeline" | `scott-2019-help-wanted-is-canon` | yes |
| In Help Wanted's frame only "the existence of a game developer that supposedly made video games based on actual events that may or may not be a cover up by Fazbear Entertainment is canon" | `scott-2019-only-game-developer-existence-canon` (new); negative half in `scott-2019-not-canon-list`, `scott-not-part-of-lore` | half (the hedges are dropped) |
| FNaF World: "The story is complete, and the Halloween update and new game will not add to it" | `scott-2015-story-complete` | no |
| FNaF World: he "should have just done something that was obviously for fun and not tried to somehow tie it in to a canon game" | `scott-2018-interview-fnaf-world-tied-to-canon-mistake` (new) | no |
| Security Breach: "I had a very specific story in mind and it is very different than the one that got in the game" | `scott-2024-interview-sb-story-not-as-intended` (new) | no |
| A placeholder name found in the game files is "the canon name now" | `scott-2024-interview-placeholder-names-canon` (new) | no |
| The films are their own universe ("FNAF 1-3 only") | `scott-2018-movie-universe-fnaf1-3-only` (new), `scott-2024-movie-doug-canon` | no |
| The Into the Pit game adapts a Fazbear Frights story and "was still just supposed to be a novelty"; he accepts the word "spin-off" for it. No ruling on its continuity | `scott-2024-interview-into-the-pit-began-as-novelty` (new) | no |

Things he ruled are **not** lore, which a theorist must not build on:

- Gameplay mechanics: the doors need power "because- game" (`scott-2015-doors-power-because-game`).
- Duplicate Springtraps in FNaF3: "These are hallucinations." (`scott-2015-fnaf3-multiple-springtraps-hallucinations`, new).
- Real photographs used in the games: the FNaF4 mountains, snowman and mockingbird (`scott-2019-fnaf4-photos-no-lore`) and the face of UCN's child (`scott-2019-ucn-child-face-jason`).
- Merchandise: "don't create lore; just focus on established lore" (`scott-2024-no-new-lore-on-products`); a product was pulled for using one of the "names from the lore" (`scott-2020-cassidy-kazoo-names-from-lore`, new).
- The red annotations in The Freddy Files: leftovers of three scrapped narrators (`scott-2017-tff-annotations-not-lore`).

**Open.** There is no ruling on Ultimate Custom Night (section 2.3). FNaF World was tied to the canon on purpose and he regrets it, but its content is never ruled in or out. He never lists which Help Wanted characters are "questionably canon".

**Connects to.** `sl-custom-night-decay`, `sl-custom-night-ennard-ejected`, `sl-golden-freddy-cutscene-father` (what the cutscene ruling protects); `fw-clock-ending-pieces-in-place`, `fw-clock-ending-still-your-friends` (what the FNaF World question decides); `hw-tape-13-fe-hired-developer` (the game's side of the Help Wanted frame); `security-breach-burntrap-name-not-in-game` (a name that exists only in files).

### 1.2 What each game was for, in Scott's words

His own chain of reasons is the backbone here: `scott-2018-interview-each-game-fixed-the-last` (new): "With three, I wasn't completely happy with the jump scares, so I worked on four. With four, I wasn't completely happy with the storyline, so I made Sister Location." Then Sister Location "left a few plot points… that were really bothering people, so then I made Pizzeria Simulator", and after that he "needed a capstone".

| Game | What Scott said it was | Records |
|---|---|---|
| FNaF1 | "a small snippet of a larger story"; "I did not have the entire story planned out". Store text: you are hired because it "was much cheaper… than to find a repairman" | `scott-2018-interview-first-game-snippet-of-larger-story` (new), `scott-2014-fnaf1-store-freddybear`, `scott-fnaf1-steam-freddybear` |
| FNaF2 | New animatronics "tied into local criminal databases"; "the previous guard… has since been moved to day-shift". Teaser: "something borrowed... something new...". By August 2015 "fans and youtubers dug in and found everything" | `scott-fnaf2-steam-description`, `scott-2014-fnaf2-store-previous-guard`, `scottgames-site-fnaf2-something-borrowed` (new), `scott-2015-community-uncovered-fnaf1-3` (new) |
| FNaF3 | "the end of a trilogy"; in his mind the original story was to be three games. "Thirty years after Freddy Fazbear's Pizza closed"; "one animatronic". The killer's corpse is in the suit throughout. Which ending happened: "very interesting… complex", not answered | `scott-2018-interview-fnaf3-end-of-trilogy` (new), `scott-fnaf3-steam-description`, `scottgames-site-fnaf3-source-30-years-later-only-one` (new), `scott-2018-interview-purple-guy-in-springtrap` (new), `scott-2018-interview-fnaf3-ending-unanswered` (new) |
| FNaF4 | Sold as "this last chapter of the Five Nights at Freddy's original story" with "a child whose role is yet unknown". Its story was hidden so well that "no one, not a single person, found the pieces". In 2018: "It went too broad for interpretation"; "no real way to figure out what was going on" | `scott-2015-fnaf4-store-last-chapter`, `scott-2015-fnaf4-store-child-role-unknown`, `scott-2015-fnaf4-story-hidden`, `scott-2018-interview-fnaf4-too-broad` (new) |
| FNaF World | A lighthearted break that would "not add to" the story; tying it to a canon game was a mistake | `scott-2015-story-complete`, `scott-2018-interview-fnaf-world-tied-to-canon-mistake` (new), `scott-2016-fnaf-world-last-game` |
| Sister Location | Made to mend FNaF4's storyline: "I need to ground this again, not necessarily in reality, but I need to ground it in storytelling again". "I used SL to clear up a misconception from FNaF 4." | `scott-2018-interview-sl-made-to-ground-story` (new), `scott-2017-sl-cleared-fnaf4-misconception` |
| Pizzeria Simulator | "born out of necessity because I needed to bring a conclusion to several events from the series"; its purpose "was just to resolve some plot points". The "lite" framing was cover | `scott-2018-interview-ffps-made-to-resolve-plot-points` (new), `scott-2017-fnaf6-existed-to-clear-things-up` (new), `scott-2018-wanted-to-finish-story`; cover: `scott-2017-ffps-lite-announcement`, `scott-2017-ffps-apology`, `scott-2018-ffps-troll-lesson` |
| Ultimate Custom Night | A "capstone", a "bookend"; it "brought in all of the characters". It began as Pizzeria Simulator's custom night and was to come with no "teasers and cryptic hints" | `scott-2018-interview-ucn-capstone` (new), `scott-2018-ucn-for-pizzeria-simulator`, `scott-2018-custom-night-no-cryptic-hints` (new), `scott-ucn-store-once-again-trapped` |
| Help Wanted | Made to be canon. "(Or was it all part of the plan?)" | `scott-2019-help-wanted-is-canon`, `scott-2019-hw-rebrand-or-part-of-the-plan` (new) |
| Security Breach | Not the story he planned; Ruin was made to put that right ("we made Ruin for it. And I hope that redeemed the game") | `scott-2024-interview-sb-story-not-as-intended` (new), `scott-2024-interview-burntrap-never-meant-to-move` (new), `scott-2024-interview-vanny-underused` (new) |

**Open.** He never lists the "several events" Pizzeria Simulator concludes, the "plot points" Sister Location left, or what his Security Breach story was.

**Connects to.** This chain tells the writer where to look for the authoritative version of each disputed thing: FNaF4 is read through Sister Location (the Private Room records, `sl-private-room-fredbear-plush` and whatever the fnaf4-sl analyst adds), Sister Location through Pizzeria Simulator (`ffps-completion-*`), and the base game of Security Breach through Ruin and what follows.

### 1.3 Misreadings he corrected

| Misreading | What he said | Records |
|---|---|---|
| Springtrap is Michael ("Miketrap") | One of three points he says were misunderstood or under-clued ("simple misunderstandings with the story, others… things I didn't leave enough clues about"); the one clue for it, a "robotic" voice, "wasn't intended to sound robotic" | `scott-2017-matpat-final-theory`, `scott-2017-michael-voice-not-robotic` (new), `scott-2017-misunderstood-not-reveals` |
| The Purple Guy is literally purple | Same list | `scott-2017-matpat-final-theory` |
| "1983 vs 1987" | Same list. His own page source moved from 87 to 83 two days before FNaF4 came out | `scott-2017-matpat-final-theory`, `scottgames-site-fnaf4-html-87`, `scottgames-site-fnaf4-html-83` (new) |
| Something in FNaF4, not named | "I used SL to clear up a misconception from FNaF 4." | `scott-2017-sl-cleared-fnaf4-misconception` |
| Something in Sister Location, not named, still outstanding in September 2017 | "there is a misconception from SL that I may need to clear up someday" | same record |
| "Adult theory" (June 2016) | A new teaser "within a couple of days" | `scott-2017-adult-theory-teaser`, `scottgames-site-sl-source-rental-schedule` (new), `scottgames-site-sl-source-client-directory` (new) |
| Several Springtraps at once is a glitch | "It's not a glitch… These are hallucinations." | `scott-2015-fnaf3-multiple-springtraps-hallucinations` (new) |
| "Freddybear" in the FNaF1 store text means Fredbear | It was Freddy's own name "for a very short time" | `scott-2020-freddybear-early-name` (new) |
| Scott is a character in Help Wanted | "The short answer is: No." | `scott-2019-indie-dev-photo`, `scott-not-part-of-lore` |
| The red notes in The Freddy Files are in-universe clues | Remnants of scrapped narrators | `scott-2017-tff-annotations-not-lore` |
| Burntrap as he appears in Security Breach | "Originally, Burntrap was never supposed to move." | `scott-2024-interview-burntrap-never-meant-to-move` (new) |

The two unnamed misconceptions are the gap in this thread. For Sister Location the dates point one way: in September 2017 the misconception is still outstanding; nine weeks later he names three points of contention "especially since SL custom night" and says such points were misunderstood or not conveyed properly. Reading the outstanding one as "Miketrap" (and the purple body with it) is an inference from that sequence, strength medium. For FNaF4 see 2.2.

### 1.4 The one retcon

All from one day, 4 September 2017 (UTC times in `scott-2017-retcon-seamless`):

1. "I've done one actual retcon in the series (although I'm not going to say where it was)." `scott-2017-one-retcon`
2. Clarifying a misread intention in the next game is "not really a retcon, it's simply an attempt to guide the story toward where it was originally intended to go." `scott-2017-clarification-is-not-retcon` (new). This is in the original post, not added later.
3. "the story has developed new details over time that may not have been planned from the beginning" and the pieces still fit. `scott-2017-story-developed-new-details` (new). A third category, beside retcon and clarification.
4. "the one retcon mentioned was integrated pretty seamlessly, and most people didn't notice. If it had caused problems or confusion then I would have addressed it here." (edit) and "If the retcon was currently being argued about or debated, then that would mean it was a failure" (comment). `scott-2017-retcon-seamless`

Context that bears on it: the night before, he had joked "Never had to retcon anything" (notes of `scott-2017-one-retcon`); FNaF1 was written without a full plan (`scott-2018-interview-first-game-snippet-of-larger-story`, new); FNaF1 to FNaF3 were a trilogy and FNaF4 onward were added (`scott-2018-interview-fnaf3-end-of-trilogy`, new); and in 2018 he said the work after FNaF4 "changes the contents of everything that came before" (`scott-2018-box-meaning-changed`).

**Open.** Where it is. See 2.10.

### 1.5 The locked box

Three answers, nine years apart, which agree only that the box never got a final content.

- 2015: "What's in the box? It's the pieces put together. But the bigger question is- would the community accept it that way?" and "maybe some things are best left forgotten, forever." `scott-2015-fnaf4-box-pieces-put-together`, `scott-2015-box-best-left-forgotten`, `scott-2015-considered-opening-box`
- 2018: "He's absolutely right. The contents of that box have changed over the years", because reshaping the story after FNaF4 "changes the contents of everything that came before". `scott-2018-box-meaning-changed` (wording now verified from the video)
- 2024: "there is something in the box, but I never pursued it, and I don't know if I can find it again." Before it: "The progression of the story didn't go there." `scott-2024-box-interview` (wording now verified from the video)

Also: `scottgames-site-fnaf4-the-end` ("The End" with a hidden "?"), and the outside-the-story joke `scott-2016-box-sarcasm`.

**Connects to.** `box.ts` already carries this thread. For the theory the point is the 2018 answer: the box is Scott's own example of later games changing what earlier material means.

### 1.6 Hints about identities and timeline

**Who is in Springtrap.** Strong, and all of it Scott's own words.
- Teasers in the first person: "I am still here." (`scottgames-fnaf3-teaser-still-here`), page keywords "I remain" (`scottgames-site-fnaf3-source-i-remain`, new), "He always does." in purple (`scottgames-fnaf3-teaser-he-always-does`).
- "his purple corpse is in that whole body that whole time… purple guy, he's in there" (`scott-2018-interview-purple-guy-in-springtrap`, new).
- "William Afton (AKA Scraptrap)" (`scott-ucn-character-guide-afton`); "Afton" for the same character on Reddit (`scott-2018-afton-name-for-ffps-springtrap`, new).
- The only clue for Michael was an accident of audio editing (`scott-2017-michael-voice-not-robotic`, new).
- The name Afton first appears in anything Scott published in June 2016, as "AftnROBTCS" in the page source (`scottgames-site-sl-source-service-log-afton-robotics`, new).
- Connects to `fnaf3-springtrap-corpse-screens`, `ffps-credits-william-afton`, `sl-golden-freddy-cutscene-springtrap`.

**Golden Freddy.** In October 2014: "Sometimes things just "happen" during the game making process. I can't explain Golden Freddy." (`scott-2014-cant-explain-golden-freddy`). In January 2015 the audience took the first FNaF3 teaser figure for Golden Freddy, and Scott knew it (`scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`, new). Nothing he has said ties Golden Freddy to a particular child. See 2.6 for the name he used in 2020.

**The crying child.** "a child whose role is yet unknown" (`scott-2015-fnaf4-store-child-role-unknown`). The teasers ask "Was it me?" four times over (`scottgames-site-fnaf4-was-it-me-bonnie`, `scottgames-site-fnaf4-was-it-me-chica`, `scottgames-site-fnaf4-or-me-foxy`, `scottgames-site-fnaf4-or-was-it-me-fredbear`), and the page source behind the last one spells "fredbear" in a one-letter shift. A hat and bow tie are "PROPERTY OF FR…ER" (`scottgames-site-fnaf4-property-of-fr`). Scott calls the plush "my Fredbear plush design" (`scott-2018-fredbear-plush-design`, new). Nothing names the child.

**UCN's accuser.** "The one you should not have killed" is Scott's own label for it, in a sentence about using a family photo for its face (`scott-2019-ucn-child-face-jason`).

**Ennard and Baby.** Between March and June 2017 the two sites carried two halves of an argument. A group says "You are crowding us.", "We outnumber you.", "We found a way to eject you." and "Ha, ha! Say goodbye to our friend!". One voice answers "You will do everything that I tell you to do.", "You would be lost without me" and "I can put myself back together." (`scottgames-site-2017-source-ejection-dialogue-group`, `scottgames-site-2017-fnafworld-source-ejection-dialogue-one`, both new), under a pair of green eyes in a file named Iamstillhere.jpg (`scottgames-site-2017-fnafworld-iamstillhere-eyes`, new). Earlier teaser: "There's a little of me in every body." (`scottgames-site-sl-little-of-me`). Connects to `sl-custom-night-ennard-ejected`, `ffps-molten-freddy-lines`, `ffps-scrap-baby-heard-call`.

**Circus Baby's.** The hidden news report (`scottgames-site-sl-news-gas-leak-cancellation`, `scottgames-site-sl-news-kids-tested`, `scottgames-site-sl-news-equipment-removed`, `scottgames-site-sl-news-entrepreneur`), and under it in the page source: "There is still a bright future for Circus Baby, so be watching for her to appear at a neighborhood party near you!" (`scottgames-site-sl-source-bright-future-circus-baby`, new). Two months earlier the source showed the animatronics as units booked by the day for children's birthdays (`scottgames-site-sl-source-rental-schedule`, `scottgames-site-sl-source-client-directory`, both new). One client reads "ChcasPrtyWrld"; compare `secret-of-the-mimic-mail-chicas-party-world`.

**Help Wanted and after.** Hidden in the first teaser: "Don't listen to them." "We let something inside." "It was an accident." "Remember Jeremy." (`scottgames-hw-teaser-hidden-text`), with alt text "remember Jeremy" (`scottgames-site-hw-alt-remember-jeremy`, new). Under the Security Breach teasers for a year: "Stay the course." / "I will." / "Focus on my voice." / "I will." / "Don't let anyone lead you astray." / "I won't." / "Have you selected one?" / "I have." (`scottgames-site-sb-source-stay-the-course`, new). A rabbit-eared figure was added to the "ROCK!" teaser between September and November 2019 (`scottgames-site-sb-rock-rabbit-figure-added`, new), before "PROTECT" and "OBEY" (`scottgames-site-sb-protect`, `scottgames-site-sb-obey`). In 2024: Glitchtrap is "possession of AI or possession of machines or circuitry" (`scott-2024-interview-glitchtrap-possession-of-ai`, new).

**Timeline.** "Thirty years after Freddy Fazbear's Pizza closed it's doors" (`scott-fnaf3-steam-description`), first hinted as "30 years later, only one" (`scottgames-site-fnaf3-source-30-years-later-only-one`, new). Page-source digits 87, then 83 (`scottgames-site-fnaf4-html-87`; `scottgames-site-fnaf4-html-83`, new). One trap: the FNaF1 store text says "summer job" while the game's cheques are dated November (`scott-2014-fnaf1-store-summer-job`, new, filed as counter). Years printed on teasers ("2015", "10.31.15", "2020") are release dates, confirmed for 2020 by Scott (`scottgames-site-sb-atrium-2020`).

### 1.7 The books' relationship to the games

In date order:

1. 2015-12-17/18: "The games and the books should be considered to be separate continuities"; "the book is canon, just as the games are. That doesn't mean that they are intended to fit together like two puzzle pieces"; the book "is NOT intended to solve anything… or to fill in gaps"; "a re-imagining". `scott-2015-books-separate-continuity`, `scott-2015-book-canon-not-puzzle-pieces` (new), `scott-2015-book-not-a-guide`, `scott-2015-book-reimagining`, `scott-2015-alternate-timeline-comment`
2. 2016-10-22: the book "doesn't follow the events of the games 100%". `scott-2016-silver-eyes-not-100-percent-games` (new)
3. 2018-08-08: the novels were for people "who just wanted extra stories" and were "never intended to be the definitive story of Five Nights at Freddy's". `scott-2018-interview-books-extra-stories-not-definitive` (new)
4. 2018-11-12: the new short-story series "takes place in the FNAF universe", with stories "some connected directly to the games, and some not". `scott-2018-frights-some-connected-to-games` (new)
5. 2020-01-29: "future games will look forward; but look to the novels to fill in some of blanks to the past!", meaning Fazbear Frights. `scott-2020-novels-fill-blanks`, `scott-2020-novels-means-fazbear-frights`
6. 2020-11-20: a rejected script's characters "had nothing to do with their game and book counterparts"; he chose "a screenplay from the games and not from the books". `scott-2020-charlie-game-and-book-counterparts` (new)
7. 2024-01-06: "Concerning what people are saying about the canonicity of the books- yes, that is correct." `scott-2024-books-canonicity-yes`

What this adds up to, in his words only: the first trilogy is its own continuity; some Frights stories bear directly on the games and fill in the past, and he has never said which. That is a statement about the books, and under this project's source policy it licenses nothing: it explains why some game facts look unexplained, it does not supply the explanation.

### 1.8 Statements about fan theories

- August 2015, general: the community "found every bit of lore and story" in the first game, "found everything" in the second, and "uncovered" the third (`scott-2015-community-uncovered-fnaf1-3`, new).
- August 2015, specific: "Game Theory did an incredible video on part 2; getting almost everything right." (`scott-2015-game-theory-fnaf2-almost-right`). "Almost", and no item named.
- November 2017: the Game Theory "FINAL Theory pt 2" endorsement (`scott-2017-matpat-final-theory`, `scott-2017-matpat-answered-some-things` new, `scott-2017-misunderstood-not-reveals`). Exact reach in 2.1.
- August 2018: MatPat was "absolutely right" that the box's contents changed (`scott-2018-box-meaning-changed`). In the same interview (machine transcript, not recorded as a quote): he sees theories that are right and nods to himself, "but I can't jump in and confirm it".
- Waved off: "adult theory" (`scott-2017-adult-theory-teaser`); "dream theory", only as a joke on a teaser (`scottgames-site-2019-fnafworld-58-mock-quotes`, new); the three points of November 2017.
- The rule that sits over all of it: `scott-2017-games-over-theories`.

### 1.9 The teaser cycles, checked against the captures

| Cycle | Image sequence (file, capture dates) | Hidden or page-source text | Records |
|---|---|---|---|
| FNaF2 | fnaf2.jpg, five versions: 2014-09-24 "Grand Reopening 2015"; 09-28 "something borrowed... something new..."; 10-08 curtains with "2"; 10-16 "NO PLACE TO RUN / and exactly one place to hide."; 11-11 dark camera view of the Puppet | none; page keywords were still the old Pilgrim's Progress ones | `scottgames-site-fnaf2-grand-reopening`, `scottgames-site-fnaf2-something-borrowed` (new). The other three are gameplay previews and were not recorded |
| FNaF3 | offline.jpg (four versions, 2014-11-16 to 12-09); fnaf3.jpg 2015-01-03; whatcanweuse.jpg 01-15; always.jpg 01-27; map.jpg 02-03; guesswho.jpg 03-02; inyourmind.jpg 03-03; hat.jpg 03-04 and 04-22 | "until next time" (11-16); a hidden "3" (12-06, 12-08); keywords "30 years later, only one" (12-07), then "taking a break, Merry Christmas everyone! :)" with a hidden "Merry Christmas!" (12-09), "I remain" (January), "CAM15" (02-03), "fear" (03-02); a hidden figure in the parts-box image; a hidden "10" in guesswho | `scottgames-site-fnaf3-offline-until-next-time`, `scottgames-site-fnaf3-source-30-years-later-only-one` (new), `scottgames-site-fnaf3-i-am-still-here`, `scottgames-site-fnaf3-source-i-remain` (new), `scottgames-site-fnaf3-parts-box`, `scottgames-site-fnaf3-he-always-does`, `scottgames-site-fnaf3-guess-who`, `scottgames-site-fnaf3-all-in-your-mind`, `scottgames-site-fnaf3-hat`. map.jpg (a camera map) was not recorded |
| FNaF4 | 4.jpg, eight versions from 2015-04-28 to 07-27 | title and tags salted with 8s and 7s (04-28); "ke8ywords"/"descr7iption"/"Sco8ttga7mes" (from 05-07); comment "Copyright 0871" (06-12); tag "gsfecfbs" = fredbear (06-25); tags "Cyh", "gvh", "gpe" with "Copyright 13,12,11" = Plushtrap (07-09); "Sco8ttga3mes" (07-21); all reset by 07-27. Hidden "NIGHTMARE", "PROPERTY OF FR…ER", a "?" after "The End" | `scottgames-site-fnaf4-final-chapter`, `scottgames-site-fnaf4-html-87`, `scottgames-site-fnaf4-was-it-me-bonnie`, `scottgames-site-fnaf4-was-it-me-chica`, `scottgames-site-fnaf4-or-me-foxy`, `scottgames-site-fnaf4-property-of-fr`, `scottgames-site-fnaf4-or-was-it-me-fredbear`, `scottgames-site-fnaf4-terrible-things`, `scottgames-site-fnaf4-html-83` (new), `scottgames-site-fnaf4-the-end` |
| FNaF World and Halloween 2015 | thankyou.jpg, fnafworld.jpg, inthedark.jpg, dontwakethebaby.jpg, gotopieces.jpg, BOO.jpg, dark.jpg | none found | `scottgames-site-2015-thank-you`, `scottgames-site-2015-halloween-teasers`. No story content |
| Sister Location | project.JPG, many versions, February to November 2016, including a facility map not recorded here (the game has it) | rental schedule (06-17); client directory and "AftnROBTCS" (06-20); "no comment" and the "bright future" statement (08-16); the hidden news report in the "CANCELLED" image; then "4g7n0c..." and "...28jk12" (08-28, not decoded) | `scottgames-site-sl-never-just-one`, `scottgames-site-sl-stay-in-seats`, `scottgames-site-sl-little-of-me`, `scottgames-site-sl-dont-hold-it`, `scottgames-site-sl-get-back-on-stage`, `scottgames-site-sl-cancelled-teaser`, `scottgames-site-sl-news-gas-leak-cancellation`, `scottgames-site-sl-news-kids-tested`, `scottgames-site-sl-news-equipment-removed`, `scottgames-site-sl-news-entrepreneur`, `scottgames-site-sl-custom-night-round-two`, and new: `scottgames-site-sl-source-rental-schedule`, `scottgames-site-sl-source-client-directory`, `scottgames-site-sl-source-service-log-afton-robotics`, `scottgames-site-sl-source-bright-future-circus-baby` |
| Pizzeria Simulator | 2017: project.JPG, book covers, interrupt.jpg (static, a book promotion), anniversary screenshots, then image01.jpg pixel teasers from 10-28 | the two-site ejection dialogue (03-31 to 06-11); "What is paragraph 4?" on both sites (from 10-28) | `scottgames-site-2017-source-ejection-dialogue-group`, `scottgames-site-2017-fnafworld-source-ejection-dialogue-one`, `scottgames-site-2017-fnafworld-iamstillhere-eyes`, `scottgames-site-ffps-source-what-is-paragraph-4`, `scottgames-site-ffps-pixel-teasers` (all new) |
| Ultimate Custom Night | cn.jpg, about seventy versions through 2018: roster grids, a progress bar, "A NEW IRRITATION APPROACHES", hidden-character reveals (seen in the fan catalogue) | "What is paragraph 4?" was still in the source on 2018-02-18; nothing new | none; nothing carries story (he had promised no "teasers and cryptic hints") |
| Help Wanted | hw.jpg 2019-03-11, withdrawn within a day | four hidden lines; alt "remember Jeremy"; title "Scot0t Games"; six tag values naming hidden images | `scottgames-site-hw-working-as-intended`, `scottgames-hw-teaser-hidden-text`, `scottgames-site-hw-alt-remember-jeremy` (new) |
| Security Breach | 9.jpg 2019-08-08; 7_1.jpg "ROCK!" (two versions, 2019-09-29 and 11-06); Montgomery.jpg "JAM!" 2020-03-25; SB.jpg title logo 2020-05-05; protect.jpg 2020-06-12; obey.jpg 2020-08-07; between them a Special Delivery promotion and two book covers; fnafworld.com 58.jpg 2019-08-08 | the eight-line dialogue (2019-08-08 to at least 2020-08-07); rabbit figure added to 7_1.jpg; mock quotes on 58.jpg | `scottgames-site-sb-atrium-2020`, `scottgames-site-sb-rock`, `scottgames-site-sb-rock-rabbit-figure-added` (new), `scottgames-site-sb-protect`, `scottgames-site-sb-obey`, `scottgames-site-sb-source-stay-the-course` (new), `scottgames-site-2019-fnafworld-58-mock-quotes` (new), `scott-2020-unreleased-teasers-dance-party`. "JAM!" and the logo were not recorded |

---

## 2. Contested questions

Verdicts here use Scott's words only. Where the answer needs game records, the memo says so and stops.

### 2.1 What do his endorsements of fan theories confirm?

**Readings.** (a) He endorsed the videos, so their conclusions stand. (b) He confirmed only the points he named. (c) The endorsements carry no weight.

**Records.** For a wide reading: `scott-2015-community-uncovered-fnaf1-3` (new; "found everything"), `scott-2015-game-theory-fnaf2-almost-right`, `scott-2017-matpat-final-theory` ("he really hit this video out of the park"). Against it: "almost everything"; `scott-2017-matpat-answered-some-things` (new): "some of those things", "Obviously, it's not 100%" (twice), "I won't go through the video point by point"; `scott-2017-games-over-theories`, written the same day.

**Verdict: (b), high.**

What the November 2017 comment confirms:

1. "Miketrap" is wrong: Springtrap is not Michael. High. He backs it the same day by removing its one clue (`scott-2017-michael-voice-not-robotic`, new), and his own later words name the occupant (`scott-ucn-character-guide-afton`, `scott-2018-interview-purple-guy-in-springtrap`, new).
2. The Purple Guy is not "literally purple": the purple of the minigame figure is not a fact about a body. High. So the purple, decaying Michael of the Sister Location cutscenes is not shown to be the Purple Guy by his colour.
3. "1983 vs 1987" is not a real conflict. His words stop there: they do not say which year FNaF4's bite belongs to. The years come from the games, and from his own page source, which he changed from 87 to 83 two days before release (`scottgames-site-fnaf4-html-83`, new). Medium-high that two events are meant.

What it does not confirm: anything else in the video. He restates none of its conclusions. The 2015 praise is the same: "almost everything right" leaves at least one thing wrong and names nothing. The content of either video is not evidence and must not be imported through these records.

**Theory.** The retcon chapter uses the 2017 comment only as a list of live disputes. That is within its reach.

### 2.2 FNaF4: what was misread, and what was Sister Location meant to clear up?

**Readings of "a misconception from FNaF 4".** (a) The year of the bite. (b) That the nights are only a dream, unconnected to anything real. (c) Who the house and child belong to. (d) It cannot be identified.

**Records.** `scott-2017-sl-cleared-fnaf4-misconception` (not named; spoken of in September 2017 as already cleared). `scott-2018-interview-fnaf4-too-broad` (new): "there was no real way to figure out what was going on". `scott-2018-interview-sl-made-to-ground-story` (new): another game was needed to "ground it in storytelling again"; he agrees he "put some things into Sister Location to ground out the story of FNAF 4". `scott-2018-interview-each-game-fixed-the-last` (new): "With four, I wasn't completely happy with the storyline, so I made Sister Location."

**On (a).** Two facts pull against each other. In November 2017, two months after he called the FNaF4 misconception cleared, he still lists "1983 vs 1987" among the live points of contention, things he had "felt I needed to answer with a new game" (`scott-2017-matpat-final-theory`, `scott-2017-matpat-answered-some-things`). If the year was the misconception, Sister Location had not cleared it up for the community. On the other side, Sister Location's own FNaF4 material is said to include the number 1983 on a keypad; that is a game fact for the fnaf4-sl analyst to confirm, and at the time of writing that file holds only `sl-private-room-fredbear-plush` and `sl-private-room-restricted` for the room.

**Verdict.** (d): he never names it, and his words cannot choose between the year and the nature of the house. What Sister Location was meant to clear up can only be read off what it contains about FNaF4, which is the other slice's ground. Any one identification: medium-low.

What is firm, high: on its author's word FNaF4 cannot be solved from itself; Sister Location was made to mend its storyline; so what Sister Location shows about the FNaF4 house and its year is his corrective and outranks any reading built on FNaF4 alone.

**Theory.** The bite chapter's "Whether the nights are a patient's nightmares or a memory is left open" is consistent with this. The chapter should say why it leans on Sister Location for anything about that house, and cite these records.

### 2.3 Who is the player in Ultimate Custom Night?

**Readings.** Michael; William; no one in particular (a mashup outside the story).

**Records, all of Scott's words on UCN.** It began as "an Ultimate Custom Night for Pizzeria Simulator" (`scott-2018-ucn-for-pizzeria-simulator`), to be made with no "teasers and cryptic hints" (`scott-2018-custom-night-no-cryptic-hints`, new). Voice lines came late and "the majority of characters only say something if (when) they kill you" (`scott-2018-ucn-voice-lines-when-they-kill-you`). The store calls it "the ultimate FNAF mashup, where you will once again be trapped alone in an office" (`scott-ucn-store-once-again-trapped`). The guide lists "William Afton (AKA Scraptrap)" as an attacker, and lists "Springtrap" separately (`scott-ucn-character-guide-afton`). In 2018 he called it a "capstone" that "brought in all of the characters" (`scott-2018-interview-ucn-capstone`, new). "The one you should not have killed" is his label for the accuser (`scott-2019-ucn-child-face-jason`). The only custom-night ruling is for Sister Location: gameplay not canon, cutscenes canon.

**Verdict: his words do not identify the player, and do not rule UCN in or out of the story.** Confidence in any identification from this slice: none.

Two things in his words bear on the theory's arguments, though:

- The theory says Afton attacking the player "is awkward if the player *is* Afton". Scott's own guide has the same man on the roster twice (Springtrap, and William Afton as Scraptrap), Baby twice, and Freddy many times over. The roster is a mashup of every game's versions, as the store text says. It is not a cast that could stand in one room, so who is on it says little about who the player is. That argument should be dropped or marked weak.
- In his chain of reasons, Pizzeria Simulator is the game that resolves the plot and UCN is the bookend. That fits a reading of UCN as aftermath, and does not favour either man.

**Theory.** The chapter's lean towards Michael (confidence medium) rests on game lines only. This slice neither supports nor refutes it. It weakens one supporting argument (above).

### 2.4 Mike Schmidt and Michael Afton

**Records.** None. In 38 posts, 614 comments and 68 announcements Scott never discusses who Mike Schmidt is. Nearest: "Miketrap" is a misreading (which concerns Springtrap, not Schmidt); the red notes in The Freddy Files, which some read as hints about "Mike", are leftovers of scrapped narrators and "adding to the lore" was what he "didn't want to do" (`scott-2017-tff-annotations-not-lore`).

**Verdict.** His words do not bear on it. The theory's "allows it but never relies on it" is the right setting.

### 2.5 The dream reading of FNaF4

**Records.** The only time he names it is a joke: a mock review hidden on a teaser, "\"stopped caring after dream theory....\" -reddit user" (`scottgames-site-2019-fnafworld-58-mock-quotes`, new). The store text sells the nights as events ("the terror has followed you home… safeguard yourself until 6am", `scott-2015-fnaf4-store-last-chapter`). The first teaser hides the word "NIGHTMARE" (`scottgames-site-fnaf4-final-chapter`). "It's all in your mind." belongs to FNaF3 and its phantoms (`scottgames-site-fnaf3-all-in-your-mind`), where he did rule that the player sees things that are not there (`scott-2015-fnaf3-multiple-springtraps-hallucinations`, new).

**Verdict.** No ruling. He knew the reading and knew it was unpopular. His 2018 account (2.2) means the question is decided by Sister Location and later games, not by FNaF4. Nothing he said makes the nights real, dreamt or staged. The theory leaves it open; that matches.

### 2.6 Golden Freddy

**Records.** October 2014: "I can't explain Golden Freddy." (`scott-2014-cant-explain-golden-freddy`). January 2015 reception: the yellow figure in the first FNaF3 teaser was taken for Golden Freddy (`scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`, new). UCN's guide entry for Golden Freddy is mechanics only. The UCN face is a family photo (`scott-2019-ucn-child-face-jason`).

In 2020 he used one name twice. A licensed "Cassidy Kazoo" (the thread's words) made him say that "companies randomly throw around names from the lore" and that he was pulling it (`scott-2020-cassidy-kazoo-names-from-lore`, new). Three months later he described a rejected film script as "following the story of Cassidy… featuring lore from multiple games" (`scott-2020-cassidy-screenplay-lore-from-games`, new). **This is a book-associated name; it is reported here because these are Scott's own words.**

**Verdict.** His words never say who or what Golden Freddy is. They do show that he treats that one name as part of the games' lore ("lore from multiple games"), without attaching it to any character. So: a person of that name matters to the games' story (medium); which character it is, nothing. The theory's "Golden Freddy is the fifth child" stands or falls on game records. The ban on using the name as a name can stay, because no statement of his attaches it to a character; the lead should ask the ffps-ucn analyst whether any game prints it.

### 2.7 The crying child

**Records.** "a child whose role is yet unknown" (`scott-2015-fnaf4-store-child-role-unknown`). The teasers make FNaF4 a whodunit: "Was it me?", "Was it me?", "Or me?", then the Fredbear image, whose page source spells "fredbear" (`scottgames-site-fnaf4-was-it-me-bonnie`, `scottgames-site-fnaf4-was-it-me-chica`, `scottgames-site-fnaf4-or-me-foxy`, `scottgames-site-fnaf4-or-was-it-me-fredbear`). "PROPERTY OF FR…ER" (`scottgames-site-fnaf4-property-of-fr`). "my Fredbear plush design" (`scott-2018-fredbear-plush-design`, new).

**Verdict.** Scott's words give him no name and no later identity. They agree with the game on one thing: the animatronic that "did it" is Fredbear. On the theory's use of FNaF World's clock ending for this child, see 2.12.

### 2.8 The purple rabbit in Help Wanted

**Readings.** Afton himself; a copy of him; something else.

**Records.** "So anything that involves possession of AI or possession of machines or circuitry, I love that sort of thing. So I love the idea of Glitchtrap." (`scott-2024-interview-glitchtrap-possession-of-ai`, new). The name was a planning label: "he's glitchy, we'll call him Glitchtrap" (`scott-2024-interview-placeholder-names-canon`, new). The withdrawn teaser hides "We let something inside." and "It was an accident." (`scottgames-hw-teaser-hidden-text`). Scott's summary of the frame ends "(Or was it all part of the plan?)" (`scott-2019-hw-rebrand-or-part-of-the-plan`, new). The page-source dialogue has a voice directing a follower (`scottgames-site-sb-source-stay-the-course`, new).

**Verdict.** In his words the rabbit is a possession: something has taken hold of an AI, a machine or circuitry. Medium-high. Who or what does the possessing, he does not say. The "-trap" in the name is not evidence: it was a casual label. "Possession" sits on the supernatural side of his own contrast with science fiction, which leans slightly away from "an imitation with nothing behind it" (low). The theory's "Afton-derived code… status theory" is compatible with all of this and proved by none of it.

### 2.9 The Mimic, and Burntrap

**Records.** "I think it's a really terrific antagonist and I don't think it's the last that we've seen of the Mimic." and "I cannot share any thoughts on the Mimic" (`scott-2024-interview-mimic-not-the-last`, new). "Originally, Burntrap was never supposed to move"; he was to be like "a decaying movie prop" with "a very specific purpose" that Scott would not state (`scott-2024-interview-burntrap-never-meant-to-move`, new). The released story is "very different" from his (`scott-2024-interview-sb-story-not-as-intended`, new).

**Verdict.** Nothing he has said states what the Mimic is, or links it to Burntrap, Glitchtrap or Afton, or separates them. The interviewer calls it "a new character into the games" and he lets that stand, which is a faint sign that it is not simply Afton renamed (low).

On Burntrap his words are firmer and cut against over-reading Security Breach: the walking, attacking Burntrap of the base game's ending is not what he designed. For the model, an inert burnt rabbit body under the building, kept for some purpose, is closer to his intent than the scene the game shows. Both identities in the theory's Burntrap chapter stay open; the chapter's description of what Burntrap *does* should carry this caveat. The name is canon by his own rule, even though the game never prints it.

### 2.10 The single retcon

**Scott's constraints** (records in 1.4):

| # | Constraint | Source |
|---|---|---|
| C1 | One "actual retcon", "in the series", as of 2017-09-04. So it lies in FNaF1 to Sister Location (with Custom Night) or FNaF World | `scott-2017-one-retcon` |
| C2 | Not a clarification of a misread intention; those are "not really a retcon" | `scott-2017-clarification-is-not-retcon` (new) |
| C3 | Not merely one of the "new details over time that may not have been planned from the beginning"; he names those separately | `scott-2017-story-developed-new-details` (new) |
| C4 | "integrated pretty seamlessly, and most people didn't notice" | `scott-2017-retcon-seamless` |
| C5 | Not "being argued about or debated" in September 2017; caused no "problems or confusion" | `scott-2017-retcon-seamless` |
| C6 | Not Miketrap, the literal purple, or 1983 vs 1987: those were "misunderstood (or not conveyed properly by me)" | `scott-2017-matpat-final-theory`, `scott-2017-misunderstood-not-reveals` |

C2 and C3 together say what "actual" means: he changed something an earlier game had established, as opposed to explaining it better or adding to it.

**Testing the theory's stake: the yellow suit** (`fnaf2-call6-yellow-suit`, read as Golden Freddy in FNaF2 and as Spring Bonnie from FNaF3).

- Dates: FNaF2 (November 2014) and FNaF3 (March 2015) are inside C1. Pass.
- C5 and C6: nobody was arguing about the suit in 2017. Pass.
- C4: pass, but trivially. FNaF2 never named the suit, so there was nothing to notice.
- C3: this is where it strains. Because FNaF2 printed no name, FNaF3's Spring Bonnie is, in Scott's own vocabulary, a detail added later, unless he himself had meant Golden Freddy in FNaF2. No statement of his says what he meant. The nearest facts: in October 2014 he gave no account of Golden Freddy (`scott-2014-cant-explain-golden-freddy`); and in January 2015 the audience expected the yellow figure to be Golden Freddy (`scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`, new). The second shows the expectation existed. Neither shows his intention.
- The theory's own reason, that the swap "removes a tension", is an argument from convenience, not evidence about where the retcon is.

Result: the stake is allowed by every constraint and required by none. It fits C3 poorly unless one assumes an intention he never stated.

**Candidates, ranked by fit to his wording.**

1. **The caught and convicted suspect in FNaF1's newspapers** (`fnaf1-news-kids-vanish`: identified on video and caught the next morning, per the record's claim; `fnaf1-news-five-children`: headline "Suspect convicted", body "charged"). From FNaF2 on, the killer is free in 1987 and still free when he dismantles the animatronics and dies in the suit. This is the only place in the window where a later game overrides something an earlier game *printed*. It passes C1, C2 (nothing was clarified; the later games simply proceed as if he was never held), C3 (it is a change, not an addition), C4 (the later games never mention it, and most timelines step around it), C5 and C6. It also matches how FNaF1 was written: with no full plan (`scott-2018-interview-first-game-snippet-of-larger-story`, new), a closed murder case was natural background in the first game and an obstacle once sequels needed the killer at large. The theory demotes this candidate because "no later game integrates or addresses it". Scott's wording does not ask for that; "integrated pretty seamlessly" describes a change nobody tripped over. **Fit: best of the three. Confidence that it is the retcon: low.**
2. **The yellow suit.** As tested above. **Fit: allowed. Confidence: low.**
3. **The meaning of FNaF4, and with it the box.** His own later words come closest to describing a retcon here: after FNaF4 he set out to "craft this into something better", which "changes the contents of everything that came before" (`scott-2018-box-meaning-changed`). But in 2017 he filed the Sister Location work under clarification (C2), and FNaF4's meaning was being argued about all through 2016 and 2017 (fails C5). **Fit: poor, by his own classification.** It matters for a different reason: it shows that his line between "clarified" and "changed" is not sharp, so the model should not assume everything else is untouched.

Ruled out by his words: 1983 vs 1987, Miketrap, the purple body (C6); anything Sister Location did to correct a reading of FNaF4 (C2); anything in Pizzeria Simulator or later (C1).

**Verdict.** His words cannot locate it. The chapter should present the newspaper conviction and the yellow suit as the two live candidates, state that the first fits his wording better, and keep confidence low. If the model needs "a yellow one" to be Spring Bonnie, it can hold that reading on game evidence without also staking the retcon on it.

### 2.11 Who is inside Springtrap?

**Verdict: the man Scott calls "purple guy", whom he also calls William Afton. High.** Records in 1.6. This is the one identity his own words settle from several directions: first-person teasers for FNaF3, the 2018 interview, the UCN guide, his Reddit usage, and his removal of the only clue for Michael. The theory's Springtrap chapter cites only the two teasers; it could cite the rest.

### 2.12 What is FNaF World's standing?

**Records.** "The story is complete, and the Halloween update and new game will not add to it." (`scott-2015-story-complete`). In 2018: he should not have "tried to somehow tie it in to a canon game", and he sets it apart from "all the canon games" (`scott-2018-interview-fnaf-world-tied-to-canon-mistake`, new, with its notes).

**Verdict.** He tied it to the main story deliberately, calls that a mistake, and had promised it would add nothing. So FNaF World's lines can be cited as deliberate echoes of the main games and should not be the sole support for any fact. Medium. The theory uses `fw-clock-ending-*` in three chapters (bite, golden, faith) with no rule stated; the canon-rules chapter needs one.

### 2.13 Which FNaF3 ending happened?

**Verdict: unanswered on purpose.** "The answer is very interesting. The answer is complex." (`scott-2018-interview-fnaf3-ending-unanswered`, new). "Complex" argues against a plain choice between good and bad. This supports the theory's "This stays open" in the Springtrap chapter and should be cited there.

### 2.14 Are the earlier games "games inside the story" after Help Wanted?

**Records.** `scott-2019-only-game-developer-existence-canon` (new), `scott-2019-hw-rebrand-or-part-of-the-plan` (new), `scott-2019-help-wanted-is-canon`.

**Verdict.** The ruling makes canon only that a developer exists who "supposedly" made games "based on actual events", which "may or may not be a cover up by Fazbear Entertainment". The events stay actual; the in-universe games about them may be slanted; and the company may have wanted them made. He does not say that the first seven games *are* those in-universe games. The theory's paraphrase drops both hedges and should restore them.

---

## 3. Problems in the current theory

Each item quotes the phrase in `theory.ts`, gives the records, and says what it should say.

### Chapter `canon-rules`

1. **"the only real-world thing it brings into the story is an in-universe developer who made games \"based on actual events\""**. The quotation is cut so that it says more than Scott did. His sentence: "Only the existence of a game developer that supposedly made video games based on actual events that may or may not be a cover up by Fazbear Entertainment is canon." Cite `scott-2019-only-game-developer-existence-canon` (new) and keep "supposedly" and "may or may not be a cover up".
2. **"Help Wanted is canon"**. True, and incomplete. In the same breath he says the game mixes "characters that *are* canon, along with characters that are *questionably* canon" (`scott-2019-help-wanted-is-canon`). A Help Wanted level is therefore not proof that the thing it recreates is canon.
3. **The books paragraph** leaves out the two halves of the 2015 ruling that explain the rest: "the book is canon, just as the games are" and it is not meant to fit the games "like two puzzle pieces" (`scott-2015-book-canon-not-puzzle-pieces`, new). It also leaves out 2016 ("doesn't follow the events of the games 100%", `scott-2016-silver-eyes-not-100-percent-games`, new), August 2018 (the novels were "never intended to be the definitive story", `scott-2018-interview-books-extra-stories-not-definitive`, new) and November 2018, where he says of the Frights series that its stories are "some connected directly to the games, and some not" (`scott-2018-frights-some-connected-to-games`, new). With 2018 in place, the 2020 remark stops looking like a reversal: it is about a different series, only part of which bears on the games.
4. **Missing rules.** The chapter has no rule for four things the model uses:
   - FNaF World (2.12): `scott-2015-story-complete`, `scott-2018-interview-fnaf-world-tied-to-canon-mistake` (new). Three chapters cite `fw-clock-ending-*`.
   - Ultimate Custom Night: no ruling exists; it began as a custom night; the only custom-night ruling makes gameplay non-canon and cutscenes canon (2.3).
   - Security Breach: its base-game story is not the one Scott planned (`scott-2024-interview-sb-story-not-as-intended`, new).
   - Names: a placeholder name found in the files is canon (`scott-2024-interview-placeholder-names-canon`, new). The chapters titled with "Glitchtrap" and "Burntrap" can cite this.
5. **Missing "not lore" list.** Mechanics, real photos, merchandise, guidebook annotations, FNaF3's duplicate Springtraps (records in 1.1). These are the rulings that stop a theorist over-reading.
6. **"he admits to mistakes and exactly one real retcon"**. Accurate. It should add his other two categories, since the retcon chapter depends on them: clarifications and unplanned new details (`scott-2017-clarification-is-not-retcon`, `scott-2017-story-developed-new-details`, both new).

### Chapter `retcon`

7. **"The same day he added three constraints… And clarifications such as Sister Location clearing up FNaF4 are \"not really a retcon\" [[scott-2017-sl-cleared-fnaf4-misconception]]."** Two errors. The "not really a retcon" sentence is in the original post, directly after the sentence about the one retcon; only the "seamless" wording was added later that day (comment at 16:16 UTC, edit at 16:25). And the cited record's quote does not contain the phrase. Cite `scott-2017-clarification-is-not-retcon` (new).
8. **A constraint is missing.** He separates a third thing from the retcon: "new details over time that may not have been planned from the beginning" (`scott-2017-story-developed-new-details`, new). The chapter's stake has to get past this one, and does not discuss it.
9. **"A seamless retcon needs an earlier game that points one way without saying so outright, and a later game that fills the gap differently without contradicting any printed line."** This is the chapter's own definition, and it describes what Scott calls a clarification or a new detail. He sets the "actual retcon" against exactly those. In his usage a retcon changes something already established; "seamlessly" says that the change did not trip anyone.
10. **"It was seamless by construction."** Offered as a strength; it is the weakness. If nothing printed was contradicted, his own categories would call it a new detail (2.10).
11. **"FNaF1's headline says the suspect was \"convicted\"… no later game integrates or addresses it, so it reads more like an unresolved loose end than a finished retcon."** This is the only candidate where a later game overrides a printed fact, and his wording does not require that a later game "address" it. It should be promoted to a co-candidate, and by fit to his wording it is the stronger one (2.10).
12. **"Scott gave no hint."** He gave five constraints and several facts that bear on it: no full plan in FNaF1, the trilogy, "changes the contents of everything that came before", and the audience's reading of the first FNaF3 teaser (records in 1.4 and 2.10).

### Chapter `bite`

13. **"In 2024 he said he never pursued a specific object for the box"**. Not his words or his meaning. He said: "there is something in the box, but I never pursued it, and I don't know if I can find it again", after describing the box as the first half of an idea whose other half "remained in my subconscious" because "The progression of the story didn't go there." (`scott-2024-box-interview`). "A specific object" should go.
14. **"Scott said the contents of FNaF4's locked box are \"the pieces put together\"…, and FNaF World tells someone \"The pieces are in place for you\""**. Setting the two side by side suggests they are the same pieces. Scott's "pieces" are the pieces of FNaF4's story that "no one… found" (`scott-2015-fnaf4-story-hidden`, same post). FNaF World is a game he said would "not add to" the story (2.12). Keep the echo if wanted, but mark it as an echo.
15. **The paragraph skips 2018.** The box's contents "have changed over the years" (`scott-2018-box-meaning-changed`). That is cited in `open` but not here, where the 2015 line is used as if it still held.
16. **"This is not the Bite of '87."** Scott's material supports this and is not cited: the page-source digits went from 87 to 83 two days before release (`scottgames-site-fnaf4-html-83`, new), and "1983 vs 1987" is on his list of misunderstandings (`scott-2017-matpat-final-theory`).

### Chapter `open`

17. **"in 2015 it held \"the pieces put together\", FNaF4's own story assembled"**. The second half is a reading presented as fact. He did not say what the pieces are. The record's claim has been corrected to match (section 7). Suggested: "in 2015 he said it held "the pieces put together"; by context, the pieces of FNaF4's hidden story".
18. **"Burntrap. It could be Afton's body or the Mimic in a suit"**. Add that the moving Burntrap is not what Scott designed (`scott-2024-interview-burntrap-never-meant-to-move`, new).
19. **Questions he left open on purpose are missing from this chapter**: which FNaF3 ending happened (`scott-2018-interview-fnaf3-ending-unanswered`, new); whose suit the player is in on Sister Location's Night 4 (`scott-2018-interview-sl-suit-question-unanswered`, new); what the two unnamed misconceptions were (`scott-2017-sl-cleared-fnaf4-misconception`); what Burntrap's purpose was; what his Security Breach story was.

### Chapter `golden`

20. **"Scott said the face UCN shows is an edited photo of his son with no lore meaning"**. He said the first part. The second is a rhetorical question that follows three FNaF4 examples: "Do these have lore significance? Well, you probably already know the answer." Say "and implied it has no lore meaning". The same sentence is worth using for something else: "The one you should not have killed" is Scott's own label for the entity.
21. **The crying-child paragraph leans on FNaF World's clock ending** with no word on FNaF World's standing (2.12).

### Chapter `ucn`

22. **"Afton appears on the roster as an animatronic that attacks the player, which is awkward if the player is Afton."** Weak, on Scott's own material: his guide puts the same man on the roster twice, and the store text calls the game a "mashup" (2.3). Drop it or mark it weak.
23. **The chapter never says what UCN is.** It should open with its status in Scott's words: Pizzeria Simulator's custom night grown into a "capstone" that "brought in all of the characters", with no canon ruling (`scott-2018-ucn-for-pizzeria-simulator`, `scott-2018-interview-ucn-capstone` new, `scott-2018-custom-night-no-cryptic-hints` new).

### Chapter `springtrap`

24. **"Scott's teasers read \"I am still here.\" and \"He always does.\""** Fine, and thin. The chapter claims high confidence that the killer is in the suit and cites none of Scott's direct statements (2.11).
25. **"Possible explanations: the good ending is not what happened…  This stays open."** Cite Scott's refusal to say, with "complex" (2.13).
26. **Phantoms.** The chapter does not use the one ruling on what FNaF3's player sees: "These are hallucinations." (`scott-2015-fnaf3-multiple-springtraps-hallucinations`, new).

### Chapter `ffps`

27. **"Molten Freddy… this archive reads it as what was left of Ennard."** Scott published the missing step in 2017 and it is not cited: the group ejects one member, who says "I can put myself back together." (1.6).
28. **The chapter does not say that this game is the intended resolution.** Scott does: its purpose "was just to resolve some plot points" (`scott-2018-interview-ffps-made-to-resolve-plot-points`, new). That is the best support there is for the chapter's "high".

### Chapter `funtimes`

29. **The hidden news report is used; the page source under it is not.** "There is still a bright future for Circus Baby, so be watching for her to appear at a neighborhood party near you!" is the link from the cancelled Pizza World to the rental business the game shows (`scottgames-site-sl-source-bright-future-circus-baby`, new), and the June page source shows the rentals and the name Afton Robotics four months before release (1.6).

### Chapter `digital`

30. **"Fazbear blames the stories on \"a complete lunatic\", after hiring an indie developer to make light of real events"**. Compare Scott's own summary of the game: the indie developer "was tarnishing the brand", which forced the company "to rebrand… by making a VR game that made light of those *crazy stories*. (Or was it all part of the plan?)" (`scott-2019-hw-rebrand-or-part-of-the-plan`, new). In his summary it is the VR game that makes light of the stories, and the company's hand behind the indie games is a question in brackets. The hw analyst should check the tape's wording against the theory's sentence.
31. **Nothing from Scott on what the rabbit is.** Add "possession of AI or possession of machines or circuitry" and the origin of the name (2.8).

### Chapters `vanny`, `burntrap`, `mimic`

32. **"Scott's own teasers split the figure too"**. The two teasers show a guard and a rabbit; nothing in them says these are two people or one. "Split" is the theory's word. What the teaser material does add is uncited: a year-long hidden dialogue in which a follower obeys a voice and has "selected one" (`scottgames-site-sb-source-stay-the-course`, new), and a rabbit figure quietly added to an earlier teaser (`scottgames-site-sb-rock-rabbit-figure-added`, new).
33. **Both chapters treat Security Breach's base game as a plain record of the story.** Scott says it is not his story (2.9). The Burntrap chapter's account of what Burntrap does needs that caveat.
34. **"even \"Burntrap\" comes only from the game files"**. True; by Scott's rule the name is canon all the same (`scott-2024-interview-placeholder-names-canon`, new).

### Chapter `timeline-math`

35. **No mention of the one seasonal marker that fights the game**: the FNaF1 store text's "summer job" against cheques dated November (`scott-2014-fnaf1-store-summer-job`, new). It belongs in `counterEvidence` with a line saying why the game wins.

### Across the file

36. **Duplicates.** The theory cites `scott-fnaf3-steam-description`, `scottgames-fnaf3-teaser-still-here` and `scottgames-fnaf3-teaser-he-always-does` (in `fnaf123.json`). The same facts are in this file as `scott-2015-fnaf3-store-thirty-years`, `scottgames-site-fnaf3-i-am-still-here` and `scottgames-site-fnaf3-he-always-does`. Two more pairs: the FNaF1 and FNaF2 store texts. And a new one from this pass: the hw analyst and I both recorded the Security Breach page-source dialogue (`scottgames-sb-source-stay-the-course` in `hw.json`, `scottgames-site-sb-source-stay-the-course` here). The lead needs to cite one of each pair and file the other under `further`.

---

## 4. What the theory leaves unconnected

Proposed treatment for the parts of this slice the theory never mentions.

| Thread or records | Where it belongs | What it shows | Confidence |
|---|---|---|---|
| Scott's chain of reasons for each game (`scott-2018-interview-each-game-fixed-the-last`, `scott-2018-interview-fnaf3-end-of-trilogy`, `scott-2018-interview-first-game-snippet-of-larger-story`, all new) | Frame, next to the canon rules: "how the story was told" | The story was built in layers: a trilogy, then FNaF4, then two games made to mend the one before. It tells the reader which game is the authority on each dispute | high |
| Pizzeria Simulator as the intended resolution, and the cover story around it (`scott-2018-interview-ffps-made-to-resolve-plot-points` new, `scott-2017-fnaf6-existed-to-clear-things-up` new, `scottgames-site-ffps-source-what-is-paragraph-4` new; cover: `scott-2017-ffps-lite-announcement`, `scott-2017-ffps-apology`) | `ffps` | Why this game's ending carries the weight it does | high |
| The 2017 two-site dialogue and the green eyes (`scottgames-site-2017-source-ejection-dialogue-group`, `scottgames-site-2017-fnafworld-source-ejection-dialogue-one`, `scottgames-site-2017-fnafworld-iamstillhere-eyes`, all new) | `ffps` or `michael` | How Ennard became Molten Freddy and Scrap Baby: the group threw one out, and she rebuilt herself | medium-high (no speaker is named) |
| Sister Location page source: schedule, clients, Afton Robotics, "bright future" (four new records) | `funtimes` | The animatronics were hired out to children's parties; the company is Afton's; the rental trade follows the Pizza World's cancellation | high for what is printed, medium for the expansions of the codes |
| 87 became 83 (`scottgames-site-fnaf4-html-83` new, with `scottgames-site-fnaf4-html-87`) | `bite`, `timeline-math` | Scott steered readers to 1983 before FNaF4 was out | medium-high |
| "30 years later, only one", "I remain" (two new records), the hidden figure in the parts box (`scottgames-site-fnaf3-parts-box`) | `springtrap`, `timeline-math` | The FNaF3 premise in Scott's first words for it | high |
| His statements on who is in Springtrap (2.11) | `springtrap`, `thesis` | The one identity his words settle | high |
| "These are hallucinations." (`scott-2015-fnaf3-multiple-springtraps-hallucinations` new) with "It's all in your mind." | `springtrap` | FNaF3 shows its guard things that are not there | high |
| Help Wanted: the hidden lines, "remember Jeremy", "(Or was it all part of the plan?)", "possession of AI" | `digital` | Something was let in by accident; the company may have planned the frame; the rabbit is a possession | medium |
| Security Breach: the hidden dialogue, the added rabbit figure, the story he did not get, Burntrap as designed, Vanny underused, the Mimic to return (seven records, six new) | `vanny`, `burntrap`, `mimic` | His intent for the Pizzaplex differs from the base game; Ruin is the correction | medium |
| Books: the 2016 and 2018 statements (`scott-2016-silver-eyes-not-100-percent-games`, `scott-2018-interview-books-extra-stories-not-definitive`, `scott-2018-frights-some-connected-to-games`, all new) | `canon-rules` | The line from "separate continuities" through "never intended to be the definitive story" to "some connected directly to the games" | high |
| The Into the Pit game as an adaptation that began as a novelty (`scott-2024-interview-into-the-pit-began-as-novelty` new) | `canon-rules`, and `murders` where Into the Pit is used | Supports the chapter's own wording, "a parallel depiction, not a reconstruction" | medium |
| FNaF World's standing (2.12) | `canon-rules` | A rule for the `fw-*` records | medium |
| UCN's standing (2.3) | `canon-rules`, `ucn` | No ruling; a capstone; a mashup | high that there is no ruling |
| What he left open on purpose (item 19 above) | `open` | Honest gaps, in his words | high |
| The "Was it me?" teasers, "PROPERTY OF FR…ER", "my Fredbear plush design" | `bite`, `plush` | Scott framed FNaF4 as a whodunit among the animatronics and named the answer | medium |
| The two names he used in 2020 (three new records) | lead's decision; if used, `open`, with the caution in 2.6 | That he treats them as names from the games' lore, attached to no character | medium |
| "summer job" (`scott-2014-fnaf1-store-summer-job` new) | `timeline-math` counter-evidence | A store line that disagrees with the game | high that it disagrees |
| The forty records with no story weight | `outsideStory`, grouped by the five reasons in section 6 | | |

---

## 5. Best exhibits

### Quotes

**Rulings**
- `scott-2017-games-over-theories`: "if I make a game that contradicts one of your theories, it doesn't mean that my game is wrong, it means that your theory needs to evolve."
- `scott-2016-cutscenes-are-canon`: "(By the way- Cutscenes are canon.)"
- `scott-2019-only-game-developer-existence-canon`: "Only the existence of a game developer that supposedly made video games based on actual events that may or may not be a cover up by Fazbear Entertainment is canon."
- `scott-2015-book-canon-not-puzzle-pieces`: "So yes, the book is canon, just as the games are. That doesn't mean that they are intended to fit together like two puzzle pieces."
- `scott-2018-frights-some-connected-to-games`: "…some connected directly to the games, and some not."

**How the story was told**
- `scott-2018-interview-each-game-fixed-the-last`: "With three, I wasn't completely happy with the jump scares, so I worked on four. With four, I wasn't completely happy with the storyline, so I made Sister Location."
- `scott-2018-interview-first-game-snippet-of-larger-story`: "I definitely knew that the story I was telling in the first game was a small snippet of a larger story."
- `scott-2018-interview-fnaf4-too-broad`: "It went too broad for interpretation, and that left people unsatisfied."
- `scott-2018-interview-ffps-made-to-resolve-plot-points`: "…the purpose of it was not to build a lot of hype, it was just to resolve some plot points that people wanted to see"
- `scott-2024-interview-sb-story-not-as-intended`: "I had a very specific story in mind and it is very different than the one that got in the game"

**The retcon and the box**
- `scott-2017-one-retcon`: "The truth is that I've done one actual retcon in the series (although I'm not going to say where it was)."
- `scott-2017-clarification-is-not-retcon`: "That's not really a retcon, it's simply an attempt to guide the story toward where it was originally intended to go."
- `scott-2017-retcon-seamless`: "the one retcon mentioned was integrated pretty seamlessly, and most people didn't notice."
- `scott-2015-fnaf4-box-pieces-put-together`: "What's in the box? It's the pieces put together."
- `scott-2018-box-meaning-changed`: "He's absolutely right. The contents of that box have changed over the years"
- `scott-2024-box-interview`: "there is something in the box, but I never pursued it, and I don't know if I can find it again."

**Identities**
- `scott-2018-interview-purple-guy-in-springtrap`: "his purple corpse is in that whole body that whole time"
- `scott-ucn-character-guide-afton`: "William Afton (AKA Scraptrap)"
- `scott-2017-michael-voice-not-robotic`: "It wasn't intended to sound robotic."
- `scott-2014-cant-explain-golden-freddy`: "I can't explain Golden Freddy."
- `scott-2024-interview-glitchtrap-possession-of-ai`: "anything that involves possession of AI or possession of machines or circuitry"
- `scott-2024-interview-burntrap-never-meant-to-move`: "Originally, Burntrap was never supposed to move."

**Fan theories**
- `scott-2017-matpat-answered-some-things`: "now some of those things have been… answered(!), by MatPat!"
- `scott-2015-game-theory-fnaf2-almost-right`: "getting almost everything right."

**Teasers and page source**
- `scottgames-site-fnaf3-source-30-years-later-only-one`: "30 years later, only one"
- `scottgames-site-2017-source-ejection-dialogue-group`: "We found a way to eject you."
- `scottgames-site-2017-fnafworld-source-ejection-dialogue-one`: "I can put myself back together."
- `scottgames-site-sl-source-bright-future-circus-baby`: "There is still a bright future for Circus Baby, so be watching for her to appear at a neighborhood party near you!"
- `scottgames-site-sl-source-service-log-afton-robotics`: "SRVC_LOG:MAINTN_C/O_AftnROBTCS."
- `scottgames-site-sb-source-stay-the-course`: "Have you selected one?" / "I have."
- `scottgames-hw-teaser-hidden-text`: "We let something inside."
- `scottgames-site-ffps-source-what-is-paragraph-4`: "What is paragraph 4?"

### Images (in `public/img`)

| File | Use |
|---|---|
| `scottgames-sl-cancelled-news-brightened.png` (existing) | The hidden news report. Best single teaser exhibit in the slice |
| `scottgames-sb-rock-rabbit-figure-compare.jpg` (new) | Same crop of "ROCK!" in September and November 2019; the rabbit figure appears. Strong figure for the Vanny chapter |
| `scottgames-fnafworld-iamstillhere-eyes.jpg` (new) | The green eyes that went with "I can put myself back together." |
| `scottgames-hw-hidden-lines-highpass.jpg` (new) | The Help Wanted teaser filtered so the four hidden lines show |
| `scottgames-fnaf3-parts-box-brightened.jpg` (new) | The parts box, with the figure standing in the dark beside it |
| `scottgames-fnaf3-i-am-still-here.jpg` (existing) | The first FNaF3 teaser |
| `scottgames-fnaf4-property-of-brightened.jpg` (existing) | "PROPERTY OF FR…ER" |
| `scottgames-fnaf2-something-borrowed.jpg` (new) | Old and new Bonnie, for the 1987 chapter |
| `scottgames-fnafworld-58-hidden-quotes.jpg` (new) | The mock reviews, with the only "dream theory" mention. For the outside-the-story list or a margin note |
| `scottgames-sb-obey.jpg` (existing) | "OBEY" |
| `scottgames-ffps-pixel-cake-teaser.jpg` (new) | The harmless face Pizzeria Simulator wore before release |

Page-source exhibits have no image. If the writer wants one, a plain code-style block of the meta tags from the record's notes would be faithful.

---

## 6. Filing table

Every record in `scott.json` (167), then the 14 Scott and teaser records held in other files. Roles: `core` and `support` name the question the record serves; `counter` cuts against a likely reading; `outside` carries no story weight and gives one of five reasons (development commentary, community interaction, joke or troll, promotion, biography). "(new)" marks records added in this pass.

Totals over all 181: core 55, support 84, counter 2, outside 40 (biography 7, community interaction 5, development commentary 4, joke or troll 9, promotion 15).

### 6.1 Records in `scott.json`

| id | question or thread | role | note |
|---|---|---|---|
| `scott-2015-books-separate-continuity` | Books and games | core | separate continuities |
| `scott-2015-book-not-a-guide` | Books and games | core | book not a guide to the games |
| `scott-2015-book-reimagining` | Books and games | support | "re-imagining" |
| `scott-2015-alternate-timeline-comment` | Books and games | support | "different timeline, an alternate universe…" |
| `scott-2015-silver-eyes-writing-split` | none | outside: development commentary | who wrote which scenes of the novel |
| `scott-2020-novels-fill-blanks` | Books and games | core | "look to the novels to fill in some of blanks to the past" |
| `scott-2020-novels-means-fazbear-frights` | Books and games | core | he meant Fazbear Frights |
| `scott-2020-lore-questions-answered` | Books and games | support | later projects to answer questions; no content |
| `scott-2024-books-canonicity-yes` | Books and games | support | deliberate non-answer; settles nothing |
| `scott-2024-movie-doug-canon` | Canon rulings (film continuity) | support | film continuity ruling; nothing about the games |
| `scott-2024-no-new-lore-on-products` | Canon rulings | support | merchandise must not create lore |
| `scott-2019-help-wanted-is-canon` | Canon rulings | core | Help Wanted is canon; some of its characters are only "questionably canon" |
| `scott-2019-not-canon-list` | Canon rulings | core | Scott, the subreddit and fangames are not canon |
| `scott-2019-indie-dev-photo` | Help Wanted's frame | support | the developer is not Scott |
| `scott-2019-ucn-child-face-jason` | Golden Freddy · UCN | support | the face is a family photo; his name for the entity |
| `scott-2019-fnaf4-photos-no-lore` | Canon rulings · FNaF4 | support | real photos in FNaF4 are not clues |
| `scott-2019-silver-parasol-logo` | Help Wanted's frame | support | logo for the "other game developer" |
| `scott-2015-fnaf4-box-pieces-put-together` | The locked box | core | 2015 answer |
| `scott-2015-fnaf4-story-hidden` | What FNaF4 meant | core | 2015: no one found the pieces |
| `scott-2015-game-theory-fnaf2-almost-right` | Fan-theory endorsements | core | 2015, FNaF2 video |
| `scott-2015-box-best-left-forgotten` | The locked box | support | "best left forgotten, forever" |
| `scott-2024-box-interview` | The locked box | core | 2024 answer: never pursued |
| `scott-2016-box-sarcasm` | none | outside: joke or troll | sarcastic "beating nightmare mode twice" |
| `scott-2015-halloween-wont-expand-fnaf4` | Canon rulings | support | Halloween release would not expand FNaF4 |
| `scott-2015-story-complete` | Canon rulings · FNaF World status | core | story "complete" at FNaF4; FNaF World "will not add to it" |
| `scott-2015-fnaf4-halloween-canon-split` | Canon rulings | core | FNaF4 1.1 canon, Halloween Edition not |
| `scott-2016-fnaf-world-last-game` | Canon rulings · FNaF World status | support | planned as the last FNaF game |
| `scott-2016-sl-custom-night-not-canon` | Canon rulings | core | SL Custom Night gameplay not canon |
| `scott-2016-cutscenes-are-canon` | Canon rulings | core | SL Custom Night cutscenes canon |
| `scott-2017-one-retcon` | The one retcon | core |  |
| `scott-2017-sl-cleared-fnaf4-misconception` | What FNaF4 meant · what Sister Location corrected | core |  |
| `scott-2017-adult-theory-teaser` | The one retcon (his example of a clarification) · Sister Location teasers | support |  |
| `scott-2017-matpat-final-theory` | Fan-theory endorsements | core | 2017, three named points |
| `scott-2017-misunderstood-not-reveals` | Fan-theory endorsements | support | the points were misunderstandings |
| `scott-2017-games-over-theories` | Canon rulings | core | a game beats a theory |
| `scott-2017-lore-not-infallible` | Canon rulings | support | he makes mistakes and repairs them |
| `scott-2018-wanted-to-finish-story` | What FFPS was for | support |  |
| `scott-2017-ffps-lite-announcement` | none | outside: joke or troll | misdirection about FFPS |
| `scott-2018-ffps-troll-lesson` | none | outside: joke or troll | admits the FFPS troll |
| `scott-2017-ffps-store-text` | none | outside: promotion | store copy that hides the game |
| `scott-2017-fnaf6-cancelled-tycoon-hint` | none | outside: joke or troll | misdirection about FFPS |
| `scott-2016-springtrap-return-must-fit-story` | none | outside: development commentary | May 2016: Springtrap's return not yet planned |
| `scott-2015-mangle-gender-yes` | none | outside: joke or troll |  |
| `scott-2017-tff-annotations-not-lore` | Canon rulings | support | guidebook annotations are not lore |
| `scott-2015-fnaf3-ten-teasers-plan` | none | outside: development commentary |  |
| `scott-2015-doors-power-because-game` | Canon rulings | support | a mechanic needs no in-universe reason |
| `scott-2016-nightmare-not-nightmare-freddy` | none | outside: community interaction | merchandise label correction; names already in FNaF4 |
| `scott-2015-no-real-phone-numbers` | none | outside: community interaction |  |
| `scott-2014-fnaf1-store-freddybear` | FNaF1 premise (store text) | support | hired because cheaper than a repairman; "Freddybear" |
| `scott-2014-fnaf2-store-previous-guard` | FNaF2 premise (store text) | support | previous guard moved to day shift |
| `scott-2015-fnaf3-store-thirty-years` | Dates: thirty years | core | duplicate of scott-fnaf3-steam-description |
| `scott-2015-fnaf4-store-last-chapter` | Canon rulings · what each game was for | support | FNaF4 sold as the "last chapter" of the "original story" |
| `scott-2015-fnaf4-store-child-role-unknown` | The crying child | support | "a child whose role is yet unknown" |
| `scott-2016-sl-store-text` | Circus Baby's and the rental business | support |  |
| `scottgames-site-fnaf2-grand-reopening` | FNaF2 premise (teaser) | support | "Grand Reopening"; 2015 is a release tease |
| `scottgames-site-fnaf3-offline-until-next-time` | none | outside: promotion |  |
| `scottgames-site-fnaf3-i-am-still-here` | Who is in Springtrap | support | duplicate of scottgames-fnaf3-teaser-still-here |
| `scottgames-site-fnaf3-parts-box` | FNaF3 premise (teaser) | support | relics, and a hidden figure |
| `scottgames-site-fnaf3-he-always-does` | Who is in Springtrap | support | duplicate of scottgames-fnaf3-teaser-he-always-does |
| `scottgames-site-fnaf3-guess-who` | none | outside: promotion | Phantom BB; the hidden 10 was an abandoned countdown |
| `scottgames-site-fnaf3-all-in-your-mind` | FNaF3: phantoms and hallucinations | support |  |
| `scottgames-site-fnaf3-hat` | none | outside: promotion |  |
| `scottgames-site-fnaf4-final-chapter` | What FNaF4 meant | support | "THE FINAL CHAPTER", hidden "NIGHTMARE" |
| `scottgames-site-fnaf4-html-87` | Dates: 1983 and 1987 | support | page-source 8s and 7s |
| `scottgames-site-fnaf4-was-it-me-bonnie` | The Bite (who did it) | support | "Was it me?" |
| `scottgames-site-fnaf4-was-it-me-chica` | The Bite (who did it) | support | "Was it me?" |
| `scottgames-site-fnaf4-or-me-foxy` | The Bite (who did it) | support | "Or me?" |
| `scottgames-site-fnaf4-property-of-fr` | The Bite (Fredbear's diner) | support | "PROPERTY OF FR…ER" |
| `scottgames-site-fnaf4-or-was-it-me-fredbear` | The Bite (who did it) | support | Fredbear teaser; page source spells "fredbear" |
| `scottgames-site-fnaf4-terrible-things` | none | outside: promotion | Plushtrap reveal; no story |
| `scottgames-site-fnaf4-the-end` | The locked box · FNaF4 as an ending | support | "The End" with a hidden "?" |
| `scottgames-site-2015-thank-you` | none | outside: promotion | cast picture |
| `scottgames-site-2015-halloween-teasers` | none | outside: promotion | for the non-canon Halloween Edition |
| `scottgames-site-sl-never-just-one` | Circus Baby's and the rental business | support | "There was never just one." |
| `scottgames-site-sl-stay-in-seats` | none | outside: promotion | character reveal |
| `scottgames-site-sl-little-of-me` | Ennard and the ejection | support | "There's a little of me in every body." |
| `scottgames-site-sl-dont-hold-it` | none | outside: promotion | character reveal |
| `scottgames-site-sl-get-back-on-stage` | none | outside: promotion | gameplay preview |
| `scottgames-site-sl-cancelled-teaser` | Circus Baby's and the rental business | support | carrier of the hidden news |
| `scottgames-site-sl-news-gas-leak-cancellation` | Circus Baby's and the rental business | core |  |
| `scottgames-site-sl-news-kids-tested` | Circus Baby's and the rental business | core |  |
| `scottgames-site-sl-news-equipment-removed` | Circus Baby's and the rental business | core |  |
| `scottgames-site-sl-news-entrepreneur` | Circus Baby's and the rental business | support |  |
| `scottgames-site-sl-custom-night-round-two` | none | outside: promotion |  |
| `scottgames-site-hw-working-as-intended` | Help Wanted's frame · the purple rabbit | support | surface text of the teaser |
| `scottgames-site-sb-rock` | none | outside: promotion | first version, no figure |
| `scottgames-site-sb-atrium-2020` | none | outside: promotion | 2020 is a release year |
| `scottgames-site-sb-protect` | Vanny | support |  |
| `scottgames-site-sb-obey` | Vanny | support |  |
| `scott-2020-unreleased-teasers-dance-party` | none | outside: promotion |  |
| `scottgames-site-2021-retirement-not-end` | none | outside: biography | authorship after 2021 |
| `scottgames-site-2015-no-phone-numbers` | none | outside: community interaction |  |
| `scott-2017-retcon-seamless` | The one retcon | core | seamless, unnoticed, not debated |
| `scott-2015-dawko-razzbowski-early-access` | none | outside: community interaction |  |
| `scott-2015-considered-opening-box` | The locked box | support | opening it was an option in 2015 |
| `scott-2015-community-expectations-halloween` | Canon rulings | support | why the Halloween split happened |
| `scott-2016-sl-delay-troll` | none | outside: joke or troll |  |
| `scott-2018-box-meaning-changed` | The locked box · the one retcon | core | 2018 answer: contents changed |
| `scott-2016-dawko-dedication` | none | outside: community interaction |  |
| `scott-2017-fnaf6-not-a-troll` | none | outside: joke or troll | misdirection about FFPS |
| `scott-2017-ffps-apology` | none | outside: joke or troll | misdirection about FFPS |
| `scott-2014-christian-projects-before-fnaf` | none | outside: biography |  |
| `scott-2014-no-hidden-christian-messages` | The moral map (limits allegory) | counter | "just a simple horror game" |
| `scott-2014-faith-and-work` | none | outside: biography |  |
| `scott-2014-favorite-verse-psalm-46-10` | none | outside: biography |  |
| `scott-2014-beaver-game-origin` | none | outside: biography |  |
| `scott-2014-cant-explain-golden-freddy` | Golden Freddy | support | no explanation given in 2014 |
| `scott-2014-desolate-hope-human-life` | none | outside: biography |  |
| `scott-2021-i-am-a-christian` | none | outside: biography |  |
| `scott-2015-fnaf3-multiple-springtraps-hallucinations` (new) | FNaF3: phantoms and hallucinations | core | Scott: extra Springtraps are hallucinations |
| `scott-2015-community-uncovered-fnaf1-3` (new) | Fan-theory endorsements | core | 2015, general |
| `scott-2015-book-canon-not-puzzle-pieces` (new) | Books and games | core | "canon, just as the games are", not two puzzle pieces |
| `scott-2016-silver-eyes-not-100-percent-games` (new) | Books and games | support | "doesn't follow the events of the games 100%" |
| `scott-2017-clarification-is-not-retcon` (new) | The one retcon | core | clarifying a misread intention is not a retcon |
| `scott-2017-story-developed-new-details` (new) | The one retcon | core | new unplanned details are a third category |
| `scott-2017-matpat-answered-some-things` (new) | Fan-theory endorsements | core | "some", "not 100%" |
| `scott-2017-michael-voice-not-robotic` (new) | Who is in Springtrap | core | removes the clue for "Miketrap" |
| `scott-2017-fnaf6-existed-to-clear-things-up` (new) | Fan-theory endorsements · what FFPS was for | support |  |
| `scott-2018-custom-night-no-cryptic-hints` (new) | UCN: status and player | support | how UCN was first framed |
| `scott-2018-afton-name-for-ffps-springtrap` (new) | Who is in Springtrap | support | calls the FFPS Springtrap "Afton" |
| `scott-2018-fredbear-plush-design` (new) | The Fredbear plush | support | Scott's name for the plush |
| `scott-2018-frights-some-connected-to-games` (new) | Books and games | core | Frights: "some connected directly to the games, and some not" |
| `scott-2018-movie-universe-fnaf1-3-only` (new) | Canon rulings (film continuity) | support | films are a separate universe |
| `scott-2019-only-game-developer-existence-canon` (new) | Canon rulings | core | the positive half of the HW ruling, with both hedges |
| `scott-2019-hw-rebrand-or-part-of-the-plan` (new) | Help Wanted's frame | core | "(Or was it all part of the plan?)" |
| `scott-2020-cassidy-kazoo-names-from-lore` (new) | Golden Freddy / the fifth child (naming) | support | "names from the lore"; book-name caution |
| `scott-2020-cassidy-screenplay-lore-from-games` (new) | Golden Freddy / the fifth child (naming) | support | "the story of Cassidy… lore from multiple games"; book-name caution |
| `scott-2020-charlie-game-and-book-counterparts` (new) | The Cassette Man's daughter (naming) | support | "game and book counterparts"; book-name caution |
| `scott-2020-freddybear-early-name` (new) | FNaF1 premise (store text) | support | "Freddybear" was an early name, not Fredbear |
| `scott-2014-fnaf1-store-summer-job` (new) | Dates (FNaF1) | counter | "summer job" against November cheques; do not date by it |
| `scottgames-site-fnaf2-something-borrowed` (new) | FNaF2 premise (teaser) | support | old and new casts |
| `scottgames-site-fnaf3-source-30-years-later-only-one` (new) | Dates: thirty years | support | first FNaF3 hint |
| `scottgames-site-fnaf3-source-i-remain` (new) | Who is in Springtrap | support | first-person line under the teasers |
| `scottgames-site-fnaf4-html-83` (new) | Dates: 1983 and 1987 | core | 87 became 83 two days before release |
| `scottgames-site-sl-source-rental-schedule` (new) | Circus Baby's and the rental business | support |  |
| `scottgames-site-sl-source-client-directory` (new) | Circus Baby's and the rental business | support | also "ChcasPrtyWrld" |
| `scottgames-site-sl-source-service-log-afton-robotics` (new) | Circus Baby's and the rental business · Afton | support | first appearance of the name Afton |
| `scottgames-site-sl-source-bright-future-circus-baby` (new) | Circus Baby's and the rental business | core | bridge from Pizza World to rentals |
| `scottgames-site-2017-source-ejection-dialogue-group` (new) | Ennard and the ejection | core |  |
| `scottgames-site-2017-fnafworld-source-ejection-dialogue-one` (new) | Ennard and the ejection | core |  |
| `scottgames-site-2017-fnafworld-iamstillhere-eyes` (new) | Ennard and the ejection | support |  |
| `scottgames-site-ffps-source-what-is-paragraph-4` (new) | What FFPS was for | support | pointer to the hidden game |
| `scottgames-site-ffps-pixel-teasers` (new) | none | outside: promotion | surface of the misdirection |
| `scottgames-site-hw-alt-remember-jeremy` (new) | Help Wanted: the tester Jeremy | support |  |
| `scottgames-site-sb-source-stay-the-course` (new) | Vanny | core | duplicate of scottgames-sb-source-stay-the-course (hw.json) |
| `scottgames-site-sb-rock-rabbit-figure-added` (new) | Vanny | support |  |
| `scottgames-site-2019-fnafworld-58-mock-quotes` (new) | none | outside: joke or troll | only mention of "dream theory", as a joke; cite once under the dream reading |
| `scott-2018-interview-first-game-snippet-of-larger-story` (new) | The one retcon · planning | support | no full plan in FNaF1 |
| `scott-2018-interview-purple-guy-in-springtrap` (new) | Who is in Springtrap | core | "purple guy, he's in there" |
| `scott-2018-interview-fnaf3-ending-unanswered` (new) | FNaF3: which ending | core | unanswered on purpose |
| `scott-2018-interview-fnaf3-end-of-trilogy` (new) | The one retcon · planning | support | FNaF1-3 conceived as a trilogy |
| `scott-2018-interview-fnaf4-too-broad` (new) | What FNaF4 meant | core | 2018: no real way to work it out |
| `scott-2018-interview-sl-made-to-ground-story` (new) | What FNaF4 meant · what Sister Location corrected | core | SL made to ground FNaF4 |
| `scott-2018-interview-fnaf-world-tied-to-canon-mistake` (new) | Canon rulings · FNaF World status | core | the tie-in was deliberate and a mistake |
| `scott-2018-interview-sl-suit-question-unanswered` (new) | Sister Location (open question) | support | whose suit on Night 4: unanswered |
| `scott-2024-interview-placeholder-names-canon` (new) | Canon rulings · naming | core | file names found by players are canon names; "-trap" names were casual |
| `scott-2024-interview-glitchtrap-possession-of-ai` (new) | The purple rabbit in Help Wanted | core | "possession of AI… machines or circuitry" |
| `scott-2024-interview-sb-story-not-as-intended` (new) | Canon rulings · Security Breach as intended | core | base-game story is not the one Scott planned |
| `scott-2024-interview-burntrap-never-meant-to-move` (new) | Burntrap | core |  |
| `scott-2024-interview-mimic-not-the-last` (new) | The Mimic | support |  |
| `scott-2024-interview-vanny-underused` (new) | Vanny · Security Breach as intended | support |  |
| `scott-2018-interview-fnaf3-teaser-read-as-golden-freddy` (new) | The one retcon (yellow-suit candidate) | support | audience expected Golden Freddy in Jan 2015 |
| `scott-2018-interview-each-game-fixed-the-last` (new) | What each game was for | core | his own chain: 3 to 4 to SL to FFPS |
| `scott-2018-interview-ffps-made-to-resolve-plot-points` (new) | What FFPS was for | core |  |
| `scott-2018-interview-ucn-capstone` (new) | UCN: status and player | core | "capstone"; nothing about story |
| `scott-2018-interview-books-extra-stories-not-definitive` (new) | Books and games | support | the novel trilogy: "extra stories", not the definitive story |
| `scott-2024-interview-into-the-pit-began-as-novelty` (new) | Canon rulings · Into the Pit's standing | support | an adaptation of a book story that began as a novelty; "spin-off" accepted |


### 6.2 Scott and teaser records in other files (not edited)

| id | question or thread | role | note |
|---|---|---|---|
| `scott-ucn-character-guide-afton` | Who is in Springtrap · UCN | core | [ffps-ucn.json] "William Afton (AKA Scraptrap)" |
| `scott-2017-ffps-patch-green-man` | none | outside: development commentary | [ffps-ucn.json] patch note; names "Green Man" |
| `scott-2018-ucn-voice-lines-when-they-kill-you` | UCN: status and player | support | [ffps-ucn.json] |
| `scott-ucn-store-once-again-trapped` | UCN: status and player | support | [ffps-ucn.json] "ultimate FNAF mashup" |
| `scott-2018-ucn-for-pizzeria-simulator` | UCN: status and player | support | [ffps-ucn.json] |
| `scott-fnaf3-steam-description` | Dates: thirty years | core | [fnaf123.json] the copy the theory cites |
| `scott-fnaf2-steam-description` | FNaF2 premise (store text) | support | [fnaf123.json] |
| `scott-fnaf1-steam-freddybear` | FNaF1 premise (store text) | support | [fnaf123.json] its note "probably a nickname or typo" is superseded by scott-2020-freddybear-early-name |
| `scottgames-fnaf3-teaser-still-here` | Who is in Springtrap | support | [fnaf123.json] the copy the theory cites |
| `scottgames-fnaf3-teaser-he-always-does` | Who is in Springtrap | support | [fnaf123.json] the copy the theory cites |
| `scottgames-hw-teaser-hidden-text` | The purple rabbit in Help Wanted | core | [hw.json] "We let something inside." |
| `scott-silver-parasol-website` | Help Wanted's frame | support | [hw.json] |
| `scott-not-part-of-lore` | Canon rulings | support | [hw.json] overlaps scott-2019-not-canon-list |
| `scottgames-sb-source-stay-the-course` | Vanny | core | [hw.json] duplicate of scottgames-site-sb-source-stay-the-course |


### 6.3 The outside-the-story list, grouped

- **development commentary** (4): `scott-2015-silver-eyes-writing-split`, `scott-2016-springtrap-return-must-fit-story`, `scott-2015-fnaf3-ten-teasers-plan`, `scott-2017-ffps-patch-green-man`
- **community interaction** (5): `scott-2016-nightmare-not-nightmare-freddy`, `scott-2015-no-real-phone-numbers`, `scottgames-site-2015-no-phone-numbers`, `scott-2015-dawko-razzbowski-early-access`, `scott-2016-dawko-dedication`
- **joke or troll** (9): `scott-2016-box-sarcasm`, `scott-2017-ffps-lite-announcement`, `scott-2018-ffps-troll-lesson`, `scott-2017-fnaf6-cancelled-tycoon-hint`, `scott-2015-mangle-gender-yes`, `scott-2016-sl-delay-troll`, `scott-2017-fnaf6-not-a-troll`, `scott-2017-ffps-apology`, `scottgames-site-2019-fnafworld-58-mock-quotes`
- **promotion** (15): `scott-2017-ffps-store-text`, `scottgames-site-fnaf3-offline-until-next-time`, `scottgames-site-fnaf3-guess-who`, `scottgames-site-fnaf3-hat`, `scottgames-site-fnaf4-terrible-things`, `scottgames-site-2015-thank-you`, `scottgames-site-2015-halloween-teasers`, `scottgames-site-sl-stay-in-seats`, `scottgames-site-sl-dont-hold-it`, `scottgames-site-sl-get-back-on-stage`, `scottgames-site-sl-custom-night-round-two`, `scottgames-site-sb-rock`, `scottgames-site-sb-atrium-2020`, `scott-2020-unreleased-teasers-dance-party`, `scottgames-site-ffps-pixel-teasers`
- **biography** (7): `scottgames-site-2021-retirement-not-end`, `scott-2014-christian-projects-before-fnaf`, `scott-2014-faith-and-work`, `scott-2014-favorite-verse-psalm-46-10`, `scott-2014-beaver-game-origin`, `scott-2014-desolate-hope-human-life`, `scott-2021-i-am-a-christian`

Notes for the lead on this list:

- The "joke or troll" group includes the whole public cover story for Pizzeria Simulator. Those records carry no story, but the `ffps` chapter may want to cite one or two as the cover (see section 4).
- `scottgames-site-2019-fnafworld-58-mock-quotes` is a joke, and is also the only place Scott names "dream theory". Cite it once where the dream reading is discussed.
- `scott-2014-no-hidden-christian-messages` is filed as `counter` to the moral-map chapter, not as biography: it is a statement about what the first game means. The other faith records are biography; the `faith` chapter currently cites three of them inline.
- Five teaser records are filed outside as promotion even though they show characters (`scottgames-site-sl-stay-in-seats`, `scottgames-site-sl-dont-hold-it`, `scottgames-site-sl-get-back-on-stage`, `scottgames-site-fnaf4-terrible-things`, `scottgames-site-fnaf3-guess-who`): each reveals a character or a mechanic and nothing about the story.
- `scott-2017-ffps-patch-green-man` (in `ffps-ucn.json`) is filed outside as development commentary. If the ffps-ucn analyst uses it for the name "Green Man", it moves to support for that question.

---

## 7. Records added and fixed

### 7.1 Added (58)

- `scott-2015-fnaf3-multiple-springtraps-hallucinations`: Extra Springtraps on the cameras are hallucinations
- `scott-2015-community-uncovered-fnaf1-3`: By August 2015 the community had 'found everything' in FNaF1 to FNaF3
- `scott-2015-book-canon-not-puzzle-pieces`: 'The book is canon, just as the games are', but not two puzzle pieces
- `scott-2016-silver-eyes-not-100-percent-games`: The Silver Eyes 'doesn't follow the events of the games 100%'
- `scott-2017-clarification-is-not-retcon`: Clarifying a misread intention in the next game is 'not really a retcon'
- `scott-2017-story-developed-new-details`: The story 'developed new details over time' that were not planned from the start
- `scott-2017-matpat-answered-some-things`: 'Some of those things have been… answered(!), by MatPat'
- `scott-2017-michael-voice-not-robotic`: The 'robotic' voice was an accident of slowing the line down
- `scott-2017-fnaf6-existed-to-clear-things-up`: The next game 'was really only existing to clear up things'
- `scott-2018-custom-night-no-cryptic-hints`: A custom night update 'wouldn't be with teasers and cryptic hints'
- `scott-2018-afton-name-for-ffps-springtrap`: Scott calls the Pizzeria Simulator Springtrap 'Afton'
- `scott-2018-fredbear-plush-design`: Scott calls the yellow bear plush 'my Fredbear plush design'
- `scott-2018-frights-some-connected-to-games`: New book series: stories 'some connected directly to the games, and some not'
- `scott-2018-movie-universe-fnaf1-3-only`: The film universe covers FNAF 1-3 only
- `scott-2019-only-game-developer-existence-canon`: Only 'the existence of a game developer' is canon, with two hedges
- `scott-2019-hw-rebrand-or-part-of-the-plan`: Help Wanted's premise in Scott's words: '(Or was it all part of the plan?)'
- `scott-2020-cassidy-kazoo-names-from-lore`: A licensed 'Cassidy Kazoo': 'companies randomly throw around names from the lore'
- `scott-2020-cassidy-screenplay-lore-from-games`: A rejected film script followed 'the story of Cassidy' with 'lore from multiple games'
- `scott-2020-charlie-game-and-book-counterparts`: A rejected script's 'Charlie' had 'game and book counterparts'
- `scott-2020-freddybear-early-name`: 'Freddybear' was Freddy's name for a very short time
- `scott-2014-fnaf1-store-summer-job`: FNaF1 Steam description: 'your new summer job'
- `scottgames-site-fnaf2-something-borrowed`: FNaF2 teaser: 'something borrowed... something new...'
- `scottgames-site-fnaf3-source-30-years-later-only-one`: FNaF3 first hint in the page source: '30 years later, only one'
- `scottgames-site-fnaf3-source-i-remain`: FNaF3 page source: 'I remain'
- `scottgames-site-fnaf4-html-83`: Two days before FNaF4's release the page-source digits changed from 87 to 83
- `scottgames-site-sl-source-rental-schedule`: Sister Location page source: a weekly booking schedule for five animatronics
- `scottgames-site-sl-source-client-directory`: Sister Location page source: client directory of birthday bookings
- `scottgames-site-sl-source-service-log-afton-robotics`: Sister Location page source names 'AftnROBTCS' as maintainer
- `scottgames-site-sl-source-bright-future-circus-baby`: Sister Location page source: 'a bright future for Circus Baby… at a neighborhood party near you'
- `scottgames-site-2017-source-ejection-dialogue-group`: 2017 page source, scottgames.com: 'We found a way to eject you.'
- `scottgames-site-2017-fnafworld-source-ejection-dialogue-one`: 2017 page source, fnafworld.com: 'I can put myself back together.'
- `scottgames-site-2017-fnafworld-iamstillhere-eyes`: fnafworld.com, June 2017: two green eyes, file name 'Iamstillhere.jpg'
- `scottgames-site-ffps-source-what-is-paragraph-4`: Pizzeria Simulator page source: 'What is paragraph 4?'
- `scottgames-site-ffps-pixel-teasers`: Pizzeria Simulator teasers: 8-bit Freddy brings cake to three children
- `scottgames-site-hw-alt-remember-jeremy`: Help Wanted teaser page source: alt text 'remember Jeremy'
- `scottgames-site-sb-source-stay-the-course`: Security Breach page source: 'Focus on my voice.' / 'Have you selected one?' / 'I have.'
- `scottgames-site-sb-rock-rabbit-figure-added`: Security Breach 'ROCK!' teaser, second version: a rabbit-eared figure on the balcony
- `scottgames-site-2019-fnafworld-58-mock-quotes`: fnafworld.com '58' teaser hides mock reviews, one about 'dream theory'
- `scott-2018-interview-first-game-snippet-of-larger-story`: 2018: FNaF1's story was 'a small snippet of a larger story', not a full plan
- `scott-2018-interview-purple-guy-in-springtrap`: 2018: 'his purple corpse is in that whole body that whole time'
- `scott-2018-interview-fnaf3-ending-unanswered`: 2018: which FNaF3 ending happened? 'Very interesting… complex', and not answered
- `scott-2018-interview-fnaf3-end-of-trilogy`: 2018: FNaF3 'was the end of a trilogy'
- `scott-2018-interview-fnaf4-too-broad`: 2018: FNaF4 'went too broad for interpretation'
- `scott-2018-interview-sl-made-to-ground-story`: 2018: another game was needed to 'ground it in storytelling again'
- `scott-2018-interview-fnaf-world-tied-to-canon-mistake`: 2018: FNaF World should not have been tied 'in to a canon game'
- `scott-2018-interview-sl-suit-question-unanswered`: 2018: whose suit on Sister Location's Night 4? Not answered
- `scott-2024-interview-placeholder-names-canon`: 2024: 'Glitchtrap' and 'Burntrap' were placeholder names that became canon
- `scott-2024-interview-glitchtrap-possession-of-ai`: 2024: Glitchtrap as 'possession of AI or possession of machines or circuitry'
- `scott-2024-interview-sb-story-not-as-intended`: 2024: Security Breach's story is 'very different' from the one Scott had in mind
- `scott-2024-interview-burntrap-never-meant-to-move`: 2024: 'Originally, Burntrap was never supposed to move'
- `scott-2024-interview-mimic-not-the-last`: 2024: the Mimic is 'a really terrific antagonist' and not gone
- `scott-2024-interview-vanny-underused`: 2024: Vanny 'was not utilized to her fullest potential'
- `scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`: 2018: people first took the FNaF3 teaser figure for Golden Freddy
- `scott-2018-interview-each-game-fixed-the-last`: 2018: each game answered what he was unhappy with in the one before
- `scott-2018-interview-ffps-made-to-resolve-plot-points`: 2018: Pizzeria Simulator existed 'just to resolve some plot points'
- `scott-2018-interview-ucn-capstone`: 2018: Ultimate Custom Night was the 'capstone' that 'brought in all of the characters'
- `scott-2018-interview-books-extra-stories-not-definitive`: 2018: the books were 'never intended to be the definitive story'
- `scott-2024-interview-into-the-pit-began-as-novelty`: 2024: the Into the Pit game 'was still just supposed to be a novelty'

### 7.2 Fixed (33)

- `scott-2015-book-reimagining`: quote replaced: it stopped before the sentence the title relies on ('The book is a re-imagining…'); claim reworded to match
- `scott-2015-mangle-gender-yes`: quote was only 'OK. …'; replaced with the sentence that carries the answer
- `scott-2024-no-new-lore-on-products`: claim misread 'established date': Scott means a founding ('EST') date printed on a product, not a date established in the lore
- `scott-2017-adult-theory-teaser`: notes now cite the primary page-source captures; wrong 'fnaf4' tag and wrong link to the FNaF4 Plushtrap teaser removed
- `scottgames-site-fnaf4-html-87`: notes completed: exact scrambled tag names, later states of the source, and the verified change to '83' (was 'not verified here')
- `scottgames-site-fnaf4-property-of-fr`: notes: the 'gsfecfbs' page-source cipher is now verified in the raw capture (was 'not verified here')
- `scottgames-site-fnaf4-or-was-it-me-fredbear`: notes: page-source cipher 'gsfecfbs' (fredbear) verified in the capture taken with this teaser
- `scottgames-site-fnaf4-terrible-things`: notes: unfounded cross-reference to 'adult theory' removed; verified page-source cipher spelling 'Plushtrap' added
- `scottgames-site-fnaf3-parts-box`: claim and notes: brightening shows a standing figure with two pale eye dots to the right of the spotlight; exhibit image added
- `scottgames-site-fnaf3-hat`: notes: a second version of hat.jpg (hat removed) recorded from the capture list
- `scottgames-site-hw-working-as-intended`: notes: 'not legible' replaced; the four hidden lines are legible after filtering and are listed, with the page-source alt text
- `scottgames-site-sb-atrium-2020`: notes: Scott's own confirmation that '2020' on this teaser was the planned release year
- `scottgames-site-sb-rock`: notes and related: a later version of the same file adds a rabbit-eared figure (new record)
- `scott-2017-matpat-final-theory`: notes: end of the quoted sentence and the video URL added; related links to the new records on the reach of the endorsement
- `scott-2014-fnaf1-store-freddybear`: notes: Scott's 2020 explanation of 'Freddybear' replaces the guess that it was a typo
- `scott-2017-retcon-seamless`: notes: second sentence of the edit added; times of post, comment and edit recorded
- `scott-2017-one-retcon`: related: links to the two new records from the same post
- `scott-2017-sl-cleared-fnaf4-misconception`: related: links to new records (2018 interview on FNaF4 and Sister Location; clarification is not a retcon)
- `scott-2015-fnaf4-box-pieces-put-together`: claim: the gloss 'i.e. the assembled hidden FNaF4 story' moved out of the claim into notes as a reading
- `scott-2016-cutscenes-are-canon`: quote: bracketed elision '[...]' replaced with the full verbatim text (the elided word was 'Enjoy!')
- `scott-2019-not-canon-list`: notes: the rest of the sentence, with its hedges 'supposedly' and 'may or may not be a cover up', added
- `scott-2019-indie-dev-photo`: quote: bracketed elision '[...]' removed; the quote is now one unbroken sentence, and the elided text is recorded separately
- `scott-2014-christian-projects-before-fnaf`: quote joined two sentences four paragraphs apart with '…'; replaced with two consecutive sentences, the other moved to notes; verifiedVia added
- `scott-2014-no-hidden-christian-messages`: verifiedVia added (interview text re-read at the source; quote confirmed)
- `scott-2014-faith-and-work`: verifiedVia added (interview text re-read at the source; quote confirmed)
- `scott-2014-favorite-verse-psalm-46-10`: verifiedVia added (interview text re-read at the source; quote confirmed)
- `scott-2014-beaver-game-origin`: verifiedVia added (interview text re-read at the source; quote confirmed)
- `scott-2014-cant-explain-golden-freddy`: verifiedVia added (interview text re-read at the source; quote confirmed)
- `scott-2014-desolate-hope-human-life`: verifiedVia added (interview text re-read at the source; quote confirmed)
- `scott-2015-box-best-left-forgotten`: quote was cut off before its key words; now ends '…best left forgotten, forever.'
- `scott-2015-game-theory-fnaf2-almost-right`: related: link to the new record carrying the 'found everything' sentences
- `scott-2018-box-meaning-changed`: wording verified from the archived video (was known only from news recaps); quote lengthened; claim and notes now carry the reason he gave
- `scott-2024-box-interview`: wording verified from the archived video: 'I never pursued it' (the news transcript had 'that'); claim and notes now carry the passage that leads up to it

### 7.3 Images added (7, all credited in `src/data/credits/scott.json`)

- `scottgames-fnaf2-something-borrowed.jpg`: FNaF2 teaser 'something borrowed... something new...' (official scottgames.com file, Sept 2014)
- `scottgames-fnaf3-parts-box-brightened.jpg`: FNaF3 teaser 'whatcanweuse.jpg' (official scottgames.com file, Jan 2015) beside a researcher-brightened copy showing a figure at the right
- `scottgames-fnafworld-iamstillhere-eyes.jpg`: fnafworld.com teaser 'Iamstillhere.jpg': two green eyes (official file, June 2017)
- `scottgames-ffps-pixel-cake-teaser.jpg`: Pizzeria Simulator teaser: 8-bit Freddy carrying a cake to three children (official scottgames.com file, Oct 2017)
- `scottgames-sb-rock-rabbit-figure-compare.jpg`: Security Breach 'ROCK!' teaser, same area enlarged from two versions of the official file: Sept 2019 (left) and Nov 2019 (right, with a rabbit-eared figure). Researcher-made crop
- `scottgames-fnafworld-58-hidden-quotes.jpg`: fnafworld.com '58' teaser with its hidden mock quotes (official file, Aug 2019, brightened by researcher)
- `scottgames-hw-hidden-lines-highpass.jpg`: Help Wanted teaser (official scottgames.com file, 11 Mar 2019), high-pass filtered by researcher so the four hidden lines show

### 7.4 Records that should go or merge (ids kept, as instructed)

- `scott-2015-fnaf3-store-thirty-years`, `scottgames-site-fnaf3-i-am-still-here`, `scottgames-site-fnaf3-he-always-does`, `scott-2014-fnaf2-store-previous-guard`, `scott-2014-fnaf1-store-freddybear`: each duplicates a record in `fnaf123.json` that the theory already cites. Keep one of each pair in the theory and file the other under `further`.
- `scottgames-site-sb-source-stay-the-course` (here) and `scottgames-sb-source-stay-the-course` (`hw.json`, added by the hw analyst during this pass) are the same fact. This file's copy has the capture range and the tag layout.
- `scott-not-part-of-lore` (`hw.json`) overlaps `scott-2019-not-canon-list` and `scott-2019-indie-dev-photo`. `scott-silver-parasol-website` (`hw.json`) and `scott-2019-silver-parasol-logo` quote different sentences of one post.
- `scott-fnaf1-steam-freddybear` (`fnaf123.json`): its note "Probably a nickname or typo" is now answered by `scott-2020-freddybear-early-name`. The fnaf123 analyst or the lead should update that note.
- `scott-ucn-character-guide-afton` (`ffps-ucn.json`): its note says Scott's Reddit posts and Steam comments do not use the name. They do, twice, on 2018-08-27 (`scott-2018-afton-name-for-ffps-springtrap`).

---

## 8. Could not verify

1. **Interview wording, by ear.** Every quote from the 2018 and 2024 Dawko interviews comes from machine transcription of archive.org copies of the videos (three models; quotes kept to words on which the transcripts agree). Nobody has listened to them. Two records carry no quote because the transcripts differ on small words (`scott-2018-interview-sl-suit-question-unanswered`, `scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`). One doubt inside a quote: "whole body" may be "hollow body" (`scott-2018-interview-purple-guy-in-springtrap`). What would verify: YouTube's own captions (blocked from this server) or a listen at the timestamps in each record's `location` and `url`.
2. **The two misconceptions he never named**: the one from FNaF4 that Sister Location cleared up, and the one from Sister Location still outstanding in September 2017 (`scott-2017-sl-cleared-fnaf4-misconception`). Nothing in the 38 posts, 614 comments, 68 announcements, seven forum threads or either interview names them. The readings in 1.3 and 2.2 are inferences.
3. **Where the one retcon is.** No source says. Section 2.10 ranks candidates; it does not find it.
4. **Statements that do not exist, as far as this pass can tell.** Scott on: who the player of UCN is, or whether UCN is canon; who Mike Schmidt is; who Phone Guy is; the crying child's name or fate; which character the name he used in 2020 belongs to; whether FNaF4's nights are dreamt. All the text corpora were searched for these. An absence in the sources read is not proof that he never said it elsewhere (see item 7).
5. **Two front-page captures were not fetched** (Wayback 20150215212619 and 20150727162730; rate limits). Their neighbours on both sides were read, so only a change confined to one of those captures could have been missed.
6. **Page-source strings not decoded**: "4g7n0c..." and "...28jk12" (2016-08-28, under the "CANCELLED" teaser), and the HTML comment "All Content Copyright 0871 Scott Cawthon" (2015-06-12). They are noted in `scottgames-site-sl-source-bright-future-circus-baby` and `scottgames-site-fnaf4-html-87` and not interpreted.
7. **Places not read.** Scott's Twitter and Tumblr accounts (both gone; no archive search was made); Steam forum replies beyond the seven threads found (his Steam post history needs a login); Game Jolt beyond the one FNaF World post that its API returns ("A Farewell to FNaF World", 2017-01-17, development commentary); YouTube video descriptions. The Steam news API returns nothing by Scott for FNaF1 and one item for FNaF2, so any 2014 announcements later removed would be missing.
8. **Hidden text the wiki reports that could not be read in the archived files**: "Or was it me?" on the Fredbear teaser, and "OUT OF ORDER" with an "87" on the Foxy teaser. The existing records already say so. What would verify: a better original than the Wayback JPEG.
9. **Teaser versions seen only in a fan catalogue** (thefnafarchive.org, used as a research aid): the Freddy plush frames and the three countdown frames of the Pizzeria Simulator cycle, the seventy UCN progress images, the FNaF World cast images, the Sister Location facility map, the seventh hidden Help Wanted image. None carries story text, so none was recorded beyond a mention in notes.
10. **The content of the two Game Theory videos Scott praised** was not consulted, on purpose: it is not evidence. What his praise covers is set out in 2.1 from his words alone.
11. **Game facts this memo leans on but does not own**: the 1983 keypad and the monitors in Sister Location's Private Room (2.2); the exact text of FNaF1's newspaper about the suspect's capture (2.10); whether any game prints the name he used in 2020 (2.6). These belong to the fnaf4-sl, fnaf123 and ffps-ucn slices.
