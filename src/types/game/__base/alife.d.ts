interface CseAbstract {
  readonly id: number
  readonly parent_id: number
  readonly script_version: number
  position: vector
  angle: vector
  section_name(): string
  name(): string
  clsid(): number
  spawn_ini(): system_ini
  /** @param size byte size of the state block to read */
  STATE_Read(packet: net_packet, size: number): void
  STATE_Write(packet: net_packet): void
  UPDATE_Read(packet: net_packet): void
  UPDATE_Write(packet: net_packet): void
}
interface CseAlifeObject extends CseAbstract {
  readonly online: boolean
  move_offline(): boolean
  move_offline(value: boolean): void
  visible_for_map(): boolean
  visible_for_map(value: boolean): void
  can_switch_online(value: boolean): void
  can_switch_offline(value: boolean): void
  use_ai_locations(value: boolean): void
  readonly m_level_vertex_id: number
  readonly m_game_vertex_id: number
  readonly m_story_id: number
}
interface CseAlifeDynamicObject extends CseAlifeObject {}
interface CseVisual {}
interface CseAlifeDynamicObjectVisual extends CseAlifeDynamicObject, CseVisual {}
interface CsePhSkeleton {}
interface CseAlifeInventoryItem {
  has_upgrade(upgrade: string): boolean
  add_upgrade(upgrade: string): void
}
interface CseAlifeItem extends CseAlifeDynamicObjectVisual, CseAlifeInventoryItem {}
interface CseAlifeItemWeapon extends CseAlifeItem {
  clone_addons(): void
  set_ammo_elapsed(ammo: number): void
  get_ammo_elapsed(): number
  get_ammo_magsize(): number
}
interface CseAlifeCreatureAbstract extends CseAlifeDynamicObjectVisual {
  health(): number
  alive(): boolean
  team: string
  squad: string
  group: string
  /** Torso orientation (`SRotation`, luabind class `rotation`). */
  o_torso(): rotation
}
interface CseAlifeTraderAbstract {
  community(): string
  profile_name(): string
  set_profile_name(name: string): void
  character_name(): string
  /** The raw (untranslated) character name string. */
  character_name_str(): string
  /** Sets the raw character name and re-translates the displayed name. */
  set_character_name(name: string): void
  rank(): number
  set_rank(rank: number): void
  reputation(): number
  character_icon(): string
}
interface CseAlifeTrader extends CseAlifeDynamicObjectVisual, CseAlifeTraderAbstract {}
interface CseAlifeCreatureActor extends CseAlifeCreatureAbstract, CseAlifeTraderAbstract, CsePhSkeleton {}
interface CseAlifeSchedulable {}
/** A single squad member entry (`MEMBERS::value_type`, luabind class `MEMBERS__value_type`). */
interface MEMBERS__value_type {
  readonly id: number
  /** The member object (native `MEMBER*`, not further modelled). */
  readonly object: any
}
interface CseAlifeOnlineOfflineGroup extends CseAlifeDynamicObject, CseAlifeSchedulable {
  register_member(id: number): void
  unregister_member(id: number): void
  commander_id(): number
  /** Stateful iterator over the squad's member entries (`return_stl_iterator`). */
  squad_members(): LuaIterable<MEMBERS__value_type>
  npc_count(): number
  add_location_type(mask: string): void
  clear_location_types(): void
  force_change_position(pos: vector): void
}

/**
 * Yaw/pitch orientation (`SRotation`, luabind class `rotation`), returned by
 * {@link CseAlifeCreatureAbstract.o_torso}.
 */
declare class rotation {
  yaw: number
  pitch: number
}

/**
 * ALife smart terrain task (`CALifeSmartTerrainTask`), a destination expressed as
 * a game/level vertex or a patrol path point. Returned by
 * {@link CseAbstract} alife-task getters and constructed directly by scripts.
 */
/** @customConstructor CALifeSmartTerrainTask */
declare class CALifeSmartTerrainTask {
  constructor(patrol_path_name: string, patrol_point_index?: number)
  constructor(game_vertex_id: number, level_vertex_id: number)
  game_vertex_id(): number
  level_vertex_id(): number
  position(): vector
}
