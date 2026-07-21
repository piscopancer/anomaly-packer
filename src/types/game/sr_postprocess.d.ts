/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sr_postprocess {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }

  /** @customConstructor PPEffector */
  class PPEffector extends effector {
    params: TODO // @generated field — refine type
    constructor(id_number: number)
    process(pp: AnyTable): boolean
  }

  /** @customConstructor action_postprocess */
  class action_postprocess {
    actor_inside: TODO // @generated field — refine type
    base_color: TODO // @generated field — refine type
    eff_time: number // @generated field — refine type
    gray: number // @generated field — refine type
    gray_amplitude: number // @generated field — refine type
    gray_color: TODO // @generated field — refine type
    hit_power: TODO // @generated field — refine type
    hit_time: TODO // @generated field — refine type
    intensity: TODO // @generated field — refine type
    intensity_base: TODO // @generated field — refine type
    intensity_inertion: TODO // @generated field — refine type
    noise: TODO // @generated field — refine type
    noise_var: TODO // @generated field — refine type
    object: TODO // @generated field — refine type
    pp: TODO // @generated field — refine type
    st: TODO // @generated field — refine type
    constructor(obj: CGameObject, storage: AnyTable)
    reset_scheme(): void
    deactivate(): void
    update(delta: number): void
    update_hit(delta: number): void
  }

  namespace sr_postprocess {
    /** Anomaly `class "PPEffector"` is also reachable on the `sr_postprocess` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sr_postprocess.PPEffector.Method = ...`). */
    export const PPEffector: PPEffector
    /** Anomaly `class "action_postprocess"` is also reachable on the `sr_postprocess` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`sr_postprocess.action_postprocess.Method = ...`). */
    export const action_postprocess: action_postprocess
  }
}
