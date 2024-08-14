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
  STATE_Read(): TODO
  STATE_Write(): TODO
  UPDATE_Read(): TODO
  UPDATE_Write(): TODO
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
  o_torso(): TODO
}
interface CseAlifeTraderAbstract {
  community(): string
  profile_name(): string
  set_profile_name(name: string): void
  character_name(): string
  rank(): number
  set_rank(rank: number): void
  reputation(): number
  character_icon(): string
}
interface CseAlifeTrader extends CseAlifeDynamicObjectVisual, CseAlifeTraderAbstract {}
interface CseAlifeCreatureActor extends CseAlifeCreatureAbstract, CseAlifeTraderAbstract, CsePhSkeleton {}
interface CseAlifeSchedulable {}
interface CseAlifeOnlineOfflineGroup extends CseAlifeDynamicObject, CseAlifeSchedulable {
  current_action: number
  stay_time: number
  group_id: number
  register_member(id: number): void
  unregister_member(id: number): void
  commander_id(): number
  squad_members(): TODO
  npc_count(): number
  add_location_interface(mask: string): void
  clear_location_interfaces(): void
  force_change_position(pos: vector): void
  create_npc(smart: CseAbstract): void
  create_npc(_0: TODO, pos: vector, _1: TODO, _2: TODO): void
  remove_squad(): void
  assign_smart(smart: CseAbstract, old_smart_id: number): void
  get_script_target(): TODO | null
}
