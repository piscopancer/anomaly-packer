// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_combat {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function disable_scheme(npc: TODO, scheme: TODO, stype: TODO): TODO
  export function set_combat_type(npc: TODO, actor: TODO, t: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
}

/** @customConstructor evaluator_check_combat */
declare class evaluator_check_combat extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_enemy */
declare class evaluator_enemy extends property_evaluator {
  constructor(name: TODO, name_: TODO)
  evaluate(): TODO
}
