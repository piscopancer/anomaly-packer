/** @noSelfInFile */

declare namespace sr_no_weapon {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: string, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: string, gulag_name: string): void
}

/** @customConstructor action_no_weapon */
declare class action_no_weapon {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  update(delta: number): void
  switch_state(actor: CGameObject): void
  zone_enter(): void
  zone_leave(): void
}
