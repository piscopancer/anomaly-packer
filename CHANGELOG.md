# anomaly-packer

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
