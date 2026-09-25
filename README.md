# Fazbear Canon Archive

An interactive, evidence-first reconstruction of the Five Nights at Freddy's story, sourced **only** from the games and Scott Cawthon's own words.

- `src/data/evidence/*.json`: atomic evidence records. Each has one claim, an exact source location, a certainty level (stated/shown/implied), and the in-universe time it describes.
- `src/data/credits/*.json`: provenance for every screenshot in `public/img/`.
- `src/data/{people,places,relations,timeline,theory,familyTrees,home}.ts`: the synthesis layers. They cite evidence by id (`[[evidence-id]]` inline) and are marked canon / strong / theory.
- `scripts/validate.ts`: referential-integrity checks (unknown ids, missing images, quote length, uncited relations).

```bash
npm install
npx tsx scripts/validate.ts   # data integrity
npm run dev                   # http://localhost:5173
npm run build && npx vite preview
```

Unofficial fan reference. Five Nights at Freddy's © Scott Cawthon. Screenshots are low-resolution stills used for commentary, each credited to its source page.
