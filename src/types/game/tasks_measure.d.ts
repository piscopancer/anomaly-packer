/** @noSelfInFile */

declare namespace tasks_measure {
  export function close_measurement_hud(): void
  export function get_UI(): TODO
  export function postpone_for_next_frame(task_id: TODO, level_target: TODO): boolean
  export function spawn_squad_dynamic(squad_section: TODO, min_distance: TODO, max_distance: TODO): void
  export function start_measurement_hud(task_id: TODO): void
}

/** @customConstructor UI3D_Anomaly */
declare class UI3D_Anomaly extends CUIScriptWnd {
  constructor()
  __finalize(): void
  Update(): void
}
