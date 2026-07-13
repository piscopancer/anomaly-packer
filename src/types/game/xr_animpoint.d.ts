/** @noSelfInFile */

declare namespace xr_animpoint {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor action_animpoint */
declare class action_animpoint extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  net_destroy(npc: CGameObject): void
  finalize(): void
}

/** @customConstructor action_reach_animpoint */
declare class action_reach_animpoint extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor animpoint */
declare class animpoint {
  constructor(npc: CGameObject, storage: AnyTable)
  initialize(): void
  activate_scheme(loading: boolean, npc: CGameObject, switching_scheme: boolean): void
  calculate_position(): void
  position_riched(): boolean
  fill_approved_actions(): boolean
  start(): void
  stop(): void
  get_action(): string
  update(): void
}

/** @customConstructor evaluator_need_animpoint */
declare class evaluator_need_animpoint extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}

/** @customConstructor evaluator_reach_animpoint */
declare class evaluator_reach_animpoint extends property_evaluator {
  constructor(storage: AnyTable, name: string)
  evaluate(): boolean
}
