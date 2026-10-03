/**
 * A source's records in the one order this cluster shows them: grouped by kind of source (in the
 * order of the shared labels), and inside a kind by in-universe time, then id. The source page
 * lists them this way, and "previous" and "next" on a record page step through the same sequence.
 * No components here.
 */
import type { Evidence } from "../../data/schema";
import { evidence } from "../../data/store";
import { GAME_DATES } from "../../data/dates";
import { kindOrder } from "./explorerState";

export interface KindGroup { kind: string; items: Evidence[] }

const bySource = new Map<string, Evidence[]>();
for (const e of evidence) {
  const list = bySource.get(e.game);
  if (list) list.push(e); else bySource.set(e.game, [e]);
}
const ordered = new Map<string, Evidence[]>();

/** Records grouped by kind, kinds in label order; the records keep the order they come in. */
export function byKind(records: readonly Evidence[]): KindGroup[] {
  const groups = new Map<string, Evidence[]>();
  for (const e of records) {
    const list = groups.get(e.kind);
    if (list) list.push(e); else groups.set(e.kind, [e]);
  }
  return kindOrder(groups.keys()).map((kind) => ({ kind, items: groups.get(kind)! }));
}

/** Every record of a source, in page order. */
export function recordsOf(game: string): Evidence[] {
  let list = ordered.get(game);
  if (!list) {
    list = byKind(bySource.get(game) ?? []).flatMap((g) => g.items);
    ordered.set(game, list);
  }
  return list;
}

/** How many records a source has. */
export const sizeOf = (game: string): number => bySource.get(game)?.length ?? 0;

/** A record's neighbours inside its source. */
export function neighbours(e: Evidence): { prev?: Evidence; next?: Evidence; at: number; of: number } {
  const list = recordsOf(e.game);
  const i = list.findIndex((x) => x.id === e.id);
  return { prev: list[i - 1], next: list[i + 1], at: i + 1, of: list.length };
}

/** True when there is something to say about when a source is set (a label with nothing after it is worse than no label). */
export const hasSetIn = (id: string, fallback: string | undefined): boolean => !!GAME_DATES[id] || /[\p{L}\p{N}]/u.test(fallback ?? "");
