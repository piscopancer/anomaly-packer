/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace sr_idle {
    export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, storage: AnyTable): void
    export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item, gulag_name: string): void
  }
}
