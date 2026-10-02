import { Link } from "react-router-dom";

/** The archive's mark: a top-hatted bear's head. Same drawing as public/favicon.svg. */
export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg className="brand__mark" viewBox="0 0 32 32" width={size} height={size} aria-hidden focusable="false">
      <g fill="currentColor">
        <circle cx="8.4" cy="13" r="4.2" />
        <circle cx="23.6" cy="13" r="4.2" />
        <circle cx="16" cy="19.4" r="9.8" />
        <rect x="12.4" y="2.4" width="7.2" height="6.6" rx="0.7" />
        <rect x="10.2" y="7.8" width="11.6" height="2.2" rx="1.1" />
      </g>
      <g className="brand__mark-cut">
        <circle cx="12.2" cy="18.2" r="1.85" />
        <circle cx="19.8" cy="18.2" r="1.85" />
        <ellipse cx="16" cy="22.4" rx="1.7" ry="1.15" />
      </g>
    </svg>
  );
}

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Fazbear Canon Archive, home">
      <BrandMark />
      <span className="brand__name">Fazbear</span>
      <span className="brand__sub">Canon Archive</span>
    </Link>
  );
}
