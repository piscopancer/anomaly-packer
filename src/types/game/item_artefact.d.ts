/** @noSelfInFile */

declare namespace item_artefact {
  export const HUD: TODO
  export function activate_hud(): void
  export function actor_on_before_hit(s_hit: TODO): void
  export function actor_on_item_change(item: TODO): void
  export function actor_on_net_destroy(): void
  export function bind(obj: TODO): void
  export function deactivate_hud(): void
  export function on_console_execute(name: string): void
  export function on_game_start(): void
  export function on_option_change(): void
  export function print_dbg(txt: TODO, ...args: TODO[]): void
  export function toggle_feature_arty_degradation(val: TODO): void
  export function update_hud(): void
}

/** @customConstructor UIBelt */
declare class UIBelt extends CUIScriptWnd {
  constructor()
  __finalize(): void
  InitControls(): void
  Clear(): void
  Refresh(): void
  Update(): void
}

/** @customConstructor artefact_binder */
declare class artefact_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): void
  net_spawn(se_abstract: TODO): boolean
  net_destroy(se_abstract: TODO): void
}
