/** @noSelfInFile */

declare namespace xr_wounded {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function as_play_sound(actor: TODO, obj: TODO, p: TODO): void
  export function as_self_explode(actor: TODO, obj: TODO): void
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
  export function eat_medkit(npc: TODO): void
  export function hit_callback(npc_id: TODO): void
  export function init_wounded(npc: TODO, ini: TODO, section: TODO, st: TODO, scheme: TODO): void
  export function is_heavy_wounded_by_id(npc_id: TODO): boolean
  export function is_psy_wounded_by_id(npc_id: TODO): boolean
  export function is_wounded(npc: TODO): boolean
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
  export function unlock_medkit(npc: TODO): void
}

/** @customConstructor Cwound_manager */
declare class Cwound_manager {
  constructor(npc: TODO, storage: TODO)
  update(): void
  unlock_medkit(): void
  eat_medkit(): void
  process_fight(hp: TODO): void
  process_victim(hp: TODO): void
  process_hp_wound(hp: TODO): void
  process_psy_wound(hp: TODO): void
  get_key_from_distance(t: TODO, hp: TODO): TODO
  hit_callback(): void
}

/** @customConstructor action_wounded */
declare class action_wounded extends action_base {
  constructor(name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_can_fight */
declare class evaluator_can_fight extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): boolean
}

/** @customConstructor evaluator_wound */
declare class evaluator_wound extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): boolean
}
