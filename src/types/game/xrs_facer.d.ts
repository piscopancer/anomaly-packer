// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xrs_facer {
  export const actid_facer: TODO
  export const actid_steal_up_facer: TODO
  export const evid_facer: TODO
  export const evid_steal_up_facer: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function check_enemy(enemy: TODO, obj: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): TODO
  export function get_anim(npc: TODO): TODO
  export function hit_callback(obj: TODO, amount: TODO, dir: TODO, who: TODO, bone_index: TODO): TODO
  export function npc_add_precondition(action: TODO): TODO
  export function on_game_start(): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor action_facer */
declare class action_facer extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  cancel(): TODO
  finalize(): TODO
}

/** @customConstructor action_steal_up */
declare class action_steal_up extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO, action_name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_facer */
declare class evaluator_facer extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_steal_up */
declare class evaluator_steal_up extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
