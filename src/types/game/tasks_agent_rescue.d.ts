/** @noSelfInFile */

declare namespace tasks_agent_rescue {
  export function generate_squad_loadout(task_id: string): AnyTable
  export function join_message(task_id: string, id: number): void
  export function leave_message(task_id: string, id: number): void
  export function postpone_for_next_frame(task_id: string, squad_id: number): boolean
  export function printl(...args: any[]): void
}
