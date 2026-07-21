/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace xr_hear {
    export function hear_callback(obj: CGameObject, who_id: number, sound_type: number, sound_position: vector, sound_power: number): void
    export function reset_hear_callback(st: AnyTable, section: Section.Item): void
  }
}
