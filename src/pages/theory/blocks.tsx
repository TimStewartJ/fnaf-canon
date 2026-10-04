import type { CSSProperties } from "react";
import type { SectionHead } from "./model";
import { Check } from "lucide-react";
import type { Evidence, TheoryBlock } from "../../data/schema";
import { evidenceById } from "../../data/store";
import { Callout, CiteGroup, EvidenceCard, EvidenceLink, Figure, GameMark, Icon, RichText, TableWrap, plainText, plural, smartQuotes, sourceWords } from "../../components/ui";

type CompareColumn = Extract<TheoryBlock, { kind: "compare" }>["columns"][number];

/** A pull quote taken from an evidence record, with its source underneath. */
function PullQuote({ id, text }: { id: string; text?: string }) {
  const e = evidenceById.get(id);
  if (!e) return <p><CiteGroup ids={[id]} /></p>;
  const words = text ?? e.quote;
  return (
    <figure className="pullquote">
      <blockquote className={words ? undefined : "pullquote--claim"}>{sourceWords(words ?? e.claim)}</blockquote>
      <figcaption>
        <EvidenceLink id={e.id} className="pullquote__source"><GameMark id={e.game} /> <span>{smartQuotes(e.location)}</span></EvidenceLink>
        <CiteGroup ids={[e.id]} />
      </figcaption>
    </figure>
  );
}

/** Competing readings side by side; the model's choice is flagged with a tick and a heavier frame. */
function Compare({ columns }: { columns: CompareColumn[] }) {
  return (
    <div className="compare wide" style={{ "--n": columns.length } as CSSProperties}>
      {columns.map((c, i) => (
        <section key={i} className={`compare__col${c.pick ? " is-pick" : ""}`}>
          {c.pick
            ? <p className="compare__flag"><Icon icon={Check} /> {smartQuotes(c.verdict ?? "The model's pick")}</p>
            : c.verdict && <p className="compare__flag">{smartQuotes(c.verdict)}</p>}
          <h3 className="compare__title">{smartQuotes(c.title)}</h3>
          <p className="compare__text"><RichText text={c.text} /></p>
        </section>
      ))}
    </div>
  );
}

/**
 * One block of a chapter body.
 *  - fig    the running figure number, for a figure
 *  - id     the anchor of a heading (see chapterHeads), or of a paragraph ("p12": where "Continue" picks up)
 *  - label  what a table is called, for anyone who cannot see where it sits: "Table 2: The dates"
 */
export function Block({ block, fig, id, label }: { block: TheoryBlock; fig?: number; id?: string; label?: string }) {
  if (typeof block === "string") return <p id={id}><RichText text={block} /></p>;
  switch (block.kind) {
    case "heading":
      return <h2 id={id}><RichText text={block.text} /></h2>;
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
    case "table": {
      // On a narrow column the table is redrawn as a list (see .chapter-table in theory.css):
      // each row a block, each cell under the name of its column. The roles are spelled out
      // because a table drawn that way would otherwise stop being announced as one.
      const heads = block.head.map(plainText);
      return (
        <TableWrap className="wide chapter-table" label={label ?? "Table"}>
          <table className="table" role="table">
            <thead role="rowgroup"><tr role="row">{block.head.map((h, i) => <th key={i} scope="col" role="columnheader"><RichText text={h} /></th>)}</tr></thead>
            <tbody role="rowgroup">{block.rows.map((r, i) => <tr key={i} role="row">{r.map((c, j) => <td key={j} role="cell" data-label={heads[j] || undefined}><RichText text={c} /></td>)}</tr>)}</tbody>
          </table>
        </TableWrap>
      );
    }
    case "evidence": {
      const records = block.ids.map((id) => evidenceById.get(id)).filter((e): e is Evidence => !!e);
      const group = records.map((e) => e.id);
      return (
        <section className="exhibits full" aria-label={block.title ?? "Evidence"}>
          <p className="label exhibits__title">{smartQuotes(block.title ?? "Exhibits")} <span className="faint">· {plural(records.length, "record")}</span></p>
          <div className="exhibits__strip">{records.map((e) => <EvidenceCard key={e.id} e={e} group={group} compact />)}</div>
        </section>
      );
    }
  }
}

/**
 * Renders a chapter body: numbers its figures, gives each heading its anchor (`heads`, from
 * chapterHeads, in the same order), numbers its paragraphs (p1, p2…: the places a reader can be
 * returned to) and names each table after the heading it stands under.
 */
export function Blocks({ blocks, heads = [] }: { blocks: TheoryBlock[]; heads?: SectionHead[] }) {
  const tables = blocks.filter((b) => typeof b !== "string" && b.kind === "table").length;
  let fig = 0, table = 0, head = -1, para = 0;
  return (
    <>
      {blocks.map((b, i) => {
        if (typeof b === "string") return <Block key={i} block={b} id={`p${++para}`} />;
        if (b.kind === "figure") return <Block key={i} block={b} fig={++fig} />;
        if (b.kind === "heading") return <Block key={i} block={b} id={heads[++head]?.id} />;
        if (b.kind === "table") {
          table++;
          const under = heads[head]?.text;
          return <Block key={i} block={b} label={`Table${tables > 1 ? ` ${table}` : ""}${under ? `: ${under}` : ""}`} />;
        }
        return <Block key={i} block={b} />;
      })}
    </>
  );
}
