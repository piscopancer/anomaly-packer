// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace bind_anomaly_field {
  export const dyn_anomalies: TODO
  export const fields_by_names: TODO
  export function add_marker(lvl: TODO, section: TODO, id: TODO, state: TODO): TODO
  export function bind(obj: TODO): TODO
  export function dyn_anomalies_refresh(force: TODO): TODO
  export function dyn_anomalies_spawn(): TODO
  export function dyn_anomalies_suffle(): TODO
  export function dyn_anomalies_update(): TODO
  export function ini_settings(): TODO
  export function on_game_start(): TODO
  export function print_debug(...args: TODO[]): TODO
  export function pulse_anomaly_update(): TODO
}

/** @customConstructor anomaly_field_binder */
declare class anomaly_field_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): TODO
  reinit(): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(): TODO
  set_enable(bEnable: TODO): TODO
  update(delta: TODO): TODO
  net_save_relevant(): TODO
}
