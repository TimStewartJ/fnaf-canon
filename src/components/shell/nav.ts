import type { LucideIcon } from "lucide-react";
import { SECTION_ICON } from "../icons";

export interface NavItem { to: string; label: string; desc: string; icon: LucideIcon }
export interface NavGroup {
  id: string;
  label: string;
  /** A single destination… */
  to?: string;
  desc?: string;
  icon?: LucideIcon;
  /** …or a menu of destinations. */
  items?: NavItem[];
  /** Path prefixes that count as "inside" this group. */
  match: string[];
}

/**
 * The site's destinations, grouped: the theory first, then the timeline, then the reference
 * material it rests on. Every old route keeps its path.
 */
export const NAV: NavGroup[] = [
  { id: "theory", label: "The Theory", to: "/theory", desc: "The Unified Model: the whole story, argued chapter by chapter", icon: SECTION_ICON.theory, match: ["/theory"] },
  { id: "timeline", label: "Timeline", to: "/timeline", desc: "Events, deaths and places across eight eras", icon: SECTION_ICON.timeline, match: ["/timeline"] },
  {
    id: "evidence", label: "Evidence", match: ["/evidence", "/sources", "/gallery"],
    items: [
      { to: "/evidence", label: "Evidence locker", desc: "Every record, one fact each, searchable", icon: SECTION_ICON.evidence },
      { to: "/sources", label: "Sources", desc: "The games and Scott’s own words", icon: SECTION_ICON.sources },
      { to: "/gallery", label: "Gallery", desc: "The screenshots, as exhibits", icon: SECTION_ICON.gallery },
    ],
  },
  {
    id: "people", label: "People & places", match: ["/people", "/family", "/graph", "/places"],
    items: [
      { to: "/people", label: "People", desc: "Everyone in the story, aliases folded together", icon: SECTION_ICON.people },
      { to: "/family", label: "Family trees", desc: "Who is tied to whom, and how firmly", icon: SECTION_ICON.family },
      { to: "/graph", label: "The web", desc: "Every recorded relationship as a graph", icon: SECTION_ICON.graph },
      { to: "/places", label: "Places", desc: "Every location, in story order", icon: SECTION_ICON.places },
    ],
  },
  {
    id: "essays", label: "Essays", match: ["/box", "/community", "/author"],
    items: [
      { to: "/box", label: "The Box", desc: "What was in FNaF4's locked box", icon: SECTION_ICON.box },
      { to: "/community", label: "Theorists & Scott", desc: "Fan theories, scored against the evidence", icon: SECTION_ICON.community },
      { to: "/author", label: "Scott & Faith", desc: "The author’s background, and what it changes", icon: SECTION_ICON.author },
    ],
  },
  { id: "method", label: "Method", to: "/method", desc: "What counts as evidence, and how the archive is built", icon: SECTION_ICON.method, match: ["/method"] },
];

export const isInGroup = (g: NavGroup, pathname: string) => g.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));

/** Every destination as a flat list (for the phone menu and the search palette). */
export const NAV_FLAT: NavItem[] = NAV.flatMap((g) => g.items ?? [{ to: g.to!, label: g.label, desc: g.desc ?? "", icon: g.icon! }]);
