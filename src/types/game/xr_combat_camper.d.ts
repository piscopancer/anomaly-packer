/** @noSelfInFile */

declare namespace xr_combat_camper {
  export const base: TODO
  export function add_to_binder(npc: TODO, ini: TODO, st: TODO, planner: TODO, temp: TODO): TODO
}

/** @customConstructor action_look_around */
declare class action_look_around extends action_base {
  constructor(name: TODO, storage: TODO)
  initialize(): TODO
  reset(): TODO
  execute(): TODO
  finalize(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
}

/** @customConstructor action_shoot */
declare class action_shoot extends action_base {
  constructor(name: TODO, storage: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_combat_camper */
declare class evaluator_combat_camper extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_see */
declare class evaluator_see extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): TODO
}
