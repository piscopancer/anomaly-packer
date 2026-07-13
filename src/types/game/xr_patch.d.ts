/** @noSelfInFile */

declare namespace xr_patch {
  export function is_far(squad: CseAlifeOnlineOfflineGroup): boolean
  export function is_online(squad: CseAlifeOnlineOfflineGroup): boolean
  export function on_game_start(): void
  export function print_debug(fmt: string, ...args: any[]): void
  export function queue_squad(squad: CseAlifeOnlineOfflineGroup): void
  export function switch_distance(): void
}
