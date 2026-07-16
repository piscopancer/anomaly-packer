# Section & ltx taxonomy — design

Status: draft for review. No code written yet.

## Decision on record

- **Strict (closed) unions.** Section unions are closed literal unions. A section
  that is not present in base Anomaly or in a referenced addon pack is a **type
  error**, not a silently-accepted string. Consequence: declaring sections (in base
  or in an addon pack) is mandatory, so the addon-pack mechanism and the on-demand
  pack generator are load-bearing, not optional.

## Goals

1. Cover the whole ltx world, not just `items` — categorised, not one flat `Section`.
2. Keep interfaces as the mergeable source of truth; derive unions and aggregates.
   All of it lives under a single `Sections` namespace — no section names leak into
   global scope.
3. Make adding a category *data* (a manifest row), not new generator code.
4. Let an addon get typed on demand and be `/// <reference>`d by consumers.
5. Preserve back-compat: existing `Section`/`AnySection` keep working.

## Current state (what already exists)

- `gen-sections.ts` parses `configs/items`, resolves each `[child]:parent` chain to
  an engine `class`, buckets into 5 kinds (`Weapon/Ammo/Outfit/Artefact/Item`), plus
  `NpcSection` (creatures spawn sections) and `SquadSection`. Emits **mergeable
  interfaces** (`Weapons`, `Ammos`, …), unions via `keyof`, and
  `AnySection = Section | NpcSection | SquadSection`. Output: one 3.6k-line
  `__base/sections.d.ts`.
- `IniFileSchemas` registry (file path → section → field → type) already wired to
  `ini_file` and `ini_file_ex`; `gen-weather`, `gen-dialogs`, `gen-info-portions`
  generate some of it.
- Addon packs precedent: `types/addons/mcm`, referenced by consumers via
  `/// <reference types="anomaly-packer/types/addons/mcm" />`.

So the mechanism (mergeable interfaces + keyof + declaration merging + addon packs)
is proven. This design **scales** it; it does not replace it.

## Two type families

The ltx splits by *how code uses it*, and the two roles want different shapes.

### A. Section registries — identifier unions (the `Sections` namespace)

For things `CGameObject.section()` / `SYS_GetParam` / alife / ini readers name.
Everything is nested under one `Sections` namespace so no generic word (`Weapon`,
`Ammo`, …) becomes a bare global type — `Sections.Weapon` self-documents as a
section-id union, and there is a single discoverable entry point.

Both the mergeable interfaces **and** the derived aliases live inside the namespace.
Namespaces merge, and interfaces inside a merged namespace merge too, so addon packs
augment `Sections.Weapons` and the `keyof`-derived `Sections.Weapon` picks it up
automatically — nothing about sections sits in global scope.

```ts
declare namespace Sections {
  interface Weapons {}                    // merge target
  export type Weapon = keyof Weapons      // derived union
  // …one pair per category…
}
```

The `IniFileSchemas` file-schema family (family B below) stays a separate global
registry — it is a different axis (file→field types, not section-id unions) and is
deliberately **not** nested under `Sections`.

Grounded in the real engine `class` values in `configs/items` (counts from a scan):

| Category      | engine `class` (CLSID) values                                             |
| ------------- | ------------------------------------------------------------------------- |
| `Weapon`      | all `WP_*` (AK74, PM, SVD, ASHTG, LR300, VAL, HPSA, BM16, RG6, USP45, SVU, GROZA, KNIFE, RPG7, GLAUN, BINOC…), `W_STMGUN`, `W_MOUNTD` |
| `Ammo`        | `AMMO`, `AMMO_S`                                                           |
| `Grenade`     | `G_F1`, `G_RGD5_S`, `G_RPG7`, `G_F1_S`, `G_FAKE`, and grenade rounds `S_VOG25`, `S_OG7B`, `S_M209`, `S_EXPLO` |
| `Attachment`  | `II_ATTCH`, `WP_SCOPE`, `WP_SILEN` *(see open Q — scope/silencer vs weapon)* |
| `Outfit`      | `EQU_STLK`                                                                 |
| `Helmet`      | `E_HLMET`                                                                  |
| `Backpack`    | `EQ_BAKPK`                                                                 |
| `Artefact`    | `ARTEFACT`, `SCRPTART`                                                     |
| `Detector`    | `DET_SIMP`, `DET_ADVA`, `DET_ELIT`, `DET_SCIE`                             |
| `Device`      | `D_PDA`, `D_CUSTOM`, `D_FLARE`, `D_FLALIT`, `TORCH_S`                      |
| `Consumable`  | `II_FOOD`                                                                  |
| `Explosive`   | `II_EXPLO`, `S_EXPLO`, `S_INVBOX`                                          |
| `MiscItem`    | `II_ANTIR`, `II_BOLT`, `E_STLK`, and anything unmapped (fallback)          |

Non-item object sections (their own categories inside the namespace):
`Sections.Npc` (human creatures spawn sections), `Sections.Squad`, and — sources now
resolved (see decision 6):

| Category            | source ltx                                    | matcher (resolved engine `class`)                 |
| ------------------- | --------------------------------------------- | ------------------------------------------------- |
| `Sections.Vehicle`  | `configs/vehicles.ltx`                        | class `SCRPTCAR` (abstract base `[m_car]` dropped)|
| `Sections.Helicopter` | `configs/creatures/helicopter.ltx`          | class `C_HLCP_S`                                   |
| `Sections.Anomaly`  | `configs/zones/*.ltx` (via `zones.ltx`)       | class `/^ZS_\|^Z_/` (ZS_MBALD, ZS_RADIO, Z_CFIRE…)|
| `Sections.Monster`  | `configs/creatures/spawn_sections*.ltx`       | resolved class `SM_*`, `AI_CROW`, `AI_FLE_G`, `AI_PHANT` |
| `Sections.Npc`      | `configs/creatures/spawn_sections*.ltx`       | resolved class `AI_STL_S`, `AI_TRD_S`, `S_ACTOR`  |

`Monster` and `Npc` share the same spawn-section files but split by *resolved* class,
which means the generator must parse the whole `configs/creatures` tree to build the
inheritance graph (spawn sections inherit `:stalker` → `m_stalker.ltx` class `AI_STL_S`,
or `:monster_base` → `m_dog.ltx` class `SM_DOG_S`, etc.), not just read the
spawn_sections headers as the current `NpcSection` does.

**Aggregates (layered, composed — not hand-listed):**

```ts
declare namespace Sections {
  export type Item   = Weapon | Ammo | Grenade | Attachment | Outfit | Helmet
                     | Backpack | Artefact | Detector | Device | Consumable
                     | Explosive | MiscItem
  export type Object = Item | Npc | Squad | Vehicle | Helicopter | Monster | Anomaly
  export type All    = Object
}

// thin, deprecated global back-compat aliases (so existing .d.ts need no edits)
type AnySection = Sections.All
type Section    = Sections.Item
```

`section()` and the `system_ini`/`ini_file_ex` section args stay typed via the
global `AnySection` alias (now = `Sections.All`) — the public type name is unchanged,
only its composition widens. New code should prefer `Sections.All` / `Sections.Item`
directly; the bare aliases are retained for the existing `.d.ts` surface
(utils_data alone references `Section` on ~15 lines) and marked deprecated.

### B. File schemas — `IniFileSchemas`

Standalone ltx that are not the object DB. One registry entry per file
(`path → section → field → type`). Domains from the real `configs/` tree:
`environment` (weathers), `gameplay` (dialogs, tasks, info portions, trade),
`text` (string tables), `misc`, `ai_tweaks`, `plugins`, `ui`, `zones`, `scripts`.
Generated the same manifest way.

## File layout

Replace the monolith with per-category files:

```
src/types/game/sections/
  weapon.d.ts        // declare namespace Sections { interface Weapons; type Weapon = keyof Weapons }
  ammo.d.ts
  …
  index.d.ts         // composes Sections.Item/Object/All + deprecated global aliases
```

Each leaf file re-opens `declare namespace Sections` and contributes one
interface + one derived alias. Generators emit the leaf files; `index.d.ts`
composes the aggregate aliases and the back-compat globals. Barrel
generation (`gen-type-barrels`) already exists and would include the new files.

## Manifest-driven generation

A single data table drives generation; adding a category is a row, not code.

```ts
type SectionCategory = {
  name: string            // "Weapon"          → interface "Weapons", type "Weapon"
  source: string          // glob under configs, e.g. "items/**/*.ltx"
  match:                  // how a [section] joins this category
    | { by: "class"; clsids: string[] }
    | { by: "header-in"; files: string[] }   // e.g. squad_descr, spawn_sections
  out: string             // "sections/weapon.d.ts"
}
```

One generator reads the manifest, resolves `[child]:parent` → class (shared with
today's logic), buckets by the matcher, emits leaf files, then regenerates
`index.d.ts` aggregates. A `MiscItem` fallback catches any unmapped class so the
base build never drops a section on the floor.

The same manifest shape (with a field-parser) covers family **B** file schemas.

## Importable, not ambient — the `Sections` module

Section types are convenience TS-side constructs, not part of the game's ambient
surface. They should be **imported**, the same way MCM helpers are, so they read as
Anomaly-Packer additions and are never confused with the ambient xray / `.script`
globals:

```ts
import * as Sections from 'anomaly-packer/sections'

const s: Sections.Weapon = 'wpn_ak74'
const groups: Record<Sections.All, string[]> = /* … */
```

Wiring (mirrors the existing `anomaly-packer/mcm` precedent, but **types-only** — no
runtime template, unlike `mcm`/`class` which emit a `.script` via `runtimeModules`):

- Add an `exports` entry `"./sections": { "types": "./dist/types/sections/index.d.ts" }`.
- The barrel `sections/index.d.ts` re-exports the category aliases and aggregates as a
  real module (`export type Weapon = …`), instead of ambient `declare` globals.
- Any convenience *functions* that belong with sections (matchers, guards) ship from
  the same specifier, so `import * as Sections` yields both types and helpers.

**Consequence for merging.** Ambient global interface merging no longer reaches an
imported module, so addon packs augment via **module augmentation** instead of a bare
`declare namespace`:

```ts
// types/addons/3dss/sections.d.ts
declare module 'anomaly-packer/sections' {
  interface Attachments { gauss_sight: 0; wpn_g36v_rwap_cut_kit: 0 }
}
```

The `keyof`-derived `Attachment` union inside the module picks the new members up,
exactly as before. Consumers still opt in with `/// <reference types="…/3dss" />`.

**Back-compat aliases** (`Section`, `AnySection`) can either be dropped — since the
argument for them was avoiding edits to ambient `.d.ts`, and those `.d.ts` (utils_data,
utils_ui, `_g`) now `import type { Section } from 'anomaly-packer/sections'` — or kept
as a re-export from the module. Open question 5 folds into this: prefer explicit
imports everywhere; keep the aliases only as a short-lived migration convenience.

> Open sub-question: the ambient ini readers (`ini_file`, `ini_file_ex`,
> `system_ini.*`) currently take `Section` as an ambient global. Under an imported
> `Sections`, those `.d.ts` must `import type` it. That is a one-line addition per
> file but means the game-type barrel now depends on the sections module — confirm
> that direction is acceptable before Phase 1.

## Addon packs (`/addons`) & referencing

Per addon: `src/types/addons/<addon>/sections.d.ts` that **declaration-merges**
its new sections into the base category interfaces, plus `IniFileSchemas` entries
for its files:

```ts
// types/addons/3dss/sections.d.ts
declare module 'anomaly-packer/sections' {
  interface Attachments { gauss_sight: 0; wpn_g36v_rwap_cut_kit: 0 /* … */ }
}
```

(Module augmentation, per the "Importable, not ambient" section above — the pack
augments the `anomaly-packer/sections` module, not a bare global namespace.)

Consumer opts in:

```ts
/// <reference types="anomaly-packer/types/addons/3dss" />
```

Then `"gauss_sight"` is a member of `Sections.Attachment` / `Sections.All` (and the
`AnySection` alias) in that project.

**On-demand pack generator (Phase 3) — implemented.** `anomaly-packer gen-addon
<mod-folder> [--name <slug>] [--out <dir>] [--configs <vanilla-configs>]` points at a
mod's `gamedata/` and emits an ambient pack under `<out>/<slug>/` with a `<slug>.d.ts`
barrel, opted into by `/// <reference types="anomaly-packer/types/addons/<slug>" />`.
The pack has three families:

1. **Section augmentations** — `declare module 'anomaly-packer' { interface Weapons … }`
   for sections the mod adds over vanilla. Uses the *same* class-resolution + bucketing
   as the base generator (extracted to `scripts/lib/sections-core.ts`), run over
   `[vanilla, mod]` configs and diffed against the vanilla run so only genuinely new
   sections are emitted.
2. **`IniFileSchemas`** — schemas for the mod's own config ltx (plugins/misc/ai_tweaks/
   scripts), by the same conservative value rules (`scripts/lib/ini-core.ts`).
3. **Lua script APIs** — one `declare const <script>: { … }` per `.script` the mod ships
   (`@noSelf`; object type, so members whose Lua names are TS-reserved like `new` can be
   quoted keys). Parsed from a real Lua AST via **web-tree-sitter** (pure WASM — no native
   toolchain, works under any Node), with **real parameter/return types lifted from the
   author's LuaDoc** (`--- @param name type`, `--- @return type`); anything the mod did
   not annotate stays `TODO` (= any). Nothing is guessed.

This is how DII, 3DSS, Xlib, etc. get typed without hand-writing unions, and is what
makes the strict decision livable. Reference test: the Xlib library (`482- Xlib`) →
31 leaves, 353 typed functions, 35 vars, typechecks clean.

## Strict-union consequences & the one escape valve

Under strict, code that references a section not in base or a referenced pack is a
type error. That is the point. The **only** sanctioned escape is an explicit,
named assertion at a genuine runtime boundary (a section string read from ltx that
no pack covers), e.g. `sec as Sections.All` — visible, greppable, deliberate. There
is no implicit `string` widening.

For `5.ts` specifically: it targets vanilla sections and/or declares the few it
introduces via its own pack (or `env.d.ts`), then `groups` is legitimately
`Record<Sections.All, string[]>`. The 3DSS-only ids that started this discussion are
*not* this addon's concern — they belong to a 3DSS pack a consumer references.

## Migration / back-compat

- Keep the global `Section`/`AnySection` names as thin deprecated aliases
  (`type Section = Sections.Item`, `type AnySection = Sections.All`); only their
  composition changes, so no `.d.ts` referencing them needs editing.
- New category unions are additive under `Sections`.
- Existing addon augmentations of the bare-global `Weapons`/`Items` interfaces must
  be rewritten to the namespaced form (`declare namespace Sections { interface
  Weapons {} }`). There are few of these today, and the on-demand pack generator
  emits the namespaced form for free, so this is a one-time mechanical change.
- Split is internal; the `types/game` barrel keeps the public import surface.

## Decisions (resolved)

1. **Attachment CLSIDs — resolved: `Attachment`.** `WP_SCOPE` / `WP_SILEN` bucket
   with `II_ATTCH` under `Attachment` (mountable items), despite their `WP_*` engine
   class. `Weapon` excludes them.
2. **Category granularity — resolved: keep all 13.** Weapon/Ammo/Grenade/Attachment/
   Outfit/Helmet/Backpack/Artefact/Detector/Device/Consumable/Explosive/MiscItem. No
   collapsing; precision preferred over fewer interfaces.
3. **Import direction — resolved: import everywhere.** `Sections` is an imported
   module; the ambient ini readers (`ini_file`, `ini_file_ex`, `system_ini`) and other
   game `.d.ts` `import type` from `anomaly-packer/sections`. The game-type barrel
   depending on the sections module is accepted. No permanent ambient `Section` global;
   the `Section`/`AnySection` aliases are at most a short-lived migration convenience.
4. **First file-schema domain — resolved: weathers (`environment`).** Generate the
   weather ltx schemas first (building on existing `gen-weather`), before trade / tasks
   / text.
5. **Naming — resolved.** `Sections` module (Option 2, interfaces + `keyof` aliases
   together). `Sections.Item` is the primary item aggregate; `Sections.All` the top
   aggregate. Addon packs augment via module augmentation.
6. **Vehicle / Anomaly / Monster / Npc sources — resolved by scan.** Sources and
   matchers are the table in "Non-item object sections" above. `Vehicle` = `SCRPTCAR`
   in `vehicles.ltx`; `Anomaly` = `/^ZS_|^Z_/` across `configs/zones`; `Monster` and
   `Npc` split the `spawn_sections*` headers by resolved creature class. The helicopter
   (`C_HLCP_S`) gets **its own `Sections.Helicopter`** (one-member category), consistent
   with the precision-over-collapsing decision — it is neither a car nor lumped with
   monsters despite being a hostile creature engine-side. The generator's
   class-resolution must now cover `configs/creatures/*` (whole tree) and
   `configs/vehicles.ltx` / `configs/zones/*`, not just `configs/items`.
```