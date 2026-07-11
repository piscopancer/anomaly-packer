/** @noSelfInFile */

declare namespace xr_combat {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function disable_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function set_combat_type(npc: CGameObject, actor: TODO, t: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor evaluator_check_combat */
declare class evaluator_check_combat extends property_evaluator {
  constructor(name: TODO, storage: TODO)
  evaluate(): boolean
}

/** @customConstructor evaluator_enemy */
declare class evaluator_enemy extends property_evaluator {
  constructor(name: TODO)
  evaluate(): TODO
}
