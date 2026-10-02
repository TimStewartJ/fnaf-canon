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
      onKeyDown={(e) => { if (e.key === "Escape" && open) { onClose(); btn.current?.focus(); } }}
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
  const location = useLocation();
  // The open menu is tied to the history entry, so any navigation closes it without an effect.
  const [menu, setMenu] = useState<{ id: string; at: string } | null>(null);
  const openId = menu && menu.at === location.key ? menu.id : null;
  const open = (id: string) => setMenu({ id, at: location.key });
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
              <NavLink key={g.id} to={g.to!} className={`nav-link${isInGroup(g, location.pathname) ? " is-active" : ""}`}>{g.label}</NavLink>
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
