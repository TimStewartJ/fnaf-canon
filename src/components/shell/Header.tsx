import { useLayoutEffect, useRef, useState, type RefObject } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ALargeSmall, ChevronDown, Menu, Search } from "lucide-react";
import { useOutsidePointer } from "../hooks";
import { Icon } from "../Icon";
import { Brand } from "./Brand";
import { useHeaderReveal } from "./headerReveal";
import { NAV, isInGroup, type NavGroup } from "./nav";
import { ReaderSettings } from "./ReaderSettings";

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.userAgent);

function NavMenu({ group, open, onOpen, onClose }: { group: NavGroup; open: boolean; onOpen: () => void; onClose: () => void }) {
  const { pathname } = useLocation();
  const timer = useRef<number | undefined>(undefined);
  const btn = useRef<HTMLButtonElement | null>(null);
  const later = (fn: () => void, ms: number) => { window.clearTimeout(timer.current); timer.current = window.setTimeout(fn, ms); };
  const active = isInGroup(group, pathname);
  return (
    <div
      className="nav-group"
      onPointerEnter={(e) => { if (e.pointerType === "mouse") later(onOpen, 70); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") later(onClose, 220); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onClose(); }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) { onClose(); btn.current?.focus(); return; }
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
        // Arrow keys open the menu and walk its items; Tab works as usual.
        const root = e.currentTarget;
        e.preventDefault();
        if (!open) {
          if (e.key === "ArrowUp") return;
          onOpen();
          requestAnimationFrame(() => root.querySelector<HTMLElement>(".nav-menu__item")?.focus());
          return;
        }
        const items = [...root.querySelectorAll<HTMLElement>(".nav-menu__item")];
        const at = items.indexOf(document.activeElement as HTMLElement);
        const next = e.key === "ArrowDown" ? (at + 1) % items.length : at <= 0 ? items.length - 1 : at - 1;
        items[next]?.focus();
      }}
    >
      <button
        ref={btn}
        type="button"
        className={`nav-link nav-link--menu${active ? " is-active" : ""}`}
        aria-expanded={open}
        // The menu is in the page only while it is open, so it is only named then.
        aria-controls={open ? `nav-menu-${group.id}` : undefined}
        aria-current={active ? "true" : undefined}
        onClick={() => { window.clearTimeout(timer.current); if (open) onClose(); else onOpen(); }}
      >
        {group.label}
        <Icon icon={ChevronDown} className="nav-link__chev" />
      </button>
      {open && (
        <div className="nav-menu" id={`nav-menu-${group.id}`}>
          {group.items!.map((it) => (
            <NavLink key={it.to} to={it.to} className="nav-menu__item" onClick={onClose}>
              <Icon icon={it.icon} className="nav-menu__icon" />
              <span>
                <span className="nav-menu__label">{it.label}</span>
                <span className="nav-menu__desc">{it.desc}</span>
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * The header's layouts, roomiest first. It takes the first one whose parts fit side by side:
 * the brand's second line goes first, then the search field's shortcut and its width, then its
 * word; when the navigation still does not fit as a bar, it becomes the menu button. With the
 * menu button, the reading settings keep their own button for as long as there is room (they
 * are in the menu as well).
 */
const LAYOUTS: { nav: "bar" | "menu"; brand: "full" | "short"; search: "full" | "short" | "icon"; settings?: "menu" }[] = [
  { nav: "bar", brand: "full", search: "full" },
  { nav: "bar", brand: "short", search: "full" },
  { nav: "bar", brand: "short", search: "short" },
  { nav: "bar", brand: "short", search: "icon" },
  { nav: "menu", brand: "full", search: "icon" },
  { nav: "menu", brand: "short", search: "icon" },
  { nav: "menu", brand: "short", search: "icon", settings: "menu" },
];

/**
 * Chooses the header's layout by measuring it, so nothing in it can overlap or run off the page
 * at any width, any browser font size or any wording of the links: a breakpoint would have to
 * guess all three. The choice is written on the element (data-nav, data-brand, data-search) for
 * the stylesheet, before the browser paints. Returns the refs for the header and its row.
 */
function useHeaderFit(): [RefObject<HTMLElement | null>, RefObject<HTMLDivElement | null>] {
  const header = useRef<HTMLElement | null>(null);
  const row = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const el = header.current, box = row.current;
    if (!el || !box) return;
    let width = -1;
    // The row fits when its last part ends inside its padding (scrollWidth would let it run into the padding).
    const fits = () => {
      const last = box.lastElementChild;
      return !last || last.getBoundingClientRect().right <= box.getBoundingClientRect().right - parseFloat(getComputedStyle(box).paddingRight) + 0.5;
    };
    const fit = (force = false) => {
      if (!force && box.clientWidth === width) return;
      width = box.clientWidth;
      el.removeAttribute("data-squeeze");
      for (const l of LAYOUTS) {
        el.setAttribute("data-nav", l.nav);
        el.setAttribute("data-brand", l.brand);
        el.setAttribute("data-search", l.search);
        el.toggleAttribute("data-settings-in-menu", l.settings === "menu");
        if (fits()) return;
      }
      // Not even the smallest layout fits (a very large font on a very small screen): the name gives way, the page never scrolls sideways.
      el.setAttribute("data-squeeze", "");
    };
    const resized = new ResizeObserver(() => fit());
    resized.observe(box);
    // The links are measured in the font they are drawn in, so measure again when it has arrived.
    void document.fonts?.ready.then(() => fit(true));
    fit(true);
    return () => resized.disconnect();
  }, []);
  return [header, row];
}

/** The site header: brand, grouped navigation (a menu button when the bar does not fit), search and reader settings. */
export function Header({ onSearch, onMenu }: { onSearch: () => void; onMenu: () => void }) {
  const { pathname } = useLocation();
  // The open menu is tied to the page it was opened on, so going anywhere closes it without an
  // effect. (Not to the history entry: a page rewrites its own entry whenever a filter changes.)
  const [menu, setMenu] = useState<{ id: string; at: string } | null>(null);
  const openId = menu && menu.at === pathname ? menu.id : null;
  const open = (id: string) => setMenu({ id, at: pathname });
  const close = (id: string) => setMenu((m) => (m?.id === id ? null : m));
  const settingsRef = useRef<HTMLDivElement | null>(null);
  const settingsBtn = useRef<HTMLButtonElement | null>(null);
  useOutsidePointer([settingsRef], () => close("settings"), openId === "settings");
  const [headerRef, rowRef] = useHeaderFit();
  useHeaderReveal(headerRef);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner" ref={rowRef}>
        <Brand />
        <nav className="site-nav" aria-label="Primary">
          {NAV.map((g) =>
            g.items ? (
              <NavMenu key={g.id} group={g} open={openId === g.id} onOpen={() => open(g.id)} onClose={() => close(g.id)} />
            ) : (
              <NavLink key={g.id} to={g.to!} className={`nav-link${isInGroup(g, pathname) ? " is-active" : ""}`}>{g.label}</NavLink>
            ),
          )}
        </nav>
        <div className="site-tools">
          <button type="button" className="search-trigger" onClick={onSearch} aria-label="Search the archive" aria-keyshortcuts="Control+K Meta+K /">
            <Icon icon={Search} />
            <span className="search-trigger__text">Search</span>
            <kbd className="search-trigger__kbd">{isMac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
          <div
            className="site-tools__settings"
            ref={settingsRef}
            // Escape closes the panel and hands focus back to its button; focus moving on past the panel closes it too.
            onKeyDown={(e) => { if (e.key === "Escape" && openId === "settings") { close("settings"); settingsBtn.current?.focus(); } }}
            onBlur={(e) => { if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) close("settings"); }}
          >
            <button ref={settingsBtn} type="button" className="icon-btn" aria-label="Reading settings" title="Reading settings" aria-expanded={openId === "settings"} aria-controls={openId === "settings" ? "reader-settings" : undefined} onClick={() => (openId === "settings" ? close("settings") : open("settings"))}>
              <Icon icon={ALargeSmall} size="1.25em" />
            </button>
            {openId === "settings" && (
              <div className="settings-panel" id="reader-settings" role="group" aria-label="Reading settings">
                <ReaderSettings />
              </div>
            )}
          </div>
          <button type="button" className="icon-btn menu-trigger" aria-label="Open menu" onClick={onMenu}>
            <Icon icon={Menu} size="1.25em" />
          </button>
        </div>
      </div>
    </header>
  );
}
