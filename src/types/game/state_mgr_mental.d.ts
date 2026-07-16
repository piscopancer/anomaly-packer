/** @noSelfInFile */

/** @customConstructor act_state_mgr_mental_danger */
declare class act_state_mgr_mental_danger extends action_base {
  constructor(name: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_mental_free */
declare class act_state_mgr_mental_free extends action_base {
  constructor(name: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_mental_panic */
declare class act_state_mgr_mental_panic extends action_base {
  constructor(name: string)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_mental */
declare class eva_state_mgr_mental extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_mental_danger */
declare class eva_state_mgr_mental_danger extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_mental_danger_now */
declare class eva_state_mgr_mental_danger_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_mental_free */
declare class eva_state_mgr_mental_free extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_mental_free_now */
declare class eva_state_mgr_mental_free_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_mental_panic */
declare class eva_state_mgr_mental_panic extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_mental_panic_now */
declare class eva_state_mgr_mental_panic_now extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

declare namespace state_mgr_mental {
  /** Anomaly `class "act_state_mgr_mental_danger"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.act_state_mgr_mental_danger.Method = ...`). */
  export const act_state_mgr_mental_danger: act_state_mgr_mental_danger
  /** Anomaly `class "act_state_mgr_mental_free"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.act_state_mgr_mental_free.Method = ...`). */
  export const act_state_mgr_mental_free: act_state_mgr_mental_free
  /** Anomaly `class "act_state_mgr_mental_panic"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.act_state_mgr_mental_panic.Method = ...`). */
  export const act_state_mgr_mental_panic: act_state_mgr_mental_panic
  /** Anomaly `class "eva_state_mgr_mental"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental.Method = ...`). */
  export const eva_state_mgr_mental: eva_state_mgr_mental
  /** Anomaly `class "eva_state_mgr_mental_danger"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental_danger.Method = ...`). */
  export const eva_state_mgr_mental_danger: eva_state_mgr_mental_danger
  /** Anomaly `class "eva_state_mgr_mental_danger_now"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental_danger_now.Method = ...`). */
  export const eva_state_mgr_mental_danger_now: eva_state_mgr_mental_danger_now
  /** Anomaly `class "eva_state_mgr_mental_free"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental_free.Method = ...`). */
  export const eva_state_mgr_mental_free: eva_state_mgr_mental_free
  /** Anomaly `class "eva_state_mgr_mental_free_now"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental_free_now.Method = ...`). */
  export const eva_state_mgr_mental_free_now: eva_state_mgr_mental_free_now
  /** Anomaly `class "eva_state_mgr_mental_panic"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental_panic.Method = ...`). */
  export const eva_state_mgr_mental_panic: eva_state_mgr_mental_panic
  /** Anomaly `class "eva_state_mgr_mental_panic_now"` is also reachable on the `state_mgr_mental` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_mental.eva_state_mgr_mental_panic_now.Method = ...`). */
  export const eva_state_mgr_mental_panic_now: eva_state_mgr_mental_panic_now
}
