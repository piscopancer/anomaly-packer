/** @noSelfInFile */

declare namespace tasks_recover_mutant_data {
  export function check(pid: string, name: string): boolean
  export function fail_condition(tid: string, stage: number): boolean
  export function load_state(m: AnyTable): void
  export function on_death(victim: CGameObject): void
  export function on_game_start(): void
  export function save_state(m: AnyTable): void
}
