/**
 * The model's accounting: where every evidence record stands. Pure, with no imports beyond types,
 * so it can be exercised outside the app (see the Method page for how it is shown).
 *
 * It counts what scripts/validate.ts counts ("theory coverage: N/M accounted"), so the page and the
 * archive's own check always give the same total.
 */
import type { Evidence, OutsideStoryGroup, TheorySection } from "../../data/schema";

export interface Coverage {
  /** Every evidence record in the archive. */
  total: number;
  /** Cited by at least one chapter, in its text or as evidence that pushes back. */
  cited: number;
  /** Not cited by a chapter, but filed under one as further evidence. */
  filed: number;
  /** In no chapter yet, but cited by a beat of the short storyline. */
  story: number;
  /** None of the above, and listed as outside the story with a reason. */
  outside: number;
  /** cited + filed + story + outside. */
  placed: number;
  /** Records nothing has taken up yet. */
  unplaced: number;
  /** Whole percent placed. 100 only when every record is placed; never 0 once any record is. */
  percent: number;
  complete: boolean;
  /** Unplaced records per source id, largest first. */
  unplacedBySource: [source: string, records: number][];
}

/**
 * Sorts every record into exactly one of: cited by a chapter, filed under a chapter as further
 * evidence, cited only by the storyline, listed as outside the story, or not yet placed. A record
 * that qualifies for more than one is counted once, in that order. Ids that name no record are
 * ignored.
 */
export function modelCoverage(
  records: readonly Pick<Evidence, "id" | "game">[],
  chapters: readonly TheorySection[],
  outsideGroups: readonly OutsideStoryGroup[],
  citationsIn: (s: TheorySection) => string[],
  evidenceFiledUnder: (s: TheorySection) => string[],
  storylineCitations: readonly string[] = [],
): Coverage {
  const cited = new Set(chapters.flatMap(citationsIn));
  const filed = new Set(chapters.flatMap(evidenceFiledUnder));
  const story = new Set(storylineCitations);
  const outside = new Set(outsideGroups.flatMap((g) => g.ids));
  const n = { cited: 0, filed: 0, story: 0, outside: 0 };
  const bySource = new Map<string, number>();
  for (const r of records) {
    if (cited.has(r.id)) n.cited++;
    else if (filed.has(r.id)) n.filed++;
    else if (story.has(r.id)) n.story++;
    else if (outside.has(r.id)) n.outside++;
    else bySource.set(r.game, (bySource.get(r.game) ?? 0) + 1);
  }
  const total = records.length;
  const placed = n.cited + n.filed + n.story + n.outside;
  const complete = total > 0 && placed === total;
  const percent = complete ? 100 : total === 0 || placed === 0 ? 0 : Math.min(99, Math.max(1, Math.floor((placed / total) * 100)));
  return {
    total, ...n, placed, unplaced: total - placed, percent, complete,
    unplacedBySource: [...bySource].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
  };
}
