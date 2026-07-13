/** @noSelfInFile */

declare namespace txr_paid_companions {
  export const paid_companions: AnyTable
  export function have_guard_money_1(actor: CGameObject, npc: CGameObject): boolean
  export function have_guard_money_2(actor: CGameObject, npc: CGameObject): boolean
  export function is_actor_natural(actor: CGameObject, npc: CGameObject): boolean
  export function is_not_dangerous_map(actor: CGameObject, npc: CGameObject): boolean
  export function is_paid_companion_faction(actor: CGameObject, npc: CGameObject): boolean
  export function is_squad_competent(actor: CGameObject, npc: CGameObject): boolean
  export function is_squad_not_competent(actor: CGameObject, npc: CGameObject): boolean
  export function on_game_start(): void
  export function register_paid_companion(actor: CGameObject, npc: CGameObject): void
  export function st_paid_companion_dialog_text_1(actor: CGameObject, npc: CGameObject): boolean
  export function st_paid_companion_dialog_text_3(actor: CGameObject, npc: CGameObject): boolean
  export function st_paid_companion_dialog_text_4(actor: CGameObject, npc: CGameObject): boolean
  export function take_guard_money_1(actor: CGameObject, npc: CGameObject): boolean
  export function take_guard_money_2(actor: CGameObject, npc: CGameObject): boolean
}
