# anomaly-packer

## 0.3.0

### Minor Changes

- 0d6dc58: Add an importable xray class builder at `anomaly-packer/class`, fix incorrect vector/math return types, and default script transpilation to `noImplicitSelf`.

  `defclass(name, body)` wraps the engine's global `class "name"` OOP DSL. Everything is declared in one place: a single body object holding the instance fields (as typed initial values) alongside the methods (including `__init`). `this` inside every method is typed as the instance via `ThisType`, so field and method access is fully checked with no separate interface and no duplicated method signatures, and the returned value is a constructor typed from `__init`. Like the MCM builder, the runtime script is copied and linked into the build automatically on import.

  Type fixes: `vector_cross` now returns `vector` (was `number`), `vec_to_str` returns `string` (was `vector`), `ray_pick.set_flags` takes a `number` collide mask (was a malformed `rq_target[keyof rq_target]`), and `CreateTimeEvent`'s callback is pinned to `this: void` so plain arrow callbacks type-check under `noImplicitSelf`.

  The shipped `tsconfig.scripts.json` now sets `tstl.noImplicitSelf: true`: free functions are noSelf by default, so `@noSelfInFile` pragmas and per-function `this: void` annotations are no longer needed, while class methods still receive `self` through `ThisType`.

## 0.2.0

### Minor Changes

- 5412571: Базовый tsconfig для скриптов аддона и раздача стандартной библиотеки Lua. Пакет публикует `anomaly-packer/tsconfig.scripts.json`, который проект аддона подключает через `extends`, — все настройки компилятора и tstl больше не дублируются в каждом аддоне. Через него же приходит стандартная библиотека Lua (`pcall`, `pairs`, `string`, `table`, `math` и прочее из `lua-types` под Lua 5.1): её тянет вложенный `lua-lib.d.ts`, резолвящий `lua-types` из node_modules самого пакета, поэтому аддону не нужно ни объявлять эти функции руками, ни держать `lua-types` в своих зависимостях. Типичный `gamedata/scripts/tsconfig.json` сводится к `extends` и `include`, а `env.d.ts` содержит только объявления игровых модулей.

  Заодно убрана устаревшая CLI-подкоманда `anomaly-packer types tsconfig`: она печатала поштучный `types`-массив, несовместимый с новым базовым конфигом (`types: []` + барели). Список групп типов остаётся доступен через `anomaly-packer types list`.

- 5412571: Barrel-файлы типов для групп game/addons/other. Теперь можно подключить всю группу одной строкой — `/// <reference types="anomaly-packer/types/game" />` — вместо перечисления каждого модуля. Барели генерируются при сборке скриптом `src/scripts/gen-type-barrels.ts`, так что список ссылок всегда актуален.

## 0.1.1

### Patch Changes

- Открыт подпуть `anomaly-packer/types/*` в exports-мапе, чтобы игровые типы можно было подключать через `/// <reference types="anomaly-packer/types/game/db" />` (и через массив `types` в tsconfig). Раньше exports-мапа открывала только корень `.`, из-за чего глубокие ссылки на типы не резолвились. Команда CLI `types tsconfig` теперь печатает пути в новом формате `anomaly-packer/types/...`.

## 0.1.0

### Minor Changes

- Modernize the toolchain and internals.

  - Migrate from Bun to Node + pnpm + tsx; the build now runs on tsdown instead of tsup and emits `.mjs`/`.d.mts` with an `exports` map.
  - Bump to TypeScript 6, typescript-to-lua 1.37, React 19, and other current dependencies. The `typescript` peer dependency is now `^6.0.0`.
  - Replace the unmaintained `json2xml` with a small typed layer over `fast-xml-parser`; generated XML is byte-for-byte identical to before.
  - Harden the Lua post-processing regexes and fix the dynamic import of text scripts on Windows.
