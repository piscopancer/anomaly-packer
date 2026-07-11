/** @noSelfInFile */

declare namespace sr_timer {
  export function add_to_binder(obj: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function parse_data(npc: TODO, s: TODO): TODO
  export function set_scheme(obj: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
  export function time2str(n: TODO): string
}

/** @customConstructor action_timer */
declare class action_timer {
  constructor(obj: TODO, storage: TODO)
  update(delta: TODO): void
  deactivate(delta: TODO): void
}
