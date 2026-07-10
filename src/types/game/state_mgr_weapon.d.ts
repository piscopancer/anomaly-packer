// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace state_mgr_weapon {
  export function get_idle_state(target_state: TODO): TODO
  export function get_queue_params(npc: TODO, st: TODO, override: TODO): TODO
  export function get_weapon(obj: TODO, target_state: TODO): TODO
  export function strappable_weapon(obj: TODO): TODO
  export function weapon_locked(npc: TODO): TODO
}

/** @customConstructor act_state_mgr_weapon_drop */
declare class act_state_mgr_weapon_drop extends action_base {
  constructor(name: TODO, st: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor act_state_mgr_weapon_none */
declare class act_state_mgr_weapon_none extends action_base {
  constructor(name: TODO, st: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor act_state_mgr_weapon_strapp */
declare class act_state_mgr_weapon_strapp extends action_base {
  constructor(name: TODO, st: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor act_state_mgr_weapon_unstrapp */
declare class act_state_mgr_weapon_unstrapp extends action_base {
  constructor(name: TODO, st: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor eva_state_mgr_weapon */
declare class eva_state_mgr_weapon extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_drop */
declare class eva_state_mgr_weapon_drop extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_fire */
declare class eva_state_mgr_weapon_fire extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_locked */
declare class eva_state_mgr_weapon_locked extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_none */
declare class eva_state_mgr_weapon_none extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_none_now */
declare class eva_state_mgr_weapon_none_now extends property_evaluator {
  constructor(name: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_strapped */
declare class eva_state_mgr_weapon_strapped extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_strapped_now */
declare class eva_state_mgr_weapon_strapped_now extends property_evaluator {
  constructor(name: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_unstrapped */
declare class eva_state_mgr_weapon_unstrapped extends property_evaluator {
  constructor(name: TODO, st: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_weapon_unstrapped_now */
declare class eva_state_mgr_weapon_unstrapped_now extends property_evaluator {
  constructor(name: TODO, name_: TODO)
  evaluate(): TODO
}
