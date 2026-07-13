/** @noSelfInFile */

declare namespace xrs_rnd_npc_loadout {
  export function create_item_on_npc(se_npc: CseAbstract, squad_name: string, comm: Community, rank: Rank, visual: string, player_id: number, slot_type: string): void
  export function init_settings(): void
  export function on_creation(se_npc: CseAbstract): void
  export function on_game_start(): void
  export function print_debug(...args: any[]): void
  export function simulate_npc_loadouts(num: number, comm: Community, rank: Rank, slot_types: AnyTable): void
}
