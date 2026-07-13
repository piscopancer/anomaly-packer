/** @noSelfInFile */

declare namespace game_registrator {
  export function get_game_clsid(game_type_option: string, is_server: boolean): string
  export function register(object_factory: any): void
}
