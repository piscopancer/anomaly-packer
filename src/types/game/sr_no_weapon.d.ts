/** @noSelfInFile */

declare namespace sr_no_weapon {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_no_weapon */
declare class action_no_weapon {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  switch_state(actor: TODO): void
  zone_enter(): void
  zone_leave(): void
}
