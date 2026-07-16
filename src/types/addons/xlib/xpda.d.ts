// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xpda.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xpda: {
  /**
   * Clear all squad markers
   * Iterates squad_markers table and removes each via pcall; resets table
   * @safety pcall: map_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(n) markers | 1 luabind medium per marker (map_remove_object_spot)
   * @src xray/xrGame/level_script.cpp(456)
   */
  clear_squad_markers(): void
  /**
   * Re-apply markers from saved data table (caller provides persisted data)
   * Iterates saved markers, delegates to mark_entity per entry (pcall internally)
   * @safety pcall: mark_entity wraps map_add_object_spot via pcall, see doc/library/modding/pcall-safety.md
   * @cost O(n) markers | 2 luabind heavy per marker (remove + add via mark_entity)
   * @src xray/xrGame/level_script.cpp(431,456)
   * @param markers { [id] = { marker_type = "...", label = "..." }, ... }
   * @returns Count of markers applied
   */
  hydrate_markers(markers: AnyTable): number
  /**
   * Mark an entity (NPC, long-lived marker - caller owns persistence)
   * Removes existing marker of same type then adds new one via pcall
   * @safety pcall: map_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(1) | 2 luabind heavy (map_remove + map_add: CMapLocation ctor + container ops + SetHint)
   * @src xray/xrGame/level_script.cpp(431,456)
   * @param id Entity ID
   * @param opts { marker_type, label }
   * @returns Success (false during transitions)
   */
  mark_entity(id: number, opts: AnyTable): boolean
  /**
   * Add map marker to squad
   * Removes existing marker if any, then calls level.map_add_object_spot via pcall
   * @safety pcall: map_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(1) | 1-2 luabind heavy (each: CMapLocation construction + MapManager container insert + SetHint shared_str)
   * @src xray/xrGame/level_script.cpp(431,456)
   * @param squad_id Squad ID
   * @param opts { label, marker_type }
   * @returns Success (false during transitions)
   */
  mark_squad(squad_id: number, opts: AnyTable): boolean
  /**
   * Send an NPC-attributed PDA tip: header is the speaker's name, body is a message, icon is the
   * speaker's portrait, plus a PDA sound. Direct to the actor (not faction-channel routed), so it
   * always reaches the player regardless of the speaker's faction. Wraps dynamic_news_helper
   * (icon_by "npc" path), with a give_game_news fallback for engines lacking the helper. The
   * message is a string id; the helper translates it (the fallback translates it explicitly).
   * @safety SAFE - returns false if npc / msg / db.actor unavailable; never crashes
   * @cost O(1) | 1 luabind heavy (give_game_news) + character_name + character_icon + sound play
   * @src anomaly/dynamic_news_helper.script send_tip, xray/xrGame/script_game_object_script3.cpp(208)
   * @param npc Speaking NPC (provides character_name + character_icon)
   * @param msg Message string id (translated downstream, not pre-translated)
   * @param opts { header?, sound?, showtime? }; sound "news"/"danger"/"beep_1"/"beep_2"; showtime in seconds
   */
  npc_tip(npc: TODO, msg: string, opts: AnyTable | undefined): boolean
  /**
   * Send PDA message (dumb pipe, no sound, no color)
   * Calls db.actor:give_game_news which is the engine notification API
   * @safety SAFE - returns false if db.actor unavailable (main menu, loading)
   * @cost O(1) | 1 luabind heavy (give_game_news: GAME_NEWS_DATA struct construction + shared_str copies for caption/news/texture_name + Actor()->AddGameNews container append)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(106,117) _give_news, xray/xrGame/script_game_object_script3.cpp(208)
   * @param caption Sender caption (e.g. "Vasya, Loner")
   * @param msg Message text (caller adds color prefix)
   * @param icon Icon texture (default: generic)
   */
  send(caption: string, msg: string, icon: string | undefined): boolean
  /**
   * Remove entity marker
   * Calls level.map_remove_object_spot via pcall with marker_type
   * @safety pcall: map_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(1) | 1 luabind medium (map_remove_object_spot)
   * @src xray/xrGame/level_script.cpp(456)
   * @param id Entity ID
   * @param marker_type Marker type (default: red_location)
   */
  unmark_entity(id: number, marker_type: string | undefined): void
  /**
   * Remove map marker from squad
   * Calls level.map_remove_object_spot via pcall; clears stored marker_type from squad_markers table
   * @safety pcall: map_spot crashes during transitions, see doc/library/modding/pcall-safety.md
   * @cost O(1) | 1 luabind medium (map_remove_object_spot: Level().MapManager().RemoveMapLocation lookup + erase)
   * @src xray/xrGame/level_script.cpp(456)
   * @param squad_id Squad ID
   */
  unmark_squad(squad_id: number): void
}
