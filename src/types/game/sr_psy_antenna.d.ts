// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace sr_psy_antenna {
  export const psy_antenna: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function load(p: TODO): TODO
  export function save(p: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): TODO
}

/** @customConstructor PsyAntenna */
declare class PsyAntenna {
  constructor()
  destroy(): TODO
  update_psy_hit(dt: TODO): TODO
  generate_phantoms(): TODO
  update_sound(): TODO
  update_postprocess(pp: TODO): TODO
  update(dt: TODO): TODO
  save_state(m_data: TODO): TODO
  load_state(m_data: TODO): TODO
  save(p: TODO): TODO
  load(p: TODO): TODO
}

/** @customConstructor action_psy_antenna */
declare class action_psy_antenna {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): TODO
  deactivate(): TODO
  update(delta: TODO): TODO
  switch_state(actor: TODO): TODO
  zone_enter(): TODO
  zone_leave(): TODO
  save(): TODO
}
