/** @noSelfInFile */

declare namespace dynamic_news_manager {
  export const enable_news: boolean
  export function actor_on_first_update(): void
  export function actor_on_update(): void
  export function destroy_dynamic_news(): void
  export function get_dynamic_news(): DynamicNewsManager
  export function get_story_npc_info(section: Section): { name: string; icon: string } | undefined
  export function on_game_start(): void
  export function update_settings(): void
}

/** @customConstructor DynamicNewsManager */
declare class DynamicNewsManager {
  constructor()
  destroy(): void
  TickNews(): boolean
  TickQuick(): boolean
  TickSpecial(): boolean
  TickTask(): boolean
  TickRandom(): boolean
  TickCompanion(): boolean
  monster_on_net_spawn(npc: CGameObject, se_obj: CseAlifeObject): void
  monster_on_death_callback(victim: CGameObject, who: CGameObject): void
  npc_on_death_callback(victim: CGameObject, who: CGameObject): void
  npc_on_hear_callback(npc: CGameObject, who_id: number, s_type: number, sound_dist: number, sound_power: number, sound_position: vector): void
  npc_on_get_all_from_corpse(npc: CGameObject, corpse_npc: CGameObject, item: CGameObject, lootable_table: AnyTable): void
  PushToChannel(name: string, t: AnyTable, fifo: boolean): boolean
  FindSpeakerNoVictim(who: CGameObject, same_as_who: boolean, not_in_combat: boolean): CGameObject | null
  FindSpeaker(victim: CGameObject, who: CGameObject, same_as_victim: boolean, same_as_who: boolean, not_in_combat: boolean, can_see: boolean): CGameObject | null
  FindSpeakerWithEnemy(victim: CGameObject, who: CGameObject, same_as_victim: boolean, same_as_who: boolean, can_see: boolean): CGameObject | null
  FindSpeakerRandom(not_in_combat: boolean, speaker_community: Community): CGameObject | null
  FindSpeakerAndTarget(not_in_combat: boolean, distance: number, speaker_community: Community): CGameObject | null
  FindSpeakerAnywhere(natural_only: boolean, faction: Community): CGameObject | null
  IsCommunitySame(npc_1: CGameObject, npc_2: CGameObject): boolean
  PickCompanion(): void
  PickNewCompanion(): boolean
  GetLootValue(item_tbl: CGameObject[]): number
  GetLootBestItem(item_tbl: CGameObject[]): CGameObject
  NewsToggle(): boolean
  WelcomeToNetwork(): void
  DeathBySurge(victim: CGameObject, who: CGameObject, comm: Community): boolean
  ReportDeathBySurge(): boolean
  DeathByStalker(victim: CGameObject, who: CGameObject, comm: Community): boolean
  ReportDeathByStalker(victim: CGameObject, who: CGameObject): boolean
  DeathByMutant(victim: CGameObject, who: CGameObject, comm: Community): boolean
  ReportDeathByMutant(victim: CGameObject, who: CGameObject): boolean
  GossipDeathByStalker(sender: CGameObject, victim: CGameObject, who: CGameObject): boolean
  SOSDeathByStalker(victim: CGameObject, who: CGameObject, comm: Community): boolean
  SeenDeathOfStalker(sender: CGameObject, victim: CGameObject, who: CGameObject, comm: Community): boolean
  SeenDeathOfMutant(victim: CGameObject, who: CGameObject): boolean
  SeenDeathByMutant(sender: CGameObject, victim: CGameObject, who: CGameObject, comm: Community): boolean
  GossipDeathOfMutant(victim: CGameObject, who: CGameObject, comm: Community): boolean
  SOSDeathByMutant(victim: CGameObject, who: CGameObject): boolean
  SOSBattleOffline(sq_v: cse_alife_online_offline_group, sq_w: cse_alife_online_offline_group): void
  SOSWarfareCapture(sq: cse_alife_online_offline_group): boolean
  KillWounded(sender: CGameObject, victim: CGameObject, is_hostage: boolean): boolean
  RadioInHeli(sender: CGameObject, who: CGameObject): boolean
  FoundArtefact(sender: CGameObject, itm: CGameObject): boolean
  FoundStash(): boolean
  BoughtItems(sender: CGameObject, who: CGameObject, list: AnyTable): boolean
  UpgradedItems(sender: CGameObject, who: CGameObject, wpn_sec: string, list: AnyTable): boolean
  GossipLoot(sender: CGameObject, best_item: CGameObject, all_value: number): boolean
  ReportNextEmission(): boolean
  ReportByFaction(): boolean
  ReportZoneActivity(): boolean
  SpamRandom(): boolean
  FoundDead(): boolean
  GossipTime(): boolean
  GossipWeather(): boolean
  GossipNearbyActivity(): boolean
  DumbZombie(): boolean
  monster_on_respawn(npc: CGameObject, near: boolean): void
  GossipBounty(): boolean
  GossipAlphaSquad(): boolean
  GossipTaskRepeatTimeout(task_id: string): boolean
  GossipTaskLL(): boolean
  GossipTaskMS(): boolean
  GossipTaskOA(): void
  GossipTaskDRX(): void
  CompanionAboutLife(sender: CGameObject): boolean
  CompanionAboutLevel(sender: CGameObject): boolean
  CompanionAboutActor(sender: CGameObject): boolean
  GossipEmissionEnd(what: string): boolean
  ResponseOnFoundArtefact(who: CGameObject): boolean
  ResponseOnFoundStash(): boolean
  ResponseOnBoughtItems(who: CGameObject): boolean
  ResponseOnGossipNearbyActivity(who: CGameObject, activity: string): boolean
  ResponseOnDumbZombie(): boolean
  ResponseOnDeathByStalker(who: CGameObject): boolean
  ResponseOnDeathByMutant(who: CGameObject): boolean
  ResponseOnDeathBySurges(who: CGameObject): boolean
  ResponseOnDeathByStalker_Fake(): boolean
  ResponseOnDeathByMutant_Fake(): boolean
  ResponseOnDeathBySurges_Fake(): boolean
  BuildSentenceStalkerEnemy(victim: CGameObject, who: CGameObject, mn: number, mx: number): boolean
  BuildSentenceStalkerEnemy_Offline(comm_w: string): boolean
  IsSpecialNPC(npc: CGameObject): boolean
  IsMonoCommunity(npc: CGameObject): boolean
  IsUnknownCommunity(npc: CGameObject): boolean
}
