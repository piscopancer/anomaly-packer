/** @noSelfInFile */

declare namespace se_smart_cover {
  export const registered_smartcovers: AnyTable
  export const registered_smartcovers_by_lv_id: AnyTable
}

/** @customConstructor se_smart_cover */
declare class se_smart_cover extends cse_smart_cover {
  last_description: TODO // @generated field — refine type
  loopholes: TODO // @generated field — refine type
  constructor(section: Section)
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  update(): void
  FillProps(pref: string, items: AnyTable): void
}

declare namespace se_smart_cover {
  /** Anomaly `class "se_smart_cover"` is also reachable on the `se_smart_cover` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`se_smart_cover.se_smart_cover.Method = ...`). */
  export const se_smart_cover: se_smart_cover
}
