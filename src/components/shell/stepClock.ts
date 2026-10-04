/**
 * When the browser last stepped through the history (Back, Forward, a typed address), noted
 * before the router hears of it.
 *
 * It is a module of its own, listening from the moment it is loaded, because listeners for
 * `popstate` run in the order they were added (on `window` a capturing listener gets no
 * precedence in Chromium), and the router draws the page stepped to from inside its own
 * listener. A listener added by a component is added after the router's, and would hear of the
 * step only once the page had been drawn.
 */
let began = 0;
if (typeof window !== "undefined") window.addEventListener("popstate", () => { began = performance.now(); });

/** The time, as `performance.now()` gives it, at which the last step through the history began; 0 if there has been none. */
export const stepBegan = (): number => began;
