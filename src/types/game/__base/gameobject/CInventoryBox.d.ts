declare class CInventoryBox extends CGameObjectBase {
  constructor()
  can_take(): boolean
  set_can_take(can: boolean): void
  set_closed(closed: boolean, reason: string): void
}
