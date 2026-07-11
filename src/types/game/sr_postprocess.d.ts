/** @noSelfInFile */

declare namespace sr_postprocess {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor PPEffector */
declare class PPEffector extends effector {
  constructor(id_number: TODO)
  process(pp: TODO): boolean
}

/** @customConstructor action_postprocess */
declare class action_postprocess {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  deactivate(): void
  update(delta: TODO): void
  update_hit(delta: TODO): TODO
}
