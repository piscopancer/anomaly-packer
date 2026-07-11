/** @noSelfInFile */

declare namespace dynamic_news_helper {
  export const level_points: TODO
  export function GetColor(num: TODO): string
  export function GetCommunityDescription(obj: CGameObject, index: TODO): string
  export function GetFaction(key1: TODO, key2: TODO): TODO
  export function GetMonsterDescription(obj: TODO, index: TODO, sec: TODO, cls: TODO): string
  export function GetMutant(key1: TODO, key2: TODO): TODO
  export function GetPointDescription(obj: TODO): string
  export function GetTimePharseAsString(): string
  export function GetTimeScope(EventDate: TODO, scope: TODO): number
  export function GetTimeString(TimeDiffHrs: TODO, AccuracyTier: TODO): string | false
  export function GetWeaponClass(obj: CGameObject): number
  export function GetWeaponDescription(obj: TODO, index: TODO): string
  export function IsDateCloseBy(EventDate: TODO, scope: TODO, count: TODO): boolean
  export function IsInvalidMap(map: TODO): boolean
  export function list_actor_squad_by_id(): TODO
  export function PickDirection(): string
  export function PickFaction(only_natural: TODO): string
  export function PickMap(excluded_map: TODO): string
  export function PickMutant(tier: TODO): string
  export function send_tip(msg: TODO, header: TODO, timeout: TODO, showtime: TODO, sender: TODO, sound: TODO, icon_by: TODO): boolean
}
