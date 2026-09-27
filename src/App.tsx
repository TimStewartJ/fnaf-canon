import { HashRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import EvidenceExplorer from "./pages/EvidenceExplorer";
import EvidenceDetail from "./pages/EvidenceDetail";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import FamilyTrees from "./pages/FamilyTrees";
import Graph from "./pages/Graph";
import Places, { PlaceDetail } from "./pages/Places";
import Theory from "./pages/Theory";
import Sources, { SourceDetail } from "./pages/Sources";
import Gallery from "./pages/Gallery";
import Method from "./pages/Method";
import Community from "./pages/Community";
import Box from "./pages/Box";
import { evidence } from "./data/store";

const NAV = [
  ["/", "Overview"], ["/theory", "The Theory"], ["/timeline", "Timeline"], ["/evidence", "Evidence"],
  ["/people", "People"], ["/family", "Family Trees"], ["/graph", "Web"], ["/places", "Places"],
  ["/box", "The Box"], ["/community", "Theorists"], ["/sources", "Sources"], ["/gallery", "Gallery"], ["/method", "Method"],
] as const;

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Shell() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => setOpen(false), [loc.pathname]);
  return (
    <div className="app">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <span className="brand-dot" aria-hidden />
          <span>FAZBEAR<span className="brand-sub">CANON ARCHIVE</span></span>
        </NavLink>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">☰</button>
        <nav className={open ? "nav open" : "nav"}>
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>
          ))}
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<Theory />} />
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
          <Route path="*" element={<p className="empty">Nothing here. The pizzeria is closed.</p>} />
        </Routes>
      </main>
      <footer className="footer">
        <p>
          Unofficial fan reference. {evidence.length} atomic evidence records, sourced only from the games and Scott Cawthon's own words.
          Five Nights at Freddy's © Scott Cawthon. Screenshots are used for commentary and are credited to their source pages.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Shell />
    </HashRouter>
  );
}
