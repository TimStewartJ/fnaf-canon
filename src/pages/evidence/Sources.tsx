import { Link, useParams } from "react-router-dom";
import { evidence, gameById, games } from "../../data/store";
import { GAME_DATES } from "../../data/dates";
import { ButtonLink, Crumbs, DatePill, Empty, EvidenceCard, GameMark, KIND_LABEL, Page, PageHeader, Section, TableWrap, Tag, sourcePath } from "../../components/ui";
import "./sources.css";

function SetIn({ id, fallback }: { id: string; fallback: string }) {
  const d = GAME_DATES[id];
  if (!d) return <span className="muted">{fallback}</span>;
  return <DatePill label={d.label} kind={d.kind} basis={d.basis} evidence={d.evidence} />;
}

export default function Sources() {
  return (
    <Page title="Sources">
      <PageHeader
        kicker="Evidence"
        title="Sources"
        lede={<>The only admissible sources: the games, in release order, and Scott Cawthon's own words. Books and films are left out by design; see the <Link to="/method">method</Link>.</>}
      />
      <TableWrap label="Sources">
        <table className="table src-table">
          <thead><tr><th scope="col">Source</th><th scope="col">Released</th><th scope="col">Developer</th><th scope="col">Set in</th><th scope="col" className="src-table__num">Records</th></tr></thead>
          <tbody>
            {games.map((g) => (
              <tr key={g.id}>
                <td className="src-table__source">
                  <Link to={sourcePath(g.id)} className="src-title">{g.title}</Link>
                  <div className="src-table__meta"><GameMark id={g.id} /></div>
                  <div className="muted small">{g.summary}</div>
                </td>
                <td className="mono nowrap">{g.released}</td>
                <td>{g.developer}</td>
                <td><SetIn id={g.id} fallback={g.settingYearLabel} /></td>
                <td className="mono src-table__num">{evidence.filter((e) => e.game === g.id).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </Page>
  );
}

export function SourceDetail() {
  const { id = "" } = useParams();
  const g = gameById.get(id as never);
  if (!g) {
    return (
      <Page title="Source not found" narrow>
        <Empty title="Unknown source" action={<ButtonLink to="/sources" variant="primary">All sources</ButtonLink>}>There is no source with the id “{id}”.</Empty>
      </Page>
    );
  }
  const ev = evidence.filter((e) => e.game === g.id);
  const byKind = new Map<string, number>();
  ev.forEach((e) => byKind.set(e.kind, (byKind.get(e.kind) ?? 0) + 1));
  return (
    <Page title={g.title}>
      <Crumbs items={[{ to: "/sources", label: "Sources" }, { label: g.title }]} />
      <header className="src-head">
        <p className="src-head__mark"><GameMark id={g.id} /></p>
        <h1>{g.title}</h1>
        <p className="src-head__meta">Released {g.released} · {g.developer} · Set in <SetIn id={g.id} fallback={g.settingYearLabel} /></p>
        <p className="lede">{g.summary}</p>
        <p className="cluster">{[...byKind].map(([k, n]) => <Tag key={k} to={`/evidence?game=${g.id}&kind=${k}`}>{KIND_LABEL[k]} · {n}</Tag>)}</p>
      </header>
      <Section title="Evidence from this source" aside={`${ev.length} records`}>
        <div className="ev-grid">{ev.map((e) => <EvidenceCard key={e.id} e={e} />)}</div>
      </Section>
    </Page>
  );
}
