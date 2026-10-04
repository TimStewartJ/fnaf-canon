# Checks from recordings: evidence round 3 (the scenes of Part 3)

Worktree `~/src/fnaf-canon-wt/theory` (branch `ws/theory`, on `19e1aad`), 3 October 2026, 19:29 to about 20:45. Nothing is committed and nothing was stashed. I edited only `src/data/evidence/{ffps-ucn,fnaf123,fnaf4-sl,hw,sb-mimic}.json`, `src/data/credits/{ffps-ucn,sb-mimic}.json` and two new files in `public/img/`. No record was added, so there is nothing to file and `--allow-unaccounted` was not needed.

**How the looking was done, and its limits.** As in round 2: still frames from archived recordings of play at archive.org, the sound never heard. Most are Markiplier's playthroughs (`markipliers-five-nights-at-freddys-archive-2014-2025`, called "the big archive" below; `markiplier-fnafsb`; `markipliers-playthrough-of-fnaf-sb-ruin`). Two other players' recordings were used where his do not show the scene, and are named where they are used: a Rooster Teeth video (`roosterteeth-47843`) for the Alley ending, and iRaphahell's Secret of the Mimic (`iRaphahell-FNaF_SotM`) for the van. A recording shows one route through a game; "not found" means not found in what was looked through, which is named each time.

**Checks at the end:** `npx tsx scripts/validate.ts` ends `OK` (unaccounted 0); `npx tsc -b` prints nothing; every evidence and credits file round-trips through `json.dumps(data, indent=2, ensure_ascii=False)` with no trailing newline; no quote is over 45 words; `quotecheck.mts` lists the same two `MISS` lines for beat `s-1979` and nothing else. `git status --short` shows five evidence files, two credits files and two images.

**Counts.** 11 records changed in 34 fields. 37 records now carry a reading from a recording (9 more than before this round: the two Alley records, the keypad, FNaF2's yellow bear, Princess Quest IV's ending, the hub's bear, RUIN's lobby, the graveyard and FNaF4's eighth night). For three of the nine only part is seen: the keypad (no digit), the hub's bear (not the quoted card) and RUIN's lobby (not the headline). Two images added. 23 sentences of prose proposed for change (section 3).

## 1. Results

**1. Sister Location's credits roll: seen, and it is as the record says. The tag can go.** The big archive, "Sister Location - Part 5", 15:14 to 16:08. The roll prints "Five Nights at Freddy's / Sister Location", then the heading "Voice Actors" and, each part on one line with the performer on the line below: Baby, Heather Masters / HandUnit, Andy Field / Computer Voice, Julie Shields / Ballora, Michella Moss / Funtime Freddy, Kellen Goff / Bidybabs, Zehra Jane Naqvi / Vlad, Christopher McCullough / Clara, Amber Lee Connors / Narrator, Bob Barnes; then "Misc" (PJ Heywood, John Matthew, Jason Kappus, Jesse Adam, Becky Shrimpton), "Music / Leon Riskin", "TV Animations / Neko Pilarcik-Tellez", "Created by / Scott Cawthon", "THE END". With Pizzeria Simulator's roll, read in round 2 ("Scrap Baby / Heather Masters", "Molten Freddy / Kellen Goff"), both sides of the comparison are now on screen. The record's quote carries all four pairs. One thing it also shows, which no chapter uses: PJ Heywood, whom Pizzeria Simulator credits as William Afton, is in Sister Location's roll under "Misc", with no part named.

**2. `security-breach-ending-alley`: seen, and it differs in one point.** Markiplier's recordings do not have this ending, so I used another player's: `roosterteeth-47843` ("Can We Make It to the Ending of Five Nights at Freddy's: Security Breach? (Part 7 FINALE)"), 38:14 to 39:06. Freddy, close up, with "Do you wish to stay?" and the choices "Stay", "Leave" and "Vanny" (38:14); then comic panels: a full moon; a boy with a plaster on his cheek running beside a wall; the caption "LATER..." over an alley (38:35); a cardboard box with the boy inside under a newspaper (38:40); the paper, headed "MISSING" and under it "LOCAL RESIDENTS CONTINUE TO DISAPPEAR", with rows of silhouetted portraits (38:48); the boy asleep as the panel turns red (38:54); a large shadow with two long ears falling across the ground beside the box, its head with whiskers and a lash (38:57 to 39:05); a card with one star. The difference: the picture has a rabbit-eared shadow and nothing more. No woman, no costume and no name is shown, so "Vanny's silhouette" in the title and claim is now "a rabbit-eared shadow", and whose it is, is given as a reading. The record had no quote; it has the caption and the newspaper's heading now. `security-breach-alley-newspaper` is **seen, and as recorded** (same capture, 38:48).

**3. `sl-private-room-keypad-1983`: seen as far as a picture goes; the digits are still not shown.** The big archive, "Sister Location - Part 5", 9:46 to 9:56. At 12 AM and 99% power the pointer is on the wall keypad left of the "CELEBRATE!" poster; the keypad has twelve blank keys, three across and four down; the top monitor changes from static to a view at 9:52, the second at 9:53, the third by 9:54. I followed the pointer frame by frame against the keys: it first rests on the top right key (9:49.2), and its last four rests before the change are at the lower edge of the top left key (9:50.4), on the right key of the third row (9:50.9), on the middle key of the third row near its right edge (9:51.3), and on the top right key (9:51.7). On a telephone layout the last four fit 1, 9, 8, 3, but the keys are blank, nothing on screen marks a press, and a rest cannot be told from a press. So the capture is consistent with the code and does not prove it; the notes say exactly this, and the tag stays.

**3. `fnaf2-golden-freddy-office`: seen, and it is as the record says, for what a picture shows.** The big archive, "Five Nights at Freddy's 2 - Part 6 (ENDING)" (720p), Night 6: the yellow bear sits slumped at the left of the desk at 2 AM (9:02) and at 12 AM (12:07), and its head alone, large, hangs in the dark hallway at 2 AM (12:22); each time the picture goes to a yellow face or to static within a second or two and "Game Over" follows. What makes it leave or strike (the Freddy head, the light) was not checked. That it is active only on Night 6 is another record's claim and cannot be shown from one recording, so the tag in `nightshift.ts:39`, which sits on that clause, stays.

**3. `fnaf1-news-dressed-as-mascot`: not found.** The clippings are rare replacements of a poster on one camera. A text search of Markiplier's two FNaF1 parts was started and stopped for time after the first minute or so of each; nothing was found, and I did not look further. The record was read from the wiki's copies of the in-game images and is unchanged.

**4. `hw2-pq4-vanny-crushes-glitchtrap`: seen, and it differs in one point.** The big archive, "Help Wanted 2 - Part 13", 23:43 to 24:22. Seen from inside a heap of plush toys behind glass: a green rabbit plush glows in the foreground (23:44); a giant figure with a rabbit's head leans in with its hands on the glass (23:50 to 24:03), face and fingers stitched and patched, eyes orange with lashes, whiskers at the cheeks; it holds up on one palm a tiny standing figure with two long ears, dark against a green glow (24:06 to 24:10), brings the other hand over it and clasps both shut (24:10 to 24:14); its eyes turn red and it fades (24:17 to 24:19); credits (24:24). No subtitle. The difference: nothing in the picture says what the tiny figure is. That it is a copy of Help Wanted's rabbit, drawn out of the prize chute, and that the giant has taken the player's plush, are now given as the wiki's account. The giant is not only a silhouette: at 23:50 to 24:04 its stitched face is lit.

**4. `hw2-hub-helpi-pushes-gift`: the screen is seen; the quoted card is not found.** "Help Wanted 2 - Part 13", 5:04 to 5:10: a cartoon bear in a top hat beside a speech bubble on the big screen next to the stage, with the cards "New tasks available! Check the computer." and "Good for you!". "Part 14", 26:51 and 27:08 to 27:14: "You got them all!", with the gift box on the stage. After the Princess Quest IV ending the same screen shows a black shape on yellow rings and no bear (Part 13, 27:12 to 27:40), which fits the wiki's "vanishes after the Princess Quest IV ending". The cards about the ignored gift, "Why are you ignoring the gift?" among them, were not found in Parts 13 and 14; the quote is still read from the wiki's images.

**5. `ruin-pizzaplex-abandoned-earthquake`: the wrecked lobby is seen; the headline is not legible.** `markipliers-playthrough-of-fnaf-sb-ruin`, Part 1, 1:16 to 3:00. The entrance doors and the tall windows above them are papered edge to edge with sheets of newsprint, each with a dark picture block and columns of text; the unlit outlines of four mascot faces and "COME BACK" stand over the doors; graffiti on the pillars; a forklift, crates, cones and loose tiles under a banner "PARDON OUR MESS!" / "WE'LL BE BACK SOON"; handwriting on a board, "Don't go in alone...". No headline can be read on the sheets at 1080p. The claim now tells the scene as seen and keeps the headline as read from the texture; "full of broken S.T.A.F.F. bots" stays the wiki's.

**5. `ruin-gregory-comics-depict-endings`: not found.** I searched all seven parts of the RUIN recording for frames with a lot of white paper in them and looked at the fifteen strongest: none is a comic page (they are a television, a screen of static, lamps, a wet-floor sign). The inventory is open at Part 1, 3:20 to 3:28, with no page in it. Unchanged.

**6. `hw-mobile-princess-quest-graveyard`: seen, and it is as the record says, in the arcade version.** `markiplier-fnafsb`, Security Breach Part 9 (720p), 1:20:30 to 1:21:15, the first Princess Quest cabinet played in that part: a walled graveyard in the rain with three plots; three stones in the middle plot, one at the left, two at the right; each stone on a plinth with a brazier in front; one is broken, its top lying beside it. Six, as on the wiki's screenshot. The stones carry a few yellow dots and no names. Whether the mobile port's graveyard is the same was not seen.

**6. `fnaf4-night8-no-story-text`: seen, and it is as the record says.** The big archive, "20/20/20/20 COMPLETE | Five Nights at Freddy's 4 - Part 8 (FINAL)". Title screen with three stars (0:14); on the Extra menu the last item of the list changes while the player types and from 0:28 ends in "0" (the rest of the label is behind the camera inset); the night is played; at 5 AM the clock's digits roll to "06:00" (10:56 to 11:06) and the picture goes straight to the title screen with four stars (11:10 to 11:24). Nothing is shown between. Not checked: the code itself, and that Nightmare takes over at 4 AM.

**6. `into-the-pit-secret-minigames-other-stories`: not found.** I looked at a frame every 24 seconds of Part 5 of Markiplier's Into the Pit (22 minutes): ordinary play, a difficulty menu and the title screen, no minigame of that kind. A text search for the three titles over Parts 3 to 5 was stopped for time after about two minutes of each. Unchanged.

**7. Glamrock Freddy's "What if I am not the first Glamrock Freddy?": not found.** A subtitle index of Security Breach Parts 4, 5 and 6 of Markiplier's recording (each whole: 51, 57 and 45 minutes; one keyframe about every ten seconds in Part 4 and every five in Parts 5 and 6, so a coarse sieve) has no line with 'born', 'endos' or 'first Glamrock'. Parts 1 to 3 and 7 to 10 were not indexed this round; round 2 looked through Parts 8 to 10 at intervals. The record is unchanged.

**7. The date on the work order (check 1): not found, in a second recording as well.** `iRaphahell-FNaF_SotM`, "EP 01", 1:13 to 1:16: in the van a blank form with the letterhead "FAZBEAR ENTERTAINMENT" hangs on a clipboard, and a filled form lies on the bench beside balls of crumpled paper; the player picks up the Data Diver and leaves, and nothing written on either can be read. Two more recordings' openings were opened (`fna-f-secret-of-the-mimic-ep-1-did-steel-wool-cook`, `youtube-1S536z39cW0`) and not looked through. One sentence is added to the work order's notes.

## 2. Every record changed, field by field

11 records, 34 fields. No id was changed, no record was added and none removed. The old text is the committed state (`19e1aad`).

### `ffps-credits-returning-voices` (ffps-ucn.json)

- **location**
  - old: End credits (cast list)
  - new: End credits of Pizzeria Simulator (cast list) and of Sister Location (voice actors)

- **quote**
  - old: Scrap Baby / Heather Masters … Molten Freddy / Kellen Goff
  - new: Scrap Baby / Heather Masters … Molten Freddy / Kellen Goff … Baby / Heather Masters … Funtime Freddy / Kellen Goff

- **verifiedVia**
  - old: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (Pizzeria Simulator's roll read on screen in a capture of play: Part 5, 11:44 to 12:40) ; https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizzeria_Simulator/Credits ; https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Sister_Location/Credits
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (each roll read on screen in a capture of play: Pizzeria Simulator, Part 5, 11:44 to 12:40; Sister Location, Part 5, 15:14 to 16:08) ; https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizzeria_Simulator/Credits ; https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Sister_Location/Credits

- **notes**
  - old: Casting is out-of-universe, but it is the games' own record of who is speaking: Molten Freddy talks with Funtime Freddy's voice and stutter, Scrap Baby with Baby's. Pizzeria Simulator's roll was read on 2026-10-03 on screen in a capture of play (Markiplier's Part 5, archived at archive.org, 11:44 to 12:40): it prints each part on one line and the performer's name on the line below it, with no dash, and the slashes in the quote mark the line breaks; before this reading the quote followed the wiki's transcript ('Heather Masters - Scrap Baby / Kellen Goff - Molten Freddy'). The roll has no line for Lefty. Sister Location's credits were not read on screen: that they list the same two performers as Baby and Funtime Freddy is the wiki's transcript.
  - new: Casting is out-of-universe, but it is the games' own record of who is speaking: Molten Freddy talks with Funtime Freddy's voice and stutter, Scrap Baby with Baby's. Both rolls were read on 2026-10-03 on screen in captures of play (Markiplier's playthroughs, archived at archive.org); not checked in play by this archive. In the quote the first two pairs are Pizzeria Simulator's and the last two Sister Location's, and the slashes mark the line breaks. Pizzeria Simulator's roll (Part 5, 11:44 to 12:40) prints each part on one line and the performer's name on the line below it, with no dash; before the reading the quote followed the wiki's transcript ('Heather Masters - Scrap Baby / Kellen Goff - Molten Freddy'). It has no line for Lefty. Sister Location's roll (Part 5 of that game, 15:14 to 16:08) has the same layout: under the heading 'Voice Actors' it prints 'Baby' over 'Heather Masters' and 'Funtime Freddy' over 'Kellen Goff', among nine named parts (Baby, HandUnit, Computer Voice, Ballora, Funtime Freddy, Bidybabs, Vlad, Clara, Narrator); then a list headed 'Misc' (PJ Heywood, John Matthew, Jason Kappus, Jesse Adam, Becky Shrimpton), 'Music', 'TV Animations' and 'Created by Scott Cawthon'. So both sides of the comparison are read from the screen; the wiki's transcripts have the same two pairs. The picture on file sets the two rolls side by side: Sister Location's at 15:32, cut off below Funtime Freddy's line, and Pizzeria Simulator's at 12:00.

- **image**
  - old: (none)
  - new: ffps-sl-credits-shared-voices.jpg

### `fnaf2-golden-freddy-office` (fnaf123.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Night_7_(FNaF2)
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a 720p capture of play: FNaF2, Part 6, 9:02, 12:07 and 12:22) ; https://freddy-fazbears-pizza.fandom.com/wiki/Night_7_(FNaF2)

- **notes**
  - old: He is active only on Night 6 and in the Custom Night (fnaf2-golden-freddy-night6-only). In the image the bear is worn like the older models: an ear is missing, wires hang from an eye socket and an arm is torn. FNaF1's yellow bear is whole (fnaf1-golden-freddy-office-figure).
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 6 of FNaF2, archived at archive.org; Night 6): the yellow bear sits slumped at the left of the desk at 2 AM (9:02) and at 12 AM (12:07), and its head alone, large, with a top hat and empty eyes, hangs in the dark hallway at 2 AM (12:22). Each time the picture goes to a yellow face or to static within a second or two, and 'Game Over' follows. What makes it leave or strike (the Freddy head, the light) was not checked in the capture and is the wiki's account. He is active only on Night 6 and in the Custom Night (fnaf2-golden-freddy-night6-only). In the image the bear is worn like the older models: an ear is missing, wires hang from an eye socket and an arm is torn. FNaF1's yellow bear is whole (fnaf1-golden-freddy-office-figure).

### `fnaf4-night8-no-story-text` (fnaf4-sl.json)

- **title**
  - old: Night 8 ('20/20/20/20'): no new text or scene reported
  - new: Night 8 ('20/20/20/20'): no new text or scene

- **claim**
  - old: By the wiki's description, after Nightmare, typing 20202020 on the Extras screen turns that mode into '20/20/20/20' (Night 8), a harder repeat in which Nightmare again replaces the others at 4 AM. Beating it awards the last star and no new text or scene. The padlocked box after Night 7 is FNaF4's last story screen.
  - new: After Nightmare, the last item of the Extra menu becomes a harder repeat of that night, '20/20/20/20' (Night 8); by the wiki's description this is done by typing 20202020 there. When the night is beaten the clock rolls to 06:00 and the game goes straight to the title screen, which now has a fourth star: no new text and no scene. The padlocked box after Night 7 is FNaF4's last story screen.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Night_8_(FNaF4) ; https://freddy-fazbears-pizza.fandom.com/wiki/Night_7_(FNaF4)
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a 1080p capture of play: FNaF4, Part 8, 0:14 to 11:24) ; https://freddy-fazbears-pizza.fandom.com/wiki/Night_8_(FNaF4) ; https://freddy-fazbears-pizza.fandom.com/wiki/Night_7_(FNaF4)

- **notes**
  - old: From the wiki's description only; no capture was checked. Recorded so that the absence is on file: nothing in FNaF4 opens the box or follows it.
  - new: The end of the night was seen on 2026-10-03 in a capture of play (Markiplier's '20/20/20/20 COMPLETE', Part 8 of FNaF4, archived at archive.org); not checked in play by this archive. The title screen has three stars at the start (0:14). On the Extra menu the last item of the list, whose visible end reads 'RE', ends in '0' from 0:28 on; the rest of the label is behind the player's camera inset. The night is played; at 5 AM the clock's digits roll to '06:00' (10:56 to 11:06) and the picture goes straight to the title screen, which has four stars (11:10 to 11:24). Nothing is shown between the two. The code, and the names 'Night 8' and '20/20/20/20', follow the wiki's description and the recording's title; that Nightmare again replaces the others at 4 AM was not checked. Recorded so that the absence is on file: nothing in FNaF4 opens the box or follows it.

### `sl-private-room-keypad-1983` (fnaf4-sl.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Night_5_(FNaF:_SL) ; https://freddy-fazbears-pizza.fandom.com/wiki/Private_Room/Trivia ; https://freddy-fazbears-pizza.fandom.com/wiki/File:Maxresdefault_(1).jpg ; two gameplay captures published on the game's release day (https://www.youtube.com/watch?v=mDKXnm0xSNA and https://www.youtube.com/watch?v=NankCuG6q-4)
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/Night_5_(FNaF:_SL) ; https://freddy-fazbears-pizza.fandom.com/wiki/Private_Room/Trivia ; https://freddy-fazbears-pizza.fandom.com/wiki/File:Maxresdefault_(1).jpg ; two gameplay captures published on the game's release day (https://www.youtube.com/watch?v=mDKXnm0xSNA and https://www.youtube.com/watch?v=NankCuG6q-4) ; https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a 1080p capture of play: Sister Location, Part 5, 9:46 to 9:56)

- **notes**
  - old: Checked by eye: in both captures the player clicks the wall keypad at 12 AM with 99% power and the monitors change from static to the three views within seconds; a wiki screenshot shows them still on at 4 AM, 42% power. The keypad has no display, so the digits themselves rest on the wiki's text (four of its pages agree) and the captures' titles, not on a readable frame. 1983 is the only year FNaF4 prints (its television), which is why the code is read as that year; the game does not say so. The wiki says the code does nothing in Custom Night, where the keys are used against another character. Status: the Private Room night is the 'fake ending' branch of Night 5, which the Real Ending contradicts, and Scott called Custom Night's gameplay non-canon. Reading: the room, its desk and its monitors belong to the facility whichever ending is taken. In 2018 Scott agreed when an interviewer said he had put things into Sister Location to ground FNaF4's story; he did not say which things (scott-2018-interview-sl-made-to-ground-story).
  - new: Checked by eye: in both captures the player clicks the wall keypad at 12 AM with 99% power and the monitors change from static to the three views within seconds; a wiki screenshot shows them still on at 4 AM, 42% power. The keypad has no display, so the digits themselves rest on the wiki's text (four of its pages agree) and the captures' titles, not on a readable frame. 1983 is the only year FNaF4 prints (its television), which is why the code is read as that year; the game does not say so. The wiki says the code does nothing in Custom Night, where the keys are used against another character. Status: the Private Room night is the 'fake ending' branch of Night 5, which the Real Ending contradicts, and Scott called Custom Night's gameplay non-canon. Reading: the room, its desk and its monitors belong to the facility whichever ending is taken. In 2018 Scott agreed when an interviewer said he had put things into Sister Location to ground FNaF4's story; he did not say which things (scott-2018-interview-sl-made-to-ground-story). A third capture was read on 2026-10-03 (Markiplier's Part 5 of Sister Location, archived at archive.org, 9:46 to 9:56): at 12 AM and 99% power the pointer is on the wall keypad, whose twelve keys, three across and four down, are blank; the top monitor changes from static to a view at 9:52, the second at 9:53 and the third by 9:54. Followed frame by frame against the keys, the pointer first rests on the top right key (9:49.2), and its last four rests before the change are at the lower edge of the top left key (9:50.4), on the right key of the third row (9:50.9), on the middle key of the third row, near its right edge (9:51.3), and on the top right key (9:51.7). On a telephone layout the last four fit 1, 9, 8 and 3; but the keys are blank, the capture shows no mark when a key is pressed, and it cannot tell a rest from a press, so the digits still rest on the wiki's text.

### `hw-mobile-princess-quest-graveyard` (hw.json)

- **claim**
  - old: In the wiki's screenshot of Princess Quest's outdoor graveyard there are six gravestones, each with a torch brazier in front of it. No names are shown on the stones.
  - new: Princess Quest's outdoor graveyard has six gravestones, each on a plinth with a brazier in front of it; one stone is broken, its top lying beside it. The stones carry a few dots and no names.

- **location**
  - old: Princess Quest cemetery (wiki screenshot; Help Wanted mobile port or Security Breach arcade version, not stated)
  - new: Princess Quest cemetery (seen in the Security Breach arcade version; the wiki's screenshot does not say which version it shows)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Princess_Quest
  - new: https://archive.org/details/markiplier-fnafsb (seen in a 720p capture of play: Part 9, 1:20:30 to 1:21:15) ; https://freddy-fazbears-pizza.fandom.com/wiki/Princess_Quest

- **notes**
  - old: Six stones counted on the wiki's screenshot, which does not say whether it is from the Help Wanted mobile port or the Security Breach arcade version (the two differ only in small sprite changes, per the wiki). The wiki links the stones to FFPS's gravestones; that is interpretation. Help Wanted 2's Princess Quest IV graveyard also has six stones, there paired with the six memory dolls (hw2-pq4-graveyard-order).
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 9 of Security Breach, archived at archive.org), 1:20:30 to 1:21:15, in the first Princess Quest cabinet played in that part: a walled graveyard in the rain, with paths between three plots; three stones stand in the middle plot, one at the left and two at the right, and the Princess lights the braziers. Six stones were counted there, as on the wiki's screenshot, which does not say whether it is from the Help Wanted mobile port or the Security Breach arcade version (the two differ only in small sprite changes, per the wiki). The wiki links the stones to FFPS's gravestones; that is interpretation. Help Wanted 2's Princess Quest IV graveyard also has six stones, there paired with the six memory dolls (hw2-pq4-graveyard-order).

### `hw2-pq4-vanny-crushes-glitchtrap` (hw.json)

- **claim**
  - old: The giant rabbit-headed figure takes the plush, draws a tiny copy of Help Wanted's rabbit figure out of the prize chute, crushes it between its hands, and fades into the darkness.
  - new: Seen from inside a heap of plush toys behind glass: a giant figure with a rabbit's head, stitched and patched, its eyes glowing orange, puts its hands to the glass, holds up on one palm a tiny figure with two long ears, lit green from behind, closes both hands over it, and fades into the dark as its eyes turn red. By the wiki's account it has taken the player's plush, and the tiny figure is a copy of Help Wanted's rabbit figure drawn out of the prize chute.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Endings
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a 1080p capture of play: Help Wanted 2, Part 13, 23:43 to 24:22) ; https://freddy-fazbears-pizza.fandom.com/wiki/Endings

- **notes**
  - old: Nothing is said in the scene. The figure is a dark silhouette whose glowing eyes, lashes and whiskers match the mask of Security Breach's Vanny; the scene does not show who it is. All of it happens inside the Princess Quest IV game the player has been pulled into. The achievement that follows reads 'System threats found. Repair complete.' A Steel Wool developer reportedly called this the end of the character in an interview; that is not a game or Scott source and is not recorded as fact.
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 13 of Help Wanted 2, archived at archive.org), 23:43 to 24:22; the sound was not heard, and the scene was not checked in play by this archive. In order: a green rabbit plush glows in the foreground among the toys (23:44); the giant leans in with its hands on the glass (23:50 to 24:03), its face and fingers stitched, its eyes orange with lashes, whiskers at its cheeks; it holds up on its palm a tiny standing figure with two long ears, dark against a green glow (24:06 to 24:10), brings its other hand over it and clasps both hands shut (24:10 to 24:14); its eyes turn red and it fades (24:17 to 24:19); the credits follow (24:24). No subtitle is on screen. The figure's eyes, lashes, whiskers and stitching match the mask of Security Breach's Vanny; the scene does not show who it is. All of it happens inside the Princess Quest IV game the player has been pulled into. The achievement that follows reads 'System threats found. Repair complete.' A Steel Wool developer reportedly called this the end of the character in an interview; that is not a game or Scott source and is not recorded as fact.

### `hw2-hub-helpi-pushes-gift` (hw.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Helpi
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (the screen and three of its cards seen in a 1080p capture of play: Help Wanted 2, Part 13, 5:04 to 5:10, and Part 14, 26:51 to 27:14) ; https://freddy-fazbears-pizza.fandom.com/wiki/Helpi

- **notes**
  - old: Read from the wiki's images of the screen cards: 'Hey, hi!', 'There is a special gift for you on the stage.', 'You really don't want to miss out!', 'I promise it's worth it!', 'You got them all!', 'I am so excited!'. The bear is not named on the cards; the wiki says the files identify it as Helpi, the assistant inside RUIN's mask, and that it appears on holiday after the Faz Force ending and vanishes after the Princess Quest IV ending (neither checked).
  - new: Read from the wiki's images of the screen cards: 'Hey, hi!', 'There is a special gift for you on the stage.', 'You really don't want to miss out!', 'I promise it's worth it!', 'You got them all!', 'I am so excited!'. The bear is not named on the cards; the wiki says the files identify it as Helpi, the assistant inside RUIN's mask, and that it appears on holiday after the Faz Force ending and vanishes after the Princess Quest IV ending (neither checked). The screen was seen on 2026-10-03 in a capture of play (Markiplier's Parts 13 and 14 of Help Wanted 2, archived at archive.org): a cartoon bear in a top hat beside a speech bubble, on the big screen next to the hub's stage, with the cards 'New tasks available! Check the computer.' and 'Good for you!' (Part 13, 5:04 to 5:10) and 'You got them all!' (Part 14, 26:51 and 27:08 to 27:14, with the gift box on the stage). After the Princess Quest IV ending the same screen shows a black shape on yellow rings and no bear (Part 13, 27:12 to 27:40). The cards about the ignored gift, the quoted one among them, were not found in those two parts, so the quote is still read from the wiki's images.

### `security-breach-ending-alley` (sb-mimic.json)

- **title**
  - old: The Alley: Gregory sleeps in a box; Vanny's silhouette looms over him
  - new: The Alley: Gregory sleeps in a box under a 'MISSING' newspaper; a rabbit-eared shadow falls beside him

- **claim**
  - old: Leaving by the front entrance, Gregory sleeps in a cardboard box in an alley under a newspaper; Vanny's silhouette looms over him.
  - new: Leaving by the front entrance, Gregory is shown, under the caption 'LATER...', asleep in a cardboard box in an alley, covered by a newspaper headed 'MISSING'. In the last panel the shadow of a figure with long ears and whiskers falls across the ground beside the box. The pages name nobody.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Endings
  - new: https://archive.org/details/roosterteeth-47843 (seen in a 1080p capture of play: 38:14 to 39:06) ; https://freddy-fazbears-pizza.fandom.com/wiki/Endings

- **notes**
  - old: Gregory sleeping in a box is often read as him being homeless; the ending does not say so in words. The page on file (the first of two) does not show the silhouette; that part of the claim follows the wiki's caption of the second page.
  - new: Seen on 2026-10-03 in a capture of play ('Can We Make It to the Ending of Five Nights at Freddy's: Security Breach? (Part 7 FINALE)', a Rooster Teeth video archived at archive.org), 38:14 to 39:06; the sound was not heard, and the scene was not checked in play by this archive. The Markiplier recordings used for the other records do not have this ending, so another player's was used. In order: Freddy, close up, with the question 'Do you wish to stay?', the choices 'Stay', 'Leave' and 'Vanny' and a warning that most save stations will no longer be available (38:14); then comic panels: a full moon (38:22); a boy with a plaster on his cheek running beside a wall (38:27); the caption 'LATER...' over an alley (38:35); a cardboard box with the boy inside under a newspaper (38:40); the boy's face beside the paper (38:43); the paper, headed 'MISSING' and, under that, 'LOCAL RESIDENTS CONTINUE TO DISAPPEAR', with rows of silhouetted portraits (38:48); the boy asleep under it as the panel turns red (38:54); and a large shadow with two long ears that falls across the ground beside the box (38:57 to 39:05; in the closer view its head shows whiskers and a lash); then a card with one star. The shadow has no face and no name: that it is Vanny's is a reading, from the ears and from the choice 'Vanny' offered just before. Gregory sleeping in a box is often read as him being homeless; the ending does not say so in words. The slashes in the quote divide the caption and the two lines of the newspaper's heading. The picture on file is the last panel as that capture shows it (39:01), cut at the right to leave out the players' camera inset, which also cuts off the shadow's second ear; the wiki's copy of the first page, with the newspaper, is the picture of security-breach-alley-newspaper.

- **image**
  - old: sb-alley-ending-missing-newspaper.jpg
  - new: sb-alley-ending-rabbit-shadow.jpg

- **quote**
  - old: (none)
  - new: LATER... / MISSING / LOCAL RESIDENTS CONTINUE TO DISAPPEAR

### `security-breach-alley-newspaper` (sb-mimic.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/File:TheAlleyPage1.jpg
  - new: https://archive.org/details/roosterteeth-47843 (read on screen in a 1080p capture of play: 38:43 to 38:52) ; https://freddy-fazbears-pizza.fandom.com/wiki/File:TheAlleyPage1.jpg

- **notes**
  - old: Read directly from the ending art: the subhead is cut off in one panel and whole in the panel below it. At least 9 silhouette portraits are visible; the text says 'residents', not specifically children. Claims that it shows exactly nine children killed by Vanessa are interpretation.
  - new: Read directly from the ending art: the subhead is cut off in one panel and whole in the panel below it. At least 9 silhouette portraits are visible; the text says 'residents', not specifically children. Claims that it shows exactly nine children killed by Vanessa are interpretation. The heading was also read on 2026-10-03 on screen in a capture of play (a Rooster Teeth video of the game's last part, archived at archive.org, 38:48): 'MISSING' and, under it, 'LOCAL RESIDENTS CONTINUE TO DISAPPEAR', over rows of silhouetted portraits; the rest of the ending is in security-breach-ending-alley.

### `ruin-pizzaplex-abandoned-earthquake` (sb-mimic.json)

- **claim**
  - old: By the wiki's plot summary the Mega Pizzaplex is abandoned and wrecked, graffiti-covered and full of broken S.T.A.F.F. bots, and newspapers on the windows attribute the destruction to an 'earthquake'; the headline was read from the newspaper's texture.
  - new: RUIN opens in a wrecked, abandoned lobby: the entrance doors and the tall windows above them are papered over with newsprint, graffiti covers the walls, floor tiles lie loose, and a banner reads 'PARDON OUR MESS!' and 'WE'LL BE BACK SOON'. The newspaper's headline, read from its texture and not legible in the capture, puts the destruction down to an 'earthquake'. That the building is full of broken S.T.A.F.F. bots is the wiki's plot summary.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/File:PizzaplexEarthquake_Nespaper.png
  - new: https://archive.org/details/markipliers-playthrough-of-fnaf-sb-ruin (the opening seen in a 1080p capture of play: Part 1, 1:16 to 3:00) ; https://freddy-fazbears-pizza.fandom.com/wiki/File:PizzaplexEarthquake_Nespaper.png

- **notes**
  - old: Headline and subhead read from the newspaper texture on the wiki (a small image, enlarged); the rest of the page is filler text ('Lorem ipsum'). The scene description is from the wiki's plot summary. The paper gives no date.
  - new: The opening was seen on 2026-10-03 in a capture of play (Markiplier's Part 1 of RUIN, archived at archive.org), 1:16 to 3:00; not checked in play by this archive. The entrance and the windows above it are covered edge to edge with sheets of newsprint, each with a dark picture block and columns of text, lit from behind; the unlit neon outlines of four mascot faces and the words 'COME BACK' stand over the doors; graffiti covers the pillars; a forklift, crates, cones and loose tiles lie under a banner 'PARDON OUR MESS!' / 'WE'LL BE BACK SOON'; handwriting on a dark board reads 'Don't go in alone...'. At that distance no headline can be read on the sheets. Headline and subhead were read from the newspaper texture on the wiki (a small image, enlarged); the rest of the page is filler text ('Lorem ipsum'). The paper gives no date.

### `secret-of-the-mimic-work-order-1979` (sb-mimic.json)

- **notes**
  - old: Read from the document image on the wiki, which captions it 'Arnold's work order found within the Van'. The date appears twice: typed in the header and handwritten beside the employee signature. Service $30.00, gas $8.45, job total $38.45. In month/day order 9/07/79 is 7 September 1979, exactly five weeks (35 days) after the 'Aug 3rd' on the Inventor's House mailbox, whose message says the last mail came 'five weeks ago' (secret-of-the-mimic-mail-foreclosure). So the year is on a document among the game's files as well as in the teaser. The document was read from the wiki's copy of the image; whether the date can be read in play has not been confirmed, so the archive does not call it printed. It was looked for on 2026-10-03 in a capture of play (Markiplier's Part 1, archived at archive.org, 18:15 to 20:06): in the van a blank form with a 'FAZBEAR ENTERTAINMENT' letterhead hangs on a clipboard and a binder of two filled forms with a 'FAZBEAR' letterhead lies on the bench, but the player does not stop on them, and no date can be read at 1080p.
  - new: Read from the document image on the wiki, which captions it 'Arnold's work order found within the Van'. The date appears twice: typed in the header and handwritten beside the employee signature. Service $30.00, gas $8.45, job total $38.45. In month/day order 9/07/79 is 7 September 1979, exactly five weeks (35 days) after the 'Aug 3rd' on the Inventor's House mailbox, whose message says the last mail came 'five weeks ago' (secret-of-the-mimic-mail-foreclosure). So the year is on a document among the game's files as well as in the teaser. The document was read from the wiki's copy of the image; whether the date can be read in play has not been confirmed, so the archive does not call it printed. It was looked for on 2026-10-03 in a capture of play (Markiplier's Part 1, archived at archive.org, 18:15 to 20:06): in the van a blank form with a 'FAZBEAR ENTERTAINMENT' letterhead hangs on a clipboard and a binder of two filled forms with a 'FAZBEAR' letterhead lies on the bench, but the player does not stop on them, and no date can be read at 1080p. A second player's capture was looked at the same day (iRaphahell's 'EP 01', archived at archive.org, 1:13 to 1:16): there too a blank form with the letterhead 'FAZBEAR ENTERTAINMENT' hangs on a clipboard and a filled form lies on the bench beside balls of crumpled paper, the player does not stop on either, and nothing written on them can be read.

## 3. The prose that should change

23 sentences. Each "now" text is cut from the file by a script that requires it to be in exactly one line (the files as they stand on `19e1aad`, read at 20:25), so it is word for word, with the file's own `\"`. Where a sentence is very long, the text is the stretch of it around the change. I changed nothing in these files.

### 3a. The voices: Sister Location's roll is now read, so the tag can go (5)

Both rolls are read on screen: Sister Location's prints 'Baby' over 'Heather Masters' and 'Funtime Freddy' over 'Kellen Goff'; Pizzeria Simulator's prints 'Scrap Baby' over 'Heather Masters' and 'Molten Freddy' over 'Kellen Goff'.

1. `src/data/chapters/reckoning.ts:149`
   - now: `Its voice actor is Funtime Freddy's, as Scrap Baby's is Baby's [[ffps-credits-returning-voices]] (a fan wiki's account).`
   - should read: `Its voice actor is Funtime Freddy's, as Scrap Baby's is Baby's [[ffps-credits-returning-voices]].`

2. `src/data/people.ts:607`
   - now: `theory: "Molten Freddy is most likely what is left of it after the group threw Baby out (medium-high): a mound of wires and eyes topped by a rusted bear face [[ffps-molten-freddy-alley-wires-eyes]], with the voice actor of Funtime Freddy [[ffps-credits-returning-voices]] (a fan wiki's account).`
   - should read: `theory: "Molten Freddy is most likely what is left of it after the group threw Baby out (medium-high): a mound of wires and eyes topped by a rusted bear face [[ffps-molten-freddy-alley-wires-eyes]], with the voice actor of Funtime Freddy [[ffps-credits-returning-voices]].`

3. `src/data/people.ts:611`
   - now: `The credits give her the voice actor of Sister Location's Baby [[ffps-credits-returning-voices]] (a fan wiki's account).`
   - should read: `The credits give her the voice actor of Sister Location's Baby [[ffps-credits-returning-voices]].`

4. `src/data/people.ts:619`
   - now: `The credits give it the voice actor of Sister Location's Funtime Freddy [[ffps-credits-returning-voices]] (a fan wiki's account), and it speaks of joining the party: \"Together aga-ain!\" and \"One bi-i-ig happy family!\" [[ffps-molten-freddy-lines]] The first salvage tape, played on its night, says only that things are found in the alley \"quite often\" and \"we aren't sure why\" [[ffps-salvage-first-tape-alley]].",`
   - should read: `The credits give it the voice actor of Sister Location's Funtime Freddy [[ffps-credits-returning-voices]], and it speaks of joining the party: \"Together aga-ain!\" and \"One bi-i-ig happy family!\" [[ffps-molten-freddy-lines]] The first salvage tape, played on its night, says only that things are found in the alley \"quite often\" and \"we aren't sure why\" [[ffps-salvage-first-tape-alley]].",`

5. `src/data/timeline.ts:288`
   - now: `By the credits, the two are voiced by the actors of Sister Location's Baby and Funtime Freddy [[ffps-credits-returning-voices]] (a fan wiki's account).`
   - should read: `By the credits, the two are voiced by the actors of Sister Location's Baby and Funtime Freddy [[ffps-credits-returning-voices]].`

### 3b. The Alley ending, now seen (3)

Seen: the boy asleep in a box under the 'MISSING' newspaper, and in the last panel a shadow with two long ears falling across the ground beside the box. No woman and no costume is in the picture; whose shadow it is, is a reading (the ears, and the choice 'Vanny' offered just before).

6. `src/data/chapters/afterimage.ts:269`
   - now: `["The front door", "The boy asleep in a box in an alley, under a newspaper headed \"MISSING\" [[security-breach-alley-newspaper]], the rabbit-costumed woman's shadow over him [[security-breach-ending-alley]] (as described)", "Drawn in the comics"],`
   - should read: `["The front door", "The boy asleep in a box in an alley, under a newspaper headed \"MISSING\" [[security-breach-alley-newspaper]], a rabbit-eared shadow, most likely the rabbit-costumed woman's, beside him [[security-breach-ending-alley]]", "Drawn in the comics"],`

7. `src/data/chapters/afterimage.ts:283`
   - now: `tension: "The front-door ending leaves the rabbit-costumed woman's shadow over the boy [[security-breach-ending-alley]] (as described), and no later game undoes it on screen.`
   - should read: `tension: "The front-door ending leaves a rabbit-eared shadow, most likely the rabbit-costumed woman's, beside the sleeping boy [[security-breach-ending-alley]], and no later game undoes it on screen.`

8. `src/data/people.ts:347`
   - now: `In a third, Gregory sleeps in a box in an alley, and by the wiki's caption of the page that follows her silhouette looms over him [[security-breach-ending-alley]].`
   - should read: `In a third, Gregory sleeps in a box in an alley, and in the last panel a rabbit-eared shadow, most likely hers, falls beside him [[security-breach-ending-alley]].`

### 3c. RUIN's opening, now seen (3)

Seen: the lobby wrecked and empty, its doors and windows papered over, graffiti, loose tiles, 'PARDON OUR MESS!'. Not legible in the capture: the newspaper's headline.

9. `src/data/chapters/afterimage.ts:277`
   - now: `With it off, the Pizzaplex is wrecked and abandoned [[ruin-pizzaplex-abandoned-earthquake]] (as described).`
   - should read: `With it off, the Pizzaplex is wrecked and abandoned [[ruin-pizzaplex-abandoned-earthquake]].`

10. `src/data/timeline.ts:369`
   - now: `summary: "After Gregory's night the Pizzaplex lies abandoned and wrecked, as a fan wiki's summary describes it [[ruin-pizzaplex-abandoned-earthquake]].`
   - should read: `summary: "After Gregory's night the Pizzaplex lies abandoned and wrecked [[ruin-pizzaplex-abandoned-earthquake]].`

11. `src/data/places.ts:121`
   - now: `By the time of RUIN, as a fan wiki's summary describes it, it is abandoned and wrecked [[ruin-pizzaplex-abandoned-earthquake]], and by the account of the Gregory voice on Cassie's radio its security nodes are what keeps the underground sealed [[ruin-fake-gregory-one-node-left-sealed]].",`
   - should read: `By the time of RUIN it is abandoned and wrecked [[ruin-pizzaplex-abandoned-earthquake]], and by the account of the Gregory voice on Cassie's radio its security nodes are what keeps the underground sealed [[ruin-fake-gregory-one-node-left-sealed]].",`

### 3d. Princess Quest's graveyard, now seen (3)

Seen in the arcade version inside Security Breach: six stones, each with a brazier; they carry a few dots and no names, so 'unmarked' becomes 'nameless'. That the game is in Help Wanted's mobile version is still the wiki's.

12. `src/data/chapters/afterimage.ts:100`
   - now: `"Princess Quest, a game hidden in Help Wanted's mobile version, has a graveyard of six unmarked stones [[hw-mobile-princess-quest-graveyard]] (a fan wiki's account): the number of graves on which Pizzeria Simulator ends [[ffps-lorekeeper-gravestones]].`
   - should read: `"Princess Quest, a game hidden in Help Wanted's mobile version (a fan wiki's account), has a graveyard of six nameless stones, as its arcade version in Security Breach shows [[hw-mobile-princess-quest-graveyard]]: the number of graves on which Pizzeria Simulator ends [[ffps-lorekeeper-gravestones]].`

13. `src/data/people.ts:539`
   - now: `The wiki's screenshot of the graveyard in Princess Quest, a hidden game, shows six gravestones [[hw-mobile-princess-quest-graveyard]].\n\nIn Help Wanted 2 a fur-costumed arm, which the wiki takes for this figure's, holds out six dolls in the masks of Freddy, Bonnie, Chica, Foxy, Golden Freddy and the Puppet [[hw2-memory-dolls]], and the figure glitches the instruction monitors [[hw2-glitchtrap-corrupts-backstage]].",`
   - should read: `The graveyard in Princess Quest, a hidden game, has six gravestones [[hw-mobile-princess-quest-graveyard]].\n\nIn Help Wanted 2 a fur-costumed arm, which the wiki takes for this figure's, holds out six dolls in the masks of Freddy, Bonnie, Chica, Foxy, Golden Freddy and the Puppet [[hw2-memory-dolls]], and the figure glitches the instruction monitors [[hw2-glitchtrap-corrupts-backstage]].",`

14. `src/data/people.ts:698`
   - now: `The wiki's screenshot of its outdoor graveyard shows six gravestones [[hw-mobile-princess-quest-graveyard]], and its route ends in a chamber where a dripping purple creature with rabbit ears hangs overhead [[hw-mobile-princess-quest-final-room]].`
   - should read: `Its outdoor graveyard has six gravestones [[hw-mobile-princess-quest-graveyard]], and its route ends in a chamber where a dripping purple creature with rabbit ears hangs overhead [[hw-mobile-princess-quest-final-room]].`

### 3e. FNaF4's eighth night, now seen (1)

Seen: when the night is beaten the clock rolls to 06:00 and the title screen follows with a fourth star; nothing between.

15. `src/data/chapters/family.ts:116`
   - now: `Night 7 follows the scene in which he fades, and ends on a padlocked box and the words \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]] An eighth, reached by a code, adds no text or scene [[fnaf4-night8-no-story-text]] (as described).`
   - should read: `Night 7 follows the scene in which he fades, and ends on a padlocked box and the words \"Perhaps some things are best left forgotten, for now.\" [[fnaf4-locked-box-ending]] An eighth, reached by a code, adds no text or scene [[fnaf4-night8-no-story-text]].`

### 3f. Princess Quest IV's ending: eight sentences that name the tiny figure (8)

Seen: the giant holds up on its palm a tiny figure with two long ears, dark against a green glow, and closes both hands over it. Nothing in the picture says what the tiny figure is; that it is a copy of Help Wanted's rabbit is the wiki's account, and the record's claim now says so. 'Crush' is a fair word for the gesture. If you hold the identification safe from the ears alone, leave these eight as they are.

16. `src/data/chapters/afterimage.ts:168`
   - now: `It goes on to crush a tiny copy of the rabbit in the code between its hands [[hw2-pq4-vanny-crushes-glitchtrap]]." },`
   - should read: `It goes on to crush between its hands a tiny rabbit-eared figure, a copy of the rabbit in the code by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]]." },`

17. `src/data/chapters/afterimage.ts:200`
   - now: `The rabbit mask its player has worn throughout is traded for the green plush [[hw2-pq4-vanny-mask-trade]], and the giant silhouette shown above crushes a tiny copy of the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].",`
   - should read: `The rabbit mask its player has worn throughout is traded for the green plush [[hw2-pq4-vanny-mask-trade]], and the giant silhouette shown above crushes a tiny rabbit-eared figure, a copy of the rabbit in the code by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]].",`

18. `src/data/chapters/underground.ts:99`
   - now: `And its secret ending shows the rabbit crushed [[hw2-pq4-vanny-crushes-glitchtrap]] and reports \"System threats found.`
   - should read: `And its secret ending shows a tiny rabbit-eared figure crushed, the rabbit by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]] and reports \"System threats found.`

19. `src/data/chapters/underground.ts:160`
   - now: `One ending of Help Wanted 2 shows it crushed [[hw2-pq4-vanny-crushes-glitchtrap]], and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow (as described) [[ruin-vanny-hideout-glitchtrap-shadow]] (see ((vanny))).`
   - should read: `One ending of Help Wanted 2 shows a tiny rabbit-eared figure crushed, a copy of it by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]], and in RUIN, most likely the later of the two, the mask still shows a rabbit's shadow (as described) [[ruin-vanny-hideout-glitchtrap-shadow]] (see ((vanny))).`

20. `src/data/people.ts:351`
   - now: `One ending of Help Wanted 2 shows a giant rabbit-headed silhouette crush a tiny copy of the rabbit in the code [[hw2-pq4-vanny-crushes-glitchtrap]].`
   - should read: `One ending of Help Wanted 2 shows a giant rabbit-headed silhouette crush a tiny rabbit-eared figure, a copy of the rabbit in the code by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]].`

21. `src/data/people.ts:540`
   - now: `status: "One ending of Help Wanted 2 shows a tiny copy of it crushed by a giant rabbit-headed silhouette [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN, which the model sets after it, still has a rabbit in the mask: the shadow of a rabbit figure on a hideout wall, as the wiki's summary reports it [[ruin-vanny-hideout-glitchtrap-shadow]].",`
   - should read: `status: "One ending of Help Wanted 2 shows a tiny rabbit-eared figure, a copy of it by a fan wiki's account, crushed by a giant rabbit-headed silhouette [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN, which the model sets after it, still has a rabbit in the mask: the shadow of a rabbit figure on a hideout wall, as the wiki's summary reports it [[ruin-vanny-hideout-glitchtrap-shadow]].",`

22. `src/data/people.ts:702`
   - now: `theory: "The model reads the Princess Quest games as one fight against the rabbit in the code, made from inside the game, and does not say that it works: one ending shows a tiny copy of the rabbit crushed [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN still has a rabbit in the mask, a shadow on a hideout wall that the wiki's summary reports [[ruin-vanny-hideout-glitchtrap-shadow]] (low-medium that the remedy holds).`
   - should read: `theory: "The model reads the Princess Quest games as one fight against the rabbit in the code, made from inside the game, and does not say that it works: one ending shows a tiny rabbit-eared figure crushed, a copy of the rabbit by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]], and RUIN still has a rabbit in the mask, a shadow on a hideout wall that the wiki's summary reports [[ruin-vanny-hideout-glitchtrap-shadow]] (low-medium that the remedy holds).`

23. `src/data/timeline.ts:362`
   - now: `In another ending, inside an arcade game, a giant rabbit-headed silhouette crushes a tiny copy of the rabbit figure [[hw2-pq4-vanny-crushes-glitchtrap]].`
   - should read: `In another ending, inside an arcade game, a giant rabbit-headed silhouette crushes a tiny rabbit-eared figure, a copy of the rabbit figure by a fan wiki's account [[hw2-pq4-vanny-crushes-glitchtrap]].`

### 3g. Tags and hedges that should stay

- `apparatus.ts:245`, "answers to 1-9-8-3 `[[sl-private-room-keypad-1983]]` (a fan wiki's account)": the capture fits the code and does not show it (result 3). `places.ts:68` already says "which players record as 1-9-8-3".
- `nightshift.ts:39`, "and first active on this night (a fan wiki's account)": the bear in the office is seen, but the tag sits on "first active on this night", which one recording cannot show.
- `afterimage.ts:277`, "\"Earthquake shakes pizza plex\" `[[ruin-pizzaplex-abandoned-earthquake]]` (read from an image)": the headline is still read from the texture.
- `people.ts:881`, "By the wiki's plot summary, the wrecked building of RUIN is full of broken ones": still the wiki's.
- `afterimage.ts:205` and `:283`, `[[ruin-gregory-comics-depict-endings]]` (read from an image); `apparatus.ts:149`, `[[into-the-pit-secret-minigames-other-stories]]` (as described): not found.
- The four sentences that quote "Why are you ignoring the gift?" (`underground.ts:158`, `people.ts:443`, `timeline.ts:362`, and the paraphrase in `underground.ts:87`) carry no tag. The screen and three other cards are seen; this card is still read from the wiki's images of the screen. By the rule used elsewhere it would take "(read from an image)"; I leave that to you, since it adds a tag instead of removing one.
- The sentences on `fnaf1-news-dressed-as-mascot` carry no tag and the record is unchanged.

## 4. Images added

Two, both JPEG, cut so that the players' camera inset is outside the picture. Each has a credit with the archive.org item as `sourcePage`, and the record's `image` is set. I looked at both after cropping.

| file | size | record | cut from |
|---|---|---|---|
| `ffps-sl-credits-shared-voices.jpg` | 1144×920, 43 kB | `ffps-credits-returning-voices` (it had no image) | Two frames side by side. Left: Sister Location Part 5, 15:32, "Voice Actors" down to "Funtime Freddy / Kellen Goff". Right: Pizzeria Simulator Part 5, 12:00, "Cast" down to "Cassette Man / Dave Steele". The right half is the same frame as `ffps-credits-cast.jpg`. |
| `sb-alley-ending-rabbit-shadow.jpg` | 1000×972, 127 kB | `security-breach-ending-alley` | `roosterteeth-47843`, 39:01: the last panel, the boy asleep in the box under the "MISSING" paper and the rabbit-eared shadow. Cut at the right, where the players' inset stands, so the shadow's second ear is cut: the picture keeps one long bent ear, the whiskers and an outstretched arm. The full frames (38:58) show both ears; no rectangle holds the boy and both ears without the inset. |

One change to tell you about: `security-breach-ending-alley` already had an image, the wiki's first page (`sb-alley-ending-missing-newspaper.jpg`). I **replaced** it on that record with the shadow panel, because the shadow is what the chapters argue from and the first page does not show it. The first page is still the image of `security-breach-alley-newspaper`, so the file and its credit stay in use. If a chapter figure names the old file through this record, check that it still reads right; say the word and I put it back.

Not added: a frame of the keypad (it would show a pointer on blank keys and prove nothing), the giant's hands (the record has the wiki's picture of the same scene), the graveyard (the record has a picture), FNaF4's four-star title screen (no chapter argues from it).

## 5. `research/open-checks.md`: sentences to change

- **Item 1 (the work order and the credential).** After "no credential was made out." add: "A second player's recording was looked at as well (iRaphahell's EP 01, 1:13 to 1:16), with the same result: the forms are in the van, and nothing on them can be read."
- **Item 13 (the scenes still told second-hand).** Replace the whole item with: "**The scenes still told second-hand.** Read or seen in recordings since: Sister Location's credits roll (the tag is off the comparison of voices), the alley ending of Security Breach (a rabbit-eared shadow; whose it is, is a reading), RUIN's wrecked lobby, Help Wanted 2's fourth Princess Quest (the tiny figure is not identifiable in the picture), FNaF2's yellow bear in the office, the Princess Quest graveyard (six stones, in the arcade version), and FNaF4's eighth night (no text or scene). Seen in part: Sister Location's keypad (the pointer's rests fit 1-9-8-3, and no digit is shown) and Help Wanted 2's bear on the hub screen (three cards seen, not the one quoted). Still not found: Glamrock Freddy's 'What if I am not the first Glamrock Freddy?' on screen, the comics in RUIN, the earthquake headline legible in play, FNaF1's clipping on the mascot costume, and Into the Pit's secret minigames."
- Under the settled checks you may want one line each for `ffps-credits-returning-voices` ("both rolls read on screen: Sister Location Part 5, 15:14; Pizzeria Simulator Part 5, 11:44") and `security-breach-ending-alley` ("seen in another player's recording, `roosterteeth-47843`, 38:14 to 39:06").

## 6. What I could not find

- Any digit on Sister Location's keypad, or a mark of a key being pressed.
- The card "Why are you ignoring the gift?" on the hub's screen.
- The earthquake headline legible in play.
- RUIN's comic pages.
- FNaF1's clippings on the mascot costume (barely looked for: a rare random screen).
- Into the Pit's three secret minigames.
- Glamrock Freddy's speech in Parts and Service (Security Breach Parts 4 to 6 indexed whole, coarsely; Parts 1 to 3 and 7 not).
- A legible date on the work order, or the credential, in two players' recordings.
- What the tiny figure in Princess Quest IV's ending is, beyond a figure with two long ears.

Scratch material: frames in `evgaps/frames/`, the edit scripts with every old and new text in `evgaps/r3/` (`part1.py`, `part2.py`, `sec3.py`), and the committed state of the data files in `evgaps/r3/before/` (all under the session's `files/` folder).
