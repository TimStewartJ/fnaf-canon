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
 *   <SearchPalette props={open ? { onClose: close } : null} />
 *
 * The wrapper stays mounted. It renders the real component whenever `props` is not null, and
 * nothing while `props` is null or the code is still on its way.
 */
import { createElement, useEffect, useState, type Attributes, type ComponentType, type FunctionComponent } from "react";

export function deferred<P extends object>(importer: () => Promise<{ default: ComponentType<P> }>): FunctionComponent<{ props: P | null }> {
  let loaded: ComponentType<P> | null = null;
  let loading: Promise<ComponentType<P>> | null = null;
  const load = () => (loading ??= importer().then((m) => (loaded = m.default)));

  function Deferred({ props }: { props: P | null }) {
    const wanted = props !== null;
    const [impl, setImpl] = useState<ComponentType<P> | null>(() => loaded);
    useEffect(() => {
      if (impl) return;
      let alive = true;
      const fetchIt = () => { void load().then((c) => { if (alive) setImpl(() => c); }); };
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
