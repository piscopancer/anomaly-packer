// The element types below are built from `React.PropsWithChildren` and `React.Attributes`.
// Referenced explicitly rather than relying on `@types/react` being picked up automatically:
// any consuming project that sets an explicit `types` array (a very common thing to do) stops
// auto-inclusion, and the failure is opaque — the `UI` types still resolve while every JSX
// element reports "does not exist on type 'JSX.IntrinsicElements'".
/// <reference types="react" />

declare namespace UI {
  type Align = 't' | 'r' | 'b' | 'l' | 'c'
  type VertAlign = 't' | 'c' | 'b'
  type Texture = Partial<{
    x: number
    y: number
    width: number
    height: number
    r: number
    g: number
    b: number
    a: number
    stretch: 0 | 1
    complex_mode: 0 | 1
  }>
  /**
   * The source rect of a named crop in a `ui\textures_descr` file. Unlike {@link Texture},
   * every field is required: the engine reads all four when registering the id, and a missing
   * one silently registers a zero-sized texture that draws as nothing.
   */
  type TextureRect = {
    /** Name the crop is referenced by, e.g. from `CUIStatic:InitTexture`. */
    id: string
    x: number
    y: number
    width: number
    height: number
  }
  type Indent = Partial<{
    right_ident: number
    left_ident: number
    top_indent: number
    bottom_indent: number
  }>
  type Text = Partial<{
    align: Align
    vert_align: Align
    color: Color
  }> & {
    font: `arial_${14 | 21}` | `letterica${16 | 18 | 25}` | `graffiti${19 | 22 | 32 | 40 | 50}`
  }
  /**
   * What any element of a `configs/ui` layout may carry. Tag names there are chosen by whoever
   * writes the layout — `CScriptXmlInit` and `CUIXmlInit` look an element up by the path the
   * script asks for, not by a fixed vocabulary — so this is the shape every unnamed tag gets.
   *
   * The window rect, the colour and the id fields of {@link Texture}, plus the attributes the
   * xml initialisers read off a window itself (`CUIXmlInit::InitWindow` and the per-control
   * initialisers): the name a control is found by, its hint, its frame mode, and the list
   * geometry a scroll view or listbox needs.
   */
  type Window = Texture &
    Partial<{
      /** The control's name, matched by `CUIWindow::WindowName`; hint lookups and scripts use it. */
      window_name: string
      /** String id of the tooltip shown while the cursor rests on the control. */
      hint: string
      /** Draws the control's texture as a nine-slice frame instead of stretching it. */
      frame_mode: 0 | 1
      /** Row height of a scroll view or listbox, in the layout's own coordinate space. */
      item_height: number
      /** Which `scroll_profile` section styles the scrollbar, e.g. `default`. */
      scroll_profile: string
      /** Keeps the scrollbar visible even when everything fits. */
      always_show_scroll: 0 | 1
      /** Whether rows of a listbox can be picked. */
      can_select: 0 | 1
      /**
       * Name of a `light_anim` section the control's colour is animated by, e.g.
       * `ui_slow_blinking_alpha`. Read by `CUIXmlInit::InitStatic` and applied through
       * `SetColorAnimation`, so declaring it here is the same animation the engine's own
       * controls run — no script call involved.
       */
      light_anim: string
      /** Repeat the animation rather than running it once. Defaults to on. */
      la_cyclic: 0 | 1
      /** Animate the text colour. Defaults to on. */
      la_text: 0 | 1
      /** Animate the texture colour. Defaults to on. */
      la_texture: 0 | 1
      /** Animate only the alpha, leaving the colour alone. Defaults to off. */
      la_alpha: 0 | 1
    }>
}
declare namespace UI {
  /**
   * Base id of a nine-slice set — a frame or a frameline. The engine builds the control from
   * `<id>_back`, `<id>_b` and the corner/edge ids around them (`CUIXmlInit::InitFrame`), so the
   * base itself is never registered and would not be a {@link TextureId} on its own.
   */
  type FrameTextureId<T = TextureId> = T extends `${infer Base}_back` ? Base : never
  /**
   * Base id of a control's state set. A button names one id and the engine appends the state
   * (`<id>_e`, `_t`, `_h`, `_d`), so, as with {@link FrameTextureId}, the base is not itself
   * registered.
   */
  type StateTextureId<T = TextureId> = T extends `${infer Base}_d` ? Base : never
  /** Any id a layout may name: a plain crop, or the base of a frame or state set. */
  type TextureRef = TextureId | FrameTextureId | StateTextureId

  /**
   * Every xml element a config module may author. Declared once here and attached to both JSX
   * namespaces below, because which one TypeScript consults depends on the JSX runtime: the
   * automatic runtime (`"jsx": "react-jsx"`) reads `React.JSX`, while the classic runtime —
   * still the default in editors and bundlers that see no `jsx` setting — reads the global
   * `JSX`. Declaring only one makes every element resolve or fail based on a compiler flag.
   */
  interface Elements extends Record<string, UI.Window & React.PropsWithChildren> {
    auto_frameline: UI.Window & React.PropsWithChildren & { vertical: 0 | 1 }
    text: UI.Window & React.PropsWithChildren & Partial<Text>
    listbox: UI.Texture &
      React.PropsWithChildren & {
        can_select: 0 | 1
        always_show_scroll: 0 | 1
      }
    progress: UI.Texture &
      React.PropsWithChildren & {
        sector_count: number
        clockwise: number
      }
    scrollbar: UI.Texture & React.PropsWithChildren & UI.Indent
    /**
     * Root of a `ui\textures_descr` file. The engine parses every `*.xml` in that directory
     * on startup (`CMainMenu::ReadTextureInfo`), so such a file needs no registration.
     */
    w: React.PropsWithChildren
    /** The atlas the enclosed crops are taken from, e.g. `ui\ui_icon_equipment`. */
    file: React.PropsWithChildren & { name: string }
    /**
     * Two unrelated elements share this tag. In a `ui\textures_descr` file it declares a named
     * crop of the enclosing `file`'s atlas, and every field is required — the engine reads all
     * four when registering the id. In a `configs/ui` layout it instead names the texture a
     * control draws, as element text: `<texture>ui_inGame2_pda_map_devider</texture>`.
     *
     * `React.Attributes` is mixed into the first form so a list of crops can be rendered with
     * `key`, which the renderer consumes and never emits.
     */
    texture: (UI.TextureRect & React.Attributes) | (Partial<UI.Texture> & React.PropsWithChildren)
    /**
     * A control's texture per state: enabled, touched (pressed), highlighted, disabled.
     *
     * These, and the layout form of `texture` above, take their id as element text, which
     * TypeScript can only check as `string` — a union of literals is rejected outright as a
     * `children` type. Write them as the `Texture` component exported from `anomaly-packer`
     * instead, which takes the id as a prop and so keeps {@link TextureId} in force.
     */
    texture_e: React.PropsWithChildren
    texture_t: React.PropsWithChildren
    texture_h: React.PropsWithChildren
    texture_d: React.PropsWithChildren
    /** Text colour per state, holding one `t`/`d`/`e`/`h` child per state. */
    text_color: React.PropsWithChildren
  }
}
declare namespace React.JSX {
  interface IntrinsicElements extends UI.Elements {}
}
declare namespace JSX {
  interface IntrinsicElements extends UI.Elements {}
}
