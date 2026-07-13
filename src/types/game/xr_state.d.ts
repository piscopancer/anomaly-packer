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
  constructor(npc: CGameObject)
  finish_state(): void
  set_state(id: number): boolean
  transanim(object: CGameObject, target_state: string): void
  weapon_slot(): number
  anim_update(type: string): void
}
