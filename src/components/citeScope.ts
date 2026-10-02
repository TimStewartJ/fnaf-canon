/**
 * Citation numbering. Inside a <CiteScope>, every evidence id gets a number the first time it is
 * cited, and the same record keeps that number wherever it appears again. The shell wraps each page
 * in a scope, so numbering restarts on every page; a chapter primes its scope so numbers follow
 * reading order and match its source list.
 */
import { createContext, useContext } from "react";

export interface CiteNumbering {
  /** The number for an id, assigning the next free one if it has none. */
  number(id: string): number;
  /** Ids in number order. */
  ids(): string[];
}

export function createCiteNumbering(prime: readonly string[] = []): CiteNumbering {
  const map = new Map<string, number>();
  for (const id of prime) if (!map.has(id)) map.set(id, map.size + 1);
  return {
    number(id) {
      let n = map.get(id);
      if (n == null) { n = map.size + 1; map.set(id, n); }
      return n;
    },
    ids: () => [...map.keys()],
  };
}

export const CiteScopeContext = createContext<CiteNumbering | null>(null);

/** The current numbering, or null when no scope is mounted. */
export function useCiteNumbering(): CiteNumbering | null {
  return useContext(CiteScopeContext);
}
