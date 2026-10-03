import { Link } from "react-router-dom";
import { labelForEntity, personById } from "../../data/store";
import { EntityLink, personPath, smartQuotes } from "../../components/ui";

/**
 * A person's or place's name where people are listed. A name the games never print (a descriptor)
 * is set in italic, as everywhere in the archive.
 *  - link     an entity link in running text (dotted underline), the default
 *  - plain    text only
 *  - title    a plain link for headings and rows, where the surrounding block styles it
 */
export function Name({ id, as = "link", className }: { id: string; as?: "link" | "plain" | "title"; className?: string }) {
  const descriptor = personById.get(id)?.nameStatus === "descriptor";
  const label = smartQuotes(labelForEntity(id));
  const cls = `${descriptor ? "name-desc" : "name-canon"}${className ? ` ${className}` : ""}`;
  if (as === "plain") return <span className={cls}>{label}</span>;
  if (as === "title") return <Link to={personPath(id)} className={cls}>{label}</Link>;
  return <EntityLink id={id}><span className={cls}>{label}</span></EntityLink>;
}
