/** @noSelfInFile */

declare namespace xr_hit {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, st: AnyTable, temp: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp: AnyTable): void
}

/** @customConstructor action_process_hit */
declare class action_process_hit {
  constructor(obj: CGameObject, storage: AnyTable)
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}
