/** Campfire zone (luabind class `CZoneCampfire`), obtained via `game_object:get_campfire()`. */
declare class CZoneCampfire extends CGameObjectBase {
  constructor()
  turn_on(): void
  turn_off(): void
  is_on(): boolean
}
