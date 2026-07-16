/** @noSelfInFile */

declare namespace sr_psy_antenna {
  export const psy_antenna: boolean
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function load(p: net_packet): void
  export function save(p: net_packet): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor PsyAntenna */
declare class PsyAntenna {
  eff_time: TODO // @generated field — refine type
  global_state: TODO // @generated field — refine type
  hit_amplitude: number // @generated field — refine type
  hit_freq: TODO // @generated field — refine type
  hit_intensity: TODO // @generated field — refine type
  hit_time: TODO // @generated field — refine type
  hit_type: TODO // @generated field — refine type
  intensity_inertion: number // @generated field — refine type
  max_mumble_volume: number // @generated field — refine type
  mute_sound_threshold: TODO // @generated field — refine type
  no_mumble: TODO // @generated field — refine type
  no_static: TODO // @generated field — refine type
  phantom_fov: number // @generated field — refine type
  phantom_idle: TODO // @generated field — refine type
  phantom_max: number // @generated field — refine type
  phantom_spawn_height: number // @generated field — refine type
  phantom_spawn_probability: number // @generated field — refine type
  phantom_spawn_radius: number // @generated field — refine type
  phantom_time: TODO // @generated field — refine type
  postprocess: TODO // @generated field — refine type
  postprocess_count: TODO // @generated field — refine type
  snd_volume: TODO // @generated field — refine type
  sound_initialized: boolean // @generated field — refine type
  sound_intensity: TODO // @generated field — refine type
  sound_intensity_base: TODO // @generated field — refine type
  sound_obj_left: TODO // @generated field — refine type
  constructor()
  destroy(): void
  update_psy_hit(dt: number): void
  generate_phantoms(): void
  update_sound(): void
  update_postprocess(pp: AnyTable): boolean
  update(dt: number): void
  save_state(m_data: AnyTable): void
  load_state(m_data: AnyTable): void
  save(p: net_packet): void
  load(p: net_packet): void
}

/** @customConstructor action_psy_antenna */
declare class action_psy_antenna {
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  state: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  deactivate(): void
  update(delta: number): void
  switch_state(actor: CGameObject): void
  zone_enter(): void
  zone_leave(): void
  save(): void
}

declare namespace sr_psy_antenna {
  /** Anomaly `class "PsyAntenna"` is also reachable on the `sr_psy_antenna` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_psy_antenna.PsyAntenna.Method = ...`). */
  export const PsyAntenna: PsyAntenna
  /** Anomaly `class "action_psy_antenna"` is also reachable on the `sr_psy_antenna` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`sr_psy_antenna.action_psy_antenna.Method = ...`). */
  export const action_psy_antenna: action_psy_antenna
}
