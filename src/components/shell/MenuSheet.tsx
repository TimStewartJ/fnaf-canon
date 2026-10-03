import { Link, NavLink } from "react-router-dom";
import { ArrowRight, House, Search, X } from "lucide-react";
import { useModalDialog } from "../hooks";
import { Icon } from "../Icon";
import { useContinue } from "../reading";
import { smartQuotes } from "../typography";
import { Brand } from "./Brand";
import { NAV } from "./nav";
import { ReaderSettings } from "./ReaderSettings";

/** The phone menu: every destination, grouped, with search, the way back into the chapter being read, and the reader settings. */
export function MenuSheet({ onClose, onSearch }: { onClose: () => void; onSearch: () => void }) {
  const dialogProps = useModalDialog(true, onClose);
  const resume = useContinue();
  return (
    <dialog className="menu-sheet" aria-label="Menu" {...dialogProps}>
      <div className="menu-sheet__bar">
        <Brand onClick={onClose} />
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu" autoFocus><Icon icon={X} size="1.25em" /></button>
      </div>
      <div className="menu-sheet__body">
        <button type="button" className="menu-sheet__search" onClick={onSearch}>
          <Icon icon={Search} /> Search the archive
        </button>
        {resume && (
          <Link to={resume.to} className="menu-sheet__resume" onClick={onClose}>
            <span className="label">Continue reading</span>
            <span className="menu-sheet__resume-title">Chapter {resume.number}: {smartQuotes(resume.chapter.title)} <Icon icon={ArrowRight} /></span>
          </Link>
        )}
        <nav aria-label="All pages" className="menu-sheet__nav">
          <div className="menu-sheet__group">
            <NavLink to="/" end className="menu-sheet__item" onClick={onClose}>
              <Icon icon={House} className="menu-sheet__icon" />
              <span>
                <span className="menu-sheet__label">Home</span>
                <span className="menu-sheet__desc">The front page, and where to start</span>
              </span>
            </NavLink>
          </div>
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
