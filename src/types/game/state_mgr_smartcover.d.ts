/** @noSelfInFile */

/** @customConstructor act_state_mgr_smartcover_enter */
declare class act_state_mgr_smartcover_enter extends action_base {
  constructor(name: TODO, st: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_smartcover_exit */
declare class act_state_mgr_smartcover_exit extends action_base {
  constructor(name: TODO, st: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_state_mgr_in_smartcover */
declare class eva_state_mgr_in_smartcover extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_smartcover */
declare class eva_state_mgr_smartcover extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_smartcover_locked */
declare class eva_state_mgr_smartcover_locked extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_smartcover_need */
declare class eva_state_mgr_smartcover_need extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): boolean
}
