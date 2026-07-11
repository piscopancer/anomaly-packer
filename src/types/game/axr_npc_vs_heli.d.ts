/** @noSelfInFile */

declare namespace axr_npc_vs_heli {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: TODO, scheme: TODO, section: TODO, storage: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function disable_generic_scheme(npc: TODO, scheme: TODO, stype: TODO): void
  export function is_under_npc_vs_heli(npc: TODO): boolean
  export function npc_add_precondition(action: TODO): TODO
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor action_npc_vs_heli */
declare class action_npc_vs_heli extends action_base {
  constructor(npc: TODO, name: TODO, storage: TODO)
  initialize(): void
  try_go_cover(npc: TODO, ene_pos: TODO, r: TODO): TODO
  try_go_backward(npc: TODO): TODO
  try_to_strafe(npc: TODO): TODO
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_npc_vs_heli */
declare class evaluator_npc_vs_heli extends property_evaluator {
  constructor(npc: TODO, name: TODO, storage: TODO)
  evaluate(): boolean
}
