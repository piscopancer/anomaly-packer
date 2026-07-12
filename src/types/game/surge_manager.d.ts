/** @noSelfInFile */

declare namespace surge_manager {
  /** The singleton surge manager instance. */
  export const SurgeManager: CSurgeManager
  export function get_surge_manager(): CSurgeManager
  export function start_surge(): void
  export function stop_surge(): void
  export function is_started(): boolean
  export function is_finished(): boolean
  export function is_loaded(): boolean
  export function actor_in_cover(): boolean
  export function npc_in_cover(npc: CGameObject): boolean
  export function job_in_surge_cover(se_obj: CseAbstract, job: AnyTable): boolean
  export function set_surge_message(message: string): void
  export function is_killing_all(): boolean
  export function sound_started(): boolean
  export function on_game_start(): void
  export function print_dbg(fmt: string, ...args: any[]): void
  export function fade(currentTime: number, startTime: number, endTime: number, startValue: number, endValue: number): number
  export function surge_callback(): void
  export function surge_callback2(): void
  export function make_dead_crow(id: number, powr: number): boolean
  export function make_dead(id: number): boolean
  export function get_task_descr(): string
  /** The current surge task target (`nearest_safe_cover` event payload), or `nil`. */
  export function get_task_target(): any
  export function set_surge_task(tsk: string): void
  export function actor_on_save(binder: object_binder, packet: net_packet): void
  export function actor_on_load(binder: object_binder, packet: net_packet): void
  export function save_state(m_data: AnyTable): void
  export function load_state(m_data: AnyTable): void
}

/** The surge (blowout) controller. Access via {@link surge_manager.get_surge_manager}. */
/** @customConstructor CSurgeManager */
declare class CSurgeManager {
  constructor()
  initialize(): void
  start(manual?: boolean): void
  new_surge_time(reset?: boolean): void
  skip_surge(): void
  end_surge(manual?: boolean): void
  /** @returns the cover name (string), a boolean in-cover flag, or `nil` */
  pos_in_cover(pos: vector, by_name?: boolean): string | boolean | undefined
  init_surge_covers(): void
  hit_power(power: number, hit_type?: number): number
  start_wave(num: number, inited_time?: number): void
  finalize(): void
  kill_wave(num: number): void
  update(): void
  displayIndicators(power: number): void
  play_blowout_sound(id?: number): void
  play_siren_sound(): void
  launch_rockets(): void
  kill_crows_at_pos(pos: vector, delay?: number): void
  /** @param fate one of `kill_at_wave` / `turn_to_zombie` / `explode` / `kill_at_end` */
  kill_objects_at_pos(surge_pos: vector, fate: string, delay?: number): void
  kill_actor_at_pos(pos: vector): void
  kill_all_unhided(): void
  turn_to_zombie(se_obj: CseAbstract, squad?: any): void
  explode(se_obj: CseAbstract, squad?: any): void
  give_surge_hide_task(): void
}
