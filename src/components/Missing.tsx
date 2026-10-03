import { ArrowRight, Search } from "lucide-react";
import { Button, ButtonLink } from "./controls";
import { Page } from "./layout";
import { openSearch } from "./searchRequest";

/**
 * The page for an address that leads nowhere: what was asked for, and the ways on. One layout for
 * every kind of address (a page, a chapter, a record, a person, a place, a source), so a mistyped
 * link always gets the same help: the list the thing would have been in, a search already filled
 * with the words of the address, and the front page.
 *  - what   the kind of thing, in a word or two: "chapter", "evidence record" (omit for a whole page)
 *  - id     the part of the address that matched nothing
 *  - list   where things of that kind are listed
 */
export function Missing({ what, id, list }: { what?: string; id: string; list?: { to: string; label: string } }) {
  // The words of the address, as someone would type them into search.
  const words = id.replace(/^\/+/, "").replace(/[-_/]+/g, " ").trim();
  return (
    // The title always says "not found": scripts/qa.mjs tells a page that has gone missing by it.
    <Page title={`${what ? what.charAt(0).toUpperCase() + what.slice(1) : "Page"} not found`} narrow className="missing">
      <p className="kicker">Error 404 · nothing filed here</p>
      <h1>{what ? `There is no ${what} at this address.` : "Nothing is filed here."}</h1>
      <p className="lede">
        The archive has no {what ?? "page"} called <code>{id}</code>. The link may be old, or the address may have a typo.
      </p>
      <div className="cluster missing__actions">
        {list
          ? <ButtonLink to={list.to} variant="primary" iconEnd={ArrowRight}>{list.label}</ButtonLink>
          : <ButtonLink to="/theory" variant="primary" iconEnd={ArrowRight}>Read the theory</ButtonLink>}
        {words && <Button icon={Search} onClick={() => openSearch(words)}>Search for “{words}”</Button>}
        <ButtonLink to="/" variant="quiet">Go to the front page</ButtonLink>
      </div>
    </Page>
  );
}
