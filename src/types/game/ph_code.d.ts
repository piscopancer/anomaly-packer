/** @noSelfInFile */

declare namespace ph_code {
  export function add_to_binder(npc: TODO, ini: TODO, scheme: TODO, section: TODO, storage: TODO): void
  export function set_scheme(npc: TODO, ini: TODO, scheme: TODO, section: TODO, gulag_name: TODO): void
}

/** @customConstructor codepad */
declare class codepad {
  constructor(obj: TODO, storage: TODO)
  reset_scheme(): void
  update(delta: TODO): void
  use_callback(obj: TODO, who: TODO): void
  OnNumberReceive(text: TODO): void
  deactivate(): void
}
