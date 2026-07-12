/** @noSelfInFile */

declare namespace ka_dialog {
  export function add_dialog(p_id: string | number, id: string | number, phrase_id: string, cond?: string | string[], act?: string | string[]): CPhraseScript | undefined
  export function add_script_dialog(p_id: string | number, id: string | number, phrase_id: string, cond?: string | string[], act?: string | string[]): void
  export function set_saved_dialog(dialog: CPhraseDialog): void
}
