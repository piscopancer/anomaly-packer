// AUTO-GENERATED addon pack for `sorting-plus` by `anomaly-packer gen-addon`. Lua API of rax_icon_layers.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const rax_icon_layers: {
  add_icon_layer(self: TODO, ele: TODO, base: TODO, sec_m: TODO, tbl: TODO): void
  add_texture_layer(self: TODO, ele: TODO, base: TODO, sec_m: TODO, tbl: TODO): void
  pr(txt: TODO, ...args: any[]): void
  refresh(mode: TODO): void
  /**
   * functor will be passed cell, obj and section
   * functor should return table with the same info as an item section icon layer. {icon_layer = "tch_upgr_ico", icon_layer_x = 0, icon_layer_y = 1, icon_layer_scale = 0.75}
   * functor can alternitivly return texture name/file, cords and dimesions {texture = "xxy.dds", x = 0, y = 0, w = 10, h = 10}
   */
  register(name: TODO, functor: TODO): void
}
