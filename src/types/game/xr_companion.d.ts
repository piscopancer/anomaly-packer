/** @noSelfInFile */

declare namespace xr_companion {
  export const beh_wait_ignore: number
  export const beh_wait_near: number
  export const beh_wait_simple: number
  export const beh_walk_ignore: number
  export const beh_walk_near: number
  export const beh_walk_simple: number
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): TODO
  export function select_position(npc: TODO, st: TODO): TODO
  export function set_scheme(object: TODO, ini: TODO, scheme: TODO, section: TODO): void
  export function vector_rotate_y(v: TODO, angle: TODO): TODO
}

/** @customConstructor action_companion_activity */
declare class action_companion_activity extends action_base {
  constructor(npc_name: TODO, action_name: TODO, storage: TODO)
  initialize(): void
  beh_walk_simple(): void
  beh_wait_simple(): void
  execute(): void
  finalize(): void
}

/** @customConstructor evaluator_need_companion */
declare class evaluator_need_companion extends property_evaluator {
  constructor(storage: TODO, name: TODO)
  evaluate(): TODO
}
