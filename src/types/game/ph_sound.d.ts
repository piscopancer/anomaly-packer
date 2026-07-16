/** @noSelfInFile */

declare namespace ph_sound {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor snd_source */
declare class snd_source {
  destructed: TODO // @generated field — refine type
  first_sound: boolean // @generated field — refine type
  last_update: TODO // @generated field — refine type
  object: TODO // @generated field — refine type
  played_sound: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  save(): void
  hit_callback(obj: CGameObject, amount: number, local_direction: vector, who: CGameObject, bone_index: number): void
  update(delta: number): void
  deactivate(): void
}

declare namespace ph_sound {
  /** Anomaly `class "snd_source"` is also reachable on the `ph_sound` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`ph_sound.snd_source.Method = ...`). */
  export const snd_source: snd_source
}
