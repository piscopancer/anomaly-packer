/** @noSelfInFile */

declare namespace heli_move {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor heli_move */
declare class heli_move {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): void
  save(): void
  update(delta: TODO): void
  iterate_nodes(): void
  create_path_nodes(): void
  update_path_by_logic(): void
  update_movement_state(): void
  update_look_state(): void
  waypoint_callback(obj: TODO, action_type: TODO, index: number): void
}
