// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_camper {
  export function add_to_binder(object: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_patrol */
declare class action_patrol extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  reset_scheme(): TODO
  activate_scheme(): TODO
  can_shoot(): TODO
  execute(): TODO
  process_danger(): TODO
  scan(flag: TODO): TODO
  get_next_point(flag: TODO): TODO
  process_point(mode: TODO, number: TODO): TODO
  finalize(): TODO
  on_place(): TODO
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): TODO
  formation_callback(mode: TODO, number: TODO, index: TODO): TODO
  death_callback(npc: TODO): TODO
  deactivate(npc: TODO): TODO
  net_destroy(npc: TODO): TODO
}

/** @customConstructor evaluator_close_combat */
declare class evaluator_close_combat extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_end */
declare class evaluator_end extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
