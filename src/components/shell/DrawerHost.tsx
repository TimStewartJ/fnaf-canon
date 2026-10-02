import { Suspense, lazy, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EvidenceDrawerContext, type DrawerState, type EvidenceDrawerApi } from "../evidenceDrawer";

const EvidenceDrawer = lazy(() => import("../EvidenceDrawer"));

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

  const api = useMemo<EvidenceDrawerApi>(() => {
    const here = { pathname: location.pathname, search: location.search, hash: location.hash };
    const state = (location.state ?? {}) as WithDrawer;
    return {
      current: drawer?.id ?? null,
      open(id, group) {
        navigate(here, { state: { ...state, drawer: { id, group, pushed: drawer ? drawer.pushed : true } }, replace: !!drawer });
      },
      close() {
        if (!drawer) return;
        const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
        if (drawer.pushed && idx > 0) navigate(-1);
        else navigate(here, { state: { ...state, drawer: undefined }, replace: true });
      },
    };
  }, [location, drawer, navigate]);

  return (
    <EvidenceDrawerContext.Provider value={api}>
      {children}
      {drawer && (
        <Suspense fallback={null}>
          <EvidenceDrawer state={drawer} onClose={api.close} />
        </Suspense>
      )}
    </EvidenceDrawerContext.Provider>
  );
}
