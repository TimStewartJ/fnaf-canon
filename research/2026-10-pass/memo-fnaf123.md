# Memo: `fnaf123` slice (Five Nights at Freddy's 1, 2 and 3)

Slice analyst memo for the theory pass. Evidence file `src/data/evidence/fnaf123.json` was 96 records and is now 143: 47 added, 74 of the original 96 edited (52 in substance, 22 given cross-links only). No id was renamed or deleted. 22 images were added and credited. `npx tsx scripts/validate.ts` reports OK.

**What was read at the source in this pass**

- Every phone call and tape: the wiki's transcript templates for FNaF1 Nights 1 to 4, FNaF2 Nights 1 to 6, FNaF3's two Phone Dude calls and five training tapes. Eight audio files (FNaF1 Night 4, FNaF2 Nights 5 and 6, FNaF3 Nights 2 to 6) were also run through speech-to-text as a second check on the wording that carries arguments. Where the two disagreed on small words, the quote keeps only what both give.
- Every on-screen text was read from an in-game screenshot, not from the wiki's transcription: the four FNaF1 clippings, both games' ads, checks and pink slips, the "ROBOTS SCRAPPED" paper, FNaF3's two newspapers and both Night 5 end screens. This caught one wrong transcription that the theory had been quoting (section 3, item 1).
- Sprites and maps: the full maps of SAVETHEM, Foxy Go! Go! Go! and FNaF3's end-of-night minigames, the purple figure's three sprites, the SAVETHEM yellow bear, Happiest Day.
- Scott's store text for the three games (Steam API) and the on-screen captions of his FNaF2 and FNaF3 trailers (frames taken from the Steam-hosted videos).

**Conventions.** "(new)" marks a record added in this pass. Ids from other slices carry their file in square brackets the first time they appear in a subsection. "Theory" means `theory.ts`. Phone Guy, Phone Dude, Golden Freddy, Shadow Freddy and "the purple figure" are used as labels: FNaF1 to FNaF3 name none of the people in them except three guards, and the name "Golden Freddy" appears only on FNaF2's Custom Night screen.

**Decisions this memo asks of the lead** (argued in the sections named)

1. Say outright that FNaF1's restaurant is the old pre-1987 location reopened, at medium confidence (2.1, 2.2). The theory holds it only as a place note.
2. Date the killer's death: after FNaF1's restaurant closed, medium (2.7). The theory says "The games do not date his death".
3. Split 1987 into "a second incident, certainly" and "a second set of five victims, probably not" (2.3).
4. Stop staking Scott's one retcon on the yellow suit alone. From this slice the suspect who was "captured" and "convicted" is the better candidate, and "a yellow one" reads more naturally as the yellow bear (2.5, 2.6). The `scott` memo reaches the first half independently.
5. State the window for the Bite of '87 that the records give (2.10).
6. Pick one copy of each of the five facts recorded both here and in `scott.json` (section 7.4).
7. The entity id `henrys-daughter`, tagged on `fnaf2-take-cake-to-the-children`, embeds a book-only name, and so does its group id in `people.ts`. The displayed name is neutral ("The Cassette Man's Daughter"), so nothing book-only reaches a reader. The id runs through seven data files and three evidence files, so the lead should decide whether internal ids fall under the ban before anyone renames it.
8. My four Scott-authored additions use ids `scott-fnaf1-…`, `scott-fnaf2-…`, `scott-fnaf3-…` with `game: "scott"`, matching the three store-text records already in this file. That departs from the `fnaf1-`/`fnaf2-`/`fnaf3-` prefixes I was given: ids are prefixed with the game id, and store text and trailers are Scott's words, not in-game content.

---

## 1. Threads

Ordered by how much of the story each holds up.

### 1.1 The five missing children: what happened, and what became of them

**The event.** Everything stated about it comes from four clippings that rarely replace a poster on FNaF1's CAM 4B.

- Two children were "lured into a back room during the late hours of operation at Freddy Fazbear's Pizza on the night of June 26th" (`fnaf1-news-kids-vanish`).
- Five children are "now linked to the incident" (`fnaf1-news-five-children`).
- The man was "dressed as a company mascot" or "a cartoon mascot". Neither clipping says which character or what colour (`fnaf1-news-dressed-as-mascot`, new).
- Video identified him and "led to his capture the following morning" (`fnaf1-news-suspect-captured`, new). The headline of the second clipping says "Suspect convicted."; its text says "the suspect has been charged" (`fnaf1-news-charged-vs-convicted`, new).
- The bodies "were never found".

**The aftermath at the restaurant.** It went on trading, "fighting an uphill battle ever since to convince families to return" (`fnaf1-news-uphill-battle`, new). The health department threatened shutdown "again" over a "foul odor coming from the much-loved animal mascots", and parents saw "blood and mucus around the eyes and mouths of the mascots" (`fnaf1-news-sanitation`). "Many years" later it announced it would close, after "the tragedy that took place there" and a year without a buyer (`fnaf1-news-closing`).

**Bodies and machines.** No game shows a body going into a suit. What the three games give:

- Phone Guy's description of a body inside a suit: "the only parts of you that would likely see the light of day again would be your eyeballs and teeth when they pop out the front of the mask" (`fnaf1-call1-eyeballs-teeth`, new). The game-over screen shows it (`fnaf1-game-over-eyes-teeth`, new). It is the sight the parents in the clipping report.
- The older models smell before anything in the 1987 week happens: "And the smell...ugh." (`fnaf2-call2-the-smell`, new).
- The Puppet puts the masks of Freddy, Bonnie, Chica and Foxy on four dead children (`fnaf2-give-gifts-give-life`).
- FNaF1's hallucinations: a Freddy with human eyes and "IT'S ME" (`fnaf1-its-me-hallucinations`), drawings of crying children (`fnaf1-screaming-children-drawings`).

**Spirits.** When the four machines have been taken apart, five grey children stand in the hidden room (`fnaf3-n5-ghosts-safe-room`). Crying children are given cake in four hidden minigames (`fnaf3-bbs-air-adventure`, `fnaf3-chicas-party`, `fnaf3-stage01-cake-crying-child`, `fnaf3-shadow-bonnie-minigame`), and five masked children and a Puppet-masked sixth vanish in Happiest Day (`fnaf3-happiest-day`).

**Open.** The year. The building, named only as "Freddy Fazbear's Pizza" (2.2). Names: FNaF1 to FNaF3 name none of the five. Which child goes with which machine. Whether SAVETHEM's five are these five (2.3).

**Connections.** [ffps-ucn] `ffps-lorekeeper-gravestones` (a row of five stones, four named, one hidden) and `ffps-insanity-tiny-breaths`. [hw] `hw-pns-freddy-child-items`; `hw2-memory-dolls` and `hw2-pq4-graveyard-order` (six: the four, Golden Freddy, the Puppet). [sb-mimic] `into-the-pit-prologue-mci`. [fnaf4-sl] `fnaf4-pigtail-girl-hide-your-body`: "if you die, they hide your body and never tell anyone" is a child's version of the policy Phone Guy reads out, a missing person report only after the premises "have been thoroughly cleaned and bleached" (`fnaf1-call1-company-disclaimer`).

### 1.2 The killer, the yellow suits and Springtrap

**What the games establish, in release order.**

- FNaF1: a man in a mascot costume, caught and charged (1.1). No costume is shown in use.
- FNaF2 minigames: a purple figure gets out of a purple car and kills a child outside a restaurant (`fnaf2-take-cake-to-the-children`); stands smiling by the curtain while five children lie dead (`fnaf2-foxy-go-go-go`); and, inside the 1987 building, rushes the player and ends the game with "you can't" (`fnaf2-save-them-you-cant`). Only in that last sprite does he carry a yellow mark on his chest (`fnaf2-save-them-purple-figure-chest-mark`, new).
- FNaF2 calls: facial recognition tampered with (`fnaf2-call4-facial-recognition-tampered`); lockdown "especially concerning any... previous employees" (`fnaf2-call5-lockdown`); "Someone used one of the suits. We had a spare in the back, a yellow one." (`fnaf2-call6-yellow-suit`).
- FNaF3 tapes: the tools. Two suits that are both animatronic and costume (`fnaf3-tape2-dual-suits`), built to walk toward sound so as to "stay where the children are" (`fnaf3-tape2-sound-cues`, new), opened with a crank "provided by the manufacturer" (`fnaf3-tape2-crank-from-manufacturer`, new), fatal when the springlocks slip (`fnaf3-tape3-springlock-bleeding`, `fnaf3-tape3-bleeding-out`, new). A room at every location that is off camera and invisible to the animatronics (`fnaf3-tape3-safe-room`). The suits retired after failures at "the sister location" (`fnaf3-tape4-sister-location-springlock-failures`), with "do as you wish" (`fnaf3-tape4-do-as-you-wish`, new). Then, in one tape, two reminders side by side: no customer is ever to be taken into the safe room (`fnaf3-tape5-no-customers-safe-room`), and "the Spring Bonnie animatronic has been noticeably moved" (`fnaf3-tape5-spring-bonnie-moved`, new). Then the rooms are walled up with their contents inside (`fnaf3-tape6-safe-rooms-sealed`, `fnaf3-tape6-nothing-taken-out`, new) and staff are told not to mention them to "family, friends, or insurance representatives" (`fnaf3-tape6-not-to-be-mentioned`, new).
- FNaF3 minigames: his end. In a building laid out like FNaF1's (`fnaf3-eon-map-fnaf1-layout`, new), empty and marked with dark puddles (`fnaf3-eon-puddles-empty-building`, new), a dark bear leads each of the four animatronics to a room it cannot enter (`fnaf3-eon-shadow-freddy-follow-me`), and the purple figure takes it apart (`fnaf3-eon-purple-guy-dismantles`). Five ghosts corner him in that room (`fnaf3-n5-ghosts-safe-room`). He climbs into the yellow rabbit suit and it closes on him (`fnaf3-n5-springlock-death`).
- FNaF3 nights: thirty years after the pizzeria closed (`scott-fnaf3-steam-description`), the attraction follows a lead to a boarded-up room (`fnaf3-call1-boarded-room-lead`) and finds "a real one" (`fnaf3-call2-found-a-real-one`), named Springtrap in the Extras (`fnaf3-springtrap-name`), with remains inside (`fnaf3-springtrap-corpse-screens`). The guard moves him about with a child's voice (`fnaf3-audio-lure-mechanic`, new), which is what the tape says the suit was built to follow. He can be made out in the photograph printed with the report of the fire (`fnaf3-it-burns-springtrap-hidden`).
- Scott's captions: "I am still here." (`scottgames-fnaf3-teaser-still-here`), "He always does." (`scottgames-fnaf3-teaser-he-always-does`), and the trailer's "He will come back. He always does. We have a place for him." (`scott-fnaf3-trailer-tagline`, new).

**Open.** His name (not in these games). Which yellow suit was used in 1987 (2.5). Whether the man who was caught is the purple figure (2.6). When he died (2.7). How he came to be inside a room that had been walled up.

**Connections.** [fnaf4-sl] `fnaf4-purple-guy-suits-up-employee`, `fnaf4-locked-backstage`, `sl-springlocks-breathing`, `sl-golden-freddy-cutscene-springtrap`. [ffps-ucn] `ffps-fruity-maze-follow-me`, `ffps-credits-william-afton`, `ffps-scraptrap-always-come-back`, and the Cassette Man's "He lured them all back. Back to a familiar place. Back with familiar tricks." (`ffps-insanity-lured-back`, `ffps-insanity-trap-again`), which reads as a description of the end-of-night minigames (2.9). [scott] `scott-2018-interview-purple-guy-in-springtrap`. [sb-mimic] `secret-of-the-mimic-mail-springlocks-hen` for "the manufacturer".

### 1.3 The buildings and the order of the three games

This thread is the spine of the timeline, and the theory treats it only in passing.

**Five places.**

| Place | What the slice says | Records |
|---|---|---|
| Fredbear's Family Diner | "the original restaurant", "closed for years" by November 1987; its owner cannot easily be traced | `fnaf2-call5-fredbears-family-diner` |
| "The old location" | A Freddy Fazbear's Pizza before the 1987 one. The older models come from it. People have "heard" things about it. "Left to rot for quite a while" by November 1987 | `fnaf2-call1-forget-old-location` (new), `fnaf2-call1-new-location`, `fnaf2-call2-older-models` |
| The 1987 restaurant | "New and improved", a "quirky modern design" with no doors and unlimited power, the new animatronics. Open "only a few short weeks". Closes after 11-13-1987 | `fnaf2-help-wanted-ad`, `fnaf2-call1-building-cannot-run-out` (new), `fnaf2-paycheck-1987`, `fnaf2-overtime-robots-scrapped` |
| FNaF1's restaurant | Two doors, rationed power, the four original characters only. Checks dated 11-12-xx and 11-13-xx. Closing "by year's end" | `fnaf1-paycheck-night5`, `fnaf1-news-closing`, `scott-fnaf1-steam-budget-cuts` (new) |
| Fazbear's Fright | A horror attraction "thirty years after Freddy Fazbear's Pizza closed", built from relics | `scott-fnaf3-steam-description`, `fnaf3-coming-soon-newspaper` |

**Order: FNaF2, then FNaF1, then FNaF3.** FNaF2's store text and first teaser present it as a sequel (`scott-fnaf2-steam-old-and-aging`, new; [scott] `scottgames-site-fnaf2-grand-reopening`), and only the Night 5 check turns it into 1987. Seven records then join it to FNaF1 from behind:

1. The closing newspaper: the new animatronics are scrapped and "the original characters are being kept" (`fnaf2-news-originals-kept`, new). FNaF1's cast is those four and no others (`fnaf1-custom-night-names`).
2. The CEO expects to "reopen someday, even if it is with a much smaller budget" (`fnaf2-news-reopen-smaller-budget`, new). FNaF1 runs on rationed power, "corporate budget cuts" (`scott-fnaf1-steam-budget-cuts`, new), where the 1987 building "cannot" run out (`fnaf2-call1-building-cannot-run-out`, new).
3. Phone Guy: "when the place eventually opens again I'll probably take the night shift myself" (`fnaf2-call6-night-shift-myself`, new). In FNaF1: "I actually worked in that office before you" (`fnaf1-call1-phone-guy-previous-guard`).
4. The older models are faceless and in pieces in 1987 (`fnaf2-parts-service-old-models`, new; `scott-fnaf2-trailer-captions`, new) and whole in FNaF1.
5. In 1987 the animatronics walk about by day (`fnaf2-call1-walk-around-during-day`, new). In FNaF1 they "used to", until the Bite of '87 (`fnaf1-call1-bite-of-87`).
6. The endoskeleton explanation is "a minor glitch" in 1987 (`fnaf2-call1-endoskeleton-glitch`, new) and settled house lore in FNaF1 (`fnaf1-call1-stuffed-into-suit`).
7. FNaF1 pays $120 a week (`fnaf1-help-wanted-ad`) and 1987 pays $100.50 (`fnaf2-help-wanted-ad`). Colour only.

**FNaF1's building is probably the old location, reopened** (2.1). Three records point the same way: the clipping's "the tragedy that took place *there*" (`fnaf1-news-closing`); FNaF3's minigame building, which has FNaF1's layout plus a springlock-era hidden room with the Spring Bonnie suit in it (`fnaf3-eon-map-fnaf1-layout`, new); and FNaF2's cutscenes, which show FNaF1's stage and dining room, with whole older animatronics, inside a game set in 1987 (`fnaf2-cutscenes-old-stage-through-eye-holes`, new).

**Open.** FNaF1's year. Which closure the thirty years count from. What "twenty years" measures (`fnaf1-call1-twenty-years`, 2.13). How Fredbear's Family Diner relates to "the old location": Phone Guy treats them as two places, one the "original restaurant" with an owner outside the company.

**Connections.** [fnaf4-sl] `fnaf4-fredbear-and-friends-1983`, `sl-handunit-freddy-fazbear-closing`. [ffps-ucn] `ucn-office-skins` (UCN's camera map follows FNaF1's pizzeria). [scott] `scottgames-site-fnaf3-source-30-years-later-only-one`.

### 1.4 November 1987: the week the new restaurant came apart

The theory gives this one paragraph. It is the best-dated week in the series and the calls tell it day by day.

| When | What is said or shown | Records |
|---|---|---|
| Before Night 1 | The first guard finishes his week, complains that characters move at night and try to get into the office, and is moved to the day shift | `fnaf2-call1-second-guard`, `scott-fnaf2-steam-description` |
| Night 1 | Forget what you heard about the old location. The new animatronics walk about by day and are tied to a criminal database. The engineers cannot explain the night wandering. A music box for "one of them", a Freddy head for the rest | `fnaf2-call1-forget-old-location` (new), `fnaf2-call1-walk-around-during-day` (new), `fnaf2-call1-criminal-database`, `fnaf2-call1-no-night-mode` (new), `fnaf2-call1-music-box`, `fnaf2-call1-summer-job` (new) |
| Night 2 | The older models: from the previous location, ugly, smelly, kept for parts, and they "shouldn't be able to walk around". Foxy starts to. The Puppet is "always...thinking" | `fnaf2-call2-older-models`, `fnaf2-call2-the-smell` (new), `fnaf2-old-models-walk-from-night2` (new), `fnaf2-call2-foxy-puppet`, `fnaf2-call2-loved-old-characters` (new) |
| Night 3 | The other three older models start to walk. "Rumors you might have heard lately": "whatever is going on out there, however tragic it may be, has nothing to do with our establishment". The day guard "has reported nothing unusual". Cutscene: the yellow bear stands in front of the viewer | `fnaf2-call3-rumors`, `fnaf2-call3-mangle`, `fnaf2-cutscenes-its-me` |
| Night 4 | "Somewhat of an investigation". Someone may have tampered with facial recognition. The characters are fine with children and stare at adults | `fnaf2-call4-investigation`, `fnaf2-call4-facial-recognition-tampered` |
| Night 5, check 11-12-1987 | Lockdown, "especially concerning any... previous employees". A day-shift post "just became...available". No replacement night guard yet. They will try to reach the owner of Fredbear's Family Diner | `fnaf2-call5-lockdown`, `fnaf2-call5-day-shift-vacancy` (new), `fnaf2-call5-fredbears-family-diner`, `fnaf2-paycheck-1987` |
| Night 6, check 11-13-1987 | The place is closed. "Someone used one of the suits... a yellow one... Now none of them are acting right." The yellow bear attacks for the first time. One more event tomorrow, a birthday; the guard is to stay close to the animatronics | `fnaf2-call6-yellow-suit`, `fnaf2-golden-freddy-night6-only` (new), `fnaf2-golden-freddy-office`, `fnaf2-call6-birthday-day-shift`, `fnaf2-call6-night-shift-myself` (new), `fnaf2-overtime-robots-scrapped` |
| After | New animatronics scrapped for "possible malfunctions", originals kept, a smaller reopening hoped for. A third guard, Fritz Smith, is fired on his first day | `fnaf2-news-originals-kept` (new), `fnaf2-news-reopen-smaller-budget` (new), `fnaf2-pink-slip-fritz-smith` |
| Undated, same building | SAVETHEM: the older Freddy follows the Puppet past five small bodies; a slumped yellow bear in a corner; the purple figure with the chest mark | `fnaf2-save-them`, `fnaf2-save-them-golden-freddy` (new), `fnaf2-save-them-purple-figure-chest-mark` (new), `fnaf2-save-them-you-cant` |

Two points of order that the theory blurs. The older models walk on Nights 2 and 3, before any tampering is reported, so the tampering does not explain them. And the lockdown (Night 5) comes before the report that the yellow suit was used (Night 6).

**Open.** What the "tragic" thing was. Who the investigation suspected. Why the day guard's post fell empty. Whether anyone died (2.3). Which suit (2.5). Whether the birthday is where the Bite of '87 happened (2.10). The check dates put Night 6 on 11-13, so "tomorrow" is 11-13 or 11-14.

### 1.5 The yellow bear (Golden Freddy)

- FNaF1: a poster turns into a yellow Freddy, a child's laugh plays, and a slumped, eyeless yellow bear is in the office; ignore it and the game closes (`fnaf1-golden-freddy-poster-office`, `fnaf1-golden-freddy-office-figure`, new). "IT'S ME" flashes with it (`fnaf1-its-me-hallucinations`). It can also appear after a game over (`fnaf1-post-mortem-golden-freddy`). FNaF1 does not name it.
- FNaF2: named "Golden Freddy" on the Custom Night screen (`fnaf2-custom-night-names`). Worn like the older models, an ear missing (`fnaf2-golden-freddy-office`). Inactive on Nights 1 to 5 and active from Night 6, the night of the yellow-suit call (`fnaf2-golden-freddy-night6-only`, new). Stands upright in front of the viewer in the Night 3 cutscene (`fnaf2-cutscenes-its-me`). Sits slumped in a corner of SAVETHEM's rooms (`fnaf2-save-them-golden-freddy`, new). Its jumpscare ends Give Gifts, Give Life, with a fifth body shown for one frame (`fnaf2-give-gifts-give-life`). A dark purple copy of it sits in Parts/Service (`fnaf2-shadow-freddy`).
- FNaF3: the fifth child at Happiest Day's table puts on a golden Freddy mask when the cake arrives (`fnaf3-happiest-day`). A fifth head with lit eyes stands behind the four on the "Bad ending." screen and is absent from the other (`fnaf3-bad-ending-heads`, `fnaf3-good-ending-heads`). Five ghosts appear though only four machines were dismantled (`fnaf3-n5-ghosts-safe-room`). A slumped bear in the same pose sometimes sits in the office (`fnaf3-office-slumped-bear`, new).

**Open.** Whether it is a physical suit, a ghost, or both at different times. In FNaF1 it behaves like the hallucinations. In FNaF2 it looks like a worn costume and, Chica apart, is the only yellow figure in the game. Whether it is the second springlock suit (2.5).

**Connections.** [ffps-ucn] `ucn-death-coin-fredbear`, `ucn-golden-freddy-final-cutscene`. [sb-mimic] `into-the-pit-golden-freddy-suit-hide`: a later game puts an empty yellow bear suit, named "the Golden Freddy Suit" by an achievement, in a Freddy's where the killer wears a yellow rabbit. [scott] `scott-2014-cant-explain-golden-freddy`, `scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`.

### 1.6 The Puppet and the child outside

- At the 1987 Prize Corner. Its music box must be kept wound (`fnaf2-call1-music-box`, `fnaf2-puppet-music-box-mechanic`). "It's always...thinking, and it can go anywhere", and the mask does not fool it (`fnaf2-call2-foxy-puppet`). Phone Guy "never liked" it, which suggests he knew it before these few weeks.
- In every death minigame but one. The player is the Puppet in Give Gifts, Give Life (`fnaf2-give-gifts-give-life`). It leads the older Freddy through the 1987 building (`fnaf2-save-them`). Its jumpscare ends the scene of the child killed outside (`fnaf2-take-cake-to-the-children`). It fills the view in the Night 4 cutscene (`fnaf2-cutscenes-its-me`).
- The child outside: Freddy serves cake to six children indoors while one cries at the window; a purple car, a purple figure, the child turns grey; the voice spells S-A-V-E-H-I-M.
- FNaF3: a huge kneeling, crying Puppet in a hidden room (`fnaf3-mangles-quest`); the Happiest Day player is a grey child in a Puppet mask who brings the cake and vanishes with the five (`fnaf3-happiest-day`).

**What follows from the slice alone.** The Puppet acts on four children who are already dead, so whatever makes it "think" came before their "life". FNaF1 to FNaF3 never say the Puppet holds the child from outside; the link is the jumpscare and the Puppet mask. The restaurant in Take Cake has Freddy performing among children, so it is not the 1987 building, where Freddy sits in the back.

**Connections.** [ffps-ucn] `ffps-security-puppet-assignment`, `ffps-security-puppet-trapped`, `ffps-security-puppet-dead-child`, `ffps-completion-shut-out`, `ffps-completion-my-daughter`, `ffps-insanity-wound-first-inflicted`, `ucn-puppet-lines`.

### 1.7 Phone Guy

One voice, three games, no name.

- 1987: a company man who phones the night guard. He "loved those old characters" and Foxy "was always my favorite" (`fnaf2-call2-loved-old-characters`, new). He "never liked that puppet thing". He plans to take the night shift himself after the reopening (`fnaf2-call6-night-shift-myself`, new).
- FNaF1: the guard before the player, "finishing up my last week" (`fnaf1-call1-phone-guy-previous-guard`). His messages were recorded in advance (`fnaf1-calls-prerecorded`, new). On the fourth recording he says it has been "a bad night here... for me", asks that someone "check inside those suits... in the back room", and adds "I always wondered what was in all those empty heads... back there" (`fnaf1-call4-phone-guy-attacked`, `fnaf1-call4-empty-heads`, new). The recording ends in banging, Freddy's tune, a groan, "Oh no" and a scream. Night 5 has only garbled voices (`fnaf1-call5-garbled`); Nights 6 and 7 have nothing.
- FNaF3: five "vintage" training tapes that open with the same "hello, hello" (`fnaf3-tapes-hello-hello-greeting`, new) and speak for management.

**Open.** Whether the tape voice is the caller (implied, never stated). Whether he died (implied). How long before the player's week the FNaF1 messages were made. No record makes him anything but an employee; on Night 6 of FNaF2 he speaks of the suit's user as "someone".

**Connections.** [fnaf4-sl] `fnaf4-reversed-phone-guy`. [ffps-ucn] `ucn-phone-guy-calls`. [sb-mimic] `into-the-pit-phone-guy-night1`, `into-the-pit-phone-guy-night3-stuffing` (a caller in the past pizzeria gives the same stuffing explanation).

### 1.8 The guards

| Guard | Game | What is known | Records |
|---|---|---|---|
| The first guard | FNaF2, before Night 1 | Unnamed. A week of nights, a complaint, the day shift. His day post is empty by Night 5 | `fnaf2-call1-second-guard`, `fnaf2-call3-rumors`, `fnaf2-call5-day-shift-vacancy` (new) |
| Jeremy Fitzgerald | FNaF2 Nights 1 to 6 | "The second guard". Checks of 11-12-1987 and 11-13-1987. Sent to work the birthday by day, "close to the animatronics" | `fnaf2-paycheck-1987`, `fnaf2-overtime-robots-scrapped`, `fnaf2-call6-birthday-day-shift` |
| Fritz Smith | FNaF2 Night 7 | "Employee # 03", fired on his first day for tampering with animatronics and odor | `fnaf2-pink-slip-fritz-smith` |
| Phone Guy | before FNaF1 | 1.7 | |
| Mike Schmidt | FNaF1 | Checks of 11-12-xx and 11-13-xx. Fired on Night 7 for tampering with the animatronics, general unprofessionalism and odor | `fnaf1-paycheck-night5`, `fnaf1-paycheck-night6`, `fnaf1-custom-night-pink-slip`, `fnaf1-help-wanted-ad`, `fnaf1-call3-play-dead` |
| The FNaF3 guard | FNaF3 | Never named; no check, no slip. "Part of the attraction" | `fnaf3-guard-unnamed` (new), `fnaf3-call1-attraction-opens` |

No record links any two of them. Three things repeat and should not be over-read: both games' checks carry the same day and month; both Custom Night slips give tampering and odor; and "Fritz" and "Jeremy" are also two of the four names on FFPS's gravestones ([ffps-ucn] `ffps-lorekeeper-gravestones`), while a "Jeremy" is Help Wanted's lost tester ([hw] `hw-game-over-remember-jeremy`).

### 1.9 The Bite of '87

One sentence in FNaF1 (`fnaf1-call1-bite-of-87`): the animatronics "used to be allowed to walk around during the day too. But then there was 'The Bite of '87'", and a person can live without the frontal lobe. Nothing says who was bitten, by which machine, or where. FNaF2 never uses the word (`fnaf2-no-bite-mention`). It supplies the frame: daytime walking still allowed in the week of 12 November 1987 (`fnaf2-call1-walk-around-during-day`, new), a restaurant that shuts within days, and one last event, a birthday, at which the guard is to "stay close to the animatronics and make sure they don't hurt anyone" (`fnaf2-call6-birthday-day-shift`). See 2.10.

**Connections.** [fnaf4-sl] `fnaf4-the-bite` (a different bite, in a week whose only printed year is 1983). [ffps-ucn] `ffps-lawsuit-head-bitten`.

### 1.10 The shadows

- A dark purple copy of the slumped yellow bear, with glowing eyes and teeth and a microphone, sits in Parts/Service where the older Bonnie normally sits (`fnaf2-shadow-freddy`).
- A black rabbit shaped like the new Bonnie stands in the 1987 office; stare at it and the game closes (`fnaf2-shadow-bonnie-office`).
- A dark purple bear says "follow me." and leads each of the four animatronics to the room where the purple figure destroys it. It is absent on the fifth night, when the player is a ghost (`fnaf3-eon-shadow-freddy-follow-me`).
- A black rabbit is the player in FNaF3's glitch minigame; it crosses between the other minigames' rooms and gives a crying child cake (`fnaf3-shadow-bonnie-minigame`).
- A slumped bear in the yellow bear's pose sometimes sits in the FNaF3 office (`fnaf3-office-slumped-bear`, new).

The games name neither figure and explain neither. The two act in opposite directions in FNaF3: the bear leads the four to destruction, the rabbit helps free a child. See 2.9.

### 1.11 What the guard sees that is not there

Each game has a layer of things that are seen and are not physically present, and FNaF3 says so.

- FNaF1: "IT'S ME" flashes and graffiti (`fnaf1-its-me-hallucinations`, `fnaf1-its-me-graffiti`), posters that change (`fnaf1-freddy-rips-head-poster`, `fnaf1-screaming-children-drawings`), heads that turn to the camera (`fnaf1-backstage-heads-stare`), an eyeless Bonnie (`fnaf1-post-mortem-golden-freddy`), and a Night 5 "call" made of the same sounds (`fnaf1-call5-garbled`).
- FNaF2: between-night scenes seen through the eye holes of a head, ending "it's me" (`fnaf2-cutscenes-its-me`, `fnaf2-cutscenes-old-stage-through-eye-holes`, new); rare figures (`fnaf2-jj-endo-puppet-visions`).
- FNaF3: "if you let that ventilation go offline, then you'll start seeing some crazy stuff" (`fnaf3-call1-ventilation-hallucinations`); burnt phantoms of the earlier casts that cannot kill (`fnaf3-phantom-hallucinations`). [scott] `scott-2015-fnaf3-multiple-springtraps-hallucinations`, `scottgames-site-fnaf3-all-in-your-mind`.

It matters for two arguments. FNaF1's yellow bear belongs to this layer in FNaF1 (it appears, vanishes and closes the game), so FNaF1 alone cannot show that it is a physical suit. And FNaF3's phantoms include the 1987 cast and the Puppet, so the guard, or the place, carries images from both earlier restaurants.

### 1.12 Fazbear Entertainment's conduct

A consistent pattern across all three games, which the theory uses nowhere.

- A missing person report only "within 90 days, or as soon as property and premises have been thoroughly cleaned and bleached" (`fnaf1-call1-company-disclaimer`).
- "Whatever is going on out there... has nothing to do with our establishment" (`fnaf2-call3-rumors`); "Fazbear Entertainment denies any wrongdoing" (`fnaf2-call4-investigation`).
- The public reason for scrapping the new animatronics is "possible malfunctions" (`fnaf2-news-originals-kept`, new).
- "We are free of liability, do as you wish" (`fnaf3-tape4-do-as-you-wish`, new). The sealed room is not to be mentioned to "insurance representatives" (`fnaf3-tape6-not-to-be-mentioned`, new).
- It explains the machines' attacks on staff as a quirk of programming, twice, in two different ways (`fnaf1-call1-free-roaming-mode`, `fnaf2-call1-no-night-mode`, new; `fnaf1-call1-stuffed-into-suit`, `fnaf2-call1-endoskeleton-glitch`, new), and admits in 1987 that "our engineers don't really have an explanation".
- It was "much cheaper to hire you as a security guard than to find a repairman" (`scott-fnaf1-steam-budget-cuts`, new), and guards who survive are fired for "odor" (`fnaf1-custom-night-pink-slip`, `fnaf2-pink-slip-fritz-smith`).

**Connections.** [hw] `hw-intro-loosely-based-on-actual-events`, `hw-tape-13-fe-hired-developer`: Help Wanted later says the company commissioned games to "conceal and make light of what happened". [fnaf4-sl] `fnaf4-pigtail-girl-hide-your-body`.

### 1.13 Fazbear's Fright and the fire

"A new attraction based on the unsolved mysteries of Freddy Fazbear's Pizza", "featuring actual relics from the decades-old pizzeria" (`fnaf3-coming-soon-newspaper`). It opens in a week and the guard is part of the show (`fnaf3-call1-attraction-opens`). The relics: drawings, a Foxy head, a desk fan (`fnaf3-call1-relics-foxy-head`); a box holding the heads of the 1987 cast, a hand, a hook, a guitar and a paper-plate doll, and an empty Freddy suit on a stand (`fnaf3-office-box-toy-heads`, new), matching Scott's "empty shells, a hand, a hook, an old paper-plate doll" (`scott-fnaf3-steam-description`). So the collectors drew on the 1987 restaurant as well as the older characters. Then the one real find (1.2). The attraction burns, "faulty wiring" being the likely cause, and what was salvaged goes to "public auction" (`fnaf3-it-burns-newspaper`), with Springtrap in the photograph (`fnaf3-it-burns-springtrap-hidden`).

**Connections.** [ffps-ucn] the memo for that slice asks whether the "public auction" should be joined to FFPS's salvage and "Rare Finds Auction" (`ffps-lefty-rare-finds-five-dollars`). Yes, in one sentence, as an unstated but natural bridge: FNaF3's last printed fact is that the survivors of the fire were sold. [fnaf4-sl] `sl-golden-freddy-cutscene-springtrap`. [hw] `hw2-fazerblast-fire-springtrap`.

### 1.14 Outside the story

Scott's development notes in the margins of FNaF3's newspapers (`fnaf3-newspaper-developer-notes`, new); the 1/9/8/7 easter egg (`fnaf1-1987-code`); "Freddybear" (`scott-fnaf1-steam-freddybear`). See 6.3.

---

## 2. Contested questions

Confidence words (high, medium, low) are for what the records in this slice support, with other slices' records named where they decide the matter.

### 2.1 Where does FNaF1 sit, and is its restaurant the old location?

**FNaF1 comes after November 1987: high.** The seven joins are listed in 1.3. Nothing in the slice points the other way. FNaF2's store text and first teaser were written to look like a sequel (`scott-fnaf2-steam-old-and-aging`, new; [scott] `scottgames-site-fnaf2-grand-reopening`), which is why the printed 1987 was a reveal.

**Readings of FNaF1's building.** (A) It is the pre-1987 "old location", reopened after the 1987 restaurant failed. (B) It is a third building, opened after 1987.

For A:

- "After a long struggle to stay in business after the tragedy that took place there many years ago" (`fnaf1-news-closing`). The tragedy happened at the business that is now closing, and the clipping hangs on that business's wall.
- The building where the killer dies has FNaF1's layout and one room more, the room with the Spring Bonnie suit (`fnaf3-eon-map-fnaf1-layout`, new). The tapes say "Every location is built with one extra room" (`fnaf3-tape3-safe-room`) and that such rooms were walled up "at most locations. Including this one", contents and all (`fnaf3-tape6-nothing-taken-out`, new). So FNaF1's building existed in the springlock era. The tapes' "locations" and "the sister location" describe a company with several sites, which is not the single small-budget restaurant that follows 1987.
- FNaF2's cutscenes, inside a game set in 1987, show FNaF1's stage and dining room with the older Bonnie and Chica whole (`fnaf2-cutscenes-old-stage-through-eye-holes`, new), when the same game's older Bonnie has no face (`fnaf2-parts-service-old-models`, new).
- The old restaurant was "left to rot for quite a while" (`fnaf2-call1-new-location`): it still stood, unused, in 1987. A company expecting to reopen "with a much smaller budget" and keeping the original characters (`fnaf2-news-reopen-smaller-budget`, `fnaf2-news-originals-kept`, both new) has a building and a cast to hand.

For B: only silence. FNaF1's ad says nothing of a reopening (`fnaf1-help-wanted-ad`), and the clipping's "there" could mean the brand.

**Verdict: A, medium.** `places.ts` already carries it as a note under the original location. No chapter of the theory says it, and the murders chapter needs it (section 3, item 2).

### 2.2 When and where were the five killed?

**Readings.** (A) Before 1987, at the older Freddy Fazbear's Pizza (the theory's pick). (B) In 1987, at the FNaF2 restaurant. (C) After 1987, at FNaF1's restaurant.

For A:

- The company's bad name belongs to the old location and is older than the new restaurant: "forget anything you may have heard... about the old location... some people still have a somewhat... negative impression of the company" (`fnaf2-call1-forget-old-location`, new).
- The new restaurant's selling point answers a predator who has already struck: machines that "can detect a predator a mile away" (`fnaf2-call1-criminal-database`).
- The older models smell before the week begins (`fnaf2-call2-the-smell`, new) and walk when they "shouldn't be able to", before anything is reported (`fnaf2-old-models-walk-from-night2`, new).
- Five children lie dead in a room where the old Foxy is still a working act (`fnaf2-foxy-go-go-go`). In 1987 that Foxy is in the back room, and in FNaF1 he is out of order.
- The masks the Puppet hands out are those of the four old characters (`fnaf2-give-gifts-give-life`).
- The method belongs to the springlock years: a room off camera, a rule against taking customers into it, and the Spring Bonnie suit "noticeably moved" (`fnaf3-tape5-no-customers-safe-room`, `fnaf3-tape5-spring-bonnie-moved`, new). By 1987 the yellow suit is only "a spare in the back".

Against B: the clipping's June 26th cannot fall inside a restaurant that was open "only a few short weeks" before mid-November (`fnaf1-news-kids-vanish`, `fnaf2-overtime-robots-scrapped`). For B there is only SAVETHEM (2.3).

Against C: every FNaF2 record above. C would need the smell, the reputation and the Foxy minigame to be about something else.

**How long before 1987.** After the disappearances the restaurant kept trading and fought "an uphill battle ever since" (`fnaf1-news-uphill-battle`, new), was threatened with shutdown "again" (`fnaf1-news-sanitation`), closed, and stood rotting "for quite a while" before a new building with new machines opened in autumn 1987. June 1987 is therefore barely possible; June 1986 or earlier is the natural reading. The slice gives no year. [sb-mimic] `into-the-pit-past-year-1985` is the only year any game attaches to a scene like this, and that record is itself hedged.

**Verdict: A. Before the 1987 restaurant opened, at the older Freddy Fazbear's Pizza: medium-high.** The theory's pick is right, but it rests it on two supports only: the smell, cited through a record that did not quote it, and "many years ago", which measures back from FNaF1, whose own year is unknown.

### 2.3 Were there two sets of murders, before 1987 and in 1987?

Two questions are tangled here.

**Was there a second incident in November 1987? Yes: high.** Rumours of something "tragic" going on "lately", an investigation, tampering, a lockdown aimed at "previous employees", a post that "just became available", a suit used, a closure (1.4). The company's denials are the evidence.

**Did five more children die? Probably not: low-medium.**

For five more: SAVETHEM shows five small bodies among the 1987 cast (`fnaf2-save-them`), with the purple figure present (`fnaf2-save-them-you-cant`) and drawn with a chest mark he has nowhere else (`fnaf2-save-them-purple-figure-chest-mark`, new).

Against:

- FNaF1's clippings, pinned up in a later year, know one "incident", one "tragedy" and five children (`fnaf1-news-five-children`, `fnaf1-news-closing`).
- FNaF3 has five ghosts and five masks (`fnaf3-n5-ghosts-safe-room`, `fnaf3-happiest-day`).
- The public reason for the 1987 closure is "possible malfunctions" (`fnaf2-news-originals-kept`, new).
- Later games count six dead children in all, the five and the Puppet's: [ffps-ucn] `ffps-lorekeeper-gravestones`; [hw] `hw2-memory-dolls`, `hw2-pq4-graveyard-order`. Five more leave no graves.
- The death minigames are not literal about place. SAVETHEM's player is the older Freddy, who in that building sits in Parts/Service. A voice tells him to "save them", and the game answers "you can't". That reads as a memory carried into the building he now walks.

A hybrid (two in June, three more in 1987) is excluded by the clipping, which links all five to one incident.

**What did happen in 1987, then?** The slice supports this much: someone with inside knowledge came back (tampering; a suit from the back used; "previous employees"), something tragic was being talked about in the town, the day guard's post emptied, and the yellow bear began to attack. Who suffered is not stated.

**Verdict.** The theory's "This stays open" is right for the bodies. It should say that the incident itself is certain, and that the later games' count of the dead is the strongest argument against a second five.

### 2.4 Is Golden Freddy the fifth missing child?

**For.** A "four plus one" pattern recurs wherever the children are counted:

| Scene | Four | Plus one | Record |
|---|---|---|---|
| FNaF1 | four animatronics | five children; a yellow bear that comes and goes | `fnaf1-news-five-children`, `fnaf1-golden-freddy-office-figure` (new) |
| Give Gifts, Give Life | four masks given | a fifth body for one frame, with the yellow bear's jumpscare | `fnaf2-give-gifts-give-life` |
| FNaF3 Night 5 minigame | four machines dismantled | five ghosts | `fnaf3-n5-ghosts-safe-room` |
| Happiest Day | Freddy, Bonnie, Chica and Foxy masks | a golden Freddy mask on the child at the end of the table | `fnaf3-happiest-day` |
| "Bad ending." | four heads | a fifth behind them, eyes lit | `fnaf3-bad-ending-heads` |

Later games repeat it: a row of five stones with the fifth hidden ([ffps-ucn] `ffps-lorekeeper-gravestones`), a Golden Freddy doll among six ([hw] `hw2-memory-dolls`).

**Complications.**

- The fifth is always the odd one. No mask is put on him, no machine of his is dismantled, and the yellow bear appears and vanishes where the others walk. No scene joins a child to a yellow suit.
- In FNaF2 the yellow bear wakes only on the night the yellow suit is reported used (`fnaf2-golden-freddy-night6-only`, new). If that use is what wakes him, his tie to the suit may be later than the other four's (2.5).
- Other slices: [ffps-ucn] `ucn-death-coin-fredbear`, `ucn-golden-freddy-final-cutscene`; [scott] `scott-2014-cant-explain-golden-freddy`.

**Verdict: yes, the yellow bear stands for the fifth of the five: medium-high within FNaF1 to FNaF3.** The theory's pick is supported and has more behind it than the chapter cites. Its sentence "So Golden Freddy is bound to a golden bear like the other four were to theirs" goes past the records: how and when the fifth came to the yellow bear is the one thing every scene withholds.

### 2.5 What is "a yellow one"?

"Someone used one of the suits. We had a spare in the back, a yellow one. Someone used it. Now none of them are acting right." (`fnaf2-call6-yellow-suit`)

**Readings.** (A) The yellow bear, the suit FNaF1 and FNaF2 show slumped; in FNaF3's terms, the second of the two springlock suits. (B) Spring Bonnie, the theory's pick. (C) Left unspecified on purpose.

For A, inside FNaF2:

- It is the only empty yellow costume either of the first two games shows (`fnaf1-golden-freddy-office-figure`, new; `fnaf2-golden-freddy-office`), and in FNaF2 it is worn and damaged like the older models "from the previous location". Chica is yellow as well, and the older Chica sits in the back room, but she is a working animatronic in plain view, not "a spare".
- It is inactive for five nights and attacks from the night of this call (`fnaf2-golden-freddy-night6-only`, new).
- It stands before the viewer in the Night 3 cutscene (`fnaf2-cutscenes-its-me`) and sits in SAVETHEM's rooms (`fnaf2-save-them-golden-freddy`, new).
- Its dark twin sits in Parts/Service, the back (`fnaf2-shadow-freddy`).
- [scott] In January 2015 the audience took the first FNaF3 teaser for Golden Freddy, and Scott knew it (`scott-2018-interview-fnaf3-teaser-read-as-golden-freddy`).

For A, from FNaF3's own tapes:

- There are two suits (`fnaf3-tape2-dual-suits`), a bear and a rabbit on one stage (`fnaf3-stage01-fredbear-spring-bonnie`).
- The rabbit is accounted for. It is at the tapes' location, "noticeably moved" (`fnaf3-tape5-spring-bonnie-moved`, new); that location's safe room is then walled up with "nothing... taken out" (`fnaf3-tape6-nothing-taken-out`, new); and it is in that room, in the building with FNaF1's layout, when the killer dies (`fnaf3-n5-ghosts-safe-room`). The 1987 restaurant is a different building (`fnaf2-call1-building-cannot-run-out`, new).
- If the walling-up came before November 1987, Spring Bonnie was behind a false wall in another building when "a yellow one" was used. The tapes' "at most locations" suits the years before 1987 (2.1).
- The bear is not accounted for by the tapes at all. "The classic suits are being retired to an appropriate location" (`fnaf3-tapes-freddy-fazbears-pizza`). A spare in the back of the next restaurant is one.

For B: the rabbit is the killer's suit wherever a later game shows him in one. He runs to it (`fnaf3-n5-springlock-death`). [fnaf4-sl] `fnaf4-purple-guy-suits-up-employee`; [ffps-ucn] `ffps-fruity-maze-follow-me`; [sb-mimic] `into-the-pit-yellow-rabbit-naming`; [hw] `hw-rabbit-figure-appearance`.

Against B: it needs the sealing to be later than 1987, or the suit to have been taken out and put back, and it leaves the yellow bear's waking on that very night as coincidence.

A further reading of "used" cannot be excluded and has no record: the suit was used on someone, not worn. It would explain why the fifth child is always apart from the four. Low; listed so that the writer does not assume "used" means "wore".

**Verdict: from this slice, A, low-medium.** B is carried by later games. The theory's premise, that FNaF2 pointed at the yellow bear, is right and stronger than it knew. Its conclusion does not follow from it. If the yellow bear is the second springlock suit, FNaF3 changed nothing about FNaF2's sentence, and there is no retcon here to find. What would settle it: a date for the Night 6 tape relative to November 1987.

### 2.6 What does "Suspect convicted" mean when the killer is free in every later game?

**The printed facts.** A man was identified on video and "captured the following morning" (`fnaf1-news-suspect-captured`, new). The headline says "convicted"; the text under it says "the suspect has been charged" and that the bodies were never found (`fnaf1-news-charged-vs-convicted`, new). He is not named.

**What later games do with it.**

- FNaF2: in 1987 the company is locking the building against "previous employees" (`fnaf2-call5-lockdown`), a purple figure is at large in that building (`fnaf2-save-them-you-cant`), and someone gets at a suit in the back (`fnaf2-call6-yellow-suit`).
- FNaF3: he dies free, years later (2.7), and the attraction is "based on the unsolved mysteries of Freddy Fazbear's Pizza" (`fnaf3-coming-soon-newspaper`).

**Readings.** (A) The right man was caught and charged, and the case failed for want of bodies. (B) The wrong man was caught. (C) He was convicted, served a sentence and came out. (D) Scott wrote a closed case in the first game and reopened it in the next two.

C is the only reading the records resist: a conviction for five children does not put a man back in a restaurant within a year or two. A and B cannot be told apart, because no game joins the caught man to the purple figure. D is the out-of-universe account of A and B, and it is the best fit in this slice for Scott's one retcon ([scott] `scott-2017-one-retcon`, `scott-2017-retcon-seamless`): the first game printed it, the next two went another way without contradicting a line, and nobody argues about it. Scott has said the first game was written without the whole story planned ([scott] `scott-2018-interview-first-game-snippet-of-larger-story`).

**Verdict.** State the fact as "a man was caught the next morning and charged" (high) and nothing more. The theory's retcon chapter demotes this candidate because "no later game integrates or addresses it". FNaF3's "unsolved mysteries" does address it. As the retcon: low-medium, and better than the yellow suit. The `scott` memo (2.10) ranks it first on Scott's wording alone.

### 2.7 When and where did the killer die?

**Where: the hidden room of the building with FNaF1's layout: high** (`fnaf3-eon-map-fnaf1-layout`, new; `fnaf3-n5-ghosts-safe-room`).

**When. Readings.** (A) After FNaF1's restaurant closed. (B) Between the old location's closure and the 1987 opening, while it was "left to rot".

For A:

- He is alive and active in November 1987 (1.4, 2.3).
- The four animatronics he destroys are whole and in their FNaF1 places, three on the stage and Foxy at his curtain (`fnaf3-eon-map-fnaf1-layout`, new). In 1987 they are damaged and kept for parts, the older Bonnie without a face.
- The building is empty of people and has puddles on its floors (`fnaf3-eon-puddles-empty-building`, new). FNaF1's restaurant was to close "by year's end" (`fnaf1-news-closing`).
- FNaF1's haunting needs the four intact and occupied through FNaF1. After his death the ghosts "fade away" (`fnaf3-n5-springlock-death`).
- What Fazbear's Fright finds thirty years on is "empty shells, a hand, a hook" (`scott-fnaf3-steam-description`) and a Foxy head (`fnaf3-call1-relics-foxy-head`), and the end screens show four loose heads (`fnaf3-bad-ending-heads`). That fits four machines that were never rebuilt after he took them apart.

For B: "that old restaurant was kind of left to rot for quite a while" matches the empty, wet building (`fnaf2-call1-new-location`), and Scott's FNaF2 trailer captions the older models "dismantled" (`scott-fnaf2-trailer-captions`, new).

Against B: it leaves no living culprit for November 1987, and it has FNaF1's animatronics rebuilt and haunted again after the ghosts have gone.

**A tension under either reading.** The room was walled up with its contents (`fnaf3-tape6-nothing-taken-out`, new), yet he and the ghosts go in and out of it. The games do not show him opening it. Thirty years later it is "boarded up" (`fnaf3-call1-boarded-room-lead`).

**Verdict: after FNaF1's restaurant closed: medium.** The theory's "The games do not date his death" underclaims, and `timeline.ts` has the sealing after the death, which the tapes rule out (section 3, items 10 and 11).

### 2.8 Does FNaF3's good ending free the children, and how does that square with later games?

**Inside FNaF3.** Cake to each crying child, the hidden Happiest Day, six children vanishing as their masks fall and balloons rise (`fnaf3-good-ending-requirements`, `fnaf3-happiest-day`). The game's own labels: the lit-eyed screen is captioned "Bad ending." and the other only "the end" (`fnaf3-bad-ending-heads`, `fnaf3-good-ending-heads`). The harder ending is the one that needs every secret found. Scott thought of FNaF3 as "the end of a trilogy" ([scott] `scott-2018-interview-fnaf3-end-of-trilogy`). Within the three games the release is the intended resolution: medium-high.

**Against later games.** [ffps-ucn] spirits are still in machines (`ffps-completion-give-up-spirits`, `ffps-insanity-small-souls-prisons`), and the daughter is still bound (`ffps-completion-my-daughter`). Asked in 2018 which ending happened, Scott said "The answer is very interesting. The answer is complex." and would not give it ([scott] `scott-2018-interview-fnaf3-ending-unanswered`).

**Readings.** (A) It happened, and what later games hold is something else: other victims, or what the killer took from the five when he "robbed them of the only thing that they had. Again." ([ffps-ucn] `ffps-insanity-trap-again`). (B) The bad ending is what happened, and Happiest Day is what was owed. (C) It happened for the five, and the sixth, the Puppet-masked child, did not stay gone: FFPS says she "would return as well". (D) The later games overrode it.

This slice cannot choose. It can narrow the conflict: the only one of Happiest Day's six whom a later game shows still bound is the Puppet's child. The five are not shown trapped again in FFPS by name.

**Verdict.** The theory's "This stays open" is supported. Add the game's own captions and Scott's refusal, and say that the conflict is with the sixth child, not plainly with the five. "Complex" favours A or C over B.

### 2.9 Who or what are the dark bear and the dark rabbit?

Records in 1.10. The games name neither and explain neither.

**The dark bear. Readings.** (A) The killer's lure. (B) A guide working for the children. (C) An after-image of the yellow bear.

- For A: its colour is the killer's. Its one line, "follow me.", leads each machine to the room where he destroys it (`fnaf3-eon-shadow-freddy-follow-me`). [ffps-ucn] the Cassette Man says "He lured them all back. Back to a familiar place. Back with familiar tricks." (`ffps-insanity-lured-back`), and "Follow me." is the line shown when the yellow rabbit stands behind a crying girl (`ffps-fruity-maze-follow-me`). In FNaF2 it sits in the back room, and the spare suit was kept "in the back".
- For B: following it ends with the ghosts free and the killer dead. It does not appear on the night the ghost walks in by itself.
- For C: it is the yellow bear's model, pose, hat and microphone (`fnaf2-shadow-freddy`), and a slumped bear of that shape is still at Fazbear's Fright (`fnaf3-office-slumped-bear`, new).

**Verdict: A, low-medium,** and only because of FFPS's wording. On this slice alone A and B are level.

**The dark rabbit.** It has the 1987 Bonnie's shape (`fnaf2-shadow-bonnie-office`). In FNaF3 it is the one character that can pass between the other minigames' rooms, and it brings cake to the last crying child (`fnaf3-shadow-bonnie-minigame`). What it does in FNaF3 is help: medium. What it is: nothing.

The theory mentions the dark bear once, as a colour association in the retcon chapter, and the rabbit nowhere. Proposal in section 4.

### 2.10 What was the Bite of '87?

**Stated.** A bite in '87 ended daytime walking, and the victim lived without a frontal lobe (`fnaf1-call1-bite-of-87`). Nothing else.

**The window the records give.** Daytime walking is still allowed, and boasted of, in the week of 12 November 1987 (`fnaf2-call1-walk-around-during-day`, new). That restaurant has been open "only a few short weeks" and closes within days (`fnaf2-overtime-robots-scrapped`). The old location had by then been rotting "for quite a while", so no Freddy's but this one was open in late 1987. If the rule Phone Guy recalls in FNaF1 is the one in force in FNaF2, the Bite falls between the Night 1 call and the closure. The only event the game puts in that gap is the birthday, on 11-13 or 11-14, at which the guard is told to "stay close to the animatronics and make sure they don't hurt anyone" (`fnaf2-call6-birthday-day-shift`).

**Against.** FNaF2 never mentions a bite (`fnaf2-no-bite-mention`). FNaF1's sentence is spoken about FNaF1's own characters, the older four, who in 1987 are in the back. A bite at the old location early in 1987 cannot be excluded, though the new restaurant then lets its machines walk by day regardless.

**Verdict.** In the last days of the 1987 restaurant: medium. At the birthday: low. Who bit and who was bitten: nothing. The theory treats the Bite only as "a separate incident" from FNaF4's, which is right ([fnaf4-sl] `fnaf4-the-bite`); `timeline.ts` says "the games never connect them", which is true and can be tightened to this window.

### 2.11 Is Phone Guy one man across the three games, and what happens to him?

**One man: medium-high.** The same greeting and halting manner (`fnaf3-tapes-hello-hello-greeting`, new); a career that joins up, from company caller in 1987 who means to "take the night shift myself" (`fnaf2-call6-night-shift-myself`, new) to "I actually worked in that office before you" (`fnaf1-call1-phone-guy-previous-guard`); and a memory of the old characters (`fnaf2-call2-loved-old-characters`, new). Never stated. The seven older tape records already tag the speaker as `phone-guy`.

**His end: medium-high that he does not survive his last week.** The messages were recorded in advance (`fnaf1-calls-prerecorded`, new), the fourth on "a bad night here... for me" with banging behind it, and it ends in the game's attack sounds and a scream (`fnaf1-call4-phone-guy-attacked`). Nothing follows but garbled voices (`fnaf1-call5-garbled`). Which machine, and whether the scream is the yellow bear's as the wiki says: not established.

**What he knew.** In 1987 he repeats the company's denials. At the end he asks that someone "check inside those suits... in the back room" and says he "always wondered what was in all those empty heads" (`fnaf1-call4-empty-heads`, new). That is the nearest FNaF1 comes to an employee suspecting where the children went.

**Consequence for dating.** If the tapes are his, every tape predates his last week at FNaF1's restaurant.

### 2.12 Are the guards connected?

Nothing in the slice connects Mike Schmidt, Jeremy Fitzgerald, Fritz Smith or the FNaF3 guard (1.8).

- The theory's "open" chapter says Mike Schmidt and Michael "share a first name and nothing else in the games". From this slice that holds. The usual further argument is the pink slip's "Odor" (`fnaf1-custom-night-pink-slip`). Fritz Smith's slip gives the same reason (`fnaf2-pink-slip-fritz-smith`), and smell clings to the machines themselves in both games (`fnaf2-call2-the-smell`, `fnaf1-news-sanitation`), so the word cannot carry an identification by itself.
- "Tampering with the animatronics" is on both slips and is what the Custom Night lets the player do. Reading Fritz Smith as the returning "previous employee" has no record.
- The FNaF3 guard has no name (`fnaf3-guard-unnamed`, new). Any identification of him is another slice's to make.
- The names Fritz and Jeremy recur on two of FFPS's gravestones. The stones are children's, and the guards are adults employed in 1987, after the five died on this memo's reading (2.2). No record connects them. It should be said once, because readers will notice.

### 2.13 "Twenty years", "thirty years" and FNaF1's year

- **"Twenty years"** (`fnaf1-call1-twenty-years`) measures how long the characters have sung, not how long since 1987. The four are "the original characters", "old and aging" and second-hand already in 1987 (`fnaf2-news-originals-kept`, `scott-fnaf2-steam-old-and-aging`, both new; `fnaf2-call2-older-models`). Taken literally it puts their first songs twenty years before FNaF1 and says nothing about how far FNaF1 is from 1987.
- **FNaF1's year.** After 1987. The closing clipping's own words, "a long struggle", "a year-long search for a buyer", "many years ago" (`fnaf1-news-closing`), make November 1988 the earliest possible date and a later one more natural. The checks blank the year and share their day and month with FNaF2's (`fnaf1-paycheck-night5`, `fnaf2-paycheck-1987`).
- **"Thirty years after Freddy Fazbear's Pizza closed"** (`scott-fnaf3-steam-description`). The figure is Scott's, from the store text and his page keywords; nothing inside FNaF3 states it. In the game the pizzeria is "decades-old", the chain "ancient" and the cassettes "prehistoric". The slice favours FNaF1's closure as the one meant: the find is made in the building with FNaF1's layout, and the papers speak of a "decades-old pizzeria" and "an ancient pizzeria chain" (`fnaf3-coming-soon-newspaper`, `fnaf3-it-burns-newspaper`). Medium-low; the difference from the 1987 closure is the unknown gap between FNaF2 and FNaF1.
- **"Summer job"** (`fnaf2-call1-summer-job`, new; [scott] `scott-2014-fnaf1-store-summer-job`) is a stock phrase carried from FNaF1's sales copy into FNaF2's first call. Both games' checks are dated in November. It dates nothing.

**Verdict.** No year can be fixed for FNaF1 or FNaF3. The theory's compressed convention sits at the earliest edge of what the clipping allows.

### 2.14 What do FNaF2's cutscenes show?

**Shown.** A view through the eye holes of a head, from Freddy's place on FNaF1's stage, with the older Bonnie and Chica whole on either side (`fnaf2-cutscenes-old-stage-through-eye-holes`, new). They turn to stare. After Night 3 the yellow bear stands in front of the viewer; after Night 4 the Puppet's face fills the view; the scenes end "err" or "it's me" (`fnaf2-cutscenes-its-me`).

**Readings.** (A) The older Freddy's own memory of the old location, or the memory of whoever is in him. (B) The guard's dream. (C) A glimpse of FNaF1 to come.

For A: the viewpoint is Freddy's, and the player is also Freddy in two of the death minigames (`fnaf2-take-cake-to-the-children`, `fnaf2-save-them`). The room is not the 1987 building. "It's me" is what FNaF1's hallucinations say (`fnaf1-its-me-hallucinations`). The wiki reports a mechanical turning sound for the viewer's head and a file name "dream"; neither was checked.

**Verdict: A, low-medium.** It matters because under A these scenes are FNaF2's only look at the old location in working order, and they put FNaF1's rooms before 1987 (2.1). [sb-mimic] `secret-of-the-mimic-ending-clock-out` later stages the same picture, a person inside a yellow bear suit on a stage between Chica and Bonnie.

### 2.15 Who is the child outside in Take Cake to the Children?

The slice gives a grey crying child at the window, a purple car, a purple figure, and a voice spelling S-A-V-E-H-I-M, with the Puppet's jumpscare to close (`fnaf2-take-cake-to-the-children`). It gives no name, no sex beyond that "him", and no statement that this child is in the Puppet. Everything that makes the child the Cassette Man's daughter is in FFPS. Two things from this slice bear on it: the Puppet-masked child of Happiest Day is the one who brings the cake and leaves with the five (`fnaf3-happiest-day`), and the Puppet is already active when it gives the four their masks (`fnaf2-give-gifts-give-life`), which puts this death before theirs. The "him" stays a recorded tension.

---

## 3. Problems in the current theory

Quoted phrases are from `theory.ts` unless another file is named. Items 1, 9, 10, 11, 15 and 16 change what the model says; the rest tighten it.

### Chapter `murders`

1. **A quotation that was not in the game.** The chapter leans on `fnaf1-news-closing` for "many years ago". That record's quote read "the tragedy that struck there many years ago", which is the wiki's transcription. The clipping reads "the tragedy that **took place there** many years ago". The record is fixed. Any pull quote must use the new wording, and the word that matters is "there": the tragedy is placed at the restaurant that is closing.
2. **"The records bound the date: by the 1987 location, the old models 'from the previous location' already smell... and by FNaF1 the tragedy was 'many years ago'... So the murders most likely happened before 1987, at an earlier location."** Right conclusion, weak argument. "Many years ago" counts back from FNaF1, which has no year. The smell is real support but is cited through a record whose quote did not contain it. Use instead: `fnaf2-call1-forget-old-location`, `fnaf2-call2-the-smell`, `fnaf2-old-models-walk-from-night2`, `fnaf2-foxy-go-go-go`, the June 26th against "only a few short weeks" (`fnaf1-news-kids-vanish`, `fnaf2-overtime-robots-scrapped`), and the Night 5 tape (2.2). Then say which earlier location: the old one, which is probably FNaF1's own building (2.1).
3. **The arrest is missing from the chapter.** "A man in a mascot costume lures children into a back room... and five are linked to the case." The same clippings say he was identified on video, captured the next morning and charged (`fnaf1-news-suspect-captured`, `fnaf1-news-charged-vs-convicted`). A reader of this chapter is never told that the first game closes the case. It appears only in the retcon chapter, as a runner-up.
4. **"The costume is the yellow rabbit: Fruity Maze puts Spring Bonnie behind a crying girl."** Stated as fact on one later minigame that does not show the five. FNaF1 says only "a company mascot" (`fnaf1-news-dressed-as-mascot`). Inside the first three games the support is the Night 5 tape (`fnaf3-tape5-no-customers-safe-room`, `fnaf3-tape5-spring-bonnie-moved`) and his run to that suit (`fnaf3-n5-springlock-death`). Say "most likely the yellow rabbit" and cite those first.
5. **"...and the old haunted models are stored in back [[fnaf2-call2-older-models]]."** "Haunted" has no citation here. The records for it in 1987 are `fnaf2-old-models-walk-from-night2` and `fnaf2-call2-the-smell`.
6. **"Someone tampers with facial recognition, someone uses 'a yellow one', and the building locks down against 'previous employees'."** The list is out of the calls' order: the lockdown is Night 5 and the report of the suit is Night 6. The sentence also leaves out the rumours of something "tragic" (Night 3), the investigation (Night 4), the day-shift vacancy (Night 5), the yellow bear's first attacks (Night 6), the birthday, and the public reason for the closure. Use the table in 1.4.
7. **"The game does not say whether these are new victims or the earlier five. This stays open."** Keep, and add two things: that a second incident in 1987 is certain, and that later games count six graves in all (2.3).
8. **"The games never *show* the bodies going into the suits, but together these strongly suggest it."** The strongest pair is not cited: Phone Guy's "eyeballs and teeth... pop out the front of the mask" (`fnaf1-call1-eyeballs-teeth`) and the game-over screen (`fnaf1-game-over-eyes-teeth`), set beside the clipping's "blood and mucus around the eyes and mouths of the mascots". Add `fnaf1-call4-empty-heads`.
9. **"When she died, relative to the others, is not given."** It can be said at medium, from this slice and FFPS together: the Puppet is already active when it gives the four their masks (`fnaf2-give-gifts-give-life`), so if the child outside is the Puppet's, she died before them (2.15; the `ffps-ucn` memo argues the same from the Cassette Man's words).

### Chapter `springtrap`

10. **"The games do not date his death."** They bound it. He is alive in November 1987, the four machines he destroys are in their FNaF1 state and places, and what the attraction finds is their shells (2.7). Say "after FNaF1's restaurant closed (medium)". The storyline beat `s-springlock` has `when: "Undated"` and `era: "funtime"` and should move with it.
11. **"Hidden rooms like this were sealed with nothing removed first [[fnaf3-tape6-safe-rooms-sealed]]."** Placed after the death, this reads as a consequence of it, and `timeline.ts` (`t-dismantle-and-death`) says so outright: "The safe rooms are then sealed". The sealing is announced to working staff by the Phone Guy voice, so it comes before FNaF1 and well before the death. The point to make is the opposite one: he died inside a room that had been walled up years earlier, and the games do not show how he got in.
12. **"...a horror attraction finds 'a real one' behind a boarded-up wall."** Phone Dude reports a lead on Night 1, "an extra room that got boarded up, or uh, something like that", in "one of the buildings" (`fnaf3-call1-boarded-room-lead`). On Night 2 he says "We found one. A real one." (`fnaf3-call2-found-a-real-one`). Where it was found is not said. `timeline.ts` words this correctly ("follows a lead").
13. **The good-ending paragraph** should carry the game's own captions, "Bad ending." and "the end" (`fnaf3-bad-ending-heads`, `fnaf3-good-ending-heads`), and Scott's refusal to say which happened ([scott] `scott-2018-interview-fnaf3-ending-unanswered`). `timeline.ts` (`t-happiest-day`) says flatly "This frees the five", against the chapter's "This stays open".
14. **Missing from "He does not stay dead".** Springtrap still does what the suit was built to do, walking to the sound of a child's voice (`fnaf3-tape2-sound-cues`, `fnaf3-audio-lure-mechanic`). And Scott's trailer, "We have a place for him." (`scott-fnaf3-trailer-tagline`).

### Chapter `retcon`

15. **"The model reads 'a yellow one' as Spring Bonnie."** From this slice the yellow bear is the better reading (2.5). FNaF3's tapes give two suits, put Spring Bonnie in the safe room of a different building and wall it in. If so, FNaF3 changed nothing in FNaF2's sentence and the yellow suit is not a retcon at all.
16. **"That is a real conflict, but no later game integrates or addresses it."** FNaF3 addresses it: the attraction is "based on the unsolved mysteries of Freddy Fazbear's Pizza" (`fnaf3-coming-soon-newspaper`). FNaF2 does too, by having the company lock out "previous employees" in 1987. And FNaF1's own text says "charged", not "convicted" (`fnaf1-news-charged-vs-convicted`). A closed case that became an unsolved one is the better stake (2.6).
17. **"Why the model accepts it: the swap removes a tension... Golden Freddy no longer has to be both the killer's disguise and a victim's vessel."** The tension comes from the model's own sentence in the golden chapter (item 19), not from a record.
18. The chapter's premise is sound and can cite more: `fnaf2-golden-freddy-night6-only`, `fnaf2-save-them-golden-freddy`, `fnaf1-golden-freddy-office-figure`. Its wording, "the only yellow suit either game ever depicts is the slumped golden bear", should allow for Chica, who is yellow and whose older model sits in the same back room; "the only spare yellow costume" is accurate.

### Chapter `golden`

19. **"So Golden Freddy is bound to a golden bear like the other four were to theirs."** No record shows it. In every scene the fifth is set apart: no mask is given him, no machine of his is dismantled (2.4). Say that the yellow bear stands for the fifth child and that how he came to it is withheld.
20. **"His appearances... the custom-night roster... are one of the five making himself seen."** The roster is a menu; it is where the name comes from, not an appearance. Real appearances the chapter does not use: the Night 3 cutscene, the SAVETHEM corner, the fifth of five ghosts (`fnaf3-n5-ghosts-safe-room`), the slumped bear at Fazbear's Fright (`fnaf3-office-slumped-bear`).

### Chapter `timeline-math`

21. **"Extended: take Phone Guy's 'twenty years' of songs literally, which puts FNaF1 in the 2000s."** It does not. The characters are "old and aging" originals in 1987, so twenty years of songs can end soon after 1987 (2.13).
22. **"But the diner was the *original* restaurant and was running in 1983 [[fnaf2-call5-fredbears-family-diner]]."** The cited record says neither. It says the diner was the original restaurant and had been "closed for years" by November 1987. The year 1983 is FNaF4's ([fnaf4-sl] `fnaf4-fredbear-and-friends-1983`). The sentence also does not bear on how long Freddy's characters have been singing.
23. **"...thirty years after 'Freddy Fazbear's Pizza' closed, without saying which closure."** True. The slice leans to FNaF1's closure (2.13).
24. `counterEvidence` lists `fnaf1-news-closing` without saying what it counters. It counters the compressed convention: "many years", "a long struggle" and "a year-long search" do not sit easily in the twelve months after November 1987.

### Chapters `bite`, `partners`, `thesis`, `open`

25. **`bite`: "Phone Guy's '87 bite is a separate incident".** Right. Add the window (2.10) and `fnaf2-call1-walk-around-during-day`. `timeline.ts` (`t-bite-87`) has no place; "the 1987 restaurant" is supportable at medium.
26. **`partners`: "the springlock suits 'double as both animatronic and suit', which is what makes a killer in a mascot possible."** A man in a costume was possible in FNaF1, before springlock suits existed. What the tapes add is a room off camera and invisible to the machines (`fnaf3-tape3-safe-room`) and suits built to go "where the children are" (`fnaf3-tape2-sound-cues`). The slice's one hook for the workshop is "the hand crank provided by the manufacturer" (`fnaf3-tape2-crank-from-manufacturer`). Note also that Phone Guy treats the diner's owner as an outsider to be "tracked down" (`fnaf2-call5-fredbears-family-diner`): in 1987 the company and the original restaurant's owner are two parties, which is the best support this slice has for the chapter.
27. **`thesis`: "Fire is the characters' repeated answer [[fnaf3-it-burns-newspaper]]".** FNaF3 does not show anyone setting that fire. The paper says "Authorities have not ruled out foul play, but at the moment it seems to have been caused by faulty wiring", and Phone Dude had warned of exactly that (`fnaf3-call1-attraction-opens`, `fnaf3-call1-ventilation-hallucinations`). Unless another slice shows who lit it, FNaF3's fire is an accident or an open question, not an answer.
28. **`open`: "They share a first name and nothing else in the games."** Holds for this slice. Mention the pink slip's "Odor", since it is the usual argument, and that Fritz Smith's slip says the same (2.12). The chapter should also list, from this slice: who was caught; what happened in November 1987; what the two shadows are; who was bitten in '87.
29. **Storyline.** Four beats, none from FNaF1 or FNaF2, and `s-fire` is only FFPS's fire. Beats this slice supports:

| When | Beat | Confidence | Records |
|---|---|---|---|
| June 26, a year before 1987 | Five children vanish at Freddy Fazbear's Pizza; a man is caught and charged; no bodies | medium-high | `fnaf1-news-kids-vanish`, `fnaf1-news-five-children`, `fnaf1-news-suspect-captured` |
| November 1987 | The new restaurant comes apart in a week and closes | high for the events, low for their meaning | 1.4 |
| After 1987 | The old restaurant reopens with the four originals; Phone Guy's last week; it will close by year's end | medium | `fnaf2-news-originals-kept`, `fnaf1-call4-phone-guy-attacked`, `fnaf1-news-closing` |
| After that closure | The killer takes the four apart and dies in the hidden room | medium | `fnaf3-eon-purple-guy-dismantles`, `fnaf3-n5-springlock-death` |
| Thirty years on | Fazbear's Fright finds him; it burns; he is in the photograph | high | `fnaf3-call2-found-a-real-one`, `fnaf3-it-burns-newspaper`, `fnaf3-it-burns-springtrap-hidden` |

### Other files that print on the site and cite this slice

30. `timeline.ts`, `t-diner-closes`: joins the springlock failures at "a sister location" to the diner's closing and tags the original pizzeria. The tapes never mention the diner and carry no date (`fnaf3-tapes-freddy-fazbears-pizza`, whose date is now marked as an inference).
31. `timeline.ts`, `t-missing-children`: "the fifth being Golden Freddy" and "The yellow suit is the disguise" are stated flat. `people.ts` does the same for the missing children.
32. `timeline.ts`, `t-fnaf1`: year 1988 is the earliest the clipping allows (2.13).
33. `places.ts`: if 2.1 is adopted, `freddy-fazbears-pizza-original` and `freddy-fazbears-pizza-fnaf1` are one building at two dates. The clippings are tagged to the second and the original's summary cites them for the first. The place model should say they are probably the same.
34. `dates.ts`, `t-missing-children`: its basis rests on "many years ago" (item 2).
35. The UI renders `verifiedVia` as a link. Other slices put free text in that field, and the link then breaks. Not an evidence problem. Every record in this file now holds a single URL there, except the three older store-text records, which have a `url` and no `verifiedVia`.

---

## 4. What the theory leaves unconnected

Before this pass 50 of this file's 96 records were cited nowhere in `theory.ts`. With the 47 new ones the uncited count is 97. They fall into these groups.

| # | Thread | Records (lead ones) | Proposed treatment | Confidence |
|---|---|---|---|---|
| 1 | **November 1987, night by night** | 1.4 | Its own section in the murders part, built on the table. Say what is certain (an incident) and what is not (victims, culprit, which suit) | events high; meaning low |
| 2 | **The restaurants and the order of the games** | 1.3, 2.1 | A section in "Dating the story", or a short chapter of its own. The theory has no account of why FNaF2 comes first or of where FNaF1's building came from | order high; same building medium |
| 3 | **Phone Guy** | 1.7, 2.11 | A short passage in the FNaF1 beat: one employee who spans the three games, repeats the company line in 1987, and at the end asks someone to look inside the suits | medium-high |
| 4 | **The guards** | 1.8, 2.12 | A table in `open` or beside the 1987 section. Three named men and no link between them | stated |
| 5 | **The company's conduct** | 1.12 | A recurring thread; the `ffps-ucn` and `hw` memos carry its later half. One paragraph in the frame: every official explanation in these games is a denial or a programming quirk | high as a pattern |
| 6 | **The Puppet as an actor** | 1.6 | In the murders chapter: it is the only machine Phone Guy fears, the only one the mask does not fool, and it is present in three of the four death minigames | medium |
| 7 | **Who feeds the children in FNaF3** | `fnaf3-bbs-air-adventure`, `fnaf3-chicas-party`, `fnaf3-stage01-cake-crying-child`, `fnaf3-shadow-bonnie-minigame`, `fnaf3-mangles-quest` | One paragraph in the good-ending discussion. The cake is carried by the 1987 cast (Balloon Boy, the new Chica, Mangle), the diner's yellow bear and the dark rabbit, not by the four the children are tied to | shown; meaning low |
| 8 | **The two shadows** | 1.10, 2.9 | An entry in `open`, with the FFPS line that tilts the bear toward the killer | low |
| 9 | **What is seen and is not there** | 1.11 | A paragraph in the method chapter. FNaF3 and Scott both say the guard hallucinates, and that bears on how literally to take the yellow bear in FNaF1 and the phantoms in FNaF3 | high that the layer exists |
| 10 | **The stuffing rule** | `fnaf1-call1-stuffed-into-suit`, `fnaf2-call1-endoskeleton-glitch`, `fnaf1-game-over-eyes-teeth`, `fnaf2-game-over-inside-mask` | One paragraph under "What happened to them": the machines do to guards what was done to the children, and the company calls it a glitch. [sb-mimic] `into-the-pit-phone-guy-night3-stuffing` repeats it | medium |
| 11 | **Fazbear's Fright as collector** | 1.13 | In the Springtrap chapter: relics from both restaurants, one real find, a fire, an auction that leads on to FFPS | shown |
| 12 | **Why the company wants the diner's owner in the middle of the 1987 crisis** | `fnaf2-call5-fredbears-family-diner`, `fnaf2-call6-yellow-suit` | Flag it in the partners chapter. On Night 5, under lockdown, they try to reach "the original restaurant owner"; on Night 6 a yellow suit has been used. The calls do not join the two. The natural reading is that the suit, or the trouble, came from there | low-medium |
| 13 | **FNaF2's cutscenes** | 2.14 | A sentence where the old location is discussed: the only view of it in working order | low-medium |
| 14 | **The tapes' "sister location" and "manufacturer"** | `fnaf3-tape4-sister-location-springlock-failures`, `fnaf3-tape2-crank-from-manufacturer` | Already split from Sister Location's facility in `places.ts`; keep that. Cite the manufacturer line in the partners chapter | stated; identity open |
| 15 | **Repeated names** | 2.12 | One sentence in `open`: Fritz and Jeremy are guards in 1987 and names on two children's stones in FFPS, and nothing connects them | stated |
| 16 | **The marketing layer** | `scott-fnaf2-steam-old-and-aging`, `scott-fnaf2-trailer-captions`, `fnaf2-call1-summer-job`, [scott] `scottgames-site-fnaf2-grand-reopening` | A note in the method chapter: FNaF2 was sold as a sequel and the check date was the reveal; "summer job" is sales copy | high |

---

## 5. Best exhibits

### Quotes

**The five children**

- `fnaf1-news-kids-vanish`: "Two local children were reportedly lured into a back room during the late hours of operation at Freddy Fazbear's Pizza on the night of June 26th."
- `fnaf1-news-sanitation`: "Police were contacted when parents reportedly noticed what appeared to be blood and mucus around the eyes and mouths of the mascots. One parent alikened them to "reanimated carcasses"."
- `fnaf1-call1-eyeballs-teeth`: "Uh, the only parts of you that would likely see the light of day again would be your eyeballs and teeth when they pop out the front of the mask, heh..."
- `fnaf2-call2-the-smell`: "But they were just so ugly, you know. And the smell...ugh."

**The case**

- `fnaf1-news-suspect-captured`: "led to his capture the following morning, the children themselves were never found and are presumed dead."
- `fnaf1-news-charged-vs-convicted`: "While the suspect has been charged, the bodies themselves were never found." (under the headline "Suspect convicted.")
- `fnaf3-coming-soon-newspaper`: "...a new attraction based on the unsolved mysteries of Freddy Fazbear's Pizza."

**The buildings**

- `fnaf1-news-closing`: "After a long struggle to stay in business after the tragedy that took place there many years ago, Freddy Fazbear's Pizza has announced that it will close by year's end."
- `fnaf2-call1-forget-old-location`: "Uh, now I want you to forget anything you may have heard... ..about the old location, you know. Uh, some people still have a somewhat... ..negative impression of the company."
- `fnaf2-news-originals-kept`: "The new animatronics will be scrapped due to possible malfunctions, however the original characters are being kept in hopes of a possible reorganization of the company."
- `fnaf2-news-reopen-smaller-budget`: ""It's a minor setback. We are confident that we will reopen someday, even if it is with a much smaller budget." -CEO Fazbear Ent."

**November 1987**

- `fnaf2-call3-rumors`: "I can personally assure you, that, whatever is going on out there, however tragic it may be, has nothing to do with our establishment."
- `fnaf2-call5-lockdown`: "...no one is allowed in or out, you know. Especially concerning any... ..previous employees."
- `fnaf2-call6-yellow-suit`: "Someone used one of the suits. We had a spare in the back, a yellow one. Someone used it. Now none of them are acting right."
- `fnaf2-call6-birthday-day-shift`: "Wear your uniform, stay close to the animatronics and make sure they don't hurt anyone, okay?"

**The suits and the room**

- `fnaf3-tape2-dual-suits`: "Right now we have two specially designed suits that double as both animatronic and suit."
- `fnaf3-tape2-sound-cues`: "This is an easy and hands-free approach, to making sure the animatronics stay where the children are"
- `fnaf3-tape3-safe-room`: "Every location is built with one extra room that is not included in the digital map layout programmed into the animatronics or security systems."
- `fnaf3-tape5-no-customers-safe-room`: "And under no circumstance should a customer ever be taken into this room, and out of the main show area."
- `fnaf3-tape5-spring-bonnie-moved`: "Management has also been made aware that the Spring Bonnie animatronic has been noticeably moved, and would like to remind employees that this costume is not safe to wear under any circumstances."
- `fnaf3-tape6-nothing-taken-out`: "Nothing is being taken out beforehand, so if you left anything inside, then it's your own fault."

**Springtrap**

- `fnaf3-call2-found-a-real-one`: "We found one. A real one."
- `scott-fnaf3-trailer-tagline`: "He will come back. He always does. We have a place for him."
- `scottgames-fnaf3-teaser-still-here`: "I am still here."

**Phone Guy**

- `fnaf2-call6-night-shift-myself`: "Uh, when the place eventually opens again I'll probably take the night shift myself."
- `fnaf1-call1-phone-guy-previous-guard`: "Um, I actually worked in that office before you. I'm... finishing up my last week now, as a matter of fact"
- `fnaf1-call4-empty-heads`: "Yeah I-I-I-I always wondered what was in all those empty heads... ..back there."

**The Bite**

- `fnaf1-call1-bite-of-87`: "They used to be allowed to walk around during the day too. But then there was 'The Bite of '87.'"
- `fnaf2-call1-walk-around-during-day`: "They even let them walk around during the day!"

**The Puppet**

- `fnaf2-call2-foxy-puppet`: "I'll be honest, I never liked that puppet thing. It's always...thinking, and it can go anywhere."

**The company**

- `fnaf1-call1-company-disclaimer`: "a missing person report will be filed within 90 days, or as soon as property and premises have been thoroughly cleaned and bleached, and the carpets have been replaced."
- `fnaf3-tape4-do-as-you-wish`: "I repeat, the classic suits are not to be touched, activated, or worn. That being said, we are free of liability, do as you wish."
- `fnaf3-tape6-not-to-be-mentioned`: "Management also requests that this room not be mentioned to family, friends, or insurance representatives."

**The endings**

- `fnaf3-bad-ending-heads`: "Bad ending." against `fnaf3-good-ending-heads`: "the end"

### Images (in `public/img`)

| Thread | File | What it shows |
|---|---|---|
| The five | `fnaf1-missing-children-newspapers.jpg` | the four clippings |
| The five | `fnaf1-game-over-stuffed-suit.jpg` (new) | human eyes and teeth in a Freddy suit, backstage |
| The five | `fnaf2-give-gifts-give-life.png` | the Puppet and the four |
| The five | `fnaf2-foxy-go-go-go.png` (new) | five children by Foxy's curtain |
| Freeing them | `fnaf3-happiest-day.png` (new) | the whole party scene |
| Freeing them | `fnaf3-bad-ending.jpg`, `fnaf3-good-ending.jpg` (new) | the two end screens with their captions; a matched pair |
| The killer | `fnaf2-take-cake-to-the-children.png` | the purple car and the child outside |
| The killer | `fnaf2-save-them-purple-figure.png` (new) | the one sprite with the chest mark |
| The killer | `fnaf3-safe-room-purple-guy.jpg`, `fnaf3-springlock-death.png` | cornered, then dead in the suit |
| The killer | `fnaf3-springtrap-corpse-screen.jpg` (new) | remains inside Springtrap |
| Buildings | `fnaf3-eon-minigame-map-brightened.png` (new) | FNaF1's layout with the extra room; the single most useful image for 2.1 and 2.7 |
| Buildings | `fnaf2-robots-scrapped.jpg` | the closing paper and the 1987 check |
| Buildings | `fnaf2-parts-service-old-models.jpg` (new) | the older Bonnie, faceless |
| Buildings | `fnaf2-cutscene-eye-holes.jpg` (new) | FNaF1's dining room through a head's eye holes |
| 1987 | `fnaf2-paycheck-1987.jpg`, `fnaf2-help-wanted-ad.jpg` (new), `fnaf2-pink-slip-fritz-smith.jpg` | the date, the reopening, the third guard |
| 1987 | `fnaf2-save-them-map.png` (new) | five bodies among the 1987 cast |
| The yellow bear | `fnaf1-golden-freddy-office.jpg` (new), `fnaf2-golden-freddy-office.jpg` (new) | whole in FNaF1, worn in 1987 |
| The yellow bear | `fnaf2-cutscene-night3-golden-freddy.jpg` (new) | standing, between Chica and Bonnie |
| The yellow bear | `fnaf1-golden-freddy-poster.jpg` | the poster |
| Shadows | `fnaf2-shadow-freddy-parts-service.jpg` (new), `fnaf3-shadow-freddy-office.jpg` (new) | the dark bear in the back; the slumped bear at Fazbear's Fright |
| Guards | `fnaf1-paycheck-night5.png`, `fnaf1-pink-slip.jpg` (new), `fnaf1-help-wanted-ad.jpg` (new) | Mike Schmidt's week |
| Fazbear's Fright | `fnaf3-coming-soon.jpg` (new), `fnaf3-office-relic-box.jpg` (new), `fnaf3-it-burns.jpg` | "unsolved mysteries"; the 1987 heads in a box; the fire |
| The diner | `fnaf3-stage01.png` | the two yellow suits on one stage |
| Stuffing | `fnaf2-game-over-inside-suit.jpg` (new) | looking out through a mask at the older Freddy |

---

## 6. Filing table

Every record in `fnaf123.json` (143). Roles: `core` (the story rests on it), `support`, `counter` (cuts against the likely reading), `colour` (true, carries no story weight), `outside` (not part of the story, with the reason). "(new)" marks records added in this pass. Threads are those of section 1.

Totals: core 57, support 63, counter 6, colour 14, outside 3.

### 6.1 Five Nights at Freddy's (36)

| id | thread | role | note |
|---|---|---|---|
| `fnaf1-help-wanted-ad` | The guards | colour | the job: nights, $120 a week |
| `fnaf1-call1-phone-guy-previous-guard` | Phone Guy | core | worked that office; last week |
| `fnaf1-call1-company-disclaimer` | The company's conduct | support | report filed after the cleaning |
| `fnaf1-call1-twenty-years` | Buildings and order of the games | counter | against FNaF1 soon after 1987, if pressed; see 2.13 |
| `fnaf1-call1-free-roaming-mode` | Why the machines attack | support | company's first explanation |
| `fnaf1-call1-bite-of-87` | The Bite of '87 | core | the only statement of it |
| `fnaf1-call1-stuffed-into-suit` | Why the machines attack | support | the endoskeleton rule |
| `fnaf1-call2-freddy-dark-foxy-cove` | Why the machines attack | colour | gameplay advice |
| `fnaf1-call3-play-dead` | The guards | colour | guards do not last |
| `fnaf1-call4-phone-guy-attacked` | Phone Guy | core | his last recording |
| `fnaf1-call5-garbled` | Phone Guy | support | no voice after Night 4 |
| `fnaf1-news-kids-vanish` | The five children | core | June 26th, two children, back room |
| `fnaf1-news-five-children` | The five children | core | five linked; no bodies |
| `fnaf1-news-sanitation` | The five children | core | odor, blood and mucus |
| `fnaf1-news-closing` | Buildings and order of the games | core | "took place there many years ago"; quote corrected |
| `fnaf1-its-me-hallucinations` | What is seen and is not there | support | Freddy with human eyes |
| `fnaf1-its-me-graffiti` | What is seen and is not there | colour |  |
| `fnaf1-screaming-children-drawings` | The five children | support | crying children on the walls |
| `fnaf1-golden-freddy-poster-office` | The yellow bear (Golden Freddy) | core | poster, laugh, crash |
| `fnaf1-freddy-rips-head-poster` | What is seen and is not there | colour |  |
| `fnaf1-backstage-heads-stare` | What is seen and is not there | colour | pairs with Phone Guy's 'empty heads' |
| `fnaf1-paycheck-night5` | The guards | core | Mike Schmidt; 11-12-xx |
| `fnaf1-paycheck-night6` | The guards | support | 11-13-xx |
| `fnaf1-custom-night-pink-slip` | The guards | support | tampering, odor |
| `fnaf1-custom-night-names` | Buildings and order of the games | support | FNaF1's cast is the four originals |
| `fnaf1-1987-code` | none | outside: easter egg | added to stop a rumour, per the wiki |
| `fnaf1-post-mortem-golden-freddy` | The yellow bear (Golden Freddy) | colour |  |
| `fnaf1-calls-prerecorded` | Phone Guy | core | (new) messages recorded in advance |
| `fnaf1-call1-eyeballs-teeth` | The five children | support | (new) what a body in a suit looks like |
| `fnaf1-game-over-eyes-teeth` | Why the machines attack | support | (new) shows it |
| `fnaf1-call4-empty-heads` | Phone Guy | support | (new) what he suspected |
| `fnaf1-news-suspect-captured` | The killer and Springtrap | counter | (new) a man was caught; against 'the killer is free' |
| `fnaf1-news-dressed-as-mascot` | The killer and Springtrap | support | (new) costume not specified in FNaF1 |
| `fnaf1-news-charged-vs-convicted` | The killer and Springtrap | core | (new) headline against text; retcon candidate |
| `fnaf1-news-uphill-battle` | Buildings and order of the games | support | (new) the restaurant traded on |
| `fnaf1-golden-freddy-office-figure` | The yellow bear (Golden Freddy) | support | (new) FNaF1's one empty yellow costume |

### 6.2 Five Nights at Freddy's 2 (50)

| id | thread | role | note |
|---|---|---|---|
| `fnaf2-help-wanted-ad` | Buildings and order of the games | support | "Grand Re-Opening", "vintage pizzeria" |
| `fnaf2-call1-new-location` | Buildings and order of the games | core | old restaurant left to rot |
| `fnaf2-call1-criminal-database` | November 1987 | support | "detect a predator a mile away" |
| `fnaf2-call1-second-guard` | The guards | core | first guard moved to days |
| `fnaf2-call1-music-box` | The Puppet and the child outside | support |  |
| `fnaf2-call2-older-models` | Buildings and order of the games | core | "from the previous location" |
| `fnaf2-call2-foxy-puppet` | The Puppet and the child outside | core | "always...thinking" |
| `fnaf2-call3-mangle` | November 1987 | colour | Mangle's history |
| `fnaf2-call3-rumors` | November 1987 | core | something tragic, denied |
| `fnaf2-call4-investigation` | November 1987 | core |  |
| `fnaf2-call4-facial-recognition-tampered` | November 1987 | core |  |
| `fnaf2-call5-lockdown` | November 1987 | core | "previous employees" |
| `fnaf2-call5-fredbears-family-diner` | Buildings and order of the games | core | the original restaurant; its owner an outsider |
| `fnaf2-call6-yellow-suit` | November 1987 | core | "a yellow one" |
| `fnaf2-call6-birthday-day-shift` | The Bite of '87 | support | the last event |
| `fnaf2-no-bite-mention` | The Bite of '87 | counter | FNaF2 never says 'bite' |
| `fnaf2-paycheck-1987` | Buildings and order of the games | core | the one printed year in the slice |
| `fnaf2-overtime-robots-scrapped` | Buildings and order of the games | core | closing after a few weeks |
| `fnaf2-pink-slip-fritz-smith` | The guards | support | employee #03 |
| `fnaf2-custom-night-names` | The yellow bear (Golden Freddy) | support | where the name comes from |
| `fnaf2-cutscenes-its-me` | What is seen and is not there | support | yellow bear standing; "it's me" |
| `fnaf2-give-gifts-give-life` | The five children | core | four masks, a fifth body |
| `fnaf2-take-cake-to-the-children` | The Puppet and the child outside | core | the child outside |
| `fnaf2-foxy-go-go-go` | The five children | support | five dead where Foxy still performs |
| `fnaf2-save-them` | November 1987 | counter | five bodies in the 1987 building; against one set |
| `fnaf2-save-them-you-cant` | The killer and Springtrap | support | the purple figure in 1987's building |
| `fnaf2-golden-freddy-office` | The yellow bear (Golden Freddy) | support | worn like the older models |
| `fnaf2-puppet-music-box-mechanic` | The Puppet and the child outside | support |  |
| `fnaf2-shadow-freddy` | The shadows | core | dark twin of the yellow bear |
| `fnaf2-shadow-bonnie-office` | The shadows | support |  |
| `fnaf2-jj-endo-puppet-visions` | What is seen and is not there | colour |  |
| `fnaf2-call1-summer-job` | Buildings and order of the games | counter | (new) against the November checks; sales copy |
| `fnaf2-call1-forget-old-location` | The five children | core | (new) the bad name is the old location's |
| `fnaf2-call1-walk-around-during-day` | The Bite of '87 | core | (new) daytime walking still allowed |
| `fnaf2-call1-endoskeleton-glitch` | Why the machines attack | support | (new) same excuse, earlier |
| `fnaf2-call1-no-night-mode` | Why the machines attack | support | (new) engineers cannot explain it |
| `fnaf2-call1-building-cannot-run-out` | Buildings and order of the games | support | (new) not FNaF1's building |
| `fnaf2-call2-the-smell` | The five children | core | (new) they smell before the week |
| `fnaf2-call2-loved-old-characters` | Phone Guy | support | (new) he knew the old cast |
| `fnaf2-old-models-walk-from-night2` | The five children | support | (new) moving before any tampering |
| `fnaf2-call5-day-shift-vacancy` | The guards | support | (new) the day guard is gone |
| `fnaf2-call6-night-shift-myself` | Phone Guy | core | (new) joins FNaF2 to FNaF1 |
| `fnaf2-golden-freddy-night6-only` | The yellow bear (Golden Freddy) | core | (new) wakes on the night of the suit |
| `fnaf2-save-them-purple-figure-chest-mark` | The killer and Springtrap | support | (new) the only marked sprite |
| `fnaf2-save-them-golden-freddy` | The yellow bear (Golden Freddy) | support | (new) in the 1987 building |
| `fnaf2-cutscenes-old-stage-through-eye-holes` | Buildings and order of the games | support | (new) FNaF1's rooms inside a 1987 game |
| `fnaf2-news-originals-kept` | Buildings and order of the games | core | (new) originals kept |
| `fnaf2-news-reopen-smaller-budget` | Buildings and order of the games | core | (new) smaller budget |
| `fnaf2-parts-service-old-models` | Buildings and order of the games | support | (new) faceless in 1987, whole in FNaF1 |
| `fnaf2-game-over-inside-mask` | Why the machines attack | colour | (new) |

### 6.3 Five Nights at Freddy's 3 (48)

| id | thread | role | note |
|---|---|---|---|
| `fnaf3-coming-soon-newspaper` | Fazbear's Fright | core | "unsolved mysteries" |
| `fnaf3-call1-attraction-opens` | Fazbear's Fright | colour |  |
| `fnaf3-call1-relics-foxy-head` | Fazbear's Fright | support |  |
| `fnaf3-call1-boarded-room-lead` | The killer and Springtrap | core | a lead, not a find |
| `fnaf3-call1-ventilation-hallucinations` | What is seen and is not there | core | the game says the guard hallucinates |
| `fnaf3-call2-found-a-real-one` | The killer and Springtrap | core |  |
| `fnaf3-tape2-dual-suits` | Springlock suits and the safe room | core | two suits |
| `fnaf3-tape3-springlock-bleeding` | Springlock suits and the safe room | core | moisture |
| `fnaf3-tape3-safe-room` | Springlock suits and the safe room | core | off camera, invisible to the machines |
| `fnaf3-tape4-sister-location-springlock-failures` | Springlock suits and the safe room | core | suits retired |
| `fnaf3-tape5-no-customers-safe-room` | The five children | core | the method, as a rule against it |
| `fnaf3-tape6-safe-rooms-sealed` | Springlock suits and the safe room | core | walled up |
| `fnaf3-springtrap-name` | The killer and Springtrap | core |  |
| `fnaf3-springtrap-corpse-screens` | The killer and Springtrap | core |  |
| `fnaf3-spring-bonnie-posters` | Springlock suits and the safe room | colour |  |
| `fnaf3-phantom-hallucinations` | What is seen and is not there | support |  |
| `fnaf3-eon-shadow-freddy-follow-me` | The shadows | core | "follow me." |
| `fnaf3-eon-purple-guy-dismantles` | The killer and Springtrap | core |  |
| `fnaf3-n5-ghosts-safe-room` | The killer and Springtrap | core | five ghosts, four machines |
| `fnaf3-n5-springlock-death` | The killer and Springtrap | core |  |
| `fnaf3-bad-ending-heads` | Freeing the children | counter | "Bad ending."; a fifth head |
| `fnaf3-good-ending-heads` | Freeing the children | core | "the end" |
| `fnaf3-it-burns-newspaper` | Fazbear's Fright | core | faulty wiring; auction |
| `fnaf3-it-burns-springtrap-hidden` | The killer and Springtrap | core | he survives the fire |
| `fnaf3-stage01-fredbear-spring-bonnie` | Springlock suits and the safe room | support | the two yellow suits on one stage |
| `fnaf3-stage01-cake-crying-child` | Freeing the children | support |  |
| `fnaf3-mangles-quest` | Freeing the children | support | the cake; a crying Puppet |
| `fnaf3-chicas-party` | Freeing the children | support |  |
| `fnaf3-bbs-air-adventure` | Freeing the children | support |  |
| `fnaf3-shadow-bonnie-minigame` | The shadows | support | the dark rabbit frees a child |
| `fnaf3-happiest-day` | Freeing the children | core | six vanish; a golden mask |
| `fnaf3-good-ending-requirements` | Freeing the children | support |  |
| `fnaf3-tapes-freddy-fazbears-pizza` | Springlock suits and the safe room | support | tapes are Freddy's, not the diner's; date is an inference |
| `fnaf3-tape2-sound-cues` | Springlock suits and the safe room | support | (new) "where the children are" |
| `fnaf3-tape2-crank-from-manufacturer` | Springlock suits and the safe room | support | (new) hook for the makers thread |
| `fnaf3-tape3-bleeding-out` | Springlock suits and the safe room | support | (new) |
| `fnaf3-tape4-do-as-you-wish` | The company's conduct | support | (new) |
| `fnaf3-tape5-spring-bonnie-moved` | The killer and Springtrap | core | (new) the suit in use after its retirement |
| `fnaf3-tape6-nothing-taken-out` | Springlock suits and the safe room | core | (new) the suit is walled in |
| `fnaf3-tape6-not-to-be-mentioned` | The company's conduct | support | (new) |
| `fnaf3-tapes-hello-hello-greeting` | Phone Guy | support | (new) same voice, implied |
| `fnaf3-audio-lure-mechanic` | The killer and Springtrap | support | (new) he still follows a child's voice |
| `fnaf3-eon-map-fnaf1-layout` | Buildings and order of the games | core | (new) FNaF1's layout plus one room |
| `fnaf3-eon-puddles-empty-building` | The killer and Springtrap | support | (new) dates the death to a closed building |
| `fnaf3-office-slumped-bear` | The shadows | colour | (new) shadow or yellow bear, unclear |
| `fnaf3-office-box-toy-heads` | Fazbear's Fright | support | (new) relics of the 1987 cast |
| `fnaf3-newspaper-developer-notes` | none | outside: development commentary | (new) |
| `fnaf3-guard-unnamed` | The guards | support | (new) negative evidence |

### 6.4 Scott's store text, trailers and teasers held in this file (9)

| id | thread | role | note |
|---|---|---|---|
| `scott-fnaf3-steam-description` | Buildings and order of the games | core | thirty years; duplicate of scott-2015-fnaf3-store-thirty-years |
| `scott-fnaf2-steam-description` | November 1987 | support | duplicate of scott-2014-fnaf2-store-previous-guard |
| `scott-fnaf1-steam-freddybear` | none | outside: development commentary | an early name for Freddy; duplicate of scott-2014-fnaf1-store-freddybear |
| `scottgames-fnaf3-teaser-still-here` | The killer and Springtrap | support | duplicate of scottgames-site-fnaf3-i-am-still-here |
| `scottgames-fnaf3-teaser-he-always-does` | The killer and Springtrap | support | duplicate of scottgames-site-fnaf3-he-always-does |
| `scott-fnaf1-steam-budget-cuts` | Buildings and order of the games | support | (new) FNaF1's rationed power |
| `scott-fnaf2-steam-old-and-aging` | Buildings and order of the games | colour | (new) sold as a sequel |
| `scott-fnaf2-trailer-captions` | Buildings and order of the games | support | (new) "dismantled"; also the one point for an early death, 2.7 |
| `scott-fnaf3-trailer-tagline` | The killer and Springtrap | support | (new) |

### 6.5 Outside the story, and how the counters are meant

- **Outside (3).** `fnaf1-1987-code` (an out-of-universe easter egg), `fnaf3-newspaper-developer-notes` (Scott's notes on making the first game, printed in the newspapers' margins), `scott-fnaf1-steam-freddybear` (an early working name, explained by Scott in 2020). The `scott` memo files the last as support for FNaF1's premise; either is defensible, and its companion `scott-fnaf1-steam-budget-cuts` carries the part of that store text that matters.
- **Counter (6).** `fnaf1-call1-twenty-years` and `fnaf2-call1-summer-job` cut against the dating, and both are loose talk (2.13). `fnaf2-no-bite-mention` cuts against putting the Bite in FNaF2's week. `fnaf2-save-them` cuts against a single set of five. `fnaf3-bad-ending-heads` cuts against the children being freed. `fnaf1-news-suspect-captured` cuts against a killer who is never caught; with `fnaf1-news-charged-vs-convicted` (filed core) it is the pair the retcon question turns on.
- **Colour (14).** Gameplay advice, rare screens with no stated meaning, and marketing. If the lead wants a smaller accounting, these can move to `outsideStory` under a reason such as "atmosphere"; none is out-of-universe.
- **Duplicates.** Five records in 6.4 repeat facts that `scott.json` also holds (7.4). The theory cites this file's copies.

---

## 7. Records added and fixed

### 7.1 Added (47)

**FNaF1 (9)**

- `fnaf1-calls-prerecorded`: Phone Guy's FNaF1 messages were recorded in advance
- `fnaf1-call1-eyeballs-teeth`: Inside a suit, only the eyeballs and teeth would show
- `fnaf1-game-over-eyes-teeth`: Game over: human eyes and teeth in a Freddy suit
- `fnaf1-call4-empty-heads`: Phone Guy: 'what was in all those empty heads'
- `fnaf1-news-suspect-captured`: Clipping: the man was identified on video and captured the next morning
- `fnaf1-news-dressed-as-mascot`: Clippings: the man was dressed as a mascot; which one is not said
- `fnaf1-news-charged-vs-convicted`: Clipping: the headline says 'convicted', the text says 'charged'
- `fnaf1-news-uphill-battle`: Clipping: an 'uphill battle ever since' to bring families back
- `fnaf1-golden-freddy-office-figure`: The yellow bear in the FNaF1 office is a slumped, eyeless figure

**FNaF2 (19)**

- `fnaf2-call1-summer-job`: Phone Guy calls the 1987 post a 'summer job'
- `fnaf2-call1-forget-old-location`: 'Forget anything you may have heard about the old location'
- `fnaf2-call1-walk-around-during-day`: In November 1987 the new animatronics walk around during the day
- `fnaf2-call1-endoskeleton-glitch`: 1987: the same 'endoskeleton without his costume' explanation
- `fnaf2-call1-no-night-mode`: Engineers have no explanation: 'never given a proper night mode'
- `fnaf2-call1-building-cannot-run-out`: The 1987 building cannot run out of power, and has no doors
- `fnaf2-call2-the-smell`: The older models: 'And the smell...ugh.'
- `fnaf2-call2-loved-old-characters`: Phone Guy 'loved those old characters'
- `fnaf2-old-models-walk-from-night2`: The older models 'shouldn't be able to walk around', and do
- `fnaf2-call5-day-shift-vacancy`: Night 5: a day-shift position 'just became available'
- `fnaf2-call6-night-shift-myself`: Phone Guy: 'I'll probably take the night shift myself'
- `fnaf2-golden-freddy-night6-only`: Golden Freddy is inactive until Night 6
- `fnaf2-save-them-purple-figure-chest-mark`: SAVETHEM's purple figure has a yellow mark on its chest
- `fnaf2-save-them-golden-freddy`: A slumped yellow bear can sit in SAVETHEM's rooms
- `fnaf2-cutscenes-old-stage-through-eye-holes`: Cutscenes: FNaF1's stage, seen through the eye holes of a head
- `fnaf2-news-originals-kept`: ROBOTS SCRAPPED: the new animatronics go, the originals are kept
- `fnaf2-news-reopen-smaller-budget`: CEO: 'we will reopen someday', with 'a much smaller budget'
- `fnaf2-parts-service-old-models`: Parts/Service: the older models sit damaged and incomplete
- `fnaf2-game-over-inside-mask`: Game over: looking out through a mask at the older Freddy

**FNaF3 (15)**

- `fnaf3-tape2-sound-cues`: The springlock suits walk toward sound, to stay where the children are
- `fnaf3-tape2-crank-from-manufacturer`: The suits' hand crank is 'provided by the manufacturer'
- `fnaf3-tape3-bleeding-out`: A loosened springlock means 'bleeding out'
- `fnaf3-tape4-do-as-you-wish`: 'We are free of liability, do as you wish'
- `fnaf3-tape5-spring-bonnie-moved`: 'The Spring Bonnie animatronic has been noticeably moved'
- `fnaf3-tape6-nothing-taken-out`: The safe room is sealed with its contents inside
- `fnaf3-tape6-not-to-be-mentioned`: The sealed room is not to be mentioned to family, friends or insurers
- `fnaf3-tapes-hello-hello-greeting`: The tapes open with Phone Guy's 'hello, hello'
- `fnaf3-audio-lure-mechanic`: Springtrap is led about by the sound of a child's voice
- `fnaf3-eon-map-fnaf1-layout`: The end-of-night minigames are set in a building laid out like FNaF1's
- `fnaf3-eon-puddles-empty-building`: The minigame building is empty of people and marked with dark puddles
- `fnaf3-office-slumped-bear`: A slumped bear sometimes sits in the FNaF3 office
- `fnaf3-office-box-toy-heads`: The office's box of relics holds the heads of the 1987 cast
- `fnaf3-newspaper-developer-notes`: The newspapers' side columns are Scott's development notes
- `fnaf3-guard-unnamed`: FNaF3 never names its guard

**Scott's store text and trailers (4)**

- `scott-fnaf1-steam-budget-cuts`: Scott: FNaF1's power limit is 'corporate budget cuts'
- `scott-fnaf2-steam-old-and-aging`: Scott: in FNaF2 'the old and aging animatronics are joined by a new cast'
- `scott-fnaf2-trailer-captions`: FNaF2 trailer: 'forgotten', 'dismantled', 'deactivated'
- `scott-fnaf3-trailer-tagline`: FNaF3 trailer: 'He will come back. He always does. We have a place for him.'

### 7.2 Fixed (52 records changed in substance, 22 more given cross-links only; no id renamed or deleted)

**Quotes that were not verbatim (2)**

- `fnaf1-news-closing`: read "the tragedy that struck there many years ago". The clipping reads "the tragedy that took place there many years ago". Re-read from the screenshot; the quote is now that one sentence, and the claim, notes and `verifiedVia` follow it. The theory cites this record in two chapters.
- `fnaf1-news-sanitation`: dropped a word; the clipping reads "mouths of the mascots". The claim now also says the pizzeria was threatened "again", as printed.

**Quotes that were stitched from fragments or cut off before their point (10).** Each is now one whole passage, checked against the transcript, and the parts removed have their own records where they matter.

- `fnaf1-call1-company-disclaimer`: now the clause about the 90 days and the cleaning.
- `fnaf1-call1-stuffed-into-suit`: now the full sentence ending "forcefully stuff you inside a Freddy Fazbear suit."
- `fnaf2-call1-new-location`: now the "left to rot" sentence, which the old quote did not contain. `places` changed from FNaF1's building to the original-location entry, because the call does not say the old restaurant is FNaF1's.
- `fnaf2-call1-criminal-database`: now the criminal-database sentence, which the old quote stopped short of.
- `fnaf2-call2-older-models`: two whole sentences.
- `fnaf2-call6-yellow-suit`: now ends "Now none of them are acting right." Notes rewritten to say what each game shows of a yellow suit and that `purple-guy` is tagged only for linking.
- `fnaf2-call6-birthday-day-shift`: the three sentences about the birthday.
- `fnaf2-overtime-robots-scrapped`: full stops had been added after the two headlines; the printed lines are now separated by " / ".
- `fnaf3-call1-attraction-opens`: one whole sentence.
- `fnaf3-tape2-dual-suits`: the one load-bearing sentence. Its note no longer states as fact that the voice is Phone Guy's.

**Truncation markers removed (13).** The trailing " …" left by the trimming script is not part of any source text. Removed, with no wording changed, from `fnaf1-news-five-children`, `fnaf2-call3-mangle`, `fnaf2-call4-facial-recognition-tampered`, `fnaf2-call5-lockdown`, `fnaf3-coming-soon-newspaper`, `fnaf3-call1-boarded-room-lead`, `fnaf3-call2-found-a-real-one`, `fnaf3-tape3-springlock-bleeding`, `fnaf3-tape3-safe-room`, `fnaf3-tape5-no-customers-safe-room`, `fnaf3-tape6-safe-rooms-sealed`, `fnaf3-it-burns-newspaper`, `scott-fnaf3-steam-description`.

**Claims and notes sharpened from the image (5)**

- `fnaf2-foxy-go-go-go`: the claim now gives the number of children, five, counted on the map; the note had only "the wiki counts five". Added the on-screen "Get Ready!" as quote and the fact that this is the one death minigame with no spelled letters.
- `fnaf2-shadow-freddy`: now says where the figure sits (the older Bonnie's place against the wall) and that it holds a microphone.
- `fnaf3-bad-ending-heads`: the screen's own caption, "Bad ending.", is now the quote; the claim describes the fifth head as the image shows it.
- `fnaf3-good-ending-heads`: caption "the end" added as quote; note that the game never calls this screen good.
- `fnaf2-save-them`: notes now say who the player's character is and what the map shows.

**Conclusions taken out of records (4)**

- `fnaf3-happiest-day`: its note named a book-only character while disclaiming the wiki's labels. Reworded without the name.
- `fnaf3-tapes-freddy-fazbears-pizza`: `when.basis` stated "The suits are retired before the 1987 location" as fact. It is now marked as an inference from FNaF2's "a spare in the back". The label and place tag are left for the lead (section 3, item 30): the other six tape records are filed as undated.
- `scott-fnaf1-steam-freddybear`: the note guessed "probably a nickname or typo". Replaced by Scott's own explanation ([scott] `scott-2020-freddybear-early-name`), as the `scott` memo asked.
- `fnaf1-call4-phone-guy-attacked`: notes now separate what the transcript marks (banging, the tune, a groan, a scream) from the wiki's identification of each sound, and point to the new record showing the message was recorded in advance.

**Notes brought up to what was checked (4).** `fnaf3-eon-shadow-freddy-follow-me` no longer rests the building's layout on "the wiki says"; `fnaf3-n5-springlock-death` no longer asserts that rain is heard, only that the wiki's audio table lists it; `fnaf2-golden-freddy-office` and `fnaf2-cutscenes-its-me` gained notes on what their new images show.

**Images added to existing records (13).** `fnaf1-help-wanted-ad`, `fnaf1-custom-night-pink-slip`, `fnaf2-help-wanted-ad`, `fnaf2-cutscenes-its-me`, `fnaf2-foxy-go-go-go`, `fnaf2-golden-freddy-office`, `fnaf2-save-them`, `fnaf2-shadow-freddy`, `fnaf3-bad-ending-heads`, `fnaf3-coming-soon-newspaper`, `fnaf3-good-ending-heads`, `fnaf3-happiest-day`, `fnaf3-springtrap-corpse-screens`.

**Short notes added (16).** The matching check dates in FNaF1 and FNaF2 (`fnaf1-paycheck-night5`, `fnaf1-paycheck-night6`, `fnaf2-paycheck-1987`, `fnaf2-overtime-robots-scrapped`); the two pink slips' shared reasons (`fnaf1-custom-night-pink-slip`, `fnaf2-pink-slip-fritz-smith`); no call on Nights 6 and 7 (`fnaf1-call5-garbled`); Phone Dude's last words (`fnaf3-call2-found-a-real-one`); Scott's later statements (`fnaf3-springtrap-corpse-screens`, `fnaf3-phantom-hallucinations`); pointers to the split-out records (`fnaf1-news-kids-vanish`, `fnaf3-tape5-no-customers-safe-room`); and the duplicate in `scott.json` named on `scott-fnaf3-steam-description`, `scott-fnaf2-steam-description`, `scottgames-fnaf3-teaser-still-here`, `scottgames-fnaf3-teaser-he-always-does`.

**`verifiedVia` (4).** `fnaf1-news-kids-vanish` and `fnaf1-news-five-children` held two URLs in the field, which breaks the link the site makes of it; `fnaf1-news-sanitation` and `fnaf1-news-closing` pointed at the wiki's transcription that turned out wrong. All four now point at the screenshot the text was read from.

**Cross-links.** `related` was added or extended on 70 of the original records, so that every new record can be reached from the record it splits or extends. For 22 records that is the only change.

### 7.3 Images added (22, all credited in `src/data/credits/fnaf123.json`)

All are in-game screens or sprites from the wiki's file pages. Four are altered for legibility, and their captions say so: the FNaF3 minigame map and the FNaF2 cutscene are brightened, the SAVETHEM purple figure is enlarged, and the relic box is cropped, enlarged and brightened.

- `fnaf1-help-wanted-ad.jpg`: FNaF1's intro newspaper: the HELP WANTED ad for a night security guard
- `fnaf1-game-over-stuffed-suit.jpg`: FNaF1's game-over screen: a Freddy suit in the Backstage room with human-looking eyes and teeth
- `fnaf1-golden-freddy-office.jpg`: The slumped yellow bear in the FNaF1 office (rare)
- `fnaf1-pink-slip.jpg`: FNaF1's Custom Night notice of termination
- `fnaf2-help-wanted-ad.jpg`: FNaF2's intro newspaper: the Grand Re-Opening HELP WANTED ad
- `fnaf2-cutscene-night3-golden-freddy.jpg`: Post-Night 3 cutscene (scene panorama): the yellow bear standing in front of the viewer, between Chica and Bonnie
- `fnaf2-cutscene-eye-holes.jpg`: Post-Night 2 cutscene as seen in the game, through two eye holes (brightened)
- `fnaf2-shadow-freddy-parts-service.jpg`: Rare dark bear sitting in Parts/Service (CAM 08)
- `fnaf2-parts-service-old-models.jpg`: Parts/Service (CAM 08): the older Bonnie, faceless and missing an arm, and the older Freddy on the floor
- `fnaf2-game-over-inside-suit.jpg`: FNaF2's game-over screen: the older Freddy seen through the eye holes of a mask
- `fnaf2-golden-freddy-office.jpg`: Golden Freddy slumped in the FNaF2 office
- `fnaf2-save-them-map.png`: Full map of the 'SAVETHEM' death minigame: Toy animatronics on stage, the older models in a back room, five small grey bodies
- `fnaf2-foxy-go-go-go.png`: Map of the 'Foxy Go! Go! Go!' death minigame: 'Get Ready!', the curtained stage and five children
- `fnaf2-save-them-purple-figure.png`: The rare purple figure of 'SAVETHEM', with a yellow mark on its chest (sprite, enlarged)
- `fnaf3-coming-soon.jpg`: FNaF3's intro newspaper: 'COMING SOON! Fazbear's Fright: The Horror Attraction!'
- `fnaf3-bad-ending.jpg`: FNaF3's 'Bad ending.' screen: four heads with lit eyes and a fifth behind them
- `fnaf3-good-ending.jpg`: FNaF3's other Night 5 end screen: the four heads with unlit eyes, captioned 'the end'
- `fnaf3-springtrap-corpse-screen.jpg`: Rare Springtrap screen showing remains inside the suit
- `fnaf3-shadow-freddy-office.jpg`: The FNaF3 office with the rare slumped bear at far left, the box of relics and the Freddy suit in the hall
- `fnaf3-office-relic-box.jpg`: The box of relics in the FNaF3 office: heads of the 1987 cast, a hook arm, a guitar and a paper-plate doll (cropped, enlarged and brightened)
- `fnaf3-eon-minigame-map-brightened.png`: Full map of FNaF3's end-of-night minigames (brightened)
- `fnaf3-happiest-day.png`: The 'Happiest Day' minigame, full scene

### 7.4 Duplicates, and records that should go or merge (ids kept, as instructed)

- Five records here repeat facts also held in `scott.json`. The theory cites this file's copy in three cases. Keep one of each pair in the theory and file the other under `further`:

| This file | `scott.json` | Which is fuller |
|---|---|---|
| `scott-fnaf3-steam-description` | `scott-2015-fnaf3-store-thirty-years` | equal; theory cites this file's |
| `scott-fnaf2-steam-description` | `scott-2014-fnaf2-store-previous-guard` | equal |
| `scott-fnaf1-steam-freddybear` | `scott-2014-fnaf1-store-freddybear` | the `scott.json` copy also carries the "repairman" sentence |
| `scottgames-fnaf3-teaser-still-here` | `scottgames-site-fnaf3-i-am-still-here` | the `scott.json` copy has the image; theory cites this file's |
| `scottgames-fnaf3-teaser-he-always-does` | `scottgames-site-fnaf3-he-always-does` | equal; theory cites this file's |

- Not duplicates, though close: `scott-fnaf1-steam-budget-cuts` (new) quotes a different sentence of the FNaF1 store text from `scott-2014-fnaf1-store-freddybear` and `scott-2014-fnaf1-store-summer-job`. `scott-fnaf3-trailer-tagline` (new) is the trailer; the teaser of the same middle line is a separate source.
- `fnaf1-1987-code` is an out-of-universe easter egg and should be listed in `outsideStory`, not deleted.
- `fnaf2-no-bite-mention` and `fnaf3-guard-unnamed` (new) are negative observations. They are useful as guards against overclaiming and carry no event.
- Several older records still bundle more than one fact in the claim (`fnaf1-news-kids-vanish`, `fnaf2-overtime-robots-scrapped`, `fnaf3-tape5-no-customers-safe-room`, `fnaf3-tape6-safe-rooms-sealed`, `fnaf3-tape4-sister-location-springlock-failures`). I left their claims as they were, because other layers cite them for the bundle, and added one record per fact beside them. A writer who wants the exact sentence should cite the new record.
- The person id `henrys-daughter` on `fnaf2-take-cake-to-the-children` embeds a book-only name. It is defined in `people.ts` with a neutral display name and is used in `deaths.ts`, `familyTrees.ts`, `model.ts`, `relations.ts`, `timeline.ts` and three evidence files. I left the tag in place: renaming it is a decision for the lead and has to be done everywhere at once.

---

## 8. Could not verify

Each item names what would verify it. None of these is recorded as fact.

1. **The sounds at the end of FNaF1's Night 4 message.** The transcript marks banging, kitchen clatter, the Toreador March, moaning, "Oh no", a scream and static. The wiki matches each to a gameplay cue and calls the scream the yellow bear's. I did not check by ear. Would verify: the game's sound files compared side by side.
2. **FNaF1's Night 5 "call".** Fans match the reversed, pitched-down voice to a passage of a 1946 autobiography. A fan decode; not recorded.
3. **The fifth body in Give Gifts, Give Life.** `fnaf2-give-gifts-give-life` says a fifth body shows for one frame before the jumpscare. That is the wiki's statement. I found no capture of the frame. Would verify: a frame-by-frame capture. It matters, because the golden chapter leans on it; the four-plus-one pattern in 2.4 stands without it.
4. **"it's me" and "err" after FNaF2's cutscenes.** The wiki's text says the words appear at the top left; its trivia says they are obscured in normal play. Would verify: a capture from the running game.
5. **The file name "dream".** The wiki says the game's project file names the cutscene frame "dream" and gives an image of the editor as its source. If true it is the game's own label for those scenes (2.14). Would verify: the decompiled project.
6. **Sprite names in SAVETHEM.** The wiki reports that the game's files name the purple figure "Man", the Mangle sprite "he was here" and the dead child "you can't". If true, "he was here" would be the game's own caption for the bodies. Same remedy.
7. **The chest mark.** Verified as a yellow-orange shape on the SAVETHEM sprite only. That it is a badge, and whether the outstretched hand holds anything, cannot be read from a sprite this small.
8. **A Night 2 appearance of Golden Freddy in FNaF2.** The wiki attributes it to a bug, on a fan's code analysis, and says he was meant for Nights 3 to 5. If that were established it would weaken 2.5's point about Night 6. Would verify: the decompiled logic.
9. **Rain in FNaF3's end-of-night minigames.** The wiki's audio table lists a rain-and-thunder track. Not checked by ear. The puddle-shaped patches on the map are verified; what they are is not stated anywhere.
10. **Whether FNaF3's slumped office bear is the dark bear or the yellow one.** The wiki says the files call it Shadow Freddy; its own screenshot is named for Golden Freddy. In the office's green light the colour does not decide it.
11. **The filler columns of the FNaF1 and FNaF2 newspapers.** Blurred in the game. The wiki transcribes them as a joke addressed to the player ("This ad has nothing to do with anything relevant to the game", with a line about a "summer job"). Not recorded. FNaF3's side columns are recorded without a quote for the same reason (`fnaf3-newspaper-developer-notes`).
12. **The spelling "surveliance"** in the first clipping, read from a small image. The quote in `fnaf1-news-suspect-captured` avoids the word.
13. **The Phone Guy line in the FNaF2 trailer.** Wording is the wiki's; the on-screen captions are verified.
14. **The date of the birthday.** "Tomorrow" in a call heard on the night whose check is dated 11-13-1987: 11-13 or 11-14.
15. **Who Phone Guy is.** The wiki has adopted a name for him from outside the games. No game in this slice names him; whether any later game does is for the `sb-mimic` analyst, whose file holds a note naming a man with that first name in another setting (`secret-of-the-mimic-mail-ralph-suit`).
16. **Scott's early page-source keywords for FNaF3** ("30 years later, only one", "I remain"). The Wayback Machine refused my requests. The `scott` slice read the captures and holds them (`scottgames-site-fnaf3-source-30-years-later-only-one`, `scottgames-site-fnaf3-source-i-remain`).
17. **Which clipping pairs with which other rare screen.** Two older notes repeat the wiki's remark that the sanitation and closing clippings appear together with the "IT'S ME" graffiti and the crying-children drawings. Not checked.
18. **The date of the tapes relative to November 1987.** Not a wording problem but the fact on which 2.1, 2.5 and 2.7 partly turn. Nothing in the slice states it. A later game that dates the retirement of the springlock suits or the sealing of the rooms would settle it; the `fnaf4-sl` and `sb-mimic` analysts may hold one.
