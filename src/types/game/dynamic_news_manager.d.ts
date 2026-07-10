// @generated skeleton — auto-produced from Lua scripts, refine by hand

/** @noSelfInFile */

declare namespace dynamic_news_manager {
  export const enable_news: TODO
  export function actor_on_first_update(): TODO
  export function actor_on_update(): TODO
  export function destroy_dynamic_news(): TODO
  export function get_dynamic_news(): TODO
  export function get_story_npc_info(section: TODO): TODO
  export function on_game_start(): TODO
  export function update_settings(): TODO
}

/** @customConstructor DynamicNewsManager */
declare class DynamicNewsManager {
  constructor()
  destroy(): TODO
  TickNews(): TODO
  TickQuick(): TODO
  TickSpecial(): TODO
  TickTask(): TODO
  TickRandom(): TODO
  TickCompanion(): TODO
  monster_on_net_spawn(npc: TODO, se_obj: TODO): TODO
  monster_on_death_callback(victim: TODO, who: TODO): TODO
  npc_on_death_callback(victim: TODO, who: TODO): TODO
  npc_on_hear_callback(npc: TODO, who_id: TODO, s_type: TODO, sound_dist: TODO, sound_power: TODO, sound_position: TODO): TODO
  npc_on_get_all_from_corpse(npc: TODO, corpse_npc: TODO, item: TODO, lootable_table: TODO): TODO
  PushToChannel(name: TODO, t: TODO, fifo: TODO, t_: TODO, sender: TODO, news: TODO, name_: TODO, icon: TODO, Type: TODO, Id: TODO, fifo_: TODO): TODO
  FindSpeakerNoVictim(who: TODO, same_as_who: TODO, not_in_combat: TODO, speaker: TODO, speaker_: TODO): TODO
  FindSpeaker(victim: TODO, who: TODO, same_as_victim: TODO, same_as_who: TODO, not_in_combat: TODO, can_see: TODO, speaker: TODO, speaker_: TODO, speaker__: TODO, speaker___: TODO): TODO
  FindSpeakerWithEnemy(victim: TODO, who: TODO, same_as_victim: TODO, same_as_who: TODO, can_see: TODO, speaker: TODO, speaker_: TODO, speaker__: TODO): TODO
  FindSpeakerRandom(not_in_combat: TODO, speaker_community: TODO, speaker: TODO, speaker_: TODO): TODO
  FindSpeakerAndTarget(not_in_combat: TODO, distance: TODO, speaker_community: TODO, speaker: TODO, speaker_: TODO): TODO
  FindSpeakerAnywhere(natural_only: TODO, faction: TODO, speaker: TODO, speaker_: TODO): TODO
  IsCommunitySame(npc_1: TODO, npc_2: TODO): TODO
  PickCompanion(): TODO
  PickNewCompanion(): TODO
  GetLootValue(item_tbl: TODO): TODO
  GetLootBestItem(item_tbl: TODO): TODO
  NewsToggle(): TODO
  WelcomeToNetwork(): TODO
  DeathBySurge(victim: TODO, who: TODO, comm: TODO): TODO
  ReportDeathBySurge(arg0: TODO): TODO
  DeathByStalker(victim: TODO, who: TODO, comm: TODO): TODO
  ReportDeathByStalker(victim: TODO, who: TODO): TODO
  DeathByMutant(victim: TODO, who: TODO, comm: TODO): TODO
  ReportDeathByMutant(victim: TODO, who: TODO): TODO
  GossipDeathByStalker(sender: TODO, victim: TODO, who: TODO): TODO
  SOSDeathByStalker(victim: TODO, who: TODO, comm: TODO): TODO
  SeenDeathOfStalker(sender: TODO, victim: TODO, who: TODO, comm: TODO): TODO
  SeenDeathOfMutant(victim: TODO, who: TODO): TODO
  SeenDeathByMutant(sender: TODO, victim: TODO, who: TODO, comm: TODO): TODO
  GossipDeathOfMutant(victim: TODO, who: TODO, comm: TODO): TODO
  SOSDeathByMutant(victim: TODO, who: TODO): TODO
  SOSBattleOffline(sq_v: TODO, sq_w: TODO): TODO
  SOSWarfareCapture(sq: TODO): TODO
  KillWounded(sender: TODO, victim: TODO, is_hostage: TODO): TODO
  RadioInHeli(sender: TODO, who: TODO): TODO
  FoundArtefact(sender: TODO, itm: TODO): TODO
  FoundStash(): TODO
  BoughtItems(sender: TODO, who: TODO, list: TODO): TODO
  UpgradedItems(sender: TODO, who: TODO, wpn_sec: TODO, list: TODO): TODO
  GossipLoot(sender: TODO, best_item: TODO, all_value: TODO): TODO
  ReportNextEmission(): TODO
  ReportByFaction(): TODO
  ReportZoneActivity(): TODO
  SpamRandom(): TODO
  FoundDead(): TODO
  GossipTime(): TODO
  GossipWeather(): TODO
  GossipNearbyActivity(): TODO
  DumbZombie(): TODO
  monster_on_respawn(npc: TODO, near: TODO): TODO
  GossipBounty(): TODO
  GossipAlphaSquad(): TODO
  GossipTaskRepeatTimeout(task_id: TODO): TODO
  GossipTaskLL(): TODO
  GossipTaskMS(): TODO
  GossipTaskOA(): TODO
  GossipTaskDRX(): TODO
  CompanionAboutLife(sender: TODO): TODO
  CompanionAboutLevel(sender: TODO): TODO
  CompanionAboutActor(sender: TODO): TODO
  GossipEmissionEnd(what: TODO): TODO
  ResponseOnFoundArtefact(who: TODO): TODO
  ResponseOnFoundStash(): TODO
  ResponseOnBoughtItems(who: TODO): TODO
  ResponseOnGossipNearbyActivity(who: TODO, activity: TODO): TODO
  ResponseOnDumbZombie(): TODO
  ResponseOnDeathByStalker(who: TODO): TODO
  ResponseOnDeathByMutant(who: TODO): TODO
  ResponseOnDeathBySurges(who: TODO): TODO
  ResponseOnDeathByStalker_Fake(arg0: TODO): TODO
  ResponseOnDeathByMutant_Fake(arg0: TODO): TODO
  ResponseOnDeathBySurges_Fake(arg0: TODO): TODO
  BuildSentenceStalkerEnemy(victim: TODO, who: TODO, mn: TODO, mx: TODO): TODO
  BuildSentenceStalkerEnemy_Offline(comm_w: TODO): TODO
  IsSpecialNPC(npc: TODO): TODO
  IsMonoCommunity(npc: TODO): TODO
  IsUnknownCommunity(npc: TODO): TODO
}
