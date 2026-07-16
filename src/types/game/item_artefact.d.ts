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
  W: number // @generated field — refine type
  _tmr: TODO // @generated field — refine type
  dialog: TODO // @generated field — refine type
  mirrored: boolean // @generated field — refine type
  offset: number // @generated field — refine type
  slot: TODO // @generated field — refine type
  constructor()
  __finalize(): void
  InitControls(): void
  Clear(): void
  Refresh(): void
  Update(): void
}

/** @customConstructor artefact_binder */
declare class artefact_binder extends object_binder {
  _tmr_dgr: TODO // @generated field — refine type
  _tmr_rad: TODO // @generated field — refine type
  first_call: boolean // @generated field — refine type
  no_rad: TODO // @generated field — refine type
  constructor(obj: CGameObject)
  update(delta: number): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(se_abstract: CseAbstract): void
}

declare namespace item_artefact {
  /** Anomaly `class "UIBelt"` is also reachable on the `item_artefact` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`item_artefact.UIBelt.Method = ...`). */
  export const UIBelt: UIBelt
  /** Anomaly `class "artefact_binder"` is also reachable on the `item_artefact` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`item_artefact.artefact_binder.Method = ...`). */
  export const artefact_binder: artefact_binder
}
