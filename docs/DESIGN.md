# Fazbear Canon Archive: design handbook

> **For a reader of the repository.** This handbook was written in the working folder of the people who built
> the interface, outside the repository, and is kept here as it was written. Where it names `files/ui/…`,
> `final/NOTES.md`, `final/tools/…`, `fin/tools/…`, `lead/perf-notes.md` or "your notes", it means the authors'
> working notes and test scripts: they are not in this repository, and nothing here needs them. Where it names a
> worktree, a port or a branch (`ws/ui-final`, `ws/ui-fin`), read "your checkout". A commit it names by its id
> was made on a working branch and may not be in this repository's history. What is in the repository is the
> code it describes (`src/`), the two live references below, the crawl (`scripts/qa.mjs`), the validator
> (`scripts/validate.ts`) and the thumbnail script (`scripts/thumbs.py`); section 15 says how to run them.

Written for the four page agents (clusters A to D) who polished pages after phase 1, and brought up to date at
the end of the final phase and again after the finishing round. Read sections 1 to 4 before you touch anything,
then section 18, which lists what the final phase added and changed, section 19 on names, and section 20, which
lists what the finishing round added (the words for deaths and other fates among them); use the rest as
reference. Two live references sit beside this file:

- `/#/dev/kit` renders every shared component, the tokens and the type scale.
- `/#/dev/blocks` renders every theory field and block type from made-up content.

When this handbook and the code disagree, the code wins: every shared component has a JSDoc comment above it,
and `src/components/ui.ts` is the one import for all of them.

Contents: 1 Intent · 2 Rules · 3 Files and ownership · 4 Adding page CSS · 5 Tokens · 6 Type · 7 Layout
primitives · 8 Firmness grammar · 9 Citations and the evidence drawer · 10 Shared components · 11 What the shell
does for you · 12 Responsive rules · 13 Accessibility rules · 14 Data colours and icons · 15 Checks ·
16 Known issues by cluster (history) · 17 Decisions and their reasons · 18 What changed in the final phase ·
19 Names, aliases and ties · 20 What changed in the finishing round

---

## 1. Intent

The archive is an editorial product about a horror series, not a dashboard. It reads like a case file: a warm,
near-black page, one amber accent (the stage light), a serif chosen for long reading, a display face that echoes
1980s family-restaurant signage, and small mono labels that make metadata look filed rather than decorated.
Reading comes first: a measure of about 66 characters, generous line height, clear hierarchy. Colour is spent
only where it means something, and every meaning also has a word or a shape. The reader should never lose their
place to check a source: citations are quiet numerals, and a record opens over the page, not instead of it.

Three questions to ask of any screen you build:

1. What is the one thing this screen is for, and is it the first thing the eye lands on?
2. Could a reader skim it (headings, first sentences, marks) and still leave with the point?
3. Is anything on it decoration, repetition, or a control nobody needs yet? Remove it or fold it away.

## 2. Rules

Hard rules. A page that breaks one is not done.

1. **Stay in your files** (section 3). Shared files are frozen. If the shared layer lacks something, build it in
   your own folder and list it in your final message as a candidate for the shared layer.
2. **No colour or font literal outside `tokens.css` and `fonts.css`.** No hex, `rgb()`, `hsl()`, `oklch()` or
   font name in your CSS or TSX. Data hues come from `palette.ts` or `gameMeta.ts` and travel through an inline
   custom property (`style={{ "--hue": hueOf(ERA_HUE, id) }}`), then your CSS uses `var(--hue)`.
3. **Use the shared components** for anything they cover: citations, source chips, entity and chapter links,
   date pills, firmness marks, game marks, evidence cards and rows, figures, buttons, chips, filters, tabs,
   callouts, tables, page header, sections, empty states. Do not restyle them from page CSS beyond layout
   (width, margin, grid placement) inside a page-scoped selector.
4. **One firmness grammar** (section 8). Never invent another badge, colour code or line style for certainty,
   status or confidence.
5. **No horizontal page overflow** at 390, 768 or 1440. Wide things scroll inside `<TableWrap>` / `.scroll-x`.
6. **Keep every feature and every route.** `App.tsx` is frozen, so keep each page file's path and exports:
   default export per page, plus named `SourceDetail` (in `evidence/Sources.tsx`) and `PlaceDetail`
   (in `people/Places.tsx`).
7. **No third-party requests at runtime.** No CDN fonts, scripts or images.
8. **Do not edit content or the data contract**: nothing under `src/data/**` (the lead owns `gameMeta.ts`),
   `scripts/validate.ts`, `scripts/evidence-index.ts`, `research/**`, `public/img/**`.
9. **Accessible by default** (section 13): real buttons and links, visible focus, labels, AA contrast,
   reduced motion respected, no information by colour alone.
10. **Plain words.** Interface copy is short and literal, with typographic quotes (’ “ ”) typed directly in the
    source. Content strings are written with straight quotes: `<RichText>` and the shared components curl them
    for display, and you call `smartQuotes(text)` on any other data string you print (a title, a name, a
    summary). No emoji as icons. A name the games never print is a
    descriptor: where people are listed (headings, cards, chips) set it in italic with the shared `.name-desc`.
    Names are stored as they run in a sentence ("the rabbit in the code"): never print `person.name` yourself,
    ask `entityName(id, alone)` (section 19).

## 3. Files and ownership

```
index.html                    shell document, metadata, theme bootstrap          lead · frozen
vite.config.ts                image-size plugin, chunk names                     lead · frozen
scripts/qa.mjs                QA crawl                                           lead · frozen
public/favicon.svg                                                               lead · frozen
src/main.tsx, src/App.tsx     entry, routes (lazy), shell                        lead · frozen
src/data/gameMeta.ts          short code and hue per source                      lead · frozen
src/styles/                   the shared stylesheet                              lead · frozen
  index.css                     imports the files below, in this order
  fonts.css                     @font-face (self-hosted, latin + latin-ext)
  tokens.css                    every colour, font, size, space, radius, layer, motion value; both themes
  base.css                      reset, element defaults, headings, links, forms, utilities, layout primitives
  components.css                tones, icons, firmness, game mark, buttons, chips, tags, toggles, tabs,
                                filters, page header, sections, callouts, tables, facts, panels
  richtext.css                  .prose and .article, citations, source chips, entity and chapter links,
                                date pills, popovers
  records.css                   evidence card, evidence row and list, the evidence drawer
  figure.css                    figure frame, caption, credit, lightbox
  shell.css                     header, navigation, menu sheet, search palette, reader settings, footer
  print.css                     a page on paper: no chrome, paper colours, folded lists opened
src/components/               shared components (import from "components/ui")    lead · frozen
src/components/shell/         header, nav, search palette, drawer host, scroll,  lead · frozen
                              page error boundary
src/pages/home/               Home.tsx, home.css                                 lead · frozen
src/pages/theory/             cover, chapter, blocks, storyline, theory.css      lead · frozen
src/pages/dev/                /dev/blocks and /dev/kit fixtures                  lead · frozen
src/pages/NotFound.tsx        any address that is no page (uses <Missing>)       lead · frozen

src/pages/timeline/           Timeline.tsx, timeline.css                         cluster A
src/pages/evidence/           EvidenceExplorer.tsx, EvidenceDetail.tsx,          cluster B
                              Sources.tsx, Gallery.tsx,
                              evidence.css (explorer + detail), sources.css, gallery.css
src/pages/people/             People.tsx, PersonDetail.tsx, FamilyTrees.tsx,     cluster C
                              Graph.tsx, Places.tsx,
                              people.css (index + person), family.css, graph.css,
                              relgraph.css (edges, legend, detail panel shared by tree and graph), places.css
src/pages/essays/             Box.tsx, Community.tsx, Author.tsx, Method.tsx,    cluster D
                              essays.css (pieces shared by the four), box.css, community.css,
                              author.css, method.css
```

You may add files inside your own folder (page-only components, hooks, more CSS files). You may not import from
another cluster's folder or from `pages/theory` or `pages/home`.

## 4. Adding page CSS

- **Import it from the page**: `import "./timeline.css";` at the top of the page file. Vite splits it into the
  page's lazy chunk. The shared stylesheet is already loaded, so your rules come later in the cascade.
- **Page CSS never unloads.** After a reader has visited your page, your rules stay in the document on every other
  page. So every selector must start from a class only your cluster uses. Prefix new classes:
  A `tl-` · B `evx-`, `srcs-`, `gal-` · C `ppl-`, `person-`, `place-`, `fam-`, `graph-`, `rel-` ·
  D `essay-`, `box-`, `cmty-`, `author-`, `method-`.
  Existing unprefixed classes in your files (`.uperson`, `.inter`, `.step`, `.guess`, `.node` and so on) are
  yours and may stay. Cluster B, note the near-misses: the shared layer owns `ev-card`, `ev-row`, `ev-list`,
  `ev-grid`, `src-chip` and `src-list`; your pages own `ev-detail*`, `ev-filters`, `ev-count`, `ev-more`,
  `src-head`, `src-table` and `src-title`. Never write a bare element selector or a bare state class (`.on`, `.sel`, `.dim`,
  `.open`) on its own; always compound it: `.tl-card.sel`.
- **Shared class names are taken.** Do not define rules whose first class is one of these roots: `page`, `band`,
  `stack`, `cluster`, `grid-auto`, `scroll-x`, `prose`, `article`, `label`, `kicker`, `lede`, `muted`, `faint`,
  `small`, `mono`, `serif`, `btn`, `icon-btn`, `icon`, `chip`, `chip-btn`, `tag`, `toggle`, `tabs`, `tab`,
  `segmented`, `filters`, `filter-bar`, `filter-group`, `search`, `search-field`, `check`, `page-header`,
  `crumbs`, `section`, `section-head`, `section-lead`, `empty`, `loading`, `collapsible`, `callout`, `note`,
  `table`, `table-wrap`, `facts`, `fact`, `panel`, `firm`, `firm-glyph`, `firm-legend`, `game`, `cite`, `cites`,
  `cite-wrap`, `src-chip`, `src-list`, `entity`, `chapter-link`, `date`, `date-wrap`, `pop`, `ev-card`, `ev-row`,
  `ev-list`, `ev-grid`, `drawer`, `figure`, `lightbox`, `source-line`, `name-canon`, `name-desc`, `plain`, `wide`,
  `full`, `read`, `num`, `nowrap`, `sr-only`, `page-enter`, `outcome`, `fate-tag`, `outbound` (section 20), and everything in `shell.css` (`site-*`, `nav-*`, `brand*`,
  `menu-*`, `palette*`, `settings*`, `reader-settings`, `search-trigger`, `skip-link`). To adjust one inside your page,
  scope it: `.person-hero .figure { max-width: 22rem; }`.
- **Tokens only.** Sizes from the type scale, gaps from `--sp-*`, radii from `--r-*`, layers from `--z-*`,
  durations from `--dur-*`. If you need a one-off length (a column width, a chart height) a literal rem value is
  fine; a literal colour never is.
- **Hooks to use**: `data-level="firm|partial|tentative"` (sets `--firm-style` and `--firm-dash`),
  `data-tone="accent|ok|tension|open|neutral"` (sets `--tone`, `--tone-soft`, `--tone-line`), inline `--hue`,
  `var(--sticky-top)` for anything sticky, `.on` (compound) for a selected state.
- **Motion** only inside `@media (prefers-reduced-motion: no-preference)`, with `--dur-*` and `--ease`.
- **Every scroll container gets `position: relative`** (or use `.scroll-x`). Otherwise an absolutely positioned
  child, `.sr-only` text for one, escapes the scroller and widens the page. This caused a real overflow bug.

## 5. Tokens

All in `src/styles/tokens.css`. The night theme is the default; `<html data-theme="paper">` switches to paper.
Both themes define the same names, so use the names and never think about the theme.

### Colour

| Token | Use |
|---|---|
| `--c-bg` | the page |
| `--c-bg-sunk` | wells: inputs, the search box, segmented controls |
| `--c-surface`, `--c-surface-2` | cards and panels; the second is one step up (hover, nested) |
| `--c-overlay` | popovers, menus, drawer, palette |
| `--c-line`, `--c-line-strong` | hairlines; stronger rules and quiet borders |
| `--c-line-control` | borders of inputs and controls (3:1 against the page) |
| `--c-text` | headings, interface text |
| `--c-text-read` | long-form body (a little softer than headings) |
| `--c-text-2` | secondary text |
| `--c-text-3` | labels, metadata, captions (still AA on every surface) |
| `--c-accent`, `--c-accent-strong` | the amber: links, markers, the active state; strong is the hover |
| `--c-accent-fill`, `--c-accent-fill-hover`, `--c-accent-ink` | the primary button: fill, hover, text on it |
| `--c-accent-soft`, `--c-accent-line` | accent tint for backgrounds; accent border |
| `--c-tension` (+ `-soft`, `-line`) | evidence that pushes back; errors |
| `--c-open` (+ `-soft`, `-line`) | unresolved, undecided |
| `--c-ok` (+ `-soft`, `-line`) | confirmed, settled |
| `--c-mat`, `--c-mat-text` | the mat behind a screenshot and text on it (dark in both themes) |
| `--c-scrim` | the dimmer behind a dialog |
| `--c-focus` | focus ring |
| `--c-glow` | the faint stage light behind a hero band |

Every text token passes 4.5:1 on `--c-bg`, `--c-surface`, `--c-surface-2` and `--c-overlay` in both themes.
Tension, open and ok are never the only signal: pair them with a word or an icon (`<Callout>`, `<Chip tone>`).
There is one accent. Do not introduce a second brand colour.

### Space, radius, layers, motion, layout

| Token | Value | Use |
|---|---|---|
| `--sp-1` … `--sp-9` | 4, 8, 12, 16, 24, 32, 48, 64, 96 px | every gap, padding and margin |
| `--r-xs`, `--r-sm`, `--r-md`, `--r-lg`, `--r-pill` | 2, 3, 5, 8 px, pill | small radii, like index cards; cards use `--r-md` |
| `--z-raised`, `--z-sticky`, `--z-header`, `--z-popover`, `--z-drawer`, `--z-modal` | 2, 20, 40, 60, 80, 90 | the only z-index values |
| `--dur-1`, `--dur-2`, `--dur-3`, `--ease` | 120, 200, 320 ms | all transitions (0 ms under reduced motion) |
| `--shadow-1`, `--shadow-2`, `--shadow-3` | | raised card, popover, dialog |
| `--page-max`, `--page-pad` | 76rem, 1 to 2.5rem | page container width and side padding |
| `--measure`, `--measure-wide` | about 66 and 94 characters of body text | reading column; wider column for tables and figures |
| `--header-h`, `--sticky-top` | 3.5rem; header height on desktop, 0 below 900px | offset for sticky elements |
| `--tap` | 2.75rem | minimum touch target |
| `--dash-firm`, `--dash-partial`, `--dash-tentative` | none, `7 4`, `1.5 4.5` | SVG `stroke-dasharray` for the firmness grammar |

## 6. Type

Four voices, each with one job:

| Token | Face | Job |
|---|---|---|
| `--font-display` | Fraunces (variable, optical size) | headings and titles. Upright only: the italic is not loaded and `font-synthesis` is off, so anything italic inside a heading must switch to `--font-text` (see `.name-desc`) |
| `--font-text` | Literata (variable, roman and italic) | anything read as sentences: body, ledes, claims, quotes, answers |
| `--font-ui` | Inter (variable) | interface: buttons, navigation, tables, captions, metadata sentences |
| `--font-mono` | IBM Plex Mono 400/500 | labels, counts, dates, ids. Short strings only, usually uppercase with `--ls-caps` |

The scale and when to use each step:

| Token | Size | Use |
|---|---|---|
| `--fs-2xs` | 11px | micro labels: always mono, uppercase, letter-spaced (`.label`) |
| `--fs-xs` | 12px | captions, credits, metadata lines |
| `--fs-sm` | 13px | small interface text, chips, dense tables |
| `--fs-base` | 15px | interface text (the body default) |
| `--fs-md` | 17px | card text, compact prose, card titles |
| `--fs-read` | 17 to 19px | long-form body. Scales with the viewport and the reader's text-size setting; only `.prose`, `.article` and things that must match them use it |
| `--fs-lg` | 20px | ledes, small headings (h4 in cards) |
| `--fs-xl` | 24px | section headings (h3), answers |
| `--fs-2xl` | 26 to 34px | h2 of an article or a page section |
| `--fs-3xl` | 32 to 50px | page titles (h1) |
| `--fs-4xl` | 38 to 72px | cover and hero display only (Home, theory cover) |

The three faces every page shows at once (Fraunces, Literata roman, Inter) are preloaded from `index.html`, so
text appears once, in its real face, and never reflows; the italic and the mono arrive on first use and swap in.
Measured on a throttled connection this costs 50 to 400 ms before the first text and brings the finished page
60 to 430 ms sooner (`lead/perf-notes.md`). Do not add faces, weights or `@font-face` rules.

Line heights: `--lh-tight` 1.06 (display), `--lh-snug` 1.22 (headings), `--lh-ui` 1.45 (interface),
`--lh-read` 1.68 (long-form). Weights: `--w-display` 540, `--w-strong` 640, `--w-text` (380 on night, 400 on
paper: light text on dark looks heavier, so the body is set a touch lighter).

Rules of thumb:

- Sentences a reader is meant to read are Literata. Things a reader scans are Inter. Things that are filed
  (codes, dates, counts, field names) are Plex Mono. If a paragraph of two or more sentences is in Inter, it is
  probably wrong.
- Running text never exceeds `--measure`; lists of cards may use the full page.
- One h1 per page (`<PageHeader>` renders it). Sections are h2 (`<Section>`), cards h3. Do not skip levels.
- Headings use `text-wrap: balance` and body `text-wrap: pretty` already; do not add manual line breaks.
- Utilities: `.label` (mono micro label), `.kicker` (accent label above a title), `.lede` (opening paragraph),
  `.read` (a sentence or paragraph in the reading face outside `.prose`: claims, summaries, card text),
  `.muted`, `.faint`, `.small`, `.mono`, `.serif`, `.num` (tabular figures), `.nowrap`, `.sr-only`.

## 7. Layout primitives

| Class or component | What it does |
|---|---|
| `<Page title>` → `.page` | the root of every page: sets the document title, centres a `--page-max` container with `--page-pad` |
| `<Page narrow>` → `.page--narrow` | a single reading column, about 52rem |
| `<Page flush>` → `.page--flush` | no container; the page lays out full-width `.band`s itself |
| `.band` > `.band__inner` | a full-width strip whose content lines up with `.page` |
| `.stack` | vertical flow with one gap (`--gap`, default `--sp-4`) |
| `.cluster` | items in a row that wrap (`--gap`, default `--sp-2`); may shrink below its content |
| `.grid-auto` | card grid: as many columns of at least `--min` (default 18rem) as fit; one column on a phone |
| `.scroll-x` / `<TableWrap>` | a horizontal scroller with edge shadows for wide tables and charts |
| `.prose` / `<Prose>` | long-form typography; the container itself is one measure wide |
| `.article` | the same typography for a whole article: every direct child sits on the measure; add `.wide` to a child for `--measure-wide`, `.full` for the whole column; `.article--center` centres the column |
| `.panel` | a bordered surface |
| `ul.plain` | a list with no markers and a small gap |

Patterns:

```tsx
// A standard page
<Page title="Places">
  <PageHeader kicker="People & places" title="Places" lede="Every location, in story order." />
  <Section title="Venues" aside="12 places" lead="Restaurants and attractions the public could enter.">
    <div className="grid-auto" style={{ "--min": "20rem" } as CSSProperties}>…cards…</div>
  </Section>
</Page>

// A long-form page
<Page title="Method" narrow>
  <PageHeader kicker="About the archive" title="Method" lede="…" />
  <article className="article">
    <h2>What counts as evidence</h2>
    <p><RichText text={…} /></p>
    <TableWrap label="Certainty levels" className="wide"><table className="table">…</table></TableWrap>
  </article>
</Page>
```

Inside `.prose` and `.article`, paragraph and block spacing is automatic. Plain lists (no class) get markers and
indentation; a list with any class is left alone, so component lists are safe inside prose. Paragraph margins are
set with `:where()`, so a class on a `<p>` can set its own margin.

## 8. The firmness grammar

Certainty (of a record), status (of a link or event) and confidence (of a chapter or beat) are three scales with
one shape. They share one glyph and one line style, and are told apart by their words.

| Level | Glyph | Line | Certainty | Status | Confidence |
|---|---|---|---|---|---|
| `firm` | filled disc | solid | Stated | Canon | High confidence |
| `partial` | half disc | dashed | Shown | Strong inference | Medium confidence |
| `tentative` | ring | dotted | Implied | Theory | Low confidence |

```tsx
<CertaintyMark value={e.certainty} />                 // bordered tag: ● STATED
<StatusMark value={link.status} variant="inline" />   // glyph + word in running interface text
<ConfidenceMark value={s.confidence} variant="inline" long />   // "◐ Medium confidence"
<StatusMark value={r.status} variant="glyph" />       // glyph only; the word stays for screen readers and as a tooltip
<Firmness scale="status" value={v} />                 // the generic form
<FirmnessLegend />                                    // the key; show it where a page first relies on the marks
```

- `variant`: `"tag"` (default, for cards and headers), `"inline"`, `"glyph"`. `long` uses the full phrase.
- The word is always available: visible, or as `title` plus screen-reader text for the glyph variant. Never show a
  bare coloured dot.
- For borders and SVG strokes put `data-level={levelOf(value)}` on the element and use the hooks:
  `border-left: 3px var(--firm-style, solid) var(--c-accent);` or
  `stroke-dasharray: var(--firm-dash, none);`. `levelOf()` maps any value of the three scales to its level.
- Hue does not encode firmness. In graphs, hue may encode the *kind* of tie (see `relgraph.css`: `data-tie`),
  and the line style encodes how firm it is.
- Dates have marks of their own (`<DateGlyph>`), square and uncoloured, so a date is never read as a grade of the
  claim beside it: printed = full square, derived = half, estimated = empty; relative = two arrows; teaser =
  diamond; unknown = dashed square. The round amber marks belong to firmness alone. Always through `<DatePill>`
  or `<EvidenceDate>`.
- The glyph on a source chip grades the record, not the sentence the chip stands beside; it is drawn in grey.
- Where a page relies on the marks, give it the key: `<MarksKey>` (a small popover: the three scales, the date
  marks, and any marks of your own passed as children).
- Labels and help sentences live in `labels.ts`: `CERTAINTY`, `STATUS`, `CONFIDENCE` (each value has `level`,
  `word`, `short`, `help`), `DATE_KIND`, `KIND_LABEL` / `kindLabel()` for source kinds.

## 9. Citations and the evidence drawer

The pattern, which every page must follow:

1. **In running text** a citation is a small superscript numeral. `<RichText text>` turns `[[evidence-id]]` into
   one, groups neighbours into a single cluster (`1, 2, 3`) and trims the space before it. Never print evidence
   ids, chips or full titles inside a sentence.
2. **Numbering** comes from the nearest `<CiteScope>`. The shell wraps every page in one, so numbers start at 1
   on each page and a record keeps its number wherever it reappears. Wrap a self-contained article in its own
   `<CiteScope prime={idsInReadingOrder}>` if its markers must match a numbered source list (the theory chapter
   does this).
3. **Hover or keyboard focus** on a marker shows a preview (title, claim, quote, where it is from). Touch skips
   the preview.
4. **Click, tap or Enter opens the record in the drawer** over the page: a side drawer on desktop, a bottom sheet
   on a phone. The reader's scroll position does not move. Escape, the close button, a click on the backdrop or
   the browser's Back closes it and returns focus to the marker. Ctrl/Cmd-click and middle-click still open the
   record's own page (`/evidence/:id`), because every marker is a real link.
   A numbered marker opens its record among everything numbered on the page, so the drawer is headed
   "Source 18 of 35" (which confirms which marker was hit) and its arrows, the arrow keys, or a flick across the
   record walk the page's sources in order.
5. **Outside running text** ("Evidence:", "Rests on:", table cells) use `<CiteList ids>`: chips showing the
   certainty glyph, the source code and the record title. `variant="code"` drops the title for tight spots.
6. **Lists of records** use `<EvidenceList ids>` (compact rows) or a grid of `<EvidenceCard>`. Both open the
   drawer. Pass the same `group` of ids to related items and the drawer pages through them with arrows, headed
   "Record 2 of 5 in this list". Say what the set is with `of` ("cited here", "for this beat", or "" for
   nothing) and what one of them is called with `noun` ("Source", "Related record") where "Record … in this
   list" would be wrong.
7. **Full cards are expensive.** A page should not render more than about a dozen `<EvidenceCard>`s before a
   "show more"; long lists should be rows. The drawer already gives every row the full record one tap away.
8. Readers can hide markers (reader settings). Text must still read correctly without them, so never write
   "see 3" or rely on a marker as punctuation.

```tsx
const drawer = useEvidenceDrawer();                                  // { open(id, group?, of?, noun?), close() }: never changes identity
<button type="button" onClick={() => drawer.open(id, relatedIds)}>Check the source</button>
<button type="button" onClick={() => drawer.open(ids[0], ids, "for this beat", "Source")}>6 sources</button>
const openId = useDrawerRecord();                                    // id of the record on show, or null

<EvidenceLink id={e.id} group={ids}>{e.title}</EvidenceLink>        // a link that opens the drawer (also takes of, noun)
<EvidenceLink id={e.id} open="page">Full record</EvidenceLink>      // goes to /evidence/:id instead
```

The drawer's state lives in the history entry (`location.state.drawer`), so it survives a reload and never
changes the URL. The host and the dialog are in the shell; pages only call `open`. Stepping through the set a
record was opened among stays on one history entry; going on to a record outside that set (one related to it)
adds an entry, so Back returns to the record before, and Close goes back over all of them.

Opening and closing the drawer does not re-render the page underneath, which is what keeps it instant on a page
with thousands of nodes. Two things make that true, and both are yours to keep true:

- **Pages get only their path from the router.** Inside a page, `useLocation()` returns `pathname`; `search` and
  `hash` are empty, `state` is always `null` and `key` is the path. Query parameters and the anchor come from
  `useAddress()` (section 18.1), never from `useSearchParams` or `useLocation().search`. Do not keep page state in
  `location.state` or key anything on `location.key`.
- **`useEvidenceDrawer()` is stable.** Do not call `useDrawerRecord()` in a large list's parent: every component
  that calls it re-renders on each open and close. Call it in the row that needs to mark itself.

## 10. Shared components

All from one import: `import { … } from "../../components/ui";`

### Page structure (`layout.tsx`)

| Component | Props | Notes |
|---|---|---|
| `Page` | `title: string \| null`, `kind?`, `narrow?`, `flush?`, `className?` | sets `<title>` to "Title · Fazbear Canon Archive", or "Name · Kind · Fazbear Canon Archive" when `kind` is given ("Person", "Chapter", "Record": for a page named after its subject); `null` keeps the bare site name |
| `PageHeader` | `title`, `kicker?`, `crumbs?: Crumb[]`, `lede?`, `aside?`, `children?`, `className?` | renders the page's only h1; `aside` (a figure, a summary) sits right of the text from 900px; `children` are actions under the lede |
| `Crumbs` | `items: { to?: string; label }[]` | the last item is the current page |
| `Section` | `title`, `aside?`, `lead?`, `id?`, `className?` | an h2 section; `aside` sits on the heading row (a count, a link) |
| `Empty` | `title?`, `children?`, `action?`, `heading?` | when a list or search has nothing; `heading` makes the title the page's h1 |
| `Missing` | `what?`, `id`, `list?: { to, label }` | the whole page for an address that leads nowhere: what was asked for, the list it would have been in, a search already filled with the words of the address, the front page. Every unknown chapter, record, person, place and source uses it |
| `Collapsible` | `summary`, `meta?`, `defaultOpen?`, `open?`, `onToggle?`, `eager?`, `print?`, `id?`, `className?` | native `<details>`. Closed bodies are not rendered until first opened (pass a function as children to put off even building them); `eager` renders at once; `print` opens it on paper. Pass `open` and `onToggle` to own the state |
| `Callout` | `tone?: "key" \| "note" \| "tension" \| "open"`, `title?`, `className?` | each tone has its own icon and label; body text keeps a readable line even in a wide callout |
| `TableWrap` | `label: string`, `className?` | focusable horizontal scroller; put a `<table className="table">` inside |
| `Prose` | `as?: "div" \| "article" \| "section"`, `className?` | `.prose` |
| `Facts`, `Fact` | `Fact`: `label` | a `<dl>` of labelled facts |
| `Loading` | `label?` | placeholder for lazy content |

```tsx
<PageHeader
  crumbs={[{ to: "/people", label: "People" }, { label: p.name }]}
  title={p.name}
  lede={<RichText text={p.summary} />}
  aside={p.image && <Figure file={p.image} alt={p.name} eager />}
/>
<Collapsible summary="Further evidence" meta={`${n} more records`}><EvidenceList ids={ids} /></Collapsible>
<Callout tone="tension" title="What pushes back"><p><RichText text={s.tension} /></p></Callout>
```

### Controls (`controls.tsx`)

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant?: "default" \| "primary" \| "quiet"`, `size?: "md" \| "sm"`, `icon?`, `iconEnd?`, button attributes | one `primary` per view at most |
| `ButtonLink` | same, plus `to` and router link props | navigation that looks like a button |
| `IconButton` | `icon`, `label` (required: accessible name and tooltip), button attributes | |
| `Chip` | `tone?: "accent" \| "ok" \| "tension" \| "open" \| "neutral"` | a static label |
| `Tag` | router link props | a link styled as a small tag |
| `FilterChip` | `on: boolean`, `count?`, button attributes | a toggle; announces `aria-pressed` |
| `Toggle` | `on`, `onChange(on)`, children as label | a switch |
| `Tabs` | `tabs: { id, label }[]`, `value`, `onChange(id)`, `label`, `panel?` | you render the selected view, in `<TabPanel id={panel} tab={value}>`. Tab reaches the selected tab only; arrows, Home and End move; Enter or Space chooses |
| `TabPanel` | `id`, `tab`, div attributes | the view the tabs switch |
| `Segmented` | `options: { id, label }[]`, `value`, `onChange(id)`, `label` | two to four exclusive options; a radio group with one Tab stop, the arrow keys move the choice |
| `ExternalLink` | `href`, `className?` | a link that leaves the archive: new tab, an arrow, "(opens in a new tab)" for screen readers. Use it for every outside link |
| `SearchField` | `value`, `onChange(v)`, `label`, `placeholder?`, `className?` | text search with icon |
| `FilterBar`, `FilterGroup` | `FilterGroup`: `label` | a panel of labelled filter rows; everything wraps, nothing side-scrolls |

Plain `<select>`, `<input>` and `<label className="check">` are styled by `base.css`. `.filters` is a simple
wrapping row of inputs and selects.

```tsx
<FilterBar>
  <FilterGroup label="Source">
    {games.map((g) => <FilterChip key={g.id} on={sel.has(g.id)} count={count(g.id)} onClick={() => toggle(g.id)}><GameMark id={g.id} /></FilterChip>)}
  </FilterGroup>
  <FilterGroup label="Certainty">…</FilterGroup>
</FilterBar>
```

Filters are a tool, not the headline: put them after the page's lede, show the few that matter, and fold the
rest into a `<Collapsible summary="More filters">`.

### RichText and its tokens (`RichText.tsx`)

| Component | Props | Notes |
|---|---|---|
| `RichText` | `text: string`, `opens?: boolean` | renders the grammar in `schema.ts`: `[[id]]` citation, `{{id}}` entity, `((id))` / `((id\|label))` chapter, `**bold**`, `*italic*`, `<<label\|kind\|ids\|basis>>` date. Returns inline content: wrap it in your own `<p>`, `<li>` or `<span>`. An entity that opens the text or follows the end of a sentence is printed with a capital; pass `opens={false}` for a phrase set inside a longer line (section 19) |
| `Cite`, `CiteGroup` | `id` / `ids` | a marker, a cluster of markers; normally produced by `RichText` |
| `CiteList` | `ids`, `variant?: "full" \| "code"` | source chips for explicit lists |
| `SourceChip` | `id`, `group?`, `variant?` | one chip |
| `EntityLink` | `id`, `variant?: "inline" \| "chip"`, `alone?`, children? | a person or place. Inline, the name is printed as it runs in a sentence; `alone` gives it a capital (it stands on its own, or opens a sentence). A chip always stands alone, and sets a descriptor in italic. An entity with no page links to the evidence filed under it |
| `ChapterLink` | `id`, `label?` | a theory chapter, by title |
| `DatePill` | `label`, `kind`, `basis?`, `evidence?`, `compact?`, `variant?: "tag" \| "inline"` | a date that explains itself in a popover |
| `EvidenceDate` | `e`, `compact?`, `variant?` | the date pill of a record |
| `DateGlyph` | `kind` | the glyph alone |
| `SourceLine` | `e`, `location?`, `full?` | "FNaF4 · Minigame · Night 6 ending" as one quiet line; `full` names the source in full (the drawer does) |
| `EvidencePreview` | `e` | the popover body for a record |

Helpers: `plainText(text)` strips the grammar to words (for `alt`, `aria-label`, search), with the same capitals
at sentence starts as `RichText`; `excerpt(text, max)`
returns the first sentence or two as plain text. `smartQuotes(text)` turns straight quotes into curly ones for
display (`"…"` → “…”, `it's` → it’s, `'87` → ’87); `RichText`, evidence cards and rows, figures, `PageHeader`,
`Section`, `Collapsible` and `Callout` titles already apply it to the strings they are given. Never apply it to
ids, URLs or search text.

### Records (`EvidenceCard.tsx`)

| Component | Props | Notes |
|---|---|---|
| `EvidenceCard` | `e`, `showImage?`, `open?: "drawer" \| "page"`, `group?`, `compact?` | the full card. `compact` is for strips inside an article: image first, claim and quote clamped, no chips |
| `EvidenceRow` | `e`, `n?`, `group?`, `of?`, `noun?`, `claim?`, `open?`, `as?: "li" \| "div"` | one record on a line or two: glyph, title, claim, source. Under a finger the whole row is the link |
| `EvidenceList` | `ids`, `numbers?(id)`, `claim?`, `open?`, `className?` | a `<ul>` of rows from ids; unknown ids are skipped |
| `EvidenceLink` | `id`, `group?`, `of?`, `noun?`, `open?`, `className?` | any content as a link to a record |

Grid of cards: `<div className="ev-grid">`. Rows: `<EvidenceList>` or `<ul className="ev-list">` of rows.

### Figures (`Figure.tsx`)

| Component | Props | Notes |
|---|---|---|
| `Figure` | `file`, `caption?`, `alt?`, `evidence?`, `compact?`, `tag?`, `eager?`, `className?` | a screenshot as an exhibit: dark mat, caption (defaults to the credited caption), "Image source" credit, click to enlarge. `evidence` adds a "Record" link that opens the drawer. `compact` is image only, for cards. `tag` is a small label such as "Exhibit" or "Fig. 2". `eager` for the image at the top of a page |
| `FigureFrame` | `file`, `alt`, `eager?`, `near?`, `onZoom`, `captionId?` | the framed image alone, as a button that enlarges. `near` fetches the file only when the frame comes near the window: for pages that are mostly images (never for figures in running text, which must print) |
| `Thumb` | `file`, `alt?` | a small cropped image for lists; near-window loading |
| `Lightbox` | `file`, `caption?`, `onClose`, `onPrev?`, `onNext?`, `counter?` | the full-screen viewer; Escape, close button, backdrop click, Back; arrow keys or a flick to either side when paging; a pull down closes; full width on a phone |

Every image must go through `Figure` (or carry its own credit link): the archive credits each screenshot to its
source page. `Figure` reserves the image's space before it loads (sizes come from `imgSize(file)`, generated at
build time from `public/img`), so pages do not jump. If you render a raw `<img>`, either give it a fixed box
(`aspect-ratio` + `object-fit`) or spread the size: `<img src={imgUrl(f)} {...imgSize(f)} alt="…" />` with
`height: auto` in CSS. Small pixel-art PNGs shown larger than their natural size are kept crisp automatically;
photographs are never drawn past 1.25 times their own size. An image that fails to load keeps its frame and
caption, with "Image unavailable" where the picture would be.

### Marks, icons, popovers

| Component | Props | Notes |
|---|---|---|
| `Firmness`, `CertaintyMark`, `StatusMark`, `ConfidenceMark`, `FirmGlyph`, `FirmnessLegend` | section 8 | |
| `GameMark` | `id`, `variant?: "code" \| "full" \| "dot"`, `link?` | a source: hue swatch + short code ("FNaF2"), or the full title; `link` goes to its source page |
| `Icon` | `icon: LucideIcon`, `size?`, `label?`, `className?` | Lucide at the site's stroke weight; decorative unless `label` is given |
| `Pop` + `usePopover()` | see `popover.ts` | a small anchored popover in the browser's top layer (never clipped), for previews and explanations |

Icons: import any Lucide icon from `"lucide-react"` and draw it with `<Icon>`. Fixed maps keep one picture per
idea: `SOURCE_KIND_ICON`, `DEATH_KIND_ICON`, `DeathIcon`, `INTERACTION_ICON`, `SECTION_ICON`.

```tsx
const [pop, anchorRef] = usePopover();
<span {...pop.wrapProps}>
  <button type="button" ref={anchorRef} aria-expanded={pop.open} onClick={pop.toggle}>Why?</button>
  {pop.open && <Pop control={pop} role="group" label="Why this is here"><span className="pop__text">…</span></Pop>}
</span>
```

### Hooks and helpers

| Export | What it is |
|---|---|
| `usePageTitle(title, kind?)` | sets the document title (`<Page>` calls it) |
| `useMediaQuery(query)` | e.g. `useMediaQuery("(max-width: 640px)")`. Write widths in px; they are converted to em (px / 16), as in the stylesheets |
| `useAddress()`, `useAddressWrite()`, `useAddressText(name)`, `listParam(raw, allowed?)` | view state in the URL: section 18.1 |
| `useContinue()`, `useReadingProgress()` | where a returning reader picks up in the theory; chapters read (section 18.6) |
| `settleHeader()` | call just before your own code moves the page to a place (section 18.3) |
| `useFlick({ onSide, onDown })`, `useSheetPull(onClose)` | touch: a flick across a viewer; a bottom sheet pulled down by its bar (section 18.5) |
| `openSearch(words?)` | opens the search palette, with words already typed |
| `useStored(key, fallback)` | a value in `localStorage`; prefix keys with `fca:` |
| `useOutsidePointer(refs, handler, active?)` | close-on-outside-click |
| `useSeen(rootMargin?)` | `[ref, seen]`: true once the element has scrolled into view |
| `useModalDialog(open, onClose, { back? })` | props for a native modal `<dialog>`: scroll lock, Escape, backdrop click, focus return, and a step in the history, so the browser's Back closes it (section 18.2) |
| `useEvidenceDrawer()` | `{ open(id, group?, of?, noun?), close() }`; `useDrawerRecord()` gives the id on show, or null |
| `isPlainClick(e)` | true for an unmodified left click (let modified clicks through to the link) |
| `chapterPath`, `evidencePath`, `personPath`, `placePath`, `sourcePath`, `timelineEventPath`, `imgUrl`, `imgSize` | route and asset builders: never hand-assemble a URL |
| `chapterNumber(id)`, `readingOrder`, `partGroups` | the theory's reading order (by part, then file order) and the only source of chapter numbers. Never number a chapter by its index in the `theory` array: six chapters sit elsewhere in the file than in the book, and the search palette showed wrong numbers for exactly those until it used this |
| `plainText`, `excerpt`, `smartQuotes` | text helpers (see RichText above) |
| `deferred(() => import("./Heavy"))` | a code-split component that never suspends, for overlays that must answer a click at once: `<Heavy props={open ? { … } : null} onFail={close} />`. The chunk is fetched in idle time; if it cannot be fetched when wanted the tab reloads once, then `onFail` runs. For page-sized pieces use `React.lazy` |
| `levelOf`, `firmness`, `CERTAINTY`, `STATUS`, `CONFIDENCE`, `DATE_KIND`, `kindLabel`, `SITE_NAME` | words for the scales. Every lookup keyed by a data value falls back for a value it does not know (`firmness()`, `kindLabel()`, `sourceKindIcon()`, `deathKindIcon()`): never index one of the maps directly |
| `longDate(iso, short?)`, `isRelease(id)`, `numberWord(n, capital?)`, `tieWords(kind)`, `tieSaid(tie)`, `tieSentence(tie)` | one way to write a date, a count and a relation. `tieSaid` gives what stands between a tie's two names and after the second: the records' own words where the data has them (`Relation.says`), else the kind's verb |
| `entityName(id, alone?)`, `capitalise`, `isDescriptor(id)`, `sortName`, `byEntityName`, `aliasParts(alias)`, `namesOf(person)`, `foldText`, `opensSentence` | names, aliases and how they are searched and sorted (section 19) |
| `ERA_HUE`, `eraHue`, `GROUP_HUE`, `GROUP_LABEL`, `LOCATION_HUE`, `PHASE_HUE`, `LEXICON_HUE`, `hueOf`, `VERDICT_TONE`, `READING_TONE` | data colours (section 14) |
| `gameMeta(id)` (from `data/gameMeta`) | `{ short, color }` for a source |

## 11. What the shell does for you

- **Titles.** `<Page title>` is enough.
- **Scroll.** A new navigation starts at the top and moves focus to `<main>`; Back and Forward return to where the
  reader was; a change that stays on the same path (search params, the drawer) never moves the page; an in-page
  anchor is a normal link with a hash: `<Link to="/timeline#era-murders">` scrolls to `id="era-murders"`,
  offset for the sticky header and for the element's own `scroll-margin-top`. Back and Forward also put keyboard
  focus back on what the reader left from. Filters live in the URL through `useAddress().write` (section 18.1),
  replacing the entry by default; the reader can then share and return to a filtered view.
- **Sticky things.** Use `top: var(--sticky-top)`. Below 900px the header slides away as the reader moves down
  and returns on the first move back up; the value there is 0, and anything you pin to the top of the window
  also carries the class `pin`, which makes room for the header while it shows (section 18.3).
- **Overlays and Back.** Every modal made with `useModalDialog` is a step in the history: Back closes it and
  keeps the page.
- **The evidence drawer and the citation scope** are mounted once, around every page.
- **Search palette** (`/` or Ctrl/Cmd+K) indexes the site's sections, chapters, people, places, timeline events
  and evidence records.
- **Reader settings** set `data-theme`, `data-text` and `data-cites` on `<html>`. You get both themes and all
  three text sizes for free if you use tokens.
- **Lazy routes.** Each page is its own chunk with its CSS. Keep heavy page-only code inside your folder.
  Navigation is a React transition: the old page stays on screen until the new one is ready, so there is no
  loading flash between pages. A page must therefore render without waiting on anything of its own; if you
  split a heavy widget out with `React.lazy`, give it its own `<Suspense>` with a sized placeholder.
- **404** for unknown routes; a detail page with an unknown id returns `<Missing what="person" id={id}
  list={{ to: "/people", label: "See everyone" }} />`.
- **Print.** `print.css` strips the chrome and switches to paper. Give a folded list the printed text refers to
  `<Collapsible print>`.
- **Failures.** A page that throws while rendering, or whose code cannot be fetched, is caught by the shell: the
  reader sees "This page did not load" with Reload and a way home, and the header, search and footer keep
  working. A failed fetch reloads the tab once by itself first, because the usual cause is a new deploy under an
  open tab. Do not add a top-level error boundary of your own, and do not rely on this one for expected cases:
  a missing id or an empty result is your page's job to handle.

## 12. Responsive rules

Design for 390 first, then 768, then 1440. Breakpoints are written in em (px / 16) in every stylesheet, so a
reader with a larger browser font gets the layout made for that many characters across. Prefer a container
query to a media query wherever the thing that matters is the width of a column, not of the window. In use:

| Width | What changes |
|---|---|
| below 360px | the brand subtitle hides |
| up to 640px ("phone") | drawer and sheets come up from the bottom, the search palette is full screen, filter labels stack, exhibit strips swipe sideways |
| up to 640px, by token | the two smallest type sizes go up a step: `--fs-sm` 14px, `--fs-2xs` 12px |
| up to 899px | the header is 48px, leaves on the way down and returns on the way up; `--sticky-top` is 0 (`pin` adds the header's height while it shows) |
| by measuring | the header's own layout (navigation or menu button, brand, search field, settings button) is chosen by what fits, not by a breakpoint |
| 900px and up | two-column page headers and heroes |
| 900 to 1080px | the header tightens: the brand subtitle and the search shortcut hint hide |
| up to 1079px | the chapter rail is replaced by the sticky chapter bar and a contents sheet |
| `(pointer: coarse)` | controls grow to at least 40 to 44px; citation markers get a larger hit area |

Rules:

- No fixed pixel widths for content. Grids use `repeat(auto-fill, minmax(min(100%, Xrem), 1fr))` or
  `.grid-auto`; two-column layouts use `minmax(0, 1fr)` tracks so long words and chips cannot widen them.
- A flex or grid child that holds text or chips needs `min-width: 0`.
- Tables: `<TableWrap>`. In a narrow column turn rows into stacked, labelled blocks (see `.chapter-table` in
  `theory.css`: a container query, `data-label` on each cell, roles spelled out); side-scrolling is the
  fallback, not the design.
- Charts and SVG diagrams scale with their container (`viewBox`, `width: 100%`); if they need a minimum size,
  put them in `.scroll-x` and say so with a visible hint.
- Page length is a design problem. A page over about 10,000px on a phone needs folding: collapsed sections,
  "show more" after the first dozen items, rows instead of cards, tabs for parallel views.
- Touch targets are at least 40px in one dimension; inline links in prose are exempt. A link in a list can be
  made taller without moving anything: `display: inline-block; padding-block: 0.75rem; margin-block: -0.75rem`
  inside `@media (pointer: coarse)`. A row with one link in it can stretch the link over the row
  (`position: relative` on the row, `::after { position: absolute; inset: 0 }` on the link).
- Fields and menus are 16px or more on touch screens (`base.css` does this): an iPhone zooms the page otherwise.
- The page margin is `--page-pad`, which is never less than the safe-area inset at the sides.

## 13. Accessibility rules

- Links navigate, buttons act. No `div` with `onClick`. Anything clickable is reachable with Tab and has a
  visible focus ring (the default ring comes from `base.css`; do not remove outlines).
- Every control has a name: visible text, or `aria-label` / `<IconButton label>`. Inputs have a `<label>` or
  `aria-label`. Toggles announce their state (`aria-pressed`, `aria-expanded`, `aria-selected`).
- Colour is never the only signal (section 8). Links inside text are underlined.
- Images: meaningful `alt` (a `Figure` uses its caption); decorative images `alt=""`.
- An SVG diagram that contains links or buttons is `role="group"` with an `aria-label`, not `role="img"`.
  Offer the same information as a list or table nearby.
- Scrollable regions are focusable with a label (`<TableWrap>` does this).
- Dialogs use `useModalDialog` (native `<dialog>`): focus moves in, Tab stays in, Escape and Back close, focus
  returns. A dialog inside another must not close its parent: events that did not start on a dialog are ignored
  by it.
- A control's accessible name starts with the words on it (so it can be asked for by voice).
- Nothing opens on focus alone: popovers and pickers open on press, or on ArrowDown.
- `aria-controls` names an element only while that element is in the document.
- Respect `prefers-reduced-motion` (tokens already zero the durations; keep animations inside the media query).
- Headings are in order; one h1; lists are lists; tables have `<th scope>`.
- Run the QA crawl with `--axe` (section 15). Every route is at zero axe violations at three widths in both
  themes; keep it so.

## 14. Data colours and icons

Data files still carry colours and emoji from the old design (`ERA_COLOR`, `VERDICT.color`, `LOCATION_KIND.color`,
`DEATH_KIND.icon` and others). **Ignore them.** The interface reads from `components/palette.ts`,
`components/icons.ts` and `data/gameMeta.ts`, so the look can change without touching content.

- A **hue** (per game, era, people group, location kind, phase, lexicon group) is for small swatches, rules and
  tints only, never text. Pass it inline and mix it with tokens:
  ```tsx
  <li className="tl-era" style={{ "--hue": eraHue(era.id) } as CSSProperties}>
  ```
  ```css
  .tl-era { border-left: 3px solid var(--hue); background: color-mix(in oklab, var(--hue) 9%, var(--c-surface)); }
  ```
- A **tone** (`VERDICT_TONE`, `READING_TONE`) is one of the semantic families. Put `data-tone={tone}` on an
  element and read `var(--tone)`, `var(--tone-soft)`, `var(--tone-line)`, or use `<Chip tone>` and `<Callout tone>`.
- A game is always `<GameMark id>`: the swatch carries the hue, the short code carries the meaning.

## 15. Checks

From your worktree, all must pass before you finish:

```
npx tsc -b
npx tsx scripts/validate.ts          # must print OK
npx oxlint                           # prints nothing when clean
npx vite build
node scripts/qa.mjs --base http://127.0.0.1:<your port> --out <your notes>/qa --axe --widths 1440,768,390
```

The crawl reports console errors, failed requests, horizontal overflow (with the elements causing it) and axe
violations per route, and saves a screenshot of each. `--routes /a,/b` limits it to your pages, `--full` takes
full-page screenshots, `--scroll 1200,2400` adds viewport shots further down, and `--theme paper` (also
`--text large`, `--cites hide`) runs it under a reader setting. Run the paper theme at least once: contrast
problems hide there. The crawl checks each page as it loads; if your page has states of its own (an open panel,
a selected item), open them and look, in both themes. Look at your screenshots at 1440
and 390 and iterate on what you see; passing checks is necessary, not sufficient.

**What these checks do not cover.** Everything in phase 1 was verified in Chromium only. Playwright's WebKit
cannot start on this host (system libraries are missing, and installing them is a change to a shared machine
that nobody asked for), so Safari, which is what an iPhone uses, is untested. The parts most likely to differ
there: the citation and date popovers (native popover API, Safari 17 or later; older browsers get no preview and
the citation still opens the drawer), scroll locking behind the drawer and sheets, focus returning to a link
after the drawer closes (Safari does not focus links on click), and `100dvh` sheets under the address bar. axe
finds only part of what makes a page accessible; the keyboard and screen-reader behaviour of your own widgets is
yours to check by hand.

Lint notes (oxlint with the React plugin): a file that exports components must not also export hooks or
constants, so keep those in a `.ts` file; do not mutate values during render, and do not mutate a hook's
arguments (a ref passed in counts).

The final phase added scripted checks beside the crawl, in `files/ui/final/tools/` (each prints what it checks):
`t-mobile.mjs` (a phone, real touch events, throttled where it matters), `t-review.mjs` (keyboard, names,
popovers, zoom, large fonts), `t-overlays.mjs` (Back and every overlay), `t-journey.mjs` (the main journey with
the keyboard alone, then reduced motion), `t-address.mjs`, `t-scroll.mjs`, `t-header.mjs` (the header at every
10px and three browser font sizes), `t-targets.mjs`, `t-print.mjs`, `t-delivery.mjs`. `suites.sh` runs the four
clusters' own suites against one server. Run the ones that touch what you change.

## 16. Known issues by cluster (history)

**As it stood at the end of phase 1.** The four clusters have since done this work; the list is kept because it
says why the pages are built as they are. What is open now is in `files/ui/final/NOTES.md`.

Everything below is on the new system and working (no console errors, no overflow, axe clean). These are the
things seen and left for you. Heights are from the phase 1 crawl at 1440 and 390.

### A. Timeline (`/timeline`: about 24,900px and 32,700px)

- Still one very long scroll. It needs structure: era sections that can collapse, an era index that stays in
  reach, perhaps "key events only" as the default with the rest folded.
- The era ribbon is a horizontally scrolling strip; on a phone the era labels truncate and the strip gives no
  sense of where you are.
- The locations chart is tall and open by default; it is a secondary view and should be folded or moved.
- Filters are now inside a `Collapsible` and wrap, but there are still seven groups. Decide which two or three
  matter and demote the rest.
- Event cards repeat a lot of chrome (date pill, status tag, game marks, people chips, evidence toggle). On a
  phone each card is tall; consider a tighter collapsed state that opens in place.
- Selecting an event shows its evidence in an inner scroll box (`.tl-evidence`, max 36rem). The evidence drawer
  may serve this better than a nested scroller.
- Of the seven filter groups only Location (`place`) is kept in the URL, beside the selected event (`e`). `era` and
  `layer` are read once on arrival. Layers, support, person, cause, killer and source are component state, so a
  filtered view cannot be shared and is lost on Back. Move them to search params.
- `?e=<event-id>` deep links (used by `timelineEventPath` and the search palette), `?era=<id>` (used by Home)
  and `?place=<id>` must keep working.

### B. Evidence explorer, record, Sources, Gallery

- Explorer (`/evidence`: 9,700px and 25,400px): six selects in a wrapping row plus a grid of full cards. Wants
  `FilterBar` with chips for the two or three main facets, the rest folded, a visible result count, and compact
  rows (or compact cards) with "show more". The search box should be the first control. Filters should stay in
  the URL.
- Record page (`/evidence/:id`): sound two-column layout; the "connections" side (chapters, events, people) could
  be tighter, and previous/next within the same source would help browsing.
- Sources index (`/sources`): a table inside `TableWrap`; on a phone it scrolls sideways. Stacked rows would be
  better.
- Source page (`/sources/:id`: 7,100px and 17,600px): every record of the source as full cards. Rows or grouping
  by kind, with "show more".
- Gallery (`/gallery`: 7,400px and 28,300px): a uniform grid of about 70 cropped thumbnails, one column on a phone.
  Wants grouping by source, two columns on a phone, and the lightbox paging through the current group.

### C. People, person, Family Trees, the Web, Places

- People index (`/people`): cards mix portrait, status and aliases; the "minor figures" chips at the end are a
  wall. Grouping by `GROUP_LABEL` is in place; the hierarchy inside a card needs work.
- Person page (`/people/william-afton`: 7,600px and 16,000px): long on a phone. The "one person, many records"
  identity cards each carry up to eight source chips; evidence is capped at 12 with "Show all". The relationships
  table scrolls sideways in a wrap at both widths: turn it into stacked rows. The hero image is a small pixel
  crop shown through `Figure`; decide its size deliberately.
- Family trees (`/family`): a fixed-size SVG in a scroll box. Labels now wrap to two lines instead of clipping,
  but lines still cross and the tree does not scale to the container. The data's Afton description contains a
  sentence about line styles that no longer matches; the page strips it with a regular expression (see
  `FamilyTrees.tsx`), which is a workaround, not a fix.
- The Web (`/graph`): the force layout has a 46rem minimum width and scrolls sideways on a phone; nodes are not
  keyboard reachable (the SVG is `role="img"`), so the page needs an equivalent list. Tie kind is shown by colour
  group with a legend, and firmness by line style.
- Places (`/places`, `/places/:id`: 3,400px and 7,500px for a place): card grid and detail are plain ports. The
  detail page lists events, deaths and records in full.

### D. The Box, Theorists & Scott, Scott & Faith, Method

- The four pages share pieces in `essays.css` (question-and-answer cards, dated step timelines, reference lines,
  verdict tags) but each still has its own layout. They want one essay template: header, key answers, the
  argument on the reading measure, exhibits, references.
- Box and Scott & Faith: the answer cards now sit two up on desktop and hold several paragraphs each; decide
  whether the short answer should stand alone with the long form folded or moved into the article.
- Theorists & Scott (`/community`: 10,000px and 21,200px): 24 timeline entries and a large grid of theory cards.
  Needs filtering by verdict up front, a tighter card, and folding.
- Step timelines (`.steps`) put the date in a 9.5rem left column on desktop and stack on a phone; figures inside
  steps are small compact images.
- Method is a plain `.article` and reads well; its legends duplicate `FirmnessLegend` in places.

## 17. Decisions and their reasons

- **Fonts**: Fraunces for display (soft, slightly odd, period-appropriate), Literata for text (designed for long
  reading on screens, sturdy at light weights on dark), Inter for interface, IBM Plex Mono for labels. All
  self-hosted as variable files, latin and latin-ext only.
- **Night is the default**, warm rather than blue-black, with a faint static texture behind the page and never
  over text. Paper is a full second theme, not an inversion.
- **Citations as numerals with a drawer**, because chips inside sentences made the text unreadable and leaving
  the page to check a source lost the reader's place.
- **The theory is a cover plus one chapter per route**, because a 17,000px page has no shape: the cover gives the
  thesis, the short story and every answer at a glance; a chapter gives one question, its answer, the argument,
  what pushes back, and the next step.
- **One firmness glyph**, because three badge systems had to be learned three times and leaned on colour.
- **Popovers use the native popover top layer and dialogs use native `<dialog>`**, so nothing is clipped by a
  scroller and focus handling comes from the platform.
- **Page CSS is split per cluster and imported by the page**, so four agents can work at once without touching
  the same file, and a visit loads only the styles of the pages it opens.
- **The first load is bound by bytes, not round trips**: with the full archive, about 485 kB of brotli-compressed
  code and data (the evidence records are 293 kB gzipped of it, the chapters 125 kB, and both load eagerly in
  `store.ts`), 195 to 250 kB of fonts, and the page's images. Hashed files are cached for a year, so a return
  visit transfers almost nothing. Measurements are in `final/NOTES.md`. Keep page chunks lean, and never import
  another page's module to borrow a helper.

## 18. What changed in the final phase

The final phase gave the site one shared layer for the things three clusters had each solved on their own, and
acted on two reviews (a desktop reader with a keyboard, a first-time reader on a phone). The record of what was
done and why is `files/ui/final/NOTES.md`. This section is the reference: what exists now, and the rules that
come with it.

### 18.1 View state in the URL: the address layer (`components/address.ts`)

The router applies every navigation as a React transition, so `useLocation` and `useSearchParams` are a render
behind the browser. Code built on them lost the second of two quick clicks, let a late write land on the page
the reader had just gone to, and opened the drawer over a list one change behind. So pages do not use them.

```tsx
const { params, anchor, get, write, link, now } = useAddress();

const view = get("view") || "events";                       // "" when absent
const kinds = listParam(get("kind"), KINDS);                // a list in one parameter: "a+b" or "a,b"

write({ view: "locations" });                               // replaces the entry (the default for filters)
write({ era: id }, { push: true });                         // a step the reader would call "going somewhere"
write((p) => { p.delete("e"); if (p.get("x")) p.delete("x"); else p.set("x", "1"); });   // read the value here, not from the last render
write({ tie: null }, { anchor: "ties" });                   // parameters and the in-page anchor in one step

<Link to={link("sources")}>Sources</Link>                   // an anchor on this page, with the query kept

const [q, setQ] = useAddressText("q");                      // a text box: answers each key, writes when typing pauses
const change = useAddressWrite();                           // only the writer: never re-renders for a change of address
```

Rules:

- **One call is one history step**, however many parameters it touches. Replace is the default; say `push` when
  Back should undo the change.
- **Work a toggle out inside `write`** (pass a function). It is given the parameters as they are at that moment.
- **A write made after the reader has left the page is refused** (`write` returns false). You do not need to
  guard effects and timers yourself.
- **Never write a value back into a focused field.** `useAddressText` keeps what is typed; the address follows.
- **While the drawer or any overlay is open the address does not change**: the page shows the change at once and
  the address takes it when the overlay closes. Do not read `location.hash` yourself to find out what the page
  shows; read `useAddress()`.
- Everything a cluster documented as a parameter still works exactly as it did. `evidence/addressState.ts` is a
  small adapter over this layer for state described by a `read`/`write` pair.

### 18.2 Overlays are steps in the history (`components/overlayEntry.ts`)

Every modal made with `useModalDialog` (the menu, search, a sheet, an enlarged image) adds a history entry when
it opens, so the browser's Back, which is how a sheet is dismissed on a phone, closes it and keeps the page.
Closing it any other way (Escape, its button, a tap outside) takes that entry away again, so the history is as
it was. You get this by using the hook; there is nothing to call.

- `useModalDialog(open, onClose, { back: false })` is only for a dialog whose state already lives in the history
  (the evidence drawer).
- Going somewhere from inside an overlay (a link in the menu, a search result) leaves no trace of the overlay.
- A dialog opened over another (an image from the drawer) is its own step; Back closes the top one only.
- Do not keep an overlay's open state in the URL as well.

### 18.3 The header on narrow windows, and `pin`

Under 900px the header is 48px tall, slides away as the reader moves down a page, and returns on the first move
back up (`shell/headerReveal.ts`). The state is `data-header="away"` on `<html>`.

- **Anything you pin to the top of the window on a phone carries the class `pin`** beside
  `position: sticky; top: var(--sticky-top)`. It then sits at the very top while the header is away and directly
  under the header while it shows. The chapter bar, the timeline's era bar, the locations header, the evidence
  search bar and the two progress lines do this.
- Only pinned elements are restyled when the header comes and goes. Do not key a rule for the whole page on
  `[data-header]`, and never change a custom property on `:root` in answer to scrolling: every element inherits
  it, and the restyle is 20 to 100 ms on a phone.
- **Only the reader brings the header back.** If your own code moves the page to a place
  (`scrollIntoView`, `scrollTo`), call `settleHeader()` first: the header steps aside, the place is measured
  without it, and it stays away unless the page ends at its top. Links to anchors go through the shell and need
  nothing.
- The reading settings have their own button in the header for as long as there is room, and are in the menu too.

### 18.4 Scroll and focus (`shell/ScrollManager.tsx`)

- A link to an anchor waits for its target however long the page takes, lands with `scrollIntoView` (so
  `scroll-margin-top` on the target and `scroll-padding-top` on the document both count), opens a folded
  `<details>` that is the target or holds it, and moves keyboard focus there.
- Back and Forward return to the place and put focus back on the link or control the reader left from. A reload
  returns to the place too: the landing holds until the content and the fonts are in.
- The reader always wins: a wheel, a touch or a key ends any landing at once.
- **Give your pinned bar's height to the things a link can land on**, as `scroll-margin-top`, or they land under
  the bar (`.chapter > :is(h2, p)[id] { scroll-margin-top: 2.75rem }`).
- While a landing holds the page the browser's scroll anchoring is off, and a page still gliding from a flick is
  held still for a moment first. Neither needs anything from you. (How the moment is measured: 19.7.)

### 18.5 Touch

- `useFlick({ onSide, onDown })`: one finger flicked across something that is not itself scrolling sideways. The
  image viewer changes picture and closes on a pull down; the drawer steps to the next source.
- `useSheetPull(onClose)`: spread on a bottom sheet's bar, with the class `sheet-bar` on the bar. The sheet
  follows the finger and closes when let go far enough down. Every sheet in the site has it; a new one should.
- Citation markers: on its own a marker is at least 24px each way under a finger; neighbours in a run share a
  fingertip, and the drawer's "Source 18 of 35" with its arrows is how a reader corrects a near miss.

### 18.6 Reading progress (`components/reading.ts`)

`useReadingProgress()` gives the chapters finished and the last one opened; `useContinue()` gives where a
returning reader picks up: the chapter last opened, at the paragraph that was at the top of their window, or the
next unread chapter if they finished it. The cover, the home page and the menu offer it. Paragraphs in a chapter
carry anchors (`p1`, `p2`, …) for this; they follow the text and are not for linking from content.

### 18.7 Search (`shell/SearchPalette.tsx`)

The palette indexes pages, chapters (title, question, answer and the whole argument), people (name and aliases),
places, timeline events and every record. Text is folded (case, accents, both kinds of quote), small words are
dropped, common endings are ignored. Where a word is found counts: the title first, then what says what the
entry is (a chapter's question, a person's other names), then anywhere; a number in a title counts for more; the
whole phrase counts for more still. When fewer than three pages, chapters, people or places have every word,
those with some of the words are shown as well. The last row always leads into the evidence locker with the
same words.

To make something findable by another name, the name has to be in the data (a person's `aliases`, a chapter's
question). `openSearch(words)` opens the palette from anywhere.

### 18.8 The page for an address that leads nowhere

`<Missing what="chapter" id={id} list={{ to: "/theory#contents", label: "See all chapters" }} />` is the whole
page. Its document title always ends "… not found", which is how `scripts/qa.mjs` tells that a route in its list
has gone missing; keep that if you change it.

### 18.9 Print (`styles/print.css`)

The shell switches to the paper theme for printing, and opens every `<Collapsible print>`. The header, footer,
bars, rails, dialogs and controls are not printed. A page of your own needs only to hide its own controls, in a
`@media print` block in its own stylesheet (see the end of `theory.css`).

### 18.10 Type on a phone, and the text-size setting

- Under 40em `--fs-sm` is 14px and `--fs-2xs` is 12px (16px root). A sentence a reader is meant to read is never
  smaller than `--fs-sm`; `--fs-xs` and `--fs-2xs` are for labels and metadata.
- The reader's text-size setting scales the root font size (93.75%, 100%, 112.5%). Everything set in rem or in a
  token follows it. Do not set a font size, or a size that should grow with text, in px.

### 18.11 Delivery (`vite.config.ts`)

A preview-server plugin serves text assets as brotli or gzip (precompressed at build) and sets a year of
immutable caching on hashed files; `index.html` is never cached. Data chunks are named for what they hold
(`evidence`, `theory-text`, `archive-data`). Figures in running text use native lazy loading; pages that are
mostly images use `near` loading (`FigureFrame near`, `Thumb`). The first page of a visit does not fade in, and
the loading area is a screen tall, so nothing jumps when the page arrives.

### 18.12 Keep these true

1. No `useSearchParams`, `useLocation().search` or `useLocation().hash` under `src/pages`.
2. Every modal uses `useModalDialog`; every bottom sheet's bar has `sheet-bar` and `useSheetPull`.
3. Everything pinned to the top of the window on a phone has `pin`; everything a link lands on clears the bar.
4. Your own `scrollIntoView` or `scrollTo` to a place is preceded by `settleHeader()`.
5. Nothing opens on focus; names start with the visible words; outside links are `ExternalLink`.
6. Lookups keyed by a data value go through the helpers that fall back; nothing depends on a display name or a
   count typed by hand.
7. Sentences are `--fs-sm` or larger; sizes are rem or tokens; breakpoints are em; prefer container queries.
8. Unknown ids return `<Missing>`; its title ends "not found".
9. A shared rule that restyles another shared class names both classes (`.pop.marks-key__pop`). Between equal
   selectors the later file wins, and `richtext.css`, `records.css`, `figure.css` and `shell.css` all come after
   `components.css`. Page stylesheets load after every shared one, so a page's own rule wins without help.
   `final/tools/t-cascade.mjs` lists every case where order alone decided.
10. The crawl is clean at 1440, 768 and 390 in both themes with axe; the four clusters' suites and the checks in
   `final/tools/` pass.

## 19. Names, aliases and ties

Added after the people data was rewritten (166 entries, 57 of them descriptors). The data now writes names,
aliases and ties so that they can run inside a sentence; the shared layer decides how each is printed. The
code is `components/names.ts` and `components/ties.ts`; the checks are `final/tools/t-names.mjs`,
`t-lowercase.mjs` and `t-people.mjs`.

### 19.1 A name is stored as it runs in a sentence

`person.name` is "William Afton", "the Cassette Man", "the rabbit in the code": correct inside a sentence,
wrong at the head of a row. So:

- **Never print `person.name` or `labelForEntity(id)` directly.** Ask `entityName(id)` for running text and
  `entityName(id, true)` where the name stands alone: a heading, a row, a breadcrumb, a chip, a tree node, a
  document title, a search result, an `<option>`, a label read to a screen reader on its own. For a string you
  already hold, `capitalise(name)`.
- `<EntityLink id alone />` and, in the people pages, `<Name id alone />` do the same. A chip always stands alone.
- A name that opens a sentence you write yourself also takes `alone` (`<Name id={r.from} alone /> is shown as …`).
- **A descriptor is italic wherever people are listed**: class `name-desc`, `isDescriptor(id)` says when. The
  capital does not replace the italic; a canon name that begins with an article ("the Puppet") takes the capital
  and stays upright.
- **Sort and index by `sortName(name)`** (or `byEntityName(a, b)`), which sets a leading article aside; never by
  the raw string, or everything files under T.
- `RichText` and `plainText` give an `{{entity}}` token a capital where it opens the text or follows the end of
  a sentence: a full stop, question mark or exclamation mark, and any closing quotation mark after it. Citation
  markers, an opening quotation mark or bracket and emphasis marks between the two do not count; "Mr.", "c.",
  "vs." and the like end nothing. Bold and italic pass on whether they stand where a sentence starts. A
  `RichText` is taken to open a sentence itself (a paragraph, list item, table cell, caption or heading does);
  pass `opens={false}` for the rare phrase set inside a line of your own. `opensSentence(before, opens)` is the
  rule, if you build text by hand.

### 19.2 An alias is shown with its mark, and searched without it

The data writes an alias as `"Glitchtrap (Scott's working name)"`: the name, then a bracket saying where it comes
from. `aliasParts(alias)` gives `{ name, mark }` (the mark is the bracket that closes the string, or empty).

- **Wherever an alias is shown, its mark is shown with it.** A fan's name, a file's name or Scott's working name
  appears only as a marked alias; print the string as the data has it, or name and mark together, never the
  name alone. Set the mark quieter if you like (`.alias-mark`); let a long one wrap or clip, do not shorten it.
- **Search compares names, not marks.** `namesOf(person)` is the name and each alias without its mark;
  `foldText(text)` is how the searches compare text (case, accents and both kinds of quotation mark aside). The
  search palette, the People register, the evidence picker and the evidence locker's text search all find a
  person, or the records filed under them, by any alias.
- **A result found by an alias says which.** The reader who types "glitchtrap" is shown "The rabbit in the code"
  and has to be told why: the palette puts the alias that was asked for first under the name, the register
  adds a "Match" line, the picker an "also …" line.
- **A name the archive does not use finds nothing, by design** ("henry", "charlie": names from the novels). Do not
  map one to anybody. The empty state says "The archive uses only names that the games print or speak" and links
  to `/method#names`; the register, the palette and the locker all do.

### 19.3 A tie in the records' own words

`Relation.says` gives a tie as the records put it, where the kind's verb would say more than they do:
`calls {to} "old friend"`, `is read as something left behind by`, `pushed {to}'s head into Fredbear's mouth`.
`{to}` marks where the second name goes; without it the name follows the phrase. The kind still decides the
line's colour and family.

- `tieSaid(r)` gives `{ before, after }` around the second name, with quotes set; `tieSentence(r)` the whole
  sentence as plain text. In the people pages `<TieSentence r />` is the sentence with both names linked and
  `<TieSaid r capital />` the same without the first name ("Calls William Afton “old friend”").
- These words run from the first name to the second and cannot be turned round. The first end tells the tie
  on its own page; on the page of the second it is given whole. Do not invent a passive.
- Where a figure is folded into another by such a tie, the page says so in those words ("This figure is read
  as something left behind by William Afton"), not "a form of" or "the same being as".
- Pass the relation itself to these helpers, not a line of a diagram: a drawn line stands for one relation or
  several and carries no `says`.

### 19.4 A record's date

`Evidence.when.kind` says how a date is known where the precision alone would mislabel it (117 records carry
one). `EvidenceDate` uses it; nothing else should work a date's kind out of `precision`.

### 19.5 Diagrams that lay text out in pixels

- **Read sizes from the type tokens.** `tokenPx("--fs-xs")` and `useTypeScale(tokens)` (people's `measure.ts`)
  give a token in pixels as the page resolves it now, and change with the reader's text-size setting, the
  browser's base size and the width at which the small sizes step up. The web once carried 11px and 12px of
  its own; when the phone type floor rose, its names were drawn wider than they had been measured.
- **Measure again when a box changes size**, not only when the frame's width does: the family trees watch their
  boxes with a `ResizeObserver`, so the lines follow when the reader changes the text size.
- **Arrow keys must reach everything.** "The nearest disc that way" can leave a disc that no key leads to;
  `arrowMoves(at)` (people's `webLayout.ts`) puts that right, so every disc is reached from every other.


### 19.6 Text that may grow: an era's summary, a date tag

The rewritten data made two texts longer than the pages had seen: an era's summary (9 to 15 lines on a phone,
where it had been 6 to 9) and an era's range (up to 101 characters in a date tag). Both are now handled for any
length. Commit `51d612d` on `ws/ui-final`; check: `final/tools/t-erafold.mjs`.

- **An era's summary on a phone** (`EraSummary` in `pages/timeline/Timeline.tsx`). Under the timeline's phone
  width (43.6875em) a summary of six lines or more shows four, then a quiet button, "Read the rest" (`Show
  less` once open; `aria-expanded`, `aria-controls`; the era's name is in its screen-reader text). The reason
  is the page's own rule that the first screen shows the first entry: a summary that fills the screen hides
  the timeline. Rules worth keeping if the pattern is used again:
  - *Measure, do not count characters.* Whether a text is long depends on the width and the reader's text size.
    `data-long` is set in a layout effect (and again from a `ResizeObserver`) from `scrollHeight` against the
    line height, so nothing flickers and no state is set in an effect. A text that would lose a line or two is
    left whole.
  - *The whole text stays in the page.* The cut is `line-clamp`, so a screen reader and find-in-page have it all.
    A link inside the hidden part that takes focus opens the summary (`onFocus` on the box).
  - *"Show less" must not strand the reader.* It is pressed at the foot of a long text whose start may be above
    the screen; when the heading is hidden, the era's heading is brought back under the pinned bar
    (`settleHeader()`, then `scrollIntoView({ block: "nearest" })`; `.tl-era__head` has the row's
    `scroll-margin-top`). When the heading is on screen the page does not move.
  - *Wide screens and paper get the whole text*: the cut lives only in the phone block, and the print block
    undoes it with selectors of the same weight.
- **A date tag of several lines** (`.date--tag` in `styles/richtext.css`) keeps its glyph beside the first line
  instead of half-way down the tag. On one line nothing changes.
- **The era index** prints the same ranges; they wrap (up to five lines in the rail). The rail scrolls inside
  itself when the window is short, as before. Not changed.

### 19.7 Ending a glide on a slow phone (`shell/ScrollManager.tsx`, `shell/stepClock.ts`)

Commit `23b62c7` on `ws/ui-final`; checks: `final/tools/probe-glide.mjs` (a trace of one Back pressed during
a glide, run as many times as asked) and section F of `t-mobile.mjs`.

Back pressed while the page still glides from a flick landed on its line on a fast machine and 30 to 90px off
it on a busy one, which is what a slow phone is. Two rules came out of finding why; both are about time that
passes while the page stepped to is being drawn.

- **Ask about the moment a step began, not about now.** "Is the page gliding" was asked when the new page was
  on screen: by then the last scroll event heard could be older than the 200 ms that count as gliding, and no
  hold was made. `gliding(at)` now takes a time, and for Back and Forward it is given the time the step began.
- **A listener for `popstate` that must run before the router's has to be added before the router's.** On
  `window`, Chromium runs `popstate` listeners in the order they were added, whether or not they ask for
  capture, and the router draws the page from inside its own listener. A listener added by a component (in an
  effect) is added after the router's and hears of the step only once the page has been drawn. `stepClock.ts`
  adds its listener when the module loads and offers `stepBegan()`. (The scroll manager's older `stepped`
  mark is set by a component's listener; it is used only to leave positions unfiled for a second after a
  step, which holds in either order. Its comment now says so.)
- **Count a hold in frames as well as in time.** The page is made unscrollable (`overflow: hidden` on `<html>`)
  to end the glide. The part of the browser that does the gliding hears of it only when a frame is drawn; on a
  busy page 120 ms can pass without one, and the page was let go before the glide had been told to stop. The
  hold now ends when 120 ms have passed and two frames have been drawn, or after a second if no frame comes
  (a tab in the background).
- **To test timing like this, load the machine; do not throttle the browser.** Chromium's CPU throttling slows
  timers and frames together and hides the fault (8 times slower: every run landed). Twenty busy loops on an
  8-core machine showed it in a quarter of the runs: before, of 24 runs, 18 landed on the line, 2 within 30px
  and 4 further off; after, 24 on the line.

## 20. What changed in the finishing round

A short round after the final phase: seven places where a page did not yet say what the data says, one
performance item, and this handbook's move into the repository. This section is the reference for what it
added. Sections 1 to 19 stand as they were written. The counts it quotes (of records, images, entries) are
those of the day it was written; the data has grown since.

### 20.1 Deaths and other fates (`components/labels.ts`, `components/Outcome.tsx`)

`src/data/deaths.ts` is the timeline's second layer. It holds more than deaths: an entry's `outcome` says what
the records carry about the victim, and an entry with none is a death. The interface used to call every entry a
death. It now reads the field, and these are the words, used the same way on every page:

| `outcome` in the data | Printed | Mark | Colour | Counted as |
|---|---|---|---|---|
| (none), or `death` | **Death** | skull (`DeathIcon`) | tension | a death ("9 recorded deaths", "1 death") |
| `presumed` | **Presumed dead** | hourglass (`FateIcon`) | neutral | an other fate |
| `not-shown` | **Fate not shown** | hourglass | neutral | an other fate |
| `survives` | **Survives** | hourglass | neutral | an other fate |
| `branch` | **Death in one ending** | hourglass | neutral | an other fate |

What each word means is the data's own definition (the header of `deaths.ts`), kept in `OUTCOME` beside the
word: a death is one "a record states, shows or firmly implies"; presumed dead, "no record states or shows the
death; the model presumes it, and the entry says on what"; fate not shown, "the game leaves the fate open";
survives, "the attack is shown, and the victim lives"; death in one ending, "it happens in one ending only,
which no later game is shown to follow". An outcome the interface does not know yet (new data) is printed as the
data spells it, with the hourglass, and is never a death.

The rules that come with the words:

- **Nothing is called a death that is not one, and nothing is counted as one.** Print an entry with `<FateTag>`
  (its outcome, then its cause: "Survives · By a machine") or `<OutcomeMark>` (the outcome alone); read it with
  `outcomeOf(d)`, `isDeath(d)` and `outcomeInfo(outcome)`; count with `countFates(list)`, which gives
  `{ deaths, others }`, and write the count with `fateWords` ("2 deaths", "5 other fates"). Never count the
  list's length and call it deaths.
- **The four other fates are counted together as "other fates"** and told apart by their words. One mark for
  the four was chosen over a mark each: at 12px four pictograms are not told apart, and the words are there.
- **The skull and the tension colour belong to a recorded death.** A row, a tag, a node on the line or a cell
  in the Locations view that is about another fate has the hourglass and the page's ordinary ink.
- **The layer is "Deaths and other fates"**; its filters are "Cause" and "By" (not "Cause of death" and
  "Killer": Michael Afton gets up and walks away), with "Anyone" and "Unknown or not stated". The address still
  says `layer=deaths`, `cause=` and `killer=`: links made before this round keep working, and the address is
  not prose.
- **Counts keep the two apart, one clause for each kind there is any of**: the page opens "43 events, 9 recorded
  deaths and 14 other fates across eight eras"; an era's and a place's tally is "6 events · 1 death · 5 other
  fates"; the filter summary is "Showing 12 of 43 events, 3 of 9 deaths and 2 of 14 other fates", and "all 43
  events, all 9 deaths and all 14 other fates" when nothing is filtered out.
- **An entry confined to one ending says so on a chip** beside its tag: "one ending: Walk Away (Clock Out)".
  A death in one ending has said "in one ending" in its tag, so its chip only names the ending ("ending: …").
- **The key has the two marks**, in the words above: "Death" beside the skull, "Other fate" beside the
  hourglass with the four words it stands for. `OutcomeMark` carries the definition as its tooltip, as the
  firmness marks do.
- **A person's page** lists such entries under "Fate" (what became of them) and "Responsible for" (what is put
  down to them); **a place's page** under "Deaths here", "Other fates here" or "Deaths and other fates here",
  by what the list holds. Each row carries the same tag as the timeline.
- The cause labels (`DEATH_KIND` in the data: "Murder", "By a machine", "Disappearance" …) are worded by the
  data to be true of an entry that is not a death; print them with `causeLabel(kind)`, their icon with
  `deathKindIcon(kind)`. A cause the icon table does not know gets a neutral ring, not the skull.

New shared class roots: `outcome` (with `data-outcome`) and `fate-tag`.

### 20.2 Small copies of the images (`scripts/thumbs.py`, `components/Figure.tsx`, `components/links.ts`)

The gallery, the cards and the lists of people and places used to load each image whole (20.7 MB for 170
files when this was written). `python3 scripts/thumbs.py` writes a WebP copy at most 560px wide into
`public/thumb/` for every image that is worth one (160 of the 170, 2.7 MB); the small pixel-art images (ten of
them then) get none and are served as they are, because they are light already and a resampled copy would spoil
their crisp edges. The script records a hash of
every image it has looked at in `scripts/thumbs-manifest.json`, and the validator checks it: a copy whose image
has since been replaced, a copy with no image, or a missing copy is an error; an image the script has not yet
looked at is a warning. **Run the script after adding or replacing an image**, and commit what it writes.

- `thumbUrl(file)` is the address of the small copy, or of the image itself where there is none;
  `thumbSize(file)` is the copy's pixel size (undefined where there is none). Both read the `thumbs` map of the
  `virtual:image-sizes` module (`vite.config.ts`).
- `<FigureFrame small>` draws the copy; `<Figure compact>` passes it on, and `<Thumb>` always does. Use `small`
  for a frame that is never drawn large (a tile, a card, a row). A figure in a chapter is not small and shows
  the image itself.
- The image viewer (`<Lightbox>`) always shows the image itself, and shows the copy the reader has just seen in
  its place until the image has arrived.
- If a copy cannot be loaded, the frame falls back to the image.
- The rule of section 10 (a small pixel-art image shown larger than its natural size is kept crisp, a
  photograph is not) now also holds for an image that fills its box (`object-fit: cover`): the larger of its
  two scales decides.

### 20.3 Counts (`components/typography.ts`)

One helper prints a number of things: `count(n)` ("1,046"), and `plural(n, one, many?)` with its noun
("1 record", "1,046 records", "2 entries"; `plural(n, "pushes", "push")` gives "1 pushes back", "3 push back").
`numberWord(n, capital?)` writes a small count as a word for running text ("eight eras") and falls back to
`count` from thirteen up. **Never print a count straight from `.length`**, however small it is today: the
Method page printed "1046 records" beside the home page's "1,046". `FilterChip`'s `count` and the people
pages' `GroupLabel` format the number they are given. The evidence pages' `count` and `records` and the
essays' helpers are this one. A year, an id, a chapter's number and a citation's number are not counts and are
printed as they are; so is a number the records quote (an app id, a code typed in a game).

### 20.4 Real-world dates (`RealDate`)

The date pill, its glyph and its kinds ("printed", "derived", "estimated" …) say how a date **inside the story**
is known. The day something was released, posted, published or captured is not such a date, and is never drawn
as a pill: `<RealDate date="2015-08-24" />` prints "24 August 2015" as a `<time>` (`short` abbreviates the
month for a narrow column; a label the calendar does not know, such as "c. 2011", is printed as it was given).
`about` is what the date is the date of, where the data says: it is the date's tooltip, and a page prints it
beside the date as well, for a reader who cannot point. In the essays a dated step has `<RealDate short>`
beside its row, and `<EssayEntry date dateBasis>` spells the date out with its basis when the step is open.

### 20.5 How a record's wording was checked (`pages/evidence/checked.ts`)

A record's `verifiedVia` is an address, a sentence, or a sentence with addresses in it. `readCheck(note)` reads
all three into words and named links, and the record page prints them under "How the wording was checked":

- **An address is never the text of its link.** The link says what kind of thing it is and names the page:
  "a fan wiki’s page *Tutorial Unit*", "the wiki’s image *Clocksend3.jpg*", "the Wayback Machine’s capture of
  *scottgames.com*, 7 December 2014", "a video on YouTube", "an item on the Internet Archive", "the Steam store
  page of app 319510", "a page on Game Jolt". A site with no entry in the table is named by its domain.
- A note that opens with an address opens with "Against": "Against a fan wiki’s page *Tutorial Unit*."
- A sentence the data wrote is printed as written ("Steam News API …, author ‘Scott’."), its addresses named
  where they stand. A link that follows the words that describe it is only named ("FNaF4's *Bed.png*",
  "720p capture on YouTube"); the second and later of a run are only named too ("images *A*, *B* and *C*",
  "video 1 on YouTube; video 2; video 3").
- **A note that names a fan wiki says: "A fan wiki is where the wording was checked, not where the fact comes
  from."** The wiki is a research aid and never a source.
- A note that is one address keeps the address whole: a wiki's page can be called "M.X.E.S." or "Danger! Keep
  Out!", and the mark at the end is part of its name (the old reader cut it off the link).

### 20.6 Links that leave the archive (`ExternalLink`, `.outbound`)

The arrow of an outbound link sits in a no-wrap box of its own behind a word joiner: it stays on the line with
the link's last word, and the full stop or semicolon that follows the link in a sentence stays with the arrow.
No line begins with an arrow or with a mark. If you style the arrow, reach it as `.your-link .icon`: it is no
longer a direct child of the link.

### 20.7 The section being read (`pages/theory/TheoryChapter.tsx`)

The section a chapter marks, in the rail at a desk and in the contents sheet under 1080px, is the last heading
to have reached the line a link would put it on, or a little under (96px). That line is the document's scroll
padding **and the heading's own scroll margin** (the pinned chapter bar's height, where there is a bar). The
first version left the margin out, so on every screen with the bar the sheet marked the section before the one
a reader had just chosen. If you write a "where am I" mark of your own, measure it from where a link lands.

### 20.8 Smaller things

- **A heading over graded material promises no grade.** The home page's cards are graded canon, strong
  inference or theory; the heading over them is "Six things the model says" under "How firm it is", which is
  true whatever the grades are. The count comes from the data (`numberWord`). The same goes for a line about
  dates: there are six kinds of date, so "each date marked for how it is known", not a list of three.
- The menu's description of the timeline counts the eras from the data.
- `.evx-link` (a record page's row for a chapter, a beat or a timeline event): the third column takes at most
  half the row and wraps, so a long date in words no longer squeezes the title into a column one word wide.
- The Method page's side panel is the shared `.panel` with the shared `Facts`, as a record's is.
- `smartQuotes`: a double mark that is followed by a space or by the end of the text never opens a quotation,
  so a title that ends on an opening bracket ("Bad news about the FNAF movie. :(") closes with a closing mark.
- `<RichText>`: a sentence that ends on a link whose own words end in a full stop (the chapter "Hen and W.A.")
  has one full stop. Write the sentence's full stop after the link as usual; it is dropped where it would be
  the second.
- The count beside an entity chip (`.ppl-chips__n`) keeps its width: the name wraps, the number never does.

### 20.9 Checks

`scripts/qa.mjs` also visits the timeline's second layer alone (`/timeline?layer=deaths`) and an event open on
an entry that is not a death (`/timeline?e=d-michael-scooped`). The round's own scripted checks are in the
working folder (`fin/tools/`, not in the repository): `t-timeline.mjs` (every entry of `deaths.ts`, open and
closed, in both views and both layers, the tallies of each era and the filter summary against the data),
`t-thumbs.mjs` and `t-print-thumbs.mjs`, `t-home.mjs`, `t-counts.mjs` (no count of four digits without its
separator on any page of the crawl), `t-dates.mjs`, `t-checked.mjs` (all 1,043 notes as the reader words them,
then the page), `t-rail.mjs`, `t-small.mjs`, `t-quotes.mts` (the changed quote rule over every string of the
data).
