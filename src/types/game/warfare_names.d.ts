/** @noSelfInFile */

declare namespace warfare_names {
  export const faction_names: AnyTable
  export const point_names_hide: AnyTable
  export function get_name(input: string): string
  export function get_smart_name(smart: se_smart_terrain): string
  export function get_squad_name(squad: CseAlifeOnlineOfflineGroup): string
  export function on_game_start(): void
  export function refresh_strings(): void
  export function translate_smart_name(name: string): string
}
