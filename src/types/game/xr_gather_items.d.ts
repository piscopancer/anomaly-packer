/** @noSelfInFile */

declare namespace xr_gather_items {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function gather_item(npc: CGameObject): void
  export function is_under_gather_items(npc: CGameObject): boolean
  export function near_actor(obj: CGameObject): boolean
  export function npc_add_precondition(action: any): void
  export function on_game_start(): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: string, stype: number, st: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor act_gather_itm */
declare class act_gather_itm extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor eva_gather_itm */
declare class eva_gather_itm extends property_evaluator {
  constructor(name: string, storage: AnyTable, npc: CGameObject)
  find_valid_item(): boolean
  evaluate(): boolean
}

/** @customConstructor evaluator_gather_items */
declare class evaluator_gather_items extends property_evaluator {
  constructor(name: string, storage: AnyTable, npc: CGameObject)
  evaluate(): boolean
}
