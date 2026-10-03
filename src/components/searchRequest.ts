/**
 * Asking the shell to open the search palette, from anywhere, with words already in it. The
 * palette belongs to the shell (App.tsx); a page that wants it open says so here.
 */
const EVENT = "fca:search";

/** Opens the search palette with `words` typed in. */
export function openSearch(words = ""): void {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: words }));
}

/** For the shell: hears every request to open search. Returns a function that stops listening. */
export function onSearchRequest(fn: (words: string) => void): () => void {
  const heard = (e: Event) => fn((e as CustomEvent<string>).detail ?? "");
  window.addEventListener(EVENT, heard);
  return () => window.removeEventListener(EVENT, heard);
}
