/** @noSelfInFile */

declare namespace xr_camper {
  export function add_to_binder(object: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name?: string): void
}

/** @customConstructor action_patrol */
declare class action_patrol extends action_base {
  __keep_body_state_until: TODO // @generated field — refine type
  a: TODO // @generated field — refine type
  cur_state: TODO // @generated field — refine type
  danger: boolean // @generated field — refine type
  dest_position: TODO // @generated field — refine type
  dir: TODO // @generated field — refine type
  dist: number // @generated field — refine type
  enemy_position: TODO // @generated field — refine type
  flag: TODO // @generated field — refine type
  l_vid: TODO // @generated field — refine type
  look_point: TODO // @generated field — refine type
  look_position: TODO // @generated field — refine type
  move_mgr: TODO // @generated field — refine type
  next_point: TODO // @generated field — refine type
  on_point: boolean // @generated field — refine type
  point_0: TODO // @generated field — refine type
  point_2: TODO // @generated field — refine type
  scantime: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  stand: boolean // @generated field — refine type
  time_to_update: TODO // @generated field — refine type
  was_reset: boolean // @generated field — refine type
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  reset_scheme(): void
  activate_scheme(): void
  can_shoot(): boolean
  execute(): void
  process_danger(): boolean
  scan(flag: boolean): void
  get_next_point(flag: boolean): any
  process_point(mode: string, number: number): boolean
  finalize(): void
  on_place(): boolean
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  formation_callback(mode: string, number: number, index: number): void
  death_callback(npc: CGameObject): void
  deactivate(npc: CGameObject): void
  net_destroy(npc: CGameObject): void
}

/** @customConstructor evaluator_close_combat */
declare class evaluator_close_combat extends property_evaluator {
  a: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_end */
declare class evaluator_end extends property_evaluator {
  a: TODO // @generated field — refine type
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

declare namespace xr_camper {
  /** Anomaly `class "action_patrol"` is also reachable on the `xr_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_camper.action_patrol.Method = ...`). */
  export const action_patrol: action_patrol
  /** Anomaly `class "evaluator_close_combat"` is also reachable on the `xr_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_camper.evaluator_close_combat.Method = ...`). */
  export const evaluator_close_combat: evaluator_close_combat
  /** Anomaly `class "evaluator_end"` is also reachable on the `xr_camper` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_camper.evaluator_end.Method = ...`). */
  export const evaluator_end: evaluator_end
}
