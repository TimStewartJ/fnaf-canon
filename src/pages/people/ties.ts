/**
 * What the people pages need of relations ("ties") beyond their words: firmness ranks, grouping
 * by family, and the ties the diagrams draw. The words themselves (tieWords, tieSentence, the
 * families) are shared with the rest of the site and live in components/ties.ts; they are passed
 * on from here so the cluster has one place to import from. No components here.
 */
import type { Relation, Status } from "../../data/schema";
import { TIE_FAMILIES, entityName, tieSentence, tieWords, type TieFamily } from "../../components/ui";

export { TIE_FAMILIES, TIE_FAMILY_HELP, TIE_FAMILY_LABEL, tieSaid, tieSentence, tieWords, type TieFamily, type TieTold, type TieWords } from "../../components/ui";

/** The relation kinds the identity model is built from. A tie of this kind inside one being is part of its identity. */
const IDENTITY_KINDS = new Set(["same-as", "possesses", "wore", "became"]);
export const isIdentityKind = (kind: string): boolean => IDENTITY_KINDS.has(kind);

export const STATUS_RANK: Record<Status, number> = { canon: 3, strong: 2, theory: 1 };
export const STATUSES: Status[] = ["canon", "strong", "theory"];
export const weakest = (list: Status[]): Status => list.reduce<Status>((w, s) => (STATUS_RANK[s] < STATUS_RANK[w] ? s : w), "canon");
export const strongest = (list: Status[]): Status => list.reduce<Status>((w, s) => (STATUS_RANK[s] > STATUS_RANK[w] ? s : w), "theory");

/** First letter upper-cased, for a phrase that opens a row. */
export const sentenceCase = (text: string): string => (text ? text[0].toUpperCase() + text.slice(1) : text);

export const plural = (n: number, one: string, many = `${one}s`): string => `${n} ${n === 1 ? one : many}`;

/** Splits ties into the four families, in a fixed order, keeping the given order inside each. */
export function byFamily<T>(items: readonly T[], kindOf: (item: T) => string): { family: TieFamily; items: T[] }[] {
  return TIE_FAMILIES
    .map((family) => ({ family, items: items.filter((it) => tieWords(kindOf(it)).family === family) }))
    .filter((g) => g.items.length > 0);
}

/** A record of a relation that a diagram shows as another record, and how firmly the model reads it as that other. */
export interface Fold { record: string; into: string; status: Status }

/** A tie as the diagrams draw it: one line, standing for one relation or for several whose ends were folded together. */
export interface DrawnTie {
  key: string;
  from: string;
  to: string;
  kind: string;
  /**
   * How firm the line is. A relation is recorded between two records; when a diagram shows one of
   * them as another (folds it), the line between the records shown is no firmer than that fold. So
   * each relation counts as the weakest of itself and its folds, and the line takes the firmest of
   * the relations it stands for.
   */
  status: Status;
  rels: readonly Relation[];
  /** The folds behind the line. Empty when every relation is recorded between the two records shown. */
  folds: readonly Fold[];
}

const statusWord: Record<Status, string> = { canon: "canon", strong: "strong inference", theory: "theory" };

/** What a drawn tie says, in plain words: the relations behind it, by the names they are recorded under, and any folds. */
export function tieTitle(tie: DrawnTie): string {
  const said = tie.rels.map((r) => `${tieSentence(r)} (${statusWord[r.status] ?? r.status})`).join("; ");
  if (!tie.folds.length) return said;
  const folds = tie.folds.map((f) => `${entityName(f.record, true)} is shown as ${entityName(f.into)} (${statusWord[f.status] ?? f.status})`).join("; ");
  return `${said}. ${folds}. Drawn as ${statusWord[tie.status] ?? tie.status}.`;
}
