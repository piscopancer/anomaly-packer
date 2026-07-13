/** @noSelfInFile */

declare namespace xr_companion {
  export const beh_wait_ignore: number
  export const beh_wait_near: number
  export const beh_wait_simple: number
  export const beh_walk_ignore: number
  export const beh_walk_near: number
  export const beh_walk_simple: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function select_position(npc: CGameObject, st: AnyTable): number | undefined
  export function set_scheme(object: CGameObject, ini: system_ini, scheme: string, section: Section): void
  export function vector_rotate_y(v: vector, angle: number): vector
}

/** @customConstructor action_companion_activity */
declare class action_companion_activity extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  beh_walk_simple(): void
  beh_wait_simple(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_companion */
declare class evaluator_need_companion extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
