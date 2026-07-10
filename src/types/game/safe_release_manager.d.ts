/** @noSelfInFile */

declare namespace safe_release_manager {
  export function execute_destroy_callback(): boolean
  export function on_game_start(): void
  export function release(se_obj: CseAbstract): void
}
