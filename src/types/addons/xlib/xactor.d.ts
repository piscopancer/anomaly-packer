// AUTO-GENERATED addon pack for `xlib` by `anomaly-packer gen-addon`. Lua API of xactor.script.
// Refine `TODO` (= any) by hand where the mod gave no type.

/** @noSelf */
declare const xactor: {
  /**
   * Give info portion to actor
   * Wraps db.actor:give_info_portion with nil guard on info_id and db.actor (NULL during boot/transitions)
   * @safety SAFE - nil-guarded on actor and info_id; engine smart_casts to CInventoryOwner before TransferInfo
   * @cost O(1) | 1 luabind heavy (give_info_portion: smart_cast + NET_Packet GE_INFO_TRANSFER w_u16+w_stringZ+w_u8, EventSend, then CInfoPortion::Load + OnReceiveInfo)
   * @src xray/xrGame/script_game_object_inventory_owner.cpp(69), xray/xrGame/inventory_owner_info.cpp(96)
   * @param info_id Info portion ID
   * @returns Success (false when actor or info_id is nil)
   */
  give_info(info_id: string): boolean
}
