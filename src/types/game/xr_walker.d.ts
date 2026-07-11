/** @noSelfInFile */

declare namespace xr_walker {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_walker_activity */
declare class action_walker_activity extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  activate_scheme(loading: TODO, npc: TODO): void
  reset_scheme(loading: TODO, npc: TODO): void
  execute(): void
  update(): void
  finalize(): void
  position_riched(): TODO
  net_destroy(npc: TODO): void
}

/** @customConstructor evaluator_need_walker */
declare class evaluator_need_walker extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}
