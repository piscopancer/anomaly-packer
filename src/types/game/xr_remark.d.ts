/** @noSelfInFile */

declare namespace xr_remark {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function init_target(obj: TODO, target_str: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_remark_activity */
declare class action_remark_activity extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  activate_scheme(): void
  get_target(): TODO
  time_callback(): void
  update(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_remark */
declare class evaluator_need_remark extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}
