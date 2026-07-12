/** @noSelfInFile */

declare namespace axr_task_manager {
  /** Task config cache, keyed by task id. */
  export const CFG_CACHE: Record<string, any>
  /** Available tasks, keyed by NPC id. */
  export const available_tasks: Record<number, any>
  export const bounties_by_id: Record<number, any>
  export const drx_sl_honchos_table: AnyTable
  export const drx_sl_main_honcho_table: AnyTable
  export const finished_tasks: Record<number, any>
  export const hostages_by_id: Record<number, any>
  export const ongoing_tasks: Record<number, any>
  export function clear_skipped_tasks(): void
  export function drx_sl_generate_change_factions_task(npc: CGameObject, skip?: boolean, is_sim?: boolean): string
  export function drx_sl_generate_random_sl_task(npc: CGameObject, skip?: boolean, is_sim?: boolean): string
  export function drx_sl_get_finished_cf_task(npc: CGameObject, is_sim?: boolean): string
  export function drx_sl_get_finished_task(npc: CGameObject, is_sim?: boolean): string
  export function drx_sl_get_mechanic_task(npc: CGameObject, skip?: boolean, is_sim?: boolean): string
  export function drx_sl_set_finished_cf_task_complete(npc: CGameObject, is_sim?: boolean): void
  export function drx_sl_set_finished_task_complete(npc: CGameObject, is_sim?: boolean): void
  export function generate_available_tasks(npc: CGameObject, is_sim?: boolean): void
  export function generate_cache(): void
  export function generate_finished_tasks(npc: CGameObject, is_sim?: boolean): void
  export function generate_ongoing_tasks(npc: CGameObject, is_sim?: boolean): void
  export function get_fetch_task_description(task_id: string): string
  export function get_first_available_task(npc: CGameObject, skip?: boolean, is_sim?: boolean): string
  export function get_first_finished_task(npc: CGameObject, is_sim?: boolean): string
  export function get_task_complete_text(task_id: string): string
  export function get_task_job_description(task_id: string): string
  export function is_task_giver_valid(tsk: CGameTask): boolean
  export function is_task_on_complete_stage(tsk: CGameTask): boolean
  export function npc_give_first_available_ordered_task(npc: CGameObject, is_sim?: boolean): string
  export function on_game_start(): void
  export function set_finished_task_complete(npc: CGameObject, is_sim?: boolean): void
  export function trigger_fetch_func(task_id: string): void
  export function trigger_job_func(task_id: string): void
}
