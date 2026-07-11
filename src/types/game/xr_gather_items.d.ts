/** @noSelfInFile */

declare namespace xr_gather_items {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, st: TODO, temp: TODO): TODO
  export function configure_actions(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): TODO
  export function gather_item(npc: TODO): void
  export function is_under_gather_items(npc: TODO): boolean
  export function near_actor(obj: TODO): boolean
  export function npc_add_precondition(action: TODO): TODO
  export function on_game_start(): TODO
  export function reset_generic_scheme(npc: TODO, scheme: TODO, section: TODO, stype: TODO, st: TODO): void
  export function setup_generic_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, stype: TODO, temp: TODO): void
}

/** @customConstructor act_gather_itm */
declare class act_gather_itm extends action_base {
  constructor(name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_gather_itm */
declare class eva_gather_itm extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO)
  find_valid_item(): boolean
  evaluate(): boolean
}

/** @customConstructor evaluator_gather_items */
declare class evaluator_gather_items extends property_evaluator {
  constructor(name: TODO, storage: TODO, npc: TODO)
  evaluate(): boolean
}
