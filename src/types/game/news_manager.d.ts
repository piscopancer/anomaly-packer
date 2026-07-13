/** @noSelfInFile */

declare namespace news_manager {
  export interface TipsIcons
    extends Record<
      | 'bookworm_food'
      | 'completionist'
      | 'down_to_earth'
      | 'duga_free'
      | 'geologist'
      | 'heavy_pockets'
      | 'infopreneur'
      | 'mechanized_warfare'
      | 'patriarch'
      | 'radiotherapy'
      | 'rag_and_bone'
      | 'silver_or_lead'
      | 'tourist'
      | 'well_dressed'
      | 'wishful_thinking'
      | 'infantile_pleasure'
      | 'recycler'
      | 'artificer_eagerness'
      | 'unforeseen_guest'
      | 'absolver'
      | 'collaborator'
      | 'iron_curtain'
      | 'murky_spirit'
      | 'invictus'
      | 'got_artefact'
      | 'got_ammo'
      | 'got_medicine'
      | 'got_duty_light_armor'
      | 'got_duty_heavy_armor'
      | 'got_freedom_light_armor'
      | 'got_freedom_heavy_armor'
      | 'can_resupply'
      | 'guide_unlock'
      | 'rank_change'
      | 'rep_change'
      | 'recent_surge'
      | 'saharov'
      | 'ecolog'
      | 'trader'
      | 'army'
      | 'barman'
      | 'wolf'
      | 'meeker'
      | 'griffith'
      | 'army'
      | 'bandit'
      | 'csky'
      | 'dolg'
      | 'ecolog'
      | 'freedom'
      | 'killer'
      | 'stalker'
      | 'monolith'
      | 'greh'
      | 'renegade'
      | 'isg'
      | 'common'
      | 'communication'
      | 'death'
      | 'deth'
      | 'all'
      | 'signal'
      | 'surge'
      | 'disassemble'
      | 'swiss_knife'
      | 'leatherman_tool',
      never
    > {}
  export type TipIcon = keyof TipsIcons

  /**
   * @param text_id text id to translate
   * @param sender if given an NPC gameobject, character icon will be used as texture, if
   */
  export function send_tip(
    actor: CGameObject,
    text_id: string,
    timeout?: number | null,
    sender?: CGameObject | TipIcon,
    showtime?: number,
    sender_id?: number
  ): boolean
  /**
   * Give or remove money from actor depending on `type`
   * @param actor unused
   */
  export function relocate_money(actor: null, type: 'in' | 'out', sum: number): void
  // --- auto-added by audit-coverage (missing from hand-refined types; refine by hand) ---
  export const tips_icons: AnyTable
  export function on_game_start(): void
  export function send_sound(npc: CGameObject, faction: Community, point: AnyTable, str: string, str2: string, delay_sound: boolean): void
  export function is_npc_stalker(class_id: number): boolean
  export function send_task(actor: CGameObject, type: string, tsk: AnyTable): boolean
  export function send_treasure(param: AnyTable): void
  export function relocate_item(actor: CGameObject, type: string, item: CGameObject, amount: number): void
}
