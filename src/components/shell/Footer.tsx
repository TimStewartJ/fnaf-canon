import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__note">
          An unofficial fan reference, built only from the games and Scott Cawthon's own words. Five Nights at Freddy's © Scott Cawthon.
          Screenshots are low-resolution stills used for commentary, each credited to its source page.
        </p>
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
