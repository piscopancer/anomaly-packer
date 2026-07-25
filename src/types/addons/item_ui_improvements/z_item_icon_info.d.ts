// AUTO-GENERATED addon pack for `item_ui_improvements` by `anomaly-packer gen-addon`. Lua API of z_item_icon_info.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const z_item_icon_info: {
  /** ADD CONDITION TEXT */
  arty_table: AnyTable
  bar_list: AnyTable
  base_counter: TODO
  base_init: TODO
  base_pbar: TODO
  base_reset: TODO
  clr_g: TODO
  clr_missing: TODO
  clr_o: TODO
  /** WPO colors */
  clr_r: TODO
  clr_y: TODO
  functor_table_readable: AnyTable
  grenade_classes: AnyTable
  main_slot_indexes: AnyTable
  name_mapping: AnyTable
  /** ADD RECIPE READ/UNREAD TEXT */
  one_use_recipes: AnyTable
  repair_type_texture_tbl: AnyTable
  settings: TODO
  unique_mapping: AnyTable
  utjan_xml: TODO
  /** ADD AMMO ITEM SHORT NAME TEXT */
  valid_ammo_class: AnyTable
  valid_exlosive_ammo: AnyTable
  valid_wpn_kinds: AnyTable
  workshop_autoinject_known_recipes: AnyTable
  Add_Ammo_Short_Name_Text(self: TODO, xml: TODO, obj: TODO, sec: TODO): void
  Add_Condition_Text(self: TODO, xml: TODO, obj: TODO, sec: TODO, clsid: TODO): void
  /** ADD MAGS REDUX ITEM TEXT */
  Add_Mag_Icon_Text(self: TODO, xml: TODO, obj: TODO, sec: TODO, clsid: TODO): void
  /** MONEY TEXT */
  Add_Money_Text(self: TODO, xml: TODO, obj: TODO, sec: TODO): void
  Add_Parts_Bars(self: TODO, xml: TODO, obj: TODO, sec: TODO, clsid: TODO): void
  Add_Recipe_Icon_Text(self: TODO, xml: TODO, obj: TODO, sec: TODO): void
  Add_Repair_Icon(self: TODO, xml: TODO, obj: TODO, sec: TODO): void
  /** AlphaLion wpn name */
  Add_Weapon_Name(self: TODO, xml: TODO, obj: TODO, sec: TODO): void
  change_alpha(clr: TODO, a: TODO): TODO
  has_parts(obj: TODO): TODO
  /** ADD PART CONDITION BARS */
  is_short_gun(obj: TODO, clsid: TODO, sec: TODO): boolean
  /** MCM */
  load_defaults(): AnyTable
  load_settings(): AnyTable
  on_game_start(): void
  parts_sort(t: TODO, a: TODO, b: TODO): TODO
  set_text_rect(ele: TODO, padding_w: TODO, padding_h: TODO, text: TODO): void
}
