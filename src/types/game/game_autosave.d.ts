/** @noSelfInFile */

declare namespace game_autosave {
  export function activate_feature(): void
  export function autosave___generate_new_name_if_exists(save_name: string): string
  export function autosave___get_time_elapsed(): number
  export function autosave___keep_last_x_saves(): void
  export function autosave___savegame(): boolean
  export function deactivate_feature(): void
  export function on_game_load(): void
  export function on_game_start(): void
}
