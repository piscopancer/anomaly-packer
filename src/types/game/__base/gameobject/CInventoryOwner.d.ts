declare class CInventoryOwner {
  constructor()
  IconName(): string
  get_money(): number
  EnableTalk(): void
  DisableTalk(): void
  IsTalkEnabled(): boolean
  EnableTrade(): void
  DisableTrade(): void
  IsTradeEnabled(): boolean
  EnableInvUpgrade(): void
  DisableInvUpgrade(): void
  IsInvUpgradeEnabled(): boolean
  GetTalkPartner(): CInventoryOwner
  /** @returns talk was offered */
  OfferTalk(talk_partner: CInventoryOwner): boolean
  StartTalk(talk_partner: CInventoryOwner, start_trade?: boolean): void
  StopTalk(): void
  IsTalking(): boolean
  deadbody_can_take(can: boolean): void
  deadbody_can_take_status(): boolean
  deadbody_closed(closed: boolean): void
  deadbody_closed_status(): boolean
}
