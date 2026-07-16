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
  _delta: TODO // @generated field — refine type
  finished: boolean // @generated field — refine type
  first_update: boolean // @generated field — refine type
  game_time_factor: TODO // @generated field — refine type
  hitFactor: number // @generated field — refine type
  humanParticles: TODO // @generated field — refine type
  ini: TODO // @generated field — refine type
  inited_time: TODO // @generated field — refine type
  last_psi_storm_time: TODO // @generated field — refine type
  max_distance_electro_hit: number // @generated field — refine type
  max_distance_npc_hit: number // @generated field — refine type
  max_distance_psi_hit: number // @generated field — refine type
  next_vortex_at: TODO // @generated field — refine type
  psi_storm_duration: number // @generated field — refine type
  psi_storm_message: string // @generated field — refine type
  psi_storm_task_sect: string // @generated field — refine type
  skip_message: TODO // @generated field — refine type
  stages: TODO // @generated field — refine type
  started: boolean // @generated field — refine type
  task_given: TODO // @generated field — refine type
  time_forwarded: boolean // @generated field — refine type
  vortex_distance_max: number // @generated field — refine type
  vortex_index: TODO // @generated field — refine type
  vortex_period_max: number // @generated field — refine type
  vortex_period_min: number // @generated field — refine type
  vortexes: TODO // @generated field — refine type
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

declare namespace psi_storm_manager {
  /** Anomaly `class "CPsiStormManager"` is also reachable on the `psi_storm_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`psi_storm_manager.CPsiStormManager.Method = ...`). */
  export const CPsiStormManager: CPsiStormManager
}
