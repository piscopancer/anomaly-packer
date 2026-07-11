/** @noSelfInFile */

declare namespace item_weapon {
  export const GUI: TODO
  export const can_overheat: boolean
  export function ammo_aggregation(obj: TODO, npc: CGameObject): boolean
  export function ammo_aggregation_full(npc_id: TODO): boolean
  export function ammo_injection(obj_1: TODO, obj_2: TODO, sec_1: TODO, sec_2: TODO): void
  export function attach_scope(item: TODO, weapon: TODO): void
  export function clear_cache(obj: TODO): void
  export function detach_scope(weapon: TODO): void
  export function func_scope(weapon: TODO): void
  export function get_grenades(section: TODO): TODO
  export function get_weapon_slot(): CGameObject
  export function menu_scope(weapon: TODO): string
  export function menu_scope_inv(weapon: TODO): string
  export function on_game_start(): void
  export function relocate_ammo_from_actor(actor: CGameObject, npc: TODO, section: TODO, amount: TODO): void
  export function relocate_ammo_to_actor(actor: TODO, npc: TODO, section: TODO, amount: TODO): void
  export function remove_extra_ammo(npc_id: TODO): void
  export function start_ammo_wheel(): void
  export function test_silencer(): void
  export function toggle_silencer(): void
  export function unload_all_weapons(): void
  export function update_overheat(): void
}

/** @customConstructor UIWheelAmmo */
declare class UIWheelAmmo extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  Reset(obj: TODO): void
  SwitchNextAmmo(): void
  OnAmmo(n: TODO): void
  OnKeyboard(dik: TODO, keyboard_action: TODO): boolean
  Close(): void
}
