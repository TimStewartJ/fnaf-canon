import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { allTags, evidence, games, labelForEntity } from "../../data/store";
import { Button, Empty, EvidenceCard, KIND_LABEL, Page, PageHeader, SearchField } from "../../components/ui";
import "./evidence.css";

const PAGE = 60;

export default function EvidenceExplorer() {
  const [sp, setSp] = useSearchParams();
  const q = sp.get("q") ?? "";
  const game = sp.get("game") ?? "";
  const kind = sp.get("kind") ?? "";
  const cert = sp.get("cert") ?? "";
  const tag = sp.get("tag") ?? "";
  const entity = sp.get("entity") ?? "";
  const hasImage = sp.get("img") === "1";
  const sort = sp.get("sort") ?? "time";
  const limit = Number(sp.get("n") ?? PAGE);

  const set = (k: string, v: string) => {
    const next = new URLSearchParams(sp);
    if (v) next.set(k, v); else next.delete(k);
    next.delete("n");
    setSp(next, { replace: true });
  };

  const entities = useMemo(() => {
    const s = new Set<string>();
    for (const e of evidence) { e.people?.forEach((p) => s.add(p)); e.places?.forEach((p) => s.add(p)); }
    return [...s].sort((a, b) => labelForEntity(a).localeCompare(labelForEntity(b)));
  }, []);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const list = evidence.filter((e) => {
      if (game && e.game !== game) return false;
      if (kind && e.kind !== kind) return false;
      if (cert && e.certainty !== cert) return false;
      if (tag && !e.tags?.includes(tag)) return false;
      if (entity && !e.people?.includes(entity) && !e.places?.includes(entity)) return false;
      if (hasImage && !e.image) return false;
      if (terms.length) {
        const hay = `${e.id} ${e.title} ${e.claim} ${e.quote ?? ""} ${e.location} ${e.notes ?? ""} ${(e.tags ?? []).join(" ")} ${(e.people ?? []).join(" ")}`.toLowerCase();
        return terms.every((t) => hay.includes(t));
      }
      return true;
    });
    if (sort === "game") {
      const order = new Map(games.map((g, i) => [g.id, i]));
      list.sort((a, b) => (order.get(a.game) ?? 99) - (order.get(b.game) ?? 99) || a.id.localeCompare(b.id));
    }
    return list;
  }, [q, game, kind, cert, tag, entity, hasImage, sort]);

  const filtered = !!(q || game || kind || cert || tag || entity || hasImage);

  return (
    <Page title="Evidence locker">
      <PageHeader
        kicker="Evidence"
        title="Evidence locker"
        lede="Every record is one fact, pinned to the exact spot in a game or in Scott's own words, with the in-universe time it describes. Nothing here is a theory."
      />
      <div className="filters ev-filters">
        <SearchField className="search" label="Search the evidence" placeholder="Search claims, quotes, locations…" value={q} onChange={(v) => set("q", v)} />
        <select value={game} onChange={(e) => set("game", e.target.value)} aria-label="Source">
          <option value="">All sources</option>
          {games.map((g) => <option key={g.id} value={g.id}>{g.title}</option>)}
        </select>
        <select value={kind} onChange={(e) => set("kind", e.target.value)} aria-label="Kind of source">
          <option value="">All kinds</option>
          {Object.entries(KIND_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select value={cert} onChange={(e) => set("cert", e.target.value)} aria-label="Certainty">
          <option value="">Any certainty</option>
          <option value="stated">Stated</option><option value="shown">Shown</option><option value="implied">Implied</option>
        </select>
        <select value={entity} onChange={(e) => set("entity", e.target.value)} aria-label="Person or place">
          <option value="">Any person or place</option>
          {entities.map((id) => <option key={id} value={id}>{labelForEntity(id)}</option>)}
        </select>
        <select value={tag} onChange={(e) => set("tag", e.target.value)} aria-label="Tag">
          <option value="">Any tag</option>
          {allTags.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={sort} onChange={(e) => set("sort", e.target.value)} aria-label="Sort order">
          <option value="time">Sort: in-universe time</option>
          <option value="game">Sort: release order</option>
        </select>
        <label className="check"><input type="checkbox" checked={hasImage} onChange={(e) => set("img", e.target.checked ? "1" : "")} /> With a screenshot</label>
      </div>
      <p className="ev-count" role="status">
        {results.length} of {evidence.length} records
        {filtered && <Button variant="quiet" size="sm" onClick={() => setSp(new URLSearchParams(sort !== "time" ? { sort } : {}), { replace: true })}>Clear filters</Button>}
      </p>
      {results.length === 0 ? <Empty title="No records match">Try fewer filters, or a different word.</Empty> : (
        <div className="ev-grid">
          {results.slice(0, limit).map((e) => <EvidenceCard key={e.id} e={e} />)}
        </div>
      )}
      {results.length > limit && (
        <p className="ev-more">
          <Button onClick={() => { const n = new URLSearchParams(sp); n.set("n", String(limit + PAGE)); setSp(n, { replace: true }); }}>
            Show {Math.min(PAGE, results.length - limit)} more ({results.length - limit} remaining)
          </Button>
        </p>
      )}
    </Page>
  );
}
