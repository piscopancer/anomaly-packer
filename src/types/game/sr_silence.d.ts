/** @noSelfInFile */

declare namespace sr_silence {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(obj: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor CSilence_zone */
declare class CSilence_zone {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(): void
}
