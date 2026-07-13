/** @noSelfInFile */

declare namespace task_status_functor {
  export function check_if_enough_time_passed(tsk: AnyTable, task_id: string): void
  export function check_if_killed_enough(tsk: AnyTable, task_id: string): 'complete' | void
  export function check_if_looted_enough(tsk: AnyTable, task_id: string): 'complete' | void
  export function drx_sl_money_task_status(tsk: AnyTable, task_id: string): void
  export function drx_sl_retrieve_item_task_status(tsk: AnyTable, task_id: string): 'fail' | void
  export function impending_doom(tsk: AnyTable, task_id: string): void
  export function kill_strelok(tsk: AnyTable, task_id: string): 'complete' | void
  export function special_steps_for_lostzone_tasks(tsk: AnyTable, task_id: string): void
  export function task_type_ecolog_gathered_tissue_samples(tsk: AnyTable, task_id: string): void
}
