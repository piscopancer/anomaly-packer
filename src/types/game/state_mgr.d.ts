/** @noSelfInFile */

declare namespace state_mgr {
  export const combat_action_ids: AnyTable
  export const no_idle_alife_ids: AnyTable
  export function bind_manager(object: CGameObject): state_manager | undefined
  export function get_state(npc: CGameObject): string | undefined
  export function is_npc_in_combat(npc: CGameObject): boolean
  export function set_state(npc: CGameObject, state_name: string, callback?: AnyTable, timeout?: number, target?: AnyTable, extra?: AnyTable): void
}

/** @customConstructor act_state_mgr_end */
declare class act_state_mgr_end extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: state_manager, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_locked */
declare class act_state_mgr_locked extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: state_manager, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_to_idle */
declare class act_state_mgr_to_idle extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, state_manager: state_manager, name_?: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_end */
declare class eva_state_mgr_end extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_locked */
declare class eva_state_mgr_locked extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_locked_external */
declare class eva_state_mgr_locked_external extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_idle */
declare class evaluator_state_mgr_idle extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_idle_alife */
declare class evaluator_state_mgr_idle_alife extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_idle_items */
declare class evaluator_state_mgr_idle_items extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_state_mgr_logic_active */
declare class evaluator_state_mgr_logic_active extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, state_manager: state_manager, name_?: string)
  evaluate(): boolean
}

/** @customConstructor state_manager */
declare class state_manager {
  alife: boolean // @generated field — refine type
  animation_direction: TODO // @generated field — refine type
  animation_direction_applied: TODO // @generated field — refine type
  animation_position: TODO // @generated field — refine type
  callback: TODO // @generated field — refine type
  combat: boolean // @generated field — refine type
  current_direction: TODO // @generated field — refine type
  current_object: TODO // @generated field — refine type
  fast_set: TODO // @generated field — refine type
  look_dir: TODO // @generated field — refine type
  look_object: TODO // @generated field — refine type
  look_position: TODO // @generated field — refine type
  need_reweapon: boolean // @generated field — refine type
  target_position: TODO // @generated field — refine type
  target_state: TODO // @generated field — refine type
  constructor(npc: CGameObject)
  set_state(state_name: string, callback?: AnyTable, timeout?: number, target?: AnyTable, extra?: AnyTable): void
  get_state(): string
  update(): void
}

declare namespace state_mgr {
  /** Anomaly `class "act_state_mgr_end"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.act_state_mgr_end.Method = ...`). */
  export const act_state_mgr_end: act_state_mgr_end
  /** Anomaly `class "act_state_mgr_locked"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.act_state_mgr_locked.Method = ...`). */
  export const act_state_mgr_locked: act_state_mgr_locked
  /** Anomaly `class "act_state_mgr_to_idle"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.act_state_mgr_to_idle.Method = ...`). */
  export const act_state_mgr_to_idle: act_state_mgr_to_idle
  /** Anomaly `class "eva_state_mgr_end"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.eva_state_mgr_end.Method = ...`). */
  export const eva_state_mgr_end: eva_state_mgr_end
  /** Anomaly `class "eva_state_mgr_locked"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.eva_state_mgr_locked.Method = ...`). */
  export const eva_state_mgr_locked: eva_state_mgr_locked
  /** Anomaly `class "eva_state_mgr_locked_external"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.eva_state_mgr_locked_external.Method = ...`). */
  export const eva_state_mgr_locked_external: eva_state_mgr_locked_external
  /** Anomaly `class "evaluator_state_mgr_idle"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.evaluator_state_mgr_idle.Method = ...`). */
  export const evaluator_state_mgr_idle: evaluator_state_mgr_idle
  /** Anomaly `class "evaluator_state_mgr_idle_alife"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.evaluator_state_mgr_idle_alife.Method = ...`). */
  export const evaluator_state_mgr_idle_alife: evaluator_state_mgr_idle_alife
  /** Anomaly `class "evaluator_state_mgr_idle_items"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.evaluator_state_mgr_idle_items.Method = ...`). */
  export const evaluator_state_mgr_idle_items: evaluator_state_mgr_idle_items
  /** Anomaly `class "evaluator_state_mgr_logic_active"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.evaluator_state_mgr_logic_active.Method = ...`). */
  export const evaluator_state_mgr_logic_active: evaluator_state_mgr_logic_active
  /** Anomaly `class "state_manager"` is also reachable on the `state_mgr` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr.state_manager.Method = ...`). */
  export const state_manager: state_manager
}
