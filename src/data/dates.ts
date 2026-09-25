import type { DateKind } from "../components/ui";

export const ERA_COLOR: Record<string, string> = {
  founding: "#ff8f5c", diner: "#f4c95d", murders: "#ff6b6b", pizzeria: "#e0a458",
  funtime: "#ff6b8b", aftermath: "#9bd35a", digital: "#b88cff", pizzaplex: "#ff5cc8",
};

export interface DateJustification { kind: DateKind; basis: string; evidence: string[] }

/** Why each timeline event sits where it does. */
export const EVENT_DATES: Record<string, DateJustification> = {
  "t-murray-workshop": { kind: "relative", basis: "Murray's logs predate the springlock order for the diner and the Mimic's present night; the only year near them is the 1979 teaser.", evidence: ["secret-of-the-mimic-log-build-to-spec", "secret-of-the-mimic-teaser-1979"] },
  "t-springlocks-for-diner": { kind: "relative", basis: "The springlocks are readied before 'the diner' exists; the diner is operating by 1983 (FNaF4 TV).", evidence: ["secret-of-the-mimic-mail-springlocks-hen", "fnaf4-fredbear-and-friends-1983"] },
  "t-fiona-dies": { kind: "relative", basis: "Logged before M1 is built to raise David. Which Fall Fest this was is not stated.", evidence: ["secret-of-the-mimic-log-death", "secret-of-the-mimic-log-training-m1", "codb-fallfest-83-banner"] },
  "t-mimic-born": { kind: "teaser", basis: "The game shows only 'Aug 3rd' and 'Dec 1st–6th', with no year. 1979 appears only in the announcement teaser, which does not say what it dates.", evidence: ["secret-of-the-mimic-teaser-1979", "secret-of-the-mimic-mail-foreclosure", "secret-of-the-mimic-mail-david-party"] },
  "t-diner-stage": { kind: "estimated", basis: "Fredbear and Spring Bonnie perform at the diner, which is operating in 1983 and closed 'for years' by 1987.", evidence: ["fnaf3-stage01-fredbear-spring-bonnie", "fnaf4-fredbear-and-friends-1983", "fnaf2-call5-fredbears-family-diner"] },
  "t-fnaf4-household": { kind: "printed", basis: "The FNaF4 TV broadcast is titled 'Fredbear & Friends! 1983'.", evidence: ["fnaf4-fredbear-and-friends-1983"] },
  "t-purple-suits-up": { kind: "derived", basis: "Same minigame week as the 1983 TV broadcast (FNaF4's countdown to the party).", evidence: ["fnaf4-minigame-countdown-to-party", "fnaf4-fredbear-and-friends-1983"] },
  "t-bite-1983": { kind: "derived", basis: "The party ends FNaF4's five-day countdown, whose only printed year is 1983. The game never dates the bite itself.", evidence: ["fnaf4-minigame-countdown-to-party", "fnaf4-fredbear-and-friends-1983", "fnaf4-the-bite"] },
  "t-diner-closes": { kind: "derived", basis: "After 1983; Phone Guy says in Nov 1987 that the diner has been closed for years.", evidence: ["fnaf2-call5-fredbears-family-diner", "fnaf2-paycheck-1987"] },
  "t-daughter-killed": { kind: "relative", basis: "Undated. It happens outside a Freddy-branded pizzeria, so after the diner era, and the Puppet already exists by FNaF2 (1987).", evidence: ["fnaf2-take-cake-to-the-children", "fnaf2-call2-foxy-puppet"] },
  "t-missing-children": { kind: "derived", basis: "June 26th is printed without a year. The old models already smell by the 1987 location, and FNaF1 calls the tragedy 'many years ago', so it falls before 1987. Into the Pit's implied 1985 is not used as a date.", evidence: ["fnaf1-news-kids-vanish", "fnaf2-call2-older-models", "fnaf1-news-closing"] },
  "t-give-life": { kind: "relative", basis: "After the murders and before the 1987 location, where the old models already sit in back.", evidence: ["fnaf2-give-gifts-give-life", "fnaf2-call2-older-models"] },
  "t-1987-opens": { kind: "printed", basis: "Jeremy Fitzgerald's check is dated 11-12-1987, and the location closes after 'only a few short weeks'.", evidence: ["fnaf2-paycheck-1987", "fnaf2-overtime-robots-scrapped"] },
  "t-1987-yellow-suit": { kind: "printed", basis: "Nights 4–6 of FNaF2's week, which is bracketed by the checks dated 11-12-1987 and 11-13-1987.", evidence: ["fnaf2-paycheck-1987", "fnaf2-overtime-robots-scrapped", "fnaf2-call6-yellow-suit"] },
  "t-1987-closes": { kind: "printed", basis: "The overtime check is dated 11-13-1987 and sits on the closure newspaper; the article itself carries no date.", evidence: ["fnaf2-overtime-robots-scrapped"] },
  "t-bite-87": { kind: "printed", basis: "Phone Guy names 'the Bite of '87'. Where it falls within 1987 is unknown; the birthday-shift placement is only a possibility.", evidence: ["fnaf1-call1-bite-of-87", "fnaf2-no-bite-mention"] },
  "t-fnaf1": { kind: "derived", basis: "The Bite of '87 is in the past and the check year is printed as 'xx'. The exact year is unknown; the compressed reading puts it soon after 1987.", evidence: ["fnaf1-call1-bite-of-87", "fnaf1-paycheck-night5"] },
  "t-funtime-board": { kind: "relative", basis: "Undated. It precedes Sister Location and the killer's death, since Afton is alive and presenting.", evidence: ["sl-intro-mr-afton-board"] },
  "t-elizabeth-killed": { kind: "relative", basis: "Undated. It happens on Baby's only day on stage at Circus Baby's Pizza World.", evidence: ["sl-baby-ice-cream-story"] },
  "t-pizza-world-cancelled": { kind: "relative", basis: "Undated. Scott's hidden news report places it before Sister Location's rental facility.", evidence: ["scottgames-site-sl-news-gas-leak-cancellation"] },
  "t-dismantle-and-death": { kind: "relative", basis: "After the murders, and before Fazbear's Fright finds Springtrap. The games give no year.", evidence: ["fnaf3-n5-springlock-death", "fnaf3-call2-found-a-real-one"] },
  "t-fazbears-fright": { kind: "estimated", basis: "Thirty years after 'Freddy Fazbear's Pizza' closed, without saying which closure. The working compressed convention gives c. 2017–2019.", evidence: ["scott-fnaf3-steam-description", "fnaf3-coming-soon-newspaper"] },
  "t-happiest-day": { kind: "derived", basis: "During FNaF3's week.", evidence: ["fnaf3-happiest-day", "scott-fnaf3-steam-description"] },
  "t-fright-burns": { kind: "derived", basis: "The end of FNaF3's week (the newspaper after Night 6).", evidence: ["fnaf3-it-burns-newspaper"] },
  "t-sister-location": { kind: "relative", basis: "Sister Location's gameplay is undated relative to FNaF3. Only its canon closing cutscene is set after Fazbear's Fright burned.", evidence: ["sl-eggs-benedict", "sl-golden-freddy-cutscene-springtrap"] },
  "t-michael-rises": { kind: "relative", basis: "After Sister Location's Real Ending, and after Fazbear's Fright burned.", evidence: ["sl-custom-night-ennard-ejected", "sl-golden-freddy-cutscene-springtrap"] },
  "t-ffps": { kind: "relative", basis: "Scraptrap is burnt Springtrap and Scrap Baby is the Baby of Sister Location, so FFPS follows both.", evidence: ["ffps-scraptrap-still-me", "ffps-completion-connection-terminated-elizabeth"] },
  "t-ucn": { kind: "relative", basis: "UCN's spirits have been burned (\"no matter how many times they burn us\"), which places it after the FFPS fire.", evidence: ["ucn-orville-he-tried-to-release"] },
  "t-boards-scanned": { kind: "estimated", basis: "Estimated: probably before Special Delivery's Nov 2019 emails about scanned boards, though the games never directly order them.", evidence: ["hw-tape-05", "sd-circuit-board-scan-virus"] },
  "t-help-wanted": { kind: "estimated", basis: "Estimated: the in-universe release probably precedes Special Delivery's 2019–2020 emails.", evidence: ["hw-intro-complete-lunatic", "sd-ness-blood-eagle-calendar"] },
  "t-sd-virus": { kind: "printed", basis: "The emails are dated between November 28 and December 9, 2019.", evidence: ["sd-ness-blood-eagle-calendar", "sd-circuit-board-scan-virus", "sd-virus-traced-to-fe-board"] },
  "t-pizzaplex-built": { kind: "relative", basis: "Undated. Vanessa (Ness, theory) is still at Fazbear's head office in Special Delivery's 2019–2020 emails, and she later works at the Pizzaplex.", evidence: ["security-breach-msg-sinkhole", "sd-circuit-board-does-what-we-tell-it"] },
  "t-vanessa-hired": { kind: "relative", basis: "Before Security Breach's night (collectible messages).", evidence: ["security-breach-msg-marked-for-deletion"] },
  "t-security-breach": { kind: "relative", basis: "No in-game year. It follows Special Delivery's 2020 emails and Vanessa's transfer.", evidence: ["security-breach-cd-vanessa-transfer", "sd-circuit-board-does-what-we-tell-it"] },
  "t-hw2-crush": { kind: "relative", basis: "Help Wanted 2's training program is set in the Pizzaplex era (Glamrock characters, Vanny mask).", evidence: ["hw2-orientation-program-intro", "hw2-pq4-vanny-mask-trade"] },
  "t-ruin": { kind: "relative", basis: "After Security Breach: the Pizzaplex is abandoned and Gregory is posted missing.", evidence: ["ruin-pizzaplex-abandoned-earthquake", "ruin-missing-gregory-poster"] },
};

export function eventDate(id: string): DateJustification {
  return EVENT_DATES[id] ?? { kind: "unknown", basis: "No date justification recorded.", evidence: [] };
}

/** Era ranges. */
export const ERA_DATES: Record<string, DateJustification> = {
  founding: { kind: "teaser", basis: "The only year near Murray's workshop is the 1979 teaser; the era ends when the diner is operating in 1983.", evidence: ["secret-of-the-mimic-teaser-1979", "fnaf4-fredbear-and-friends-1983"] },
  diner: { kind: "printed", basis: "Anchored by the 1983 Fredbear & Friends broadcast in FNaF4.", evidence: ["fnaf4-fredbear-and-friends-1983"] },
  murders: { kind: "derived", basis: "After the 1983 bite and before the 1987 location, where the old models already smell. 'June 26th' has no year.", evidence: ["fnaf1-news-kids-vanish", "fnaf2-call2-older-models", "fnaf2-paycheck-1987"] },
  pizzeria: { kind: "printed", basis: "FNaF2's checks are dated 11-12-1987 and 11-13-1987. FNaF1 follows the Bite of '87.", evidence: ["fnaf2-paycheck-1987", "fnaf2-overtime-robots-scrapped", "fnaf1-call1-bite-of-87"] },
  funtime: { kind: "relative", basis: "No printed dates. It falls after the murders and before the killer's death, which leaves 'thirty years' before FNaF3.", evidence: ["sl-intro-mr-afton-board", "fnaf3-n5-springlock-death"] },
  aftermath: { kind: "estimated", basis: "Working convention: thirty years after the pizzeria closed, if that was soon after 1987. Not forced by the records.", evidence: ["scott-fnaf3-steam-description", "sd-ness-blood-eagle-calendar"] },
  digital: { kind: "printed", basis: "Special Delivery's emails are dated Nov 2019 to Mar 2020.", evidence: ["sd-ness-blood-eagle-calendar", "sd-circuit-board-does-what-we-tell-it"] },
  pizzaplex: { kind: "relative", basis: "No in-game year. It follows Special Delivery's 2020 emails and Vanessa's transfer.", evidence: ["sd-circuit-board-does-what-we-tell-it", "security-breach-cd-vanessa-transfer"] },
};

/** Place date ranges. */
export const PLACE_DATES: Record<string, DateJustification> = {
  "murray-costume-manor": { kind: "teaser", basis: "The only year shown is the 1979 teaser. In-game dates give day and month only.", evidence: ["secret-of-the-mimic-teaser-1979", "secret-of-the-mimic-mail-foreclosure"] },
  "inventors-house": { kind: "relative", basis: "Foreclosed by the Mimic's present night.", evidence: ["secret-of-the-mimic-mail-foreclosure"] },
  "fredbears-family-diner": { kind: "printed", basis: "Operating in 1983 (FNaF4 TV); 'closed for years' by Nov 1987.", evidence: ["fnaf4-fredbear-and-friends-1983", "fnaf2-call5-fredbears-family-diner"] },
  "fnaf4-house": { kind: "printed", basis: "The TV shows 'Fredbear & Friends! 1983'.", evidence: ["fnaf4-fredbear-and-friends-1983"] },
  "midnight-motorist-house": { kind: "unknown", basis: "The minigame gives no date.", evidence: ["ffps-midnight-motorist-closed-door"] },
  "freddy-fazbears-pizza-itp": { kind: "unknown", basis: "No on-screen year. The commonly cited 1985 comes from summaries and the source book, which this archive does not use.", evidence: ["into-the-pit-past-year-1985"] },
  "freddy-fazbears-pizza-1987": { kind: "printed", basis: "The checks are dated 11-12-1987 and 11-13-1987, and it closed after 'a few short weeks'.", evidence: ["fnaf2-paycheck-1987", "fnaf2-overtime-robots-scrapped"] },
  "freddy-fazbears-pizza-fnaf1": { kind: "derived", basis: "After the Bite of '87; the check year is printed as 'xx'. The exact year is unknown.", evidence: ["fnaf1-call1-bite-of-87", "fnaf1-paycheck-night5"] },
  "safe-room": { kind: "relative", basis: "Built with the springlock era, and sealed before FNaF3.", evidence: ["fnaf3-tape6-safe-rooms-sealed"] },
  "circus-babys-pizza-world": { kind: "relative", basis: "Undated. It closed before it opened, per Scott's hidden teaser report.", evidence: ["scottgames-site-sl-news-gas-leak-cancellation"] },
  "circus-babys-rental": { kind: "relative", basis: "Undated. Only Sister Location's closing cutscene is placed after FNaF3's fire; the rental facility's shifts are not dated.", evidence: ["sl-golden-freddy-cutscene-springtrap"] },
  "fazbears-fright": { kind: "derived", basis: "Thirty years after the pizzeria closed.", evidence: ["scott-fnaf3-steam-description", "fnaf3-coming-soon-newspaper"] },
  "ffps-pizzeria": { kind: "relative", basis: "After Sister Location: Scrap Baby is Baby, and Scraptrap is burnt Springtrap.", evidence: ["ffps-completion-connection-terminated-elizabeth", "ffps-scraptrap-still-me"] },
  "silver-parasol-games-office": { kind: "derived", basis: "Before Special Delivery's Nov 2019 emails about scanned boards.", evidence: ["hw-tape-05", "sd-circuit-board-scan-virus"] },
  "mega-pizzaplex": { kind: "relative", basis: "No in-game year. It comes after Special Delivery's 2019–2020 emails.", evidence: ["security-breach-msg-sinkhole", "sd-circuit-board-does-what-we-tell-it"] },
  "the-sinkhole": { kind: "relative", basis: "Discovered during Pizzaplex construction.", evidence: ["security-breach-msg-sinkhole"] },
  "jeffs-pizza": { kind: "unknown", basis: "Into the Pit's present has no year.", evidence: ["into-the-pit-jeffs-pizza-ball-pit"] },
};

/** When each game's story takes place. */
export const GAME_DATES: Record<string, DateJustification & { label: string }> = {
  "secret-of-the-mimic": { label: "c. 1979", kind: "teaser", basis: "The game shows day and month only; 1979 appears only in the announcement teaser.", evidence: ["secret-of-the-mimic-teaser-1979"] },
  fnaf4: { label: "1983", kind: "printed", basis: "The TV shows 'Fredbear & Friends! 1983' (minigames). The nightmares are undated.", evidence: ["fnaf4-fredbear-and-friends-1983"] },
  "fnaf4-halloween": { label: "1983 (non-canon)", kind: "printed", basis: "Same minigames as FNaF4. Scott ruled the Halloween Edition non-canon.", evidence: ["fnaf4-halloween-decorated-minigames", "scott-2015-fnaf4-halloween-canon-split"] },
  "into-the-pit": { label: "past & present (undated)", kind: "unknown", basis: "No on-screen year for either era. The commonly cited 1985 is not from the game.", evidence: ["into-the-pit-past-year-1985"] },
  fnaf2: { label: "Nov 1987", kind: "printed", basis: "The checks are dated 11-12-1987 and 11-13-1987.", evidence: ["fnaf2-paycheck-1987", "fnaf2-overtime-robots-scrapped"] },
  fnaf1: { label: "after '87", kind: "derived", basis: "After the Bite of '87; the check year is printed as 'xx'. The exact year is unknown.", evidence: ["fnaf1-call1-bite-of-87", "fnaf1-paycheck-night5"] },
  fnaf3: { label: "closure + 30 yrs", kind: "estimated", basis: "Thirty years after 'Freddy Fazbear's Pizza' closed (which closure is not stated); c. 2017–2019 on the compressed reading.", evidence: ["scott-fnaf3-steam-description"] },
  "sister-location": { label: "undated", kind: "relative", basis: "Gameplay is undated relative to FNaF3. Only its canon closing cutscene is set in the burned Fazbear's Fright.", evidence: ["sl-golden-freddy-cutscene-springtrap"] },
  ffps: { label: "after SL", kind: "relative", basis: "Scrap Baby and Scraptrap are the salvaged forms of Sister Location's and FNaF3's machines.", evidence: ["ffps-completion-connection-terminated-elizabeth"] },
  ucn: { label: "after FFPS", kind: "relative", basis: "\"No matter how many times they burn us\" — after the FFPS fire.", evidence: ["ucn-orville-he-tried-to-release"] },
  "help-wanted": { label: "c. 2019", kind: "derived", basis: "Precedes Special Delivery's dated emails about scanned boards.", evidence: ["sd-circuit-board-scan-virus"] },
  "curse-of-dreadbear": { label: "c. 2019", kind: "derived", basis: "An add-on to the in-universe Help Wanted product.", evidence: ["codb-handunit-no-hidden-intent"] },
  "special-delivery": { label: "2019–2020", kind: "printed", basis: "The emails are dated between Nov 2019 and Mar 2020.", evidence: ["sd-ness-blood-eagle-calendar", "sd-circuit-board-does-what-we-tell-it"] },
  "security-breach": { label: "after 2020", kind: "relative", basis: "No in-game year. It follows Special Delivery and Vanessa's transfer.", evidence: ["security-breach-cd-vanessa-transfer"] },
  "help-wanted-2": { label: "Pizzaplex era", kind: "relative", basis: "Glamrock-era training program.", evidence: ["hw2-orientation-program-intro"] },
  ruin: { label: "after SB", kind: "relative", basis: "The Pizzaplex is abandoned and Gregory is missing.", evidence: ["ruin-pizzaplex-abandoned-earthquake"] },
  "fnaf-world": { label: "outside the timeline", kind: "unknown", basis: "A fantasy spin-off. Only its clock ending and hidden speakers carry lore.", evidence: ["fw-clock-ending-pieces-in-place"] },
  "freddy-in-space-2": { label: "outside the timeline", kind: "unknown", basis: "No lore content.", evidence: [] },
};
