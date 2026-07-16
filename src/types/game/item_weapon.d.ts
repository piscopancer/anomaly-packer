/** @noSelfInFile */

declare namespace item_weapon {
  /** Ammo wheel UI instance, don't touch. */
  export const GUI: UIWheelAmmo
  export const can_overheat: boolean
  export function ammo_aggregation(obj: CGameObject, npc: CGameObject): boolean
  export function ammo_aggregation_full(npc_id: number): boolean
  export function ammo_injection(obj_1: CGameObject, obj_2: CGameObject, sec_1: string, sec_2: string): void
  export function attach_scope(item: CGameObject, weapon: CGameObject): void
  export function clear_cache(obj: CGameObject): void
  export function detach_scope(weapon: CGameObject): void
  export function func_scope(weapon: CGameObject): void
  export function get_grenades(section: Section): AnyTable
  export function get_weapon_slot(): CGameObject
  export function menu_scope(weapon: CGameObject): string
  export function menu_scope_inv(weapon: CGameObject): string
  export function on_game_start(): void
  export function relocate_ammo_from_actor(actor: CGameObject, npc: CGameObject, section: Section, amount: number): void
  export function relocate_ammo_to_actor(actor: CGameObject, npc: CGameObject, section: Section, amount: number): void
  export function remove_extra_ammo(npc_id: number): void
  export function start_ammo_wheel(): void
  export function test_silencer(): void
  export function toggle_silencer(): void
  export function unload_all_weapons(): void
  export function update_overheat(): void
}

/** @customConstructor UIWheelAmmo */
declare class UIWheelAmmo extends CUIScriptWnd {
  ammo_inv: TODO // @generated field — refine type
  ammo_list: TODO // @generated field — refine type
  ammo_max: number // @generated field — refine type
  ammo_type: TODO // @generated field — refine type
  avail: TODO // @generated field — refine type
  background: TODO // @generated field — refine type
  box: TODO // @generated field — refine type
  box_btn: TODO // @generated field — refine type
  box_hl_1: TODO // @generated field — refine type
  box_hl_2: TODO // @generated field — refine type
  box_icon: TODO // @generated field — refine type
  box_icon_r: TODO // @generated field — refine type
  box_icon_tmp: TODO // @generated field — refine type
  box_icon_tmp_r: TODO // @generated field — refine type
  box_num: TODO // @generated field — refine type
  box_r: TODO // @generated field — refine type
  box_txt: TODO // @generated field — refine type
  box_txt_r: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  extended: TODO // @generated field — refine type
  grenade_mode: TODO // @generated field — refine type
  id: TODO // @generated field — refine type
  key: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  show_verybad: TODO // @generated field — refine type
  xml: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  InitCallBacks(): void
  Update(): void
  Reset(obj: CGameObject): void
  SwitchNextAmmo(): void
  OnAmmo(n: number): void
  OnKeyboard(dik: number, keyboard_action: number): boolean
  Close(): void
}

declare namespace item_weapon {
  /** Anomaly `class "UIWheelAmmo"` is also reachable on the `item_weapon` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`item_weapon.UIWheelAmmo.Method = ...`). */
  export const UIWheelAmmo: UIWheelAmmo
}
