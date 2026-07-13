/** @noSelfInFile */

declare namespace sound_theme {
  class sound {
    snd_obj: sound_object
  }
  export const theme: Record<string, sound>
  /** Per-slot flags gating whether a sound may currently play (keyed by index). */
  export const can_play_sound: Record<number, boolean>
  export function init_npc_sound(npc: CGameObject): void
  /** Next free sound base id. */
  export function id(): number
  /** Loads `misc\sound\script_sound.ltx` into {@link theme}. */
  export function load_sound(): void
}

/**
 * A themed NPC sound set loaded from `script_sound.ltx`.
 * @customConstructor npc_sound
 */
declare class npc_sound {
  constructor(snd_ini: system_ini, section: Section)
  reset(npc_id: number): void
  is_playing(npc_id?: number): boolean
  init_npc(npc: CGameObject): void
  callback(npc_id: number): void
  play(npc_id: number, faction?: Community, point?: vector): boolean
  select_next_sound(npc_id?: number): number
  stop(obj_id?: number): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
  save(thread: net_packet): void
  load(thread: net_packet): void
  save_npc(thread: net_packet, npc_id?: number): void
  load_npc(thread: net_packet, npc_id?: number): void
}

/** @customConstructor actor_sound */
declare class actor_sound {
  constructor(snd_ini: system_ini, section: Section)
  callback(npc_id: number): void
  is_playing(): boolean
  play(obj_id: number, faction?: Community, point?: vector, sound?: string): boolean
  reset(npc_id?: number): void
  select_next_sound(): number
  stop(): void
  save(thread: net_packet): void
  load(thread: net_packet): void
  save_npc(thread: net_packet): void
  load_npc(thread: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
}

/** @customConstructor object_sound */
declare class object_sound {
  constructor(snd_ini: system_ini, section: Section)
  callback(npc_id: number): void
  is_playing(): boolean
  play(obj_id: number, faction?: Community, point?: vector, sound?: string): boolean
  select_next_sound(): number
  stop(): void
  save(thread: net_packet): void
  load(thread: net_packet): void
  save_npc(thread: net_packet): void
  load_npc(thread: net_packet): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
}
