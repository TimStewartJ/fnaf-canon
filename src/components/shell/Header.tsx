import { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ALargeSmall, ChevronDown, Menu, Search } from "lucide-react";
import { useOutsidePointer } from "../hooks";
import { Icon } from "../Icon";
import { Brand } from "./Brand";
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
        aria-controls={`nav-menu-${group.id}`}
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

/** The site header: brand, grouped navigation (a menu button below 900px), search and reader settings. */
export function Header({ onSearch, onMenu }: { onSearch: () => void; onMenu: () => void }) {
  const { pathname } = useLocation();
  // The open menu is tied to the page it was opened on, so going anywhere closes it without an
  // effect. (Not to the history entry: a page rewrites its own entry whenever a filter changes.)
  const [menu, setMenu] = useState<{ id: string; at: string } | null>(null);
  const openId = menu && menu.at === pathname ? menu.id : null;
  const open = (id: string) => setMenu({ id, at: pathname });
  const close = (id: string) => setMenu((m) => (m?.id === id ? null : m));
  const settingsRef = useRef<HTMLDivElement | null>(null);
  useOutsidePointer([settingsRef], () => close("settings"), openId === "settings");

  return (
    <header className="site-header">
      <div className="site-header__inner">
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
          <div className="site-tools__settings" ref={settingsRef} onKeyDown={(e) => { if (e.key === "Escape") close("settings"); }}>
            <button type="button" className="icon-btn" aria-label="Reading settings" title="Reading settings" aria-expanded={openId === "settings"} aria-controls="reader-settings" onClick={() => (openId === "settings" ? close("settings") : open("settings"))}>
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
