/** Hanging lamp (luabind class `hanging_lamp`, C++ `CHangingLamp`). */
declare class CHangingLamp extends CGameObjectBase {
  turn_on(): void
  turn_off(): void
  set_color_animator(name: string, flicker: boolean, flicker_chance: number, flicker_delay: number, framerate: number): void
  reset_color_animator(): void
  is_on(): boolean
  is_flickering(): boolean
}
