/** @noSelfInFile */

declare namespace sr_postprocess {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section, gulag_name: string): void
}

/** @customConstructor PPEffector */
declare class PPEffector extends effector {
  constructor(id_number: number)
  process(pp: AnyTable): boolean
}

/** @customConstructor action_postprocess */
declare class action_postprocess {
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  deactivate(): void
  update(delta: number): void
  update_hit(delta: number): void
}
