/**
 * Which theory chapters discuss a person or a place. No components here.
 *
 * Two signals, both read from the data: a chapter names the entity with an {{entity-id}} token in
 * its text, or it rests on (cites, answers to, or files) evidence that is filed under the entity.
 */
import type { TheorySection } from "../../data/schema";
import { evidenceFiledUnder } from "../../data/store";
import { sectionTexts } from "../../data/theoryText";
import { chapterNumber, readingOrder } from "../../components/ui";

export interface ChapterHit {
  section: TheorySection;
  /** Number in reading order. */
  n: number;
  /** The chapter's text links to the entity by name. */
  names: boolean;
  /** How many of the entity's records the chapter rests on. */
  cited: number;
  /** How many of those the chapter lists as pushing back. */
  against: number;
}

const filed = new Map<string, string[]>();
const texts = new Map<string, string>();

/** Chapters that name any of the entities or use any of the records: named first, then by records used. */
export function chaptersAbout(entityIds: readonly string[], evidenceIds: ReadonlySet<string>): ChapterHit[] {
  const tokens = entityIds.map((id) => `{{${id}}}`);
  const hits: ChapterHit[] = [];
  for (const section of readingOrder) {
    let ids = filed.get(section.id);
    if (!ids) { ids = evidenceFiledUnder(section); filed.set(section.id, ids); }
    let text = texts.get(section.id);
    if (text === undefined) { text = sectionTexts(section).join("\n"); texts.set(section.id, text); }
    const names = tokens.some((t) => text.includes(t));
    const cited = ids.reduce((n, id) => n + (evidenceIds.has(id) ? 1 : 0), 0);
    if (!names && cited === 0) continue;
    const against = (section.counterEvidence ?? []).reduce((n, id) => n + (evidenceIds.has(id) ? 1 : 0), 0);
    hits.push({ section, n: chapterNumber(section.id), names, cited, against });
  }
  return hits.sort((a, b) => Number(b.names) - Number(a.names) || b.cited - a.cited || a.n - b.n);
}
