import { useLayoutEffect, useMemo, useRef, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DRAWER_KEY, OVERLAY_KEY, entryState, liveAddress, notePlace, samePath, settleAddress } from "../address";
import { deferred } from "../deferred";
import { evidencePath } from "../links";
import { EvidenceDrawerContext, EvidenceDrawerRecordContext, type DrawerState, type EvidenceDrawerApi } from "../evidenceDrawer";

// A separate chunk that never suspends (see deferred.ts): the first citation opens as fast as the rest.
const EvidenceDrawer = deferred(() => import("../EvidenceDrawer"));

interface WithDrawer { [DRAWER_KEY]?: DrawerState }
const sameList = (a?: string[], b?: string[]): boolean => !!a && !!b && a.length === b.length && a.every((x, i) => x === b[i]);

/**
 * Provides the evidence drawer to everything below it and renders the drawer itself. The open
 * record is stored in the current history entry's state: opening pushes an entry (so Back closes
 * the drawer and nothing else), stepping through the set it was opened among replaces it, and
 * going on from it to some other record (one related to it) pushes again, so Back returns to the
 * record the reader came from.
 */
export function DrawerHost({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const drawer = (location.state as WithDrawer | null)?.[DRAWER_KEY] ?? null;

  // open() and close() read the browser's own entry when they are called (the router's copy runs
  // a render behind), so the API object never changes and nothing that reads it re-renders when
  // the drawer opens or closes.
  const latest = useRef({ pathname: location.pathname, drawer, navigate });
  useLayoutEffect(() => { latest.current = { pathname: location.pathname, drawer, navigate }; });

  const api = useMemo<EvidenceDrawerApi>(() => {
    const now = () => {
      const live = liveAddress();
      const state = entryState<WithDrawer>() ?? {};
      // The path as the router spells it, so the page under the drawer is not taken for a new one.
      const pathname = samePath(latest.current.pathname, live.pathname) ? latest.current.pathname : live.pathname;
      return { d: state[DRAWER_KEY], go: latest.current.navigate, here: { pathname, search: live.search, hash: live.hash }, state };
    };
    return {
      open(id, group, of, noun) {
        // A filter still on its way to the address is written first: the drawer's entry, and the one under it, both say what the reader sees.
        settleAddress();
        const { d, go, here, state } = now();
        // Opened from another overlay (a search result, a record named under an enlarged image):
        // the drawer takes that overlay's place in the history, so Back from the drawer is the page.
        const { [OVERLAY_KEY]: overlay, ...rest } = state as WithDrawer & Record<string, unknown>;
        // A step within the set the open record belongs to, or a move on to another record.
        const paging = !!d && !overlay && sameList(d.group, group);
        const steps = (d?.steps ?? 0) + (paging ? 0 : 1);
        if (!d && !overlay) notePlace();
        void go(here, { state: { ...rest, [DRAWER_KEY]: { id, group, of, noun, pushed: d ? d.pushed : true, steps } }, replace: paging || !!overlay });
      },
      close() {
        const { d, go, here, state } = now();
        if (!d) return;
        const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
        const steps = d.steps ?? 1;
        if (d.pushed && idx >= steps) void go(-steps);
        else void go(here, { state: { ...state, [DRAWER_KEY]: undefined }, replace: true });
      },
    };
  }, []);

  return (
    <EvidenceDrawerContext.Provider value={api}>
      <EvidenceDrawerRecordContext.Provider value={drawer?.id ?? null}>
        {children}
        <EvidenceDrawer
          props={drawer && { state: drawer, onClose: api.close }}
          // The drawer's code could not be fetched, even after a reload: show the record's own page.
          onFail={() => { const d = latest.current.drawer; if (d) void latest.current.navigate(evidencePath(d.id), { replace: true }); }}
        />
      </EvidenceDrawerRecordContext.Provider>
    </EvidenceDrawerContext.Provider>
  );
}
