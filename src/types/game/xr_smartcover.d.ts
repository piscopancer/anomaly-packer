/** @noSelfInFile */

declare namespace xr_smartcover {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_smartcover_activity */
declare class action_smartcover_activity extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  target_selector(obj: TODO): TODO
  activate_scheme(): TODO
  check_target_selector(): void
  check_target(): boolean
  execute(): void
  finalize(): void
  position_riched(): TODO
  deactivate(): void
}

/** @customConstructor evaluator_need_smartcover */
declare class evaluator_need_smartcover extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_use_smartcover_in_combat */
declare class evaluator_use_smartcover_in_combat extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): boolean
}
