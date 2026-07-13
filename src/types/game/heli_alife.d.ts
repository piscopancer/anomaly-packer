/** @noSelfInFile */

declare namespace heli_alife {
  export function force_target_destination(id: number, target_id: number): void
  export function update(heli: CGameObject, se_obj: CseAbstract, heliObject: CHelicopter): void
  export function update_heli_movement(heli: CGameObject, se_obj: CseAbstract, heliObject: CHelicopter, se_target: CseAbstract): void
}
