/**
 * A record's `verifiedVia`, read for the page: the research aid its wording was checked against.
 * The data writes it as one address (most often a fan wiki's transcript page), as a sentence with
 * no address ("Steam News API …, author 'Scott'"), or as a sentence with addresses in it. An
 * address is never printed as it is typed: it is named in words (what kind of thing it is, and the
 * page's own name where the address carries one) and sits behind the link. The sentences are the
 * data's and are printed as written. No components here.
 */
import { longDate } from "../../components/typography";

/** A run of the data's own words, or an address named in words: `lead` says what kind of thing it is, `name` is the page's own name, `tail` what follows it inside the link. */
export type CheckPart =
  | { text: string }
  | { href: string; lead: string; name?: string; tail?: string };

export interface Check {
  parts: CheckPart[];
  /** True when a fan wiki is among the things checked against: the page then says that the wiki is not the source. */
  wiki: boolean;
}

/** Where a web address ends inside a sentence: not at its own brackets, but before the punctuation after it. */
function addressEnd(run: string): number {
  let end = run.length;
  while (end > 0) {
    const ch = run[end - 1];
    const head = run.slice(0, end);
    const unopened = ch === ")" && (head.match(/\)/g)?.length ?? 0) > (head.match(/\(/g)?.length ?? 0);
    if (/[.,;:!?'"]/.test(ch) || unopened) end -= 1; else break;
  }
  return end;
}

/** The fan wikis the records were checked against: how a note names one the first time, after that, and when it comes after the thing it holds ("FNaF4's Bed.png on a fan wiki"). Any other wiki on the same host is "a fan wiki". */
const WIKI: Record<string, { first: string; again: string; on: string }> = {
  "freddy-fazbears-pizza.fandom.com": { first: "a fan wiki’s", again: "the wiki’s", on: "a fan wiki" },
  "five-nights-at-freddys-world.fandom.com": { first: "the FNaF World fan wiki’s", again: "the FNaF World wiki’s", on: "the FNaF World fan wiki" },
};
const ANY_WIKI = { first: "a fan wiki’s", again: "that wiki’s", on: "a fan wiki" };

/** Sites a reader knows by a name other than their address. */
const SITE: Record<string, string> = {
  "arctic-shift.photon-reddit.com": "Arctic Shift",
  "gamejolt.com": "Game Jolt",
  "reddit.com": "Reddit",
  "screenrant.com": "Screen Rant",
  "steamcommunity.com": "the Steam Community",
  "store.steampowered.com": "the Steam store",
};

const bareHost = (host: string): string => host.replace(/^www\./, "").replace(/:\d+$/, "");
const decoded = (s: string): string => { try { return decodeURIComponent(s); } catch { return s; } };

/** What an address is, before it is put into words: the site it is on, the kind of thing, and the thing's own name where the address carries one. */
interface Target { site: string; kind: "page" | "image" | "video" | "capture" | "item" | "site"; name?: string; when?: string; app?: string; path: string }

function targetOf(url: string): Target {
  let u: URL;
  try { u = new URL(url); } catch { return { site: url, kind: "page", path: "" }; }
  const host = bareHost(u.hostname);
  const path = u.pathname.replace(/\/+$/, "");
  if (host.endsWith(".fandom.com") && path.startsWith("/wiki/")) {
    const title = decoded(path.slice("/wiki/".length)).replace(/_/g, " ");
    const file = /^File:/i.test(title);
    return { site: host, kind: file ? "image" : "page", name: file ? title.slice("File:".length) : title, path };
  }
  if (host === "youtube.com" || host === "youtu.be" || host === "m.youtube.com") return { site: "youtube.com", kind: "video", path };
  if (host === "web.archive.org") {
    // /web/20140820185203/http://store.steampowered.com/app/319510/ (a flag such as id_ may follow the stamp)
    const m = /^\/web\/(\d{4})(\d{2})(\d{2})\d*[a-z_]*\/(.+)$/.exec(u.pathname + u.search);
    if (!m) return { site: host, kind: "capture", path };
    let of = m[4];
    try { of = bareHost(new URL(m[4]).host); } catch { /* not an address: print what is there */ }
    return { site: host, kind: "capture", name: of, when: longDate(`${m[1]}-${m[2]}-${m[3]}`), path };
  }
  if (host === "archive.org") return { site: host, kind: path.startsWith("/details/") ? "item" : "page", path };
  if (host === "store.steampowered.com") return { site: host, kind: "page", app: /^\/app\/(\d+)/.exec(path)?.[1], path };
  return { site: host, kind: path === "" ? "site" : "page", path };
}

/** Where a link stands in its note: which of a run of like links it is, whether its site was named before, and whether it follows the words that describe it. */
interface Standing { n: number; of: number; seen: boolean; afterWord: boolean }

/** An address in words: what goes before the name inside the link, the name, and what follows it. */
function wordsFor(t: Target, at: Standing): { lead: string; name?: string; tail?: string } {
  if (t.site.endsWith(".fandom.com")) {
    const wiki = WIKI[t.site] ?? ANY_WIKI;
    // "the wiki's images A, B and C": the second and later of a run are only named.
    if (at.n > 0) return { lead: "", name: t.name };
    // "FNaF4's Bed.png": the data's own words have said what it is.
    if (at.afterWord) return { lead: "", name: t.name, tail: at.seen ? undefined : ` on ${wiki.on}` };
    return { lead: `${at.seen ? wiki.again : wiki.first} ${t.kind}${at.of > 1 ? "s" : ""} `, name: t.name };
  }
  if (t.kind === "video") {
    if (at.of > 1) return { lead: at.n === 0 ? "video\u00a01 on YouTube" : `video\u00a0${at.n + 1}` };
    return { lead: at.afterWord ? "on YouTube" : "a video on YouTube" };
  }
  if (t.site === "web.archive.org") return t.name ? { lead: "the Wayback Machine’s capture of ", name: t.name, tail: `, ${t.when}` } : { lead: "a capture on the Wayback Machine" };
  if (t.site === "archive.org") return { lead: t.kind === "item" ? "an item on the Internet Archive" : "a page on the Internet Archive" };
  if (t.site === "store.steampowered.com" && t.app) return { lead: `the Steam store page of app ${t.app}` };
  const site = SITE[t.site] ?? t.site;
  // A site's front door is the site: its name is enough.
  return { lead: t.kind === "site" ? site : `a page on ${site}` };
}

/** The data separates the items of a note with " ; ": a semicolon as a sentence has it. */
const tidy = (text: string): string => text.replace(/\s+;\s*/g, "; ").replace(/\s{2,}/g, " ");
/** Words that only join two links ("A to B and C"), across which a run of like links continues. */
const JOINS = /^(?:\s*|\s*(?:,|;|to|and|or)\s*|\s*,\s*(?:and|or)\s*)$/;
/** Words after which a link is still to be introduced ("at a fan wiki's page Story"), though it follows a word. */
const LEADS_IN = new Set(["a", "an", "the", "at", "on", "in", "from", "of", "with", "via", "against", "and", "or", "to", "see", "by"]);
/** True when the words before a link describe it themselves ("720p capture", "FNaF4's", "sprites"). */
function describes(before: string): boolean {
  const m = /([\p{L}\p{N}][\p{L}\p{N}’'-]*)\s*$/u.exec(before);
  return !!m && !LEADS_IN.has(m[1].toLowerCase());
}

/**
 * Reads a `verifiedVia` note into words and named links, in order.
 *  - A note that opens with an address opens with "Against": "Against a fan wiki's page Tutorial Unit."
 *  - A note of the data's own words is printed as written, its addresses named where they stand.
 *  - It ends as a sentence does.
 */
export function readCheck(note: string): Check {
  const src = note.trim();
  // A note that is one address and nothing else is that address to its last character: a wiki's
  // page can be called "Danger! Keep Out!" or "M.X.E.S.", and the mark at the end is part of its name.
  const whole = /^https?:\/\/\S+$/.test(src);
  // First what is there: words and addresses, in order.
  const found: ({ text: string } | { url: string; target: Target; before: string })[] = [];
  let at = 0;
  for (const m of src.matchAll(/https?:\/\/\S+/g)) {
    const url = whole ? m[0] : m[0].slice(0, addressEnd(m[0]));
    if (!url) continue;
    const before = src.slice(at, m.index);
    if (before) found.push({ text: before });
    found.push({ url, target: targetOf(url), before });
    at = m.index + url.length;
  }
  if (at < src.length) found.push({ text: src.slice(at) });

  // Then the runs: links of one kind on one site with nothing but a joining word between them.
  const links = found.filter((f): f is { url: string; target: Target; before: string } => "url" in f);
  const run: { n: number; of: number }[] = [];
  for (let i = 0; i < links.length; i++) {
    const prev = links[i - 1];
    const joins = i > 0 && JOINS.test(links[i].before) && prev.target.site === links[i].target.site && prev.target.kind === links[i].target.kind;
    run.push({ n: joins ? run[i - 1].n + 1 : 0, of: 1 });
  }
  for (let i = links.length - 1, of = 1; i >= 0; i--) { of = Math.max(of, run[i].n + 1); run[i].of = of; if (run[i].n === 0) of = 1; }

  // Then the words.
  const parts: CheckPart[] = [];
  const seen = new Set<string>();
  let wiki = false, k = 0;
  for (const f of found) {
    if ("text" in f) { parts.push({ text: tidy(f.text) }); continue; }
    const t = f.target;
    const words = wordsFor(t, { ...run[k], seen: seen.has(t.site), afterWord: run[k].n === 0 && describes(f.before) });
    k += 1;
    seen.add(t.site);
    if (t.site.endsWith(".fandom.com")) wiki = true;
    parts.push({ href: f.url, ...words });
  }
  if (!parts.length) return { parts, wiki };
  if ("href" in parts[0]) parts.unshift({ text: "Against " });
  const end = parts[parts.length - 1];
  if ("href" in end) { if (!/[.!?…]$/.test(`${end.lead}${end.name ?? ""}${end.tail ?? ""}`)) parts.push({ text: "." }); }
  else { end.text = end.text.trimEnd(); if (!/[.!?…]$/.test(end.text)) end.text += "."; }
  return { parts, wiki };
}

/** The note as one line of plain words (what a screen reader hears, and what the tests read). */
export const checkWords = (check: Check): string => check.parts.map((p) => ("href" in p ? `${p.lead}${p.name ?? ""}${p.tail ?? ""}` : p.text)).join("");
