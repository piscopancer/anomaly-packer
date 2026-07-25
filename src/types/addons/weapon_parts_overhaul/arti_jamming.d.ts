// AUTO-GENERATED addon pack for `weapon_parts_overhaul` by `anomaly-packer gen-addon`. Lua API of arti_jamming.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const arti_jamming: {
  d_flag: boolean
  gc: TODO
  get_config: TODO
  math_floor: TODO
  math_random: TODO
  actor_on_weapon_jammed(actor: TODO): void
  actor_on_weapon_reload(wpn: TODO): void
  cancel_reload(weapon: TODO): boolean
  check_unjam(obj: TODO): boolean
  current_id(): TODO
  determine_slot(weapon: TODO): TODO
  get_heat(): TODO
  get_jam_chance(wpn: TODO): TODO
  /** export function */
  get_jammed(id: TODO): TODO
  /** return overheat base amount (factor in section and suppressor) */
  get_overheat_base(weapon: TODO): TODO
  /**
   * return overheat damage modifier for current weapon, weapon itself is passed to get some convenience things
   * if you are not passing current, return just 1
   * eval returns multiplier, pass false gives just level
   */
  get_overheat_modifier(weapon: TODO, eval: TODO): TODO
  get_unjam_animation(weapon: TODO): TODO
  /** true if item is a firearm with parts */
  has_parts(wpn: TODO): TODO
  is_barrel(part: TODO): TODO
  is_part(part: TODO): TODO
  is_trigger(part: TODO): TODO
  /** gun jam play swearing sound */
  jam_swearing(): void
  /** this should only be invoked if the weapon can be overheated */
  manage_overheat(wpn: TODO): void
  missing_parts(wpn: TODO): boolean
  monster_on_before_hit(monster: TODO, shit: TODO, bone_id: TODO, flags: TODO): void
  move_to_slot(weapon: TODO, slot: TODO, sound: TODO): boolean
  npc_on_before_hit(npc: TODO, shit: TODO, bone_id: TODO, flags: TODO): void
  on_game_start(): void
  on_key_release(key: TODO): void
  persist_current_weapon(): void
  play_anim(weapon: TODO, anim: TODO, sound: TODO): void
  print_dbg(txt: TODO, ...args: any[]): void
  reset_cgd(): void
  reset_swear(): boolean
  send_msg(msg: TODO, verbosity: number | undefined): void
  set_jam_status(id: TODO, status: TODO): void
  start_jammin(chance: TODO): void
  stop_jammin(): void
  string_unjam(): TODO
  timed_restore(): boolean
  timed_unjam(id: TODO, sound: TODO, message: TODO, verbosity: TODO): boolean
  /** SECTION field stripping and part replacement -- */
  try_replace_part(wpn: TODO, table: AnyTable, part: TODO, using_tool: TODO): void
  /** Unjam works by clearing weapon ID from the jam table, if conditions are met. */
  unjam(wpn: TODO): void
  /** bullshit used to unjam engine-jammed weapons without a special unjam animation */
  unjam_replace(weapon: TODO, slot: TODO, sound: TODO): boolean
  unjam_wep(obj: TODO): void
  unset(): boolean
}
