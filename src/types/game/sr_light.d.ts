/** @noSelfInFile */

declare namespace sr_light {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function check_light(stalker: CGameObject): void
  export function clean_up(): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor action_light */
declare class action_light {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  check_stalker(stalker: TODO): boolean
}
