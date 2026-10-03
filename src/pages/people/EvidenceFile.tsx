import { useMemo } from "react";
import type { Evidence } from "../../data/schema";
import { EvidenceRow } from "../../components/ui";
import { Capped } from "./Dossier";

/**
 * Evidence records as compact rows, the first few shown and the rest behind a button. Every row
 * opens its record in the drawer, and the drawer pages through the whole group, shown or not.
 */
export function EvidenceRows({ records, cap = 8 }: { records: readonly Evidence[]; cap?: number }) {
  const group = useMemo(() => (records.length > 1 ? records.map((e) => e.id) : undefined), [records]);
  return (
    <Capped items={records} cap={cap} noun="records">
      {(shown) => <ul className="ev-list">{shown.map((e) => <EvidenceRow key={e.id} e={e} group={group} />)}</ul>}
    </Capped>
  );
}
