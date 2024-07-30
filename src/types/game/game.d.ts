/** @noSelfInFile */

declare namespace game {
  export const CTime: ((...ctr: ConstructorParameters<typeof Time>) => Time) & Time
  export function time(): number
  export function get_game_time(): Time
  export function start_tutorial(name: string): void
  export function stop_tutorial(): void
  export function has_active_tutorial(): boolean
  export function translate_string<Id extends string>(id: Id): string
  export function reload_language(): void
  export function get_resolutions(): string
  export function play_hud_motion(hand: string, item_name: string, anim_name: string, mixin?: boolean, speed?: number): number
  export function stop_hud_motion(): void
  export function get_motion_length(section: string, name: string, speed: number): number
  export function hud_motion_allowed(): boolean
  export function play_hud_anm(name: string, part: string, speed: number, power: number, loop: boolean, no_restart: boolean): void
  export function stop_hud_anm(name: string, force: boolean): void
  export function stop_all_hud_anms(force: boolean): void
  export function set_hud_anm_time(name: string, time: number): number
  export function only_allow_movekeys(value: boolean): void
  export function only_movekeys_allowed(): boolean
  export function set_actor_allow_ladder(value: boolean): void
  export function set_nv_lumfactor(factor: boolean): void
  export function reload_ui_xml(): void
  export function actor_weapon_lowered(): boolean
  export function actor_lower_weapon(lower: boolean): void
  export function prefetch_texture(name: string): void
  export function prefetch_model(name: string): void
  export function get_visual_userdata(visual: string): TODO // @returns CScriptIniFile
  export function world2ui(pos: vector, hud?: boolean): TODO // @returns Fvector2
}
