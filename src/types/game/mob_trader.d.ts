/** @noSelfInFile */

declare namespace mob_trader {
  export function add_to_binder(npc: CGameObject, ini: system_ini, scheme: string, section: Section, storage: AnyTable): void
  export function set_scheme(npc: CGameObject, ini: system_ini, scheme: string, section: Section): void
}

/** @customConstructor mob_trader */
declare class mob_trader {
  object: TODO // @generated field — refine type
  st: TODO // @generated field — refine type
  constructor(obj: CGameObject, storage: AnyTable)
  reset_scheme(): void
  use_callback(): void
  update(delta: number): void
  select_global_animation(): string
  select_head_animation(): string
  on_global_anim_request(): void
  on_head_anim_request(): void
  on_sound_end(): void
  deactivate(): void
  net_destroy(): void
}

declare namespace mob_trader {
  /** Anomaly `class "mob_trader"` is also reachable on the `mob_trader` script namespace; typed as
   *  the instance so its methods can be captured/overridden (`mob_trader.mob_trader.Method = ...`). */
  export const mob_trader: mob_trader
}
