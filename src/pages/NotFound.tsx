import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Page } from "../components/ui";
import "./notfound.css";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <Page title="Page not found" narrow className="notfound">
      <p className="kicker">Error 404 · no such file</p>
      <h1>Nothing is filed here.</h1>
      <p className="lede">
        The archive has no page at <code>{pathname}</code>. The link may be old, or the address may have a typo.
      </p>
      <div className="cluster notfound__actions">
        <ButtonLink to="/theory" variant="primary" iconEnd={ArrowRight}>Read the theory</ButtonLink>
        <ButtonLink to="/evidence">Search the evidence</ButtonLink>
        <ButtonLink to="/" variant="quiet">Go to the front page</ButtonLink>
      </div>
    </Page>
  );
}
