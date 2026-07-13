/** @noSelfInFile */

declare namespace txr_mines {
  export const _mines: AnyTable
  export function actor_on_update(): void
  export function clean_mines(id: number): void
  export function func_prox_plant(obj: CGameObject): void
  export function func_timer_plant_10(obj: CGameObject): void
  export function func_timer_plant_30(obj: CGameObject): void
  export function generic_on_update(npc: CGameObject): void
  export function load_state(md: AnyTable): void
  export function manage_timer_explosives(): void
  export function mine_killer(): void
  export function npc_on_before_hit(npc: CGameObject, shit: AnyTable, bone_id: number, flags: number): void
  export function on_game_start(): void
  export function periodic_clean(): void
  export function plant_bomb(obj: CGameObject, mode: number, delay: number): void
  export function release_item(id: number): boolean
  export function save_state(md: AnyTable): void
  export function str_prox_plant(): string
  export function str_timer_plant_10(): string
  export function str_timer_plant_30(): string
  export function trigger_mine(id: number): void
  export function tss(): number
}
