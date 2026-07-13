/** @noSelfInFile */

declare namespace xr_wounded {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, st: AnyTable, temp?: AnyTable): void
  export function as_play_sound(actor: CGameObject, obj: CGameObject, p: AnyTable): void
  export function as_self_explode(actor: CGameObject, obj: CGameObject): void
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function eat_medkit(npc: CGameObject): void
  export function hit_callback(npc_id: number): void
  export function init_wounded(npc: CGameObject, ini: system_ini, section: Section, st: AnyTable, scheme: string): void
  export function is_heavy_wounded_by_id(npc_id: number): boolean
  export function is_psy_wounded_by_id(npc_id: number): boolean
  export function is_wounded(npc: CGameObject): boolean
  export function reset_generic_scheme(npc: CGameObject, scheme: string, section: Section, stype: number, st: AnyTable): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, stype: number, temp?: AnyTable): void
  export function unlock_medkit(npc: CGameObject): void
}

/** Per-NPC wound state controller. @customConstructor Cwound_manager */
declare class Cwound_manager {
  constructor(npc: CGameObject, storage: AnyTable)
  update(): void
  unlock_medkit(): void
  eat_medkit(): void
  process_fight(hp: number): string
  process_victim(hp: number): string
  process_hp_wound(hp: number): LuaMultiReturn<[string, string]>
  process_psy_wound(hp: number): LuaMultiReturn<[string, string]>
  get_key_from_distance(t: AnyTable, hp: number): string
  hit_callback(): void
}

/** @customConstructor action_wounded */
declare class action_wounded extends action_base {
  constructor(name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_can_fight */
declare class evaluator_can_fight extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_wound */
declare class evaluator_wound extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
