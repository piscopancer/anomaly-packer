/** @noSelfInFile */

/** @customConstructor act_state_mgr_animstate_start */
declare class act_state_mgr_animstate_start extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_animstate_stop */
declare class act_state_mgr_animstate_stop extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_animstate */
declare class eva_state_mgr_animstate extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animstate_idle_now */
declare class eva_state_mgr_animstate_idle_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animstate_locked */
declare class eva_state_mgr_animstate_locked extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animstate_play_now */
declare class eva_state_mgr_animstate_play_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

declare namespace state_mgr_animstate {
  /** Anomaly `class "act_state_mgr_animstate_start"` is also reachable on the `state_mgr_animstate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animstate.act_state_mgr_animstate_start.Method = ...`). */
  export const act_state_mgr_animstate_start: act_state_mgr_animstate_start
  /** Anomaly `class "act_state_mgr_animstate_stop"` is also reachable on the `state_mgr_animstate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animstate.act_state_mgr_animstate_stop.Method = ...`). */
  export const act_state_mgr_animstate_stop: act_state_mgr_animstate_stop
  /** Anomaly `class "eva_state_mgr_animstate"` is also reachable on the `state_mgr_animstate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animstate.eva_state_mgr_animstate.Method = ...`). */
  export const eva_state_mgr_animstate: eva_state_mgr_animstate
  /** Anomaly `class "eva_state_mgr_animstate_idle_now"` is also reachable on the `state_mgr_animstate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animstate.eva_state_mgr_animstate_idle_now.Method = ...`). */
  export const eva_state_mgr_animstate_idle_now: eva_state_mgr_animstate_idle_now
  /** Anomaly `class "eva_state_mgr_animstate_locked"` is also reachable on the `state_mgr_animstate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animstate.eva_state_mgr_animstate_locked.Method = ...`). */
  export const eva_state_mgr_animstate_locked: eva_state_mgr_animstate_locked
  /** Anomaly `class "eva_state_mgr_animstate_play_now"` is also reachable on the `state_mgr_animstate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_animstate.eva_state_mgr_animstate_play_now.Method = ...`). */
  export const eva_state_mgr_animstate_play_now: eva_state_mgr_animstate_play_now
}
