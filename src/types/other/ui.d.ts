type Align = 't' | 'r' | 'b' | 'l' | 'c'
type Texture = Partial<{
  x: number
  y: number
  width: number
  height: number
  stretch: 0 | 1
}>
type SectionProperty = Suggest<'inv_name' | 'inv_name_short'>
declare namespace JSX {
  interface IntrinsicElements {
    auto_frameline: Texture & { vertical: 0 | 1 }
    article_list: Texture
    category_list: Texture
    description: Texture
    texture: React.PropsWithChildren & React.Attributes & Texture
    text: Texture &
      Partial<{
        r: number
        g: number
        b: number
        align: Align
        vert_align: Align
        font: string
        color: string
        complex_mode: 0 | 1
      }>
    caption: Texture
    text_order: Texture
    frame1: Texture
    frame2: Texture
    auto_check: Texture
    image_checkbox: Texture
    information: Texture
    information2: Texture
    listbox: Texture & {
      can_select: 0 | 1
      always_show_scroll: 0 | 1
      stretch: 0 | 1
    }
    show_all: Texture
    background: Texture
    w: { children: Element | Element[] }
    progress: {
      children: Element
      sector_count: number
      clockwise: number
    } & Texture
    main_wnd: Texture
    message_checkbox: Texture
    scrollbar: Texture & {
      right_ident: number
      left_ident: number
      top_indent: number
      bottom_indent: number
    }
  }
}
