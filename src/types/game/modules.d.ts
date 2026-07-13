/** @noSelfInFile */

declare namespace modules {
  export const stype_heli: number
  export const stype_item: number
  export const stype_mobile: number
  export const stype_restrictor: number
  export const stype_stalker: number
  export const stype_trader: number
  export function add_common_precondition(scheme: string, action: AnyTable): void
  export function disable_generic_schemes(npc: CGameObject, stype: number): void
  export function enable_generic_schemes(npc: CGameObject, ini: system_ini, section: Section, stype: number): void
  export function on_game_start(): void
  export function reset_generic_schemes(npc: CGameObject, scheme: string, section: Section): void
}
