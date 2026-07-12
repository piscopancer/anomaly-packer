declare class CActor extends CGameObjectBase {
  constructor()
  conditions(): CActorCondition
  inventory_disabled(): boolean
  set_inventory_disabled(disabled: boolean): void
}
