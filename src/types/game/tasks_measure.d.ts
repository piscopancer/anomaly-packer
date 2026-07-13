/** @noSelfInFile */

declare namespace tasks_measure {
  export function close_measurement_hud(): void
  export function get_UI(): UI3D_Anomaly
  export function postpone_for_next_frame(task_id: string, level_target: string): boolean
  export function spawn_squad_dynamic(squad_section: Section, min_distance: number, max_distance: number): void
  export function start_measurement_hud(task_id: string): void
}

/** @customConstructor UI3D_Anomaly */
declare class UI3D_Anomaly extends CUIScriptWnd {
  constructor()
  __finalize(): void
  Update(): void
}
