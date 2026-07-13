/** @noSelfInFile */

declare namespace ph_on_hit {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp: AnyTable): void
  export function disable_generic_scheme(npc: CGameObject, scheme: string, stype: number): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp: AnyTable): void
}

/** @customConstructor ph_on_hit */
declare class ph_on_hit {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  deactivate(): void
}
