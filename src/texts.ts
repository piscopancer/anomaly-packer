import json2xml from 'json2xml'
import { objectEntries, SlashedObject, StrictOmit } from './util'

export type Ltx = {}

export function ltx(ltx: Ltx): string {
  return '...'
}

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

export type Dialog<PhraseId extends number> = {
  id: string
  phrases: {
    id: PhraseId
    text: string
    /**
     * Array of phrases' ids of this dialog that will appear after this phrase.
     * @example
     * ```ts
     * // phrase 1
     * { next: [1112] }
     * // phrase 2
     * { id: 1112 },
     * ```
     */
    next?: NoInfer<PhraseId>[]
    dont_has_info?: string
    has_info?: string
    /**
     * Id of a function returning a boolean. If returns true, phrase will be shown.
     * @example
     * ```ts
     * { precondition: 'dialogs_jupiter.ecolog_companion_task_2_not_complete' }
     * ```
     * Function is declared in *gamedata/scripts/dialogs_jupiter.script*
     * ```lua
     * function ecolog_companion_task_2_not_complete(a,b)
     *   return not ecolog_companion_task_2_complete(a,b)
     * end
     * ```
     */
    precondition?: string
    /** Info portion id to give actor */
    give_info?: string
    action?: string
  }[]
}

export function dialog<PhraseId extends number>(dialog: Dialog<PhraseId>): string {
  type JsonDialogStructure = {
    attrs: { id: string }
    dialog: {
      phrase_list: {
        phrase: ({ next: number } | SlashedObject<StrictOmit<Dialog<number>['phrases'][number], 'id' | 'next'>>)[]
      }[]
    }
  }

  function dialogToJson(dialog: Dialog<number>): JsonDialogStructure {
    return {
      attrs: {
        id: dialog.id,
      },
      dialog: {
        phrase_list: dialog.phrases.map((phr) => {
          return {
            attrs: {
              id: phr.id,
            },
            phrase: [
              //
              { text: phr.text },
              phr.precondition ? { precondition: phr.precondition } : {},
              phr.dont_has_info ? { dont_has_info: phr.dont_has_info } : {},
              phr.has_info ? { has_info: phr.has_info } : {},
              phr.give_info ? { give_info: phr.give_info } : {},
              phr.action ? { action: phr.action } : {},
              ...(phr.next ? phr.next.map((next) => ({ next: next })) : []),
            ],
          }
        }),
      },
    }
  }

  const dialogAsJson = dialogToJson(dialog)
  const xml = json2xml(dialogAsJson, { attributes_key: 'attrs' })
  return xml
}

type JsonTranslationStructure = { string_table: { string: { text: string }; attrs: { id: string } }[] }

export function translations<Id extends string>(translation: Partial<Record<Id, string>>, idOverride?: (id: string) => string): string {
  const json: JsonTranslationStructure = {
    string_table: objectEntries(translation).map(([id, text]) => {
      id = idOverride ? (idOverride(id) as Id) : id
      return {
        string: { text: text ?? '' },
        attrs: { id },
      }
    }),
  } satisfies JsonTranslationStructure

  const xml = json2xml(json, { attributes_key: 'attrs' })
  return xml
}
