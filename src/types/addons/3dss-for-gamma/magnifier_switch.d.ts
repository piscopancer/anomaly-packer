// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Lua API of magnifier_switch.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const magnifier_switch: {
  og_play_item_sound: TODO
  bind_dummy(obj: TODO): void
  cancel_show_anm(anm_table: TODO, obj: TODO, owner: TODO): void
  cancel_show_sound(alias: TODO, parent: TODO, result: TODO): void
  check_ME_version(required: TODO): TODO
  delay_aimmode_toggle(): void
  /** state (to switch to): 0 (switch magnifier off), 1 (switch magnifier on), nil (switch current state) */
  get_new_section(sec: TODO, state: TODO): TODO
  init(): void
  on_before_key_press(key: TODO, bind: TODO, dis: TODO, flags: TODO): TODO
  on_game_start(): void
  on_key_hold(key: TODO): void
  on_mouse_wheel(dir: TODO, flags: TODO): void
  on_option_change(mcm: TODO): void
  switch_magnifier(wpn: TODO, sec: TODO, new_sec: TODO): TODO
}
