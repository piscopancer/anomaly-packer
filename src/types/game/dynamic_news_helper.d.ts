/** @noSelfInFile */

declare namespace dynamic_news_helper {
  export const level_points: AnyTable
  export function GetColor(num: number): string
  export function GetCommunityDescription(obj: CGameObject, index: number): string
  export function GetFaction(key1: string, key2: string): string
  export function GetMonsterDescription(obj: CGameObject, index: number, sec: string, cls: number): string
  export function GetMutant(key1: string, key2: string): string
  export function GetPointDescription(obj: CGameObject): string
  export function GetTimePharseAsString(): string
  export function GetTimeScope(EventDate: number, scope: string): number
  export function GetTimeString(TimeDiffHrs: number, AccuracyTier: number): string | false
  export function GetWeaponClass(obj: CGameObject): number
  export function GetWeaponDescription(obj: CGameObject, index: number): string
  export function IsDateCloseBy(EventDate: number, scope: string, count: number): boolean
  export function IsInvalidMap(map: string): boolean
  export function list_actor_squad_by_id(): AnyTable
  export function PickDirection(): string
  export function PickFaction(only_natural: boolean): string
  export function PickMap(excluded_map: string): string
  export function PickMutant(tier: number): string
  export function send_tip(msg: string, header: string, timeout: number, showtime: number, sender: string, sound: string, icon_by: string): boolean
}
