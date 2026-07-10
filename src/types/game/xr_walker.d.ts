// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_walker {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_walker_activity */
declare class action_walker_activity extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  activate_scheme(loading: TODO, npc: TODO): TODO
  reset_scheme(loading: TODO, npc: TODO): TODO
  execute(): TODO
  update(): TODO
  finalize(): TODO
  position_riched(): TODO
  net_destroy(npc: TODO): TODO
}

/** @customConstructor evaluator_need_walker */
declare class evaluator_need_walker extends property_evaluator {
  constructor(storage: TODO, name: TODO, name_: TODO)
  evaluate(): TODO
}
