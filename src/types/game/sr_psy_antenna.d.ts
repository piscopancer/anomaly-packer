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
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(loading: boolean): void
  deactivate(): void
  update(delta: number): void
  switch_state(actor: CGameObject): void
  zone_enter(): void
  zone_leave(): void
  save(): void
}
