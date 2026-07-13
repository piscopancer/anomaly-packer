/** @noSelfInFile */

declare namespace ph_door {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
  export function try_to_close_door(npc: CGameObject, doors: AnyTable): void
  export function try_to_open_door(npc: CGameObject, opened_doors: AnyTable): void
}

/** @customConstructor action_door */
declare class action_door {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  update(delta: number): void
  fastcall(): boolean
  open_fastcall(): boolean
  close_action(): void
  open_door(disable_snd: boolean): void
  is_closed(): boolean
  is_open(): boolean
  close_door(disable_snd: boolean): void
  try_switch(): boolean
  use_callback(door: CGameObject, actor: CGameObject): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  deactivate(): void
}
