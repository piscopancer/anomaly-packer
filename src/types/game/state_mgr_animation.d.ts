/** @noSelfInFile */

/** @customConstructor act_state_mgr_animation_start */
declare class act_state_mgr_animation_start extends action_base {
  constructor(name: TODO, st: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor act_state_mgr_animation_stop */
declare class act_state_mgr_animation_stop extends action_base {
  constructor(name: TODO, st: TODO)
  initialize(): void
  execute(): void
  finalize(): void
}

/** @customConstructor animation */
declare class animation {
  constructor(npc: TODO, mgr: TODO, anim_path: TODO)
  set_control(): void
  update_anim(): void
  set_state(new_state: TODO, fast_set: TODO): void
  select_anim(): TODO
  weapon_slot(): TODO
  anim_for_slot(slot: TODO, t: TODO): TODO
  select_rnd(anim_state: TODO, wpn_slot: TODO, must_play: TODO): TODO
  add_anim(anm: TODO, state: TODO): void
  animation_callback(skip_multianim_check: TODO): boolean
  process_special_action(action_table: TODO): void
}

/** @customConstructor eva_state_mgr_animation */
declare class eva_state_mgr_animation extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_animation_locked */
declare class eva_state_mgr_animation_locked extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): boolean
}

/** @customConstructor eva_state_mgr_animation_none_now */
declare class eva_state_mgr_animation_none_now extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): TODO
}

/** @customConstructor eva_state_mgr_animation_play_now */
declare class eva_state_mgr_animation_play_now extends property_evaluator {
  constructor(name: TODO, st: TODO)
  evaluate(): TODO
}
