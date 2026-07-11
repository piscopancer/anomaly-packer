/** @noSelfInFile */

declare namespace axr_radio_in_heli {
  export const actid: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function npc_add_precondition(action: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_radio_in_heli */
declare class action_radio_in_heli extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO)
  initialize(): void
  try_go_cover(npc: TODO, ene_pos: TODO): TODO
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_radio_in_heli */
declare class evaluator_radio_in_heli extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  evaluate(): boolean
}
