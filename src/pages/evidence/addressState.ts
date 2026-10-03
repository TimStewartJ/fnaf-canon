/**
 * A piece of view state that lives in the address (so a view can be shared and survives Back),
 * described by a pair of functions. Built on the shared address layer (components/address.ts),
 * which draws a change at once and keeps writes off entries they do not belong to.
 * No components here.
 */
import { useCallback, useMemo } from "react";
import { useAddress } from "../../components/ui";

/**
 * `read` turns the address into the state; `write` turns the state into the address it should have,
 * given the current one (so parameters this state does not own are kept). Both must be stable
 * functions (module level), and `write(read(x), x)` must describe the same view as `x`.
 * The history entry is replaced, as every filter on the site does. An address that says the same
 * thing in other words (an old or hand-typed link) is left as it is until the reader changes
 * something. The setter keeps its identity; a function passed to it gets the state as the address
 * has it at that moment, so two quick changes both count.
 */
export function useAddressState<T>(
  read: (sp: URLSearchParams) => T,
  write: (value: T, current: URLSearchParams) => URLSearchParams,
): [T, (next: T | ((prev: T) => T)) => void] {
  const { params, write: change } = useAddress();
  const value = useMemo(() => read(params), [read, params]);
  const set = useCallback((next: T | ((prev: T) => T)) => {
    change((p) => {
      const to = write(typeof next === "function" ? (next as (prev: T) => T)(read(p)) : next, p);
      for (const name of [...p.keys()]) p.delete(name);
      to.forEach((v, name) => p.append(name, v));
    });
  }, [change, read, write]);
  return [value, set];
}
