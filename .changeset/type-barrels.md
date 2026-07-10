---
"anomaly-packer": minor
---

Barrel-файлы типов для групп game/addons/other. Теперь можно подключить всю группу одной строкой — `/// <reference types="anomaly-packer/types/game" />` — вместо перечисления каждого модуля. Барели генерируются при сборке скриптом `src/scripts/gen-type-barrels.ts`, так что список ссылок всегда актуален.
