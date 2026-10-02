import type { OutsideStoryGroup } from "../../data/schema";
import { Collapsible, DatePill, EvidenceList, FirmnessLegend, RichText } from "../../components/ui";

/** Records that deliberately carry no story weight, grouped by reason. */
export function OutsideStory({ groups }: { groups: OutsideStoryGroup[] }) {
  return (
    <div className="outside">
      {groups.map((g) => (
        <Collapsible key={g.id} id={`outside-${g.id}`} summary={g.title} meta={`${g.ids.length} record${g.ids.length === 1 ? "" : "s"}`}>
          <p className="outside__reason"><RichText text={g.reason} /></p>
          <EvidenceList ids={g.ids} claim={false} />
        </Collapsible>
      ))}
    </div>
  );
}

/** How the marks on the page work, taught once. */
export function HowToRead({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="howto">
      <div className="howto__text prose">
        {paragraphs.map((t, i) => <p key={i}><RichText text={t} /></p>)}
      </div>
      <div className="howto__key">
        <p className="label">How firm is it</p>
        <FirmnessLegend />
        <dl className="howto__marks">
          <div>
            <dt>A sentence and its source<span className="cites" aria-hidden><span className="cite">1</span></span></dt>
            <dd>Small numbers mark the records a sentence rests on. Point at one to preview it; click or tap to open the record over the page.</dd>
          </div>
          <div>
            <dt><DatePill variant="inline" label="1983" kind="printed" basis="Example: a year printed on screen in a game." /> · <DatePill variant="inline" label="c. 1983" kind="derived" basis="Example: worked out from a printed year and a stated interval." /></dt>
            <dd>A dotted date explains itself: whether it is printed, derived or estimated, and from which records.</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
