/** @noSelfInFile */

declare namespace xrs_facer {
  export const actid_facer: number
  export const actid_steal_up_facer: number
  export const evid_facer: number
  export const evid_steal_up_facer: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable, temp?: AnyTable): void
  export function check_enemy(enemy: CGameObject, obj: CGameObject): boolean
  export function configure_actions(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
  export function get_anim(npc: CGameObject): LuaMultiReturn<[string, string | undefined]>
  export function hit_callback(obj: CGameObject, amount: number, dir: vector, who: CGameObject, bone_index: string): void
  export function npc_add_precondition(action: any): void
  export function on_game_start(): void
  export function setup_generic_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, stype: number, temp?: AnyTable): void
}

/** @customConstructor action_facer */
declare class action_facer extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  cancel(): void
  finalize(): void
}

/** @customConstructor action_steal_up */
declare class action_steal_up extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_facer */
declare class evaluator_facer extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_steal_up */
declare class evaluator_steal_up extends property_evaluator {
  constructor(npc: CGameObject, name: string, storage: AnyTable)
  evaluate(): boolean
}
