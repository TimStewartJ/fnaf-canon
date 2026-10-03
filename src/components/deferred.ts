/**
 * Code-split overlays that open without a pause.
 *
 * React.lazy suspends the first time its component renders, and after showing a fallback React
 * waits a few hundred milliseconds before revealing the content (so fallbacks do not flicker). For
 * a page that is fine. For something that must answer a click at once (the evidence drawer, the
 * search palette) it reads as lag. `deferred()` splits the code the same way but never suspends:
 * the chunk is fetched when the page has settled, or at the first request if that comes sooner,
 * and the component renders as soon as it exists.
 *
 *   const SearchPalette = deferred(() => import("./SearchPalette"));
 *   …
 *   <SearchPalette props={open ? { onClose: close } : null} onFail={close} />
 *
 * The wrapper stays mounted. It renders the real component whenever `props` is not null, and
 * nothing while `props` is null or the code is still on its way.
 *
 * When the code cannot be fetched: a failure in idle time is ignored. A failure when the component
 * is actually wanted usually means the site was redeployed under an open tab (the old file names
 * are gone, and a browser will not retry a failed import within the same page), so the page reloads
 * once; whatever state lives in the URL or the history entry comes back with it. If that has
 * already been tried, `onFail` is called so the caller can do the next best thing.
 */
import { createElement, useEffect, useLayoutEffect, useRef, useState, type Attributes, type ComponentType, type FunctionComponent } from "react";
import { isStaleCodeError, reloadOnce } from "./staleCode";

export function deferred<P extends object>(importer: () => Promise<{ default: ComponentType<P> }>): FunctionComponent<{ props: P | null; onFail?: () => void }> {
  let loaded: ComponentType<P> | null = null;
  let loading: Promise<ComponentType<P>> | null = null;
  const load = () =>
    (loading ??= importer().then(
      (m) => (loaded = m.default),
      (err: unknown) => { loading = null; throw err; },
    ));

  function Deferred({ props, onFail }: { props: P | null; onFail?: () => void }) {
    const wanted = props !== null;
    const [impl, setImpl] = useState<ComponentType<P> | null>(() => loaded);
    const fail = useRef(onFail);
    useLayoutEffect(() => { fail.current = onFail; });
    useEffect(() => {
      if (impl) return;
      let alive = true;
      const fetchIt = () => {
        load().then(
          (c) => { if (alive) setImpl(() => c); },
          (err: unknown) => {
            if (!wanted) return;
            if (isStaleCodeError(err) && reloadOnce()) return;
            console.error("An interface file failed to load.", err);
            if (alive) fail.current?.();
          },
        );
      };
      let cancel = () => {};
      if (wanted) fetchIt();
      else if ("requestIdleCallback" in window) {
        const id = window.requestIdleCallback(fetchIt, { timeout: 4000 });
        cancel = () => window.cancelIdleCallback(id);
      } else {
        const id = setTimeout(fetchIt, 1500);
        cancel = () => clearTimeout(id);
      }
      return () => { alive = false; cancel(); };
    }, [impl, wanted]);
    return impl && props ? createElement(impl, props as P & Attributes) : null;
  }
  return Deferred;
}
