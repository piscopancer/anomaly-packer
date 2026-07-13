/** @noSelfInFile */

declare namespace sim_squad_bounty {
  export function attack(state: string): void
  export function check_close_squads(sq: CseAlifeOnlineOfflineGroup): boolean
  export function get_active_squads(): AnyTable
  export function on_game_start(): void
  export function spawn_timer(): boolean
  export function state_timer(): boolean
  export function tbl_size(tbl: AnyTable): number
  export function try_spawn(): void
}
