/** @noSelfInFile */

declare namespace mob_state_mgr {
  export function get_state(ini: system_ini, section: Section, obj: CGameObject): string | undefined
  export function set_state(obj: CGameObject, actor: CGameObject, state: string): void
}
