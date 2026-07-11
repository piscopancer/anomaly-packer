/** @noSelfInFile */

declare namespace xr_animpoint {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_animpoint */
declare class action_animpoint extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  net_destroy(npc: TODO): void
  finalize(): void
}

/** @customConstructor action_reach_animpoint */
declare class action_reach_animpoint extends action_base {
  constructor(npc: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor animpoint */
declare class animpoint {
  constructor(npc: TODO, storage: TODO)
  initialize(): void
  activate_scheme(loading: TODO, npc: TODO, switching_scheme: TODO): void
  calculate_position(): void
  position_riched(): boolean
  fill_approved_actions(): boolean
  start(): void
  stop(): void
  get_action(): TODO
  update(): void
}

/** @customConstructor evaluator_need_animpoint */
declare class evaluator_need_animpoint extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}

/** @customConstructor evaluator_reach_animpoint */
declare class evaluator_reach_animpoint extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): boolean
}
