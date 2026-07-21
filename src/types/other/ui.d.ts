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
}
declare namespace UI {
  /**
   * Every xml element a config module may author. Declared once here and attached to both JSX
   * namespaces below, because which one TypeScript consults depends on the JSX runtime: the
   * automatic runtime (`"jsx": "react-jsx"`) reads `React.JSX`, while the classic runtime —
   * still the default in editors and bundlers that see no `jsx` setting — reads the global
   * `JSX`. Declaring only one makes every element resolve or fail based on a compiler flag.
   */
  interface Elements extends Record<string, UI.Texture & React.PropsWithChildren> {
    auto_frameline: UI.Texture & React.PropsWithChildren & { vertical: 0 | 1 }
    text: UI.Texture & React.PropsWithChildren & Text
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
     * A named crop of the enclosing `file`'s atlas. `React.Attributes` is mixed in so a list
     * of crops can be rendered with `key`, which the renderer consumes and never emits.
     */
    texture: UI.TextureRect & React.Attributes
  }
}
declare namespace React.JSX {
  interface IntrinsicElements extends UI.Elements {}
}
declare namespace JSX {
  interface IntrinsicElements extends UI.Elements {}
}
