/**
 * Stale code. Every page is its own file with a hashed name. After a new version of the site is
 * deployed, a tab that was already open still asks for the old names, and the request fails. The
 * cure is one reload, which fetches the new index. A second failure straight after is a real
 * error and is shown to the reader instead (see PageBoundary), so this can never loop.
 */
const KEY = "fca:reloaded-at";
const QUIET_MS = 30_000;

/** True when an error looks like a code file that could not be fetched. */
export function isStaleCodeError(err: unknown): boolean {
  const text = err instanceof Error ? `${err.name} ${err.message}` : String(err);
  return /dynamically imported module|Importing a module script failed|module script|Unable to preload CSS|ChunkLoadError|Failed to fetch/i.test(text);
}

/** Reloads the page unless it was reloaded for the same reason a moment ago. Returns true if it is reloading. */
export function reloadOnce(): boolean {
  try {
    const last = Number(window.sessionStorage.getItem(KEY) ?? 0);
    if (Date.now() - last < QUIET_MS) return false;
    window.sessionStorage.setItem(KEY, String(Date.now()));
  } catch {
    return false; // no storage, so no way to know whether we already tried: do not risk a loop
  }
  window.location.reload();
  return true;
}
