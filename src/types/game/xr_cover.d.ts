// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_cover {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_cover */
declare class action_cover extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  activate_scheme(): TODO
  execute(): TODO
  finalize(): TODO
  position_riched(): TODO
}

/** @customConstructor evaluator_need_cover */
declare class evaluator_need_cover extends property_evaluator {
  constructor(storage: TODO, name: TODO, name_: TODO)
  evaluate(): TODO
}
