/** @noSelfInFile */

declare namespace se_smart_cover {
  export const registered_smartcovers: TODO
  export const registered_smartcovers_by_lv_id: TODO
}

/** @customConstructor se_smart_cover */
declare class se_smart_cover extends cse_smart_cover {
  constructor(section: TODO)
  STATE_Write(packet: net_packet): void
  STATE_Read(packet: net_packet, size: TODO): void
  on_before_register(): void
  on_register(): void
  on_unregister(): void
  update(): void
  FillProps(pref: TODO, items: TODO): TODO
}
