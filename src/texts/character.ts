export type SpecificCharacter = {
  /** @example 'cit_killers_merc_trader_stalker' */
  id: string
  team_default: boolean
  /** @example 'cit_killers_merc_trader_stalker_name' */
  name: string
  /** @example 'ui_inGame2_merc_trade' */
  icon: string
  map_icon: { x: number; y: number }
  /** @example 'stalker_terrain' */
  terrain_sect?: string
  /** @example 'esc_wolf_bio' */
  bio?: string
  /** @example 'cit_killers_merc_trader_stalker' */
  class: string
  // community: Faction | 'trader'
  community: string
  /** @example 'characters_voice\\human\\killer_3\\' */
  snd_config: string
  /** @example 15000 */
  rank: number
  money: {
    min: number
    max: number
    infinitive: boolean
  }
  /** @example -1000 */
  reputation: number
  /** @example 'actors\\stalker_merc\\stalker_ki_head_2' */
  visual: string
  /** Character's inventory */
  supplies: {
    items: Record<string, string | number | boolean>
    /** Paths to other XML files */
    include?: string[]
  }
  dialogs: string[]
  crouch_type?: number
  panic_treshold?: number
  /**
   * Paths to other XML files
   *
   * @example ['gameplay\\character_criticals.xml', 'gameplay\\character_dialogs.xml']
   */
  include?: string[]
}

export function specificCharacter(character: SpecificCharacter): string {
  // type JsonCharacterStructure = {
  //   attrs: { id: string }
  //   dialog: {
  //     phrase_list: {
  //       phrase: ({ next: number } | SlashedObject<StrictOmit<Dialog<number>['phrases'][number], 'id' | 'next'>>)[]
  //     }[]
  //   }
  // }

  // function characterToJson(ch: SpecificCharacter): JsonCharacterStructure {
  //   return {
  //     attrs: {
  //       id: ch.id,
  //     },
  //   }
  // }

  // const dialogAsJson = characterToJson(character)
  // const xml = json2xml(dialogAsJson, { attributes_key: 'attrs' })
  // return xml
  return '...'
}
