/** @noSelfInFile */

declare namespace mlr_utils {
  export function change_lvl(p: AnyTable): void
  export function death_heli(obj: CGameObject, enemy_id: number): void
  export function get_cost_sect(section: string, count: number): number
  export function give_task(name: string): void
  export function have_item(sect: string, needed: number): boolean
  export function have_money(count: number): boolean
  export function load_var(key_1: string, key_2: string): any
  export function save_var(key_1: string, key_2: string, key_3: any): void
  export function spawn_item(name: string): void
}
