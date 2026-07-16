// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xdata.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xdata: {
  bodyguards: AnyTable
  guards: AnyTable
  guides: AnyTable
  leaders: AnyTable
  /**
   * Per-role buckets and the unscriptable_npcs union, derived from npc_roles at module load.
   * Existing callers (xcreature.is_unscriptable, xsquad.script:83, ap_ext_test.script:302)
   * bare-truthy-check unscriptable_npcs[section]; the union preserves that contract.
   */
  mechanics: AnyTable
  /**
   * Per-role buckets and the unscriptable_npcs union, derived from npc_roles at module load.
   * Existing callers (xcreature.is_unscriptable, xsquad.script:83, ap_ext_test.script:302)
   * bare-truthy-check unscriptable_npcs[section]; the union preserves that contract.
   */
  medics: AnyTable
  /**
   * Per-NPC role declarations. Each section maps to a set of roles it fulfills.
   * Multi-role NPCs are common: mechanics with dm_init_trader (sell ammo + parts),
   * leaders with dm_init_trader (Sakharov, Petrenko), quest NPCs with dm_init_trader
   * (Kruglov, Povar, Physicist) and so on. Each role this NPC actually serves
   * (per vanilla character_desc <actor_dialog>) is tagged true.
   * Roles: trader, medic, mechanic, guide, guard, bodyguard, leader, quest.
   * faction: real allegiance, verified from character_desc <community> when possible. For NPCs
   * whose community is "trader" (universal-neutral) the faction encodes their real allegiance
   * by lore. Pre-populated so _se_faction can short-circuit on hash lookup
   * without paying community() heavy luabind. Missing faction (a few unverified ids) falls
   * back to community read.
   * src: grok_no_north_faction_in_south.script, surge_manager_ignore_npc.script
   */
  npc_roles: AnyTable
  quests: AnyTable
  /**
   * Per-role buckets and the unscriptable_npcs union, derived from npc_roles at module load.
   * Existing callers (xcreature.is_unscriptable, xsquad.script:83, ap_ext_test.script:302)
   * bare-truthy-check unscriptable_npcs[section]; the union preserves that contract.
   */
  traders: AnyTable
  unscriptable_npcs: AnyTable
}
