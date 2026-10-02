import { NavLink } from "react-router-dom";
import { Search, X } from "lucide-react";
import { useModalDialog } from "../hooks";
import { Icon } from "../Icon";
import { Brand } from "./Brand";
import { NAV } from "./nav";
import { ReaderSettings } from "./ReaderSettings";

/** The phone menu: every destination, grouped, with search and the reader settings. */
export function MenuSheet({ onClose, onSearch }: { onClose: () => void; onSearch: () => void }) {
  const dialogProps = useModalDialog(true, onClose);
  return (
    <dialog className="menu-sheet" aria-label="Menu" {...dialogProps}>
      <div className="menu-sheet__bar">
        <Brand />
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu" autoFocus><Icon icon={X} size="1.25em" /></button>
      </div>
      <div className="menu-sheet__body">
        <button type="button" className="menu-sheet__search" onClick={onSearch}>
          <Icon icon={Search} /> Search the archive
        </button>
        <nav aria-label="All pages" className="menu-sheet__nav">
          {NAV.map((g) => (
            <div key={g.id} className="menu-sheet__group">
              {g.items && <p className="label">{g.label}</p>}
              {(g.items ?? [{ to: g.to!, label: g.label, desc: g.desc ?? "", icon: g.icon! }]).map((it) => (
                <NavLink key={it.to} to={it.to} className={`menu-sheet__item${g.items ? "" : " menu-sheet__item--lead"}`} onClick={onClose}>
                  <Icon icon={it.icon} className="menu-sheet__icon" />
                  <span>
                    <span className="menu-sheet__label">{it.label}</span>
                    <span className="menu-sheet__desc">{it.desc}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        <div className="menu-sheet__settings">
          <p className="label">Reading settings</p>
          <ReaderSettings />
        </div>
      </div>
    </dialog>
  );
}
