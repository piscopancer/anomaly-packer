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
  export const task_ini: system_ini
  export function task_complete(p1: string): boolean
  export function task_fail(p1: string): boolean
  export function task_callback(tsk: CGameTask, state: string): void
  export function clear_task_manager(): void
  export function save_state(m_data: AnyTable): void
  export function load_state(m_data: AnyTable): void
}

/** @customConstructor CRandomTask */
declare class CRandomTask {
  task_info: TODO // @generated field — refine type
  constructor()
  save(packet: net_packet): void
  load(reader: net_packet): void
  give_task(task_id: string, task_giver_id: number): void
  set_task_completed(task_id: string): void
  set_task_failed(task_id: string): void
  set_task_cancelled(task_id: string): void
  update(): void
  task_complete(p1: string): boolean
  task_fail(p1: string): boolean
}

declare namespace task_manager {
  /** Anomaly `class "CRandomTask"` is also reachable on the `task_manager` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`task_manager.CRandomTask.Method = ...`). */
  export const CRandomTask: CRandomTask
}
