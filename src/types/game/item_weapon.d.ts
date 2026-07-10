// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_weapon {
  export const GUI: TODO
  export const can_overheat: TODO
  export function ammo_aggregation(obj: TODO, npc: TODO): TODO
  export function ammo_aggregation_full(npc_id: TODO): TODO
  export function ammo_injection(obj_1: TODO, obj_2: TODO, sec_1: TODO, sec_2: TODO): TODO
  export function attach_scope(item: TODO, weapon: TODO): TODO
  export function clear_cache(obj: TODO): TODO
  export function detach_scope(weapon: TODO): TODO
  export function func_scope(weapon: TODO): TODO
  export function get_grenades(section: TODO): TODO
  export function get_weapon_slot(): TODO
  export function menu_scope(weapon: TODO): TODO
  export function menu_scope_inv(weapon: TODO): TODO
  export function on_game_start(): TODO
  export function relocate_ammo_from_actor(actor: TODO, npc: TODO, section: TODO, amount: TODO): TODO
  export function relocate_ammo_to_actor(actor: TODO, npc: TODO, section: TODO, amount: TODO): TODO
  export function remove_extra_ammo(npc_id: TODO): TODO
  export function start_ammo_wheel(): TODO
  export function test_silencer(): TODO
  export function toggle_silencer(): TODO
  export function unload_all_weapons(): TODO
  export function update_overheat(): TODO
}

/** @customConstructor UIWheelAmmo */
declare class UIWheelAmmo extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  InitCallBacks(): TODO
  Update(): TODO
  Reset(obj: TODO): TODO
  SwitchNextAmmo(): TODO
  OnAmmo(n: TODO): TODO
  OnKeyboard(dik: TODO, keyboard_action: TODO): TODO
  Close(): TODO
}
