/** @noSelfInFile */

declare namespace axr_fight_from_cover {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function npc_add_precondition(action: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_fight_from_cover */
declare class action_fight_from_cover extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO)
  initialize(): void
  try_go_cover(npc: TODO, ene_pos: TODO): TODO
  try_go_backward(npc: TODO): TODO
  try_to_strafe(npc: TODO): TODO
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_fight_from_cover */
declare class evaluator_fight_from_cover extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  evaluate(): boolean
}
