import { Link } from "react-router-dom";
import { CertaintyBadge, StatusBadge } from "../components/ui";

export default function Method() {
  return (
    <div className="page prose">
      <h1>Method</h1>
      <h2>What counts as evidence</h2>
      <p>Only two things are admissible:</p>
      <ol>
        <li><strong>The games.</strong> Everything reachable in them: phone calls and tapes, printed text, minigames, cutscenes, environment art, mechanics, hidden screens, extras menus and endings.</li>
        <li><strong>Scott Cawthon's own words.</strong> His Steam and Reddit posts and the teasers he published on scottgames.com.</li>
      </ol>
      <p>
        The novels, the Fazbear Frights and Tales from the Pizzaplex anthologies, guidebooks, and the films are excluded. Scott called the first novel a separate continuity in 2015,
        but in 2020 he said Fazbear Frights would "fill in some blanks" about the past, and in 2024 he answered the question ambiguously. Those statements are recorded as evidence
        (see <Link to="/theory#canon-rules">Ground rules</Link>), but this archive deliberately takes the strict line: every conclusion must stand on the games and Scott's words alone.
        As a result, names that exist only in books are never used here. When the games do not name
        someone, this archive uses a plain descriptor ("the Crying Child", "the Cassette Man") and shows it in amber.
      </p>
      <h2>Atomic records</h2>
      <p>
        The basic unit is a single fact: one claim, one exact source location, one in-universe time. Records carry a certainty level:
      </p>
      <ul>
        <li><CertaintyBadge c="stated" /> the words in the source say it.</li>
        <li><CertaintyBadge c="shown" /> the source depicts it without saying it.</li>
        <li><CertaintyBadge c="implied" /> a small, defensible reading, explained in the record's notes.</li>
      </ul>
      <p>Records never contain conclusions from theorists. "Purple Guy is William Afton" is not a record; the in-game facts that connect them are, and the connection itself lives in the theory layer.</p>
      <h2>Three layers</h2>
      <ul>
        <li><StatusBadge status="canon" /> directly established by the cited records.</li>
        <li><StatusBadge status="strong" /> forced by several records together; rejecting it would require assuming the games are wrong.</li>
        <li><StatusBadge status="theory" /> this archive's best reconstruction where the games leave gaps. It is always labelled.</li>
      </ul>
      <h2>Research aids</h2>
      <p>
        Exact wording of dialogue and text was cross-checked against community transcripts (mainly the FNaF fandom wiki) and those pages are listed on each record under "wording checked via".
        They are used only as transcripts of the games. Their interpretations, trivia sections and theories were not used.
        Screenshots were retrieved from the wiki's file pages and are credited on each image.
      </p>
      <h2>Audit</h2>
      <p>The theory was put through an adversarial review that checked every claim against the records it cites. Each problem found, and how it was resolved, is listed in the <Link to="/audit">audit ledger</Link>. The validator now enforces the rules that came out of it: no canon claim may rest only on implied records, and no printed date on implied records alone.</p>
      <h2>Known limits of v1</h2>
      <ul>
        <li>Coverage is broad but not exhaustive. The largest games (Security Breach, Help Wanted 2, Secret of the Mimic) have more collectibles than v1 records.</li>
        <li>Quotes are short excerpts chosen for the load-bearing sentence. Where a transcript couldn't be verified, the record paraphrases instead of quoting.</li>
        <li>Transcripts can contain errors. If a record is wrong, the source location on it should make it quick to check in the game.</li>
      </ul>
      <p><Link to="/evidence">Open the evidence locker →</Link></p>
    </div>
  );
}
