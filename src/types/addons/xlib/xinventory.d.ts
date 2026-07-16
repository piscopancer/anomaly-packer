// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xinventory.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xinventory: {
  BACKPACK_SLOT: number
  LAST_MAIN_SLOT: number
  SLOT_GRENADE: number
  SLOT_HELMET: number
  SLOT_KNIFE: number
  SLOT_OUTFIT: number
  SLOT_PISTOL: number
  SLOT_RIFLE: number
  /**
   * Derive surplus per policy key from counts vs rules (pure)
   * Returns keys where count > rule.max with the surplus amount. Keys without a rule or with no
   * max are ignored. Keys are categories or item sections, matching classify and the rules map,
   * so an unmentioned item (no key in rules) never shows as surplus. Used by stash fill to plan
   * deposits without re-walking inventory.
   * @safety SAFE - nil-guarded inputs (returns empty)
   * @cost O(counts) pure Lua, no luabind
   * @param counts From classify(npc, opts, rules)
   * @param rules From load_policy(...).rules
   * @returns { [category|section] = surplus_count } (only entries with surplus > 0)
   */
  build_surplus_map(counts: AnyTable, rules: AnyTable): AnyTable
  /**
   * Count NPC inventory items per policy key (online NPC)
   * Single iterate over the NPC's inventory; policy_key drops untouchable and equipped
   * automatically (caller never sees them). Ammo keys count in ROUNDS (sum of ammo_get_count
   * across stacks); other keys count in ITEMS. With rules given, an item whose section is named
   * in rules counts under its SECTION key, otherwise its category key, so a category cap sees
   * only items that have no section rule of their own.
   * @safety SAFE - nil-guarded npc; offline npc yields empty (iterate_inventory online-only)
   * @cost O(items) | per item: policy_key + 0-1 ammo_get_count
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(256-270) iterate_inventory
   * @param npc Online NPC
   * @param opts From get_category_opts(npc); nil opts treats every ammo as ammo_not_equipped
   * @param rules From load_policy(...).rules; nil = pure per-category counting
   * @returns { [category|section] = count }
   */
  classify(npc: TODO, opts: AnyTable | undefined, rules: AnyTable | undefined): AnyTable
  /**
   * Create an item on any NPC (online, offline, any map)
   * Three branches all route through alife_create_item for uniform property handling:
   *   (1) online NPC + valid lvid -> game_object owner
   *   (2) offline NPC + valid lvid -> server-entity owner
   *   (3) offline NPC + invalid lvid -> table owner with smart-terrain fallback
   * @safety SAFE - all branches nil-guarded; smart fallback validates lvid
   * @cost O(log n) | 2-4 luabind (alife_object medium + alife_create_item heavy)
   * @src anomaly/_g.script(2129), anomaly/itms_manager.script(1254)
   * @src xray/xrGame/alife_simulator_script.cpp(175,232)
   * @param section Item section to create
   * @param npc_id NPC ID (online or offline)
   * @param t { ammo, cond, uses, cond_r, cond_ct, cond_cr } forwarded to itms_manager
   * @returns Created entity or table of ammo entities, or nil
   */
  create_item(section: string, npc_id: number, t: AnyTable | undefined): TODO | AnyTable | undefined
  /**
   * Veto an actor-menu move from a before_move handler; Cond_Move aborts the move when ret_value is
   * cleared (ui_inventory.script:915-917).
   * @safety SAFE - sets one field on the engine-provided flags table
   * @cost O(1) | 0 luabind
   * @param flags the before_move callback's 1st arg
   */
  deny_move(flags: AnyTable): void
  /**
   * Get ordered list of ammo sections accepted by a weapon section
   * Array form of parse_list (preserves declaration order). Cached per weapon section.
   * @safety SAFE - nil-guarded sec; empty list when ammo_class missing
   * @cost O(1) cached, 1 luabind heavy on miss (parse_list ini parse, array form)
   * @src anomaly/_g.script parse_list, vanilla weapon LTX ammo_class field
   * @param weapon_sec Weapon section name
   * @returns Ordered array of ammo section names
   */
  get_ammo_sections(weapon_sec: string): AnyTable
  /**
   * Get ammo tier map for a weapon's ammo_class (k_ap-ranked, N tiers)
   * Sorts accepted ammo sections by k_ap ascending (cost as tiebreaker); splits into N
   * buckets via floor((i-1) * N / count). Tier 1 = least armor-piercing (basic/FMJ),
   * tier N = most armor-piercing (AP). Falls back to cost-only sort when all k_ap=0
   * (rare; some addon ammo may omit k_ap). Cached per (weapon_sec, n_tiers).
   * @safety SAFE - nil-guarded; empty map on missing ammo_class
   * @cost O(N log N) sort on miss; O(1) cached; ~3 luabind heavy per section on miss (k_ap + cost reads via r_float_ex)
   * @src anomaly/weapon_ammo.ltx (k_ap, cost per ammo section)
   * @param weapon_sec Weapon section name
   * @param n_tiers Number of tiers (default 2)
   * @returns { [ammo_sec] = tier_idx, ... }
   */
  get_ammo_tier_map(weapon_sec: string, n_tiers: number): AnyTable
  /**
   * Get ammo box size (rounds per stack) for an ammo section
   * Reads ini_sys:box_size; cached per session. section_exist + line_exist guard avoids r_u32 fatal on miss.
   * @safety SAFE - section_exist + line_exist guard before r_u32 (which fatals via THROW3 otherwise)
   * @cost O(1) cached, 3 luabind heavy on miss (section_exist, line_exist, r_u32)
   * @src xray/xrServerEntities/script_ini_file.cpp(36,41,79)
   * @param sec Ammo section name
   * @returns Box size or nil if section/key missing
   */
  get_box_size(sec: string): number | undefined
  /**
   * Resolve category for a live item with per-NPC opts (equipped + ammo tier overrides)
   * Untouchables gate first via get_section_category (section-level: quest/anim/blacklist).
   * Three additional runtime per-item untouchable checks then apply:
   *   1. get_object_story_id(item:id()) â item has a runtime story_id (quest tracker).
   *      Vanilla precedent: release_npc_inventory.script:81 "extra protection".
   *   2. axr_companions.is_assigned_item(opts.npc_id, item:id()) â item the actor
   *      gave to a companion. Vanilla precedent: death_manager.script:407,
   *      axr_companions.script:1300,1360.
   *   3. se_load_var(item:id(), nil, "strapped_item") â player-strapped weapon.
   *      Vanilla precedent: death_manager.script:439, itms_manager.script:338,
   *      axr_companions.script:1360.
   * Equipped check then uses opts.equipped_ids (item id). Ammo resolves to ammo_slot_2_tN /
   * ammo_slot_3_tN per equipped pistol / rifle tier_map, else stays "ammo_not_equipped".
   * Other categories delegate to get_section_category.
   * @safety SAFE - nil-guarded item; opts entirely optional; axr_companions module guarded
   * @cost O(1) | get_section_category cost + item:section/id luabind + 3 hash lookups (story_id, assigned, strapped)
   * @src xray/xrGame/script_game_object_script.cpp section(), anomaly/_g.script get_object_story_id, anomaly/axr_companions.script is_assigned_item
   * @see get_section_category (pure section), is_in_category (predicate wrapper)
   * @param item Inventory item
   * @param opts { equipped_ids, equipped_pistol_sec, equipped_rifle_sec, npc_id }
   * @returns Category name
   */
  get_category(item: TODO, opts: AnyTable | undefined): string
  /**
   * Build canonical opts table for get_category from an online NPC
   * Captures equipped state (slot 1..LAST_MAIN_SLOT ids, plus pistol and rifle weapon sections
   * for per-slot ammo tier resolution) and the npc id (for the companion-gifted check in
   * get_category). Caller builds once before iterate_inventory and threads the same opts into
   * every get_category call. Snapshot semantics: equipped state is captured once; consumer
   * walks complete within a single Lua call so no frame tick mutates between.
   * @safety SAFE - nil-guarded npc; returns empty opts when npc nil
   * @cost O(1) | up to 17 luabind trivial (14 item_in_slot via get_equipped_ids + 2 item_in_slot for pistol/rifle + 1 id) + 2 luabind heavy (section: shared_str alloc)
   * @src xray/xrServerEntities/inventory_space.h, xray/xrGame/script_game_object_inventory_owner.cpp(1605)
   * @param npc Online NPC
   * @returns { equipped_ids, equipped_pistol_sec, equipped_rifle_sec, npc_id }
   */
  get_category_opts(npc: TODO): AnyTable
  /**
   * Get list of sections that belong to a category
   * Symmetric inverse of get_section_category. Covers every category that can be the result
   * of get_section_category plus the sentinel "ammo_not_equipped". Per-NPC categories
   * (equipped, ammo_slot_*) and "untouchable" / "other" / "weapon" return empty (not
   * enumerable as a single section set). Each category's list is built once per session via
   * its builder and cached; addons that ship new sections matching a Parse_ITM bucket or
   * hand-set predicate are picked up automatically on first call.
   * @safety SAFE - returns empty list for nil, unknown, or per-NPC / sentinel categories
   * @cost O(1) cached; first-call cost varies per category: hand-sets ~10 ops, _ITM bucket
   *       walks ~50-200 ops. No ini_sys walks.
   * @src anomaly/_g.script(3173,3230) _ITM + Parse_ITM
   * @param category Category name (same set as get_section_category result)
   * @returns List of section names, order unspecified (caller sorts if order matters)
   */
  get_category_sections(category: string): AnyTable
  /**
   * Get item condition (0.0 - 1.0)
   * Wraps item:condition(). Meaningful for weapons / outfits / helmets / degradable items.
   * @safety SAFE - nil-guarded item
   * @cost O(1) | 1 luabind trivial (condition: float field read)
   * @src xray/xrGame/InventoryItem.h
   * @param item Inventory item
   * @returns Condition 0.0-1.0
   */
  get_condition(item: TODO): number | undefined
  /**
   * Get item section's vanilla cost (system.ltx `cost` float field)
   * Pure primitive: returns nil if section or key missing. Caller chooses the default
   * by context (vanilla `axr_trade_manager` uses 30 in trade context per :236,303,550;
   * `xr_corpse_detection` uses 0 in loot-detection context per :157). Cost is a per-section
   * property; condition-aware pricing is the caller's responsibility. Cached per session;
   * `false` sentinel records the nil case so subsequent calls short-circuit without re-querying.
   * @safety SAFE - nil-guarded sec; r_float_ex returns nil when section or key missing
   * @cost O(1) cached, 1 luabind heavy on miss (r_float_ex: section_exist + line_exist + r_float ini parse)
   * @src anomaly/_g.script(1525-1529), anomaly/axr_trade_manager.script(236), xray/xrServerEntities/script_ini_file.cpp(93)
   * @param sec Item section name
   * @returns Cost in rubles, or nil if section / key missing
   */
  get_cost(sec: string): number | undefined
  /**
   * Get item in NPC's grenade slot (slot 4)
   * @safety SAFE - nil-guarded npc
   * @cost O(1) | 1 luabind trivial (item_in_slot)
   * @src xray/xrServerEntities/inventory_space.h(15)
   * @returns Grenade item or nil
   */
  get_equipped_grenade(npc: TODO): TODO | undefined
  /**
   * Get item in NPC's helmet slot (slot 12)
   * @safety SAFE - nil-guarded npc
   * @cost O(1) | 1 luabind trivial (item_in_slot)
   * @src xray/xrServerEntities/inventory_space.h(31)
   * @returns Helmet item or nil
   */
  get_equipped_helmet(npc: TODO): TODO | undefined
  /**
   * Get set of item ids equipped across the protected main slots
   * Used by inventory walkers (trade / stash / cull via get_category) to skip equipped gear in
   * one O(1) lookup per item. SLOT_GRENADE is deliberately excluded: a grenade in the grenade
   * slot is a throwable the inventory policy must still manage (cap it, and for contraband like
   * smoke remove it), not protected gear -- otherwise a slotted grenade reads as "equipped" and
   * escapes every policy pass. The dedicated get_equipped_grenade(npc) still reports slot 4.
   * @safety SAFE - nil-guarded npc; item_in_slot nil-safe per slot
   * @cost O(1) | 13 luabind trivial (item_in_slot per protected slot)
   * @src xray/xrServerEntities/inventory_space.h(7-43)
   * @returns { [item_id] = true, ... }
   */
  get_equipped_ids(npc: TODO): AnyTable
  /**
   * Get item in NPC's knife slot (slot 1)
   * @safety SAFE - nil-guarded npc; item_in_slot returns nil for empty slot
   * @cost O(1) | 1 luabind trivial (item_in_slot: CInventory::ItemFromSlot)
   * @src xray/xrServerEntities/inventory_space.h(7-43), xray/xrGame/Inventory.cpp ItemFromSlot
   * @returns Knife item or nil
   */
  get_equipped_knife(npc: TODO): TODO | undefined
  /**
   * Get item in NPC's outfit slot (slot 7)
   * @safety SAFE - nil-guarded npc
   * @cost O(1) | 1 luabind trivial (item_in_slot)
   * @src xray/xrServerEntities/inventory_space.h(21)
   * @returns Outfit item or nil
   */
  get_equipped_outfit(npc: TODO): TODO | undefined
  /**
   * Get item in NPC's pistol slot (slot 2)
   * @safety SAFE - nil-guarded npc
   * @cost O(1) | 1 luabind trivial (item_in_slot)
   * @src xray/xrServerEntities/inventory_space.h(11)
   * @returns Pistol item or nil
   */
  get_equipped_pistol(npc: TODO): TODO | undefined
  /**
   * Get item in NPC's rifle slot (slot 3)
   * @safety SAFE - nil-guarded npc
   * @cost O(1) | 1 luabind trivial (item_in_slot)
   * @src xray/xrServerEntities/inventory_space.h(13)
   * @returns Rifle item or nil
   */
  get_equipped_rifle(npc: TODO): TODO | undefined
  /**
   * Translated player-facing name of an item section: resolves `inv_name` through the string table.
   * Falls back to the section id when no inv_name is set or the lookup misses, so the return is
   * always a usable display string.
   * @safety SAFE - nil-guarded sec; returns the section id on any miss
   * @cost O(1) | 1 r_string_ex + 1 translate
   * @see xray/xrServerEntities/script_ini_file.cpp r_string_ex; anomaly inv_name -> game.translate_string convention
   * @param sec Item section name
   * @returns Display name, or the section id on miss
   */
  get_item_name(sec: string): string
  /**
   * Rank-gated appearance chance for a section under a ruleset
   * Generic kernel: resolves the section's category (get_section_category) and cost (get_cost)
   * and the actor's rank tier (ranks.get_obj_rank_name / character_rank), then returns a 0..1
   * chance. Two gates: (1) hard floor â a section or category named in ruleset.floor returns
   * chance 0 while the actor's character_rank is below that tier's interval lower bound; (2) cost
   * band â within the actor's tier row, the first {cost, chance} entry whose cost >= the section
   * cost wins (entries ascending by cost), so cheap sections stay common and expensive ones rare
   * at low rank. Missing floor / tier row / bands all open (chance 1), so an unconfigured ruleset
   * never blocks; a misconfigured floor tier name is ignored (does not block). Caller rolls
   * math_random() <= chance and fail-closes.
   * @safety SAFE - nil-guarded section / actor / ruleset; bad tier name skips the floor
   * @cost O(1) | get_section_category + get_cost + 2 ranks lookups + O(bands) row walk (~3)
   * @src anomaly/ranks.script(56) get_obj_rank_name, (89) get_rank_interval; xray/xrGame/script_game_object_script2.cpp(106) character_rank
   * @see get_section_category (category), get_cost (cost)
   * @param section Item section name
   * @param actor Player object (character_rank + rank tier source)
   * @param ruleset { floor = { [section|category] = tier_name }, bands = { [tier_name] = { {cost,chance}, ... asc }, default = {...} } }
   * @returns Appearance chance in [0, 1]
   */
  get_rank_chance(section: string, actor: TODO, ruleset: AnyTable): number
  /**
   * Get item section name
   * Wraps item:section() to keep mods from calling the engine method directly.
   * @safety SAFE - nil-guarded item
   * @cost O(1) | 1 luabind heavy (section: shared_str alloc across bridge)
   * @src xray/xrGame/script_game_object_script.cpp
   * @param item Inventory item
   * @returns Section name
   */
  get_section(item: TODO): string | undefined
  /**
   * Resolve category from a section name (no item required)
   * Untouchables (quest / anim / blacklisted) gate first. Ammo always returns
   * "ammo_not_equipped"; per-NPC tier resolution lives in get_category. Weapon detected by
   * class prefix "WP_" (no Parse_ITM bucket exists for weapons; vanilla weapon_classes is
   * clsid-only). Hand grenades detected via _grenade_set hand-curated lookup.
   * @safety SAFE - nil-guarded sec
   * @cost O(1) | up to ~14 hash lookups + 1 luabind heavy on cache miss (kind, class via cached _get_kind / _get_class)
   * @see get_category (adds per-NPC opts for equipped + ammo tier)
   * @see is_in_category (predicate wrapper)
   * @param sec Item section name
   * @returns Category name
   */
  get_section_category(sec: string): string
  /**
   * True when a before_move event is the actor taking an item OUT of a dead body: loot mode with the
   * source list being the dead-body bag (a deposit into the corpse reads iActorBag and is false).
   * Every take path (move, move-all, take-all, drag, double-click) funnels through Cond_Move, so a
   * before_move handler that vetoes here with deny_move blocks them all.
   * @safety SAFE - pure enum compare, no luabind
   * @cost O(1) | 0 luabind
   * @src EDDListType.iDeadBodyBag; ui_inventory.script:241-242,908-918,2251 (Cond_Move funnel; npc_bag -> iDeadBodyBag)
   * @param mode actor-menu mode (the callback's 4th arg)
   * @param bag source list type, an EDDListType value (the callback's 5th arg)
   */
  is_corpse_take(mode: string, bag: number): boolean
  /**
   * True if section's category equals the given category name
   * Section-based predicate replacing the per-category is_X family. Routes through
   * get_section_category. Categories needing per-NPC context (equipped, ammo_slot_*) are
   * never returned by get_section_category, so is_in_category(sec, "equipped") is always
   * false â use get_category(item, opts) for those.
   * @safety SAFE - nil-guarded sec and category
   * @cost O(1) | get_section_category cost (~13 hash lookups + cached kind/class on miss)
   * @see get_section_category, get_category
   * @param sec Item section name
   * @param category Category name from the get_section_category result set
   */
  is_in_category(sec: string, category: string): boolean
  /**
   * Iterate an NPC's inventory iff the NPC is online; nil-returns otherwise
   * Engine exposes no Lua API for offline server-inventory walks; this wrapper makes the
   * online-only constraint explicit. Callback signature: function(npc_go, item_go).
   * Returning true from callback stops iteration (engine convention).
   * @safety SAFE - returns nil on nil npc_id / callback / offline NPC
   * @cost O(items) | 2 luabind (level.object_by_id trivial + iterate_inventory) + STL walk
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(256-270)
   * @param npc_id NPC entity ID
   * @param callback item_go) Invoked per item; return true to stop early
   * @returns The npc game_object when iteration ran; nil if offline / invalid
   */
  iterate_inventory(npc_id: number, callback: TODO): TODO | undefined
  /**
   * Walk NPC inventory and surface items above their policy max
   * For each non-untouchable non-equipped item: policy_key resolves the rule key (section if the
   * item's section is named in ctx.rules, else category). If a rule exists AND count > max,
   * mutates ctx.counts in place (counts[key] -= unit) and invokes ctx.on_surplus(item, cat, sec, unit).
   * Returning true from on_surplus stops iteration (engine convention).
   * For unit == 1 (medkit, weapon, grenade, etc.) the walk lands at exactly max.
   * For unit > 1 (ammo, in rounds) releases happen whole-stack; the final count can fall short
   * of max by up to (unit - 1) when the boundary stack overshoots.
   * The caller's on_surplus owns the action: trade transfers + credits, inventory-balance
   * releases. No release happens unless on_surplus does it.
   * @safety SAFE - nil-guarded args; iterate_inventory tolerant of nil items
   * @cost O(items) | per item: policy_key + 1 hash lookup + 0-1 ammo_get_count
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(256-270) iterate_inventory
   * @param npc Online NPC
   * @param opts From get_category_opts(npc)
   * @param ctx { rules = hash from load_policy(...).rules,
   *                    counts = mutable counts from classify(npc, opts, rules),
   *                    on_surplus = function(item, category, section, unit) }
   * @returns Count of surplus items ctx.on_surplus was called on
   */
  iterate_surplus(npc: TODO, opts: AnyTable | undefined, ctx: AnyTable): number
  /**
   * Load an LTX policy file with uniform {min, max}-per-category shape
   * Generic loader for the trade / stash / inventory-balance policy shape. Each named
   * section yields a block { entries, rules, specials }. entries preserves declaration order
   * (= BUY / LOOT priority); rules is the hash for O(1) per-key lookup, where a key is a category
   * name or an item section name; specials carries numeric keys named in specials_set
   * (profit_max, extras_max, ...).
   * @safety SAFE - missing file / section / line yields empty block; malformed lines skipped
   * @cost O(lines) | per line: 1 luabind heavy r_line_ex
   * @src anomaly/axr_trade_manager precedent (per-section buy_sell rows; this generalizes to per-category)
   * @param path LTX path under gamedata/configs (e.g. "alifebalance\\ab_inventory_policy.ltx")
   * @param sections Array of section names to load
   * @param specials_set Hash {key=true} of keys to extract as specials[key]=number
   * @returns { [section] = { entries = ordered_list, rules = hash, specials = hash } }
   */
  load_policy(path: string, sections: AnyTable, specials_set: AnyTable | undefined): AnyTable
  /**
   * Resolve the policy key for a live item under a rules map
   * The item's section when that section is named in rules, otherwise its category. This is the
   * one place "section overrides category" lives, so every policy walk keys items the same way.
   * Returns nil for untouchable / equipped items (consumers skip those). Category and section are
   * also returned (category for _unit and on_surplus; section for on_surplus).
   * @safety SAFE - nil-guarded item
   * @cost O(1) | get_category cost + 1 item:section + 1 hash lookup
   * @src xray/xrGame/script_game_object_script.cpp section()
   * @see get_category (resolves the category), classify / iterate_surplus (callers)
   * @param item Inventory item
   * @param opts From get_category_opts(npc)
   * @param rules From load_policy(...).rules; nil = category key only
   * @returns policy key (section name or category name), nil if untouchable/equipped
   * @returns item category
   * @returns item section
   */
  policy_key(item: TODO, opts: AnyTable | undefined, rules: AnyTable | undefined): LuaMultiReturn<[string | undefined, string | undefined, string | undefined]>
  /**
   * Release an item from the simulation (alife_release_id)
   * Wraps alife_release_id(item:id()). Event-queued, safe mid-iterate.
   * @safety SAFE - nil-guarded item
   * @cost O(1) | 1 luabind (alife_release_id: event queue enqueue)
   * @src anomaly/_g.script alife_release_id, xray/xrGame/alife_simulator_script.cpp
   * @param item Item to release
   * @returns Success
   */
  release_item(item: TODO): boolean
  /**
   * Release an item from the simulation by id (online or offline)
   * The id-based sibling of release_item: works without a game_object, so it releases offline items
   * too (release_item needs a live game_object). Event-queued, safe mid-iterate.
   * @safety SAFE - nil-guarded id
   * @cost O(1) | 1 luabind (alife_release_id: event queue enqueue)
   * @src anomaly/_g.script alife_release_id, xray/xrGame/alife_simulator_script.cpp
   * @param id Item entity id
   * @returns Success
   */
  release_item_id(id: number): boolean
  /**
   * Resolve a per-NPC ammo category from a section + opts (no item required)
   * Used by item-less callers (stash loot scan) that need to ask "does this ammo section match
   * ammo_slot_X_tY for this member's equipped weapons?". Pure section-string-based ammo tier
   * resolution; mirrors the ammo branch in get_category. Returns nil if section isn't ammo.
   * @safety SAFE - nil-guarded sec; opts optional (nil opts -> "ammo_not_equipped")
   * @cost O(1) | 1 IsItem hash lookup + up to 2 cached get_ammo_tier_map lookups
   * @src anomaly/_g.script IsItem + parse_list, xinventory.get_ammo_tier_map
   * @param sec Ammo section name
   * @param opts { equipped_pistol_sec, equipped_rifle_sec }
   * @returns "ammo_slot_2_tN" / "ammo_slot_3_tN" / "ammo_not_equipped" / nil (not ammo)
   */
  resolve_ammo_category(sec: string, opts: AnyTable | undefined): string | undefined
  /**
   * Transfer an item from one NPC to another
   * Wraps from_npc:transfer_item(item, to_npc). Event-queued in engine, safe mid-iterate.
   * @safety SAFE - returns nil on nil args
   * @cost O(1) | 1 luabind (transfer_item: event queue enqueue)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(601)
   * @param from_npc Source owner
   * @param item Item to move
   * @param to_npc Destination owner
   * @returns Success
   */
  transfer_item(from_npc: TODO, item: TODO, to_npc: TODO): boolean
}
