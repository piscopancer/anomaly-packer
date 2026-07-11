/** @noSelfInFile */

declare namespace sr_psy_antenna {
  export const psy_antenna: boolean
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function load(p: net_packet): void
  export function save(p: net_packet): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor PsyAntenna */
declare class PsyAntenna {
  constructor()
  destroy(): TODO
  update_psy_hit(dt: TODO): void
  generate_phantoms(): void
  update_sound(): void
  update_postprocess(pp: TODO): boolean
  update(dt: TODO): TODO
  save_state(m_data: TODO): void
  load_state(m_data: TODO): void
  save(p: net_packet): void
  load(p: net_packet): void
}

/** @customConstructor action_psy_antenna */
declare class action_psy_antenna {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): void
  deactivate(): void
  update(delta: TODO): void
  switch_state(actor: TODO): void
  zone_enter(): void
  zone_leave(): void
  save(): void
}
