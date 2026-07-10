// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_combat_monolith {
  export const base: TODO
  export function add_to_binder(npc: TODO, ini: TODO, st: TODO, planner: TODO): TODO
}

/** @customConstructor action_fight_close */
declare class action_fight_close extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
}

/** @customConstructor action_fight_far */
declare class action_fight_far extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor action_go_to_pos */
declare class action_go_to_pos extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_close */
declare class evaluator_close extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_combat_monolith */
declare class evaluator_combat_monolith extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_on_pos */
declare class evaluator_on_pos extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
