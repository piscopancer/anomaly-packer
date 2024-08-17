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
declare namespace React.JSX {
  interface IntrinsicElements extends Record<string, UI.Texture & React.PropsWithChildren> {
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
  }
}
