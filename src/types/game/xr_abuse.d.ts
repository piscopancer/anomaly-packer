// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_abuse {
  export function add_abuse(npc: TODO, value: TODO): TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function clear_abuse(npc: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_abuse(npc: TODO): TODO
  export function enable_abuse(npc: TODO): TODO
  export function is_abuse(npc: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor CAbuseManager */
declare class CAbuseManager {
  constructor(npc: TODO, storage: TODO)
  SetAbuseRate(rate: TODO): TODO
  abused(): TODO
  update(): TODO
  addAbuse(value: TODO): TODO
  clearAbuse(): TODO
  disableAbuse(): TODO
  enableAbuse(): TODO
}

/** @customConstructor action_abuse_hit */
declare class action_abuse_hit extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO, char_ini: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_abuse */
declare class evaluator_abuse extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
