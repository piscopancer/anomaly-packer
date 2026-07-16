// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xobject.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xobject: {
  /**
   * Get online game object by ID
   * Complement to se(); returns nil when entity is offline, ID is invalid, or level not loaded
   * @safety SAFE - level.present() guards NULL g_pGameLevel during transitions; net_Find rejects id==0xffff (xr_object_list.h:72)
   * @cost O(1) | 2 luabind trivial (level.present: pointer check, level.object_by_id: flat array index map_NETID[ID])
   * @src xray/xrGame/level_script.cpp(586), xray/xrEngine/xr_object_list.h(70)
   * @param id Entity ID
   * @returns Online game object
   */
  go(id: number): TODO | undefined
  /**
   * True if the entity is story-protected (has a story id). Exempts quest-critical
   * NPCs/squads from scripted pursuit and cleanup.
   * @safety SAFE - nil-guarded
   * @cost O(1) | 1 luabind trivial (get_object_story_id: id->story_id map lookup)
   * @src anomaly/_g.script get_object_story_id
   * @param se_obj Server object or entity id
   */
  is_story(se_obj: AnyTable | number): boolean
  /**
   * Get server object from ID, game object, or server object
   * m_game_vertex_id ~= nil is the server-object discriminator; game objects expose game_vertex_id() as a method so the field is nil and falls through to _extract_id
   * @safety SAFE - alife_object Lua wrapper nil-guards id and rejects id >= 65535 (_g.script:2045)
   * @cost O(log n) on alife_object | 0 luabind for pass-through server object, 1 luabind medium otherwise (alife_object: xr_map<u16,*> find on OBJECT_REGISTRY)
   * @src anomaly/_g.script(2044), xray/xrGame/alife_simulator_script.cpp(40), xray/xrGame/alife_object_registry_inline.h(36)
   * @param input ID, game object, or server object
   * @returns Server object
   */
  se(input: number | TODO | AnyTable): TODO | undefined
}
