/** @noSelfInFile */

declare namespace mob_walker {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor mob_walker */
declare class mob_walker {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  arrived_to_first_waypoint(): boolean
  waypoint_callback(obj: CGameObject, action_type: number, index: number): void
  update_movement_state(): void
  update_standing_state(): void
  deactivate(): void
  look_at_waypoint(pt: vector): void
}
