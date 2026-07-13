/** @noSelfInFile */

declare namespace release_item_manager {
  export function clear(): boolean
  export function on_game_start(): void
  export function unmark_item(id: number): void
}
