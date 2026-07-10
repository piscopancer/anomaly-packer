// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_combat_zombied {
  export function add_to_binder(npc: TODO, ini: TODO, st: TODO, planner: TODO): TODO
}

/** @customConstructor action_zombie_go_to_danger */
declare class action_zombie_go_to_danger extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  set_state(state: TODO, be: TODO, pos: TODO): TODO
  execute(): TODO
  finalize(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
}

/** @customConstructor action_zombie_shoot */
declare class action_zombie_shoot extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  set_state(state: TODO, be: TODO, pos: TODO): TODO
  execute(): TODO
  calc_random_direction(): TODO
  finalize(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
}

/** @customConstructor evaluator_combat_zombied */
declare class evaluator_combat_zombied extends property_evaluator {
  constructor(name: TODO, glob_storage: TODO, name_: TODO)
  evaluate(): TODO
}
