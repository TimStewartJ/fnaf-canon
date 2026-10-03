/**
 * Icons. One family (Lucide, ISC licence), drawn at 1.75 stroke through <Icon> in Icon.tsx.
 * Pages may import any other Lucide icon directly from "lucide-react"; the maps below fix the
 * icon for each kind of thing so the same idea always gets the same picture. No emoji as icons.
 * The kinds come from the data, which grows: read a map through its function (sourceKindIcon,
 * deathKindIcon, interactionIcon), which answers for a kind the map does not have yet.
 */
import {
  BookOpenText, Bot, CalendarRange, CassetteTape, CircleHelp, Clapperboard, Cog, Compass, Drama, Eye, FileText,
  Flag, Flame, Gamepad2, Handshake, Images, KeyRound, Library, Megaphone, MessageSquareQuote, MessagesSquare,
  Network, Package, PenLine, Phone, Scale, ScrollText, Skull, Speech, Sword, TriangleAlert, Users, Waypoints,
  MapPin, Archive, CircleDashed, type LucideIcon,
} from "lucide-react";
import type { SourceKind } from "../data/schema";

export type { LucideIcon };

/** One icon per kind of source (Evidence["kind"]). */
export const SOURCE_KIND_ICON: Record<SourceKind, LucideIcon> = {
  "phone-call": Phone,
  "audio-tape": CassetteTape,
  minigame: Gamepad2,
  cutscene: Clapperboard,
  dialogue: Speech,
  text: FileText,
  environment: Eye,
  mechanic: Cog,
  ending: Flag,
  hidden: KeyRound,
  teaser: Megaphone,
  "scott-statement": PenLine,
};

/** The icon for a kind of source. A kind this file does not know (new data) gets a neutral mark instead of breaking the page. */
export const sourceKindIcon = (kind: string): LucideIcon => (Object.hasOwn(SOURCE_KIND_ICON, kind) ? SOURCE_KIND_ICON[kind as SourceKind] : CircleHelp);

/** Death causes (data/deaths.ts DeathKind). */
export const DEATH_KIND_ICON: Record<string, LucideIcon> = {
  murder: Sword,
  machine: Bot,
  accident: TriangleAlert,
  fire: Flame,
  disappearance: CircleHelp,
  unknown: CircleDashed,
};
export const DeathIcon: LucideIcon = Skull;
/** The icon for a cause of death; a cause this file does not know gets the general death icon. */
export const deathKindIcon = (kind: string): LucideIcon => (Object.hasOwn(DEATH_KIND_ICON, kind) ? DEATH_KIND_ICON[kind] : DeathIcon);

/** Scott-and-community interaction kinds (data/community.ts InteractionKind). */
export const INTERACTION_ICON: Record<string, LucideIcon> = {
  "scott-speaks": MessageSquareQuote,
  "in-game-nod": Gamepad2,
  clarification: Compass,
  "community-access": Handshake,
  prank: Drama,
};
/** The icon for a kind of interaction; a kind this file does not know gets a neutral mark. */
export const interactionIcon = (kind: string): LucideIcon => (Object.hasOwn(INTERACTION_ICON, kind) ? INTERACTION_ICON[kind] : CircleHelp);

/** Site sections, shared by the navigation, the search palette and page headers. */
export const SECTION_ICON = {
  theory: ScrollText,
  story: BookOpenText,
  timeline: CalendarRange,
  evidence: Archive,
  sources: Library,
  gallery: Images,
  people: Users,
  family: Network,
  graph: Waypoints,
  places: MapPin,
  box: Package,
  community: MessagesSquare,
  author: PenLine,
  method: Scale,
} satisfies Record<string, LucideIcon>;
