/** @noSelfInFile */

declare namespace tasks_recover_item_on_corpse {
  export const status_recover_item_on_corpse: AnyTable
  export const target_recover_item_on_corpse: AnyTable
  export function cleanup_recover_item_on_corpse(a: string, b: string, c: AnyTable): void
  export function has_item(item_id: number, owner_id: number): boolean
  export function id_exists(id: number): boolean
  export function kill_if_online(id: number): void
  export function kill_if_online_mutant(id: number, random_push?: boolean): void
  export function load_state(m: AnyTable): void
  export function on_descr(a: string, b: string, c: AnyTable): boolean
  export function on_game_start(): void
  export function parse_settings(task_id: string): AnyTable
  export function pick_random_array<T>(arr: T[]): T
  export function precondition_corpse_task_petr(a: string, b: string, c: AnyTable): boolean
  export function precondition_corpse_task_sak(a: string, b: string, c: AnyTable): boolean
  export function precondition_corpse_task_sid(a: string, b: string, c: AnyTable): boolean
  export function randsign(): number
  export function release_item_if_exists(id: number): void
  export function reward(a: string, b: string, c: AnyTable): void
  export function safe_target(id: number): number | undefined
  export function same_level(id1: number, id2: number): boolean
  export function same_level_se(se1: CseAbstract, se2: CseAbstract): boolean
  export function save_state(m: AnyTable): void
  export function section_from_critter_category(x: string): string
  export function spawn_on_id(section: Section, target_id: number): CseAbstract | undefined
  export function spawn_on_id_position(section: Section, target_id: number): CseAbstract | undefined
  export function split(str: string): string[]
  export function split_and_pick(str: string): string
  export function split_tonumber(str: string): number[]
}
