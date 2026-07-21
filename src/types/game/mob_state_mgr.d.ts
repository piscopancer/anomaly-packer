/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace mob_state_mgr {
    export function get_state(ini: system_ini, section: Section.Item, obj: CGameObject): string | undefined
    export function set_state(obj: CGameObject, actor: CGameObject, state: string): void
  }
}
