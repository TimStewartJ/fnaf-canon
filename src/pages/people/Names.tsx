import { Link } from "react-router-dom";
import { EntityLink, entityName, isDescriptor, personPath, smartQuotes } from "../../components/ui";

/**
 * A person's or place's name where people are listed. A name the games never print (a descriptor)
 * is set in italic, as everywhere in the archive.
 *  - link     an entity link in running text (dotted underline), the default
 *  - plain    text only
 *  - title    a plain link for headings and rows, where the surrounding block styles it
 *
 * Names are stored as they run in a sentence ("the rabbit in the code"). Pass `alone` where the
 * name stands on its own (a heading, a row, a chip, a node) or opens a sentence: it then starts
 * with a capital.
 */
export function Name({ id, as = "link", alone = false, className }: { id: string; as?: "link" | "plain" | "title"; alone?: boolean; className?: string }) {
  const label = smartQuotes(entityName(id, alone));
  const cls = `${isDescriptor(id) ? "name-desc" : "name-canon"}${className ? ` ${className}` : ""}`;
  if (as === "plain") return <span className={cls}>{label}</span>;
  if (as === "title") return <Link to={personPath(id)} className={cls}>{label}</Link>;
  return <EntityLink id={id}><span className={cls}>{label}</span></EntityLink>;
}
