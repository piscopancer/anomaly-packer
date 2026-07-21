/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_zones_sound {
    export function r_num(spawn_ini: system_ini, section: Section.Item, line: string, default_: number): number
    export function table_include(dest: AnyTable, src: AnyTable): void
  }

  /** @customConstructor zone_sound */
  class zone_sound {
    delay: TODO // @generated field — refine type
    idle: TODO // @generated field — refine type
    idle_end: TODO // @generated field — refine type
    random_pos: boolean // @generated field — refine type
    rnd: TODO // @generated field — refine type
    sound_names: TODO // @generated field — refine type
    zone: TODO // @generated field — refine type
    constructor(zone: CGameObject, binder: AnyTable, ini: system_ini)
    on_enter(obj: CGameObject): void
  }

  namespace xr_zones_sound {
    /** Anomaly `class "zone_sound"` is also reachable on the `xr_zones_sound` script namespace; typed as
     *  the instance so its methods can be captured/overridden (`xr_zones_sound.zone_sound.Method = ...`). */
    export const zone_sound: zone_sound
  }
}
