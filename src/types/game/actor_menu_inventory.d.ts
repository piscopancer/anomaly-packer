/** @noSelfInFile */

declare namespace actor_menu_inventory {
  export function CInventory_ItemAvailableToTrade(npc: TODO, item: TODO): boolean
  export function CUIActorMenu_DonateCurrentItem(npc: TODO, item: TODO): boolean
  export function CUIActorMenu_OnHideActorMenu(): void
  export function CUIActorMenu_OnItemDropped(itm1: TODO, itm2: TODO, from_slot: TODO, to_slot: TODO): boolean
  export function CUIActorMenu_OnItemFocusLost(itm: TODO): void
  export function CUIActorMenu_OnItemFocusReceive(itm: TODO): void
  export function CUIActorMenu_OnMode_DeadBodySearch(obj: TODO): TODO
  export function CUIActorMenu_OnMode_Inventory(): TODO
  export function CUIActorMenu_OnMode_Trade(obj: TODO): TODO
  export function CUIActorMenu_OnMode_Upgrade(obj: TODO): TODO
}
