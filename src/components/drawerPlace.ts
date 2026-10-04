/**
 * What the page under the evidence drawer shows while a record is open.
 *  - The citation numbers and source chips that stand for that record are marked (`data-open`), so
 *    the reader sees which sentence is being checked, and sees it move when the drawer steps on.
 *  - At a desk the drawer is at the side and lies over the right of a wide text column: the page
 *    steps left (`--drawer-shift` on <html>, used by `.site-main` in records.css) until the block
 *    the marked number stands in is clear of it, or as far as that block's own left edge allows.
 *  - A click on the dimmed page that lands on another citation opens that record in the drawer's
 *    place (`openerAt`), where it used to close the drawer and leave the reader to click again.
 * The drawer is modal, so the page is inert while this happens: nothing here is reachable by focus.
 */

/** The links that open a record in the drawer. Each is a real link to the record's own page. */
const OPENERS = 'a[aria-haspopup="dialog"][href*="/evidence/"]';
/** What counts as the block a citation stands in. */
const BLOCK = "p, li, blockquote, figcaption, td, th, dd, dt, h1, h2, h3, h4";
/** The room kept between the block and the drawer, and between the block and the window's left edge. */
const GAP = 24, PAD = 16;

let shift = 0;

function setShift(to: number) {
  shift = to;
  const root = document.documentElement;
  if (to > 0) { root.style.setProperty("--drawer-shift", `${Math.round(to)}px`); root.setAttribute("data-drawer-shift", ""); }
  else { root.style.removeProperty("--drawer-shift"); root.removeAttribute("data-drawer-shift"); }
}

/** Marks the openers of the record `id` in the page and makes way for the sentence; returns what unmarks them. */
export function markOpen(id: string, drawer: HTMLElement | null): () => void {
  const marked = [...document.querySelectorAll<HTMLElement>(`main ${OPENERS}[href$="/evidence/${id}"]`)].filter((el) => !el.closest("dialog"));
  for (const el of marked) el.setAttribute("data-open", "");
  // A side drawer only: a sheet across the bottom of a phone lies over no column.
  if (drawer && drawer.offsetLeft > 0) {
    let need = 0;
    for (const el of marked) {
      if (!el.matches(".cite")) continue;
      const at = el.getBoundingClientRect();
      if (at.bottom < 0 || at.top > window.innerHeight) continue;
      const block = (el.closest(BLOCK) ?? el).getBoundingClientRect();
      need = Math.max(need, Math.min(block.right + GAP - drawer.offsetLeft, block.left - PAD));
    }
    // Measured as the page stands, which may already have stepped left for the record before.
    if (need > 0) setShift(shift + need);
  }
  return () => { for (const el of marked) el.removeAttribute("data-open"); };
}

/** Puts the page back where it stood. Call when the drawer closes. */
export function clearPlace() {
  setShift(0);
}

/**
 * The opener of another record under a point of the dimmed page, if there is one: the nearest
 * whose box (with a few pixels' grace, a number in the text being small) holds the point.
 */
export function openerAt(x: number, y: number, drawer: HTMLElement): HTMLElement | null {
  const d = drawer.getBoundingClientRect();
  if (x >= d.left && x <= d.right && y >= d.top && y <= d.bottom) return null;
  const grace = 4;
  let best: HTMLElement | null = null, near = Infinity;
  for (const el of document.querySelectorAll<HTMLElement>(`main ${OPENERS}`)) {
    if (el.closest("dialog")) continue;
    for (const r of el.getClientRects()) {
      if (x < r.left - grace || x > r.right + grace || y < r.top - grace || y > r.bottom + grace) continue;
      const far = Math.hypot(x - (r.left + r.right) / 2, y - (r.top + r.bottom) / 2);
      if (far < near) { near = far; best = el; }
    }
  }
  return best;
}
