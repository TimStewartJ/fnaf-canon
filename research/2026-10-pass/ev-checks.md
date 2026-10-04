# Checks from recordings: evidence round 2

Worktree `~/src/fnaf-canon-wt/theory` (branch `ws/theory`), 3 October 2026, 17:09 to about 19:10. I started on `2a70fe0`; the branch's head is now `103d605`, from your own commits while I worked, and those commits do not touch the evidence files, the credits files or `public/img/`. Nothing of mine is committed and nothing was stashed. I edited only `src/data/evidence/{sb-mimic,hw,ffps-ucn}.json`, `src/data/credits/{sb-mimic,hw,ffps-ucn}.json` and ten new files in `public/img/`. No record was added, so there is nothing to file.

**How the looking was done, and its limits.**
- Everything was read from archived recordings of one player's playthroughs (Markiplier) at archive.org. The items: `markipliers-five-nights-at-freddys-archive-2014-2025` (called "the big archive" below; 1080p), `markiplier-plays-fnaf-secret-of-the-mimic` (1080p), `markipliers-playthrough-of-fnaf-sb-ruin` (1080p), `markiplier-fnafsb` (720p). Times are into the named file.
- I looked at still frames. **The sound was never heard**, so nothing here settles a voice, a scream or what is spoken over a scene.
- A text-recognition pass over the subtitles of Secret of the Mimic served only as an index for finding scenes. Nothing is quoted from it; every quotation below was read by eye in a frame.
- A recording shows one route through a game. "Not found" means not found in what this player did and what I looked through, which is named each time.

**Checks at the end:** `npx tsx scripts/validate.ts` ends `OK` (evidence=1064 credits=180, unaccounted 0); `npx tsc -b` prints nothing; every evidence and credits file round-trips through `json.dumps(data, indent=2, ensure_ascii=False)` with no trailing newline; no quote is over 45 words. `quotecheck.mts` before and after lists the same two `MISS` lines for beat `s-1979` and nothing else (616 phrases before, 620 after: the four more are from your own edits to the chapters). `git status --short` shows my three evidence files, three credits files and ten images, and your `research/CHANGELOG.md` and `research/open-checks.md`.

**Counts.** 26 records changed in 73 fields. 28 records now rest on something read or seen on screen in a recording (their `verifiedVia` says "capture of play"): the 12 of round 1 and 16 more in this round. Ten images added. 23 sentences of prose proposed for change (section 3).

## 1. Results

### Part 1 (corrections to records)

Done as asked; the fields are in section 2. Two things to know:
- `secret-of-the-mimic-f10n4-reveal` had no `notes`; it has them now. Its quote is the subtitle's, with full stops where the wiki's transcript of the sound has a comma ("Edwin abandoned us. He shut himself away in our home.").
- `security-breach-freddy-where-i-was-born`: the scene was **not found** in the recording (Parts 8 to 10 of Security Breach were looked through at intervals; the player may not trigger the line). Every line of Freddy's that I did read on screen is labelled `Freddy:`, so the location now says "Freddy's dialogue" and the notes say why. The quote itself is still the wiki's transcript.

### Part 2 (the numbered checks)

**1. The work order's date and the credential: not found.** Secret of the Mimic, Part 1 (`markiplier-plays-fnaf-secret-of-the-mimic`), 18:15 to 20:06, the van. A blank form with a "FAZBEAR ENTERTAINMENT" letterhead hangs on a clipboard, and a binder of two filled forms with a "FAZBEAR" letterhead lies on the bench. The player never stops on them and no date can be read at 1080p. No credential form could be made out. The pause screen there reads "Recover the Fazbear Property / Find a way into Murray's Costume Manor. / Pick up Data Diver." Both records' notes now say what was looked through; nothing else in them changed.

**4. The bodies in character costumes: not settled; the voice's line is seen, and it is as the record says.** Part 1, 1:24:10 to 1:24:26, five subtitle cards labelled `DISPATCH:`: "So, it seems that maybe distraction and avoidance are your best tools," / "as a direct confrontation will likely result in the loss of some limbs." / "The previous technicians considered it an honor to lose limbs in the service of their company," / "and I'm sure they would tell you that themselves if they hadn't died from blood loss." / "We expect you'll succeed where they failed. One out of three Fazbear Employees has confidence in you, so go get 'em tiger!" The record's quote is the third and fourth cards, word for word. The bodies: in Part 7, 44:58 to 45:15, near the cabinet's room, there are slumped figures in costumes (on a couch, on a table, a large pale one in a corridor). Nothing on screen says they are bodies, and I could not tell it from the picture. The record's claim now gives the bodies as the wiki's account.

**5. A subtitle that states Fiona's or David's death, or says "wife": no subtitle found; one terminal message says "her death" of Fiona, and it is now read on screen.** The index of subtitles and terminal screens covers all eight parts of the playthrough (a keyframe about every three seconds, so a sieve and not a reading). Searching it for wife, widow, husband, married, died, dead, death, passed, funeral, killed, grave and gone found no subtitle that states either death and nothing that says "wife". Among the subtitles it found only Edwin's "How am I supposed to tell David that his mother is gone?" (on file), Arnold's "I almost died again!!" and the technicians line above. It did lead to one screen that bears on the check: Part 6, 27:56 to 28:03, a terminal message headed "Have you heard Fiona?", read by eye: "I heard it again this morning when I was down in R&D. Very clearly through one of the vents, it was Fiona's voice, I swear it on my mother's grave. I heard her and Edwin laughing and joking. Why would Edwin lie about Fall Fest? Did they fake her death for insurance money? I never did trust them." The record was already on file from the wiki (`secret-of-the-mimic-mail-heard-fiona`), with a quote that stopped at "Fall Fest?". Its quote now carries the next sentence, its notes give the whole message, and `timeline.ts:75` already tells it. It is a staff member's word: it shows the staff took her to be dead and tied that to Fall Fest, and it does not say how she died. Nothing was found for David.

**6. The two yellow prototypes: not found.** Part 7, 43:28 to 43:32: one prototype on a small curtained stage, a dark metal bear-like figure with a top hat and a purple bow tie. I did not find the yellow ones in the stretch looked through (38:20 to 45:30).

**7. The costumes in RUIN's sealed room: not found.** RUIN, Part 7 (`markipliers-playthrough-of-fnaf-sb-ruin`), 5:36 to 6:10: the chamber is almost black in the recording. The subtitles there: "???: You saved me! You saved me!" / "Cassie: Gregory?" / "???: I'm Gregory." / "Cassie: You're not Gregory. What are you?" / "Roxy: Cassie. Get out of here. Run!". At 8:33 a large figure with red eyes is in the chase. No costume can be made out, so no comparison with Murray's was possible.

**8. The wrecked Bonnie: seen, and it is as the record says, as far as a picture goes. The rabbit's shadow: not found.**
- Bonnie: RUIN, Part 6, 24:40 to 26:08 and again up to 30:20. A wrecked blue rabbit animatronic in a pink-red shirt lies on a dark floor among wet-floor signs and yellow robots lettered "CAUTION", its face cracked open and both eyes lit yellow. Earlier in the part the player switches caution robots off at a prompt "Deactivate" (13:34, 16:54). The scene prints no name for the animatronic or the room: that it is at Bonnie Bowl, that the room is hidden and what opens it are still the wiki's.
- The shadow: RUIN, Part 7, 0:50 to 1:20: a storeroom with cardboard boxes, a cyan neon rabbit face with star glasses on the wall, a poster "LOVE, FREDDY", then the masked view. I saw no sprayed "Vanny", no toppled cabinet and no shadow, and I am not sure this is the hideout. The record is unchanged.

**10. Help Wanted 2's main ending: seen, and it differs in one point.** The big archive, "Help Wanted 2 - Part 14 (ENDING)", 26:54 to 28:48. Six toy robots in a row (26:54, 27:26); a gift box with a red bow and a crank on the stage (27:20 to 27:48), which bursts apart in springs (27:50); a red recharge station with a checkered top, a lightning bolt and cyan lights under a spotlight (27:53 to 27:59); **a dark hand with spread fingers grips the edge of its door from inside (27:59)**; S.T.A.F.F. bots with faces painted white, hollow eyes and a stitched grin, one with "IN YOUR DREAMS" scrawled on its chest, crowd in (28:03); static; "[STARTING UP...]" on a teal grid (28:10 to 28:17); then in first person a girl (brown hair in two bunches, a red sweater with a star badge, blue shorts) faces the viewer, and two white segmented robot hands hold out a white rabbit mask with red round the eyes, which she takes (28:21 to 28:33); credits (28:48). The difference: only a hand shows at the door. I could not make out a rabbit costume, so "a rabbit-costumed arm" is now given as the wiki's. To your two questions: the girl is shown clearly, full face, for several seconds, and no name is printed; what is held out is a white rabbit mask that looks like the Security Mask handed over at the start of RUIN (RUIN, Part 1, 16:10 to 16:32). "Cassie", "Mask Bot" and "Nightmarionne" stay the wiki's words.

**11. Princess Quest III's ending: seen, and it differs. Burn It All Down: seen; it shows the place burning and coming down from inside, and nothing of it afterwards.**
- Princess Quest III: Security Breach, Part 9 (`markiplier-fnafsb`, 720p), 3:22:40 to 3:25:11. A 16-bit game seen from above, with icons of a rabbit mask and a green rabbit plush. "Something is not right..." (3:23:06); "This door appears to be locked." with the Princess before a red curtained doorway that has a keyhole (3:23:40); "A strange key. I wonder what this opens?" with a purple key, the two icons gone and a key icon in their place (3:23:50); a dark figure with ears in white flashes (3:24:00 to 3:24:16); a panel of green signs ringed in purple; black. Then comic panels: the cabinet's screen reading "ERROR" in red (3:24:54); the cabinet with the marquee "Princess Quest III", a boy at the controls and "VANNY" sprayed on the wall (3:24:56); later a rabbit mask on a floor (3:25:11). The differences: "ERROR" is on the cabinet in the comic that follows, not inside the game; the name on the marquee has the Roman numeral; the three texts were not on record. Not checked: the scream (sound), and that the place is a copy of Help Wanted's hub and the door like that game's.
- Burn It All Down: the big archive, "Security Breach - Part 10", 1:02:32 to 1:03:08. After a fight in a wood-panelled office with monitors ("Push Button" prompts), a 3D cutscene: a tall mass of fused parts with a Freddy-like head rises among fire and falling debris; the burnt rabbit, eyes purple, walks through the flames; the mass looms behind it, its tendrils take hold and it is lifted out of the picture; Freddy and Gregory run down a red-lit tunnel through rubble and dust; black; a card with two stars (1:02:57); credits (1:03:08). So: the collapse is shown under way, from inside, during the escape. The building is not shown from outside, and nothing is shown of what is left. A ceiling is not in view, and I did not see burner rooms; both are now given as the wiki's. The scene after the credits was not looked at.

**14. Pizzeria Simulator's last scene: seen, and it is as the record says.** The big archive, "Pizzeria Simulator - Part 5", 9:43 to 10:12. Three shots, each framed by the office monitor's bezel and each among flames: Scrap Baby (9:43 to 9:49), Molten Freddy (9:50 to 9:56), the salvaged rabbit (9:57 to 10:05); then the bezel stands empty, dark red (10:06 to 10:12), and pictures from the minigames follow. **Lefty is in none of them.**

**16. The fifth body in Give Gifts, Give Life: not found.** No recording of this death minigame turned up. Looked through: "Five Nights at Freddy's 2; REVISITED" in the big archive (129 minutes, a frame every ten seconds) and a scan for minigame-style frames over the 2014 series (Parts 2, 4 and 5 whole, the others in part), which found only jumpscares. A search of archive.org for another recording gave nothing usable. The record is unchanged.

**17. Special Delivery's inbox: seen. Each row carries a time of day and no date.** The big archive, "Special Delivery - Part 1", 10:51: the screen is headed "INBOX 8 / 10"; each row has a sender, a subject and at the right a clock time: "Fazbear Entertainment / Troubleshooting Guide: Disruption / 11:35:24 PM"; "Faz//...ar Ent##ain_!nt / Remnant Milestone Update! / 11:33:18 PM"; "Fazbear Entertainment / Troubleshooting Guide: Haywire / 11:32:34 PM"; "Fazbear Entertainment / Ready for a fun fun funtime? / 11:32:29 PM"; "Fazbear Entertainment Office of Legal Affairs / Staff Advisory: Mail Server / 11:31:31 PM". An opened email (12:47) shows subject, sender and "Dear 3289BA08319CE4F3," and no date in the part in view. Part 2, 2:40: "INBOX 114 / 118", rows at "01:08:12 PM" and the like. One limit: every row I saw was from the session being played. Whether an email from an earlier day is listed with a date was not seen. I put this on `sd-mail-server-advisory` and left the sixteen `when.basis` strings that say "Whether the inbox screen showed a date was not verified." as they are, because of that limit and because `when` was not among the fields you gave me; a wording is in section 5.

### Part 3 (scenes told second-hand)

Only what the numbered checks brought with them, plus the credits rolls:
- `ffps-credits-william-afton`, `ffps-credits-returning-voices`: **seen, and the layout differs.** "Pizzeria Simulator - Part 5", 11:44 to 12:40. The roll prints the part on one line and the performer on the line below, with no dash: Cast / Scrap Baby, Heather Masters / William Afton, PJ Heywood / Molten Freddy, Kellen Goff / Tutorial Unit, Andy Field / Cassette Man, Dave Steele; then Artwork (Emese Szigetvári, Claudia Schröder, Neko Pilarcik-Tellez), Music (Leon Riskin), Testers (Ian Cawthon, Braden Cawthon). No line for Lefty. Both quotes now follow the screen. The second record's comparison with Sister Location's credits is still the wiki's: that roll was not read.
- `security-breach-credits-vanessa-vanny-two-parts`: **seen, and it is as the record says** (round 1's frame). RUIN's roll was read too (RUIN, Part 7, 9:12 to 9:20): six cast lines, the last four "Cameron Miller - Montgomery Gator", "Marta Svetek - Gregory/Roxanne", "Astrid Wong-Searby - Cassie", "S.T.A.F.F. Bots - Still themselves…"; neither "Vanessa" nor "Vanny" is among the six. (The first two lines, for Eclipse and Glamrock Chica, were read only at reduced size.)
- `secret-of-the-mimic-previous-technicians`: the line **seen, as the record says** (check 4).
- `secret-of-the-mimic-mail-heard-fiona`: **seen, as the record says**; the quote is extended by one sentence (check 5).
- `hw2-faz-force-ending`, `ffps-completion-fire`, `ruin-glamrock-bonnie-remains-hidden-room`, `security-breach-pq3-help-wanted-hub-trapped-door`, `security-breach-ending-burn-it-all-down`: see checks 10, 14, 8 and 11.
- `fnaf2-give-gifts-give-life`: **not found** (check 16).
- **Not looked for, for want of time:** `security-breach-ending-alley`, `ruin-pizzaplex-abandoned-earthquake`, `ruin-gregory-comics-depict-endings`, `hw2-hub-helpi-pushes-gift`, `hw2-pq4-vanny-crushes-glitchtrap`, `fnaf2-golden-freddy-office`, `fnaf1-news-dressed-as-mascot`, `sl-private-room-keypad-1983`, `hw-mobile-princess-quest-graveyard`, `into-the-pit-secret-minigames-other-stories`, `fnaf4-night8-no-story-text`, and the credits of the games other than Security Breach, RUIN and Pizzeria Simulator. The big archive holds recordings of all of these games, and the tools are in the scratch folder (`evgaps/vid.py`), so a third round can take them in the same way.

## 2. Every record changed, field by field

26 records, 73 fields. No id was changed, no record was added and none removed. The old text is the committed state (`2a70fe0`).

### `ffps-credits-william-afton` (ffps-ucn.json)

- **quote**
  - old: PJ Heywood - William Afton
  - new: William Afton / PJ Heywood

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizzeria_Simulator/Credits
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (read on screen in a capture of play: Pizzeria Simulator, Part 5, 11:44 to 12:40) ; https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizzeria_Simulator/Credits

- **notes**
  - old: Cast list per wiki transcript: Heather Masters - Scrap Baby; PJ Heywood - William Afton; Kellen Goff - Molten Freddy; Andy Field - Tutorial Unit; Dave Steele - Cassette Man. The name 'Scraptrap' is not used in FFPS.
  - new: Read on 2026-10-03 on screen in a capture of the credits roll (Markiplier's Part 5 of Pizzeria Simulator, archived at archive.org), 11:44 to 12:40; not checked in play by this archive. The roll prints each part on one line and the performer's name on the line below it, with no dash; the slash in the quote marks the line break. Under the heading 'Cast' it has, in order: Scrap Baby, Heather Masters; William Afton, PJ Heywood; Molten Freddy, Kellen Goff; Tutorial Unit, Andy Field; Cassette Man, Dave Steele. Before this reading the record's quote followed the wiki's transcript, which sets the performer first and a dash between ('PJ Heywood - William Afton'). The name 'Scraptrap' is not used in FFPS.

- **image**
  - old: (none)
  - new: ffps-credits-cast.jpg

### `ffps-completion-fire` (ffps-ucn.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Endings
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a capture of play: Pizzeria Simulator, Part 5, 9:43 to 10:12) ; https://freddy-fazbears-pizza.fandom.com/wiki/Endings

- **notes**
  - old: Checked on 2026-10-03 against the wiki's captures of the scene: it has three, one each of Scrap Baby, Molten Freddy and the salvaged rabbit among flames (ScrBabyScreen.gif, MolFredScreen.gif and SpringTScreen.gif, in the galleries of its Circus Baby, Molten Freddy and William Afton pages), and none of Lefty. The wiki notes that Lefty is the only salvaged animatronic not shown burning. The three shots are interiors; that the fire destroys the building is the wiki's account ('burns down the place'). The game does not say who started the fire; the Cassette Man's 'after the smoke clears' implies he planned it (ffps-completion-peace-perhaps-more).
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 5 of Pizzeria Simulator, archived at archive.org), 9:43 to 10:12; the sound was not heard, and the scene was not checked in play by this archive. Three shots follow one another, each framed by the bezel of the office monitor and each among flames: Scrap Baby (9:43 to 9:49), Molten Freddy (9:50 to 9:56) and the salvaged rabbit (9:57 to 10:05); then the bezel stands empty, dark red (10:06 to 10:12), and pictures from the minigames follow (10:14 to 10:40). Lefty is in none of the shots. No text of the speech is on screen, so that it is spoken over these shots was not checked here. The wiki's captures of the scene, checked the same day, are of the same three (ScrBabyScreen.gif, MolFredScreen.gif and SpringTScreen.gif, in the galleries of its Circus Baby, Molten Freddy and William Afton pages), and the wiki notes that Lefty is the only salvaged animatronic not shown burning. The three shots are interiors; that the fire destroys the building is the wiki's account ('burns down the place'). The game does not say who started the fire; the Cassette Man's 'after the smoke clears' implies he planned it (ffps-completion-peace-perhaps-more).

- **image**
  - old: (none)
  - new: ffps-completion-three-machines-burning.jpg

### `ffps-credits-returning-voices` (ffps-ucn.json)

- **quote**
  - old: Heather Masters - Scrap Baby / Kellen Goff - Molten Freddy
  - new: Scrap Baby / Heather Masters … Molten Freddy / Kellen Goff

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizzeria_Simulator/Credits ; https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Sister_Location/Credits
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (Pizzeria Simulator's roll read on screen in a capture of play: Part 5, 11:44 to 12:40) ; https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizzeria_Simulator/Credits ; https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Sister_Location/Credits

- **notes**
  - old: Casting is out-of-universe, but it is the games' own record of who is speaking: Molten Freddy talks with Funtime Freddy's voice and stutter, Scrap Baby with Baby's. The layout of the credit lines follows the wiki transcript. Lefty has no credited voice in FFPS.
  - new: Casting is out-of-universe, but it is the games' own record of who is speaking: Molten Freddy talks with Funtime Freddy's voice and stutter, Scrap Baby with Baby's. Pizzeria Simulator's roll was read on 2026-10-03 on screen in a capture of play (Markiplier's Part 5, archived at archive.org, 11:44 to 12:40): it prints each part on one line and the performer's name on the line below it, with no dash, and the slashes in the quote mark the line breaks; before this reading the quote followed the wiki's transcript ('Heather Masters - Scrap Baby / Kellen Goff - Molten Freddy'). The roll has no line for Lefty. Sister Location's credits were not read on screen: that they list the same two performers as Baby and Funtime Freddy is the wiki's transcript.

### `sd-mail-server-advisory` (hw.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Emails
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (the inbox seen in a 1080p capture of play: Special Delivery, Part 1, 10:51, and Part 2, 2:40) ; https://freddy-fazbears-pizza.fandom.com/wiki/Emails

- **notes**
  - old: The only story email every new player receives. The usual reading is that this advisory is why the player receives the story emails.
  - new: The only story email every new player receives. The usual reading is that this advisory is why the player receives the story emails. The inbox was seen on 2026-10-03 in a capture of play (Markiplier's Part 1 of Special Delivery, archived at archive.org), 10:51: the screen is headed 'INBOX 8 / 10', and each row has a sender, a subject and, at the right, a time of day and no date. This email's row reads 'Fazbear Entertainment Office of Legal Affairs', 'Staff Advisory: Mail Server', '11:31:31 PM'; the rows above it carry '11:32:29 PM' to '11:35:24 PM'. An opened email (12:47) shows its subject, its sender and the greeting 'Dear 3289BA08319CE4F3,', and no date in the part of it that is in view. In Part 2 (2:40) the screen is headed 'INBOX 114 / 118' and its rows carry times such as '01:08:12 PM'. So the rows in view give a time of day and no day; whether an email from an earlier day is listed with a date was not seen. The text of this email was not read on screen.

- **image**
  - old: (none)
  - new: sd-inbox-times-of-day.jpg

### `hw2-faz-force-ending` (hw.json)

- **title**
  - old: Faz Force ending: a rabbit-costumed arm from a recharge station, S.T.A.F.F. bots, a mask held out to a girl
  - new: Faz Force ending: a hand at the door of a recharge station, S.T.A.F.F. bots with painted faces, a rabbit mask held out to a girl

- **claim**
  - old: By the wiki's summaries of the ending, combining all six Faz Force figures makes a large box appear on the hub stage. Unwinding it uncovers a recharge station from which a rabbit-costumed arm emerges, while S.T.A.F.F. bots with painted Nightmarionne faces close in on the player. The view then cuts to a S.T.A.F.F. bot starting up and holding a rabbit mask out to a girl.
  - new: In the main ending a gift box with a red bow and a crank stands on the hub's stage and bursts open, and a red recharge station stands there under a spotlight. A dark hand takes hold of the edge of the station's door from inside, and S.T.A.F.F. bots whose faces are painted white, with hollow eyes and a stitched grin, crowd in on the player. After static and the words '[STARTING UP...]', the view is a robot's: its white hands hold a white rabbit mask out to a girl, who takes it. No name is printed for her. By the wiki's summaries the ending needs all six Faz Force figures, and the arm at the door is a rabbit costume's.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Endings
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a 1080p capture of play: Help Wanted 2, Part 14, 26:54 to 28:48) ; https://freddy-fazbears-pizza.fandom.com/wiki/Endings

- **notes**
  - old: Described from the wiki's ending summaries; the scene itself was not watched. The wiki identifies the girl as RUIN's Cassie and the bot as RUIN's Mask Bot, which gives her the mask at RUIN's start (ruin-mask-bot-helpi-vanni), and says the last shot is in first person from the bot. In Security Breach the burnt rabbit under the Pizzaplex also rises from a recharge station (security-breach-freddy-i-am-not-me). What becomes of the player is not shown; 'the bots disassemble the player' is the wiki's reading.
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 14 of Help Wanted 2, archived at archive.org); the sound was not heard, and the scene was not checked in play by this archive. In order: six toy robots stand in a row (26:54, 27:26); a gift box with a red bow and a crank on its side stands on the stage (27:20 to 27:48) and bursts apart in springs (27:50); a red recharge station with a checkered top, a lightning bolt and cyan lights stands under a spotlight (27:53 to 27:59); a dark hand with spread fingers grips the edge of its door from inside (27:59); S.T.A.F.F. bots whose faces are painted white, with hollow eyes and a stitched grin, one with 'IN YOUR DREAMS' scrawled on its chest, crowd in (28:03); static (28:05); '[STARTING UP...]' on a teal grid (28:10 to 28:17); then, in first person, a girl with brown hair in two bunches, in a red sweater with a star badge and blue shorts, faces the viewer, and two white segmented robot hands hold out a white rabbit mask with red markings round the eyes, which she takes and looks down at (28:21 to 28:33); the credits follow (28:48). Only a hand shows at the station's door; that it belongs to a rabbit costume is the wiki's account ('a rabbit-costumed arm') and could not be made out on screen. The wiki calls the painted faces Nightmarionne's, identifies the girl as RUIN's Cassie and the robot as RUIN's Mask Bot, which gives her the mask at RUIN's start (ruin-mask-bot-helpi-vanni); the scene prints no name, and the mask looks like the one handed over in RUIN (a white rabbit's face, red round the eyes). In Security Breach the burnt rabbit under the Pizzaplex also rises from a recharge station (security-breach-freddy-i-am-not-me). What becomes of the player is not shown; 'the bots disassemble the player' is the wiki's reading.

- **image**
  - old: (none)
  - new: hw2-ending-girl-takes-rabbit-mask.jpg

### `hw2-mimic-teaser-mxes-ending` (hw.json)

- **notes**
  - old: In Secret of the Mimic 'MCM' is Murray's Costume Manor, and 4625 is a radio frequency (secret-of-the-mimic-log-frequency-4625). RUIN shows the same emerge-and-pulled-back sequence at the M.X.E.S. hub (ruin-mxes-hub); 'the M.X.E.S. Entity' is the wiki's name for the figure; in the RUIN dialogue checked it is 'that rabbit thing' (ruin-the-entity). The nameplate and the van's colours were read on 2026-10-03 from the wiki's two captures of the scene, which carry the game's on-screen prompts (File:HW2 Van MXES.png and File:FE Van HW2.png, on its page 'Arnold's Van'); in the second the van's hood is lettered 'COMPANY NAME'. The wiki's text calls the van white. The record's image is the puzzle's box art.
  - new: In Secret of the Mimic 'MCM' is Murray's Costume Manor, and 4625 is a radio frequency (secret-of-the-mimic-log-frequency-4625). RUIN shows the same emerge-and-pulled-back sequence at the M.X.E.S. hub (ruin-mxes-hub); 'the M.X.E.S. Entity' is the wiki's name for the figure; RUIN's own words for it are 'that rabbit thing', in Cassie's lines and the radio voice's (ruin-the-entity), and 'the entity', in lower case, in Helpi's text boxes (ruin-helpi-alert-anomalous-entity, ruin-helpi-entity-bypassed-signal-jammer). The nameplate and the van's colours were read on 2026-10-03 from the wiki's two captures of the scene, which carry the game's on-screen prompts (File:HW2 Van MXES.png and File:FE Van HW2.png, on its page 'Arnold's Van'); in the second the van's hood is lettered 'COMPANY NAME'. The wiki's text calls the van white. The record's image is the puzzle's box art.

### `security-breach-freddy-where-i-was-born` (sb-mimic.json)

- **location**
  - old: Glamrock Freddy dialogue, Parts and Service
  - new: Freddy's dialogue, Parts and Service

- **notes**
  - old: The speech continues: 'Am I Monty with a different shell? What if I am not the first Glamrock Freddy? Are there more of me at other pizzerias?'
  - new: The speech continues: 'Am I Monty with a different shell? What if I am not the first Glamrock Freddy? Are there more of me at other pizzerias?' Read from the wiki's transcript of the sound; this scene was not found in the recording of play that was read. On the lines that were read on screen there, the game's subtitles label him 'Freddy:' (security-breach-freddy-doors-reopen-6am); 'Glamrock Freddy' is the name in the credits (security-breach-credits-cast-list) and in this speech.

### `security-breach-ending-burn-it-all-down` (sb-mimic.json)

- **title**
  - old: Burn It All Down: the mass of parts pulls the burnt rabbit under the Pizzaplex into the ceiling
  - new: Burn It All Down: the mass of parts takes hold of the burnt rabbit under the Pizzaplex and lifts it out of sight

- **claim**
  - old: After Gregory defeats the burnt rabbit under the Pizzaplex in the burner rooms, it tries to escape the fire but the mass of animatronic parts grabs it and pulls it into the ceiling; Gregory and Freddy escape; post-credits they sit on a hill.
  - new: After Gregory's fight with the burnt rabbit under the Pizzaplex, a cutscene shows fire and falling debris: the burnt rabbit walks through the flames, and the mass of animatronic parts rises behind it, takes hold of it and lifts it up out of the picture, while Freddy and Gregory run out through a tunnel as rubble falls. A card with two stars and the credits follow. The cutscene shows the place burning and coming down from inside, and nothing of it afterwards. By the wiki's account the fire is set in burner rooms, and after the credits the two sit on a hill.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Endings
  - new: https://archive.org/details/markipliers-five-nights-at-freddys-archive-2014-2025 (seen in a 1080p capture of play: Security Breach, Part 10, 1:02:32 to 1:03:08) ; https://freddy-fazbears-pizza.fandom.com/wiki/Endings

- **notes**
  - old: The game names neither creature; 'Burntrap' and 'Tangle' are file names (security-breach-burntrap-name-not-in-game). This is the only ending animated in 3D; the others are told as comic pages.
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 10 of Security Breach, archived at archive.org), 1:02:32 to 1:03:08; the sound was not heard, and the scene was not checked in play by this archive. The fight before the cutscene is in a wood-panelled office with monitors, where the player answers prompts 'Push Button'. In the cutscene a tall mass of fused parts with a Freddy-like head rises among fire and falling debris; the burnt rabbit, its eyes purple, walks through the flames; the mass looms behind it, its tendrils take hold and it is lifted out of the picture; Freddy and Gregory run down a red-lit tunnel through rubble and dust; black; then a card with two stars (1:02:57) and the credits (1:03:08). That the fire is set in burner rooms and that the rabbit is pulled 'into the ceiling' are the wiki's account; the scene after the credits was not looked at. The game names neither creature; 'Burntrap' and 'Tangle' are file names (security-breach-burntrap-name-not-in-game). This is the only ending animated in 3D; the others are told as comic pages.

### `ruin-mask-bot-helpi-vanni` (sb-mimic.json)

- **title**
  - old: Mask Bot gives Cassie a Security Mask; Helpi and V.A.N.N.I.
  - new: A robot the subtitles label 'Maskbot' gives Cassie the Security Mask; Helpi and V.A.N.N.I.

- **claim**
  - old: A bunny-eared Map Bot calling itself the 'Mask Bot' gives Cassie a Security Mask; its AI, Helpi, welcomes her to V.A.N.N.I., which the wiki expands as 'Virtual Augmented Neural Network Integration Unit': an AR layer where, by the wiki's account, she can pass barriers and is invisible to animatronics.
  - new: A bunny-eared S.T.A.F.F. bot, whose lines the subtitles label 'Maskbot', holds out a mask to Cassie; the game's prompt and inventory call it the Security Mask. When she puts it on, a cartoon bear in a text box welcomes her to 'V.A.N.N.I., the Virtual Augmented Neural Network Integration unit' and says 'Call me Helpi.' By the wiki's account, in this AR layer she can pass barriers and is invisible to animatronics.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Security_Breach_-_RUIN
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy%27s:_Security_Breach_-_RUIN ; read on screen in a 1080p capture of play (https://archive.org/details/markipliers-playthrough-of-fnaf-sb-ruin, Part 1, 15:56 to 17:22)

- **notes**
  - old: The acronym's expansion is as given by the wiki's plot summary and its Security Mask page; Helpi's line was not retrieved verbatim. Cassie says the acronym aloud: 'I got kicked out of that V.A.N.N.I. network!' Helpi introduces himself with 'it's my job to help you succeed in your new job!', treating the wearer as staff. The plot summary says the mask makes Cassie invisible to 'other animatronics'; the Security Mask page says to Glamrock Endos.
  - new: The hand-over and Helpi's first five text boxes were read on 2026-10-03 on screen in a capture of play (Markiplier's Part 1 of RUIN, archived at archive.org, 15:56 to 17:22); not checked in play by this archive. The robot does not say a name for itself: its lines are 'Take a mask. Take a mask.' and 'Thank you! Please enjoy.', under the subtitle label 'Maskbot' (ruin-maskbot-subtitle-label); 'Mask Bot' is the wiki's page title. The pick-up prompt reads 'Security Mask'. Helpi's boxes, in order: 'Welcome to V.A.N.N.I., the Virtual Augmented Neural Network Integration unit.' / 'New user detected. Pairing occipital transponder. Stay calm. This won't hurt a bit.' / 'Do not be surprised by your surroundings. You are still in the real world, but Fazbear Entertainment has made it better!' / 'With this Security Mask, you can locate and repair all the pesky security nodes that are locking down the mesh network here in the Mega Pizzaplex.' / 'Call me Helpi. You can always count on me because it's my job to help you succeed in your new job!' So the acronym's expansion is the game's own, with a lower-case 'unit', and Helpi treats the wearer as staff. Cassie says the acronym aloud later: 'I got kicked out of that V.A.N.N.I. network!' What the mask lets her do is from the wiki: its plot summary says it makes Cassie invisible to 'other animatronics'; its Security Mask page says to Glamrock Endos.

- **quote**
  - old: (none)
  - new: Welcome to V.A.N.N.I., the Virtual Augmented Neural Network Integration unit. … Call me Helpi. You can always count on me because it's my job to help you succeed in your new job!

### `ruin-the-entity` (sb-mimic.json)

- **notes**
  - old: 'The Entity' is the wiki's label. In the dialogue checked, Cassie and the voice on the radio call it 'that rabbit thing' or 'that thing', and Gregory speaks only of 'the M.X.E.S. security program'. Helpi's lines were not retrieved.
  - new: 'The Entity', with capitals, is the wiki's page title. In the dialogue checked, Cassie and the voice on the radio call it 'that rabbit thing' or 'that thing', and Gregory speaks only of 'the M.X.E.S. security program'. Helpi's text boxes, read on screen in a capture of play, call it 'an anomalous entity', 'this entity', 'the entity' and 'that bad entity', always in lower case (ruin-helpi-alert-anomalous-entity, ruin-helpi-entity-bypassed-signal-jammer); so lower-case 'the entity' is the game's own word for it.

### `secret-of-the-mimic-mail-heard-fiona` (sb-mimic.json)

- **quote**
  - old: it was Fiona's voice, I swear it on my mother's grave. I heard her and Edwin laughing and joking. Why would Edwin lie about Fall Fest?
  - new: it was Fiona's voice, I swear it on my mother's grave. I heard her and Edwin laughing and joking. Why would Edwin lie about Fall Fest? Did they fake her death for insurance money?

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Mailboxes
  - new: https://archive.org/details/markiplier-plays-fnaf-secret-of-the-mimic (read on screen in a 1080p capture of play: Part 6, 27:56 to 28:03) ; https://freddy-fazbears-pizza.fandom.com/wiki/Mailboxes

- **notes**
  - old: (none)
  - new: Read on 2026-10-03 on screen in a capture of play (Markiplier's Part 6, archived at archive.org), 27:56 to 28:03; not checked in play by this archive. The terminal shows a message headed 'Have you heard Fiona?', in full: 'I heard it again this morning when I was down in R&D. Very clearly through one of the vents, it was Fiona's voice, I swear it on my mother's grave. I heard her and Edwin laughing and joking. Why would Edwin lie about Fall Fest? Did they fake her death for insurance money? I never did trust them.' No signature is on the screen. Before this reading the quote ended at 'Fall Fest?'; the sentence after it is added because it is the one place read so far where the game's own text says 'her death' of Fiona. It is a staff member's word: it shows that the staff took her to be dead and tied that to Fall Fest, and it does not say how she died. That the message comes from a mailbox in the Warehouse is the wiki's placing.

### `secret-of-the-mimic-arnold-assignment` (sb-mimic.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Arnold
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/Arnold ; read on screen in a 1080p capture of play (https://archive.org/details/markiplier-plays-fnaf-secret-of-the-mimic, Part 1, 14:59 to 16:34)

- **notes**
  - old: The quote is Arnold's, from the wiki's Arnold page. Dispatch's side of the call is recorded verbatim in secret-of-the-mimic-dispatch-contractor-murray and secret-of-the-mimic-dispatch-contract-legally-ours. The earlier wording 'retrieve the prototype' was the plot summary's; Dispatch first says only 'get it' and 'retrieve our property', and the schematic is named later.
  - new: The quote is Arnold's, as the subtitle prints it under the label 'ARNOLD:' (read on 2026-10-03 on screen in a capture of play, Markiplier's Part 1, 15:04; not checked in play by this archive; the dots are the game's). The wiki's transcript of the sound differs: 'I just finished a 36-hour shift and I'm struggling to stay awake.' The sound was not heard for this record. Dispatch's side of the call is recorded verbatim in secret-of-the-mimic-dispatch-contractor-murray and secret-of-the-mimic-dispatch-contract-legally-ours. The earlier wording 'retrieve the prototype' was the plot summary's; Dispatch first says only 'get it' and 'retrieve our property', and the schematic is named later.

- **quote**
  - old: Well, since you asked, I just finished a 36-hour shift and I'm struggling to stay awake.
  - new: Well, since you asked, I just finished a 36-hour shift... been struggling to stay awake.

### `secret-of-the-mimic-previous-technicians` (sb-mimic.json)

- **claim**
  - old: Arnold finds bodies in character suits; the 'Dispatch' voice says previous technicians lost limbs and died of blood loss, and a later radio line says 'Now it's your turn to play dress up.'
  - new: By the wiki's account Arnold finds bodies in character suits. The 'Dispatch' voice says that the previous technicians lost limbs and died of blood loss, and by the wiki's audio table a later radio line says 'Now it's your turn to play dress up.'

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/F10-N4
  - new: https://archive.org/details/markiplier-plays-fnaf-secret-of-the-mimic (the voice's line read on screen in a 1080p capture of play: Part 1, 1:24:10 to 1:24:26) ; https://freddy-fazbears-pizza.fandom.com/wiki/F10-N4

- **notes**
  - old: Both lines are in the wiki's F10-N4 audio table. That the bodies in the suits are the technicians the voice speaks of is the usual reading, and it rests on the voice's account; the record does not say who put the bodies in the suits, and no capture of them is on file.
  - new: The voice's line was read on 2026-10-03 on screen in a capture of play (Markiplier's Part 1, archived at archive.org), 1:24:10 to 1:24:26; the sound was not heard. Five subtitle cards follow one another, each labelled 'DISPATCH:': 'So, it seems that maybe distraction and avoidance are your best tools,' / 'as a direct confrontation will likely result in the loss of some limbs.' / 'The previous technicians considered it an honor to lose limbs in the service of their company,' / 'and I'm sure they would tell you that themselves if they hadn't died from blood loss.' / 'We expect you'll succeed where they failed. One out of three Fazbear Employees has confidence in you, so go get 'em tiger!'. The quote joins the third and fourth cards and is word for word what the wiki's F10-N4 audio table has. 'Now it's your turn to play dress up.' is from that table and was not read on screen. The bodies were not made out in the recording: slumped figures in costumes are in view near the cabinet's room (Part 7, 44:58 to 45:15), and nothing on screen there says that they are bodies. That the bodies in the suits are the technicians the voice speaks of is the usual reading, and it rests on the voice's account; the record does not say who put the bodies in the suits.

### `secret-of-the-mimic-f10n4-reveal` (sb-mimic.json)

- **claim**
  - old: Behind a locked office, Arnold finds a supercomputer, F10-N4, which had impersonated Dispatch; in Fiona's voice it says Edwin abandoned them, it wants Edwin to repair M2, and 'Tell Edwin, I still love him.'
  - new: Behind a locked office door Arnold finds a cabinet computer lettered 'F10-N4'. The radio voice's subtitle label changes there from 'DISPATCH' to 'FIONA', and Arnold says 'A computer? Your voice changed.' Under the label 'FIONA' it says that Edwin abandoned them, that they must convince him to repair M2, and 'Tell Edwin I still love him.'

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/F10-N4
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/F10-N4 ; read on screen in a 1080p capture of play (https://archive.org/details/markiplier-plays-fnaf-secret-of-the-mimic, Part 7, 46:31 to 47:46)

- **quote**
  - old: Edwin abandoned us, he shut himself away in our home. ... We must convince him to repair M2. ... Tell Edwin, I still love him.
  - new: Edwin abandoned us. He shut himself away in our home. … We must convince him to repair M2. … Tell Edwin I still love him.

- **notes**
  - old: (none)
  - new: The scene's subtitles were read on 2026-10-03 on screen in a capture of play (Markiplier's Part 7, archived at archive.org); not checked in play by this archive, and the sound was not heard. The quote follows the screen; the three sentences are subtitled 'FIONA:' and stand apart (47:21, 47:31, 47:41). The wiki's transcript of the sound punctuates them differently: 'Edwin abandoned us, he shut himself away in our home.' and 'Tell Edwin, I still love him.' The game's word for the machine is Arnold's 'A computer?'; an earlier wording of this record had 'supercomputer', which is the wiki's. How the label of the voice runs at the door is in secret-of-the-mimic-reveal-subtitle-labels; the lettering on the cabinet in secret-of-the-mimic-f10-n4-cabinet-lettering; its instructions to Arnold in secret-of-the-mimic-cabinet-message-for-edwin.

### `security-breach-pq3-help-wanted-hub-trapped-door` (sb-mimic.json)

- **title**
  - old: Princess Quest 3, per the wiki: a door like Help Wanted's sealed one, a scream and 'ERROR'
  - new: Princess Quest III: a purple key for a mask and a plush, a locked door, then 'ERROR' on the cabinet; by the wiki, a door like Help Wanted's sealed one

- **claim**
  - old: By the wiki's account (not watched), Princess Quest 3 is set in a 16-bit copy of Help Wanted's hub and corn maze: the Princess trades a rabbit mask and a rabbit plush for a purple key and strikes a door like the one in Help Wanted's Trapped ending; a scream is heard, and the cabinet shows 'ERROR'.
  - new: Princess Quest III is a 16-bit game seen from above. With icons of a rabbit mask and a green rabbit plush at the top of the screen, it prints 'Something is not right...' and, with the Princess before a curtained doorway that has a keyhole, 'This door appears to be locked.'. Then the two icons are gone and a purple key is in their place: 'A strange key. I wonder what this opens?'. A dark figure with ears stands in white flashes, and the game goes black. In the comic panels that follow, the screen of the cabinet, whose marquee reads 'Princess Quest III', reads 'ERROR'. By the wiki's account the game is set in a copy of Help Wanted's hub and corn maze, the Princess strikes a door like the one in Help Wanted's Trapped ending, and a scream is heard; these three were not checked.

- **quote**
  - old: ERROR
  - new: Something is not right... / This door appears to be locked. / A strange key. I wonder what this opens? / ERROR

- **location**
  - old: Princess Quest 3 arcade cabinet in the rabbit-costumed woman's hideout above Fazer Blast
  - new: Princess Quest III arcade cabinet in the rabbit-costumed woman's hideout above Fazer Blast

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Princess_Quest
  - new: https://archive.org/details/markiplier-fnafsb (seen in a 720p capture of play: Part 9, 3:22:40 to 3:25:11) ; https://freddy-fazbears-pizza.fandom.com/wiki/Princess_Quest

- **notes**
  - old: Described from the wiki's account; not watched. The wiki calls the items Vanny's mask and the Glitchtrap plush. In the ending that follows, the mask and bow tie lie on the floor and a blonde woman waits at the doors (security-breach-ending-redemption). That finishing this game is what frees her, by way of the door that closed on Help Wanted's rabbit figure, is a reading; the game does not say so. The wiki's audio listing gives the same scream to a Springtrap cutout in Help Wanted 2 (hw2-springtrap-cutout-pq3-scream).
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 9 of Security Breach, archived at archive.org), 3:22:40 to 3:25:11; the sound was not heard, and the scene was not checked in play by this archive. In order: the game, with two hearts and the icons of a rabbit mask and a green rabbit plush; 'Something is not right...', with a green rabbit plush shown large beside the words (3:23:06); 'This door appears to be locked.', with the Princess before a red curtained doorway that has a keyhole (3:23:40); 'A strange key. I wonder what this opens?', with a purple key shown large, the two icons gone and a key icon in their place (3:23:50); a dark figure with ears in white flashes (3:24:00 to 3:24:16); a panel of green signs ringed in purple (3:24:24 to 3:24:32); black. Then comic panels: the cabinet's screen with 'ERROR' in red (3:24:54); the cabinet, its marquee lettered 'Princess Quest III', a boy at its controls and 'VANNY' sprayed in purple on the wall beside it (3:24:56); and, among the later panels, a rabbit mask lying on a floor (3:25:11). So 'ERROR' stands on the cabinet's screen in the comic that follows the game, and not inside the 16-bit game. That the mask and the plush are given for the key is read from the icons: the game prints no word of a trade. The slashes in the quote divide four separate texts. The wiki calls the items Vanny's mask and the Glitchtrap plush. In the ending that follows, the mask and bow tie lie on the floor and a blonde woman waits at the doors (security-breach-ending-redemption). That finishing this game is what frees her, by way of the door that closed on Help Wanted's rabbit figure, is a reading; the game does not say so. The wiki's audio listing gives the same scream to a Springtrap cutout in Help Wanted 2 (hw2-springtrap-cutout-pq3-scream).

- **image**
  - old: (none)
  - new: sb-pq3-cabinet-error.jpg

### `security-breach-credits-vanessa-vanny-two-parts` (sb-mimic.json)

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy's:_Security_Breach/Credits
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/Five_Nights_at_Freddy's:_Security_Breach/Credits ; read on screen in a 720p capture of play (https://archive.org/details/markiplier-fnafsb, Part 9, 3:25:44 to 3:25:53)

- **notes**
  - old: Read from the wiki's transcription of the credits on 2026-10-03, not from a capture of the credits roll, so the layout on screen may differ. A credit names a voiced part, not a person in the story, and one performer often takes several: this list gives Vanessa's performer Glamrock Chica as well, and Vanny's performer Gregory and Roxanne. So the credits show that the game casts 'Vanessa' and 'Vanny' as two voices. They do not say that the two are different people, and they do not say that they are one. The wiki's transcription of RUIN's cast list, read the same day, has neither part.
  - new: Read first from the wiki's transcription of the credits, on 2026-10-03. The credits roll was then read the same day from a recording of play and agrees with the transcription line for line: one performer to a line, with 'Vanessa' and 'Vanny' on two lines (security-breach-credits-cast-list). A credit names a voiced part, not a person in the story, and one performer often takes several: this list gives Vanessa's performer Glamrock Chica as well, and Vanny's performer Gregory and Roxanne. So the credits show that the game casts 'Vanessa' and 'Vanny' as two voices. They do not say that the two are different people, and they do not say that they are one. The wiki's transcription of RUIN's cast list, read the same day, has neither part. RUIN's roll was then read on screen as well (Markiplier's Part 7 of RUIN, archived at archive.org, 9:12 to 9:20): its cast has six lines, the last four of them 'Cameron Miller - Montgomery Gator', 'Marta Svetek - Gregory/Roxanne', 'Astrid Wong-Searby - Cassie' and 'S.T.A.F.F. Bots - Still themselves…', and neither 'Vanessa' nor 'Vanny' is among the six.

### `ruin-glamrock-bonnie-remains-hidden-room` (sb-mimic.json)

- **claim**
  - old: By the wiki's account (room not viewed), a broken Glamrock Bonnie animatronic lies in a hidden room at Bonnie Bowl, opened by deactivating the Caution Bots around the Pizzaplex.
  - new: A wrecked blue rabbit animatronic in a pink-red shirt lies on the floor of a dark room among wet-floor signs and yellow robots lettered 'CAUTION', its face cracked open and both eyes lit yellow. The scene prints no name for it. By the wiki's account it is Glamrock Bonnie, and the room is a hidden one at Bonnie Bowl, opened by deactivating the Caution Bots around the Pizzaplex.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Glamrock_Bonnie
  - new: https://archive.org/details/markipliers-playthrough-of-fnaf-sb-ruin (seen in a 1080p capture of play: Part 6, 24:40 to 26:08) ; https://freddy-fazbears-pizza.fandom.com/wiki/Glamrock_Bonnie

- **notes**
  - old: Described from the wiki; the room was not viewed. Per the wiki his eyes glow until the last four bots are switched off, and a gondola ride in Monty's Gator Golf tells an official story in which Bonnie retired and gave his place to Monty. Bonnie is found at Bonnie Bowl, not at Monty Golf where the security log last saw him. RUIN does not say what happened to him.
  - new: Seen on 2026-10-03 in a capture of play (Markiplier's Part 6 of RUIN, archived at archive.org), 24:40 to 26:08 and again up to 30:20; not checked in play by this archive. Earlier in the same part the player switches caution robots off at a prompt 'Deactivate' (13:34, 16:54). What the capture does not show is where in the building the room is and what opens it: that it is a hidden room at Bonnie Bowl and that the robots open it are the wiki's account, as is the animatronic's name. Per the wiki his eyes glow until the last four bots are switched off, and a gondola ride in Monty's Gator Golf tells an official story in which Bonnie retired and gave his place to Monty. Bonnie is found at Bonnie Bowl, not at Monty Golf where the security log last saw him. RUIN does not say what happened to him.

- **image**
  - old: (none)
  - new: ruin-wrecked-bonnie.jpg

### `ruin-fake-gregory-signal-jammer` (sb-mimic.json)

- **notes**
  - old: Cassie later protests: 'I got kicked out of that V.A.N.N.I. network! You said you got rid of that rabbit thing.' The voice also warns: 'Stay away from that thing! It's sending out some sort of distress signal, and Monty is responding!' Reading: the rabbit figure belongs to the system that keeps the endoskeleton in (ruin-gregory-mxes-explanation), and the voice works to have it switched off. The game's own words for the figure are 'that rabbit thing' and 'that thing'.
  - new: Cassie later protests: 'I got kicked out of that V.A.N.N.I. network! You said you got rid of that rabbit thing.' The voice also warns: 'Stay away from that thing! It's sending out some sort of distress signal, and Monty is responding!' Reading: the rabbit figure belongs to the system that keeps the endoskeleton in (ruin-gregory-mxes-explanation), and the voice works to have it switched off. The game's own words for the figure are 'that rabbit thing' and 'that thing' in Cassie's and the voice's lines, and 'the entity' in Helpi's text boxes: 'Looks like the entity has bypassed my signal jammer and activated one of its own.' (ruin-helpi-entity-bypassed-signal-jammer).

### `secret-of-the-mimic-work-order-1979` (sb-mimic.json)

- **notes**
  - old: Read from the document image on the wiki, which captions it 'Arnold's work order found within the Van'. The date appears twice: typed in the header and handwritten beside the employee signature. Service $30.00, gas $8.45, job total $38.45. In month/day order 9/07/79 is 7 September 1979, exactly five weeks (35 days) after the 'Aug 3rd' on the Inventor's House mailbox, whose message says the last mail came 'five weeks ago' (secret-of-the-mimic-mail-foreclosure). So the year is on a document among the game's files as well as in the teaser. The document was read from the wiki's copy of the image; whether the date can be read in play has not been confirmed, so the archive does not call it printed.
  - new: Read from the document image on the wiki, which captions it 'Arnold's work order found within the Van'. The date appears twice: typed in the header and handwritten beside the employee signature. Service $30.00, gas $8.45, job total $38.45. In month/day order 9/07/79 is 7 September 1979, exactly five weeks (35 days) after the 'Aug 3rd' on the Inventor's House mailbox, whose message says the last mail came 'five weeks ago' (secret-of-the-mimic-mail-foreclosure). So the year is on a document among the game's files as well as in the teaser. The document was read from the wiki's copy of the image; whether the date can be read in play has not been confirmed, so the archive does not call it printed. It was looked for on 2026-10-03 in a capture of play (Markiplier's Part 1, archived at archive.org, 18:15 to 20:06): in the van a blank form with a 'FAZBEAR ENTERTAINMENT' letterhead hangs on a clipboard and a binder of two filled forms with a 'FAZBEAR' letterhead lies on the bench, but the player does not stop on them, and no date can be read at 1080p.

### `secret-of-the-mimic-credential-form-1979` (sb-mimic.json)

- **notes**
  - old: Read from the document image on the wiki ('Arnold's employee credentials form found within the Van'). 'Arnold', '1979' and 'N/A' are handwritten into a typeset form. On this form Fazbear Entertainment is a company with trained technicians, a training programme and 'proprietary technology'; 1979 is given only as an expiration year, and the form was not seen in play.
  - new: Read from the document image on the wiki ('Arnold's employee credentials form found within the Van'). 'Arnold', '1979' and 'N/A' are handwritten into a typeset form. On this form Fazbear Entertainment is a company with trained technicians, a training programme and 'proprietary technology'; 1979 is given only as an expiration year, and the form was not seen in play. It was looked for on 2026-10-03 in a capture of play (Markiplier's Part 1, archived at archive.org, 18:15 to 20:06): forms with a Fazbear letterhead are in view in the van, and none of them could be made out as this one.

### `secret-of-the-mimic-dispatch-contractor-murray` (sb-mimic.json)

- **quote**
  - old: We had this contractor named Edwin Murray. He was developing some tech for us, but he's gone quiet.
  - new: We had this contractor named Edwin Murray; he was developing some tech for us but he's gone quiet.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Dispatch
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/Dispatch ; read on screen in a 1080p capture of play (https://archive.org/details/markiplier-plays-fnaf-secret-of-the-mimic, Part 1, 14:59 to 16:34)

- **notes**
  - old: A statement, in a game, that Edwin Murray was a contractor developing technology for the speaker's company. The call opens: 'Arnold. Hey buddy, this is dispatch with Fazbear Entertainment. How are you feeling?' (the wiki's Dispatch audio table). The wiki lists this line under the real Dispatch; where F10-N4's impersonation begins is not settled (secret-of-the-mimic-clock-out-real-dispatch).
  - new: A statement, in a game, that Edwin Murray was a contractor developing technology for the speaker's company. The quote is the subtitle's, under the label 'DISPATCH:' (read on 2026-10-03 on screen in a capture of play, Markiplier's Part 1, 16:02; not checked in play by this archive). The wiki's transcript of the sound has the same words punctuated as two sentences: 'We had this contractor named Edwin Murray. He was developing some tech for us, but he's gone quiet.' The call opens, on screen: 'Arnold! Hey buddy, this is dispatch with Fazbear Entertainment. How are you feeling?' (secret-of-the-mimic-opening-call-arnold-dispatch). The wiki lists this line under the real Dispatch; where F10-N4's impersonation begins is not settled (secret-of-the-mimic-clock-out-real-dispatch).

### `secret-of-the-mimic-dispatch-contract-legally-ours` (sb-mimic.json)

- **quote**
  - old: As per his contract, everything he's been working on for us is now legally ours. So we're sending you in to get it.
  - new: As per his contract, everything he's been working on for us is now legally ours, so we're sending you in to get it.

- **verifiedVia**
  - old: https://freddy-fazbears-pizza.fandom.com/wiki/Dispatch
  - new: https://freddy-fazbears-pizza.fandom.com/wiki/Dispatch ; read on screen in a 1080p capture of play (https://archive.org/details/markiplier-plays-fnaf-secret-of-the-mimic, Part 1, 14:59 to 16:34)

- **notes**
  - old: The same call: 'Our motion sensors indicate that someone's still in the building moving around.' Compare the 'WA' letter, which says 'we now technically own the land' (secret-of-the-mimic-mail-confidential-wa). By Dispatch's account Fazbear Entertainment already owns everything Murray was working on for it; the call does not list what that covers.
  - new: The quote is the subtitle's, under the label 'DISPATCH:' (read on 2026-10-03 on screen in a capture of play, Markiplier's Part 1, 16:07; not checked in play by this archive). The wiki's transcript of the sound makes it two sentences: '… is now legally ours. So we're sending you in to get it.' The same call, on screen: 'Our motion sensors indicate that someone is still inside the building moving around'. Compare the 'WA' letter, which says 'we now technically own the land' (secret-of-the-mimic-mail-confidential-wa). By Dispatch's account Fazbear Entertainment already owns everything Murray was working on for it; the call does not list what that covers.

### `secret-of-the-mimic-reveal-subtitle-labels` (sb-mimic.json)

- **notes**
  - old: Read on 2026-10-03 on screen in a capture of play (Markiplier's Part 7, archived at archive.org; frames one second apart, and half a second apart from 46:40 to 46:51); not checked in play by this archive, and the sound was not heard. The subtitles print the speaker's label in capitals on its own line above the words; label and words are run together here. The dots after 'Error' are the game's. In order: 'STAGE MANAGER: Zero percent power remaining.' (46:31), 'DISPATCH: Error...' (46:34), 'F10 N4: You give me no other option.' (46:38), 'F10 N4: Enter.' (46:41), then, with the cabinet in view, 'FIONA: And here you are.' (46:49), 'FIONA: Despite the circumstance, it is nice to meet you face to face.', 'FIONA: It is lonely down here.', Arnold's line (47:01), and 'FIONA:' on every line down to 'FIONA: Entering standby mode.' (47:46). The wiki's audio table has 'Error...' under its heading 'Mimicking Dispatch' and the two lines labelled 'F10 N4:' under 'Mimicking Fiona', in sound files named 'F10-N4_FIONA'; the subtitles give those two a label of their own. The label has no hyphen; the cabinet's own lettering has one (secret-of-the-mimic-f10-n4-cabinet-lettering). In the two earlier stretches of the same recording that were read, the radio voice is labelled 'DISPATCH:' throughout: from the opening call to the pick-up of the Data Diver, and in the briefing in the security office (Part 1, 14:59 to 20:46 and 39:20 to 40:47). So in what was read the subtitles mark a change of voice here, at the cabinet, and nowhere earlier; the rest of the game's subtitles were not read. The labels say whose voice the game presents. They do not say that the cabinet is the machine Edwin called M1.
  - new: Read on 2026-10-03 on screen in a capture of play (Markiplier's Part 7, archived at archive.org; frames one second apart, and half a second apart from 46:40 to 46:51); not checked in play by this archive, and the sound was not heard. The subtitles print the speaker's label in capitals on its own line above the words; label and words are run together here. The picture on file sets the lower part of three frames one above the other (46:34, 46:38 and 46:50). The dots after 'Error' are the game's. In order: 'STAGE MANAGER: Zero percent power remaining.' (46:31), 'DISPATCH: Error...' (46:34), 'F10 N4: You give me no other option.' (46:38), 'F10 N4: Enter.' (46:41), then, with the cabinet in view, 'FIONA: And here you are.' (46:49), 'FIONA: Despite the circumstance, it is nice to meet you face to face.', 'FIONA: It is lonely down here.', Arnold's line (47:01), and 'FIONA:' on every line down to 'FIONA: Entering standby mode.' (47:46). The wiki's audio table has 'Error...' under its heading 'Mimicking Dispatch' and the two lines labelled 'F10 N4:' under 'Mimicking Fiona', in sound files named 'F10-N4_FIONA'; the subtitles give those two a label of their own. The label has no hyphen; the cabinet's own lettering has one (secret-of-the-mimic-f10-n4-cabinet-lettering). In the two earlier stretches of the same recording that were read, the radio voice is labelled 'DISPATCH:' throughout: from the opening call to the pick-up of the Data Diver, and in the briefing in the security office (Part 1, 14:59 to 20:46 and 39:20 to 40:47). So in what was read the subtitles mark a change of voice here, at the cabinet, and nowhere earlier; the rest of the game's subtitles were not read. The labels say whose voice the game presents. They do not say that the cabinet is the machine Edwin called M1.

- **image**
  - old: (none)
  - new: sotm-cabinet-subtitle-labels.jpg

### `security-breach-credits-cast-list` (sb-mimic.json)

- **notes**
  - old: Read on 2026-10-03 on screen in a capture of the credits roll (Markiplier's playthrough, archived at archive.org): whole in Part 9 at 3:25:44, and its first four lines in Part 7 at 18:05, where the recording then cuts ahead. Not checked in play by this archive. The roll shows 'Five Nights at Freddy's created by Scott Cawthon', then the heading 'Cast' and these seven lines, the performers' names in yellow and the parts in magenta, then the heading 'Five Nights at Freddy's: Security Breach Development Team'. The wiki's transcription of the credits has the same seven lines in the same words and order, so the record read from it (security-breach-credits-vanessa-vanny-two-parts) matches the screen: 'Vanessa' and 'Vanny' stand on two lines with two performers. A credit names a voiced part, not a person in the story. The game's subtitles label the bear's lines 'Freddy:'; by the wiki's transcript he says the longer name once himself, 'What if I am not the first Glamrock Freddy?' (security-breach-freddy-where-i-was-born). No message, voice line or achievement text checked for this record prints 'Montgomery Gator' or 'Glamrock Chica' anywhere but in this list.
  - new: Read on 2026-10-03 on screen in a capture of the credits roll (Markiplier's playthrough, archived at archive.org): whole in Part 9 at 3:25:44, and its first four lines in Part 7 at 18:05, where the recording then cuts ahead. Not checked in play by this archive. The picture on file is of the same list in the roll that follows the Burn It All Down ending, from the 1080p copy of the same playthrough (Part 10, 1:03:13). The roll shows 'Five Nights at Freddy's created by Scott Cawthon', then the heading 'Cast' and these seven lines, the performers' names in yellow and the parts in magenta, then the heading 'Five Nights at Freddy's: Security Breach Development Team'. The wiki's transcription of the credits has the same seven lines in the same words and order, so the record read from it (security-breach-credits-vanessa-vanny-two-parts) matches the screen: 'Vanessa' and 'Vanny' stand on two lines with two performers. A credit names a voiced part, not a person in the story. The game's subtitles label the bear's lines 'Freddy:'; by the wiki's transcript he says the longer name once himself, 'What if I am not the first Glamrock Freddy?' (security-breach-freddy-where-i-was-born). No message, voice line or achievement text checked for this record prints 'Montgomery Gator' or 'Glamrock Chica' anywhere but in this list.

- **image**
  - old: (none)
  - new: sb-credits-cast-list.jpg

### `security-breach-intercom-pizzaplex-now-closed` (sb-mimic.json)

- **notes**
  - old: Read on 2026-10-03 on screen in a capture of play (Markiplier's Part 1, archived at archive.org); not checked in play by this archive. The subtitles print the speaker's label on its own line above the words; label and words are run together here. The clock on screen reads 12:00 AM while the announcement is up, and the glass doors of the entrance are still in view under a neon sign 'COME BACK SOON!'; in the next shot a shutter covers them, and Gregory's two lines follow. Freddy then tells him when the doors reopen (security-breach-freddy-doors-reopen-6am). The wiki files the announcement under the voice it calls Dread Unit, in the same words, and has Gregory's line as 'No, no! Wait I'm still here!'. Earlier in the night, by the wiki's transcripts and not read on screen, Vanessa says 'we're like 15 minutes from closing and some kid is sneaking around backstage' and Freddy 'we will never get to the Lobby before midnight'.
  - new: Read on 2026-10-03 on screen in a capture of play (Markiplier's Part 1, archived at archive.org); not checked in play by this archive. The subtitles print the speaker's label on its own line above the words; label and words are run together here. The clock on screen reads 12:00 AM while the announcement is up, and the glass doors of the entrance are still in view under a neon sign 'COME BACK SOON!'; in the next shot a shutter covers them, and Gregory's two lines follow. The picture on file is the lower part of that frame (23:12): the clock, at the top right of the screen, is outside it, because the player's camera inset lies between the two in the recording. Freddy then tells him when the doors reopen (security-breach-freddy-doors-reopen-6am). The wiki files the announcement under the voice it calls Dread Unit, in the same words, and has Gregory's line as 'No, no! Wait I'm still here!'. Earlier in the night, by the wiki's transcripts and not read on screen, Vanessa says 'we're like 15 minutes from closing and some kid is sneaking around backstage' and Freddy 'we will never get to the Lobby before midnight'.

- **image**
  - old: (none)
  - new: sb-closing-announcement-entrance.jpg

### `ruin-helpi-entity-bypassed-signal-jammer` (sb-mimic.json)

- **image**
  - old: (none)
  - new: ruin-helpi-the-entity-text-box.jpg

## 3. The prose that should change

23 sentences. Each is quoted as it stands in the file (with the file's own `\"`), then as it should read. I changed nothing in these files. Every "now" text was checked to be in the named line word for word at 19:06; you are editing these files, so a line number may have moved since, and the text is the thing to search for.

### 3a. Quotations that the subtitles contradict (4)

The four Secret of the Mimic quotes are now the subtitle's words. `quotecheck` does not flag these, because it ignores punctuation and case and does not read `people.ts`, but the screen has other punctuation.

1. `src/data/people.ts:297`
   - now: `goes on: \"We had this contractor named Edwin Murray. He was developing some tech for us, but he's gone quiet.\" [[secret-of-the-mimic-dispatch-contractor-murray]]`
   - should read: `goes on: \"We had this contractor named Edwin Murray; he was developing some tech for us but he's gone quiet.\" [[secret-of-the-mimic-dispatch-contractor-murray]]`
2. `src/data/timeline.ts:61`
   - now: `says \"We had this contractor named Edwin Murray. He was developing some tech for us\" [[secret-of-the-mimic-dispatch-contractor-murray]]`
   - should read: `says \"We had this contractor named Edwin Murray; he was developing some tech for us\" [[secret-of-the-mimic-dispatch-contractor-murray]]`
3. `src/data/people.ts:481`
   - now: `Found, it speaks in Fiona Murray's voice: \"Edwin abandoned us, he shut himself away in our home.\" and \"We must convince him to repair M2.\" [[secret-of-the-mimic-f10n4-reveal]]`
   - should read: `Found, it speaks in Fiona Murray's voice: \"Edwin abandoned us. He shut himself away in our home.\" and \"We must convince him to repair M2.\" [[secret-of-the-mimic-f10n4-reveal]]`
4. `src/data/chapters/makers.ts:29`
   - now: `The call goes on: \"As per his contract, everything he's been working on for us is now legally ours.\" [[secret-of-the-mimic-dispatch-contract-legally-ours]]`
   - should read: `The call goes on: \"As per his contract, everything he's been working on for us is now legally ours, so we're sending you in to get it.\" [[secret-of-the-mimic-dispatch-contract-legally-ours]]`
   - why: on screen the sentence does not end at "ours". If you want it short, put the full stop outside the quotation marks.

The other sentences that quote these four records quote fragments that still match the screen (`makers.ts:84` and `people.ts:489` "36-hour shift"; `theory.ts:71`, `people.ts:281`, `people.ts:297`, `timeline.ts:96` "is now legally ours", "gone quiet").

### 3b. Help Wanted 2's main ending, now seen (7)

Seen: a hand at the door, painted S.T.A.F.F. bots, "[STARTING UP...]", a girl taking a rabbit mask from two robot hands. Not made out: that the hand is a rabbit costume's.

5. `src/data/chapters/afterimage.ts:200`
   - now: `Help Wanted 2's main ending has a rabbit-costumed arm reaching out of a recharge station [[hw2-faz-force-ending]], and the rabbit in the code glitches that game's instruction screens [[hw2-glitchtrap-corrupts-backstage]].`
   - should read: `Help Wanted 2's main ending has a hand gripping the door of a recharge station from inside, a rabbit costume's by a fan wiki's account [[hw2-faz-force-ending]], and the rabbit in the code glitches that game's instruction screens [[hw2-glitchtrap-corrupts-backstage]].`
6. `src/data/chapters/afterimage.ts:204`
   - now: `and a rabbit-costumed arm reaches out in the main ending [[hw2-faz-force-ending]] (as described): the games show the thing fought from inside, and do not show that it worked.`
   - should read: `and a hand, a rabbit costume's by a fan wiki's account, grips a recharge station's door from inside in the main ending [[hw2-faz-force-ending]]: the games show the thing fought from inside, and do not show that it worked.`
7. `src/data/chapters/underground.ts:87`
   - now: `In it (as described) a large box on the stage is unwound to uncover a recharge station, and an arm in a rabbit costume comes out.`
   - should read: `In it a large box on the stage bursts open to uncover a recharge station, and a hand, a rabbit costume's by a fan wiki's account, grips its door from inside.`
   - The next sentence, `The view then cuts to a robot holding a rabbit mask out to a girl [[hw2-faz-force-ending]].`, is what the screen shows and can stand.
8. `src/data/people.ts:439`
   - now: `By the wiki's summaries of the main ending, a box on the stage opens into a recharge station, a rabbit-costumed arm comes out of it, and staff robots close in [[hw2-faz-force-ending]].`
   - should read: `In the main ending a box on the stage bursts open to uncover a recharge station, a hand grips its door from inside (a rabbit costume's, by a fan wiki's account), and staff robots close in [[hw2-faz-force-ending]].`
9. `src/data/people.ts:874`
   - now: `By the wiki's summaries, Help Wanted 2's main ending cuts to a staff robot starting up and holding a rabbit mask out to a girl [[hw2-faz-force-ending]]`
   - should read: `Help Wanted 2's main ending cuts to a robot starting up and holding a rabbit mask out to a girl [[hw2-faz-force-ending]]`
   - why "a robot": the view is the robot's own, and only its two white hands are in the picture.
10. `src/data/timeline.ts:362`
    - now: `By a fan wiki's summaries of the ending, when its pieces are joined a large box appears on the stage and uncovers a recharge station, a rabbit-costumed arm reaches from it, and the scene cuts to a robot holding a rabbit mask out to a girl [[hw2-faz-force-ending]].`
    - should read: `In the main ending a large box on the stage bursts open to uncover a recharge station, a hand grips its door from inside (a rabbit costume's, by a fan wiki's account), and the scene cuts to a robot holding a rabbit mask out to a girl [[hw2-faz-force-ending]].`
11. `src/data/places.ts:132`
    - now: `Its levels are the company's staging; the gift on its stage and, by a fan wiki's summaries of the ending, the recharge station inside it are not [[hw2-faz-force-ending]].`
    - should read: `Its levels are the company's staging; the gift on its stage and the recharge station inside it are not [[hw2-faz-force-ending]].`

### 3c. The wrecked Bonnie, now seen (2)

Seen: a wrecked blue rabbit animatronic on the floor of a dark room. The scene prints no name, and that the room is hidden and at Bonnie Bowl is still the wiki's, so I took "hidden" out with the tag. If you keep "hidden", keep a tag for it.

12. `src/data/chapters/afterimage.ts:248`
    - now: `Where the staff went, and what happened to the Bonnie that lies broken in a hidden room in RUIN, the game's sequel [[ruin-glamrock-bonnie-remains-hidden-room]] (as described), are open (see ((open))).`
    - should read: `Where the staff went, and what happened to the Bonnie that lies broken in a room in RUIN, the game's sequel [[ruin-glamrock-bonnie-remains-hidden-room]], are open (see ((open))).`
13. `src/data/chapters/apparatus.ts:399`
    - now: `RUIN has Bonnie lying broken in a hidden room [[ruin-glamrock-bonnie-remains-hidden-room]] (as described), unexplained.`
    - should read: `RUIN has Bonnie lying broken in a room [[ruin-glamrock-bonnie-remains-hidden-room]], unexplained.`

### 3d. Princess Quest III, now seen (2)

Seen: the mask and plush icons give way to a key, "This door appears to be locked.", and "ERROR" on the cabinet in the comic that follows. Not checked: the copy of Help Wanted's hub, the door like that game's, the scream.

14. `src/data/chapters/afterimage.ts:199` (it carries no tag today and tells the wiki's account as fact)
    - now: `The third game's Princess crosses a pixel copy of Help Wanted's hub and corn maze, trades a rabbit mask and a plush for a key, and strikes a door like the one at the end of Help Wanted; there is a scream, and the cabinet shows \"ERROR\" [[security-breach-pq3-help-wanted-hub-trapped-door]].`
    - should read: `The third game's Princess finds a door locked and is left with a key in place of a rabbit mask and a plush, and the cabinet then shows \"ERROR\"; by a fan wiki's account the game is a pixel copy of Help Wanted's hub and corn maze, she strikes a door like the one at the end of Help Wanted, and there is a scream [[security-breach-pq3-help-wanted-hub-trapped-door]].`
15. `src/data/people.ts:698`
    - now: `By the wiki's account, Security Breach's third game is set in a copy of Help Wanted's hub: the Princess strikes a door like the one in that game's Trapped ending, and the cabinet shows \"ERROR\" [[security-breach-pq3-help-wanted-hub-trapped-door]].`
    - should read: `By the wiki's account, Security Breach's third game is set in a copy of Help Wanted's hub and the Princess strikes a door like the one in that game's Trapped ending; the cabinet then shows \"ERROR\" [[security-breach-pq3-help-wanted-hub-trapped-door]].`

### 3e. Burn It All Down: four sentences that say more than the picture shows (4)

Not contradicted, but the cutscene shows the mass take hold of the rabbit and lift it out of the picture; no ceiling is in view, and I saw no burner rooms (the fight is in an office with monitors). The record now gives both as the wiki's.

16. `src/data/chapters/afterimage.ts:271`
    - now: `"The boy beats the burnt rabbit under the Pizzaplex among rooms of burners, and a mass of animatronic parts drags it into the ceiling [[security-breach-ending-burn-it-all-down]]"`
    - should read: `"The boy beats the burnt rabbit under the Pizzaplex, and as the place burns a mass of animatronic parts takes hold of it and lifts it out of sight [[security-breach-ending-burn-it-all-down]]"`
17. `src/data/chapters/underground.ts:37`
    - now: `In the ending below ground the rabbit is beaten among the burners, and the mass pulls it up into the ceiling [[security-breach-ending-burn-it-all-down]].`
    - should read: `In the ending below ground the rabbit is beaten, and as the place burns the mass takes hold of it and lifts it out of sight [[security-breach-ending-burn-it-all-down]].`
18. `src/data/people.ts:547`
    - now: `In the one ending that reaches it, a mass of animatronic parts seizes it as the place burns and pulls it into the ceiling [[security-breach-ending-burn-it-all-down]].`
    - should read: `In the one ending that reaches it, a mass of animatronic parts seizes it as the place burns and lifts it out of sight [[security-breach-ending-burn-it-all-down]].`
19. `src/data/people.ts:627`
    - now: `In the one ending that goes underground it seizes the burnt rabbit under the Pizzaplex as the place burns, and pulls it into the ceiling [[security-breach-ending-burn-it-all-down]].`
    - should read: `In the one ending that goes underground it seizes the burnt rabbit under the Pizzaplex as the place burns, and lifts it out of sight [[security-breach-ending-burn-it-all-down]].`

For R19 (4): the ending shows fire and falling debris from inside and the two running out through rubble. It does not show the building from outside or what is left of it. So it supports "the place was burning and coming down when they left", and no more.

### 3f. The bodies in costumes: four sentences that say it flat (4)

The record's claim now reads "By the wiki's account Arnold finds bodies in character suits", because I could not make them out in the recording (check 4). These four state it without a tag.

20. `src/data/chapters/makers.ts:86`
    - now: `There are bodies inside character costumes, most likely those of the technicians before him, who by the voice's account lost limbs and bled to death [[secret-of-the-mimic-previous-technicians]].`
    - should read: `By a fan wiki's account there are bodies inside character costumes, most likely those of the technicians before him, who by the voice's account lost limbs and bled to death [[secret-of-the-mimic-previous-technicians]].`
21. `src/data/theory.ts:71`
    - now: `and there are bodies inside character costumes, most likely those of the technicians before him [[secret-of-the-mimic-previous-technicians]].`
    - should read: `and by a fan wiki's account there are bodies inside character costumes, most likely those of the technicians before him [[secret-of-the-mimic-previous-technicians]].`
22. `src/data/people.ts:489`
    - now: `Inside he finds bodies in character suits, and the Dispatch voice on his radio says that previous technicians lost limbs and died of blood loss; that the bodies are theirs is the usual reading, and it rests on that voice's account [[secret-of-the-mimic-previous-technicians]].`
    - should read: `By a fan wiki's account he finds bodies in character suits inside, and the Dispatch voice on his radio says that previous technicians lost limbs and died of blood loss; that the bodies are theirs is the usual reading, and it rests on that voice's account [[secret-of-the-mimic-previous-technicians]].`
23. `src/data/timeline.ts:96`
    - now: `There are bodies inside character costumes; the Dispatch voice says the previous technicians \"died from blood loss\" [[secret-of-the-mimic-previous-technicians]], and that the bodies are theirs is the usual reading.`
    - should read: `By a fan wiki's account there are bodies inside character costumes; the Dispatch voice says the previous technicians \"died from blood loss\" [[secret-of-the-mimic-previous-technicians]], and that the bodies are theirs is the usual reading.`

### 3g. Tags that should stay

- `[[ffps-credits-returning-voices]] (a fan wiki's account)` at `reckoning.ts:148`, `people.ts:607`, `people.ts:611`, `people.ts:619` and `timeline.ts:288`: Pizzeria Simulator's half is now read on screen, but each sentence compares it with Sister Location's credits, which I did not read. The tag can go once that roll is read.
- `ffps-completion-fire`: no sentence carries a hedge, and what they say (three machines shown burning, the rabbit among them, nobody shown lighting it) is what the screen shows. One caution: "during the speech" (`reckoning.ts:92`) was not checked, since the sound was not heard.
- `fnaf2-give-gifts-give-life` (`people.ts:88`, `:92`, `:555`, `timeline.ts:156`), `ruin-vanny-hideout-glitchtrap-shadow` (`underground.ts:159`, `people.ts:351`, `:540`), `ruin-mimic-lair-mcm-mascot-suits` (`underground.ts:75`), `secret-of-the-mimic-work-order-1979` (`timeline.ts:96`, `places.ts:16`, `people.ts:489`): not found, so their hedges stand.
- `security-breach-credits-vanessa-vanny-two-parts`: the two sentences in `afterimage.ts` (194, 204) no longer carry a tag, so nothing to do.
- A code comment, not prose: `underground.ts:111` still says "Mask Bot gives Cassie a Security Mask"; the subtitle label is "Maskbot".

## 4. Images added

Ten, all JPEG, all cut from frames of the recordings so that the player's camera inset is outside the crop. Each has a credit in the group's credits file with the archive.org item as `sourcePage`, and the record's `image` is set. I looked at every one after cropping.

| file | size | record | cut from |
|---|---|---|---|
| `sb-credits-cast-list.jpg` | 1010×482, 69 kB | `security-breach-credits-cast-list` | big archive, Security Breach Part 10, 1:03:13 (1080p). "Cast" and all seven lines, whole. The roll's title line above is half behind the camera inset, so the crop starts below it. |
| `sotm-cabinet-subtitle-labels.jpg` | 1280×620, 81 kB | `secret-of-the-mimic-reveal-subtitle-labels` | Secret of the Mimic Part 7, the lower part of three frames set one above the other: 46:34 "DISPATCH: Error...", 46:38 "F10 N4: You give me no other option.", 46:50 "FIONA: And here you are." |
| `ruin-helpi-the-entity-text-box.jpg` | 1280×464, 63 kB | `ruin-helpi-entity-bypassed-signal-jammer` | RUIN Part 3, 5:12, the lower two thirds of the frame |
| `sb-closing-announcement-entrance.jpg` | 1280×462, 80 kB | `security-breach-intercom-pizzaplex-now-closed` | Security Breach Part 1 (720p), 23:12, the lower part of the frame. **The clock is not in it**: it stands at the top right, the subtitle runs under the camera inset at the left, and no rectangle holds both without the inset. The notes say so. |
| `hw2-ending-girl-takes-rabbit-mask.jpg` | 1100×797, 50 kB | `hw2-faz-force-ending` | big archive, Help Wanted 2 Part 14, 28:23 |
| `ffps-completion-three-machines-burning.jpg` | 1280×428, 98 kB | `ffps-completion-fire` | big archive, Pizzeria Simulator Part 5, three frames side by side: 9:46, 9:53, 10:01 |
| `ruin-wrecked-bonnie.jpg` | 1200×861, 68 kB | `ruin-glamrock-bonnie-remains-hidden-room` | RUIN Part 6, 25:34 |
| `sd-inbox-times-of-day.jpg` | 778×1080, 118 kB | `sd-mail-server-advisory` | big archive, Special Delivery Part 1, 10:51 (the phone's screen) |
| `ffps-credits-cast.jpg` | 600×810, 24 kB | `ffps-credits-william-afton` | big archive, Pizzeria Simulator Part 5, 12:00 |
| `sb-pq3-cabinet-error.jpg` | 844×670, 93 kB | `security-breach-pq3-help-wanted-hub-trapped-door` | Security Breach Part 9 (720p), 3:24:56. The panel is cut at the left (the sprayed "VANNY" loses its first letter), and the game's own prompt "Hold E Skip" lies over it. If that is not clean enough for you, drop this one: delete the file, its credit and the record's `image`. |

Two composites (the three subtitle bands, the three burning machines) are several frames in one file; the captions say so. Not made: an image of the hand at the recharge station's door (one image per record, and the girl with the mask says more).

## 5. `research/open-checks.md`: sentences to change

Under "Checks that need the game, a capture or a recording":

- **1.** Add: "Looked for in a recording (Part 1, 18:15 to 20:06): forms with a Fazbear letterhead are in the van, but no date can be read and no credential was made out. Still open; it needs the game or a capture that stops on the papers."
- **4.** Replace the last sentence with: "The voice's line is read on screen (Part 1, 1:24:10 to 1:24:26, labelled `DISPATCH:`) and is as the record has it. The bodies are still not seen: costumed figures lie near the cabinet's room (Part 7, 44:58 to 45:15) and nothing on screen says they are bodies."
- **5.** Replace the second sentence with: "No subtitle states either death, and none says 'wife': an index of the subtitles of one whole playthrough has no such line. One staff message does say 'her death' of Fiona, 'Did they fake her death for insurance money?', read on screen (Part 6, 27:56; `secret-of-the-mimic-mail-heard-fiona`). It is a staff member's word and does not say how she died. Nothing is found for David."
- **6.** Add: "One prototype was seen in a recording (Part 7, 43:28: a dark metal bear with a top hat on a small stage); the yellow two were not found."
- **7.** Add: "The room is too dark in the recording looked at (RUIN Part 7, 5:36 to 6:10) to make out any costume. Still open."
- **8.** Replace with: "**RUIN: the rabbit's shadow in the hideout** (`ruin-vanny-hideout-glitchtrap-shadow`): still described from the wiki; not found in a recording. The wrecked Bonnie is settled: seen in a recording (RUIN Part 6, 24:40), a wrecked blue rabbit animatronic with lit eyes on a dark floor. That the room is hidden and at Bonnie Bowl is still the wiki's."
- **9** and **12** were settled in the first round (`ruin-helpi-alert-anomalous-entity`, `ruin-helpi-entity-bypassed-signal-jammer`; `security-breach-credits-cast-list`).
- **10.** Replace with: "Settled as far as a picture goes: watched in a recording (Help Wanted 2 Part 14, 26:54 to 28:48). The girl is shown full face and no name is printed; what the robot holds out is a white rabbit mask like RUIN's Security Mask. Only a hand shows at the recharge station's door: 'rabbit-costumed' is the wiki's. Its place between Security Breach and RUIN is still 'most likely' (R22)."
- **11.** Replace with: "Settled as far as a picture goes. Princess Quest III (Security Breach Part 9, 3:22:40 to 3:25:11): 'This door appears to be locked.', a key in place of the mask and plush, and 'ERROR' on the cabinet in the comic that follows; the copy of Help Wanted's hub, the door like that game's and the scream are still the wiki's. Burn It All Down (Part 10, 1:02:32): the place burns and comes down from inside as the two run out; the building is not shown from outside or afterwards, so R19 (4) gets 'it was coming down when they left' and no more."
- **14.** Replace with: "Settled: watched (Pizzeria Simulator Part 5, 9:43 to 10:12). Scrap Baby, Molten Freddy and the salvaged rabbit among flames, one after another; Lefty is in none of the shots."
- **16.** Add: "No recording of the minigame was found (one long replay of the game and the 2014 series were looked through). Still open."
- **17.** Replace with: "Seen in a recording (Special Delivery Part 1, 10:51; Part 2, 2:40): each row of the inbox carries a time of day (as '11:31:31 PM') and no date. Every row seen was from the session being played, so whether an older email is listed with a date is not known. R24 (2) stands. The sixteen `when.basis` strings that say 'Whether the inbox screen showed a date was not verified.' could now read: 'In a recording the inbox lists each email with a time of day and no date (sd-mail-server-advisory).'"
- **13, 15, 18:** untouched, as asked.

## 6. What I could not find

- The date on the work order and the credential form, legible in play (check 1).
- The bodies in costumes, as bodies (check 4); any subtitle stating Fiona's or David's death, any line at all for David's, or the word "wife" (check 5); the two yellow prototypes (check 6).
- Any costume in RUIN's sealed room (check 7); the rabbit's shadow, the sprayed name and the toppled cabinet in the hideout (check 8).
- That the hand at the recharge station is a rabbit costume's (check 10).
- The scream after Princess Quest III and anything else that needs the sound; the scene after the credits of Burn It All Down, which I did not look at (check 11).
- The fifth body in Give Gifts, Give Life, or any recording of that minigame (check 16).
- A date in Special Delivery's inbox, or an email from an earlier day in the list (check 17).
- Glamrock Freddy's "What if I am not the first Glamrock Freddy?" on screen (Part 1's last item).
- Sister Location's credits roll, and the eleven Part 3 scenes listed at the end of section 1, which I did not reach.

Scratch material, if you want to look for yourself: frames in `evgaps/frames/`, the subtitle index in `evgaps/ocr/`, the edit scripts with every old and new text in `evgaps/r2/` (`part1.py`, `part2.py`, `part4.py`, `part4b.py`, `part5.py`), and the committed state of the evidence files in `evgaps/r2/before/` (all under the session's `files/` folder).
