/** @noSelfInFile */

declare namespace task_manager {
  class TaskManager {
    give_task(task_id: string, task_giver_id: number): void
    set_task_completed(task_id: string): void
    set_task_failed(task_id: string): void
    set_task_cancelled(task_id: string): void
    update(): void
    task_complete(task_id: string): boolean
    task_fail(task_id: string): boolean
  }
  export function get_task_manager(): TaskManager
}
