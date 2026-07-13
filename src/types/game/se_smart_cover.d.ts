/** @noSelfInFile */

declare namespace se_smart_cover {
  export const registered_smartcovers: AnyTable
  export const registered_smartcovers_by_lv_id: AnyTable
}

/** @customConstructor se_smart_cover */
declare class se_smart_cover extends cse_smart_cover {
  constructor(section: string)
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: number): void
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  update(): void
  FillProps(pref: string, items: AnyTable): void
}
