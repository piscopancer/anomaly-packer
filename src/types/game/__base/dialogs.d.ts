// Engine phrase-dialog classes, registered in luabind by CPhraseDialogExporter
// (see xrGame/PhraseDialog_script.cpp).

/** A single dialog phrase node. */
declare class CPhrase {
  GetPhraseScript(): CPhraseScript
}

/** A phrase dialog; passed to the `dm_*`/`init_*` dialog builders in the Lua layer. */
declare class CPhraseDialog {
  AddPhrase(text: string, phrase_id: string, prev_phrase_id: string, goodwil_level: number): CPhrase
}

/** Precondition/action script container attached to a phrase. */
declare class CPhraseScript {
  AddPrecondition(str: string): void
  AddAction(str: string): void
  AddHasInfo(str: string): void
  AddDontHasInfo(str: string): void
  AddGiveInfo(str: string): void
  AddDisableInfo(str: string): void
  SetScriptText(str: string): void
}
