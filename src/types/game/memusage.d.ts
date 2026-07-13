/** @noSelfInFile */

declare namespace memusage {
  export function _printf(fmt: string, ...args: any[]): void
  export function collect_info(npc: CGameObject, type: string): void
}
