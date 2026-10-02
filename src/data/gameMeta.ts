/**
 * Presentation for each source: a short code and a hue. Pure UI data (owned by the UI workstream).
 *
 * The short code is what identifies a game on screen; the hue is only a small supporting swatch
 * (see <GameMark> in components/GameMark.tsx). Hues share one lightness and chroma so that no game
 * shouts louder than another, and they are never used as text colour.
 */
export interface GameMeta { short: string; color: string }

export const GAME_META: Record<string, GameMeta> = {
  fnaf1: { short: "FNaF1", color: "#e3a75e" },
  fnaf2: { short: "FNaF2", color: "#ec95be" },
  fnaf3: { short: "FNaF3", color: "#94c579" },
  fnaf4: { short: "FNaF4", color: "#9faefd" },
  "fnaf4-halloween": { short: "FNaF4 HE", color: "#ef9e70" },
  "fnaf-world": { short: "World", color: "#49ccbe" },
  "sister-location": { short: "SL", color: "#f4959d" },
  ffps: { short: "FFPS", color: "#d6ae57" },
  ucn: { short: "UCN", color: "#c5b65a" },
  "freddy-in-space-2": { short: "FiS2", color: "#62c0f3" },
  "help-wanted": { short: "HW", color: "#bfa3f3" },
  "curse-of-dreadbear": { short: "Dreadbear", color: "#7cc98d" },
  "special-delivery": { short: "AR", color: "#cbb358" },
  "security-breach": { short: "SB", color: "#de99d7" },
  ruin: { short: "Ruin", color: "#eda06a" },
  "help-wanted-2": { short: "HW2", color: "#cb9feb" },
  "into-the-pit": { short: "Pit", color: "#64cba2" },
  "secret-of-the-mimic": { short: "Mimic", color: "#f49982" },
  scott: { short: "Scott", color: "#d4d0c8" },
  "scottgames-site": { short: "Teaser", color: "#a2acb7" },
};

const FALLBACK_COLOR = "#96918a";

export const gameMeta = (id: string): GameMeta => GAME_META[id] ?? { short: id, color: FALLBACK_COLOR };
