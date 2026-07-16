/** @noSelfInFile */

declare namespace xr_combat_zombied {
  export function add_to_binder(npc: CGameObject, ini: system_ini, st: AnyTable, planner: AnyTable): void
}

/** @customConstructor action_zombie_go_to_danger */
declare class action_zombie_go_to_danger extends action_base {
  bdo_id: TODO // @generated field — refine type
  bdo_vert_id: TODO // @generated field — refine type
  enemy_last_seen_pos: TODO // @generated field — refine type
  enemy_last_seen_vid: TODO // @generated field — refine type
  hit_reaction_end_time: TODO // @generated field — refine type
  last_sent_vert_id: TODO // @generated field — refine type
  last_state: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  t: TODO // @generated field — refine type
  was_hit: boolean // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  set_state(state: string, be: CGameObject | undefined, pos: vector | undefined): void
  execute(): void
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

/** @customConstructor action_zombie_shoot */
declare class action_zombie_shoot extends action_base {
  enemy_last_accessible_position: TODO // @generated field — refine type
  enemy_last_seen_pos: TODO // @generated field — refine type
  enemy_last_seen_vid: TODO // @generated field — refine type
  hit_reaction_end_time: TODO // @generated field — refine type
  last_state: TODO // @generated field — refine type
  last_vid: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  t: TODO // @generated field — refine type
  turn_time: TODO // @generated field — refine type
  valid_path: boolean // @generated field — refine type
  was_hit: boolean // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  initialize(): void
  set_state(state: string, be: CGameObject | undefined, pos: vector | undefined): void
  execute(): void
  calc_random_direction(): vector
  finalize(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
}

/** @customConstructor evaluator_combat_zombied */
declare class evaluator_combat_zombied extends property_evaluator {
  gst: TODO // @generated field — refine type
  constructor(name: string, glob_storage: AnyTable)
  evaluate(): boolean
}

declare namespace xr_combat_zombied {
  /** Anomaly `class "action_zombie_go_to_danger"` is also reachable on the `xr_combat_zombied` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_zombied.action_zombie_go_to_danger.Method = ...`). */
  export const action_zombie_go_to_danger: action_zombie_go_to_danger
  /** Anomaly `class "action_zombie_shoot"` is also reachable on the `xr_combat_zombied` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_zombied.action_zombie_shoot.Method = ...`). */
  export const action_zombie_shoot: action_zombie_shoot
  /** Anomaly `class "evaluator_combat_zombied"` is also reachable on the `xr_combat_zombied` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_combat_zombied.evaluator_combat_zombied.Method = ...`). */
  export const evaluator_combat_zombied: evaluator_combat_zombied
}
