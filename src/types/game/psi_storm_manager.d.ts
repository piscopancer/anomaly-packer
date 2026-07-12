/** @noSelfInFile */

declare namespace psi_storm_manager {
  export const PsiStormManager: CPsiStormManager
  export function get_psi_storm_manager(): CPsiStormManager
  export function get_task_title(): string
  export function get_task_descr(): string
  export function get_task_target(): any
  export function save_state(m_data: AnyTable): void
  export function load_state(m_data: AnyTable): void
  export function actor_on_save(binder: object_binder, packet: net_packet): void
  export function actor_on_load(binder: object_binder, packet: net_packet): void
  export function start_psi_storm(p: any[]): void
  export function stop_psi_storm(p: any[]): void
  export function is_started(): boolean
  export function is_finished(): boolean
  export function is_loaded(): boolean
  export function distance_3d(p1: vector, p2: vector): number
}

/** @customConstructor CPsiStormManager */
declare class CPsiStormManager {
  constructor()
  initialize(): void
  start(manual: boolean): void
  new_psi_storm_time(): void
  skip_psi_storm(): void
  finalize(): void
  finish(manual: boolean): void
  update(): void
  vortex(): void
  launch_rockets(): void
  vortex_actor_hit(vortex: AnyTable): void
  kill_objects_at_pos(vortex_pos: vector, fate: any): void
  kill_crows_at_pos(pos: vector): void
  give_psi_storm_hide_task(): void
}
