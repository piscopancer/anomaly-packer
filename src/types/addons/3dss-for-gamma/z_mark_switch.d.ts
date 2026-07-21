// AUTO-GENERATED addon pack for `3dss-for-gamma` by `anomaly-packer gen-addon`. Lua API of z_mark_switch.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const z_mark_switch: {
  actor_on_update(): void
  apply_next_mark(wpn: TODO, info: TODO): void
  get(info: AnyTable, key: TODO, _default: TODO): TODO
  get_mark_color(section: TODO, i: TODO): TODO
  get_mark_count(section: TODO): TODO
  get_sight_section(wpn_section: TODO): TODO
  init(): void
  load_state(m_data: TODO): void
  on_game_start(): void
  on_key_release(key: TODO): void
  on_option_change(): void
  parse_key(section: TODO, key: TODO, type: TODO, current_mark: TODO): TODO
  parse_parameters(wpn: TODO): AnyTable
  save_state(m_data: TODO): void
  server_entity_on_unregister(obj: TODO): void
  try_replacement(): void
  update_shader(wpn: TODO, info: TODO): void
}
