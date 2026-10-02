import { Suspense, lazy, useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { CiteScope } from "./components/CiteScope";
import { Loading } from "./components/layout";
import { DrawerHost } from "./components/shell/DrawerHost";
import { Footer } from "./components/shell/Footer";
import { Header } from "./components/shell/Header";
import { MenuSheet } from "./components/shell/MenuSheet";
import { usePrefs } from "./components/shell/prefs";
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
const NotFound = lazy(() => import("./pages/NotFound"));
const SearchPalette = lazy(() => import("./components/shell/SearchPalette"));

const isTyping = (el: EventTarget | null) => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

function Shell() {
  const location = useLocation();
  const [search, setSearch] = useState(false);
  // The phone menu belongs to the history entry it was opened on, so navigating closes it.
  const [menuAt, setMenuAt] = useState<string | null>(null);
  usePrefs();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((k === "k" && (e.metaKey || e.ctrlKey) && !e.altKey) || (k === "/" && !e.metaKey && !e.ctrlKey && !e.altKey && !isTyping(e.target) && !document.querySelector("dialog[open]"))) {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <DrawerHost>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }}>Skip to content</a>
      <Header onSearch={() => setSearch(true)} onMenu={() => setMenuAt(location.key)} />
      <main id="main" className="site-main" tabIndex={-1}>
        <CiteScope key={location.pathname}>
          <Suspense fallback={<Loading />}>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </CiteScope>
      </main>
      <Footer />
      {menuAt === location.key && <MenuSheet onClose={() => setMenuAt(null)} onSearch={() => { setMenuAt(null); setSearch(true); }} />}
      {search && <Suspense fallback={null}><SearchPalette onClose={() => setSearch(false)} /></Suspense>}
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
