import { paragraphs } from "./paragraphs";
import { RichText } from "./RichText";

/**
 * RichText that the data may have set in paragraphs (a blank line starts a new one): each is
 * printed as a paragraph of its own, inside one block that carries `className`. Use it wherever
 * such a text is shown whole; where it is clipped or used as plain text, pass it through
 * `oneLine` (paragraphs.ts) instead.
 */
export function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className ? `paras ${className}` : "paras"}>
      {paragraphs(text).map((para, i) => <p key={i}><RichText text={para} /></p>)}
    </div>
  );
}
