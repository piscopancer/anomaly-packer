/** @noSelfInFile */

/** @customConstructor act_state_mgr_animation_start */
declare class act_state_mgr_animation_start extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_animation_stop */
declare class act_state_mgr_animation_stop extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor animation */
declare class animation {
  anim_path: TODO // @generated field — refine type
  mgr: TODO // @generated field — refine type
  name: TODO // @generated field — refine type
  npc: TODO // @generated field — refine type
  sid: TODO // @generated field — refine type
  states: TODO // @generated field — refine type
  constructor(npc: CGameObject, mgr: AnyTable, anim_path: AnyTable)
  set_control(): void
  update_anim(): void
  set_state(new_state: string, fast_set: boolean): void
  select_anim(): LuaMultiReturn<[any, any]>
  weapon_slot(): number
  anim_for_slot(slot: number, t: AnyTable): any
  select_rnd(anim_state: AnyTable, wpn_slot: number, must_play: boolean): any
  add_anim(anm: string, state: AnyTable): void
  animation_callback(skip_multianim_check: boolean): boolean
  process_special_action(action_table: AnyTable): void
}

/** @customConstructor eva_state_mgr_animation */
declare class eva_state_mgr_animation extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_locked */
declare class eva_state_mgr_animation_locked extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_none_now */
declare class eva_state_mgr_animation_none_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_play_now */
declare class eva_state_mgr_animation_play_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

declare namespace state_mgr_animation {
  /** Anomaly `class "act_state_mgr_animation_start"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.act_state_mgr_animation_start.Method = ...`). */
  export const act_state_mgr_animation_start: act_state_mgr_animation_start
  /** Anomaly `class "act_state_mgr_animation_stop"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.act_state_mgr_animation_stop.Method = ...`). */
  export const act_state_mgr_animation_stop: act_state_mgr_animation_stop
  /** Anomaly `class "animation"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.animation.Method = ...`). */
  export const animation: animation
  /** Anomaly `class "eva_state_mgr_animation"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.eva_state_mgr_animation.Method = ...`). */
  export const eva_state_mgr_animation: eva_state_mgr_animation
  /** Anomaly `class "eva_state_mgr_animation_locked"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.eva_state_mgr_animation_locked.Method = ...`). */
  export const eva_state_mgr_animation_locked: eva_state_mgr_animation_locked
  /** Anomaly `class "eva_state_mgr_animation_none_now"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.eva_state_mgr_animation_none_now.Method = ...`). */
  export const eva_state_mgr_animation_none_now: eva_state_mgr_animation_none_now
  /** Anomaly `class "eva_state_mgr_animation_play_now"` is also reachable on the `state_mgr_animation` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animation.eva_state_mgr_animation_play_now.Method = ...`). */
  export const eva_state_mgr_animation_play_now: eva_state_mgr_animation_play_now
}
