const POKEAPI = "https://pokeapi.co/api/v2";
const SAVE_KEY = "pokemon-classic-campaign-v2";

const TYPE_COLORS = {
  grass: "#43aa8b", fire: "#f3722c", water: "#4895ef", electric: "#f9c74f", ice: "#90e0ef",
  fighting: "#e63946", poison: "#9d4edd", ground: "#bc8a5f", flying: "#80b8ff", psychic: "#ff5d8f",
  bug: "#76c893", rock: "#9a8c98", ghost: "#5a5bb6", dragon: "#5e60ce", dark: "#495057",
  steel: "#8d99ae", fairy: "#ff99c8", normal: "#adb5bd"
};

const DICEBEAR_BASE = "https://api.dicebear.com/9.x";

const AVATARS = [
  { id: "ace-trainer", label: "Ace Trainer", style: "adventurer", seed: "ace" },
  { id: "gym-ranger", label: "Gym Ranger", style: "avataaars", seed: "ranger" },
  { id: "battle-scholar", label: "Battle Scholar", style: "notionists", seed: "scholar" },
  { id: "water-specialist", label: "Water Specialist", style: "lorelei", seed: "water" },
  { id: "field-scout", label: "Field Scout", style: "adventurer-neutral", seed: "scout" },
  { id: "league-contender", label: "League Contender", style: "avataaars-neutral", seed: "contender" },
];

const REGIONS = [
  {
    id: "pallet",
    name: "Pallet Coast",
    unlockBadges: 0,
    wildZones: [
      { id: "meadow", name: "Starter Meadow", pool: ["pidgey", "rattata", "caterpie", "weedle", "oddish", "bellsprout", "spearow", "nidoran-m"] },
      { id: "shore", name: "Shoreline Trail", pool: ["poliwag", "krabby", "tentacool", "magikarp", "slowpoke", "psyduck", "staryu", "shellder"] },
      { id: "grove", name: "Oak Grove", pool: ["pikachu", "abra", "mankey", "sandshrew", "jigglypuff", "meowth", "paras", "venonat"] }
    ],
    wildTrainers: [
      { name: "Youngster Leo", team: ["rattata", "pidgey"], reward: 190, levelBase: 6 },
      { name: "Bug Catcher Tim", team: ["caterpie", "weedle"], reward: 210, levelBase: 7 }
    ],
  },
  {
    id: "viridian",
    name: "Viridian Frontier",
    unlockBadges: 1,
    wildZones: [
      { id: "forest", name: "Viridian Forest", pool: ["caterpie", "metapod", "weedle", "kakuna", "pikachu", "paras", "venonat", "bellsprout"] },
      { id: "hills", name: "Granite Hills", pool: ["geodude", "onix", "sandshrew", "diglett", "machop", "zubat", "cubone", "rhyhorn"] },
      { id: "marsh", name: "Frontier Marsh", pool: ["nidoran-m", "nidoran-f", "oddish", "poliwag", "slowpoke", "exeggcute", "goldeen", "horsea"] }
    ],
    wildTrainers: [
      { name: "Lass Nora", team: ["nidoran-f", "oddish"], reward: 260, levelBase: 10 },
      { name: "Hiker Ron", team: ["geodude", "onix"], reward: 280, levelBase: 11 }
    ],
  },
  {
    id: "cerulean",
    name: "Cerulean Cape",
    unlockBadges: 2,
    wildZones: [
      { id: "cape-water", name: "Cape Waters", pool: ["staryu", "psyduck", "krabby", "seel", "tentacool", "goldeen", "horsea", "shellder"] },
      { id: "power-plant", name: "Power Grid", pool: ["magnemite", "voltorb", "electabuzz", "grimer", "koffing", "gastly", "abra", "mr-mime"] },
      { id: "flower-fields", name: "Flower Fields", pool: ["oddish", "bellsprout", "vulpix", "growlithe", "eevee", "jigglypuff", "clefairy", "parasect"] }
    ],
    wildTrainers: [
      { name: "Swimmer Kai", team: ["poliwag", "staryu"], reward: 340, levelBase: 15 },
      { name: "Engineer Dex", team: ["magnemite", "voltorb"], reward: 360, levelBase: 16 }
    ],
  },
  {
    id: "lavender",
    name: "Lavender Heights",
    unlockBadges: 4,
    wildZones: [
      { id: "tower", name: "Spirit Tower", pool: ["gastly", "haunter", "cubone", "drowzee", "hypno", "zubat", "golbat", "mr-mime"] },
      { id: "route-east", name: "Eastern Route", pool: ["growlithe", "ponyta", "doduo", "farfetchd", "magnemite", "voltorb", "raticate", "fearow"] },
      { id: "coastline", name: "Moonlit Coast", pool: ["eevee", "horsea", "seadra", "starmie", "slowbro", "tentacruel", "lapras", "vaporeon"] }
    ],
    wildTrainers: [
      { name: "Channeler Mina", team: ["gastly", "haunter"], reward: 440, levelBase: 23 },
      { name: "Gambler Poe", team: ["growlithe", "eevee"], reward: 470, levelBase: 24 }
    ],
  },
  {
    id: "cinnabar",
    name: "Cinnabar Isle",
    unlockBadges: 6,
    wildZones: [
      { id: "volcano-rim", name: "Volcano Rim", pool: ["ponyta", "rapidash", "magmar", "slugma", "houndour", "vulpix", "arcanine", "moltres"] },
      { id: "sea-caves", name: "Sea Caves", pool: ["seel", "dewgong", "omanyte", "kabuto", "aerodactyl", "golbat", "crobat", "magikarp"] },
      { id: "lab-ruins", name: "Lab Ruins", pool: ["electrode", "magnemite", "grimer", "muk", "koffing", "weezing", "porygon", "ditto"] }
    ],
    wildTrainers: [
      { name: "Scientist Oren", team: ["magnemite", "electrode", "magmar"], reward: 610, levelBase: 32 },
      { name: "Tamer Sol", team: ["rapidash", "arcanine"], reward: 650, levelBase: 33 }
    ],
  },
  {
    id: "indigo",
    name: "Indigo Summit",
    unlockBadges: 8,
    wildZones: [
      { id: "summit-path", name: "Summit Path", pool: ["dragonair", "snorlax", "lapras", "aerodactyl", "jolteon", "vaporeon", "flareon", "espeon"] },
      { id: "elite-cavern", name: "Elite Cavern", pool: ["machamp", "gengar", "alakazam", "gyarados", "rhydon", "tauros", "scyther", "pinsir"] },
      { id: "legend-ridge", name: "Legend Ridge", pool: ["dragonite", "articuno", "zapdos", "moltres", "mewtwo", "tyranitar", "metagross", "garchomp"] }
    ],
    wildTrainers: [
      { name: "Ace Trainer Vega", team: ["jolteon", "lapras", "dragonair"], reward: 900, levelBase: 42 },
      { name: "Master Trainer Cyra", team: ["snorlax", "aerodactyl", "dragonite"], reward: 1100, levelBase: 45 }
    ],
  }
];

const GYMS = [
  { name: "Pewter Gym", badge: "Boulder Badge", reward: 500, team: ["geodude", "onix"], minLevel: 8, regionId: "pallet" },
  { name: "Cerulean Gym", badge: "Cascade Badge", reward: 750, team: ["staryu", "starmie"], minLevel: 12, regionId: "viridian" },
  { name: "Vermilion Gym", badge: "Thunder Badge", reward: 1000, team: ["voltorb", "pikachu", "raichu"], minLevel: 16, regionId: "cerulean" },
  { name: "Celadon Gym", badge: "Rainbow Badge", reward: 1300, team: ["victreebel", "tangela", "vileplume"], minLevel: 21, regionId: "cerulean" },
  { name: "Fuchsia Gym", badge: "Soul Badge", reward: 1600, team: ["koffing", "muk", "weezing"], minLevel: 26, regionId: "lavender" },
  { name: "Saffron Gym", badge: "Marsh Badge", reward: 1900, team: ["kadabra", "mr-mime", "alakazam"], minLevel: 30, regionId: "lavender" },
  { name: "Cinnabar Gym", badge: "Volcano Badge", reward: 2200, team: ["ninetales", "rapidash", "arcanine"], minLevel: 34, regionId: "cinnabar" },
  { name: "Viridian Gym", badge: "Earth Badge", reward: 2600, team: ["dugtrio", "nidoqueen", "nidoking", "rhydon"], minLevel: 38, regionId: "cinnabar" }
];

const TOURNAMENT = [
  { name: "Elite Lore", reward: 2400, team: ["dewgong", "cloyster", "lapras"] },
  { name: "Elite Bruno", reward: 2800, team: ["onix", "hitmonlee", "machamp"] },
  { name: "Elite Agatha", reward: 3200, team: ["gengar", "golbat", "arbok"] },
  { name: "Elite Lance", reward: 3800, team: ["gyarados", "dragonair", "dragonite"] },
  { name: "Champion", reward: 5000, team: ["pidgeot", "alakazam", "rhydon", "arcanine", "blastoise"] }
];

const SHOP = {
  pokeball: { name: "Poke Ball", price: 200 },
  potion: { name: "Potion", price: 300 },
  superPotion: { name: "Super Potion", price: 700 },
  thunderStone: { name: "Thunder Stone", price: 1400 },
  fireStone: { name: "Fire Stone", price: 1400 },
  waterStone: { name: "Water Stone", price: 1400 },
  leafStone: { name: "Leaf Stone", price: 1400 },
  moonStone: { name: "Moon Stone", price: 1800 },
  revive: { name: "Revive", price: 900 },
  fullRevive: { name: "Full Revive", price: 1800 },
  expCandy: { name: "EXP Candy", price: 650 },
};

const EVOLUTION_ITEM_KEY = {
  "thunder-stone": "thunderStone",
  "fire-stone": "fireStone",
  "water-stone": "waterStone",
  "leaf-stone": "leafStone",
  "moon-stone": "moonStone",
};

const INVENTORY_ITEM_META = {
  revive: {
    name: "Revive",
    description: "Revive one fainted Pokemon to 50% HP.",
    targetMode: "fainted",
  },
  fullRevive: {
    name: "Full Revive",
    description: "Revive one fainted Pokemon to full HP.",
    targetMode: "fainted",
  },
  expCandy: {
    name: "EXP Candy",
    description: "Give 70 EXP to selected Pokemon.",
    targetMode: "any",
  },
};

const INVENTORY_USABLE_ITEMS = ["revive", "fullRevive", "expCandy"];

const TUTORIAL_ORDER = [
  "start",
  "starter",
  "hub",
  "wildMap",
  "battle",
  "center",
  "shop",
  "inventory",
  "teamPicker",
  "battleResult",
];

const TUTORIAL_GUIDE = {
  start: {
    title: "Start Screen",
    steps: [
      "Enter trainer name and choose avatar.",
      "Press Begin Journey for a new save, or Continue Saved Game to load existing progress.",
    ],
  },
  starter: {
    title: "Starter Selection",
    steps: [
      "Pick one starter Pokemon; starter starts at level 5 with fixed opening HP.",
      "After selection you move to the main Journey Hub.",
    ],
  },
  hub: {
    title: "Journey Hub",
    steps: [
      "Use World Map pins to travel regions. New regions unlock as badges increase.",
      "Use Enter Wild, Pokemon Center, PokeMart, Inventory, Gym, and Tournament actions from Journey Control.",
      "Goal loop: explore wild -> capture/train -> heal/supply -> clear gyms -> unlock tournament.",
    ],
  },
  wildMap: {
    title: "Wild Map",
    steps: [
      "Choose a wild zone first. Each zone has different Pokemon pool.",
      "Enter Wild from Journey Control, then start random encounter or selected wild/trainer battle.",
      "Captures go to party if space exists, otherwise to PC storage.",
    ],
  },
  battle: {
    title: "Battle Screen",
    steps: [
      "Use 4 moves, Switch, Potion, Guard, or Pokeball (Pokeball only in wild battles).",
      "Lower enemy HP before capture for better success chance.",
      "If more than one party Pokemon is alive, choose lead first.",
      "After battle, open Battle Result for money, EXP, and evolution status.",
    ],
  },
  center: {
    title: "Pokemon Center",
    steps: [
      "Quick Heal and Full Restore recover party HP.",
      "Party To PC Transfer sends current party Pokemon to PC storage.",
      "PC Storage supports Withdraw and Release.",
      "Evolution Desk shows requirements and enables valid evolutions.",
    ],
  },
  shop: {
    title: "PokeMart",
    steps: [
      "Buy Pokeballs, healing items, evolution stones, and inventory-use items.",
      "Open Inventory Desk to apply Revive, Full Revive, and EXP Candy.",
    ],
  },
  inventory: {
    title: "Inventory Desk",
    steps: [
      "Left side: select an item.",
      "Right side: pick target Pokemon and apply item.",
      "Revive and Full Revive require fainted targets.",
      "EXP Candy can be applied to any selected party Pokemon.",
    ],
  },
  teamPicker: {
    title: "Team Picker",
    steps: [
      "Choose lead Pokemon at battle start when prompted.",
      "You can also switch during battle if another Pokemon is available.",
    ],
  },
  battleResult: {
    title: "Battle Result",
    steps: [
      "Review win/loss/capture summary, money, EXP, and team status.",
      "Use Evolve button if active Pokemon is currently eligible.",
      "Check Current evolution options for exact requirements.",
    ],
  },
};

const STARTERS = ["bulbasaur", "charmander", "squirtle"];

function createInventoryDefaults(overrides = {}) {
  return {
    pokeball: 0,
    potion: 0,
    superPotion: 0,
    thunderStone: 0,
    fireStone: 0,
    waterStone: 0,
    leafStone: 0,
    moonStone: 0,
    revive: 0,
    fullRevive: 0,
    expCandy: 0,
    ...overrides,
  };
}

function normalizeInventory(raw) {
  const defaults = createInventoryDefaults();
  const source = raw || {};
  Object.keys(defaults).forEach((key) => {
    defaults[key] = Math.max(0, Number(source[key] || 0));
  });
  return defaults;
}

function inventoryLine() {
  const inv = state.game.inventory;
  return `Ball ${inv.pokeball}, Pot ${inv.potion}, S.Pot ${inv.superPotion}, Rev ${inv.revive}, FRev ${inv.fullRevive}, Candy ${inv.expCandy}, TStone ${inv.thunderStone}, FStone ${inv.fireStone}, WStone ${inv.waterStone}, LStone ${inv.leafStone}, MStone ${inv.moonStone}`;
}

const state = {
  cache: {
    pokemon: new Map(),
    moves: new Map(),
    species: new Map(),
    evolution: new Map(),
  },
  ui: {
    selectedAvatar: AVATARS[0].id,
    centerMessage: "",
    inventoryMessage: "",
    inventorySelectedItem: INVENTORY_USABLE_ITEMS[0],
    tutorialTopic: "start",
    battleResult: null,
    centerRenderToken: 0,
  },
  game: {
    playerName: "",
    avatar: AVATARS[0].id,
    money: 0,
    inventory: createInventoryDefaults(),
    team: [],
    pcStorage: [],
    activeIdx: 0,
    badges: [],
    gymIndex: 0,
    tournamentIndex: 0,
    totalWins: 0,
    currentRegionId: REGIONS[0].id,
    selectedWildZoneId: REGIONS[0].wildZones[0].id,
    inWild: false,
  },
  battle: {
    open: false,
    mode: "wild",
    canRun: true,
    reward: 0,
    label: "",
    playerGuarded: false,
    enemyGuarded: false,
    enemyTeam: [],
    enemyIdx: 0,
    awaitingLeadChoice: false,
    teamPickerForce: false,
    history: [],
    playerUsed: [],
    enemyUsed: [],
  }
};

function qs(id) { return document.getElementById(id); }

function toTitle(value) {
  return String(value || "")
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1).toLowerCase())
    .join(" ");
}

function setStatus(text) { qs("statusText").textContent = text; }

function log(text) {
  const line = document.createElement("div");
  line.className = "log-line";
  line.textContent = text;
  qs("logBox").prepend(line);
}

function battleLog(text) {
  const line = document.createElement("div");
  line.className = "log-line";
  line.textContent = text;
  qs("battleLog").prepend(line);
  if (Array.isArray(state.battle.history)) state.battle.history.push(text);
}

function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function randomFrom(list) { return list[Math.floor(Math.random() * list.length)]; }

function currentRegion() {
  return REGIONS.find((r) => r.id === state.game.currentRegionId) || REGIONS[0];
}

function ensureSelectedWildZone(region = currentRegion()) {
  const zones = region.wildZones || [];
  if (!zones.length) {
    state.game.selectedWildZoneId = "";
    return null;
  }
  const exists = zones.some((z) => z.id === state.game.selectedWildZoneId);
  if (!exists) state.game.selectedWildZoneId = zones[0].id;
  return zones.find((z) => z.id === state.game.selectedWildZoneId) || zones[0];
}

function currentWildZone(region = currentRegion()) {
  return ensureSelectedWildZone(region);
}

function currentWildPool(region = currentRegion()) {
  const zone = currentWildZone(region);
  return zone ? zone.pool : [];
}

function unlockedRegion(region) {
  return state.game.badges.length >= region.unlockBadges;
}

function nextGym() {
  return GYMS[state.game.gymIndex] || null;
}

function activePokemon() {
  return state.game.team[state.game.activeIdx] || state.game.team[0] || null;
}

function firstAliveTeamIndex() {
  return state.game.team.findIndex((p) => p.currentHp > 0);
}

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API ${response.status}: ${url}`);
  return response.json();
}

function stat(raw, statName) {
  return raw.stats.find((s) => s.stat.name === statName)?.base_stat || 40;
}

function cleanFlavor(text) {
  return String(text || "").replace(/[\f\n\r]+/g, " ").replace(/\s+/g, " ").trim();
}

async function getSpecies(url) {
  if (state.cache.species.has(url)) return state.cache.species.get(url);
  const raw = await fetchJSON(url);
  const data = {
    captureRate: raw.capture_rate || 45,
    flavor: cleanFlavor(raw.flavor_text_entries.find((f) => f.language.name === "en")?.flavor_text || ""),
    evolutionChainUrl: raw.evolution_chain?.url || "",
  };
  state.cache.species.set(url, data);
  return data;
}

async function getPokemon(nameOrId) {
  const key = String(nameOrId).toLowerCase();
  if (state.cache.pokemon.has(key)) return state.cache.pokemon.get(key);

  const raw = await fetchJSON(`${POKEAPI}/pokemon/${key}`);
  const species = await getSpecies(raw.species.url);

  const mapped = {
    id: raw.id,
    name: raw.name,
    label: toTitle(raw.name),
    speciesUrl: raw.species.url,
    sprite: raw.sprites.other["official-artwork"].front_default || raw.sprites.front_default || "",
    types: raw.types.sort((a, b) => a.slot - b.slot).map((t) => t.type.name),
    stats: {
      hp: stat(raw, "hp"),
      atk: stat(raw, "attack"),
      def: stat(raw, "defense"),
      spatk: stat(raw, "special-attack"),
      spdef: stat(raw, "special-defense"),
      speed: stat(raw, "speed"),
    },
    moveRefs: raw.moves.map((m) => m.move.url),
    captureRate: species.captureRate,
    speciesFlavor: species.flavor,
    evolutionChainUrl: species.evolutionChainUrl,
  };

  state.cache.pokemon.set(key, mapped);
  state.cache.pokemon.set(String(mapped.id), mapped);
  state.cache.pokemon.set(mapped.name, mapped);
  return mapped;
}

async function getMove(urlOrName) {
  const key = String(urlOrName);
  if (state.cache.moves.has(key)) return state.cache.moves.get(key);

  const url = key.startsWith("http") ? key : `${POKEAPI}/move/${key}`;
  const raw = await fetchJSON(url);
  const move = {
    name: raw.name,
    label: toTitle(raw.name),
    power: raw.power || 0,
    type: raw.type?.name || "normal",
    accuracy: raw.accuracy || 100,
    class: raw.damage_class?.name || "physical",
  };

  state.cache.moves.set(key, move);
  state.cache.moves.set(url, move);
  state.cache.moves.set(move.name, move);
  return move;
}

async function selectMoves(species, count = 4) {
  const refs = [...species.moveRefs].sort(() => Math.random() - 0.5);
  const usable = [];

  for (let i = 0; i < refs.length && usable.length < 25 && i < 80; i += 1) {
    try {
      const move = await getMove(refs[i]);
      if (move.class === "status" || move.power <= 0) continue;
      if (usable.find((m) => m.name === move.name)) continue;
      usable.push(move);
    } catch {
      // skip move fetch errors
    }
  }

  const picked = [];
  const addMove = (move) => {
    if (!move) return;
    if (picked.find((m) => m.name === move.name)) return;
    picked.push(move);
  };

  const stabMove = usable.find((m) => species.types.includes(m.type));
  addMove(stabMove);

  usable.forEach((m) => {
    if (picked.length < count) addMove(m);
  });

  const typeFallbacks = {
    fire: ["ember", "flame-wheel", "fire-punch"],
    water: ["water-gun", "bubble-beam", "aqua-tail"],
    grass: ["vine-whip", "razor-leaf", "leaf-blade"],
    electric: ["thunder-shock", "spark", "thunder-punch"],
    ice: ["ice-shard", "ice-beam"],
    fighting: ["karate-chop", "low-kick"],
    poison: ["poison-sting", "sludge"],
    ground: ["mud-slap", "dig"],
    flying: ["gust", "wing-attack"],
    psychic: ["confusion", "psybeam"],
    bug: ["bug-bite", "x-scissor"],
    rock: ["rock-throw", "rock-slide"],
    ghost: ["lick", "shadow-punch"],
    dragon: ["dragon-breath", "dragon-claw"],
    dark: ["bite", "crunch"],
    steel: ["metal-claw", "iron-tail"],
    fairy: ["fairy-wind", "play-rough"],
    normal: ["tackle", "quick-attack", "scratch", "pound"],
  };

  for (const type of species.types) {
    if (picked.find((m) => m.type === type)) continue;
    const fallbackList = typeFallbacks[type] || [];
    for (const moveName of fallbackList) {
      try {
        const move = await getMove(moveName);
        if (move.power > 0 && move.class !== "status") {
          addMove(move);
          break;
        }
      } catch {
        // try next fallback move
      }
    }
  }

  const generalFallback = ["tackle", "quick-attack", "pound", "scratch", "swift", "body-slam"];
  for (const name of generalFallback) {
    if (picked.length >= count) break;
    try {
      addMove(await getMove(name));
    } catch {
      // continue
    }
  }

  return picked.slice(0, count);
}

function expThreshold(level) { return 35 + level * 18; }

function scaledStats(base, level) {
  return {
    maxHp: Math.max(35, Math.floor((base.hp * level) / 28) + 25),
    atk: Math.max(8, Math.floor((base.atk * level) / 40) + 6),
    def: Math.max(8, Math.floor((base.def * level) / 40) + 6),
    spatk: Math.max(8, Math.floor((base.spatk * level) / 40) + 6),
    spdef: Math.max(8, Math.floor((base.spdef * level) / 40) + 6),
    speed: Math.max(8, Math.floor((base.speed * level) / 40) + 6),
  };
}

function createFighter(species, level, options = {}) {
  const stats = scaledStats(species.stats, level);
  const maxHp = options.forcedMaxHp || stats.maxHp;

  return {
    id: `${species.name}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    speciesName: species.name,
    name: species.label,
    sprite: species.sprite,
    types: species.types,
    level,
    exp: 0,
    expToNext: expThreshold(level),
    baseStats: { ...species.stats },
    stats: {
      maxHp,
      atk: stats.atk,
      def: stats.def,
      spatk: stats.spatk,
      spdef: stats.spdef,
      speed: stats.speed,
    },
    currentHp: maxHp,
    moves: options.moves || [],
    captureRate: species.captureRate,
    flavor: species.speciesFlavor,
  };
}

function hasStabMove(fighter) {
  return (fighter.moves || []).some((move) => fighter.types.includes(move.type));
}

async function ensureFighterMoves(fighter) {
  if (!fighter?.speciesName) return;
  const moveCountOk = Array.isArray(fighter.moves) && fighter.moves.length >= 4;
  const stabOk = hasStabMove(fighter);
  if (moveCountOk && stabOk) return;

  const species = await getPokemon(fighter.speciesName);
  fighter.moves = await selectMoves(species, 4);
}

async function ensurePartyMovesReady() {
  for (let i = 0; i < state.game.team.length; i += 1) {
    await ensureFighterMoves(state.game.team[i]);
  }
}

function evolutionRequirementText(detail) {
  const parts = [];
  if (detail.minLevel) parts.push(`Lv ${detail.minLevel}`);
  if (detail.item) parts.push(`Use ${toTitle(detail.item)}`);
  if (detail.minHappiness) parts.push(`Friendship ${detail.minHappiness}`);
  if (detail.minAffection) parts.push(`Affection ${detail.minAffection}`);
  if (detail.minBeauty) parts.push(`Beauty ${detail.minBeauty}`);
  if (detail.holdItem) parts.push(`Hold ${toTitle(detail.holdItem)}`);
  if (detail.knownMove) parts.push(`Know ${toTitle(detail.knownMove)}`);
  if (detail.timeOfDay) parts.push(`${toTitle(detail.timeOfDay)} only`);
  if (detail.trigger === "trade") parts.push("Trade");
  if (!parts.length) parts.push(toTitle(detail.trigger || "Special"));
  return parts.join(", ");
}

function itemInventoryKey(itemName) {
  return EVOLUTION_ITEM_KEY[itemName] || null;
}

function parseEvolutionChain(node, nextMap, lines) {
  const from = node.species.name;
  if (!nextMap.has(from)) nextMap.set(from, []);

  (node.evolves_to || []).forEach((child) => {
    const d = child.evolution_details?.[0] || {};
    const detail = {
      to: child.species.name,
      minLevel: d.min_level || null,
      item: d.item?.name || null,
      trigger: d.trigger?.name || "level-up",
      minHappiness: d.min_happiness || null,
      minAffection: d.min_affection || null,
      minBeauty: d.min_beauty || null,
      holdItem: d.held_item?.name || null,
      knownMove: d.known_move?.name || null,
      knownMoveType: d.known_move_type?.name || null,
      location: d.location?.name || null,
      partyType: d.party_type?.name || null,
      partySpecies: d.party_species?.name || null,
      tradeSpecies: d.trade_species?.name || null,
      timeOfDay: d.time_of_day || "",
      needsRain: Boolean(d.needs_overworld_rain),
      turnUpsideDown: Boolean(d.turn_upside_down),
    };
    nextMap.get(from).push(detail);
    lines.push(`${toTitle(from)} -> ${toTitle(detail.to)} (${evolutionRequirementText(detail)})`);
    parseEvolutionChain(child, nextMap, lines);
  });
}

async function getEvolutionData(speciesName) {
  const pokemon = await getPokemon(speciesName);
  const chainUrl = pokemon.evolutionChainUrl;
  if (!chainUrl) return null;

  if (state.cache.evolution.has(chainUrl)) return state.cache.evolution.get(chainUrl);
  const raw = await fetchJSON(chainUrl);
  const nextMap = new Map();
  const lines = [];
  parseEvolutionChain(raw.chain, nextMap, lines);
  const data = { nextMap, lines };
  state.cache.evolution.set(chainUrl, data);
  return data;
}

function evaluateEvolutionOption(fighter, option) {
  if (option.item) {
    const key = itemInventoryKey(option.item);
    if (!key) {
      return { eligible: false, reason: `Requires ${toTitle(option.item)} (not sold in current PokeMart).`, itemKey: null };
    }
    const count = state.game.inventory[key] || 0;
    if (count <= 0) {
      return { eligible: false, reason: `Need ${toTitle(option.item)} from PokeMart.`, itemKey: key };
    }
    return { eligible: true, reason: `Use ${toTitle(option.item)} (${count} owned).`, itemKey: key };
  }

  if (option.trigger === "trade") return { eligible: false, reason: "Trade evolution is not supported.", itemKey: null };
  if (option.minLevel && fighter.level < option.minLevel) {
    return { eligible: false, reason: `Reach Lv ${option.minLevel}.`, itemKey: null };
  }
  if (option.minHappiness) {
    return { eligible: false, reason: `Requires friendship ${option.minHappiness} (not implemented).`, itemKey: null };
  }
  if (option.minAffection) {
    return { eligible: false, reason: `Requires affection ${option.minAffection} (not implemented).`, itemKey: null };
  }
  if (option.minBeauty) {
    return { eligible: false, reason: `Requires beauty ${option.minBeauty} (not implemented).`, itemKey: null };
  }
  if (option.timeOfDay) {
    return { eligible: false, reason: `Requires ${toTitle(option.timeOfDay)} time (not implemented).`, itemKey: null };
  }
  if (option.holdItem || option.knownMove || option.knownMoveType || option.location || option.partyType || option.partySpecies || option.tradeSpecies || option.needsRain || option.turnUpsideDown) {
    return { eligible: false, reason: `Special condition: ${evolutionRequirementText(option)} (not implemented).`, itemKey: null };
  }
  return { eligible: true, reason: option.minLevel ? `Reached Lv ${option.minLevel}.` : "Ready to evolve.", itemKey: null };
}

async function getEvolutionStatus(fighter) {
  if (!fighter) return { lines: [], options: [], eligible: [] };
  const data = await getEvolutionData(fighter.speciesName);
  if (!data) return { lines: [], options: [], eligible: [] };
  const options = (data.nextMap.get(fighter.speciesName) || []).map((opt) => ({ ...opt, ...evaluateEvolutionOption(fighter, opt) }));
  const eligible = options.filter((opt) => opt.eligible);
  return { lines: data.lines, options, eligible };
}

async function evolvePokemonAtIndex(teamIdx, preferredTarget = "") {
  const fighter = state.game.team[teamIdx];
  if (!fighter) return { ok: false, message: "No Pokemon selected." };
  const evo = await getEvolutionStatus(fighter);
  if (!evo.options.length) return { ok: false, message: `${fighter.name} has no further evolution path.` };
  const choice = preferredTarget
    ? evo.eligible.find((opt) => opt.to === preferredTarget)
    : evo.eligible[0];
  if (!choice) {
    const blockers = evo.options.map((opt) => `${toTitle(opt.to)}: ${opt.reason}`).join(" | ");
    return { ok: false, message: `Cannot evolve now. ${blockers}` };
  }
  if (choice.itemKey) {
    const current = state.game.inventory[choice.itemKey] || 0;
    if (current <= 0) return { ok: false, message: `Missing ${toTitle(choice.item)}.` };
    state.game.inventory[choice.itemKey] = current - 1;
  }

  const previousName = fighter.name;
  const nextSpecies = await getPokemon(choice.to);
  const level = fighter.level;
  const exp = fighter.exp;
  const expToNext = fighter.expToNext;
  const hpRatio = fighter.currentHp / Math.max(1, fighter.stats.maxHp);
  const newStats = scaledStats(nextSpecies.stats, level);
  const newMoves = await selectMoves(nextSpecies, 4);

  fighter.speciesName = nextSpecies.name;
  fighter.name = nextSpecies.label;
  fighter.sprite = nextSpecies.sprite;
  fighter.types = nextSpecies.types;
  fighter.baseStats = { ...nextSpecies.stats };
  fighter.moves = newMoves;
  fighter.captureRate = nextSpecies.captureRate;
  fighter.flavor = nextSpecies.speciesFlavor;
  fighter.stats = {
    maxHp: newStats.maxHp,
    atk: newStats.atk,
    def: newStats.def,
    spatk: newStats.spatk,
    spdef: newStats.spdef,
    speed: newStats.speed,
  };
  fighter.currentHp = Math.max(1, Math.round(fighter.stats.maxHp * hpRatio));
  fighter.exp = exp;
  fighter.expToNext = expToNext;

  log(`${previousName} evolved into ${fighter.name}.`);
  if (choice.itemKey) log(`${toTitle(choice.item)} consumed.`);
  return { ok: true, message: `${previousName} evolved into ${fighter.name}.` };
}

async function evolveActivePokemon() {
  const idx = state.game.activeIdx;
  return evolvePokemonAtIndex(idx);
}

function serializeGame() { return JSON.stringify(state.game); }

function persistGame() {
  localStorage.setItem(SAVE_KEY, serializeGame());
}

function saveGame() {
  persistGame();
  log("Game saved.");
}

function loadGame() {
  const text = localStorage.getItem(SAVE_KEY);
  if (!text) return false;
  try {
    const parsed = JSON.parse(text);
    if (!parsed?.playerName || !Array.isArray(parsed.team) || parsed.team.length === 0) return false;
    state.game = {
      ...state.game,
      ...parsed,
      inventory: normalizeInventory(parsed.inventory),
      selectedWildZoneId: parsed.selectedWildZoneId || REGIONS[0].wildZones[0].id,
      avatar: parsed.avatar || AVATARS[0].id,
      pcStorage: Array.isArray(parsed.pcStorage) ? parsed.pcStorage : [],
    };
    state.ui.selectedAvatar = parsed.avatar || AVATARS[0].id;
    ensureSelectedWildZone(currentRegion());
    return true;
  } catch {
    return false;
  }
}

function sectionVisible(id) {
  const el = qs(id);
  return Boolean(el && !el.classList.contains("hidden"));
}

function currentTutorialTopic() {
  if (sectionVisible("teamPickerModal")) return "teamPicker";
  if (sectionVisible("battleResultModal")) return "battleResult";
  if (sectionVisible("battleModal")) return "battle";
  if (sectionVisible("inventoryModal")) return "inventory";
  if (sectionVisible("centerModal")) return "center";
  if (sectionVisible("shopModal")) return "shop";
  if (sectionVisible("wildMapModal")) return "wildMap";
  if (sectionVisible("screenStarter")) return "starter";
  if (sectionVisible("screenHub")) return "hub";
  return "start";
}

function renderTutorialTopic(topic) {
  const key = TUTORIAL_GUIDE[topic] ? topic : "start";
  const data = TUTORIAL_GUIDE[key];
  qs("tutorialTitle").textContent = `How To Play: ${data.title}`;
  const content = qs("tutorialContent");
  content.innerHTML = data.steps
    .map((step, idx) => `<div class="tutorial-step">${idx + 1}. ${step}</div>`)
    .join("");
}

function renderTutorialTopicSelect(selectedTopic = "start") {
  const select = qs("tutorialTopicSelect");
  const selected = TUTORIAL_GUIDE[selectedTopic] ? selectedTopic : "start";
  select.innerHTML = "";
  TUTORIAL_ORDER.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = TUTORIAL_GUIDE[key].title;
    select.appendChild(option);
  });
  select.value = selected;
}

function updateTutorialContext(topic = "") {
  const key = TUTORIAL_GUIDE[topic] ? topic : currentTutorialTopic();
  state.ui.tutorialTopic = key;
  qs("tutorialContextLabel").textContent = `Tutorial: ${TUTORIAL_GUIDE[key].title}`;
}

function showTutorial(show, topic = "") {
  qs("tutorialModal").classList.toggle("hidden", !show);
  if (!show) return;
  const key = TUTORIAL_GUIDE[topic] ? topic : currentTutorialTopic();
  state.ui.tutorialTopic = key;
  renderTutorialTopicSelect(key);
  renderTutorialTopic(key);
}

function showScreen(name) {
  ["screenStart", "screenStarter", "screenHub"].forEach((id) => qs(id).classList.add("hidden"));
  qs(name).classList.remove("hidden");
  updateTutorialContext();
}

function renderTypes(target, types) {
  target.innerHTML = "";
  types.forEach((type) => {
    const badge = document.createElement("span");
    badge.className = "type-badge";
    badge.style.background = TYPE_COLORS[type] || "#6c757d";
    badge.textContent = type;
    target.appendChild(badge);
  });
}

function avatarData(id) {
  return AVATARS.find((a) => a.id === id) || AVATARS[0];
}

function avatarUrl(avatar, contextSeed = "") {
  const suffix = String(contextSeed || "trainer").trim().toLowerCase().replace(/\s+/g, "-");
  const seed = `${avatar.seed}-${suffix}`;
  return `${DICEBEAR_BASE}/${avatar.style}/svg?seed=${encodeURIComponent(seed)}&backgroundType=gradientLinear`;
}

function renderAvatarChoices() {
  const grid = qs("avatarChoices");
  grid.innerHTML = "";
  const seedContext = qs("trainerNameInput")?.value?.trim() || state.game.playerName || "trainer";

  AVATARS.forEach((avatar) => {
    const btn = document.createElement("button");
    btn.className = `avatar-btn ${state.ui.selectedAvatar === avatar.id ? "active" : ""}`;
    btn.innerHTML = `<img class="avatar-thumb" src="${avatarUrl(avatar, seedContext)}" alt="${avatar.label}" /><small>${avatar.label}</small>`;
    btn.addEventListener("click", () => {
      state.ui.selectedAvatar = avatar.id;
      renderAvatarChoices();
    });
    grid.appendChild(btn);
  });
}

function updateObjective() {
  const gym = nextGym();
  if (gym) {
    qs("nextObjective").textContent = `Objective: Travel to ${toTitle(gym.regionId)} and clear ${gym.name} (${gym.badge}).`;
    return;
  }

  if (state.game.tournamentIndex < TOURNAMENT.length) {
    qs("nextObjective").textContent = `Objective: Tournament round ${state.game.tournamentIndex + 1} at Indigo Summit.`;
    return;
  }

  qs("nextObjective").textContent = "Champion complete. Continue exploring and expanding your team.";
}

function renderTrainerSummary() {
  const avatar = avatarData(state.game.avatar);
  const journeySeed = `${state.game.playerName}-${state.game.badges.length}-${state.game.currentRegionId}-${state.game.totalWins}`;
  qs("trainerSummary").innerHTML = `
    <div class="trainer-pass">
      <div class="avatar-chip"><img src="${avatarUrl(avatar, journeySeed)}" alt="${avatar.label}" /></div>
      <div>
        <strong>${state.game.playerName}</strong><br>
        Money: $${state.game.money}<br>
        Badges: ${state.game.badges.length}/8<br>
        Inventory: ${inventoryLine()}
      </div>
    </div>
  `;
}

function percentOf(current, max) {
  return Math.max(0, Math.min(100, Math.round((current / Math.max(1, max)) * 100)));
}

function pokemonInfoMarkup(pokemon, options = {}) {
  const showExp = options.showExp ?? true;
  const hpPct = percentOf(pokemon.currentHp, pokemon.stats.maxHp);
  const expPct = percentOf(pokemon.exp || 0, pokemon.expToNext || 1);
  const extra = options.extra ? `<div class="pc-note">${options.extra}</div>` : "";
  return `
    <div class="pokemon-mini">
      <img class="mini-sprite" src="${pokemon.sprite}" alt="${pokemon.name}" />
      <div class="pokemon-mini-body">
        <div><strong>${pokemon.name}</strong> Lv.${pokemon.level}</div>
        <div class="pc-note">HP ${pokemon.currentHp}/${pokemon.stats.maxHp}</div>
        <div class="mini-track"><div class="mini-fill hp" style="width:${hpPct}%"></div></div>
        ${showExp ? `<div class="pc-note">EXP ${pokemon.exp}/${pokemon.expToNext}</div><div class="mini-track"><div class="mini-fill exp" style="width:${expPct}%"></div></div>` : ""}
        ${extra}
      </div>
    </div>
  `;
}

function renderTeam() {
  const active = activePokemon();
  if (!active) return;

  const moveLines = active.moves.map((m) => `${m.label} [${toTitle(m.type)} ${toTitle(m.class)} Pow ${m.power} Acc ${m.accuracy}%]`).join("<br>");
  qs("activePokemonCard").innerHTML = pokemonInfoMarkup(active, {
    showExp: true,
    extra: `Types: ${active.types.map(toTitle).join(", ")}<br>${moveLines}`,
  });

  const list = qs("teamList");
  list.innerHTML = "";
  state.game.team.forEach((p, idx) => {
    const row = document.createElement("div");
    row.className = `team-item ${idx === state.game.activeIdx ? "active" : ""}`;
    row.innerHTML = `<div class="team-main">${pokemonInfoMarkup(p, { showExp: true })}</div>`;

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Set Active";
    btn.disabled = p.currentHp <= 0;
    btn.addEventListener("click", () => {
      state.game.activeIdx = idx;
      renderHub();
      log(`${p.name} is now active.`);
    });

    row.appendChild(btn);
    list.appendChild(row);
  });
}

function renderRegionMap() {
  const map = qs("regionMap");
  map.innerHTML = "";
  const canvas = document.createElement("div");
  canvas.className = "world-map-canvas";
  map.appendChild(canvas);

  const coords = {
    pallet: { x: 8, y: 78 },
    viridian: { x: 24, y: 58 },
    cerulean: { x: 43, y: 40 },
    lavender: { x: 60, y: 50 },
    cinnabar: { x: 78, y: 75 },
    indigo: { x: 90, y: 20 },
  };

  const links = [
    ["pallet", "viridian"],
    ["viridian", "cerulean"],
    ["cerulean", "lavender"],
    ["lavender", "cinnabar"],
    ["lavender", "indigo"],
  ];

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.classList.add("map-lines");
  links.forEach(([a, b]) => {
    const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", String(coords[a].x));
    l.setAttribute("y1", String(coords[a].y));
    l.setAttribute("x2", String(coords[b].x));
    l.setAttribute("y2", String(coords[b].y));
    svg.appendChild(l);
  });
  canvas.appendChild(svg);

  REGIONS.forEach((region) => {
    const locked = !unlockedRegion(region);
    const isCurrent = region.id === state.game.currentRegionId;
    const pos = coords[region.id] || { x: 10, y: 10 };

    const pin = document.createElement("button");
    pin.className = `region-pin ${locked ? "locked" : ""} ${isCurrent ? "current" : ""}`;
    pin.style.left = `${pos.x}%`;
    pin.style.top = `${pos.y}%`;
    pin.disabled = locked;
    pin.textContent = region.name;
    pin.addEventListener("click", () => {
      if (isCurrent) return;
      state.game.currentRegionId = region.id;
      state.game.inWild = false;
      ensureSelectedWildZone(region);
      log(`Traveled to ${region.name}.`);
      renderHub();
    });
    canvas.appendChild(pin);
  });

  qs("mapHint").textContent = "World map: click a region pin to travel. Then use Town Map actions below.";
}

function renderTownMap() {
  const town = qs("townMap");
  const region = currentRegion();
  const gym = nextGym();
  const gymAvailable = Boolean(gym);
  const tournamentAvailable = true;
  town.innerHTML = "";

  const canvas = document.createElement("div");
  canvas.className = "town-map-canvas";
  town.appendChild(canvas);

  const facilities = [
    { id: "center", label: "Pokemon Center", x: 12, y: 25, enabled: true, action: () => showCenter(true) },
    { id: "mart", label: "PokeMart", x: 36, y: 22, enabled: true, action: () => showShop(true) },
    { id: "wild", label: "Wild Gate", x: 64, y: 28, enabled: true, action: () => { state.game.inWild = true; log(`Entered wild zone in ${region.name}.`); renderHub(); } },
    { id: "wild-map", label: "Wild Map", x: 82, y: 34, enabled: true, action: () => showWildMap(true) },
    { id: "wild-fight", label: "Wild Battle", x: 64, y: 60, enabled: state.game.inWild, action: () => startWildEncounter().catch((e) => setStatus(e.message)) },
    { id: "wild-trainer", label: "Wild Trainer", x: 82, y: 64, enabled: state.game.inWild, action: () => {
      const idx = Number(qs("trainerSelect").value || 0);
      startWildEncounter({ trainerIndex: idx }).catch((e) => setStatus(e.message));
    } },
    { id: "gym", label: "Gym", x: 28, y: 68, enabled: gymAvailable, action: () => startGymBattle().catch((e) => setStatus(e.message)) },
    { id: "tournament", label: "Tournament", x: 48, y: 82, enabled: tournamentAvailable, action: () => startTournamentBattle().catch((e) => setStatus(e.message)) },
  ];

  facilities.forEach((f) => {
    const node = document.createElement("button");
    node.className = "town-node";
    node.style.left = `${f.x}%`;
    node.style.top = `${f.y}%`;
    node.disabled = !f.enabled;
    node.textContent = f.label;
    node.addEventListener("click", f.action);
    canvas.appendChild(node);
  });
}

function renderEncounterSelectors() {
  const region = currentRegion();
  const zoneSelect = qs("wildZoneSelect");
  const wildSelect = qs("wildSelect");
  const trainerSelect = qs("trainerSelect");
  const zone = ensureSelectedWildZone(region);
  const prevZone = zoneSelect.value;
  const prevWild = wildSelect.value;
  const prevTrainer = trainerSelect.value;

  zoneSelect.innerHTML = "";
  (region.wildZones || []).forEach((zoneDef) => {
    const option = document.createElement("option");
    option.value = zoneDef.id;
    option.textContent = zoneDef.name;
    zoneSelect.appendChild(option);
  });

  if ([...zoneSelect.options].some((o) => o.value === prevZone)) {
    zoneSelect.value = prevZone;
    state.game.selectedWildZoneId = prevZone;
  } else if (zone) {
    zoneSelect.value = zone.id;
    state.game.selectedWildZoneId = zone.id;
  }

  const activeZone = currentWildZone(region);
  const pool = activeZone ? activeZone.pool : [];

  wildSelect.innerHTML = "";
  pool.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = toTitle(name);
    wildSelect.appendChild(option);
  });

  if ([...wildSelect.options].some((o) => o.value === prevWild)) wildSelect.value = prevWild;
  if (!wildSelect.options.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No wild Pokemon";
    wildSelect.appendChild(option);
  }

  trainerSelect.innerHTML = "";
  (region.wildTrainers || []).forEach((trainer, idx) => {
    const option = document.createElement("option");
    option.value = String(idx);
    option.textContent = `${trainer.name} (${trainer.team.map(toTitle).join(", ")})`;
    trainerSelect.appendChild(option);
  });
  if ([...trainerSelect.options].some((o) => o.value === prevTrainer)) trainerSelect.value = prevTrainer;
  if (!trainerSelect.options.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No trainers";
    trainerSelect.appendChild(option);
  }
}

function renderJourneyPanel() {
  const region = currentRegion();
  const inWild = state.game.inWild;
  const zone = currentWildZone(region);
  const pool = currentWildPool(region);

  qs("currentRegionInfo").textContent = `Current region: ${region.name}${inWild ? " (In Wild)" : " (Town)"}`;
  qs("wildPoolPreview").innerHTML = `Active wild zone: ${zone ? zone.name : "None"}<br>Possible wild Pokemon: ${pool.slice(0, 10).map((p) => `<span class="wild-chip">${toTitle(p)}</span>`).join("")}`;

  qs("enterWildBtn").disabled = inWild;
  qs("searchWildBtn").disabled = !inWild;
  qs("leaveWildBtn").disabled = !inWild;

  const gym = nextGym();
  qs("gymBtn").disabled = !gym;
  qs("tournamentBtn").disabled = false;

  renderEncounterSelectors();
  qs("startChosenWildBtn").disabled = !inWild || pool.length === 0;
  qs("startChosenTrainerBtn").disabled = !inWild || (region.wildTrainers || []).length === 0;

  const guideLines = [];
  guideLines.push(inWild
    ? "Wild mode active. Use Encounter Selected Wild, Challenge Selected Trainer, or Wild Map cards."
    : "Town mode active. Click Enter Wild to unlock encounters and wild trainer battles.");
  if (gym) {
    if (gym.regionId === region.id) {
      guideLines.push(`Gym ready here: ${gym.name} (${gym.badge}).`);
    } else {
      guideLines.push(`Next gym is ${gym.name} in ${toTitle(gym.regionId)}. Travel from the World Map first.`);
    }
  } else {
    guideLines.push("All gyms cleared. Focus on tournament progression at Indigo Summit.");
  }
  if (state.game.pcStorage.length > 0) {
    guideLines.push(`PC Storage has ${state.game.pcStorage.length} Pokemon. Use Pokemon Center to withdraw.`);
  } else {
    guideLines.push("PC Storage empty. Captures with full party will be sent there.");
  }
  qs("guideText").innerHTML = guideLines.map((line) => `- ${line}`).join("<br>");
}

function renderHub() {
  ensureSelectedWildZone(currentRegion());
  renderTrainerSummary();
  renderTeam();
  renderRegionMap();
  renderTownMap();
  renderJourneyPanel();
  updateObjective();
}

function hpPercent(fighter) {
  return Math.max(0, Math.round((fighter.currentHp / fighter.stats.maxHp) * 100));
}

function moveMultiplier(moveType, defenderTypes) {
  const chart = {
    fire: { grass: 2, ice: 2, bug: 2, steel: 2, water: 0.5, fire: 0.5, rock: 0.5, dragon: 0.5 },
    water: { fire: 2, ground: 2, rock: 2, water: 0.5, grass: 0.5, dragon: 0.5 },
    grass: { water: 2, ground: 2, rock: 2, fire: 0.5, grass: 0.5, poison: 0.5, flying: 0.5, bug: 0.5, dragon: 0.5, steel: 0.5 },
    electric: { water: 2, flying: 2, electric: 0.5, grass: 0.5, dragon: 0.5, ground: 0 },
    ice: { grass: 2, ground: 2, flying: 2, dragon: 2, fire: 0.5, water: 0.5, ice: 0.5, steel: 0.5 },
    fighting: { normal: 2, rock: 2, steel: 2, ice: 2, dark: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, fairy: 0.5, ghost: 0 },
    poison: { grass: 2, fairy: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0 },
    ground: { fire: 2, electric: 2, poison: 2, rock: 2, steel: 2, grass: 0.5, bug: 0.5, flying: 0 },
    flying: { grass: 2, fighting: 2, bug: 2, electric: 0.5, rock: 0.5, steel: 0.5 },
    psychic: { fighting: 2, poison: 2, psychic: 0.5, steel: 0.5, dark: 0 },
    bug: { grass: 2, psychic: 2, dark: 2, fire: 0.5, fighting: 0.5, poison: 0.5, flying: 0.5, ghost: 0.5, steel: 0.5, fairy: 0.5 },
    rock: { fire: 2, ice: 2, flying: 2, bug: 2, fighting: 0.5, ground: 0.5, steel: 0.5 },
    ghost: { psychic: 2, ghost: 2, dark: 0.5, normal: 0 },
    dragon: { dragon: 2, steel: 0.5, fairy: 0 },
    dark: { psychic: 2, ghost: 2, fighting: 0.5, dark: 0.5, fairy: 0.5 },
    steel: { ice: 2, rock: 2, fairy: 2, fire: 0.5, water: 0.5, electric: 0.5, steel: 0.5 },
    fairy: { fighting: 2, dragon: 2, dark: 2, fire: 0.5, poison: 0.5, steel: 0.5 },
    normal: { rock: 0.5, steel: 0.5, ghost: 0 },
  };

  let mult = 1;
  defenderTypes.forEach((defType) => {
    const factor = chart[moveType]?.[defType];
    if (typeof factor === "number") mult *= factor;
  });
  return mult;
}

function damage(attacker, defender, move, guarded) {
  const useSp = move.class === "special";
  const atk = useSp ? attacker.stats.spatk : attacker.stats.atk;
  const def = useSp ? defender.stats.spdef : defender.stats.def;
  const levelFactor = (2 * attacker.level) / 5 + 2;
  const base = ((levelFactor * move.power * atk) / Math.max(1, def)) / 45 + 2;
  const stab = attacker.types.includes(move.type) ? 1.2 : 1;
  const multiplier = moveMultiplier(move.type, defender.types);
  if (multiplier === 0) return { dealt: 0, multiplier };
  const guardFactor = guarded ? 0.55 : 1;
  const variance = 0.85 + Math.random() * 0.15;
  return { dealt: Math.max(1, Math.round(base * stab * multiplier * guardFactor * variance)), multiplier };
}

function estimateDamageRange(attacker, defender, move, guarded = false) {
  const useSp = move.class === "special";
  const atk = useSp ? attacker.stats.spatk : attacker.stats.atk;
  const def = useSp ? defender.stats.spdef : defender.stats.def;
  const levelFactor = (2 * attacker.level) / 5 + 2;
  const base = ((levelFactor * move.power * atk) / Math.max(1, def)) / 45 + 2;
  const stab = attacker.types.includes(move.type) ? 1.2 : 1;
  const multiplier = moveMultiplier(move.type, defender.types);
  if (multiplier === 0) {
    return {
      min: 0,
      max: 0,
      multiplier,
      stab,
      atkStat: useSp ? "Sp. Atk" : "Atk",
      defStat: useSp ? "Sp. Def" : "Def",
    };
  }
  const guardedFactor = guarded ? 0.55 : 1;
  const core = base * stab * multiplier * guardedFactor;
  return {
    min: Math.max(1, Math.round(core * 0.85)),
    max: Math.max(1, Math.round(core)),
    multiplier,
    stab,
    atkStat: useSp ? "Sp. Atk" : "Atk",
    defStat: useSp ? "Sp. Def" : "Def",
  };
}

function moveEffectLabel(multiplier) {
  if (multiplier === 0) return "No effect";
  if (multiplier > 1.01) return "Super effective";
  if (multiplier < 0.99) return "Not very effective";
  return "Normal";
}

function showTeamPicker(show, force = false, title = "Choose Pokemon") {
  qs("teamPickerModal").classList.toggle("hidden", !show);
  if (!show) {
    state.battle.teamPickerForce = false;
    updateTutorialContext();
    return;
  }
  state.battle.teamPickerForce = force;
  qs("teamPickerTitle").textContent = title;
  qs("closeTeamPickerBtn").disabled = force;
  renderTeamPicker();
  updateTutorialContext();
}

function renderTeamPicker() {
  const list = qs("teamPickerList");
  list.innerHTML = "";

  state.game.team.forEach((p, idx) => {
    const row = document.createElement("div");
    row.className = "picker-item";
    row.innerHTML = `<div><strong>${p.name}</strong> Lv.${p.level}<br>HP ${p.currentHp}/${p.stats.maxHp}</div>`;

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Choose";
    btn.disabled = p.currentHp <= 0;
    btn.addEventListener("click", () => {
      const wasLead = state.battle.awaitingLeadChoice;
      state.game.activeIdx = idx;
      if (wasLead) {
        state.battle.awaitingLeadChoice = false;
        state.battle.teamPickerForce = false;
        battleLog(`${p.name}, I choose you!`);
      } else {
        battleLog(`Switched to ${p.name}.`);
      }

      showTeamPicker(false);
      renderHub();
      renderBattle();

      if (!wasLead && state.battle.open) {
        enemyTurn();
        if (allPlayerFainted()) closeBattle(false);
        else {
          autoSwitchIfNeeded();
          renderBattle();
          renderHub();
        }
      }
    });

    row.appendChild(btn);
    list.appendChild(row);
  });
}

function renderMoveInfo() {
  const box = qs("moveInfoBox");
  const player = activePokemon();
  const enemy = state.battle.enemyTeam[state.battle.enemyIdx];
  if (!box || !player || !enemy) {
    if (box) box.innerHTML = "";
    return;
  }

  box.innerHTML = "";
  player.moves.forEach((move) => {
    const info = estimateDamageRange(player, enemy, move, state.battle.enemyGuarded);
    const card = document.createElement("div");
    card.className = "move-card";
    card.innerHTML = `
      <div class="title">${move.label}</div>
      <div class="move-meta">Type: ${toTitle(move.type)} | Class: ${toTitle(move.class)}</div>
      <div class="move-meta">Power: ${move.power} | Accuracy: ${move.accuracy}%</div>
      <div class="move-meta">Attack channel: ${info.atkStat} vs ${info.defStat}</div>
      <div class="move-meta">STAB: ${info.stab > 1 ? "Yes" : "No"} | Multiplier: x${info.multiplier.toFixed(2)}</div>
      <div class="move-meta">Expected damage: ${info.min}-${info.max}</div>
      <div class="move-meta">Vs opponent: ${moveEffectLabel(info.multiplier)}</div>
    `;
    box.appendChild(card);
  });
}

function showBattleModal(show) {
  qs("battleModal").classList.toggle("hidden", !show);
  if (!show) showTeamPicker(false);
  if (show) showWildMap(false);
  if (show) showBattleResult(false);
  if (show) showInventory(false);
  state.battle.open = show;
  updateTutorialContext();
}

function showShop(show) {
  qs("shopModal").classList.toggle("hidden", !show);
  if (show) {
    showInventory(false);
    qs("shopSummary").textContent = `Money: $${state.game.money}. ${inventoryLine()}`;
  }
  updateTutorialContext();
}

function showCenter(show, message = "") {
  qs("centerModal").classList.toggle("hidden", !show);
  if (show) {
    showInventory(false);
    state.ui.centerMessage = message || "Choose center service. Item usage is in Inventory Desk.";
    renderCenterPanel();
  }
  updateTutorialContext();
}

function showInventory(show) {
  qs("inventoryModal").classList.toggle("hidden", !show);
  if (show) {
    showShop(false);
    showCenter(false);
    renderInventoryPanel();
  }
  updateTutorialContext();
}

function inventoryItemCount(itemKey) {
  return Math.max(0, Number(state.game.inventory[itemKey] || 0));
}

function canTargetInventoryItem(itemKey, pokemon) {
  const meta = INVENTORY_ITEM_META[itemKey];
  if (!meta || !pokemon) return false;
  if (meta.targetMode === "fainted") return pokemon.currentHp <= 0;
  return true;
}

function inventoryTargetReason(itemKey, pokemon) {
  const meta = INVENTORY_ITEM_META[itemKey];
  if (!meta || !pokemon) return "Invalid target.";
  if (meta.targetMode === "fainted" && pokemon.currentHp > 0) return "Needs fainted Pokemon.";
  return "Ready.";
}

function applyInventoryItem(itemKey, teamIdx) {
  const meta = INVENTORY_ITEM_META[itemKey];
  if (!meta) return;
  const target = state.game.team[teamIdx];
  if (!target) return;
  const count = inventoryItemCount(itemKey);
  if (count <= 0) {
    state.ui.inventoryMessage = `No ${meta.name} available.`;
    renderInventoryPanel();
    return;
  }
  if (!canTargetInventoryItem(itemKey, target)) {
    state.ui.inventoryMessage = `${meta.name} cannot be used on ${target.name}. ${inventoryTargetReason(itemKey, target)}`;
    renderInventoryPanel();
    return;
  }

  state.game.inventory[itemKey] -= 1;

  if (itemKey === "revive") {
    target.currentHp = Math.max(1, Math.floor(target.stats.maxHp * 0.5));
    state.ui.inventoryMessage = `${meta.name} used on ${target.name}. HP ${target.currentHp}/${target.stats.maxHp}.`;
  } else if (itemKey === "fullRevive") {
    target.currentHp = target.stats.maxHp;
    state.ui.inventoryMessage = `${meta.name} used on ${target.name}. HP ${target.currentHp}/${target.stats.maxHp}.`;
  } else if (itemKey === "expCandy") {
    const previousActive = state.game.activeIdx;
    state.game.activeIdx = teamIdx;
    const expInfo = awardExp(70);
    state.game.activeIdx = previousActive;
    const levelInfo = expInfo.levelUps.length ? ` Level ups: ${expInfo.levelUps.join(", ")}.` : "";
    state.ui.inventoryMessage = `${meta.name} used on ${target.name}. +${expInfo.expGained} EXP. Level ${expInfo.fromLevel} -> ${expInfo.toLevel}.${levelInfo}`;
  }

  log(state.ui.inventoryMessage);
  persistGame();
  renderHub();
  renderInventoryPanel();
}

function renderInventoryPanel() {
  const selected = INVENTORY_USABLE_ITEMS.includes(state.ui.inventorySelectedItem)
    ? state.ui.inventorySelectedItem
    : INVENTORY_USABLE_ITEMS[0];
  state.ui.inventorySelectedItem = selected;
  const selectedMeta = INVENTORY_ITEM_META[selected];
  qs("inventorySummary").textContent = `Money: $${state.game.money}. ${inventoryLine()} ${state.ui.inventoryMessage ? `| ${state.ui.inventoryMessage}` : "| Select an item on left, then apply to Pokemon on right."}`;

  const itemsList = qs("inventoryItems");
  itemsList.innerHTML = "";
  INVENTORY_USABLE_ITEMS.forEach((itemKey) => {
    const meta = INVENTORY_ITEM_META[itemKey];
    const row = document.createElement("div");
    row.className = `pc-item inventory-item ${itemKey === selected ? "active" : ""}`;

    const main = document.createElement("div");
    main.className = "pc-main";
    main.innerHTML = `
      <strong>${meta.name}</strong>
      <span class="pc-note">Owned: ${inventoryItemCount(itemKey)}</span>
      <span class="pc-note">${meta.description}</span>
    `;

    const controls = document.createElement("div");
    controls.className = "row-actions";
    const selectBtn = document.createElement("button");
    selectBtn.className = "btn";
    selectBtn.textContent = itemKey === selected ? "Selected" : "Select";
    selectBtn.disabled = itemKey === selected;
    selectBtn.addEventListener("click", () => {
      state.ui.inventorySelectedItem = itemKey;
      renderInventoryPanel();
    });
    controls.appendChild(selectBtn);
    row.appendChild(main);
    row.appendChild(controls);
    itemsList.appendChild(row);
  });

  const targetList = qs("inventoryTargets");
  targetList.innerHTML = "";
  if (!state.game.team.length) {
    targetList.innerHTML = `<div class="region-info">No party Pokemon available.</div>`;
    return;
  }

  state.game.team.forEach((pokemon, idx) => {
    const row = document.createElement("div");
    row.className = "pc-item";

    const main = document.createElement("div");
    main.className = "pc-main";
    const reason = inventoryTargetReason(selected, pokemon);
    main.innerHTML = pokemonInfoMarkup(pokemon, {
      showExp: true,
      extra: `${selectedMeta.name}: ${reason}`,
    });

    const controls = document.createElement("div");
    controls.className = "row-actions";
    const useBtn = document.createElement("button");
    useBtn.className = "btn primary";
    useBtn.textContent = `Use ${selectedMeta.name}`;
    useBtn.disabled = inventoryItemCount(selected) <= 0 || !canTargetInventoryItem(selected, pokemon);
    useBtn.addEventListener("click", () => applyInventoryItem(selected, idx));
    controls.appendChild(useBtn);

    row.appendChild(main);
    row.appendChild(controls);
    targetList.appendChild(row);
  });
}

function movePartyPokemonToPc(idx) {
  if (state.game.team.length <= 1) {
    state.ui.centerMessage = "You must keep at least one Pokemon in party.";
    renderCenterPanel();
    return;
  }
  const [moved] = state.game.team.splice(idx, 1);
  if (!moved) return;
  state.game.pcStorage.push(moved);

  if (state.game.activeIdx === idx) {
    const alive = firstAliveTeamIndex();
    state.game.activeIdx = alive >= 0 ? alive : 0;
  } else if (state.game.activeIdx > idx) {
    state.game.activeIdx -= 1;
  }
  if (state.game.activeIdx >= state.game.team.length) state.game.activeIdx = Math.max(0, state.game.team.length - 1);

  state.ui.centerMessage = `${moved.name} moved from party to PC.`;
  persistGame();
  renderHub();
  renderCenterPanel();
}

function renderPartyTransferList() {
  const list = qs("partyTransferList");
  list.innerHTML = "";
  if (!state.game.team.length) {
    const empty = document.createElement("div");
    empty.className = "region-info";
    empty.textContent = "Party is empty.";
    list.appendChild(empty);
    return;
  }

  state.game.team.forEach((pokemon, idx) => {
    const row = document.createElement("div");
    row.className = "pc-item";

    const main = document.createElement("div");
    main.className = "pc-main";
    const isActive = idx === state.game.activeIdx;
    main.innerHTML = pokemonInfoMarkup(pokemon, {
      showExp: true,
      extra: isActive ? "Currently active Pokemon." : "",
    });

    const controls = document.createElement("div");
    controls.className = "row-actions";

    const sendBtn = document.createElement("button");
    sendBtn.className = "btn ghost";
    sendBtn.textContent = "Send To PC";
    sendBtn.disabled = state.game.team.length <= 1;
    sendBtn.addEventListener("click", () => movePartyPokemonToPc(idx));

    controls.appendChild(sendBtn);
    row.appendChild(main);
    row.appendChild(controls);
    list.appendChild(row);
  });
}

function renderPcStorageList() {
  const list = qs("pcStorageList");
  list.innerHTML = "";
  if (!state.game.pcStorage.length) {
    const empty = document.createElement("div");
    empty.className = "region-info";
    empty.textContent = "PC is empty.";
    list.appendChild(empty);
    return;
  }

  state.game.pcStorage.forEach((pokemon, idx) => {
    const row = document.createElement("div");
    row.className = "pc-item";

    const main = document.createElement("div");
    main.className = "pc-main";
    main.innerHTML = pokemonInfoMarkup(pokemon, { showExp: true });

    const controls = document.createElement("div");
    controls.className = "row-actions";

    const withdrawBtn = document.createElement("button");
    withdrawBtn.className = "btn";
    withdrawBtn.textContent = "Withdraw";
    withdrawBtn.disabled = state.game.team.length >= 6;
    withdrawBtn.addEventListener("click", async () => {
      if (state.game.team.length >= 6) {
        state.ui.centerMessage = "Party is full. Make room before withdrawing.";
        renderCenterPanel();
        return;
      }
      const [picked] = state.game.pcStorage.splice(idx, 1);
      await ensureFighterMoves(picked);
      state.game.team.push(picked);
      state.ui.centerMessage = `${picked.name} moved from PC to party.`;
      persistGame();
      renderHub();
      renderCenterPanel();
    });

    const releaseBtn = document.createElement("button");
    releaseBtn.className = "btn ghost";
    releaseBtn.textContent = "Release (+100)";
    releaseBtn.addEventListener("click", () => {
      const [released] = state.game.pcStorage.splice(idx, 1);
      state.game.money += 100;
      state.ui.centerMessage = `${released.name} released. You received $100 support funds.`;
      persistGame();
      renderHub();
      renderCenterPanel();
    });

    controls.appendChild(withdrawBtn);
    controls.appendChild(releaseBtn);
    row.appendChild(main);
    row.appendChild(controls);
    list.appendChild(row);
  });
}

function renderEvolutionList(token) {
  const list = qs("evolutionList");
  list.innerHTML = `<div class="region-info">Checking evolution requirements...</div>`;
  const snapshot = state.game.team.map((p) => p.id).join("|");

  Promise.all(state.game.team.map(async (pokemon, idx) => ({ pokemon, idx, evo: await getEvolutionStatus(pokemon) })))
    .then((entries) => {
      if (state.ui.centerRenderToken !== token) return;
      if (snapshot !== state.game.team.map((p) => p.id).join("|")) return;
      list.innerHTML = "";

      if (!entries.length) {
        list.innerHTML = `<div class="region-info">No party Pokemon available.</div>`;
        return;
      }

      entries.forEach(({ pokemon, idx, evo }) => {
        const row = document.createElement("div");
        row.className = "pc-item";

        const main = document.createElement("div");
        main.className = "pc-main";

        const optionText = evo.options.length
          ? evo.options.map((opt) => `${toTitle(opt.to)}: ${opt.reason}`).join(" | ")
          : "No further evolution path.";
        main.innerHTML = pokemonInfoMarkup(pokemon, { showExp: true, extra: optionText });

        const controls = document.createElement("div");
        controls.className = "row-actions";

        const choice = evo.eligible[0];
        const evolveBtn = document.createElement("button");
        evolveBtn.className = "btn primary";
        evolveBtn.textContent = choice ? `Evolve -> ${toTitle(choice.to)}` : "Not Ready";
        evolveBtn.disabled = !choice;
        evolveBtn.addEventListener("click", async () => {
          const result = await evolvePokemonAtIndex(idx, choice ? choice.to : "");
          state.ui.centerMessage = result.message;
          if (result.ok) {
            persistGame();
            renderHub();
          }
          renderCenterPanel();
        });

        controls.appendChild(evolveBtn);
        row.appendChild(main);
        row.appendChild(controls);
        list.appendChild(row);
      });
    })
    .catch(() => {
      if (state.ui.centerRenderToken !== token) return;
      list.innerHTML = `<div class="region-info">Failed to load evolution data.</div>`;
    });
}

function renderCenterPanel() {
  const fainted = state.game.team.filter((p) => p.currentHp <= 0).length;
  qs("centerSummary").textContent = `Nurse: Party ${state.game.team.length}/6, PC ${state.game.pcStorage.length}, fainted ${fainted}. For Revive/Candy usage, open Inventory Desk.`;
  qs("centerActionLog").textContent = state.ui.centerMessage || "Choose service.";
  renderPartyTransferList();
  renderPcStorageList();
  state.ui.centerRenderToken += 1;
  renderEvolutionList(state.ui.centerRenderToken);
}

function showBattleResult(show, report = null) {
  qs("battleResultModal").classList.toggle("hidden", !show);
  if (!show) {
    state.ui.battleResult = null;
    updateTutorialContext();
    return;
  }
  if (report) state.ui.battleResult = report;
  renderBattleResult();
  refreshBattleResultEvolution().catch(() => {
    // ignore evolution lookup failures
  });
  updateTutorialContext();
}

function renderBattleResult() {
  const report = state.ui.battleResult;
  if (!report) return;

  qs("resultTitle").textContent = report.title || "Battle Result";
  qs("resultSummary").textContent = report.summary || "Battle completed.";
  const details = qs("resultDetails");
  details.innerHTML = "";
  (report.details || []).forEach((line) => {
    const div = document.createElement("div");
    div.className = "log-line";
    div.textContent = line;
    details.appendChild(div);
  });

  const evoBtn = qs("evolveBtn");
  if (report.evolution?.eligible?.length) {
    const target = report.evolution.eligible[0];
    evoBtn.disabled = false;
    evoBtn.textContent = `Evolve to ${toTitle(target.to)}`;
  } else {
    evoBtn.disabled = true;
    evoBtn.textContent = "No Evolution Available";
  }
}

async function refreshBattleResultEvolution() {
  if (!state.ui.battleResult) return;
  const fighter = activePokemon();
  if (!fighter) return;
  const evo = await getEvolutionStatus(fighter);
  state.ui.battleResult.evolution = evo;
  const currentName = toTitle(fighter.speciesName);
  const lines = (evo.lines || []).filter((line) => line.startsWith(`${currentName} ->`)).slice(0, 6);
  const existing = (state.ui.battleResult.details || []).filter((line) => !line.startsWith("Evolution:") && !line.startsWith("- ") && !line.startsWith("Eligible now:") && !line.startsWith("Current evolution options:"));
  if (lines.length) {
    existing.push("Evolution:");
    lines.forEach((line) => existing.push(`- ${line}`));
  }
  if (evo.options.length) {
    existing.push("Current evolution options:");
    evo.options.forEach((opt) => existing.push(`- ${toTitle(fighter.speciesName)} -> ${toTitle(opt.to)}: ${opt.reason}`));
  }
  if (evo.eligible.length) {
    existing.push(`Eligible now: ${toTitle(fighter.speciesName)} -> ${toTitle(evo.eligible[0].to)}`);
  }
  state.ui.battleResult.details = existing;
  renderBattleResult();
}

function renderWildMap() {
  const region = currentRegion();
  const zonesWrap = qs("wildMapZones");
  const zone = currentWildZone(region);
  const trainerNames = (region.wildTrainers || []).map((t) => t.name).join(", ") || "None";
  qs("wildMapSummary").textContent = `${region.name} wild map. Zone-based Pokemon pools + wild trainers: ${trainerNames}.`;
  zonesWrap.innerHTML = "";

  (region.wildZones || []).forEach((zoneDef) => {
    const card = document.createElement("div");
    card.className = "wild-zone-card";
    const isActive = zone && zone.id === zoneDef.id;
    card.innerHTML = `
      <strong>${zoneDef.name}${isActive ? " (Selected)" : ""}</strong>
      <div class="wild-zone-pool">${zoneDef.pool.map(toTitle).join(", ")}</div>
    `;

    const row = document.createElement("div");
    row.className = "row-actions";

    const selectBtn = document.createElement("button");
    selectBtn.className = "btn";
    selectBtn.textContent = "Select Zone";
    selectBtn.disabled = isActive;
    selectBtn.addEventListener("click", () => {
      state.game.selectedWildZoneId = zoneDef.id;
      renderHub();
      renderWildMap();
    });

    const fightBtn = document.createElement("button");
    fightBtn.className = "btn";
    fightBtn.textContent = "Encounter Random";
    fightBtn.disabled = !state.game.inWild;
    fightBtn.addEventListener("click", () => {
      state.game.selectedWildZoneId = zoneDef.id;
      startWildEncounter().catch((e) => setStatus(e.message));
    });

    row.appendChild(selectBtn);
    row.appendChild(fightBtn);

    const trainerBtn = document.createElement("button");
    trainerBtn.className = "btn";
    trainerBtn.textContent = "Battle Trainer";
    trainerBtn.disabled = !state.game.inWild || !(region.wildTrainers || []).length;
    trainerBtn.addEventListener("click", () => {
      const idx = Number(qs("trainerSelect").value || 0);
      startWildEncounter({ trainerIndex: idx }).catch((e) => setStatus(e.message));
    });
    row.appendChild(trainerBtn);

    card.appendChild(row);
    zonesWrap.appendChild(card);
  });
}

function showWildMap(show) {
  qs("wildMapModal").classList.toggle("hidden", !show);
  if (show) renderWildMap();
  updateTutorialContext();
}

function trackBattleParticipants(player, enemy) {
  if (!Array.isArray(state.battle.playerUsed)) state.battle.playerUsed = [];
  if (!Array.isArray(state.battle.enemyUsed)) state.battle.enemyUsed = [];
  if (player?.name && !state.battle.playerUsed.includes(player.name)) state.battle.playerUsed.push(player.name);
  if (enemy?.name && !state.battle.enemyUsed.includes(enemy.name)) state.battle.enemyUsed.push(enemy.name);
}

function renderBattle() {
  const enemy = state.battle.enemyTeam[state.battle.enemyIdx];
  const player = activePokemon();
  if (!enemy || !player) return;

  if (!state.battle.awaitingLeadChoice) trackBattleParticipants(player, enemy);

  qs("battleTitle").textContent = state.battle.label;
  qs("runAwayBtn").disabled = !state.battle.canRun || state.battle.awaitingLeadChoice;

  qs("enemyLabel").textContent = `${enemy.name} Lv.${enemy.level}`;
  qs("enemySprite").src = enemy.sprite;
  qs("enemyHpBar").style.width = `${hpPercent(enemy)}%`;
  qs("enemyHpText").textContent = `${enemy.currentHp}/${enemy.stats.maxHp}`;
  renderTypes(qs("enemyTypes"), enemy.types);

  qs("playerLabel").textContent = `${player.name} Lv.${player.level}`;
  qs("playerSprite").src = player.sprite;
  qs("playerHpBar").style.width = `${hpPercent(player)}%`;
  qs("playerHpText").textContent = `${player.currentHp}/${player.stats.maxHp}`;
  renderTypes(qs("playerTypes"), player.types);

  const aliveCount = state.game.team.filter((p) => p.currentHp > 0).length;
  document.querySelectorAll(".action-btn").forEach((btn) => {
    const action = btn.dataset.action;
    if (action.startsWith("move")) {
      const idx = Number(action.replace("move", ""));
      const move = player.moves[idx];
      btn.textContent = move ? `${move.label} [${toTitle(move.type)} | ${move.power} | ${move.accuracy}%]` : "No Move";
      btn.disabled = !move || state.battle.awaitingLeadChoice;
    }

    if (action === "switch") {
      btn.textContent = "Switch Pokemon";
      btn.disabled = aliveCount <= 1;
    }

    if (action === "potion") {
      btn.textContent = `Use Potion (${state.game.inventory.potion}/${state.game.inventory.superPotion})`;
      btn.disabled = (state.game.inventory.potion <= 0 && state.game.inventory.superPotion <= 0) || state.battle.awaitingLeadChoice;
    }

    if (action === "guard") {
      btn.disabled = state.battle.awaitingLeadChoice;
    }

    if (action === "pokeball") {
      btn.textContent = `Throw Pokeball (${state.game.inventory.pokeball})`;
      btn.disabled = state.battle.mode !== "wild" || state.game.inventory.pokeball <= 0 || state.battle.awaitingLeadChoice;
    }
  });

  renderMoveInfo();
}

function chooseEnemyMove(enemy, player) {
  const options = enemy.moves.map((move, idx) => ({ idx, score: move.power * moveMultiplier(move.type, player.types) }));
  options.sort((a, b) => b.score - a.score);
  if (!options.length) return 0;
  if (options.length === 1) return options[0].idx;
  if (options.length === 2) return Math.random() < 0.75 ? options[0].idx : options[1].idx;
  const roll = Math.random();
  if (roll < 0.6) return options[0].idx;
  if (roll < 0.82) return options[1].idx;
  if (roll < 0.94) return options[2].idx;
  return options[3].idx;
}

function setHit(id) {
  const el = qs(id);
  el.classList.add("hit");
  setTimeout(() => el.classList.remove("hit"), 220);
}

function allPlayerFainted() {
  return state.game.team.every((p) => p.currentHp <= 0);
}

function autoSwitchIfNeeded() {
  const current = activePokemon();
  if (current && current.currentHp > 0) return false;
  const idx = firstAliveTeamIndex();
  if (idx >= 0) {
    state.game.activeIdx = idx;
    battleLog(`${state.game.team[idx].name}, go!`);
    return true;
  }
  return false;
}

function healActive(amount) {
  const p = activePokemon();
  const before = p.currentHp;
  p.currentHp = Math.min(p.stats.maxHp, p.currentHp + amount);
  return p.currentHp - before;
}

function usePotionInBattle() {
  if (state.game.inventory.superPotion > 0) {
    state.game.inventory.superPotion -= 1;
    const healed = healActive(50);
    battleLog(`${activePokemon().name} healed ${healed} HP with Super Potion.`);
    return true;
  }
  if (state.game.inventory.potion > 0) {
    state.game.inventory.potion -= 1;
    const healed = healActive(25);
    battleLog(`${activePokemon().name} healed ${healed} HP with Potion.`);
    return true;
  }
  return false;
}

function attemptCapture(enemy) {
  state.game.inventory.pokeball -= 1;
  const hpRatio = enemy.currentHp / enemy.stats.maxHp;
  const catchStat = Math.max(20, enemy.captureRate || 45);
  const chance = Math.min(0.88, 0.12 + (1 - hpRatio) * 0.62 + catchStat / 500);
  const caught = Math.random() < chance;

  if (caught) {
    battleLog(`Captured ${enemy.name}!`);
    if (state.game.team.length < 6) {
      enemy.currentHp = enemy.stats.maxHp;
      state.game.team.push(enemy);
      log(`${enemy.name} joined your party.`);
      return { caught: true, target: "party", name: enemy.name };
    } else {
      enemy.currentHp = enemy.stats.maxHp;
      state.game.pcStorage.push(enemy);
      log(`Party full. ${enemy.name} was sent to PC storage.`);
      return { caught: true, target: "pc", name: enemy.name };
    }
  } else {
    battleLog(`Pokeball failed. ${enemy.name} broke free.`);
    return { caught: false, target: null, name: enemy.name };
  }
}

function grantRewards(victory) {
  if (!victory) {
    const loss = Math.min(350, Math.floor(state.game.money * 0.12));
    state.game.money -= loss;
    state.game.team.forEach((p) => { p.currentHp = Math.max(1, Math.floor(p.stats.maxHp * 0.4)); });
    log(`Defeated. Retreating with $${loss} lost.`);
    return -loss;
  }

  state.game.money += state.battle.reward;
  state.game.totalWins += 1;
  log(`Victory. Earned $${state.battle.reward}.`);
  return state.battle.reward;
}

function awardExp(amount) {
  const p = activePokemon();
  const fromLevel = p.level;
  const levelUps = [];
  p.exp += amount;

  while (p.exp >= p.expToNext) {
    p.exp -= p.expToNext;
    p.level += 1;
    p.expToNext = expThreshold(p.level);

    const previousMaxHp = p.stats.maxHp;
    const recalc = scaledStats(p.baseStats, p.level);
    if (recalc.maxHp <= previousMaxHp) recalc.maxHp = previousMaxHp + 1;
    const hpDelta = recalc.maxHp - previousMaxHp;
    p.stats = { maxHp: recalc.maxHp, atk: recalc.atk, def: recalc.def, spatk: recalc.spatk, spdef: recalc.spdef, speed: recalc.speed };
    p.currentHp = Math.min(p.stats.maxHp, p.currentHp + Math.max(1, hpDelta));
    log(`${p.name} leveled up to ${p.level}.`);
    levelUps.push(p.level);
  }
  return { expGained: amount, fromLevel, toLevel: p.level, levelUps };
}

function commitBattleHistory(header) {
  const events = Array.isArray(state.battle.history) ? state.battle.history : [];
  if (!events.length) return;
  log(`${header}: ${state.battle.label}`);
  const recent = events.slice(-8);
  for (let i = recent.length - 1; i >= 0; i -= 1) {
    log(`- ${recent[i]}`);
  }
}

function closeBattle(victory, captured = false, meta = {}) {
  const mode = state.battle.mode;
  const captureName = meta.capture?.name || "Pokemon";
  const report = {
    title: captured ? "Capture Result" : victory ? "Victory" : "Defeat",
    summary: "",
    details: [],
    evolution: { lines: [], options: [], eligible: [] },
  };

  let badgeEarned = null;
  let tournamentProgress = null;
  let moneyDelta = 0;
  let expInfo = { expGained: 0, fromLevel: activePokemon()?.level || 0, toLevel: activePokemon()?.level || 0, levelUps: [] };

  if (captured) {
    const capture = meta.capture;
    if (capture?.target === "party") report.details.push(`Captured ${capture.name} and added to party.`);
    if (capture?.target === "pc") report.details.push(`Captured ${capture.name} and sent to PC storage.`);
    commitBattleHistory("Capture");
  } else {
    if (mode === "gym" && victory) {
      const gym = nextGym();
      if (gym) {
        state.game.badges.push(gym.badge);
        state.game.gymIndex += 1;
        badgeEarned = gym.badge;
        log(`Gym defeated. Earned ${gym.badge}.`);
      }
    }

    if (mode === "tournament" && victory) {
      const round = TOURNAMENT[state.game.tournamentIndex];
      state.game.tournamentIndex += 1;
      tournamentProgress = round.name;
      log(`${round.name} defeated.`);
      if (state.game.tournamentIndex >= TOURNAMENT.length) {
        log("Tournament complete. You are Champion.");
      }
    }

    moneyDelta = grantRewards(victory);
    if (victory) expInfo = awardExp(randInt(25, 55) + state.battle.enemyIdx * 9);
    commitBattleHistory(victory ? "Battle Won" : "Battle Lost");
  }

  report.summary = captured
    ? `You captured ${captureName}.`
    : victory
      ? `You won against ${state.battle.label}.`
      : `You lost against ${state.battle.label}.`;

  const playerTotal = state.game.team.length;
  const playerReady = state.game.team.filter((p) => p.currentHp > 0).length;
  const enemyTotal = state.battle.enemyTeam.length;
  const enemyDefeated = state.battle.enemyTeam.filter((p) => p.currentHp <= 0).length;
  const playerUsed = (state.battle.playerUsed || []).join(", ") || "Unknown";
  const enemyUsed = (state.battle.enemyUsed || []).join(", ") || "Unknown";

  report.details.push(captured ? "Result: Capture successful." : victory ? "Result: You won the battle." : "Result: You were defeated.");
  report.details.push(`Battle: ${state.battle.label}`);
  report.details.push(`Mode: ${toTitle(mode)}`);
  report.details.push(`Your team status: ${playerReady}/${playerTotal} ready`);
  report.details.push(`Opponent defeated: ${enemyDefeated}/${enemyTotal}`);
  report.details.push(`Your Pokemon used: ${playerUsed}`);
  report.details.push(`Opponent Pokemon used: ${enemyUsed}`);
  if (!captured) {
    report.details.push(`Money: ${moneyDelta >= 0 ? "+" : ""}$${moneyDelta}`);
    report.details.push(`EXP gained: ${expInfo.expGained}`);
    report.details.push(`Level: ${expInfo.fromLevel} -> ${expInfo.toLevel}`);
    if (expInfo.levelUps.length) report.details.push(`Level ups: ${expInfo.levelUps.join(", ")}`);
  } else {
    report.details.push("Money: +$0");
    report.details.push("EXP gained: 0");
  }
  if (!victory && mode === "gym") report.details.push("Gym challenge failed. Heal and retry when ready.");
  const active = activePokemon();
  if (active) report.details.push(`Active Pokemon now: ${active.name} HP ${active.currentHp}/${active.stats.maxHp}`);
  if (badgeEarned) report.details.push(`Badge earned: ${badgeEarned}`);
  if (tournamentProgress) report.details.push(`Tournament round cleared: ${tournamentProgress}`);

  showBattleModal(false);
  renderHub();
  persistGame();
  showBattleResult(true, report);
}

function closeBattleEscaped() {
  const playerTotal = state.game.team.length;
  const playerReady = state.game.team.filter((p) => p.currentHp > 0).length;
  const enemyTotal = state.battle.enemyTeam.length;
  const enemyRemaining = state.battle.enemyTeam.filter((p) => p.currentHp > 0).length;
  const playerUsed = (state.battle.playerUsed || []).join(", ") || "Unknown";
  const enemyUsed = (state.battle.enemyUsed || []).join(", ") || "Unknown";

  const report = {
    title: "Escaped",
    summary: `You escaped from ${state.battle.label}.`,
    details: [
      "Result: You escaped safely.",
      `Battle: ${state.battle.label}`,
      `Mode: ${toTitle(state.battle.mode)}`,
      `Your team status: ${playerReady}/${playerTotal} ready`,
      `Opponent remaining: ${enemyRemaining}/${enemyTotal}`,
      `Your Pokemon used: ${playerUsed}`,
      `Opponent Pokemon used: ${enemyUsed}`,
      "Money: +$0",
      "EXP gained: 0",
    ],
    evolution: { lines: [], options: [], eligible: [] },
  };
  commitBattleHistory("Escaped");
  showBattleModal(false);
  renderHub();
  persistGame();
  showBattleResult(true, report);
}

function nextEnemyOrWin() {
  const enemy = state.battle.enemyTeam[state.battle.enemyIdx];
  if (enemy.currentHp > 0) return false;

  state.battle.enemyIdx += 1;
  if (state.battle.enemyIdx >= state.battle.enemyTeam.length) {
    closeBattle(true);
    return true;
  }

  const next = state.battle.enemyTeam[state.battle.enemyIdx];
  battleLog(`Opponent sent ${next.name}.`);
  return false;
}

function enemyTurn() {
  const player = activePokemon();
  const enemy = state.battle.enemyTeam[state.battle.enemyIdx];
  if (!player || !enemy) return;
  if (enemy.currentHp <= 0 || player.currentHp <= 0) return;

  if (Math.random() < 0.12) {
    state.battle.enemyGuarded = true;
    battleLog(`${enemy.name} is guarding.`);
    return;
  }

  const move = enemy.moves[chooseEnemyMove(enemy, player)];
  const hit = Math.random() * 100 <= move.accuracy;
  if (!hit) {
    battleLog(`${enemy.name}'s ${move.label} missed.`);
    return;
  }

  const { dealt, multiplier } = damage(enemy, player, move, state.battle.playerGuarded);
  player.currentHp = Math.max(0, player.currentHp - dealt);
  state.battle.playerGuarded = false;
  battleLog(`${enemy.name} used ${move.label} for ${dealt} damage.`);
  if (multiplier > 1.01) battleLog("Super effective.");
  if (multiplier > 0 && multiplier < 1) battleLog("Not very effective.");
  if (multiplier === 0) battleLog("No effect.");
  setHit("playerCard");
}

function playerMoveTurn(moveIdx) {
  const player = activePokemon();
  const enemy = state.battle.enemyTeam[state.battle.enemyIdx];
  const move = player.moves[moveIdx];
  if (!move) return;

  const hit = Math.random() * 100 <= move.accuracy;
  if (!hit) {
    battleLog(`${player.name}'s ${move.label} missed.`);
    return;
  }

  const { dealt, multiplier } = damage(player, enemy, move, state.battle.enemyGuarded);
  enemy.currentHp = Math.max(0, enemy.currentHp - dealt);
  state.battle.enemyGuarded = false;
  battleLog(`${player.name} used ${move.label} for ${dealt} damage.`);
  if (multiplier > 1.01) battleLog("Super effective.");
  if (multiplier > 0 && multiplier < 1) battleLog("Not very effective.");
  if (multiplier === 0) battleLog("No effect.");
  setHit("enemyCard");
}

function runPlayerAction(action) {
  const player = activePokemon();
  const enemy = state.battle.enemyTeam[state.battle.enemyIdx];
  if (!player || !enemy) return;

  if (action === "switch") {
    showTeamPicker(true, false, "Choose Pokemon to switch");
    return;
  }

  if (state.battle.awaitingLeadChoice) {
    battleLog("Choose your lead Pokemon first.");
    return;
  }

  if (action === "guard") {
    state.battle.playerGuarded = true;
    battleLog(`${player.name} is guarding.`);
  }

  if (action === "potion") {
    if (!usePotionInBattle()) {
      battleLog("No potion available.");
      return;
    }
  }

  if (action === "pokeball") {
    if (state.battle.mode !== "wild") {
      battleLog("Only wild Pokemon can be captured.");
      return;
    }
    if (state.game.inventory.pokeball <= 0) {
      battleLog("No Pokeballs left.");
      return;
    }
    const capture = attemptCapture(enemy);
    if (capture.caught) {
      closeBattle(true, true, { capture });
      return;
    }
  }

  if (action.startsWith("move")) {
    const idx = Number(action.replace("move", ""));
    playerMoveTurn(idx);
    if (enemy.currentHp <= 0) {
      const done = nextEnemyOrWin();
      renderBattle();
      if (!done) renderHub();
      return;
    }
  }

  enemyTurn();
  if (allPlayerFainted()) {
    closeBattle(false);
    return;
  }

  autoSwitchIfNeeded();
  renderBattle();
  renderHub();
}

async function buildTeamFromNames(names, levelBase) {
  const output = [];
  for (let i = 0; i < names.length; i += 1) {
    const species = await getPokemon(names[i]);
    const level = levelBase + i;
    const moves = await selectMoves(species, 4);
    output.push(createFighter(species, level, { moves }));
  }
  return output;
}

async function startBattle(mode, enemyNames, label, options = {}) {
  const aliveIdx = firstAliveTeamIndex();
  if (aliveIdx < 0) {
    log("All Pokemon fainted. Heal at Pokemon Center.");
    return;
  }

  if (!activePokemon() || activePokemon().currentHp <= 0) state.game.activeIdx = aliveIdx;
  await ensurePartyMovesReady();

  setStatus(`Preparing ${label}...`);
  qs("battleLog").innerHTML = "";

  const enemyTeam = await buildTeamFromNames(enemyNames, options.levelBase || 5);
  const aliveCount = state.game.team.filter((p) => p.currentHp > 0).length;

  state.battle = {
    open: true,
    mode,
    canRun: options.canRun ?? (mode === "wild"),
    reward: options.reward || 150,
    label,
    playerGuarded: false,
    enemyGuarded: false,
    enemyTeam,
    enemyIdx: 0,
    awaitingLeadChoice: aliveCount > 1,
    teamPickerForce: aliveCount > 1,
    history: [],
    playerUsed: [],
    enemyUsed: [],
  };

  showBattleModal(true);
  battleLog(`${label} started.`);
  renderBattle();

  if (aliveCount > 1) {
    battleLog("Choose your lead Pokemon after seeing opponent.");
    showTeamPicker(true, true, "Select lead Pokemon");
  }

  setStatus("Ready.");
}

async function startWildEncounter(options = {}) {
  if (!state.game.inWild) {
    state.game.inWild = true;
    log(`Entered wild area of ${currentRegion().name}.`);
    renderHub();
  }

  const region = currentRegion();
  if (typeof options.trainerIndex === "number" && region.wildTrainers?.[options.trainerIndex]) {
    const trainer = region.wildTrainers[options.trainerIndex];
    log(`Wild trainer encounter: ${trainer.name}.`);
    await startBattle("trainer", trainer.team, `Wild Trainer: ${trainer.name}`, {
      levelBase: trainer.levelBase,
      reward: trainer.reward,
      canRun: true,
    });
    return;
  }

  const pool = currentWildPool(region);
  if (!pool.length) {
    log(`No wild Pokemon available in ${region.name}.`);
    return;
  }

  if (typeof options.wildName === "string" && pool.includes(options.wildName)) {
    const active = activePokemon();
    const level = Math.max(3, active.level + randInt(-3, 2));
    const reward = randInt(120, 280) + level * 8;
    log(`You tracked ${toTitle(options.wildName)} in ${region.name}.`);
    await startBattle("wild", [options.wildName], `Wild ${toTitle(options.wildName)} appeared`, {
      levelBase: level,
      reward,
      canRun: true,
    });
    return;
  }

  const active = activePokemon();
  const wildName = randomFrom(pool);
  const level = Math.max(3, active.level + randInt(-3, 2));
  const reward = randInt(120, 280) + level * 8;
  log(`Wild ${toTitle(wildName)} appeared in ${region.name}.`);

  await startBattle("wild", [wildName], `Wild ${toTitle(wildName)} appeared`, {
    levelBase: level,
    reward,
    canRun: true,
  });
}

async function startGymBattle() {
  const gym = nextGym();
  if (!gym) {
    log("All gyms completed.");
    return;
  }

  if (state.game.inWild) {
    log("Exit wild area before entering a gym challenge.");
    return;
  }

  if (gym.regionId !== currentRegion().id) {
    log(`Travel to ${toTitle(gym.regionId)} region for ${gym.name}.`);
    return;
  }

  await startBattle("gym", gym.team, `${gym.name} Challenge`, {
    levelBase: gym.minLevel,
    reward: gym.reward,
    canRun: false,
  });
}

async function startTournamentBattle() {
  if (state.game.inWild) {
    log("Exit wild area before entering tournament battles.");
    return;
  }

  if (state.game.badges.length < GYMS.length) {
    log("Earn all 8 badges to unlock tournament.");
    return;
  }

  if (currentRegion().id !== "indigo") {
    log("Travel to Indigo Summit for tournament.");
    return;
  }

  if (state.game.tournamentIndex >= TOURNAMENT.length) {
    log("Tournament already completed.");
    return;
  }

  const round = TOURNAMENT[state.game.tournamentIndex];
  await startBattle("tournament", round.team, `Tournament: ${round.name}`, {
    levelBase: 42 + state.game.tournamentIndex * 3,
    reward: round.reward,
    canRun: false,
  });
}

function buyItem(key) {
  const item = SHOP[key];
  if (!item) return;
  if (state.game.money < item.price) {
    log(`Not enough money for ${item.name}.`);
    return;
  }

  state.game.money -= item.price;
  state.game.inventory[key] += 1;
  log(`Bought ${item.name}.`);
  persistGame();
  renderHub();
  showShop(true);
}

function healTeam(mode) {
  const cost = mode === "quick" ? 120 : 260;
  if (state.game.money < cost) {
    const msg = `Need $${cost} for that service.`;
    log(msg);
    state.ui.centerMessage = msg;
    renderCenterPanel();
    return;
  }

  state.game.money -= cost;
  let totalRestored = 0;
  let restoredCount = 0;
  let revivedCount = 0;
  state.game.team.forEach((p) => {
    const before = p.currentHp;
    if (mode === "quick" && p.currentHp <= 0) {
      p.currentHp = Math.max(1, Math.floor(p.stats.maxHp * 0.35));
    } else {
      p.currentHp = p.stats.maxHp;
    }
    if (p.currentHp > before) {
      totalRestored += p.currentHp - before;
      restoredCount += 1;
    }
    if (before <= 0 && p.currentHp > 0) revivedCount += 1;
  });

  const serviceName = mode === "quick" ? "Quick Heal" : "Full Restore";
  state.ui.centerMessage = `${serviceName} complete. Restored ${totalRestored} HP across ${restoredCount} Pokemon${revivedCount ? `, revived ${revivedCount}` : ""}.`;
  log(`${serviceName} done for $${cost}.`);
  persistGame();
  renderHub();
  showCenter(true, state.ui.centerMessage);
}

async function showStarterOptions() {
  setStatus("Loading starter Pokemon...");
  const starters = [];
  for (const name of STARTERS) starters.push(await getPokemon(name));

  const grid = qs("starterGrid");
  grid.innerHTML = "";

  starters.forEach((starter) => {
    const card = document.createElement("article");
    card.className = "starter-card";

    card.innerHTML = `
      <img src="${starter.sprite}" alt="${starter.label}" />
      <h3>${starter.label}</h3>
      <div id="types-${starter.name}" class="types"></div>
      <p>${starter.speciesFlavor || "Reliable first partner."}</p>
      <button class="btn primary">Choose ${starter.label}</button>
    `;

    card.querySelector("button").addEventListener("click", async () => {
      setStatus(`Preparing ${starter.label}...`);
      const moves = await selectMoves(starter, 4);
      const fighter = createFighter(starter, 5, { moves, forcedMaxHp: 50 });
      fighter.currentHp = 50;

      state.game.money = 1000;
      state.game.inventory = createInventoryDefaults({ pokeball: 5, potion: 3, superPotion: 0 });
      state.game.team = [fighter];
      state.game.pcStorage = [];
      state.game.activeIdx = 0;
      state.game.badges = [];
      state.game.gymIndex = 0;
      state.game.tournamentIndex = 0;
      state.game.totalWins = 0;
      state.game.currentRegionId = REGIONS[0].id;
      state.game.selectedWildZoneId = REGIONS[0].wildZones[0].id;
      state.game.inWild = false;

      showScreen("screenHub");
      renderHub();
      log(`${state.game.playerName} began journey with ${fighter.name}.`);
      saveGame();
      setStatus("Journey started.");
    });

    grid.appendChild(card);
    renderTypes(card.querySelector(`#types-${starter.name}`), starter.types);
  });

  setStatus("Choose your starter.");
}

function bindEvents() {
  qs("trainerNameInput").addEventListener("input", () => renderAvatarChoices());
  qs("openTutorialBtn").addEventListener("click", () => showTutorial(true, state.ui.tutorialTopic));
  qs("closeTutorialBtn").addEventListener("click", () => showTutorial(false));
  qs("tutorialTopicSelect").addEventListener("change", (event) => {
    const topic = event.target.value;
    state.ui.tutorialTopic = topic;
    renderTutorialTopic(topic);
  });

  qs("beginJourneyBtn").addEventListener("click", async () => {
    const name = qs("trainerNameInput").value.trim();
    if (!name) {
      setStatus("Enter trainer name first.");
      return;
    }
    state.game.playerName = name;
    state.game.avatar = state.ui.selectedAvatar;
    showScreen("screenStarter");
    await showStarterOptions();
  });

  qs("continueBtn").addEventListener("click", async () => {
    if (!loadGame()) {
      setStatus("No valid save found.");
      return;
    }
    await ensurePartyMovesReady();
    showScreen("screenHub");
    renderHub();
    log(`Welcome back, ${state.game.playerName}.`);
    setStatus("Loaded save.");
  });

  qs("enterWildBtn").addEventListener("click", () => {
    state.game.inWild = true;
    log(`Entered wild area of ${currentRegion().name}.`);
    renderHub();
  });

  qs("openWildMapBtn").addEventListener("click", () => showWildMap(true));
  qs("searchWildBtn").addEventListener("click", () => startWildEncounter().catch((e) => setStatus(e.message)));
  qs("wildZoneSelect").addEventListener("change", (event) => {
    state.game.selectedWildZoneId = event.target.value;
    renderHub();
  });
  qs("startChosenWildBtn").addEventListener("click", () => {
    const wildName = qs("wildSelect").value;
    startWildEncounter({ wildName }).catch((e) => setStatus(e.message));
  });
  qs("startChosenTrainerBtn").addEventListener("click", () => {
    const trainerIndex = Number(qs("trainerSelect").value || 0);
    startWildEncounter({ trainerIndex }).catch((e) => setStatus(e.message));
  });

  qs("leaveWildBtn").addEventListener("click", () => {
    state.game.inWild = false;
    log("Returned to town.");
    renderHub();
  });

  qs("centerBtn").addEventListener("click", () => showCenter(true));
  qs("shopBtn").addEventListener("click", () => showShop(true));
  qs("inventoryBtn").addEventListener("click", () => showInventory(true));
  qs("gymBtn").addEventListener("click", () => startGymBattle().catch((e) => setStatus(e.message)));
  qs("tournamentBtn").addEventListener("click", () => startTournamentBattle().catch((e) => setStatus(e.message)));
  qs("saveBtn").addEventListener("click", saveGame);

  qs("quickHealBtn").addEventListener("click", () => healTeam("quick"));
  qs("fullHealBtn").addEventListener("click", () => healTeam("full"));
  qs("closeCenterBtn").addEventListener("click", () => showCenter(false));
  qs("closeInventoryBtn").addEventListener("click", () => showInventory(false));
  qs("closeWildMapBtn").addEventListener("click", () => showWildMap(false));
  qs("closeResultBtn").addEventListener("click", () => showBattleResult(false));

  qs("closeShopBtn").addEventListener("click", () => showShop(false));
  document.querySelectorAll(".shop-grid .btn[data-item]").forEach((btn) => {
    btn.addEventListener("click", () => buyItem(btn.dataset.item));
  });

  qs("evolveBtn").addEventListener("click", () => {
    if (!state.ui.battleResult) return;
    evolveActivePokemon()
      .then(async (result) => {
        if (!state.ui.battleResult) return;
        const details = state.ui.battleResult.details || [];
        if (!details.includes(result.message)) details.push(result.message);
        state.ui.battleResult.details = details;
        if (result.ok) {
          state.ui.battleResult.summary = result.message;
          renderHub();
          persistGame();
          await refreshBattleResultEvolution();
        } else {
          renderBattleResult();
        }
        setStatus(result.message);
      })
      .catch((err) => setStatus(err.message));
  });

  qs("runAwayBtn").addEventListener("click", () => {
    if (state.battle.awaitingLeadChoice) {
      battleLog("Select your lead Pokemon first.");
      return;
    }
    if (!state.battle.canRun) {
      battleLog("Cannot run from this battle.");
      return;
    }
    if (Math.random() < 0.75) {
      battleLog("Escaped successfully.");
      closeBattleEscaped();
      return;
    }
    battleLog("Failed to run.");
    enemyTurn();
    if (allPlayerFainted()) closeBattle(false);
    else renderBattle();
  });

  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.addEventListener("click", () => runPlayerAction(btn.dataset.action));
  });

  qs("closeTeamPickerBtn").addEventListener("click", () => {
    if (state.battle.teamPickerForce) {
      battleLog("Select a Pokemon to continue.");
      return;
    }
    showTeamPicker(false);
  });
}

async function init() {
  bindEvents();
  renderAvatarChoices();
  showScreen("screenStart");
  updateTutorialContext("start");
  setStatus("Create trainer profile and begin journey.");
}

init().catch((err) => {
  console.error(err);
  setStatus("Failed to initialize.");
});
