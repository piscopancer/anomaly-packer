/** @noSelfInFile */

declare namespace xr_help_wounded {
  export const ini: TODO
  export function add_to_binder(npc: TODO, char_ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function help_wounded(npc: CGameObject): boolean
  export function is_under_help_wounded(npc: TODO): boolean
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, t: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_help_wounded */
declare class action_help_wounded extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_wounded_exist */
declare class evaluator_wounded_exist extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO)
  find_valid_target(): boolean
  evaluate(): boolean
}
