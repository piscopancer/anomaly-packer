/** @noSelfInFile */

declare namespace axr_stalker_panic {
  export const actid: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function npc_add_precondition(action: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_stalker_panic */
declare class action_stalker_panic extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO)
  initialize(): void
  try_go_cover(npc: TODO, ene_pos: TODO): TODO
  try_to_strafe(npc: TODO): TODO
  try_to_strafe_behind_enemy(npc: TODO, enemy: TODO, ene_pos: TODO, dist: TODO): TODO
  try_go_backward(npc: TODO): TODO
  try_go_cover_backward(npc: TODO, ene_pos: TODO): TODO
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_stalker_panic */
declare class evaluator_stalker_panic extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  evaluate(): boolean
}
