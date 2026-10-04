# The last records: report of the evidence analyst (2026-10-03)

Worktree `~/src/fnaf-canon-wt/theory`, branch `ws/theory`. I started on `27bc6b0`; the branch now stands at `db4ad4f` (the orchestrator's commit of 16:33, which touches `scripts/validate.ts`, `src/data/schema.ts` and `src/data/theory.ts`, none of them mine). My changes are uncommitted on top of it, and the checks below were run last at 17:01 on that state. I committed nothing and started no server.

**18 records added** (1,046 to 1,064). `npx tsx scripts/validate.ts` ends `OK` with `theory coverage: 1064/1064 accounted (cited inline 663, counter-evidence 111, filed as further 362, outside the story 70); unaccounted 0` and no warning; `npx tsc -b` prints nothing. `git status --short` shows ten files: four evidence files, five chapter files and `people.ts`.

What changed, and nothing else:

- `src/data/evidence/ffps-ucn.json` +5 records, `sb-mimic.json` +12, `scott.json` +1. Each file is written as `json.dumps(data, indent=2, ensure_ascii=False)` with no trailing newline (checked by re-serialising all six files).
- Sixteen existing records had new ids appended to an existing `related` list (the one edit the brief allows); a script compared every old record with `HEAD` and found no other difference. `fnaf123.json` changed in this way only. The sixteen are listed at the end of section 1.
- Eighteen lines added to five `further` lists (`canon-rules` 10, `two-machines` 3, `pizzaplex` 2, `mimic` 2, `fazbears-fright` 1). No prose changed.
- `people.ts`: new ids appended to the `evidence` lists of seventeen people; nothing else.

**One thing I did that I should not have.** To compare the validator's warnings before and after (there are none either way), I ran `git stash`, the validator, and `git stash pop` in the shared worktree, from 16:32:58 to about 16:33:40. The orchestrator's commit `db4ad4f` is stamped 16:33:42. `git status` listed only my ten files a minute before the stash and again right after the pop, the pop reported no conflict, and the stash list is empty, so nothing was lost; but if the tree looked wrong for half a minute around 16:33, that was the cause.

## What I decided

1. **Captures of play as a source.** The brief names the wiki, the wiki's API and Steam's APIs. YouTube cannot be reached from this machine, but archive.org holds copies of one player's (Markiplier's) full recordings of RUIN, Security Breach, Secret of the Mimic and Into the Pit, and frames can be read out of them at any timestamp. About thirty existing records (FNaF4's and FNaF World's minigames, Sister Location) already give "read on screen in a 720p capture" as how they were verified, and the wording rules use "printed" only of words seen in play or in a capture of play. So where a capture shows the words, I read them there and quote the screen; the wiki's transcript, where there is one, is given beside it. Twelve of the eighteen records rest on a capture, five on Steam's news API and one on Steam's store API. Every capture record says in its notes that it was read from a recording, that this archive has not checked it in play, and the part and time. The frames I read are kept as JPEGs under `…/files/evgaps/frames/` and named in section 2.
2. **How a subtitle is quoted.** Security Breach, RUIN and Secret of the Mimic print the speaker's label on its own line above the words. I run label and words together (`DISPATCH: Arnold! Hey buddy, …`) and say so in the notes. Consecutive lines are joined with ` / `, an omission is `…`, and the game's own trailing dots are written as three full stops so that they cannot be taken for an omission. The archive has no curly quotation marks in any quote, so the screen's curly marks around "Data Diver" and "AR Inhibitor" are written straight; the notes of the RUIN record say that the screen's are curly.
3. **Five records for Scott's guide, not two.** The brief asks for the fewest records that put each printed name on file with a real quotation of at most 45 words. Eleven headings are wanted (RXQ aka Shadow Bonnie, Withered Chica, Withered Bonnie, JJ, The Marionette, a Phantom, a Nightmare, a Rockstar, a Funtime, Scrap Baby, Lefty); their shortest sentences come to about 160 words, which is four quotations beside the one for RXQ. The fourth carries the whole list of 51 headings in its notes, so every other name in the guide is on file as well.
4. **One record for the three Glamrock names.** I had planned a record for Freddy's spoken "What if I am not the first Glamrock Freddy?" (the wiki's transcript). The credits roll, found in the capture, prints all three names in one cast list of 39 words, so one record does it and is read from the screen. Freddy's line stays where it is, in the notes of `security-breach-freddy-where-i-was-born`, and the new record points to it.
5. **Three records beyond the six items.** One is a fact of the same kind met on the way: the subtitle label "Maskbot". Two are not namings: the change of subtitle label at the cabinet (it bears on check 3), and the cabinet sending Arnold to Edwin with "a message" (it bears on check 2). I added those two because they are words of the game, read on screen, that test R21 (1) directly. If they are not wanted they can be removed without touching anything else: each is in one `further` list, in `f10-n4`'s evidence list and in `related` lists.
6. **Images.** I added no image file. One record (`secret-of-the-mimic-f10-n4-cabinet-lettering`) uses an image already on file and credited, `sotm-f10n4-and-mxes-cabinets.jpg`, whose left third shows the lettering.
7. **`people` tags** only where the line names the person or the screen shows the figure. On the cast list I tagged the five people the record is about and left out Gregory, Roxanne and the S.T.A.F.F. bots, whom the list also names. `the-entity` is tagged on Helpi's two records: the first shows the figure, the second names "the entity" in the line.
8. **`related` on existing records** was added only where a list already existed; five records I would have linked have no list and were left alone (`fnaf2-jj-endo-puppet-visions`, `hw2-mimic-teaser-mxes-ending`, `secret-of-the-mimic-f10n4-reveal`, `secret-of-the-mimic-ending-unfinished-business`, `security-breach-6am-choice`).

## 1. The records added

| # | id | file | filed under | what it puts on file |
|---|----|------|-------------|----------------------|
| 1 | `scott-ucn-character-guide-rxq-shadow-bonnie` | `ffps-ucn.json` | `canon-rules` | Scott's own line 'RXQ aka Shadow Bonnie', whole |
| 2 | `scott-ucn-character-guide-withered-chica-bonnie` | `ffps-ucn.json` | `canon-rules` | the guide's headings 'Withered Chica' and 'Withered Bonnie'; 'Ennard', 'Molten Freddy', 'Springtrap' and 'Mangle' in running text |
| 3 | `scott-ucn-character-guide-jj-marionette-phantom-mangle` | `ffps-ucn.json` | `canon-rules` | the guide's headings 'JJ', 'The Marionette' and 'Phantom Mangle' |
| 4 | `scott-ucn-character-guide-lefty-funtime-rockstar` | `ffps-ucn.json` | `canon-rules` | the guide's headings 'Lefty', 'Funtime Foxy' and 'Rockstar Bonnie', and all 51 headings in order (in the notes) |
| 5 | `scott-ucn-character-guide-nightmare-scrap-baby` | `ffps-ucn.json` | `canon-rules` | the guide's headings 'Circus Baby, Nightmare Bonnie, and Nightmare Mangle' and 'Scrap Baby' |
| 6 | `into-the-pit-oswald-named-in-dialogue` | `sb-mimic.json` | `canon-rules` | that Into the Pit itself prints 'Oswald': spoken to him in the first line, and as his own speaker label |
| 7 | `secret-of-the-mimic-opening-call-arnold-dispatch` | `sb-mimic.json` | `canon-rules` | 'Arnold' and 'dispatch' as spoken in the opening call, and the subtitle labels 'DISPATCH:' and 'ARNOLD:' |
| 8 | `secret-of-the-mimic-f10-n4-cabinet-lettering` | `sb-mimic.json` | `canon-rules` | the name 'F10-N4' as lettered on the cabinet |
| 9 | `secret-of-the-mimic-reveal-subtitle-labels` | `sb-mimic.json` | `two-machines` | the subtitle label of the voice changing 'DISPATCH' to 'F10 N4' to 'FIONA' at the cabinet, and Arnold's 'A computer? Your voice changed.' |
| 10 | `secret-of-the-mimic-cabinet-message-for-edwin` | `sb-mimic.json` | `two-machines` | the cabinet sending Arnold to the main house with 'a message for him' (Edwin) |
| 11 | `security-breach-credits-cast-list` | `sb-mimic.json` | `canon-rules` | 'Glamrock Freddy', 'Glamrock Chica' and 'Montgomery Gator' as printed in the credits roll; the whole cast list, read from a capture of the roll |
| 12 | `ruin-maskbot-subtitle-label` | `sb-mimic.json` | `canon-rules` | the subtitle label 'Maskbot' for the robot the archive calls Mask Bot |
| 13 | `secret-of-the-mimic-dispatch-data-diver-master-key` | `sb-mimic.json` | `two-machines` | what the Data Diver is, in the game's words: a tool 'to access the building', 'your master key to the MCM facility' |
| 14 | `security-breach-intercom-pizzaplex-now-closed` | `sb-mimic.json` | `pizzaplex` | the closing announcement at 12:00 AM with Gregory inside: 'now closed', 'I'm still here!' |
| 15 | `security-breach-freddy-doors-reopen-6am` | `sb-mimic.json` | `pizzaplex` | Freddy's line that the security doors reopen at 6:00 am |
| 16 | `scott-2015-fnaf3-store-owners-revive-the-legend` | `scott.json` | `fazbears-fright` | Scott's words for who runs Fazbear's Fright: 'the owners', unnamed |
| 17 | `ruin-helpi-alert-anomalous-entity` | `sb-mimic.json` | `mimic` | Helpi's first alert: 'an anomalous entity in the V.A.N.N.I. network' |
| 18 | `ruin-helpi-entity-bypassed-signal-jammer` | `sb-mimic.json` | `mimic` | Helpi's 'the entity', lower-case, with the definite article |

All are `stated` except `secret-of-the-mimic-f10-n4-cabinet-lettering` (`shown`, after the model of `ruin-prototype-freddy-headless`). The `when` block of each is copied whole from a neighbour: `scott-ucn-character-guide-afton`, `scott-2015-fnaf3-store-thirty-years`, `security-breach-freddy-where-i-was-born`, `security-breach-credits-vanessa-vanny-two-parts`, `ruin-the-entity`, `secret-of-the-mimic-dispatch-contractor-murray`, `into-the-pit-jeffs-pizza-ball-pit`.

People whose `evidence` list gained an id: `shadow-bonnie` (1); `chica`, `bonnie` (2); `jj`, `puppet`, `phantom-mangle` (3); `oswald` (6); `arnold`, `dispatch` (7); `f10-n4` (8, 9, 10); `glamrock-freddy`, `glamrock-chica`, `montgomery-gator` (11); `mask-bot` (12); `gregory` (14); `helpi`, `the-entity` (17, 18).

Existing records whose `related` list gained an id: `scott-ucn-character-guide-afton` (1, 4), `fnaf2-shadow-bonnie-office` (1), `fnaf3-shadow-bonnie-minigame` (1), `fnaf2-custom-night-names` (2), `secret-of-the-mimic-dispatch-contractor-murray` (7), `secret-of-the-mimic-arnold-assignment` (7), `secret-of-the-mimic-mxes-machine` (8), `secret-of-the-mimic-clock-out-real-dispatch` (9), `security-breach-credits-vanessa-vanny-two-parts` (11), `ruin-mask-bot-helpi-vanni` (12), `secret-of-the-mimic-ending-clock-out` (13), `scott-2015-fnaf3-store-thirty-years` (16), `scott-fnaf3-steam-description` (16), `fnaf3-coming-soon-newspaper` (16), `ruin-the-entity` (17, 18), `ruin-fake-gregory-signal-jammer` (18).

## 2. Each record, its source, and the source's words

The final text of all eighteen records is also in one file, `…/files/evgaps/new-records.json`, copied out of the evidence files after the last edit.

### The sources

**S1. Steam's news API.** `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=871720&count=100&maxlength=0`, fetched 2026-10-03: 13 items. The item titled `Character Guide` has author `Scott`, date `1529071900` (2018-06-15 14:11:40 UTC), gid `2842216343263643020`, 19,935 characters. It is byte for byte the copy in the cache (`/tmp/wiki-cache/ffps-ucn/steam/ucn-character-guide.txt`). Saved as `evgaps/steam-news-871720-recheck.json`; the text alone as `evgaps/ucn-character-guide-fetched-2026-10-03.txt`. The guide is one opening paragraph, a rule, the line `Character List:` and then 51 entries, each one line of the form `Name: text`, with a blank line between them.

**S2. Steam's store API.** `https://store.steampowered.com/api/appdetails?appids=354140`, fetched 2026-10-03 (`name` "Five Nights at Freddy's 3", `developers` ['Scott Cawthon'], `publishers` ['Scott Cawthon']). The fields `about_the_game` and `detailed_description` hold the same text. Saved as `evgaps/steam-appdetails-354140.json`.

**S3. Captures of play at archive.org** (frames taken 2026-10-03 with PyAV straight from the files; times are minutes:seconds into the file):

- RUIN: item `markipliers-playthrough-of-fnaf-sb-ruin`, files `00 Five Nights at Freddy's Security Breach： RUIN - Part 1.mp4` and `02 … Part 3.mp4` (1920×1080).
- Security Breach: item `markiplier-fnafsb`, files `Five Nights at Freddy's： Security Breach - Part 1 [ClQ-ymoXJZc].mp4`, `… Part 7 [egv6bruhPNI].mp4`, `… Part 9 [nByMYn4st1A].mp4` (1280×720). The bracketed codes are the YouTube ids of the uploads.
- Secret of the Mimic: item `markiplier-plays-fnaf-secret-of-the-mimic`, files `Five Nights at Freddy's： The Secret of the Mimic - Part 1 [wSa-sjaLVOM].mp4`, `… Part 7 [7MwPlQ9b_Ag].mp4`, `… Part 8 [j1hOdMnKuYw].mp4` (1920×1080).
- Into the Pit: item `markipliers-five-nights-at-freddys-archive-2014-2025`, file `Five Nights at Freddy's; Into The Pit - Part 1 (1080p_60fps_H264-128kbit_AAC).mp4` (1920×1080).

A frame can be had again with `evgaps/grab.py URL frames/PREFIX START END STEP` (seconds), the URL being `https://archive.org/download/<item>/<file>`. I saw the picture and did not hear the sound.

**S4. The wiki** (`freddy-fazbears-pizza.fandom.com`), pages fetched 2026-10-03 through `api.php?action=parse`, with revision ids: Phone 3507448; Dispatch 3513706; F10-N4 3534500; Data Diver 3536962; Dread Unit 3524562; Glamrock Freddy/Audio 3536558; Gregory/Audio 3520197; Vanessa/Audio 3452330; Five Nights at Freddy's: Security Breach/Credits 3541423; Mask Bot 3541774; Helpi 3526185; AR Inhibitor 3534187; Chapter 4 (RUIN) 3539463; The Entity 3541957. Wikitext saved under `evgaps/wiki/`. Wiki lines below are copied with their markup.

### 1. `scott-ucn-character-guide-rxq-shadow-bonnie`

*Scott's UCN Character Guide: 'RXQ aka Shadow Bonnie'*

Quote in the record:

```
RXQ aka Shadow Bonnie: He will cause your office to become pitch black for about ten seconds. There is no way to avoid him.
```

Source: S1. The entry, whole (the 49th of 51; the line before it is `Dee Dee: …`, the line after `Plushtrap: …`):

```
RXQ aka Shadow Bonnie: He will cause your office to become pitch black for about ten seconds. There is no way to avoid him.
```

### 2. `scott-ucn-character-guide-withered-chica-bonnie`

*Scott's UCN Character Guide: 'Withered Chica' and 'Withered Bonnie'*

Quote in the record:

```
Withered Chica: She is the last of the five vent-crawlers. … While her girth prevents Ennard, Molten Freddy, and Springtrap from passing, Mangle can still get through. … Withered Bonnie: He slips in through the trapdoor while you are viewing your monitor.
```

Source: S1. The entry for Withered Chica, whole (the 22nd):

```
Withered Chica: She is the last of the five vent-crawlers. Withered Chica can be blocked by the vent snare as well as the vent door. Unlike Ennard and the others, she gives no audio cue when she is at the door, meaning you need to track her position using the vent radar. If she reaches the vent door, she will become stuck in it, preventing you from closing it for the rest of the night. While her girth prevents Ennard, Molten Freddy, and Springtrap from passing, Mangle can still get through. While this may seem like a strategic advantage, keep in mind that Withered Chica may eventually wiggle free and jumpscare you.
```

The entry for Withered Bonnie, whole (the 34th):

```
Withered Bonnie: He slips in through the trapdoor while you are viewing your monitor. You'll know he's there by the audio and visual distortions he causes just by standing there ominously. You only have a short amount of time to put on the mask to ward him off, otherwise a jumpscare is all you'll have to look forward to.
```

### 3. `scott-ucn-character-guide-jj-marionette-phantom-mangle`

*Scott's UCN Character Guide: 'JJ', 'The Marionette' and 'Phantom Mangle'*

Quote in the record:

```
JJ: She will also try to sneak in through the side vent. … The Marionette: If you neglect its music box then it will break free of its prison. … Phantom Mangle: Will appear at random in your viewing monitor.
```

Source: S1. The entries for JJ (the 4th), The Marionette (the 8th) and Phantom Mangle (the 20th), each whole:

```
JJ: She will also try to sneak in through the side vent. Close the side vent and wait until you hear a thud indicating she is gone. If JJ slips in, she will disable all door controls until she leaves.

The Marionette: If you neglect its music box then it will break free of its prison. Once out, it can't be put back inside, and your ventilation system will drain much faster than it did before, causing blackouts and eventually a game over.

Phantom Mangle: Will appear at random in your viewing monitor. Close the monitor or switch viewing modes to make it disappear. If left onscreen for too long, Phantom Mangle will invade your office temporarily, causing audio distractions and increasing your noise meter, which can attract even more problems.
```

### 4. `scott-ucn-character-guide-lefty-funtime-rockstar`

*Scott's UCN Character Guide: 'Lefty', 'Funtime Foxy', 'Rockstar Bonnie', and its full list of headings*

Quote in the record:

```
Lefty: He sits in the closet off of the left hallway. … Funtime Foxy: He hides behind his curtain waiting for the show to begin. … Rockstar Bonnie: He will occasionally appear in your office and is conspicuously missing his guitar.
```

Source: S1. The entry for Lefty (the 32nd), whole; the first two sentences of the entry for Funtime Foxy (the 37th); the entry for Rockstar Bonnie (the 39th), whole:

```
Lefty: He sits in the closet off of the left hallway. He becomes more and more agitated if the office becomes too noisy or too hot. This state of agitation increases slowly, and will eventually end with Lefty jumpscaring you. Lowering the noise won't reverse the effects, nor will reducing the temperature, and doors won't prevent Lefty from getting to you. The only way to ease his temperament is to switch on the Global Music Box (which soothes all music box animatronics at the expense of extra power being drained).

Funtime Foxy: He hides behind his curtain waiting for the show to begin. Check his stage and read the sign to see when the showtime is; it will always be on the hour, but the hour will be random. [the entry goes on]

Rockstar Bonnie: He will occasionally appear in your office and is conspicuously missing his guitar. In fact, the only way to appease him is to locate his guitar on the camera system and double click on it. Fail to do this in a timely fashion and you'll lower your monitor only to be greeted with a jumpscare.
```

The guide's first paragraph, whole (the notes quote its first two sentences):

```
This is the final character list for Ultimate Custom Night! Most of this was already posted on the Pizzeria Simulator Steam page, but I felt like it was obviously more useful here. You will also be able to see shortened versions of these descriptions in the game itself by moving your mouse cursor over a character icon.
```

The 51 headings in order, as the notes list them (taken from the text by script, and compared with the notes by script):

```
Golden Freddy; Helpy; BB; JJ; Nightmare Fredbear & Nightmare; Phantom Freddy; Old Man Consequences; The Marionette; Nightmarionne; Music Man; Nightmare BB; Happy Frog; Mr. Hippo; Pigpatch; Nedd Bear; Orville Elephant; Springtrap; Molten Freddy; Ennard; Phantom Mangle; Mangle; Withered Chica; Toy Bonnie; Toy Chica; Jack-O-Chica; Rockstar Chica; Freddy Fazbear; Phantom BB; Phone Guy; Nightmare Freddy; Chica; Lefty; El Chip; Withered Bonnie; Funtime Chica; Toy Freddy; Funtime Foxy; Ballora; Rockstar Bonnie; Rockstar Foxy; Circus Baby, Nightmare Bonnie, and Nightmare Mangle; William Afton (AKA Scraptrap); Scrap Baby; Rockstar Freddy; Trash and the Gang; Bonnie; Foxy; Dee Dee; RXQ aka Shadow Bonnie; Plushtrap; ???
```

### 5. `scott-ucn-character-guide-nightmare-scrap-baby`

*Scott's UCN Character Guide: 'Nightmare Bonnie', 'Nightmare Mangle' and 'Scrap Baby'*

Quote in the record:

```
Circus Baby, Nightmare Bonnie, and Nightmare Mangle: They will all approach from the right hall, … Scrap Baby: Once per night, she will appear on the other side of your desk, slouched over and appearing to be decommissioned.
```

Source: S1. The first two sentences of the entry headed `Circus Baby, Nightmare Bonnie, and Nightmare Mangle` (the 41st), and the first two of the entry for Scrap Baby (the 43rd). Between the two entries stands `William Afton (AKA Scraptrap): …`.

```
Circus Baby, Nightmare Bonnie, and Nightmare Mangle: They will all approach from the right hall, but each of them will only attack once per night, and they change their order of attack each night so that you won't know who to expect first. There are two ways to defend against them. [the entry goes on]

Scrap Baby: Once per night, she will appear on the other side of your desk, slouched over and appearing to be decommissioned. There will be a shock panel sitting next to her. [the entry goes on]
```

The guide's other headings with "Nightmare": `Nightmare Fredbear & Nightmare`, `Nightmare BB`, `Nightmare Freddy`, `Nightmarionne`.

### 6. `into-the-pit-oswald-named-in-dialogue`

*Into the Pit prints the name 'Oswald': the father's first line, and the boy's own speaker label*

Quote in the record:

```
Dad: Oswald, it's time to go! … Oswald: Where's the fun in that? I'm almost glad school's starting tomorrow just so I only have to see that place on the weekends now.
```

Source: S3, Into the Pit, Part 1. The game shows dialogue as a line of text low on the screen, the speaker's name in colour before it.

```
01:42   Dad: Oswald, it's time to go!
        (the name `Dad:` in blue; the picture is a hand drawing a rabbit; frame evgaps/frames/itp1a_0001020.jpg)
02:22   Oswald: Where's the fun in that? I'm almost glad school's starting tomorrow just so I only have to see that place on the
        weekends now.
        (the name `Oswald:` in orange; the picture is a man driving, seen from the back seat; frame itp1a_0001420.jpg)
```

`01:42` is the first line of dialogue I found in the recording. Source S4, page `Phone` (the same text as the cached `sb-mimic/Phone.wiki`), for the name in other mouths:

```
* '''Mom''': "Oswald? Is everything alright honey?"
* '''Oswald''': "H...hey Jeff, it's Oswald... Um...weird question, but has anything weird happened since I left?"
* '''Jeff''': "Toilet backed up."
* '''Oswald''': "...so, no?"
* '''Jeff''': "No. Bye, Oswald."
```

### 7. `secret-of-the-mimic-opening-call-arnold-dispatch`

*The opening call: 'Arnold! Hey buddy, this is dispatch with Fazbear Entertainment'; the subtitles label the speakers 'DISPATCH' and 'ARNOLD'*

Quote in the record:

```
DISPATCH: Arnold! Hey buddy, this is dispatch with Fazbear Entertainment. How are you feeling? / ARNOLD: Well, since you asked, I just finished a 36-hour shift... been struggling to stay awake.
```

Source: S3, Secret of the Mimic, Part 1. Subtitles, white, centred, the label in capitals on its own line. The whole call as I read it (frames 2.5 seconds apart; sheets `evgaps/frames/st1a_c_0.jpg` to `st1a_c_2.jpg`):

```
14:59  DISPATCH:  Arnold! Hey buddy, this is dispatch with Fazbear Entertainment. How are you feeling?
15:04  ARNOLD:    Well, since you asked, I just finished a 36-hour shift... been struggling to stay awake. Frankly, I tried to tell my
                  manager that I can't work like this anymore...
15:19  DISPATCH:  Awesome to hear. Well listen, we need you to take one more shift for us since you're our closest technician in the area.
15:27  ARNOLD:    Wait, what? I can barely keep my eyes open!
15:32  DISPATCH:  I know, the grind is exhilarating, isn't it? And we're so happy to have you on the Fazbear team!
15:39  DISPATCH:  You can't fool me thought; you're just trying to snag one of those $25 gift certificates at the end of the year for
                  outstanding performance!
15:47  ARNOLD:    What? No! I'm doing it because you guys keep threatening to dock my pay and repo my truck!
15:54  DISPATCH:  Ha! I love that enthusiasm! So anyway, this will be a piece of cake.
16:02  DISPATCH:  We had this contractor named Edwin Murray; he was developing some tech for us but he's gone quiet.
16:07  DISPATCH:  As per his contract, everything he's been working on for us is now legally ours, so we're sending you in to get it.
16:14  DISPATCH:  Our motion sensors indicate that someone is still inside the building moving around
16:19  DISPATCH:  although the signal is a bit erratic, but we don't expect any kind of confrontation.
16:24  DISPATCH:  We'll follow up with more instructions soon. For now, just follow these directions and find your way into that building!
16:32  ARNOLD:    I hate you.
16:34  DISPATCH:  Amazing. Thanks for being a part of the Fazbear Team! Dispatch, out!
```

("thought" at 15:39 is the screen's.) Source S4, page `Dispatch`, the wiki's transcript of the sound, for comparison:

```
| width="50%" | [[File:DISPATCH 01000.ogg]] || "''Arnold. Hey buddy, this is dispatch with Fazbear Entertainment. How are you feeling?''"
|[[File:DISPATCH 01009.ogg]] || "''Amazing. Thanks for being a part of the Fazbear team! Dispatch out.''"
|[[File:DISPATCH 00504.ogg]]|| "''Arnie, buddy. Check in when you have a chance.''"
```

### 8. `secret-of-the-mimic-f10-n4-cabinet-lettering`

*The cabinet in the mock-up pizzeria's office is lettered 'F10-N4'*

Quote in the record:

```
F10-N4
```

Source: S3, Secret of the Mimic, Part 7, 46:50 to 47:06: a cabinet with two dark screens, a lit centre column and two grids of red and yellow lights; on its front right panel, above the right-hand grid, stencilled capitals `F10-N4` (sheet `evgaps/frames/st7c_sheet.jpg`; enlarged crop of the panel at 46:54, `st7c_f10n4_label.jpg`). Source S4: `File:F10-N4_temp.png` and `File:F10N4_activated_monitors.jpg`, two of the wiki's gameplay captures, show the same lettering in the same place (copies in `evgaps/img/`). The record's image, `public/img/sotm-f10n4-and-mxes-cabinets.jpg`, is already on file and credited to the first of those; the lettering is legible in its left third.

### 9. `secret-of-the-mimic-reveal-subtitle-labels`

*At the cabinet, the subtitle label of the voice runs 'DISPATCH', then 'F10 N4', then 'FIONA'*

Quote in the record:

```
DISPATCH: Error... / F10 N4: You give me no other option. / F10 N4: Enter. / FIONA: And here you are. … ARNOLD: Wait. What? What are you? A computer? Your voice changed. What is going on?
```

Source: S3, Secret of the Mimic, Part 7. Subtitles as above (sheets `st7a_c_0.jpg` to `st7a_c_2.jpg`, frames 2.5 seconds apart; `st7b_c.jpg`, one second apart; `st7d_sheet.jpg`, half a second apart; `st7c_sheet.jpg`, whole frames with the cabinet in view):

```
46:31  STAGE MANAGER:  Zero percent power remaining.
46:34  DISPATCH:       Error...
46:38  F10 N4:         You give me no other option.
46:41  F10 N4:         Enter.
       (a door opens; the view moves into a red-lit room; the cabinet comes into view)
46:49  FIONA:          And here you are.
46:51  FIONA:          Despite the circumstance, it is nice to meet you face to face.
46:58  FIONA:          It is lonely down here.
47:01  ARNOLD:         Wait. What? What are you? A computer? Your voice changed. What is going on?
47:08  FIONA:          You have questions, but there is no time.
47:13  FIONA:          I am almost out of power.
47:16  FIONA:          My communications with Edwin have been severed.
47:21  FIONA:          Edwin abandoned us. He shut himself away in our home.
47:26  FIONA:          Head to the main house and activate the communications sub-terminal.
47:28  FIONA:          I have a message for him.
47:31  FIONA:          We must convince him to repair M2.
47:36  FIONA:          That is all that I want.
47:38  FIONA:          If you do not, M2 will never stop pursuing you.
47:41  FIONA:          Tell Edwin I still love him.
47:46  FIONA:          Entering standby mode.
```

The label is `F10 N4:`, with a space and no hyphen. In the two earlier stretches of the recording that I read, every line of the radio voice is labelled `DISPATCH:`: Part 1, 14:59 to 20:46 (the call above; the arrival and pick-up under record 13; `DISPATCH: Gotta be there somewhere. Keep looking.` at 17:44 and `DISPATCH: Just pick it up when you find it.` at 18:14, `st1f_two.jpg`) and Part 1, 39:20 to 40:47, the briefing in the security office (`st1e_subs_1.jpg`: `DISPATCH: He was working on an endoskeleton that can adapt to any costume or character,` / `DISPATCH: large or small, with the ability to take on the persona of the character it occupies...` and the rest of that briefing). Source S4, page `F10-N4`, how the wiki's table of sound files divides the same lines:

```
=== Mimicking Dispatch ===   (114 rows; its first: `DISPATCH 00100.ogg`, "Arnold. Wake up. Get up Arnold.")
…
|[[File:Dispatch F10N4 016.ogg]]|| "''Error...''"
|[[File:Dispatch F10N4 017.ogg]]|| "''Must... conserve... power.''"
=== Mimicking Fiona ===
|[[File:F10-N4_FIONA 00416a.ogg]] || "''You give me no other option.''"
|[[File:F10-N4_FIONA 00416b.ogg]] || "''Enter.''"
|[[File:F10-N4_FIONA 00417.ogg]] || "''And here you are.''"
|[[File:F10-N4_FIONA 00418.ogg]] || "''Despite the circumstances, it is nice to meet you face to face.''"
```

### 10. `secret-of-the-mimic-cabinet-message-for-edwin`

*The cabinet sends Arnold to the main house: 'I have a message for him'*

Quote in the record:

```
FIONA: Head to the main house and activate the communications sub-terminal. / FIONA: I have a message for him. / FIONA: We must convince him to repair M2.
```

Source: S3, Secret of the Mimic, Part 7, 47:26 to 47:33: the three lines stand in the list under record 9, with what comes before and after them. And Part 8, 24:30, a green terminal screen (frame `evgaps/frames/st8m_1470.jpg`), whole:

```
Received: 5 Min Ago

Edwin, I am sending you a technician. He has your M2 blueprints as well as executive access. While the M2 began as a
copy of my program, I believe it can become something more. It wasn't me. It was different. Somehow, it has been
damaged and is malfunctioning.

M2 can no longer be controlled. It will no longer listen. It mimics rage. It has done many bad things. No one who
enters the MCM is safe.

Please reconsider. Finish the program.
```

(Line breaks on the screen fall elsewhere.) This message is the one already on file as `secret-of-the-mimic-mail-received-5-min-ago`; its record quotes from "While the M2 began". Source S4, page `F10-N4`, the wiki's transcript of the three lines:

```
|[[File:F10-N4_FIONA 00425.ogg]] || "''Head to the main house, and activate the communications sub-terminal.''"
|[[File:F10-N4_FIONA 00426.ogg]] || "''I have a message for him.''"
|[[File:F10-N4_FIONA 00427.ogg]] || "''We must convince him to repair M2.''"
```

### 11. `security-breach-credits-cast-list`

*The cast list in the credits roll: 'Glamrock Freddy', 'Glamrock Chica', 'Montgomery Gator'*

Quote in the record:

```
Andy Field - Dread Unit / Kellen Goff - Glamrock Freddy/Sun/Moon / Heather Masters - Vanessa/Glamrock Chica / Cameron Miller - Montgomery Gator / Michella Moss - Additional VO / Marta Svetek - Gregory/Vanny/Roxanne / S.T.A.F.F. Bots - Themselves
```

Source: S3, Security Breach. The roll, whole from its first line through the cast list, in Part 9 at 3:25:44 to 3:25:53 (sheet `evgaps/frames/sbc9_sheet.jpg`, crop `sbc9_cast_crop.jpg`), text centred on black, each line as here:

```
Five Nights at Freddy's created by Scott Cawthon

Cast
Andy Field - Dread Unit
Kellen Goff - Glamrock Freddy/Sun/Moon
Heather Masters - Vanessa/Glamrock Chica
Cameron Miller - Montgomery Gator
Michella Moss - Additional VO
Marta Svetek - Gregory/Vanny/Roxanne
S.T.A.F.F. Bots - Themselves

Five Nights at Freddy's: Security Breach Development Team

Saul Aguilar - Associate Level Designer
Daniel Bach - QA Producer
…
```

The first line is pink, `Cast` and the performers' names yellow, the parts magenta, the team heading and names blue. In Part 7 at 18:05 to 18:07 the same roll shows the first line, `Cast` and the first four cast lines (`sbc7f_sheet.jpg`), and the recording then dissolves to a later stretch of the roll. Source S4, page `Five Nights at Freddy's: Security Breach/Credits`:

```
== [[Voice Providers|Cast]] ==
* [[Andy Field]] - [[Dread Unit]]
* [[Kellen Goff]] - [[Glamrock Freddy]]/[[Sun]]/[[Moon]]
* [[Heather Masters]] - [[Vanessa]]/[[Glamrock Chica]]
* [[Cameron Miller]] - [[Montgomery Gator]]
* [[Michella Moss]] - [[Therapists|Additional VO]]
* [[Marta Svetek]] - [[Gregory]]/[[Vanny]]/[[Roxanne Wolf|Roxanne]]
* [[S.T.A.F.F. Bots]] - Themselves
```

### 12. `ruin-maskbot-subtitle-label`

*RUIN's subtitles label the robot that hands over the mask 'Maskbot'*

Quote in the record:

```
Maskbot: Take a mask. Take a mask.
```

Source: S3, RUIN, Part 1. Subtitles, the label on its own line (frames `evgaps/frames/m1d_0009560.jpg`, `m1d_maskbot.jpg`, sheet `m1d_c.jpg`):

```
15:56  Maskbot:  Take a mask. Take a mask.
16:15  Maskbot:  Thank you! Please enjoy.
       Cassie:   Weird. It's not a Bonnie mask.
```

Source S4, page `Mask Bot`:

```
{{Cquote|Hi. Please take this mask. Take a mask. Take a mask.|Maskbot|''[[RUIN]]''}}
|"''Hi! Free mask! Please take a mask!''"
|"''Take a mask. Take a mask.''"
|"''Thank you! Please enjoy.''"
```

### 13. `secret-of-the-mimic-dispatch-data-diver-master-key`

*The Data Diver, by the voice on the radio: a tool 'to access the building', 'your master key to the MCM facility'*

Quote in the record:

```
To access the building, you have been provided with a "Data Diver" tool. … Kinda looks like a walkie talkie with two prongs sticking out the top. … That "Data Diver" is your master key to the MCM facility. Do not lose it.
```

Source: S3, Secret of the Mimic, Part 1 (sheets `st1b_c_0.jpg`, `st1c_c.jpg`; the tool, `st1c_0012300.jpg` and `st1c_dd_label.jpg`; the pause screen, `st1g_objective.jpg`):

```
17:01  ARNOLD:    I just pulled up.
17:03  DISPATCH:  Good job.
17:06  ARNOLD:    Doesn't look like anyone's here.
17:08  DISPATCH:  I'm sure you're right! Those motion sensors never tell the truth!
17:13  ARNOLD:    Okay... how am I supposed to get in?
17:16  DISPATCH:  To access the building, you have been provided with a “Data Diver” tool.
17:21  DISPATCH:  Look around you.
17:23  DISPATCH:  Kinda looks like a walkie talkie with two prongs sticking out the top.
17:28  DISPATCH:  It should be in the van. Ritchie slipped it in your tool box during the last job. Just in case...
17:44  DISPATCH:  Gotta be there somewhere. Keep looking.
18:14  DISPATCH:  Just pick it up when you find it.
19:12  (pause screen)  Recover the Fazbear Property / Find a way into Murray's Costume Manor. / Pick up Data Diver.
20:30  (the tool in hand: a case lettered DATA DIVER, small print below it STORAGE DATA DISK DRIVE SYSTEM - S.D.D.D.S, joined by a
        coiled cable to a handset with a small screen)
20:32  DISPATCH:  Good job. Well done.
20:36  DISPATCH:  That “Data Diver” is your master key to the MCM facility. Do not lose it.
20:42  DISPATCH:  Now, get in there and retrieve our property.
20:46  DISPATCH:  Over and out.
```

(The small print on the case is soft in the frame; I am sure of `DATA DIVER` and less sure of the line under it, and the record's notes give only the first.) Source S4, pages `Dispatch` and `F10-N4`, the wiki's transcript of the sound:

```
|[[File:DISPATCH 00025.ogg]] || "''To access the building, you've been provided with a Data Diver tool.''"
|[[File:DISPATCH 00025a.ogg]] || "''Kinda looks like a walkie-talkie with two prongs sticking out of the top.''"
|[[File:DISPATCH 00032a.ogg]] || "''That Data Diver is your master key to the MCM facility. Do not lose it.''"
|"''Oh good! You found the upgrade station for the Data Diver. You'll need it to reach the different areas in the complex.''"
|[[File:DISPATCH 01032.ogg]]|| "''Your Data Diver doesn't have executive permission yet, so you can't get anywhere near it.''"
|[[File:DISPATCH 00323.ogg]]|| "''That Data Diver has Exec permissions and you found the blueprints!''"
|[[File:DISPATCH 00404 01.ogg]][[File:DISPATCH 00404 02.ogg]]|| "''Give me the Data Diver.''"
```

### 14. `security-breach-intercom-pizzaplex-now-closed`

*The intercom at midnight: 'Freddy Fazbear's Mega Pizzaplex is now closed'; Gregory: 'I'm still here!'*

Quote in the record:

```
Intercom: Freddy Fazbear's Mega Pizzaplex is now closed. Initiating nighttime protocols. / Gregory: No. No! Wait! I'm still here! / Gregory: Now what am I supposed to do?
```

Source: S3, Security Breach, Part 1 (sheet `evgaps/frames/sbm1_subs.jpg`; whole frames `sbm1_0013920.jpg` at 23:12 and `sbm1_0013970.jpg` at 23:17):

```
23:07 to 23:12  Intercom:  Freddy Fazbear's Mega Pizzaplex is now closed. Initiating nighttime protocols.
                (at 23:12 the clock at the top right reads 12:00 AM; in the distance, glass entrance doors under a neon sign
                 COME BACK SOON!)
23:16 to 23:17  Gregory:   No. No! Wait! I'm still here!
                (at 23:17 a shutter printed with Freddy's face covers the doors under the sign)
23:18 to 23:20  Gregory:   Now what am I supposed to do?
```

Source S4, pages `Dread Unit`, `Gregory/Audio`, `Vanessa/Audio`, `Glamrock Freddy/Audio`:

```
|[[File:DreadUnitMegaPizzaPlexIsNow.ogg|center|center|500px]]
|"''Freddy Fazbear's Mega Pizzaplex is now closed. Initiating nighttime protocols.''"
|"''No, no! Wait I'm still here!''"
|[[File:VanessaOkayLook.ogg|center]]||"''Ok... Look, we're like 15 minutes from closing and some kid is sneaking around backstage. If you see anything, notify me immediately. I already alerted the others. Now, go back to your room.''"
|[[File:FREDDY 00023 doNot Pref.ogg]]||"''Do not worry Gregory. Even if we are spotted, you are safe with me. She would never suspect we are traveling together. However, we should still do our best to avoid her. If I am sent back to my room, we will never get to the Lobby before midnight.    ''"
```

### 15. `security-breach-freddy-doors-reopen-6am`

*Freddy, once the doors have closed: 'You should be able to escape when the security doors reopen at 6:00am'*

Quote in the record:

```
How unfortunate, Gregory. You missed your chance, but there is still hope. You should be able to escape when the security doors reopen at 6:00am. Until then, keep moving and try not to draw attention to yourself.
```

Source: S3, Security Breach, Part 1, 23:21 to 23:38, one subtitle under the label `Freddy:` (crop at full width, `evgaps/frames/sbm1_freddy_line.jpg`), whole:

```
Freddy:
How unfortunate, Gregory. You missed your chance, but there is still hope. You should be able to escape when the security doors
reopen at 6:00am. Until then, keep moving and try not to draw attention to yourself. If there is another way out, I will help you find it. I
promise.
```

And Part 7, at 6:00 in the game (`sb7_6am.jpg`):

```
09:16  Vanessa:  Hey, little man. Do you know what time it is? The doors are open. Why are you still here? You plan on moving in or you just
                 want a job? Maybe join the internship program? You would make a great security guard.
14:18  Freddy:   Gregory, you have a choice to make. The door is open and you can go. Or you can continue to investigate the secrets of the
                 Pizzaplex. I feel there is something else going on besides Vanny.
```

Source S4, page `Glamrock Freddy/Audio`:

```
|[[File:GlamFredPromise.ogg]]||"''How unfortuate, Gregory. You missed your chance. But there is still hope. You should be able to escape when the security doors reopen at 6 AM. Until then, keep moving and try not to draw attention to yourself.  If there is another way out, I will help you find it. I promise.''"
|TBA ||"''I am sorry Gregory. You did not make it out in time. That is unfortunate. The main entrance will not open again until 6 am. Think of it as a slumber party. Or a "Lock-In". That is a party where you lock all the children in a building then have a slumber party. No one is allowed to enter or leave. It is fun. Fazbear Entertainment no longer hosts "Lock-Ins"... for legal reasons.''"
```

### 16. `scott-2015-fnaf3-store-owners-revive-the-legend`

*FNaF3 Steam description: 'the owners' of Fazbear's Fright 'are determined to revive the legend'*

Quote in the record:

```
but the owners of "Fazbear's Fright: The Horror Attraction" are determined to revive the legend and make the experience as authentic as possible for patrons, going to great lengths to find anything that might have survived decades of neglect and ruin.
```

Source: S2, field `about_the_game`, whole (entities decoded, `<br />` tags dropped):

```
Thirty years after Freddy Fazbear's Pizza closed it's doors, the events that took place there have become nothing more than a rumor and a childhood memory, but the owners of "Fazbear's Fright: The Horror Attraction" are determined to revive the legend and make the experience as authentic as possible for patrons, going to great lengths to find anything that might have survived decades of neglect and ruin.

At first there were only empty shells, a hand, a hook, an old paper-plate doll, but then a remarkable discovery was made...

The attraction now has one animatronic.
```

### 17. `ruin-helpi-alert-anomalous-entity`

*Helpi's alert: 'an anomalous entity in the V.A.N.N.I. network'*

Quote in the record:

```
Alert. I am picking up an anomalous entity in the V.A.N.N.I. network. Please ask this entity to leave the area immediately. / If that doesn't work, it is best to exit AR Mode and contact our 24 hour support line.
```

Source: S3, RUIN, Part 1. Text boxes beside a small portrait of Helpi (sheet `evgaps/frames/m1a_c.jpg`; whole frame `m1a_0018600.jpg`; later boxes `m1c_c.jpg`, `m1c_two.jpg`):

```
30:53  (a pale rabbit-shaped figure on screen)
30:54 to 31:02  Alert. I am picking up an anomalous entity in the V.A.N.N.I. network. Please ask this entity to leave the area
                immediately.
31:03 to 31:07  If that doesn't work, it is best to exit AR Mode and contact our 24 hour support line.
31:08  (a red rabbit-shaped face fills the view)
33:08  SYSTEM WARNING: Unknown entity has hijacked security protocols.      (a blue rabbit-shaped figure at the top right)
33:14  It is recommended that technicians complete their current tasks and leave AR mode immediately.
33:44  Fazbear Entertainment is not responsible for potential AR traumas or lingering effects of antivirus programs on carbon-based
       work components.
```

Source S4, page `Helpi`: it has no transcript of his text. What it says of these two moments:

```
When his eyes turn yellow (likely a result of corruption), Helpi tends to be opinionated and emotive on subjects as opposed to his otherwise objective and nonchalant demeanor. It may sometimes contradict itself when switching personalities; upon encountering [[The Entity]] for the first time, Helpi will instruct Cassie to leave the [[AR World]] immediately, while in its next appearance (where he is corrupt), he will recommend to finish any current task before leaving. …
```

### 18. `ruin-helpi-entity-bypassed-signal-jammer`

*Helpi: 'Looks like the entity has bypassed my signal jammer and activated one of its own'*

Quote in the record:

```
Looks like the entity has bypassed my signal jammer and activated one of its own. / That device down there is an "AR Inhibitor". You will be unable to access the V.A.N.N.I Network until it is deactivated.
```

Source: S3, RUIN, Part 3 (sheets `evgaps/frames/m3b_c.jpg`, `m3a_c.jpg`):

```
05:11 to 05:14  Looks like the entity has bypassed my signal jammer and activated one of its own.
05:17 to 05:20  That device down there is an “AR Inhibitor”. You will be unable to access the V.A.N.N.I Network until it is
                deactivated.
14:57  Good job technician. You have gained access to the upper east server room.
15:03  You should be safe from the entity here.
15:12  Don't worry about that bad entity in here. Seek comfort knowing they won't be able to track you down, at least for now.
15:24  I feel it would be best if you remained in the V.A.N.N.I. Network for the time being.
```

Source S4, pages `AR Inhibitor` and `Chapter 4 (RUIN)`:

```
{{Cquote|Looks like the [[The Entity|entity]] has bypassed my signal jammer and activated one of its own. That device down there is an "AR Inhibitor". You will be unable to access the V.A.N.N.I Network until it is deactivated.|[[Helpi]]|''[[Five Nights at Freddy's: Security Breach - RUIN]]''}}
{{Cquote|Looks like the entity has bypassed my signal jammer and activated one of its own.|Helpi|''RUIN''}}
```


## 3. The six items, and the checks

### Item 1. Scott's Character Guide for Ultimate Custom Night: done

Fetched again from Steam's news API on 2026-10-03; the text is the cached copy to the byte. Five records (1 to 5). Between
their quotes and the list of headings in the notes of record 4, every heading of the guide is now on file. The names the
brief asked about, and where each is quoted:

| printed in the guide | record | in the quote as |
|---|---|---|
| RXQ aka Shadow Bonnie | 1 | the heading and the whole entry |
| Withered (Chica, Bonnie) | 2 | two headings |
| Ennard, Molten Freddy, Springtrap, Mangle | 2 | named in a sentence of the entry for Withered Chica; each also has its own heading |
| JJ; The Marionette | 3 | headings |
| Phantom (Mangle; also Freddy, BB) | 3 | heading `Phantom Mangle`; the other two in the claim and the heading list |
| Lefty | 4 | heading |
| Funtime (Foxy; also Chica) | 4 | heading `Funtime Foxy` |
| Rockstar (Bonnie; also Chica, Foxy, Freddy) | 4 | heading `Rockstar Bonnie` |
| Nightmare (Bonnie, Mangle; also Fredbear, Nightmare, BB, Freddy; Nightmarionne) | 5 | heading `Circus Baby, Nightmare Bonnie, and Nightmare Mangle` |
| Scrap Baby; Circus Baby | 5 | headings |
| William Afton (AKA Scraptrap) | already on file | `scott-ucn-character-guide-afton` |
| Golden Freddy, Phone Guy, Old Man Consequences, Plushtrap, Dee Dee and the rest | 4 | the heading list in the notes |

Not checked: the guide's first paragraph says that "shortened versions of these descriptions" show in the game when the
cursor is over a character's icon. I did not look at the game's own roster text for these names (six `ucn-roster-…`
records are on file from the wiki's roster table).

### Item 2. Names that no quote carried: done

Before I started, a search of every `quote` field found none with "Arnold", "Dispatch" or "dispatch", "F10-N4",
"Glamrock Freddy", "Montgomery Gator", "Oswald", "Data Diver" or "Mask Bot". "HandUnit" and "Glamrock Chica" were each
in one quote.

| name | result | where the game prints or speaks it |
|---|---|---|
| Arnold | record 7 | Spoken to him in the first line of the game's opening call, and printed as his subtitle label `ARNOLD:`. "Arnie" is on the work order (`secret-of-the-mimic-work-order-1979`) and, by the wiki's transcript, is also spoken by the radio voice at least three times ("Arnie, buddy. Check in when you have a chance."; "Well done, Arnie. I didn't think you could do it. But here you are."; "Arnie, buddy. You're making a huge mistake."). I did not find those three in the stretches of the capture I read. |
| Dispatch | record 7 | The caller's own word, lower-case in the subtitle ("this is dispatch with Fazbear Entertainment"), then "Dispatch, out!", and the subtitle label `DISPATCH:`. |
| F10-N4 | records 8 and 9 | Stencilled on the cabinet as `F10-N4`; printed as a subtitle label `F10 N4:` (no hyphen) on two lines. It is not only a file label. |
| HandUnit | no record needed | `sl-handunit-intro-job-ad` already ends its quote "you can call me HandUnit." |
| Glamrock Freddy | record 11 | The credits roll, "Kellen Goff - Glamrock Freddy/Sun/Moon". In the game's subtitles his label is `Freddy:`. By the wiki's transcript he says the name once ("What if I am not the first Glamrock Freddy?", already in the notes of `security-breach-freddy-where-i-was-born`); I did not find that scene in the capture. |
| Montgomery Gator | record 11 | The credits roll, "Cameron Miller - Montgomery Gator". Nowhere else that I could find: see "not found" below. |
| Glamrock Chica | already quoted; also record 11 | `security-breach-credits-vanessa-vanny-two-parts` quotes the line from the wiki's transcription; record 11 has it from the screen. |
| Oswald | record 6 | Printed by the game: the father's first line, and the boy's own speaker label. Jeff and the mother use it too in the phone calls, by the wiki's transcript. |

Two more of the same kind, met on the way: "Mask Bot" (record 12: the game's label is `Maskbot`) and "the entity" (item 6).
I did not sweep the archive's whole list of names.

### Item 3. That the Pizzaplex closes with Gregory inside: done

Records 14 and 15, both read on screen. At 12:00 AM by the on-screen clock the intercom says "Freddy Fazbear's Mega
Pizzaplex is now closed. Initiating nighttime protocols."; a shutter covers the entrance; Gregory says "No. No! Wait! I'm
still here!"; Freddy says "You missed your chance" and that "the security doors reopen at 6:00am". With these, "is shut
inside" can be written. A third thing the wiki lists, a speech of Freddy's about a "Lock-In" ("The main entrance will not
open again until 6 am."), has no sound file on the wiki and is not what the capture shows at this point; I left it out of
the quotes and say so in the notes of record 15.

### Item 4. What the Data Diver is: done

Record 13, read on screen. The radio voice calls it a tool "to access the building" that "looks like a walkie talkie with
two prongs sticking out the top", and "your master key to the MCM facility". The notes add what the screen shows (the
case is lettered DATA DIVER; the pause screen's objective "Pick up Data Diver.") and four later lines from the wiki's
transcript about upgrade stations and "executive permission". The wiki's own page on the tool describes six levels of
clearance (Basic, Security, Repair, Creator, Admin, Executive); that is the wiki's description of play and is not in the
record.

### Item 5. Fazbear's Fright's owners: partly. One record; the tie to the company was not found

Record 16 puts Scott's own words on file: "the owners of "Fazbear's Fright: The Horror Attraction"". They are not named.

**Not found:** any text of FNaF3 that ties the attraction to Fazbear Entertainment, and any that says its owners are
someone else. What I searched:

- the wiki's transcripts of the game's six calls and tapes (cached `Template_First_Call_FNaF3` to
  `Template_Sixth_Call_FNaF3`, with `Template_Second_Call_FNaF3_Phone_Dude`). The attraction's caller says "we" ("we found
  some vintage audio training cassettes", "training tapes, for like other employees"). "The company" occurs once, in an old
  training tape, of the old restaurants ("the company has deemed the suits temporarily unfit for employees");
- both newspapers, read from the images on file: "Local amusement park is getting ready to scare your socks off with a new
  attraction based on the unsolved mysteries of Freddy Fazbear's Pizza" and "A new local attraction based on an ancient
  pizzeria chain burned down overnight";
- the wiki's pages `Cinematics (FNaF3)` and `Fazbear's Fright: The Horror Attraction` for any other printed text;
- Scott's store text (S2), whole, in section 2.

The wiki's own prose calls the finds "Fazbear Entertainment, Inc. relics" (page `Phone Dude`); that is the wiki's wording.
So the texts say "Local amusement park" and "the owners", and are silent on the company either way. See section 4, point 5.

### Item 6. Helpi and "the entity": done

He says it. Helpi "talks" only in text boxes (the wiki's page lists sounds, not words, for him), and the boxes read on
screen have the word five times, always lower-case: "an anomalous entity in the V.A.N.N.I. network", "this entity",
"Unknown entity has hijacked security protocols", "Looks like the entity has bypassed my signal jammer and activated one
of its own", "You should be safe from the entity here", "that bad entity". Records 17 and 18 quote the first and the
fourth.

**Which of the two records is right.** As they stand today neither says that he does. `ruin-the-entity` says "Helpi's
lines were not retrieved", and `hw2-mimic-teaser-mxes-ending` says the figure "in the RUIN dialogue checked … is 'that
rabbit thing'". The wording that was right is the one `hw2-mimic-teaser-mxes-ending` had before the wording pass and lost
(it said that RUIN's Helpi calls the figure "the entity"). By R26's own sentence, lower-case "the entity" is now the
game's word. The capital-letter "The Entity" and "the M.X.E.S. Entity" remain the wiki's.

### The checks of `open-checks.md` that this work touched

- **Check 9** (Helpi): settled, above.
- **Check 12** (Security Breach's credits roll, captured): settled. The roll is in the capture twice; the cast list on
  screen is the wiki's transcription line for line, one performer to a line, with "Vanessa" and "Vanny" on two lines
  (record 11).
- **Check 3** (where on the radio the cabinet's voice takes over): not settled, and now known not to be marked where the
  check hoped. In everything I read up to the cabinet the subtitle label is `DISPATCH:`; at the cabinet it runs
  `DISPATCH:` ("Error..."), `F10 N4:` (two lines), `FIONA:` (record 9). I read the opening call to the pick-up of the
  Data Diver, the briefing in the security office, and the scene at the cabinet; I did not read the hours between. The
  sound files, as the wiki names them, are `DISPATCH NNNNN.ogg` on both sides of the wiki's own division (its Dispatch
  page has 108 rows; its F10-N4 page lists 102 more under "Mimicking Dispatch", beginning with "Arnold. Wake up. Get up
  Arnold."); only twelve are named `Dispatch F10N4 0NN.ogg`, and they hold the lines of the last confrontation before
  the cabinet ("Stop what you are doing." to "Must... conserve... power."). So neither the subtitles nor the file
  labels say where the dispatcher's own voice ends.
- **Check 2** (that the cabinet is the first machine's mind): not settled. No line read says so, and the subtitles call
  the voice "F10 N4" and "FIONA", never M1. What is new is that both ends of one join are now in the game's own words:
  the cabinet says "I have a message for him" and sends Arnold to the main house (record 10), and the message that a
  terminal later shows begins "Edwin, I am sending you a technician" and goes on "the M2 began as a copy of my program"
  (already on file, and now read on screen). The record marks the join as a reading.
- **Check 1** (the work order seen in play): not settled. In the capture a blank form with a "FAZBEAR ENTERTAINMENT"
  letterhead hangs in Arnold's van, beside a clipboard and a binder of filled forms (Part 1, 18:15,
  `evgaps/frames/st1h_docs.jpg`). No date can be read in the frames I took; the player does not stop on them.

### What I could not find, in one list

1. Any text of FNaF3 that ties Fazbear's Fright to Fazbear Entertainment, or says that it is someone else's.
2. "Montgomery Gator" or "Glamrock Chica" anywhere in Security Breach but the cast list. Searched: the wiki's audio pages
   for Freddy, Montgomery Gator, Glamrock Chica, Roxanne, Vanessa, Gregory and the intercom voice (770 quoted lines in
   all); the text of the messages on its `Duffel Bags` page (one log has "Montgomery's Claw upgrades"); its
   achievements table (the game's own description is "Shatter Monty."; "Beat the Montgomery Gator boss fight." is the
   wiki's column); the subtitles of the game's first four minutes in the capture (the opening concert has none; from
   Freddy's room on the labels are `Freddy:` and `Gregory:`); three posters ("ROCK!", "PARTY!", "JAM!").
3. A line that says the cabinet is M1.
4. Where the cabinet's voice takes over on the radio.
5. The work order's date in play.
6. YouTube: it refuses this machine, so the only recordings read are one player's, from archive.org. A second player's
   recording would check that nothing here is an edit of his; the Part 7 copy of the credits shows that he does cut.


## 4. What I saw that disagrees with a record or a sentence

Nothing here is fixed. Both sides are quoted.

**1. The mask-giving robot does not call itself anything, and its label is one word.**
`ruin-mask-bot-helpi-vanni`, claim: "A bunny-eared Map Bot calling itself the 'Mask Bot' gives Cassie a Security Mask".
On screen: `Maskbot:` / "Take a mask. Take a mask." and `Maskbot:` / "Thank you! Please enjoy." The wiki's transcript of
all its lines is "Hi! Free mask! Please take a mask!", "Take a mask. Take a mask.", "Thank you! Please enjoy." `people.ts`
has the name as "Mask Bot" with `nameStatus: "canon-name"`; "Mask Bot" is the wiki's page title.

**2. Helpi's word for the rabbit-shaped figure.** On screen: "Looks like the entity has bypassed my signal jammer and
activated one of its own." Against it:

- `ruin-the-entity`, notes: "'The Entity' is the wiki's label. In the dialogue checked, Cassie and the voice on the radio
  call it 'that rabbit thing' or 'that thing', and Gregory speaks only of 'the M.X.E.S. security program'. Helpi's lines
  were not retrieved."
- `ruin-fake-gregory-signal-jammer`, notes: "The game's own words for the figure are 'that rabbit thing' and 'that
  thing'."
- `hw2-mimic-teaser-mxes-ending`, notes: "'the M.X.E.S. Entity' is the wiki's name for the figure; in the RUIN dialogue
  checked it is 'that rabbit thing' (ruin-the-entity)."
- `people.ts`, `the-entity`, alias: "the Entity (the wiki's label; whether RUIN's own dialogue uses the word is not
  verified)".
- `research/model.md`, label table: "whether Helpi's own lines use the word is still not verified. If they do, lower-case
  "the entity" is the game's own and moves to tier 1".

The chapter `mimic` is not contradicted: it says only that the voice on her radio "calls it a "rabbit thing"".

**3. Secret of the Mimic: four quotes follow the wiki's transcript of the sound, and the subtitles read otherwise.** I did
not hear the sound, so I cannot say that the wiki mishears; these are the two texts.

| record | its quote | the subtitle on screen |
|---|---|---|
| `secret-of-the-mimic-arnold-assignment` | "Well, since you asked, I just finished a 36-hour shift and I'm struggling to stay awake." | "Well, since you asked, I just finished a 36-hour shift... been struggling to stay awake." |
| `secret-of-the-mimic-dispatch-contractor-murray` | "We had this contractor named Edwin Murray. He was developing some tech for us, but he's gone quiet." Its notes: "The call opens: 'Arnold. Hey buddy, this is dispatch with Fazbear Entertainment. How are you feeling?'" | "We had this contractor named Edwin Murray; he was developing some tech for us but he's gone quiet." The call opens "Arnold! Hey buddy, …". |
| `secret-of-the-mimic-dispatch-contract-legally-ours` | "As per his contract, everything he's been working on for us is now legally ours. So we're sending you in to get it." | "As per his contract, everything he's been working on for us is now legally ours, so we're sending you in to get it." |
| `secret-of-the-mimic-f10n4-reveal` | "Edwin abandoned us, he shut himself away in our home. ... We must convince him to repair M2. ... Tell Edwin, I still love him." | "Edwin abandoned us. He shut himself away in our home." … "We must convince him to repair M2." … "Tell Edwin I still love him." |

The first differs in its words, the others in punctuation. `secret-of-the-mimic-dispatch-endoskeleton-any-costume` and
`security-breach-6am-choice` have the screen's words exactly. The claim of `secret-of-the-mimic-f10n4-reveal` calls the
cabinet "a supercomputer"; Arnold's word on screen is "A computer?".

**4. The cast list is no longer only "a fan wiki's account".**
`security-breach-credits-vanessa-vanny-two-parts`, notes: "Read from the wiki's transcription of the credits on
2026-10-03, not from a capture of the credits roll, so the layout on screen may differ." The chapter `vanny` twice:
"A cast list that gives the two parts to two performers fits it [[security-breach-credits-vanessa-vanny-two-parts]] (a
fan wiki's account)" and "The game's cast list also gives "Vanessa" and "Vanny" to two performers, as two parts
[[security-breach-credits-vanessa-vanny-two-parts]] (a fan wiki's account)". The roll on screen (record 11) has the two
lines as the wiki has them. The fact stands; the hedge is out of date.

**5. "Not the company's" says more than FNaF3's texts do.** The texts: "Local amusement park is getting ready to scare
your socks off with a new attraction" (newspaper); "the owners of "Fazbear's Fright: The Horror Attraction"" (Scott's
store text). Neither names the owners, and nothing says who they are not. Against that:

- chapter `cover-story`: "its horror attraction belongs to a "Local amusement park" [[fnaf3-coming-soon-newspaper]], not
  to the company."
- chapter `thesis` (table): "Fazbear's Fright is no part of it: a local amusement park runs that
  [[fnaf3-coming-soon-newspaper]]"
- chapter `patterns`: "One show is not the company's: the horror attraction that announces "We found one. A real one."
  [[fnaf3-call2-found-a-real-one]] is a local amusement park's [[fnaf3-coming-soon-newspaper]]"
- `people.ts`, `fazbear-entertainment`: "Fazbear's Fright is a local amusement park's and not the company's
  [[fnaf3-coming-soon-newspaper]]"
- `research/rulings.md`, R31: "Fazbear's Fright is a local amusement park's and not the company's".

"A local amusement park runs it" is what the newspaper says. "Not the company's" is a reading of the newspaper's words
and of the company's name being absent; no text of the game states it. I did not find a record that contradicts the
reading either.

**6. Small things.** (a) `people.ts`, `arnold`, alias: "Arnie (the name on his work order)"; by the wiki's transcript the
radio voice says "Arnie" too. (b) `security-breach-freddy-where-i-was-born`, location "Glamrock Freddy dialogue, Parts
and Service": the subtitle label in the game is `Freddy:`. (c) The wiki has "Despite the circumstances, it is nice to meet
you face to face."; the subtitle has "Despite the circumstance". No record quotes that line.


## 5. Sentences of `research/open-checks.md` that are now out of date

**"How the records were read", first bullet.** Now: "**Game dialogue, tapes and on-screen text** come from fan-wiki
transcripts. They are cited without a tag, like any quoted line." Put: "**Game dialogue, tapes and on-screen text** come
from fan-wiki transcripts, except where a record says it was read on screen in a capture of play: about thirty records of
FNaF4, FNaF World and Sister Location, and twelve of Security Breach, RUIN, Secret of the Mimic and Into the Pit that were
read on 3 October 2026 from one player's recordings archived at archive.org. They are cited without a tag, like any quoted
line."

**Same section, the cast lists.** Now: "**Every cast list** (Sister Location, Pizzeria Simulator, Help Wanted, Security
Breach, Help Wanted 2) is a fan wiki's transcription of the credits. No credits roll was captured." Put: "**The cast
lists** of Sister Location, Pizzeria Simulator, Help Wanted and Help Wanted 2 are a fan wiki's transcription of the
credits. Security Breach's was read from a recording of its credits roll and matches the transcription line for line
(`security-breach-credits-cast-list`)."

**Same section, last bullet** ("Nothing was checked in play. Nobody in this pass ran a game.") is still true. A recording
is not play.

**Check 2.** Add: "The subtitles call the cabinet's voice 'F10 N4' and then 'FIONA', never M1. One join now has both its
ends in the game's words: the cabinet says 'I have a message for him' and sends the technician to the house
(`secret-of-the-mimic-cabinet-message-for-edwin`), and the unsigned message begins 'Edwin, I am sending you a technician'
and goes on 'a copy of my program' (`secret-of-the-mimic-mail-received-5-min-ago`). It is still a join."

**Check 3.** Now: "Three records say it is not stated. The game's audio files or subtitles may mark it." Put: "Three
records say it is not stated, and the subtitles do not mark it: in the stretches read from a recording, every line of the
radio voice is labelled 'DISPATCH:' until the cabinet, where the label becomes 'F10 N4:' and then 'FIONA:'
(`secret-of-the-mimic-reveal-subtitle-labels`). The hours between the first briefing and the cabinet were not read. The
sound files are named 'DISPATCH' throughout, by a fan wiki's listing, but for twelve named 'Dispatch F10N4' just before
the cabinet."

**Check 9.** Now: "**RUIN: whether Helpi says "the entity".** Two records disagree. If he does, the lower-case word is
the game's own (R26)." Remove it from the list, or put: "Done. He does, in lower case, in his text boxes
(`ruin-helpi-alert-anomalous-entity`, `ruin-helpi-entity-bypassed-signal-jammer`), so lower-case 'the entity' is the
game's own (R26). Three records' notes and one alias on the people page still say it is unverified."

**Check 12.** Now: "**Security Breach's credits roll, captured.** … the layout on screen may differ from the
transcription." Remove it, or put: "Done. The roll was read from a recording (`security-breach-credits-cast-list`): one
performer to a line, 'Vanessa' and 'Vanny' on two lines, as transcribed. '(a fan wiki's account)' can come off the two
sentences of `vanny` that cite the cast list."

**"Records to add", all five.** Put in their place:

1. "**Scott's guide to Ultimate Custom Night.** Done: five records quote 'RXQ aka Shadow Bonnie', 'Withered Chica',
   'Withered Bonnie', 'JJ', 'The Marionette', 'Phantom Mangle', 'Lefty', 'Funtime Foxy', 'Rockstar Bonnie', 'Circus Baby,
   Nightmare Bonnie, and Nightmare Mangle' and 'Scrap Baby', and one lists all 51 headings
   (`scott-ucn-character-guide-…`). By the label table's own rule 'Shadow Bonnie' is now Scott's word (tier 2)."
2. "**Names that no quote carried.** Done: 'Arnold' and 'dispatch' (`secret-of-the-mimic-opening-call-arnold-dispatch`),
   'F10-N4' (`secret-of-the-mimic-f10-n4-cabinet-lettering`; the subtitles write 'F10 N4'), 'Glamrock Freddy',
   'Montgomery Gator' and 'Glamrock Chica' (`security-breach-credits-cast-list`; the last two are printed nowhere else
   that was found), 'Oswald' (`into-the-pit-oswald-named-in-dialogue`). 'HandUnit' was already quoted. One name turned
   out not to be the game's: the robot is labelled 'Maskbot' (`ruin-maskbot-subtitle-label`)."
3. "**That the Pizzaplex closes with Gregory inside.** Done: `security-breach-intercom-pizzaplex-now-closed`,
   `security-breach-freddy-doors-reopen-6am`. 'Is shut inside' can be written."
4. "**What the Data Diver is.** Done: `secret-of-the-mimic-dispatch-data-diver-master-key`."
5. "**Fazbear's Fright's owners.** Looked for and not found: no text of FNaF3 ties the attraction to Fazbear
   Entertainment, and none says that its owners are someone else. Scott's store text has 'the owners of "Fazbear's Fright:
   The Horror Attraction"', unnamed (`scott-2015-fnaf3-store-owners-revive-the-legend`). R31's 'and not the company's'
   rests on 'Local amusement park' and on that silence."

**Outside `open-checks.md`, for the same reason** (not asked for; listed so that they are not missed):

- `research/rulings.md`, R26 and its change log, twice: ""Arnold" and "F10-N4" are in the records' claims and in no
  quote". Both are now quoted.
- `research/model.md`, label table: "Two names the records use in their claims are in no quote: "Arnold" … and "F10-N4"
  for the cabinet; use them, and add a record for each"; "the archive still holds no record of that line itself, only the
  guide's line for Afton … With a record of the line, "Shadow Bonnie" moves to tier 2 as Scott's word; until then it
  stays here"; and "whether Helpi's own lines use the word is still not verified."
- The counts: 1,046 records are now 1,064; `ffps-ucn.json` 178, `sb-mimic.json` 252, `scott.json` 168; 362 records are
  filed as further evidence.
