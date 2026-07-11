/** @noSelfInFile */

declare namespace ph_door {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
  export function try_to_close_door(npc: TODO, doors: TODO): void
  export function try_to_open_door(npc: TODO, opened_doors: TODO): void
}

/** @customConstructor action_door */
declare class action_door {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(loading: TODO): void
  update(delta: TODO): void
  fastcall(): boolean
  open_fastcall(): boolean
  close_action(): void
  open_door(disable_snd: TODO): void
  is_closed(): boolean
  is_open(): boolean
  close_door(disable_snd: TODO): void
  try_switch(): boolean
  use_callback(door: TODO, actor: TODO): void
  hit_callback(obj: TODO, amount: TODO, local_direction: TODO, who: TODO, bone_index: TODO): void
  deactivate(): void
}
