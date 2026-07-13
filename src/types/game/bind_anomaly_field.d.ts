/** @noSelfInFile */

declare namespace bind_anomaly_field {
  export const dyn_anomalies: AnyTable
  export const fields_by_names: AnyTable
  export function add_marker(lvl: LevelName, section: Section, id: number, state: boolean): void
  export function bind(obj: CGameObject): void
  export function dyn_anomalies_refresh(force: boolean): boolean
  export function dyn_anomalies_spawn(): void
  export function dyn_anomalies_suffle(): void
  export function dyn_anomalies_update(): boolean
  export function ini_settings(): void
  export function on_game_start(): void
  export function print_debug(...args: any[]): void
  export function pulse_anomaly_update(): void
}

/** @customConstructor anomaly_field_binder */
declare class anomaly_field_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(): void
  set_enable(bEnable: boolean): void
  update(delta: number): void
  net_save_relevant(): boolean
}
