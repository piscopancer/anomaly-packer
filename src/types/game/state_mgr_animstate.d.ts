/** @noSelfInFile */

/** @customConstructor act_state_mgr_animstate_start */
declare class act_state_mgr_animstate_start extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_animstate_stop */
declare class act_state_mgr_animstate_stop extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_animstate */
declare class eva_state_mgr_animstate extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animstate_idle_now */
declare class eva_state_mgr_animstate_idle_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animstate_locked */
declare class eva_state_mgr_animstate_locked extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animstate_play_now */
declare class eva_state_mgr_animstate_play_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}
