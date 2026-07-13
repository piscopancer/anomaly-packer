/** @noSelfInFile */

declare namespace ph_idle {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_idle */
declare class action_idle {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  use_callback(obj: CGameObject, actor: CGameObject): boolean
  deactivate(): void
}
