# Fazbear Canon Archive

An interactive, evidence-first reconstruction of the Five Nights at Freddy's story, sourced **only** from the games and Scott Cawthon's own words. The novels, the Survival Logbook, the guidebooks, the films and fan theory are not evidence and fill no gap. That is this project's own policy.

## How the archive is built

**Evidence.** `src/data/evidence/*.json` holds 1,064 atomic records in six files (FNaF1 to FNaF3; FNaF4, FNaF World and Sister Location; Pizzeria Simulator and Ultimate Custom Night; Help Wanted, Curse of Dreadbear, Special Delivery and Help Wanted 2; Security Breach, RUIN, Into the Pit and Secret of the Mimic; Scott's statements and teasers). Each record has one claim, an exact source location, a certainty (stated, shown or implied), a verbatim quote where there is one, and the in-universe time it describes; an approximate date says how it is known (derived, estimated, or taken from a teaser). `src/data/credits/*.json` gives the provenance of every image in `public/img/`.

**The theory**, called the Unified Model, is the archive's single account of the story. It lives in `src/data/theory.ts` and `src/data/chapters/*.ts` (one file per part), and its shapes are defined under "Theory content contract" in `src/data/schema.ts`.

- 35 chapters in 10 parts: the story, the makers, the family, the murders, the night shift, the machines, the reckoning, the afterimage, under the Pizzaplex, and how this was built (the method).
- Each chapter asks one question, answers it, and carries a confidence (high, medium or low). Its body cites records inline. It also lists the records that push back and how the model answers them, what would change the conclusion, and further records that belong to its thread.
- `storyline` is the short telling: 20 beats in the model's order of events, each pointing at the chapters that argue it.
- `outsideStory` lists the records that deliberately carry no story weight, grouped by reason (releases Scott ruled non-canon, cut and unused content, jokes, promotion and so on).

**The coverage rule.** Every evidence record must be cited by a chapter, filed under a chapter as further evidence, or listed in `outsideStory` with a reason. The validator reports the accounting, which currently stands at 1,064 of 1,064.

**The other synthesis layers** cite records by id and mark each entry canon (stated or shown), strong (a near-certain inference) or theory (the model's reading):

- `people.ts`, `relations.ts`, `familyTrees.ts`: who is who, and how identities are joined. A tie may give the records' own words in place of its kind's verb.
- `places.ts`, `locations.ts`: the buildings and when they stood.
- `timeline.ts`, `dates.ts`, `deaths.ts`: events, eras, and deaths and other fates (an entry's `outcome` says which it is). Every displayed date says how it is supported. No year after 1987 is printed, because no game prints one.
- `home.ts`: the home page's summary cards and questions.
- `community.ts`, `box.ts`, `author.ts`: the Theorists & Scott, Locked Box and Scott & Faith pages. Fan theories are described and scored there; they are never evidence.

**Text conventions.** Text fields use a small markup: `[[evidence-id]]` for a citation, `{{person-or-place-id}}` for an entity link, `((chapter-id))` for a chapter link, `**bold**`, `*italic*`, and date pills `<<label|kind|evidence-ids|basis>>`. People the games never name are called by description (the Cassette Man, the crying child). Names found only in the books are not used. The one exception is on the Theorists & Scott page, where a single fan theory is listed under the book name the fandom gives it, and the entry says that no game prints the name and that the archive does not use it.

`docs/DESIGN.md` is the interface's handbook: its rules, tokens and shared components, and the words it uses (for a death and for any other fate, among others). Read it before changing a page.

`research/` holds what stands behind the site: the changelog of the model's conclusions, the rulings that the theory's text follows (`rulings.md`, `model.md`), the list of what is still unverified (`open-checks.md`), the working papers of the October 2026 pass, and the ledger of the September 2026 audit.

## Scripts

- `npx tsx scripts/validate.ts` checks referential integrity (unknown record, person, place and chapter ids; missing or uncredited images; quote length), the consistency rules (nothing marked canon may rest only on implied records; a printed date needs a record that is not implied; eras stay in order; every event, era and place has a date justification), keeps book-only names and fan labels out of every layer's text (a fan label may stand only as a marked alias, or in the chapter on the rules), and checks the coverage rule: it fails if any record is not cited, filed or listed as outside the story (`--list-unaccounted` lists them; `--allow-unaccounted` lets a pass add records before they are filed).
- `npx tsx scripts/evidence-index.ts [--out path.md] [--file fnaf123] [--unaccounted]` writes a one-line-per-record index of the evidence base, showing how the model uses each record: cited, counter-evidence, filed as further evidence, outside the story, or not yet accounted for.
- `node scripts/qa.mjs --base http://127.0.0.1:5173 --out /tmp/fnaf-qa` crawls the running site at desktop and phone widths. It reports console errors, failed requests and horizontal overflow for each route and saves a screenshot of each; `--axe` adds accessibility checks.
- `python3 scripts/thumbs.py` makes the small copies of the images (`public/thumb/`) that the gallery, the cards and the lists show; the image viewer always shows the image itself. Run it after adding or replacing an image: the validator fails if a copy no longer matches its image, and warns about an image the script has not looked at. It needs Pillow; the copies and their manifest (`scripts/thumbs-manifest.json`) are committed, so a build does not need Python.

```bash
npm install
npx tsx scripts/validate.ts   # data integrity, consistency rules, coverage
npx tsc -b                    # type check
npm run dev                   # http://localhost:5173
npm run build && npx vite preview
```

Unofficial fan reference. Five Nights at Freddy's © Scott Cawthon. Screenshots are low-resolution stills used for commentary, each credited to its source page.
