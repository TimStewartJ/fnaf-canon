import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ButtonLink, CertaintyMark, FirmnessLegend, Page, PageHeader, StatusMark, chapterPath } from "../../components/ui";
import "./essays.css";
import "./method.css";

export default function Method() {
  return (
    <Page title="Method" narrow className="essay method-page">
      <PageHeader kicker="About the archive" title="Method" lede="What counts as evidence here, how a record is built, and how far each kind of claim can be trusted." />
      <div className="article">
        <h2>What counts as evidence</h2>
        <p>Only two things are admissible:</p>
        <ol>
          <li><strong>The games.</strong> Everything reachable in them: phone calls and tapes, printed text, minigames, cutscenes, environment art, mechanics, hidden screens, extras menus and endings.</li>
          <li><strong>Scott Cawthon's own words.</strong> His Steam and Reddit posts, interviews in his own words, and the teasers he published on scottgames.com.</li>
        </ol>
        <p>
          The novels, the Fazbear Frights and Tales from the Pizzaplex anthologies, guidebooks, and the films are excluded. Scott called the first novel a separate continuity in 2015,
          but in 2020 he said Fazbear Frights would "fill in some blanks" about the past, and in 2024 he answered the question ambiguously. Those statements are recorded as evidence
          (see <Link to={chapterPath("canon-rules")}>Ground rules</Link>), but this archive deliberately takes the strict line: every conclusion must stand on the games and Scott's words alone.
          As a result, names that exist only in books are never used here. When the games do not name
          someone, this archive uses a plain descriptor ("the Crying Child", "the Cassette Man") and sets it in italics.
        </p>
        <h2>Atomic records</h2>
        <p>The basic unit is a single fact: one claim, one exact source location, one in-universe time. Records carry a certainty level:</p>
        <ul className="method-marks">
          <li><CertaintyMark value="stated" /> <span>the words in the source say it.</span></li>
          <li><CertaintyMark value="shown" /> <span>the source depicts it without saying it.</span></li>
          <li><CertaintyMark value="implied" /> <span>a small, defensible reading, explained in the record's notes.</span></li>
        </ul>
        <p>Records never contain conclusions from theorists. "Purple Guy is William Afton" is not a record; the in-game facts that connect them are, and the connection itself lives in the theory layer.</p>
        <h2>Three layers</h2>
        <ul className="method-marks">
          <li><StatusMark value="canon" /> <span>directly established by the cited records.</span></li>
          <li><StatusMark value="strong" /> <span>forced by several records together; rejecting it would require assuming the games are wrong.</span></li>
          <li><StatusMark value="theory" /> <span>this archive's best reconstruction where the games leave gaps. It is always labelled.</span></li>
        </ul>
        <h2>One set of marks</h2>
        <p>
          Certainty, support and a chapter's confidence are three scales with the same shape, so they share one mark: a filled disc for firm, a half disc for partial,
          a ring for tentative. Lines and edges follow the same rule: solid, dashed, dotted. The word is always next to the mark.
        </p>
        <div className="method-legend"><FirmnessLegend /></div>
        <h2>Research aids</h2>
        <p>
          Exact wording of dialogue and text was cross-checked against community transcripts (mainly the FNaF fandom wiki) and those pages are listed on each record under "wording checked via".
          They are used only as transcripts of the games. Their interpretations, trivia sections and theories were not used.
          Screenshots were retrieved from the wiki's file pages and are credited on each image.
        </p>
        <h2>Fan theories</h2>
        <p>Theories are never used as evidence. The <Link to="/community">Theorists &amp; Scott</Link> page references them to show what they got right and wrong against the records, and how Scott and the community influenced each other. Each judgement there cites evidence like everything else.</p>
        <h2>The author's background</h2>
        <p>Scott's statements about himself, including his Christian faith, are recorded as evidence about the <em>author</em>. They never establish an in-universe fact. They are used only to judge how literally to read words the games already contain, such as "Hell" or "rest". Where Scott ruled a reading out (in 2014, FNaF's animatronics as a Christian allegory of vices), it stays out. See <Link to="/author">Scott &amp; Faith</Link>.</p>
        <h2>Known limits of v1</h2>
        <ul>
          <li>Coverage is broad but not exhaustive. The largest games (Security Breach, Help Wanted 2, Secret of the Mimic) have more collectibles than v1 records.</li>
          <li>Quotes are short excerpts chosen for the load-bearing sentence. Where a transcript couldn't be verified, the record paraphrases instead of quoting.</li>
          <li>Transcripts can contain errors. If a record is wrong, the source location on it should make it quick to check in the game.</li>
        </ul>
        <p className="method-next"><ButtonLink to="/evidence" variant="primary" iconEnd={ArrowRight}>Open the evidence locker</ButtonLink></p>
      </div>
    </Page>
  );
}
