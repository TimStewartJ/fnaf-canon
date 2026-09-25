/** Visual identity for each source: an emoji glyph, a short code and an accent colour used everywhere a game is referenced. */
export interface GameMeta { emoji: string; short: string; color: string; motif: string }

export const GAME_META: Record<string, GameMeta> = {
  fnaf1: { emoji: "🎩", short: "FNaF1", color: "#e0a458", motif: "Freddy's top hat" },
  fnaf2: { emoji: "🎁", short: "FNaF2", color: "#ff7eb6", motif: "The Puppet's gift box" },
  fnaf3: { emoji: "🎢", short: "FNaF3", color: "#9bd35a", motif: "The horror attraction" },
  fnaf4: { emoji: "🛏️", short: "FNaF4", color: "#8e9bff", motif: "The bedroom" },
  "fnaf4-halloween": { emoji: "🎃", short: "FNaF4 HE", color: "#ff9a3c", motif: "Halloween Edition" },
  "fnaf-world": { emoji: "🌈", short: "World", color: "#6fe3d1", motif: "FNaF World" },
  "sister-location": { emoji: "🍦", short: "SL", color: "#ff6b8b", motif: "Baby's ice cream" },
  ffps: { emoji: "🍕", short: "FFPS", color: "#ffb347", motif: "The franchise pizzeria" },
  ucn: { emoji: "🪙", short: "UCN", color: "#d4b45a", motif: "The Death Coin" },
  "freddy-in-space-2": { emoji: "🚀", short: "FiS2", color: "#7fc8ff", motif: "Freddy in Space" },
  "help-wanted": { emoji: "🥽", short: "HW", color: "#b88cff", motif: "The VR headset" },
  "curse-of-dreadbear": { emoji: "🧟", short: "Dreadbear", color: "#8fbf6a", motif: "Curse of Dreadbear" },
  "special-delivery": { emoji: "📦", short: "AR", color: "#ffcf5c", motif: "The delivery box" },
  "security-breach": { emoji: "🎸", short: "SB", color: "#ff5cc8", motif: "Glamrock stage" },
  ruin: { emoji: "🏚️", short: "Ruin", color: "#c7a17a", motif: "The ruined Pizzaplex" },
  "help-wanted-2": { emoji: "🎟️", short: "HW2", color: "#c38bff", motif: "The prize counter" },
  "into-the-pit": { emoji: "🕳️", short: "Pit", color: "#62d2a2", motif: "The ball pit" },
  "secret-of-the-mimic": { emoji: "🎭", short: "Mimic", color: "#ff8f5c", motif: "Costumes and masks" },
  scott: { emoji: "✍️", short: "Scott", color: "#e6e8ee", motif: "Scott's own words" },
  "scottgames-site": { emoji: "📰", short: "Teaser", color: "#b8c0d0", motif: "scottgames.com teasers" },
};

export const gameMeta = (id: string): GameMeta => GAME_META[id] ?? { emoji: "❔", short: id, color: "#9aa1b2", motif: id };
