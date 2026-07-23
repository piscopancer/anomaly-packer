# anomaly-packer

## 0.4.0

### Minor Changes

- 8aa8846: Stamp the packer version into generated headers, name release archives after the addon version, add the MCM keybind builders, and correct the `CGameFont` and `CUIScriptWnd` typings.

  The credit comment on every generated `.script` now names the Anomaly Packer version that produced it, read from this package's own `package.json`, so a file found loose in a gamedata folder says which packer wrote it and not merely that one did. The runtime templates copied into a build receive the same header as the transpiled scripts, so every file in a release carries identical credits and the same date.

  `zip` now appends the addon's version to the archive name, and `--name` sets only the base rather than replacing the whole default. Passing `--name` previously dropped the version that the default name carried, which is how a release ended up called `my-addon.zip` with nothing to say which build it held. A base that already ends in the version is left alone, so passing a full name still behaves.

  The MCM option builders gain `keyBind` and `kbModRadio`. Both option types were already declared but there was no way to build one, and the modifier radio could not have been written by hand correctly: `ui_mcm.kb_mod_radio` is an alias for MCM's horizontal radio (`"radio_h"`) rather than a type of its own, and MCM silently skips an option whose type it does not recognise. The builder reads the type off `ui_mcm` for that reason. Two neighbouring declarations were wrong in the same area and are fixed: `key_hold` is a function to call from an `on_key_hold` callback, not a boolean feature flag, and `kbModRadio` accepts `no_str`, without which MCM rewrites each label into a `ui_mcm_..._lst_<label>` translation id.

  Two UI typings were corrected against the engine sources. `CGameFont` declared both a class and a same-named const, so the class won and the alignment constants were unreachable; their values were also wrong, and are `alLeft = 0`, `alRight = 1`, `alCenter = 2` per `GameFont.h`. `CUIScriptWnd` had no base class despite being bound as `class_<CUIDialogWndEx, WrapType, bases<CUIDialogWnd, DLL_Pure>>`, which hid `Show`, `IsShown`, `ShowDialog` and everything else it inherits from `CUIWindow`.

- 19f564c: Type the `ui\textures_descr` texture ids, own the JSX runtime so xray ui tags resolve reliably, prepend a credit header to generated scripts, and add zip packaging.

  Texture ids are generated from the unpacked `ui\textures_descr` xml tree by the new `gen-textures` script into `src/types/other/textures.d.ts`. They were previously plain `string`, where a typo produced no error and no icon — a failure visible only in game. The ids are emitted as keys of an interface rather than a union, so an addon shipping its own `textures_descr` file merges its ids into `UI.Textures` and they become valid everywhere a texture is accepted.

  The package now exports its own `jsx-runtime`, selected through `jsxImportSource` in the shipped `tsconfig.scripts.json`. Augmenting React's `JSX` namespace bound the augmentation to one resolved instance of `react`, so an addon compiling against its own copy saw every xray element as missing from `JSX.IntrinsicElements` despite correct types. Exporting the namespace from this package sidesteps instance identity; the runtime functions are re-exported from React unchanged.

  Every generated `.script` now carries a leading credit comment built from the addon's own `package.json`, so a file that ends up loose in someone's gamedata folder is traceable back to its source. Fields are omitted when absent. Alongside it, `zip` archives a finished build with `gamedata/` at the archive root — the layout Mod Organizer 2 expects — so a release installs by drag and drop.

  The two schema generators (`gen-sections`, `gen-ini-schemas`) were moved onto a shared ts-morph assembly step, which builds each emitted `.d.ts` structurally instead of by string-stitching and keeps both generators producing the same always-valid shape. Generated addon type trees for 3DSS-for-GAMMA are included.

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
