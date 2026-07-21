/** @noSelfInFile */

import type { Section } from 'anomaly-packer'

declare global {
  namespace stalker_generic {
    export function can_select_weapon(npc: CGameObject, scheme: string, st: AnyTable, section: Section.Item): void
    export function disable_invulnerability(npc: CGameObject): void
    export function get_infos_from_data(npc: CGameObject, s: string): AnyTable
    export function is_need_invulnerability(npc: CGameObject): boolean
    export function remove_level_spot(npc_id: number): void
    export function reset_group(npc: CGameObject, ini: system_ini, section: Section.Item): void
    export function reset_invulnerability(npc: CGameObject, ini: system_ini, section: Section.Item): void
    export function reset_show_spot(npc: CGameObject, scheme: string, st: AnyTable, section: Section.Item): void
    export function reset_threshold(npc: CGameObject, scheme: string, st: AnyTable, section: Section.Item): void
    export function set_npc_info(npc: CGameObject, ini: system_ini, scheme: string, section: Section.Item): void
    export function take_items_enabled(npc: CGameObject, scheme: string, st: AnyTable, section: Section.Item): void
    export function update_invulnerability(npc: CGameObject): void
  }
}
