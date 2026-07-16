/** @noSelfInFile */

declare namespace xr_hit {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp: AnyTable): void
}

/** @customConstructor action_process_hit */
declare class action_process_hit {
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

declare namespace xr_hit {
  /** Anomaly `class "action_process_hit"` is also reachable on the `xr_hit` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_hit.action_process_hit.Method = ...`). */
  export const action_process_hit: action_process_hit
}
