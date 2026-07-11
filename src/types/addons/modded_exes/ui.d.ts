/** @noSelfInFile */

interface CUIStatic {
  SetCoverTexture(cover: boolean): void
  GetCoverTexture(): boolean
  SetColorAnimation(lanim: string, flags: number, delay?: number): void
  ResetColorAnimation(): void
  RemoveColorAnimation(lanim: string): void
}

interface CUIMainIngameWnd {
  /** @returns list of quick-slot icon statics */
  GetQuickSlotIcons(): TODO
  m_QuickSlotText1: CUITextWnd
  m_QuickSlotText2: CUITextWnd
  m_QuickSlotText3: CUITextWnd
  m_QuickSlotText4: CUITextWnd
}

interface CUIProgressBar {
  GetProgressStatic(): CUIStatic
  GetSnapNoDelay(): boolean
  SetSnapNoDelay(status: boolean): void
  SnapProgressPos(): void
}

interface CUIPropertiesBox {
  /** Add a non-selectable header row */
  AddHeader(text: string): CUIListBoxItem
  /** Add a submenu item; returns the child box to populate */
  AddSubmenu(label: string): CUIPropertiesBox
}

interface CUIPdaWnd {
  GetPdaXml(): string
  SetPdaXml(xml: string): void
}

interface CUIListBoxItem {
  GetTAG(): number
  SetTAG(value: number): void
}

interface CUIDialogWnd {
  AllowWorkInPause(allow: boolean): void
}
