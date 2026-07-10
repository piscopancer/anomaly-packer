// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace state_mgr_direction {
  export function look_at_object(npc: TODO, st: TODO): TODO
  export function look_object_type(npc: TODO, st: TODO): TODO
  export function look_position_type(npc: TODO, st: TODO): TODO
  export function turn(npc: TODO, st: TODO, check: TODO): TODO
}

/** @customConstructor act_state_mgr_direction_search */
declare class act_state_mgr_direction_search extends action_base {
  constructor(name: TODO, st: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor act_state_mgr_direction_turn */
declare class act_state_mgr_direction_turn extends action_base {
  constructor(name: TODO, st: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
  turn(): TODO
}

/** @customConstructor eva_state_mgr_direction */
declare class eva_state_mgr_direction extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
  callback(): TODO
}

/** @customConstructor eva_state_mgr_direction_search */
declare class eva_state_mgr_direction_search extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}
