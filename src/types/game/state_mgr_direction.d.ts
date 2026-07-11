/** @noSelfInFile */

declare namespace state_mgr_direction {
  export function look_at_object(npc: TODO, st: TODO): void
  export function look_object_type(npc: TODO, st: TODO): boolean
  export function look_position_type(npc: TODO, st: TODO): TODO
  export function turn(npc: TODO, st: TODO, check: TODO): void
}

/** @customConstructor act_state_mgr_direction_search */
declare class act_state_mgr_direction_search extends action_base {
  constructor(name: TODO, st: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_direction_turn */
declare class act_state_mgr_direction_turn extends action_base {
  constructor(name: TODO, st: TODO)
  initialize(): void
  execute(): void
  finalize(): void
  turn(): void
}

/** @customConstructor eva_state_mgr_direction */
declare class eva_state_mgr_direction extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): boolean
  callback(): void
}

/** @customConstructor eva_state_mgr_direction_search */
declare class eva_state_mgr_direction_search extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): boolean
}
