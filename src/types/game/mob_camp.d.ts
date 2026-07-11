/** @noSelfInFile */

declare namespace mob_camp {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor mob_camp */
declare class mob_camp {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  select_current_home_point(first_call: boolean): void
  select_state(): void
  execute_state(): void
  deactivate(): void
  net_destroy(): void
}
