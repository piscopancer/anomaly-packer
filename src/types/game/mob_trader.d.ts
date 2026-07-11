/** @noSelfInFile */

declare namespace mob_trader {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO): void
}

/** @customConstructor mob_trader */
declare class mob_trader {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  use_callback(): void
  update(delta: TODO): void
  select_global_animation(): TODO
  select_head_animation(): TODO
  on_global_anim_request(): void
  on_head_anim_request(): TODO
  on_sound_end(): void
  deactivate(): void
  net_destroy(): void
}
