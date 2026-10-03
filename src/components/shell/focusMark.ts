/**
 * Remembers which element had keyboard focus in a form that survives the page being drawn again,
 * so Back can put focus where the reader left it (see ScrollManager).
 */
export interface FocusMark {
  /** Where it was: the nearest ancestor with an id (or <main>), then child positions down to the element. */
  path: string;
  /** What it was, to be sure the same thing is found again. */
  tag: string;
  text: string;
  href: string | null;
}

const TEXT_MAX = 60;
const words = (el: Element) => (el.getAttribute("aria-label") ?? el.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, TEXT_MAX);

/** A mark for `el`, or null when there is nothing worth returning to (the page itself, or something inside an overlay). */
export function markFocus(el: Element | null): FocusMark | null {
  if (!(el instanceof HTMLElement) || el === document.body || el.id === "main" || !el.isConnected) return null;
  if (el.closest("dialog, [popover]")) return null;
  const steps: number[] = [];
  let at: Element = el;
  while (!at.id && at !== document.body && at.parentElement) {
    steps.unshift([...at.parentElement.children].indexOf(at));
    at = at.parentElement;
  }
  const root = at.id ? `#${at.id}` : "body";
  return { path: [root, ...steps].join("/"), tag: el.tagName, text: words(el), href: el.getAttribute("href") };
}

const same = (el: Element, m: FocusMark) => el.tagName === m.tag && el.getAttribute("href") === m.href && words(el) === m.text;

/** The element a mark points at, if it is on the page now. */
export function findFocus(m: FocusMark | null | undefined): HTMLElement | null {
  if (!m) return null;
  const [root, ...steps] = m.path.split("/");
  let at: Element | null = root === "body" ? document.body : document.getElementById(root.slice(1));
  for (const s of steps) at = at?.children[Number(s)] ?? null;
  if (at instanceof HTMLElement && same(at, m)) return at;
  // The page has changed shape since (a row more, a section opened): look for the same thing by what it is.
  for (const el of document.querySelectorAll<HTMLElement>(m.tag.toLowerCase())) if (same(el, m) && !el.closest("dialog, [popover]")) return el;
  return null;
}
