import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import type { Evidence, TheoryBlock } from "../../data/schema";
import { evidenceById } from "../../data/store";
import { Callout, CiteGroup, EvidenceCard, EvidenceLink, Figure, GameMark, Icon, RichText, TableWrap, plainText } from "../../components/ui";

type CompareColumn = Extract<TheoryBlock, { kind: "compare" }>["columns"][number];

/** A pull quote taken from an evidence record, with its source underneath. */
function PullQuote({ id, text }: { id: string; text?: string }) {
  const e = evidenceById.get(id);
  if (!e) return <p><CiteGroup ids={[id]} /></p>;
  const words = text ?? e.quote;
  return (
    <figure className="pullquote">
      <blockquote className={words ? undefined : "pullquote--claim"}>{words ?? e.claim}</blockquote>
      <figcaption>
        <EvidenceLink id={e.id} className="pullquote__source"><GameMark id={e.game} /> <span>{e.location}</span></EvidenceLink>
        <CiteGroup ids={[e.id]} />
      </figcaption>
    </figure>
  );
}

/** Competing readings side by side; the model's choice is flagged with a tick and a heavier frame. */
function Compare({ columns }: { columns: CompareColumn[] }) {
  return (
    <div className="compare full" style={{ "--n": columns.length } as CSSProperties}>
      {columns.map((c, i) => (
        <section key={i} className={`compare__col${c.pick ? " is-pick" : ""}`}>
          {c.pick
            ? <p className="compare__flag"><Icon icon={Check} /> {c.verdict ?? "The model's pick"}</p>
            : c.verdict && <p className="compare__flag">{c.verdict}</p>}
          <h3 className="compare__title">{c.title}</h3>
          <p className="compare__text"><RichText text={c.text} /></p>
        </section>
      ))}
    </div>
  );
}

/** One block of a chapter body. `fig` is the running figure number for figure blocks. */
export function Block({ block, fig }: { block: TheoryBlock; fig?: number }) {
  if (typeof block === "string") return <p><RichText text={block} /></p>;
  switch (block.kind) {
    case "heading":
      return <h2><RichText text={block.text} /></h2>;
    case "list": {
      const items = block.items.map((it, i) => <li key={i}><RichText text={it} /></li>);
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case "figure":
      return (
        <Figure
          className="chapter-figure"
          file={block.image}
          caption={block.caption ? <RichText text={block.caption} /> : undefined}
          alt={block.caption ? plainText(block.caption) : undefined}
          evidence={block.evidence}
          tag={fig ? `Fig. ${fig}` : undefined}
        />
      );
    case "quote":
      return <PullQuote id={block.evidence} text={block.text} />;
    case "callout":
      return <Callout tone={block.tone} title={block.title}><p><RichText text={block.text} /></p></Callout>;
    case "compare":
      return <Compare columns={block.columns} />;
    case "table":
      return (
        <TableWrap className="wide chapter-table" label="Table">
          <table className="table">
            <thead><tr>{block.head.map((h, i) => <th key={i} scope="col"><RichText text={h} /></th>)}</tr></thead>
            <tbody>{block.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}><RichText text={c} /></td>)}</tr>)}</tbody>
          </table>
        </TableWrap>
      );
    case "evidence": {
      const records = block.ids.map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
      const group = records.map((e) => e.id);
      return (
        <section className="exhibits full" aria-label={block.title ?? "Evidence"}>
          <p className="label exhibits__title">{block.title ?? "Exhibits"} <span className="faint">· {records.length} record{records.length === 1 ? "" : "s"}</span></p>
          <div className="exhibits__strip">{records.map((e) => <EvidenceCard key={e.id} e={e} group={group} compact />)}</div>
        </section>
      );
    }
  }
}

/** Renders a chapter body, numbering its figures. */
export function Blocks({ blocks }: { blocks: TheoryBlock[] }) {
  let fig = 0;
  return <>{blocks.map((b, i) => <Block key={i} block={b} fig={typeof b !== "string" && b.kind === "figure" ? ++fig : undefined} />)}</>;
}
