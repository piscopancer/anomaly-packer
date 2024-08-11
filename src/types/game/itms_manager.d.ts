/** @noSelfInFile */

declare namespace itms_manager {
  export const ini_manager: system_ini
  export const ini_container: system_ini
  export const ini_parts: system_ini
  export const ini_craft: system_ini
  export const ini_death: system_ini
  export const ini_reward: system_ini
  export function relocate_item_to_actor(actor: CGameObject, npc: CGameObject, section: string, count: number): void
}
