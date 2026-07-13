/** @noSelfInFile */

declare namespace restrictor_manager {
  export function get_restrictor_manager(npc: CGameObject): Crestrictor_manager
}

/** @customConstructor Crestrictor_manager */
declare class Crestrictor_manager {
  constructor(obj: CGameObject)
  reset_restrictions(st: AnyTable, section: Section): void
}
