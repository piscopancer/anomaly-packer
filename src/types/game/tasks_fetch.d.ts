/** @noSelfInFile */

declare namespace tasks_fetch {
  export function on_game_start(): void
  export function postpone_fetch_for_next_frame(task_id: string, section: TODO, amount: TODO): boolean
}
