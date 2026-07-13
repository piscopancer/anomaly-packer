/** @noSelfInFile */

declare namespace heli_alife_warfare {
  export const helicopter_spots: AnyTable
  export const helicopters: AnyTable
  export const printd: (...args: any[]) => void
  export function blargh(): void
  export function create_heli_weak(faction: string, targetID: number, smart: se_smart_terrain, pos: vector): CseAbstract
  export function force_target_destination(id: number, target_id: number): void
  export function get_heli_info(se_obj: CseAbstract): AnyTable
  export function hide(se_obj: CseAbstract): void
  export function is_target_reached(se_obj: CseAbstract, se_target: CseAbstract): boolean
  export function move_to_target(heli: CGameObject, se_obj: CseAbstract, heli_object: CHelicopter, se_target: CseAbstract): void
  export function on_game_start(): void
  export function refresh_strings(): void
  export function set_target(se_obj: CseAbstract, target: any): void
  export function show(se_obj: CseAbstract): void
  export function translate_smart_name(name: string): string
  export function update(heli: CGameObject, se_obj: CseAbstract, heli_object: CHelicopter): void
  export function update_movement(heli: CGameObject, se_obj: CseAbstract, heli_object: CHelicopter, se_target: CseAbstract): void
}
