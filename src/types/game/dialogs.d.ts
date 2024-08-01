/** @noSelfInFile */

declare namespace dialogs {
  export function break_dialog(speaker_1: CGameObject, speaker_2: CGameObject): void
  export function relocate_money_from_actor(speaker_1: CGameObject, speaker_2: CGameObject, sum: number): void
  /**
   * Give actor money or transfer actor's money to an NPC.
   * @param type If `in` money will be given to the actor, `npc` makes no difference. If `out` money will take from the actor and given to the `npc`
   */
  export function relocate_money(npc: CGameObject | null, sum: number, type: 'in' | 'out'): void
  /**
   * @param speaker_1 unused
   * @param speaker_2 unused
   */
  export function relocate_money_to_actor(speaker_1: null, speaker_2: null, sum: number): void
}
