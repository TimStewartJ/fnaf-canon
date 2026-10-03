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

/**
 * How the marks on the page work, taught once. `folded` (a phone) shows the opening paragraph and
 * keeps the rest, with the key, behind one line to open: the story should start on the next screen.
 */
export function HowToRead({ paragraphs, folded = false }: { paragraphs: string[]; folded?: boolean }) {
  const key = <HowToKey />;
  if (folded && paragraphs.length > 1) {
    return (
      <div className="howto howto--folded">
        <div className="howto__text prose"><p><RichText text={paragraphs[0]} /></p></div>
        <Collapsible print summary="The marks, and what they mean" meta="How sure a sentence is, and where it comes from">
          <div className="howto__text prose">{paragraphs.slice(1).map((t, i) => <p key={i}><RichText text={t} /></p>)}</div>
          {key}
        </Collapsible>
      </div>
    );
  }
  return (
    <div className="howto">
      <div className="howto__text prose">
        {paragraphs.map((t, i) => <p key={i}><RichText text={t} /></p>)}
      </div>
      {key}
    </div>
  );
}

function HowToKey() {
  return (
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
  );
}
