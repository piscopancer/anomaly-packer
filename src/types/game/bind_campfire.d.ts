/** @noSelfInFile */

declare namespace bind_campfire {
  const campfires_all: Record<
    string,
    {
      campfire?: {
        is_on(): boolean
      }
      object: CGameObject
    }
  >
  export function get_nearby_campfire(dist: number, result: boolean): any
  export function check_no_nearby_campfire(): boolean
  export function turn_off_campfires_by_smart_name(smart_name: string, use_rand: boolean): void
  export function rain_pass(): boolean
  export function use_campfire(actor: CGameObject, zone: CGameObject, p: any[]): void
  export function campfire_go_on(obj: CGameObject, cf: any): void
  export function campfire_go_off(cf: any): void
  export function actor_on_item_use(obj: CGameObject, _: any, cf: any): void
  export function on_game_start(): void
  export function bind(obj: CGameObject): void
}

/** @customConstructor campfire_binder */
declare class campfire_binder extends object_binder {
  constructor(obj: CGameObject)
  reload(section: Section): void
  reinit(): void
  net_spawn(se_abstract: CseAbstract): boolean
  net_destroy(se_abstract: CseAbstract): void
  update(delta: number): void
  use_campfire(): void
}
