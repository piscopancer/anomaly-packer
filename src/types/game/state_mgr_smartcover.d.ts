/** @noSelfInFile */

/** @customConstructor act_state_mgr_smartcover_enter */
declare class act_state_mgr_smartcover_enter extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_smartcover_exit */
declare class act_state_mgr_smartcover_exit extends action_base {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_in_smartcover */
declare class eva_state_mgr_in_smartcover extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_smartcover */
declare class eva_state_mgr_smartcover extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_smartcover_locked */
declare class eva_state_mgr_smartcover_locked extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_smartcover_need */
declare class eva_state_mgr_smartcover_need extends property_evaluator {
  st: TODO // @generated field — refine type
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

declare namespace state_mgr_smartcover {
  /** Anomaly `class "act_state_mgr_smartcover_enter"` is also reachable on the `state_mgr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_smartcover.act_state_mgr_smartcover_enter.Method = ...`). */
  export const act_state_mgr_smartcover_enter: act_state_mgr_smartcover_enter
  /** Anomaly `class "act_state_mgr_smartcover_exit"` is also reachable on the `state_mgr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_smartcover.act_state_mgr_smartcover_exit.Method = ...`). */
  export const act_state_mgr_smartcover_exit: act_state_mgr_smartcover_exit
  /** Anomaly `class "eva_state_mgr_in_smartcover"` is also reachable on the `state_mgr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_smartcover.eva_state_mgr_in_smartcover.Method = ...`). */
  export const eva_state_mgr_in_smartcover: eva_state_mgr_in_smartcover
  /** Anomaly `class "eva_state_mgr_smartcover"` is also reachable on the `state_mgr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_smartcover.eva_state_mgr_smartcover.Method = ...`). */
  export const eva_state_mgr_smartcover: eva_state_mgr_smartcover
  /** Anomaly `class "eva_state_mgr_smartcover_locked"` is also reachable on the `state_mgr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_smartcover.eva_state_mgr_smartcover_locked.Method = ...`). */
  export const eva_state_mgr_smartcover_locked: eva_state_mgr_smartcover_locked
  /** Anomaly `class "eva_state_mgr_smartcover_need"` is also reachable on the `state_mgr_smartcover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`state_mgr_smartcover.eva_state_mgr_smartcover_need.Method = ...`). */
  export const eva_state_mgr_smartcover_need: eva_state_mgr_smartcover_need
}
