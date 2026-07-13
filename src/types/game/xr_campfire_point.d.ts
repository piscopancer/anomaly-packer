/** @noSelfInFile */

declare namespace xr_campfire_point {
  export const actid: number
  export const evaid: number
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_point_campfire */
declare class action_point_campfire extends action_base {
  constructor(npc_name: string, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  execute(): void
  get_camp_action(): string | undefined
  finalize(): void
  position_riched(): boolean
}

/** @customConstructor evaluator_need_job */
declare class evaluator_need_job extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
