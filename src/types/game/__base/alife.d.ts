declare type CseAbstract = {
  readonly id: number
  readonly parent_id: number
  readonly script_version: number
  position: vector
  angle: vector
  section_name(): string
  name(): string
  clsid(): number
  spawn_ini(): TODO
  STATE_Read(): TODO
  STATE_Write(): TODO
  UPDATE_Read(): TODO
  UPDATE_Write(): TODO
}

declare type CseAlifeObject = CseAbstract & {
  readonly online: boolean
  move_offline(): boolean
  move_offline(value: boolean): void
  visible_for_map(): boolean
  visible_for_map(value: boolean): void
  can_switch_online(value: boolean): void
  can_switch_offline(value: boolean): void
  use_ai_locations(value: boolean): void
  readonly m_level_vertex_id: number
  readonly m_level_game_id: number
  readonly m_story_id: number
}
declare type CseAlifeDynamicObject = CseAlifeObject & {}
declare type CseVisual = {}
declare type CseAlifeDynamicObjectVisual = CseAlifeDynamicObject & CseVisual
declare type CsePhSkeleton = {}
declare type CseAlifeCreatureAbstract = CseAlifeDynamicObjectVisual & {
  health(): number
  alive(): boolean
  team: string
  squad: string
  group: string
  o_torso(): TODO
}
declare type CseAlifeTraderAbstract = {
  community(): string
  profile_name(): string
  set_profile_name(name: string): void
  character_name(): string
  rank(): number
  set_rank(rank: number): void
  reputation(): number
  character_icon(): string
}
declare type CseAlifeCreatureActor = CseAlifeCreatureAbstract & CseAlifeTraderAbstract & CsePhSkeleton & {}
declare type CseAlifeSchedulable = {}
declare type CseAlifeOnlineOfflineGroup = CseAlifeDynamicObject &
  CseAlifeSchedulable & {
    register_member(id: number): void
    unregister_member(id: number): void
    commander_id(): number
    squad_members(): TODO
    npc_count(): number
    add_location_type(mask: string): void
    clear_location_types(): void
    force_change_position(pos: vector): void
  }
