/** @noSelfInFile */

/** @customConstructor act_state_mgr_movement_run */
declare class act_state_mgr_movement_run extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_run_search */
declare class act_state_mgr_movement_run_search extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_run_turn */
declare class act_state_mgr_movement_run_turn extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_stand */
declare class act_state_mgr_movement_stand extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_stand_search */
declare class act_state_mgr_movement_stand_search extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_stand_turn */
declare class act_state_mgr_movement_stand_turn extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_walk */
declare class act_state_mgr_movement_walk extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_walk_search */
declare class act_state_mgr_movement_walk_search extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_movement_walk_turn */
declare class act_state_mgr_movement_walk_turn extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_movement */
declare class eva_state_mgr_movement extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_movement_run */
declare class eva_state_mgr_movement_run extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_movement_stand */
declare class eva_state_mgr_movement_stand extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_movement_stand_now */
declare class eva_state_mgr_movement_stand_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_movement_walk */
declare class eva_state_mgr_movement_walk extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}
