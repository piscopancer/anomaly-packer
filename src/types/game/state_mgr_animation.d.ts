/** @noSelfInFile */

/** @customConstructor act_state_mgr_animation_start */
declare class act_state_mgr_animation_start extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_animation_stop */
declare class act_state_mgr_animation_stop extends action_base {
  constructor(name: string, st: AnyTable)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor animation */
declare class animation {
  constructor(npc: CGameObject, mgr: AnyTable, anim_path: AnyTable)
  set_control(): void
  update_anim(): void
  set_state(new_state: string, fast_set: boolean): void
  select_anim(): LuaMultiReturn<[any, any]>
  weapon_slot(): number
  anim_for_slot(slot: number, t: AnyTable): any
  select_rnd(anim_state: AnyTable, wpn_slot: number, must_play: boolean): any
  add_anim(anm: string, state: AnyTable): void
  animation_callback(skip_multianim_check: boolean): boolean
  process_special_action(action_table: AnyTable): void
}

/** @customConstructor eva_state_mgr_animation */
declare class eva_state_mgr_animation extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_locked */
declare class eva_state_mgr_animation_locked extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_none_now */
declare class eva_state_mgr_animation_none_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_play_now */
declare class eva_state_mgr_animation_play_now extends property_evaluator {
  constructor(name: string, st: AnyTable)
  evaluate(): boolean
}
