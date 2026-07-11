/** @noSelfInFile */

declare namespace bind_anomaly_field {
  export const dyn_anomalies: TODO
  export const fields_by_names: TODO
  export function add_marker(lvl: TODO, section: TODO, id: TODO, state: TODO): void
  export function bind(obj: TODO): void
  export function dyn_anomalies_refresh(force: TODO): boolean
  export function dyn_anomalies_spawn(): void
  export function dyn_anomalies_suffle(): void
  export function dyn_anomalies_update(): boolean
  export function ini_settings(): TODO
  export function on_game_start(): void
  export function print_debug(...args: TODO[]): void
  export function pulse_anomaly_update(): void
}

/** @customConstructor anomaly_field_binder */
declare class anomaly_field_binder extends object_binder {
  constructor(obj: TODO)
  reload(section: TODO): void
  reinit(): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(): void
  set_enable(bEnable: TODO): void
  update(delta: TODO): void
  net_save_relevant(): boolean
}
