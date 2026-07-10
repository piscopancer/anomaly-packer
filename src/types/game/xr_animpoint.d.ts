// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_animpoint {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor action_animpoint */
declare class action_animpoint extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  net_destroy(npc: TODO): TODO
  finalize(): TODO
}

/** @customConstructor action_reach_animpoint */
declare class action_reach_animpoint extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor animpoint */
declare class animpoint {
  constructor(npc: TODO, storage: TODO)
  initialize(): TODO
  activate_scheme(loading: TODO, npc: TODO, switching_scheme: TODO): TODO
  calculate_position(): TODO
  position_riched(): TODO
  fill_approved_actions(): TODO
  start(): TODO
  stop(): TODO
  get_action(): TODO
  update(): TODO
}

/** @customConstructor evaluator_need_animpoint */
declare class evaluator_need_animpoint extends property_evaluator {
  constructor(storage: TODO, name: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_reach_animpoint */
declare class evaluator_reach_animpoint extends property_evaluator {
  constructor(storage: TODO, name: TODO, name_: TODO)
  evaluate(): TODO
}
