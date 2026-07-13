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
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_bodystate_standing_free */
declare class act_state_mgr_bodystate_standing_free extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_bodystate */
declare class eva_state_mgr_bodystate extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_crouch */
declare class eva_state_mgr_bodystate_crouch extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_crouch_now */
declare class eva_state_mgr_bodystate_crouch_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_standing */
declare class eva_state_mgr_bodystate_standing extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_bodystate_standing_now */
declare class eva_state_mgr_bodystate_standing_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}
