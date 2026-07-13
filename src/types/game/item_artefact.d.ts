/** @noSelfInFile */

declare namespace item_artefact {
  export const HUD: UIBelt
  export function activate_hud(): void
  export function actor_on_before_hit(s_hit: AnyTable): void
  export function actor_on_item_change(item: CGameObject): void
  export function actor_on_net_destroy(): void
  export function bind(obj: CGameObject): void
  export function deactivate_hud(): void
  export function on_console_execute(name: string): void
  export function on_game_start(): void
  export function on_option_change(): void
  export function print_dbg(txt: string, ...args: any[]): void
  export function toggle_feature_arty_degradation(val: boolean): void
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
  constructor(obj: CGameObject)
  update(delta: number): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(se_abstract: CseAbstract): void
}
