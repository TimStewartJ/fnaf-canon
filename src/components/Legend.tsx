import { CERTAINTY, CONFIDENCE, STATUS, type Level } from "./labels";
import { FirmGlyph } from "./Firmness";

const ROWS: { level: Level; confidence: keyof typeof CONFIDENCE; certainty: keyof typeof CERTAINTY; status: keyof typeof STATUS; gloss: string }[] = [
  { level: "firm", confidence: "high", certainty: "stated", status: "canon", gloss: "The sources say it or show it." },
  { level: "partial", confidence: "medium", certainty: "shown", status: "strong", gloss: "Close to forced, but one step is inferred." },
  { level: "tentative", confidence: "low", certainty: "implied", status: "theory", gloss: "The best reading; others stay possible." },
];

/**
 * The key to the firmness grammar: one glyph (filled, half, hollow) read across the three scales.
 * Use it wherever a page first asks the reader to trust the marks.
 */
export function FirmnessLegend() {
  return (
    <table className="firm-legend">
      <caption className="sr-only">How firm a claim is: the three marks and what they mean on each scale</caption>
      <thead>
        <tr>
          <th scope="col"><span className="sr-only">Mark</span></th>
          <th scope="col">A chapter</th>
          <th scope="col">A record</th>
          <th scope="col">A link or event</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((r) => (
          <tr key={r.level}>
            <th scope="row"><FirmGlyph level={r.level} /><span className="sr-only">{r.gloss}</span></th>
            <td>{CONFIDENCE[r.confidence].word}</td>
            <td>{CERTAINTY[r.certainty].word}</td>
            <td>{STATUS[r.status].word}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
