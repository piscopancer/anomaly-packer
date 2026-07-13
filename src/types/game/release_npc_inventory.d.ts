/** @noSelfInFile */

declare namespace release_npc_inventory {
  export function actor_on_update(): void
  export function clean_npc_inv(se_npc: CseAbstract): void
  export function on_game_start(): void
  export function print_dbg(frmt: string, ...args: any[]): void
}
