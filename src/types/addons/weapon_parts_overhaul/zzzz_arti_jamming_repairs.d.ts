// AUTO-GENERATED addon pack for `weapon_parts_overhaul` by `anomaly-packer gen-addon`. Lua API of zzzz_arti_jamming_repairs.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const zzzz_arti_jamming_repairs: {
  current_id: TODO
  DisassemblyWeapon: TODO
  EvaluateParts: TODO
  gc: TODO
  get_config: TODO
  has_parts: TODO
  HowMuch: TODO
  is_part: TODO
  math_floor: TODO
  name_mapping: AnyTable
  original_build_desc_header: TODO
  print_dbg: TODO
  print_ws: TODO
  quality_map: AnyTable
  reset_cgd: TODO
  SetTip: TODO
  unique_mapping: AnyTable
  WorkshopRepair: TODO
  /** here we go again */
  WorkshopReplacePart: TODO
  /**
   * remove the given part
   * if no part is specified, remove all
   */
  act_fieldstrip(id: TODO, part_name: TODO): void
  check_maintain(obj: TODO): TODO
  custom_disassembly_weapon(obj: TODO, obj_d: TODO): void
  get_suitable_kit(obj: TODO, clean: TODO): TODO
  has_parts_fieldstrip(wpn: TODO): boolean
  /** check for suitable repair kit as well as if weapon is suitable to have parts replaced */
  has_suitable_kit(obj: TODO): boolean
  init_fieldstrip_menu(obj: TODO): void
  init_maintenance_menu(obj: TODO): void
  name_fieldstrip(obj: TODO): TODO
  name_maintain(obj: TODO): TODO
  on_game_start(): void
  process_part(name: TODO, condition: TODO): TODO
  remove_name(name: TODO): TODO
  remove_part(part_name: TODO, part_con: AnyTable): void
  replace_name(name: TODO, clean: TODO): TODO
  replace_part(id: TODO, part: TODO, kit_name: TODO, clean: TODO): void
  section_has_parts(sec: TODO): TODO
  weapon_eval_parts(wpn: TODO): void
}
