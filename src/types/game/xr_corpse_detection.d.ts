/** @noSelfInFile */

declare namespace xr_corpse_detection {
  export const lootable_table: AnyTable
  export function add_to_binder(npc: CGameObject, char_ini: system_ini, scheme: string, section: Section, st: AnyTable, temp?: AnyTable): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function get_all_from_corpse(npc: CGameObject): void
  export function get_loot_table(ini: system_ini): AnyTable
  export function has_valuable_loot(obj: CGameObject): boolean
  export function is_under_corpse_detection(npc: CGameObject): boolean
  export function near_actor(obj: CGameObject): boolean
  export function on_game_start(): void
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section, stype: number, st: AnyTable): void
  export function set_valuable_loot(id: number, val: boolean): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_search_corpse */
declare class action_search_corpse extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_corpse */
declare class evaluator_corpse extends property_evaluator {
  constructor(name: string, storage: AnyTable, npc: CGameObject)
  find_valid_target(): boolean
  evaluate(): boolean
}
