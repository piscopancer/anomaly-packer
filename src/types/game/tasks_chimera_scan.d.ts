/** @noSelfInFile */

declare namespace tasks_chimera_scan {
  export const _cmd: AnyTable
  export function combat_with_squad(id: number): boolean
  export function has_id(id: number): boolean
  export function has_item(sec: string): CGameObject
  export function id_is_alive(id: number): boolean
  export function in_range(chid: number): boolean
  export function load_state(m: AnyTable): void
  export function message_by_id(id: number, txt: string): void
  export function on_descr(a: CGameObject, b: CGameObject, p: any[]): boolean
  export function on_game_start(): void
  export function pick_random_array(t: AnyTable): any
  export function release_chimera(tid: number): void
  export function remove_scanner(tid: number): void
  export function reward(a: CGameObject, b: CGameObject, c: any[]): void
  export function safe_target(id: number): number
  export function save_state(m: AnyTable): void
  export function send_update(task_id: number): void
  export function set_val(a: CGameObject, b: CGameObject, c: any[]): void
  export function spawn_on_id(sec: string, id: number): CseAbstract
  export function spawn_on_squad_member(sec: string, id: number): CseAbstract
  export function task_cleanup(a: CGameObject, b: CGameObject, c: any[]): void
  export function val_eq(a: CGameObject, b: CGameObject, c: any[]): boolean
}
