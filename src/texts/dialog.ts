import { buildXml, element, field, XmlNode } from './_xml'

type DialogPhraseShared = {
  /**
   * Ids of functions returning a boolean. If `true`, this dialog or phrase will be available
   * @example
   * ```ts
   * ['dialogs_jupiter.ecolog_companion_task_2_not_complete']
   * ```
   * Function is declared in *gamedata/scripts/dialogs_jupiter.script*
   * ```lua
   * function ecolog_companion_task_2_not_complete(speaker_1, speaker_2)
   *   return not ecolog_companion_task_2_complete(speaker_1, speaker_2)
   * end
   * ```
   */
  precondition?: string | string[]
  /** Only enable the dialog or the phrase if the actor does not have these info portions */
  dont_has_info?: string | string[]
  /** Only enable the dialog or the phrase if the actor has these info portions */
  has_info?: string | string[]
  /** Disable info portions for the actor after this dialog has started or this phrase has been produced */
  disable_info?: string | string[]
  /**
   * Info portions ids to give to the actor after this dialog has started or this phrase has been produced
   * @example ['bar_arena_fight_5', 'bar_arena_fight']
   */
  give_info?: string | string[]
  /**
   * Lua functions that will be fired upon entering the dialog or producing a phrase
   * @example 'dialog_manager.action_disable_phrase'
   */
  action?: string | string[]
}

type Phrase<PhraseId extends number = number> = DialogPhraseShared & {
  /** An arbitraty ID to which other phrases within this dialog tree will refer to in `next` */
  id: PhraseId
  /**
   * ID of the translation string that will be used as text for this phrase. If the translation was not found for a specific language, the fallback text will apear instead. Cannot be used with `script_text`
   * @example 'bar_arena_manager_start_21'
   */
  text?: string
  /**
   * ID of a scripted text. Cannot be used with `text`
   * @example 'dialogs_mlr.buy_extra_med_4'
   */
  script_text?: string
  /**
   * Array of phrases' ids of this dialog that will appear after this phrase. Not inluding this field at all will result into the initial dialog to appear after this phrase
   * @example
   * ```ts
   * // phrase 1
   * { next: [1112] }
   * // phrase 2
   * { id: 1112 },
   * ```
   */
  next?: NoInfer<PhraseId> | NoInfer<PhraseId>[]
  /**
   * True purpose is unknown. Commonly used in combination with `dialogs.break_dialog` action
   * @example a phrase from the game files
   * ```xml
   * <action>dialogs.break_dialog</action>
   * <is_final>1</is_final>
   * ```
   */
  is_final?: 0 | 1
}

export type Dialog<PhraseId extends number = number> = DialogPhraseShared & {
  id: string
  /**
   * ID of a scripted dialog. Cannot be used with `phrases`
   * @example 'dialog_manager.dm_agr_u_bandit_boss_ask'
   */
  init_func?: string
  phrases?: Phrase<PhraseId>[]
}

export function dialog<PhraseId extends number>(dialog: Dialog<PhraseId>): string {
  const children: XmlNode[] = [
    ...field('precondition' satisfies keyof Dialog, dialog.precondition),
    ...field('has_info' satisfies keyof Dialog, dialog.has_info),
    ...field('dont_has_info' satisfies keyof Dialog, dialog.dont_has_info),
    ...field('give_info' satisfies keyof Dialog, dialog.give_info),
    ...field('disable_info' satisfies keyof Dialog, dialog.disable_info),
    ...field('init_func' satisfies keyof Dialog, dialog.init_func),
    ...field('action' satisfies keyof Dialog, dialog.action),
  ]
  if (dialog.phrases) {
    children.push(
      element(
        'phrase_list',
        undefined,
        dialog.phrases.map((phr) =>
          element('phrase', { id: phr.id }, [
            ...field('precondition' satisfies keyof Phrase, phr.precondition),
            ...field('has_info' satisfies keyof Phrase, phr.has_info),
            ...field('dont_has_info' satisfies keyof Phrase, phr.dont_has_info),
            ...field('text' satisfies keyof Phrase, phr.text),
            ...field('script_text' satisfies keyof Phrase, phr.script_text),
            ...field('give_info' satisfies keyof Phrase, phr.give_info),
            ...field('disable_info' satisfies keyof Phrase, phr.disable_info),
            ...field('action' satisfies keyof Phrase, phr.action),
            ...field('is_final' satisfies keyof Phrase, phr.is_final),
            ...field('next' satisfies keyof Phrase, phr.next),
          ])
        )
      )
    )
  }
  return buildXml([element('dialog', { id: dialog.id }, children)])
}
