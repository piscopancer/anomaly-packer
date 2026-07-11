/** @noSelfInFile */

declare namespace xr_state {
  export const sit: number
  export const sit_wait: number
  export const sleep: number
  export const stand: number
  export function anim_update(type: TODO, npc: TODO): TODO
  export function change_state(npc: TODO, id: TODO): TODO
  export function finish_state(npc: TODO): TODO
}

/** @customConstructor body_state */
declare class body_state {
  constructor(npc: TODO)
  finish_state(): TODO
  set_state(id: TODO): boolean
  transanim(object: TODO, target_state: TODO): void
  weapon_slot(): number
  anim_update(type: TODO): TODO
}
