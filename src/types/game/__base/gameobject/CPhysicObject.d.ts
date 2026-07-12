/** Physics object (luabind class `CPhysicObject`), obtained via `game_object:get_physics_object()`. */
declare class CPhysicObject extends CGameObjectBase {
  constructor()
  run_anim_forward(): void
  run_anim_back(): void
  stop_anim(): void
  anim_time_get(): number
  anim_time_set(time: number): void
  play_bones_sound(): void
  stop_bones_sound(): void
  set_door_ignore_dynamics(): void
  unset_door_ignore_dynamics(): void
}
