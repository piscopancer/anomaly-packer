/** @noSelfInFile */

declare namespace xr_patrol {
  export function add_to_binder(object: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor PatrolManager */
declare class PatrolManager {
  constructor(path_name: string)
  add_npc(npc: CGameObject, leader: boolean): void
  remove_npc(npc: CGameObject): void
  reset_positions(): void
  set_formation(formation: string): void
  get_commander(npc: CGameObject): CGameObject
  get_npc_command(npc: CGameObject): LuaMultiReturn<[number, vector, string]>
  set_command(npc: CGameObject, command: string, formation: string): void
  is_commander(npc_id: number): boolean
  is_commander_in_meet(): boolean
  update(): void
}

/** @customConstructor action_commander */
declare class action_commander extends action_base {
  constructor(npc: CGameObject, action_name: string, storage: AnyTable)
  initialize(): void
  activate_scheme(): void
  execute(): void
  finalize(): void
  deactivate(npc: CGameObject): void
  death_callback(npc: CGameObject): void
  net_destroy(npc: CGameObject): void
  formation_callback(mode: any, number: number, index: number): void
}

/** @customConstructor evaluator_patrol_comm */
declare class evaluator_patrol_comm extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}

/** @customConstructor evaluator_patrol_end */
declare class evaluator_patrol_end extends property_evaluator {
  constructor(name: string, storage: AnyTable)
  evaluate(): boolean
}
