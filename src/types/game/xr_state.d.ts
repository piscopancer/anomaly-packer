/** @noSelfInFile */

declare namespace xr_state {
  export const sit: number
  export const sit_wait: number
  export const sleep: number
  export const stand: number
  export function anim_update(type: string, npc: CGameObject): void
  export function change_state(npc: CGameObject, id: number): void
  export function finish_state(npc: CGameObject): void
}

/** @customConstructor body_state */
declare class body_state {
  animations: TODO // @generated field — refine type
  current_state: TODO // @generated field — refine type
  ianim: TODO // @generated field — refine type
  npc: TODO // @generated field — refine type
  states: TODO // @generated field — refine type
  tanim: TODO // @generated field — refine type
  target_state: TODO // @generated field — refine type
  constructor(npc: CGameObject)
  finish_state(): void
  set_state(id: number): boolean
  transanim(object: CGameObject, target_state: string): void
  weapon_slot(): number
  anim_update(type: string): void
}

declare namespace xr_state {
  /** Anomaly `class "body_state"` is also reachable on the `xr_state` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`xr_state.body_state.Method = ...`). */
  export const body_state: body_state
}
