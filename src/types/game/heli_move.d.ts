/** @noSelfInFile */

declare namespace heli_move {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor heli_move */
declare class heli_move {
  _flag_to_wp_callback: TODO // @generated field — refine type
  a: TODO // @generated field — refine type
  by_stop_fire_fly: boolean // @generated field — refine type
  heliObject: TODO // @generated field — refine type
  heli_fire: TODO // @generated field — refine type
  heli_fly: TODO // @generated field — refine type
  heli_look: TODO // @generated field — refine type
  last_index: TODO // @generated field — refine type
  max_velocity: TODO // @generated field — refine type
  next_index: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  patrol_look: TODO // @generated field — refine type
  patrol_move: TODO // @generated field — refine type
  patrol_move_info: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  stop_point: TODO // @generated field — refine type
  was_callback: TODO // @generated field — refine type
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

declare namespace heli_move {
  /** Anomaly `class "heli_move"` is also reachable on the `heli_move` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`heli_move.heli_move.Method = ...`). */
  export const heli_move: heli_move
}
