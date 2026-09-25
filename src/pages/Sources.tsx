import { Link, useParams } from "react-router-dom";
import { evidence, gameById, games } from "../data/store";
import { EvidenceCard, KIND_LABEL, Section } from "../components/ui";

export default function Sources() {
  return (
    <div className="page">
      <h1>Sources</h1>
      <p className="lede">The only admissible sources: the games (in release order) and Scott Cawthon's own words. Books and films are excluded by design — see <Link to="/method">Method</Link>.</p>
      <table className="src-table">
        <thead><tr><th>Source</th><th>Released</th><th>Developer</th><th>Set in</th><th>Records</th></tr></thead>
        <tbody>
          {games.map((g) => (
            <tr key={g.id}>
              <td><Link to={`/sources/${g.id}`}>{g.title}</Link><div className="muted small">{g.summary}</div></td>
              <td className="mono">{g.released}</td>
              <td>{g.developer}</td>
              <td>{g.settingYearLabel}</td>
              <td className="mono">{evidence.filter((e) => e.game === g.id).length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SourceDetail() {
  const { id = "" } = useParams();
  const g = gameById.get(id as never);
  if (!g) return <div className="page"><p className="empty">Unknown source. <Link to="/sources">All sources</Link></p></div>;
  const ev = evidence.filter((e) => e.game === g.id);
  const byKind = new Map<string, number>();
  ev.forEach((e) => byKind.set(e.kind, (byKind.get(e.kind) ?? 0) + 1));
  return (
    <div className="page">
      <p className="crumbs"><Link to="/sources">Sources</Link> / {g.title}</p>
      <h1>{g.title}</h1>
      <p className="muted">Released {g.released} · {g.developer} · In-universe setting: {g.settingYearLabel}</p>
      <p className="big-claim">{g.summary}</p>
      <p className="chips">{[...byKind].map(([k, n]) => <Link key={k} className="tag" to={`/evidence?game=${g.id}&kind=${k}`}>{KIND_LABEL[k]} · {n}</Link>)}</p>
      <Section title={`Evidence from this source (${ev.length})`}>
        <div className="ev-grid">{ev.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
      </Section>
    </div>
  );
}
