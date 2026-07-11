/** @noSelfInFile */

declare namespace rx_ff {
  export const actid: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): void
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function npc_add_precondition(action: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_verso */
declare class action_verso extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_dont_shoot */
declare class evaluator_dont_shoot extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  check_in_los(friend: TODO, be: TODO, be_pos: TODO): boolean
  check_all_in_los(): boolean
  evaluate(): boolean
}
