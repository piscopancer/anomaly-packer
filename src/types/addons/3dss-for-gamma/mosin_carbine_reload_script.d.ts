// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Lua API of mosin_carbine_reload_script.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const mosin_carbine_reload_script: {
  anm_handlers: AnyTable
  actor_on_hud_animation_mark(value: TODO, name: TODO): void
  actor_on_hud_animation_play(anm_table: TODO, item: TODO): void
  get_anm_info(item: TODO, motion: TODO): TODO
  get_custom_anim_name(anim_name: TODO, item: TODO): TODO
  on_game_start(): void
  reduce_ammo(section: TODO, num: TODO): void
  try_force_bolt_close(anim_name: TODO, item: TODO): boolean | undefined
  try_play_empty_reload(anim_name: TODO, item: TODO): boolean | undefined
  try_skip_bolt_close_on_empty_reload(anim_name: TODO, item: TODO): boolean | undefined
}
