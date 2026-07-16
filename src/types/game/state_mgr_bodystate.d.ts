/** @noSelfInFile */

/** @customConstructor act_state_mgr_bodystate_crouch */
declare class act_state_mgr_bodystate_crouch extends action_base {
  constructor(name: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_bodystate_crouch_danger */
declare class act_state_mgr_bodystate_crouch_danger extends action_base {
  constructor(name: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_bodystate_standing */
declare class act_state_mgr_bodystate_standing extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_bodystate_standing_free */
declare class act_state_mgr_bodystate_standing_free extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_bodystate */
declare class eva_state_mgr_bodystate extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_crouch */
declare class eva_state_mgr_bodystate_crouch extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_crouch_now */
declare class eva_state_mgr_bodystate_crouch_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_standing */
declare class eva_state_mgr_bodystate_standing extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_standing_now */
declare class eva_state_mgr_bodystate_standing_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

declare namespace state_mgr_bodystate {
  /** Anomaly `class "act_state_mgr_bodystate_crouch"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.act_state_mgr_bodystate_crouch.Method = ...`). */
  export const act_state_mgr_bodystate_crouch: act_state_mgr_bodystate_crouch
  /** Anomaly `class "act_state_mgr_bodystate_crouch_danger"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.act_state_mgr_bodystate_crouch_danger.Method = ...`). */
  export const act_state_mgr_bodystate_crouch_danger: act_state_mgr_bodystate_crouch_danger
  /** Anomaly `class "act_state_mgr_bodystate_standing"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.act_state_mgr_bodystate_standing.Method = ...`). */
  export const act_state_mgr_bodystate_standing: act_state_mgr_bodystate_standing
  /** Anomaly `class "act_state_mgr_bodystate_standing_free"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.act_state_mgr_bodystate_standing_free.Method = ...`). */
  export const act_state_mgr_bodystate_standing_free: act_state_mgr_bodystate_standing_free
  /** Anomaly `class "eva_state_mgr_bodystate"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.eva_state_mgr_bodystate.Method = ...`). */
  export const eva_state_mgr_bodystate: eva_state_mgr_bodystate
  /** Anomaly `class "eva_state_mgr_bodystate_crouch"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.eva_state_mgr_bodystate_crouch.Method = ...`). */
  export const eva_state_mgr_bodystate_crouch: eva_state_mgr_bodystate_crouch
  /** Anomaly `class "eva_state_mgr_bodystate_crouch_now"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.eva_state_mgr_bodystate_crouch_now.Method = ...`). */
  export const eva_state_mgr_bodystate_crouch_now: eva_state_mgr_bodystate_crouch_now
  /** Anomaly `class "eva_state_mgr_bodystate_standing"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.eva_state_mgr_bodystate_standing.Method = ...`). */
  export const eva_state_mgr_bodystate_standing: eva_state_mgr_bodystate_standing
  /** Anomaly `class "eva_state_mgr_bodystate_standing_now"` is also reachable on the `state_mgr_bodystate` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_bodystate.eva_state_mgr_bodystate_standing_now.Method = ...`). */
  export const eva_state_mgr_bodystate_standing_now: eva_state_mgr_bodystate_standing_now
}
