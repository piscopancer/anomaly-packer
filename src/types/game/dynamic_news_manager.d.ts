/** @noSelfInFile */

declare namespace dynamic_news_manager {
  export const enable_news: TODO
  export function actor_on_first_update(): void
  export function actor_on_update(): void
  export function destroy_dynamic_news(): void
  export function get_dynamic_news(): DynamicNewsManager
  export function get_story_npc_info(section: TODO): TODO
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
  monster_on_net_spawn(npc: TODO, se_obj: TODO): void
  monster_on_death_callback(victim: TODO, who: TODO): void
  npc_on_death_callback(victim: TODO, who: TODO): void
  npc_on_hear_callback(npc: TODO, who_id: TODO, s_type: TODO, sound_dist: TODO, sound_power: TODO, sound_position: TODO): void
  npc_on_get_all_from_corpse(npc: TODO, corpse_npc: TODO, item: TODO, lootable_table: TODO): void
  PushToChannel(name: TODO, t: TODO, fifo: TODO): boolean
  FindSpeakerNoVictim(who: TODO, same_as_who: TODO, not_in_combat: TODO): CGameObject | null
  FindSpeaker(victim: TODO, who: TODO, same_as_victim: TODO, same_as_who: TODO, not_in_combat: TODO, can_see: TODO): CGameObject | null
  FindSpeakerWithEnemy(victim: TODO, who: TODO, same_as_victim: TODO, same_as_who: TODO, can_see: TODO): CGameObject | null
  FindSpeakerRandom(not_in_combat: TODO, speaker_community: TODO): CGameObject | null
  FindSpeakerAndTarget(not_in_combat: TODO, distance: TODO, speaker_community: TODO): CGameObject | null
  FindSpeakerAnywhere(natural_only: TODO, faction: TODO): CGameObject | null
  IsCommunitySame(npc_1: CGameObject, npc_2: CGameObject): boolean
  PickCompanion(): void
  PickNewCompanion(): boolean
  GetLootValue(item_tbl: TODO): number
  GetLootBestItem(item_tbl: TODO): CGameObject
  NewsToggle(): boolean
  WelcomeToNetwork(): void
  DeathBySurge(victim: TODO, who: TODO, comm: TODO): boolean
  ReportDeathBySurge(): boolean
  DeathByStalker(victim: TODO, who: TODO, comm: TODO): boolean
  ReportDeathByStalker(victim: CGameObject, who: CGameObject): boolean
  DeathByMutant(victim: TODO, who: TODO, comm: TODO): boolean
  ReportDeathByMutant(victim: CGameObject, who: TODO): boolean
  GossipDeathByStalker(sender: CGameObject, victim: TODO, who: TODO): boolean
  SOSDeathByStalker(victim: TODO, who: TODO, comm: TODO): boolean
  SeenDeathOfStalker(sender: CGameObject, victim: TODO, who: TODO, comm: TODO): boolean
  SeenDeathOfMutant(victim: TODO, who: TODO): boolean
  SeenDeathByMutant(sender: CGameObject, victim: TODO, who: TODO, comm: TODO): boolean
  GossipDeathOfMutant(victim: TODO, who: TODO, comm: TODO): boolean
  SOSDeathByMutant(victim: TODO, who: TODO): boolean
  SOSBattleOffline(sq_v: TODO, sq_w: TODO): void
  SOSWarfareCapture(sq: TODO): boolean
  KillWounded(sender: CGameObject, victim: TODO, is_hostage: TODO): boolean
  RadioInHeli(sender: CGameObject, who: TODO): boolean
  FoundArtefact(sender: CGameObject, itm: TODO): boolean
  FoundStash(): boolean
  BoughtItems(sender: CGameObject, who: TODO, list: TODO): boolean
  UpgradedItems(sender: CGameObject, who: TODO, wpn_sec: TODO, list: TODO): boolean
  GossipLoot(sender: CGameObject, best_item: TODO, all_value: TODO): boolean
  ReportNextEmission(): boolean
  ReportByFaction(): boolean
  ReportZoneActivity(): boolean
  SpamRandom(): boolean
  FoundDead(): boolean
  GossipTime(): boolean
  GossipWeather(): boolean
  GossipNearbyActivity(): boolean
  DumbZombie(): boolean
  monster_on_respawn(npc: TODO, near: TODO): void
  GossipBounty(): boolean
  GossipAlphaSquad(): boolean
  GossipTaskRepeatTimeout(task_id: TODO): boolean
  GossipTaskLL(): boolean
  GossipTaskMS(): boolean
  GossipTaskOA(): void
  GossipTaskDRX(): void
  CompanionAboutLife(sender: CGameObject): boolean
  CompanionAboutLevel(sender: CGameObject): boolean
  CompanionAboutActor(sender: CGameObject): boolean
  GossipEmissionEnd(what: TODO): boolean
  ResponseOnFoundArtefact(who: TODO): boolean
  ResponseOnFoundStash(): boolean
  ResponseOnBoughtItems(who: TODO): boolean
  ResponseOnGossipNearbyActivity(who: TODO, activity: TODO): boolean
  ResponseOnDumbZombie(): boolean
  ResponseOnDeathByStalker(who: TODO): boolean
  ResponseOnDeathByMutant(who: TODO): boolean
  ResponseOnDeathBySurges(who: TODO): boolean
  ResponseOnDeathByStalker_Fake(): boolean
  ResponseOnDeathByMutant_Fake(): boolean
  ResponseOnDeathBySurges_Fake(): boolean
  BuildSentenceStalkerEnemy(victim: CGameObject, who: CGameObject, mn: TODO, mx: TODO): boolean
  BuildSentenceStalkerEnemy_Offline(comm_w: TODO): boolean
  IsSpecialNPC(npc: TODO): boolean
  IsMonoCommunity(npc: TODO): boolean
  IsUnknownCommunity(npc: TODO): boolean
}
