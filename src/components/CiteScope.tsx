import { useMemo, type ReactNode } from "react";
import { CiteScopeContext, createCiteNumbering } from "./citeScope";

/**
 * Starts a citation numbering scope: citations rendered inside are numbered 1, 2, 3… by first
 * appearance. Pass `prime` (a stable array of evidence ids in reading order) to fix the numbers up
 * front, as a chapter does so its markers match its source list.
 */
export function CiteScope({ prime, children }: { prime?: readonly string[]; children: ReactNode }) {
  const numbering = useMemo(() => createCiteNumbering(prime), [prime]);
  return <CiteScopeContext.Provider value={numbering}>{children}</CiteScopeContext.Provider>;
}
