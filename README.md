# Pokemon Classic Campaign

A modern browser re-imagination of classic Pokemon campaign gameplay.

This project keeps the old-school loop (starter -> wild encounters -> capture -> train -> gyms -> tournament) and adds a cleaner UI/UX with guided tutorials on every major screen.

## Core features

- Trainer onboarding:
  - Enter trainer name.
  - Pick a generated avatar (DiceBear-based profile styles).
- Starter flow:
  - Choose Bulbasaur, Charmander, or Squirtle.
  - Starter begins at Level 5 with fixed 50 HP.
- Journey Hub:
  - Region map with progressive unlocks by badge count.
  - Town map pins for Wild, Pokemon Center, PokeMart, Inventory, Gym, and Tournament.
- Wild exploration:
  - Select zone first, then choose specific wild Pokemon or trainer.
  - Random encounter option also available.
  - Capture sends Pokemon to party (or to PC when party is full).
- Battle system:
  - 4 move slots per Pokemon.
  - Move detail cards include type, class, power, accuracy, damage channel, STAB, multiplier, and expected damage range.
  - Actions: move, switch, potion, guard, pokeball (wild only), run (when allowed).
- Progression:
  - Money rewards from wins.
  - Gym ladder (8 badges) and tournament endgame.
  - EXP, level-up scaling, evolution checks.
- Pokemon Center:
  - Quick Heal / Full Restore.
  - Party <-> PC management (transfer, withdraw, release).
  - Evolution Desk with eligibility and requirement display.
- PokeMart and Inventory Desk:
  - Buy balls, healing items, evolution stones, revive items, EXP candy.
  - Use Revive/Full Revive/EXP Candy from Inventory Desk with target selection.
- Battle Result summary modal:
  - Shows outcome, money, EXP, level changes, active Pokemon status, and evolution options.
- Built-in tutorial system:
  - Context-aware `How To Play` modal.
  - Topic-by-topic guidance for Start, Starter, Hub, Wild Map, Battle, Center, Shop, Inventory, Team Picker, and Battle Result.
- Save/load:
  - Uses browser `localStorage` for continue/resume.

## Data sources

- Runtime battle/move/species/evolution data is fetched from [PokeAPI](https://pokeapi.co/).
- Project also includes local datasets in [`data/`](./data):
  - `pokemonDB_dataset.csv`
  - `pokemons2.csv`

## Tech stack

- Vanilla HTML/CSS/JavaScript
- [Vite](https://vitejs.dev/) for dev server and build

## Project structure

- `index.html` -> all screen/modal layout
- `styles.css` -> game UI styling and responsive behavior
- `app.js` -> game logic, API integration, battle loop, state, tutorial system
- `scripts/rin.cjs` -> helper wrapper to run npm scripts through `npm run rin <script>`
- `data/` -> bundled CSV datasets

## Getting started

```bash
cd "/Users/viveksn/Documents/Pokemon Simulator"
npm install
```

Start dev server:

```bash
npm run start
```

Then open:

- `http://localhost:5173`

Alternative start command (same behavior via wrapper):

```bash
npm run rin start
```

## Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deploy to GitHub Pages

This project is already configured for GitHub Pages deployment:

- `vite.config.js` auto-sets the correct base path during GitHub Actions runs.
- `.github/workflows/deploy-pages.yml` builds and deploys the `dist/` output to Pages on every push to `main` or `master`.

### One-time setup in GitHub

1. Push this project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings -> Pages`.
4. Under **Build and deployment**, set **Source** to `GitHub Actions`.

### Deploy flow

1. Commit and push to `main` (or `master`).
2. Wait for the `Deploy to GitHub Pages` workflow to finish.
3. Open your live site at:
   - `https://<your-username>.github.io/<your-repo>/`

If you use a custom domain later, GitHub Pages can map it from the same `Settings -> Pages` screen.

## Gameplay quick start

1. Start a new game and choose your starter.
2. Enter Wild mode from Journey Control.
3. Open Wild Map and pick a zone.
4. Choose a wild Pokemon/trainer or run random encounter.
5. Battle, capture, earn money/EXP.
6. Heal/manage party at Pokemon Center, shop at PokeMart.
7. Win gyms to unlock regions and reach the final tournament.

## Notes and current scope

- Internet is required for live PokeAPI requests.
- Evolution support currently focuses on conditions represented in-game (level/item). Some special evolution conditions are shown as unavailable when not implemented.
- Save data is stored per browser profile via `localStorage`.
