# anomaly-packer

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
