/** @noSelfInFile */

declare namespace heli_move {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor heli_move */
declare class heli_move {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  save(): void
  update(delta: number): void
  iterate_nodes(): void
  create_path_nodes(): void
  update_path_by_logic(): void
  update_movement_state(): void
  update_look_state(): void
  waypoint_callback(obj: CGameObject, action_type: number, index: number): void
}
