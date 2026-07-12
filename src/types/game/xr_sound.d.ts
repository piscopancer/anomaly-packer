/** @noSelfInFile */

declare namespace xr_sound {
  export function get_safe_sound_object(path: string): sound_object
  export function set_sound_play(npc_id: number, sound: string, faction?: Community, point?: vector): void
  export function stop_sounds_by_id(obj_id: number): void
  /** Active NPC sounds, keyed by object id. */
  export const sound_table: Record<number, any>
  /** Active looped sounds, keyed by object id. */
  export const looped_sound: Record<number, any>
  export const key_by_id: Record<number, any>
  export const group_idle: Record<number, any>
  export function update(npc_id: number): void
  export function play_sound_looped(npc_id: number, sound: string): void
  export function stop_sound_looped(npc_id: number, sound?: string): void
  export function set_volume_sound_looped(npc_id: number, sound: string, level: number): void
  export function actor_save_state(m_data: AnyTable): void
  export function actor_load_state(m_data: AnyTable): void
  export function actor_save(stpk: net_packet): void
  export function actor_load(stpk: net_packet): void
  export function npc_save_state(id: number, m_data: AnyTable): void
  export function npc_load_state(id: number, m_data: AnyTable): void
  export function save_npc(stpk: net_packet, npc_id: number): void
  export function load_npc(stpk: net_packet, npc_id: number): void
  export function stop_all_sounds(): void
  export function get_sound(path: string, tt: string, npc: CGameObject): void
  export function get_key(npc: CGameObject): any
  export function set_sound(npc: CGameObject, sound: string, now?: boolean, into_timeout?: number): void
  export function play_sound(npc: CGameObject, themes: string, timeout?: number): void
  export function get_last_IDS(npc: CGameObject, theme: string): LuaMultiReturn<[any, number]>
  export function process_tutor_on_sound(theme: string): void
  export function set_actor_sound(sound: string): void
  export function set_actor_sound_factor(factor: number): void
  export function update_actor(): void
  export function get_sound_object(theme: string, t_type?: string): LuaMultiReturn<[sound_object, sound_object]>
  export function stop_all_sound_object(): void
  export function clear_all_sound_object(): void
}
