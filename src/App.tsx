import { Suspense, lazy, memo, useEffect, useMemo, useState, type ReactNode } from "react";
import { HashRouter, Navigate, NavigationType, Route, Routes, UNSAFE_LocationContext as LocationContext, useLocation } from "react-router-dom";
import { samePath, useAddressRouter, useLivePath } from "./components/address";
import { CiteScope } from "./components/CiteScope";
import { deferred } from "./components/deferred";
import { Loading } from "./components/layout";
import { useOverlayRouter } from "./components/overlayEntry";
import { onSearchRequest } from "./components/searchRequest";
import { DrawerHost } from "./components/shell/DrawerHost";
import { Footer } from "./components/shell/Footer";
import { Header } from "./components/shell/Header";
import { MenuSheet } from "./components/shell/MenuSheet";
import { PageBoundary } from "./components/shell/PageBoundary";
import { usePrefs, usePrinting } from "./components/shell/prefs";
import { ScrollManager } from "./components/shell/ScrollManager";

/*
 * Every page is its own chunk, loaded when its route is first visited. The shell itself does not
 * import the data store, so the header paints before the evidence arrives.
 */
const Home = lazy(() => import("./pages/home/Home"));
const TheoryCover = lazy(() => import("./pages/theory/TheoryCover"));
const TheoryChapter = lazy(() => import("./pages/theory/TheoryChapter"));
const Timeline = lazy(() => import("./pages/timeline/Timeline"));
const EvidenceExplorer = lazy(() => import("./pages/evidence/EvidenceExplorer"));
const EvidenceDetail = lazy(() => import("./pages/evidence/EvidenceDetail"));
const Sources = lazy(() => import("./pages/evidence/Sources"));
const SourceDetail = lazy(() => import("./pages/evidence/Sources").then((m) => ({ default: m.SourceDetail })));
const Gallery = lazy(() => import("./pages/evidence/Gallery"));
const People = lazy(() => import("./pages/people/People"));
const PersonDetail = lazy(() => import("./pages/people/PersonDetail"));
const FamilyTrees = lazy(() => import("./pages/people/FamilyTrees"));
const Graph = lazy(() => import("./pages/people/Graph"));
const Places = lazy(() => import("./pages/people/Places"));
const PlaceDetail = lazy(() => import("./pages/people/Places").then((m) => ({ default: m.PlaceDetail })));
const Box = lazy(() => import("./pages/essays/Box"));
const Community = lazy(() => import("./pages/essays/Community"));
const Author = lazy(() => import("./pages/essays/Author"));
const Method = lazy(() => import("./pages/essays/Method"));
const DevBlocks = lazy(() => import("./pages/dev/Blocks"));
const DevKit = lazy(() => import("./pages/dev/Kit"));
const NotFound = lazy(() => import("./pages/NotFound"));
// The palette must answer its shortcut at once, so it is split out without suspending (see deferred.ts).
const SearchPalette = deferred(() => import("./components/shell/SearchPalette"));

const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

/**
 * What a page gets from the router: its path, and nothing else. The query and the anchor come
 * from the address layer (components/address.ts), which shows a change the moment it is made; the
 * router's own copy arrives a render later, as a transition. History state (where the open
 * evidence drawer lives) and the entry key are left out too. So a change of filter, an anchor, or
 * the drawer opening re-renders the shell, and the parts of a page that read the address, never
 * the whole page through the router. The shell itself still reads the real location.
 *
 * react-router marks its location context "UNSAFE" because it is not a documented API; this is the
 * same provider <Routes location> renders, with a value that keeps its identity. If the router is
 * upgraded and this breaks, removing <PageLocation> restores correct (but slower) behaviour for
 * everything except `useSearchParams` and `useLocation().search`, which pages do not use.
 */
function PageLocation({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const value = useMemo(
    () => ({ location: { pathname, search: "", hash: "", state: null, key: pathname }, navigationType: NavigationType.Pop }),
    [pathname],
  );
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}

/** The routed pages. Memoised with no props: only a change of path (through PageLocation) re-renders it. */
const Pages = memo(function Pages() {
  const { pathname } = useLocation();
  return (
    // The Suspense boundary sits outside the per-page key on purpose. Navigation is a transition,
    // and a boundary that is already showing content keeps the old page up until the new one is
    // ready; a boundary remounted with each page would flash "Loading" on every first visit.
    <PageBoundary resetKey={pathname}>
      <Suspense fallback={<div data-route-loading><Loading /></div>}>
        <CiteScope key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<TheoryCover />} />
            <Route path="/theory/:chapterId" element={<TheoryChapter />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/evidence" element={<EvidenceExplorer />} />
            <Route path="/evidence/:id" element={<EvidenceDetail />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PersonDetail />} />
            <Route path="/family" element={<FamilyTrees />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:id" element={<PlaceDetail />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/sources/:id" element={<SourceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/method" element={<Method />} />
            <Route path="/community" element={<Community />} />
            <Route path="/box" element={<Box />} />
            <Route path="/author" element={<Author />} />
            <Route path="/dev/blocks" element={<DevBlocks />} />
            <Route path="/dev/kit" element={<DevKit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CiteScope>
      </Suspense>
    </PageBoundary>
  );
});

function Shell() {
  const { pathname, search: query, hash } = useLocation();
  // null: closed. Otherwise the words to open it with.
  const [search, setSearch] = useState<string | null>(null);
  // The phone menu belongs to the page it was opened on, so going anywhere closes it. (Not to the
  // history entry: a page rewrites its own entry whenever a filter changes.)
  const [menuAt, setMenuAt] = useState<string | null>(null);
  const [searchFailed, setSearchFailed] = useState(false);
  usePrefs();
  usePrinting();
  useAddressRouter();
  useOverlayRouter();
  // The address has moved on and the page has not yet: its code is still being fetched.
  const arriving = !samePath(useLivePath(), pathname);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((k === "k" && (e.metaKey || e.ctrlKey) && !e.altKey) || (k === "/" && !e.metaKey && !e.ctrlKey && !e.altKey && !isTyping(e.target) && !document.querySelector("dialog[open]"))) {
        e.preventDefault();
        setSearch("");
      }
    };
    window.addEventListener("keydown", onKey);
    // A page may ask for search with words already in it (the page for an address that leads nowhere).
    const stop = onSearchRequest((words) => setSearch(words));
    return () => { window.removeEventListener("keydown", onKey); stop(); };
  }, []);

  // Every id in the archive is lower case, so an address typed or pasted with capitals is the same page.
  if (pathname !== pathname.toLowerCase()) return <Navigate to={{ pathname: pathname.toLowerCase(), search: query, hash }} replace />;

  return (
    <DrawerHost>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }}>Skip to content</a>
      <Header onSearch={() => setSearch("")} onMenu={() => setMenuAt(pathname)} />
      {arriving && <div className="route-progress" aria-hidden />}
      <main id="main" className="site-main" tabIndex={-1} aria-busy={arriving || undefined}>
        <PageLocation><Pages /></PageLocation>
      </main>
      <Footer />
      {menuAt === pathname && <MenuSheet onClose={() => setMenuAt(null)} onSearch={() => { setMenuAt(null); setSearch(""); }} />}
      <SearchPalette props={search !== null ? { onClose: () => setSearch(null), initial: search } : null} onFail={() => { setSearch(null); setSearchFailed(true); }} />
      {searchFailed && (
        <div className="shell-notice" role="alert">
          <span>Search could not be loaded. The archive may have been updated while this tab was open, or the connection dropped.</span>
          <button type="button" className="btn btn--sm btn--primary" onClick={() => window.location.reload()}>Reload</button>
          <button type="button" className="btn btn--sm btn--quiet" onClick={() => setSearchFailed(false)}>Dismiss</button>
        </div>
      )}
    </DrawerHost>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Shell />
    </HashRouter>
  );
}
