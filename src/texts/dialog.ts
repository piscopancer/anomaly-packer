import { SlashedObject, StrictOmit } from '@/util'
import json2xml from 'json2xml'

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
