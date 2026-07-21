// AUTO-GENERATED addon pack for `sorting-plus` by `anomaly-packer gen-addon`. Lua API of zzz_rax_sortingplus_mcm.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const zzz_rax_sortingplus_mcm: {
  AUTOSELLJUNK: boolean
  BLOCKPUTALLFAVS: boolean
  HILITEFAVS: boolean
  HILITEJUNK: boolean
  ICONFAVS: boolean
  ICONJUNK: boolean
  NPCINV: boolean
  NPCTRADE: boolean
  PLAYERINV: boolean
  PLAYERTRADE: boolean
  RESORT: boolean
  SORTFAVS: boolean
  SORTJUNK: boolean
  tg_wait: number
  actor_on_first_update(): void
  /** i wish there was a ActorMenu_on_item_before_move_all callback then the above PUTALL bs wouldn't be needed. */
  ActorMenu_on_item_before_move(flags: TODO, npc_id: TODO, obj: TODO, mode: TODO, bag: TODO): void
  check_favs(cell: TODO): TODO
  check_junk(cell: TODO): TODO
  fav_menu_action(obj: TODO): void
  fav_menu_string(obj: TODO): string
  get_sort_kind(sec: TODO): TODO
  /** code to move junk to actor trade bag, when trade window opened. */
  GUI_on_show(name: TODO): void
  /** {texture = "ui_am_propery_01", x = 1, y = 1, w = 15, h = 15} */
  icon_favs(cell: TODO, obj: TODO, sec: TODO): AnyTable
  icon_junk(cell: TODO, obj: TODO, sec: TODO): AnyTable
  is_favorite(sec: TODO): TODO
  is_junk(sec: TODO): TODO
  junk_menu_action(obj: TODO): void
  junk_menu_string(obj: TODO): string
  loadsettings(): void
  menu_precond(obj: TODO, mode: TODO, bag: TODO): TODO
  on_game_start(): void
  on_mcm_load(): AnyTable
  pr(txt: TODO, ...args: any[]): void
  set_favorite(sec: TODO, state: TODO): void
  set_item_order(): void
  set_junk(sec: TODO, state: TODO): void
  sort_by_index(t: AnyTable, a: TODO, b: TODO): TODO
  sort_by_kind(t: AnyTable, a: TODO, b: TODO): TODO
  sort_by_props(t: AnyTable, a: TODO, b: TODO): TODO
  sort_by_size(t: AnyTable, a: TODO, b: TODO): TODO
  sort_by_sizekind(t: AnyTable, a: TODO, b: TODO): TODO
  sort_info(asec: TODO, bsec: TODO): void
}
