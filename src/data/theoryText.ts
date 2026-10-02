import type { StoryBeat, TheoryBlock, TheorySection } from "./schema";

/**
 * Pure helpers for walking theory content. No Vite or DOM APIs here: the app (store.ts) and
 * the validator (scripts/validate.ts, run under Node) both import this file.
 */

const CITE_RE = /\[\[([a-z0-9-]+)\]\]/g;
const DATE_RE = /<<[^|>]+\|[a-z]+\|([a-z0-9,-]*)\|[^>]*>>/g;
const SECTION_REF_RE = /\(\(([a-z0-9-]+)(?:\|[^)]*)?\)\)/g;

/** Every RichText string inside one block. */
export function blockTexts(block: TheoryBlock): string[] {
  if (typeof block === "string") return [block];
  switch (block.kind) {
    case "heading": return [block.text];
    case "list": return block.items;
    case "figure": return block.caption ? [block.caption] : [];
    case "quote": return [];
    case "callout": return [block.text];
    case "compare": return block.columns.map((c) => c.text);
    case "table": return [...block.head, ...block.rows.flat()];
    case "evidence": return [];
  }
}

/** Evidence ids a block points at directly (not through an inline [[citation]]). */
export function blockEvidenceIds(block: TheoryBlock): string[] {
  if (typeof block === "string") return [];
  switch (block.kind) {
    case "figure": return block.evidence ? [block.evidence] : [];
    case "quote": return [block.evidence];
    case "evidence": return block.ids;
    default: return [];
  }
}

/** Image files a section uses (hero and figure blocks). */
export function sectionImages(section: TheorySection): string[] {
  const out: string[] = [];
  if (section.hero) out.push(section.hero.image);
  for (const b of section.body) if (typeof b !== "string" && b.kind === "figure") out.push(b.image);
  return out;
}

/** Every RichText string in a section: answer, body blocks, tension and changesIf. */
export function sectionTexts(section: TheorySection): string[] {
  return [
    ...(section.answer ? [section.answer] : []),
    ...section.body.flatMap(blockTexts),
    ...(section.hero?.caption ? [section.hero.caption] : []),
    ...(section.tension ? [section.tension] : []),
    ...(section.changesIf ? [section.changesIf] : []),
  ];
}

/** Evidence ids cited inline in a RichText string, including those inside date pills. */
export function citationsInText(text: string): string[] {
  const ids: string[] = [];
  for (const m of text.matchAll(CITE_RE)) ids.push(m[1]);
  for (const m of text.matchAll(DATE_RE)) ids.push(...m[1].split(",").filter(Boolean));
  return ids;
}

/** Chapter ids referenced with ((section-id)) in a RichText string. */
export function sectionRefsInText(text: string): string[] {
  return [...text.matchAll(SECTION_REF_RE)].map((m) => m[1]);
}

/** Evidence cited in the chapter's prose and blocks (inline citations, quotes, figures and exhibit strips). */
export function inlineCitations(section: TheorySection): string[] {
  const ids = new Set<string>();
  for (const t of sectionTexts(section)) for (const id of citationsInText(t)) ids.add(id);
  for (const b of section.body) for (const id of blockEvidenceIds(b)) ids.add(id);
  return [...ids];
}

/** Everything a chapter rests on or answers to: inline citations plus its listed counter-evidence. */
export function citationsIn(section: TheorySection): string[] {
  return [...new Set([...inlineCitations(section), ...(section.counterEvidence ?? [])])];
}

/** Everything filed under a chapter: citations, counter-evidence and further evidence. */
export function evidenceFiledUnder(section: TheorySection): string[] {
  return [...new Set([...citationsIn(section), ...(section.further ?? [])])];
}

/** Evidence ids cited by a storyline beat. */
export function beatCitations(beat: StoryBeat): string[] {
  return [...new Set([...citationsInText(beat.when), ...citationsInText(beat.text)])];
}
