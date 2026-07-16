// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xcreature.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xcreature: {
  ENTITY: AnyTable
  /**
   * Get faction community from entity
   * Resolves via xobject.se then tries get_squad_community (squads) or alife_character_community (NPCs)
   * @safety SAFE - returns nil for invalid entities
   * @cost O(log n) | 2-3 luabind: alife_object medium + get_squad_community heavy (shared_str return) OR alife_character_community heavy (community shared_str)
   * @src anomaly/_g.script(2273), anomaly/_g.script(2437)
   * @param input Entity ID or object
   * @returns Faction community
   */
  community(input: number | TODO | AnyTable): string | undefined
  /**
   * Get entity type (stalker or mutant)
   * Uses IsStalker/IsMonster with clsid; nil-first parameter is the fast check path (no game_object needed)
   * @safety SAFE - nil input returns nil, IsStalker/IsMonster are nil-safe with clsid
   * @cost O(log n) | 1-2 luabind: get_clsid (1 medium alife_object + 1 trivial clsid) + IsStalker/IsMonster (0 luabind, pure Lua compare/hash since cls is pre-supplied)
   * @src anomaly/_g.script(2820) IsStalker, (2827) IsMonster
   * @param input Entity ID or object
   * @returns "stalker", "mutant", or nil
   */
  entity_type(input: number | TODO | AnyTable): string | undefined
  /**
   * Get class ID from entity
   * Accepts ID, game_object, or server object; resolves to clsid via xobject.se + :clsid() luabind
   * @safety SAFE - returns nil for invalid/missing entities, :clsid() never crashes
   * @cost O(log n) | 1 luabind medium (alife_object: xr_map find) + 1 luabind trivial (clsid: enum return)
   * @src anomaly/_g.script(2044), xray/xrGame/script_game_object_script.cpp
   * @param input Entity ID or object
   * @returns Class ID
   */
  get_clsid(input: number | TODO | AnyTable): number | undefined
  /**
   * Get personal goodwill from one inventory owner toward another.
   * Reads ONLY the personal-relation term (RELATION_REGISTRY personal map); it excludes the
   * community / reputation / rank contributions to the summed attitude. NEUTRAL (0) if unset.
   * @safety SAFE - nil-guarded; GetGoodwill VERIFY trips only on non-CInventoryOwner
   * @cost O(1) | 1 luabind medium (goodwill: RELATION_REGISTRY().GetGoodwill personal-map lookup)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(744-754), xray/xrGame/relation_registry.cpp(134-149)
   * @param obj Subject (whose attitude is read)
   * @param target Object of the attitude
   * @returns Personal goodwill; 0 if obj/target nil
   */
  get_goodwill(obj: TODO, target: TODO): number
  /**
   * Get current money (rubles) of an inventory owner
   * Money() always returns u32 across luabind; never nil for a valid CInventoryOwner.
   * @safety SAFE - nil-guarded obj; Money() VERIFY trips only on non-CInventoryOwner
   * @cost O(1) | 1 luabind medium (Money: smart_cast<CInventoryOwner*> + m_money field read)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(674-679), xray/xrGame/InventoryOwner.h(117)
   * @param obj Inventory owner (actor or NPC)
   * @returns Current rubles; 0 if obj nil
   */
  get_money(obj: TODO): number
  /**
   * Get mutant species from any entity (squad, se_obj, game_object, or ID)
   * For squads: player_id fast reject for stalkers (0 luabind); commander chain cached weak-keyed.
   * For NPCs/game_objects: direct clsid + section fallback, cached per-NPC.
   * Returns nil for stalkers, non-mutants, and unrecognized entities.
   * @safety SAFE - nil-guarded throughout
   * @cost O(1) | 0 luabind cached or stalker fast-reject; 5 luabind on miss for mutant squad (clsid + commander_id + alife_object + cmd:clsid)
   * @src anomaly/_g.script(2833-2866), anomaly/ui_mutant_loot.script(34-54)
   * @param input Entity ID or object
   * @returns Species name ("bloodsucker", "dog", "lurker", etc.)
   */
  get_mutant_species(input: number | TODO): string | undefined
  /**
   * Get mutant variant (full NPC section) from any entity
   * For squads: returns commander's section_name ("bloodsucker_red_strong", "dog_weak_brown")
   * For NPCs: returns entity's section_name directly
   * Returns nil for stalkers, non-mutants, and unrecognized entities
   * @safety SAFE - nil-guarded throughout
   * @cost O(1) | 0 luabind (stalker fast reject) | 4 luabind (mutant squad) | 2 luabind (NPC)
   * @src anomaly/_g.script(2833-2866), anomaly/ui_mutant_loot.script(34-54)
   * @param input Entity ID or object
   * @returns Variant section name
   */
  get_mutant_variant(input: number | TODO): string | undefined
  /**
   * Get translated name for entity (stalker or mutant)
   * Stalkers use character_name(); mutants use hash table then ini_sys:r_string_ex fallback
   * @safety SAFE - returns "unknown" for nil, "stalker"/"mutant" for missing names
   * @cost O(log n) | 2-4 luabind: stalker: alife_object + character_name heavy; mutant: alife_object + section_name heavy + (hash hit or r_string_ex heavy + translate)
   * @src anomaly/_g.script(2044), xray/xrGame/script_game_object_script.cpp
   * @param input Entity ID or server object
   * @returns Translated name
   */
  get_name(input: number | AnyTable): string
  /**
   * Give rubles to an inventory owner (positive credits, negative debits)
   * Defends against engine u32 underflow on negative amount > balance: pre-clamps the
   * magnitude so set_money never sees a wrapping subtraction (engine has no clamp at 0;
   * m_money is u32 and the engine path is set_money(get_money() + money) where money is
   * signed int promoted to u32 â negative overflow wraps to ~4e9 rubles).
   * @safety SAFE - pre-clamps negative magnitude to current balance to defend against engine u32 wrap
   * @cost O(1) | 1-2 luabind medium (Money on negative path + give_money: set_money + GE_MONEY persistence event)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(703-709), xray/xrGame/InventoryOwner.cpp(635-650)
   * @param obj Target (actor or NPC)
   * @param amount Positive credits, negative debits
   * @returns true on call, false if obj nil or amount nil/zero
   */
  give_money(obj: TODO, amount: number): boolean
  /**
   * Check if entity is a mutant
   * Shorthand: get_clsid + IsMonster(nil, cls) fast path
   * @safety SAFE - returns false for nil/invalid
   * @cost O(log n) | 1 luabind medium (alife_object) + 1 luabind trivial (clsid); IsMonster is pure Lua hash lookup on lazy-cached monster_classes
   * @src anomaly/_g.script(2827) IsMonster
   * @param input Entity ID or object
   */
  is_mutant(input: number | TODO | AnyTable): boolean
  /**
   * Check if entity is an NPC (stalker or mutant)
   * Shorthand: delegates to is_stalker || is_mutant
   * @safety SAFE - returns false for nil/invalid
   * @cost O(log n) | up to 4 luabind: stalker path 2 luabind (alife_object medium + clsid trivial), mutant path 2 more on miss
   * @param input Entity ID or object
   */
  is_npc(input: number | TODO | AnyTable): boolean
  /**
   * Check if entity is a stalker
   * Shorthand: get_clsid + IsStalker(nil, cls) fast path
   * @safety SAFE - returns false for nil/invalid
   * @cost O(log n) | 1 luabind medium (alife_object) + 1 luabind trivial (clsid); IsStalker is pure Lua compare
   * @src anomaly/_g.script(2820) IsStalker
   * @param input Entity ID or object
   */
  is_stalker(input: number | TODO | AnyTable): boolean
  /**
   * Check if creature is an active task giver (has task referencing its NPC ID or squad ID)
   * Scans task_manager.task_info for active tasks where task_giver_id matches NPC ID or squad ID
   * @safety SAFE - returns false for nil, task_manager nil-guarded
   * @cost O(t) where t = active tasks (typically 3-10) | 1 luabind trivial (id) + get_object_squad 0 luabind (anomaly Lua); per-task pure Lua hash compare
   * @src anomaly/axr_task_manager.script(793)
   * @param obj Game object
   * @returns True if NPC is referenced by an active task
   */
  is_task_giver(obj: TODO): boolean
  /**
   * Check if entity is a Script_Trader (CSE class 37 / 36). Sidorovich-class story trader entities
   * live in this class, not IsStalker; iterate this filter to cover them with bounded cost (~10
   * entities vanilla Anomaly, ~30-100 with addons) vs the full alife pool.
   * @safety SAFE - returns false for nil/invalid
   * @cost O(log n) | 1 luabind medium (alife_object) + 1 luabind trivial (clsid); IsTrader is pure Lua compare
   * @src anomaly/_g.script(2904) IsTrader
   * @param input Entity ID or object
   */
  is_trader(input: number | TODO | AnyTable): boolean
  /**
   * Check if creature is unscriptable (traders, leaders, companions, story chars)
   * These NPCs cannot be scripted (scripted_target) - fixed to their role/location
   * Checks story_id, companion info, xdata.unscriptable_npcs hash, and squad story_id; cached per game_object
   * @safety SAFE - returns true for nil (fail-safe), all APIs return nil for invalid objects
   * @cost O(1) cached | uncached: 3-5 luabind mixed (id trivial, IsStalker trivial, has_info medium known_info linear find, section heavy shared_str)
   * @src anomaly/_g.script(2674) get_object_story_id, anomaly/_g.script(2437) get_object_squad
   * @param obj Game object
   * @returns True if unscriptable (nil returns true for safety)
   */
  is_unscriptable(obj: TODO): boolean
  /**
   * Iterator over all online game objects
   * Uses game_objects_iter (Demonized modded exe) when available, falls back to db.storage
   * @safety SAFE - nil-guarded, skips entries without valid game_object
   * @cost O(n) online objects | 0 luabind (pure Lua table iteration)
   * @src modded-exes/callbacks_gameobject.script(38)
   * @returns Iterator yielding game_object instances
   */
  online_iter(): (this: void, ...args: any[]) => any
  /**
   * Iterator over online game objects yielding (id, obj) pairs
   * Caller can validate destroyed-state via alife_object(id) without triggering "destroyed object" warnings
   * @safety SAFE - id is taken from registry key, no method call on obj required to obtain it
   * @cost O(n) online objects | 0 luabind (pure Lua next() on table)
   * @src modded-exes/callbacks_gameobject.script(28-45), anomaly/db.script(15,70-83)
   * @returns Iterator yielding (id, game_object) pairs
   */
  online_iter_with_id(): (this: void, ...args: any[]) => any
  /**
   * Get position from entity
   * Tries server object .position field first, falls back to game_object :position() method
   * @safety SAFE - returns nil for nil/invalid entities
   * @cost O(log n) | 1 luabind medium (alife_object) + 1 luabind trivial (.position field on cse or :position() Fvector return)
   * @src xray/xrServerEntities/xrServer_Objects_ALife_script.cpp
   * @param input Entity ID or object
   * @returns Position
   */
  pos(input: number | TODO | AnyTable): TODO | undefined
  /**
   * Create fluent server objects iterator
   * Wraps alife():iterate_objects or game_objects_iter with chainable filter/collect API
   * @safety pcall: iteration uses pcall per entity to isolate invalid object errors, see doc/library/modding/pcall-safety.md
   * @cost O(n) entities iterated | per-entity: 1 luabind heavy (iterate_objects scans full OBJECT_REGISTRY) + per-filter cost (1 trivial each for clsid/alive, 0 for cached level_id)
   * @src xray/xrGame/alife_simulator_script.cpp(477,514) iterate_objects, modded-exes game_objects_iter
   * @returns server_objects_iterator
   * @usage xcreature.query():stalkers():alive():on_level(lvl):collect()
   */
  query(): AnyTable
  /**
   * Set personal goodwill from one inventory owner toward another (absolute write).
   * Writes the personal-relation term only; the engine clamps to [game_relations]
   * personal_goodwill_limits (-3000, 2000). GetRelationType reads the summed attitude
   * (personal + community + reputation + rank), so a low enough personal value flips this one
   * pair to enemy (attitude < attitude_neutal_threshold = -999) without touching community.
   * @safety SAFE - nil-guarded; set_goodwill clamps internally
   * @cost O(1) | 1 luabind medium (set_goodwill: RELATION_REGISTRY().SetGoodwill personal-map write)
   * @src xray/xrGame/script_game_object_script3.cpp(292), xray/xrGame/relation_registry.cpp(151-159)
   * @param obj Subject
   * @param value Personal goodwill to set (clamped engine-side)
   * @param target Object of the attitude
   * @returns true on call, false if obj/target/value nil
   */
  set_goodwill(obj: TODO, value: number, target: TODO): boolean
  /**
   * Transfer rubles from one inventory owner to another (debit sender + credit recipient)
   * Defends against engine u32 underflow: TransferMoney at script_game_object_inventory_owner.cpp:693
   * has a dead `u32 - int < 0` guard (always false, compiler should warn -Wsign-compare /
   * MSVC C4018), so without this pre-check the engine silently underflows sender's m_money
   * to ~4e9 rubles when amount > balance. Engine PR pending â see todo-demonized-exes.md n015.
   * @safety SAFE - pre-checks balance to defend against engine u32 underflow bug
   * @cost O(1) | 2 luabind medium (Money on sender + TransferMoney: 2x set_money + 2x GE_MONEY persistence event)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(681-701), xray/xrGame/InventoryOwner.cpp(635-650)
   * @param from Sender (debit)
   * @param amount Positive rubles to move
   * @param to Recipient (credit)
   * @returns true on transfer, false if nil args, non-positive amount, or insufficient balance
   */
  transfer_money(from: TODO, amount: number, to: TODO): boolean
}
