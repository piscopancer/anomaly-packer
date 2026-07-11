/** @noSelfInFile */

declare namespace xr_campfire_point {
  export const actid: TODO
  export const evaid: TODO
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_point_campfire */
declare class action_point_campfire extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  activate_scheme(): TODO
  execute(): void
  get_camp_action(): TODO
  finalize(): void
  position_riched(): TODO
}

/** @customConstructor evaluator_need_job */
declare class evaluator_need_job extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}
