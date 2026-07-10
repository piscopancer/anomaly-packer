// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_anomaly_zone {
  export const artefact_points_by_id: TODO
  export const artefact_ways_by_id: TODO
  export const parent_zones_by_artefact_id: TODO
  export function bind(obj: TODO): TODO
  export function force_spawn_artefacts(): TODO
  export function on_game_start(): TODO
  export function print_debug(fmt: TODO, ...args: TODO[]): TODO
}

/** @customConstructor anomaly_zone_binder */
declare class anomaly_zone_binder extends object_binder {
  constructor(obj: TODO)
  disable_anomaly_fields(): TODO
  respawn_artefacts_and_replace_anomaly_zone(): TODO
  spawn_artefact_randomly(): TODO
  refresh(from: TODO): TODO
  get_artefact_path(): TODO
  set_forced_override(artefact_name: TODO): TODO
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  update(delta: TODO): TODO
  cleanup(): TODO
  turn_off(): TODO
  turn_on(f_af: TODO): TODO
  on_artefact_take(obj: TODO): TODO
  net_save_relevant(): TODO
  save(thread: TODO): TODO
  load(thread: TODO): TODO
}
