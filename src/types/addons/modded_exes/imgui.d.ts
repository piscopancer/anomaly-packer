/** @noSelfInFile */

// Dear ImGui bindings from `script_imgui_script.cpp` (module `ImGui`) — added by
// the modded exes, mirrors the Dear ImGui API. Values come from `imgui.h`.
//
// Conventions:
// - `vector2`/`vector`/`vector4` map to `Fvector2`/`Fvector`/`Fvector4`; `fcolor`
//   (see math.d.ts) maps to `Fcolor`. Sizes/positions are passed and returned as
//   `vector2`.
// - Parameters are REQUIRED unless an explicit overload drops them: unlike a
//   normal Lua API, the luabind exports do not honour C++ default arguments, so a
//   function registered once must be called with all of its parameters.
// - `*Flags` parameters are bitmasks typed as `number` — combine members of the
//   named enum with `bit.bor(...)`. Single-choice enums (e.g. `ImGuiCol`,
//   `ImGuiKey`, `ImGuiDir`) are typed directly.
// - Functions using ImGui's out-values (e.g. widgets that edit a value) return a
//   `LuaMultiReturn` whose first element is the "changed/pressed" boolean and the
//   remaining elements are the updated value(s).

/** ImGui-generated widget/window identifier (`ImGuiID`, an unsigned 32-bit int). */
type ImGuiID = number

declare const enum ImGuiCond {
  Always = 1 << 0,
  Once = 1 << 1,
  FirstUseEver = 1 << 2,
  Appearing = 1 << 3,
}
declare const enum ImGuiDir {
  Left = 0,
  Right = 1,
  Up = 2,
  Down = 3,
}
declare const enum ImGuiWindowFlags {
  NoTitleBar = 1 << 0,
  NoResize = 1 << 1,
  NoMove = 1 << 2,
  NoScrollbar = 1 << 3,
  NoScrollWithMouse = 1 << 4,
  NoCollapse = 1 << 5,
  AlwaysAutoResize = 1 << 6,
  NoBackground = 1 << 7,
  NoSavedSettings = 1 << 8,
  NoMouseInputs = 1 << 9,
  MenuBar = 1 << 10,
  HorizontalScrollbar = 1 << 11,
  NoFocusOnAppearing = 1 << 12,
  NoBringToFrontOnFocus = 1 << 13,
  AlwaysVerticalScrollbar = 1 << 14,
  AlwaysHorizontalScrollbar = 1 << 15,
  NoNavInputs = 1 << 16,
  NoNavFocus = 1 << 17,
  UnsavedDocument = 1 << 18,
  NoDocking = 1 << 19,
  NoNav = (1 << 16) | (1 << 17),
  NoDecoration = (1 << 0) | (1 << 1) | (1 << 3) | (1 << 5),
  NoInputs = (1 << 9) | (1 << 16) | (1 << 17),
}
declare const enum ImGuiItemFlags {
  NoTabStop = 1 << 0,
  NoNav = 1 << 1,
  NoNavDefaultFocus = 1 << 2,
  ButtonRepeat = 1 << 3,
  AutoClosePopups = 1 << 4,
  AllowDuplicateId = 1 << 5,
}
declare const enum ImGuiSelectableFlags {
  NoAutoClosePopups = 1 << 0,
  SpanAllColumns = 1 << 1,
  AllowDoubleClick = 1 << 2,
  Disabled = 1 << 3,
  AllowOverlap = 1 << 4,
  Highlight = 1 << 5,
}
declare const enum ImGuiInputTextFlags {
  CharsDecimal = 1 << 0,
  CharsHexadecimal = 1 << 1,
  CharsScientific = 1 << 2,
  CharsUppercase = 1 << 3,
  CharsNoBlank = 1 << 4,
  AllowTabInput = 1 << 5,
  EnterReturnsTrue = 1 << 6,
  EscapeClearsAll = 1 << 7,
  CtrlEnterForNewLine = 1 << 8,
  ReadOnly = 1 << 9,
  Password = 1 << 10,
  AlwaysOverwrite = 1 << 11,
  AutoSelectAll = 1 << 12,
  ParseEmptyRefVal = 1 << 13,
  DisplayEmptyRefVal = 1 << 14,
  NoHorizontalScroll = 1 << 15,
  NoUndoRedo = 1 << 16,
  ElideLeft = 1 << 17,
  CallbackCompletion = 1 << 18,
  CallbackHistory = 1 << 19,
  CallbackAlways = 1 << 20,
  CallbackCharFilter = 1 << 21,
  CallbackResize = 1 << 22,
  CallbackEdit = 1 << 23,
}
declare const enum ImGuiTreeNodeFlags {
  Selected = 1 << 0,
  Framed = 1 << 1,
  AllowOverlap = 1 << 2,
  NoTreePushOnOpen = 1 << 3,
  NoAutoOpenOnLog = 1 << 4,
  DefaultOpen = 1 << 5,
  OpenOnDoubleClick = 1 << 6,
  OpenOnArrow = 1 << 7,
  Leaf = 1 << 8,
  Bullet = 1 << 9,
  FramePadding = 1 << 10,
  SpanAvailWidth = 1 << 11,
  SpanFullWidth = 1 << 12,
  SpanLabelWidth = 1 << 13,
  SpanAllColumns = 1 << 14,
  LabelSpanAllColumns = 1 << 15,
  NavLeftJumpsBackHere = 1 << 17,
  CollapsingHeader = (1 << 1) | (1 << 3) | (1 << 4),
}
declare const enum ImGuiPopupFlags {
  MouseButtonLeft = 0,
  MouseButtonRight = 1,
  MouseButtonMiddle = 2,
  NoReopen = 1 << 5,
  NoOpenOverExistingPopup = 1 << 7,
  NoOpenOverItems = 1 << 8,
  AnyPopupId = 1 << 10,
  AnyPopupLevel = 1 << 11,
  AnyPopup = (1 << 10) | (1 << 11),
}
declare const enum ImGuiTableRowFlags {
  Headers = 1 << 0,
}
declare const enum ImGuiTableBgTarget {
  RowBg0 = 1,
  RowBg1 = 2,
  CellBg = 3,
}
declare const enum ImGuiTableFlags {
  Resizable = 1 << 0,
  Reorderable = 1 << 1,
  Hideable = 1 << 2,
  Sortable = 1 << 3,
  NoSavedSettings = 1 << 4,
  ContextMenuInBody = 1 << 5,
  RowBg = 1 << 6,
  BordersInnerH = 1 << 7,
  BordersOuterH = 1 << 8,
  BordersInnerV = 1 << 9,
  BordersOuterV = 1 << 10,
  BordersH = (1 << 7) | (1 << 8),
  BordersV = (1 << 9) | (1 << 10),
  BordersInner = (1 << 9) | (1 << 7),
  BordersOuter = (1 << 10) | (1 << 8),
  Borders = (1 << 9) | (1 << 7) | (1 << 10) | (1 << 8),
  NoBordersInBody = 1 << 11,
  NoBordersInBodyUntilResize = 1 << 12,
  SizingFixedFit = 1 << 13,
  SizingFixedSame = 2 << 13,
  SizingStretchProp = 3 << 13,
  SizingStretchSame = 4 << 13,
  NoHostExtendX = 1 << 16,
  NoHostExtendY = 1 << 17,
  NoKeepColumnsVisible = 1 << 18,
  PreciseWidths = 1 << 19,
  NoClip = 1 << 20,
  PadOuterX = 1 << 21,
  NoPadOuterX = 1 << 22,
  NoPadInnerX = 1 << 23,
  ScrollX = 1 << 24,
  ScrollY = 1 << 25,
  SortMulti = 1 << 26,
  SortTristate = 1 << 27,
  HighlightHoveredColumn = 1 << 28,
}
declare const enum ImGuiTableColumnFlags {
  Disabled = 1 << 0,
  DefaultHide = 1 << 1,
  DefaultSort = 1 << 2,
  WidthStretch = 1 << 3,
  WidthFixed = 1 << 4,
  NoResize = 1 << 5,
  NoReorder = 1 << 6,
  NoHide = 1 << 7,
  NoClip = 1 << 8,
  NoSort = 1 << 9,
  NoSortAscending = 1 << 10,
  NoSortDescending = 1 << 11,
  NoHeaderLabel = 1 << 12,
  NoHeaderWidth = 1 << 13,
  PreferSortAscending = 1 << 14,
  /** Typo preserved from the engine binding (`PreferSortDescending`). */
  PreferSortDescendin = 1 << 15,
  IndentEnable = 1 << 16,
  IndentDisable = 1 << 17,
  AngledHeader = 1 << 18,
  IsEnabled = 1 << 24,
  IsVisible = 1 << 25,
  IsSorted = 1 << 26,
  IsHovered = 1 << 27,
}
/**
 * WARNING: the engine binding maps these member names onto the WRONG underlying
 * `ImGuiTabBarFlags_` values (a copy-paste bug in `script_imgui_script.cpp`), so
 * the names below do NOT describe the actual behaviour. The real behaviour of
 * each value (by bit) is, in order: `Reorderable`, `AutoSelectNewTabs`,
 * `TabListPopupButton`, `NoCloseWithMiddleMouseButton`, `NoTabListScrollingButtons`,
 * `NoTooltip`, `DrawSelectedOverline`, `FittingPolicyResizeDown`, `FittingPolicyScroll`.
 */
declare const enum ImGuiTabBarFlags {
  Disabled = 1 << 0,
  DefaultHide = 1 << 1,
  DefaultSort = 1 << 2,
  WidthStretch = 1 << 3,
  WidthFixed = 1 << 4,
  NoResize = 1 << 5,
  NoReorder = 1 << 6,
  NoHide = 1 << 7,
  NoClip = 1 << 8,
}
declare const enum ImGuiTabItemFlags {
  UnsavedDocument = 1 << 0,
  SetSelected = 1 << 1,
  NoCloseWithMiddleMouseButton = 1 << 2,
  NoPushId = 1 << 3,
  NoTooltip = 1 << 4,
  NoReorder = 1 << 5,
  Leading = 1 << 6,
  Trailing = 1 << 7,
  NoAssumedClosure = 1 << 8,
}
declare const enum ImGuiHoveredFlags {
  ChildWindows = 1 << 0,
  RootWindow = 1 << 1,
  AnyWindow = 1 << 2,
  NoPopupHierarchy = 1 << 3,
  DockHierarchy = 1 << 4,
  AllowWhenBlockedByPopup = 1 << 5,
  AllowWhenBlockedByActiveItem = 1 << 7,
  AllowWhenOverlappedByItem = 1 << 8,
  AllowWhenOverlappedByWindow = 1 << 9,
  AllowWhenDisabled = 1 << 10,
  NoNavOverride = 1 << 11,
  AllowWhenOverlapped = (1 << 8) | (1 << 9),
  RectOnly = (1 << 5) | (1 << 7) | (1 << 8) | (1 << 9),
  RootAndChildWindows = (1 << 1) | (1 << 0),
  ForTooltip = 1 << 12,
  Stationary = 1 << 13,
  DelayNone = 1 << 14,
  DelayShort = 1 << 15,
  DelayNormal = 1 << 16,
  NoSharedDelay = 1 << 17,
}
declare const enum ImGuiFocusedFlags {
  ChildWindows = 1 << 0,
  RootWindow = 1 << 1,
  AnyWindow = 1 << 2,
  NoPopupHierarchy = 1 << 3,
  DockHierarchy = 1 << 4,
  RootAndChildWindows = (1 << 1) | (1 << 0),
}
/** Sequential enum (values match `imgui.h` order, `Text` == 0). */
declare const enum ImGuiCol {
  Text,
  TextDisabled,
  WindowBg,
  ChildBg,
  PopupBg,
  Border,
  BorderShadow,
  FrameBg,
  FrameBgHovered,
  FrameBgActive,
  TitleBg,
  TitleBgActive,
  TitleBgCollapsed,
  MenuBarBg,
  ScrollbarBg,
  ScrollbarGrab,
  ScrollbarGrabHovered,
  ScrollbarGrabActive,
  CheckMark,
  SliderGrab,
  SliderGrabActive,
  Button,
  ButtonHovered,
  ButtonActive,
  Header,
  HeaderHovered,
  HeaderActive,
  Separator,
  SeparatorHovered,
  SeparatorActive,
  ResizeGrip,
  ResizeGripHovered,
  ResizeGripActive,
  TabHovered,
  Tab,
  TabSelected,
  TabSelectedOverline,
  TabDimmed,
  TabDimmedSelected,
  TabDimmedSelectedOverline,
  DockingPreview,
  DockingEmptyBg,
  PlotLines,
  PlotLinesHovered,
  PlotHistogram,
  PlotHistogramHovered,
  TableHeaderBg,
  TableBorderStrong,
  TableBorderLight,
  TableRowBg,
  TableRowBgAlt,
  TextLink,
  TextSelectedBg,
  DragDropTarget,
  NavCursor,
  NavWindowingHighlight,
  NavWindowingDimBg,
  ModalWindowDimBg,
}
/** Sequential enum (values match `imgui.h` order, `Alpha` == 0). */
declare const enum ImGuiStyleVar {
  Alpha,
  DisabledAlpha,
  WindowPadding,
  WindowRounding,
  WindowBorderSize,
  WindowMinSize,
  WindowTitleAlign,
  ChildRounding,
  ChildBorderSize,
  PopupRounding,
  PopupBorderSize,
  FramePadding,
  FrameRounding,
  FrameBorderSize,
  ItemSpacing,
  ItemInnerSpacing,
  IndentSpacing,
  CellPadding,
  ScrollbarSize,
  ScrollbarRounding,
  GrabMinSize,
  GrabRounding,
  TabRounding,
  TabBorderSize,
  TabBarBorderSize,
  TabBarOverlineSize,
  TableAngledHeadersAngle,
  TableAngledHeadersTextAlign,
  ButtonTextAlign,
  SelectableTextAlign,
  SeparatorTextBorderSize,
  SeparatorTextAlign,
  SeparatorTextPadding,
  DockingSeparatorSize,
}
declare const enum ImGuiComboFlags {
  PopupAlignLeft = 1 << 0,
  HeightSmall = 1 << 1,
  HeightRegular = 1 << 2,
  HeightLarge = 1 << 3,
  HeightLargest = 1 << 4,
  NoArrowButton = 1 << 5,
  NoPreview = 1 << 6,
  WidthFitPreview = 1 << 7,
}
declare const enum ImGuiSortDirection {
  Ascending = 1,
  Descending = 2,
}
declare const enum ImGuiMouseButton {
  Left = 0,
  Right = 1,
  Middle = 2,
}
declare const enum ImGuiButtonFlags {
  MouseButtonLeft = 1 << 0,
  MouseButtonRight = 1 << 1,
  MouseButtonMiddle = 1 << 2,
  EnableNav = 1 << 3,
}
declare const enum ImGuiColorEditFlags {
  NoAlpha = 1 << 1,
  NoPicker = 1 << 2,
  NoOptions = 1 << 3,
  NoSmallPreview = 1 << 4,
  NoInputs = 1 << 5,
  NoTooltip = 1 << 6,
  NoLabel = 1 << 7,
  NoSidePreview = 1 << 8,
  NoDragDrop = 1 << 9,
  NoBorder = 1 << 10,
  AlphaOpaque = 1 << 11,
  AlphaNoBg = 1 << 12,
  AlphaPreviewHalf = 1 << 13,
  AlphaBar = 1 << 16,
  HDR = 1 << 19,
  DisplayRGB = 1 << 20,
  DisplayHSV = 1 << 21,
  DisplayHex = 1 << 22,
  Uint8 = 1 << 23,
  Float = 1 << 24,
  PickerHueBar = 1 << 25,
  PickerHueWheel = 1 << 26,
  InputRGB = 1 << 27,
  InputHSV = 1 << 28,
}
declare const enum ImGuiSliderFlags {
  Logarithmic = 1 << 5,
  NoRoundToFormat = 1 << 6,
  NoInput = 1 << 7,
  WrapAround = 1 << 8,
  ClampOnInput = 1 << 9,
  ClampZeroRange = 1 << 10,
  NoSpeedTweaks = 1 << 11,
  AlwaysClamp = (1 << 9) | (1 << 10),
}
declare const enum ImGuiInputFlags {
  RepeatRateDefault = 1 << 1,
  RepeatRateNavMove = 1 << 2,
  RepeatRateNavTweak = 1 << 3,
  RepeatUntilRelease = 1 << 4,
  RepeatUntilKeyModsChange = 1 << 5,
  RepeatUntilKeyModsChangeFromNone = 1 << 6,
  RepeatUntilOtherKeyPress = 1 << 7,
  LockThisFrame = 1 << 20,
  LockUntilRelease = 1 << 21,
  CondHovered = 1 << 22,
  CondActive = 1 << 23,
}
/**
 * Key identifier. Values are the `imgui.h` `ImGuiKey_*` constants (named keys
 * start at 512). Digit members are prefixed with `_` (`_0`..`_9`) to be valid
 * identifiers.
 */
declare const enum ImGuiKey {
  A = 546,
  B = 547,
  C = 548,
  D = 549,
  E = 550,
  F = 551,
  G = 552,
  H = 553,
  I = 554,
  J = 555,
  K = 556,
  L = 557,
  M = 558,
  N = 559,
  O = 560,
  P = 561,
  Q = 562,
  R = 563,
  S = 564,
  T = 565,
  U = 566,
  V = 567,
  W = 568,
  X = 569,
  Y = 570,
  Z = 571,
  _1 = 537,
  _2 = 538,
  _3 = 539,
  _4 = 540,
  _5 = 541,
  _6 = 542,
  _7 = 543,
  _8 = 544,
  _9 = 545,
  _0 = 536,
  Enter = 525,
  Escape = 526,
  Backspace = 523,
  Tab = 512,
  Space = 524,
  Minus = 598,
  Equal = 602,
  LeftBracket = 603,
  RightBracket = 605,
  Backslash = 604,
  Semicolon = 601,
  Apostrophe = 596,
  GraveAccent = 606,
  Comma = 597,
  Period = 599,
  Slash = 600,
  CapsLock = 607,
  F1 = 572,
  F2 = 573,
  F3 = 574,
  F4 = 575,
  F5 = 576,
  F6 = 577,
  F7 = 578,
  F8 = 579,
  F9 = 580,
  F10 = 581,
  F11 = 582,
  F12 = 583,
  ScrollLock = 608,
  Pause = 611,
  Insert = 521,
  Home = 519,
  PageUp = 517,
  Delete = 522,
  End = 520,
  PageDown = 518,
  RightArrow = 514,
  LeftArrow = 513,
  DownArrow = 516,
  UpArrow = 515,
  NumLock = 609,
  KeypadDivide = 623,
  KeypadMultiply = 624,
  KeypadSubtract = 625,
  KeypadAdd = 626,
  KeypadEnter = 627,
  Keypad1 = 613,
  Keypad2 = 614,
  Keypad3 = 615,
  Keypad4 = 616,
  Keypad5 = 617,
  Keypad6 = 618,
  Keypad7 = 619,
  Keypad8 = 620,
  Keypad9 = 621,
  Keypad0 = 612,
  KeypadDecimal = 622,
  Menu = 535,
  KeypadEqual = 628,
  LeftCtrl = 527,
  LeftShift = 528,
  LeftAlt = 529,
  LeftSuper = 530,
  RightCtrl = 531,
  RightShift = 532,
  RightAlt = 533,
  RightSuper = 534,
}

declare namespace ImGui {
  export function GetVersion(): string

  // Windows
  /** @returns `[visible, open]` — `visible` is whether to draw window contents, `open` reflects the (edited) close-button state. */
  export function Begin(name: string, open: boolean, flags: number): LuaMultiReturn<[visible: boolean, open: boolean]>
  export function End(): void

  export function IsWindowAppearing(): boolean
  export function IsWindowCollapsed(): boolean
  /** @param flags bitmask of {@link ImGuiFocusedFlags} */
  export function IsWindowFocused(flags: number): boolean
  /** @param flags bitmask of {@link ImGuiHoveredFlags} */
  export function IsWindowHovered(flags: number): boolean

  export function GetWindowDpiScale(): number
  export function GetWindowPos(): vector2
  export function GetWindowSize(): vector2
  export function GetWindowWidth(): number
  export function GetWindowHeight(): number

  export function SetNextWindowPos(pos: vector2): void
  export function SetNextWindowPos(pos: vector2, cond: ImGuiCond): void
  export function SetNextWindowPos(pos: vector2, cond: ImGuiCond, pivot: vector2): void
  export function SetNextWindowSize(size: vector2, cond: ImGuiCond): void
  export function SetNextWindowSizeConstraints(size_min: vector2, size_max: vector2): void
  export function SetNextWindowContentSize(size: vector2): void
  export function SetNextWindowCollapsed(collapsed: boolean, cond: ImGuiCond): void
  export function SetNextWindowFocus(): void
  export function SetNextWindowScroll(scroll: vector2): void
  export function SetNextWindowBgAlpha(alpha: number): void
  export function SetWindowPos(pos: vector2, cond: ImGuiCond): void
  export function SetWindowSize(size: vector2, cond: ImGuiCond): void
  export function SetWindowCollapsed(collapsed: boolean): void
  export function SetWindowCollapsed(collapsed: boolean, cond: ImGuiCond): void
  export function SetWindowCollapsed(name: string, collapsed: boolean, cond: ImGuiCond): void
  export function SetWindowFocus(): void
  export function SetWindowFocus(name: string): void

  // Scrolling
  export function GetScrollX(): number
  export function GetScrollY(): number
  export function SetScrollX(scroll_x: number): void
  export function SetScrollY(scroll_y: number): void
  export function GetScrollMaxX(): number
  export function GetScrollMaxY(): number
  export function SetScrollHereX(center_x_ratio: number): void
  export function SetScrollHereY(center_y_ratio: number): void
  export function SetScrollFromPosX(local_x: number): void
  export function SetScrollFromPosX(local_x: number, center_x_ratio: number): void
  export function SetScrollFromPosY(local_y: number): void
  export function SetScrollFromPosY(local_y: number, center_y_ratio: number): void

  // Style
  /** @param idx one of {@link ImGuiCol} @param col packed `u32` color (`0xAARRGGBB`) */
  export function PushStyleColor(idx: ImGuiCol, col: number): void
  export function PushStyleColor(idx: ImGuiCol, col: fcolor): void
  export function PopStyleColor(): void
  export function PopStyleColor(count: number): void
  export function PushStyleVar(idx: ImGuiStyleVar, val: number): void
  export function PushStyleVar(idx: ImGuiStyleVar, val: vector2): void
  export function PushStyleVarX(idx: ImGuiStyleVar, val_x: number): void
  export function PushStyleVarY(idx: ImGuiStyleVar, val_y: number): void
  export function PopStyleVar(): void
  export function PopStyleVar(count: number): void
  export function GetStyleColor(idx: ImGuiCol): fcolor

  // Item / width
  /** @param option one of {@link ImGuiItemFlags} */
  export function PushItemFlag(option: number, enabled: boolean): void
  export function PopItemFlag(): void
  export function PushItemWidth(item_width: number): void
  export function PopItemWidth(): void
  export function SetNextItemWidth(item_width: number): void
  export function CalcItemWidth(): number
  export function PushTextWrapPos(wrap_local_pos_x: number): void
  export function PopTextWrapPos(): void

  // Cursor / layout positions
  export function GetCursorScreenPos(): vector2
  export function SetCursorScreenPos(pos: vector2): void
  export function GetContentRegionAvail(): vector2
  export function GetCursorPos(): vector2
  export function GetCursorPosX(): number
  export function GetCursorPosY(): number
  export function SetCursorPos(local_pos: vector2): void
  export function SetCursorPosX(local_x: number): void
  export function SetCursorPosY(local_y: number): void
  export function GetCursorStartPos(): vector2

  // Layout
  export function Separator(): void
  export function SameLine(): void
  export function SameLine(offset_from_start_x: number): void
  export function SameLine(offset_from_start_x: number, spacing: number): void
  export function NewLine(): void
  export function Spacing(): void
  export function Dummy(size: vector2): void
  export function Indent(indent_w: number): void
  export function Unindent(indent_w: number): void
  export function BeginGroup(): void
  export function EndGroup(): void
  export function AlignTextToFramePadding(): void
  export function GetTextLineHeight(): number
  export function GetTextLineHeightWithSpacing(): number
  export function GetFrameHeight(): number
  export function GetFrameHeightWithSpacing(): number

  // ID stack
  export function PushID(str_id: string): void
  export function PushID(int_id: number): void
  export function PopID(): void
  export function GetID(str_id: string): ImGuiID
  export function GetID(int_id: number): ImGuiID

  // Text
  export function Text(text: string): void
  export function TextUnformatted(text: string): void
  export function TextColored(col: fcolor, text: string): void
  export function TextDisabled(text: string): void
  export function TextWrapped(text: string): void
  export function TextLink(label: string): boolean
  export function TextLinkOpenURL(label: string, url: string): void
  export function LabelText(label: string, text: string): void
  export function Bullet(): void
  export function BulletText(text: string): void
  export function SeparatorText(text: string): void

  // Widgets
  export function Button(label: string): boolean
  export function Button(label: string, size: vector2): boolean
  export function SmallButton(label: string): boolean
  export function InvisibleButton(id: string): boolean
  export function InvisibleButton(id: string, size: vector2): boolean
  /** @param flags bitmask of {@link ImGuiButtonFlags} */
  export function InvisibleButton(id: string, size: vector2, flags: number): boolean
  export function ArrowButton(str_id: string, dir: ImGuiDir): boolean
  /** @returns `[pressed, value]` */
  export function Checkbox(label: string, value: boolean): LuaMultiReturn<[pressed: boolean, value: boolean]>
  export function RadioButton(label: string, active: boolean): boolean
  export function ProgressBar(fraction: number, size: vector2, overlay: string): void

  export function BeginCombo(label: string, preview_value: string, flags: number): boolean
  export function EndCombo(): void

  // Drag / Slider / Input
  /** @param flags bitmask of {@link ImGuiSliderFlags} @returns `[changed, value]` */
  export function DragFloat(label: string, value: number, speed: number, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: number]>
  export function DragFloat2(label: string, value: vector2, speed: number, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector2]>
  export function DragFloat3(label: string, value: vector, speed: number, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector]>
  export function DragFloat4(label: string, value: vector4, speed: number, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector4]>
  /** @returns `[changed, current_min, current_max]` */
  export function DragFloatRange2(label: string, current_min: number, current_max: number, speed: number, min: number, max: number, format: string, format_max: string, flags: number): LuaMultiReturn<[changed: boolean, current_min: number, current_max: number]>

  /** @param flags bitmask of {@link ImGuiSliderFlags} @returns `[changed, value]` */
  export function SliderFloat(label: string, value: number, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: number]>
  export function SliderFloat2(label: string, value: vector2, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector2]>
  export function SliderFloat3(label: string, value: vector, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector]>
  export function SliderFloat4(label: string, value: vector4, min: number, max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector4]>
  /** @returns `[changed, radians]` */
  export function SliderAngle(label: string, value_rad: number, degrees_min: number, degrees_max: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, radians: number]>

  /** @param flags bitmask of {@link ImGuiInputTextFlags} @returns `[text, changed]` */
  export function InputText(label: string, text: string, capacity: number, flags: number): LuaMultiReturn<[text: string, changed: boolean]>
  export function InputTextMultiline(label: string, text: string, capacity: number, size: vector2, flags: number): LuaMultiReturn<[text: string, changed: boolean]>
  export function InputTextWithHint(label: string, hint: string, text: string, capacity: number, flags: number): LuaMultiReturn<[text: string, changed: boolean]>

  /** @param flags bitmask of {@link ImGuiInputTextFlags} @returns `[changed, value]` */
  export function InputFloat(label: string, value: number, step: number, step_fast: number, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: number]>
  export function InputFloat2(label: string, value: vector2, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector2]>
  export function InputFloat3(label: string, value: vector, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector]>
  export function InputFloat4(label: string, value: vector4, format: string, flags: number): LuaMultiReturn<[changed: boolean, value: vector4]>

  // Color widgets
  /** @param flags bitmask of {@link ImGuiColorEditFlags} @returns `[changed, color]` */
  export function ColorEdit3(label: string, color: fcolor, flags: number): LuaMultiReturn<[changed: boolean, color: fcolor]>
  export function ColorEdit4(label: string, color: fcolor, flags: number): LuaMultiReturn<[changed: boolean, color: fcolor]>
  export function ColorPicker3(label: string, color: fcolor, flags: number): LuaMultiReturn<[changed: boolean, color: fcolor]>
  export function ColorPicker4(label: string, color: fcolor, flags: number): LuaMultiReturn<[changed: boolean, color: fcolor]>
  export function ColorButton(desc_id: string, color: fcolor, flags: number, size: vector2): LuaMultiReturn<[pressed: boolean, color: fcolor]>

  // Trees
  export function TreeNode(label: string): boolean
  /** @param flags bitmask of {@link ImGuiTreeNodeFlags} */
  export function TreeNodeEx(label: string, flags: number): boolean
  export function TreePush(str_id: string): void
  export function TreePop(): void
  export function GetTreeNodeToLabelSpacing(): number
  export function CollapsingHeader(label: string): boolean
  /** @param flags bitmask of {@link ImGuiTreeNodeFlags} */
  export function CollapsingHeader(label: string, flags: number): boolean
  /** @returns `[open, visible]` — pass/receive the close-button `visible` state. */
  export function CollapsingHeader(label: string, visible: boolean): LuaMultiReturn<[open: boolean, visible: boolean]>
  export function CollapsingHeader(label: string, visible: boolean, flags: number): LuaMultiReturn<[open: boolean, visible: boolean]>
  export function SetNextItemOpen(is_open: boolean, cond: ImGuiCond): void

  // List box
  export function BeginListBox(label: string, size: vector2): boolean
  export function EndListBox(): void
  /** @param flags bitmask of {@link ImGuiSelectableFlags} */
  export function Selectable(label: string, selected: boolean, flags: number, size: vector2): boolean

  // Menus
  export function BeginMenuBar(): boolean
  export function EndMenuBar(): void
  export function BeginMenu(label: string): boolean
  export function BeginMenu(label: string, enabled: boolean): boolean
  export function EndMenu(): void
  /** @returns `[activated, selected]` */
  export function MenuItem(label: string, shortcut: string, selected: boolean, enabled: boolean): LuaMultiReturn<[activated: boolean, selected: boolean]>

  // Tooltips
  export function BeginTooltip(): boolean
  export function EndTooltip(): void
  export function SetTooltip(text: string): void
  export function BeginItemTooltip(): boolean
  export function SetItemTooltip(text: string): void

  // Popups
  /** @param flags bitmask of {@link ImGuiWindowFlags} */
  export function BeginPopup(str_id: string, flags: number): boolean
  /** @param flags bitmask of {@link ImGuiWindowFlags} @returns `[visible, open]` */
  export function BeginPopupModal(name: string, open: boolean, flags: number): LuaMultiReturn<[visible: boolean, open: boolean]>
  export function EndPopup(): void
  export function OpenPopup(str_id: string): void
  /** @param flags bitmask of {@link ImGuiPopupFlags} */
  export function OpenPopup(str_id: string, flags: number): void
  export function OpenPopup(id: ImGuiID): void
  export function OpenPopup(id: ImGuiID, flags: number): void
  /** @param flags bitmask of {@link ImGuiPopupFlags} */
  export function OpenPopupOnItemClick(str_id: string, flags: number): void
  export function CloseCurrentPopup(): void
  /** @param flags bitmask of {@link ImGuiPopupFlags} */
  export function BeginPopupContextItem(str_id: string, flags: number): boolean
  export function BeginPopupContextWindow(str_id: string, flags: number): boolean
  export function BeginPopupContextVoid(str_id: string, flags: number): boolean
  export function IsPopupOpen(str_id: string): boolean
  /** @param flags bitmask of {@link ImGuiPopupFlags} */
  export function IsPopupOpen(str_id: string, flags: number): boolean

  // Tables
  /** @param flags bitmask of {@link ImGuiTableFlags} */
  export function BeginTable(str_id: string, columns: number, flags: number, outer_size: vector2, inner_width: number): boolean
  export function EndTable(): void
  /** @param row_flags bitmask of {@link ImGuiTableRowFlags} */
  export function TableNextRow(row_flags: number, min_row_height: number): void
  export function TableNextColumn(): boolean
  export function TableSetColumnIndex(column_n: number): boolean
  /** @param flags bitmask of {@link ImGuiTableColumnFlags} */
  export function TableSetupColumn(label: string, flags: number, init_width_or_weight: number, user_id: ImGuiID): void
  export function TableSetupScrollFreeze(cols: number, rows: number): void
  export function TableHeader(label: string): void
  export function TableHeadersRow(): void
  export function TableAngledHeadersRow(): void
  export function TableGetColumnCount(): number
  export function TableGetColumnIndex(): number
  export function TableGetRowIndex(): number
  export function TableGetColumnName(column_n: number): string
  /** @returns bitmask of {@link ImGuiTableColumnFlags} */
  export function TableGetColumnFlags(column_n: number): number
  /**
   * @deprecated The engine binding wires this name to `TableAngledHeadersRow`
   * (a copy-paste bug), so it does NOT enable/disable a column. Avoid.
   */
  export function TableSetColumnEnabled(): void
  export function TableGetHoveredColumn(): number
  export function TableSetBgColor(target: ImGuiTableBgTarget, color: fcolor, column_n: number): void

  // Tab bars
  /** @param flags bitmask of {@link ImGuiTabBarFlags} (note the mislabelled values) */
  export function BeginTabBar(str_id: string, flags: number): boolean
  export function EndTabBar(): void
  /** @param flags bitmask of {@link ImGuiTabItemFlags} @returns `[visible, open]` */
  export function BeginTabItem(label: string, open: boolean, flags: number): LuaMultiReturn<[visible: boolean, open: boolean]>
  export function EndTabItem(): void
  /** @param flags bitmask of {@link ImGuiTabItemFlags} */
  export function TabItemButton(label: string, flags: number): boolean
  export function SetTabItemClosed(tab_or_docked_window_label: string): void

  // Disabling
  export function BeginDisabled(): void
  export function BeginDisabled(disabled: boolean): void
  export function EndDisabled(): void

  // Clipping
  export function PushClipRect(clip_rect_min: vector2, clip_rect_max: vector2, intersect_with_current_clip_rect: boolean): void
  export function PopClipRect(): void

  // Focus / navigation
  export function SetItemDefaultFocus(): void
  export function SetKeyboardFocusHere(offset: number): void
  export function SetNavCursorVisible(visible: boolean): void
  export function SetNextItemAllowOverlap(): void

  // Item queries
  /** @param flags bitmask of {@link ImGuiHoveredFlags} */
  export function IsItemHovered(flags: number): boolean
  export function IsItemActive(): boolean
  export function IsItemFocused(): boolean
  export function IsItemClicked(mouse_button: ImGuiMouseButton): boolean
  export function IsItemVisible(): boolean
  export function IsItemEdited(): boolean
  export function IsItemActivated(): boolean
  export function IsItemDeactivated(): boolean
  export function IsItemDeactivatedAfterEdit(): boolean
  export function IsItemToggledOpen(): boolean
  export function IsAnyItemHovered(): boolean
  export function IsAnyItemActive(): boolean
  export function IsAnyItemFocused(): boolean
  export function GetItemID(): ImGuiID
  export function GetItemRectMin(): vector2
  export function GetItemRectMax(): vector2
  export function GetItemRectSize(): vector2

  // Keyboard
  export function IsKeyDown(key: ImGuiKey): boolean
  export function IsKeyPressed(key: ImGuiKey): boolean
  export function IsKeyPressed(key: ImGuiKey, repeat: boolean): boolean
  export function IsKeyReleased(key: ImGuiKey): boolean
  /** @param key_chord an `ImGuiKey` optionally combined with modifier bits (`ImGuiKeyChord`) */
  export function IsKeyChordPressed(key_chord: number): boolean
  export function GetKeyPressedAmount(key: ImGuiKey, repeat_delay: number, rate: number): number
  export function GetKeyName(key: ImGuiKey): string
  export function SetNextFrameWantCaptureKeyboard(want_capture_keyboard: boolean): void

  export function Shortcut(key_chord: number): boolean
  /** @param flags bitmask of {@link ImGuiInputFlags} */
  export function Shortcut(key_chord: number, flags: number): boolean
  export function SetNextItemShortcut(key_chord: number, flags: number): void

  export function SetItemKeyOwner(key: ImGuiKey): void
  /** @param flags bitmask of {@link ImGuiInputFlags} */
  export function SetItemKeyOwner(key: ImGuiKey, flags: number): void

  export function CalcTextSize(text: string, hide_text_after_double_hash: boolean, wrap_width: number): vector2

  // Mouse
  export function IsMouseDown(button: ImGuiMouseButton): boolean
  export function IsMouseClicked(button: ImGuiMouseButton, repeat: boolean): boolean
  export function IsMouseReleased(button: ImGuiMouseButton): boolean
  export function IsMouseDoubleClicked(button: ImGuiMouseButton): boolean
  export function IsMouseReleasedWithDelay(button: ImGuiMouseButton, delay: number): boolean
  export function GetMouseClickedCount(button: ImGuiMouseButton): number
  export function IsMouseHoveringRect(r_min: vector2, r_max: vector2): boolean
  export function IsMouseHoveringRect(r_min: vector2, r_max: vector2, clip: boolean): boolean
  export function IsMousePosValid(mouse_pos: vector2): boolean
  export function IsAnyMouseDown(): boolean
  export function GetMousePos(): vector2
  export function GetMousePosOnOpeningCurrentPopup(): vector2
  export function IsMouseDragging(button: ImGuiMouseButton, lock_threshold: number): boolean
  export function GetMouseDragDelta(button: ImGuiMouseButton, lock_threshold: number): vector2
  export function ResetMouseDragDelta(button: ImGuiMouseButton): void
  export function SetNextFrameWantCaptureMouse(want_capture_mouse: boolean): void

  // Fonts
  export function PushFont(name: string): void
  export function PopFont(): void
  export function GetFontSize(): number

  // Clipboard
  export function GetClipboardText(): string
  export function SetClipboardText(text: string): void
}
