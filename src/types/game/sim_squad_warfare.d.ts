/** @noSelfInFile */

declare namespace sim_squad_warfare {
  export const dbg_map_hud: boolean
  export const printd: (e: number, optionalMessage?: string) => void
  export const squad_icons: AnyTable
  export function add_companion_squad(squad: CseAlifeOnlineOfflineGroup): void
  export function find_random_patrol_target(squad: CseAlifeOnlineOfflineGroup): AnyTable | undefined
  export function find_target(squad: CseAlifeOnlineOfflineGroup): AnyTable | undefined
  export function get_enemy_info(squad: CseAlifeOnlineOfflineGroup): AnyTable
  export function get_squad_relation(squad_id: number): string
  export function get_warfare_info(squad: CseAlifeOnlineOfflineGroup): AnyTable
  export function on_game_start(): void
  export function process_random_patrol(squad: CseAlifeOnlineOfflineGroup): void
  export function refresh_strings(): void
  export function remove_squad(squad: CseAlifeOnlineOfflineGroup): void
  export function set_target(squad: CseAlifeOnlineOfflineGroup, target: AnyTable): void
  export function set_target_trader(squad: CseAlifeOnlineOfflineGroup, target: AnyTable, target_name: string): void
  export function squad_on_npc_death(squad: CseAlifeOnlineOfflineGroup, npc: CGameObject, killer: CGameObject): void
  export function squad_on_update(squad: CseAlifeOnlineOfflineGroup): void
  export function squad_warfare_update(squad: CseAlifeOnlineOfflineGroup): void
  export function translate_smart_name(name: string): string
  export function update_global_position(squad: CseAlifeOnlineOfflineGroup): void
}
