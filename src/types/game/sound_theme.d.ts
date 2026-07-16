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
  avail_communities: TODO // @generated field — refine type
  can_play_group_sound: TODO // @generated field — refine type
  class_id: string // @generated field — refine type
  delay_sound: TODO // @generated field — refine type
  dont_save: TODO // @generated field — refine type
  faction: TODO // @generated field — refine type
  group_snd: TODO // @generated field — refine type
  idle_time: TODO // @generated field — refine type
  is_combat_sound: TODO // @generated field — refine type
  max_idle: TODO // @generated field — refine type
  min_idle: TODO // @generated field — refine type
  msg: TODO // @generated field — refine type
  npc: TODO // @generated field — refine type
  path: TODO // @generated field — refine type
  pda_snd_obj: TODO // @generated field — refine type
  play_always: TODO // @generated field — refine type
  played_id: TODO // @generated field — refine type
  played_time: TODO // @generated field — refine type
  point: TODO // @generated field — refine type
  prefix: TODO // @generated field — refine type
  rnd: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  shuffle: TODO // @generated field — refine type
  sound_path: TODO // @generated field — refine type
  story_ids: TODO // @generated field — refine type
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
  class_id: string // @generated field — refine type
  faction: TODO // @generated field — refine type
  idle_time: TODO // @generated field — refine type
  max_idle: TODO // @generated field — refine type
  min_idle: TODO // @generated field — refine type
  msg: TODO // @generated field — refine type
  path: TODO // @generated field — refine type
  play_always: TODO // @generated field — refine type
  played_id: TODO // @generated field — refine type
  played_time: TODO // @generated field — refine type
  point: TODO // @generated field — refine type
  prefix: TODO // @generated field — refine type
  rnd: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  shuffle: TODO // @generated field — refine type
  snd_obj: TODO // @generated field — refine type
  sound: TODO // @generated field — refine type
  stereo: TODO // @generated field — refine type
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
  class_id: string // @generated field — refine type
  cooldown: TODO // @generated field — refine type
  faction: TODO // @generated field — refine type
  max_idle: TODO // @generated field — refine type
  min_idle: TODO // @generated field — refine type
  msg: TODO // @generated field — refine type
  path: TODO // @generated field — refine type
  pda_snd_obj: TODO // @generated field — refine type
  played_id: TODO // @generated field — refine type
  point: TODO // @generated field — refine type
  rnd: TODO // @generated field — refine type
  section: TODO // @generated field — refine type
  shuffle: TODO // @generated field — refine type
  snd_obj: TODO // @generated field — refine type
  sound: TODO // @generated field — refine type
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

declare namespace sound_theme {
  /** Anomaly `class "actor_sound"` is also reachable on the `sound_theme` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sound_theme.actor_sound.Method = ...`). */
  export const actor_sound: actor_sound
  /** Anomaly `class "npc_sound"` is also reachable on the `sound_theme` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sound_theme.npc_sound.Method = ...`). */
  export const npc_sound: npc_sound
  /** Anomaly `class "object_sound"` is also reachable on the `sound_theme` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sound_theme.object_sound.Method = ...`). */
  export const object_sound: object_sound
}
