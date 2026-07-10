// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_sleeper {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function is_npc_asleep(npc: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_sleeper_activity */
declare class action_sleeper_activity extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  reset_scheme(): TODO
  activate_scheme(): TODO
  callback(mode: TODO, number: TODO): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_need_sleeper */
declare class evaluator_need_sleeper extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
