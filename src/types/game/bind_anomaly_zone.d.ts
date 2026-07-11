/** @noSelfInFile */

declare namespace bind_anomaly_zone {
  export const artefact_points_by_id: TODO
  export const artefact_ways_by_id: TODO
  export const parent_zones_by_artefact_id: TODO
  export function bind(obj: TODO): void
  export function force_spawn_artefacts(): void
  export function on_game_start(): void
  export function print_debug(fmt: TODO, ...args: TODO[]): void
}

/** @customConstructor anomaly_zone_binder */
declare class anomaly_zone_binder extends object_binder {
  constructor(obj: TODO)
  disable_anomaly_fields(): void
  respawn_artefacts_and_replace_anomaly_zone(): void
  spawn_artefact_randomly(): void
  refresh(from: TODO): void
  get_artefact_path(): TODO
  set_forced_override(artefact_name: TODO): void
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  update(delta: TODO): void
  cleanup(): void
  turn_off(): void
  turn_on(f_af: TODO): void
  on_artefact_take(obj: TODO): void
  net_save_relevant(): boolean
  save(thread: net_packet): void
  load(thread: net_packet): void
}
