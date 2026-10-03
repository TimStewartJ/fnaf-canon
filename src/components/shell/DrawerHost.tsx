import { useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deferred } from "../deferred";
import { EvidenceDrawerContext, EvidenceDrawerRecordContext, type DrawerState, type EvidenceDrawerApi } from "../evidenceDrawer";

// A separate chunk that never suspends (see deferred.ts): the first citation opens as fast as the rest.
const EvidenceDrawer = deferred(() => import("../EvidenceDrawer"));

interface WithDrawer { drawer?: DrawerState }

/**
 * Provides the evidence drawer to everything below it and renders the drawer itself. The open
 * record is stored in the current history entry's state: opening pushes an entry (so Back closes
 * the drawer and nothing else), moving between records replaces it.
 */
export function DrawerHost({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const drawer = (location.state as WithDrawer | null)?.drawer ?? null;

  // open() and close() look up the current history entry when they are called, so the API object
  // never changes and nothing that reads it re-renders when the drawer opens or closes.
  const latest = useRef({ location, drawer, navigate });
  useLayoutEffect(() => { latest.current = { location, drawer, navigate }; });

  const api = useMemo<EvidenceDrawerApi>(() => {
    const now = () => {
      const { location: l, drawer: d, navigate: go } = latest.current;
      return { d, go, here: { pathname: l.pathname, search: l.search, hash: l.hash }, state: (l.state ?? {}) as WithDrawer };
    };
    return {
      open(id, group) {
        const { d, go, here, state } = now();
        go(here, { state: { ...state, drawer: { id, group, pushed: d ? d.pushed : true } }, replace: !!d });
      },
      close() {
        const { d, go, here, state } = now();
        if (!d) return;
        const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
        if (d.pushed && idx > 0) go(-1);
        else go(here, { state: { ...state, drawer: undefined }, replace: true });
      },
    };
  }, []);

  return (
    <EvidenceDrawerContext.Provider value={api}>
      <EvidenceDrawerRecordContext.Provider value={drawer?.id ?? null}>
        {children}
        <EvidenceDrawer props={drawer && { state: drawer, onClose: api.close }} />
      </EvidenceDrawerRecordContext.Provider>
    </EvidenceDrawerContext.Provider>
  );
}
