/** @noSelfInFile */

declare namespace actor_effects {
  export function actor_can_shoot(state: TODO): boolean
  export function allow_animation(): void
  export function clear_mask_hud(): void
  export function disable_effects_timer(n: number): void
  export function Hit_GrenadeQuickthrow(): void
  export function Hit_MaskCleaning(): void
  export function Hit_TorchToggle(): void
  export function HUD_fog(enabled: boolean, actor: CGameObject, rect?: TODO): void
  export function HUD_mask(helm_hud: TODO, helm_name: string, helm_respi: TODO): void
  export function init_main_settings(): void
  export function init_settings(): void
  export function is_animations_on(): boolean
  export function is_mask_on(): boolean
  export function is_respi_on(): boolean
  export function on_game_start(): void
  export function play_continuous_effect(period: number): void
  export function play_item_fx(name: string): void
  export function play_sound_breath(actor: CGameObject): void
  export function play_sound_breath_mask(actor: CGameObject): void
  export function reset_idle_anim(wpn: CGameObject, empty?: boolean): void
  export function set_animations(state: boolean): void
  export function shoot_effect(sect: string): void
  export function switch_helm(): void
  export function toggle_active_slot(f: boolean): void
  export function toggle_hud_autohide(state: boolean): void
  export function Update_Animations(actor: CGameObject): void
  export function Update_Bleeding(actor: CGameObject): void
  export function Update_Blood(actor: CGameObject): void
  export function Update_Breathing(actor: CGameObject): void
  export function Update_Fog(actor: CGameObject): void
  export function Update_HealthHUD(actor: CGameObject): void
  export function Update_Impact(actor: CGameObject): void
  export function Update_ItemSwap(actor: CGameObject): void
  export function Update_Mask(actor: CGameObject): void
  export function Update_Rad(actor: CGameObject): void
  export function Update_Shooting(obj: CGameObject, wpn: CGameObject, ammo_elapsed: number, grenade_elapsed: number, ammo_type: TODO, grenade_type: TODO): void
  export function Update_StaminaHUD(actor: CGameObject): void
  export function use_helmet(): void
  export function use_weapon(f: boolean): void
}
