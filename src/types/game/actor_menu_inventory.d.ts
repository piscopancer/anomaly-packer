/** @noSelfInFile */

declare namespace actor_menu_inventory {
  export function CInventory_ItemAvailableToTrade(npc: CGameObject, item: CGameObject): boolean
  export function CUIActorMenu_DonateCurrentItem(npc: CGameObject, item: CGameObject): boolean
  export function CUIActorMenu_OnHideActorMenu(): void
  export function CUIActorMenu_OnItemDropped(itm1: CGameObject, itm2: CGameObject, from_slot: number, to_slot: number): boolean
  export function CUIActorMenu_OnItemFocusLost(itm: CGameObject): void
  export function CUIActorMenu_OnItemFocusReceive(itm: CGameObject): void
  export function CUIActorMenu_OnMode_DeadBodySearch(obj: CGameObject): boolean
  export function CUIActorMenu_OnMode_Inventory(): boolean
  export function CUIActorMenu_OnMode_Trade(obj: CGameObject): boolean
  export function CUIActorMenu_OnMode_Upgrade(obj: CGameObject): boolean
}
