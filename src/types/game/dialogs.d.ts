/** @noSelfInFile */

declare namespace dialogs {
  type RelocationType = 'in' | 'out'
  export function break_dialog(speaker_1: CGameObject, speaker_2: CGameObject): void
  /**
   * Give actor money or transfer actor's money to an NPC.
   * @param type If `in` money will be given to the actor, `npc` makes no difference. If `out` money will take from the actor and given to the `npc`
   */
  export function relocate_money(npc: CGameObject | null, sum: number, type: RelocationType): void
  /**
   * @param speaker_1 unused
   * @param speaker_2 unused
   */
  export function relocate_money_to_actor(speaker_1: null, speaker_2: null, sum: number): void
  export function relocate_money_from_actor(speaker_1: CGameObject, speaker_2: CGameObject, sum: number): void
  /**
   * @param npc if specified, will receive items in their invetory, otherwise items will be simply removed
   * @param type `in` to actor, `out` from actor
   */
  export function relocate_item_section(npc: CGameObject | null, section: string, type: RelocationType, amount?: number): void
  export function relocate_item_section_to_actor(speaker_1: CGameObject, speaker_2: CGameObject, section: string, amount?: number): void
  export function relocate_item_section_from_actor(speaker_1: CGameObject, speaker_2: CGameObject, section: string, amount?: number): void
}
