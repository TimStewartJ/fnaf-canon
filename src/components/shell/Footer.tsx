import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__note">
          <p>
            An unofficial fan reference, built only from the games and Scott Cawthon’s own words. It is not affiliated with or endorsed by
            Scott Cawthon, Steel Wool Studios or any other rights holder. Five Nights at Freddy’s, its characters, images and quoted text
            © Scott Cawthon. Screenshots are low-resolution stills used for commentary, each credited to its source page.
          </p>
          <p>
            The archive’s own writing is shared under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> and its
            code under the MIT license; the game’s images and words are not. Rights holders: anything here will be removed on request
            (<a href="https://github.com/TimStewartJ/fnaf-canon/issues">open an issue</a>).
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Footer">
          <Link to="/theory">The Theory</Link>
          <Link to="/evidence">Evidence</Link>
          <Link to="/sources">Sources</Link>
          <Link to="/method">Method</Link>
        </nav>
      </div>
    </footer>
  );
}
