// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace axr_task_manager {
  export const CFG_CACHE: TODO
  export const available_tasks: TODO
  export const bounties_by_id: TODO
  export const drx_sl_honchos_table: TODO
  export const drx_sl_main_honcho_table: TODO
  export const finished_tasks: TODO
  export const hostages_by_id: TODO
  export const ongoing_tasks: TODO
  export function clear_skipped_tasks(): TODO
  export function drx_sl_generate_change_factions_task(npc: TODO, skip: TODO, is_sim: TODO): TODO
  export function drx_sl_generate_random_sl_task(npc: TODO, skip: TODO, is_sim: TODO): TODO
  export function drx_sl_get_finished_cf_task(npc: TODO, is_sim: TODO): TODO
  export function drx_sl_get_finished_task(npc: TODO, is_sim: TODO): TODO
  export function drx_sl_get_mechanic_task(npc: TODO, skip: TODO, is_sim: TODO): TODO
  export function drx_sl_set_finished_cf_task_complete(npc: TODO, is_sim: TODO): TODO
  export function drx_sl_set_finished_task_complete(npc: TODO, is_sim: TODO): TODO
  export function generate_available_tasks(npc: TODO, is_sim: TODO): TODO
  export function generate_cache(): TODO
  export function generate_finished_tasks(npc: TODO, is_sim: TODO): TODO
  export function generate_ongoing_tasks(npc: TODO, is_sim: TODO): TODO
  export function get_fetch_task_description(task_id: TODO): TODO
  export function get_first_available_task(npc: TODO, skip: TODO, is_sim: TODO): TODO
  export function get_first_finished_task(npc: TODO, is_sim: TODO): TODO
  export function get_task_complete_text(task_id: TODO): TODO
  export function get_task_job_description(task_id: TODO): TODO
  export function is_task_giver_valid(tsk: TODO): TODO
  export function is_task_on_complete_stage(tsk: TODO): TODO
  export function npc_give_first_available_ordered_task(npc: TODO, is_sim: TODO): TODO
  export function on_game_start(): TODO
  export function set_finished_task_complete(npc: TODO, is_sim: TODO): TODO
  export function trigger_fetch_func(task_id: TODO): TODO
  export function trigger_job_func(task_id: TODO): TODO
}
