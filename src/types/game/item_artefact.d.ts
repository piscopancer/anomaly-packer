// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace item_artefact {
  export const HUD: TODO
  export function activate_hud(): TODO
  export function actor_on_before_hit(s_hit: TODO): TODO
  export function actor_on_item_change(item: TODO): TODO
  export function actor_on_net_destroy(): TODO
  export function bind(obj: TODO): TODO
  export function deactivate_hud(): TODO
  export function on_console_execute(name: TODO): TODO
  export function on_game_start(): TODO
  export function on_option_change(): TODO
  export function print_dbg(txt: TODO, ...args: TODO[]): TODO
  export function toggle_feature_arty_degradation(val: TODO): TODO
  export function update_hud(): TODO
}

/** @customConstructor UIBelt */
declare class UIBelt extends CUIScriptWnd {
  constructor(arg0: TODO)
  __finalize(): TODO
  InitControls(): TODO
  Clear(): TODO
  Refresh(): TODO
  Update(): TODO
}

/** @customConstructor artefact_binder */
declare class artefact_binder extends object_binder {
  constructor(obj: TODO)
  update(delta: TODO): TODO
  net_spawn(se_abstract: TODO): TODO
  net_destroy(se_abstract: TODO): TODO
}
