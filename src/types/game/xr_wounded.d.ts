// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace xr_wounded {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function as_play_sound(actor: TODO, obj: TODO, p: TODO): TODO
  export function as_self_explode(actor: TODO, obj: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function eat_medkit(npc: TODO): TODO
  export function hit_callback(npc_id: TODO): TODO
  export function init_wounded(npc: TODO, ini: TODO, section: TODO, st: TODO, scheme: TODO): TODO
  export function is_heavy_wounded_by_id(npc_id: TODO): TODO
  export function is_psy_wounded_by_id(npc_id: TODO): TODO
  export function is_wounded(npc: TODO): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function unlock_medkit(npc: TODO): TODO
}

/** @customConstructor Cwound_manager */
declare class Cwound_manager {
  constructor(npc: TODO, storage: TODO)
  update(): TODO
  unlock_medkit(): TODO
  eat_medkit(): TODO
  process_fight(hp: TODO): TODO
  process_victim(hp: TODO): TODO
  process_hp_wound(hp: TODO): TODO
  process_psy_wound(hp: TODO): TODO
  get_key_from_distance(t: TODO, hp: TODO): TODO
  hit_callback(): TODO
}

/** @customConstructor action_wounded */
declare class action_wounded extends action_base {
  constructor(name: TODO, storage: TODO, name_: TODO)
  initialize(): TODO
  execute(): TODO
  finalize(): TODO
}

/** @customConstructor evaluator_can_fight */
declare class evaluator_can_fight extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_wound */
declare class evaluator_wound extends property_evaluator {
  constructor(name: TODO, storage: TODO, name_: TODO)
  evaluate(): TODO
}
