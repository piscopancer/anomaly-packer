/** @noSelfInFile */

declare namespace bind_anomaly_zone {
  export const artefact_points_by_id: AnyTable
  export const artefact_ways_by_id: AnyTable
  export const parent_zones_by_artefact_id: AnyTable
  export function bind(obj: CGameObject): void
  export function force_spawn_artefacts(): void
  export function on_game_start(): void
  export function print_debug(fmt: string, ...args: any[]): void
}

/** @customConstructor anomaly_zone_binder */
declare class anomaly_zone_binder extends object_binder {
  constructor(obj: CGameObject)
  disable_anomaly_fields(): void
  respawn_artefacts_and_replace_anomaly_zone(): void
  spawn_artefact_randomly(): void
  refresh(from?: any): void
  get_artefact_path(): string
  set_forced_override(artefact_name: string): void
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  update(delta: number): void
  cleanup(): void
  turn_off(): void
  turn_on(f_af: boolean): void
  on_artefact_take(obj: CGameObject): void
  net_save_relevant(): boolean
  save(thread: net_packet): void
  load(thread: net_packet): void
}
